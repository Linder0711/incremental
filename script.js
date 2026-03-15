//cash
let cash = Number(localStorage.getItem("cash")) || 0;
//wins
let gameswon = Number(localStorage.getItem("gameswon")) || 0;
//====numbers====
//how many do we own
let oneown = Number(localStorage.getItem("oneown")) || 1;
let twoown = Number(localStorage.getItem("twoown")) || 0;
let threeown = Number(localStorage.getItem("threeown")) || 0;
let fourown = Number(localStorage.getItem("fourown")) || 0;
let fiveown = Number(localStorage.getItem("fiveown")) || 0;
let sixown = Number(localStorage.getItem("sixown")) || 0;
let sevenown = Number(localStorage.getItem("sevenown")) || 0;
let eightown = Number(localStorage.getItem("eightown")) || 0;
let nineown = Number(localStorage.getItem("nineown")) || 0;
let tenown = Number(localStorage.getItem("tenown")) || 0;
//what is the cost
let onecost = Number(localStorage.getItem("onecost")) || 10;
let twocost = Number(localStorage.getItem("twocost")) || 50;
let threecost = Number(localStorage.getItem("threecost")) || 250;
let fourcost = Number(localStorage.getItem("fourcost")) || 1250;
let fivecost = Number(localStorage.getItem("fivecost")) || 6250;
let sixcost = Number(localStorage.getItem("sixcost")) || 31250;
let sevencost = Number(localStorage.getItem("sevencost")) || 156250;
let eightcost = Number(localStorage.getItem("eightcost")) || 781250;
let ninecost = Number(localStorage.getItem("ninecost")) || 3906250;
let tencost = Number(localStorage.getItem("tencost")) || 19531250;
//what does the cost increase by each time
let oneinc = 1;
let twoinc = 5;
let threeinc = 25;
let fourinc = 125;
let fiveinc = 625;
let sixinc = 3125;
let seveninc = 15625;
let eightinc = 78125;
let nineinc = 390625;
let teninc = 1953125;
//cost of 10
let tenonecost = ((onecost * 10) + (oneinc * 45));
let tentwocost = ((twocost * 10) + (twoinc * 45));
let tenthreecost = ((threecost * 10) + (threeinc * 45));
let tenfourcost = ((fourcost * 10) + (fourinc * 45));
let tenfivecost = ((fivecost * 10) + (fiveinc * 45));
let tensixcost = ((sixcost * 10) + (sixinc * 45));
let tensevencost = ((sevencost * 10) + (seveninc * 45));
let teneightcost = ((eightcost * 10) + (eightinc * 45));
let tenninecost = ((ninecost * 10) + (nineinc * 45));
let tentencost = ((tencost * 10) + (teninc * 45));
//how much do we earn per 1 owned
let oneper = 1;
let twoper = 6;
let threeper = 36;
let fourper = 216;
let fiveper = 1296;
let sixper = 7776;
let sevenper = 146656;
let eightper = 1279936;
let nineper = 8679616;
let tenper = 30077696;
//====auto buttons====
//Is auto generate active
let autoone = Number(localStorage.getItem("autoone")) || 0;
let autotwo = Number(localStorage.getItem("autotwo")) || 0;
let autothree = Number(localStorage.getItem("autothree")) || 0;
let autofour = Number(localStorage.getItem("autofour")) || 0;
let autofive = Number(localStorage.getItem("autofive")) || 0;
let autosix = Number(localStorage.getItem("autosix")) || 0;
let autoseven = Number(localStorage.getItem("autoseven")) || 0;
let autoeight = Number(localStorage.getItem("autoeight")) || 0;
let autonine = Number(localStorage.getItem("autonine")) || 0;
let autoten = Number(localStorage.getItem("autoten")) || 0;
//auto activate cost
let autoonecost = 100
let autotwocost = 500
let autothreecost = 2500
let autofourcost = 12500
let autofivecost = 62500
let autosixcost = 312500
let autosevencost = 1562500
let autoeightcost = 7812500
let autoninecost =  39062500
let autotencost = 195312500
//====Timers====
//timers
let oneReady = Number(localStorage.getItem("oneReady")) || 0;
let twoReady = Number(localStorage.getItem("twoReady")) || 0;
let threeReady = Number(localStorage.getItem("threeReady")) || 0;
let fourReady = Number(localStorage.getItem("fourReady")) || 0;
let fiveReady = Number(localStorage.getItem("fiveReady")) || 0;
let sixReady = Number(localStorage.getItem("sixReady")) || 0;
let sevenReady = Number(localStorage.getItem("sevenReady")) || 0;
let eightReady = Number(localStorage.getItem("eightReady")) || 0;
let nineReady = Number(localStorage.getItem("nineReady")) || 0;
let tenReady = Number(localStorage.getItem("tenReady")) || 0;
//Cooldowns
function updateCooldowns() {
  const now = Date.now();
  genone.disabled = now < oneReady;
  gentwo.disabled = now < twoReady;
  genthree.disabled = now < threeReady;
  genfour.disabled = now < fourReady;
  genfive.disabled = now < fiveReady;
  gensix.disabled = now < sixReady;
  genseven.disabled = now < sevenReady;
  geneight.disabled = now < eightReady;
  gennine.disabled = now < nineReady;
  genten.disabled = now < tenReady;
}
setInterval(updateCooldowns, 100);
//auto run
function automationTick() {
  if (autoone === 1) genone.click();
  if (autotwo === 1) gentwo.click();
  if (autothree === 1) genthree.click();
  if (autofour === 1) genfour.click();
  if (autofive === 1) genfive.click();
  if (autosix === 1) gensix.click();
  if (autoseven === 1) genseven.click();
  if (autoeight === 1) geneight.click();
  if (autonine === 1) gennine.click();
  if (autoten === 1) genten.click();
}
setInterval(automationTick, 100);
//Disable buttons
function updateautos()  {
 autooneactive.disabled = autoone === 1;
 autotwoactive.disabled = autotwo === 1;
 autothreeactive.disabled = autothree === 1;
 autofouractive.disabled = autofour === 1;
 autofiveactive.disabled = autofive === 1;
 autosixactive.disabled = autosix === 1;
 autosevenactive.disabled = autoseven === 1;
 autoeightactive.disabled = autoeight === 1;
 autonineactive.disabled = autonine === 1;
 autotenactive.disabled = autoten === 1;
}
setInterval(updateautos, 100);
//diable buy 1s
function disable1s()  {
 buyone.disabled = oneown === 10000;
 buytwo.disabled = twoown === 10000;
 buythree.disabled = threeown === 10000;
 buyfour.disabled = fourown === 10000;
 buyfive.disabled = fiveown === 10000;
 buysix.disabled = sixown === 10000;
 buyseven.disabled = sevenown === 10000;
 buyeight.disabled = eightown === 10000;
 buynine.disabled = nineown === 10000;
 buyten.disabled = tenown === 10000;
}
setInterval(disable1s, 100);
//disble buy 10s
function disable10s()  {
 buytenone.disabled = oneown >= 9990;
 buytentwo.disabled = twoown >= 9990;
 buytenthree.disabled = threeown >= 9990;
 buytenfour.disabled = fourown >= 9990;
 buytenfive.disabled = fiveown >= 9990;
 buytensix.disabled = sixown >= 9990;
 buytenseven.disabled = sevenown >= 9990;
 buyteneight.disabled = eightown >= 9990;
 buytennine.disabled = nineown >= 9990;
 buytenten.disabled = tenown >= 9990;
}
setInterval(disable10s, 100);
//win game
function win()  {
 if(tenown <10000) return;
  gameswon += 1;
  localStorage.setItem("gameswon", gameswon);
  reset.click();
}
setInterval(win, 1000);

