// Initialize EmailJS with your public API key
emailjs.init("PILh_y_B1JLvg-78z");

// Quote Calculator Function
function calculateQuote() {
  const slides = parseInt(document.getElementById("slides").value) || 0;
  const animations = document.getElementById("animations").checked;
  const branding = document.getElementById("branding").checked;

  let price = slides * 5; // $5 per slide
  if (animations) price += slides * 2; // +$2 per slide with animation
  if (branding) price += 20; // flat fee

  document.getElementById("quoteResult").textContent = `Estimated Price: $${price}`;
  document.getElementById("hiddenPrice").value = `$${price}`;
}

// Order Form Submit (using EmailJS)
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_wximwbu", "YOUR_TEMPLATE_ID", this)
    .then(function () {
      alert("Order submitted successfully! I’ll get in touch soon.");
      document.getElementById("orderForm").reset();
      document.getElementById("quoteResult").textContent = "";
    }, function (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again later.");
    });
});

// Review Form (local-only)
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("reviewName").value || "Anonymous";
  const text = document.getElementById("reviewText").value;
  const entry = `<p><strong>${name}</strong>: ${text}</p>`;
  document.getElementById("reviewList").innerHTML += entry;
  this.reset();
});
