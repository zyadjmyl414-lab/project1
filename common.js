/**
 * ============================================
 * مجمع الشامل - الملف المشترك (Common Functions)
 * ============================================
 * يحتوي على جميع الدوال المشتركة بين صفحات الموقع:
 * - index.html
 * - products.html  
 * - cart.html
 * - admin.html
 * ============================================
 */

// ================= GLOBAL VARIABLES =================
const ShamelMarket = {
  cart: JSON.parse(localStorage.getItem("shamelCart")) || [],
  currentAdmin: JSON.parse(localStorage.getItem("currentAdmin")) || null,
  user: JSON.parse(localStorage.getItem("shamelUser")) || null,
  darkMode: localStorage.getItem("shamelDarkMode") === "true",
  
  // بيانات المنتجات
  products: [
    {
      id: 1,
      title: "طقم أواني طبخ ستانلس ستيل",
      category: "home",
      categoryName: "أدوات منزلية",
      price: 299,
      oldPrice: 399,
      rating: 4.8,
      reviews: 128,
      image: "images/golden.jpg",
      icon: "fas fa-blender",
      badge: "خصم 25%",
      description: "طقم أواني طبخ عالي الجودة من الستانلس ستيل مقاوم للصدأ"
    },
    {
      id: 2,
      title: "ساعة رياضية ذكية",
      category: "electronics",
      categoryName: "إلكترونيات",
      price: 449,
      oldPrice: 549,
      rating: 4.6,
      reviews: 256,
      image: "images/watch.jpg",
      icon: "fas fa-watch",
      badge: "جديد",
      description: "ساعة رياضية ذكية مع متتبع للصحة واللياقة"
    },
    {
      id: 3,
      title: "عطر فاخر للرجال",
      category: "perfume",
      categoryName: "عطور",
      price: 199,
      oldPrice: 299,
      rating: 4.7,
      reviews: 89,
      image: "images/assaf.jpg",
      icon: "fas fa-spray-can",
      badge: "خصم 33%",
      description: "عطر فاخر برائحة شرقية مميزة تدوم طويلاً"
    },
    {
      id: 4,
      title: "حقيبة سفر متوسطة",
      category: "travel",
      categoryName: "سفر",
      price: 349,
      oldPrice: 449,
      rating: 4.5,
      reviews: 167,
      image: "images/travl.jpg",
      icon: "fas fa-suitcase-rolling",
      badge: "عرض خاص",
      description: "حقيبة سفر متوسطة الحجم بعجلات وقبضة مريحة"
    },
    {
      id: 5,
      title: "قمصان رجالية قطنية",
      category: "men",
      categoryName: "ملابس رجالية",
      price: 89,
      oldPrice: 129,
      rating: 4.4,
      reviews: 342,
      image: "images/shirt.jpg",
      icon: "fas fa-tshirt",
      badge: "خصم 30%",
      description: "قمصان رجالية قطنية 100% مريحة وانيقة"
    },
    {
      id: 6,
      title: "أحذية رياضية رجالية",
      category: "shoes",
      categoryName: "أحذية",
      price: 279,
      oldPrice: 379,
      rating: 4.6,
      reviews: 198,
      image: "images/shoes.jpg",
      icon: "fas fa-shoe-prints",
      badge: "خصم 25%",
      description: "أحذية رياضية مريحة مع تكنولوجيا امتصاص الصدمات"
    },
    {
      id: 7,
      title: "سكاكين مطبخ احترافية",
      category: "home",
      categoryName: "أدوات منزلية",
      price: 159,
      oldPrice: 219,
      rating: 4.8,
      reviews: 76,
      image: "images/knives.jpg",
      icon: "fas fa-cut",
      badge: "جديد",
      description: "طقم سكاكين مطبخ احترافية حادة ومتينة"
    },
    {
      id: 8,
      title: "حقيبة يد نسائية",
      category: "women",
      categoryName: "إكسسوارات",
      price: 189,
      oldPrice: 249,
      rating: 4.3,
      reviews: 145,
      image: "images/bag.jpg",
      icon: "fas fa-shopping-bag",
      badge: "خصم 24%",
      description: "حقيبة يد نسائية أنيقة بجيوب متعددة"
    },
    {
      id: 9,
      title: "عطر نسائي فاخر",
      category: "perfume",
      categoryName: "عطور",
      price: 299,
      oldPrice: 399,
      rating: 4.7,
      reviews: 112,
      image: "images/perfume-women.jpg",
      icon: "fas fa-spray-can",
      badge: "خصم 25%",
      description: "عطر نسائي فاخر برائحة زهرية شرقية"
    },
    {
      id: 10,
      title: "طقم فناجين قهوة",
      category: "home",
      categoryName: "أدوات منزلية",
      price: 79,
      oldPrice: 109,
      rating: 4.5,
      reviews: 234,
      image: "images/cups.jpg",
      icon: "fas fa-mug-hot",
      badge: "عرض محدود",
      description: "طقم فناجين قهوة أنيق من البورسلين"
    },
    {
      id: 11,
      title: "ساعة يد كلاسيكية",
      category: "accessories",
      categoryName: "إكسسوارات",
      price: 349,
      oldPrice: 499,
      rating: 4.6,
      reviews: 87,
      image: "images/watch-classic.jpg",
      icon: "fas fa-clock",
      badge: "خصم 30%",
      description: "ساعة يد كلاسيكية بجلد طبيعي ومقاومة للماء"
    },
    {
      id: 12,
      title: "حقيبة ظهر للسفر",
      category: "travel",
      categoryName: "سفر",
      price: 199,
      oldPrice: 279,
      rating: 4.4,
      reviews: 156,
      image: "images/backpack.jpg",
      icon: "fas fa-backpack",
      badge: "خصم 28%",
      description: "حقيبة ظهر للسفر بسعة كبيرة ومقاومة للماء"
    }
  ],

  // الفئات
  categories: {
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
    accessories: { name: "الإكسسوارات", icon: "fas fa-gem" },
    electronics: { name: "الإلكترونيات", icon: "fas fa-laptop" }
  },

  // أكواد الخصم
  promoCodes: {
    SAVE10: 0.1,
    SAVE20: 0.2,
    WELCOME: 0.15,
    SHAMEL50: 0.5
  }
};

