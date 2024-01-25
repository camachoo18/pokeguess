
async function getPkmn(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

 function obtenerNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

async function mi_peticion() {
    const pkmn = await getPkmn(obtenerNumeroAleatorio(1008));
    const pkmn1= await getPkmn(obtenerNumeroAleatorio(1008));
    const pkmn2 = await getPkmn(obtenerNumeroAleatorio(1008));
    const pkmn3 = await getPkmn(obtenerNumeroAleatorio(1008));

    const nombre = pkmn.name;
    const nombre1 = pkmn1.name;
    const nombre2 = pkmn2.name;
    const nombre3 = pkmn3.name;

    const spriteUrl = pkmn.sprites.front_default;
    const spriteUrl1 = pkmn1.sprites.front_default;
    const spriteUrl2 = pkmn2.sprites.front_default;
    const spriteUrl3 = pkmn3.sprites.front_default;

    console.log(`Nombre: ${nombre}`);
    console.log(`Sprite URL: ${spriteUrl}`);
    console.log(`Nombre: ${nombre1}`);
    console.log(`Sprite URL: ${spriteUrl1}`);
    console.log(`Nombre: ${nombre2}`);
    console.log(`Sprite URL: ${spriteUrl2}`);
    console.log(`Nombre: ${nombre3}`);
    console.log(`Sprite URL: ${spriteUrl3}`);

    const imgElement = document.createElement('img');
    imgElement.src = spriteUrl;

    const imgElement1 = document.createElement('img');
    imgElement1.src = spriteUrl1;

    const imgElement2 = document.createElement('img');
    imgElement2.src = spriteUrl2;

    const imgElement3 = document.createElement('img');
    imgElement3.src = spriteUrl3;

    document.body.innerHTML =
    `
    <div class="pokemon-square">

    <input type="submit"  value = "${pkmn.name}" />
    <p class="pokemon-card"></p>
    <input type="submit"  value = "${pkmn1.name}" />
    <p class="pokemon-card1"></p>
    <input type="submit"  value = "${pkmn2.name}" />
    <p class="pokemon-card2"></p>
    <input type="submit"  value = "${pkmn3.name}" />
    <p class="pokemon-card3"></p>

    </div>
    `

    const pokemonCard = document.querySelector('.pokemon-card');
    pokemonCard.appendChild(imgElement);
    const pokemonSquare = document.querySelector('.pokemon-square');
    const pokemonImage = document.querySelector('.pokemon-image');



}


mi_peticion();


//1 imagen, 4 nombres con 4 botones asociados

