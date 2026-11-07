let name = "El Musaui Mohamed";

const about = document.getElementById("about");

about.innerHTML = "Bonjour, je suis " + name;

const nv = document.createElement("div");

nv.id = "para";

document.body.appendChild(nv);

nv.innerHTML = "para";

document.getElementById("para").innerHTML = "Bienvenue sur mon portfolio";
