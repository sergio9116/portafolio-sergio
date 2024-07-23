

// obtener un arreglo con las clases del elemento.
console.log(document.body.classList[2])
console.log(document.body.classList.value)
document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)


// querySelector
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

// Agregar evento por propiedad
btnOpen.onclick = function () {
  // navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

// Método para manejar eventos
// addEventListener
// querySelectorAll
const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}


/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Frontend', 'Backend', 'FullStack'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})

const boton = document.querySelector(".nav__switch");


document.addEventListener("DOMContentLoaded", e => {
  cargarDarkMode()
  boton.addEventListener("click", toogleDarkMode)   
})

function toogleDarkMode() {
  boton.classList.toggle("active");
  document.body.classList.toggle("active");
  guardarDarkMode(boton.classList.contains("active"));
}

function guardarDarkMode(estado) {
  localStorage.setItem("DarkMode", estado)
}

function cargarDarkMode() {
  const DarkModeGuardado = localStorage.getItem("DarkMode") === "true";
  if(DarkModeGuardado) {
    boton.classList.add("active");
    document.body.classList.toggle("active");
  }
}