document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      links.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const target = this.getAttribute("data-target");
      contents.forEach((content) => {
        content.classList.remove("active");
        content.classList.remove("active"); // Hilangkan efek fade
        setTimeout(() => {
          content.style.display = "none"; // Setelah transisi, sembunyikan elemen
        }, 300); // Delay sesuai durasi transition di CSS
      });

      // Tampilkan tab yang dipilih dengan animasi fade in
      const targetContent = document.getElementById(target);
      setTimeout(() => {
        targetContent.style.display = "block";
        setTimeout(() => targetContent.classList.add("active"), 10);
      }, 300);
    });
  });
});

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active-nav");
});
