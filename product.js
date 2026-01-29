// // Products data
// const productsData = [
//   {
//     id: 1,
//     title: "طقم أواني طبخ ستانلس ستيل",
//     category: "home",
//     categoryName: "أدوات منزلية",
//     price: 299,
//     oldPrice: 399,
//     rating: 4.8,
//     reviews: 128,
//     icon: "fas fa-blender",
//     badge: "خصم 25%",
//     description: "طقم أواني طبخ عالي الجودة من الستانلس ستيل مقاوم للصدأ",
//   },
//   {
//     id: 2,
//     title: "ساعة رياضية ذكية",
//     category: "electronics",
//     categoryName: "إلكترونيات",
//     price: 449,
//     oldPrice: 549,
//     rating: 4.6,
//     reviews: 256,
//     icon: "fas fa-watch",
//     badge: "جديد",
//     description: "ساعة رياضية ذكية مع متتبع للصحة واللياقة",
//   },
//   // بقية المنتجات كما هي بدون تعديل
//   {
//     id: 3,
//     title: "عطر فاخر للرجال",
//     category: "perfume",
//     categoryName: "عطور",
//     price: 199,
//     oldPrice: 299,
//     rating: 4.7,
//     reviews: 89,
//     icon: "fas fa-spray-can",
//     badge: "خصم 33%",
//     description: "عطر فاخر برائحة شرقية مميزة تدوم طويلاً",
//   },
//   {
//     id: 4,
//     title: "حقيبة سفر متوسطة",
//     category: "travel",
//     categoryName: "سفر",
//     price: 349,
//     oldPrice: 449,
//     rating: 4.5,
//     reviews: 167,
//     icon: "fas fa-suitcase-rolling",
//     badge: "عرض خاص",
//     description: "حقيبة سفر متوسطة الحجم بعجلات وقبضة مريحة",
//   },
//   {
//     id: 5,
//     title: "قمصان رجالية قطنية",
//     category: "men",
//     categoryName: "ملابس رجالية",
//     price: 89,
//     oldPrice: 129,
//     rating: 4.4,
//     reviews: 342,
//     icon: "fas fa-tshirt",
//     badge: "خصم 30%",
//     description: "قمصان رجالية قطنية 100% مريحة وانيقة",
//   },
//   {
//     id: 6,
//     title: "أحذية رياضية رجالية",
//     category: "shoes",
//     categoryName: "أحذية",
//     price: 279,
//     oldPrice: 379,
//     rating: 4.6,
//     reviews: 198,
//     icon: "fas fa-shoe-prints",
//     badge: "خصم 25%",
//     description: "أحذية رياضية مريحة مع تكنولوجيا امتصاص الصدمات",
//   },
//   {
//     id: 7,
//     title: "سكاكين مطبخ احترافية",
//     category: "home",
//     categoryName: "أدوات منزلية",
//     price: 159,
//     oldPrice: 219,
//     rating: 4.8,
//     reviews: 76,
//     icon: "fas fa-cut",
//     badge: "جديد",
//     description: "طقم سكاكين مطبخ احترافية حادة ومتينة",
//   },
//   {
//     id: 8,
//     title: "حقيبة يد نسائية",
//     category: "women",
//     categoryName: "إكسسوارات",
//     price: 189,
//     oldPrice: 249,
//     rating: 4.3,
//     reviews: 145,
//     icon: "fas fa-shopping-bag",
//     badge: "خصم 24%",
//     description: "حقيبة يد نسائية أنيقة بجيوب متعددة",
//   },
//   {
//     id: 9,
//     title: "عطر نسائي فاخر",
//     category: "perfume",
//     categoryName: "عطور",
//     price: 299,
//     oldPrice: 399,
//     rating: 4.7,
//     reviews: 112,
//     icon: "fas fa-spray-can",
//     badge: "خصم 25%",
//     description: "عطر نسائي فاخر برائحة زهرية شرقية",
//   },
//   {
//     id: 10,
//     title: "طقم فناجين قهوة",
//     category: "home",
//     categoryName: "أدوات منزلية",
//     price: 79,
//     oldPrice: 109,
//     rating: 4.5,
//     reviews: 234,
//     icon: "fas fa-mug-hot",
//     badge: "عرض محدود",
//     description: "طقم فناجين قهوة أنيق من البورسلين",
//   },
//   {
//     id: 11,
//     title: "ساعة يد كلاسيكية",
//     category: "accessories",
//     categoryName: "إكسسوارات",
//     price: 349,
//     oldPrice: 499,
//     rating: 4.6,
//     reviews: 87,
//     icon: "fas fa-clock",
//     badge: "خصم 30%",
//     description: "ساعة يد كلاسيكية بجلد طبيعي ومقاومة للماء",
//   },
//   {
//     id: 12,
//     title: "حقيبة ظهر للسفر",
//     category: "travel",
//     categoryName: "سفر",
//     price: 199,
//     oldPrice: 279,
//     rating: 4.4,
//     reviews: 156,
//     icon: "fas fa-backpack",
//     badge: "خصم 28%",
//     description: "حقيبة ظهر للسفر بسعة كبيرة ومقاومة للماء",
//   },
// ];
// let filteredProducts = [...productsData];
// let currentPage = 1;
// const productsPerPage = 9;

