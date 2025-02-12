const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`Wrong selector ${selector}`);
  }
};

export default getElement;
