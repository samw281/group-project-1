var slideshowSlide = document.querySelector(".slideshow-slide");
var slideshowImages = document.querySelectorAll(".slideshow-slide img");

// buttons
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

// counter
var counter = 1;
var size = slideshowImages[0].clientWidth;

slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";

// button listeners

nextBtn.addEventListener("click", function () {
  if (counter >= slideshowImages.length - 1) return;
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
});

slideshowSlide.addEventListener("transitionend", function () {
  if (slideshowImages[counter].id === "lastClone") {
    slideshowSlide.style.transition = "none";
    counter = slideshowImages.length - 2;
    slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (slideshowImages[counter].id === "firstClone") {
    slideshowSlide.style.transition = "none";
    counter = slideshowImages.length - counter;
    slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
