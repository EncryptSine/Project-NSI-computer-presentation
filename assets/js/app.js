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

window.onscroll = function() {Sticky()}; // Lance la fonction pour le sticky à chaque scroll

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