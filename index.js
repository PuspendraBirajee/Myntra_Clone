let slide = document.querySelectorAll(".slidecard"); // Corrected selector name
let card = document.querySelectorAll(".card"); // No corresponding HTML element with class "card"

let count = 0;

slide.forEach(function(slides, index) {
    slides.style.left = `${index * 100}%`; // Corrected syntax for string interpolation
})

function myFun() {
    slide.forEach(function(curVal) {
        curVal.style.transform = `translateX(-${count * 100}%)`;
    })
}

setInterval(function() {
    count++;
    if (count == slide.length) {
        count = 0;
    }
    myFun();
}, 2000);

// card detail

card.forEach(function(cards) {
    cards.addEventListener("click", function() { // Corrected typo in "addEventListener"
        console.log(cards.firstElementChild.src);
        document.querySelector(".container").style.display = "none"; // No corresponding HTML element with class "container"
        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <img src=${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Top Trending Wear</h2>
            <h2>Upto 30% off Hurry..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <p>tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi</p>
            <p>ut aliquip ex ea commodo
            consequat.</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>`;

        document.querySelector("body").appendChild(div);
    });
});
