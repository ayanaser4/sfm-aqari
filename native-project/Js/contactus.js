document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const navActions = document.querySelector(".nav-actions");

  if (username) {
    navActions.innerHTML = `
        <span class="custom-button">
          👋 أهلاً، ${username}
        </span>
      `;
  }
  const links = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const text = "أرسل لنا رسالة";
  const typingHeader = document.getElementById("typingHeader");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingHeader.textContent += text.charAt(i);
      i++;
      setTimeout(type, 110); // typing speed
    } else {
      typingHeader.classList.add("done");
    }
  }
  type();

  // demo: prevent actual submit and log data
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
      fullname: document.getElementById("fullname").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      message: document.getElementById("message").value.trim(),
    };
    console.log("Form Data:", payload);
  });
});
