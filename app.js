// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  
const skylineImageEl = document.getElementById('skyline-image');
const castleImageEl = document.getElementById('castle-image');
const waterfrontImageEl = document.getElementById('waterfront-image');
const skylineSelectEl = document.getElementById('skyline-dropdown');
const castleSelectEl = document.getElementById('castle-dropdown');
const waterfrontSelectEl = document.getElementById('waterfront-dropdown');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButtonEl = document.getElementById('slogan-button');
const changeCountsEl = document.getElementById('count');
const sloganDisplayEl = document.getElementById('slogan');

const sloganArray = [];
let waterCount = 0;
let skylineCount = 0;
let castleCount = 0;

skylineSelectEl.addEventListener('change', () => {
    skylineCount++;
    let city = skylineSelectEl.value;
    skylineImageEl.src = `./assets/${city}-skyline.jpeg`;
    displayCounts();
});
castleSelectEl.addEventListener('change', () => {
    castleCount++;
    let castle = castleSelectEl.value;
    castleImageEl.src = `./assets/${castle}-castle.jpeg`;
    displayCounts();
});
waterfrontSelectEl.addEventListener('change', () => {
    waterCount++;
    let water = waterfrontSelectEl.value;
    waterfrontImageEl.src = `./assets/${water}-waterfront.jpeg`;
    displayCounts();
});
sloganButtonEl.addEventListener('click', () => {
    const slogan = sloganInputEl.value;
    sloganArray.push(slogan);
    sloganInputEl.value = '';
    displaySlogans();
});

function displaySlogans() {
    sloganDisplayEl.textContent = '';
    for (let slogan of sloganArray) {
        const p = document.createElement('p');
        p.classList.add('slogan');
        sloganDisplayEl.append(p);
        p.textContent = slogan;

    }
}

function displayCounts() {
    changeCountsEl.textContent = `You've changed the waterfront ${waterCount} times, the skyline ${skylineCount} times, and the castle ${castleCount} times.`;
}