// ================= LOCAL STORAGE MANAGEMENT =================
const Storage = {
  saveCart(cart) {
    localStorage.setItem("shamelCart", JSON.stringify(cart));
  },

  saveUser(user) {
    localStorage.setItem("shamelUser", JSON.stringify(user));
  },

  saveAdmin(admin) {
    localStorage.setItem("currentAdmin", JSON.stringify(admin));
  },

  saveDarkMode(isDark) {
    localStorage.setItem("shamelDarkMode", isDark.toString());
  },

  getCart() {
    return JSON.parse(localStorage.getItem("shamelCart")) || [];
  },

  getUser() {
    return JSON.parse(localStorage.getItem("shamelUser"));
  },

  getAdmin() {
    return JSON.parse(localStorage.getItem("currentAdmin"));
  },

  clearCart() {
    localStorage.removeItem("shamelCart");
    ShamelMarket.cart = [];
  },

  clearUser() {
    localStorage.removeItem("shamelUser");
    ShamelMarket.user = null;
  },

  clearAdmin() {
    localStorage.removeItem("currentAdmin");
    ShamelMarket.currentAdmin = null;
  }
};

// ================= NOTIFICATION SYSTEM =================
const Notification = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.id = "notification-container";
      this.container.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(this.container);
    }
  },

  show(message, type = "info", duration = 3000) {
    this.init();

    const notification = document.createElement("div");
    const icons = {
      success: "fa-check-circle",
      error: "fa-times-circle",
      warning: "fa-exclamation-triangle",
      info: "fa-info-circle"
    };

    const colors = {
      success: "#198754",
      error: "#dc3545",
      warning: "#ffc107",
      info: "#0d6efd"
    };

    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <i class="fas ${icons[type] || icons.info}" style="font-size: 1.2rem;"></i>
      <span style="flex: 1;">${message}</span>
      <button class="close-btn" style="
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0;
        margin-right: 5px;
      ">
        <i class="fas fa-times"></i>
      </button>
    `;

    notification.style.cssText = `
      background: ${colors[type] || colors.info};
      color: ${type === "warning" ? "#000" : "#fff"};
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 300px;
      max-width: 500px;
      animation: slideDown 0.3s ease;
      pointer-events: all;
    `;

    this.container.appendChild(notification);

    // Close button
    const closeBtn = notification.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => this.remove(notification));

    // Auto remove
    if (duration > 0) {
      setTimeout(() => this.remove(notification), duration);
    }

    return notification;
  },

  remove(notification) {
    notification.style.animation = "slideUp 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  },

  success(message, duration) {
    return this.show(message, "success", duration);
  },

  error(message, duration) {
    return this.show(message, "error", duration);
  },

  warning(message, duration) {
    return this.show(message, "warning", duration);
  },

  info(message, duration) {
    return this.show(message, "info", duration);
  }
};

// Add animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ================= CART MANAGEMENT =================
const Cart = {
  items: Storage.getCart(),

  init() {
    this.updateDisplay();
    this.updateCount();
  },

  add(productName, price, image = null, icon = "fas fa-box") {
    // التحقق من تسجيل الدخول
    if (!ShamelMarket.user) {
      // حفظ المنتج مؤقتاً
      localStorage.setItem("pendingAddToCart", JSON.stringify({
        name: productName,
        price: price,
        image: image,
        icon: icon
      }));
      
      Notification.warning("يرجى تسجيل الدخول أولاً");
      setTimeout(() => {
        window.location.href = `login.html?redirect=${encodeURIComponent(window.location.href)}`;
      }, 1500);
      return false;
    }

    const existingItem = this.items.find(item => item.name === productName);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        name: productName,
        price: parseFloat(price),
        quantity: 1,
        image: image || this.getProductImage(productName),
        icon: icon,
        addedAt: new Date().toISOString()
      });
    }

    this.save();
    this.updateDisplay();
    this.updateCount();
    Notification.success(`تم إضافة ${productName} إلى السلة`);
    return true;
  },

  remove(index) {
    if (index >= 0 && index < this.items.length) {
      const item = this.items[index];
      this.items.splice(index, 1);
      this.save();
      this.updateDisplay();
      this.updateCount();
      Notification.info(`تم إزالة ${item.name} من السلة`);
    }
  },

  updateQuantity(index, newQuantity) {
    if (index >= 0 && index < this.items.length) {
      if (newQuantity < 1) {
        this.remove(index);
        return;
      }
      
      this.items[index].quantity = newQuantity;
      this.save();
      this.updateDisplay();
      this.updateCount();
    }
  },

  clear() {
    this.items = [];
    this.save();
    this.updateDisplay();
    this.updateCount();
    Notification.info("تم إفراغ السلة");
  },

  save() {
    Storage.saveCart(this.items);
    ShamelMarket.cart = this.items;
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  updateCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
      const count = this.getCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? "flex" : "none";
    }
  },

  updateDisplay() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartContent = document.getElementById("cartContent");

    // تحديث السلة الجانبية
    if (cartItems) {
      if (this.items.length === 0) {
        cartItems.innerHTML = `
          <div class="empty-cart" style="text-align: center; padding: 40px 20px;">
            <i class="fas fa-shopping-cart" style="font-size: 4rem; color: var(--secondary-color); opacity: 0.5; margin-bottom: 20px;"></i>
            <p style="color: var(--secondary-color); font-size: 1.1rem;">سلة التسوق فارغة</p>
            <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">تسوق الآن</a>
          </div>
        `;
      } else {
        cartItems.innerHTML = this.items.map((item, index) => `
          <div class="cart-item" style="
            display: flex;
            gap: 15px;
            padding: 15px;
            border-bottom: 1px solid var(--border-color);
            align-items: center;
          ">
            <div class="cart-item-image" style="
              width: 60px;
              height: 60px;
              background: var(--bg-color);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              flex-shrink: 0;
            ">
              ${item.image ? 
                `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
                `<i class="${item.icon}" style="color: var(--primary-color); font-size: 1.5rem;"></i>`
              }
            </div>
            <div class="cart-item-details" style="flex: 1; min-width: 0;">
              <div class="cart-item-title" style="
                font-weight: 600;
                margin-bottom: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              ">${item.name}</div>
              <div class="cart-item-price" style="
                color: var(--primary-color);
                font-weight: bold;
                margin-bottom: 8px;
              ">${item.price} ر.س</div>
              <div class="cart-item-actions" style="
                display: flex;
                align-items: center;
                gap: 10px;
              ">
                <div class="quantity-controls" style="
                  display: flex;
                  align-items: center;
                  gap: 5px;
                  background: var(--bg-color);
                  border-radius: 6px;
                  padding: 3px;
                ">
                  <button onclick="Cart.updateQuantity(${index}, ${item.quantity - 1})" style="
                    width: 28px;
                    height: 28px;
                    border: none;
                    background: var(--primary-color);
                    color: white;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "><i class="fas fa-minus" style="font-size: 0.7rem;"></i></button>
                  <span style="min-width: 30px; text-align: center; font-weight: 600;">${item.quantity}</span>
                  <button onclick="Cart.updateQuantity(${index}, ${item.quantity + 1})" style="
                    width: 28px;
                    height: 28px;
                    border: none;
                    background: var(--primary-color);
                    color: white;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "><i class="fas fa-plus" style="font-size: 0.7rem;"></i></button>
                </div>
                <button onclick="Cart.remove(${index})" style="
                  margin-right: auto;
                  background: none;
                  border: none;
                  color: var(--danger-color);
                  cursor: pointer;
                  padding: 5px 10px;
                  border-radius: 4px;
                  transition: background 0.3s;
                " onmouseover="this.style.background='var(--danger-color)'; this.style.color='white';" 
                onmouseout="this.style.background='none'; this.style.color='var(--danger-color)';">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `).join("");
      }
    }

    // تحديث صفحة السلة الكاملة
    if (cartContent) {
      this.renderFullCart(cartContent);
    }

    // تحديث الإجمالي
    if (cartTotal) {
      cartTotal.textContent = `${this.getTotal().toFixed(2)} ر.س`;
    }
  },

  renderFullCart(container) {
    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="empty-cart-section" style="text-align: center; padding: 80px 20px;">
          <i class="fas fa-shopping-cart" style="font-size: 5rem; color: var(--border-color); margin-bottom: 30px;"></i>
          <h2 style="color: var(--text-color); margin-bottom: 15px;">سلة التسوق فارغة</h2>
          <p style="color: var(--secondary-color); margin-bottom: 30px; font-size: 1.1rem;">يبدو أنك لم تضف أي منتجات إلى سلة التسوق بعد</p>
          <a href="products.html" class="btn btn-primary" style="padding: 12px 30px;">تسوق الآن</a>
        </div>
      `;
      return;
    }

    const subtotal = this.getTotal();
    const shipping = subtotal > 500 ? 0 : 25;
    const total = subtotal + shipping;

    container.innerHTML = `
      <div class="cart-items-section" style="
        background: var(--card-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
      ">
        ${this.items.map((item, index) => `
          <div class="cart-item" style="
            display: flex;
            gap: 20px;
            padding: 25px;
            border-bottom: 1px solid var(--border-color);
            transition: background 0.3s;
          " onmouseover="this.style.background='var(--bg-color)'" onmouseout="this.style.background='transparent'">
            <div class="cart-item-image" style="
              width: 120px;
              height: 120px;
              background: linear-gradient(135deg, rgba(13,110,253,0.1), rgba(13,202,240,0.1));
              border-radius: var(--border-radius-sm);
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              flex-shrink: 0;
            ">
              ${item.image ? 
                `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
                `<i class="${item.icon}" style="font-size: 2.5rem; color: var(--primary-color);"></i>`
              }
            </div>
            <div class="cart-item-details" style="flex: 1;">
              <div class="cart-item-title" style="
                font-size: 1.2rem;
                font-weight: 700;
                color: var(--text-color);
                margin-bottom: 10px;
              ">${item.name}</div>
              <div class="cart-item-price" style="
                font-size: 1.3rem;
                font-weight: 800;
                color: var(--primary-color);
                margin-bottom: 15px;
              ">${item.price} ر.س</div>
              <div class="cart-item-actions" style="
                display: flex;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
              ">
                <div class="quantity-controls" style="
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  background: var(--bg-color);
                  border-radius: var(--border-radius-sm);
                  padding: 5px;
                ">
                  <button onclick="Cart.updateQuantity(${index}, ${item.quantity - 1})" style="
                    width: 35px;
                    height: 35px;
                    border: none;
                    background: var(--primary-color);
                    color: white;
                    border-radius: var(--border-radius-sm);
                    cursor: pointer;
                    font-size: 1.1rem;
                    font-weight: 600;
                  ">-</button>
                  <span style="min-width: 40px; text-align: center; font-weight: 700;">${item.quantity}</span>
                  <button onclick="Cart.updateQuantity(${index}, ${item.quantity + 1})" style="
                    width: 35px;
                    height: 35px;
                    border: none;
                    background: var(--primary-color);
                    color: white;
                    border-radius: var(--border-radius-sm);
                    cursor: pointer;
                    font-size: 1.1rem;
                    font-weight: 600;
                  ">+</button>
                </div>
                <button onclick="Cart.remove(${index})" style="
                  background: none;
                  border: none;
                  color: var(--danger-color);
                  cursor: pointer;
                  font-size: 1.1rem;
                  padding: 8px 12px;
                  border-radius: var(--border-radius-sm);
                  transition: all 0.3s;
                " onmouseover="this.style.background='var(--danger-color)'; this.style.color='white';"
                onmouseout="this.style.background='none'; this.style.color='var(--danger-color)';">
                  <i class="fas fa-trash"></i> إزالة
                </button>
                <button onclick="Cart.saveForLater(${index})" style="
                  background: none;
                  border: 2px solid var(--info-color);
                  color: var(--info-color);
                  cursor: pointer;
                  font-size: 0.9rem;
                  padding: 8px 15px;
                  border-radius: var(--border-radius-sm);
                  transition: all 0.3s;
                " onmouseover="this.style.background='var(--info-color)'; this.style.color='white';"
                onmouseout="this.style.background='none'; this.style.color='var(--info-color)';">
                  <i class="fas fa-bookmark"></i> حفظ لاحقاً
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="cart-summary" style="
        position: sticky;
        top: 100px;
      ">
        <div class="summary-card" style="
          background: var(--card-bg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          padding: 30px;
          margin-bottom: 30px;
        ">
          <h3 class="summary-title" style="
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 25px;
            text-align: center;
          ">ملخص الطلب</h3>
          
          <div class="summary-item" style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border-color);
          ">
            <span style="color: var(--secondary-color);">المجموع الفرعي</span>
            <span style="font-weight: 600;">${subtotal.toFixed(2)} ر.س</span>
          </div>
          
          <div class="summary-item" style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border-color);
          ">
            <span style="color: var(--secondary-color);">الشحن</span>
            <span style="font-weight: 600;">${shipping === 0 ? 'مجاني' : shipping + ' ر.س'}</span>
          </div>
          
          <div class="summary-total" style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;
            padding-top: 25px;
            border-top: 2px solid var(--primary-color);
          ">
            <span style="font-size: 1.2rem; font-weight: 700;">الإجمالي</span>
            <span style="font-size: 1.8rem; font-weight: 800; color: var(--primary-color);">${total.toFixed(2)} ر.س</span>
          </div>
        </div>

        <button onclick="Cart.checkout()" class="checkout-btn" style="
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, var(--primary-color), var(--info-color));
          color: white;
          border: none;
          border-radius: var(--border-radius);
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.3s, box-shadow 0.3s;
        " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-md)';"
        onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
          <i class="fas fa-credit-card"></i> إتمام الدفع
        </button>

        <div style="text-align: center; margin-top: 20px;">
          <a href="products.html" style="color: var(--primary-color); font-weight: 600;">
            <i class="fas fa-arrow-right"></i> مواصلة التسوق
          </a>
        </div>
      </div>
    `;
  },

  getProductImage(productName) {
    const imageMap = {
      'طقم أواني طبخ': 'images/golden.jpg',
      'ساعة رياضية': 'images/watch.jpg',
      'عطر فاخر': 'images/assaf.jpg',
      'حقيبة سفر': 'images/travl.jpg',
      'ساعة يد كلاسيكية': 'images/watch-classic.jpg',
      'طقم فناجين قهوة': 'images/cups.jpg',
      'سكاكين مطبخ احترافية': 'images/knives.jpg',
      'حقيبة يد نسائية': 'images/bag.jpg',
      'عطر نسائي فاخر': 'images/perfume-women.jpg',
      'حقيبة ظهر للسفر': 'images/backpack.jpg',
      'قمصان رجالية قطنية': 'images/shirt.jpg',
      'أحذية رياضية رجالية': 'images/shoes.jpg',
      'عرض المواد الغذائية': 'images/food.jpg',
      'عرض الملابس': 'images/clothes.jpg',
      'عرض العطور': 'images/perfume.jpg'
    };

    for (const [key, image] of Object.entries(imageMap)) {
      if (productName.includes(key)) return image;
    }
    return 'images/default-product.jpg';
  },

  saveForLater(index) {
    const item = this.items[index];
    Notification.info(`تم حفظ ${item.name} للشراء لاحقاً`);
  },

  checkout() {
    if (this.items.length === 0) {
      Notification.error("سلة التسوق فارغة");
      return;
    }

    if (!ShamelMarket.user) {
      Notification.warning("يرجى تسجيل الدخول أولاً");
      setTimeout(() => {
        window.location.href = `login.html?redirect=cart.html`;
      }, 1500);
      return;
    }

    // عرض مودال الدفع
    const modal = document.getElementById("checkoutModal");
    if (modal) {
      modal.classList.add("show");
    } else {
      Notification.info("جاري معالجة طلبك...");
      setTimeout(() => {
        this.clear();
        Notification.success("تم إتمام الطلب بنجاح!");
        setTimeout(() => window.location.href = "index.html", 2000);
      }, 3000);
    }
  },

  openSidebar() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar) {
      sidebar.classList.add("open");
      if (overlay) overlay.classList.add("show");
      document.body.style.overflow = "hidden";
      this.updateDisplay();
    }
  },

  closeSidebar() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar) {
      sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("show");
      document.body.style.overflow = "";
    }
  }
};

// ================= UI COMPONENTS =================
const UI = {
  // إنشاء نجوم التقييم
  generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      '<i class="fas fa-star" style="color: #ffc107;"></i>'.repeat(full) +
      (half ? '<i class="fas fa-star-half-alt" style="color: #ffc107;"></i>' : "") +
      '<i class="far fa-star" style="color: #ffc107;"></i>'.repeat(empty)
    );
  },

  // تنسيق السعر
  formatPrice(price) {
    return `${parseFloat(price).toFixed(2)} ر.س`;
  },

  // إنشاء معرف عشوائي
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  // التمرير لأعلى
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // التحقق من وجود عنصر
  exists(selector) {
    return document.querySelector(selector) !== null;
  },

  // الحصول على عنصر بأمان
  get(selector) {
    return document.querySelector(selector);
  },

  // الحصول على جميع العناصر بأمان
  getAll(selector) {
    return document.querySelectorAll(selector);
  }
};

// ================= HEADER & NAVIGATION =================
const Header = {
  init() {
    this.handleScroll();
    this.initMobileMenu();
    this.initActiveLinks();
  },

  handleScroll() {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  },

  initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    
    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  },

  initActiveLinks() {
    const links = document.querySelectorAll(".nav-link");
    
    links.forEach(link => {
      link.addEventListener("click", function() {
        if (this.classList.contains("btn-primary")) return;
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // تحديث الرابط النشط عند التمرير
    window.addEventListener("scroll", () => {
      let current = "";
      const sections = document.querySelectorAll("section[id]");

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  }
};

// ================= DARK MODE =================
const DarkMode = {
  init() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    // تطبيق الوضع المحفوظ
    if (ShamelMarket.darkMode) {
      document.body.classList.add("dark-mode");
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.toggle("dark-mode");
      
      const isDark = document.body.classList.contains("dark-mode");
      Storage.saveDarkMode(isDark);
      ShamelMarket.darkMode = isDark;
      
      toggle.innerHTML = isDark ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
    });
  }
};

// ================= SEARCH =================
const Search = {
  init() {
    const searchBtn = document.getElementById("searchBtn");
    const searchModal = document.getElementById("searchModal");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchBtn || !searchModal) return;

    // فتح البحث
    searchBtn.addEventListener("click", () => {
      searchModal.classList.add("show");
      if (searchInput) searchInput.focus();
      document.body.style.overflow = "hidden";
    });

    // إغلاق البحث
    if (closeSearch) {
      closeSearch.addEventListener("click", () => this.close());
    }

    // البحث الفوري
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", (e) => this.handleInput(e.target.value));
    }

    // إغلاق بزر ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchModal.classList.contains("show")) {
        this.close();
      }
    });
  },

  close() {
    const searchModal = document.getElementById("searchModal");
    if (searchModal) {
      searchModal.classList.remove("show");
      document.body.style.overflow = "";
    }
  },

  handleInput(query) {
    const searchResults = document.getElementById("searchResults");
    if (!searchResults) return;

    query = query.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = "";
      return;
    }

    const results = ShamelMarket.products.filter(product => 
      product.title.includes(query) || 
      product.categoryName.includes(query) ||
      product.description.includes(query)
    );

    if (results.length > 0) {
      searchResults.innerHTML = results.slice(0, 6).map(product => `
        <div class="search-result-item" onclick="window.location.href='products.html?cat=${product.category}'" style="
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        " onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
          <div style="
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            ${product.image ? 
              `<img src="${product.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` :
              `<i class="${product.icon}" style="color: white; font-size: 1.2rem;"></i>`
            }
          </div>
          <div style="flex: 1;">
            <div style="color: white; font-weight: 600; margin-bottom: 3px;">${product.title}</div>
            <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">
              ${product.categoryName} - ${product.price} ر.س
            </div>
          </div>
          <i class="fas fa-chevron-left" style="color: rgba(255,255,255,0.5);"></i>
        </div>
      `).join("");
    } else {
      searchResults.innerHTML = `
        <div style="text-align: center; color: rgba(255,255,255,0.7); padding: 40px 20px;">
          <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
          <p>لم يتم العثور على نتائج لـ "${query}"</p>
        </div>
      `;
    }
  }
};

// ================= BACK TO TOP =================
const BackToTop = {
  init() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 300);
    });

    btn.addEventListener("click", UI.scrollToTop);
  }
};

// ================= AUTHENTICATION =================
const Auth = {
  // تسجيل الدخول
  login(email, password, remember = false) {
    // محاكاة تسجيل الدخول (في الواقع: إرسال طلب للخادم)
    const user = {
      id: UI.generateId(),
      email: email,
      name: "عميل مجمع الشامل",
      phone: "+966 50 000 0000",
      loggedInAt: new Date().toISOString()
    };

    Storage.saveUser(user);
    ShamelMarket.user = user;

    if (remember) {
      localStorage.setItem("shamelRememberMe", "true");
    }

    Notification.success("تم تسجيل الدخول بنجاح!");
    return user;
  },

  // إنشاء حساب
  register(userData) {
    const user = {
      id: UI.generateId(),
      ...userData,
      createdAt: new Date().toISOString()
    };

    Storage.saveUser(user);
    ShamelMarket.user = user;

    Notification.success("تم إنشاء الحساب بنجاح!");
    return user;
  },

  // تسجيل الخروج
  logout() {
    Storage.clearUser();
    Notification.info("تم تسجيل الخروج بنجاح");
    
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  },

  // التحقق من تسجيل الدخول
  isLoggedIn() {
    return ShamelMarket.user !== null;
  },

  // التحقق من صلاحية الأدمن
  isAdmin() {
    return ShamelMarket.currentAdmin !== null;
  },

  // تسجيل دخول الأدمن
  adminLogin(email, password) {
    // التحقق من بيانات الأدمن الافتراضية
    if (email === "admin@shamel-market.com" && password === "admin123") {
      const admin = {
        id: 1,
        name: "مدير النظام",
        email: email,
        role: "admin"
      };
      
      Storage.saveAdmin(admin);
      ShamelMarket.currentAdmin = admin;
      
      Notification.success("تم تسجيل الدخول كمدير");
      return admin;
    }
    
    Notification.error("بيانات الدخول غير صحيحة");
    return null;
  },

  // تسجيل خروج الأدمن
  adminLogout() {
    Storage.clearAdmin();
    window.location.href = "admin-login.html";
  }
};

// ================= PRODUCT FUNCTIONS =================
const Product = {
  // الحصول على منتج بواسطة ID
  getById(id) {
    return ShamelMarket.products.find(p => p.id === id);
  },

  // الحصول على منتجات الفئة
  getByCategory(category) {
    return ShamelMarket.products.filter(p => p.category === category);
  },

  // البحث في المنتجات
  search(query) {
    query = query.toLowerCase();
    return ShamelMarket.products.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  },

  // توليد بطاقة منتج HTML
  renderCard(product) {
    return `
      <div class="product-card" data-category="${product.category}" style="
        background: var(--card-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-md)';"
      onmouseout="this.style.transform='none'; this.style.boxShadow='var(--shadow-sm)';">
        <div class="product-image" style="
          position: relative;
          height: 200px;
          background: linear-gradient(135deg, rgba(13,110,253,0.1), rgba(13,202,240,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        ">
          ${product.badge ? `<span class="product-badge" style="
            position: absolute;
            top: 15px;
            right: 15px;
            background: var(--danger-color);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
          ">${product.badge}</span>` : ""}
          
          <div class="product-wishlist" onclick="Product.toggleWishlist(this, '${product.title}')" style="
            position: absolute;
            top: 15px;
            left: 15px;
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s;
          " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='none'">
            <i class="far fa-heart" style="color: var(--danger-color); font-size: 1.1rem;"></i>
          </div>

          ${product.image ? 
            `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">` :
            `<i class="${product.icon}" style="font-size: 4rem; color: var(--primary-color);"></i>`
          }
        </div>

        <div class="product-details" style="padding: 20px;">
          <div class="product-category" style="
            color: var(--primary-color);
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 8px;
          ">${product.categoryName}</div>
          
          <h3 class="product-title" style="
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 10px;
            line-height: 1.4;
          ">${product.title}</h3>
          
          <p class="product-description" style="
            color: var(--secondary-color);
            font-size: 0.9rem;
            margin-bottom: 15px;
            line-height: 1.5;
          ">${product.description}</p>
          
          <div class="product-rating" style="
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
          ">
            <div class="stars">${UI.generateStars(product.rating)}</div>
            <span class="rating-text" style="color: var(--secondary-color); font-size: 0.9rem;">
              (${product.reviews})
            </span>
          </div>
          
          <div class="product-price" style="margin-bottom: 15px;">
            <span class="current-price" style="
              font-size: 1.3rem;
              font-weight: 800;
              color: var(--primary-color);
            ">${product.price} ر.س</span>
            ${product.oldPrice ? `<span class="old-price" style="
              font-size: 1rem;
              color: var(--secondary-color);
              text-decoration: line-through;
              margin-right: 10px;
            ">${product.oldPrice} ر.س</span>` : ""}
          </div>
          
          <div class="product-actions" style="display: flex; gap: 10px;">
            <button class="btn-add-cart" onclick="Cart.add('${product.title}', ${product.price}, '${product.image}', '${product.icon}')" style="
              flex: 1;
              padding: 12px;
              background: var(--primary-color);
              color: white;
              border: none;
              border-radius: var(--border-radius-sm);
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              transition: background 0.3s;
            " onmouseover="this.style.background='var(--primary-dark)'" onmouseout="this.style.background='var(--primary-color)'">
              <i class="fas fa-cart-plus"></i> أضف للسلة
            </button>
            <button class="btn-quick-view" onclick="Product.quickView(${product.id})" style="
              padding: 12px;
              background: var(--bg-color);
              color: var(--text-color);
              border: 2px solid var(--border-color);
              border-radius: var(--border-radius-sm);
              cursor: pointer;
              transition: all 0.3s;
            " onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';"
            onmouseout="this.style.borderColor='var(--border-color)'; this.style.color='var(--text-color)';">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  toggleWishlist(element, productName) {
    element.classList.toggle("active");
    const icon = element.querySelector("i");
    
    if (element.classList.contains("active")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      Notification.success(`تم إضافة ${productName} إلى المفضلة`);
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      Notification.info(`تم إزالة ${productName} من المفضلة`);
    }
  },

  quickView(productId) {
    const product = this.getById(productId);
    if (!product) return;
    
    Notification.info(`عرض سريع: ${product.title} - ${product.price} ر.س`);
    // يمكن تطويرها لفتح مودال تفصيلي
  }
};

// ================= FORMS =================
const Forms = {
  init() {
    this.initContactForm();
    this.initNewsletterForm();
  },

  initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      Notification.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      form.reset();
    });
  },

  initNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      Notification.success("تم الاشتراك في النشرة البريدية بنجاح!");
      form.reset();
    });
  }
};

