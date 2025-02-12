import get from "./getElement.js";
const img = get(".user-img");
const title = get(".user-title");
const name = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  btns.forEach((btn) => btn.classList.remove("active"));
  img.src = person.image;
  name.textContent = person.name;
  title.textContent = `My name is `;
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      name.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};
export default displayUser;
