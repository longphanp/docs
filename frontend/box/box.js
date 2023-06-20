const boxBackground = document.querySelector(".box-background");

boxBackground.addEventListener("mousemove", (e) => {
  boxBackground.style.backgroundPositionX = -e.offsetX + "px";
  boxBackground.style.backgroundPositionY = -e.offsetY + "px";
});

setTimeout(() => {
  console.log("After 1 second");
}, 1000);
