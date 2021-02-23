// HTML elements important to the request
const input = document.getElementById("send");
const button = document.getElementById("button-start-req");
// sample application information elements
const ipInfo = document.getElementById("ipinfo");
const locationInfo = document.getElementById("location-info");
const utc = document.getElementById("utc");
const isp = document.getElementById("isp");
// require file
import { pet } from "./fun.js";

function info() {
  button.addEventListener("click", () => {
    let ip = input.value;
    console.log(ip);
    pet(ip);
  });
}

info();
