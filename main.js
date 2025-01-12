// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@11.0.0-experimental.1/node_modules/preact/dist/preact.mjs
var n = [];
var l = { __e(n3, l4) {
  for (; l4 = l4.__; ) if (28 & l4.flags && 1024 & ~l4.flags) try {
    if (l4.type.getDerivedStateFromError && l4.__c.setState(l4.type.getDerivedStateFromError(n3)), l4.__c.componentDidCatch && l4.__c.componentDidCatch(n3), 16384 & l4.flags) return void (l4.flags |= 512);
  } catch (l5) {
    n3 = l5;
  }
  throw n3;
} };
function t(n3, l4) {
  null == n3.__h && (n3.__h = []), n3.__h.push(l4);
}
function e(n3, t4) {
  l.__c && l.__c(t4, n3), n3.some((t5) => {
    try {
      for (n3 = t5.__h.length; n3--; ) t5.__h.shift()();
    } catch (n4) {
      l.__e(n4, t5);
    }
  });
}
var u = 0;
function i(n3, l4, t4) {
  let e4, u5, i5, f5 = {};
  for (i5 in l4) "key" == i5 ? e4 = l4[i5] : "ref" == i5 ? u5 = l4[i5] : f5[i5] = l4[i5];
  if (arguments.length > 3) for (t4 = [t4], i5 = 3; arguments.length > i5; i5++) t4.push(arguments[i5]);
  return arguments.length > 2 && (f5.children = t4), r(n3, f5, e4, u5, 0);
}
function r(n3, t4, e4, i5, r4) {
  const f5 = { type: n3, props: t4, key: e4, ref: i5, constructor: void 0, __v: r4 || ++u };
  return null != l.vnode && l.vnode(f5), f5;
}
function f(n3) {
  return null == n3 || "boolean" == typeof n3 ? null : "object" == typeof n3 ? Array.isArray(n3) ? r(c, { children: n3 }, null, null, 0) : n3 : "function" == typeof n3 ? n3 : n3 + "";
}
function c(n3) {
  return n3.children;
}
function h(n3, t4, e4, u5) {
  if (n3 !== t4) {
    n3 && h(null, n3, null, u5);
    try {
      "function" == typeof t4 ? t4(e4) : t4 && (t4.current = e4);
    } catch (n4) {
      l.__e(n4, u5);
    }
  }
}
function a(n3, l4, t4) {
  "-" === l4[0] ? n3.style.setProperty(l4, t4) : n3.style[l4] = null == t4 ? "" : t4;
}
function y(n3, l4, t4, e4, u5) {
  let i5;
  n: if ("style" === l4) if ("string" == typeof t4) a(n3, "cssText", t4);
  else {
    if ("string" == typeof e4 && a(n3, "cssText", e4 = ""), e4) for (l4 in e4) t4 && l4 in t4 || a(n3, l4, "");
    for (l4 in t4) e4 && t4[l4] === e4[l4] || a(n3, l4, t4[l4]);
  }
  else if ("o" === l4[0] && "n" === l4[1]) i5 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n3 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + i5] = t4, t4 ? e4 || n3.addEventListener(l4, i5 ? p : d, i5) : n3.removeEventListener(l4, i5 ? p : d, i5);
  else if ("dangerouslySetInnerHTML" !== l4) {
    if (u5) l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n3) try {
      n3[l4] = null == t4 ? "" : t4;
      break n;
    } catch (n4) {
    }
    "function" == typeof t4 || (null != t4 && (false !== t4 || "a" === l4[0] && "r" === l4[1]) ? n3.setAttribute(l4, t4) : n3.removeAttribute(l4));
  }
}
function d(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3), this.t && (null == this.value || "input" !== n3.type && "change" !== n3.type || (this.value = this.u), null != this.checked && "change" === n3.type && (this.checked = this.u));
}
function p(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function _(n3, t4, e4, u5) {
  let i5, r4, f5 = t4.type, o3 = n3 ? n3.props : t4.props;
  if (t4 && t4.__c ? i5 = t4.__c : (t4.__c = i5 = { props: o3, context: u5, forceUpdate: t4.rerender.bind(null, t4) }, t4.flags |= 16384), n3 && n3.__v === t4.__v) return i5.props = o3, void (t4.flags |= 32768);
  i5.context = u5, t4.props = i5.props = o3, i5.__i = t4;
  let c4 = 0;
  for (; 25 > c4; ) c4++, t4.flags &= -16385, (r4 = l.__r) && r4(t4), r4 = f5.call(i5, i5.props, i5.context), 16384 & t4.flags || (c4 = 25);
  return t4.flags &= -16385, null != i5.getChildContext && (t4.c = Object.assign({}, e4, i5.getChildContext())), r4;
}
function b(n3, e4, u5, i5) {
  let r4, f5, o3, c4, s3, h3, a4 = e4.type, y3 = n3 ? n3.props : e4.props;
  if (e4 && e4.__c ? r4 = e4.__c : (e4.__c = r4 = new a4(y3, i5), r4.state || (r4.state = {}), f5 = true, e4.flags |= 16384), null == r4.__s && (r4.__s = r4.state), null != a4.getDerivedStateFromProps && (r4.__s == r4.state && (r4.__s = Object.assign({}, r4.__s)), Object.assign(r4.__s, a4.getDerivedStateFromProps(y3, r4.__s))), o3 = r4.props, c4 = r4.state, f5) null == a4.getDerivedStateFromProps && null != r4.componentWillMount && r4.componentWillMount(), null != r4.componentDidMount && t(e4, r4.componentDidMount.bind(r4));
  else {
    if (null == a4.getDerivedStateFromProps && y3 !== o3 && null != r4.componentWillReceiveProps && r4.componentWillReceiveProps(y3, i5), !(8192 & e4.flags) && null != r4.shouldComponentUpdate && false === r4.shouldComponentUpdate(y3, r4.__s, i5) || n3 && n3.__v === e4.__v) return r4.props = y3, r4.state = r4.__s, void (e4.flags |= 32768);
    null != r4.componentWillUpdate && r4.componentWillUpdate(y3, r4.__s, i5);
  }
  return r4.context = i5, e4.props = r4.props = y3, r4.state = r4.__s, (h3 = l.__r) && h3(e4), e4.flags &= -16385, r4.__i = e4, h3 = r4.render(r4.props, r4.state, r4.context), r4.state = r4.__s, null != r4.getChildContext && (e4.c = Object.assign({}, u5, r4.getChildContext())), f5 || (null != r4.getSnapshotBeforeUpdate && (s3 = r4.getSnapshotBeforeUpdate(o3, c4)), null != r4.componentDidUpdate && t(e4, () => {
    r4.componentDidUpdate(o3, c4, s3);
  })), h3;
}
var k = /* @__PURE__ */ new Set();
var g = (n3) => {
  k.delete(n3) || k.forEach((l4) => {
    l4.__c.s.delete(n3);
  });
};
function w(n3, t4, e4) {
  let u5, i5 = 0;
  if (l.unmount && l.unmount(n3), n3.flags |= 2048, (u5 = n3.ref) && (u5.current && u5.current !== n3.__e || h(null, u5, null, t4)), (u5 = n3.__c) && (g(n3), u5.componentWillUnmount)) try {
    u5.componentWillUnmount();
  } catch (n4) {
    l.__e(n4, t4);
  }
  if (u5 = n3.__k) for (; u5.length > i5; i5++) u5[i5] && w(u5[i5], t4, e4 ? 16 & ~n3.flags : 3 & n3.flags);
  !e4 && 3 & n3.flags && n3.__e.remove(), n3.__e = null;
}
function O(l4, t4, e4, u5) {
  let i5, r4, o3, c4, s3, a4 = e4.__k && e4.__k.slice() || n, y3 = a4.length, d4 = y3, p3 = 0;
  const _3 = [];
  for (i5 = 0; t4.length > i5; i5++) {
    if (s3 = f(t4[i5]), null == s3) {
      _3[i5] = null;
      continue;
    }
    let n3, h3 = i5 + p3, y4 = m(s3, a4, h3, d4);
    -1 === y4 ? c4 = void 0 : (c4 = a4[y4], a4[y4] = void 0, d4--);
    let b3 = null == c4;
    b3 ? (c4 = U(s3, e4), F(l4, s3, c4, u5, z(e4, h3))) : 160 == (160 & c4.flags) ? (n3 = c4.ref, F(l4, s3, c4, u5, c4.__e)) : (n3 = c4.ref, S(l4, s3, c4, u5)), r4 = c4.__e, (s3.ref || n3) && (o3 || (o3 = []), c4.ref = s3.ref, o3.push(n3, s3.ref, 28 & c4.flags && c4.__c || r4, c4));
    n: if (b3) {
      if (-1 == y4 && p3--, 3 & c4.flags) {
        let n4 = z(e4, h3);
        l4.insertBefore(c4.__e, n4);
      }
    } else if (y4 !== h3) {
      if (y4 === h3 + 1) {
        p3++;
        break n;
      }
      if (y4 > h3) {
        if (d4 > t4.length - h3) {
          p3 += y4 - h3;
          break n;
        }
        p3--;
      } else p3 = h3 > y4 && y4 == h3 - 1 ? y4 - h3 : 0;
      if (h3 = i5 + p3, y4 == i5) break n;
      let n4 = z(e4, h3 + 1);
      3 & c4.flags ? l4.insertBefore(c4.__e, n4) : x(c4, n4, l4);
    }
    _3[i5] = c4;
  }
  if (e4.__k = _3, d4 > 0) for (i5 = y3; i5--; ) null != a4[i5] && w(a4[i5], a4[i5]);
  if (o3) for (i5 = 0; o3.length > i5; i5++) h(o3[i5], o3[++i5], o3[++i5], o3[++i5]);
}
function m(n3, l4, t4, e4) {
  const u5 = "string" == typeof n3 ? null : n3.type, i5 = null !== u5 ? n3.key : void 0;
  let r4 = -1, f5 = t4 - 1, o3 = t4 + 1, c4 = l4[t4];
  if (null === c4 || null != c4 && c4.type === u5 && c4.key == i5) r4 = t4;
  else if (e4 > (null != c4 ? 1 : 0)) for (; ; ) {
    if (f5 >= 0) {
      if (c4 = l4[f5], null != c4 && c4.type === u5 && c4.key == i5) {
        r4 = f5;
        break;
      }
      f5--;
    }
    if (l4.length > o3) {
      if (c4 = l4[o3], null != c4 && c4.type === u5 && c4.key == i5) {
        r4 = o3;
        break;
      }
      o3++;
    } else if (0 > f5) break;
  }
  return r4;
}
function x(n3, l4, t4) {
  if (null != n3.__k) for (let e4 = 0; n3.__k.length > e4; e4++) {
    let u5 = n3.__k[e4];
    u5 && (u5.__ = n3, 28 & u5.flags ? x(u5, l4, t4) : u5.__e != l4 && t4.insertBefore(u5.__e, l4));
  }
}
function S(n3, t4, e4, u5) {
  let i5, r4 = e4.__e, f5 = e4.flags;
  if (1 & f5) return void (t4 !== e4.props && (r4.data = t4, e4.props = t4));
  if (void 0 !== t4.constructor) return null;
  l.__b && l.__b(e4, t4), 2 & f5 && (t4.__v !== e4.__v && (T(r4, t4, e4, u5), e4.__v = t4.__v), l.diffed && l.diffed(e4), e4.flags &= -42465);
  let o3 = n3;
  16 & f5 && (n3 = t4.props.__P, e4.props.__P !== t4.props.__P) && x(e4, n3 == o3 ? z(e4) : null, n3);
  try {
    512 & e4.flags && (e4.flags ^= 1536);
    const l4 = D(e4);
    let r5 = t4.type.contextType, f6 = r5 && l4[r5.__c], o4 = r5 ? f6 ? f6.props.value : r5.__ : l4, s3 = !e4 || !e4.__c;
    if (i5 = 4 & e4.flags ? b(t4, e4, l4, o4) : _(t4, e4, l4, o4), 32768 & e4.flags) e4.props = t4.props, e4.flags &= -32769, t4 && t4.__v !== e4.__v && (e4.flags &= -16385);
    else {
      let l5 = null != i5 && i5.type === c && null == i5.key ? i5.props.children : i5;
      null == e4.__k ? J(n3, Array.isArray(l5) ? l5 : [l5], e4, u5, 160 == (160 & e4.flags) ? e4.__e : s3 || 32 & e4.flags ? null : z(e4)) : O(n3, Array.isArray(l5) ? l5 : [l5], e4, u5);
    }
    null != e4.__h && e4.__h.length && u5.push(e4);
  } catch (n4) {
    e4.flags |= n4.then ? 128 : 256, l.__e(n4, e4);
  }
  l.diffed && l.diffed(e4), e4.flags &= -42465, e4.__v = t4.__v;
}
function T(n3, l4, t4, e4) {
  let u5, i5, r4, f5, o3, c4, s3 = t4.props, h3 = t4.props = l4.props, a4 = 4096 & t4.flags;
  for (u5 in s3) i5 = s3[u5], "key" === u5 || "children" === u5 || ("dangerouslySetInnerHTML" === u5 ? o3 = i5 : u5 in h3 || y(n3, u5, null, i5, a4));
  for (u5 in h3) i5 = h3[u5], "key" === u5 || ("children" === u5 ? c4 = i5 : "dangerouslySetInnerHTML" === u5 ? f5 = i5 : i5 === (r4 = s3[u5]) && ("checked" !== u5 && "value" !== u5 || null == i5 || i5 === n3[u5]) || y(n3, u5, i5, r4, a4));
  f5 ? (i5 = f5.__html, (!o3 || i5 !== o3.__html && i5 !== n3.innerHTML) && (n3.innerHTML = i5), t4.__k = null) : (o3 && (n3.innerHTML = ""), O(n3, c4 && Array.isArray(c4) ? c4 : [c4], t4, e4)), null != h3.value && n3.t ? n3.u = h3.value : null != h3.checked && n3.t && (n3.u = h3.checked);
}
function H(n3, l4) {
  this.props = n3, this.context = l4;
}
function I(n3) {
  if (2048 & ~n3.flags && 16384 & n3.flags) {
    const l4 = [];
    S(E(n3), r(n3.type, n3.props, n3.key, n3.ref, 0), n3, l4), e(l4, n3);
  }
}
H.prototype.setState = function(n3, l4) {
  let e4;
  e4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Object.assign({}, this.state), "function" == typeof n3 && (n3 = n3(Object.assign({}, e4), this.props)), n3 && Object.assign(e4, n3), null != n3 && this.__i && (l4 && t(this.__i, l4.bind(this)), this.__i.rerender(this.__i));
}, H.prototype.forceUpdate = function(n3) {
  this.__i && (this.__i.flags |= 8192, n3 && t(this.__i, n3.bind(this)), this.__i.rerender(this.__i));
}, H.prototype.render = c;
var P;
var L = [];
var M = Promise.prototype.then.bind(Promise.resolve());
function C(n3) {
  (16384 & n3.flags || !(n3.flags |= 16384) || !L.push(n3) || N.__r++) && P === l.debounceRendering || (P = l.debounceRendering, (P || M)(N));
}
function N() {
  for (; $ = N.__r = L.length; ) for (L.sort((n3, l4) => n3.__b - l4.__b); $--; ) I(L.shift());
}
var $ = N.__r = 0;
function U(n3, t4) {
  let e4, u5, i5, r4 = null, f5 = t4 ? 4192 & t4.flags : 0, o3 = NaN;
  "string" == typeof n3 ? (f5 |= 1, e4 = n3) : void 0 !== n3.constructor ? (f5 |= 1, e4 = "") : (r4 = n3.type, e4 = n3.props || {}, u5 = n3.key, i5 = n3.ref, o3 = n3.__v, f5 |= "function" == typeof r4 ? r4.prototype && "render" in r4.prototype ? 4 : e4.__P ? 16 : 8 : 2, 2 & f5 && "svg" === r4 ? f5 |= 4096 : t4 && 4096 & t4.flags && "foreignObject" === t4.type && (f5 &= -4097));
  const c4 = { type: r4, props: e4, key: u5, ref: i5, data: "function" == typeof r4 ? {} : null, rerender: C, flags: f5, __k: null, __: t4, __v: o3, __e: null, __c: null, c: null, __b: t4 ? t4.__b + 1 : 0 };
  return l.__i && l.__i(c4, n3), c4;
}
var q = (n3) => 28 & n3.flags && (!(16 & n3.flags) || n3.props.__P == E(n3.__));
function z(n3, l4) {
  return null == l4 ? z(n3.__, n3.__.__k.indexOf(n3) + 1) : B(n3, l4) || (n3.__ && q(n3) ? z(n3) : null);
}
function B(n3, l4) {
  if (null == n3.__k) return null;
  for (l4 = l4 || 0; n3.__k.length > l4; l4++) {
    let t4 = n3.__k[l4];
    if (null != t4) {
      if (3 & t4.flags) return t4.__e;
      if (q(t4)) {
        let n4 = B(t4);
        if (n4) return n4;
      }
    }
  }
  return null;
}
function D(n3) {
  let l4 = n3.c, t4 = n3.__;
  for (; null == l4 && t4; ) l4 = t4.c, t4 = t4.__;
  return l4;
}
function E(n3) {
  let l4 = 16 & n3.flags ? n3.props.__P : null, t4 = n3.__;
  for (; null == l4 && t4; ) 16 & t4.flags ? l4 = t4.props.__P : 2 & t4.flags && (l4 = t4.__e), t4 = t4.__;
  return l4;
}
function F(n3, t4, e4, u5, i5) {
  let r4;
  l.__b && l.__b(e4, t4);
  try {
    if (28 & e4.flags) {
      let l4 = i5, f5 = n3;
      16 & e4.flags && (n3 = t4.props.__P) !== f5 && (i5 = null);
      const o3 = D(e4);
      let s3 = t4.type.contextType, h3 = s3 && o3[s3.__c], a4 = s3 ? h3 ? h3.props.value : s3.__ : o3;
      h3 && h3.s.add(e4), r4 = 4 & e4.flags ? b(null, e4, o3, a4) : _(null, e4, o3, a4);
      let y3 = null != r4 && r4.type === c && null == r4.key ? r4.props.children : r4;
      r4 = J(n3, Array.isArray(y3) ? y3 : [y3], e4, u5, i5), null != e4.__h && e4.__h.length && u5.push(e4), 16 & e4.flags && f5 !== n3 && (r4 = l4);
    } else r4 = G(96 & e4.flags ? i5 : null, e4, u5);
    l.diffed && l.diffed(e4), e4.flags &= -42465;
  } catch (n4) {
    e4.__v = 0, e4.flags |= n4.then ? 128 : 256, 32 & e4.flags && (r4 = i5 && i5.nextSibling, e4.__e = i5), l.__e(n4, e4);
  }
  return r4;
}
function G(n3, l4, t4) {
  let e4, u5, i5 = l4.props, r4 = l4.type, f5 = l4.flags, o3 = 4096 & f5, c4 = 32 & ~f5;
  if (96 & f5) for (; n3 && (r4 ? n3.localName !== r4 : 3 !== n3.nodeType); ) n3 = n3.nextSibling;
  let s3 = null == n3;
  if (1 & f5) s3 ? n3 = document.createTextNode(i5) : n3.data !== i5 && (n3.data = i5), l4.__e = n3;
  else {
    if (s3 && (n3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", r4) : document.createElement(r4, i5.is && i5), l4.flags = f5 &= -42465, c4 = 1), 64 & f5) for (e4 = 0; n3.attributes.length > e4; e4++) u5 = n3.attributes[e4].name, u5 in i5 || n3.removeAttribute(u5);
    let h3, a4, d4;
    for (e4 in "input" !== l4.type && "textarea" !== l4.type && "select" !== l4.type || !i5.onInput && !i5.onChange || (null != i5.value ? (n3.t = true, n3.u = i5.value) : null != i5.checked && (n3.t = true, n3.u = i5.checked)), i5) u5 = i5[e4], "key" === e4 || ("children" === e4 ? d4 = u5 : "dangerouslySetInnerHTML" === e4 ? h3 = u5 : "value" === e4 ? a4 = u5 : null == u5 || !c4 && "function" != typeof u5 || y(n3, e4, u5, null, o3));
    l4.__e = n3, h3 ? (c4 && h3.__html && (n3.innerHTML = h3.__html), l4.__k = null) : null != d4 && J(n3, d4 && Array.isArray(d4) ? d4 : [d4], l4, t4, s3 ? null : n3.firstChild), c4 && null != a4 && y(n3, "value", a4, null, 0);
  }
  return s3 ? null : n3.nextSibling;
}
function J(n3, l4, t4, e4, u5) {
  let i5, r4, o3, c4, s3, a4 = t4.__k = [];
  for (i5 = 0; l4.length > i5; i5++) r4 = f(l4[i5]), null != r4 ? (o3 = U(r4, t4), a4[i5] = o3, s3 = F(n3, r4, o3, e4, u5), c4 = o3.__e, 28 & o3.flags || c4 == u5 ? u5 = s3 : null != c4 && n3.insertBefore(c4, u5), o3.ref && h(null, o3.ref, o3.__c || c4, o3)) : a4[i5] = null;
  if (96 & t4.flags && 2 & t4.flags) for (; u5; ) i5 = u5, u5 = u5.nextSibling, i5.remove();
  return u5;
}
function K(n3) {
  let t4, u5, r4, f5 = 0;
  function o3(o4) {
    l.__ && l.__(o4, n3), o4 = i(c, { __P: n3 }, [o4]), r4 = n3.firstChild, u5 = [], t4 ? S(n3, o4, t4, u5) : (t4 = U(o4), n3.__k = t4, r4 && (f5 = f5 || 64), void 0 !== n3.ownerSVGElement && (f5 |= 4096), t4.flags |= f5, t4.c = {}, F(n3, o4, t4, u5, r4)), e(u5, t4);
  }
  return { hydrate(n4) {
    f5 |= 32, o3(n4);
  }, render: o3 };
}
function Q(n3, l4) {
  let t4 = l4 && l4.__;
  t4 || (t4 = K(l4)), t4.render(n3), l4.__ = t4;
}

// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@10.25.4/node_modules/preact/dist/preact.module.js
var n2;
var l2;
var u2;
var t2;
var i2;
var r2;
var o;
var e2;
var f2;
var c2;
var s;
var a2;
var h2;
var p2 = {};
var v = [];
var y2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d2 = Array.isArray;
function w2(n3, l4) {
  for (var u5 in l4) n3[u5] = l4[u5];
  return n3;
}
function _2(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function g2(l4, u5, t4) {
  var i5, r4, o3, e4 = {};
  for (o3 in u5) "key" == o3 ? i5 = u5[o3] : "ref" == o3 ? r4 = u5[o3] : e4[o3] = u5[o3];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n2.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o3 in l4.defaultProps) void 0 === e4[o3] && (e4[o3] = l4.defaultProps[o3]);
  return m2(l4, e4, i5, r4, null);
}
function m2(n3, t4, i5, r4, o3) {
  var e4 = { type: n3, props: t4, key: i5, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u2 : o3, __i: -1, __u: 0 };
  return null == o3 && null != l2.vnode && l2.vnode(e4), e4;
}
function k2(n3) {
  return n3.children;
}
function x2(n3, l4) {
  this.props = n3, this.context = l4;
}
function C2(n3, l4) {
  if (null == l4) return n3.__ ? C2(n3.__, n3.__i + 1) : null;
  for (var u5; l4 < n3.__k.length; l4++) if (null != (u5 = n3.__k[l4]) && null != u5.__e) return u5.__e;
  return "function" == typeof n3.type ? C2(n3) : null;
}
function S2(n3) {
  var l4, u5;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++) if (null != (u5 = n3.__k[l4]) && null != u5.__e) {
      n3.__e = n3.__c.base = u5.__e;
      break;
    }
    return S2(n3);
  }
}
function M2(n3) {
  (!n3.__d && (n3.__d = true) && i2.push(n3) && !P2.__r++ || r2 !== l2.debounceRendering) && ((r2 = l2.debounceRendering) || o)(P2);
}
function P2() {
  var n3, u5, t4, r4, o3, f5, c4, s3;
  for (i2.sort(e2); n3 = i2.shift(); ) n3.__d && (u5 = i2.length, r4 = void 0, f5 = (o3 = (t4 = n3).__v).__e, c4 = [], s3 = [], t4.__P && ((r4 = w2({}, o3)).__v = o3.__v + 1, l2.vnode && l2.vnode(r4), j(t4.__P, r4, o3, t4.__n, t4.__P.namespaceURI, 32 & o3.__u ? [f5] : null, c4, null == f5 ? C2(o3) : f5, !!(32 & o3.__u), s3), r4.__v = o3.__v, r4.__.__k[r4.__i] = r4, z2(c4, r4, s3), r4.__e != f5 && S2(r4)), i2.length > u5 && i2.sort(e2));
  P2.__r = 0;
}
function $2(n3, l4, u5, t4, i5, r4, o3, e4, f5, c4, s3) {
  var a4, h3, y3, d4, w4, _3, g4 = t4 && t4.__k || v, m4 = l4.length;
  for (f5 = I2(u5, l4, g4, f5, m4), a4 = 0; a4 < m4; a4++) null != (y3 = u5.__k[a4]) && (h3 = -1 === y3.__i ? p2 : g4[y3.__i] || p2, y3.__i = a4, _3 = j(n3, y3, h3, i5, r4, o3, e4, f5, c4, s3), d4 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && V(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d4, y3)), null == w4 && null != d4 && (w4 = d4), 4 & y3.__u || h3.__k === y3.__k ? f5 = A(y3, f5, n3) : "function" == typeof y3.type && void 0 !== _3 ? f5 = _3 : d4 && (f5 = d4.nextSibling), y3.__u &= -7);
  return u5.__e = w4, f5;
}
function I2(n3, l4, u5, t4, i5) {
  var r4, o3, e4, f5, c4, s3 = u5.length, a4 = s3, h3 = 0;
  for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o3 = l4[r4]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f5 = r4 + h3, (o3 = n3.__k[r4] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m2(null, o3, null, null, null) : d2(o3) ? m2(k2, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m2(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n3, o3.__b = n3.__b + 1, e4 = null, -1 !== (c4 = o3.__i = L2(o3, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null === e4.__v ? (-1 == c4 && h3--, "function" != typeof o3.type && (o3.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h3-- : c4 == f5 + 1 ? h3++ : (c4 > f5 ? h3-- : h3++, o3.__u |= 4))) : n3.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s3; r4++) null != (e4 = u5[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = C2(e4)), q2(e4, e4));
  return t4;
}
function A(n3, l4, u5) {
  var t4, i5;
  if ("function" == typeof n3.type) {
    for (t4 = n3.__k, i5 = 0; t4 && i5 < t4.length; i5++) t4[i5] && (t4[i5].__ = n3, l4 = A(t4[i5], l4, u5));
    return l4;
  }
  n3.__e != l4 && (l4 && n3.type && !u5.contains(l4) && (l4 = C2(n3)), u5.insertBefore(n3.__e, l4 || null), l4 = n3.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 == l4.nodeType);
  return l4;
}
function L2(n3, l4, u5, t4) {
  var i5, r4, o3 = n3.key, e4 = n3.type, f5 = l4[u5];
  if (null === f5 || f5 && o3 == f5.key && e4 === f5.type && 0 == (2 & f5.__u)) return u5;
  if (t4 > (null != f5 && 0 == (2 & f5.__u) ? 1 : 0)) for (i5 = u5 - 1, r4 = u5 + 1; i5 >= 0 || r4 < l4.length; ) {
    if (i5 >= 0) {
      if ((f5 = l4[i5]) && 0 == (2 & f5.__u) && o3 == f5.key && e4 === f5.type) return i5;
      i5--;
    }
    if (r4 < l4.length) {
      if ((f5 = l4[r4]) && 0 == (2 & f5.__u) && o3 == f5.key && e4 === f5.type) return r4;
      r4++;
    }
  }
  return -1;
}
function T2(n3, l4, u5) {
  "-" == l4[0] ? n3.setProperty(l4, null == u5 ? "" : u5) : n3[l4] = null == u5 ? "" : "number" != typeof u5 || y2.test(l4) ? u5 : u5 + "px";
}
function F2(n3, l4, u5, t4, i5) {
  var r4;
  n: if ("style" == l4) if ("string" == typeof u5) n3.style.cssText = u5;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l4 in t4) u5 && l4 in u5 || T2(n3.style, l4, "");
    if (u5) for (l4 in u5) t4 && u5[l4] === t4[l4] || T2(n3.style, l4, u5[l4]);
  }
  else if ("o" == l4[0] && "n" == l4[1]) r4 = l4 != (l4 = l4.replace(f2, "$1")), l4 = l4.toLowerCase() in n3 || "onFocusOut" == l4 || "onFocusIn" == l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r4] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = c2, n3.addEventListener(l4, r4 ? a2 : s, r4)) : n3.removeEventListener(l4, r4 ? a2 : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i5) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3) try {
      n3[l4] = null == u5 ? "" : u5;
      break n;
    } catch (n4) {
    }
    "function" == typeof u5 || (null == u5 || false === u5 && "-" != l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u5 ? "" : u5));
  }
}
function O2(n3) {
  return function(u5) {
    if (this.l) {
      var t4 = this.l[u5.type + n3];
      if (null == u5.t) u5.t = c2++;
      else if (u5.t < t4.u) return;
      return t4(l2.event ? l2.event(u5) : u5);
    }
  };
}
function j(n3, u5, t4, i5, r4, o3, e4, f5, c4, s3) {
  var a4, h3, p3, v3, y3, g4, m4, b3, C3, S3, M3, P4, I3, A2, H2, L3, T3, F3 = u5.type;
  if (void 0 !== u5.constructor) return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), o3 = [f5 = u5.__e = t4.__e]), (a4 = l2.__b) && a4(u5);
  n: if ("function" == typeof F3) try {
    if (b3 = u5.props, C3 = "prototype" in F3 && F3.prototype.render, S3 = (a4 = F3.contextType) && i5[a4.__c], M3 = a4 ? S3 ? S3.props.value : a4.__ : i5, t4.__c ? m4 = (h3 = u5.__c = t4.__c).__ = h3.__E : (C3 ? u5.__c = h3 = new F3(b3, M3) : (u5.__c = h3 = new x2(b3, M3), h3.constructor = F3, h3.render = B2), S3 && S3.sub(h3), h3.props = b3, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i5, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C3 && null == h3.__s && (h3.__s = h3.state), C3 && null != F3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w2({}, h3.__s)), w2(h3.__s, F3.getDerivedStateFromProps(b3, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u5, p3) C3 && null == F3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (C3 && null == F3.getDerivedStateFromProps && b3 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b3, M3), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b3, h3.__s, M3) || u5.__v == t4.__v)) {
        for (u5.__v != t4.__v && (h3.props = b3, h3.state = h3.__s, h3.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
          n4 && (n4.__ = u5);
        }), P4 = 0; P4 < h3._sb.length; P4++) h3.__h.push(h3._sb[P4]);
        h3._sb = [], h3.__h.length && e4.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b3, h3.__s, M3), C3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, g4);
      });
    }
    if (h3.context = M3, h3.props = b3, h3.__P = n3, h3.__e = false, I3 = l2.__r, A2 = 0, C3) {
      for (h3.state = h3.__s, h3.__d = false, I3 && I3(u5), a4 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
      h3._sb = [];
    } else do {
      h3.__d = false, I3 && I3(u5), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i5 = w2(w2({}, i5), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (g4 = h3.getSnapshotBeforeUpdate(v3, y3)), f5 = $2(n3, d2(L3 = null != a4 && a4.type === k2 && null == a4.key ? a4.props.children : a4) ? L3 : [L3], u5, t4, i5, r4, o3, e4, f5, c4, s3), h3.base = u5.__e, u5.__u &= -161, h3.__h.length && e4.push(h3), m4 && (h3.__E = h3.__ = null);
  } catch (n4) {
    if (u5.__v = null, c4 || null != o3) if (n4.then) {
      for (u5.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
      o3[o3.indexOf(f5)] = null, u5.__e = f5;
    } else for (T3 = o3.length; T3--; ) _2(o3[T3]);
    else u5.__e = t4.__e, u5.__k = t4.__k;
    l2.__e(n4, u5, t4);
  }
  else null == o3 && u5.__v == t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = N2(t4.__e, u5, t4, i5, r4, o3, e4, c4, s3);
  return (a4 = l2.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
}
function z2(n3, u5, t4) {
  for (var i5 = 0; i5 < t4.length; i5++) V(t4[i5], t4[++i5], t4[++i5]);
  l2.__c && l2.__c(u5, n3), n3.some(function(u6) {
    try {
      n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
        n4.call(u6);
      });
    } catch (n4) {
      l2.__e(n4, u6.__v);
    }
  });
}
function N2(u5, t4, i5, r4, o3, e4, f5, c4, s3) {
  var a4, h3, v3, y3, w4, g4, m4, b3 = i5.props, k4 = t4.props, x3 = t4.type;
  if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((w4 = e4[a4]) && "setAttribute" in w4 == !!x3 && (x3 ? w4.localName == x3 : 3 == w4.nodeType)) {
      u5 = w4, e4[a4] = null;
      break;
    }
  }
  if (null == u5) {
    if (null == x3) return document.createTextNode(k4);
    u5 = document.createElementNS(o3, x3, k4.is && k4), c4 && (l2.__m && l2.__m(t4, e4), c4 = false), e4 = null;
  }
  if (null === x3) b3 === k4 || c4 && u5.data === k4 || (u5.data = k4);
  else {
    if (e4 = e4 && n2.call(u5.childNodes), b3 = i5.props || p2, !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < u5.attributes.length; a4++) b3[(w4 = u5.attributes[a4]).name] = w4.value;
    for (a4 in b3) if (w4 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v3 = w4;
    else if (!(a4 in k4)) {
      if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4) continue;
      F2(u5, a4, null, w4, o3);
    }
    for (a4 in k4) w4 = k4[a4], "children" == a4 ? y3 = w4 : "dangerouslySetInnerHTML" == a4 ? h3 = w4 : "value" == a4 ? g4 = w4 : "checked" == a4 ? m4 = w4 : c4 && "function" != typeof w4 || b3[a4] === w4 || F2(u5, a4, w4, b3[a4], o3);
    if (h3) c4 || v3 && (h3.__html === v3.__html || h3.__html === u5.innerHTML) || (u5.innerHTML = h3.__html), t4.__k = [];
    else if (v3 && (u5.innerHTML = ""), $2(u5, d2(y3) ? y3 : [y3], t4, i5, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e4, f5, e4 ? e4[0] : i5.__k && C2(i5, 0), c4, s3), null != e4) for (a4 = e4.length; a4--; ) _2(e4[a4]);
    c4 || (a4 = "value", "progress" == x3 && null == g4 ? u5.removeAttribute("value") : void 0 !== g4 && (g4 !== u5[a4] || "progress" == x3 && !g4 || "option" == x3 && g4 !== b3[a4]) && F2(u5, a4, g4, b3[a4], o3), a4 = "checked", void 0 !== m4 && m4 !== u5[a4] && F2(u5, a4, m4, b3[a4], o3));
  }
  return u5;
}
function V(n3, u5, t4) {
  try {
    if ("function" == typeof n3) {
      var i5 = "function" == typeof n3.__u;
      i5 && n3.__u(), i5 && null == u5 || (n3.__u = n3(u5));
    } else n3.current = u5;
  } catch (n4) {
    l2.__e(n4, t4);
  }
}
function q2(n3, u5, t4) {
  var i5, r4;
  if (l2.unmount && l2.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current !== n3.__e || V(i5, null, u5)), null != (i5 = n3.__c)) {
    if (i5.componentWillUnmount) try {
      i5.componentWillUnmount();
    } catch (n4) {
      l2.__e(n4, u5);
    }
    i5.base = i5.__P = null;
  }
  if (i5 = n3.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && q2(i5[r4], u5, t4 || "function" != typeof n3.type);
  t4 || _2(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function B2(n3, l4, u5) {
  return this.constructor(n3, u5);
}
n2 = v.slice, l2 = { __e: function(n3, l4, u5, t4) {
  for (var i5, r4, o3; l4 = l4.__; ) if ((i5 = l4.__c) && !i5.__) try {
    if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n3)), o3 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t4 || {}), o3 = i5.__d), o3) return i5.__E = i5;
  } catch (l5) {
    n3 = l5;
  }
  throw n3;
} }, u2 = 0, t2 = function(n3) {
  return null != n3 && null == n3.constructor;
}, x2.prototype.setState = function(n3, l4) {
  var u5;
  u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w2({}, this.state), "function" == typeof n3 && (n3 = n3(w2({}, u5), this.props)), n3 && w2(u5, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), M2(this));
}, x2.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M2(this));
}, x2.prototype.render = k2, i2 = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e2 = function(n3, l4) {
  return n3.__v.__b - l4.__v.__b;
}, P2.__r = 0, f2 = /(PointerCapture)$|Capture$/i, c2 = 0, s = O2(false), a2 = O2(true), h2 = 0;

