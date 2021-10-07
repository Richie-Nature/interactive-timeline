import { dates } from "./data.js";
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

(function () {
  dates.map((date) =>
    createSummaryCards(date).map((el) => summaryContainer.append(el))
  );
  container.appendChild(summaryContainer);
})();


