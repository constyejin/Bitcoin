"use strict";
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [4223], {
        54178: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                radius: {
                    default: 3,
                    medium: 5
                },
                solid: {
                    default: "1px solid",
                    medium: "3px solid"
                }
            }
        },
        40166: function(t, e, r) {
            var n = this && this.__makeTemplateObject || function(t, e) {
                    return Object.defineProperty ? Object.defineProperty(t, "raw", {
                        value: e
                    }) : t.raw = e, t
                },
                i = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                    var n = Array(t),
                        i = 0;
                    for (e = 0; e < r; e++)
                        for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
                    return n
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o, a, s = r(8711);
            ! function(t) {
                t[t.sm = 576] = "sm", t[t.md = 768] = "md", t[t.lg = 992] = "lg", t[t.xl = 1200] = "xl"
            }(o = e.Breakpoints || (e.Breakpoints = {})), e.media = Object.keys(o).reduce((function(t, e) {
                return t[e] = function(t) {
                    for (var r = [], l = 1; l < arguments.length; l++) r[l - 1] = arguments[l];
                    return s.css(a || (a = n(["\n      @media (min-width: ", "em) {\n        ", "\n      }\n    "], ["\n      @media (min-width: ", "em) {\n        ", "\n      }\n    "])), o[e] / 16, s.css.apply(void 0, i([t], r))).join("")
                }, t
            }), {}), e.breakpoints = o, e.default = e.breakpoints
        },
        69540: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.colors = {
                solid: {
                    primaryBlue: "#2793FF",
                    primaryGreen: "#0AC18E",
                    primaryYellow: "#FFBE3D",
                    primaryRed: "#FF5050",
                    secondaryOne: "#F7FAFD",
                    secondaryTwo: "#F6FBFB",
                    secondaryThree: "#FBF9F5",
                    secondaryFour: "#FBF5F6",
                    textOne: "#2D323B",
                    textTwo: "#5B667C",
                    textThree: "#8A94A6",
                    textFour: "#B0B7C3",
                    bgGrey: "#F1F7FD",
                    bgWhite: "#FFFFFF",
                    white: "#FFFFFF",
                    caribbeanGreen: "#0AC18E",
                    caribbeanGreenDarkest: "",
                    caribbeanGreenDark: "",
                    caribbeanGreenLight: "",
                    caribbeanGreenLightest: "",
                    vulcan: "#131720",
                    vulcanLight: "#111724",
                    vulcanLightest: "#6B717E",
                    java: "#18E2C1",
                    alto: "#D8D8D8",
                    ghost: "#C7CDD9",
                    ghostLight: "#C8CDD8",
                    bunker: "#0D1017",
                    mystic: "#E5E8F0",
                    comet: "#49505F",
                    cometDark: "#2D323B",
                    cometDarkest: "#272B34",
                    zircon: "#FBFCFF",
                    zirconDark: "#FDFDFD",
                    zirconDarkest: "#CDCDCD",
                    pictonBlue: "#2FA9EE",
                    royalBlue: "#6C43EE",
                    governorBay: "#2933BC",
                    gamboge: "#F09E0E",
                    fuelYellow: "#EDB72E",
                    cinnabar: "#E23F2E",
                    violetRed: "#EE3772"
                },
                gradient: {
                    caribbeanGreen: "linear-gradient(#2FA9EE, #31C275)",
                    pictonBlue: "linear-gradient(#4AB8FA, #1499E2)",
                    royalBlue: "linear-gradient(#8256FF, #562FDE)",
                    governorBay: "linear-gradient(#2C40C9, #2625B0)",
                    gamboge: "linear-gradient(#F6A414, #EA9808)",
                    fuelYellow: "linear-gradient(#FFCB57, #DBA204)",
                    cinnabar: "linear-gradient(#EB4B37, #D93324)",
                    violetRed: "linear-gradient(#FF3F92, #DE2F51)"
                },
                fill: {
                    solid: "url(https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/fill.png)",
                    gradient: "url(https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/btn.png)",
                    gradientLight: "url(https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/btn_h.png)",
                    gradientDark: "url(https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/btn_a.png)"
                }
            }
        },
        58035: function(t, e, r) {
            var n = this && this.__makeTemplateObject || function(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, o = r(8711);
            e.fontUrl = "https://menu.cdn.bitcoindotcom.net/uni/dist/fonts.css", e.GlobalStyle = o.createGlobalStyle(i || (i = n(["\n  html {\n    scroll-behavior: smooth;\n  }\n\n  html,\n  body,\n  ___gatsby,\n  ___gatsby > div {\n    font-family: ", ";\n    margin: 0;\n    padding: 0;\n    color: ", ";\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x: hidden;\n\n    font-size: 16px;\n    background-color: ", ";\n  }\n\n  a {\n    display: inline-block;\n    color: ", ";\n    letter-spacing: 0;\n    font-weight: 600;\n    text-decoration: none;\n  }\n"], ["\n  html {\n    scroll-behavior: smooth;\n  }\n\n  html,\n  body,\n  ___gatsby,\n  ___gatsby > div {\n    font-family: ", ";\n    margin: 0;\n    padding: 0;\n    color: ", ";\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x: hidden;\n\n    font-size: 16px;\n    background-color: ", ";\n  }\n\n  a {\n    display: inline-block;\n    color: ", ";\n    letter-spacing: 0;\n    font-weight: 600;\n    text-decoration: none;\n  }\n"])), (function(t) {
                return t.theme.typography.fontFamily
            }), (function(t) {
                return t.theme.palette.text.default
            }), (function(t) {
                return t.theme.palette.background.default
            }), (function(t) {
                return t.theme.palette.text.link || ""
            }))
        },
        24606: function(t, e, r) {
            function n(t) {
                for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(50665);
            n(r(61721)), n(r(58035)), n(r(69540)), n(r(48111)), n(r(40166));
            var o = r(7426);
            e.Logos = o.default, e.default = i.default
        },
        7426: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = {
                Main: {
                    default: "https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logo_black.png",
                    contrast: "https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logo_white.png"
                },
                Card: {
                    default: "https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logos/card_black.png",
                    contrast: "https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logos/card_white.png"
                }
            };
            e.default = r
        },
        61721: function(t, e, r) {
            var n = this && this.__assign || function() {
                return n = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, n.apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(83056);
            e.createPalette = function(t) {
                var e = n(n({}, i.default.palette), t);
                return {
                    primary: e.primary,
                    text: e.text,
                    background: e.background,
                    border: e.border
                }
            }
        },
        18203: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                boxShadow: {
                    card: "0 20px 50px 0 rgba(0, 0, 0, 0.1)",
                    navbar: "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.06) 0px 3px 6px 0px",
                    button: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                    buttonPrimary: "inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5)",
                    input: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.14)",
                    select: "0 4px 10px 0 rgba(21, 19, 56, 0.07)",
                    downloadIcon: "inset 0px 1.5px 0px 0px rgb(255, 255, 255), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
                },
                textShadow: {}
            }
        },
        12339: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                unit: 8
            }
        },
        48111: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), r(8711);
            var n = r(61721),
                i = r(28077),
                o = r(40166),
                a = r(12339),
                s = r(42221),
                l = r(54178),
                u = r(16922),
                c = r(18203);
            e.createTheme = function(t) {
                var e = t.palette;
                return {
                    palette: n.createPalette(e),
                    breakpoints: o.default,
                    spacing: a.default,
                    typography: i.default,
                    zIndex: s.default,
                    border: l.default,
                    transitions: u.default,
                    shadows: c.default
                }
            }
        },
        83056: function(t, e, r) {
            var n = this && this.__assign || function() {
                return n = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, n.apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(69540),
                o = r(86601),
                a = {
                    default: i.colors.solid.caribbeanGreen,
                    fill: i.colors.fill.solid,
                    background: {
                        background: i.colors.fill.solid,
                        backgroundSize: "100% 100%",
                        backgroundColor: i.colors.solid.caribbeanGreen
                    },
                    text: {
                        color: i.colors.solid.caribbeanGreen,
                        backgroundImage: i.colors.fill.solid,
                        backgroundSize: "100% 100%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }
                },
                s = {
                    palette: n({
                        primary: a
                    }, o.default.palette)
                };
            e.default = s
        },
        76377: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(69540),
                i = {
                    palette: {
                        text: {
                            default: n.colors.solid.zircon,
                            secondary: n.colors.solid.comet,
                            tertiary: n.colors.solid.white,
                            contrast: n.colors.solid.vulcan
                        },
                        background: {
                            default: n.colors.solid.vulcan,
                            secondary: n.colors.solid.vulcanLightest,
                            tertiary: n.colors.solid.cometDark,
                            alternate: n.colors.solid.bunker,
                            contrast: n.colors.solid.zirconDark
                        },
                        border: {
                            default: n.colors.solid.cometDark,
                            secondary: n.colors.solid.cometDarkest,
                            tertiary: n.colors.solid.cometDarkest,
                            contrast: n.colors.solid.zirconDarkest
                        }
                    }
                };
            e.default = i
        },
        50665: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(86601),
                i = r(76377),
                o = r(48111),
                a = {
                    light: o.createTheme(n.default),
                    dark: o.createTheme(i.default)
                };
            e.default = a
        },
        86601: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(69540),
                i = {
                    palette: {
                        text: {
                            default: n.colors.solid.vulcan,
                            secondary: n.colors.solid.vulcanLightest,
                            tertiary: n.colors.solid.ghostLight,
                            contrast: n.colors.solid.zircon
                        },
                        background: {
                            default: n.colors.solid.zircon,
                            secondary: n.colors.solid.zirconDarkest,
                            tertiary: n.colors.solid.white,
                            alternate: n.colors.solid.vulcan,
                            contrast: n.colors.solid.vulcanLight
                        },
                        border: {
                            default: n.colors.solid.ghostLight,
                            secondary: n.colors.solid.mystic,
                            tertiary: n.colors.solid.alto,
                            contrast: n.colors.solid.vulcanLightest
                        }
                    }
                };
            e.default = i
        },
        16922: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.transitions = {
                easing: {
                    easeInOut: "ease-in-out",
                    easeOut: "ease-out",
                    easeIn: "ease-in"
                },
                duration: {
                    short: 150,
                    default: 300
                }
            }, e.default = e.transitions
        },
        28077: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;"
            }
        },
        42221: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                modal: 1300,
                tooltip: 1500
            }
        },
        33672: function(t, e, r) {
            r.d(e, {
                V1: function() {
                    return n
                }
            });

            function n(t, e, r) {
                if (void 0 === r && (r = Error), !t) throw new r(e)
            }
        },
        54819: function(t, e, r) {
            function n(t, e) {
                var r = e && e.cache ? e.cache : c,
                    n = e && e.serializer ? e.serializer : l;
                return (e && e.strategy ? e.strategy : s)(t, {
                    cache: r,
                    serializer: n
                })
            }

            function i(t, e, r, n) {
                var i, o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n),
                    a = e.get(o);
                return void 0 === a && (a = t.call(this, n), e.set(o, a)), a
            }

            function o(t, e, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    o = e.get(i);
                return void 0 === o && (o = t.apply(this, n), e.set(i, o)), o
            }

            function a(t, e, r, n, i) {
                return r.bind(e, t, n, i)
            }

            function s(t, e) {
                return a(t, this, 1 === t.length ? i : o, e.cache.create(), e.serializer)
            }
            r.d(e, {
                A: function() {
                    return n
                },
                W: function() {
                    return h
                }
            });
            var l = function() {
                return JSON.stringify(arguments)
            };

            function u() {
                this.cache = Object.create(null)
            }
            u.prototype.get = function(t) {
                return this.cache[t]
            }, u.prototype.set = function(t, e) {
                this.cache[t] = e
            };
            var c = {
                    create: function() {
                        return new u
                    }
                },
                h = {
                    variadic: function(t, e) {
                        return a(t, this, o, e.cache.create(), e.serializer)
                    },
                    monadic: function(t, e) {
                        return a(t, this, i, e.cache.create(), e.serializer)
                    }
                }
        },
        78786: function(t, e, r) {
            r.d(e, {
                ZE: function() {
                    return i
                },
                Im: function() {
                    return l
                },
                tv: function() {
                    return c
                },
                Tu: function() {
                    return b
                },
                eW: function() {
                    return s
                },
                oF: function() {
                    return u
                },
                N1: function() {
                    return g
                },
                N6: function() {
                    return p
                },
                jA: function() {
                    return m
                },
                Jp: function() {
                    return f
                },
                xm: function() {
                    return d
                },
                Qh: function() {
                    return h
                },
                qg: function() {
                    return ot
                }
            });
            var n, i, o, a = r(15215);

            function s(t) {
                return t.type === i.literal
            }

            function l(t) {
                return t.type === i.argument
            }

            function u(t) {
                return t.type === i.number
            }

            function c(t) {
                return t.type === i.date
            }

            function h(t) {
                return t.type === i.time
            }

            function f(t) {
                return t.type === i.select
            }

            function p(t) {
                return t.type === i.plural
            }

            function m(t) {
                return t.type === i.pound
            }

            function d(t) {
                return t.type === i.tag
            }

            function g(t) {
                return !(!t || "object" != typeof t || t.type !== o.number)
            }

            function b(t) {
                return !(!t || "object" != typeof t || t.type !== o.dateTime)
            }! function(t) {
                t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(n || (n = {})),
            function(t) {
                t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag"
            }(i || (i = {})),
            function(t) {
                t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime"
            }(o || (o = {}));
            var E = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                y = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function v(t) {
                var e = {};
                return t.replace(y, (function(t) {
                    var r = t.length;
                    switch (t[0]) {
                        case "G":
                            e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            e.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            e.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            e.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            e.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            e.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            e.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            e.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            e.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), e
            }
            var T = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
            var _ = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                A = /^(@+)?(\+|#+)?[rs]?$/g,
                B = /(\*)(0+)|(#+)(0+)|(0+)/g,
                C = /^(0+)$/;

            function H(t) {
                var e = {};
                return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(A, (function(t, r, n) {
                    return "string" != typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : "+" === n ? e.minimumSignificantDigits = r.length : "#" === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                })), e
            }

            function S(t) {
                switch (t) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function P(t) {
                var e;
                if ("E" === t[0] && "E" === t[1] ? (e = {
                        notation: "engineering"
                    }, t = t.slice(2)) : "E" === t[0] && (e = {
                        notation: "scientific"
                    }, t = t.slice(1)), e) {
                    var r = t.slice(0, 2);
                    if ("+!" === r ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === r && (e.signDisplay = "exceptZero", t = t.slice(2)), !C.test(t)) throw new Error("Malformed concise eng/scientific notation");
                    e.minimumIntegerDigits = t.length
                }
                return e
            }

            function R(t) {
                var e = S(t);
                return e || {}
            }

            function I(t) {
                for (var e = {}, r = 0, n = t; r < n.length; r++) {
                    var i = n[r];
                    switch (i.stem) {
                        case "percent":
                        case "%":
                            e.style = "percent";
                            continue;
                        case "%x100":
                            e.style = "percent", e.scale = 100;
                            continue;
                        case "currency":
                            e.style = "currency", e.currency = i.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            e.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            e.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            e.style = "unit", e.unit = i.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            e.notation = "compact", e.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            e.notation = "compact", e.compactDisplay = "long";
                            continue;
                        case "scientific":
                            e = (0, a.Cl)((0, a.Cl)((0, a.Cl)({}, e), {
                                notation: "scientific"
                            }), i.options.reduce((function(t, e) {
                                return (0, a.Cl)((0, a.Cl)({}, t), R(e))
                            }), {}));
                            continue;
                        case "engineering":
                            e = (0, a.Cl)((0, a.Cl)((0, a.Cl)({}, e), {
                                notation: "engineering"
                            }), i.options.reduce((function(t, e) {
                                return (0, a.Cl)((0, a.Cl)({}, t), R(e))
                            }), {}));
                            continue;
                        case "notation-simple":
                            e.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            e.currencyDisplay = "code", e.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            e.currencyDisplay = "name", e.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            e.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            e.scale = parseFloat(i.options[0]);
                            continue;
                        case "integer-width":
                            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            i.options[0].replace(B, (function(t, r, n, i, o, a) {
                                if (r) e.minimumIntegerDigits = n.length;
                                else {
                                    if (i && o) throw new Error("We currently do not support maximum integer digits");
                                    if (a) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (C.test(i.stem)) e.minimumIntegerDigits = i.stem.length;
                    else if (_.test(i.stem)) {
                        if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        i.stem.replace(_, (function(t, r, n, i, o, a) {
                            return "*" === n ? e.minimumFractionDigits = r.length : i && "#" === i[0] ? e.maximumFractionDigits = i.length : o && a ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + a.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), ""
                        }));
                        var o = i.options[0];
                        "w" === o ? e = (0, a.Cl)((0, a.Cl)({}, e), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : o && (e = (0, a.Cl)((0, a.Cl)({}, e), H(o)))
                    } else if (A.test(i.stem)) e = (0, a.Cl)((0, a.Cl)({}, e), H(i.stem));
                    else {
                        var s = S(i.stem);
                        s && (e = (0, a.Cl)((0, a.Cl)({}, e), s));
                        var l = P(i.stem);
                        l && (e = (0, a.Cl)((0, a.Cl)({}, e), l))
                    }
                }
                return e
            }
            var O, N = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function L(t) {
                var e = t.hourCycle;
                if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, n = t.language;
                return "root" !== n && (r = t.maximize().region), (N[r || ""] || N[n || ""] || N["".concat(n, "-001")] || N["001"])[0]
            }
            var F = new RegExp("^".concat(E.source, "*")),
                M = new RegExp("".concat(E.source, "*$"));

            function w(t, e) {
                return {
                    start: t,
                    end: e
                }
            }
            var D = !!String.prototype.startsWith,
                G = !!String.fromCodePoint,
                U = !!Object.fromEntries,
                k = !!String.prototype.codePointAt,
                x = !!String.prototype.trimStart,
                j = !!String.prototype.trimEnd,
                V = !!Number.isSafeInteger ? Number.isSafeInteger : function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
                },
                X = !0;
            try {
                X = "a" === (null === (O = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === O ? void 0 : O[0])
            } catch (at) {
                X = !1
            }
            var K, Z = D ? function(t, e, r) {
                    return t.startsWith(e, r)
                } : function(t, e, r) {
                    return t.slice(r, r + e.length) === e
                },
                W = G ? String.fromCodePoint : function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var r, n = "", i = t.length, o = 0; i > o;) {
                        if ((r = t[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
                        n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
                    }
                    return n
                },
                z = U ? Object.fromEntries : function(t) {
                    for (var e = {}, r = 0, n = t; r < n.length; r++) {
                        var i = n[r],
                            o = i[0],
                            a = i[1];
                        e[o] = a
                    }
                    return e
                },
                Y = k ? function(t, e) {
                    return t.codePointAt(e)
                } : function(t, e) {
                    var r = t.length;
                    if (!(e < 0 || e >= r)) {
                        var n, i = t.charCodeAt(e);
                        return i < 55296 || i > 56319 || e + 1 === r || (n = t.charCodeAt(e + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
                    }
                },
                J = x ? function(t) {
                    return t.trimStart()
                } : function(t) {
                    return t.replace(F, "")
                },
                q = j ? function(t) {
                    return t.trimEnd()
                } : function(t) {
                    return t.replace(M, "")
                };

            function Q(t, e) {
                return new RegExp(t, e)
            }
            if (X) {
                var $ = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                K = function(t, e) {
                    var r;
                    return $.lastIndex = e, null !== (r = $.exec(t)[1]) && void 0 !== r ? r : ""
                }
            } else K = function(t, e) {
                for (var r = [];;) {
                    var n = Y(t, e);
                    if (void 0 === n || rt(n) || nt(n)) break;
                    r.push(n), e += n >= 65536 ? 2 : 1
                }
                return W.apply(void 0, r)
            };
            var tt = function() {
                function t(t, e) {
                    void 0 === e && (e = {}), this.message = t, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
                }
                return t.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, t.prototype.parseMessage = function(t, e, r) {
                    for (var o = []; !this.isEOF();) {
                        var a = this.char();
                        if (123 === a) {
                            if ((s = this.parseArgument(t, r)).err) return s;
                            o.push(s.val)
                        } else {
                            if (125 === a && t > 0) break;
                            if (35 !== a || "plural" !== e && "selectordinal" !== e) {
                                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(n.UNMATCHED_CLOSING_TAG, w(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === a && !this.ignoreTag && et(this.peek() || 0)) {
                                    if ((s = this.parseTag(t, e)).err) return s;
                                    o.push(s.val)
                                } else {
                                    var s;
                                    if ((s = this.parseLiteral(t, e)).err) return s;
                                    o.push(s.val)
                                }
                            } else {
                                var l = this.clonePosition();
                                this.bump(), o.push({
                                    type: i.pound,
                                    location: w(l, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: o,
                        err: null
                    }
                }, t.prototype.parseTag = function(t, e) {
                    var r = this.clonePosition();
                    this.bump();
                    var o = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: i.literal,
                            value: "<".concat(o, "/>"),
                            location: w(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var a = this.parseMessage(t + 1, e, !0);
                        if (a.err) return a;
                        var s = a.val,
                            l = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !et(this.char())) return this.error(n.INVALID_TAG, w(l, this.clonePosition()));
                            var u = this.clonePosition();
                            return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, w(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: i.tag,
                                    value: o,
                                    children: s,
                                    location: w(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(n.INVALID_TAG, w(l, this.clonePosition())))
                        }
                        return this.error(n.UNCLOSED_TAG, w(r, this.clonePosition()))
                    }
                    return this.error(n.INVALID_TAG, w(r, this.clonePosition()))
                }, t.prototype.parseTagName = function() {
                    var t, e = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (t = this.char()) || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039);) this.bump();
                    return this.message.slice(e, this.offset())
                }, t.prototype.parseLiteral = function(t, e) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var o = this.tryParseQuote(e);
                        if (o) n += o;
                        else {
                            var a = this.tryParseUnquoted(t, e);
                            if (a) n += a;
                            else {
                                var s = this.tryParseLeftAngleBracket();
                                if (!s) break;
                                n += s
                            }
                        }
                    }
                    var l = w(r, this.clonePosition());
                    return {
                        val: {
                            type: i.literal,
                            value: n,
                            location: l
                        },
                        err: null
                    }
                }, t.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (et(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
                    var t
                }, t.prototype.tryParseQuote = function(t) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === t || "selectordinal" === t) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var e = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            e.push(39), this.bump()
                        } else e.push(r);
                        this.bump()
                    }
                    return W.apply(void 0, e)
                }, t.prototype.tryParseUnquoted = function(t, e) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === e || "selectordinal" === e) || 125 === r && t > 0 ? null : (this.bump(), W(r))
                }, t.prototype.parseArgument = function(t, e) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, w(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, w(r, this.clonePosition()));
                    var o = this.parseIdentifierIfPossible().value;
                    if (!o) return this.error(n.MALFORMED_ARGUMENT, w(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, w(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: i.argument,
                                    value: o,
                                    location: w(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, w(r, this.clonePosition())) : this.parseArgumentOptions(t, e, o, r);
                        default:
                            return this.error(n.MALFORMED_ARGUMENT, w(r, this.clonePosition()))
                    }
                }, t.prototype.parseIdentifierIfPossible = function() {
                    var t = this.clonePosition(),
                        e = this.offset(),
                        r = K(this.message, e),
                        n = e + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: w(t, this.clonePosition())
                    }
                }, t.prototype.parseArgumentOptions = function(t, e, r, s) {
                    var l, u = this.clonePosition(),
                        c = this.parseIdentifierIfPossible().value,
                        h = this.clonePosition();
                    switch (c) {
                        case "":
                            return this.error(n.EXPECT_ARGUMENT_TYPE, w(u, h));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var f = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var p = this.clonePosition();
                                if ((_ = this.parseSimpleArgStyleIfPossible()).err) return _;
                                if (0 === (b = q(_.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, w(this.clonePosition(), this.clonePosition()));
                                f = {
                                    style: b,
                                    styleLocation: w(p, this.clonePosition())
                                }
                            }
                            if ((A = this.tryParseArgumentClose(s)).err) return A;
                            var m = w(s, this.clonePosition());
                            if (f && Z(null == f ? void 0 : f.style, "::", 0)) {
                                var d = J(f.style.slice(2));
                                if ("number" === c) return (_ = this.parseNumberSkeletonFromString(d, f.styleLocation)).err ? _ : {
                                    val: {
                                        type: i.number,
                                        value: r,
                                        location: m,
                                        style: _.val
                                    },
                                    err: null
                                };
                                if (0 === d.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, m);
                                var g = d;
                                this.locale && (g = function(t, e) {
                                    for (var r = "", n = 0; n < t.length; n++) {
                                        var i = t.charAt(n);
                                        if ("j" === i) {
                                            for (var o = 0; n + 1 < t.length && t.charAt(n + 1) === i;) o++, n++;
                                            var a = 1 + (1 & o),
                                                s = o < 2 ? 1 : 3 + (o >> 1),
                                                l = L(e);
                                            for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                                            for (; a-- > 0;) r = l + r
                                        } else r += "J" === i ? "H" : i
                                    }
                                    return r
                                }(d, this.locale));
                                var b = {
                                    type: o.dateTime,
                                    pattern: g,
                                    location: f.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? v(g) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === c ? i.date : i.time,
                                        value: r,
                                        location: m,
                                        style: b
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === c ? i.number : "date" === c ? i.date : i.time,
                                    value: r,
                                    location: m,
                                    style: null !== (l = null == f ? void 0 : f.style) && void 0 !== l ? l : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var E = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, w(E, (0, a.Cl)({}, E)));
                            this.bumpSpace();
                            var y = this.parseIdentifierIfPossible(),
                                T = 0;
                            if ("select" !== c && "offset" === y.value) {
                                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, w(this.clonePosition(), this.clonePosition()));
                                var _;
                                if (this.bumpSpace(), (_ = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return _;
                                this.bumpSpace(), y = this.parseIdentifierIfPossible(), T = _.val
                            }
                            var A, B = this.tryParsePluralOrSelectOptions(t, c, e, y);
                            if (B.err) return B;
                            if ((A = this.tryParseArgumentClose(s)).err) return A;
                            var C = w(s, this.clonePosition());
                            return "select" === c ? {
                                val: {
                                    type: i.select,
                                    value: r,
                                    options: z(B.val),
                                    location: C
                                },
                                err: null
                            } : {
                                val: {
                                    type: i.plural,
                                    value: r,
                                    options: z(B.val),
                                    offset: T,
                                    pluralType: "plural" === c ? "cardinal" : "ordinal",
                                    location: C
                                },
                                err: null
                            };
                        default:
                            return this.error(n.INVALID_ARGUMENT_TYPE, w(u, h))
                    }
                }, t.prototype.tryParseArgumentClose = function(t) {
                    return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, w(t, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, t.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var t = 0, e = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var r = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, w(r, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                t += 1, this.bump();
                                break;
                            case 125:
                                if (!(t > 0)) return {
                                    val: this.message.slice(e.offset, this.offset()),
                                    err: null
                                };
                                t -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(e.offset, this.offset()),
                        err: null
                    }
                }, t.prototype.parseNumberSkeletonFromString = function(t, e) {
                    var r = [];
                    try {
                        r = function(t) {
                            if (0 === t.length) throw new Error("Number skeleton cannot be empty");
                            for (var e = [], r = 0, n = t.split(T).filter((function(t) {
                                    return t.length > 0
                                })); r < n.length; r++) {
                                var i = n[r].split("/");
                                if (0 === i.length) throw new Error("Invalid number skeleton");
                                for (var o = i[0], a = i.slice(1), s = 0, l = a; s < l.length; s++)
                                    if (0 === l[s].length) throw new Error("Invalid number skeleton");
                                e.push({
                                    stem: o,
                                    options: a
                                })
                            }
                            return e
                        }(t)
                    } catch (i) {
                        return this.error(n.INVALID_NUMBER_SKELETON, e)
                    }
                    return {
                        val: {
                            type: o.number,
                            tokens: r,
                            location: e,
                            parsedOptions: this.shouldParseSkeletons ? I(r) : {}
                        },
                        err: null
                    }
                }, t.prototype.tryParsePluralOrSelectOptions = function(t, e, r, i) {
                    for (var o, a = !1, s = [], l = new Set, u = i.value, c = i.location;;) {
                        if (0 === u.length) {
                            var h = this.clonePosition();
                            if ("select" === e || !this.bumpIf("=")) break;
                            var f = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (f.err) return f;
                            c = w(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset())
                        }
                        if (l.has(u)) return this.error("select" === e ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (a = !0), this.bumpSpace();
                        var p = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === e ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, w(this.clonePosition(), this.clonePosition()));
                        var m = this.parseMessage(t + 1, e, r);
                        if (m.err) return m;
                        var d = this.tryParseArgumentClose(p);
                        if (d.err) return d;
                        s.push([u, {
                            value: m.val,
                            location: w(p, this.clonePosition())
                        }]), l.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, c = o.location
                    }
                    return 0 === s.length ? this.error("select" === e ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, w(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(n.MISSING_OTHER_CLAUSE, w(this.clonePosition(), this.clonePosition())) : {
                        val: s,
                        err: null
                    }
                }, t.prototype.tryParseDecimalInteger = function(t, e) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var i = !1, o = 0; !this.isEOF();) {
                        var a = this.char();
                        if (!(a >= 48 && a <= 57)) break;
                        i = !0, o = 10 * o + (a - 48), this.bump()
                    }
                    var s = w(n, this.clonePosition());
                    return i ? V(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(e, s) : this.error(t, s)
                }, t.prototype.offset = function() {
                    return this.position.offset
                }, t.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, t.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, t.prototype.char = function() {
                    var t = this.position.offset;
                    if (t >= this.message.length) throw Error("out of bound");
                    var e = Y(this.message, t);
                    if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                    return e
                }, t.prototype.error = function(t, e) {
                    return {
                        val: null,
                        err: {
                            kind: t,
                            message: this.message,
                            location: e
                        }
                    }
                }, t.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var t = this.char();
                        10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
                    }
                }, t.prototype.bumpIf = function(t) {
                    if (Z(this.message, t, this.offset())) {
                        for (var e = 0; e < t.length; e++) this.bump();
                        return !0
                    }
                    return !1
                }, t.prototype.bumpUntil = function(t) {
                    var e = this.offset(),
                        r = this.message.indexOf(t, e);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, t.prototype.bumpTo = function(t) {
                    if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (t = Math.min(t, this.message.length);;) {
                        var e = this.offset();
                        if (e === t) break;
                        if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, t.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && rt(this.char());) this.bump()
                }, t.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var t = this.char(),
                        e = this.offset(),
                        r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
                    return null != r ? r : null
                }, t
            }();

            function et(t) {
                return t >= 97 && t <= 122 || t >= 65 && t <= 90
            }

            function rt(t) {
                return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t
            }

            function nt(t) {
                return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094
            }

            function it(t) {
                t.forEach((function(t) {
                    if (delete t.location, f(t) || p(t))
                        for (var e in t.options) delete t.options[e].location, it(t.options[e].value);
                    else u(t) && g(t.style) || (c(t) || h(t)) && b(t.style) ? delete t.style.location : d(t) && it(t.children)
                }))
            }

            function ot(t, e) {
                void 0 === e && (e = {}), e = (0, a.Cl)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, e);
                var r = new tt(t, e).parse();
                if (r.err) {
                    var i = SyntaxError(n[r.err.kind]);
                    throw i.location = r.err.location, i.originalMessage = r.err.message, i
                }
                return (null == e ? void 0 : e.captureLocation) || it(r.val), r.val
            }
        },
        89160: function(t, e, r) {
            r.d(e, {
                Ar: function() {
                    return o
                },
                Ho: function() {
                    return c
                },
                OC: function() {
                    return a
                },
                hr: function() {
                    return l
                },
                lo: function() {
                    return n
                },
                pg: function() {
                    return u
                },
                sb: function() {
                    return h
                },
                uo: function() {
                    return s
                }
            });
            var n, i = r(15215);
            ! function(t) {
                t.FORMAT_ERROR = "FORMAT_ERROR", t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", t.INVALID_CONFIG = "INVALID_CONFIG", t.MISSING_DATA = "MISSING_DATA", t.MISSING_TRANSLATION = "MISSING_TRANSLATION"
            }(n || (n = {}));
            var o = function(t) {
                    function e(r, n, i) {
                        var o = this,
                            a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
                        return (o = t.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, e), o
                    }
                    return (0, i.C6)(e, t), e
                }(Error),
                a = function(t) {
                    function e(e, r) {
                        return t.call(this, n.UNSUPPORTED_FORMATTER, e, r) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                s = function(t) {
                    function e(e, r) {
                        return t.call(this, n.INVALID_CONFIG, e, r) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                l = function(t) {
                    function e(e, r) {
                        return t.call(this, n.MISSING_DATA, e, r) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                u = function(t) {
                    function e(e, r, i) {
                        return t.call(this, n.FORMAT_ERROR, "".concat(e, "\nLocale: ").concat(r, "\n"), i) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                c = function(t) {
                    function e(e, r, n, i) {
                        var o = t.call(this, "".concat(e, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, i) || this;
                        return o.descriptor = n, o
                    }
                    return (0, i.C6)(e, t), e
                }(u),
                h = function(t) {
                    function e(e, r) {
                        var i = t.call(this, n.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(r, '", using ').concat(e.defaultMessage ? "default message (".concat("string" == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map((function(t) {
                            var e;
                            return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t)
                        })).join(), ")") : "id", " as fallback.")) || this;
                        return i.descriptor = e, i
                    }
                    return (0, i.C6)(e, t), e
                }(o)
        },
        87683: function(t, e, r) {
            r.d(e, {
                F3: function() {
                    return f
                },
                GT: function() {
                    return h
                },
                J9: function() {
                    return s
                },
                JF: function() {
                    return l
                },
                MT: function() {
                    return u
                }
            });
            var n = r(15215),
                i = r(62587),
                o = r(54819),
                a = r(89160);

            function s(t, e, r) {
                return void 0 === r && (r = {}), e.reduce((function(e, n) {
                    return n in t ? e[n] = t[n] : n in r && (e[n] = r[n]), e
                }), {})
            }
            var l = {
                formats: {},
                messages: {},
                timeZone: void 0,
                defaultLocale: "en",
                defaultFormats: {},
                fallbackOnEmptyString: !0,
                onError: function(t) {
                    0
                },
                onWarn: function(t) {
                    0
                }
            };

            function u() {
                return {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                }
            }

            function c(t) {
                return {
                    create: function() {
                        return {
                            get: function(e) {
                                return t[e]
                            },
                            set: function(e, r) {
                                t[e] = r
                            }
                        }
                    }
                }
            }

            function h(t) {
                void 0 === t && (t = {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                });
                var e = Intl.RelativeTimeFormat,
                    r = Intl.ListFormat,
                    a = Intl.DisplayNames,
                    s = (0, o.A)((function() {
                        for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                    }), {
                        cache: c(t.dateTime),
                        strategy: o.W.variadic
                    }),
                    l = (0, o.A)((function() {
                        for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        return new((t = Intl.NumberFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                    }), {
                        cache: c(t.number),
                        strategy: o.W.variadic
                    }),
                    u = (0, o.A)((function() {
                        for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        return new((t = Intl.PluralRules).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                    }), {
                        cache: c(t.pluralRules),
                        strategy: o.W.variadic
                    });
                return {
                    getDateTimeFormat: s,
                    getNumberFormat: l,
                    getMessageFormat: (0, o.A)((function(t, e, r, o) {
                        return new i.S(t, e, r, (0, n.Cl)({
                            formatters: {
                                getNumberFormat: l,
                                getDateTimeFormat: s,
                                getPluralRules: u
                            }
                        }, o || {}))
                    }), {
                        cache: c(t.message),
                        strategy: o.W.variadic
                    }),
                    getRelativeTimeFormat: (0, o.A)((function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        return new(e.bind.apply(e, (0, n.fX)([void 0], t, !1)))
                    }), {
                        cache: c(t.relativeTime),
                        strategy: o.W.variadic
                    }),
                    getPluralRules: u,
                    getListFormat: (0, o.A)((function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return new(r.bind.apply(r, (0, n.fX)([void 0], t, !1)))
                    }), {
                        cache: c(t.list),
                        strategy: o.W.variadic
                    }),
                    getDisplayNames: (0, o.A)((function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return new(a.bind.apply(a, (0, n.fX)([void 0], t, !1)))
                    }), {
                        cache: c(t.displayNames),
                        strategy: o.W.variadic
                    })
                }
            }

            function f(t, e, r, n) {
                var i, o = t && t[e];
                if (o && (i = o[r]), i) return i;
                n(new a.OC("No ".concat(e, " format named: ").concat(r)))
            }
        },
        62587: function(t, e, r) {
            r.d(e, {
                S: function() {
                    return u
                }
            });
            var n = r(15215),
                i = r(78786),
                o = r(54819),
                a = r(31071);

            function s(t, e) {
                return e ? Object.keys(t).reduce((function(r, i) {
                    var o, a;
                    return r[i] = (o = t[i], (a = e[i]) ? (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, o || {}), a || {}), Object.keys(o).reduce((function(t, e) {
                        return t[e] = (0, n.Cl)((0, n.Cl)({}, o[e]), a[e] || {}), t
                    }), {})) : o), r
                }), (0, n.Cl)({}, t)) : t
            }

            function l(t) {
                return {
                    create: function() {
                        return {
                            get: function(e) {
                                return t[e]
                            },
                            set: function(e, r) {
                                t[e] = r
                            }
                        }
                    }
                }
            }
            var u = function() {
                function t(e, r, i, u) {
                    void 0 === r && (r = t.defaultLocale);
                    var c, h = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(t) {
                            var e = h.formatToParts(t);
                            if (1 === e.length) return e[0].value;
                            var r = e.reduce((function(t, e) {
                                return t.length && e.type === a.TT.literal && "string" == typeof t[t.length - 1] ? t[t.length - 1] += e.value : t.push(e.value), t
                            }), []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(t) {
                            return (0, a.hN)(h.ast, h.locales, h.formatters, h.formats, t, void 0, h.message)
                        }, this.resolvedOptions = function() {
                            var t;
                            return {
                                locale: (null === (t = h.resolvedLocale) || void 0 === t ? void 0 : t.toString()) || Intl.NumberFormat.supportedLocalesOf(h.locales)[0]
                            }
                        }, this.getAst = function() {
                            return h.ast
                        }, this.locales = r, this.resolvedLocale = t.resolveLocale(r), "string" == typeof e) {
                        if (this.message = e, !t.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        var f = u || {},
                            p = (f.formatters, (0, n.Tt)(f, ["formatters"]));
                        this.ast = t.__parse(e, (0, n.Cl)((0, n.Cl)({}, p), {
                            locale: this.resolvedLocale
                        }))
                    } else this.ast = e;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    this.formats = s(t.formats, i), this.formatters = u && u.formatters || (void 0 === (c = this.formatterCache) && (c = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: (0, o.A)((function() {
                            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return new((t = Intl.NumberFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                        }), {
                            cache: l(c.number),
                            strategy: o.W.variadic
                        }),
                        getDateTimeFormat: (0, o.A)((function() {
                            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                        }), {
                            cache: l(c.dateTime),
                            strategy: o.W.variadic
                        }),
                        getPluralRules: (0, o.A)((function() {
                            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return new((t = Intl.PluralRules).bind.apply(t, (0, n.fX)([void 0], e, !1)))
                        }), {
                            cache: l(c.pluralRules),
                            strategy: o.W.variadic
                        })
                    })
                }
                return Object.defineProperty(t, "defaultLocale", {
                    get: function() {
                        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), t.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.memoizedDefaultLocale = null, t.resolveLocale = function(t) {
                    if (void 0 !== Intl.Locale) {
                        var e = Intl.NumberFormat.supportedLocalesOf(t);
                        return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale("string" == typeof t ? t : t[0])
                    }
                }, t.__parse = i.qg, t.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, t
            }()
        },
        11732: function(t, e, r) {
            r.d(e, {
                $x: function() {
                    return a
                },
                Ei: function() {
                    return l
                },
                IF: function() {
                    return o
                },
                O4: function() {
                    return n
                },
                Zo: function() {
                    return s
                }
            });
            var n, i = r(15215);
            ! function(t) {
                t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API"
            }(n || (n = {}));
            var o = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e) || this;
                        return i.code = r, i.originalMessage = n, i
                    }
                    return (0, i.C6)(e, t), e.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, e
                }(Error),
                a = function(t) {
                    function e(e, r, i, o) {
                        return t.call(this, 'Invalid values for "'.concat(e, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), n.INVALID_VALUE, o) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                s = function(t) {
                    function e(e, r, i) {
                        return t.call(this, 'Value for "'.concat(e, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o),
                l = function(t) {
                    function e(e, r) {
                        return t.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                    }
                    return (0, i.C6)(e, t), e
                }(o)
        },
        31071: function(t, e, r) {
            r.d(e, {
                RK: function() {
                    return a
                },
                TT: function() {
                    return n
                },
                hN: function() {
                    return s
                }
            });
            var n, i = r(78786),
                o = r(11732);

            function a(t) {
                return "function" == typeof t
            }

            function s(t, e, r, l, u, c, h) {
                if (1 === t.length && (0, i.eW)(t[0])) return [{
                    type: n.literal,
                    value: t[0].value
                }];
                for (var f = [], p = 0, m = t; p < m.length; p++) {
                    var d = m[p];
                    if ((0, i.eW)(d)) f.push({
                        type: n.literal,
                        value: d.value
                    });
                    else if ((0, i.jA)(d)) "number" == typeof c && f.push({
                        type: n.literal,
                        value: r.getNumberFormat(e).format(c)
                    });
                    else {
                        var g = d.value;
                        if (!u || !(g in u)) throw new o.Ei(g, h);
                        var b = u[g];
                        if ((0, i.Im)(d)) b && "string" != typeof b && "number" != typeof b || (b = "string" == typeof b || "number" == typeof b ? String(b) : ""), f.push({
                            type: "string" == typeof b ? n.literal : n.object,
                            value: b
                        });
                        else if ((0, i.tv)(d)) {
                            var E = "string" == typeof d.style ? l.date[d.style] : (0, i.Tu)(d.style) ? d.style.parsedOptions : void 0;
                            f.push({
                                type: n.literal,
                                value: r.getDateTimeFormat(e, E).format(b)
                            })
                        } else if ((0, i.Qh)(d)) {
                            E = "string" == typeof d.style ? l.time[d.style] : (0, i.Tu)(d.style) ? d.style.parsedOptions : l.time.medium;
                            f.push({
                                type: n.literal,
                                value: r.getDateTimeFormat(e, E).format(b)
                            })
                        } else if ((0, i.oF)(d)) {
                            (E = "string" == typeof d.style ? l.number[d.style] : (0, i.N1)(d.style) ? d.style.parsedOptions : void 0) && E.scale && (b *= E.scale || 1), f.push({
                                type: n.literal,
                                value: r.getNumberFormat(e, E).format(b)
                            })
                        } else {
                            if ((0, i.xm)(d)) {
                                var y = d.children,
                                    v = d.value,
                                    T = u[v];
                                if (!a(T)) throw new o.Zo(v, "function", h);
                                var _ = T(s(y, e, r, l, u, c).map((function(t) {
                                    return t.value
                                })));
                                Array.isArray(_) || (_ = [_]), f.push.apply(f, _.map((function(t) {
                                    return {
                                        type: "string" == typeof t ? n.literal : n.object,
                                        value: t
                                    }
                                })))
                            }
                            if ((0, i.Jp)(d)) {
                                if (!(A = d.options[b] || d.options.other)) throw new o.$x(d.value, b, Object.keys(d.options), h);
                                f.push.apply(f, s(A.value, e, r, l, u))
                            } else if ((0, i.N6)(d)) {
                                var A;
                                if (!(A = d.options["=".concat(b)])) {
                                    if (!Intl.PluralRules) throw new o.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', o.O4.MISSING_INTL_API, h);
                                    var B = r.getPluralRules(e, {
                                        type: d.pluralType
                                    }).select(b - (d.offset || 0));
                                    A = d.options[B] || d.options.other
                                }
                                if (!A) throw new o.$x(d.value, b, Object.keys(d.options), h);
                                f.push.apply(f, s(A.value, e, r, l, u, b - (d.offset || 0)))
                            } else;
                        }
                    }
                }
                return function(t) {
                    return t.length < 2 ? t : t.reduce((function(t, e) {
                        var r = t[t.length - 1];
                        return r && r.type === n.literal && e.type === n.literal ? r.value += e.value : t.push(e), t
                    }), [])
                }(f)
            }! function(t) {
                t[t.literal = 0] = "literal", t[t.object = 1] = "object"
            }(n || (n = {}))
        },
        38798: function(t, e, r) {
            r.d(e, {
                Ay: function() {
                    return f
                },
                Kq: function() {
                    return c
                },
                ob: function() {
                    return h
                }
            });
            var n = r(15215),
                i = r(96540),
                o = r(4146),
                a = r.n(o),
                s = r(24184);
            var l = i.createContext(null),
                u = l.Consumer,
                c = l.Provider,
                h = l;

            function f(t, e) {
                var r, o = e || {},
                    l = o.intlPropName,
                    c = void 0 === l ? "intl" : l,
                    h = o.forwardRef,
                    f = void 0 !== h && h,
                    p = o.enforceContext,
                    m = void 0 === p || p,
                    d = function(e) {
                        return i.createElement(u, null, (function(r) {
                            var o;
                            m && (0, s.HM)(r);
                            var a = ((o = {})[c] = r, o);
                            return i.createElement(t, (0, n.Cl)({}, e, a, {
                                ref: f ? e.forwardedRef : null
                            }))
                        }))
                    };
                return d.displayName = "injectIntl(".concat((r = t).displayName || r.name || "Component", ")"), d.WrappedComponent = t, f ? a()(i.forwardRef((function(t, e) {
                    return i.createElement(d, (0, n.Cl)({}, t, {
                        forwardedRef: e
                    }))
                })), t) : a()(d, t)
            }
        },
        5463: function(t, e, r) {
            r.d(e, {
                E: function() {
                    return V
                },
                A: function() {
                    return K
                }
            });
            var n = r(15215),
                i = r(96540),
                o = r(38798),
                a = r(24184),
                s = r(33672),
                l = r(62587),
                u = r(89160),
                c = r(78786);

            function h(t, e) {
                return Object.keys(t).reduce((function(r, i) {
                    return r[i] = (0, n.Cl)({
                        timeZone: e
                    }, t[i]), r
                }), {})
            }

            function f(t, e) {
                return Object.keys((0, n.Cl)((0, n.Cl)({}, t), e)).reduce((function(r, i) {
                    return r[i] = (0, n.Cl)((0, n.Cl)({}, t[i] || {}), e[i] || {}), r
                }), {})
            }

            function p(t, e) {
                if (!e) return t;
                var r = l.S.formats;
                return (0, n.Cl)((0, n.Cl)((0, n.Cl)({}, r), t), {
                    date: f(h(r.date, e), h(t.date || {}, e)),
                    time: f(h(r.time, e), h(t.time || {}, e))
                })
            }
            var m = function(t, e, r, i, o) {
                    var a = t.locale,
                        l = t.formats,
                        h = t.messages,
                        f = t.defaultLocale,
                        m = t.defaultFormats,
                        d = t.fallbackOnEmptyString,
                        g = t.onError,
                        b = t.timeZone,
                        E = t.defaultRichTextElements;
                    void 0 === r && (r = {
                        id: ""
                    });
                    var y = r.id,
                        v = r.defaultMessage;
                    (0, s.V1)(!!y, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
                    var T = String(y),
                        _ = h && Object.prototype.hasOwnProperty.call(h, T) && h[T];
                    if (Array.isArray(_) && 1 === _.length && _[0].type === c.ZE.literal) return _[0].value;
                    if (!i && _ && "string" == typeof _ && !E) return _.replace(/'\{(.*?)\}'/gi, "{$1}");
                    if (i = (0, n.Cl)((0, n.Cl)({}, E), i || {}), l = p(l, b), m = p(m, b), !_) {
                        if (!1 === d && "" === _) return _;
                        if ((!v || a && a.toLowerCase() !== f.toLowerCase()) && g(new u.sb(r, a)), v) try {
                            return e.getMessageFormat(v, f, m, o).format(i)
                        } catch (A) {
                            return g(new u.Ho('Error formatting default message for: "'.concat(T, '", rendering default message verbatim'), a, r, A)), "string" == typeof v ? v : T
                        }
                        return T
                    }
                    try {
                        return e.getMessageFormat(_, a, l, (0, n.Cl)({
                            formatters: e
                        }, o || {})).format(i)
                    } catch (A) {
                        g(new u.Ho('Error formatting message: "'.concat(T, '", using ').concat(v ? "default message" : "id", " as fallback."), a, r, A))
                    }
                    if (v) try {
                        return e.getMessageFormat(v, f, m, o).format(i)
                    } catch (A) {
                        g(new u.Ho('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), a, r, A))
                    }
                    return "string" == typeof _ ? _ : "string" == typeof v ? v : T
                },
                d = r(87683),
                g = ["style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

            function b(t, e, r) {
                var n = t.locale,
                    i = t.formats,
                    o = t.onError;
                void 0 === r && (r = {});
                var a = r.format,
                    s = a && (0, d.F3)(i, "number", a, o) || {};
                return e(n, (0, d.J9)(r, g, s))
            }

            function E(t, e, r, n) {
                void 0 === n && (n = {});
                try {
                    return b(t, e, n).format(r)
                } catch (i) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting number.", i))
                }
                return String(r)
            }

            function y(t, e, r, n) {
                void 0 === n && (n = {});
                try {
                    return b(t, e, n).formatToParts(r)
                } catch (i) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting number.", i))
                }
                return []
            }
            var v = r(11732),
                T = ["numeric", "style"];

            function _(t, e, r, n, i) {
                void 0 === i && (i = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new v.IF('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', v.O4.MISSING_INTL_API));
                try {
                    return function(t, e, r) {
                        var n = t.locale,
                            i = t.formats,
                            o = t.onError;
                        void 0 === r && (r = {});
                        var a = r.format,
                            s = !!a && (0, d.F3)(i, "relative", a, o) || {};
                        return e(n, (0, d.J9)(r, T, s))
                    }(t, e, i).format(r, n)
                } catch (o) {
                    t.onError(new u.pg("Error formatting relative time.", t.locale, o))
                }
                return String(r)
            }
            var A = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

            function B(t, e, r, i) {
                var o = t.locale,
                    a = t.formats,
                    s = t.onError,
                    l = t.timeZone;
                void 0 === i && (i = {});
                var u = i.format,
                    c = (0, n.Cl)((0, n.Cl)({}, l && {
                        timeZone: l
                    }), u && (0, d.F3)(a, e, u, s)),
                    h = (0, d.J9)(i, A, c);
                return "time" !== e || h.hour || h.minute || h.second || h.timeStyle || h.dateStyle || (h = (0, n.Cl)((0, n.Cl)({}, h), {
                    hour: "numeric",
                    minute: "numeric"
                })), r(o, h)
            }

            function C(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    o = r[1],
                    a = void 0 === o ? {} : o,
                    s = "string" == typeof i ? new Date(i || 0) : i;
                try {
                    return B(t, "date", e, a).format(s)
                } catch (l) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting date.", l))
                }
                return String(s)
            }

            function H(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    o = r[1],
                    a = void 0 === o ? {} : o,
                    s = "string" == typeof i ? new Date(i || 0) : i;
                try {
                    return B(t, "time", e, a).format(s)
                } catch (l) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting time.", l))
                }
                return String(s)
            }

            function S(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    o = r[1],
                    a = r[2],
                    s = void 0 === a ? {} : a,
                    l = t.timeZone,
                    c = t.locale,
                    h = t.onError,
                    f = (0, d.J9)(s, A, l ? {
                        timeZone: l
                    } : {});
                try {
                    return e(c, f).formatRange(i, o)
                } catch (p) {
                    h(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting date time range.", p))
                }
                return String(i)
            }

            function P(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    o = r[1],
                    a = void 0 === o ? {} : o,
                    s = "string" == typeof i ? new Date(i || 0) : i;
                try {
                    return B(t, "date", e, a).formatToParts(s)
                } catch (l) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting date.", l))
                }
                return []
            }

            function R(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    o = r[1],
                    a = void 0 === o ? {} : o,
                    s = "string" == typeof i ? new Date(i || 0) : i;
                try {
                    return B(t, "time", e, a).formatToParts(s)
                } catch (l) {
                    t.onError(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting time.", l))
                }
                return []
            }
            var I = ["type"];

            function O(t, e, r, n) {
                var i = t.locale,
                    o = t.onError;
                void 0 === n && (n = {}), Intl.PluralRules || o(new v.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', v.O4.MISSING_INTL_API));
                var a = (0, d.J9)(n, I);
                try {
                    return e(i, a).select(r)
                } catch (s) {
                    o(new u.pg("Error formatting plural.", i, s))
                }
                return "other"
            }
            var N = ["type", "style"],
                L = Date.now();

            function F(t, e, r, n) {
                void 0 === n && (n = {});
                var i = M(t, e, r, n).reduce((function(t, e) {
                    var r = e.value;
                    return "string" != typeof r ? t.push(r) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += r : t.push(r), t
                }), []);
                return 1 === i.length ? i[0] : 0 === i.length ? "" : i
            }

            function M(t, e, r, i) {
                var o = t.locale,
                    a = t.onError;
                void 0 === i && (i = {}), Intl.ListFormat || a(new v.IF('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', v.O4.MISSING_INTL_API));
                var s = (0, d.J9)(i, N);
                try {
                    var l = {},
                        c = r.map((function(t, e) {
                            if ("object" == typeof t) {
                                var r = function(t) {
                                    return "".concat(L, "_").concat(t, "_").concat(L)
                                }(e);
                                return l[r] = t, r
                            }
                            return String(t)
                        }));
                    return e(o, s).formatToParts(c).map((function(t) {
                        return "literal" === t.type ? t : (0, n.Cl)((0, n.Cl)({}, t), {
                            value: l[t.value] || t.value
                        })
                    }))
                } catch (h) {
                    a(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting list.", h))
                }
                return r
            }
            var w = ["style", "type", "fallback", "languageDisplay"];

            function D(t, e, r, n) {
                var i = t.locale,
                    o = t.onError;
                Intl.DisplayNames || o(new v.IF('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', v.O4.MISSING_INTL_API));
                var a = (0, d.J9)(n, w);
                try {
                    return e(i, a).of(r)
                } catch (s) {
                    o(new u.Ar(u.lo.FORMAT_ERROR, "Error formatting display name.", s))
                }
            }

            function G(t) {
                var e;
                t.onWarn && t.defaultRichTextElements && "string" == typeof((e = t.messages || {}) ? e[Object.keys(e)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
            }
            var U = r(31071);

            function k(t) {
                return {
                    locale: t.locale,
                    timeZone: t.timeZone,
                    fallbackOnEmptyString: t.fallbackOnEmptyString,
                    formats: t.formats,
                    textComponent: t.textComponent,
                    messages: t.messages,
                    defaultLocale: t.defaultLocale,
                    defaultFormats: t.defaultFormats,
                    onError: t.onError,
                    onWarn: t.onWarn,
                    wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
                    defaultRichTextElements: t.defaultRichTextElements
                }
            }

            function x(t) {
                return t ? Object.keys(t).reduce((function(e, r) {
                    var n = t[r];
                    return e[r] = (0, U.RK)(n) ? (0, a.yU)(n) : n, e
                }), {}) : t
            }
            var j = function(t, e, r, o) {
                    for (var a = [], s = 4; s < arguments.length; s++) a[s - 4] = arguments[s];
                    var l = x(o),
                        u = m.apply(void 0, (0, n.fX)([t, e, r, l], a, !1));
                    return Array.isArray(u) ? i.Children.toArray(u) : u
                },
                V = function(t, e) {
                    var r = t.defaultRichTextElements,
                        i = (0, n.Tt)(t, ["defaultRichTextElements"]),
                        o = x(r),
                        s = function(t, e) {
                            var r = (0, d.GT)(e),
                                i = (0, n.Cl)((0, n.Cl)({}, d.JF), t),
                                o = i.locale,
                                a = i.defaultLocale,
                                s = i.onError;
                            return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new u.hr('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new u.hr('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new u.uo('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), i.locale = i.defaultLocale || "en"), G(i), (0, n.Cl)((0, n.Cl)({}, i), {
                                formatters: r,
                                formatNumber: E.bind(null, i, r.getNumberFormat),
                                formatNumberToParts: y.bind(null, i, r.getNumberFormat),
                                formatRelativeTime: _.bind(null, i, r.getRelativeTimeFormat),
                                formatDate: C.bind(null, i, r.getDateTimeFormat),
                                formatDateToParts: P.bind(null, i, r.getDateTimeFormat),
                                formatTime: H.bind(null, i, r.getDateTimeFormat),
                                formatDateTimeRange: S.bind(null, i, r.getDateTimeFormat),
                                formatTimeToParts: R.bind(null, i, r.getDateTimeFormat),
                                formatPlural: O.bind(null, i, r.getPluralRules),
                                formatMessage: m.bind(null, i, r),
                                $t: m.bind(null, i, r),
                                formatList: F.bind(null, i, r.getListFormat),
                                formatListToParts: M.bind(null, i, r.getListFormat),
                                formatDisplayName: D.bind(null, i, r.getDisplayNames)
                            })
                        }((0, n.Cl)((0, n.Cl)((0, n.Cl)({}, a.JF), i), {
                            defaultRichTextElements: o
                        }), e),
                        l = {
                            locale: s.locale,
                            timeZone: s.timeZone,
                            fallbackOnEmptyString: s.fallbackOnEmptyString,
                            formats: s.formats,
                            defaultLocale: s.defaultLocale,
                            defaultFormats: s.defaultFormats,
                            messages: s.messages,
                            onError: s.onError,
                            defaultRichTextElements: o
                        };
                    return (0, n.Cl)((0, n.Cl)({}, s), {
                        formatMessage: j.bind(null, l, s.formatters),
                        $t: j.bind(null, l, s.formatters)
                    })
                },
                X = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.cache = (0, d.MT)(), e.state = {
                            cache: e.cache,
                            intl: V(k(e.props), e.cache),
                            prevConfig: k(e.props)
                        }, e
                    }
                    return (0, n.C6)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        var r = e.prevConfig,
                            n = e.cache,
                            i = k(t);
                        return (0, a.bN)(r, i) ? null : {
                            intl: V(i, n),
                            prevConfig: i
                        }
                    }, e.prototype.render = function() {
                        return (0, a.HM)(this.state.intl), i.createElement(o.Kq, {
                            value: this.state.intl
                        }, this.props.children)
                    }, e.displayName = "IntlProvider", e.defaultProps = a.JF, e
                }(i.PureComponent),
                K = X
        },
        24184: function(t, e, r) {
            r.d(e, {
                HM: function() {
                    return s
                },
                JF: function() {
                    return l
                },
                bN: function() {
                    return c
                },
                yU: function() {
                    return u
                }
            });
            var n = r(15215),
                i = r(96540),
                o = r(33672),
                a = r(87683);

            function s(t) {
                (0, o.V1)(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
            }
            var l = (0, n.Cl)((0, n.Cl)({}, a.JF), {
                textComponent: i.Fragment
            });

            function u(t) {
                return function(e) {
                    return t(i.Children.toArray(e))
                }
            }

            function c(t, e) {
                if (t === e) return !0;
                if (!t || !e) return !1;
                var r = Object.keys(t),
                    n = Object.keys(e),
                    i = r.length;
                if (n.length !== i) return !1;
                for (var o = 0; o < i; o++) {
                    var a = r[o];
                    if (t[a] !== e[a] || !Object.prototype.hasOwnProperty.call(e, a)) return !1
                }
                return !0
            }
        },
        15215: function(t, e, r) {
            r.d(e, {
                C6: function() {
                    return i
                },
                Cl: function() {
                    return o
                },
                Tt: function() {
                    return a
                },
                fX: function() {
                    return s
                }
            });
            var n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }, n(t, e)
            };

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var o = function() {
                return o = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, o.apply(this, arguments)
            };

            function a(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }
            Object.create;

            function s(t, e, r) {
                if (r || 2 === arguments.length)
                    for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
                return t.concat(n || Array.prototype.slice.call(e))
            }
            Object.create
        }
    }
]);