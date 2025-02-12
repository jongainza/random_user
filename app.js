import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

import get from "./utils/getElement.js";

const btn = get(".btn");

window.addEventListener("DOMContentLoaded", () => loadInfo());
btn.addEventListener("click", () => loadInfo());

const loadInfo = () => {
  getUser().then((data) => displayUser(data));
};
