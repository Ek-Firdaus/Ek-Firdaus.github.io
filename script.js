document.addEventListener("DOMContentLoaded", function () {
  // membuat variable dengan mengambil semua elemen class
  const links = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  // Melakukan iterasi pada setiap elemen tab-link untuk menambahkan event listener klik
  links.forEach((link) => {
    // Menambahkan event listener click
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Menghapus class active pada tiap item (class tab-link)
      links.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      // Menambahkan class active pada tab yang diklik

      // Mengambil nilai dari atribut data-target
      const target = this.getAttribute("data-target");
      // Menghapus semua class active pada content
      contents.forEach((content) => {
        content.classList.remove("active");
        setTimeout(() => {
          content.style.display = "none";
        }, 300);
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

// Menambahkan event listener pada elemen menu, ketika dklik class active-nav
// akan ditambahkan atau dihapus pada elemen navbar
document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active-nav");
});
