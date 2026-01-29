// 🛑 منع تشغيل أي كود عام داخل صفحة login.html
if (window.location.pathname.endsWith("login.html")) {
  console.log("Login page detected – stopping main JS");
  throw new Error("STOP_MAIN_JS_FOR_LOGIN");
}


// ================= GLOBAL VARIABLES =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// ================= DOM CONTENT LOADED =================
document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after page loads
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 1000);

  // ================= FORCE LOGIN NAVIGATION =================
  // const loginBtn = document.getElementById("loginBtn");

  // if (loginBtn) {
  //   loginBtn.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     e.stopPropagation(); // يمنع أي تداخل
  //     // توجه إلى صفحة الدخول على الخادم مع تمرير رابط الإعادة (redirect) للصفحة الحالية
  //     const current = window.location.pathname + window.location.search;
  //     window.location.href = `login.html?redirect=${encodeURIComponent(current)}`;
  //   });
  // }

  // Initialize all components safely
  initHeader();
  initSlider();
  initStatsCounter();
  initCountdowns();

  // ✅ التحقق من وجود العناصر قبل تهيئتها
  if (document.getElementById("featuredProducts")) {
    initFeaturedProducts();
  }

  initCart();
  initDarkMode();
  initScrollAnimations();
  initBackToTop();
  initForms();
  initSearch();
});

// ================= HEADER & NAVIGATION =================
function initHeader() {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navbar) return;


  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    if (link.classList.contains("btn-primary")) return; // تجاهل زر تسجيل الدخول
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  navLinks.forEach((link) => {
    if (link.classList.contains("btn-primary")) return; // تجاهل زر تسجيل الدخول
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ================= HERO SLIDER =================
function initSlider() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!slides.length || !dots.length || !prevBtn || !nextBtn) return;

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
}

// ================= STATS COUNTER =================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let counted = false;

  function countUp() {
    if (counted) return;

    const statsSection = document.querySelector(".stats");
    
    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    if (scrollTop > sectionTop - windowHeight + sectionHeight / 2) {
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateNumber);
          } else {
            stat.textContent = target.toLocaleString();
          }
        };

        updateNumber();
      });
      counted = true;
    }
  }

  window.addEventListener("scroll", countUp);
}

// ================= COUNTDOWN TIMERS =================
function initCountdowns() {
  const timers = [
    { id: "timer1", endDate: new Date().getTime() + 3 * 24 * 60 * 60 * 1000 }, // 3 days
    { id: "timer2", endDate: new Date().getTime() + 5 * 24 * 60 * 60 * 1000 }, // 5 days
    { id: "timer3", endDate: new Date().getTime() + 7 * 24 * 60 * 60 * 1000 }, // 7 days
  ];

  timers.forEach((timer) => {
    updateCountdown(timer.id, timer.endDate);
    setInterval(() => updateCountdown(timer.id, timer.endDate), 1000);
  });
}

function updateCountdown(timerId, endDate) {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerElement = document.getElementById(timerId);
  if (timerElement) {
    timerElement.querySelector(".days").textContent = String(days).padStart(
      2,
      "0",
    );
    timerElement.querySelector(".hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    timerElement.querySelector(".minutes").textContent = String(
      minutes,
    ).padStart(2, "0");
    timerElement.querySelector(".seconds").textContent = String(
      seconds,
    ).padStart(2, "0");
  }
}

// ================= FEATURED PRODUCTS =================
// ================= FEATURED PRODUCTS =================
function initFeaturedProducts() {
  const productsContainer = document.getElementById("featuredProducts");

  // ✅ التحقق من وجود العنصر أولاً
  if (!productsContainer) {
    console.log("⚠️ عنصر featuredProducts غير موجود في هذه الصفحة");
    return;
  }

  const products = [
    {
      id: 1,
      title: "طقم أواني طبخ",
      price: 299,
      oldPrice: 399,
      rating: 4.5,
      reviews: 128,
      icon: "fas fa-blender",
      badge: "خصم 25%",
    },
    {
      id: 2,
      title: "ساعة رياضية",
      price: 449,
      oldPrice: 549,
      rating: 4.8,
      reviews: 256,
      icon: "fas fa-watch",
      badge: "جديد",
    },
    {
      id: 3,
      title: "عطر فاخر",
      price: 199,
      oldPrice: 299,
      rating: 4.7,
      reviews: 89,
      icon: "fas fa-spray-can",
      badge: "خصم 33%",
    },
    {
      id: 4,
      title: "حقيبة سفر",
      price: 349,
      oldPrice: 449,
      rating: 4.6,
      reviews: 167,
      icon: "fas fa-suitcase-rolling",
      badge: "عرض خاص",
    },
  ];

  productsContainer.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                <i class="${product.icon}"></i>
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">${product.price} ر.س</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} ر.س</span>` : ""}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart('${product.title}', ${product.price})">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                    <button class="btn btn-outline" onclick="addToWishlist('${product.title}')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let stars = "";
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

// ================= CART FUNCTIONALITY =================
function initCart() {
  const cartBtn = document.getElementById("cartBtn");
  const closeCart = document.getElementById("closeCart");
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  if (!cartBtn || !closeCart || !cartSidebar || !overlay) return;

  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  closeCart.addEventListener("click", closeCartSidebar);
  overlay.addEventListener("click", closeCartSidebar);

  updateCartDisplay();
}

function closeCartSidebar() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  document.body.style.overflow = "";
}

