// Ambil elemen utama
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const background = document.getElementById("background");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const titleBox = document.getElementById("cardTitle");
const descBox = document.getElementById("cardDesc");

// Pastikan ada card sebelum lanjut
if (!cardsContainer || cards.length === 0) {
  console.error("Cards container atau card tidak ditemukan!");
} else {
  // Atur background awal
  background.style.backgroundImage = `url(${cards[0].dataset.bg})`;

  // Fungsi untuk memperbarui tampilan dan teks luar
  function updateSlider() {
    const allCards = document.querySelectorAll(".card"); // re-query karena urutan bisa berubah

    // Hapus class aktif dari semua
    allCards.forEach((card) => card.classList.remove("active"));

    // Jadikan card pertama aktif
    const activeCard = allCards[0];
    activeCard.classList.add("active");

    // Ganti background sesuai data-bg card aktif
    background.style.backgroundImage = `url(${activeCard.dataset.bg})`;

    // Update panel teks luar
    updateCardInfo();
  }

  // Fungsi update teks panel kiri
  function updateCardInfo() {
    const activeCard = document.querySelector(".card.active");
    if (!activeCard) return;

    const titleHTML = activeCard.querySelector("h3")?.innerHTML || "Unknown";

    const desc = activeCard.dataset.desc || "No description available.";

    titleBox.innerHTML = titleHTML;
    descBox.textContent = desc;
  }

  // Tombol Next
  nextBtn.addEventListener("click", () => {
    const first = cardsContainer.firstElementChild;
    cardsContainer.appendChild(first);
    updateSlider();
  });

  // Tombol Prev
  prevBtn.addEventListener("click", () => {
    const last = cardsContainer.lastElementChild;
    cardsContainer.prepend(last);
    updateSlider();
  });

  // Klik langsung pada card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      while (cardsContainer.firstElementChild !== card) {
        cardsContainer.appendChild(cardsContainer.firstElementChild);
      }
      updateSlider();
    });
  });
}

// Link Membuka Instagram

function openInstagramLinks(event) {
  // Mencegah browser mengikuti href="#" (penting jika href="#" ada)
  event.preventDefault();

  // Daftar URL yang ingin dibuka
  const links = [
    "https://www.instagram.com/golixny/",
    "https://www.instagram.com/danz_vct/",
  ];

  // Buka setiap link di tab baru
  links.forEach((link) => {
    window.open(link, "_blank");
  });
}

// Link Membuka TikTok

function openTiktokLinks(event) {
  // Mencegah browser mengikuti href="#" (penting jika href="#" ada)
  event.preventDefault();

  // Daftar URL yang ingin dibuka
  const links = [
    "https://www.tiktok.com/@bnguntdr?_r=1&_t=ZS-91SqcjeOSOq",
    "https://www.tiktok.com/@vct.lh?is_from_webapp=1&sender_device=pc",
  ];

  // Buka setiap link di tab baru
  links.forEach((link) => {
    window.open(link, "_blank");
  });
}
// 

// Link Membuka Facebook

function openFacebookLinks(event) {
  // Mencegah browser mengikuti href="#" (penting jika href="#" ada)
  event.preventDefault();

  // Daftar URL yang ingin dibuka
  const links = [
    "https://www.facebook.com/share/1ZZSGfVzau/",
    "https://www.facebook.com/ibnu.rasyidin.35",
  ];

  // Buka setiap link di tab baru
  links.forEach((link) => {
    window.open(link, "_blank");
  });
}
