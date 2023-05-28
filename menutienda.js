// Opcional: Agregar funcionalidad para cerrar el menú desplegable al hacer clic fuera de él
document.addEventListener("click", function(event) {
    var subMenus = document.querySelectorAll(".sub-menu");
    if (!event.target.closest(".category-item")) {
      subMenus.forEach(function(subMenu) {
        subMenu.style.display = "none";
      });
    }
  });
  