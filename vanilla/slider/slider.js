document.addEventListener("DOMContentLoaded", (event) => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slider .slide");
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const heroSlider = document.querySelector(".hero-slider");

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  [heroSlider, nextButton, prevButton].forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      clearInterval(slideInterval);
    });

    elem.addEventListener("mouseout", () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
});
