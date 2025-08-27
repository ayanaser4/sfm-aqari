 document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email && password) {
        alert("تم تسجيل الدخول بنجاح ✅");
        // هنا تقدر تضيف تحويل لصفحة أخرى بعد نجاح تسجيل الدخول
        window.location.href = "home.html";
      } else {
        alert("من فضلك املأ جميع الحقول ❌");
      }
    });