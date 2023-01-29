// Imersão dev_ 2022 - Aulas 4 e 5

const formInput = document.getElementById("form-input");
const titleInput = document.getElementById("title-input");
const imageInput = document.getElementById("image-input");
const gallery = document.getElementById("gallery");

const titleList = [
  "Nier:Automata",
  "Persona 5",
  "Hades",
  "Baba Is You",
  "Odin Sphere",
  "FEZ",
  "Stardew Valley",
  "Ori And The Blind Forest"
];
const imageList = [
  "./assets/img/nierAutomata.jpg",
  "./assets/img/persona5.jpg",
  "./assets/img/hades.jpg",
  "./assets/img/babaIsYou.webp",
  "./assets/img/odinsphere.jpg",
  "./assets/img/fez.png",
  "./assets/img/stardewValley.jpg",
  "./assets/img/oriBlindForest.jpg"
];

var i = 0;
while (i < imageList.length) {
  outputGame(titleList[i], imageList[i]);
  i++;
}

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const image = imageInput.value;

  addGame(title, image);

  titleInput.value = "";
  imageInput.value = "";
});

function addGame(title, image) {
  for (let i = 0; i < titleList.length; i++) {
    let titleCompare = title.trim().toLowerCase();
    let name = titleList[i].trim().toLowerCase();
    if (titleCompare == name || image == imageList[i]) {
      return alert("Este jogo já existe. Adicione outro diferente.");
    }
  }
  if ((image.endsWith(".jpg") || image.endsWith(".png")) && image != "") {
    titleList.push(title);
    imageList.push(image);
    outputGame(title, image);
  } else {
    console.error("URL inválida.");
    alert("Endereço da imagem inválido");
  }
}

function outputGame(title, image) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", image);
  imgElement.setAttribute("class", "game-poster");
  imgElement.setAttribute("alt", title);

  const figcaptionElement = document.createElement("figcaption");
  const legend = document.createTextNode(title);
  figcaptionElement.appendChild(legend);

  const figureElement = document.createElement("figure");
  figureElement.setAttribute("id", title);
  figureElement.appendChild(imgElement);
  figureElement.appendChild(figcaptionElement);

  const fragment = document.createDocumentFragment();
  fragment.appendChild(figureElement);

  gallery.appendChild(fragment);
}

// Remover imagem

function removeGame() {
  const title = titleInput.value;

  for (let i = 0; i < titleList.length; i++) {
    if (title.trim().toLowerCase() == titleList[i].trim().toLowerCase()) {
      const titleSpliced = titleList.splice(i, 1);
      const imageSpliced = imageList.splice(i, 1);
      console.log(titleSpliced + "\n" + imageSpliced);

      if (gallery.hasChildNodes()) {
        gallery.removeChild(gallery.children[i]);
      }
    }
  }
}