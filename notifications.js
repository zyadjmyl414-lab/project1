export function showNotification(message, type = "info") {
  const n = document.createElement("div");
  n.className = `notification ${type}`;
  n.textContent = message;

  document.body.appendChild(n);

  n.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    background-color: ${type === "success" ? "#198754" : "#0d6efd"};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 300px;
    transition: transform 0.3s ease;
  `;

  setTimeout(() => n.style.transform = "translateX(-50%) translateY(0)", 100);
  setTimeout(() => {
    n.style.transform = "translateX(-50%) translateY(-100px)";
    setTimeout(() => n.remove(), 300);
  }, 3000);
}
