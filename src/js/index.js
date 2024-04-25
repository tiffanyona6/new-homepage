// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const buttonElement = document.getElementById("icon-menu");
const menuElement = document.getElementById("menu");

const handleMenu = () => {
  if (menuElement.classList.contains("menu--show")) {
    menuElement.classList.remove("menu--show");
    document.body.classList.remove("open");
  } else {
    menuElement.classList.add("menu--show");
    document.body.classList.add("open");
  }
};
buttonElement.addEventListener("click", handleMenu);
