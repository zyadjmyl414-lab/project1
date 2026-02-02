import { productsData, categoriesData } from "./data.js";
import { toggleWishlist } from "./wishlist.js";
import { addToCart } from "./cart.js";
import { showNotification } from "./notifications.js";

export let filteredProducts = [...productsData];
export let currentPage = 1;
export const productsPerPage = 9;

export function initProducts() {
  loadProducts();
  updateCategoryTitle();
  initDarkMode();
}

export function updateCategoryTitle() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");
  const title = document.getElementById("categoryTitle");
  if (!title) return;

  if (category && categoriesData[category]) {
    title.textContent = categoriesData[category].name;
  }
}

export function loadProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const items = filteredProducts.slice(start, end);

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-products">
        <i class="fas fa-box-open"></i>
        <h3>لا توجد منتجات</h3>
        <p>لم يتم العثور على منتجات مطابقة لبحثك</p>
        <button class="btn btn-primary" onclick="clearFilters()">مسح الفلاتر</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(renderProduct).join("");
  const total = document.getElementById("totalProducts");
  if (total) total.textContent = filteredProducts.length;
  updatePagination();
}

function renderProduct(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <div class="product-wishlist" onclick="toggleWishlist(this, '${product.title}')">
          <i class="far fa-heart"></i>
        </div>
        <i class="${product.icon}"></i>
      </div>

      <div class="product-details">
        <div class="product-category">${product.categoryName}</div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-text">(${product.reviews})</span>
        </div>

        <div class="product-price">
          <span class="current-price">${product.price} ر.س</span>
          ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ر.س</span>` : ""}
        </div>

        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.title}', ${product.price})">
            <i class="fas fa-cart-plus"></i> أضف للسلة
          </button>
          <button class="btn-quick-view" onclick="showNotification('عرض سريع: ${product.title} - ${product.price} ر.س', 'info')">
            <i class="fas fa-eye"></i> عرض سريع
          </button>
        </div>
      </div>
    </div>
  `;
}

export function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : "") +
    '<i class="far fa-star"></i>'.repeat(empty)
  );
}

export function changePage(page) {
  const total = Math.ceil(filteredProducts.length / productsPerPage);

  if (page === "prev" && currentPage > 1) currentPage--;
  else if (page === "next" && currentPage < total) currentPage++;
  else if (typeof page === "number") currentPage = page;

  loadProducts();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function updatePagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  const total = Math.ceil(filteredProducts.length / productsPerPage);
  let html = `
    <div class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <a href="#" onclick="changePage('prev')"><i class="fas fa-chevron-right"></i></a>
    </div>
  `;

  for (let i = 1; i <= total && i <= 5; i++) {
    html += `
      <div class="page-item ${currentPage === i ? "active" : ""}">
        <a href="#" onclick="changePage(${i})">${i}</a>
      </div>
    `;
  }

  html += `
    <div class="page-item ${currentPage === total ? "disabled" : ""}">
      <a href="#" onclick="changePage('next')"><i class="fas fa-chevron-left"></i></a>
    </div>
  `;
  pagination.innerHTML = html;
}

function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkModeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("darkMode", "true");
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("darkMode", "false");
    }
  });
}