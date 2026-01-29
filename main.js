import { initProducts } from "./products.js";
import { filterProducts, clearFilters } from "./filters.js";

document.addEventListener("DOMContentLoaded", () => {
  initProducts();

  // ربط الفلاتر
  document.querySelectorAll(".filter-checkbox input").forEach(input => {
    input.addEventListener("change", filterProducts);
  });
});
