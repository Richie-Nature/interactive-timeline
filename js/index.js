import { dates } from "./data.js";
import { createModal, setModalData } from "./modal.js";
import { createNodeWithClass } from "./utils.js";

const container = document.querySelector(".timeline");
const summaryContainer = createNodeWithClass("div", "timeline-item");
const summaryCard = [
  { tag: "h2", class: "timeline-item-title", content: "" },
  { tag: "span", class: "timeline-item-date", content: "" },
  { tag: "p", class: "timeline-item-summary", content: "" },
  { tag: "button", class: "timeline-item-more-info", content: "" },
];

const createSummaryCards = (date) => {
  return summaryCard
    .map((el, index) => {
      el.content = getNodeContent(date, index);
      return el;
    })
    .map((el) => createNodeWithClass(el.tag, el.class, el.content));
};

const getNodeContent = (data, index) => {
  switch (index) {
    case 0:
      return data.title;
    case 1:
      return data.date;
    case 2:
      return data.summary;
    case 3:
      return "Read more";
    default:
      return "";
  }
};

const mapDatesToTemplate = () => {
  dates.map((date) =>
    createSummaryCards(date).map((el) => {
      el.classList.contains("timeline-item-more-info") &&
        el.addEventListener("click", () => setModalData(date));
      return summaryContainer.append(el);
    })
  );
};

const appendSummaryContainerToBody = () =>
  container.appendChild(summaryContainer);

(function () {
  mapDatesToTemplate();
  appendSummaryContainerToBody();
  createModal();
})();
