document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;

    function updateSlide() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
      });
    }
  
    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      updateSlide();
    });
  
    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });

    updateSlide();
  });
  