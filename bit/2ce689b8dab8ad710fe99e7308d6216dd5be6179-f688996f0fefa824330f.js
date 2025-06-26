"use strict";
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [3378], {
        33878: function(e, i, a) {
            var o = this && this.__rest || function(e, i) {
                    var a = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && i.indexOf(o) < 0 && (a[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) i.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (a[o[n]] = e[o[n]])
                    }
                    return a
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const t = n(a(96540)),
                s = a(24606),
                l = a(31922),
                g = e => {
                    var {
                        children: i,
                        background: a = "transparent"
                    } = e, n = o(e, ["children", "background"]);
                    return t.default.createElement(l.Wrapper, Object.assign({
                        background: a
                    }, n), i)
                };
            g.Backgrounds = s.colors.solid, i.default = g
        },
        31922: function(e, i, a) {
            var o = this && this.__createBinding || (Object.create ? function(e, i, a, o) {
                    void 0 === o && (o = a);
                    var n = Object.getOwnPropertyDescriptor(i, a);
                    n && !("get" in n ? !i.__esModule : n.writable || n.configurable) || (n = {
                        enumerable: !0,
                        get: function() {
                            return i[a]
                        }
                    }), Object.defineProperty(e, o, n)
                } : function(e, i, a, o) {
                    void 0 === o && (o = a), e[o] = i[a]
                }),
                n = this && this.__setModuleDefault || (Object.create ? function(e, i) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: i
                    })
                } : function(e, i) {
                    e.default = i
                }),
                t = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var i = {};
                    if (null != e)
                        for (var a in e) "default" !== a && Object.prototype.hasOwnProperty.call(e, a) && o(i, e, a);
                    return n(i, e), i
                };
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.Wrapper = void 0;
            const s = t(a(8711)),
                l = a(24606);
            i.Wrapper = s.default.section `
  ${({theme:e,background:i})=>s.css`
            width: 100 % ;
            padding: $ {
                4 * e.spacing.unit
            }
            px 0;
            box - sizing: border - box;
            background - color: $ {
                i
            };

            $ {
                l.media.md `
        padding: ${5*e.spacing.unit}px 0;
    `
            }

            $ {
                l.media.xl `
        padding: ${10*e.spacing.unit}px 0;
    `
            }
            `}
`, i.default = i.Wrapper
        },
        63258: function(e, i, a) {
            a.d(i, {
                A: function() {
                    return D
                }
            });
            var o = a(96540),
                n = a(6442),
                t = a(55268);
            const s = {
                    mystake: {
                        desktop: "linear-gradient(to right, #25389F 0%, #4288FF 50%, #25389F 100%)",
                        mobile: "linear-gradient(to right, #25389F 0%, #4288FF 50%, #25389F 100%)"
                    },
                    bcgame: {
                        desktop: "linear-gradient(to right, #041105, #0f2912, #154218, #1c5c1b, #28771a, #28771a, #28771a, #28771a, #1c5c1b, #154218, #0f2912, #041105)",
                        mobile: "linear-gradient(to bottom, #154218, #1c5c1b, #28771a, #28771a, #28771a, #28771a, #1c5c1b, #154218, #0f2912, #041105)"
                    },
                    betpanda: {
                        desktop: "linear-gradient(to right, #081521, #0b1d2d, #0c2539, #0c2d45, #0b3552, #0b3552, #0b3552, #0b3552, #0c2d45, #0c2539, #0b1d2d, #081521)",
                        mobile: "linear-gradient(173.11deg, #1FE88A 5.21%, #000000 188.52%)"
                    },
                    cryptorino: {
                        desktop: "linear-gradient(to right, #072942, #1c3f5b, #2f5775, #426f90, #5589ac, #5589ac, #5589ac, #5589ac, #426f90, #2f5775, #1c3f5b, #072942)",
                        mobile: "linear-gradient(185.23deg, #0CA5EC 37.16%, #000000 192.35%)"
                    },
                    cloudbet: {
                        desktop: "linear-gradient(185.23deg, #FF6B2F 37.16%, #000000 192.35%)",
                        mobile: "linear-gradient(185.23deg, #FF6B2F 37.16%, #000000 192.35%)"
                    },
                    default: {
                        desktop: "linear-gradient(to right, #041105, #0f2912, #154218, #1c5c1b, #28771a, #28771a, #28771a, #28771a, #1c5c1b, #154218, #0f2912, #041105)",
                        mobile: "linear-gradient(to right, #041105, #0f2912, #154218, #1c5c1b, #28771a, #28771a, #28771a, #28771a, #1c5c1b, #154218, #0f2912, #041105)"
                    }
                },
                l = {
                    cloudbet: {
                        black: !0
                    }
                },
                g = {
                    oxbet: "/images/uploads/gambling/casinos/d/oxbet_logo-dark.png",
                    "1win": "/images/uploads/gambling/casinos/d/1win_logo_nov.png",
                    "1xbit": "/images/uploads/gambling/casinos/d/1xbit_logo-dark.png",
                    "7bit": "/images/uploads/gambling/casinos/d/7bit_logo_sep.png",
                    "500-casino": "/images/uploads/gambling/casinos/d/500cas_logo_2.png",
                    "888starz.bet": "/images/uploads/gambling/casinos/d/888_logo_1-dark.png",
                    abuking: "/images/uploads/gambling/casinos/abuking_logo.png",
                    aerogram: "/images/uploads/gambling/casinos/d/Aerogram_1000x222.png",
                    alibabet: "/images/uploads/gambling/casinos/d/alibabet_logo-dark.png",
                    anonymbet: "/images/uploads/gambling/casinos/d/logo.8e39c74c-1-.svg",
                    ballersbet: "/images/uploads/gambling/casinos/d/ballersbet_logo-dark.png",
                    bcgame: "/images/uploads/gambling/casinos/d/bc-game-darkbg.png",
                    betfinal: "/images/uploads/gambling/casinos/d/betfinal_logo-dark.png",
                    bethog: "/images/uploads/gambling/casinos/bethog_logo_feb.png",
                    betpanda: "/images/uploads/gambling/casinos/d/betpanda_dark.svg",
                    betplay: "/images/uploads/gambling/casinos/d/betplay_logo-dark.png",
                    betrunner: "/images/uploads/gambling/casinos/d/betrunner_logo.png",
                    bets_io: "/images/uploads/gambling/casinos/d/bets_io-dark.png",
                    bety: "/images/uploads/gambling/casinos/d/bety_logo_dark.png",
                    bitcasino: "/images/uploads/gambling/casinos/d/bitcasino_logo-dark.png",
                    bitcoinsportsbook: "/images/uploads/gambling/casinos/bitcoin-sportsbook-1.png",
                    bitsler: "/images/uploads/gambling/casinos/bitsler_logo_11.png",
                    bitstake: "/images/uploads/gambling/casinos/bitstake_jan_logo-1.png",
                    bitstarz: "/images/uploads/gambling/casinos/bitstarz_1.png",
                    bitstrike: "/images/uploads/gambling/casinos/bitstrike_feb_logo_1.png",
                    bitz: "/images/uploads/gambling/casinos/bitz_logo_3.png",
                    boomerang: "/images/uploads/gambling/casinos/boomerang-bet_1.png",
                    bspin: "/images/uploads/gambling/casinos/bispin_2.png",
                    bullsbet: "/images/uploads/gambling/casinos/d/bullsbet_logo_light_purple_rgb.png",
                    casinobet: "/images/uploads/gambling/casinos/casinobet_1.png",
                    casinopunkz: "/images/uploads/gambling/casinos/d/casinopunkz_logo.svg",
                    celsius: "/images/uploads/gambling/casinos/d/logo-black.png",
                    chancer: "/images/uploads/gambling/casinos/chancer_1.png",
                    claps: "/images/uploads/gambling/casinos/claps_1.png",
                    cloudbet: "/images/uploads/gambling/casinos/cloudbet_logo_mar.png",
                    crashino: "/images/uploads/gambling/casinos/crashino_1.png",
                    "crypto-games": "/images/uploads/gambling/casinos/cg_1.png",
                    cryptoleo: "/images/uploads/gambling/casinos/cryptoleo_1.png",
                    cryptrino: "/images/uploads/gambling/casinos/cryptorino_1.png",
                    dexsport: "/images/uploads/gambling/casinos/d/dexsport_logo.png",
                    donbet: "/images/uploads/gambling/casinos/donbet_logo_updated-2.png",
                    drake: "/images/uploads/gambling/casinos/drk_1.png",
                    duelbits: "/images/uploads/gambling/casinos/duelbits_1.png",
                    duckDice: "/images/uploads/gambling/casinos/duckdice_logo_1.png",
                    dbosses: "/images/uploads/gambling/casinos/dbosses_logo_1.png",
                    empire: "/images/uploads/gambling/casinos/d/empire_logo_2024.png",
                    gamdom: "/images/uploads/gambling/casinos/gamdom_black_2.png",
                    fairspin: "/images/uploads/gambling/casinos/fairspin_logo_1.png",
                    felixspin: "/images/uploads/gambling/casinos/felixspin_1_logo.png",
                    flush: "/images/uploads/gambling/casinos/flush_logo_1.png",
                    fortunejack: "/images/uploads/gambling/casinos/fj_may_1.png",
                    mbit: "/images/uploads/gambling/casinos/d/logo-color.svg",
                    luckywhale: "/images/uploads/gambling/casinos/d/luckywhale.png",
                    kos: "/images/uploads/gambling/casinos/d/kos_updated_logo.png",
                    jetton: "/images/uploads/gambling/casinos/jetton_logo_1.png",
                    goldenpanda: "/images/uploads/gambling/casinos/goldenpanda_logo.svg",
                    goldbet: "/images/uploads/gambling/goldbet_logo.svg",
                    jackbit: "/images/uploads/gambling/casinos/d/jackbit_logo.png",
                    gamegram: "/images/uploads/gambling/casinos/gamegram_1.png",
                    heybets: "/images/uploads/gambling/casinos/heybeats_1.png",
                    howl: "/images/uploads/gambling/casinos/howl_1.png",
                    hugewin: "/images/uploads/gambling/casinos/hugewin_1.png",
                    instantcasino: "/images/uploads/gambling/casinos/instant-casino_1.png",
                    luckyblock: "/images/uploads/gambling/casinos/luckyblock_1.png",
                    megadice: "/images/uploads/gambling/casinos/megadice_1.png",
                    sportbet: "/images/uploads/gambling/casinos/d/sport_bet_up_logo.png",
                    toshibet: "/images/uploads/gambling/casinos/toshibet_logo.svg",
                    vipcasino: "/images/uploads/gambling/casinos/vip_logo_1.png",
                    mystake: "/images/uploads/gambling/casinos/d/mystake-darkbg.png",
                    megapari: "/images/uploads/gambling/casinos/megapari_logo_1.png",
                    "playbet.io": "/images/uploads/gambling/casinos/playbet_1.png",
                    qpbet: "/images/uploads/gambling/casinos/qpbet_logo_1.png",
                    rainbet: "/images/uploads/gambling/casinos/rainbet_logo_1.png",
                    rakebit: "/images/uploads/gambling/casinos/rakebit_1.png",
                    roobet: "/images/uploads/gambling/casinos/roobet_logo_1.png",
                    shock: "/images/uploads/gambling/casinos/shock_1.png",
                    shuffle: "/images/uploads/gambling/casinos/shuffle_1.png",
                    spinly: "/images/uploads/gambling/casinos/spinly_1.png",
                    sportsbetio: "/images/uploads/gambling/casinos/sportdbet_io.png",
                    stake: "/images/uploads/gambling/casinos/stake_1.png",
                    telbet: "/images/uploads/gambling/casinos/telbet_1.png",
                    "tg.casino": "/images/uploads/gambling/casinos/tgcasino_1.png",
                    tp: "/images/uploads/gambling/casinos/thunderpick_1.png",
                    vave: "/images/uploads/gambling/casinos/vave_logo_1.png",
                    wikibet: "/images/uploads/gambling/casinos/wikibet_logo.jpg",
                    "win.casino": "/images/uploads/awards/wincasino_logo.png",
                    winna: "/images/uploads/gambling/casinos/winna_logo.gif",
                    winwinbet: "/images/uploads/gambling/casinos/winwin_1.png",
                    Wikibet: "/images/uploads/gambling/casinos/wikibet_logo_1.png",
                    wildio: "/images/uploads/gambling/casinos/wildo_1.png",
                    wildtornado: "/images/uploads/gambling/casinos/wild_tornado.png",
                    willbet: "/images/uploads/gambling/casinos/willbet_1.png",
                    winz: "/images/uploads/gambling/casinos/winz_1.png",
                    ybets: "/images/uploads/gambling/casinos/ybets_1.png",
                    yyycasino: "/images/uploads/gambling/casinos/yyy_logo_1.png",
                    bcom: "/images/uploads/gambling/casinos/bcom_casino_logo_1.png",
                    whale: "/images/uploads/gambling/casinos/whale_1.png",
                    weiss: "/images/uploads/gambling/casinos/weiss_1.png",
                    binance: "/images/uploads/Binance_logo.svg",
                    bitget: "/images/uploads/bitget_logo.png",
                    btcc: "/images/uploads/directory2024/btcc_jan_logo.png",
                    coinbase: "/images/uploads/coinbase_logo.png",
                    digitalsurge: "/images/uploads/directory2024/Digital-Surge-Logo.png",
                    "cex.io": "/images/uploads/directory2024/cex_logo_1.png",
                    coinflare: "/images/uploads/directory2024/coinflare_logo_1.png",
                    coincorner: "/images/uploads/directory2024/coincorner_logo-1.png",
                    cryptomus: "/images/uploads/directory2024/cryptomus_logo_1.png",
                    primexbt: "/images/uploads/directory2024/primex_logo_1.png",
                    rocko: "/images/uploads/directory2024/rocko_1.png",
                    kraken: "/images/uploads/kraken_logo_.png",
                    kucoin: "/images/uploads/bitcoin-exchange-directory-kucoin.png",
                    uphold: "/images/uploads/directory2024/uphold_logo_1.png",
                    verse: "/images/uploads/directory2024/verse-logo_1.png",
                    "verse-card": "/images/uploads/directory2024/verse-logo_1.png",
                    virgocx: "/images/uploads/virgo_logo.webp",
                    woox: "/images/uploads/directory2024/woox_logo_1.png",
                    woofi: "/images/uploads/directory2024/woofi_1.png",
                    voox: "/images/uploads/directory2024/voox_logo_1.png",
                    bitrefill: "/images/uploads/directory2024/bitrefill_logo-1.png",
                    gemini: "/images/uploads/directory2024/gemini_logo_2.png",
                    solcard: "/images/uploads/directory2024/solcard_1.png",
                    "xapo-bank": "/images/uploads/directory2024/xapo-bank-logo.png",
                    "phantom-wallet": "/images/uploads/phantom_logo.png",
                    rockwallet: "/images/uploads/directory2024/rockwallet_logo.png",
                    "bitcoincom-wallet": "/images/uploads/directory2024/bcom_logo.png",
                    metamask: "/images/uploads/directory2024/metamask_1.png",
                    trezor: "/images/uploads/directory2024/trezor_1.png",
                    bydfi: "/images/uploads/directory2024/bydfi-light.png"
                };
            var r = a(8711),
                d = a(61351),
                p = a(24606),
                c = a(32097);
            (0, r.default)(d.$8F).withConfig({
                displayName: "styled__CloseButton",
                componentId: "sc-9b3cma-0"
            })(["position:absolute;top:-4px;right:1.2px;cursor:pointer;color:#fff;background-color:rgb(185,180,180);border-radius:50%;z-index:3;&:hover{background-color:red;}@media (max-width:768px){right:0;}"]);
            const m = r.default.span.withConfig({
                    displayName: "styled__StickyFooterContainer",
                    componentId: "sc-9b3cma-1"
                })(["opacity:", ";visibility:", ";height:", ";transition:transform 0.3s ease-in-out,opacity 0.3s ease-in-out;position:relative;& *{box-sizing:border-box;}width:calc(100vw - 24px);align-self:center;", " ", ""], (e => {
                    let {
                        showFooter: i
                    } = e;
                    return i ? 1 : 0
                }), (e => {
                    let {
                        showFooter: i
                    } = e;
                    return i ? "visible" : "hidden"
                }), (e => {
                    let {
                        showFooter: i
                    } = e;
                    return i ? "fit-content" : "0px"
                }), p.media.md `
  width: calc(100vw - 80px);
  `, p.media.xl `
  width: calc(100vw - 158px);
  `),
                b = r.default.span.withConfig({
                    displayName: "styled__BannerWrapper",
                    componentId: "sc-9b3cma-2"
                })(["display:flex;align-items:center;padding:12px 13px 12px 28px;border-radius:100px;gap:20px;cursor:pointer;justify-content:space-between;height:56px;", ""], p.media.xl `
  height: 70px;
  gap: 40px;
  `),
                u = r.default.div.withConfig({
                    displayName: "styled__LogoWrapper",
                    componentId: "sc-9b3cma-3"
                })(["display:none;overflow:hidden;width:20%;margin-inline-end:1%;", " ", ""], p.media.md `
    display: block;
  margin-inline-end: 20%;
  padding-inline-end: 20px;
  /* width: 200px; */
  min-width: 20%; // 200px;
  `, p.media.xl `
  width: 20%;
  `),
                f = r.default.img.withConfig({
                    displayName: "styled__Logo",
                    componentId: "sc-9b3cma-4"
                })(["width:100%;max-height:50px;height:auto;object-fit:contain;max-width:100%;", ""], p.media.md `
  `),
                h = (r.default.h2.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-9b3cma-5"
                })(["font-size:24px;font-weight:700;color:#fff;margin:0;margin-right:5%;"]), r.default.div.withConfig({
                    displayName: "styled__TextWrapper",
                    componentId: "sc-9b3cma-6"
                })(["display:flex;flex-direction:column;flex:1 1 auto;min-width:0;max-width:calc(100% - 110px);", ""], p.media.md `
    max-width: calc(100% - 120px);
  `)),
                x = (r.default.p.withConfig({
                    displayName: "styled__FullText",
                    componentId: "sc-9b3cma-7"
                })(["font-size:11px;font-weight:700;color:#fff;text-align:center;width:95%;"]), r.default.div.withConfig({
                    displayName: "styled__Text",
                    componentId: "sc-9b3cma-8"
                })(["font-family:'Satoshi Variable Black';max-width:100%;font-size:18px;color:#fff;margin:0;& p{margin:0;font-size:13px;}& p:only-child{text-align:start;font-weight:800;font-size:13px;& > em{color:#54ba24;font-style:normal;font-weight:600;font-size:1.1em;}", "}& p:not(:only-child){text-align:start;> em{font-style:normal;font-weight:700;font-size:1.1em;}:first-child{margin:0;font-size:13px;line-height:1.1;font-weight:700;> em{color:#54ba24;font-size:1.2em;}}:last-child{font-size:11px;margin-top:0;}", " ", "}", " ", " ", " body.dark &{color:white;}"], p.media.xl `
      font-size: 18px;
      text-align: end;
      // margin: 4px 0 0;
      font-weight: 700;
  `, p.media.md `

      font-weight: 700;
      :first-child {
        font-size: 16px;
      }

      :last-child {
        font-size: 14px;
      }
    `, p.media.xl `

      text-align: end;
      font-weight: 700;
      :first-child {
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 4px;
      }

      :last-child {
        font-size: 14px;
        margin: 0;
      }
    `, p.media.sm `
    /* display: block; */
    /* font-size: 14px; */
    /* font-weight: 600; */
    padding-right: unset;
    /* font-size: unset; */
    word-wrap: unset;
    overflow: unset;
  `, p.media.md `
    font-size: 22px;
    /* width: max-content; */
    max-width: 100%;
    font-weight: 600px;
  `, p.media.xl `
    /* font-size: 36px; */
    max-width: 100%;
    font-weight: 600px;
  `)),
                _ = (r.default.div.withConfig({
                    displayName: "styled__SubText",
                    componentId: "sc-9b3cma-9"
                })(["color:#fff;& p{margin:18px 0;font-size:16px;}& p:only-child{font-weight:600;margin:0;& > em{color:#54ba24;font-style:normal;font-weight:600;font-size:1.1em;}", "}& p:not(:only-child){> em{font-style:normal;font-weight:700;font-size:1.1em;}:first-child{font-size:24px;line-height:30px;font-weight:700;> em{color:#54ba24;font-size:1.2em;}}", "}", " ", " body.dark &{color:white;}"], p.media.xl `
      text-align: start;
      margin: 4px 0 0;
  `, p.media.xl `
      width: max-content;

      :first-child {
        margin-top: 0;
        margin-bottom: 9px;
      }

      :last-child {
        margin: 0;
      }
  `, p.media.sm `
    display: block;
    font-size: 14px;
    font-weight: 500;
    padding-right: unset;
    font-size: unset;
    word-wrap: unset;
    overflow: unset;
  `, p.media.md `
    font-size: 16px;
  `), r.default.div.withConfig({
                    displayName: "styled__ButtonWrapper",
                    componentId: "sc-9b3cma-10"
                })(["position:relative;display:flex;align-items:center;gap:16px;width:max-content;"])),
                y = (r.default.a.withConfig({
                    displayName: "styled__ReviewBtn",
                    componentId: "sc-9b3cma-11"
                })(["background-color:white;color:black;font-size:14px;font-weight:600;padding:8px;padding:13px 18px;border:1px solid rgba(0,0,0,0.1);width:74px;border-radius:8px;text-align:center;box-shadow:rgba(0,0,0,0.16) 0px 1px 4px;transition:all 0.15s ease;&:hover{transform:translateY(-1px);box-shadow:rgba(0,0,0,0.2) 0px 1px 16px;}", ""], p.media.md `
   width: 84px;
  `), r.default.div.withConfig({
                    displayName: "styled__MobileButtonWrapper",
                    componentId: "sc-9b3cma-12"
                })(["display:flex;align-items:center;justify-content:flex-end;padding:0 8px;"]), r.default.div.withConfig({
                    displayName: "styled__BannerBorder",
                    componentId: "sc-9b3cma-13"
                })(["position:relative;border-radius:100px;border-left:4px solid transparent;border-right:4px solid transparent;&::before{content:'';position:absolute;inset:-4px;padding:2px;border-radius:inherit;z-index:0;background:linear-gradient( 90deg,#ffc703 0%,rgba(255,199,3,0.8) 25%,rgba(255,106,0,0.7) 50%,rgba(255,199,3,0.8) 75%,#ffc703 100% );background-size:400% 100%;background-position:0% 0%;animation:border-flow 10s linear infinite;}@keyframes border-flow{0%{background-position:0% 0%;}100%{background-position:100% 0%;}}& > *{position:relative;z-index:1;}"])),
                w = (r.default.div.withConfig({
                    displayName: "styled__MobileBannerBorder",
                    componentId: "sc-9b3cma-14"
                })(["position:relative;border-radius:100px;overflow:hidden;&::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient( 90deg,#ffc703,rgba(255,199,3,0.8),rgba(255,106,0,0.7),rgba(255,199,3,0.8),#ffc703 );background-size:300% 100%;animation:border-flow 3s linear infinite;border-top-left-radius:12px;border-top-right-radius:12px;z-index:1;}&::after{content:'';position:absolute;top:0;bottom:0;left:0;width:3px;background:inherit;background-size:inherit;animation:inherit;z-index:1;}&::after{left:unset;right:0;width:3px;}@keyframes border-flow{0%{background-position:100% 0;}100%{background-position:0% 0;}}"]), r.default.div.withConfig({
                    displayName: "styled__MobileBanner",
                    componentId: "sc-9b3cma-15"
                })(["padding:8px 12px;display:flex;justify-content:center;align-items:center;background-color:white;width:100%;position:relative;z-index:2;"]), (0, r.keyframes)(["0%{transform:translateY(100%);opacity:0;}100%{transform:translateY(0%);opacity:1;}"])),
                k = (0, r.keyframes)(["0%{transform:translateY(0%);opacity:1;}100%{transform:translateY(-100%);opacity:0;}"]),
                v = (0, r.default)(x).withConfig({
                    displayName: "styled__AnimatedChunk",
                    componentId: "sc-9b3cma-16"
                })(["display:", ";max-height:none;width:100%;white-space:normal;word-break:break-word;font-size:16px;font-weight:900;line-height:1.2;", " ", " ", " ", ""], (e => {
                    let {
                        phase: i
                    } = e;
                    return "hidden" === i ? "none" : "block"
                }), (e => {
                    let {
                        phase: i
                    } = e;
                    return "enter" === i && (0, r.css)(["animation:", " 0.6s ease forwards;"], w)
                }), (e => {
                    let {
                        phase: i
                    } = e;
                    return "exit" === i && (0, r.css)(["animation:", " 0.6s ease forwards;"], k)
                }), p.media.md `
    font-size: 14px;
  `, p.media.xl `
    text-align: center;
    font-size: 28px;
  `),
                C = r.default.img.withConfig({
                    displayName: "styled__LogoChunk",
                    componentId: "sc-9b3cma-17"
                })(["display:", ";max-height:41px;max-width:100%;vertical-align:middle;object-fit:contain;align-self:flex-start;", " ", " ", ""], (e => {
                    let {
                        phase: i
                    } = e;
                    return "hidden" === i ? "none" : "inline-block"
                }), (e => {
                    let {
                        phase: i
                    } = e;
                    return "enter" === i && (0, r.css)(["animation:", " 0.6s ease forwards;"], w)
                }), (e => {
                    let {
                        phase: i
                    } = e;
                    return "exit" === i && (0, r.css)(["animation:", " 0.6s ease forwards;"], k)
                }), p.media.md `
    display: none !important;
    `),
                z = r.default.a.withConfig({
                    displayName: "styled__BonusButton",
                    componentId: "sc-9b3cma-18"
                })(["position:relative;display:inline-block;padding:8px;background:", ";color:", ";border-radius:200px;text-decoration:none;z-index:1;white-space:nowrap;font-size:12px;line-height:1.1;text-shadow:0px 0.84px 0.84px 0px rgba(0,0,0,0.1);&::before{content:'';position:absolute;inset:0;padding:2px;background:repeating-linear-gradient( 90deg,#ffdba9 0%,#ff9500 25%,#ffdba9 50%,#ff9500 75%,#ffdba9 100% );background-size:200% 100%;background-repeat:repeat;background-position:0% 50%;animation:border-flow 4s linear infinite;border-radius:inherit;z-index:-1;mask:", ";mask-composite:exclude;-webkit-mask:", ";-webkit-mask-composite:xor;", "}@keyframes border-flow{0%{background-position:0% 50%;}100%{background-position:100% 50%;}}", " ", ""], (e => {
                    let {
                        black: i
                    } = e;
                    return i ? c.A.grey900 : "rgba(247, 147, 26, 1)"
                }), (e => {
                    let {
                        black: i
                    } = e;
                    return i ? "#fff" : c.A.grey900
                }), (e => {
                    let {
                        black: i
                    } = e;
                    return i ? "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)" : "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
                }), (e => {
                    let {
                        black: i
                    } = e;
                    return i ? "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)" : "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
                }), p.media.md `
      padding: 4px;
    `, p.media.md `
    font-size: 14px;
    font-weight: 700;
  `, p.media.xl `
    font-size: 18px;
    padding: 10px 23px;
  `),
                F = r.default.div.withConfig({
                    displayName: "styled__ChunkRotatorWrapper",
                    componentId: "sc-9b3cma-19"
                })(["display:flex;flex-direction:column;flex:1 1 auto;min-width:0;max-width:100%;overflow:hidden;", ""], p.media.xl `
    align-items: end;
  `);
            var E = a(31110),
                B = a(45458);
            var j = e => {
                let {
                    chunks: i,
                    logoSrc: a,
                    logoAlt: n
                } = e;
                const {
                    0: t,
                    1: s
                } = (0, o.useState)(0), {
                    0: l,
                    1: g
                } = (0, o.useState)("enter"), r = a ? [{
                    type: "logo",
                    key: "logo",
                    src: a,
                    alt: n
                }].concat((0, B.A)(i.map((e => ({
                    type: "text",
                    key: e,
                    text: e
                }))))) : i.map((e => ({
                    type: "text",
                    key: e,
                    text: e
                })));
                return (0, o.useEffect)((() => {
                    const e = setTimeout((() => g("exit")), 3e3),
                        i = setTimeout((() => {
                            g("hidden"), s((e => {
                                var i;
                                const a = (null === (i = window) || void 0 === i ? void 0 : i.innerWidth) < p.Breakpoints.md,
                                    o = (e + 1) % r.length;
                                return a || "logo" !== r[o].type ? o : (e + 2) % r.length
                            })), g("enter")
                        }), 3600);
                    return () => {
                        clearTimeout(e), clearTimeout(i)
                    }
                }), [t]), o.createElement(F, null, r.map(((e, i) => {
                    const a = i === t;
                    return "logo" === e.type ? o.createElement(C, {
                        key: e.key,
                        src: e.src,
                        alt: e.alt,
                        phase: a ? l : "hidden"
                    }) : o.createElement(v, {
                        key: e.key,
                        phase: a ? l : "hidden"
                    }, e.text)
                })))
            };
            const I = (0, r.keyframes)(["0%{transform:translateY(0px);}50%{transform:translateY(-8px);}100%{transform:translateY(0px);}"]),
                N = r.default.div.withConfig({
                    displayName: "FloatingCoins__Cointainer",
                    componentId: "sc-1k08rys-0"
                })(["position:absolute;inset-inline-end:0;inset-inline-end:80px;height:100%;top:0;width:80px;", " ", ""], p.media.md `
  inset-inline-start: 25%; // calc(200px + 10%);
  width: 120px;
    /* position: relative; */
  `, p.media.xl `
  inset-inline-start: 25%; // calc(344px + 10%);
  /* width: 120px; */
    /* position: relative; */
  `),
                A = r.default.div.withConfig({
                    displayName: "FloatingCoins__Coins",
                    componentId: "sc-1k08rys-1"
                })(["height:100%;width:100%;position:absolute;top:-0;overflow:hidden;", " ", ""], p.media.md `
  width: 100px;
  inset-inline-start: 10px;
  `, p.media.xl `
  width: 100px;
  inset-inline-start: 80px;
  `),
                O = r.default.img.withConfig({
                    displayName: "FloatingCoins__Front",
                    componentId: "sc-1k08rys-2"
                })(["inset-inline-start:0;position:absolute;top:-10px;z-index:3;width:30px;height:auto;animation:", " 3s ease-in-out infinite;animation-delay:1s;", " ", ""], I, p.media.md `
  width: 43px;
  /* inset-inline-start: 250px; */
  `, p.media.xl `
  /* inset-inline-start: 400px; */
  width: 73px;
  `),
                S = r.default.img.withConfig({
                    displayName: "FloatingCoins__Back",
                    componentId: "sc-1k08rys-3"
                })(["z-index:-1;position:absolute;inset-inline-end:0;width:40px;height:auto;top:-9px;animation-delay:2s;animation:", " 3s ease-in-out infinite;", " ", ""], I, p.media.md `
  width: 52px;
  `, p.media.xl `
  top: -29px;
  width: 92px;
  `),
                L = (0, r.default)(S).withConfig({
                    displayName: "FloatingCoins__Bottom",
                    componentId: "sc-1k08rys-4"
                })(["top:unset;bottom:-15px;inset-inline-end:20px;animation-direction:reverse;animation-delay:1s;", ""], p.media.xl `
  bottom: -49px;
  `);
            var M = () => o.createElement(N, null, o.createElement(O, {
                alt: "btc",
                src: "/images/uploads/gambling/casinos/d/floating_btc.png"
            }), o.createElement(A, null, o.createElement(S, {
                alt: "avax",
                src: "/images/uploads/gambling/casinos/d/floating_avax.png"
            }), o.createElement(L, {
                alt: "usdt",
                src: "/images/uploads/gambling/casinos/d/floating_usdt.png"
            })));
            var D = e => {
                var i, a, r;
                let {
                    showFooter: d,
                    type: p,
                    currentCasino: c,
                    pathname: w
                } = e;
                const {
                    locale: k
                } = (0, n.A)(), {
                    0: v,
                    1: C
                } = (0, o.useState)(0), F = (0, o.useMemo)((() => "string" == typeof w && /\/reviews\/[^#]/.test(w)), [w]), B = (0, t.useStaticQuery)("479602517"), I = (0, o.useRef)(!1), N = (0, o.useMemo)((() => {
                    let e = null,
                        i = null;
                    const {
                        edges: a
                    } = B.allFile;
                    for (let o = 0; o < a.length; o += 1) {
                        const n = a[o].node.childMarkdownRemark.frontmatter;
                        n.locale === k ? e = n : "en" === n.locale && (i = n)
                    }
                    return e || i
                }), [B.allFile, k]), {
                    casinos: A
                } = N, O = ["mystake", "cloudbet", "betpanda", "cryptorino"], S = ["mystake", "bcgame", "betpanda", "cryptorino"], L = "Gambling" === p ? A.filter((e => O.includes(e.id.toLowerCase()))) : A.filter((e => S.includes(e.id.toLowerCase()))), D = (0, o.useCallback)((e => e && 0 !== e.length ? Math.floor(Math.random() * e.length) : 0), []);
                (0, o.useEffect)((() => {
                    C(D(L))
                }), [L, D]);
                const W = L && L.length > 0 ? L[v] : null;
                let T = null != c && c.id ? A.find((e => e.id === c.id)) : null;
                var $;
                T || (T = c ? {
                    id: c.id,
                    logoAlt: c.logo ? c.logo.alt : c.id,
                    logoLight: c.logo ? c.logo.source : "",
                    logoDark: null !== ($ = g[c.id.toLowerCase()]) && void 0 !== $ ? $ : "",
                    currencies: c.currencies,
                    fullText: c.text,
                    text: c.text,
                    subText: "",
                    link: c.link,
                    reviewLink: "",
                    playButton: A[0].playButton,
                    reviewButton: A[0].reviewButton,
                    title: c.title
                } : null);
                const P = (0, o.useCallback)((e => {
                    if (window.open(e, "_blank"), !I.current) {
                        const i = `[StickyFooter] Pathname: ${w}\n       Link: ${F?T.link:e}\n      `;
                        I.current = !0, (0, E.d)(i)
                    }
                }), []);
                if (!W && !F || F && !T) return null;
                const Y = F ? T : W,
                    R = null !== (i = s[Y.id.toLowerCase()]) && void 0 !== i ? i : s.default,
                    q = l[Y.id.toLowerCase()] || {};
                return o.createElement(m, {
                    showFooter: d
                }, o.createElement(y, null, o.createElement(b, {
                    href: Y.link,
                    target: "_blank",
                    style: {
                        backgroundImage: R.desktop,
                        height: null != Y && null !== (a = Y.chunks) && void 0 !== a && a.length ? void 0 : "unset"
                    },
                    onClick: () => P(Y.link)
                }, o.createElement(u, null, o.createElement(f, {
                    alt: Y.logoAlt,
                    src: Y.logoDark
                })), o.createElement(M, null), o.createElement(h, null, null != Y && null !== (r = Y.chunks) && void 0 !== r && r.length ? o.createElement(j, {
                    chunks: Y.chunks,
                    logoSrc: Y.logoDark,
                    logoAlt: Y.logoAlt
                }) : o.createElement(x, {
                    dangerouslySetInnerHTML: {
                        __html: (G = Y.text, G ? G.startsWith("<p>") ? G : `<p>${G}</p>` : "")
                    }
                })), o.createElement(_, null, o.createElement(z, Object.assign({
                    link: Y.link,
                    text: Y.playButton,
                    href: Y.link,
                    target: "_blank"
                }, q), Y.playButton)))));
                var G
            }
        },
        48701: function(e, i, a) {
            a.d(i, {
                B: function() {
                    return n
                }
            });
            const o = ["vipcasino"],
                n = e => "string" == typeof e && o.includes(e.toLowerCase())
        },
        44286: function(e, i, a) {
            a.d(i, {
                i: function() {
                    return n
                }
            });
            const o = ["libertex", "coincorner"],
                n = function(e) {
                    return void 0 === e && (e = ""), o.includes(e.toLowerCase())
                }
        },
        32097: function(e, i, a) {
            a.d(i, {
                A: function() {
                    return t
                },
                z: function() {
                    return s
                }
            });
            var o = a(8711),
                n = a(24606);
            const t = {
                    orange900: "#693000",
                    orange500: "#FF9500",
                    orange100: "#FFE2C8",
                    orange50: "#FAF2E8",
                    blue900: "#00125C",
                    blue500: "#4169E1",
                    blue100: "#CCD9FD",
                    blue50: "#E8EDFA",
                    grey900: "#1C1C1C",
                    grey700: "#67656E",
                    grey500: "#96949C",
                    grey100: "#C5C2CC",
                    grey50: "#F0F0F5",
                    purple900: "#3A0069",
                    purple500: "#A395CC",
                    purple100: "#E0D0F5",
                    purple50: "#F7F0FA",
                    green900: "#10464C",
                    green500: "#2AA5A5",
                    green100: "#B9E5DE",
                    green50: "#E6F7F4",
                    red900: "#650009",
                    red500: "#E84142",
                    red100: "#FCD7CC",
                    red50: "#FAECE8"
                },
                s = (0, o.createGlobalStyle)(["html{scroll-behavior:smooth;}html,body,___gatsby,___gatsby > div{font-family:", ",sans-serif;margin:0;padding:0;color:", ";font-size:14px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;background-color:#fff;@media screen and (min-width:", 'px){font-size:20px;}}div{box-sizing:border-box;}h1{font-family:"Elza Condensed Black",sans-serif;color:', ';}html[lang="ru"] *,html[lang="uk"] *,html[lang="vn"] *{font-family:"Noto Sans",sans-serif !important;font-stretch:condensed !important;}p,a{font-family:"Satoshi Variable",sans-serif;font-weight:500;font-size:16px;line-height:135%;letter-spacing:-2%;}a{color:', ";text-decoration:none;font-weight:600;}.weiss-offer{margin:40px auto;display:flex;flex-direction:column;max-width:100%;& > img{display:block;max-width:100%;}", "}"], (e => {
                    let {
                        theme: i
                    } = e;
                    return i.typography.fontFamily
                }), (e => {
                    let {
                        theme: i
                    } = e;
                    return i.palette.text.default
                }), (e => {
                    let {
                        theme: i
                    } = e;
                    return i.breakpoints.md
                }), t.grey900, t.blue500, n.media.md `
      flex-direction: row;

      & > img {
      max-width: 33%;
      }
    `)
        }
    }
]);