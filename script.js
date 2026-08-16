// ضع رقم واتساب المتجر هنا بصيغة دولية بدون + أو مسافات.
// مثال مصر: 201xxxxxxxxx
const WHATSAPP_NUMBER = "201555555555";

function orderProduct(productName){
  const text = `مرحباً، أريد طلب: ${productName}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

const whatsappLink = document.getElementById("whatsappLink");
if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
}

const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".product-card")];

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(q) ? "" : "none";
  });
});
