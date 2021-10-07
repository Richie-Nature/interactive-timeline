const createElement = (arg) => document.createElement(arg);

const addClass = (el, arg) => el.classList.add(arg);

const setAttribute = (el, attr, arg) => el.setAttribute(attr, arg);

const setContent = (el, arg) => el.textContent = arg;

const createNodeWithId = (el, id) => {
  const node = createElement(el);
  setAttribute(node, "id", id);
  return node;
};

const createNodeWithClass = (el, cls, content) => {
  const node = createElement(el);
  addClass(node, cls);
  setContent(node, content);
  return node;
};

export {
  createElement,
  addClass,
  setContent,
  setAttribute,
  createNodeWithId,
  createNodeWithClass,
};
