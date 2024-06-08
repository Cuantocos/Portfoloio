document.addEventListener("DOMContentLoaded", () => {
  const startMenuHeader = document.querySelector(".start-menu-header");

  const updateStartMenuHeader = () => {
    if (window.innerWidth >= 769 && window.innerWidth <= 1279) {
      startMenuHeader.textContent = "Windows XP";
    } else {
      startMenuHeader.textContent = "Windows 98";
    }
  };

  updateStartMenuHeader();

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
        openModal("#modal-presentacion", "#windows-open-bar-presentacion");
        break;
      case "icon-proyectos":
        openModal("#modal-proyectos", "#windows-open-bar-proyectos");
        break;
      case "icon-experiencia":
        openModal("#modal-experiencia", "#windows-open-bar-exp");
        break;
      case "icon-contacto":
        openModal("#modal-contacto", "#windows-open-bar-contacto");
        break;
    }
  });
});

document.querySelectorAll(".close-button").forEach((element) => {
  element.addEventListener("click", () => {
    let buttonId = element.getAttribute("id");

    switch (buttonId) {
      case "close-button-presentacion":
        closeModal("#modal-presentacion", "#windows-open-bar-presentacion");
        break;
      case "close-button-proyectos":
        closeModal("#modal-proyectos", "#windows-open-bar-proyectos");
        break;
      case "close-button-exp":
        closeModal("#modal-experiencia", "#windows-open-bar-exp");
        break;
      case "close-button-contacto":
        closeModal("#modal-contacto", "#windows-open-bar-contacto");
        break;
    }
  });
});

function openModal(modalId, barId) {
  document.querySelector(modalId).style.display = "block";
  document.querySelector(barId).style.display = "block";
}

function closeModal(modalId, barId) {
  document.querySelector(modalId).style.display = "none";
  document.querySelector(barId).style.display = "none";
}

document.querySelector(".start-button").addEventListener("click", () => {
  const startMenu = document.querySelector(".start-menu");
  if (startMenu.style.display === "flex") {
    startMenu.style.display = "none";
  } else {
    startMenu.style.display = "flex";
  }
});

document.querySelectorAll(".start-menu-item").forEach((element) => {
  element.addEventListener("click", () => {
    let itemName = element.getAttribute("name");
    switch (itemName) {
      case "item-presentacion":
        openModal("#modal-presentacion", "#windows-open-bar-presentacion");
        break;
      case "item-proyectos":
        openModal("#modal-proyectos", "#windows-open-bar-proyectos");
        break;
      case "item-exp":
        openModal("#modal-experiencia", "#windows-open-bar-exp");
        break;
      case "item-contacto":
        openModal("#modal-contacto", "#windows-open-bar-contacto");
        break;
    }
    document.querySelector(".start-menu").style.display = "none";
  });
});

function dragElement(elm, header) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elm.style.top = elm.offsetTop - pos2 + "px";
    elm.style.left = elm.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  header.onmousedown = dragMouseDown;
}

document.querySelectorAll(".container-modal").forEach((modal) => {
  let header = modal.querySelector(".container-header");
  if (header) {
    dragElement(modal, header);
  }

  let resizeHandle = modal.querySelector(".resize-handle");
  if (resizeHandle) {
    resizeHandle.addEventListener("mousedown", function (e) {
      e.preventDefault();
      document.onmousemove = (e) => {
        modal.style.width = e.clientX - modal.offsetLeft + "px";
        modal.style.height = e.clientY - modal.offsetTop + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    });
  }
});
