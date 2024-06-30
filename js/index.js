document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faqs__container h2").forEach(function (header) {
    header.addEventListener("click", function () {
      const p = this.nextElementSibling.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (p.style.display === "none" || p.style.display === "") {
        p.style.display = "block";
        p.style.color = "#ccc";
        arrow.style.transform = "rotate(-135deg)";
      } else {
        p.style.display = "none";
        arrow.style.transform = "rotate(45deg)";
      }
    });
  });
});