// https://jsr.io/@nobody/styled-components-deno/0.8.2/domElements.ts
var elements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "use",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var domElements = new Set(elements);

// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@10.25.4/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
var i3 = Array.isArray;
function u3(e4, t4, n3, o3, i5, u5) {
  t4 || (t4 = {});
  var a4, c4, p3 = t4;
  if ("ref" in p3) for (c4 in p3 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p3[c4] = t4[c4];
  var l4 = { type: e4, props: p3, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i5, __self: u5 };
  if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p3[c4] && (p3[c4] = a4[c4]);
  return l2.vnode && l2.vnode(l4), l4;
}

// https://jsr.io/@nobody/styled-components-deno/0.8.2/styled.tsx
function toSnakeCase(obj) {
  const newObj = {};
  for (const key in obj) {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (letter) => `-${letter.toLowerCase()}`
    );
    newObj[snakeKey] = obj[key];
  }
  return newObj;
}
var UniqueUid = class {
  uid = 0;
  constructor(uid) {
    if (uid) {
      this.uid = uid;
    }
  }
  next() {
    return ++this.uid;
  }
};
var ID = new UniqueUid();
function generateClassName() {
  return `styled-component-${ID.next()}`;
}
function injectStyles(className, styles) {
  if (!document.querySelector(`.${className}`)) {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `.${className} { ${styles} }`;
    document.head.appendChild(styleSheet);
  }
}
function injectStylesObject(className, styles) {
  if (!document.querySelector(`.${className}`)) {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `.${className} ${styles}`;
    document.head.appendChild(styleSheet);
  }
}
function createElementObject(tag, defaultStyleObject) {
  let defaultStyle = JSON.stringify(toSnakeCase(defaultStyleObject), null, 2);
  defaultStyle = defaultStyle.replaceAll(",", ";");
  defaultStyle = defaultStyle.replaceAll('"', "");
  const className = generateClassName();
  const Element = (props) => {
    const { children, ...restProps } = props;
    const newstyle = defaultStyle;
    injectStylesObject(className, newstyle);
    const newProp = {
      className: props.className || className,
      ...restProps
    };
    return g2(tag, newProp, children);
  };
  return Element;
}
function createElement(tag, ostyle, ...args) {
  const className = generateClassName();
  const Element = (props) => {
    const { children, ...restProps } = props;
    let defaultStyle = "";
    const arglen = args.length;
    ostyle.forEach((stylestr, i5) => {
      if (i5 < arglen) {
        defaultStyle += stylestr + args[i5];
      } else {
        defaultStyle += stylestr;
      }
    });
    const newstyle = defaultStyle;
    injectStyles(className, newstyle);
    const newProp = {
      className: props.className || className,
      ...restProps
    };
    return g2(tag, newProp, children);
  };
  return Element;
}
function isSupportElementArray(arr) {
  if (arr.length == 0) {
    return true;
  }
  return typeof arr[0] !== "function";
}
function createElementWithProps(tag, ostyle, ...args) {
  if (isSupportElementArray(args)) {
    return createElement(tag, ostyle, ...args);
  }
  const ElementTmp = Object.assign((props) => {
    let defaultStyle = "";
    const arglen = args.length;
    ostyle.forEach((stylestr, i5) => {
      if (i5 < arglen) {
        defaultStyle += stylestr + args[i5](props);
      } else {
        defaultStyle += stylestr;
      }
    });
    const { children, ...restProps } = props;
    let className = ElementTmp.mappedId.get(props);
    if (!className) {
      className = generateClassName();
      injectStyles(className, defaultStyle);
      ElementTmp.mappedId.set(props, className);
    }
    const newProp = {
      className: props.className || className,
      ...restProps
    };
    return g2(tag, newProp, children);
  }, { mappedId: /* @__PURE__ */ new Map() });
  return ElementTmp;
}
function recreateElement(Component) {
  return (style) => {
    const defaultStyle = style.join("");
    const Element = (props) => {
      const { style: style2, children, ...restProps } = props;
      const className = generateClassName();
      injectStyles(className, defaultStyle);
      const newProps = {
        className: props.className || className,
        style: style2,
        ...restProps
      };
      return /* @__PURE__ */ u3("div", { className, children: /* @__PURE__ */ u3(Component, { ...newProps, children }) });
    };
    return Element;
  };
}
var styledTmp = recreateElement;
domElements.forEach((domElement) => {
  styledTmp[domElement] = function(style, ...args) {
    if (Array.isArray(style) && "raw" in style) {
      return createElementWithProps(
        domElement,
        style,
        ...args
      );
    }
    return createElementObject(domElement, style);
  };
});
var styled = styledTmp;

