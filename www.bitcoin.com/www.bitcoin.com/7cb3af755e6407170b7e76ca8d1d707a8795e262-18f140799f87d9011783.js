"use strict";
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [3345], {
        94691: function(e, t, n) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, a)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                l = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                    return a(t, e), t
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sizes = t.Designs = void 0;
            const r = l(n(96540)),
                d = o(n(8711)),
                s = o(n(39574)),
                c = (0, d.default)(s.default)
            `

  &.bop:not(:hover) {
    animation: bop 1s linear infinite;
  }

  @keyframes bop {
    0%, 100% {
      transform: scale(1.00004) rotate(-0.0216336deg);
    }
    10% {
      transform: scale(1.02519) rotate(0.418538deg);
    }
    20% {
      transform: scale(1.0284) rotate(-0.418538deg);
    }
    30% {
      transform: scale(1.0284) rotate(2.79107deg);
    }
    40% {
      transform: scale(1.0284) rotate(-2.79107deg);
    }
    50% {
      transform: scale(1.0284) rotate(4.35555deg);
    }
    60% {
      transform: scale(1.0284) rotate(-4.35555deg);
    }
    70% {
      transform: scale(1.0284) rotate(2.79107deg);
    }
    80% {
      transform: scale(1.0284) rotate(-2.79107deg);
    }
    90% {
      transform: scale(1.0284) rotate(0.0216336deg);
    }
  }
`;
            var p, m;
            ! function(e) {
                e.Primary = "primary", e.Secondary = "secondary", e.Default = "default"
            }(p = t.Designs || (t.Designs = {})),
            function(e) {
                e.Small = "small", e.Default = "default"
            }(m = t.Sizes || (t.Sizes = {}));
            const f = e => {
                const t = (0, r.useRef)(null);
                return (0, r.useEffect)((() => {
                    const e = setInterval((() => {
                        t.current && (t.current.classList.add("bop"), setTimeout((() => {
                            t.current.classList.remove("bop")
                        }), 1050))
                    }), 4e3);
                    return () => clearInterval(e)
                }), []), r.default.createElement(c, Object.assign({}, e, {
                    ref: t
                }))
            };
            f.Designs = p, f.Sizes = m, t.default = f
        },
        39574: function(e, t, n) {
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, a)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                l = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                    return a(t, e), t
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = l(n(8711)),
                d = o(n(31978)),
                s = (0, r.default)(d.default)
            `
${({design:e,animated:t})=>r.css`

            &
            ::before {
                content: "";
                position: absolute;
                inset: -3 px;
                border - radius: 15 px;
                padding: 9 px;
                background: linear - gradient(90 deg, #FFC703,
                    rgba(255, 199, 3, 0.8),
                    rgba(255, 106, 0, 0.7),
                    rgba(255, 199, 3, 0.8), #FFC703
                );

                $ {
                    "default" === e && r.css `
        background: linear-gradient(90deg, 
        #C6F9EF, 
        rgba(198, 249, 239, 0.8),
        rgba(187, 220, 255, 0.7),
        rgba(198, 249, 239, 0.8),
        #C6F9EF
        );      
    `
                }

                background - size: 300 % 100 % ;
                transition - property: color,
                background - color,
                border - color,
                text - decoration - color,
                fill,
                stroke,
                opacity,
                box - shadow,
                transform,
                filter,
                backdrop - filter;
                transition - timing - function: cubic - bezier(.4, 0, .2, 1);
                transition - duration: .15 s;
                border - color: hsl(228 5 % 21 % );
                animation: border - flow 3 s linear infinite;
            }

            @keyframes border - flow {
                0 % {
                    background - position: 100 % 0;
                }
                100 % {
                    background - position: 0 % 0;
                }
            }

            $ {
                !0 === t && r.css `
      &:not(:hover) {
        animation: bop-js-free 4s linear infinite;
      }
  `
            }

            @keyframes bop - js - free {
                0 % ,
                    100 % {
                        transform: scale(1.00004) rotate(-0.0216336 deg);
                    }
                2.5 % {
                    transform: scale(1.02519) rotate(0.418538 deg);
                }
                5 % {
                    transform: scale(1.0284) rotate(-0.418538 deg);
                }
                7.5 % {
                    transform: scale(1.0284) rotate(2.79107 deg);
                }
                10 % {
                    transform: scale(1.0284) rotate(-2.79107 deg);
                }
                12.5 % {
                    transform: scale(1.0284) rotate(4.35555 deg);
                }
                15 % {
                    transform: scale(1.0284) rotate(-4.35555 deg);
                }
                17.5 % {
                    transform: scale(1.0284) rotate(2.79107 deg);
                }
                20 % {
                    transform: scale(1.0284) rotate(-2.79107 deg);
                }
                22.5 % {
                    transform: scale(1.0284) rotate(0.0216336 deg);
                }
                25 % {
                    transform: scale(1.00004) rotate(-0.0216336 deg);
                }

                /* 25% to 100% — hold still (pause effect) */
                100 % {
                    transform: scale(1.00004) rotate(-0.0216336 deg);
                }
            }

            `}
`;
            t.default = s
        },
        17119: function(e, t, n) {
            var i = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (n[i[a]] = e[i[a]])
                    }
                    return n
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const l = a(n(96540)),
                o = a(n(2618));
            t.default = e => {
                var t = i(e, []);
                return l.default.createElement(o.default, Object.assign({
                    "data-icon": "bars",
                    viewBox: "0 0 448 512"
                }, t), l.default.createElement("path", {
                    fill: "currentColor",
                    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                }))
            }
        },
        81991: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var i = n(96540),
                a = n(70703),
                l = n.n(a),
                o = n(24606),
                r = n(8711);
            r.default.p.withConfig({
                displayName: "styled__AwardTitle",
                componentId: "sc-zgb1ld-0"
            })(["font-size:12px;text-align:center;", ""], o.media.md `
    text-align: start;
    text-wrap: wrap;
  `);
            const d = r.default.div.withConfig({
                    displayName: "styled__AwardTitleWrapper",
                    componentId: "sc-zgb1ld-1"
                })(["display:flex;justify-content:start;"]),
                s = ((0, r.default)(l()).withConfig({
                    displayName: "styled__ImageWrapper",
                    componentId: "sc-zgb1ld-2"
                })(["padding-left:12px;", ""], o.media.md `
  padding-left: unset;
  `), r.default.img.withConfig({
                    displayName: "styled__StyledImage",
                    componentId: "sc-zgb1ld-3"
                })(["display:flex;margin-top:-10px;margin-left:-10px;margin-bottom:0px;padding:0px;object-fit:contain;height:23px;"])),
                c = (r.default.img.withConfig({
                    displayName: "styled__ImageCardMobile",
                    componentId: "sc-zgb1ld-4"
                })(["height:60px;align-self:stretch;border-radius:9px;width:100%;display:flex;object-fit:contain;", ""], o.media.md `
      display:none;
  `), e => {
                    let {
                        name: t,
                        award: n,
                        desktopimage: a,
                        mobileimage: l
                    } = e;
                    if (a && l) return i.createElement(d, null, i.createElement(s, {
                        src: a,
                        alt: "award"
                    }))
                });
            c.defaultProps = {
                name: "",
                award: "",
                desktopimage: "",
                mobileimage: ""
            };
            var p = c
        },
        84946: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i.A
                }
            });
            var i = n(81991)
        },
        23570: function(e, t, n) {
            n.d(t, {
                E7: function() {
                    return s
                },
                XE: function() {
                    return a
                },
                vM: function() {
                    return d
                }
            });
            var i = n(75907);
            const a = "bitcoincom-geo",
                l = () => {
                    const e = window.sessionStorage.getItem(a);
                    return JSON.parse(e)
                },
                o = e => {
                    window.sessionStorage.setItem(a, JSON.stringify(e))
                },
                r = e => "number" != typeof e || Date.now() - e > 36e5,
                d = async () => {
                    const e = l();
                    if ("fetching" === (null == e ? void 0 : e.val)) return null;
                    if (!e || "error" === e.val && ("number" != typeof(t = e.ts) || Date.now() - t > 5e3) || r(e.ts)) {
                        o({
                            val: "fetching",
                            ts: null
                        });
                        const e = await (async () => {
                            const e = await i.GeoLocationController.getLocationInfo();
                            var t;
                            return null != e && e.isSuccess ? null == e || null === (t = e.getValue()) || void 0 === t ? void 0 : t.countryCode : null
                        })();
                        return o({
                            val: e || "error",
                            ts: Date.now()
                        }), e
                    }
                    var t;
                    return e.val
                },
                s = () => {
                    const e = l(),
                        t = null == e ? void 0 : e.val;
                    return t && "fetching" !== t && "error" !== t && r(e.ts) ? t : null
                }
        },
        8715: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return E
                }
            });
            var i = n(96540);
            n(7247);
            const a = [{
                src: "/images/uploads/gambling/casinos/d/shuffle_logo_white.png",
                reviewLink: "https://www.bitcoin.com/gambling/reviews/shuffle/",
                playLink: "https://srt.bitcoin.com/shfl-hamburger",
                subtext: "🎁 <em>200%</em> Welcome Bonus up to <em>$1,000</em> | $1M+ Weekly Lottery | Instant Withdrawals | Exclusive $SHFL Token | 99% RTP Games 🔥",
                id: "shuffle"
            }];
            var l = n(24606),
                o = n(39574),
                r = n.n(o),
                d = n(55268),
                s = n(8711),
                c = n(94691),
                p = n.n(c);
            const m = s.default.div.withConfig({
                    displayName: "styled__FlexContainer",
                    componentId: "sc-yfnfur-0"
                })(["background-image:url('/images/uploads/gambling/bety_bg.jpg');width:100%;background-color:#11212f;background-repeat:no-repeat;background-position:right -120px top -50px;background-size:auto 200px;background-blend-mode:lighten;grid-row:1;border-radius:10px;justify-self:center;&,& *{box-sizing:border-box;}height:min-content;display:flex;", " ", ""], l.media.md `
    grid-column: 1 / span 3;
    justify-self: unset;
    align-self: center;
    background-position: calc(22% - 40px) center;
    background-size: auto 171px;
  `, l.media.xl `
    background-size: 280px;
    grid-column: 1 / span 5;
    justify-self: center;
    flex-direction: column;
    background-position: calc(22% - 98px) center;
  `),
                f = s.default.div.withConfig({
                    displayName: "styled__CardWrapper",
                    componentId: "sc-yfnfur-1"
                })(["flex:1;min-width:0;display:flex;flex-direction:column;overflow:hidden;padding:11px 32px;margin:0;overflow:hidden;margin-bottom:12px;max-height:300px;&:last-child{margin-bottom:0;}", " ", ""], l.media.md `
    max-height: unset;
    margin-bottom: 0;
    padding: 21px;
  `, l.media.xl `
    padding: 21px 32px;
  `),
                g = (s.default.div.withConfig({
                    displayName: "styled__LogoWrapper",
                    componentId: "sc-yfnfur-2"
                })([""]), s.default.span.withConfig({
                    displayName: "styled__LogoName",
                    componentId: "sc-yfnfur-3"
                })(["padding:0;font-size:28px;line-height:32px;color:rgb(45,50,59);font-weight:600;", ""], l.media.md `
    line-height: 32px;
    font-size: 18px;
  `), s.default.div.withConfig({
                    displayName: "styled__SubtextWrapper",
                    componentId: "sc-yfnfur-4"
                })(["max-width:calc(100% - 48px);padding:0;margin:0 0 10px;", ""], l.media.md `
    max-width: unset;
    padding: 0 8px;
    margin: 0 auto;
  `)),
                u = s.default.div.withConfig({
                    displayName: "styled__FlexRow",
                    componentId: "sc-yfnfur-5"
                })(["display:flex;flex-direction:column;text-align:center;height:100%;justify-content:space-between;width:100%;", ""], l.media.md `
    /* padding: 4px; */
    flex-direction: row;
    align-items: center;
  `),
                h = s.default.div.withConfig({
                    displayName: "styled__ButtonCell",
                    componentId: "sc-yfnfur-6"
                })(["display:flex;justify-content:space-between;align-items:center;width:100%;padding:0;flex-wrap:nowrap;gap:12px;@media (max-width:576px){margin:5px 0;}", " ", ""], l.media.md `
    flex-direction: column;
    padding: 0 4px;
    max-width: max-content;
    margin: 0;
    gap: 11px;
  `, l.media.xl `
    flex-direction: row;
    /* flex-wrap: wrap; */
  `),
                x = s.default.div.withConfig({
                    displayName: "styled__AwardWrapper",
                    componentId: "sc-yfnfur-7"
                })(["width:100%;& > div{align-items:center;justify-content:center;background-color:#f1f7fd;border-radius:8px;position:unset;top:unset;& > div{margin-top:12px;}}", ""], l.media.md `
    padding: 0 4px;
    margin-bottom: 8px;
    height: 40px;
    display: flex;
    justify-content: center;
  `),
                y = s.default.img.withConfig({
                    displayName: "styled__Logo",
                    componentId: "sc-yfnfur-8"
                })(["width:auto;max-width:max-content;width:100px;object-fit:contain;margin-bottom:10px;", " ", ""], l.media.md `
    margin-bottom: 0;
    margin-right: 19%;
    width: 94px;
  `, l.media.md `
    width: 120px;
  `),
                w = s.default.div.withConfig({
                    displayName: "styled__Subtext",
                    componentId: "sc-yfnfur-9"
                })(["font-family:Segoe UI,sans-serif;font-size:", "px;color:#fff;margin:0;text-align:start;padding-right:6px;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:", ";-webkit-box-orient:vertical;overflow:hidden;& p{margin:18px 0;font-size:16px;}& p:only-child{font-weight:600;margin:0;& > em{color:#54ba24;font-style:normal;font-weight:600;font-size:1.1em;}", "}& p:not(:only-child){> span{white-space:nowrap;}> em{font-style:normal;font-weight:700;font-size:1.1em;}:first-child{font-weight:600;font-size:16px;line-height:100%;letter-spacing:0%;margin:0 0 6px;}:last-child{margin:0;font-weight:400;font-size:13px;line-height:100%;letter-spacing:0%;color:rgba(255,255,255,0.8);}", " ", "}", " ", " body.dark &{color:white;}"], (e => {
                    let {
                        small: t
                    } = e;
                    return t ? "12" : "15"
                }), (e => {
                    let {
                        small: t
                    } = e;
                    return t ? "3" : "4"
                }), l.media.xl `
      margin: 4px 0 0;
  `, l.media.md `

      :first-child {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 9px;
      }

      :last-child {
        font-size: 17px;
        margin: 0;
      }
  `, l.media.xl `
      /* width: max-content; */

      :first-child {
        margin-top: 0;
        margin-bottom: 9px;
      }

      :last-child {
        margin: 0;
      }
  `, l.media.sm `
    display: block;
    font-size: 14px;
    font-weight: 500;
    padding-right: unset;
    font-size: unset;
    word-wrap: unset;
    overflow: unset;
  `, l.media.md `
    font-size: 16px;
  `),
                b = ((0, s.default)(d.Link).withConfig({
                    displayName: "styled__StyledButton",
                    componentId: "sc-yfnfur-10"
                })(["", ""], (e => {
                    let {
                        black: t
                    } = e;
                    return (0, s.css)(["display:flex;justify-content:center;align-items:center;text-align:center;color:white;line-height:22.4px;border:1px;font-size:16px;font-weight:700;cursor:pointer;border-radius:6px;background-color:", ";min-width:70px;min-height:46px;flex-grow:1;width:100%;flex-wrap:wrap;@media (max-width:576px){font-size:1rem;min-width:70px;min-height:40px;border-radius:10px;margin:5px 0;}"], t ? "black" : "rgb(39, 147, 255)")
                })), (0, s.default)(r()).withConfig({
                    displayName: "styled__StyledGradientButton",
                    componentId: "sc-yfnfur-11"
                })(["", ""], (e => {
                    let {
                        black: t
                    } = e;
                    return (0, s.css)(["&,& > div{line-height:22.4px;border:1px;font-size:16px;font-weight:700;border-radius:6px;background-color:", ";min-width:70px;min-height:46px;width:100%;height:36px;@media (max-width:576px){font-size:1rem;min-width:70px;min-height:40px;border-radius:10px;}}&::before{border-radius:8px !important;padding:27px !important;@media (max-width:576px){border-radius:12px !important;padding:24px !important;}}"], t ? "black" : "rgb(39, 147, 255)")
                })), s.default.a.withConfig({
                    displayName: "styled__CustomBtn",
                    componentId: "sc-yfnfur-12"
                })(["box-sizing:border-box;color:black;background:white;border:2px solid #ffc703;color:rgb(39,147,255);height:52px;font-weight:700;border-radius:12px;cursor:pointer;width:140px;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;height:28px;", " @keyframes border-flow{0%{background-position:100% 0;}100%{background-position:0% 0;}}&:hover{text-decoration:underline;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;}", ""], l.media.md `
    width: 140px;
  `, l.media.xl `
    width: 100%;
  `), (0, s.default)(p()).withConfig({
                    displayName: "styled__StyledAnimatedButton",
                    componentId: "sc-yfnfur-13"
                })(["&&{& > div{height:auto;}&{box-sizing:border-box;height:min-content !important;line-height:1;}& > div > span{font-size:16px !important;}width:140px;padding-right:10px;padding-left:10px;transition:all 0.2s ease;&:hover{text-decoration:underline;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;}", "}"], l.media.xl `
    width: 100%;
  `), s.default.a.withConfig({
                    displayName: "styled__SecondaryButton",
                    componentId: "sc-yfnfur-14"
                })(["width:100%;height:min-content;top:118px;left:15px;border-radius:5.53px;border-width:0.46px;padding:8px 15px;background:linear-gradient( 180deg,#ffffff 3.35%,rgba(255,255,255,0.73) 100% );box-shadow:0px 0.88px 5.03px 0px rgba(45,50,59,0.08);box-shadow:0px 4px 14.14px 0px rgba(45,50,59,0.05);box-shadow:0px 10.13px 37.93px 0px rgba(45,50,59,0.03);box-shadow:0px 20px 87px 0px rgba(45,50,59,0.02);color:#2d323b;box-shadow:0px 0.46px 0.46px 0px rgba(0,0,0,0.1);font-size:12px;line-height:1.1;font-weight:700;", ""], l.media.md `
    padding: 8.5px 52px;
    font-size: 14px;
  `)),
                _ = (0, s.default)(b).withConfig({
                    displayName: "styled__PrimaryButton",
                    componentId: "sc-yfnfur-15"
                })(["background:#35fbfb;border:0.46px solid;border-image-source:linear-gradient( 180deg,rgba(255,255,255,0.2) 0%,rgba(0,0,0,0.2) 100% );"]);
            var v = n(84946);
            var E = () => i.createElement(m, null, null == a ? void 0 : a.map((e => {
                return i.createElement(f, {
                    key: e.id
                }, e.name && i.createElement(x, null, i.createElement(v.A, {
                    name: e.name,
                    award: e.name
                })), i.createElement(u, null, i.createElement(y, {
                    src: e.src,
                    alt: "logo"
                }), i.createElement(g, null, i.createElement(w, {
                    dangerouslySetInnerHTML: {
                        __html: (t = e.subtext, t ? t.startsWith("<p>") ? t : `<p>${t}</p>` : "")
                    }
                })), i.createElement(h, null, i.createElement(b, {
                    href: e.reviewLink,
                    target: "_blank"
                }, "Review"), i.createElement(_, {
                    href: e.playLink,
                    target: "_blank"
                }, "Play"))));
                var t
            })))
        },
        99114: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return i
                }
            });
            const i = e => {
                const t = e.currentTarget,
                    n = document.createElement("span"),
                    i = t.getBoundingClientRect(),
                    a = Math.max(t.clientWidth, t.clientHeight),
                    l = e.clientX - i.left - a / 2,
                    o = e.clientY - i.top - a / 2;
                n.className = "ripple", n.style.width = `${a}px`, n.style.height = `${a}px`, n.style.left = `${l}px`, n.style.top = `${o}px`, t.appendChild(n), n.addEventListener("animationend", (() => {
                    n.remove()
                }))
            };
            t.A = i
        },
        79892: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return Z
                }
            });
            var i = n(96540),
                a = n(55268),
                l = n(6442),
                o = n(86462),
                r = n(8711),
                d = n(24606),
                s = n(74689),
                c = n.n(s);
            const p = (0, r.default)(c()).withConfig({
                    displayName: "styled__StyledSection",
                    componentId: "sc-6ng202-0"
                })(["order:20;display:flex;width:100%;overflow:visible;background:#1c1c1c !important;padding:40px 0px !important;margin:0px !important;", " ", " ", ""], d.media.md `
    padding: 40px 0px !important;
  `, d.media.lg `
    padding: 40px 0px 60px !important;
  `, d.media.xl `
    padding: 75px 0px 60px !important;
  `),
                m = r.default.div.withConfig({
                    displayName: "styled__StyledContentBlock",
                    componentId: "sc-6ng202-1"
                })(["width:100%;max-width:1440px;padding:0px !important;margin:auto;"]),
                f = r.default.div.withConfig({
                    displayName: "styled__MainContainer",
                    componentId: "sc-6ng202-2"
                })(["padding:0px 20px !important;", " ", " ", ""], d.media.md `
    padding: 0px 60px !important;
  `, d.media.lg `
    padding: 0px 100px !important;
  `, d.media.xl `
    padding: 0px 80px !important;
  `),
                g = r.default.div.withConfig({
                    displayName: "styled__MainWrapper",
                    componentId: "sc-6ng202-3"
                })(["display:none;", ""], d.media.lg `
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 50px;
  `),
                u = r.default.div.withConfig({
                    displayName: "styled__FooterGrid",
                    componentId: "sc-6ng202-4"
                })(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-areas:'download company educate products follow' 'download get-crypto spend-crypto crypto-games exchanges' 'download bitcoin-data bitcoin-games . .';gap:80px 40px;width:100%;& > div:nth-child(1){grid-area:download;}& > div:nth-child(2){grid-area:company;}& > div:nth-child(3){grid-area:educate;}& > div:nth-child(4){grid-area:products;}& > div:nth-child(5){grid-area:bitcoin-data;}& > div:nth-child(6){grid-area:get-crypto;}& > div:nth-child(7){grid-area:spend-crypto;}& > div:nth-child(8){grid-area:crypto-games;}& > div:nth-child(9){grid-area:exchanges;}& > div:nth-child(10){grid-area:bitcoin-games;}& > div:nth-child(11){grid-area:follow;}", ""], d.media.xl `
    grid-template-columns: repeat(6, 1fr);
    
    grid-template-areas:
      'download company educate products bitcoin-data follow'
      'download get-crypto spend-crypto crypto-games exchanges bitcoin-games';
  `),
                h = r.default.div.withConfig({
                    displayName: "styled__FooterColumn",
                    componentId: "sc-6ng202-5"
                })(["display:flex;flex-direction:column;align-items:start;gap:24px;"]),
                x = r.default.h3.withConfig({
                    displayName: "styled__ColumnTitle",
                    componentId: "sc-6ng202-6"
                })(["color:#ffffff;font-family:'Satoshi Variable Medium',sans-serif;font-size:20px;font-weight:500;line-height:110%;margin:0px;"]),
                y = r.default.div.withConfig({
                    displayName: "styled__StoreWrapper",
                    componentId: "sc-6ng202-7"
                })(["display:flex;flex-direction:column;justify-content:center;align-items:start;align-self:stretch;width:100%;gap:10px;"]),
                w = r.default.div.withConfig({
                    displayName: "styled__GooglePlay",
                    componentId: "sc-6ng202-8"
                })(["display:flex;height:50px;justify-content:center;align-items:center;align-self:stretch;border-radius:10px;border:1px solid #888a98;"]),
                b = r.default.div.withConfig({
                    displayName: "styled__GooglePlayImageWrapper",
                    componentId: "sc-6ng202-9"
                })(["width:114.104px;height:26.533px;cursor:pointer;"]),
                _ = r.default.div.withConfig({
                    displayName: "styled__AppStore",
                    componentId: "sc-6ng202-10"
                })(["display:flex;justify-content:center;align-items:center;height:50px;align-self:stretch;border-radius:10px;border:1px solid #888a98;"]),
                v = r.default.div.withConfig({
                    displayName: "styled__AppStoreImageWrapper",
                    componentId: "sc-6ng202-11"
                })(["width:107.008px;height:28.507px;cursor:pointer;"]),
                E = r.default.ul.withConfig({
                    displayName: "styled__LinkList",
                    componentId: "sc-6ng202-12"
                })(["display:flex;flex-direction:column;list-style:none;padding:0;margin:0;gap:10px;"]),
                k = r.default.li.withConfig({
                    displayName: "styled__LinkItem",
                    componentId: "sc-6ng202-13"
                })(["margin:0;"]),
                C = r.default.a.withConfig({
                    displayName: "styled__StyledLink",
                    componentId: "sc-6ng202-14"
                })(["color:#888a98;font-family:'Satoshi Variable Medium',sans-serif;font-size:16px;font-weight:400;line-height:27px;text-decoration:none;cursor:pointer;&:hover{color:#ffffff;}"]),
                I = r.default.div.withConfig({
                    displayName: "styled__DownWrapper",
                    componentId: "sc-6ng202-15"
                })(["display:flex;justify-content:space-between;align-items:center;width:100%;"]),
                N = r.default.div.withConfig({
                    displayName: "styled__LogoContentWrapper",
                    componentId: "sc-6ng202-16"
                })(["display:flex;justify-content:center;align-items:center;"]),
                M = r.default.img.withConfig({
                    displayName: "styled__LogoImage",
                    componentId: "sc-6ng202-17"
                })(["width:190px;height:40px;", " ", ""], d.media.md `
    width: 228px;
    height: auto;
  `, d.media.xl `
    width: 238px;
    height: auto;
  `),
                z = r.default.div.withConfig({
                    displayName: "styled__Copyright",
                    componentId: "sc-6ng202-18"
                })(["display:flex;flex-direction:column;justify-content:end;width:240px;"]),
                S = r.default.p.withConfig({
                    displayName: "styled__CopyrightText",
                    componentId: "sc-6ng202-19"
                })(["color:#888a98;font-family:'Satoshi Variable Medium',sans-serif;font-size:14px;font-weight:400;line-height:109%;margin:0px;"]),
                j = r.default.div.withConfig({
                    displayName: "styled__MobileWrapper",
                    componentId: "sc-6ng202-20"
                })(["display:flex;flex-direction:column;align-items:center;width:100%;gap:40px;", ""], d.media.lg `
    display: none;
  `),
                L = r.default.div.withConfig({
                    displayName: "styled__MobileDownloadSection",
                    componentId: "sc-6ng202-21"
                })(["display:flex;flex-direction:column;align-items:start;width:100%;gap:20px;"]),
                O = r.default.div.withConfig({
                    displayName: "styled__MobileLinkWrapper",
                    componentId: "sc-6ng202-22"
                })(["display:flex;flex-direction:column;width:100%;"]),
                P = r.default.span.withConfig({
                    displayName: "styled__MobileSectionSeparator",
                    componentId: "sc-6ng202-23"
                })(["width:100%;border-bottom:1px solid #888a98;"]),
                $ = r.default.div.withConfig({
                    displayName: "styled__MobileSectionHeader",
                    componentId: "sc-6ng202-24"
                })(["display:flex;justify-content:space-between;align-items:center;width:100%;padding:20px 0px;border-bottom:1px solid #888a98;cursor:pointer;"]),
                F = r.default.h3.withConfig({
                    displayName: "styled__MobileSectionTitle",
                    componentId: "sc-6ng202-25"
                })(["color:#ffffff;font-family:'Satoshi Variable Medium',sans-serif;font-size:20px;font-weight:500;line-height:110%;margin:0px;"]),
                W = r.default.div.withConfig({
                    displayName: "styled__ToggleIcon",
                    componentId: "sc-6ng202-26"
                })(["display:flex;justify-content:center;align-items:center;width:30px;height:30px;border-radius:50%;background:#ff9500;"]),
                D = r.default.div.withConfig({
                    displayName: "styled__MobileSectionContent",
                    componentId: "sc-6ng202-27"
                })(["display:", ";width:100%;padding:16px 0px;border-bottom:1px solid #888a98;"], (e => e.isExpanded ? "block" : "none")),
                A = r.default.ul.withConfig({
                    displayName: "styled__MobileLinkList",
                    componentId: "sc-6ng202-28"
                })(["display:flex;flex-direction:column;list-style:none;padding:0;margin:0;gap:12px;"]),
                B = r.default.li.withConfig({
                    displayName: "styled__MobileLinkItem",
                    componentId: "sc-6ng202-29"
                })(["margin:0;"]),
                T = r.default.a.withConfig({
                    displayName: "styled__MobileLink",
                    componentId: "sc-6ng202-30"
                })(["color:#888a98;font-family:'Satoshi Variable Medium',sans-serif;font-size:16px;font-weight:400;line-height:27px;text-decoration:none;cursor:pointer;&:hover{color:#ffffff;}"]),
                H = r.default.div.withConfig({
                    displayName: "styled__MobileFooterBottom",
                    componentId: "sc-6ng202-31"
                })(["display:flex;flex-direction:column;align-items:start;width:100%;gap:20px;padding:0px 0px 40px;"]),
                V = r.default.div.withConfig({
                    displayName: "styled__MobileLogoWrapper",
                    componentId: "sc-6ng202-32"
                })(["display:flex;justify-content:center;align-items:center;"]),
                R = r.default.p.withConfig({
                    displayName: "styled__MobileCopyright",
                    componentId: "sc-6ng202-33"
                })(["width:230px;color:#888a98;font-family:'Satoshi Variable Medium',sans-serif;font-size:14px;font-weight:400;line-height:109%;margin:0;"]),
                G = e => {
                    var t, n, r, d, s, c, G, Z, J, X, Q, U, Y, q, K, ee;
                    let {
                        mainPath: te
                    } = e;
                    const {
                        0: ne,
                        1: ie
                    } = (0, i.useState)(null), {
                        locale: ae
                    } = (0, l.A)(), {
                        pathname: le
                    } = (0, o.useLocation)(), oe = (0, a.useStaticQuery)("1540568995"), re = (0, i.useMemo)((() => {
                        const {
                            edges: e
                        } = oe.allFile, t = e.find((e => e.node.childMarkdownRemark.frontmatter.locale === ae)), n = e.find((e => "en" === e.node.childMarkdownRemark.frontmatter.locale));
                        return (null == t ? void 0 : t.node.childMarkdownRemark.frontmatter) || (null == n ? void 0 : n.node.childMarkdownRemark.frontmatter)
                    }), [ae, oe]), de = e => {
                        if (null == re || !re.links) return [];
                        const t = re.links.find((t => t.id === e));
                        return t ? t.links : []
                    }, se = e => {
                        if (null == re || !re.links) return "";
                        const t = re.links.find((t => t.id === e));
                        return t ? t.message : ""
                    };
                    return re || console.log("[Footer] No messages found, rendering empty footer"), i.createElement(p, null, i.createElement(m, null, i.createElement(f, null, i.createElement(g, null, i.createElement(u, null, i.createElement(h, null, i.createElement(x, null, "Download App"), i.createElement(y, null, i.createElement(w, null, i.createElement("a", {
                        href: null === (t = re.playstore) || void 0 === t ? void 0 : t.link,
                        target: "_blank"
                    }, i.createElement(b, null, i.createElement("img", {
                        src: null === (n = re.playstore) || void 0 === n ? void 0 : n.src,
                        alt: null === (r = re.playstore) || void 0 === r ? void 0 : r.alt
                    })))), i.createElement(_, null, i.createElement("a", {
                        href: null === (d = re.appstore) || void 0 === d ? void 0 : d.link,
                        target: "_blank"
                    }, i.createElement(v, null, i.createElement("img", {
                        src: null === (s = re.appstore) || void 0 === s ? void 0 : s.src,
                        alt: null === (c = re.appstore) || void 0 === c ? void 0 : c.alt
                    })))))), i.createElement(h, null, i.createElement(x, null, se("company")), i.createElement(E, null, de("company").map(((e, t) => i.createElement(k, {
                        key: `company-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("educate")), i.createElement(E, null, de("educate").map(((e, t) => i.createElement(k, {
                        key: `educate-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("products")), i.createElement(E, null, de("products").map(((e, t) => i.createElement(k, {
                        key: `products-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("data")), i.createElement(E, null, de("data").map(((e, t) => i.createElement(k, {
                        key: `bitcoin-data-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("get")), i.createElement(E, null, de("get").map(((e, t) => i.createElement(k, {
                        key: `get-crypto-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("spend")), i.createElement(E, null, de("spend").map(((e, t) => i.createElement(k, {
                        key: `spend-crypto-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("cgames")), i.createElement(E, null, de("cgames").map(((e, t) => i.createElement(k, {
                        key: `crypto-games-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("exchanges")), i.createElement(E, null, de("exchanges").map(((e, t) => i.createElement(k, {
                        key: `exchanges-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("bitcoin-games")), i.createElement(E, null, de("bitcoin-games").map(((e, t) => i.createElement(k, {
                        key: `bitcoin-games-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message)))))), i.createElement(h, null, i.createElement(x, null, se("follow")), i.createElement(E, null, de("follow").map(((e, t) => i.createElement(k, {
                        key: `follow-${t}`
                    }, i.createElement(C, {
                        href: e.href,
                        target: "_blank"
                    }, e.message))))))), i.createElement(I, null, i.createElement(N, null, i.createElement(M, {
                        src: null === (G = re.logo) || void 0 === G ? void 0 : G.src,
                        alt: null === (Z = re.logo) || void 0 === Z ? void 0 : Z.alt
                    })), i.createElement(z, null, i.createElement(S, null, re.copyrightofbitcoincom)))), i.createElement(j, null, i.createElement(L, null, i.createElement(x, null, "Download App"), i.createElement(y, null, i.createElement(w, null, i.createElement("a", {
                        href: null === (J = re.playstore) || void 0 === J ? void 0 : J.link,
                        target: "_blank"
                    }, i.createElement(b, null, i.createElement("img", {
                        src: null === (X = re.playstore) || void 0 === X ? void 0 : X.src,
                        alt: null === (Q = re.playstore) || void 0 === Q ? void 0 : Q.alt
                    })))), i.createElement(_, null, i.createElement("a", {
                        href: null === (U = re.appstore) || void 0 === U ? void 0 : U.link,
                        target: "_blank"
                    }, i.createElement(v, null, i.createElement("img", {
                        src: null === (Y = re.appstore) || void 0 === Y ? void 0 : Y.src,
                        alt: null === (q = re.appstore) || void 0 === q ? void 0 : q.alt
                    })))))), i.createElement(O, null, i.createElement(P, null), [{
                        id: "company"
                    }, {
                        id: "products"
                    }, {
                        id: "educate"
                    }, {
                        id: "get"
                    }, {
                        id: "spend"
                    }, {
                        id: "cgames"
                    }, {
                        id: "data"
                    }, {
                        id: "exchanges"
                    }, {
                        id: "bitcoin-games"
                    }, {
                        id: "follow"
                    }].map((e => i.createElement(i.Fragment, {
                        key: e.id
                    }, i.createElement($, {
                        onClick: () => {
                            return t = e.id, void ie(ne === t ? null : t);
                            var t
                        }
                    }, i.createElement(F, null, se(e.id)), i.createElement(W, null, ne === e.id ? i.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "31",
                        height: "31",
                        viewBox: "0 0 31 31",
                        fill: "none"
                    }, i.createElement("g", {
                        clipPath: "url(#clip0_6344_99941)"
                    }, i.createElement("path", {
                        d: "M15.6875 30.3477C23.9718 30.3477 30.6875 23.6319 30.6875 15.3477C30.6875 7.06338 23.9718 0.347656 15.6875 0.347656C7.40322 0.347656 0.6875 7.06338 0.6875 15.3477C0.6875 23.6319 7.40322 30.3477 15.6875 30.3477Z",
                        fill: "#FF9500"
                    }), i.createElement("path", {
                        d: "M21 16.6049V15.0879H10V16.6049H21Z",
                        fill: "black"
                    })), i.createElement("defs", null, i.createElement("clipPath", {
                        id: "clip0_6344_99941"
                    }, i.createElement("rect", {
                        width: "31",
                        height: "30",
                        fill: "white",
                        transform: "translate(0 0.347656)"
                    })))) : i.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "31",
                        height: "31",
                        viewBox: "0 0 31 31",
                        fill: "none"
                    }, i.createElement("g", {
                        clipPath: "url(#clip0_6344_99941)"
                    }, i.createElement("path", {
                        d: "M15.6875 30.3477C23.9718 30.3477 30.6875 23.6319 30.6875 15.3477C30.6875 7.06338 23.9718 0.347656 15.6875 0.347656C7.40322 0.347656 0.6875 7.06338 0.6875 15.3477C0.6875 23.6319 7.40322 30.3477 15.6875 30.3477Z",
                        fill: "#FF9500"
                    }), i.createElement("path", {
                        d: "M16.2592 10.3477H14.7422V21.3477H16.2592V10.3477Z",
                        fill: "black"
                    }), i.createElement("path", {
                        d: "M21 16.6049V15.0879H10V16.6049H21Z",
                        fill: "black"
                    })), i.createElement("defs", null, i.createElement("clipPath", {
                        id: "clip0_6344_99941"
                    }, i.createElement("rect", {
                        width: "31",
                        height: "30",
                        fill: "white",
                        transform: "translate(0 0.347656)"
                    })))))), i.createElement(D, {
                        isExpanded: ne === e.id
                    }, i.createElement(A, null, de(e.id).map(((t, n) => i.createElement(B, {
                        key: `mobile-${e.id}-${n}`
                    }, i.createElement(T, {
                        href: t.href,
                        target: "_blank"
                    }, t.message)))))))))), i.createElement(H, null, i.createElement(V, null, i.createElement(M, {
                        src: null === (K = re.logo) || void 0 === K ? void 0 : K.src,
                        alt: null === (ee = re.logo) || void 0 === ee ? void 0 : ee.alt
                    })), i.createElement(R, null, re.copyrightofbitcoincom))))))
                };
            G.defaultProps = {
                mainPath: "directory"
            };
            var Z = G
        },
        7247: function() {
            const e = "scrollend";
            let t = !1;
            if (!t && "undefined" != typeof window && !("on" + e in window)) {
                t = !0;
                const n = new Event(e),
                    i = new Set,
                    a = new WeakMap;
                let l = null;
                const o = e => e.dispatchEvent(n);
                addEventListener("touchstart", (e => {
                    for (const t of e.changedTouches) i.add(t.identifier)
                }), {
                    passive: !0
                }), addEventListener("touchend", (e => {
                    for (const t of e.changedTouches) i.delete(t.identifier) && l && !i.size && (o(l), l = null)
                }), {
                    passive: !0
                });
                const r = (e, t) => {
                        let n = 0;
                        const i = () => clearTimeout(n),
                            a = () => {
                                i(), n = setTimeout(e, t)
                            };
                        return a._cancel = i, a
                    },
                    d = (t, n, i) => t.forEach((t => {
                        const a = t[n];
                        t[n] = function() {
                            a.apply(this, arguments), arguments[0] === e && i.apply(this, arguments)
                        }
                    })),
                    s = [HTMLElement.prototype, window, document];
                d(s, "addEventListener", (function(e, t, n) {
                    const d = r((() => {
                        0 === i.size ? o(this) : l = this
                    }), 100);
                    a.set(t, d), this.addEventListener("scroll", d, n)
                })), d(s, "removeEventListener", (function(e, t, n) {
                    const i = a.get(t);
                    i && (i._cancel(), a.delete(t), l === this && (l = null), this.removeEventListener("scroll", i, n))
                }))
            }
        }
    }
]);