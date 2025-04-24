// ========== Quote Calculator ==========
function calculateQuote() {
  const slides = parseInt(document.getElementById("slides").value);
  const animations = document.getElementById("animations").checked;
  const branding = document.getElementById("branding").checked;

  if (!slides || slides <= 0) {
    document.getElementById("quoteResult").innerText = "Please enter a valid number of slides.";
    return;
  }

  let price = slides * 10;
  if (animations) price += slides * 5;
  if (branding) price += 50;

  document.getElementById("quoteResult").innerText = `Estimated price: $${price}`;
}
