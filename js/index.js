const language = document.querySelector(".language");
const earthIcon = document.querySelector(".fa-earth-americas");
const espanol = document.querySelectorAll(".esp");
const english = document.querySelectorAll(".eng");
const idiom = document.querySelector("#idiom");

const hamburguer = document.querySelector("#hamburguer");
const menuBurguer = document.querySelector(".hamburguer");

/*******************************************
        Logic to change the language 
********************************************/
language.addEventListener("click", changeLanguage);

function changeLanguage() {
  espanol.forEach((element) => {
    element.classList.toggle("inactive");
  });
  english.forEach((element) => {
    element.classList.toggle("inactive");
  });

  // Change the color of the world image
  let color_one = "darkgray"; // I'm not using it
  let color_two = "darkslategrey";

  if (earthIcon.style.color === color_two) {
    earthIcon.style.color = ""; //Empty uses the default color
  } else {
    earthIcon.style.color = color_two;
  }

  // Change the text of the span
  let esp = "ESP";
  let eng = "ENG";

  if (idiom.textContent == esp) {
    idiom.textContent = eng;
  } else {
    idiom.textContent = esp;
  }
}

/*******************************************
        Logic to show the Menu in mobile 
********************************************/

hamburguer.addEventListener("click", showHamburguer);

function showHamburguer() {
  menuBurguer.classList.toggle("inactive");
}

/***************************************************
 Logic to show the diferent portfolios
 ****************************************************/

// Take the buttons that execute the function
// FRONTEND ---------------------------------------
const changeDataButtons = document.querySelectorAll(".carousel-dot");
// Execute the function if one of the buttons is clicked, and we change the portfolio atribute, for english or spanish
for (const button of changeDataButtons) {
  button.addEventListener("click", () => {
    if (idiom.textContent == "ESP") {
      showPortfolioPages(miPortafolio, ".changeImg", ".carousel");
    } else {
      showPortfolioPages(myPortfolios, ".changeImg", ".carousel");
    }
  });
}

const changeDataArrows = document.querySelectorAll(".carousel-controls");
for (const button of changeDataArrows) {
  button.addEventListener("click", () => {
    if (idiom.textContent == "ESP") {
      showPortfolioPages(miPortafolio, ".changeImg", ".carousel");
    } else {
      showPortfolioPages(myPortfolios, ".changeImg", ".carousel");
    }
  });
}

// Engilsh Porfolio Frontend
const myPortfolios = [
  {
    name: "Responsive Design Heros",
    url: "https://fabriciogg8.github.io/Responsive_design_heros/",
    image: "https://imgur.com/HPkFkf2",
    abstract: "Abstract: Page with responsive design, with images of super heroes and a brief description.",
    readme: "https://github.com/Fabriciogg8/Responsive_design_heros/blob/main/Readme.md",
  },
  {
    name: "Frontend Bonsai Market",
    url: "https://fabriciogg8.github.io/Frontend-BonsaiMarket/",
    image: "https://imgur.com/c1ZupWy",
    abstract: "Abstract: Example Market page, with bonsai trees.",
    readme: "",
  },
  {
    name: "Frontend Page DH",
    url: "https://fabriciogg8.github.io/Frontend-DH-Page/",
    image: "https://imgur.com/5nF7P6a",
    abstract: "Abstract: Development of a web page, from a model.",
    readme: "https://github.com/Fabriciogg8/Frontend-DH-Page/blob/main/README.md",
  },
];

