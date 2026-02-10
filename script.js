// Add the background as white when scroll start and then remove it when scroll back to top
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Typing effect in loop
const text = "Crafting Your Digital Future";
const typingEl = document.getElementById("typing-text");
let index = 0;
let typing = true;

function typeLoop() {
  if (typing) {
    if (index < text.length) {
      typingEl.textContent += text.charAt(index);
      index++;
      setTimeout(typeLoop, 100);
    } else {
      typing = false;
      setTimeout(typeLoop, 1500); // Pause before erasing
    }
  } else {
    if (index > 0) {
      typingEl.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeLoop, 50);
    } else {
      typing = true;
      setTimeout(typeLoop, 300); // Pause before typing again
    }
  }
}

typeLoop();

// Cursor follow glow
const heroSection = document.querySelector(".hero");
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
heroSection.appendChild(glow);

heroSection.addEventListener("mousemove", (e) => {
  const rect = heroSection.getBoundingClientRect();
  glow.style.left = `${e.clientX - rect.left - 50}px`;
  glow.style.top = `${e.clientY - rect.top - 50}px`;
});
// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// Dark mode always one
document.body.classList.add("dark");

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ✅ Contact form submit (only this block should remain)
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbzT2x7WbHcIwXUy3lmXkpH6VdmeGN9qJjdSZVQhOQ5DqmeVk_ZboK4fV2FQjZaypRDl/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  )
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong!");
    });
});
