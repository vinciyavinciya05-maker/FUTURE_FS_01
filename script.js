
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const status = document.getElementById("status");
  status.textContent = "Sending...";

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      status.textContent = "✅ Message sent successfully!";
      document.getElementById("contactForm").reset();
    } else {
      status.textContent = "❌ Failed to send. Try again later.";
    }
  } catch (err) {
    console.error(err);
    status.textContent = "⚠️ Error sending message.";
  }
});


const fullscreen = document.getElementById("fullscreen");
const fullimg = document.getElementById("fullimg");

document.querySelectorAll(".image-card img").forEach((img) => {
  img.addEventListener("click", () => {
    fullscreen.style.display = "flex";
    fullimg.src = img.src;
  });
});
