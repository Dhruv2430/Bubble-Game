const time = document.querySelector(".time");
const hit = document.querySelector(".hit");
const score = document.querySelector(".score");
const lower = document.querySelector(".lower");
let cc = 10;
let newscore = 0;
let newHit;

const genDiv = () => {
    let clutter = "";
    for (let index = 0; index < 160; index++) {
        let rn = Math.floor(Math.random() * 10) + 1;
        clutter += `<div class="round">${rn}</div>`;
    }
    lower.innerHTML = clutter;
};

genDiv();

lower.addEventListener("click", (e) => {
    if (e.target.classList.contains("round")) {
        const clickedNumber = parseInt(e.target.textContent, 10);
        if (clickedNumber === newHit) {
            handleScore();
            genDiv()
            generateRandomNumber();
        }
    }
});

const handleScore = () => {
    newscore += 10;
    score.textContent = newscore;
};

const generateRandomNumber = () => {
    newHit = Math.floor(Math.random() * 10) + 1;
    hit.textContent = newHit;
};

const handleTime = () => {
    const timer = setInterval(() => {
        if (cc > 0) {
            cc--;
            time.textContent = cc;
        } else {
            clearInterval(timer);
        
            lower.innerHTML = `Your Score is ${newscore}`;
        }
    }, 1000);
};

handleTime();
generateRandomNumber();
