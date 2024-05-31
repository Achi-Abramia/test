document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const totalImages = images.length;
    
    let currentIndex = 0;
    
    function showNextSlide() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      updateSlider();
    }
  
    function updateSlider() {
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(showNextSlide, 3000);
  });