async function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      image, // 👈 نحفظ الصورة
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
  showNotification("تم إضافة المنتج إلى السلة", "success");
}


function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
  showNotification("تم إزالة المنتج من السلة", "info");
}

function updateQuantity(index, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(index);
    return;
  }

  cart[index].quantity = newQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--secondary-color);"></i>
                <p style="text-align: center; color: var(--secondary-color); margin-top: 20px;">سلة التسوق فارغة</p>
            </div>
        `;
    cartTotal.textContent = "0 ر.س";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <i class="fas fa-box"></i>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} ر.س</div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                    <button
                       class="remove-item"
                      aria-label="حذف المنتج من السلة"
                       onclick="removeFromCart(${index})"
                                 >
                            <i class="fas fa-trash" aria-hidden="true"></i>
                    </button>

                </div>
            </div>
        </div>
    `,
    )
    .join("");

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `${total} ر.س`;
}

// ================= DARK MODE =================
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

// ================= SCROLL ANIMATIONS =================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements with animation
  const animatedElements = document.querySelectorAll(
    ".category-card, .offer-card, .product-card, .about-text, .contact-form",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ================= BACK TO TOP =================
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("show", window.scrollY > 300);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ================= FORMS =================
function initForms() {
  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.", "success");
      contactForm.reset();
    });
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("تم الاشتراك في النشرة البريدية بنجاح!", "success");
      newsletterForm.reset();
    });
  }
}

// ================= SEARCH =================
function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (
    !searchBtn ||
    !searchModal ||
    !closeSearch ||
    !searchInput ||
    !searchResults
  )
    return;

  searchBtn.addEventListener("click", () => {
    searchModal.classList.add("show");
    searchInput.focus();
    document.body.style.overflow = "hidden";
  });

  closeSearch.addEventListener("click", () => {
    searchModal.classList.remove("show");
    document.body.style.overflow = "";
  });

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) {
      searchResults.innerHTML = "";
      return;
    }

    // Sample search results
    const searchItems = [
      {
        title: "طقم أواني طبخ",
        category: "أدوات منزلية",
        icon: "fas fa-blender",
      },
      { title: "ساعة رياضية", category: "إلكترونيات", icon: "fas fa-watch" },
      { title: "عطر فاخر", category: "عطور", icon: "fas fa-spray-can" },
      { title: "حقيبة سفر", category: "سفر", icon: "fas fa-suitcase-rolling" },
      { title: "ملابس رياضية", category: "ملابس", icon: "fas fa-tshirt" },
      { title: "أحذية رياضية", category: "أحذية", icon: "fas fa-shoe-prints" },
    ];

    const filteredItems = searchItems.filter(
      (item) => item.title.includes(query) || item.category.includes(query),
    );

    if (filteredItems.length > 0) {
      searchResults.innerHTML = filteredItems
        .map(
          (item) => `
                <div class="search-result-item">
                    <div class="search-result-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="search-result-text">
                        <div class="search-result-title">${item.title}</div>
                        <div class="search-result-category">${item.category}</div>
                    </div>
                </div>
            `,
        )
        .join("");
    } else {
      searchResults.innerHTML = `
                <div style="text-align: center; color: rgba(255, 255, 255, 0.7); padding: 20px;">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>لم يتم العثور على نتائج</p>
                </div>
            `;
    }
  });

  // Close search on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal.classList.contains("show")) {
      searchModal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
}

