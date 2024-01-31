async function getPkmn(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}



async function mi_peticion() {
    const imagenDesenfocada = document.querySelector('#imagenDesenfocada');
    imagenDesenfocada.classList.remove('hidden');

    const numeroAleatorio = generarNumeroAleatorio();
    const numeroAleatorio1 = generarNumeroAleatorio();
    const numeroAleatorio2 = generarNumeroAleatorio();
    const numeroAleatorio3 = generarNumeroAleatorio();

    const pkmn = await getPkmn(numeroAleatorio);
    const pkmn1 = await getPkmn(numeroAleatorio1);
    const pkmn2 = await getPkmn(numeroAleatorio2);
    const pkmn3 = await getPkmn(numeroAleatorio3);

    const { front_default } = pkmn.sprites;
    const urlImagenFrontal = front_default;

    const imgPokemon = document.querySelector("#imgPokemon");
    imgPokemon.src = urlImagenFrontal;

    imagenDesenfocada.classList.add('hidden');

    mostrarNombrePokemon(pkmn.name, pkmn1.name, pkmn2.name, pkmn3.name);

}

document.addEventListener("DOMContentLoaded", function () {
    mi_peticion();

    const obtenerPokemonBotones = document.querySelectorAll("#pkmon, #pkmon1, #pkmon2, #pkmon3");

    obtenerPokemonBotones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            mi_peticion();
        });
    });
});
function mostrarNombrePokemon(nombrePokemon, nombrePokemon1, nombrePokemon2, nombrePokemon3) {
    const btnObtenerPokemon = document.querySelector("#pkmon");
    const btnObtenerPokemon1 = document.querySelector("#pkmon1");
    const btnObtenerPokemon2 = document.querySelector("#pkmon2");
    const btnObtenerPokemon3 = document.querySelector("#pkmon3");

    btnObtenerPokemon.value = `${nombrePokemon}`;
    btnObtenerPokemon1.value = `${nombrePokemon1}`;
    btnObtenerPokemon2.value = `${nombrePokemon2}`;
    btnObtenerPokemon3.value = `${nombrePokemon3}`;
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 999) + 1;
}