// https://jsr.io/@nobody/styled-components-deno/0.8.2/mod.ts
var mod_default = styled;

// styles/topbar.ts
var TopBar = mod_default.nav`
  backdrop-filter: blur(10px);
  overflow: hidden;
  background-color: ${({ isdark }) => {
  if (isdark) {
    return "#111111";
  }
  return "#33333067";
}};
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
  visibility: visible;
  & a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  & a.right {
    float: right
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }

  @media screen and (max-width:900px) {
    visibility: ${({ autohide }) => {
  if (autohide) {
    return "hidden";
  }
  return "visible";
}};
  }
`;
var topbar_default = TopBar;

// components/titlebar.tsx
function MainTopBar({ children }) {
  return /* @__PURE__ */ u3(topbar_default, { autohide: true, children });
}

// styles/topmainarea.ts
var TopMainAreaCSS = mod_default.section`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width:1300px) {
    display: flex;
    flex-direction: column;
  }

  background-color: black;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;
var TopTextCSS = mod_default.div`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;

`;
var TopVideoCSS = mod_default.video` 
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width:1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`;
var TopMainTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;
var TopMainSmallTitleCSS = mod_default.p`
  margin-left: 60px;
  margin-right: 60px;
  font-size: 32px;
  margin-top: 1px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width:700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`;
var topmainarea_default = TopMainAreaCSS;

// components/topmainarea.tsx
function TopMainArea({ children }) {
  return /* @__PURE__ */ u3(topmainarea_default, { id: "main", children });
}
function TopText({ children }) {
  return /* @__PURE__ */ u3(TopTextCSS, { children });
}
function TopMainAreaTitle({ children }) {
  return /* @__PURE__ */ u3(TopMainTitleCSS, { children });
}
function TopMainAreaSmallTitle({ children }) {
  return /* @__PURE__ */ u3(TopMainSmallTitleCSS, { children });
}

// styles/feature.ts
var FeatureMainCSS = mod_default.section`
  display: flex;
  flex-direction: column;

  background-color: #0c2e4d;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;
