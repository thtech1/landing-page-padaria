document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;
  
    // Atualiza a visibilidade dos slides
    function updateSlide() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
      });
    }
  
    // Botão Anterior
    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      updateSlide();
    });
  
    // Botão Próximo
    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });
  
    // Inicializa o slide ativo
    updateSlide();
  });
  