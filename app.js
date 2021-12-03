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
const sloganCountEl = document.getElementById('count');

skylineSelectEl.addEventListener('change', () => {
    let city = skylineSelectEl.value;
    console.log(city);
    skylineImageEl.src = `./assets/${city}-skyline.jpeg`;
});
castleSelectEl.addEventListener('change', () => {
    let castle = castleSelectEl.value;
    castleImageEl.src = `./assets/${castle}-castle`;
});
waterfrontSelectEl.addEventListener('change', () => {

});
sloganButtonEl.addEventListener('click', () => {

});