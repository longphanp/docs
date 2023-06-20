const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = $("#app");

const render = (path) => {
  app.innerHTML = `<a href="/vanila-js">Home</a> | 
                   <a href="/vanila-js/about">About</a> | 
                   <a href="/vanila-js/contact">Contact</a>
    <br/> ${router(path)}`;

  document.querySelectorAll("[href]").forEach((el) =>
    el.addEventListener("click", (evt) => {
      evt.preventDefault();
      const { pathname: path } = new URL(evt.target.href);
      window.history.pushState({ path }, path, path);
      render(path);
    })
  );
};

const router = (path) => {
  const pathName = path.replace("/vanila-js", "");
  const route = {
    "": "Home",
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/long": `<div class="long long2">Long</div>`,
    "/pip": "<div>Pip</div>",
  };

  return route[pathName] || "<div>404</div>";
};

window.addEventListener("popstate", () => {
  render(new URL(window.location.href).pathname);
});

render("/");

const playButton = $(".play");
const stopButton = $(".stop");
const player = $("audio");

playButton.addEventListener("click", () => {
  player.play();
});

stopButton.addEventListener("click", () => {
  player.pause();
});

// Web workers
if (window.Worker) {
  const myWorker = new Worker("./worker.js");
  console.log("web worker");
  myWorker.onmessage = (e) => {
    console.log("Message received from worker", e.data);
  };
}

// Service workers
if (navigator.serviceWorker) {
  console.log("service worker");
  navigator.serviceWorker.register("./service-worker.js");

  navigator.serviceWorker.ready.then((res) => {
    console.log(res);
    return res.sync.register("foo");
  });
}

// Notification API
function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }
}

notifyMe();

// Geo API
function getGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log(res);
    });
  }
}

getGeoLocation();

const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  audio: false,
};

function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.log("Track settings:");
  console.log(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.log("Track constraints:");
  console.log(JSON.stringify(videoTrack.getConstraints(), null, 2));
}

async function startCapture() {
  logElem.innerHTML = "";

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
    dumpOptionsInfo();
  } catch (err) {
    console.error(err);
  }
}

function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;
}

// Set event listeners for the start and stop buttons
startElem.addEventListener(
  "click",
  (evt) => {
    startCapture();
  },
  false
);

stopElem.addEventListener(
  "click",
  (evt) => {
    stopCapture();
  },
  false
);
