document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveal = (element) => {
    if (!element || element.classList.contains("anim-in")) return;
    element.classList.add("anim-in");
  };

  if (prefersReducedMotion) {
    document.querySelectorAll(".anim-init").forEach((element) => {
      element.classList.add("anim-in");
    });
    return;
  }

  document.querySelectorAll(".skills-grid img.anim-init").forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 35}ms`);
  });

  document.querySelectorAll(".clients-grid img.anim-init").forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 35}ms`);
  });

  document.querySelectorAll(".about-row.anim-init").forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 80}ms`);
  });

  const loadTargets = document.querySelectorAll(".anim-load.anim-init");
  loadTargets.forEach((element) => {
    requestAnimationFrame(() => reveal(element));
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  document.querySelectorAll(".anim-scroll.anim-init").forEach((element) => {
    observer.observe(element);
  });
});
