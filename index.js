const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const maxxSlides = slides.length;
let curSlide = 0;
const slideTo = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - curSlide) * 100}%)`;
  });
};
slideTo();
btnRight.addEventListener("click", function () {
  if (curSlide === maxxSlides - 1) curSlide = 0;
  else curSlide++;
  slideTo();
});
btnLeft.addEventListener("click", function () {
  console.log("test");
  if (curSlide === 0) curSlide = maxxSlides - 1;
  else curSlide--;
  slideTo();
});
