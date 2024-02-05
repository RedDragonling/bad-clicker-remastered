// GAME IDEA: Instead of active clicker, it's semi-idle. Pet cat for points. Give cat kibble to go quicker. Focus on cat evolutions.
// Things to add!
// 1. Point collection system. Click to pet = 1 point. Spend point on upgrades.
// 2. Idle point system. Buy upgrades that increase points gained over time.
// 3. Cookies so you dont have to restart at page reload.
// 4. Evolutions depending on level-up

const elementCat = document.getElementById("cat");
const elementName = document.getElementById("name");
const elementLevel = document.getElementById("level");
const elementCoin = document.getElementById("coin-amount");
const elementCPS = document.getElementById("click-per-second");

const pointIncrement = 1;

let points = 0;
let level = 1;
let levelCost = 100;

// REMEMBER TO MATH ROUND UP TO AVOID DECIMALS

console.log(points);

// elementCat?.addEventListener("click", ()=>{
//   points = points + pointIncrement;
//   elementCoin.innerHTML = points;
// });


// changes css on levelup button
function updateLevelUpButton() {
  if (points >= levelCost) {
    document.getElementById("level-up").classList.add('active-level-up');
  } else if (points <= levelCost) {
    document.getElementById("level-up").classList.remove('active-level-up')
  }
};

// level up button functionality
document.getElementById("level-up")?.addEventListener('click', () => {
  if (points >= levelCost) {
    console.log("hi");
    points = points - levelCost;
    elementCoin.innerHTML = points;
    level = level + 1;
    elementLevel.innerHTML = level;
    updateLevelUpButton();
  } else {
    console.log("sorry you're broke")
  }
})

// if (points >= levelCost) {
//   points = points - levelCost;
//   elementCoin.innerHTML = points;
//   level = level + 1;
//   elementLevel?.innerHTML = level;
//   updateLevelUpButton();

// TESTING ALTERNATIVE CLICKER METHOD

function holdDownClick() {
  points = points + pointIncrement;
  elementCoin.innerHTML = points;
  updateLevelUpButton();
};

let isMouseDown = false;
let intervalID;
// Tracks if mouse is holding down on element
elementCat?.addEventListener('mousedown', () => {
  isMouseDown = true;
  holdDownClick();
  intervalID = setInterval(holdDownClick, 200);
});
// Tracks if mouse is released from element
elementCat?.addEventListener('mouseup', () =>{
  isMouseDown = false;
  clearInterval(intervalID);
});
// Tracks if mouse leaves the element before releasing
elementCat?.addEventListener('mouseleave', () =>{
  if (isMouseDown) {
    isMouseDown = false;
    clearInterval(intervalID);
  }
});

