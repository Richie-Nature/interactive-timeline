import { setAttribute, createNodeWithId, setContent } from "./utils.js";

const body = document.querySelector("body");
const modalContainer = createNodeWithId("div", "modal-container");
const modalTags = [
  { tag: "span", id: "modal-date" },
  { tag: "h3", id: "modal-title" },
  { tag: "section", id: "modal-full-description" },
  { tag: "button", id: "modal-close-button" },
  { tag: "img", id: "modal-image" },
];

const createModal = () => {
  modalTags
    .map((el) => createNodeWithId(el.tag, el.id))
    .map((el) => {
      el.id === "modal-close-button" &&
        el.addEventListener("click", () => makeModalInvisible());
      modalContainer.append(el);
    });

  body.appendChild(modalContainer);
};

const setModalData = (data) => {
  try {
    const date = document.querySelector("#modal-date");
    const title = document.querySelector("#modal-title");
    const description = document.querySelector("#modal-full-description");
    const button = document.querySelector("#modal-close-button");
    const img = document.querySelector("#modal-image");

    setContent(date, data.date);
    setContent(title, data.title);
    setContent(description, data.fullDescription);
    setContent(button, "Close");
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

const makeModalInvisible = () => {
  modalContainer.classList.remove("modal-visible");
  unsetModalData();
};

export { createModal, setModalData };
