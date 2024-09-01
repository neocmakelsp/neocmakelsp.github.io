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
function d(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function w(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function _(l3, u4, t3) {
  var i4, o3, r3, f4 = {};
  for (r3 in u4) "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = u4[r3];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f4[r3] && (f4[r3] = l3.defaultProps[r3]);
  return g(l3, f4, i4, o3, null);
}
function g(n2, t3, i4, o3, r3) {
  var f4 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
  return null == r3 && null != l.vnode && l.vnode(f4), f4;
}
function k(n2) {
  return n2.children;
}
function b(n2, l3) {
  this.props = n2, this.context = l3;
}
function x(n2, l3) {
  if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l3, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
      n2.__e = n2.__c.base = u4.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
  var n2, u4, t3, o3, r3, e3, c3, s3;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u4 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u4 && i.sort(f));
  P.__r = 0;
}
function S(n2, l3, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
  var a3, v3, y2, d3, w3, _2 = t3 && t3.__k || p, g2 = l3.length;
  for (u4.__d = e3, $(u4, l3, _2), e3 = u4.__d, a3 = 0; a3 < g2; a3++) null != (y2 = u4.__k[a3]) && "boolean" != typeof y2 && "function" != typeof y2 && (v3 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a3, O(n2, y2, v3, i4, o3, r3, f4, e3, c3, s3), d3 = y2.__e, y2.ref && v3.ref != y2.ref && (v3.ref && N(v3.ref, null, y2), s3.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), 65536 & y2.__u || v3.__k === y2.__k ? e3 = I(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u4.__d = e3, u4.__e = w3;
}
function $(n2, l3, u4) {
  var t3, i4, o3, r3, f4, e3 = l3.length, c3 = u4.length, s3 = c3, a3 = 0;
  for (n2.__k = [], t3 = 0; t3 < e3; t3++) r3 = t3 + a3, null != (i4 = n2.__k[t3] = null == (i4 = l3[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(k, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f4 = L(i4, u4, r3, s3), i4.__i = f4, o3 = null, -1 !== f4 && (s3--, (o3 = u4[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 == r3 - 1 ? a3-- : f4 == r3 + 1 ? a3++ : f4 > r3 ? s3 > e3 - r3 ? a3 += f4 - r3 : a3-- : f4 < r3 && (f4 == r3 - a3 ? a3 -= f4 - r3 : a3++), f4 !== t3 + a3 && (i4.__u |= 65536))) : (o3 = u4[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u4[r3] = null, s3--);
  if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u4[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
}
function I(n2, l3, u4) {
  var t3, i4;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = I(t3[i4], l3, u4));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u4.contains(l3) && (l3 = x(n2)), u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 === l3.nodeType);
  return l3;
}
function L(n2, l3, u4, t3) {
  var i4 = n2.key, o3 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l3[u4];
  if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u4;
  if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f4 < l3.length; ) {
    if (r3 >= 0) {
      if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return r3;
      r3--;
    }
    if (f4 < l3.length) {
      if ((e3 = l3[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return f4;
      f4++;
    }
  }
  return -1;
}
function T(n2, l3, u4) {
  "-" === l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || v.test(l3) ? u4 : u4 + "px";
}
function A(n2, l3, u4, t3, i4) {
  var o3;
  n: if ("style" === l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] === t3[l3] || T(n2.style, l3, u4[l3]);
  }
  else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function F(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4.t) u4.t = e++;
      else if (u4.t < t3.u) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n2, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
  var a3, h3, p3, v3, w3, _2, g2, m2, x2, C2, M2, P2, $2, I2, H, L2, T2 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof T2) try {
    if (m2 = u4.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a3 = T2.contextType) && i4[a3.__c], M2 = a3 ? C2 ? C2.props.value : a3.__ : i4, t3.__c ? g2 = (h3 = u4.__c = t3.__c).__ = h3.__E : (x2 ? u4.__c = h3 = new T2(m2, M2) : (u4.__c = h3 = new b(m2, M2), h3.constructor = T2, h3.render = q), C2 && C2.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m2, h3.__s))), v3 = h3.props, w3 = h3.state, h3.__v = u4, p3) x2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, M2) || u4.__v === t3.__v)) {
        for (u4.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
          n3 && (n3.__ = u4);
        }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
        h3._sb = [], h3.__h.length && f4.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, M2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, w3, _2);
      });
    }
    if (h3.context = M2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
      for (h3.state = h3.__s, h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++I2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, w3)), S(n2, y(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u4, t3, i4, o3, r3, f4, e3, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && f4.push(h3), g2 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != r3) {
      for (u4.__u |= c3 ? 160 : 32; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
      r3[r3.indexOf(e3)] = null, u4.__e = e3;
    } else u4.__e = t3.__e, u4.__k = t3.__k;
    l.__e(n3, u4, t3);
  }
  else null == r3 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = z(t3.__e, u4, t3, i4, o3, r3, f4, c3, s3);
  (a3 = l.diffed) && a3(u4);
}
function j(n2, u4, t3) {
  u4.__d = void 0;
  for (var i4 = 0; i4 < t3.length; i4++) N(t3[i4], t3[++i4], t3[++i4]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function z(l3, u4, t3, i4, o3, r3, f4, e3, c3) {
  var s3, a3, p3, v3, d3, _2, g2, m2 = t3.props, k3 = u4.props, b2 = u4.type;
  if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r3) {
    for (s3 = 0; s3 < r3.length; s3++) if ((d3 = r3[s3]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
      l3 = d3, r3[s3] = null;
      break;
    }
  }
  if (null == l3) {
    if (null === b2) return document.createTextNode(k3);
    l3 = document.createElementNS(o3, b2, k3.is && k3), r3 = null, e3 = false;
  }
  if (null === b2) m2 === k3 || e3 && l3.data === k3 || (l3.data = k3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), m2 = t3.props || h, !e3 && null != r3) for (m2 = {}, s3 = 0; s3 < l3.attributes.length; s3++) m2[(d3 = l3.attributes[s3]).name] = d3.value;
    for (s3 in m2) if (d3 = m2[s3], "children" == s3) ;
    else if ("dangerouslySetInnerHTML" == s3) p3 = d3;
    else if ("key" !== s3 && !(s3 in k3)) {
      if ("value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3) continue;
      A(l3, s3, null, d3, o3);
    }
    for (s3 in k3) d3 = k3[s3], "children" == s3 ? v3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? _2 = d3 : "checked" == s3 ? g2 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m2[s3] === d3 || A(l3, s3, d3, m2[s3], o3);
    if (a3) e3 || p3 && (a3.__html === p3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u4.__k = [];
    else if (p3 && (l3.innerHTML = ""), S(l3, y(v3) ? v3 : [v3], u4, t3, i4, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r3, f4, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3) for (s3 = r3.length; s3--; ) null != r3[s3] && w(r3[s3]);
    e3 || (s3 = "value", void 0 !== _2 && (_2 !== l3[s3] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s3]) && A(l3, s3, _2, m2[s3], o3), s3 = "checked", void 0 !== g2 && g2 !== l3[s3] && A(l3, s3, g2, m2[s3], o3));
  }
  return l3;
}
function N(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i4 = "function" == typeof n2.__u;
      i4 && n2.__u(), i4 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function V(n2, u4, t3) {
  var i4, o3;
  if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u4)), null != (i4 = n2.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n2.__k) for (o3 = 0; o3 < i4.length; o3++) i4[o3] && V(i4[o3], u4, t3 || "function" != typeof n2.type);
  t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function B(u4, t3, i4) {
  var o3, r3, f4, e3;
  l.__ && l.__(u4, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f4 = [], e3 = [], O(t3, u4 = (!o3 && i4 || t3).__k = _(k, null, [u4]), r3 || h, h, t3.namespaceURI, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f4, u4, e3);
}
n = p.slice, l = { __e: function(n2, l3, u4, t3) {
  for (var i4, o3, r3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
    if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3) return i4.__E = i4;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l3) {
  var u4;
  u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u4), this.props)), n2 && d(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

// https://jsr.io/@nobody/styled-components-deno/0.5.1/domElements.ts
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
function u2(e3, t3, n2, o3, i4, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// https://jsr.io/@nobody/styled-components-deno/0.5.1/styled.tsx
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
function createElementWithProps(tag, ostyle, ...args) {
  const Element = (props) => {
    let defaultStyle = "";
    const arglen = args.length;
    ostyle.forEach((stylestr, i4) => {
      if (i4 < arglen) {
        defaultStyle += stylestr + args[i4](props);
      } else {
        defaultStyle += stylestr;
      }
    });
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
  styledTmp[domElement] = function(style, ...args) {
    if (Array.isArray(style) && "raw" in style) {
      if (args.length == 0) {
        const style_css = style.join("");
        return createElement(domElement, style_css);
      } else {
        return createElementWithProps(
          domElement,
          style,
          ...args
        );
      }
    }
    return createElementObject(domElement, style);
  };
});
var styled = styledTmp;

// https://jsr.io/@nobody/styled-components-deno/0.5.1/mod.ts
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
    visibility: hidden;
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

// ../../../.cache/deno/deno_esbuild/preact@10.23.2/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u3;
var i3;
var o2 = 0;
var f3 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m = c2.unmount;
var s2 = c2.__;
function d2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function h2(n2) {
  return o2 = 1, p2(D, n2);
}
function p2(n2, u4, i4) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.u)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u5.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i5 = false;
      return u5.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
        }
      }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
    };
    r2.u = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u5 = c3;
        c3 = void 0, f4(n3, t3, r3), c3 = u5;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function j2() {
  for (var n2; n2 = f3.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i4 = (r2 = n2.__c).__H;
  i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u3 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u3 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m && m(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 100);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function D(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

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
function InstallCodeBlockCopy({ code }) {
  const [copied, setCopied] = h2(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ u2(InstallCodeCopyCSS, { children: [
    /* @__PURE__ */ u2("pre", { children: /* @__PURE__ */ u2("code", { children: code }) }),
    /* @__PURE__ */ u2(
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
  return /* @__PURE__ */ u2(ContributeMainCSS, { id: "contribute", children });
}
function ContributeTitle({ children }) {
  return /* @__PURE__ */ u2(ContributeTitleCSS, { children });
}

// styles/sidebar.ts
var SideBar = mod_default.li`
  width: 200px;
  height: 100%;
  background-color: #333;
  position: fixed;
  top: 0;
  z-index: 3;
  visibility: hidden;
  list-style-type: none;
  display: flex;
  /* move flex-items in column */
  flex-direction: column;

  left: ${(props) => props.isOpen ? "0" : "-250px"} ;
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
  & a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  & a.bottom {
    margin-top: auto;
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }
`;
var MenuButton = mod_default.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: hidden;
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;

  & hover {
    background-color: #0056b3;
  }
  @media screen and (max-width:900px) {
    visibility: visible;
  }

`;

// pages/home.tsx
function Header() {
  return /* @__PURE__ */ u2(TopBar2, { children: [
    /* @__PURE__ */ u2("a", { href: "#main", children: "Neocmakelsp" }),
    /* @__PURE__ */ u2("a", { href: "#feature", children: "Features" }),
    /* @__PURE__ */ u2("a", { href: "#install", children: "Install" }),
    /* @__PURE__ */ u2("a", { class: "right", href: "https://github.com/neocmakelsp/neocmakelsp", children: "Github" })
  ] });
}
function Home() {
  const [isOpen, setIsOpen] = h2(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ u2("main", { children: [
    /* @__PURE__ */ u2(MenuButton, { onClick: () => toggleOpen() }),
    /* @__PURE__ */ u2(SideBar, { isOpen, children: [
      /* @__PURE__ */ u2("a", { href: "#main", children: "Neocmakelsp" }),
      /* @__PURE__ */ u2("a", { href: "#feature", children: "Features" }),
      /* @__PURE__ */ u2("a", { href: "#install", children: "Install" }),
      /* @__PURE__ */ u2("a", { class: "bottom", href: "https://github.com/neocmakelsp/neocmakelsp", children: "Github" }),
      /* @__PURE__ */ u2("button", { class: "bottom", onClick: () => toggleOpen(), children: "X" })
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
        ] }),
        /* @__PURE__ */ u2("p", { children: "To install the target, run follow command:" }),
        /* @__PURE__ */ u2(InstallCodeBlockCopy, { code: "cargo install neocmakelsp" }),
        /* @__PURE__ */ u2("p", { children: "To install vscode plugin on vscode, run:" }),
        /* @__PURE__ */ u2(InstallCodeBlockCopy, { code: "ext install Decodetalkers.neocmakelsp-vscode" })
      ] })
    ] }),
    /* @__PURE__ */ u2(ContributeMain, { children: /* @__PURE__ */ u2(ContributeTitle, { children: "You can help and make contributions for us on the Github." }) })
  ] });
}

// src/main.tsx
var mount = document.getElementById("mount");
if (mount) {
  B(/* @__PURE__ */ u2(Home, {}), mount);
}
var header = document.getElementById("header");
if (header) {
  B(/* @__PURE__ */ u2(Header, {}), header);
}
