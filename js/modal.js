import {
  setAttribute,
  createNodeWithId,
  setContent,
  createNodeWithClass,
} from "./utils.js";

const body = document.querySelector("body");

const modalContainer = createNodeWithId("div", "modal-container");
modalContainer.classList.add("fade-in");

const closeIcon = createNodeWithClass("i", "fas");
closeIcon.classList.add("fa-times");

const modalTags = [
  { tag: "button", id: "modal-close-button" },
  { tag: "h3", id: "modal-title" },
  { tag: "img", id: "modal-image" },
  { tag: "section", id: "modal-full-description" },
  { tag: "span", id: "modal-date" },
];

const createModal = () => {
  modalTags
    .map((el) => createNodeWithId(el.tag, el.id))
    .map((el) => {
      el.id === "modal-close-button" &&
        el.addEventListener("click", () => hideModal());
      modalContainer.append(el);
    });

  body.appendChild(modalContainer);
  document.querySelector("#modal-close-button").appendChild(closeIcon);
};

const setModalData = (data) => {
  try {
    const date = document.querySelector("#modal-date");
    const title = document.querySelector("#modal-title");
    const description = document.querySelector("#modal-full-description");
    const img = document.querySelector("#modal-image");

    setContent(date, data.date);
    setContent(title, data.title);
    setContent(description, data.fullDescription);

    setAttribute(img, "src", data.image);
  } catch (error) {
    console.error("Could not set modal data", error);
  }
};

const unsetModalData = () => {
  const date = document.querySelector("#modal-date");
  const title = document.querySelector("#modal-title");
  const description = document.querySelector("#modal-full-description");
  const img = document.querySelector("#modal-image");

  setContent(date, "");
  setContent(title, "");
  setContent(description, "");
  setAttribute(img, "src", "");
};

const displayModal = (data) => {
  setModalData(data);
  modalContainer.classList.replace("fade-out", "fade-in");
  (!modalContainer.classList.contains("modal-visible")) &&
    modalContainer.classList.add("modal-visible");
};

const hideModal = () => {
  modalContainer.classList.replace("fade-in", "fade-out");
  modalContainer.classList.remove("modal-visible");

  unsetModalData();
};

export { createModal, displayModal };
