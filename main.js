// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@10.26.4/node_modules/preact/dist/preact.module.js
var n;
var l;
var t;
var u;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l3) {
  for (var t3 in l3) n2[t3] = l3[t3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, t3, u4) {
  var i4, r3, o3, e3 = {};
  for (o3 in t3) "key" == o3 ? i4 = t3[o3] : "ref" == o3 ? r3 = t3[o3] : e3[o3] = t3[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : u4), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return m(l3, e3, i4, r3, null);
}
function m(n2, u4, i4, r3, o3) {
  var e3 = { type: n2, props: u4, key: i4, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++t : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var t3; l3 < n2.__k.length; l3++) if (null != (t3 = n2.__k[l3]) && null != t3.__e) return t3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l3, t3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (t3 = n2.__k[l3]) && null != t3.__e) {
      n2.__e = n2.__c.base = t3.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, t3, u4, r3, o3, f4, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (u4 = void 0, o3 = (r3 = (t3 = n2).__v).__e, f4 = [], c3 = [], t3.__P && ((u4 = w({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(u4), O(t3.__P, u4, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f4, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), u4.__v = r3.__v, u4.__.__k[u4.__i] = u4, z(f4, u4, c3), u4.__e != o3 && C(u4)));
  $.__r = 0;
}
function I(n2, l3, t3, u4, i4, r3, o3, e3, f4, c3, s3) {
  var a3, h3, y2, d3, w3, g2, _2 = u4 && u4.__k || v, m3 = l3.length;
  for (f4 = P(t3, l3, _2, f4, m3), a3 = 0; a3 < m3; a3++) null != (y2 = t3.__k[a3]) && (h3 = -1 === y2.__i ? p : _2[y2.__i] || p, y2.__i = a3, g2 = O(n2, y2, h3, i4, r3, o3, e3, f4, c3, s3), d3 = y2.__e, y2.ref && h3.ref != y2.ref && (h3.ref && q(h3.ref, null, y2), s3.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), 4 & y2.__u || h3.__k === y2.__k ? f4 = A(y2, f4, n2) : "function" == typeof y2.type && void 0 !== g2 ? f4 = g2 : d3 && (f4 = d3.nextSibling), y2.__u &= -7);
  return t3.__e = w3, f4;
}
function P(n2, l3, t3, u4, i4) {
  var r3, o3, e3, f4, c3, s3 = t3.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i4), r3 = 0; r3 < i4; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f4 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : d(o3) ? m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 !== (c3 = o3.__i = L(o3, t3, f4, a3)) && (a3--, (e3 = t3[c3]) && (e3.__u |= 2)), null == e3 || null === e3.__v ? (-1 == c3 && (i4 > s3 ? h3-- : i4 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = t3[r3]) && 0 == (2 & e3.__u) && (e3.__e == u4 && (u4 = S(e3)), B(e3, e3));
  return u4;
}
function A(n2, l3, t3) {
  var u4, i4;
  if ("function" == typeof n2.type) {
    for (u4 = n2.__k, i4 = 0; u4 && i4 < u4.length; i4++) u4[i4] && (u4[i4].__ = n2, l3 = A(u4[i4], l3, t3));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !t3.contains(l3) && (l3 = S(n2)), t3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function L(n2, l3, t3, u4) {
  var i4, r3, o3 = n2.key, e3 = n2.type, f4 = l3[t3];
  if (null === f4 && null == n2.key || f4 && o3 == f4.key && e3 === f4.type && 0 == (2 & f4.__u)) return t3;
  if (u4 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = t3 - 1, r3 = t3 + 1; i4 >= 0 || r3 < l3.length; ) {
    if (i4 >= 0) {
      if ((f4 = l3[i4]) && 0 == (2 & f4.__u) && o3 == f4.key && e3 === f4.type) return i4;
      i4--;
    }
    if (r3 < l3.length) {
      if ((f4 = l3[r3]) && 0 == (2 & f4.__u) && o3 == f4.key && e3 === f4.type) return r3;
      r3++;
    }
  }
  return -1;
}
function T(n2, l3, t3) {
  "-" == l3[0] ? n2.setProperty(l3, null == t3 ? "" : t3) : n2[l3] = null == t3 ? "" : "number" != typeof t3 || y.test(l3) ? t3 : t3 + "px";
}
function j(n2, l3, t3, u4, i4) {
  var r3;
  n: if ("style" == l3) if ("string" == typeof t3) n2.style.cssText = t3;
  else {
    if ("string" == typeof u4 && (n2.style.cssText = u4 = ""), u4) for (l3 in u4) t3 && l3 in t3 || T(n2.style, l3, "");
    if (t3) for (l3 in t3) u4 && t3[l3] === u4[l3] || T(n2.style, l3, t3[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = t3, t3 ? u4 ? t3.t = u4.t : (t3.t = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == t3 ? "" : t3;
      break n;
    } catch (n3) {
    }
    "function" == typeof t3 || (null == t3 || false === t3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == t3 ? "" : t3));
  }
}
function F(n2) {
  return function(t3) {
    if (this.l) {
      var u4 = this.l[t3.type + n2];
      if (null == t3.u) t3.u = c++;
      else if (t3.u < u4.t) return;
      return u4(l.event ? l.event(t3) : t3);
    }
  };
}
function O(n2, t3, u4, i4, r3, o3, e3, f4, c3, s3) {
  var a3, h3, p3, v3, y2, _2, m3, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j3 = t3.type;
  if (void 0 !== t3.constructor) return null;
  128 & u4.__u && (c3 = !!(32 & u4.__u), o3 = [f4 = t3.__e = u4.__e]), (a3 = l.__b) && a3(t3);
  n: if ("function" == typeof j3) try {
    if (b = t3.props, S2 = "prototype" in j3 && j3.prototype.render, C2 = (a3 = j3.contextType) && i4[a3.__c], M2 = a3 ? C2 ? C2.props.value : a3.__ : i4, u4.__c ? m3 = (h3 = t3.__c = u4.__c).__ = h3.__E : (S2 ? t3.__c = h3 = new j3(b, M2) : (t3.__c = h3 = new x(b, M2), h3.constructor = j3, h3.render = D), C2 && C2.sub(h3), h3.props = b, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, j3.getDerivedStateFromProps(b, h3.__s))), v3 = h3.props, y2 = h3.state, h3.__v = t3, p3) S2 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S2 && null == j3.getDerivedStateFromProps && b !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2) || t3.__v == u4.__v)) {
        for (t3.__v != u4.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), t3.__e = u4.__e, t3.__k = u4.__k, t3.__k.some(function(n3) {
          n3 && (n3.__ = t3);
        }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
        h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y2, _2);
      });
    }
    if (h3.context = M2, h3.props = b, h3.__P = n2, h3.__e = false, P2 = l.__r, A2 = 0, S2) {
      for (h3.state = h3.__s, h3.__d = false, P2 && P2(t3), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, P2 && P2(t3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, y2)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = N(a3.props.children)), f4 = I(n2, d(L2) ? L2 : [L2], t3, u4, i4, r3, o3, e3, f4, c3, s3), h3.base = t3.__e, t3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (t3.__v = null, c3 || null != o3) if (n3.then) {
      for (t3.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o3[o3.indexOf(f4)] = null, t3.__e = f4;
    } else for (T2 = o3.length; T2--; ) g(o3[T2]);
    else t3.__e = u4.__e, t3.__k = u4.__k;
    l.__e(n3, t3, u4);
  }
  else null == o3 && t3.__v == u4.__v ? (t3.__k = u4.__k, t3.__e = u4.__e) : f4 = t3.__e = V(u4.__e, t3, u4, i4, r3, o3, e3, c3, s3);
  return (a3 = l.diffed) && a3(t3), 128 & t3.__u ? void 0 : f4;
}
function z(n2, t3, u4) {
  for (var i4 = 0; i4 < u4.length; i4++) q(u4[i4], u4[++i4], u4[++i4]);
  l.__c && l.__c(t3, n2), n2.some(function(t4) {
    try {
      n2 = t4.__h, t4.__h = [], n2.some(function(n3) {
        n3.call(t4);
      });
    } catch (n3) {
      l.__e(n3, t4.__v);
    }
  });
}
function N(n2) {
  return "object" != typeof n2 || null == n2 ? n2 : d(n2) ? n2.map(N) : w({}, n2);
}
function V(t3, u4, i4, r3, o3, e3, f4, c3, s3) {
  var a3, h3, v3, y2, w3, _2, m3, b = i4.props, k3 = u4.props, x2 = u4.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
      t3 = w3, e3[a3] = null;
      break;
    }
  }
  if (null == t3) {
    if (null == x2) return document.createTextNode(k3);
    t3 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(u4, e3), c3 = false), e3 = null;
  }
  if (null === x2) b === k3 || c3 && t3.data === k3 || (t3.data = k3);
  else {
    if (e3 = e3 && n.call(t3.childNodes), b = i4.props || p, !c3 && null != e3) for (b = {}, a3 = 0; a3 < t3.attributes.length; a3++) b[(w3 = t3.attributes[a3]).name] = w3.value;
    for (a3 in b) if (w3 = b[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = w3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      j(t3, a3, null, w3, o3);
    }
    for (a3 in k3) w3 = k3[a3], "children" == a3 ? y2 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _2 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b[a3] === w3 || j(t3, a3, w3, b[a3], o3);
    if (h3) c3 || v3 && (h3.__html === v3.__html || h3.__html === t3.innerHTML) || (t3.innerHTML = h3.__html), u4.__k = [];
    else if (v3 && (t3.innerHTML = ""), I("template" === u4.type ? t3.content : t3, d(y2) ? y2 : [y2], u4, i4, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i4.__k && S(i4, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c3 || (a3 = "value", "progress" == x2 && null == _2 ? t3.removeAttribute("value") : void 0 !== _2 && (_2 !== t3[a3] || "progress" == x2 && !_2 || "option" == x2 && _2 !== b[a3]) && j(t3, a3, _2, b[a3], o3), a3 = "checked", void 0 !== m3 && m3 !== t3[a3] && j(t3, a3, m3, b[a3], o3));
  }
  return t3;
}
function q(n2, t3, u4) {
  try {
    if ("function" == typeof n2) {
      var i4 = "function" == typeof n2.__u;
      i4 && n2.__u(), i4 && null == t3 || (n2.__u = n2(t3));
    } else n2.current = t3;
  } catch (n3) {
    l.__e(n3, u4);
  }
}
function B(n2, t3, u4) {
  var i4, r3;
  if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || q(i4, null, t3)), null != (i4 = n2.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, t3);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n2.__k) for (r3 = 0; r3 < i4.length; r3++) i4[r3] && B(i4[r3], t3, u4 || "function" != typeof n2.type);
  u4 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D(n2, l3, t3) {
  return this.constructor(n2, t3);
}
function E(t3, u4, i4) {
  var r3, o3, e3, f4;
  u4 == document && (u4 = document.documentElement), l.__ && l.__(t3, u4), o3 = (r3 = "function" == typeof i4) ? null : i4 && i4.__k || u4.__k, e3 = [], f4 = [], O(u4, t3 = (!r3 && i4 || u4).__k = _(k, null, [t3]), o3 || p, p, u4.namespaceURI, !r3 && i4 ? [i4] : o3 ? null : u4.firstChild ? n.call(u4.childNodes) : null, e3, !r3 && i4 ? i4 : o3 ? o3.__e : u4.firstChild, r3, f4), z(e3, t3, f4);
}
n = v.slice, l = { __e: function(n2, l3, t3, u4) {
  for (var i4, r3, o3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
    if ((r3 = i4.constructor) && null != r3.getDerivedStateFromError && (i4.setState(r3.getDerivedStateFromError(n2)), o3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, u4 || {}), o3 = i4.__d), o3) return i4.__E = i4;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, t = 0, u = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var t3;
  t3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, t3), this.props)), n2 && w(t3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// https://jsr.io/@nobody/styled-components-deno/0.10.2/domElements.ts
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

// https://jsr.io/@nobody/styled-components-deno/0.10.2/styled.ts
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
function queryClassName(className) {
  const styles = document.styleSheets;
  for (const style of styles) {
    for (const rule of style.cssRules) {
      if (rule.cssText.includes(`.${className} `)) {
        return true;
      }
    }
  }
  return false;
}
function injectStyles(className, styles) {
  if (!queryClassName(className)) {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `.${className} { ${styles} }`;
    document.head.appendChild(styleSheet);
  }
}
function injectStylesObject(className, styles) {
  if (!queryClassName(className)) {
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
  const Element = Object.assign((props) => {
    const { children, ...restProps } = props;
    const newstyle = defaultStyle;
    injectStylesObject(className, newstyle);
    const newProp = {
      className: props.className || className,
      ...restProps
    };
    Element.className = className;
    return _(tag, newProp, children);
  }, { className: void 0 });
  return Element;
}
function createElement(tag, ostyle, ...args) {
  const className = generateClassName();
  const Element = Object.assign((props) => {
    const { children, ...restProps } = props;
    let defaultStyle = "";
    const arglen = args.length;
    ostyle.forEach((stylestr, i4) => {
      if (i4 < arglen) {
        defaultStyle += stylestr + args[i4];
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
    Element.className = className;
    return _(tag, newProp, children);
  }, { className: void 0 });
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
    ostyle.forEach((stylestr, i4) => {
      if (i4 < arglen) {
        defaultStyle += stylestr + args[i4](props);
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
    return _(tag, newProp, children);
  }, { mappedId: /* @__PURE__ */ new Map() });
  return ElementTmp;
}
function recreateElement(component) {
  return (style, ...args) => {
    let defaultStyle = "";
    const arglen = args.length;
    style.forEach((stylestr, i4) => {
      if (i4 < arglen) {
        defaultStyle += stylestr + args[i4];
      } else {
        defaultStyle += stylestr;
      }
    });
    const Element = Object.assign((props) => {
      const { children, ...restProps } = props;
      let newclassName = generateClassName();
      console.log("aaa");
      injectStyles(newclassName, defaultStyle);
      if (component.className) {
        newclassName = `${component.className} ${newclassName}`;
      }
      const className = props.className || newclassName;
      Element.className = className;
      const newProps = {
        className,
        ...restProps
      };
      return _(component, newProps, children);
    }, { className: void 0 });
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

// https://jsr.io/@nobody/styled-components-deno/0.10.2/mod.ts
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
    float: right;
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({ autohide }) => {
  if (autohide) {
    return "hidden";
  }
  return "visible";
}};
  }
`;
var topbar_default = TopBar;

// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@10.26.4/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e3, t3, n2, o3, i4, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// components/titlebar.tsx
function MainTopBar({ children }) {
  return /* @__PURE__ */ u2(topbar_default, { autohide: true, children });
}

// styles/topmainarea.ts
var TopMainAreaCSS = mod_default.section`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }

  background-color: black;
  width: 100%;

  & h1 {
    color: white;
  }
  & p {
    color: white;
  }
`;
var TopTextCSS = mod_default.div`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;
`;
var TopVideoCSS = mod_default.video`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`;
var TopMainTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`;
var TopMainSmallTitleCSS = mod_default.p`
  margin-left: 60px;
  margin-right: 60px;
  font-size: 32px;
  margin-top: 1px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
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
    color: white;
  }
  & p {
    color: white;
  }
`;
var feature_default = FeatureMainCSS;
var FeatureTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`;
var FeatureCardTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 100;
`;
var FeatureGridCSS = mod_default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
  width: 100%;
  margin: 0.5rem;
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
    color: white;
  }
  & p {
    color: white;
  }
`;
var InstallTitleCSS = mod_default.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`;
var InstallBodyCSS = mod_default.div`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 32px;
  margin-bottom: 300px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  & pre {
    padding: 10px;
    background-color: #0c3e4d;
    border-radius: 5px;
    overflow-x: auto;
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

// ../../../.cache/deno/deno_esbuild/registry.npmjs.org/preact@10.26.4/node_modules/preact/hooks/dist/hooks.module.js
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
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u4, i4) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u5.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i5 = o3.__c.props !== n3;
      return u5.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i5;
    };
    r2.__f = true;
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
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u3 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
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
  m2 && m2(n2);
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
function D2(n2, t3) {
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
  const [copied, setCopied] = d2(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ u2(InstallCodeCopyCSS, { children: [
    /* @__PURE__ */ u2("pre", { children: /* @__PURE__ */ u2("code", { children: code }) }),
    /* @__PURE__ */ u2("button", { type: "button", onClick: copyToClipboard, children: copied ? "Copied!" : "Copy" })
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
  font-weight: 500;
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

  left: ${({ isOpen }) => isOpen ? "0" : "-200px"};
  transition: left 0.3s ease-in-out;

  @media screen and (max-width: 900px) {
    visibility: visible;
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
  left: ${({ isOpen, left }) => isOpen ? left ? left : 210 : 20}px;
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

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;
var SearchButton = mod_default.button`
  position: fixed;
  bottom: ${({ bottom }) => bottom ? bottom : 20}px;
  left: ${({ isOpen, left }) => isOpen ? left ? left : 210 : 20}px;
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

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;

// pages/home.tsx
function Header() {
  return /* @__PURE__ */ u2(MainTopBar, { children: [
    /* @__PURE__ */ u2("a", { href: "#main", children: "Neocmakelsp" }),
    /* @__PURE__ */ u2("a", { href: "#feature", children: "Features" }),
    /* @__PURE__ */ u2("a", { href: "#install", children: "Install" }),
    /* @__PURE__ */ u2("a", { href: "/doc", children: "Document" }),
    /* @__PURE__ */ u2("a", { class: "right", href: "https://github.com/neocmakelsp/neocmakelsp", children: "Github" })
  ] });
}
function Home() {
  const [isOpen, setIsOpen] = d2(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const backString = "<<";
  return /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2(MenuButton, { isOpen, onClick: () => toggleOpen() }),
    /* @__PURE__ */ u2(SideBar, { isOpen, autohide: true, children: [
      /* @__PURE__ */ u2(SideBarA, { href: "#main", children: "Neocmakelsp" }),
      /* @__PURE__ */ u2(SideBarA, { href: "#feature", children: "Features" }),
      /* @__PURE__ */ u2(SideBarA, { href: "#install", children: "Install" }),
      /* @__PURE__ */ u2(SideBarA, { href: "/doc", children: "Document" }),
      /* @__PURE__ */ u2(
        SideBarA,
        {
          isBottom: true,
          href: "https://github.com/neocmakelsp/neocmakelsp",
          children: "Github"
        }
      ),
      /* @__PURE__ */ u2("button", { type: "button", class: "bottom", onClick: () => toggleOpen(), children: backString })
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
  E(/* @__PURE__ */ u2(Home, {}), mount);
}
var header = document.getElementById("header");
if (header) {
  E(/* @__PURE__ */ u2(Header, {}), header);
}
