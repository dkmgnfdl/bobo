(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [54],
  {
    3895: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/cow-amm",
        function () {
          return i(2324);
        },
      ]);
    },
    2960: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return o;
        },
      });
      var o = "/images/";
    },
    2324: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return v;
          },
          default: function () {
            return j;
          },
        });
      var o = i(4022),
        r = i(4670),
        n = i(8588),
        a = i(2322);
      i(2784);
      var l = i(7729),
        s = i.n(l),
        c = i(8222),
        d = i(9210),
        h = i(489),
        m = i(5624),
        u = i(5505).ZP.div.withConfig({ componentId: "sc-5b0576fa-0" })(
          [
            "--titleSize:",
            ";--color:",
            ";display:flex;flex-flow:column wrap;align-items:flex-start;margin:2.4rem 0;width:",
            ";font-size:",
            ";font-weight:",
            ";",
            "{--titleSize:",
            ";width:100%;}a{color:var(--color);font-weight:inherit;text-decoration:underline;}details{display:flex;flex-flow:column wrap;width:100%;margin:0 auto;padding:0;line-height:1;font-size:inherit;font-weight:inherit;position:relative;",
            "{font-size:2rem;}}details > summary{display:flex;align-items:flex-start;justify-content:flex-start;font-weight:inherit;cursor:pointer;margin:0;padding:3.8rem var(--titleSize) 3.8rem 0;padding:3.8rem calc((var(--titleSize) + 1rem)) 3.8rem 0;list-style-type:none;line-height:1.2;border-bottom:0.2rem solid var(--color);position:relative;font-size:var(--titleSize);&::marker,&::-webkit-details-marker{display:none;}&::after{content:'';background:url('/images/cowamm-plus-sign.svg') no-repeat center/contain;display:flex;align-items:center;text-align:center;width:var(--titleSize);height:var(--titleSize);margin:auto;position:absolute;font-size:inherit;right:0;top:0;bottom:0;}}details > div{font-size:",
            ";line-height:1.8;margin:0;padding:0 33% 6.2rem 0;",
            "{padding:0 0 6.2rem;font-size:",
            ";}}details[open] > div{border-bottom:0.2rem solid var(--color);}details[open] > summary{border-bottom:0.2rem solid transparent;}details[open] > summary::after{background:url('/images/cowamm-minus-sign.svg') no-repeat center/contain;}",
          ],
          function (e) {
            var t = e.titleFontSize;
            return t ? "".concat(t, "rem") : "4.8rem";
          },
          function (e) {
            return e.color || d.Il.darkBlue;
          },
          function (e) {
            var t = e.maxWidth;
            return t ? "".concat(t, "rem") : "100%";
          },
          function (e) {
            var t = e.bodyFontSize;
            return t ? "".concat(t, "rem") : "2.4rem";
          },
          d.Zx.weightNormal,
          d.pU.mobile,
          function (e) {
            var t = e.titleFontSizeMobile;
            return t ? "".concat(t, "rem") : "2.8rem";
          },
          d.pU.mobile,
          function (e) {
            var t = e.bodyFontSize;
            return t ? "".concat(t, "rem") : "2.4rem";
          },
          d.pU.mobile,
          function (e) {
            var t = e.bodyFontSizeMobile;
            return t ? "".concat(t, "rem") : "2rem";
          }
        );
      function f(e) {
        var t = e.children,
          i = e.maxWidth,
          o = e.titleFontSize,
          r = e.titleFontSizeMobile,
          n = e.bodyFontSize,
          l = e.bodyFontSizeMobile,
          s = e.color;
        return (0, a.jsx)(u, {
          titleFontSize: o,
          titleFontSizeMobile: r,
          bodyFontSize: n,
          bodyFontSizeMobile: l,
          maxWidth: i,
          color: s,
          children: t,
        });
      }
      var g = i(8241),
        p = i(2417),
        x = i(7045),
        w = i(8018),
        M = i(2960),
        b = "https://cowprotocol.typeform.com/cow-amm-lpers",
        y = {
          howItWorksCards: [
            {
              image: "".concat(M.H, "/cowamm-howitworks-1.svg"),
              description:
                "Liquidity providers deposit tokens into protected CoW AMM liquidity pools, where traders can access the liquidity",
            },
            {
              image: "".concat(M.H, "/cowamm-howitworks-2.svg"),
              description:
                "Solvers bid to rebalance CoW AMM pools whenever there is an arbitrage opportunity",
            },
            {
              image: "".concat(M.H, "/cowamm-howitworks-3.svg"),
              description:
                "The solver that offers the most surplus to the pool wins the right to rebalance the pool",
            },
            {
              image: "".concat(M.H, "/cowamm-howitworks-4.svg"),
              description:
                "CoW AMM eliminates LVR by capturing arbitrage value for LPs and shielding it from MEV bots",
            },
          ],
          feedbackPartners: [
            {
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "﹣",
                  " ",
                  (0, a.jsx)("a", {
                    href: "https://twitter.com/hasufl",
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    onClick: function () {
                      return (0, x.U)({
                        category: w.O$.COWAMM,
                        action: "Content link click - Hasu",
                      });
                    },
                    children: "Hasu",
                  }),
                  " ",
                  (0, a.jsx)("br", {}),
                  " ",
                  (0, a.jsx)("small", {
                    children: "Strategy Lead at Flashbots",
                  }),
                ],
              }),
              titleColor: "cowammBlue",
              description: (0, a.jsxs)(a.Fragment, {
                children: [
                  " ",
                  '"When LPs bleed money to LVR, users pay for it with bigger spreads. If we want DeFi to rival the CEX experience, solving LVR will be the key."',
                ],
              }),
            },
            {
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "﹣",
                  " ",
                  (0, a.jsx)("a", {
                    href: "https://twitter.com/claberus",
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    onClick: function () {
                      return (0, x.U)({
                        category: w.O$.COWAMM,
                        action: "Content link click - Marcelo",
                      });
                    },
                    children: "Marcelo",
                  }),
                  " ",
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("small", { children: "Co-founder at Karpatkey" }),
                ],
              }),
              titleColor: "cowammOrange",
              description: (0, a.jsx)(a.Fragment, {
                children:
                  '"Impermanent loss is a big worry for many of our clients. If LPs could deposit liquidity into surplus-rebalancing pools and not worry about LVR, we’d deposit more funds into passive investment strategies."',
              }),
            },
            {
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "﹣",
                  " ",
                  (0, a.jsx)("a", {
                    href: "https://ethresear.ch/u/josojo/summary",
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    onClick: function () {
                      return (0, x.U)({
                        category: w.O$.COWAMM,
                        action: "Content link click - Josojo",
                      });
                    },
                    children: "Josojo",
                  }),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("small", { children: "Crypto Researcher" }),
                ],
              }),
              titleColor: "cowammPurple",
              description: (0, a.jsx)(a.Fragment, {
                children:
                  '"LVR is the main reason for the current concentration in the block builder market. CoW AMM is not only great for LPs, it\'s important for Ethereum overall."',
              }),
            },
            {
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "﹣",
                  " ",
                  (0, a.jsx)("a", {
                    href: "https://twitter.com/fcmartinelli",
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    onClick: function () {
                      return (0, x.U)({
                        category: w.O$.COWAMM,
                        action: "Content link click - Fernando Martinelli",
                      });
                    },
                    children: "Fernando Martinelli",
                  }),
                  " ",
                  (0, a.jsx)("br", {}),
                  " ",
                  (0, a.jsx)("small", { children: "CEO at Balancer Labs" }),
                ],
              }),
              titleColor: "cowammPink",
              description: (0, a.jsx)(a.Fragment, {
                children:
                  '"Balancer is super excited to explore custom AMM designs like CoW AMM. MEV/LVR is the key problem holding LPs back from joining AMMs"',
              }),
            },
          ],
          featureItems: [
            { description: "LP’s Deposit Funds in CoW AMM" },
            {
              description:
                "Whenever solvers want to trade against the pools, they must provide liquidity",
            },
            {
              description:
                "In each batch, the solver that provides the most liquidity gets to settle the trade",
            },
            {
              description:
                "The FM-AMM model of CoW AMM forces liquidity takers to compete for the right to settle trades, guaranteeing more returns for LPs than traditional AMMs",
            },
          ],
          faqContent: [
            {
              title: "What is an AMM?",
              content:
                "An Automated Market Maker (AMM) is a type of decentralized exchange that relies on a mathematical formula to price assets instead of using an order book. It allows traders to exchange digital assets automatically by using liquidity pools rather than bid/ask order books. Users provide liquidity to these pools and earn trading fees in return, facilitating a self-sustaining trading environment.",
            },
            {
              title: "What is a liquidity pool?",
              content:
                "A liquidity pool is a collection of reserves, or funds, that provide liquidity to a token-pair (for example, ETH-USDT). Each liquidity pool has exactly two tokens and all liquidity is evenly split so that the total liquidity value of each side of the token pair is equal at any given time.",
            },
            {
              title: "What is a liquidity provider (LP)?",
              content:
                "A liquidity provider is an individual or entity that funds a liquidity pool with assets to facilitate trading on an AMM. By supplying assets to these pools, they enable traders to buy and sell assets without waiting for a counterparty. In return for their contribution, liquidity providers earn rewards generated from the transaction fees of the trades executed in the pool.",
            },
            {
              title: "What is an arbitrageur?",
              content: (0, a.jsxs)(a.Fragment, {
                children: [
                  "Since liquidity pools are unique to each AMM, they all trade the same assets at slightly different prices. Arbitrageurs are agents who are economically incentivized to trade on the price differences between various liquidity sources, including AMMs and traditional order book exchanges, capturing the arbitrage and profiting in the process. ",
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("br", {}),
                  "Unfortunately, the profits of arbitrageurs come at the expense of liquidity providers.",
                ],
              }),
            },
            {
              title: "What is a CF-AMM?",
              content: (0, a.jsxs)(a.Fragment, {
                children: [
                  "The most basic types of AMMs are examples of “Constant Function” AMMs. CF-AMMs use the constant product function “x*y=k” to calculate the prices of the two assets in any given liquidity pool. As the supply of one asset is depleted, its price increases and vice versa. Thus, all trades on a CF-AMM can be mapped as trades that fit on the constant product function.",
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("br", {}),
                  (0, a.jsx)("img", {
                    src: "/images/cowamm-graph-xyz.svg",
                    alt: "xyz graph",
                    width: "100%",
                    style: { maxWidth: "52rem" },
                    loading: "lazy",
                  }),
                ],
              }),
            },
            {
              title: "What is loss-versus-rebalancing (LVR)?",
              content:
                "LVR is a term for the cost that liquidity providers incur when exploited by arbitrageurs. When the price of an asset changes, arbitrageurs will rush to rebalance an AMM. The first arbitrageur reaching it will be able to trade with the AMM at an outdated price, therefore extracting profits. LVR is the main source of MEV and a major burden for the DeFi ecosystem. In fact, for the most liquid token pairs, liquidity-providing yields a net negative return after taking LVR losses into account.",
            },
            {
              title: "What is an FM-AMM?",
              content:
                "The “Function-Maximizing” AMM is a novel AMM mechanism that tackles the shortcomings of the CF-AMM design and eliminates LVR. The FM-AMM batches trades together, executing all the orders in a batch at the same uniform clearing price. This price is such that the AMM “moves up the curve” with each trade. Since anyone can submit trades to the FM-AMM while its batch is open, competition between arbitrageurs guarantees that FM-AMM always trades at the correct, equilibrium price also in case of a rebalancing.",
            },
            {
              title: "What is CoW AMM?",
              content:
                "CoW AMM is a production-ready implementation of an FM-AMM that supplies liquidity for trades made on CoW Protocol. Solvers compete with each other for the right to trade against the AMM. The winning solver is the one that moves the AMM curves higher.",
            },
            {
              title: "Who can create a CoW AMM pool (and how)?",
              content: (0, a.jsxs)(a.Fragment, {
                children: [
                  "Anyone can create a CoW AMM pool permissionlessly. Docs are coming soon. In the meantime, you can",
                  " ",
                  (0, a.jsx)("a", {
                    href: b,
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    onClick: function () {
                      return (0, x.U)({
                        category: w.O$.COWAMM,
                        action: "Content link click - FAQ:Contact us",
                      });
                    },
                    children: "contact us",
                  }),
                  " ",
                  "for instructions.",
                ],
              }),
            },
            {
              title: "What is a CoW AMM pool ideal for?",
              content:
                "CoW AMM pools are optimal for every token pair that is not stable-to-stable. Since volatility dictates the amount of LVR that takes place in any given liquidity pool, CoW AMM pools are most effective for volatile token pairs as LPs are protected from arbitrageurs.",
            },
          ],
        },
        v = !0;
      function j(e) {
        var t = e.siteConfigData.social,
          i = {};
        Object.entries(t).forEach(function (e) {
          var t = (0, n._)(e, 2),
            o = t[0],
            r = t[1];
          "forum" !== o && "github" !== o && (i[o] = r);
        });
        var l = "CoW AMM - The First MEV-Capturing AMM",
          u =
            "CoW AMM eliminates LVR once and for all by using batch auctions to send surplus to LPs.",
          v = ""
            .concat(c.k.url.root)
            .concat(M.H, "/og-social-image-cowamm.png");
        return (0, a.jsxs)(m.Z, {
          fullWidthCoWAMM: !0,
          children: [
            (0, a.jsxs)(s(), {
              children: [
                (0, a.jsx)("title", { children: l }),
                (0, a.jsx)(
                  "meta",
                  { name: "description", content: u },
                  "description"
                ),
                (0, a.jsx)(
                  "meta",
                  { property: "og:title", content: l },
                  "ogTitle"
                ),
                (0, a.jsx)(
                  "meta",
                  { property: "og:description", content: u },
                  "ogDescription"
                ),
                (0, a.jsx)(
                  "meta",
                  { property: "og:image", content: v },
                  "ogImage"
                ),
                (0, a.jsx)(
                  "meta",
                  { name: "twitter:title", content: l },
                  "twitterTitle"
                ),
                (0, a.jsx)(
                  "meta",
                  { name: "twitter:description", content: u },
                  "twitterDescription"
                ),
                (0, a.jsx)(
                  "meta",
                  { name: "twitter:image", content: v },
                  "twitterImage"
                ),
              ],
            }),
            (0, a.jsxs)(h.$0, {
              gapMobile: 4,
              fullWidth: !0,
              firstSection: !0,
              padding: "8rem 8rem 4rem",
              paddingMobile: "0 2.4rem 4rem",
              flow: "column",
              children: [
                (0, a.jsx)(h.Pi, {
                  width: "460px",
                  widthMobile: "90%",
                  margin: "0 auto",
                  className: "zoomSlideIn",
                  children: (0, a.jsx)("img", {
                    src: "".concat(M.H, "/cowamm-header-logo-animated.gif"),
                    alt: "CoW AMM",
                    width: "100%",
                  }),
                }),
                (0, a.jsx)(h.ZG, {
                  flow: "column",
                  maxWidth: 126,
                  children: (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)(h.xD, {
                        color: d.Il.cowammWhite,
                        fontSize: 6.6,
                        fontSizeMobile: 3.6,
                        fontWeight: 500,
                        maxWidth: 100,
                        margin: "0 auto 4rem",
                        children: [
                          "The first",
                          " ",
                          (0, a.jsx)(d.d9, {
                            italic: !0,
                            color: "cowammLightPurple",
                            children: "MEV-Capturing AMM",
                          }),
                          ", brought to you by",
                          " ",
                          (0, a.jsx)(d.d9, {
                            italic: !0,
                            color: "cowammYellow",
                            children: "CoW DAO",
                          }),
                        ],
                      }),
                      (0, a.jsx)(p.zx, {
                        onClick: function () {
                          return (0, x.U)({
                            category: w.O$.COWAMM,
                            action: "Button click - Protect Your Liquidity",
                          });
                        },
                        variant: p.Wu.COWAMM_LIGHTBLUE,
                        href: "https://deploy-cow-amm.bleu.fi/",
                        target: "_blank",
                        rel: "noreferrer nofollow",
                        paddingTB: 3,
                        paddingLR: 4.2,
                        paddingMobileLR: 2,
                        paddingMobileTB: 1,
                        borderRadius: 0,
                        fontSize: 2.6,
                        fontSizeMobile: 2.1,
                        fontWeight: 500,
                        label: "Protect Your Liquidity",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-light",
              flow: "column",
              gap: 14,
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsxs)(h.ZG, {
                flow: "row",
                textAlign: "left",
                gap: 8,
                maxWidth: 126,
                reverseOrderMobile: "column-reverse",
                children: [
                  (0, a.jsx)(h.Pi, {
                    children: (0, a.jsx)("img", {
                      src: "".concat(M.H, "/cowamm-illustration-lvr.svg"),
                      alt: "LVR",
                      width: "580",
                      loading: "lazy",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, a.jsxs)(h.Ie, {
                        color: d.Il.cowammBlack,
                        fontSize: 6.4,
                        fontWeight: 500,
                        font: d.Zx.flecha,
                        children: [
                          "AMMs don't want you to know about",
                          " ",
                          (0, a.jsx)(d.d9, {
                            italic: !0,
                            color: "cowammBlue",
                            children: "LVR",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(h.DK, {
                        lineHeight: 1.4,
                        textAlign: "left",
                        color: d.Il.cowammBlack,
                        fontSize: 2.8,
                        children: [
                          "Liquidity providers expect their tokens to earn yield, but the dirty little secret of AMMs is that",
                          " ",
                          (0, a.jsx)("b", {
                            children: "most liquidity pools lose money",
                          }),
                          ".",
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("br", {}),
                          "In fact,",
                          " ",
                          (0, a.jsxs)("b", {
                            children: [
                              "hundreds of millions of dollars of LP funds are stolen by arbitrageurs every year",
                              (0, a.jsx)("sup", { children: " 1" }),
                              ".",
                            ],
                          }),
                          " ",
                          "These losses are known as loss-versus-rebalancing (LVR). LVR is a bigger source of MEV than",
                          " ",
                          (0, a.jsx)("b", {
                            children:
                              "frontrunning and sandwich attacks combined",
                          }),
                          ".",
                        ],
                      }),
                      (0, a.jsxs)(h.DK, {
                        lineHeight: 1.2,
                        textAlign: "left",
                        color: d.Il.cowammBlack,
                        fontSize: 1.3,
                        fontSizeMobile: 1.3,
                        children: [
                          (0, a.jsx)("sup", { children: "1" }),
                          " Andrea Canidio and Robin Fritsch, Arbitrageurs' profits, LVR, and sandwich attacks: batch trading as an AMM design response",
                          " ",
                          (0, a.jsx)("a", {
                            onClick: function () {
                              return (0, x.U)({
                                category: w.O$.COWAMM,
                                action: "Content link click - November 2023",
                              });
                            },
                            href: "https://arxiv.org/pdf/2307.02074v3.pdf",
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            children: "(November 2023)",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-dark",
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsx)(h.ZG, {
                flow: "column",
                maxWidth: 126,
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsxs)(h.Ie, {
                      color: d.Il.cowammWhite,
                      fontSize: 6.6,
                      fontWeight: 500,
                      font: d.Zx.flecha,
                      children: [
                        "Finally, an AMM designed",
                        " ",
                        (0, a.jsx)(d.d9, {
                          italic: !0,
                          color: "cowammLightOrange",
                          children: "with LPs in mind",
                        }),
                      ],
                    }),
                    (0, a.jsx)(h.Z0, {
                      bgColor: d.Il.cowammWhite,
                      borderSize: 0.2,
                      margin: "2rem auto",
                      maxWidth: 126,
                    }),
                    (0, a.jsx)(h.DK, {
                      lineHeight: 1.4,
                      fontSize: 4,
                      fontSizeMobile: 2.4,
                      textAlign: "left",
                      color: d.Il.cowammWhite,
                      children:
                        "CoW AMM eliminates LVR once and for all by using batch auctions to send surplus to LPs",
                    }),
                    (0, a.jsx)(h.UK, {
                      gap: 3.2,
                      horizontalGrid: 4,
                      margin: "2.4rem auto",
                      children: y.howItWorksCards.map(function (e, t) {
                        var i = e.image,
                          o = e.description;
                        return (0,
                        a.jsxs)(h.Ss, { variant: "cowamm-card-light", imageFullSize: !0, padding: 0, borderRadius: 0, fontSize: 2.6, fontSizeMobile: 2.1, children: [(0, a.jsx)("img", { src: i, alt: o, loading: "lazy" }), (0, a.jsx)("p", { children: o })] }, t);
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-light-white",
              flow: "column",
              gap: 14,
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsxs)(h.ZG, {
                flow: "row",
                textAlign: "left",
                gap: 10,
                maxWidth: 126,
                reverseOrderMobile: "column-reverse",
                children: [
                  (0, a.jsx)(h.Pi, {
                    children: (0, a.jsx)("video", {
                      width: "100%",
                      src: "/video/cowamm-raise-the-curve.mp4",
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      children: "Your browser does not support the video tag.",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, a.jsxs)(h.Ie, {
                        color: d.Il.cowammBlack,
                        fontSize: 6.6,
                        fontWeight: 500,
                        font: d.Zx.flecha,
                        children: [
                          "Raising the ",
                          (0, a.jsx)("s", { children: "bar" }),
                          " ",
                          (0, a.jsx)(d.d9, {
                            italic: !0,
                            color: "cowammPurple",
                            children: "curve",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(h.DK, {
                        lineHeight: 1.4,
                        textAlign: "left",
                        color: d.Il.cowammBlack,
                        fontSize: 2.8,
                        children: [
                          "CoW AMM LPs don't have to worry about LVR, which ",
                          (0, a.jsx)("b", {
                            children:
                              "costs CF-AMM LPs 5-7% of their liquidity",
                          }),
                          ", on average.",
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("a", {
                            onClick: function () {
                              return (0, x.U)({
                                category: w.O$.COWAMM,
                                action:
                                  "Content link click - Backtesting research",
                              });
                            },
                            href: "https://arxiv.org/pdf/2307.02074v3.pdf",
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            children: "Backtesting research",
                          }),
                          " ",
                          "conducted over 6 months in 2023 shows that CoW AMM returns would have equalled or outperformed CFAMM returns for 10 of the 11 most liquid, non-stablecoin pairs.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-light",
              flow: "column",
              gap: 8,
              paddingMobile: "7rem 2.4rem",
              children: [
                (0, a.jsxs)(h.Ie, {
                  color: d.Il.cowammBlack,
                  fontSize: 6.4,
                  fontWeight: 500,
                  font: d.Zx.flecha,
                  textAlign: "center",
                  children: [
                    "CoW AMM benefits LPs of",
                    " ",
                    (0, a.jsx)(d.d9, {
                      italic: !0,
                      color: "cowammPink",
                      children: "all types",
                    }),
                  ],
                }),
                (0, a.jsx)(h.Z0, {
                  bgColor: d.Il.cowammBlack,
                  borderSize: 0.2,
                  maxWidth: 126,
                }),
                (0, a.jsxs)(h.ZG, {
                  flow: "row",
                  textAlign: "left",
                  gap: 10,
                  maxWidth: 126,
                  reverseOrderMobile: "column-reverse",
                  children: [
                    (0, a.jsx)(h.Pi, {
                      children: (0, a.jsx)("img", {
                        src: "".concat(M.H, "/cowamm-lping.svg"),
                        alt: "Liquidity providing",
                        loading: "lazy",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, a.jsx)(h.Ie, {
                          color: d.Il.cowammBlack,
                          fontSize: 4.4,
                          fontWeight: 500,
                          children:
                            "Support DAO token liquidity without the stick-up",
                        }),
                        (0, a.jsx)(h.DK, {
                          lineHeight: 1.4,
                          textAlign: "left",
                          color: d.Il.cowammBlack,
                          fontSize: 2.9,
                          children:
                            "Healthy liquidity for DAO tokens reduces price impact, encourages investment and discourages volatility. But DAOs can be reluctant to provide liquidity with treasury funds when their pools can be exploited by arbitrageurs. CoW AMM makes providing liquidity more attractive to DAOs of all sizes.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(h.Z0, {
                  bgColor: d.Il.cowammBlack,
                  borderSize: 0.2,
                  maxWidth: 126,
                }),
                (0, a.jsxs)(h.ZG, {
                  flow: "row",
                  textAlign: "left",
                  gap: 10,
                  maxWidth: 126,
                  children: [
                    (0, a.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, a.jsx)(h.Ie, {
                          color: d.Il.cowammBlack,
                          fontSize: 4.4,
                          fontWeight: 500,
                          font: d.Zx.circular,
                          children: "Unlock the power of passive investing",
                        }),
                        (0, a.jsx)(h.DK, {
                          lineHeight: 1.4,
                          textAlign: "left",
                          color: d.Il.cowammBlack,
                          fontSize: 2.9,
                          children:
                            "With LVR in the rear view mirror, providing liquidity becomes identical to running a passive investment strategy: solvers rebalance the pool at the correct market price to keep the value of its reserves equal – thereby keeping portfolios balanced and reducing risk.",
                        }),
                      ],
                    }),
                    (0, a.jsx)(h.Pi, {
                      children: (0, a.jsx)("img", {
                        src: "".concat(M.H, "/cowamm-passive-investing.svg"),
                        alt: "Unlock the power of passive investing",
                        loading: "lazy",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-light-white",
              flow: "column",
              gap: 14,
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsx)(h.ZG, {
                maxWidth: 126,
                flow: "column",
                children: (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)(h.Ie, {
                      color: d.Il.cowammBlack,
                      fontSize: 6.6,
                      fontWeight: 500,
                      font: d.Zx.flecha,
                      children: [
                        "Trust the",
                        " ",
                        (0, a.jsx)(d.d9, {
                          italic: !0,
                          color: "cowammLightOrange",
                          children: "experts",
                        }),
                      ],
                    }),
                    (0, a.jsx)(h.UK, {
                      horizontalGrid: 4,
                      gap: 6.2,
                      children: y.feedbackPartners
                        .filter(function (e) {
                          return e.description;
                        })
                        .map(function (e, t) {
                          var i = e.description,
                            o = e.title,
                            r = e.titleColor;
                          return (0,
                          a.jsx)(h.Ss, { variant: "cowamm-card-dark", imageHeight: 5, padding: 0, borderRadius: 0, fontSize: 2.2, fontSizeMobile: 2.1, equalHeight: !0, children: (0, a.jsxs)("span", { children: [(0, a.jsx)("p", { style: { margin: "0 auto 2.1rem" }, children: i }), (0, a.jsx)(d.d9, { color: r, children: o })] }) }, t);
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-dark",
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsx)(h.ZG, {
                flow: "column",
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsxs)(h.Ie, {
                      color: d.Il.cowammWhite,
                      fontSize: 6.6,
                      fontWeight: 500,
                      font: d.Zx.flecha,
                      children: [
                        "Frequently asked",
                        " ",
                        (0, a.jsxs)(d.d9, {
                          italic: !0,
                          color: "cowammBlue",
                          children: [" ", "questions"],
                        }),
                      ],
                    }),
                    (0, a.jsx)(f, {
                      titleFontSize: 4,
                      titleFontSizeMobile: 2.4,
                      bodyFontSize: 2.7,
                      bodyFontSizeMobile: 1.7,
                      color: d.Il.cowammWhite,
                      children: y.faqContent.map(function (e, t) {
                        var i = e.title,
                          o = e.content;
                        return (0,
                        a.jsxs)("details", { children: [(0, a.jsx)("summary", { children: i }), (0, a.jsx)("div", { children: o })] }, t);
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)(h.$0, {
              fullWidth: !0,
              colorVariant: "cowamm-light-white",
              flow: "column",
              gap: 14,
              paddingMobile: "7rem 2.4rem",
              children: (0, a.jsx)(h.ZG, {
                flow: "column",
                children: (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)(h.Ie, {
                      color: d.Il.cowammBlack,
                      fontSize: 6.6,
                      fontWeight: 500,
                      font: d.Zx.flecha,
                      children: [
                        "Get Started with",
                        " ",
                        (0, a.jsx)(d.d9, {
                          italic: !0,
                          color: "cowammOrange",
                          children: "CoW AMM",
                        }),
                      ],
                    }),
                    (0, a.jsxs)(h.DK, {
                      fontSize: 2.9,
                      lineHeight: 1.4,
                      color: d.Il.cowammBlack,
                      maxWidth: 100,
                      children: [
                        "Anyone can provide liquidity to CoW AMM by creating their own protected pools. To get started, just follow the\xa0",
                        (0, a.jsx)("a", {
                          onClick: function () {
                            return (0, x.U)({
                              category: w.O$.COWAMM,
                              action: "Content link click - instructions",
                            });
                          },
                          href: "https://docs.cow.fi/cow-protocol/tutorials/cow-amm-deployer",
                          target: "_blank",
                          rel: "noreferrer nofollow",
                          children: "instructions",
                        }),
                        " ",
                        "in the CoW DAO docs!",
                      ],
                    }),
                    (0, a.jsx)(p.W4, {
                      center: !0,
                      children: (0, a.jsx)(g.$t, {
                        href: b,
                        defaultUtm: (0, r._)((0, o._)({}, c.k.utm), {
                          utmContent: "widget-page-footerCTA-read-docs",
                        }),
                        passHref: !0,
                        children: (0, a.jsx)(p.zx, {
                          onClick: function () {
                            return (0, x.U)({
                              category: w.O$.COWAMM,
                              action: "Button click - Get in touch",
                            });
                          },
                          variant: p.Wu.COWAMM_LIGHTBLUE,
                          paddingTB: 3,
                          paddingLR: 4.2,
                          borderRadius: 0,
                          fontSize: 2.6,
                          fontSizeMobile: 2.1,
                          fontWeight: 500,
                          label: "Get In Touch",
                        }),
                      }),
                    }),
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
    e.O(0, [596, 624, 489, 774, 888, 179], function () {
      return e((e.s = 3895));
    }),
      (_N_E = e.O());
  },
]);
