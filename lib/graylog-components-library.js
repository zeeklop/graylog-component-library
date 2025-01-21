import ot, { useState as Hr, useRef as dr, useEffect as K, useLayoutEffect as Xt, createContext as at, useContext as ye, useMemo as qt, useCallback as We, useId as Jt, forwardRef as U } from "react";
import Kt from "react-dom";
var Vr = { exports: {} }, vr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Qt() {
  if (Be) return vr;
  Be = 1;
  var r = ot, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, y) {
    var p, m = {}, g = null, v = null;
    y !== void 0 && (g = "" + y), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (p in f) t.call(f, p) && !a.hasOwnProperty(p) && (m[p] = f[p]);
    if (c && c.defaultProps) for (p in f = c.defaultProps, f) m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: e, type: c, key: g, ref: v, props: m, _owner: i.current };
  }
  return vr.Fragment = n, vr.jsx = s, vr.jsxs = s, vr;
}
var $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Zt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ot, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, k = "@@iterator";
    function j(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = w && o[w] || o[k];
      return typeof l == "function" ? l : null;
    }
    var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(o) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
          d[b - 1] = arguments[b];
        O("error", o, d);
      }
    }
    function O(o, l, d) {
      {
        var b = E.ReactDebugCurrentFrame, x = b.getStackAddendum();
        x !== "" && (l += "%s", d = d.concat([x]));
        var C = d.map(function(S) {
          return String(S);
        });
        C.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, C);
      }
    }
    var M = !1, H = !1, _ = !1, F = !1, N = !1, W;
    W = Symbol.for("react.module.reference");
    function mr(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === t || o === a || N || o === i || o === y || o === p || F || o === v || M || H || _ || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === m || o.$$typeof === s || o.$$typeof === c || o.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === W || o.getModuleId !== void 0));
    }
    function yr(o, l, d) {
      var b = o.displayName;
      if (b)
        return b;
      var x = l.displayName || l.name || "";
      return x !== "" ? d + "(" + x + ")" : d;
    }
    function Tr(o) {
      return o.displayName || "Context";
    }
    function B(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var l = o;
            return Tr(l) + ".Consumer";
          case s:
            var d = o;
            return Tr(d._context) + ".Provider";
          case f:
            return yr(o, o.render, "ForwardRef");
          case m:
            var b = o.displayName || null;
            return b !== null ? b : B(o.type) || "Memo";
          case g: {
            var x = o, C = x._payload, S = x._init;
            try {
              return B(S(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, X = 0, kr, jr, Pr, Or, Nr, Mr, Ar;
    function Fr() {
    }
    Fr.__reactDisabledLog = !0;
    function Ur() {
      {
        if (X === 0) {
          kr = console.log, jr = console.info, Pr = console.warn, Or = console.error, Nr = console.group, Mr = console.groupCollapsed, Ar = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Fr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        X++;
      }
    }
    function Xr() {
      {
        if (X--, X === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, o, {
              value: kr
            }),
            info: z({}, o, {
              value: jr
            }),
            warn: z({}, o, {
              value: Pr
            }),
            error: z({}, o, {
              value: Or
            }),
            group: z({}, o, {
              value: Nr
            }),
            groupCollapsed: z({}, o, {
              value: Mr
            }),
            groupEnd: z({}, o, {
              value: Ar
            })
          });
        }
        X < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gr = E.ReactCurrentDispatcher, br;
    function nr(o, l, d) {
      {
        if (br === void 0)
          try {
            throw Error();
          } catch (x) {
            var b = x.stack.trim().match(/\n( *(at )?)/);
            br = b && b[1] || "";
          }
        return `
` + br + o;
      }
    }
    var hr = !1, or;
    {
      var qr = typeof WeakMap == "function" ? WeakMap : Map;
      or = new qr();
    }
    function Lr(o, l) {
      if (!o || hr)
        return "";
      {
        var d = or.get(o);
        if (d !== void 0)
          return d;
      }
      var b;
      hr = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = gr.current, gr.current = null, Ur();
      try {
        if (l) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (L) {
              b = L;
            }
            Reflect.construct(o, [], S);
          } else {
            try {
              S.call();
            } catch (L) {
              b = L;
            }
            o.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            b = L;
          }
          o();
        }
      } catch (L) {
        if (L && b && typeof L.stack == "string") {
          for (var $ = L.stack.split(`
`), A = b.stack.split(`
`), T = $.length - 1, P = A.length - 1; T >= 1 && P >= 0 && $[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if ($[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || $[T] !== A[P]) {
                    var I = `
` + $[T].replace(" at new ", " at ");
                    return o.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", o.displayName)), typeof o == "function" && or.set(o, I), I;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        hr = !1, gr.current = C, Xr(), Error.prepareStackTrace = x;
      }
      var cr = o ? o.displayName || o.name : "", J = cr ? nr(cr) : "";
      return typeof o == "function" && or.set(o, J), J;
    }
    function Jr(o, l, d) {
      return Lr(o, !1);
    }
    function Kr(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function ar(o, l, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Lr(o, Kr(o));
      if (typeof o == "string")
        return nr(o);
      switch (o) {
        case y:
          return nr("Suspense");
        case p:
          return nr("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            return Jr(o.render);
          case m:
            return ar(o.type, l, d);
          case g: {
            var b = o, x = b._payload, C = b._init;
            try {
              return ar(C(x), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Ir = {}, Dr = E.ReactDebugCurrentFrame;
    function ir(o) {
      if (o) {
        var l = o._owner, d = ar(o.type, o._source, l ? l.type : null);
        Dr.setExtraStackFrame(d);
      } else
        Dr.setExtraStackFrame(null);
    }
    function Te(o, l, d, b, x) {
      {
        var C = Function.call.bind(q);
        for (var S in o)
          if (C(o, S)) {
            var $ = void 0;
            try {
              if (typeof o[S] != "function") {
                var A = Error((b || "React class") + ": " + d + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              $ = o[S](l, S, b, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              $ = T;
            }
            $ && !($ instanceof Error) && (ir(x), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", d, S, typeof $), ir(null)), $ instanceof Error && !($.message in Ir) && (Ir[$.message] = !0, ir(x), R("Failed %s type: %s", d, $.message), ir(null));
          }
      }
    }
    var Et = Array.isArray;
    function Qr(o) {
      return Et(o);
    }
    function Tt(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function kt(o) {
      try {
        return ke(o), !1;
      } catch {
        return !0;
      }
    }
    function ke(o) {
      return "" + o;
    }
    function je(o) {
      if (kt(o))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tt(o)), ke(o);
    }
    var Pe = E.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ne;
    function Pt(o) {
      if (q.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ot(o) {
      if (q.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Nt(o, l) {
      typeof o.ref == "string" && Pe.current;
    }
    function Mt(o, l) {
      {
        var d = function() {
          Oe || (Oe = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function At(o, l) {
      {
        var d = function() {
          Ne || (Ne = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Ft = function(o, l, d, b, x, C, S) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: d,
        props: S,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Lt(o, l, d, b, x) {
      {
        var C, S = {}, $ = null, A = null;
        d !== void 0 && (je(d), $ = "" + d), Ot(l) && (je(l.key), $ = "" + l.key), Pt(l) && (A = l.ref, Nt(l, x));
        for (C in l)
          q.call(l, C) && !jt.hasOwnProperty(C) && (S[C] = l[C]);
        if (o && o.defaultProps) {
          var T = o.defaultProps;
          for (C in T)
            S[C] === void 0 && (S[C] = T[C]);
        }
        if ($ || A) {
          var P = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && Mt(S, P), A && At(S, P);
        }
        return Ft(o, $, A, x, b, Pe.current, S);
      }
    }
    var Zr = E.ReactCurrentOwner, Me = E.ReactDebugCurrentFrame;
    function sr(o) {
      if (o) {
        var l = o._owner, d = ar(o.type, o._source, l ? l.type : null);
        Me.setExtraStackFrame(d);
      } else
        Me.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function ee(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function Ae() {
      {
        if (Zr.current) {
          var o = B(Zr.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function It(o) {
      return "";
    }
    var Fe = {};
    function Dt(o) {
      {
        var l = Ae();
        if (!l) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function Le(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = Dt(l);
        if (Fe[d])
          return;
        Fe[d] = !0;
        var b = "";
        o && o._owner && o._owner !== Zr.current && (b = " It was passed a child from " + B(o._owner.type) + "."), sr(o), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, b), sr(null);
      }
    }
    function Ie(o, l) {
      {
        if (typeof o != "object")
          return;
        if (Qr(o))
          for (var d = 0; d < o.length; d++) {
            var b = o[d];
            ee(b) && Le(b, l);
          }
        else if (ee(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var x = j(o);
          if (typeof x == "function" && x !== o.entries)
            for (var C = x.call(o), S; !(S = C.next()).done; )
              ee(S.value) && Le(S.value, l);
        }
      }
    }
    function Vt(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var d;
        if (typeof l == "function")
          d = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === m))
          d = l.propTypes;
        else
          return;
        if (d) {
          var b = B(l);
          Te(d, o.props, "prop", b, o);
        } else if (l.PropTypes !== void 0 && !re) {
          re = !0;
          var x = B(l);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(o) {
      {
        for (var l = Object.keys(o.props), d = 0; d < l.length; d++) {
          var b = l[d];
          if (b !== "children" && b !== "key") {
            sr(o), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), sr(null);
            break;
          }
        }
        o.ref !== null && (sr(o), R("Invalid attribute `ref` supplied to `React.Fragment`."), sr(null));
      }
    }
    var De = {};
    function Ve(o, l, d, b, x, C) {
      {
        var S = mr(o);
        if (!S) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = It();
          A ? $ += A : $ += Ae();
          var T;
          o === null ? T = "null" : Qr(o) ? T = "array" : o !== void 0 && o.$$typeof === e ? (T = "<" + (B(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : T = typeof o, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, $);
        }
        var P = Lt(o, l, d, x, C);
        if (P == null)
          return P;
        if (S) {
          var I = l.children;
          if (I !== void 0)
            if (b)
              if (Qr(I)) {
                for (var cr = 0; cr < I.length; cr++)
                  Ie(I[cr], o);
                Object.freeze && Object.freeze(I);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(I, o);
        }
        if (q.call(l, "key")) {
          var J = B(o), L = Object.keys(l).filter(function(Ut) {
            return Ut !== "key";
          }), te = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[J + te]) {
            var Gt = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, J, Gt, J), De[J + te] = !0;
          }
        }
        return o === t ? Wt(P) : Vt(P), P;
      }
    }
    function Bt(o, l, d) {
      return Ve(o, l, d, !0);
    }
    function Yt(o, l, d) {
      return Ve(o, l, d, !1);
    }
    var Ht = Yt, zt = Bt;
    $r.Fragment = t, $r.jsx = Ht, $r.jsxs = zt;
  }()), $r;
}
var He;
function rn() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? Vr.exports = Qt() : Vr.exports = Zt()), Vr.exports;
}
var h = rn();
function Y(r) {
  return Object.keys(r);
}
function ne(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function ge(r, e) {
  const n = { ...r }, t = e;
  return ne(r) && ne(e) && Object.keys(e).forEach((i) => {
    ne(t[i]) && i in r ? n[i] = ge(n[i], t[i]) : n[i] = t[i];
  }), n;
}
function en(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function tn(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function nn(r) {
  const e = tn(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function oe(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function it(r, { shouldScale: e = !1 } = {}) {
  function n(t) {
    if (t === 0 || t === "0")
      return `0${r}`;
    if (typeof t == "number") {
      const i = `${t / 16}${r}`;
      return e ? oe(i) : i;
    }
    if (typeof t == "string") {
      if (t === "" || t.startsWith("calc(") || t.startsWith("clamp(") || t.includes("rgba("))
        return t;
      if (t.includes(","))
        return t.split(",").map((a) => n(a)).join(",");
      if (t.includes(" "))
        return t.split(" ").map((a) => n(a)).join(" ");
      if (t.includes(r))
        return e ? oe(t) : t;
      const i = t.replace("px", "");
      if (!Number.isNaN(Number(i))) {
        const a = `${Number(i) / 16}${r}`;
        return e ? oe(a) : a;
      }
    }
    return t;
  }
  return n;
}
const u = it("rem", { shouldScale: !0 }), ze = it("em");
function be(r) {
  return Object.keys(r).reduce((e, n) => (r[n] !== void 0 && (e[n] = r[n]), e), {});
}
function st(r) {
  if (typeof r == "number")
    return !0;
  if (typeof r == "string") {
    if (r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "")
      return !0;
    const e = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return r.trim().split(/\s+/).every((t) => e.test(t));
  }
  return !1;
}
function Q(r, e = "size", n = !0) {
  if (r !== void 0)
    return st(r) ? n ? u(r) : r : `var(--${e}-${r})`;
}
function ct(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Q(r, "mantine-radius");
}
function zr(r) {
  return Q(r, "mantine-font-size");
}
function on(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function an(r, e) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function sn(r, e, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [t, i] = Hr(
    n ? e : an(r)
  ), a = dr(null);
  return K(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), i(a.current.matches), on(a.current, (s) => i(s.matches));
  }, [r]), t;
}
const lt = typeof document < "u" ? Xt : K;
function cn(r, e) {
  const n = dr(!1);
  K(
    () => () => {
      n.current = !1;
    },
    []
  ), K(() => {
    if (n.current)
      return r();
    n.current = !0;
  }, e);
}
function ln(r, e) {
  return sn("(prefers-reduced-motion: reduce)", r, e);
}
function ut(r) {
  var e, n, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var i = r.length;
    for (e = 0; e < i; e++) r[e] && (n = ut(r[e])) && (t && (t += " "), t += n);
  } else for (n in r) r[n] && (t && (t += " "), t += n);
  return t;
}
function rr() {
  for (var r, e, n = 0, t = "", i = arguments.length; n < i; n++) (r = arguments[n]) && (e = ut(r)) && (t && (t += " "), t += e);
  return t;
}
const un = {};
function fn(r) {
  const e = {};
  return r.forEach((n) => {
    Object.entries(n).forEach(([t, i]) => {
      e[t] ? e[t] = rr(e[t], i) : e[t] = i;
    });
  }), e;
}
function he({ theme: r, classNames: e, props: n, stylesCtx: t }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, n, t) : s || un
  );
  return fn(a);
}
function fe({ theme: r, styles: e, props: n, stylesCtx: t }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, n, t) } : { ...a, ...s }, {});
}
const ft = at(null);
function er() {
  const r = ye(ft);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function dn() {
  return er().cssVariablesResolver;
}
function pn() {
  return er().classNamesPrefix;
}
function ve() {
  return er().getStyleNonce;
}
function mn() {
  return er().withStaticClasses;
}
function yn() {
  return er().headless;
}
function gn() {
  var r;
  return (r = er().stylesTransform) == null ? void 0 : r.sx;
}
function bn() {
  var r;
  return (r = er().stylesTransform) == null ? void 0 : r.styles;
}
function hn(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function vn(r) {
  let e = r.replace("#", "");
  if (e.length === 3) {
    const s = e.split("");
    e = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  if (e.length === 8) {
    const s = parseInt(e.slice(6, 8), 16) / 255;
    return {
      r: parseInt(e.slice(0, 2), 16),
      g: parseInt(e.slice(2, 4), 16),
      b: parseInt(e.slice(4, 6), 16),
      a: s
    };
  }
  const n = parseInt(e, 16), t = n >> 16 & 255, i = n >> 8 & 255, a = n & 255;
  return {
    r: t,
    g: i,
    b: a,
    a: 1
  };
}
function $n(r) {
  const [e, n, t, i] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: n, b: t, a: i || 1 };
}
function Sn(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = r.match(e);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const t = parseInt(n[1], 10), i = parseInt(n[2], 10) / 100, a = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, c = (1 - Math.abs(2 * a - 1)) * i, f = t / 60, y = c * (1 - Math.abs(f % 2 - 1)), p = a - c / 2;
  let m, g, v;
  return f >= 0 && f < 1 ? (m = c, g = y, v = 0) : f >= 1 && f < 2 ? (m = y, g = c, v = 0) : f >= 2 && f < 3 ? (m = 0, g = c, v = y) : f >= 3 && f < 4 ? (m = 0, g = y, v = c) : f >= 4 && f < 5 ? (m = y, g = 0, v = c) : (m = c, g = 0, v = y), {
    r: Math.round((m + p) * 255),
    g: Math.round((g + p) * 255),
    b: Math.round((v + p) * 255),
    a: s || 1
  };
}
function $e(r) {
  return hn(r) ? vn(r) : r.startsWith("rgb") ? $n(r) : r.startsWith("hsl") ? Sn(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Wr(r, e) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${e * 100}%)`;
  const { r: n, g: t, b: i, a } = $e(r), s = 1 - e, c = (f) => Math.round(f * s);
  return `rgba(${c(n)}, ${c(t)}, ${c(i)}, ${a})`;
}
function Cr(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function ae(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function wn(r) {
  const e = r.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function xn(r) {
  if (r.startsWith("oklch("))
    return (wn(r) || 0) / 100;
  const { r: e, g: n, b: t } = $e(r), i = e / 255, a = n / 255, s = t / 255, c = ae(i), f = ae(a), y = ae(s);
  return 0.2126 * c + 0.7152 * f + 0.0722 * y;
}
function Sr(r, e = 0.179) {
  return r.startsWith("var(") ? !1 : xn(r) > e;
}
function Rr({
  color: r,
  theme: e,
  colorScheme: n
}) {
  if (typeof r != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof r}`
    );
  if (r === "bright")
    return {
      color: r,
      value: n === "dark" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        n === "dark" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (r === "dimmed")
    return {
      color: r,
      value: n === "dark" ? e.colors.dark[2] : e.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        n === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        e.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (r === "white" || r === "black")
    return {
      color: r,
      value: r === "white" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        r === "white" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: `--mantine-color-${r}`
    };
  const [t, i] = r.split("."), a = i ? Number(i) : void 0, s = t in e.colors;
  if (s) {
    const c = a !== void 0 ? e.colors[t][a] : e.colors[t][Cr(e, n || "light")];
    return {
      color: t,
      value: c,
      shade: a,
      isThemeColor: s,
      isLight: Sr(c, e.luminanceThreshold),
      variable: i ? `--mantine-color-${t}-${a}` : `--mantine-color-${t}-filled`
    };
  }
  return {
    color: r,
    value: r,
    isThemeColor: s,
    isLight: Sr(r, e.luminanceThreshold),
    shade: a,
    variable: void 0
  };
}
function de(r, e) {
  const n = Rr({ color: r || e.primaryColor, theme: e });
  return n.variable ? `var(${n.variable})` : r;
}
function Ge(r, e) {
  const n = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, t = de(n.from, e), i = de(n.to, e);
  return `linear-gradient(${n.deg}deg, ${t} 0%, ${i} 100%)`;
}
function G(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const a = (1 - e) * 100;
    return `color-mix(in srgb, ${r}, transparent ${a}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : r.replace(")", ` / ${e})`);
  const { r: n, g: t, b: i } = $e(r);
  return `rgba(${n}, ${t}, ${i}, ${e})`;
}
const lr = G, Cn = ({
  color: r,
  theme: e,
  variant: n,
  gradient: t,
  autoContrast: i
}) => {
  const a = Rr({ color: r, theme: e }), s = typeof i == "boolean" ? i : e.autoContrast;
  if (n === "filled") {
    const c = s && a.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return a.isThemeColor ? a.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: c,
      border: `${u(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${a.color}-${a.shade})`,
      hover: `var(--mantine-color-${a.color}-${a.shade === 9 ? 8 : a.shade + 1})`,
      color: c,
      border: `${u(1)} solid transparent`
    } : {
      background: r,
      hover: Wr(r, 0.1),
      color: c,
      border: `${u(1)} solid transparent`
    };
  }
  if (n === "light") {
    if (a.isThemeColor) {
      if (a.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${u(1)} solid transparent`
        };
      const c = e.colors[a.color][a.shade];
      return {
        background: G(c, 0.1),
        hover: G(c, 0.12),
        color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
        border: `${u(1)} solid transparent`
      };
    }
    return {
      background: G(r, 0.1),
      hover: G(r, 0.12),
      color: r,
      border: `${u(1)} solid transparent`
    };
  }
  if (n === "outline")
    return a.isThemeColor ? a.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${u(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: G(e.colors[a.color][a.shade], 0.05),
      color: `var(--mantine-color-${a.color}-${a.shade})`,
      border: `${u(1)} solid var(--mantine-color-${a.color}-${a.shade})`
    } : {
      background: "transparent",
      hover: G(r, 0.05),
      color: r,
      border: `${u(1)} solid ${r}`
    };
  if (n === "subtle") {
    if (a.isThemeColor) {
      if (a.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${u(1)} solid transparent`
        };
      const c = e.colors[a.color][a.shade];
      return {
        background: "transparent",
        hover: G(c, 0.12),
        color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
        border: `${u(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: G(r, 0.12),
      color: r,
      border: `${u(1)} solid transparent`
    };
  }
  return n === "transparent" ? a.isThemeColor ? a.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${u(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
    border: `${u(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${u(1)} solid transparent`
  } : n === "white" ? a.isThemeColor ? a.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Wr(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${u(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Wr(e.white, 0.01),
    color: `var(--mantine-color-${a.color}-${a.shade})`,
    border: `${u(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Wr(e.white, 0.01),
    color: r,
    border: `${u(1)} solid transparent`
  } : n === "gradient" ? {
    background: Ge(t, e),
    hover: Ge(t, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${u(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Rn = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
}, Ue = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Se = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Rn,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Cn,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Ue,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Ue,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: u(34), lineHeight: "1.3" },
      h2: { fontSize: u(26), lineHeight: "1.35" },
      h3: { fontSize: u(22), lineHeight: "1.4" },
      h4: { fontSize: u(18), lineHeight: "1.45" },
      h5: { fontSize: u(16), lineHeight: "1.5" },
      h6: { fontSize: u(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: u(12),
    sm: u(14),
    md: u(16),
    lg: u(18),
    xl: u(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: u(2),
    sm: u(4),
    md: u(8),
    lg: u(16),
    xl: u(32)
  },
  spacing: {
    xs: u(10),
    sm: u(12),
    md: u(16),
    lg: u(20),
    xl: u(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${u(1)} ${u(3)} rgba(0, 0, 0, 0.05), 0 ${u(1)} ${u(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${u(1)} ${u(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${u(10)} ${u(
      15
    )} ${u(-5)}, rgba(0, 0, 0, 0.04) 0 ${u(7)} ${u(7)} ${u(-5)}`,
    md: `0 ${u(1)} ${u(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${u(20)} ${u(
      25
    )} ${u(-5)}, rgba(0, 0, 0, 0.04) 0 ${u(10)} ${u(10)} ${u(-5)}`,
    lg: `0 ${u(1)} ${u(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${u(28)} ${u(
      23
    )} ${u(-7)}, rgba(0, 0, 0, 0.04) 0 ${u(12)} ${u(12)} ${u(-7)}`,
    xl: `0 ${u(1)} ${u(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${u(36)} ${u(
      28
    )} ${u(-7)}, rgba(0, 0, 0, 0.04) 0 ${u(17)} ${u(17)} ${u(-7)}`
  },
  other: {},
  components: {}
};
function Xe(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function _n({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const t = window.localStorage.getItem(r);
        return Xe(t) ? t : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(r, n);
      } catch (t) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          t
        );
      }
    },
    subscribe: (n) => {
      e = (t) => {
        t.storageArea === window.localStorage && t.key === r && Xe(t.newValue) && n(t.newValue);
      }, window.addEventListener("storage", e);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", e);
    },
    clear: () => {
      window.localStorage.removeItem(r);
    }
  };
}
const En = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", qe = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function ie(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Je(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(En);
  if (typeof r.primaryShade == "object" && (!ie(r.primaryShade.dark) || !ie(r.primaryShade.light)))
    throw new Error(qe);
  if (typeof r.primaryShade == "number" && !ie(r.primaryShade))
    throw new Error(qe);
}
function Tn(r, e) {
  var t;
  if (!e)
    return Je(r), r;
  const n = ge(r, e);
  return e.fontFamily && !((t = e.headings) != null && t.fontFamily) && (n.headings.fontFamily = e.fontFamily), Je(n), n;
}
const we = at(null), kn = () => ye(we) || Se;
function tr() {
  const r = ye(we);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function dt({
  theme: r,
  children: e,
  inherit: n = !0
}) {
  const t = kn(), i = qt(
    () => Tn(n ? t : Se, r),
    [r, t, n]
  );
  return /* @__PURE__ */ h.jsx(we.Provider, { value: i, children: e });
}
dt.displayName = "@mantine/core/MantineThemeProvider";
function jn() {
  const r = tr(), e = ve(), n = Y(r.breakpoints).reduce((t, i) => {
    const a = r.breakpoints[i].includes("px"), s = nn(r.breakpoints[i]), c = a ? `${s - 0.1}px` : ze(s - 0.1), f = a ? `${s}px` : ze(s);
    return `${t}@media (max-width: ${c}) {.mantine-visible-from-${i} {display: none !important;}}@media (min-width: ${f}) {.mantine-hidden-from-${i} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function se(r) {
  return Object.entries(r).map(([e, n]) => `${e}: ${n};`).join("");
}
function wr(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((t, i) => `${i}{${t}}`, e);
}
function Pn(r, e) {
  const n = se(r.variables), t = n ? wr(e, n) : "", i = se(r.dark), a = se(r.light), s = i ? wr(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, i) : "", c = a ? wr(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, a) : "";
  return `${t}${s}${c}`;
}
function On({ color: r, theme: e, autoContrast: n }) {
  return (typeof n == "boolean" ? n : e.autoContrast) && Rr({ color: r || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Ke(r, e) {
  return On({
    color: r.colors[r.primaryColor][Cr(r, e)],
    theme: r,
    autoContrast: null
  });
}
function Br({
  theme: r,
  color: e,
  colorScheme: n,
  name: t = e,
  withColorValues: i = !0
}) {
  if (!r.colors[e])
    return {};
  if (n === "light") {
    const c = Cr(r, "light"), f = {
      [`--mantine-color-${t}-text`]: `var(--mantine-color-${t}-filled)`,
      [`--mantine-color-${t}-filled`]: `var(--mantine-color-${t}-${c})`,
      [`--mantine-color-${t}-filled-hover`]: `var(--mantine-color-${t}-${c === 9 ? 8 : c + 1})`,
      [`--mantine-color-${t}-light`]: lr(r.colors[e][c], 0.1),
      [`--mantine-color-${t}-light-hover`]: lr(r.colors[e][c], 0.12),
      [`--mantine-color-${t}-light-color`]: `var(--mantine-color-${t}-${c})`,
      [`--mantine-color-${t}-outline`]: `var(--mantine-color-${t}-${c})`,
      [`--mantine-color-${t}-outline-hover`]: lr(r.colors[e][c], 0.05)
    };
    return i ? {
      [`--mantine-color-${t}-0`]: r.colors[e][0],
      [`--mantine-color-${t}-1`]: r.colors[e][1],
      [`--mantine-color-${t}-2`]: r.colors[e][2],
      [`--mantine-color-${t}-3`]: r.colors[e][3],
      [`--mantine-color-${t}-4`]: r.colors[e][4],
      [`--mantine-color-${t}-5`]: r.colors[e][5],
      [`--mantine-color-${t}-6`]: r.colors[e][6],
      [`--mantine-color-${t}-7`]: r.colors[e][7],
      [`--mantine-color-${t}-8`]: r.colors[e][8],
      [`--mantine-color-${t}-9`]: r.colors[e][9],
      ...f
    } : f;
  }
  const a = Cr(r, "dark"), s = {
    [`--mantine-color-${t}-text`]: `var(--mantine-color-${t}-4)`,
    [`--mantine-color-${t}-filled`]: `var(--mantine-color-${t}-${a})`,
    [`--mantine-color-${t}-filled-hover`]: `var(--mantine-color-${t}-${a === 9 ? 8 : a + 1})`,
    [`--mantine-color-${t}-light`]: lr(
      r.colors[e][Math.max(0, a - 2)],
      0.15
    ),
    [`--mantine-color-${t}-light-hover`]: lr(
      r.colors[e][Math.max(0, a - 2)],
      0.2
    ),
    [`--mantine-color-${t}-light-color`]: `var(--mantine-color-${t}-${Math.max(a - 5, 0)})`,
    [`--mantine-color-${t}-outline`]: `var(--mantine-color-${t}-${Math.max(a - 4, 0)})`,
    [`--mantine-color-${t}-outline-hover`]: lr(
      r.colors[e][Math.max(a - 4, 0)],
      0.05
    )
  };
  return i ? {
    [`--mantine-color-${t}-0`]: r.colors[e][0],
    [`--mantine-color-${t}-1`]: r.colors[e][1],
    [`--mantine-color-${t}-2`]: r.colors[e][2],
    [`--mantine-color-${t}-3`]: r.colors[e][3],
    [`--mantine-color-${t}-4`]: r.colors[e][4],
    [`--mantine-color-${t}-5`]: r.colors[e][5],
    [`--mantine-color-${t}-6`]: r.colors[e][6],
    [`--mantine-color-${t}-7`]: r.colors[e][7],
    [`--mantine-color-${t}-8`]: r.colors[e][8],
    [`--mantine-color-${t}-9`]: r.colors[e][9],
    ...s
  } : s;
}
function Nn(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function ur(r, e, n) {
  Y(e).forEach(
    (t) => Object.assign(r, { [`--mantine-${n}-${t}`]: e[t] })
  );
}
const pt = (r) => {
  const e = Cr(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : u(r.defaultRadius), t = {
    variables: {
      "--mantine-scale": r.scale.toString(),
      "--mantine-cursor-type": r.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": r.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": r.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": r.white,
      "--mantine-color-black": r.black,
      "--mantine-line-height": r.lineHeights.md,
      "--mantine-font-family": r.fontFamily,
      "--mantine-font-family-monospace": r.fontFamilyMonospace,
      "--mantine-font-family-headings": r.headings.fontFamily,
      "--mantine-heading-font-weight": r.headings.fontWeight,
      "--mantine-heading-text-wrap": r.headings.textWrap,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${r.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${r.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${r.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${r.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${r.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": Ke(r, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": r.black,
      "--mantine-color-body": r.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-${e})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": Ke(r, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  ur(t.variables, r.breakpoints, "breakpoint"), ur(t.variables, r.spacing, "spacing"), ur(t.variables, r.fontSizes, "font-size"), ur(t.variables, r.lineHeights, "line-height"), ur(t.variables, r.shadows, "shadow"), ur(t.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((a, s) => {
    t.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${r.primaryColor}-${s})`;
  }), Y(r.colors).forEach((a) => {
    const s = r.colors[a];
    if (Nn(s)) {
      Object.assign(
        t.light,
        Br({
          theme: r,
          name: s.name,
          color: s.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        t.dark,
        Br({
          theme: r,
          name: s.name,
          color: s.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    s.forEach((c, f) => {
      t.variables[`--mantine-color-${a}-${f}`] = c;
    }), Object.assign(
      t.light,
      Br({
        theme: r,
        color: a,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      t.dark,
      Br({
        theme: r,
        color: a,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const i = r.headings.sizes;
  return Y(i).forEach((a) => {
    t.variables[`--mantine-${a}-font-size`] = i[a].fontSize, t.variables[`--mantine-${a}-line-height`] = i[a].lineHeight, t.variables[`--mantine-${a}-font-weight`] = i[a].fontWeight || r.headings.fontWeight;
  }), t;
};
function Mn({ theme: r, generator: e }) {
  const n = pt(r), t = e == null ? void 0 : e(r);
  return t ? ge(n, t) : n;
}
const ce = pt(Se);
function An(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Y(r.variables).forEach((n) => {
    ce.variables[n] !== r.variables[n] && (e.variables[n] = r.variables[n]);
  }), Y(r.light).forEach((n) => {
    ce.light[n] !== r.light[n] && (e.light[n] = r.light[n]);
  }), Y(r.dark).forEach((n) => {
    ce.dark[n] !== r.dark[n] && (e.dark[n] = r.dark[n]);
  }), e;
}
function Fn(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function mt({
  cssVariablesSelector: r,
  deduplicateCssVariables: e
}) {
  const n = tr(), t = ve(), i = dn(), a = Mn({ theme: n, generator: i }), s = r === ":root" && e, c = s ? An(a) : a, f = Pn(c, r);
  return f ? /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${f}${s ? "" : Fn(r)}`
      }
    }
  ) : null;
}
mt.displayName = "@mantine/CssVariables";
function Ln() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function fr(r, e) {
  var i, a;
  const n = typeof window < "u" && "matchMedia" in window && ((i = window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : i.matches), t = r !== "auto" ? r : n ? "dark" : "light";
  (a = e()) == null || a.setAttribute("data-mantine-color-scheme", t);
}
function In({
  manager: r,
  defaultColorScheme: e,
  getRootElement: n,
  forceColorScheme: t
}) {
  const i = dr(null), [a, s] = Hr(() => r.get(e)), c = t || a, f = We(
    (p) => {
      t || (fr(p, n), s(p), r.set(p));
    },
    [r.set, c, t]
  ), y = We(() => {
    s(e), fr(e, n), r.clear();
  }, [r.clear, e]);
  return K(() => (r.subscribe(f), r.unsubscribe), [r.subscribe, r.unsubscribe]), lt(() => {
    fr(r.get(e), n);
  }, []), K(() => {
    var m;
    if (t)
      return fr(t, n), () => {
      };
    t === void 0 && fr(a, n), typeof window < "u" && "matchMedia" in window && (i.current = window.matchMedia("(prefers-color-scheme: dark)"));
    const p = (g) => {
      a === "auto" && fr(g.matches ? "dark" : "light", n);
    };
    return (m = i.current) == null || m.addEventListener("change", p), () => {
      var g;
      return (g = i.current) == null ? void 0 : g.removeEventListener("change", p);
    };
  }, [a, t]), { colorScheme: c, setColorScheme: f, clearColorScheme: y };
}
function Dn({
  respectReducedMotion: r,
  getRootElement: e
}) {
  lt(() => {
    var n;
    r && ((n = e()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
Ln();
function yt({
  theme: r,
  children: e,
  getStyleNonce: n,
  withStaticClasses: t = !0,
  withGlobalClasses: i = !0,
  deduplicateCssVariables: a = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: c = ":root",
  classNamesPrefix: f = "mantine",
  colorSchemeManager: y = _n(),
  defaultColorScheme: p = "light",
  getRootElement: m = () => document.documentElement,
  cssVariablesResolver: g,
  forceColorScheme: v,
  stylesTransform: w
}) {
  const { colorScheme: k, setColorScheme: j, clearColorScheme: E } = In({
    defaultColorScheme: p,
    forceColorScheme: v,
    manager: y,
    getRootElement: m
  });
  return Dn({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: m
  }), /* @__PURE__ */ h.jsx(
    ft.Provider,
    {
      value: {
        colorScheme: k,
        setColorScheme: j,
        clearColorScheme: E,
        getRootElement: m,
        classNamesPrefix: f,
        getStyleNonce: n,
        cssVariablesResolver: g,
        cssVariablesSelector: c,
        withStaticClasses: t,
        stylesTransform: w
      },
      children: /* @__PURE__ */ h.jsxs(dt, { theme: r, children: [
        s && /* @__PURE__ */ h.jsx(
          mt,
          {
            cssVariablesSelector: c,
            deduplicateCssVariables: a
          }
        ),
        i && /* @__PURE__ */ h.jsx(jn, {}),
        e
      ] })
    }
  );
}
yt.displayName = "@mantine/core/MantineProvider";
const Vn = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Wn({ theme: r, options: e, unstyled: n }) {
  return rr(
    (e == null ? void 0 : e.focusable) && !n && (r.focusClassName || Vn[r.focusRing]),
    (e == null ? void 0 : e.active) && !n && r.activeClassName
  );
}
function Bn({
  selector: r,
  stylesCtx: e,
  options: n,
  props: t,
  theme: i
}) {
  return he({
    theme: i,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || t,
    stylesCtx: e
  })[r];
}
function Qe({
  selector: r,
  stylesCtx: e,
  theme: n,
  classNames: t,
  props: i
}) {
  return he({ theme: n, classNames: t, props: i, stylesCtx: e })[r];
}
function Yn({ rootSelector: r, selector: e, className: n }) {
  return r === e ? n : void 0;
}
function Hn({ selector: r, classes: e, unstyled: n }) {
  return n ? void 0 : e[r];
}
function zn({
  themeName: r,
  classNamesPrefix: e,
  selector: n,
  withStaticClass: t
}) {
  return t === !1 ? [] : r.map((i) => `${e}-${i}-${n}`);
}
function Gn({
  themeName: r,
  theme: e,
  selector: n,
  props: t,
  stylesCtx: i
}) {
  return r.map(
    (a) => {
      var s, c;
      return (c = he({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: t,
        stylesCtx: i
      })) == null ? void 0 : c[n];
    }
  );
}
function Un({
  options: r,
  classes: e,
  selector: n,
  unstyled: t
}) {
  return r != null && r.variant && !t ? e[`${n}--${r.variant}`] : void 0;
}
function Xn({
  theme: r,
  options: e,
  themeName: n,
  selector: t,
  classNamesPrefix: i,
  classNames: a,
  classes: s,
  unstyled: c,
  className: f,
  rootSelector: y,
  props: p,
  stylesCtx: m,
  withStaticClasses: g,
  headless: v,
  transformedStyles: w
}) {
  return rr(
    Wn({ theme: r, options: e, unstyled: c || v }),
    Gn({ theme: r, themeName: n, selector: t, props: p, stylesCtx: m }),
    Un({ options: e, classes: s, selector: t, unstyled: c }),
    Qe({ selector: t, stylesCtx: m, theme: r, classNames: a, props: p }),
    Qe({ selector: t, stylesCtx: m, theme: r, classNames: w, props: p }),
    Bn({ selector: t, stylesCtx: m, options: e, props: p, theme: r }),
    Yn({ rootSelector: y, selector: t, className: f }),
    Hn({ selector: t, classes: s, unstyled: c || v }),
    g && !v && zn({
      themeName: n,
      classNamesPrefix: i,
      selector: t,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function qn({
  theme: r,
  themeName: e,
  props: n,
  stylesCtx: t,
  selector: i
}) {
  return e.map(
    (a) => {
      var s;
      return fe({
        theme: r,
        styles: (s = r.components[a]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: t
      })[i];
    }
  ).reduce((a, s) => ({ ...a, ...s }), {});
}
function pe({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (n, t) => ({ ...n, ...pe({ style: t, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Jn(r) {
  return r.reduce((e, n) => (n && Object.keys(n).forEach((t) => {
    e[t] = { ...e[t], ...be(n[t]) };
  }), e), {});
}
function Kn({
  vars: r,
  varsResolver: e,
  theme: n,
  props: t,
  stylesCtx: i,
  selector: a,
  themeName: s,
  headless: c
}) {
  var f;
  return (f = Jn([
    c ? {} : e == null ? void 0 : e(n, t, i),
    ...s.map((y) => {
      var p, m, g;
      return (g = (m = (p = n.components) == null ? void 0 : p[y]) == null ? void 0 : m.vars) == null ? void 0 : g.call(m, n, t, i);
    }),
    r == null ? void 0 : r(n, t, i)
  ])) == null ? void 0 : f[a];
}
function Qn({
  theme: r,
  themeName: e,
  selector: n,
  options: t,
  props: i,
  stylesCtx: a,
  rootSelector: s,
  styles: c,
  style: f,
  vars: y,
  varsResolver: p,
  headless: m,
  withStylesTransform: g
}) {
  return {
    ...!g && qn({ theme: r, themeName: e, props: i, stylesCtx: a, selector: n }),
    ...!g && fe({ theme: r, styles: c, props: i, stylesCtx: a })[n],
    ...!g && fe({ theme: r, styles: t == null ? void 0 : t.styles, props: (t == null ? void 0 : t.props) || i, stylesCtx: a })[n],
    ...Kn({ theme: r, props: i, stylesCtx: a, vars: y, varsResolver: p, selector: n, themeName: e, headless: m }),
    ...s === n ? pe({ style: f, theme: r }) : null,
    ...pe({ style: t == null ? void 0 : t.style, theme: r })
  };
}
function Zn({ props: r, stylesCtx: e, themeName: n }) {
  var s;
  const t = tr(), i = (s = bn()) == null ? void 0 : s();
  return {
    getTransformedStyles: (c) => i ? [
      ...c.map(
        (y) => i(y, { props: r, theme: t, ctx: e })
      ),
      ...n.map(
        (y) => {
          var p;
          return i((p = t.components[y]) == null ? void 0 : p.styles, { props: r, theme: t, ctx: e });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!i
  };
}
function _r({
  name: r,
  classes: e,
  props: n,
  stylesCtx: t,
  className: i,
  style: a,
  rootSelector: s = "root",
  unstyled: c,
  classNames: f,
  styles: y,
  vars: p,
  varsResolver: m
}) {
  const g = tr(), v = pn(), w = mn(), k = yn(), j = (Array.isArray(r) ? r : [r]).filter((O) => O), { withStylesTransform: E, getTransformedStyles: R } = Zn({
    props: n,
    stylesCtx: t,
    themeName: j
  });
  return (O, M) => ({
    className: Xn({
      theme: g,
      options: M,
      themeName: j,
      selector: O,
      classNamesPrefix: v,
      classNames: f,
      classes: e,
      unstyled: c,
      className: i,
      rootSelector: s,
      props: n,
      stylesCtx: t,
      withStaticClasses: w,
      headless: k,
      transformedStyles: R([M == null ? void 0 : M.styles, y])
    }),
    style: Qn({
      theme: g,
      themeName: j,
      selector: O,
      options: M,
      props: n,
      stylesCtx: t,
      rootSelector: s,
      styles: y,
      style: a,
      vars: p,
      varsResolver: m,
      headless: k,
      withStylesTransform: E
    })
  });
}
function Z(r, e, n) {
  var s;
  const t = tr(), i = (s = t.components[r]) == null ? void 0 : s.defaultProps, a = typeof i == "function" ? i(t) : i;
  return { ...e, ...a, ...be(n) };
}
function le(r) {
  return Y(r).reduce(
    (e, n) => r[n] !== void 0 ? `${e}${en(n)}:${r[n]};` : e,
    ""
  ).trim();
}
function ro({ selector: r, styles: e, media: n, container: t }) {
  const i = e ? le(e) : "", a = Array.isArray(n) ? n.map((c) => `@media${c.query}{${r}{${le(c.styles)}}}`) : [], s = Array.isArray(t) ? t.map(
    (c) => `@container ${c.query}{${r}{${le(c.styles)}}}`
  ) : [];
  return `${i ? `${r}{${i}}` : ""}${a.join("")}${s.join("")}`.trim();
}
function eo(r) {
  const e = ve();
  return /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: ro(r) }
    }
  );
}
function to(r) {
  const {
    m: e,
    mx: n,
    my: t,
    mt: i,
    mb: a,
    ml: s,
    mr: c,
    me: f,
    ms: y,
    p,
    px: m,
    py: g,
    pt: v,
    pb: w,
    pl: k,
    pr: j,
    pe: E,
    ps: R,
    bd: O,
    bg: M,
    c: H,
    opacity: _,
    ff: F,
    fz: N,
    fw: W,
    lts: mr,
    ta: yr,
    lh: Tr,
    fs: B,
    tt: z,
    td: X,
    w: kr,
    miw: jr,
    maw: Pr,
    h: Or,
    mih: Nr,
    mah: Mr,
    bgsz: Ar,
    bgp: Fr,
    bgr: Ur,
    bga: Xr,
    pos: gr,
    top: br,
    left: nr,
    bottom: hr,
    right: or,
    inset: qr,
    display: Lr,
    flex: Jr,
    hiddenFrom: Kr,
    visibleFrom: ar,
    lightHidden: q,
    darkHidden: Ir,
    sx: Dr,
    ...ir
  } = r;
  return { styleProps: be({
    m: e,
    mx: n,
    my: t,
    mt: i,
    mb: a,
    ml: s,
    mr: c,
    me: f,
    ms: y,
    p,
    px: m,
    py: g,
    pt: v,
    pb: w,
    pl: k,
    pr: j,
    pe: E,
    ps: R,
    bd: O,
    bg: M,
    c: H,
    opacity: _,
    ff: F,
    fz: N,
    fw: W,
    lts: mr,
    ta: yr,
    lh: Tr,
    fs: B,
    tt: z,
    td: X,
    w: kr,
    miw: jr,
    maw: Pr,
    h: Or,
    mih: Nr,
    mah: Mr,
    bgsz: Ar,
    bgp: Fr,
    bgr: Ur,
    bga: Xr,
    pos: gr,
    top: br,
    left: nr,
    bottom: hr,
    right: or,
    inset: qr,
    display: Lr,
    flex: Jr,
    hiddenFrom: Kr,
    visibleFrom: ar,
    lightHidden: q,
    darkHidden: Ir,
    sx: Dr
  }), rest: ir };
}
const no = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function xe(r, e) {
  const n = Rr({ color: r, theme: e });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color;
}
function oo(r, e) {
  const n = Rr({ color: r, theme: e });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : xe(r, e);
}
function ao(r, e) {
  if (typeof r == "number")
    return u(r);
  if (typeof r == "string") {
    const [n, t, ...i] = r.split(" ").filter((s) => s.trim() !== "");
    let a = `${u(n)}`;
    return t && (a += ` ${t}`), i.length > 0 && (a += ` ${xe(i.join(" "), e)}`), a.trim();
  }
  return r;
}
const Ze = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function io(r) {
  return typeof r == "string" && r in Ze ? Ze[r] : r;
}
const so = ["h1", "h2", "h3", "h4", "h5", "h6"];
function co(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && so.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? u(r) : r;
}
function lo(r) {
  return r;
}
const uo = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fo(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && uo.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function po(r) {
  return typeof r == "number" ? u(r) : r;
}
function mo(r, e) {
  if (typeof r == "number")
    return u(r);
  if (typeof r == "string") {
    const n = r.replace("-", "");
    if (!(n in e.spacing))
      return u(r);
    const t = `--mantine-spacing-${n}`;
    return r.startsWith("-") ? `calc(var(${t}) * -1)` : `var(${t})`;
  }
  return r;
}
const ue = {
  color: xe,
  textColor: oo,
  fontSize: co,
  spacing: mo,
  identity: lo,
  size: po,
  lineHeight: fo,
  fontFamily: io,
  border: ao
};
function rt(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function yo({
  media: r,
  ...e
}) {
  const t = Object.keys(r).sort((i, a) => Number(rt(i)) - Number(rt(a))).map((i) => ({ query: i, styles: r[i] }));
  return { ...e, media: t };
}
function go(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function bo(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function ho(r) {
  return typeof r == "object" && r !== null ? Y(r).filter((e) => e !== "base") : [];
}
function vo(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function $o({
  styleProps: r,
  data: e,
  theme: n
}) {
  return yo(
    Y(r).reduce(
      (t, i) => {
        if (i === "hiddenFrom" || i === "visibleFrom" || i === "sx")
          return t;
        const a = e[i], s = Array.isArray(a.property) ? a.property : [a.property], c = bo(r[i]);
        if (!go(r[i]))
          return s.forEach((y) => {
            t.inlineStyles[y] = ue[a.type](c, n);
          }), t;
        t.hasResponsiveStyles = !0;
        const f = ho(r[i]);
        return s.forEach((y) => {
          c && (t.styles[y] = ue[a.type](c, n)), f.forEach((p) => {
            const m = `(min-width: ${n.breakpoints[p]})`;
            t.media[m] = {
              ...t.media[m],
              [y]: ue[a.type](
                vo(r[i], p),
                n
              )
            };
          });
        }), t;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function So() {
  return `__m__-${Jt().replace(/:/g, "")}`;
}
function gt(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function wo(r) {
  return Object.keys(r).reduce((e, n) => {
    const t = r[n];
    return t === void 0 || t === "" || t === !1 || t === null || (e[gt(n)] = r[n]), e;
  }, {});
}
function bt(r) {
  return r ? typeof r == "string" ? { [gt(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, n) => ({ ...e, ...bt(n) }),
    {}
  ) : wo(r) : null;
}
function me(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (n, t) => ({ ...n, ...me(t, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function xo({
  theme: r,
  style: e,
  vars: n,
  styleProps: t
}) {
  const i = me(e, r), a = me(n, r);
  return { ...i, ...a, ...t };
}
const ht = U(
  ({
    component: r,
    style: e,
    __vars: n,
    className: t,
    variant: i,
    mod: a,
    size: s,
    hiddenFrom: c,
    visibleFrom: f,
    lightHidden: y,
    darkHidden: p,
    renderRoot: m,
    __size: g,
    ...v
  }, w) => {
    var N;
    const k = tr(), j = r || "div", { styleProps: E, rest: R } = to(v), O = gn(), M = (N = O == null ? void 0 : O()) == null ? void 0 : N(E.sx), H = So(), _ = $o({
      styleProps: E,
      theme: k,
      data: no
    }), F = {
      ref: w,
      style: xo({
        theme: k,
        style: e,
        vars: n,
        styleProps: _.inlineStyles
      }),
      className: rr(t, M, {
        [H]: _.hasResponsiveStyles,
        "mantine-light-hidden": y,
        "mantine-dark-hidden": p,
        [`mantine-hidden-from-${c}`]: c,
        [`mantine-visible-from-${f}`]: f
      }),
      "data-variant": i,
      "data-size": st(s) ? void 0 : s || void 0,
      size: g,
      ...bt(a),
      ...R
    };
    return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      _.hasResponsiveStyles && /* @__PURE__ */ h.jsx(
        eo,
        {
          selector: `.${H}`,
          styles: _.styles,
          media: _.media
        }
      ),
      typeof m == "function" ? m(F) : /* @__PURE__ */ h.jsx(j, { ...F })
    ] });
  }
);
ht.displayName = "@mantine/core/Box";
const D = ht;
function vt(r) {
  return r;
}
function Ce(r) {
  const e = U(r);
  return e.extend = vt, e.withProps = (n) => {
    const t = U((i, a) => /* @__PURE__ */ h.jsx(e, { ...n, ...i, ref: a }));
    return t.extend = e.extend, t.displayName = `WithProps(${e.displayName})`, t;
  }, e;
}
function $t(r) {
  const e = U(r);
  return e.withProps = (n) => {
    const t = U((i, a) => /* @__PURE__ */ h.jsx(e, { ...n, ...i, ref: a }));
    return t.extend = e.extend, t.displayName = `WithProps(${e.displayName})`, t;
  }, e.extend = vt, e;
}
var St = { root: "m_87cf2631" };
const Co = {
  __staticSelector: "UnstyledButton"
}, Re = $t(
  (r, e) => {
    const n = Z("UnstyledButton", Co, r), {
      className: t,
      component: i = "button",
      __staticSelector: a,
      unstyled: s,
      classNames: c,
      styles: f,
      style: y,
      ...p
    } = n, m = _r({
      name: a,
      props: n,
      classes: St,
      className: t,
      style: y,
      classNames: c,
      styles: f,
      unstyled: s
    });
    return /* @__PURE__ */ h.jsx(
      D,
      {
        ...m("root", { focusable: !0 }),
        component: i,
        ref: e,
        type: i === "button" ? "button" : void 0,
        ...p
      }
    );
  }
);
Re.classes = St;
Re.displayName = "@mantine/core/UnstyledButton";
const xr = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${r === "bottom" ? 10 : -10}px)` },
  transitionProperty: "transform, opacity"
}), Yr = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-30px)" },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...xr("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...xr("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...xr("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...xr("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...xr("top"),
    common: { transformOrigin: "top right" }
  }
}, et = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Ro({
  transition: r,
  state: e,
  duration: n,
  timingFunction: t
}) {
  const i = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: t
  };
  return typeof r == "string" ? r in Yr ? {
    transitionProperty: Yr[r].transitionProperty,
    ...i,
    ...Yr[r].common,
    ...Yr[r][et[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...i,
    ...r.common,
    ...r[et[e]]
  };
}
function _o({
  duration: r,
  exitDuration: e,
  timingFunction: n,
  mounted: t,
  onEnter: i,
  onExit: a,
  onEntered: s,
  onExited: c,
  enterDelay: f,
  exitDelay: y
}) {
  const p = tr(), m = ln(), g = p.respectReducedMotion ? m : !1, [v, w] = Hr(g ? 0 : r), [k, j] = Hr(t ? "entered" : "exited"), E = dr(-1), R = dr(-1), O = dr(-1), M = (_) => {
    const F = _ ? i : a, N = _ ? s : c;
    window.clearTimeout(E.current);
    const W = g ? 0 : _ ? r : e;
    w(W), W === 0 ? (typeof F == "function" && F(), typeof N == "function" && N(), j(_ ? "entered" : "exited")) : O.current = requestAnimationFrame(() => {
      Kt.flushSync(() => {
        j(_ ? "pre-entering" : "pre-exiting");
      }), O.current = requestAnimationFrame(() => {
        typeof F == "function" && F(), j(_ ? "entering" : "exiting"), E.current = window.setTimeout(() => {
          typeof N == "function" && N(), j(_ ? "entered" : "exited");
        }, W);
      });
    });
  }, H = (_) => {
    if (window.clearTimeout(R.current), typeof (_ ? f : y) != "number") {
      M(_);
      return;
    }
    R.current = window.setTimeout(
      () => {
        M(_);
      },
      _ ? f : y
    );
  };
  return cn(() => {
    H(t);
  }, [t]), K(
    () => () => {
      window.clearTimeout(E.current), cancelAnimationFrame(O.current);
    },
    []
  ), {
    transitionDuration: v,
    transitionStatus: k,
    transitionTimingFunction: n || "ease"
  };
}
function wt({
  keepMounted: r,
  transition: e = "fade",
  duration: n = 250,
  exitDuration: t = n,
  mounted: i,
  children: a,
  timingFunction: s = "ease",
  onExit: c,
  onEntered: f,
  onEnter: y,
  onExited: p,
  enterDelay: m,
  exitDelay: g
}) {
  const { transitionDuration: v, transitionStatus: w, transitionTimingFunction: k } = _o({
    mounted: i,
    exitDuration: t,
    duration: n,
    timingFunction: s,
    onExit: c,
    onEntered: f,
    onEnter: y,
    onExited: p,
    enterDelay: m,
    exitDelay: g
  });
  return v === 0 ? i ? /* @__PURE__ */ h.jsx(h.Fragment, { children: a({}) }) : r ? a({ display: "none" }) : null : w === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ h.jsx(h.Fragment, { children: a(
    Ro({
      transition: e,
      duration: v,
      state: w,
      timingFunction: k
    })
  ) });
}
wt.displayName = "@mantine/core/Transition";
var V = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const xt = U(({ className: r, ...e }, n) => /* @__PURE__ */ h.jsxs(D, { component: "span", className: rr(V.barsLoader, r), ...e, ref: n, children: [
  /* @__PURE__ */ h.jsx("span", { className: V.bar }),
  /* @__PURE__ */ h.jsx("span", { className: V.bar }),
  /* @__PURE__ */ h.jsx("span", { className: V.bar })
] }));
xt.displayName = "@mantine/core/Bars";
const Ct = U(({ className: r, ...e }, n) => /* @__PURE__ */ h.jsxs(D, { component: "span", className: rr(V.dotsLoader, r), ...e, ref: n, children: [
  /* @__PURE__ */ h.jsx("span", { className: V.dot }),
  /* @__PURE__ */ h.jsx("span", { className: V.dot }),
  /* @__PURE__ */ h.jsx("span", { className: V.dot })
] }));
Ct.displayName = "@mantine/core/Dots";
const Rt = U(({ className: r, ...e }, n) => /* @__PURE__ */ h.jsx(D, { component: "span", className: rr(V.ovalLoader, r), ...e, ref: n }));
Rt.displayName = "@mantine/core/Oval";
const _t = {
  bars: xt,
  oval: Rt,
  dots: Ct
}, Eo = {
  loaders: _t,
  type: "oval"
}, To = (r, { size: e, color: n }) => ({
  root: {
    "--loader-size": Q(e, "loader-size"),
    "--loader-color": n ? de(n, r) : void 0
  }
}), Gr = Ce((r, e) => {
  const n = Z("Loader", Eo, r), {
    size: t,
    color: i,
    type: a,
    vars: s,
    className: c,
    style: f,
    classNames: y,
    styles: p,
    unstyled: m,
    loaders: g,
    variant: v,
    children: w,
    ...k
  } = n, j = _r({
    name: "Loader",
    props: n,
    classes: V,
    className: c,
    style: f,
    classNames: y,
    styles: p,
    unstyled: m,
    vars: s,
    varsResolver: To
  });
  return w ? /* @__PURE__ */ h.jsx(D, { ...j("root"), ref: e, ...k, children: w }) : /* @__PURE__ */ h.jsx(
    D,
    {
      ...j("root"),
      ref: e,
      component: g[a],
      variant: v,
      size: t,
      ...k
    }
  );
});
Gr.defaultLoaders = _t;
Gr.classes = V;
Gr.displayName = "@mantine/core/Loader";
var pr = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844", groupSection: "m_70be2a01" };
const tt = {
  orientation: "horizontal"
}, ko = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": u(e) }
}), _e = Ce((r, e) => {
  const n = Z("ButtonGroup", tt, r), {
    className: t,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    orientation: f,
    vars: y,
    borderWidth: p,
    variant: m,
    mod: g,
    ...v
  } = Z("ButtonGroup", tt, r), w = _r({
    name: "ButtonGroup",
    props: n,
    classes: pr,
    className: t,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: y,
    varsResolver: ko,
    rootSelector: "group"
  });
  return /* @__PURE__ */ h.jsx(
    D,
    {
      ...w("group"),
      ref: e,
      variant: m,
      mod: [{ "data-orientation": f }, g],
      role: "group",
      ...v
    }
  );
});
_e.classes = pr;
_e.displayName = "@mantine/core/ButtonGroup";
const nt = {}, jo = (r, { radius: e, color: n, gradient: t, variant: i, autoContrast: a, size: s }) => {
  const c = r.variantColorResolver({
    color: n || r.primaryColor,
    theme: r,
    gradient: t,
    variant: i || "filled",
    autoContrast: a
  });
  return {
    groupSection: {
      "--section-height": Q(s, "section-height"),
      "--section-padding-x": Q(s, "section-padding-x"),
      "--section-fz": s != null && s.includes("compact") ? zr(s.replace("compact-", "")) : zr(s),
      "--section-radius": e === void 0 ? void 0 : ct(e),
      "--section-bg": n || i ? c.background : void 0,
      "--section-color": c.color,
      "--section-bd": n || i ? c.border : void 0
    }
  };
}, Ee = Ce((r, e) => {
  const n = Z("ButtonGroupSection", nt, r), {
    className: t,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: f,
    variant: y,
    gradient: p,
    radius: m,
    autoContrast: g,
    ...v
  } = Z("ButtonGroupSection", nt, r), w = _r({
    name: "ButtonGroupSection",
    props: n,
    classes: pr,
    className: t,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: f,
    varsResolver: jo,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ h.jsx(D, { ...w("groupSection"), ref: e, variant: y, ...v });
});
Ee.classes = pr;
Ee.displayName = "@mantine/core/ButtonGroupSection";
const Po = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${u(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, Oo = {}, No = (r, { radius: e, color: n, gradient: t, variant: i, size: a, justify: s, autoContrast: c }) => {
  const f = r.variantColorResolver({
    color: n || r.primaryColor,
    theme: r,
    gradient: t,
    variant: i || "filled",
    autoContrast: c
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Q(a, "button-height"),
      "--button-padding-x": Q(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? zr(a.replace("compact-", "")) : zr(a),
      "--button-radius": e === void 0 ? void 0 : ct(e),
      "--button-bg": n || i ? f.background : void 0,
      "--button-hover": n || i ? f.hover : void 0,
      "--button-color": f.color,
      "--button-bd": n || i ? f.border : void 0,
      "--button-hover-color": n || i ? f.hoverColor : void 0
    }
  };
}, Er = $t((r, e) => {
  const n = Z("Button", Oo, r), {
    style: t,
    vars: i,
    className: a,
    color: s,
    disabled: c,
    children: f,
    leftSection: y,
    rightSection: p,
    fullWidth: m,
    variant: g,
    radius: v,
    loading: w,
    loaderProps: k,
    gradient: j,
    classNames: E,
    styles: R,
    unstyled: O,
    "data-disabled": M,
    autoContrast: H,
    mod: _,
    ...F
  } = n, N = _r({
    name: "Button",
    props: n,
    classes: pr,
    className: a,
    style: t,
    classNames: E,
    styles: R,
    unstyled: O,
    vars: i,
    varsResolver: No
  }), W = !!y, mr = !!p;
  return /* @__PURE__ */ h.jsxs(
    Re,
    {
      ref: e,
      ...N("root", { active: !c && !w && !M }),
      unstyled: O,
      variant: g,
      disabled: c || w,
      mod: [
        {
          disabled: c || M,
          loading: w,
          block: m,
          "with-left-section": W,
          "with-right-section": mr
        },
        _
      ],
      ...F,
      children: [
        /* @__PURE__ */ h.jsx(wt, { mounted: !!w, transition: Po, duration: 150, children: (yr) => /* @__PURE__ */ h.jsx(D, { component: "span", ...N("loader", { style: yr }), "aria-hidden": !0, children: /* @__PURE__ */ h.jsx(
          Gr,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...k
          }
        ) }) }),
        /* @__PURE__ */ h.jsxs("span", { ...N("inner"), children: [
          y && /* @__PURE__ */ h.jsx(D, { component: "span", ...N("section"), mod: { position: "left" }, children: y }),
          /* @__PURE__ */ h.jsx(D, { component: "span", mod: { loading: w }, ...N("label"), children: f }),
          p && /* @__PURE__ */ h.jsx(D, { component: "span", ...N("section"), mod: { position: "right" }, children: p })
        ] })
      ]
    }
  );
});
Er.classes = pr;
Er.displayName = "@mantine/core/Button";
Er.Group = _e;
Er.GroupSection = Ee;
const Mo = {};
function Lo({ children: r }) {
  return /* @__PURE__ */ h.jsx(yt, { theme: Mo, defaultColorScheme: "auto", children: r });
}
function Io({ children: r, ...e }) {
  return /* @__PURE__ */ h.jsx(Er, { ...e, children: r });
}
export {
  Io as Button,
  Lo as ThemeProvider
};
//# sourceMappingURL=graylog-components-library.js.map
