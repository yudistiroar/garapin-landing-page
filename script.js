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
  const modal = document.querySelector("#portfolio-modal");
  const modalFrame = modal?.querySelector(".portfolio-modal-frame");
  const modalTitle = modal?.querySelector("#portfolio-modal-title");
  const closeButton = modal?.querySelector(".portfolio-modal-close");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  if (!modal || !modalFrame || !modalTitle || !closeButton) {
    return;
  }

  let lastTrigger = null;

  const closeModal = () => {
    if (modal.open) {
      modal.close();
    }
  };

  portfolioCards.forEach((card) => {
    card.addEventListener("click", () => {
      const { videoId, videoTitle } = card.dataset;

      if (!videoId || !videoTitle) {
        return;
      }

      lastTrigger = card;
      modalTitle.textContent = videoTitle;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;
      iframe.title = videoTitle;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      modalFrame.replaceChildren(iframe);
      document.body.classList.add("modal-open");
      modal.showModal();
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  modal.addEventListener("close", () => {
    modalFrame.replaceChildren();
    document.body.classList.remove("modal-open");
    lastTrigger?.focus();
    lastTrigger = null;
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
