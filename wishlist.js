import { showNotification } from "./notifications.js";

export function toggleWishlist(el, name) {
  el.classList.toggle("active");
  const icon = el.querySelector("i");

  icon.classList.toggle("fas");
  icon.classList.toggle("far");

  showNotification(
    el.classList.contains("active")
      ? `تم إضافة ${name} إلى المفضلة`
      : `تم إزالة ${name} من المفضلة`,
    el.classList.contains("active") ? "success" : "info",
  );
}
