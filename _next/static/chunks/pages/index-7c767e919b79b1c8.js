(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7314: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(2806);
        },
      ]);
    },
    2806: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          __N_SSG: function () {
            return g;
          },
          default: function () {
            return p;
          },
        });
      var n = r(2322),
        i = r(7729),
        o = r.n(i),
        t = r(5624),
        a = r(4022),
        l = r(4670),
        c = r(8222),
        h = r(9210),
        d = r(2417),
        x = r(7741),
        u = r(489),
        f = r(8241);
      function j(e) {
        var s = e.metricsData,
          r = e.siteConfigData,
          i = r.social,
          o = r.url;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.$0, {
              firstSection: !0,
              children: (0, n.jsxs)(u.ZG, {
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(u.xD, {
                        fontSize: 6.8,
                        fontSizeMobile: 4,
                        textAlign: "left",
                        children: "Better than the best prices",
                      }),
                      (0, n.jsx)(u.DK, {
                        textAlign: "left",
                        color: h.Il.text1,
                        lineHeight: 1.4,
                        children:
                          "CoW Protocol finds the lowest price for your trade across all exchanges and aggregators, such as Uniswap and 1inch - and protects you from MEV, unlike the others.",
                      }),
                      (0, n.jsxs)(d.W4, {
                        children: [
                          (0, n.jsx)(f.$t, {
                            href: o.swap,
                            defaultUtm: (0, l._)((0, a._)({}, c.k.utm), {
                              utmContent: "landing-cta-button",
                            }),
                            passHref: !0,
                            children: (0, n.jsx)(d.zx, {
                              paddingLR: 4.2,
                              fontSizeMobile: 2.1,
                              label: "Start trading",
                            }),
                          }),
                          (0, n.jsx)(d.zx, {
                            paddingLR: 4.2,
                            fontSizeMobile: 2.1,
                            variant: d.Wu.TEXT,
                            href: "#developers",
                            onClick: function (e) {
                              e.preventDefault();
                              var s = e.currentTarget.href.replace(/.*\#/, ""),
                                r = document.getElementById(s);
                              null == r ||
                                r.scrollIntoView({ behavior: "smooth" });
                            },
                            label: "Start building",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(u.Pi, {
                    hero: !0,
                    children: (0, n.jsx)("img", {
                      src: "images/hero-image.svg",
                      alt: "CoW Protocol",
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(u.$0, {
              id: "about",
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, n.jsx)(u.ZG, {
                flow: "column",
                children: (0, n.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, n.jsx)("h3", {
                      children: "The smartest way to trade.",
                    }),
                    (0, n.jsxs)(u.Zd, {
                      children: [
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/lowPrice.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Lower prices thanks to CoWs.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "CoW Protocol matches trades peer-to-peer where possible, cutting out the middleman and saving you money. (We call this a Coincidence of Wants - CoW!)",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/liquidity.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children:
                                  "Never pay more than the cheapest alternative.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "No need to compare prices on 1inch, Uniswap or another exchange. CoW Protocol searches them all for you, so you get the best price available.",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/mev.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Protection from MEV.",
                              }),
                              (0, n.jsxs)("p", {
                                children: [
                                  "CoW Protocol is the industry leader in protecting users from frontrunning and sandwich attacks, which lose traders thousands of dollars every day. It does this by matching trades peer-to-peer, and leveraging batch auctions [→] so trade order becomes irrelevant.",
                                  " ",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/savings.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Keep your surplus.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "CoW Protocol gives you extra tokens if the price moves in your favor after you’ve placed an order.",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/sun.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Never pay for failed transactions.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "CoW Protocol never charges for failed transactions – unlike almost every other DEX or aggregator.",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/gas.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "ETH-less trading.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "CoW Protocol takes its fees in the sell token, so you can save your precious ETH.",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/list.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Execute many orders at once.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "Never wait for one trade to finish before placing another.",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)(u.Mp, {
                          icon: "images/icons/shield.svg",
                          children: (0, n.jsxs)("span", {
                            children: [
                              (0, n.jsx)("b", {
                                children: "Safe and reliable.",
                              }),
                              (0, n.jsx)("p", {
                                children:
                                  "CoW Protocol was incubated by Gnosis, built by a transparent and trusted community of engineers that keep security top-of-mind at all times.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)(u.$0, {
              className: "container",
              flow: "column",
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, n.jsx)(u.ZG, {
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("h3", { children: "Cutting-edge technology" }),
                    (0, n.jsxs)(u.DK, {
                      textAlign: "center",
                      children: [
                        "CoW Protocol batches orders, matches Coincidences of Wants (",
                        (0, n.jsx)("a", {
                          href: "https://docs.cow.fi/cow-protocol/concepts/how-it-works/coincidence-of-wants",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "CoWs",
                        }),
                        "), and sources excess volume from all DEXs and DEX aggregators. That's how the protocol makes sure you always get the best price for your trade.",
                      ],
                    }),
                    (0, n.jsxs)(u.V8, {
                      children: [
                        (0, n.jsxs)(u.o3, {
                          children: [
                            (0, n.jsx)("span", { children: "1" }),
                            (0, n.jsx)("img", {
                              src: "images/icons/funnel.svg",
                              alt: "funnel",
                            }),
                            (0, n.jsxs)("p", {
                              children: [
                                (0, n.jsx)("b", { children: "Batch" }),
                                " CoW Protocol collects orders into “batches” every 30 seconds. This is done off-chain, which has a few benefits – you won’t pay if your trade fails, and the fees are collected in your sell token, not ETH.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(u.o3, {
                          children: [
                            (0, n.jsx)("span", { children: "2" }),
                            (0, n.jsx)("img", {
                              src: "images/icons/p2p-v2.svg",
                              alt: "Peer to Peer",
                            }),
                            (0, n.jsxs)("p", {
                              children: [
                                (0, n.jsx)("b", { children: "Match" }),
                                "CoW Protocol's network of solving algorithms (“solvers”) scans each batch for Coincidences of Wants (i.e. traders who want what each other has). These “CoWs” are matched peer-to-peer, so everyone gets a better price and no one pays unnecessary AMM fees.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(u.o3, {
                          children: [
                            (0, n.jsx)("span", { children: "3" }),
                            (0, n.jsx)("img", {
                              src: "images/icons/network.svg",
                              alt: "batch auction",
                            }),
                            (0, n.jsxs)("p", {
                              children: [
                                (0, n.jsx)("b", { children: "Search" }),
                                " CoW Protocol's solvers compete to find the best liquidity source for your trade across all decentralized exchanges and aggregators. So the worst price you'll get with CoW Protocol is the best price available elsewhere.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)(u.o3, {
                          imageWidth: 6,
                          children: [
                            (0, n.jsx)("span", { children: "4" }),
                            (0, n.jsx)("img", {
                              src: "images/icons/shield2.svg",
                              alt: "On-chain MEV protection",
                            }),
                            (0, n.jsxs)("p", {
                              children: [
                                (0, n.jsx)("b", { children: "Settle" }),
                                " CoW Protocol submits the batches on-chain and hides them from the public mempool, so your trade is protected from manipulation (frontrunning and other forms of MEV) by miners and bots.",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)(u.$0, {
              flow: "column",
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, n.jsx)(u.ZG, {
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("h3", {
                      children: "Serious volume, serious savings.",
                    }),
                    (0, n.jsx)(u.DK, {
                      maxWidth: 80,
                      textAlign: "center",
                      children:
                        "Whether you are a whale, a dolphin or a prawn, you can always trust CoW Protocol to find the lowest prices possible and protect you from MEV.",
                    }),
                    (0, n.jsx)(u.C3, {
                      children: (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsxs)("b", {
                                children: ["$", s.totalVolume],
                              }),
                              (0, n.jsx)("i", {
                                children: "Total volume traded (USD)",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("b", {
                                "data-last-modified": s.tradesCountLastModified,
                                children: s.tradesCount,
                              }),
                              (0, n.jsx)("i", { children: "All time trades" }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsxs)("b", {
                                "data-last-modified":
                                  s.totalSurplusLastModified,
                                children: ["$", s.totalSurplus],
                              }),
                              (0, n.jsx)("i", {
                                children: "Surplus saved for users",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)(u.$0, {
              className: "container",
              id: "developers",
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, n.jsxs)(u.ZG, {
                variant: "banner",
                reverseOrderMobile: "column-reverse",
                children: [
                  (0, n.jsx)(u.gr, {
                    children: (0, n.jsxs)("ol", {
                      children: [
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://balancer.fi/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/balancer.svg",
                              alt: "Balancer",
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://safe.global/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/safe.svg",
                              alt: "Safe",
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://swapr.eth.limo/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/swapr.svg",
                              alt: "Swapr",
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://shapeshift.com/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/shapeshift.svg",
                              alt: "Shapeshift",
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://yearn.finance/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/yearn.svg",
                              alt: "Yearn finance",
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            href: "https://aura.finance/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, n.jsx)("img", {
                              src: "/images/icons/aura.svg",
                              alt: "Aura finance",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("h3", {
                        children: "Quick and simple integration",
                      }),
                      (0, n.jsx)(u.DK, {
                        children:
                          "Join a growing list of partners that have built a better experience for their users by integrating CoW Protocol.",
                      }),
                      (0, n.jsxs)(d.W4, {
                        center: !0,
                        children: [
                          (0, n.jsx)(d.zx, {
                            href: o.docs,
                            label: "Explore docs",
                            fontSizeMobile: 2.1,
                            target: "_blank",
                            rel: "noopener nofollow",
                            variant: d.Wu.LIGHT,
                          }),
                          (0, n.jsx)(d.zx, {
                            href: "mailto:bd@cow.fi",
                            label: "Talk to us",
                            fontSizeMobile: 2.1,
                            target: "_blank",
                            rel: "noopener nofollow",
                            variant: d.Wu.LIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(u.$0, {
              flow: "column",
              id: "community",
              fullWidth: !0,
              children: (0, n.jsx)(u.ZG, {
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("h3", { children: "Join the CoWmunity" }),
                    (0, n.jsx)(u.DK, {
                      maxWidth: 60,
                      color: h.Il.text1,
                      children:
                        "Learn more about CoW Protocol, get support, and have your say in shaping the future of decentralized finance.",
                    }),
                    (0, n.jsx)(x.Z, { social: i, color: h.Il.darkBlue }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var g = !0;
      function p(e) {
        var s = e.metricsData,
          r = e.siteConfigData;
        return (0, n.jsxs)(t.Z, {
          fullWidthGradientVariant: !0,
          children: [
            (0, n.jsx)(o(), {
              children: (0, n.jsxs)("title", {
                children: [r.title, " - ", r.descriptionShort],
              }),
            }),
            (0, n.jsx)(j, { metricsData: s, siteConfigData: r }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [596, 624, 489, 774, 888, 179], function () {
      return e((e.s = 7314));
    }),
      (_N_E = e.O());
  },
]);
