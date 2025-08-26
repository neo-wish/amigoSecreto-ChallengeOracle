let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = "";
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es: " + amigos[indice];
    }
}
