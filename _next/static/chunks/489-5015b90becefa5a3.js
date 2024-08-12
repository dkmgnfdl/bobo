"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [489],
  {
    489: function (n, t, e) {
      e.d(t, {
        $0: function () {
          return c;
        },
        C3: function () {
          return p;
        },
        DK: function () {
          return h;
        },
        Ie: function () {
          return a;
        },
        Mp: function () {
          return x;
        },
        Pi: function () {
          return w;
        },
        Ss: function () {
          return g;
        },
        UK: function () {
          return f;
        },
        V8: function () {
          return u;
        },
        Z0: function () {
          return m;
        },
        ZG: function () {
          return l;
        },
        Zd: function () {
          return s;
        },
        ct: function () {
          return b;
        },
        gr: function () {
          return v;
        },
        o3: function () {
          return d;
        },
        xD: function () {
          return o;
        },
      });
      var i = e(5505),
        r = e(9210),
        o = i.ZP.h1.withConfig({ componentId: "sc-1f8a8102-0" })(
          [
            "&&{",
            " ",
            " font-weight:",
            ";line-height:",
            ";",
            " max-width:",
            ";margin:",
            ";",
            "{font-size:",
            ";}}",
          ],
          function (n) {
            var t = n.fontSize;
            return t && "font-size: ".concat(t, "rem;");
          },
          function (n) {
            var t = n.textAlign;
            return t && "text-align: ".concat(t, ";");
          },
          function (n) {
            return n.fontWeight || r.Zx.weightMedium;
          },
          function (n) {
            return n.lineHeight || 1.2;
          },
          function (n) {
            var t = n.color;
            return t && "color: ".concat(t, ";");
          },
          function (n) {
            var t = n.maxWidth;
            return t ? "".concat(t, "rem") : "100%";
          },
          function (n) {
            var t = n.margin;
            return t ? "".concat(t) : "0 auto";
          },
          r.pU.mobile,
          function (n) {
            var t = n.fontSizeMobile;
            return t && "".concat(t, "rem");
          }
        ),
        a = i.ZP.h3.withConfig({ componentId: "sc-1f8a8102-1" })(
          [
            "&&{",
            " ",
            " font-weight:",
            ";line-height:",
            ";",
            " max-width:",
            ";font-family:",
            ";",
            "{font-size:calc(",
            "rem / 1.5);}}",
          ],
          function (n) {
            var t = n.fontSize;
            return t && "font-size: ".concat(t, "rem;");
          },
          function (n) {
            var t = n.textAlign;
            return t && "text-align: ".concat(t, ";");
          },
          function (n) {
            return n.fontWeight || r.Zx.weightMedium;
          },
          function (n) {
            return n.lineHeight || 1.2;
          },
          function (n) {
            var t = n.color;
            return t && "color: ".concat(t, ";");
          },
          function (n) {
            var t = n.maxWidth;
            return t ? "".concat(t, "rem") : "100%";
          },
          function (n) {
            return n.font || "inherit";
          },
          r.pU.mobile,
          function (n) {
            return n.fontSize;
          }
        ),
        c = i.ZP.section.withConfig({ componentId: "sc-1f8a8102-2" })(
          [
            "display:flex;width:100%;max-width:",
            ";min-height:100%;flex-flow:",
            ";gap:",
            ";margin:",
            ";position:relative;z-index:1;align-items:",
            ";padding:",
            ";background:",
            ";border-radius:",
            ";box-shadow:",
            ";&,a{color:",
            ";}",
            "{padding:",
            ";}",
            "{height:auto;max-width:100%;min-height:initial;flex-flow:column wrap;gap:",
            ";padding:",
            ";}.text-weight-light{font-weight:",
            ";}",
            " ",
            " ",
            " ",
            " ",
            " h1,h2,h3{color:",
            ";}",
          ],
          function (n) {
            var t = n.maxWidth;
            return n.fullWidth
              ? "100%"
              : t
              ? "".concat(t, "rem")
              : "".concat(r.ke.pageMaxWidth, "rem");
          },
          function (n) {
            return "column" === n.flow ? "column wrap" : "row";
          },
          function (n) {
            var t = n.gap;
            return t ? "".concat(t, "rem") : "8rem";
          },
          function (n) {
            var t = n.margin;
            return t ? "".concat(t) : "0 auto";
          },
          function (n) {
            return n.hero ? "center" : "normal";
          },
          function (n) {
            var t = n.padding;
            return (n.colorVariant, n.firstSection)
              ? "0 0 14rem"
              : t || "14rem 8rem";
          },
          function (n) {
            var t = n.colorVariant;
            return "dark" === t
              ? r.Il.darkBlue
              : "white" === t
              ? r.Il.white
              : "grey" === t
              ? r.Il.grey
              : "dark-gradient" === t
              ? r.Il.gradient2
              : "cowamm-light" === t
              ? r.Il.cowammSand
              : "cowamm-light-white" === t
              ? r.Il.cowammWhite
              : "cowamm-dark" === t
              ? r.Il.cowammBlack
              : "transparent";
          },
          function (n) {
            var t = n.borderRadius;
            return t ? "".concat(t, "rem") : "0";
          },
          function (n) {
            return n.boxShadow ? "0 1rem 2.4rem rgba(0,0,0,.05)" : "none";
          },
          function (n) {
            var t = n.colorVariant;
            return "dark" === t
              ? r.Il.lightBlue
              : "white" === t
              ? r.Il.darkBlue
              : "cowamm-light" === t || "cowamm-light-white" === t
              ? r.Il.cowammBlack
              : "cowamm-dark" === t
              ? r.Il.cowammWhite
              : "inherit";
          },
          r.pU.desktopDown,
          function (n) {
            var t = n.paddingMobile;
            return n.firstSection
              ? "0 2.4rem 14rem"
              : t
              ? "".concat(t)
              : "inherit";
          },
          r.pU.mobile,
          function (n) {
            var t = n.gapMobile;
            return t ? "".concat(t, "rem") : "8rem";
          },
          function (n) {
            var t = n.paddingMobile;
            return t ? "".concat(t) : "14rem 2.4rem";
          },
          r.Zx.weightLight,
          function (n) {
            var t = n.hero,
              e = n.breakMedium;
            return (
              (t || e) &&
              "\n    margin: 0 auto;\n    min-height: 90rem;\n    "
                .concat(r.Il.gradientMesh, ";\n\n    ")
                .concat(
                  r.pU.mediumDown,
                  " {\n      padding: 3.2rem 0;\n      min-height: initial;\n      flex-flow: column wrap;\n    }\n\n    "
                )
                .concat(
                  r.pU.mobile,
                  " {\n      padding: 5.6rem 3.2rem 0;\n    }\n\n  "
                )
            );
          },
          function (n) {
            return (
              n.mobileSwitchOrder &&
              "\n    > div:first-child {\n      ".concat(
                r.pU.mobile,
                " {\n        order: 2;\n      }\n    }\n  "
              )
            );
          },
          function (n) {
            return (
              n.mobileSwitchOrder &&
              "\n    > div:last-child {\n      ".concat(
                r.pU.mobile,
                " {\n        order: 1;\n      }\n    }\n  "
              )
            );
          },
          function (n) {
            return (
              n.mediumSwitchOrder &&
              "\n    > div:first-child {\n      ".concat(
                r.pU.mediumDown,
                " {\n        order: 2;\n      }\n    }\n  "
              )
            );
          },
          function (n) {
            return (
              n.mediumSwitchOrder &&
              "\n    > div:last-child {\n      ".concat(
                r.pU.mediumDown,
                " {\n        order: 1;\n      }\n    }\n  "
              )
            );
          },
          function (n) {
            var t = n.colorVariant;
            return "white" === t
              ? r.Il.darkBlue
              : "grey" === t
              ? r.Il.darkBlue
              : "dark-gradient" === t
              ? r.Il.lightBlue
              : "dark" === t
              ? r.Il.lightBlue
              : "cowamm-light" === t
              ? r.Il.cowammBlack
              : "cowamm-dark" === t
              ? r.Il.cowammWhite
              : r.Il.darkBlue;
          }
        ),
        l = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-3" })(
          [
            "display:flex;position:relative;width:100%;max-width:",
            ";margin:",
            ";gap:",
            ";padding:",
            ";",
            " ",
            "{flex-flow:row wrap;justify-content:center;}",
            " ",
            ";> div{display:flex;flex-flow:",
            ";flex:",
            ";justify-content:",
            ";align-items:",
            ";align-content:",
            ";gap:5rem;z-index:1;max-width:100%;",
            " ",
            "{flex:1 1 auto;gap:3.2rem;}p > a{color:inherit;}}",
            " h1,h2,h3{font-size:5rem;line-height:1.2;font-weight:",
            ";text-align:",
            ";width:100%;z-index:1;",
            "{font-size:4rem;text-align:center;}}h1{",
            "}h3{font-size:6rem;font-weight:",
            ";&::selection{background-clip:initial;-webkit-text-fill-color:initial;}",
            "{font-size:3.8rem;}}",
          ],
          function (n) {
            var t = n.maxWidth;
            return n.fullWidth
              ? "100%"
              : t
              ? "".concat(t, "rem")
              : "".concat(r.ke.pageMaxWidth, "rem");
          },
          function (n) {
            var t = n.margin;
            return t ? "".concat(t) : "0 auto";
          },
          function (n) {
            var t = n.gap;
            return t ? "".concat(t, "rem") : "6rem";
          },
          function (n) {
            var t = n.padding;
            return t ? "".concat(t) : "0";
          },
          function (n) {
            return (
              "grid-2" === n.variant &&
              "\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n\n    ".concat(
                r.pU.mobile,
                " {\n      flex-flow: row wrap;\n      grid-template-columns: 1fr;\n    }\n  "
              )
            );
          },
          r.pU.mobile,
          function (n) {
            return (
              n.hero &&
              "\n    ".concat(
                r.pU.mediumDown,
                " {\n      margin: 16rem 2.4rem 0;\n    }\n  "
              )
            );
          },
          function (n) {
            var t = n.reverseOrderMobile;
            return (
              t &&
              "\n      "
                .concat(r.pU.mobile, " {\n        flex-flow: ")
                .concat(t, ";\n      }\n  ")
            );
          },
          function (n) {
            return "column" === n.flow ? "column wrap" : "row wrap";
          },
          function (n) {
            return "column" === n.flow ? "1 1 auto" : "1 1 50%";
          },
          function (n) {
            return "column" === n.flow ? "center" : "flex-start";
          },
          function (n) {
            return "column" === n.flow ? "center" : "flex-start";
          },
          function (n) {
            return "column" === n.flow ? "center" : "flex-start";
          },
          function (n) {
            return (
              n.sticky &&
              "\n      position: sticky;\n      top: 14rem;\n      height: max-content;\n    "
            );
          },
          r.pU.mobile,
          function (n) {
            return (
              "banner" === n.variant &&
              "\n    border-radius: 1.6rem;\n    background: ".concat(
                r.Il.darkBlue4,
                ";\n    padding: 0;\n\n      > div {\n        padding: 6rem;\n      }\n  "
              )
            );
          },
          r.Zx.weightNormal,
          function (n) {
            return n.textAlign || "center";
          },
          r.pU.mediumDown,
          function (n) {
            var t = n.hero,
              e = n.breakMedium;
            return (
              (t || e) &&
              "\n      font-size: 7rem;\n      font-weight: 600;\n      text-align: left;\n\n      ".concat(
                r.pU.mediumDown,
                " {\n        font-size: 4rem;\n        text-align: center;\n      }\n    "
              )
            );
          },
          r.Zx.weightMedium,
          r.pU.desktopDown
        ),
        m = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-4" })(
          [
            "width:100%;max-width:",
            ";height:",
            ";background:",
            ";margin:",
            ";",
          ],
          function (n) {
            var t = n.maxWidth;
            return t ? "".concat(t, "rem") : "100%";
          },
          function (n) {
            var t = n.borderSize;
            return t ? "".concat(t, "rem") : "0.1rem";
          },
          function (n) {
            return n.bgColor || r.Il.gradient;
          },
          function (n) {
            var t = n.margin;
            return t ? "".concat(t) : "0 auto";
          }
        ),
        u = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-5" })(
          [
            "width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:1.8rem;margin:2.6rem auto 0;",
            "{display:flex;flex-flow:column wrap;}",
          ],
          r.pU.mediumDown
        ),
        d = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-6" })(
          [
            "display:flex;flex-flow:column wrap;background:",
            ";box-shadow:",
            ";border-radius:1.2rem;padding:3.4rem;",
            "{padding:2.4rem;}> span{height:3.6rem;width:3.6rem;border-radius:3.6rem;margin:0 0 1.6rem;padding:0;background:",
            ";display:flex;align-items:center;justify-content:center;color:",
            ";font-size:1.8rem;font-weight:",
            ";}> img{width:100%;height:100%;max-width:",
            ";max-height:10rem;object-fit:contain;margin:0 auto 1.6rem;flex:0 1 auto;",
            "{height:8rem;}}> p{font-size:1.6rem;color:",
            ";font-weight:",
            ";line-height:1.6;margin:1.6rem auto;text-align:center;flex:0 1 auto;}> p > b{font-size:3.4rem;display:block;color:",
            ";background:",
            ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 2.4rem;width:100%;text-align:center;line-height:1;&::selection{background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}}",
          ],
          r.Il.darkBlue2,
          r.ke.boxShadow,
          r.pU.mediumDown,
          r.Il.darkBlue,
          r.Il.lightBlue,
          r.Zx.weightBold,
          function (n) {
            var t = n.imageWidth;
            return t ? "".concat(t, "rem") : "10rem";
          },
          r.pU.mediumDown,
          r.Il.text2,
          r.Zx.weightNormal,
          r.Il.lightBlue,
          r.Il.gradient
        ),
        f = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-7" })(
          [
            "width:100%;max-width:100%;max-width:",
            ";display:grid;grid-template-columns:",
            ";gap:",
            ";margin:",
            ";justify-content:center;",
            "{grid-template-columns:",
            ";}",
          ],
          function (n) {
            var t = n.maxWidth;
            return t ? "".concat(t, "rem") : "100%";
          },
          function (n) {
            var t = n.horizontalGrid;
            return t ? "repeat(".concat(t, ", 1fr)") : "repeat(3, 1fr)";
          },
          function (n) {
            var t = n.gap;
            return t ? "".concat(t, "rem") : "1.8rem";
          },
          function (n) {
            var t = n.margin;
            return t ? "".concat(t) : "0 auto";
          },
          r.pU.mediumDown,
          function (n) {
            var t = n.horizontalGridMobile;
            return t ? "repeat(".concat(t, ", 1fr)") : "repeat(1, 1fr)";
          }
        ),
        g = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-8" })(
          [
            "display:flex;flex-flow:column wrap;flex-flow:",
            " wrap;align-items:",
            ";justify-content:",
            ";background:",
            ";box-shadow:",
            ";border:",
            ";color ",
            ";border-radius:",
            ";padding:",
            ";gap:",
            ";font-size:",
            ";max-width:100%;position:relative;line-height:1.1;",
            "{font-size:",
            ";}> a{display:flex;flex-flow:column wrap;align-items:center;justify-content:center;margin:0 auto;}> a > img,> a > svg,> img,> svg{--width:",
            ";--height:",
            ";width:var(--width);height:var(--height);min-width:var(--width);",
            " max-width:100%;background:transparent;object-fit:contain;margin:0 auto 0 0;}.numberedDot{--width:",
            ";--height:",
            ";width:var(--width);height:var(--height);min-width:var(--width);min-height:var(--height);",
            " background:transparent;object-fit:contain;background:",
            ";display:flex;align-items:center;justify-content:center;color:",
            ";font-weight:bold;font-size:2.5rem;}&.iconOnly > a > img,&.iconOnly > img{--width:",
            ";--height:",
            ";width:var(--width);height:var(--height);margin:auto;}> h4{font-size:2.4rem;line-height:1.2;font-weight:",
            ";margin:0;&,a{color:",
            ";}}> span{display:flex;flex-flow:column wrap;align-items:center;justify-content:",
            ";height:",
            ";gap:1.6rem;font-size:inherit;",
            "{height:auto;}}> p,> span > p{line-height:1.5;text-align:",
            ";font-size:inherit;}> span > a{color:",
            ";}> span > span > a{text-decoration:none;color:inherit;&:hover{text-decoration:underline;}}",
            " ",
            "",
          ],
          function (n) {
            return n.equalHeight ? "row" : "column";
          },
          function (n) {
            return n.contentCentered ? "center" : "flex-start";
          },
          function (n) {
            return n.contentCentered ? "center" : "flex-start";
          },
          function (n) {
            var t = n.background,
              e = n.variant;
            return (
              t ||
              ("outlined-dark" === e ||
              "cowamm-card-light" === e ||
              "cowamm-card-dark" === e
                ? "transparent"
                : r.Il.white)
            );
          },
          function (n) {
            var t = n.variant;
            return "outlined-dark" === t ||
              "cowamm-card-light" === t ||
              "cowamm-card-dark" === t
              ? "none"
              : "0 1rem 2.4rem rgba(0,0,0,.05)";
          },
          function (n) {
            return "outlined-dark" === n.variant
              ? "0.1rem solid ".concat(r.Il.border)
              : "none";
          },
          function (n) {
            var t = n.color,
              e = n.variant;
            return (
              t ||
              ("outlined-dark" === e
                ? r.Il.text2
                : "cowamm-card-light" === e || "cowamm-card-dark" === e
                ? r.Il.cowammWhite
                : r.Il.text1)
            );
          },
          function (n) {
            var t = n.borderRadius;
            return void 0 !== t ? "".concat(t, "rem") : "2.4rem";
          },
          function (n) {
            var t = n.padding;
            return void 0 !== t ? "".concat(t, "rem") : "3.4rem";
          },
          function (n) {
            var t = n.gap;
            return void 0 !== t ? "".concat(t, "rem") : "1.6rem";
          },
          function (n) {
            var t = n.fontSize;
            return t ? "".concat(t, "rem") : "1.6rem";
          },
          r.pU.mobile,
          function (n) {
            var t = n.fontSizeMobile;
            return t ? "".concat(t, "rem") : "1.6rem";
          },
          function (n) {
            var t = n.imageFullSize,
              e = n.imageWidth;
            return t ? "100%" : e ? "".concat(e, "rem") : "5rem";
          },
          function (n) {
            var t = n.imageFullSize,
              e = n.imageHeight;
            return t ? "100%" : e ? "".concat(e, "rem") : "5rem";
          },
          function (n) {
            return n.imageRounded ? "border-radius: var(--height);" : "";
          },
          function (n) {
            var t = n.imageFullSize,
              e = n.imageWidth;
            return t ? "100%" : e ? "".concat(e, "rem") : "5rem";
          },
          function (n) {
            var t = n.imageFullSize,
              e = n.imageHeight;
            return t ? "100%" : e ? "".concat(e, "rem") : "5rem";
          },
          function (n) {
            return n.imageRounded ? "border-radius: var(--height);" : "";
          },
          r.Il.lightBlue,
          r.Il.darkBlue,
          function (n) {
            return n.imageFullSize ? "100%" : "auto";
          },
          function (n) {
            var t = n.imageFullSize,
              e = n.imageHeight;
            return t ? "100%" : e ? "".concat(e, "rem") : "3rem";
          },
          r.Zx.weightBold,
          function (n) {
            var t = n.color,
              e = n.variant;
            return (
              t || ("outlined-dark" === e ? r.Il.lightBlue : r.Il.darkBlue)
            );
          },
          function (n) {
            return n.equalHeight ? "space-between" : "center";
          },
          function (n) {
            return n.equalHeight ? "100%" : "auto";
          },
          r.pU.mobile,
          function (n) {
            return n.textCentered ? "center" : "left";
          },
          r.Il.lightBlue,
          function (n) {
            return (
              "iconWithText" === n.variant &&
              "\n      flex-flow: row nowrap;\n      border: none;\n      gap: 1.6rem;\n\n      > a > img,\n      > a > svg,\n      > img,\n      > svg {\n        margin: auto 0;\n      }\n\n      > p,\n      > span > p {\n        font-size: 2.2rem;\n        font-weight: "
                .concat(
                  r.Zx.weightMedium,
                  ";\n        line-height: 1.2;\n        color: "
                )
                .concat(
                  r.Il.darkBlue,
                  ";\n        margin: auto 0;\n      }\n    "
                )
            );
          },
          function (n) {
            var t = n.variant;
            return (
              ("cowamm-card-light" === t || "cowamm-card-dark" === t) &&
              "\n  &:before {\n    content: '';\n    position: relative;\n    height: 0.2rem;\n    margin: 0 auto 2rem;\n    width: 100%;\n    background: "
                .concat(
                  "cowamm-card-dark" === t
                    ? r.Il.cowammBlack
                    : r.Il.cowammWhite,
                  ";\n  }\n\n  > img,\n  > svg {\n    --size: "
                )
                .concat(function (n) {
                  var t = n.imageHeight;
                  return t ? "".concat(t, "rem") : "12rem";
                }, ";\n    width: var(--size);\n    height: var(--size);\n    margin-bottom: 2.4rem;\n  }\n\n  > h4, > p, > span {\n    color: ")
                .concat(
                  "cowamm-card-dark" === t
                    ? r.Il.cowammBlack
                    : r.Il.cowammWhite,
                  ";\n  }\n"
                )
            );
          }
        );
      i.ZP.div.withConfig({ componentId: "sc-1f8a8102-9" })([
        "background:url('/images/gradient.svg') no-repeat center/cover;filter:blur(10rem);width:100%;height:100%;position:absolute;right:0;left:0;top:0;z-index:0;opacity:0.5;",
      ]);
      var h = i.ZP.p.withConfig({ componentId: "sc-1f8a8102-10" })(
          [
            "display:inline-block;font-size:",
            ";color:",
            ";font-weight:",
            ";line-height:",
            ";text-align:",
            ";max-width:",
            ";margin:0 auto;width:100%;z-index:1;",
            "{font-size:",
            ";text-align:",
            ";}",
          ],
          function (n) {
            var t = n.fontSize;
            return t ? "".concat(t, "rem") : "2.2rem";
          },
          function (n) {
            return n.color || r.Il.text2;
          },
          r.Zx.weightNormal,
          function (n) {
            return n.lineHeight || 1.6;
          },
          function (n) {
            return n.textAlign || "center";
          },
          function (n) {
            var t = n.maxWidth;
            return t && "".concat(t, "rem");
          },
          r.pU.mediumDown,
          function (n) {
            var t = n.fontSizeMobile;
            return t ? "".concat(t, "rem") : "1.8rem";
          },
          function (n) {
            return n.textAlignMobile || "center";
          }
        ),
        w = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-11" })(
          [
            "width:",
            ";height:",
            ";margin:",
            ";flex:",
            ";max-width:100%;display:flex;justify-content:center;align-items:center;flex-flow:column wrap;position:relative;z-index:0;",
            " ",
            "{",
            "}",
            "{width:",
            ";}> a > img,> img{object-fit:contain;max-width:100%;width:inherit;height:inherit;}",
          ],
          function (n) {
            return n.width || "100%";
          },
          function (n) {
            return n.height || "100%";
          },
          function (n) {
            return n.margin || "0";
          },
          function (n) {
            return n.flex || "0 1 auto";
          },
          function (n) {
            return (
              n.hero &&
              "\n    margin: 0 0 0 9.6rem;\n\n    ".concat(
                r.pU.mobile,
                " {\n      margin: 4.2rem 0 9rem;;\n    }\n  "
              )
            );
          },
          r.pU.mediumDown,
          function (n) {
            return (
              n.centerMobile &&
              "\n      margin-left: auto;\n      margin-right: auto;\n    "
            );
          },
          r.pU.mobile,
          function (n) {
            return n.widthMobile || "100%";
          }
        ),
        p = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-12" })(
          [
            "display:flex;flex-flow:row wrap;width:max-width;margin:0 auto;justify-content:center;gap:12rem;background:",
            ";box-shadow:",
            ";padding:4.2rem;border-radius:1.2rem;justify-content:space-between;",
            "{gap:4rem;}> div{flex:0 1 auto;justify-content:center;align-items:flex-start;display:flex;flex-flow:column wrap;gap:1.6rem;",
            "{width:100%;align-items:center;gap:2.4rem;}}> div > b{font-size:6rem;font-weight:",
            ";background:",
            ";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&::selection{background-clip:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial;}",
            "{font-size:5rem;}",
            "{text-align:center;}}> div > i{font-style:normal;font-size:1.5rem;color:",
            ";}",
          ],
          r.Il.darkBlue2,
          r.ke.boxShadow,
          r.pU.mobile,
          r.pU.mobile,
          r.Zx.weightNormal,
          r.Il.gradient,
          r.pU.mediumDown,
          r.pU.mobile,
          r.Il.text2
        ),
        s = i.ZP.ol.withConfig({ componentId: "sc-1f8a8102-13" })(
          [
            "display:grid;max-width:110rem;grid-template-columns:1fr 1fr;width:100%;margin:5.6rem auto 0;padding:0;gap:7rem 10rem;",
            "{grid-template-columns:1fr;}",
          ],
          r.pU.mobile
        ),
        x = i.ZP.li.withConfig({ componentId: "sc-1f8a8102-14" })(
          [
            "display:grid;grid-template-columns:5.4rem 1fr;flex-flow:row wrap;align-items:flex-start;justify-content:flex-start;justify-items:flex-start;align-content:flex-start;",
            "{display:flex;}&::before{",
            ";}> span{display:flex;flex-flow:column wrap;flex:1 1 auto;gap:1.2rem;}> span > b{font-size:2.8rem;line-height:1.2;font-weight:",
            ";",
            "{font-size:2.6rem;text-align:center;}}> span > p{font-size:1.8rem;line-height:1.6;color:",
            ";",
            "{text-align:center;}}",
          ],
          r.pU.mobile,
          function (n) {
            var t = n.icon;
            return (
              t &&
              '\n      content: "";\n      height: 3.6rem;\n      width: 3.6rem;\n      display: block;\n      margin: -0.1rem 0 0;\n      background: url('
                .concat(t, ") no-repeat top/contain;\n\n      ")
                .concat(
                  r.pU.mobile,
                  " {\n        margin: 0 auto 2.4rem;\n      }\n    "
                )
            );
          },
          r.Zx.weightMedium,
          r.pU.mobile,
          r.Il.text2,
          r.pU.mobile
        );
      i.ZP.ol.withConfig({ componentId: "sc-1f8a8102-15" })(
        [
          "list-style-type:none;color:",
          ";font-weight:",
          ";font-size:",
          ";gap:1.2rem;display:flex;flex-flow:column wrap;padding:0;margin:0;line-height:1.2;> li{display:flex;font-size:inherit;align-items:center;}> li::before{content:'';display:inline-block;height:2.4rem;width:2.4rem;min-width:2.4rem;background:url('/images/icons/check.svg') no-repeat center/contain;margin:0 1rem 0 0;}",
        ],
        r.Il.text2,
        r.Zx.weightNormal,
        r.Zx.sizeDefault
      );
      var b = i.ZP.div.withConfig({ componentId: "sc-1f8a8102-16" })(
          [
            "display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;gap:2rem;margin:5rem auto 3rem;border-top:0.1rem solid ",
            ";padding:5rem 0 0;width:100%;font-size:3.2rem;color:",
            ";font-weight:",
            ";",
            "{flex-flow:column wrap;gap:1.6rem;font-size:2.6rem;text-align:center;}> p{}> ul{display:flex;flex-flow:row wrap;align-items:flex-start;justify-content:flex-start;margin:0;padding:0;height:5rem;width:34rem;overflow:hidden;gap:3rem;position:relative;",
            "{width:100%;}}> ul > li{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;height:100%;width:100%;font-size:2.6rem;color:",
            ";position:absolute;top:0;left:0;width:100%;transform:translateY(-100%);animation:slide 9s ease 0s infinite normal forwards;opacity:0;gap:1.2rem;",
            "{font-size:1.8rem;}}> ul > li:nth-child(1){animation-delay:0s;}> ul > li:nth-child(2){animation-delay:3s;}> ul > li:nth-child(3){animation-delay:6s;}> ul > li > svg{display:flex;height:100%;width:100%;object-fit:contain;",
            "{height:70%;width:auto;}> g{fill:",
            ";}}> ul > li > strong{font-weight:",
            ";white-space:nowrap;color:",
            ";}@keyframes slide{0%{transform:translateY(-100%);opacity:0;}10%{transform:translateY(0%);opacity:1;}30%{transform:translateY(0%);opacity:1;}40%{transform:translateY(100%);opacity:0;}100%{transform:translateY(100%);opacity:0;}}",
          ],
          r.Il.border,
          r.Il.text1,
          r.Zx.weightNormal,
          r.pU.mobile,
          r.pU.mobile,
          r.Il.text1,
          r.pU.mobile,
          r.pU.mobile,
          r.Il.darkBlue,
          r.Zx.weightBold,
          r.Il.darkBlue
        ),
        v = i.ZP.span.withConfig({ componentId: "sc-1f8a8102-17" })(
          [
            "display:flex;width:50%;height:100%;margin:0;padding:0;justify-content:center;align-items:center;",
            "{width:100%;}> ol{margin:auto;padding:0;display:grid;list-style:none;gap:3rem;grid-template-columns:repeat(3,1fr);",
            "{display:flex;flex-flow:row wrap;justify-content:center;margin:0 auto 5.6rem;}}> ol > li{padding:0;margin:0;width:12rem;height:12rem;display:flex;",
            "{width:9rem;height:9rem;}}> ol > li > a{display:flex;align-items:center;justify-content:center;font-size:1.6rem;padding:0;background:",
            ";border-radius:6rem;width:100%;height:100%;transition:transform 0.8s ease-in-out;",
            "{border-radius:4.5rem;}&:hover{transform:rotate(360deg);}> img{margin:auto;width:100%;height:100%;max-width:65%;max-height:65%;}}",
          ],
          r.pU.mediumDown,
          r.pU.mediumDown,
          r.pU.mobile,
          r.Il.darkBlue3,
          r.pU.mobile
        );
    },
  },
]);
