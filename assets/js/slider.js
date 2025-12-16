(function () {
  function initSlider(slider) {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const dots = Array.from(slider.querySelectorAll(".dot"));
    const prevBtn = slider.querySelector(".slider-btn.prev");
    const nextBtn = slider.querySelector(".slider-btn.next");

    let index = 0;
    const autoplay = slider.dataset.autoplay === "true";
    const interval = parseInt(slider.dataset.interval || "4500", 10);
    let timer = null;

    function render(i) {
      slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
      index = i;
    }

    function next() {
      render((index + 1) % slides.length);
    }

    function prev() {
      render((index - 1 + slides.length) % slides.length);
    }

    function start() {
      if (!autoplay) return;
      stop();
      timer = setInterval(next, interval);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { stop(); next(); start(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { stop(); prev(); start(); });

    dots.forEach((d, i) => {
      d.addEventListener("click", () => { stop(); render(i); start(); });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);

    render(0);
    start();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slider").forEach(initSlider);
  });
})();