var feature_default = FeatureMainCSS;
var FeatureTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;
var FeatureCardTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 100
`;
var FeatureGridCSS = mod_default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(22em,1fr));
  width: 100%;
  margin: .5rem;
  justify-items: stretch;
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
`;
var FeatureCardCSS = mod_default.div`
  display: flex;
  flex-direction: column;
  background-color: #0d2e5f;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`;
var FeatureDescriptionCSS = mod_default.p`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  margin-top: 1px;
`;

// components/feature.tsx
function FeatureMain({ children }) {
  return /* @__PURE__ */ u3(feature_default, { id: "feature", children });
}
function FeatureAreaTitle({ children }) {
  return /* @__PURE__ */ u3(FeatureTitleCSS, { children });
}
function FeatureDisplayGrid({ children }) {
  return /* @__PURE__ */ u3(FeatureGridCSS, { children });
}
function CardTitle({ children }) {
  return /* @__PURE__ */ u3(FeatureCardTitleCSS, { children });
}
function FeatureCard({ title, children }) {
  return /* @__PURE__ */ u3(FeatureCardCSS, { children: [
    /* @__PURE__ */ u3(CardTitle, { children: title }),
    children
  ] });
}
function FeatureCardDescription({ children }) {
  return /* @__PURE__ */ u3(FeatureDescriptionCSS, { children });
}

