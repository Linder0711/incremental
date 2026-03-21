//This is Idle numbers. It's a simple incremental game where you generate cash by owning generators that produce cash at different rates,
// and you can buy more generators to increase your cash generation, as well as automate them to generate cash automatically over time.
//The game state is persisted using localStorage, allowing players to continue their progress across sessions, and it includes features 
// like offline progress calculation and win conditions based on owning a certain number of the highest tier generator.
//to win the game, you need to own 10,000 of the 10s generator, which is the highest tier generator, and each generator has its own cost, 
// generation rate, and automation cost, there is no prestige, the goal is just to reach the win condition and see how many times you can do it, 
// since there are no upgrades or prestige, the game is focused on the core incremental mechanics of buying generators and optimizing cash generation 
// through multipliers and automation.

//work began on March 7th 2026 with a simple button that generates cash, and then I added generators with increasing costs and generation rates

//this is Version 2 of the game. the first version was a very manual and bloated codebase where each generator had its own separate variables and functions, 
// and there was a lot of repeated code for each generator. this was intentional at first to get the basic mechanics working, 
// but it quickly became unmanageable as I added more generators and features,

//currently the code is more structured and modular, with arrays of generator objects and functions that operate on those objects,
// which allows for easier maintenance and scalability as I continue to add features and balance the game. 
//the buy multiple feature is the next major addition I'm working on, which will allow players to purchase multiple generators at once, 
// and this will require some adjustments to the existing code to account for the increased complexity of calculating costs and updating the UI accordingly, 
// but overall the current structure should be able to accommodate this new feature without too much difficulty, and it will enhance the gameplay experience by allowing for faster progression and more strategic purchasing decisions.

//over the next 2 weeks if evolved into this current state. 

//cash and wins, it retrieves the cash and games won from localStorage, 
// or initializes them to 0 if they don't exist.
// this worked before I began implementing the buy multiple feature
let cash = Number(localStorage.getItem("cash")) || 0;
let gameswon = Number(localStorage.getItem("gameswon")) || 0;
let amountToBuy = Number(localStorage.getItem("amountToBuy")) || 1;
//generators. it defines the base properties of each generator 
// and then creates an array of generator objects that include the current state 
// (own, cost, autocost, etc.) retrieved from localStorage or set to default values.
// this worked before I began implementing the buy multiple feature
const baseGenerators = [
  { key: "one", name: "1s", cost: 10, inc: 1, per: 1, autocost: 100, cooldown: 1000, own: 1 },
  { key: "two", name: "2s", cost: 50, inc: 5, per: 6, autocost: 500, cooldown: 2000, own: 0 },
  { key: "three", name: "3s", cost: 250, inc: 25, per: 36, autocost: 2500, cooldown: 3000, own: 0 },
  { key: "four", name: "4s", cost: 1250, inc: 125, per: 216, autocost: 12500, cooldown: 4000, own: 0 },
  { key: "five", name: "5s", cost: 6250, inc: 625, per: 1296, autocost: 62500, cooldown: 5000, own: 0 },
  { key: "six", name: "6s", cost: 31250, inc: 3125, per: 7776, autocost: 312500, cooldown: 6000, own: 0 },
  { key: "seven", name: "7s", cost: 156250, inc: 15625, per: 46656, autocost: 1562500, cooldown: 7000, own: 0 },
  { key: "eight", name: "8s", cost: 781250, inc: 78125, per: 1279936, autocost: 7812500, cooldown: 8000, own: 0 },
  { key: "nine", name: "9s", cost: 3906250, inc: 390625, per: 8679616, autocost: 39062500, cooldown: 9000, own: 0 },
  { key: "ten", name: "10s", cost: 19531250, inc: 1953125, per: 30077696, autocost: 195312500, cooldown: 10000, own: 0 },
];
// This creates the generators array by mapping over the baseGenerators and adding the current state properties,
// which allows the game to persist the state of each generator across sessions using localStorage.
// this worked before I began implementing the buy multiple feature
const generators = baseGenerators.map((base, index) => ({
  ...base,
  const: storedOwn = localStorage.getItem(`${base.key}own`),
  own: storedOwn !== null ? Number(storedOwn) : (index === 0 ? 1 : 0),
  cost: Number(localStorage.getItem(`${base.key}cost`)) || base.cost,
  inc: base.inc,
  per: base.per,
  autocost: Number(localStorage.getItem(`${base.key}autocost`)) || base.autocost,
  cooldownLength: base.cooldown,
  autoactive: Number(localStorage.getItem(`auto${base.key}`)) || 0,
  ready: Number(localStorage.getItem(`${base.key}Ready`)) || 0,
  incmult: 1,
  speedmult: 1
}));  
//max generators. If I want to change the end goal of the game, 
// I can just change this variable and it will automatically adjust the UI and logic accordingly, 
// since all generator-related code references the generators array which is based on the baseGenerators array.
// this worked before I began implementing the buy multiple feature
const maxGenerators = 10001;

