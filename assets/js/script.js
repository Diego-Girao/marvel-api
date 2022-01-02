// Montagem da url do metodo fetch
const timeStamp = "{YOUR_TIMESTAMP";
const apiKey = "{YOUR_API_KEY}";
const md5 = "{YOUR_MD5}";
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