// styles/common.ts
var InlineLinkCSS = mod_default.span`
  position: relative;
  display: inline-block;
  & .tooltiptext {
    visibility: hidden;
    background-color: #222222;
    font-size: 20px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  &:hover .tooltiptext {
    visibility: visible;
  }
`;

// components/common.tsx
function DescriptionInlineLink({ tips, link, children }) {
  return /* @__PURE__ */ u3(InlineLinkCSS, { children: [
    /* @__PURE__ */ u3("a", { href: link, children }),
    /* @__PURE__ */ u3("span", { class: "tooltiptext", children: tips })
  ] });
}

// styles/install.ts
var InstallMainCSS = mod_default.section`
  display: flex;
  flex-direction: column;

  background-color: #071521ff;
  width: 100%;

  & h1 {
    color: white
  }
  & p {
    color: white
  }
`;
var InstallTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500
`;
var InstallBodyCSS = mod_default.div`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 32px;
  margin-bottom: 300px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width:700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`;
var InstallCodeCopyCSS = mod_default.div`
  position: relative;
  color: #99c7ed;
  font-size: 26px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width:700px) {
    font-size: 20px;
  }
  & pre {
    padding: 10px;
    background-color: #0c3e4d;
    border-radius: 5px;
    overflow-x: auto
  }
  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
  }
