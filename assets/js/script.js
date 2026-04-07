// script.js

document.addEventListener('DOMContentLoaded', () => {
  /* ===============================
     Navbar Links
  ================================== */
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetPage = link.textContent.toLowerCase();
      pages.forEach(page => {
        if (page.dataset.page === targetPage) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
    });
  });

  /* ===============================
     Portfolio Filters (Buttons)
  ================================== */
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');

  if (filterBtns.length && filterItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.textContent.toLowerCase();

        filterItems.forEach(item => {
          const itemCategory = item.dataset.category.toLowerCase();
          if (category === 'all' || category === itemCategory) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });
  }

  /* ===============================
     Portfolio Filters (Select Dropdown)
  ================================== */
  const selectBtn = document.querySelector('[data-select]');
  const selectValue = document.querySelector('[data-select-value]');
  const selectList = document.querySelectorAll('[data-select-item]');

  if (selectBtn && selectValue) {
    selectBtn.addEventListener('click', () => {
      selectBtn.classList.toggle('active');
    });

    selectList.forEach(item => {
      item.addEventListener('click', () => {
        const value = item.textContent;
        selectValue.textContent = value;
        selectBtn.classList.remove('active');

        // Simular click en el botón del filtro correspondiente
        filterBtns.forEach(btn => {
          if (btn.textContent === value) btn.click();
        });
      });
    });
  }

  /* ===============================
     Sidebar Toggle
  ================================== */
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  const sidebar = document.querySelector('[data-sidebar]');

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }

  /* ===============================
     Modal for Testimonials (if needed)
  ================================== */
  const modalContainer = document.querySelector('[data-modal-container]');
  const overlay = document.querySelector('[data-overlay]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');

  if (modalContainer && overlay && modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalContainer.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      modalContainer.classList.remove('active');
    });
  }
});