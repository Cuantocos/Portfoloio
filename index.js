document.addEventListener("DOMContentLoaded", () => {
  const controllerJs = document.querySelector(".controller-windows-js");

  const loadScript = (src) => {
    const newScript = document.createElement("script");
    newScript.src = src;
    newScript.className = "controller-windows-js";
    document.body.appendChild(newScript);
  };

  const controllJs = () => {
    if (controllerJs) {
      controllerJs.remove(); // Remover el script existente
    }

    const timestamp = new Date().getTime(); // Añade un parámetro único para evitar caché
    if (window.innerWidth >= 769) {
      loadScript(`w-98-xp.js?timestamp=${timestamp}`);
    } else {
      loadScript(`w-8.js?timestamp=${timestamp}`);
    }
  };

  controllJs();
  window.addEventListener("resize", controllJs);
});
