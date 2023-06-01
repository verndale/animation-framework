import { css as X, LitElement as Y } from "lit";
import { scroll as tt, animate as R } from "motion";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var I;
const C = window, y = C.trustedTypes, U = y ? y.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, O = "$lit$", _ = `lit$${(Math.random() + "").slice(9)}$`, F = "?" + _, et = `<${F}>`, f = document, M = () => f.createComment(""), N = (o) => o === null || typeof o != "object" && typeof o != "function", G = Array.isArray, it = (o) => G(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", j = `[ 	
\f\r]`, x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, B = /-->/g, D = />/g, v = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), z = /'/g, V = /"/g, J = /^(?:script|style|textarea|title)$/i, st = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), nt = st(1), b = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), W = /* @__PURE__ */ new WeakMap(), m = f.createTreeWalker(f, 129, null, !1), ot = (o, t) => {
  const e = o.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : "", n = x;
  for (let h = 0; h < e; h++) {
    const l = o[h];
    let u, a, d = -1, p = 0;
    for (; p < l.length && (n.lastIndex = p, a = n.exec(l), a !== null); )
      p = n.lastIndex, n === x ? a[1] === "!--" ? n = B : a[1] !== void 0 ? n = D : a[2] !== void 0 ? (J.test(a[2]) && (s = RegExp("</" + a[2], "g")), n = v) : a[3] !== void 0 && (n = v) : n === v ? a[0] === ">" ? (n = s ?? x, d = -1) : a[1] === void 0 ? d = -2 : (d = n.lastIndex - a[2].length, u = a[1], n = a[3] === void 0 ? v : a[3] === '"' ? V : z) : n === V || n === z ? n = v : n === B || n === D ? n = x : (n = v, s = void 0);
    const S = n === v && o[h + 1].startsWith("/>") ? " " : "";
    r += n === x ? l + et : d >= 0 ? (i.push(u), l.slice(0, d) + O + l.slice(d) + _ + S) : l + _ + (d === -2 ? (i.push(void 0), h) : S);
  }
  const c = r + (o[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [U !== void 0 ? U.createHTML(c) : c, i];
};
class w {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, n = 0;
    const c = t.length - 1, h = this.parts, [l, u] = ot(t, e);
    if (this.el = w.createElement(l, i), m.currentNode = this.el.content, e === 2) {
      const a = this.el.content, d = a.firstChild;
      d.remove(), a.append(...d.childNodes);
    }
    for (; (s = m.nextNode()) !== null && h.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const a = [];
          for (const d of s.getAttributeNames())
            if (d.endsWith(O) || d.startsWith(_)) {
              const p = u[n++];
              if (a.push(d), p !== void 0) {
                const S = s.getAttribute(p.toLowerCase() + O).split(_), T = /([.?@])?(.*)/.exec(p);
                h.push({ type: 1, index: r, name: T[2], strings: S, ctor: T[1] === "." ? lt : T[1] === "?" ? at : T[1] === "@" ? dt : k });
              } else
                h.push({ type: 6, index: r });
            }
          for (const d of a)
            s.removeAttribute(d);
        }
        if (J.test(s.tagName)) {
          const a = s.textContent.split(_), d = a.length - 1;
          if (d > 0) {
            s.textContent = y ? y.emptyScript : "";
            for (let p = 0; p < d; p++)
              s.append(a[p], M()), m.nextNode(), h.push({ type: 2, index: ++r });
            s.append(a[d], M());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === F)
          h.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = s.data.indexOf(_, a + 1)) !== -1; )
            h.push({ type: 7, index: r }), a += _.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = f.createElement("template");
    return i.innerHTML = t, i;
  }
}
function g(o, t, e = o, i) {
  var s, r, n, c;
  if (t === b)
    return t;
  let h = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const l = N(t) ? void 0 : t._$litDirective$;
  return (h == null ? void 0 : h.constructor) !== l && ((r = h == null ? void 0 : h._$AO) === null || r === void 0 || r.call(h, !1), l === void 0 ? h = void 0 : (h = new l(o), h._$AT(o, e, i)), i !== void 0 ? ((n = (c = e)._$Co) !== null && n !== void 0 ? n : c._$Co = [])[i] = h : e._$Cl = h), h !== void 0 && (t = g(o, h._$AS(o, t.values), h, i)), t;
}
class rt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : f).importNode(i, !0);
    m.currentNode = r;
    let n = m.nextNode(), c = 0, h = 0, l = s[0];
    for (; l !== void 0; ) {
      if (c === l.index) {
        let u;
        l.type === 2 ? u = new P(n, n.nextSibling, this, t) : l.type === 1 ? u = new l.ctor(n, l.name, l.strings, this, t) : l.type === 6 && (u = new ct(n, this, t)), this._$AV.push(u), l = s[++h];
      }
      c !== (l == null ? void 0 : l.index) && (n = m.nextNode(), c++);
    }
    return m.currentNode = f, r;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class P {
  constructor(t, e, i, s) {
    var r;
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cp = (r = s == null ? void 0 : s.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = g(this, t, e), N(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== b && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : it(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== $ && N(this._$AH) ? this._$AA.nextSibling.data = t : this.$(f.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: i, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = w.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(i);
    else {
      const n = new rt(r, this), c = n.u(this.options);
      n.v(i), this.$(c), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = W.get(t.strings);
    return e === void 0 && W.set(t.strings, e = new w(t)), e;
  }
  T(t) {
    G(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t)
      s === e.length ? e.push(i = new P(this.k(M()), this.k(M()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class k {
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = $;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      t = g(this, t, e, 0), n = !N(t) || t !== this._$AH && t !== b, n && (this._$AH = t);
    else {
      const c = t;
      let h, l;
      for (t = r[0], h = 0; h < r.length - 1; h++)
        l = g(this, c[i + h], e, h), l === b && (l = this._$AH[h]), n || (n = !N(l) || l !== this._$AH[h]), l === $ ? t = $ : t !== $ && (t += (l ?? "") + r[h + 1]), this._$AH[h] = l;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lt extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
const ht = y ? y.emptyScript : "";
class at extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== $ ? this.element.setAttribute(this.name, ht) : this.element.removeAttribute(this.name);
  }
}
class dt extends k {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = g(this, t, e, 0)) !== null && i !== void 0 ? i : $) === b)
      return;
    const s = this._$AH, r = t === $ && s !== $ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== $ && (s === $ || r);
    r && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class ct {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    g(this, t);
  }
}
const Z = C.litHtmlPolyfillSupport;
Z == null || Z(w, P), ((I = C.litHtmlVersions) !== null && I !== void 0 ? I : C.litHtmlVersions = []).push("2.7.4");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = Symbol.for(""), $t = (o) => {
  if ((o == null ? void 0 : o.r) === Q)
    return o == null ? void 0 : o._$litStatic$;
}, K = (o) => ({ _$litStatic$: o, r: Q }), q = /* @__PURE__ */ new Map(), ut = (o) => (t, ...e) => {
  const i = e.length;
  let s, r;
  const n = [], c = [];
  let h, l = 0, u = !1;
  for (; l < i; ) {
    for (h = t[l]; l < i && (r = e[l], (s = $t(r)) !== void 0); )
      h += s + t[++l], u = !0;
    l !== i && c.push(r), n.push(h), l++;
  }
  if (l === i && n.push(t[i]), u) {
    const a = n.join("$$lit$$");
    (t = q.get(a)) === void 0 && (n.raw = n, q.set(a, t = n)), e = c;
  }
  return o(t, ...e);
}, pt = ut(nt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t = (o) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(o, t) : ((e, i) => {
  const { kind: s, elements: r } = i;
  return { kind: s, elements: r, finisher(n) {
    customElements.define(e, n);
  } };
})(o, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = (o, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, o);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, o);
} };
function E(o) {
  return (t, e) => e !== void 0 ? ((i, s, r) => {
    s.constructor.createProperty(r, i);
  })(o, t, e) : At(o, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var L;
((L = window.HTMLSlotElement) === null || L === void 0 ? void 0 : L.prototype.assignedElements) != null;
var vt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, H = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? mt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && vt(t, e, s), s;
};
let A = class extends Y {
  constructor() {
    super(...arguments), this.as = "div", this.duration = 2, this.delay = 0;
  }
  render() {
    return pt`<${K(this.as)}><slot></slot></${K(this.as)}>`;
  }
  async updated(o) {
    super.updated(o), this.anim && (this.scrolling ? tt(
      R(this, this.anim, {
        duration: this.duration,
        delay: this.delay
      })
    ) : R(this, this.anim, { duration: this.duration, delay: this.delay }));
  }
};
A.styles = X`
    :host {
      display: block;
    }
  `;
H([
  E({ type: String })
], A.prototype, "as", 2);
H([
  E({ type: Boolean, attribute: "scrolling" })
], A.prototype, "scrolling", 2);
H([
  E({ type: Object })
], A.prototype, "anim", 2);
H([
  E({ type: Number })
], A.prototype, "duration", 2);
H([
  E({ type: Number })
], A.prototype, "delay", 2);
A = H([
  _t("animated-element")
], A);
export {
  A as AnimatedElement
};
//# sourceMappingURL=scroll-animations.js.map