// Spanish Potfolio Frontend
const miPortafolio = [
  {
    name: "Héroes Diseño Responsivo",
    url: "https://fabriciogg8.github.io/Responsive_design_heros/",
    image: "https://imgur.com/HPkFkf2",
    abstract:
      "Resumen: Página con diseño responsivo, con imágenes de súper héroes y una breve descripción.",
    readme:
      "https://github.com/Fabriciogg8/Responsive_design_heros/blob/main/Readme.md",
  },
  {
    name: "Frontend Mercado Bonsai",
    url: "https://fabriciogg8.github.io/Frontend-BonsaiMarket/",
    image: "https://imgur.com/c1ZupWy",
    abstract: "Resumen: Ejemplo de página mercado, con árboles bonsai.",
    readme: "",
  },
  {
    name: "Frontend Página DH",
    url: "https://fabriciogg8.github.io/Frontend-DH-Page/",
    image: "https://imgur.com/5nF7P6a",
    abstract: "Resumen: Desarrollo de una página web, a partir de un modelo.",
    readme: "https://github.com/Fabriciogg8/Frontend-DH-Page/blob/main/README.md",
  },
];

// Function that iterates the array to show the diferent values
// I use a var (variable) to keep track of how many times the function is pressed
var contador = 0;

function showPortfolioPages(portfolios, boxImg, boxFather) {
  if (contador >= portfolios.length) {
    contador = 0;
  }
  const divsImages = document.querySelectorAll(boxImg);
  for (div of divsImages) {
    div.setAttribute("src", portfolios[contador].image);
  }
  const divFather = document.querySelector(boxFather);
  // If the father already has a child, we remove it
  if (contador != 0 || contador != portfolios.length) {
    let last = divFather.lastChild;
    divFather.removeChild(last);
  }

  // Creates node that show all the info of the portfolio
  const pageInfoDiv = document.createElement("div");
  // I give the node a name, so I can track if it exists
  pageInfoDiv.classList.add("new-son");
  pageInfoDiv.innerText = portfolios[contador].name;
  // Abstract
  const abstract = document.createElement("p");
  abstract.innerHTML = portfolios[contador].abstract;
  pageInfoDiv.appendChild(abstract);

  // url of the repository
  const urlContainer = document.createElement("a");
  urlContainer.setAttribute("href", portfolios[contador].url);
  if (idiom.textContent == "ESP") {
    urlContainer.innerHTML = "Ver repositorio";
  } else {
    urlContainer.innerHTML = "View repository";
  }
  pageInfoDiv.appendChild(urlContainer);

  // link to github

  divFather.appendChild(pageInfoDiv);
  contador++;

  //I remove the p tag where I had the phrase to click in the pc image
  let clickTile = document.querySelector(".disable");
  if (document.body.contains(clickTile)) {
    clickTile.remove();
  }
}

// BACKEND ---------------------------------------
const divImageTwo = document.querySelector(".slide-image-two");
// Execute the function if the div is clicked, and we change the portfolio atribute, for english or spanish
divImageTwo.addEventListener("click", () => {
  if (idiom.textContent == "ESP") {
    showPortfolioBackend(miPortafolioBackend);
  } else {
    showPortfolioBackend(myPortfolioBackend);
  }
});

// English Potfolio Backend
const myPortfolioBackend = [
  {
    name: "JavaScript API REST Dogs",
    url: "https://fabriciogg8.github.io/JavaScript_API_REST_Dogs/",
    image: "https://imgur.com/Kbxo6l7",
    abstract: "Abstract: Consume a REST API with JavaScript. Realize the communication flow between Frontend and Backend and make asynchronous requests using fetch.",
    readme: "https://github.com/Fabriciogg8/JavaScript_API_REST_Dogs#readme",
  },
  {
    name: "JAVA Basic",
    url: "https://github.com/Fabriciogg8/Java_basics",
    image: "https://imgur.com/0vhpADd",
    abstract: "Abstract: Resolutions of basic exercises with JAVA language",
    readme: "https://github.com/Fabriciogg8/Java_basics"
  },
  {
    name: "Flask CRUD",
    url: "https://github.com/Fabriciogg8/Flask_CRUD",
    image: "https://imgur.com/DbEp564",
    abstract: "Abstract: Create, Read, Update, Delete with FLASK",
    readme : "https://github.com/Fabriciogg8/Flask_CRUD/blob/master/README.md"
  },
];

