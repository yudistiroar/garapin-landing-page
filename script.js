"use strict";

const createYouTubePlayer = (videoId, videoTitle, autoplay = false) => {
  const iframe = document.createElement("iframe");
  const params = new URLSearchParams({
    rel: "0",
    playsinline: "1",
  });

  if (autoplay) {
    params.set("autoplay", "1");
  }

  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    params.set("origin", window.location.origin);
  }

  iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params}`;
  iframe.title = videoTitle;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  return iframe;
};

const openYouTubeShort = (videoId) => {
  window.open(`https://www.youtube.com/shorts/${encodeURIComponent(videoId)}`, "_blank", "noopener,noreferrer");
};

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
  const heroVideo = document.querySelector(".hero-video");
  const heroVideoTrigger = heroVideo?.querySelector(".hero-video-trigger");

  if (!heroVideo || !heroVideoTrigger) {
    return;
  }

  heroVideoTrigger.addEventListener("click", () => {
    const { videoId, videoTitle } = heroVideo.dataset;

    if (!videoId || !videoTitle) {
      return;
    }

    if (window.location.protocol === "file:") {
      openYouTubeShort(videoId);
      return;
    }

    const iframe = createYouTubePlayer(videoId, videoTitle, true);
    iframe.className = "hero-video-frame";

    heroVideo.replaceChildren(iframe);
  }, { once: true });
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

      if (window.location.protocol === "file:") {
        openYouTubeShort(videoId);
        return;
      }

      const iframe = createYouTubePlayer(videoId, videoTitle, true);

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
