/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const search = document.querySelector("#search");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
const svar= document.createElement("div");
const gram= document.createElement("div");
const unc = document.createElement("div");

output.appendChild(unc);
output.appendChild(svar);
output.appendChild(gram);

output.style.display = "grid";
output.style.borderStyle = 'solid';
output.style.borderColor = 'black';
output.style.padding = '20px';
output.style.margin = '20px';



submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let value = search.value;
    let valueNum = parseFloat(value);

    let svarai = valueNum * 2.2046 + ' lb';
    let gramai = valueNum / 0.0010000 + ' g';
    let uncijos = valueNum * 35.274 + ' oz';

    svar.textContent = svarai;
    gram.textContent = gramai;
    unc.textContent = uncijos;

});