// // ================= INIT =================
// document.addEventListener("DOMContentLoaded", () => {
//   loadProducts();
//   updateCategoryTitle();
// });

// // ================= CATEGORY TITLE =================
// function updateCategoryTitle() {
//   const params = new URLSearchParams(window.location.search);
//   const category = params.get("cat");
//   const title = document.getElementById("categoryTitle");

//   if (!title) return;

//   if (category && window.shamelMarket?.categories?.[category]) {
//     title.textContent = window.shamelMarket.categories[category].name;
//   }
// }

// // ================= LOAD PRODUCTS =================
// function loadProducts() {
//   const grid = document.getElementById("productsGrid");
//   if (!grid) return;

//   const start = (currentPage - 1) * productsPerPage;
//   const end = start + productsPerPage;
//   const items = filteredProducts.slice(start, end);

//   if (items.length === 0) {
//     grid.innerHTML = `
//       <div class="empty-products">
//         <i class="fas fa-box-open"></i>
//         <h3>لا توجد منتجات</h3>
//         <p>لم يتم العثور على منتجات مطابقة لبحثك</p>
//         <button class="btn btn-primary" onclick="clearFilters()">مسح الفلاتر</button>
//       </div>
//     `;
//     return;
//   }

//   grid.innerHTML = items.map(renderProduct).join("");

//   const total = document.getElementById("totalProducts");
//   if (total) total.textContent = filteredProducts.length;

//   updatePagination();
// }

// function renderProduct(product) {
//   return `
//     <div class="product-card" data-category="${product.category}">
//       <div class="product-image">
//         ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
//         <div class="product-wishlist" onclick="toggleWishlist(this, '${product.title}')">
//           <i class="far fa-heart"></i>
//         </div>
//         <i class="${product.icon}"></i>
//       </div>

//       <div class="product-details">
//         <div class="product-category">${product.categoryName}</div>
//         <h3 class="product-title">${product.title}</h3>
//         <p class="product-description">${product.description}</p>

//         <div class="product-rating">
//           <div class="stars">${generateStars(product.rating)}</div>
//           <span class="rating-text">(${product.reviews})</span>
//         </div>

//         <div class="product-price">
//           <span class="current-price">${product.price} ر.س</span>
//           ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ر.س</span>` : ""}
//         </div>

//         <div class="product-actions">
//           <button class="btn-add-cart" onclick="addToCart('${product.title}', ${product.price})">
//             <i class="fas fa-cart-plus"></i> أضف للسلة
//           </button>
//           <button class="btn-quick-view" onclick="quickView('${product.title}', ${product.price})">
//             <i class="fas fa-eye"></i> عرض سريع
//           </button>
//         </div>
//       </div>
//     </div>
//   `;
// }

