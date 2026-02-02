// ==========================================
// نظام الترجمة المتكامل - مجمع الشامل
// ==========================================

const translations = {
  ar: {
    // General & Common
    app_name: "مجمع الشامل",
    site_title: "مجمع الشامل | وجهتك للتسوق",
    loading: "جاري التحميل...",
    close: "إغلاق",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    add: "إضافة جديد",
    search: "بحث...",
    search_placeholder: "ابحث عن منتج...",
    status: "الحالة",
    active: "نشط",
    inactive: "غير نشط",
    actions: "الإجراءات",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    confirm_password: "تأكيد كلمة المرور",
    role: "الدور",
    admin: "مدير",
    user: "مستخدم",
    category: "الفئة",
    price: "السعر",
    old_price: "السعر القديم",
    discount: "الخصم",
    rating: "التقييم",
    description: "الوصف",
    quantity: "الكمية",
    total: "الإجمالي",
    subtotal: "المجموع",
    checkout: "إتمام الشراء",
    continue_shopping: "مواصلة التسوق",
    add_to_cart: "أضف إلى السلة",
    remove: "إزالة",
    save_for_later: "حفظ لاحقاً",
    view_details: "عرض التفاصيل",
    show_more: "عرض المزيد",
    show_less: "عرض أقل",
    yes: "نعم",
    no: "لا",
    confirm: "تأكيد",
    back: "رجوع",
    next: "التالي",
    previous: "السابق",
    of: "من",
    showing: "عرض",
    entries: "عناصر",
    no_data: "لا توجد بيانات",
    error_occurred: "حدث خطأ",
    success_save: "تم الحفظ بنجاح",
    confirm_delete: "هل أنت متأكد من الحذف؟",
    
    // Header & Navigation
    home: "الرئيسية",
    products: "المنتجات",
    offers: "العروض",
    about_us: "من نحن",
    contact_us: "اتصل بنا",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    register: "إنشاء حساب",
    cart: "سلة التسوق",
    dashboard: "لوحة التحكم",
    dark_mode: "الوضع الليلي",
    light_mode: "الوضع النهاري",
    menu: "القائمة",
    
    // Categories
    all_categories: "جميع الفئات",
    food: "المواد الغذائية",
    sweets: "الحلويات",
    men_clothes: "الملابس الرجالية",
    women_clothes: "الملابس النسائية",
    shoes: "الأحذية",
    home_tools: "الأواني المنزلية",
    toys: "الألعاب",
    perfume: "العطور",
    gifts: "الهدايا والكماليات",
    travel: "السفر",
    accessories: "الإكسسوارات",
    stationery: "المكتبية",
    essentials: "الكماليات",
    
    // Home Page
    welcome_title: "مرحباً بكم في أسواق الشامل",
    welcome_subtitle: "احصل على أفضل تجربة تسوق",
    shop_now: "تسوق الآن",
    view_offers: "العروض",
    browse_categories: "تصفح الفئات",
    view_all: "عرض الكل",
    featured_products: "منتجات مميزة",
    special_offers: "عروض مميزة",
    discount_up_to: "خصم يصل إلى",
    limited_time: "لفترة محدودة",
    
    // Stats Section
    products_count: "منتج متنوع",
    years_experience: "سنوات الخبرة",
    branches_count: "فروع في المملكة",
    customers_count: "عميل",
    
    // Contact Section
    contact_title: "تواصل معنا",
    contact_subtitle: "نحن هنا للإجابة على جميع استفساراتك",
    full_name: "الاسم الكامل",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    send_feedback: "أرسل ملاحظاتك هنا",
    click_to_send_feedback: "اضغط هنا لإرسال اقتراحك أو ملاحظتك مباشرة",
    working_hours: "ساعات العمل",
    working_hours_details: "من 9 ص إلى 12 م – طوال أيام الأسبوع<br>ما عدا الجمعة من 2 ظهراً",
    select_branch: "اختر الفرع",
    open_in_map: "فتح الموقع على الخريطة",
    
    // Footer
    quick_links: "روابط سريعة",
    support: "الدعم",
    faq: "الأسئلة الشائعة",
    return_policy: "سياسة الإرجاع",
    privacy_policy: "سياسة الخصوصية",
    terms_conditions: "الشروط والأحكام",
    admin_login: "دخول المدير",
    all_rights_reserved: "جميع الحقوق محفوظة",
    
    // Login & Register
    login_title: "تسجيل الدخول",
    login_subtitle: "سجل الدخول للوصول إلى حسابك",
    email_placeholder: "example@gmail.com",
    password_placeholder: "••••••••",
    remember_me: "تذكرني",
    forgot_password: "نسيت كلمة المرور؟",
    or_login_with: "أو سجل الدخول عبر",
    no_account: "ليس لديك حساب؟",
    create_account: "إنشاء حساب جديد",
    register_title: "إنشاء حساب جديد",
    register_subtitle: "انضم إلينا اليوم واستمتع بتجربة تسوق مميزة",
    first_name: "الاسم الأول",
    last_name: "الاسم الأخير",
    agree_terms: "أوافق على الشروط والأحكام وسياسة الخصوصية",
    have_account: "لديك حساب بالفعل؟",
    
    // Products Page
    all_products: "جميع المنتجات",
    discover_products: "اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة",
    total_products: "إجمالي المنتجات",
    sort_by: "ترتيب حسب",
    price_low_high: "السعر: من الأقل للأعلى",
    price_high_low: "السعر: من الأعلى للأقل",
    highest_rated: "الأعلى تقيماً",
    newest: "الأحدث",
    grid_view: "عرض شبكي",
    list_view: "عرض قائمة",
    filter: "تصفية",
    filter_by_category: "تصفية حسب الفئة",
    filter_by_price: "تصفية حسب السعر",
    from: "من",
    to: "إلى",
    apply_filters: "تطبيق الفلاتر",
    clear_filters: "مسح الكل",
    no_products_found: "لا توجد منتجات مطابقة لبحثك",
    empty_cart: "سلة التسوق فارغة",
    empty_cart_message: "يبدو أنك لم تضف أي منتجات إلى سلة التسوق بعد",
    
    // Cart Page
    shopping_cart: "سلة التسوق",
    cart_review: "راجع منتجاتك قبل إتمام عملية الدفع",
    order_summary: "ملخص الطلب",
    promo_code: "كود الخصم",
    enter_promo_code: "أدخل كود الخصم",
    apply: "تطبيق",
    discount_amount: "خصم الكوبون",
    vat: "الضريبة المضافة (15%)",
    final_total: "الإجمالي النهائي",
    remove_item: "إزالة",
    recommended_products: "منتجات قد تعجبك",
    
    // Admin Dashboard
    statistics: "الإحصائيات",
    manage_users: "إدارة المستخدمين",
    manage_products: "إدارة المنتجات",
    manage_offers: "إدارة العروض",
    manage_orders: "إدارة الطلبات",
    site_settings: "إعدادات الموقع",
    total_users: "إجمالي المستخدمين",
    total_products: "إجمالي المنتجات",
    total_offers: "إجمالي العروض",
    total_orders: "إجمالي الطلبات",
    add_user: "إضافة مستخدم",
    add_product: "إضافة منتج",
    add_offer: "إضافة عرض",
    image: "الصورة",
    product_name: "اسم المنتج",
    offer_title: "عنوان العرض",
    offer_discount: "نسبة الخصم",
    start_date: "تاريخ البداية",
    end_date: "تاريخ النهاية",
    order_number: "رقم الطلب",
    customer: "العميل",
    order_date: "تاريخ الطلب",
    site_name: "اسم الموقع",
    site_email: "البريد الإلكتروني للموقع",
    site_phone: "هاتف الموقع",
    save_settings: "حفظ الإعدادات",
    
    // Testimonials/Contact Form
    contact_form_title: "تواصل معنا",
    contact_form_subtitle: "نحن هنا للإجابة على جميع استفساراتك",
    your_name: "اسمك",
    your_email: "بريدك الإلكتروني",
    subject: "الموضوع",
    your_message: "رسالتك",
    send: "إرسال",
    message_sent_success: "تم الإرسال بنجاح! سنتواصل معك قريباً",
    
    // Notifications
    added_to_cart: "تم إضافة المنتج إلى السلة",
    removed_from_cart: "تم إزالة المنتج من السلة",
    quantity_updated: "تم تحديث الكمية",
    login_required: "يرجى تسجيل الدخول أولاً",
    invalid_promo: "كود الخصم غير صالح",
    promo_applied: "تم تطبيق كود الخصم بنجاح",
    
    // About Section
    about_title: "من نحن؟",
    about_text1: "مجمع الشامل هو وجهتك المثالية للتسوق، حيث نقدم مجموعة متنوعة من المنتجات عالية الجودة بأسعار مناسبة تحت سقف واحد.",
    about_text2: "هدفنا هو تلبية جميع احتياجات العملاء وتقديم أفضل تجربة تسوق ممكنة من خلال فريق محترف وخدمة عملاء متميزة.",
    enjoyable_shopping: "تسوق ممتع",
    easy_return: "إرجاع سهل",
    secure_payment: "دفع آمن",
    best_prices: "أفضل الأسعار"
  },

  en: {
    // General & Common
    app_name: "Al-Shamel Market",
    site_title: "Al-Shamel Market | Your Shopping Destination",
    loading: "Loading...",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add New",
    search: "Search...",
    search_placeholder: "Search for products...",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    actions: "Actions",
    name: "Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    confirm_password: "Confirm Password",
    role: "Role",
    admin: "Admin",
    user: "User",
    category: "Category",
    price: "Price",
    old_price: "Old Price",
    discount: "Discount",
    rating: "Rating",
    description: "Description",
    quantity: "Quantity",
    total: "Total",
    subtotal: "Subtotal",
    checkout: "Checkout",
    continue_shopping: "Continue Shopping",
    add_to_cart: "Add to Cart",
    remove: "Remove",
    save_for_later: "Save for Later",
    view_details: "View Details",
    show_more: "Show More",
    show_less: "Show Less",
    yes: "Yes",
    no: "No",
    confirm: "Confirm",
    back: "Back",
    next: "Next",
    previous: "Previous",
    of: "of",
    showing: "Showing",
    entries: "entries",
    no_data: "No data available",
    error_occurred: "An error occurred",
    success_save: "Saved successfully",
    confirm_delete: "Are you sure you want to delete?",
    
    // Header & Navigation
    home: "Home",
    products: "Products",
    offers: "Offers",
    about_us: "About Us",
    contact_us: "Contact Us",
    login: "Login",
    logout: "Logout",
    register: "Register",
    cart: "Shopping Cart",
    dashboard: "Dashboard",
    dark_mode: "Dark Mode",
    light_mode: "Light Mode",
    menu: "Menu",
    
    // Categories
    all_categories: "All Categories",
    food: "Food & Groceries",
    sweets: "Sweets",
    men_clothes: "Men's Clothing",
    women_clothes: "Women's Clothing",
    shoes: "Shoes",
    home_tools: "Home Appliances",
    toys: "Toys",
    perfume: "Perfumes",
    gifts: "Gifts & Accessories",
    travel: "Travel",
    accessories: "Accessories",
    stationery: "Stationery",
    essentials: "Essentials",
    
    // Home Page
    welcome_title: "Welcome to Al-Shamel Markets",
    welcome_subtitle: "Get the best shopping experience",
    shop_now: "Shop Now",
    view_offers: "View Offers",
    browse_categories: "Browse Categories",
    view_all: "View All",
    featured_products: "Featured Products",
    special_offers: "Special Offers",
    discount_up_to: "Discount up to",
    limited_time: "Limited time offer",
    
    // Stats Section
    products_count: "Various Products",
    years_experience: "Years of Experience",
    branches_count: "Branches in the Kingdom",
    customers_count: "Customers",
    
    // Contact Section
    contact_title: "Contact Us",
    contact_subtitle: "We are here to answer all your inquiries",
    full_name: "Full Name",
    message: "Message",
    send_message: "Send Message",
    send_feedback: "Send your feedback here",
    click_to_send_feedback: "Click here to send your suggestion or feedback directly",
    working_hours: "Working Hours",
    working_hours_details: "From 9 AM to 12 AM - All week<br>Except Friday from 2 PM",
    select_branch: "Select Branch",
    open_in_map: "Open in Google Maps",
    
    // Footer
    quick_links: "Quick Links",
    support: "Support",
    faq: "FAQ",
    return_policy: "Return Policy",
    privacy_policy: "Privacy Policy",
    terms_conditions: "Terms & Conditions",
    admin_login: "Admin Login",
    all_rights_reserved: "All Rights Reserved",
    
    // Login & Register
    login_title: "Login",
    login_subtitle: "Sign in to access your account",
    email_placeholder: "example@gmail.com",
    password_placeholder: "••••••••",
    remember_me: "Remember me",
    forgot_password: "Forgot password?",
    or_login_with: "Or login with",
    no_account: "Don't have an account?",
    create_account: "Create new account",
    register_title: "Create New Account",
    register_subtitle: "Join us today and enjoy a unique shopping experience",
    first_name: "First Name",
    last_name: "Last Name",
    agree_terms: "I agree to the Terms and Conditions and Privacy Policy",
    have_account: "Already have an account?",
    
    // Products Page
    all_products: "All Products",
    discover_products: "Discover our wide range of high-quality products",
    total_products: "Total Products",
    sort_by: "Sort by",
    price_low_high: "Price: Low to High",
    price_high_low: "Price: High to Low",
    highest_rated: "Highest Rated",
    newest: "Newest",
    grid_view: "Grid View",
    list_view: "List View",
    filter: "Filter",
    filter_by_category: "Filter by Category",
    filter_by_price: "Filter by Price",
    from: "From",
    to: "To",
    apply_filters: "Apply Filters",
    clear_filters: "Clear All",
    no_products_found: "No products found matching your search",
    empty_cart: "Shopping Cart is Empty",
    empty_cart_message: "Looks like you haven't added any products to your cart yet",
    
    // Cart Page
    shopping_cart: "Shopping Cart",
    cart_review: "Review your products before completing the purchase",
    order_summary: "Order Summary",
    promo_code: "Promo Code",
    enter_promo_code: "Enter promo code",
    apply: "Apply",
    discount_amount: "Discount",
    vat: "VAT (15%)",
    final_total: "Final Total",
    remove_item: "Remove",
    recommended_products: "Recommended Products",
    
    // Admin Dashboard
    statistics: "Statistics",
    manage_users: "Manage Users",
    manage_products: "Manage Products",
    manage_offers: "Manage Offers",
    manage_orders: "Manage Orders",
    site_settings: "Site Settings",
    total_users: "Total Users",
    total_products: "Total Products",
    total_offers: "Total Offers",
    total_orders: "Total Orders",
    add_user: "Add User",
    add_product: "Add Product",
    add_offer: "Add Offer",
    image: "Image",
    product_name: "Product Name",
    offer_title: "Offer Title",
    offer_discount: "Discount Percentage",
    start_date: "Start Date",
    end_date: "End Date",
    order_number: "Order Number",
    customer: "Customer",
    order_date: "Order Date",
    site_name: "Site Name",
    site_email: "Site Email",
    site_phone: "Site Phone",
    save_settings: "Save Settings",
    
    // Testimonials/Contact Form
    contact_form_title: "Contact Us",
    contact_form_subtitle: "We are here to answer all your inquiries",
    your_name: "Your Name",
    your_email: "Your Email",
    subject: "Subject",
    your_message: "Your Message",
    send: "Send",
    message_sent_success: "Sent successfully! We will contact you soon",
    
    // Notifications
    added_to_cart: "Product added to cart",
    removed_from_cart: "Product removed from cart",
    quantity_updated: "Quantity updated",
    login_required: "Please login first",
    invalid_promo: "Invalid promo code",
    promo_applied: "Promo code applied successfully",
    
    // About Section
    about_title: "About Us",
    about_text1: "Al-Shamel Market is your ideal shopping destination, offering a wide range of high-quality products at affordable prices under one roof.",
    about_text2: "Our goal is to meet all customer needs and provide the best possible shopping experience through a professional team and outstanding customer service.",
    enjoyable_shopping: "Enjoyable Shopping",
    easy_return: "Easy Return",
    secure_payment: "Secure Payment",
    best_prices: "Best Prices"
  }
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
    this.setLanguage(this.currentLang, false);
    
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

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    this.updateContent();
    this.updatePlaceholders();
    this.updateLanguageToggle();
    this.updateDirectionIcons(isRTL);
    this.handleDirectionChanges(isRTL);

    if (save) {
      localStorage.setItem("app_language", lang);
      window.dispatchEvent(
        new CustomEvent("languageChanged", {
          detail: { language: lang, isRTL: isRTL }
        })
      );
    }
  }

  updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.translations[this.currentLang][key];

      if (translation) {
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
        this.currentLang === "ar" ? "Switch to English" : "التبديل للعربية"
      );
    }
  }

  updateDirectionIcons(isRTL) {
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

  getText(key) {
    return this.translations[this.currentLang][key] || key;
  }

  formatNumber(number) {
    if (typeof number !== 'number') return number;
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
    return this.currentLang === "ar" ? `${formatted} ${symbol}` : `${symbol} ${formatted}`;
  }

  translateElement(element, key) {
    if (this.translations[this.currentLang][key]) {
      element.textContent = this.translations[this.currentLang][key];
    }
  }
}

// تهيئة النظام
let i18n;

document.addEventListener("DOMContentLoaded", () => {
  i18n = new I18nManager();

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => i18n.toggleLanguage());
  }
});

// دوال مساعدة عامة
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