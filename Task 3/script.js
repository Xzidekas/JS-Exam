/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let message = document.querySelector("#message");
let output = document.querySelector("#output");
let btn = document.querySelector("#btn");

function showUsers () {

    let request = new XMLHttpRequest();    
    request.open('GET', ENDPOINT, true);
    request.onload = function() {   

        let users = JSON.parse(this.response);
        for (n in users) {
            const kortele = document.createElement("div");
            const login = document.createElement("div");
            const avatar= document.createElement("div");            

            
            login.textContent = users[n].login;            

            let img = new Image;
            img.src = users[n].avatar_url;
            avatar.appendChild(img)
            kortele.style.display = 'flex';
            kortele.style.justifyContent = 'space-between';
            img.style.width = "80%";
            kortele.style.width = "20vw";
            kortele.style.margin = "20px";
            kortele.style.borderStyle = "solid";
            login.style.fontSize = "15px";
            login.style.marginTop = "8px";
            login.style.marginBottom = "8px";  
            
            output.appendChild(kortele);            
            kortele.appendChild(login);
            kortele.appendChild(avatar);

        }
    }
   
    request.send();   
}

btn.addEventListener("click", function() {

    message.style.display = "none";

    showUsers();
})