// // ================= STARS =================
// function generateStars(rating) {
//   const full = Math.floor(rating);
//   const half = rating % 1 >= 0.5;
//   const empty = 5 - full - (half ? 1 : 0);

//   return (
//     '<i class="fas fa-star"></i>'.repeat(full) +
//     (half ? '<i class="fas fa-star-half-alt"></i>' : "") +
//     '<i class="far fa-star"></i>'.repeat(empty)
//   );
// }

// // ================= FILTER =================
// function filterProducts() {
//   const checked = document.querySelectorAll(
//     ".filter-checkbox input[value]:checked",
//   );
//   const min = parseInt(document.getElementById("minPrice")?.value) || 0;
//   const max = parseInt(document.getElementById("maxPrice")?.value) || Infinity;

//   if (categories.length && !categories.includes("all")) {
//     filteredProducts = productsData.filter((p) =>
//       categories.includes(p.category),
//     );
//   } else {
//     filteredProducts = [...productsData];
//   }

//   result = result.filter((p) => p.price >= min && p.price <= max);

//   filteredProducts = result;
//   currentPage = 1;
//   loadProducts();
// }

// function clearFilters() {
//   document.querySelectorAll(".filter-checkbox input").forEach((cb) => {
//     cb.checked = cb.value === "all";
//   });

//   const min = document.getElementById("minPrice");
//   const max = document.getElementById("maxPrice");
//   if (min) min.value = 0;
//   if (max) max.value = 1000;

//   filteredProducts = [...productsData];
//   currentPage = 1;
//   loadProducts();
// }

// // ================= SORT =================
// const sortSelect = document.getElementById("sortSelect");
// if (sortSelect) {
//   sortSelect.addEventListener("change", () => {
//     const v = sortSelect.value;

//     const sortMap = {
//       "price-low": (a, b) => a.price - b.price,
//       "price-high": (a, b) => b.price - a.price,
//       rating: (a, b) => b.rating - a.rating,
//       newest: (a, b) => b.id - a.id,
//     };

//     filteredProducts.sort(sortMap[v] || (() => 0));
//     currentPage = 1;
//     loadProducts();
//   });
// }

// // ================= PAGINATION =================
// function changePage(page) {
//   const total = Math.ceil(filteredProducts.length / productsPerPage);

//   if (page === "prev" && currentPage > 1) currentPage--;
//   else if (page === "next" && currentPage < total) currentPage++;
//   else if (typeof page === "number") currentPage = page;

//   loadProducts();
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// function updatePagination() {
//   const pagination = document.getElementById("pagination");
//   if (!pagination) return;

//   const total = Math.ceil(filteredProducts.length / productsPerPage);

//   let html = `
//     <div class="page-item ${currentPage === 1 ? "disabled" : ""}">
//       <a href="#" onclick="changePage('prev')"><i class="fas fa-chevron-right"></i></a>
//     </div>
//   `;

//   for (let i = 1; i <= total && i <= 5; i++) {
//     html += `
//       <div class="page-item ${currentPage === i ? "active" : ""}">
//         <a href="#" onclick="changePage(${i})">${i}</a>
//       </div>
//     `;
//   }

//   html += `
//     <div class="page-item ${currentPage === total ? "disabled" : ""}">
//       <a href="#" onclick="changePage('next')"><i class="fas fa-chevron-left"></i></a>
//     </div>
//   `;

//   pagination.innerHTML = html;
// }

// // ================= WISHLIST =================
// function toggleWishlist(el, name) {
//   el.classList.toggle("active");
//   const icon = el.querySelector("i");

//   icon.classList.toggle("fas");
//   icon.classList.toggle("far");

//   showNotification(
//     el.classList.contains("active")
//       ? `تم إضافة ${name} إلى المفضلة`
//       : `تم إزالة ${name} من المفضلة`,
//     el.classList.contains("active") ? "success" : "info",
//   );
// }

// // ================= QUICK VIEW =================
// function quickView(title, price) {
//   showNotification(`عرض سريع: ${title} - ${price} ر.س`, "info");
// }

