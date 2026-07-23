// Ambil semua tombol dan semua panel konten
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 1. Hapus class 'active' dari semua tombol
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // 2. Hapus class 'active' dari semua panel konten
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // 3. Tambahkan class 'active' ke tombol yang baru saja diklik
    button.classList.add("active");

    // 4. Ambil target ID dari data-tab dan tampilkan panelnya
    const targetId = button.getAttribute("data-tab");
    document.getElementById(targetId).classList.add("active");
  });
});
