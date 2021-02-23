import { pet } from "./fun.js";
import { locationInfo, utc, isp } from "./main.js";

export function asemPage() {
  Reflect.set(locationInfo, "textContent", parseInt(ubi));
  Reflect.set(utc, "textContent", timeZone);
  Reflect.set(isp, "textContent", compañia);
}
