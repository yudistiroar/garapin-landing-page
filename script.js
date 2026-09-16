"use strict";

(() => {
  const portfolioGrid = document.querySelector("#portfolio-grid");
  const portfolioToggle = document.querySelector(".portfolio-toggle");

  if (!portfolioGrid || !portfolioToggle) {
    return;
  }

  portfolioToggle.addEventListener("click", () => {
    const isExpanded = portfolioToggle.getAttribute("aria-expanded") === "true";

    portfolioGrid.classList.toggle("is-expanded", !isExpanded);
    portfolioToggle.setAttribute("aria-expanded", String(!isExpanded));
    portfolioToggle.textContent = isExpanded ? "Lihat Semua Hasil" : "Tampilkan Lebih Sedikit";
  });
})();

(() => {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) {
    return;
  }

  const setItemState = (item, isOpen) => {
    const trigger = item.querySelector(".faq-trigger");
    const answer = item.querySelector(".faq-answer");

    if (!trigger || !answer) {
      return;
    }

    item.classList.toggle("is-open", isOpen);
    trigger.setAttribute("aria-expanded", String(isOpen));
    answer.setAttribute("aria-hidden", String(!isOpen));
    answer.inert = !isOpen;
  };

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");

    if (!trigger) {
      return;
    }

    setItemState(item, trigger.getAttribute("aria-expanded") === "true");

    trigger.addEventListener("click", () => {
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";

      faqItems.forEach((faqItem) => setItemState(faqItem, false));
      setItemState(item, shouldOpen);
    });
  });
})();
