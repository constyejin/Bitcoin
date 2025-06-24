(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [9300], {
        97645: function(e, t) {
            t.X = "en", t.o = {
                en: {
                    path: "en",
                    locale: "English",
                    default: !0
                },
                zh: {
                    path: "zh",
                    locale: "中文"
                },
                ru: {
                    path: "ru",
                    locale: "Русский"
                },
                es: {
                    path: "es",
                    locale: "Español"
                },
                it: {
                    path: "it",
                    locale: "Italiano"
                },
                de: {
                    path: "de",
                    locale: "Deutsch"
                },
                fr: {
                    path: "fr",
                    locale: "Français"
                }
            }
        },
        59843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Pn
                }
            });
            var i = n(96540),
                a = n(8711),
                o = n(5463),
                l = n(24606),
                r = n.n(l),
                d = n(31158),
                s = n.n(d),
                p = n(86595),
                c = n(23570),
                m = n(32097),
                g = n(97645),
                f = n(6442),
                u = n(68154),
                h = n(57243);
            const x = {
                    vn: "vi"
                },
                y = e => e && x[e] || e,
                w = e => {
                    let {
                        supportedLocales: t,
                        page: n,
                        children: a
                    } = e;
                    const o = ["territory-not-supported", "exchange-announcement"].includes(n),
                        {
                            messages: l,
                            locale: r,
                            defaultLocale: d
                        } = (0, f.A)(),
                        s = (0, h.getSiteDomain)(),
                        p = n.replace(".", "/").replace(`${r}/`, ""),
                        c = e => {
                            return null != (t = `${s}${e===d?"":`/${e}`}/${p}`) && t.endsWith("/") ? t : `${t}/`;
                            var t
                        };
                    return i.createElement(u.m, {
                        title: l["gambling.meta.title"],
                        htmlAttributes: {
                            lang: r,
                            dir: ["ar", "he", "fa", "ur"].includes(r) ? "rtl" : "ltr"
                        }
                    }, i.createElement("meta", {
                        name: "description",
                        content: l["gambling.meta.description"]
                    }), i.createElement("meta", {
                        property: "og:title",
                        content: l["gambling.meta.title"]
                    }), i.createElement("meta", {
                        property: "og:description",
                        content: l["gambling.meta.description"]
                    }), i.createElement("meta", {
                        property: "og:image",
                        content: `${s}${l["gambling.meta.image"]}`
                    }), i.createElement("meta", {
                        property: "og:image:secure_url",
                        content: `${s}${l["gambling.meta.image"]}`
                    }), i.createElement("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }), i.createElement("meta", {
                        property: "og:image:height",
                        content: "630"
                    }), i.createElement("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), i.createElement("meta", {
                        name: "twitter:site",
                        content: `@${l["gambling.meta.twitter"]}`
                    }), i.createElement("meta", {
                        name: "twitter:title",
                        content: l["gambling.meta.title"]
                    }), i.createElement("meta", {
                        name: "twitter:description",
                        content: l["gambling.meta.description"]
                    }), i.createElement("meta", {
                        name: "twitter:image",
                        content: `${s}${l["gambling.meta.image"]}`
                    }), o && i.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }), i.createElement("link", {
                        rel: "canonical",
                        href: c(r)
                    }), t.map((e => i.createElement("link", {
                        rel: "alternate",
                        key: e,
                        href: c(e),
                        hrefLang: y(e)
                    }))), i.createElement("link", {
                        rel: "alternate",
                        href: c(d),
                        hrefLang: "x-default"
                    }), i.createElement("link", {
                        rel: "preload",
                        href: "https://fonts.bitcoin.com/Elza/Elza_Condensed_Black/crossmedia/Elza-CondensedBlack.woff",
                        type: "font/woff",
                        crossOrigin: "anonymous"
                    }), i.createElement("link", {
                        rel: "preload",
                        href: "https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Variable.woff",
                        type: "font/woff",
                        crossOrigin: "anonymous"
                    }), i.createElement("link", {
                        rel: "preload",
                        href: "https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Black.woff",
                        type: "font/woff",
                        crossOrigin: "anonymous"
                    }), i.createElement("style", null, "\n@font-face {\n  font-family: 'Satoshi Variable Light';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Light.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Satoshi Variable Black';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Black.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Satoshi Variable Bold';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Bold.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Satoshi Variable Regular';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Regular.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Satoshi Variable Medium';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Medium.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Satoshi Variable';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Variable.woff')\n    format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n/* Elza Condensed Black */\n@font-face {\n  font-family: 'Elza Condensed Black';\n  src: url('https://fonts.bitcoin.com/Elza/Elza_Condensed_Black/crossmedia/Elza-CondensedBlack.woff')\n    format('woff');\n  font-weight: 900;\n  font-style: normal;\n  font-display: swap;\n}\n\n/* Elza Narrow Black */\n@font-face {\n  font-family: 'Elza Narrow Black';\n  src: url('https://fonts.bitcoin.com/Elza/Elza_Narrow_Black/crossmedia/Elza-NarrowBlack.woff')\n    format('woff');\n  font-weight: 900;\n  font-style: normal;\n  font-display: swap;\n}\n\n/* Satoshi Light */\n@font-face {\n  font-family: 'Satoshi Variable';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Light.woff')\n    format('woff');\n  font-weight: 300 500;\n  font-style: normal;\n  font-display: swap;\n}\n\n/* Satoshi Medium */\n@font-face {\n  font-family: 'Satoshi Variable';\n  src: url('https://fonts.bitcoin.com/Satoshi_Variable/Fonts/WEB/fonts/Satoshi-Medium.woff')\n    format('woff');\n  font-weight: 400 500;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Noto Sans Condensed';\n  src: url('https://fonts.bitcoin.com/Noto_Sans/Noto_Sans/static/NotoSans_Condensed-Black.ttf')\n    format('truetype');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Noto SansJP';\n  src: url('https://fonts.bitcoin.com/Noto_Sans/Noto_Sans_JP/static/NotoSansJP-Regular.ttf')\n    format('truetype');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Chivo Mono';\n  src: url('https://fonts.bitcoin.com/Chivo_Mono/ChivoMono-VariableFont_wght.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n"), i.createElement("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap"
                    }), i.createElement("script", {
                        src: "https://analytics.ahrefs.com/analytics.js",
                        "data-key": "0TAxrYUoY0g5I4xAnoCywQ",
                        async: !0
                    }), a)
                };
            w.defaultProps = {
                children: void 0
            };
            var b = w,
                _ = n(55268),
                v = n(31978),
                k = n.n(v),
                C = n(74689),
                E = n.n(C),
                I = n(29656),
                z = n.n(I),
                N = n(16250);
            const S = a.default.div.withConfig({
                    displayName: "styled__PageWrapper",
                    componentId: "sc-1u1jgfi-0"
                })(["::after{content:'';display:block;width:100vw;height:", ";background-color:#1c1c1c;}"], (e => {
                    let {
                        displayStickyFooter: t
                    } = e;
                    return t ? "80px" : "0px"
                })),
                A = (a.default.div.withConfig({
                    displayName: "styled__RelatedGuidesSection",
                    componentId: "sc-1u1jgfi-1"
                })(["display:none;@media (max-width:1080px){display:flex;flex-direction:column;align-items:center;margin:20px 0;padding:0 15px;}"]), (0, a.default)(k()).withConfig({
                    displayName: "styled__StyledButton",
                    componentId: "sc-1u1jgfi-2"
                })(["display:flex;"]), a.default.div.withConfig({
                    displayName: "styled__CenteredContainer",
                    componentId: "sc-1u1jgfi-3"
                })(["display:flex;justify-content:center;align-items:center;flex-direction:column;max-width:1200px;margin:0 auto;width:100%;"]), a.default.div.withConfig({
                    displayName: "styled__CardRelated",
                    componentId: "sc-1u1jgfi-4"
                })(["display:flex;flex-direction:column;box-sizing:border-box;border-radius:24px;background:rgb(255,255,255);box-shadow:rgba(0,0,0,0.1) 0px 1px 5px 1px;overflow:hidden;flex:1 1 700px;width:100%;margin:10px;padding-bottom:16px;"]), a.default.div.withConfig({
                    displayName: "styled__Content",
                    componentId: "sc-1u1jgfi-5"
                })(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:16px;overflow:hidden;flex-grow:1;"]), a.default.h4.withConfig({
                    displayName: "styled__CardTitle",
                    componentId: "sc-1u1jgfi-6"
                })(["margin:0;margin-bottom:0;font-size:16px;line-height:20px;font-weight:700;text-align:left;padding-bottom:0;"]), a.default.h3.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-1u1jgfi-7"
                })(["font-size:16px;font-weight:600;line-height:19.2px;color:#131720;margin:0px;text-align:left;", ""], l.media.md `
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    color: #2d323b;
    margin: 0 0 20px 0;
  `), a.default.p.withConfig({
                    displayName: "styled__CardText",
                    componentId: "sc-1u1jgfi-8"
                })(["color:#666;flex-grow:1;font-size:14px;line-height:24px;"]), a.default.a.withConfig({
                    displayName: "styled__ReadMoreLink",
                    componentId: "sc-1u1jgfi-9"
                })(["font-size:20px;color:#2793ff;text-decoration:none;font-weight:bold;margin-top:2px;&:hover{text-decoration:underline;}", ""], l.media.md `
    font-weight: 700;
  `), (0, a.default)(N.uJ).withConfig({
                    displayName: "styled__StyledGoArrowRight",
                    componentId: "sc-1u1jgfi-10"
                })(["stroke-width:1;margin-bottom:-3px;margin-inline-start:4px;"])),
                j = ((0, a.default)(_.Link).withConfig({
                    displayName: "styled__StyledGatsbyLink",
                    componentId: "sc-1u1jgfi-11"
                })(["font-size:20px;line-height:22px;color:#2793ff;background:none;box-shadow:none;font-weight:700;text-decoration:none;text-shadow:0px 1px 1px rgba(0,0,0,0.1);"]), (0, a.default)(_.Link).withConfig({
                    displayName: "styled__MobileCard",
                    componentId: "sc-1u1jgfi-12"
                })(["display:flex;border:none;box-sizing:border-box;text-decoration:none;color:", ";width:100%;flex-direction:row;align-items:flex-start;justify-content:flex-start;", ""], (e => {
                    let {
                        theme: t
                    } = e;
                    return t.palette.text.default
                }), l.media.md `
    display: none;
  `), (0, a.default)(E()).withConfig({
                    displayName: "styled__StyledSectionweb",
                    componentId: "sc-1u1jgfi-13"
                })(["order:18;padding:0px !important;"]), a.default.div.withConfig({
                    displayName: "styled__StyledContentBlock",
                    componentId: "sc-1u1jgfi-14"
                })(["&&{max-width:1600px;padding:0 16px;align-items:center;", " ", "}"], l.media.md `
      padding: 0 40px;
    `, l.media.xl `
      padding: 0 78px;
      margin: 0 auto;
    `)),
                B = ((0, a.default)(z()).withConfig({
                    displayName: "styled__StyledContentBlockweb",
                    componentId: "sc-1u1jgfi-15"
                })(["&&{padding:0;align-items:center;", "}"], l.media.md `
      padding: 0 20px;
    `), (0, a.default)(k()).withConfig({
                    displayName: "styled__StyledButtonweb",
                    componentId: "sc-1u1jgfi-16"
                })(["display:flex;"]), a.default.div.withConfig({
                    displayName: "styled__DesktopContainerweb",
                    componentId: "sc-1u1jgfi-17"
                })(["display:none;", ""], l.media.md `
    display: block;
  `), a.default.div.withConfig({
                    displayName: "styled__TitleWrapperweb",
                    componentId: "sc-1u1jgfi-18"
                })(["display:flex;justify-content:space-between;align-items:center;"]), a.default.div.withConfig({
                    displayName: "styled__TitleWrapper",
                    componentId: "sc-1u1jgfi-19"
                })(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;"]), a.default.h2.withConfig({
                    displayName: "styled__MainTitle",
                    componentId: "sc-1u1jgfi-20"
                })(["font-size:24px;font-weight:700;line-height:38.4px;color:#252d40;margin:0 0 16px 0;text-align:start !important;", ""], l.media.xl `
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
  `), a.default.a.withConfig({
                    displayName: "styled__ReadMoreLinkmobile",
                    componentId: "sc-1u1jgfi-21"
                })(["color:#2793ff;text-decoration:none;font-weight:bold;&:hover{text-decoration:underline;}"]), a.default.div.withConfig({
                    displayName: "styled__CardContainerweb",
                    componentId: "sc-1u1jgfi-22"
                })(["cursor:pointer;position:relative;.left-arrow,.right-arrow{display:flex !important;justify-content:center;align-items:center;width:48px;height:48px;background-color:#0085ff;color:#333;border:none;border-radius:12px;font-size:20px;z-index:10;}&:hover .left-arrow,&:hover .right-arrow{display:flex !important;justify-content:center;align-items:center;}"]), a.default.div.withConfig({
                    displayName: "styled__CardWrapperweb",
                    componentId: "sc-1u1jgfi-23"
                })(["display:flex;gap:32px;margin:24px 0 0 0;flex-direction:column;overflow-x:auto;scroll-behavior:smooth;", ""], l.media.md `
    flex-direction: row;
  `), a.default.div.withConfig({
                    displayName: "styled__CardWrapperwebmobile",
                    componentId: "sc-1u1jgfi-24"
                })(["display:flex;gap:32px;margin:24px 0 0 0;flex-direction:column;overflow-x:auto;scroll-behavior:smooth;flex-direction:row;"]), a.default.div.withConfig({
                    displayName: "styled__ContentContainerweb",
                    componentId: "sc-1u1jgfi-25"
                })(["display:flex;flex-direction:column;background:#ffffff;flex:0 0 auto;border-radius:24px;width:100%;height:100%;", ""], l.media.md `
    width: 313px;
  `), a.default.div.withConfig({
                    displayName: "styled__ContentContainer",
                    componentId: "sc-1u1jgfi-26"
                })(["display:flex;flex-direction:column;background:#ffffff;flex:0 0 auto;border-radius:24px;width:313px;height:100%;"]), a.default.div.withConfig({
                    displayName: "styled__ContentWrapperweb",
                    componentId: "sc-1u1jgfi-27"
                })(["display:flex;flex-direction:column;align-items:start;justify-content:space-between;height:100%;padding:12px;"]), a.default.img.withConfig({
                    displayName: "styled__CardImage",
                    componentId: "sc-1u1jgfi-28"
                })(["width:auto;height:202px;object-fit:cover;object-position:unset;border-radius:0px;border-top-left-radius:24px;border-top-right-radius:24px;"]), a.default.img.withConfig({
                    displayName: "styled__CardImageweb",
                    componentId: "sc-1u1jgfi-29"
                })(["width:72px;height:72px;object-fit:cover;object-position:center;border-radius:12px;", ""], l.media.md `
    width: auto;
    height: auto;
    object-fit: unset;
    object-position: unset;
    border-radius: 0px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  `), a.default.h3.withConfig({
                    displayName: "styled__Titleweb",
                    componentId: "sc-1u1jgfi-30"
                })(["font-size:24px;font-weight:800;line-height:24px;color:#131720;text-align:left;", ""], l.media.md `

    font-weight: 700;
    line-height: 24px;
    color: #2d323b;
    margin: 0 0 20px 0;
  `), a.default.p.withConfig({
                    displayName: "styled__DateText",
                    componentId: "sc-1u1jgfi-31"
                })(["font-size:12px;font-weight:400;line-height:14.4px;", ""], l.media.md `
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
  `), a.default.div.withConfig({
                    displayName: "styled__MobileContainer",
                    componentId: "sc-1u1jgfi-32"
                })(["display:block;", ""], l.media.md `
    display: none;
  `), a.default.div.withConfig({
                    displayName: "styled__ResponsiveMainContainer",
                    componentId: "sc-1u1jgfi-33"
                })(["display:flex;justify-content:start;align-items:start;flex-direction:column;gap:14px;margin:0px 0px 24px 0px;"]), a.default.div.withConfig({
                    displayName: "styled__ResponsiveMainWrapper",
                    componentId: "sc-1u1jgfi-34"
                })(["display:flex;justify-content:start;align-items:center;gap:16px;"]), a.default.div.withConfig({
                    displayName: "styled__ResponsiveContentConatiner",
                    componentId: "sc-1u1jgfi-35"
                })(["display:flex;justify-content:center;align-items:start;flex-direction:column;gap:5px;"]), (0, a.default)(k()).withConfig({
                    displayName: "styled__ResponsiveButtonweb",
                    componentId: "sc-1u1jgfi-36"
                })(["width:100% !important;max-width:100% !important;", ""], l.media.md `
    width: auto !important;
    max-width: 326px !important;
  `), (0, a.default)(k()).withConfig({
                    displayName: "styled__RightArrowButtonweb",
                    componentId: "sc-1u1jgfi-37"
                })(["position:absolute !important;right:-24px;top:50%;transform:translateY(-50%);cursor:pointer;z-index:2;"]), (0, a.default)(k()).withConfig({
                    displayName: "styled__LeftArrowButtonweb",
                    componentId: "sc-1u1jgfi-38"
                })(["position:absolute !important;left:-24px;top:50%;transform:translateY(-50%);cursor:pointer;z-index:2;"]), a.default.img.withConfig({
                    displayName: "styled__TopButton",
                    componentId: "sc-1u1jgfi-39"
                })(["width:48px;height:48px;border-radius:100%;cursor:pointer;z-index:10;margin-left:auto;margin-right:10px;"])),
                T = a.default.div.withConfig({
                    displayName: "styled__StickyFooterWrapper",
                    componentId: "sc-1u1jgfi-40"
                })(["position:fixed;bottom:8px;left:0;width:100%;z-index:100;display:flex;flex-direction:column;gap:10px;@media (max-width:786px){width:100%;}", " ", ""], l.media.md `
  bottom: 10px;
  `, l.media.xl `
  bottom: 16px;
  `);
            var L = n(58065);
            const W = (0, a.default)(z()).withConfig({
                    displayName: "styled__StyledContentBlock",
                    componentId: "sc-1n9b1py-0"
                })(["&&{padding:0px;}"]),
                M = a.default.h1.withConfig({
                    displayName: "styled__PageHeading",
                    componentId: "sc-1n9b1py-1"
                })(["margin:0 0 4px;font-weight:900;font-size:24px;line-height:85%;letter-spacing:-2%;text-align:center;text-transform:uppercase;", " ", ""], l.media.md `
    margin-bottom: 8px;
    font-size: 48px;
  `, l.media.xl `
    font-weight: 900;
    font-size: 52px;
    letter-spacing: -1%;
  `),
                R = a.default.p.withConfig({
                    displayName: "styled__TitleDescription",
                    componentId: "sc-1n9b1py-2"
                })(["color:", ";margin:0 0 10px;line-height:", ";text-align:center;font-feature-settings:'liga' off,'clig' off;font-style:normal;padding-top:0;overflow:hidden;font-weight:500;font-size:12px;letter-spacing:-2%;:not(:only-child):nth-child(2){margin-top:", ";}:not(:only-child):last-child{height:", ";margin-bottom:", ";}", " ", ""], l.colors.solid.textTwo, (e => {
                    let {
                        expanded: t
                    } = e;
                    return t ? "1.4" : "110%"
                }), (e => {
                    let {
                        expanded: t
                    } = e;
                    return t ? "10px" : "0"
                }), (e => {
                    let {
                        expanded: t
                    } = e;
                    return t ? "auto" : "0"
                }), (e => {
                    let {
                        expanded: t
                    } = e;
                    return t ? "21px" : "0"
                }), (e => {
                    let {
                        expanded: t
                    } = e;
                    return l.media.md `
    font-size: 14px;
    line-height: ${t?"1.4":"135%"};
  `
                }), (e => {
                    let {
                        expanded: t
                    } = e;
                    return l.media.xl `
    font-size: 16px;
    line-height: ${t?"1.4":"130%"};
  `
                })),
                $ = a.default.button.withConfig({
                    displayName: "styled__MoreLessButton",
                    componentId: "sc-1n9b1py-3"
                })(["all:unset;color:", ";font-size:12px;font-style:normal;font-weight:500;line-height:110%;letter-spacing:-2%;border:none;background-color:transparent;margin-inline-start:4px;cursor:pointer;&:hover{text-decoration:underline;}", " ", ""], m.A.blue500, l.media.md `
    font-size: 14px;
  `, l.media.xl `
    font-size: 16px;
    `);
            var V = () => {
                    const {
                        0: e,
                        1: t
                    } = (0, i.useState)();
                    return i.createElement(W, null, i.createElement(M, null, i.createElement(L.A, {
                        id: "gambling.header.title"
                    })), i.createElement(R, {
                        expanded: e
                    }, i.createElement(L.A, {
                        id: "gambling.header.text1"
                    }), !e && i.createElement($, {
                        onClick: () => t(!e)
                    }, "  ", i.createElement(L.A, {
                        id: "gambling.buttons.more"
                    }))), i.createElement(R, {
                        expanded: e
                    }, i.createElement(L.A, {
                        id: "gambling.header.text2"
                    }), e && i.createElement($, {
                        onClick: () => t(!e)
                    }, "  ", i.createElement(L.A, {
                        id: "gambling.buttons.less"
                    }))))
                },
                F = n(94691),
                P = n.n(F),
                D = n(44286);
            var q = n(17354),
                G = n.n(q);
            const H = a.default.div.withConfig({
                    displayName: "styled__Card",
                    componentId: "sc-1tumccw-0"
                })(["position:relative;width:100%;border-radius:10px;padding:4px;background-color:", ";overflow:hidden;"], (e => {
                    let {
                        award: t
                    } = e;
                    return t ? m.A.orange100 : m.A.grey50
                })),
                O = (0, a.default)(G()).withConfig({
                    displayName: "styled__StyledGrid",
                    componentId: "sc-1tumccw-1"
                })(["&&{row-gap:12px;}"]),
                J = a.default.div.withConfig({
                    displayName: "styled__CardContent",
                    componentId: "sc-1tumccw-2"
                })(["&&{display:grid;align-items:center;background-color:#fff;border-radius:6px;padding:8px;gap:0px;", " ", "}"], (e => {
                    let {
                        award: t,
                        colored: n
                    } = e;
                    return l.media.md `
      padding: ${t?"11px 16px":"14px 16px"};
      flex-direction: row;
      justify-content: space-between;
      grid-template-columns: 1fr 2fr auto min-content !important; // auto 1fr auto auto;
      
      background-color: ${n?t?m.A.orange50:m.A.grey50:"#fff"};
    `
                }), l.media.xl `
      grid-template-columns: 1fr 1.5fr auto min-content !important; // auto 1fr auto auto;
    `),
                U = a.default.span.withConfig({
                    displayName: "styled__LogoName",
                    componentId: "sc-1tumccw-3"
                })(["padding:0;font-size:18px;line-height:32px;color:rgb(45,50,59);font-weight:600;"]),
                Q = (0, a.default)(G()).withConfig({
                    displayName: "styled__ImagesGrid",
                    componentId: "sc-1tumccw-4"
                })(["&&{column-gap:0px;width:100%;padding-bottom:5px;&.nologo{display:flex;justify-content:stretch;div:first-child{}}& > *,> div > div{place-self:center;}&.nologo > *:only-child{grid-column:1 / -1 !important;", "{margin-left:auto;", "}}", " ", "}"], U, l.media.xl `
          margin-inline: auto !important;
        `, (e => {
                    let {
                        award: t
                    } = e;
                    return l.media.md `
      column-gap: 0;
      width: 115px;
      padding-bottom: 0;

      ${t&&"margin-top: 24px;"}

      column-gap: 20%; // 20px; // 10px;
      width: 100%; //196px;
      padding-bottom: 0;
      padding-inline-end: 20px;
    `
                }), l.media.xl `
      width: 100%; // 266px;
      padding-inline-end: 16px;
    `),
                Y = a.default.div.withConfig({
                    displayName: "styled__LogoImageWrapper",
                    componentId: "sc-1tumccw-5"
                })(["", ""], (e => {
                    let {
                        awards: t,
                        fullHeight: n
                    } = e;
                    return (0, a.css)(["height:45px;width:fit-content;display:flex;align-items:center;justify-content:center;width:", ";", ""], t ? "unset" : "100%", l.media.md `
      width: 100%;
      gap: 10px;
      justify-content: flex-start;
    `)
                })),
                X = a.default.div.withConfig({
                    displayName: "styled__CurrenciesGrid",
                    componentId: "sc-1tumccw-6"
                })(["display:none;div:only-child{}&.nologo{display:inline-flex;}", ""], l.media.xl `
    width: 100%;
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;

    & > div:not(:only-child) {
      margin-inline-end: -0.5em;
      position: relative;

      /* :nth-child(n+4) {
        display: none;
      } */
    }

    & > span {
      margin-inline-start: calc(1.5em);
      font-family: "Satoshi Variable", sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0%;
      color: ${m.A.grey900};
      display: none;
    }
  `),
                K = (a.default.div.withConfig({
                    displayName: "styled__CurrenciesWrapper",
                    componentId: "sc-1tumccw-7"
                })(["display:flex;align-items:center;"]), a.default.div.withConfig({
                    displayName: "styled__CurrencyImageWrapper",
                    componentId: "sc-1tumccw-8"
                })(["height:23px;"])),
                Z = (0, a.default)(G()).withConfig({
                    displayName: "styled__CasinoBonus",
                    componentId: "sc-1tumccw-9"
                })(["&&{column-gap:0px;row-gap:0px;place-self:center;width:100%;text-align:center;background-color:", ";margin:4px 0 12px;border-radius:10px;", "}"], m.A.blue50, (e => {
                    let {
                        award: t
                    } = e;
                    return l.media.md `
      margin: ${t?"14px 16px 0px":"0px 16px"}; // 0px 16px;
      padding: 5px 15px; // 5px 10px;
      /* height: ${t?"max-content":"100%"}; */
      text-align: inherit;
      grid-template-columns: auto 1fr;
      align-items: center;
      /* background: unset; */
      /* background: rgba(232, 237, 250, 0.5); */
      /* height: 100%; */
      background-color: ${t?m.A.orange100:"#E1E1F0"};
    `
                })),
                ee = (0, a.default)(G()).withConfig({
                    displayName: "styled__ButtonWrapper",
                    componentId: "sc-1tumccw-10"
                })(["&&{display:flex;gap:12px;width:100%;align-items:center;justify-content:center;", " ", " & > *{justify-self:stretch;}", "}"], l.media.sm `
      gap: 6px;
    `, l.media.md `
      gap: 9px;
      margin: 0px 12px;
      /* flex-direction: row; */
      width: max-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
    `, l.media.xl `
    margin-inline-start: 20px;
    padding-inline-start: 20px;
    width: auto;
    /* & a,
    & div {
      width: auto !important;
      flex-grow: 1;
      min-width: unset;
    }
    & > * {
    max-width: 200px;
  } */
  `),
                te = a.default.h6.withConfig({
                    displayName: "styled__TitleDescription",
                    componentId: "sc-1tumccw-11"
                })(["margin:8px 16px;font-family:'Satoshi Variable Black',sans-serif;font-weight:700;font-size:16px;line-height:135%;letter-spacing:-2%;text-align:center;color:", ";", ""], m.A.grey900, l.media.md `
    margin: 0;
    text-align: unset;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Satoshi Variable Bold', sans-serif;
   `),
                ne = a.default.img.withConfig({
                    displayName: "styled__LogoImage",
                    componentId: "sc-1tumccw-12"
                })(["width:auto;max-width:100%;height:auto;max-height:45px;", ""], (e => {
                    let {
                        fullHeight: t
                    } = e;
                    return l.media.md `
      max-height: 100%; // ${t?"100%":"30px"};
      width: auto;
  `
                })),
                ie = a.default.img.withConfig({
                    displayName: "styled__CurrencyImage",
                    componentId: "sc-1tumccw-13"
                })(["width:auto;max-width:100%;height:100%;object-fit:contain;"]),
                ae = a.default.a.withConfig({
                    displayName: "styled__ReviewButton",
                    componentId: "sc-1tumccw-14"
                })(["display:inline-block;width:100%;padding:0;border-radius:200px;background:transparent;text-decoration:none;isolation:isolate;overflow:hidden;min-width:max-content;border:1px solid rgba(0,0,0,0.3);> div{height:46px;padding:12px;border-radius:200px;background-color:transparent;display:flex;align-items:center;justify-content:center;", " ", "}> div > span{font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:16px;line-height:110%;letter-spacing:0%;text-align:center;color:", ";text-shadow:0px 0.84px 0.84px #0000001a;", "}"], l.media.md `
      padding: 12px 16px;
      white-space: nowrap;
    `, l.media.xl `
      white-space: nowrap;
    `, m.A.grey900, l.media.md `
      white-space: nowrap;
    `),
                oe = (0, a.default)(ae).withConfig({
                    displayName: "styled__PlayButton",
                    componentId: "sc-1tumccw-15"
                })(["position:relative;overflow:visible;z-index:1;&::before{content:'';position:absolute;z-index:1;top:-4px;left:-4px;width:calc(100% + 8px);height:calc(100% + 8px);border-radius:inherit;background:linear-gradient(269.71deg,#ffdba9 -3.24%,#ff9500 102.87%);box-shadow:unset;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:0.15s;border-color:hsl(228 5% 21%);animation:border-flow 3s linear infinite;}@keyframes border-flow{0%{background-position:100% 0;}100%{background-position:0% 0;}}&:not(:hover){animation:bop 4s linear infinite;}@keyframes bop{0%,100%{transform:scale(1.00004) rotate(-0.0216336deg);}2.5%{transform:scale(1.02519) rotate(0.418538deg);}5%{transform:scale(1.0284) rotate(-0.418538deg);}7.5%{transform:scale(1.0284) rotate(2.79107deg);}10%{transform:scale(1.0284) rotate(-2.79107deg);}12.5%{transform:scale(1.0284) rotate(4.35555deg);}15%{transform:scale(1.0284) rotate(-4.35555deg);}17.5%{transform:scale(1.0284) rotate(2.79107deg);}20%{transform:scale(1.0284) rotate(-2.79107deg);}22.5%{transform:scale(1.0284) rotate(0.0216336deg);}25%{transform:scale(1.00004) rotate(-0.0216336deg);}100%{transform:scale(1.00004) rotate(-0.0216336deg);}}> div{position:relative;z-index:2;background-color:", ";}> div > span{color:#fff;}"], m.A.blue500),
                le = a.default.div.withConfig({
                    displayName: "styled__AwardBadge",
                    componentId: "sc-1tumccw-16"
                })(["padding:6px 8px 8px;display:flex;gap:8px;justify-content:space-between;align-items:center;background-color:", ";", ""], m.A.orange100, l.media.md `
    position: absolute;
    top: -1px;
    max-width: max-content;
    border-end-end-radius: 10px;
    padding: 5px 8px 4px; // 7px 8px 6px;
    gap: 0;
  `),
                re = a.default.div.withConfig({
                    displayName: "styled__AwardIcon",
                    componentId: "sc-1tumccw-17"
                })(["position:relative;width:84px;height:20px;background-image:url('/images/uploads/award_logo.png');background-size:cover;background-repeat:no-repeat;", ""], l.media.md `
    margin-inline-end: 19px;
    width: 155px;
    height: 16px;
    background-image: url('/images/uploads/award_logo_h.png');

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      inset-inline-end: -10.5px;
      display: block;
      border-radius: 50%;
      width: 3px;
      height: 3px;
      background-color: ${m.A.grey900};
    }
  `),
                de = a.default.img.withConfig({
                    displayName: "styled__AwardFrame",
                    componentId: "sc-1tumccw-18"
                })(["margin-inline-end:4px;height:12px;"]),
                se = a.default.p.withConfig({
                    displayName: "styled__AwardText",
                    componentId: "sc-1tumccw-19"
                })(["margin:0;font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:15px;line-height:89%;letter-spacing:-2%;text-align:end;text-transform:uppercase;color:", ";", ""], m.A.grey900, l.media.md `
    font-size: 14px;
  `),
                pe = (a.default.div.withConfig({
                    displayName: "styled__TickMark",
                    componentId: "sc-1tumccw-20"
                })(["display:none;", ""], l.media.md `
    display: flex;
    margin-inline: 20px 5px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
  `), a.default.div.withConfig({
                    displayName: "styled__FeaturesCard",
                    componentId: "sc-1tumccw-21"
                })(["&&{display:none;overflow:hidden;padding:12px 16px;", "}"], (e => {
                    let {
                        closed: t
                    } = e;
                    return l.media.md `
      ${t?"display: none;":"display: grid;"}
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    `
                }))),
                ce = a.default.div.withConfig({
                    displayName: "styled__Feature",
                    componentId: "sc-1tumccw-22"
                })([""]),
                me = a.default.h5.withConfig({
                    displayName: "styled__FeatureTitle",
                    componentId: "sc-1tumccw-23"
                })(["margin:0 0 8px;font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:14px;line-height:113%;letter-spacing:-2%;"]),
                ge = a.default.p.withConfig({
                    displayName: "styled__FeatureDescription",
                    componentId: "sc-1tumccw-24"
                })(["margin:0;font-weight:500;font-size:14px;line-height:135%;letter-spacing:-2%;color:#6b6d7b;"]),
                fe = a.default.div.withConfig({
                    displayName: "styled__DropdownButton",
                    componentId: "sc-1tumccw-25"
                })(["display:none;margin-inline-start:6px;background-image:url('/images/uploads/dropdown_button.svg');width:14px;height:8px;min-width:14px;min-height:8px;cursor:pointer;border:none;background-color:transparent;background-size:contain;background-repeat:no-repeat;background-position:center;transition:transform 0.3s ease;transform:", ";", ""], (e => {
                    let {
                        open: t
                    } = e;
                    return t ? "rotate(180deg)" : "rotate(0deg)"
                }), l.media.md `
    position: relative;
    display: block;

    ::after {
      content: '';
      position: absolute;
      width: calc(100% + 16px);
      height: 300%;
      top: -100%;
      inset-inline-start: -8px;
    }
  `),
                ue = a.default.span.withConfig({
                    displayName: "styled__CurrencyPill",
                    componentId: "sc-1tumccw-26"
                })(["display:inline-flex;gap:4px;align-items:center;height:auto;padding:2px;padding-inline-end:8px;background-color:#fff;border-radius:100px;margin-bottom:8px;font-family:'Chivo Mono' sans-serif;font-weight:400;font-size:12px;line-height:130%;letter-spacing:0%;color:", ";:not(:last-child){margin-inline-end:8px;}& img{width:16px;height:16px;}"], m.A.grey900),
                he = a.default.div.withConfig({
                    displayName: "styled__Container",
                    componentId: "sc-r1c0px-0"
                })(["padding:20px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:16px;border-radius:10px;background-color:", ";", " ", ""], m.A.orange50, l.media.lg `
    /* padding: 13px 27px; */
    flex-direction: row;
    gap: 88px;
  `, l.media.xl `
    /* padding: 13px 40px; */
  `),
                xe = a.default.h5.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-r1c0px-1"
                })(["display:flex;align-items:center;gap:16px;margin:0;font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:20px;line-height:114%;letter-spacing:-2%;::before{content:'';display:inline-block;width:32px;height:32px;background-size:contain;background-image:url('/images/uploads/gambling/welcome_bonus_icon.png');}", ""], l.media.md `
    white-space: nowrap;
  `),
                ye = a.default.p.withConfig({
                    displayName: "styled__Text",
                    componentId: "sc-r1c0px-2"
                })(["margin:0;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;color:#6b6d7b;", ""], l.media.lg `
    font-size: 17px;
  `),
                we = (a.default.img.withConfig({
                    displayName: "styled__LogoImage",
                    componentId: "sc-r1c0px-3"
                })(["width:auto;max-width:100%;height:auto;max-height:", ";", ""], (e => {
                    let {
                        fullHeight: t
                    } = e;
                    return t ? "45px" : "35px"
                }), (e => {
                    let {
                        fullHeight: t
                    } = e;
                    return l.media.md `
      height: ${t?"100%":"30px"};
      width: auto;
      max-width: unset;
  `
                })), a.default.div.withConfig({
                    displayName: "styled__Leading",
                    componentId: "sc-r1c0px-4"
                })(["display:flex;flex-direction:column;align-items:center;gap:10px;", ""], l.media.lg `
    flex-direction: row;
    gap: 40px;
  `), (0, a.default)(oe).withConfig({
                    displayName: "styled__Button",
                    componentId: "sc-r1c0px-5"
                })(["", ""], l.media.lg `
  width: fit-content;
  & > div {
    padding-inline: 32px;}
`)),
                be = e => {
                    let {
                        text: t,
                        buttonText: n,
                        buttonLink: a
                    } = e;
                    const {
                        locale: o,
                        messages: l
                    } = (0, f.A)(), {
                        title: r
                    } = (e => {
                        const t = (0, _.useStaticQuery)("4152926078");
                        return (0, i.useMemo)((() => {
                            let n = null;
                            const {
                                edges: i
                            } = t.allFile;
                            for (let t = 0; t < i.length; t += 1) {
                                const a = i[t].node.childMarkdownRemark.frontmatter;
                                if (a.locale === e) return a;
                                "en" === a.locale && (n = a)
                            }
                            return n
                        }), [e, t])
                    })(o);
                    return t && a ? i.createElement(he, null, i.createElement(xe, null, r), i.createElement(ye, null, t), i.createElement(we, {
                        rel: "noopener noreferrer nofollow",
                        href: a,
                        target: "_blank"
                    }, i.createElement("div", null, i.createElement("span", null, n || l["buttons.play"] || "Visit")))) : null
                };
            be.defaultProps = {
                logo: null,
                text: "",
                buttonText: "",
                buttonLink: "",
                hideBonusLabel: !1
            };
            var _e = be,
                ve = n(70703),
                ke = n.n(ve),
                Ce = n(25622),
                Ee = n.n(Ce);
            const Ie = (0, a.default)(E()).withConfig({
                    displayName: "styled__Wrapper",
                    componentId: "sc-5e5fo1-0"
                })(["margin:60px auto;padding:0;"]),
                ze = (0, a.default)(E()).withConfig({
                    displayName: "styled__ReviewSection",
                    componentId: "sc-5e5fo1-1"
                })(["&&{padding:0 !important;scroll-margin-top:72px;margin:40px auto;", " ", "}"], l.media.md `
    margin: 66px auto;
    `, l.media.xl `
    margin: 128px auto;

    :first-of-type {
      margin-top: 64px;
    }
    `),
                Ne = a.default.h2.withConfig({
                    displayName: "styled__ReviewSectionTitle",
                    componentId: "sc-5e5fo1-2"
                })(["font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:28px;line-height:89%;letter-spacing:-2%;text-transform:uppercase;margin:0 0 21px;text-align:center;", " ", ""], l.media.md `
      font-size: 46px;
      line-height: 85%;
    `, l.media.xl `
      font-size: 60px;
      line-height: 90%;
    `),
                Se = a.default.h3.withConfig({
                    displayName: "styled__ReviewTitle",
                    componentId: "sc-5e5fo1-3"
                })(["margin:0;font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:23px;line-height:85%;letter-spacing:-2%;text-transform:uppercase;color:", ";max-width:50%;", ""], m.A.grey900, l.media.md `
    font-size: 35px;
    /* line-height: 40px; */
  `),
                Ae = a.default.div.withConfig({
                    displayName: "styled__LogoWrapper",
                    componentId: "sc-5e5fo1-4"
                })(["height:23px;", ""], l.media.md `
    height: 35px;
  `),
                je = (0, a.default)(ke()).withConfig({
                    displayName: "styled__Logo",
                    componentId: "sc-5e5fo1-5"
                })(["max-height:23px;", ""], l.media.md `
  max-height: 35px;
  width: unset;
`),
                Be = a.default.div.withConfig({
                    displayName: "styled__Header",
                    componentId: "sc-5e5fo1-6"
                })(["display:flex;justify-content:space-between;align-items:end;gap:16px;margin-bottom:10px;", ""], l.media.md `
    margin-bottom: 24px;
  `),
                Te = a.default.div.withConfig({
                    displayName: "styled__ScreenshotWrapper",
                    componentId: "sc-5e5fo1-7"
                })(["position:relative;margin-top:10px;margin-bottom:20px;width:100%;padding-bottom:47.36%;overflow:hidden;& > span{display:inline-block;position:absolute;left:0;top:0;height:100% !important;width:100% !important;}", " ", ""], l.media.md `
    margin-bottom: 32px;
  `, l.media.md `
    margin-bottom: 38px;
  `),
                Le = (0, a.default)(ke()).withConfig({
                    displayName: "styled__Screenshot",
                    componentId: "sc-5e5fo1-8"
                })(["height:100%;max-width:100% !important;max-height:100% !important;object-fit:scale-down !important;"]),
                We = a.default.div.withConfig({
                    displayName: "styled__FeatureWrapper",
                    componentId: "sc-5e5fo1-9"
                })(["margin:20px 0;display:grid;row-gap:20px;", ""], l.media.md `
    flex: 0.5;
    height: 100%;
    /* margin-top: 20px;
    margin-bottom: 40px; */
    /* column-gap: 49px; */
    /* row-gap: 28px; */
    /* grid-template-columns: repeat(3, 1fr); */
  `),
                Me = a.default.div.withConfig({
                    displayName: "styled__Feature",
                    componentId: "sc-5e5fo1-10"
                })(["border-radius:10px;padding:20px;background-color:", ";", ""], m.A.green50, l.media.md `
    row-gap: 12px;
    column-gap: 30px;
    align-items: center;
  `),
                Re = (a.default.div.withConfig({
                    displayName: "styled__FeatureImageWrapper",
                    componentId: "sc-5e5fo1-11"
                })(["width:max-content;height:24px;align-self:center;", ""], l.media.md `
    grid-row: 1;
    height: 32px;
  `), (0, a.default)(ke()).withConfig({
                    displayName: "styled__FeatureImage",
                    componentId: "sc-5e5fo1-12"
                })(["&&{width:24px;height:24px;", "}"], l.media.md `
    width: 32px;
    height: 32px;
  `), a.default.div.withConfig({
                    displayName: "styled__FeatureText",
                    componentId: "sc-5e5fo1-13"
                })([""]), (0, a.default)(Ee()).withConfig({
                    displayName: "styled__BulletPoints",
                    componentId: "sc-5e5fo1-14"
                })(["font-size:14px;font-style:normal;font-weight:400;line-height:24.22px;margin-top:0;padding-top:0;color:rgb(45,50,59) !important;", ""], l.media.md `
    font-size: 20px;
    line-height: 31px;
    `), a.default.p.withConfig({
                    displayName: "styled__Description",
                    componentId: "sc-5e5fo1-15"
                })(["grid-column:1 / span 2;grid-row:2;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;color:", ";margin:0;:not(:last-child){margin-bottom:22px;}", ""], m.A.grey700, l.media.md `
    grid-column: 2;
    grid-row: 2;
    font-size: 16px;
    line-height: 26px;
  `)),
                $e = (a.default.div.withConfig({
                    displayName: "styled__FeatureOuter",
                    componentId: "sc-5e5fo1-16"
                })(["margin-bottom:10px;display:flex;align-items:center;gap:8px;", ""], l.media.md `
    margin-bottom: 12px;
    flex-direction: column;
    align-items: start;
    gap: 21px;
  `), a.default.h5.withConfig({
                    displayName: "styled__FeatureTitle",
                    componentId: "sc-5e5fo1-17"
                })(["margin:0 0 8px;font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:20px;line-height:114%;letter-spacing:-2%;", ""], l.media.md `
    align-self: unset;
    font-size: 18px;
  `)),
                Ve = a.default.div.withConfig({
                    displayName: "styled__Perks",
                    componentId: "sc-5e5fo1-18"
                })(["margin:20px 0px;padding:20px;border-radius:16px;background-color:", ";", ""], m.A.blue50, l.media.md `
    flex: 0.5;
    height: 100%; // fit-content;
  `),
                Fe = a.default.h4.withConfig({
                    displayName: "styled__PerksTitle",
                    componentId: "sc-5e5fo1-19"
                })(["display:inline-flex;align-items:center;height:32px;margin:0 0 8px;font-weight:700;font-size:20px;letter-spacing:0px;", " ::before{content:'';display:inline-block;margin-inline-end:8px;width:32px;height:32px;background-size:contain;background-image:url('/images/uploads/gambling/perks_icon.png');background-repeat:no-repeat;}"], l.media.md `
    /* margin: 36px 0 16px; */
    /* font-size: 24px; */
    /* line-height: 30px; */
  `),
                Pe = a.default.ul.withConfig({
                    displayName: "styled__PerkList",
                    componentId: "sc-5e5fo1-20"
                })(["display:grid;grid-column-gap:16px;margin:0;padding:0;list-style-position:inside;", ""], l.media.md `
    /* margin-bottom: 66px;
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 52px; */
  `),
                De = (0, a.default)(Ee().Item).withConfig({
                    displayName: "styled__Perk",
                    componentId: "sc-5e5fo1-21"
                })(["&&{font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:15px;line-height:135%;letter-spacing:-2%;color:#6b6d7b;:not(:last-child){margin-bottom:8px;}", "}"], l.media.md `
      font-size: 16px;
      line-height: 26px;
    `),
                qe = (a.default.div.withConfig({
                    displayName: "styled__PlayCTA",
                    componentId: "sc-5e5fo1-22"
                })(["padding:32px 35px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:26px;border-radius:14.9px;background-color:white;box-shadow:0px 0.74px 24.9px 0.74px #0000001a;", ""], l.media.lg `
    flex-direction: row;
    gap: 88px;
  `), a.default.div.withConfig({
                    displayName: "styled__PlayCTATitle",
                    componentId: "sc-5e5fo1-23"
                })(["display:flex;align-items:center;gap:17px;& h5{margin:0;font-weight:600;font-size:18px;line-height:36.19px;letter-spacing:0px;color:#2d323b;}"]), a.default.p.withConfig({
                    displayName: "styled__PlayCTAText",
                    componentId: "sc-5e5fo1-24"
                })(["flex:1;margin:0;font-weight:400;font-size:16px;line-height:26px;letter-spacing:0px;color:#2d323b;"]), (0, a.default)(P()).withConfig({
                    displayName: "styled__PlayCTAButton",
                    componentId: "sc-5e5fo1-25"
                })(["&&{height:unset;& > div{height:unset;width:100%;padding:9.38px;font-weight:600;font-size:12px;line-height:16.8px;letter-spacing:0px;text-align:center;color:white;background-color:#2793ff;border:0.74px solid;border-radius:8.94px;border-image-source:linear-gradient(180deg,#1caaff 0%,#0078d3 100%);", " & span{height:unset;font-size:12px;}}}"], l.media.md `
    padding: 9.38px 53.56px;
    max-width: fit-content;
    white-space: nowrap;
  `), a.default.div.withConfig({
                    displayName: "styled__Summary",
                    componentId: "sc-5e5fo1-26"
                })(["display:grid;gap:20px 32px;align-items:start;> *{margin:0;}", " ", ""], l.media.md `
  grid-template-columns: auto auto;
  > *:nth-child(1) {
    /* order: 2; */
  }
  > *:nth-child(2) {
    /* order: 3; */
  }
  > *:last-child {
    grid-column: 1 / span 2;
    grid-row: 2;
  }
  `, l.media.xl `
  /* > *:nth-child(1) {
    grid-column: 1;
    grid-row: 2;
  }
  > *:nth-child(2) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  > *:nth-child(3) {
    grid-column: 1;
    grid-row: 1;
  } */
  `));
            var Ge = () => {
                    const {
                        messages: e
                    } = (0, f.A)(), t = (0, i.useMemo)((() => e["gambling.casinos"] ? e["gambling.casinos"] : []), [e]);
                    return 0 === t.length ? null : i.createElement(Ie, null, i.createElement(Ne, null, i.createElement(L.A, {
                        id: "gambling.reviews"
                    })), t.map((t => {
                        var n, a, o;
                        let {
                            id: l,
                            logo: r,
                            title: d,
                            text: s,
                            link: p,
                            review: c
                        } = t;
                        const m = (null == c ? void 0 : c.description) || "",
                            g = (null == c ? void 0 : c.perks) || [],
                            f = (null == c ? void 0 : c.features) || [];
                        return i.createElement(ze, {
                            key: `${l}-review`,
                            id: `${l}-review`
                        }, (null == r ? void 0 : r.source) && i.createElement(Be, {
                            columns: 2,
                            columnsSm: 2,
                            columnsMd: 2
                        }, i.createElement(Se, {
                            id: `${l}-review-scroll`
                        }, d), i.createElement(Ae, null, i.createElement(je, {
                            src: null == r ? void 0 : r.source,
                            alt: null == r ? void 0 : r.alt
                        }))), (null == c || null === (n = c.image) || void 0 === n ? void 0 : n.source) && i.createElement(Te, null, i.createElement(Le, {
                            src: null == c || null === (a = c.image) || void 0 === a ? void 0 : a.source,
                            alt: null == c || null === (o = c.image) || void 0 === o ? void 0 : o.alt
                        })), m.split("\n").map(((e, t) => i.createElement(Re, {
                            key: `${e+t}-paragraph`,
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        }))), i.createElement(qe, null, g.length > 0 && i.createElement(Ve, null, i.createElement(Fe, null, (null == e ? void 0 : e["gambling.usp"]) || "Perks"), i.createElement(Pe, null, g.map((e => i.createElement(De, {
                            key: `${e}-perk`
                        }, e))))), f.length > 0 && i.createElement(We, {
                            columns: 4,
                            columnsMd: 3,
                            columnsSm: 1
                        }, f.map((e => i.createElement(Me, {
                            columns: 2,
                            columnsMd: 2,
                            columnsSm: 1,
                            key: e.title
                        }, i.createElement($e, null, null == e ? void 0 : e.title), i.createElement(Re, null, null == e ? void 0 : e.text))))), s ? i.createElement(_e, {
                            logo: r,
                            text: s,
                            buttonText: e["gambling.buttons.play"],
                            buttonLink: p,
                            hideBonusLabel: (0, D.i)(l)
                        }) : i.createElement("div", {
                            style: {
                                textAlign: "center",
                                width: "100%"
                            }
                        }, i.createElement(P(), {
                            size: "small",
                            design: "primary",
                            href: p,
                            newTab: !0
                        }, e["gambling.buttons.play"] || "Play"))))
                    })))
                },
                He = n(45458),
                Oe = n(41455),
                Je = n.n(Oe);
            const Ue = a.default.div.withConfig({
                    displayName: "styled__Wrapper",
                    componentId: "sc-v4kpfg-0"
                })(["h1,h2,h3,h4,h5,h6{font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:18px;line-height:140%;letter-spacing:0%;color:", ";padding-bottom:10px;", "}p,li,tr{font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;color:#6b6d7b;}a{color:", ";}width:100%;position:relative;& > section{align-items:flex-start;padding-top:10px;padding-bottom:10px;}", ""], m.A.grey900, l.media.md `
      line-height: 140%;
    `, m.A.blue500, l.media.md `
    & > section {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  
  `),
                Qe = a.default.h2.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-v4kpfg-1"
                })(["font-family:'Elza Condensed Black',sans-serif;font-size:70px;line-height:85%;"]),
                Ye = (0, a.default)(z()).withConfig({
                    displayName: "styled__StyledContentBlock",
                    componentId: "sc-v4kpfg-2"
                })(["padding:inherit;", " & > :last-child:not(:only-child){display:none;", "}& > :first-child{flex-basis:100%;text-align:left;overflow:auto;", "}"], l.media.xl `
    padding: 0 100px 0 0;
  `, l.media.xl `
      display: flex;
      align-self: stretch;
      min-width: 250px;
      flex-basis: 42%;
      background-color: white;
      padding-left: 100px;
      padding-bottom: 80px;

      & > div {
        margin-right: 0;
        margin-top: 48px;
      }

      & > div > div {
        /* max-width: unset; */
      }

      span {
        line-height: 40px;
      }
    `, l.media.xl `
      flex-basis: 58%;
    `),
                Xe = a.default.div.withConfig({
                    displayName: "styled__ContentWrapper",
                    componentId: "sc-v4kpfg-3"
                })(["margin:0;.fact-wrapper{display:flex;flex-flow:column nowrap;:not(:first-child){margin-top:20px;}}", ""], l.media.xl `
    /* margin-left: 45px; */
    /* max-width: 650px; */
    /* margin-top: 80px; */

    .fact-wrapper {
      flex-flow: row nowrap;
    }

    img {
      margin-right: 30px;
    }
  `);
            var Ke = e => {
                    let {
                        htmlAst: t
                    } = e;
                    const n = (0, i.useRef)(),
                        a = (0, i.useMemo)((() => {
                            let e = 1;
                            const n = t.children.reduce(((t, n) => {
                                if ("h2" === n.tagName) {
                                    const i = { ...n,
                                        properties: {
                                            id: `${e}`
                                        }
                                    };
                                    return e += 1, [].concat((0, He.A)(t), [i])
                                }
                                return [].concat((0, He.A)(t), [n])
                            }), []);
                            return { ...t,
                                children: n
                            }
                        }), [t]);
                    return i.createElement(E(), null, i.createElement(Qe, null, "FAQ"), i.createElement(Ue, null, i.createElement(Ye, null, i.createElement(Xe, null, i.createElement(Je(), {
                        ref: n,
                        htmlAst: a
                    })))))
                },
                Ze = n(8344),
                et = n.n(Ze),
                tt = n(49756),
                nt = n.n(tt);
            const it = (0, a.default)(E()).withConfig({
                    displayName: "styled__Wrapper",
                    componentId: "sc-unh8ao-0"
                })(["max-width:800px;margin:auto;text-align:center;"]),
                at = a.default.div.withConfig({
                    displayName: "styled__ConclusionContent",
                    componentId: "sc-unh8ao-1"
                })(["& > p{font-size:16px;line-height:32px;color:", ";}", ""], l.colors.solid.textTwo, l.media.md `
    & > p {
      display: flex;
      color: ${l.colors.solid.textTwo};
      font-size: 18px;
      line-height: 32px;
    }
  `);
            var ot = () => {
                const {
                    formatMessage: e
                } = (0, f.A)(), t = e({
                    id: "gambling.conclusion.content"
                }), n = e({
                    id: "gambling.conclusion.title"
                });
                return t.trim() && n.trim() ? i.createElement(it, null, i.createElement(at, null, i.createElement(et(), null, i.createElement(L.A, {
                    id: "gambling.conclusion.title"
                })), t.split("\n").map((e => i.createElement(nt(), {
                    key: e
                }, e))))) : null
            };
            const lt = a.default.div.withConfig({
                    displayName: "styled__Wrapper",
                    componentId: "sc-1snkd6f-0"
                })(["width:100%;display:flex;box-sizing:border-box;flex-direction:column;align-items:center;padding:16px 20.5px;background-color:", ";border-radius:10px;box-shadow:0px 0.76px 15.16px 0.76px #00000008;color:white;position:relative;text-align:center;", " ", ""], m.A.blue100, l.media.md `
    flex-direction: row;
    gap: 25px;
    margin-top: unset;
    padding: 14px 16px;
  `, l.media.xl `
      text-align: left;
      gap: 53px;
      padding: 13px 24px 13px;
      padding-inline-start: 258px;
      /* overflow: hidden; */
    `),
                rt = a.default.div.withConfig({
                    displayName: "styled__Buttons",
                    componentId: "sc-1snkd6f-1"
                })(["", ""], l.media.md `
    margin-inline-start: auto;
  `),
                dt = a.default.div.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-1snkd6f-2"
                })(["margin-bottom:8px;font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:24px;line-height:87%;letter-spacing:-2%;text-align:center;text-transform:uppercase;color:", ";", " ", ""], m.A.blue900, l.media.md `
    text-align: start;
    font-size: 32px;
    line-height: 85%;
  `, l.media.md `
    font-size: 40px;
  `),
                st = a.default.div.withConfig({
                    displayName: "styled__Subtitle",
                    componentId: "sc-1snkd6f-3"
                })(["margin-bottom:16px;font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;text-align:center;color:", ";", " ", ""], m.A.grey700, l.media.md `
    margin: 0;
    text-align: start;
    font-size: 14px;
  `, l.media.md `
    font-size: 22px;
    line-height: 123%;
  `),
                pt = (a.default.div.withConfig({
                    displayName: "styled__Content",
                    componentId: "sc-1snkd6f-4"
                })(["", ""], (e => {
                    let {
                        theme: t
                    } = e;
                    return (0, a.css)(["text-align:center;padding:", "px;padding-left:0;& > :last-child{padding-bottom:0;}"], 2 * t.spacing.unit)
                })), a.default.img.withConfig({
                    displayName: "styled__StyledImage",
                    componentId: "sc-1snkd6f-5"
                })(["margin-bottom:16px;width:88px;img{width:88px;}", " ", ""], l.media.md `
    margin-bottom: 0;
    margin-inline-start: 16px;
    width: 105px;
  `, l.media.xl `
    position: absolute;
    bottom: 11px;
    inset-inline-start: 43px;
    width: 138px;
    height: auto;
  `)),
                ct = a.default.div.withConfig({
                    displayName: "styled__ContentBox",
                    componentId: "sc-1snkd6f-6"
                })(["margin:26px auto;max-width:1600px;box-sizing:border-box;position:static;text-align:left;flex-direction:column;", " ", ""], l.media.sm `
        align-content:center;
        justify-content: center;

      `, l.media.md `
        flex-direction: row;
        margin: 80px auto;
  `),
                mt = a.default.a.withConfig({
                    displayName: "styled__Button",
                    componentId: "sc-1snkd6f-7"
                })(["margin-bottom:16px;box-sizing:border-box;display:block;width:100%;padding:14px 24px;border-radius:116.16px;background-color:", ";font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;text-align:center;color:#fff;", " ", ""], m.A.blue500, l.media.md `
    margin-bottom: 12px;
    padding: 11px 23.5px;
    white-space: nowrap;
  `, l.media.xl `
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0%;
    padding: 9px 40px;
  `),
                gt = a.default.p.withConfig({
                    displayName: "styled__Email",
                    componentId: "sc-1snkd6f-8"
                })(["margin:0;font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:16px;line-height:85%;letter-spacing:-1%;text-align:center;color:", ";", " ", ""], m.A.blue500, l.media.md `
    font-size: 14px;
  `, l.media.md `
    font-size: 16px;
  `),
                ft = e => {
                    let {
                        type: t
                    } = e;
                    const n = "" === t ? t : `${t} `;
                    return i.createElement(ct, {
                        id: "need-a-review-section"
                    }, i.createElement(lt, null, i.createElement(pt, {
                        src: "/images/uploads/gambling/review_stars.png",
                        alt: "Review"
                    }), i.createElement("div", null, i.createElement("div", null, i.createElement(dt, null, "Need a Site Review?"), i.createElement(st, null, "We'd love to review your site and put it up here."))), i.createElement(rt, null, i.createElement(mt, {
                        href: `mailto:ads@bitcoin.com?subject=${n}Review Request`,
                        target: "_blank"
                    }, "Get in touch, now!"), i.createElement(gt, null, "ads@bitcoin.com"))))
                };
            ft.defaultProps = {
                type: ""
            };
            var ut = ft,
                ht = n(86462),
                xt = n(31110),
                yt = n(48701),
                wt = JSON.parse('{"uk":{"Accepted cryptocurrencies":"Прийняті криптовалюти","Supported languages":"Підтримувані мови"},"fa":{"Accepted cryptocurrencies":"رمزارزهای پذیرفته‌شده","Supported languages":"زبان‌های پشتیبانی‌شده"},"ro":{"Accepted cryptocurrencies":"Criptomonede acceptate","Supported languages":"Limbi suportate"},"pl":{"Accepted cryptocurrencies":"Akceptowane kryptowaluty","Supported languages":"Obsługiwane języki"},"id":{"Accepted cryptocurrencies":"Mata uang kripto yang diterima","Supported languages":"Bahasa yang didukung"},"th":{"Accepted cryptocurrencies":"สกุลเงินดิจิทัลที่ยอมรับ","Supported languages":"ภาษาที่รองรับ"},"sk":{"Accepted cryptocurrencies":"Akceptované kryptomeny","Supported languages":"Podporované jazyky"},"ga":{"Accepted cryptocurrencies":"Glactha cript-airgeadraí","Supported languages":"Teangacha tacaíochta"},"cs":{"Accepted cryptocurrencies":"Přijímané kryptoměny","Supported languages":"Podporované jazyky"},"et":{"Accepted cryptocurrencies":"Aktsepteeritud krüptovaluutad","Supported languages":"Toetatud keeled"},"hr":{"Accepted cryptocurrencies":"Prihvaćene kriptovalute","Supported languages":"Podržani jezici"},"hu":{"Accepted cryptocurrencies":"Elfogadott kriptovaluták","Supported languages":"Támogatott nyelvek"},"sl":{"Accepted cryptocurrencies":"Sprejete kriptovalute","Supported languages":"Podprti jeziki"},"nl":{"Accepted cryptocurrencies":"Geaccepteerde cryptocurrencies","Supported languages":"Ondersteunde talen"},"he":{"Accepted cryptocurrencies":"מטבעות קריפטוגרפיים שהתקבלו","Supported languages":"שפות נתמכות"},"sv":{"Accepted cryptocurrencies":"Accepterade kryptovalutor","Supported languages":"Stödda språk"},"no":{"Accepted cryptocurrencies":"Godkjente kryptovalutaer","Supported languages":"Støttet språk"},"fi":{"Accepted cryptocurrencies":"Hyväksytyt kryptovaluutat","Supported languages":"Tuetut kielet"},"vn":{"Accepted cryptocurrencies":"Chấp nhận tiền điện tử","Supported languages":"Các ngôn ngữ được hỗ trợ"},"ja":{"Accepted cryptocurrencies":"受け入れられる暗号通貨","Supported languages":"対応言語"},"pt":{"Accepted cryptocurrencies":"Criptomoedas aceitas","Supported languages":"Idiomas suportados"},"ko":{"Accepted cryptocurrencies":"허용된 암호화폐","Supported languages":"지원되는 언어"},"ar":{"Accepted cryptocurrencies":"العملات المشفرة المقبولة","Supported languages":"اللغات المدعومة"},"es":{"Accepted cryptocurrencies":"Criptomonedas aceptadas","Supported languages":"Idiomas compatibles"},"de":{"Accepted cryptocurrencies":"Akzeptierte Kryptowährungen","Supported languages":"Unterstützte Sprachen"},"it":{"Accepted cryptocurrencies":"Criptovalute accettate","Supported languages":"Lingue supportate"},"fr":{"Accepted cryptocurrencies":"Cryptomonnaies acceptées","Supported languages":"Langues prises en charge"},"ru":{"Accepted cryptocurrencies":"Принятые криптовалюты","Supported languages":"Поддерживаемые языки"},"zh":{"Accepted cryptocurrencies":"已接受的加密货币","Supported languages":"支持的语言"},"da":{"Accepted cryptocurrencies":"Accepterede kryptovalutaer","Supported languages":"Understøttede sprog"},"en":{"Accepted cryptocurrencies":"Accepted cryptocurrencies","Supported languages":"Supported languages"}}');
            const bt = {
                    "/images/uploads/gambling/currencies/ada.png": "ADA",
                    "/images/uploads/gambling/currencies/btc.png": "BTC",
                    "/images/uploads/gambling/currencies/dash.png": "DASH",
                    "/images/uploads/gambling/currencies/eth.png": "ETH",
                    "/images/uploads/gambling/currencies/ltc.png": "LTC",
                    "/images/uploads/gambling/currencies/pol.png": "POL",
                    "/images/uploads/gambling/currencies/trx.png": "TRX",
                    "/images/uploads/gambling/currencies/usdt.png": "USDT",
                    "/images/uploads/gambling/currencies/xrp.png": "XRP",
                    "/images/uploads/gambling/currencies/bch.png": "BCH",
                    "/images/uploads/gambling/currencies/cusd.png": "CUSD",
                    "/images/uploads/gambling/currencies/doge.png": "DOGE",
                    "/images/uploads/gambling/currencies/hash.png": "HASH",
                    "/images/uploads/gambling/currencies/neo.png": "NEO",
                    "/images/uploads/gambling/currencies/sol.png": "SOL",
                    "/images/uploads/gambling/currencies/uni.png": "UNI",
                    "/images/uploads/gambling/currencies/verse.png": "VERSE",
                    "/images/uploads/gambling/currencies/zec.png": "ZEC",
                    "/images/uploads/gambling/currencies/bnb.png": "BNB",
                    "/images/uploads/gambling/currencies/dai.png": "DAI",
                    "/images/uploads/gambling/currencies/dot.png": "DOT",
                    "/images/uploads/gambling/currencies/link.png": "LINK",
                    "/images/uploads/gambling/currencies/not.png": "NOT",
                    "/images/uploads/gambling/currencies/ton.png": "TON",
                    "/images/uploads/gambling/currencies/usdc.png": "USDC",
                    "/images/uploads/gambling/currencies/xdg.png": "XDG"
                },
                _t = ["betpanda"],
                vt = {
                    "1xbit": {
                        desktopimage: "/images/uploads/awardsbanners/1xbit-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/1xbit-awards-mobile.png"
                    },
                    betplay: {
                        desktopimage: "/images/uploads/awardsbanners/betplay-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/betplay-awards-mobile.png"
                    },
                    "betplay.io": {
                        desktopimage: "/images/uploads/awardsbanners/betplay-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/betplay-awards-mobile.png"
                    },
                    megapari: {
                        desktopimage: "/images/uploads/awardsbanners/megapari-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/megapar-awards-mobile.png"
                    },
                    playbet: {
                        desktopimage: "/images/uploads/awardsbanners/playbet-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/playbet-awards-mobile.png"
                    },
                    "playbet.io": {
                        desktopimage: "/images/uploads/awardsbanners/playbet-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/playbet-awards-mobile.png"
                    },
                    wincasino: {
                        desktopimage: "/images/uploads/awardsbanners/Wincasino-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/Wincasino-awards-mobile.png"
                    },
                    "win-casino": {
                        desktopimage: "/images/uploads/awardsbanners/Wincasino-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/Wincasino-awards-mobile.png"
                    },
                    "win.casino": {
                        desktopimage: "/images/uploads/awardsbanners/Wincasino-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/Wincasino-awards-mobile.png"
                    },
                    betpanda: {
                        desktopimage: "/images/uploads/awardsbanners/betpanda-awards.png",
                        mobileimage: "/images/uploads/awardsbanners/betpanda-awards-mobile.png"
                    }
                },
                kt = e => {
                    var t;
                    let {
                        casinos: n,
                        buttons: a
                    } = e;
                    const {
                        0: o,
                        1: r
                    } = (0, i.useState)({}), {
                        pathname: d
                    } = (0, ht.useLocation)(), {
                        locale: s
                    } = (0, f.A)(), p = null === (t = wt[s]) || void 0 === t ? void 0 : t["Accepted cryptocurrencies"], c = (0, i.useRef)(!1), m = (e, t) => {
                        window && window.innerWidth >= l.Breakpoints.lg && (window.open(e, "_blank", "noopener,noreferrer"), c.current || (c.current = !0, (0, xt.d)(`[TopCard] Click on ${t} to open ${e} on ${d}`)))
                    };
                    return i.createElement(O, {
                        item: 1
                    }, n.map(((e, t) => {
                        let {
                            id: n,
                            name: d,
                            logo: s,
                            currencies: c = [],
                            text: g,
                            subtext: f = [],
                            link: u,
                            award: h,
                            review: x
                        } = e;
                        const y = (null == x ? void 0 : x.features) || [],
                            w = o[n],
                            b = vt[n.toLowerCase()],
                            _ = (0, He.A)(new Set(c)),
                            v = [];
                        return y.forEach((e => {
                            var t, n, i;
                            "string" != typeof(null == e || null === (t = e.image) || void 0 === t ? void 0 : t.source) || null != e && null !== (n = e.image) && void 0 !== n && n.source.endsWith("/gambling/features/gift-blue.png") || null != e && null !== (i = e.image) && void 0 !== i && i.source.endsWith("/gambling/features/coins.png") || e.title.toLowerCase() === p.toLowerCase() || v.push(e)
                        })), i.createElement(H, {
                            award: h,
                            key: n
                        }, b && i.createElement(le, null, i.createElement(re, null), i.createElement(se, null, i.createElement(de, {
                            alt: "Award frame",
                            src: "/images/uploads/award_icon.svg"
                        }), h)), i.createElement(J, {
                            award: h,
                            columns: 3,
                            columnsSm: 1,
                            columnsMd: 1,
                            colored: _t.includes(n)
                        }, i.createElement(Q, {
                            award: h,
                            columns: 2,
                            columnsMd: 1,
                            columnsSm: 1,
                            onClick: () => m(u, "Images")
                        }, i.createElement(Y, null, i.createElement(ne, {
                            src: null == s ? void 0 : s.source,
                            alt: null == s ? void 0 : s.alt,
                            loading: t > 5 ? "lazy" : void 0,
                            fullHeight: (0, yt.B)(n)
                        }), d && i.createElement(U, null, d)), c && c.length > 0 && i.createElement(X, null, c.map(((e, t) => i.createElement(K, {
                            key: `${e+t}-currency`,
                            style: {
                                zIndex: c.length - t
                            }
                        }, i.createElement(ie, {
                            alt: "",
                            src: e
                        })))))), i.createElement(Z, {
                            award: h,
                            columns: 2,
                            columnsMd: 1,
                            columnsSm: 1,
                            onClick: () => m(u, "Welcome Offer")
                        }, i.createElement(te, null, g), f.length > 0 && i.createElement(nt(), {
                            style: {
                                color: l.colors.solid.textTwo
                            }
                        }, " ", f)), i.createElement(ee, {
                            columns: 1,
                            columnsMd: 1,
                            columnsSm: 1
                        }, i.createElement(ae, {
                            size: "small",
                            href: `#${n}-review`,
                            design: "secondary"
                        }, i.createElement("div", null, i.createElement("span", null, i.createElement(L.A, {
                            id: ("" === a ? "" : `${a}.`) + "buttons.read"
                        })))), i.createElement(oe, {
                            size: "small",
                            design: "primary",
                            href: u,
                            rel: "noopener noreferrer nofollow",
                            target: "_blank"
                        }, i.createElement("div", null, i.createElement("span", null, i.createElement(L.A, {
                            id: ("" === a ? "" : `${a}.`) + "buttons.visit"
                        }))))), v.length > 0 && i.createElement(fe, {
                            open: w,
                            onClick: () => (e => {
                                r((t => ({ ...t,
                                    [e]: !t[e]
                                })))
                            })(n)
                        })), i.createElement(pe, {
                            closed: !w || !y.length
                        }, (null == _ ? void 0 : _.length) && i.createElement(ce, {
                            columns: 2,
                            columnsMd: 2,
                            columnsSm: 1,
                            key: p,
                            style: {
                                marginBottom: -8
                            }
                        }, i.createElement(me, null, p), i.createElement(ge, null, _.reduce(((e, t) => bt[t] ? [].concat((0, He.A)(e), [i.createElement(ue, {
                            key: t
                        }, i.createElement("img", {
                            alt: bt[t],
                            src: t
                        }), bt[t])]) : e), []))), v.map((e => i.createElement(ce, {
                            columns: 2,
                            columnsMd: 2,
                            columnsSm: 1,
                            key: e.title
                        }, i.createElement(me, null, null == e ? void 0 : e.title), i.createElement(ge, null, null == e ? void 0 : e.text))))))
                    })))
                };
            kt.defaultProps = {
                buttons: ""
            };
            var Ct = kt,
                Et = n(53421),
                It = n(37210),
                zt = n.n(It),
                Nt = n(17119),
                St = n.n(Nt),
                At = n(3373),
                jt = n.n(At),
                Bt = n(35442),
                Tt = n(8715),
                Lt = n(91675),
                Wt = n.n(Lt);
            const Mt = a.default.div.withConfig({
                    displayName: "styled__Wrapper",
                    componentId: "sc-1ccttql-0"
                })(["position:relative;z-index:2;", ""], (e => {
                    let {
                        sticky: t
                    } = e;
                    return (0, a.css)(["width:100vw;box-sizing:border-box;background:#fff;", ""], t && (0, a.css)(["background:#fff;box-shadow:0 1px 0 0 rgba(0,0,0,0.05),0 3px 6px 0 rgba(0,0,0,0.06);"]))
                })),
                Rt = a.default.div.withConfig({
                    displayName: "styled__InnerWrapper",
                    componentId: "sc-1ccttql-1"
                })(["display:flex;align-items:center;margin:auto;background-color:#fff;"]),
                $t = a.default.div.withConfig({
                    displayName: "styled__Content",
                    componentId: "sc-1ccttql-2"
                })(["padding:20px;display:flex;box-sizing:border-box;margin:auto;justify-content:space-between;align-items:center;width:100%;max-width:1600px;background:#fff;", " ", ""], l.media.md `
    padding: 16px 40px;
  `, l.media.lg `
    padding: 16px 78px;
  `),
                Vt = a.default.img.withConfig({
                    displayName: "styled__Logo",
                    componentId: "sc-1ccttql-3"
                })(["width:auto;height:37px;", ""], l.media.sm `
    width: auto;
    height: 38px;
  `),
                Ft = a.default.div.withConfig({
                    displayName: "styled__Links",
                    componentId: "sc-1ccttql-4"
                })(["margin:0 15px 0 30px;align-items:center;gap:16px;& > svg[data-icon='bars']:hover,& > svg[data-icon='times-solid']:hover{cursor:pointer;}background-color:#1c1c1c;border-radius:85.714px;padding:10px 33px;display:none;", ""], l.media.xl `
    margin: 0 auto;
    display: flex;
  `),
                Pt = a.default.div.withConfig({
                    displayName: "styled__TopLinkContainer",
                    componentId: "sc-1ccttql-5"
                })(["position:relative;display:none;", ""], l.media.xl `
    display: inline-flex;
  `),
                Dt = a.default.a.withConfig({
                    displayName: "styled__TopLink",
                    componentId: "sc-1ccttql-6"
                })(["font-size:16px;color:#f0f0f5;text-decoration:none;cursor:pointer;font-family:'Satoshi Variable Regular',sans-serif;font-weight:500;font-size:17px;line-height:110%;"]),
                qt = a.default.div.withConfig({
                    displayName: "styled__TopLinkDropdown",
                    componentId: "sc-1ccttql-7"
                })(["position:absolute;top:100%;padding-top:28px;", " z-index:10;opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out;", ":hover &{opacity:1;visibility:visible;}"], (e => {
                    let {
                        isRightAligned: t
                    } = e;
                    return t ? "\n        inset-inline-end: 0;\n      " : "\n        inset-inline-start: 0;\n      "
                }), Pt),
                Gt = a.default.ul.withConfig({
                    displayName: "styled__TopLinkDropdownList",
                    componentId: "sc-1ccttql-8"
                })(["padding:12px 0;margin:0;list-style:none;min-width:180px;background-color:#fff;border:1px solid #e6ecf3;border-radius:12px;box-shadow:0px 15.622px 67.957px 0px rgba(45,50,59,0.02),0px 7.909px 29.625px 0px rgba(45,50,59,0.03),0px 3.124px 11.043px 0px rgba(45,50,59,0.05),0px 0.683px 3.929px 0px rgba(45,50,59,0.08);", ""], (e => {
                    let {
                        isTwoColumns: t
                    } = e;
                    return t ? "\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 15px;\n        min-width: 360px;\n\n        & > a:nth-child(n+13) {\n          display: none;\n        }\n      " : "\n        display: block;\n\n        & > a:nth-child(n+13) {\n          display: none;\n        }\n      "
                })),
                Ht = a.default.a.withConfig({
                    displayName: "styled__DropdownItem",
                    componentId: "sc-1ccttql-9"
                })(["font-size:15px;display:block;padding:12px 16px;color:#2d323b;text-decoration:none;white-space:nowrap;:first-child{color:rgb(247,147,26);}", " &:hover{background-color:rgb(226,228,229);}"], (e => {
                    let {
                        pinned: t
                    } = e;
                    return [t && (0, a.css)(["color:rgb(247,147,26);"])]
                })),
                Ot = a.default.div.withConfig({
                    displayName: "styled__TopDropdownButtonWrapper",
                    componentId: "sc-1ccttql-10"
                })(["display:flex;"]),
                Jt = a.default.button.withConfig({
                    displayName: "styled__TopDropdownButton",
                    componentId: "sc-1ccttql-11"
                })(["margin:0;padding:0;display:inline-flex;color:#f0f0f5;text-decoration:none;cursor:pointer;border:none;background:none;align-items:center;font-family:'Satoshi Variable Regular',sans-serif;font-weight:500;font-size:17px;line-height:110%;& > img{position:relative;top:1px;margin-inline-start:8px;transition:transform 0.3s;transform:rotate(0deg);}:hover{& > img{transform:rotate(180deg);}& > ", "{display:flex;}}"], qt),
                Ut = (0, a.default)(k()).withConfig({
                    displayName: "styled__ActionButton",
                    componentId: "sc-1ccttql-12"
                })(["&&{max-width:unset;display:block;margin:0 auto;", " ", "}"], l.media.sm `
    max-width: fit-content;
  `, l.media.xl `
    display: none;
  `),
                Qt = a.default.div.withConfig({
                    displayName: "styled__ExpandedMenu",
                    componentId: "sc-1ccttql-13"
                })(["width:100vw;height:calc(-79px + 100vh);display:", ";background:", ";background-color:#fff;overflow-y:auto;"], (e => {
                    let {
                        open: t
                    } = e;
                    return t ? "block" : "none"
                }), l.colors.solid.bgGrey),
                Yt = a.default.div.withConfig({
                    displayName: "styled__ExpandedMenuContent",
                    componentId: "sc-1ccttql-14"
                })(["padding:20px 32px;box-sizing:border-box;margin:0 auto;flex-direction:column;overflow-y:auto;align-items:center;max-width:1600px;padding-bottom:200px;", " ", " ", ""], l.media.md `
  padding: 32px 70px 100px 70px;
  flex-direction: row;
  align-items: center;
`, l.media.lg `
      padding: 32px 100px;
  `, l.media.xl `
    gap: 70px;
  `),
                Xt = (a.default.div.withConfig({
                    displayName: "styled__MobileContent",
                    componentId: "sc-1ccttql-15"
                })(["display:flex;box-sizing:border-box;margin:auto;justify-content:space-between;align-items:center;width:100%;background:", ";", ""], l.colors.solid.bgGrey, l.media.xl `
    display: none;
  `), a.default.div.withConfig({
                    displayName: "styled__MobileMenu",
                    componentId: "sc-1ccttql-16"
                })(["height:calc(100vh - 60px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:40px;& > a{font-size:24px;color:#fff;text-decoration:none;cursor:pointer;}& > button{width:100%;margin-top:40px;}"]), a.default.a.withConfig({
                    displayName: "styled__HomeLink",
                    componentId: "sc-1ccttql-17"
                })(["font-size:22px;", ""], l.media.md `
    font-size: 16px;
  `), a.default.div.withConfig({
                    displayName: "styled__LinkSections",
                    componentId: "sc-1ccttql-18"
                })(["display:grid;gap:36px;margin-bottom:40px;", " ", " ", ""], l.media.sm `
    gap: 48px;
  `, l.media.md `
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
  `, l.media.xl `
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 0;
  `)),
                Kt = a.default.div.withConfig({
                    displayName: "styled__LinkSection",
                    componentId: "sc-1ccttql-19"
                })(["max-width:300px;"]),
                Zt = a.default.h3.withConfig({
                    displayName: "styled__LinkSectionTitle",
                    componentId: "sc-1ccttql-20"
                })(["margin:0 0 11px;font-size:24px;font-weight:600;line-height:32px;text-align:start;text-decoration-skip-ink:none;color:#2d323b;", ""], l.media.md `
    margin-bottom: 16px;
  `),
                en = a.default.div.withConfig({
                    displayName: "styled__LinkSectionItems",
                    componentId: "sc-1ccttql-21"
                })(["width:100%;display:grid;column-gap:24px;grid-template-columns:repeat(2,1fr);flex-wrap:wrap;", ""], l.media.sm `
    grid-template-columns: 1fr;
  `),
                tn = a.default.a.withConfig({
                    displayName: "styled__LinkSectionItem",
                    componentId: "sc-1ccttql-22"
                })(["font-size:18px;font-weight:400;line-height:33.09px;text-align:start;text-decoration-skip-ink:none;color:rgba(45,50,59,0.9);"]),
                nn = (0, a.createGlobalStyle)(["", ""], (e => {
                    let {
                        locked: t
                    } = e;
                    return t && (0, a.css)(["html,body{overflow-y:hidden !important;}"])
                })),
                an = (0, a.default)(Wt()).withConfig({
                    displayName: "styled__StyledSearch",
                    componentId: "sc-1ccttql-23"
                })(["margin-inline:auto 8px;button{width:42px;height:42px;display:grid;justify-content:center;align-items:center;}", " ", " input{display:none;width:247px;", " ", " @media (min-width:1024px) and (max-width:1366px){width:177px;}&::placeholder{color:#757575;font-family:'Satoshi Variable',sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;}}"], l.media.md `
    margin-inline: auto 24px;
  `, l.media.xl `
    margin-inline-start: 0;
  `, l.media.md `
      width: 177px;
    `, l.media.lg `
      width: 0px;
    `);
            a.default.div.withConfig({
                displayName: "styled__BlankSpace",
                componentId: "sc-1ccttql-24"
            })(["margin:auto;display:flex;", ""], l.media.xl `
    display: none;
    margin: 0;
  `), a.default.a.withConfig({
                displayName: "styled__LoginButtonDesktop",
                componentId: "sc-1ccttql-25"
            })(["display:flex;justify-content:center;align-items:center;background:#ff9500;border-radius:116.162px;padding:12px 24px;gap:2px;width:78px;height:24px;color:#1c1c1c;font-family:'Satoshi Variable Medium',sans-serif;font-size:18px;font-weight:500;line-height:110%;text-align:center;cursor:pointer;position:relative;overflow:hidden;z-index:1;transition:background 0.3s ease,color 0.3s ease;&:hover{background:#ff7c18;}.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:ripple-animation 1.5s ease-out;background-color:rgba(204,85,0,0.6);pointer-events:none;z-index:0;}@keyframes ripple-animation{to{transform:scale(4);opacity:0;}}&.bop:not(:hover){animation:bop 1s linear infinite;}@keyframes bop{0%,100%{transform:scale(1.00004) rotate(-0.0216336deg);}10%{transform:scale(1.02519) rotate(0.418538deg);}20%{transform:scale(1.0284) rotate(-0.418538deg);}30%{transform:scale(1.0284) rotate(2.79107deg);}40%{transform:scale(1.0284) rotate(-2.79107deg);}50%{transform:scale(1.0284) rotate(4.35555deg);}60%{transform:scale(1.0284) rotate(-4.35555deg);}70%{transform:scale(1.0284) rotate(2.79107deg);}80%{transform:scale(1.0284) rotate(-2.79107deg);}90%{transform:scale(1.0284) rotate(0.0216336deg);}}display:none;", " ", ""], l.media.md `
    display: flex;
    margin: 0 24px 0 12px;
  `, l.media.lg `
    margin: 0px;
  `);
            var on = n(87302);
            const ln = a.default.div.withConfig({
                displayName: "styled__StickyWrap",
                componentId: "sc-1w4ook9-0"
            })([".sticky-inner-wrapper{z-index:9999;}"]);
            var rn = e => {
                let {
                    children: t,
                    setSticky: n
                } = e;
                return i.createElement(ln, null, i.createElement(on.A, {
                    onStateChange: e => {
                        e.status === on.A.STATUS_FIXED ? n(!0) : n(!1)
                    }
                }, i.createElement(i.Fragment, null, t)))
            };
            const dn = e => {
                    let {
                        link: t,
                        ...n
                    } = e;
                    return t ? i.createElement(zt(), Object.assign({
                        href: t
                    }, n)) : i.createElement(i.Fragment, n)
                },
                sn = Bt.GambleBlocker.getInstance(),
                pn = [150, 151, 160, 180, 190, 200, 210, 220, 230, 240],
                cn = e => {
                    var t, n;
                    let {
                        mainPath: a,
                        onHamburgerClose: o
                    } = e;
                    const {
                        0: l,
                        1: r
                    } = (0, i.useState)(!1), {
                        0: d,
                        1: s
                    } = (0, i.useState)(null), {
                        0: p,
                        1: c
                    } = (0, i.useState)(!1), {
                        locale: m
                    } = (0, f.A)(), {
                        pathname: g
                    } = (0, ht.useLocation)(), u = (0, _.useStaticQuery)("4207737751"), h = "en" === m ? "" : `/${m}`, x = (0, i.useMemo)((() => {
                        let e = null;
                        const {
                            edges: t
                        } = u.allFile;
                        for (let n = 0; n < t.length; n += 1) {
                            const i = t[n].node.childMarkdownRemark.frontmatter;
                            if (((null == i ? void 0 : i.routes) || []).some((e => {
                                    const t = `${h}${e}`;
                                    return e.endsWith("/") ? g.startsWith(t) : t.concat("/") === g
                                }))) {
                                if (i.locale === m) return i;
                                "en" === i.locale && (e = i)
                            }
                        }
                        return e
                    }), [m, h, g, u]), y = (0, i.useMemo)((() => {
                        var e;
                        return null == x || null === (e = x.links) || void 0 === e ? void 0 : e.map((e => {
                            if (!e.dropdown) return e.dropdown;
                            const [t, ...n] = e.dropdown, i = n.filter((e => !0 === e.pinned)), a = n.filter((e => !0 !== e.pinned));
                            return [t].concat((0, He.A)(i), (0, He.A)(a))
                        }))
                    }), [null == x ? void 0 : x.links]);
                    (0, i.useEffect)((() => {
                        if ("undefined" != typeof window && null != x && x.links) {
                            const e = x.links.map((e => {
                                if (!e.dropdown || e.dropdown.length <= 10) return e.dropdown;
                                const [t, ...n] = e.dropdown, i = n.filter((e => !0 === e.pinned)), a = n.filter((e => !0 !== e.pinned)).sort((() => .5 - Math.random()));
                                return [t].concat((0, He.A)(i), (0, He.A)(a))
                            }));
                            s(e)
                        }
                    }), [null == x ? void 0 : x.links]);
                    const w = d || y;
                    return x ? i.createElement(rn, {
                        setSticky: c
                    }, i.createElement(nn, {
                        locked: l
                    }), i.createElement(Mt, {
                        sticky: p
                    }, i.createElement(Rt, null, i.createElement($t, null, i.createElement(zt(), {
                        href: `https://www.bitcoin.com${h}/`
                    }, i.createElement(Vt, {
                        src: "/images/uploads/bitcoincom_logo_updated.svg",
                        alt: "Bitcoin.com"
                    })), i.createElement(Ft, null, null == x || null === (t = x.links) || void 0 === t ? void 0 : t.map(((e, t) => i.createElement(Pt, {
                        key: e.text
                    }, w[t] ? i.createElement(Ot, {
                        key: e.text
                    }, i.createElement(Jt, {
                        as: e.link ? "a" : "button",
                        href: e.link
                    }, e.text, i.createElement("img", {
                        alt: "dropdown arrow",
                        src: "/images/uploads/down-arrow-white.svg",
                        width: 12,
                        height: 12
                    })), i.createElement(qt, {
                        isRightAligned: t >= x.links.length - 2
                    }, i.createElement(Gt, {
                        isTwoColumns: w[t].length > 5
                    }, w[t].map((e => i.createElement(Ht, {
                        key: `${e.text}-${e.link}`,
                        href: e.link,
                        pinned: e.pinned
                    }, e.text)))))) : i.createElement(Dt, {
                        key: e.text,
                        href: e.link,
                        newTab: !0
                    }, e.text))))), "gambling" === a ? i.createElement(an, {
                        visible: !0,
                        rebrand: !0,
                        limitTo: {
                            paths: sn.blockListGamble,
                            keywords: pn,
                            groups: ["gambling"],
                            et_route: "/gambling/"
                        },
                        locale: m
                    }) : "exchanges" === a ? i.createElement(an, {
                        visible: !0,
                        rebrand: !0,
                        limitTo: {
                            paths: sn.blockListExchange,
                            keywords: [410],
                            groups: ["exchanges"],
                            et_route: "/exchanges/"
                        },
                        locale: m
                    }) : i.createElement(an, {
                        visible: !0,
                        rebrand: !0,
                        locale: "en"
                    }), l ? i.createElement(i.Fragment, null, i.createElement(jt(), {
                        style: {
                            minWidth: 30,
                            cursor: "pointer"
                        },
                        onClick: () => {
                            r(!1), o()
                        },
                        size: 30
                    })) : i.createElement(i.Fragment, null, i.createElement(St(), {
                        style: {
                            minWidth: 30,
                            cursor: "pointer"
                        },
                        onClick: () => {
                            r(!0)
                        },
                        size: 30
                    })))), i.createElement(Qt, {
                        open: l
                    }, i.createElement(Yt, null, i.createElement(Xt, null, null == x || null === (n = x.sections) || void 0 === n ? void 0 : n.map((e => i.createElement(Kt, {
                        key: e.title.text
                    }, i.createElement(dn, {
                        link: e.title.link
                    }, i.createElement(Zt, null, e.title.text)), i.createElement(en, null, e.links.map((e => i.createElement(tn, {
                        key: `${e.text}-${e.link}`,
                        href: e.link
                    }, e.text))))))), i.createElement(Tt.A, null)), null != x && x.button ? i.createElement(Ut, {
                        href: x.button.link,
                        design: x.button.design || "primary",
                        size: "small"
                    }, x.button.label) : i.createElement(Ut, {
                        href: Et.JR.url,
                        design: "primary",
                        size: "small"
                    }, Et.JR.label))))) : null
                };
            cn.defaultProps = {
                mainPath: "gambling",
                onHamburgerClose: () => {}
            };
            var mn = cn;
            a.default.div.withConfig({
                displayName: "styled__RelatedGuidesSection",
                componentId: "sc-tcm90z-0"
            })(["@media (max-width:1080px){display:flex;flex-direction:column;align-items:center;margin:20px 0;padding:0 15px;}"]), (0, a.default)(k()).withConfig({
                displayName: "styled__StyledButton",
                componentId: "sc-tcm90z-1"
            })(["display:flex;"]), a.default.div.withConfig({
                displayName: "styled__CenteredContainer",
                componentId: "sc-tcm90z-2"
            })(["display:flex;justify-content:center;align-items:center;flex-direction:column;max-width:1200px;margin:0 auto;width:100%;"]), a.default.div.withConfig({
                displayName: "styled__CardRelated",
                componentId: "sc-tcm90z-3"
            })(["display:flex;flex-direction:column;box-sizing:border-box;border-radius:24px;overflow:hidden;flex:1 1 700px;width:100%;margin:10px;padding-bottom:16px;"]), a.default.div.withConfig({
                displayName: "styled__Content",
                componentId: "sc-tcm90z-4"
            })(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:16px;overflow:hidden;flex-grow:1;"]), a.default.h4.withConfig({
                displayName: "styled__CardTitle",
                componentId: "sc-tcm90z-5"
            })(["margin:0;margin-bottom:0;font-size:16px;line-height:20px;font-weight:700;text-align:left;padding-bottom:0;"]);
            const gn = a.default.h3.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-tcm90z-6"
                })(["margin:0 0 16px;font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:20px;line-height:114%;letter-spacing:-2%;color:", ";text-align:start;", ""], m.A.grey900, l.media.md `
    font-size: 24px;
    line-height: 110%;
    /* margin-bottom: 8px; */
  `),
                fn = (a.default.p.withConfig({
                    displayName: "styled__CardText",
                    componentId: "sc-tcm90z-7"
                })(["color:#666;flex-grow:1;font-size:14px;line-height:24px;"]), a.default.a.withConfig({
                    displayName: "styled__ReadMoreLink",
                    componentId: "sc-tcm90z-8"
                })(["font-weight:700;font-size:20px;line-height:114%;letter-spacing:-2%;color:", ";&:hover{text-decoration:underline;}& svg{stroke-width:1;}", ""], m.A.blue500, l.media.md `
  /* font-weight: 500; */
  `)),
                un = (0, a.default)(N.uJ).withConfig({
                    displayName: "styled__StyledGoArrowRight",
                    componentId: "sc-tcm90z-9"
                })(["margin-bottom:-3px;padding-left:4px;"]),
                hn = ((0, a.default)(_.Link).withConfig({
                    displayName: "styled__StyledGatsbyLink",
                    componentId: "sc-tcm90z-10"
                })(["font-size:20px;line-height:22px;color:#2793ff;background:none;box-shadow:none;font-weight:700;text-decoration:none;text-shadow:0px 1px 1px rgba(0,0,0,0.1);"]), (0, a.default)(_.Link).withConfig({
                    displayName: "styled__MobileCard",
                    componentId: "sc-tcm90z-11"
                })(["display:flex;border:none;box-sizing:border-box;text-decoration:none;color:", ";width:100%;flex-direction:row;align-items:flex-start;justify-content:flex-start;", ""], (e => {
                    let {
                        theme: t
                    } = e;
                    return t.palette.text.default
                }), l.media.md `
    display: none;
  `), (0, a.default)(E()).withConfig({
                    displayName: "styled__StyledSectionweb",
                    componentId: "sc-tcm90z-12"
                })(["order:18;padding:0 !important;margin:66px 0px !important;", " ", ""], l.media.md `
    margin: 100px 0px !important;
  `, l.media.xl `
    margin: 120px 0px !important;
  `)),
                xn = a.default.div.withConfig({
                    displayName: "styled__StyledContentBlock",
                    componentId: "sc-tcm90z-13"
                })(["padding:0;"]),
                yn = ((0, a.default)(z()).withConfig({
                    displayName: "styled__StyledContentBlockweb",
                    componentId: "sc-tcm90z-14"
                })(["&&{padding:0 16px;align-items:center;", "}"], l.media.md `
      padding: 0 20px;
    `), (0, a.default)(k()).withConfig({
                    displayName: "styled__StyledButtonweb",
                    componentId: "sc-tcm90z-15"
                })(["display:flex;"]), a.default.div.withConfig({
                    displayName: "styled__DesktopContainerweb",
                    componentId: "sc-tcm90z-16"
                })(["", ""], l.media.md `
    display: block;
  `)),
                wn = (a.default.div.withConfig({
                    displayName: "styled__TitleWrapperweb",
                    componentId: "sc-tcm90z-17"
                })(["display:flex;justify-content:space-between;align-items:center;"]), a.default.div.withConfig({
                    displayName: "styled__TitleWrapper",
                    componentId: "sc-tcm90z-18"
                })(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;"]), a.default.h2.withConfig({
                    displayName: "styled__MainTitle",
                    componentId: "sc-tcm90z-19"
                })(["font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:40px;line-height:85%;letter-spacing:-2%;text-transform:uppercase;margin:0;text-align:start !important;", " ", ""], l.media.md `
    font-size: 46px;
  `, l.media.xl `
    font-size: 60px;
    line-height: 90%;
  `)),
                bn = (a.default.a.withConfig({
                    displayName: "styled__ReadMoreLinkmobile",
                    componentId: "sc-tcm90z-20"
                })(["color:#2793ff;text-decoration:none;font-weight:bold;&:hover{text-decoration:underline;}"]), a.default.div.withConfig({
                    displayName: "styled__CardContainerweb",
                    componentId: "sc-tcm90z-21"
                })(["margin:22px 0 0 0;cursor:pointer;position:relative;", " .left-arrow,.right-arrow{display:none;}&:hover .left-arrow,&:hover .right-arrow{display:none;}"], l.media.md `
  .left-arrow,
  .right-arrow {
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: #0085ff;
    color: #333;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    z-index: 10;
  }

  &:hover .left-arrow,
  &:hover .right-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `)),
                _n = a.default.div.withConfig({
                    displayName: "styled__CardWrapperweb",
                    componentId: "sc-tcm90z-22"
                })(["display:flex;gap:32px;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}", ""], l.media.md `
    flex-direction: row;
  `),
                vn = (a.default.div.withConfig({
                    displayName: "styled__CardWrapperwebmobile",
                    componentId: "sc-tcm90z-23"
                })(["display:flex;gap:32px;margin:24px 0 0 0;flex-direction:column;overflow-x:auto;scroll-behavior:smooth;flex-direction:row;"]), a.default.div.withConfig({
                    displayName: "styled__ContentContainerweb",
                    componentId: "sc-tcm90z-24"
                })(["display:flex;align-items:center;flex-direction:column;gap:0;width:100%;height:100%;max-width:305px;"])),
                kn = (a.default.div.withConfig({
                    displayName: "styled__ContentContainer",
                    componentId: "sc-tcm90z-25"
                })(["display:flex;width:260px;", ""], l.media.md `
  width: 305px;
  `), a.default.div.withConfig({
                    displayName: "styled__ContentWrapperweb",
                    componentId: "sc-tcm90z-26"
                })(["padding:0;"])),
                Cn = a.default.img.withConfig({
                    displayName: "styled__CardImage",
                    componentId: "sc-tcm90z-27"
                })(["width:72px;height:72px;object-fit:cover;border-radius:10px;margin:0 0 16px;width:260px;height:246px;", ""], l.media.md `
  width: 305px;
  height: 234px;
  `),
                En = (a.default.img.withConfig({
                    displayName: "styled__CardImageweb",
                    componentId: "sc-tcm90z-28"
                })(["width:72px;height:72px;object-fit:cover;object-position:center;border-radius:12px;", ""], l.media.md `
    width: auto;
    height: auto;
    object-fit: unset;
    object-position: unset;
    border-radius: 0px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  `), a.default.h3.withConfig({
                    displayName: "styled__Titleweb",
                    componentId: "sc-tcm90z-29"
                })(["font-size:24px;font-weight:800;line-height:24px;color:#131720;text-align:left;", ""], l.media.md `

    font-weight: 700;
    line-height: 24px;
    color: #2d323b;
    margin: 0 0 20px 0;
  `), a.default.p.withConfig({
                    displayName: "styled__DateText",
                    componentId: "sc-tcm90z-30"
                })(["display:block;margin:16px 0;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;color:", ";", ""], m.A.grey700, l.media.md `

  `)),
                In = (a.default.div.withConfig({
                    displayName: "styled__MobileContainer",
                    componentId: "sc-tcm90z-31"
                })(["display:block;", ""], l.media.md `
    display: none;
  `), a.default.div.withConfig({
                    displayName: "styled__ResponsiveMainContainer",
                    componentId: "sc-tcm90z-32"
                })(["display:flex;justify-content:start;align-items:start;flex-direction:column;gap:16px;margin:0px 0px 24px 0px;"]), a.default.div.withConfig({
                    displayName: "styled__ResponsiveMainWrapper",
                    componentId: "sc-tcm90z-33"
                })(["display:flex;justify-content:start;align-items:center;gap:16px;"]), a.default.div.withConfig({
                    displayName: "styled__ResponsiveContentConatiner",
                    componentId: "sc-tcm90z-34"
                })(["display:flex;justify-content:center;align-items:start;flex-direction:column;"]), (0, a.default)(k()).withConfig({
                    displayName: "styled__ResponsiveButtonweb",
                    componentId: "sc-tcm90z-35"
                })(["width:100% !important;max-width:100% !important;", ""], l.media.md `
    width: auto !important;
    max-width: 326px !important;
  `), (0, a.default)(k()).withConfig({
                    displayName: "styled__RightArrowButtonweb",
                    componentId: "sc-tcm90z-36"
                })(["&&{display:none !important;position:absolute !important;right:-24px;top:50%;transform:translateY(-50%);cursor:pointer;z-index:2;", "}"], l.media.md `
      display: flex !important;
    `), (0, a.default)(k()).withConfig({
                    displayName: "styled__LeftArrowButtonweb",
                    componentId: "sc-tcm90z-37"
                })(["&&{display:none !important;position:absolute !important;left:-24px;top:50%;transform:translateY(-50%);cursor:pointer;z-index:2;", "}"], l.media.md `
      display: flex !important;
    `), a.default.div.withConfig({
                    displayName: "styled__ButtonWrapper",
                    componentId: "sc-tcm90z-38"
                })(["display:none;justify-content:end;align-items:center;gap:16px;", ""], l.media.md `
    display: flex;
  `)),
                zn = a.default.span.withConfig({
                    displayName: "styled__RightArrowButton",
                    componentId: "sc-tcm90z-39"
                })(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;background:#4169e1;border-radius:116.162px;cursor:pointer;position:relative;overflow:hidden;transition:background 0.3s ease;&:hover{background:#2048c1;}.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:ripple-animation 1s ease-out;background-color:rgba(24,49,133,0.7);pointer-events:none;z-index:0;}@keyframes ripple-animation{to{transform:scale(4);opacity:0;}}"]),
                Nn = a.default.span.withConfig({
                    displayName: "styled__LeftArrowButton",
                    componentId: "sc-tcm90z-40"
                })(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;background:#4169e1;border-radius:116.162px;cursor:pointer;position:relative;overflow:hidden;transition:background 0.3s ease;&:hover{background:#2048c1;}.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:ripple-animation 1s ease-out;background-color:rgba(24,49,133,0.7);pointer-events:none;z-index:0;}@keyframes ripple-animation{to{transform:scale(4);opacity:0;}}"]),
                Sn = a.default.div.withConfig({
                    displayName: "styled__Header",
                    componentId: "sc-tcm90z-41"
                })(["display:flex;justify-content:space-between;align-items:end;gap:16px;margin-bottom:32px;", " ", ""], l.media.md `
    margin-bottom: 40px;
  `, l.media.xl `
    margin-bottom: 60px;
  `);
            var An = n(99114);
            const jn = e => {
                let {
                    articles: t,
                    title: n,
                    readLinkText: a
                } = e;
                const o = (0, i.useRef)(null),
                    l = e => {
                        if (o.current) {
                            const t = 800;
                            o.current.scrollBy({
                                left: e * t,
                                behavior: "smooth"
                            })
                        }
                    };
                return null != t && t.length ? i.createElement(hn, {
                    id: "related-guides"
                }, i.createElement(xn, null, i.createElement(yn, null, i.createElement(Sn, null, i.createElement(wn, null, n), i.createElement(In, {
                    dir: "ltr"
                }, i.createElement(Nn, {
                    type: "button",
                    onClick: () => l(-1),
                    onMouseEnter: An.A
                }, i.createElement(N.JWD, {
                    size: 30,
                    color: "#ffffff"
                })), i.createElement(zn, {
                    type: "button",
                    onClick: () => l(1),
                    onMouseEnter: An.A
                }, i.createElement(N.uJ, {
                    size: 30,
                    color: "#ffffff"
                })))), i.createElement(bn, null, i.createElement(_n, {
                    ref: o
                }, t.map((e => i.createElement("div", {
                    key: e.id
                }, i.createElement(vn, {
                    onClick: () => window.open(e.link, "_blank", "noopener,noreferrer")
                }, i.createElement(Cn, {
                    src: e.image,
                    alt: "article thumbnail",
                    loading: "lazy"
                }), i.createElement(kn, null, i.createElement(gn, null, e.title), i.createElement(En, null, e.excerpt), i.createElement(fn, {
                    href: e.link
                }, a, i.createElement(un, null)))))))))))) : null
            };
            jn.defaultProps = {
                articles: Et.Qr,
                title: "Related Guides",
                readLinkText: "Read this article"
            };
            var Bn = jn,
                Tn = n(63258),
                Ln = n(79892);
            const Wn = r().light,
                Mn = a.default.div.withConfig({
                    displayName: "Template__CenteredContainer",
                    componentId: "sc-r4vmr6-0"
                })(["padding:40px 20px;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:", ";position:relative;left:-16px;width:100vw;& > div{min-height:unset;width:unset;}", " ", ""], m.A.green100, l.media.md `
    position: static;
    width: 100%;
    border-radius: 10px;
    padding: 59px 48px;

    background-color: ${m.A.green50};

    background-image: url('/images/uploads/gambling/buy_light.png');
    background-size: 60% auto;
    background-repeat: no-repeat;
    background-position: 120%;
    align-items: flex-start;
  `, l.media.xl `
    padding: 58px 100px;
    /* background-origin: content-box;
    background-position:right;
    background-size: 50% auto; */
    background-position: 90% center;
    background-size: auto 100%;
  `),
                Rn = a.default.h2.withConfig({
                    displayName: "Template__BuyWidgetTitle",
                    componentId: "sc-r4vmr6-1"
                })(["font-family:'Elza Condensed Black',sans-serif;font-weight:900;font-size:50px;line-height:85%;letter-spacing:-2%;text-transform:uppercase;margin:0 0 16px;", ""], l.media.md `
    font-size: 70px;
    margin-bottom: 40px;
  `),
                $n = a.default.div.withConfig({
                    displayName: "Template__AuthorBlock",
                    componentId: "sc-r4vmr6-2"
                })(["margin:20px 0;padding:20px;border-radius:10px;background-color:", ";display:flex;flex-direction:column;flex-wrap:wrap;h3{font-family:'Satoshi Variable',sans-serif;font-weight:700;font-size:20px;line-height:114%;letter-spacing:-2%;display:flex;align-items:center;gap:16px;margin:0 0 16px;::before{content:'';width:34px;height:34px;background-image:url('/images/uploads/gambling/book_icon.png');background-size:contain;background-repeat:no-repeat;}}p{margin:0 0 16px;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;color:#797b8b;}a{color:", ";text-decoration:none;font-weight:500;font-size:18px;line-height:150%;letter-spacing:0%;}", " ", ""], m.A.grey50, m.A.blue500, l.media.md `
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    
    h3 {
      width: 100%;
    }

    p {
      margin-bottom: 0;
      margin-inline-end: auto;
    }
    
  `, l.media.xl `
    h3 {
      margin-bottom: 0px;
      width: max-content;
    }
  `),
                Vn = a.default.a.withConfig({
                    displayName: "Template__AuthorAnchorTag",
                    componentId: "sc-r4vmr6-3"
                })(["&&{font-family:'Satoshi Variable',sans-serif;font-weight:500;font-size:18px;line-height:150%;letter-spacing:0%;color:", ";", " ", "}"], m.A.grey900, l.media.md `
      margin-inline-end: 16px;
    `, l.media.xl `
      margin-inline-start: auto;
    `),
                Fn = e => {
                    let {
                        locale: t = "en"
                    } = e;
                    return i.createElement(Mn, null, i.createElement(Rn, null, "BTC QUOTE"), i.createElement(s(), {
                        initialCrypto: "BTC",
                        selectedTab: "buy",
                        passThroughAddress: !0,
                        locale: t,
                        callback: e => {
                            let {
                                data: t
                            } = e;
                            const n = new URLSearchParams({ ...t.crypto && {
                                    crypto: t.crypto
                                },
                                ...t.fiat && {
                                    fiat: t.fiat
                                },
                                ...t.amount && {
                                    amount: t.amount
                                },
                                ...t.address && {
                                    address: t.address
                                },
                                utm_source: "bitcoin_www_gambling",
                                utm_medium: "medium_www_gambling",
                                utm_campaign: "campaign_www_gambling"
                            });
                            parseFloat(t.amount) > 4999 && "USD" === t.fiat ? window.location.href = "https://branch.wallet.bitcoin.com/e/buy-widget-gambling-25k" : window.location.href = `https://branch.wallet.bitcoin.com/buy-widget-gambling?${n.toString()}`
                        }
                    }))
                };
            Fn.defaultProps = {
                locale: "en"
            };
            var Pn = e => {
                const {
                    location: {
                        pathname: t
                    },
                    pageContext: {
                        supportedLocales: n,
                        locale: l,
                        messages: r,
                        htmlAst: d,
                        headings: s
                    }
                } = e, f = (0, i.useRef)(null), {
                    0: u,
                    1: h
                } = (0, i.useState)(!1), {
                    0: x,
                    1: y
                } = (0, i.useState)(!1), {
                    0: w,
                    1: _
                } = (0, i.useState)(!1), {
                    0: v,
                    1: k
                } = (0, i.useState)(!1), {
                    0: C,
                    1: E
                } = (0, i.useState)(!1), {
                    0: I,
                    1: z
                } = (0, i.useState)(!1), N = (0, i.useMemo)((() => {
                    const e = r["gambling.articles"] || [];
                    return e.length > 0 ? e : Et.Qr
                }), [r]), L = t.replace(/^\/+/, "").replace(/\/+$/, "");
                (0, i.useEffect)((() => {
                    if ("undefined" != typeof window) {
                        const e = document.createElement("script");
                        e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4413360973090930", e.async = !0, e.crossOrigin = "anonymous", document.body.appendChild(e), window.adsbygoogle && (window.adsbygoogle = window.adsbygoogle || [], window.adsbygoogle.push({}))
                    }
                }), []), (0, i.useEffect)((() => (f.current = () => {
                    window.scrollY > 100 && (y(!0), window.removeEventListener("scroll", f.current))
                }, window.addEventListener("scroll", f.current), (async () => {
                    const e = (0, c.E7)();
                    if (e) return void("gb" === e.toLowerCase() && h(!0));
                    const t = await (async () => {
                        let e = await (0, c.vM)();
                        return null === e && (sessionStorage.removeItem(c.XE), e = await (0, c.vM)()), !("string" == typeof e && "gb" !== e.toLowerCase())
                    })();
                    h(t)
                })(), () => {
                    f.current && window.removeEventListener("scroll", f.current)
                })), []);
                const W = (0, i.useMemo)((() => r["gambling.casinos"] ? r["gambling.casinos"] : []), [r]);
                (0, i.useEffect)((() => {
                    const e = () => {
                        const e = document.getElementById("related-guides");
                        if (e) {
                            e.getBoundingClientRect().top <= 30 ? (_(!0), E(!0)) : (_(!1), E(!1))
                        }
                    };
                    return e(), window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }), []);
                const M = !I && C;
                return i.createElement(o.A, {
                    locale: l,
                    defaultLocale: g.X,
                    messages: r
                }, i.createElement(a.ThemeProvider, {
                    theme: Wn
                }, i.createElement(S, {
                    displayStickyFooter: M
                }, i.createElement(m.z, null), i.createElement(b, {
                    page: L,
                    supportedLocales: n
                }), u ? null : i.createElement(mn, {
                    onHamburgerClose: () => {
                        k(!0)
                    }
                }), i.createElement(j, null, i.createElement(V, null), W.length > 0 && i.createElement(Ct, {
                    casinos: W,
                    buttons: "gambling"
                }), W.length > 3 && i.createElement(ut, {
                    type: "Gambling"
                }), i.createElement(Bn, {
                    articles: N
                }), i.createElement(Ge, null), u ? null : i.createElement(Fn, {
                    locale: l
                }), i.createElement(Ke, {
                    headings: s,
                    htmlAst: d
                }), i.createElement($n, null, i.createElement("h3", null, "About the Author"), i.createElement(Vn, {
                    href: "https://news.bitcoin.com/author/b-chad/"
                }, "B.Chad"), i.createElement("p", null, "Active in technology and gaming since 2006."), i.createElement("a", {
                    href: "mailto:b.chad@bitcoin.com"
                }, "b.chad@bitcoin.com", i.createElement(A, null))), i.createElement(ut, {
                    type: "Gambling"
                }), ot && i.createElement(ot, null), i.createElement(T, null, w && i.createElement(B, {
                    src: "/images/uploads/gambling/scroll_top.svg",
                    alt: "button up",
                    onClick: async () => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), await (0, xt.d)("[Gambling Page - Scroll To Top] Button Click")
                    }
                }), i.createElement(Tn.A, {
                    showFooter: M,
                    setShowStickyFooter: z,
                    type: "Gambling",
                    currentCasino: W[0],
                    pathname: L
                }))), i.createElement("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "block"
                    },
                    "data-ad-client": "ca-pub-4413360973090930",
                    "data-ad-slot": "8135904373",
                    "data-ad-format": "auto",
                    "data-full-width-responsive": "true"
                }), i.createElement(p.A, {
                    isMenuClosed: v
                }), !u && x ? i.createElement(Ln.A, null) : null)))
            }
        },
        53421: function(e, t, n) {
            "use strict";
            n.d(t, {
                JR: function() {
                    return a
                },
                Qr: function() {
                    return i
                }
            });
            const i = [{
                    title: "Top Bitcoin Gambling Review Site",
                    id: "top-bitcoin-gambling-review-site",
                    excerpt: "Discover top Bitcoin casinos and trusted betting sites for secure gambling",
                    link: "https://www.bitcoin.com/directory/gambling/",
                    image: "/images/uploads/gambling-image1.png"
                }, {
                    title: "Top Bitcoin Sportsbooks in 2025",
                    id: "top-bitcoin-sportsbooks-in-2025",
                    excerpt: "Find the best Bitcoin sports betting sites with secure transactions and competitive odds.",
                    link: "https://www.bitcoin.com/gambling/betting",
                    image: "/images/uploads/gambling-image2.png"
                }, {
                    title: "Fastest Payout Bitcoin Casinos",
                    id: "the-fastest-payout-bitcoin-crypto-casinos",
                    excerpt: "Explore best Bitcoin casinos with instant withdrawals and fast payouts",
                    link: "https://www.bitcoin.com/gambling/casino/instant-withdrawal/",
                    image: "/images/uploads/gambling-image3.png"
                }, {
                    title: "Top Crypto Gambling Platforms",
                    id: "unveiling-premier-crypto-gambling-platforms-2025",
                    excerpt: "Discover top Bitcoin casinos and sportsbooks with secure and fast experiences.",
                    link: "https://www.bitcoin.com/gambling/reviews/",
                    image: "/images/uploads/gambling-image4.png"
                }, {
                    title: "Top Bitcoin Bingo Sites",
                    id: "top-bitcoin-bingo-sites",
                    excerpt: "Explore the best crypto casinos offering Bitcoin bingo games.",
                    link: "https://www.bitcoin.com/gambling/bingo/",
                    image: "/images/uploads/gambling-image5.png"
                }],
                a = {
                    id: "Review Home",
                    label: "Review Home",
                    url: "https://www.bitcoin.com/directory/gambling/"
                }
        }
    }
]);