(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [110],
  {
    4218: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/widget",
        function () {
          return n(96);
        },
      ]);
    },
    2960: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var i = "/images/";
    },
    96: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return ei;
          },
          default: function () {
            return eo;
          },
        });
      var i,
        o,
        r,
        s,
        a,
        c,
        l,
        d,
        u,
        h,
        p = n(4022),
        f = n(4670),
        g = n(8588),
        m = n(2322),
        v = n(2417),
        E = n(6905),
        w = n(489),
        x = n(5624),
        R = n(8222),
        _ = n(2960),
        y = n(2784),
        A = n(3286),
        D = n(6503),
        S = n(3612);
      ((i = c || (c = {})).SWAP_ETH_FLOW_SENT_TX = "SWAP_ETH_FLOW_SENT_TX"),
        (i.ORDER_CREATED = "ORDER_CREATED"),
        (i.SWAP_SIGNING_ERROR = "SWAP_SIGNING_ERROR"),
        (i.ORDER_FULFILLED = "ORDER_FULFILLED"),
        (i.ORDER_CANCELLED = "ORDER_CANCELLED"),
        (i.ORDER_EXPIRED = "ORDER_EXPIRED"),
        (i.ORDER_PRESIGNED = "ORDER_PRESIGNED"),
        (i.ONCHAIN_TRANSACTION_MINED = "ONCHAIN_TRANSACTION_MINED"),
        (i.ONCHAIN_TRANSACTION_FAILED = "ONCHAIN_TRANSACTION_FAILED"),
        ((o = l || (l = {})).ON_TOAST_MESSAGE = "ON_TOAST_MESSAGE"),
        (o.ON_POSTED_ORDER = "ON_POSTED_ORDER"),
        (o.ON_FULFILLED_ORDER = "ON_FULFILLED_ORDER"),
        (o.ON_CANCELLED_ORDER = "ON_CANCELLED_ORDER"),
        (o.ON_EXPIRED_ORDER = "ON_EXPIRED_ORDER"),
        (o.ON_PRESIGNED_ORDER = "ON_PRESIGNED_ORDER"),
        (o.ON_ONCHAIN_TRANSACTION = "ON_ONCHAIN_TRANSACTION"),
        (o.ON_CHANGE_TRADE_PARAMS = "ON_CHANGE_TRADE_PARAMS");
      var k = (function () {
          function e() {
            (0, S._)(this, e), (this.subscriptions = {});
          }
          var t = e.prototype;
          return (
            (t.on = function (e) {
              var t = e.event,
                n = e.handler;
              this.subscriptions[t] || (this.subscriptions[t] = []),
                this.subscriptions[t].push(n);
            }),
            (t.off = function (e) {
              var t = e.event,
                n = e.handler;
              this.subscriptions[t] &&
                (this.subscriptions[t] = this.subscriptions[t].filter(function (
                  e
                ) {
                  return e !== n;
                }));
            }),
            (t.emit = function (e, t) {
              this.subscriptions[e] &&
                this.subscriptions[e].forEach(function (e) {
                  return e(t);
                });
            }),
            e
          );
        })(),
        T = "cowSwapWidget";
      function O(e, t, n) {
        var i = (0, p._)({ key: T, method: t }, "object" == typeof n ? n : {});
        e.postMessage(i, "*");
      }
      function C(e, t, n) {
        var i = function (e) {
          var i;
          "object" == typeof (i = e.data) &&
            null !== i &&
            "key" in i &&
            "method" in i &&
            "string" == typeof i.key &&
            "string" == typeof i.method &&
            e.data.key === T &&
            e.data.method === t &&
            n(e.data);
        };
        return e.addEventListener("message", i), i;
      }
      function j(e, t) {
        e.removeEventListener("message", t);
      }
      ((r = d || (d = {})).ACTIVATE = "ACTIVATE"),
        (r.UPDATE_HEIGHT = "UPDATE_HEIGHT"),
        (r.SET_FULL_HEIGHT = "SET_FULL_HEIGHT"),
        (r.EMIT_COW_EVENT = "EMIT_COW_EVENT"),
        (r.PROVIDER_RPC_REQUEST = "PROVIDER_RPC_REQUEST"),
        ((s = u || (u = {})).UPDATE_PARAMS = "UPDATE_PARAMS"),
        (s.UPDATE_APP_DATA = "UPDATE_APP_DATA"),
        (s.PROVIDER_RPC_RESPONSE = "PROVIDER_RPC_RESPONSE"),
        (s.PROVIDER_ON_EVENT = "PROVIDER_ON_EVENT"),
        ((a = h || (h = {})).SWAP = "swap"),
        (a.LIMIT = "limit"),
        (a.ADVANCED = "advanced");
      var N = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              i = this;
            (0, S._)(this, e),
              (this.contentWindow = t),
              (this.eventEmitter = new k()),
              (this.listeners = []),
              this.updateListeners(n),
              (this.widgetListener = C(
                this.contentWindow,
                d.EMIT_COW_EVENT,
                function (e) {
                  return i.eventEmitter.emit(e.event, e.payload);
                }
              ));
          }
          var t = e.prototype;
          return (
            (t.stopListeningIframe = function () {
              j(this.contentWindow, this.widgetListener);
            }),
            (t.updateListeners = function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var o, r = this.listeners[Symbol.iterator]();
                  !(t = (o = r.next()).done);
                  t = !0
                ) {
                  var s = o.value;
                  this.eventEmitter.off(s);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == r.return || r.return();
                } finally {
                  if (n) throw i;
                }
              }
              this.listeners = e || [];
              var a = !0,
                c = !1,
                l = void 0;
              try {
                for (
                  var d, u = this.listeners[Symbol.iterator]();
                  !(a = (d = u.next()).done);
                  a = !0
                ) {
                  var h = d.value;
                  this.eventEmitter.on(h);
                }
              } catch (e) {
                (c = !0), (l = e);
              } finally {
                try {
                  a || null == u.return || u.return();
                } finally {
                  if (c) throw l;
                }
              }
            }),
            e
          );
        })(),
        I = [
          "connect",
          "disconnect",
          "close",
          "chainChanged",
          "accountsChanged",
        ],
        b = (function () {
          function e(t) {
            var n = this;
            (0, S._)(this, e),
              (this.iframeWidow = t),
              (this.ethereumProvider = null),
              (this.requestWaitingForConnection = {}),
              (this.processRpcCallFromWindow = function (e) {
                var t = e.rpcRequest;
                if (!n.ethereumProvider) {
                  t.id && (n.requestWaitingForConnection[t.id] = t);
                  return;
                }
                n.processRpcRequest(t);
              });
          }
          var t = e.prototype;
          return (
            (t.disconnect = function () {
              (this.ethereumProvider = null),
                (function (e, t, n) {
                  e.removeEventListener("message", n);
                })(
                  window,
                  d.PROVIDER_RPC_REQUEST,
                  this.processRpcCallFromWindow
                );
            }),
            (t.onConnect = function (e) {
              var t = this;
              this.ethereumProvider
                ? this.disconnect()
                : C(
                    window,
                    d.PROVIDER_RPC_REQUEST,
                    this.processRpcCallFromWindow
                  ),
                (this.ethereumProvider = e),
                this.processPendingRequests(),
                I.forEach(function (n) {
                  e.on(n, function (e) {
                    return t.onProviderEvent(n, e);
                  });
                });
            }),
            (t.processPendingRequests = function () {
              var e = this;
              Object.keys(this.requestWaitingForConnection).forEach(function (
                t
              ) {
                e.processRpcRequest(e.requestWaitingForConnection[t]);
              }),
                (this.requestWaitingForConnection = {});
            }),
            (t.processRpcRequest = function (e) {
              var t = this,
                n = e.id,
                i = e.jsonrpc,
                o = e.method;
              this.ethereumProvider &&
                n &&
                ("enable" === o
                  ? this.ethereumProvider.enable()
                  : this.ethereumProvider.request(
                      (0, f._)((0, p._)({}, e), { id: n })
                    )
                )
                  .then(function (e) {
                    return t.forwardRpcResponseToIframe({
                      rpcResponse: { jsonrpc: i, id: n, result: e },
                    });
                  })
                  .catch(function (e) {
                    return t.forwardRpcResponseToIframe({
                      rpcResponse: { jsonrpc: i, id: n, error: e },
                    });
                  });
            }),
            (t.onProviderEvent = function (e, t) {
              O(this.iframeWidow, u.PROVIDER_ON_EVENT, { event: e, params: t });
            }),
            (t.forwardRpcResponseToIframe = function (e) {
              O(this.iframeWidow, u.PROVIDER_RPC_RESPONSE, e);
            }),
            e
          );
        })(),
        P = (function () {
          function e(t, n) {
            var i = this;
            (0, S._)(this, e),
              (this.appWindow = t),
              (this.iframeWidow = n),
              (this.forwardSdkMessage = function (e) {
                var t, n, o;
                "object" == typeof (t = e.data) &&
                  null !== t &&
                  "id" in t &&
                  "string" == typeof t.id &&
                  e.origin !== window.location.origin &&
                  ("method" in (n = e.data) &&
                  "string" == typeof n.method &&
                  "params" in n &&
                  "env" in n &&
                  "object" == typeof n.env &&
                  null !== n.env &&
                  "sdkVersion" in n.env
                    ? i.appWindow.parent.postMessage(e.data, "*")
                    : "success" in (o = e.data) &&
                      "boolean" == typeof o.success &&
                      "version" in o &&
                      "string" == typeof o.version &&
                      i.iframeWidow.postMessage(e.data, "*"));
              }),
              this.startListening();
          }
          var t = e.prototype;
          return (
            (t.startListening = function () {
              this.appWindow.addEventListener(
                "message",
                this.forwardSdkMessage
              );
            }),
            (t.stopListening = function () {
              this.appWindow.removeEventListener(
                "message",
                this.forwardSdkMessage
              );
            }),
            e
          );
        })();
      function W(e) {
        var t = e.chainId,
          n = e.sell,
          i = e.buy,
          o = e.tradeType,
          r = void 0 === o ? h.SWAP : o,
          s = [
            (null == n ? void 0 : n.asset) || "_",
            (null == i ? void 0 : i.asset) || "_",
          ]
            .map(encodeURIComponent)
            .join("/");
        return "/"
          .concat(void 0 === t ? 1 : t, "/widget/")
          .concat(r, "/")
          .concat(s);
      }
      function L(e) {
        var t, n, i, o, r;
        return (
          (o =
            ((t = new URLSearchParams()),
            (n = e.sell),
            (i = e.buy),
            (null == n ? void 0 : n.amount) && t.append("sellAmount", n.amount),
            (null == i ? void 0 : i.amount) && t.append("buyAmount", i.amount),
            t)),
          (r = e.theme)
            ? r && "object" == typeof r
              ? (o.append("palette", encodeURIComponent(JSON.stringify(r))),
                o.append("theme", r.baseTheme))
              : (o.append("palette", "null"), o.append("theme", r))
            : o.append("palette", "null"),
          o
        );
      }
      var U = "640px";
      function H(e, t) {
        var n,
          i,
          o,
          r,
          s,
          a,
          c = t.params,
          l = t.provider,
          h = t.listeners,
          p = l,
          f = c,
          g =
            ((i = (n = c).width),
            (o = n.height),
            ((r = document.createElement("iframe")).src =
              ("string" == typeof n.baseUrl
                ? n.baseUrl
                : "https://swap.cow.fi") +
              "/#" +
              W(n) +
              "?" +
              L(n)),
            (r.width = void 0 === i ? "450px" : i),
            (r.height = void 0 === o ? U : o),
            (r.style.border = "0"),
            r);
        (e.innerHTML = ""), e.appendChild(g);
        var m = g.contentWindow;
        if (!m)
          throw (
            (console.error("Iframe does not contain a window", g),
            Error("Iframe does not contain a window!"))
          );
        var v = [];
        v.push(
          ((s = c.appCode),
          (a = C(window, d.ACTIVATE, function () {
            j(window, a),
              O(m, u.UPDATE_APP_DATA, {
                metaData: s ? { appCode: s } : void 0,
              });
          })))
        ),
          v.push.apply(
            v,
            (0, D._)(
              (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : U;
                return [
                  C(window, d.UPDATE_HEIGHT, function (n) {
                    e.style.height = n.height
                      ? "".concat(n.height + 20, "px")
                      : t;
                  }),
                  C(window, d.SET_FULL_HEIGHT, function (n) {
                    var i = n.isUpToSmall;
                    e.style.height = i
                      ? t
                      : "".concat(document.body.offsetHeight, "px");
                  }),
                ];
              })(g, c.height)
            )
          );
        var E = new N(window, h),
          w = M(m, null, p);
        g.addEventListener("load", function () {
          return G(m, f, p);
        });
        var x = new P(window, m);
        return {
          updateParams: function (e) {
            G(m, (f = e), p);
          },
          updateListeners: function (e) {
            return E.updateListeners(e);
          },
          updateProvider: function (e) {
            (p = e), (w = M(m, w, e));
          },
          destroy: function () {
            w.disconnect(),
              E.stopListeningIframe(),
              v.forEach(function (e) {
                return window.removeEventListener("message", e);
              }),
              x.stopListening(),
              e.removeChild(g);
          },
        };
      }
      function M(e, t, n) {
        t && t.disconnect();
        var i = t || new b(e);
        return n && i.onConnect(n), i;
      }
      function G(e, t, n) {
        var i = W(t),
          o = L(t).toString();
        t.theme;
        var r = (0, A._)(t, ["theme"]);
        O(e, u.UPDATE_PARAMS, {
          urlParams: { pathname: i, search: o },
          appParams: r,
          hasProvider: !!n,
        });
      }
      function V(e) {
        var t = e.params,
          n = e.provider,
          i = e.listeners,
          o = (0, g._)((0, y.useState)(null), 2),
          r = o[0],
          s = o[1],
          a = (0, y.useRef)(null),
          c = (0, y.useRef)(n),
          l = (0, y.useRef)(i),
          d = (0, y.useRef)(null),
          u = (0, y.useRef)(null),
          h = (0, y.useCallback)(
            function (e, t) {
              try {
                console.log("[WIDGET] ".concat(e)), t();
              } catch (t) {
                var n = "Error ".concat(e.toLowerCase());
                console.error("[WIDGET] ".concat(n), t),
                  s({ message: n, error: t });
              }
            },
            [s]
          );
        return ((0, y.useEffect)(function () {
          return function () {
            (a.current = null), (c.current = void 0), (l.current = void 0);
            var e = u.current;
            e &&
              (h("\uD83D\uDCA5 Destroy widget", function () {
                return e.destroy();
              }),
              (u.current = null));
          };
        }, []),
        (0, y.useEffect)(
          function () {
            if (d.current && JSON.stringify(a.current) !== JSON.stringify(t)) {
              var e = d.current,
                n = u.current;
              (a.current = t),
                null === n
                  ? h("Creating a new widget", function () {
                      (u.current = H(e, {
                        params: t,
                        provider: c.current,
                        listeners: i,
                      })),
                        (l.current = i);
                    })
                  : h("Updating the widget", function () {
                      return n.updateParams(t);
                    });
            }
          },
          [t]
        ),
        (0, y.useEffect)(
          function () {
            if (u.current && c.current !== n) {
              c.current = n;
              var e = d.current;
              e &&
                h("Updating the provider", function () {
                  var n;
                  null === (n = u.current) || void 0 === n || n.destroy(),
                    (u.current = H(e, {
                      params: t,
                      provider: c.current,
                      listeners: i,
                    }));
                });
            }
          },
          [n]
        ),
        (0, y.useEffect)(
          function () {
            if (u.current && l.current !== i) {
              var e = u.current;
              h("Updating the listeners", function () {
                return e.updateListeners(i);
              });
            }
          },
          [i]
        ),
        r)
          ? (0, m.jsxs)("div", {
              style: { color: "#ff3a3a" },
              children: [
                r.message,
                r.error.message &&
                  (0, m.jsx)("pre", {
                    style: { whiteSpace: "pre-wrap", fontSize: "0.75em" },
                    children: r.error.message,
                  }),
              ],
            })
          : (0, m.jsx)("div", { ref: d, style: { width: "100%" } });
      }
      var F = n(8018),
        z = n(7045),
        q = n(8241),
        Z = n(7729),
        X = n.n(Z),
        $ = n(9097),
        K = n.n($),
        B = n(5505),
        Y = n(9210),
        J = B.ZP.div.withConfig({ componentId: "sc-f028e68f-0" })(
          [
            "position:sticky;top:12rem;margin:0 auto auto;",
            "{position:relative;top:initial;}",
          ],
          Y.pU.mobile
        ),
        Q = B.ZP.div.withConfig({ componentId: "sc-f028e68f-1" })(
          [
            "display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:center;gap:1.6rem;&::before{color:",
            ";font-size:2.1rem;font-weight:",
            ";content:'Try it out!';background:url(",
            ") no-repeat center 2.5rem / 2.4rem 5rem;width:12rem;height:7.5rem;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;transform:rotateZ(-15deg);}",
            "{> iframe{width:100%;}}",
          ],
          Y.Il.darkBlue,
          Y.Zx.weightBold,
          "/images/arrow-drawn.svg",
          Y.pU.mobile
        ),
        ee = "/images/dao-logos/",
        et = {
          configuratorURL: "https://widget.cow.fi/",
          calendlyURL: "https://cowprotocol.typeform.com/to/rONXaxHV",
          docsURL: "https://docs.cow.fi/cow-protocol/tutorials/widget",
          everyBell: [
            {
              icon: "".concat(_.H, "/protection.svg"),
              title: "Full Protection from MEV",
              description:
                "CoW Swap offers the best MEV protection in the land. Thanks to a delegated trading model that relies on experts to execute swaps, traders can rest assured that they're safe from the MEV bots.",
            },
            {
              icon: "".concat(_.H, "/surplus.svg"),
              title: "Surplus-Capturing Orders",
              description:
                "Every order is surplus-capturing and traders usually earn a little extra in their sell token with each swap.",
            },
            {
              icon: "".concat(_.H, "/gasless.svg"),
              title: "Gasless Trading",
              description:
                "All gas fees are paid in the sell token for swaps and even for token approvals. Users can enjoy ETH-free trading every time, even with brand-new wallets.",
            },
          ],
          trustedDAOs: [
            {
              icon: "".concat(ee, "aave.svg"),
              title: "Aave",
              link: "https://aave.com/",
            },
            {
              icon: "".concat(ee, "nexus.svg"),
              title: "Nexus Mutual",
              link: "https://nexusmutual.io/",
            },
            {
              icon: "".concat(ee, "ens.svg"),
              title: "ENS",
              link: "https://ens.domains/",
            },
            {
              icon: "".concat(ee, "karpatkey.svg"),
              title: "Karpatkey",
              link: "https://www.karpatkey.com/",
            },
            {
              icon: "".concat(ee, "maker.svg"),
              title: "MakerDAO",
              link: "https://makerdao.com/",
            },
            {
              icon: "".concat(ee, "lido.svg"),
              title: "Lido",
              link: "https://lido.fi/",
            },
            {
              icon: "".concat(ee, "yearn.svg"),
              title: "Yearn",
              link: "https://yearn.finance/",
            },
            {
              icon: "".concat(ee, "gnosis.svg"),
              title: "Gnosis",
              link: "https://www.gnosis.io/",
            },
            {
              icon: "".concat(ee, "synthetix.svg"),
              title: "Synthetix",
              link: "https://synthetix.io/",
            },
            {
              icon: "".concat(ee, "balancer.svg"),
              title: "Balancer",
              link: "https://balancer.fi/",
            },
            {
              icon: "".concat(ee, "aura.svg"),
              title: "Aura",
              link: "https://aura.finance/",
            },
            {
              icon: "".concat(ee, "vitadao.svg"),
              title: "VitaDAO",
              link: "https://www.vitadao.com/",
            },
            {
              icon: "".concat(ee, "polygon.svg"),
              title: "Polygon",
              link: "https://polygon.technology/",
            },
            {
              icon: "".concat(ee, "pleasrdao.svg"),
              title: "PleasrDAO",
              link: "https://pleasr.org/",
            },
            {
              icon: "".concat(ee, "olympus.svg"),
              title: "Olympus",
              link: "https://www.olympusdao.finance/",
            },
            {
              icon: "".concat(ee, "dxdao.svg"),
              title: "DxDAO",
              link: "https://dxdao.eth.limo/",
            },
            {
              icon: "".concat(ee, "mstables.svg"),
              title: "mStables",
              link: "https://mstable.org/",
            },
            {
              icon: "".concat(ee, "index.svg"),
              title: "Index",
              link: "https://indexcoop.com/",
            },
            {
              icon: "".concat(ee, "rhino.svg"),
              title: "Rhino",
              link: "https://rhino.fi/",
            },
            {
              icon: "".concat(ee, "jpgd.svg"),
              title: "JPGD",
              link: "https://jpegd.io/",
            },
            {
              icon: "".concat(ee, "benddao.svg"),
              title: "BendDAO",
              link: "https://www.benddao.xyz/",
            },
            {
              icon: "".concat(ee, "alchemix.svg"),
              title: "Alchemix",
              link: "https://alchemix.fi/",
            },
            {
              icon: "".concat(ee, "stargate.svg"),
              title: "Stargate",
              link: "https://stargate.io/",
            },
            {
              icon: "".concat(ee, "shapeshift.svg"),
              title: "ShapeShift",
              link: "https://shapeshift.com/",
            },
            {
              icon: "".concat(ee, "stakedao.svg"),
              title: "StakeDAO",
              link: "https://stakedao.org/",
            },
            {
              icon: "".concat(ee, "cryptex.svg"),
              title: "Cryptex",
              link: "https://cryptex.finance/",
            },
            {
              icon: "".concat(ee, "frax.svg"),
              title: "Frax",
              link: "https://frax.finance/",
            },
            {
              icon: "".concat(ee, "dfx.svg"),
              title: "DFX",
              link: "https://dfx.finance/",
            },
            {
              icon: "".concat(ee, "reflexer.svg"),
              title: "Reflexer",
              link: "https://www.reflexer.finance/",
            },
            {
              icon: "".concat(ee, "citydao.svg"),
              title: "CityDAO",
              link: "https://citydao.io/",
            },
            {
              icon: "".concat(ee, "threshold.svg"),
              title: "Threshold",
              link: "https://threshold.network/",
            },
            {
              icon: "".concat(ee, "krausehouse.svg"),
              title: "KrauseHouse",
              link: "https://krausehouse.ca/",
            },
            {
              icon: "".concat(ee, "tokenlon.svg"),
              title: "Tokenlon",
              link: "https://tokenlon.im/",
            },
            {
              icon: "".concat(ee, "idle.svg"),
              title: "Idle",
              link: "https://idle.finance/",
            },
            {
              icon: "".concat(ee, "teller.svg"),
              title: "Teller",
              link: "https://teller.finance/",
            },
            {
              icon: "".concat(ee, "sherlock.svg"),
              title: "Sherlock",
              link: "https://sherlock.xyz/",
            },
            {
              icon: "".concat(ee, "badgerdao.svg"),
              title: "BadgerDAO",
              link: "https://badger.finance/",
            },
            {
              icon: "".concat(ee, "solace.svg"),
              title: "Solace",
              link: "https://solace.fi/",
            },
            {
              icon: "".concat(ee, "dreamdao.png"),
              title: "DreamDAO",
              link: "https://dreamdao.io/",
            },
            {
              icon: "".concat(ee, "ondo.svg"),
              title: "Ondo",
              link: "https://ondo.finance/",
            },
            {
              icon: "".concat(ee, "abracadabra.png"),
              title: "Abracadabra",
              link: "https://abracadabra.money/",
            },
            {
              icon: "".concat(ee, "aragon.svg"),
              title: "Aragorn",
              link: "https://aragon.org/",
            },
          ],
          featureItems: [
            { description: "Live styling configurator" },
            { description: "Easy install with a snippet of code" },
            {
              description:
                "External wallet management - use your own wallet connection",
            },
            {
              description:
                "Internal wallet management - no wallet connection needed",
            },
            { description: "Configurable token lists" },
            { description: "Custom-tailored fees" },
            { description: "Fully responsive, from 320px and up" },
            { description: "Feature-adaptive display", comingSoon: !0 },
          ],
        },
        en = {
          appCode: "CoW Protocol: Widget Demo",
          theme: "light",
          standaloneMode: !0,
        },
        ei = !0;
      function eo(e) {
        var t = e.siteConfigData,
          n = t.social,
          i = {};
        Object.entries(n).forEach(function (e) {
          var t = (0, g._)(e, 2),
            n = t[0],
            o = t[1];
          "forum" !== n && "github" !== n && (i[n] = o);
        });
        var o = "Widget - ".concat(t.title),
          r =
            "Integrate the CoW Swap widget to bring seamless, MEV-protected trading to your website or dApp.";
        return (0, m.jsxs)(x.Z, {
          fullWidthGradientVariant: !0,
          children: [
            (0, m.jsxs)(X(), {
              children: [
                (0, m.jsx)("title", { children: o }),
                (0, m.jsx)(
                  "meta",
                  { name: "description", content: r },
                  "description"
                ),
                (0, m.jsx)(
                  "meta",
                  { property: "og:title", content: o },
                  "ogTitle"
                ),
                (0, m.jsx)(
                  "meta",
                  { property: "og:description", content: r },
                  "ogDescription"
                ),
                (0, m.jsx)(
                  "meta",
                  { name: "twitter:title", content: o },
                  "twitterTitle"
                ),
                (0, m.jsx)(
                  "meta",
                  { name: "twitter:description", content: r },
                  "twitterDescription"
                ),
              ],
            }),
            (0, m.jsxs)(w.$0, {
              firstSection: !0,
              children: [
                (0, m.jsx)(w.ZG, {
                  sticky: !0,
                  children: (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)(w.xD, {
                        fontSize: 6.8,
                        fontSizeMobile: 4,
                        lineHeight: 1,
                        textAlign: "left",
                        children:
                          "Bring reliable, MEV-protected swaps to your users",
                      }),
                      (0, m.jsx)(w.DK, {
                        color: Y.Il.text1,
                        fontSize: 2,
                        lineHeight: 1.6,
                        maxWidth: 60,
                        textAlign: "left",
                        children:
                          "Integrate the CoW Swap widget to bring seamless, MEV-protected trading to your website or dApp. Delight your users while adding an extra revenue stream for your project - it's a win-win.",
                      }),
                      (0, m.jsxs)(v.W4, {
                        children: [
                          (0, m.jsx)(q.$t, {
                            href: et.configuratorURL,
                            defaultUtm: (0, f._)((0, p._)({}, R.k.utm), {
                              utmContent:
                                "widget-page-configure-widget-cta-hero",
                            }),
                            passHref: !0,
                            children: (0, m.jsx)(v.zx, {
                              onClick: function () {
                                return (0, z.U)(F.S1.CONFIGURE_WIDGET);
                              },
                              paddingLR: 4.2,
                              fontSizeMobile: 2.1,
                              label: "Configure widget",
                            }),
                          }),
                          (0, m.jsx)(q.$t, {
                            href: et.docsURL,
                            defaultUtm: (0, f._)((0, p._)({}, R.k.utm), {
                              utmContent: "widget-page-readdocs-cta-hero",
                            }),
                            passHref: !0,
                            children: (0, m.jsx)(v.zx, {
                              onClick: function () {
                                return (0, z.U)(F.S1.READ_DOCS);
                              },
                              paddingLR: 4.2,
                              fontSizeMobile: 2.1,
                              label: "Read docs",
                              variant: v.Wu.TEXT,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, m.jsx)(w.ZG, {
                  flow: "column",
                  children: (0, m.jsx)("div", {
                    children: (0, m.jsx)(Q, {
                      id: "COW-WIDGET",
                      children: (0, m.jsx)(V, { params: en }),
                    }),
                  }),
                }),
              ],
            }),
            (0, m.jsxs)(w.$0, {
              fullWidth: !0,
              colorVariant: "dark-gradient",
              flow: "column",
              gap: 14,
              children: [
                (0, m.jsxs)(w.ZG, {
                  flow: "row",
                  maxWidth: 100,
                  textAlign: "left",
                  children: [
                    (0, m.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, m.jsx)("h3", {
                          children: "Earn Revenue for Your Project",
                        }),
                        (0, m.jsx)(w.DK, {
                          lineHeight: 1.4,
                          textAlign: "left",
                          children:
                            "You may collect revenue when users trade with your widget.*",
                        }),
                      ],
                    }),
                    (0, m.jsx)(w.Pi, {
                      children: (0, m.jsx)("img", {
                        src: "".concat(_.H, "/eth-circles.svg"),
                        alt: "Make Money with CoW Swap",
                        width: "340",
                        height: "214",
                      }),
                    }),
                  ],
                }),
                (0, m.jsxs)(w.ZG, {
                  flow: "row",
                  maxWidth: 100,
                  textAlign: "left",
                  reverseOrderMobile: "column-reverse",
                  children: [
                    (0, m.jsx)(w.Pi, {
                      children: (0, m.jsx)("img", {
                        src: "".concat(_.H, "/eth-blocks.svg"),
                        alt: "Integrate With Ease",
                        width: "340",
                        height: "214",
                      }),
                    }),
                    (0, m.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, m.jsx)("h3", { children: "Integrate With Ease" }),
                        (0, m.jsx)(w.DK, {
                          lineHeight: 1.4,
                          textAlign: "left",
                          textAlignMobile: "center",
                          children:
                            "The CoW Swap widget is quick to install and easy to customize. Add the widget to your site in under 5 minutes by copy-pasting a few lines of code. Contact our team for implementation details.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, m.jsx)(w.$0, {
              fullWidth: !0,
              children: (0, m.jsx)(w.ZG, {
                flow: "column",
                children: (0, m.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, m.jsx)("h3", {
                      children: "Every Bell, Whistle, and Moo",
                    }),
                    (0, m.jsx)(w.DK, {
                      lineHeight: 1.4,
                      maxWidth: 85,
                      color: Y.Il.text1,
                      children:
                        "With the CoW Swap widget, you can offer your users everything you know and love about CoW Swap, and more. Oh, and yes… it does come with the “moo”.",
                    }),
                    (0, m.jsx)(w.UK, {
                      maxWidth: 100,
                      gap: 3.8,
                      children: et.everyBell.map(function (e, t) {
                        var n = e.icon,
                          i = e.title,
                          o = e.description;
                        return (0,
                        m.jsxs)(w.Ss, { imageHeight: 5, imageRounded: !0, children: [(0, m.jsx)("img", { src: n, alt: "image" }), (0, m.jsx)("h4", { children: i }), (0, m.jsx)("p", { children: o })] }, t);
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, m.jsx)(w.$0, {
              fullWidth: !0,
              colorVariant: "grey",
              children: (0, m.jsxs)(w.ZG, {
                flow: "row",
                variant: "grid-2",
                children: [
                  (0, m.jsx)(J, {
                    children: (0, m.jsx)("h3", {
                      children: "Everything You'd Want in a Widget",
                    }),
                  }),
                  (0, m.jsx)("div", {
                    children: (0, m.jsx)(w.UK, {
                      gap: 2.4,
                      horizontalGrid: 1,
                      children: et.featureItems
                        .sort(function (e, t) {
                          return (
                            (e.comingSoon ? 1 : 0) - (t.comingSoon ? 1 : 0)
                          );
                        })
                        .map(function (e, t) {
                          var n = e.description,
                            i = e.comingSoon;
                          return (0,
                          m.jsxs)(w.Ss, { imageHeight: 4, imageWidth: 4, imageRounded: !0, variant: "iconWithText", style: { background: i ? Y.Il.grey : "" }, children: [(0, m.jsx)("img", { style: { opacity: i ? 0.5 : 1 }, alt: n || "icon", src: i ? "".concat(_.H, "/icons/coming-soon.svg") : "".concat(_.H, "/icons/check-color.svg") }), (0, m.jsx)("p", { children: n })] }, t);
                        }),
                    }),
                  }),
                ],
              }),
            }),
            (0, m.jsx)(w.$0, {
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, m.jsx)(w.ZG, {
                flow: "column",
                children: (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("h3", {
                      children: "Trusted by the Best in the Field",
                    }),
                    (0, m.jsx)(w.DK, {
                      lineHeight: 1.4,
                      maxWidth: 80,
                      children:
                        "As a trusted name in the DeFi ecosystem, CoW Swap has handled almost $30 billion in trading volume. Whales and DAOs like Aave, ENS, and Gnosis execute their largest treasury swaps on the greener pastures of CoW Swap.",
                    }),
                    (0, m.jsx)(w.UK, {
                      maxWidth: 85,
                      horizontalGrid: 8,
                      horizontalGridMobile: 4,
                      children: et.trustedDAOs.map(function (e, t) {
                        var n = e.icon,
                          i = e.title,
                          o = e.link;
                        return (0,
                        m.jsx)(w.Ss, { padding: 1.2, imageFullSize: !0, variant: "outlined-dark", gap: 3.6, textCentered: !0, contentCentered: !0, className: "iconOnly", children: (0, m.jsx)(q.$t, { href: o, defaultUtm: (0, f._)((0, p._)({}, R.k.utm), { utmContent: "widget-page-partner-".concat(i) }), passHref: !0, children: (0, m.jsx)("img", { src: n, alt: i }) }) }, t);
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, m.jsx)(w.$0, {
              children: (0, m.jsx)(w.ZG, {
                flow: "column",
                children: (0, m.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, m.jsx)("h3", {
                      children: "Integrate in 5 Minutes or less",
                    }),
                    (0, m.jsxs)(v.W4, {
                      center: !0,
                      children: [
                        (0, m.jsx)(q.$t, {
                          href: et.calendlyURL,
                          defaultUtm: (0, f._)((0, p._)({}, R.k.utm), {
                            utmContent: "widget-page-footerCTA-talk-to-us",
                          }),
                          passHref: !0,
                          children: (0, m.jsx)(v.zx, {
                            onClick: function () {
                              return (0, z.U)(F.S1.TALK_TO_US);
                            },
                            paddingLR: 4.2,
                            label: "Talk to us",
                            fontSizeMobile: 2.1,
                          }),
                        }),
                        (0, m.jsx)(q.$t, {
                          href: et.docsURL,
                          defaultUtm: (0, f._)((0, p._)({}, R.k.utm), {
                            utmContent: "widget-page-footerCTA-read-docs",
                          }),
                          passHref: !0,
                          children: (0, m.jsx)(v.zx, {
                            onClick: function () {
                              return (0, z.U)(F.S1.READ_DOCS);
                            },
                            paddingLR: 4.2,
                            fontSizeMobile: 2.1,
                            label: "Read docs",
                            variant: v.Wu.TEXT,
                          }),
                        }),
                        (0, m.jsx)(K(), {
                          href: R.k.url.widgetTnC,
                          passHref: !0,
                          children: (0, m.jsx)(v.zx, {
                            onClick: function () {
                              return (0, z.U)(F.S1.READ_TERMS);
                            },
                            paddingLR: 1,
                            fontSizeMobile: 2.1,
                            label: "Terms & Conditions",
                            variant: v.Wu.TEXT,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, m.jsx)(w.$0, {
              padding: "0",
              paddingMobile: "0 1.6rem",
              children: (0, m.jsx)(w.ZG, {
                flow: "column",
                children: (0, m.jsx)("div", {
                  className: "container",
                  children: (0, m.jsxs)(w.DK, {
                    lineHeight: 1.4,
                    maxWidth: 80,
                    fontSize: 1.3,
                    fontSizeMobile: 1.3,
                    color: Y.Il.text1,
                    children: [
                      (0, m.jsx)("strong", {
                        children: "* Important Disclaimer:",
                      }),
                      " Use of this widget is subject to the laws and regulations of your jurisdiction. You are solely responsible for ensuring compliance, and the provider is not liable for any legal consequences or issues arising from your failure to adhere. Using the widget indicates acceptance of the ",
                      (0, m.jsx)(E.x, {
                        url: "/widget/terms-and-conditions",
                        label: "Terms and Conditions",
                      }),
                      "; if you do not agree, refrain from using it.",
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [596, 624, 489, 774, 888, 179], function () {
      return e((e.s = 4218));
    }),
      (_N_E = e.O());
  },
]);