// ====DOM elements====
//Cash
const cashEl = document.getElementById("cash");
//Games won 
const gameswonEl = document.getElementById("gameswon");
//numbers owned
const oneownEl = document.getElementById("oneown");
const twoownEl = document.getElementById("twoown");
const threeownEl = document.getElementById("threeown");
const fourownEl = document.getElementById("fourown");
const fiveownEl = document.getElementById("fiveown");
const sixownEl = document.getElementById("sixown");
const sevenownEl = document.getElementById("sevenown");
const eightownEl = document.getElementById("eightown");
const nineownEl = document.getElementById("nineown");
const tenownEl = document.getElementById("tenown");
//cost for next purchase
const onecostEl = document.getElementById("onecost");
const twocostEl = document.getElementById("twocost");
const threecostEl = document.getElementById("threecost");
const fourcostEl = document.getElementById("fourcost");
const fivecostEl = document.getElementById("fivecost");
const sixcostEl = document.getElementById("sixcost");
const sevencostEl = document.getElementById("sevencost");
const eightcostEl = document.getElementById("eightcost");
const ninecostEl = document.getElementById("ninecost");
const tencostEl = document.getElementById("tencost");
//cost for 10
const tenonecostEl = document.getElementById("tenonecost");
const tentwocostEl = document.getElementById("tentwocost");
const tenthreecostEl = document.getElementById("tenthreecost");
const tenfourcostEl = document.getElementById("tenfourcost");
const tenfivecostEl = document.getElementById("tenfivecost");
const tensixcostEl = document.getElementById("tensixcost");
const tensevencostEl = document.getElementById("tensevencost");
const teneightcostEl = document.getElementById("teneightcost");
const tenninecostEl = document.getElementById("tenninecost");
const tentencostEl = document.getElementById("tentencost");
//auto cost
const autooneactive = document.getElementById("autooneactive");
const autotwoactive = document.getElementById("autotwoactive");
const autothreeactive = document.getElementById("autothreeactive");
const autofouractive = document.getElementById("autofouractive");
const autofiveactive = document.getElementById("autofiveactive");
const autosixactive = document.getElementById("autosixactive");
const autosevenactive = document.getElementById("autosevenactive");
const autoeightactive = document.getElementById("autoeightactive");
const autonineactive = document.getElementById("autonineactive");
const autotenactive = document.getElementById("autotenactive");
//generate button
const genone = document.getElementById("genone");
const gentwo = document.getElementById("gentwo");
const genthree = document.getElementById("genthree");
const genfour = document.getElementById("genfour");
const genfive = document.getElementById("genfive");
const gensix = document.getElementById("gensix");
const genseven = document.getElementById("genseven");
const geneight = document.getElementById("geneight");
const gennine = document.getElementById("gennine");
const genten = document.getElementById("genten");
//buy button
const buyone = document.getElementById("buyone");
const buytwo = document.getElementById("buytwo");
const buythree = document.getElementById("buythree");
const buyfour = document.getElementById("buyfour");
const buyfive = document.getElementById("buyfive");
const buysix = document.getElementById("buysix");
const buyseven = document.getElementById("buyseven");
const buyeight = document.getElementById("buyeight");
const buynine = document.getElementById("buynine");
const buyten = document.getElementById("buyten");
//buy 10 button
const buytenone = document.getElementById("buytenone");
const buytentwo = document.getElementById("buytentwo");
const buytenthree = document.getElementById("buytenthree");
const buytenfour = document.getElementById("buytenfour");
const buytenfive = document.getElementById("buytenfive");
const buytensix = document.getElementById("buytensix");
const buytenseven = document.getElementById("buytenseven");
const buyteneight = document.getElementById("buyteneight");
const buytennine = document.getElementById("buytennine");
const buytenten = document.getElementById("buytenten");
//reset button
const reset = document.getElementById("reset");

