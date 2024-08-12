(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    9986: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/daos",
        function () {
          return i(5694);
        },
      ]);
    },
    2960: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return n;
        },
      });
      var n = "/images/";
    },
    5694: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return D;
          },
          default: function () {
            return C;
          },
        });
      var n = i(4022),
        o = i(4670),
        a = i(8588),
        r = i(2322),
        s = i(7729),
        l = i.n(s),
        c = i(5505),
        d = i(336),
        p = i(8222),
        h = i(8241),
        u = i(2960),
        m = u.H + "/dao-logos/",
        g = {
          slides: [
            {
              image: "".concat(u.H, "/dao-enjoy-surplus.svg"),
              title: "Enjoy more price surplus than anywhere else",
              description:
                "Every DEX aggregator will tell you they have the best prices, but at the end of the day, CoW Swap does everything they do and then some. With peer-to-peer order matching, gas optimization, and MEV protection, CoW Swap improves your quoted price and forwards the surplus back to you.",
            },
            {
              image: "".concat(u.H, "/dao-custom-tailor-orders.svg"),
              title: "Stop scrambling for signatures",
              description:
                "Tired of rushing to sign the multi-sig? Eyes glazed over from staring at candlesticks? CoW Swap automatically adjusts your trade's execution path to fill your order at the best possible price, every time.",
            },
            {
              image: "".concat(u.H, "/dao-vote-once.svg"),
              title: "Forget about voting twice ",
              description:
                "Milkman orders from CoW Swap let your DAO approve trades based on dynamic price feeds rather than fixed prices, so you don't have to re-vote if the market moves significantly.",
            },
            {
              image: "".concat(u.H, "/dao-outsmart-bots.svg"),
              title: "Outsmart the bots",
              description:
                "CoW Swap offers MEV protection that is one order of magnitude better than any other exchange. Solvers execute trades on your behalf so you're never exposed to on-chain attacks – and even when trade details are announced weeks in advance, CoW Swap stands between you and the MEV bots.",
            },
            {
              image: "".concat(u.H, "/dao-manage-price-impact.svg"),
              title: "Manage price impact",
              description:
                "Your trades move markets… but being the biggest isn't always the best. CoW Swap spreads your order across multiple liquidity pools so you make as little of a splash as possible.",
            },
            {
              image: "".concat(u.H, "/dao-do-more.svg"),
              title: "Do anything you can imagine",
              description:
                "With CoW Swap you can customize rules for your orders above and beyond traditional settings. Want to trigger a trade only when a wallet has n funds in it? Want to schedule recurring trades? CoW Swap lets you do all that and more in just a few clicks.",
            },
          ],
          orderTypes: [
            {
              icon: "".concat(u.H, "/icon-milkman.svg"),
              title: "Milkman Orders",
              description: (0, r.jsxs)(r.Fragment, {
                children: [
                  "Ensure your trades are always close to the real-time market price thanks to the",
                  " ",
                  (0, r.jsx)(h.$t, {
                    href: "https://github.com/charlesndalton/milkman",
                    defaultUtm: (0, o._)((0, n._)({}, p.k.utm), {
                      utmContent: "daos-page",
                    }),
                    passHref: !0,
                    children: "Milkman bot",
                  }),
                  ". Set the maximum deviation you'll accept, and Milkman will do the rest.",
                ],
              }),
            },
            {
              icon: "".concat(u.H, "/icon-twap-orders.svg"),
              title: "TWAP Orders",
              description:
                "Time-weighted average price orders allow you to spread your trade out over time, averaging out your trading price, minimizing price impact, and allowing for lower slippage.",
            },
            {
              icon: "".concat(u.H, "/icon-limit-orders.svg"),
              title: "Limit Orders",
              description:
                "CoW Swap's surplus-capturing limit orders allow you to set a price and sit back while your order gets filled over time - perfect for token buybacks and other large trades.",
            },
            {
              icon: "".concat(u.H, "/icon-price-walls.svg"),
              title: "Price Walls",
              description:
                "Pick an asset, define a threshold price, and CoW Swap will automatically sell above the threshold, and buy below it.",
            },
            {
              icon: "".concat(u.H, "/icon-basket-sells.svg"),
              title: "Basket Sells",
              description: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(h.$t, {
                    href: "https://dump.services/",
                    defaultUtm: (0, o._)((0, n._)({}, p.k.utm), {
                      utmContent: "daos-page",
                    }),
                    passHref: !0,
                    children: "Dump.services",
                  }),
                  ", a collaboration between CoW Swap and Yearn, allows DAOs and traders to sell multiple tokens in a single transaction.",
                ],
              }),
            },
            {
              icon: "".concat(u.H, "/icon-logic.svg"),
              title: "Place Your Logic Here",
              description:
                "ERC-1271 Smart Orders and CoW Hooks allow you to define your own complex trading logic; if you can think it, you can trade it.",
            },
          ],
          trustedDAOs: [
            {
              icon: "".concat(m, "aave.svg"),
              title: "Aave",
              description:
                "Aave DAO used CoW Swap to swap over $4 million directly into Balancer liquidity pool",
              link: "https://medium.com/@cow-protocol/aave-trade-breakdown-e17a7563d7ba",
              volume: "$4 million",
            },
            {
              icon: "".concat(m, "nexus.svg"),
              title: "Nexus Mutual",
              description:
                "In the largest DAO trade ever, Nexus Mutual relied on CoW Swap to trade 14,400 ETH for the rETH liquid staking token",
              link: "https://medium.com/@cow-protocol/nexus-mutual-trade-breakdown-4aacc6a94be8",
              volume: "14,400 ETH",
            },
            {
              icon: "".concat(m, "ens.svg"),
              title: "ENS",
              description:
                "ENS DAO traded a whopping 10,000 of ETH ($16.5 million dollars) for USDC through CoW Swap",
              link: "https://medium.com/@cow-protocol/ens-trade-breakdown-a8eb00ddd8c0",
              volume: "10,000 ETH",
            },
            {
              icon: "".concat(m, "karpatkey.svg"),
              title: "Karpatkey",
              link: "https://www.karpatkey.com/",
            },
            {
              icon: "".concat(m, "maker.svg"),
              title: "MakerDAO",
              link: "https://makerdao.com/",
            },
            {
              icon: "".concat(m, "lido.svg"),
              title: "Lido",
              link: "https://lido.fi/",
            },
            {
              icon: "".concat(m, "yearn.svg"),
              title: "Yearn",
              link: "https://yearn.finance/",
            },
            {
              icon: "".concat(m, "gnosis.svg"),
              title: "Gnosis",
              link: "https://www.gnosis.io/",
            },
            {
              icon: "".concat(m, "synthetix.svg"),
              title: "Synthetix",
              link: "https://synthetix.io/",
            },
            {
              icon: "".concat(m, "balancer.svg"),
              title: "Balancer",
              link: "https://balancer.fi/",
            },
            {
              icon: "".concat(m, "aura.svg"),
              title: "Aura",
              link: "https://aura.finance/",
            },
            {
              icon: "".concat(m, "vitadao.svg"),
              title: "VitaDAO",
              link: "https://www.vitadao.com/",
            },
            {
              icon: "".concat(m, "polygon.svg"),
              title: "Polygon",
              link: "https://polygon.technology/",
            },
            {
              icon: "".concat(m, "pleasrdao.svg"),
              title: "PleasrDAO",
              link: "https://pleasr.org/",
            },
            {
              icon: "".concat(m, "olympus.svg"),
              title: "Olympus",
              link: "https://www.olympusdao.finance/",
            },
            {
              icon: "".concat(m, "dxdao.svg"),
              title: "DxDAO",
              link: "https://dxdao.eth.limo/",
            },
            {
              icon: "".concat(m, "mstables.svg"),
              title: "mStables",
              link: "https://mstable.org/",
            },
            {
              icon: "".concat(m, "index.svg"),
              title: "Index",
              link: "https://indexcoop.com/",
            },
            {
              icon: "".concat(m, "rhino.svg"),
              title: "Rhino",
              link: "https://rhino.fi/",
            },
            {
              icon: "".concat(m, "jpgd.svg"),
              title: "JPGD",
              link: "https://jpegd.io/",
            },
            {
              icon: "".concat(m, "benddao.svg"),
              title: "BendDAO",
              link: "https://www.benddao.xyz/",
            },
            {
              icon: "".concat(m, "alchemix.svg"),
              title: "Alchemix",
              link: "https://alchemix.fi/",
            },
            {
              icon: "".concat(m, "stargate.svg"),
              title: "Stargate",
              link: "https://stargate.io/",
            },
            {
              icon: "".concat(m, "shapeshift.svg"),
              title: "ShapeShift",
              link: "https://shapeshift.com/",
            },
            {
              icon: "".concat(m, "stakedao.svg"),
              title: "StakeDAO",
              link: "https://stakedao.org/",
            },
            {
              icon: "".concat(m, "cryptex.svg"),
              title: "Cryptex",
              link: "https://cryptex.finance/",
            },
            {
              icon: "".concat(m, "frax.svg"),
              title: "Frax",
              link: "https://frax.finance/",
            },
            {
              icon: "".concat(m, "dfx.svg"),
              title: "DFX",
              link: "https://dfx.finance/",
            },
            {
              icon: "".concat(m, "reflexer.svg"),
              title: "Reflexer",
              link: "https://www.reflexer.finance/",
            },
            {
              icon: "".concat(m, "citydao.svg"),
              title: "CityDAO",
              link: "https://citydao.io/",
            },
            {
              icon: "".concat(m, "threshold.svg"),
              title: "Threshold",
              link: "https://threshold.network/",
            },
            {
              icon: "".concat(m, "krausehouse.svg"),
              title: "KrauseHouse",
              link: "https://krausehouse.ca/",
            },
            {
              icon: "".concat(m, "tokenlon.svg"),
              title: "Tokenlon",
              link: "https://tokenlon.im/",
            },
            {
              icon: "".concat(m, "idle.svg"),
              title: "Idle",
              link: "https://idle.finance/",
            },
            {
              icon: "".concat(m, "teller.svg"),
              title: "Teller",
              link: "https://teller.finance/",
            },
            {
              icon: "".concat(m, "sherlock.svg"),
              title: "Sherlock",
              link: "https://sherlock.xyz/",
            },
            {
              icon: "".concat(m, "badgerdao.svg"),
              title: "BadgerDAO",
              link: "https://badger.finance/",
            },
            {
              icon: "".concat(m, "solace.svg"),
              title: "Solace",
              link: "https://solace.fi/",
            },
            {
              icon: "".concat(m, "dreamdao.png"),
              title: "DreamDAO",
              link: "https://dreamdao.io/",
            },
            {
              icon: "".concat(m, "ondo.svg"),
              title: "Ondo",
              link: "https://ondo.finance/",
            },
            {
              icon: "".concat(m, "abracadabra.png"),
              title: "Abracadabra",
              link: "https://abracadabra.money/",
            },
            {
              icon: "".concat(m, "aragon.svg"),
              title: "Aragorn",
              link: "https://aragon.org/",
            },
          ],
        },
        f = i(9210),
        x = i(489),
        w = i(5624),
        v = i(7741),
        k = i(2417),
        b = i(4804);
      i(2321), i(3928), i(9096);
      var y = i(7702),
        j = i(3524),
        S = c.ZP.div.withConfig({ componentId: "sc-60c0673e-0" })(
          [
            "--swiper-navigation-color:",
            ";--swiper-theme-color:",
            ";--swiper-pagination-bullet-inactive-color:",
            ";--swiper-pagination-bullet-size:1.2rem;display:flex;flex-flow:column wrap;width:100%;overflow:hidden;.daoSwiper{position:relative;padding:0 0 5rem;",
            "{overflow-x:visible;}&::before,&::after{content:'';height:100%;width:16rem;position:absolute;left:0;top:0;background:linear-gradient(90deg,",
            ",",
            " 100%);z-index:10;",
            "{display:none;content:none;}}&::after{background:linear-gradient(270deg,",
            ",",
            " 100%);left:initial;right:0;}}.daoSwiper{display:flex;flex-flow:column wrap;width:100%;max-width:100%;}.daoSwiper > .swiper-wrapper{max-width:80%;align-items:flex-start;justify-content:flex-start;",
            "{max-width:100%;align-items:stretch;}}.daoSwiper > .swiper-wrapper > .swiper-slide{height:49rem;width:100%;max-width:100%;margin:0 auto;border-radius:6rem;border:0.1rem solid ",
            ";color:",
            ";font-size:2.4rem;display:grid;grid-template-columns:repeat(2,1fr);align-items:center;justify-content:flex-start;overflow:hidden;",
            "{height:auto;max-width:95%;display:flex;flex-flow:column wrap;}> img{max-width:100%;height:100%;object-fit:cover;",
            "{height:12rem;width:100%;margin:0 auto 2.4rem;}}> span{display:flex;flex-flow:column wrap;padding:5.6rem;gap:2.4rem;",
            "{padding:0 3.2rem 4.6rem;}}> span > h4{margin:0;font-size:3.4rem;line-height:1.2;color:",
            ";font-weight:",
            ";background:",
            ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&::selection{background-clip:initial;-webkit-text-fill-color:initial;}",
            "{font-size:2.4rem;}}> span > p{font-size:1.8rem;line-height:1.4;",
            "{font-size:1.6rem;}}}.swiper-button-next{z-index:20;",
            "{left:initial;right:5px;}}.swiper-button-prev{z-index:20;",
            "{left:5px;right:initial;}}",
          ],
          f.Il.lightBlue,
          f.Il.lightBlue,
          f.Il.lightBlue,
          f.pU.mobile,
          f.Il.darkBlue,
          (0, d.DZ)(1, f.Il.darkBlue),
          f.pU.mobile,
          f.Il.darkBlue,
          (0, d.DZ)(1, f.Il.darkBlue),
          f.pU.mobile,
          f.Il.border,
          f.Il.lightBlue,
          f.pU.mediumDown,
          f.pU.mediumDown,
          f.pU.mediumDown,
          f.Il.lightBlue,
          f.Zx.weightMedium,
          f.Il.gradient,
          f.pU.mobile,
          f.pU.mobile,
          f.pU.mobile,
          f.pU.mobile
        ),
        D = !0;
      function C(e) {
        var t = e.siteConfigData.social,
          i = {};
        Object.entries(t).forEach(function (e) {
          var t = (0, a._)(e, 2),
            n = t[0],
            o = t[1];
          "forum" !== n && "github" !== n && (i[n] = o);
        });
        var s = "CoW Swap for DAOs",
          c =
            "CoW Swap protects DAOs from MEV and ensures they get the best prices for their treasury trades.";
        return (0, r.jsxs)(w.Z, {
          fullWidthGradientVariant: !0,
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("title", { children: s }),
                (0, r.jsx)(
                  "meta",
                  { name: "description", content: c },
                  "description"
                ),
                (0, r.jsx)(
                  "meta",
                  { property: "og:title", content: s },
                  "ogTitle"
                ),
                (0, r.jsx)(
                  "meta",
                  { property: "og:description", content: c },
                  "ogDescription"
                ),
                (0, r.jsx)(
                  "meta",
                  { name: "twitter:title", content: s },
                  "twitterTitle"
                ),
                (0, r.jsx)(
                  "meta",
                  { name: "twitter:description", content: c },
                  "twitterDescription"
                ),
              ],
            }),
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              padding: "8rem 8rem 4rem",
              paddingMobile: "0 2.4rem 4rem",
              children: (0, r.jsx)(x.ZG, {
                flow: "column",
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)(x.xD, {
                      fontSize: 7,
                      fontSizeMobile: 4,
                      children: [
                        (0, r.jsx)("b", {
                          children: (0, r.jsx)("i", { children: "Savvy DAOs" }),
                        }),
                        " ",
                        (0, r.jsxs)("span", {
                          className: "text-weight-light",
                          children: [(0, r.jsx)("br", {}), "Choose CoW Swap"],
                        }),
                      ],
                    }),
                    (0, r.jsx)(x.DK, {
                      color: f.Il.text1,
                      fontSize: 3,
                      lineHeight: 1.4,
                      maxWidth: 60,
                      children:
                        "The smartest DAOs trust CoW Swap with their most-important trades",
                    }),
                    (0, r.jsx)(k.zx, {
                      href: "#benefits",
                      onClick: function (e) {
                        e.preventDefault();
                        var t = e.currentTarget.href.replace(/.*\#/, ""),
                          i = document.getElementById(t);
                        null == i || i.scrollIntoView({ behavior: "smooth" });
                      },
                      paddingLR: 4.2,
                      fontSizeMobile: 2.1,
                      label: "Learn why",
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              padding: "0",
              paddingMobile: "0",
              children: (0, r.jsxs)(x.ct, {
                children: [
                  (0, r.jsx)("p", { children: "Trusted by" }),
                  (0, r.jsx)("ul", {
                    children: g.trustedDAOs.map(function (e, t) {
                      var i = e.icon,
                        n = e.title,
                        o = e.volume;
                      return (
                        o &&
                        (0, r.jsxs)(
                          "li",
                          {
                            children: [
                              (0, r.jsx)(b.Z, { src: i, title: n }),
                              (0, r.jsx)("small", { children: "with" }),
                              (0, r.jsx)("strong", { children: o }),
                            ],
                          },
                          t
                        )
                      );
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              colorVariant: "dark",
              id: "benefits",
              children: (0, r.jsx)(x.ZG, {
                children: (0, r.jsxs)(S, {
                  children: [
                    (0, r.jsx)("h3", {
                      children: "Expert trading for expert DAOs",
                    }),
                    (0, r.jsx)(x.DK, {
                      color: f.Il.lightBlue,
                      lineHeight: 1.4,
                      maxWidth: 80,
                      children:
                        "CoW Swap is the only DEX built to solve the unique challenges faced by DAOs",
                    }),
                    (0, r.jsx)(y.tq, {
                      slidesPerView: "auto",
                      centeredSlides: !0,
                      grabCursor: !0,
                      loop: !0,
                      keyboard: { enabled: !0 },
                      pagination: { dynamicBullets: !0, clickable: !0 },
                      autoplay: { delay: 5e3, disableOnInteraction: !0 },
                      navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      },
                      spaceBetween: 50,
                      modules: [j.pt, j.tl, j.W_],
                      className: "daoSwiper",
                      children: g.slides.map(function (e, t) {
                        return (0,
                        r.jsxs)(y.o5, { children: [(0, r.jsx)("img", { src: e.image, alt: e.title }), (0, r.jsxs)("span", { children: [(0, r.jsx)("h4", { children: e.title }), (0, r.jsx)("p", { children: e.description })] })] }, t);
                      }),
                    }),
                    (0, r.jsx)("div", { className: "swiper-button-prev" }),
                    (0, r.jsx)("div", { className: "swiper-button-next" }),
                  ],
                }),
              }),
            }),
            "// SS",
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              children: (0, r.jsx)(x.ZG, {
                flow: "column",
                children: (0, r.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, r.jsx)("h3", { children: "Advanced order types" }),
                    (0, r.jsx)(x.DK, {
                      color: f.Il.text1,
                      lineHeight: 1.4,
                      maxWidth: 70,
                      children:
                        "CoW Swap's many order types help you get better prices for your trades, manage token launches, facilitate buybacks, and much more",
                    }),
                    (0, r.jsx)(x.UK, {
                      maxWidth: 100,
                      children: g.orderTypes.map(function (e, t) {
                        return (0,
                        r.jsxs)(x.Ss, { imageHeight: 8, imageRounded: !0, children: [(0, r.jsx)("img", { src: e.icon, alt: "image" }), (0, r.jsx)("h4", { children: e.title }), (0, r.jsx)("p", { children: e.description })] }, t);
                      }),
                    }),
                    (0, r.jsx)(h.$t, {
                      href: "https://blog.cow.fi/list/advanced-order-types-b391bd4390cb",
                      defaultUtm: (0, o._)((0, n._)({}, p.k.utm), {
                        utmContent: "daos-page",
                      }),
                      passHref: !0,
                      children: (0, r.jsx)(k.zx, {
                        paddingLR: 4.2,
                        label: "Explore Advanced Order Types",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              colorVariant: "dark",
              children: (0, r.jsx)(x.ZG, {
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("h3", { children: "Trusted by the best" }),
                    (0, r.jsx)(x.UK, {
                      maxWidth: 85,
                      children: g.trustedDAOs
                        .filter(function (e) {
                          return e.description;
                        })
                        .map(function (e, t) {
                          var i = e.description,
                            a = e.icon,
                            s = e.title,
                            l = e.link;
                          return (0,
                          r.jsxs)(x.Ss, { variant: "outlined-dark", gap: 3.6, imageFullSize: !0, textCentered: !0, children: [(0, r.jsx)(h.$t, { href: l, defaultUtm: (0, o._)((0, n._)({}, p.k.utm), { utmContent: "daos-page" }), passHref: !0, children: (0, r.jsx)("img", { src: a, alt: s }) }), (0, r.jsxs)("span", { children: [(0, r.jsx)("p", { children: i }), (0, r.jsx)(h.$t, { href: l, defaultUtm: (0, o._)((0, n._)({}, p.k.utm), { utmContent: "daos-page" }), passHref: !0, children: "Case study" })] })] }, t);
                        }),
                    }),
                    (0, r.jsx)(x.UK, {
                      maxWidth: 85,
                      horizontalGrid: 8,
                      horizontalGridMobile: 4,
                      children: g.trustedDAOs
                        .filter(function (e) {
                          return !e.description;
                        })
                        .map(function (e, t) {
                          var i = e.icon,
                            a = e.title,
                            s = e.link;
                          return (0,
                          r.jsx)(x.Ss, { padding: 1.2, imageFullSize: !0, variant: "outlined-dark", gap: 3.6, textCentered: !0, contentCentered: !0, className: "iconOnly", children: (0, r.jsx)(h.$t, { href: s, defaultUtm: (0, o._)((0, n._)({}, p.k.utm), { utmContent: "daos-page" }), passHref: !0, children: (0, r.jsx)("img", { src: i, alt: a }) }) }, t);
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)(x.$0, {
              fullWidth: !0,
              children: (0, r.jsx)(x.ZG, {
                flow: "column",
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("h3", { children: "Get in touch" }),
                    (0, r.jsx)(x.DK, {
                      maxWidth: 60,
                      color: f.Il.text1,
                      lineHeight: 1.4,
                      children:
                        "Learn more about how CoW Protocol can help your DAO by reaching out on Twitter or Discord",
                    }),
                    (0, r.jsx)(v.Z, { social: i, color: f.Il.darkBlue }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [596, 940, 624, 489, 774, 888, 179], function () {
      return e((e.s = 9986));
    }),
      (_N_E = e.O());
  },
]);
