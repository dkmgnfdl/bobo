(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3463: function (e, t, r) {
      "use strict";
      var n = r(3887),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function u(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var i = p(r);
            i && i !== h && e(t, i, n);
          }
          var a = l(r);
          f && (a = a.concat(f(r)));
          for (var s = u(t), v = u(r), m = 0; m < a.length; ++m) {
            var y = a[m];
            if (!o[y] && !(n && n[y]) && !(v && v[y]) && !(s && s[y])) {
              var g = d(r, y);
              try {
                c(t, y, g);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    3459: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        v = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case o:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case d:
                    case m:
                    case v:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function S(e) {
        return k(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = m),
        (t.Memo = v),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return S(e) || k(e) === l;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return k(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === d;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === m;
        }),
        (t.isMemo = function (e) {
          return k(e) === v;
        }),
        (t.isPortal = function (e) {
          return k(e) === i;
        }),
        (t.isProfiler = function (e) {
          return k(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === a;
        }),
        (t.isSuspense = function (e) {
          return k(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === f ||
            e === s ||
            e === a ||
            e === p ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === v ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === g ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = k);
    },
    3887: function (e, t, r) {
      "use strict";
      e.exports = r(3459);
    },
    6570: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(2357);
        },
      ]);
    },
    8222: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return i;
        },
      });
      var n = "https://api.cow.fi",
        i = {
          title: "CoW Protocol",
          metatitle_tokenDetail: "Live Token Price Chart & Metrics",
          description:
            "CoW Protocol finds the lowest prices from all decentralized exchanges and DEX aggregators & saves you more with p2p trading and protection from MEV ",
          descriptionShort: "The smartest way to trade",
          url: {
            root: "https://cow.fi",
            swap: "https://swap.cow.fi/#/1/swap/DAI/COW?sellAmount=500",
            docs: "https://docs.cow.fi",
            api: n + "/mainnet",
            apiDocs: n + "/docs",
            daos: "/daos",
            cowamm: "/cow-amm",
            widget: "/widget",
            widgetTnC: "/widget/terms-and-conditions",
            careers: "/careers",
            widgetConfigurator: "widget.cow.fi",
            analytics: "https://dune.com/cowprotocol/cowswap",
            explorer: "https://explorer.cow.fi",
            securityPortal: "https://app.chainpatrol.io/cow",
            grants: "https://grants.cow.fi",
            mevBlocker: "https://mevblocker.io/",
          },
          greenhouse: {
            api: "https://boards-api.greenhouse.io/v1/boards/cowswap/jobs?content=true",
          },
          social: {
            twitter: {
              label: "Twitter",
              account: "@CoWSwap",
              url: "https://twitter.com/CoWSwap",
            },
            discord: {
              label: "Discord",
              url: "https://discord.com/invite/cowprotocol",
            },
            github: { label: "GitHub", url: "https://github.com/cowprotocol/" },
            forum: { label: "Forum", url: "https://forum.cow.fi/" },
          },
          utm: { utmSource: "cow.fi", utmMedium: "web" },
          tokenDisclaimer:
            "IMPORTANT DISCLAIMER: The information presented on the Interface, including hyperlinked sites, associated applications, forums, blogs, social media accounts, and other platforms, serves as general information sourced from third-party providers. We want to emphasise that we do not provide any warranties regarding the accuracy or up-to-dateness of the content. None of the content should be interpreted as financial, tax, legal, or any other type of advice. Your use or reliance on the content is entirely at your own discretion and risk. Before making any decisions, it is crucial that you undertake your own research, review, analysis, and verification of our content. Trading carries significant risks and can result in substantial losses, so it is advisable to consult your own legal, financial, tax, or other professional advisors prior to making any decisions. None of the content on the Interface is intended as a solicitation or offer.",
        };
    },
    8241: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        $t: function () {
          return $;
        },
        br: function () {
          return V;
        },
        QC: function () {
          return L;
        },
      });
      var i = r(2784);
      let o = 0;
      function a(e, t) {
        let r = `atom${++o}`,
          n = { toString: () => r };
        return (
          "function" == typeof e
            ? (n.read = e)
            : ((n.init = e),
              (n.read = (e) => e(n)),
              (n.write = (e, t, r) =>
                t(n, "function" == typeof r ? r(e(n)) : r))),
          t && (n.write = t),
          n
        );
      }
      let s = (e) => "init" in e,
        u = (e) => !!e.write,
        c = new WeakMap(),
        l = (e, t) => {
          c.set(e, t), e.catch(() => {}).finally(() => c.delete(e));
        },
        f = (e, t) => {
          let r = c.get(e);
          r && (c.delete(e), r(t));
        },
        d = (e, t) => {
          (e.status = "fulfilled"), (e.value = t);
        },
        p = (e, t) => {
          (e.status = "rejected"), (e.reason = t);
        },
        h = (e) => "function" == typeof (null == e ? void 0 : e.then),
        v = (e, t) => "v" in e && "v" in t && Object.is(e.v, t.v),
        m = (e, t) => "e" in e && "e" in t && Object.is(e.e, t.e),
        y = (e) => "v" in e && e.v instanceof Promise,
        g = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
        b = (e) => {
          if ("e" in e) throw e.e;
          return e.v;
        },
        w = () => {
          let e, t, r;
          let n = new WeakMap(),
            i = new WeakMap(),
            o = new Map();
          (e = new Set()), (t = new Set()), (r = new Set());
          let a = (e) => n.get(e),
            c = (e, t) => {
              Object.freeze(t);
              let r = n.get(e);
              if ((n.set(e, t), o.has(e) || o.set(e, r), r && y(r))) {
                let e =
                  "v" in t
                    ? t.v instanceof Promise
                      ? t.v
                      : Promise.resolve(t.v)
                    : Promise.reject(t.e);
                f(r.v, e);
              }
            },
            w = (e, t, r) => {
              let n = new Map(),
                i = !1;
              r.forEach((r, o) => {
                r || o !== e || (r = t),
                  r
                    ? (n.set(o, r), t.d.get(o) !== r && (i = !0))
                    : console.warn("[Bug] atom state not found");
              }),
                (i || t.d.size !== n.size) && (t.d = n);
            },
            k = (e, t, r) => {
              let n = a(e),
                i = { d: (null == n ? void 0 : n.d) || new Map(), v: t };
              if ((r && w(e, i, r), n && v(n, i) && n.d === i.d)) return n;
              if (n && y(n) && y(i) && g(n, i)) {
                if (n.d === i.d) return n;
                i.v = n.v;
              }
              return c(e, i), i;
            },
            S = (e, t, r, n) => {
              if (h(t)) {
                let i;
                let o = new Promise((n, s) => {
                  let u = !1;
                  t.then(
                    (t) => {
                      if (!u) {
                        u = !0;
                        let i = a(e),
                          s = k(e, o, r);
                        d(o, t),
                          n(t),
                          (null == i ? void 0 : i.d) !== s.d &&
                            P(e, s, null == i ? void 0 : i.d);
                      }
                    },
                    (t) => {
                      if (!u) {
                        u = !0;
                        let n = a(e),
                          i = k(e, o, r);
                        p(o, t),
                          s(t),
                          (null == n ? void 0 : n.d) !== i.d &&
                            P(e, i, null == n ? void 0 : n.d);
                      }
                    }
                  ),
                    (i = (e) => {
                      u ||
                        ((u = !0),
                        e.then(
                          (e) => d(o, e),
                          (e) => p(o, e)
                        ),
                        n(e));
                    });
                });
                return (
                  (o.orig = t),
                  (o.status = "pending"),
                  l(o, (e) => {
                    e && i(e), null == n || n();
                  }),
                  k(e, o, r)
                );
              }
              return k(e, t, r);
            },
            _ = (e, t, r) => {
              let n = a(e),
                i = { d: (null == n ? void 0 : n.d) || new Map(), e: t };
              return (r && w(e, i, r), n && m(n, i) && n.d === i.d)
                ? n
                : (c(e, i), i);
            },
            O = (e) => {
              let t, r;
              let n = a(e);
              if (
                n &&
                (n.d.forEach((t, r) => {
                  r === e || i.has(r) || O(r);
                }),
                Array.from(n.d).every(([t, r]) => t === e || a(t) === r))
              )
                return n;
              let o = new Map(),
                c = !0;
              try {
                let n = e.read(
                  (t) => {
                    if (t === e) {
                      let e = a(t);
                      if (e) return o.set(t, e), b(e);
                      if (s(t)) return o.set(t, void 0), t.init;
                      throw Error("no atom init");
                    }
                    let r = O(t);
                    return o.set(t, r), b(r);
                  },
                  {
                    get signal() {
                      return t || (t = new AbortController()), t.signal;
                    },
                    get setSelf() {
                      return (
                        u(e) ||
                          console.warn(
                            "setSelf function cannot be used with read-only atom"
                          ),
                        !r &&
                          u(e) &&
                          (r = (...t) => {
                            if (
                              (c &&
                                console.warn(
                                  "setSelf function cannot be called in sync"
                                ),
                              !c)
                            )
                              return A(e, ...t);
                          }),
                        r
                      );
                    },
                  }
                );
                return S(e, n, o, () => (null == t ? void 0 : t.abort()));
              } catch (t) {
                return _(e, t, o);
              } finally {
                c = !1;
              }
            },
            E = (e) => {
              let t = i.get(e);
              return t || (t = D(e)), t;
            },
            x = (e, t) =>
              !t.l.size && (!t.t.size || (1 === t.t.size && t.t.has(e))),
            T = (e) => {
              let t = i.get(e);
              t && x(e, t) && j(e);
            },
            I = (e) => {
              let t = new Map(),
                r = new WeakMap(),
                n = (e) => {
                  let o = i.get(e);
                  null == o ||
                    o.t.forEach((i) => {
                      i !== e &&
                        (t.set(i, (t.get(i) || new Set()).add(e)),
                        r.set(i, (r.get(i) || 0) + 1),
                        n(i));
                    });
                };
              n(e);
              let o = (e) => {
                let n = i.get(e);
                null == n ||
                  n.t.forEach((n) => {
                    var i;
                    if (n !== e) {
                      let e = r.get(n);
                      if ((e && r.set(n, --e), !e)) {
                        let e = !!(null == (i = t.get(n)) ? void 0 : i.size);
                        if (e) {
                          let t = a(n),
                            r = O(n);
                          e = !t || !v(t, r);
                        }
                        e || t.forEach((e) => e.delete(n));
                      }
                      o(n);
                    }
                  });
              };
              o(e);
            },
            C = (e, ...r) => {
              let n = !0,
                i = e.write(
                  (e) => b(O(e)),
                  (r, ...i) => {
                    let o;
                    if (r === e) {
                      if (!s(r)) throw Error("atom not writable");
                      let e = a(r),
                        t = S(r, i[0]);
                      (e && v(e, t)) || I(r);
                    } else o = C(r, ...i);
                    if (!n) {
                      let e = R();
                      t.forEach((t) => t({ type: "async-write", flushed: e }));
                    }
                    return o;
                  },
                  ...r
                );
              return (n = !1), i;
            },
            A = (e, ...r) => {
              let n = C(e, ...r),
                i = R();
              return t.forEach((e) => e({ type: "write", flushed: i })), n;
            },
            D = (e, t) => {
              let n = { t: new Set(t && [t]), l: new Set() };
              if (
                (i.set(e, n),
                r.add(e),
                O(e).d.forEach((t, r) => {
                  let n = i.get(r);
                  n ? n.t.add(e) : r !== e && D(r, e);
                }),
                O(e),
                u(e) && e.onMount)
              ) {
                let t = e.onMount((...t) => A(e, ...t));
                t && (n.u = t);
              }
              return n;
            },
            j = (e) => {
              var t;
              let n = null == (t = i.get(e)) ? void 0 : t.u;
              n && n(), i.delete(e), r.delete(e);
              let o = a(e);
              o
                ? (y(o) && f(o.v),
                  o.d.forEach((t, r) => {
                    if (r !== e) {
                      let t = i.get(r);
                      t && (t.t.delete(e), x(r, t) && j(r));
                    }
                  }))
                : console.warn("[Bug] could not find atom state to unmount", e);
            },
            P = (e, t, r) => {
              let n = new Set(t.d.keys());
              null == r ||
                r.forEach((t, r) => {
                  if (n.has(r)) {
                    n.delete(r);
                    return;
                  }
                  let o = i.get(r);
                  o && (o.t.delete(e), x(r, o) && j(r));
                }),
                n.forEach((t) => {
                  let r = i.get(t);
                  r ? r.t.add(e) : i.has(e) && D(t, e);
                });
            },
            R = () => {
              let t;
              for (t = new Set(); o.size; ) {
                let e = Array.from(o);
                o.clear(),
                  e.forEach(([e, r]) => {
                    let n = a(e);
                    if (n) {
                      n.d !== (null == r ? void 0 : r.d) &&
                        P(e, n, null == r ? void 0 : r.d);
                      let o = i.get(e);
                      o &&
                        !(r && !y(r) && (v(r, n) || m(r, n))) &&
                        (o.l.forEach((e) => e()), t.add(e));
                    } else console.warn("[Bug] no atom state to flush");
                  });
              }
              return e.forEach((e) => e("state")), t;
            };
          return {
            get: (e) => b(O(e)),
            set: A,
            sub: (r, n) => {
              let i = E(r),
                o = R(),
                a = i.l;
              return (
                a.add(n),
                e.forEach((e) => e("sub")),
                t.forEach((e) => e({ type: "sub", flushed: o })),
                () => {
                  a.delete(n),
                    T(r),
                    e.forEach((e) => e("unsub")),
                    t.forEach((e) => e({ type: "unsub" }));
                }
              );
            },
            dev_subscribe_store: (r, n) =>
              2 !== n
                ? (console.warn(
                    "The current StoreListener revision is 2. The older ones are deprecated."
                  ),
                  e.add(r),
                  () => {
                    e.delete(r);
                  })
                : (t.add(r),
                  () => {
                    t.delete(r);
                  }),
            dev_get_mounted_atoms: () => r.values(),
            dev_get_atom_state: (e) => n.get(e),
            dev_get_mounted: (e) => i.get(e),
            dev_restore_atoms: (e) => {
              for (let [t, r] of e) s(t) && (S(t, r), I(t));
              let r = R();
              t.forEach((e) => e({ type: "restore", flushed: r }));
            },
          };
        },
        k = () => (n || (n = w()), n),
        S = (0, i.createContext)(void 0),
        _ = (e) => {
          let t = (0, i.useContext)(S);
          return (null == e ? void 0 : e.store) || t || k();
        },
        O = (e) => "function" == typeof (null == e ? void 0 : e.then),
        E =
          i.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          });
      var x = r(5632);
      let T = Symbol(),
        I = (e) => "function" == typeof (null == e ? void 0 : e.then),
        C = (function (e) {
          let t, r;
          let n = {
            getItem: (n, i) => {
              var o, a;
              let s = (e) => {
                  if (t !== (e = e || "")) {
                    try {
                      r = JSON.parse(e);
                    } catch {
                      return i;
                    }
                    t = e;
                  }
                  return r;
                },
                u =
                  null != (a = null == (o = e()) ? void 0 : o.getItem(n))
                    ? a
                    : null;
              return I(u) ? u.then(s) : s(u);
            },
            setItem: (t, r) => {
              var n;
              return null == (n = e())
                ? void 0
                : n.setItem(t, JSON.stringify(r));
            },
            removeItem: (t) => {
              var r;
              return null == (r = e()) ? void 0 : r.removeItem(t);
            },
          };
          return (
            "undefined" != typeof window &&
              "function" == typeof window.addEventListener &&
              (n.subscribe = (t, r, n) => {
                if (!(e() instanceof window.Storage)) return () => {};
                let i = (i) => {
                  if (i.storageArea === e() && i.key === t) {
                    let e;
                    try {
                      e = JSON.parse(i.newValue || "");
                    } catch {
                      e = n;
                    }
                    r(e);
                  }
                };
                return (
                  window.addEventListener("storage", i),
                  () => {
                    window.removeEventListener("storage", i);
                  }
                );
              }),
            n
          );
        })(() => ("undefined" != typeof window ? window.localStorage : void 0));
      var A = (function (e, t, r = C, n) {
          let i = null == n ? void 0 : n.unstable_getOnInit,
            o = a(i ? r.getItem(e, t) : t);
          return (
            (o.debugPrivate = !0),
            (o.onMount = (n) => {
              let o;
              return (
                i || n(r.getItem(e, t)),
                r.subscribe && (o = r.subscribe(e, n, t)),
                o
              );
            }),
            a(
              (e) => e(o),
              (n, i, a) => {
                let s = "function" == typeof a ? a(n(o)) : a;
                return s === T
                  ? (i(o, t), r.removeItem(e))
                  : I(s)
                  ? s.then((t) => (i(o, t), r.setItem(e, t)))
                  : (i(o, s), r.setItem(e, s));
              }
            )
          );
        })("utm-atom:v1", void 0),
        D = r(8588);
      r(8222);
      var j = "utm_source",
        P = "utm_medium",
        R = "utm_campaign",
        F = "utm_content",
        M = "utm_term",
        N = [j, P, R, F, M];
      function q(e) {
        return (
          !!e &&
          !!(
            e.utmSource ||
            e.utmCampaign ||
            e.utmContent ||
            e.utmMedium ||
            e.utmTerm
          )
        );
      }
      function L() {
        return (function (e, t) {
          let r = _(t),
            [[n, o, a], s] = (0, i.useReducer)(
              (t) => {
                let n = r.get(e);
                return Object.is(t[0], n) && t[1] === r && t[2] === e
                  ? t
                  : [n, r, e];
              },
              void 0,
              () => [r.get(e), r, e]
            ),
            u = n;
          (o !== r || a !== e) && (s(), (u = r.get(e)));
          let c = null == t ? void 0 : t.delay;
          return (
            (0, i.useEffect)(() => {
              let t = r.sub(e, () => {
                if ("number" == typeof c) {
                  setTimeout(s, c);
                  return;
                }
                s();
              });
              return s(), t;
            }, [r, e, c]),
            (0, i.useDebugValue)(u),
            O(u) ? E(u) : u
          );
        })(A);
      }
      function V() {
        var e = (0, x.useRouter)(),
          t = (function (e, t) {
            let r = _(void 0);
            return (0, i.useCallback)(
              (...t) => {
                if (!("write" in e)) throw Error("not writable atom");
                return r.set(e, ...t);
              },
              [r, e]
            );
          })(A);
        (0, i.useEffect)(
          function () {
            var r,
              n,
              i,
              o = {
                utmSource: (r = e.query)[j] || void 0,
                utmMedium: r[P] || void 0,
                utmCampaign: r[R] || void 0,
                utmContent: r[F] || void 0,
                utmTerm: r[M] || void 0,
              };
            q(o) && t(o),
              (n = !1),
              (i = e.query),
              N.forEach(function (e) {
                i[e] && (delete i[e], (n = !0));
              }),
              n && e.replace({ pathname: e.pathname, query: i });
          },
          [e, t]
        );
      }
      var z = r(4022),
        Q = r(4670),
        B = r(3286),
        G = r(2322),
        U = r(9097),
        W = r.n(U);
      function $(e) {
        var t = e.href,
          r = e.as,
          n = e.children,
          o = e.defaultUtm,
          a = (0, B._)(e, ["href", "as", "children", "defaultUtm"]),
          s = L(),
          u = (0, i.useMemo)(
            function () {
              var e,
                r,
                n,
                i,
                a,
                u,
                c = (function () {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  var n = !0,
                    i = !1,
                    o = void 0;
                  try {
                    for (
                      var a, s = t[Symbol.iterator]();
                      !(n = (a = s.next()).done);
                      n = !0
                    ) {
                      var u = a.value;
                      if (q(u)) return u || null;
                    }
                  } catch (e) {
                    (i = !0), (o = e);
                  } finally {
                    try {
                      n || null == s.return || s.return();
                    } finally {
                      if (i) throw o;
                    }
                  }
                  return null;
                })(s, o);
              return c && "string" == typeof t
                ? ((e = window.location.origin),
                  (r = new URL(t, e)),
                  (i = (n = (0, D._)(r.hash.split("?"), 2))[0]),
                  (a = n[1]),
                  (u = new URLSearchParams(a)),
                  c.utmCampaign && u.set(R, c.utmCampaign),
                  c.utmContent && u.set(F, c.utmContent),
                  c.utmMedium && u.set(P, c.utmMedium),
                  c.utmSource && u.set(j, c.utmSource),
                  c.utmTerm && u.set(M, c.utmTerm),
                  r.origin +
                    r.pathname +
                    r.search +
                    "".concat(i, "?").concat(u.toString()))
                : t;
            },
            [s, o, t]
          );
        return (0, G.jsx)(
          W(),
          (0, Q._)(
            (0, z._)(
              { href: u, as: r, target: "_blank", rel: "noopener nofollow" },
              a
            ),
            { children: n }
          )
        );
      }
    },
    2357: function (e, t, r) {
      "use strict";
      let n;
      r.r(t),
        r.d(t, {
          default: function () {
            return ng;
          },
        });
      var i,
        o,
        a,
        s,
        u = r(4022),
        c = r(2322),
        l = r(913),
        f = r(7729),
        d = r.n(f),
        p = r(5632),
        h = r.n(p),
        v = r(8222),
        m = r(4670),
        y = r(8588),
        g = r(2784),
        b = r(1877),
        w = r(3657),
        k = "G-FC7FBG6T06";
      function S(e) {
        console.log("[Analytics] Page view", e),
          b.ZP.send({ hitType: "pageview", page_path: e });
      }
      function _() {
        var e = (0, y._)((0, g.useState)({ isInitialized: !1 }), 2),
          t = e[0],
          r = e[1];
        return (
          (0, g.useEffect)(
            function () {
              var e = t.isInitialized;
              return (
                k &&
                  !e &&
                  (console.log("[Analytics] Tracking ID", k),
                  b.ZP.initialize(k, {
                    gaOptions: { storage: "none", storeGac: !1 },
                  }),
                  b.ZP.set({
                    anonymizeIp: !0,
                    customBrowserType: w.tq
                      ? "web3" in window || "ethereum" in window
                        ? "mobileWeb3"
                        : "mobileRegular"
                      : "desktop",
                  }),
                  (function () {
                    var e = new URLSearchParams(window.location.search);
                    if (e) {
                      var t = e.get("utm_source"),
                        r = e.get("utm_medium"),
                        n = e.get("utm_campaign");
                      t &&
                        (document.cookie = "source=".concat(
                          t,
                          ";domain=.cow.fi;path=/"
                        )),
                        r &&
                          (document.cookie = "medium=".concat(
                            r,
                            ";domain=.cow.fi;path=/"
                          )),
                        n &&
                          (document.cookie = "campaign=".concat(
                            n,
                            ";domain=.cow.fi;path=/"
                          ));
                    }
                  })(),
                  S(h().pathname),
                  h().events.on("routeChangeComplete", S),
                  r(function (e) {
                    return (0, m._)((0, u._)({}, e), { isInitialized: !0 });
                  })),
                function () {
                  e && h().events.off("routeChangeComplete", S);
                }
              );
            },
            [t]
          ),
          null
        );
      }
      var O = r(2970),
        E = r(996),
        x = r(2370),
        T = function (e) {
          var t = e.client,
            r = e.children,
            n = (0, x.K)(),
            i = g.useContext(n),
            o = g.useMemo(
              function () {
                return (0, O.pi)((0, O.pi)({}, i), { client: t || i.client });
              },
              [i, t]
            );
          return (
            (0, E.kG)(o.client, 46),
            g.createElement(n.Provider, { value: o }, r)
          );
        };
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function C(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function A(e, t, r) {
        return (
          t && C(e.prototype, t),
          r && C(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var D = function () {
          return "function" == typeof Symbol;
        },
        j = function (e) {
          return D() && !!Symbol[e];
        },
        P = function (e) {
          return j(e) ? Symbol[e] : "@@" + e;
        };
      D() && !j("observable") && (Symbol.observable = Symbol("observable"));
      var R = P("iterator"),
        F = P("observable"),
        M = P("species");
      function N(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw TypeError(r + " is not a function");
          return r;
        }
      }
      function q(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[M]) && (t = void 0),
          void 0 !== t ? t : $
        );
      }
      function L(e) {
        L.log
          ? L.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function V(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (e) {
            L(e);
          }
        });
      }
      function z(e) {
        var t = e._cleanup;
        if (void 0 !== t) {
          if (((e._cleanup = void 0), !t)) return;
          try {
            if ("function" == typeof t) t();
            else {
              var r = N(t, "unsubscribe");
              r && r.call(t);
            }
          } catch (e) {
            L(e);
          }
        }
      }
      function Q(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
      }
      function B(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = N(n, t);
          switch (t) {
            case "next":
              i && i.call(n, r);
              break;
            case "error":
              if ((Q(e), i)) i.call(n, r);
              else throw r;
              break;
            case "complete":
              Q(e), i && i.call(n);
          }
        } catch (e) {
          L(e);
        }
        "closed" === e._state
          ? z(e)
          : "running" === e._state && (e._state = "ready");
      }
      function G(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" === e._state) {
            e._queue.push({ type: t, value: r });
            return;
          }
          if ("ready" !== e._state) {
            (e._state = "buffering"),
              (e._queue = [{ type: t, value: r }]),
              V(function () {
                return (function (e) {
                  var t = e._queue;
                  if (t) {
                    (e._queue = void 0), (e._state = "ready");
                    for (
                      var r = 0;
                      r < t.length &&
                      (B(e, t[r].type, t[r].value), "closed" !== e._state);
                      ++r
                    );
                  }
                })(e);
              });
            return;
          }
          B(e, t, r);
        }
      }
      var U = (function () {
          function e(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            var r = new W(this);
            try {
              this._cleanup = t.call(void 0, r);
            } catch (e) {
              r.error(e);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          return (
            (e.prototype.unsubscribe = function () {
              "closed" !== this._state && (Q(this), z(this));
            }),
            A(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        W = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              G(this._subscription, "next", e);
            }),
            (t.error = function (e) {
              G(this._subscription, "error", e);
            }),
            (t.complete = function () {
              G(this._subscription, "complete");
            }),
            A(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        $ = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw TypeError("Observable cannot be called as a function");
            if ("function" != typeof t)
              throw TypeError("Observable initializer must be a function");
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return (
                ("object" != typeof e || null === e) &&
                  (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2],
                  }),
                new U(e, this._subscriber)
              );
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (r, n) {
                if ("function" != typeof e) {
                  n(TypeError(e + " is not a function"));
                  return;
                }
                function i() {
                  o.unsubscribe(), r();
                }
                var o = t.subscribe({
                  next: function (t) {
                    try {
                      e(t, i);
                    } catch (e) {
                      n(e), o.unsubscribe();
                    }
                  },
                  error: n,
                  complete: r,
                });
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (q(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (q(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var r = q(this),
                n = arguments.length > 1,
                i = !1,
                o = arguments[1],
                a = o;
              return new r(function (r) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || n))
                      try {
                        a = e(a, t);
                      } catch (e) {
                        return r.error(e);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    if (!i && !n)
                      return r.error(
                        TypeError("Cannot reduce an empty sequence")
                      );
                    r.next(a), r.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (
                var e = this, t = arguments.length, r = Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              var i = q(this);
              return new i(function (t) {
                var n,
                  o = 0;
                return (
                  (function e(a) {
                    n = a.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        o === r.length
                          ? ((n = void 0), t.complete())
                          : e(i.from(r[o++]));
                      },
                    });
                  })(e),
                  function () {
                    n && (n.unsubscribe(), (n = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var r = q(this);
              return new r(function (n) {
                var i = [],
                  o = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (e) {
                          return n.error(e);
                        }
                      var o = r.from(t).subscribe({
                        next: function (e) {
                          n.next(e);
                        },
                        error: function (e) {
                          n.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(o);
                          e >= 0 && i.splice(e, 1), a();
                        },
                      });
                      i.push(o);
                    },
                    error: function (e) {
                      n.error(e);
                    },
                    complete: function () {
                      a();
                    },
                  });
                function a() {
                  o.closed && 0 === i.length && n.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    o.unsubscribe();
                };
              });
            }),
            (t[F] = function () {
              return this;
            }),
            (e.from = function (t) {
              var r = "function" == typeof this ? this : e;
              if (null == t) throw TypeError(t + " is not an object");
              var n = N(t, F);
              if (n) {
                var i = n.call(t);
                if (Object(i) !== i) throw TypeError(i + " is not an object");
                return i instanceof $ && i.constructor === r
                  ? i
                  : new r(function (e) {
                      return i.subscribe(e);
                    });
              }
              if (j("iterator") && (n = N(t, R)))
                return new r(function (e) {
                  V(function () {
                    if (!e.closed) {
                      for (
                        var r,
                          i = (function (e, t) {
                            var r =
                              ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                            if (r) return (r = r.call(e)).next.bind(r);
                            if (
                              Array.isArray(e) ||
                              (r = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return I(e, t);
                                  var r = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      e.constructor &&
                                      (r = e.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(e);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return I(e, t);
                                }
                              })(e))
                            ) {
                              r && (e = r);
                              var n = 0;
                              return function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              };
                            }
                            throw TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(n.call(t));
                        !(r = i()).done;

                      ) {
                        var o = r.value;
                        if ((e.next(o), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new r(function (e) {
                  V(function () {
                    if (!e.closed) {
                      for (var r = 0; r < t.length; ++r)
                        if ((e.next(t[r]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw TypeError(t + " is not observable");
            }),
            (e.of = function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              return new ("function" == typeof this ? this : e)(function (e) {
                V(function () {
                  if (!e.closed) {
                    for (var t = 0; t < r.length; ++t)
                      if ((e.next(r[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            A(e, null, [
              {
                key: M,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      D() &&
        Object.defineProperty($, Symbol("extensions"), {
          value: { symbol: F, hostReportError: L },
          configurable: !0,
        });
      var Y = r(5078);
      function J(e, t) {
        var r = t,
          n = [];
        return (
          e.definitions.forEach(function (e) {
            if ("OperationDefinition" === e.kind)
              throw (0, E._K)(
                70,
                e.operation,
                e.name ? " named '".concat(e.name.value, "'") : ""
              );
            "FragmentDefinition" === e.kind && n.push(e);
          }),
          void 0 === r &&
            ((0, E.kG)(1 === n.length, 71, n.length), (r = n[0].name.value)),
          (0, O.pi)((0, O.pi)({}, e), {
            definitions: (0, O.ev)(
              [
                {
                  kind: "OperationDefinition",
                  operation: "query",
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: r },
                      },
                    ],
                  },
                },
              ],
              e.definitions,
              !0
            ),
          })
        );
      }
      function K(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function H(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return (0, E.kG)(n, 72, r), n || null;
          default:
            return null;
        }
      }
      function Z(e) {
        return { __ref: String(e) };
      }
      function X(e) {
        return !!(e && "object" == typeof e && "string" == typeof e.__ref);
      }
      function ee(e, t, r, n) {
        if ("IntValue" === r.kind || "FloatValue" === r.kind)
          e[t.value] = Number(r.value);
        else if ("BooleanValue" === r.kind || "StringValue" === r.kind)
          e[t.value] = r.value;
        else if ("ObjectValue" === r.kind) {
          var i = {};
          r.fields.map(function (e) {
            return ee(i, e.name, e.value, n);
          }),
            (e[t.value] = i);
        } else if ("Variable" === r.kind) {
          var o = (n || {})[r.name.value];
          e[t.value] = o;
        } else if ("ListValue" === r.kind)
          e[t.value] = r.values.map(function (e) {
            var r = {};
            return ee(r, t, e, n), r[t.value];
          });
        else if ("EnumValue" === r.kind) e[t.value] = r.value;
        else if ("NullValue" === r.kind) e[t.value] = null;
        else throw (0, E._K)(81, t.value, r.kind);
      }
      var et = [
          "connection",
          "include",
          "skip",
          "client",
          "rest",
          "export",
          "nonreactive",
        ],
        er = Object.assign(
          function (e, t, r) {
            if (t && r && r.connection && r.connection.key) {
              if (!r.connection.filter || !(r.connection.filter.length > 0))
                return r.connection.key;
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return (
                n.forEach(function (e) {
                  i[e] = t[e];
                }),
                "".concat(r.connection.key, "(").concat(en(i), ")")
              );
            }
            var o = e;
            if (t) {
              var a = en(t);
              o += "(".concat(a, ")");
            }
            return (
              r &&
                Object.keys(r).forEach(function (e) {
                  -1 === et.indexOf(e) &&
                    (r[e] && Object.keys(r[e]).length
                      ? (o += "@".concat(e, "(").concat(en(r[e]), ")"))
                      : (o += "@".concat(e)));
                }),
              o
            );
          },
          {
            setStringify: function (e) {
              var t = en;
              return (en = e), t;
            },
          }
        ),
        en = function (e) {
          return JSON.stringify(e, ei);
        };
      function ei(e, t) {
        return (
          (0, Y.s)(t) &&
            !Array.isArray(t) &&
            (t = Object.keys(t)
              .sort()
              .reduce(function (e, r) {
                return (e[r] = t[r]), e;
              }, {})),
          t
        );
      }
      function eo(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return (
            e.arguments.forEach(function (e) {
              return ee(r, e.name, e.value, t);
            }),
            r
          );
        }
        return null;
      }
      function ea(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function es(e, t, r) {
        for (var n, i = 0, o = t.selections; i < o.length; i++) {
          var a = o[i];
          if (eu(a)) {
            if ("__typename" === a.name.value) return e[ea(a)];
          } else n ? n.push(a) : (n = [a]);
        }
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, u = n; s < u.length; s++) {
            var a = u[s],
              c = es(e, H(a, r).selectionSet, r);
            if ("string" == typeof c) return c;
          }
      }
      function eu(e) {
        return "Field" === e.kind;
      }
      function ec(e) {
        (0, E.kG)(e && "Document" === e.kind, 73);
        var t = e.definitions
          .filter(function (e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function (e) {
            if ("OperationDefinition" !== e.kind) throw (0, E._K)(74, e.kind);
            return e;
          });
        return (0, E.kG)(t.length <= 1, 75, t.length), e;
      }
      function el(e) {
        return (
          ec(e),
          e.definitions.filter(function (e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function ef(e) {
        return (
          e.definitions
            .filter(function (e) {
              return "OperationDefinition" === e.kind && !!e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function ed(e) {
        return e.definitions.filter(function (e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function ep(e) {
        var t = el(e);
        return (0, E.kG)(t && "query" === t.operation, 76), t;
      }
      function eh(e) {
        ec(e);
        for (var t, r = 0, n = e.definitions; r < n.length; r++) {
          var i = n[r];
          if ("OperationDefinition" === i.kind) {
            var o = i.operation;
            if ("query" === o || "mutation" === o || "subscription" === o)
              return i;
          }
          "FragmentDefinition" !== i.kind || t || (t = i);
        }
        if (t) return t;
        throw (0, E._K)(80);
      }
      function ev(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return (
          r &&
            r.length &&
            r.forEach(function (e) {
              e.defaultValue && ee(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
      function em(e, t) {
        return t ? t(e) : $.of();
      }
      function ey(e) {
        return "function" == typeof e ? new eb(e) : e;
      }
      function eg(e) {
        return e.request.length <= 1;
      }
      var eb = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return $.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(ey).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, r, n) {
              var i = ey(r),
                o = ey(n || new e(em));
              return new e(
                eg(i) && eg(o)
                  ? function (e) {
                      return t(e)
                        ? i.request(e) || $.of()
                        : o.request(e) || $.of();
                    }
                  : function (e, r) {
                      return t(e)
                        ? i.request(e, r) || $.of()
                        : o.request(e, r) || $.of();
                    }
              );
            }),
            (e.execute = function (e, t) {
              var r, n, i, o;
              return (
                e.request(
                  ((i = t.context),
                  (n = {
                    variables:
                      (r = (function (e) {
                        for (
                          var t = [
                              "query",
                              "operationName",
                              "variables",
                              "extensions",
                              "context",
                            ],
                            r = 0,
                            n = Object.keys(e);
                          r < n.length;
                          r++
                        ) {
                          var i = n[r];
                          if (0 > t.indexOf(i)) throw (0, E._K)(43, i);
                        }
                        return e;
                      })(t)).variables || {},
                    extensions: r.extensions || {},
                    operationName: r.operationName,
                    query: r.query,
                  }).operationName ||
                    (n.operationName =
                      "string" != typeof n.query ? ef(n.query) || void 0 : ""),
                  (o = (0, O.pi)({}, i)),
                  Object.defineProperty(n, "setContext", {
                    enumerable: !1,
                    value: function (e) {
                      o =
                        "function" == typeof e
                          ? (0, O.pi)((0, O.pi)({}, o), e(o))
                          : (0, O.pi)((0, O.pi)({}, o), e);
                    },
                  }),
                  Object.defineProperty(n, "getContext", {
                    enumerable: !1,
                    value: function () {
                      return (0, O.pi)({}, o);
                    },
                  }),
                  n)
                ) || $.of()
              );
            }),
            (e.concat = function (t, r) {
              var n = ey(t);
              if (eg(n))
                return !1 !== globalThis.__DEV__ && E.kG.warn(35, n), n;
              var i = ey(r);
              return new e(
                eg(i)
                  ? function (e) {
                      return (
                        n.request(e, function (e) {
                          return i.request(e) || $.of();
                        }) || $.of()
                      );
                    }
                  : function (e, t) {
                      return (
                        n.request(e, function (e) {
                          return i.request(e, t) || $.of();
                        }) || $.of()
                      );
                    }
              );
            }),
            (e.prototype.split = function (t, r, n) {
              return this.concat(e.split(t, r, n || new e(em)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw (0, E._K)(36);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })(),
        ew = eb.execute,
        ek = r(2674),
        eS = r(8660),
        e_ = r(2277),
        eO = r(781),
        eE = r(5115);
      let ex = Object.freeze({});
      function eT(e, t, r = eO.h8) {
        let n, i, o;
        let a = new Map();
        for (let e of Object.values(eE.h))
          a.set(
            e,
            (function (e, t) {
              let r = e[t];
              return "object" == typeof r
                ? r
                : "function" == typeof r
                ? { enter: r, leave: void 0 }
                : { enter: e.enter, leave: e.leave };
            })(t, e)
          );
        let s = Array.isArray(e),
          u = [e],
          c = -1,
          l = [],
          f = e,
          d = [],
          p = [];
        do {
          var h, v, m;
          let e;
          let y = ++c === u.length,
            g = y && 0 !== l.length;
          if (y) {
            if (
              ((i = 0 === p.length ? void 0 : d[d.length - 1]),
              (f = o),
              (o = p.pop()),
              g)
            ) {
              if (s) {
                f = f.slice();
                let e = 0;
                for (let [t, r] of l) {
                  let n = t - e;
                  null === r ? (f.splice(n, 1), e++) : (f[n] = r);
                }
              } else
                for (let [e, t] of ((f = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(f)
                )),
                l))
                  f[e] = t;
            }
            (c = n.index),
              (u = n.keys),
              (l = n.edits),
              (s = n.inArray),
              (n = n.prev);
          } else if (o) {
            if (null == (f = o[(i = s ? c : u[c])])) continue;
            d.push(i);
          }
          if (!Array.isArray(f)) {
            (0, eO.UG)(f) ||
              (0, eS.a)(!1, `Invalid AST Node: ${(0, e_.X)(f)}.`);
            let r = y
              ? null === (h = a.get(f.kind)) || void 0 === h
                ? void 0
                : h.leave
              : null === (v = a.get(f.kind)) || void 0 === v
              ? void 0
              : v.enter;
            if ((e = null == r ? void 0 : r.call(t, f, i, o, d, p)) === ex)
              break;
            if (!1 === e) {
              if (!y) {
                d.pop();
                continue;
              }
            } else if (void 0 !== e && (l.push([i, e]), !y)) {
              if ((0, eO.UG)(e)) f = e;
              else {
                d.pop();
                continue;
              }
            }
          }
          void 0 === e && g && l.push([i, f]),
            y
              ? d.pop()
              : ((n = { inArray: s, index: c, keys: u, edits: l, prev: n }),
                (u = (s = Array.isArray(f))
                  ? f
                  : null !== (m = r[f.kind]) && void 0 !== m
                  ? m
                  : []),
                (c = -1),
                (l = []),
                o && p.push(o),
                (o = f));
        } while (void 0 !== n);
        return 0 !== l.length ? l[l.length - 1][1] : e;
      }
      function eI(e, t) {
        var r,
          n = e.directives;
        return (
          !n ||
          !n.length ||
          ((r = []),
          n &&
            n.length &&
            n.forEach(function (e) {
              var t;
              if (!("skip" !== (t = e.name.value) && "include" !== t)) {
                var n = e.arguments,
                  i = e.name.value;
                (0, E.kG)(n && 1 === n.length, 67, i);
                var o = n[0];
                (0, E.kG)(o.name && "if" === o.name.value, 68, i);
                var a = o.value;
                (0, E.kG)(
                  a && ("Variable" === a.kind || "BooleanValue" === a.kind),
                  69,
                  i
                ),
                  r.push({ directive: e, ifArgument: o });
              }
            }),
          r).every(function (e) {
            var r = e.directive,
              n = e.ifArgument,
              i = !1;
            return (
              "Variable" === n.value.kind
                ? ((i = t && t[n.value.name.value]),
                  (0, E.kG)(void 0 !== i, 66, r.name.value))
                : (i = n.value.value),
              "skip" === r.name.value ? !i : i
            );
          })
        );
      }
      function eC(e, t, r) {
        var n = new Set(e),
          i = n.size;
        return (
          eT(t, {
            Directive: function (e) {
              if (n.delete(e.name.value) && (!r || !n.size)) return ex;
            },
          }),
          r ? !n.size : n.size < i
        );
      }
      var eA = function (e, t) {
          var r;
          try {
            r = JSON.stringify(e);
          } catch (e) {
            var n = (0, E._K)(39, t, e.message);
            throw ((n.parseError = e), n);
          }
          return r;
        },
        eD = r(3869);
      function ej(e) {
        var t = {
          next: function () {
            return e.read();
          },
        };
        return (
          eD.DN &&
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
          t
        );
      }
      var eP = function (e, t, r) {
          var n = Error(r);
          throw (
            ((n.name = "ServerError"),
            (n.response = e),
            (n.statusCode = e.status),
            (n.result = t),
            n)
          );
        },
        eR = r(5832),
        eF = r(3056),
        eM = Object.prototype.hasOwnProperty;
      function eN() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return eq(e);
      }
      function eq(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new eV(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t;
      }
      var eL = function (e, t, r) {
          return this.merge(e[r], t[r]);
        },
        eV = (function () {
          function e(e) {
            void 0 === e && (e = eL),
              (this.reconciler = e),
              (this.isObject = Y.s),
              (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var r = this, n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
              return (0, Y.s)(t) && (0, Y.s)(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (eM.call(e, i)) {
                      var o = e[i];
                      if (t[i] !== o) {
                        var a = r.reconciler.apply(
                          r,
                          (0, O.ev)([e, t, i], n, !1)
                        );
                        a !== o && ((e = r.shallowCopyForMerge(e))[i] = a);
                      }
                    } else (e = r.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (
                (0, Y.s)(e) &&
                  !this.pastCopies.has(e) &&
                  ((e = Array.isArray(e)
                    ? e.slice(0)
                    : (0, O.pi)({ __proto__: Object.getPrototypeOf(e) }, e)),
                  this.pastCopies.add(e)),
                e
              );
            }),
            e
          );
        })();
      function ez(e) {
        return "incremental" in e;
      }
      function eQ(e, t) {
        var r = e,
          n = new eV();
        return (
          ez(t) &&
            (0, eF.O)(t.incremental) &&
            t.incremental.forEach(function (e) {
              for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
                var a = i[o],
                  s = isNaN(+a) ? {} : [];
                (s[a] = t), (t = s);
              }
              r = n.merge(r, t);
            }),
          r
        );
      }
      var eB = Object.prototype.hasOwnProperty;
      function eG(e, t) {
        e.status >= 300 &&
          eP(
            e,
            (function () {
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            })(),
            "Response not successful: Received status code ".concat(e.status)
          );
        try {
          return JSON.parse(t);
        } catch (r) {
          throw (
            ((r.name = "ServerParseError"),
            (r.response = e),
            (r.statusCode = e.status),
            (r.bodyText = t),
            r)
          );
        }
      }
      var eU = function (e) {
          if (!e && "undefined" == typeof fetch) throw (0, E._K)(37);
        },
        eW = r(5717);
      let e$ = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function eY(e) {
        return eJ[e.charCodeAt(0)];
      }
      let eJ = [
          "\\u0000",
          "\\u0001",
          "\\u0002",
          "\\u0003",
          "\\u0004",
          "\\u0005",
          "\\u0006",
          "\\u0007",
          "\\b",
          "\\t",
          "\\n",
          "\\u000B",
          "\\f",
          "\\r",
          "\\u000E",
          "\\u000F",
          "\\u0010",
          "\\u0011",
          "\\u0012",
          "\\u0013",
          "\\u0014",
          "\\u0015",
          "\\u0016",
          "\\u0017",
          "\\u0018",
          "\\u0019",
          "\\u001A",
          "\\u001B",
          "\\u001C",
          "\\u001D",
          "\\u001E",
          "\\u001F",
          "",
          "",
          '\\"',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\\\",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\u007F",
          "\\u0080",
          "\\u0081",
          "\\u0082",
          "\\u0083",
          "\\u0084",
          "\\u0085",
          "\\u0086",
          "\\u0087",
          "\\u0088",
          "\\u0089",
          "\\u008A",
          "\\u008B",
          "\\u008C",
          "\\u008D",
          "\\u008E",
          "\\u008F",
          "\\u0090",
          "\\u0091",
          "\\u0092",
          "\\u0093",
          "\\u0094",
          "\\u0095",
          "\\u0096",
          "\\u0097",
          "\\u0098",
          "\\u0099",
          "\\u009A",
          "\\u009B",
          "\\u009C",
          "\\u009D",
          "\\u009E",
          "\\u009F",
        ],
        eK = {
          Name: { leave: (e) => e.value },
          Variable: { leave: (e) => "$" + e.name },
          Document: { leave: (e) => eH(e.definitions, "\n\n") },
          OperationDefinition: {
            leave(e) {
              let t = eX("(", eH(e.variableDefinitions, ", "), ")"),
                r = eH(
                  [e.operation, eH([e.name, t]), eH(e.directives, " ")],
                  " "
                );
              return ("query" === r ? "" : r + " ") + e.selectionSet;
            },
          },
          VariableDefinition: {
            leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
              e + ": " + t + eX(" = ", r) + eX(" ", eH(n, " ")),
          },
          SelectionSet: { leave: ({ selections: e }) => eZ(e) },
          Field: {
            leave({
              alias: e,
              name: t,
              arguments: r,
              directives: n,
              selectionSet: i,
            }) {
              let o = eX("", e, ": ") + t,
                a = o + eX("(", eH(r, ", "), ")");
              return (
                a.length > 80 && (a = o + eX("(\n", e0(eH(r, "\n")), "\n)")),
                eH([a, eH(n, " "), i], " ")
              );
            },
          },
          Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
          FragmentSpread: {
            leave: ({ name: e, directives: t }) =>
              "..." + e + eX(" ", eH(t, " ")),
          },
          InlineFragment: {
            leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
              eH(["...", eX("on ", e), eH(t, " "), r], " "),
          },
          FragmentDefinition: {
            leave: ({
              name: e,
              typeCondition: t,
              variableDefinitions: r,
              directives: n,
              selectionSet: i,
            }) =>
              `fragment ${e}${eX("(", eH(r, ", "), ")")} on ${t} ${eX(
                "",
                eH(n, " "),
                " "
              )}` + i,
          },
          IntValue: { leave: ({ value: e }) => e },
          FloatValue: { leave: ({ value: e }) => e },
          StringValue: {
            leave: ({ value: e, block: t }) =>
              t ? (0, eW.LZ)(e) : `"${e.replace(e$, eY)}"`,
          },
          BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
          NullValue: { leave: () => "null" },
          EnumValue: { leave: ({ value: e }) => e },
          ListValue: { leave: ({ values: e }) => "[" + eH(e, ", ") + "]" },
          ObjectValue: { leave: ({ fields: e }) => "{" + eH(e, ", ") + "}" },
          ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
          Directive: {
            leave: ({ name: e, arguments: t }) =>
              "@" + e + eX("(", eH(t, ", "), ")"),
          },
          NamedType: { leave: ({ name: e }) => e },
          ListType: { leave: ({ type: e }) => "[" + e + "]" },
          NonNullType: { leave: ({ type: e }) => e + "!" },
          SchemaDefinition: {
            leave: ({ description: e, directives: t, operationTypes: r }) =>
              eX("", e, "\n") + eH(["schema", eH(t, " "), eZ(r)], " "),
          },
          OperationTypeDefinition: {
            leave: ({ operation: e, type: t }) => e + ": " + t,
          },
          ScalarTypeDefinition: {
            leave: ({ description: e, name: t, directives: r }) =>
              eX("", e, "\n") + eH(["scalar", t, eH(r, " ")], " "),
          },
          ObjectTypeDefinition: {
            leave: ({
              description: e,
              name: t,
              interfaces: r,
              directives: n,
              fields: i,
            }) =>
              eX("", e, "\n") +
              eH(
                ["type", t, eX("implements ", eH(r, " & ")), eH(n, " "), eZ(i)],
                " "
              ),
          },
          FieldDefinition: {
            leave: ({
              description: e,
              name: t,
              arguments: r,
              type: n,
              directives: i,
            }) =>
              eX("", e, "\n") +
              t +
              (e1(r)
                ? eX("(\n", e0(eH(r, "\n")), "\n)")
                : eX("(", eH(r, ", "), ")")) +
              ": " +
              n +
              eX(" ", eH(i, " ")),
          },
          InputValueDefinition: {
            leave: ({
              description: e,
              name: t,
              type: r,
              defaultValue: n,
              directives: i,
            }) =>
              eX("", e, "\n") +
              eH([t + ": " + r, eX("= ", n), eH(i, " ")], " "),
          },
          InterfaceTypeDefinition: {
            leave: ({
              description: e,
              name: t,
              interfaces: r,
              directives: n,
              fields: i,
            }) =>
              eX("", e, "\n") +
              eH(
                [
                  "interface",
                  t,
                  eX("implements ", eH(r, " & ")),
                  eH(n, " "),
                  eZ(i),
                ],
                " "
              ),
          },
          UnionTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, types: n }) =>
              eX("", e, "\n") +
              eH(["union", t, eH(r, " "), eX("= ", eH(n, " | "))], " "),
          },
          EnumTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, values: n }) =>
              eX("", e, "\n") + eH(["enum", t, eH(r, " "), eZ(n)], " "),
          },
          EnumValueDefinition: {
            leave: ({ description: e, name: t, directives: r }) =>
              eX("", e, "\n") + eH([t, eH(r, " ")], " "),
          },
          InputObjectTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, fields: n }) =>
              eX("", e, "\n") + eH(["input", t, eH(r, " "), eZ(n)], " "),
          },
          DirectiveDefinition: {
            leave: ({
              description: e,
              name: t,
              arguments: r,
              repeatable: n,
              locations: i,
            }) =>
              eX("", e, "\n") +
              "directive @" +
              t +
              (e1(r)
                ? eX("(\n", e0(eH(r, "\n")), "\n)")
                : eX("(", eH(r, ", "), ")")) +
              (n ? " repeatable" : "") +
              " on " +
              eH(i, " | "),
          },
          SchemaExtension: {
            leave: ({ directives: e, operationTypes: t }) =>
              eH(["extend schema", eH(e, " "), eZ(t)], " "),
          },
          ScalarTypeExtension: {
            leave: ({ name: e, directives: t }) =>
              eH(["extend scalar", e, eH(t, " ")], " "),
          },
          ObjectTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
              eH(
                [
                  "extend type",
                  e,
                  eX("implements ", eH(t, " & ")),
                  eH(r, " "),
                  eZ(n),
                ],
                " "
              ),
          },
          InterfaceTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
              eH(
                [
                  "extend interface",
                  e,
                  eX("implements ", eH(t, " & ")),
                  eH(r, " "),
                  eZ(n),
                ],
                " "
              ),
          },
          UnionTypeExtension: {
            leave: ({ name: e, directives: t, types: r }) =>
              eH(["extend union", e, eH(t, " "), eX("= ", eH(r, " | "))], " "),
          },
          EnumTypeExtension: {
            leave: ({ name: e, directives: t, values: r }) =>
              eH(["extend enum", e, eH(t, " "), eZ(r)], " "),
          },
          InputObjectTypeExtension: {
            leave: ({ name: e, directives: t, fields: r }) =>
              eH(["extend input", e, eH(t, " "), eZ(r)], " "),
          },
        };
      function eH(e, t = "") {
        var r;
        return null !== (r = null == e ? void 0 : e.filter((e) => e).join(t)) &&
          void 0 !== r
          ? r
          : "";
      }
      function eZ(e) {
        return eX("{\n", e0(eH(e, "\n")), "\n}");
      }
      function eX(e, t, r = "") {
        return null != t && "" !== t ? e + t + r : "";
      }
      function e0(e) {
        return eX("  ", e.replace(/\n/g, "\n  "));
      }
      function e1(e) {
        var t;
        return (
          null !== (t = null == e ? void 0 : e.some((e) => e.includes("\n"))) &&
          void 0 !== t &&
          t
        );
      }
      var e2 = eD.mr ? new WeakMap() : void 0,
        e3 = function (e) {
          var t;
          return (
            (t = null == e2 ? void 0 : e2.get(e)) ||
              ((t = eT(e, eK)), null == e2 || e2.set(e, t)),
            t
          );
        },
        e5 = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1,
          },
          headers: { accept: "*/*", "content-type": "application/json" },
          options: { method: "POST" },
        },
        e6 = function (e, t) {
          return t(e);
        };
      function e8(e) {
        return new $(function (t) {
          t.error(e);
        });
      }
      var e4 = {
        kind: eE.h.FIELD,
        name: { kind: eE.h.NAME, value: "__typename" },
      };
      function e9(e) {
        var t = new Map();
        return function (r) {
          void 0 === r && (r = e);
          var n = t.get(r);
          return (
            n ||
              t.set(
                r,
                (n = { variables: new Set(), fragmentSpreads: new Set() })
              ),
            n
          );
        };
      }
      function e7(e, t) {
        ec(t);
        for (
          var r,
            n,
            i,
            o,
            a = e9(""),
            s = e9(""),
            u = function (e) {
              for (var t = 0, r = void 0; t < e.length && (r = e[t]); ++t)
                if (!(0, eF.k)(r)) {
                  if (r.kind === eE.h.OPERATION_DEFINITION)
                    return a(r.name && r.name.value);
                  if (r.kind === eE.h.FRAGMENT_DEFINITION)
                    return s(r.name.value);
                }
              return !1 !== globalThis.__DEV__ && E.kG.error(82), null;
            },
            c = 0,
            l = t.definitions.length - 1;
          l >= 0;
          --l
        )
          t.definitions[l].kind === eE.h.OPERATION_DEFINITION && ++c;
        var f =
            ((r = new Map()),
            (n = new Map()),
            e.forEach(function (e) {
              e && (e.name ? r.set(e.name, e) : e.test && n.set(e.test, e));
            }),
            function (e) {
              var t = r.get(e.name.value);
              return (
                !t &&
                  n.size &&
                  n.forEach(function (r, n) {
                    n(e) && (t = r);
                  }),
                t
              );
            }),
          d = function (e) {
            return (
              (0, eF.O)(e) &&
              e.map(f).some(function (e) {
                return e && e.remove;
              })
            );
          },
          p = new Map(),
          h = !1,
          v = {
            enter: function (e) {
              if (d(e.directives)) return (h = !0), null;
            },
          },
          m = eT(t, {
            Field: v,
            InlineFragment: v,
            VariableDefinition: {
              enter: function () {
                return !1;
              },
            },
            Variable: {
              enter: function (e, t, r, n, i) {
                var o = u(i);
                o && o.variables.add(e.name.value);
              },
            },
            FragmentSpread: {
              enter: function (e, t, r, n, i) {
                if (d(e.directives)) return (h = !0), null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value);
              },
            },
            FragmentDefinition: {
              enter: function (e, t, r, n) {
                p.set(JSON.stringify(n), e);
              },
              leave: function (e, t, r, n) {
                return e === p.get(JSON.stringify(n))
                  ? e
                  : c > 0 &&
                    e.selectionSet.selections.every(function (e) {
                      return (
                        e.kind === eE.h.FIELD && "__typename" === e.name.value
                      );
                    })
                  ? ((s(e.name.value).removed = !0), (h = !0), null)
                  : void 0;
              },
            },
            Directive: {
              leave: function (e) {
                if (f(e)) return (h = !0), null;
              },
            },
          });
        if (!h) return t;
        var y = function (e) {
            return (
              e.transitiveVars ||
                ((e.transitiveVars = new Set(e.variables)),
                e.removed ||
                  e.fragmentSpreads.forEach(function (t) {
                    y(s(t)).transitiveVars.forEach(function (t) {
                      e.transitiveVars.add(t);
                    });
                  })),
              e
            );
          },
          g = new Set();
        m.definitions.forEach(function (e) {
          e.kind === eE.h.OPERATION_DEFINITION
            ? y(a(e.name && e.name.value)).fragmentSpreads.forEach(function (
                e
              ) {
                g.add(e);
              })
            : e.kind !== eE.h.FRAGMENT_DEFINITION ||
              0 !== c ||
              s(e.name.value).removed ||
              g.add(e.name.value);
        }),
          g.forEach(function (e) {
            y(s(e)).fragmentSpreads.forEach(function (e) {
              g.add(e);
            });
          });
        var b = {
          enter: function (e) {
            var t;
            if (((t = e.name.value), !g.has(t) || s(t).removed)) return null;
          },
        };
        return !(function e(t, r) {
          return (
            !t ||
            t.selectionSet.selections.every(function (t) {
              return t.kind === eE.h.FRAGMENT_SPREAD && e(r[t.name.value], r);
            })
          );
        })(
          el(
            (i = eT(m, {
              FragmentSpread: b,
              FragmentDefinition: b,
              OperationDefinition: {
                leave: function (e) {
                  if (e.variableDefinitions) {
                    var t = y(a(e.name && e.name.value)).transitiveVars;
                    if (t.size < e.variableDefinitions.length)
                      return (0, O.pi)((0, O.pi)({}, e), {
                        variableDefinitions: e.variableDefinitions.filter(
                          function (e) {
                            return t.has(e.variable.name.value);
                          }
                        ),
                      });
                  }
                },
              },
            }))
          ) ||
            ((0, E.kG)("Document" === i.kind, 77),
            (0, E.kG)(i.definitions.length <= 1, 78),
            (o = i.definitions[0]),
            (0, E.kG)("FragmentDefinition" === o.kind, 79),
            o),
          K(ed(i))
        )
          ? i
          : null;
      }
      var te = Object.assign(
        function (e) {
          return eT(e, {
            SelectionSet: {
              enter: function (e, t, r) {
                if (!r || r.kind !== eE.h.OPERATION_DEFINITION) {
                  var n = e.selections;
                  if (
                    !(
                      !n ||
                      n.some(function (e) {
                        return (
                          eu(e) &&
                          ("__typename" === e.name.value ||
                            0 === e.name.value.lastIndexOf("__", 0))
                        );
                      })
                    ) &&
                    !(
                      eu(r) &&
                      r.directives &&
                      r.directives.some(function (e) {
                        return "export" === e.name.value;
                      })
                    )
                  )
                    return (0, O.pi)((0, O.pi)({}, e), {
                      selections: (0, O.ev)((0, O.ev)([], n, !0), [e4], !1),
                    });
                }
              },
            },
          });
        },
        {
          added: function (e) {
            return e === e4;
          },
        }
      );
      function tt(e) {
        return (
          ec(e),
          e7(
            [
              {
                test: function (e) {
                  return "client" === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          )
        );
      }
      var tr = (0, E.wY)(function () {
          return fetch;
        }),
        tn = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            n = e.fetch,
            i = e.print,
            o = void 0 === i ? e6 : i,
            a = e.includeExtensions,
            s = e.preserveHeaderCase,
            u = e.useGETForQueries,
            c = e.includeUnusedVariables,
            l = void 0 !== c && c,
            f = (0, O._T)(e, [
              "uri",
              "fetch",
              "print",
              "includeExtensions",
              "preserveHeaderCase",
              "useGETForQueries",
              "includeUnusedVariables",
            ]);
          !1 !== globalThis.__DEV__ && eU(n || tr);
          var d = {
            http: { includeExtensions: a, preserveHeaderCase: s },
            options: f.fetchOptions,
            credentials: f.credentials,
            headers: f.headers,
          };
          return new eb(function (e) {
            var t,
              i,
              a,
              s,
              c,
              f,
              p,
              h,
              v =
                ((t = e),
                (i = r),
                t.getContext().uri ||
                  ("function" == typeof i ? i(t) : i || "/graphql")),
              m = e.getContext(),
              y = {};
            if (m.clientAwareness) {
              var g = m.clientAwareness,
                b = g.name,
                w = g.version;
              b && (y["apollographql-client-name"] = b),
                w && (y["apollographql-client-version"] = w);
            }
            var k = (0, O.pi)((0, O.pi)({}, y), m.headers),
              S = {
                http: m.http,
                options: m.fetchOptions,
                credentials: m.credentials,
                headers: k,
              };
            if (eC(["client"], e.query)) {
              var _ = tt(e.query);
              if (!_)
                return e8(
                  Error(
                    "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
                  )
                );
              e.query = _;
            }
            var x = (function (e, t) {
                for (var r = [], n = 2; n < arguments.length; n++)
                  r[n - 2] = arguments[n];
                var i = {},
                  o = {};
                r.forEach(function (e) {
                  (i = (0, O.pi)((0, O.pi)((0, O.pi)({}, i), e.options), {
                    headers: (0, O.pi)((0, O.pi)({}, i.headers), e.headers),
                  })),
                    e.credentials && (i.credentials = e.credentials),
                    (o = (0, O.pi)((0, O.pi)({}, o), e.http));
                }),
                  i.headers &&
                    (i.headers = (function (e, t) {
                      if (!t) {
                        var r = Object.create(null);
                        return (
                          Object.keys(Object(e)).forEach(function (t) {
                            r[t.toLowerCase()] = e[t];
                          }),
                          r
                        );
                      }
                      var n = Object.create(null);
                      Object.keys(Object(e)).forEach(function (t) {
                        n[t.toLowerCase()] = { originalName: t, value: e[t] };
                      });
                      var i = Object.create(null);
                      return (
                        Object.keys(n).forEach(function (e) {
                          i[n[e].originalName] = n[e].value;
                        }),
                        i
                      );
                    })(i.headers, o.preserveHeaderCase));
                var a = e.operationName,
                  s = e.extensions,
                  u = e.variables,
                  c = e.query,
                  l = { operationName: a, variables: u };
                return (
                  o.includeExtensions && (l.extensions = s),
                  o.includeQuery && (l.query = t(c, e3)),
                  { options: i, body: l }
                );
              })(e, o, e5, d, S),
              T = x.options,
              I = x.body;
            I.variables &&
              !l &&
              (I.variables =
                ((a = I.variables),
                (s = e.query),
                (c = (0, O.pi)({}, a)),
                (f = new Set(Object.keys(a))),
                eT(s, {
                  Variable: function (e, t, r) {
                    r &&
                      "VariableDefinition" !== r.kind &&
                      f.delete(e.name.value);
                  },
                }),
                f.forEach(function (e) {
                  delete c[e];
                }),
                c)),
              T.signal ||
                "undefined" == typeof AbortController ||
                ((h = new AbortController()), (T.signal = h.signal));
            var C =
                "OperationDefinition" === (p = eh(e.query)).kind &&
                "subscription" === p.operation,
              A = eC(["defer"], e.query);
            if (
              (u &&
                !e.query.definitions.some(function (e) {
                  return (
                    "OperationDefinition" === e.kind &&
                    "mutation" === e.operation
                  );
                }) &&
                (T.method = "GET"),
              A || C)
            ) {
              T.headers = T.headers || {};
              var D = "multipart/mixed;";
              C && A && !1 !== globalThis.__DEV__ && E.kG.warn(38),
                C
                  ? (D +=
                      "boundary=graphql;subscriptionSpec=1.0,application/json")
                  : A && (D += "deferSpec=20220824,application/json"),
                (T.headers.accept = D);
            }
            if ("GET" === T.method) {
              var j = (function (e, t) {
                  var r = [],
                    n = function (e, t) {
                      r.push("".concat(e, "=").concat(encodeURIComponent(t)));
                    };
                  if (
                    ("query" in t && n("query", t.query),
                    t.operationName && n("operationName", t.operationName),
                    t.variables)
                  ) {
                    var i = void 0;
                    try {
                      i = eA(t.variables, "Variables map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    n("variables", i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = eA(t.extensions, "Extensions map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    n("extensions", o);
                  }
                  var a = "",
                    s = e,
                    u = e.indexOf("#");
                  -1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)));
                  var c = -1 === s.indexOf("?") ? "?" : "&";
                  return { newURI: s + c + r.join("&") + a };
                })(v, I),
                P = j.newURI,
                R = j.parseError;
              if (R) return e8(R);
              v = P;
            } else
              try {
                T.body = eA(I, "Payload");
              } catch (e) {
                return e8(e);
              }
            return new $(function (t) {
              var r =
                  n ||
                  (0, E.wY)(function () {
                    return fetch;
                  }) ||
                  tr,
                i = t.next.bind(t);
              return (
                r(v, T)
                  .then(function (t) {
                    e.setContext({ response: t });
                    var r,
                      n =
                        null === (r = t.headers) || void 0 === r
                          ? void 0
                          : r.get("content-type");
                    return null !== n && /^multipart\/mixed/i.test(n)
                      ? (function (e, t) {
                          var r;
                          return (0, O.mG)(this, void 0, void 0, function () {
                            var n,
                              i,
                              o,
                              a,
                              s,
                              u,
                              c,
                              l,
                              f,
                              d,
                              p,
                              h,
                              v,
                              m,
                              y,
                              g,
                              b,
                              w,
                              k,
                              S,
                              _,
                              E;
                            return (0, O.Jh)(this, function (x) {
                              switch (x.label) {
                                case 0:
                                  if (void 0 === TextDecoder)
                                    throw Error(
                                      "TextDecoder must be defined in the environment: please import a polyfill."
                                    );
                                  (n = new TextDecoder("utf-8")),
                                    (i =
                                      null === (r = e.headers) || void 0 === r
                                        ? void 0
                                        : r.get("content-type")),
                                    (o = "boundary="),
                                    (a = (null == i ? void 0 : i.includes(o))
                                      ? null == i
                                        ? void 0
                                        : i
                                            .substring(
                                              (null == i
                                                ? void 0
                                                : i.indexOf(o)) + o.length
                                            )
                                            .replace(/['"]/g, "")
                                            .replace(/\;(.*)/gm, "")
                                            .trim()
                                      : "-"),
                                    (s = "\r\n--".concat(a)),
                                    (u = ""),
                                    (c = (function (e) {
                                      var t,
                                        r,
                                        n,
                                        i,
                                        o,
                                        a,
                                        s = e;
                                      if (
                                        (e.body && (s = e.body),
                                        (t = s),
                                        eD.DN && t[Symbol.asyncIterator])
                                      )
                                        return (
                                          (n = s[Symbol.asyncIterator]()),
                                          ((r = {
                                            next: function () {
                                              return n.next();
                                            },
                                          })[Symbol.asyncIterator] =
                                            function () {
                                              return this;
                                            }),
                                          r
                                        );
                                      if (s.getReader) return ej(s.getReader());
                                      if (s.stream)
                                        return ej(s.stream().getReader());
                                      if (s.arrayBuffer)
                                        return (
                                          (i = s.arrayBuffer()),
                                          (o = !1),
                                          (a = {
                                            next: function () {
                                              return o
                                                ? Promise.resolve({
                                                    value: void 0,
                                                    done: !0,
                                                  })
                                                : ((o = !0),
                                                  new Promise(function (e, t) {
                                                    i.then(function (t) {
                                                      e({ value: t, done: !1 });
                                                    }).catch(t);
                                                  }));
                                            },
                                          }),
                                          eD.DN &&
                                            (a[Symbol.asyncIterator] =
                                              function () {
                                                return this;
                                              }),
                                          a
                                        );
                                      if (s.pipe)
                                        return (function (e) {
                                          var t = null,
                                            r = null,
                                            n = !1,
                                            i = [],
                                            o = [];
                                          function a(e) {
                                            if (!r) {
                                              if (o.length) {
                                                var t = o.shift();
                                                if (Array.isArray(t) && t[0])
                                                  return t[0]({
                                                    value: e,
                                                    done: !1,
                                                  });
                                              }
                                              i.push(e);
                                            }
                                          }
                                          function s(e) {
                                            (r = e),
                                              o.slice().forEach(function (t) {
                                                t[1](e);
                                              }),
                                              t && t();
                                          }
                                          function u() {
                                            (n = !0),
                                              o.slice().forEach(function (e) {
                                                e[0]({
                                                  value: void 0,
                                                  done: !0,
                                                });
                                              }),
                                              t && t();
                                          }
                                          (t = function () {
                                            (t = null),
                                              e.removeListener("data", a),
                                              e.removeListener("error", s),
                                              e.removeListener("end", u),
                                              e.removeListener("finish", u),
                                              e.removeListener("close", u);
                                          }),
                                            e.on("data", a),
                                            e.on("error", s),
                                            e.on("end", u),
                                            e.on("finish", u),
                                            e.on("close", u);
                                          var c = {
                                            next: function () {
                                              return new Promise(function (
                                                e,
                                                t
                                              ) {
                                                return r
                                                  ? t(r)
                                                  : i.length
                                                  ? e({
                                                      value: i.shift(),
                                                      done: !1,
                                                    })
                                                  : n
                                                  ? e({
                                                      value: void 0,
                                                      done: !0,
                                                    })
                                                  : void o.push([e, t]);
                                              });
                                            },
                                          };
                                          return (
                                            eD.DN &&
                                              (c[Symbol.asyncIterator] =
                                                function () {
                                                  return this;
                                                }),
                                            c
                                          );
                                        })(s);
                                      throw Error(
                                        "Unknown body type for responseIterator. Please pass a streamable response."
                                      );
                                    })(e)),
                                    (l = !0),
                                    (x.label = 1);
                                case 1:
                                  if (!l) return [3, 3];
                                  return [4, c.next()];
                                case 2:
                                  for (
                                    d = (f = x.sent()).value,
                                      p = f.done,
                                      h =
                                        "string" == typeof d ? d : n.decode(d),
                                      v = u.length - s.length + 1,
                                      l = !p,
                                      u += h,
                                      m = u.indexOf(s, v);
                                    m > -1;

                                  ) {
                                    if (
                                      ((y = void 0),
                                      (y = (_ = [
                                        u.slice(0, m),
                                        u.slice(m + s.length),
                                      ])[0]),
                                      (u = _[1]),
                                      (g = y.indexOf("\r\n\r\n")),
                                      (b = (function (e) {
                                        var t = {};
                                        return (
                                          e.split("\n").forEach(function (e) {
                                            var r = e.indexOf(":");
                                            if (r > -1) {
                                              var n = e
                                                  .slice(0, r)
                                                  .trim()
                                                  .toLowerCase(),
                                                i = e.slice(r + 1).trim();
                                              t[n] = i;
                                            }
                                          }),
                                          t
                                        );
                                      })(y.slice(0, g))["content-type"]) &&
                                        -1 ===
                                          b
                                            .toLowerCase()
                                            .indexOf("application/json"))
                                    )
                                      throw Error(
                                        "Unsupported patch content type: application/json is required."
                                      );
                                    if ((w = y.slice(g))) {
                                      if (
                                        Object.keys((k = eG(e, w))).length >
                                          1 ||
                                        "data" in k ||
                                        "incremental" in k ||
                                        "errors" in k ||
                                        "payload" in k
                                      )
                                        (0, Y.s)(k) && "payload" in k
                                          ? ((S = {}),
                                            "payload" in k &&
                                              (S = (0, O.pi)({}, k.payload)),
                                            "errors" in k &&
                                              (S = (0, O.pi)((0, O.pi)({}, S), {
                                                extensions: (0, O.pi)(
                                                  (0, O.pi)(
                                                    {},
                                                    "extensions" in S
                                                      ? S.extensions
                                                      : null
                                                  ),
                                                  (((E = {})[eR.YG] = k.errors),
                                                  E)
                                                ),
                                              })),
                                            t(S))
                                          : t(k);
                                      else if (
                                        1 === Object.keys(k).length &&
                                        "hasNext" in k &&
                                        !k.hasNext
                                      )
                                        return [2];
                                    }
                                    m = u.indexOf(s);
                                  }
                                  return [3, 1];
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        })(t, i)
                      : t
                          .text()
                          .then(function (e) {
                            return eG(t, e);
                          })
                          .then(function (r) {
                            return (
                              t.status >= 300 &&
                                eP(
                                  t,
                                  r,
                                  "Response not successful: Received status code ".concat(
                                    t.status
                                  )
                                ),
                              Array.isArray(r) ||
                                eB.call(r, "data") ||
                                eB.call(r, "errors") ||
                                eP(
                                  t,
                                  r,
                                  "Server response was missing for query '".concat(
                                    Array.isArray(e)
                                      ? e.map(function (e) {
                                          return e.operationName;
                                        })
                                      : e.operationName,
                                    "'."
                                  )
                                ),
                              r
                            );
                          })
                          .then(i);
                  })
                  .then(function () {
                    (h = void 0), t.complete();
                  })
                  .catch(function (e) {
                    (h = void 0),
                      e.result &&
                        e.result.errors &&
                        e.result.data &&
                        t.next(e.result),
                      t.error(e);
                  }),
                function () {
                  h && h.abort();
                }
              );
            });
          });
        },
        ti = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, tn(t).request) || this;
            return (r.options = t), r;
          }
          return (0, O.ZT)(t, e), t;
        })(eb),
        to = r(8807);
      let ta = () => Object.create(null),
        { forEach: ts, slice: tu } = Array.prototype,
        { hasOwnProperty: tc } = Object.prototype;
      class tl {
        constructor(e = !0, t = ta) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup() {
          return this.lookupArray(arguments);
        }
        lookupArray(e) {
          let t = this;
          return (
            ts.call(e, (e) => (t = t.getChildTrie(e))),
            tc.call(t, "data") ? t.data : (t.data = this.makeData(tu.call(e)))
          );
        }
        peek() {
          return this.peekArray(arguments);
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            let n = t.mapFor(e[r], !1);
            t = n && n.get(e[r]);
          }
          return t && t.data;
        }
        remove() {
          return this.removeArray(arguments);
        }
        removeArray(e) {
          let t;
          if (e.length) {
            let r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            !i ||
              ((t = i.removeArray(tu.call(e, 1))),
              i.data || i.weak || (i.strong && i.strong.size) || n.delete(r));
          } else (t = this.data), delete this.data;
          return t;
        }
        getChildTrie(e) {
          let t = this.mapFor(e, !0),
            r = t.get(e);
          return r || t.set(e, (r = new tl(this.weakness, this.makeData))), r;
        }
        mapFor(e, t) {
          return this.weakness &&
            (function (e) {
              switch (typeof e) {
                case "object":
                  if (null === e) break;
                case "function":
                  return !0;
              }
              return !1;
            })(e)
            ? this.weak || (t ? (this.weak = new WeakMap()) : void 0)
            : this.strong || (t ? (this.strong = new Map()) : void 0);
        }
      }
      var tf = (function () {
          function e() {
            (this.known = new (eD.sy ? WeakSet : Set)()),
              (this.pool = new tl(eD.mr)),
              (this.passes = new WeakMap()),
              (this.keysByJSON = new Map()),
              (this.empty = this.admit({}));
          }
          return (
            (e.prototype.isKnown = function (e) {
              return (0, Y.s)(e) && this.known.has(e);
            }),
            (e.prototype.pass = function (e) {
              if ((0, Y.s)(e)) {
                var t = (0, Y.s)(e)
                  ? (0, eF.k)(e)
                    ? e.slice(0)
                    : (0, O.pi)({ __proto__: Object.getPrototypeOf(e) }, e)
                  : e;
                return this.passes.set(t, e), t;
              }
              return e;
            }),
            (e.prototype.admit = function (e) {
              var t = this;
              if ((0, Y.s)(e)) {
                var r = this.passes.get(e);
                if (r) return r;
                switch (Object.getPrototypeOf(e)) {
                  case Array.prototype:
                    if (this.known.has(e)) break;
                    var n = e.map(this.admit, this),
                      i = this.pool.lookupArray(n);
                    return (
                      i.array ||
                        (this.known.add((i.array = n)),
                        !1 !== globalThis.__DEV__ && Object.freeze(n)),
                      i.array
                    );
                  case null:
                  case Object.prototype:
                    if (this.known.has(e)) break;
                    var o = Object.getPrototypeOf(e),
                      a = [o],
                      s = this.sortedKeys(e);
                    a.push(s.json);
                    var u = a.length;
                    s.sorted.forEach(function (r) {
                      a.push(t.admit(e[r]));
                    });
                    var i = this.pool.lookupArray(a);
                    if (!i.object) {
                      var c = (i.object = Object.create(o));
                      this.known.add(c),
                        s.sorted.forEach(function (e, t) {
                          c[e] = a[u + t];
                        }),
                        !1 !== globalThis.__DEV__ && Object.freeze(c);
                    }
                    return i.object;
                }
              }
              return e;
            }),
            (e.prototype.sortedKeys = function (e) {
              var t = Object.keys(e),
                r = this.pool.lookupArray(t);
              if (!r.keys) {
                t.sort();
                var n = JSON.stringify(t);
                (r.keys = this.keysByJSON.get(n)) ||
                  this.keysByJSON.set(n, (r.keys = { sorted: t, json: n }));
              }
              return r.keys;
            }),
            e
          );
        })(),
        td = Object.assign(
          function (e) {
            if ((0, Y.s)(e)) {
              void 0 === a && tp();
              var t = a.admit(e),
                r = s.get(t);
              return void 0 === r && s.set(t, (r = JSON.stringify(t))), r;
            }
            return JSON.stringify(e);
          },
          { reset: tp }
        );
      function tp() {
        (a = new tf()), (s = new (eD.mr ? WeakMap : Map)());
      }
      function th(e) {
        return e;
      }
      var tv = (function () {
        function e(e, t) {
          void 0 === t && (t = Object.create(null)),
            (this.resultCache = eD.sy ? new WeakSet() : new Set()),
            (this.transform = e),
            t.getCacheKey && (this.getCacheKey = t.getCacheKey),
            !1 !== t.cache &&
              (this.stableCacheKeys = new tl(eD.mr, function (e) {
                return { key: e };
              }));
        }
        return (
          (e.prototype.getCacheKey = function (e) {
            return [e];
          }),
          (e.identity = function () {
            return new e(th, { cache: !1 });
          }),
          (e.split = function (t, r, n) {
            return (
              void 0 === n && (n = e.identity()),
              new e(
                function (e) {
                  return (t(e) ? r : n).transformDocument(e);
                },
                { cache: !1 }
              )
            );
          }),
          (e.prototype.transformDocument = function (e) {
            if (this.resultCache.has(e)) return e;
            var t = this.getStableCacheEntry(e);
            if (t && t.value) return t.value;
            ec(e);
            var r = this.transform(e);
            return this.resultCache.add(r), t && (t.value = r), r;
          }),
          (e.prototype.concat = function (t) {
            var r = this;
            return new e(
              function (e) {
                return t.transformDocument(r.transformDocument(e));
              },
              { cache: !1 }
            );
          }),
          (e.prototype.getStableCacheEntry = function (e) {
            if (this.stableCacheKeys) {
              var t = this.getCacheKey(e);
              if (t)
                return (
                  (0, E.kG)(Array.isArray(t), 65),
                  this.stableCacheKeys.lookupArray(t)
                );
            }
          }),
          e
        );
      })();
      function tm(e, t, r) {
        return new $(function (n) {
          var i = {
            then: function (e) {
              return new Promise(function (t) {
                return t(e());
              });
            },
          };
          function o(e, t) {
            return function (r) {
              if (e) {
                var o = function () {
                  return n.closed ? 0 : e(r);
                };
                i = i.then(o, o).then(
                  function (e) {
                    return n.next(e);
                  },
                  function (e) {
                    return n.error(e);
                  }
                );
              } else n[t](r);
            };
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function () {
                i.then(function () {
                  return n.complete();
                });
              },
            },
            s = e.subscribe(a);
          return function () {
            return s.unsubscribe();
          };
        });
      }
      function ty(e) {
        var t = tg(e);
        return (0, eF.O)(t);
      }
      function tg(e) {
        var t = (0, eF.O)(e.errors) ? e.errors.slice(0) : [];
        return (
          ez(e) &&
            (0, eF.O)(e.incremental) &&
            e.incremental.forEach(function (e) {
              e.errors && t.push.apply(t, e.errors);
            }),
          t
        );
      }
      var tb = r(9635);
      function tw(e, t, r) {
        var n = [];
        e.forEach(function (e) {
          return e[t] && n.push(e);
        }),
          n.forEach(function (e) {
            return e[t](r);
          });
      }
      function tk(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: $ });
        }
        return eD.aS && Symbol.species && t(Symbol.species), t("@@species"), e;
      }
      function tS(e) {
        return e && "function" == typeof e.then;
      }
      var t_ = (function (e) {
        function t(t) {
          var r =
            e.call(this, function (e) {
              return (
                r.addObserver(e),
                function () {
                  return r.removeObserver(e);
                }
              );
            }) || this;
          return (
            (r.observers = new Set()),
            (r.promise = new Promise(function (e, t) {
              (r.resolve = e), (r.reject = t);
            })),
            (r.handlers = {
              next: function (e) {
                null !== r.sub &&
                  ((r.latest = ["next", e]),
                  r.notify("next", e),
                  tw(r.observers, "next", e));
              },
              error: function (e) {
                var t = r.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (r.sub = null),
                  (r.latest = ["error", e]),
                  r.reject(e),
                  r.notify("error", e),
                  tw(r.observers, "error", e));
              },
              complete: function () {
                var e = r.sub,
                  t = r.sources;
                if (null !== e) {
                  var n = (void 0 === t ? [] : t).shift();
                  n
                    ? tS(n)
                      ? n.then(function (e) {
                          return (r.sub = e.subscribe(r.handlers));
                        })
                      : (r.sub = n.subscribe(r.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (r.sub = null),
                      r.latest && "next" === r.latest[0]
                        ? r.resolve(r.latest[1])
                        : r.resolve(),
                      r.notify("complete"),
                      tw(r.observers, "complete"));
                }
              },
            }),
            (r.nextResultListeners = new Set()),
            (r.cancel = function (e) {
              r.reject(e), (r.sources = []), r.handlers.complete();
            }),
            r.promise.catch(function (e) {}),
            "function" == typeof t && (t = [new $(t)]),
            tS(t)
              ? t.then(function (e) {
                  return r.start(e);
                }, r.handlers.error)
              : r.start(t),
            r
          );
        }
        return (
          (0, O.ZT)(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub &&
              ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                r = e[t];
              r && r.call(e, this.latest[1]),
                null === this.sub && "next" === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) ||
              (this.deliverLastMessage(e), this.observers.add(e));
          }),
          (t.prototype.removeObserver = function (e) {
            this.observers.delete(e) &&
              this.observers.size < 1 &&
              this.handlers.complete();
          }),
          (t.prototype.notify = function (e, t) {
            var r = this.nextResultListeners;
            r.size &&
              ((this.nextResultListeners = new Set()),
              r.forEach(function (r) {
                return r(e, t);
              }));
          }),
          (t.prototype.beforeNext = function (e) {
            var t = !1;
            this.nextResultListeners.add(function (r, n) {
              t || ((t = !0), e(r, n));
            });
          }),
          t
        );
      })($);
      tk(t_);
      var tO = r(4368),
        tE = r(9428),
        tx = Object.prototype.toString;
      function tT(e, t) {
        switch (tx.call(e)) {
          case "[object Array]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var r = e.slice(0);
            return (
              t.set(e, r),
              r.forEach(function (e, n) {
                r[n] = tT(e, t);
              }),
              r
            );
          case "[object Object]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var n = Object.create(Object.getPrototypeOf(e));
            return (
              t.set(e, n),
              Object.keys(e).forEach(function (r) {
                n[r] = tT(e[r], t);
              }),
              n
            );
          default:
            return e;
        }
      }
      function tI(e) {
        return !!e.directives && e.directives.some(tC);
      }
      function tC(e) {
        return "nonreactive" === e.name.value;
      }
      var tA = Object.assign,
        tD = Object.hasOwnProperty,
        tj = (function (e) {
          function t(t) {
            var r = t.queryManager,
              n = t.queryInfo,
              i = t.options,
              o =
                e.call(this, function (e) {
                  try {
                    var t = e._subscription._observer;
                    t && !t.error && (t.error = tR);
                  } catch (e) {}
                  var r = !o.observers.size;
                  o.observers.add(e);
                  var n = o.last;
                  return (
                    n && n.error
                      ? e.error && e.error(n.error)
                      : n && n.result && e.next && e.next(n.result),
                    r && o.reobserve().catch(function () {}),
                    function () {
                      o.observers.delete(e) &&
                        !o.observers.size &&
                        o.tearDownQuery();
                    }
                  );
                }) || this;
            (o.observers = new Set()),
              (o.subscriptions = new Set()),
              (o.queryInfo = n),
              (o.queryManager = r),
              (o.waitForOwnResult = tM(i.fetchPolicy)),
              (o.isTornDown = !1);
            var a = r.defaultOptions.watchQuery,
              s = (void 0 === a ? {} : a).fetchPolicy,
              u = void 0 === s ? "cache-first" : s,
              c = i.fetchPolicy,
              l = void 0 === c ? u : c,
              f = i.initialFetchPolicy,
              d = void 0 === f ? ("standby" === l ? u : l) : f;
            (o.options = (0, O.pi)((0, O.pi)({}, i), {
              initialFetchPolicy: d,
              fetchPolicy: l,
            })),
              (o.queryId = n.queryId || r.generateQueryId());
            var p = el(o.query);
            return (o.queryName = p && p.name && p.name.value), o;
          }
          return (
            (0, O.ZT)(t, e),
            Object.defineProperty(t.prototype, "query", {
              get: function () {
                return this.lastQuery || this.options.query;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "variables", {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, r) {
                var n = {
                    next: function (r) {
                      t(r),
                        e.observers.delete(n),
                        e.observers.size ||
                          e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: r,
                  },
                  i = e.subscribe(n);
              });
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                r =
                  this.queryInfo.networkStatus ||
                  (t && t.networkStatus) ||
                  tO.Ie.ready,
                n = (0, O.pi)((0, O.pi)({}, t), {
                  loading: (0, tO.Oj)(r),
                  networkStatus: r,
                }),
                i = this.options.fetchPolicy,
                o = void 0 === i ? "cache-first" : i;
              if (
                tM(o) ||
                this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
              );
              else if (this.waitForOwnResult) this.queryInfo.updateWatch();
              else {
                var a = this.queryInfo.getDiff();
                (a.complete || this.options.returnPartialData) &&
                  (n.data = a.result),
                  (0, to.D)(n.data, {}) && (n.data = void 0),
                  a.complete
                    ? (delete n.partial,
                      a.complete &&
                        n.networkStatus === tO.Ie.loading &&
                        ("cache-first" === o || "cache-only" === o) &&
                        ((n.networkStatus = tO.Ie.ready), (n.loading = !1)))
                    : (n.partial = !0),
                  !1 === globalThis.__DEV__ ||
                    a.complete ||
                    this.options.partialRefetch ||
                    n.loading ||
                    n.data ||
                    n.error ||
                    tF(a.missing);
              }
              return e && this.updateLastResult(n), n;
            }),
            (t.prototype.isDifferentFromLastResult = function (e, t) {
              var r, n, i, o, a, s, u;
              return (
                !this.last ||
                (this.queryManager.getDocumentInfo(this.query)
                  .hasNonreactiveDirective
                  ? ((r = this.query),
                    (n = this.last.result),
                    (i = this.variables),
                    (o = n.data),
                    (a = (0, O._T)(n, ["data"])),
                    (s = e.data),
                    (u = (0, O._T)(e, ["data"])),
                    !(
                      (0, to.Z)(a, u) &&
                      (function e(t, r, n, i) {
                        if (r === n) return !0;
                        var o = new Set();
                        return t.selections.every(function (t) {
                          if (
                            o.has(t) ||
                            (o.add(t), !eI(t, i.variables) || tI(t))
                          )
                            return !0;
                          if (eu(t)) {
                            var a = ea(t),
                              s = r && r[a],
                              u = n && n[a],
                              c = t.selectionSet;
                            if (!c) return (0, to.Z)(s, u);
                            var l = Array.isArray(s),
                              f = Array.isArray(u);
                            if (l !== f) return !1;
                            if (l && f) {
                              var d = s.length;
                              if (u.length !== d) return !1;
                              for (var p = 0; p < d; ++p)
                                if (!e(c, s[p], u[p], i)) return !1;
                              return !0;
                            }
                            return e(c, s, u, i);
                          }
                          var h = H(t, i.fragmentMap);
                          if (h) return !!tI(h) || e(h.selectionSet, r, n, i);
                        });
                      })(eh(r).selectionSet, o, s, {
                        fragmentMap: K(ed(r)),
                        variables: i,
                      })
                    ))
                  : !(0, to.D)(this.last.result, e)) ||
                (t && !(0, to.D)(this.last.variables, t))
              );
            }),
            (t.prototype.getLast = function (e, t) {
              var r = this.last;
              if (r && r[e] && (!t || (0, to.D)(r.variables, this.variables)))
                return r[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast("result", e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast("error", e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                r = { pollInterval: 0 },
                n = this.options.fetchPolicy;
              if (
                ("cache-and-network" === n
                  ? (r.fetchPolicy = n)
                  : "no-cache" === n
                  ? (r.fetchPolicy = "no-cache")
                  : (r.fetchPolicy = "network-only"),
                !1 !== globalThis.__DEV__ && e && tD.call(e, "variables"))
              ) {
                var i = ep(this.query),
                  o = i.variableDefinitions;
                (o &&
                  o.some(function (e) {
                    return "variables" === e.variable.name.value;
                  })) ||
                  !1 === globalThis.__DEV__ ||
                  E.kG.warn(
                    20,
                    e,
                    (null === (t = i.name) || void 0 === t
                      ? void 0
                      : t.value) || i
                  );
              }
              return (
                e &&
                  !(0, to.D)(this.options.variables, e) &&
                  (r.variables = this.options.variables =
                    (0, O.pi)((0, O.pi)({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(r, tO.Ie.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                r = (0, O.pi)(
                  (0, O.pi)(
                    {},
                    e.query
                      ? e
                      : (0, O.pi)(
                          (0, O.pi)(
                            (0, O.pi)((0, O.pi)({}, this.options), {
                              query: this.options.query,
                            }),
                            e
                          ),
                          {
                            variables: (0, O.pi)(
                              (0, O.pi)({}, this.options.variables),
                              e.variables
                            ),
                          }
                        )
                  ),
                  { fetchPolicy: "no-cache" }
                );
              r.query = this.transformDocument(r.query);
              var n = this.queryManager.generateQueryId();
              this.lastQuery = e.query
                ? this.transformDocument(this.options.query)
                : r.query;
              var i = this.queryInfo,
                o = i.networkStatus;
              (i.networkStatus = tO.Ie.fetchMore),
                r.notifyOnNetworkStatusChange && this.observe();
              var a = new Set();
              return this.queryManager
                .fetchQuery(n, r, tO.Ie.fetchMore)
                .then(function (s) {
                  return (
                    t.queryManager.removeQuery(n),
                    i.networkStatus === tO.Ie.fetchMore &&
                      (i.networkStatus = o),
                    t.queryManager.cache.batch({
                      update: function (n) {
                        var i = e.updateQuery;
                        i
                          ? n.updateQuery(
                              {
                                query: t.query,
                                variables: t.variables,
                                returnPartialData: !0,
                                optimistic: !1,
                              },
                              function (e) {
                                return i(e, {
                                  fetchMoreResult: s.data,
                                  variables: r.variables,
                                });
                              }
                            )
                          : n.writeQuery({
                              query: r.query,
                              variables: r.variables,
                              data: s.data,
                            });
                      },
                      onWatchUpdated: function (e) {
                        a.add(e.query);
                      },
                    }),
                    s
                  );
                })
                .finally(function () {
                  a.has(t.query) || tP(t);
                });
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                r = this.queryManager
                  .startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context,
                  })
                  .subscribe({
                    next: function (r) {
                      var n = e.updateQuery;
                      n &&
                        t.updateQuery(function (e, t) {
                          return n(e, {
                            subscriptionData: r,
                            variables: t.variables,
                          });
                        });
                    },
                    error: function (t) {
                      if (e.onError) {
                        e.onError(t);
                        return;
                      }
                      !1 !== globalThis.__DEV__ && E.kG.error(21, t);
                    },
                  });
              return (
                this.subscriptions.add(r),
                function () {
                  t.subscriptions.delete(r) && r.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.silentSetOptions = function (e) {
              var t = (0, tE.o)(this.options, e || {});
              tA(this.options, t);
            }),
            (t.prototype.setVariables = function (e) {
              return (0, to.D)(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e), this.observers.size)
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: e,
                    },
                    tO.Ie.setVariables
                  )
                : Promise.resolve();
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                r = e(
                  t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result,
                  { variables: this.variables }
                );
              r &&
                (t.cache.writeQuery({
                  query: this.options.query,
                  data: r,
                  variables: this.variables,
                }),
                t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var r = t.fetchPolicy,
                  n = void 0 === r ? "cache-first" : r,
                  i = t.initialFetchPolicy,
                  o = void 0 === i ? n : i;
                "standby" === n ||
                  ("function" == typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(n, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: o,
                      }))
                    : "variables-changed" === e
                    ? (t.fetchPolicy = o)
                    : (t.fetchPolicy = t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t, r) {
              return (
                this.queryManager.setObservableQuery(this),
                this.queryManager.fetchConcastWithInfo(this.queryId, e, t, r)
              );
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  r = this.options.pollInterval;
                if (!r) {
                  t && (clearTimeout(t.timeout), delete this.pollingInfo);
                  return;
                }
                if (!t || t.interval !== r) {
                  (0, E.kG)(r, 22),
                    ((t || (this.pollingInfo = {})).interval = r);
                  var n = function () {
                      e.pollingInfo &&
                        ((0, tO.Oj)(e.queryInfo.networkStatus)
                          ? i()
                          : e
                              .reobserve(
                                {
                                  fetchPolicy:
                                    "no-cache" === e.options.initialFetchPolicy
                                      ? "no-cache"
                                      : "network-only",
                                },
                                tO.Ie.poll
                              )
                              .then(i, i));
                    },
                    i = function () {
                      var t = e.pollingInfo;
                      t &&
                        (clearTimeout(t.timeout),
                        (t.timeout = setTimeout(n, t.interval)));
                    };
                  i();
                }
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              void 0 === t && (t = this.variables);
              var r = this.getLastError();
              return (
                r &&
                  this.last &&
                  !(0, to.D)(t, this.last.variables) &&
                  (r = void 0),
                (this.last = (0, O.pi)(
                  {
                    result: this.queryManager.assumeImmutableResults
                      ? e
                      : tT(e),
                    variables: t,
                  },
                  r ? { error: r } : null
                ))
              );
            }),
            (t.prototype.reobserveAsConcast = function (e, t) {
              var r = this;
              this.isTornDown = !1;
              var n =
                  t === tO.Ie.refetch ||
                  t === tO.Ie.fetchMore ||
                  t === tO.Ie.poll,
                i = this.options.variables,
                o = this.options.fetchPolicy,
                a = (0, tE.o)(this.options, e || {}),
                s = n ? a : tA(this.options, a),
                u = this.transformDocument(s.query);
              (this.lastQuery = u),
                !n &&
                  (this.updatePolling(),
                  e &&
                    e.variables &&
                    !(0, to.D)(e.variables, i) &&
                    "standby" !== s.fetchPolicy &&
                    s.fetchPolicy === o &&
                    (this.applyNextFetchPolicy("variables-changed", s),
                    void 0 === t && (t = tO.Ie.setVariables))),
                this.waitForOwnResult &&
                  (this.waitForOwnResult = tM(s.fetchPolicy));
              var c = function () {
                  r.concast === d && (r.waitForOwnResult = !1);
                },
                l = s.variables && (0, O.pi)({}, s.variables),
                f = this.fetch(s, t, u),
                d = f.concast,
                p = f.fromLink,
                h = {
                  next: function (e) {
                    c(), r.reportResult(e, l);
                  },
                  error: function (e) {
                    c(), r.reportError(e, l);
                  },
                };
              return (
                n ||
                  (!p && this.concast) ||
                  (this.concast &&
                    this.observer &&
                    this.concast.removeObserver(this.observer),
                  (this.concast = d),
                  (this.observer = h)),
                d.addObserver(h),
                d
              );
            }),
            (t.prototype.reobserve = function (e, t) {
              return this.reobserveAsConcast(e, t).promise;
            }),
            (t.prototype.resubscribeAfterError = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = this.last;
              this.resetLastResults();
              var n = this.subscribe.apply(this, e);
              return (this.last = r), n;
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var r = this.getLastError(),
                n = this.isDifferentFromLastResult(e, t);
              (r || !e.partial || this.options.returnPartialData) &&
                this.updateLastResult(e, t),
                (r || n) && tw(this.observers, "next", e);
            }),
            (t.prototype.reportError = function (e, t) {
              var r = (0, O.pi)((0, O.pi)({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: tO.Ie.error,
                loading: !1,
              });
              this.updateLastResult(r, t),
                tw(this.observers, "error", (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast &&
                  this.observer &&
                  (this.concast.removeObserver(this.observer),
                  delete this.concast,
                  delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            (t.prototype.transformDocument = function (e) {
              return this.queryManager.transform(e);
            }),
            t
          );
        })($);
      function tP(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return "cache-and-network" === r || "network-only" === r
          ? e.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function (e, t) {
                return ((this.nextFetchPolicy = n),
                "function" == typeof this.nextFetchPolicy)
                  ? this.nextFetchPolicy(e, t)
                  : r;
              },
            })
          : e.reobserve();
      }
      function tR(e) {
        !1 !== globalThis.__DEV__ && E.kG.error(23, e.message, e.stack);
      }
      function tF(e) {
        !1 !== globalThis.__DEV__ &&
          e &&
          !1 !== globalThis.__DEV__ &&
          E.kG.debug(24, e);
      }
      function tM(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e;
      }
      function tN(e) {
        return (
          e.kind === eE.h.FIELD ||
          e.kind === eE.h.FRAGMENT_SPREAD ||
          e.kind === eE.h.INLINE_FRAGMENT
        );
      }
      tk(tj);
      let tq = () => Object.create(null),
        { forEach: tL, slice: tV } = Array.prototype,
        { hasOwnProperty: tz } = Object.prototype;
      class tQ {
        constructor(e = !0, t = tq) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup(...e) {
          return this.lookupArray(e);
        }
        lookupArray(e) {
          let t = this;
          return (
            tL.call(e, (e) => (t = t.getChildTrie(e))),
            tz.call(t, "data") ? t.data : (t.data = this.makeData(tV.call(e)))
          );
        }
        peek(...e) {
          return this.peekArray(e);
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            let n = this.weakness && tB(e[r]) ? t.weak : t.strong;
            t = n && n.get(e[r]);
          }
          return t && t.data;
        }
        getChildTrie(e) {
          let t =
              this.weakness && tB(e)
                ? this.weak || (this.weak = new WeakMap())
                : this.strong || (this.strong = new Map()),
            r = t.get(e);
          return r || t.set(e, (r = new tQ(this.weakness, this.makeData))), r;
        }
      }
      function tB(e) {
        switch (typeof e) {
          case "object":
            if (null === e) break;
          case "function":
            return !0;
        }
        return !1;
      }
      function tG() {}
      class tU {
        constructor(e = 1 / 0, t = tG) {
          (this.max = e),
            (this.dispose = t),
            (this.map = new Map()),
            (this.newest = null),
            (this.oldest = null);
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          let t = this.getNode(e);
          return t && t.value;
        }
        get size() {
          return this.map.size;
        }
        getNode(e) {
          let t = this.map.get(e);
          if (t && t !== this.newest) {
            let { older: e, newer: r } = t;
            r && (r.older = e),
              e && (e.newer = r),
              (t.older = this.newest),
              (t.older.newer = t),
              (t.newer = null),
              (this.newest = t),
              t === this.oldest && (this.oldest = r);
          }
          return t;
        }
        set(e, t) {
          let r = this.getNode(e);
          return r
            ? (r.value = t)
            : ((r = { key: e, value: t, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = r),
              (this.newest = r),
              (this.oldest = this.oldest || r),
              this.map.set(e, r),
              r.value);
        }
        clean() {
          for (; this.oldest && this.map.size > this.max; )
            this.delete(this.oldest.key);
        }
        delete(e) {
          let t = this.map.get(e);
          return (
            !!t &&
            (t === this.newest && (this.newest = t.older),
            t === this.oldest && (this.oldest = t.newer),
            t.newer && (t.newer.older = t.older),
            t.older && (t.older.newer = t.newer),
            this.map.delete(e),
            this.dispose(t.value, e),
            !0)
          );
        }
      }
      let tW = null,
        t$ = {},
        tY = 1;
      function tJ(e) {
        try {
          return e();
        } catch (e) {}
      }
      let tK = "@wry/context:Slot",
        tH = tJ(() => globalThis) || tJ(() => global) || Object.create(null),
        tZ =
          tH[tK] ||
          Array[tK] ||
          (function (e) {
            try {
              Object.defineProperty(tH, tK, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            } finally {
              return e;
            }
          })(
            class {
              constructor() {
                this.id = [
                  "slot",
                  tY++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(":");
              }
              hasValue() {
                for (let e = tW; e; e = e.parent)
                  if (this.id in e.slots) {
                    let t = e.slots[this.id];
                    if (t === t$) break;
                    return e !== tW && (tW.slots[this.id] = t), !0;
                  }
                return tW && (tW.slots[this.id] = t$), !1;
              }
              getValue() {
                if (this.hasValue()) return tW.slots[this.id];
              }
              withValue(e, t, r, n) {
                let i = { __proto__: null, [this.id]: e },
                  o = tW;
                tW = { parent: o, slots: i };
                try {
                  return t.apply(n, r);
                } finally {
                  tW = o;
                }
              }
              static bind(e) {
                let t = tW;
                return function () {
                  let r = tW;
                  try {
                    return (tW = t), e.apply(this, arguments);
                  } finally {
                    tW = r;
                  }
                };
              }
              static noContext(e, t, r) {
                if (!tW) return e.apply(r, t);
                {
                  let n = tW;
                  try {
                    return (tW = null), e.apply(r, t);
                  } finally {
                    tW = n;
                  }
                }
              }
            }
          ),
        { bind: tX, noContext: t0 } = tZ,
        t1 = new tZ(),
        { hasOwnProperty: t2 } = Object.prototype,
        t3 =
          Array.from ||
          function (e) {
            let t = [];
            return e.forEach((e) => t.push(e)), t;
          };
      function t5(e) {
        let { unsubscribe: t } = e;
        "function" == typeof t && ((e.unsubscribe = void 0), t());
      }
      let t6 = [];
      function t8(e, t) {
        if (!e) throw Error(t || "assertion failure");
      }
      function t4(e, t) {
        let r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1];
      }
      function t9(e) {
        switch (e.length) {
          case 0:
            throw Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      class t7 {
        constructor(e) {
          (this.fn = e),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++t7.count;
        }
        peek() {
          if (1 === this.value.length && !rr(this))
            return re(this), this.value[0];
        }
        recompute(e) {
          var t;
          return (
            t8(!this.recomputing, "already recomputing"),
            re(this),
            rr(this) &&
              (rs(this),
              t1.withValue(this, rt, [this, e]),
              (function (e, t) {
                if ("function" == typeof e.subscribe)
                  try {
                    t5(e), (e.unsubscribe = e.subscribe.apply(null, t));
                  } catch (t) {
                    return e.setDirty(), !1;
                  }
                return !0;
              })(this, e) &&
                ((this.dirty = !1), rr(this) || ((t = this), rn(t, ro)))),
            t9(this.value)
          );
        }
        setDirty() {
          this.dirty || ((this.dirty = !0), rn(this, ri), t5(this));
        }
        dispose() {
          this.setDirty(),
            rs(this),
            rn(this, (e, t) => {
              e.setDirty(), ru(e, this);
            });
        }
        forget() {
          this.dispose();
        }
        dependOn(e) {
          e.add(this),
            this.deps || (this.deps = t6.pop() || new Set()),
            this.deps.add(e);
        }
        forgetDeps() {
          this.deps &&
            (t3(this.deps).forEach((e) => e.delete(this)),
            this.deps.clear(),
            t6.push(this.deps),
            (this.deps = null));
        }
      }
      function re(e) {
        let t = t1.getValue();
        if (t)
          return (
            e.parents.add(t),
            t.childValues.has(e) || t.childValues.set(e, []),
            rr(e) ? ri(t, e) : ro(t, e),
            t
          );
      }
      function rt(e, t) {
        let r;
        e.recomputing = !0;
        let { normalizeResult: n } = e;
        n && 1 === e.value.length && (r = e.value.slice(0)),
          (e.value.length = 0);
        try {
          if (((e.value[0] = e.fn.apply(null, t)), n && r && !t4(r, e.value)))
            try {
              e.value[0] = n(e.value[0], r[0]);
            } catch (e) {}
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function rr(e) {
        return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
      }
      function rn(e, t) {
        let r = e.parents.size;
        if (r) {
          let n = t3(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e);
        }
      }
      function ri(e, t) {
        t8(e.childValues.has(t)), t8(rr(t));
        let r = !rr(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = t6.pop() || new Set();
        e.dirtyChildren.add(t), r && rn(e, ri);
      }
      function ro(e, t) {
        t8(e.childValues.has(t)), t8(!rr(t));
        let r = e.childValues.get(t);
        0 === r.length
          ? e.childValues.set(t, t.value.slice(0))
          : t4(r, t.value) || e.setDirty(),
          ra(e, t),
          rr(e) || rn(e, ro);
      }
      function ra(e, t) {
        let r = e.dirtyChildren;
        r &&
          (r.delete(t),
          0 === r.size &&
            (t6.length < 100 && t6.push(r), (e.dirtyChildren = null)));
      }
      function rs(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach((t, r) => {
            ru(e, r);
          }),
          e.forgetDeps(),
          t8(null === e.dirtyChildren);
      }
      function ru(e, t) {
        t.parents.delete(e), e.childValues.delete(t), ra(e, t);
      }
      t7.count = 0;
      let rc = { setDirty: !0, dispose: !0, forget: !0 };
      function rl(e) {
        let t = new Map(),
          r = e && e.subscribe;
        function n(e) {
          let n = t1.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, (i = new Set())),
              n.dependOn(i),
              "function" == typeof r && (t5(i), (i.unsubscribe = r(e)));
          }
        }
        return (
          (n.dirty = function (e, r) {
            let n = t.get(e);
            if (n) {
              let i = r && t2.call(rc, r) ? r : "setDirty";
              t3(n).forEach((e) => e[i]()), t.delete(e), t5(n);
            }
          }),
          n
        );
      }
      function rf(...e) {
        return (n || (n = new tQ("function" == typeof WeakMap))).lookupArray(e);
      }
      let rd = new Set();
      function rp(
        e,
        {
          max: t = 65536,
          keyArgs: r,
          makeCacheKey: n = rf,
          normalizeResult: i,
          subscribe: o,
          cache: a = tU,
        } = Object.create(null)
      ) {
        let s = "function" == typeof a ? new a(t, (e) => e.dispose()) : a,
          u = function () {
            let t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let a = s.get(t);
            a ||
              (s.set(t, (a = new t7(e))),
              (a.normalizeResult = i),
              (a.subscribe = o),
              (a.forget = () => s.delete(t)));
            let u = a.recompute(Array.prototype.slice.call(arguments));
            return (
              s.set(t, a),
              rd.add(s),
              t1.hasValue() || (rd.forEach((e) => e.clean()), rd.clear()),
              u
            );
          };
        function c(e) {
          let t = e && s.get(e);
          t && t.setDirty();
        }
        function l(e) {
          let t = e && s.get(e);
          if (t) return t.peek();
        }
        function f(e) {
          return !!e && s.delete(e);
        }
        return (
          Object.defineProperty(u, "size", {
            get: () => s.size,
            configurable: !1,
            enumerable: !1,
          }),
          Object.freeze(
            (u.options = {
              max: t,
              keyArgs: r,
              makeCacheKey: n,
              normalizeResult: i,
              subscribe: o,
              cache: s,
            })
          ),
          (u.dirtyKey = c),
          (u.dirty = function () {
            c(n.apply(null, arguments));
          }),
          (u.peekKey = l),
          (u.peek = function () {
            return l(n.apply(null, arguments));
          }),
          (u.forgetKey = f),
          (u.forget = function () {
            return f(n.apply(null, arguments));
          }),
          (u.makeCacheKey = n),
          (u.getKey = r
            ? function () {
                return n.apply(null, r.apply(null, arguments));
              }
            : n),
          Object.freeze(u)
        );
      }
      var rh = new tZ(),
        rv = new WeakMap();
      function rm(e) {
        var t = rv.get(e);
        return t || rv.set(e, (t = { vars: new Set(), dep: rl() })), t;
      }
      function ry(e) {
        rm(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function rg(e) {
        var t = new Set(),
          r = new Set(),
          n = function (o) {
            if (arguments.length > 0) {
              if (e !== o) {
                (e = o),
                  t.forEach(function (e) {
                    rm(e).dep.dirty(n),
                      e.broadcastWatches && e.broadcastWatches();
                  });
                var a = Array.from(r);
                r.clear(),
                  a.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var s = rh.getValue();
              s && (i(s), rm(s).dep(n));
            }
            return e;
          };
        n.onNextChange = function (e) {
          return (
            r.add(e),
            function () {
              r.delete(e);
            }
          );
        };
        var i = (n.attachCache = function (e) {
          return t.add(e), rm(e).vars.add(n), n;
        });
        return (
          (n.forgetCache = function (e) {
            return t.delete(e);
          }),
          n
        );
      }
      var rb = (function () {
          function e(e) {
            var t = e.cache,
              r = e.client,
              n = e.resolvers,
              i = e.fragmentMatcher;
            (this.selectionsToResolveCache = new WeakMap()),
              (this.cache = t),
              r && (this.client = r),
              n && this.addResolvers(n),
              i && this.setFragmentMatcher(i);
          }
          return (
            (e.prototype.addResolvers = function (e) {
              var t = this;
              (this.resolvers = this.resolvers || {}),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.resolvers = eN(t.resolvers, e);
                    })
                  : (this.resolvers = eN(this.resolvers, e));
            }),
            (e.prototype.setResolvers = function (e) {
              (this.resolvers = {}), this.addResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.resolvers || {};
            }),
            (e.prototype.runResolvers = function (e) {
              var t = e.document,
                r = e.remoteResult,
                n = e.context,
                i = e.variables,
                o = e.onlyRunForcedResolvers,
                a = void 0 !== o && o;
              return (0, O.mG)(this, void 0, void 0, function () {
                return (0, O.Jh)(this, function (e) {
                  return t
                    ? [
                        2,
                        this.resolveDocument(
                          t,
                          r.data,
                          n,
                          i,
                          this.fragmentMatcher,
                          a
                        ).then(function (e) {
                          return (0,
                          O.pi)((0, O.pi)({}, r), { data: e.result });
                        }),
                      ]
                    : [2, r];
                });
              });
            }),
            (e.prototype.setFragmentMatcher = function (e) {
              this.fragmentMatcher = e;
            }),
            (e.prototype.getFragmentMatcher = function () {
              return this.fragmentMatcher;
            }),
            (e.prototype.clientQuery = function (e) {
              return eC(["client"], e) && this.resolvers ? e : null;
            }),
            (e.prototype.serverQuery = function (e) {
              return tt(e);
            }),
            (e.prototype.prepareContext = function (e) {
              var t = this.cache;
              return (0, O.pi)((0, O.pi)({}, e), {
                cache: t,
                getCacheKey: function (e) {
                  return t.identify(e);
                },
              });
            }),
            (e.prototype.addExportedVariables = function (e, t, r) {
              return (
                void 0 === t && (t = {}),
                void 0 === r && (r = {}),
                (0, O.mG)(this, void 0, void 0, function () {
                  return (0, O.Jh)(this, function (n) {
                    return e
                      ? [
                          2,
                          this.resolveDocument(
                            e,
                            this.buildRootValueFromCache(e, t) || {},
                            this.prepareContext(r),
                            t
                          ).then(function (e) {
                            return (0,
                            O.pi)((0, O.pi)({}, t), e.exportedVariables);
                          }),
                        ]
                      : [2, (0, O.pi)({}, t)];
                  });
                })
              );
            }),
            (e.prototype.shouldForceResolvers = function (e) {
              var t = !1;
              return (
                eT(e, {
                  Directive: {
                    enter: function (e) {
                      if (
                        "client" === e.name.value &&
                        e.arguments &&
                        (t = e.arguments.some(function (e) {
                          return (
                            "always" === e.name.value &&
                            "BooleanValue" === e.value.kind &&
                            !0 === e.value.value
                          );
                        }))
                      )
                        return ex;
                    },
                  },
                }),
                t
              );
            }),
            (e.prototype.buildRootValueFromCache = function (e, t) {
              return this.cache.diff({
                query:
                  "query" === eh(e).operation
                    ? e
                    : eT(e, {
                        OperationDefinition: {
                          enter: function (e) {
                            return (0, O.pi)((0, O.pi)({}, e), {
                              operation: "query",
                            });
                          },
                        },
                      }),
                variables: t,
                returnPartialData: !0,
                optimistic: !1,
              }).result;
            }),
            (e.prototype.resolveDocument = function (e, t, r, n, i, o) {
              return (
                void 0 === r && (r = {}),
                void 0 === n && (n = {}),
                void 0 === i &&
                  (i = function () {
                    return !0;
                  }),
                void 0 === o && (o = !1),
                (0, O.mG)(this, void 0, void 0, function () {
                  var a, s, u, c, l, f, d, p, h;
                  return (0, O.Jh)(this, function (v) {
                    return (
                      (a = eh(e)),
                      (s = K(ed(e))),
                      (u = this.collectSelectionsToResolve(a, s)),
                      (l = (c = a.operation)
                        ? c.charAt(0).toUpperCase() + c.slice(1)
                        : "Query"),
                      (f = this),
                      (d = f.cache),
                      (p = f.client),
                      (h = {
                        fragmentMap: s,
                        context: (0, O.pi)((0, O.pi)({}, r), {
                          cache: d,
                          client: p,
                        }),
                        variables: n,
                        fragmentMatcher: i,
                        defaultOperationType: l,
                        exportedVariables: {},
                        selectionsToResolve: u,
                        onlyRunForcedResolvers: o,
                      }),
                      [
                        2,
                        this.resolveSelectionSet(a.selectionSet, !1, t, h).then(
                          function (e) {
                            return {
                              result: e,
                              exportedVariables: h.exportedVariables,
                            };
                          }
                        ),
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.resolveSelectionSet = function (e, t, r, n) {
              return (0, O.mG)(this, void 0, void 0, function () {
                var i,
                  o,
                  a,
                  s,
                  u,
                  c = this;
                return (0, O.Jh)(this, function (l) {
                  return (
                    (i = n.fragmentMap),
                    (o = n.context),
                    (a = n.variables),
                    (s = [r]),
                    (u = function (e) {
                      return (0, O.mG)(c, void 0, void 0, function () {
                        var u, c;
                        return (0, O.Jh)(this, function (l) {
                          return (t || n.selectionsToResolve.has(e)) && eI(e, a)
                            ? eu(e)
                              ? [
                                  2,
                                  this.resolveField(e, t, r, n).then(function (
                                    t
                                  ) {
                                    var r;
                                    void 0 !== t &&
                                      s.push((((r = {})[ea(e)] = t), r));
                                  }),
                                ]
                              : ("InlineFragment" === e.kind
                                  ? (u = e)
                                  : ((u = i[e.name.value]),
                                    (0, E.kG)(u, 18, e.name.value)),
                                u &&
                                u.typeCondition &&
                                ((c = u.typeCondition.name.value),
                                n.fragmentMatcher(r, c, o))
                                  ? [
                                      2,
                                      this.resolveSelectionSet(
                                        u.selectionSet,
                                        t,
                                        r,
                                        n
                                      ).then(function (e) {
                                        s.push(e);
                                      }),
                                    ]
                                  : [2])
                            : [2];
                        });
                      });
                    }),
                    [
                      2,
                      Promise.all(e.selections.map(u)).then(function () {
                        return eq(s);
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveField = function (e, t, r, n) {
              return (0, O.mG)(this, void 0, void 0, function () {
                var i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  d,
                  p = this;
                return (0, O.Jh)(this, function (h) {
                  return r
                    ? ((i = n.variables),
                      (s = (o = e.name.value) !== (a = ea(e))),
                      (c = Promise.resolve((u = r[a] || r[o]))),
                      (!n.onlyRunForcedResolvers ||
                        this.shouldForceResolvers(e)) &&
                        ((l = r.__typename || n.defaultOperationType),
                        (f = this.resolvers && this.resolvers[l]) &&
                          (d = f[s ? o : a]) &&
                          (c = Promise.resolve(
                            rh.withValue(this.cache, d, [
                              r,
                              eo(e, i),
                              n.context,
                              { field: e, fragmentMap: n.fragmentMap },
                            ])
                          ))),
                      [
                        2,
                        c.then(function (r) {
                          if (
                            (void 0 === r && (r = u),
                            e.directives &&
                              e.directives.forEach(function (e) {
                                "export" === e.name.value &&
                                  e.arguments &&
                                  e.arguments.forEach(function (e) {
                                    "as" === e.name.value &&
                                      "StringValue" === e.value.kind &&
                                      (n.exportedVariables[e.value.value] = r);
                                  });
                              }),
                            !e.selectionSet || null == r)
                          )
                            return r;
                          var i,
                            o,
                            a =
                              null !==
                                (o =
                                  null === (i = e.directives) || void 0 === i
                                    ? void 0
                                    : i.some(function (e) {
                                        return "client" === e.name.value;
                                      })) &&
                              void 0 !== o &&
                              o;
                          return Array.isArray(r)
                            ? p.resolveSubSelectedArray(e, t || a, r, n)
                            : e.selectionSet
                            ? p.resolveSelectionSet(
                                e.selectionSet,
                                t || a,
                                r,
                                n
                              )
                            : void 0;
                        }),
                      ])
                    : [2, null];
                });
              });
            }),
            (e.prototype.resolveSubSelectedArray = function (e, t, r, n) {
              var i = this;
              return Promise.all(
                r.map(function (r) {
                  return null === r
                    ? null
                    : Array.isArray(r)
                    ? i.resolveSubSelectedArray(e, t, r, n)
                    : e.selectionSet
                    ? i.resolveSelectionSet(e.selectionSet, t, r, n)
                    : void 0;
                })
              );
            }),
            (e.prototype.collectSelectionsToResolve = function (e, t) {
              var r = function (e) {
                  return !Array.isArray(e);
                },
                n = this.selectionsToResolveCache;
              return (function e(i) {
                if (!n.has(i)) {
                  var o = new Set();
                  n.set(i, o),
                    eT(i, {
                      Directive: function (e, t, n, i, a) {
                        "client" === e.name.value &&
                          a.forEach(function (e) {
                            r(e) && tN(e) && o.add(e);
                          });
                      },
                      FragmentSpread: function (n, i, a, s, u) {
                        var c = t[n.name.value];
                        (0, E.kG)(c, 19, n.name.value);
                        var l = e(c);
                        l.size > 0 &&
                          (u.forEach(function (e) {
                            r(e) && tN(e) && o.add(e);
                          }),
                          o.add(n),
                          l.forEach(function (e) {
                            o.add(e);
                          }));
                      },
                    });
                }
                return n.get(i);
              })(e);
            }),
            e
          );
        })(),
        rw = new (eD.mr ? WeakMap : Map)();
      function rk(e, t) {
        var r = e[t];
        "function" == typeof r &&
          (e[t] = function () {
            return rw.set(e, (rw.get(e) + 1) % 1e15), r.apply(this, arguments);
          });
      }
      function rS(e) {
        e.notifyTimeout &&
          (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var r_ = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var r = (this.cache = e.cache);
          rw.has(r) ||
            (rw.set(r, 0), rk(r, "evict"), rk(r, "modify"), rk(r, "reset"));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || tO.Ie.loading;
            return (
              this.variables &&
                this.networkStatus !== tO.Ie.loading &&
                !(0, to.D)(this.variables, e.variables) &&
                (t = tO.Ie.setVariables),
              (0, to.D)(e.variables, this.variables) ||
                (this.lastDiff = void 0),
              Object.assign(this, {
                document: e.document,
                variables: e.variables,
                networkError: null,
                graphQLErrors: this.graphQLErrors || [],
                networkStatus: t,
              }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            rS(this), (this.dirty = !1);
          }),
          (e.prototype.getDiff = function () {
            var e = this.getDiffOptions();
            if (this.lastDiff && (0, to.D)(e, this.lastDiff.options))
              return this.lastDiff.diff;
            this.updateWatch(this.variables);
            var t = this.observableQuery;
            if (t && "no-cache" === t.options.fetchPolicy)
              return { complete: !1 };
            var r = this.cache.diff(e);
            return this.updateLastDiff(r, e), r;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e
              ? { diff: e, options: t || this.getDiffOptions() }
              : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              {
                query: this.document,
                variables: e,
                returnPartialData: !0,
                optimistic: !0,
                canonizeResults:
                  null === (t = this.observableQuery) || void 0 === t
                    ? void 0
                    : t.options.canonizeResults,
              }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t = this,
              r = this.lastDiff && this.lastDiff.diff;
            this.updateLastDiff(e),
              this.dirty ||
                (0, to.D)(r && r.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return t.notify();
                  }, 0)));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction
                        ? e.observe()
                        : tP(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            rS(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if ((0, tO.Oj)(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ("cache-only" !== e && "cache-and-network" !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel);
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var r = this.observableQuery;
            if (!r || "no-cache" !== r.options.fetchPolicy) {
              var n = (0, O.pi)((0, O.pi)({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && (0, to.D)(n, this.lastWatch)) ||
                (this.cancel(),
                (this.cancel = this.cache.watch((this.lastWatch = n))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var r = this.lastWrite;
            return !(
              r &&
              r.dmCount === rw.get(this.cache) &&
              (0, to.D)(t, r.variables) &&
              (0, to.D)(e.data, r.result.data)
            );
          }),
          (e.prototype.markResult = function (e, t, r, n) {
            var i = this,
              o = new eV(),
              a = (0, eF.O)(e.errors) ? e.errors.slice(0) : [];
            if (
              (this.reset(), "incremental" in e && (0, eF.O)(e.incremental))
            ) {
              var s = eQ(this.getDiff().result, e);
              e.data = s;
            } else if ("hasNext" in e && e.hasNext) {
              var u = this.getDiff();
              e.data = o.merge(u.result, e.data);
            }
            (this.graphQLErrors = a),
              "no-cache" === r.fetchPolicy
                ? this.updateLastDiff(
                    { result: e.data, complete: !0 },
                    this.getDiffOptions(r.variables)
                  )
                : 0 !== n &&
                  (rO(e, r.errorPolicy)
                    ? this.cache.performTransaction(function (o) {
                        if (i.shouldWrite(e, r.variables))
                          o.writeQuery({
                            query: t,
                            data: e.data,
                            variables: r.variables,
                            overwrite: 1 === n,
                          }),
                            (i.lastWrite = {
                              result: e,
                              variables: r.variables,
                              dmCount: rw.get(i.cache),
                            });
                        else if (i.lastDiff && i.lastDiff.diff.complete) {
                          e.data = i.lastDiff.diff.result;
                          return;
                        }
                        var a = i.getDiffOptions(r.variables),
                          s = o.diff(a);
                        !i.stopped &&
                          (0, to.D)(i.variables, r.variables) &&
                          i.updateWatch(r.variables),
                          i.updateLastDiff(s, a),
                          s.complete && (e.data = s.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (
              (this.networkError = null), (this.networkStatus = tO.Ie.ready)
            );
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = tO.Ie.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function rO(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !ty(e);
        return !n && r && e.data && (n = !0), n;
      }
      var rE = Object.prototype.hasOwnProperty,
        rx = (function () {
          function e(e) {
            var t = e.cache,
              r = e.link,
              n = e.defaultOptions,
              i = e.documentTransform,
              o = e.queryDeduplication,
              a = e.onBroadcast,
              s = e.ssrMode,
              u = e.clientAwareness,
              c = e.localState,
              l = e.assumeImmutableResults,
              f = void 0 === l ? !!t.assumeImmutableResults : l,
              d = this;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new (eD.mr ? WeakMap : Map)()),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new Map());
            var p = new tv(
              function (e) {
                return d.cache.transformDocument(e);
              },
              { cache: !1 }
            );
            (this.cache = t),
              (this.link = r),
              (this.defaultOptions = n || Object.create(null)),
              (this.queryDeduplication = void 0 !== o && o),
              (this.clientAwareness = void 0 === u ? {} : u),
              (this.localState = c || new rb({ cache: t })),
              (this.ssrMode = void 0 !== s && s),
              (this.assumeImmutableResults = f),
              (this.documentTransform = i ? p.concat(i).concat(p) : p),
              (this.onBroadcast = a) &&
                (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, r) {
                e.stopQueryNoBroadcast(r);
              }),
                this.cancelPendingFetches((0, E._K)(25));
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              var t,
                r,
                n = e.mutation,
                i = e.variables,
                o = e.optimisticResponse,
                a = e.updateQueries,
                s = e.refetchQueries,
                u = void 0 === s ? [] : s,
                c = e.awaitRefetchQueries,
                l = void 0 !== c && c,
                f = e.update,
                d = e.onQueryUpdated,
                p = e.fetchPolicy,
                h =
                  void 0 === p
                    ? (null === (t = this.defaultOptions.mutate) || void 0 === t
                        ? void 0
                        : t.fetchPolicy) || "network-only"
                    : p,
                v = e.errorPolicy,
                m =
                  void 0 === v
                    ? (null === (r = this.defaultOptions.mutate) || void 0 === r
                        ? void 0
                        : r.errorPolicy) || "none"
                    : v,
                y = e.keepRootFields,
                g = e.context;
              return (0, O.mG)(this, void 0, void 0, function () {
                var e, t, r, s;
                return (0, O.Jh)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      if (
                        ((0, E.kG)(n, 26),
                        (0, E.kG)("network-only" === h || "no-cache" === h, 27),
                        (e = this.generateMutationId()),
                        (n = this.cache.transformForLink(this.transform(n))),
                        (t = this.getDocumentInfo(n).hasClientExports),
                        (i = this.getVariables(n, i)),
                        !t)
                      )
                        return [3, 2];
                      return [4, this.localState.addExportedVariables(n, i, g)];
                    case 1:
                      (i = c.sent()), (c.label = 2);
                    case 2:
                      return (
                        (r =
                          this.mutationStore &&
                          (this.mutationStore[e] = {
                            mutation: n,
                            variables: i,
                            loading: !0,
                            error: null,
                          })),
                        o &&
                          this.markMutationOptimistic(o, {
                            mutationId: e,
                            document: n,
                            variables: i,
                            fetchPolicy: h,
                            errorPolicy: m,
                            context: g,
                            updateQueries: a,
                            update: f,
                            keepRootFields: y,
                          }),
                        this.broadcastQueries(),
                        (s = this),
                        [
                          2,
                          new Promise(function (t, c) {
                            return tm(
                              s.getObservableFromLink(
                                n,
                                (0, O.pi)((0, O.pi)({}, g), {
                                  optimisticResponse: o,
                                }),
                                i,
                                !1
                              ),
                              function (t) {
                                if (ty(t) && "none" === m)
                                  throw new eR.cA({ graphQLErrors: tg(t) });
                                r && ((r.loading = !1), (r.error = null));
                                var c = (0, O.pi)({}, t);
                                return (
                                  "function" == typeof u && (u = u(c)),
                                  "ignore" === m && ty(c) && delete c.errors,
                                  s.markMutationResult({
                                    mutationId: e,
                                    result: c,
                                    document: n,
                                    variables: i,
                                    fetchPolicy: h,
                                    errorPolicy: m,
                                    context: g,
                                    update: f,
                                    updateQueries: a,
                                    awaitRefetchQueries: l,
                                    refetchQueries: u,
                                    removeOptimistic: o ? e : void 0,
                                    onQueryUpdated: d,
                                    keepRootFields: y,
                                  })
                                );
                              }
                            ).subscribe({
                              next: function (e) {
                                s.broadcastQueries(),
                                  ("hasNext" in e && !1 !== e.hasNext) || t(e);
                              },
                              error: function (t) {
                                r && ((r.loading = !1), (r.error = t)),
                                  o && s.cache.removeOptimistic(e),
                                  s.broadcastQueries(),
                                  c(
                                    t instanceof eR.cA
                                      ? t
                                      : new eR.cA({ networkError: t })
                                  );
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var r = this;
              void 0 === t && (t = this.cache);
              var n = e.result,
                i = [],
                o = "no-cache" === e.fetchPolicy;
              if (!o && rO(n, e.errorPolicy)) {
                if (
                  (ez(n) ||
                    i.push({
                      result: n.data,
                      dataId: "ROOT_MUTATION",
                      query: e.document,
                      variables: e.variables,
                    }),
                  ez(n) && (0, eF.O)(n.incremental))
                ) {
                  var a = t.diff({
                      id: "ROOT_MUTATION",
                      query: this.getDocumentInfo(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    }),
                    s = void 0;
                  a.result && (s = eQ(a.result, n)),
                    void 0 !== s &&
                      ((n.data = s),
                      i.push({
                        result: s,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables,
                      }));
                }
                var u = e.updateQueries;
                u &&
                  this.queries.forEach(function (e, o) {
                    var a = e.observableQuery,
                      s = a && a.queryName;
                    if (s && rE.call(u, s)) {
                      var c = u[s],
                        l = r.queries.get(o),
                        f = l.document,
                        d = l.variables,
                        p = t.diff({
                          query: f,
                          variables: d,
                          returnPartialData: !0,
                          optimistic: !1,
                        }),
                        h = p.result;
                      if (p.complete && h) {
                        var v = c(h, {
                          mutationResult: n,
                          queryName: (f && ef(f)) || void 0,
                          queryVariables: d,
                        });
                        v &&
                          i.push({
                            result: v,
                            dataId: "ROOT_QUERY",
                            query: f,
                            variables: d,
                          });
                      }
                    }
                  });
              }
              if (
                i.length > 0 ||
                e.refetchQueries ||
                e.update ||
                e.onQueryUpdated ||
                e.removeOptimistic
              ) {
                var c = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      o ||
                        i.forEach(function (e) {
                          return t.write(e);
                        });
                      var a,
                        s = e.update,
                        u =
                          !(ez((a = n)) || ("hasNext" in a && "data" in a)) ||
                          (ez(n) && !n.hasNext);
                      if (s) {
                        if (!o) {
                          var c = t.diff({
                            id: "ROOT_MUTATION",
                            query: r.getDocumentInfo(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0,
                          });
                          c.complete &&
                            ("incremental" in
                              (n = (0, O.pi)((0, O.pi)({}, n), {
                                data: c.result,
                              })) && delete n.incremental,
                            "hasNext" in n && delete n.hasNext);
                        }
                        u &&
                          s(t, n, {
                            context: e.context,
                            variables: e.variables,
                          });
                      }
                      o ||
                        e.keepRootFields ||
                        !u ||
                        t.modify({
                          id: "ROOT_MUTATION",
                          fields: function (e, t) {
                            var r = t.fieldName,
                              n = t.DELETE;
                            return "__typename" === r ? e : n;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return c.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(c).then(function () {
                    return n;
                  });
              }
              return Promise.resolve(n);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var r = this,
                n = "function" == typeof e ? e(t.variables) : e;
              return this.cache.recordOptimisticTransaction(function (e) {
                try {
                  r.markMutationResult(
                    (0, O.pi)((0, O.pi)({}, t), { result: { data: n } }),
                    e
                  );
                } catch (e) {
                  !1 !== globalThis.__DEV__ && E.kG.error(e);
                }
              }, t.mutationId);
            }),
            (e.prototype.fetchQuery = function (e, t, r) {
              return this.fetchConcastWithInfo(e, t, r).concast.promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, r) {
                  e[r] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors,
                  };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              return this.documentTransform.transformDocument(e);
            }),
            (e.prototype.getDocumentInfo = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var r = {
                  hasClientExports: e && eC(["client", "export"], e, !0),
                  hasForcedResolvers: this.localState.shouldForceResolvers(e),
                  hasNonreactiveDirective: eC(["nonreactive"], e),
                  clientQuery: this.localState.clientQuery(e),
                  serverQuery: e7(
                    [
                      { name: "client", remove: !0 },
                      { name: "connection" },
                      { name: "nonreactive" },
                    ],
                    e
                  ),
                  defaultVars: ev(el(e)),
                  asQuery: (0, O.pi)((0, O.pi)({}, e), {
                    definitions: e.definitions.map(function (e) {
                      return "OperationDefinition" === e.kind &&
                        "query" !== e.operation
                        ? (0, O.pi)((0, O.pi)({}, e), { operation: "query" })
                        : e;
                    }),
                  }),
                };
                t.set(e, r);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return (0, O.pi)(
                (0, O.pi)({}, this.getDocumentInfo(e).defaultVars),
                t
              );
            }),
            (e.prototype.watchQuery = function (e) {
              var t = this.transform(e.query);
              void 0 ===
                (e = (0, O.pi)((0, O.pi)({}, e), {
                  variables: this.getVariables(t, e.variables),
                })).notifyOnNetworkStatusChange &&
                (e.notifyOnNetworkStatusChange = !1);
              var r = new r_(this),
                n = new tj({ queryManager: this, queryInfo: r, options: e });
              return (
                (n.lastQuery = t),
                this.queries.set(n.queryId, r),
                r.init({
                  document: t,
                  observableQuery: n,
                  variables: n.variables,
                }),
                n
              );
            }),
            (e.prototype.query = function (e, t) {
              var r = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                (0, E.kG)(e.query, 28),
                (0, E.kG)("Document" === e.query.kind, 29),
                (0, E.kG)(!e.returnPartialData, 30),
                (0, E.kG)(!e.pollInterval, 31),
                this.fetchQuery(
                  t,
                  (0, O.pi)((0, O.pi)({}, e), {
                    query: this.transform(e.query),
                  })
                ).finally(function () {
                  return r.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches((0, E._K)(32)),
                this.queries.forEach(function (e) {
                  e.observableQuery
                    ? (e.networkStatus = tO.Ie.loading)
                    : e.stop();
                }),
                this.mutationStore &&
                  (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = "active");
              var r = new Map(),
                n = new Map(),
                i = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    "string" == typeof e
                      ? n.set(e, !1)
                      : (0, Y.s)(e) &&
                        "Document" === e.kind &&
                        Array.isArray(e.definitions)
                      ? n.set(t.transform(e), !1)
                      : (0, Y.s)(e) && e.query && i.add(e);
                  }),
                this.queries.forEach(function (t, i) {
                  var o = t.observableQuery,
                    a = t.document;
                  if (o) {
                    if ("all" === e) {
                      r.set(i, o);
                      return;
                    }
                    var s = o.queryName;
                    if (
                      "standby" === o.options.fetchPolicy ||
                      ("active" === e && !o.hasObservers())
                    )
                      return;
                    ("active" === e || (s && n.has(s)) || (a && n.has(a))) &&
                      (r.set(i, o), s && n.set(s, !0), a && n.set(a, !0));
                  }
                }),
                i.size &&
                  i.forEach(function (e) {
                    var n = (0, tb.X)("legacyOneTimeQuery"),
                      i = t
                        .getQuery(n)
                        .init({ document: e.query, variables: e.variables }),
                      o = new tj({
                        queryManager: t,
                        queryInfo: i,
                        options: (0, O.pi)((0, O.pi)({}, e), {
                          fetchPolicy: "network-only",
                        }),
                      });
                    (0, E.kG)(o.queryId === n),
                      i.setObservableQuery(o),
                      r.set(n, o);
                  }),
                !1 !== globalThis.__DEV__ &&
                  n.size &&
                  n.forEach(function (e, t) {
                    e ||
                      !1 === globalThis.__DEV__ ||
                      E.kG.warn("string" == typeof t ? 33 : 34, t);
                  }),
                r
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var r = [];
              return (
                this.getObservableQueries(e ? "all" : "active").forEach(
                  function (n, i) {
                    var o = n.options.fetchPolicy;
                    n.resetLastResults(),
                      (e || ("standby" !== o && "cache-only" !== o)) &&
                        r.push(n.refetch()),
                      t.getQuery(i).setDiff(null);
                  }
                ),
                this.broadcastQueries(),
                Promise.all(r)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                r = e.query,
                n = e.fetchPolicy,
                i = e.errorPolicy,
                o = void 0 === i ? "none" : i,
                a = e.variables,
                s = e.context,
                u = void 0 === s ? {} : s;
              (r = this.transform(r)), (a = this.getVariables(r, a));
              var c = function (e) {
                return t.getObservableFromLink(r, u, e).map(function (i) {
                  "no-cache" !== n &&
                    (rO(i, o) &&
                      t.cache.write({
                        query: r,
                        result: i.data,
                        dataId: "ROOT_SUBSCRIPTION",
                        variables: e,
                      }),
                    t.broadcastQueries());
                  var a = ty(i),
                    s = (0, eR.ls)(i);
                  if (a || s) {
                    var u = {};
                    if (
                      (a && (u.graphQLErrors = i.errors),
                      s && (u.protocolErrors = i.extensions[eR.YG]),
                      "none" === o || s)
                    )
                      throw new eR.cA(u);
                  }
                  return "ignore" === o && delete i.errors, i;
                });
              };
              if (this.getDocumentInfo(r).hasClientExports) {
                var l = this.localState.addExportedVariables(r, a, u).then(c);
                return new $(function (e) {
                  var t = null;
                  return (
                    l.then(function (r) {
                      return (t = r.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return c(a);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e),
                this.queries.has(e) &&
                  (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, r, n) {
              var i,
                o,
                a = this;
              void 0 === n &&
                (n =
                  null !== (i = null == t ? void 0 : t.queryDeduplication) &&
                  void 0 !== i
                    ? i
                    : this.queryDeduplication);
              var s = this.getDocumentInfo(e),
                u = s.serverQuery,
                c = s.clientQuery;
              if (u) {
                var l = this.inFlightLinkObservables,
                  f = this.link,
                  d = {
                    query: u,
                    variables: r,
                    operationName: ef(u) || void 0,
                    context: this.prepareContext(
                      (0, O.pi)((0, O.pi)({}, t), { forceFetch: !n })
                    ),
                  };
                if (((t = d.context), n)) {
                  var p = e3(u),
                    h = l.get(p) || new Map();
                  l.set(p, h);
                  var v = td(r);
                  if (!(o = h.get(v))) {
                    var m = new t_([ew(f, d)]);
                    h.set(v, (o = m)),
                      m.beforeNext(function () {
                        h.delete(v) && h.size < 1 && l.delete(p);
                      });
                  }
                } else o = new t_([ew(f, d)]);
              } else
                (o = new t_([$.of({ data: {} })])),
                  (t = this.prepareContext(t));
              return (
                c &&
                  (o = tm(o, function (e) {
                    return a.localState.runResolvers({
                      document: c,
                      remoteResult: e,
                      context: t,
                      variables: r,
                    });
                  })),
                o
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, r) {
              var n = (e.lastRequestId = this.generateRequestId()),
                i = this.cache.transformForLink(r.query);
              return tm(
                this.getObservableFromLink(i, r.context, r.variables),
                function (o) {
                  var a = tg(o),
                    s = a.length > 0;
                  if (n >= e.lastRequestId) {
                    if (s && "none" === r.errorPolicy)
                      throw e.markError(new eR.cA({ graphQLErrors: a }));
                    e.markResult(o, i, r, t), e.markReady();
                  }
                  var u = {
                    data: o.data,
                    loading: !1,
                    networkStatus: tO.Ie.ready,
                  };
                  return (
                    s &&
                      "ignore" !== r.errorPolicy &&
                      ((u.errors = a), (u.networkStatus = tO.Ie.error)),
                    u
                  );
                },
                function (t) {
                  var r = (0, eR.MS)(t) ? t : new eR.cA({ networkError: t });
                  throw (n >= e.lastRequestId && e.markError(r), r);
                }
              );
            }),
            (e.prototype.fetchConcastWithInfo = function (e, t, r, n) {
              var i,
                o,
                a = this;
              void 0 === r && (r = tO.Ie.loading),
                void 0 === n && (n = t.query);
              var s = this.getVariables(n, t.variables),
                u = this.getQuery(e),
                c = this.defaultOptions.watchQuery,
                l = t.fetchPolicy,
                f = void 0 === l ? (c && c.fetchPolicy) || "cache-first" : l,
                d = t.errorPolicy,
                p = void 0 === d ? (c && c.errorPolicy) || "none" : d,
                h = t.returnPartialData,
                v = t.notifyOnNetworkStatusChange,
                m = t.context,
                y = Object.assign({}, t, {
                  query: n,
                  variables: s,
                  fetchPolicy: f,
                  errorPolicy: p,
                  returnPartialData: void 0 !== h && h,
                  notifyOnNetworkStatusChange: void 0 !== v && v,
                  context: void 0 === m ? {} : m,
                }),
                g = function (e) {
                  y.variables = e;
                  var n = a.fetchQueryByPolicy(u, y, r);
                  return (
                    "standby" !== y.fetchPolicy &&
                      n.sources.length > 0 &&
                      u.observableQuery &&
                      u.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    n
                  );
                },
                b = function () {
                  return a.fetchCancelFns.delete(e);
                };
              if (
                (this.fetchCancelFns.set(e, function (e) {
                  b(),
                    setTimeout(function () {
                      return i.cancel(e);
                    });
                }),
                this.getDocumentInfo(y.query).hasClientExports)
              )
                (i = new t_(
                  this.localState
                    .addExportedVariables(y.query, y.variables, y.context)
                    .then(g)
                    .then(function (e) {
                      return e.sources;
                    })
                )),
                  (o = !0);
              else {
                var w = g(y.variables);
                (o = w.fromLink), (i = new t_(w.sources));
              }
              return i.promise.then(b, b), { concast: i, fromLink: o };
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                r = e.updateCache,
                n = e.include,
                i = e.optimistic,
                o = void 0 !== i && i,
                a = e.removeOptimistic,
                s =
                  void 0 === a ? (o ? (0, tb.X)("refetchQueries") : void 0) : a,
                u = e.onQueryUpdated,
                c = new Map();
              n &&
                this.getObservableQueries(n).forEach(function (e, r) {
                  c.set(r, { oq: e, lastDiff: t.getQuery(r).getDiff() });
                });
              var l = new Map();
              return (
                r &&
                  this.cache.batch({
                    update: r,
                    optimistic: (o && s) || !1,
                    removeOptimistic: s,
                    onWatchUpdated: function (e, t, r) {
                      var n =
                        e.watcher instanceof r_ && e.watcher.observableQuery;
                      if (n) {
                        if (u) {
                          c.delete(n.queryId);
                          var i = u(n, t, r);
                          return (
                            !0 === i && (i = n.refetch()),
                            !1 !== i && l.set(n, i),
                            i
                          );
                        }
                        null !== u &&
                          c.set(n.queryId, { oq: n, lastDiff: r, diff: t });
                      }
                    },
                  }),
                c.size &&
                  c.forEach(function (e, r) {
                    var n,
                      i = e.oq,
                      o = e.lastDiff,
                      a = e.diff;
                    if (u) {
                      if (!a) {
                        var s = i.queryInfo;
                        s.reset(), (a = s.getDiff());
                      }
                      n = u(i, a, o);
                    }
                    (u && !0 !== n) || (n = i.refetch()),
                      !1 !== n && l.set(i, n),
                      r.indexOf("legacyOneTimeQuery") >= 0 &&
                        t.stopQueryNoBroadcast(r);
                  }),
                s && this.cache.removeOptimistic(s),
                l
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, r) {
              var n = this,
                i = t.query,
                o = t.variables,
                a = t.fetchPolicy,
                s = t.refetchWritePolicy,
                u = t.errorPolicy,
                c = t.returnPartialData,
                l = t.context,
                f = t.notifyOnNetworkStatusChange,
                d = e.networkStatus;
              e.init({ document: i, variables: o, networkStatus: r });
              var p = function () {
                  return e.getDiff();
                },
                h = function (t, r) {
                  void 0 === r && (r = e.networkStatus || tO.Ie.loading);
                  var a = t.result;
                  !1 === globalThis.__DEV__ ||
                    c ||
                    (0, to.D)(a, {}) ||
                    tF(t.missing);
                  var s = function (e) {
                    return $.of(
                      (0, O.pi)(
                        { data: e, loading: (0, tO.Oj)(r), networkStatus: r },
                        t.complete ? null : { partial: !0 }
                      )
                    );
                  };
                  return a && n.getDocumentInfo(i).hasForcedResolvers
                    ? n.localState
                        .runResolvers({
                          document: i,
                          remoteResult: { data: a },
                          context: l,
                          variables: o,
                          onlyRunForcedResolvers: !0,
                        })
                        .then(function (e) {
                          return s(e.data || void 0);
                        })
                    : "none" === u &&
                      r === tO.Ie.refetch &&
                      Array.isArray(t.missing)
                    ? s(void 0)
                    : s(a);
                },
                v =
                  "no-cache" === a
                    ? 0
                    : r === tO.Ie.refetch && "merge" !== s
                    ? 1
                    : 2,
                m = function () {
                  return n.getResultsFromLink(e, v, {
                    query: i,
                    variables: o,
                    context: l,
                    fetchPolicy: a,
                    errorPolicy: u,
                  });
                },
                y = f && "number" == typeof d && d !== r && (0, tO.Oj)(r);
              switch (a) {
                default:
                case "cache-first":
                  var g = p();
                  if (g.complete)
                    return { fromLink: !1, sources: [h(g, e.markReady())] };
                  if (c || y) return { fromLink: !0, sources: [h(g), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "cache-and-network":
                  var g = p();
                  if (g.complete || c || y)
                    return { fromLink: !0, sources: [h(g), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "cache-only":
                  return { fromLink: !1, sources: [h(p(), e.markReady())] };
                case "network-only":
                  if (y) return { fromLink: !0, sources: [h(p()), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "no-cache":
                  if (y)
                    return { fromLink: !0, sources: [h(e.getDiff()), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "standby":
                  return { fromLink: !1, sources: [] };
              }
            }),
            (e.prototype.getQuery = function (e) {
              return (
                e &&
                  !this.queries.has(e) &&
                  this.queries.set(e, new r_(this, e)),
                this.queries.get(e)
              );
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return (0, O.pi)((0, O.pi)({}, t), {
                clientAwareness: this.clientAwareness,
              });
            }),
            e
          );
        })(),
        rT = r(8769),
        rI = !1,
        rC = (function () {
          function e(e) {
            var t = this;
            if (
              ((this.resetStoreCallbacks = []),
              (this.clearStoreCallbacks = []),
              !e.cache)
            )
              throw (0, E._K)(15);
            var r = e.uri,
              n = e.credentials,
              i = e.headers,
              o = e.cache,
              a = e.documentTransform,
              s = e.ssrMode,
              u = void 0 !== s && s,
              c = e.ssrForceFetchDelay,
              l = void 0 === c ? 0 : c,
              f = e.connectToDevTools,
              d =
                void 0 === f
                  ? "object" == typeof window &&
                    !window.__APOLLO_CLIENT__ &&
                    !1 !== globalThis.__DEV__
                  : f,
              p = e.queryDeduplication,
              h = void 0 === p || p,
              v = e.defaultOptions,
              m = e.assumeImmutableResults,
              y = void 0 === m ? o.assumeImmutableResults : m,
              g = e.resolvers,
              b = e.typeDefs,
              w = e.fragmentMatcher,
              k = e.name,
              S = e.version,
              _ = e.link;
            _ ||
              (_ = r
                ? new ti({ uri: r, credentials: n, headers: i })
                : eb.empty()),
              (this.link = _),
              (this.cache = o),
              (this.disableNetworkFetches = u || l > 0),
              (this.queryDeduplication = h),
              (this.defaultOptions = v || Object.create(null)),
              (this.typeDefs = b),
              l &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, l),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries =
                this.reFetchObservableQueries.bind(this)),
              (this.version = ek.i),
              (this.localState = new rb({
                cache: o,
                client: this,
                resolvers: g,
                fragmentMatcher: w,
              })),
              (this.queryManager = new rx({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                documentTransform: a,
                queryDeduplication: h,
                ssrMode: u,
                clientAwareness: { name: k, version: S },
                localState: this.localState,
                assumeImmutableResults: y,
                onBroadcast: d
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {},
                          },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              })),
              d && this.connectToDevTools();
          }
          return (
            (e.prototype.connectToDevTools = function () {
              if ("object" == typeof window) {
                var e = window,
                  t = Symbol.for("apollo.devtools");
                (e[t] = e[t] || []).push(this), (e.__APOLLO_CLIENT__ = this);
              }
              rI ||
                !1 === globalThis.__DEV__ ||
                ((rI = !0),
                setTimeout(function () {
                  if (
                    "undefined" != typeof window &&
                    window.document &&
                    window.top === window.self &&
                    !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
                  ) {
                    var e = window.navigator,
                      t = e && e.userAgent,
                      r = void 0;
                    "string" == typeof t &&
                      (t.indexOf("Chrome/") > -1
                        ? (r =
                            "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                        : t.indexOf("Firefox/") > -1 &&
                          (r =
                            "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                      r &&
                        !1 !== globalThis.__DEV__ &&
                        E.kG.log(
                          "Download the Apollo DevTools for a better development experience: %s",
                          r
                        );
                  }
                }, 1e4));
            }),
            Object.defineProperty(e.prototype, "documentTransform", {
              get: function () {
                return this.queryManager.documentTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = (0, rT.J)(this.defaultOptions.watchQuery, e)),
                this.disableNetworkFetches &&
                  ("network-only" === e.fetchPolicy ||
                    "cache-and-network" === e.fetchPolicy) &&
                  (e = (0, O.pi)((0, O.pi)({}, e), {
                    fetchPolicy: "cache-first",
                  })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = (0, rT.J)(this.defaultOptions.query, e)),
                (0, E.kG)("cache-and-network" !== e.fetchPolicy, 16),
                this.disableNetworkFetches &&
                  "network-only" === e.fetchPolicy &&
                  (e = (0, O.pi)((0, O.pi)({}, e), {
                    fetchPolicy: "cache-first",
                  })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = (0, rT.J)(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              var t = this.cache.writeQuery(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = this.cache.writeFragment(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return ew(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                r = [],
                n = [];
              t.forEach(function (e, t) {
                r.push(t), n.push(e);
              });
              var i = Promise.all(n);
              return (
                (i.queries = r),
                (i.results = n),
                i.catch(function (e) {
                  !1 !== globalThis.__DEV__ && E.kG.debug(17, e);
                }),
                i
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return (
                void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
              );
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            e
          );
        })(),
        rA = (function () {
          function e() {
            (this.assumeImmutableResults = !1), (this.getFragmentDoc = rp(J));
          }
          return (
            (e.prototype.batch = function (e) {
              var t,
                r = this,
                n =
                  "string" == typeof e.optimistic
                    ? e.optimistic
                    : !1 === e.optimistic
                    ? null
                    : void 0;
              return (
                this.performTransaction(function () {
                  return (t = e.update(r));
                }, n),
                t
              );
            }),
            (e.prototype.recordOptimisticTransaction = function (e, t) {
              this.performTransaction(e, t);
            }),
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.identify = function (e) {}),
            (e.prototype.gc = function () {
              return [];
            }),
            (e.prototype.modify = function (e) {
              return !1;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  (0, O.pi)((0, O.pi)({}, e), {
                    rootId: e.id || "ROOT_QUERY",
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  (0, O.pi)((0, O.pi)({}, e), {
                    query: this.getFragmentDoc(e.fragment, e.fragmentName),
                    rootId: e.id,
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.writeQuery = function (e) {
              var t = e.id,
                r = e.data,
                n = (0, O._T)(e, ["id", "data"]);
              return this.write(
                Object.assign(n, { dataId: t || "ROOT_QUERY", result: r })
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = e.id,
                r = e.data,
                n = e.fragment,
                i = e.fragmentName,
                o = (0, O._T)(e, ["id", "data", "fragment", "fragmentName"]);
              return this.write(
                Object.assign(o, {
                  query: this.getFragmentDoc(n, i),
                  dataId: t,
                  result: r,
                })
              );
            }),
            (e.prototype.updateQuery = function (e, t) {
              return this.batch({
                update: function (r) {
                  var n = r.readQuery(e),
                    i = t(n);
                  return null == i
                    ? n
                    : (r.writeQuery((0, O.pi)((0, O.pi)({}, e), { data: i })),
                      i);
                },
              });
            }),
            (e.prototype.updateFragment = function (e, t) {
              return this.batch({
                update: function (r) {
                  var n = r.readFragment(e),
                    i = t(n);
                  return null == i
                    ? n
                    : (r.writeFragment(
                        (0, O.pi)((0, O.pi)({}, e), { data: i })
                      ),
                      i);
                },
              });
            }),
            e
          );
        })(),
        rD = (function (e) {
          function t(r, n, i, o) {
            var a,
              s = e.call(this, r) || this;
            if (
              ((s.message = r),
              (s.path = n),
              (s.query = i),
              (s.variables = o),
              Array.isArray(s.path))
            ) {
              s.missing = s.message;
              for (var u = s.path.length - 1; u >= 0; --u)
                s.missing = (((a = {})[s.path[u]] = s.missing), a);
            } else s.missing = s.path;
            return (s.__proto__ = t.prototype), s;
          }
          return (0, O.ZT)(t, e), t;
        })(Error),
        rj = r(3180),
        rP = Object.prototype.hasOwnProperty;
      function rR(e) {
        return null == e;
      }
      function rF(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if (
          "string" == typeof r &&
          (t &&
            (t.keyObject = rR(n) ? (rR(i) ? void 0 : { _id: i }) : { id: n }),
          rR(n) && !rR(i) && (n = i),
          !rR(n))
        )
          return ""
            .concat(r, ":")
            .concat(
              "number" == typeof n || "string" == typeof n
                ? n
                : JSON.stringify(n)
            );
      }
      var rM = {
        dataIdFromObject: rF,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1,
      };
      function rN(e) {
        var t = e.canonizeResults;
        return void 0 === t ? rM.canonizeResults : t;
      }
      var rq = /^[_a-z][_0-9a-z]*/i;
      function rL(e) {
        var t = e.match(rq);
        return t ? t[0] : e;
      }
      function rV(e) {
        return (0, Y.s)(e) && !X(e) && !(0, eF.k)(e);
      }
      function rz(e, t) {
        var r = K(ed(e));
        return {
          fragmentMap: r,
          lookupFragment: function (e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null;
          },
        };
      }
      var rQ = Object.create(null),
        rB = function () {
          return rQ;
        },
        rG = Object.create(null),
        rU = (function () {
          function e(e, t) {
            var r = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return (0, rj.J)(X(e) ? r.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return X(e) ? r.has(e.__ref) : "object" == typeof e;
              }),
              (this.toReference = function (e, t) {
                if ("string" == typeof e) return Z(e);
                if (X(e)) return e;
                var n = r.policies.identify(e)[0];
                if (n) {
                  var i = Z(n);
                  return t && r.merge(n, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return (0, O.pi)({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), rP.call(this.data, e))) {
                var r = this.data[e];
                if (r && rP.call(r, t)) return r[t];
              }
              return "__typename" === t &&
                rP.call(this.policies.rootTypenamesById, e)
                ? this.policies.rootTypenamesById[e]
                : this instanceof rY
                ? this.parent.get(e, t)
                : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (t && this.group.depend(e, "__exists"),
              rP.call(this.data, e))
                ? this.data[e]
                : this instanceof rY
                ? this.parent.lookup(e, t)
                : this.policies.rootTypenamesById[e]
                ? Object.create(null)
                : void 0;
            }),
            (e.prototype.merge = function (e, t) {
              var r,
                n = this;
              X(e) && (e = e.__ref), X(t) && (t = t.__ref);
              var i = "string" == typeof e ? this.lookup((r = e)) : e,
                o = "string" == typeof t ? this.lookup((r = t)) : t;
              if (o) {
                (0, E.kG)("string" == typeof r, 1);
                var a = new eV(rK).merge(i, o);
                if (
                  ((this.data[r] = a),
                  a !== i && (delete this.refs[r], this.group.caching))
                ) {
                  var s = Object.create(null);
                  i || (s.__exists = 1),
                    Object.keys(o).forEach(function (e) {
                      if (!i || i[e] !== a[e]) {
                        s[e] = 1;
                        var t = rL(e);
                        t === e ||
                          n.policies.hasKeyArgs(a.__typename, t) ||
                          (s[t] = 1),
                          void 0 !== a[e] || n instanceof rY || delete a[e];
                      }
                    }),
                    s.__typename &&
                      !(i && i.__typename) &&
                      this.policies.rootTypenamesById[r] === a.__typename &&
                      delete s.__typename,
                    Object.keys(s).forEach(function (e) {
                      return n.group.dirty(r, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var r = this,
                n = this.lookup(e);
              if (n) {
                var i = Object.create(null),
                  o = !1,
                  a = !0,
                  s = {
                    DELETE: rQ,
                    INVALIDATE: rG,
                    isReference: X,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, n) {
                      return r.policies.readField(
                        "string" == typeof t
                          ? { fieldName: t, from: n || Z(e) }
                          : t,
                        { store: r }
                      );
                    },
                  };
                if (
                  (Object.keys(n).forEach(function (u) {
                    var c = rL(u),
                      l = n[u];
                    if (void 0 !== l) {
                      var f = "function" == typeof t ? t : t[u] || t[c];
                      if (f) {
                        var d =
                          f === rB
                            ? rQ
                            : f(
                                (0, rj.J)(l),
                                (0, O.pi)((0, O.pi)({}, s), {
                                  fieldName: c,
                                  storeFieldName: u,
                                  storage: r.getStorage(e, u),
                                })
                              );
                        if (d === rG) r.group.dirty(e, u);
                        else if (
                          (d === rQ && (d = void 0),
                          d !== l &&
                            ((i[u] = d),
                            (o = !0),
                            (l = d),
                            !1 !== globalThis.__DEV__))
                        ) {
                          var p = function (e) {
                            if (void 0 === r.lookup(e.__ref))
                              return (
                                !1 !== globalThis.__DEV__ && E.kG.warn(2, e), !0
                              );
                          };
                          if (X(d)) p(d);
                          else if (Array.isArray(d))
                            for (
                              var h = !1, v = void 0, m = 0, y = d;
                              m < y.length;
                              m++
                            ) {
                              var g = y[m];
                              if (X(g)) {
                                if (((h = !0), p(g))) break;
                              } else
                                "object" == typeof g &&
                                  g &&
                                  r.policies.identify(g)[0] &&
                                  (v = g);
                              if (h && void 0 !== v) {
                                !1 !== globalThis.__DEV__ && E.kG.warn(3, v);
                                break;
                              }
                            }
                        }
                      }
                      void 0 !== l && (a = !1);
                    }
                  }),
                  o)
                )
                  return (
                    this.merge(e, i),
                    a &&
                      (this instanceof rY
                        ? (this.data[e] = void 0)
                        : delete this.data[e],
                      this.group.dirty(e, "__exists")),
                    !0
                  );
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, r) {
              var n,
                i = this.lookup(e);
              if (i) {
                var o = this.getFieldValue(i, "__typename"),
                  a =
                    t && r
                      ? this.policies.getStoreFieldName({
                          typename: o,
                          fieldName: t,
                          args: r,
                        })
                      : t;
                return this.modify(e, a ? (((n = {})[a] = rB), n) : rB);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var r = !1;
              return (
                e.id &&
                  (rP.call(this.data, e.id) &&
                    (r = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof rY &&
                    this !== t &&
                    (r = this.parent.evict(e, t) || r),
                  (e.fieldName || r) &&
                    this.group.dirty(e.id, e.fieldName || "__exists")),
                r
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                r = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  rP.call(e.policies.rootTypenamesById, t) || r.push(t);
                }),
                r.length && (t.__META = { extraRootIds: r.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (r) {
                  (e && rP.call(e, r)) || t.delete(r);
                }),
                e)
              ) {
                var r = e.__META,
                  n = (0, O._T)(e, ["__META"]);
                Object.keys(n).forEach(function (e) {
                  t.merge(e, n[e]);
                }),
                  r && r.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof rY
                  ? this.parent.getRootIdSet(e)
                  : Object.keys(this.policies.rootTypenamesById).forEach(
                      e.add,
                      e
                    ),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                r = this.toObject();
              t.forEach(function (n) {
                rP.call(r, n) &&
                  (Object.keys(e.findChildRefIds(n)).forEach(t.add, t),
                  delete r[n]);
              });
              var n = Object.keys(r);
              if (n.length) {
                for (var i = this; i instanceof rY; ) i = i.parent;
                n.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return n;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!rP.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  r = this.data[e];
                if (!r) return t;
                var n = new Set([r]);
                n.forEach(function (e) {
                  X(e) && (t[e.__ref] = !0),
                    (0, Y.s)(e) &&
                      Object.keys(e).forEach(function (t) {
                        var r = e[t];
                        (0, Y.s)(r) && n.add(r);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        rW = (function () {
          function e(e, t) {
            void 0 === t && (t = null),
              (this.caching = e),
              (this.parent = t),
              (this.d = null),
              this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? rl() : null),
                (this.keyMaker = new tl(eD.mr));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d(t + "#" + e);
                var r = rL(t);
                r !== t && this.d(r + "#" + e),
                  this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d &&
                this.d.dirty(
                  t + "#" + e,
                  "__exists" === t ? "forget" : "setDirty"
                );
            }),
            e
          );
        })();
      function r$(e, t) {
        rH(e) && e.group.depend(t, "__exists");
      }
      (o = (function (e) {
        function t(t) {
          var r = t.policies,
            n = t.resultCaching,
            i = t.seed,
            o = e.call(this, r, new rW(void 0 === n || n)) || this;
          return (
            (o.stump = new rJ(o)),
            (o.storageTrie = new tl(eD.mr)),
            i && o.replace(i),
            o
          );
        }
        return (
          (0, O.ZT)(t, e),
          (t.prototype.addLayer = function (e, t) {
            return this.stump.addLayer(e, t);
          }),
          (t.prototype.removeLayer = function () {
            return this;
          }),
          (t.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
          }),
          t
        );
      })((i = rU || (rU = {})))),
        (i.Root = o);
      var rY = (function (e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return (
              (o.id = t), (o.parent = r), (o.replay = n), (o.group = i), n(o), o
            );
          }
          return (
            (0, O.ZT)(t, e),
            (t.prototype.addLayer = function (e, r) {
              return new t(e, this, r, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                r = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var n = t.data[e],
                        i = r.lookup(e);
                      i
                        ? n
                          ? n !== i &&
                            Object.keys(n).forEach(function (r) {
                              (0, to.D)(n[r], i[r]) || t.group.dirty(e, r);
                            })
                          : (t.group.dirty(e, "__exists"),
                            Object.keys(i).forEach(function (r) {
                              t.group.dirty(e, r);
                            }))
                        : t.delete(e);
                    }),
                  r)
                : r === this.parent
                ? this
                : r.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return (0, O.pi)(
                (0, O.pi)({}, this.parent.toObject()),
                this.data
              );
            }),
            (t.prototype.findChildRefIds = function (t) {
              var r = this.parent.findChildRefIds(t);
              return rP.call(this.data, t)
                ? (0, O.pi)(
                    (0, O.pi)({}, r),
                    e.prototype.findChildRefIds.call(this, t)
                  )
                : r;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(rU),
        rJ = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                "EntityStore.Stump",
                t,
                function () {},
                new rW(t.group.caching, t.group)
              ) || this
            );
          }
          return (
            (0, O.ZT)(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function (e, t) {
              return this.parent.merge(e, t);
            }),
            t
          );
        })(rY);
      function rK(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, to.D)(n, i) ? n : i;
      }
      function rH(e) {
        return !!(e instanceof rU && e.group.caching);
      }
      function rZ(e) {
        return [
          e.selectionSet,
          e.objectOrReference,
          e.context,
          e.context.canonizeResults,
        ];
      }
      var rX = (function () {
          function e(e) {
            var t = this;
            (this.knownResults = new (eD.mr ? WeakMap : Map)()),
              (this.config = (0, tE.o)(e, {
                addTypename: !1 !== e.addTypename,
                canonizeResults: rN(e),
              })),
              (this.canon = e.canon || new tf()),
              (this.executeSelectionSet = rp(
                function (e) {
                  var r,
                    n = e.context.canonizeResults,
                    i = rZ(e);
                  i[3] = !n;
                  var o = (r = t.executeSelectionSet).peek.apply(r, i);
                  return o
                    ? n
                      ? (0, O.pi)((0, O.pi)({}, o), {
                          result: t.canon.admit(o.result),
                        })
                      : o
                    : (r$(e.context.store, e.enclosingRef.__ref),
                      t.execSelectionSetImpl(e));
                },
                {
                  max: this.config.resultCacheMaxSize,
                  keyArgs: rZ,
                  makeCacheKey: function (e, t, r, n) {
                    if (rH(r.store))
                      return r.store.makeCacheKey(
                        e,
                        X(t) ? t.__ref : t,
                        r.varString,
                        n
                      );
                  },
                }
              )),
              (this.executeSubSelectedArray = rp(
                function (e) {
                  return (
                    r$(e.context.store, e.enclosingRef.__ref),
                    t.execSubSelectedArrayImpl(e)
                  );
                },
                {
                  max: this.config.resultCacheMaxSize,
                  makeCacheKey: function (e) {
                    var t = e.field,
                      r = e.array,
                      n = e.context;
                    if (rH(n.store))
                      return n.store.makeCacheKey(t, r, n.varString);
                  },
                }
              ));
          }
          return (
            (e.prototype.resetCanon = function () {
              this.canon = new tf();
            }),
            (e.prototype.diffQueryAgainstStore = function (e) {
              var t,
                r = e.store,
                n = e.query,
                i = e.rootId,
                o = e.variables,
                a = e.returnPartialData,
                s = e.canonizeResults,
                u = void 0 === s ? this.config.canonizeResults : s,
                c = this.config.cache.policies;
              o = (0, O.pi)((0, O.pi)({}, ev(ep(n))), o);
              var l = Z(void 0 === i ? "ROOT_QUERY" : i),
                f = this.executeSelectionSet({
                  selectionSet: eh(n).selectionSet,
                  objectOrReference: l,
                  enclosingRef: l,
                  context: (0, O.pi)(
                    {
                      store: r,
                      query: n,
                      policies: c,
                      variables: o,
                      varString: td(o),
                      canonizeResults: u,
                    },
                    rz(n, this.config.fragments)
                  ),
                });
              if (
                f.missing &&
                ((t = [
                  new rD(
                    (function (e) {
                      try {
                        JSON.stringify(e, function (e, t) {
                          if ("string" == typeof t) throw t;
                          return t;
                        });
                      } catch (e) {
                        return e;
                      }
                    })(f.missing),
                    f.missing,
                    n,
                    o
                  ),
                ]),
                !(void 0 === a || a))
              )
                throw t[0];
              return { result: f.result, complete: !t, missing: t };
            }),
            (e.prototype.isFresh = function (e, t, r, n) {
              if (rH(n.store) && this.knownResults.get(e) === r) {
                var i = this.executeSelectionSet.peek(
                  r,
                  t,
                  n,
                  this.canon.isKnown(e)
                );
                if (i && e === i.result) return !0;
              }
              return !1;
            }),
            (e.prototype.execSelectionSetImpl = function (e) {
              var t,
                r = this,
                n = e.selectionSet,
                i = e.objectOrReference,
                o = e.enclosingRef,
                a = e.context;
              if (
                X(i) &&
                !a.policies.rootTypenamesById[i.__ref] &&
                !a.store.has(i.__ref)
              )
                return {
                  result: this.canon.empty,
                  missing: "Dangling reference to missing ".concat(
                    i.__ref,
                    " object"
                  ),
                };
              var s = a.variables,
                u = a.policies,
                c = a.store.getFieldValue(i, "__typename"),
                l = [],
                f = new eV();
              function d(e, r) {
                var n;
                return (
                  e.missing && (t = f.merge(t, (((n = {})[r] = e.missing), n))),
                  e.result
                );
              }
              this.config.addTypename &&
                "string" == typeof c &&
                !u.rootIdsByTypename[c] &&
                l.push({ __typename: c });
              var p = new Set(n.selections);
              p.forEach(function (e) {
                var n, h;
                if (eI(e, s)) {
                  if (eu(e)) {
                    var v = u.readField(
                        {
                          fieldName: e.name.value,
                          field: e,
                          variables: a.variables,
                          from: i,
                        },
                        a
                      ),
                      m = ea(e);
                    void 0 === v
                      ? te.added(e) ||
                        (t = f.merge(
                          t,
                          (((n = {})[m] = "Can't find field '"
                            .concat(e.name.value, "' on ")
                            .concat(
                              X(i)
                                ? i.__ref + " object"
                                : "object " + JSON.stringify(i, null, 2)
                            )),
                          n)
                        ))
                      : (0, eF.k)(v)
                      ? (v = d(
                          r.executeSubSelectedArray({
                            field: e,
                            array: v,
                            enclosingRef: o,
                            context: a,
                          }),
                          m
                        ))
                      : e.selectionSet
                      ? null != v &&
                        (v = d(
                          r.executeSelectionSet({
                            selectionSet: e.selectionSet,
                            objectOrReference: v,
                            enclosingRef: X(v) ? v : o,
                            context: a,
                          }),
                          m
                        ))
                      : a.canonizeResults && (v = r.canon.pass(v)),
                      void 0 !== v && l.push((((h = {})[m] = v), h));
                  } else {
                    var y = H(e, a.lookupFragment);
                    if (!y && e.kind === eE.h.FRAGMENT_SPREAD)
                      throw (0, E._K)(9, e.name.value);
                    y &&
                      u.fragmentMatches(y, c) &&
                      y.selectionSet.selections.forEach(p.add, p);
                  }
                }
              });
              var h = { result: eq(l), missing: t },
                v = a.canonizeResults ? this.canon.admit(h) : (0, rj.J)(h);
              return v.result && this.knownResults.set(v.result, n), v;
            }),
            (e.prototype.execSubSelectedArrayImpl = function (e) {
              var t,
                r = this,
                n = e.field,
                i = e.array,
                o = e.enclosingRef,
                a = e.context,
                s = new eV();
              function u(e, r) {
                var n;
                return (
                  e.missing && (t = s.merge(t, (((n = {})[r] = e.missing), n))),
                  e.result
                );
              }
              return (
                n.selectionSet && (i = i.filter(a.store.canRead)),
                (i = i.map(function (e, t) {
                  return null === e
                    ? null
                    : (0, eF.k)(e)
                    ? u(
                        r.executeSubSelectedArray({
                          field: n,
                          array: e,
                          enclosingRef: o,
                          context: a,
                        }),
                        t
                      )
                    : n.selectionSet
                    ? u(
                        r.executeSelectionSet({
                          selectionSet: n.selectionSet,
                          objectOrReference: e,
                          enclosingRef: X(e) ? e : o,
                          context: a,
                        }),
                        t
                      )
                    : (!1 !== globalThis.__DEV__ &&
                        (function (e, t, r) {
                          if (!t.selectionSet) {
                            var n = new Set([r]);
                            n.forEach(function (r) {
                              (0, Y.s)(r) &&
                                ((0, E.kG)(
                                  !X(r),
                                  10,
                                  X(r)
                                    ? e.get(r.__ref, "__typename")
                                    : r && r.__typename,
                                  t.name.value
                                ),
                                Object.values(r).forEach(n.add, n));
                            });
                          }
                        })(a.store, n, e),
                      e);
                })),
                {
                  result: a.canonizeResults ? this.canon.admit(i) : i,
                  missing: t,
                }
              );
            }),
            e
          );
        })(),
        r0 = r(3118),
        r1 = Object.create(null);
      function r2(e) {
        var t = JSON.stringify(e);
        return r1[t] || (r1[t] = Object.create(null));
      }
      function r3(e) {
        var t = r2(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, r) {
            var n = function (e, t) {
                return r.readField(t, e);
              },
              i = (r.keyObject = r6(e, function (e) {
                var i = r4(r.storeObject, e, n);
                return (
                  void 0 === i &&
                    t !== r.storeObject &&
                    rP.call(t, e[0]) &&
                    (i = r4(t, e, r8)),
                  (0, E.kG)(void 0 !== i, 4, e.join("."), t),
                  i
                );
              }));
            return "".concat(r.typename, ":").concat(JSON.stringify(i));
          })
        );
      }
      function r5(e) {
        var t = r2(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, r) {
            var n = r.field,
              i = r.variables,
              o = r.fieldName,
              a = JSON.stringify(
                r6(e, function (e) {
                  var r = e[0],
                    o = r.charAt(0);
                  if ("@" === o) {
                    if (n && (0, eF.O)(n.directives)) {
                      var a = r.slice(1),
                        s = n.directives.find(function (e) {
                          return e.name.value === a;
                        }),
                        u = s && eo(s, i);
                      return u && r4(u, e.slice(1));
                    }
                    return;
                  }
                  if ("$" === o) {
                    var c = r.slice(1);
                    if (i && rP.call(i, c)) {
                      var l = e.slice(0);
                      return (l[0] = c), r4(i, l);
                    }
                    return;
                  }
                  if (t) return r4(t, e);
                })
              );
            return (t || "{}" !== a) && (o += ":" + a), o;
          })
        );
      }
      function r6(e, t) {
        var r = new eV();
        return (function e(t) {
          var r = r2(t);
          if (!r.paths) {
            var n = (r.paths = []),
              i = [];
            t.forEach(function (r, o) {
              (0, eF.k)(r)
                ? (e(r).forEach(function (e) {
                    return n.push(i.concat(e));
                  }),
                  (i.length = 0))
                : (i.push(r),
                  (0, eF.k)(t[o + 1]) || (n.push(i.slice(0)), (i.length = 0)));
            });
          }
          return r.paths;
        })(e).reduce(function (e, n) {
          var i,
            o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)
              ((i = {})[n[a]] = o), (o = i);
            e = r.merge(e, o);
          }
          return e;
        }, Object.create(null));
      }
      function r8(e, t) {
        return e[t];
      }
      function r4(e, t, r) {
        return (
          (r = r || r8),
          (function e(t) {
            return (0, Y.s)(t)
              ? (0, eF.k)(t)
                ? t.map(e)
                : r6(Object.keys(t).sort(), function (e) {
                    return r4(t, e);
                  })
              : t;
          })(
            t.reduce(function e(t, n) {
              return (0, eF.k)(t)
                ? t.map(function (t) {
                    return e(t, n);
                  })
                : t && r(t, n);
            }, e)
          )
        );
      }
      function r9(e) {
        return void 0 !== e.args
          ? e.args
          : e.field
          ? eo(e.field, e.variables)
          : null;
      }
      er.setStringify(td);
      var r7 = function () {},
        ne = function (e, t) {
          return t.fieldName;
        },
        nt = function (e, t, r) {
          return (0, r.mergeObjects)(e, t);
        },
        nr = function (e, t) {
          return t;
        },
        nn = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = (0, O.pi)({ dataIdFromObject: rF }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename("Query"),
              this.setRootTypename("Mutation"),
              this.setRootTypename("Subscription"),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var r,
                n,
                i = this,
                o =
                  (t &&
                    (t.typename ||
                      (null === (r = t.storeObject) || void 0 === r
                        ? void 0
                        : r.__typename))) ||
                  e.__typename;
              if (o === this.rootTypenamesById.ROOT_QUERY)
                return ["ROOT_QUERY"];
              for (
                var a = (t && t.storeObject) || e,
                  s = (0, O.pi)((0, O.pi)({}, t), {
                    typename: o,
                    storeObject: a,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = no(arguments, a);
                        return i.readField(e, {
                          store: i.cache.data,
                          variables: e.variables,
                        });
                      },
                  }),
                  u = o && this.getTypePolicy(o),
                  c = (u && u.keyFn) || this.config.dataIdFromObject;
                c;

              ) {
                var l = c((0, O.pi)((0, O.pi)({}, e), a), s);
                if ((0, eF.k)(l)) c = r3(l);
                else {
                  n = l;
                  break;
                }
              }
              return (
                (n = n ? String(n) : void 0),
                s.keyObject ? [n, s.keyObject] : [n]
              );
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (r) {
                var n = e[r],
                  i = n.queryType,
                  o = n.mutationType,
                  a = n.subscriptionType,
                  s = (0, O._T)(n, [
                    "queryType",
                    "mutationType",
                    "subscriptionType",
                  ]);
                i && t.setRootTypename("Query", r),
                  o && t.setRootTypename("Mutation", r),
                  a && t.setRootTypename("Subscription", r),
                  rP.call(t.toBeAdded, r)
                    ? t.toBeAdded[r].push(s)
                    : (t.toBeAdded[r] = [s]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var r = this,
                n = this.getTypePolicy(e),
                i = t.keyFields,
                o = t.fields;
              function a(e, t) {
                e.merge =
                  "function" == typeof t
                    ? t
                    : !0 === t
                    ? nt
                    : !1 === t
                    ? nr
                    : e.merge;
              }
              a(n, t.merge),
                (n.keyFn =
                  !1 === i
                    ? r7
                    : (0, eF.k)(i)
                    ? r3(i)
                    : "function" == typeof i
                    ? i
                    : n.keyFn),
                o &&
                  Object.keys(o).forEach(function (t) {
                    var n = r.getFieldPolicy(e, t, !0),
                      i = o[t];
                    if ("function" == typeof i) n.read = i;
                    else {
                      var s = i.keyArgs,
                        u = i.read,
                        c = i.merge;
                      (n.keyFn =
                        !1 === s
                          ? ne
                          : (0, eF.k)(s)
                          ? r5(s)
                          : "function" == typeof s
                          ? s
                          : n.keyFn),
                        "function" == typeof u && (n.read = u),
                        a(n, c);
                    }
                    n.read && n.merge && (n.keyFn = n.keyFn || ne);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var r = "ROOT_" + e.toUpperCase(),
                n = this.rootTypenamesById[r];
              t !== n &&
                ((0, E.kG)(!n || n === e, 5, e),
                n && delete this.rootIdsByTypename[n],
                (this.rootIdsByTypename[t] = r),
                (this.rootTypenamesById[r] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (r) {
                  t.getSupertypeSet(r, !0),
                    e[r].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(r);
                      var n = e.match(rq);
                      (n && n[0] === e) ||
                        t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!rP.call(this.typePolicies, e)) {
                var r = (this.typePolicies[e] = Object.create(null));
                r.fields = Object.create(null);
                var n = this.supertypeMap.get(e);
                !n &&
                  this.fuzzySubtypes.size &&
                  ((n = this.getSupertypeSet(e, !0)),
                  this.fuzzySubtypes.forEach(function (r, i) {
                    if (r.test(e)) {
                      var o = t.supertypeMap.get(i);
                      o &&
                        o.forEach(function (e) {
                          return n.add(e);
                        });
                    }
                  })),
                  n &&
                    n.size &&
                    n.forEach(function (e) {
                      var n = t.getTypePolicy(e),
                        i = n.fields;
                      Object.assign(r, (0, O._T)(n, ["fields"])),
                        Object.assign(r.fields, i);
                    });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (r) {
                    t.updateTypePolicy(e, r);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, r) {
              if (e) {
                var n = this.getTypePolicy(e).fields;
                return n[t] || (r && (n[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var r = this.supertypeMap.get(e);
              return !r && t && this.supertypeMap.set(e, (r = new Set())), r;
            }),
            (e.prototype.fragmentMatches = function (e, t, r, n) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var o = e.typeCondition.name.value;
              if (t === o) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (
                  var a = this.getSupertypeSet(t, !0),
                    s = [a],
                    u = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && 0 > s.indexOf(t) && s.push(t);
                    },
                    c = !!(r && this.fuzzySubtypes.size),
                    l = !1,
                    f = 0;
                  f < s.length;
                  ++f
                ) {
                  var d = s[f];
                  if (d.has(o))
                    return (
                      a.has(o) ||
                        (l && !1 !== globalThis.__DEV__ && E.kG.warn(6, t, o),
                        a.add(o)),
                      !0
                    );
                  d.forEach(u),
                    c &&
                      f === s.length - 1 &&
                      (function e(t, r, n) {
                        return (
                          !!(0, Y.s)(r) &&
                          ((0, eF.k)(r)
                            ? r.every(function (r) {
                                return e(t, r, n);
                              })
                            : t.selections.every(function (t) {
                                if (eu(t) && eI(t, n)) {
                                  var i = ea(t);
                                  return (
                                    rP.call(r, i) &&
                                    (!t.selectionSet ||
                                      e(t.selectionSet, r[i], n))
                                  );
                                }
                                return !0;
                              }))
                        );
                      })(e.selectionSet, r, n) &&
                      ((c = !1),
                      (l = !0),
                      this.fuzzySubtypes.forEach(function (e, r) {
                        var n = t.match(e);
                        n && n[0] === t && u(r);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return !!(r && r.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                r,
                n,
                i,
                o,
                a = e.typename,
                s = e.fieldName,
                u = this.getFieldPolicy(a, s, !1),
                c = u && u.keyFn;
              if (c && a)
                for (
                  var l = {
                      typename: a,
                      fieldName: s,
                      field: e.field || null,
                      variables: e.variables,
                    },
                    f = r9(e);
                  c;

                ) {
                  var d = c(f, l);
                  if ((0, eF.k)(d)) c = r5(d);
                  else {
                    o = d || s;
                    break;
                  }
                }
              return (
                void 0 === o &&
                  (o = e.field
                    ? ((t = e.field),
                      (r = e.variables),
                      (n = null),
                      t.directives &&
                        ((n = {}),
                        t.directives.forEach(function (e) {
                          (n[e.name.value] = {}),
                            e.arguments &&
                              e.arguments.forEach(function (t) {
                                var i = t.name,
                                  o = t.value;
                                return ee(n[e.name.value], i, o, r);
                              });
                        })),
                      (i = null),
                      t.arguments &&
                        t.arguments.length &&
                        ((i = {}),
                        t.arguments.forEach(function (e) {
                          var t = e.name,
                            n = e.value;
                          return ee(i, t, n, r);
                        })),
                      er(t.name.value, i, n))
                    : er(s, r9(e))),
                !1 === o ? s : s === rL(o) ? o : s + ":" + o
              );
            }),
            (e.prototype.readField = function (e, t) {
              var r = e.from;
              if (r && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var n = t.store.getFieldValue(r, "__typename");
                  n && (e.typename = n);
                }
                var i = this.getStoreFieldName(e),
                  o = rL(i),
                  a = t.store.getFieldValue(r, i),
                  s = this.getFieldPolicy(e.typename, o, !1),
                  u = s && s.read;
                if (u) {
                  var c = ni(
                    this,
                    r,
                    e,
                    t,
                    t.store.getStorage(X(r) ? r.__ref : r, i)
                  );
                  return rh.withValue(this.cache, u, [a, c]);
                }
                return a;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return r && r.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, r) {
              var n = this.getFieldPolicy(e, t, !1),
                i = n && n.merge;
              return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, r, n, i) {
              var o = r.field,
                a = r.typename,
                s = r.merge;
              return s === nt
                ? na(n.store)(e, t)
                : s === nr
                ? t
                : (n.overwrite && (e = void 0),
                  s(
                    e,
                    t,
                    ni(
                      this,
                      void 0,
                      {
                        typename: a,
                        fieldName: o.name.value,
                        field: o,
                        variables: n.variables,
                      },
                      n,
                      i || Object.create(null)
                    )
                  ));
            }),
            e
          );
        })();
      function ni(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = rL(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: r9(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: X,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function () {
            return e.readField(no(arguments, t, s), n);
          },
          mergeObjects: na(n.store),
        };
      }
      function no(e, t, r) {
        var n,
          i = e[0],
          o = e[1],
          a = e.length;
        return (
          "string" == typeof i
            ? (n = { fieldName: i, from: a > 1 ? o : t })
            : ((n = (0, O.pi)({}, i)), rP.call(n, "from") || (n.from = t)),
          !1 !== globalThis.__DEV__ &&
            void 0 === n.from &&
            !1 !== globalThis.__DEV__ &&
            E.kG.warn(7, (0, r0.v)(Array.from(e))),
          void 0 === n.variables && (n.variables = r),
          n
        );
      }
      function na(e) {
        return function (t, r) {
          if ((0, eF.k)(t) || (0, eF.k)(r)) throw (0, E._K)(8);
          if ((0, Y.s)(t) && (0, Y.s)(r)) {
            var n = e.getFieldValue(t, "__typename"),
              i = e.getFieldValue(r, "__typename");
            if (n && i && n !== i) return r;
            if (X(t) && rV(r)) return e.merge(t.__ref, r), t;
            if (rV(t) && X(r)) return e.merge(t, r.__ref), r;
            if (rV(t) && rV(r)) return (0, O.pi)((0, O.pi)({}, t), r);
          }
          return r;
        };
      }
      function ns(e, t, r) {
        var n = "".concat(t).concat(r),
          i = e.flavors.get(n);
        return (
          i ||
            e.flavors.set(
              n,
              (i =
                e.clientOnly === t && e.deferred === r
                  ? e
                  : (0, O.pi)((0, O.pi)({}, e), { clientOnly: t, deferred: r }))
            ),
          i
        );
      }
      var nu = (function () {
          function e(e, t, r) {
            (this.cache = e), (this.reader = t), (this.fragments = r);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var r = this,
                n = t.query,
                i = t.result,
                o = t.dataId,
                a = t.variables,
                s = t.overwrite,
                u = el(n),
                c = new eV();
              a = (0, O.pi)((0, O.pi)({}, ev(u)), a);
              var l = (0, O.pi)(
                  (0, O.pi)(
                    {
                      store: e,
                      written: Object.create(null),
                      merge: function (e, t) {
                        return c.merge(e, t);
                      },
                      variables: a,
                      varString: td(a),
                    },
                    rz(n, this.fragments)
                  ),
                  {
                    overwrite: !!s,
                    incomingById: new Map(),
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map(),
                  }
                ),
                f = this.processSelectionSet({
                  result: i || Object.create(null),
                  dataId: o,
                  selectionSet: u.selectionSet,
                  mergeTree: { map: new Map() },
                  context: l,
                });
              if (!X(f)) throw (0, E._K)(11, i);
              return (
                l.incomingById.forEach(function (t, n) {
                  var i = t.storeObject,
                    o = t.mergeTree,
                    a = t.fieldNodeSet,
                    s = Z(n);
                  if (o && o.map.size) {
                    var u = r.applyMerges(o, s, i, l);
                    if (X(u)) return;
                    i = u;
                  }
                  if (!1 !== globalThis.__DEV__ && !l.overwrite) {
                    var c = Object.create(null);
                    a.forEach(function (e) {
                      e.selectionSet && (c[e.name.value] = !0);
                    });
                    var f = function (e) {
                      var t = o && o.map.get(e);
                      return !!(t && t.info && t.info.merge);
                    };
                    Object.keys(i).forEach(function (e) {
                      !0 !== c[rL(e)] ||
                        f(e) ||
                        (function (e, t, r, n) {
                          var i = function (e) {
                              var t = n.getFieldValue(e, r);
                              return "object" == typeof t && t;
                            },
                            o = i(e);
                          if (o) {
                            var a = i(t);
                            if (
                              !(
                                !a ||
                                X(o) ||
                                (0, to.D)(o, a) ||
                                Object.keys(o).every(function (e) {
                                  return void 0 !== n.getFieldValue(a, e);
                                })
                              )
                            ) {
                              var s =
                                  n.getFieldValue(e, "__typename") ||
                                  n.getFieldValue(t, "__typename"),
                                u = rL(r),
                                c = "".concat(s, ".").concat(u);
                              if (!np.has(c)) {
                                np.add(c);
                                var l = [];
                                (0, eF.k)(o) ||
                                  (0, eF.k)(a) ||
                                  [o, a].forEach(function (e) {
                                    var t = n.getFieldValue(e, "__typename");
                                    "string" != typeof t ||
                                      l.includes(t) ||
                                      l.push(t);
                                  }),
                                  !1 !== globalThis.__DEV__ &&
                                    E.kG.warn(
                                      14,
                                      u,
                                      s,
                                      l.length
                                        ? "either ensure all objects of type " +
                                            l.join(" and ") +
                                            " have an ID or a custom merge function, or "
                                        : "",
                                      c,
                                      o,
                                      a
                                    );
                              }
                            }
                          }
                        })(s, i, e, l.store);
                    });
                  }
                  e.merge(n, i);
                }),
                e.retain(f.__ref),
                f
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                r = e.dataId,
                n = e.result,
                i = e.selectionSet,
                o = e.context,
                a = e.mergeTree,
                s = this.cache.policies,
                u = Object.create(null),
                c =
                  (r && s.rootTypenamesById[r]) ||
                  es(n, i, o.fragmentMap) ||
                  (r && o.store.get(r, "__typename"));
              "string" == typeof c && (u.__typename = c);
              var l = function () {
                  var e = no(arguments, u, o.variables);
                  if (X(e.from)) {
                    var t = o.incomingById.get(e.from.__ref);
                    if (t) {
                      var r = s.readField(
                        (0, O.pi)((0, O.pi)({}, e), { from: t.storeObject }),
                        o
                      );
                      if (void 0 !== r) return r;
                    }
                  }
                  return s.readField(e, o);
                },
                f = new Set();
              this.flattenFields(i, n, o, c).forEach(function (e, r) {
                var i,
                  o = n[ea(r)];
                if ((f.add(r), void 0 !== o)) {
                  var d = s.getStoreFieldName({
                      typename: c,
                      fieldName: r.name.value,
                      field: r,
                      variables: e.variables,
                    }),
                    p = nl(a, d),
                    h = t.processFieldValue(
                      o,
                      r,
                      r.selectionSet ? ns(e, !1, !1) : e,
                      p
                    ),
                    v = void 0;
                  r.selectionSet && (X(h) || rV(h)) && (v = l("__typename", h));
                  var m = s.getMergeFunction(c, r.name.value, v);
                  m ? (p.info = { field: r, typename: c, merge: m }) : nd(a, d),
                    (u = e.merge(u, (((i = {})[d] = h), i)));
                } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || te.added(r) || s.getReadFunction(c, r.name.value) || !1 === globalThis.__DEV__ || E.kG.error(12, ea(r), n);
              });
              try {
                var d = s.identify(n, {
                    typename: c,
                    selectionSet: i,
                    fragmentMap: o.fragmentMap,
                    storeObject: u,
                    readField: l,
                  }),
                  p = d[0],
                  h = d[1];
                (r = r || p), h && (u = o.merge(u, h));
              } catch (e) {
                if (!r) throw e;
              }
              if ("string" == typeof r) {
                var v = Z(r),
                  m = o.written[r] || (o.written[r] = []);
                if (
                  m.indexOf(i) >= 0 ||
                  (m.push(i), this.reader && this.reader.isFresh(n, v, i, o))
                )
                  return v;
                var y = o.incomingById.get(r);
                return (
                  y
                    ? ((y.storeObject = o.merge(y.storeObject, u)),
                      (y.mergeTree = (function e(t, r) {
                        if (t === r || !r || nf(r)) return t;
                        if (!t || nf(t)) return r;
                        var n =
                            t.info && r.info
                              ? (0, O.pi)((0, O.pi)({}, t.info), r.info)
                              : t.info || r.info,
                          i = t.map.size && r.map.size,
                          o = {
                            info: n,
                            map: i ? new Map() : t.map.size ? t.map : r.map,
                          };
                        if (i) {
                          var a = new Set(r.map.keys());
                          t.map.forEach(function (t, n) {
                            o.map.set(n, e(t, r.map.get(n))), a.delete(n);
                          }),
                            a.forEach(function (n) {
                              o.map.set(n, e(r.map.get(n), t.map.get(n)));
                            });
                        }
                        return o;
                      })(y.mergeTree, a)),
                      f.forEach(function (e) {
                        return y.fieldNodeSet.add(e);
                      }))
                    : o.incomingById.set(r, {
                        storeObject: u,
                        mergeTree: nf(a) ? void 0 : a,
                        fieldNodeSet: f,
                      }),
                  v
                );
              }
              return u;
            }),
            (e.prototype.processFieldValue = function (e, t, r, n) {
              var i = this;
              return t.selectionSet && null !== e
                ? (0, eF.k)(e)
                  ? e.map(function (e, o) {
                      var a = i.processFieldValue(e, t, r, nl(n, o));
                      return nd(n, o), a;
                    })
                  : this.processSelectionSet({
                      result: e,
                      selectionSet: t.selectionSet,
                      context: r,
                      mergeTree: n,
                    })
                : !1 !== globalThis.__DEV__
                ? tT(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, r, n) {
              void 0 === n && (n = es(t, e, r.fragmentMap));
              var i = new Map(),
                o = this.cache.policies,
                a = new tl(!1);
              return (
                (function e(s, u) {
                  var c = a.lookup(s, u.clientOnly, u.deferred);
                  c.visited ||
                    ((c.visited = !0),
                    s.selections.forEach(function (a) {
                      if (eI(a, r.variables)) {
                        var s = u.clientOnly,
                          c = u.deferred;
                        if (
                          (!(s && c) &&
                            (0, eF.O)(a.directives) &&
                            a.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (("client" === t && (s = !0), "defer" === t)) {
                                var n = eo(e, r.variables);
                                (n && !1 === n.if) || (c = !0);
                              }
                            }),
                          eu(a))
                        ) {
                          var l = i.get(a);
                          l && ((s = s && l.clientOnly), (c = c && l.deferred)),
                            i.set(a, ns(r, s, c));
                        } else {
                          var f = H(a, r.lookupFragment);
                          if (!f && a.kind === eE.h.FRAGMENT_SPREAD)
                            throw (0, E._K)(13, a.name.value);
                          f &&
                            o.fragmentMatches(f, n, t, r.variables) &&
                            e(f.selectionSet, ns(r, s, c));
                        }
                      }
                    }));
                })(e, r),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, r, n, i) {
              var o = this;
              if (e.map.size && !X(r)) {
                var a,
                  s,
                  u = !(0, eF.k)(r) && (X(t) || rV(t)) ? t : void 0,
                  c = r;
                u && !i && (i = [X(u) ? u.__ref : u]);
                var l = function (e, t) {
                  return (0, eF.k)(e)
                    ? "number" == typeof t
                      ? e[t]
                      : void 0
                    : n.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var r = l(u, t),
                    a = l(c, t);
                  if (void 0 !== a) {
                    i && i.push(t);
                    var f = o.applyMerges(e, r, a, n, i);
                    f !== a && (s = s || new Map()).set(t, f),
                      i && (0, E.kG)(i.pop() === t);
                  }
                }),
                  s &&
                    ((r = (0, eF.k)(c) ? c.slice(0) : (0, O.pi)({}, c)),
                    s.forEach(function (e, t) {
                      r[t] = e;
                    }));
              }
              return e.info
                ? this.cache.policies.runMergeFunction(
                    t,
                    r,
                    e.info,
                    n,
                    i && (a = n.store).getStorage.apply(a, i)
                  )
                : r;
            }),
            e
          );
        })(),
        nc = [];
      function nl(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, nc.pop() || { map: new Map() }), r.get(t);
      }
      function nf(e) {
        return !e || !(e.info || e.map.size);
      }
      function nd(e, t) {
        var r = e.map,
          n = r.get(t);
        n && nf(n) && (nc.push(n), r.delete(t));
      }
      var np = new Set(),
        nh = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r,
              n = e.call(this) || this;
            return (
              (n.watches = new Set()),
              (n.addTypenameTransform = new tv(te)),
              (n.assumeImmutableResults = !0),
              (n.makeVar = rg),
              (n.txCount = 0),
              (n.config = ((r = t), (0, tE.o)(rM, r))),
              (n.addTypename = !!n.config.addTypename),
              (n.policies = new nn({
                cache: n,
                dataIdFromObject: n.config.dataIdFromObject,
                possibleTypes: n.config.possibleTypes,
                typePolicies: n.config.typePolicies,
              })),
              n.init(),
              n
            );
          }
          return (
            (0, O.ZT)(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new rU.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching,
              }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                r = this.storeReader,
                n = this.config.fragments;
              (this.storeWriter = new nu(
                this,
                (this.storeReader = new rX({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: rN(this.config),
                  canon: e ? void 0 : r && r.canon,
                  fragments: n,
                })),
                n
              )),
                (this.maybeBroadcastWatch = rp(
                  function (e, r) {
                    return t.broadcastWatch(e, r);
                  },
                  {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function (e) {
                      var r = e.optimistic ? t.optimisticData : t.data;
                      if (rH(r)) {
                        var n = e.optimistic,
                          i = e.id,
                          o = e.variables;
                        return r.makeCacheKey(
                          e.query,
                          e.callback,
                          td({ optimistic: n, id: i, variables: o })
                        );
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(
                  function (e) {
                    return e.resetCaching();
                  }
                );
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
              );
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    (0, O.pi)((0, O.pi)({}, e), {
                      store: e.optimistic ? this.optimisticData : this.data,
                      config: this.config,
                      returnPartialData: void 0 !== t && t,
                    })
                  ).result || null
                );
              } catch (e) {
                if (e instanceof rD) return null;
                throw e;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return (
                  ++this.txCount, this.storeWriter.writeToStore(this.data, e)
                );
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (rP.call(e, "id") && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore(
                (0, O.pi)((0, O.pi)({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  rootId: e.id || "ROOT_QUERY",
                  config: this.config,
                })
              );
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size ||
                  (function (e) {
                    rm(e).vars.forEach(function (t) {
                      return t.attachCache(e);
                    });
                  })(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && ry(t),
                    t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              td.reset();
              var t = this.optimisticData.gc();
              return (
                e &&
                  !this.txCount &&
                  (e.resetResultCache
                    ? this.resetResultCache(e.resetResultIdentities)
                    : e.resetResultIdentities && this.storeReader.resetCanon()),
                t
              );
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if (X(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (e) {
                !1 !== globalThis.__DEV__ && E.kG.warn(e);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (rP.call(e, "id")) return !1;
                e = (0, O.pi)((0, O.pi)({}, e), { id: "ROOT_QUERY" });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                td.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    ry(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData &&
                ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                r = this,
                n = e.update,
                i = e.optimistic,
                o = void 0 === i || i,
                a = e.removeOptimistic,
                s = e.onWatchUpdated,
                u = function (e) {
                  var i = r.data,
                    o = r.optimisticData;
                  ++r.txCount, e && (r.data = r.optimisticData = e);
                  try {
                    return (t = n(r));
                  } finally {
                    --r.txCount, (r.data = i), (r.optimisticData = o);
                  }
                },
                c = new Set();
              return (
                s &&
                  !this.txCount &&
                  this.broadcastWatches(
                    (0, O.pi)((0, O.pi)({}, e), {
                      onWatchUpdated: function (e) {
                        return c.add(e), !1;
                      },
                    })
                  ),
                "string" == typeof o
                  ? (this.optimisticData = this.optimisticData.addLayer(o, u))
                  : !1 === o
                  ? u(this.data)
                  : u(),
                "string" == typeof a &&
                  (this.optimisticData = this.optimisticData.removeLayer(a)),
                s && c.size
                  ? (this.broadcastWatches(
                      (0, O.pi)((0, O.pi)({}, e), {
                        onWatchUpdated: function (e, t) {
                          var r = s.call(this, e, t);
                          return !1 !== r && c.delete(e), r;
                        },
                      })
                    ),
                    c.size &&
                      c.forEach(function (e) {
                        return r.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              return this.addTypenameToDocument(this.addFragmentsToDocument(e));
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (r) {
                  return t.maybeBroadcastWatch(r, e);
                });
            }),
            (t.prototype.addFragmentsToDocument = function (e) {
              var t = this.config.fragments;
              return t ? t.transform(e) : e;
            }),
            (t.prototype.addTypenameToDocument = function (e) {
              return this.addTypename
                ? this.addTypenameTransform.transformDocument(e)
                : e;
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var r = e.lastDiff,
                n = this.diff(e);
              (!t ||
                (e.optimistic &&
                  "string" == typeof t.optimistic &&
                  (n.fromOptimisticTransaction = !0),
                !t.onWatchUpdated ||
                  !1 !== t.onWatchUpdated.call(this, e, n, r))) &&
                ((r && (0, to.D)(r.result, n.result)) ||
                  e.callback((e.lastDiff = n), r));
            }),
            t
          );
        })(rA),
        nv = "https://bff.barn.cow.fi/proxy";
      if (!nv) throw Error("AWS URL MISSING FROM ENVIRONMENT");
      var nm = new rC({
          connectToDevTools: !0,
          uri: nv,
          headers: {
            "Content-Type": "application/json",
            Origin: "https://app.uniswap.org",
          },
          cache: new nh({
            typePolicies: {
              Query: {
                fields: {
                  token: {
                    read: function (e, t) {
                      var r = t.args;
                      return (0, t.toReference)({
                        __typename: "Token",
                        chain: null == r ? void 0 : r.chain,
                        address: null == r ? void 0 : r.address,
                      });
                    },
                  },
                },
              },
              Token: {
                keyFields: ["chain", "address"],
                fields: {
                  address: {
                    read: function (e) {
                      var t;
                      return null !==
                        (t = null == e ? void 0 : e.toLowerCase()) &&
                        void 0 !== t
                        ? t
                        : null;
                    },
                  },
                },
              },
            },
          }),
          defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
        }),
        ny = r(8241);
      function ng(e) {
        var t = e.Component,
          r = e.pageProps;
        (0, ny.br)();
        var n = (0, p.useRouter)(),
          i = "".concat(v.k.url.root).concat(n.asPath);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(d(), {
              children: [
                !1,
                (0, c.jsx)(
                  "meta",
                  { name: "description", content: v.k.description },
                  "description"
                ),
                (0, c.jsx)(
                  "link",
                  {
                    rel: "shortcut icon",
                    type: "image/png",
                    href: "/favicon.png",
                  },
                  "shortcut-icon"
                ),
                (0, c.jsx)(
                  "link",
                  {
                    rel: "apple-touch-icon",
                    sizes: "192x192",
                    href: "/favicon.png",
                  },
                  "apple-touch-icon-192"
                ),
                (0, c.jsx)(
                  "link",
                  {
                    rel: "apple-touch-icon",
                    sizes: "512x512",
                    href: "/favicon.png",
                  },
                  "apple-touch-icon-512"
                ),
                (0, c.jsx)("link", { rel: "canonical", href: i }, "canonical"),
                (0, c.jsx)(
                  "meta",
                  { property: "og:type", content: "website" },
                  "ogType"
                ),
                (0, c.jsx)(
                  "meta",
                  { property: "og:title", content: v.k.title },
                  "ogTitle"
                ),
                (0, c.jsx)(
                  "meta",
                  { property: "og:description", content: v.k.description },
                  "ogDescription"
                ),
                (0, c.jsx)(
                  "meta",
                  {
                    property: "og:image",
                    content: v.k.url.root + "/images/og-meta-cowprotocol.png",
                  },
                  "ogImage"
                ),
                (0, c.jsx)("meta", { property: "og:url", content: i }, "ogUrl"),
                (0, c.jsx)(
                  "meta",
                  { name: "twitter:card", content: "summary_large_image" },
                  "twitterCard"
                ),
                (0, c.jsx)(
                  "meta",
                  { name: "twitter:site", content: v.k.social.twitter.account },
                  "twitterSite"
                ),
                (0, c.jsx)(
                  "meta",
                  { name: "twitter:title", content: v.k.title },
                  "twitterTitle"
                ),
                (0, c.jsx)(
                  "meta",
                  {
                    name: "twitter:image",
                    content: v.k.url.root + "/images/og-meta-cowprotocol.png",
                  },
                  "twitterImage"
                ),
                (0, c.jsx)(
                  "meta",
                  {
                    name: "viewport",
                    content:
                      "width=device-width,initial-scale=1,maximum-scale=1",
                  },
                  "viewport"
                ),
              ],
            }),
            (0, c.jsx)(l.ZP, {}),
            (0, c.jsx)(_, {}),
            (0, c.jsx)(T, {
              client: nm,
              children: (0, c.jsx)(t, (0, u._)({}, r)),
            }),
          ],
        });
      }
    },
    913: function (e, t, r) {
      "use strict";
      r.d(t, {
        dL: function () {
          return s;
        },
        vb: function () {
          return u;
        },
      });
      var n = r(5505),
        i = r(9210),
        o = r(336),
        a = (0, n.vJ)(
          [
            "@font-face{font-family:'Averta';src:url('/fonts/averta-regular-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;font-display:swap;}@font-face{font-family:'Averta';src:url('/fonts/averta-semibold-webfont.woff2') format('woff2');font-weight:500;font-style:normal;font-display:swap;}@font-face{font-family:'Averta';src:url('/fonts/averta-bold-webfont.woff2') format('woff2');font-weight:bold;font-style:normal;font-display:swap;}@font-face{font-family:'Averta';src:url('/fonts/averta-extrabold-webfont.woff2') format('woff2');font-weight:900;font-style:normal;font-display:swap;}@font-face{font-family:'Flecha S';src:url('/fonts/FlechaS-MediumItalic.woff2') format('woff2');font-weight:500;font-style:italic;font-display:swap;}@font-face{font-family:'Flecha S';src:url('/fonts/FlechaS-Medium.woff2') format('woff2');font-weight:500;font-style:normal;font-display:swap;}@font-face{font-family:'CircularXXSub-Book';src:url('/fonts/CircularXXSub-Book.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap;}html,body{width:100%;min-height:100vh;min-width:300px;margin:0;font-size:62.5%;line-height:10px;font-family:",
            ";background-color:",
            ";color:",
            ";box-sizing:border-box;scroll-behavior:smooth;font-variant:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);font-feature-settings:'ss01' on,'ss02' on,'cv01' on,'cv03' on;html,input,textarea,button{font-family:'Averta',sans-serif;font-display:fallback;}}*::selection{background:",
            ";color:",
            ";}*::-moz-selection{background:",
            ";}*::-webkit-selection{background:",
            ";}*::-moz-placeholder{line-height:revert;}*,*:before,*:after{box-sizing:inherit;}a{text-decoration:underline;cursor:pointer;}a:has(> .blank-button){text-decoration:none;}h1,h2,h3,p,b,i,strong{margin:0;line-height:1;}ul,ol{font-size:",
            ";}button{font-family:inherit;cursor:pointer;outline:0;&:hover{background-color:var(--color-background-button-hover);color:var(--color-text-button-hover);}&:disabled,&[disabled]{opacity:.35;pointer-events:none;&:hover{opacity:.35;pointer-events:none;}}}input{&::placeholder{color:inherit;font-size:inherit;}&:focus::placeholder{color:transparent;}&:focus{border-color:",
            ";}&:disabled{opacity:0.8;}}.noScroll{overflow:hidden!important;position:fixed!important;top:0;}.mobileOnly{display:none !important;",
            "{display:block !important;}}.hideMobile{",
            "{display:none;}}.container{margin:0 auto;}@keyframes zoomSlideIn{from{opacity:0;transform:scale3d(0.3,0.3,0.3) translate3d(0,-10px,0);}50%{opacity:1;transform:scale3d(1.05,1.05,1.05) translate3d(0,-5px,0);}to{opacity:1;transform:scale3d(1,1,1) translate3d(0,0px,0);}}.zoomSlideIn{animation-name:zoomSlideIn;animation-duration:1.2s;animation-fill-mode:forwards;}",
          ],
          i.Zx.default,
          i.Il.darkBlue,
          i.Il.lightBlue,
          i.Il.lightBlue,
          i.Il.darkBlue,
          i.Il.lightBlue,
          i.Il.lightBlue,
          i.Zx.sizeDefault,
          i.Il.darkBlue,
          i.pU.mobile,
          i.pU.mobile
        ),
        s = n.ZP.a.withConfig({ componentId: "sc-3390020f-0" })(
          [
            "display:inline-block;color:",
            ";font-size:inherit;white-space:nowrap;&::after{content:'↗';color:inherit;font-size:",
            ";display:inline-block;margin:0 0 0 0.2rem;}",
          ],
          i.Il.darkBlue,
          i.Zx.sizeDefault
        ),
        u = n.ZP.div.withConfig({ componentId: "sc-3390020f-1" })(
          [
            "border:0.1rem solid ",
            ";border-radius:0.6rem;width:100%;padding:0;background:",
            ";color:",
            ";font-size:1.8rem;margin:0 0 2.4rem;display:flex;flex-flow:row nowrap;position:relative;font-family:",
            ";&::after{content:'▼';position:absolute;border:0;color:inherit;font-size:",
            ";display:flex;align-items:center;pointer-events:none;margin:auto;height:100%;top:0;bottom:0;right:1.2rem;cursor:pointer;}> select{appearance:none;cursor:pointer;height:100%;padding:1.2rem;width:100%;display:block;color:inherit;font-family:inherit;font-size:inherit;border:0;border-radius:inherit;background:",
            ";&:focus{outline:none;}> option{background-color:",
            ";color:",
            ";}}",
          ],
          (0, o.DZ)(0.9, i.Il.lightBlue),
          i.Il.darkBlue4,
          i.Il.lightBlue,
          i.Zx.default,
          i.Zx.sizeDefault,
          (0, o.DZ)(0.9, i.Il.darkBlue),
          i.Il.black,
          i.Il.darkBlue
        );
      t.ZP = a;
    },
    9210: function (e, t, r) {
      "use strict";
      r.d(t, {
        Il: function () {
          return s;
        },
        Sj: function () {
          return p;
        },
        Zx: function () {
          return c;
        },
        d9: function () {
          return h;
        },
        ke: function () {
          return u;
        },
        pU: function () {
          return l;
        },
        xE: function () {
          return i;
        },
      });
      var n,
        i,
        o = r(336),
        a = r(5505),
        s = {
          white: "#FFFFFF",
          black: "#000000",
          orange: "#ED6834",
          border: (0, o.DZ)(0.75, "#979797"),
          borderGradient: "linear-gradient(to bottom, "
            .concat((0, o.DZ)(0.75, "#979797"), ", ")
            .concat((0, o.DZ)(1, "#979797"), ")"),
          darkBlue: "#052B65",
          darkBlue2: "#0D3673",
          darkBlue3: "#042a63",
          darkBlue4: "#042456",
          lightBlue: "#CAE9FF",
          lightBlue2: "rgb(176 194 255)",
          lightBlue3: "rgb(118 167 230)",
          grey: "rgb(236, 241, 248)",
          grey2: "rgb(201 211 226)",
          grey3: "#737b96",
          text1: "#405A82",
          text2: "#95BAEF",
          danger: "#D41300",
          warning: "#D94719",
          alert: "#DB971E",
          information: "#0d5ed9",
          success: "#007B28",
          gradient:
            "linear-gradient(45deg,#FFE7E0 0%,#F8DBF4 20%,#C4DDFF 60%,#CAE9FF 100%)",
          gradient2: "linear-gradient(0deg, #071B3B 0%, #052B65 100%)",
          gradientMesh: (0, a.iv)([
            "background-color:hsla(142,0%,100%,1);background-image:radial-gradient(at 5% 70%,hsla(204,100%,89%,1) 0px,transparent 50%),radial-gradient(at 47% 40%,hsla(214,100%,88%,1) 0px,transparent 50%),radial-gradient(at 73% 3%,hsla(308,67%,91%,1) 0px,transparent 50%),radial-gradient(at 44% 13%,hsla(13,100%,93%,1) 0px,transparent 50%),radial-gradient(at 61% 70%,hsla(204,100%,89%,1) 0px,transparent 50%),radial-gradient(at 32% 81%,hsla(204,100%,89%,1) 0px,transparent 50%),radial-gradient(at 19% 39%,hsla(204,100%,89%,1) 0px,transparent 50%);",
          ]),
          cowammBlack: "#211715",
          cowammLightBlue: "#57C3FF",
          cowammBlue: "#3A86FF",
          cowammWhite: "#f6f2e7",
          cowammLightPurple: "#B462FA",
          cowammPurple: "#8738EC",
          cowammPink: "#FB50C0",
          cowammYellow: "#F5BD24",
          cowammLightOrange: "#FE970C",
          cowammOrange: "#FB5607",
          cowammSand: "#E3DED4",
        },
        u = {
          borderRadius: "1.6rem",
          pageMaxWidth: 126,
          boxShadow: "0 2.4rem 2.4rem ".concat(s.darkBlue3),
        },
        c = {
          default: "'Averta', 'Helvetica Neue', Helvetica, sans-serif",
          arial: "Arial, Helvetica, sans-serif",
          flecha: "'Flecha S', 'Helvetica Neue', Helvetica, sans-serif",
          circular:
            "'CircularXXSub-Book', 'Helvetica Neue', Helvetica, sans-serif",
          sizeDefault: "1.6rem",
          weightLight: 300,
          weightNormal: 400,
          weightMedium: 600,
          weightBold: 900,
        },
        l = {
          tinyScreen: "320px",
          xSmallScreen: "430px",
          smallScreen: "736px",
          smallScreenUp: "737px",
          mediumScreenSmall: "992px",
          mediumEnd: "1024px",
          desktopScreen: "1200px",
          desktopScreenLarge: "1400px",
          get tinyDown() {
            return "@media only screen and (max-width : ".concat(
              this.tinyScreen,
              ")"
            );
          },
          get xSmallDown() {
            return "@media only screen and (max-width : ".concat(
              this.xSmallScreen,
              ")"
            );
          },
          get mobile() {
            return "@media only screen and (max-width : ".concat(
              this.smallScreen,
              ")"
            );
          },
          get smallUp() {
            return "@media only screen and (min-width : ".concat(
              this.smallScreen,
              ")"
            );
          },
          get mediumUp() {
            return "@media only screen and (min-width : ".concat(
              this.mediumScreenSmall,
              ")"
            );
          },
          get mediumDown() {
            return "@media only screen and (max-width : ".concat(
              this.mediumEnd,
              ")"
            );
          },
          get mediumOnly() {
            return "@media only screen and (min-width : "
              .concat(this.smallScreenUp, ") and (max-width : ")
              .concat(this.mediumEnd, ")");
          },
          get desktopOnly() {
            return "@media only screen and (min-width : "
              .concat(this.mediumEnd, ") and (max-width : ")
              .concat(this.desktopScreen, ")");
          },
          get desktopDown() {
            return "@media only screen and (max-width : ".concat(
              this.desktopScreen,
              ")"
            );
          },
          get desktop() {
            return "@media only screen and (min-width : ".concat(
              this.desktopScreen,
              ")"
            );
          },
          get desktopLarge() {
            return "@media only screen and (min-width: ".concat(
              this.desktopScreenLarge,
              ")"
            );
          },
          get desktopLargeDown() {
            return "@media only screen and (max-width: ".concat(
              this.desktopScreenLarge,
              ")"
            );
          },
          get tabletPortrait() {
            return "@media (min-device-width: "
              .concat(this.smallScreenUp, ") and (max-device-width: ")
              .concat(this.mediumEnd, ") and (orientation: portrait)");
          },
          get tabletLandscape() {
            return "@media (min-device-width: "
              .concat(this.smallScreenUp, ") and (max-device-width: ")
              .concat(this.mediumEnd, ") and (orientation: landscape)");
          },
          get tablet() {
            return "@media (min-width: "
              .concat(this.smallScreenUp, ") and (max-width: ")
              .concat(this.mediumEnd, "), ")
              .concat(this.tabletPortrait, ", ")
              .concat(this.tabletLandscape);
          },
          get tabletNoPortrait() {
            return "@media (min-width: "
              .concat(this.smallScreenUp, ") and (max-width: ")
              .concat(this.mediumEnd, "), ")
              .concat(this.tabletLandscape);
          },
          get tabletSmall() {
            return "@media (min-width: "
              .concat(this.smallScreenUp, ") and (max-width: ")
              .concat(this.mediumScreenSmall, ")");
          },
        };
      (0, a.iv)(["display:flex;flex-flow:column nowrap;"]),
        (0, a.iv)(["display:flex;flex-flow:row nowrap;"]),
        ((n = i || (i = {}))[(n.slow = 500)] = "slow"),
        (n[(n.medium = 250)] = "medium"),
        (n[(n.fast = 125)] = "fast");
      var f = {
          duration: {
            slow: "".concat(500, "ms"),
            medium: "".concat(250, "ms"),
            fast: "".concat(125, "ms"),
          },
          timing: {
            ease: "ease",
            in: "ease-in",
            out: "ease-out",
            inOut: "ease-in-out",
          },
        },
        d = (0, a.F4)(["from{opacity:0;}to{opacity:1;}"]),
        p = (0, a.iv)(
          ["animation:", " ", " ", ";"],
          d,
          f.duration.fast,
          f.timing.in
        ),
        h = a.ZP.span.withConfig({ componentId: "sc-788137a0-0" })(
          ["font-style:", ";color:", ";width:100%;display:inline;"],
          function (e) {
            return e.italic ? "italic" : "normal";
          },
          function (e) {
            return s[e.color];
          }
        );
    },
    413: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return i;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return u;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return l;
          },
          isThenable: function () {
            return f;
          },
        });
      var r,
        n,
        i = "refresh",
        o = "navigate",
        a = "restore",
        s = "server-patch",
        u = "prefetch",
        c = "fast-refresh",
        l = "server-action";
      function f(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((r = n || (n = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1275: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(261),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7117: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4022),
        i = r(3286),
        o = r(8588);
      r(9790),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return k;
          },
        });
      var a = r(7653)._(r(2784)),
        s = r(6338),
        u = r(5863),
        c = r(6408),
        l = r(654),
        f = r(1127),
        d = r(4442),
        p = r(6428),
        h = r(4746),
        v = r(1275),
        m = r(5722),
        y = r(413),
        g = new Set();
      function b(e, t, r, n, i, o) {
        if (o || (0, u.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            var a =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (g.has(a)) return;
            g.add(a);
          }
          Promise.resolve(o ? e.prefetch(t, i) : e.prefetch(t, r, n)).catch(
            function (e) {}
          );
        }
      }
      function w(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      var k = a.default.forwardRef(function (e, t) {
        var r,
          c,
          g = e.href,
          k = e.as,
          S = e.children,
          _ = e.prefetch,
          O = void 0 === _ ? null : _,
          E = e.passHref,
          x = e.replace,
          T = e.shallow,
          I = e.scroll,
          C = e.locale,
          A = e.onClick,
          D = e.onMouseEnter,
          j = e.onTouchStart,
          P = e.legacyBehavior,
          R = void 0 !== P && P,
          F = i._(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = S),
          R &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        var M = a.default.useContext(d.RouterContext),
          N = a.default.useContext(p.AppRouterContext),
          q = null != M ? M : N,
          L = !M,
          V = !1 !== O,
          z = null === O ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
          Q = a.default.useMemo(
            function () {
              if (!M) {
                var e = w(g);
                return { href: e, as: k ? w(k) : e };
              }
              var t = o._((0, s.resolveHref)(M, g, !0), 2),
                r = t[0],
                n = t[1];
              return { href: r, as: k ? (0, s.resolveHref)(M, k) : n || r };
            },
            [M, g, k]
          ),
          B = Q.href,
          G = Q.as,
          U = a.default.useRef(B),
          W = a.default.useRef(G);
        R && (c = a.default.Children.only(r));
        var $ = R ? c && "object" == typeof c && c.ref : t,
          Y = o._((0, h.useIntersection)({ rootMargin: "200px" }), 3),
          J = Y[0],
          K = Y[1],
          H = Y[2],
          Z = a.default.useCallback(
            function (e) {
              (W.current !== G || U.current !== B) &&
                (H(), (W.current = G), (U.current = B)),
                J(e),
                $ &&
                  ("function" == typeof $
                    ? $(e)
                    : "object" == typeof $ && ($.current = e));
            },
            [G, $, B, H, J]
          );
        a.default.useEffect(
          function () {
            q && K && V && b(q, B, G, { locale: C }, { kind: z }, L);
          },
          [G, B, K, C, V, null == M ? void 0 : M.locale, q, L, z]
        );
        var X = {
          ref: Z,
          onClick: function (e) {
            R || "function" != typeof A || A(e),
              R &&
                c.props &&
                "function" == typeof c.props.onClick &&
                c.props.onClick(e),
              q &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, o, s, c, l) {
                  if (
                    !(
                      "A" === e.currentTarget.nodeName.toUpperCase() &&
                      (((f = e.currentTarget.getAttribute("target")) &&
                        "_self" !== f) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which) ||
                        (!l && !(0, u.isLocalURL)(r)))
                    )
                  ) {
                    e.preventDefault();
                    var f,
                      d = function () {
                        var e = null == s || s;
                        "beforePopState" in t
                          ? t[i ? "replace" : "push"](r, n, {
                              shallow: o,
                              locale: c,
                              scroll: e,
                            })
                          : t[i ? "replace" : "push"](n || r, { scroll: e });
                      };
                    l ? a.default.startTransition(d) : d();
                  }
                })(e, q, B, G, x, T, I, C, L);
          },
          onMouseEnter: function (e) {
            R || "function" != typeof D || D(e),
              R &&
                c.props &&
                "function" == typeof c.props.onMouseEnter &&
                c.props.onMouseEnter(e),
              q &&
                (V || !L) &&
                b(
                  q,
                  B,
                  G,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: z },
                  L
                );
          },
          onTouchStart: function (e) {
            R || "function" != typeof j || j(e),
              R &&
                c.props &&
                "function" == typeof c.props.onTouchStart &&
                c.props.onTouchStart(e),
              q &&
                (V || !L) &&
                b(
                  q,
                  B,
                  G,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: z },
                  L
                );
          },
        };
        if ((0, l.isAbsoluteUrl)(G)) X.href = G;
        else if (!R || E || ("a" === c.type && !("href" in c.props))) {
          var ee = void 0 !== C ? C : null == M ? void 0 : M.locale,
            et =
              (null == M ? void 0 : M.isLocaleDomain) &&
              (0, v.getDomainLocale)(
                G,
                ee,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          X.href =
            et ||
            (0, m.addBasePath)(
              (0, f.addLocale)(G, ee, null == M ? void 0 : M.defaultLocale)
            );
        }
        return R
          ? a.default.cloneElement(c, X)
          : a.default.createElement("a", n._({}, F, X), r);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4746: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(8588);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      var i = r(2784),
        o = r(7155),
        a = "function" == typeof IntersectionObserver,
        s = new Map(),
        u = [];
      function c(e) {
        var t = e.rootRef,
          r = e.rootMargin,
          c = e.disabled || !a,
          l = n._((0, i.useState)(!1), 2),
          f = l[0],
          d = l[1],
          p = (0, i.useRef)(null),
          h = (0, i.useCallback)(function (e) {
            p.current = e;
          }, []);
        return (
          (0, i.useEffect)(
            function () {
              if (a) {
                if (!c && !f) {
                  var e,
                    n,
                    i,
                    l,
                    h = p.current;
                  if (h && h.tagName)
                    return (
                      (n = (e = (function (e) {
                        var t,
                          r = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = u.find(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                        if (n && (t = s.get(n))) return t;
                        var i = new Map();
                        return (
                          (t = {
                            id: r,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = i.get(e.target),
                                  r =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && r && t(r);
                              });
                            }, e),
                            elements: i,
                          }),
                          u.push(r),
                          s.set(r, t),
                          t
                        );
                      })({
                        root: null == t ? void 0 : t.current,
                        rootMargin: r,
                      })).id),
                      (i = e.observer),
                      (l = e.elements).set(h, function (e) {
                        return e && d(e);
                      }),
                      i.observe(h),
                      function () {
                        if ((l.delete(h), i.unobserve(h), 0 === l.size)) {
                          i.disconnect(), s.delete(n);
                          var e = u.findIndex(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                          e > -1 && u.splice(e, 1);
                        }
                      }
                    );
                }
              } else if (!f) {
                var v = (0, o.requestIdleCallback)(function () {
                  return d(!0);
                });
                return function () {
                  return (0, o.cancelIdleCallback)(v);
                };
              }
            },
            [c, r, t, f, p.current]
          ),
          [
            h,
            f,
            (0, i.useCallback)(function () {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7729: function (e, t, r) {
      e.exports = r(666);
    },
    9097: function (e, t, r) {
      e.exports = r(7117);
    },
    5632: function (e, t, r) {
      e.exports = r(5894);
    },
    336: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function i(e, t) {
        return (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function a() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (a = function () {
          return !!e;
        })();
      }
      function s(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (s = function (e) {
          if (
            null === e ||
            !(function (e) {
              try {
                return (
                  -1 !== Function.toString.call(e).indexOf("[native code]")
                );
              } catch (t) {
                return "function" == typeof e;
              }
            })(e)
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return (function (e, t, r) {
              if (a()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new (e.bind.apply(e, n))();
              return r && i(o, r.prototype), o;
            })(e, arguments, o(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(r, e)
          );
        })(e);
      }
      r.d(t, {
        _j: function () {
          return j;
        },
        $n: function () {
          return P;
        },
        DZ: function () {
          return R;
        },
      });
      var u = (function (e) {
        function t(t) {
          return (function (e) {
            if (void 0 === e)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                t +
                " for more information."
            ) || this
          );
        }
        return (
          (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          i(t, e),
          t
        );
      })(s(Error));
      function c(e) {
        return Math.round(255 * e);
      }
      function l(e, t, r) {
        return c(e) + "," + c(t) + "," + c(r);
      }
      function f(e, t, r, n) {
        if ((void 0 === n && (n = l), 0 === t)) return n(r, r, r);
        var i = (((e % 360) + 360) % 360) / 60,
          o = (1 - Math.abs(2 * r - 1)) * t,
          a = o * (1 - Math.abs((i % 2) - 1)),
          s = 0,
          u = 0,
          c = 0;
        i >= 0 && i < 1
          ? ((s = o), (u = a))
          : i >= 1 && i < 2
          ? ((s = a), (u = o))
          : i >= 2 && i < 3
          ? ((u = o), (c = a))
          : i >= 3 && i < 4
          ? ((u = a), (c = o))
          : i >= 4 && i < 5
          ? ((s = a), (c = o))
          : i >= 5 && i < 6 && ((s = o), (c = a));
        var f = r - o / 2;
        return n(s + f, u + f, c + f);
      }
      var d = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "639",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32",
        },
        p = /^#[a-fA-F0-9]{6}$/,
        h = /^#[a-fA-F0-9]{8}$/,
        v = /^#[a-fA-F0-9]{3}$/,
        m = /^#[a-fA-F0-9]{4}$/,
        y =
          /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
        g =
          /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
        b =
          /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
        w =
          /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
      function k(e) {
        if ("string" != typeof e) throw new u(3);
        var t = (function (e) {
          if ("string" != typeof e) return e;
          var t = e.toLowerCase();
          return d[t] ? "#" + d[t] : e;
        })(e);
        if (t.match(p))
          return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
          };
        if (t.match(h)) {
          var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
          return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: r,
          };
        }
        if (t.match(v))
          return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
          };
        if (t.match(m)) {
          var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
          return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: n,
          };
        }
        var i = y.exec(t);
        if (i)
          return {
            red: parseInt("" + i[1], 10),
            green: parseInt("" + i[2], 10),
            blue: parseInt("" + i[3], 10),
          };
        var o = g.exec(t.substring(0, 50));
        if (o)
          return {
            red: parseInt("" + o[1], 10),
            green: parseInt("" + o[2], 10),
            blue: parseInt("" + o[3], 10),
            alpha:
              parseFloat("" + o[4]) > 1
                ? parseFloat("" + o[4]) / 100
                : parseFloat("" + o[4]),
          };
        var a = b.exec(t);
        if (a) {
          var s =
              "rgb(" +
              f(
                parseInt("" + a[1], 10),
                parseInt("" + a[2], 10) / 100,
                parseInt("" + a[3], 10) / 100
              ) +
              ")",
            c = y.exec(s);
          if (!c) throw new u(4, t, s);
          return {
            red: parseInt("" + c[1], 10),
            green: parseInt("" + c[2], 10),
            blue: parseInt("" + c[3], 10),
          };
        }
        var l = w.exec(t.substring(0, 50));
        if (l) {
          var k =
              "rgb(" +
              f(
                parseInt("" + l[1], 10),
                parseInt("" + l[2], 10) / 100,
                parseInt("" + l[3], 10) / 100
              ) +
              ")",
            S = y.exec(k);
          if (!S) throw new u(4, t, k);
          return {
            red: parseInt("" + S[1], 10),
            green: parseInt("" + S[2], 10),
            blue: parseInt("" + S[3], 10),
            alpha:
              parseFloat("" + l[4]) > 1
                ? parseFloat("" + l[4]) / 100
                : parseFloat("" + l[4]),
          };
        }
        throw new u(5);
      }
      function S(e) {
        return (function (e) {
          var t,
            r = e.red / 255,
            n = e.green / 255,
            i = e.blue / 255,
            o = Math.max(r, n, i),
            a = Math.min(r, n, i),
            s = (o + a) / 2;
          if (o === a)
            return void 0 !== e.alpha
              ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
              : { hue: 0, saturation: 0, lightness: s };
          var u = o - a,
            c = s > 0.5 ? u / (2 - o - a) : u / (o + a);
          switch (o) {
            case r:
              t = (n - i) / u + (n < i ? 6 : 0);
              break;
            case n:
              t = (i - r) / u + 2;
              break;
            default:
              t = (r - n) / u + 4;
          }
          return ((t *= 60), void 0 !== e.alpha)
            ? { hue: t, saturation: c, lightness: s, alpha: e.alpha }
            : { hue: t, saturation: c, lightness: s };
        })(k(e));
      }
      var _ = function (e) {
        return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? "#" + e[1] + e[3] + e[5]
          : e;
      };
      function O(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t;
      }
      function E(e) {
        return O(Math.round(255 * e));
      }
      function x(e, t, r) {
        return _("#" + E(e) + E(t) + E(r));
      }
      function T(e, t, r) {
        if (
          "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
        )
          return _("#" + O(e) + O(t) + O(r));
        if ("object" == typeof e && void 0 === t && void 0 === r)
          return _("#" + O(e.red) + O(e.green) + O(e.blue));
        throw new u(6);
      }
      function I(e, t, r, n) {
        if ("string" == typeof e && "number" == typeof t) {
          var i = k(e);
          return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
        }
        if (
          "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r &&
          "number" == typeof n
        )
          return n >= 1
            ? T(e, t, r)
            : "rgba(" + e + "," + t + "," + r + "," + n + ")";
        if (
          "object" == typeof e &&
          void 0 === t &&
          void 0 === r &&
          void 0 === n
        )
          return e.alpha >= 1
            ? T(e.red, e.green, e.blue)
            : "rgba(" +
                e.red +
                "," +
                e.green +
                "," +
                e.blue +
                "," +
                e.alpha +
                ")";
        throw new u(7);
      }
      function C(e) {
        if ("object" != typeof e) throw new u(8);
        if (
          "number" == typeof e.red &&
          "number" == typeof e.green &&
          "number" == typeof e.blue &&
          "number" == typeof e.alpha
        )
          return I(e);
        if (
          "number" == typeof e.red &&
          "number" == typeof e.green &&
          "number" == typeof e.blue &&
          ("number" != typeof e.alpha || void 0 === e.alpha)
        )
          return T(e);
        if (
          "number" == typeof e.hue &&
          "number" == typeof e.saturation &&
          "number" == typeof e.lightness &&
          "number" == typeof e.alpha
        )
          return (function (e, t, r, n) {
            if (
              "number" == typeof e &&
              "number" == typeof t &&
              "number" == typeof r &&
              "number" == typeof n
            )
              return n >= 1
                ? f(e, t, r, x)
                : "rgba(" + f(e, t, r) + "," + n + ")";
            if (
              "object" == typeof e &&
              void 0 === t &&
              void 0 === r &&
              void 0 === n
            )
              return e.alpha >= 1
                ? f(e.hue, e.saturation, e.lightness, x)
                : "rgba(" +
                    f(e.hue, e.saturation, e.lightness) +
                    "," +
                    e.alpha +
                    ")";
            throw new u(2);
          })(e);
        if (
          "number" == typeof e.hue &&
          "number" == typeof e.saturation &&
          "number" == typeof e.lightness &&
          ("number" != typeof e.alpha || void 0 === e.alpha)
        )
          return (function (e, t, r) {
            if (
              "number" == typeof e &&
              "number" == typeof t &&
              "number" == typeof r
            )
              return f(e, t, r, x);
            if ("object" == typeof e && void 0 === t && void 0 === r)
              return f(e.hue, e.saturation, e.lightness, x);
            throw new u(1);
          })(e);
        throw new u(8);
      }
      function A(e) {
        return (function e(t, r, n) {
          return function () {
            var i = n.concat(Array.prototype.slice.call(arguments));
            return i.length >= r ? t.apply(this, i) : e(t, r, i);
          };
        })(e, e.length, []);
      }
      function D(e, t, r) {
        return Math.max(e, Math.min(t, r));
      }
      var j = A(function (e, t) {
          if ("transparent" === t) return t;
          var r = S(t);
          return C(
            n({}, r, { lightness: D(0, 1, r.lightness - parseFloat(e)) })
          );
        }),
        P = A(function (e, t) {
          if ("transparent" === t) return t;
          var r = S(t);
          return C(
            n({}, r, { lightness: D(0, 1, r.lightness + parseFloat(e)) })
          );
        }),
        R = A(function (e, t) {
          if ("transparent" === t) return t;
          var r = k(t),
            i = "number" == typeof r.alpha ? r.alpha : 1;
          return I(
            n({}, r, {
              alpha: D(0, 1, +(100 * i - 100 * parseFloat(e)).toFixed(2) / 100),
            })
          );
        });
    },
    4406: function (e) {
      var t,
        r,
        n,
        i = (e.exports = {});
      function o() {
        throw Error("setTimeout has not been defined");
      }
      function a() {
        throw Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (r) {
          try {
            return t.call(null, e, 0);
          } catch (r) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          t = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var u = [],
        c = !1,
        l = -1;
      function f() {
        c &&
          n &&
          ((c = !1), n.length ? (u = n.concat(u)) : (l = -1), u.length && d());
      }
      function d() {
        if (!c) {
          var e = s(f);
          c = !0;
          for (var t = u.length; t; ) {
            for (n = u, u = []; ++l < t; ) n && n[l].run();
            (l = -1), (t = u.length);
          }
          (n = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function h() {}
      (i.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new p(e, t)), 1 !== u.length || c || s(d);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = h),
        (i.addListener = h),
        (i.once = h),
        (i.off = h),
        (i.removeListener = h),
        (i.removeAllListeners = h),
        (i.emit = h),
        (i.prependListener = h),
        (i.prependOnceListener = h),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    3657: function (e, t, r) {
      "use strict";
      var n,
        i,
        o,
        a = r(2784);
      a && "object" == typeof a && "default" in a && a.default;
      var s = new (r(4374))(),
        u = s.getBrowser();
      s.getCPU();
      var c = s.getDevice(),
        l = s.getEngine(),
        f = s.getOS(),
        d = s.getUA(),
        p = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || t;
        },
        h = function () {
          return (
            !!(
              "undefined" != typeof window &&
              (window.navigator || navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        v = function (e) {
          var t = h();
          return (
            t &&
            t.platform &&
            (-1 !== t.platform.indexOf(e) ||
              ("MacIntel" === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        m = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Browser: void 0,
        },
        y = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        g = {
          IOS: "iOS",
          Android: "Android",
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MAC_OS: "Mac OS",
        },
        b =
          ((function (e) {
            m.Mobile, m.Tablet, m.SmartTv, m.Console, m.Wearable, m.Browser;
          })(c.type),
          function () {
            return "string" == typeof d && -1 !== d.indexOf("Edg/");
          }),
        w = function () {
          return c.type === m.Browser;
        },
        k = function () {
          return u.name === y.Edge;
        },
        S = function () {
          return v("iPad");
        },
        _ =
          (c.type,
          m.SmartTv,
          c.type,
          m.Console,
          c.type,
          m.Wearable,
          u.name === y.MobileSafari || S(),
          u.name,
          y.Chromium,
          (function () {
            switch (c.type) {
              case m.Mobile:
              case m.Tablet:
                return !0;
              default:
                return !1;
            }
          })() || S());
      c.type,
        m.Mobile,
        c.type === m.Tablet || S(),
        w(),
        w(),
        f.name,
        g.Android,
        f.name,
        g.WindowsPhone,
        f.name === g.IOS || S(),
        u.name,
        y.Chrome,
        u.name,
        y.Firefox,
        u.name === y.Safari || (u.name, y.MobileSafari),
        u.name,
        y.Opera,
        u.name === y.InternetExplorer || (u.name, y.Ie),
        p(f.version),
        p(f.name),
        p(u.version),
        p(u.major),
        p(u.name),
        p(c.vendor),
        p(c.model),
        p(l.name),
        p(l.version),
        p(d),
        k() || b(),
        u.name,
        y.Yandex,
        p(c.type, "browser"),
        (n = h()) &&
          (/iPad|iPhone|iPod/.test(n.platform) ||
            ("MacIntel" === n.platform && n.maxTouchPoints > 1)) &&
          window.MSStream,
        S(),
        v("iPhone"),
        v("iPod"),
        "string" ==
          typeof (o = (i = h()) && i.userAgent && i.userAgent.toLowerCase()) &&
          /electron/.test(o),
        b(),
        k() && b(),
        f.name,
        g.Windows,
        f.name,
        g.MAC_OS,
        u.name,
        y.MIUI,
        u.name,
        y.SamsungBrowser,
        (t.tq = _);
    },
    4374: function (e, t, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "major",
          f = "model",
          d = "name",
          p = "type",
          h = "vendor",
          v = "version",
          m = "architecture",
          y = "console",
          g = "mobile",
          b = "tablet",
          w = "smarttv",
          k = "wearable",
          S = "embedded",
          _ = "Amazon",
          O = "Apple",
          E = "ASUS",
          x = "BlackBerry",
          T = "Browser",
          I = "Chrome",
          C = "Firefox",
          A = "Google",
          D = "Huawei",
          j = "Microsoft",
          P = "Motorola",
          R = "Opera",
          F = "Samsung",
          M = "Sharp",
          N = "Sony",
          q = "Xiaomi",
          L = "Zebra",
          V = "Facebook",
          z = "Chromium OS",
          Q = "Mac OS",
          B = function (e, t) {
            var r = {};
            for (var n in e)
              t[n] && t[n].length % 2 == 0
                ? (r[n] = t[n].concat(e[n]))
                : (r[n] = e[n]);
            return r;
          },
          G = function (e) {
            for (var t = {}, r = 0; r < e.length; r++)
              t[e[r].toUpperCase()] = e[r];
            return t;
          },
          U = function (e, t) {
            return typeof e === c && -1 !== W(t).indexOf(W(e));
          },
          W = function (e) {
            return e.toLowerCase();
          },
          $ = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 350)
              );
          },
          Y = function (e, t) {
            for (var r, n, i, s, c, l, f = 0; f < t.length && !c; ) {
              var d = t[f],
                p = t[f + 1];
              for (r = n = 0; r < d.length && !c && d[r]; )
                if ((c = d[r++].exec(e)))
                  for (i = 0; i < p.length; i++)
                    (l = c[++n]),
                      typeof (s = p[i]) === u && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = l ? l.replace(s[1], s[2]) : o)
                            : (this[s[0]] = l ? s[1].call(this, l, s[2]) : o)
                          : 4 === s.length &&
                            (this[s[0]] = l
                              ? s[3].call(this, l.replace(s[1], s[2]))
                              : o)
                        : (this[s] = l || o);
              f += 2;
            }
          },
          J = function (e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (U(t[r][n], e)) return "?" === r ? o : r;
              } else if (U(t[r], e)) return "?" === r ? o : r;
            return e;
          },
          K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          H = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [v, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [v, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, v],
              [/opios[\/ ]+([\w\.]+)/i],
              [v, [d, R + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [v, [d, R]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, v],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [v, [d, "UC" + T]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [v, [d, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [v, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [v, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [v, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [v, [d, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + T], v],
              [/\bfocus\/([\w\.]+)/i],
              [v, [d, C + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [v, [d, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [v, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [v, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [v, [d, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [v, [d, "MIUI " + T]],
              [/fxios\/([-\w\.]+)/i],
              [v, [d, C]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360 " + T]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 " + T], v],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], v],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, v],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, V], v],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [d, v],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [v, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [v, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [v, [d, I + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, I + " WebView"], v],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [v, [d, "Android " + T]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, v],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [v, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [v, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  v,
                  J,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, v],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], v],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [v, [d, C + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [d, v],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [v, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, W]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", W]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, W]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [f, [h, F], [p, b]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [f, [h, F], [p, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [h, O], [p, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [f, [h, O], [p, b]],
              [/(macintosh);/i],
              [f, [h, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [h, M], [p, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [h, D], [p, b]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [f, [h, D], [p, g]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [h, q],
                [p, g],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [h, q],
                [p, b],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [f, [h, "OPPO"], [p, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [h, "Vivo"], [p, g]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [f, [h, "Realme"], [p, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [f, [h, P], [p, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [h, P], [p, b]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [h, "LG"], [p, b]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [f, [h, "LG"], [p, g]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [f, [h, "Lenovo"], [p, b]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [h, "Nokia"],
                [p, g],
              ],
              [/(pixel c)\b/i],
              [f, [h, A], [p, b]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [h, A], [p, g]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [f, [h, N], [p, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [h, N],
                [p, b],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [f, [h, "OnePlus"], [p, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [f, [h, _], [p, b]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [h, _],
                [p, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, h, [p, b]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [h, x], [p, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [f, [h, E], [p, b]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [h, E], [p, g]],
              [/(nexus 9)/i],
              [f, [h, "HTC"], [p, b]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [f, /_/g, " "], [p, g]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [h, "Acer"], [p, b]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [h, "Meizu"], [p, g]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, f, [p, g]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, f, [p, b]],
              [/(surface duo)/i],
              [f, [h, j], [p, b]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [h, "Fairphone"], [p, g]],
              [/(u304aa)/i],
              [f, [h, "AT&T"], [p, g]],
              [/\bsie-(\w*)/i],
              [f, [h, "Siemens"], [p, g]],
              [/\b(rct\w+) b/i],
              [f, [h, "RCA"], [p, b]],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [h, "Dell"], [p, b]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [h, "Verizon"], [p, b]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [h, "Barnes & Noble"], [p, b]],
              [/\b(tm\d{3}\w+) b/i],
              [f, [h, "NuVision"], [p, b]],
              [/\b(k88) b/i],
              [f, [h, "ZTE"], [p, b]],
              [/\b(nx\d{3}j) b/i],
              [f, [h, "ZTE"], [p, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [h, "Swiss"], [p, g]],
              [/\b(zur\d{3}) b/i],
              [f, [h, "Swiss"], [p, b]],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [h, "Zeki"], [p, b]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], f, [p, b]],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [h, "Insignia"], [p, b]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [h, "NextBook"], [p, b]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], f, [p, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], f, [p, g]],
              [/\b(ph-1) /i],
              [f, [h, "Essential"], [p, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [h, "Envizen"], [p, b]],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [h, "MachSpeed"], [p, b]],
              [/\btu_(1491) b/i],
              [f, [h, "Rotor"], [p, b]],
              [/(shield[\w ]+) b/i],
              [f, [h, "Nvidia"], [p, b]],
              [/(sprint) (\w+)/i],
              [h, f, [p, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [h, j],
                [p, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [h, L], [p, b]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [h, L], [p, g]],
              [/smart-tv.+(samsung)/i],
              [h, [p, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [h, F],
                [p, w],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, "LG"],
                [p, w],
              ],
              [/(apple) ?tv/i],
              [h, [f, O + " TV"], [p, w]],
              [/crkey/i],
              [
                [f, I + "cast"],
                [h, A],
                [p, w],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [f, [h, _], [p, w]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [h, M], [p, w]],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [h, N], [p, w]],
              [/(mitv-\w{5}) bui/i],
              [f, [h, q], [p, w]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, f, [p, w]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, $],
                [f, $],
                [p, w],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, w]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, f, [p, y]],
              [/droid.+; (shield) bui/i],
              [f, [h, "Nvidia"], [p, y]],
              [/(playstation [345portablevi]+)/i],
              [f, [h, N], [p, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [h, j], [p, y]],
              [/((pebble))app/i],
              [h, f, [p, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [h, O], [p, k]],
              [/droid.+; (glass) \d/i],
              [f, [h, A], [p, k]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [h, L], [p, k]],
              [/(quest( 2| pro)?)/i],
              [f, [h, V], [p, k]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [p, S]],
              [/(aeobc)\b/i],
              [f, [h, _], [p, S]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [f, [p, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [p, b]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, b]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[p, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [v, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [v, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, v],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [v, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, v],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [d, [v, J, K]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [d, "Windows"],
                [v, J, K],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /ios;fbsv\/([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [v, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, Q],
                [v, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [v, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, v],
              [/\(bb(10);/i],
              [v, [d, x]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [v, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [v, [d, C + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [v, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [v, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [v, [d, I + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, z], v],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, v],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], v],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, v],
            ],
          },
          Z = function (e, t) {
            if ((typeof e === u && ((t = e), (e = o)), !(this instanceof Z)))
              return new Z(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              y = r && r.userAgentData ? r.userAgentData : o,
              w = t ? B(H, t) : H,
              k = r && r.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[d] = o),
                  (t[v] = o),
                  Y.call(t, n, w.browser),
                  (t[l] =
                    typeof (e = t[v]) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  k &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == a &&
                    (t[d] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = o), Y.call(e, n, w.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[f] = o),
                  (e[p] = o),
                  Y.call(e, n, w.device),
                  k && !e[p] && y && y.mobile && (e[p] = g),
                  k &&
                    "Macintosh" == e[f] &&
                    r &&
                    typeof r.standalone !== s &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((e[f] = "iPad"), (e[p] = b)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[d] = o), (e[v] = o), Y.call(e, n, w.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[d] = o),
                  (e[v] = o),
                  Y.call(e, n, w.os),
                  k &&
                    !e[d] &&
                    y &&
                    "Unknown" != y.platform &&
                    (e[d] = y.platform
                      .replace(/chrome os/i, z)
                      .replace(/macos/i, Q)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = typeof e === c && e.length > 350 ? $(e, 350) : e), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (Z.VERSION = "0.7.35"),
          (Z.BROWSER = G([d, v, l])),
          (Z.CPU = G([m])),
          (Z.DEVICE = G([f, h, p, y, g, w, b, k, S])),
          (Z.ENGINE = Z.OS = G([d, v])),
          typeof t !== s
            ? (e.exports && (t = e.exports = Z), (t.UAParser = Z))
            : r.amdO
            ? o !==
                (n = function () {
                  return Z;
                }.call(t, r, t, e)) && (e.exports = n)
            : typeof i !== s && (i.UAParser = Z);
        var X = typeof i !== s && (i.jQuery || i.Zepto);
        if (X && !X.ua) {
          var ee = new Z();
          (X.ua = ee.getResult()),
            (X.ua.get = function () {
              return ee.getUA();
            }),
            (X.ua.set = function (e) {
              ee.setUA(e);
              var t = ee.getResult();
              for (var r in t) X.ua[r] = t[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    3711: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e,
            t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            i =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = n || "";
          return (
            i &&
              (a = n
                .toString()
                .trim()
                .replace(
                  /[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,
                  function (e, t, n) {
                    return t > 0 &&
                      t + e.length !== n.length &&
                      e.search(r) > -1 &&
                      ":" !== n.charAt(t - 2) &&
                      ("-" !== n.charAt(t + e.length) ||
                        "-" === n.charAt(t - 1)) &&
                      0 > n.charAt(t - 1).search(/[^\s-]/)
                      ? e.toLowerCase()
                      : e.substr(1).search(/[A-Z]|\../) > -1
                      ? e
                      : e.charAt(0).toUpperCase() + e.substr(1);
                  }
                )),
            o &&
              (a =
                "string" == typeof (t = e = a) && -1 !== t.indexOf("@")
                  ? (console.warn(
                      "This arg looks like an email address, redacting."
                    ),
                    "REDACTED (Potential Email Address)")
                  : e),
            a
          );
        });
      var r =
        /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    },
    2868: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.GA4 = void 0);
      var n = c(r(7096)),
        i = c(r(3711)),
        o = [
          "eventCategory",
          "eventAction",
          "eventLabel",
          "eventValue",
          "hitType",
        ],
        a = ["title", "location"],
        s = ["page", "hitType"],
        u = [
          "action",
          "category",
          "label",
          "value",
          "nonInteraction",
          "transport",
        ];
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          v(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function v(e, t) {
        if (e) {
          if ("string" == typeof e) return m(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return m(e, t);
        }
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function g(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var b = (function () {
        var e, t;
        function r() {
          var e = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, r),
            g(this, "reset", function () {
              (e.isInitialized = !1),
                (e._testMode = !1),
                e._currentMeasurementId,
                (e._hasLoadedGA = !1),
                (e._isQueuing = !1),
                (e._queueGtag = []);
            }),
            g(this, "_gtag", function () {
              for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
                r[i] = arguments[i];
              e._testMode
                ? e._queueGtag.push(r)
                : e._isQueuing
                ? e._queueGtag.push(r)
                : n.default.apply(void 0, r);
            }),
            g(this, "_loadGA", function (t, r) {
              if (
                "undefined" != typeof window &&
                "undefined" != typeof document &&
                !e._hasLoadedGA
              ) {
                var n = document.createElement("script");
                (n.async = !0),
                  (n.src =
                    "https://www.googletagmanager.com/gtag/js?id=".concat(t)),
                  r && n.setAttribute("nonce", r),
                  document.body.appendChild(n),
                  (window.dataLayer = window.dataLayer || []),
                  (window.gtag = function () {
                    window.dataLayer.push(arguments);
                  }),
                  (e._hasLoadedGA = !0);
              }
            }),
            g(this, "_toGtagOptions", function (e) {
              if (e) {
                var t = {
                  cookieUpdate: "cookie_update",
                  cookieExpires: "cookie_expires",
                  cookieDomain: "cookie_domain",
                  cookieFlags: "cookie_flags",
                  userId: "user_id",
                  clientId: "client_id",
                  anonymizeIp: "anonymize_ip",
                  contentGroup1: "content_group1",
                  contentGroup2: "content_group2",
                  contentGroup3: "content_group3",
                  contentGroup4: "content_group4",
                  contentGroup5: "content_group5",
                  allowAdFeatures: "allow_google_signals",
                  allowAdPersonalizationSignals:
                    "allow_ad_personalization_signals",
                  nonInteraction: "non_interaction",
                  page: "page_path",
                  hitCallback: "event_callback",
                };
                return Object.entries(e).reduce(function (e, r) {
                  var n =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(r) ||
                      (function (e, t) {
                        var r,
                          n,
                          i =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                        if (null != i) {
                          var o = [],
                            a = !0,
                            s = !1;
                          try {
                            for (
                              i = i.call(e);
                              !(a = (r = i.next()).done) &&
                              (o.push(r.value), !t || o.length !== t);
                              a = !0
                            );
                          } catch (e) {
                            (s = !0), (n = e);
                          } finally {
                            try {
                              a || null == i.return || i.return();
                            } finally {
                              if (s) throw n;
                            }
                          }
                          return o;
                        }
                      })(r, 2) ||
                      v(r, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    i = n[0],
                    o = n[1];
                  return t[i] ? (e[t[i]] = o) : (e[i] = o), e;
                }, {});
              }
            }),
            g(this, "initialize", function (t) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!t) throw Error("Require GA_MEASUREMENT_ID");
              var n = "string" == typeof t ? [{ trackingId: t }] : t;
              e._currentMeasurementId = n[0].trackingId;
              var i = r.gaOptions,
                o = r.gtagOptions,
                a = r.legacyDimensionMetric,
                s = void 0 === a || a,
                u = r.nonce,
                c = r.testMode,
                l = void 0 !== c && c;
              if (
                ((e._testMode = l),
                l || e._loadGA(e._currentMeasurementId, u),
                e.isInitialized ||
                  (e._gtag("js", new Date()),
                  n.forEach(function (t) {
                    var r = e._appendCustomMap(
                      h(
                        h(
                          h(
                            { send_page_view: !1 },
                            e._toGtagOptions(h(h({}, i), t.gaOptions))
                          ),
                          o
                        ),
                        t.gtagOptions
                      ),
                      s
                    );
                    e._gtag("config", t.trackingId, r);
                  })),
                (e.isInitialized = !0),
                !l)
              ) {
                var f = d(e._queueGtag);
                for (e._queueGtag = [], e._isQueuing = !1; f.length; ) {
                  var p = f.shift();
                  e._gtag.apply(e, d(p)), "get" === p[0] && (e._isQueuing = !0);
                }
              }
            }),
            g(this, "set", function (t) {
              if (!t) {
                console.warn("`fieldsObject` is required in .set()");
                return;
              }
              if ("object" !== f(t)) {
                console.warn("Expected `fieldsObject` arg to be an Object");
                return;
              }
              0 === Object.keys(t).length &&
                console.warn("empty `fieldsObject` given to .set()"),
                e._gaCommand("set", t);
            }),
            g(this, "_gaCommandSendEvent", function (t, r, n, i, o) {
              e._gtag(
                "event",
                r,
                h(
                  h(
                    { event_category: t, event_label: n, value: i },
                    o && { non_interaction: o.nonInteraction }
                  ),
                  e._toGtagOptions(o)
                )
              );
            }),
            g(this, "_gaCommandSendEventParameters", function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              if ("string" == typeof r[0])
                e._gaCommandSendEvent.apply(e, d(r.slice(1)));
              else {
                var i = r[0],
                  a = i.eventCategory,
                  s = i.eventAction,
                  u = i.eventLabel,
                  c = i.eventValue,
                  f = (i.hitType, l(i, o));
                e._gaCommandSendEvent(a, s, u, c, f);
              }
            }),
            g(this, "_gaCommandSendTiming", function (t, r, n, i) {
              e._gtag("event", "timing_complete", {
                name: r,
                value: n,
                event_category: t,
                event_label: i,
              });
            }),
            g(this, "_gaCommandSendPageview", function (t, r) {
              if (r && Object.keys(r).length) {
                var n = e._toGtagOptions(r),
                  i = n.title,
                  o = n.location,
                  s = l(n, a);
                e._gtag(
                  "event",
                  "page_view",
                  h(
                    h(
                      h(h({}, t && { page_path: t }), i && { page_title: i }),
                      o && { page_location: o }
                    ),
                    s
                  )
                );
              } else t ? e._gtag("event", "page_view", { page_path: t }) : e._gtag("event", "page_view");
            }),
            g(this, "_gaCommandSendPageviewParameters", function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              if ("string" == typeof r[0])
                e._gaCommandSendPageview.apply(e, d(r.slice(1)));
              else {
                var i = r[0],
                  o = i.page,
                  a = (i.hitType, l(i, s));
                e._gaCommandSendPageview(o, a);
              }
            }),
            g(this, "_gaCommandSend", function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              var i = "string" == typeof r[0] ? r[0] : r[0].hitType;
              switch (i) {
                case "event":
                  e._gaCommandSendEventParameters.apply(e, r);
                  break;
                case "pageview":
                  e._gaCommandSendPageviewParameters.apply(e, r);
                  break;
                case "timing":
                  e._gaCommandSendTiming.apply(e, d(r.slice(1)));
                  break;
                case "screenview":
                case "transaction":
                case "item":
                case "social":
                case "exception":
                  console.warn("Unsupported send command: ".concat(i));
                  break;
                default:
                  console.warn("Send command doesn't exist: ".concat(i));
              }
            }),
            g(this, "_gaCommandSet", function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              "string" == typeof r[0] && (r[0] = g({}, r[0], r[1])),
                e._gtag("set", e._toGtagOptions(r[0]));
            }),
            g(this, "_gaCommand", function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
                i < r;
                i++
              )
                n[i - 1] = arguments[i];
              switch (t) {
                case "send":
                  e._gaCommandSend.apply(e, n);
                  break;
                case "set":
                  e._gaCommandSet.apply(e, n);
                  break;
                default:
                  console.warn("Command doesn't exist: ".concat(t));
              }
            }),
            g(this, "ga", function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              if ("string" == typeof r[0]) e._gaCommand.apply(e, r);
              else {
                var i = r[0];
                e._gtag(
                  "get",
                  e._currentMeasurementId,
                  "client_id",
                  function (t) {
                    e._isQueuing = !1;
                    var r = e._queueGtag;
                    for (
                      i({
                        get: function (r) {
                          return "clientId" === r
                            ? t
                            : "trackingId" === r
                            ? e._currentMeasurementId
                            : "apiVersion" === r
                            ? "1"
                            : void 0;
                        },
                      });
                      r.length;

                    ) {
                      var n = r.shift();
                      e._gtag.apply(e, d(n));
                    }
                  }
                ),
                  (e._isQueuing = !0);
              }
              return e.ga;
            }),
            g(this, "event", function (t, r) {
              if ("string" == typeof t)
                e._gtag("event", t, e._toGtagOptions(r));
              else {
                var n = t.action,
                  o = t.category,
                  a = t.label,
                  s = t.value,
                  c = t.nonInteraction,
                  f = t.transport,
                  d = l(t, u);
                if (!o || !n) {
                  console.warn(
                    "args.category AND args.action are required in event()"
                  );
                  return;
                }
                var p = {
                  hitType: "event",
                  eventCategory: (0, i.default)(o),
                  eventAction: (0, i.default)(n),
                };
                a && (p.eventLabel = (0, i.default)(a)),
                  void 0 !== s &&
                    ("number" != typeof s
                      ? console.warn(
                          "Expected `args.value` arg to be a Number."
                        )
                      : (p.eventValue = s)),
                  void 0 !== c &&
                    ("boolean" != typeof c
                      ? console.warn("`args.nonInteraction` must be a boolean.")
                      : (p.nonInteraction = c)),
                  void 0 !== f &&
                    ("string" != typeof f
                      ? console.warn("`args.transport` must be a string.")
                      : (-1 === ["beacon", "xhr", "image"].indexOf(f) &&
                          console.warn(
                            "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"
                          ),
                        (p.transport = f))),
                  Object.keys(d)
                    .filter(function (e) {
                      return "dimension" === e.substr(0, 9);
                    })
                    .forEach(function (e) {
                      p[e] = d[e];
                    }),
                  Object.keys(d)
                    .filter(function (e) {
                      return "metric" === e.substr(0, 6);
                    })
                    .forEach(function (e) {
                      p[e] = d[e];
                    }),
                  e._gaCommand("send", p);
              }
            }),
            g(this, "send", function (t) {
              e._gaCommand("send", t);
            }),
            g(this, "pageview", function (t, r, n) {
              var i = null == t ? void 0 : t.trim();
              if ("" === i) {
                console.warn("path cannot be an empty string in .pageview()");
                return;
              }
              e._gaCommand("send", "pageview", i, { title: n });
            }),
            this.reset();
        }
        return (
          (e = [
            {
              key: "gtag",
              value: function () {
                this._gtag.apply(this, arguments);
              },
            },
            {
              key: "_appendCustomMap",
              value: function (e) {
                var t =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
                if (!t) return e;
                e.custom_map || (e.custom_map = {});
                for (var r = 1; r <= 200; r++)
                  e.custom_map["dimension".concat(r)] ||
                    (e.custom_map["dimension".concat(r)] = "dimension".concat(
                      r
                    )),
                    e.custom_map["metric".concat(r)] ||
                      (e.custom_map["metric".concat(r)] = "metric".concat(r));
                return e;
              },
            },
            {
              key: "outboundLink",
              value: function (e, t) {
                var r = e.label;
                if ("function" != typeof t) {
                  console.warn("hitCallback function is required");
                  return;
                }
                if (!r) {
                  console.warn("args.label is required in outboundLink()");
                  return;
                }
                var n = {
                    hitType: "event",
                    eventCategory: "Outbound",
                    eventAction: "Click",
                    eventLabel: (0, i.default)(r),
                  },
                  o = !1,
                  a = setTimeout(function () {
                    (o = !0), t();
                  }, 250);
                (n.hitCallback = function () {
                  clearTimeout(a), o || t();
                }),
                  this._gaCommand("send", n);
              },
            },
          ]),
          y(r.prototype, e),
          t && y(r, t),
          r
        );
      })();
      t.GA4 = b;
      var w = new b();
      t.default = w;
    },
    7096: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function () {
          for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          "undefined" != typeof window &&
            (void 0 === window.gtag &&
              ((window.dataLayer = window.dataLayer || []),
              (window.gtag = function () {
                window.dataLayer.push(arguments);
              })),
            (e = window).gtag.apply(e, r));
        });
    },
    1877: function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      t.ZP = void 0;
      var i = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return { default: e };
        var r = o(t);
        if (r && r.has(e)) return r.get(e);
        var i = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var u = a ? Object.getOwnPropertyDescriptor(e, s) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(i, s, u)
              : (i[s] = e[s]);
          }
        return (i.default = e), r && r.set(e, i), i;
      })(r(2868));
      function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (o = function (e) {
          return e ? r : t;
        })(e);
      }
      i.GA4;
      var a = i.default;
      t.ZP = a;
    },
    6866: function (e, t) {
      "use strict";
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r,
        n = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        l = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        h = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        m = Symbol.for("react.offscreen");
      (r = Symbol.for("react.module.reference")),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === s ||
            e === a ||
            e === d ||
            e === p ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === r ||
                void 0 !== e.getModuleId))
          );
        }),
        (t.typeOf = function (e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case s:
                  case a:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case c:
                      case f:
                      case v:
                      case h:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        });
    },
    8570: function (e, t, r) {
      "use strict";
      e.exports = r(6866);
    },
    8665: function (e) {
      e.exports = function (e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!s(c)) return !1;
          var l = e[c],
            f = t[c];
          if (
            !1 === (i = r ? r.call(n, l, f, c) : void 0) ||
            (void 0 === i && l !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    5505: function (e, t, r) {
      "use strict";
      r.d(t, {
        vJ: function () {
          return ej;
        },
        iv: function () {
          return ew;
        },
        ZP: function () {
          return eR;
        },
        F4: function () {
          return eP;
        },
      });
      var n,
        i,
        o = r(8570),
        a = r(2784),
        s = r(8665),
        u = r.n(s),
        c = function (e) {
          function t(e, t, n) {
            var i = t.trim().split(h);
            t = i;
            var o = i.length,
              a = e.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === a ? "" : e[0] + " "; s < o; ++s)
                  t[s] = r(e, t[s], n).trim();
                break;
              default:
                var u = (s = 0);
                for (t = []; s < o; ++s)
                  for (var c = 0; c < a; ++c)
                    t[u++] = r(e[c] + " ", i[s], n).trim();
            }
            return t;
          }
          function r(e, t, r) {
            var n = t.charCodeAt(0);
            switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
              case 38:
                return t.replace(v, "$1" + e.trim());
              case 58:
                return e.trim() + t.replace(v, "$1" + e.trim());
              default:
                if (0 < 1 * r && 0 < t.indexOf("\f"))
                  return t.replace(
                    v,
                    (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                  );
            }
            return e + t;
          }
          function n(e, t, r, o) {
            var a = e + ";",
              s = 2 * t + 3 * r + 4 * o;
            if (944 === s) {
              e = a.indexOf(":", 9) + 1;
              var u = a.substring(e, a.length - 1).trim();
              return (
                (u = a.substring(0, e).trim() + u + ";"),
                1 === C || (2 === C && i(u, 1)) ? "-webkit-" + u + u : u
              );
            }
            if (0 === C || (2 === C && !i(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(E, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (u = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  u +
                  a
                );
              case 1005:
                return d.test(a)
                  ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((t = (u = a.substring(13).trim()).indexOf("-") + 1),
                  u.charCodeAt(0) + u.charCodeAt(t))
                ) {
                  case 226:
                    u = a.replace(b, "tb");
                    break;
                  case 232:
                    u = a.replace(b, "tb-rl");
                    break;
                  case 220:
                    u = a.replace(b, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + u + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((t = (a = e).length - 10),
                  (s =
                    (u = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                      .substring(e.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | u.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > u.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(u, "-webkit-" + u) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        u,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      a.replace(u, "-webkit-" + u) +
                      ";" +
                      a.replace(u, "-ms-" + u + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (u = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          u +
                          "-ms-flex-" +
                          u +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(S, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(S, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === O.test(e))
                  return 115 ===
                    (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? n(
                        e.replace("stretch", "fill-available"),
                        t,
                        r,
                        o
                      ).replace(":fill-available", ":stretch")
                    : a.replace(u, "-webkit-" + u) +
                        a.replace(u, "-moz-" + u.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === r + o &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(p, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function i(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
              n = e.substring(0, 3 !== t ? r : 10);
            return (
              (r = e.substring(r + 1, e.length - 1)),
              P(2 !== t ? n : n.replace(_, "$1"), r, t)
            );
          }
          function o(e, t) {
            var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";"
              ? r.replace(k, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function a(e, t, r, n, i, o, a, s, c, l) {
            for (var f, d = 0, p = t; d < j; ++d)
              switch ((f = D[d].call(u, e, p, r, n, i, o, a, s, c, l))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  p = f;
              }
            if (p !== t) return p;
          }
          function s(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((P = null),
                e
                  ? "function" != typeof e
                    ? (C = 1)
                    : ((C = 2), (P = e))
                  : (C = 0)),
              s
            );
          }
          function u(e, r) {
            var s = e;
            if ((33 > s.charCodeAt(0) && (s = s.trim()), (s = [s]), 0 < j)) {
              var u = a(-1, r, s, s, T, x, 0, 0, 0, 0);
              void 0 !== u && "string" == typeof u && (r = u);
            }
            var f = (function e(r, s, u, f, d) {
              for (
                var p,
                  h,
                  v,
                  b,
                  k,
                  S = 0,
                  _ = 0,
                  O = 0,
                  E = 0,
                  D = 0,
                  P = 0,
                  F = (v = p = 0),
                  M = 0,
                  N = 0,
                  q = 0,
                  L = 0,
                  V = u.length,
                  z = V - 1,
                  Q = "",
                  B = "",
                  G = "",
                  U = "";
                M < V;

              ) {
                if (
                  ((h = u.charCodeAt(M)),
                  M === z &&
                    0 !== _ + E + O + S &&
                    (0 !== _ && (h = 47 === _ ? 10 : 47),
                    (E = O = S = 0),
                    V++,
                    z++),
                  0 === _ + E + O + S)
                ) {
                  if (
                    M === z &&
                    (0 < N && (Q = Q.replace(l, "")), 0 < Q.trim().length)
                  ) {
                    switch (h) {
                      case 32:
                      case 9:
                      case 59:
                      case 13:
                      case 10:
                        break;
                      default:
                        Q += u.charAt(M);
                    }
                    h = 59;
                  }
                  switch (h) {
                    case 123:
                      for (
                        p = (Q = Q.trim()).charCodeAt(0), v = 1, L = ++M;
                        M < V;

                      ) {
                        switch ((h = u.charCodeAt(M))) {
                          case 123:
                            v++;
                            break;
                          case 125:
                            v--;
                            break;
                          case 47:
                            switch ((h = u.charCodeAt(M + 1))) {
                              case 42:
                              case 47:
                                e: {
                                  for (F = M + 1; F < z; ++F)
                                    switch (u.charCodeAt(F)) {
                                      case 47:
                                        if (
                                          42 === h &&
                                          42 === u.charCodeAt(F - 1) &&
                                          M + 2 !== F
                                        ) {
                                          M = F + 1;
                                          break e;
                                        }
                                        break;
                                      case 10:
                                        if (47 === h) {
                                          M = F + 1;
                                          break e;
                                        }
                                    }
                                  M = F;
                                }
                            }
                            break;
                          case 91:
                            h++;
                          case 40:
                            h++;
                          case 34:
                          case 39:
                            for (; M++ < z && u.charCodeAt(M) !== h; );
                        }
                        if (0 === v) break;
                        M++;
                      }
                      if (
                        ((v = u.substring(L, M)),
                        0 === p &&
                          (p = (Q = Q.replace(c, "").trim()).charCodeAt(0)),
                        64 === p)
                      ) {
                        switch (
                          (0 < N && (Q = Q.replace(l, "")),
                          (h = Q.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            N = s;
                            break;
                          default:
                            N = A;
                        }
                        if (
                          ((L = (v = e(s, N, v, h, d + 1)).length),
                          0 < j &&
                            ((k = a(
                              3,
                              v,
                              (N = t(A, Q, q)),
                              s,
                              T,
                              x,
                              L,
                              h,
                              d,
                              f
                            )),
                            (Q = N.join("")),
                            void 0 !== k &&
                              0 === (L = (v = k.trim()).length) &&
                              ((h = 0), (v = ""))),
                          0 < L)
                        )
                          switch (h) {
                            case 115:
                              Q = Q.replace(w, o);
                            case 100:
                            case 109:
                            case 45:
                              v = Q + "{" + v + "}";
                              break;
                            case 107:
                              (v = (Q = Q.replace(m, "$1 $2")) + "{" + v + "}"),
                                (v =
                                  1 === C || (2 === C && i("@" + v, 3))
                                    ? "@-webkit-" + v + "@" + v
                                    : "@" + v);
                              break;
                            default:
                              (v = Q + v), 112 === f && ((B += v), (v = ""));
                          }
                        else v = "";
                      } else v = e(s, t(s, Q, q), v, f, d + 1);
                      (G += v),
                        (v = q = N = F = p = 0),
                        (Q = ""),
                        (h = u.charCodeAt(++M));
                      break;
                    case 125:
                    case 59:
                      if (
                        1 <
                        (L = (Q = (0 < N ? Q.replace(l, "") : Q).trim()).length)
                      )
                        switch (
                          (0 === F &&
                            (45 === (p = Q.charCodeAt(0)) ||
                              (96 < p && 123 > p)) &&
                            (L = (Q = Q.replace(" ", ":")).length),
                          0 < j &&
                            void 0 !==
                              (k = a(1, Q, s, r, T, x, B.length, f, d, f)) &&
                            0 === (L = (Q = k.trim()).length) &&
                            (Q = "\x00\x00"),
                          (p = Q.charCodeAt(0)),
                          (h = Q.charCodeAt(1)),
                          p)
                        ) {
                          case 0:
                            break;
                          case 64:
                            if (105 === h || 99 === h) {
                              U += Q + u.charAt(M);
                              break;
                            }
                          default:
                            58 !== Q.charCodeAt(L - 1) &&
                              (B += n(Q, p, h, Q.charCodeAt(2)));
                        }
                      (q = N = F = p = 0), (Q = ""), (h = u.charCodeAt(++M));
                  }
                }
                switch (h) {
                  case 13:
                  case 10:
                    47 === _
                      ? (_ = 0)
                      : 0 === 1 + p &&
                        107 !== f &&
                        0 < Q.length &&
                        ((N = 1), (Q += "\x00")),
                      0 < j * R && a(0, Q, s, r, T, x, B.length, f, d, f),
                      (x = 1),
                      T++;
                    break;
                  case 59:
                  case 125:
                    if (0 === _ + E + O + S) {
                      x++;
                      break;
                    }
                  default:
                    switch ((x++, (b = u.charAt(M)), h)) {
                      case 9:
                      case 32:
                        if (0 === E + S + _)
                          switch (D) {
                            case 44:
                            case 58:
                            case 9:
                            case 32:
                              b = "";
                              break;
                            default:
                              32 !== h && (b = " ");
                          }
                        break;
                      case 0:
                        b = "\\0";
                        break;
                      case 12:
                        b = "\\f";
                        break;
                      case 11:
                        b = "\\v";
                        break;
                      case 38:
                        0 === E + _ + S && ((N = q = 1), (b = "\f" + b));
                        break;
                      case 108:
                        if (0 === E + _ + S + I && 0 < F)
                          switch (M - F) {
                            case 2:
                              112 === D &&
                                58 === u.charCodeAt(M - 3) &&
                                (I = D);
                            case 8:
                              111 === P && (I = P);
                          }
                        break;
                      case 58:
                        0 === E + _ + S && (F = M);
                        break;
                      case 44:
                        0 === _ + O + E + S && ((N = 1), (b += "\r"));
                        break;
                      case 34:
                      case 39:
                        0 === _ && (E = E === h ? 0 : 0 === E ? h : E);
                        break;
                      case 91:
                        0 === E + _ + O && S++;
                        break;
                      case 93:
                        0 === E + _ + O && S--;
                        break;
                      case 41:
                        0 === E + _ + S && O--;
                        break;
                      case 40:
                        0 === E + _ + S &&
                          (0 === p && (2 * D + 3 * P == 533 || (p = 1)), O++);
                        break;
                      case 64:
                        0 === _ + O + E + S + F + v && (v = 1);
                        break;
                      case 42:
                      case 47:
                        if (!(0 < E + S + O))
                          switch (_) {
                            case 0:
                              switch (2 * h + 3 * u.charCodeAt(M + 1)) {
                                case 235:
                                  _ = 47;
                                  break;
                                case 220:
                                  (L = M), (_ = 42);
                              }
                              break;
                            case 42:
                              47 === h &&
                                42 === D &&
                                L + 2 !== M &&
                                (33 === u.charCodeAt(L + 2) &&
                                  (B += u.substring(L, M + 1)),
                                (b = ""),
                                (_ = 0));
                          }
                    }
                    0 === _ && (Q += b);
                }
                (P = D), (D = h), M++;
              }
              if (0 < (L = B.length)) {
                if (
                  ((N = s),
                  0 < j &&
                    void 0 !== (k = a(2, B, N, r, T, x, L, f, d, f)) &&
                    0 === (B = k).length)
                )
                  return U + B + G;
                if (((B = N.join(",") + "{" + B + "}"), 0 != C * I)) {
                  switch ((2 !== C || i(B, 2) || (I = 0), I)) {
                    case 111:
                      B = B.replace(g, ":-moz-$1") + B;
                      break;
                    case 112:
                      B =
                        B.replace(y, "::-webkit-input-$1") +
                        B.replace(y, "::-moz-$1") +
                        B.replace(y, ":-ms-input-$1") +
                        B;
                  }
                  I = 0;
                }
              }
              return U + B + G;
            })(A, s, r, 0, 0);
            return (
              0 < j &&
                void 0 !== (u = a(-2, f, s, s, T, x, f.length, 0, 0, 0)) &&
                (f = u),
              (I = 0),
              (x = T = 1),
              f
            );
          }
          var c = /^\0+/g,
            l = /[\0\r\f]/g,
            f = /: */g,
            d = /zoo|gra/,
            p = /([,: ])(transform)/g,
            h = /,\r+?/g,
            v = /([\t\r\n ])*\f?&/g,
            m = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            g = /:(read-only)/g,
            b = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            k = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            _ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            O = /stretch|:\s*\w+\-(?:conte|avail)/,
            E = /([^-])(image-set\()/,
            x = 1,
            T = 1,
            I = 0,
            C = 1,
            A = [],
            D = [],
            j = 0,
            P = null,
            R = 0;
          return (
            (u.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  j = D.length = 0;
                  break;
                default:
                  if ("function" == typeof t) D[j++] = t;
                  else if ("object" == typeof t)
                    for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                  else R = 0 | !!t;
              }
              return e;
            }),
            (u.set = s),
            void 0 !== e && s(e),
            u
          );
        },
        l = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        f =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        d =
          ((n = Object.create(null)),
          function (e) {
            return (
              void 0 === n[e] &&
                (n[e] =
                  f.test(e) ||
                  (111 === e.charCodeAt(0) &&
                    110 === e.charCodeAt(1) &&
                    91 > e.charCodeAt(2))),
              n[e]
            );
          }),
        p = r(3463),
        h = r.n(p),
        v = r(4406);
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var y = function (e, t) {
          for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
            r.push(t[n], e[n + 1]);
          return r;
        },
        g = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, o.typeOf)(e)
          );
        },
        b = Object.freeze([]),
        w = Object.freeze({});
      function k(e) {
        return "function" == typeof e;
      }
      function S(e) {
        return e.displayName || e.name || "Component";
      }
      function _(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var O =
          (void 0 !== v && (v.env.REACT_APP_SC_ATTR || v.env.SC_ATTR)) ||
          "data-styled",
        E = "undefined" != typeof window && "HTMLElement" in window,
        x = !!("boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : void 0 !== v &&
            void 0 !== v.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== v.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== v.env.REACT_APP_SC_DISABLE_SPEEDY &&
            v.env.REACT_APP_SC_DISABLE_SPEEDY
          : void 0 !== v &&
            void 0 !== v.env.SC_DISABLE_SPEEDY &&
            "" !== v.env.SC_DISABLE_SPEEDY &&
            "false" !== v.env.SC_DISABLE_SPEEDY &&
            v.env.SC_DISABLE_SPEEDY),
        T = {};
      function I(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw Error(
          "An error occurred. See https://git.io/JUIaE#" +
            e +
            " for more information." +
            (r.length > 0 ? " Args: " + r.join(", ") : "")
        );
      }
      var C = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, n = r.length, i = n; e >= i; )
                  (i <<= 1) < 0 && I(16, "" + e);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(r),
                  (this.length = i);
                for (var o = n; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(e + 1), s = 0, u = t.length;
                s < u;
                s++
              )
                this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++, a++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  n = r + t;
                this.groupSizes[e] = 0;
                for (var i = r; i < n; i++) this.tag.deleteRule(r);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  i = n + r,
                  o = n;
                o < i;
                o++
              )
                t += this.tag.getRule(o) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        A = new Map(),
        D = new Map(),
        j = 1,
        P = function (e) {
          if (A.has(e)) return A.get(e);
          for (; D.has(j); ) j++;
          var t = j++;
          return A.set(e, t), D.set(t, e), t;
        },
        R = function (e, t) {
          t >= j && (j = t + 1), A.set(e, t), D.set(t, e);
        },
        F = "style[" + O + '][data-styled-version="5.3.6"]',
        M = RegExp("^" + O + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        N = function (e, t, r) {
          for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
            (n = i[o]) && e.registerName(t, n);
        },
        q = function (e, t) {
          for (
            var r = (t.textContent || "").split("/*!sc*/\n"),
              n = [],
              i = 0,
              o = r.length;
            i < o;
            i++
          ) {
            var a = r[i].trim();
            if (a) {
              var s = a.match(M);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== u &&
                  (R(c, u), N(e, c, s[3]), e.getTag().insertRules(u, n)),
                  (n.length = 0);
              } else n.push(a);
            }
          }
        },
        L = function () {
          return r.nc;
        },
        V = function (e) {
          var t = document.head,
            r = e || t,
            n = document.createElement("style"),
            i = (function (e) {
              for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                var n = t[r];
                if (n && 1 === n.nodeType && n.hasAttribute(O)) return n;
              }
            })(r),
            o = void 0 !== i ? i.nextSibling : null;
          n.setAttribute(O, "active"),
            n.setAttribute("data-styled-version", "5.3.6");
          var a = L();
          return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
        },
        z = (function () {
          function e(e) {
            var t = (this.element = V(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, n = t.length;
                  r < n;
                  r++
                ) {
                  var i = t[r];
                  if (i.ownerNode === e) return i;
                }
                I(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && "string" == typeof t.cssText
                ? t.cssText
                : "";
            }),
            e
          );
        })(),
        Q = (function () {
          function e(e) {
            var t = (this.element = V(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var r = document.createTextNode(t),
                  n = this.nodes[e];
                return (
                  this.element.insertBefore(r, n || null), this.length++, !0
                );
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        B = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        G = E,
        U = { isServer: !E, useCSSOMInjection: !x },
        W = (function () {
          function e(e, t, r) {
            void 0 === e && (e = w),
              void 0 === t && (t = {}),
              (this.options = m({}, U, {}, e)),
              (this.gs = t),
              (this.names = new Map(r)),
              (this.server = !!e.isServer),
              !this.server &&
                E &&
                G &&
                ((G = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(F), r = 0, n = t.length;
                    r < n;
                    r++
                  ) {
                    var i = t[r];
                    i &&
                      "active" !== i.getAttribute(O) &&
                      (q(e, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return P(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  m({}, this.options, {}, t),
                  this.gs,
                  (r && this.names) || void 0
                )
              );
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              var e, t, r, n;
              return (
                this.tag ||
                (this.tag =
                  ((t = (e = this.options).isServer),
                  (r = e.useCSSOMInjection),
                  (n = e.target),
                  new C(t ? new B(n) : r ? new z(n) : new Q(n))))
              );
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((P(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (t.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(P(e), r);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(P(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.getTag(), r = t.length, n = "", i = 0;
                  i < r;
                  i++
                ) {
                  var o,
                    a = ((o = i), D.get(o));
                  if (void 0 !== a) {
                    var s = e.names.get(a),
                      u = t.getGroup(i);
                    if (s && u && s.size) {
                      var c = O + ".g" + i + '[id="' + a + '"]',
                        l = "";
                      void 0 !== s &&
                        s.forEach(function (e) {
                          e.length > 0 && (l += e + ",");
                        }),
                        (n += "" + u + c + '{content:"' + l + '"}/*!sc*/\n');
                    }
                  }
                }
                return n;
              })(this);
            }),
            e
          );
        })(),
        $ = /(a)(d)/gi,
        Y = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function J(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = Y(t % 52) + r;
        return (Y(t % 52) + r).replace($, "$1-$2");
      }
      var K = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        H = function (e) {
          return K(5381, e);
        };
      function Z(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (k(r) && !_(r)) return !1;
        }
        return !0;
      }
      var X = H("5.3.6"),
        ee = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && Z(e)),
              (this.componentId = t),
              (this.baseHash = K(X, t)),
              (this.baseStyle = r),
              W.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var n = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                this.isStatic && !r.hash)
              ) {
                if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = eg(this.rules, e, t, r).join(""),
                    a = J(K(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(n, a)) {
                    var s = r(o, "." + a, void 0, n);
                    t.insertRules(n, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              } else {
                for (
                  var u = this.rules.length,
                    c = K(this.baseHash, r.hash),
                    l = "",
                    f = 0;
                  f < u;
                  f++
                ) {
                  var d = this.rules[f];
                  if ("string" == typeof d) l += d;
                  else if (d) {
                    var p = eg(d, e, t, r),
                      h = Array.isArray(p) ? p.join("") : p;
                    (c = K(c, h + f)), (l += h);
                  }
                }
                if (l) {
                  var v = J(c >>> 0);
                  if (!t.hasNameForId(n, v)) {
                    var m = r(l, "." + v, void 0, n);
                    t.insertRules(n, v, m);
                  }
                  i.push(v);
                }
              }
              return i.join(" ");
            }),
            e
          );
        })(),
        et = /^\s*\/\/.*$/gm,
        er = [":", "[", ".", "#"];
      function en(e) {
        var t,
          r,
          n,
          i,
          o = void 0 === e ? w : e,
          a = o.options,
          s = void 0 === a ? w : a,
          u = o.plugins,
          l = void 0 === u ? b : u,
          f = new c(s),
          d = [],
          p = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (r, n, i, o, a, s, u, c, l, f) {
              switch (r) {
                case 1:
                  if (0 === l && 64 === n.charCodeAt(0)) return e(n + ";"), "";
                  break;
                case 2:
                  if (0 === c) return n + "/*|*/";
                  break;
                case 3:
                  switch (c) {
                    case 102:
                    case 112:
                      return e(i[0] + n), "";
                    default:
                      return n + (0 === f ? "/*|*/" : "");
                  }
                case -2:
                  n.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            d.push(e);
          }),
          h = function (e, n, o) {
            return (0 === n && -1 !== er.indexOf(o[r.length])) || o.match(i)
              ? e
              : "." + t;
          };
        function v(e, o, a, s) {
          void 0 === s && (s = "&");
          var u = e.replace(et, ""),
            c = o && a ? a + " " + o + " { " + u + " }" : u;
          return (
            (t = s),
            (n = RegExp("\\" + (r = o) + "\\b", "g")),
            (i = RegExp("(\\" + r + "\\b){2,}")),
            f(a || !o ? "" : o, c)
          );
        }
        return (
          f.use(
            [].concat(l, [
              function (e, t, i) {
                2 === e &&
                  i.length &&
                  i[0].lastIndexOf(r) > 0 &&
                  (i[0] = i[0].replace(n, h));
              },
              p,
              function (e) {
                if (-2 === e) {
                  var t = d;
                  return (d = []), t;
                }
              },
            ])
          ),
          (v.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || I(15), K(e, t.name);
                }, 5381)
                .toString()
            : ""),
          v
        );
      }
      var ei = a.createContext(),
        eo = (ei.Consumer, a.createContext()),
        ea = (eo.Consumer, new W()),
        es = en();
      function eu() {
        return (0, a.useContext)(ei) || ea;
      }
      function ec() {
        return (0, a.useContext)(eo) || es;
      }
      function el(e) {
        var t = (0, a.useState)(e.stylisPlugins),
          r = t[0],
          n = t[1],
          i = eu(),
          o = (0, a.useMemo)(
            function () {
              var t = i;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target]
          ),
          s = (0, a.useMemo)(
            function () {
              return en({
                options: { prefix: !e.disableVendorPrefixes },
                plugins: r,
              });
            },
            [e.disableVendorPrefixes, r]
          );
        return (
          (0, a.useEffect)(
            function () {
              u()(r, e.stylisPlugins) || n(e.stylisPlugins);
            },
            [e.stylisPlugins]
          ),
          a.createElement(
            ei.Provider,
            { value: o },
            a.createElement(eo.Provider, { value: s }, e.children)
          )
        );
      }
      var ef = (function () {
          function e(e, t) {
            var r = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = es);
              var n = r.name + t.hash;
              e.hasNameForId(r.id, n) ||
                e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
            }),
              (this.toString = function () {
                return I(12, String(r.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = es), this.name + e.hash;
            }),
            e
          );
        })(),
        ed = /([A-Z])/,
        ep = /([A-Z])/g,
        eh = /^ms-/,
        ev = function (e) {
          return "-" + e.toLowerCase();
        };
      function em(e) {
        return ed.test(e) ? e.replace(ep, ev).replace(eh, "-ms-") : e;
      }
      var ey = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function eg(e, t, r, n) {
        if (Array.isArray(e)) {
          for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
            "" !== (i = eg(e[a], t, r, n)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return ey(e)
          ? ""
          : _(e)
          ? "." + e.styledComponentId
          : k(e)
          ? "function" != typeof e ||
            (e.prototype && e.prototype.isReactComponent) ||
            !t
            ? e
            : eg(e(t), t, r, n)
          : e instanceof ef
          ? r
            ? (e.inject(r, n), e.getName(n))
            : e
          : g(e)
          ? (function e(t, r) {
              var n,
                i = [];
              for (var o in t)
                t.hasOwnProperty(o) &&
                  !ey(t[o]) &&
                  ((Array.isArray(t[o]) && t[o].isCss) || k(t[o])
                    ? i.push(em(o) + ":", t[o], ";")
                    : g(t[o])
                    ? i.push.apply(i, e(t[o], o))
                    : i.push(
                        em(o) +
                          ": " +
                          (null == (n = t[o]) ||
                          "boolean" == typeof n ||
                          "" === n
                            ? ""
                            : "number" != typeof n || 0 === n || o in l
                            ? String(n).trim()
                            : n + "px") +
                          ";"
                      ));
              return r ? [r + " {"].concat(i, ["}"]) : i;
            })(e)
          : e.toString();
      }
      var eb = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function ew(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return k(e) || g(e)
          ? eb(eg(y(b, [e].concat(r))))
          : 0 === r.length && 1 === e.length && "string" == typeof e[0]
          ? e
          : eb(eg(y(e, r)));
      }
      var ek = function (e, t, r) {
          return (
            void 0 === r && (r = w),
            (e.theme !== r.theme && e.theme) || t || r.theme
          );
        },
        eS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        e_ = /(^-|-$)/g;
      function eO(e) {
        return e.replace(eS, "-").replace(e_, "");
      }
      var eE = function (e) {
        return J(H(e) >>> 0);
      };
      function ex(e) {
        return "string" == typeof e;
      }
      var eT = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        eI = a.createContext();
      eI.Consumer;
      var eC = {},
        eA = function (e) {
          return (function e(t, r, n) {
            if ((void 0 === n && (n = w), !(0, o.isValidElementType)(r)))
              return I(1, String(r));
            var i = function () {
              return t(r, n, ew.apply(void 0, arguments));
            };
            return (
              (i.withConfig = function (i) {
                return e(t, r, m({}, n, {}, i));
              }),
              (i.attrs = function (i) {
                return e(
                  t,
                  r,
                  m({}, n, {
                    attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
                  })
                );
              }),
              i
            );
          })(function e(t, r, n) {
            var i = _(t),
              o = !ex(t),
              s = r.attrs,
              u = void 0 === s ? b : s,
              c = r.componentId,
              l =
                void 0 === c
                  ? ((O = r.displayName),
                    (E = r.parentComponentId),
                    (eC[(x = "string" != typeof O ? "sc" : eO(O))] =
                      (eC[x] || 0) + 1),
                    (T = x + "-" + eE("5.3.6" + x + eC[x])),
                    E ? E + "-" + T : T)
                  : c,
              f = r.displayName,
              p =
                void 0 === f
                  ? ex(t)
                    ? "styled." + t
                    : "Styled(" + S(t) + ")"
                  : f,
              v =
                r.displayName && r.componentId
                  ? eO(r.displayName) + "-" + r.componentId
                  : r.componentId || l,
              y =
                i && t.attrs
                  ? Array.prototype.concat(t.attrs, u).filter(Boolean)
                  : u,
              g = r.shouldForwardProp;
            i &&
              t.shouldForwardProp &&
              (g = r.shouldForwardProp
                ? function (e, n, i) {
                    return (
                      t.shouldForwardProp(e, n, i) &&
                      r.shouldForwardProp(e, n, i)
                    );
                  }
                : t.shouldForwardProp);
            var O,
              E,
              x,
              T,
              I,
              C = new ee(n, v, i ? t.componentStyle : void 0),
              A = C.isStatic && 0 === u.length,
              D = function (e, t) {
                return (function (e, t, r, n) {
                  var i,
                    o,
                    s,
                    u,
                    c,
                    l = e.attrs,
                    f = e.componentStyle,
                    p = e.defaultProps,
                    h = e.foldedComponentIds,
                    v = e.shouldForwardProp,
                    y = e.styledComponentId,
                    g = e.target,
                    b =
                      (void 0 === (i = ek(t, (0, a.useContext)(eI), p) || w) &&
                        (i = w),
                      (o = m({}, t, { theme: i })),
                      (s = {}),
                      l.forEach(function (e) {
                        var t,
                          r,
                          n,
                          i = e;
                        for (t in (k(i) && (i = i(o)), i))
                          o[t] = s[t] =
                            "className" === t
                              ? ((r = s[t]),
                                (n = i[t]),
                                r && n ? r + " " + n : r || n)
                              : i[t];
                      }),
                      [o, s]),
                    S = b[0],
                    _ = b[1],
                    O =
                      ((u = eu()),
                      (c = ec()),
                      n
                        ? f.generateAndInjectStyles(w, u, c)
                        : f.generateAndInjectStyles(S, u, c)),
                    E = _.$as || t.$as || _.as || t.as || g,
                    x = ex(E),
                    T = _ !== t ? m({}, t, {}, _) : t,
                    I = {};
                  for (var C in T)
                    "$" !== C[0] &&
                      "as" !== C &&
                      ("forwardedAs" === C
                        ? (I.as = T[C])
                        : (v ? v(C, d, E) : !x || d(C)) && (I[C] = T[C]));
                  return (
                    t.style &&
                      _.style !== t.style &&
                      (I.style = m({}, t.style, {}, _.style)),
                    (I.className = Array.prototype
                      .concat(
                        h,
                        y,
                        O !== y ? O : null,
                        t.className,
                        _.className
                      )
                      .filter(Boolean)
                      .join(" ")),
                    (I.ref = r),
                    (0, a.createElement)(E, I)
                  );
                })(I, e, t, A);
              };
            return (
              (D.displayName = p),
              ((I = a.forwardRef(D)).attrs = y),
              (I.componentStyle = C),
              (I.displayName = p),
              (I.shouldForwardProp = g),
              (I.foldedComponentIds = i
                ? Array.prototype.concat(
                    t.foldedComponentIds,
                    t.styledComponentId
                  )
                : b),
              (I.styledComponentId = v),
              (I.target = i ? t.target : t),
              (I.withComponent = function (t) {
                var i = r.componentId,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      i = {},
                      o = Object.keys(e);
                    for (n = 0; n < o.length; n++)
                      t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
                    return i;
                  })(r, ["componentId"]),
                  a = i && i + "-" + (ex(t) ? t : eO(S(t)));
                return e(t, m({}, o, { attrs: y, componentId: a }), n);
              }),
              Object.defineProperty(I, "defaultProps", {
                get: function () {
                  return this._foldedDefaultProps;
                },
                set: function (e) {
                  this._foldedDefaultProps = i
                    ? (function e(t) {
                        for (
                          var r = arguments.length,
                            n = Array(r > 1 ? r - 1 : 0),
                            i = 1;
                          i < r;
                          i++
                        )
                          n[i - 1] = arguments[i];
                        for (var o = 0; o < n.length; o++) {
                          var a = n[o];
                          if (eT(a))
                            for (var s in a)
                              "__proto__" !== s &&
                                "constructor" !== s &&
                                "prototype" !== s &&
                                (function (t, r, n) {
                                  var i = t[n];
                                  eT(r) && eT(i) ? e(i, r) : (t[n] = r);
                                })(t, a[s], s);
                        }
                        return t;
                      })({}, t.defaultProps, e)
                    : e;
                },
              }),
              (I.toString = function () {
                return "." + I.styledComponentId;
              }),
              o &&
                h()(I, t, {
                  attrs: !0,
                  componentStyle: !0,
                  displayName: !0,
                  foldedComponentIds: !0,
                  shouldForwardProp: !0,
                  styledComponentId: !0,
                  target: !0,
                  withComponent: !0,
                }),
              I
            );
          }, e);
        };
      [
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
        "head",
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
        "marquee",
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
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
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
        "textPath",
        "tspan",
      ].forEach(function (e) {
        eA[e] = eA(e);
      });
      var eD = (function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Z(e)),
            W.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        return (
          (t.createStyles = function (e, t, r, n) {
            var i = n(eg(this.rules, t, r, n).join(""), ""),
              o = this.componentId + e;
            r.insertRules(o, o, i);
          }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, r, n) {
            e > 2 && W.registerId(this.componentId + e),
              this.removeStyles(e, r),
              this.createStyles(e, t, r, n);
          }),
          e
        );
      })();
      function ej(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        var i = ew.apply(void 0, [e].concat(r)),
          o = "sc-global-" + eE(JSON.stringify(i)),
          s = new eD(i, o);
        function u(e) {
          var t = eu(),
            r = ec(),
            n = (0, a.useContext)(eI),
            i = (0, a.useRef)(t.allocateGSInstance(o)).current;
          return (
            t.server && c(i, e, t, n, r),
            (0, a.useLayoutEffect)(
              function () {
                if (!t.server)
                  return (
                    c(i, e, t, n, r),
                    function () {
                      return s.removeStyles(i, t);
                    }
                  );
              },
              [i, e, t, n, r]
            ),
            null
          );
        }
        function c(e, t, r, n, i) {
          if (s.isStatic) s.renderStyles(e, T, r, i);
          else {
            var o = m({}, t, { theme: ek(t, n, u.defaultProps) });
            s.renderStyles(e, o, r, i);
          }
        }
        return a.memo(u);
      }
      function eP(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        var i = ew.apply(void 0, [e].concat(r)).join("");
        return new ef(eE(i), i);
      }
      ((i = function () {
        var e = this;
        (this._emitSheetCSS = function () {
          var t = e.instance.toString();
          if (!t) return "";
          var r = L();
          return (
            "<style " +
            [
              r && 'nonce="' + r + '"',
              O + '="true"',
              'data-styled-version="5.3.6"',
            ]
              .filter(Boolean)
              .join(" ") +
            ">" +
            t +
            "</style>"
          );
        }),
          (this.getStyleTags = function () {
            return e.sealed ? I(2) : e._emitSheetCSS();
          }),
          (this.getStyleElement = function () {
            if (e.sealed) return I(2);
            var t,
              r =
                (((t = {})[O] = ""),
                (t["data-styled-version"] = "5.3.6"),
                (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                t),
              n = L();
            return (
              n && (r.nonce = n),
              [a.createElement("style", m({}, r, { key: "sc-0-0" }))]
            );
          }),
          (this.seal = function () {
            e.sealed = !0;
          }),
          (this.instance = new W({ isServer: !0 })),
          (this.sealed = !1);
      }.prototype).collectStyles = function (e) {
        return this.sealed
          ? I(2)
          : a.createElement(el, { sheet: this.instance }, e);
      }),
        (i.interleaveWithNodeStream = function (e) {
          return I(3);
        });
      var eR = eA;
    },
    4368: function (e, t, r) {
      "use strict";
      var n, i;
      function o(e) {
        return !!e && e < 7;
      }
      r.d(t, {
        Ie: function () {
          return n;
        },
        Oj: function () {
          return o;
        },
      }),
        ((i = n || (n = {}))[(i.loading = 1)] = "loading"),
        (i[(i.setVariables = 2)] = "setVariables"),
        (i[(i.fetchMore = 3)] = "fetchMore"),
        (i[(i.refetch = 4)] = "refetch"),
        (i[(i.poll = 6)] = "poll"),
        (i[(i.ready = 7)] = "ready"),
        (i[(i.error = 8)] = "error");
    },
    5832: function (e, t, r) {
      "use strict";
      r.d(t, {
        MS: function () {
          return s;
        },
        YG: function () {
          return o;
        },
        cA: function () {
          return c;
        },
        ls: function () {
          return a;
        },
      });
      var n = r(2970);
      r(996);
      var i = r(5078),
        o = Symbol();
      function a(e) {
        return !!e.extensions && Array.isArray(e.extensions[o]);
      }
      function s(e) {
        return e.hasOwnProperty("graphQLErrors");
      }
      var u = function (e) {
          var t = (0, n.ev)(
            (0, n.ev)((0, n.ev)([], e.graphQLErrors, !0), e.clientErrors, !0),
            e.protocolErrors,
            !0
          );
          return (
            e.networkError && t.push(e.networkError),
            t
              .map(function (e) {
                return ((0, i.s)(e) && e.message) || "Error message not found.";
              })
              .join("\n")
          );
        },
        c = (function (e) {
          function t(r) {
            var n = r.graphQLErrors,
              i = r.protocolErrors,
              o = r.clientErrors,
              a = r.networkError,
              s = r.errorMessage,
              c = r.extraInfo,
              l = e.call(this, s) || this;
            return (
              (l.name = "ApolloError"),
              (l.graphQLErrors = n || []),
              (l.protocolErrors = i || []),
              (l.clientErrors = o || []),
              (l.networkError = a || null),
              (l.message = s || u(l)),
              (l.extraInfo = c),
              (l.__proto__ = t.prototype),
              l
            );
          }
          return (0, n.ZT)(t, e), t;
        })(Error);
    },
    2370: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return s;
        },
      });
      var n = r(2784),
        i = r(3869),
        o = r(996),
        a = i.aS ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
      function s() {
        (0, o.kG)(!0, 45);
        var e = n.createContext[a];
        return (
          e ||
            (Object.defineProperty(n.createContext, a, {
              value: (e = n.createContext({})),
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            (e.displayName = "ApolloContext")),
          e
        );
      }
    },
    3056: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return i;
        },
        k: function () {
          return n;
        },
      });
      var n = Array.isArray;
      function i(e) {
        return Array.isArray(e) && e.length > 0;
      }
    },
    3869: function (e, t, r) {
      "use strict";
      r.d(t, {
        DN: function () {
          return s;
        },
        JC: function () {
          return l;
        },
        aS: function () {
          return a;
        },
        mr: function () {
          return i;
        },
        sy: function () {
          return o;
        },
      });
      var n = r(996),
        i =
          "function" == typeof WeakMap &&
          "ReactNative" !==
            (0, n.wY)(function () {
              return navigator.product;
            }),
        o = "function" == typeof WeakSet,
        a = "function" == typeof Symbol && "function" == typeof Symbol.for,
        s = a && Symbol.asyncIterator,
        u =
          "function" ==
          typeof (0, n.wY)(function () {
            return window.document.createElement;
          }),
        c =
          (0, n.wY)(function () {
            return navigator.userAgent.indexOf("jsdom") >= 0;
          }) || !1,
        l = u && !c;
    },
    9428: function (e, t, r) {
      "use strict";
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Object.create(null);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                void 0 !== n && (r[t] = n);
              });
          }),
          r
        );
      }
      r.d(t, {
        o: function () {
          return n;
        },
      });
    },
    9635: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return i;
        },
      });
      var n = new Map();
      function i(e) {
        var t = n.get(e) || 1;
        return (
          n.set(e, t + 1),
          ""
            .concat(e, ":")
            .concat(t, ":")
            .concat(Math.random().toString(36).slice(2))
        );
      }
    },
    3180: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return i;
        },
      });
      var n = r(5078);
      function i(e) {
        if (!1 !== globalThis.__DEV__) {
          var t;
          (t = new Set([e])).forEach(function (e) {
            (0, n.s)(e) &&
              (function (e) {
                if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (e) {
                    if (e instanceof TypeError) return null;
                    throw e;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (r) {
                (0, n.s)(e[r]) && t.add(e[r]);
              });
          });
        }
        return e;
      }
    },
    8769: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return o;
        },
      });
      var n = r(2970),
        i = r(9428);
      function o(e, t) {
        return (0, i.o)(
          e,
          t,
          t.variables && {
            variables: (0, i.o)(
              (0, n.pi)((0, n.pi)({}, e && e.variables), t.variables)
            ),
          }
        );
      }
    },
    5078: function (e, t, r) {
      "use strict";
      function n(e) {
        return null !== e && "object" == typeof e;
      }
      r.d(t, {
        s: function () {
          return n;
        },
      });
    },
    3118: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return i;
        },
      });
      var n = r(9635);
      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.X)("stringifyForDisplay");
        return JSON.stringify(
          e,
          function (e, t) {
            return void 0 === t ? r : t;
          },
          t
        )
          .split(JSON.stringify(r))
          .join("<undefined>");
      }
    },
    996: function (e, t, r) {
      "use strict";
      r.d(t, {
        kG: function () {
          return g;
        },
        wY: function () {
          return h;
        },
        _K: function () {
          return b;
        },
      });
      var n,
        i = r(2970),
        o = "Invariant Violation",
        a = Object.setPrototypeOf,
        s =
          void 0 === a
            ? function (e, t) {
                return (e.__proto__ = t), e;
              }
            : a,
        u = (function (e) {
          function t(r) {
            void 0 === r && (r = o);
            var n =
              e.call(
                this,
                "number" == typeof r
                  ? o +
                      ": " +
                      r +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : r
              ) || this;
            return (n.framesToPop = 1), (n.name = o), s(n, t.prototype), n;
          }
          return (0, i.ZT)(t, e), t;
        })(Error);
      function c(e, t) {
        if (!e) throw new u(t);
      }
      var l = ["debug", "log", "warn", "error", "silent"],
        f = l.indexOf("log");
      function d(e) {
        return function () {
          if (l.indexOf(e) >= f)
            return (console[e] || console.log).apply(console, arguments);
        };
      }
      ((n = c || (c = {})).debug = d("debug")),
        (n.log = d("log")),
        (n.warn = d("warn")),
        (n.error = d("error"));
      var p = r(2674);
      function h(e) {
        try {
          return e();
        } catch (e) {}
      }
      var v =
          h(function () {
            return globalThis;
          }) ||
          h(function () {
            return window;
          }) ||
          h(function () {
            return self;
          }) ||
          h(function () {
            return global;
          }) ||
          h(function () {
            return h.constructor("return this")();
          }),
        m = r(3118);
      function y(e) {
        return function (t) {
          for (var r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = S(i)) || ((t = _(i, r)), (r = []));
          }
          e.apply(void 0, [t].concat(r));
        };
      }
      var g = Object.assign(
        function (e, t) {
          for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
          e || c(e, S(t, r) || _(t, r));
        },
        { debug: y(c.debug), log: y(c.log), warn: y(c.warn), error: y(c.error) }
      );
      function b(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return new u(S(e, t) || _(e, t));
      }
      var w = Symbol.for("ApolloErrorMessageHandler_" + p.i);
      function k(e) {
        return "string" == typeof e ? e : (0, m.v)(e, 2).slice(0, 1e3);
      }
      function S(e, t) {
        if ((void 0 === t && (t = []), e)) return v[w] && v[w](e, t.map(k));
      }
      function _(e, t) {
        if ((void 0 === t && (t = []), e))
          return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
            encodeURIComponent(
              JSON.stringify({ version: p.i, message: e, args: t.map(k) })
            )
          );
      }
    },
    2674: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      var n = "3.8.8";
    },
    8807: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return s;
        },
      });
      let { toString: n, hasOwnProperty: i } = Object.prototype,
        o = Function.prototype.toString,
        a = new Map();
      function s(e, t) {
        try {
          return (function e(t, r) {
            if (t === r) return !0;
            let a = n.call(t);
            if (a !== n.call(r)) return !1;
            switch (a) {
              case "[object Array]":
                if (t.length !== r.length) break;
              case "[object Object]": {
                if (f(t, r)) return !0;
                let n = u(t),
                  o = u(r),
                  a = n.length;
                if (a !== o.length) return !1;
                for (let e = 0; e < a; ++e) if (!i.call(r, n[e])) return !1;
                for (let i = 0; i < a; ++i) {
                  let o = n[i];
                  if (!e(t[o], r[o])) return !1;
                }
                return !0;
              }
              case "[object Error]":
                return t.name === r.name && t.message === r.message;
              case "[object Number]":
                if (t != t) return r != r;
              case "[object Boolean]":
              case "[object Date]":
                return +t == +r;
              case "[object RegExp]":
              case "[object String]":
                return t == `${r}`;
              case "[object Map]":
              case "[object Set]": {
                if (t.size !== r.size) return !1;
                if (f(t, r)) return !0;
                let n = t.entries(),
                  i = "[object Map]" === a;
                for (;;) {
                  let t = n.next();
                  if (t.done) break;
                  let [o, a] = t.value;
                  if (!r.has(o) || (i && !e(a, r.get(o)))) return !1;
                }
                return !0;
              }
              case "[object Uint16Array]":
              case "[object Uint8Array]":
              case "[object Uint32Array]":
              case "[object Int32Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object ArrayBuffer]":
                (t = new Uint8Array(t)), (r = new Uint8Array(r));
              case "[object DataView]": {
                let e = t.byteLength;
                if (e === r.byteLength) for (; e-- && t[e] === r[e]; );
                return -1 === e;
              }
              case "[object AsyncFunction]":
              case "[object GeneratorFunction]":
              case "[object AsyncGeneratorFunction]":
              case "[object Function]": {
                let e = o.call(t);
                if (e !== o.call(r)) return !1;
                return !(function (e, t) {
                  let r = e.length - t.length;
                  return r >= 0 && e.indexOf(t, r) === r;
                })(e, l);
              }
            }
            return !1;
          })(e, t);
        } finally {
          a.clear();
        }
      }
      function u(e) {
        return Object.keys(e).filter(c, e);
      }
      function c(e) {
        return void 0 !== this[e];
      }
      t.Z = s;
      let l = "{ [native code] }";
      function f(e, t) {
        let r = a.get(e);
        if (r) {
          if (r.has(t)) return !0;
        } else a.set(e, (r = new Set()));
        return r.add(t), !1;
      }
    },
    8660: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (!e) throw Error(t);
      }
      r.d(t, {
        a: function () {
          return n;
        },
      });
    },
    2277: function (e, t, r) {
      "use strict";
      function n(e) {
        return (function e(t, r) {
          switch (typeof t) {
            case "string":
              return JSON.stringify(t);
            case "function":
              return t.name ? `[function ${t.name}]` : "[function]";
            case "object":
              return (function (t, r) {
                if (null === t) return "null";
                if (r.includes(t)) return "[Circular]";
                let n = [...r, t];
                if ("function" == typeof t.toJSON) {
                  let r = t.toJSON();
                  if (r !== t) return "string" == typeof r ? r : e(r, n);
                } else if (Array.isArray(t))
                  return (function (t, r) {
                    if (0 === t.length) return "[]";
                    if (r.length > 2) return "[Array]";
                    let n = Math.min(10, t.length),
                      i = t.length - n,
                      o = [];
                    for (let i = 0; i < n; ++i) o.push(e(t[i], r));
                    return (
                      1 === i
                        ? o.push("... 1 more item")
                        : i > 1 && o.push(`... ${i} more items`),
                      "[" + o.join(", ") + "]"
                    );
                  })(t, n);
                return (function (t, r) {
                  let n = Object.entries(t);
                  return 0 === n.length
                    ? "{}"
                    : r.length > 2
                    ? "[" +
                      (function (e) {
                        let t = Object.prototype.toString
                          .call(e)
                          .replace(/^\[object /, "")
                          .replace(/]$/, "");
                        if (
                          "Object" === t &&
                          "function" == typeof e.constructor
                        ) {
                          let t = e.constructor.name;
                          if ("string" == typeof t && "" !== t) return t;
                        }
                        return t;
                      })(t) +
                      "]"
                    : "{ " +
                      n.map(([t, n]) => t + ": " + e(n, r)).join(", ") +
                      " }";
                })(t, n);
              })(t, r);
            default:
              return String(t);
          }
        })(e, []);
      }
      r.d(t, {
        X: function () {
          return n;
        },
      });
    },
    781: function (e, t, r) {
      "use strict";
      var n, i;
      r.d(t, {
        UG: function () {
          return c;
        },
        WU: function () {
          return a;
        },
        Ye: function () {
          return o;
        },
        h8: function () {
          return s;
        },
        ku: function () {
          return n;
        },
      });
      class o {
        constructor(e, t, r) {
          (this.start = e.start),
            (this.end = t.end),
            (this.startToken = e),
            (this.endToken = t),
            (this.source = r);
        }
        get [Symbol.toStringTag]() {
          return "Location";
        }
        toJSON() {
          return { start: this.start, end: this.end };
        }
      }
      class a {
        constructor(e, t, r, n, i, o) {
          (this.kind = e),
            (this.start = t),
            (this.end = r),
            (this.line = n),
            (this.column = i),
            (this.value = o),
            (this.prev = null),
            (this.next = null);
        }
        get [Symbol.toStringTag]() {
          return "Token";
        }
        toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column,
          };
        }
      }
      let s = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        u = new Set(Object.keys(s));
      function c(e) {
        let t = null == e ? void 0 : e.kind;
        return "string" == typeof t && u.has(t);
      }
      ((i = n || (n = {})).QUERY = "query"),
        (i.MUTATION = "mutation"),
        (i.SUBSCRIPTION = "subscription");
    },
    5717: function (e, t, r) {
      "use strict";
      r.d(t, {
        LZ: function () {
          return o;
        },
        wv: function () {
          return i;
        },
      });
      var n = r(1591);
      function i(e) {
        var t, r;
        let i = Number.MAX_SAFE_INTEGER,
          o = null,
          a = -1;
        for (let t = 0; t < e.length; ++t) {
          let s = e[t],
            u = (function (e) {
              let t = 0;
              for (; t < e.length && (0, n.FD)(e.charCodeAt(t)); ) ++t;
              return t;
            })(s);
          u !== s.length &&
            ((o = null !== (r = o) && void 0 !== r ? r : t),
            (a = t),
            0 !== t && u < i && (i = u));
        }
        return e
          .map((e, t) => (0 === t ? e : e.slice(i)))
          .slice(null !== (t = o) && void 0 !== t ? t : 0, a + 1);
      }
      function o(e, t) {
        let r = e.replace(/"""/g, '\\"""'),
          i = r.split(/\r\n|[\n\r]/g),
          o = 1 === i.length,
          a =
            i.length > 1 &&
            i
              .slice(1)
              .every((e) => 0 === e.length || (0, n.FD)(e.charCodeAt(0))),
          s = r.endsWith('\\"""'),
          u = e.endsWith('"') && !s,
          c = e.endsWith("\\"),
          l = u || c,
          f =
            !(null != t && t.minimize) && (!o || e.length > 70 || l || a || s),
          d = "",
          p = o && (0, n.FD)(e.charCodeAt(0));
        return (
          ((f && !p) || a) && (d += "\n"),
          (d += r),
          (f || l) && (d += "\n"),
          '"""' + d + '"""'
        );
      }
    },
    1591: function (e, t, r) {
      "use strict";
      function n(e) {
        return 9 === e || 32 === e;
      }
      function i(e) {
        return e >= 48 && e <= 57;
      }
      function o(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function a(e) {
        return o(e) || 95 === e;
      }
      function s(e) {
        return o(e) || i(e) || 95 === e;
      }
      r.d(t, {
        FD: function () {
          return n;
        },
        HQ: function () {
          return s;
        },
        LQ: function () {
          return a;
        },
        X1: function () {
          return i;
        },
      });
    },
    5115: function (e, t, r) {
      "use strict";
      var n, i;
      r.d(t, {
        h: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).NAME = "Name"),
        (i.DOCUMENT = "Document"),
        (i.OPERATION_DEFINITION = "OperationDefinition"),
        (i.VARIABLE_DEFINITION = "VariableDefinition"),
        (i.SELECTION_SET = "SelectionSet"),
        (i.FIELD = "Field"),
        (i.ARGUMENT = "Argument"),
        (i.FRAGMENT_SPREAD = "FragmentSpread"),
        (i.INLINE_FRAGMENT = "InlineFragment"),
        (i.FRAGMENT_DEFINITION = "FragmentDefinition"),
        (i.VARIABLE = "Variable"),
        (i.INT = "IntValue"),
        (i.FLOAT = "FloatValue"),
        (i.STRING = "StringValue"),
        (i.BOOLEAN = "BooleanValue"),
        (i.NULL = "NullValue"),
        (i.ENUM = "EnumValue"),
        (i.LIST = "ListValue"),
        (i.OBJECT = "ObjectValue"),
        (i.OBJECT_FIELD = "ObjectField"),
        (i.DIRECTIVE = "Directive"),
        (i.NAMED_TYPE = "NamedType"),
        (i.LIST_TYPE = "ListType"),
        (i.NON_NULL_TYPE = "NonNullType"),
        (i.SCHEMA_DEFINITION = "SchemaDefinition"),
        (i.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
        (i.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
        (i.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
        (i.FIELD_DEFINITION = "FieldDefinition"),
        (i.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
        (i.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
        (i.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
        (i.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
        (i.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
        (i.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
        (i.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
        (i.SCHEMA_EXTENSION = "SchemaExtension"),
        (i.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
        (i.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
        (i.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
        (i.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
        (i.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
        (i.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6570), t(5894);
    }),
      (_N_E = e.O());
  },
]);