// update UI
function updateUI() {
  cashEl.textContent = cash.toLocaleString();
  gameswonEl.textContent = gameswon.toLocaleString();
  //own
  oneownEl.textContent = oneown.toLocaleString();
  twoownEl.textContent = twoown.toLocaleString();
  threeownEl.textContent = threeown.toLocaleString();
  fourownEl.textContent = fourown.toLocaleString();
  fiveownEl.textContent = fiveown.toLocaleString();
  sixownEl.textContent = sixown.toLocaleString();
  sevenownEl.textContent = sevenown.toLocaleString();
  eightownEl.textContent = eightown.toLocaleString();
  nineownEl.textContent = nineown.toLocaleString();
  tenownEl.textContent = tenown.toLocaleString();
  //button labels
  //generate
  genone.textContent = (oneper * oneown).toLocaleString();
  gentwo.textContent = (twoper * twoown).toLocaleString();
  genthree.textContent = (threeper * threeown).toLocaleString();
  genfour.textContent = (fourper * fourown).toLocaleString();
  genfive.textContent = (fiveper * fiveown).toLocaleString();
  gensix.textContent = (sixper * sixown).toLocaleString();
  genseven.textContent = (sevenper * sevenown).toLocaleString();
  geneight.textContent = (eightper * eightown).toLocaleString();
  gennine.textContent = (nineper * nineown).toLocaleString();
  genten.textContent = (tenper * tenown).toLocaleString();
//buy
  buyone.textContent = onecost.toLocaleString();
  buytwo.textContent = twocost.toLocaleString();
  buythree.textContent = threecost.toLocaleString();
  buyfour.textContent = fourcost.toLocaleString();
  buyfive.textContent = fivecost.toLocaleString();
  buysix.textContent = sixcost.toLocaleString();
  buyseven.textContent = sevencost.toLocaleString();
  buyeight.textContent = eightcost.toLocaleString();
  buynine.textContent = ninecost.toLocaleString();
  buyten.textContent = tencost.toLocaleString();
//buy 10
  buytenone.textContent = ((onecost * 10) + (oneinc * 45)).toLocaleString();
  buytentwo.textContent = ((twocost * 10) + (twoinc * 45)).toLocaleString();
  buytenthree.textContent = ((threecost * 10) + (threeinc * 45)).toLocaleString();
  buytenfour.textContent = ((fourcost * 10) + (fourinc * 45)).toLocaleString();
  buytenfive.textContent = ((fivecost * 10) + (fiveinc * 45)).toLocaleString();
  buytensix.textContent = ((sixcost * 10) + (sixinc * 45)).toLocaleString();
  buytenseven.textContent = ((sevencost * 10) + (seveninc * 45)).toLocaleString();
  buyteneight.textContent = ((eightcost * 10) + (seveninc * 45)).toLocaleString();
  buytennine.textContent = ((ninecost * 10) + (nineinc * 45)).toLocaleString();
  buytenten.textContent = ((tencost * 10) + (teninc * 45)).toLocaleString();
//auto
  autooneactive.textContent = autoonecost.toLocaleString();
  autotwoactive.textContent = autotwocost.toLocaleString();
  autothreeactive.textContent = autothreecost.toLocaleString();
  autofouractive.textContent = autofourcost.toLocaleString();
  autofiveactive.textContent = autofivecost.toLocaleString();
  autosixactive.textContent = autosixcost.toLocaleString();
  autosevenactive.textContent = autosevencost.toLocaleString();
  autoeightactive.textContent = autoeightcost.toLocaleString();
  autonineactive.textContent = autoninecost.toLocaleString();
  autotenactive.textContent = autotencost.toLocaleString();
}
//====GENERATE BUTTONS====
// generate cash 1
genone.addEventListener("click", () => {
  const now = Date.now();
  if (oneown <= 0) return;
  if (now < oneReady) return;
  cash += oneown * oneper;
  localStorage.setItem("cash", cash);
  oneReady = now + 1000;
  localStorage.setItem("oneReady", oneReady);
  updateUI();
});
// generate cash 2
gentwo.addEventListener("click", () => {
  const now = Date.now();
  if (twoown <= 0) return;
  if (now < twoReady) return;
  cash += twoown * twoper;
  localStorage.setItem("cash", cash);
  twoReady = now + 2000;
  localStorage.setItem("twoReady", twoReady);
  updateUI();
});
// generate cash 3
genthree.addEventListener("click", () => {
  const now = Date.now();
  if (threeown <= 0) return;
  if (now < threeReady) return;
  cash += threeown * threeper;
  localStorage.setItem("cash", cash);
  threeReady = now + 3000;
  localStorage.setItem("threeReady", threeReady);
  updateUI();
});
// generate cash 4
genfour.addEventListener("click", () => {
  const now = Date.now();
  if (fourown <= 0) return;
  if (now < fourReady) return;
  cash += fourown * fourper;
  localStorage.setItem("cash", cash);
  fourReady = now + 4000;
  localStorage.setItem("fourReady", fourReady);
  updateUI();
});
// generate cash 5
genfive.addEventListener("click", () => {
  const now = Date.now();
  if (fiveown <= 0) return;
  if (now < fiveReady) return;
  cash += fiveown * fiveper;
  localStorage.setItem("cash", cash);
  fiveReady = now + 5000;
  localStorage.setItem("fiveReady", fiveReady);
  updateUI();
});
// generate cash 6
gensix.addEventListener("click", () => {
  const now = Date.now();
  if (sixown <= 0) return;
  if (now < sixReady) return;
  cash += sixown * sixper;
  localStorage.setItem("cash", cash);
  sixReady = now + 6000;
  localStorage.setItem("sixReady", sixReady);
  updateUI();
});
// generate cash 7
genseven.addEventListener("click", () => {
  const now = Date.now();
  if (sevenown <= 0) return;
  if (now < sevenReady) return;
  cash += sevenown * sevenper;
  localStorage.setItem("cash", cash);
  sevenReady = now + 7000;
  localStorage.setItem("sevenReady", sevenReady);
  updateUI();
});
// generate cash 8
geneight.addEventListener("click", () => {
  const now = Date.now();
  if (eightown <= 0) return;
  if (now < eightReady) return;
  cash += eightown * eightper;
  localStorage.setItem("cash", cash);
  eightReady = now + 8000;
  localStorage.setItem("eightReady", eightReady);
  updateUI();
});
// generate cash 9
gennine.addEventListener("click", () => {
   const now = Date.now();
  if (nineown <= 0) return;
  if (now < nineReady) return;
  cash += nineown * nineper;
  localStorage.setItem("cash", cash);
  nineReady = now + 9000;
  localStorage.setItem("nineReady", nineReady);
  updateUI();
});
// generate cash 10
genten.addEventListener("click", () => {
   const now = Date.now();
  if (tenown <= 0) return;
  if (now < tenReady) return;
  cash += tenown * tenper;
  localStorage.setItem("cash", cash);
  tenReady = now + 10000;
  localStorage.setItem("tenReady", tenReady);
  updateUI();
});

