document.addEventListener("DOMContentLoaded", () => {
  const initSlider = () => {
    const imageList = document.querySelector(".carousel .image-list");
    const slideButtons = document.querySelectorAll(".carousel .slide-button");
    const updateMaxScrollLeft = () => {
      return imageList.scrollWidth - imageList.clientWidth;
    };

    const maxScrollLeft = updateMaxScrollLeft(); 

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    const handleSlideButtons = () => {
      const currentScrollLeft = imageList.scrollLeft;
      const maxScrollLeft = updateMaxScrollLeft();
      console.log(`Current Scroll: ${currentScrollLeft}, Max Scroll: ${maxScrollLeft}`);
      slideButtons[0].style.display = currentScrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display = currentScrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // Attach scroll event to handle slide button visibility
    imageList.addEventListener("scroll", handleSlideButtons);

    // Initial call to handle button visibility
    handleSlideButtons();
  };

  initSlider();
});
