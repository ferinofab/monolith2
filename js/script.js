// FILTER

let filter_btn = document.getElementById('filter_btn');
const block_card_category = document.querySelectorAll("[data-category]");

filter_btn.addEventListener("click", filter);

function filter () {
    const select_user = document.getElementById('select').value;
    block_card_category.forEach((element_card) => {
        let isMatch = false;
        const data_category = element_card.getAttribute("data-category")

        if(data_category === select_user || select_user == "all") {
            element_card.style = "display:block;"
        }
        else {
            element_card.style = "display:none;"
        }
       
    });
}

// FILTER END

// SLIDER

let btn_next = document.querySelector("[data-btn-next]");
let btn_prev = document.querySelector("[data-btn-prev]");
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll("#img");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let currentIndexDot = 0;

console.log(slides[0].offsetWidth);

function nexSlide() {
    slider.classList.remove("active_slide");
    dots[currentIndexDot].classList.remove('active')

    currentIndex++;
    currentIndexDot++;

    if(currentIndex >= slides.length) {
        currentIndex = 0;
    }
    if(currentIndexDot >= dots.length) {
        currentIndexDot = 0;
    }

    let width = slides[0].offsetWidth;
    console.log(width);
    slider.style = "translate: -" + width *  currentIndex + "px";
    slider.classList.add("active_slide");
    dots[currentIndexDot].classList.toggle('active')
    
}

function prevSlide() {
    slider.classList.remove("active_slide");
    dots[currentIndexDot].classList.remove('active')

    currentIndex--;
    currentIndexDot--;

    if(currentIndex <= -1) {
        currentIndex = slides.length - 1;
    }
    if(currentIndexDot <= -1) {
        currentIndexDot = dots.length - 1;
    }

    let width = slides[0].offsetWidth;
    slider.style = "translate: -" + width *  currentIndex + "px";
    slider.classList.add("active_slide");
    dots[currentIndexDot].classList.toggle('active')



}

btn_next.addEventListener("click", nexSlide);
btn_prev.addEventListener("click", prevSlide);


// SLIDER END


// SLIDER POPULAR
const track = document.getElementById('slider-track');
const cards = track.querySelectorAll('.card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carsWidth = document.querySelectorAll(".card_popular");
const visibleCards = 3;
const totalCards = cards.length;
const cardWidth = carsWidth[0].offsetWidth + 20; 
console.log(cardWidth);
let currentIndexPopular = 0;

function updateSliderPosition() {
  const offset = currentIndexPopular * cardWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndexPopular++;
  if (currentIndexPopular + visibleCards > totalCards) {
    // За пределами — начать сначала
    currentIndexPopular = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
  currentIndexPopular--;
  if (currentIndexPopular < 0) {
    // Переход в конец
    currentIndexPopular = totalCards - visibleCards;
  }
  updateSliderPosition();
});

updateSliderPosition();
