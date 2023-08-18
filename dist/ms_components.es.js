import { defineComponent as $, openBlock as s, createElementBlock as c, normalizeClass as h, renderSlot as y, pushScopeId as I, popScopeId as b, createElementVNode as k } from "vue";
const g = /* @__PURE__ */ $({
  __name: "index",
  props: {
    type: {}
  },
  emits: ["click"],
  setup(e) {
    const t = e;
    return (_, n) => (s(), c("button", {
      class: h(["ms_button", t.type ?? "default"]),
      onClick: n[0] || (n[0] = (d) => _.$emit("click", d))
    }, [
      y(_.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const o = (e, t) => {
  const _ = e.__vccOpts || e;
  for (const [n, d] of t)
    _[n] = d;
  return _;
}, S = /* @__PURE__ */ o(g, [["__scopeId", "data-v-259698ee"]]), a = {
  install(e) {
    e.component("ms_button", S);
  }
};
const C = {}, B = { class: "ms_foo" };
function E(e, t) {
  return s(), c("div", B, " 我是foo组件 ");
}
const w = /* @__PURE__ */ o(C, [["render", E], ["__scopeId", "data-v-61d97fcf"]]), i = {
  install(e) {
    e.component("ms_foo", w);
  }
};
const z = {}, N = (e) => (I("data-v-cda4169e"), e = e(), b(), e), O = { class: "ms_input" }, V = /* @__PURE__ */ N(() => /* @__PURE__ */ k("input", { class: "ms_input__inner" }, null, -1)), j = [
  V
];
function q(e, t) {
  return s(), c("div", O, j);
}
const A = /* @__PURE__ */ o(z, [["render", q], ["__scopeId", "data-v-cda4169e"]]), l = {
  install(e) {
    e.component("ms_input", A);
  }
};
const D = {}, F = { class: "ms_checkbox" };
function G(e, t) {
  return s(), c("div", F, " 我是复选框组件 ");
}
const H = /* @__PURE__ */ o(D, [["render", G], ["__scopeId", "data-v-5992cecb"]]), r = {
  install(e) {
    e.component("ms_checkbox", H);
  }
};
const J = {}, K = { class: "ms_select" };
function L(e, t) {
  return s(), c("div", K, " 我是下拉框组件 ");
}
const M = /* @__PURE__ */ o(J, [["render", L], ["__scopeId", "data-v-ccb41562"]]), m = {
  install(e) {
    e.component("ms_select", M);
  }
};
const Q = {}, R = { class: "ms_tag" };
function T(e, t) {
  return s(), c("div", R, " 我是标签组件 ");
}
const U = /* @__PURE__ */ o(Q, [["render", T], ["__scopeId", "data-v-72275c08"]]), p = {
  install(e) {
    e.component("ms_tag", U);
  }
};
const W = {}, X = { class: "ms_tree" };
function Y(e, t) {
  return s(), c("div", X, " 我是树组件组件 ");
}
const Z = /* @__PURE__ */ o(W, [["render", Y], ["__scopeId", "data-v-e5f054ae"]]), u = {
  install(e) {
    e.component("ms_tree", Z);
  }
}, ee = {
  install(e) {
    var t, _, n, d, f, v, x;
    (t = a.install) == null || t.call(a, e), (_ = i.install) == null || _.call(i, e), (n = l.install) == null || n.call(l, e), (d = r.install) == null || d.call(r, e), (f = m.install) == null || f.call(m, e), (v = p.install) == null || v.call(p, e), (x = u.install) == null || x.call(u, e);
  }
};
export {
  S as Button,
  a as ButtonPlugin,
  H as Checkbox,
  r as CheckboxPlugin,
  w as Foo,
  i as FooPlugin,
  A as Input,
  l as InputPlugin,
  M as Select,
  m as SelectPlugin,
  U as Tag,
  p as TagPlugin,
  Z as Tree,
  u as TreePlugin,
  ee as default
};
