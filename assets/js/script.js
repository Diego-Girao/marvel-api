// Montagem da url do metodo fetch
const timeStamp = "1639672395";
const apiKey = "5936488582914a71fca407b5d168680c";
const md5 = "af602868f1fd8b8b1f28114c5616c6fc";
const maxCharacters = 1559;
const offset = Math.floor(Math.random() * maxCharacters + 1);
const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?limit=12&offset=${offset}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;

// Consumindo a API da Marvel
fetch(BASE_URL)
    .then((response) => {
        return response.json();
    })
    .then((jsonParsed) => {
        const divHeroes = document.querySelector("#heroes");

        jsonParsed.data.results.forEach((element) => {
            const image =
                element.thumbnail.path + "." + element.thumbnail.extension;
            const name = element.name;

            // Implementação da validação para não exibir characters sem imagem
            // const noImageJpg =
            //     "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
            // const noImageGif =
            //     "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif";
            // if (image != noImageJpg || image != noImageGif ) {
            // }
            createDivHeroes(image, name, divHeroes);
          });

        console.log(jsonParsed);
    });

function createDivHeroes(image, name, divToAppend) {
    const divMain = document.createElement("div");
    const divChild = document.createElement("div");
    const textName = document.createElement("text");
    const img = document.createElement("img");

    textName.textContent = name;
    img.src = image;

    divChild.appendChild(img);
    divChild.appendChild(textName);
    divMain.appendChild(divChild);
    divToAppend.appendChild(divMain);

    divMain.classList.add("character");
}