//====BUY BUTTONS====
// buy 1 generator
buyone.addEventListener("click", () => {
  if (cash < onecost) return;
  if (oneown === 10000) return;
  cash -= onecost;
  oneown += 1;
  onecost += oneinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("oneown", oneown);
  localStorage.setItem("onecost", onecost);  
  updateUI();
});
// buy 2 generator
buytwo.addEventListener("click", () => {
  if (cash < twocost) return;
  if (twoown === 10000) return;
  cash -= twocost;
  twoown += 1;
  twocost += twoinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("twoown", twoown);
  localStorage.setItem("twocost", twocost);
  updateUI();
});
// buy 3 generator
buythree.addEventListener("click", () => {
  if (cash < threecost) return;
  if (threeown === 10000) return;
  cash -= threecost;
  threeown += 1;
  threecost += threeinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("threeown", threeown);
  localStorage.setItem("threecost", threecost);
  updateUI();
});
// buy 4 generator
buyfour.addEventListener("click", () => {
  if (cash < fourcost) return;
  if (fourown === 10000) return;
  cash -= fourcost;
  fourown += 1;
  fourcost += fourinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("fourown", fourown);
  localStorage.setItem("fourcost", fourcost);
  updateUI();
});
// buy 5 generator
buyfive.addEventListener("click", () => {
  if (cash < fivecost) return;
  if (fiveown === 10000) return;
  cash -= fivecost;
  fiveown += 1;
  fivecost += fiveinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("fiveown", fiveown);
  localStorage.setItem("fivecost", fivecost);
  updateUI();
});
// buy 6 generator
buysix.addEventListener("click", () => {
  if (cash < sixcost) return;
  if (sixown === 10000) return;
  cash -= sixcost;
  sixown += 1;
  sixcost += sixinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("sixown", sixown);
  localStorage.setItem("sixcost", sixcost);
  updateUI();
});
// buy 7 generator
buyseven.addEventListener("click", () => {
  if (cash < sevencost) return;
  if (sevenown === 10000) return;
  cash -= sevencost;
  sevenown += 1;
  sevencost += seveninc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("sevenown", sevenown);
  localStorage.setItem("sevencost", sevencost);
  updateUI();
});
// buy 8 generator
buyeight.addEventListener("click", () => {
  if (cash < eightcost) return;
  if (eightown === 10000) return;
  cash -= eightcost;
  eightown += 1;
  eightcost += eightinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("eightown", eightown);
  localStorage.setItem("eightcost", eightcost);
  updateUI();
});
// buy 9 generator
buynine.addEventListener("click", () => {
  if (cash < ninecost) return;
  if (nineown === 10000) return;
  cash -= ninecost;
  nineown += 1;
  ninecost += nineinc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("nineown", nineown);
  localStorage.setItem("ninecost", ninecost);
  updateUI();
});
// buy 10 generator
buyten.addEventListener("click", () => {
  if (cash < tencost) return;
  if (tenown === 10000) return;
  cash -= tencost;
  tenown += 1;
  tencost += teninc;
  localStorage.setItem("cash", cash);
  localStorage.setItem("tenown", tenown);
  localStorage.setItem("tencost", tencost);
  updateUI();
});
//====buy 10s====
//buy 10 1s
buytenone.addEventListener("click", () => {
  const tenonecost = ((onecost * 10) + (oneinc * 45));
  if (cash < tenonecost) return;
  if (oneown >= 9990) return;
  cash -= tenonecost;
  oneown += 10;
  onecost += (oneinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("oneown", oneown);
  localStorage.setItem("onecost", onecost);  
  updateUI();
});
//buy 10 2s
buytentwo.addEventListener("click", () => {
  const tentwocost = ((twocost * 10) + (twoinc * 45));
  if (cash < tentwocost) return;
  if (twoown >= 9990) return;
  cash -= tentwocost;
  twoown += 10;
  twocost += (twoinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("twoown", twoown);
  localStorage.setItem("twocost", twocost);  
  updateUI();
});
//buy 10 3s
buytenthree.addEventListener("click", () => {
  const tenthreecost = ((threecost * 10) + (threeinc * 45));
  if (cash < tenthreecost) return;
  if (threeown >= 9990) return;
  cash -= tenthreecost;
  threeown += 10;
  threecost += (threeinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("threeown", threeown);
  localStorage.setItem("threecost", threecost);  
  updateUI();
});
//buy 10 4s
buytenfour.addEventListener("click", () => {
  const tenfourcost = ((fourcost * 10) + (fourinc * 45));
  if (cash < tenfourcost) return;
  if (fourown >= 9990) return;
  cash -= tenfourcost;
  fourown += 10;
  fourcost += (fourinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("fourown", fourown);
  localStorage.setItem("fourcost", fourcost);  
  updateUI();
});
//buy 10 5s
buytenfive.addEventListener("click", () => {
  const tenfivecost = ((fivecost * 10) + (fiveinc * 45));
  if (cash < tenfivecost) return;
  if (fiveown >= 9990) return;
  cash -= tenfivecost;
  fiveown += 10;
  fivecost += (fiveinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("fiveown", fiveown);
  localStorage.setItem("fivecost", fivecost);  
  updateUI();
});
//buy 10 6s
buytensix.addEventListener("click", () => {
  const tensixcost = ((sixcost * 10) + (sixinc * 45));
  if (cash < tensixcost) return;
  if (sixown >= 9990) return;
  cash -= tensixcost;
  sixown += 10;
  sixcost += (sixinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("sixown", sixown);
  localStorage.setItem("sixcost", sixcost);  
  updateUI();
});
//buy 10 7s
buytenseven.addEventListener("click", () => {
  const tensevencost = ((sevencost * 10) + (seveninc * 45));
  if (cash < tensevencost) return;
  if (sevenown >= 9990) return;
  cash -= tensevencost;
  sevenown += 10;
  sevencost += (seveninc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("sevenown", sevenown);
  localStorage.setItem("sevencost", sevencost);  
  updateUI();
});
//buy 10 8s
buyteneight.addEventListener("click", () => {
  const teneightcost = ((eightcost * 10) + (eightinc * 45));
  if (cash < teneightcost) return;
  if (eightown >= 9990) return;
  cash -= teneightcost;
  eightown += 10;
  eightcost += (eightinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("eightown", eightown);
  localStorage.setItem("eightcost", eightcost);  
  updateUI();
});
//buy 10 9s
buytennine.addEventListener("click", () => {
  const tenninecost = ((ninecost * 10) + (nineinc * 45));
  if (cash < tenninecost) return;
  if (nineown >= 9990) return;
  cash -= tenninecost;
  nineown += 10;
  ninecost += (nineinc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("nineown", nineown);
  localStorage.setItem("ninecost", ninecost);  
  updateUI();
});
//buy 10 10s
buytenten.addEventListener("click", () => {
  const tentencost = ((tencost * 10) + (teninc * 45));
  if (cash < tentencost) return;
  if (tenown >= 9990) return;
  cash -= tentencost;
  tenown += 10;
  tencost += (teninc *10);
  localStorage.setItem("cash", cash);
  localStorage.setItem("tenown", tenown);
  localStorage.setItem("tencost", tencost);  
  updateUI();
});

//====Automate buttons====
//1
autooneactive.addEventListener("click", () => {
  if (autoone ===1 ) return;
  if (cash < autoonecost) return;
  cash -= autoonecost;
  autoone = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autoone", autoone);
  updateUI();
});
//2
autotwoactive.addEventListener("click", () => {
  if (autotwo ===1 ) return;
  if (cash < autotwocost) return;
  cash -= autotwocost;
  autotwo = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autotwo", autotwo);
  updateUI();
});
//3
autothreeactive.addEventListener("click", () => {
  if (autothree ===1 ) return;
  if (cash < autothreecost) return;
  cash -= autothreecost;
  autothree = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autothree", autothree);
  updateUI();
});
//4
autofouractive.addEventListener("click", () => {
  if (autofour ===1 ) return;
  if (cash < autofourcost) return;
  cash -= autofourcost;
  autofour = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autofour", autofour);
  updateUI();
});
//5
autofiveactive.addEventListener("click", () => {
  if (autofive ===1 ) return;
  if (cash < autofivecost) return;
  cash -= autofivecost;
  autofive = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autofive", autofive);
  updateUI();
});
//6
autosixactive.addEventListener("click", () => {
  if (autosix ===1 ) return;
  if (cash < autosixcost) return;
  cash -= autosixcost;
  autosix = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autosix", autosix);
  updateUI();
});
//7
autosevenactive.addEventListener("click", () => {
  if (autoseven ===1 ) return;
  if (cash < autosevencost) return;
  cash -= autosevencost;
  autoseven = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autoseven", autoseven);
  updateUI();
});
//8
autoeightactive.addEventListener("click", () => {
  if (autoeight ===1 ) return;
  if (cash < autoeightcost) return;
  cash -= autoeightcost;
  autoeight = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autoeight", autoeight);
  updateUI();
});
//9
autonineactive.addEventListener("click", () => {
  if (autonine ===1 ) return;
  if (cash < autoninecost) return;
  cash -= autoninecost;
  autonine = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autonine", autonine);
  updateUI();
});
//10
autotenactive.addEventListener("click", () => {
  if (autoten ===1 ) return;
  if (cash < autotencost) return;
  cash -= autotencost;
  autoten = 1;
  localStorage.setItem("cash", cash);
  localStorage.setItem("autoten", autoten);
  updateUI();
});
//====Auto running====
//1

// reset
reset.addEventListener("click", () => {
  cash = 0;
  //own
  oneown = 1;
  twoown = 0;
  threeown = 0;
  fourown = 0;
  fiveown = 0;
  sixown = 0;
  sevenown = 0;
  eightown = 0;
  nineown = 0;
  tenown = 0;
  //cost
  onecost = 10;
  twocost = 50;
  threecost = 250;
  fourcost = 1250;
  fivecost = 6250;
  sixcost = 31250;
  sevencost = 156250;
  eightcost = 781250;
  ninecost = 3906250;
  tencost = 19531250;
  //timers
  oneReady = 0;
  twoReady = 0;
  threeReady = 0;
  fourReady = 0;
  fiveReady = 0;
  sixReady = 0;
  sevenReady = 0;
  eightReady = 0;
  nineReady = 0;
  tenReady = 0;
  //auto
  autoone = 0;
  autotwo = 0;
  autothree = 0;
  autofour = 0;
  autofive = 0;
  autosix = 0;
  autoseven = 0;
  autoeight = 0;
  autonine = 0;
  autoten = 0;
  //storage
  localStorage.setItem("cash", cash);
  //own
  localStorage.setItem("oneown", oneown);
  localStorage.setItem("twoown", twoown);
  localStorage.setItem("threeown", threeown);
  localStorage.setItem("fourown", fourown);
  localStorage.setItem("fiveown", fiveown);
  localStorage.setItem("sixown", sixown);
  localStorage.setItem("sevenown", sevenown);
  localStorage.setItem("eightown", eightown);
  localStorage.setItem("nineown", nineown);
  localStorage.setItem("tenown", tenown);
  //cost
  localStorage.setItem("onecost", onecost);
  localStorage.setItem("twocost", twocost);
  localStorage.setItem("threecost", threecost);
  localStorage.setItem("fourcost", fourcost);
  localStorage.setItem("fivecost", fivecost);
  localStorage.setItem("sixcost", sixcost);
  localStorage.setItem("sevencost", sevencost);
  localStorage.setItem("eightcost", eightcost);
  localStorage.setItem("ninecost", ninecost);
  localStorage.setItem("tencost", tencost);
  //timers
  localStorage.setItem("oneReady", oneReady);
  localStorage.setItem("twoReady", twoReady);
  localStorage.setItem("threeReady", threeReady);
  localStorage.setItem("fourReady", fourReady);
  localStorage.setItem("fiveReady", fiveReady);
  localStorage.setItem("sixReady", sixReady);
  localStorage.setItem("sevenReady", sevenReady);
  localStorage.setItem("eightReady", eightReady);
  localStorage.setItem("nineReady", nineReady);
  localStorage.setItem("tenReady", tenReady);
  //autos
  localStorage.setItem("autoone", autoone);
  localStorage.setItem("autotwo", autotwo);
  localStorage.setItem("autothree", autothree);
  localStorage.setItem("autofour", autofour);
  localStorage.setItem("autofive", autofive);
  localStorage.setItem("autosix", autosix);
  localStorage.setItem("autoseven", autoseven);
  localStorage.setItem("autoeight", autoeight);
  localStorage.setItem("autonine", autonine);
  localStorage.setItem("autoten", autoten);
  updateUI();
});
//Offline
window.addEventListener("beforeunload", () => {
  localStorage.setItem("lastPlayed", Date.now());
});
// initialise
updateUI();
//offline calc
const lastPlayed = Number(localStorage.getItem("lastPlayed")) || Date.now();
const now = Date.now();
const elapsed = now - lastPlayed;
const secondsAway = elapsed / 1000;
cash += Math.floor((secondsAway * (oneown * oneper)) * autoone);
cash += Math.floor((secondsAway * ((twoown * twoper)/3)) * autotwo);
cash += Math.floor((secondsAway * ((threeown * threeper)/5)) * autothree);
cash += Math.floor((secondsAway * ((fourown * fourper)/9)) * autofour);
cash += Math.floor((secondsAway * ((fiveown * fiveper)/15)) * autofive);
cash += Math.floor((secondsAway * ((sixown * sixper)/25)) * autosix);
cash += Math.floor((secondsAway * ((sevenown * sevenper)/35)) * autoseven);
cash += Math.floor((secondsAway * ((eightown * eightper)/50)) * autoeight);
cash += Math.floor((secondsAway * ((nineown * nineper)/60)) * autonine);
cash += Math.floor((secondsAway * ((tenown * tenper)/100)) * autoten);
localStorage.setItem("cash", cash);
