/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.querySelector("#output");

fetch(ENDPOINT)
    .then(response => {
    return response.json();
  })
   .then(jsondata => {

    for (n in jsondata) {

        const card = document.createElement("div");
        const gamintojas = document.createElement("div");
        const modelis = document.createElement("div");
        output.appendChild(card);
        card.appendChild(gamintojas);
        card.appendChild(modelis);


        gamintojas.textContent = jsondata[n]["brand"];
        modelis.textContent = jsondata[n]["models"];
      
        card.style.width = "40vw";
        card.style.margin = "20px";
        card.style.borderStyle = "solid";
        gamintojas.style.margin = "15px";
        gamintojas.style.fontSize = "30px";
        gamintojas.style.display = "flex";
        gamintojas.style.justifyContent = "center";
    }
   
});

output.style.display = "block";
