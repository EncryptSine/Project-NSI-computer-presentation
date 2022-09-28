const intro = document.querySelector('.intro'); // Sélectionner le premier titre 
const video = document.querySelector('video'); // Sélectionner la vidéo
const text = document.querySelector('h1'); // Sélectionner les titres

const section = document.querySelector('section'); // sélection de la section
const fin = section.querySelector('h1'); // Sélectionner le dernier titre

//scrollmagic
const controller = new ScrollMagic.Controller(); // création du controleur

const scene = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller); // création d'une scène scrollmagic pour la vidéo d'introduction et attachement au controleur

//video
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
  scrollPos = e.scrollPos / 1000;
}) // On prend la position du scroll

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount; // Pour faire une effet de "fluidité"

  video.currentTime = delay; // On avance/recule dans la vidéo
}, 33.3)

window.onscroll = function() { Sticky() }; // Lance la fonction pour le sticky à chaque scroll

var bouton = document.getElementById("bouton");
var sticky = bouton.offsetTop;
// on récupère le bouton

function Sticky() {
  if (window.pageYOffset >= sticky) {
    bouton.classList.add("sticky")
  } else {
    bouton.classList.remove("sticky");
  }
} // Si l'emplacement du bouton sors de l'écran, on lui met la classe "sticky", sinon on l'enlève.

document.addEventListener("click", function Verif() {
  if (document.getElementsByClassName("coucou").length > 0 && event.target.id == "overlay"){ // On vérifie bien que l'utilisateur a fait apparaitre le texte d'un élément
    for (let i = 0; i < document.getElementsByClassName("coucou").length; i++){
      document.getElementsByClassName("coucou")[i].removeAttribute('class'); // On retire les classes de tous les éléments ayant la classe "coucou" (celle pour faire apparaitre le texte)
    }
    if (document.getElementById("overlay")){
      document.getElementById("overlay").id = ""; // On retire l'overlay
      document.getElementsByTagName("body")[0].classList.remove("stop-scrolling"); // On réactive le scroll
    }
  }
});



const child = document.getElementsByTagName("button"); // On récupère la liste des boutons sur la page

for (let a = 0; a < child.length; a++) {
  child[a].addEventListener('click', function handleClick(event) { // On ajoute un listener sur chaque bouton
    document.getElementById(event.target.parentElement.id).getElementsByTagName("p")[0].classList.add("coucou"); // On ajoute la classe "coucou" (celle pour faire apparaitre le texte)
    document.getElementById(event.target.parentElement.id).getElementsByTagName("div")[0].id = "overlay"; // On active l'overlay
    event.target.parentElement.scrollIntoView(); // on scroll vers le texte
    document.getElementsByTagName("body")[0].classList.add("stop-scrolling") // On désactive le scrolling
  });
}