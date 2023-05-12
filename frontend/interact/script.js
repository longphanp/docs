const body = document.querySelector("body");
const mouseInteractContainer = document.querySelector(".mouse-interact");
const yellowCircle = document.querySelector(".group-of-circle > .yellow");
const grayCircle = document.querySelector(".group-of-circle > .gray");
const redCircle = document.querySelector(".group-of-circle > .red");

mouseInteractContainer.addEventListener("mousemove", (e) => {
  [yellowCircle, grayCircle, redCircle].forEach((circle, index) =>
    circle.animate(
      [
        {
          top: `${e.offsetY}px`,
          left: `${e.offsetX}px`,
        },
      ],
      {
        duration: 1000,
        delay: index * 100,
        fill: "forwards",
      }
    )
  );
});

const animateOnScrollContainer = document.querySelector(".animate-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const scrollEl = document.querySelectorAll(".animate-on-scroll > *");
scrollEl.forEach((el) => observer.observe(el));

const picContainer = document.querySelector(".animate-on-scroll > .image");
const tomPic = document.querySelector(".animate-on-scroll img");

const svgContainer = document.querySelector(".animate-on-scroll > .svg");
const svgRect = document.querySelector(".animate-on-scroll rect");

window.addEventListener("scroll", (e) => {
  const screenHeight = window.innerHeight;
  const picBox = picContainer.getBoundingClientRect();
  const centerBox = picBox.bottom - picBox.height / 2;
  if (centerBox > (screenHeight * 4) / 5) {
    const deg = Math.abs((5 * centerBox) / screenHeight - 4) * 180;
    tomPic.style.transform = `translate(${deg}px)`;
    tomPic.style.opacity = (180 - deg) / 180;
  } else if (centerBox < screenHeight / 5) {
    const deg = Math.abs(1 - (5 * centerBox) / screenHeight) * 180;
    tomPic.style.transform = `translateX(${deg}px)`;
    tomPic.style.opacity = (180 - deg) / 180;
  }

  const rectBox = svgRect.getBoundingClientRect();
  const rectBoxCenter = rectBox.bottom - rectBox.height / 2;

  if (rectBoxCenter > (screenHeight * 4) / 5) {
    const boxRound = ((5 * rectBoxCenter) / screenHeight - 4) * 25;
    svgRect.setAttribute("rx", boxRound);
  } else if (rectBoxCenter < screenHeight / 5) {
    const boxRound = (1 - (5 * rectBoxCenter) / screenHeight) * 25;
    svgRect.setAttribute("rx", boxRound);
  } else {
    svgRect.setAttribute("rx", 0);
  }
});

const dragableBoxes = document.querySelectorAll(".drag-and-drop .box");
const dropCols = document.querySelectorAll(".drag-and-drop .col");
let dragObject;
let originParent;

dragableBoxes.forEach((box) => {
  box.addEventListener("dragstart", (e) => {
    e.dataTransfer.effectAllowed = "move";

    dragObject = e.target;
    dragObject.classList.add("drag-obj");
    originParent = dragObject.parentElement;
  });

  box.addEventListener("dragend", (e) => {
    e.target.classList.remove("drag-obj");
    if (!e.target.parentElement) {
      originParent.insertBefore(dragObject, originParent.firstElementChild);
    }
  });
});

dropCols.forEach((col) => {
  col.addEventListener("dragenter", (e) => {
    const target = e.currentTarget;
    if (!e.target.classList.contains("drag-obj"))
      target.dataset.counter = Number(target.dataset.counter) + 1;
    // Add highligh to target col
    target.classList.add("highlight");
    // Remove origin object
    const dragParent = dragObject.parentElement;
    if (dragParent) {
      const originObj = dragParent.querySelector(".drag-obj");
      dragParent.removeChild(originObj);
    }
    const hasNoColorBox = target.querySelector(".nocolor");
    if (!hasNoColorBox) {
      const noColorBox = document.createElement("div");
      noColorBox.classList.add("box", "nocolor");
      target.insertBefore(noColorBox, target.firstElementChild);
      if (e.target.classList.contains("drag-obj")) return;
      noColorBox.animate([{ width: 0 }, { width: "100%" }], {
        duration: 200,
        fill: "forwards",
        easing: "ease-out",
      });
    }
  });

  col.addEventListener("dragleave", (e) => {
    const target = e.currentTarget;
    target.dataset.counter = Number(target.dataset.counter) - 1;
    if (Number(target.dataset.counter) === 0) {
      target.classList.remove("highlight");

      const noColorBox = target.querySelector(".nocolor");
      if (noColorBox) {
        target.removeChild(noColorBox);
      }
    }
  });

  col.addEventListener(
    "dragover",
    (event) => {
      // prevent default to allow drop
      event.preventDefault();
      //event.dataTransfer.dropEffect = "move";
    },
    false
  );

  col.addEventListener("drop", (e) => {
    const target = e.currentTarget;
    const noColorBox = target.querySelector(".nocolor");
    target.dataset.counter = Number(target.dataset.counter) - 1;
    if (noColorBox) {
      target.removeChild(noColorBox);
    }
    if (target.firstElementChild)
      target.insertBefore(dragObject, target.firstElementChild);
    else target.appendChild(dragObject);

    target.classList.remove("highlight");
  });
});

var mouseDown = 0;
document.onmousedown = function () {
  ++mouseDown;
};
document.onmouseup = function () {
  --mouseDown;
};

const touchGroundContainer = document.querySelector(".touch-ground");
const scrollObject = document.querySelector(".touch-ground .scroll-object");

let mouseOffsetX;
let backgroundPos = 0;
let distant = 0;
touchGroundContainer.addEventListener("mousedown", (e) => {
  mouseOffsetX = e.offsetX;
  distant = 0;
});

touchGroundContainer.addEventListener("mousemove", (e) => {
  distant = (e.offsetX - mouseOffsetX) / 2;
  if (!isNaN(distant) && mouseDown) {
    scrollObject.animate(
      [
        { backgroundPosition: `${backgroundPos}px 0` },
        {
          backgroundPosition: `${backgroundPos + distant}px 0 `,
        },
      ],
      { fill: "forwards" }
    );
  }
});

const handleMouseUpAndLeave = (e) => {
  mouseOffsetX = undefined;
  if (!isNaN(distant)) {
    const newPos = backgroundPos + distant + Math.sign(distant) * 500;
    scrollObject.animate(
      [
        { backgroundPosition: `${backgroundPos + distant}px 0` },
        {
          backgroundPosition: `${newPos}px 0 `,
        },
      ],
      { duration: 200, fill: "forwards", ease: "ease-in-out", delay: 50 }
    );
    backgroundPos = newPos;
  }
};

touchGroundContainer.addEventListener("mouseup", handleMouseUpAndLeave);

touchGroundContainer.addEventListener("mouseleave", handleMouseUpAndLeave);
