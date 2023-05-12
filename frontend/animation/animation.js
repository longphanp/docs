//No transition back

const noTransitionBack = document.querySelector(".no-transition-back");

noTransitionBack.addEventListener("mouseover", () => {
  noTransitionBack.classList.add("span-transition");
});

const transitionHalf = document.querySelector(".transition-half");

//-------------------------------
//Transition half

let firstEnter;

const endWidth = 400;
const pixelPerSecond = 50;
transitionHalf.addEventListener("mouseover", () => {
  const width = transitionHalf.getBoundingClientRect().width;
  transitionHalf.style.transitionProperty = "width";
  transitionHalf.style.transitionDuration =
    (endWidth - width) / pixelPerSecond + "s";
  transitionHalf.style.width = endWidth + "px";
});

transitionHalf.addEventListener("mouseout", () => {
  transitionHalf.style.width =
    transitionHalf.getBoundingClientRect().width + "px";
});

//-------------------------------
// Expand box
const expandBox = document.querySelector(".expand-box");

let isOpen = false;
expandBox.addEventListener("click", () => {
  expandBox.style.width = isOpen ? `200px` : `400px`;
  isOpen = !isOpen;
});
