/* =========================
   CERTIFICATIONS TOGGLE
========================= */
function showCerts() {
  const certSection = document.getElementById("certifications");

  certSection.classList.toggle("hidden");

  if (!certSection.classList.contains("hidden")) {
    certSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* =========================
   SKILLS ACCORDION
========================= */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

/* =========================
   EXPERIENCE + PROJECTS ACCORDION
========================= */
document.querySelectorAll(".exp-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

/* =========================
   IMAGE MODAL
========================= */
function openImageModal(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");

  img.src = src;
  modal.style.display = "flex";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

/* Close modal on ESC key */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeImageModal();
  }
});