//buy multiples. I'm currently trying to add this feature, which allows the player to buy 1, 10, 100, or 1000 generators at a time.
const buymultiple = [
  { key: 1, name: 1, amount: 1, inc: 1 },
  { key: 10, name: 10, amount: 10, inc: 45 },
  { key: 100, name: 100, amount: 100, inc: 4950 },
  { key: 1000, name: 1000, amount: 1000, inc: 499500 }
]

// This function updates the state of the buy multiple buttons based on the player's current ownership of generators,
// disabling the buttons if purchasing that amount would exceed the maximum generator limit.
//I'm currently trying to implement the buy multiple feature
function updateBuyMultipleButtons() {
  buymultiple.forEach(option => {
    option.button.disabled = generators.some(gen => gen.own >= maxGenerators - option.amount);
  });
}
// this is the multipliers array that defines the thresholds and corresponding generation and speed multipliers for each generator,
// which will be applied in the setmultipliers function to enhance the cash generation as players reach certain milestones in their generator ownership.
const multipliers = [
  { threshold: 1000, incmult: 2, speedmult: 1 },
  { threshold: 2000, incmult: 3, speedmult: 1 },
  { threshold: 3000, incmult: 4, speedmult: 1 },
  { threshold: 4000, incmult: 5, speedmult: 1 },
  { threshold: 5000, incmult: 5, speedmult: 0.9 },
  { threshold: 6000, incmult: 5, speedmult: 0.8 },
  { threshold: 7000, incmult: 5, speedmult: 0.7 },
  { threshold: 8000, incmult: 5, speedmult: 0.6 },
  { threshold: 9000, incmult: 5, speedmult: 0.5 },
  { threshold: 10000, incmult: 10, speedmult: 0.5 }
];
//This function sets the income and speed multipliers when generating cash and applying cooldowns
//it works by looking at the owned level of the previous generator.
function setmultipliers() {
  gen.incmult = 1;
  gen.speedmult = 1;
  generators.forEach((gen, index) => {
    if (index === 0) return;
    const prevGen = generators[index - 1];
    multipliers.forEach(mult => {
      if (prevGen.own >= mult.threshold) {
        if (mult.incmult) gen.incmult = mult.incmult;
        if (mult.speedmult) gen.speedmult = mult.speedmult;
      }
    });
  });
}
//This is the main update loop that calls all the necessary functions to keep the UI and game state in sync,
//this is a new function i added today. unsure if it's working.
function update() {
  setmultipliers();
  updateUI();
  updateCooldowns();
  automationTick();  
  updateautos();
  disable1s();
  UpdatelocalStorage();
}
setInterval(update, 100);
//This function saves the current game state to localStorage, including cash, games won, and the state of each generator,
//This is a new function I added today to ensure that all relevant game state is saved whenever an update occurs
//untested
function UpdatelocalStorage() {
  localStorage.setItem("cash", cash);
  localStorage.setItem("gameswon", gameswon);
  generators.forEach((gen) => {
  localStorage.setItem(`${gen.key}own`, gen.own);
  localStorage.setItem(`${gen.key}cost`, gen.cost);
  localStorage.setItem(`${gen.key}Ready`, gen.ready);
  localStorage.setItem(`auto${gen.key}`, gen.autoactive);
  });
}
//UI generation. it creates the HTML structure for each generator row based on the generator properties, 
// including the name, owned count, generate button, buy buttons, and automate button.
//This worked before I began implementing the buy multiple feature
function createGeneratorRow(gen) {
  return `
    <div class="generator-grid">
      <div>${gen.name}</div>
      <div id="${gen.key}own"></div>
      <button id="gen${gen.key}"></button>
      <button id="buy${gen.key}">${gen.cost}</button>
      <button id="auto${gen.key}">${gen.autocost}</button>
    </div>
  `;
}
// it generates the HTML for all generators and inserts it into the generator area of the page.
//this worked before I began implementing the buy multiple feature
const testArea = document.getElementById("generator-area");
testArea.innerHTML = baseGenerators
  .map(gen => createGeneratorRow(gen))
  .join("");
