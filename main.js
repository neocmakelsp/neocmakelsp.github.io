// ../../../.cache/deno/deno_esbuild/preact@10.23.2/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c;
var s;
var a;
var h = {};
var p = [];
var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var y = Array.isArray;
function d(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function w(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function _(l2, u3, t2) {
  var i3, o2, r2, f3 = {};
  for (r2 in u3) "key" == r2 ? i3 = u3[r2] : "ref" == r2 ? o2 = u3[r2] : f3[r2] = u3[r2];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f3[r2] && (f3[r2] = l2.defaultProps[r2]);
  return g(l2, f3, i3, o2, null);
}
function g(n2, t2, i3, o2, r2) {
  var f3 = { type: n2, props: t2, key: i3, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1, __u: 0 };
  return null == r2 && null != l.vnode && l.vnode(f3), f3;
}
function k(n2) {
  return n2.children;
}
function b(n2, l2) {
  this.props = n2, this.context = l2;
}
function x(n2, l2) {
  if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l2, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
  var n2, u3, t2, o2, r2, e2, c2, s2;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u3 = i.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j(c2, o2, s2), o2.__e != e2 && C(o2)), i.length > u3 && i.sort(f));
  P.__r = 0;
}
function S(n2, l2, u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, v2, y2, d2, w2, _2 = t2 && t2.__k || p, g2 = l2.length;
  for (u3.__d = e2, $(u3, l2, _2), e2 = u3.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u3.__k[a2]) && "boolean" != typeof y2 && "function" != typeof y2 && (v2 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a2, O(n2, y2, v2, i3, o2, r2, f3, e2, c2, s2), d2 = y2.__e, y2.ref && v2.ref != y2.ref && (v2.ref && N(v2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || v2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u3.__d = e2, u3.__e = w2;
}
function $(n2, l2, u3) {
  var t2, i3, o2, r2, f3, e2 = l2.length, c2 = u3.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) r2 = t2 + a2, null != (i3 = n2.__k[t2] = null == (i3 = l2[t2]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(k, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = L(i3, u3, r2, s2), i3.__i = f3, o2 = null, -1 !== f3 && (s2--, (o2 = u3[f3]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f3 && a2--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r2 && (f3 == r2 - 1 ? a2-- : f3 == r2 + 1 ? a2++ : f3 > r2 ? s2 > e2 - r2 ? a2 += f3 - r2 : a2-- : f3 < r2 && (f3 == r2 - a2 ? a2 -= f3 - r2 : a2++), f3 !== t2 + a2 && (i3.__u |= 65536))) : (o2 = u3[r2]) && null == o2.key && o2.__e && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2, false), u3[r2] = null, s2--);
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u3[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2));
}
function I(n2, l2, u3) {
  var t2, i3;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i3 = 0; t2 && i3 < t2.length; i3++) t2[i3] && (t2[i3].__ = n2, l2 = I(t2[i3], l2, u3));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u3.contains(l2) && (l2 = x(n2)), u3.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function L(n2, l2, u3, t2) {
  var i3 = n2.key, o2 = n2.type, r2 = u3 - 1, f3 = u3 + 1, e2 = l2[u3];
  if (null === e2 || e2 && i3 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u3;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f3 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f3 < l2.length) {
      if ((e2 = l2[f3]) && 0 == (131072 & e2.__u) && i3 == e2.key && o2 === e2.type) return f3;
      f3++;
    }
  }
  return -1;
}
function T(n2, l2, u3) {
  "-" === l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || v.test(l2) ? u3 : u3 + "px";
}
function A(n2, l2, u3, t2, i3) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || T(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] === t2[l2] || T(n2.style, l2, u3[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = e, n2.addEventListener(l2, o2 ? s : c, o2)) : n2.removeEventListener(l2, o2 ? s : c, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = e++;
      else if (u3.t < t2.u) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t2, i3, o2, r2, f3, e2, c2, s2) {
  var a2, h2, p2, v2, w2, _2, g2, m, x2, C2, M2, P2, $2, I2, H, L2, T2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
  n: if ("function" == typeof T2) try {
    if (m = u3.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i3[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i3, t2.__c ? g2 = (h2 = u3.__c = t2.__c).__ = h2.__E : (x2 ? u3.__c = h2 = new T2(m, M2) : (u3.__c = h2 = new b(m, M2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i3, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d({}, h2.__s)), d(h2.__s, T2.getDerivedStateFromProps(m, h2.__s))), v2 = h2.props, w2 = h2.state, h2.__v = u3, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m, h2.__s, M2) || u3.__v === t2.__v)) {
        for (u3.__v !== t2.__v && (h2.props = m, h2.state = h2.__s, h2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.forEach(function(n3) {
          n3 && (n3.__ = u3);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && f3.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, w2, _2);
      });
    }
    if (h2.context = M2, h2.props = m, h2.__P = n2, h2.__e = false, $2 = l.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u3), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u3), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i3 = d(d({}, i3), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, w2)), S(n2, y(L2 = null != a2 && a2.type === k && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u3, t2, i3, o2, r2, f3, e2, c2, s2), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && f3.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u3.__v = null, c2 || null != r2) {
      for (u3.__u |= c2 ? 160 : 32; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u3.__e = e2;
    } else u3.__e = t2.__e, u3.__k = t2.__k;
    l.__e(n3, u3, t2);
  }
  else null == r2 && u3.__v === t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : u3.__e = z(t2.__e, u3, t2, i3, o2, r2, f3, c2, s2);
  (a2 = l.diffed) && a2(u3);
}
function j(n2, u3, t2) {
  u3.__d = void 0;
  for (var i3 = 0; i3 < t2.length; i3++) N(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function z(l2, u3, t2, i3, o2, r2, f3, e2, c2) {
  var s2, a2, p2, v2, d2, _2, g2, m = t2.props, k2 = u3.props, b2 = u3.type;
  if ("svg" === b2 ? o2 = "http://www.w3.org/2000/svg" : "math" === b2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != r2) {
    for (s2 = 0; s2 < r2.length; s2++) if ((d2 = r2[s2]) && "setAttribute" in d2 == !!b2 && (b2 ? d2.localName === b2 : 3 === d2.nodeType)) {
      l2 = d2, r2[s2] = null;
      break;
    }
  }
  if (null == l2) {
    if (null === b2) return document.createTextNode(k2);
    l2 = document.createElementNS(o2, b2, k2.is && k2), r2 = null, e2 = false;
  }
  if (null === b2) m === k2 || e2 && l2.data === k2 || (l2.data = k2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), m = t2.props || h, !e2 && null != r2) for (m = {}, s2 = 0; s2 < l2.attributes.length; s2++) m[(d2 = l2.attributes[s2]).name] = d2.value;
    for (s2 in m) if (d2 = m[s2], "children" == s2) ;
    else if ("dangerouslySetInnerHTML" == s2) p2 = d2;
    else if ("key" !== s2 && !(s2 in k2)) {
      if ("value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2) continue;
      A(l2, s2, null, d2, o2);
    }
    for (s2 in k2) d2 = k2[s2], "children" == s2 ? v2 = d2 : "dangerouslySetInnerHTML" == s2 ? a2 = d2 : "value" == s2 ? _2 = d2 : "checked" == s2 ? g2 = d2 : "key" === s2 || e2 && "function" != typeof d2 || m[s2] === d2 || A(l2, s2, d2, m[s2], o2);
    if (a2) e2 || p2 && (a2.__html === p2.__html || a2.__html === l2.innerHTML) || (l2.innerHTML = a2.__html), u3.__k = [];
    else if (p2 && (l2.innerHTML = ""), S(l2, y(v2) ? v2 : [v2], u3, t2, i3, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o2, r2, f3, r2 ? r2[0] : t2.__k && x(t2, 0), e2, c2), null != r2) for (s2 = r2.length; s2--; ) null != r2[s2] && w(r2[s2]);
    e2 || (s2 = "value", void 0 !== _2 && (_2 !== l2[s2] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m[s2]) && A(l2, s2, _2, m[s2], o2), s2 = "checked", void 0 !== g2 && g2 !== l2[s2] && A(l2, s2, g2, m[s2], o2));
  }
  return l2;
}
function N(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function V(n2, u3, t2) {
  var i3, o2;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (o2 = 0; o2 < i3.length; o2++) i3[o2] && V(i3[o2], u3, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u3) {
  return this.constructor(n2, u3);
}
function B(u3, t2, i3) {
  var o2, r2, f3, e2;
  l.__ && l.__(u3, t2), r2 = (o2 = "function" == typeof i3) ? null : i3 && i3.__k || t2.__k, f3 = [], e2 = [], O(t2, u3 = (!o2 && i3 || t2).__k = _(k, null, [u3]), r2 || h, h, t2.namespaceURI, !o2 && i3 ? [i3] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f3, !o2 && i3 ? i3 : r2 ? r2.__e : t2.firstChild, o2, e2), j(f3, u3, e2);
}
n = p.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i3, o2, r2; l2 = l2.__; ) if ((i3 = l2.__c) && !i3.__) try {
    if ((o2 = i3.constructor) && null != o2.getDerivedStateFromError && (i3.setState(o2.getDerivedStateFromError(n2)), r2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), r2 = i3.__d), r2) return i3.__E = i3;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

// https://jsr.io/@nobody/styled-components-deno/0.4.0/domElements.ts
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

// ../../../.cache/deno/deno_esbuild/preact@10.23.2/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n2, o2, i3, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// https://jsr.io/@nobody/styled-components-deno/0.4.0/styled.tsx
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
  let defaultStyle = JSON.stringify(defaultStyleObject, null, 2);
  defaultStyle = defaultStyle.replaceAll(",", ";");
  defaultStyle = defaultStyle.replaceAll('"', "");
  const Element = (props) => {
    const { style, children, ...restProps } = props;
    const newstyle = style || defaultStyle;
    const className = generateClassName();
    injectStylesObject(className, newstyle);
    const newProp = {
      className: props.className || className,
      style,
      ...restProps
    };
    return _(tag, newProp, children);
  };
  return Element;
}
function createElement(tag, defaultStyle) {
  const Element = (props) => {
    const { style, children, ...restProps } = props;
    const newstyle = style || defaultStyle;
    const className = generateClassName();
    injectStyles(className, newstyle);
    const newProp = {
      className: props.className || className,
      style,
      ...restProps
    };
    return _(tag, newProp, children);
  };
  return Element;
}
function recreateElement(Component) {
  return (style) => {
    const defaultStyle = style.join("");
    const Element = (props) => {
      const { style: style2, children, ...restProps } = props;
      const newstyle = style2 || defaultStyle;
      const className = generateClassName();
      injectStyles(className, newstyle);
      const newProps = {
        className: props.className || className,
        style: style2,
        ...restProps
      };
      return /* @__PURE__ */ u2("div", { className, children: /* @__PURE__ */ u2(Component, { ...newProps, children }) });
    };
    return Element;
  };
}
var styledTmp = recreateElement;
domElements.forEach((domElement) => {
  styledTmp[domElement] = (style) => {
    if (Array.isArray(style) && "raw" in style) {
      const style_css = style.join("");
      return createElement(domElement, style_css);
    }
    return createElementObject(domElement, style);
  };
});
var styled = styledTmp;

// https://jsr.io/@nobody/styled-components-deno/0.4.0/mod.ts
var mod_default = styled;

// styles/topbar.ts
var TopBar = mod_default.nav`
  backdrop-filter: blur(5px);
  overflow: hidden;
  background-color: #333;
  opacity: 0.8;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
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
`;
var topbar_default = TopBar;

// components/titlebar.tsx
function TopBar2({ children }) {
  return /* @__PURE__ */ u2(topbar_default, { children });
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
  margin-left: 70px;
  margin-right: 70px;
  font-size: 2em;
  margin-top: 1px;
  & span {
    font-size: 32px;
  }
`;
var topmainarea_default = TopMainAreaCSS;

// components/topmainarea.tsx
function TopMainArea({ children }) {
  return /* @__PURE__ */ u2(topmainarea_default, { id: "main", children });
}
function TopText({ children }) {
  return /* @__PURE__ */ u2(TopTextCSS, { children });
}
function TopMainAreaTitle({ children }) {
  return /* @__PURE__ */ u2(TopMainTitleCSS, { children });
}
function TopMainAreaSmallTitle({ children }) {
  return /* @__PURE__ */ u2(TopMainSmallTitleCSS, { children });
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
  grid-template-columns: repeat(auto-fill,minmax(23em,1fr));
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
  return /* @__PURE__ */ u2(feature_default, { id: "feature", children });
}
function FeatureAreaTitle({ children }) {
  return /* @__PURE__ */ u2(FeatureTitleCSS, { children });
}
function FeatureDisplayGrid({ children }) {
  return /* @__PURE__ */ u2(FeatureGridCSS, { children });
}
function CardTitle({ children }) {
  return /* @__PURE__ */ u2(FeatureCardTitleCSS, { children });
}
function FeatureCard({ title, children }) {
  return /* @__PURE__ */ u2(FeatureCardCSS, { children: [
    /* @__PURE__ */ u2(CardTitle, { children: title }),
    children
  ] });
}
function FeatureCardDescription({ children }) {
  return /* @__PURE__ */ u2(FeatureDescriptionCSS, { children });
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
  return /* @__PURE__ */ u2(InlineLinkCSS, { children: [
    /* @__PURE__ */ u2("a", { href: link, children }),
    /* @__PURE__ */ u2("span", { class: "tooltiptext", children: tips })
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
  font-size: 30px;
  margin-bottom: 300px;
  & span {
    font-size: 32px;
  }
`;

// components/install.tsx
function InstallMain({ children }) {
  return /* @__PURE__ */ u2(InstallMainCSS, { id: "install", children });
}
function InstallAreaTitle({ children }) {
  return /* @__PURE__ */ u2(InstallTitleCSS, { children });
}
function InstallBody({ children }) {
  return /* @__PURE__ */ u2(InstallBodyCSS, { children });
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
  return /* @__PURE__ */ u2(ContributeMainCSS, { id: "contribute", children });
}
function ContributeTitle({ children }) {
  return /* @__PURE__ */ u2(ContributeTitleCSS, { children });
}

// pages/home.tsx
function Home() {
  return /* @__PURE__ */ u2("div", { children: [
    /* @__PURE__ */ u2(TopBar2, { children: [
      /* @__PURE__ */ u2("a", { href: "/", children: "NeoCMakeLsp" }),
      /* @__PURE__ */ u2("a", { class: "right", href: "https://github.com/neocmakelsp/neocmakelsp", children: "Github" })
    ] }),
    /* @__PURE__ */ u2(TopMainArea, { children: [
      /* @__PURE__ */ u2(TopText, { children: [
        /* @__PURE__ */ u2(TopMainAreaTitle, { children: "neocmakelsp" }),
        /* @__PURE__ */ u2(TopMainAreaSmallTitle, { children: [
          "Another lsp for cmake made with rust powered by tower-lsp with lots of",
          " ",
          /* @__PURE__ */ u2(DescriptionInlineLink, { link: "#feature", tips: "features", children: "features" }),
          ". Neocmakelsp use the",
          " ",
          /* @__PURE__ */ u2(
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
      /* @__PURE__ */ u2(TopVideoCSS, { autoplay: true, loop: true, muted: true, children: /* @__PURE__ */ u2("source", { src: "/static/neocmakelsp.mp4", type: "video/mp4" }) })
    ] }),
    /* @__PURE__ */ u2(FeatureMain, { children: [
      /* @__PURE__ */ u2(FeatureAreaTitle, { children: "Features" }),
      /* @__PURE__ */ u2(FeatureDisplayGrid, { children: [
        /* @__PURE__ */ u2(FeatureCard, { title: "Completion Support", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "Support complete base cmake commands, cmake package name and pkgconfig package name. It can even complete function in packages." }) }),
        /* @__PURE__ */ u2(FeatureCard, { title: "Hover Support", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "Support show the document of base commands. Support show where base information about where the function is from. Support show the information about the package." }) }),
        " ",
        /* @__PURE__ */ u2(FeatureCard, { title: "Jump Support", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "Support jump between the cmake files. Support jump to the definition of the function in cmake packages." }) }),
        /* @__PURE__ */ u2(FeatureCard, { title: "Format support", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "NeoCMakeLsp has already support for builtin format, with the power of tree-sitter." }) }),
        /* @__PURE__ */ u2(FeatureCard, { title: "Semaction Highlight", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "Yes, it support lsp highlight. So now your cmake files in vscode will become light can colorful!!" }) }),
        /* @__PURE__ */ u2(FeatureCard, { title: "Lint and gammar check", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "NeoCMakeLsp support lint check and base gammar check. Lint check is under the support of cmake-lint, and gammar check is by tree-sitter." }) }),
        /* @__PURE__ */ u2(FeatureCard, { title: "Document symbol", children: /* @__PURE__ */ u2(FeatureCardDescription, { children: "Support lsp document_symbol, which provide folder support in vscode and outline support." }) })
      ] })
    ] }),
    /* @__PURE__ */ u2(InstallMain, { children: [
      /* @__PURE__ */ u2(InstallAreaTitle, { children: "How to Install" }),
      /* @__PURE__ */ u2(InstallBody, { children: [
        /* @__PURE__ */ u2("p", { children: [
          "The lsp itself can be installed either from",
          " ",
          /* @__PURE__ */ u2(
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
          /* @__PURE__ */ u2(
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
        /* @__PURE__ */ u2("p", { children: [
          "For vscode user, you can use plugin",
          " ",
          /* @__PURE__ */ u2(
            DescriptionInlineLink,
            {
              link: "https://github.com/neocmakelsp/neocmakelsp-vscode",
              tips: "can be installed from vscode / codeoss market",
              children: "neocmakelsp-vscode"
            }
          ),
          ", for neovim or emacs user, you should read our README.md."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u2(ContributeMain, { children: /* @__PURE__ */ u2(ContributeTitle, { children: "You can help and make contributions for us on the Github." }) })
  ] });
}

// src/main.tsx
var mount = document.getElementById("mount");
if (mount) {
  B(/* @__PURE__ */ u2(App, {}), mount);
}
function App() {
  return /* @__PURE__ */ u2(Home, {});
}