// // ================= NOTIFICATION =================
// function showNotification(message, type = "info") {
//   const n = document.createElement("div");
//   n.className = `notification ${type}`;
//   n.textContent = message;

//   document.body.appendChild(n);

//   setTimeout(() => n.remove(), 3000);
// }

// // let filteredProducts = [...productsData];
// // let currentPage = 1;
// // const productsPerPage = 9;

// // // Initialize page
// // document.addEventListener("DOMContentLoaded", function () {
// //   initHeader();
// //   loadProducts();
// //   updateCategoryTitle();
// //   initCart();
// //   initDarkMode();
// //   initSearch();
// //   initBackToTop();
// // });

// // // Update category title based on URL
// // function updateCategoryTitle() {
// //   const urlParams = new URLSearchParams(window.location.search);
// //   const category = urlParams.get("cat");
// //   const categoryTitle = document.getElementById("categoryTitle");

// //   if (category && window.shamelMarket && window.shamelMarket.categories) {
// //     const catData = window.shamelMarket.categories[category];
// //     if (catData) {
// //       categoryTitle.textContent = catData.name;
// //     }
// //   }
// // }

// // // Load products
// // function loadProducts() {
// //   const productsGrid = document.getElementById("productsGrid");
// //   const startIndex = (currentPage - 1) * productsPerPage;
// //   const endIndex = startIndex + productsPerPage;
// //   const productsToShow = filteredProducts.slice(startIndex, endIndex);

// //   if (productsToShow.length === 0) {
// //     productsGrid.innerHTML = `
// //                     <div class="empty-products">
// //                         <i class="fas fa-box-open"></i>
// //                         <h3>لا توجد منتجات</h3>
// //                         <p>لم يتم العثور على منتجات مطابقة لبحثك</p>
// //                         <button class="btn btn-primary" onclick="clearFilters()">مسح الفلاتر</button>
// //                     </div>
// //                 `;
// //     return;
// //   }

