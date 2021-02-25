import { locationInfo, utc, isp } from "./main.js";

export function asemPage({ ubi, timeZone, compañia }) {
  Reflect.set(locationInfo, "textContent", ubi);
  Reflect.set(utc, "textContent", timeZone);
  Reflect.set(isp, "textContent", compañia);
}
