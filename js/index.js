const language = document.querySelector('.language'); 
const earthIcon = document.querySelector('.fa-earth-americas')
const espanol = document.querySelectorAll('.esp');
const english = document.querySelectorAll('.eng');
const idiom = document.querySelector('#idiom');

const hamburguer = document.querySelector('#hamburguer')
const menuBurguer = document.querySelector('.hamburguer')

/*******************************************
        Logic to change the language 
********************************************/
language.addEventListener('click', changeLanguage);

function changeLanguage(){
    espanol.forEach(element => {
        element.classList.toggle('inactive');
    });
    english.forEach(element => {
        element.classList.toggle('inactive');
    });

    // Change the color of the world image
    let color_one = 'darkgray' // I'm not using it
    let color_two = 'darkslategrey'
  
    if (earthIcon.style.color === color_two){
        earthIcon.style.color = ''; //Empty uses the default color
    } else {
        earthIcon.style.color = color_two; 
    }

    // Change the text of the span
    let esp = 'ESP';
    let eng = 'ENG';

    if (idiom.textContent == esp){
        idiom.textContent = eng;
    } else {idiom.textContent = esp};

}

/*******************************************
        Logic to show the Menu in mobile 
********************************************/

hamburguer.addEventListener('click', showHamburguer);

function showHamburguer(){
    menuBurguer.classList.toggle('inactive')
}

/***************************************************
 Logic to show the diferent portfolios
 ****************************************************/

// Take the buttons that execute the function
const changeDataButtons = document.querySelectorAll(".carousel-dot")
// Execute the function if one of the buttons is clicked, and we change the portfolio atribute, for english or spanish
for (const button of changeDataButtons) {
    button.addEventListener('click',  () =>  {if (idiom.textContent == 'ESP'){
        showPortfolioPages(miPortafolio)
    } else {showPortfolioPages(myPortfolios);}});
}

const changeDataArrows = document.querySelectorAll(".carousel-controls")
for (const button of changeDataArrows) {
    button.addEventListener('click',  () =>  {if (idiom.textContent == 'ESP'){
        showPortfolioPages(miPortafolio);
    } else {showPortfolioPages(myPortfolios);}});
}

// Engilsh Porfolio
const myPortfolios = [
    {
        name: "Responsive Design Heros",
        url: "https://fabriciogg8.github.io/Responsive_design/",
        image: "./img/Heroes.png",
        abstract: "Page with responsive design, with images of super heroes and a brief description." 
    },
    {
        name: "Frontend Developer Practic",
        url: "https://fabriciogg8.github.io/Responsive_design/",
        image: "./img/3.png"  
    },
    {
        name: "API Dogs JavaScript",
        url: "https://fabriciogg8.github.io/JavaScript_API_REST/Code/index.html",
        image: "./img/JS_perros.png"
    }
]

// Spanish Potfolio
const miPortafolio = [
    {
        name: "Heroes Diseno Responsivo",
        url: "https://fabriciogg8.github.io/Responsive_design/",
        image: "./img/Heroes.png",
        abstract: "Pagina con diseno responsive, con imagenes de super heroes y una breve descripcion." 
    },
    {
        name: "Practico Frontend Developer",
        url: "https://fabriciogg8.github.io/Responsive_design/",
        image: "./img/3.png"  
    },
    {
        name: "API Perros JavaScript",
        url: "https://fabriciogg8.github.io/JavaScript_API_REST/Code/index.html",
        image: "./img/JS_perros.png"
    }
]


// Function that iterates the array to show the diferent values
// I use a var (variable) to keep track of how many times the function is pressed
var contador = 0;

function showPortfolioPages(portfolios){
    
    if (contador >= portfolios.length)
    {contador = 0}
    console.log(portfolios[contador])
    const divsImages = document.querySelectorAll('.changeImg');
    for (div of divsImages){
        div.setAttribute('src', portfolios[contador].image);

    }
    const divFather = document.querySelector('.carousel');
    // If the father already has a child, we remove it    
    if (contador != 0 || contador != portfolios.length){
        let last = divFather.lastChild;
        divFather.removeChild(last);
    }
    
    // Creates node that show all the info of the portfolio
    const pageInfoDiv = document.createElement('div');
    // I give the node a name, so I can track if it exists
    pageInfoDiv.classList.add('new-son')
    pageInfoDiv.innerText = portfolios[contador].name;
    
    const urlContainer = document.createElement('a'); 
    urlContainer.setAttribute("href", portfolios[contador].url)
    urlContainer.innerHTML = "Go Link"
    pageInfoDiv.appendChild(urlContainer)
    
    divFather.appendChild(pageInfoDiv);
    console.log(portfolios[contador].name)
    contador ++

    //I remove the p tag where I had the phrase to click in the pc image
    let clickTile = document.querySelector('.disable');
    if(document.body.contains(clickTile)){
        clickTile.remove();
    }
}


