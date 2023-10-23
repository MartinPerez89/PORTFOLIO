//Obtener los elementos del HTML para poder agregarle funcionalidad

let menu = document.getElementById("menu");
let toggle_open = document.getElementById("toggle_open");
let toggle_close = document.getElementById("toggle_close");

toggle_open.addEventListener("click", toggleMenu);
toggle_close.addEventListener(
  "click",
  toggleMenu
); /*al efectuar un "click" en esos elementos, se llama a la funcion toggleMenu */

function toggleMenu() {
  menu.classList.toggle("show-menu");
  if (menu.classList.contains("show-menu")) {
    toggle_open.style.display = "none";
    toggle_close.style.display = "block";
  } else {
    toggle_open.style.display = "block";
    toggle_close.style.display = "none";
  }
} /*Accede a la lista de clases del elemento, y agrega la clase "show-menu" si no esta presente, o la elimina si esta presente, luego muestra el menu o la X dependiendo de si el menu se esta mostrando o no*/
