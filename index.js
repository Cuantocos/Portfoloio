document.addEventListener("DOMContentLoaded", () => {
  const startMenuHeader = document.querySelector(".start-menu-header");

  const updateStartMenuHeader = () => {
    if (window.innerWidth >= 769 && window.innerWidth <= 1279) {
      startMenuHeader.textContent = "Windows XP";
    } else {
      startMenuHeader.textContent = "Windows 98";
    }
  };

  // Update the header text on load
  updateStartMenuHeader();

  // Update the header text on resize
  window.addEventListener("resize", updateStartMenuHeader);
});

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
        document.querySelector("#windows-open-bar-presentacion").style.display =
          "block";
        break;
      case "icon-proyectos":
        document.querySelector("#modal-proyectos").style.display = "block";
        document.querySelector("#windows-open-bar-proyectos").style.display =
          "block";
        break;
      case "icon-experiencia":
        document.querySelector("#modal-experiencia").style.display = "block";
        document.querySelector("#windows-open-bar-exp").style.display = "block";
        break;
      case "icon-contacto":
        document.querySelector("#modal-contacto").style.display = "block";
        document.querySelector("#windows-open-bar-contacto").style.display =
          "block";
        break;
    }
  });
});

document.querySelectorAll(".close-button").forEach((element) => {
  element.addEventListener("click", () => {
    let iconId = element.getAttribute("id");

    switch (iconId) {
      case "close-button-presentacion":
        document.querySelector("#modal-presentacion").style.display = "none";
        document.querySelector("#windows-open-bar-presentacion").style.display =
          "none";
        break;
      case "close-button-proyectos":
        document.querySelector("#modal-proyectos").style.display = "none";
        document.querySelector("#windows-open-bar-proyectos").style.display =
          "none";
        break;
      case "close-button-exp":
        document.querySelector("#modal-experiencia").style.display = "none";
        document.querySelector("#windows-open-bar-exp").style.display = "none";
        break;
      case "close-button-contacto":
        document.querySelector("#modal-contacto").style.display = "none";
        document.querySelector("#windows-open-bar-contacto").style.display =
          "none";
        break;
    }
  });
});

document.querySelector(".start-button").addEventListener("click", () => {
  if (document.querySelector(".start-menu").style.display == "flex") {
    document.querySelector(".start-menu").style.display = "none";
  } else {
    document.querySelector(".start-menu").style.display = "flex";
  }
});

document.querySelectorAll(".start-menu-item").forEach((element) => {
  element.addEventListener("click", () => {
    let itemName = element.getAttribute("name");
    switch (itemName) {
      case "item-presentacion":
        document.querySelector("#modal-presentacion").style.display = "block";
        document.querySelector("#windows-open-bar-presentacion").style.display =
          "block";
        break;
      case "item-proyectos":
        document.querySelector("#modal-proyectos").style.display = "block";
        document.querySelector("#windows-open-bar-proyectos").style.display =
          "block";
        break;
      case "item-exp":
        document.querySelector("#modal-experiencia").style.display = "block";
        document.querySelector("#windows-open-bar-exp").style.display = "block";
        break;
      case "item-contacto":
        document.querySelector("#modal-contacto").style.display = "block";
        document.querySelector("#windows-open-bar-contacto").style.display =
          "block";
        break;
    }
    document.querySelector(".start-menu").style.display = "none";
  });
});
