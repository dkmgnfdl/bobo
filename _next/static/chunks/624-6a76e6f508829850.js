"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [624],
  {
    2417: function (e, t, n) {
      n.d(t, {
        W4: function () {
          return m;
        },
        Wu: function () {
          return r;
        },
        zx: function () {
          return d;
        },
      });
      var i,
        r,
        o = n(2322),
        a = n(5505),
        l = n(9210),
        c = n(2784),
        u = n(336);
      ((i = r || (r = {})).OUTLINE = "outline"),
        (i.SMALL = "small"),
        (i.TEXT = "text"),
        (i.TEXT_LIGHT = "textLight"),
        (i.LIGHT = "light"),
        (i.OUTLINE_LIGHT = "outlineLight"),
        (i.COWAMM_LIGHTBLUE = "cowammLightBlue"),
        (i.COWAMM_OUTLINE_LIGHT = "cowammOutlineLight"),
        (i.COWAMM_OUTLINE_SMALL = "cowammOutlineSmall");
      var s = a.ZP.span.withConfig({ componentId: "sc-b143af87-0" })(
          [
            "display:flex;background:",
            ";flex-flow:row;border:0.1rem solid transparent;color:",
            ";padding-top:",
            ";padding-bottom:",
            ";padding-left:",
            ";padding-right:",
            ";margin:",
            ";box-sizing:border-box;border-radius:",
            ";min-height:",
            ";align-items:center;font-size:",
            ";font-weight:",
            ";justify-content:center;transition:color 0.2s ease-in-out,background 0.2s ease-in-out;white-space:",
            ";text-decoration:none;",
            "{max-width:100%;white-space:pre-wrap;line-height:1.1;text-align:center;padding-left:",
            ";padding-right:",
            ";padding-top:",
            ";padding-bottom:",
            ";min-height:4.8rem;font-size:",
            ";}&:hover{background:",
            ";color:",
            "!important;}",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "",
          ],
          l.Il.darkBlue,
          l.Il.lightBlue,
          function (e) {
            var t = e.paddingTB;
            return t ? "".concat(t, "rem") : "0";
          },
          function (e) {
            var t = e.paddingTB;
            return t ? "".concat(t, "rem") : "0";
          },
          function (e) {
            var t = e.paddingLR;
            return t ? "".concat(t, "rem") : "2.4rem";
          },
          function (e) {
            var t = e.paddingLR;
            return t ? "".concat(t, "rem") : "2.4rem";
          },
          function (e) {
            var t = e.marginTB;
            return t ? "".concat(t, "rem 0") : "0";
          },
          function (e) {
            var t = e.borderRadius;
            return "".concat(null != t ? t : l.ke.borderRadius);
          },
          function (e) {
            var t = e.minHeight;
            return t ? "".concat(t, "rem") : "5.6rem";
          },
          function (e) {
            var t = e.fontSize;
            return t ? "".concat(t, "rem") : "2.2rem";
          },
          function (e) {
            return e.fontWeight || l.Zx.weightMedium;
          },
          function (e) {
            return e.wrapText ? "initial" : "nowrap";
          },
          l.pU.mobile,
          function (e) {
            var t = e.paddingMobileLR;
            return t ? "".concat(t, "rem") : "1.6rem";
          },
          function (e) {
            var t = e.paddingMobileLR;
            return t ? "".concat(t, "rem") : "1.6rem";
          },
          function (e) {
            var t = e.paddingMobileTB;
            return t ? "".concat(t, "rem") : "0";
          },
          function (e) {
            var t = e.paddingMobileTB;
            return t ? "".concat(t, "rem") : "0";
          },
          function (e) {
            var t = e.fontSizeMobile;
            return t ? "".concat(t, "rem") : "1.6rem";
          },
          function (e) {
            return "outline" === e.variant ? l.Il.darkBlue : l.Il.text1;
          },
          l.Il.lightBlue,
          function (e) {
            return (
              "outline" === e.variant &&
              (0, a.iv)(
                ["background:transparent;border:0.1rem solid ", ";color:", ";"],
                l.Il.darkBlue,
                l.Il.darkBlue
              )
            );
          },
          function (e) {
            var t = e.variant,
              n = e.borderRadius;
            return (
              "small" === t &&
              (0, a.iv)(
                ["min-height:3.6rem;border-radius:", ";"],
                n || "1.2rem"
              )
            );
          },
          function (e) {
            return (
              "text" === e.variant &&
              (0, a.iv)(
                [
                  "background:transparent;color:",
                  "!important;&:hover{background:transparent;color:",
                  "!important;text-decoration:underline;",
                ],
                l.Il.darkBlue,
                l.Il.darkBlue
              )
            );
          },
          function (e) {
            return (
              "textLight" === e.variant &&
              (0, a.iv)(["background:transparent;color:", ";"], l.Il.lightBlue)
            );
          },
          function (e) {
            return (
              "light" === e.variant &&
              (0, a.iv)(
                ["background:", ";color:", "!important;"],
                l.Il.lightBlue,
                l.Il.darkBlue
              )
            );
          },
          function (e) {
            return (
              "outlineLight" === e.variant &&
              (0, a.iv)(
                ["background:transparent;border:0.1rem solid ", ";"],
                l.Il.lightBlue
              )
            );
          },
          function (e) {
            return (
              "cowammLightBlue" === e.variant &&
              (0, a.iv)(
                [
                  "background:",
                  "!important;color:",
                  "!important;&:hover{background:",
                  "!important;color:",
                  "!important;}",
                ],
                l.Il.cowammLightBlue,
                l.Il.cowammBlack,
                (0, u.$n)(0.2, l.Il.cowammLightBlue),
                l.Il.cowammBlack
              )
            );
          },
          function (e) {
            return (
              "cowammOutlineLight" === e.variant &&
              (0, a.iv)(
                [
                  "background:transparent;color:",
                  "!important;border:0.1rem solid ",
                  "!important;&:hover{background:",
                  "!important;color:",
                  "!important;}",
                ],
                l.Il.cowammWhite,
                l.Il.cowammWhite,
                l.Il.cowammWhite,
                l.Il.cowammBlack
              )
            );
          },
          function (e) {
            return (
              "cowammOutlineSmall" === e.variant &&
              (0, a.iv)(
                [
                  "min-height:3.6rem;background:transparent;color:",
                  "!important;border:0.1rem solid ",
                  "!important;&:hover{background:",
                  "!important;color:",
                  "!important;}",
                ],
                l.Il.cowammWhite,
                l.Il.cowammWhite,
                l.Il.cowammWhite,
                l.Il.cowammBlack
              )
            );
          }
        ),
        m = a.ZP.div.withConfig({ componentId: "sc-b143af87-1" })(
          [
            "display:flex;gap:1.6rem;width:100%;",
            " ",
            "{flex-flow:column wrap;justify-content:center;> ",
            "{width:100%;}}",
          ],
          function (e) {
            return (
              e.center &&
              "\n    justify-content: center;\n    align-items: center;\n  "
            );
          },
          l.pU.mediumDown,
          s
        ),
        d = (0, c.forwardRef)(function (e, t) {
          var n = e.wrapText,
            i = e.borderRadius,
            r = e.fontSize,
            a = e.fontSizeMobile,
            l = e.fontWeight,
            c = e.paddingLR,
            u = e.paddingTB,
            m = e.paddingMobileLR,
            d = e.paddingMobileTB,
            g = e.marginTB,
            f = e.variant,
            h = e.href,
            p = e.label,
            b = e.target,
            w = e.rel,
            x = e.minHeight,
            k = e.onClick;
          return (0,
          o.jsx)(s, { wrapText: n, borderRadius: i, fontSize: r, fontSizeMobile: a, fontWeight: l, paddingLR: c, paddingTB: u, paddingMobileLR: m, paddingMobileTB: d, marginTB: g, variant: f, minHeight: x, as: h ? "a" : "span", className: h ? "" : "blank-button", href: h, target: b, rel: w, onClick: k, ref: t, children: p });
        });
      d.displayName = "Button";
    },
    6905: function (e, t, n) {
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var i = n(4022),
        r = n(4670),
        o = n(2322),
        a = n(8222),
        l = n(8241),
        c = n(9097),
        u = n.n(c);
      function s(e) {
        var t = e.url,
          n = e.label,
          c = e.type,
          s = e.onClick,
          m = e.utmContent,
          d = (function (e) {
            switch (e) {
              case "external_untrusted":
                return {
                  target: "_blank",
                  rel: "noopener noreferrer nofollow",
                };
              case "external":
                return { target: "_blank", rel: "noopener" };
            }
            return {};
          })(void 0 === c ? "internal" : c),
          g = d.rel,
          f = d.target;
        return m
          ? (0, o.jsx)(l.$t, {
              href: t,
              rel: g,
              onClick: s,
              passHref: !0,
              defaultUtm: (0, r._)((0, i._)({}, a.k.utm), { utmContent: m }),
              children: (0, o.jsx)("span", { rel: g, onClick: s, children: n }),
            })
          : (0, o.jsx)(u(), {
              href: t,
              target: f,
              rel: g,
              onClick: s,
              passHref: !0,
              children: n,
            });
      }
    },
    112: function (e, t, n) {
      n.d(t, {
        $0: function () {
          return l;
        },
        DK: function () {
          return u;
        },
        Dx: function () {
          return c;
        },
        Ji: function () {
          return m;
        },
        VY: function () {
          return a;
        },
        Xp: function () {
          return s;
        },
        Zb: function () {
          return d;
        },
      });
      var i = n(5505),
        r = n(336),
        o = n(9210),
        a = i.ZP.main.withConfig({ componentId: "sc-1b6e171-0" })(
          [
            "margin:0 auto;padding:20rem 3.2rem;box-sizing:border-box;width:100%;max-width:90rem;display:flex;flex-flow:column wrap;min-height:80rem;",
            "{height:auto;max-width:100%;min-height:initial;padding:12rem 3.2rem;}p{margin:0 0 1.6rem;font-size:",
            ";color:",
            ";line-height:1.4;}",
          ],
          o.pU.mobile,
          o.Zx.sizeDefault,
          o.Il.text2
        ),
        l = i.ZP.section.withConfig({ componentId: "sc-1b6e171-1" })(
          [
            "display:flex;flex-flow:row wrap;width:100%;margin:",
            ";position:relative;z-index:1;> p{font-size:1.8rem;text-align:center;width:100%;}a{color:",
            ";transition:color 0.3s ease-in-out;&:hover{color:",
            ";}}> h3,> h4{font-size:2.8rem;width:100%;margin:2.4rem auto;line-height:1.2;}> h4{font-size:2rem;margin:1.6rem auto 0.2rem;}> ul{text-align:left;color:",
            ";}> ul > li{line-height:1.4;}",
          ],
          function (e) {
            return e.margin || "0 0 4rem";
          },
          o.Il.lightBlue,
          (0, r.$n)(0.1, o.Il.lightBlue),
          o.Il.text2
        ),
        c = i.ZP.h1.withConfig({ componentId: "sc-1b6e171-2" })(
          [
            "width:100%;font-size:6rem;line-height:1.2;margin:0 0 4rem;text-align:center;word-break:break-word;font-weight:",
            ";background:",
            ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;> span{background:none;background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}&::selection{background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}",
            "{font-size:4rem;}",
          ],
          o.Zx.weightMedium,
          o.Il.gradient,
          o.pU.mobile
        ),
        u = i.ZP.h2.withConfig({ componentId: "sc-1b6e171-3" })(
          [
            "font-size:2.5rem;line-height:1.5;font-weight:",
            ";opacity:0.75;text-align:center;margin:0 0 1.2rem;",
            "{font-size:2rem;}",
          ],
          o.Zx.weightNormal,
          o.pU.mobile
        ),
        s = i.ZP.h3.withConfig({ componentId: "sc-1b6e171-4" })([
          "font-size:2.4rem;line-height:1.2;margin:0 0 2.4rem;",
        ]),
        m = i.ZP.a.withConfig({ componentId: "sc-1b6e171-5" })(
          [
            "display:flex;flex-flow:column wrap;box-sizing:border-box;padding:2.4rem 6.2rem 2.4rem 2.4rem;margin:0 0 1.6rem;border-radius:1.6rem;align-items:flex-start;justify-content:center;font-size:1.8rem;background:",
            ";border:0.1rem solid ",
            ";color:",
            ";transition:color 0.2s ease-in-out,background 0.2s ease-in-out,border 0.2s ease-in-out;font-weight:",
            ";text-decoration:none;position:relative;max-width:100%;width:100%;",
            "{padding:1.6rem 6.2rem 1.6rem 1.6rem;}&:last-of-type{margin:0 0 2.4rem;}&:link,&:visited{color:inherit;}&:hover{background:",
            ";border:0.1rem solid ",
            ";> svg{transform:translateX(0.6rem);}}> b{line-height:1.3;",
            "{font-size:1.6rem;}}> i{font-size:1.6rem;line-height:1.3;font-style:normal;margin:0.8rem 0 0;",
            "{font-size:1.4rem;}}> svg{display:block;position:absolute;right:2.4rem;top:0;bottom:0;margin:auto;width:2.4rem;height:2.4rem;transform:translateX(0);transition:transform 0.2s ease-in-out;> path{fill:",
            ";}}",
          ],
          o.Il.darkBlue4,
          (0, r.DZ)(0.9, o.Il.lightBlue),
          o.Il.white,
          o.Zx.weightLight,
          o.pU.mobile,
          o.Il.darkBlue2,
          o.Il.darkBlue,
          o.pU.mobile,
          o.pU.mobile,
          (0, r.DZ)(0.7, o.Il.white)
        ),
        d = i.ZP.div.withConfig({ componentId: "sc-1b6e171-6" })(
          [
            "width:100%;display:grid;grid-template-columns:repeat(2,1fr);flex-flow:row wrap;flex:1 1 auto;justify-content:center;align-items:center;align-content:center;gap:5rem;z-index:1;border-radius:1.6rem;background:",
            ";padding:6rem;margin:0 auto;",
            "{display:flex;flex-flow:column wrap;padding:2.4rem;gap:2.4rem;}> h3{width:100%;text-align:center;font-size:4.5rem;line-height:1.2;font-weight:",
            ";background:",
            ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;",
            "{font-size:2.4rem;}> span{background:none;background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}&::selection{background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}}> p{font-size:1.9rem;text-align:center;max-width:100%;}a{color:",
            ";}",
          ],
          o.Il.darkBlue4,
          o.pU.mobile,
          o.Zx.weightMedium,
          o.Il.gradient,
          o.pU.mobile,
          o.Il.lightBlue
        );
    },
    5624: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eo;
        },
      });
      var i = n(2322),
        r = n(5505),
        o = n(4022),
        a = n(4670),
        l = n(8588),
        c = n(2784),
        u = n(9097),
        s = n.n(u),
        m = n(336),
        d = n(2417),
        g = n(9210),
        f = n(360),
        h = function (e) {
          var t = (0, l._)((0, c.useState)(!1), 2),
            n = t[0],
            i = t[1];
          return (
            (0, c.useEffect)(
              function () {
                var t = window.matchMedia(e);
                t.matches !== n && i(t.matches);
                var r = function () {
                  return i(t.matches);
                };
                return (
                  window.addEventListener("resize", r),
                  function () {
                    return window.removeEventListener("resize", r);
                  }
                );
              },
              [n, e]
            ),
            n
          );
        },
        p = n(6905),
        b = n(8222),
        w = b.k.url,
        x = b.k.social,
        k = [
          { label: "DAOs", url: w.daos },
          { label: "Widget", url: w.widget },
          { label: "CoW AMM", url: w.cowamm },
          {
            label: "MEV Blocker",
            url: w.mevBlocker,
            type: "external",
            utmContent: "header-link-mevblocker",
          },
        ],
        v = "footer-link",
        I = [
          {
            label: "Overview",
            links: [
              { label: "For DAOs", url: w.daos },
              { label: "Widget", url: w.widget },
              { label: "Widget Terms and Conditions", url: w.widgetTnC },
              { label: "CoW AMM", url: w.cowamm },
              { label: "MEV Blocker", url: w.mevBlocker, type: "external" },
              { label: "Careers", url: "/careers" },
              { label: "Refer-to-Earn", url: "/careers/refer-to-earn" },
              { label: "Grants", url: w.grants, type: "external" },
              {
                label: "Explorer",
                url: w.explorer,
                type: "external",
                utmContent: v,
              },
            ],
          },
          {
            label: "CoW Protocol",
            links: [
              { label: "About", url: "/#about" },
              {
                label: "CoW Swap",
                url: "https://swap.cow.fi/#/about",
                type: "external",
                utmContent: v,
              },
              { label: "Analytics", url: w.analytics, type: "external" },
              {
                label: "CoW Swap FAQ",
                url: "https://swap.cow.fi/#/faq",
                type: "external",
                utmContent: v,
              },
              { label: "Tokens", url: "/tokens" },
              {
                label: "Brand Kit",
                url: "https://cownation.notion.site/CoW-DAO-Brand-Kit-fe70d51a39df4229b7912cb7af3eb320",
                type: "external",
              },
              {
                label: "Terms and Conditions",
                url: "https://swap.cow.fi/#/terms-and-conditions",
                type: "external",
                utmContent: v,
              },
              {
                label: "Privacy Policy",
                url: "https://swap.cow.fi/#/privacy-policy",
                type: "external",
                utmContent: v,
              },
              {
                label: "Cookie Policy",
                url: "https://swap.cow.fi/#/cookie-policy",
                type: "external",
                utmContent: v,
              },
            ],
          },
          {
            label: "Developers",
            links: [
              {
                label: "Documentation",
                url: w.docs,
                type: "external",
                utmContent: v,
              },
              { label: "API Documentation", url: w.apiDocs, type: "external" },
              { label: "GitHub", url: x.github.url, type: "external" },
              {
                label: "Audit 1: G0 Group",
                url: "https://github.com/gnosis/gp-v2-contracts/raw/main/audits/GnosisProtocolV2May2021.pdf",
                type: "external_untrusted",
              },
              {
                label: "Audit 2: Hacken",
                url: "https://github.com/gnosis/gp-v2-contracts/raw/main/audits/%5BCowswap_10122021%5DSCAudit_Report_2.pdf",
                type: "external_untrusted",
              },
            ],
          },
          {
            label: "CoWmunity",
            links: [
              {
                label: "Governance",
                url: "https://snapshot.org/#/cow.eth",
                type: "external",
              },
              { label: "Forum", url: "https://forum.cow.fi", type: "external" },
              {
                label: "Blog",
                url: "https://medium.com/@cow-protocol",
                type: "external",
              },
              {
                label: "Discord",
                url: x.discord.url,
                type: "external_untrusted",
              },
              {
                label: "Security portal",
                url: w.securityPortal,
                type: "external_untrusted",
              },
            ],
          },
        ],
        y = n(8241),
        C = n(7045),
        M = n(8018),
        W = "/images/logo.svg",
        L = "/images/logo-icon.svg",
        B = "/images/icons/menu.svg",
        A = r.ZP.div.withConfig({ componentId: "sc-8b4a47cf-0" })([
          "position:absolute;top:0;left:0;width:1px;height:1px;display:block;background:transparent;",
        ]),
        j = (0, c.forwardRef)(function (e, t) {
          return (0, i.jsx)(A, { ref: t, children: e.children });
        });
      j.displayName = "Pixel";
      var z = r.ZP.header.withConfig({ componentId: "sc-8b4a47cf-1" })(
          [
            "z-index:10;width:100%;height:7.2rem;position:absolute;top:0;left:0;display:flex;flex-flow:row;justify-content:space-between;align-items:center;background:transparent;padding:0 5.6rem;margin:0 auto;top:0;left:0;transition:background 0.2s ease-in-out,height 0.2s ease-in-out;",
            "{padding:0 1.6rem;height:6rem;}",
            "",
          ],
          g.pU.mediumDown,
          function (e) {
            return (
              e.isSticky &&
              (0, r.iv)(
                [
                  "background:",
                  ";backdrop-filter:blur(1rem);box-shadow:0 0.4rem 0.6rem 0 rgba(51,57,75,0.1);position:fixed;top:0;",
                ],
                (0, m.DZ)(0.2, g.Il.white)
              )
            );
          }
        ),
        U = r.ZP.div.withConfig({ componentId: "sc-8b4a47cf-2" })(
          [
            "width:100%;max-width:",
            "rem;display:flex;margin:0 auto;justify-content:space-between;align-items:center;",
          ],
          g.ke.pageMaxWidth
        ),
        Z = r.ZP.ol.withConfig({ componentId: "sc-8b4a47cf-3" })(
          [
            "display:flex;list-style:none;font-size:1.5rem;font-weight:",
            ";color:",
            ";padding:0;margin:0;",
            " ",
            "{display:none;top:0;left:0;width:100vw;height:100vh;background:",
            ";color:",
            ";justify-content:flex-start;align-items:flex-start;align-content:flex-start;flex-flow:row wrap;gap:3rem;overflow-y:auto;",
            "}+ a > span{background:transparent;border:0.1rem solid ",
            ";color:",
            ";",
            " ",
            "{margin:0 2.4rem 0 auto;min-height:3.2rem;border-radius:1rem;}",
            "{margin:0 auto;}}> li:not(:last-of-type){margin:0 3.6rem 0 0;",
            "{margin:0 0 3.6rem;line-height:1;}}> li{color:inherit;",
            "{margin:0 0 3.6rem;line-height:1;width:100%;text-align:center;}}> li > a{font-size:inherit;color:inherit;text-decoration:none;font-weight:",
            ";&:hover{color:inherit;text-decoration:underline;}",
            "{color:",
            ";&:hover{color:",
            ";}}}",
          ],
          g.Zx.weightMedium,
          function (e) {
            var t = e.isLight;
            return e.isLightCoWAMM
              ? g.Il.cowammWhite
              : t
              ? g.Il.darkBlue
              : g.Il.lightBlue;
          },
          function (e) {
            var t = e.isSticky,
              n = e.isLightCoWAMM;
            return (
              t &&
              (0, r.iv)(["color:", ";"], n ? g.Il.cowammBlack : g.Il.darkBlue)
            );
          },
          g.pU.mediumDown,
          function (e) {
            return e.isLightCoWAMM ? g.Il.cowammBlack : g.Il.darkBlue;
          },
          function (e) {
            return e.isLightCoWAMM ? g.Il.cowammWhite : g.Il.text2;
          },
          function (e) {
            return (
              e.menuVisible &&
              (0, r.iv)(
                [
                  "position:fixed;display:flex;padding:12rem 6rem 6rem;font-size:3.2rem;",
                  "{font-size:2rem;}",
                ],
                g.pU.mobile
              )
            );
          },
          function (e) {
            var t = e.isLightCoWAMM,
              n = e.isLight;
            return t ? g.Il.cowammWhite : n ? g.Il.darkBlue : g.Il.lightBlue;
          },
          function (e) {
            var t = e.isLight;
            return e.isLightCoWAMM
              ? g.Il.cowammWhite
              : t
              ? g.Il.darkBlue
              : g.Il.lightBlue;
          },
          function (e) {
            var t = e.isSticky,
              n = e.isLightCoWAMM;
            return (
              e.isLight,
              t &&
                (0, r.iv)(
                  [
                    "background:transparent;border:0.1rem solid ",
                    ";color:",
                    ";&:hover{color:",
                    ";}",
                  ],
                  n ? g.Il.cowammBlack : g.Il.darkBlue,
                  n ? g.Il.cowammBlack : g.Il.darkBlue,
                  n ? g.Il.cowammBlack : g.Il.darkBlue
                )
            );
          },
          g.pU.mediumDown,
          g.pU.mobile,
          g.pU.mediumDown,
          g.pU.mediumDown,
          g.Zx.weightLight,
          g.pU.mediumDown,
          function (e) {
            return e.isLightCoWAMM ? g.Il.cowammWhite : g.Il.lightBlue;
          },
          function (e) {
            return e.isLightCoWAMM ? g.Il.cowammWhite : g.Il.lightBlue;
          }
        ),
        T = r.ZP.button.withConfig({ componentId: "sc-8b4a47cf-4" })(
          [
            "display:none;position:fixed;right:1.6rem;top:1.6rem;color:inherit;background:transparent;border:0;opacity:0.7;transition:opacity 0.2s ease-in-out;&:hover{opacity:1;}&::before{content:'✕';display:block;font-size:5rem;font-family:",
            ";",
            "{font-size:3.2rem;color:inherit;}}",
            "{display:flex;}",
          ],
          g.Zx.arial,
          g.pU.mobile,
          g.pU.mediumDown
        ),
        P = r.ZP.button.withConfig({ componentId: "sc-8b4a47cf-5" })(
          [
            "display:none;background:transparent;flex-flow:row;align-items:center;justify-content:center;border-radius:",
            ";text-decoration:none;border:none;height:4.2rem;width:4.2rem;padding:0;&::before{display:flex;content:'';background:url(",
            ") no-repeat center/contain;",
            ";",
            ";width:62%;height:100%;",
            "}",
            "{display:flex;}",
          ],
          g.ke.borderRadius,
          B,
          function (e) {
            return (
              !e.isLight &&
              "background: url(".concat(
                "/images/icons/menu-light.svg",
                ") no-repeat center/contain"
              )
            );
          },
          function (e) {
            return (
              e.isLightCoWAMM &&
              "background: url(".concat(
                "/images/icons/menu-cowamm-light.svg",
                ") no-repeat center/contain"
              )
            );
          },
          function (e) {
            var t = e.isSticky,
              n = e.isLightCoWAMM;
            return (
              t &&
              (0, r.iv)(
                ["background:url(", ") no-repeat center/contain;", ";"],
                B,
                n &&
                  "background: url(".concat(
                    "/images/icons/menu-cowamm.svg",
                    ") no-repeat center/contain"
                  )
              )
            );
          },
          g.pU.mediumDown
        ),
        S = r.ZP.div.withConfig({ componentId: "sc-8b4a47cf-6" })(
          [
            "width:12.2rem;height:3.8rem;background:",
            " no-repeat center/contain;cursor:pointer;z-index:10;",
            " ",
            "{background:url(",
            ") no-repeat center/contain;",
            ";",
            ";width:3.6rem;height:3.2rem;background-size:contain;background-position:left;",
            "}",
          ],
          function (e) {
            var t = e.isLight,
              n = e.isLightCoWAMM;
            return "url(".concat(
              n
                ? "/images/logo-light-themed-cowamm.svg"
                : t
                ? W
                : "/images/logo-light.svg",
              ")"
            );
          },
          function (e) {
            var t = e.isSticky,
              n = e.isLightCoWAMM;
            return (
              t &&
              (0, r.iv)(
                ["background:", " no-repeat center/contain;"],
                "url(".concat(n ? "/images/logo-themed-cowamm.svg" : W, ")")
              )
            );
          },
          g.pU.mediumDown,
          L,
          function (e) {
            var t = e.isLight,
              n = e.menuVisible;
            return (
              (!t || n) &&
              "background: url(".concat(
                "/images/logo-icon-light.svg",
                ") no-repeat center/contain"
              )
            );
          },
          function (e) {
            var t = e.isLightCoWAMM,
              n = e.menuVisible;
            return (
              (t || n) &&
              "background: url(".concat(
                "/images/logo-icon-light-themed-cowamm.svg",
                ") no-repeat center/contain"
              )
            );
          },
          function (e) {
            var t = e.isSticky,
              n = e.isLightCoWAMM,
              i = e.menuVisible;
            return (
              t &&
              (0, r.iv)(
                [
                  "width:3.6rem;height:3.2rem;background:url(",
                  ") no-repeat center/contain;",
                  ";",
                ],
                L,
                (n || i) &&
                  "background: url(".concat(
                    "/images/logo-icon-themed-cowamm.svg",
                    ") no-repeat center/contain"
                  )
              )
            );
          }
        );
      function _(e) {
        var t = e.isLight,
          n = void 0 !== t && t,
          r = e.isLightCoWAMM,
          u = void 0 !== r && r,
          m = b.k.url.swap,
          w = h("(max-width: ".concat(g.pU.mediumEnd, ")")),
          x = (0, l._)((0, c.useState)(!1), 2),
          v = x[0],
          I = x[1],
          W = function () {
            v
              ? document.body.classList.remove("noScroll")
              : document.body.classList.add("noScroll");
          },
          L = function (e) {
            var t = e.label;
            (0, C.U)({
              category: M.O$.NAVIGATION,
              action: "Header menu clicked: ".concat(t),
            }),
              w && (I(!v), W());
          };
        return (0, i.jsx)(f.df, {
          threshold: 1,
          delay: 500,
          initialInView: !0,
          children: function (e) {
            var t = e.inView,
              r = e.ref;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(j, { ref: r }),
                (0, i.jsx)(z, {
                  isSticky: !t,
                  children: (0, i.jsxs)(U, {
                    children: [
                      (0, i.jsx)(s(), {
                        passHref: !0,
                        href: "/",
                        children: (0, i.jsx)(S, {
                          isLight: n,
                          isLightCoWAMM: u,
                          menuVisible: v,
                          isSticky: !t,
                        }),
                      }),
                      (0, i.jsxs)(Z, {
                        menuVisible: v,
                        isLight: n,
                        isLightCoWAMM: u,
                        isSticky: !t,
                        children: [
                          k.map(function (e, t) {
                            return (0, i.jsx)(
                              "li",
                              {
                                children: (0, i.jsx)(
                                  p.x,
                                  (0, a._)((0, o._)({}, e), {
                                    onClick: function () {
                                      return L({ label: e.label });
                                    },
                                  })
                                ),
                              },
                              t
                            );
                          }),
                          (0, i.jsx)(T, {
                            onClick: function () {
                              return L({ label: "Close menu on touch/mobile" });
                            },
                          }),
                        ],
                      }),
                      (0, i.jsx)(y.$t, {
                        defaultUtm: (0, a._)((0, o._)({}, b.k.utm), {
                          utmContent: "header-cta-button",
                        }),
                        href: m,
                        passHref: !0,
                        children: (0, i.jsx)(d.zx, {
                          onClick: function () {
                            return (0, C.U)(M.Ct.TRADE_ON_COWSWAP);
                          },
                          variant:
                            !t && u
                              ? d.Wu.COWAMM_OUTLINE_SMALL
                              : t
                              ? u
                                ? d.Wu.COWAMM_OUTLINE_LIGHT
                                : d.Wu.OUTLINE
                              : d.Wu.SMALL,
                          minHeight: 4.8,
                          fontSize: 1.6,
                          label: "Trade on CoW Swap",
                        }),
                      }),
                      (0, i.jsx)(P, {
                        isLight: n,
                        isLightCoWAMM: u,
                        onClick: function () {
                          return L({ label: "Open menu on touch/mobile" });
                        },
                        isSticky: !t,
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
        });
      }
      var D = n(5632),
        O = n(7741),
        E = new Date().getFullYear(),
        R = r.ZP.footer.withConfig({ componentId: "sc-eb63ca1e-0" })(
          [
            "display:flex;justify-content:space-between;flex-flow:row wrap;z-index:1;width:100%;padding:5.6rem;margin:",
            ";position:relative;background:",
            ";color:",
            ";",
            "{flex-flow:column wrap;padding:5.6rem 2.4rem;}&::before{content:'';width:100%;display:",
            ";height:0.1rem;background:",
            ";position:absolute;top:0;left:0;}",
          ],
          function (e) {
            var t = e.noMargin,
              n = e.isCoWAMM;
            return t || n ? "0 auto" : "16rem auto 0";
          },
          function (e) {
            return e.isCoWAMM ? g.Il.cowammBlack : g.Il.darkBlue;
          },
          function (e) {
            return e.isCoWAMM ? g.Il.cowammWhite : g.Il.text2;
          },
          g.pU.mediumDown,
          function (e) {
            return e.isCoWAMM ? "none" : "block";
          },
          g.Il.gradient
        ),
        N = r.ZP.div.withConfig({ componentId: "sc-eb63ca1e-1" })(
          [
            "display:flex;flex:1 1 auto;flex-flow:row;gap:4.8rem;",
            "{justify-content:space-around;}",
            "{flex:1 1 100%;flex-flow:column wrap;}",
          ],
          g.pU.mediumDown,
          g.pU.mobile
        ),
        G = r.ZP.div.withConfig({ componentId: "sc-eb63ca1e-2" })(
          [
            "display:flex;flex:1 1 auto;flex-flow:column wrap;align-items:flex-end;",
            "{justify-content:space-around;align-items:center;margin:9rem auto 0;}",
          ],
          g.pU.mediumDown
        ),
        H = r.ZP.div.withConfig({ componentId: "sc-eb63ca1e-3" })(
          [
            "display:flex;flex-flow:column wrap;color:inherit;font-size:",
            ";",
            "{align-content:center;}> b{display:block;font-size:1.6rem;margin:0 0 3rem;",
            "{text-align:center;font-size:1.9rem;}}",
          ],
          g.Zx.sizeDefault,
          g.pU.mobile,
          g.pU.mobile
        ),
        V = r.ZP.ol.withConfig({ componentId: "sc-eb63ca1e-4" })(
          [
            "display:flex;list-style:none;font-size:inherit;flex-flow:column wrap;gap:1.4rem;color:inherit;padding:0;margin:0;",
            "{text-align:center;}> li:not(:last-of-type){",
            "{margin:0 3.6rem 0 0;}}> li > a{font-size:inherit;color:inherit;text-decoration:none;line-height:1.2;",
            "{margin:0 0 2.4rem;display:block;}&:hover{color:",
            ";text-decoration:underline;}}",
          ],
          g.pU.mobile,
          g.pU.mediumUp,
          g.pU.mediumDown,
          g.Il.white
        ),
        F = r.ZP.div.withConfig({ componentId: "sc-eb63ca1e-5" })(
          [
            "width:17rem;height:5.7rem;background:",
            " no-repeat center/contain;cursor:pointer;margin:0 0 4rem;",
          ],
          function (e) {
            return e.isCoWAMM
              ? "url(".concat("/images/logo-light-themed-cowamm.svg", ")")
              : "url(".concat("/images/logo-light.svg", ")");
          }
        ),
        $ = r.ZP.ol.withConfig({ componentId: "sc-eb63ca1e-6" })(
          [
            "list-style-type:none;display:flex;flex-flow:column wrap;align-items:flex-end;font-size:1.4rem;color:inherit;line-height:1.5;padding:0;",
            "{align-items:center;}",
          ],
          g.pU.mediumDown
        ),
        X = r.ZP.div.withConfig({ componentId: "sc-eb63ca1e-7" })(
          [
            "width:100%;color:",
            ";margin:5.6rem auto 0;display:flex;align-items:flex-start;justify-content:flex-start;text-align:left;> p{line-height:1.4;font-size:1.3rem;font-weight:400;}",
          ],
          g.Il.text2
        );
      function K() {
        return (0, i.jsx)(N, {
          children: I.map(function (e, t) {
            var n = e.label,
              r = e.links;
            return (0, i.jsxs)(
              H,
              {
                children: [
                  (0, i.jsx)("b", { children: n }),
                  (0, i.jsx)(V, {
                    children: r.map(function (e, t) {
                      return (0,
                      i.jsx)("li", { children: (0, i.jsx)(p.x, (0, o._)({}, e)) }, t);
                    }),
                  }),
                ],
              },
              t
            );
          }),
        });
      }
      function Y(e) {
        var t = e.isCoWAMM,
          n = void 0 !== t && t,
          r = b.k.social;
        return (0, i.jsxs)(G, {
          children: [
            (0, i.jsx)(s(), {
              passHref: !0,
              href: "/",
              children: (0, i.jsx)(F, { isCoWAMM: n }),
            }),
            (0, i.jsx)(O.Z, {
              social: r,
              labels: !1,
              iconSize: 2.8,
              gap: 0.7,
              innerPadding: 1,
              alignItems: "right",
              color: n ? g.Il.cowammWhite : void 0,
            }),
            (0, i.jsx)($, {
              children: (0, i.jsxs)("li", {
                children: ["\xa9CoW Protocol - ", E],
              }),
            }),
          ],
        });
      }
      function J(e) {
        var t = e.noMargin,
          n = e.isCoWAMM,
          r = void 0 !== n && n,
          o = (0, D.useRouter)().asPath.startsWith("/tokens");
        return (0, i.jsxs)(R, {
          noMargin: void 0 !== t && t,
          isCoWAMM: r,
          children: [
            (0, i.jsx)(K, {}),
            (0, i.jsx)(Y, { isCoWAMM: r }),
            o &&
              (0, i.jsx)(X, {
                children: (0, i.jsx)("p", { children: b.k.tokenDisclaimer }),
              }),
          ],
        });
      }
      var q = n(112),
        Q = (0, r.vJ)(["html,body{background-color:", ";}"], function (e) {
          return e.fullWidthCoWAMM ? g.Il.cowammBlack : g.Il.darkBlue;
        }),
        ee = r.ZP.div.withConfig({ componentId: "sc-8813e6f2-0" })([
          "margin:0 auto;padding:0;box-sizing:border-box;width:100%;",
        ]),
        et = r.ZP.main.withConfig({ componentId: "sc-8813e6f2-1" })([
          "display:flex;flex-flow:column wrap;justify-content:flex-start;align-items:flex-start;gap:0;box-sizing:border-box;margin:0 auto;padding:0;width:100%;",
        ]),
        en = (0, r.ZP)(et).withConfig({ componentId: "sc-8813e6f2-2" })([
          "margin-top:-10.4rem;",
        ]),
        ei = (0, r.ZP)(et).withConfig({ componentId: "sc-8813e6f2-3" })(
          [
            "font-size:1.6rem;padding:14rem 0 5.6rem;min-height:80rem;",
            ";background-size:100% 100%;background-attachment:fixed;",
          ],
          g.Il.gradientMesh
        ),
        er = (0, r.ZP)(et).withConfig({ componentId: "sc-8813e6f2-4" })(
          [
            "font-size:1.6rem;padding:18rem 0 5.6rem;min-height:80rem;background:",
            ";color:",
            ";font-family:",
            ";",
            "{padding:12rem 0 5.6rem;}h1,h2,h3,h4{font-family:",
            ";font-weight:500;}",
          ],
          g.Il.cowammBlack,
          g.Il.cowammWhite,
          g.Zx.circular,
          g.pU.mobile,
          g.Zx.flecha
        );
      function eo(e) {
        var t = e.children,
          n = e.fullWidth,
          r = e.fullWidthGradientVariant,
          o = e.fullWidthCoWAMM,
          a = q.VY;
        n ? (a = en) : r ? (a = ei) : o && (a = er);
        var l = n || r;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(Q, { fullWidthCoWAMM: o }),
            (0, i.jsxs)(ee, {
              children: [
                (0, i.jsx)(_, { isLight: l, isLightCoWAMM: o }),
                (0, i.jsx)(a, { children: t || "No content found" }),
                (0, i.jsx)(J, { noMargin: r, isCoWAMM: o }),
              ],
            }),
          ],
        });
      }
    },
    7741: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(2322),
        r = n(5505),
        o = n(9210),
        a = n(4804),
        l = r.ZP.ol.withConfig({ componentId: "sc-92805b69-0" })(
          [
            "display:flex;justify-content:",
            ";align-items:center;max-width:120rem;width:100%;margin:0 auto;padding:0;gap:",
            ";list-style-type:none;color:",
            ";font-weight:",
            ";",
            "{justify-content:center;flex-flow:row wrap;gap:",
            ";}> li > a{display:flex;flex-flow:column wrap;justify-content:center;align-items:center;font-size:1.8rem;line-height:1;text-decoration:none;color:inherit;font-weight:inherit;padding:",
            ";border-radius:",
            ";border:0.1rem solid transparent;transition:color 0.2s ease-in-out,background 0.2s ease-in-out,border-color 0.2s ease-in-out,fill 0.2s ease-in-out;",
            "{padding:1rem;}&:hover{border:",
            ";}}> li > a > svg{width:",
            ";height:",
            ";object-fit:contain;margin:",
            ";path{fill:",
            ";}}> li > a > b{font-weight:inherit;margin:1rem 0 0;}",
          ],
          function (e) {
            var t = e.alignItems;
            return "left" === t
              ? "flex-start"
              : "right" === t
              ? "flex-end"
              : "center";
          },
          function (e) {
            var t = e.gap;
            return t ? "".concat(t, "rem") : "7rem";
          },
          function (e) {
            return e.color || o.Il.text2;
          },
          o.Zx.weightNormal,
          o.pU.mobile,
          function (e) {
            var t = e.gap;
            return t ? "".concat(t, "rem") : "2rem";
          },
          function (e) {
            var t = e.gap;
            return t ? "".concat(t, "rem") : "2rem";
          },
          function (e) {
            var t = e.gap;
            return t ? "".concat(t, "rem") : "2rem";
          },
          o.pU.mobile,
          function (e) {
            var t = e.color;
            return "0.1rem solid ".concat(t || o.Il.lightBlue);
          },
          function (e) {
            var t = e.iconSize;
            return t ? "".concat(t, "rem") : "5.8rem";
          },
          function (e) {
            var t = e.iconSize;
            return t ? "".concat(t, "rem") : "5.8rem";
          },
          function (e) {
            return e.labels ? "0 0 1.2rem" : "0";
          },
          function (e) {
            return e.color || o.Il.lightBlue;
          }
        );
      function c(e) {
        var t = e.social,
          n = e.labels,
          r = void 0 === n || n,
          o = e.iconSize,
          c = e.gap,
          u = e.innerPadding,
          s = e.alignItems,
          m = e.color;
        return (0, i.jsx)(l, {
          iconSize: o,
          gap: c,
          innerPadding: u,
          alignItems: s,
          labels: r,
          color: m,
          children: Object.keys(t).map(function (e, n) {
            return (0,
            i.jsx)("li", { children: (0, i.jsxs)("a", { href: t[e].url, target: "_blank", rel: "noopener nofollow noreferrer", children: [(0, i.jsx)(a.Z, { src: "/images/icons/".concat(t[e].label.toLowerCase(), ".svg"), title: t[e].label }), r && (0, i.jsx)("b", { children: t[e].label })] }) }, n);
          }),
        });
      }
    },
    8018: function (e, t, n) {
      n.d(t, {
        Ct: function () {
          return o;
        },
        O$: function () {
          return r;
        },
        S1: function () {
          return a;
        },
      }),
        ((i = r || (r = {})).NAVIGATION = "Navigation"),
        (i.WIDGET = "Widget"),
        (i.COWAMM = "CoW AMM");
      var i,
        r,
        o = {
          TRADE_ON_COWSWAP: {
            category: "Navigation",
            action: "Trade On CoW Swap",
          },
        },
        a = {
          CONFIGURE_WIDGET: { category: "Widget", action: "Configure Widget" },
          READ_DOCS: { category: "Widget", action: "Read Docs" },
          READ_TERMS: {
            category: "Widget",
            action: "Read Terms and Conditions",
          },
          TALK_TO_US: { category: "Widget", action: "Talk To Us" },
        };
    },
    7045: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
      });
      var i = n(1877);
      function r(e, t) {
        return function () {
          i.ZP.event(e, t || {});
        };
      }
    },
  },
]);