// ================= INITIALIZATION =================
function initShamelMarket() {
  // تهيئة جميع المكونات
  Header.init();
  DarkMode.init();
  Search.init();
  BackToTop.init();
  Forms.init();
  Cart.init();

  // إخفاء اللودر
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 500);

  // التحقق من المستخدم الحالي
  const savedUser = Storage.getUser();
  if (savedUser) {
    ShamelMarket.user = savedUser;
  }

  console.log("✅ مجمع الشامل - تم التهيئة بنجاح");
}

// تشغيل التهيئة عند تحميل الصفحة
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initShamelMarket);
} else {
  initShamelMarket();
}

// ================= EXPORTS FOR GLOBAL ACCESS =================
window.ShamelMarket = ShamelMarket;
window.Cart = Cart;
window.Notification = Notification;
window.Auth = Auth;
window.Product = Product;
window.UI = UI;
window.Storage = Storage;

// دوال قديمة للتوافق مع الكود الموجود
window.showNotification = (message, type, duration) => Notification.show(message, type, duration);
window.addToCart = (name, price, image, icon) => Cart.add(name, price, image, icon);
window.updateQuantity = (index, qty) => Cart.updateQuantity(index, qty);
window.removeFromCart = (index) => Cart.remove(index);
window.generateStars = (rating) => UI.generateStars(rating);
window.formatPrice = (price) => UI.formatPrice(price);
window.closeCartSidebar = () => Cart.closeSidebar();
window.openCart = () => Cart.openSidebar();