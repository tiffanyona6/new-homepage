// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const buttonElement = document.getElementById("icon-menu");
const menuElement = document.getElementById("menu");

const handleMenu = () => {
  if (menuElement.classList.contains("menu--show")) {
    menuElement.classList.remove("menu--show");
  } else {
    menuElement.classList.add("menu--show");
  }
};
buttonElement.addEventListener("click", handleMenu);