// ================= NOTIFICATIONS =================
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-times-circle" : "fa-info-circle"}"></i>
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;

  document.body.appendChild(notification);

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background-color: ${type === "success" ? "var(--success-color)" : type === "error" ? "var(--danger-color)" : "var(--info-color)"};
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius-sm);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 300px;
        transition: transform 0.3s ease;
    `;

  const closeBtn = notification.querySelector(".close-notification");
  closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-right: auto;
    `;

  // Show notification
  setTimeout(() => {
    notification.style.transform = "translateX(-50%) translateY(0)";
  }, 100);

  // Close on click
  closeBtn.addEventListener("click", () => {
    notification.style.transform = "translateX(-50%) translateY(-100px)";
    setTimeout(() => notification.remove(), 300);
  });

  // Auto close
  setTimeout(() => {
    notification.style.transform = "translateX(-50%) translateY(-100px)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ================= WISHLIST =================
function addToWishlist(productName) {
  showNotification(`تم إضافة ${productName} إلى قائمة المفضلة!`, "success");
}

// ================= UTILITY FUNCTIONS =================
function formatPrice(price) {
  return `${price.toFixed(2)} ر.س`;
}

function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

// ================= LOGIN & REGISTER PAGES =================
// These functions will be used in login.html and register.html
function login(email, password) {
  // Simulate login
  localStorage.setItem(
    "user",
    JSON.stringify({ email, name: "عميل مجمع الشامل" }),
  );
  showNotification("تم تسجيل الدخول بنجاح!", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function register(name, email, password, phone) {
  // Simulate registration
  localStorage.setItem("user", JSON.stringify({ email, name, phone }));
  showNotification("تم إنشاء الحساب بنجاح!", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function logout() {
  localStorage.removeItem("user");
  showNotification("تم تسجيل الخروج بنجاح!", "info");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function checkAuth() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// ================= PRODUCT PAGES =================
const categories = {
  food: { name: "المواد الغذائية", icon: "fas fa-apple-alt" },
  sweets: { name: "الحلويات", icon: "fas fa-cookie-bite" },
  men: { name: "الملابس الرجالية", icon: "fas fa-user-tie" },
  women: { name: "الملابس النسائية", icon: "fas fa-female" },
  shoes: { name: "الأحذية", icon: "fas fa-shoe-prints" },
  home: { name: "الأدوات المنزلية", icon: "fas fa-blender" },
  toys: { name: "الألعاب", icon: "fas fa-gamepad" },
  perfume: { name: "العطور", icon: "fas fa-spray-can" },
  gifts: { name: "الهدايا", icon: "fas fa-gift" },
  travel: { name: "السفر", icon: "fas fa-suitcase-rolling" },
};

function getProductsByCategory(category) {
  const products = {
    food: [
      { id: 1, name: "أرز بسمتي", price: 25, image: "fas fa-seedling" },
      { id: 2, name: "زيت عافية", price: 18, image: "fas fa-oil-can" },
      { id: 3, name: "سكر أبيض", price: 8, image: "fas fa-cube" },
      { id: 4, name: "دقيق", price: 12, image: "fas fa-wheat-awn" },
    ],
    sweets: [
      { id: 5, name: "شوكولاتة", price: 15, image: "fas fa-candy-cane" },
      { id: 6, name: "بسكويت", price: 10, image: "fas fa-cookie-bite" },
      { id: 7, name: "حلويات شرقية", price: 30, image: "fas fa-birthday-cake" },
    ],
    shoes: [
      { id: 8, name: "أحذية رياضية", price: 120, image: "fas fa-shoe-prints" },
      { id: 9, name: "أحذية رسمية", price: 200, image: "fas fa-shoe-prints" },
      { id: 10, name: "صنادل", price: 80, image: "fas fa-shoe-prints" },
    ],
  };

  return products[category] || [];
}

// ================= EXPORT FUNCTIONS FOR OTHER PAGES =================
window.shamelMarket = {
  addToCart,
  removeFromCart,
  updateQuantity,
  login,
  register,
  logout,
  checkAuth,
  getProductsByCategory,
  categories,
  showNotification,
};
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
   const checkoutBtn1 = document.getElementById("checkoutBtn1");
  const modal = document.getElementById("checkoutModal");
  const confirmBtn = document.getElementById("confirmCheckout");

  // عند الضغط على زر الدفع
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  }

  // عند الضغط على "تمام"
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      modal.classList.remove("show");

      // انتقال احترافي بعد إغلاق المودال
      setTimeout(() => {
        window.location.href = "index.html";
      }, 200);
    });
  }
});