// //   productsGrid.innerHTML = productsToShow
// //     .map(
// //       (product) => `
// //                 <div class="product-card" data-category="${product.category}">
// //                     <div class="product-image">
// //                         ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
// //                         <div class="product-wishlist" onclick="toggleWishlist(this, '${product.title}')">
// //                             <i class="far fa-heart"></i>
// //                         </div>
// //                         <i class="${product.icon}"></i>
// //                     </div>
// //                     <div class="product-details">
// //                         <div class="product-category">${product.categoryName}</div>
// //                         <h3 class="product-title">${product.title}</h3>
// //                         <p class="product-description">${product.description}</p>
// //                         <div class="product-rating">
// //                             <div class="stars">
// //                                 ${generateStars(product.rating)}
// //                             </div>
// //                             <span class="rating-text">(${product.reviews})</span>
// //                         </div>
// //                         <div class="product-price">
// //                             <span class="current-price">${product.price} ر.س</span>
// //                             ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ر.س</span>` : ""}
// //                         </div>
// //                         <div class="product-actions">
// //                             <button class="btn-add-cart" onclick="addToCart('${product.title}', ${product.price})">
// //                                 <i class="fas fa-cart-plus"></i>
// //                                 أضف للسلة
// //                             </button>
// //                             <button class="btn-quick-view" onclick="quickView('${product.title}', ${product.price}, '${product.icon}', ${product.rating})">
// //                                 <i class="fas fa-eye"></i>
// //                                 عرض سريع
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             `,
// //     )
// //     .join("");

// //   // Update total count
// //   document.getElementById("totalProducts").textContent =
// //     filteredProducts.length;

// //   // Update pagination
// //   updatePagination();
// // }

// // // Generate stars
// // function generateStars(rating) {
// //   const fullStars = Math.floor(rating);
// //   const halfStar = rating % 1 >= 0.5;
// //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

// //   let stars = "";
// //   for (let i = 0; i < fullStars; i++) {
// //     stars += '<i class="fas fa-star"></i>';
// //   }
// //   if (halfStar) {
// //     stars += '<i class="fas fa-star-half-alt"></i>';
// //   }
// //   for (let i = 0; i < emptyStars; i++) {
// //     stars += '<i class="far fa-star"></i>';
// //   }
// //   return stars;
// // }

// // // Filter products
// // function filterProducts() {
// //   const categoryCheckboxes = document.querySelectorAll(
// //     ".filter-checkbox input[value]:checked",
// //   );
// //   const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
// //   const maxPrice =
// //     parseInt(document.getElementById("maxPrice").value) || Infinity;

// //   let filtered = [...productsData];

// //   // Filter by category
// //   const selectedCategories = Array.from(categoryCheckboxes).map(
// //     (cb) => cb.value,
// //   );
// //   if (selectedCategories.length > 0 && !selectedCategories.includes("all")) {
// //     filtered = filtered.filter((product) =>
// //       selectedCategories.includes(product.category),
// //     );
// //   }

// //   // Filter by price
// //   filtered = filtered.filter(
// //     (product) => product.price >= minPrice && product.price <= maxPrice,
// //   );

// //   filteredProducts = filtered;
// //   currentPage = 1;
// //   loadProducts();
// // }

// // // Apply filters
// // function applyFilters() {
// //   filterProducts();
// //   showNotification("تم تطبيق الفلاتر بنجاح", "success");
// // }

// // // Clear filters
// // function clearFilters() {
// //   document.querySelectorAll(".filter-checkbox input").forEach((cb) => {
// //     cb.checked = cb.value === "all";
// //   });
// //   document.getElementById("minPrice").value = 0;
// //   document.getElementById("maxPrice").value = 1000;
// //   filteredProducts = [...productsData];
// //   currentPage = 1;
// //   loadProducts();
// //   showNotification("تم مسح الفلاتر", "info");
// // }

// // // Sort products
// // const sortSelect = document.getElementById("sortSelect");
// // if (sortSelect) {
// //   sortSelect.addEventListener("change", function () {
// //     const sortValue = this.value;

// //     switch (sortValue) {
// //       case "price-low":
// //         filteredProducts.sort((a, b) => a.price - b.price);
// //         break;
// //       case "price-high":
// //         filteredProducts.sort((a, b) => b.price - a.price);
// //         break;
// //       case "rating":
// //         filteredProducts.sort((a, b) => b.rating - a.rating);
// //         break;
// //       case "newest":
// //         filteredProducts.sort((a, b) => b.id - a.id);
// //         break;
// //       default:
// //         filteredProducts = [...productsData];
// //     }

// //     currentPage = 1;
// //     loadProducts();
// //   });
// // }

// // // Change view
// // function setView(view) {
// //   const productsGrid = document.getElementById("productsGrid");
// //   const gridBtn = document.getElementById("gridView");
// //   const listBtn = document.getElementById("listView");

// //   if (view === "grid") {
// //     productsGrid.classList.remove("list-view");
// //     gridBtn.classList.add("active");
// //     listBtn.classList.remove("active");
// //   } else {
// //     productsGrid.classList.add("list-view");
// //     listBtn.classList.add("active");
// //     gridBtn.classList.remove("active");
// //   }
// // }

// // // Change page
// // function changePage(page) {
// //   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

// //   if (page === "prev") {
// //     if (currentPage > 1) currentPage--;
// //   } else if (page === "next") {
// //     if (currentPage < totalPages) currentPage++;
// //   } else {
// //     currentPage = page;
// //   }

// //   loadProducts();
// //   window.scrollTo({ top: 0, behavior: "smooth" });
// // }

// // // Update pagination
// // function updatePagination() {
// //   const pagination = document.getElementById("pagination");
// //   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

// //   let paginationHTML = `
// //                 <div class="page-item ${currentPage === 1 ? "disabled" : ""}">
// //                     <a href="#" class="page-link prev" onclick="changePage('prev')">
// //                         <i class="fas fa-chevron-right"></i>
// //                     </a>
// //                 </div>
// //             `;

