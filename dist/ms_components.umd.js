(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.ms_components={},t.Vue))})(this,function(t,n){"use strict";const I=n.defineComponent({__name:"index",props:{type:{}},emits:["click"],setup(e){const c=e;return(_,s)=>(n.openBlock(),n.createElementBlock("button",{class:n.normalizeClass(["ms_button",c.type??"default"]),onClick:s[0]||(s[0]=l=>_.$emit("click",l))},[n.renderSlot(_.$slots,"default",{},void 0,!0)],2))}}),Q="",o=(e,c)=>{const _=e.__vccOpts||e;for(const[s,l]of c)_[s]=l;return _},p=o(I,[["__scopeId","data-v-259698ee"]]),d={install(e){e.component("ms_button",p)}},R="",E={},S={class:"ms_foo"};function T(e,c){return n.openBlock(),n.createElementBlock("div",S," 我是foo组件 ")}const h=o(E,[["render",T],["__scopeId","data-v-61d97fcf"]]),i={install(e){e.component("ms_foo",h)}},U="",C={},j=e=>(n.pushScopeId("data-v-cda4169e"),e=e(),n.popScopeId(),e),F={class:"ms_input"},M=[j(()=>n.createElementVNode("input",{class:"ms_input__inner"},null,-1))];function O(e,c){return n.openBlock(),n.createElementBlock("div",F,M)}const k=o(C,[["render",O],["__scopeId","data-v-cda4169e"]]),a={install(e){e.component("ms_input",k)}},X="",P={},V={class:"ms_checkbox"};function q(e,c){return n.openBlock(),n.createElementBlock("div",V," 我是复选框组件 ")}const y=o(P,[["render",q],["__scopeId","data-v-5992cecb"]]),r={install(e){e.component("ms_checkbox",y)}},Y="",w={},z={class:"ms_select"};function N(e,c){return n.openBlock(),n.createElementBlock("div",z," 我是下拉框组件 ")}const $=o(w,[["render",N],["__scopeId","data-v-ccb41562"]]),m={install(e){e.component("ms_select",$)}},Z="",A={},D={class:"ms_tag"};function G(e,c){return n.openBlock(),n.createElementBlock("div",D," 我是标签组件 ")}const v=o(A,[["render",G],["__scopeId","data-v-72275c08"]]),f={install(e){e.component("ms_tag",v)}},ee="",H={},J={class:"ms_tree"};function K(e,c){return n.openBlock(),n.createElementBlock("div",J," 我是树组件组件 ")}const B=o(H,[["render",K],["__scopeId","data-v-e5f054ae"]]),u={install(e){e.component("ms_tree",B)}},L={install(e){var c,_,s,l,g,b,x;(c=d.install)==null||c.call(d,e),(_=i.install)==null||_.call(i,e),(s=a.install)==null||s.call(a,e),(l=r.install)==null||l.call(r,e),(g=m.install)==null||g.call(m,e),(b=f.install)==null||b.call(f,e),(x=u.install)==null||x.call(u,e)}};t.Button=p,t.ButtonPlugin=d,t.Checkbox=y,t.CheckboxPlugin=r,t.Foo=h,t.FooPlugin=i,t.Input=k,t.InputPlugin=a,t.Select=$,t.SelectPlugin=m,t.Tag=v,t.TagPlugin=f,t.Tree=B,t.TreePlugin=u,t.default=L,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
