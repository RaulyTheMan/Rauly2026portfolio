document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".portfolio-media-card iframe").forEach((iframe) => {
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.style.overflow = "hidden";

    const card = iframe.closest(".portfolio-media-card");
    const src = iframe.getAttribute("src") || "";

    if (!card) return;

    if (src.includes("instagram.com/reel/")) {
      card.classList.add("is-instagram", "is-instagram-reel");
    } else if (src.includes("instagram.com/p/")) {
      card.classList.add("is-instagram", "is-instagram-post");
    }
  });

  const brandButtons = Array.from(document.querySelectorAll(".portfolio-brand"));
  const panels = Array.from(document.querySelectorAll(".portfolio-panel"));

  const showBrand = (brandId) => {
    brandButtons.forEach((button) => {
      const isActive = button.dataset.brand === brandId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === brandId);
    });
  };

  brandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showBrand(button.dataset.brand || "");
    });
  });

  showBrand("1522-the-pub");
});
