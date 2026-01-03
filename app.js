// Access Telegram Mini App features
const tg = window.Telegram.WebApp;
tg.expand();

// 🔴 VERY IMPORTANT: paste your Apps Script URL here
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQrac0YmQgkjnbUOjllVxScbqmxikk-cBBpKD6HSSXe_MFYwDw5WEMrKFjNPJb7qUN/exec";

function submitData() {
  const item = document.getElementById("item").value;
  const price = document.getElementById("price").value;
  const code = document.getElementById("code").value;

  // Basic validation
  if (!item || !price || !code) {
    document.getElementById("status").innerText = "⚠️ Fill all fields";
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      item: item,
      price: price,
      code: code
    })
  })
  .then(() => {
    document.getElementById("status").innerText = "✅ Saved!";
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
    document.getElementById("code").value = "";
  })
  .catch(() => {
    document.getElementById("status").innerText = "❌ Error saving data";
  });
}
