import {s as Ee, r as Be, u as oe, v as ae, w as se, h as $, d as m, j as d, x as ue, y as ee, i as N, z as h, A as Fe, B as Ve, C as Ne, D as ce, E as Se, a4 as dt, a5 as Ze, f as g, l as U, a as j, e as ge, g as b, m as H, c as q, H as ie, J as je, a1 as ht, o as _t, L as mt, F as Le, P as qe, G as pt, a6 as pe, a7 as vt, Q as Ke, I as Ue, K as Te, _ as He, n as re, M as ve, N as Oe, $ as ye} from "./scheduler.f440829a.js";
import {h as Qe, u as gt} from "./LicenseSelector.1a7ea370.js";
import {e as $e} from "./each.27ca486b.js";
import {S as Ce, i as Me, a as M, t as S, b as de, d as he, m as _e, g as be, c as we, e as me, j as bt, h as We, k as wt} from "./index.2c544bcc.js";
import {g as De} from "./spread.84d39b6c.js";
import {l as ze, f as Ie} from "./stores.226dc1e3.js";
function kt(l) {
    let e, r, a;
    const s = l[2].default
      , o = Be(s, l, l[1], null);
    let u = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: "16"
    }, {
        height: "16"
    }, {
        fill: "currentColor"
    }, {
        viewBox: "0 0 16 16"
    }, l[0]]
      , i = {};
    for (let t = 0; t < u.length; t += 1)
        i = oe(i, u[t]);
    return {
        c() {
            e = ae("svg"),
            o && o.c(),
            r = ae("path"),
            this.h()
        },
        l(t) {
            e = se(t, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0
            });
            var n = $(e);
            o && o.l(n),
            r = se(n, "path", {
                d: !0
            }),
            $(r).forEach(m),
            n.forEach(m),
            this.h()
        },
        h() {
            d(r, "d", "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"),
            ue(e, i),
            ee(e, "bi", !0),
            ee(e, "bi-cursor", !0)
        },
        m(t, n) {
            N(t, e, n),
            o && o.m(e, null),
            h(e, r),
            a = !0
        },
        p(t, [n]) {
            o && o.p && (!a || n & 2) && Fe(o, s, t, t[1], a ? Ne(s, t[1], n, null) : Ve(t[1]), null),
            ue(e, i = De(u, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "16"
            }, {
                height: "16"
            }, {
                fill: "currentColor"
            }, {
                viewBox: "0 0 16 16"
            }, n & 1 && t[0]])),
            ee(e, "bi", !0),
            ee(e, "bi-cursor", !0)
        },
        i(t) {
            a || (M(o, t),
            a = !0)
        },
        o(t) {
            S(o, t),
            a = !1
        },
        d(t) {
            t && m(e),
            o && o.d(t)
        }
    }
}
function yt(l, e, r) {
    const a = [];
    let s = ce(e, a)
      , {$$slots: o={}, $$scope: u} = e;
    return l.$$set = i=>{
        e = oe(oe({}, e), Se(i)),
        r(0, s = ce(e, a)),
        "$$scope"in i && r(1, u = i.$$scope)
    }
    ,
    [s, u, o]
}
class $t extends Ce {
    constructor(e) {
        super(),
        Me(this, e, yt, kt, Ee, {})
    }
}
function Et(l) {
    let e, r, a;
    const s = l[2].default
      , o = Be(s, l, l[1], null);
    let u = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: "16"
    }, {
        height: "16"
    }, {
        fill: "currentColor"
    }, {
        viewBox: "0 0 16 16"
    }, l[0]]
      , i = {};
    for (let t = 0; t < u.length; t += 1)
        i = oe(i, u[t]);
    return {
        c() {
            e = ae("svg"),
            o && o.c(),
            r = ae("path"),
            this.h()
        },
        l(t) {
            e = se(t, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0
            });
            var n = $(e);
            o && o.l(n),
            r = se(n, "path", {
                "fill-rule": !0,
                d: !0
            }),
            $(r).forEach(m),
            n.forEach(m),
            this.h()
        },
        h() {
            d(r, "fill-rule", "evenodd"),
            d(r, "d", "M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"),
            ue(e, i),
            ee(e, "bi", !0),
            ee(e, "bi-map", !0)
        },
        m(t, n) {
            N(t, e, n),
            o && o.m(e, null),
            h(e, r),
            a = !0
        },
        p(t, [n]) {
            o && o.p && (!a || n & 2) && Fe(o, s, t, t[1], a ? Ne(s, t[1], n, null) : Ve(t[1]), null),
            ue(e, i = De(u, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "16"
            }, {
                height: "16"
            }, {
                fill: "currentColor"
            }, {
                viewBox: "0 0 16 16"
            }, n & 1 && t[0]])),
            ee(e, "bi", !0),
            ee(e, "bi-map", !0)
        },
        i(t) {
            a || (M(o, t),
            a = !0)
        },
        o(t) {
            S(o, t),
            a = !1
        },
        d(t) {
            t && m(e),
            o && o.d(t)
        }
    }
}
function Lt(l, e, r) {
    const a = [];
    let s = ce(e, a)
      , {$$slots: o={}, $$scope: u} = e;
    return l.$$set = i=>{
        e = oe(oe({}, e), Se(i)),
        r(0, s = ce(e, a)),
        "$$scope"in i && r(1, u = i.$$scope)
    }
    ,
    [s, u, o]
}
let Pe = class extends Ce {
    constructor(e) {
        super(),
        Me(this, e, Lt, Et, Ee, {})
    }
}
;
function Ct(l) {
    let e, r, a;
    const s = l[2].default
      , o = Be(s, l, l[1], null);
    let u = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: "16"
    }, {
        height: "16"
    }, {
        fill: "currentColor"
    }, {
        viewBox: "0 0 16 16"
    }, l[0]]
      , i = {};
    for (let t = 0; t < u.length; t += 1)
        i = oe(i, u[t]);
    return {
        c() {
            e = ae("svg"),
            o && o.c(),
            r = ae("path"),
            this.h()
        },
        l(t) {
            e = se(t, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0
            });
            var n = $(e);
            o && o.l(n),
            r = se(n, "path", {
                d: !0
            }),
            $(r).forEach(m),
            n.forEach(m),
            this.h()
        },
        h() {
            d(r, "d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"),
            ue(e, i),
            ee(e, "bi", !0),
            ee(e, "bi-search", !0)
        },
        m(t, n) {
            N(t, e, n),
            o && o.m(e, null),
            h(e, r),
            a = !0
        },
        p(t, [n]) {
            o && o.p && (!a || n & 2) && Fe(o, s, t, t[1], a ? Ne(s, t[1], n, null) : Ve(t[1]), null),
            ue(e, i = De(u, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "16"
            }, {
                height: "16"
            }, {
                fill: "currentColor"
            }, {
                viewBox: "0 0 16 16"
            }, n & 1 && t[0]])),
            ee(e, "bi", !0),
            ee(e, "bi-search", !0)
        },
        i(t) {
            a || (M(o, t),
            a = !0)
        },
        o(t) {
            S(o, t),
            a = !1
        },
        d(t) {
            t && m(e),
            o && o.d(t)
        }
    }
}
function Mt(l, e, r) {
    const a = [];
    let s = ce(e, a)
      , {$$slots: o={}, $$scope: u} = e;
    return l.$$set = i=>{
        e = oe(oe({}, e), Se(i)),
        r(0, s = ce(e, a)),
        "$$scope"in i && r(1, u = i.$$scope)
    }
    ,
    [s, u, o]
}
class Tt extends Ce {
    constructor(e) {
        super(),
        Me(this, e, Mt, Ct, Ee, {})
    }
}
function Bt(l) {
    let e, r, a;
    const s = l[2].default
      , o = Be(s, l, l[1], null);
    let u = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: "16"
    }, {
        height: "16"
    }, {
        fill: "currentColor"
    }, {
        viewBox: "0 0 16 16"
    }, l[0]]
      , i = {};
    for (let t = 0; t < u.length; t += 1)
        i = oe(i, u[t]);
    return {
        c() {
            e = ae("svg"),
            o && o.c(),
            r = ae("path"),
            this.h()
        },
        l(t) {
            e = se(t, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0
            });
            var n = $(e);
            o && o.l(n),
            r = se(n, "path", {
                d: !0
            }),
            $(r).forEach(m),
            n.forEach(m),
            this.h()
        },
        h() {
            d(r, "d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"),
            ue(e, i),
            ee(e, "bi", !0),
            ee(e, "bi-star", !0)
        },
        m(t, n) {
            N(t, e, n),
            o && o.m(e, null),
            h(e, r),
            a = !0
        },
        p(t, [n]) {
            o && o.p && (!a || n & 2) && Fe(o, s, t, t[1], a ? Ne(s, t[1], n, null) : Ve(t[1]), null),
            ue(e, i = De(u, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "16"
            }, {
                height: "16"
            }, {
                fill: "currentColor"
            }, {
                viewBox: "0 0 16 16"
            }, n & 1 && t[0]])),
            ee(e, "bi", !0),
            ee(e, "bi-star", !0)
        },
        i(t) {
            a || (M(o, t),
            a = !0)
        },
        o(t) {
            S(o, t),
            a = !1
        },
        d(t) {
            t && m(e),
            o && o.d(t)
        }
    }
}
function Ft(l, e, r) {
    const a = [];
    let s = ce(e, a)
      , {$$slots: o={}, $$scope: u} = e;
    return l.$$set = i=>{
        e = oe(oe({}, e), Se(i)),
        r(0, s = ce(e, a)),
        "$$scope"in i && r(1, u = i.$$scope)
    }
    ,
    [s, u, o]
}
class ut extends Ce {
    constructor(e) {
        super(),
        Me(this, e, Ft, Bt, Ee, {})
    }
}
function Vt(l) {
    let e, r, a, s;
    const o = l[2].default
      , u = Be(o, l, l[1], null);
    let i = [{
        xmlns: "http://www.w3.org/2000/svg"
    }, {
        width: "16"
    }, {
        height: "16"
    }, {
        fill: "currentColor"
    }, {
        viewBox: "0 0 16 16"
    }, l[0]]
      , t = {};
    for (let n = 0; n < i.length; n += 1)
        t = oe(t, i[n]);
    return {
        c() {
            e = ae("svg"),
            u && u.c(),
            r = ae("path"),
            a = ae("path"),
            this.h()
        },
        l(n) {
            e = se(n, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0
            });
            var f = $(e);
            u && u.l(f),
            r = se(f, "path", {
                d: !0
            }),
            $(r).forEach(m),
            a = se(f, "path", {
                d: !0
            }),
            $(a).forEach(m),
            f.forEach(m),
            this.h()
        },
        h() {
            d(r, "d", "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"),
            d(a, "d", "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"),
            ue(e, t),
            ee(e, "bi", !0),
            ee(e, "bi-trash", !0)
        },
        m(n, f) {
            N(n, e, f),
            u && u.m(e, null),
            h(e, r),
            h(e, a),
            s = !0
        },
        p(n, [f]) {
            u && u.p && (!s || f & 2) && Fe(u, o, n, n[1], s ? Ne(o, n[1], f, null) : Ve(n[1]), null),
            ue(e, t = De(i, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "16"
            }, {
                height: "16"
            }, {
                fill: "currentColor"
            }, {
                viewBox: "0 0 16 16"
            }, f & 1 && n[0]])),
            ee(e, "bi", !0),
            ee(e, "bi-trash", !0)
        },
        i(n) {
            s || (M(u, n),
            s = !0)
        },
        o(n) {
            S(u, n),
            s = !1
        },
        d(n) {
            n && m(e),
            u && u.d(n)
        }
    }
}
function Nt(l, e, r) {
    const a = [];
    let s = ce(e, a)
      , {$$slots: o={}, $$scope: u} = e;
    return l.$$set = i=>{
        e = oe(oe({}, e), Se(i)),
        r(0, s = ce(e, a)),
        "$$scope"in i && r(1, u = i.$$scope)
    }
    ,
    [s, u, o]
}
class ct extends Ce {
    constructor(e) {
        super(),
        Me(this, e, Nt, Vt, Ee, {})
    }
}
function ft(l) {
    const e = l - 1;
    return e * e * e + 1
}
function St(l) {
    return --l * l * l * l * l + 1
}
function Ye(l, {delay: e=0, duration: r=400, easing: a=dt}={}) {
    const s = +getComputedStyle(l).opacity;
    return {
        delay: e,
        duration: r,
        easing: a,
        css: o=>`opacity: ${o * s}`
    }
}
function Je(l, {delay: e=0, duration: r=400, easing: a=ft, x: s=0, y: o=0, opacity: u=0}={}) {
    const i = getComputedStyle(l)
      , t = +i.opacity
      , n = i.transform === "none" ? "" : i.transform
      , f = t * (1 - u)
      , [c,v] = Ze(s)
      , [O,D] = Ze(o);
    return {
        delay: e,
        duration: r,
        easing: a,
        css: (B,R)=>`
			transform: ${n} translate(${(1 - B) * c}${v}, ${(1 - B) * O}${D});
			opacity: ${t - f * R}`
    }
}
function Jt(l, {delay: e=0, duration: r=400, easing: a=ft, axis: s="y"}={}) {
    const o = getComputedStyle(l)
      , u = +o.opacity
      , i = s === "y" ? "height" : "width"
      , t = parseFloat(o[i])
      , n = s === "y" ? ["top", "bottom"] : ["left", "right"]
      , f = n.map(I=>`${I[0].toUpperCase()}${I.slice(1)}`)
      , c = parseFloat(o[`padding ${f[0]}`])
      , v = parseFloat(o[`padding ${f[1]}`])
      , O = parseFloat(o[`margin ${f[0]}`])
      , D = parseFloat(o[`margin ${f[1]}`])
      , B = parseFloat(o[`border ${f[0]}Width`])
      , R = parseFloat(o[`border ${f[1]}Width`]);
    return {
        delay: e,
        duration: r,
        easing: a,
        css: I=>`overflow: hidden;opacity: ${Math.min(I * 20, 1) * u};${i}: ${I * t}px;padding-${n[0]}: ${I * c}px;padding-${n[1]}: ${I * v}px;margin-${n[0]}: ${I * O}px;margin-${n[1]}: ${I * D}px;border-${n[0]}-width: ${I * B}px;border-${n[1]}-width: ${I * R}px;`
    }
}
function Xe(l, e, r) {
    const a = l.slice();
    return a[28] = e[r],
    a
}
function xe(l, e, r) {
    const a = l.slice();
    return a[28] = e[r],
    a
}
function et(l, e, r) {
    const a = l.slice();
    return a[28] = e[r],
    a
}
function tt(l) {
    let e, r, a, s, o, u = '<span class="lead">Search Locations</span>', i, t, n, f, c, v, O, D, B, R, I, P, X, te, A, Y, K, J, F;
    B = new $t({});
    let y = {
        ctx: l,
        current: null,
        token: null,
        hasCatch: !0,
        pending: Pt,
        then: It,
        catch: Dt,
        value: 4,
        error: 35,
        blocks: [, , , ]
    };
    return Qe(I = l[4], y),
    {
        c() {
            e = g("div"),
            r = g("div"),
            a = g("div"),
            s = g("div"),
            o = g("label"),
            o.innerHTML = u,
            i = j(),
            t = g("button"),
            n = j(),
            f = g("div"),
            c = g("div"),
            v = g("input"),
            O = j(),
            D = g("button"),
            de(B.$$.fragment),
            R = j(),
            y.block.c(),
            te = j(),
            A = g("div"),
            this.h()
        },
        l(p) {
            e = b(p, "DIV", {
                class: !0,
                id: !0,
                tabindex: !0,
                role: !0,
                "aria-labelledby": !0,
                "aria-hidden": !0
            });
            var V = $(e);
            r = b(V, "DIV", {
                class: !0,
                role: !0
            });
            var T = $(r);
            a = b(T, "DIV", {
                class: !0
            });
            var Z = $(a);
            s = b(Z, "DIV", {
                class: !0
            });
            var _ = $(s);
            o = b(_, "LABEL", {
                for: !0,
                id: !0,
                ["data-svelte-h"]: !0
            }),
            Le(o) !== "svelte-cm9al" && (o.innerHTML = u),
            i = q(_),
            t = b(_, "BUTTON", {
                type: !0,
                class: !0,
                "aria-label": !0,
                title: !0
            }),
            $(t).forEach(m),
            _.forEach(m),
            n = q(Z),
            f = b(Z, "DIV", {
                class: !0
            });
            var E = $(f);
            c = b(E, "DIV", {
                class: !0
            });
            var w = $(c);
            v = b(w, "INPUT", {
                type: !0,
                class: !0,
                id: !0,
                autocomplete: !0,
                spellcheck: !0,
                "aria-label": !0
            }),
            O = q(w),
            D = b(w, "BUTTON", {
                tabindex: !0,
                class: !0,
                type: !0,
                title: !0
            });
            var L = $(D);
            he(B.$$.fragment, L),
            L.forEach(m),
            w.forEach(m),
            R = q(E),
            y.block.l(E),
            E.forEach(m),
            Z.forEach(m),
            T.forEach(m),
            V.forEach(m),
            te = q(p),
            A = b(p, "DIV", {
                class: !0
            }),
            $(A).forEach(m),
            this.h()
        },
        h() {
            d(o, "for", "location_search"),
            d(o, "id", "locationSearchModalLabel"),
            d(t, "type", "button"),
            d(t, "class", "btn-close"),
            d(t, "aria-label", "Close"),
            d(t, "title", "Close"),
            d(s, "class", "modal-header no-border"),
            d(v, "type", "search"),
            d(v, "class", "form-control"),
            d(v, "id", "location_search"),
            d(v, "autocomplete", "off"),
            d(v, "spellcheck", "false"),
            d(v, "aria-label", "Search Location"),
            d(D, "tabindex", "-1"),
            d(D, "class", "btn btn-outline-secondary"),
            d(D, "type", "button"),
            d(D, "title", "Detect Location via GPS"),
            d(c, "class", "input-group"),
            d(f, "class", "modal-body"),
            d(a, "class", "modal-content"),
            d(r, "class", "modal-dialog"),
            d(r, "role", "document"),
            d(e, "class", "modal d-block show"),
            d(e, "id", "locationSearchModal"),
            d(e, "tabindex", "-1"),
            d(e, "role", "dialog"),
            d(e, "aria-labelledby", "locationSearchModalLabel"),
            d(e, "aria-hidden", !1),
            d(A, "class", "modal-backdrop show")
        },
        m(p, V) {
            N(p, e, V),
            h(e, r),
            h(r, a),
            h(a, s),
            h(s, o),
            h(s, i),
            h(s, t),
            h(a, n),
            h(a, f),
            h(f, c),
            h(c, v),
            qe(v, l[0]),
            h(c, O),
            h(c, D),
            _e(B, D, null),
            h(f, R),
            y.block.m(f, y.anchor = null),
            y.mount = ()=>f,
            y.anchor = null,
            N(p, te, V),
            N(p, A, V),
            K = !0,
            J || (F = [ie(t, "click", l[6]), pt(Gt.call(null, v)), ie(v, "input", l[15]), ie(D, "click", pe(l[16])), ie(e, "click", vt(l[6]))],
            J = !0)
        },
        p(p, V) {
            l = p,
            V[0] & 1 && v.value !== l[0] && qe(v, l[0]),
            y.ctx = l,
            V[0] & 16 && I !== (I = l[4]) && Qe(I, y) || gt(y, l, V)
        },
        i(p) {
            K || (M(B.$$.fragment, p),
            M(y.block),
            Ke(()=>{
                K && (X && X.end(1),
                P = bt(r, Je, {
                    y: -50,
                    duration: 300
                }),
                P.start())
            }
            ),
            Ke(()=>{
                K && (Y || (Y = We(A, Ye, {
                    duration: 300
                }, !0)),
                Y.run(1))
            }
            ),
            K = !0)
        },
        o(p) {
            S(B.$$.fragment, p);
            for (let V = 0; V < 3; V += 1) {
                const T = y.blocks[V];
                S(T)
            }
            P && P.invalidate(),
            X = wt(r, Je, {
                y: -50,
                duration: 300,
                easing: St
            }),
            Y || (Y = We(A, Ye, {
                duration: 300
            }, !1)),
            Y.run(0),
            K = !1
        },
        d(p) {
            p && (m(e),
            m(te),
            m(A)),
            me(B),
            y.block.d(),
            y.token = null,
            y = null,
            p && X && X.end(),
            p && Y && Y.end(),
            J = !1,
            Ue(F)
        }
    }
}
function Dt(l) {
    let e, r, a = l[35].message + "", s;
    return {
        c() {
            e = g("div"),
            r = g("div"),
            s = U(a),
            this.h()
        },
        l(o) {
            e = b(o, "DIV", {
                class: !0
            });
            var u = $(e);
            r = b(u, "DIV", {
                class: !0,
                role: !0
            });
            var i = $(r);
            s = H(i, a),
            i.forEach(m),
            u.forEach(m),
            this.h()
        },
        h() {
            d(r, "class", "alert alert-danger"),
            d(r, "role", "alert"),
            d(e, "class", "mt-4")
        },
        m(o, u) {
            N(o, e, u),
            h(e, r),
            h(r, s)
        },
        p(o, u) {
            u[0] & 16 && a !== (a = o[35].message + "") && re(s, a)
        },
        i: ve,
        o: ve,
        d(o) {
            o && m(e)
        }
    }
}
function It(l) {
    let e, r, a, s;
    const o = [Ht, Ut]
      , u = [];
    function i(t, n) {
        return t[4].results && t[4].results.length == 0 ? 0 : 1
    }
    return e = i(l),
    r = u[e] = o[e](l),
    {
        c() {
            r.c(),
            a = ge()
        },
        l(t) {
            r.l(t),
            a = ge()
        },
        m(t, n) {
            u[e].m(t, n),
            N(t, a, n),
            s = !0
        },
        p(t, n) {
            let f = e;
            e = i(t),
            e === f ? u[e].p(t, n) : (be(),
            S(u[f], 1, 1, ()=>{
                u[f] = null
            }
            ),
            we(),
            r = u[e],
            r ? r.p(t, n) : (r = u[e] = o[e](t),
            r.c()),
            M(r, 1),
            r.m(a.parentNode, a))
        },
        i(t) {
            s || (M(r),
            s = !0)
        },
        o(t) {
            S(r),
            s = !1
        },
        d(t) {
            t && m(a),
            u[e].d(t)
        }
    }
}
function Ut(l) {
    let e, r, a = $e(l[4].results || []), s = [];
    for (let u = 0; u < a.length; u += 1)
        s[u] = nt(Xe(l, a, u));
    const o = u=>S(s[u], 1, 1, ()=>{
        s[u] = null
    }
    );
    return {
        c() {
            e = g("div");
            for (let u = 0; u < s.length; u += 1)
                s[u].c();
            this.h()
        },
        l(u) {
            e = b(u, "DIV", {
                class: !0
            });
            var i = $(e);
            for (let t = 0; t < s.length; t += 1)
                s[t].l(i);
            i.forEach(m),
            this.h()
        },
        h() {
            d(e, "class", "list-group mt-4")
        },
        m(u, i) {
            N(u, e, i);
            for (let t = 0; t < s.length; t += 1)
                s[t] && s[t].m(e, null);
            r = !0
        },
        p(u, i) {
            if (i[0] & 1552) {
                a = $e(u[4].results || []);
                let t;
                for (t = 0; t < a.length; t += 1) {
                    const n = Xe(u, a, t);
                    s[t] ? (s[t].p(n, i),
                    M(s[t], 1)) : (s[t] = nt(n),
                    s[t].c(),
                    M(s[t], 1),
                    s[t].m(e, null))
                }
                for (be(),
                t = a.length; t < s.length; t += 1)
                    o(t);
                we()
            }
        },
        i(u) {
            if (!r) {
                for (let i = 0; i < a.length; i += 1)
                    M(s[i]);
                r = !0
            }
        },
        o(u) {
            s = s.filter(Boolean);
            for (let i = 0; i < s.length; i += 1)
                S(s[i]);
            r = !1
        },
        d(u) {
            u && m(e),
            Oe(s, u)
        }
    }
}
function Ht(l) {
    let e, r, a, s;
    const o = [Ot, zt]
      , u = [];
    function i(t, n) {
        return t[0].length < 2 ? 0 : 1
    }
    return e = i(l),
    r = u[e] = o[e](l),
    {
        c() {
            r.c(),
            a = ge()
        },
        l(t) {
            r.l(t),
            a = ge()
        },
        m(t, n) {
            u[e].m(t, n),
            N(t, a, n),
            s = !0
        },
        p(t, n) {
            let f = e;
            e = i(t),
            e === f ? u[e].p(t, n) : (be(),
            S(u[f], 1, 1, ()=>{
                u[f] = null
            }
            ),
            we(),
            r = u[e],
            r ? r.p(t, n) : (r = u[e] = o[e](t),
            r.c()),
            M(r, 1),
            r.m(a.parentNode, a))
        },
        i(t) {
            s || (M(r),
            s = !0)
        },
        o(t) {
            S(r),
            s = !1
        },
        d(t) {
            t && m(a),
            u[e].d(t)
        }
    }
}
function lt(l) {
    let e = l[28].elevation.toFixed(0) + "", r, a;
    return {
        c() {
            r = U(e),
            a = U("m asl")
        },
        l(s) {
            r = H(s, e),
            a = H(s, "m asl")
        },
        m(s, o) {
            N(s, r, o),
            N(s, a, o)
        },
        p(s, o) {
            o[0] & 16 && e !== (e = s[28].elevation.toFixed(0) + "") && re(r, e)
        },
        d(s) {
            s && (m(r),
            m(a))
        }
    }
}
function nt(l) {
    let e, r, a, s, o, u, i = l[28].name + "", t, n, f, c, v = (l[28].admin1 || "") + "", O, D, B = l[28].latitude.toFixed(2) + "", R, I, P = l[28].longitude.toFixed(2) + "", X, te, A, Y, K, J, F, y, p, V, T, Z, _, E, w, L = l[28].elevation && lt(l);
    F = new ut({});
    function ne() {
        return l[22](l[28])
    }
    V = new Pe({});
    function G() {
        return l[23](l[28])
    }
    return {
        c() {
            e = g("button"),
            r = g("img"),
            u = j(),
            t = U(i),
            n = g("br"),
            f = j(),
            c = g("small"),
            O = U(v),
            D = U(" ("),
            R = U(B),
            I = U("°E "),
            X = U(P),
            te = U("°N"),
            L && L.c(),
            A = U(")"),
            Y = j(),
            K = g("div"),
            J = g("button"),
            de(F.$$.fragment),
            y = j(),
            p = g("a"),
            de(V.$$.fragment),
            Z = j(),
            this.h()
        },
        l(z) {
            e = b(z, "BUTTON", {
                class: !0,
                type: !0
            });
            var k = $(e);
            r = b(k, "IMG", {
                height: !0,
                src: !0,
                title: !0,
                alt: !0
            }),
            u = q(k),
            t = H(k, i),
            n = b(k, "BR", {}),
            f = q(k),
            c = b(k, "SMALL", {
                class: !0
            });
            var C = $(c);
            O = H(C, v),
            D = H(C, " ("),
            R = H(C, B),
            I = H(C, "°E "),
            X = H(C, P),
            te = H(C, "°N"),
            L && L.l(C),
            A = H(C, ")"),
            C.forEach(m),
            Y = q(k),
            K = b(k, "DIV", {
                class: !0
            });
            var x = $(K);
            J = b(x, "BUTTON", {
                class: !0,
                type: !0,
                tabindex: !0,
                title: !0
            });
            var le = $(J);
            he(F.$$.fragment, le),
            le.forEach(m),
            y = q(x),
            p = b(x, "A", {
                class: !0,
                href: !0,
                target: !0,
                tabindex: !0,
                title: !0
            });
            var Q = $(p);
            he(V.$$.fragment, Q),
            Q.forEach(m),
            x.forEach(m),
            Z = q(k),
            k.forEach(m),
            this.h()
        },
        h() {
            d(r, "height", "24"),
            ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg") || d(r, "src", a),
            d(r, "title", s = l[28].country),
            d(r, "alt", o = l[28].country_code),
            d(c, "class", "text-muted"),
            d(J, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(J, "type", "button"),
            d(J, "tabindex", "-1"),
            d(J, "title", "Save"),
            d(p, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(p, "href", T = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude),
            d(p, "target", "_blank"),
            d(p, "tabindex", "-1"),
            d(p, "title", "Show on map"),
            d(K, "class", "position-absolute top-0 end-0 p-2"),
            d(e, "class", "list-group-item list-group-item-action position-relative"),
            d(e, "type", "button")
        },
        m(z, k) {
            N(z, e, k),
            h(e, r),
            h(e, u),
            h(e, t),
            h(e, n),
            h(e, f),
            h(e, c),
            h(c, O),
            h(c, D),
            h(c, R),
            h(c, I),
            h(c, X),
            h(c, te),
            L && L.m(c, null),
            h(c, A),
            h(e, Y),
            h(e, K),
            h(K, J),
            _e(F, J, null),
            h(K, y),
            h(K, p),
            _e(V, p, null),
            h(e, Z),
            _ = !0,
            E || (w = [ie(J, "click", pe(ne)), ie(p, "click", pe(l[14])), ie(e, "click", G)],
            E = !0)
        },
        p(z, k) {
            l = z,
            (!_ || k[0] & 16 && !ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg")) && d(r, "src", a),
            (!_ || k[0] & 16 && s !== (s = l[28].country)) && d(r, "title", s),
            (!_ || k[0] & 16 && o !== (o = l[28].country_code)) && d(r, "alt", o),
            (!_ || k[0] & 16) && i !== (i = l[28].name + "") && re(t, i),
            (!_ || k[0] & 16) && v !== (v = (l[28].admin1 || "") + "") && re(O, v),
            (!_ || k[0] & 16) && B !== (B = l[28].latitude.toFixed(2) + "") && re(R, B),
            (!_ || k[0] & 16) && P !== (P = l[28].longitude.toFixed(2) + "") && re(X, P),
            l[28].elevation ? L ? L.p(l, k) : (L = lt(l),
            L.c(),
            L.m(c, A)) : L && (L.d(1),
            L = null),
            (!_ || k[0] & 16 && T !== (T = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude)) && d(p, "href", T)
        },
        i(z) {
            _ || (M(F.$$.fragment, z),
            M(V.$$.fragment, z),
            _ = !0)
        },
        o(z) {
            S(F.$$.fragment, z),
            S(V.$$.fragment, z),
            _ = !1
        },
        d(z) {
            z && m(e),
            L && L.d(),
            me(F),
            me(V),
            E = !1,
            Ue(w)
        }
    }
}
function zt(l) {
    let e, r = '<li class="list-group-item"><span>No locations found</span></li>';
    return {
        c() {
            e = g("div"),
            e.innerHTML = r,
            this.h()
        },
        l(a) {
            e = b(a, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            Le(e) !== "svelte-3s2e30" && (e.innerHTML = r),
            this.h()
        },
        h() {
            d(e, "class", "list-group mt-4")
        },
        m(a, s) {
            N(a, e, s)
        },
        p: ve,
        i: ve,
        o: ve,
        d(a) {
            a && m(e)
        }
    }
}
function Ot(l) {
    let e, r, a, s, o = l[2].length == 0 && l[3].length == 0 && rt(), u = l[3].length > 0 && it(l), i = l[2].length > 0 && at(l);
    return {
        c() {
            o && o.c(),
            e = j(),
            u && u.c(),
            r = j(),
            i && i.c(),
            a = ge()
        },
        l(t) {
            o && o.l(t),
            e = q(t),
            u && u.l(t),
            r = q(t),
            i && i.l(t),
            a = ge()
        },
        m(t, n) {
            o && o.m(t, n),
            N(t, e, n),
            u && u.m(t, n),
            N(t, r, n),
            i && i.m(t, n),
            N(t, a, n),
            s = !0
        },
        p(t, n) {
            t[2].length == 0 && t[3].length == 0 ? o || (o = rt(),
            o.c(),
            o.m(e.parentNode, e)) : o && (o.d(1),
            o = null),
            t[3].length > 0 ? u ? (u.p(t, n),
            n[0] & 8 && M(u, 1)) : (u = it(t),
            u.c(),
            M(u, 1),
            u.m(r.parentNode, r)) : u && (be(),
            S(u, 1, 1, ()=>{
                u = null
            }
            ),
            we()),
            t[2].length > 0 ? i ? (i.p(t, n),
            n[0] & 4 && M(i, 1)) : (i = at(t),
            i.c(),
            M(i, 1),
            i.m(a.parentNode, a)) : i && (be(),
            S(i, 1, 1, ()=>{
                i = null
            }
            ),
            we())
        },
        i(t) {
            s || (M(u),
            M(i),
            s = !0)
        },
        o(t) {
            S(u),
            S(i),
            s = !1
        },
        d(t) {
            t && (m(e),
            m(r),
            m(a)),
            o && o.d(t),
            u && u.d(t),
            i && i.d(t)
        }
    }
}
function rt(l) {
    let e, r = '<li class="list-group-item"><span>Start typing to search for locations</span></li>';
    return {
        c() {
            e = g("div"),
            e.innerHTML = r,
            this.h()
        },
        l(a) {
            e = b(a, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            Le(e) !== "svelte-cw0lo3" && (e.innerHTML = r),
            this.h()
        },
        h() {
            d(e, "class", "list-group mt-4")
        },
        m(a, s) {
            N(a, e, s)
        },
        d(a) {
            a && m(e)
        }
    }
}
function it(l) {
    let e, r = "Favorites", a, s, o, u = $e(l[3]), i = [];
    for (let n = 0; n < u.length; n += 1)
        i[n] = ot(et(l, u, n));
    const t = n=>S(i[n], 1, 1, ()=>{
        i[n] = null
    }
    );
    return {
        c() {
            e = g("h6"),
            e.textContent = r,
            a = j(),
            s = g("div");
            for (let n = 0; n < i.length; n += 1)
                i[n].c();
            this.h()
        },
        l(n) {
            e = b(n, "H6", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            Le(e) !== "svelte-6or91k" && (e.textContent = r),
            a = q(n),
            s = b(n, "DIV", {
                class: !0
            });
            var f = $(s);
            for (let c = 0; c < i.length; c += 1)
                i[c].l(f);
            f.forEach(m),
            this.h()
        },
        h() {
            d(e, "class", "lead mt-4"),
            d(s, "class", "list-group")
        },
        m(n, f) {
            N(n, e, f),
            N(n, a, f),
            N(n, s, f);
            for (let c = 0; c < i.length; c += 1)
                i[c] && i[c].m(s, null);
            o = !0
        },
        p(n, f) {
            if (f[0] & 1288) {
                u = $e(n[3]);
                let c;
                for (c = 0; c < u.length; c += 1) {
                    const v = et(n, u, c);
                    i[c] ? (i[c].p(v, f),
                    M(i[c], 1)) : (i[c] = ot(v),
                    i[c].c(),
                    M(i[c], 1),
                    i[c].m(s, null))
                }
                for (be(),
                c = u.length; c < i.length; c += 1)
                    t(c);
                we()
            }
        },
        i(n) {
            if (!o) {
                for (let f = 0; f < u.length; f += 1)
                    M(i[f]);
                o = !0
            }
        },
        o(n) {
            i = i.filter(Boolean);
            for (let f = 0; f < i.length; f += 1)
                S(i[f]);
            o = !1
        },
        d(n) {
            n && (m(e),
            m(a),
            m(s)),
            Oe(i, n)
        }
    }
}
function ot(l) {
    let e, r, a, s, o, u, i = l[28].name + "", t, n, f, c, v = (l[28].admin1 || "") + "", O, D, B = l[28].latitude.toFixed(2) + "", R, I, P = l[28].longitude.toFixed(2) + "", X, te, A = l[28].elevation.toFixed(0) + "", Y, K, J, F, y, p, V, T, Z, _, E, w, L, ne;
    p = new ct({});
    function G() {
        return l[17](l[28])
    }
    Z = new Pe({});
    function z() {
        return l[18](l[28])
    }
    return {
        c() {
            e = g("button"),
            r = g("img"),
            u = j(),
            t = U(i),
            n = g("br"),
            f = j(),
            c = g("small"),
            O = U(v),
            D = U(" ("),
            R = U(B),
            I = U("°E "),
            X = U(P),
            te = U("°N "),
            Y = U(A),
            K = U("m asl)"),
            J = j(),
            F = g("div"),
            y = g("button"),
            de(p.$$.fragment),
            V = j(),
            T = g("a"),
            de(Z.$$.fragment),
            E = j(),
            this.h()
        },
        l(k) {
            e = b(k, "BUTTON", {
                class: !0,
                type: !0
            });
            var C = $(e);
            r = b(C, "IMG", {
                height: !0,
                src: !0,
                title: !0,
                alt: !0
            }),
            u = q(C),
            t = H(C, i),
            n = b(C, "BR", {}),
            f = q(C),
            c = b(C, "SMALL", {
                class: !0
            });
            var x = $(c);
            O = H(x, v),
            D = H(x, " ("),
            R = H(x, B),
            I = H(x, "°E "),
            X = H(x, P),
            te = H(x, "°N "),
            Y = H(x, A),
            K = H(x, "m asl)"),
            x.forEach(m),
            J = q(C),
            F = b(C, "DIV", {
                class: !0
            });
            var le = $(F);
            y = b(le, "BUTTON", {
                class: !0,
                tabindex: !0,
                title: !0
            });
            var Q = $(y);
            he(p.$$.fragment, Q),
            Q.forEach(m),
            V = q(le),
            T = b(le, "A", {
                class: !0,
                href: !0,
                target: !0,
                tabindex: !0,
                title: !0
            });
            var W = $(T);
            he(Z.$$.fragment, W),
            W.forEach(m),
            le.forEach(m),
            E = q(C),
            C.forEach(m),
            this.h()
        },
        h() {
            d(r, "height", "24"),
            ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg") || d(r, "src", a),
            d(r, "title", s = l[28].country),
            d(r, "alt", o = l[28].country_code),
            d(c, "class", "text-muted"),
            d(y, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(y, "tabindex", "-1"),
            d(y, "title", "Delete"),
            d(T, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(T, "href", _ = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude),
            d(T, "target", "_blank"),
            d(T, "tabindex", "-1"),
            d(T, "title", "Show on map"),
            d(F, "class", "position-absolute top-0 end-0 p-2"),
            d(e, "class", "list-group-item list-group-item-action position-relative"),
            d(e, "type", "button")
        },
        m(k, C) {
            N(k, e, C),
            h(e, r),
            h(e, u),
            h(e, t),
            h(e, n),
            h(e, f),
            h(e, c),
            h(c, O),
            h(c, D),
            h(c, R),
            h(c, I),
            h(c, X),
            h(c, te),
            h(c, Y),
            h(c, K),
            h(e, J),
            h(e, F),
            h(F, y),
            _e(p, y, null),
            h(F, V),
            h(F, T),
            _e(Z, T, null),
            h(e, E),
            w = !0,
            L || (ne = [ie(y, "click", pe(G)), ie(T, "click", pe(l[13])), ie(e, "click", z)],
            L = !0)
        },
        p(k, C) {
            l = k,
            (!w || C[0] & 8 && !ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg")) && d(r, "src", a),
            (!w || C[0] & 8 && s !== (s = l[28].country)) && d(r, "title", s),
            (!w || C[0] & 8 && o !== (o = l[28].country_code)) && d(r, "alt", o),
            (!w || C[0] & 8) && i !== (i = l[28].name + "") && re(t, i),
            (!w || C[0] & 8) && v !== (v = (l[28].admin1 || "") + "") && re(O, v),
            (!w || C[0] & 8) && B !== (B = l[28].latitude.toFixed(2) + "") && re(R, B),
            (!w || C[0] & 8) && P !== (P = l[28].longitude.toFixed(2) + "") && re(X, P),
            (!w || C[0] & 8) && A !== (A = l[28].elevation.toFixed(0) + "") && re(Y, A),
            (!w || C[0] & 8 && _ !== (_ = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude)) && d(T, "href", _)
        },
        i(k) {
            w || (M(p.$$.fragment, k),
            M(Z.$$.fragment, k),
            w = !0)
        },
        o(k) {
            S(p.$$.fragment, k),
            S(Z.$$.fragment, k),
            w = !1
        },
        d(k) {
            k && m(e),
            me(p),
            me(Z),
            L = !1,
            Ue(ne)
        }
    }
}
function at(l) {
    let e, r = "Recent Locations", a, s, o, u = $e(l[2]), i = [];
    for (let n = 0; n < u.length; n += 1)
        i[n] = st(xe(l, u, n));
    const t = n=>S(i[n], 1, 1, ()=>{
        i[n] = null
    }
    );
    return {
        c() {
            e = g("h6"),
            e.textContent = r,
            a = j(),
            s = g("div");
            for (let n = 0; n < i.length; n += 1)
                i[n].c();
            this.h()
        },
        l(n) {
            e = b(n, "H6", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            Le(e) !== "svelte-hmtvc8" && (e.textContent = r),
            a = q(n),
            s = b(n, "DIV", {
                class: !0
            });
            var f = $(s);
            for (let c = 0; c < i.length; c += 1)
                i[c].l(f);
            f.forEach(m),
            this.h()
        },
        h() {
            d(e, "class", "lead mt-4"),
            d(s, "class", "list-group")
        },
        m(n, f) {
            N(n, e, f),
            N(n, a, f),
            N(n, s, f);
            for (let c = 0; c < i.length; c += 1)
                i[c] && i[c].m(s, null);
            o = !0
        },
        p(n, f) {
            if (f[0] & 1668) {
                u = $e(n[2]);
                let c;
                for (c = 0; c < u.length; c += 1) {
                    const v = xe(n, u, c);
                    i[c] ? (i[c].p(v, f),
                    M(i[c], 1)) : (i[c] = st(v),
                    i[c].c(),
                    M(i[c], 1),
                    i[c].m(s, null))
                }
                for (be(),
                c = u.length; c < i.length; c += 1)
                    t(c);
                we()
            }
        },
        i(n) {
            if (!o) {
                for (let f = 0; f < u.length; f += 1)
                    M(i[f]);
                o = !0
            }
        },
        o(n) {
            i = i.filter(Boolean);
            for (let f = 0; f < i.length; f += 1)
                S(i[f]);
            o = !1
        },
        d(n) {
            n && (m(e),
            m(a),
            m(s)),
            Oe(i, n)
        }
    }
}
function st(l) {
    let e, r, a, s, o, u, i = l[28].name + "", t, n, f, c, v = (l[28].admin1 || "") + "", O, D, B = l[28].latitude.toFixed(2) + "", R, I, P = l[28].longitude.toFixed(2) + "", X, te, A = l[28].elevation.toFixed(0) + "", Y, K, J, F, y, p, V, T, Z, _, E, w, L, ne, G, z, k;
    p = new ut({});
    function C() {
        return l[19](l[28])
    }
    Z = new ct({});
    function x() {
        return l[20](l[28])
    }
    w = new Pe({});
    function le() {
        return l[21](l[28])
    }
    return {
        c() {
            e = g("button"),
            r = g("img"),
            u = j(),
            t = U(i),
            n = g("br"),
            f = j(),
            c = g("small"),
            O = U(v),
            D = U(" ("),
            R = U(B),
            I = U("°E "),
            X = U(P),
            te = U("°N "),
            Y = U(A),
            K = U("m asl)"),
            J = j(),
            F = g("div"),
            y = g("button"),
            de(p.$$.fragment),
            V = j(),
            T = g("button"),
            de(Z.$$.fragment),
            _ = j(),
            E = g("a"),
            de(w.$$.fragment),
            ne = j(),
            this.h()
        },
        l(Q) {
            e = b(Q, "BUTTON", {
                class: !0,
                type: !0
            });
            var W = $(e);
            r = b(W, "IMG", {
                height: !0,
                src: !0,
                title: !0,
                alt: !0
            }),
            u = q(W),
            t = H(W, i),
            n = b(W, "BR", {}),
            f = q(W),
            c = b(W, "SMALL", {
                class: !0
            });
            var fe = $(c);
            O = H(fe, v),
            D = H(fe, " ("),
            R = H(fe, B),
            I = H(fe, "°E "),
            X = H(fe, P),
            te = H(fe, "°N "),
            Y = H(fe, A),
            K = H(fe, "m asl)"),
            fe.forEach(m),
            J = q(W),
            F = b(W, "DIV", {
                class: !0
            });
            var ke = $(F);
            y = b(ke, "BUTTON", {
                class: !0,
                type: !0,
                tabindex: !0,
                title: !0
            });
            var Ae = $(y);
            he(p.$$.fragment, Ae),
            Ae.forEach(m),
            V = q(ke),
            T = b(ke, "BUTTON", {
                class: !0,
                type: !0,
                tabindex: !0,
                title: !0
            });
            var Ge = $(T);
            he(Z.$$.fragment, Ge),
            Ge.forEach(m),
            _ = q(ke),
            E = b(ke, "A", {
                class: !0,
                type: !0,
                href: !0,
                target: !0,
                tabindex: !0,
                title: !0
            });
            var Re = $(E);
            he(w.$$.fragment, Re),
            Re.forEach(m),
            ke.forEach(m),
            ne = q(W),
            W.forEach(m),
            this.h()
        },
        h() {
            d(r, "height", "24"),
            ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg") || d(r, "src", a),
            d(r, "title", s = l[28].country),
            d(r, "alt", o = l[28].country_code),
            d(c, "class", "text-muted"),
            d(y, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(y, "type", "button"),
            d(y, "tabindex", "-1"),
            d(y, "title", "Save"),
            d(T, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(T, "type", "button"),
            d(T, "tabindex", "-1"),
            d(T, "title", "Delete"),
            d(E, "class", "btn btn-outline-secondary btn-sm border-0"),
            d(E, "type", "button"),
            d(E, "href", L = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude),
            d(E, "target", "_blank"),
            d(E, "tabindex", "-1"),
            d(E, "title", "Show on map"),
            d(F, "class", "position-absolute top-0 end-0 p-2"),
            d(e, "class", "list-group-item list-group-item-action position-relative"),
            d(e, "type", "button")
        },
        m(Q, W) {
            N(Q, e, W),
            h(e, r),
            h(e, u),
            h(e, t),
            h(e, n),
            h(e, f),
            h(e, c),
            h(c, O),
            h(c, D),
            h(c, R),
            h(c, I),
            h(c, X),
            h(c, te),
            h(c, Y),
            h(c, K),
            h(e, J),
            h(e, F),
            h(F, y),
            _e(p, y, null),
            h(F, V),
            h(F, T),
            _e(Z, T, null),
            h(F, _),
            h(F, E),
            _e(w, E, null),
            h(e, ne),
            G = !0,
            z || (k = [ie(y, "click", pe(C)), ie(T, "click", pe(x)), ie(E, "click", pe(l[12])), ie(e, "click", le)],
            z = !0)
        },
        p(Q, W) {
            l = Q,
            (!G || W[0] & 4 && !ye(r.src, a = "/images/country-flags/" + (l[28].country_code || "united_nations").toLowerCase() + ".svg")) && d(r, "src", a),
            (!G || W[0] & 4 && s !== (s = l[28].country)) && d(r, "title", s),
            (!G || W[0] & 4 && o !== (o = l[28].country_code)) && d(r, "alt", o),
            (!G || W[0] & 4) && i !== (i = l[28].name + "") && re(t, i),
            (!G || W[0] & 4) && v !== (v = (l[28].admin1 || "") + "") && re(O, v),
            (!G || W[0] & 4) && B !== (B = l[28].latitude.toFixed(2) + "") && re(R, B),
            (!G || W[0] & 4) && P !== (P = l[28].longitude.toFixed(2) + "") && re(X, P),
            (!G || W[0] & 4) && A !== (A = l[28].elevation.toFixed(0) + "") && re(Y, A),
            (!G || W[0] & 4 && L !== (L = "https://www.openstreetmap.org/#map=13/" + l[28].latitude + "/" + l[28].longitude)) && d(E, "href", L)
        },
        i(Q) {
            G || (M(p.$$.fragment, Q),
            M(Z.$$.fragment, Q),
            M(w.$$.fragment, Q),
            G = !0)
        },
        o(Q) {
            S(p.$$.fragment, Q),
            S(Z.$$.fragment, Q),
            S(w.$$.fragment, Q),
            G = !1
        },
        d(Q) {
            Q && m(e),
            me(p),
            me(Z),
            me(w),
            z = !1,
            Ue(k)
        }
    }
}
function Pt(l) {
    let e, r = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    return {
        c() {
            e = g("div"),
            e.innerHTML = r,
            this.h()
        },
        l(a) {
            e = b(a, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            Le(e) !== "svelte-1eh40aw" && (e.innerHTML = r),
            this.h()
        },
        h() {
            d(e, "class", "d-flex justify-content-center mt-4")
        },
        m(a, s) {
            N(a, e, s)
        },
        p: ve,
        i: ve,
        o: ve,
        d(a) {
            a && m(e)
        }
    }
}
function At(l) {
    let e, r, a, s, o, u, i, t;
    r = new Tt({});
    let n = l[1] && tt(l);
    return {
        c() {
            e = g("button"),
            de(r.$$.fragment),
            a = U(" Search Locations ..."),
            s = j(),
            n && n.c(),
            o = ge(),
            this.h()
        },
        l(f) {
            e = b(f, "BUTTON", {
                type: !0,
                class: !0
            });
            var c = $(e);
            he(r.$$.fragment, c),
            a = H(c, " Search Locations ..."),
            c.forEach(m),
            s = q(f),
            n && n.l(f),
            o = ge(),
            this.h()
        },
        h() {
            d(e, "type", "button"),
            d(e, "class", "btn btn-outline-secondary w-100 p-3")
        },
        m(f, c) {
            N(f, e, c),
            _e(r, e, null),
            h(e, a),
            N(f, s, c),
            n && n.m(f, c),
            N(f, o, c),
            u = !0,
            i || (t = ie(e, "click", l[5]),
            i = !0)
        },
        p(f, c) {
            f[1] ? n ? (n.p(f, c),
            c[0] & 2 && M(n, 1)) : (n = tt(f),
            n.c(),
            M(n, 1),
            n.m(o.parentNode, o)) : n && (be(),
            S(n, 1, 1, ()=>{
                n = null
            }
            ),
            we())
        },
        i(f) {
            u || (M(r.$$.fragment, f),
            M(n),
            u = !0)
        },
        o(f) {
            S(r.$$.fragment, f),
            S(n),
            u = !1
        },
        d(f) {
            f && (m(e),
            m(s),
            m(o)),
            me(r),
            n && n.d(f),
            i = !1,
            t()
        }
    }
}
function Gt(l) {
    l.focus()
}
function Rt(l, e, r) {
    let a, s, o;
    je(l, ze, _=>r(2, s = _)),
    je(l, Ie, _=>r(3, o = _));
    var u = this && this.__awaiter || function(_, E, w, L) {
        function ne(G) {
            return G instanceof w ? G : new w(function(z) {
                z(G)
            }
            )
        }
        return new (w || (w = Promise))(function(G, z) {
            function k(le) {
                try {
                    x(L.next(le))
                } catch (Q) {
                    z(Q)
                }
            }
            function C(le) {
                try {
                    x(L.throw(le))
                } catch (Q) {
                    z(Q)
                }
            }
            function x(le) {
                le.done ? G(le.value) : ne(le.value).then(k, C)
            }
            x((L = L.apply(_, E || [])).next())
        }
        )
    }
    ;
    let i = !1;
    const t = ht();
    let n, f = "";
    _t(()=>{
        window.addEventListener("keydown", _);
        function _(E) {
            E.key == "Escape" && i && f == "" && O()
        }
        return ()=>{
            i && O(),
            window.removeEventListener("keydown", _)
        }
    }
    ),
    mt(()=>{
        clearInterval(n)
    }
    );
    let c;
    function v() {
        r(1, i = !0),
        c = window.scrollY,
        document.body.style.position = "fixed",
        document.body.style.top = `-${c}px`,
        document.body.style.overflow = "hidden"
    }
    function O() {
        r(1, i = !1),
        document.body.style.position = "",
        document.body.style.top = "",
        document.body.style.overflow = "",
        c && window.scrollTo({
            top: c,
            left: 0,
            behavior: "instant"
        })
    }
    function D(_) {
        Te(ze, s = s.filter(E=>E.id != _.id), s)
    }
    function B(_) {
        Te(Ie, o = o.filter(E=>E.id != _.id), o)
    }
    function R(_) {
        Te(Ie, o = [_, ...o], o),
        D(_),
        r(0, f = "")
    }
    function I(_) {
        if (o.find(w=>w.id == _.id)) {
            let w = o.filter(L=>L.id != _.id);
            w.unshift(_),
            Te(Ie, o = w, o);
            return
        }
        let E = s.filter(w=>w.id != _.id);
        E.unshift(_),
        E.length > 10 && E.pop(),
        Te(ze, s = E, s)
    }
    function P(_) {
        I(_),
        r(0, f = ""),
        O(),
        t("location", _)
    }
    function X(_) {
        He.call(this, l, _)
    }
    function te(_) {
        He.call(this, l, _)
    }
    function A(_) {
        He.call(this, l, _)
    }
    function Y() {
        f = this.value,
        r(0, f)
    }
    const K = ()=>r(0, f = "GPS")
      , J = _=>B(_)
      , F = _=>P(_)
      , y = _=>R(_)
      , p = _=>D(_)
      , V = _=>P(_)
      , T = _=>R(_)
      , Z = _=>P(_);
    return l.$$.update = ()=>{
        l.$$.dirty[0] & 2049 && r(4, a = (()=>u(void 0, void 0, void 0, function*() {
            var _;
            if (n && clearTimeout(n),
            f.length < 2)
                return {
                    results: []
                };
            if (yield new Promise(ne=>{
                r(11, n = setTimeout(ne, 300))
            }
            ),
            f.toLowerCase() == "gps") {
                let ne = yield new Promise((k,C)=>navigator.geolocation.getCurrentPosition(k, C, {}));
                const G = ne.coords.latitude
                  , z = ne.coords.longitude;
                return {
                    results: [{
                        id: 1e8 + Math.floor(G * 100 + z + 1e3),
                        name: `GPS ${G.toFixed(2)}°E ${z.toFixed(2)}°N`,
                        latitude: G,
                        longitude: z,
                        elevation: (_ = ne.coords.altitude) !== null && _ !== void 0 ? _ : NaN,
                        feature_code: "",
                        country_code: void 0,
                        admin1_id: void 0,
                        admin3_id: void 0,
                        admin4_id: void 0,
                        timezone: "",
                        population: void 0,
                        postcodes: void 0,
                        country_id: void 0,
                        country: void 0,
                        admin1: void 0,
                        admin3: void 0,
                        admin4: void 0
                    }]
                }
            }
            const w = `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({
                name: f
            })}`
              , L = yield fetch(w);
            if (!L.ok)
                throw new Error(yield L.text());
            return yield L.json()
        }))())
    }
    ,
    [f, i, s, o, a, v, O, D, B, R, P, n, X, te, A, Y, K, J, F, y, p, V, T, Z]
}
class Xt extends Ce {
    constructor(e) {
        super(),
        Me(this, e, Rt, At, Ee, {}, null, [-1, -1])
    }
}
export {Xt as L, ft as c, Ye as f, Jt as s};
