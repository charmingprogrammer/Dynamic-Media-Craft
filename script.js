
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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

    fetch("https://script.google.com/macros/s/AKfycbzT2x7WbHcIwXUy3lmXkpH6VdmeGN9qJjdSZVQhOQ5DqmeVk_ZboK4fV2FQjZaypRDl/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
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