// Spanish Potfolio Backend
const miPortafolioBackend = [
  {
      name: "JavaScript API REST Dogs",
      url: "https://fabriciogg8.github.io/JavaScript_API_REST_Dogs/",
      image: "https://imgur.com/Kbxo6l7",
      abstract: "Resumen: Consumir una API REST con JavaScript. Realizar el flujo de comunicación entre Frontend y Backend y hacer solicitudes asíncronas usando fetch.",
      readme: "https://github.com/Fabriciogg8/JavaScript_API_REST_Dogs#readme",
  },
  {
    name: "JAVA Basico",
    url: "https://github.com/Fabriciogg8/Java_basics",
    image: "https://imgur.com/0vhpADd",
    abstract: "Resumen: Resoluciones de ejercicios basicos con lenguaje JAVA",
    readme: "https://github.com/Fabriciogg8/Java_basics"
  },
  {
    name: "Flask CRUD",
    url: "https://github.com/Fabriciogg8/Flask_CRUD",
    image: "https://imgur.com/DbEp564",
    abstract: "Resumen: Crear, Leer, Actualizar, Borrar con FLASK",
    readme : "https://github.com/Fabriciogg8/Flask_CRUD/blob/master/README.md"
  },
];

var contadorTwo = 0;

function showPortfolioBackend(portfolioBackend) {
  // Add 1 to the contadorTwo variable so I can iterate the array. 
  contadorTwo++;
  if (contadorTwo >= portfolioBackend.length) {
    contadorTwo = 0;
  }
  
  const divImg = document.querySelector(".changeImgTwo");
  divImg.setAttribute("src", portfolioBackend[contadorTwo].image);

  const divBackFather = document.querySelector(".slide-image-two")
  // If the father already has a child, we remove it
  if (contadorTwo != 0 || contadorTwo != portfolioBackend.length) {
    let last = divBackFather.lastChild;
    divBackFather.removeChild(last);
  }

  // Creates node that show all the info of the portfolio
  const pageInfoDivBack = document.createElement("div");
  // I give the node a name, so I can track if it exists
  pageInfoDivBack.classList.add("new-son");

  // Repository name: Create a <u> for place it
  const underlineTitle = document.createElement("u")
  underlineTitle.innerText = portfolioBackend[contadorTwo].name;
  pageInfoDivBack.appendChild(underlineTitle);

  // Abstract: p tag
  const abstractBack = document.createElement("p");
  abstractBack.innerHTML = portfolioBackend[contadorTwo].abstract;
  pageInfoDivBack.appendChild(abstractBack);

  // Url: an <a> tag
  const urlContainer = document.createElement("a");
  urlContainer.setAttribute("href", portfolioBackend[contadorTwo].url);
  if (idiom.textContent == "ESP") {
    urlContainer.innerHTML = "Ver repositorio";
  } else {
    urlContainer.innerHTML = "View repository";
  }
  pageInfoDivBack.appendChild(urlContainer);

  // link to github: an <a> tag
  const readmeBack = document.createElement("a");
  readmeBack.setAttribute("href", portfolioBackend[contadorTwo].readme);
  readmeBack.innerHTML = "Github readme";
  pageInfoDivBack.appendChild(readmeBack);

  // Append the div with the info to the father
  divBackFather.appendChild(pageInfoDivBack);

  //I remove the p tag where I had the phrase to click in the pc image
  let clickTile = document.querySelector(".disable-two");
  if (document.body.contains(clickTile)) {
    clickTile.remove();
  }
}


/***************************************************
 Logic to change the world icon size
 ****************************************************/

// fa-2x
// fa-4x

const mediaquery = window.matchMedia("(mon-width: 480px)");
function funcion() {
  const earthIcon = document.querySelector(".fa-earth-americas");
  console.log(earthIcon);
  if (mediaquery.matches) {
    earthIcon.classList.remove(".fa-2x");
    earthIcon.classList.add(".fa-4x");
    console.log(earthIcon);
  } 
}

mediaquery.addEventListener("load", funcion());