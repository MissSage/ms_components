import { V as a } from "./index.js";
function o(o2, r2, e2 = 0) {
  const i = a(o2, 0, f);
  for (let t = 0; t < 4; t++)
    r2[e2 + t] = Math.floor(256 * l(i * n[t]));
}
function r(t, o2 = 0) {
  let r2 = 0;
  for (let n2 = 0; n2 < 4; n2++)
    r2 += t[o2 + n2] * e[n2];
  return r2;
}
const n = [1, 256, 65536, 16777216], e = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296], f = r(new Uint8ClampedArray([255, 255, 255, 255]));
function l(t) {
  return t - Math.floor(t);
}
export { o, r };
