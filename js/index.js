// Navbar
const navBtn = document.querySelector(".burger");
const navbar = document.querySelector(".mb-navbar");

function openCloseNav() {
  navBtn.classList.toggle("active");
  navbar.classList.toggle("active");
}

navBtn.addEventListener("click", openCloseNav);

// Slider
const sliderContainer = document.querySelector(".slider--inner");
let slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider--btn.prev");
const nextBtn = document.querySelector(".slider--btn.next");
let counter = 1;
let slideSize = 25;

// create a clone of the last slide and the first slide
function cloneSlides() {
  slides.forEach((el, i, arr) => {
    if (i === 0) {
      let firstClone = `
      <div class="slide firstClone">
          <div class="slide--content">
            <h5 class="slide--heading"></h5>
              Learn about Accessibility with publikphigor
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, in illo. Cumque necessitatibus, eos velit
              perferendis reprehenderit sunt blanditiis fugit.
            </p>
            <div class="buttons">
              <span class="btn btn--fill">Button One</span>
              <span class="btn btn--outline">Button Two</span>
            </div>
          </div>
        </div>
          `;
      sliderContainer.insertAdjacentHTML("beforeend", firstClone);
    }
    if (i === arr.length - 1) {
      let lastClone = `
      <div class="slide lastClone">
      <div class="slide--content">
        <h5 class="slide--heading">Nothing here, just vibes!</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, in illo. Cumque necessitatibus, eos velit
          perferendis reprehenderit sunt blanditiis fugit.
        </p>
        <div class="buttons">
          <span class="btn btn--fill">Button One</span>
          <span class="btn btn--outline">Button Two</span>
        </div>
      </div>
    </div>
            `;
      sliderContainer.insertAdjacentHTML("afterbegin", lastClone);
    }
  });
}
cloneSlides();
// reselect all slides
slides = [...document.querySelectorAll(".slide")];
sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;

function nextSlide() {
  if (counter >= slides.length - 1) return;
  counter++;
  sliderContainer.style.transition = `transform 0.4s ease-in-out`;
  sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
}

function prevSlide() {
  if (counter <= 0) return;
  counter--;
  sliderContainer.style.transition = `transform 0.4s ease-in-out`;
  sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// loop back to first/last slide
sliderContainer.addEventListener("transitionend", () => {
  if (slides[counter].classList.contains("lastClone")) {
    sliderContainer.style.transition = "none";
    counter = slides.length - 2;
    sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
  }
  if (slides[counter].classList.contains("firstClone")) {
    sliderContainer.style.transition = "none";
    counter = slides.length - counter;
    sliderContainer.style.transform = `translateX(-${slideSize * counter}%)`;
  }
});
