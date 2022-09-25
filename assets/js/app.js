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
})

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;

  video.currentTime = delay;
}, 33.3)
