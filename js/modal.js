import { setAttribute, createNodeWithId, setContent } from "./utils.js";

const body = document.querySelector("body");
const modal = [
  { tag: "div", id: "modal-container" },
  { tag: "span", id: "modal-date" },
  { tag: "h3", id: "modal-title" },
  { tag: "section", id: "modal-full-description" },
  { tag: "button", id: "modal-close-button" },
  { tag: "img", id: "modal-image" },
];

const createModal = (data) => {
  modal.map((el) => createNodeWithId(el.tag, el.id));
};
// .forEach((el) => {
//   switch (el.id) {
//     case modal[5].id:
//       setAttribute(el, "src", data.image);
//       break;
//     case modal[4].id:
//       setContent(el, "Close");
//       break;
//     case modal[3].id:
//       setContent(el, data.fullDescription);
//       break;
//     case modal[2].id:
//       setContent(el, data.title);
//       break;
//     case modal[1].id:
//       setContent(el, data.date);
//       break;
//     default:
//       break;
//   }
// });

export default createModal;
