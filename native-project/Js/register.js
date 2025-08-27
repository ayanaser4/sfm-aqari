document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // reset errors
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.textContent = "";
    });

    // Username
    const username = document.getElementById("username");
    if (username.value.trim().length < 3) {
      setError(username, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل");
      isValid = false;
    }

    // Email
    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      setError(email, "من فضلك أدخل بريد إلكتروني صحيح");
      isValid = false;
    }

    // Password
    const password = document.getElementById("password");
    if (password.value.length < 6) {
      setError(password, "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value) {
      setError(confirmPassword, "كلمة المرور غير متطابقة");
      isValid = false;
    }

    // ✅ Success
    if (isValid) {
      const usernameValue = document.getElementById("username").value;

      // ✅ خزن الاسم في localStorage
      localStorage.setItem("username", usernameValue);
      Toastify({
        text: "✅ تم تسجيل الحساب بنجاح!",
        duration: 3000,
        gravity: "top",
        position: "left",
        style: {
          marginTop: "50px",
          background: "#82b8a0",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "8px",
          padding: "12px 20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        },
        stopOnFocus: true,
      }).showToast();

      // ✅ استنى ثانية وبعدها روح للهوم
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);

      form.reset();
    }
  });

  function setError(input, message) {
    const group = input.closest(".input-group");
    const errorMsg = group.querySelector(".error-message");
    errorMsg.textContent = message;
  }
});
// ✅ Show/Hide password toggle
document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash"); // 👁️‍🗨️ يغيّر الأيقونة
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});

