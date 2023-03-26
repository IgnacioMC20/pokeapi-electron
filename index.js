
const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const validPokemons = [
    {
        "name": "bulbasaur",
        "url": "/1/"
      },
      {
        "name": "ivysaur",
        "url": "/2/"
      },
      {
        "name": "venusaur",
        "url": "/3/"
      },
      {
        "name": "charmander",
        "url": "/4/"
      },
      {
        "name": "charmeleon",
        "url": "/5/"
      },
      {
        "name": "charizard",
        "url": "/6/"
      },
      {
        "name": "squirtle",
        "url": "/7/"
      },
      {
        "name": "wartortle",
        "url": "/8/"
      },
      {
        "name": "blastoise",
        "url": "/9/"
      },
      {
        "name": "caterpie",
        "url": "/10/"
      },
      {
        "name": "metapod",
        "url": "/11/"
      },
      {
        "name": "butterfree",
        "url": "/12/"
      },
      {
        "name": "weedle",
        "url": "/13/"
      },
      {
        "name": "kakuna",
        "url": "/14/"
      },
      {
        "name": "beedrill",
        "url": "/15/"
      },
      {
        "name": "pidgey",
        "url": "/16/"
      },
      {
        "name": "pidgeotto",
        "url": "/17/"
      },
      {
        "name": "pidgeot",
        "url": "/18/"
      },
      {
        "name": "rattata",
        "url": "/19/"
      },
      {
        "name": "raticate",
        "url": "/20/"
      },
      {
        "name": "spearow",
        "url": "/21/"
      },
      {
        "name": "fearow",
        "url": "/22/"
      },
      {
        "name": "ekans",
        "url": "/23/"
      },
      {
        "name": "arbok",
        "url": "/24/"
      },
      {
        "name": "pikachu",
        "url": "/25/"
      },
      {
        "name": "raichu",
        "url": "/26/"
      },
      {
        "name": "sandshrew",
        "url": "/27/"
      },
      {
        "name": "sandslash",
        "url": "/28/"
      },
      {
        "name": "nidoran-f",
        "url": "/29/"
      },
      {
        "name": "nidorina",
        "url": "/30/"
      },
      {
        "name": "nidoqueen",
        "url": "/31/"
      },
      {
        "name": "nidoran-m",
        "url": "/32/"
      },
      {
        "name": "nidorino",
        "url": "/33/"
      },
      {
        "name": "nidoking",
        "url": "/34/"
      },
      {
        "name": "clefairy",
        "url": "/35/"
      },
      {
        "name": "clefable",
        "url": "/36/"
      },
      {
        "name": "vulpix",
        "url": "/37/"
      },
      {
        "name": "ninetales",
        "url": "/38/"
      },
      {
        "name": "jigglypuff",
        "url": "/39/"
      },
      {
        "name": "wigglytuff",
        "url": "/40/"
      },
      {
        "name": "zubat",
        "url": "/41/"
      },
      {
        "name": "golbat",
        "url": "/42/"
      },
      {
        "name": "oddish",
        "url": "/43/"
      },
      {
        "name": "gloom",
        "url": "/44/"
      },
      {
        "name": "vileplume",
        "url": "/45/"
      },
      {
        "name": "paras",
        "url": "/46/"
      },
      {
        "name": "parasect",
        "url": "/47/"
      },
      {
        "name": "venonat",
        "url": "/48/"
      },
      {
        "name": "venomoth",
        "url": "/49/"
      },
      {
        "name": "diglett",
        "url": "/50/"
      },
      {
        "name": "dugtrio",
        "url": "/51/"
      },
      {
        "name": "meowth",
        "url": "/52/"
      },
      {
        "name": "persian",
        "url": "/53/"
      },
      {
        "name": "psyduck",
        "url": "/54/"
      },
      {
        "name": "golduck",
        "url": "/55/"
      },
      {
        "name": "mankey",
        "url": "/56/"
      },
      {
        "name": "primeape",
        "url": "/57/"
      },
      {
        "name": "growlithe",
        "url": "/58/"
      },
      {
        "name": "arcanine",
        "url": "/59/"
      },
      {
        "name": "poliwag",
        "url": "/60/"
      },
      {
        "name": "poliwhirl",
        "url": "/61/"
      },
      {
        "name": "poliwrath",
        "url": "/62/"
      },
      {
        "name": "abra",
        "url": "/63/"
      },
      {
        "name": "kadabra",
        "url": "/64/"
      },
      {
        "name": "alakazam",
        "url": "/65/"
      },
      {
        "name": "machop",
        "url": "/66/"
      },
      {
        "name": "machoke",
        "url": "/67/"
      },
      {
        "name": "machamp",
        "url": "/68/"
      },
      {
        "name": "bellsprout",
        "url": "/69/"
      },
      {
        "name": "weepinbell",
        "url": "/70/"
      },
      {
        "name": "victreebel",
        "url": "/71/"
      },
      {
        "name": "tentacool",
        "url": "/72/"
      },
      {
        "name": "tentacruel",
        "url": "/73/"
      },
      {
        "name": "geodude",
        "url": "/74/"
      },
      {
        "name": "graveler",
        "url": "/75/"
      },
      {
        "name": "golem",
        "url": "/76/"
      },
      {
        "name": "ponyta",
        "url": "/77/"
      },
      {
        "name": "rapidash",
        "url": "/78/"
      },
      {
        "name": "slowpoke",
        "url": "/79/"
      },
      {
        "name": "slowbro",
        "url": "/80/"
      },
      {
        "name": "magnemite",
        "url": "/81/"
      },
      {
        "name": "magneton",
        "url": "/82/"
      },
      {
        "name": "farfetchd",
        "url": "/83/"
      },
      {
        "name": "doduo",
        "url": "/84/"
      },
      {
        "name": "dodrio",
        "url": "/85/"
      },
      {
        "name": "seel",
        "url": "/86/"
      },
      {
        "name": "dewgong",
        "url": "/87/"
      },
      {
        "name": "grimer",
        "url": "/88/"
      },
      {
        "name": "muk",
        "url": "/89/"
      },
      {
        "name": "shellder",
        "url": "/90/"
      },
      {
        "name": "cloyster",
        "url": "/91/"
      },
      {
        "name": "gastly",
        "url": "/92/"
      },
      {
        "name": "haunter",
        "url": "/93/"
      },
      {
        "name": "gengar",
        "url": "/94/"
      },
      {
        "name": "onix",
        "url": "/95/"
      },
      {
        "name": "drowzee",
        "url": "/96/"
      },
      {
        "name": "hypno",
        "url": "/97/"
      },
      {
        "name": "krabby",
        "url": "/98/"
      },
      {
        "name": "kingler",
        "url": "/99/"
      },
      {
        "name": "voltorb",
        "url": "/100/"
      },
      {
        "name": "electrode",
        "url": "/101/"
      },
      {
        "name": "exeggcute",
        "url": "/102/"
      },
      {
        "name": "exeggutor",
        "url": "/103/"
      },
      {
        "name": "cubone",
        "url": "/104/"
      },
      {
        "name": "marowak",
        "url": "/105/"
      },
      {
        "name": "hitmonlee",
        "url": "/106/"
      },
      {
        "name": "hitmonchan",
        "url": "/107/"
      },
      {
        "name": "lickitung",
        "url": "/108/"
      },
      {
        "name": "koffing",
        "url": "/109/"
      },
      {
        "name": "weezing",
        "url": "/110/"
      },
      {
        "name": "rhyhorn",
        "url": "/111/"
      },
      {
        "name": "rhydon",
        "url": "/112/"
      },
      {
        "name": "chansey",
        "url": "/113/"
      },
      {
        "name": "tangela",
        "url": "/114/"
      },
      {
        "name": "kangaskhan",
        "url": "/115/"
      },
      {
        "name": "horsea",
        "url": "/116/"
      },
      {
        "name": "seadra",
        "url": "/117/"
      },
      {
        "name": "goldeen",
        "url": "/118/"
      },
      {
        "name": "seaking",
        "url": "/119/"
      },
      {
        "name": "staryu",
        "url": "/120/"
      },
      {
        "name": "starmie",
        "url": "/121/"
      },
      {
        "name": "mr-mime",
        "url": "/122/"
      },
      {
        "name": "scyther",
        "url": "/123/"
      },
      {
        "name": "jynx",
        "url": "/124/"
      },
      {
        "name": "electabuzz",
        "url": "/125/"
      },
      {
        "name": "magmar",
        "url": "/126/"
      },
      {
        "name": "pinsir",
        "url": "/127/"
      },
      {
        "name": "tauros",
        "url": "/128/"
      },
      {
        "name": "magikarp",
        "url": "/129/"
      },
      {
        "name": "gyarados",
        "url": "/130/"
      },
      {
        "name": "lapras",
        "url": "/131/"
      },
      {
        "name": "ditto",
        "url": "/132/"
      },
      {
        "name": "eevee",
        "url": "/133/"
      },
      {
        "name": "vaporeon",
        "url": "/134/"
      },
      {
        "name": "jolteon",
        "url": "/135/"
      },
      {
        "name": "flareon",
        "url": "/136/"
      },
      {
        "name": "porygon",
        "url": "/137/"
      },
      {
        "name": "omanyte",
        "url": "/138/"
      },
      {
        "name": "omastar",
        "url": "/139/"
      },
      {
        "name": "kabuto",
        "url": "/140/"
      },
      {
        "name": "kabutops",
        "url": "/141/"
      },
      {
        "name": "aerodactyl",
        "url": "/142/"
      },
      {
        "name": "snorlax",
        "url": "/143/"
      },
      {
        "name": "articuno",
        "url": "/144/"
      },
      {
        "name": "zapdos",
        "url": "/145/"
      },
      {
        "name": "moltres",
        "url": "/146/"
      },
      {
        "name": "dratini",
        "url": "/147/"
      },
      {
        "name": "dragonair",
        "url": "/148/"
      },
      {
        "name": "dragonite",
        "url": "/149/"
      },
      {
        "name": "mewtwo",
        "url": "/150/"
      },
      {
        "name": "mew",
        "url": "/151/"
      }
]

