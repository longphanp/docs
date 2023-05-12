const { lowerCase } = require("lodash");
import { appHtml } from "@/app";
import "./styles.css";

const app = document.querySelector("#app");

console.log(lowerCase("LOng"));
app.innerHTML = appHtml;
