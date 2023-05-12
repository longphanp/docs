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
