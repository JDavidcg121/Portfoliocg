"use strict";

/* -----------------------------
   Toggle Function Helper
----------------------------- */
const elementToggle = (elem) => elem.classList.toggle("active");

/* -----------------------------
   Sidebar
----------------------------- */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => elementToggle(sidebar));

/* -----------------------------
   Testimonials Modal
----------------------------- */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (const item of testimonialsItem) {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal();
  });
}

modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

/* -----------------------------
   Custom Select + Filtering
----------------------------- */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", () => elementToggle(select));

const filterContent = (value) => {
  for (const item of filterItems) {
    if (value === "all" || value === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
};

for (const item of selectItems) {
  item.addEventListener("click", function () {
    const value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggle(select);
    filterContent(value);
  });
}

// Buttons for desktop
let lastClickedBtn = filterBtn[0];

for (const btn of filterBtn) {
  btn.addEventListener("click", function () {
    const value = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;

    filterContent(value);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

/* -----------------------------
   Contact Form Validation
----------------------------- */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (const input of formInputs) {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
}

/* -----------------------------
   Page Navigation
----------------------------- */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (const navLink of navigationLinks) {
  navLink.addEventListener("click", function () {
    const target = this.innerHTML.toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (target === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}