// //   for (let i = 1; i <= totalPages && i <= 5; i++) {
// //     paginationHTML += `
// //                     <div class="page-item ${currentPage === i ? "active" : ""}">
// //                         <a href="#" class="page-link" onclick="changePage(${i})">${i}</a>
// //                     </div>
// //                 `;
// //   }

// //   paginationHTML += `
// //                 <div class="page-item ${currentPage === totalPages ? "disabled" : ""}">
// //                     <a href="#" class="page-link next" onclick="changePage('next')">
// //                         <i class="fas fa-chevron-left"></i>
// //                     </a>
// //                 </div>
// //             `;

// //   pagination.innerHTML = paginationHTML;
// // }

// // // Add to cart
// // function addToCart(productName, price) {
// //   // This function is in script.js
// //   if (
// //     typeof window.shamelMarket !== "undefined" &&
// //     window.shamelMarket.addToCart
// //   ) {
// //     window.shamelMarket.addToCart(productName, price);
// //   } else {
// //     // Fallback
// //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
// //     const existingItem = cart.find((item) => item.name === productName);

// //     if (existingItem) {
// //       existingItem.quantity += 1;
// //     } else {
// //       cart.push({ name: productName, price: price, quantity: 1 });
// //     }

// //     localStorage.setItem("cart", JSON.stringify(cart));
// //     updateCartCount();
// //     showNotification("تم إضافة المنتج إلى السلة بنجاح!", "success");
// //   }
// // }

// // // Toggle wishlist
// // function toggleWishlist(element, productName) {
// //   element.classList.toggle("active");
// //   const icon = element.querySelector("i");

// //   if (element.classList.contains("active")) {
// //     icon.classList.remove("far");
// //     icon.classList.add("fas");
// //     showNotification(`تم إضافة ${productName} إلى المفضلة`, "success");
// //   } else {
// //     icon.classList.remove("fas");
// //     icon.classList.add("far");
// //     showNotification(`تم إزالة ${productName} من المفضلة`, "info");
// //   }
// // }

// // // Quick view
// // function quickView(title, price, icon, rating) {
// //   showNotification(`عرض سريع: ${title} - السعر: ${price} ر.س`, "info");
// // }

// // // Update cart count
// // function updateCartCount() {
// //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
// //   const cartCount = document.getElementById("cartCount");
// //   if (cartCount) {
// //     cartCount.textContent = totalItems;
// //   }
// // }

// // // Show notification
// // function showNotification(message, type = "info") {
// //   const notification = document.createElement("div");
// //   notification.className = `notification ${type}`;
// //   notification.innerHTML = `
// //                 <i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"}"></i>
// //                 <span>${message}</span>
// //                 <button class="close-notification">&times;</button>
// //             `;

// //   document.body.appendChild(notification);

// //   const bgColor = type === "success" ? "#198754" : "#0d6efd";
// //   notification.style.cssText = `
// //                 position: fixed;
// //                 top: 20px;
// //                 left: 50%;
// //                 transform: translateX(-50%) translateY(-100px);
// //                 background-color: ${bgColor};
// //                 color: white;
// //                 padding: 15px 25px;
// //                 border-radius: 8px;
// //                 box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
// //                 z-index: 10000;
// //                 display: flex;
// //                 align-items: center;
// //                 gap: 10px;
// //                 min-width: 300px;
// //                 transition: transform 0.3s ease;
// //             `;

// //   const closeBtn = notification.querySelector(".close-notification");
// //   closeBtn.style.cssText = `
// //                 background: none;
// //                 border: none;
// //                 color: white;
// //                 font-size: 1.5rem;
// //                 cursor: pointer;
// //                 margin-right: auto;
// //             `;

// //   setTimeout(() => {
// //     notification.style.transform = "translateX(-50%) translateY(0)";
// //   }, 100);

// //   closeBtn.addEventListener("click", () => {
// //     notification.style.transform = "translateX(-50%) translateY(-100px)";
// //     setTimeout(() => notification.remove(), 300);
// //   });

// //   setTimeout(() => {
// //     notification.style.transform = "translateX(-50%) translateY(-100px)";
// //     setTimeout(() => notification.remove(), 300);
// //   }, 3000);
// // }

