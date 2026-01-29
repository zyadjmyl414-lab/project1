// بيانات المنتجات
export const productsData = [
  {
    id: 1,
    title: "طقم أواني طبخ ستانلس ستيل",
    category: "home",
    categoryName: "أدوات منزلية",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 128,
    icon: "fas fa-blender",
    badge: "خصم 25%",
    description: "طقم أواني طبخ عالي الجودة من الستانلس ستيل مقاوم للصدأ",
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
    icon: "fas fa-watch",
    badge: "جديد",
    description: "ساعة رياضية ذكية مع متتبع للصحة واللياقة",
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
    icon: "fas fa-spray-can",
    badge: "خصم 33%",
    description: "عطر فاخر برائحة شرقية مميزة تدوم طويلاً",
  },
  // بقية المنتجات كما في الكود الأصلي
];

// بيانات الفئات (يمكنك تعديلها حسب الحاجة)
export const categoriesData = {
  home: { name: "أدوات منزلية" },
  electronics: { name: "إلكترونيات" },
  perfume: { name: "عطور" },
  travel: { name: "سفر" },
  men: { name: "ملابس رجالية" },
  women: { name: "إكسسوارات" },
  shoes: { name: "أحذية" },
  accessories: { name: "إكسسوارات" },
};
