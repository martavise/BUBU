
"use strict";

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const welcomeCard = document.querySelector(".welcome-card");
const note = document.querySelector(".under-note");

const pages = {
  tofu: document.querySelector("#page-tofu"),
  bubi: document.querySelector("#page-bubi")
};

// Apri il quadrante scelto
document.querySelectorAll("[data-page]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPage = pages[button.dataset.page];

    if (!selectedPage) return;

    welcomeCard.hidden = true;

    if (note) note.hidden = true;

    Object.values(pages).forEach((page) => {
      page.hidden = true;
    });

    selectedPage.hidden = false;
  });
});

// Torna alla pagina iniziale
document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", () => {
    Object.values(pages).forEach((page) => {
      page.hidden = true;
    });

    welcomeCard.hidden = false;

    if (note) note.hidden = false;
  });
});