// // // Initialize header
// // function initHeader() {
// //   const header = document.getElementById("header");
// //   const menuToggle = document.getElementById("menu-toggle");
// //   const navbar = document.getElementById("navbar");

// //   if (!header || !menuToggle || !navbar) return;

// //   window.addEventListener("scroll", () => {
// //     header.classList.toggle("scrolled", window.scrollY > 50);
// //   });

// //   menuToggle.addEventListener("click", () => {
// //     navbar.classList.toggle("active");
// //     menuToggle.classList.toggle("active");
// //   });

// //   document.querySelectorAll(".nav-link").forEach((link) => {
// //     link.addEventListener("click", () => {
// //       navbar.classList.remove("active");
// //       menuToggle.classList.remove("active");
// //     });
// //   });
// // }

// // // Initialize cart
// // function initCart() {
// //   const cartBtn = document.getElementById("cartBtn");
// //   const closeCart = document.getElementById("closeCart");
// //   const cartSidebar = document.getElementById("cartSidebar");
// //   const overlay = document.getElementById("overlay");

// //   if (!cartBtn || !closeCart || !cartSidebar || !overlay) return;

// //   cartBtn.addEventListener("click", () => {
// //     cartSidebar.classList.add("open");
// //     overlay.classList.add("show");
// //     document.body.style.overflow = "hidden";
// //     updateCartItems();
// //   });

// //   closeCart.addEventListener("click", closeCartSidebar);
// //   overlay.addEventListener("click", closeCartSidebar);

// //   updateCartCount();
// // }

// // function closeCartSidebar() {
// //   document.getElementById("cartSidebar").classList.remove("open");
// //   document.getElementById("overlay").classList.remove("show");
// //   document.body.style.overflow = "";
// // }

// // function updateCartItems() {
// //   const cartItems = document.getElementById("cartItems");
// //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

// //   if (cart.length === 0) {
// //     cartItems.innerHTML = `
// //                     <div class="empty-cart">
// //                         <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--secondary-color);"></i>
// //                         <p style="text-align: center; color: var(--secondary-color); margin-top: 20px;">سلة التسوق فارغة</p>
// //                     </div>
// //                 `;
// //     return;
// //   }

