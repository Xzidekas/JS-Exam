/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let stateBtn = document.querySelector("#btn__state");
let elementBtn = document.querySelector("#btn__element");

let count = 0;

elementBtn.addEventListener("click", function() {
    count = count + 1;
    stateBtn.textContent = count;
});