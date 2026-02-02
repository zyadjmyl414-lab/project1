// ==========================================
// نظام الترجمة المتكامل - i18n Manager
// ==========================================

const translations = {
  ar: {
    app_name: "مجمع الشامل",
    dashboard: "لوحة التحكم",
    statistics: "الإحصائيات",
    users: "المستخدمين",
    products: "المنتجات",
    offers: "العروض",
    orders: "الطلبات",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    add: "إضافة جديد",
    search: "بحث...",
    status: "الحالة",
    active: "نشط",
    inactive: "غير نشط",
    actions: "الإجراءات",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الجوال",
    password: "كلمة المرور",
    role: "الدور",
    admin: "مدير",
    user: "مستخدم",
    category: "الفئة",
    price: "السعر",
    discount: "الخصم",
    rating: "التقييم",
    description: "الوصف",
    total_users: "إجمالي المستخدمين",
    total_products: "إجمالي المنتجات",
    total_offers: "إجمالي العروض",
    total_orders: "إجمالي الطلبات",
    site_settings: "إعدادات الموقع",
    site_name: "اسم الموقع",
    site_email: "البريد الإلكتروني",
    site_phone: "رقم الهاتف",
    save_settings: "حفظ الإعدادات",
    dark_mode: "الوضع الليلي",
    light_mode: "الوضع النهاري",
    confirm_delete: "هل أنت متأكد من الحذف؟",
    success_save: "تم الحفظ بنجاح",
    error_occurred: "حدث خطأ",
    // إضافات جديدة
    close: "إغلاق",
    loading: "جاري التحميل...",
    no_data: "لا توجد بيانات",
    confirm: "تأكيد",
    back: "رجوع",
    next: "التالي",
    previous: "السابق",
    of: "من",
    showing: "عرض",
    entries: "عناصر",
    search_placeholder: "ابحث هنا...",
    select_option: "اختر...",
    yes: "نعم",
    no: "لا",
  },

  en: {
    app_name: "Al-Shamel Market",
    dashboard: "Dashboard",
    statistics: "Statistics",
    users: "Users",
    products: "Products",
    offers: "Offers",
    orders: "Orders",
    settings: "Settings",
    logout: "Logout",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add New",
    search: "Search...",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    actions: "Actions",
    name: "Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    role: "Role",
    admin: "Admin",
    user: "User",
    category: "Category",
    price: "Price",
    discount: "Discount",
    rating: "Rating",
    description: "Description",
    total_users: "Total Users",
    total_products: "Total Products",
    total_offers: "Total Offers",
    total_orders: "Total Orders",
    site_settings: "Site Settings",
    site_name: "Site Name",
    site_email: "Email Address",
    site_phone: "Phone Number",
    save_settings: "Save Settings",
    dark_mode: "Dark Mode",
    light_mode: "Light Mode",
    confirm_delete: "Are you sure you want to delete?",
    success_save: "Saved successfully",
    error_occurred: "An error occurred",
    // إضافات جديدة
    close: "Close",
    loading: "Loading...",
    no_data: "No data available",
    confirm: "Confirm",
    back: "Back",
    next: "Next",
    previous: "Previous",
    of: "of",
    showing: "Showing",
    entries: "entries",
    search_placeholder: "Search here...",
    select_option: "Select...",
    yes: "Yes",
    no: "No",
  },
};