`;

// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@11.0.0-experimental.1/node_modules/preact/hooks/dist/hooks.mjs
var t3;
var o2;
var i4;
Promise.prototype.then.bind(Promise.resolve());
var c3;
var u4 = 0;
var e3 = [];
var r3 = l.__b;
var f4 = l.__r;
var l3 = l.diffed;
var s2 = l.__c;
var m3 = l.unmount;
function a3(t4, i5) {
  l.__h && l.__h(o2, t4, u4 || i5), u4 = 0;
  const c4 = o2.data.__H || (o2.data.__H = { __: [], __h: [] });
  return t4 >= c4.__.length && c4.__.push({}), c4.__[t4];
}
function d3(n3) {
  return u4 = 1, v2(B3, n3);
}
function v2(n3, i5, c4) {
  const u5 = a3(t3++, 2);
  return u5.t = n3, u5.__i || (u5.__ = [c4 ? c4(i5) : B3(void 0, i5), (n4) => {
    const t4 = u5.t(u5.__[0], n4);
    u5.__[0] !== t4 && (u5.__ = [t4, u5.__[1]], u5.__i.rerender(u5.__i));
  }], u5.__i = o2), u5.__;
}
l.__b = (n3, t4) => {
  o2 = null, r3 && r3(n3, t4);
}, l.__r = (n3) => {
  f4 && f4(n3), o2 = n3, t3 = 0, o2.data && o2.data.__H && (i4 === o2 ? (o2.data.__H.__h = [], o2.__h = [], o2.data.__H.__.forEach((n4) => {
    n4.o && (n4.o = void 0), n4.i && (n4.i = void 0);
  })) : (n3.data && n3.data.__H && n3.data && n3.data.__H.__.forEach((n4) => {
    n4.o && (n4.__H = n4.o, n4.o = void 0), n4.i && (n4.__ = n4.i, n4.i = void 0);
  }), o2.data.__H.__h.forEach(k3), o2.data.__H.__h.forEach(w3), o2.data.__H.__h = [])), i4 = n3;
}, l.diffed = (t4) => {
  l3 && l3(t4), i4 = void 0, t4.data && t4.data.__H && t4.data.__H.__h.length && (1 !== e3.push(t4) && c3 === l.requestAnimationFrame || (c3 = l.requestAnimationFrame, (c3 || j2)(b2)));
}, l.__c = (t4, o3) => {
  o3.some((t5) => {
    try {
      t5.data && t5.data.__H && t5.data && t5.data.__H.__.forEach((n3) => {
        n3.o && (n3.__H = n3.o, n3.o = void 0), n3.i && (n3.__ = n3.i, n3.i = void 0);
      }), t5.__h.forEach(k3), t5.__h = t5.__h.filter((n3) => !n3.__ || w3(n3));
    } catch (i5) {
      o3.some((n3) => {
        n3.__h && (n3.__h = []);
      }), o3 = [], l.__e(i5, t5);
    }
  }), s2 && s2(t4, o3);
}, l.unmount = (t4) => {
  if (m3 && m3(t4), t4.data && t4.data.__H) {
    let o3;
    t4.data.__H.__.forEach((n3) => {
      try {
        k3(n3);
      } catch (n4) {
        o3 = n4;
      }
    }), o3 && l.__e(o3, t4);
  }
};
var P3 = l.__e;
function b2() {
  let t4;
  for (; t4 = e3.shift(); ) if (2048 & ~t4.flags) try {
    t4.data.__H.__h.forEach(k3), t4.data.__H.__h.forEach(w3), t4.data.__H.__h = [];
  } catch (o3) {
    t4.data.__H.__h = [], l.__e(o3, t4);
  }
}
l.__e = function(n3, t4) {
  let o3 = t4;
  for (; o3 = o3.__; ) if (o3.data && o3.data.__e) return o3.data.__e(n3, t4);
  P3(n3, t4);
};
var g3 = "function" == typeof requestAnimationFrame;
function j2(n3) {
  const t4 = () => {
    clearTimeout(o3), g3 && cancelAnimationFrame(i5), setTimeout(n3);
  }, o3 = setTimeout(t4, 100);
  let i5;
  g3 && (i5 = requestAnimationFrame(t4));
}
function k3(n3) {
  const t4 = o2;
  let i5 = n3.__c;
  "function" == typeof i5 && (n3.__c = void 0, i5()), o2 = t4;
}
function w3(n3) {
  const t4 = o2;
  n3.__c = n3.__(), o2 = t4;
}
function B3(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// components/install.tsx
function InstallMain({ children }) {
  return /* @__PURE__ */ u3(InstallMainCSS, { id: "install", children });
}
function InstallAreaTitle({ children }) {
  return /* @__PURE__ */ u3(InstallTitleCSS, { children });
}
function InstallBody({ children }) {
  return /* @__PURE__ */ u3(InstallBodyCSS, { children });
}
function InstallCodeBlockCopy({ code }) {
  const [copied, setCopied] = d3(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ u3(InstallCodeCopyCSS, { children: [
    /* @__PURE__ */ u3("pre", { children: /* @__PURE__ */ u3("code", { children: code }) }),
    /* @__PURE__ */ u3(
      "button",
      {
        onClick: copyToClipboard,
        children: copied ? "Copied!" : "Copy"
      }
    )
  ] });
}

// styles/contribute.ts
var ContributeMainCSS = mod_default.section`
  display: flex;
  flex-direction: column;

  background-color: white;
  width: 100%;

