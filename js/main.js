// HTML elements important to the request
const input = document.getElementById("send");
const button = document.getElementById("button-start-req");
// sample application information elements
const ipOne = document.getElementById("ip-one");
const locationInfo = document.getElementById("location-info");
const utc = document.getElementById("utc");
const isp = document.getElementById("isp");
// require file
import { pet } from "./fun.js";
import { asemPage } from "./user.js";

button.addEventListener("click", async () => {
  const ip = input.value;
  Reflect.set(ipOne, "textContent", ip);
  const el = await pet(ip);
  console.log(el);
  asemPage(el);
});

export { locationInfo, utc, isp };
