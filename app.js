const randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNum = document.getElementById("RN");
let result = document.getElementById("result");
let nonActive = document.querySelectorAll("main .card");
let bullets = document.getElementById("nums");

let sliderImages = Array.from(document.querySelectorAll(".container div"));

let slideCount = sliderImages.length;

let currentSlide = 1;

let slideNum = document.getElementById("slide-num");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        checker();
    }
}

function prevSlide() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        checker();
    }
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

for (let i = 0; i < slideCount; i++) {
    let lis = document.createElement("li");
    lis.setAttribute("data-index", i + 1);
    lis.appendChild(document.createTextNode(i + 1));
    bullets.appendChild(lis);
}

let sliderBullets = Array.from(document.querySelectorAll(".buttons ul li"));

// for (let i = 0; i < sliderBullets.length; i++) {
//     sliderBullets[i].addEventListener("click", () => {
//         currentSlide = parseInt(sliderBullets[i].getAttribute("data-index"));
//         checker();
//     });
// }

function checker() {
    handleUnactiveElements();

    sliderImages[currentSlide - 1].classList.add("active-opacity");

    bullets.children[currentSlide - 1].classList.add("active-BG");

    if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }
    if (currentSlide == slideCount) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }

    if (currentSlide == 6) {
        setTimeout(() => {
            alert(
                `The page will automatically reload! \n\n سيتم إعادة تحميل الصفحة تلقائيًا`
            );
            setTimeout(() => {
                location.reload();
            }, 1000);
        }, 1500);
    }
}

function handleUnactiveElements() {
    sliderImages.forEach((ele) => {
        ele.classList.remove("active-opacity");
    });

    sliderBullets.forEach((ele) => {
        ele.classList.remove("active-BG");
    });
}

checker();

let results = randomNumber / 2;

result.innerHTML =
    `Results = ${results}` + "<br/>".repeat(2) + `النتائج = ${results}`;
randomNum.innerHTML =
    `Add '${randomNumber}' to the total` +
    "<br />".repeat(2) +
    `أضف '${randomNumber}' إلى المجموع الإجمالي`;

if (prevBtn.classList.contains('disabled')){
  prevBtn.classList.remove('animation')
} else {
  prevBtn.classList.add('animation')
}

if (nextBtn.classList.contains('disabled')) {
  nextBtn.classList.remove('animation')
}