`;
var ContributeTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 1em;
  font-weight: 500
`;

// components/contribute.tsx
function ContributeMain({ children }) {
  return /* @__PURE__ */ u3(ContributeMainCSS, { id: "contribute", children });
}
function ContributeTitle({ children }) {
  return /* @__PURE__ */ u3(ContributeTitleCSS, { children });
}

// styles/sidebar.ts
var SideBar = mod_default.li`
  backdrop-filter: blur(10px);
  width: ${({ width }) => width ? width : 180}px;
  height: 100%;
  background-color: #333330aa;
  position: fixed;
  top: ${({ top }) => top ? top : 0}px;
  z-index: ${({ zIndex }) => zIndex ? zIndex : 3};
  visibility: ${({ autohide }) => autohide ? "hidden" : "visible"};
  list-style-type: none;
  display: flex;
  /* move flex-items in column */
  flex-direction: column;

  left: ${({ isOpen }) => isOpen ? "0" : "-200px"} ;
  transition: left 0.3s ease-in-out;

  @media screen and (max-width:900px) {
    visibility: visible
  }
  & button {
    background-color: transparent;
    border-width: 0;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`;
var SideBarA = mod_default.a`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({ isBottom }) => isBottom ? "auto" : "0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
var MenuButton = mod_default.button`
  position: fixed;
  top: ${({ top }) => top ? top : 20}px;
  left: ${({ isOpen, left }) => isOpen ? left ? left : 210 : 20}px ;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({ alwaysShown }) => alwaysShown ? "visible" : "hidden"};
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width:900px) {
    visibility: visible;
  }

