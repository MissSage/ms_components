function n(n2) {
  return "r" in n2 && "g" in n2 && "b" in n2;
}
function t(n2) {
  return "h" in n2 && "s" in n2 && "v" in n2;
}
function r(n2) {
  return "l" in n2 && "a" in n2 && "b" in n2;
}
function u(n2) {
  return "l" in n2 && "c" in n2 && "h" in n2;
}
function o(n2) {
  return "x" in n2 && "y" in n2 && "z" in n2;
}
const e = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], c = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
function i(n2, t2) {
  const r2 = [];
  let u2, o2;
  if (n2[0].length !== t2.length)
    throw "dimensions do not match";
  const e2 = n2.length, c2 = n2[0].length;
  let i2 = 0;
  for (u2 = 0; u2 < e2; u2++) {
    for (i2 = 0, o2 = 0; o2 < c2; o2++)
      i2 += n2[u2][o2] * t2[o2];
    r2.push(i2);
  }
  return r2;
}
function a(n2) {
  const t2 = [n2.r / 255, n2.g / 255, n2.b / 255].map((n3) => n3 <= 0.04045 ? n3 / 12.92 : ((n3 + 0.055) / 1.055) ** 2.4), r2 = i(e, t2);
  return { x: 100 * r2[0], y: 100 * r2[1], z: 100 * r2[2] };
}
function h(n2) {
  const t2 = i(c, [n2.x / 100, n2.y / 100, n2.z / 100]).map((n3) => {
    const t3 = n3 <= 31308e-7 ? 12.92 * n3 : 1.055 * n3 ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(t3, 0));
  });
  return { r: Math.round(255 * t2[0]), g: Math.round(255 * t2[1]), b: Math.round(255 * t2[2]) };
}
function s(n2) {
  const t2 = [n2.x / 95.047, n2.y / 100, n2.z / 108.883].map((n3) => n3 > (6 / 29) ** 3 ? n3 ** (1 / 3) : 1 / 3 * (29 / 6) ** 2 * n3 + 4 / 29);
  return { l: 116 * t2[1] - 16, a: 500 * (t2[0] - t2[1]), b: 200 * (t2[1] - t2[2]) };
}
function f(n2) {
  const t2 = n2.l, r2 = [(t2 + 16) / 116 + n2.a / 500, (t2 + 16) / 116, (t2 + 16) / 116 - n2.b / 200].map((n3) => n3 > 6 / 29 ? n3 ** 3 : 3 * (6 / 29) ** 2 * (n3 - 4 / 29));
  return { x: 95.047 * r2[0], y: 100 * r2[1], z: 108.883 * r2[2] };
}
function b(n2) {
  const t2 = n2.l, r2 = n2.a, u2 = n2.b, o2 = Math.sqrt(r2 * r2 + u2 * u2);
  let e2 = Math.atan2(u2, r2);
  return e2 = e2 > 0 ? e2 : e2 + 2 * Math.PI, { l: t2, c: o2, h: e2 };
}
function l(n2) {
  const t2 = n2.l, r2 = n2.c, u2 = n2.h;
  return { l: t2, a: r2 * Math.cos(u2), b: r2 * Math.sin(u2) };
}
function g(n2) {
  return s(a(n2));
}
function M(n2) {
  return h(f(n2));
}
function m(n2) {
  return b(s(a(n2)));
}
function d(n2) {
  return h(f(l(n2)));
}
function x(n2) {
  const t2 = n2.r, r2 = n2.g, u2 = n2.b, o2 = Math.max(t2, r2, u2), e2 = o2 - Math.min(t2, r2, u2);
  let c2 = o2, i2 = e2 === 0 ? 0 : o2 === t2 ? (r2 - u2) / e2 % 6 : o2 === r2 ? (u2 - t2) / e2 + 2 : (t2 - r2) / e2 + 4, a2 = e2 === 0 ? 0 : e2 / c2;
  return i2 < 0 && (i2 += 6), i2 *= 60, a2 *= 100, c2 *= 100 / 255, { h: i2, s: a2, v: c2 };
}
function k(n2) {
  const t2 = (n2.h + 360) % 360 / 60, r2 = n2.s / 100, u2 = n2.v / 100 * 255, o2 = u2 * r2, e2 = o2 * (1 - Math.abs(t2 % 2 - 1));
  let c2;
  switch (Math.floor(t2)) {
    case 0:
      c2 = { r: o2, g: e2, b: 0 };
      break;
    case 1:
      c2 = { r: e2, g: o2, b: 0 };
      break;
    case 2:
      c2 = { r: 0, g: o2, b: e2 };
      break;
    case 3:
      c2 = { r: 0, g: e2, b: o2 };
      break;
    case 4:
      c2 = { r: e2, g: 0, b: o2 };
      break;
    case 5:
    case 6:
      c2 = { r: o2, g: 0, b: e2 };
      break;
    default:
      c2 = { r: 0, g: 0, b: 0 };
  }
  return c2.r = Math.round(c2.r + u2 - o2), c2.g = Math.round(c2.g + u2 - o2), c2.b = Math.round(c2.b + u2 - o2), c2;
}
function p(e2) {
  return n(e2) ? e2 : u(e2) ? d(e2) : r(e2) ? M(e2) : o(e2) ? h(e2) : t(e2) ? k(e2) : e2;
}
function y(n2) {
  if (t(n2))
    return n2;
  return x(p(n2));
}
function z(n2) {
  return r(n2) ? n2 : g(p(n2));
}
function v(n2) {
  return u(n2) ? n2 : m(p(n2));
}
export { p, v, y, z };