// ==========================================
// Translation Manager Class
// ==========================================

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("app_language") || "ar";
    this.translations = translations;
    this.init();
  }

  init() {
    // تطبيق اللغة المحفوظة عند التحميل
    this.setLanguage(this.currentLang, false);

    // مراقبة تغيير اللغة من تبويبات أخرى
    window.addEventListener("storage", (e) => {
      if (e.key === "app_language") {
        this.setLanguage(e.newValue, false);
      }
    });
  }

  setLanguage(lang, save = true) {
    if (!this.translations[lang]) return;

    this.currentLang = lang;
    const isRTL = lang === "ar";

    // 1. تحديث اتجاه الصفحة
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // 2. تحديث النصوص
    this.updateContent();

    // 3. تحديث placeholder للحقول
    this.updatePlaceholders();

    // 4. تحديث أزرار التبديل
    this.updateLanguageToggle();

    // 5. تحديث أيقونة الزر
    this.updateDirectionIcons(isRTL);

    // 6. حفظ التفضيل
    if (save) {
      localStorage.setItem("app_language", lang);
      window.dispatchEvent(
        new CustomEvent("languageChanged", {
          detail: { language: lang, isRTL: isRTL },
        }),
      );
    }

    // 7. تحديث الـ CSS الخاص بالاتجاه
    this.handleDirectionChanges(isRTL);
  }

  updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.translations[this.currentLang][key];

      if (translation) {
        // إذا كان العنصر input أو textarea
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          if (element.hasAttribute("placeholder")) {
            element.placeholder = translation;
          } else {
            element.value = translation;
          }
        } else {
          element.textContent = translation;
        }
      }
    });

    // تحديث العنوان (title)
    const titleElement = document.querySelector("[data-i18n-title]");
    if (titleElement) {
      const titleKey = titleElement.getAttribute("data-i18n-title");
      if (this.translations[this.currentLang][titleKey]) {
        document.title = this.translations[this.currentLang][titleKey];
      }
    }
  }

  updatePlaceholders() {
    const inputs = document.querySelectorAll("[data-i18n-placeholder]");
    inputs.forEach((input) => {
      const key = input.getAttribute("data-i18n-placeholder");
      if (this.translations[this.currentLang][key]) {
        input.placeholder = this.translations[this.currentLang][key];
      }
    });
  }

  updateLanguageToggle() {
    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
      const icon = this.currentLang === "ar" ? "🇬🇧" : "🇸🇦";
      const text = this.currentLang === "ar" ? "EN" : "عربي";
      toggleBtn.innerHTML = `${icon} ${text}`;
      toggleBtn.setAttribute(
        "title",
        this.currentLang === "ar" ? "Switch to English" : "التبديل للعربية",
      );
    }
  }

  updateDirectionIcons(isRTL) {
    // تحديث الأسهم والأيقونات حسب الاتجاه
    const arrows = document.querySelectorAll(".directional-icon");
    arrows.forEach((icon) => {
      if (isRTL) {
        icon.classList.remove("fa-angle-left", "fa-arrow-left");
        icon.classList.add("fa-angle-right", "fa-arrow-right");
      } else {
        icon.classList.remove("fa-angle-right", "fa-arrow-right");
        icon.classList.add("fa-angle-left", "fa-arrow-left");
      }
    });
  }

  handleDirectionChanges(isRTL) {
    const sidebar = document.querySelector(".admin-sidebar");
    const mainContent = document.querySelector(".admin-main");

    if (sidebar && mainContent) {
      if (isRTL) {
        sidebar.style.right = "0";
        sidebar.style.left = "auto";
        mainContent.style.marginRight = "280px";
        mainContent.style.marginLeft = "0";
      } else {
        sidebar.style.left = "0";
        sidebar.style.right = "auto";
        mainContent.style.marginLeft = "280px";
        mainContent.style.marginRight = "0";
      }
    }

    // تحديث هوامش البطاقات الإحصائية
    const statIcons = document.querySelectorAll(".stat-icon");
    statIcons.forEach((icon) => {
      if (isRTL) {
        icon.style.marginLeft = "20px";
        icon.style.marginRight = "0";
      } else {
        icon.style.marginRight = "20px";
        icon.style.marginLeft = "0";
      }
    });
  }

  toggleLanguage() {
    const newLang = this.currentLang === "ar" ? "en" : "ar";
    this.setLanguage(newLang);
  }

  // ==========================================
  // الدوال المساعدة للأرقام والتواريخ
  // ==========================================

  getText(key) {
    return this.translations[this.currentLang][key] || key;
  }

  formatNumber(number) {
    if (typeof number !== "number") return number;
    return this.currentLang === "ar"
      ? number.toLocaleString("ar-SA")
      : number.toLocaleString("en-US");
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const locale = this.currentLang === "ar" ? "ar-SA" : "en-US";
    return date.toLocaleDateString(locale, options);
  }

  formatCurrency(amount) {
    const symbol = this.currentLang === "ar" ? "ر.س" : "SAR";
    const formatted = this.formatNumber(amount);
    return this.currentLang === "ar"
      ? `${formatted} ${symbol}`
      : `${symbol} ${formatted}`;
  }

  translateElement(element, key) {
    if (this.translations[this.currentLang][key]) {
      element.textContent = this.translations[this.currentLang][key];
    }
  }
}

// ==========================================
// تهيئة النظام
// ==========================================

let i18n;

document.addEventListener("DOMContentLoaded", () => {
  i18n = new I18nManager();

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => i18n.toggleLanguage());
  }

  console.log("Translation system initialized. Language:", i18n.currentLang);
});

// ==========================================
// دوال مساعدة عامة (Global Helpers)
// ==========================================

function t(key) {
  return i18n ? i18n.getText(key) : key;
}

function changeLanguage(lang) {
  if (i18n) i18n.setLanguage(lang);
}

function formatNumber(number) {
  return i18n ? i18n.formatNumber(number) : number;
}

function formatDate(date) {
  return i18n ? i18n.formatDate(date) : date;
}

function formatCurrency(amount) {
  return i18n ? i18n.formatCurrency(amount) : amount;
}
