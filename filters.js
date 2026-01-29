import { productsData } from "./data.js";
import { loadProducts, filteredProducts, currentPage } from "./products.js";

export function filterProducts() {
  const checked = document.querySelectorAll(".filter-checkbox input[value]:checked");
  const min = parseInt(document.getElementById("minPrice")?.value) || 0;
  const max = parseInt(document.getElementById("maxPrice")?.value) || Infinity;

  let categories = Array.from(checked).map((c) => c.value);
  let result = [...productsData];

  if (categories.length && !categories.includes("all")) {
    result = result.filter((p) => categories.includes(p.category));
  }

  result = result.filter((p) => p.price >= min && p.price <= max);

  // تحديث المنتجات المفلترة
  filteredProducts.splice(0, filteredProducts.length, ...result);
  currentPage = 1;
  loadProducts();
}

export function clearFilters() {
  document.querySelectorAll(".filter-checkbox input").forEach((cb) => {
    cb.checked = cb.value === "all";
  });
  document.getElementById("minPrice").value = 0;
  document.getElementById("maxPrice").value = 1000;

  filteredProducts.splice(0, filteredProducts.length, ...productsData);
  currentPage = 1;
  loadProducts();
}
