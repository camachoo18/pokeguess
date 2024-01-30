async function getPkmn(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos

}


async function mi_peticion(){
    const numeroAleatorio = generarNumeroAleatorio();
    const numeroAleatorio1 = generarNumeroAleatorio();
    const numeroAleatorio2 = generarNumeroAleatorio();
    const numeroAleatorio3 = generarNumeroAleatorio();
    
    const pkmn = await getPkmn(numeroAleatorio);
    const pkmn1 = await getPkmn(numeroAleatorio1);
    const pkmn2 = await getPkmn(numeroAleatorio2);
    const pkmn3 = await getPkmn(numeroAleatorio3);

    const {front_default} = pkmn.sprites
    const urlImagenFrontal = front_default
    
    const imgPokemon = document.getElementById("imgPokemon");
    imgPokemon.src = urlImagenFrontal;

    



    mostrarNombrePokemon(pkmn.name, pkmn1.name, pkmn2.name, pkmn3.name);
}
mi_peticion()

function mostrarNombrePokemon(nombrePokemon, nombrePokemon1, nombrePokemon2, nombrePokemon3) {

    const btnObtenerPokemon = document.getElementById("pkmon");
    const btnObtenerPokemon1 = document.getElementById("pkmon1");
    const btnObtenerPokemon2 = document.getElementById("pkmon2");
    const btnObtenerPokemon3 = document.getElementById("pkmon3");
    
    btnObtenerPokemon.value = `${nombrePokemon}`;
    btnObtenerPokemon1.value = `${nombrePokemon1}`;
    btnObtenerPokemon2.value = `${nombrePokemon2}`;
    btnObtenerPokemon3.value = `${nombrePokemon3}`;
}


function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 999) + 1;
}

document.addEventListener("DOMContentLoaded", function() {
    const obtenerPokemon = document.getElementById("pkmon");
    obtenerPokemon.addEventListener("click", function() {
        const imagenDesenfocada = document.getElementById('imagenDesenfocada');
        imagenDesenfocada.classList.remove('hidden');
        imagenDesenfocada.classList.add('show');


        const imgPokemon = document.getElementById("imgPokemon");
        imgPokemon.classList.add('show');


        mi_peticion();
    });
});