import { locationInfo, utc, isp } from "./main.js";
import { pet } from "./fun.js";

export function asemPage({ ubi, timeZone, compañia }) {
  Reflect.set(locationInfo, "textContent", ubi);
  Reflect.set(utc, "textContent", timeZone);
  Reflect.set(isp, "textContent", compañia);
}
