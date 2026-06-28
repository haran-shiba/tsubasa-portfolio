const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove("active");

  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slides[currentIndex].classList.add("active");
}, 3000);




