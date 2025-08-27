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
  async function loadData() {
    try {
      const response = await fetch("../data.json");
      const data = await response.json();
      const rentContainer = document.getElementById("rent-cards");

      const createCard = (item, type) => `
          <div class="col-md-4 mb-4">
            <div class="property-card shadow rounded overflow-hidden h-100">
              <div class="image-wrapper position-relative">
                <img src="${item.image}" alt="${
        item.title
      }" class="w-100" style="height:220px; object-fit:cover;">
                <span class="badge position-absolute top-0 end-0 m-2 ${
                  type === "rent" ? "bg-orange" : "bg-yellow"
                }">
                  ${type === "rent" ? "للإيجار" : "للبيع"}
                </span>
              </div>
              <div class="card-body p-3">
                <h5 class="card-title">${item.title}</h5>
                <p class="text-muted mb-2"><i class="fa-solid fa-location-dot text-primary"></i> ${
                  item.location
                }</p>
                <div class="property-info d-flex flex-wrap gap-3 mb-3">
                  <span><i class="fa-solid fa-vector-square text-warning"></i> ${
                    item.area
                  } م²</span>
                  <span><i class="fa-solid fa-bed text-danger"></i> ${
                    item.rooms
                  } غرف</span>
                  <span><i class="fa-solid fa-bath text-info"></i> ${
                    item.baths
                  } حمامات</span>
                </div>
                <div class="d-flex justify-content-between align-items-center card-footer bg-white border-0 p-0">
                  <button class="btn btn-sm btn-outline-primary">عرض المزيد</button>
                  <span class="fw-bold text-primary">${item.price} رس</span>
                </div>
              </div>
            </div>
          </div>
        `;

      data.rent.forEach(
        (item) => (rentContainer.innerHTML += createCard(item, "sell"))
      );
     
    } catch (error) {
      console.error("خطأ في تحميل البيانات:", error);
    }
  }
  loadData();
});