//Generate cash. 
// it checks if the generator is ready and if the player owns any of that generator, 
// then awards cash based on the number owned and the rate, and sets the next ready time based on the cooldown.
//This worked before I began implementing the buy multiple feature
function testGenerator(index) {
  const gen = generators[index];
  const multiplier = gen.incmult || 1;
  const speedMultiplier = gen.speedmult || 1;
  const now = Date.now();
  if (gen.own <= 0) return;
  if (now < gen.ready) return;
  cash += (gen.own * gen.per) * multiplier;
  gen.ready = now + (gen.cooldownLength * speedMultiplier);
}
//this function calculates the cost of buying a specified amount of generators based on the current cost and incremental cost,
// which will be used when implementing the buy multiple feature to determine if the player has enough cash to make the purchase.
function buycostcalculator(index, amount) {
  const gen = generators[index];
  let totalCost = 0;
  for (let i = 0; i < amount; i++) {
    totalCost += gen.cost + (gen.inc * i);
  }
  return totalCost;
}
//Buy multiple generators. it checks if the player has enough cash for the specified amount of generators using the buycostcalculator function,
// and that they don't already own enough of that generator to exceed the max, then deducts the cost, increases the owned count, 
//updates the cost for the next purchase, and saves everything to localStorage.
//This is a new function I'm working on today to implement the buy multiple feature
function buyGenerator(index) {
  const gen = generators[index];
  const amount = amountToBuy || 1;
  const cost = buycostcalculator(index, amount);
  if (cash < cost) return;
  if (gen.own >= maxGenerators - amount) return;
  cash -= cost;
  gen.own += amount;
  gen.cost += gen.inc * amount;
}
//automate generators. it checks if the player has enough cash for the automation and that it's not already active,
// then deducts the cost, activates the automation, and saves everything to localStorage.
//this worked before I began implementing the buy multiple feature
function testAutobuy(index) {
  const gen = generators[index];
  if (gen.autoactive === 1) return;
  if (cash < gen.autocost) return;
  cash -= gen.autocost;
  gen.autoactive = 1;
}
//Cooldowns. it checks the current time against the ready time of each generator 
// and disables the generate buttons accordingly.
//this isn't quite working, since the buttons only update when the update function is called, which is every 100ms, but the cooldowns can be shorter than that, so there may be a delay in the button becoming 
// enabled again after the cooldown expires. I may need to implement a more precise timing mechanism to handle this better. 
function updateCooldowns() {
  const now = Date.now();
  genButtons.forEach((button, index) => {
    button.disabled = now < generators[index].ready;
  });
}
//auto run. it checks if the automation for each generator is active and if so, 
// it calls the testGenerator function for that generator index, allowing them to generate cash automatically.
//this works
function automationTick() {
  generators.forEach((gen, index) => {
    if (gen.autoactive === 1) {
      testGenerator(index);
    }
  });
}
//Disable buttons. it checks if the automation for each generator 
// is active and disables the corresponding automate button to prevent multiple 
// purchases of automation for the same generator.
//this works, eventually i'll remove this.
function updateautos() {
  autoButtons.forEach((button, index) => {
    button.disabled = generators[index].autoactive;
  });
}
//Disable buy buttons. it checks the ownership of each generator and disables the buy button for the first generator if the player owns 10,000 of it,
// and for subsequent generators if the player doesn't own at least 100 of the previous generator or already owns 10,000 of that generator,
// ensuring that players can only purchase generators in a sequential manner and can't exceed the maximum ownership limit.
function disable1s() {
  buyButtons.forEach((button, index) => {
    if (index === 0) {
      button.disabled = generators[index].own === 10000;
    } else {
      button.disabled = generators[index - 1].own < 100 || generators[index].own === 10000;
    }
  });
}
//win game. it checks if the player owns 10,000 of the 10s generator and if so, 
// increments the games won count, saves it to localStorage, and resets the game.
//works. future plan to add something cool like a win message.
function win()  {
 if(generators[9].own <10000) return;
  gameswon += 1;
  update();
  resetGame();
}
setInterval(win, 1000);
// ====DOM elements====
//multiple buy buttons. it retrieves the DOM elements for the buy 1, buy 10, buy 100, and buy 1000 buttons, 
// which will be used to enable/disable them based on the player's ownership of generators.
//this is new today
const buy1El = document.getElementById("buy1");
const buy10El = document.getElementById("buy10");
const buy100El = document.getElementById("buy100");
const buy1000El = document.getElementById("buy1000");