`;
var SearchButton = mod_default.button`
  position: fixed;
  bottom: ${({ bottom }) => bottom ? bottom : 20}px;
  left: ${({ isOpen, left }) => isOpen ? left ? left : 210 : 20}px ;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({ alwaysShown }) => alwaysShown ? "visible" : "hidden"};
  background-image: url("static/search_icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width:900px) {
    visibility: visible;
  }

`;

// pages/home.tsx
function Header() {
  return /* @__PURE__ */ u3(MainTopBar, { children: [
    /* @__PURE__ */ u3("a", { href: "#main", children: "Neocmakelsp" }),
    /* @__PURE__ */ u3("a", { href: "#feature", children: "Features" }),
    /* @__PURE__ */ u3("a", { href: "#install", children: "Install" }),
    /* @__PURE__ */ u3("a", { href: "/doc", children: "Document" }),
    /* @__PURE__ */ u3("a", { class: "right", href: "https://github.com/neocmakelsp/neocmakelsp", children: "Github" })
  ] });
}
function Home() {
  const [isOpen, setIsOpen] = d3(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const backString = "<<";
  return /* @__PURE__ */ u3(k2, { children: [
    /* @__PURE__ */ u3(MenuButton, { isOpen, onClick: () => toggleOpen() }),
    /* @__PURE__ */ u3(SideBar, { isOpen, autohide: true, children: [
      /* @__PURE__ */ u3(SideBarA, { href: "#main", children: "Neocmakelsp" }),
      /* @__PURE__ */ u3(SideBarA, { href: "#feature", children: "Features" }),
      /* @__PURE__ */ u3(SideBarA, { href: "#install", children: "Install" }),
      /* @__PURE__ */ u3(SideBarA, { href: "/doc", children: "Document" }),
      /* @__PURE__ */ u3(
        SideBarA,
        {
          isBottom: true,
          href: "https://github.com/neocmakelsp/neocmakelsp",
          children: "Github"
        }
      ),
      /* @__PURE__ */ u3("button", { class: "bottom", onClick: () => toggleOpen(), children: backString })
    ] }),
    /* @__PURE__ */ u3(TopMainArea, { children: [
      /* @__PURE__ */ u3(TopText, { children: [
        /* @__PURE__ */ u3(TopMainAreaTitle, { children: "neocmakelsp" }),
        /* @__PURE__ */ u3(TopMainAreaSmallTitle, { children: [
          "Another lsp for cmake made with rust powered by tower-lsp with lots of",
          " ",
          /* @__PURE__ */ u3(DescriptionInlineLink, { link: "#feature", tips: "features", children: "features" }),
          ". Neocmakelsp use the",
          " ",
          /* @__PURE__ */ u3(
            DescriptionInlineLink,
            {
              link: "https://microsoft.github.io/language-server-protocol/",
              tips: "microsoft.github.io",
              children: "Language Server Protocol"
            }
          ),
          " ",
          "to provide various features for cmake, make it easiler for developing cpp program."
        ] })
      ] }),
      /* @__PURE__ */ u3(TopVideoCSS, { autoplay: true, loop: true, muted: true, children: /* @__PURE__ */ u3("source", { src: "/static/neocmakelsp.mp4", type: "video/mp4" }) })
    ] }),
    /* @__PURE__ */ u3(FeatureMain, { children: [
      /* @__PURE__ */ u3(FeatureAreaTitle, { children: "Features" }),
      /* @__PURE__ */ u3(FeatureDisplayGrid, { children: [
        /* @__PURE__ */ u3(FeatureCard, { title: "Completion Support", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "Support complete base cmake commands, cmake package name and pkgconfig package name. It can even complete function in packages." }) }),
        /* @__PURE__ */ u3(FeatureCard, { title: "Hover Support", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "Support show the document of base commands. Support show where base information about where the function is from. Support show the information about the package." }) }),
        " ",
        /* @__PURE__ */ u3(FeatureCard, { title: "Jump Support", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "Support jump between the cmake files. Support jump to the definition of the function in cmake packages." }) }),
        /* @__PURE__ */ u3(FeatureCard, { title: "Format support", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "NeoCMakeLsp has already support for builtin format, with the power of tree-sitter." }) }),
        /* @__PURE__ */ u3(FeatureCard, { title: "Semaction Highlight", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "Yes, it support lsp highlight. So now your cmake files in vscode will become light can colorful!!" }) }),
        /* @__PURE__ */ u3(FeatureCard, { title: "Lint and gammar check", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "NeoCMakeLsp support lint check and base gammar check. Lint check is under the support of cmake-lint, and gammar check is by tree-sitter." }) }),
        /* @__PURE__ */ u3(FeatureCard, { title: "Document symbol", children: /* @__PURE__ */ u3(FeatureCardDescription, { children: "Support lsp document_symbol, which provide folder support in vscode and outline support." }) })
      ] })
    ] }),
    /* @__PURE__ */ u3(InstallMain, { children: [
      /* @__PURE__ */ u3(InstallAreaTitle, { children: "How to Install" }),
      /* @__PURE__ */ u3(InstallBody, { children: [
        /* @__PURE__ */ u3("p", { children: [
          "The lsp itself can be installed either from",
          " ",
          /* @__PURE__ */ u3(
            DescriptionInlineLink,
            {
              link: "https://crates.io/crates/neocmakelsp",
              tips: "need to install rust",
              children: "crates.io"
            }
          ),
          " ",
          "or from",
          " ",
          /* @__PURE__ */ u3(
            DescriptionInlineLink,
            {
              link: "https://github.com/neocmakelsp/neocmakelsp/releases",
              tips: "Github",
              children: "latest release"
            }
          ),
          " ",
          "from github."
        ] }),
        /* @__PURE__ */ u3("p", { children: [
          "For vscode user, you can use plugin",
          " ",
          /* @__PURE__ */ u3(
            DescriptionInlineLink,
            {
              link: "https://github.com/neocmakelsp/neocmakelsp-vscode",
              tips: "can be installed from vscode / codeoss market",
              children: "neocmakelsp-vscode"
            }
          ),
          ", for neovim or emacs user, you should read our README.md."
        ] }),
        /* @__PURE__ */ u3("p", { children: "To install the target, run follow command:" }),
        /* @__PURE__ */ u3(InstallCodeBlockCopy, { code: "cargo install neocmakelsp" }),
        /* @__PURE__ */ u3("p", { children: "To install vscode plugin on vscode, run:" }),
        /* @__PURE__ */ u3(InstallCodeBlockCopy, { code: "ext install Decodetalkers.neocmakelsp-vscode" })
      ] })
    ] }),
    /* @__PURE__ */ u3(ContributeMain, { children: /* @__PURE__ */ u3(ContributeTitle, { children: "You can help and make contributions for us on the Github." }) })
  ] });
}

// src/main.tsx
var mount = document.getElementById("mount");
if (mount) {
  Q(/* @__PURE__ */ u3(Home, {}), mount);
}
var header = document.getElementById("header");
if (header) {
  Q(/* @__PURE__ */ u3(Header, {}), header);
}
