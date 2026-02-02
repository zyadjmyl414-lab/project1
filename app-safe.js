document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => loader.classList.add("hidden"));
  }

  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.classList.remove("show");
  }

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const current = window.location.pathname + window.location.search;
      window.location.href = `login.html?redirect=${encodeURIComponent(current)}`;
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar && overlay) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
      navbar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }

  const cartBtn = document.querySelector(".cart-btn");
  const cartSidebar = document.querySelector(".cart-sidebar");

  if (cartBtn && cartSidebar && overlay) {
    cartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      cartSidebar.classList.add("open");
      overlay.classList.add("show");
    });

    overlay.addEventListener("click", () => {
      cartSidebar.classList.remove("open");
    });
  }
});

function safeNavigate(url) {
  window.location.assign(url);
}

function showAddModal() {
  showSection('users');
}

function showAddUserModal() {
  openModal('userModal');
}

function showAddProductModal() {
  openModal('productModal');
}

function showAddOfferModal() {
  openModal('offerModal');
}