// //   cartItems.innerHTML = cart
// //     .map(
// //       (item, index) => `
// //                 <div class="cart-item">
// //                     <div class="cart-item-image">
// //                         <i class="fas fa-box"></i>
// //                     </div>
// //                     <div class="cart-item-details">
// //                         <div class="cart-item-title">${item.name}</div>
// //                         <div class="cart-item-price">${item.price} ر.س</div>
// //                         <div class="cart-item-actions">
// //                             <div class="quantity-controls">
// //                                 <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})">-</button>
// //                                 <span>${item.quantity}</span>
// //                                 <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
// //                             </div>
// //                             <button class="remove-item" onclick="removeFromCart(${index})">
// //                                 <i class="fas fa-trash"></i>
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             `,
// //     )
// //     .join("");

// //   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   document.getElementById("cartTotal").textContent = `${total} ر.س`;
// // }

// // function updateCartQuantity(index, quantity) {
// //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //   if (quantity < 1) {
// //     cart.splice(index, 1);
// //   } else {
// //     cart[index].quantity = quantity;
// //   }
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   updateCartItems();
// //   updateCartCount();
// // }

// // function removeFromCart(index) {
// //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //   cart.splice(index, 1);
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   updateCartItems();
// //   updateCartCount();
// //   showNotification("تم إزالة المنتج من السلة", "info");
// // }

// // Initialize dark mode
// function initDarkMode() {
//   const darkModeToggle = document.getElementById("darkModeToggle");
//   if (!darkModeToggle) return;

//   const body = document.body;

//   if (localStorage.getItem("darkMode") === "true") {
//     body.classList.add("dark-mode");
//     darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//   }

//   darkModeToggle.addEventListener("click", (e) => {
//     e.preventDefault();
//     body.classList.toggle("dark-mode");

//     darkModeToggle.innerHTML = body.classList.contains("dark-mode")
//       ? '<i class="fas fa-sun"></i>'
//       : '<i class="fas fa-moon"></i>';

//     localStorage.setItem(
//       "darkMode",
//       body.classList.contains("dark-mode"),
//     );
//   });
// }

// // // Initialize search
// // function initSearch() {
// //   const searchBtn = document.getElementById("searchBtn");
// //   const searchModal = document.getElementById("searchModal");
// //   const closeSearch = document.getElementById("closeSearch");
// //   const searchInput = document.getElementById("searchInput");
// //   const searchResults = document.getElementById("searchResults");

// //   // ✅ أضف هذا السطر هنا
// //   if (!searchBtn || !searchModal || !closeSearch || !searchInput || !searchResults) return;

// //   searchBtn.addEventListener("click", () => {
// //     searchModal.classList.add("show");
// //     searchInput.focus();
// //     document.body.style.overflow = "hidden";
// //   });

// //   closeSearch.addEventListener("click", () => {
// //     searchModal.classList.remove("show");
// //     document.body.style.overflow = "";
// //   });

// //   searchInput.addEventListener("input", (e) => {
// //     const query = e.target.value.toLowerCase();
// //     if (query.length < 2) {
// //       searchResults.innerHTML = "";
// //       return;
// //     }

// //     const searchItems = productsData.filter(
// //       (product) =>
// //         product.title.includes(query) ||
// //         product.categoryName.includes(query)
// //     );

// //     if (searchItems.length > 0) {
// //       searchResults.innerHTML = searchItems
// //         .slice(0, 5)
// //         .map(
// //           (item) => `
// //                         <div class="search-result-item">
// //                             <div class="search-result-icon">
// //                                 <i class="${item.icon}"></i>
// //                             </div>
// //                             <div class="search-result-text">
// //                                 <div class="search-result-title">${item.title}</div>
// //                                 <div class="search-result-category">${item.categoryName} - ${item.price} ر.س</div>
// //                             </div>
// //                         </div>
// //                     `,
// //         )
// //         .join("");
// //     } else {
// //       searchResults.innerHTML = `
// //                         <div style="text-align: center; color: rgba(255, 255, 255, 0.7); padding: 20px;">
// //                             <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
// //                             <p>لم يتم العثور على نتائج</p>
// //                         </div>
// //                     `;
// //     }
// //   });

// //   document.addEventListener("keydown", (e) => {
// //     if (e.key === "Escape" && searchModal.classList.contains("show")) {
// //       searchModal.classList.remove("show");
// //       document.body.style.overflow = "";
// //     }
// //   });
// // }

// // // Initialize back to top
// // function initBackToTop() {
// //   const backToTopBtn = document.getElementById("backToTop");

// //   window.addEventListener("scroll", () => {
// //     if (window.scrollY > 300) {
// //       backToTopBtn.classList.add("show");
// //     } else {
// //       backToTopBtn.classList.remove("show");
// //     }
// //   });

// //   backToTopBtn.addEventListener("click", () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   });
// // }
import { productsData, categoriesData } from "./data.js";
import { toggleWishlist } from "./wishlist.js";
import { addToCart } from "./cart.js";
import { showNotification } from "./notifications.js";

export let filteredProducts = [...productsData];
export let currentPage = 1;
export const productsPerPage = 9;

// ================= INIT =================

export function initProducts() {
  loadProducts();
  updateCategoryTitle();
  initDarkMode();
}

// ================= CATEGORY TITLE =================
export function updateCategoryTitle() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");
  const title = document.getElementById("categoryTitle");
  if (!title) return;

  if (category && categoriesData[category]) {
    title.textContent = categoriesData[category].name;
  }
}

// ================= LOAD PRODUCTS =================
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

// ================= RENDER PRODUCT =================
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

// ================= STARS =================
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

// ================= PAGINATION =================
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
// ================= DARK MODE TOGGLE =================
// ================= DARK MODE TOGGLE =================
function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved dark mode preference
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