// const guardarDatos = window.require('./db')
const $ = selector => document.querySelector(selector)
const pokeSelect = $('#pokeSelect');

window.onload = () => {
  // Crear una opción para cada pokemon válido
validPokemons.forEach(pokemon => {
    const option = document.createElement("option");
    option.value = pokemon.url; // La URL del pokemon podría usarse como valor
    option.text = pokemon.name; // El nombre del pokemon se mostrará en la opción
    pokeSelect.appendChild(option);
  });
}

const getPokemonButton = $("#getPokemon");

getPokemonButton.addEventListener("click", () => {
  fetch(baseUrl + $("#pokeSelect").value)
    .then(response => response.json())
    .then(data => loadPoke(data))
    .catch(error => console.error(error));
});

const comunicacionFunc = (val) => {
  window.comunicacion.registroValido(val)
}
const loadPoke = ({name, sprites, id, weight, types}) => {

    comunicacionFunc({name, weight, sprite: sprites.front_default, type: types[0].type.name, id});

    const pokeImg = $("#pokeImg");
    const idPoke = $("#idPoke");
    const pokeTitle = $("#pokeTitle");
    const infoPokemon = $("#infoPokemon");
    const pokemonTypes = $("#pokemonTypes");
    const typespan = $("#typespan");

    const sprite1 = $("#sprite1");
    const sprite2 = $("#sprite2");
    const sprite3 = $("#sprite3");

    pokeTitle.innerText = name.toUpperCase();
    idPoke.innerText = id;
    infoPokemon.innerText = `Peso: ${weight}`
    pokeImg.src = sprites.front_default
    sprite1.src = sprites.back_default
    sprite3.src = sprites.back_shiny
    sprite2.src = sprites.front_shiny
    typespan.innerText = 'Tipos: '
    pokemonTypes.innerHTML = "";
    types.forEach(type => {
        const typeElement = document.createElement("p");
        typeElement.textContent = '- ' + type.type.name;
        pokemonTypes.appendChild(typeElement);
      });


}