//Cash and wins and reset button
//own, generate, buy 1, buy 10, and automate buttons. it creates arrays of the corresponding DOM elements 
// for each generator based on their keys.
//they worked before I began implementing the buy multiple feature 
const cashEl = document.getElementById("cash");
const gameswonEl = document.getElementById("gameswon");
const reset = document.getElementById("reset");
const ownEls = generators.map(gen =>
  document.getElementById(`${gen.key}own`));
const genEls = generators.map(gen =>
  document.getElementById(`gen${gen.key}`));
const buyEls = generators.map(gen =>
  document.getElementById(`buy${gen.key}`));
const autoactiveEls = generators.map(gen =>
  document.getElementById(`auto${gen.key}`));
// update UI this function is responsible for updating all the relevant UI elements based on the current game state, 
// including cash, games won, generator ownership, generation rates, costs, and automation status.
function updateUI() {
  //cash and wins.
    //own, generate, buy 1, buy 10, and automate - it updates the text content of each corresponding 
  // DOM element based on the current state of the generators.
//this worked before I began implementing the buy multiple feature
  cashEl.textContent = cash.toLocaleString();
  gameswonEl.textContent = gameswon.toLocaleString();
  ownEls.forEach((el, index) => {
  el.textContent = generators[index].own.toLocaleString();}); 
  genEls.forEach((el, index) => {
  el.textContent = (generators[index].per * generators[index].own * generators[index].incmult).toLocaleString();});
  buyEls.forEach((el, index) => {
  el.textContent = buycostcalculator(index, amountToBuy).toLocaleString();});
  autoactiveEls.forEach((el, index) => {
  el.textContent = generators[index].autocost.toLocaleString();});
}
//====Event listeners====
//new buy multiple buttons. it adds click event listeners to each buy multiple button that set the 
// amountToBuy variable and disable the button to indicate the current selection, while enabling the other buttons.
const multipleBuyButtons = buymultiple.map(option =>
  document.getElementById(`buy${option.key}`)
);
//this adds click event listeners to each buy multiple button that set the amountToBuy 
// variable and disable the button to indicate the current selection, while enabling the other buttons.
multipleBuyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    multipleBuyButtons.forEach(btn => btn.disabled = false);
    button.disabled = true;
    amountToBuy = buymultiple[index].amount;
    localStorage.setItem("amountToBuy", amountToBuy);
  });
});

//gen buttons. it adds click event listeners to each generate button that call the testGenerator 
// function with the corresponding index.
//logic too.
//Works
const genButtons = generators.map(gen =>
  document.getElementById(`gen${gen.key}`)
);
genButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    testGenerator(index);
  });
});
//this is the new buy button event listener that will replace the individual buy 1, 
// buy 10, etc. buttons once I implement the buy multiple feature.
const buyButtons = generators.map(gen =>
  document.getElementById(`buy${gen.key}`)
);
buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
  buyGenerator(index);
  });
});
//automate buttons. it adds click event listeners to each automate button that call the testAutobuy 
// function with the corresponding index.
//all ok right here, this works
const autoButtons = generators.map(gen =>
  document.getElementById(`auto${gen.key}`)
);
autoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    testAutobuy(index);
  });
});
// I need to find a way to reset the generators owned. everything else resets finr, 
// but the owned count stays the same, which breaks the game since you can just keep 
// generating cash with the owned generators after resetting.
function resetGame() {
  cash = 0;
  generators.forEach((gen, index) => {
    gen.own = baseGenerators[index].own;
    gen.cost = baseGenerators[index].cost;
    gen.ready = 0;
    gen.autoactive = 0;
    update();
  });
};
//Offline progress - it calculates the time elapsed since the last play and awards 
window.addEventListener("beforeunload", () => {
  localStorage.setItem("lastPlayed", Date.now());
});
// initial UI update
update();
//offline calculation on page load
const lastPlayed = Number(localStorage.getItem("lastPlayed")) || Date.now();
const now = Date.now();
const elapsed = now - lastPlayed;
const secondsAway = elapsed / 1000;
generators.forEach((gen, index) => {
  if (!gen.autoactive) return;
  cash += Math.floor(
    secondsAway * ((gen.own * gen.per) / (index + (gen.cooldownLength / 1000)))
  );
});
update();

