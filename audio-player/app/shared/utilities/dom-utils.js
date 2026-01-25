export function createElement(selector) {
  return document.querySelector(selector);
}

export function createElements(selectors) {
  const elements = {};
  for (const [key, selector] of Object.entries(selectors)) {
    elements[key] = document.querySelector(selector);
  }
  return elements;
}

export function addEventListener(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler);
  }
}

export function removeEventListener(element, event, handler) {
  if (element) {
    element.removeEventListener(event, handler);
  }
}
