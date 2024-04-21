document.querySelectorAll(".icon-desktop").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".icon-desktop").forEach((el) => {
      el.classList.remove("selected");
    });

    element.classList.add("selected");
  });
});

document.querySelectorAll(".icon-desktop").forEach((element) => {
  element.addEventListener("dblclick", () => {
    let iconId = element.getAttribute("id");

    switch (iconId) {
      case "icon-presentacion":
        document.querySelector("#modal-presentacion").style.display = "block";
        break;
      case "icon-proyectos":
        document.querySelector("#modal-proyectos").style.display = "block";
        break;
      case "icon-experiencia":
        document.querySelector("#modal-experiencia").style.display = "block";
        break;
      case "icon-contacto":
        document.querySelector("#modal-contacto").style.display = "block";
        break;
    }
  });
});
