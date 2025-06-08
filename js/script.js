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
let slides = document.querySelectorAll(".img_slider");
let currentIndex = 0;

console.log(slides.length);

function nexSlide() {
    currentIndex++;
    if(currentIndex >= slides.length) {
        currentIndex = 0;
    }

    let width = slides[0].offsetWidth;
    console.log(width);


    
}

function prevSlide() {

}

btn_next.addEventListener("click", nexSlide);
btn_prev.addEventListener("click", prevSlide);


// SLIDER END
