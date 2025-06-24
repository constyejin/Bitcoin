/*! For license information please see app-24bc2ba294fc3f887dd1.js.LICENSE.txt */
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [3524], {
        36289: function(t, a) {
            "use strict";
            a.A = function(t) {
                var a = Object.create(null);
                return function(e) {
                    return void 0 === a[e] && (a[e] = t(e)), a[e]
                }
            }
        },
        96395: function(t, a) {
            "use strict";
            a.T = void 0;
            a.T = (t, a = "always") => {
                const e = t.endsWith(".html"),
                    h = t.endsWith(".xml"),
                    i = t.endsWith(".pdf");
                return "/" === t ? t : ((e || h || i) && (a = "never"), "always" === a ? t.endsWith("/") ? t : `${t}/` : "never" === a && t.endsWith("/") ? t.slice(0, -1) : t)
            }
        },
        97035: function(t, a, e) {
            "use strict";
            a.RV = a.z_ = void 0;
            var h = e(33215);
            a.z_ = h.ScrollHandler;
            var i = e(73721);
            a.RV = i.useScrollRestoration
        },
        33215: function(t, a, e) {
            "use strict";
            var h = e(24994);
            a.__esModule = !0, a.ScrollHandler = a.ScrollContext = void 0;
            var i = h(e(12475)),
                r = h(e(6221)),
                n = function(t, a) {
                    if (!a && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var e = o(a);
                    if (e && e.has(t)) return e.get(t);
                    var h = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in t)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                            var n = i ? Object.getOwnPropertyDescriptor(t, r) : null;
                            n && (n.get || n.set) ? Object.defineProperty(h, r, n) : h[r] = t[r]
                        }
                    h.default = t, e && e.set(t, h);
                    return h
                }(e(96540)),
                s = h(e(5556)),
                c = e(74351);

            function o(t) {
                if ("function" != typeof WeakMap) return null;
                var a = new WeakMap,
                    e = new WeakMap;
                return (o = function(t) {
                    return t ? e : a
                })(t)
            }
            var g = n.createContext(new c.SessionStorage);
            a.ScrollContext = g, g.displayName = "GatsbyScrollContext";
            var m = function(t) {
                function a() {
                    for (var a, e = arguments.length, h = new Array(e), r = 0; r < e; r++) h[r] = arguments[r];
                    return (a = t.call.apply(t, [this].concat(h)) || this)._stateStorage = new c.SessionStorage, a._isTicking = !1, a._latestKnownScrollY = 0, a.scrollListener = function() {
                        a._latestKnownScrollY = window.scrollY, a._isTicking || (a._isTicking = !0, requestAnimationFrame(a._saveScroll.bind((0, i.default)(a))))
                    }, a.windowScroll = function(t, e) {
                        a.shouldUpdateScroll(e, a.props) && window.scrollTo(0, t)
                    }, a.scrollToHash = function(t, e) {
                        var h = document.getElementById(t.substring(1));
                        h && a.shouldUpdateScroll(e, a.props) && h.scrollIntoView()
                    }, a.shouldUpdateScroll = function(t, e) {
                        var h = a.props.shouldUpdateScroll;
                        return !h || h.call((0, i.default)(a), t, e)
                    }, a
                }(0, r.default)(a, t);
                var e = a.prototype;
                return e._saveScroll = function() {
                    var t = this.props.location.key || null;
                    t && this._stateStorage.save(this.props.location, t, this._latestKnownScrollY), this._isTicking = !1
                }, e.componentDidMount = function() {
                    var t;
                    window.addEventListener("scroll", this.scrollListener);
                    var a = this.props.location,
                        e = a.key,
                        h = a.hash;
                    e && (t = this._stateStorage.read(this.props.location, e)), h ? this.scrollToHash(decodeURI(h), void 0) : t && this.windowScroll(t, void 0)
                }, e.componentWillUnmount = function() {
                    window.removeEventListener("scroll", this.scrollListener)
                }, e.componentDidUpdate = function(t) {
                    var a, e = this.props.location,
                        h = e.hash,
                        i = e.key;
                    i && (a = this._stateStorage.read(this.props.location, i)), h ? this.scrollToHash(decodeURI(h), t) : this.windowScroll(a, t)
                }, e.render = function() {
                    return n.createElement(g.Provider, {
                        value: this._stateStorage
                    }, this.props.children)
                }, a
            }(n.Component);
            a.ScrollHandler = m, m.propTypes = {
                shouldUpdateScroll: s.default.func,
                children: s.default.element.isRequired,
                location: s.default.object.isRequired
            }
        },
        74351: function(t, a) {
            "use strict";
            a.__esModule = !0, a.SessionStorage = void 0;
            var e = "___GATSBY_REACT_ROUTER_SCROLL",
                h = function() {
                    function t() {}
                    var a = t.prototype;
                    return a.read = function(t, a) {
                        var h = this.getStateKey(t, a);
                        try {
                            var i = window.sessionStorage.getItem(h);
                            return i ? JSON.parse(i) : 0
                        } catch (r) {
                            return window && window[e] && window[e][h] ? window[e][h] : 0
                        }
                    }, a.save = function(t, a, h) {
                        var i = this.getStateKey(t, a),
                            r = JSON.stringify(h);
                        try {
                            window.sessionStorage.setItem(i, r)
                        } catch (n) {
                            window && window[e] || (window[e] = {}), window[e][i] = JSON.parse(r)
                        }
                    }, a.getStateKey = function(t, a) {
                        var e = "@@scroll|" + t.pathname;
                        return null == a ? e : e + "|" + a
                    }, t
                }();
            a.SessionStorage = h
        },
        73721: function(t, a, e) {
            "use strict";
            a.__esModule = !0, a.useScrollRestoration = function(t) {
                var a = (0, r.useLocation)(),
                    e = (0, i.useContext)(h.ScrollContext),
                    n = (0, i.useRef)(null);
                return (0, i.useLayoutEffect)((function() {
                    if (n.current) {
                        var h = e.read(a, t);
                        n.current.scrollTo(0, h || 0)
                    }
                }), [a.key]), {
                    ref: n,
                    onScroll: function() {
                        n.current && e.save(a, t, n.current.scrollTop)
                    }
                }
            };
            var h = e(33215),
                i = e(96540),
                r = e(86462)
        },
        2311: function(t, a, e) {
            "use strict";
            a.__esModule = !0, a.onInitialClientRender = void 0;
            e(75535), e(99300);
            a.onInitialClientRender = () => {}
        },
        53309: function(t, a) {
            "use strict";
            a.__esModule = !0, a.getForwards = function(t) {
                return null == t ? void 0 : t.flatMap((t => (null == t ? void 0 : t.forward) || []))
            }
        },
        99300: function(t, a, e) {
            "use strict";
            a.__esModule = !0, a.injectPartytownSnippet = function(t) {
                if (!t.length) return;
                const a = document.querySelector("script[data-partytown]"),
                    e = document.querySelector('iframe[src*="~partytown/partytown-sandbox-sw"]');
                a && a.remove();
                e && e.remove();
                const r = (0, i.getForwards)(t),
                    n = document.createElement("script");
                n.dataset.partytown = "", n.innerHTML = (0, h.partytownSnippet)({
                    forward: r
                }), document.head.appendChild(n)
            };
            var h = e(14656),
                i = e(53309)
        },
        96877: function(t, a, e) {
            a.components = {
                "component---src-pages-404-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(3496), e.e(5125)]).then(e.bind(e, 64483)),
                "component---src-pages-about-us-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(4952), e.e(6435)]).then(e.bind(e, 51543)),
                "component---src-pages-advertise-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(1676)]).then(e.bind(e, 55489)),
                "component---src-pages-bitcoin-atm-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(4952), e.e(9402)]).then(e.bind(e, 37317)),
                "component---src-pages-bitcoin-blackjack-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(7308), e.e(8742)]).then(e.bind(e, 91704)),
                "component---src-pages-bitcoin-card-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(1596)]).then(e.bind(e, 52285)),
                "component---src-pages-bitcoin-cash-projects-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(446)]).then(e.bind(e, 31991)),
                "component---src-pages-bitcoin-cash-register-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4214), e.e(1829), e.e(2209)]).then(e.bind(e, 58747)),
                "component---src-pages-bitcoin-cash-register-service-terms-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(4885)]).then(e.bind(e, 89820)),
                "component---src-pages-bitcoin-casino-bonus-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(291)]).then(e.bind(e, 8880)),
                "component---src-pages-bitcoin-casino-free-spins-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(8458)]).then(e.bind(e, 66316)),
                "component---src-pages-bitcoin-dice-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(7308), e.e(9353)]).then(e.bind(e, 9396)),
                "component---src-pages-bitcoin-live-casino-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(8)]).then(e.bind(e, 26281)),
                "component---src-pages-bitcoin-poker-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(3399)]).then(e.bind(e, 18273)),
                "component---src-pages-bitcoin-roulette-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(7308), e.e(8350)]).then(e.bind(e, 2817)),
                "component---src-pages-bitcoin-slots-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(7308), e.e(7695)]).then(e.bind(e, 33644)),
                "component---src-pages-canada-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(5354), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(751), e.e(4166), e.e(5721), e.e(6181)]).then(e.bind(e, 65520)),
                "component---src-pages-canary-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(2135)]).then(e.bind(e, 33750)),
                "component---src-pages-cashfusion-fund-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(751), e.e(2748)]).then(e.bind(e, 24574)),
                "component---src-pages-cert-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(4421)]).then(e.bind(e, 50582)),
                "component---src-pages-contact-us-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(4980)]).then(e.bind(e, 85913)),
                "component---src-pages-events-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4214), e.e(6006)]).then(e.bind(e, 3965)),
                "component---src-pages-exchange-announcement-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8346)]).then(e.bind(e, 4846)),
                "component---src-pages-full-nodes-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(5222)]).then(e.bind(e, 31068)),
                "component---src-pages-giftcard-history-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(5109), e.e(2664), e.e(1782)]).then(e.bind(e, 23204)),
                "component---src-pages-giftcard-index-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8563), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(5109), e.e(2664), e.e(6658)]).then(e.bind(e, 98737)),
                "component---src-pages-index-js": () => Promise.all([e.e(6593), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3958), e.e(8035), e.e(6449), e.e(4223), e.e(7212), e.e(9046), e.e(742), e.e(4166), e.e(5721), e.e(8293)]).then(e.bind(e, 16512)),
                "component---src-pages-jobs-index-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8086)]).then(e.bind(e, 64869)),
                "component---src-pages-jobs-solidity-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(983)]).then(e.bind(e, 21449)),
                "component---src-pages-manage-account-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(4952), e.e(9518)]).then(e.bind(e, 45109)),
                "component---src-pages-manage-email-subscription-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(6434), e.e(5273)]).then(e.bind(e, 18936)),
                "component---src-pages-merchant-solutions-brick-mortar-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4214), e.e(4333), e.e(220)]).then(e.bind(e, 98039)),
                "component---src-pages-merchant-solutions-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4214), e.e(4333), e.e(2178)]).then(e.bind(e, 72904)),
                "component---src-pages-merchant-solutions-online-business-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4214), e.e(4333), e.e(5767)]).then(e.bind(e, 27897)),
                "component---src-pages-newsletters-btc-research-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(1642), e.e(2115)]).then(e.bind(e, 52981)),
                "component---src-pages-newsletters-games-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(1704), e.e(8524)]).then(e.bind(e, 44804)),
                "component---src-pages-newsletters-index-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(6208)]).then(e.bind(e, 87329)),
                "component---src-pages-newsletters-price-analysis-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(7984), e.e(8430)]).then(e.bind(e, 75428)),
                "component---src-pages-newsletters-product-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(4367), e.e(2216)]).then(e.bind(e, 67540)),
                "component---src-pages-newsletters-verse-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(479), e.e(3570)]).then(e.bind(e, 95018)),
                "component---src-pages-newsletters-week-in-review-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(853), e.e(7623)]).then(e.bind(e, 32613)),
                "component---src-pages-partners-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(4952), e.e(940)]).then(e.bind(e, 53801)),
                "component---src-pages-research-btc-research-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(1642), e.e(9638)]).then(e.bind(e, 25790)),
                "component---src-pages-research-games-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(1704), e.e(815)]).then(e.bind(e, 39117)),
                "component---src-pages-research-index-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(2783)]).then(e.bind(e, 32317)),
                "component---src-pages-research-price-analysis-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(7984), e.e(7687)]).then(e.bind(e, 58015)),
                "component---src-pages-research-product-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(4367), e.e(8919)]).then(e.bind(e, 73821)),
                "component---src-pages-research-verse-updates-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(479), e.e(3625)]).then(e.bind(e, 88115)),
                "component---src-pages-research-week-in-review-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(4952), e.e(7883), e.e(853), e.e(8134)]).then(e.bind(e, 2450)),
                "component---src-pages-rewards-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(7529)]).then(e.bind(e, 1246)),
                "component---src-pages-sitemap-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(8566)]).then(e.bind(e, 64694)),
                "component---src-pages-temporarily-offline-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(63)]).then(e.bind(e, 61309)),
                "component---src-pages-territory-not-supported-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(980)]).then(e.bind(e, 25838)),
                "component---src-pages-thank-you-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(3407)]).then(e.bind(e, 49363)),
                "component---src-pages-tipping-platforms-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2569)]).then(e.bind(e, 10187)),
                "component---src-pages-tools-cash-address-converter-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(751), e.e(4214), e.e(4166), e.e(6434), e.e(6372), e.e(1418)]).then(e.bind(e, 95486)),
                "component---src-pages-tools-index-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(3101), e.e(4952), e.e(4214), e.e(4516)]).then(e.bind(e, 83491)),
                "component---src-pages-tools-verify-message-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(1570), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(4166), e.e(6434), e.e(6372), e.e(442)]).then(e.bind(e, 72432)),
                "component---src-pages-tools-widgets-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(8788), e.e(7900), e.e(4214), e.e(4458)]).then(e.bind(e, 15520)),
                "component---src-pages-trike-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(6608)]).then(e.bind(e, 97148)),
                "component---src-pages-uk-warning-js": () => Promise.all([e.e(4223), e.e(5814)]).then(e.bind(e, 84395)),
                "component---src-pages-united-kingdom-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(3197), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(3101), e.e(4952), e.e(751), e.e(4214), e.e(3496), e.e(4166), e.e(5721), e.e(9208)]).then(e.bind(e, 78881)),
                "component---src-pages-verse-referrals-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(2664), e.e(3101), e.e(5610), e.e(68)]).then(e.bind(e, 97113)),
                "component---src-pages-videos-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5109), e.e(6291)]).then(e.bind(e, 82291)),
                "component---src-views-atm-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(4736)]).then(e.bind(e, 22696)),
                "component---src-views-awards-home-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(9983), e.e(1883)]).then(e.bind(e, 47226)),
                "component---src-views-awards-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(9983), e.e(2161)]).then(e.bind(e, 71917)),
                "component---src-views-bitcoin-casino-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(3342), e.e(5238), e.e(7551), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(5757), e.e(2877), e.e(14), e.e(3378), e.e(8985), e.e(9472)]).then(e.bind(e, 37461)),
                "component---src-views-buy-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(2197)]).then(e.bind(e, 29347)),
                "component---src-views-crypto-news-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(5109), e.e(1189)]).then(e.bind(e, 20612)),
                "component---src-views-directory-2024-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(7551), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(14), e.e(3345), e.e(3378), e.e(4680), e.e(1965)]).then(e.bind(e, 32379)),
                "component---src-views-directory-cards-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(9293), e.e(4755)]).then(e.bind(e, 10895)),
                "component---src-views-directory-conferences-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(9293), e.e(59)]).then(e.bind(e, 69026)),
                "component---src-views-directory-exchanges-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(9293), e.e(8392)]).then(e.bind(e, 64713)),
                "component---src-views-directory-gambling-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(9293), e.e(6581)]).then(e.bind(e, 13633)),
                "component---src-views-directory-mining-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(9293), e.e(9912)]).then(e.bind(e, 46727)),
                "component---src-views-directory-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(742), e.e(9293), e.e(3345), e.e(4680), e.e(985)]).then(e.bind(e, 52812)),
                "component---src-views-directory-wallets-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(8808), e.e(1171), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(5757), e.e(3496), e.e(14), e.e(9293), e.e(7268)]).then(e.bind(e, 13362)),
                "component---src-views-gambling-review-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(7551), e.e(4223), e.e(7212), e.e(4046), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(14), e.e(3345), e.e(3378), e.e(1507)]).then(e.bind(e, 204)),
                "component---src-views-gambling-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(7551), e.e(4223), e.e(7212), e.e(4046), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(14), e.e(3345), e.e(3378), e.e(9300)]).then(e.bind(e, 59843)),
                "component---src-views-germany-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(4976)]).then(e.bind(e, 55200)),
                "component---src-views-get-started-templates-article-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(3101), e.e(8788), e.e(1497), e.e(4952), e.e(4214), e.e(5757), e.e(14), e.e(8985), e.e(3796), e.e(1829), e.e(1462)]).then(e.bind(e, 96059)),
                "component---src-views-get-started-templates-page-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(3101), e.e(4952), e.e(4214), e.e(5757), e.e(14), e.e(8985), e.e(1643)]).then(e.bind(e, 12833)),
                "component---src-views-legal-templates-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(8788), e.e(1497), e.e(3796), e.e(8577)]).then(e.bind(e, 40928)),
                "component---src-views-podcast-podcast-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(7814)]).then(e.bind(e, 88281)),
                "component---src-views-price-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(4591)]).then(e.bind(e, 24614)),
                "component---src-views-qr-qr-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(2664), e.e(3101), e.e(751), e.e(4214), e.e(5610), e.e(6442)]).then(e.bind(e, 43612)),
                "component---src-views-sell-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(751), e.e(2877), e.e(5183)]).then(e.bind(e, 78627)),
                "component---src-views-swaps-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(8788), e.e(1497), e.e(7900), e.e(6182), e.e(5757), e.e(14), e.e(8985), e.e(3817)]).then(e.bind(e, 87635)),
                "component---src-views-trumps-template-template-js": () => Promise.all([e.e(6593), e.e(1869), e.e(4843), e.e(986), e.e(8170), e.e(1257), e.e(2458), e.e(7500), e.e(3342), e.e(5238), e.e(4223), e.e(7212), e.e(4046), e.e(9046), e.e(5688), e.e(3904), e.e(742), e.e(2664), e.e(751), e.e(2877), e.e(4734)]).then(e.bind(e, 58971))
            }
        },
        79377: function(t, a, e) {
            t.exports = [{
                plugin: e(27914),
                options: {
                    plugins: [],
                    name: "Bitcoin.com",
                    short_name: "Bitcoin.com",
                    start_url: "/",
                    display: "fullscreen",
                    background_color: "#fdfdfd",
                    theme_color: "#111724",
                    icon: "static/images/favicon-new@2x.png",
                    icons: [{
                        src: "icons/Icon-16x16-new.svg",
                        sizes: "16x16",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-32x32-new.svg",
                        sizes: "32x32",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-48x48-new.svg",
                        sizes: "48x48",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-64x64-new.png",
                        sizes: "64x64",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-96x96-new.png",
                        sizes: "96x96",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-144x144-new.svg",
                        sizes: "144x144",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-192x192-new.png",
                        sizes: "192x192",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-256x256-new.png",
                        sizes: "256x256",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-384x384-new.png",
                        sizes: "384x384",
                        type: "image/png"
                    }, {
                        src: "icons/Icon-512x512-new.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable"
                    }],
                    crossOrigin: "use-credentials",
                    legacy: !0,
                    theme_color_in_head: !0,
                    cache_busting_mode: "query",
                    include_favicon: !0,
                    cacheDigest: "9467ec39c549c983412cc1d76fab415f"
                }
            }, {
                plugin: e(52039),
                options: {
                    plugins: [],
                    displayName: !0,
                    fileName: !0,
                    minify: !0,
                    namespace: "",
                    transpileTemplateLiterals: !0,
                    topLevelImportPaths: [],
                    pure: !1,
                    disableVendorPrefixes: !1
                }
            }, {
                plugin: e(75616),
                options: {
                    plugins: [],
                    maxWidth: 590,
                    linkImagesToOriginal: !1,
                    showCaptions: !1,
                    markdownCaptions: !1,
                    backgroundColor: "white",
                    quality: 50,
                    withWebp: !1,
                    withAvif: !1,
                    loading: "lazy",
                    decoding: "async",
                    disableBgImageOnAlpha: !1,
                    disableBgImage: !1
                }
            }, {
                plugin: e(18710),
                options: {
                    plugins: [],
                    trackingIds: ["GTM-5N6TL56"],
                    pluginConfig: {
                        head: !0,
                        respectDNT: !1,
                        exclude: [],
                        origin: "https://www.googletagmanager.com",
                        delayOnRouteUpdate: 0
                    },
                    gtagConfig: {}
                }
            }, {
                plugin: e(62426),
                options: {
                    plugins: [],
                    htmlTitle: "Bitcoin.com | Content Manager",
                    htmlFavicon: "/home/runner/_work/bitcoincom-www/bitcoincom-www/static/icons/icon-512x512.png",
                    manualInit: !0,
                    modulePath: "/home/runner/_work/bitcoincom-www/bitcoincom-www/src/cms/cms.js"
                }
            }, {
                plugin: e(35442),
                options: {
                    plugins: []
                }
            }, {
                plugin: e(2311),
                options: {
                    plugins: []
                }
            }]
        },
        60020: function(t, a, e) {
            const h = e(79377),
                {
                    getResourceURLsForPathname: i,
                    loadPage: r,
                    loadPageSync: n
                } = e(56814).Zf;
            a.N = function(t, a, e, s) {
                void 0 === a && (a = {});
                let c = h.map((e => {
                    if (!e.plugin[t]) return;
                    a.getResourceURLsForPathname = i, a.loadPage = r, a.loadPageSync = n;
                    const h = e.plugin[t](a, e.options);
                    return h && s && (a = s({
                        args: a,
                        result: h,
                        plugin: e
                    })), h
                }));
                return c = c.filter((t => void 0 !== t)), c.length > 0 ? c : e ? [e] : []
            }, a.v = (t, a, e) => h.reduce(((e, h) => h.plugin[t] ? e.then((() => h.plugin[t](a, h.options))) : e), Promise.resolve())
        },
        50700: function(t, a) {
            a.U = () => ""
        },
        79369: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return h
                }
            });
            var h = function(t) {
                return t = t || Object.create(null), {
                    on: function(a, e) {
                        (t[a] || (t[a] = [])).push(e)
                    },
                    off: function(a, e) {
                        t[a] && t[a].splice(t[a].indexOf(e) >>> 0, 1)
                    },
                    emit: function(a, e) {
                        (t[a] || []).slice().map((function(t) {
                            t(e)
                        })), (t["*"] || []).slice().map((function(t) {
                            t(a, e)
                        }))
                    }
                }
            }()
        },
        88990: function(t, a, e) {
            "use strict";
            e.d(a, {
                Yl: function() {
                    return l
                },
                Hh: function() {
                    return d
                },
                UA: function() {
                    return p
                },
                QX: function() {
                    return m
                }
            });
            var h = e(86462),
                i = e(38797),
                r = t => {
                    if (void 0 === t) return t;
                    let [a, e = ""] = t.split("?");
                    return e && (e = "?" + e), "/" === a ? "/" + e : "/" === a.charAt(a.length - 1) ? a.slice(0, -1) + e : a + e
                },
                n = e(16491);
            const s = new Map;
            let c = [];
            const o = t => {
                let a = t;
                if (-1 !== t.indexOf("?")) {
                    const [e, h] = t.split("?");
                    a = `${e}?${encodeURIComponent(h)}`
                }
                const e = decodeURIComponent(a);
                return (0, i.A)(e, decodeURIComponent("")).split("#")[0]
            };

            function g(t) {
                return t.startsWith("/") || t.startsWith("https://") || t.startsWith("http://") ? t : new URL(t, window.location.href + (window.location.href.endsWith("/") ? "" : "/")).pathname
            }
            const m = t => {
                    c = t
                },
                l = t => {
                    const a = u(t),
                        e = c.map((t => {
                            let {
                                path: a,
                                matchPath: e
                            } = t;
                            return {
                                path: e,
                                originalPath: a
                            }
                        })),
                        i = (0, h.pick)(e, a);
                    return i ? r(i.route.originalPath) : null
                },
                p = t => {
                    const a = u(t),
                        e = c.map((t => {
                            let {
                                path: a,
                                matchPath: e
                            } = t;
                            return {
                                path: e,
                                originalPath: a
                            }
                        })),
                        i = (0, h.pick)(e, a);
                    return i ? i.params : {}
                },
                d = t => {
                    const a = o(g(t));
                    if (s.has(a)) return s.get(a);
                    const e = (0, n.X)(t);
                    if (e) return d(e.toPath);
                    let h = l(a);
                    return h || (h = u(t)), s.set(a, h), h
                },
                u = t => {
                    let a = o(g(t));
                    return "/index.html" === a && (a = "/"), a = r(a), a
                }
        },
        55268: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                Link: function() {
                    return s.N_
                },
                PageRenderer: function() {
                    return r()
                },
                Script: function() {
                    return j.Script
                },
                ScriptStrategy: function() {
                    return j.ScriptStrategy
                },
                Slice: function() {
                    return x
                },
                StaticQuery: function() {
                    return c.de
                },
                StaticQueryContext: function() {
                    return c.G
                },
                collectedScriptsByPage: function() {
                    return j.collectedScriptsByPage
                },
                graphql: function() {
                    return E
                },
                navigate: function() {
                    return s.oo
                },
                parsePath: function() {
                    return s.Rr
                },
                prefetchPathname: function() {
                    return S
                },
                scriptCache: function() {
                    return j.scriptCache
                },
                scriptCallbackCache: function() {
                    return j.scriptCallbackCache
                },
                useScrollRestoration: function() {
                    return n.RV
                },
                useStaticQuery: function() {
                    return c.GR
                },
                withAssetPrefix: function() {
                    return s.Zf
                },
                withPrefix: function() {
                    return s.Fe
                }
            });
            var h = e(56814),
                i = e(42549),
                r = e.n(i),
                n = e(97035),
                s = e(57078),
                c = e(7231),
                o = e(9417),
                g = e(77387),
                m = e(53954),
                l = e(63662);
            var p = e(52176);

            function d(t, a, e) {
                return d = (0, p.A)() ? Reflect.construct.bind() : function(t, a, e) {
                    var h = [null];
                    h.push.apply(h, a);
                    var i = new(Function.bind.apply(t, h));
                    return e && (0, l.A)(i, e.prototype), i
                }, d.apply(null, arguments)
            }

            function u(t) {
                var a = "function" == typeof Map ? new Map : void 0;
                return u = function(t) {
                    if (null === t || (e = t, -1 === Function.toString.call(e).indexOf("[native code]"))) return t;
                    var e;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== a) {
                        if (a.has(t)) return a.get(t);
                        a.set(t, h)
                    }

                    function h() {
                        return d(t, arguments, (0, m.A)(this).constructor)
                    }
                    return h.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: h,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, l.A)(h, t)
                }, u(t)
            }
            var b = e(96540),
                P = e(50700),
                w = e(2024);
            const f = t => {
                    let {
                        sliceId: a,
                        children: e
                    } = t;
                    const h = [b.createElement("slice-start", {
                        id: `${a}-1`
                    }), b.createElement("slice-end", {
                        id: `${a}-1`
                    })];
                    return e && (h.push(e), h.push(b.createElement("slice-start", {
                        id: `${a}-2`
                    }), b.createElement("slice-end", {
                        id: `${a}-2`
                    }))), h
                },
                v = t => {
                    let {
                        sliceName: a,
                        allowEmpty: e,
                        children: h,
                        ...i
                    } = t;
                    const r = (0, b.useContext)(w.Jr),
                        n = (0, b.useContext)(w.hr),
                        s = r[a];
                    if (!s) {
                        if (e) return null;
                        throw new Error(`Slice "${s}" for "${a}" slot not found`)
                    }
                    const c = ((t, a) => Object.keys(a).length ? `${t}-${(0,P.U)(a)}` : t)(s, i);
                    let o = n[c];
                    return o ? h && (o.hasChildren = !0) : n[c] = o = {
                        props: i,
                        sliceName: s,
                        hasChildren: !!h
                    }, b.createElement(f, {
                        sliceId: c
                    }, h)
                },
                y = t => {
                    let {
                        sliceName: a,
                        allowEmpty: e,
                        children: h,
                        ...i
                    } = t;
                    const r = (0, b.useContext)(w.Jr),
                        n = (0, b.useContext)(w.dd),
                        s = r[a],
                        c = n.get(s);
                    if (!c) {
                        if (e) return null;
                        throw new Error(`Slice "${s}" for "${a}" slot not found`)
                    }
                    return b.createElement(c.component, Object.assign({
                        sliceContext: c.sliceContext,
                        data: c.data
                    }, i), h)
                };

            function x(t) {
                {
                    const a = { ...t,
                        sliceName: t.alias
                    };
                    delete a.alias, delete a.__renderedByLocation;
                    const e = (0, b.useContext)(w.j$),
                        h = k(t);
                    if (Object.keys(h).length) throw new z("browser" === e.renderEnvironment, a.sliceName, h, t.__renderedByLocation);
                    if ("server" === e.renderEnvironment) return b.createElement(v, a);
                    if ("browser" === e.renderEnvironment) return b.createElement(y, a);
                    if ("engines" === e.renderEnvironment || "dev-ssr" === e.renderEnvironment) return b.createElement(y, a);
                    if ("slices" === e.renderEnvironment) {
                        let a = "";
                        try {
                            a = `\n\nSlice component "${e.sliceRoot.name}" (${e.sliceRoot.componentPath}) tried to render <Slice alias="${t.alias}"/>`
                        } catch {}
                        throw new Error(`Nested slices are not supported.${a}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`)
                    }
                    throw new Error(`Slice context "${e.renderEnvironment}" is not supported.`)
                }
            }
            let z = function(t) {
                function a(e, h, i, r) {
                    var n;
                    const s = Object.entries(i).map((t => {
                            let [a, e] = t;
                            return `not serializable "${e}" type passed to "${a}" prop`
                        })).join(", "),
                        c = "SlicePropsError";
                    let g = "",
                        m = "";
                    if (e) {
                        const t = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack().trim().split("\n").slice(1);
                        t[0] = t[0].trim(), g = "\n" + t.join("\n"), m = `Slice "${h}" was passed props that are not serializable (${s}).`
                    } else {
                        m = `${c}: Slice "${h}" was passed props that are not serializable (${s}).`;
                        g = `${m}\n${(new Error).stack.trim().split("\n").slice(2).join("\n")}`
                    }
                    return (n = t.call(this, m) || this).name = c, g ? n.stack = g : Error.captureStackTrace((0, o.A)(n), a), r && (n.forcedLocation = { ...r,
                        functionName: "Slice"
                    }), n
                }
                return (0, g.A)(a, t), a
            }(u(Error));
            const k = function(t, a, e, h) {
                void 0 === a && (a = {}), void 0 === e && (e = []), void 0 === h && (h = null);
                for (const [i, r] of Object.entries(t)) {
                    if (null == r || !h && "children" === i) continue;
                    const t = h ? `${h}.${i}` : i;
                    "function" == typeof r ? a[t] = typeof r : "object" == typeof r && e.indexOf(r) <= 0 && (e.push(r), k(r, a, e, t))
                }
                return a
            };
            var j = e(75535);
            const S = h.Ay.enqueue;

            function E() {
                throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")
            }
        },
        56814: function(t, a, e) {
            "use strict";
            e.d(a, {
                Wi: function() {
                    return m
                },
                N5: function() {
                    return y
                },
                Ay: function() {
                    return k
                },
                Rh: function() {
                    return S
                },
                LE: function() {
                    return j
                },
                Zf: function() {
                    return z
                },
                iC: function() {
                    return x
                }
            });
            var h = e(77387),
                i = e(45458),
                r = e(58163);
            const n = function(t) {
                    if ("undefined" == typeof document) return !1;
                    const a = document.createElement("link");
                    try {
                        if (a.relList && "function" == typeof a.relList.supports) return a.relList.supports(t)
                    } catch (e) {
                        return !1
                    }
                    return !1
                }("prefetch") ? function(t, a) {
                    return new Promise(((e, h) => {
                        if ("undefined" == typeof document) return void h();
                        const i = document.createElement("link");
                        i.setAttribute("rel", "prefetch"), i.setAttribute("href", t), Object.keys(a).forEach((t => {
                            i.setAttribute(t, a[t])
                        })), i.onload = e, i.onerror = h;
                        (document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode).appendChild(i)
                    }))
                } : function(t) {
                    return new Promise(((a, e) => {
                        const h = new XMLHttpRequest;
                        h.open("GET", t, !0), h.onload = () => {
                            200 === h.status ? a() : e()
                        }, h.send(null)
                    }))
                },
                s = {};
            var c = function(t, a) {
                    return new Promise((e => {
                        s[t] ? e() : n(t, a).then((() => {
                            e(), s[t] = !0
                        })).catch((() => {}))
                    }))
                },
                o = e(79369),
                g = e(88990);
            const m = {
                    Error: "error",
                    Success: "success"
                },
                l = t => {
                    const [a, e] = t.split("?");
                    var h;
                    return `/page-data/${"/"===a?"index":(h="/"===(h=a)[0]?h.slice(1):h).endsWith("/")?h.slice(0,-1):h}/page-data.json${e?`?${e}`:""}`
                },
                p = t => t.startsWith("//");

            function d(t, a) {
                return void 0 === a && (a = "GET"), new Promise((e => {
                    const h = new XMLHttpRequest;
                    h.open(a, t, !0), h.onreadystatechange = () => {
                        4 == h.readyState && e(h)
                    }, h.send(null)
                }))
            }
            const u = /bot|crawler|spider|crawling/i,
                b = function(t, a, e) {
                    var h;
                    void 0 === a && (a = null);
                    const i = {
                        componentChunkName: t.componentChunkName,
                        path: t.path,
                        webpackCompilationHash: t.webpackCompilationHash,
                        matchPath: t.matchPath,
                        staticQueryHashes: t.staticQueryHashes,
                        getServerDataError: t.getServerDataError,
                        slicesMap: null !== (h = t.slicesMap) && void 0 !== h ? h : {}
                    };
                    return {
                        component: a,
                        head: e,
                        json: t.result,
                        page: i
                    }
                };

            function P(t) {
                return new Promise((a => {
                    try {
                        const e = t.readRoot();
                        a(e)
                    } catch (e) {
                        if (!Object.hasOwnProperty.call(e, "_response") || !Object.hasOwnProperty.call(e, "_status")) throw e;
                        setTimeout((() => {
                            P(t).then(a)
                        }), 200)
                    }
                }))
            }
            let w = function() {
                function t(t, a) {
                    this.inFlightNetworkRequests = new Map, this.pageDb = new Map, this.inFlightDb = new Map, this.staticQueryDb = {}, this.pageDataDb = new Map, this.partialHydrationDb = new Map, this.slicesDataDb = new Map, this.sliceInflightDb = new Map, this.slicesDb = new Map, this.isPrefetchQueueRunning = !1, this.prefetchQueued = [], this.prefetchTriggered = new Set, this.prefetchCompleted = new Set, this.loadComponent = t, (0, g.QX)(a)
                }
                var a = t.prototype;
                return a.memoizedGet = function(t) {
                    let a = this.inFlightNetworkRequests.get(t);
                    return a || (a = d(t, "GET"), this.inFlightNetworkRequests.set(t, a)), a.then((a => (this.inFlightNetworkRequests.delete(t), a))).catch((a => {
                        throw this.inFlightNetworkRequests.delete(t), a
                    }))
                }, a.setApiRunner = function(t) {
                    this.apiRunner = t, this.prefetchDisabled = t("disableCorePrefetching").some((t => t))
                }, a.fetchPageDataJson = function(t) {
                    const {
                        pagePath: a,
                        retries: e = 0
                    } = t, h = l(a);
                    return this.memoizedGet(h).then((h => {
                        const {
                            status: i,
                            responseText: r
                        } = h;
                        if (200 === i) try {
                            const e = JSON.parse(r);
                            if (void 0 === e.path) throw new Error("not a valid pageData response");
                            const h = a.split("?")[1];
                            return h && !e.path.includes(h) && (e.path += `?${h}`), Object.assign(t, {
                                status: m.Success,
                                payload: e
                            })
                        } catch (n) {}
                        return 404 === i || 200 === i ? "/404.html" === a || "/500.html" === a ? Object.assign(t, {
                            status: m.Error
                        }) : this.fetchPageDataJson(Object.assign(t, {
                            pagePath: "/404.html",
                            notFound: !0
                        })) : 500 === i ? this.fetchPageDataJson(Object.assign(t, {
                            pagePath: "/500.html",
                            internalServerError: !0
                        })) : e < 3 ? this.fetchPageDataJson(Object.assign(t, {
                            retries: e + 1
                        })) : Object.assign(t, {
                            status: m.Error
                        })
                    }))
                }, a.fetchPartialHydrationJson = function(t) {
                    const {
                        pagePath: a,
                        retries: e = 0
                    } = t, h = l(a).replace(".json", "-rsc.json");
                    return this.memoizedGet(h).then((h => {
                        const {
                            status: i,
                            responseText: r
                        } = h;
                        if (200 === i) try {
                            return Object.assign(t, {
                                status: m.Success,
                                payload: r
                            })
                        } catch (n) {}
                        return 404 === i || 200 === i ? "/404.html" === a || "/500.html" === a ? Object.assign(t, {
                            status: m.Error
                        }) : this.fetchPartialHydrationJson(Object.assign(t, {
                            pagePath: "/404.html",
                            notFound: !0
                        })) : 500 === i ? this.fetchPartialHydrationJson(Object.assign(t, {
                            pagePath: "/500.html",
                            internalServerError: !0
                        })) : e < 3 ? this.fetchPartialHydrationJson(Object.assign(t, {
                            retries: e + 1
                        })) : Object.assign(t, {
                            status: m.Error
                        })
                    }))
                }, a.loadPageDataJson = function(t) {
                    const a = (0, g.Hh)(t);
                    if (this.pageDataDb.has(a)) {
                        const t = this.pageDataDb.get(a);
                        return Promise.resolve(t)
                    }
                    return this.fetchPageDataJson({
                        pagePath: a
                    }).then((t => (this.pageDataDb.set(a, t), t)))
                }, a.loadPartialHydrationJson = function(t) {
                    const a = (0, g.Hh)(t);
                    if (this.partialHydrationDb.has(a)) {
                        const t = this.partialHydrationDb.get(a);
                        return Promise.resolve(t)
                    }
                    return this.fetchPartialHydrationJson({
                        pagePath: a
                    }).then((t => (this.partialHydrationDb.set(a, t), t)))
                }, a.loadSliceDataJson = function(t) {
                    if (this.slicesDataDb.has(t)) {
                        const a = this.slicesDataDb.get(t);
                        return Promise.resolve({
                            sliceName: t,
                            jsonPayload: a
                        })
                    }
                    return d(`/slice-data/${t}.json`, "GET").then((a => {
                        const e = JSON.parse(a.responseText);
                        return this.slicesDataDb.set(t, e), {
                            sliceName: t,
                            jsonPayload: e
                        }
                    }))
                }, a.findMatchPath = function(t) {
                    return (0, g.Yl)(t)
                }, a.loadPage = function(t) {
                    const a = (0, g.Hh)(t);
                    if (this.pageDb.has(a)) {
                        const t = this.pageDb.get(a);
                        return t.error ? Promise.resolve({
                            error: t.error,
                            status: t.status
                        }) : Promise.resolve(t.payload)
                    }
                    if (this.inFlightDb.has(a)) return this.inFlightDb.get(a);
                    const e = [this.loadAppData(), this.loadPageDataJson(a)];
                    const h = Promise.all(e).then((t => {
                        const [e, h, n] = t;
                        if (h.status === m.Error || (null == n ? void 0 : n.status) === m.Error) return {
                            status: m.Error
                        };
                        let s = h.payload;
                        const {
                            componentChunkName: c,
                            staticQueryHashes: g = [],
                            slicesMap: l = {}
                        } = s, p = {}, d = Array.from(new Set(Object.values(l))), u = t => {
                            if (this.slicesDb.has(t.name)) return this.slicesDb.get(t.name);
                            if (this.sliceInflightDb.has(t.name)) return this.sliceInflightDb.get(t.name);
                            const a = this.loadComponent(t.componentChunkName).then((a => {
                                return {
                                    component: (e = a, e && e.default || e),
                                    sliceContext: t.result.sliceContext,
                                    data: t.result.data
                                };
                                var e
                            }));
                            return this.sliceInflightDb.set(t.name, a), a.then((a => {
                                this.slicesDb.set(t.name, a), this.sliceInflightDb.delete(t.name)
                            })), a
                        };
                        return Promise.all(d.map((t => this.loadSliceDataJson(t)))).then((t => {
                            const l = [],
                                d = (0, i.A)(g);
                            for (const {
                                    jsonPayload: a,
                                    sliceName: e
                                } of Object.values(t)) {
                                l.push({
                                    name: e,
                                    ...a
                                });
                                for (const t of a.staticQueryHashes) d.includes(t) || d.push(t)
                            }
                            const w = [Promise.all(l.map(u)), this.loadComponent(c, "head")];
                            w.push(this.loadComponent(c));
                            const f = Promise.all(w).then((t => {
                                    const [a, i, c] = t;
                                    p.createdAt = new Date;
                                    for (const e of a)(!e || e instanceof Error) && (p.status = m.Error, p.error = e);
                                    let o;
                                    if ((!c || c instanceof Error) && (p.status = m.Error, p.error = c), p.status !== m.Error) {
                                        if (p.status = m.Success, !0 !== h.notFound && !0 !== (null == n ? void 0 : n.notFound) || (p.notFound = !0), s = Object.assign(s, {
                                                webpackCompilationHash: e ? e.webpackCompilationHash : ""
                                            }), "string" == typeof(null == n ? void 0 : n.payload)) {
                                            o = b(s, null, i), o.partialHydration = n.payload;
                                            const t = new ReadableStream({
                                                start(t) {
                                                    const a = new TextEncoder;
                                                    t.enqueue(a.encode(n.payload))
                                                },
                                                pull(t) {
                                                    t.close()
                                                },
                                                cancel() {}
                                            });
                                            return P((0, r.createFromReadableStream)(t)).then((t => (o.partialHydration = t, o)))
                                        }
                                        o = b(s, c, i)
                                    }
                                    return o
                                })),
                                v = Promise.all(d.map((t => {
                                    if (this.staticQueryDb[t]) {
                                        const a = this.staticQueryDb[t];
                                        return {
                                            staticQueryHash: t,
                                            jsonPayload: a
                                        }
                                    }
                                    return this.memoizedGet(`/page-data/sq/d/${t}.json`).then((a => {
                                        const e = JSON.parse(a.responseText);
                                        return {
                                            staticQueryHash: t,
                                            jsonPayload: e
                                        }
                                    })).catch((() => {
                                        throw new Error(`We couldn't load "/page-data/sq/d/${t}.json"`)
                                    }))
                                }))).then((t => {
                                    const a = {};
                                    return t.forEach((t => {
                                        let {
                                            staticQueryHash: e,
                                            jsonPayload: h
                                        } = t;
                                        a[e] = h, this.staticQueryDb[e] = h
                                    })), a
                                }));
                            return Promise.all([f, v]).then((t => {
                                let e, [h, i] = t;
                                return h && (e = { ...h,
                                    staticQueryResults: i
                                }, p.payload = e, o.A.emit("onPostLoadPageResources", {
                                    page: e,
                                    pageResources: e
                                })), this.pageDb.set(a, p), p.error ? {
                                    error: p.error,
                                    status: p.status
                                } : e
                            })).catch((t => ({
                                error: t,
                                status: m.Error
                            })))
                        }))
                    }));
                    return h.then((() => {
                        this.inFlightDb.delete(a)
                    })).catch((t => {
                        throw this.inFlightDb.delete(a), t
                    })), this.inFlightDb.set(a, h), h
                }, a.loadPageSync = function(t, a) {
                    void 0 === a && (a = {});
                    const e = (0, g.Hh)(t);
                    if (this.pageDb.has(e)) {
                        var h;
                        const t = this.pageDb.get(e);
                        if (t.payload) return t.payload;
                        if (null !== (h = a) && void 0 !== h && h.withErrorDetails) return {
                            error: t.error,
                            status: t.status
                        }
                    }
                }, a.shouldPrefetch = function(t) {
                    return !!(() => {
                        if ("connection" in navigator && void 0 !== navigator.connection) {
                            if ((navigator.connection.effectiveType || "").includes("2g")) return !1;
                            if (navigator.connection.saveData) return !1
                        }
                        return !0
                    })() && ((!navigator.userAgent || !u.test(navigator.userAgent)) && !this.pageDb.has(t))
                }, a.prefetch = function(t) {
                    if (!this.shouldPrefetch(t)) return {
                        then: t => t(!1),
                        abort: () => {}
                    };
                    if (this.prefetchTriggered.has(t)) return {
                        then: t => t(!0),
                        abort: () => {}
                    };
                    const a = {
                        resolve: null,
                        reject: null,
                        promise: null
                    };
                    a.promise = new Promise(((t, e) => {
                        a.resolve = t, a.reject = e
                    })), this.prefetchQueued.push([t, a]);
                    const e = new AbortController;
                    return e.signal.addEventListener("abort", (() => {
                        const a = this.prefetchQueued.findIndex((a => {
                            let [e] = a;
                            return e === t
                        })); - 1 !== a && this.prefetchQueued.splice(a, 1)
                    })), this.isPrefetchQueueRunning || (this.isPrefetchQueueRunning = !0, setTimeout((() => {
                        this._processNextPrefetchBatch()
                    }), 3e3)), {
                        then: (t, e) => a.promise.then(t, e),
                        abort: e.abort.bind(e)
                    }
                }, a._processNextPrefetchBatch = function() {
                    (window.requestIdleCallback || (t => setTimeout(t, 0)))((() => {
                        const t = this.prefetchQueued.splice(0, 4),
                            a = Promise.all(t.map((t => {
                                let [a, e] = t;
                                return this.prefetchTriggered.has(a) || (this.apiRunner("onPrefetchPathname", {
                                    pathname: a
                                }), this.prefetchTriggered.add(a)), this.prefetchDisabled ? e.resolve(!1) : this.doPrefetch((0, g.Hh)(a)).then((() => {
                                    this.prefetchCompleted.has(a) || (this.apiRunner("onPostPrefetchPathname", {
                                        pathname: a
                                    }), this.prefetchCompleted.add(a)), e.resolve(!0)
                                }))
                            })));
                        this.prefetchQueued.length ? a.then((() => {
                            setTimeout((() => {
                                this._processNextPrefetchBatch()
                            }), 3e3)
                        })) : this.isPrefetchQueueRunning = !1
                    }))
                }, a.doPrefetch = function(t) {
                    const a = l(t);
                    return c(a, {
                        crossOrigin: "anonymous",
                        as: "fetch"
                    }).then((() => this.loadPageDataJson(t)))
                }, a.hovering = function(t) {
                    this.loadPage(t)
                }, a.getResourceURLsForPathname = function(t) {
                    const a = (0, g.Hh)(t),
                        e = this.pageDataDb.get(a);
                    if (e) {
                        const t = b(e.payload);
                        return [].concat((0, i.A)(f(t.page.componentChunkName)), [l(a)])
                    }
                    return null
                }, a.isPageNotFound = function(t) {
                    const a = (0, g.Hh)(t),
                        e = this.pageDb.get(a);
                    return !e || e.notFound
                }, a.loadAppData = function(t) {
                    return void 0 === t && (t = 0), this.memoizedGet("/page-data/app-data.json").then((a => {
                        const {
                            status: e,
                            responseText: h
                        } = a;
                        let i;
                        if (200 !== e && t < 3) return this.loadAppData(t + 1);
                        if (200 === e) try {
                            const t = JSON.parse(h);
                            if (void 0 === t.webpackCompilationHash) throw new Error("not a valid app-data response");
                            i = t
                        } catch (r) {}
                        return i
                    }))
                }, t
            }();
            const f = t => (window.___chunkMapping[t] || []).map((t => "" + t));
            let v, y = function(t) {
                function a(a, e, h) {
                    var i;
                    return i = t.call(this, (function(t, e) {
                        if (void 0 === e && (e = "components"), !a[e = "components"][t]) throw new Error(`We couldn't find the correct component chunk with the name "${t}"`);
                        return a[e][t]().catch((t => t))
                    }), e) || this, h && i.pageDataDb.set((0, g.Hh)(h.path), {
                        pagePath: h.path,
                        payload: h,
                        status: "success"
                    }), i
                }(0, h.A)(a, t);
                var e = a.prototype;
                return e.doPrefetch = function(a) {
                    return t.prototype.doPrefetch.call(this, a).then((t => {
                        if (t.status !== m.Success) return Promise.resolve();
                        const a = t.payload,
                            e = a.componentChunkName,
                            h = f(e);
                        return Promise.all(h.map(c)).then((() => a))
                    }))
                }, e.loadPageDataJson = function(a) {
                    return t.prototype.loadPageDataJson.call(this, a).then((t => t.notFound ? p(a) ? t : d(a, "HEAD").then((a => 200 === a.status ? {
                        status: m.Error
                    } : t)) : t))
                }, e.loadPartialHydrationJson = function(a) {
                    return t.prototype.loadPartialHydrationJson.call(this, a).then((t => t.notFound ? p(a) ? t : d(a, "HEAD").then((a => 200 === a.status ? {
                        status: m.Error
                    } : t)) : t))
                }, a
            }(w);
            const x = t => {
                    v = t
                },
                z = {
                    enqueue: t => v.prefetch(t),
                    getResourceURLsForPathname: t => v.getResourceURLsForPathname(t),
                    loadPage: t => v.loadPage(t),
                    loadPageSync: function(t, a) {
                        return void 0 === a && (a = {}), v.loadPageSync(t, a)
                    },
                    prefetch: t => v.prefetch(t),
                    isPageNotFound: t => v.isPageNotFound(t),
                    hovering: t => v.hovering(t),
                    loadAppData: () => v.loadAppData()
                };
            var k = z;

            function j() {
                return v ? v.staticQueryDb : {}
            }

            function S() {
                return v ? v.slicesDb : {}
            }
        },
        6017: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return k
                }
            });
            var h = e(96540),
                i = e(5556),
                r = e.n(i),
                n = e(60020),
                s = e(88990),
                c = e(45458),
                o = e(55268),
                g = e(86462),
                m = e(79732);

            function l(t) {
                let {
                    children: a,
                    callback: e
                } = t;
                return (0, h.useEffect)((() => {
                    e()
                })), a
            }
            const p = ["link", "meta", "style", "title", "base", "noscript", "script", "html", "body"];

            function d(t, a) {
                if (t instanceof HTMLElement && a instanceof HTMLElement) {
                    const e = a.getAttribute("nonce");
                    if (e && !t.getAttribute("nonce")) {
                        const h = a.cloneNode(!0);
                        return h.setAttribute("nonce", ""), h.nonce = e, e === t.nonce && t.isEqualNode(h)
                    }
                }
                return t.isEqualNode(a)
            }

            function u(t, a) {
                void 0 === a && (a = {
                    html: {},
                    body: {}
                });
                const e = new Map,
                    h = [];
                for (const o of t.childNodes) {
                    var i, r;
                    const t = o.nodeName.toLowerCase(),
                        g = null === (i = o.attributes) || void 0 === i || null === (r = i.id) || void 0 === r ? void 0 : r.value;
                    if (w(o)) {
                        if (P(t))
                            if ("html" === t || "body" === t)
                                for (const e of o.attributes) {
                                    const h = "style" === e.name;
                                    var n;
                                    if (a[t] = { ...a[t]
                                        }, h || (a[t][e.name] = e.value), h) a[t].style = `${null!==(n=a[t])&&void 0!==n&&n.style?a[t].style:""}${e.value} `
                                } else {
                                    let t = o.cloneNode(!0);
                                    if (t.setAttribute("data-gatsby-head", !0), "script" === t.nodeName.toLowerCase() && (t = b(t)), g)
                                        if (e.has(g)) {
                                            var s;
                                            const a = e.get(g);
                                            null === (s = h[a].parentNode) || void 0 === s || s.removeChild(h[a]), h[a] = t
                                        } else h.push(t), e.set(g, h.length - 1);
                                    else h.push(t)
                                }
                        o.childNodes.length && h.push.apply(h, (0, c.A)(u(o, a).validHeadNodes))
                    }
                }
                return {
                    validHeadNodes: h,
                    htmlAndBodyAttributes: a
                }
            }

            function b(t) {
                const a = document.createElement("script");
                for (const e of t.attributes) a.setAttribute(e.name, e.value);
                return a.innerHTML = t.innerHTML, a
            }

            function P(t) {
                return p.includes(t)
            }

            function w(t) {
                return 1 === t.nodeType
            }
            const f = document.createElement("div"),
                v = {
                    html: [],
                    body: []
                },
                y = () => {
                    var t;
                    const {
                        validHeadNodes: a,
                        htmlAndBodyAttributes: e
                    } = u(f);
                    v.html = Object.keys(e.html), v.body = Object.keys(e.body),
                        function(t) {
                            if (!t) return;
                            const {
                                html: a,
                                body: e
                            } = t, h = document.querySelector("html");
                            h && Object.entries(a).forEach((t => {
                                let [a, e] = t;
                                h.setAttribute(a, e)
                            }));
                            const i = document.querySelector("body");
                            i && Object.entries(e).forEach((t => {
                                let [a, e] = t;
                                i.setAttribute(a, e)
                            }))
                        }(e);
                    const h = document.querySelectorAll("[data-gatsby-head]");
                    var i;
                    if (0 === h.length) return void(i = document.head).append.apply(i, (0, c.A)(a));
                    const r = [];
                    ! function(t) {
                        let {
                            oldNodes: a,
                            newNodes: e,
                            onStale: h,
                            onNew: i
                        } = t;
                        for (const r of a) {
                            const t = e.findIndex((t => d(t, r))); - 1 === t ? h(r) : e.splice(t, 1)
                        }
                        for (const r of e) i(r)
                    }({
                        oldNodes: h,
                        newNodes: a,
                        onStale: t => t.parentNode.removeChild(t),
                        onNew: t => r.push(t)
                    }), (t = document.head).append.apply(t, r)
                };

            function x(t) {
                let {
                    pageComponent: a,
                    staticQueryResults: e,
                    pageComponentProps: i
                } = t;
                (0, h.useEffect)((() => {
                    if (null != a && a.Head) {
                        ! function(t) {
                            if ("function" != typeof t) throw new Error(`Expected "Head" export to be a function got "${typeof t}".`)
                        }(a.Head);
                        const {
                            render: r
                        } = (0, m.n)(), s = h.createElement(a.Head, {
                            location: {
                                pathname: (t = i).location.pathname
                            },
                            params: t.params,
                            data: t.data || {},
                            serverData: t.serverData,
                            pageContext: t.pageContext
                        }), c = (0, n.N)("wrapRootElement", {
                            element: s
                        }, s, (t => {
                            let {
                                result: a
                            } = t;
                            return {
                                element: a
                            }
                        })).pop();
                        r(h.createElement(l, {
                            callback: y
                        }, h.createElement(o.StaticQueryContext.Provider, {
                            value: e
                        }, h.createElement(g.LocationProvider, null, c))), f)
                    }
                    var t;
                    return () => {
                        ! function() {
                            const t = document.querySelectorAll("[data-gatsby-head]");
                            for (const a of t) a.parentNode.removeChild(a)
                        }(),
                        function(t) {
                            if (!t) return;
                            const {
                                html: a,
                                body: e
                            } = t;
                            if (a) {
                                const t = document.querySelector("html");
                                a.forEach((a => {
                                    t && t.removeAttribute(a)
                                }))
                            }
                            if (e) {
                                const t = document.querySelector("body");
                                e.forEach((a => {
                                    t && t.removeAttribute(a)
                                }))
                            }
                        }(v)
                    }
                }))
            }

            function z(t) {
                const a = { ...t,
                    params: { ...(0, s.UA)(t.location.pathname),
                        ...t.pageResources.json.pageContext.__params
                    }
                };
                let e;
                var i;
                e = t.pageResources.partialHydration ? t.pageResources.partialHydration : (0, h.createElement)((i = t.pageResources.component) && i.default || i, { ...a,
                    key: t.path || t.pageResources.page.path
                });
                x({
                    pageComponent: t.pageResources.head,
                    staticQueryResults: t.pageResources.staticQueryResults,
                    pageComponentProps: a
                });
                return (0, n.N)("wrapPageElement", {
                    element: e,
                    props: a
                }, e, (t => {
                    let {
                        result: e
                    } = t;
                    return {
                        element: e,
                        props: a
                    }
                })).pop()
            }
            z.propTypes = {
                location: r().object.isRequired,
                pageResources: r().object.isRequired,
                data: r().object,
                pageContext: r().object.isRequired
            };
            var k = z
        },
        56498: function(t, a, e) {
            "use strict";
            var h = e(77387),
                i = e(60020),
                r = e(96540),
                n = e(86462),
                s = e(97035),
                c = e(7231),
                o = e(2024),
                g = e(56814),
                m = e(16491),
                l = e(79369);
            const p = {
                id: "gatsby-announcer",
                style: {
                    position: "absolute",
                    top: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0
                },
                "aria-live": "assertive",
                "aria-atomic": "true"
            };
            var d = e(57078);

            function u(t) {
                const a = (0, m.X)(t),
                    {
                        hash: e,
                        search: h
                    } = window.location;
                return null != a && (window.___replace(a.toPath + h + e), !0)
            }
            let b = "";
            window.addEventListener("unhandledrejection", (t => {
                /loading chunk \d* failed./i.test(t.reason) && b && (window.location.pathname = b)
            }));
            const P = (t, a) => {
                    u(t.pathname) || (b = t.pathname, (0, i.N)("onPreRouteUpdate", {
                        location: t,
                        prevLocation: a
                    }))
                },
                w = (t, a) => {
                    u(t.pathname) || (0, i.N)("onRouteUpdate", {
                        location: t,
                        prevLocation: a
                    })
                },
                f = function(t, a) {
                    if (void 0 === a && (a = {}), "number" == typeof t) return void n.globalHistory.navigate(t);
                    const {
                        pathname: e,
                        search: h,
                        hash: r
                    } = (0, d.Rr)(t), s = (0, m.X)(e);
                    if (s && (t = s.toPath + h + r), window.___swUpdated) return void(window.location = e + h + r);
                    const c = setTimeout((() => {
                        l.A.emit("onDelayedLoadPageResources", {
                            pathname: e
                        }), (0, i.N)("onRouteUpdateDelayed", {
                            location: window.location
                        })
                    }), 1e3);
                    g.Ay.loadPage(e + h).then((i => {
                        if (!i || i.status === g.Wi.Error) return window.history.replaceState({}, "", location.href), window.location = e, void clearTimeout(c);
                        i && i.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker" in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({
                            gatsbyApi: "clearPathResources"
                        }), window.location = e + h + r), (0, n.navigate)(t, a), clearTimeout(c)
                    }))
                };

            function v(t, a) {
                let {
                    location: e
                } = a;
                const {
                    pathname: h,
                    hash: r
                } = e, n = (0, i.N)("shouldUpdateScroll", {
                    prevRouterProps: t,
                    pathname: h,
                    routerProps: {
                        location: e
                    },
                    getSavedScrollPosition: t => [0, this._stateStorage.read(t, t.key)]
                });
                if (n.length > 0) return n[n.length - 1];
                if (t) {
                    const {
                        location: {
                            pathname: a
                        }
                    } = t;
                    if (a === h) return r ? decodeURI(r.slice(1)) : [0, 0]
                }
                return !0
            }
            let y = function(t) {
                function a(a) {
                    var e;
                    return (e = t.call(this, a) || this).announcementRef = r.createRef(), e
                }(0, h.A)(a, t);
                var e = a.prototype;
                return e.componentDidUpdate = function(t, a) {
                    requestAnimationFrame((() => {
                        let t = `new page at ${this.props.location.pathname}`;
                        document.title && (t = document.title);
                        const a = document.querySelectorAll("#gatsby-focus-wrapper h1");
                        a && a.length && (t = a[0].textContent);
                        const e = `Navigated to ${t}`;
                        if (this.announcementRef.current) {
                            this.announcementRef.current.innerText !== e && (this.announcementRef.current.innerText = e)
                        }
                    }))
                }, e.render = function() {
                    return r.createElement("div", Object.assign({}, p, {
                        ref: this.announcementRef
                    }))
                }, a
            }(r.Component);
            const x = (t, a) => {
                var e, h;
                return t.href !== a.href || (null == t || null === (e = t.state) || void 0 === e ? void 0 : e.key) !== (null == a || null === (h = a.state) || void 0 === h ? void 0 : h.key)
            };
            let z = function(t) {
                function a(a) {
                    var e;
                    return e = t.call(this, a) || this, P(a.location, null), e
                }(0, h.A)(a, t);
                var e = a.prototype;
                return e.componentDidMount = function() {
                    w(this.props.location, null)
                }, e.shouldComponentUpdate = function(t) {
                    return !!x(this.props.location, t.location) && (P(t.location, this.props.location), !0)
                }, e.componentDidUpdate = function(t) {
                    x(t.location, this.props.location) && w(this.props.location, t.location)
                }, e.render = function() {
                    return r.createElement(r.Fragment, null, this.props.children, r.createElement(y, {
                        location: location
                    }))
                }, a
            }(r.Component);
            var k = e(6017),
                j = e(96877);

            function S(t, a) {
                for (var e in t)
                    if (!(e in a)) return !0;
                for (var h in a)
                    if (t[h] !== a[h]) return !0;
                return !1
            }
            var E = function(t) {
                    function a(a) {
                        var e;
                        e = t.call(this) || this;
                        const {
                            location: h,
                            pageResources: i
                        } = a;
                        return e.state = {
                            location: { ...h
                            },
                            pageResources: i || g.Ay.loadPageSync(h.pathname + h.search, {
                                withErrorDetails: !0
                            })
                        }, e
                    }(0, h.A)(a, t), a.getDerivedStateFromProps = function(t, a) {
                        let {
                            location: e
                        } = t;
                        if (a.location.href !== e.href) {
                            return {
                                pageResources: g.Ay.loadPageSync(e.pathname + e.search, {
                                    withErrorDetails: !0
                                }),
                                location: { ...e
                                }
                            }
                        }
                        return {
                            location: { ...e
                            }
                        }
                    };
                    var e = a.prototype;
                    return e.loadResources = function(t) {
                        g.Ay.loadPage(t).then((a => {
                            a && a.status !== g.Wi.Error ? this.setState({
                                location: { ...window.location
                                },
                                pageResources: a
                            }) : (window.history.replaceState({}, "", location.href), window.location = t)
                        }))
                    }, e.shouldComponentUpdate = function(t, a) {
                        return a.pageResources ? this.state.pageResources !== a.pageResources || (this.state.pageResources.component !== a.pageResources.component || (this.state.pageResources.json !== a.pageResources.json || (!(this.state.location.key === a.location.key || !a.pageResources.page || !a.pageResources.page.matchPath && !a.pageResources.page.path) || function(t, a, e) {
                            return S(t.props, a) || S(t.state, e)
                        }(this, t, a)))) : (this.loadResources(t.location.pathname + t.location.search), !1)
                    }, e.render = function() {
                        return this.props.children(this.state)
                    }, a
                }(r.Component),
                _ = e(38797),
                C = JSON.parse('[{"path":"/de/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/de/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/de/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/de/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/de/gambling/betting/esports/call-of-duty/","matchPath":"/de/gambling/betting/esports/call-of-duty/"},{"path":"/de/gambling/betting/esports/cs-go/","matchPath":"/de/gambling/betting/esports/cs-go/"},{"path":"/de/gambling/betting/esports/dota-2/","matchPath":"/de/gambling/betting/esports/dota-2/"},{"path":"/de/gambling/betting/esports/fifa/","matchPath":"/de/gambling/betting/esports/fifa/"},{"path":"/de/gambling/betting/esports/lol/","matchPath":"/de/gambling/betting/esports/lol/"},{"path":"/de/gambling/betting/esports/starcraft/","matchPath":"/de/gambling/betting/esports/starcraft/"},{"path":"/de/gambling/betting/esports/valorant/","matchPath":"/de/gambling/betting/esports/valorant/"},{"path":"/de/gambling/betting/esports/world-of-warcraft/","matchPath":"/de/gambling/betting/esports/world-of-warcraft/"},{"path":"/de/gambling/betting/politics/donald-trump/","matchPath":"/de/gambling/betting/politics/donald-trump/"},{"path":"/de/gambling/betting/politics/kamala-harris/","matchPath":"/de/gambling/betting/politics/kamala-harris/"},{"path":"/de/gambling/betting/politics/us-elections/","matchPath":"/de/gambling/betting/politics/us-elections/"},{"path":"/es/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/es/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/es/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/es/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/es/gambling/betting/esports/call-of-duty/","matchPath":"/es/gambling/betting/esports/call-of-duty/"},{"path":"/es/gambling/betting/esports/cs-go/","matchPath":"/es/gambling/betting/esports/cs-go/"},{"path":"/es/gambling/betting/esports/dota-2/","matchPath":"/es/gambling/betting/esports/dota-2/"},{"path":"/es/gambling/betting/esports/fifa/","matchPath":"/es/gambling/betting/esports/fifa/"},{"path":"/es/gambling/betting/esports/lol/","matchPath":"/es/gambling/betting/esports/lol/"},{"path":"/es/gambling/betting/esports/starcraft/","matchPath":"/es/gambling/betting/esports/starcraft/"},{"path":"/es/gambling/betting/esports/valorant/","matchPath":"/es/gambling/betting/esports/valorant/"},{"path":"/es/gambling/betting/esports/world-of-warcraft/","matchPath":"/es/gambling/betting/esports/world-of-warcraft/"},{"path":"/es/gambling/betting/politics/donald-trump/","matchPath":"/es/gambling/betting/politics/donald-trump/"},{"path":"/es/gambling/betting/politics/kamala-harris/","matchPath":"/es/gambling/betting/politics/kamala-harris/"},{"path":"/es/gambling/betting/politics/us-elections/","matchPath":"/es/gambling/betting/politics/us-elections/"},{"path":"/fr/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/fr/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/fr/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/fr/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/fr/gambling/betting/esports/call-of-duty/","matchPath":"/fr/gambling/betting/esports/call-of-duty/"},{"path":"/fr/gambling/betting/esports/cs-go/","matchPath":"/fr/gambling/betting/esports/cs-go/"},{"path":"/fr/gambling/betting/esports/dota-2/","matchPath":"/fr/gambling/betting/esports/dota-2/"},{"path":"/fr/gambling/betting/esports/fifa/","matchPath":"/fr/gambling/betting/esports/fifa/"},{"path":"/fr/gambling/betting/esports/lol/","matchPath":"/fr/gambling/betting/esports/lol/"},{"path":"/fr/gambling/betting/esports/starcraft/","matchPath":"/fr/gambling/betting/esports/starcraft/"},{"path":"/fr/gambling/betting/esports/valorant/","matchPath":"/fr/gambling/betting/esports/valorant/"},{"path":"/fr/gambling/betting/esports/world-of-warcraft/","matchPath":"/fr/gambling/betting/esports/world-of-warcraft/"},{"path":"/fr/gambling/betting/politics/donald-trump/","matchPath":"/fr/gambling/betting/politics/donald-trump/"},{"path":"/fr/gambling/betting/politics/kamala-harris/","matchPath":"/fr/gambling/betting/politics/kamala-harris/"},{"path":"/fr/gambling/betting/politics/us-elections/","matchPath":"/fr/gambling/betting/politics/us-elections/"},{"path":"/it/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/it/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/it/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/it/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/it/gambling/betting/esports/call-of-duty/","matchPath":"/it/gambling/betting/esports/call-of-duty/"},{"path":"/it/gambling/betting/esports/cs-go/","matchPath":"/it/gambling/betting/esports/cs-go/"},{"path":"/it/gambling/betting/esports/dota-2/","matchPath":"/it/gambling/betting/esports/dota-2/"},{"path":"/it/gambling/betting/esports/fifa/","matchPath":"/it/gambling/betting/esports/fifa/"},{"path":"/it/gambling/betting/esports/lol/","matchPath":"/it/gambling/betting/esports/lol/"},{"path":"/it/gambling/betting/esports/starcraft/","matchPath":"/it/gambling/betting/esports/starcraft/"},{"path":"/it/gambling/betting/esports/valorant/","matchPath":"/it/gambling/betting/esports/valorant/"},{"path":"/it/gambling/betting/esports/world-of-warcraft/","matchPath":"/it/gambling/betting/esports/world-of-warcraft/"},{"path":"/it/gambling/betting/politics/donald-trump/","matchPath":"/it/gambling/betting/politics/donald-trump/"},{"path":"/it/gambling/betting/politics/kamala-harris/","matchPath":"/it/gambling/betting/politics/kamala-harris/"},{"path":"/it/gambling/betting/politics/us-elections/","matchPath":"/it/gambling/betting/politics/us-elections/"},{"path":"/ru/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/ru/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/ru/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/ru/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/ru/gambling/betting/esports/call-of-duty/","matchPath":"/ru/gambling/betting/esports/call-of-duty/"},{"path":"/ru/gambling/betting/esports/cs-go/","matchPath":"/ru/gambling/betting/esports/cs-go/"},{"path":"/ru/gambling/betting/esports/dota-2/","matchPath":"/ru/gambling/betting/esports/dota-2/"},{"path":"/ru/gambling/betting/esports/fifa/","matchPath":"/ru/gambling/betting/esports/fifa/"},{"path":"/ru/gambling/betting/esports/lol/","matchPath":"/ru/gambling/betting/esports/lol/"},{"path":"/ru/gambling/betting/esports/starcraft/","matchPath":"/ru/gambling/betting/esports/starcraft/"},{"path":"/ru/gambling/betting/esports/valorant/","matchPath":"/ru/gambling/betting/esports/valorant/"},{"path":"/ru/gambling/betting/esports/world-of-warcraft/","matchPath":"/ru/gambling/betting/esports/world-of-warcraft/"},{"path":"/ru/gambling/betting/politics/donald-trump/","matchPath":"/ru/gambling/betting/politics/donald-trump/"},{"path":"/ru/gambling/betting/politics/kamala-harris/","matchPath":"/ru/gambling/betting/politics/kamala-harris/"},{"path":"/ru/gambling/betting/politics/us-elections/","matchPath":"/ru/gambling/betting/politics/us-elections/"},{"path":"/zh/gambling/betting/cricket/icc-champions-trophy-2025/","matchPath":"/zh/gambling/betting/cricket/icc-champions-trophy-2025/"},{"path":"/zh/gambling/betting/cricket/indian-premier-league-ipl-2025/","matchPath":"/zh/gambling/betting/cricket/indian-premier-league-ipl-2025/"},{"path":"/zh/gambling/betting/esports/call-of-duty/","matchPath":"/zh/gambling/betting/esports/call-of-duty/"},{"path":"/zh/gambling/betting/esports/cs-go/","matchPath":"/zh/gambling/betting/esports/cs-go/"},{"path":"/zh/gambling/betting/esports/dota-2/","matchPath":"/zh/gambling/betting/esports/dota-2/"},{"path":"/zh/gambling/betting/esports/fifa/","matchPath":"/zh/gambling/betting/esports/fifa/"},{"path":"/zh/gambling/betting/esports/lol/","matchPath":"/zh/gambling/betting/esports/lol/"},{"path":"/zh/gambling/betting/esports/starcraft/","matchPath":"/zh/gambling/betting/esports/starcraft/"},{"path":"/zh/gambling/betting/esports/valorant/","matchPath":"/zh/gambling/betting/esports/valorant/"},{"path":"/zh/gambling/betting/esports/world-of-warcraft/","matchPath":"/zh/gambling/betting/esports/world-of-warcraft/"},{"path":"/zh/gambling/betting/politics/donald-trump/","matchPath":"/zh/gambling/betting/politics/donald-trump/"},{"path":"/zh/gambling/betting/politics/kamala-harris/","matchPath":"/zh/gambling/betting/politics/kamala-harris/"},{"path":"/zh/gambling/betting/politics/us-elections/","matchPath":"/zh/gambling/betting/politics/us-elections/"},{"path":"/de/cards/reviews/bitrefill/","matchPath":"/de/cards/reviews/bitrefill/"},{"path":"/de/cards/reviews/gemini/","matchPath":"/de/cards/reviews/gemini/"},{"path":"/de/cards/reviews/solcard/","matchPath":"/de/cards/reviews/solcard/"},{"path":"/de/cards/reviews/verse-card/","matchPath":"/de/cards/reviews/verse-card/"},{"path":"/de/exchanges/reviews/binance/","matchPath":"/de/exchanges/reviews/binance/"},{"path":"/de/exchanges/reviews/bitget/","matchPath":"/de/exchanges/reviews/bitget/"},{"path":"/de/exchanges/reviews/btcc/","matchPath":"/de/exchanges/reviews/btcc/"},{"path":"/de/exchanges/reviews/coinbase/","matchPath":"/de/exchanges/reviews/coinbase/"},{"path":"/de/exchanges/reviews/coincorner/","matchPath":"/de/exchanges/reviews/coincorner/"},{"path":"/de/exchanges/reviews/coinflare/","matchPath":"/de/exchanges/reviews/coinflare/"},{"path":"/de/exchanges/reviews/cryptomus/","matchPath":"/de/exchanges/reviews/cryptomus/"},{"path":"/de/exchanges/reviews/digital-surge/","matchPath":"/de/exchanges/reviews/digital-surge/"},{"path":"/de/exchanges/reviews/exolix/","matchPath":"/de/exchanges/reviews/exolix/"},{"path":"/de/exchanges/reviews/figure-markets/","matchPath":"/de/exchanges/reviews/figure-markets/"},{"path":"/de/exchanges/reviews/gemini/","matchPath":"/de/exchanges/reviews/gemini/"},{"path":"/de/exchanges/reviews/godex/","matchPath":"/de/exchanges/reviews/godex/"},{"path":"/de/exchanges/reviews/kraken/","matchPath":"/de/exchanges/reviews/kraken/"},{"path":"/de/exchanges/reviews/kucoin/","matchPath":"/de/exchanges/reviews/kucoin/"},{"path":"/de/exchanges/reviews/margex/","matchPath":"/de/exchanges/reviews/margex/"},{"path":"/de/exchanges/reviews/mexc/","matchPath":"/de/exchanges/reviews/mexc/"},{"path":"/de/exchanges/reviews/prime-xbt/","matchPath":"/de/exchanges/reviews/prime-xbt/"},{"path":"/de/exchanges/reviews/primexbt/","matchPath":"/de/exchanges/reviews/primexbt/"},{"path":"/de/exchanges/reviews/rocko/","matchPath":"/de/exchanges/reviews/rocko/"},{"path":"/de/exchanges/reviews/swapuz/","matchPath":"/de/exchanges/reviews/swapuz/"},{"path":"/de/exchanges/reviews/uphold/","matchPath":"/de/exchanges/reviews/uphold/"},{"path":"/de/exchanges/reviews/verse/","matchPath":"/de/exchanges/reviews/verse/"},{"path":"/de/exchanges/reviews/virgo-cx/","matchPath":"/de/exchanges/reviews/virgo-cx/"},{"path":"/de/exchanges/reviews/virgo/","matchPath":"/de/exchanges/reviews/virgo/"},{"path":"/de/exchanges/reviews/voox/","matchPath":"/de/exchanges/reviews/voox/"},{"path":"/de/exchanges/reviews/woofi/","matchPath":"/de/exchanges/reviews/woofi/"},{"path":"/de/exchanges/reviews/woox/","matchPath":"/de/exchanges/reviews/woox/"},{"path":"/de/exchanges/reviews/xbo/","matchPath":"/de/exchanges/reviews/xbo/"},{"path":"/de/gambling/betting/american-football/","matchPath":"/de/gambling/betting/american-football/"},{"path":"/de/gambling/betting/anonymous/","matchPath":"/de/gambling/betting/anonymous/"},{"path":"/de/gambling/betting/australian-open-tennis/","matchPath":"/de/gambling/betting/australian-open-tennis/"},{"path":"/de/gambling/betting/badminton/","matchPath":"/de/gambling/betting/badminton/"},{"path":"/de/gambling/betting/baseball/","matchPath":"/de/gambling/betting/baseball/"},{"path":"/de/gambling/betting/basketball/","matchPath":"/de/gambling/betting/basketball/"},{"path":"/de/gambling/betting/betting-exchanges/","matchPath":"/de/gambling/betting/betting-exchanges/"},{"path":"/de/gambling/betting/bonuses/","matchPath":"/de/gambling/betting/bonuses/"},{"path":"/de/gambling/betting/boxing/","matchPath":"/de/gambling/betting/boxing/"},{"path":"/de/gambling/betting/bundesliga/","matchPath":"/de/gambling/betting/bundesliga/"},{"path":"/de/gambling/betting/chess/","matchPath":"/de/gambling/betting/chess/"},{"path":"/de/gambling/betting/college-basketball/","matchPath":"/de/gambling/betting/college-basketball/"},{"path":"/de/gambling/betting/cricket/","matchPath":"/de/gambling/betting/cricket/"},{"path":"/de/gambling/betting/cycling/","matchPath":"/de/gambling/betting/cycling/"},{"path":"/de/gambling/betting/darts/","matchPath":"/de/gambling/betting/darts/"},{"path":"/de/gambling/betting/english-premier-league/","matchPath":"/de/gambling/betting/english-premier-league/"},{"path":"/de/gambling/betting/esports/","matchPath":"/de/gambling/betting/esports/"},{"path":"/de/gambling/betting/fantasy-sports/","matchPath":"/de/gambling/betting/fantasy-sports/"},{"path":"/de/gambling/betting/fifa-world-cup-2025/","matchPath":"/de/gambling/betting/fifa-world-cup-2025/"},{"path":"/de/gambling/betting/football/","matchPath":"/de/gambling/betting/football/"},{"path":"/de/gambling/betting/formula-1/","matchPath":"/de/gambling/betting/formula-1/"},{"path":"/de/gambling/betting/french-open-tennis/","matchPath":"/de/gambling/betting/french-open-tennis/"},{"path":"/de/gambling/betting/grand-slam/","matchPath":"/de/gambling/betting/grand-slam/"},{"path":"/de/gambling/betting/greyhound-racing/","matchPath":"/de/gambling/betting/greyhound-racing/"},{"path":"/de/gambling/betting/handball/","matchPath":"/de/gambling/betting/handball/"},{"path":"/de/gambling/betting/hockey/","matchPath":"/de/gambling/betting/hockey/"},{"path":"/de/gambling/betting/horse-racing/","matchPath":"/de/gambling/betting/horse-racing/"},{"path":"/de/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/de/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/de/gambling/betting/ice-hockey/","matchPath":"/de/gambling/betting/ice-hockey/"},{"path":"/de/gambling/betting/kentucky-derby/","matchPath":"/de/gambling/betting/kentucky-derby/"},{"path":"/de/gambling/betting/la-liga/","matchPath":"/de/gambling/betting/la-liga/"},{"path":"/de/gambling/betting/live-betting/","matchPath":"/de/gambling/betting/live-betting/"},{"path":"/de/gambling/betting/march-madness/","matchPath":"/de/gambling/betting/march-madness/"},{"path":"/de/gambling/betting/mma/","matchPath":"/de/gambling/betting/mma/"},{"path":"/de/gambling/betting/motorsports/","matchPath":"/de/gambling/betting/motorsports/"},{"path":"/de/gambling/betting/nascar-cup-series/","matchPath":"/de/gambling/betting/nascar-cup-series/"},{"path":"/de/gambling/betting/nba-draft-2025/","matchPath":"/de/gambling/betting/nba-draft-2025/"},{"path":"/de/gambling/betting/nfl-draft-2025/","matchPath":"/de/gambling/betting/nfl-draft-2025/"},{"path":"/de/gambling/betting/nhl-entry-draft-2025/","matchPath":"/de/gambling/betting/nhl-entry-draft-2025/"},{"path":"/de/gambling/betting/olympics/","matchPath":"/de/gambling/betting/olympics/"},{"path":"/de/gambling/betting/pga/","matchPath":"/de/gambling/betting/pga/"},{"path":"/de/gambling/betting/politics/","matchPath":"/de/gambling/betting/politics/"},{"path":"/de/gambling/betting/prediction-markets/","matchPath":"/de/gambling/betting/prediction-markets/"},{"path":"/de/gambling/betting/rugby/","matchPath":"/de/gambling/betting/rugby/"},{"path":"/de/gambling/betting/serie-a/","matchPath":"/de/gambling/betting/serie-a/"},{"path":"/de/gambling/betting/snooker/","matchPath":"/de/gambling/betting/snooker/"},{"path":"/de/gambling/betting/sportsbook/","matchPath":"/de/gambling/betting/sportsbook/"},{"path":"/de/gambling/betting/stock-car-racing/","matchPath":"/de/gambling/betting/stock-car-racing/"},{"path":"/de/gambling/betting/super-bowl-lix/","matchPath":"/de/gambling/betting/super-bowl-lix/"},{"path":"/de/gambling/betting/table-tennis/","matchPath":"/de/gambling/betting/table-tennis/"},{"path":"/de/gambling/betting/ufc-fight-night/","matchPath":"/de/gambling/betting/ufc-fight-night/"},{"path":"/de/gambling/betting/ufc/","matchPath":"/de/gambling/betting/ufc/"},{"path":"/de/gambling/betting/up-and-down/","matchPath":"/de/gambling/betting/up-and-down/"},{"path":"/de/gambling/betting/us-open-tennis/","matchPath":"/de/gambling/betting/us-open-tennis/"},{"path":"/de/gambling/betting/volleyball/","matchPath":"/de/gambling/betting/volleyball/"},{"path":"/de/gambling/betting/wimbledon/","matchPath":"/de/gambling/betting/wimbledon/"},{"path":"/de/gambling/betting/winter-sports/","matchPath":"/de/gambling/betting/winter-sports/"},{"path":"/de/gambling/casino/anonymous/","matchPath":"/de/gambling/casino/anonymous/"},{"path":"/de/gambling/casino/arbitrum/","matchPath":"/de/gambling/casino/arbitrum/"},{"path":"/de/gambling/casino/avax/","matchPath":"/de/gambling/casino/avax/"},{"path":"/de/gambling/casino/baccarat/","matchPath":"/de/gambling/casino/baccarat/"},{"path":"/de/gambling/casino/base/","matchPath":"/de/gambling/casino/base/"},{"path":"/de/gambling/casino/binance-coin/","matchPath":"/de/gambling/casino/binance-coin/"},{"path":"/de/gambling/casino/bitcoin-cash/","matchPath":"/de/gambling/casino/bitcoin-cash/"},{"path":"/de/gambling/casino/bitcoin/","matchPath":"/de/gambling/casino/bitcoin/"},{"path":"/de/gambling/casino/blackjack/","matchPath":"/de/gambling/casino/blackjack/"},{"path":"/de/gambling/casino/bonus-buys/","matchPath":"/de/gambling/casino/bonus-buys/"},{"path":"/de/gambling/casino/bonus/","matchPath":"/de/gambling/casino/bonus/"},{"path":"/de/gambling/casino/book-of/","matchPath":"/de/gambling/casino/book-of/"},{"path":"/de/gambling/casino/buy-extra-ball/","matchPath":"/de/gambling/casino/buy-extra-ball/"},{"path":"/de/gambling/casino/cardano/","matchPath":"/de/gambling/casino/cardano/"},{"path":"/de/gambling/casino/cluster-pays/","matchPath":"/de/gambling/casino/cluster-pays/"},{"path":"/de/gambling/casino/cosmic-jackpot-games/","matchPath":"/de/gambling/casino/cosmic-jackpot-games/"},{"path":"/de/gambling/casino/craps/","matchPath":"/de/gambling/casino/craps/"},{"path":"/de/gambling/casino/crash/","matchPath":"/de/gambling/casino/crash/"},{"path":"/de/gambling/casino/dai/","matchPath":"/de/gambling/casino/dai/"},{"path":"/de/gambling/casino/decentralized/","matchPath":"/de/gambling/casino/decentralized/"},{"path":"/de/gambling/casino/defi/","matchPath":"/de/gambling/casino/defi/"},{"path":"/de/gambling/casino/dice/","matchPath":"/de/gambling/casino/dice/"},{"path":"/de/gambling/casino/discord/","matchPath":"/de/gambling/casino/discord/"},{"path":"/de/gambling/casino/dogecoin/","matchPath":"/de/gambling/casino/dogecoin/"},{"path":"/de/gambling/casino/drops-and-wins/","matchPath":"/de/gambling/casino/drops-and-wins/"},{"path":"/de/gambling/casino/egyptian-slots/","matchPath":"/de/gambling/casino/egyptian-slots/"},{"path":"/de/gambling/casino/eth-bonus/","matchPath":"/de/gambling/casino/eth-bonus/"},{"path":"/de/gambling/casino/eth-live-dealer/","matchPath":"/de/gambling/casino/eth-live-dealer/"},{"path":"/de/gambling/casino/eth-no-deposit-bonus/","matchPath":"/de/gambling/casino/eth-no-deposit-bonus/"},{"path":"/de/gambling/casino/eth-roulette/","matchPath":"/de/gambling/casino/eth-roulette/"},{"path":"/de/gambling/casino/eth-slots/","matchPath":"/de/gambling/casino/eth-slots/"},{"path":"/de/gambling/casino/ethereum/","matchPath":"/de/gambling/casino/ethereum/"},{"path":"/de/gambling/casino/free-spins/","matchPath":"/de/gambling/casino/free-spins/"},{"path":"/de/gambling/casino/galactic-slot-machines/","matchPath":"/de/gambling/casino/galactic-slot-machines/"},{"path":"/de/gambling/casino/game-shows/","matchPath":"/de/gambling/casino/game-shows/"},{"path":"/de/gambling/casino/high-rollers/","matchPath":"/de/gambling/casino/high-rollers/"},{"path":"/de/gambling/casino/high-volatility/","matchPath":"/de/gambling/casino/high-volatility/"},{"path":"/de/gambling/casino/hold-and-win/","matchPath":"/de/gambling/casino/hold-and-win/"},{"path":"/de/gambling/casino/horror-casino-games/","matchPath":"/de/gambling/casino/horror-casino-games/"},{"path":"/de/gambling/casino/instant-withdrawal/","matchPath":"/de/gambling/casino/instant-withdrawal/"},{"path":"/de/gambling/casino/jackpot/","matchPath":"/de/gambling/casino/jackpot/"},{"path":"/de/gambling/casino/keno/","matchPath":"/de/gambling/casino/keno/"},{"path":"/de/gambling/casino/litecoin/","matchPath":"/de/gambling/casino/litecoin/"},{"path":"/de/gambling/casino/live-dealer/","matchPath":"/de/gambling/casino/live-dealer/"},{"path":"/de/gambling/casino/megaways/","matchPath":"/de/gambling/casino/megaways/"},{"path":"/de/gambling/casino/meme-coins/","matchPath":"/de/gambling/casino/meme-coins/"},{"path":"/de/gambling/casino/metamask/","matchPath":"/de/gambling/casino/metamask/"},{"path":"/de/gambling/casino/metaverse/","matchPath":"/de/gambling/casino/metaverse/"},{"path":"/de/gambling/casino/mines/","matchPath":"/de/gambling/casino/mines/"},{"path":"/de/gambling/casino/minimum-deposit/","matchPath":"/de/gambling/casino/minimum-deposit/"},{"path":"/de/gambling/casino/mobile/","matchPath":"/de/gambling/casino/mobile/"},{"path":"/de/gambling/casino/multiplayer-games/","matchPath":"/de/gambling/casino/multiplayer-games/"},{"path":"/de/gambling/casino/newest/","matchPath":"/de/gambling/casino/newest/"},{"path":"/de/gambling/casino/nft/","matchPath":"/de/gambling/casino/nft/"},{"path":"/de/gambling/casino/no-deposit-bonus/","matchPath":"/de/gambling/casino/no-deposit-bonus/"},{"path":"/de/gambling/casino/norse-mythology-slots/","matchPath":"/de/gambling/casino/norse-mythology-slots/"},{"path":"/de/gambling/casino/official-trump/","matchPath":"/de/gambling/casino/official-trump/"},{"path":"/de/gambling/casino/optimism/","matchPath":"/de/gambling/casino/optimism/"},{"path":"/de/gambling/casino/pirate-slots/","matchPath":"/de/gambling/casino/pirate-slots/"},{"path":"/de/gambling/casino/plinko/","matchPath":"/de/gambling/casino/plinko/"},{"path":"/de/gambling/casino/poker/","matchPath":"/de/gambling/casino/poker/"},{"path":"/de/gambling/casino/polygon/","matchPath":"/de/gambling/casino/polygon/"},{"path":"/de/gambling/casino/privacy/","matchPath":"/de/gambling/casino/privacy/"},{"path":"/de/gambling/casino/progressive-jackpot/","matchPath":"/de/gambling/casino/progressive-jackpot/"},{"path":"/de/gambling/casino/provably-fair/","matchPath":"/de/gambling/casino/provably-fair/"},{"path":"/de/gambling/casino/respins/","matchPath":"/de/gambling/casino/respins/"},{"path":"/de/gambling/casino/roulette/","matchPath":"/de/gambling/casino/roulette/"},{"path":"/de/gambling/casino/scatter-pays/","matchPath":"/de/gambling/casino/scatter-pays/"},{"path":"/de/gambling/casino/scratch-cards/","matchPath":"/de/gambling/casino/scratch-cards/"},{"path":"/de/gambling/casino/shiba-inu/","matchPath":"/de/gambling/casino/shiba-inu/"},{"path":"/de/gambling/casino/sic-bo/","matchPath":"/de/gambling/casino/sic-bo/"},{"path":"/de/gambling/casino/slots/","matchPath":"/de/gambling/casino/slots/"},{"path":"/de/gambling/casino/social-casino/","matchPath":"/de/gambling/casino/social-casino/"},{"path":"/de/gambling/casino/solana/","matchPath":"/de/gambling/casino/solana/"},{"path":"/de/gambling/casino/stablecoins/","matchPath":"/de/gambling/casino/stablecoins/"},{"path":"/de/gambling/casino/sweepstakes/","matchPath":"/de/gambling/casino/sweepstakes/"},{"path":"/de/gambling/casino/ton/","matchPath":"/de/gambling/casino/ton/"},{"path":"/de/gambling/casino/toshi/","matchPath":"/de/gambling/casino/toshi/"},{"path":"/de/gambling/casino/treasure-hunt-slots/","matchPath":"/de/gambling/casino/treasure-hunt-slots/"},{"path":"/de/gambling/casino/trump/","matchPath":"/de/gambling/casino/trump/"},{"path":"/de/gambling/casino/trx/","matchPath":"/de/gambling/casino/trx/"},{"path":"/de/gambling/casino/usdc/","matchPath":"/de/gambling/casino/usdc/"},{"path":"/de/gambling/casino/usdt/","matchPath":"/de/gambling/casino/usdt/"},{"path":"/de/gambling/casino/verse/","matchPath":"/de/gambling/casino/verse/"},{"path":"/de/gambling/casino/video-poker/","matchPath":"/de/gambling/casino/video-poker/"},{"path":"/de/gambling/casino/viking-casino-games/","matchPath":"/de/gambling/casino/viking-casino-games/"},{"path":"/de/gambling/casino/vip/","matchPath":"/de/gambling/casino/vip/"},{"path":"/de/gambling/casino/wheel/","matchPath":"/de/gambling/casino/wheel/"},{"path":"/de/gambling/casino/xrp/","matchPath":"/de/gambling/casino/xrp/"},{"path":"/de/gambling/reviews/0xbet/","matchPath":"/de/gambling/reviews/0xbet/"},{"path":"/de/gambling/reviews/1win/","matchPath":"/de/gambling/reviews/1win/"},{"path":"/de/gambling/reviews/1xbit/","matchPath":"/de/gambling/reviews/1xbit/"},{"path":"/de/gambling/reviews/500-casino/","matchPath":"/de/gambling/reviews/500-casino/"},{"path":"/de/gambling/reviews/7bitcasino/","matchPath":"/de/gambling/reviews/7bitcasino/"},{"path":"/de/gambling/reviews/888starzbet/","matchPath":"/de/gambling/reviews/888starzbet/"},{"path":"/de/gambling/reviews/abuking/","matchPath":"/de/gambling/reviews/abuking/"},{"path":"/de/gambling/reviews/aerogram-bot/","matchPath":"/de/gambling/reviews/aerogram-bot/"},{"path":"/de/gambling/reviews/alibabet/","matchPath":"/de/gambling/reviews/alibabet/"},{"path":"/de/gambling/reviews/anonymbet/","matchPath":"/de/gambling/reviews/anonymbet/"},{"path":"/de/gambling/reviews/ballersbet/","matchPath":"/de/gambling/reviews/ballersbet/"},{"path":"/de/gambling/reviews/bc-game/","matchPath":"/de/gambling/reviews/bc-game/"},{"path":"/de/gambling/reviews/bet20/","matchPath":"/de/gambling/reviews/bet20/"},{"path":"/de/gambling/reviews/betandreas/","matchPath":"/de/gambling/reviews/betandreas/"},{"path":"/de/gambling/reviews/betfinal/","matchPath":"/de/gambling/reviews/betfinal/"},{"path":"/de/gambling/reviews/bethog/","matchPath":"/de/gambling/reviews/bethog/"},{"path":"/de/gambling/reviews/betpanda/","matchPath":"/de/gambling/reviews/betpanda/"},{"path":"/de/gambling/reviews/betplay/","matchPath":"/de/gambling/reviews/betplay/"},{"path":"/de/gambling/reviews/betrunner/","matchPath":"/de/gambling/reviews/betrunner/"},{"path":"/de/gambling/reviews/betsio/","matchPath":"/de/gambling/reviews/betsio/"},{"path":"/de/gambling/reviews/bety/","matchPath":"/de/gambling/reviews/bety/"},{"path":"/de/gambling/reviews/bitcasino-io/","matchPath":"/de/gambling/reviews/bitcasino-io/"},{"path":"/de/gambling/reviews/bitcoinsportsbookag/","matchPath":"/de/gambling/reviews/bitcoinsportsbookag/"},{"path":"/de/gambling/reviews/bitsler/","matchPath":"/de/gambling/reviews/bitsler/"},{"path":"/de/gambling/reviews/bitstake/","matchPath":"/de/gambling/reviews/bitstake/"},{"path":"/de/gambling/reviews/bitstarz/","matchPath":"/de/gambling/reviews/bitstarz/"},{"path":"/de/gambling/reviews/bitstrike/","matchPath":"/de/gambling/reviews/bitstrike/"},{"path":"/de/gambling/reviews/bitz/","matchPath":"/de/gambling/reviews/bitz/"},{"path":"/de/gambling/reviews/boomerang-bet/","matchPath":"/de/gambling/reviews/boomerang-bet/"},{"path":"/de/gambling/reviews/bspin/","matchPath":"/de/gambling/reviews/bspin/"},{"path":"/de/gambling/reviews/bullsbet/","matchPath":"/de/gambling/reviews/bullsbet/"},{"path":"/de/gambling/reviews/casino-bitcoin-com/","matchPath":"/de/gambling/reviews/casino-bitcoin-com/"},{"path":"/de/gambling/reviews/casinobet/","matchPath":"/de/gambling/reviews/casinobet/"},{"path":"/de/gambling/reviews/casinopunkz/","matchPath":"/de/gambling/reviews/casinopunkz/"},{"path":"/de/gambling/reviews/celsius-casino/","matchPath":"/de/gambling/reviews/celsius-casino/"},{"path":"/de/gambling/reviews/chancer/","matchPath":"/de/gambling/reviews/chancer/"},{"path":"/de/gambling/reviews/claps-bet/","matchPath":"/de/gambling/reviews/claps-bet/"},{"path":"/de/gambling/reviews/cloudbet/","matchPath":"/de/gambling/reviews/cloudbet/"},{"path":"/de/gambling/reviews/crashino/","matchPath":"/de/gambling/reviews/crashino/"},{"path":"/de/gambling/reviews/crypto-games/","matchPath":"/de/gambling/reviews/crypto-games/"},{"path":"/de/gambling/reviews/cryptoleo/","matchPath":"/de/gambling/reviews/cryptoleo/"},{"path":"/de/gambling/reviews/cryptorino/","matchPath":"/de/gambling/reviews/cryptorino/"},{"path":"/de/gambling/reviews/dbosses/","matchPath":"/de/gambling/reviews/dbosses/"},{"path":"/de/gambling/reviews/dexsport/","matchPath":"/de/gambling/reviews/dexsport/"},{"path":"/de/gambling/reviews/donbet/","matchPath":"/de/gambling/reviews/donbet/"},{"path":"/de/gambling/reviews/drake-casino/","matchPath":"/de/gambling/reviews/drake-casino/"},{"path":"/de/gambling/reviews/duckdice/","matchPath":"/de/gambling/reviews/duckdice/"},{"path":"/de/gambling/reviews/duelbits/","matchPath":"/de/gambling/reviews/duelbits/"},{"path":"/de/gambling/reviews/empire-io/","matchPath":"/de/gambling/reviews/empire-io/"},{"path":"/de/gambling/reviews/fairspin/","matchPath":"/de/gambling/reviews/fairspin/"},{"path":"/de/gambling/reviews/felixspin/","matchPath":"/de/gambling/reviews/felixspin/"},{"path":"/de/gambling/reviews/flush/","matchPath":"/de/gambling/reviews/flush/"},{"path":"/de/gambling/reviews/fortunejack/","matchPath":"/de/gambling/reviews/fortunejack/"},{"path":"/de/gambling/reviews/gamdom/","matchPath":"/de/gambling/reviews/gamdom/"},{"path":"/de/gambling/reviews/gamegram/","matchPath":"/de/gambling/reviews/gamegram/"},{"path":"/de/gambling/reviews/goldenpanda/","matchPath":"/de/gambling/reviews/goldenpanda/"},{"path":"/de/gambling/reviews/howlgg/","matchPath":"/de/gambling/reviews/howlgg/"},{"path":"/de/gambling/reviews/hugewin/","matchPath":"/de/gambling/reviews/hugewin/"},{"path":"/de/gambling/reviews/instant-casino/","matchPath":"/de/gambling/reviews/instant-casino/"},{"path":"/de/gambling/reviews/jackbit/","matchPath":"/de/gambling/reviews/jackbit/"},{"path":"/de/gambling/reviews/jetton/","matchPath":"/de/gambling/reviews/jetton/"},{"path":"/de/gambling/reviews/kingsofsport/","matchPath":"/de/gambling/reviews/kingsofsport/"},{"path":"/de/gambling/reviews/lucky-block/","matchPath":"/de/gambling/reviews/lucky-block/"},{"path":"/de/gambling/reviews/luckywhale/","matchPath":"/de/gambling/reviews/luckywhale/"},{"path":"/de/gambling/reviews/mbit/","matchPath":"/de/gambling/reviews/mbit/"},{"path":"/de/gambling/reviews/mega-dice/","matchPath":"/de/gambling/reviews/mega-dice/"},{"path":"/de/gambling/reviews/megapari/","matchPath":"/de/gambling/reviews/megapari/"},{"path":"/de/gambling/reviews/monkeytilt/","matchPath":"/de/gambling/reviews/monkeytilt/"},{"path":"/de/gambling/reviews/mystake/","matchPath":"/de/gambling/reviews/mystake/"},{"path":"/de/gambling/reviews/playbet-io/","matchPath":"/de/gambling/reviews/playbet-io/"},{"path":"/de/gambling/reviews/poolbit/","matchPath":"/de/gambling/reviews/poolbit/"},{"path":"/de/gambling/reviews/rainbet/","matchPath":"/de/gambling/reviews/rainbet/"},{"path":"/de/gambling/reviews/rakebit/","matchPath":"/de/gambling/reviews/rakebit/"},{"path":"/de/gambling/reviews/roobet/","matchPath":"/de/gambling/reviews/roobet/"},{"path":"/de/gambling/reviews/shock/","matchPath":"/de/gambling/reviews/shock/"},{"path":"/de/gambling/reviews/shuffle/","matchPath":"/de/gambling/reviews/shuffle/"},{"path":"/de/gambling/reviews/spinly/","matchPath":"/de/gambling/reviews/spinly/"},{"path":"/de/gambling/reviews/sportbet-one/","matchPath":"/de/gambling/reviews/sportbet-one/"},{"path":"/de/gambling/reviews/sportsbet-io/","matchPath":"/de/gambling/reviews/sportsbet-io/"},{"path":"/de/gambling/reviews/stake/","matchPath":"/de/gambling/reviews/stake/"},{"path":"/de/gambling/reviews/telbet/","matchPath":"/de/gambling/reviews/telbet/"},{"path":"/de/gambling/reviews/tg-casino/","matchPath":"/de/gambling/reviews/tg-casino/"},{"path":"/de/gambling/reviews/thunderpick/","matchPath":"/de/gambling/reviews/thunderpick/"},{"path":"/de/gambling/reviews/toshibet/","matchPath":"/de/gambling/reviews/toshibet/"},{"path":"/de/gambling/reviews/vave/","matchPath":"/de/gambling/reviews/vave/"},{"path":"/de/gambling/reviews/vipcasino/","matchPath":"/de/gambling/reviews/vipcasino/"},{"path":"/de/gambling/reviews/weiss/","matchPath":"/de/gambling/reviews/weiss/"},{"path":"/de/gambling/reviews/whale/","matchPath":"/de/gambling/reviews/whale/"},{"path":"/de/gambling/reviews/wikibet/","matchPath":"/de/gambling/reviews/wikibet/"},{"path":"/de/gambling/reviews/wildio/","matchPath":"/de/gambling/reviews/wildio/"},{"path":"/de/gambling/reviews/wildtornado/","matchPath":"/de/gambling/reviews/wildtornado/"},{"path":"/de/gambling/reviews/willbet/","matchPath":"/de/gambling/reviews/willbet/"},{"path":"/de/gambling/reviews/win-casino/","matchPath":"/de/gambling/reviews/win-casino/"},{"path":"/de/gambling/reviews/winna/","matchPath":"/de/gambling/reviews/winna/"},{"path":"/de/gambling/reviews/winwin-bet/","matchPath":"/de/gambling/reviews/winwin-bet/"},{"path":"/de/gambling/reviews/winz-io/","matchPath":"/de/gambling/reviews/winz-io/"},{"path":"/de/gambling/reviews/ybets/","matchPath":"/de/gambling/reviews/ybets/"},{"path":"/de/gambling/reviews/yyy-casino/","matchPath":"/de/gambling/reviews/yyy-casino/"},{"path":"/de/mining/cloud-mining/ethereum/","matchPath":"/de/mining/cloud-mining/ethereum/"},{"path":"/de/mining/cloud-mining/solana/","matchPath":"/de/mining/cloud-mining/solana/"},{"path":"/de/wallet/reviews/bitcoincom-wallet/","matchPath":"/de/wallet/reviews/bitcoincom-wallet/"},{"path":"/de/wallet/reviews/metamask/","matchPath":"/de/wallet/reviews/metamask/"},{"path":"/de/wallet/reviews/phantom/","matchPath":"/de/wallet/reviews/phantom/"},{"path":"/de/wallet/reviews/rockwallet/","matchPath":"/de/wallet/reviews/rockwallet/"},{"path":"/de/wallet/reviews/trezor/","matchPath":"/de/wallet/reviews/trezor/"},{"path":"/de/wallet/reviews/uphold/","matchPath":"/de/wallet/reviews/uphold/"},{"path":"/es/cards/reviews/bitrefill/","matchPath":"/es/cards/reviews/bitrefill/"},{"path":"/es/cards/reviews/gemini/","matchPath":"/es/cards/reviews/gemini/"},{"path":"/es/cards/reviews/solcard/","matchPath":"/es/cards/reviews/solcard/"},{"path":"/es/cards/reviews/verse-card/","matchPath":"/es/cards/reviews/verse-card/"},{"path":"/es/exchanges/reviews/binance/","matchPath":"/es/exchanges/reviews/binance/"},{"path":"/es/exchanges/reviews/bitget/","matchPath":"/es/exchanges/reviews/bitget/"},{"path":"/es/exchanges/reviews/btcc/","matchPath":"/es/exchanges/reviews/btcc/"},{"path":"/es/exchanges/reviews/coinbase/","matchPath":"/es/exchanges/reviews/coinbase/"},{"path":"/es/exchanges/reviews/coincorner/","matchPath":"/es/exchanges/reviews/coincorner/"},{"path":"/es/exchanges/reviews/coinflare/","matchPath":"/es/exchanges/reviews/coinflare/"},{"path":"/es/exchanges/reviews/cryptomus/","matchPath":"/es/exchanges/reviews/cryptomus/"},{"path":"/es/exchanges/reviews/digital-surge/","matchPath":"/es/exchanges/reviews/digital-surge/"},{"path":"/es/exchanges/reviews/exolix/","matchPath":"/es/exchanges/reviews/exolix/"},{"path":"/es/exchanges/reviews/figure-markets/","matchPath":"/es/exchanges/reviews/figure-markets/"},{"path":"/es/exchanges/reviews/gemini/","matchPath":"/es/exchanges/reviews/gemini/"},{"path":"/es/exchanges/reviews/godex/","matchPath":"/es/exchanges/reviews/godex/"},{"path":"/es/exchanges/reviews/kraken/","matchPath":"/es/exchanges/reviews/kraken/"},{"path":"/es/exchanges/reviews/kucoin/","matchPath":"/es/exchanges/reviews/kucoin/"},{"path":"/es/exchanges/reviews/margex/","matchPath":"/es/exchanges/reviews/margex/"},{"path":"/es/exchanges/reviews/mexc/","matchPath":"/es/exchanges/reviews/mexc/"},{"path":"/es/exchanges/reviews/prime-xbt/","matchPath":"/es/exchanges/reviews/prime-xbt/"},{"path":"/es/exchanges/reviews/primexbt/","matchPath":"/es/exchanges/reviews/primexbt/"},{"path":"/es/exchanges/reviews/rocko/","matchPath":"/es/exchanges/reviews/rocko/"},{"path":"/es/exchanges/reviews/swapuz/","matchPath":"/es/exchanges/reviews/swapuz/"},{"path":"/es/exchanges/reviews/uphold/","matchPath":"/es/exchanges/reviews/uphold/"},{"path":"/es/exchanges/reviews/verse/","matchPath":"/es/exchanges/reviews/verse/"},{"path":"/es/exchanges/reviews/virgo-cx/","matchPath":"/es/exchanges/reviews/virgo-cx/"},{"path":"/es/exchanges/reviews/virgo/","matchPath":"/es/exchanges/reviews/virgo/"},{"path":"/es/exchanges/reviews/voox/","matchPath":"/es/exchanges/reviews/voox/"},{"path":"/es/exchanges/reviews/woofi/","matchPath":"/es/exchanges/reviews/woofi/"},{"path":"/es/exchanges/reviews/woox/","matchPath":"/es/exchanges/reviews/woox/"},{"path":"/es/exchanges/reviews/xbo/","matchPath":"/es/exchanges/reviews/xbo/"},{"path":"/es/gambling/betting/american-football/","matchPath":"/es/gambling/betting/american-football/"},{"path":"/es/gambling/betting/anonymous/","matchPath":"/es/gambling/betting/anonymous/"},{"path":"/es/gambling/betting/australian-open-tennis/","matchPath":"/es/gambling/betting/australian-open-tennis/"},{"path":"/es/gambling/betting/badminton/","matchPath":"/es/gambling/betting/badminton/"},{"path":"/es/gambling/betting/baseball/","matchPath":"/es/gambling/betting/baseball/"},{"path":"/es/gambling/betting/basketball/","matchPath":"/es/gambling/betting/basketball/"},{"path":"/es/gambling/betting/betting-exchanges/","matchPath":"/es/gambling/betting/betting-exchanges/"},{"path":"/es/gambling/betting/bonuses/","matchPath":"/es/gambling/betting/bonuses/"},{"path":"/es/gambling/betting/boxing/","matchPath":"/es/gambling/betting/boxing/"},{"path":"/es/gambling/betting/bundesliga/","matchPath":"/es/gambling/betting/bundesliga/"},{"path":"/es/gambling/betting/chess/","matchPath":"/es/gambling/betting/chess/"},{"path":"/es/gambling/betting/college-basketball/","matchPath":"/es/gambling/betting/college-basketball/"},{"path":"/es/gambling/betting/cricket/","matchPath":"/es/gambling/betting/cricket/"},{"path":"/es/gambling/betting/cycling/","matchPath":"/es/gambling/betting/cycling/"},{"path":"/es/gambling/betting/darts/","matchPath":"/es/gambling/betting/darts/"},{"path":"/es/gambling/betting/english-premier-league/","matchPath":"/es/gambling/betting/english-premier-league/"},{"path":"/es/gambling/betting/esports/","matchPath":"/es/gambling/betting/esports/"},{"path":"/es/gambling/betting/fantasy-sports/","matchPath":"/es/gambling/betting/fantasy-sports/"},{"path":"/es/gambling/betting/fifa-world-cup-2025/","matchPath":"/es/gambling/betting/fifa-world-cup-2025/"},{"path":"/es/gambling/betting/football/","matchPath":"/es/gambling/betting/football/"},{"path":"/es/gambling/betting/formula-1/","matchPath":"/es/gambling/betting/formula-1/"},{"path":"/es/gambling/betting/french-open-tennis/","matchPath":"/es/gambling/betting/french-open-tennis/"},{"path":"/es/gambling/betting/grand-slam/","matchPath":"/es/gambling/betting/grand-slam/"},{"path":"/es/gambling/betting/greyhound-racing/","matchPath":"/es/gambling/betting/greyhound-racing/"},{"path":"/es/gambling/betting/handball/","matchPath":"/es/gambling/betting/handball/"},{"path":"/es/gambling/betting/hockey/","matchPath":"/es/gambling/betting/hockey/"},{"path":"/es/gambling/betting/horse-racing/","matchPath":"/es/gambling/betting/horse-racing/"},{"path":"/es/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/es/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/es/gambling/betting/ice-hockey/","matchPath":"/es/gambling/betting/ice-hockey/"},{"path":"/es/gambling/betting/kentucky-derby/","matchPath":"/es/gambling/betting/kentucky-derby/"},{"path":"/es/gambling/betting/la-liga/","matchPath":"/es/gambling/betting/la-liga/"},{"path":"/es/gambling/betting/live-betting/","matchPath":"/es/gambling/betting/live-betting/"},{"path":"/es/gambling/betting/march-madness/","matchPath":"/es/gambling/betting/march-madness/"},{"path":"/es/gambling/betting/mma/","matchPath":"/es/gambling/betting/mma/"},{"path":"/es/gambling/betting/motorsports/","matchPath":"/es/gambling/betting/motorsports/"},{"path":"/es/gambling/betting/nascar-cup-series/","matchPath":"/es/gambling/betting/nascar-cup-series/"},{"path":"/es/gambling/betting/nba-draft-2025/","matchPath":"/es/gambling/betting/nba-draft-2025/"},{"path":"/es/gambling/betting/nfl-draft-2025/","matchPath":"/es/gambling/betting/nfl-draft-2025/"},{"path":"/es/gambling/betting/nhl-entry-draft-2025/","matchPath":"/es/gambling/betting/nhl-entry-draft-2025/"},{"path":"/es/gambling/betting/olympics/","matchPath":"/es/gambling/betting/olympics/"},{"path":"/es/gambling/betting/pga/","matchPath":"/es/gambling/betting/pga/"},{"path":"/es/gambling/betting/politics/","matchPath":"/es/gambling/betting/politics/"},{"path":"/es/gambling/betting/prediction-markets/","matchPath":"/es/gambling/betting/prediction-markets/"},{"path":"/es/gambling/betting/rugby/","matchPath":"/es/gambling/betting/rugby/"},{"path":"/es/gambling/betting/serie-a/","matchPath":"/es/gambling/betting/serie-a/"},{"path":"/es/gambling/betting/snooker/","matchPath":"/es/gambling/betting/snooker/"},{"path":"/es/gambling/betting/sportsbook/","matchPath":"/es/gambling/betting/sportsbook/"},{"path":"/es/gambling/betting/stock-car-racing/","matchPath":"/es/gambling/betting/stock-car-racing/"},{"path":"/es/gambling/betting/super-bowl-lix/","matchPath":"/es/gambling/betting/super-bowl-lix/"},{"path":"/es/gambling/betting/table-tennis/","matchPath":"/es/gambling/betting/table-tennis/"},{"path":"/es/gambling/betting/ufc-fight-night/","matchPath":"/es/gambling/betting/ufc-fight-night/"},{"path":"/es/gambling/betting/ufc/","matchPath":"/es/gambling/betting/ufc/"},{"path":"/es/gambling/betting/up-and-down/","matchPath":"/es/gambling/betting/up-and-down/"},{"path":"/es/gambling/betting/us-open-tennis/","matchPath":"/es/gambling/betting/us-open-tennis/"},{"path":"/es/gambling/betting/volleyball/","matchPath":"/es/gambling/betting/volleyball/"},{"path":"/es/gambling/betting/wimbledon/","matchPath":"/es/gambling/betting/wimbledon/"},{"path":"/es/gambling/betting/winter-sports/","matchPath":"/es/gambling/betting/winter-sports/"},{"path":"/es/gambling/casino/anonymous/","matchPath":"/es/gambling/casino/anonymous/"},{"path":"/es/gambling/casino/arbitrum/","matchPath":"/es/gambling/casino/arbitrum/"},{"path":"/es/gambling/casino/avax/","matchPath":"/es/gambling/casino/avax/"},{"path":"/es/gambling/casino/baccarat/","matchPath":"/es/gambling/casino/baccarat/"},{"path":"/es/gambling/casino/base/","matchPath":"/es/gambling/casino/base/"},{"path":"/es/gambling/casino/binance-coin/","matchPath":"/es/gambling/casino/binance-coin/"},{"path":"/es/gambling/casino/bitcoin-cash/","matchPath":"/es/gambling/casino/bitcoin-cash/"},{"path":"/es/gambling/casino/bitcoin/","matchPath":"/es/gambling/casino/bitcoin/"},{"path":"/es/gambling/casino/blackjack/","matchPath":"/es/gambling/casino/blackjack/"},{"path":"/es/gambling/casino/bonus-buys/","matchPath":"/es/gambling/casino/bonus-buys/"},{"path":"/es/gambling/casino/bonus/","matchPath":"/es/gambling/casino/bonus/"},{"path":"/es/gambling/casino/book-of/","matchPath":"/es/gambling/casino/book-of/"},{"path":"/es/gambling/casino/buy-extra-ball/","matchPath":"/es/gambling/casino/buy-extra-ball/"},{"path":"/es/gambling/casino/cardano/","matchPath":"/es/gambling/casino/cardano/"},{"path":"/es/gambling/casino/cluster-pays/","matchPath":"/es/gambling/casino/cluster-pays/"},{"path":"/es/gambling/casino/cosmic-jackpot-games/","matchPath":"/es/gambling/casino/cosmic-jackpot-games/"},{"path":"/es/gambling/casino/craps/","matchPath":"/es/gambling/casino/craps/"},{"path":"/es/gambling/casino/crash/","matchPath":"/es/gambling/casino/crash/"},{"path":"/es/gambling/casino/dai/","matchPath":"/es/gambling/casino/dai/"},{"path":"/es/gambling/casino/decentralized/","matchPath":"/es/gambling/casino/decentralized/"},{"path":"/es/gambling/casino/defi/","matchPath":"/es/gambling/casino/defi/"},{"path":"/es/gambling/casino/dice/","matchPath":"/es/gambling/casino/dice/"},{"path":"/es/gambling/casino/discord/","matchPath":"/es/gambling/casino/discord/"},{"path":"/es/gambling/casino/dogecoin/","matchPath":"/es/gambling/casino/dogecoin/"},{"path":"/es/gambling/casino/drops-and-wins/","matchPath":"/es/gambling/casino/drops-and-wins/"},{"path":"/es/gambling/casino/egyptian-slots/","matchPath":"/es/gambling/casino/egyptian-slots/"},{"path":"/es/gambling/casino/eth-bonus/","matchPath":"/es/gambling/casino/eth-bonus/"},{"path":"/es/gambling/casino/eth-live-dealer/","matchPath":"/es/gambling/casino/eth-live-dealer/"},{"path":"/es/gambling/casino/eth-no-deposit-bonus/","matchPath":"/es/gambling/casino/eth-no-deposit-bonus/"},{"path":"/es/gambling/casino/eth-roulette/","matchPath":"/es/gambling/casino/eth-roulette/"},{"path":"/es/gambling/casino/eth-slots/","matchPath":"/es/gambling/casino/eth-slots/"},{"path":"/es/gambling/casino/ethereum/","matchPath":"/es/gambling/casino/ethereum/"},{"path":"/es/gambling/casino/free-spins/","matchPath":"/es/gambling/casino/free-spins/"},{"path":"/es/gambling/casino/galactic-slot-machines/","matchPath":"/es/gambling/casino/galactic-slot-machines/"},{"path":"/es/gambling/casino/game-shows/","matchPath":"/es/gambling/casino/game-shows/"},{"path":"/es/gambling/casino/high-rollers/","matchPath":"/es/gambling/casino/high-rollers/"},{"path":"/es/gambling/casino/high-volatility/","matchPath":"/es/gambling/casino/high-volatility/"},{"path":"/es/gambling/casino/hold-and-win/","matchPath":"/es/gambling/casino/hold-and-win/"},{"path":"/es/gambling/casino/horror-casino-games/","matchPath":"/es/gambling/casino/horror-casino-games/"},{"path":"/es/gambling/casino/instant-withdrawal/","matchPath":"/es/gambling/casino/instant-withdrawal/"},{"path":"/es/gambling/casino/jackpot/","matchPath":"/es/gambling/casino/jackpot/"},{"path":"/es/gambling/casino/keno/","matchPath":"/es/gambling/casino/keno/"},{"path":"/es/gambling/casino/litecoin/","matchPath":"/es/gambling/casino/litecoin/"},{"path":"/es/gambling/casino/live-dealer/","matchPath":"/es/gambling/casino/live-dealer/"},{"path":"/es/gambling/casino/megaways/","matchPath":"/es/gambling/casino/megaways/"},{"path":"/es/gambling/casino/meme-coins/","matchPath":"/es/gambling/casino/meme-coins/"},{"path":"/es/gambling/casino/metamask/","matchPath":"/es/gambling/casino/metamask/"},{"path":"/es/gambling/casino/metaverse/","matchPath":"/es/gambling/casino/metaverse/"},{"path":"/es/gambling/casino/mines/","matchPath":"/es/gambling/casino/mines/"},{"path":"/es/gambling/casino/minimum-deposit/","matchPath":"/es/gambling/casino/minimum-deposit/"},{"path":"/es/gambling/casino/mobile/","matchPath":"/es/gambling/casino/mobile/"},{"path":"/es/gambling/casino/multiplayer-games/","matchPath":"/es/gambling/casino/multiplayer-games/"},{"path":"/es/gambling/casino/newest/","matchPath":"/es/gambling/casino/newest/"},{"path":"/es/gambling/casino/nft/","matchPath":"/es/gambling/casino/nft/"},{"path":"/es/gambling/casino/no-deposit-bonus/","matchPath":"/es/gambling/casino/no-deposit-bonus/"},{"path":"/es/gambling/casino/norse-mythology-slots/","matchPath":"/es/gambling/casino/norse-mythology-slots/"},{"path":"/es/gambling/casino/official-trump/","matchPath":"/es/gambling/casino/official-trump/"},{"path":"/es/gambling/casino/optimism/","matchPath":"/es/gambling/casino/optimism/"},{"path":"/es/gambling/casino/pirate-slots/","matchPath":"/es/gambling/casino/pirate-slots/"},{"path":"/es/gambling/casino/plinko/","matchPath":"/es/gambling/casino/plinko/"},{"path":"/es/gambling/casino/poker/","matchPath":"/es/gambling/casino/poker/"},{"path":"/es/gambling/casino/polygon/","matchPath":"/es/gambling/casino/polygon/"},{"path":"/es/gambling/casino/privacy/","matchPath":"/es/gambling/casino/privacy/"},{"path":"/es/gambling/casino/progressive-jackpot/","matchPath":"/es/gambling/casino/progressive-jackpot/"},{"path":"/es/gambling/casino/provably-fair/","matchPath":"/es/gambling/casino/provably-fair/"},{"path":"/es/gambling/casino/respins/","matchPath":"/es/gambling/casino/respins/"},{"path":"/es/gambling/casino/roulette/","matchPath":"/es/gambling/casino/roulette/"},{"path":"/es/gambling/casino/scatter-pays/","matchPath":"/es/gambling/casino/scatter-pays/"},{"path":"/es/gambling/casino/scratch-cards/","matchPath":"/es/gambling/casino/scratch-cards/"},{"path":"/es/gambling/casino/shiba-inu/","matchPath":"/es/gambling/casino/shiba-inu/"},{"path":"/es/gambling/casino/sic-bo/","matchPath":"/es/gambling/casino/sic-bo/"},{"path":"/es/gambling/casino/slots/","matchPath":"/es/gambling/casino/slots/"},{"path":"/es/gambling/casino/social-casino/","matchPath":"/es/gambling/casino/social-casino/"},{"path":"/es/gambling/casino/solana/","matchPath":"/es/gambling/casino/solana/"},{"path":"/es/gambling/casino/stablecoins/","matchPath":"/es/gambling/casino/stablecoins/"},{"path":"/es/gambling/casino/sweepstakes/","matchPath":"/es/gambling/casino/sweepstakes/"},{"path":"/es/gambling/casino/ton/","matchPath":"/es/gambling/casino/ton/"},{"path":"/es/gambling/casino/toshi/","matchPath":"/es/gambling/casino/toshi/"},{"path":"/es/gambling/casino/treasure-hunt-slots/","matchPath":"/es/gambling/casino/treasure-hunt-slots/"},{"path":"/es/gambling/casino/trump/","matchPath":"/es/gambling/casino/trump/"},{"path":"/es/gambling/casino/trx/","matchPath":"/es/gambling/casino/trx/"},{"path":"/es/gambling/casino/usdc/","matchPath":"/es/gambling/casino/usdc/"},{"path":"/es/gambling/casino/usdt/","matchPath":"/es/gambling/casino/usdt/"},{"path":"/es/gambling/casino/verse/","matchPath":"/es/gambling/casino/verse/"},{"path":"/es/gambling/casino/video-poker/","matchPath":"/es/gambling/casino/video-poker/"},{"path":"/es/gambling/casino/viking-casino-games/","matchPath":"/es/gambling/casino/viking-casino-games/"},{"path":"/es/gambling/casino/vip/","matchPath":"/es/gambling/casino/vip/"},{"path":"/es/gambling/casino/wheel/","matchPath":"/es/gambling/casino/wheel/"},{"path":"/es/gambling/casino/xrp/","matchPath":"/es/gambling/casino/xrp/"},{"path":"/es/gambling/reviews/0xbet/","matchPath":"/es/gambling/reviews/0xbet/"},{"path":"/es/gambling/reviews/1win/","matchPath":"/es/gambling/reviews/1win/"},{"path":"/es/gambling/reviews/1xbit/","matchPath":"/es/gambling/reviews/1xbit/"},{"path":"/es/gambling/reviews/500-casino/","matchPath":"/es/gambling/reviews/500-casino/"},{"path":"/es/gambling/reviews/7bitcasino/","matchPath":"/es/gambling/reviews/7bitcasino/"},{"path":"/es/gambling/reviews/888starzbet/","matchPath":"/es/gambling/reviews/888starzbet/"},{"path":"/es/gambling/reviews/abuking/","matchPath":"/es/gambling/reviews/abuking/"},{"path":"/es/gambling/reviews/aerogram-bot/","matchPath":"/es/gambling/reviews/aerogram-bot/"},{"path":"/es/gambling/reviews/alibabet/","matchPath":"/es/gambling/reviews/alibabet/"},{"path":"/es/gambling/reviews/anonymbet/","matchPath":"/es/gambling/reviews/anonymbet/"},{"path":"/es/gambling/reviews/ballersbet/","matchPath":"/es/gambling/reviews/ballersbet/"},{"path":"/es/gambling/reviews/bc-game/","matchPath":"/es/gambling/reviews/bc-game/"},{"path":"/es/gambling/reviews/bet20/","matchPath":"/es/gambling/reviews/bet20/"},{"path":"/es/gambling/reviews/betandreas/","matchPath":"/es/gambling/reviews/betandreas/"},{"path":"/es/gambling/reviews/betfinal/","matchPath":"/es/gambling/reviews/betfinal/"},{"path":"/es/gambling/reviews/bethog/","matchPath":"/es/gambling/reviews/bethog/"},{"path":"/es/gambling/reviews/betpanda/","matchPath":"/es/gambling/reviews/betpanda/"},{"path":"/es/gambling/reviews/betplay/","matchPath":"/es/gambling/reviews/betplay/"},{"path":"/es/gambling/reviews/betrunner/","matchPath":"/es/gambling/reviews/betrunner/"},{"path":"/es/gambling/reviews/betsio/","matchPath":"/es/gambling/reviews/betsio/"},{"path":"/es/gambling/reviews/bety/","matchPath":"/es/gambling/reviews/bety/"},{"path":"/es/gambling/reviews/bitcasino-io/","matchPath":"/es/gambling/reviews/bitcasino-io/"},{"path":"/es/gambling/reviews/bitcoinsportsbookag/","matchPath":"/es/gambling/reviews/bitcoinsportsbookag/"},{"path":"/es/gambling/reviews/bitsler/","matchPath":"/es/gambling/reviews/bitsler/"},{"path":"/es/gambling/reviews/bitstake/","matchPath":"/es/gambling/reviews/bitstake/"},{"path":"/es/gambling/reviews/bitstarz/","matchPath":"/es/gambling/reviews/bitstarz/"},{"path":"/es/gambling/reviews/bitstrike/","matchPath":"/es/gambling/reviews/bitstrike/"},{"path":"/es/gambling/reviews/bitz/","matchPath":"/es/gambling/reviews/bitz/"},{"path":"/es/gambling/reviews/boomerang-bet/","matchPath":"/es/gambling/reviews/boomerang-bet/"},{"path":"/es/gambling/reviews/bspin/","matchPath":"/es/gambling/reviews/bspin/"},{"path":"/es/gambling/reviews/bullsbet/","matchPath":"/es/gambling/reviews/bullsbet/"},{"path":"/es/gambling/reviews/casino-bitcoin-com/","matchPath":"/es/gambling/reviews/casino-bitcoin-com/"},{"path":"/es/gambling/reviews/casinobet/","matchPath":"/es/gambling/reviews/casinobet/"},{"path":"/es/gambling/reviews/casinopunkz/","matchPath":"/es/gambling/reviews/casinopunkz/"},{"path":"/es/gambling/reviews/celsius-casino/","matchPath":"/es/gambling/reviews/celsius-casino/"},{"path":"/es/gambling/reviews/chancer/","matchPath":"/es/gambling/reviews/chancer/"},{"path":"/es/gambling/reviews/claps-bet/","matchPath":"/es/gambling/reviews/claps-bet/"},{"path":"/es/gambling/reviews/cloudbet/","matchPath":"/es/gambling/reviews/cloudbet/"},{"path":"/es/gambling/reviews/crashino/","matchPath":"/es/gambling/reviews/crashino/"},{"path":"/es/gambling/reviews/crypto-games/","matchPath":"/es/gambling/reviews/crypto-games/"},{"path":"/es/gambling/reviews/cryptoleo/","matchPath":"/es/gambling/reviews/cryptoleo/"},{"path":"/es/gambling/reviews/cryptorino/","matchPath":"/es/gambling/reviews/cryptorino/"},{"path":"/es/gambling/reviews/dbosses/","matchPath":"/es/gambling/reviews/dbosses/"},{"path":"/es/gambling/reviews/dexsport/","matchPath":"/es/gambling/reviews/dexsport/"},{"path":"/es/gambling/reviews/donbet/","matchPath":"/es/gambling/reviews/donbet/"},{"path":"/es/gambling/reviews/drake-casino/","matchPath":"/es/gambling/reviews/drake-casino/"},{"path":"/es/gambling/reviews/duckdice/","matchPath":"/es/gambling/reviews/duckdice/"},{"path":"/es/gambling/reviews/duelbits/","matchPath":"/es/gambling/reviews/duelbits/"},{"path":"/es/gambling/reviews/empire-io/","matchPath":"/es/gambling/reviews/empire-io/"},{"path":"/es/gambling/reviews/fairspin/","matchPath":"/es/gambling/reviews/fairspin/"},{"path":"/es/gambling/reviews/felixspin/","matchPath":"/es/gambling/reviews/felixspin/"},{"path":"/es/gambling/reviews/flush/","matchPath":"/es/gambling/reviews/flush/"},{"path":"/es/gambling/reviews/fortunejack/","matchPath":"/es/gambling/reviews/fortunejack/"},{"path":"/es/gambling/reviews/gamdom/","matchPath":"/es/gambling/reviews/gamdom/"},{"path":"/es/gambling/reviews/gamegram/","matchPath":"/es/gambling/reviews/gamegram/"},{"path":"/es/gambling/reviews/goldenpanda/","matchPath":"/es/gambling/reviews/goldenpanda/"},{"path":"/es/gambling/reviews/howlgg/","matchPath":"/es/gambling/reviews/howlgg/"},{"path":"/es/gambling/reviews/hugewin/","matchPath":"/es/gambling/reviews/hugewin/"},{"path":"/es/gambling/reviews/instant-casino/","matchPath":"/es/gambling/reviews/instant-casino/"},{"path":"/es/gambling/reviews/jackbit/","matchPath":"/es/gambling/reviews/jackbit/"},{"path":"/es/gambling/reviews/jetton/","matchPath":"/es/gambling/reviews/jetton/"},{"path":"/es/gambling/reviews/kingsofsport/","matchPath":"/es/gambling/reviews/kingsofsport/"},{"path":"/es/gambling/reviews/lucky-block/","matchPath":"/es/gambling/reviews/lucky-block/"},{"path":"/es/gambling/reviews/luckywhale/","matchPath":"/es/gambling/reviews/luckywhale/"},{"path":"/es/gambling/reviews/mbit/","matchPath":"/es/gambling/reviews/mbit/"},{"path":"/es/gambling/reviews/mega-dice/","matchPath":"/es/gambling/reviews/mega-dice/"},{"path":"/es/gambling/reviews/megapari/","matchPath":"/es/gambling/reviews/megapari/"},{"path":"/es/gambling/reviews/monkeytilt/","matchPath":"/es/gambling/reviews/monkeytilt/"},{"path":"/es/gambling/reviews/mystake/","matchPath":"/es/gambling/reviews/mystake/"},{"path":"/es/gambling/reviews/playbet-io/","matchPath":"/es/gambling/reviews/playbet-io/"},{"path":"/es/gambling/reviews/poolbit/","matchPath":"/es/gambling/reviews/poolbit/"},{"path":"/es/gambling/reviews/rainbet/","matchPath":"/es/gambling/reviews/rainbet/"},{"path":"/es/gambling/reviews/rakebit/","matchPath":"/es/gambling/reviews/rakebit/"},{"path":"/es/gambling/reviews/roobet/","matchPath":"/es/gambling/reviews/roobet/"},{"path":"/es/gambling/reviews/shock/","matchPath":"/es/gambling/reviews/shock/"},{"path":"/es/gambling/reviews/shuffle/","matchPath":"/es/gambling/reviews/shuffle/"},{"path":"/es/gambling/reviews/spinly/","matchPath":"/es/gambling/reviews/spinly/"},{"path":"/es/gambling/reviews/sportbet-one/","matchPath":"/es/gambling/reviews/sportbet-one/"},{"path":"/es/gambling/reviews/sportsbet-io/","matchPath":"/es/gambling/reviews/sportsbet-io/"},{"path":"/es/gambling/reviews/stake/","matchPath":"/es/gambling/reviews/stake/"},{"path":"/es/gambling/reviews/telbet/","matchPath":"/es/gambling/reviews/telbet/"},{"path":"/es/gambling/reviews/tg-casino/","matchPath":"/es/gambling/reviews/tg-casino/"},{"path":"/es/gambling/reviews/thunderpick/","matchPath":"/es/gambling/reviews/thunderpick/"},{"path":"/es/gambling/reviews/toshibet/","matchPath":"/es/gambling/reviews/toshibet/"},{"path":"/es/gambling/reviews/vave/","matchPath":"/es/gambling/reviews/vave/"},{"path":"/es/gambling/reviews/vipcasino/","matchPath":"/es/gambling/reviews/vipcasino/"},{"path":"/es/gambling/reviews/weiss/","matchPath":"/es/gambling/reviews/weiss/"},{"path":"/es/gambling/reviews/whale/","matchPath":"/es/gambling/reviews/whale/"},{"path":"/es/gambling/reviews/wikibet/","matchPath":"/es/gambling/reviews/wikibet/"},{"path":"/es/gambling/reviews/wildio/","matchPath":"/es/gambling/reviews/wildio/"},{"path":"/es/gambling/reviews/wildtornado/","matchPath":"/es/gambling/reviews/wildtornado/"},{"path":"/es/gambling/reviews/willbet/","matchPath":"/es/gambling/reviews/willbet/"},{"path":"/es/gambling/reviews/win-casino/","matchPath":"/es/gambling/reviews/win-casino/"},{"path":"/es/gambling/reviews/winna/","matchPath":"/es/gambling/reviews/winna/"},{"path":"/es/gambling/reviews/winwin-bet/","matchPath":"/es/gambling/reviews/winwin-bet/"},{"path":"/es/gambling/reviews/winz-io/","matchPath":"/es/gambling/reviews/winz-io/"},{"path":"/es/gambling/reviews/ybets/","matchPath":"/es/gambling/reviews/ybets/"},{"path":"/es/gambling/reviews/yyy-casino/","matchPath":"/es/gambling/reviews/yyy-casino/"},{"path":"/es/mining/cloud-mining/ethereum/","matchPath":"/es/mining/cloud-mining/ethereum/"},{"path":"/es/mining/cloud-mining/solana/","matchPath":"/es/mining/cloud-mining/solana/"},{"path":"/es/wallet/reviews/bitcoincom-wallet/","matchPath":"/es/wallet/reviews/bitcoincom-wallet/"},{"path":"/es/wallet/reviews/metamask/","matchPath":"/es/wallet/reviews/metamask/"},{"path":"/es/wallet/reviews/phantom/","matchPath":"/es/wallet/reviews/phantom/"},{"path":"/es/wallet/reviews/rockwallet/","matchPath":"/es/wallet/reviews/rockwallet/"},{"path":"/es/wallet/reviews/trezor/","matchPath":"/es/wallet/reviews/trezor/"},{"path":"/es/wallet/reviews/uphold/","matchPath":"/es/wallet/reviews/uphold/"},{"path":"/fr/cards/reviews/bitrefill/","matchPath":"/fr/cards/reviews/bitrefill/"},{"path":"/fr/cards/reviews/gemini/","matchPath":"/fr/cards/reviews/gemini/"},{"path":"/fr/cards/reviews/solcard/","matchPath":"/fr/cards/reviews/solcard/"},{"path":"/fr/cards/reviews/verse-card/","matchPath":"/fr/cards/reviews/verse-card/"},{"path":"/fr/exchanges/reviews/binance/","matchPath":"/fr/exchanges/reviews/binance/"},{"path":"/fr/exchanges/reviews/bitget/","matchPath":"/fr/exchanges/reviews/bitget/"},{"path":"/fr/exchanges/reviews/btcc/","matchPath":"/fr/exchanges/reviews/btcc/"},{"path":"/fr/exchanges/reviews/coinbase/","matchPath":"/fr/exchanges/reviews/coinbase/"},{"path":"/fr/exchanges/reviews/coincorner/","matchPath":"/fr/exchanges/reviews/coincorner/"},{"path":"/fr/exchanges/reviews/coinflare/","matchPath":"/fr/exchanges/reviews/coinflare/"},{"path":"/fr/exchanges/reviews/cryptomus/","matchPath":"/fr/exchanges/reviews/cryptomus/"},{"path":"/fr/exchanges/reviews/digital-surge/","matchPath":"/fr/exchanges/reviews/digital-surge/"},{"path":"/fr/exchanges/reviews/exolix/","matchPath":"/fr/exchanges/reviews/exolix/"},{"path":"/fr/exchanges/reviews/figure-markets/","matchPath":"/fr/exchanges/reviews/figure-markets/"},{"path":"/fr/exchanges/reviews/gemini/","matchPath":"/fr/exchanges/reviews/gemini/"},{"path":"/fr/exchanges/reviews/godex/","matchPath":"/fr/exchanges/reviews/godex/"},{"path":"/fr/exchanges/reviews/kraken/","matchPath":"/fr/exchanges/reviews/kraken/"},{"path":"/fr/exchanges/reviews/kucoin/","matchPath":"/fr/exchanges/reviews/kucoin/"},{"path":"/fr/exchanges/reviews/margex/","matchPath":"/fr/exchanges/reviews/margex/"},{"path":"/fr/exchanges/reviews/mexc/","matchPath":"/fr/exchanges/reviews/mexc/"},{"path":"/fr/exchanges/reviews/prime-xbt/","matchPath":"/fr/exchanges/reviews/prime-xbt/"},{"path":"/fr/exchanges/reviews/primexbt/","matchPath":"/fr/exchanges/reviews/primexbt/"},{"path":"/fr/exchanges/reviews/rocko/","matchPath":"/fr/exchanges/reviews/rocko/"},{"path":"/fr/exchanges/reviews/swapuz/","matchPath":"/fr/exchanges/reviews/swapuz/"},{"path":"/fr/exchanges/reviews/uphold/","matchPath":"/fr/exchanges/reviews/uphold/"},{"path":"/fr/exchanges/reviews/verse/","matchPath":"/fr/exchanges/reviews/verse/"},{"path":"/fr/exchanges/reviews/virgo-cx/","matchPath":"/fr/exchanges/reviews/virgo-cx/"},{"path":"/fr/exchanges/reviews/virgo/","matchPath":"/fr/exchanges/reviews/virgo/"},{"path":"/fr/exchanges/reviews/voox/","matchPath":"/fr/exchanges/reviews/voox/"},{"path":"/fr/exchanges/reviews/woofi/","matchPath":"/fr/exchanges/reviews/woofi/"},{"path":"/fr/exchanges/reviews/woox/","matchPath":"/fr/exchanges/reviews/woox/"},{"path":"/fr/exchanges/reviews/xbo/","matchPath":"/fr/exchanges/reviews/xbo/"},{"path":"/fr/gambling/betting/american-football/","matchPath":"/fr/gambling/betting/american-football/"},{"path":"/fr/gambling/betting/anonymous/","matchPath":"/fr/gambling/betting/anonymous/"},{"path":"/fr/gambling/betting/australian-open-tennis/","matchPath":"/fr/gambling/betting/australian-open-tennis/"},{"path":"/fr/gambling/betting/badminton/","matchPath":"/fr/gambling/betting/badminton/"},{"path":"/fr/gambling/betting/baseball/","matchPath":"/fr/gambling/betting/baseball/"},{"path":"/fr/gambling/betting/basketball/","matchPath":"/fr/gambling/betting/basketball/"},{"path":"/fr/gambling/betting/betting-exchanges/","matchPath":"/fr/gambling/betting/betting-exchanges/"},{"path":"/fr/gambling/betting/bonuses/","matchPath":"/fr/gambling/betting/bonuses/"},{"path":"/fr/gambling/betting/boxing/","matchPath":"/fr/gambling/betting/boxing/"},{"path":"/fr/gambling/betting/bundesliga/","matchPath":"/fr/gambling/betting/bundesliga/"},{"path":"/fr/gambling/betting/chess/","matchPath":"/fr/gambling/betting/chess/"},{"path":"/fr/gambling/betting/college-basketball/","matchPath":"/fr/gambling/betting/college-basketball/"},{"path":"/fr/gambling/betting/cricket/","matchPath":"/fr/gambling/betting/cricket/"},{"path":"/fr/gambling/betting/cycling/","matchPath":"/fr/gambling/betting/cycling/"},{"path":"/fr/gambling/betting/darts/","matchPath":"/fr/gambling/betting/darts/"},{"path":"/fr/gambling/betting/english-premier-league/","matchPath":"/fr/gambling/betting/english-premier-league/"},{"path":"/fr/gambling/betting/esports/","matchPath":"/fr/gambling/betting/esports/"},{"path":"/fr/gambling/betting/fantasy-sports/","matchPath":"/fr/gambling/betting/fantasy-sports/"},{"path":"/fr/gambling/betting/fifa-world-cup-2025/","matchPath":"/fr/gambling/betting/fifa-world-cup-2025/"},{"path":"/fr/gambling/betting/football/","matchPath":"/fr/gambling/betting/football/"},{"path":"/fr/gambling/betting/formula-1/","matchPath":"/fr/gambling/betting/formula-1/"},{"path":"/fr/gambling/betting/french-open-tennis/","matchPath":"/fr/gambling/betting/french-open-tennis/"},{"path":"/fr/gambling/betting/grand-slam/","matchPath":"/fr/gambling/betting/grand-slam/"},{"path":"/fr/gambling/betting/greyhound-racing/","matchPath":"/fr/gambling/betting/greyhound-racing/"},{"path":"/fr/gambling/betting/handball/","matchPath":"/fr/gambling/betting/handball/"},{"path":"/fr/gambling/betting/hockey/","matchPath":"/fr/gambling/betting/hockey/"},{"path":"/fr/gambling/betting/horse-racing/","matchPath":"/fr/gambling/betting/horse-racing/"},{"path":"/fr/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/fr/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/fr/gambling/betting/ice-hockey/","matchPath":"/fr/gambling/betting/ice-hockey/"},{"path":"/fr/gambling/betting/kentucky-derby/","matchPath":"/fr/gambling/betting/kentucky-derby/"},{"path":"/fr/gambling/betting/la-liga/","matchPath":"/fr/gambling/betting/la-liga/"},{"path":"/fr/gambling/betting/live-betting/","matchPath":"/fr/gambling/betting/live-betting/"},{"path":"/fr/gambling/betting/march-madness/","matchPath":"/fr/gambling/betting/march-madness/"},{"path":"/fr/gambling/betting/mma/","matchPath":"/fr/gambling/betting/mma/"},{"path":"/fr/gambling/betting/motorsports/","matchPath":"/fr/gambling/betting/motorsports/"},{"path":"/fr/gambling/betting/nascar-cup-series/","matchPath":"/fr/gambling/betting/nascar-cup-series/"},{"path":"/fr/gambling/betting/nba-draft-2025/","matchPath":"/fr/gambling/betting/nba-draft-2025/"},{"path":"/fr/gambling/betting/nfl-draft-2025/","matchPath":"/fr/gambling/betting/nfl-draft-2025/"},{"path":"/fr/gambling/betting/nhl-entry-draft-2025/","matchPath":"/fr/gambling/betting/nhl-entry-draft-2025/"},{"path":"/fr/gambling/betting/olympics/","matchPath":"/fr/gambling/betting/olympics/"},{"path":"/fr/gambling/betting/pga/","matchPath":"/fr/gambling/betting/pga/"},{"path":"/fr/gambling/betting/politics/","matchPath":"/fr/gambling/betting/politics/"},{"path":"/fr/gambling/betting/prediction-markets/","matchPath":"/fr/gambling/betting/prediction-markets/"},{"path":"/fr/gambling/betting/rugby/","matchPath":"/fr/gambling/betting/rugby/"},{"path":"/fr/gambling/betting/serie-a/","matchPath":"/fr/gambling/betting/serie-a/"},{"path":"/fr/gambling/betting/snooker/","matchPath":"/fr/gambling/betting/snooker/"},{"path":"/fr/gambling/betting/sportsbook/","matchPath":"/fr/gambling/betting/sportsbook/"},{"path":"/fr/gambling/betting/stock-car-racing/","matchPath":"/fr/gambling/betting/stock-car-racing/"},{"path":"/fr/gambling/betting/super-bowl-lix/","matchPath":"/fr/gambling/betting/super-bowl-lix/"},{"path":"/fr/gambling/betting/table-tennis/","matchPath":"/fr/gambling/betting/table-tennis/"},{"path":"/fr/gambling/betting/ufc-fight-night/","matchPath":"/fr/gambling/betting/ufc-fight-night/"},{"path":"/fr/gambling/betting/ufc/","matchPath":"/fr/gambling/betting/ufc/"},{"path":"/fr/gambling/betting/up-and-down/","matchPath":"/fr/gambling/betting/up-and-down/"},{"path":"/fr/gambling/betting/us-open-tennis/","matchPath":"/fr/gambling/betting/us-open-tennis/"},{"path":"/fr/gambling/betting/volleyball/","matchPath":"/fr/gambling/betting/volleyball/"},{"path":"/fr/gambling/betting/wimbledon/","matchPath":"/fr/gambling/betting/wimbledon/"},{"path":"/fr/gambling/betting/winter-sports/","matchPath":"/fr/gambling/betting/winter-sports/"},{"path":"/fr/gambling/casino/anonymous/","matchPath":"/fr/gambling/casino/anonymous/"},{"path":"/fr/gambling/casino/arbitrum/","matchPath":"/fr/gambling/casino/arbitrum/"},{"path":"/fr/gambling/casino/avax/","matchPath":"/fr/gambling/casino/avax/"},{"path":"/fr/gambling/casino/baccarat/","matchPath":"/fr/gambling/casino/baccarat/"},{"path":"/fr/gambling/casino/base/","matchPath":"/fr/gambling/casino/base/"},{"path":"/fr/gambling/casino/binance-coin/","matchPath":"/fr/gambling/casino/binance-coin/"},{"path":"/fr/gambling/casino/bitcoin-cash/","matchPath":"/fr/gambling/casino/bitcoin-cash/"},{"path":"/fr/gambling/casino/bitcoin/","matchPath":"/fr/gambling/casino/bitcoin/"},{"path":"/fr/gambling/casino/blackjack/","matchPath":"/fr/gambling/casino/blackjack/"},{"path":"/fr/gambling/casino/bonus-buys/","matchPath":"/fr/gambling/casino/bonus-buys/"},{"path":"/fr/gambling/casino/bonus/","matchPath":"/fr/gambling/casino/bonus/"},{"path":"/fr/gambling/casino/book-of/","matchPath":"/fr/gambling/casino/book-of/"},{"path":"/fr/gambling/casino/buy-extra-ball/","matchPath":"/fr/gambling/casino/buy-extra-ball/"},{"path":"/fr/gambling/casino/cardano/","matchPath":"/fr/gambling/casino/cardano/"},{"path":"/fr/gambling/casino/cluster-pays/","matchPath":"/fr/gambling/casino/cluster-pays/"},{"path":"/fr/gambling/casino/cosmic-jackpot-games/","matchPath":"/fr/gambling/casino/cosmic-jackpot-games/"},{"path":"/fr/gambling/casino/craps/","matchPath":"/fr/gambling/casino/craps/"},{"path":"/fr/gambling/casino/crash/","matchPath":"/fr/gambling/casino/crash/"},{"path":"/fr/gambling/casino/dai/","matchPath":"/fr/gambling/casino/dai/"},{"path":"/fr/gambling/casino/decentralized/","matchPath":"/fr/gambling/casino/decentralized/"},{"path":"/fr/gambling/casino/defi/","matchPath":"/fr/gambling/casino/defi/"},{"path":"/fr/gambling/casino/dice/","matchPath":"/fr/gambling/casino/dice/"},{"path":"/fr/gambling/casino/discord/","matchPath":"/fr/gambling/casino/discord/"},{"path":"/fr/gambling/casino/dogecoin/","matchPath":"/fr/gambling/casino/dogecoin/"},{"path":"/fr/gambling/casino/drops-and-wins/","matchPath":"/fr/gambling/casino/drops-and-wins/"},{"path":"/fr/gambling/casino/egyptian-slots/","matchPath":"/fr/gambling/casino/egyptian-slots/"},{"path":"/fr/gambling/casino/eth-bonus/","matchPath":"/fr/gambling/casino/eth-bonus/"},{"path":"/fr/gambling/casino/eth-live-dealer/","matchPath":"/fr/gambling/casino/eth-live-dealer/"},{"path":"/fr/gambling/casino/eth-no-deposit-bonus/","matchPath":"/fr/gambling/casino/eth-no-deposit-bonus/"},{"path":"/fr/gambling/casino/eth-roulette/","matchPath":"/fr/gambling/casino/eth-roulette/"},{"path":"/fr/gambling/casino/eth-slots/","matchPath":"/fr/gambling/casino/eth-slots/"},{"path":"/fr/gambling/casino/ethereum/","matchPath":"/fr/gambling/casino/ethereum/"},{"path":"/fr/gambling/casino/free-spins/","matchPath":"/fr/gambling/casino/free-spins/"},{"path":"/fr/gambling/casino/galactic-slot-machines/","matchPath":"/fr/gambling/casino/galactic-slot-machines/"},{"path":"/fr/gambling/casino/game-shows/","matchPath":"/fr/gambling/casino/game-shows/"},{"path":"/fr/gambling/casino/high-rollers/","matchPath":"/fr/gambling/casino/high-rollers/"},{"path":"/fr/gambling/casino/high-volatility/","matchPath":"/fr/gambling/casino/high-volatility/"},{"path":"/fr/gambling/casino/hold-and-win/","matchPath":"/fr/gambling/casino/hold-and-win/"},{"path":"/fr/gambling/casino/horror-casino-games/","matchPath":"/fr/gambling/casino/horror-casino-games/"},{"path":"/fr/gambling/casino/instant-withdrawal/","matchPath":"/fr/gambling/casino/instant-withdrawal/"},{"path":"/fr/gambling/casino/jackpot/","matchPath":"/fr/gambling/casino/jackpot/"},{"path":"/fr/gambling/casino/keno/","matchPath":"/fr/gambling/casino/keno/"},{"path":"/fr/gambling/casino/litecoin/","matchPath":"/fr/gambling/casino/litecoin/"},{"path":"/fr/gambling/casino/live-dealer/","matchPath":"/fr/gambling/casino/live-dealer/"},{"path":"/fr/gambling/casino/megaways/","matchPath":"/fr/gambling/casino/megaways/"},{"path":"/fr/gambling/casino/meme-coins/","matchPath":"/fr/gambling/casino/meme-coins/"},{"path":"/fr/gambling/casino/metamask/","matchPath":"/fr/gambling/casino/metamask/"},{"path":"/fr/gambling/casino/metaverse/","matchPath":"/fr/gambling/casino/metaverse/"},{"path":"/fr/gambling/casino/mines/","matchPath":"/fr/gambling/casino/mines/"},{"path":"/fr/gambling/casino/minimum-deposit/","matchPath":"/fr/gambling/casino/minimum-deposit/"},{"path":"/fr/gambling/casino/mobile/","matchPath":"/fr/gambling/casino/mobile/"},{"path":"/fr/gambling/casino/multiplayer-games/","matchPath":"/fr/gambling/casino/multiplayer-games/"},{"path":"/fr/gambling/casino/newest/","matchPath":"/fr/gambling/casino/newest/"},{"path":"/fr/gambling/casino/nft/","matchPath":"/fr/gambling/casino/nft/"},{"path":"/fr/gambling/casino/no-deposit-bonus/","matchPath":"/fr/gambling/casino/no-deposit-bonus/"},{"path":"/fr/gambling/casino/norse-mythology-slots/","matchPath":"/fr/gambling/casino/norse-mythology-slots/"},{"path":"/fr/gambling/casino/official-trump/","matchPath":"/fr/gambling/casino/official-trump/"},{"path":"/fr/gambling/casino/optimism/","matchPath":"/fr/gambling/casino/optimism/"},{"path":"/fr/gambling/casino/pirate-slots/","matchPath":"/fr/gambling/casino/pirate-slots/"},{"path":"/fr/gambling/casino/plinko/","matchPath":"/fr/gambling/casino/plinko/"},{"path":"/fr/gambling/casino/poker/","matchPath":"/fr/gambling/casino/poker/"},{"path":"/fr/gambling/casino/polygon/","matchPath":"/fr/gambling/casino/polygon/"},{"path":"/fr/gambling/casino/privacy/","matchPath":"/fr/gambling/casino/privacy/"},{"path":"/fr/gambling/casino/progressive-jackpot/","matchPath":"/fr/gambling/casino/progressive-jackpot/"},{"path":"/fr/gambling/casino/provably-fair/","matchPath":"/fr/gambling/casino/provably-fair/"},{"path":"/fr/gambling/casino/respins/","matchPath":"/fr/gambling/casino/respins/"},{"path":"/fr/gambling/casino/roulette/","matchPath":"/fr/gambling/casino/roulette/"},{"path":"/fr/gambling/casino/scatter-pays/","matchPath":"/fr/gambling/casino/scatter-pays/"},{"path":"/fr/gambling/casino/scratch-cards/","matchPath":"/fr/gambling/casino/scratch-cards/"},{"path":"/fr/gambling/casino/shiba-inu/","matchPath":"/fr/gambling/casino/shiba-inu/"},{"path":"/fr/gambling/casino/sic-bo/","matchPath":"/fr/gambling/casino/sic-bo/"},{"path":"/fr/gambling/casino/slots/","matchPath":"/fr/gambling/casino/slots/"},{"path":"/fr/gambling/casino/social-casino/","matchPath":"/fr/gambling/casino/social-casino/"},{"path":"/fr/gambling/casino/solana/","matchPath":"/fr/gambling/casino/solana/"},{"path":"/fr/gambling/casino/stablecoins/","matchPath":"/fr/gambling/casino/stablecoins/"},{"path":"/fr/gambling/casino/sweepstakes/","matchPath":"/fr/gambling/casino/sweepstakes/"},{"path":"/fr/gambling/casino/ton/","matchPath":"/fr/gambling/casino/ton/"},{"path":"/fr/gambling/casino/toshi/","matchPath":"/fr/gambling/casino/toshi/"},{"path":"/fr/gambling/casino/treasure-hunt-slots/","matchPath":"/fr/gambling/casino/treasure-hunt-slots/"},{"path":"/fr/gambling/casino/trump/","matchPath":"/fr/gambling/casino/trump/"},{"path":"/fr/gambling/casino/trx/","matchPath":"/fr/gambling/casino/trx/"},{"path":"/fr/gambling/casino/usdc/","matchPath":"/fr/gambling/casino/usdc/"},{"path":"/fr/gambling/casino/usdt/","matchPath":"/fr/gambling/casino/usdt/"},{"path":"/fr/gambling/casino/verse/","matchPath":"/fr/gambling/casino/verse/"},{"path":"/fr/gambling/casino/video-poker/","matchPath":"/fr/gambling/casino/video-poker/"},{"path":"/fr/gambling/casino/viking-casino-games/","matchPath":"/fr/gambling/casino/viking-casino-games/"},{"path":"/fr/gambling/casino/vip/","matchPath":"/fr/gambling/casino/vip/"},{"path":"/fr/gambling/casino/wheel/","matchPath":"/fr/gambling/casino/wheel/"},{"path":"/fr/gambling/casino/xrp/","matchPath":"/fr/gambling/casino/xrp/"},{"path":"/fr/gambling/reviews/0xbet/","matchPath":"/fr/gambling/reviews/0xbet/"},{"path":"/fr/gambling/reviews/1win/","matchPath":"/fr/gambling/reviews/1win/"},{"path":"/fr/gambling/reviews/1xbit/","matchPath":"/fr/gambling/reviews/1xbit/"},{"path":"/fr/gambling/reviews/500-casino/","matchPath":"/fr/gambling/reviews/500-casino/"},{"path":"/fr/gambling/reviews/7bitcasino/","matchPath":"/fr/gambling/reviews/7bitcasino/"},{"path":"/fr/gambling/reviews/888starzbet/","matchPath":"/fr/gambling/reviews/888starzbet/"},{"path":"/fr/gambling/reviews/abuking/","matchPath":"/fr/gambling/reviews/abuking/"},{"path":"/fr/gambling/reviews/aerogram-bot/","matchPath":"/fr/gambling/reviews/aerogram-bot/"},{"path":"/fr/gambling/reviews/alibabet/","matchPath":"/fr/gambling/reviews/alibabet/"},{"path":"/fr/gambling/reviews/anonymbet/","matchPath":"/fr/gambling/reviews/anonymbet/"},{"path":"/fr/gambling/reviews/ballersbet/","matchPath":"/fr/gambling/reviews/ballersbet/"},{"path":"/fr/gambling/reviews/bc-game/","matchPath":"/fr/gambling/reviews/bc-game/"},{"path":"/fr/gambling/reviews/bet20/","matchPath":"/fr/gambling/reviews/bet20/"},{"path":"/fr/gambling/reviews/betandreas/","matchPath":"/fr/gambling/reviews/betandreas/"},{"path":"/fr/gambling/reviews/betfinal/","matchPath":"/fr/gambling/reviews/betfinal/"},{"path":"/fr/gambling/reviews/bethog/","matchPath":"/fr/gambling/reviews/bethog/"},{"path":"/fr/gambling/reviews/betpanda/","matchPath":"/fr/gambling/reviews/betpanda/"},{"path":"/fr/gambling/reviews/betplay/","matchPath":"/fr/gambling/reviews/betplay/"},{"path":"/fr/gambling/reviews/betrunner/","matchPath":"/fr/gambling/reviews/betrunner/"},{"path":"/fr/gambling/reviews/betsio/","matchPath":"/fr/gambling/reviews/betsio/"},{"path":"/fr/gambling/reviews/bety/","matchPath":"/fr/gambling/reviews/bety/"},{"path":"/fr/gambling/reviews/bitcasino-io/","matchPath":"/fr/gambling/reviews/bitcasino-io/"},{"path":"/fr/gambling/reviews/bitcoinsportsbookag/","matchPath":"/fr/gambling/reviews/bitcoinsportsbookag/"},{"path":"/fr/gambling/reviews/bitsler/","matchPath":"/fr/gambling/reviews/bitsler/"},{"path":"/fr/gambling/reviews/bitstake/","matchPath":"/fr/gambling/reviews/bitstake/"},{"path":"/fr/gambling/reviews/bitstarz/","matchPath":"/fr/gambling/reviews/bitstarz/"},{"path":"/fr/gambling/reviews/bitstrike/","matchPath":"/fr/gambling/reviews/bitstrike/"},{"path":"/fr/gambling/reviews/bitz/","matchPath":"/fr/gambling/reviews/bitz/"},{"path":"/fr/gambling/reviews/boomerang-bet/","matchPath":"/fr/gambling/reviews/boomerang-bet/"},{"path":"/fr/gambling/reviews/bspin/","matchPath":"/fr/gambling/reviews/bspin/"},{"path":"/fr/gambling/reviews/bullsbet/","matchPath":"/fr/gambling/reviews/bullsbet/"},{"path":"/fr/gambling/reviews/casino-bitcoin-com/","matchPath":"/fr/gambling/reviews/casino-bitcoin-com/"},{"path":"/fr/gambling/reviews/casinobet/","matchPath":"/fr/gambling/reviews/casinobet/"},{"path":"/fr/gambling/reviews/casinopunkz/","matchPath":"/fr/gambling/reviews/casinopunkz/"},{"path":"/fr/gambling/reviews/celsius-casino/","matchPath":"/fr/gambling/reviews/celsius-casino/"},{"path":"/fr/gambling/reviews/chancer/","matchPath":"/fr/gambling/reviews/chancer/"},{"path":"/fr/gambling/reviews/claps-bet/","matchPath":"/fr/gambling/reviews/claps-bet/"},{"path":"/fr/gambling/reviews/cloudbet/","matchPath":"/fr/gambling/reviews/cloudbet/"},{"path":"/fr/gambling/reviews/crashino/","matchPath":"/fr/gambling/reviews/crashino/"},{"path":"/fr/gambling/reviews/crypto-games/","matchPath":"/fr/gambling/reviews/crypto-games/"},{"path":"/fr/gambling/reviews/cryptoleo/","matchPath":"/fr/gambling/reviews/cryptoleo/"},{"path":"/fr/gambling/reviews/cryptorino/","matchPath":"/fr/gambling/reviews/cryptorino/"},{"path":"/fr/gambling/reviews/dbosses/","matchPath":"/fr/gambling/reviews/dbosses/"},{"path":"/fr/gambling/reviews/dexsport/","matchPath":"/fr/gambling/reviews/dexsport/"},{"path":"/fr/gambling/reviews/donbet/","matchPath":"/fr/gambling/reviews/donbet/"},{"path":"/fr/gambling/reviews/drake-casino/","matchPath":"/fr/gambling/reviews/drake-casino/"},{"path":"/fr/gambling/reviews/duckdice/","matchPath":"/fr/gambling/reviews/duckdice/"},{"path":"/fr/gambling/reviews/duelbits/","matchPath":"/fr/gambling/reviews/duelbits/"},{"path":"/fr/gambling/reviews/empire-io/","matchPath":"/fr/gambling/reviews/empire-io/"},{"path":"/fr/gambling/reviews/fairspin/","matchPath":"/fr/gambling/reviews/fairspin/"},{"path":"/fr/gambling/reviews/felixspin/","matchPath":"/fr/gambling/reviews/felixspin/"},{"path":"/fr/gambling/reviews/flush/","matchPath":"/fr/gambling/reviews/flush/"},{"path":"/fr/gambling/reviews/fortunejack/","matchPath":"/fr/gambling/reviews/fortunejack/"},{"path":"/fr/gambling/reviews/gamdom/","matchPath":"/fr/gambling/reviews/gamdom/"},{"path":"/fr/gambling/reviews/gamegram/","matchPath":"/fr/gambling/reviews/gamegram/"},{"path":"/fr/gambling/reviews/goldenpanda/","matchPath":"/fr/gambling/reviews/goldenpanda/"},{"path":"/fr/gambling/reviews/howlgg/","matchPath":"/fr/gambling/reviews/howlgg/"},{"path":"/fr/gambling/reviews/hugewin/","matchPath":"/fr/gambling/reviews/hugewin/"},{"path":"/fr/gambling/reviews/instant-casino/","matchPath":"/fr/gambling/reviews/instant-casino/"},{"path":"/fr/gambling/reviews/jackbit/","matchPath":"/fr/gambling/reviews/jackbit/"},{"path":"/fr/gambling/reviews/jetton/","matchPath":"/fr/gambling/reviews/jetton/"},{"path":"/fr/gambling/reviews/kingsofsport/","matchPath":"/fr/gambling/reviews/kingsofsport/"},{"path":"/fr/gambling/reviews/lucky-block/","matchPath":"/fr/gambling/reviews/lucky-block/"},{"path":"/fr/gambling/reviews/luckywhale/","matchPath":"/fr/gambling/reviews/luckywhale/"},{"path":"/fr/gambling/reviews/mbit/","matchPath":"/fr/gambling/reviews/mbit/"},{"path":"/fr/gambling/reviews/mega-dice/","matchPath":"/fr/gambling/reviews/mega-dice/"},{"path":"/fr/gambling/reviews/megapari/","matchPath":"/fr/gambling/reviews/megapari/"},{"path":"/fr/gambling/reviews/monkeytilt/","matchPath":"/fr/gambling/reviews/monkeytilt/"},{"path":"/fr/gambling/reviews/mystake/","matchPath":"/fr/gambling/reviews/mystake/"},{"path":"/fr/gambling/reviews/playbet-io/","matchPath":"/fr/gambling/reviews/playbet-io/"},{"path":"/fr/gambling/reviews/poolbit/","matchPath":"/fr/gambling/reviews/poolbit/"},{"path":"/fr/gambling/reviews/rainbet/","matchPath":"/fr/gambling/reviews/rainbet/"},{"path":"/fr/gambling/reviews/rakebit/","matchPath":"/fr/gambling/reviews/rakebit/"},{"path":"/fr/gambling/reviews/roobet/","matchPath":"/fr/gambling/reviews/roobet/"},{"path":"/fr/gambling/reviews/shock/","matchPath":"/fr/gambling/reviews/shock/"},{"path":"/fr/gambling/reviews/shuffle/","matchPath":"/fr/gambling/reviews/shuffle/"},{"path":"/fr/gambling/reviews/spinly/","matchPath":"/fr/gambling/reviews/spinly/"},{"path":"/fr/gambling/reviews/sportbet-one/","matchPath":"/fr/gambling/reviews/sportbet-one/"},{"path":"/fr/gambling/reviews/sportsbet-io/","matchPath":"/fr/gambling/reviews/sportsbet-io/"},{"path":"/fr/gambling/reviews/stake/","matchPath":"/fr/gambling/reviews/stake/"},{"path":"/fr/gambling/reviews/telbet/","matchPath":"/fr/gambling/reviews/telbet/"},{"path":"/fr/gambling/reviews/tg-casino/","matchPath":"/fr/gambling/reviews/tg-casino/"},{"path":"/fr/gambling/reviews/thunderpick/","matchPath":"/fr/gambling/reviews/thunderpick/"},{"path":"/fr/gambling/reviews/toshibet/","matchPath":"/fr/gambling/reviews/toshibet/"},{"path":"/fr/gambling/reviews/vave/","matchPath":"/fr/gambling/reviews/vave/"},{"path":"/fr/gambling/reviews/vipcasino/","matchPath":"/fr/gambling/reviews/vipcasino/"},{"path":"/fr/gambling/reviews/weiss/","matchPath":"/fr/gambling/reviews/weiss/"},{"path":"/fr/gambling/reviews/whale/","matchPath":"/fr/gambling/reviews/whale/"},{"path":"/fr/gambling/reviews/wikibet/","matchPath":"/fr/gambling/reviews/wikibet/"},{"path":"/fr/gambling/reviews/wildio/","matchPath":"/fr/gambling/reviews/wildio/"},{"path":"/fr/gambling/reviews/wildtornado/","matchPath":"/fr/gambling/reviews/wildtornado/"},{"path":"/fr/gambling/reviews/willbet/","matchPath":"/fr/gambling/reviews/willbet/"},{"path":"/fr/gambling/reviews/win-casino/","matchPath":"/fr/gambling/reviews/win-casino/"},{"path":"/fr/gambling/reviews/winna/","matchPath":"/fr/gambling/reviews/winna/"},{"path":"/fr/gambling/reviews/winwin-bet/","matchPath":"/fr/gambling/reviews/winwin-bet/"},{"path":"/fr/gambling/reviews/winz-io/","matchPath":"/fr/gambling/reviews/winz-io/"},{"path":"/fr/gambling/reviews/ybets/","matchPath":"/fr/gambling/reviews/ybets/"},{"path":"/fr/gambling/reviews/yyy-casino/","matchPath":"/fr/gambling/reviews/yyy-casino/"},{"path":"/fr/mining/cloud-mining/ethereum/","matchPath":"/fr/mining/cloud-mining/ethereum/"},{"path":"/fr/mining/cloud-mining/solana/","matchPath":"/fr/mining/cloud-mining/solana/"},{"path":"/fr/wallet/reviews/bitcoincom-wallet/","matchPath":"/fr/wallet/reviews/bitcoincom-wallet/"},{"path":"/fr/wallet/reviews/metamask/","matchPath":"/fr/wallet/reviews/metamask/"},{"path":"/fr/wallet/reviews/phantom/","matchPath":"/fr/wallet/reviews/phantom/"},{"path":"/fr/wallet/reviews/rockwallet/","matchPath":"/fr/wallet/reviews/rockwallet/"},{"path":"/fr/wallet/reviews/trezor/","matchPath":"/fr/wallet/reviews/trezor/"},{"path":"/fr/wallet/reviews/uphold/","matchPath":"/fr/wallet/reviews/uphold/"},{"path":"/it/cards/reviews/bitrefill/","matchPath":"/it/cards/reviews/bitrefill/"},{"path":"/it/cards/reviews/gemini/","matchPath":"/it/cards/reviews/gemini/"},{"path":"/it/cards/reviews/solcard/","matchPath":"/it/cards/reviews/solcard/"},{"path":"/it/cards/reviews/verse-card/","matchPath":"/it/cards/reviews/verse-card/"},{"path":"/it/exchanges/reviews/binance/","matchPath":"/it/exchanges/reviews/binance/"},{"path":"/it/exchanges/reviews/bitget/","matchPath":"/it/exchanges/reviews/bitget/"},{"path":"/it/exchanges/reviews/btcc/","matchPath":"/it/exchanges/reviews/btcc/"},{"path":"/it/exchanges/reviews/coinbase/","matchPath":"/it/exchanges/reviews/coinbase/"},{"path":"/it/exchanges/reviews/coincorner/","matchPath":"/it/exchanges/reviews/coincorner/"},{"path":"/it/exchanges/reviews/coinflare/","matchPath":"/it/exchanges/reviews/coinflare/"},{"path":"/it/exchanges/reviews/cryptomus/","matchPath":"/it/exchanges/reviews/cryptomus/"},{"path":"/it/exchanges/reviews/digital-surge/","matchPath":"/it/exchanges/reviews/digital-surge/"},{"path":"/it/exchanges/reviews/exolix/","matchPath":"/it/exchanges/reviews/exolix/"},{"path":"/it/exchanges/reviews/figure-markets/","matchPath":"/it/exchanges/reviews/figure-markets/"},{"path":"/it/exchanges/reviews/gemini/","matchPath":"/it/exchanges/reviews/gemini/"},{"path":"/it/exchanges/reviews/godex/","matchPath":"/it/exchanges/reviews/godex/"},{"path":"/it/exchanges/reviews/kraken/","matchPath":"/it/exchanges/reviews/kraken/"},{"path":"/it/exchanges/reviews/kucoin/","matchPath":"/it/exchanges/reviews/kucoin/"},{"path":"/it/exchanges/reviews/margex/","matchPath":"/it/exchanges/reviews/margex/"},{"path":"/it/exchanges/reviews/mexc/","matchPath":"/it/exchanges/reviews/mexc/"},{"path":"/it/exchanges/reviews/prime-xbt/","matchPath":"/it/exchanges/reviews/prime-xbt/"},{"path":"/it/exchanges/reviews/primexbt/","matchPath":"/it/exchanges/reviews/primexbt/"},{"path":"/it/exchanges/reviews/rocko/","matchPath":"/it/exchanges/reviews/rocko/"},{"path":"/it/exchanges/reviews/swapuz/","matchPath":"/it/exchanges/reviews/swapuz/"},{"path":"/it/exchanges/reviews/uphold/","matchPath":"/it/exchanges/reviews/uphold/"},{"path":"/it/exchanges/reviews/verse/","matchPath":"/it/exchanges/reviews/verse/"},{"path":"/it/exchanges/reviews/virgo-cx/","matchPath":"/it/exchanges/reviews/virgo-cx/"},{"path":"/it/exchanges/reviews/virgo/","matchPath":"/it/exchanges/reviews/virgo/"},{"path":"/it/exchanges/reviews/voox/","matchPath":"/it/exchanges/reviews/voox/"},{"path":"/it/exchanges/reviews/woofi/","matchPath":"/it/exchanges/reviews/woofi/"},{"path":"/it/exchanges/reviews/woox/","matchPath":"/it/exchanges/reviews/woox/"},{"path":"/it/exchanges/reviews/xbo/","matchPath":"/it/exchanges/reviews/xbo/"},{"path":"/it/gambling/betting/american-football/","matchPath":"/it/gambling/betting/american-football/"},{"path":"/it/gambling/betting/anonymous/","matchPath":"/it/gambling/betting/anonymous/"},{"path":"/it/gambling/betting/australian-open-tennis/","matchPath":"/it/gambling/betting/australian-open-tennis/"},{"path":"/it/gambling/betting/badminton/","matchPath":"/it/gambling/betting/badminton/"},{"path":"/it/gambling/betting/baseball/","matchPath":"/it/gambling/betting/baseball/"},{"path":"/it/gambling/betting/basketball/","matchPath":"/it/gambling/betting/basketball/"},{"path":"/it/gambling/betting/betting-exchanges/","matchPath":"/it/gambling/betting/betting-exchanges/"},{"path":"/it/gambling/betting/bonuses/","matchPath":"/it/gambling/betting/bonuses/"},{"path":"/it/gambling/betting/boxing/","matchPath":"/it/gambling/betting/boxing/"},{"path":"/it/gambling/betting/bundesliga/","matchPath":"/it/gambling/betting/bundesliga/"},{"path":"/it/gambling/betting/chess/","matchPath":"/it/gambling/betting/chess/"},{"path":"/it/gambling/betting/college-basketball/","matchPath":"/it/gambling/betting/college-basketball/"},{"path":"/it/gambling/betting/cricket/","matchPath":"/it/gambling/betting/cricket/"},{"path":"/it/gambling/betting/cycling/","matchPath":"/it/gambling/betting/cycling/"},{"path":"/it/gambling/betting/darts/","matchPath":"/it/gambling/betting/darts/"},{"path":"/it/gambling/betting/english-premier-league/","matchPath":"/it/gambling/betting/english-premier-league/"},{"path":"/it/gambling/betting/esports/","matchPath":"/it/gambling/betting/esports/"},{"path":"/it/gambling/betting/fantasy-sports/","matchPath":"/it/gambling/betting/fantasy-sports/"},{"path":"/it/gambling/betting/fifa-world-cup-2025/","matchPath":"/it/gambling/betting/fifa-world-cup-2025/"},{"path":"/it/gambling/betting/football/","matchPath":"/it/gambling/betting/football/"},{"path":"/it/gambling/betting/formula-1/","matchPath":"/it/gambling/betting/formula-1/"},{"path":"/it/gambling/betting/french-open-tennis/","matchPath":"/it/gambling/betting/french-open-tennis/"},{"path":"/it/gambling/betting/grand-slam/","matchPath":"/it/gambling/betting/grand-slam/"},{"path":"/it/gambling/betting/greyhound-racing/","matchPath":"/it/gambling/betting/greyhound-racing/"},{"path":"/it/gambling/betting/handball/","matchPath":"/it/gambling/betting/handball/"},{"path":"/it/gambling/betting/hockey/","matchPath":"/it/gambling/betting/hockey/"},{"path":"/it/gambling/betting/horse-racing/","matchPath":"/it/gambling/betting/horse-racing/"},{"path":"/it/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/it/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/it/gambling/betting/ice-hockey/","matchPath":"/it/gambling/betting/ice-hockey/"},{"path":"/it/gambling/betting/kentucky-derby/","matchPath":"/it/gambling/betting/kentucky-derby/"},{"path":"/it/gambling/betting/la-liga/","matchPath":"/it/gambling/betting/la-liga/"},{"path":"/it/gambling/betting/live-betting/","matchPath":"/it/gambling/betting/live-betting/"},{"path":"/it/gambling/betting/march-madness/","matchPath":"/it/gambling/betting/march-madness/"},{"path":"/it/gambling/betting/mma/","matchPath":"/it/gambling/betting/mma/"},{"path":"/it/gambling/betting/motorsports/","matchPath":"/it/gambling/betting/motorsports/"},{"path":"/it/gambling/betting/nascar-cup-series/","matchPath":"/it/gambling/betting/nascar-cup-series/"},{"path":"/it/gambling/betting/nba-draft-2025/","matchPath":"/it/gambling/betting/nba-draft-2025/"},{"path":"/it/gambling/betting/nfl-draft-2025/","matchPath":"/it/gambling/betting/nfl-draft-2025/"},{"path":"/it/gambling/betting/nhl-entry-draft-2025/","matchPath":"/it/gambling/betting/nhl-entry-draft-2025/"},{"path":"/it/gambling/betting/olympics/","matchPath":"/it/gambling/betting/olympics/"},{"path":"/it/gambling/betting/pga/","matchPath":"/it/gambling/betting/pga/"},{"path":"/it/gambling/betting/politics/","matchPath":"/it/gambling/betting/politics/"},{"path":"/it/gambling/betting/prediction-markets/","matchPath":"/it/gambling/betting/prediction-markets/"},{"path":"/it/gambling/betting/rugby/","matchPath":"/it/gambling/betting/rugby/"},{"path":"/it/gambling/betting/serie-a/","matchPath":"/it/gambling/betting/serie-a/"},{"path":"/it/gambling/betting/snooker/","matchPath":"/it/gambling/betting/snooker/"},{"path":"/it/gambling/betting/sportsbook/","matchPath":"/it/gambling/betting/sportsbook/"},{"path":"/it/gambling/betting/stock-car-racing/","matchPath":"/it/gambling/betting/stock-car-racing/"},{"path":"/it/gambling/betting/super-bowl-lix/","matchPath":"/it/gambling/betting/super-bowl-lix/"},{"path":"/it/gambling/betting/table-tennis/","matchPath":"/it/gambling/betting/table-tennis/"},{"path":"/it/gambling/betting/ufc-fight-night/","matchPath":"/it/gambling/betting/ufc-fight-night/"},{"path":"/it/gambling/betting/ufc/","matchPath":"/it/gambling/betting/ufc/"},{"path":"/it/gambling/betting/up-and-down/","matchPath":"/it/gambling/betting/up-and-down/"},{"path":"/it/gambling/betting/us-open-tennis/","matchPath":"/it/gambling/betting/us-open-tennis/"},{"path":"/it/gambling/betting/volleyball/","matchPath":"/it/gambling/betting/volleyball/"},{"path":"/it/gambling/betting/wimbledon/","matchPath":"/it/gambling/betting/wimbledon/"},{"path":"/it/gambling/betting/winter-sports/","matchPath":"/it/gambling/betting/winter-sports/"},{"path":"/it/gambling/casino/anonymous/","matchPath":"/it/gambling/casino/anonymous/"},{"path":"/it/gambling/casino/arbitrum/","matchPath":"/it/gambling/casino/arbitrum/"},{"path":"/it/gambling/casino/avax/","matchPath":"/it/gambling/casino/avax/"},{"path":"/it/gambling/casino/baccarat/","matchPath":"/it/gambling/casino/baccarat/"},{"path":"/it/gambling/casino/base/","matchPath":"/it/gambling/casino/base/"},{"path":"/it/gambling/casino/binance-coin/","matchPath":"/it/gambling/casino/binance-coin/"},{"path":"/it/gambling/casino/bitcoin-cash/","matchPath":"/it/gambling/casino/bitcoin-cash/"},{"path":"/it/gambling/casino/bitcoin/","matchPath":"/it/gambling/casino/bitcoin/"},{"path":"/it/gambling/casino/blackjack/","matchPath":"/it/gambling/casino/blackjack/"},{"path":"/it/gambling/casino/bonus-buys/","matchPath":"/it/gambling/casino/bonus-buys/"},{"path":"/it/gambling/casino/bonus/","matchPath":"/it/gambling/casino/bonus/"},{"path":"/it/gambling/casino/book-of/","matchPath":"/it/gambling/casino/book-of/"},{"path":"/it/gambling/casino/buy-extra-ball/","matchPath":"/it/gambling/casino/buy-extra-ball/"},{"path":"/it/gambling/casino/cardano/","matchPath":"/it/gambling/casino/cardano/"},{"path":"/it/gambling/casino/cluster-pays/","matchPath":"/it/gambling/casino/cluster-pays/"},{"path":"/it/gambling/casino/cosmic-jackpot-games/","matchPath":"/it/gambling/casino/cosmic-jackpot-games/"},{"path":"/it/gambling/casino/craps/","matchPath":"/it/gambling/casino/craps/"},{"path":"/it/gambling/casino/crash/","matchPath":"/it/gambling/casino/crash/"},{"path":"/it/gambling/casino/dai/","matchPath":"/it/gambling/casino/dai/"},{"path":"/it/gambling/casino/decentralized/","matchPath":"/it/gambling/casino/decentralized/"},{"path":"/it/gambling/casino/defi/","matchPath":"/it/gambling/casino/defi/"},{"path":"/it/gambling/casino/dice/","matchPath":"/it/gambling/casino/dice/"},{"path":"/it/gambling/casino/discord/","matchPath":"/it/gambling/casino/discord/"},{"path":"/it/gambling/casino/dogecoin/","matchPath":"/it/gambling/casino/dogecoin/"},{"path":"/it/gambling/casino/drops-and-wins/","matchPath":"/it/gambling/casino/drops-and-wins/"},{"path":"/it/gambling/casino/egyptian-slots/","matchPath":"/it/gambling/casino/egyptian-slots/"},{"path":"/it/gambling/casino/eth-bonus/","matchPath":"/it/gambling/casino/eth-bonus/"},{"path":"/it/gambling/casino/eth-live-dealer/","matchPath":"/it/gambling/casino/eth-live-dealer/"},{"path":"/it/gambling/casino/eth-no-deposit-bonus/","matchPath":"/it/gambling/casino/eth-no-deposit-bonus/"},{"path":"/it/gambling/casino/eth-roulette/","matchPath":"/it/gambling/casino/eth-roulette/"},{"path":"/it/gambling/casino/eth-slots/","matchPath":"/it/gambling/casino/eth-slots/"},{"path":"/it/gambling/casino/ethereum/","matchPath":"/it/gambling/casino/ethereum/"},{"path":"/it/gambling/casino/free-spins/","matchPath":"/it/gambling/casino/free-spins/"},{"path":"/it/gambling/casino/galactic-slot-machines/","matchPath":"/it/gambling/casino/galactic-slot-machines/"},{"path":"/it/gambling/casino/game-shows/","matchPath":"/it/gambling/casino/game-shows/"},{"path":"/it/gambling/casino/high-rollers/","matchPath":"/it/gambling/casino/high-rollers/"},{"path":"/it/gambling/casino/high-volatility/","matchPath":"/it/gambling/casino/high-volatility/"},{"path":"/it/gambling/casino/hold-and-win/","matchPath":"/it/gambling/casino/hold-and-win/"},{"path":"/it/gambling/casino/horror-casino-games/","matchPath":"/it/gambling/casino/horror-casino-games/"},{"path":"/it/gambling/casino/instant-withdrawal/","matchPath":"/it/gambling/casino/instant-withdrawal/"},{"path":"/it/gambling/casino/jackpot/","matchPath":"/it/gambling/casino/jackpot/"},{"path":"/it/gambling/casino/keno/","matchPath":"/it/gambling/casino/keno/"},{"path":"/it/gambling/casino/litecoin/","matchPath":"/it/gambling/casino/litecoin/"},{"path":"/it/gambling/casino/live-dealer/","matchPath":"/it/gambling/casino/live-dealer/"},{"path":"/it/gambling/casino/megaways/","matchPath":"/it/gambling/casino/megaways/"},{"path":"/it/gambling/casino/meme-coins/","matchPath":"/it/gambling/casino/meme-coins/"},{"path":"/it/gambling/casino/metamask/","matchPath":"/it/gambling/casino/metamask/"},{"path":"/it/gambling/casino/metaverse/","matchPath":"/it/gambling/casino/metaverse/"},{"path":"/it/gambling/casino/mines/","matchPath":"/it/gambling/casino/mines/"},{"path":"/it/gambling/casino/minimum-deposit/","matchPath":"/it/gambling/casino/minimum-deposit/"},{"path":"/it/gambling/casino/mobile/","matchPath":"/it/gambling/casino/mobile/"},{"path":"/it/gambling/casino/multiplayer-games/","matchPath":"/it/gambling/casino/multiplayer-games/"},{"path":"/it/gambling/casino/newest/","matchPath":"/it/gambling/casino/newest/"},{"path":"/it/gambling/casino/nft/","matchPath":"/it/gambling/casino/nft/"},{"path":"/it/gambling/casino/no-deposit-bonus/","matchPath":"/it/gambling/casino/no-deposit-bonus/"},{"path":"/it/gambling/casino/norse-mythology-slots/","matchPath":"/it/gambling/casino/norse-mythology-slots/"},{"path":"/it/gambling/casino/official-trump/","matchPath":"/it/gambling/casino/official-trump/"},{"path":"/it/gambling/casino/optimism/","matchPath":"/it/gambling/casino/optimism/"},{"path":"/it/gambling/casino/pirate-slots/","matchPath":"/it/gambling/casino/pirate-slots/"},{"path":"/it/gambling/casino/plinko/","matchPath":"/it/gambling/casino/plinko/"},{"path":"/it/gambling/casino/poker/","matchPath":"/it/gambling/casino/poker/"},{"path":"/it/gambling/casino/polygon/","matchPath":"/it/gambling/casino/polygon/"},{"path":"/it/gambling/casino/privacy/","matchPath":"/it/gambling/casino/privacy/"},{"path":"/it/gambling/casino/progressive-jackpot/","matchPath":"/it/gambling/casino/progressive-jackpot/"},{"path":"/it/gambling/casino/provably-fair/","matchPath":"/it/gambling/casino/provably-fair/"},{"path":"/it/gambling/casino/respins/","matchPath":"/it/gambling/casino/respins/"},{"path":"/it/gambling/casino/roulette/","matchPath":"/it/gambling/casino/roulette/"},{"path":"/it/gambling/casino/scatter-pays/","matchPath":"/it/gambling/casino/scatter-pays/"},{"path":"/it/gambling/casino/scratch-cards/","matchPath":"/it/gambling/casino/scratch-cards/"},{"path":"/it/gambling/casino/shiba-inu/","matchPath":"/it/gambling/casino/shiba-inu/"},{"path":"/it/gambling/casino/sic-bo/","matchPath":"/it/gambling/casino/sic-bo/"},{"path":"/it/gambling/casino/slots/","matchPath":"/it/gambling/casino/slots/"},{"path":"/it/gambling/casino/social-casino/","matchPath":"/it/gambling/casino/social-casino/"},{"path":"/it/gambling/casino/solana/","matchPath":"/it/gambling/casino/solana/"},{"path":"/it/gambling/casino/stablecoins/","matchPath":"/it/gambling/casino/stablecoins/"},{"path":"/it/gambling/casino/sweepstakes/","matchPath":"/it/gambling/casino/sweepstakes/"},{"path":"/it/gambling/casino/ton/","matchPath":"/it/gambling/casino/ton/"},{"path":"/it/gambling/casino/toshi/","matchPath":"/it/gambling/casino/toshi/"},{"path":"/it/gambling/casino/treasure-hunt-slots/","matchPath":"/it/gambling/casino/treasure-hunt-slots/"},{"path":"/it/gambling/casino/trump/","matchPath":"/it/gambling/casino/trump/"},{"path":"/it/gambling/casino/trx/","matchPath":"/it/gambling/casino/trx/"},{"path":"/it/gambling/casino/usdc/","matchPath":"/it/gambling/casino/usdc/"},{"path":"/it/gambling/casino/usdt/","matchPath":"/it/gambling/casino/usdt/"},{"path":"/it/gambling/casino/verse/","matchPath":"/it/gambling/casino/verse/"},{"path":"/it/gambling/casino/video-poker/","matchPath":"/it/gambling/casino/video-poker/"},{"path":"/it/gambling/casino/viking-casino-games/","matchPath":"/it/gambling/casino/viking-casino-games/"},{"path":"/it/gambling/casino/vip/","matchPath":"/it/gambling/casino/vip/"},{"path":"/it/gambling/casino/wheel/","matchPath":"/it/gambling/casino/wheel/"},{"path":"/it/gambling/casino/xrp/","matchPath":"/it/gambling/casino/xrp/"},{"path":"/it/gambling/reviews/0xbet/","matchPath":"/it/gambling/reviews/0xbet/"},{"path":"/it/gambling/reviews/1win/","matchPath":"/it/gambling/reviews/1win/"},{"path":"/it/gambling/reviews/1xbit/","matchPath":"/it/gambling/reviews/1xbit/"},{"path":"/it/gambling/reviews/500-casino/","matchPath":"/it/gambling/reviews/500-casino/"},{"path":"/it/gambling/reviews/7bitcasino/","matchPath":"/it/gambling/reviews/7bitcasino/"},{"path":"/it/gambling/reviews/888starzbet/","matchPath":"/it/gambling/reviews/888starzbet/"},{"path":"/it/gambling/reviews/abuking/","matchPath":"/it/gambling/reviews/abuking/"},{"path":"/it/gambling/reviews/aerogram-bot/","matchPath":"/it/gambling/reviews/aerogram-bot/"},{"path":"/it/gambling/reviews/alibabet/","matchPath":"/it/gambling/reviews/alibabet/"},{"path":"/it/gambling/reviews/anonymbet/","matchPath":"/it/gambling/reviews/anonymbet/"},{"path":"/it/gambling/reviews/ballersbet/","matchPath":"/it/gambling/reviews/ballersbet/"},{"path":"/it/gambling/reviews/bc-game/","matchPath":"/it/gambling/reviews/bc-game/"},{"path":"/it/gambling/reviews/bet20/","matchPath":"/it/gambling/reviews/bet20/"},{"path":"/it/gambling/reviews/betandreas/","matchPath":"/it/gambling/reviews/betandreas/"},{"path":"/it/gambling/reviews/betfinal/","matchPath":"/it/gambling/reviews/betfinal/"},{"path":"/it/gambling/reviews/bethog/","matchPath":"/it/gambling/reviews/bethog/"},{"path":"/it/gambling/reviews/betpanda/","matchPath":"/it/gambling/reviews/betpanda/"},{"path":"/it/gambling/reviews/betplay/","matchPath":"/it/gambling/reviews/betplay/"},{"path":"/it/gambling/reviews/betrunner/","matchPath":"/it/gambling/reviews/betrunner/"},{"path":"/it/gambling/reviews/betsio/","matchPath":"/it/gambling/reviews/betsio/"},{"path":"/it/gambling/reviews/bety/","matchPath":"/it/gambling/reviews/bety/"},{"path":"/it/gambling/reviews/bitcasino-io/","matchPath":"/it/gambling/reviews/bitcasino-io/"},{"path":"/it/gambling/reviews/bitcoinsportsbookag/","matchPath":"/it/gambling/reviews/bitcoinsportsbookag/"},{"path":"/it/gambling/reviews/bitsler/","matchPath":"/it/gambling/reviews/bitsler/"},{"path":"/it/gambling/reviews/bitstake/","matchPath":"/it/gambling/reviews/bitstake/"},{"path":"/it/gambling/reviews/bitstarz/","matchPath":"/it/gambling/reviews/bitstarz/"},{"path":"/it/gambling/reviews/bitstrike/","matchPath":"/it/gambling/reviews/bitstrike/"},{"path":"/it/gambling/reviews/bitz/","matchPath":"/it/gambling/reviews/bitz/"},{"path":"/it/gambling/reviews/boomerang-bet/","matchPath":"/it/gambling/reviews/boomerang-bet/"},{"path":"/it/gambling/reviews/bspin/","matchPath":"/it/gambling/reviews/bspin/"},{"path":"/it/gambling/reviews/bullsbet/","matchPath":"/it/gambling/reviews/bullsbet/"},{"path":"/it/gambling/reviews/casino-bitcoin-com/","matchPath":"/it/gambling/reviews/casino-bitcoin-com/"},{"path":"/it/gambling/reviews/casinobet/","matchPath":"/it/gambling/reviews/casinobet/"},{"path":"/it/gambling/reviews/casinopunkz/","matchPath":"/it/gambling/reviews/casinopunkz/"},{"path":"/it/gambling/reviews/celsius-casino/","matchPath":"/it/gambling/reviews/celsius-casino/"},{"path":"/it/gambling/reviews/chancer/","matchPath":"/it/gambling/reviews/chancer/"},{"path":"/it/gambling/reviews/claps-bet/","matchPath":"/it/gambling/reviews/claps-bet/"},{"path":"/it/gambling/reviews/cloudbet/","matchPath":"/it/gambling/reviews/cloudbet/"},{"path":"/it/gambling/reviews/crashino/","matchPath":"/it/gambling/reviews/crashino/"},{"path":"/it/gambling/reviews/crypto-games/","matchPath":"/it/gambling/reviews/crypto-games/"},{"path":"/it/gambling/reviews/cryptoleo/","matchPath":"/it/gambling/reviews/cryptoleo/"},{"path":"/it/gambling/reviews/cryptorino/","matchPath":"/it/gambling/reviews/cryptorino/"},{"path":"/it/gambling/reviews/dbosses/","matchPath":"/it/gambling/reviews/dbosses/"},{"path":"/it/gambling/reviews/dexsport/","matchPath":"/it/gambling/reviews/dexsport/"},{"path":"/it/gambling/reviews/donbet/","matchPath":"/it/gambling/reviews/donbet/"},{"path":"/it/gambling/reviews/drake-casino/","matchPath":"/it/gambling/reviews/drake-casino/"},{"path":"/it/gambling/reviews/duckdice/","matchPath":"/it/gambling/reviews/duckdice/"},{"path":"/it/gambling/reviews/duelbits/","matchPath":"/it/gambling/reviews/duelbits/"},{"path":"/it/gambling/reviews/empire-io/","matchPath":"/it/gambling/reviews/empire-io/"},{"path":"/it/gambling/reviews/fairspin/","matchPath":"/it/gambling/reviews/fairspin/"},{"path":"/it/gambling/reviews/felixspin/","matchPath":"/it/gambling/reviews/felixspin/"},{"path":"/it/gambling/reviews/flush/","matchPath":"/it/gambling/reviews/flush/"},{"path":"/it/gambling/reviews/fortunejack/","matchPath":"/it/gambling/reviews/fortunejack/"},{"path":"/it/gambling/reviews/gamdom/","matchPath":"/it/gambling/reviews/gamdom/"},{"path":"/it/gambling/reviews/gamegram/","matchPath":"/it/gambling/reviews/gamegram/"},{"path":"/it/gambling/reviews/goldenpanda/","matchPath":"/it/gambling/reviews/goldenpanda/"},{"path":"/it/gambling/reviews/howlgg/","matchPath":"/it/gambling/reviews/howlgg/"},{"path":"/it/gambling/reviews/hugewin/","matchPath":"/it/gambling/reviews/hugewin/"},{"path":"/it/gambling/reviews/instant-casino/","matchPath":"/it/gambling/reviews/instant-casino/"},{"path":"/it/gambling/reviews/jackbit/","matchPath":"/it/gambling/reviews/jackbit/"},{"path":"/it/gambling/reviews/jetton/","matchPath":"/it/gambling/reviews/jetton/"},{"path":"/it/gambling/reviews/kingsofsport/","matchPath":"/it/gambling/reviews/kingsofsport/"},{"path":"/it/gambling/reviews/lucky-block/","matchPath":"/it/gambling/reviews/lucky-block/"},{"path":"/it/gambling/reviews/luckywhale/","matchPath":"/it/gambling/reviews/luckywhale/"},{"path":"/it/gambling/reviews/mbit/","matchPath":"/it/gambling/reviews/mbit/"},{"path":"/it/gambling/reviews/mega-dice/","matchPath":"/it/gambling/reviews/mega-dice/"},{"path":"/it/gambling/reviews/megapari/","matchPath":"/it/gambling/reviews/megapari/"},{"path":"/it/gambling/reviews/monkeytilt/","matchPath":"/it/gambling/reviews/monkeytilt/"},{"path":"/it/gambling/reviews/mystake/","matchPath":"/it/gambling/reviews/mystake/"},{"path":"/it/gambling/reviews/playbet-io/","matchPath":"/it/gambling/reviews/playbet-io/"},{"path":"/it/gambling/reviews/poolbit/","matchPath":"/it/gambling/reviews/poolbit/"},{"path":"/it/gambling/reviews/rainbet/","matchPath":"/it/gambling/reviews/rainbet/"},{"path":"/it/gambling/reviews/rakebit/","matchPath":"/it/gambling/reviews/rakebit/"},{"path":"/it/gambling/reviews/roobet/","matchPath":"/it/gambling/reviews/roobet/"},{"path":"/it/gambling/reviews/shock/","matchPath":"/it/gambling/reviews/shock/"},{"path":"/it/gambling/reviews/shuffle/","matchPath":"/it/gambling/reviews/shuffle/"},{"path":"/it/gambling/reviews/spinly/","matchPath":"/it/gambling/reviews/spinly/"},{"path":"/it/gambling/reviews/sportbet-one/","matchPath":"/it/gambling/reviews/sportbet-one/"},{"path":"/it/gambling/reviews/sportsbet-io/","matchPath":"/it/gambling/reviews/sportsbet-io/"},{"path":"/it/gambling/reviews/stake/","matchPath":"/it/gambling/reviews/stake/"},{"path":"/it/gambling/reviews/telbet/","matchPath":"/it/gambling/reviews/telbet/"},{"path":"/it/gambling/reviews/tg-casino/","matchPath":"/it/gambling/reviews/tg-casino/"},{"path":"/it/gambling/reviews/thunderpick/","matchPath":"/it/gambling/reviews/thunderpick/"},{"path":"/it/gambling/reviews/toshibet/","matchPath":"/it/gambling/reviews/toshibet/"},{"path":"/it/gambling/reviews/vave/","matchPath":"/it/gambling/reviews/vave/"},{"path":"/it/gambling/reviews/vipcasino/","matchPath":"/it/gambling/reviews/vipcasino/"},{"path":"/it/gambling/reviews/weiss/","matchPath":"/it/gambling/reviews/weiss/"},{"path":"/it/gambling/reviews/whale/","matchPath":"/it/gambling/reviews/whale/"},{"path":"/it/gambling/reviews/wikibet/","matchPath":"/it/gambling/reviews/wikibet/"},{"path":"/it/gambling/reviews/wildio/","matchPath":"/it/gambling/reviews/wildio/"},{"path":"/it/gambling/reviews/wildtornado/","matchPath":"/it/gambling/reviews/wildtornado/"},{"path":"/it/gambling/reviews/willbet/","matchPath":"/it/gambling/reviews/willbet/"},{"path":"/it/gambling/reviews/win-casino/","matchPath":"/it/gambling/reviews/win-casino/"},{"path":"/it/gambling/reviews/winna/","matchPath":"/it/gambling/reviews/winna/"},{"path":"/it/gambling/reviews/winwin-bet/","matchPath":"/it/gambling/reviews/winwin-bet/"},{"path":"/it/gambling/reviews/winz-io/","matchPath":"/it/gambling/reviews/winz-io/"},{"path":"/it/gambling/reviews/ybets/","matchPath":"/it/gambling/reviews/ybets/"},{"path":"/it/gambling/reviews/yyy-casino/","matchPath":"/it/gambling/reviews/yyy-casino/"},{"path":"/it/mining/cloud-mining/ethereum/","matchPath":"/it/mining/cloud-mining/ethereum/"},{"path":"/it/mining/cloud-mining/solana/","matchPath":"/it/mining/cloud-mining/solana/"},{"path":"/it/wallet/reviews/bitcoincom-wallet/","matchPath":"/it/wallet/reviews/bitcoincom-wallet/"},{"path":"/it/wallet/reviews/metamask/","matchPath":"/it/wallet/reviews/metamask/"},{"path":"/it/wallet/reviews/phantom/","matchPath":"/it/wallet/reviews/phantom/"},{"path":"/it/wallet/reviews/rockwallet/","matchPath":"/it/wallet/reviews/rockwallet/"},{"path":"/it/wallet/reviews/trezor/","matchPath":"/it/wallet/reviews/trezor/"},{"path":"/it/wallet/reviews/uphold/","matchPath":"/it/wallet/reviews/uphold/"},{"path":"/ru/cards/reviews/bitrefill/","matchPath":"/ru/cards/reviews/bitrefill/"},{"path":"/ru/cards/reviews/gemini/","matchPath":"/ru/cards/reviews/gemini/"},{"path":"/ru/cards/reviews/solcard/","matchPath":"/ru/cards/reviews/solcard/"},{"path":"/ru/cards/reviews/verse-card/","matchPath":"/ru/cards/reviews/verse-card/"},{"path":"/ru/exchanges/reviews/binance/","matchPath":"/ru/exchanges/reviews/binance/"},{"path":"/ru/exchanges/reviews/bitget/","matchPath":"/ru/exchanges/reviews/bitget/"},{"path":"/ru/exchanges/reviews/btcc/","matchPath":"/ru/exchanges/reviews/btcc/"},{"path":"/ru/exchanges/reviews/coinbase/","matchPath":"/ru/exchanges/reviews/coinbase/"},{"path":"/ru/exchanges/reviews/coincorner/","matchPath":"/ru/exchanges/reviews/coincorner/"},{"path":"/ru/exchanges/reviews/coinflare/","matchPath":"/ru/exchanges/reviews/coinflare/"},{"path":"/ru/exchanges/reviews/cryptomus/","matchPath":"/ru/exchanges/reviews/cryptomus/"},{"path":"/ru/exchanges/reviews/digital-surge/","matchPath":"/ru/exchanges/reviews/digital-surge/"},{"path":"/ru/exchanges/reviews/exolix/","matchPath":"/ru/exchanges/reviews/exolix/"},{"path":"/ru/exchanges/reviews/figure-markets/","matchPath":"/ru/exchanges/reviews/figure-markets/"},{"path":"/ru/exchanges/reviews/gemini/","matchPath":"/ru/exchanges/reviews/gemini/"},{"path":"/ru/exchanges/reviews/godex/","matchPath":"/ru/exchanges/reviews/godex/"},{"path":"/ru/exchanges/reviews/kraken/","matchPath":"/ru/exchanges/reviews/kraken/"},{"path":"/ru/exchanges/reviews/kucoin/","matchPath":"/ru/exchanges/reviews/kucoin/"},{"path":"/ru/exchanges/reviews/margex/","matchPath":"/ru/exchanges/reviews/margex/"},{"path":"/ru/exchanges/reviews/mexc/","matchPath":"/ru/exchanges/reviews/mexc/"},{"path":"/ru/exchanges/reviews/prime-xbt/","matchPath":"/ru/exchanges/reviews/prime-xbt/"},{"path":"/ru/exchanges/reviews/primexbt/","matchPath":"/ru/exchanges/reviews/primexbt/"},{"path":"/ru/exchanges/reviews/rocko/","matchPath":"/ru/exchanges/reviews/rocko/"},{"path":"/ru/exchanges/reviews/swapuz/","matchPath":"/ru/exchanges/reviews/swapuz/"},{"path":"/ru/exchanges/reviews/uphold/","matchPath":"/ru/exchanges/reviews/uphold/"},{"path":"/ru/exchanges/reviews/verse/","matchPath":"/ru/exchanges/reviews/verse/"},{"path":"/ru/exchanges/reviews/virgo-cx/","matchPath":"/ru/exchanges/reviews/virgo-cx/"},{"path":"/ru/exchanges/reviews/virgo/","matchPath":"/ru/exchanges/reviews/virgo/"},{"path":"/ru/exchanges/reviews/voox/","matchPath":"/ru/exchanges/reviews/voox/"},{"path":"/ru/exchanges/reviews/woofi/","matchPath":"/ru/exchanges/reviews/woofi/"},{"path":"/ru/exchanges/reviews/woox/","matchPath":"/ru/exchanges/reviews/woox/"},{"path":"/ru/exchanges/reviews/xbo/","matchPath":"/ru/exchanges/reviews/xbo/"},{"path":"/ru/gambling/betting/american-football/","matchPath":"/ru/gambling/betting/american-football/"},{"path":"/ru/gambling/betting/anonymous/","matchPath":"/ru/gambling/betting/anonymous/"},{"path":"/ru/gambling/betting/australian-open-tennis/","matchPath":"/ru/gambling/betting/australian-open-tennis/"},{"path":"/ru/gambling/betting/badminton/","matchPath":"/ru/gambling/betting/badminton/"},{"path":"/ru/gambling/betting/baseball/","matchPath":"/ru/gambling/betting/baseball/"},{"path":"/ru/gambling/betting/basketball/","matchPath":"/ru/gambling/betting/basketball/"},{"path":"/ru/gambling/betting/betting-exchanges/","matchPath":"/ru/gambling/betting/betting-exchanges/"},{"path":"/ru/gambling/betting/bonuses/","matchPath":"/ru/gambling/betting/bonuses/"},{"path":"/ru/gambling/betting/boxing/","matchPath":"/ru/gambling/betting/boxing/"},{"path":"/ru/gambling/betting/bundesliga/","matchPath":"/ru/gambling/betting/bundesliga/"},{"path":"/ru/gambling/betting/chess/","matchPath":"/ru/gambling/betting/chess/"},{"path":"/ru/gambling/betting/college-basketball/","matchPath":"/ru/gambling/betting/college-basketball/"},{"path":"/ru/gambling/betting/cricket/","matchPath":"/ru/gambling/betting/cricket/"},{"path":"/ru/gambling/betting/cycling/","matchPath":"/ru/gambling/betting/cycling/"},{"path":"/ru/gambling/betting/darts/","matchPath":"/ru/gambling/betting/darts/"},{"path":"/ru/gambling/betting/english-premier-league/","matchPath":"/ru/gambling/betting/english-premier-league/"},{"path":"/ru/gambling/betting/esports/","matchPath":"/ru/gambling/betting/esports/"},{"path":"/ru/gambling/betting/fantasy-sports/","matchPath":"/ru/gambling/betting/fantasy-sports/"},{"path":"/ru/gambling/betting/fifa-world-cup-2025/","matchPath":"/ru/gambling/betting/fifa-world-cup-2025/"},{"path":"/ru/gambling/betting/football/","matchPath":"/ru/gambling/betting/football/"},{"path":"/ru/gambling/betting/formula-1/","matchPath":"/ru/gambling/betting/formula-1/"},{"path":"/ru/gambling/betting/french-open-tennis/","matchPath":"/ru/gambling/betting/french-open-tennis/"},{"path":"/ru/gambling/betting/grand-slam/","matchPath":"/ru/gambling/betting/grand-slam/"},{"path":"/ru/gambling/betting/greyhound-racing/","matchPath":"/ru/gambling/betting/greyhound-racing/"},{"path":"/ru/gambling/betting/handball/","matchPath":"/ru/gambling/betting/handball/"},{"path":"/ru/gambling/betting/hockey/","matchPath":"/ru/gambling/betting/hockey/"},{"path":"/ru/gambling/betting/horse-racing/","matchPath":"/ru/gambling/betting/horse-racing/"},{"path":"/ru/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/ru/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/ru/gambling/betting/ice-hockey/","matchPath":"/ru/gambling/betting/ice-hockey/"},{"path":"/ru/gambling/betting/kentucky-derby/","matchPath":"/ru/gambling/betting/kentucky-derby/"},{"path":"/ru/gambling/betting/la-liga/","matchPath":"/ru/gambling/betting/la-liga/"},{"path":"/ru/gambling/betting/live-betting/","matchPath":"/ru/gambling/betting/live-betting/"},{"path":"/ru/gambling/betting/march-madness/","matchPath":"/ru/gambling/betting/march-madness/"},{"path":"/ru/gambling/betting/mma/","matchPath":"/ru/gambling/betting/mma/"},{"path":"/ru/gambling/betting/motorsports/","matchPath":"/ru/gambling/betting/motorsports/"},{"path":"/ru/gambling/betting/nascar-cup-series/","matchPath":"/ru/gambling/betting/nascar-cup-series/"},{"path":"/ru/gambling/betting/nba-draft-2025/","matchPath":"/ru/gambling/betting/nba-draft-2025/"},{"path":"/ru/gambling/betting/nfl-draft-2025/","matchPath":"/ru/gambling/betting/nfl-draft-2025/"},{"path":"/ru/gambling/betting/nhl-entry-draft-2025/","matchPath":"/ru/gambling/betting/nhl-entry-draft-2025/"},{"path":"/ru/gambling/betting/olympics/","matchPath":"/ru/gambling/betting/olympics/"},{"path":"/ru/gambling/betting/pga/","matchPath":"/ru/gambling/betting/pga/"},{"path":"/ru/gambling/betting/politics/","matchPath":"/ru/gambling/betting/politics/"},{"path":"/ru/gambling/betting/prediction-markets/","matchPath":"/ru/gambling/betting/prediction-markets/"},{"path":"/ru/gambling/betting/rugby/","matchPath":"/ru/gambling/betting/rugby/"},{"path":"/ru/gambling/betting/serie-a/","matchPath":"/ru/gambling/betting/serie-a/"},{"path":"/ru/gambling/betting/snooker/","matchPath":"/ru/gambling/betting/snooker/"},{"path":"/ru/gambling/betting/sportsbook/","matchPath":"/ru/gambling/betting/sportsbook/"},{"path":"/ru/gambling/betting/stock-car-racing/","matchPath":"/ru/gambling/betting/stock-car-racing/"},{"path":"/ru/gambling/betting/super-bowl-lix/","matchPath":"/ru/gambling/betting/super-bowl-lix/"},{"path":"/ru/gambling/betting/table-tennis/","matchPath":"/ru/gambling/betting/table-tennis/"},{"path":"/ru/gambling/betting/ufc-fight-night/","matchPath":"/ru/gambling/betting/ufc-fight-night/"},{"path":"/ru/gambling/betting/ufc/","matchPath":"/ru/gambling/betting/ufc/"},{"path":"/ru/gambling/betting/up-and-down/","matchPath":"/ru/gambling/betting/up-and-down/"},{"path":"/ru/gambling/betting/us-open-tennis/","matchPath":"/ru/gambling/betting/us-open-tennis/"},{"path":"/ru/gambling/betting/volleyball/","matchPath":"/ru/gambling/betting/volleyball/"},{"path":"/ru/gambling/betting/wimbledon/","matchPath":"/ru/gambling/betting/wimbledon/"},{"path":"/ru/gambling/betting/winter-sports/","matchPath":"/ru/gambling/betting/winter-sports/"},{"path":"/ru/gambling/casino/anonymous/","matchPath":"/ru/gambling/casino/anonymous/"},{"path":"/ru/gambling/casino/arbitrum/","matchPath":"/ru/gambling/casino/arbitrum/"},{"path":"/ru/gambling/casino/avax/","matchPath":"/ru/gambling/casino/avax/"},{"path":"/ru/gambling/casino/baccarat/","matchPath":"/ru/gambling/casino/baccarat/"},{"path":"/ru/gambling/casino/base/","matchPath":"/ru/gambling/casino/base/"},{"path":"/ru/gambling/casino/binance-coin/","matchPath":"/ru/gambling/casino/binance-coin/"},{"path":"/ru/gambling/casino/bitcoin-cash/","matchPath":"/ru/gambling/casino/bitcoin-cash/"},{"path":"/ru/gambling/casino/bitcoin/","matchPath":"/ru/gambling/casino/bitcoin/"},{"path":"/ru/gambling/casino/blackjack/","matchPath":"/ru/gambling/casino/blackjack/"},{"path":"/ru/gambling/casino/bonus-buys/","matchPath":"/ru/gambling/casino/bonus-buys/"},{"path":"/ru/gambling/casino/bonus/","matchPath":"/ru/gambling/casino/bonus/"},{"path":"/ru/gambling/casino/book-of/","matchPath":"/ru/gambling/casino/book-of/"},{"path":"/ru/gambling/casino/buy-extra-ball/","matchPath":"/ru/gambling/casino/buy-extra-ball/"},{"path":"/ru/gambling/casino/cardano/","matchPath":"/ru/gambling/casino/cardano/"},{"path":"/ru/gambling/casino/cluster-pays/","matchPath":"/ru/gambling/casino/cluster-pays/"},{"path":"/ru/gambling/casino/cosmic-jackpot-games/","matchPath":"/ru/gambling/casino/cosmic-jackpot-games/"},{"path":"/ru/gambling/casino/craps/","matchPath":"/ru/gambling/casino/craps/"},{"path":"/ru/gambling/casino/crash/","matchPath":"/ru/gambling/casino/crash/"},{"path":"/ru/gambling/casino/dai/","matchPath":"/ru/gambling/casino/dai/"},{"path":"/ru/gambling/casino/decentralized/","matchPath":"/ru/gambling/casino/decentralized/"},{"path":"/ru/gambling/casino/defi/","matchPath":"/ru/gambling/casino/defi/"},{"path":"/ru/gambling/casino/dice/","matchPath":"/ru/gambling/casino/dice/"},{"path":"/ru/gambling/casino/discord/","matchPath":"/ru/gambling/casino/discord/"},{"path":"/ru/gambling/casino/dogecoin/","matchPath":"/ru/gambling/casino/dogecoin/"},{"path":"/ru/gambling/casino/drops-and-wins/","matchPath":"/ru/gambling/casino/drops-and-wins/"},{"path":"/ru/gambling/casino/egyptian-slots/","matchPath":"/ru/gambling/casino/egyptian-slots/"},{"path":"/ru/gambling/casino/eth-bonus/","matchPath":"/ru/gambling/casino/eth-bonus/"},{"path":"/ru/gambling/casino/eth-live-dealer/","matchPath":"/ru/gambling/casino/eth-live-dealer/"},{"path":"/ru/gambling/casino/eth-no-deposit-bonus/","matchPath":"/ru/gambling/casino/eth-no-deposit-bonus/"},{"path":"/ru/gambling/casino/eth-roulette/","matchPath":"/ru/gambling/casino/eth-roulette/"},{"path":"/ru/gambling/casino/eth-slots/","matchPath":"/ru/gambling/casino/eth-slots/"},{"path":"/ru/gambling/casino/ethereum/","matchPath":"/ru/gambling/casino/ethereum/"},{"path":"/ru/gambling/casino/free-spins/","matchPath":"/ru/gambling/casino/free-spins/"},{"path":"/ru/gambling/casino/galactic-slot-machines/","matchPath":"/ru/gambling/casino/galactic-slot-machines/"},{"path":"/ru/gambling/casino/game-shows/","matchPath":"/ru/gambling/casino/game-shows/"},{"path":"/ru/gambling/casino/high-rollers/","matchPath":"/ru/gambling/casino/high-rollers/"},{"path":"/ru/gambling/casino/high-volatility/","matchPath":"/ru/gambling/casino/high-volatility/"},{"path":"/ru/gambling/casino/hold-and-win/","matchPath":"/ru/gambling/casino/hold-and-win/"},{"path":"/ru/gambling/casino/horror-casino-games/","matchPath":"/ru/gambling/casino/horror-casino-games/"},{"path":"/ru/gambling/casino/instant-withdrawal/","matchPath":"/ru/gambling/casino/instant-withdrawal/"},{"path":"/ru/gambling/casino/jackpot/","matchPath":"/ru/gambling/casino/jackpot/"},{"path":"/ru/gambling/casino/keno/","matchPath":"/ru/gambling/casino/keno/"},{"path":"/ru/gambling/casino/litecoin/","matchPath":"/ru/gambling/casino/litecoin/"},{"path":"/ru/gambling/casino/live-dealer/","matchPath":"/ru/gambling/casino/live-dealer/"},{"path":"/ru/gambling/casino/megaways/","matchPath":"/ru/gambling/casino/megaways/"},{"path":"/ru/gambling/casino/meme-coins/","matchPath":"/ru/gambling/casino/meme-coins/"},{"path":"/ru/gambling/casino/metamask/","matchPath":"/ru/gambling/casino/metamask/"},{"path":"/ru/gambling/casino/metaverse/","matchPath":"/ru/gambling/casino/metaverse/"},{"path":"/ru/gambling/casino/mines/","matchPath":"/ru/gambling/casino/mines/"},{"path":"/ru/gambling/casino/minimum-deposit/","matchPath":"/ru/gambling/casino/minimum-deposit/"},{"path":"/ru/gambling/casino/mobile/","matchPath":"/ru/gambling/casino/mobile/"},{"path":"/ru/gambling/casino/multiplayer-games/","matchPath":"/ru/gambling/casino/multiplayer-games/"},{"path":"/ru/gambling/casino/newest/","matchPath":"/ru/gambling/casino/newest/"},{"path":"/ru/gambling/casino/nft/","matchPath":"/ru/gambling/casino/nft/"},{"path":"/ru/gambling/casino/no-deposit-bonus/","matchPath":"/ru/gambling/casino/no-deposit-bonus/"},{"path":"/ru/gambling/casino/norse-mythology-slots/","matchPath":"/ru/gambling/casino/norse-mythology-slots/"},{"path":"/ru/gambling/casino/official-trump/","matchPath":"/ru/gambling/casino/official-trump/"},{"path":"/ru/gambling/casino/optimism/","matchPath":"/ru/gambling/casino/optimism/"},{"path":"/ru/gambling/casino/pirate-slots/","matchPath":"/ru/gambling/casino/pirate-slots/"},{"path":"/ru/gambling/casino/plinko/","matchPath":"/ru/gambling/casino/plinko/"},{"path":"/ru/gambling/casino/poker/","matchPath":"/ru/gambling/casino/poker/"},{"path":"/ru/gambling/casino/polygon/","matchPath":"/ru/gambling/casino/polygon/"},{"path":"/ru/gambling/casino/privacy/","matchPath":"/ru/gambling/casino/privacy/"},{"path":"/ru/gambling/casino/progressive-jackpot/","matchPath":"/ru/gambling/casino/progressive-jackpot/"},{"path":"/ru/gambling/casino/provably-fair/","matchPath":"/ru/gambling/casino/provably-fair/"},{"path":"/ru/gambling/casino/respins/","matchPath":"/ru/gambling/casino/respins/"},{"path":"/ru/gambling/casino/roulette/","matchPath":"/ru/gambling/casino/roulette/"},{"path":"/ru/gambling/casino/scatter-pays/","matchPath":"/ru/gambling/casino/scatter-pays/"},{"path":"/ru/gambling/casino/scratch-cards/","matchPath":"/ru/gambling/casino/scratch-cards/"},{"path":"/ru/gambling/casino/shiba-inu/","matchPath":"/ru/gambling/casino/shiba-inu/"},{"path":"/ru/gambling/casino/sic-bo/","matchPath":"/ru/gambling/casino/sic-bo/"},{"path":"/ru/gambling/casino/slots/","matchPath":"/ru/gambling/casino/slots/"},{"path":"/ru/gambling/casino/social-casino/","matchPath":"/ru/gambling/casino/social-casino/"},{"path":"/ru/gambling/casino/solana/","matchPath":"/ru/gambling/casino/solana/"},{"path":"/ru/gambling/casino/stablecoins/","matchPath":"/ru/gambling/casino/stablecoins/"},{"path":"/ru/gambling/casino/sweepstakes/","matchPath":"/ru/gambling/casino/sweepstakes/"},{"path":"/ru/gambling/casino/ton/","matchPath":"/ru/gambling/casino/ton/"},{"path":"/ru/gambling/casino/toshi/","matchPath":"/ru/gambling/casino/toshi/"},{"path":"/ru/gambling/casino/treasure-hunt-slots/","matchPath":"/ru/gambling/casino/treasure-hunt-slots/"},{"path":"/ru/gambling/casino/trump/","matchPath":"/ru/gambling/casino/trump/"},{"path":"/ru/gambling/casino/trx/","matchPath":"/ru/gambling/casino/trx/"},{"path":"/ru/gambling/casino/usdc/","matchPath":"/ru/gambling/casino/usdc/"},{"path":"/ru/gambling/casino/usdt/","matchPath":"/ru/gambling/casino/usdt/"},{"path":"/ru/gambling/casino/verse/","matchPath":"/ru/gambling/casino/verse/"},{"path":"/ru/gambling/casino/video-poker/","matchPath":"/ru/gambling/casino/video-poker/"},{"path":"/ru/gambling/casino/viking-casino-games/","matchPath":"/ru/gambling/casino/viking-casino-games/"},{"path":"/ru/gambling/casino/vip/","matchPath":"/ru/gambling/casino/vip/"},{"path":"/ru/gambling/casino/wheel/","matchPath":"/ru/gambling/casino/wheel/"},{"path":"/ru/gambling/casino/xrp/","matchPath":"/ru/gambling/casino/xrp/"},{"path":"/ru/gambling/reviews/0xbet/","matchPath":"/ru/gambling/reviews/0xbet/"},{"path":"/ru/gambling/reviews/1win/","matchPath":"/ru/gambling/reviews/1win/"},{"path":"/ru/gambling/reviews/1xbit/","matchPath":"/ru/gambling/reviews/1xbit/"},{"path":"/ru/gambling/reviews/500-casino/","matchPath":"/ru/gambling/reviews/500-casino/"},{"path":"/ru/gambling/reviews/7bitcasino/","matchPath":"/ru/gambling/reviews/7bitcasino/"},{"path":"/ru/gambling/reviews/888starzbet/","matchPath":"/ru/gambling/reviews/888starzbet/"},{"path":"/ru/gambling/reviews/abuking/","matchPath":"/ru/gambling/reviews/abuking/"},{"path":"/ru/gambling/reviews/aerogram-bot/","matchPath":"/ru/gambling/reviews/aerogram-bot/"},{"path":"/ru/gambling/reviews/alibabet/","matchPath":"/ru/gambling/reviews/alibabet/"},{"path":"/ru/gambling/reviews/anonymbet/","matchPath":"/ru/gambling/reviews/anonymbet/"},{"path":"/ru/gambling/reviews/ballersbet/","matchPath":"/ru/gambling/reviews/ballersbet/"},{"path":"/ru/gambling/reviews/bc-game/","matchPath":"/ru/gambling/reviews/bc-game/"},{"path":"/ru/gambling/reviews/bet20/","matchPath":"/ru/gambling/reviews/bet20/"},{"path":"/ru/gambling/reviews/betandreas/","matchPath":"/ru/gambling/reviews/betandreas/"},{"path":"/ru/gambling/reviews/betfinal/","matchPath":"/ru/gambling/reviews/betfinal/"},{"path":"/ru/gambling/reviews/bethog/","matchPath":"/ru/gambling/reviews/bethog/"},{"path":"/ru/gambling/reviews/betpanda/","matchPath":"/ru/gambling/reviews/betpanda/"},{"path":"/ru/gambling/reviews/betplay/","matchPath":"/ru/gambling/reviews/betplay/"},{"path":"/ru/gambling/reviews/betrunner/","matchPath":"/ru/gambling/reviews/betrunner/"},{"path":"/ru/gambling/reviews/betsio/","matchPath":"/ru/gambling/reviews/betsio/"},{"path":"/ru/gambling/reviews/bety/","matchPath":"/ru/gambling/reviews/bety/"},{"path":"/ru/gambling/reviews/bitcasino-io/","matchPath":"/ru/gambling/reviews/bitcasino-io/"},{"path":"/ru/gambling/reviews/bitcoinsportsbookag/","matchPath":"/ru/gambling/reviews/bitcoinsportsbookag/"},{"path":"/ru/gambling/reviews/bitsler/","matchPath":"/ru/gambling/reviews/bitsler/"},{"path":"/ru/gambling/reviews/bitstake/","matchPath":"/ru/gambling/reviews/bitstake/"},{"path":"/ru/gambling/reviews/bitstarz/","matchPath":"/ru/gambling/reviews/bitstarz/"},{"path":"/ru/gambling/reviews/bitstrike/","matchPath":"/ru/gambling/reviews/bitstrike/"},{"path":"/ru/gambling/reviews/bitz/","matchPath":"/ru/gambling/reviews/bitz/"},{"path":"/ru/gambling/reviews/boomerang-bet/","matchPath":"/ru/gambling/reviews/boomerang-bet/"},{"path":"/ru/gambling/reviews/bspin/","matchPath":"/ru/gambling/reviews/bspin/"},{"path":"/ru/gambling/reviews/bullsbet/","matchPath":"/ru/gambling/reviews/bullsbet/"},{"path":"/ru/gambling/reviews/casino-bitcoin-com/","matchPath":"/ru/gambling/reviews/casino-bitcoin-com/"},{"path":"/ru/gambling/reviews/casinobet/","matchPath":"/ru/gambling/reviews/casinobet/"},{"path":"/ru/gambling/reviews/casinopunkz/","matchPath":"/ru/gambling/reviews/casinopunkz/"},{"path":"/ru/gambling/reviews/celsius-casino/","matchPath":"/ru/gambling/reviews/celsius-casino/"},{"path":"/ru/gambling/reviews/chancer/","matchPath":"/ru/gambling/reviews/chancer/"},{"path":"/ru/gambling/reviews/claps-bet/","matchPath":"/ru/gambling/reviews/claps-bet/"},{"path":"/ru/gambling/reviews/cloudbet/","matchPath":"/ru/gambling/reviews/cloudbet/"},{"path":"/ru/gambling/reviews/crashino/","matchPath":"/ru/gambling/reviews/crashino/"},{"path":"/ru/gambling/reviews/crypto-games/","matchPath":"/ru/gambling/reviews/crypto-games/"},{"path":"/ru/gambling/reviews/cryptoleo/","matchPath":"/ru/gambling/reviews/cryptoleo/"},{"path":"/ru/gambling/reviews/cryptorino/","matchPath":"/ru/gambling/reviews/cryptorino/"},{"path":"/ru/gambling/reviews/dbosses/","matchPath":"/ru/gambling/reviews/dbosses/"},{"path":"/ru/gambling/reviews/dexsport/","matchPath":"/ru/gambling/reviews/dexsport/"},{"path":"/ru/gambling/reviews/donbet/","matchPath":"/ru/gambling/reviews/donbet/"},{"path":"/ru/gambling/reviews/drake-casino/","matchPath":"/ru/gambling/reviews/drake-casino/"},{"path":"/ru/gambling/reviews/duckdice/","matchPath":"/ru/gambling/reviews/duckdice/"},{"path":"/ru/gambling/reviews/duelbits/","matchPath":"/ru/gambling/reviews/duelbits/"},{"path":"/ru/gambling/reviews/empire-io/","matchPath":"/ru/gambling/reviews/empire-io/"},{"path":"/ru/gambling/reviews/fairspin/","matchPath":"/ru/gambling/reviews/fairspin/"},{"path":"/ru/gambling/reviews/felixspin/","matchPath":"/ru/gambling/reviews/felixspin/"},{"path":"/ru/gambling/reviews/flush/","matchPath":"/ru/gambling/reviews/flush/"},{"path":"/ru/gambling/reviews/fortunejack/","matchPath":"/ru/gambling/reviews/fortunejack/"},{"path":"/ru/gambling/reviews/gamdom/","matchPath":"/ru/gambling/reviews/gamdom/"},{"path":"/ru/gambling/reviews/gamegram/","matchPath":"/ru/gambling/reviews/gamegram/"},{"path":"/ru/gambling/reviews/goldenpanda/","matchPath":"/ru/gambling/reviews/goldenpanda/"},{"path":"/ru/gambling/reviews/howlgg/","matchPath":"/ru/gambling/reviews/howlgg/"},{"path":"/ru/gambling/reviews/hugewin/","matchPath":"/ru/gambling/reviews/hugewin/"},{"path":"/ru/gambling/reviews/instant-casino/","matchPath":"/ru/gambling/reviews/instant-casino/"},{"path":"/ru/gambling/reviews/jackbit/","matchPath":"/ru/gambling/reviews/jackbit/"},{"path":"/ru/gambling/reviews/jetton/","matchPath":"/ru/gambling/reviews/jetton/"},{"path":"/ru/gambling/reviews/kingsofsport/","matchPath":"/ru/gambling/reviews/kingsofsport/"},{"path":"/ru/gambling/reviews/lucky-block/","matchPath":"/ru/gambling/reviews/lucky-block/"},{"path":"/ru/gambling/reviews/luckywhale/","matchPath":"/ru/gambling/reviews/luckywhale/"},{"path":"/ru/gambling/reviews/mbit/","matchPath":"/ru/gambling/reviews/mbit/"},{"path":"/ru/gambling/reviews/mega-dice/","matchPath":"/ru/gambling/reviews/mega-dice/"},{"path":"/ru/gambling/reviews/megapari/","matchPath":"/ru/gambling/reviews/megapari/"},{"path":"/ru/gambling/reviews/monkeytilt/","matchPath":"/ru/gambling/reviews/monkeytilt/"},{"path":"/ru/gambling/reviews/mystake/","matchPath":"/ru/gambling/reviews/mystake/"},{"path":"/ru/gambling/reviews/playbet-io/","matchPath":"/ru/gambling/reviews/playbet-io/"},{"path":"/ru/gambling/reviews/poolbit/","matchPath":"/ru/gambling/reviews/poolbit/"},{"path":"/ru/gambling/reviews/rainbet/","matchPath":"/ru/gambling/reviews/rainbet/"},{"path":"/ru/gambling/reviews/rakebit/","matchPath":"/ru/gambling/reviews/rakebit/"},{"path":"/ru/gambling/reviews/roobet/","matchPath":"/ru/gambling/reviews/roobet/"},{"path":"/ru/gambling/reviews/shock/","matchPath":"/ru/gambling/reviews/shock/"},{"path":"/ru/gambling/reviews/shuffle/","matchPath":"/ru/gambling/reviews/shuffle/"},{"path":"/ru/gambling/reviews/spinly/","matchPath":"/ru/gambling/reviews/spinly/"},{"path":"/ru/gambling/reviews/sportbet-one/","matchPath":"/ru/gambling/reviews/sportbet-one/"},{"path":"/ru/gambling/reviews/sportsbet-io/","matchPath":"/ru/gambling/reviews/sportsbet-io/"},{"path":"/ru/gambling/reviews/stake/","matchPath":"/ru/gambling/reviews/stake/"},{"path":"/ru/gambling/reviews/telbet/","matchPath":"/ru/gambling/reviews/telbet/"},{"path":"/ru/gambling/reviews/tg-casino/","matchPath":"/ru/gambling/reviews/tg-casino/"},{"path":"/ru/gambling/reviews/thunderpick/","matchPath":"/ru/gambling/reviews/thunderpick/"},{"path":"/ru/gambling/reviews/toshibet/","matchPath":"/ru/gambling/reviews/toshibet/"},{"path":"/ru/gambling/reviews/vave/","matchPath":"/ru/gambling/reviews/vave/"},{"path":"/ru/gambling/reviews/vipcasino/","matchPath":"/ru/gambling/reviews/vipcasino/"},{"path":"/ru/gambling/reviews/weiss/","matchPath":"/ru/gambling/reviews/weiss/"},{"path":"/ru/gambling/reviews/whale/","matchPath":"/ru/gambling/reviews/whale/"},{"path":"/ru/gambling/reviews/wikibet/","matchPath":"/ru/gambling/reviews/wikibet/"},{"path":"/ru/gambling/reviews/wildio/","matchPath":"/ru/gambling/reviews/wildio/"},{"path":"/ru/gambling/reviews/wildtornado/","matchPath":"/ru/gambling/reviews/wildtornado/"},{"path":"/ru/gambling/reviews/willbet/","matchPath":"/ru/gambling/reviews/willbet/"},{"path":"/ru/gambling/reviews/win-casino/","matchPath":"/ru/gambling/reviews/win-casino/"},{"path":"/ru/gambling/reviews/winna/","matchPath":"/ru/gambling/reviews/winna/"},{"path":"/ru/gambling/reviews/winwin-bet/","matchPath":"/ru/gambling/reviews/winwin-bet/"},{"path":"/ru/gambling/reviews/winz-io/","matchPath":"/ru/gambling/reviews/winz-io/"},{"path":"/ru/gambling/reviews/ybets/","matchPath":"/ru/gambling/reviews/ybets/"},{"path":"/ru/gambling/reviews/yyy-casino/","matchPath":"/ru/gambling/reviews/yyy-casino/"},{"path":"/ru/mining/cloud-mining/ethereum/","matchPath":"/ru/mining/cloud-mining/ethereum/"},{"path":"/ru/mining/cloud-mining/solana/","matchPath":"/ru/mining/cloud-mining/solana/"},{"path":"/ru/wallet/reviews/bitcoincom-wallet/","matchPath":"/ru/wallet/reviews/bitcoincom-wallet/"},{"path":"/ru/wallet/reviews/metamask/","matchPath":"/ru/wallet/reviews/metamask/"},{"path":"/ru/wallet/reviews/phantom/","matchPath":"/ru/wallet/reviews/phantom/"},{"path":"/ru/wallet/reviews/rockwallet/","matchPath":"/ru/wallet/reviews/rockwallet/"},{"path":"/ru/wallet/reviews/trezor/","matchPath":"/ru/wallet/reviews/trezor/"},{"path":"/ru/wallet/reviews/uphold/","matchPath":"/ru/wallet/reviews/uphold/"},{"path":"/zh/cards/reviews/bitrefill/","matchPath":"/zh/cards/reviews/bitrefill/"},{"path":"/zh/cards/reviews/gemini/","matchPath":"/zh/cards/reviews/gemini/"},{"path":"/zh/cards/reviews/solcard/","matchPath":"/zh/cards/reviews/solcard/"},{"path":"/zh/cards/reviews/verse-card/","matchPath":"/zh/cards/reviews/verse-card/"},{"path":"/zh/exchanges/reviews/binance/","matchPath":"/zh/exchanges/reviews/binance/"},{"path":"/zh/exchanges/reviews/bitget/","matchPath":"/zh/exchanges/reviews/bitget/"},{"path":"/zh/exchanges/reviews/btcc/","matchPath":"/zh/exchanges/reviews/btcc/"},{"path":"/zh/exchanges/reviews/coinbase/","matchPath":"/zh/exchanges/reviews/coinbase/"},{"path":"/zh/exchanges/reviews/coincorner/","matchPath":"/zh/exchanges/reviews/coincorner/"},{"path":"/zh/exchanges/reviews/coinflare/","matchPath":"/zh/exchanges/reviews/coinflare/"},{"path":"/zh/exchanges/reviews/cryptomus/","matchPath":"/zh/exchanges/reviews/cryptomus/"},{"path":"/zh/exchanges/reviews/digital-surge/","matchPath":"/zh/exchanges/reviews/digital-surge/"},{"path":"/zh/exchanges/reviews/exolix/","matchPath":"/zh/exchanges/reviews/exolix/"},{"path":"/zh/exchanges/reviews/figure-markets/","matchPath":"/zh/exchanges/reviews/figure-markets/"},{"path":"/zh/exchanges/reviews/gemini/","matchPath":"/zh/exchanges/reviews/gemini/"},{"path":"/zh/exchanges/reviews/godex/","matchPath":"/zh/exchanges/reviews/godex/"},{"path":"/zh/exchanges/reviews/kraken/","matchPath":"/zh/exchanges/reviews/kraken/"},{"path":"/zh/exchanges/reviews/kucoin/","matchPath":"/zh/exchanges/reviews/kucoin/"},{"path":"/zh/exchanges/reviews/margex/","matchPath":"/zh/exchanges/reviews/margex/"},{"path":"/zh/exchanges/reviews/mexc/","matchPath":"/zh/exchanges/reviews/mexc/"},{"path":"/zh/exchanges/reviews/prime-xbt/","matchPath":"/zh/exchanges/reviews/prime-xbt/"},{"path":"/zh/exchanges/reviews/primexbt/","matchPath":"/zh/exchanges/reviews/primexbt/"},{"path":"/zh/exchanges/reviews/rocko/","matchPath":"/zh/exchanges/reviews/rocko/"},{"path":"/zh/exchanges/reviews/swapuz/","matchPath":"/zh/exchanges/reviews/swapuz/"},{"path":"/zh/exchanges/reviews/uphold/","matchPath":"/zh/exchanges/reviews/uphold/"},{"path":"/zh/exchanges/reviews/verse/","matchPath":"/zh/exchanges/reviews/verse/"},{"path":"/zh/exchanges/reviews/virgo-cx/","matchPath":"/zh/exchanges/reviews/virgo-cx/"},{"path":"/zh/exchanges/reviews/virgo/","matchPath":"/zh/exchanges/reviews/virgo/"},{"path":"/zh/exchanges/reviews/voox/","matchPath":"/zh/exchanges/reviews/voox/"},{"path":"/zh/exchanges/reviews/woofi/","matchPath":"/zh/exchanges/reviews/woofi/"},{"path":"/zh/exchanges/reviews/woox/","matchPath":"/zh/exchanges/reviews/woox/"},{"path":"/zh/exchanges/reviews/xbo/","matchPath":"/zh/exchanges/reviews/xbo/"},{"path":"/zh/gambling/betting/american-football/","matchPath":"/zh/gambling/betting/american-football/"},{"path":"/zh/gambling/betting/anonymous/","matchPath":"/zh/gambling/betting/anonymous/"},{"path":"/zh/gambling/betting/australian-open-tennis/","matchPath":"/zh/gambling/betting/australian-open-tennis/"},{"path":"/zh/gambling/betting/badminton/","matchPath":"/zh/gambling/betting/badminton/"},{"path":"/zh/gambling/betting/baseball/","matchPath":"/zh/gambling/betting/baseball/"},{"path":"/zh/gambling/betting/basketball/","matchPath":"/zh/gambling/betting/basketball/"},{"path":"/zh/gambling/betting/betting-exchanges/","matchPath":"/zh/gambling/betting/betting-exchanges/"},{"path":"/zh/gambling/betting/bonuses/","matchPath":"/zh/gambling/betting/bonuses/"},{"path":"/zh/gambling/betting/boxing/","matchPath":"/zh/gambling/betting/boxing/"},{"path":"/zh/gambling/betting/bundesliga/","matchPath":"/zh/gambling/betting/bundesliga/"},{"path":"/zh/gambling/betting/chess/","matchPath":"/zh/gambling/betting/chess/"},{"path":"/zh/gambling/betting/college-basketball/","matchPath":"/zh/gambling/betting/college-basketball/"},{"path":"/zh/gambling/betting/cricket/","matchPath":"/zh/gambling/betting/cricket/"},{"path":"/zh/gambling/betting/cycling/","matchPath":"/zh/gambling/betting/cycling/"},{"path":"/zh/gambling/betting/darts/","matchPath":"/zh/gambling/betting/darts/"},{"path":"/zh/gambling/betting/english-premier-league/","matchPath":"/zh/gambling/betting/english-premier-league/"},{"path":"/zh/gambling/betting/esports/","matchPath":"/zh/gambling/betting/esports/"},{"path":"/zh/gambling/betting/fantasy-sports/","matchPath":"/zh/gambling/betting/fantasy-sports/"},{"path":"/zh/gambling/betting/fifa-world-cup-2025/","matchPath":"/zh/gambling/betting/fifa-world-cup-2025/"},{"path":"/zh/gambling/betting/football/","matchPath":"/zh/gambling/betting/football/"},{"path":"/zh/gambling/betting/formula-1/","matchPath":"/zh/gambling/betting/formula-1/"},{"path":"/zh/gambling/betting/french-open-tennis/","matchPath":"/zh/gambling/betting/french-open-tennis/"},{"path":"/zh/gambling/betting/grand-slam/","matchPath":"/zh/gambling/betting/grand-slam/"},{"path":"/zh/gambling/betting/greyhound-racing/","matchPath":"/zh/gambling/betting/greyhound-racing/"},{"path":"/zh/gambling/betting/handball/","matchPath":"/zh/gambling/betting/handball/"},{"path":"/zh/gambling/betting/hockey/","matchPath":"/zh/gambling/betting/hockey/"},{"path":"/zh/gambling/betting/horse-racing/","matchPath":"/zh/gambling/betting/horse-racing/"},{"path":"/zh/gambling/betting/ice-hockey-world-championship-2025/","matchPath":"/zh/gambling/betting/ice-hockey-world-championship-2025/"},{"path":"/zh/gambling/betting/ice-hockey/","matchPath":"/zh/gambling/betting/ice-hockey/"},{"path":"/zh/gambling/betting/kentucky-derby/","matchPath":"/zh/gambling/betting/kentucky-derby/"},{"path":"/zh/gambling/betting/la-liga/","matchPath":"/zh/gambling/betting/la-liga/"},{"path":"/zh/gambling/betting/live-betting/","matchPath":"/zh/gambling/betting/live-betting/"},{"path":"/zh/gambling/betting/march-madness/","matchPath":"/zh/gambling/betting/march-madness/"},{"path":"/zh/gambling/betting/mma/","matchPath":"/zh/gambling/betting/mma/"},{"path":"/zh/gambling/betting/motorsports/","matchPath":"/zh/gambling/betting/motorsports/"},{"path":"/zh/gambling/betting/nascar-cup-series/","matchPath":"/zh/gambling/betting/nascar-cup-series/"},{"path":"/zh/gambling/betting/nba-draft-2025/","matchPath":"/zh/gambling/betting/nba-draft-2025/"},{"path":"/zh/gambling/betting/nfl-draft-2025/","matchPath":"/zh/gambling/betting/nfl-draft-2025/"},{"path":"/zh/gambling/betting/nhl-entry-draft-2025/","matchPath":"/zh/gambling/betting/nhl-entry-draft-2025/"},{"path":"/zh/gambling/betting/olympics/","matchPath":"/zh/gambling/betting/olympics/"},{"path":"/zh/gambling/betting/pga/","matchPath":"/zh/gambling/betting/pga/"},{"path":"/zh/gambling/betting/politics/","matchPath":"/zh/gambling/betting/politics/"},{"path":"/zh/gambling/betting/prediction-markets/","matchPath":"/zh/gambling/betting/prediction-markets/"},{"path":"/zh/gambling/betting/rugby/","matchPath":"/zh/gambling/betting/rugby/"},{"path":"/zh/gambling/betting/serie-a/","matchPath":"/zh/gambling/betting/serie-a/"},{"path":"/zh/gambling/betting/snooker/","matchPath":"/zh/gambling/betting/snooker/"},{"path":"/zh/gambling/betting/sportsbook/","matchPath":"/zh/gambling/betting/sportsbook/"},{"path":"/zh/gambling/betting/stock-car-racing/","matchPath":"/zh/gambling/betting/stock-car-racing/"},{"path":"/zh/gambling/betting/super-bowl-lix/","matchPath":"/zh/gambling/betting/super-bowl-lix/"},{"path":"/zh/gambling/betting/table-tennis/","matchPath":"/zh/gambling/betting/table-tennis/"},{"path":"/zh/gambling/betting/ufc-fight-night/","matchPath":"/zh/gambling/betting/ufc-fight-night/"},{"path":"/zh/gambling/betting/ufc/","matchPath":"/zh/gambling/betting/ufc/"},{"path":"/zh/gambling/betting/up-and-down/","matchPath":"/zh/gambling/betting/up-and-down/"},{"path":"/zh/gambling/betting/us-open-tennis/","matchPath":"/zh/gambling/betting/us-open-tennis/"},{"path":"/zh/gambling/betting/volleyball/","matchPath":"/zh/gambling/betting/volleyball/"},{"path":"/zh/gambling/betting/wimbledon/","matchPath":"/zh/gambling/betting/wimbledon/"},{"path":"/zh/gambling/betting/winter-sports/","matchPath":"/zh/gambling/betting/winter-sports/"},{"path":"/zh/gambling/casino/anonymous/","matchPath":"/zh/gambling/casino/anonymous/"},{"path":"/zh/gambling/casino/arbitrum/","matchPath":"/zh/gambling/casino/arbitrum/"},{"path":"/zh/gambling/casino/avax/","matchPath":"/zh/gambling/casino/avax/"},{"path":"/zh/gambling/casino/baccarat/","matchPath":"/zh/gambling/casino/baccarat/"},{"path":"/zh/gambling/casino/base/","matchPath":"/zh/gambling/casino/base/"},{"path":"/zh/gambling/casino/binance-coin/","matchPath":"/zh/gambling/casino/binance-coin/"},{"path":"/zh/gambling/casino/bitcoin-cash/","matchPath":"/zh/gambling/casino/bitcoin-cash/"},{"path":"/zh/gambling/casino/bitcoin/","matchPath":"/zh/gambling/casino/bitcoin/"},{"path":"/zh/gambling/casino/blackjack/","matchPath":"/zh/gambling/casino/blackjack/"},{"path":"/zh/gambling/casino/bonus-buys/","matchPath":"/zh/gambling/casino/bonus-buys/"},{"path":"/zh/gambling/casino/bonus/","matchPath":"/zh/gambling/casino/bonus/"},{"path":"/zh/gambling/casino/book-of/","matchPath":"/zh/gambling/casino/book-of/"},{"path":"/zh/gambling/casino/buy-extra-ball/","matchPath":"/zh/gambling/casino/buy-extra-ball/"},{"path":"/zh/gambling/casino/cardano/","matchPath":"/zh/gambling/casino/cardano/"},{"path":"/zh/gambling/casino/cluster-pays/","matchPath":"/zh/gambling/casino/cluster-pays/"},{"path":"/zh/gambling/casino/cosmic-jackpot-games/","matchPath":"/zh/gambling/casino/cosmic-jackpot-games/"},{"path":"/zh/gambling/casino/craps/","matchPath":"/zh/gambling/casino/craps/"},{"path":"/zh/gambling/casino/crash/","matchPath":"/zh/gambling/casino/crash/"},{"path":"/zh/gambling/casino/dai/","matchPath":"/zh/gambling/casino/dai/"},{"path":"/zh/gambling/casino/decentralized/","matchPath":"/zh/gambling/casino/decentralized/"},{"path":"/zh/gambling/casino/defi/","matchPath":"/zh/gambling/casino/defi/"},{"path":"/zh/gambling/casino/dice/","matchPath":"/zh/gambling/casino/dice/"},{"path":"/zh/gambling/casino/discord/","matchPath":"/zh/gambling/casino/discord/"},{"path":"/zh/gambling/casino/dogecoin/","matchPath":"/zh/gambling/casino/dogecoin/"},{"path":"/zh/gambling/casino/drops-and-wins/","matchPath":"/zh/gambling/casino/drops-and-wins/"},{"path":"/zh/gambling/casino/egyptian-slots/","matchPath":"/zh/gambling/casino/egyptian-slots/"},{"path":"/zh/gambling/casino/eth-bonus/","matchPath":"/zh/gambling/casino/eth-bonus/"},{"path":"/zh/gambling/casino/eth-live-dealer/","matchPath":"/zh/gambling/casino/eth-live-dealer/"},{"path":"/zh/gambling/casino/eth-no-deposit-bonus/","matchPath":"/zh/gambling/casino/eth-no-deposit-bonus/"},{"path":"/zh/gambling/casino/eth-roulette/","matchPath":"/zh/gambling/casino/eth-roulette/"},{"path":"/zh/gambling/casino/eth-slots/","matchPath":"/zh/gambling/casino/eth-slots/"},{"path":"/zh/gambling/casino/ethereum/","matchPath":"/zh/gambling/casino/ethereum/"},{"path":"/zh/gambling/casino/free-spins/","matchPath":"/zh/gambling/casino/free-spins/"},{"path":"/zh/gambling/casino/galactic-slot-machines/","matchPath":"/zh/gambling/casino/galactic-slot-machines/"},{"path":"/zh/gambling/casino/game-shows/","matchPath":"/zh/gambling/casino/game-shows/"},{"path":"/zh/gambling/casino/high-rollers/","matchPath":"/zh/gambling/casino/high-rollers/"},{"path":"/zh/gambling/casino/high-volatility/","matchPath":"/zh/gambling/casino/high-volatility/"},{"path":"/zh/gambling/casino/hold-and-win/","matchPath":"/zh/gambling/casino/hold-and-win/"},{"path":"/zh/gambling/casino/horror-casino-games/","matchPath":"/zh/gambling/casino/horror-casino-games/"},{"path":"/zh/gambling/casino/instant-withdrawal/","matchPath":"/zh/gambling/casino/instant-withdrawal/"},{"path":"/zh/gambling/casino/jackpot/","matchPath":"/zh/gambling/casino/jackpot/"},{"path":"/zh/gambling/casino/keno/","matchPath":"/zh/gambling/casino/keno/"},{"path":"/zh/gambling/casino/litecoin/","matchPath":"/zh/gambling/casino/litecoin/"},{"path":"/zh/gambling/casino/live-dealer/","matchPath":"/zh/gambling/casino/live-dealer/"},{"path":"/zh/gambling/casino/megaways/","matchPath":"/zh/gambling/casino/megaways/"},{"path":"/zh/gambling/casino/meme-coins/","matchPath":"/zh/gambling/casino/meme-coins/"},{"path":"/zh/gambling/casino/metamask/","matchPath":"/zh/gambling/casino/metamask/"},{"path":"/zh/gambling/casino/metaverse/","matchPath":"/zh/gambling/casino/metaverse/"},{"path":"/zh/gambling/casino/mines/","matchPath":"/zh/gambling/casino/mines/"},{"path":"/zh/gambling/casino/minimum-deposit/","matchPath":"/zh/gambling/casino/minimum-deposit/"},{"path":"/zh/gambling/casino/mobile/","matchPath":"/zh/gambling/casino/mobile/"},{"path":"/zh/gambling/casino/multiplayer-games/","matchPath":"/zh/gambling/casino/multiplayer-games/"},{"path":"/zh/gambling/casino/newest/","matchPath":"/zh/gambling/casino/newest/"},{"path":"/zh/gambling/casino/nft/","matchPath":"/zh/gambling/casino/nft/"},{"path":"/zh/gambling/casino/no-deposit-bonus/","matchPath":"/zh/gambling/casino/no-deposit-bonus/"},{"path":"/zh/gambling/casino/norse-mythology-slots/","matchPath":"/zh/gambling/casino/norse-mythology-slots/"},{"path":"/zh/gambling/casino/official-trump/","matchPath":"/zh/gambling/casino/official-trump/"},{"path":"/zh/gambling/casino/optimism/","matchPath":"/zh/gambling/casino/optimism/"},{"path":"/zh/gambling/casino/pirate-slots/","matchPath":"/zh/gambling/casino/pirate-slots/"},{"path":"/zh/gambling/casino/plinko/","matchPath":"/zh/gambling/casino/plinko/"},{"path":"/zh/gambling/casino/poker/","matchPath":"/zh/gambling/casino/poker/"},{"path":"/zh/gambling/casino/polygon/","matchPath":"/zh/gambling/casino/polygon/"},{"path":"/zh/gambling/casino/privacy/","matchPath":"/zh/gambling/casino/privacy/"},{"path":"/zh/gambling/casino/progressive-jackpot/","matchPath":"/zh/gambling/casino/progressive-jackpot/"},{"path":"/zh/gambling/casino/provably-fair/","matchPath":"/zh/gambling/casino/provably-fair/"},{"path":"/zh/gambling/casino/respins/","matchPath":"/zh/gambling/casino/respins/"},{"path":"/zh/gambling/casino/roulette/","matchPath":"/zh/gambling/casino/roulette/"},{"path":"/zh/gambling/casino/scatter-pays/","matchPath":"/zh/gambling/casino/scatter-pays/"},{"path":"/zh/gambling/casino/scratch-cards/","matchPath":"/zh/gambling/casino/scratch-cards/"},{"path":"/zh/gambling/casino/shiba-inu/","matchPath":"/zh/gambling/casino/shiba-inu/"},{"path":"/zh/gambling/casino/sic-bo/","matchPath":"/zh/gambling/casino/sic-bo/"},{"path":"/zh/gambling/casino/slots/","matchPath":"/zh/gambling/casino/slots/"},{"path":"/zh/gambling/casino/social-casino/","matchPath":"/zh/gambling/casino/social-casino/"},{"path":"/zh/gambling/casino/solana/","matchPath":"/zh/gambling/casino/solana/"},{"path":"/zh/gambling/casino/stablecoins/","matchPath":"/zh/gambling/casino/stablecoins/"},{"path":"/zh/gambling/casino/sweepstakes/","matchPath":"/zh/gambling/casino/sweepstakes/"},{"path":"/zh/gambling/casino/ton/","matchPath":"/zh/gambling/casino/ton/"},{"path":"/zh/gambling/casino/toshi/","matchPath":"/zh/gambling/casino/toshi/"},{"path":"/zh/gambling/casino/treasure-hunt-slots/","matchPath":"/zh/gambling/casino/treasure-hunt-slots/"},{"path":"/zh/gambling/casino/trump/","matchPath":"/zh/gambling/casino/trump/"},{"path":"/zh/gambling/casino/trx/","matchPath":"/zh/gambling/casino/trx/"},{"path":"/zh/gambling/casino/usdc/","matchPath":"/zh/gambling/casino/usdc/"},{"path":"/zh/gambling/casino/usdt/","matchPath":"/zh/gambling/casino/usdt/"},{"path":"/zh/gambling/casino/verse/","matchPath":"/zh/gambling/casino/verse/"},{"path":"/zh/gambling/casino/video-poker/","matchPath":"/zh/gambling/casino/video-poker/"},{"path":"/zh/gambling/casino/viking-casino-games/","matchPath":"/zh/gambling/casino/viking-casino-games/"},{"path":"/zh/gambling/casino/vip/","matchPath":"/zh/gambling/casino/vip/"},{"path":"/zh/gambling/casino/wheel/","matchPath":"/zh/gambling/casino/wheel/"},{"path":"/zh/gambling/casino/xrp/","matchPath":"/zh/gambling/casino/xrp/"},{"path":"/zh/gambling/reviews/0xbet/","matchPath":"/zh/gambling/reviews/0xbet/"},{"path":"/zh/gambling/reviews/1win/","matchPath":"/zh/gambling/reviews/1win/"},{"path":"/zh/gambling/reviews/1xbit/","matchPath":"/zh/gambling/reviews/1xbit/"},{"path":"/zh/gambling/reviews/500-casino/","matchPath":"/zh/gambling/reviews/500-casino/"},{"path":"/zh/gambling/reviews/7bitcasino/","matchPath":"/zh/gambling/reviews/7bitcasino/"},{"path":"/zh/gambling/reviews/888starzbet/","matchPath":"/zh/gambling/reviews/888starzbet/"},{"path":"/zh/gambling/reviews/abuking/","matchPath":"/zh/gambling/reviews/abuking/"},{"path":"/zh/gambling/reviews/aerogram-bot/","matchPath":"/zh/gambling/reviews/aerogram-bot/"},{"path":"/zh/gambling/reviews/alibabet/","matchPath":"/zh/gambling/reviews/alibabet/"},{"path":"/zh/gambling/reviews/anonymbet/","matchPath":"/zh/gambling/reviews/anonymbet/"},{"path":"/zh/gambling/reviews/ballersbet/","matchPath":"/zh/gambling/reviews/ballersbet/"},{"path":"/zh/gambling/reviews/bc-game/","matchPath":"/zh/gambling/reviews/bc-game/"},{"path":"/zh/gambling/reviews/bet20/","matchPath":"/zh/gambling/reviews/bet20/"},{"path":"/zh/gambling/reviews/betandreas/","matchPath":"/zh/gambling/reviews/betandreas/"},{"path":"/zh/gambling/reviews/betfinal/","matchPath":"/zh/gambling/reviews/betfinal/"},{"path":"/zh/gambling/reviews/bethog/","matchPath":"/zh/gambling/reviews/bethog/"},{"path":"/zh/gambling/reviews/betpanda/","matchPath":"/zh/gambling/reviews/betpanda/"},{"path":"/zh/gambling/reviews/betplay/","matchPath":"/zh/gambling/reviews/betplay/"},{"path":"/zh/gambling/reviews/betrunner/","matchPath":"/zh/gambling/reviews/betrunner/"},{"path":"/zh/gambling/reviews/betsio/","matchPath":"/zh/gambling/reviews/betsio/"},{"path":"/zh/gambling/reviews/bety/","matchPath":"/zh/gambling/reviews/bety/"},{"path":"/zh/gambling/reviews/bitcasino-io/","matchPath":"/zh/gambling/reviews/bitcasino-io/"},{"path":"/zh/gambling/reviews/bitcoinsportsbookag/","matchPath":"/zh/gambling/reviews/bitcoinsportsbookag/"},{"path":"/zh/gambling/reviews/bitsler/","matchPath":"/zh/gambling/reviews/bitsler/"},{"path":"/zh/gambling/reviews/bitstake/","matchPath":"/zh/gambling/reviews/bitstake/"},{"path":"/zh/gambling/reviews/bitstarz/","matchPath":"/zh/gambling/reviews/bitstarz/"},{"path":"/zh/gambling/reviews/bitstrike/","matchPath":"/zh/gambling/reviews/bitstrike/"},{"path":"/zh/gambling/reviews/bitz/","matchPath":"/zh/gambling/reviews/bitz/"},{"path":"/zh/gambling/reviews/boomerang-bet/","matchPath":"/zh/gambling/reviews/boomerang-bet/"},{"path":"/zh/gambling/reviews/bspin/","matchPath":"/zh/gambling/reviews/bspin/"},{"path":"/zh/gambling/reviews/bullsbet/","matchPath":"/zh/gambling/reviews/bullsbet/"},{"path":"/zh/gambling/reviews/casino-bitcoin-com/","matchPath":"/zh/gambling/reviews/casino-bitcoin-com/"},{"path":"/zh/gambling/reviews/casinobet/","matchPath":"/zh/gambling/reviews/casinobet/"},{"path":"/zh/gambling/reviews/casinopunkz/","matchPath":"/zh/gambling/reviews/casinopunkz/"},{"path":"/zh/gambling/reviews/celsius-casino/","matchPath":"/zh/gambling/reviews/celsius-casino/"},{"path":"/zh/gambling/reviews/chancer/","matchPath":"/zh/gambling/reviews/chancer/"},{"path":"/zh/gambling/reviews/claps-bet/","matchPath":"/zh/gambling/reviews/claps-bet/"},{"path":"/zh/gambling/reviews/cloudbet/","matchPath":"/zh/gambling/reviews/cloudbet/"},{"path":"/zh/gambling/reviews/crashino/","matchPath":"/zh/gambling/reviews/crashino/"},{"path":"/zh/gambling/reviews/crypto-games/","matchPath":"/zh/gambling/reviews/crypto-games/"},{"path":"/zh/gambling/reviews/cryptoleo/","matchPath":"/zh/gambling/reviews/cryptoleo/"},{"path":"/zh/gambling/reviews/cryptorino/","matchPath":"/zh/gambling/reviews/cryptorino/"},{"path":"/zh/gambling/reviews/dbosses/","matchPath":"/zh/gambling/reviews/dbosses/"},{"path":"/zh/gambling/reviews/dexsport/","matchPath":"/zh/gambling/reviews/dexsport/"},{"path":"/zh/gambling/reviews/donbet/","matchPath":"/zh/gambling/reviews/donbet/"},{"path":"/zh/gambling/reviews/drake-casino/","matchPath":"/zh/gambling/reviews/drake-casino/"},{"path":"/zh/gambling/reviews/duckdice/","matchPath":"/zh/gambling/reviews/duckdice/"},{"path":"/zh/gambling/reviews/duelbits/","matchPath":"/zh/gambling/reviews/duelbits/"},{"path":"/zh/gambling/reviews/empire-io/","matchPath":"/zh/gambling/reviews/empire-io/"},{"path":"/zh/gambling/reviews/fairspin/","matchPath":"/zh/gambling/reviews/fairspin/"},{"path":"/zh/gambling/reviews/felixspin/","matchPath":"/zh/gambling/reviews/felixspin/"},{"path":"/zh/gambling/reviews/flush/","matchPath":"/zh/gambling/reviews/flush/"},{"path":"/zh/gambling/reviews/fortunejack/","matchPath":"/zh/gambling/reviews/fortunejack/"},{"path":"/zh/gambling/reviews/gamdom/","matchPath":"/zh/gambling/reviews/gamdom/"},{"path":"/zh/gambling/reviews/gamegram/","matchPath":"/zh/gambling/reviews/gamegram/"},{"path":"/zh/gambling/reviews/goldenpanda/","matchPath":"/zh/gambling/reviews/goldenpanda/"},{"path":"/zh/gambling/reviews/howlgg/","matchPath":"/zh/gambling/reviews/howlgg/"},{"path":"/zh/gambling/reviews/hugewin/","matchPath":"/zh/gambling/reviews/hugewin/"},{"path":"/zh/gambling/reviews/instant-casino/","matchPath":"/zh/gambling/reviews/instant-casino/"},{"path":"/zh/gambling/reviews/jackbit/","matchPath":"/zh/gambling/reviews/jackbit/"},{"path":"/zh/gambling/reviews/jetton/","matchPath":"/zh/gambling/reviews/jetton/"},{"path":"/zh/gambling/reviews/kingsofsport/","matchPath":"/zh/gambling/reviews/kingsofsport/"},{"path":"/zh/gambling/reviews/lucky-block/","matchPath":"/zh/gambling/reviews/lucky-block/"},{"path":"/zh/gambling/reviews/luckywhale/","matchPath":"/zh/gambling/reviews/luckywhale/"},{"path":"/zh/gambling/reviews/mbit/","matchPath":"/zh/gambling/reviews/mbit/"},{"path":"/zh/gambling/reviews/mega-dice/","matchPath":"/zh/gambling/reviews/mega-dice/"},{"path":"/zh/gambling/reviews/megapari/","matchPath":"/zh/gambling/reviews/megapari/"},{"path":"/zh/gambling/reviews/monkeytilt/","matchPath":"/zh/gambling/reviews/monkeytilt/"},{"path":"/zh/gambling/reviews/mystake/","matchPath":"/zh/gambling/reviews/mystake/"},{"path":"/zh/gambling/reviews/playbet-io/","matchPath":"/zh/gambling/reviews/playbet-io/"},{"path":"/zh/gambling/reviews/poolbit/","matchPath":"/zh/gambling/reviews/poolbit/"},{"path":"/zh/gambling/reviews/rainbet/","matchPath":"/zh/gambling/reviews/rainbet/"},{"path":"/zh/gambling/reviews/rakebit/","matchPath":"/zh/gambling/reviews/rakebit/"},{"path":"/zh/gambling/reviews/roobet/","matchPath":"/zh/gambling/reviews/roobet/"},{"path":"/zh/gambling/reviews/shock/","matchPath":"/zh/gambling/reviews/shock/"},{"path":"/zh/gambling/reviews/shuffle/","matchPath":"/zh/gambling/reviews/shuffle/"},{"path":"/zh/gambling/reviews/spinly/","matchPath":"/zh/gambling/reviews/spinly/"},{"path":"/zh/gambling/reviews/sportbet-one/","matchPath":"/zh/gambling/reviews/sportbet-one/"},{"path":"/zh/gambling/reviews/sportsbet-io/","matchPath":"/zh/gambling/reviews/sportsbet-io/"},{"path":"/zh/gambling/reviews/stake/","matchPath":"/zh/gambling/reviews/stake/"},{"path":"/zh/gambling/reviews/telbet/","matchPath":"/zh/gambling/reviews/telbet/"},{"path":"/zh/gambling/reviews/tg-casino/","matchPath":"/zh/gambling/reviews/tg-casino/"},{"path":"/zh/gambling/reviews/thunderpick/","matchPath":"/zh/gambling/reviews/thunderpick/"},{"path":"/zh/gambling/reviews/toshibet/","matchPath":"/zh/gambling/reviews/toshibet/"},{"path":"/zh/gambling/reviews/vave/","matchPath":"/zh/gambling/reviews/vave/"},{"path":"/zh/gambling/reviews/vipcasino/","matchPath":"/zh/gambling/reviews/vipcasino/"},{"path":"/zh/gambling/reviews/weiss/","matchPath":"/zh/gambling/reviews/weiss/"},{"path":"/zh/gambling/reviews/whale/","matchPath":"/zh/gambling/reviews/whale/"},{"path":"/zh/gambling/reviews/wikibet/","matchPath":"/zh/gambling/reviews/wikibet/"},{"path":"/zh/gambling/reviews/wildio/","matchPath":"/zh/gambling/reviews/wildio/"},{"path":"/zh/gambling/reviews/wildtornado/","matchPath":"/zh/gambling/reviews/wildtornado/"},{"path":"/zh/gambling/reviews/willbet/","matchPath":"/zh/gambling/reviews/willbet/"},{"path":"/zh/gambling/reviews/win-casino/","matchPath":"/zh/gambling/reviews/win-casino/"},{"path":"/zh/gambling/reviews/winna/","matchPath":"/zh/gambling/reviews/winna/"},{"path":"/zh/gambling/reviews/winwin-bet/","matchPath":"/zh/gambling/reviews/winwin-bet/"},{"path":"/zh/gambling/reviews/winz-io/","matchPath":"/zh/gambling/reviews/winz-io/"},{"path":"/zh/gambling/reviews/ybets/","matchPath":"/zh/gambling/reviews/ybets/"},{"path":"/zh/gambling/reviews/yyy-casino/","matchPath":"/zh/gambling/reviews/yyy-casino/"},{"path":"/zh/mining/cloud-mining/ethereum/","matchPath":"/zh/mining/cloud-mining/ethereum/"},{"path":"/zh/mining/cloud-mining/solana/","matchPath":"/zh/mining/cloud-mining/solana/"},{"path":"/zh/wallet/reviews/bitcoincom-wallet/","matchPath":"/zh/wallet/reviews/bitcoincom-wallet/"},{"path":"/zh/wallet/reviews/metamask/","matchPath":"/zh/wallet/reviews/metamask/"},{"path":"/zh/wallet/reviews/phantom/","matchPath":"/zh/wallet/reviews/phantom/"},{"path":"/zh/wallet/reviews/rockwallet/","matchPath":"/zh/wallet/reviews/rockwallet/"},{"path":"/zh/wallet/reviews/trezor/","matchPath":"/zh/wallet/reviews/trezor/"},{"path":"/zh/wallet/reviews/uphold/","matchPath":"/zh/wallet/reviews/uphold/"},{"path":"/de/advertise/podcast/","matchPath":"/de/advertise/podcast/"},{"path":"/de/bitcoin-cash-register/service-terms/","matchPath":"/de/bitcoin-cash-register/service-terms/"},{"path":"/de/cards/anonymous-cards/","matchPath":"/de/cards/anonymous-cards/"},{"path":"/de/cards/cashback-cards/","matchPath":"/de/cards/cashback-cards/"},{"path":"/de/cards/credit-cards/","matchPath":"/de/cards/credit-cards/"},{"path":"/de/cards/crypto-cards/","matchPath":"/de/cards/crypto-cards/"},{"path":"/de/cards/debit-cards/","matchPath":"/de/cards/debit-cards/"},{"path":"/de/cards/gemini-card/","matchPath":"/de/cards/gemini-card/"},{"path":"/de/cards/gift-cards/","matchPath":"/de/cards/gift-cards/"},{"path":"/de/cards/mastercard-cards/","matchPath":"/de/cards/mastercard-cards/"},{"path":"/de/cards/prepaid-cards/","matchPath":"/de/cards/prepaid-cards/"},{"path":"/de/cards/reviews/","matchPath":"/de/cards/reviews/"},{"path":"/de/cards/rewards-cards/","matchPath":"/de/cards/rewards-cards/"},{"path":"/de/cards/solana/","matchPath":"/de/cards/solana/"},{"path":"/de/cards/virtual-cards/","matchPath":"/de/cards/virtual-cards/"},{"path":"/de/cards/visa-cards/","matchPath":"/de/cards/visa-cards/"},{"path":"/de/cards/web3-cards/","matchPath":"/de/cards/web3-cards/"},{"path":"/de/conferences/africa/","matchPath":"/de/conferences/africa/"},{"path":"/de/conferences/ai/","matchPath":"/de/conferences/ai/"},{"path":"/de/conferences/asia/","matchPath":"/de/conferences/asia/"},{"path":"/de/conferences/australia/","matchPath":"/de/conferences/australia/"},{"path":"/de/conferences/avalanche/","matchPath":"/de/conferences/avalanche/"},{"path":"/de/conferences/bitcoin/","matchPath":"/de/conferences/bitcoin/"},{"path":"/de/conferences/blockchain/","matchPath":"/de/conferences/blockchain/"},{"path":"/de/conferences/bnb/","matchPath":"/de/conferences/bnb/"},{"path":"/de/conferences/canada/","matchPath":"/de/conferences/canada/"},{"path":"/de/conferences/cardano/","matchPath":"/de/conferences/cardano/"},{"path":"/de/conferences/crypto/","matchPath":"/de/conferences/crypto/"},{"path":"/de/conferences/defi/","matchPath":"/de/conferences/defi/"},{"path":"/de/conferences/dubai/","matchPath":"/de/conferences/dubai/"},{"path":"/de/conferences/ethereum/","matchPath":"/de/conferences/ethereum/"},{"path":"/de/conferences/europe/","matchPath":"/de/conferences/europe/"},{"path":"/de/conferences/games/","matchPath":"/de/conferences/games/"},{"path":"/de/conferences/japan/","matchPath":"/de/conferences/japan/"},{"path":"/de/conferences/latam/","matchPath":"/de/conferences/latam/"},{"path":"/de/conferences/litecoin/","matchPath":"/de/conferences/litecoin/"},{"path":"/de/conferences/memes/","matchPath":"/de/conferences/memes/"},{"path":"/de/conferences/metaverse/","matchPath":"/de/conferences/metaverse/"},{"path":"/de/conferences/middle-east/","matchPath":"/de/conferences/middle-east/"},{"path":"/de/conferences/nft/","matchPath":"/de/conferences/nft/"},{"path":"/de/conferences/polkadot/","matchPath":"/de/conferences/polkadot/"},{"path":"/de/conferences/singapore/","matchPath":"/de/conferences/singapore/"},{"path":"/de/conferences/solana/","matchPath":"/de/conferences/solana/"},{"path":"/de/conferences/startups/","matchPath":"/de/conferences/startups/"},{"path":"/de/conferences/tech/","matchPath":"/de/conferences/tech/"},{"path":"/de/conferences/tezos/","matchPath":"/de/conferences/tezos/"},{"path":"/de/conferences/usa/","matchPath":"/de/conferences/usa/"},{"path":"/de/conferences/web3/","matchPath":"/de/conferences/web3/"},{"path":"/de/conferences/xrp/","matchPath":"/de/conferences/xrp/"},{"path":"/de/crypto-education/beginner-guides/","matchPath":"/de/crypto-education/beginner-guides/"},{"path":"/de/crypto-education/blockchain-basics/","matchPath":"/de/crypto-education/blockchain-basics/"},{"path":"/de/crypto-education/buying-guides/","matchPath":"/de/crypto-education/buying-guides/"},{"path":"/de/crypto-education/tax-information/","matchPath":"/de/crypto-education/tax-information/"},{"path":"/de/crypto-venture-network/accelerators/","matchPath":"/de/crypto-venture-network/accelerators/"},{"path":"/de/crypto-venture-network/incubators/","matchPath":"/de/crypto-venture-network/incubators/"},{"path":"/de/crypto-venture-network/portfolio-companies/","matchPath":"/de/crypto-venture-network/portfolio-companies/"},{"path":"/de/crypto-venture-network/syndicates/","matchPath":"/de/crypto-venture-network/syndicates/"},{"path":"/de/crypto-venture-network/venture-capital-funds/","matchPath":"/de/crypto-venture-network/venture-capital-funds/"},{"path":"/de/decentralized-exchanges/best-practices/","matchPath":"/de/decentralized-exchanges/best-practices/"},{"path":"/de/decentralized-exchanges/defi-articles/","matchPath":"/de/decentralized-exchanges/defi-articles/"},{"path":"/de/decentralized-exchanges/dex-overview/","matchPath":"/de/decentralized-exchanges/dex-overview/"},{"path":"/de/decentralized-exchanges/swap-tutorials/","matchPath":"/de/decentralized-exchanges/swap-tutorials/"},{"path":"/de/depin/how-to-buy-depin/","matchPath":"/de/depin/how-to-buy-depin/"},{"path":"/de/directory/cards/","matchPath":"/de/directory/cards/"},{"path":"/de/directory/conferences/","matchPath":"/de/directory/conferences/"},{"path":"/de/directory/exchanges/","matchPath":"/de/directory/exchanges/"},{"path":"/de/directory/gambling/","matchPath":"/de/directory/gambling/"},{"path":"/de/directory/mining/","matchPath":"/de/directory/mining/"},{"path":"/de/directory/wallets/","matchPath":"/de/directory/wallets/"},{"path":"/de/exchanges/aave/","matchPath":"/de/exchanges/aave/"},{"path":"/de/exchanges/algeria/","matchPath":"/de/exchanges/algeria/"},{"path":"/de/exchanges/algorithmic-trading-platforms/","matchPath":"/de/exchanges/algorithmic-trading-platforms/"},{"path":"/de/exchanges/altcoins/","matchPath":"/de/exchanges/altcoins/"},{"path":"/de/exchanges/anonymous-exchanges/","matchPath":"/de/exchanges/anonymous-exchanges/"},{"path":"/de/exchanges/aptos/","matchPath":"/de/exchanges/aptos/"},{"path":"/de/exchanges/arbitrage-bots/","matchPath":"/de/exchanges/arbitrage-bots/"},{"path":"/de/exchanges/arbitrum/","matchPath":"/de/exchanges/arbitrum/"},{"path":"/de/exchanges/argentina/","matchPath":"/de/exchanges/argentina/"},{"path":"/de/exchanges/artificial-superintelligence-alliance/","matchPath":"/de/exchanges/artificial-superintelligence-alliance/"},{"path":"/de/exchanges/asia/","matchPath":"/de/exchanges/asia/"},{"path":"/de/exchanges/australia/","matchPath":"/de/exchanges/australia/"},{"path":"/de/exchanges/auto-dca/","matchPath":"/de/exchanges/auto-dca/"},{"path":"/de/exchanges/automated-trading/","matchPath":"/de/exchanges/automated-trading/"},{"path":"/de/exchanges/avalanche/","matchPath":"/de/exchanges/avalanche/"},{"path":"/de/exchanges/bahrain/","matchPath":"/de/exchanges/bahrain/"},{"path":"/de/exchanges/bangladesh/","matchPath":"/de/exchanges/bangladesh/"},{"path":"/de/exchanges/base/","matchPath":"/de/exchanges/base/"},{"path":"/de/exchanges/binance-coin/","matchPath":"/de/exchanges/binance-coin/"},{"path":"/de/exchanges/binary-options/","matchPath":"/de/exchanges/binary-options/"},{"path":"/de/exchanges/bitcoin-cash/","matchPath":"/de/exchanges/bitcoin-cash/"},{"path":"/de/exchanges/bittensor/","matchPath":"/de/exchanges/bittensor/"},{"path":"/de/exchanges/brazil/","matchPath":"/de/exchanges/brazil/"},{"path":"/de/exchanges/canada/","matchPath":"/de/exchanges/canada/"},{"path":"/de/exchanges/cardano/","matchPath":"/de/exchanges/cardano/"},{"path":"/de/exchanges/central-america/","matchPath":"/de/exchanges/central-america/"},{"path":"/de/exchanges/centralized/","matchPath":"/de/exchanges/centralized/"},{"path":"/de/exchanges/chainlink/","matchPath":"/de/exchanges/chainlink/"},{"path":"/de/exchanges/chile/","matchPath":"/de/exchanges/chile/"},{"path":"/de/exchanges/china/","matchPath":"/de/exchanges/china/"},{"path":"/de/exchanges/colombia/","matchPath":"/de/exchanges/colombia/"},{"path":"/de/exchanges/congo/","matchPath":"/de/exchanges/congo/"},{"path":"/de/exchanges/contract-trading/","matchPath":"/de/exchanges/contract-trading/"},{"path":"/de/exchanges/copy-trading/","matchPath":"/de/exchanges/copy-trading/"},{"path":"/de/exchanges/cosmos/","matchPath":"/de/exchanges/cosmos/"},{"path":"/de/exchanges/cronos/","matchPath":"/de/exchanges/cronos/"},{"path":"/de/exchanges/crypto-index-trading/","matchPath":"/de/exchanges/crypto-index-trading/"},{"path":"/de/exchanges/crypto-to-fiat-exchanges/","matchPath":"/de/exchanges/crypto-to-fiat-exchanges/"},{"path":"/de/exchanges/cryptocurrency-brokers/","matchPath":"/de/exchanges/cryptocurrency-brokers/"},{"path":"/de/exchanges/czech-republic/","matchPath":"/de/exchanges/czech-republic/"},{"path":"/de/exchanges/dai/","matchPath":"/de/exchanges/dai/"},{"path":"/de/exchanges/day-trading/","matchPath":"/de/exchanges/day-trading/"},{"path":"/de/exchanges/decentralized/","matchPath":"/de/exchanges/decentralized/"},{"path":"/de/exchanges/demo-trading-accounts/","matchPath":"/de/exchanges/demo-trading-accounts/"},{"path":"/de/exchanges/derivatives/","matchPath":"/de/exchanges/derivatives/"},{"path":"/de/exchanges/dogecoin/","matchPath":"/de/exchanges/dogecoin/"},{"path":"/de/exchanges/dual-investment-trading/","matchPath":"/de/exchanges/dual-investment-trading/"},{"path":"/de/exchanges/egypt/","matchPath":"/de/exchanges/egypt/"},{"path":"/de/exchanges/ethereum-classic/","matchPath":"/de/exchanges/ethereum-classic/"},{"path":"/de/exchanges/europe/","matchPath":"/de/exchanges/europe/"},{"path":"/de/exchanges/filecoin/","matchPath":"/de/exchanges/filecoin/"},{"path":"/de/exchanges/for-beginners/","matchPath":"/de/exchanges/for-beginners/"},{"path":"/de/exchanges/france/","matchPath":"/de/exchanges/france/"},{"path":"/de/exchanges/futures-trading/","matchPath":"/de/exchanges/futures-trading/"},{"path":"/de/exchanges/germany/","matchPath":"/de/exchanges/germany/"},{"path":"/de/exchanges/ghana/","matchPath":"/de/exchanges/ghana/"},{"path":"/de/exchanges/greece/","matchPath":"/de/exchanges/greece/"},{"path":"/de/exchanges/grid-trading/","matchPath":"/de/exchanges/grid-trading/"},{"path":"/de/exchanges/hedera/","matchPath":"/de/exchanges/hedera/"},{"path":"/de/exchanges/hong-kong/","matchPath":"/de/exchanges/hong-kong/"},{"path":"/de/exchanges/hungary/","matchPath":"/de/exchanges/hungary/"},{"path":"/de/exchanges/hybrid/","matchPath":"/de/exchanges/hybrid/"},{"path":"/de/exchanges/immutable/","matchPath":"/de/exchanges/immutable/"},{"path":"/de/exchanges/india/","matchPath":"/de/exchanges/india/"},{"path":"/de/exchanges/indonesia/","matchPath":"/de/exchanges/indonesia/"},{"path":"/de/exchanges/injective/","matchPath":"/de/exchanges/injective/"},{"path":"/de/exchanges/ireland/","matchPath":"/de/exchanges/ireland/"},{"path":"/de/exchanges/israel/","matchPath":"/de/exchanges/israel/"},{"path":"/de/exchanges/italy/","matchPath":"/de/exchanges/italy/"},{"path":"/de/exchanges/japan/","matchPath":"/de/exchanges/japan/"},{"path":"/de/exchanges/kaspa/","matchPath":"/de/exchanges/kaspa/"},{"path":"/de/exchanges/kazakhstan/","matchPath":"/de/exchanges/kazakhstan/"},{"path":"/de/exchanges/kenya/","matchPath":"/de/exchanges/kenya/"},{"path":"/de/exchanges/korea/","matchPath":"/de/exchanges/korea/"},{"path":"/de/exchanges/latin-america/","matchPath":"/de/exchanges/latin-america/"},{"path":"/de/exchanges/lending-platforms/","matchPath":"/de/exchanges/lending-platforms/"},{"path":"/de/exchanges/leverage-trading/","matchPath":"/de/exchanges/leverage-trading/"},{"path":"/de/exchanges/liquidity-pools/","matchPath":"/de/exchanges/liquidity-pools/"},{"path":"/de/exchanges/litecoin/","matchPath":"/de/exchanges/litecoin/"},{"path":"/de/exchanges/live-trading/","matchPath":"/de/exchanges/live-trading/"},{"path":"/de/exchanges/lowest-fees/","matchPath":"/de/exchanges/lowest-fees/"},{"path":"/de/exchanges/maker/","matchPath":"/de/exchanges/maker/"},{"path":"/de/exchanges/malaysia/","matchPath":"/de/exchanges/malaysia/"},{"path":"/de/exchanges/mantle/","matchPath":"/de/exchanges/mantle/"},{"path":"/de/exchanges/margin-trading/","matchPath":"/de/exchanges/margin-trading/"},{"path":"/de/exchanges/market-making-exchanges/","matchPath":"/de/exchanges/market-making-exchanges/"},{"path":"/de/exchanges/memes/","matchPath":"/de/exchanges/memes/"},{"path":"/de/exchanges/mexico/","matchPath":"/de/exchanges/mexico/"},{"path":"/de/exchanges/middle-east/","matchPath":"/de/exchanges/middle-east/"},{"path":"/de/exchanges/monero/","matchPath":"/de/exchanges/monero/"},{"path":"/de/exchanges/morocco/","matchPath":"/de/exchanges/morocco/"},{"path":"/de/exchanges/near-protocol/","matchPath":"/de/exchanges/near-protocol/"},{"path":"/de/exchanges/neo/","matchPath":"/de/exchanges/neo/"},{"path":"/de/exchanges/netherlands/","matchPath":"/de/exchanges/netherlands/"},{"path":"/de/exchanges/new-zealand/","matchPath":"/de/exchanges/new-zealand/"},{"path":"/de/exchanges/nigeria/","matchPath":"/de/exchanges/nigeria/"},{"path":"/de/exchanges/norway/","matchPath":"/de/exchanges/norway/"},{"path":"/de/exchanges/okb/","matchPath":"/de/exchanges/okb/"},{"path":"/de/exchanges/oman/","matchPath":"/de/exchanges/oman/"},{"path":"/de/exchanges/optimism/","matchPath":"/de/exchanges/optimism/"},{"path":"/de/exchanges/options-trading/","matchPath":"/de/exchanges/options-trading/"},{"path":"/de/exchanges/p2p-crypto-exchanges/","matchPath":"/de/exchanges/p2p-crypto-exchanges/"},{"path":"/de/exchanges/pakistan/","matchPath":"/de/exchanges/pakistan/"},{"path":"/de/exchanges/paypal-deposit/","matchPath":"/de/exchanges/paypal-deposit/"},{"path":"/de/exchanges/pepe/","matchPath":"/de/exchanges/pepe/"},{"path":"/de/exchanges/perpetual-futures-trading/","matchPath":"/de/exchanges/perpetual-futures-trading/"},{"path":"/de/exchanges/peru/","matchPath":"/de/exchanges/peru/"},{"path":"/de/exchanges/philippines/","matchPath":"/de/exchanges/philippines/"},{"path":"/de/exchanges/poland/","matchPath":"/de/exchanges/poland/"},{"path":"/de/exchanges/polkadot/","matchPath":"/de/exchanges/polkadot/"},{"path":"/de/exchanges/polygon/","matchPath":"/de/exchanges/polygon/"},{"path":"/de/exchanges/portugal/","matchPath":"/de/exchanges/portugal/"},{"path":"/de/exchanges/qatar/","matchPath":"/de/exchanges/qatar/"},{"path":"/de/exchanges/recurring-buys/","matchPath":"/de/exchanges/recurring-buys/"},{"path":"/de/exchanges/render/","matchPath":"/de/exchanges/render/"},{"path":"/de/exchanges/reviews/","matchPath":"/de/exchanges/reviews/"},{"path":"/de/exchanges/ripple/","matchPath":"/de/exchanges/ripple/"},{"path":"/de/exchanges/romania/","matchPath":"/de/exchanges/romania/"},{"path":"/de/exchanges/russia/","matchPath":"/de/exchanges/russia/"},{"path":"/de/exchanges/safest/","matchPath":"/de/exchanges/safest/"},{"path":"/de/exchanges/saudi-arabia/","matchPath":"/de/exchanges/saudi-arabia/"},{"path":"/de/exchanges/savings-accounts/","matchPath":"/de/exchanges/savings-accounts/"},{"path":"/de/exchanges/serbia/","matchPath":"/de/exchanges/serbia/"},{"path":"/de/exchanges/shiba-inu/","matchPath":"/de/exchanges/shiba-inu/"},{"path":"/de/exchanges/shorting/","matchPath":"/de/exchanges/shorting/"},{"path":"/de/exchanges/singapore/","matchPath":"/de/exchanges/singapore/"},{"path":"/de/exchanges/solana/","matchPath":"/de/exchanges/solana/"},{"path":"/de/exchanges/south-africa/","matchPath":"/de/exchanges/south-africa/"},{"path":"/de/exchanges/south-america/","matchPath":"/de/exchanges/south-america/"},{"path":"/de/exchanges/stablecoins/","matchPath":"/de/exchanges/stablecoins/"},{"path":"/de/exchanges/stacks/","matchPath":"/de/exchanges/stacks/"},{"path":"/de/exchanges/staking-rewards-exchanges/","matchPath":"/de/exchanges/staking-rewards-exchanges/"},{"path":"/de/exchanges/stellar/","matchPath":"/de/exchanges/stellar/"},{"path":"/de/exchanges/sui/","matchPath":"/de/exchanges/sui/"},{"path":"/de/exchanges/swap-platforms/","matchPath":"/de/exchanges/swap-platforms/"},{"path":"/de/exchanges/switzerland/","matchPath":"/de/exchanges/switzerland/"},{"path":"/de/exchanges/taiwan/","matchPath":"/de/exchanges/taiwan/"},{"path":"/de/exchanges/tanzania/","matchPath":"/de/exchanges/tanzania/"},{"path":"/de/exchanges/tezos/","matchPath":"/de/exchanges/tezos/"},{"path":"/de/exchanges/thailand/","matchPath":"/de/exchanges/thailand/"},{"path":"/de/exchanges/tokenized-stocks-trading/","matchPath":"/de/exchanges/tokenized-stocks-trading/"},{"path":"/de/exchanges/toncoin/","matchPath":"/de/exchanges/toncoin/"},{"path":"/de/exchanges/toshi/","matchPath":"/de/exchanges/toshi/"},{"path":"/de/exchanges/tron/","matchPath":"/de/exchanges/tron/"},{"path":"/de/exchanges/trump/","matchPath":"/de/exchanges/trump/"},{"path":"/de/exchanges/turkey/","matchPath":"/de/exchanges/turkey/"},{"path":"/de/exchanges/uganda/","matchPath":"/de/exchanges/uganda/"},{"path":"/de/exchanges/ukraine/","matchPath":"/de/exchanges/ukraine/"},{"path":"/de/exchanges/uniswap/","matchPath":"/de/exchanges/uniswap/"},{"path":"/de/exchanges/united-arab-emirates/","matchPath":"/de/exchanges/united-arab-emirates/"},{"path":"/de/exchanges/united-kingdom/","matchPath":"/de/exchanges/united-kingdom/"},{"path":"/de/exchanges/usa/","matchPath":"/de/exchanges/usa/"},{"path":"/de/exchanges/usdt/","matchPath":"/de/exchanges/usdt/"},{"path":"/de/exchanges/vechain/","matchPath":"/de/exchanges/vechain/"},{"path":"/de/exchanges/vietnam/","matchPath":"/de/exchanges/vietnam/"},{"path":"/de/exchanges/zero-fee-trading/","matchPath":"/de/exchanges/zero-fee-trading/"},{"path":"/de/fx/arbitrage/","matchPath":"/de/fx/arbitrage/"},{"path":"/de/fx/basics/","matchPath":"/de/fx/basics/"},{"path":"/de/fx/brokers/","matchPath":"/de/fx/brokers/"},{"path":"/de/fx/market-analysis/","matchPath":"/de/fx/market-analysis/"},{"path":"/de/fx/regulations/","matchPath":"/de/fx/regulations/"},{"path":"/de/fx/strategies/","matchPath":"/de/fx/strategies/"},{"path":"/de/fx/tools/","matchPath":"/de/fx/tools/"},{"path":"/de/fx/trading-platforms/","matchPath":"/de/fx/trading-platforms/"},{"path":"/de/gambling-guides/blackjack-strategy/","matchPath":"/de/gambling-guides/blackjack-strategy/"},{"path":"/de/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/de/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/de/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/de/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/de/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/de/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/de/gambling-guides/poker-strategy/","matchPath":"/de/gambling-guides/poker-strategy/"},{"path":"/de/gambling-guides/roulette-strategy/","matchPath":"/de/gambling-guides/roulette-strategy/"},{"path":"/de/gambling/betting/","matchPath":"/de/gambling/betting/"},{"path":"/de/gambling/bingo/","matchPath":"/de/gambling/bingo/"},{"path":"/de/gambling/bots/","matchPath":"/de/gambling/bots/"},{"path":"/de/gambling/casino/","matchPath":"/de/gambling/casino/"},{"path":"/de/gambling/daily-contests/","matchPath":"/de/gambling/daily-contests/"},{"path":"/de/gambling/hot-games/","matchPath":"/de/gambling/hot-games/"},{"path":"/de/gambling/new-games/","matchPath":"/de/gambling/new-games/"},{"path":"/de/gambling/pachinko/","matchPath":"/de/gambling/pachinko/"},{"path":"/de/gambling/play-along/","matchPath":"/de/gambling/play-along/"},{"path":"/de/gambling/reviews/","matchPath":"/de/gambling/reviews/"},{"path":"/de/gambling/top-games/","matchPath":"/de/gambling/top-games/"},{"path":"/de/gambling/top-picks/","matchPath":"/de/gambling/top-picks/"},{"path":"/de/gambling/trending-games/","matchPath":"/de/gambling/trending-games/"},{"path":"/de/gambling/weekly-raffles/","matchPath":"/de/gambling/weekly-raffles/"},{"path":"/de/germany/online-casino/","matchPath":"/de/germany/online-casino/"},{"path":"/de/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/de/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/de/get-started/a-quick-introduction-to-crypto/","matchPath":"/de/get-started/a-quick-introduction-to-crypto/"},{"path":"/de/get-started/bitcoin-as-an-asset-class/","matchPath":"/de/get-started/bitcoin-as-an-asset-class/"},{"path":"/de/get-started/bitcoin-debit-card/","matchPath":"/de/get-started/bitcoin-debit-card/"},{"path":"/de/get-started/bitcoin-glossary/","matchPath":"/de/get-started/bitcoin-glossary/"},{"path":"/de/get-started/bitcoin-layer-2-solutions/","matchPath":"/de/get-started/bitcoin-layer-2-solutions/"},{"path":"/de/get-started/bitcoin-price-history/","matchPath":"/de/get-started/bitcoin-price-history/"},{"path":"/de/get-started/bitcoin-price-prediction/","matchPath":"/de/get-started/bitcoin-price-prediction/"},{"path":"/de/get-started/bitcoin-trading-for-beginners/","matchPath":"/de/get-started/bitcoin-trading-for-beginners/"},{"path":"/de/get-started/bitcoin-vs-altcoins/","matchPath":"/de/get-started/bitcoin-vs-altcoins/"},{"path":"/de/get-started/bitcoin-vs-fiat/","matchPath":"/de/get-started/bitcoin-vs-fiat/"},{"path":"/de/get-started/bitcoin-vs-stablecoins/","matchPath":"/de/get-started/bitcoin-vs-stablecoins/"},{"path":"/de/get-started/bull-market-vs-bear-market/","matchPath":"/de/get-started/bull-market-vs-bear-market/"},{"path":"/de/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/de/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/de/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/de/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/de/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/de/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/de/get-started/create-bitcoin-wallet/","matchPath":"/de/get-started/create-bitcoin-wallet/"},{"path":"/de/get-started/create-crypto-wallet/","matchPath":"/de/get-started/create-crypto-wallet/"},{"path":"/de/get-started/crypto-debit-card/","matchPath":"/de/get-started/crypto-debit-card/"},{"path":"/de/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/de/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/de/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/de/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/de/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/de/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/de/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/de/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/de/get-started/defi-use-cases/","matchPath":"/de/get-started/defi-use-cases/"},{"path":"/de/get-started/dex-lingo/","matchPath":"/de/get-started/dex-lingo/"},{"path":"/de/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/de/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/de/get-started/digital-asset-security/","matchPath":"/de/get-started/digital-asset-security/"},{"path":"/de/get-started/dollar-cost-averaging/","matchPath":"/de/get-started/dollar-cost-averaging/"},{"path":"/de/get-started/faq/","matchPath":"/de/get-started/faq/"},{"path":"/de/get-started/how-bitcoin-exchange-works/","matchPath":"/de/get-started/how-bitcoin-exchange-works/"},{"path":"/de/get-started/how-bitcoin-impacts-environment/","matchPath":"/de/get-started/how-bitcoin-impacts-environment/"},{"path":"/de/get-started/how-bitcoin-transactions-work/","matchPath":"/de/get-started/how-bitcoin-transactions-work/"},{"path":"/de/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/de/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/de/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/de/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/de/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/de/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/de/get-started/how-does-crypto-exchange-work/","matchPath":"/de/get-started/how-does-crypto-exchange-work/"},{"path":"/de/get-started/how-does-governance-work-in-ethereum/","matchPath":"/de/get-started/how-does-governance-work-in-ethereum/"},{"path":"/de/get-started/how-is-cryptocurrency-taxed/","matchPath":"/de/get-started/how-is-cryptocurrency-taxed/"},{"path":"/de/get-started/how-to-avoid-common-bitcoin-scams/","matchPath":"/de/get-started/how-to-avoid-common-bitcoin-scams/"},{"path":"/de/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/de/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/de/get-started/how-to-borrow-in-defi/","matchPath":"/de/get-started/how-to-borrow-in-defi/"},{"path":"/de/get-started/how-to-buy-an-nft/","matchPath":"/de/get-started/how-to-buy-an-nft/"},{"path":"/de/get-started/how-to-buy-bitcoin-cash/","matchPath":"/de/get-started/how-to-buy-bitcoin-cash/"},{"path":"/de/get-started/how-to-buy-bitcoin/","matchPath":"/de/get-started/how-to-buy-bitcoin/"},{"path":"/de/get-started/how-to-buy-crypto/","matchPath":"/de/get-started/how-to-buy-crypto/"},{"path":"/de/get-started/how-to-buy-eth/","matchPath":"/de/get-started/how-to-buy-eth/"},{"path":"/de/get-started/how-to-buy-insurance-in-defi/","matchPath":"/de/get-started/how-to-buy-insurance-in-defi/"},{"path":"/de/get-started/how-to-buy-real-estate-with-bitcoin/","matchPath":"/de/get-started/how-to-buy-real-estate-with-bitcoin/"},{"path":"/de/get-started/how-to-buy-real-estate-with-crypto/","matchPath":"/de/get-started/how-to-buy-real-estate-with-crypto/"},{"path":"/de/get-started/how-to-buy-verse/","matchPath":"/de/get-started/how-to-buy-verse/"},{"path":"/de/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/de/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/de/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/de/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/de/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/de/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/de/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/de/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/de/get-started/how-to-enter-a-new-chain/","matchPath":"/de/get-started/how-to-enter-a-new-chain/"},{"path":"/de/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/de/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/de/get-started/how-to-lend-in-defi/","matchPath":"/de/get-started/how-to-lend-in-defi/"},{"path":"/de/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/de/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/de/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/de/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/de/get-started/how-to-read-bitcoin-charts-for-beginners/","matchPath":"/de/get-started/how-to-read-bitcoin-charts-for-beginners/"},{"path":"/de/get-started/how-to-receive-bitcoin-cash/","matchPath":"/de/get-started/how-to-receive-bitcoin-cash/"},{"path":"/de/get-started/how-to-receive-bitcoin/","matchPath":"/de/get-started/how-to-receive-bitcoin/"},{"path":"/de/get-started/how-to-receive-crypto/","matchPath":"/de/get-started/how-to-receive-crypto/"},{"path":"/de/get-started/how-to-receive-ethereum/","matchPath":"/de/get-started/how-to-receive-ethereum/"},{"path":"/de/get-started/how-to-sell-bitcoin-cash/","matchPath":"/de/get-started/how-to-sell-bitcoin-cash/"},{"path":"/de/get-started/how-to-sell-bitcoin/","matchPath":"/de/get-started/how-to-sell-bitcoin/"},{"path":"/de/get-started/how-to-sell-crypto/","matchPath":"/de/get-started/how-to-sell-crypto/"},{"path":"/de/get-started/how-to-sell-verse/","matchPath":"/de/get-started/how-to-sell-verse/"},{"path":"/de/get-started/how-to-send-bitcoin-cash/","matchPath":"/de/get-started/how-to-send-bitcoin-cash/"},{"path":"/de/get-started/how-to-send-bitcoin/","matchPath":"/de/get-started/how-to-send-bitcoin/"},{"path":"/de/get-started/how-to-send-crypto/","matchPath":"/de/get-started/how-to-send-crypto/"},{"path":"/de/get-started/how-to-send-ethereum/","matchPath":"/de/get-started/how-to-send-ethereum/"},{"path":"/de/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/de/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/de/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/de/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/de/get-started/how-to-swap-crypto/","matchPath":"/de/get-started/how-to-swap-crypto/"},{"path":"/de/get-started/how-to-use-a-dex/","matchPath":"/de/get-started/how-to-use-a-dex/"},{"path":"/de/get-started/how-to-use-bitcoin-cash/","matchPath":"/de/get-started/how-to-use-bitcoin-cash/"},{"path":"/de/get-started/how-to-use-derivatives-in-defi/","matchPath":"/de/get-started/how-to-use-derivatives-in-defi/"},{"path":"/de/get-started/how-to-verify-bitcoin-transactions/","matchPath":"/de/get-started/how-to-verify-bitcoin-transactions/"},{"path":"/de/get-started/how-to-yield-farm-in-defi/","matchPath":"/de/get-started/how-to-yield-farm-in-defi/"},{"path":"/de/get-started/how-was-eth-initially-distributed/","matchPath":"/de/get-started/how-was-eth-initially-distributed/"},{"path":"/de/get-started/is-bitcoin-a-store-of-value/","matchPath":"/de/get-started/is-bitcoin-a-store-of-value/"},{"path":"/de/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/de/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/de/get-started/is-bitcoin-private/","matchPath":"/de/get-started/is-bitcoin-private/"},{"path":"/de/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/de/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/de/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/de/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/de/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/de/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/de/get-started/shared-wallet-multisig-use-cases/","matchPath":"/de/get-started/shared-wallet-multisig-use-cases/"},{"path":"/de/get-started/smart-contracts-on-bitcoin/","matchPath":"/de/get-started/smart-contracts-on-bitcoin/"},{"path":"/de/get-started/the-benefits-of-bitcoin/","matchPath":"/de/get-started/the-benefits-of-bitcoin/"},{"path":"/de/get-started/the-bitcoin-revolution/","matchPath":"/de/get-started/the-bitcoin-revolution/"},{"path":"/de/get-started/unstoppable-money/","matchPath":"/de/get-started/unstoppable-money/"},{"path":"/de/get-started/usdt-usdc-usde-dai-busd-usdd-pyusd-tusd-rlusd-ust-frax/","matchPath":"/de/get-started/usdt-usdc-usde-dai-busd-usdd-pyusd-tusd-rlusd-ust-frax/"},{"path":"/de/get-started/what_is_bitcoin_taproot/","matchPath":"/de/get-started/what_is_bitcoin_taproot/"},{"path":"/de/get-started/what_is_web3/","matchPath":"/de/get-started/what_is_web3/"},{"path":"/de/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/de/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/de/get-started/what-are-altcoins/","matchPath":"/de/get-started/what-are-altcoins/"},{"path":"/de/get-started/what-are-automated-market-makers/","matchPath":"/de/get-started/what-are-automated-market-makers/"},{"path":"/de/get-started/what-are-bitcoin-credit-cards/","matchPath":"/de/get-started/what-are-bitcoin-credit-cards/"},{"path":"/de/get-started/what-are-bitcoin-network-fees/","matchPath":"/de/get-started/what-are-bitcoin-network-fees/"},{"path":"/de/get-started/what-are-bitcoin-ordinals/","matchPath":"/de/get-started/what-are-bitcoin-ordinals/"},{"path":"/de/get-started/what-are-bitcoin-utxos/","matchPath":"/de/get-started/what-are-bitcoin-utxos/"},{"path":"/de/get-started/what-are-bitcoin-whales/","matchPath":"/de/get-started/what-are-bitcoin-whales/"},{"path":"/de/get-started/what-are-central-bank-digital-currencies/","matchPath":"/de/get-started/what-are-central-bank-digital-currencies/"},{"path":"/de/get-started/what-are-crypto-derivatives/","matchPath":"/de/get-started/what-are-crypto-derivatives/"},{"path":"/de/get-started/what-are-crypto-network-fees/","matchPath":"/de/get-started/what-are-crypto-network-fees/"},{"path":"/de/get-started/what-are-crypto-retirement-accounts/","matchPath":"/de/get-started/what-are-crypto-retirement-accounts/"},{"path":"/de/get-started/what-are-erc-20-tokens/","matchPath":"/de/get-started/what-are-erc-20-tokens/"},{"path":"/de/get-started/what-are-fundamental-technical-and-sentimental-analysis-in-trading/","matchPath":"/de/get-started/what-are-fundamental-technical-and-sentimental-analysis-in-trading/"},{"path":"/de/get-started/what-are-liquidity-pools/","matchPath":"/de/get-started/what-are-liquidity-pools/"},{"path":"/de/get-started/what-are-meme-coins/","matchPath":"/de/get-started/what-are-meme-coins/"},{"path":"/de/get-started/what-are-nfts/","matchPath":"/de/get-started/what-are-nfts/"},{"path":"/de/get-started/what-are-prediction-markets/","matchPath":"/de/get-started/what-are-prediction-markets/"},{"path":"/de/get-started/what-are-privacy-coins/","matchPath":"/de/get-started/what-are-privacy-coins/"},{"path":"/de/get-started/what-are-real-world-assets-rwa/","matchPath":"/de/get-started/what-are-real-world-assets-rwa/"},{"path":"/de/get-started/what-are-shareable-links/","matchPath":"/de/get-started/what-are-shareable-links/"},{"path":"/de/get-started/what-are-sidechains/","matchPath":"/de/get-started/what-are-sidechains/"},{"path":"/de/get-started/what-are-stablecoins/","matchPath":"/de/get-started/what-are-stablecoins/"},{"path":"/de/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/de/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/de/get-started/what-are-transaction-fees/","matchPath":"/de/get-started/what-are-transaction-fees/"},{"path":"/de/get-started/what-is-a-bitcoin-address/","matchPath":"/de/get-started/what-is-a-bitcoin-address/"},{"path":"/de/get-started/what-is-a-bitcoin-corporate-treasury/","matchPath":"/de/get-started/what-is-a-bitcoin-corporate-treasury/"},{"path":"/de/get-started/what-is-a-bitcoin-ira/","matchPath":"/de/get-started/what-is-a-bitcoin-ira/"},{"path":"/de/get-started/what-is-a-bitcoin-mempool/","matchPath":"/de/get-started/what-is-a-bitcoin-mempool/"},{"path":"/de/get-started/what-is-a-bitcoin-node/","matchPath":"/de/get-started/what-is-a-bitcoin-node/"},{"path":"/de/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/de/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/de/get-started/what-is-a-bitcoin-wallet/","matchPath":"/de/get-started/what-is-a-bitcoin-wallet/"},{"path":"/de/get-started/what-is-a-blockchain-explorer/","matchPath":"/de/get-started/what-is-a-blockchain-explorer/"},{"path":"/de/get-started/what-is-a-blockchain/","matchPath":"/de/get-started/what-is-a-blockchain/"},{"path":"/de/get-started/what-is-a-brokerage/","matchPath":"/de/get-started/what-is-a-brokerage/"},{"path":"/de/get-started/what-is-a-cex/","matchPath":"/de/get-started/what-is-a-cex/"},{"path":"/de/get-started/what-is-a-confirmation/","matchPath":"/de/get-started/what-is-a-confirmation/"},{"path":"/de/get-started/what-is-a-consensus-mechanism/","matchPath":"/de/get-started/what-is-a-consensus-mechanism/"},{"path":"/de/get-started/what-is-a-crypto-bridge/","matchPath":"/de/get-started/what-is-a-crypto-bridge/"},{"path":"/de/get-started/what-is-a-crypto-wallet/","matchPath":"/de/get-started/what-is-a-crypto-wallet/"},{"path":"/de/get-started/what-is-a-dao/","matchPath":"/de/get-started/what-is-a-dao/"},{"path":"/de/get-started/what-is-a-dApp/","matchPath":"/de/get-started/what-is-a-dApp/"},{"path":"/de/get-started/what-is-a-dex/","matchPath":"/de/get-started/what-is-a-dex/"},{"path":"/de/get-started/what-is-a-liquid-staking-token/","matchPath":"/de/get-started/what-is-a-liquid-staking-token/"},{"path":"/de/get-started/what-is-a-market-cap/","matchPath":"/de/get-started/what-is-a-market-cap/"},{"path":"/de/get-started/what-is-a-memecoin/","matchPath":"/de/get-started/what-is-a-memecoin/"},{"path":"/de/get-started/what-is-a-private-key/","matchPath":"/de/get-started/what-is-a-private-key/"},{"path":"/de/get-started/what-is-a-smart-contract/","matchPath":"/de/get-started/what-is-a-smart-contract/"},{"path":"/de/get-started/what-is-a-token-sale/","matchPath":"/de/get-started/what-is-a-token-sale/"},{"path":"/de/get-started/what-is-a-token/","matchPath":"/de/get-started/what-is-a-token/"},{"path":"/de/get-started/what-is-an-airdrop/","matchPath":"/de/get-started/what-is-an-airdrop/"},{"path":"/de/get-started/what-is-an-mpc-wallet/","matchPath":"/de/get-started/what-is-an-mpc-wallet/"},{"path":"/de/get-started/what-is-an-oracle/","matchPath":"/de/get-started/what-is-an-oracle/"},{"path":"/de/get-started/what-is-apr/","matchPath":"/de/get-started/what-is-apr/"},{"path":"/de/get-started/what-is-apy/","matchPath":"/de/get-started/what-is-apy/"},{"path":"/de/get-started/what-is-avalanche/","matchPath":"/de/get-started/what-is-avalanche/"},{"path":"/de/get-started/what-is-bitcoin-cash/","matchPath":"/de/get-started/what-is-bitcoin-cash/"},{"path":"/de/get-started/what-is-bitcoin-dominance/","matchPath":"/de/get-started/what-is-bitcoin-dominance/"},{"path":"/de/get-started/what-is-Bitcoin-ETF/","matchPath":"/de/get-started/what-is-Bitcoin-ETF/"},{"path":"/de/get-started/what-is-bitcoin-fungibility/","matchPath":"/de/get-started/what-is-bitcoin-fungibility/"},{"path":"/de/get-started/what-is-bitcoin-gambling/","matchPath":"/de/get-started/what-is-bitcoin-gambling/"},{"path":"/de/get-started/what-is-bitcoin-governance/","matchPath":"/de/get-started/what-is-bitcoin-governance/"},{"path":"/de/get-started/what-is-bitcoin-halving/","matchPath":"/de/get-started/what-is-bitcoin-halving/"},{"path":"/de/get-started/what-is-bitcoin-hard-fork/","matchPath":"/de/get-started/what-is-bitcoin-hard-fork/"},{"path":"/de/get-started/what-is-bitcoin-hashrate/","matchPath":"/de/get-started/what-is-bitcoin-hashrate/"},{"path":"/de/get-started/what-is-bitcoin-liquidity/","matchPath":"/de/get-started/what-is-bitcoin-liquidity/"},{"path":"/de/get-started/what-is-bitcoin-mining/","matchPath":"/de/get-started/what-is-bitcoin-mining/"},{"path":"/de/get-started/what-is-bitcoin-op-cat/","matchPath":"/de/get-started/what-is-bitcoin-op-cat/"},{"path":"/de/get-started/what-is-bitcoin-otc-trading/","matchPath":"/de/get-started/what-is-bitcoin-otc-trading/"},{"path":"/de/get-started/what-is-bitcoin-script-language/","matchPath":"/de/get-started/what-is-bitcoin-script-language/"},{"path":"/de/get-started/what-is-bitcoin-segwit-segregated-witness/","matchPath":"/de/get-started/what-is-bitcoin-segwit-segregated-witness/"},{"path":"/de/get-started/what-is-bitcoin-taproot/","matchPath":"/de/get-started/what-is-bitcoin-taproot/"},{"path":"/de/get-started/what-is-bitcoin/","matchPath":"/de/get-started/what-is-bitcoin/"},{"path":"/de/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/de/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/de/get-started/what-is-cardano-ada/","matchPath":"/de/get-started/what-is-cardano-ada/"},{"path":"/de/get-started/what-is-censorship-resistance/","matchPath":"/de/get-started/what-is-censorship-resistance/"},{"path":"/de/get-started/what-is-cex-education/","matchPath":"/de/get-started/what-is-cex-education/"},{"path":"/de/get-started/what-is-chainlink/","matchPath":"/de/get-started/what-is-chainlink/"},{"path":"/de/get-started/what-is-coin-mixer/","matchPath":"/de/get-started/what-is-coin-mixer/"},{"path":"/de/get-started/what-is-cross-chain-interoperability/","matchPath":"/de/get-started/what-is-cross-chain-interoperability/"},{"path":"/de/get-started/what-is-crypto-asset-management/","matchPath":"/de/get-started/what-is-crypto-asset-management/"},{"path":"/de/get-started/what-is-crypto-insurance/","matchPath":"/de/get-started/what-is-crypto-insurance/"},{"path":"/de/get-started/what-is-crypto-lending/","matchPath":"/de/get-started/what-is-crypto-lending/"},{"path":"/de/get-started/what-is-defi-decentralized-finance/","matchPath":"/de/get-started/what-is-defi-decentralized-finance/"},{"path":"/de/get-started/what-is-EIP-1559/","matchPath":"/de/get-started/what-is-EIP-1559/"},{"path":"/de/get-started/what-is-eth-2/","matchPath":"/de/get-started/what-is-eth-2/"},{"path":"/de/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/de/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/de/get-started/what-is-eth-used-for/","matchPath":"/de/get-started/what-is-eth-used-for/"},{"path":"/de/get-started/what-is-ethereum-monetary-policy/","matchPath":"/de/get-started/what-is-ethereum-monetary-policy/"},{"path":"/de/get-started/what-is-ethereum/","matchPath":"/de/get-started/what-is-ethereum/"},{"path":"/de/get-started/what-is-evm/","matchPath":"/de/get-started/what-is-evm/"},{"path":"/de/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/de/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/de/get-started/what-is-fractal-bitcoin/","matchPath":"/de/get-started/what-is-fractal-bitcoin/"},{"path":"/de/get-started/what-is-gas/","matchPath":"/de/get-started/what-is-gas/"},{"path":"/de/get-started/what-is-impermanent-loss/","matchPath":"/de/get-started/what-is-impermanent-loss/"},{"path":"/de/get-started/what-is-inflation/","matchPath":"/de/get-started/what-is-inflation/"},{"path":"/de/get-started/what-is-know-your-customer/","matchPath":"/de/get-started/what-is-know-your-customer/"},{"path":"/de/get-started/what-is-layer-2-on-ethereum/","matchPath":"/de/get-started/what-is-layer-2-on-ethereum/"},{"path":"/de/get-started/what-is-lightning-network/","matchPath":"/de/get-started/what-is-lightning-network/"},{"path":"/de/get-started/what-is-liquidity/","matchPath":"/de/get-started/what-is-liquidity/"},{"path":"/de/get-started/what-is-litecoin-ltc/","matchPath":"/de/get-started/what-is-litecoin-ltc/"},{"path":"/de/get-started/what-is-money/","matchPath":"/de/get-started/what-is-money/"},{"path":"/de/get-started/what-is-mt-gox/","matchPath":"/de/get-started/what-is-mt-gox/"},{"path":"/de/get-started/what-is-polygon-matic/","matchPath":"/de/get-started/what-is-polygon-matic/"},{"path":"/de/get-started/what-is-proof-of-stake/","matchPath":"/de/get-started/what-is-proof-of-stake/"},{"path":"/de/get-started/what-is-proof-of-work/","matchPath":"/de/get-started/what-is-proof-of-work/"},{"path":"/de/get-started/what-is-restaking/","matchPath":"/de/get-started/what-is-restaking/"},{"path":"/de/get-started/what-is-ripple-xrp-ledger/","matchPath":"/de/get-started/what-is-ripple-xrp-ledger/"},{"path":"/de/get-started/what-is-solana/","matchPath":"/de/get-started/what-is-solana/"},{"path":"/de/get-started/what-is-staking/","matchPath":"/de/get-started/what-is-staking/"},{"path":"/de/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/de/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/de/get-started/what-is-the-difference-between-layer-zero-one-two-and-three-blockchains/","matchPath":"/de/get-started/what-is-the-difference-between-layer-zero-one-two-and-three-blockchains/"},{"path":"/de/get-started/what-is-the-difference-between-zk-rollups-and-optimistic-rollups/","matchPath":"/de/get-started/what-is-the-difference-between-zk-rollups-and-optimistic-rollups/"},{"path":"/de/get-started/what-is-the-double-spend-problem/","matchPath":"/de/get-started/what-is-the-double-spend-problem/"},{"path":"/de/get-started/what-is-the-metaverse/","matchPath":"/de/get-started/what-is-the-metaverse/"},{"path":"/de/get-started/what-is-the-verse-development-fund/","matchPath":"/de/get-started/what-is-the-verse-development-fund/"},{"path":"/de/get-started/what-is-trading-volume/","matchPath":"/de/get-started/what-is-trading-volume/"},{"path":"/de/get-started/what-is-tron-dao-trx/","matchPath":"/de/get-started/what-is-tron-dao-trx/"},{"path":"/de/get-started/what-is-trump-world-liberty-financial/","matchPath":"/de/get-started/what-is-trump-world-liberty-financial/"},{"path":"/de/get-started/what-is-uni/","matchPath":"/de/get-started/what-is-uni/"},{"path":"/de/get-started/what-is-verse-community/","matchPath":"/de/get-started/what-is-verse-community/"},{"path":"/de/get-started/what-is-verse-dex/","matchPath":"/de/get-started/what-is-verse-dex/"},{"path":"/de/get-started/what-is-verse/","matchPath":"/de/get-started/what-is-verse/"},{"path":"/de/get-started/what-is-volatility/","matchPath":"/de/get-started/what-is-volatility/"},{"path":"/de/get-started/what-is-walletconnect/","matchPath":"/de/get-started/what-is-walletconnect/"},{"path":"/de/get-started/what-is-wbtc/","matchPath":"/de/get-started/what-is-wbtc/"},{"path":"/de/get-started/what-is-web3/","matchPath":"/de/get-started/what-is-web3/"},{"path":"/de/get-started/what-is-weth/","matchPath":"/de/get-started/what-is-weth/"},{"path":"/de/get-started/what-is-yfi/","matchPath":"/de/get-started/what-is-yfi/"},{"path":"/de/get-started/what-is-yield-farming/","matchPath":"/de/get-started/what-is-yield-farming/"},{"path":"/de/get-started/what-is-zano/","matchPath":"/de/get-started/what-is-zano/"},{"path":"/de/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/de/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/de/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/de/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/de/get-started/who-created-ethereum/","matchPath":"/de/get-started/who-created-ethereum/"},{"path":"/de/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/de/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/de/giftcard/history/","matchPath":"/de/giftcard/history/"},{"path":"/de/jobs/solidity/","matchPath":"/de/jobs/solidity/"},{"path":"/de/luxury/art-collectibles/","matchPath":"/de/luxury/art-collectibles/"},{"path":"/de/luxury/concierge/","matchPath":"/de/luxury/concierge/"},{"path":"/de/luxury/designer-fashion/","matchPath":"/de/luxury/designer-fashion/"},{"path":"/de/luxury/events/","matchPath":"/de/luxury/events/"},{"path":"/de/luxury/experiences/","matchPath":"/de/luxury/experiences/"},{"path":"/de/luxury/ferrari-dealers/","matchPath":"/de/luxury/ferrari-dealers/"},{"path":"/de/luxury/health-wellness/","matchPath":"/de/luxury/health-wellness/"},{"path":"/de/luxury/hotels-resorts/","matchPath":"/de/luxury/hotels-resorts/"},{"path":"/de/luxury/jewelry/","matchPath":"/de/luxury/jewelry/"},{"path":"/de/luxury/private-jets/","matchPath":"/de/luxury/private-jets/"},{"path":"/de/luxury/real-estate/","matchPath":"/de/luxury/real-estate/"},{"path":"/de/luxury/supercars/","matchPath":"/de/luxury/supercars/"},{"path":"/de/luxury/timepieces/","matchPath":"/de/luxury/timepieces/"},{"path":"/de/luxury/villas/","matchPath":"/de/luxury/villas/"},{"path":"/de/luxury/yachts/","matchPath":"/de/luxury/yachts/"},{"path":"/de/merchant-solutions/brick-mortar/","matchPath":"/de/merchant-solutions/brick-mortar/"},{"path":"/de/merchant-solutions/online-business/","matchPath":"/de/merchant-solutions/online-business/"},{"path":"/de/mining/bitcoin-cash/","matchPath":"/de/mining/bitcoin-cash/"},{"path":"/de/mining/cloud-mining/","matchPath":"/de/mining/cloud-mining/"},{"path":"/de/mining/dash/","matchPath":"/de/mining/dash/"},{"path":"/de/mining/dogecoin/","matchPath":"/de/mining/dogecoin/"},{"path":"/de/mining/kaspa/","matchPath":"/de/mining/kaspa/"},{"path":"/de/mining/litecoin/","matchPath":"/de/mining/litecoin/"},{"path":"/de/mining/monero/","matchPath":"/de/mining/monero/"},{"path":"/de/mining/ravencoin/","matchPath":"/de/mining/ravencoin/"},{"path":"/de/newsletters/btc-research/","matchPath":"/de/newsletters/btc-research/"},{"path":"/de/newsletters/games-updates/","matchPath":"/de/newsletters/games-updates/"},{"path":"/de/newsletters/price-analysis/","matchPath":"/de/newsletters/price-analysis/"},{"path":"/de/newsletters/product-updates/","matchPath":"/de/newsletters/product-updates/"},{"path":"/de/newsletters/verse-updates/","matchPath":"/de/newsletters/verse-updates/"},{"path":"/de/newsletters/week-in-review/","matchPath":"/de/newsletters/week-in-review/"},{"path":"/de/payments/gateways/","matchPath":"/de/payments/gateways/"},{"path":"/de/payments/integrations/","matchPath":"/de/payments/integrations/"},{"path":"/de/payments/merchants/","matchPath":"/de/payments/merchants/"},{"path":"/de/payments/point-of-sale/","matchPath":"/de/payments/point-of-sale/"},{"path":"/de/payments/processors/","matchPath":"/de/payments/processors/"},{"path":"/de/payments/remittances/","matchPath":"/de/payments/remittances/"},{"path":"/de/payments/solutions/","matchPath":"/de/payments/solutions/"},{"path":"/de/payments/tips/","matchPath":"/de/payments/tips/"},{"path":"/de/poker/faqs/","matchPath":"/de/poker/faqs/"},{"path":"/de/poker/how-to-play/","matchPath":"/de/poker/how-to-play/"},{"path":"/de/poker/legality/","matchPath":"/de/poker/legality/"},{"path":"/de/poker/promotions/","matchPath":"/de/poker/promotions/"},{"path":"/de/poker/room-reviews/","matchPath":"/de/poker/room-reviews/"},{"path":"/de/poker/tournaments/","matchPath":"/de/poker/tournaments/"},{"path":"/de/price/cosmos-atom/","matchPath":"/de/price/cosmos-atom/"},{"path":"/de/price/ethereum-classic-etc/","matchPath":"/de/price/ethereum-classic-etc/"},{"path":"/de/price/immutable-x-imx/","matchPath":"/de/price/immutable-x-imx/"},{"path":"/de/price/injektiv-inj/","matchPath":"/de/price/injektiv-inj/"},{"path":"/de/price/internet-computer-icp/","matchPath":"/de/price/internet-computer-icp/"},{"path":"/de/research/btc-research/","matchPath":"/de/research/btc-research/"},{"path":"/de/research/games-updates/","matchPath":"/de/research/games-updates/"},{"path":"/de/research/price-analysis/","matchPath":"/de/research/price-analysis/"},{"path":"/de/research/product-updates/","matchPath":"/de/research/product-updates/"},{"path":"/de/research/verse-updates/","matchPath":"/de/research/verse-updates/"},{"path":"/de/research/week-in-review/","matchPath":"/de/research/week-in-review/"},{"path":"/de/tax/calculators/","matchPath":"/de/tax/calculators/"},{"path":"/de/tax/compliance/","matchPath":"/de/tax/compliance/"},{"path":"/de/tax/forms/","matchPath":"/de/tax/forms/"},{"path":"/de/tax/guides/","matchPath":"/de/tax/guides/"},{"path":"/de/tax/laws/","matchPath":"/de/tax/laws/"},{"path":"/de/tax/professionals/","matchPath":"/de/tax/professionals/"},{"path":"/de/tax/software/","matchPath":"/de/tax/software/"},{"path":"/de/tax/strategies/","matchPath":"/de/tax/strategies/"},{"path":"/de/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/de/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/de/trading/top-contracts-for-difference/","matchPath":"/de/trading/top-contracts-for-difference/"},{"path":"/de/vpn/best-vpn-in-us/","matchPath":"/de/vpn/best-vpn-in-us/"},{"path":"/de/wallet-services/backup-options/","matchPath":"/de/wallet-services/backup-options/"},{"path":"/de/wallet-services/secure-wallet/","matchPath":"/de/wallet-services/secure-wallet/"},{"path":"/de/wallet-services/security-tips/","matchPath":"/de/wallet-services/security-tips/"},{"path":"/de/wallet-services/setup-guide/","matchPath":"/de/wallet-services/setup-guide/"},{"path":"/de/wallet-services/wallet-download/","matchPath":"/de/wallet-services/wallet-download/"},{"path":"/de/wallet/avalanche/","matchPath":"/de/wallet/avalanche/"},{"path":"/de/wallet/bitcoin/","matchPath":"/de/wallet/bitcoin/"},{"path":"/de/wallet/bnb/","matchPath":"/de/wallet/bnb/"},{"path":"/de/wallet/browser-extension/","matchPath":"/de/wallet/browser-extension/"},{"path":"/de/wallet/cardano/","matchPath":"/de/wallet/cardano/"},{"path":"/de/wallet/custodial/","matchPath":"/de/wallet/custodial/"},{"path":"/de/wallet/defi-wallets/","matchPath":"/de/wallet/defi-wallets/"},{"path":"/de/wallet/defi/","matchPath":"/de/wallet/defi/"},{"path":"/de/wallet/desktop/","matchPath":"/de/wallet/desktop/"},{"path":"/de/wallet/enterprise/","matchPath":"/de/wallet/enterprise/"},{"path":"/de/wallet/ethereum/","matchPath":"/de/wallet/ethereum/"},{"path":"/de/wallet/gaming/","matchPath":"/de/wallet/gaming/"},{"path":"/de/wallet/hardware/","matchPath":"/de/wallet/hardware/"},{"path":"/de/wallet/hodl/","matchPath":"/de/wallet/hodl/"},{"path":"/de/wallet/lightning/","matchPath":"/de/wallet/lightning/"},{"path":"/de/wallet/litecoin/","matchPath":"/de/wallet/litecoin/"},{"path":"/de/wallet/mobile/","matchPath":"/de/wallet/mobile/"},{"path":"/de/wallet/multi-signature/","matchPath":"/de/wallet/multi-signature/"},{"path":"/de/wallet/multichain/","matchPath":"/de/wallet/multichain/"},{"path":"/de/wallet/nft/","matchPath":"/de/wallet/nft/"},{"path":"/de/wallet/paper-wallets/","matchPath":"/de/wallet/paper-wallets/"},{"path":"/de/wallet/polkadot/","matchPath":"/de/wallet/polkadot/"},{"path":"/de/wallet/privacy/","matchPath":"/de/wallet/privacy/"},{"path":"/de/wallet/remittance/","matchPath":"/de/wallet/remittance/"},{"path":"/de/wallet/reviews/","matchPath":"/de/wallet/reviews/"},{"path":"/de/wallet/self-custodial/","matchPath":"/de/wallet/self-custodial/"},{"path":"/de/wallet/solana/","matchPath":"/de/wallet/solana/"},{"path":"/de/wallet/staking/","matchPath":"/de/wallet/staking/"},{"path":"/de/wallet/tezos/","matchPath":"/de/wallet/tezos/"},{"path":"/de/wallet/trading/","matchPath":"/de/wallet/trading/"},{"path":"/de/wallet/xrp/","matchPath":"/de/wallet/xrp/"},{"path":"/de/wealth-management/binance-coin/","matchPath":"/de/wealth-management/binance-coin/"},{"path":"/de/wealth-management/bitcoin-cash/","matchPath":"/de/wealth-management/bitcoin-cash/"},{"path":"/de/wealth-management/bitcoin/","matchPath":"/de/wealth-management/bitcoin/"},{"path":"/de/wealth-management/ethereum/","matchPath":"/de/wealth-management/ethereum/"},{"path":"/de/wealth-management/solana/","matchPath":"/de/wealth-management/solana/"},{"path":"/de/wealth-management/usdc/","matchPath":"/de/wealth-management/usdc/"},{"path":"/de/wealth-management/usdt-tether/","matchPath":"/de/wealth-management/usdt-tether/"},{"path":"/es/advertise/podcast/","matchPath":"/es/advertise/podcast/"},{"path":"/es/bitcoin-cash-register/service-terms/","matchPath":"/es/bitcoin-cash-register/service-terms/"},{"path":"/es/cards/anonymous-cards/","matchPath":"/es/cards/anonymous-cards/"},{"path":"/es/cards/cashback-cards/","matchPath":"/es/cards/cashback-cards/"},{"path":"/es/cards/credit-cards/","matchPath":"/es/cards/credit-cards/"},{"path":"/es/cards/crypto-cards/","matchPath":"/es/cards/crypto-cards/"},{"path":"/es/cards/debit-cards/","matchPath":"/es/cards/debit-cards/"},{"path":"/es/cards/gemini-card/","matchPath":"/es/cards/gemini-card/"},{"path":"/es/cards/gift-cards/","matchPath":"/es/cards/gift-cards/"},{"path":"/es/cards/mastercard-cards/","matchPath":"/es/cards/mastercard-cards/"},{"path":"/es/cards/prepaid-cards/","matchPath":"/es/cards/prepaid-cards/"},{"path":"/es/cards/reviews/","matchPath":"/es/cards/reviews/"},{"path":"/es/cards/rewards-cards/","matchPath":"/es/cards/rewards-cards/"},{"path":"/es/cards/solana/","matchPath":"/es/cards/solana/"},{"path":"/es/cards/virtual-cards/","matchPath":"/es/cards/virtual-cards/"},{"path":"/es/cards/visa-cards/","matchPath":"/es/cards/visa-cards/"},{"path":"/es/cards/web3-cards/","matchPath":"/es/cards/web3-cards/"},{"path":"/es/conferences/africa/","matchPath":"/es/conferences/africa/"},{"path":"/es/conferences/ai/","matchPath":"/es/conferences/ai/"},{"path":"/es/conferences/asia/","matchPath":"/es/conferences/asia/"},{"path":"/es/conferences/australia/","matchPath":"/es/conferences/australia/"},{"path":"/es/conferences/avalanche/","matchPath":"/es/conferences/avalanche/"},{"path":"/es/conferences/bitcoin/","matchPath":"/es/conferences/bitcoin/"},{"path":"/es/conferences/blockchain/","matchPath":"/es/conferences/blockchain/"},{"path":"/es/conferences/bnb/","matchPath":"/es/conferences/bnb/"},{"path":"/es/conferences/canada/","matchPath":"/es/conferences/canada/"},{"path":"/es/conferences/cardano/","matchPath":"/es/conferences/cardano/"},{"path":"/es/conferences/crypto/","matchPath":"/es/conferences/crypto/"},{"path":"/es/conferences/defi/","matchPath":"/es/conferences/defi/"},{"path":"/es/conferences/dubai/","matchPath":"/es/conferences/dubai/"},{"path":"/es/conferences/ethereum/","matchPath":"/es/conferences/ethereum/"},{"path":"/es/conferences/europe/","matchPath":"/es/conferences/europe/"},{"path":"/es/conferences/games/","matchPath":"/es/conferences/games/"},{"path":"/es/conferences/japan/","matchPath":"/es/conferences/japan/"},{"path":"/es/conferences/latam/","matchPath":"/es/conferences/latam/"},{"path":"/es/conferences/litecoin/","matchPath":"/es/conferences/litecoin/"},{"path":"/es/conferences/memes/","matchPath":"/es/conferences/memes/"},{"path":"/es/conferences/metaverse/","matchPath":"/es/conferences/metaverse/"},{"path":"/es/conferences/middle-east/","matchPath":"/es/conferences/middle-east/"},{"path":"/es/conferences/nft/","matchPath":"/es/conferences/nft/"},{"path":"/es/conferences/polkadot/","matchPath":"/es/conferences/polkadot/"},{"path":"/es/conferences/singapore/","matchPath":"/es/conferences/singapore/"},{"path":"/es/conferences/solana/","matchPath":"/es/conferences/solana/"},{"path":"/es/conferences/startups/","matchPath":"/es/conferences/startups/"},{"path":"/es/conferences/tech/","matchPath":"/es/conferences/tech/"},{"path":"/es/conferences/tezos/","matchPath":"/es/conferences/tezos/"},{"path":"/es/conferences/usa/","matchPath":"/es/conferences/usa/"},{"path":"/es/conferences/web3/","matchPath":"/es/conferences/web3/"},{"path":"/es/conferences/xrp/","matchPath":"/es/conferences/xrp/"},{"path":"/es/crypto-education/beginner-guides/","matchPath":"/es/crypto-education/beginner-guides/"},{"path":"/es/crypto-education/blockchain-basics/","matchPath":"/es/crypto-education/blockchain-basics/"},{"path":"/es/crypto-education/buying-guides/","matchPath":"/es/crypto-education/buying-guides/"},{"path":"/es/crypto-education/tax-information/","matchPath":"/es/crypto-education/tax-information/"},{"path":"/es/crypto-venture-network/accelerators/","matchPath":"/es/crypto-venture-network/accelerators/"},{"path":"/es/crypto-venture-network/incubators/","matchPath":"/es/crypto-venture-network/incubators/"},{"path":"/es/crypto-venture-network/portfolio-companies/","matchPath":"/es/crypto-venture-network/portfolio-companies/"},{"path":"/es/crypto-venture-network/syndicates/","matchPath":"/es/crypto-venture-network/syndicates/"},{"path":"/es/crypto-venture-network/venture-capital-funds/","matchPath":"/es/crypto-venture-network/venture-capital-funds/"},{"path":"/es/decentralized-exchanges/best-practices/","matchPath":"/es/decentralized-exchanges/best-practices/"},{"path":"/es/decentralized-exchanges/defi-articles/","matchPath":"/es/decentralized-exchanges/defi-articles/"},{"path":"/es/decentralized-exchanges/dex-overview/","matchPath":"/es/decentralized-exchanges/dex-overview/"},{"path":"/es/decentralized-exchanges/swap-tutorials/","matchPath":"/es/decentralized-exchanges/swap-tutorials/"},{"path":"/es/depin/how-to-buy-depin/","matchPath":"/es/depin/how-to-buy-depin/"},{"path":"/es/directory/cards/","matchPath":"/es/directory/cards/"},{"path":"/es/directory/conferences/","matchPath":"/es/directory/conferences/"},{"path":"/es/directory/exchanges/","matchPath":"/es/directory/exchanges/"},{"path":"/es/directory/gambling/","matchPath":"/es/directory/gambling/"},{"path":"/es/directory/mining/","matchPath":"/es/directory/mining/"},{"path":"/es/directory/wallets/","matchPath":"/es/directory/wallets/"},{"path":"/es/exchanges/aave/","matchPath":"/es/exchanges/aave/"},{"path":"/es/exchanges/algeria/","matchPath":"/es/exchanges/algeria/"},{"path":"/es/exchanges/algorithmic-trading-platforms/","matchPath":"/es/exchanges/algorithmic-trading-platforms/"},{"path":"/es/exchanges/altcoins/","matchPath":"/es/exchanges/altcoins/"},{"path":"/es/exchanges/anonymous-exchanges/","matchPath":"/es/exchanges/anonymous-exchanges/"},{"path":"/es/exchanges/aptos/","matchPath":"/es/exchanges/aptos/"},{"path":"/es/exchanges/arbitrage-bots/","matchPath":"/es/exchanges/arbitrage-bots/"},{"path":"/es/exchanges/arbitrum/","matchPath":"/es/exchanges/arbitrum/"},{"path":"/es/exchanges/argentina/","matchPath":"/es/exchanges/argentina/"},{"path":"/es/exchanges/artificial-superintelligence-alliance/","matchPath":"/es/exchanges/artificial-superintelligence-alliance/"},{"path":"/es/exchanges/asia/","matchPath":"/es/exchanges/asia/"},{"path":"/es/exchanges/australia/","matchPath":"/es/exchanges/australia/"},{"path":"/es/exchanges/auto-dca/","matchPath":"/es/exchanges/auto-dca/"},{"path":"/es/exchanges/automated-trading/","matchPath":"/es/exchanges/automated-trading/"},{"path":"/es/exchanges/avalanche/","matchPath":"/es/exchanges/avalanche/"},{"path":"/es/exchanges/bahrain/","matchPath":"/es/exchanges/bahrain/"},{"path":"/es/exchanges/bangladesh/","matchPath":"/es/exchanges/bangladesh/"},{"path":"/es/exchanges/base/","matchPath":"/es/exchanges/base/"},{"path":"/es/exchanges/binance-coin/","matchPath":"/es/exchanges/binance-coin/"},{"path":"/es/exchanges/binary-options/","matchPath":"/es/exchanges/binary-options/"},{"path":"/es/exchanges/bitcoin-cash/","matchPath":"/es/exchanges/bitcoin-cash/"},{"path":"/es/exchanges/bittensor/","matchPath":"/es/exchanges/bittensor/"},{"path":"/es/exchanges/brazil/","matchPath":"/es/exchanges/brazil/"},{"path":"/es/exchanges/canada/","matchPath":"/es/exchanges/canada/"},{"path":"/es/exchanges/cardano/","matchPath":"/es/exchanges/cardano/"},{"path":"/es/exchanges/central-america/","matchPath":"/es/exchanges/central-america/"},{"path":"/es/exchanges/centralized/","matchPath":"/es/exchanges/centralized/"},{"path":"/es/exchanges/chainlink/","matchPath":"/es/exchanges/chainlink/"},{"path":"/es/exchanges/chile/","matchPath":"/es/exchanges/chile/"},{"path":"/es/exchanges/china/","matchPath":"/es/exchanges/china/"},{"path":"/es/exchanges/colombia/","matchPath":"/es/exchanges/colombia/"},{"path":"/es/exchanges/congo/","matchPath":"/es/exchanges/congo/"},{"path":"/es/exchanges/contract-trading/","matchPath":"/es/exchanges/contract-trading/"},{"path":"/es/exchanges/copy-trading/","matchPath":"/es/exchanges/copy-trading/"},{"path":"/es/exchanges/cosmos/","matchPath":"/es/exchanges/cosmos/"},{"path":"/es/exchanges/cronos/","matchPath":"/es/exchanges/cronos/"},{"path":"/es/exchanges/crypto-index-trading/","matchPath":"/es/exchanges/crypto-index-trading/"},{"path":"/es/exchanges/crypto-to-fiat-exchanges/","matchPath":"/es/exchanges/crypto-to-fiat-exchanges/"},{"path":"/es/exchanges/cryptocurrency-brokers/","matchPath":"/es/exchanges/cryptocurrency-brokers/"},{"path":"/es/exchanges/czech-republic/","matchPath":"/es/exchanges/czech-republic/"},{"path":"/es/exchanges/dai/","matchPath":"/es/exchanges/dai/"},{"path":"/es/exchanges/day-trading/","matchPath":"/es/exchanges/day-trading/"},{"path":"/es/exchanges/decentralized/","matchPath":"/es/exchanges/decentralized/"},{"path":"/es/exchanges/demo-trading-accounts/","matchPath":"/es/exchanges/demo-trading-accounts/"},{"path":"/es/exchanges/derivatives/","matchPath":"/es/exchanges/derivatives/"},{"path":"/es/exchanges/dogecoin/","matchPath":"/es/exchanges/dogecoin/"},{"path":"/es/exchanges/dual-investment-trading/","matchPath":"/es/exchanges/dual-investment-trading/"},{"path":"/es/exchanges/egypt/","matchPath":"/es/exchanges/egypt/"},{"path":"/es/exchanges/ethereum-classic/","matchPath":"/es/exchanges/ethereum-classic/"},{"path":"/es/exchanges/europe/","matchPath":"/es/exchanges/europe/"},{"path":"/es/exchanges/filecoin/","matchPath":"/es/exchanges/filecoin/"},{"path":"/es/exchanges/for-beginners/","matchPath":"/es/exchanges/for-beginners/"},{"path":"/es/exchanges/france/","matchPath":"/es/exchanges/france/"},{"path":"/es/exchanges/futures-trading/","matchPath":"/es/exchanges/futures-trading/"},{"path":"/es/exchanges/germany/","matchPath":"/es/exchanges/germany/"},{"path":"/es/exchanges/ghana/","matchPath":"/es/exchanges/ghana/"},{"path":"/es/exchanges/greece/","matchPath":"/es/exchanges/greece/"},{"path":"/es/exchanges/grid-trading/","matchPath":"/es/exchanges/grid-trading/"},{"path":"/es/exchanges/hedera/","matchPath":"/es/exchanges/hedera/"},{"path":"/es/exchanges/hong-kong/","matchPath":"/es/exchanges/hong-kong/"},{"path":"/es/exchanges/hungary/","matchPath":"/es/exchanges/hungary/"},{"path":"/es/exchanges/hybrid/","matchPath":"/es/exchanges/hybrid/"},{"path":"/es/exchanges/immutable/","matchPath":"/es/exchanges/immutable/"},{"path":"/es/exchanges/india/","matchPath":"/es/exchanges/india/"},{"path":"/es/exchanges/indonesia/","matchPath":"/es/exchanges/indonesia/"},{"path":"/es/exchanges/injective/","matchPath":"/es/exchanges/injective/"},{"path":"/es/exchanges/ireland/","matchPath":"/es/exchanges/ireland/"},{"path":"/es/exchanges/israel/","matchPath":"/es/exchanges/israel/"},{"path":"/es/exchanges/italy/","matchPath":"/es/exchanges/italy/"},{"path":"/es/exchanges/japan/","matchPath":"/es/exchanges/japan/"},{"path":"/es/exchanges/kaspa/","matchPath":"/es/exchanges/kaspa/"},{"path":"/es/exchanges/kazakhstan/","matchPath":"/es/exchanges/kazakhstan/"},{"path":"/es/exchanges/kenya/","matchPath":"/es/exchanges/kenya/"},{"path":"/es/exchanges/korea/","matchPath":"/es/exchanges/korea/"},{"path":"/es/exchanges/latin-america/","matchPath":"/es/exchanges/latin-america/"},{"path":"/es/exchanges/lending-platforms/","matchPath":"/es/exchanges/lending-platforms/"},{"path":"/es/exchanges/leverage-trading/","matchPath":"/es/exchanges/leverage-trading/"},{"path":"/es/exchanges/liquidity-pools/","matchPath":"/es/exchanges/liquidity-pools/"},{"path":"/es/exchanges/litecoin/","matchPath":"/es/exchanges/litecoin/"},{"path":"/es/exchanges/live-trading/","matchPath":"/es/exchanges/live-trading/"},{"path":"/es/exchanges/lowest-fees/","matchPath":"/es/exchanges/lowest-fees/"},{"path":"/es/exchanges/maker/","matchPath":"/es/exchanges/maker/"},{"path":"/es/exchanges/malaysia/","matchPath":"/es/exchanges/malaysia/"},{"path":"/es/exchanges/mantle/","matchPath":"/es/exchanges/mantle/"},{"path":"/es/exchanges/margin-trading/","matchPath":"/es/exchanges/margin-trading/"},{"path":"/es/exchanges/market-making-exchanges/","matchPath":"/es/exchanges/market-making-exchanges/"},{"path":"/es/exchanges/memes/","matchPath":"/es/exchanges/memes/"},{"path":"/es/exchanges/mexico/","matchPath":"/es/exchanges/mexico/"},{"path":"/es/exchanges/middle-east/","matchPath":"/es/exchanges/middle-east/"},{"path":"/es/exchanges/monero/","matchPath":"/es/exchanges/monero/"},{"path":"/es/exchanges/morocco/","matchPath":"/es/exchanges/morocco/"},{"path":"/es/exchanges/near-protocol/","matchPath":"/es/exchanges/near-protocol/"},{"path":"/es/exchanges/neo/","matchPath":"/es/exchanges/neo/"},{"path":"/es/exchanges/netherlands/","matchPath":"/es/exchanges/netherlands/"},{"path":"/es/exchanges/new-zealand/","matchPath":"/es/exchanges/new-zealand/"},{"path":"/es/exchanges/nigeria/","matchPath":"/es/exchanges/nigeria/"},{"path":"/es/exchanges/norway/","matchPath":"/es/exchanges/norway/"},{"path":"/es/exchanges/okb/","matchPath":"/es/exchanges/okb/"},{"path":"/es/exchanges/oman/","matchPath":"/es/exchanges/oman/"},{"path":"/es/exchanges/optimism/","matchPath":"/es/exchanges/optimism/"},{"path":"/es/exchanges/options-trading/","matchPath":"/es/exchanges/options-trading/"},{"path":"/es/exchanges/p2p-crypto-exchanges/","matchPath":"/es/exchanges/p2p-crypto-exchanges/"},{"path":"/es/exchanges/pakistan/","matchPath":"/es/exchanges/pakistan/"},{"path":"/es/exchanges/paypal-deposit/","matchPath":"/es/exchanges/paypal-deposit/"},{"path":"/es/exchanges/pepe/","matchPath":"/es/exchanges/pepe/"},{"path":"/es/exchanges/perpetual-futures-trading/","matchPath":"/es/exchanges/perpetual-futures-trading/"},{"path":"/es/exchanges/peru/","matchPath":"/es/exchanges/peru/"},{"path":"/es/exchanges/philippines/","matchPath":"/es/exchanges/philippines/"},{"path":"/es/exchanges/poland/","matchPath":"/es/exchanges/poland/"},{"path":"/es/exchanges/polkadot/","matchPath":"/es/exchanges/polkadot/"},{"path":"/es/exchanges/polygon/","matchPath":"/es/exchanges/polygon/"},{"path":"/es/exchanges/portugal/","matchPath":"/es/exchanges/portugal/"},{"path":"/es/exchanges/qatar/","matchPath":"/es/exchanges/qatar/"},{"path":"/es/exchanges/recurring-buys/","matchPath":"/es/exchanges/recurring-buys/"},{"path":"/es/exchanges/render/","matchPath":"/es/exchanges/render/"},{"path":"/es/exchanges/reviews/","matchPath":"/es/exchanges/reviews/"},{"path":"/es/exchanges/ripple/","matchPath":"/es/exchanges/ripple/"},{"path":"/es/exchanges/romania/","matchPath":"/es/exchanges/romania/"},{"path":"/es/exchanges/russia/","matchPath":"/es/exchanges/russia/"},{"path":"/es/exchanges/safest/","matchPath":"/es/exchanges/safest/"},{"path":"/es/exchanges/saudi-arabia/","matchPath":"/es/exchanges/saudi-arabia/"},{"path":"/es/exchanges/savings-accounts/","matchPath":"/es/exchanges/savings-accounts/"},{"path":"/es/exchanges/serbia/","matchPath":"/es/exchanges/serbia/"},{"path":"/es/exchanges/shiba-inu/","matchPath":"/es/exchanges/shiba-inu/"},{"path":"/es/exchanges/shorting/","matchPath":"/es/exchanges/shorting/"},{"path":"/es/exchanges/singapore/","matchPath":"/es/exchanges/singapore/"},{"path":"/es/exchanges/solana/","matchPath":"/es/exchanges/solana/"},{"path":"/es/exchanges/south-africa/","matchPath":"/es/exchanges/south-africa/"},{"path":"/es/exchanges/south-america/","matchPath":"/es/exchanges/south-america/"},{"path":"/es/exchanges/stablecoins/","matchPath":"/es/exchanges/stablecoins/"},{"path":"/es/exchanges/stacks/","matchPath":"/es/exchanges/stacks/"},{"path":"/es/exchanges/staking-rewards-exchanges/","matchPath":"/es/exchanges/staking-rewards-exchanges/"},{"path":"/es/exchanges/stellar/","matchPath":"/es/exchanges/stellar/"},{"path":"/es/exchanges/sui/","matchPath":"/es/exchanges/sui/"},{"path":"/es/exchanges/swap-platforms/","matchPath":"/es/exchanges/swap-platforms/"},{"path":"/es/exchanges/switzerland/","matchPath":"/es/exchanges/switzerland/"},{"path":"/es/exchanges/taiwan/","matchPath":"/es/exchanges/taiwan/"},{"path":"/es/exchanges/tanzania/","matchPath":"/es/exchanges/tanzania/"},{"path":"/es/exchanges/tezos/","matchPath":"/es/exchanges/tezos/"},{"path":"/es/exchanges/thailand/","matchPath":"/es/exchanges/thailand/"},{"path":"/es/exchanges/tokenized-stocks-trading/","matchPath":"/es/exchanges/tokenized-stocks-trading/"},{"path":"/es/exchanges/toncoin/","matchPath":"/es/exchanges/toncoin/"},{"path":"/es/exchanges/toshi/","matchPath":"/es/exchanges/toshi/"},{"path":"/es/exchanges/tron/","matchPath":"/es/exchanges/tron/"},{"path":"/es/exchanges/trump/","matchPath":"/es/exchanges/trump/"},{"path":"/es/exchanges/turkey/","matchPath":"/es/exchanges/turkey/"},{"path":"/es/exchanges/uganda/","matchPath":"/es/exchanges/uganda/"},{"path":"/es/exchanges/ukraine/","matchPath":"/es/exchanges/ukraine/"},{"path":"/es/exchanges/uniswap/","matchPath":"/es/exchanges/uniswap/"},{"path":"/es/exchanges/united-arab-emirates/","matchPath":"/es/exchanges/united-arab-emirates/"},{"path":"/es/exchanges/united-kingdom/","matchPath":"/es/exchanges/united-kingdom/"},{"path":"/es/exchanges/usa/","matchPath":"/es/exchanges/usa/"},{"path":"/es/exchanges/usdt/","matchPath":"/es/exchanges/usdt/"},{"path":"/es/exchanges/vechain/","matchPath":"/es/exchanges/vechain/"},{"path":"/es/exchanges/vietnam/","matchPath":"/es/exchanges/vietnam/"},{"path":"/es/exchanges/zero-fee-trading/","matchPath":"/es/exchanges/zero-fee-trading/"},{"path":"/es/fx/arbitrage/","matchPath":"/es/fx/arbitrage/"},{"path":"/es/fx/basics/","matchPath":"/es/fx/basics/"},{"path":"/es/fx/brokers/","matchPath":"/es/fx/brokers/"},{"path":"/es/fx/market-analysis/","matchPath":"/es/fx/market-analysis/"},{"path":"/es/fx/regulations/","matchPath":"/es/fx/regulations/"},{"path":"/es/fx/strategies/","matchPath":"/es/fx/strategies/"},{"path":"/es/fx/tools/","matchPath":"/es/fx/tools/"},{"path":"/es/fx/trading-platforms/","matchPath":"/es/fx/trading-platforms/"},{"path":"/es/gambling-guides/blackjack-strategy/","matchPath":"/es/gambling-guides/blackjack-strategy/"},{"path":"/es/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/es/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/es/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/es/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/es/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/es/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/es/gambling-guides/poker-strategy/","matchPath":"/es/gambling-guides/poker-strategy/"},{"path":"/es/gambling-guides/roulette-strategy/","matchPath":"/es/gambling-guides/roulette-strategy/"},{"path":"/es/gambling/betting/","matchPath":"/es/gambling/betting/"},{"path":"/es/gambling/bingo/","matchPath":"/es/gambling/bingo/"},{"path":"/es/gambling/bots/","matchPath":"/es/gambling/bots/"},{"path":"/es/gambling/casino/","matchPath":"/es/gambling/casino/"},{"path":"/es/gambling/daily-contests/","matchPath":"/es/gambling/daily-contests/"},{"path":"/es/gambling/hot-games/","matchPath":"/es/gambling/hot-games/"},{"path":"/es/gambling/new-games/","matchPath":"/es/gambling/new-games/"},{"path":"/es/gambling/pachinko/","matchPath":"/es/gambling/pachinko/"},{"path":"/es/gambling/play-along/","matchPath":"/es/gambling/play-along/"},{"path":"/es/gambling/reviews/","matchPath":"/es/gambling/reviews/"},{"path":"/es/gambling/top-games/","matchPath":"/es/gambling/top-games/"},{"path":"/es/gambling/top-picks/","matchPath":"/es/gambling/top-picks/"},{"path":"/es/gambling/trending-games/","matchPath":"/es/gambling/trending-games/"},{"path":"/es/gambling/weekly-raffles/","matchPath":"/es/gambling/weekly-raffles/"},{"path":"/es/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/es/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/es/get-started/a-quick-introduction-to-crypto/","matchPath":"/es/get-started/a-quick-introduction-to-crypto/"},{"path":"/es/get-started/bitcoin-as-an-asset-class/","matchPath":"/es/get-started/bitcoin-as-an-asset-class/"},{"path":"/es/get-started/bitcoin-debit-card/","matchPath":"/es/get-started/bitcoin-debit-card/"},{"path":"/es/get-started/bitcoin-glossary/","matchPath":"/es/get-started/bitcoin-glossary/"},{"path":"/es/get-started/bitcoin-layer-2-solutions/","matchPath":"/es/get-started/bitcoin-layer-2-solutions/"},{"path":"/es/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/es/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/es/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/es/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/es/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/es/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/es/get-started/create-bitcoin-wallet/","matchPath":"/es/get-started/create-bitcoin-wallet/"},{"path":"/es/get-started/create-crypto-wallet/","matchPath":"/es/get-started/create-crypto-wallet/"},{"path":"/es/get-started/crypto-debit-card/","matchPath":"/es/get-started/crypto-debit-card/"},{"path":"/es/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/es/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/es/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/es/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/es/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/es/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/es/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/es/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/es/get-started/defi-use-cases/","matchPath":"/es/get-started/defi-use-cases/"},{"path":"/es/get-started/dex-lingo/","matchPath":"/es/get-started/dex-lingo/"},{"path":"/es/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/es/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/es/get-started/digital-asset-security/","matchPath":"/es/get-started/digital-asset-security/"},{"path":"/es/get-started/dollar-cost-averaging/","matchPath":"/es/get-started/dollar-cost-averaging/"},{"path":"/es/get-started/faq/","matchPath":"/es/get-started/faq/"},{"path":"/es/get-started/how-bitcoin-exchange-works/","matchPath":"/es/get-started/how-bitcoin-exchange-works/"},{"path":"/es/get-started/how-bitcoin-impacts-environment/","matchPath":"/es/get-started/how-bitcoin-impacts-environment/"},{"path":"/es/get-started/how-bitcoin-transactions-work/","matchPath":"/es/get-started/how-bitcoin-transactions-work/"},{"path":"/es/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/es/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/es/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/es/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/es/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/es/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/es/get-started/how-does-crypto-exchange-work/","matchPath":"/es/get-started/how-does-crypto-exchange-work/"},{"path":"/es/get-started/how-does-governance-work-in-ethereum/","matchPath":"/es/get-started/how-does-governance-work-in-ethereum/"},{"path":"/es/get-started/how-is-cryptocurrency-taxed/","matchPath":"/es/get-started/how-is-cryptocurrency-taxed/"},{"path":"/es/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/es/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/es/get-started/how-to-borrow-in-defi/","matchPath":"/es/get-started/how-to-borrow-in-defi/"},{"path":"/es/get-started/how-to-buy-an-nft/","matchPath":"/es/get-started/how-to-buy-an-nft/"},{"path":"/es/get-started/how-to-buy-bitcoin-cash/","matchPath":"/es/get-started/how-to-buy-bitcoin-cash/"},{"path":"/es/get-started/how-to-buy-bitcoin/","matchPath":"/es/get-started/how-to-buy-bitcoin/"},{"path":"/es/get-started/how-to-buy-crypto/","matchPath":"/es/get-started/how-to-buy-crypto/"},{"path":"/es/get-started/how-to-buy-eth/","matchPath":"/es/get-started/how-to-buy-eth/"},{"path":"/es/get-started/how-to-buy-insurance-in-defi/","matchPath":"/es/get-started/how-to-buy-insurance-in-defi/"},{"path":"/es/get-started/how-to-buy-verse/","matchPath":"/es/get-started/how-to-buy-verse/"},{"path":"/es/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/es/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/es/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/es/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/es/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/es/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/es/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/es/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/es/get-started/how-to-enter-a-new-chain/","matchPath":"/es/get-started/how-to-enter-a-new-chain/"},{"path":"/es/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/es/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/es/get-started/how-to-lend-in-defi/","matchPath":"/es/get-started/how-to-lend-in-defi/"},{"path":"/es/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/es/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/es/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/es/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/es/get-started/how-to-receive-bitcoin-cash/","matchPath":"/es/get-started/how-to-receive-bitcoin-cash/"},{"path":"/es/get-started/how-to-receive-bitcoin/","matchPath":"/es/get-started/how-to-receive-bitcoin/"},{"path":"/es/get-started/how-to-receive-crypto/","matchPath":"/es/get-started/how-to-receive-crypto/"},{"path":"/es/get-started/how-to-receive-ethereum/","matchPath":"/es/get-started/how-to-receive-ethereum/"},{"path":"/es/get-started/how-to-sell-bitcoin-cash/","matchPath":"/es/get-started/how-to-sell-bitcoin-cash/"},{"path":"/es/get-started/how-to-sell-bitcoin/","matchPath":"/es/get-started/how-to-sell-bitcoin/"},{"path":"/es/get-started/how-to-sell-crypto/","matchPath":"/es/get-started/how-to-sell-crypto/"},{"path":"/es/get-started/how-to-sell-verse/","matchPath":"/es/get-started/how-to-sell-verse/"},{"path":"/es/get-started/how-to-send-bitcoin-cash/","matchPath":"/es/get-started/how-to-send-bitcoin-cash/"},{"path":"/es/get-started/how-to-send-bitcoin/","matchPath":"/es/get-started/how-to-send-bitcoin/"},{"path":"/es/get-started/how-to-send-crypto/","matchPath":"/es/get-started/how-to-send-crypto/"},{"path":"/es/get-started/how-to-send-ethereum/","matchPath":"/es/get-started/how-to-send-ethereum/"},{"path":"/es/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/es/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/es/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/es/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/es/get-started/how-to-swap-crypto/","matchPath":"/es/get-started/how-to-swap-crypto/"},{"path":"/es/get-started/how-to-use-a-dex/","matchPath":"/es/get-started/how-to-use-a-dex/"},{"path":"/es/get-started/how-to-use-bitcoin-cash/","matchPath":"/es/get-started/how-to-use-bitcoin-cash/"},{"path":"/es/get-started/how-to-use-derivatives-in-defi/","matchPath":"/es/get-started/how-to-use-derivatives-in-defi/"},{"path":"/es/get-started/how-to-yield-farm-in-defi/","matchPath":"/es/get-started/how-to-yield-farm-in-defi/"},{"path":"/es/get-started/how-was-eth-initially-distributed/","matchPath":"/es/get-started/how-was-eth-initially-distributed/"},{"path":"/es/get-started/is-bitcoin-a-store-of-value/","matchPath":"/es/get-started/is-bitcoin-a-store-of-value/"},{"path":"/es/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/es/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/es/get-started/is-bitcoin-private/","matchPath":"/es/get-started/is-bitcoin-private/"},{"path":"/es/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/es/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/es/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/es/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/es/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/es/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/es/get-started/shared-wallet-multisig-use-cases/","matchPath":"/es/get-started/shared-wallet-multisig-use-cases/"},{"path":"/es/get-started/the-benefits-of-bitcoin/","matchPath":"/es/get-started/the-benefits-of-bitcoin/"},{"path":"/es/get-started/unstoppable-money/","matchPath":"/es/get-started/unstoppable-money/"},{"path":"/es/get-started/what_is_bitcoin_taproot/","matchPath":"/es/get-started/what_is_bitcoin_taproot/"},{"path":"/es/get-started/what_is_web3/","matchPath":"/es/get-started/what_is_web3/"},{"path":"/es/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/es/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/es/get-started/what-are-bitcoin-credit-cards/","matchPath":"/es/get-started/what-are-bitcoin-credit-cards/"},{"path":"/es/get-started/what-are-bitcoin-network-fees/","matchPath":"/es/get-started/what-are-bitcoin-network-fees/"},{"path":"/es/get-started/what-are-bitcoin-ordinals/","matchPath":"/es/get-started/what-are-bitcoin-ordinals/"},{"path":"/es/get-started/what-are-crypto-derivatives/","matchPath":"/es/get-started/what-are-crypto-derivatives/"},{"path":"/es/get-started/what-are-crypto-network-fees/","matchPath":"/es/get-started/what-are-crypto-network-fees/"},{"path":"/es/get-started/what-are-crypto-retirement-accounts/","matchPath":"/es/get-started/what-are-crypto-retirement-accounts/"},{"path":"/es/get-started/what-are-erc-20-tokens/","matchPath":"/es/get-started/what-are-erc-20-tokens/"},{"path":"/es/get-started/what-are-liquidity-pools/","matchPath":"/es/get-started/what-are-liquidity-pools/"},{"path":"/es/get-started/what-are-meme-coins/","matchPath":"/es/get-started/what-are-meme-coins/"},{"path":"/es/get-started/what-are-nfts/","matchPath":"/es/get-started/what-are-nfts/"},{"path":"/es/get-started/what-are-prediction-markets/","matchPath":"/es/get-started/what-are-prediction-markets/"},{"path":"/es/get-started/what-are-real-world-assets-rwa/","matchPath":"/es/get-started/what-are-real-world-assets-rwa/"},{"path":"/es/get-started/what-are-shareable-links/","matchPath":"/es/get-started/what-are-shareable-links/"},{"path":"/es/get-started/what-are-sidechains/","matchPath":"/es/get-started/what-are-sidechains/"},{"path":"/es/get-started/what-are-stablecoins/","matchPath":"/es/get-started/what-are-stablecoins/"},{"path":"/es/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/es/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/es/get-started/what-are-transaction-fees/","matchPath":"/es/get-started/what-are-transaction-fees/"},{"path":"/es/get-started/what-is-a-bitcoin-ira/","matchPath":"/es/get-started/what-is-a-bitcoin-ira/"},{"path":"/es/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/es/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/es/get-started/what-is-a-bitcoin-wallet/","matchPath":"/es/get-started/what-is-a-bitcoin-wallet/"},{"path":"/es/get-started/what-is-a-brokerage/","matchPath":"/es/get-started/what-is-a-brokerage/"},{"path":"/es/get-started/what-is-a-cex/","matchPath":"/es/get-started/what-is-a-cex/"},{"path":"/es/get-started/what-is-a-confirmation/","matchPath":"/es/get-started/what-is-a-confirmation/"},{"path":"/es/get-started/what-is-a-consensus-mechanism/","matchPath":"/es/get-started/what-is-a-consensus-mechanism/"},{"path":"/es/get-started/what-is-a-crypto-wallet/","matchPath":"/es/get-started/what-is-a-crypto-wallet/"},{"path":"/es/get-started/what-is-a-dao/","matchPath":"/es/get-started/what-is-a-dao/"},{"path":"/es/get-started/what-is-a-dApp/","matchPath":"/es/get-started/what-is-a-dApp/"},{"path":"/es/get-started/what-is-a-dex/","matchPath":"/es/get-started/what-is-a-dex/"},{"path":"/es/get-started/what-is-a-liquid-staking-token/","matchPath":"/es/get-started/what-is-a-liquid-staking-token/"},{"path":"/es/get-started/what-is-a-smart-contract/","matchPath":"/es/get-started/what-is-a-smart-contract/"},{"path":"/es/get-started/what-is-a-token-sale/","matchPath":"/es/get-started/what-is-a-token-sale/"},{"path":"/es/get-started/what-is-a-token/","matchPath":"/es/get-started/what-is-a-token/"},{"path":"/es/get-started/what-is-an-airdrop/","matchPath":"/es/get-started/what-is-an-airdrop/"},{"path":"/es/get-started/what-is-apy/","matchPath":"/es/get-started/what-is-apy/"},{"path":"/es/get-started/what-is-avalanche/","matchPath":"/es/get-started/what-is-avalanche/"},{"path":"/es/get-started/what-is-bitcoin-cash/","matchPath":"/es/get-started/what-is-bitcoin-cash/"},{"path":"/es/get-started/what-is-Bitcoin-ETF/","matchPath":"/es/get-started/what-is-Bitcoin-ETF/"},{"path":"/es/get-started/what-is-bitcoin-gambling/","matchPath":"/es/get-started/what-is-bitcoin-gambling/"},{"path":"/es/get-started/what-is-bitcoin-governance/","matchPath":"/es/get-started/what-is-bitcoin-governance/"},{"path":"/es/get-started/what-is-bitcoin-halving/","matchPath":"/es/get-started/what-is-bitcoin-halving/"},{"path":"/es/get-started/what-is-bitcoin-mining/","matchPath":"/es/get-started/what-is-bitcoin-mining/"},{"path":"/es/get-started/what-is-bitcoin-op-cat/","matchPath":"/es/get-started/what-is-bitcoin-op-cat/"},{"path":"/es/get-started/what-is-bitcoin-otc-trading/","matchPath":"/es/get-started/what-is-bitcoin-otc-trading/"},{"path":"/es/get-started/what-is-bitcoin/","matchPath":"/es/get-started/what-is-bitcoin/"},{"path":"/es/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/es/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/es/get-started/what-is-censorship-resistance/","matchPath":"/es/get-started/what-is-censorship-resistance/"},{"path":"/es/get-started/what-is-cex-education/","matchPath":"/es/get-started/what-is-cex-education/"},{"path":"/es/get-started/what-is-coin-mixer/","matchPath":"/es/get-started/what-is-coin-mixer/"},{"path":"/es/get-started/what-is-cross-chain-interoperability/","matchPath":"/es/get-started/what-is-cross-chain-interoperability/"},{"path":"/es/get-started/what-is-crypto-asset-management/","matchPath":"/es/get-started/what-is-crypto-asset-management/"},{"path":"/es/get-started/what-is-crypto-insurance/","matchPath":"/es/get-started/what-is-crypto-insurance/"},{"path":"/es/get-started/what-is-crypto-lending/","matchPath":"/es/get-started/what-is-crypto-lending/"},{"path":"/es/get-started/what-is-defi-decentralized-finance/","matchPath":"/es/get-started/what-is-defi-decentralized-finance/"},{"path":"/es/get-started/what-is-EIP-1559/","matchPath":"/es/get-started/what-is-EIP-1559/"},{"path":"/es/get-started/what-is-eth-2/","matchPath":"/es/get-started/what-is-eth-2/"},{"path":"/es/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/es/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/es/get-started/what-is-eth-used-for/","matchPath":"/es/get-started/what-is-eth-used-for/"},{"path":"/es/get-started/what-is-ethereum-monetary-policy/","matchPath":"/es/get-started/what-is-ethereum-monetary-policy/"},{"path":"/es/get-started/what-is-ethereum/","matchPath":"/es/get-started/what-is-ethereum/"},{"path":"/es/get-started/what-is-evm/","matchPath":"/es/get-started/what-is-evm/"},{"path":"/es/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/es/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/es/get-started/what-is-fractal-bitcoin/","matchPath":"/es/get-started/what-is-fractal-bitcoin/"},{"path":"/es/get-started/what-is-gas/","matchPath":"/es/get-started/what-is-gas/"},{"path":"/es/get-started/what-is-inflation/","matchPath":"/es/get-started/what-is-inflation/"},{"path":"/es/get-started/what-is-layer-2-on-ethereum/","matchPath":"/es/get-started/what-is-layer-2-on-ethereum/"},{"path":"/es/get-started/what-is-lightning-network/","matchPath":"/es/get-started/what-is-lightning-network/"},{"path":"/es/get-started/what-is-liquidity/","matchPath":"/es/get-started/what-is-liquidity/"},{"path":"/es/get-started/what-is-money/","matchPath":"/es/get-started/what-is-money/"},{"path":"/es/get-started/what-is-polygon-matic/","matchPath":"/es/get-started/what-is-polygon-matic/"},{"path":"/es/get-started/what-is-proof-of-stake/","matchPath":"/es/get-started/what-is-proof-of-stake/"},{"path":"/es/get-started/what-is-proof-of-work/","matchPath":"/es/get-started/what-is-proof-of-work/"},{"path":"/es/get-started/what-is-restaking/","matchPath":"/es/get-started/what-is-restaking/"},{"path":"/es/get-started/what-is-staking/","matchPath":"/es/get-started/what-is-staking/"},{"path":"/es/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/es/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/es/get-started/what-is-the-double-spend-problem/","matchPath":"/es/get-started/what-is-the-double-spend-problem/"},{"path":"/es/get-started/what-is-the-metaverse/","matchPath":"/es/get-started/what-is-the-metaverse/"},{"path":"/es/get-started/what-is-the-verse-development-fund/","matchPath":"/es/get-started/what-is-the-verse-development-fund/"},{"path":"/es/get-started/what-is-trading-volume/","matchPath":"/es/get-started/what-is-trading-volume/"},{"path":"/es/get-started/what-is-uni/","matchPath":"/es/get-started/what-is-uni/"},{"path":"/es/get-started/what-is-verse-community/","matchPath":"/es/get-started/what-is-verse-community/"},{"path":"/es/get-started/what-is-verse-dex/","matchPath":"/es/get-started/what-is-verse-dex/"},{"path":"/es/get-started/what-is-verse/","matchPath":"/es/get-started/what-is-verse/"},{"path":"/es/get-started/what-is-volatility/","matchPath":"/es/get-started/what-is-volatility/"},{"path":"/es/get-started/what-is-walletconnect/","matchPath":"/es/get-started/what-is-walletconnect/"},{"path":"/es/get-started/what-is-wbtc/","matchPath":"/es/get-started/what-is-wbtc/"},{"path":"/es/get-started/what-is-weth/","matchPath":"/es/get-started/what-is-weth/"},{"path":"/es/get-started/what-is-yfi/","matchPath":"/es/get-started/what-is-yfi/"},{"path":"/es/get-started/what-is-yield-farming/","matchPath":"/es/get-started/what-is-yield-farming/"},{"path":"/es/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/es/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/es/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/es/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/es/get-started/who-created-ethereum/","matchPath":"/es/get-started/who-created-ethereum/"},{"path":"/es/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/es/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/es/giftcard/history/","matchPath":"/es/giftcard/history/"},{"path":"/es/jobs/solidity/","matchPath":"/es/jobs/solidity/"},{"path":"/es/legal/cookies/","matchPath":"/es/legal/cookies/"},{"path":"/es/legal/dsar-form/","matchPath":"/es/legal/dsar-form/"},{"path":"/es/legal/faq/","matchPath":"/es/legal/faq/"},{"path":"/es/legal/privacy-policy/","matchPath":"/es/legal/privacy-policy/"},{"path":"/es/legal/user-agreement/","matchPath":"/es/legal/user-agreement/"},{"path":"/es/legal/verse-service-terms/","matchPath":"/es/legal/verse-service-terms/"},{"path":"/es/legal/wallet-service-terms/","matchPath":"/es/legal/wallet-service-terms/"},{"path":"/es/luxury/art-collectibles/","matchPath":"/es/luxury/art-collectibles/"},{"path":"/es/luxury/concierge/","matchPath":"/es/luxury/concierge/"},{"path":"/es/luxury/designer-fashion/","matchPath":"/es/luxury/designer-fashion/"},{"path":"/es/luxury/events/","matchPath":"/es/luxury/events/"},{"path":"/es/luxury/experiences/","matchPath":"/es/luxury/experiences/"},{"path":"/es/luxury/ferrari-dealers/","matchPath":"/es/luxury/ferrari-dealers/"},{"path":"/es/luxury/health-wellness/","matchPath":"/es/luxury/health-wellness/"},{"path":"/es/luxury/hotels-resorts/","matchPath":"/es/luxury/hotels-resorts/"},{"path":"/es/luxury/jewelry/","matchPath":"/es/luxury/jewelry/"},{"path":"/es/luxury/private-jets/","matchPath":"/es/luxury/private-jets/"},{"path":"/es/luxury/real-estate/","matchPath":"/es/luxury/real-estate/"},{"path":"/es/luxury/supercars/","matchPath":"/es/luxury/supercars/"},{"path":"/es/luxury/timepieces/","matchPath":"/es/luxury/timepieces/"},{"path":"/es/luxury/villas/","matchPath":"/es/luxury/villas/"},{"path":"/es/luxury/yachts/","matchPath":"/es/luxury/yachts/"},{"path":"/es/merchant-solutions/brick-mortar/","matchPath":"/es/merchant-solutions/brick-mortar/"},{"path":"/es/merchant-solutions/online-business/","matchPath":"/es/merchant-solutions/online-business/"},{"path":"/es/mining/bitcoin-cash/","matchPath":"/es/mining/bitcoin-cash/"},{"path":"/es/mining/cloud-mining/","matchPath":"/es/mining/cloud-mining/"},{"path":"/es/mining/dash/","matchPath":"/es/mining/dash/"},{"path":"/es/mining/dogecoin/","matchPath":"/es/mining/dogecoin/"},{"path":"/es/mining/kaspa/","matchPath":"/es/mining/kaspa/"},{"path":"/es/mining/litecoin/","matchPath":"/es/mining/litecoin/"},{"path":"/es/mining/monero/","matchPath":"/es/mining/monero/"},{"path":"/es/mining/ravencoin/","matchPath":"/es/mining/ravencoin/"},{"path":"/es/newsletters/btc-research/","matchPath":"/es/newsletters/btc-research/"},{"path":"/es/newsletters/games-updates/","matchPath":"/es/newsletters/games-updates/"},{"path":"/es/newsletters/price-analysis/","matchPath":"/es/newsletters/price-analysis/"},{"path":"/es/newsletters/product-updates/","matchPath":"/es/newsletters/product-updates/"},{"path":"/es/newsletters/verse-updates/","matchPath":"/es/newsletters/verse-updates/"},{"path":"/es/newsletters/week-in-review/","matchPath":"/es/newsletters/week-in-review/"},{"path":"/es/payments/gateways/","matchPath":"/es/payments/gateways/"},{"path":"/es/payments/integrations/","matchPath":"/es/payments/integrations/"},{"path":"/es/payments/merchants/","matchPath":"/es/payments/merchants/"},{"path":"/es/payments/point-of-sale/","matchPath":"/es/payments/point-of-sale/"},{"path":"/es/payments/processors/","matchPath":"/es/payments/processors/"},{"path":"/es/payments/remittances/","matchPath":"/es/payments/remittances/"},{"path":"/es/payments/solutions/","matchPath":"/es/payments/solutions/"},{"path":"/es/payments/tips/","matchPath":"/es/payments/tips/"},{"path":"/es/poker/faqs/","matchPath":"/es/poker/faqs/"},{"path":"/es/poker/how-to-play/","matchPath":"/es/poker/how-to-play/"},{"path":"/es/poker/legality/","matchPath":"/es/poker/legality/"},{"path":"/es/poker/promotions/","matchPath":"/es/poker/promotions/"},{"path":"/es/poker/room-reviews/","matchPath":"/es/poker/room-reviews/"},{"path":"/es/poker/tournaments/","matchPath":"/es/poker/tournaments/"},{"path":"/es/price/aave-aave/","matchPath":"/es/price/aave-aave/"},{"path":"/es/price/algorand-algo/","matchPath":"/es/price/algorand-algo/"},{"path":"/es/price/apecoin-ape/","matchPath":"/es/price/apecoin-ape/"},{"path":"/es/price/aptos-apt/","matchPath":"/es/price/aptos-apt/"},{"path":"/es/price/arbitrum-arb/","matchPath":"/es/price/arbitrum-arb/"},{"path":"/es/price/arweave-ar/","matchPath":"/es/price/arweave-ar/"},{"path":"/es/price/avalanche-avax/","matchPath":"/es/price/avalanche-avax/"},{"path":"/es/price/axie-infinity-axs/","matchPath":"/es/price/axie-infinity-axs/"},{"path":"/es/price/binance-usd-busd/","matchPath":"/es/price/binance-usd-busd/"},{"path":"/es/price/bitcoin-btc/","matchPath":"/es/price/bitcoin-btc/"},{"path":"/es/price/bitcoin-cash-bch/","matchPath":"/es/price/bitcoin-cash-bch/"},{"path":"/es/price/bitcoin-envuelto-wbtc/","matchPath":"/es/price/bitcoin-envuelto-wbtc/"},{"path":"/es/price/bitcoin-sv-bsv/","matchPath":"/es/price/bitcoin-sv-bsv/"},{"path":"/es/price/bittorrent-nuevo-btt/","matchPath":"/es/price/bittorrent-nuevo-btt/"},{"path":"/es/price/blur-token-blur/","matchPath":"/es/price/blur-token-blur/"},{"path":"/es/price/bnb-bnb/","matchPath":"/es/price/bnb-bnb/"},{"path":"/es/price/cardano-ada/","matchPath":"/es/price/cardano-ada/"},{"path":"/es/price/casper-cspr/","matchPath":"/es/price/casper-cspr/"},{"path":"/es/price/chainlink-link/","matchPath":"/es/price/chainlink-link/"},{"path":"/es/price/chiliz-chz/","matchPath":"/es/price/chiliz-chz/"},{"path":"/es/price/compound-comp/","matchPath":"/es/price/compound-comp/"},{"path":"/es/price/conflux-network-cfx/","matchPath":"/es/price/conflux-network-cfx/"},{"path":"/es/price/cosmos-atom/","matchPath":"/es/price/cosmos-atom/"},{"path":"/es/price/cronos-cro/","matchPath":"/es/price/cronos-cro/"},{"path":"/es/price/curve-dao-token-crv/","matchPath":"/es/price/curve-dao-token-crv/"},{"path":"/es/price/decentraland-mana/","matchPath":"/es/price/decentraland-mana/"},{"path":"/es/price/dogecoin-doge/","matchPath":"/es/price/dogecoin-doge/"},{"path":"/es/price/ecash-xec/","matchPath":"/es/price/ecash-xec/"},{"path":"/es/price/eos-eos/","matchPath":"/es/price/eos-eos/"},{"path":"/es/price/ethereum-classic-etc/","matchPath":"/es/price/ethereum-classic-etc/"},{"path":"/es/price/ethereum-eth/","matchPath":"/es/price/ethereum-eth/"},{"path":"/es/price/fantom-ftm/","matchPath":"/es/price/fantom-ftm/"},{"path":"/es/price/filecoin-fil/","matchPath":"/es/price/filecoin-fil/"},{"path":"/es/price/first-digital-usd-fdusd/","matchPath":"/es/price/first-digital-usd-fdusd/"},{"path":"/es/price/flujo-flujo/","matchPath":"/es/price/flujo-flujo/"},{"path":"/es/price/gala-gala/","matchPath":"/es/price/gala-gala/"},{"path":"/es/price/gatetoken-gt/","matchPath":"/es/price/gatetoken-gt/"},{"path":"/es/price/gmx-gmx/","matchPath":"/es/price/gmx-gmx/"},{"path":"/es/price/hedera-hbar/","matchPath":"/es/price/hedera-hbar/"},{"path":"/es/price/immutable-x-imx/","matchPath":"/es/price/immutable-x-imx/"},{"path":"/es/price/injective-inj/","matchPath":"/es/price/injective-inj/"},{"path":"/es/price/internet-computer-icp/","matchPath":"/es/price/internet-computer-icp/"},{"path":"/es/price/iota-miota/","matchPath":"/es/price/iota-miota/"},{"path":"/es/price/kava-kava/","matchPath":"/es/price/kava-kava/"},{"path":"/es/price/klaytn-klay/","matchPath":"/es/price/klaytn-klay/"},{"path":"/es/price/lido-dao-ldo/","matchPath":"/es/price/lido-dao-ldo/"},{"path":"/es/price/litecoin-ltc/","matchPath":"/es/price/litecoin-ltc/"},{"path":"/es/price/maker-mkr/","matchPath":"/es/price/maker-mkr/"},{"path":"/es/price/mantle-mnt/","matchPath":"/es/price/mantle-mnt/"},{"path":"/es/price/mina-mina/","matchPath":"/es/price/mina-mina/"},{"path":"/es/price/monero-xmr/","matchPath":"/es/price/monero-xmr/"},{"path":"/es/price/multi-collateral-dai-dai/","matchPath":"/es/price/multi-collateral-dai-dai/"},{"path":"/es/price/multiversx-egld-egld/","matchPath":"/es/price/multiversx-egld-egld/"},{"path":"/es/price/near-protocol-near/","matchPath":"/es/price/near-protocol-near/"},{"path":"/es/price/neo-neo/","matchPath":"/es/price/neo-neo/"},{"path":"/es/price/nexo-nexo/","matchPath":"/es/price/nexo-nexo/"},{"path":"/es/price/nuevo-token-bitget-bgb/","matchPath":"/es/price/nuevo-token-bitget-bgb/"},{"path":"/es/price/oasis-network-rose/","matchPath":"/es/price/oasis-network-rose/"},{"path":"/es/price/okb-okb/","matchPath":"/es/price/okb-okb/"},{"path":"/es/price/optimismo-ethereum-op/","matchPath":"/es/price/optimismo-ethereum-op/"},{"path":"/es/price/pancakeswap-cake/","matchPath":"/es/price/pancakeswap-cake/"},{"path":"/es/price/participación-frax-frax/","matchPath":"/es/price/participación-frax-frax/"},{"path":"/es/price/pax-gold-paxg/","matchPath":"/es/price/pax-gold-paxg/"},{"path":"/es/price/paxos-standard-usdp/","matchPath":"/es/price/paxos-standard-usdp/"},{"path":"/es/price/pepe-pepe/","matchPath":"/es/price/pepe-pepe/"},{"path":"/es/price/polkadot-nuevo-dot/","matchPath":"/es/price/polkadot-nuevo-dot/"},{"path":"/es/price/polygon-matic/","matchPath":"/es/price/polygon-matic/"},{"path":"/es/price/Precio del token DYDX  Precio de dYdX, Gráficos e Información/","matchPath":"/es/price/Precio del token DYDX  Precio de dYdX, Gráficos e Información/"},{"path":"/es/price/quant-qnt/","matchPath":"/es/price/quant-qnt/"},{"path":"/es/price/render-rndr/","matchPath":"/es/price/render-rndr/"},{"path":"/es/price/rocket-pool-rpl/","matchPath":"/es/price/rocket-pool-rpl/"},{"path":"/es/price/shiba-inu-shib/","matchPath":"/es/price/shiba-inu-shib/"},{"path":"/es/price/solana-sol/","matchPath":"/es/price/solana-sol/"},{"path":"/es/price/stacks-stx/","matchPath":"/es/price/stacks-stx/"},{"path":"/es/price/stellar-xlm/","matchPath":"/es/price/stellar-xlm/"},{"path":"/es/price/sui-sui/","matchPath":"/es/price/sui-sui/"},{"path":"/es/price/synthetix-snx/","matchPath":"/es/price/synthetix-snx/"},{"path":"/es/price/terra-luna-lunc/","matchPath":"/es/price/terra-luna-lunc/"},{"path":"/es/price/tether-gold-xau/","matchPath":"/es/price/tether-gold-xau/"},{"path":"/es/price/tether-usdt/","matchPath":"/es/price/tether-usdt/"},{"path":"/es/price/tezos-xtz/","matchPath":"/es/price/tezos-xtz/"},{"path":"/es/price/the-graph-grt/","matchPath":"/es/price/the-graph-grt/"},{"path":"/es/price/the-sandbox-sand/","matchPath":"/es/price/the-sandbox-sand/"},{"path":"/es/price/theta-network-theta/","matchPath":"/es/price/theta-network-theta/"},{"path":"/es/price/thorchain-rune/","matchPath":"/es/price/thorchain-rune/"},{"path":"/es/price/Token de Huobi - HT/","matchPath":"/es/price/Token de Huobi - HT/"},{"path":"/es/price/token-kucoin-kcs/","matchPath":"/es/price/token-kucoin-kcs/"},{"path":"/es/price/toncoin-ton/","matchPath":"/es/price/toncoin-ton/"},{"path":"/es/price/tron-trx/","matchPath":"/es/price/tron-trx/"},{"path":"/es/price/trueusd-tusd/","matchPath":"/es/price/trueusd-tusd/"},{"path":"/es/price/trust-wallet-token-twt/","matchPath":"/es/price/trust-wallet-token-twt/"},{"path":"/es/price/uniswap-uni/","matchPath":"/es/price/uniswap-uni/"},{"path":"/es/price/unus-sed-leo-leo/","matchPath":"/es/price/unus-sed-leo-leo/"},{"path":"/es/price/usd-coin-usdc/","matchPath":"/es/price/usd-coin-usdc/"},{"path":"/es/price/usdd-usdd/","matchPath":"/es/price/usdd-usdd/"},{"path":"/es/price/vechain-vet/","matchPath":"/es/price/vechain-vet/"},{"path":"/es/price/wootrade-woo/","matchPath":"/es/price/wootrade-woo/"},{"path":"/es/price/xdc-network-xdc/","matchPath":"/es/price/xdc-network-xdc/"},{"path":"/es/price/xrp-xrp/","matchPath":"/es/price/xrp-xrp/"},{"path":"/es/price/zcash-zec/","matchPath":"/es/price/zcash-zec/"},{"path":"/es/research/btc-research/","matchPath":"/es/research/btc-research/"},{"path":"/es/research/games-updates/","matchPath":"/es/research/games-updates/"},{"path":"/es/research/price-analysis/","matchPath":"/es/research/price-analysis/"},{"path":"/es/research/product-updates/","matchPath":"/es/research/product-updates/"},{"path":"/es/research/verse-updates/","matchPath":"/es/research/verse-updates/"},{"path":"/es/research/week-in-review/","matchPath":"/es/research/week-in-review/"},{"path":"/es/tax/calculators/","matchPath":"/es/tax/calculators/"},{"path":"/es/tax/compliance/","matchPath":"/es/tax/compliance/"},{"path":"/es/tax/forms/","matchPath":"/es/tax/forms/"},{"path":"/es/tax/guides/","matchPath":"/es/tax/guides/"},{"path":"/es/tax/laws/","matchPath":"/es/tax/laws/"},{"path":"/es/tax/professionals/","matchPath":"/es/tax/professionals/"},{"path":"/es/tax/software/","matchPath":"/es/tax/software/"},{"path":"/es/tax/strategies/","matchPath":"/es/tax/strategies/"},{"path":"/es/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/es/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/es/trading/top-contracts-for-difference/","matchPath":"/es/trading/top-contracts-for-difference/"},{"path":"/es/vpn/best-vpn-in-us/","matchPath":"/es/vpn/best-vpn-in-us/"},{"path":"/es/wallet-services/backup-options/","matchPath":"/es/wallet-services/backup-options/"},{"path":"/es/wallet-services/secure-wallet/","matchPath":"/es/wallet-services/secure-wallet/"},{"path":"/es/wallet-services/security-tips/","matchPath":"/es/wallet-services/security-tips/"},{"path":"/es/wallet-services/setup-guide/","matchPath":"/es/wallet-services/setup-guide/"},{"path":"/es/wallet-services/wallet-download/","matchPath":"/es/wallet-services/wallet-download/"},{"path":"/es/wallet/avalanche/","matchPath":"/es/wallet/avalanche/"},{"path":"/es/wallet/bitcoin/","matchPath":"/es/wallet/bitcoin/"},{"path":"/es/wallet/bnb/","matchPath":"/es/wallet/bnb/"},{"path":"/es/wallet/browser-extension/","matchPath":"/es/wallet/browser-extension/"},{"path":"/es/wallet/cardano/","matchPath":"/es/wallet/cardano/"},{"path":"/es/wallet/custodial/","matchPath":"/es/wallet/custodial/"},{"path":"/es/wallet/defi-wallets/","matchPath":"/es/wallet/defi-wallets/"},{"path":"/es/wallet/defi/","matchPath":"/es/wallet/defi/"},{"path":"/es/wallet/desktop/","matchPath":"/es/wallet/desktop/"},{"path":"/es/wallet/enterprise/","matchPath":"/es/wallet/enterprise/"},{"path":"/es/wallet/ethereum/","matchPath":"/es/wallet/ethereum/"},{"path":"/es/wallet/gaming/","matchPath":"/es/wallet/gaming/"},{"path":"/es/wallet/hardware/","matchPath":"/es/wallet/hardware/"},{"path":"/es/wallet/hodl/","matchPath":"/es/wallet/hodl/"},{"path":"/es/wallet/lightning/","matchPath":"/es/wallet/lightning/"},{"path":"/es/wallet/litecoin/","matchPath":"/es/wallet/litecoin/"},{"path":"/es/wallet/mobile/","matchPath":"/es/wallet/mobile/"},{"path":"/es/wallet/multi-signature/","matchPath":"/es/wallet/multi-signature/"},{"path":"/es/wallet/multichain/","matchPath":"/es/wallet/multichain/"},{"path":"/es/wallet/nft/","matchPath":"/es/wallet/nft/"},{"path":"/es/wallet/paper-wallets/","matchPath":"/es/wallet/paper-wallets/"},{"path":"/es/wallet/polkadot/","matchPath":"/es/wallet/polkadot/"},{"path":"/es/wallet/privacy/","matchPath":"/es/wallet/privacy/"},{"path":"/es/wallet/remittance/","matchPath":"/es/wallet/remittance/"},{"path":"/es/wallet/reviews/","matchPath":"/es/wallet/reviews/"},{"path":"/es/wallet/self-custodial/","matchPath":"/es/wallet/self-custodial/"},{"path":"/es/wallet/solana/","matchPath":"/es/wallet/solana/"},{"path":"/es/wallet/staking/","matchPath":"/es/wallet/staking/"},{"path":"/es/wallet/tezos/","matchPath":"/es/wallet/tezos/"},{"path":"/es/wallet/trading/","matchPath":"/es/wallet/trading/"},{"path":"/es/wallet/xrp/","matchPath":"/es/wallet/xrp/"},{"path":"/es/wealth-management/binance-coin/","matchPath":"/es/wealth-management/binance-coin/"},{"path":"/es/wealth-management/bitcoin-cash/","matchPath":"/es/wealth-management/bitcoin-cash/"},{"path":"/es/wealth-management/bitcoin/","matchPath":"/es/wealth-management/bitcoin/"},{"path":"/es/wealth-management/ethereum/","matchPath":"/es/wealth-management/ethereum/"},{"path":"/es/wealth-management/solana/","matchPath":"/es/wealth-management/solana/"},{"path":"/es/wealth-management/usdc/","matchPath":"/es/wealth-management/usdc/"},{"path":"/es/wealth-management/usdt-tether/","matchPath":"/es/wealth-management/usdt-tether/"},{"path":"/fr/advertise/podcast/","matchPath":"/fr/advertise/podcast/"},{"path":"/fr/bitcoin-cash-register/service-terms/","matchPath":"/fr/bitcoin-cash-register/service-terms/"},{"path":"/fr/cards/anonymous-cards/","matchPath":"/fr/cards/anonymous-cards/"},{"path":"/fr/cards/cashback-cards/","matchPath":"/fr/cards/cashback-cards/"},{"path":"/fr/cards/credit-cards/","matchPath":"/fr/cards/credit-cards/"},{"path":"/fr/cards/crypto-cards/","matchPath":"/fr/cards/crypto-cards/"},{"path":"/fr/cards/debit-cards/","matchPath":"/fr/cards/debit-cards/"},{"path":"/fr/cards/gemini-card/","matchPath":"/fr/cards/gemini-card/"},{"path":"/fr/cards/gift-cards/","matchPath":"/fr/cards/gift-cards/"},{"path":"/fr/cards/mastercard-cards/","matchPath":"/fr/cards/mastercard-cards/"},{"path":"/fr/cards/prepaid-cards/","matchPath":"/fr/cards/prepaid-cards/"},{"path":"/fr/cards/reviews/","matchPath":"/fr/cards/reviews/"},{"path":"/fr/cards/rewards-cards/","matchPath":"/fr/cards/rewards-cards/"},{"path":"/fr/cards/solana/","matchPath":"/fr/cards/solana/"},{"path":"/fr/cards/virtual-cards/","matchPath":"/fr/cards/virtual-cards/"},{"path":"/fr/cards/visa-cards/","matchPath":"/fr/cards/visa-cards/"},{"path":"/fr/cards/web3-cards/","matchPath":"/fr/cards/web3-cards/"},{"path":"/fr/conferences/africa/","matchPath":"/fr/conferences/africa/"},{"path":"/fr/conferences/ai/","matchPath":"/fr/conferences/ai/"},{"path":"/fr/conferences/asia/","matchPath":"/fr/conferences/asia/"},{"path":"/fr/conferences/australia/","matchPath":"/fr/conferences/australia/"},{"path":"/fr/conferences/avalanche/","matchPath":"/fr/conferences/avalanche/"},{"path":"/fr/conferences/bitcoin/","matchPath":"/fr/conferences/bitcoin/"},{"path":"/fr/conferences/blockchain/","matchPath":"/fr/conferences/blockchain/"},{"path":"/fr/conferences/bnb/","matchPath":"/fr/conferences/bnb/"},{"path":"/fr/conferences/canada/","matchPath":"/fr/conferences/canada/"},{"path":"/fr/conferences/cardano/","matchPath":"/fr/conferences/cardano/"},{"path":"/fr/conferences/crypto/","matchPath":"/fr/conferences/crypto/"},{"path":"/fr/conferences/defi/","matchPath":"/fr/conferences/defi/"},{"path":"/fr/conferences/dubai/","matchPath":"/fr/conferences/dubai/"},{"path":"/fr/conferences/ethereum/","matchPath":"/fr/conferences/ethereum/"},{"path":"/fr/conferences/europe/","matchPath":"/fr/conferences/europe/"},{"path":"/fr/conferences/games/","matchPath":"/fr/conferences/games/"},{"path":"/fr/conferences/japan/","matchPath":"/fr/conferences/japan/"},{"path":"/fr/conferences/latam/","matchPath":"/fr/conferences/latam/"},{"path":"/fr/conferences/litecoin/","matchPath":"/fr/conferences/litecoin/"},{"path":"/fr/conferences/memes/","matchPath":"/fr/conferences/memes/"},{"path":"/fr/conferences/metaverse/","matchPath":"/fr/conferences/metaverse/"},{"path":"/fr/conferences/middle-east/","matchPath":"/fr/conferences/middle-east/"},{"path":"/fr/conferences/nft/","matchPath":"/fr/conferences/nft/"},{"path":"/fr/conferences/polkadot/","matchPath":"/fr/conferences/polkadot/"},{"path":"/fr/conferences/singapore/","matchPath":"/fr/conferences/singapore/"},{"path":"/fr/conferences/solana/","matchPath":"/fr/conferences/solana/"},{"path":"/fr/conferences/startups/","matchPath":"/fr/conferences/startups/"},{"path":"/fr/conferences/tech/","matchPath":"/fr/conferences/tech/"},{"path":"/fr/conferences/tezos/","matchPath":"/fr/conferences/tezos/"},{"path":"/fr/conferences/usa/","matchPath":"/fr/conferences/usa/"},{"path":"/fr/conferences/web3/","matchPath":"/fr/conferences/web3/"},{"path":"/fr/conferences/xrp/","matchPath":"/fr/conferences/xrp/"},{"path":"/fr/crypto-education/beginner-guides/","matchPath":"/fr/crypto-education/beginner-guides/"},{"path":"/fr/crypto-education/blockchain-basics/","matchPath":"/fr/crypto-education/blockchain-basics/"},{"path":"/fr/crypto-education/buying-guides/","matchPath":"/fr/crypto-education/buying-guides/"},{"path":"/fr/crypto-education/tax-information/","matchPath":"/fr/crypto-education/tax-information/"},{"path":"/fr/crypto-venture-network/accelerators/","matchPath":"/fr/crypto-venture-network/accelerators/"},{"path":"/fr/crypto-venture-network/incubators/","matchPath":"/fr/crypto-venture-network/incubators/"},{"path":"/fr/crypto-venture-network/portfolio-companies/","matchPath":"/fr/crypto-venture-network/portfolio-companies/"},{"path":"/fr/crypto-venture-network/syndicates/","matchPath":"/fr/crypto-venture-network/syndicates/"},{"path":"/fr/crypto-venture-network/venture-capital-funds/","matchPath":"/fr/crypto-venture-network/venture-capital-funds/"},{"path":"/fr/decentralized-exchanges/best-practices/","matchPath":"/fr/decentralized-exchanges/best-practices/"},{"path":"/fr/decentralized-exchanges/defi-articles/","matchPath":"/fr/decentralized-exchanges/defi-articles/"},{"path":"/fr/decentralized-exchanges/dex-overview/","matchPath":"/fr/decentralized-exchanges/dex-overview/"},{"path":"/fr/decentralized-exchanges/swap-tutorials/","matchPath":"/fr/decentralized-exchanges/swap-tutorials/"},{"path":"/fr/depin/how-to-buy-depin/","matchPath":"/fr/depin/how-to-buy-depin/"},{"path":"/fr/directory/cards/","matchPath":"/fr/directory/cards/"},{"path":"/fr/directory/conferences/","matchPath":"/fr/directory/conferences/"},{"path":"/fr/directory/exchanges/","matchPath":"/fr/directory/exchanges/"},{"path":"/fr/directory/gambling/","matchPath":"/fr/directory/gambling/"},{"path":"/fr/directory/mining/","matchPath":"/fr/directory/mining/"},{"path":"/fr/directory/wallets/","matchPath":"/fr/directory/wallets/"},{"path":"/fr/exchanges/aave/","matchPath":"/fr/exchanges/aave/"},{"path":"/fr/exchanges/algeria/","matchPath":"/fr/exchanges/algeria/"},{"path":"/fr/exchanges/algorithmic-trading-platforms/","matchPath":"/fr/exchanges/algorithmic-trading-platforms/"},{"path":"/fr/exchanges/altcoins/","matchPath":"/fr/exchanges/altcoins/"},{"path":"/fr/exchanges/anonymous-exchanges/","matchPath":"/fr/exchanges/anonymous-exchanges/"},{"path":"/fr/exchanges/aptos/","matchPath":"/fr/exchanges/aptos/"},{"path":"/fr/exchanges/arbitrage-bots/","matchPath":"/fr/exchanges/arbitrage-bots/"},{"path":"/fr/exchanges/arbitrum/","matchPath":"/fr/exchanges/arbitrum/"},{"path":"/fr/exchanges/argentina/","matchPath":"/fr/exchanges/argentina/"},{"path":"/fr/exchanges/artificial-superintelligence-alliance/","matchPath":"/fr/exchanges/artificial-superintelligence-alliance/"},{"path":"/fr/exchanges/asia/","matchPath":"/fr/exchanges/asia/"},{"path":"/fr/exchanges/australia/","matchPath":"/fr/exchanges/australia/"},{"path":"/fr/exchanges/auto-dca/","matchPath":"/fr/exchanges/auto-dca/"},{"path":"/fr/exchanges/automated-trading/","matchPath":"/fr/exchanges/automated-trading/"},{"path":"/fr/exchanges/avalanche/","matchPath":"/fr/exchanges/avalanche/"},{"path":"/fr/exchanges/bahrain/","matchPath":"/fr/exchanges/bahrain/"},{"path":"/fr/exchanges/bangladesh/","matchPath":"/fr/exchanges/bangladesh/"},{"path":"/fr/exchanges/base/","matchPath":"/fr/exchanges/base/"},{"path":"/fr/exchanges/binance-coin/","matchPath":"/fr/exchanges/binance-coin/"},{"path":"/fr/exchanges/binary-options/","matchPath":"/fr/exchanges/binary-options/"},{"path":"/fr/exchanges/bitcoin-cash/","matchPath":"/fr/exchanges/bitcoin-cash/"},{"path":"/fr/exchanges/bittensor/","matchPath":"/fr/exchanges/bittensor/"},{"path":"/fr/exchanges/brazil/","matchPath":"/fr/exchanges/brazil/"},{"path":"/fr/exchanges/canada/","matchPath":"/fr/exchanges/canada/"},{"path":"/fr/exchanges/cardano/","matchPath":"/fr/exchanges/cardano/"},{"path":"/fr/exchanges/central-america/","matchPath":"/fr/exchanges/central-america/"},{"path":"/fr/exchanges/centralized/","matchPath":"/fr/exchanges/centralized/"},{"path":"/fr/exchanges/chainlink/","matchPath":"/fr/exchanges/chainlink/"},{"path":"/fr/exchanges/chile/","matchPath":"/fr/exchanges/chile/"},{"path":"/fr/exchanges/china/","matchPath":"/fr/exchanges/china/"},{"path":"/fr/exchanges/colombia/","matchPath":"/fr/exchanges/colombia/"},{"path":"/fr/exchanges/congo/","matchPath":"/fr/exchanges/congo/"},{"path":"/fr/exchanges/contract-trading/","matchPath":"/fr/exchanges/contract-trading/"},{"path":"/fr/exchanges/copy-trading/","matchPath":"/fr/exchanges/copy-trading/"},{"path":"/fr/exchanges/cosmos/","matchPath":"/fr/exchanges/cosmos/"},{"path":"/fr/exchanges/cronos/","matchPath":"/fr/exchanges/cronos/"},{"path":"/fr/exchanges/crypto-index-trading/","matchPath":"/fr/exchanges/crypto-index-trading/"},{"path":"/fr/exchanges/crypto-to-fiat-exchanges/","matchPath":"/fr/exchanges/crypto-to-fiat-exchanges/"},{"path":"/fr/exchanges/cryptocurrency-brokers/","matchPath":"/fr/exchanges/cryptocurrency-brokers/"},{"path":"/fr/exchanges/czech-republic/","matchPath":"/fr/exchanges/czech-republic/"},{"path":"/fr/exchanges/dai/","matchPath":"/fr/exchanges/dai/"},{"path":"/fr/exchanges/day-trading/","matchPath":"/fr/exchanges/day-trading/"},{"path":"/fr/exchanges/decentralized/","matchPath":"/fr/exchanges/decentralized/"},{"path":"/fr/exchanges/demo-trading-accounts/","matchPath":"/fr/exchanges/demo-trading-accounts/"},{"path":"/fr/exchanges/derivatives/","matchPath":"/fr/exchanges/derivatives/"},{"path":"/fr/exchanges/dogecoin/","matchPath":"/fr/exchanges/dogecoin/"},{"path":"/fr/exchanges/dual-investment-trading/","matchPath":"/fr/exchanges/dual-investment-trading/"},{"path":"/fr/exchanges/egypt/","matchPath":"/fr/exchanges/egypt/"},{"path":"/fr/exchanges/ethereum-classic/","matchPath":"/fr/exchanges/ethereum-classic/"},{"path":"/fr/exchanges/europe/","matchPath":"/fr/exchanges/europe/"},{"path":"/fr/exchanges/filecoin/","matchPath":"/fr/exchanges/filecoin/"},{"path":"/fr/exchanges/for-beginners/","matchPath":"/fr/exchanges/for-beginners/"},{"path":"/fr/exchanges/france/","matchPath":"/fr/exchanges/france/"},{"path":"/fr/exchanges/futures-trading/","matchPath":"/fr/exchanges/futures-trading/"},{"path":"/fr/exchanges/germany/","matchPath":"/fr/exchanges/germany/"},{"path":"/fr/exchanges/ghana/","matchPath":"/fr/exchanges/ghana/"},{"path":"/fr/exchanges/greece/","matchPath":"/fr/exchanges/greece/"},{"path":"/fr/exchanges/grid-trading/","matchPath":"/fr/exchanges/grid-trading/"},{"path":"/fr/exchanges/hedera/","matchPath":"/fr/exchanges/hedera/"},{"path":"/fr/exchanges/hong-kong/","matchPath":"/fr/exchanges/hong-kong/"},{"path":"/fr/exchanges/hungary/","matchPath":"/fr/exchanges/hungary/"},{"path":"/fr/exchanges/hybrid/","matchPath":"/fr/exchanges/hybrid/"},{"path":"/fr/exchanges/immutable/","matchPath":"/fr/exchanges/immutable/"},{"path":"/fr/exchanges/india/","matchPath":"/fr/exchanges/india/"},{"path":"/fr/exchanges/indonesia/","matchPath":"/fr/exchanges/indonesia/"},{"path":"/fr/exchanges/injective/","matchPath":"/fr/exchanges/injective/"},{"path":"/fr/exchanges/ireland/","matchPath":"/fr/exchanges/ireland/"},{"path":"/fr/exchanges/israel/","matchPath":"/fr/exchanges/israel/"},{"path":"/fr/exchanges/italy/","matchPath":"/fr/exchanges/italy/"},{"path":"/fr/exchanges/japan/","matchPath":"/fr/exchanges/japan/"},{"path":"/fr/exchanges/kaspa/","matchPath":"/fr/exchanges/kaspa/"},{"path":"/fr/exchanges/kazakhstan/","matchPath":"/fr/exchanges/kazakhstan/"},{"path":"/fr/exchanges/kenya/","matchPath":"/fr/exchanges/kenya/"},{"path":"/fr/exchanges/korea/","matchPath":"/fr/exchanges/korea/"},{"path":"/fr/exchanges/latin-america/","matchPath":"/fr/exchanges/latin-america/"},{"path":"/fr/exchanges/lending-platforms/","matchPath":"/fr/exchanges/lending-platforms/"},{"path":"/fr/exchanges/leverage-trading/","matchPath":"/fr/exchanges/leverage-trading/"},{"path":"/fr/exchanges/liquidity-pools/","matchPath":"/fr/exchanges/liquidity-pools/"},{"path":"/fr/exchanges/litecoin/","matchPath":"/fr/exchanges/litecoin/"},{"path":"/fr/exchanges/live-trading/","matchPath":"/fr/exchanges/live-trading/"},{"path":"/fr/exchanges/lowest-fees/","matchPath":"/fr/exchanges/lowest-fees/"},{"path":"/fr/exchanges/maker/","matchPath":"/fr/exchanges/maker/"},{"path":"/fr/exchanges/malaysia/","matchPath":"/fr/exchanges/malaysia/"},{"path":"/fr/exchanges/mantle/","matchPath":"/fr/exchanges/mantle/"},{"path":"/fr/exchanges/margin-trading/","matchPath":"/fr/exchanges/margin-trading/"},{"path":"/fr/exchanges/market-making-exchanges/","matchPath":"/fr/exchanges/market-making-exchanges/"},{"path":"/fr/exchanges/memes/","matchPath":"/fr/exchanges/memes/"},{"path":"/fr/exchanges/mexico/","matchPath":"/fr/exchanges/mexico/"},{"path":"/fr/exchanges/middle-east/","matchPath":"/fr/exchanges/middle-east/"},{"path":"/fr/exchanges/monero/","matchPath":"/fr/exchanges/monero/"},{"path":"/fr/exchanges/morocco/","matchPath":"/fr/exchanges/morocco/"},{"path":"/fr/exchanges/near-protocol/","matchPath":"/fr/exchanges/near-protocol/"},{"path":"/fr/exchanges/neo/","matchPath":"/fr/exchanges/neo/"},{"path":"/fr/exchanges/netherlands/","matchPath":"/fr/exchanges/netherlands/"},{"path":"/fr/exchanges/new-zealand/","matchPath":"/fr/exchanges/new-zealand/"},{"path":"/fr/exchanges/nigeria/","matchPath":"/fr/exchanges/nigeria/"},{"path":"/fr/exchanges/norway/","matchPath":"/fr/exchanges/norway/"},{"path":"/fr/exchanges/okb/","matchPath":"/fr/exchanges/okb/"},{"path":"/fr/exchanges/oman/","matchPath":"/fr/exchanges/oman/"},{"path":"/fr/exchanges/optimism/","matchPath":"/fr/exchanges/optimism/"},{"path":"/fr/exchanges/options-trading/","matchPath":"/fr/exchanges/options-trading/"},{"path":"/fr/exchanges/p2p-crypto-exchanges/","matchPath":"/fr/exchanges/p2p-crypto-exchanges/"},{"path":"/fr/exchanges/pakistan/","matchPath":"/fr/exchanges/pakistan/"},{"path":"/fr/exchanges/paypal-deposit/","matchPath":"/fr/exchanges/paypal-deposit/"},{"path":"/fr/exchanges/pepe/","matchPath":"/fr/exchanges/pepe/"},{"path":"/fr/exchanges/perpetual-futures-trading/","matchPath":"/fr/exchanges/perpetual-futures-trading/"},{"path":"/fr/exchanges/peru/","matchPath":"/fr/exchanges/peru/"},{"path":"/fr/exchanges/philippines/","matchPath":"/fr/exchanges/philippines/"},{"path":"/fr/exchanges/poland/","matchPath":"/fr/exchanges/poland/"},{"path":"/fr/exchanges/polkadot/","matchPath":"/fr/exchanges/polkadot/"},{"path":"/fr/exchanges/polygon/","matchPath":"/fr/exchanges/polygon/"},{"path":"/fr/exchanges/portugal/","matchPath":"/fr/exchanges/portugal/"},{"path":"/fr/exchanges/qatar/","matchPath":"/fr/exchanges/qatar/"},{"path":"/fr/exchanges/recurring-buys/","matchPath":"/fr/exchanges/recurring-buys/"},{"path":"/fr/exchanges/render/","matchPath":"/fr/exchanges/render/"},{"path":"/fr/exchanges/reviews/","matchPath":"/fr/exchanges/reviews/"},{"path":"/fr/exchanges/ripple/","matchPath":"/fr/exchanges/ripple/"},{"path":"/fr/exchanges/romania/","matchPath":"/fr/exchanges/romania/"},{"path":"/fr/exchanges/russia/","matchPath":"/fr/exchanges/russia/"},{"path":"/fr/exchanges/safest/","matchPath":"/fr/exchanges/safest/"},{"path":"/fr/exchanges/saudi-arabia/","matchPath":"/fr/exchanges/saudi-arabia/"},{"path":"/fr/exchanges/savings-accounts/","matchPath":"/fr/exchanges/savings-accounts/"},{"path":"/fr/exchanges/serbia/","matchPath":"/fr/exchanges/serbia/"},{"path":"/fr/exchanges/shiba-inu/","matchPath":"/fr/exchanges/shiba-inu/"},{"path":"/fr/exchanges/shorting/","matchPath":"/fr/exchanges/shorting/"},{"path":"/fr/exchanges/singapore/","matchPath":"/fr/exchanges/singapore/"},{"path":"/fr/exchanges/solana/","matchPath":"/fr/exchanges/solana/"},{"path":"/fr/exchanges/south-africa/","matchPath":"/fr/exchanges/south-africa/"},{"path":"/fr/exchanges/south-america/","matchPath":"/fr/exchanges/south-america/"},{"path":"/fr/exchanges/stablecoins/","matchPath":"/fr/exchanges/stablecoins/"},{"path":"/fr/exchanges/stacks/","matchPath":"/fr/exchanges/stacks/"},{"path":"/fr/exchanges/staking-rewards-exchanges/","matchPath":"/fr/exchanges/staking-rewards-exchanges/"},{"path":"/fr/exchanges/stellar/","matchPath":"/fr/exchanges/stellar/"},{"path":"/fr/exchanges/sui/","matchPath":"/fr/exchanges/sui/"},{"path":"/fr/exchanges/swap-platforms/","matchPath":"/fr/exchanges/swap-platforms/"},{"path":"/fr/exchanges/switzerland/","matchPath":"/fr/exchanges/switzerland/"},{"path":"/fr/exchanges/taiwan/","matchPath":"/fr/exchanges/taiwan/"},{"path":"/fr/exchanges/tanzania/","matchPath":"/fr/exchanges/tanzania/"},{"path":"/fr/exchanges/tezos/","matchPath":"/fr/exchanges/tezos/"},{"path":"/fr/exchanges/thailand/","matchPath":"/fr/exchanges/thailand/"},{"path":"/fr/exchanges/tokenized-stocks-trading/","matchPath":"/fr/exchanges/tokenized-stocks-trading/"},{"path":"/fr/exchanges/toncoin/","matchPath":"/fr/exchanges/toncoin/"},{"path":"/fr/exchanges/toshi/","matchPath":"/fr/exchanges/toshi/"},{"path":"/fr/exchanges/tron/","matchPath":"/fr/exchanges/tron/"},{"path":"/fr/exchanges/trump/","matchPath":"/fr/exchanges/trump/"},{"path":"/fr/exchanges/turkey/","matchPath":"/fr/exchanges/turkey/"},{"path":"/fr/exchanges/uganda/","matchPath":"/fr/exchanges/uganda/"},{"path":"/fr/exchanges/ukraine/","matchPath":"/fr/exchanges/ukraine/"},{"path":"/fr/exchanges/uniswap/","matchPath":"/fr/exchanges/uniswap/"},{"path":"/fr/exchanges/united-arab-emirates/","matchPath":"/fr/exchanges/united-arab-emirates/"},{"path":"/fr/exchanges/united-kingdom/","matchPath":"/fr/exchanges/united-kingdom/"},{"path":"/fr/exchanges/usa/","matchPath":"/fr/exchanges/usa/"},{"path":"/fr/exchanges/usdt/","matchPath":"/fr/exchanges/usdt/"},{"path":"/fr/exchanges/vechain/","matchPath":"/fr/exchanges/vechain/"},{"path":"/fr/exchanges/vietnam/","matchPath":"/fr/exchanges/vietnam/"},{"path":"/fr/exchanges/zero-fee-trading/","matchPath":"/fr/exchanges/zero-fee-trading/"},{"path":"/fr/fx/arbitrage/","matchPath":"/fr/fx/arbitrage/"},{"path":"/fr/fx/basics/","matchPath":"/fr/fx/basics/"},{"path":"/fr/fx/brokers/","matchPath":"/fr/fx/brokers/"},{"path":"/fr/fx/market-analysis/","matchPath":"/fr/fx/market-analysis/"},{"path":"/fr/fx/regulations/","matchPath":"/fr/fx/regulations/"},{"path":"/fr/fx/strategies/","matchPath":"/fr/fx/strategies/"},{"path":"/fr/fx/tools/","matchPath":"/fr/fx/tools/"},{"path":"/fr/fx/trading-platforms/","matchPath":"/fr/fx/trading-platforms/"},{"path":"/fr/gambling-guides/blackjack-strategy/","matchPath":"/fr/gambling-guides/blackjack-strategy/"},{"path":"/fr/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/fr/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/fr/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/fr/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/fr/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/fr/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/fr/gambling-guides/poker-strategy/","matchPath":"/fr/gambling-guides/poker-strategy/"},{"path":"/fr/gambling-guides/roulette-strategy/","matchPath":"/fr/gambling-guides/roulette-strategy/"},{"path":"/fr/gambling/betting/","matchPath":"/fr/gambling/betting/"},{"path":"/fr/gambling/bingo/","matchPath":"/fr/gambling/bingo/"},{"path":"/fr/gambling/bots/","matchPath":"/fr/gambling/bots/"},{"path":"/fr/gambling/casino/","matchPath":"/fr/gambling/casino/"},{"path":"/fr/gambling/daily-contests/","matchPath":"/fr/gambling/daily-contests/"},{"path":"/fr/gambling/hot-games/","matchPath":"/fr/gambling/hot-games/"},{"path":"/fr/gambling/new-games/","matchPath":"/fr/gambling/new-games/"},{"path":"/fr/gambling/pachinko/","matchPath":"/fr/gambling/pachinko/"},{"path":"/fr/gambling/play-along/","matchPath":"/fr/gambling/play-along/"},{"path":"/fr/gambling/reviews/","matchPath":"/fr/gambling/reviews/"},{"path":"/fr/gambling/top-games/","matchPath":"/fr/gambling/top-games/"},{"path":"/fr/gambling/top-picks/","matchPath":"/fr/gambling/top-picks/"},{"path":"/fr/gambling/trending-games/","matchPath":"/fr/gambling/trending-games/"},{"path":"/fr/gambling/weekly-raffles/","matchPath":"/fr/gambling/weekly-raffles/"},{"path":"/fr/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/fr/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/fr/get-started/a-quick-introduction-to-crypto/","matchPath":"/fr/get-started/a-quick-introduction-to-crypto/"},{"path":"/fr/get-started/bitcoin-as-an-asset-class/","matchPath":"/fr/get-started/bitcoin-as-an-asset-class/"},{"path":"/fr/get-started/bitcoin-debit-card/","matchPath":"/fr/get-started/bitcoin-debit-card/"},{"path":"/fr/get-started/bitcoin-glossary/","matchPath":"/fr/get-started/bitcoin-glossary/"},{"path":"/fr/get-started/bitcoin-layer-2-solutions/","matchPath":"/fr/get-started/bitcoin-layer-2-solutions/"},{"path":"/fr/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/fr/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/fr/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/fr/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/fr/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/fr/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/fr/get-started/create-bitcoin-wallet/","matchPath":"/fr/get-started/create-bitcoin-wallet/"},{"path":"/fr/get-started/create-crypto-wallet/","matchPath":"/fr/get-started/create-crypto-wallet/"},{"path":"/fr/get-started/crypto-debit-card/","matchPath":"/fr/get-started/crypto-debit-card/"},{"path":"/fr/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/fr/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/fr/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/fr/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/fr/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/fr/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/fr/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/fr/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/fr/get-started/defi-use-cases/","matchPath":"/fr/get-started/defi-use-cases/"},{"path":"/fr/get-started/dex-lingo/","matchPath":"/fr/get-started/dex-lingo/"},{"path":"/fr/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/fr/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/fr/get-started/digital-asset-security/","matchPath":"/fr/get-started/digital-asset-security/"},{"path":"/fr/get-started/dollar-cost-averaging/","matchPath":"/fr/get-started/dollar-cost-averaging/"},{"path":"/fr/get-started/faq/","matchPath":"/fr/get-started/faq/"},{"path":"/fr/get-started/how-bitcoin-exchange-works/","matchPath":"/fr/get-started/how-bitcoin-exchange-works/"},{"path":"/fr/get-started/how-bitcoin-impacts-environment/","matchPath":"/fr/get-started/how-bitcoin-impacts-environment/"},{"path":"/fr/get-started/how-bitcoin-transactions-work/","matchPath":"/fr/get-started/how-bitcoin-transactions-work/"},{"path":"/fr/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/fr/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/fr/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/fr/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/fr/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/fr/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/fr/get-started/how-does-crypto-exchange-work/","matchPath":"/fr/get-started/how-does-crypto-exchange-work/"},{"path":"/fr/get-started/how-does-governance-work-in-ethereum/","matchPath":"/fr/get-started/how-does-governance-work-in-ethereum/"},{"path":"/fr/get-started/how-is-cryptocurrency-taxed/","matchPath":"/fr/get-started/how-is-cryptocurrency-taxed/"},{"path":"/fr/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/fr/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/fr/get-started/how-to-borrow-in-defi/","matchPath":"/fr/get-started/how-to-borrow-in-defi/"},{"path":"/fr/get-started/how-to-buy-an-nft/","matchPath":"/fr/get-started/how-to-buy-an-nft/"},{"path":"/fr/get-started/how-to-buy-bitcoin-cash/","matchPath":"/fr/get-started/how-to-buy-bitcoin-cash/"},{"path":"/fr/get-started/how-to-buy-bitcoin/","matchPath":"/fr/get-started/how-to-buy-bitcoin/"},{"path":"/fr/get-started/how-to-buy-crypto/","matchPath":"/fr/get-started/how-to-buy-crypto/"},{"path":"/fr/get-started/how-to-buy-eth/","matchPath":"/fr/get-started/how-to-buy-eth/"},{"path":"/fr/get-started/how-to-buy-insurance-in-defi/","matchPath":"/fr/get-started/how-to-buy-insurance-in-defi/"},{"path":"/fr/get-started/how-to-buy-verse/","matchPath":"/fr/get-started/how-to-buy-verse/"},{"path":"/fr/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/fr/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/fr/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/fr/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/fr/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/fr/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/fr/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/fr/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/fr/get-started/how-to-enter-a-new-chain/","matchPath":"/fr/get-started/how-to-enter-a-new-chain/"},{"path":"/fr/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/fr/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/fr/get-started/how-to-lend-in-defi/","matchPath":"/fr/get-started/how-to-lend-in-defi/"},{"path":"/fr/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/fr/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/fr/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/fr/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/fr/get-started/how-to-receive-bitcoin-cash/","matchPath":"/fr/get-started/how-to-receive-bitcoin-cash/"},{"path":"/fr/get-started/how-to-receive-bitcoin/","matchPath":"/fr/get-started/how-to-receive-bitcoin/"},{"path":"/fr/get-started/how-to-receive-crypto/","matchPath":"/fr/get-started/how-to-receive-crypto/"},{"path":"/fr/get-started/how-to-receive-ethereum/","matchPath":"/fr/get-started/how-to-receive-ethereum/"},{"path":"/fr/get-started/how-to-sell-bitcoin-cash/","matchPath":"/fr/get-started/how-to-sell-bitcoin-cash/"},{"path":"/fr/get-started/how-to-sell-bitcoin/","matchPath":"/fr/get-started/how-to-sell-bitcoin/"},{"path":"/fr/get-started/how-to-sell-crypto/","matchPath":"/fr/get-started/how-to-sell-crypto/"},{"path":"/fr/get-started/how-to-sell-verse/","matchPath":"/fr/get-started/how-to-sell-verse/"},{"path":"/fr/get-started/how-to-send-bitcoin-cash/","matchPath":"/fr/get-started/how-to-send-bitcoin-cash/"},{"path":"/fr/get-started/how-to-send-bitcoin/","matchPath":"/fr/get-started/how-to-send-bitcoin/"},{"path":"/fr/get-started/how-to-send-crypto/","matchPath":"/fr/get-started/how-to-send-crypto/"},{"path":"/fr/get-started/how-to-send-ethereum/","matchPath":"/fr/get-started/how-to-send-ethereum/"},{"path":"/fr/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/fr/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/fr/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/fr/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/fr/get-started/how-to-swap-crypto/","matchPath":"/fr/get-started/how-to-swap-crypto/"},{"path":"/fr/get-started/how-to-use-a-dex/","matchPath":"/fr/get-started/how-to-use-a-dex/"},{"path":"/fr/get-started/how-to-use-bitcoin-cash/","matchPath":"/fr/get-started/how-to-use-bitcoin-cash/"},{"path":"/fr/get-started/how-to-use-derivatives-in-defi/","matchPath":"/fr/get-started/how-to-use-derivatives-in-defi/"},{"path":"/fr/get-started/how-to-yield-farm-in-defi/","matchPath":"/fr/get-started/how-to-yield-farm-in-defi/"},{"path":"/fr/get-started/how-was-eth-initially-distributed/","matchPath":"/fr/get-started/how-was-eth-initially-distributed/"},{"path":"/fr/get-started/is-bitcoin-a-store-of-value/","matchPath":"/fr/get-started/is-bitcoin-a-store-of-value/"},{"path":"/fr/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/fr/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/fr/get-started/is-bitcoin-private/","matchPath":"/fr/get-started/is-bitcoin-private/"},{"path":"/fr/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/fr/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/fr/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/fr/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/fr/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/fr/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/fr/get-started/shared-wallet-multisig-use-cases/","matchPath":"/fr/get-started/shared-wallet-multisig-use-cases/"},{"path":"/fr/get-started/the-benefits-of-bitcoin/","matchPath":"/fr/get-started/the-benefits-of-bitcoin/"},{"path":"/fr/get-started/unstoppable-money/","matchPath":"/fr/get-started/unstoppable-money/"},{"path":"/fr/get-started/what_is_bitcoin_taproot/","matchPath":"/fr/get-started/what_is_bitcoin_taproot/"},{"path":"/fr/get-started/what_is_web3/","matchPath":"/fr/get-started/what_is_web3/"},{"path":"/fr/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/fr/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/fr/get-started/what-are-bitcoin-credit-cards/","matchPath":"/fr/get-started/what-are-bitcoin-credit-cards/"},{"path":"/fr/get-started/what-are-bitcoin-network-fees/","matchPath":"/fr/get-started/what-are-bitcoin-network-fees/"},{"path":"/fr/get-started/what-are-bitcoin-ordinals/","matchPath":"/fr/get-started/what-are-bitcoin-ordinals/"},{"path":"/fr/get-started/what-are-crypto-derivatives/","matchPath":"/fr/get-started/what-are-crypto-derivatives/"},{"path":"/fr/get-started/what-are-crypto-network-fees/","matchPath":"/fr/get-started/what-are-crypto-network-fees/"},{"path":"/fr/get-started/what-are-crypto-retirement-accounts/","matchPath":"/fr/get-started/what-are-crypto-retirement-accounts/"},{"path":"/fr/get-started/what-are-erc-20-tokens/","matchPath":"/fr/get-started/what-are-erc-20-tokens/"},{"path":"/fr/get-started/what-are-liquidity-pools/","matchPath":"/fr/get-started/what-are-liquidity-pools/"},{"path":"/fr/get-started/what-are-meme-coins/","matchPath":"/fr/get-started/what-are-meme-coins/"},{"path":"/fr/get-started/what-are-nfts/","matchPath":"/fr/get-started/what-are-nfts/"},{"path":"/fr/get-started/what-are-prediction-markets/","matchPath":"/fr/get-started/what-are-prediction-markets/"},{"path":"/fr/get-started/what-are-real-world-assets-rwa/","matchPath":"/fr/get-started/what-are-real-world-assets-rwa/"},{"path":"/fr/get-started/what-are-shareable-links/","matchPath":"/fr/get-started/what-are-shareable-links/"},{"path":"/fr/get-started/what-are-sidechains/","matchPath":"/fr/get-started/what-are-sidechains/"},{"path":"/fr/get-started/what-are-stablecoins/","matchPath":"/fr/get-started/what-are-stablecoins/"},{"path":"/fr/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/fr/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/fr/get-started/what-are-transaction-fees/","matchPath":"/fr/get-started/what-are-transaction-fees/"},{"path":"/fr/get-started/what-is-a-bitcoin-ira/","matchPath":"/fr/get-started/what-is-a-bitcoin-ira/"},{"path":"/fr/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/fr/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/fr/get-started/what-is-a-bitcoin-wallet/","matchPath":"/fr/get-started/what-is-a-bitcoin-wallet/"},{"path":"/fr/get-started/what-is-a-brokerage/","matchPath":"/fr/get-started/what-is-a-brokerage/"},{"path":"/fr/get-started/what-is-a-cex/","matchPath":"/fr/get-started/what-is-a-cex/"},{"path":"/fr/get-started/what-is-a-confirmation/","matchPath":"/fr/get-started/what-is-a-confirmation/"},{"path":"/fr/get-started/what-is-a-consensus-mechanism/","matchPath":"/fr/get-started/what-is-a-consensus-mechanism/"},{"path":"/fr/get-started/what-is-a-crypto-wallet/","matchPath":"/fr/get-started/what-is-a-crypto-wallet/"},{"path":"/fr/get-started/what-is-a-dao/","matchPath":"/fr/get-started/what-is-a-dao/"},{"path":"/fr/get-started/what-is-a-dApp/","matchPath":"/fr/get-started/what-is-a-dApp/"},{"path":"/fr/get-started/what-is-a-dex/","matchPath":"/fr/get-started/what-is-a-dex/"},{"path":"/fr/get-started/what-is-a-liquid-staking-token/","matchPath":"/fr/get-started/what-is-a-liquid-staking-token/"},{"path":"/fr/get-started/what-is-a-smart-contract/","matchPath":"/fr/get-started/what-is-a-smart-contract/"},{"path":"/fr/get-started/what-is-a-token-sale/","matchPath":"/fr/get-started/what-is-a-token-sale/"},{"path":"/fr/get-started/what-is-a-token/","matchPath":"/fr/get-started/what-is-a-token/"},{"path":"/fr/get-started/what-is-an-airdrop/","matchPath":"/fr/get-started/what-is-an-airdrop/"},{"path":"/fr/get-started/what-is-apy/","matchPath":"/fr/get-started/what-is-apy/"},{"path":"/fr/get-started/what-is-avalanche/","matchPath":"/fr/get-started/what-is-avalanche/"},{"path":"/fr/get-started/what-is-bitcoin-cash/","matchPath":"/fr/get-started/what-is-bitcoin-cash/"},{"path":"/fr/get-started/what-is-Bitcoin-ETF/","matchPath":"/fr/get-started/what-is-Bitcoin-ETF/"},{"path":"/fr/get-started/what-is-bitcoin-gambling/","matchPath":"/fr/get-started/what-is-bitcoin-gambling/"},{"path":"/fr/get-started/what-is-bitcoin-governance/","matchPath":"/fr/get-started/what-is-bitcoin-governance/"},{"path":"/fr/get-started/what-is-bitcoin-halving/","matchPath":"/fr/get-started/what-is-bitcoin-halving/"},{"path":"/fr/get-started/what-is-bitcoin-mining/","matchPath":"/fr/get-started/what-is-bitcoin-mining/"},{"path":"/fr/get-started/what-is-bitcoin-op-cat/","matchPath":"/fr/get-started/what-is-bitcoin-op-cat/"},{"path":"/fr/get-started/what-is-bitcoin-otc-trading/","matchPath":"/fr/get-started/what-is-bitcoin-otc-trading/"},{"path":"/fr/get-started/what-is-bitcoin/","matchPath":"/fr/get-started/what-is-bitcoin/"},{"path":"/fr/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/fr/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/fr/get-started/what-is-censorship-resistance/","matchPath":"/fr/get-started/what-is-censorship-resistance/"},{"path":"/fr/get-started/what-is-cex-education/","matchPath":"/fr/get-started/what-is-cex-education/"},{"path":"/fr/get-started/what-is-coin-mixer/","matchPath":"/fr/get-started/what-is-coin-mixer/"},{"path":"/fr/get-started/what-is-cross-chain-interoperability/","matchPath":"/fr/get-started/what-is-cross-chain-interoperability/"},{"path":"/fr/get-started/what-is-crypto-asset-management/","matchPath":"/fr/get-started/what-is-crypto-asset-management/"},{"path":"/fr/get-started/what-is-crypto-insurance/","matchPath":"/fr/get-started/what-is-crypto-insurance/"},{"path":"/fr/get-started/what-is-crypto-lending/","matchPath":"/fr/get-started/what-is-crypto-lending/"},{"path":"/fr/get-started/what-is-defi-decentralized-finance/","matchPath":"/fr/get-started/what-is-defi-decentralized-finance/"},{"path":"/fr/get-started/what-is-EIP-1559/","matchPath":"/fr/get-started/what-is-EIP-1559/"},{"path":"/fr/get-started/what-is-eth-2/","matchPath":"/fr/get-started/what-is-eth-2/"},{"path":"/fr/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/fr/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/fr/get-started/what-is-eth-used-for/","matchPath":"/fr/get-started/what-is-eth-used-for/"},{"path":"/fr/get-started/what-is-ethereum-monetary-policy/","matchPath":"/fr/get-started/what-is-ethereum-monetary-policy/"},{"path":"/fr/get-started/what-is-ethereum/","matchPath":"/fr/get-started/what-is-ethereum/"},{"path":"/fr/get-started/what-is-evm/","matchPath":"/fr/get-started/what-is-evm/"},{"path":"/fr/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/fr/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/fr/get-started/what-is-fractal-bitcoin/","matchPath":"/fr/get-started/what-is-fractal-bitcoin/"},{"path":"/fr/get-started/what-is-gas/","matchPath":"/fr/get-started/what-is-gas/"},{"path":"/fr/get-started/what-is-inflation/","matchPath":"/fr/get-started/what-is-inflation/"},{"path":"/fr/get-started/what-is-layer-2-on-ethereum/","matchPath":"/fr/get-started/what-is-layer-2-on-ethereum/"},{"path":"/fr/get-started/what-is-lightning-network/","matchPath":"/fr/get-started/what-is-lightning-network/"},{"path":"/fr/get-started/what-is-liquidity/","matchPath":"/fr/get-started/what-is-liquidity/"},{"path":"/fr/get-started/what-is-money/","matchPath":"/fr/get-started/what-is-money/"},{"path":"/fr/get-started/what-is-polygon-matic/","matchPath":"/fr/get-started/what-is-polygon-matic/"},{"path":"/fr/get-started/what-is-proof-of-stake/","matchPath":"/fr/get-started/what-is-proof-of-stake/"},{"path":"/fr/get-started/what-is-proof-of-work/","matchPath":"/fr/get-started/what-is-proof-of-work/"},{"path":"/fr/get-started/what-is-restaking/","matchPath":"/fr/get-started/what-is-restaking/"},{"path":"/fr/get-started/what-is-staking/","matchPath":"/fr/get-started/what-is-staking/"},{"path":"/fr/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/fr/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/fr/get-started/what-is-the-double-spend-problem/","matchPath":"/fr/get-started/what-is-the-double-spend-problem/"},{"path":"/fr/get-started/what-is-the-metaverse/","matchPath":"/fr/get-started/what-is-the-metaverse/"},{"path":"/fr/get-started/what-is-the-verse-development-fund/","matchPath":"/fr/get-started/what-is-the-verse-development-fund/"},{"path":"/fr/get-started/what-is-trading-volume/","matchPath":"/fr/get-started/what-is-trading-volume/"},{"path":"/fr/get-started/what-is-uni/","matchPath":"/fr/get-started/what-is-uni/"},{"path":"/fr/get-started/what-is-verse-community/","matchPath":"/fr/get-started/what-is-verse-community/"},{"path":"/fr/get-started/what-is-verse-dex/","matchPath":"/fr/get-started/what-is-verse-dex/"},{"path":"/fr/get-started/what-is-verse/","matchPath":"/fr/get-started/what-is-verse/"},{"path":"/fr/get-started/what-is-volatility/","matchPath":"/fr/get-started/what-is-volatility/"},{"path":"/fr/get-started/what-is-walletconnect/","matchPath":"/fr/get-started/what-is-walletconnect/"},{"path":"/fr/get-started/what-is-wbtc/","matchPath":"/fr/get-started/what-is-wbtc/"},{"path":"/fr/get-started/what-is-weth/","matchPath":"/fr/get-started/what-is-weth/"},{"path":"/fr/get-started/what-is-yfi/","matchPath":"/fr/get-started/what-is-yfi/"},{"path":"/fr/get-started/what-is-yield-farming/","matchPath":"/fr/get-started/what-is-yield-farming/"},{"path":"/fr/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/fr/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/fr/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/fr/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/fr/get-started/who-created-ethereum/","matchPath":"/fr/get-started/who-created-ethereum/"},{"path":"/fr/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/fr/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/fr/giftcard/history/","matchPath":"/fr/giftcard/history/"},{"path":"/fr/jobs/solidity/","matchPath":"/fr/jobs/solidity/"},{"path":"/fr/luxury/art-collectibles/","matchPath":"/fr/luxury/art-collectibles/"},{"path":"/fr/luxury/concierge/","matchPath":"/fr/luxury/concierge/"},{"path":"/fr/luxury/designer-fashion/","matchPath":"/fr/luxury/designer-fashion/"},{"path":"/fr/luxury/events/","matchPath":"/fr/luxury/events/"},{"path":"/fr/luxury/experiences/","matchPath":"/fr/luxury/experiences/"},{"path":"/fr/luxury/ferrari-dealers/","matchPath":"/fr/luxury/ferrari-dealers/"},{"path":"/fr/luxury/health-wellness/","matchPath":"/fr/luxury/health-wellness/"},{"path":"/fr/luxury/hotels-resorts/","matchPath":"/fr/luxury/hotels-resorts/"},{"path":"/fr/luxury/jewelry/","matchPath":"/fr/luxury/jewelry/"},{"path":"/fr/luxury/private-jets/","matchPath":"/fr/luxury/private-jets/"},{"path":"/fr/luxury/real-estate/","matchPath":"/fr/luxury/real-estate/"},{"path":"/fr/luxury/supercars/","matchPath":"/fr/luxury/supercars/"},{"path":"/fr/luxury/timepieces/","matchPath":"/fr/luxury/timepieces/"},{"path":"/fr/luxury/villas/","matchPath":"/fr/luxury/villas/"},{"path":"/fr/luxury/yachts/","matchPath":"/fr/luxury/yachts/"},{"path":"/fr/merchant-solutions/brick-mortar/","matchPath":"/fr/merchant-solutions/brick-mortar/"},{"path":"/fr/merchant-solutions/online-business/","matchPath":"/fr/merchant-solutions/online-business/"},{"path":"/fr/mining/bitcoin-cash/","matchPath":"/fr/mining/bitcoin-cash/"},{"path":"/fr/mining/cloud-mining/","matchPath":"/fr/mining/cloud-mining/"},{"path":"/fr/mining/dash/","matchPath":"/fr/mining/dash/"},{"path":"/fr/mining/dogecoin/","matchPath":"/fr/mining/dogecoin/"},{"path":"/fr/mining/kaspa/","matchPath":"/fr/mining/kaspa/"},{"path":"/fr/mining/litecoin/","matchPath":"/fr/mining/litecoin/"},{"path":"/fr/mining/monero/","matchPath":"/fr/mining/monero/"},{"path":"/fr/mining/ravencoin/","matchPath":"/fr/mining/ravencoin/"},{"path":"/fr/newsletters/btc-research/","matchPath":"/fr/newsletters/btc-research/"},{"path":"/fr/newsletters/games-updates/","matchPath":"/fr/newsletters/games-updates/"},{"path":"/fr/newsletters/price-analysis/","matchPath":"/fr/newsletters/price-analysis/"},{"path":"/fr/newsletters/product-updates/","matchPath":"/fr/newsletters/product-updates/"},{"path":"/fr/newsletters/verse-updates/","matchPath":"/fr/newsletters/verse-updates/"},{"path":"/fr/newsletters/week-in-review/","matchPath":"/fr/newsletters/week-in-review/"},{"path":"/fr/payments/gateways/","matchPath":"/fr/payments/gateways/"},{"path":"/fr/payments/integrations/","matchPath":"/fr/payments/integrations/"},{"path":"/fr/payments/merchants/","matchPath":"/fr/payments/merchants/"},{"path":"/fr/payments/point-of-sale/","matchPath":"/fr/payments/point-of-sale/"},{"path":"/fr/payments/processors/","matchPath":"/fr/payments/processors/"},{"path":"/fr/payments/remittances/","matchPath":"/fr/payments/remittances/"},{"path":"/fr/payments/solutions/","matchPath":"/fr/payments/solutions/"},{"path":"/fr/payments/tips/","matchPath":"/fr/payments/tips/"},{"path":"/fr/poker/faqs/","matchPath":"/fr/poker/faqs/"},{"path":"/fr/poker/how-to-play/","matchPath":"/fr/poker/how-to-play/"},{"path":"/fr/poker/legality/","matchPath":"/fr/poker/legality/"},{"path":"/fr/poker/promotions/","matchPath":"/fr/poker/promotions/"},{"path":"/fr/poker/room-reviews/","matchPath":"/fr/poker/room-reviews/"},{"path":"/fr/poker/tournaments/","matchPath":"/fr/poker/tournaments/"},{"path":"/fr/price/cosmos-atom/","matchPath":"/fr/price/cosmos-atom/"},{"path":"/fr/price/ethereum-classic-etc/","matchPath":"/fr/price/ethereum-classic-etc/"},{"path":"/fr/price/immutable-x-imx/","matchPath":"/fr/price/immutable-x-imx/"},{"path":"/fr/price/injective-inj/","matchPath":"/fr/price/injective-inj/"},{"path":"/fr/price/ordinateur-internet-icp/","matchPath":"/fr/price/ordinateur-internet-icp/"},{"path":"/fr/research/btc-research/","matchPath":"/fr/research/btc-research/"},{"path":"/fr/research/games-updates/","matchPath":"/fr/research/games-updates/"},{"path":"/fr/research/price-analysis/","matchPath":"/fr/research/price-analysis/"},{"path":"/fr/research/product-updates/","matchPath":"/fr/research/product-updates/"},{"path":"/fr/research/verse-updates/","matchPath":"/fr/research/verse-updates/"},{"path":"/fr/research/week-in-review/","matchPath":"/fr/research/week-in-review/"},{"path":"/fr/tax/calculators/","matchPath":"/fr/tax/calculators/"},{"path":"/fr/tax/compliance/","matchPath":"/fr/tax/compliance/"},{"path":"/fr/tax/forms/","matchPath":"/fr/tax/forms/"},{"path":"/fr/tax/guides/","matchPath":"/fr/tax/guides/"},{"path":"/fr/tax/laws/","matchPath":"/fr/tax/laws/"},{"path":"/fr/tax/professionals/","matchPath":"/fr/tax/professionals/"},{"path":"/fr/tax/software/","matchPath":"/fr/tax/software/"},{"path":"/fr/tax/strategies/","matchPath":"/fr/tax/strategies/"},{"path":"/fr/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/fr/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/fr/trading/top-contracts-for-difference/","matchPath":"/fr/trading/top-contracts-for-difference/"},{"path":"/fr/vpn/best-vpn-in-us/","matchPath":"/fr/vpn/best-vpn-in-us/"},{"path":"/fr/wallet-services/backup-options/","matchPath":"/fr/wallet-services/backup-options/"},{"path":"/fr/wallet-services/secure-wallet/","matchPath":"/fr/wallet-services/secure-wallet/"},{"path":"/fr/wallet-services/security-tips/","matchPath":"/fr/wallet-services/security-tips/"},{"path":"/fr/wallet-services/setup-guide/","matchPath":"/fr/wallet-services/setup-guide/"},{"path":"/fr/wallet-services/wallet-download/","matchPath":"/fr/wallet-services/wallet-download/"},{"path":"/fr/wallet/avalanche/","matchPath":"/fr/wallet/avalanche/"},{"path":"/fr/wallet/bitcoin/","matchPath":"/fr/wallet/bitcoin/"},{"path":"/fr/wallet/bnb/","matchPath":"/fr/wallet/bnb/"},{"path":"/fr/wallet/browser-extension/","matchPath":"/fr/wallet/browser-extension/"},{"path":"/fr/wallet/cardano/","matchPath":"/fr/wallet/cardano/"},{"path":"/fr/wallet/custodial/","matchPath":"/fr/wallet/custodial/"},{"path":"/fr/wallet/defi-wallets/","matchPath":"/fr/wallet/defi-wallets/"},{"path":"/fr/wallet/defi/","matchPath":"/fr/wallet/defi/"},{"path":"/fr/wallet/desktop/","matchPath":"/fr/wallet/desktop/"},{"path":"/fr/wallet/enterprise/","matchPath":"/fr/wallet/enterprise/"},{"path":"/fr/wallet/ethereum/","matchPath":"/fr/wallet/ethereum/"},{"path":"/fr/wallet/gaming/","matchPath":"/fr/wallet/gaming/"},{"path":"/fr/wallet/hardware/","matchPath":"/fr/wallet/hardware/"},{"path":"/fr/wallet/hodl/","matchPath":"/fr/wallet/hodl/"},{"path":"/fr/wallet/lightning/","matchPath":"/fr/wallet/lightning/"},{"path":"/fr/wallet/litecoin/","matchPath":"/fr/wallet/litecoin/"},{"path":"/fr/wallet/mobile/","matchPath":"/fr/wallet/mobile/"},{"path":"/fr/wallet/multi-signature/","matchPath":"/fr/wallet/multi-signature/"},{"path":"/fr/wallet/multichain/","matchPath":"/fr/wallet/multichain/"},{"path":"/fr/wallet/nft/","matchPath":"/fr/wallet/nft/"},{"path":"/fr/wallet/paper-wallets/","matchPath":"/fr/wallet/paper-wallets/"},{"path":"/fr/wallet/polkadot/","matchPath":"/fr/wallet/polkadot/"},{"path":"/fr/wallet/privacy/","matchPath":"/fr/wallet/privacy/"},{"path":"/fr/wallet/remittance/","matchPath":"/fr/wallet/remittance/"},{"path":"/fr/wallet/reviews/","matchPath":"/fr/wallet/reviews/"},{"path":"/fr/wallet/self-custodial/","matchPath":"/fr/wallet/self-custodial/"},{"path":"/fr/wallet/solana/","matchPath":"/fr/wallet/solana/"},{"path":"/fr/wallet/staking/","matchPath":"/fr/wallet/staking/"},{"path":"/fr/wallet/tezos/","matchPath":"/fr/wallet/tezos/"},{"path":"/fr/wallet/trading/","matchPath":"/fr/wallet/trading/"},{"path":"/fr/wallet/xrp/","matchPath":"/fr/wallet/xrp/"},{"path":"/fr/wealth-management/binance-coin/","matchPath":"/fr/wealth-management/binance-coin/"},{"path":"/fr/wealth-management/bitcoin-cash/","matchPath":"/fr/wealth-management/bitcoin-cash/"},{"path":"/fr/wealth-management/bitcoin/","matchPath":"/fr/wealth-management/bitcoin/"},{"path":"/fr/wealth-management/ethereum/","matchPath":"/fr/wealth-management/ethereum/"},{"path":"/fr/wealth-management/solana/","matchPath":"/fr/wealth-management/solana/"},{"path":"/fr/wealth-management/usdc/","matchPath":"/fr/wealth-management/usdc/"},{"path":"/fr/wealth-management/usdt-tether/","matchPath":"/fr/wealth-management/usdt-tether/"},{"path":"/it/advertise/podcast/","matchPath":"/it/advertise/podcast/"},{"path":"/it/bitcoin-cash-register/service-terms/","matchPath":"/it/bitcoin-cash-register/service-terms/"},{"path":"/it/cards/anonymous-cards/","matchPath":"/it/cards/anonymous-cards/"},{"path":"/it/cards/cashback-cards/","matchPath":"/it/cards/cashback-cards/"},{"path":"/it/cards/credit-cards/","matchPath":"/it/cards/credit-cards/"},{"path":"/it/cards/crypto-cards/","matchPath":"/it/cards/crypto-cards/"},{"path":"/it/cards/debit-cards/","matchPath":"/it/cards/debit-cards/"},{"path":"/it/cards/gemini-card/","matchPath":"/it/cards/gemini-card/"},{"path":"/it/cards/gift-cards/","matchPath":"/it/cards/gift-cards/"},{"path":"/it/cards/mastercard-cards/","matchPath":"/it/cards/mastercard-cards/"},{"path":"/it/cards/prepaid-cards/","matchPath":"/it/cards/prepaid-cards/"},{"path":"/it/cards/reviews/","matchPath":"/it/cards/reviews/"},{"path":"/it/cards/rewards-cards/","matchPath":"/it/cards/rewards-cards/"},{"path":"/it/cards/solana/","matchPath":"/it/cards/solana/"},{"path":"/it/cards/virtual-cards/","matchPath":"/it/cards/virtual-cards/"},{"path":"/it/cards/visa-cards/","matchPath":"/it/cards/visa-cards/"},{"path":"/it/cards/web3-cards/","matchPath":"/it/cards/web3-cards/"},{"path":"/it/conferences/africa/","matchPath":"/it/conferences/africa/"},{"path":"/it/conferences/ai/","matchPath":"/it/conferences/ai/"},{"path":"/it/conferences/asia/","matchPath":"/it/conferences/asia/"},{"path":"/it/conferences/australia/","matchPath":"/it/conferences/australia/"},{"path":"/it/conferences/avalanche/","matchPath":"/it/conferences/avalanche/"},{"path":"/it/conferences/bitcoin/","matchPath":"/it/conferences/bitcoin/"},{"path":"/it/conferences/blockchain/","matchPath":"/it/conferences/blockchain/"},{"path":"/it/conferences/bnb/","matchPath":"/it/conferences/bnb/"},{"path":"/it/conferences/canada/","matchPath":"/it/conferences/canada/"},{"path":"/it/conferences/cardano/","matchPath":"/it/conferences/cardano/"},{"path":"/it/conferences/crypto/","matchPath":"/it/conferences/crypto/"},{"path":"/it/conferences/defi/","matchPath":"/it/conferences/defi/"},{"path":"/it/conferences/dubai/","matchPath":"/it/conferences/dubai/"},{"path":"/it/conferences/ethereum/","matchPath":"/it/conferences/ethereum/"},{"path":"/it/conferences/europe/","matchPath":"/it/conferences/europe/"},{"path":"/it/conferences/games/","matchPath":"/it/conferences/games/"},{"path":"/it/conferences/japan/","matchPath":"/it/conferences/japan/"},{"path":"/it/conferences/latam/","matchPath":"/it/conferences/latam/"},{"path":"/it/conferences/litecoin/","matchPath":"/it/conferences/litecoin/"},{"path":"/it/conferences/memes/","matchPath":"/it/conferences/memes/"},{"path":"/it/conferences/metaverse/","matchPath":"/it/conferences/metaverse/"},{"path":"/it/conferences/middle-east/","matchPath":"/it/conferences/middle-east/"},{"path":"/it/conferences/nft/","matchPath":"/it/conferences/nft/"},{"path":"/it/conferences/polkadot/","matchPath":"/it/conferences/polkadot/"},{"path":"/it/conferences/singapore/","matchPath":"/it/conferences/singapore/"},{"path":"/it/conferences/solana/","matchPath":"/it/conferences/solana/"},{"path":"/it/conferences/startups/","matchPath":"/it/conferences/startups/"},{"path":"/it/conferences/tech/","matchPath":"/it/conferences/tech/"},{"path":"/it/conferences/tezos/","matchPath":"/it/conferences/tezos/"},{"path":"/it/conferences/usa/","matchPath":"/it/conferences/usa/"},{"path":"/it/conferences/web3/","matchPath":"/it/conferences/web3/"},{"path":"/it/conferences/xrp/","matchPath":"/it/conferences/xrp/"},{"path":"/it/crypto-education/beginner-guides/","matchPath":"/it/crypto-education/beginner-guides/"},{"path":"/it/crypto-education/blockchain-basics/","matchPath":"/it/crypto-education/blockchain-basics/"},{"path":"/it/crypto-education/buying-guides/","matchPath":"/it/crypto-education/buying-guides/"},{"path":"/it/crypto-education/tax-information/","matchPath":"/it/crypto-education/tax-information/"},{"path":"/it/crypto-venture-network/accelerators/","matchPath":"/it/crypto-venture-network/accelerators/"},{"path":"/it/crypto-venture-network/incubators/","matchPath":"/it/crypto-venture-network/incubators/"},{"path":"/it/crypto-venture-network/portfolio-companies/","matchPath":"/it/crypto-venture-network/portfolio-companies/"},{"path":"/it/crypto-venture-network/syndicates/","matchPath":"/it/crypto-venture-network/syndicates/"},{"path":"/it/crypto-venture-network/venture-capital-funds/","matchPath":"/it/crypto-venture-network/venture-capital-funds/"},{"path":"/it/decentralized-exchanges/best-practices/","matchPath":"/it/decentralized-exchanges/best-practices/"},{"path":"/it/decentralized-exchanges/defi-articles/","matchPath":"/it/decentralized-exchanges/defi-articles/"},{"path":"/it/decentralized-exchanges/dex-overview/","matchPath":"/it/decentralized-exchanges/dex-overview/"},{"path":"/it/decentralized-exchanges/swap-tutorials/","matchPath":"/it/decentralized-exchanges/swap-tutorials/"},{"path":"/it/depin/how-to-buy-depin/","matchPath":"/it/depin/how-to-buy-depin/"},{"path":"/it/directory/cards/","matchPath":"/it/directory/cards/"},{"path":"/it/directory/conferences/","matchPath":"/it/directory/conferences/"},{"path":"/it/directory/exchanges/","matchPath":"/it/directory/exchanges/"},{"path":"/it/directory/gambling/","matchPath":"/it/directory/gambling/"},{"path":"/it/directory/mining/","matchPath":"/it/directory/mining/"},{"path":"/it/directory/wallets/","matchPath":"/it/directory/wallets/"},{"path":"/it/exchanges/aave/","matchPath":"/it/exchanges/aave/"},{"path":"/it/exchanges/algeria/","matchPath":"/it/exchanges/algeria/"},{"path":"/it/exchanges/algorithmic-trading-platforms/","matchPath":"/it/exchanges/algorithmic-trading-platforms/"},{"path":"/it/exchanges/altcoins/","matchPath":"/it/exchanges/altcoins/"},{"path":"/it/exchanges/anonymous-exchanges/","matchPath":"/it/exchanges/anonymous-exchanges/"},{"path":"/it/exchanges/aptos/","matchPath":"/it/exchanges/aptos/"},{"path":"/it/exchanges/arbitrage-bots/","matchPath":"/it/exchanges/arbitrage-bots/"},{"path":"/it/exchanges/arbitrum/","matchPath":"/it/exchanges/arbitrum/"},{"path":"/it/exchanges/argentina/","matchPath":"/it/exchanges/argentina/"},{"path":"/it/exchanges/artificial-superintelligence-alliance/","matchPath":"/it/exchanges/artificial-superintelligence-alliance/"},{"path":"/it/exchanges/asia/","matchPath":"/it/exchanges/asia/"},{"path":"/it/exchanges/australia/","matchPath":"/it/exchanges/australia/"},{"path":"/it/exchanges/auto-dca/","matchPath":"/it/exchanges/auto-dca/"},{"path":"/it/exchanges/automated-trading/","matchPath":"/it/exchanges/automated-trading/"},{"path":"/it/exchanges/avalanche/","matchPath":"/it/exchanges/avalanche/"},{"path":"/it/exchanges/bahrain/","matchPath":"/it/exchanges/bahrain/"},{"path":"/it/exchanges/bangladesh/","matchPath":"/it/exchanges/bangladesh/"},{"path":"/it/exchanges/base/","matchPath":"/it/exchanges/base/"},{"path":"/it/exchanges/binance-coin/","matchPath":"/it/exchanges/binance-coin/"},{"path":"/it/exchanges/binary-options/","matchPath":"/it/exchanges/binary-options/"},{"path":"/it/exchanges/bitcoin-cash/","matchPath":"/it/exchanges/bitcoin-cash/"},{"path":"/it/exchanges/bittensor/","matchPath":"/it/exchanges/bittensor/"},{"path":"/it/exchanges/brazil/","matchPath":"/it/exchanges/brazil/"},{"path":"/it/exchanges/canada/","matchPath":"/it/exchanges/canada/"},{"path":"/it/exchanges/cardano/","matchPath":"/it/exchanges/cardano/"},{"path":"/it/exchanges/central-america/","matchPath":"/it/exchanges/central-america/"},{"path":"/it/exchanges/centralized/","matchPath":"/it/exchanges/centralized/"},{"path":"/it/exchanges/chainlink/","matchPath":"/it/exchanges/chainlink/"},{"path":"/it/exchanges/chile/","matchPath":"/it/exchanges/chile/"},{"path":"/it/exchanges/china/","matchPath":"/it/exchanges/china/"},{"path":"/it/exchanges/colombia/","matchPath":"/it/exchanges/colombia/"},{"path":"/it/exchanges/congo/","matchPath":"/it/exchanges/congo/"},{"path":"/it/exchanges/contract-trading/","matchPath":"/it/exchanges/contract-trading/"},{"path":"/it/exchanges/copy-trading/","matchPath":"/it/exchanges/copy-trading/"},{"path":"/it/exchanges/cosmos/","matchPath":"/it/exchanges/cosmos/"},{"path":"/it/exchanges/cronos/","matchPath":"/it/exchanges/cronos/"},{"path":"/it/exchanges/crypto-index-trading/","matchPath":"/it/exchanges/crypto-index-trading/"},{"path":"/it/exchanges/crypto-to-fiat-exchanges/","matchPath":"/it/exchanges/crypto-to-fiat-exchanges/"},{"path":"/it/exchanges/cryptocurrency-brokers/","matchPath":"/it/exchanges/cryptocurrency-brokers/"},{"path":"/it/exchanges/czech-republic/","matchPath":"/it/exchanges/czech-republic/"},{"path":"/it/exchanges/dai/","matchPath":"/it/exchanges/dai/"},{"path":"/it/exchanges/day-trading/","matchPath":"/it/exchanges/day-trading/"},{"path":"/it/exchanges/decentralized/","matchPath":"/it/exchanges/decentralized/"},{"path":"/it/exchanges/demo-trading-accounts/","matchPath":"/it/exchanges/demo-trading-accounts/"},{"path":"/it/exchanges/derivatives/","matchPath":"/it/exchanges/derivatives/"},{"path":"/it/exchanges/dogecoin/","matchPath":"/it/exchanges/dogecoin/"},{"path":"/it/exchanges/dual-investment-trading/","matchPath":"/it/exchanges/dual-investment-trading/"},{"path":"/it/exchanges/egypt/","matchPath":"/it/exchanges/egypt/"},{"path":"/it/exchanges/ethereum-classic/","matchPath":"/it/exchanges/ethereum-classic/"},{"path":"/it/exchanges/europe/","matchPath":"/it/exchanges/europe/"},{"path":"/it/exchanges/filecoin/","matchPath":"/it/exchanges/filecoin/"},{"path":"/it/exchanges/for-beginners/","matchPath":"/it/exchanges/for-beginners/"},{"path":"/it/exchanges/france/","matchPath":"/it/exchanges/france/"},{"path":"/it/exchanges/futures-trading/","matchPath":"/it/exchanges/futures-trading/"},{"path":"/it/exchanges/germany/","matchPath":"/it/exchanges/germany/"},{"path":"/it/exchanges/ghana/","matchPath":"/it/exchanges/ghana/"},{"path":"/it/exchanges/greece/","matchPath":"/it/exchanges/greece/"},{"path":"/it/exchanges/grid-trading/","matchPath":"/it/exchanges/grid-trading/"},{"path":"/it/exchanges/hedera/","matchPath":"/it/exchanges/hedera/"},{"path":"/it/exchanges/hong-kong/","matchPath":"/it/exchanges/hong-kong/"},{"path":"/it/exchanges/hungary/","matchPath":"/it/exchanges/hungary/"},{"path":"/it/exchanges/hybrid/","matchPath":"/it/exchanges/hybrid/"},{"path":"/it/exchanges/immutable/","matchPath":"/it/exchanges/immutable/"},{"path":"/it/exchanges/india/","matchPath":"/it/exchanges/india/"},{"path":"/it/exchanges/indonesia/","matchPath":"/it/exchanges/indonesia/"},{"path":"/it/exchanges/injective/","matchPath":"/it/exchanges/injective/"},{"path":"/it/exchanges/ireland/","matchPath":"/it/exchanges/ireland/"},{"path":"/it/exchanges/israel/","matchPath":"/it/exchanges/israel/"},{"path":"/it/exchanges/italy/","matchPath":"/it/exchanges/italy/"},{"path":"/it/exchanges/japan/","matchPath":"/it/exchanges/japan/"},{"path":"/it/exchanges/kaspa/","matchPath":"/it/exchanges/kaspa/"},{"path":"/it/exchanges/kazakhstan/","matchPath":"/it/exchanges/kazakhstan/"},{"path":"/it/exchanges/kenya/","matchPath":"/it/exchanges/kenya/"},{"path":"/it/exchanges/korea/","matchPath":"/it/exchanges/korea/"},{"path":"/it/exchanges/latin-america/","matchPath":"/it/exchanges/latin-america/"},{"path":"/it/exchanges/lending-platforms/","matchPath":"/it/exchanges/lending-platforms/"},{"path":"/it/exchanges/leverage-trading/","matchPath":"/it/exchanges/leverage-trading/"},{"path":"/it/exchanges/liquidity-pools/","matchPath":"/it/exchanges/liquidity-pools/"},{"path":"/it/exchanges/litecoin/","matchPath":"/it/exchanges/litecoin/"},{"path":"/it/exchanges/live-trading/","matchPath":"/it/exchanges/live-trading/"},{"path":"/it/exchanges/lowest-fees/","matchPath":"/it/exchanges/lowest-fees/"},{"path":"/it/exchanges/maker/","matchPath":"/it/exchanges/maker/"},{"path":"/it/exchanges/malaysia/","matchPath":"/it/exchanges/malaysia/"},{"path":"/it/exchanges/mantle/","matchPath":"/it/exchanges/mantle/"},{"path":"/it/exchanges/margin-trading/","matchPath":"/it/exchanges/margin-trading/"},{"path":"/it/exchanges/market-making-exchanges/","matchPath":"/it/exchanges/market-making-exchanges/"},{"path":"/it/exchanges/memes/","matchPath":"/it/exchanges/memes/"},{"path":"/it/exchanges/mexico/","matchPath":"/it/exchanges/mexico/"},{"path":"/it/exchanges/middle-east/","matchPath":"/it/exchanges/middle-east/"},{"path":"/it/exchanges/monero/","matchPath":"/it/exchanges/monero/"},{"path":"/it/exchanges/morocco/","matchPath":"/it/exchanges/morocco/"},{"path":"/it/exchanges/near-protocol/","matchPath":"/it/exchanges/near-protocol/"},{"path":"/it/exchanges/neo/","matchPath":"/it/exchanges/neo/"},{"path":"/it/exchanges/netherlands/","matchPath":"/it/exchanges/netherlands/"},{"path":"/it/exchanges/new-zealand/","matchPath":"/it/exchanges/new-zealand/"},{"path":"/it/exchanges/nigeria/","matchPath":"/it/exchanges/nigeria/"},{"path":"/it/exchanges/norway/","matchPath":"/it/exchanges/norway/"},{"path":"/it/exchanges/okb/","matchPath":"/it/exchanges/okb/"},{"path":"/it/exchanges/oman/","matchPath":"/it/exchanges/oman/"},{"path":"/it/exchanges/optimism/","matchPath":"/it/exchanges/optimism/"},{"path":"/it/exchanges/options-trading/","matchPath":"/it/exchanges/options-trading/"},{"path":"/it/exchanges/p2p-crypto-exchanges/","matchPath":"/it/exchanges/p2p-crypto-exchanges/"},{"path":"/it/exchanges/pakistan/","matchPath":"/it/exchanges/pakistan/"},{"path":"/it/exchanges/paypal-deposit/","matchPath":"/it/exchanges/paypal-deposit/"},{"path":"/it/exchanges/pepe/","matchPath":"/it/exchanges/pepe/"},{"path":"/it/exchanges/perpetual-futures-trading/","matchPath":"/it/exchanges/perpetual-futures-trading/"},{"path":"/it/exchanges/peru/","matchPath":"/it/exchanges/peru/"},{"path":"/it/exchanges/philippines/","matchPath":"/it/exchanges/philippines/"},{"path":"/it/exchanges/poland/","matchPath":"/it/exchanges/poland/"},{"path":"/it/exchanges/polkadot/","matchPath":"/it/exchanges/polkadot/"},{"path":"/it/exchanges/polygon/","matchPath":"/it/exchanges/polygon/"},{"path":"/it/exchanges/portugal/","matchPath":"/it/exchanges/portugal/"},{"path":"/it/exchanges/qatar/","matchPath":"/it/exchanges/qatar/"},{"path":"/it/exchanges/recurring-buys/","matchPath":"/it/exchanges/recurring-buys/"},{"path":"/it/exchanges/render/","matchPath":"/it/exchanges/render/"},{"path":"/it/exchanges/reviews/","matchPath":"/it/exchanges/reviews/"},{"path":"/it/exchanges/ripple/","matchPath":"/it/exchanges/ripple/"},{"path":"/it/exchanges/romania/","matchPath":"/it/exchanges/romania/"},{"path":"/it/exchanges/russia/","matchPath":"/it/exchanges/russia/"},{"path":"/it/exchanges/safest/","matchPath":"/it/exchanges/safest/"},{"path":"/it/exchanges/saudi-arabia/","matchPath":"/it/exchanges/saudi-arabia/"},{"path":"/it/exchanges/savings-accounts/","matchPath":"/it/exchanges/savings-accounts/"},{"path":"/it/exchanges/serbia/","matchPath":"/it/exchanges/serbia/"},{"path":"/it/exchanges/shiba-inu/","matchPath":"/it/exchanges/shiba-inu/"},{"path":"/it/exchanges/shorting/","matchPath":"/it/exchanges/shorting/"},{"path":"/it/exchanges/singapore/","matchPath":"/it/exchanges/singapore/"},{"path":"/it/exchanges/solana/","matchPath":"/it/exchanges/solana/"},{"path":"/it/exchanges/south-africa/","matchPath":"/it/exchanges/south-africa/"},{"path":"/it/exchanges/south-america/","matchPath":"/it/exchanges/south-america/"},{"path":"/it/exchanges/stablecoins/","matchPath":"/it/exchanges/stablecoins/"},{"path":"/it/exchanges/stacks/","matchPath":"/it/exchanges/stacks/"},{"path":"/it/exchanges/staking-rewards-exchanges/","matchPath":"/it/exchanges/staking-rewards-exchanges/"},{"path":"/it/exchanges/stellar/","matchPath":"/it/exchanges/stellar/"},{"path":"/it/exchanges/sui/","matchPath":"/it/exchanges/sui/"},{"path":"/it/exchanges/swap-platforms/","matchPath":"/it/exchanges/swap-platforms/"},{"path":"/it/exchanges/switzerland/","matchPath":"/it/exchanges/switzerland/"},{"path":"/it/exchanges/taiwan/","matchPath":"/it/exchanges/taiwan/"},{"path":"/it/exchanges/tanzania/","matchPath":"/it/exchanges/tanzania/"},{"path":"/it/exchanges/tezos/","matchPath":"/it/exchanges/tezos/"},{"path":"/it/exchanges/thailand/","matchPath":"/it/exchanges/thailand/"},{"path":"/it/exchanges/tokenized-stocks-trading/","matchPath":"/it/exchanges/tokenized-stocks-trading/"},{"path":"/it/exchanges/toncoin/","matchPath":"/it/exchanges/toncoin/"},{"path":"/it/exchanges/toshi/","matchPath":"/it/exchanges/toshi/"},{"path":"/it/exchanges/tron/","matchPath":"/it/exchanges/tron/"},{"path":"/it/exchanges/trump/","matchPath":"/it/exchanges/trump/"},{"path":"/it/exchanges/turkey/","matchPath":"/it/exchanges/turkey/"},{"path":"/it/exchanges/uganda/","matchPath":"/it/exchanges/uganda/"},{"path":"/it/exchanges/ukraine/","matchPath":"/it/exchanges/ukraine/"},{"path":"/it/exchanges/uniswap/","matchPath":"/it/exchanges/uniswap/"},{"path":"/it/exchanges/united-arab-emirates/","matchPath":"/it/exchanges/united-arab-emirates/"},{"path":"/it/exchanges/united-kingdom/","matchPath":"/it/exchanges/united-kingdom/"},{"path":"/it/exchanges/usa/","matchPath":"/it/exchanges/usa/"},{"path":"/it/exchanges/usdt/","matchPath":"/it/exchanges/usdt/"},{"path":"/it/exchanges/vechain/","matchPath":"/it/exchanges/vechain/"},{"path":"/it/exchanges/vietnam/","matchPath":"/it/exchanges/vietnam/"},{"path":"/it/exchanges/zero-fee-trading/","matchPath":"/it/exchanges/zero-fee-trading/"},{"path":"/it/fx/arbitrage/","matchPath":"/it/fx/arbitrage/"},{"path":"/it/fx/basics/","matchPath":"/it/fx/basics/"},{"path":"/it/fx/brokers/","matchPath":"/it/fx/brokers/"},{"path":"/it/fx/market-analysis/","matchPath":"/it/fx/market-analysis/"},{"path":"/it/fx/regulations/","matchPath":"/it/fx/regulations/"},{"path":"/it/fx/strategies/","matchPath":"/it/fx/strategies/"},{"path":"/it/fx/tools/","matchPath":"/it/fx/tools/"},{"path":"/it/fx/trading-platforms/","matchPath":"/it/fx/trading-platforms/"},{"path":"/it/gambling-guides/blackjack-strategy/","matchPath":"/it/gambling-guides/blackjack-strategy/"},{"path":"/it/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/it/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/it/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/it/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/it/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/it/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/it/gambling-guides/poker-strategy/","matchPath":"/it/gambling-guides/poker-strategy/"},{"path":"/it/gambling-guides/roulette-strategy/","matchPath":"/it/gambling-guides/roulette-strategy/"},{"path":"/it/gambling/betting/","matchPath":"/it/gambling/betting/"},{"path":"/it/gambling/bingo/","matchPath":"/it/gambling/bingo/"},{"path":"/it/gambling/bots/","matchPath":"/it/gambling/bots/"},{"path":"/it/gambling/casino/","matchPath":"/it/gambling/casino/"},{"path":"/it/gambling/daily-contests/","matchPath":"/it/gambling/daily-contests/"},{"path":"/it/gambling/hot-games/","matchPath":"/it/gambling/hot-games/"},{"path":"/it/gambling/new-games/","matchPath":"/it/gambling/new-games/"},{"path":"/it/gambling/pachinko/","matchPath":"/it/gambling/pachinko/"},{"path":"/it/gambling/play-along/","matchPath":"/it/gambling/play-along/"},{"path":"/it/gambling/reviews/","matchPath":"/it/gambling/reviews/"},{"path":"/it/gambling/top-games/","matchPath":"/it/gambling/top-games/"},{"path":"/it/gambling/top-picks/","matchPath":"/it/gambling/top-picks/"},{"path":"/it/gambling/trending-games/","matchPath":"/it/gambling/trending-games/"},{"path":"/it/gambling/weekly-raffles/","matchPath":"/it/gambling/weekly-raffles/"},{"path":"/it/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/it/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/it/get-started/a-quick-introduction-to-crypto/","matchPath":"/it/get-started/a-quick-introduction-to-crypto/"},{"path":"/it/get-started/bitcoin-as-an-asset-class/","matchPath":"/it/get-started/bitcoin-as-an-asset-class/"},{"path":"/it/get-started/bitcoin-debit-card/","matchPath":"/it/get-started/bitcoin-debit-card/"},{"path":"/it/get-started/bitcoin-glossary/","matchPath":"/it/get-started/bitcoin-glossary/"},{"path":"/it/get-started/bitcoin-layer-2-solutions/","matchPath":"/it/get-started/bitcoin-layer-2-solutions/"},{"path":"/it/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/it/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/it/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/it/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/it/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/it/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/it/get-started/create-bitcoin-wallet/","matchPath":"/it/get-started/create-bitcoin-wallet/"},{"path":"/it/get-started/create-crypto-wallet/","matchPath":"/it/get-started/create-crypto-wallet/"},{"path":"/it/get-started/crypto-debit-card/","matchPath":"/it/get-started/crypto-debit-card/"},{"path":"/it/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/it/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/it/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/it/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/it/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/it/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/it/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/it/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/it/get-started/defi-use-cases/","matchPath":"/it/get-started/defi-use-cases/"},{"path":"/it/get-started/dex-lingo/","matchPath":"/it/get-started/dex-lingo/"},{"path":"/it/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/it/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/it/get-started/digital-asset-security/","matchPath":"/it/get-started/digital-asset-security/"},{"path":"/it/get-started/dollar-cost-averaging/","matchPath":"/it/get-started/dollar-cost-averaging/"},{"path":"/it/get-started/faq/","matchPath":"/it/get-started/faq/"},{"path":"/it/get-started/how-bitcoin-exchange-works/","matchPath":"/it/get-started/how-bitcoin-exchange-works/"},{"path":"/it/get-started/how-bitcoin-impacts-environment/","matchPath":"/it/get-started/how-bitcoin-impacts-environment/"},{"path":"/it/get-started/how-bitcoin-transactions-work/","matchPath":"/it/get-started/how-bitcoin-transactions-work/"},{"path":"/it/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/it/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/it/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/it/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/it/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/it/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/it/get-started/how-does-crypto-exchange-work/","matchPath":"/it/get-started/how-does-crypto-exchange-work/"},{"path":"/it/get-started/how-does-governance-work-in-ethereum/","matchPath":"/it/get-started/how-does-governance-work-in-ethereum/"},{"path":"/it/get-started/how-is-cryptocurrency-taxed/","matchPath":"/it/get-started/how-is-cryptocurrency-taxed/"},{"path":"/it/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/it/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/it/get-started/how-to-borrow-in-defi/","matchPath":"/it/get-started/how-to-borrow-in-defi/"},{"path":"/it/get-started/how-to-buy-an-nft/","matchPath":"/it/get-started/how-to-buy-an-nft/"},{"path":"/it/get-started/how-to-buy-bitcoin-cash/","matchPath":"/it/get-started/how-to-buy-bitcoin-cash/"},{"path":"/it/get-started/how-to-buy-bitcoin/","matchPath":"/it/get-started/how-to-buy-bitcoin/"},{"path":"/it/get-started/how-to-buy-crypto/","matchPath":"/it/get-started/how-to-buy-crypto/"},{"path":"/it/get-started/how-to-buy-eth/","matchPath":"/it/get-started/how-to-buy-eth/"},{"path":"/it/get-started/how-to-buy-insurance-in-defi/","matchPath":"/it/get-started/how-to-buy-insurance-in-defi/"},{"path":"/it/get-started/how-to-buy-verse/","matchPath":"/it/get-started/how-to-buy-verse/"},{"path":"/it/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/it/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/it/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/it/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/it/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/it/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/it/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/it/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/it/get-started/how-to-enter-a-new-chain/","matchPath":"/it/get-started/how-to-enter-a-new-chain/"},{"path":"/it/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/it/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/it/get-started/how-to-lend-in-defi/","matchPath":"/it/get-started/how-to-lend-in-defi/"},{"path":"/it/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/it/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/it/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/it/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/it/get-started/how-to-receive-bitcoin-cash/","matchPath":"/it/get-started/how-to-receive-bitcoin-cash/"},{"path":"/it/get-started/how-to-receive-bitcoin/","matchPath":"/it/get-started/how-to-receive-bitcoin/"},{"path":"/it/get-started/how-to-receive-crypto/","matchPath":"/it/get-started/how-to-receive-crypto/"},{"path":"/it/get-started/how-to-receive-ethereum/","matchPath":"/it/get-started/how-to-receive-ethereum/"},{"path":"/it/get-started/how-to-sell-bitcoin-cash/","matchPath":"/it/get-started/how-to-sell-bitcoin-cash/"},{"path":"/it/get-started/how-to-sell-bitcoin/","matchPath":"/it/get-started/how-to-sell-bitcoin/"},{"path":"/it/get-started/how-to-sell-crypto/","matchPath":"/it/get-started/how-to-sell-crypto/"},{"path":"/it/get-started/how-to-sell-verse/","matchPath":"/it/get-started/how-to-sell-verse/"},{"path":"/it/get-started/how-to-send-bitcoin-cash/","matchPath":"/it/get-started/how-to-send-bitcoin-cash/"},{"path":"/it/get-started/how-to-send-bitcoin/","matchPath":"/it/get-started/how-to-send-bitcoin/"},{"path":"/it/get-started/how-to-send-crypto/","matchPath":"/it/get-started/how-to-send-crypto/"},{"path":"/it/get-started/how-to-send-ethereum/","matchPath":"/it/get-started/how-to-send-ethereum/"},{"path":"/it/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/it/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/it/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/it/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/it/get-started/how-to-swap-crypto/","matchPath":"/it/get-started/how-to-swap-crypto/"},{"path":"/it/get-started/how-to-use-a-dex/","matchPath":"/it/get-started/how-to-use-a-dex/"},{"path":"/it/get-started/how-to-use-bitcoin-cash/","matchPath":"/it/get-started/how-to-use-bitcoin-cash/"},{"path":"/it/get-started/how-to-use-derivatives-in-defi/","matchPath":"/it/get-started/how-to-use-derivatives-in-defi/"},{"path":"/it/get-started/how-to-yield-farm-in-defi/","matchPath":"/it/get-started/how-to-yield-farm-in-defi/"},{"path":"/it/get-started/how-was-eth-initially-distributed/","matchPath":"/it/get-started/how-was-eth-initially-distributed/"},{"path":"/it/get-started/is-bitcoin-a-store-of-value/","matchPath":"/it/get-started/is-bitcoin-a-store-of-value/"},{"path":"/it/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/it/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/it/get-started/is-bitcoin-private/","matchPath":"/it/get-started/is-bitcoin-private/"},{"path":"/it/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/it/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/it/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/it/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/it/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/it/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/it/get-started/shared-wallet-multisig-use-cases/","matchPath":"/it/get-started/shared-wallet-multisig-use-cases/"},{"path":"/it/get-started/the-benefits-of-bitcoin/","matchPath":"/it/get-started/the-benefits-of-bitcoin/"},{"path":"/it/get-started/unstoppable-money/","matchPath":"/it/get-started/unstoppable-money/"},{"path":"/it/get-started/what_is_bitcoin_taproot/","matchPath":"/it/get-started/what_is_bitcoin_taproot/"},{"path":"/it/get-started/what_is_web3/","matchPath":"/it/get-started/what_is_web3/"},{"path":"/it/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/it/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/it/get-started/what-are-bitcoin-credit-cards/","matchPath":"/it/get-started/what-are-bitcoin-credit-cards/"},{"path":"/it/get-started/what-are-bitcoin-network-fees/","matchPath":"/it/get-started/what-are-bitcoin-network-fees/"},{"path":"/it/get-started/what-are-bitcoin-ordinals/","matchPath":"/it/get-started/what-are-bitcoin-ordinals/"},{"path":"/it/get-started/what-are-crypto-derivatives/","matchPath":"/it/get-started/what-are-crypto-derivatives/"},{"path":"/it/get-started/what-are-crypto-network-fees/","matchPath":"/it/get-started/what-are-crypto-network-fees/"},{"path":"/it/get-started/what-are-crypto-retirement-accounts/","matchPath":"/it/get-started/what-are-crypto-retirement-accounts/"},{"path":"/it/get-started/what-are-erc-20-tokens/","matchPath":"/it/get-started/what-are-erc-20-tokens/"},{"path":"/it/get-started/what-are-liquidity-pools/","matchPath":"/it/get-started/what-are-liquidity-pools/"},{"path":"/it/get-started/what-are-meme-coins/","matchPath":"/it/get-started/what-are-meme-coins/"},{"path":"/it/get-started/what-are-nfts/","matchPath":"/it/get-started/what-are-nfts/"},{"path":"/it/get-started/what-are-prediction-markets/","matchPath":"/it/get-started/what-are-prediction-markets/"},{"path":"/it/get-started/what-are-real-world-assets-rwa/","matchPath":"/it/get-started/what-are-real-world-assets-rwa/"},{"path":"/it/get-started/what-are-shareable-links/","matchPath":"/it/get-started/what-are-shareable-links/"},{"path":"/it/get-started/what-are-sidechains/","matchPath":"/it/get-started/what-are-sidechains/"},{"path":"/it/get-started/what-are-stablecoins/","matchPath":"/it/get-started/what-are-stablecoins/"},{"path":"/it/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/it/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/it/get-started/what-are-transaction-fees/","matchPath":"/it/get-started/what-are-transaction-fees/"},{"path":"/it/get-started/what-is-a-bitcoin-ira/","matchPath":"/it/get-started/what-is-a-bitcoin-ira/"},{"path":"/it/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/it/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/it/get-started/what-is-a-bitcoin-wallet/","matchPath":"/it/get-started/what-is-a-bitcoin-wallet/"},{"path":"/it/get-started/what-is-a-brokerage/","matchPath":"/it/get-started/what-is-a-brokerage/"},{"path":"/it/get-started/what-is-a-cex/","matchPath":"/it/get-started/what-is-a-cex/"},{"path":"/it/get-started/what-is-a-confirmation/","matchPath":"/it/get-started/what-is-a-confirmation/"},{"path":"/it/get-started/what-is-a-consensus-mechanism/","matchPath":"/it/get-started/what-is-a-consensus-mechanism/"},{"path":"/it/get-started/what-is-a-crypto-wallet/","matchPath":"/it/get-started/what-is-a-crypto-wallet/"},{"path":"/it/get-started/what-is-a-dao/","matchPath":"/it/get-started/what-is-a-dao/"},{"path":"/it/get-started/what-is-a-dApp/","matchPath":"/it/get-started/what-is-a-dApp/"},{"path":"/it/get-started/what-is-a-dex/","matchPath":"/it/get-started/what-is-a-dex/"},{"path":"/it/get-started/what-is-a-liquid-staking-token/","matchPath":"/it/get-started/what-is-a-liquid-staking-token/"},{"path":"/it/get-started/what-is-a-smart-contract/","matchPath":"/it/get-started/what-is-a-smart-contract/"},{"path":"/it/get-started/what-is-a-token-sale/","matchPath":"/it/get-started/what-is-a-token-sale/"},{"path":"/it/get-started/what-is-a-token/","matchPath":"/it/get-started/what-is-a-token/"},{"path":"/it/get-started/what-is-an-airdrop/","matchPath":"/it/get-started/what-is-an-airdrop/"},{"path":"/it/get-started/what-is-apy/","matchPath":"/it/get-started/what-is-apy/"},{"path":"/it/get-started/what-is-avalanche/","matchPath":"/it/get-started/what-is-avalanche/"},{"path":"/it/get-started/what-is-bitcoin-cash/","matchPath":"/it/get-started/what-is-bitcoin-cash/"},{"path":"/it/get-started/what-is-Bitcoin-ETF/","matchPath":"/it/get-started/what-is-Bitcoin-ETF/"},{"path":"/it/get-started/what-is-bitcoin-gambling/","matchPath":"/it/get-started/what-is-bitcoin-gambling/"},{"path":"/it/get-started/what-is-bitcoin-governance/","matchPath":"/it/get-started/what-is-bitcoin-governance/"},{"path":"/it/get-started/what-is-bitcoin-halving/","matchPath":"/it/get-started/what-is-bitcoin-halving/"},{"path":"/it/get-started/what-is-bitcoin-mining/","matchPath":"/it/get-started/what-is-bitcoin-mining/"},{"path":"/it/get-started/what-is-bitcoin-op-cat/","matchPath":"/it/get-started/what-is-bitcoin-op-cat/"},{"path":"/it/get-started/what-is-bitcoin-otc-trading/","matchPath":"/it/get-started/what-is-bitcoin-otc-trading/"},{"path":"/it/get-started/what-is-bitcoin/","matchPath":"/it/get-started/what-is-bitcoin/"},{"path":"/it/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/it/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/it/get-started/what-is-censorship-resistance/","matchPath":"/it/get-started/what-is-censorship-resistance/"},{"path":"/it/get-started/what-is-cex-education/","matchPath":"/it/get-started/what-is-cex-education/"},{"path":"/it/get-started/what-is-coin-mixer/","matchPath":"/it/get-started/what-is-coin-mixer/"},{"path":"/it/get-started/what-is-cross-chain-interoperability/","matchPath":"/it/get-started/what-is-cross-chain-interoperability/"},{"path":"/it/get-started/what-is-crypto-asset-management/","matchPath":"/it/get-started/what-is-crypto-asset-management/"},{"path":"/it/get-started/what-is-crypto-insurance/","matchPath":"/it/get-started/what-is-crypto-insurance/"},{"path":"/it/get-started/what-is-crypto-lending/","matchPath":"/it/get-started/what-is-crypto-lending/"},{"path":"/it/get-started/what-is-defi-decentralized-finance/","matchPath":"/it/get-started/what-is-defi-decentralized-finance/"},{"path":"/it/get-started/what-is-EIP-1559/","matchPath":"/it/get-started/what-is-EIP-1559/"},{"path":"/it/get-started/what-is-eth-2/","matchPath":"/it/get-started/what-is-eth-2/"},{"path":"/it/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/it/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/it/get-started/what-is-eth-used-for/","matchPath":"/it/get-started/what-is-eth-used-for/"},{"path":"/it/get-started/what-is-ethereum-monetary-policy/","matchPath":"/it/get-started/what-is-ethereum-monetary-policy/"},{"path":"/it/get-started/what-is-ethereum/","matchPath":"/it/get-started/what-is-ethereum/"},{"path":"/it/get-started/what-is-evm/","matchPath":"/it/get-started/what-is-evm/"},{"path":"/it/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/it/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/it/get-started/what-is-fractal-bitcoin/","matchPath":"/it/get-started/what-is-fractal-bitcoin/"},{"path":"/it/get-started/what-is-gas/","matchPath":"/it/get-started/what-is-gas/"},{"path":"/it/get-started/what-is-inflation/","matchPath":"/it/get-started/what-is-inflation/"},{"path":"/it/get-started/what-is-layer-2-on-ethereum/","matchPath":"/it/get-started/what-is-layer-2-on-ethereum/"},{"path":"/it/get-started/what-is-lightning-network/","matchPath":"/it/get-started/what-is-lightning-network/"},{"path":"/it/get-started/what-is-liquidity/","matchPath":"/it/get-started/what-is-liquidity/"},{"path":"/it/get-started/what-is-money/","matchPath":"/it/get-started/what-is-money/"},{"path":"/it/get-started/what-is-polygon-matic/","matchPath":"/it/get-started/what-is-polygon-matic/"},{"path":"/it/get-started/what-is-proof-of-stake/","matchPath":"/it/get-started/what-is-proof-of-stake/"},{"path":"/it/get-started/what-is-proof-of-work/","matchPath":"/it/get-started/what-is-proof-of-work/"},{"path":"/it/get-started/what-is-restaking/","matchPath":"/it/get-started/what-is-restaking/"},{"path":"/it/get-started/what-is-staking/","matchPath":"/it/get-started/what-is-staking/"},{"path":"/it/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/it/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/it/get-started/what-is-the-double-spend-problem/","matchPath":"/it/get-started/what-is-the-double-spend-problem/"},{"path":"/it/get-started/what-is-the-metaverse/","matchPath":"/it/get-started/what-is-the-metaverse/"},{"path":"/it/get-started/what-is-the-verse-development-fund/","matchPath":"/it/get-started/what-is-the-verse-development-fund/"},{"path":"/it/get-started/what-is-trading-volume/","matchPath":"/it/get-started/what-is-trading-volume/"},{"path":"/it/get-started/what-is-uni/","matchPath":"/it/get-started/what-is-uni/"},{"path":"/it/get-started/what-is-verse-community/","matchPath":"/it/get-started/what-is-verse-community/"},{"path":"/it/get-started/what-is-verse-dex/","matchPath":"/it/get-started/what-is-verse-dex/"},{"path":"/it/get-started/what-is-verse/","matchPath":"/it/get-started/what-is-verse/"},{"path":"/it/get-started/what-is-volatility/","matchPath":"/it/get-started/what-is-volatility/"},{"path":"/it/get-started/what-is-walletconnect/","matchPath":"/it/get-started/what-is-walletconnect/"},{"path":"/it/get-started/what-is-wbtc/","matchPath":"/it/get-started/what-is-wbtc/"},{"path":"/it/get-started/what-is-weth/","matchPath":"/it/get-started/what-is-weth/"},{"path":"/it/get-started/what-is-yfi/","matchPath":"/it/get-started/what-is-yfi/"},{"path":"/it/get-started/what-is-yield-farming/","matchPath":"/it/get-started/what-is-yield-farming/"},{"path":"/it/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/it/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/it/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/it/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/it/get-started/who-created-ethereum/","matchPath":"/it/get-started/who-created-ethereum/"},{"path":"/it/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/it/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/it/giftcard/history/","matchPath":"/it/giftcard/history/"},{"path":"/it/jobs/solidity/","matchPath":"/it/jobs/solidity/"},{"path":"/it/luxury/art-collectibles/","matchPath":"/it/luxury/art-collectibles/"},{"path":"/it/luxury/concierge/","matchPath":"/it/luxury/concierge/"},{"path":"/it/luxury/designer-fashion/","matchPath":"/it/luxury/designer-fashion/"},{"path":"/it/luxury/events/","matchPath":"/it/luxury/events/"},{"path":"/it/luxury/experiences/","matchPath":"/it/luxury/experiences/"},{"path":"/it/luxury/ferrari-dealers/","matchPath":"/it/luxury/ferrari-dealers/"},{"path":"/it/luxury/health-wellness/","matchPath":"/it/luxury/health-wellness/"},{"path":"/it/luxury/hotels-resorts/","matchPath":"/it/luxury/hotels-resorts/"},{"path":"/it/luxury/jewelry/","matchPath":"/it/luxury/jewelry/"},{"path":"/it/luxury/private-jets/","matchPath":"/it/luxury/private-jets/"},{"path":"/it/luxury/real-estate/","matchPath":"/it/luxury/real-estate/"},{"path":"/it/luxury/supercars/","matchPath":"/it/luxury/supercars/"},{"path":"/it/luxury/timepieces/","matchPath":"/it/luxury/timepieces/"},{"path":"/it/luxury/villas/","matchPath":"/it/luxury/villas/"},{"path":"/it/luxury/yachts/","matchPath":"/it/luxury/yachts/"},{"path":"/it/merchant-solutions/brick-mortar/","matchPath":"/it/merchant-solutions/brick-mortar/"},{"path":"/it/merchant-solutions/online-business/","matchPath":"/it/merchant-solutions/online-business/"},{"path":"/it/mining/bitcoin-cash/","matchPath":"/it/mining/bitcoin-cash/"},{"path":"/it/mining/cloud-mining/","matchPath":"/it/mining/cloud-mining/"},{"path":"/it/mining/dash/","matchPath":"/it/mining/dash/"},{"path":"/it/mining/dogecoin/","matchPath":"/it/mining/dogecoin/"},{"path":"/it/mining/kaspa/","matchPath":"/it/mining/kaspa/"},{"path":"/it/mining/litecoin/","matchPath":"/it/mining/litecoin/"},{"path":"/it/mining/monero/","matchPath":"/it/mining/monero/"},{"path":"/it/mining/ravencoin/","matchPath":"/it/mining/ravencoin/"},{"path":"/it/newsletters/btc-research/","matchPath":"/it/newsletters/btc-research/"},{"path":"/it/newsletters/games-updates/","matchPath":"/it/newsletters/games-updates/"},{"path":"/it/newsletters/price-analysis/","matchPath":"/it/newsletters/price-analysis/"},{"path":"/it/newsletters/product-updates/","matchPath":"/it/newsletters/product-updates/"},{"path":"/it/newsletters/verse-updates/","matchPath":"/it/newsletters/verse-updates/"},{"path":"/it/newsletters/week-in-review/","matchPath":"/it/newsletters/week-in-review/"},{"path":"/it/payments/gateways/","matchPath":"/it/payments/gateways/"},{"path":"/it/payments/integrations/","matchPath":"/it/payments/integrations/"},{"path":"/it/payments/merchants/","matchPath":"/it/payments/merchants/"},{"path":"/it/payments/point-of-sale/","matchPath":"/it/payments/point-of-sale/"},{"path":"/it/payments/processors/","matchPath":"/it/payments/processors/"},{"path":"/it/payments/remittances/","matchPath":"/it/payments/remittances/"},{"path":"/it/payments/solutions/","matchPath":"/it/payments/solutions/"},{"path":"/it/payments/tips/","matchPath":"/it/payments/tips/"},{"path":"/it/poker/faqs/","matchPath":"/it/poker/faqs/"},{"path":"/it/poker/how-to-play/","matchPath":"/it/poker/how-to-play/"},{"path":"/it/poker/legality/","matchPath":"/it/poker/legality/"},{"path":"/it/poker/promotions/","matchPath":"/it/poker/promotions/"},{"path":"/it/poker/room-reviews/","matchPath":"/it/poker/room-reviews/"},{"path":"/it/poker/tournaments/","matchPath":"/it/poker/tournaments/"},{"path":"/it/price/cosmos-atom/","matchPath":"/it/price/cosmos-atom/"},{"path":"/it/price/ethereum-classic-etc/","matchPath":"/it/price/ethereum-classic-etc/"},{"path":"/it/price/immutable-x-imx/","matchPath":"/it/price/immutable-x-imx/"},{"path":"/it/price/injective-inj/","matchPath":"/it/price/injective-inj/"},{"path":"/it/price/internet-computer-icp/","matchPath":"/it/price/internet-computer-icp/"},{"path":"/it/research/btc-research/","matchPath":"/it/research/btc-research/"},{"path":"/it/research/games-updates/","matchPath":"/it/research/games-updates/"},{"path":"/it/research/price-analysis/","matchPath":"/it/research/price-analysis/"},{"path":"/it/research/product-updates/","matchPath":"/it/research/product-updates/"},{"path":"/it/research/verse-updates/","matchPath":"/it/research/verse-updates/"},{"path":"/it/research/week-in-review/","matchPath":"/it/research/week-in-review/"},{"path":"/it/tax/calculators/","matchPath":"/it/tax/calculators/"},{"path":"/it/tax/compliance/","matchPath":"/it/tax/compliance/"},{"path":"/it/tax/forms/","matchPath":"/it/tax/forms/"},{"path":"/it/tax/guides/","matchPath":"/it/tax/guides/"},{"path":"/it/tax/laws/","matchPath":"/it/tax/laws/"},{"path":"/it/tax/professionals/","matchPath":"/it/tax/professionals/"},{"path":"/it/tax/software/","matchPath":"/it/tax/software/"},{"path":"/it/tax/strategies/","matchPath":"/it/tax/strategies/"},{"path":"/it/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/it/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/it/trading/top-contracts-for-difference/","matchPath":"/it/trading/top-contracts-for-difference/"},{"path":"/it/vpn/best-vpn-in-us/","matchPath":"/it/vpn/best-vpn-in-us/"},{"path":"/it/wallet-services/backup-options/","matchPath":"/it/wallet-services/backup-options/"},{"path":"/it/wallet-services/secure-wallet/","matchPath":"/it/wallet-services/secure-wallet/"},{"path":"/it/wallet-services/security-tips/","matchPath":"/it/wallet-services/security-tips/"},{"path":"/it/wallet-services/setup-guide/","matchPath":"/it/wallet-services/setup-guide/"},{"path":"/it/wallet-services/wallet-download/","matchPath":"/it/wallet-services/wallet-download/"},{"path":"/it/wallet/avalanche/","matchPath":"/it/wallet/avalanche/"},{"path":"/it/wallet/bitcoin/","matchPath":"/it/wallet/bitcoin/"},{"path":"/it/wallet/bnb/","matchPath":"/it/wallet/bnb/"},{"path":"/it/wallet/browser-extension/","matchPath":"/it/wallet/browser-extension/"},{"path":"/it/wallet/cardano/","matchPath":"/it/wallet/cardano/"},{"path":"/it/wallet/custodial/","matchPath":"/it/wallet/custodial/"},{"path":"/it/wallet/defi-wallets/","matchPath":"/it/wallet/defi-wallets/"},{"path":"/it/wallet/defi/","matchPath":"/it/wallet/defi/"},{"path":"/it/wallet/desktop/","matchPath":"/it/wallet/desktop/"},{"path":"/it/wallet/enterprise/","matchPath":"/it/wallet/enterprise/"},{"path":"/it/wallet/ethereum/","matchPath":"/it/wallet/ethereum/"},{"path":"/it/wallet/gaming/","matchPath":"/it/wallet/gaming/"},{"path":"/it/wallet/hardware/","matchPath":"/it/wallet/hardware/"},{"path":"/it/wallet/hodl/","matchPath":"/it/wallet/hodl/"},{"path":"/it/wallet/lightning/","matchPath":"/it/wallet/lightning/"},{"path":"/it/wallet/litecoin/","matchPath":"/it/wallet/litecoin/"},{"path":"/it/wallet/mobile/","matchPath":"/it/wallet/mobile/"},{"path":"/it/wallet/multi-signature/","matchPath":"/it/wallet/multi-signature/"},{"path":"/it/wallet/multichain/","matchPath":"/it/wallet/multichain/"},{"path":"/it/wallet/nft/","matchPath":"/it/wallet/nft/"},{"path":"/it/wallet/paper-wallets/","matchPath":"/it/wallet/paper-wallets/"},{"path":"/it/wallet/polkadot/","matchPath":"/it/wallet/polkadot/"},{"path":"/it/wallet/privacy/","matchPath":"/it/wallet/privacy/"},{"path":"/it/wallet/remittance/","matchPath":"/it/wallet/remittance/"},{"path":"/it/wallet/reviews/","matchPath":"/it/wallet/reviews/"},{"path":"/it/wallet/self-custodial/","matchPath":"/it/wallet/self-custodial/"},{"path":"/it/wallet/solana/","matchPath":"/it/wallet/solana/"},{"path":"/it/wallet/staking/","matchPath":"/it/wallet/staking/"},{"path":"/it/wallet/tezos/","matchPath":"/it/wallet/tezos/"},{"path":"/it/wallet/trading/","matchPath":"/it/wallet/trading/"},{"path":"/it/wallet/xrp/","matchPath":"/it/wallet/xrp/"},{"path":"/it/wealth-management/binance-coin/","matchPath":"/it/wealth-management/binance-coin/"},{"path":"/it/wealth-management/bitcoin-cash/","matchPath":"/it/wealth-management/bitcoin-cash/"},{"path":"/it/wealth-management/bitcoin/","matchPath":"/it/wealth-management/bitcoin/"},{"path":"/it/wealth-management/ethereum/","matchPath":"/it/wealth-management/ethereum/"},{"path":"/it/wealth-management/solana/","matchPath":"/it/wealth-management/solana/"},{"path":"/it/wealth-management/usdc/","matchPath":"/it/wealth-management/usdc/"},{"path":"/it/wealth-management/usdt-tether/","matchPath":"/it/wealth-management/usdt-tether/"},{"path":"/ru/advertise/podcast/","matchPath":"/ru/advertise/podcast/"},{"path":"/ru/bitcoin-cash-register/service-terms/","matchPath":"/ru/bitcoin-cash-register/service-terms/"},{"path":"/ru/cards/anonymous-cards/","matchPath":"/ru/cards/anonymous-cards/"},{"path":"/ru/cards/cashback-cards/","matchPath":"/ru/cards/cashback-cards/"},{"path":"/ru/cards/credit-cards/","matchPath":"/ru/cards/credit-cards/"},{"path":"/ru/cards/crypto-cards/","matchPath":"/ru/cards/crypto-cards/"},{"path":"/ru/cards/debit-cards/","matchPath":"/ru/cards/debit-cards/"},{"path":"/ru/cards/gemini-card/","matchPath":"/ru/cards/gemini-card/"},{"path":"/ru/cards/gift-cards/","matchPath":"/ru/cards/gift-cards/"},{"path":"/ru/cards/mastercard-cards/","matchPath":"/ru/cards/mastercard-cards/"},{"path":"/ru/cards/prepaid-cards/","matchPath":"/ru/cards/prepaid-cards/"},{"path":"/ru/cards/reviews/","matchPath":"/ru/cards/reviews/"},{"path":"/ru/cards/rewards-cards/","matchPath":"/ru/cards/rewards-cards/"},{"path":"/ru/cards/solana/","matchPath":"/ru/cards/solana/"},{"path":"/ru/cards/virtual-cards/","matchPath":"/ru/cards/virtual-cards/"},{"path":"/ru/cards/visa-cards/","matchPath":"/ru/cards/visa-cards/"},{"path":"/ru/cards/web3-cards/","matchPath":"/ru/cards/web3-cards/"},{"path":"/ru/conferences/africa/","matchPath":"/ru/conferences/africa/"},{"path":"/ru/conferences/ai/","matchPath":"/ru/conferences/ai/"},{"path":"/ru/conferences/asia/","matchPath":"/ru/conferences/asia/"},{"path":"/ru/conferences/australia/","matchPath":"/ru/conferences/australia/"},{"path":"/ru/conferences/avalanche/","matchPath":"/ru/conferences/avalanche/"},{"path":"/ru/conferences/bitcoin/","matchPath":"/ru/conferences/bitcoin/"},{"path":"/ru/conferences/blockchain/","matchPath":"/ru/conferences/blockchain/"},{"path":"/ru/conferences/bnb/","matchPath":"/ru/conferences/bnb/"},{"path":"/ru/conferences/canada/","matchPath":"/ru/conferences/canada/"},{"path":"/ru/conferences/cardano/","matchPath":"/ru/conferences/cardano/"},{"path":"/ru/conferences/crypto/","matchPath":"/ru/conferences/crypto/"},{"path":"/ru/conferences/defi/","matchPath":"/ru/conferences/defi/"},{"path":"/ru/conferences/dubai/","matchPath":"/ru/conferences/dubai/"},{"path":"/ru/conferences/ethereum/","matchPath":"/ru/conferences/ethereum/"},{"path":"/ru/conferences/europe/","matchPath":"/ru/conferences/europe/"},{"path":"/ru/conferences/games/","matchPath":"/ru/conferences/games/"},{"path":"/ru/conferences/japan/","matchPath":"/ru/conferences/japan/"},{"path":"/ru/conferences/latam/","matchPath":"/ru/conferences/latam/"},{"path":"/ru/conferences/litecoin/","matchPath":"/ru/conferences/litecoin/"},{"path":"/ru/conferences/memes/","matchPath":"/ru/conferences/memes/"},{"path":"/ru/conferences/metaverse/","matchPath":"/ru/conferences/metaverse/"},{"path":"/ru/conferences/middle-east/","matchPath":"/ru/conferences/middle-east/"},{"path":"/ru/conferences/nft/","matchPath":"/ru/conferences/nft/"},{"path":"/ru/conferences/polkadot/","matchPath":"/ru/conferences/polkadot/"},{"path":"/ru/conferences/singapore/","matchPath":"/ru/conferences/singapore/"},{"path":"/ru/conferences/solana/","matchPath":"/ru/conferences/solana/"},{"path":"/ru/conferences/startups/","matchPath":"/ru/conferences/startups/"},{"path":"/ru/conferences/tech/","matchPath":"/ru/conferences/tech/"},{"path":"/ru/conferences/tezos/","matchPath":"/ru/conferences/tezos/"},{"path":"/ru/conferences/usa/","matchPath":"/ru/conferences/usa/"},{"path":"/ru/conferences/web3/","matchPath":"/ru/conferences/web3/"},{"path":"/ru/conferences/xrp/","matchPath":"/ru/conferences/xrp/"},{"path":"/ru/crypto-education/beginner-guides/","matchPath":"/ru/crypto-education/beginner-guides/"},{"path":"/ru/crypto-education/blockchain-basics/","matchPath":"/ru/crypto-education/blockchain-basics/"},{"path":"/ru/crypto-education/buying-guides/","matchPath":"/ru/crypto-education/buying-guides/"},{"path":"/ru/crypto-education/tax-information/","matchPath":"/ru/crypto-education/tax-information/"},{"path":"/ru/crypto-venture-network/accelerators/","matchPath":"/ru/crypto-venture-network/accelerators/"},{"path":"/ru/crypto-venture-network/incubators/","matchPath":"/ru/crypto-venture-network/incubators/"},{"path":"/ru/crypto-venture-network/portfolio-companies/","matchPath":"/ru/crypto-venture-network/portfolio-companies/"},{"path":"/ru/crypto-venture-network/syndicates/","matchPath":"/ru/crypto-venture-network/syndicates/"},{"path":"/ru/crypto-venture-network/venture-capital-funds/","matchPath":"/ru/crypto-venture-network/venture-capital-funds/"},{"path":"/ru/decentralized-exchanges/best-practices/","matchPath":"/ru/decentralized-exchanges/best-practices/"},{"path":"/ru/decentralized-exchanges/defi-articles/","matchPath":"/ru/decentralized-exchanges/defi-articles/"},{"path":"/ru/decentralized-exchanges/dex-overview/","matchPath":"/ru/decentralized-exchanges/dex-overview/"},{"path":"/ru/decentralized-exchanges/swap-tutorials/","matchPath":"/ru/decentralized-exchanges/swap-tutorials/"},{"path":"/ru/depin/how-to-buy-depin/","matchPath":"/ru/depin/how-to-buy-depin/"},{"path":"/ru/directory/cards/","matchPath":"/ru/directory/cards/"},{"path":"/ru/directory/conferences/","matchPath":"/ru/directory/conferences/"},{"path":"/ru/directory/exchanges/","matchPath":"/ru/directory/exchanges/"},{"path":"/ru/directory/gambling/","matchPath":"/ru/directory/gambling/"},{"path":"/ru/directory/mining/","matchPath":"/ru/directory/mining/"},{"path":"/ru/directory/wallets/","matchPath":"/ru/directory/wallets/"},{"path":"/ru/exchanges/aave/","matchPath":"/ru/exchanges/aave/"},{"path":"/ru/exchanges/algeria/","matchPath":"/ru/exchanges/algeria/"},{"path":"/ru/exchanges/algorithmic-trading-platforms/","matchPath":"/ru/exchanges/algorithmic-trading-platforms/"},{"path":"/ru/exchanges/altcoins/","matchPath":"/ru/exchanges/altcoins/"},{"path":"/ru/exchanges/anonymous-exchanges/","matchPath":"/ru/exchanges/anonymous-exchanges/"},{"path":"/ru/exchanges/aptos/","matchPath":"/ru/exchanges/aptos/"},{"path":"/ru/exchanges/arbitrage-bots/","matchPath":"/ru/exchanges/arbitrage-bots/"},{"path":"/ru/exchanges/arbitrum/","matchPath":"/ru/exchanges/arbitrum/"},{"path":"/ru/exchanges/argentina/","matchPath":"/ru/exchanges/argentina/"},{"path":"/ru/exchanges/artificial-superintelligence-alliance/","matchPath":"/ru/exchanges/artificial-superintelligence-alliance/"},{"path":"/ru/exchanges/asia/","matchPath":"/ru/exchanges/asia/"},{"path":"/ru/exchanges/australia/","matchPath":"/ru/exchanges/australia/"},{"path":"/ru/exchanges/auto-dca/","matchPath":"/ru/exchanges/auto-dca/"},{"path":"/ru/exchanges/automated-trading/","matchPath":"/ru/exchanges/automated-trading/"},{"path":"/ru/exchanges/avalanche/","matchPath":"/ru/exchanges/avalanche/"},{"path":"/ru/exchanges/bahrain/","matchPath":"/ru/exchanges/bahrain/"},{"path":"/ru/exchanges/bangladesh/","matchPath":"/ru/exchanges/bangladesh/"},{"path":"/ru/exchanges/base/","matchPath":"/ru/exchanges/base/"},{"path":"/ru/exchanges/binance-coin/","matchPath":"/ru/exchanges/binance-coin/"},{"path":"/ru/exchanges/binary-options/","matchPath":"/ru/exchanges/binary-options/"},{"path":"/ru/exchanges/bitcoin-cash/","matchPath":"/ru/exchanges/bitcoin-cash/"},{"path":"/ru/exchanges/bittensor/","matchPath":"/ru/exchanges/bittensor/"},{"path":"/ru/exchanges/brazil/","matchPath":"/ru/exchanges/brazil/"},{"path":"/ru/exchanges/canada/","matchPath":"/ru/exchanges/canada/"},{"path":"/ru/exchanges/cardano/","matchPath":"/ru/exchanges/cardano/"},{"path":"/ru/exchanges/central-america/","matchPath":"/ru/exchanges/central-america/"},{"path":"/ru/exchanges/centralized/","matchPath":"/ru/exchanges/centralized/"},{"path":"/ru/exchanges/chainlink/","matchPath":"/ru/exchanges/chainlink/"},{"path":"/ru/exchanges/chile/","matchPath":"/ru/exchanges/chile/"},{"path":"/ru/exchanges/china/","matchPath":"/ru/exchanges/china/"},{"path":"/ru/exchanges/colombia/","matchPath":"/ru/exchanges/colombia/"},{"path":"/ru/exchanges/congo/","matchPath":"/ru/exchanges/congo/"},{"path":"/ru/exchanges/contract-trading/","matchPath":"/ru/exchanges/contract-trading/"},{"path":"/ru/exchanges/copy-trading/","matchPath":"/ru/exchanges/copy-trading/"},{"path":"/ru/exchanges/cosmos/","matchPath":"/ru/exchanges/cosmos/"},{"path":"/ru/exchanges/cronos/","matchPath":"/ru/exchanges/cronos/"},{"path":"/ru/exchanges/crypto-index-trading/","matchPath":"/ru/exchanges/crypto-index-trading/"},{"path":"/ru/exchanges/crypto-to-fiat-exchanges/","matchPath":"/ru/exchanges/crypto-to-fiat-exchanges/"},{"path":"/ru/exchanges/cryptocurrency-brokers/","matchPath":"/ru/exchanges/cryptocurrency-brokers/"},{"path":"/ru/exchanges/czech-republic/","matchPath":"/ru/exchanges/czech-republic/"},{"path":"/ru/exchanges/dai/","matchPath":"/ru/exchanges/dai/"},{"path":"/ru/exchanges/day-trading/","matchPath":"/ru/exchanges/day-trading/"},{"path":"/ru/exchanges/decentralized/","matchPath":"/ru/exchanges/decentralized/"},{"path":"/ru/exchanges/demo-trading-accounts/","matchPath":"/ru/exchanges/demo-trading-accounts/"},{"path":"/ru/exchanges/derivatives/","matchPath":"/ru/exchanges/derivatives/"},{"path":"/ru/exchanges/dogecoin/","matchPath":"/ru/exchanges/dogecoin/"},{"path":"/ru/exchanges/dual-investment-trading/","matchPath":"/ru/exchanges/dual-investment-trading/"},{"path":"/ru/exchanges/egypt/","matchPath":"/ru/exchanges/egypt/"},{"path":"/ru/exchanges/ethereum-classic/","matchPath":"/ru/exchanges/ethereum-classic/"},{"path":"/ru/exchanges/europe/","matchPath":"/ru/exchanges/europe/"},{"path":"/ru/exchanges/filecoin/","matchPath":"/ru/exchanges/filecoin/"},{"path":"/ru/exchanges/for-beginners/","matchPath":"/ru/exchanges/for-beginners/"},{"path":"/ru/exchanges/france/","matchPath":"/ru/exchanges/france/"},{"path":"/ru/exchanges/futures-trading/","matchPath":"/ru/exchanges/futures-trading/"},{"path":"/ru/exchanges/germany/","matchPath":"/ru/exchanges/germany/"},{"path":"/ru/exchanges/ghana/","matchPath":"/ru/exchanges/ghana/"},{"path":"/ru/exchanges/greece/","matchPath":"/ru/exchanges/greece/"},{"path":"/ru/exchanges/grid-trading/","matchPath":"/ru/exchanges/grid-trading/"},{"path":"/ru/exchanges/hedera/","matchPath":"/ru/exchanges/hedera/"},{"path":"/ru/exchanges/hong-kong/","matchPath":"/ru/exchanges/hong-kong/"},{"path":"/ru/exchanges/hungary/","matchPath":"/ru/exchanges/hungary/"},{"path":"/ru/exchanges/hybrid/","matchPath":"/ru/exchanges/hybrid/"},{"path":"/ru/exchanges/immutable/","matchPath":"/ru/exchanges/immutable/"},{"path":"/ru/exchanges/india/","matchPath":"/ru/exchanges/india/"},{"path":"/ru/exchanges/indonesia/","matchPath":"/ru/exchanges/indonesia/"},{"path":"/ru/exchanges/injective/","matchPath":"/ru/exchanges/injective/"},{"path":"/ru/exchanges/ireland/","matchPath":"/ru/exchanges/ireland/"},{"path":"/ru/exchanges/israel/","matchPath":"/ru/exchanges/israel/"},{"path":"/ru/exchanges/italy/","matchPath":"/ru/exchanges/italy/"},{"path":"/ru/exchanges/japan/","matchPath":"/ru/exchanges/japan/"},{"path":"/ru/exchanges/kaspa/","matchPath":"/ru/exchanges/kaspa/"},{"path":"/ru/exchanges/kazakhstan/","matchPath":"/ru/exchanges/kazakhstan/"},{"path":"/ru/exchanges/kenya/","matchPath":"/ru/exchanges/kenya/"},{"path":"/ru/exchanges/korea/","matchPath":"/ru/exchanges/korea/"},{"path":"/ru/exchanges/latin-america/","matchPath":"/ru/exchanges/latin-america/"},{"path":"/ru/exchanges/lending-platforms/","matchPath":"/ru/exchanges/lending-platforms/"},{"path":"/ru/exchanges/leverage-trading/","matchPath":"/ru/exchanges/leverage-trading/"},{"path":"/ru/exchanges/liquidity-pools/","matchPath":"/ru/exchanges/liquidity-pools/"},{"path":"/ru/exchanges/litecoin/","matchPath":"/ru/exchanges/litecoin/"},{"path":"/ru/exchanges/live-trading/","matchPath":"/ru/exchanges/live-trading/"},{"path":"/ru/exchanges/lowest-fees/","matchPath":"/ru/exchanges/lowest-fees/"},{"path":"/ru/exchanges/maker/","matchPath":"/ru/exchanges/maker/"},{"path":"/ru/exchanges/malaysia/","matchPath":"/ru/exchanges/malaysia/"},{"path":"/ru/exchanges/mantle/","matchPath":"/ru/exchanges/mantle/"},{"path":"/ru/exchanges/margin-trading/","matchPath":"/ru/exchanges/margin-trading/"},{"path":"/ru/exchanges/market-making-exchanges/","matchPath":"/ru/exchanges/market-making-exchanges/"},{"path":"/ru/exchanges/memes/","matchPath":"/ru/exchanges/memes/"},{"path":"/ru/exchanges/mexico/","matchPath":"/ru/exchanges/mexico/"},{"path":"/ru/exchanges/middle-east/","matchPath":"/ru/exchanges/middle-east/"},{"path":"/ru/exchanges/monero/","matchPath":"/ru/exchanges/monero/"},{"path":"/ru/exchanges/morocco/","matchPath":"/ru/exchanges/morocco/"},{"path":"/ru/exchanges/near-protocol/","matchPath":"/ru/exchanges/near-protocol/"},{"path":"/ru/exchanges/neo/","matchPath":"/ru/exchanges/neo/"},{"path":"/ru/exchanges/netherlands/","matchPath":"/ru/exchanges/netherlands/"},{"path":"/ru/exchanges/new-zealand/","matchPath":"/ru/exchanges/new-zealand/"},{"path":"/ru/exchanges/nigeria/","matchPath":"/ru/exchanges/nigeria/"},{"path":"/ru/exchanges/norway/","matchPath":"/ru/exchanges/norway/"},{"path":"/ru/exchanges/okb/","matchPath":"/ru/exchanges/okb/"},{"path":"/ru/exchanges/oman/","matchPath":"/ru/exchanges/oman/"},{"path":"/ru/exchanges/optimism/","matchPath":"/ru/exchanges/optimism/"},{"path":"/ru/exchanges/options-trading/","matchPath":"/ru/exchanges/options-trading/"},{"path":"/ru/exchanges/p2p-crypto-exchanges/","matchPath":"/ru/exchanges/p2p-crypto-exchanges/"},{"path":"/ru/exchanges/pakistan/","matchPath":"/ru/exchanges/pakistan/"},{"path":"/ru/exchanges/paypal-deposit/","matchPath":"/ru/exchanges/paypal-deposit/"},{"path":"/ru/exchanges/pepe/","matchPath":"/ru/exchanges/pepe/"},{"path":"/ru/exchanges/perpetual-futures-trading/","matchPath":"/ru/exchanges/perpetual-futures-trading/"},{"path":"/ru/exchanges/peru/","matchPath":"/ru/exchanges/peru/"},{"path":"/ru/exchanges/philippines/","matchPath":"/ru/exchanges/philippines/"},{"path":"/ru/exchanges/poland/","matchPath":"/ru/exchanges/poland/"},{"path":"/ru/exchanges/polkadot/","matchPath":"/ru/exchanges/polkadot/"},{"path":"/ru/exchanges/polygon/","matchPath":"/ru/exchanges/polygon/"},{"path":"/ru/exchanges/portugal/","matchPath":"/ru/exchanges/portugal/"},{"path":"/ru/exchanges/qatar/","matchPath":"/ru/exchanges/qatar/"},{"path":"/ru/exchanges/recurring-buys/","matchPath":"/ru/exchanges/recurring-buys/"},{"path":"/ru/exchanges/render/","matchPath":"/ru/exchanges/render/"},{"path":"/ru/exchanges/reviews/","matchPath":"/ru/exchanges/reviews/"},{"path":"/ru/exchanges/ripple/","matchPath":"/ru/exchanges/ripple/"},{"path":"/ru/exchanges/romania/","matchPath":"/ru/exchanges/romania/"},{"path":"/ru/exchanges/russia/","matchPath":"/ru/exchanges/russia/"},{"path":"/ru/exchanges/safest/","matchPath":"/ru/exchanges/safest/"},{"path":"/ru/exchanges/saudi-arabia/","matchPath":"/ru/exchanges/saudi-arabia/"},{"path":"/ru/exchanges/savings-accounts/","matchPath":"/ru/exchanges/savings-accounts/"},{"path":"/ru/exchanges/serbia/","matchPath":"/ru/exchanges/serbia/"},{"path":"/ru/exchanges/shiba-inu/","matchPath":"/ru/exchanges/shiba-inu/"},{"path":"/ru/exchanges/shorting/","matchPath":"/ru/exchanges/shorting/"},{"path":"/ru/exchanges/singapore/","matchPath":"/ru/exchanges/singapore/"},{"path":"/ru/exchanges/solana/","matchPath":"/ru/exchanges/solana/"},{"path":"/ru/exchanges/south-africa/","matchPath":"/ru/exchanges/south-africa/"},{"path":"/ru/exchanges/south-america/","matchPath":"/ru/exchanges/south-america/"},{"path":"/ru/exchanges/stablecoins/","matchPath":"/ru/exchanges/stablecoins/"},{"path":"/ru/exchanges/stacks/","matchPath":"/ru/exchanges/stacks/"},{"path":"/ru/exchanges/staking-rewards-exchanges/","matchPath":"/ru/exchanges/staking-rewards-exchanges/"},{"path":"/ru/exchanges/stellar/","matchPath":"/ru/exchanges/stellar/"},{"path":"/ru/exchanges/sui/","matchPath":"/ru/exchanges/sui/"},{"path":"/ru/exchanges/swap-platforms/","matchPath":"/ru/exchanges/swap-platforms/"},{"path":"/ru/exchanges/switzerland/","matchPath":"/ru/exchanges/switzerland/"},{"path":"/ru/exchanges/taiwan/","matchPath":"/ru/exchanges/taiwan/"},{"path":"/ru/exchanges/tanzania/","matchPath":"/ru/exchanges/tanzania/"},{"path":"/ru/exchanges/tezos/","matchPath":"/ru/exchanges/tezos/"},{"path":"/ru/exchanges/thailand/","matchPath":"/ru/exchanges/thailand/"},{"path":"/ru/exchanges/tokenized-stocks-trading/","matchPath":"/ru/exchanges/tokenized-stocks-trading/"},{"path":"/ru/exchanges/toncoin/","matchPath":"/ru/exchanges/toncoin/"},{"path":"/ru/exchanges/toshi/","matchPath":"/ru/exchanges/toshi/"},{"path":"/ru/exchanges/tron/","matchPath":"/ru/exchanges/tron/"},{"path":"/ru/exchanges/trump/","matchPath":"/ru/exchanges/trump/"},{"path":"/ru/exchanges/turkey/","matchPath":"/ru/exchanges/turkey/"},{"path":"/ru/exchanges/uganda/","matchPath":"/ru/exchanges/uganda/"},{"path":"/ru/exchanges/ukraine/","matchPath":"/ru/exchanges/ukraine/"},{"path":"/ru/exchanges/uniswap/","matchPath":"/ru/exchanges/uniswap/"},{"path":"/ru/exchanges/united-arab-emirates/","matchPath":"/ru/exchanges/united-arab-emirates/"},{"path":"/ru/exchanges/united-kingdom/","matchPath":"/ru/exchanges/united-kingdom/"},{"path":"/ru/exchanges/usa/","matchPath":"/ru/exchanges/usa/"},{"path":"/ru/exchanges/usdt/","matchPath":"/ru/exchanges/usdt/"},{"path":"/ru/exchanges/vechain/","matchPath":"/ru/exchanges/vechain/"},{"path":"/ru/exchanges/vietnam/","matchPath":"/ru/exchanges/vietnam/"},{"path":"/ru/exchanges/zero-fee-trading/","matchPath":"/ru/exchanges/zero-fee-trading/"},{"path":"/ru/fx/arbitrage/","matchPath":"/ru/fx/arbitrage/"},{"path":"/ru/fx/basics/","matchPath":"/ru/fx/basics/"},{"path":"/ru/fx/brokers/","matchPath":"/ru/fx/brokers/"},{"path":"/ru/fx/market-analysis/","matchPath":"/ru/fx/market-analysis/"},{"path":"/ru/fx/regulations/","matchPath":"/ru/fx/regulations/"},{"path":"/ru/fx/strategies/","matchPath":"/ru/fx/strategies/"},{"path":"/ru/fx/tools/","matchPath":"/ru/fx/tools/"},{"path":"/ru/fx/trading-platforms/","matchPath":"/ru/fx/trading-platforms/"},{"path":"/ru/gambling-guides/blackjack-strategy/","matchPath":"/ru/gambling-guides/blackjack-strategy/"},{"path":"/ru/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/ru/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/ru/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/ru/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/ru/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/ru/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/ru/gambling-guides/poker-strategy/","matchPath":"/ru/gambling-guides/poker-strategy/"},{"path":"/ru/gambling-guides/roulette-strategy/","matchPath":"/ru/gambling-guides/roulette-strategy/"},{"path":"/ru/gambling/betting/","matchPath":"/ru/gambling/betting/"},{"path":"/ru/gambling/bingo/","matchPath":"/ru/gambling/bingo/"},{"path":"/ru/gambling/bots/","matchPath":"/ru/gambling/bots/"},{"path":"/ru/gambling/casino/","matchPath":"/ru/gambling/casino/"},{"path":"/ru/gambling/daily-contests/","matchPath":"/ru/gambling/daily-contests/"},{"path":"/ru/gambling/hot-games/","matchPath":"/ru/gambling/hot-games/"},{"path":"/ru/gambling/new-games/","matchPath":"/ru/gambling/new-games/"},{"path":"/ru/gambling/pachinko/","matchPath":"/ru/gambling/pachinko/"},{"path":"/ru/gambling/play-along/","matchPath":"/ru/gambling/play-along/"},{"path":"/ru/gambling/reviews/","matchPath":"/ru/gambling/reviews/"},{"path":"/ru/gambling/top-games/","matchPath":"/ru/gambling/top-games/"},{"path":"/ru/gambling/top-picks/","matchPath":"/ru/gambling/top-picks/"},{"path":"/ru/gambling/trending-games/","matchPath":"/ru/gambling/trending-games/"},{"path":"/ru/gambling/weekly-raffles/","matchPath":"/ru/gambling/weekly-raffles/"},{"path":"/ru/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/ru/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/ru/get-started/a-quick-introduction-to-crypto/","matchPath":"/ru/get-started/a-quick-introduction-to-crypto/"},{"path":"/ru/get-started/bitcoin-as-an-asset-class/","matchPath":"/ru/get-started/bitcoin-as-an-asset-class/"},{"path":"/ru/get-started/bitcoin-debit-card/","matchPath":"/ru/get-started/bitcoin-debit-card/"},{"path":"/ru/get-started/bitcoin-glossary/","matchPath":"/ru/get-started/bitcoin-glossary/"},{"path":"/ru/get-started/bitcoin-layer-2-solutions/","matchPath":"/ru/get-started/bitcoin-layer-2-solutions/"},{"path":"/ru/get-started/bitcoin-price-history/","matchPath":"/ru/get-started/bitcoin-price-history/"},{"path":"/ru/get-started/bitcoin-price-prediction/","matchPath":"/ru/get-started/bitcoin-price-prediction/"},{"path":"/ru/get-started/bitcoin-trading-for-beginners/","matchPath":"/ru/get-started/bitcoin-trading-for-beginners/"},{"path":"/ru/get-started/bitcoin-vs-altcoins/","matchPath":"/ru/get-started/bitcoin-vs-altcoins/"},{"path":"/ru/get-started/bitcoin-vs-fiat/","matchPath":"/ru/get-started/bitcoin-vs-fiat/"},{"path":"/ru/get-started/bitcoin-vs-stablecoins/","matchPath":"/ru/get-started/bitcoin-vs-stablecoins/"},{"path":"/ru/get-started/bull-market-vs-bear-market/","matchPath":"/ru/get-started/bull-market-vs-bear-market/"},{"path":"/ru/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/ru/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/ru/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/ru/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/ru/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/ru/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/ru/get-started/create-bitcoin-wallet/","matchPath":"/ru/get-started/create-bitcoin-wallet/"},{"path":"/ru/get-started/create-crypto-wallet/","matchPath":"/ru/get-started/create-crypto-wallet/"},{"path":"/ru/get-started/crypto-debit-card/","matchPath":"/ru/get-started/crypto-debit-card/"},{"path":"/ru/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/ru/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/ru/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/ru/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/ru/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/ru/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/ru/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/ru/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/ru/get-started/defi-use-cases/","matchPath":"/ru/get-started/defi-use-cases/"},{"path":"/ru/get-started/dex-lingo/","matchPath":"/ru/get-started/dex-lingo/"},{"path":"/ru/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/ru/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/ru/get-started/digital-asset-security/","matchPath":"/ru/get-started/digital-asset-security/"},{"path":"/ru/get-started/dollar-cost-averaging/","matchPath":"/ru/get-started/dollar-cost-averaging/"},{"path":"/ru/get-started/faq/","matchPath":"/ru/get-started/faq/"},{"path":"/ru/get-started/how-bitcoin-exchange-works/","matchPath":"/ru/get-started/how-bitcoin-exchange-works/"},{"path":"/ru/get-started/how-bitcoin-impacts-environment/","matchPath":"/ru/get-started/how-bitcoin-impacts-environment/"},{"path":"/ru/get-started/how-bitcoin-transactions-work/","matchPath":"/ru/get-started/how-bitcoin-transactions-work/"},{"path":"/ru/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/ru/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/ru/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/ru/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/ru/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/ru/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/ru/get-started/how-does-crypto-exchange-work/","matchPath":"/ru/get-started/how-does-crypto-exchange-work/"},{"path":"/ru/get-started/how-does-governance-work-in-ethereum/","matchPath":"/ru/get-started/how-does-governance-work-in-ethereum/"},{"path":"/ru/get-started/how-is-cryptocurrency-taxed/","matchPath":"/ru/get-started/how-is-cryptocurrency-taxed/"},{"path":"/ru/get-started/how-to-avoid-common-bitcoin-scams/","matchPath":"/ru/get-started/how-to-avoid-common-bitcoin-scams/"},{"path":"/ru/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/ru/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/ru/get-started/how-to-borrow-in-defi/","matchPath":"/ru/get-started/how-to-borrow-in-defi/"},{"path":"/ru/get-started/how-to-buy-an-nft/","matchPath":"/ru/get-started/how-to-buy-an-nft/"},{"path":"/ru/get-started/how-to-buy-bitcoin-cash/","matchPath":"/ru/get-started/how-to-buy-bitcoin-cash/"},{"path":"/ru/get-started/how-to-buy-bitcoin/","matchPath":"/ru/get-started/how-to-buy-bitcoin/"},{"path":"/ru/get-started/how-to-buy-crypto/","matchPath":"/ru/get-started/how-to-buy-crypto/"},{"path":"/ru/get-started/how-to-buy-eth/","matchPath":"/ru/get-started/how-to-buy-eth/"},{"path":"/ru/get-started/how-to-buy-insurance-in-defi/","matchPath":"/ru/get-started/how-to-buy-insurance-in-defi/"},{"path":"/ru/get-started/how-to-buy-real-estate-with-bitcoin/","matchPath":"/ru/get-started/how-to-buy-real-estate-with-bitcoin/"},{"path":"/ru/get-started/how-to-buy-real-estate-with-crypto/","matchPath":"/ru/get-started/how-to-buy-real-estate-with-crypto/"},{"path":"/ru/get-started/how-to-buy-verse/","matchPath":"/ru/get-started/how-to-buy-verse/"},{"path":"/ru/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/ru/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/ru/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/ru/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/ru/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/ru/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/ru/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/ru/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/ru/get-started/how-to-enter-a-new-chain/","matchPath":"/ru/get-started/how-to-enter-a-new-chain/"},{"path":"/ru/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/ru/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/ru/get-started/how-to-lend-in-defi/","matchPath":"/ru/get-started/how-to-lend-in-defi/"},{"path":"/ru/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/ru/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/ru/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/ru/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/ru/get-started/how-to-read-bitcoin-charts-for-beginners/","matchPath":"/ru/get-started/how-to-read-bitcoin-charts-for-beginners/"},{"path":"/ru/get-started/how-to-receive-bitcoin-cash/","matchPath":"/ru/get-started/how-to-receive-bitcoin-cash/"},{"path":"/ru/get-started/how-to-receive-bitcoin/","matchPath":"/ru/get-started/how-to-receive-bitcoin/"},{"path":"/ru/get-started/how-to-receive-crypto/","matchPath":"/ru/get-started/how-to-receive-crypto/"},{"path":"/ru/get-started/how-to-receive-ethereum/","matchPath":"/ru/get-started/how-to-receive-ethereum/"},{"path":"/ru/get-started/how-to-sell-bitcoin-cash/","matchPath":"/ru/get-started/how-to-sell-bitcoin-cash/"},{"path":"/ru/get-started/how-to-sell-bitcoin/","matchPath":"/ru/get-started/how-to-sell-bitcoin/"},{"path":"/ru/get-started/how-to-sell-crypto/","matchPath":"/ru/get-started/how-to-sell-crypto/"},{"path":"/ru/get-started/how-to-sell-verse/","matchPath":"/ru/get-started/how-to-sell-verse/"},{"path":"/ru/get-started/how-to-send-bitcoin-cash/","matchPath":"/ru/get-started/how-to-send-bitcoin-cash/"},{"path":"/ru/get-started/how-to-send-bitcoin/","matchPath":"/ru/get-started/how-to-send-bitcoin/"},{"path":"/ru/get-started/how-to-send-crypto/","matchPath":"/ru/get-started/how-to-send-crypto/"},{"path":"/ru/get-started/how-to-send-ethereum/","matchPath":"/ru/get-started/how-to-send-ethereum/"},{"path":"/ru/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/ru/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/ru/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/ru/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/ru/get-started/how-to-swap-crypto/","matchPath":"/ru/get-started/how-to-swap-crypto/"},{"path":"/ru/get-started/how-to-use-a-dex/","matchPath":"/ru/get-started/how-to-use-a-dex/"},{"path":"/ru/get-started/how-to-use-bitcoin-cash/","matchPath":"/ru/get-started/how-to-use-bitcoin-cash/"},{"path":"/ru/get-started/how-to-use-derivatives-in-defi/","matchPath":"/ru/get-started/how-to-use-derivatives-in-defi/"},{"path":"/ru/get-started/how-to-verify-bitcoin-transactions/","matchPath":"/ru/get-started/how-to-verify-bitcoin-transactions/"},{"path":"/ru/get-started/how-to-yield-farm-in-defi/","matchPath":"/ru/get-started/how-to-yield-farm-in-defi/"},{"path":"/ru/get-started/how-was-eth-initially-distributed/","matchPath":"/ru/get-started/how-was-eth-initially-distributed/"},{"path":"/ru/get-started/is-bitcoin-a-store-of-value/","matchPath":"/ru/get-started/is-bitcoin-a-store-of-value/"},{"path":"/ru/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/ru/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/ru/get-started/is-bitcoin-private/","matchPath":"/ru/get-started/is-bitcoin-private/"},{"path":"/ru/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/ru/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/ru/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/ru/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/ru/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/ru/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/ru/get-started/shared-wallet-multisig-use-cases/","matchPath":"/ru/get-started/shared-wallet-multisig-use-cases/"},{"path":"/ru/get-started/smart-contracts-on-bitcoin/","matchPath":"/ru/get-started/smart-contracts-on-bitcoin/"},{"path":"/ru/get-started/the-benefits-of-bitcoin/","matchPath":"/ru/get-started/the-benefits-of-bitcoin/"},{"path":"/ru/get-started/the-bitcoin-revolution/","matchPath":"/ru/get-started/the-bitcoin-revolution/"},{"path":"/ru/get-started/unstoppable-money/","matchPath":"/ru/get-started/unstoppable-money/"},{"path":"/ru/get-started/usdt-usdc-usde-dai-busd-usdd-pyusd-tusd-rlusd-ust-frax/","matchPath":"/ru/get-started/usdt-usdc-usde-dai-busd-usdd-pyusd-tusd-rlusd-ust-frax/"},{"path":"/ru/get-started/what_is_bitcoin_taproot/","matchPath":"/ru/get-started/what_is_bitcoin_taproot/"},{"path":"/ru/get-started/what_is_web3/","matchPath":"/ru/get-started/what_is_web3/"},{"path":"/ru/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/ru/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/ru/get-started/what-are-altcoins/","matchPath":"/ru/get-started/what-are-altcoins/"},{"path":"/ru/get-started/what-are-automated-market-makers/","matchPath":"/ru/get-started/what-are-automated-market-makers/"},{"path":"/ru/get-started/what-are-bitcoin-credit-cards/","matchPath":"/ru/get-started/what-are-bitcoin-credit-cards/"},{"path":"/ru/get-started/what-are-bitcoin-network-fees/","matchPath":"/ru/get-started/what-are-bitcoin-network-fees/"},{"path":"/ru/get-started/what-are-bitcoin-ordinals/","matchPath":"/ru/get-started/what-are-bitcoin-ordinals/"},{"path":"/ru/get-started/what-are-bitcoin-utxos/","matchPath":"/ru/get-started/what-are-bitcoin-utxos/"},{"path":"/ru/get-started/what-are-bitcoin-whales/","matchPath":"/ru/get-started/what-are-bitcoin-whales/"},{"path":"/ru/get-started/what-are-central-bank-digital-currencies/","matchPath":"/ru/get-started/what-are-central-bank-digital-currencies/"},{"path":"/ru/get-started/what-are-crypto-derivatives/","matchPath":"/ru/get-started/what-are-crypto-derivatives/"},{"path":"/ru/get-started/what-are-crypto-network-fees/","matchPath":"/ru/get-started/what-are-crypto-network-fees/"},{"path":"/ru/get-started/what-are-crypto-retirement-accounts/","matchPath":"/ru/get-started/what-are-crypto-retirement-accounts/"},{"path":"/ru/get-started/what-are-erc-20-tokens/","matchPath":"/ru/get-started/what-are-erc-20-tokens/"},{"path":"/ru/get-started/what-are-fundamental-technical-and-sentimental-analysis-in-trading/","matchPath":"/ru/get-started/what-are-fundamental-technical-and-sentimental-analysis-in-trading/"},{"path":"/ru/get-started/what-are-liquidity-pools/","matchPath":"/ru/get-started/what-are-liquidity-pools/"},{"path":"/ru/get-started/what-are-meme-coins/","matchPath":"/ru/get-started/what-are-meme-coins/"},{"path":"/ru/get-started/what-are-nfts/","matchPath":"/ru/get-started/what-are-nfts/"},{"path":"/ru/get-started/what-are-prediction-markets/","matchPath":"/ru/get-started/what-are-prediction-markets/"},{"path":"/ru/get-started/what-are-privacy-coins/","matchPath":"/ru/get-started/what-are-privacy-coins/"},{"path":"/ru/get-started/what-are-real-world-assets-rwa/","matchPath":"/ru/get-started/what-are-real-world-assets-rwa/"},{"path":"/ru/get-started/what-are-shareable-links/","matchPath":"/ru/get-started/what-are-shareable-links/"},{"path":"/ru/get-started/what-are-sidechains/","matchPath":"/ru/get-started/what-are-sidechains/"},{"path":"/ru/get-started/what-are-stablecoins/","matchPath":"/ru/get-started/what-are-stablecoins/"},{"path":"/ru/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/ru/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/ru/get-started/what-are-transaction-fees/","matchPath":"/ru/get-started/what-are-transaction-fees/"},{"path":"/ru/get-started/what-is-a-bitcoin-address/","matchPath":"/ru/get-started/what-is-a-bitcoin-address/"},{"path":"/ru/get-started/what-is-a-bitcoin-corporate-treasury/","matchPath":"/ru/get-started/what-is-a-bitcoin-corporate-treasury/"},{"path":"/ru/get-started/what-is-a-bitcoin-ira/","matchPath":"/ru/get-started/what-is-a-bitcoin-ira/"},{"path":"/ru/get-started/what-is-a-bitcoin-mempool/","matchPath":"/ru/get-started/what-is-a-bitcoin-mempool/"},{"path":"/ru/get-started/what-is-a-bitcoin-node/","matchPath":"/ru/get-started/what-is-a-bitcoin-node/"},{"path":"/ru/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/ru/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/ru/get-started/what-is-a-bitcoin-wallet/","matchPath":"/ru/get-started/what-is-a-bitcoin-wallet/"},{"path":"/ru/get-started/what-is-a-blockchain-explorer/","matchPath":"/ru/get-started/what-is-a-blockchain-explorer/"},{"path":"/ru/get-started/what-is-a-blockchain/","matchPath":"/ru/get-started/what-is-a-blockchain/"},{"path":"/ru/get-started/what-is-a-brokerage/","matchPath":"/ru/get-started/what-is-a-brokerage/"},{"path":"/ru/get-started/what-is-a-cex/","matchPath":"/ru/get-started/what-is-a-cex/"},{"path":"/ru/get-started/what-is-a-confirmation/","matchPath":"/ru/get-started/what-is-a-confirmation/"},{"path":"/ru/get-started/what-is-a-consensus-mechanism/","matchPath":"/ru/get-started/what-is-a-consensus-mechanism/"},{"path":"/ru/get-started/what-is-a-crypto-bridge/","matchPath":"/ru/get-started/what-is-a-crypto-bridge/"},{"path":"/ru/get-started/what-is-a-crypto-wallet/","matchPath":"/ru/get-started/what-is-a-crypto-wallet/"},{"path":"/ru/get-started/what-is-a-dao/","matchPath":"/ru/get-started/what-is-a-dao/"},{"path":"/ru/get-started/what-is-a-dApp/","matchPath":"/ru/get-started/what-is-a-dApp/"},{"path":"/ru/get-started/what-is-a-dex/","matchPath":"/ru/get-started/what-is-a-dex/"},{"path":"/ru/get-started/what-is-a-liquid-staking-token/","matchPath":"/ru/get-started/what-is-a-liquid-staking-token/"},{"path":"/ru/get-started/what-is-a-market-cap/","matchPath":"/ru/get-started/what-is-a-market-cap/"},{"path":"/ru/get-started/what-is-a-memecoin/","matchPath":"/ru/get-started/what-is-a-memecoin/"},{"path":"/ru/get-started/what-is-a-private-key/","matchPath":"/ru/get-started/what-is-a-private-key/"},{"path":"/ru/get-started/what-is-a-smart-contract/","matchPath":"/ru/get-started/what-is-a-smart-contract/"},{"path":"/ru/get-started/what-is-a-token-sale/","matchPath":"/ru/get-started/what-is-a-token-sale/"},{"path":"/ru/get-started/what-is-a-token/","matchPath":"/ru/get-started/what-is-a-token/"},{"path":"/ru/get-started/what-is-an-airdrop/","matchPath":"/ru/get-started/what-is-an-airdrop/"},{"path":"/ru/get-started/what-is-an-mpc-wallet/","matchPath":"/ru/get-started/what-is-an-mpc-wallet/"},{"path":"/ru/get-started/what-is-an-oracle/","matchPath":"/ru/get-started/what-is-an-oracle/"},{"path":"/ru/get-started/what-is-apr/","matchPath":"/ru/get-started/what-is-apr/"},{"path":"/ru/get-started/what-is-apy/","matchPath":"/ru/get-started/what-is-apy/"},{"path":"/ru/get-started/what-is-avalanche/","matchPath":"/ru/get-started/what-is-avalanche/"},{"path":"/ru/get-started/what-is-bitcoin-cash/","matchPath":"/ru/get-started/what-is-bitcoin-cash/"},{"path":"/ru/get-started/what-is-bitcoin-dominance/","matchPath":"/ru/get-started/what-is-bitcoin-dominance/"},{"path":"/ru/get-started/what-is-Bitcoin-ETF/","matchPath":"/ru/get-started/what-is-Bitcoin-ETF/"},{"path":"/ru/get-started/what-is-bitcoin-fungibility/","matchPath":"/ru/get-started/what-is-bitcoin-fungibility/"},{"path":"/ru/get-started/what-is-bitcoin-gambling/","matchPath":"/ru/get-started/what-is-bitcoin-gambling/"},{"path":"/ru/get-started/what-is-bitcoin-governance/","matchPath":"/ru/get-started/what-is-bitcoin-governance/"},{"path":"/ru/get-started/what-is-bitcoin-halving/","matchPath":"/ru/get-started/what-is-bitcoin-halving/"},{"path":"/ru/get-started/what-is-bitcoin-hard-fork/","matchPath":"/ru/get-started/what-is-bitcoin-hard-fork/"},{"path":"/ru/get-started/what-is-bitcoin-hashrate/","matchPath":"/ru/get-started/what-is-bitcoin-hashrate/"},{"path":"/ru/get-started/what-is-bitcoin-liquidity/","matchPath":"/ru/get-started/what-is-bitcoin-liquidity/"},{"path":"/ru/get-started/what-is-bitcoin-mining/","matchPath":"/ru/get-started/what-is-bitcoin-mining/"},{"path":"/ru/get-started/what-is-bitcoin-op-cat/","matchPath":"/ru/get-started/what-is-bitcoin-op-cat/"},{"path":"/ru/get-started/what-is-bitcoin-otc-trading/","matchPath":"/ru/get-started/what-is-bitcoin-otc-trading/"},{"path":"/ru/get-started/what-is-bitcoin-script-language/","matchPath":"/ru/get-started/what-is-bitcoin-script-language/"},{"path":"/ru/get-started/what-is-bitcoin-segwit-segregated-witness/","matchPath":"/ru/get-started/what-is-bitcoin-segwit-segregated-witness/"},{"path":"/ru/get-started/what-is-bitcoin-taproot/","matchPath":"/ru/get-started/what-is-bitcoin-taproot/"},{"path":"/ru/get-started/what-is-bitcoin/","matchPath":"/ru/get-started/what-is-bitcoin/"},{"path":"/ru/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/ru/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/ru/get-started/what-is-cardano-ada/","matchPath":"/ru/get-started/what-is-cardano-ada/"},{"path":"/ru/get-started/what-is-censorship-resistance/","matchPath":"/ru/get-started/what-is-censorship-resistance/"},{"path":"/ru/get-started/what-is-cex-education/","matchPath":"/ru/get-started/what-is-cex-education/"},{"path":"/ru/get-started/what-is-chainlink/","matchPath":"/ru/get-started/what-is-chainlink/"},{"path":"/ru/get-started/what-is-coin-mixer/","matchPath":"/ru/get-started/what-is-coin-mixer/"},{"path":"/ru/get-started/what-is-cross-chain-interoperability/","matchPath":"/ru/get-started/what-is-cross-chain-interoperability/"},{"path":"/ru/get-started/what-is-crypto-asset-management/","matchPath":"/ru/get-started/what-is-crypto-asset-management/"},{"path":"/ru/get-started/what-is-crypto-insurance/","matchPath":"/ru/get-started/what-is-crypto-insurance/"},{"path":"/ru/get-started/what-is-crypto-lending/","matchPath":"/ru/get-started/what-is-crypto-lending/"},{"path":"/ru/get-started/what-is-defi-decentralized-finance/","matchPath":"/ru/get-started/what-is-defi-decentralized-finance/"},{"path":"/ru/get-started/what-is-EIP-1559/","matchPath":"/ru/get-started/what-is-EIP-1559/"},{"path":"/ru/get-started/what-is-eth-2/","matchPath":"/ru/get-started/what-is-eth-2/"},{"path":"/ru/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/ru/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/ru/get-started/what-is-eth-used-for/","matchPath":"/ru/get-started/what-is-eth-used-for/"},{"path":"/ru/get-started/what-is-ethereum-monetary-policy/","matchPath":"/ru/get-started/what-is-ethereum-monetary-policy/"},{"path":"/ru/get-started/what-is-ethereum/","matchPath":"/ru/get-started/what-is-ethereum/"},{"path":"/ru/get-started/what-is-evm/","matchPath":"/ru/get-started/what-is-evm/"},{"path":"/ru/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/ru/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/ru/get-started/what-is-fractal-bitcoin/","matchPath":"/ru/get-started/what-is-fractal-bitcoin/"},{"path":"/ru/get-started/what-is-gas/","matchPath":"/ru/get-started/what-is-gas/"},{"path":"/ru/get-started/what-is-impermanent-loss/","matchPath":"/ru/get-started/what-is-impermanent-loss/"},{"path":"/ru/get-started/what-is-inflation/","matchPath":"/ru/get-started/what-is-inflation/"},{"path":"/ru/get-started/what-is-know-your-customer/","matchPath":"/ru/get-started/what-is-know-your-customer/"},{"path":"/ru/get-started/what-is-layer-2-on-ethereum/","matchPath":"/ru/get-started/what-is-layer-2-on-ethereum/"},{"path":"/ru/get-started/what-is-lightning-network/","matchPath":"/ru/get-started/what-is-lightning-network/"},{"path":"/ru/get-started/what-is-liquidity/","matchPath":"/ru/get-started/what-is-liquidity/"},{"path":"/ru/get-started/what-is-litecoin-ltc/","matchPath":"/ru/get-started/what-is-litecoin-ltc/"},{"path":"/ru/get-started/what-is-money/","matchPath":"/ru/get-started/what-is-money/"},{"path":"/ru/get-started/what-is-mt-gox/","matchPath":"/ru/get-started/what-is-mt-gox/"},{"path":"/ru/get-started/what-is-polygon-matic/","matchPath":"/ru/get-started/what-is-polygon-matic/"},{"path":"/ru/get-started/what-is-proof-of-stake/","matchPath":"/ru/get-started/what-is-proof-of-stake/"},{"path":"/ru/get-started/what-is-proof-of-work/","matchPath":"/ru/get-started/what-is-proof-of-work/"},{"path":"/ru/get-started/what-is-restaking/","matchPath":"/ru/get-started/what-is-restaking/"},{"path":"/ru/get-started/what-is-ripple-xrp-ledger/","matchPath":"/ru/get-started/what-is-ripple-xrp-ledger/"},{"path":"/ru/get-started/what-is-solana/","matchPath":"/ru/get-started/what-is-solana/"},{"path":"/ru/get-started/what-is-staking/","matchPath":"/ru/get-started/what-is-staking/"},{"path":"/ru/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/ru/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/ru/get-started/what-is-the-difference-between-layer-zero-one-two-and-three-blockchains/","matchPath":"/ru/get-started/what-is-the-difference-between-layer-zero-one-two-and-three-blockchains/"},{"path":"/ru/get-started/what-is-the-difference-between-zk-rollups-and-optimistic-rollups/","matchPath":"/ru/get-started/what-is-the-difference-between-zk-rollups-and-optimistic-rollups/"},{"path":"/ru/get-started/what-is-the-double-spend-problem/","matchPath":"/ru/get-started/what-is-the-double-spend-problem/"},{"path":"/ru/get-started/what-is-the-metaverse/","matchPath":"/ru/get-started/what-is-the-metaverse/"},{"path":"/ru/get-started/what-is-the-verse-development-fund/","matchPath":"/ru/get-started/what-is-the-verse-development-fund/"},{"path":"/ru/get-started/what-is-trading-volume/","matchPath":"/ru/get-started/what-is-trading-volume/"},{"path":"/ru/get-started/what-is-tron-dao-trx/","matchPath":"/ru/get-started/what-is-tron-dao-trx/"},{"path":"/ru/get-started/what-is-trump-world-liberty-financial/","matchPath":"/ru/get-started/what-is-trump-world-liberty-financial/"},{"path":"/ru/get-started/what-is-uni/","matchPath":"/ru/get-started/what-is-uni/"},{"path":"/ru/get-started/what-is-verse-community/","matchPath":"/ru/get-started/what-is-verse-community/"},{"path":"/ru/get-started/what-is-verse-dex/","matchPath":"/ru/get-started/what-is-verse-dex/"},{"path":"/ru/get-started/what-is-verse/","matchPath":"/ru/get-started/what-is-verse/"},{"path":"/ru/get-started/what-is-volatility/","matchPath":"/ru/get-started/what-is-volatility/"},{"path":"/ru/get-started/what-is-walletconnect/","matchPath":"/ru/get-started/what-is-walletconnect/"},{"path":"/ru/get-started/what-is-wbtc/","matchPath":"/ru/get-started/what-is-wbtc/"},{"path":"/ru/get-started/what-is-web3/","matchPath":"/ru/get-started/what-is-web3/"},{"path":"/ru/get-started/what-is-weth/","matchPath":"/ru/get-started/what-is-weth/"},{"path":"/ru/get-started/what-is-yfi/","matchPath":"/ru/get-started/what-is-yfi/"},{"path":"/ru/get-started/what-is-yield-farming/","matchPath":"/ru/get-started/what-is-yield-farming/"},{"path":"/ru/get-started/what-is-zano/","matchPath":"/ru/get-started/what-is-zano/"},{"path":"/ru/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/ru/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/ru/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/ru/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/ru/get-started/who-created-ethereum/","matchPath":"/ru/get-started/who-created-ethereum/"},{"path":"/ru/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/ru/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/ru/giftcard/history/","matchPath":"/ru/giftcard/history/"},{"path":"/ru/jobs/solidity/","matchPath":"/ru/jobs/solidity/"},{"path":"/ru/legal/cookies/","matchPath":"/ru/legal/cookies/"},{"path":"/ru/legal/dsar-form/","matchPath":"/ru/legal/dsar-form/"},{"path":"/ru/legal/faq/","matchPath":"/ru/legal/faq/"},{"path":"/ru/legal/privacy-policy/","matchPath":"/ru/legal/privacy-policy/"},{"path":"/ru/legal/user-agreement/","matchPath":"/ru/legal/user-agreement/"},{"path":"/ru/legal/verse-service-terms/","matchPath":"/ru/legal/verse-service-terms/"},{"path":"/ru/legal/wallet-service-terms/","matchPath":"/ru/legal/wallet-service-terms/"},{"path":"/ru/luxury/art-collectibles/","matchPath":"/ru/luxury/art-collectibles/"},{"path":"/ru/luxury/concierge/","matchPath":"/ru/luxury/concierge/"},{"path":"/ru/luxury/designer-fashion/","matchPath":"/ru/luxury/designer-fashion/"},{"path":"/ru/luxury/events/","matchPath":"/ru/luxury/events/"},{"path":"/ru/luxury/experiences/","matchPath":"/ru/luxury/experiences/"},{"path":"/ru/luxury/ferrari-dealers/","matchPath":"/ru/luxury/ferrari-dealers/"},{"path":"/ru/luxury/health-wellness/","matchPath":"/ru/luxury/health-wellness/"},{"path":"/ru/luxury/hotels-resorts/","matchPath":"/ru/luxury/hotels-resorts/"},{"path":"/ru/luxury/jewelry/","matchPath":"/ru/luxury/jewelry/"},{"path":"/ru/luxury/private-jets/","matchPath":"/ru/luxury/private-jets/"},{"path":"/ru/luxury/real-estate/","matchPath":"/ru/luxury/real-estate/"},{"path":"/ru/luxury/supercars/","matchPath":"/ru/luxury/supercars/"},{"path":"/ru/luxury/timepieces/","matchPath":"/ru/luxury/timepieces/"},{"path":"/ru/luxury/villas/","matchPath":"/ru/luxury/villas/"},{"path":"/ru/luxury/yachts/","matchPath":"/ru/luxury/yachts/"},{"path":"/ru/merchant-solutions/brick-mortar/","matchPath":"/ru/merchant-solutions/brick-mortar/"},{"path":"/ru/merchant-solutions/online-business/","matchPath":"/ru/merchant-solutions/online-business/"},{"path":"/ru/mining/bitcoin-cash/","matchPath":"/ru/mining/bitcoin-cash/"},{"path":"/ru/mining/cloud-mining/","matchPath":"/ru/mining/cloud-mining/"},{"path":"/ru/mining/dash/","matchPath":"/ru/mining/dash/"},{"path":"/ru/mining/dogecoin/","matchPath":"/ru/mining/dogecoin/"},{"path":"/ru/mining/kaspa/","matchPath":"/ru/mining/kaspa/"},{"path":"/ru/mining/litecoin/","matchPath":"/ru/mining/litecoin/"},{"path":"/ru/mining/monero/","matchPath":"/ru/mining/monero/"},{"path":"/ru/mining/ravencoin/","matchPath":"/ru/mining/ravencoin/"},{"path":"/ru/newsletters/btc-research/","matchPath":"/ru/newsletters/btc-research/"},{"path":"/ru/newsletters/games-updates/","matchPath":"/ru/newsletters/games-updates/"},{"path":"/ru/newsletters/price-analysis/","matchPath":"/ru/newsletters/price-analysis/"},{"path":"/ru/newsletters/product-updates/","matchPath":"/ru/newsletters/product-updates/"},{"path":"/ru/newsletters/verse-updates/","matchPath":"/ru/newsletters/verse-updates/"},{"path":"/ru/newsletters/week-in-review/","matchPath":"/ru/newsletters/week-in-review/"},{"path":"/ru/payments/gateways/","matchPath":"/ru/payments/gateways/"},{"path":"/ru/payments/integrations/","matchPath":"/ru/payments/integrations/"},{"path":"/ru/payments/merchants/","matchPath":"/ru/payments/merchants/"},{"path":"/ru/payments/point-of-sale/","matchPath":"/ru/payments/point-of-sale/"},{"path":"/ru/payments/processors/","matchPath":"/ru/payments/processors/"},{"path":"/ru/payments/remittances/","matchPath":"/ru/payments/remittances/"},{"path":"/ru/payments/solutions/","matchPath":"/ru/payments/solutions/"},{"path":"/ru/payments/tips/","matchPath":"/ru/payments/tips/"},{"path":"/ru/poker/faqs/","matchPath":"/ru/poker/faqs/"},{"path":"/ru/poker/how-to-play/","matchPath":"/ru/poker/how-to-play/"},{"path":"/ru/poker/legality/","matchPath":"/ru/poker/legality/"},{"path":"/ru/poker/promotions/","matchPath":"/ru/poker/promotions/"},{"path":"/ru/poker/room-reviews/","matchPath":"/ru/poker/room-reviews/"},{"path":"/ru/poker/tournaments/","matchPath":"/ru/poker/tournaments/"},{"path":"/ru/price/aave-aave/","matchPath":"/ru/price/aave-aave/"},{"path":"/ru/price/algorand-algo/","matchPath":"/ru/price/algorand-algo/"},{"path":"/ru/price/apecoin-ape/","matchPath":"/ru/price/apecoin-ape/"},{"path":"/ru/price/aptos-apt/","matchPath":"/ru/price/aptos-apt/"},{"path":"/ru/price/arbitrum-arb/","matchPath":"/ru/price/arbitrum-arb/"},{"path":"/ru/price/arweave-ar/","matchPath":"/ru/price/arweave-ar/"},{"path":"/ru/price/avalanche-avax/","matchPath":"/ru/price/avalanche-avax/"},{"path":"/ru/price/axie-infinity-axs/","matchPath":"/ru/price/axie-infinity-axs/"},{"path":"/ru/price/binance-usd-busd/","matchPath":"/ru/price/binance-usd-busd/"},{"path":"/ru/price/bitcoin-btc/","matchPath":"/ru/price/bitcoin-btc/"},{"path":"/ru/price/bitcoin-cash-bch/","matchPath":"/ru/price/bitcoin-cash-bch/"},{"path":"/ru/price/bitcoin-sv-bsv/","matchPath":"/ru/price/bitcoin-sv-bsv/"},{"path":"/ru/price/bitget-token-new-bgb/","matchPath":"/ru/price/bitget-token-new-bgb/"},{"path":"/ru/price/bittorrent-new-btt/","matchPath":"/ru/price/bittorrent-new-btt/"},{"path":"/ru/price/blur-token-blur/","matchPath":"/ru/price/blur-token-blur/"},{"path":"/ru/price/bnb-bnb/","matchPath":"/ru/price/bnb-bnb/"},{"path":"/ru/price/cardano-ada/","matchPath":"/ru/price/cardano-ada/"},{"path":"/ru/price/casper-cspr/","matchPath":"/ru/price/casper-cspr/"},{"path":"/ru/price/chainlink-link/","matchPath":"/ru/price/chainlink-link/"},{"path":"/ru/price/chiliz-chz/","matchPath":"/ru/price/chiliz-chz/"},{"path":"/ru/price/compound-comp/","matchPath":"/ru/price/compound-comp/"},{"path":"/ru/price/conflux-network-cfx/","matchPath":"/ru/price/conflux-network-cfx/"},{"path":"/ru/price/cosmos-atom/","matchPath":"/ru/price/cosmos-atom/"},{"path":"/ru/price/cronos-cro/","matchPath":"/ru/price/cronos-cro/"},{"path":"/ru/price/curve-dao-token-crv/","matchPath":"/ru/price/curve-dao-token-crv/"},{"path":"/ru/price/decentraland-mana/","matchPath":"/ru/price/decentraland-mana/"},{"path":"/ru/price/dogecoin-doge/","matchPath":"/ru/price/dogecoin-doge/"},{"path":"/ru/price/dydx-ethdydx-dydx/","matchPath":"/ru/price/dydx-ethdydx-dydx/"},{"path":"/ru/price/eCash-xec/","matchPath":"/ru/price/eCash-xec/"},{"path":"/ru/price/eos-eos/","matchPath":"/ru/price/eos-eos/"},{"path":"/ru/price/ethereum-classic-etc/","matchPath":"/ru/price/ethereum-classic-etc/"},{"path":"/ru/price/ethereum-eth/","matchPath":"/ru/price/ethereum-eth/"},{"path":"/ru/price/fantom-ftm/","matchPath":"/ru/price/fantom-ftm/"},{"path":"/ru/price/filecoin-fil/","matchPath":"/ru/price/filecoin-fil/"},{"path":"/ru/price/first-digital-usd-fdusd/","matchPath":"/ru/price/first-digital-usd-fdusd/"},{"path":"/ru/price/flow-flow/","matchPath":"/ru/price/flow-flow/"},{"path":"/ru/price/frax-share-frax/","matchPath":"/ru/price/frax-share-frax/"},{"path":"/ru/price/gala-gala/","matchPath":"/ru/price/gala-gala/"},{"path":"/ru/price/gatetoken-gt/","matchPath":"/ru/price/gatetoken-gt/"},{"path":"/ru/price/gmx-gmx/","matchPath":"/ru/price/gmx-gmx/"},{"path":"/ru/price/hedera-hbar/","matchPath":"/ru/price/hedera-hbar/"},{"path":"/ru/price/immutable-x-imx/","matchPath":"/ru/price/immutable-x-imx/"},{"path":"/ru/price/injective-inj/","matchPath":"/ru/price/injective-inj/"},{"path":"/ru/price/iota-miota/","matchPath":"/ru/price/iota-miota/"},{"path":"/ru/price/klaytn-klay/","matchPath":"/ru/price/klaytn-klay/"},{"path":"/ru/price/kucoin-token-kcs/","matchPath":"/ru/price/kucoin-token-kcs/"},{"path":"/ru/price/lido-dao-ldo/","matchPath":"/ru/price/lido-dao-ldo/"},{"path":"/ru/price/litecoin-ltc/","matchPath":"/ru/price/litecoin-ltc/"},{"path":"/ru/price/maker-mkr/","matchPath":"/ru/price/maker-mkr/"},{"path":"/ru/price/mantle-mnt/","matchPath":"/ru/price/mantle-mnt/"},{"path":"/ru/price/mina-mina/","matchPath":"/ru/price/mina-mina/"},{"path":"/ru/price/monero-xmr/","matchPath":"/ru/price/monero-xmr/"},{"path":"/ru/price/multi-collateral-dai-dai/","matchPath":"/ru/price/multi-collateral-dai-dai/"},{"path":"/ru/price/multiversx-egld-egld/","matchPath":"/ru/price/multiversx-egld-egld/"},{"path":"/ru/price/near-protocol-near/","matchPath":"/ru/price/near-protocol-near/"},{"path":"/ru/price/nexo-nexo/","matchPath":"/ru/price/nexo-nexo/"},{"path":"/ru/price/oasis-network-rose/","matchPath":"/ru/price/oasis-network-rose/"},{"path":"/ru/price/okb-okb/","matchPath":"/ru/price/okb-okb/"},{"path":"/ru/price/pancakeswap-cake/","matchPath":"/ru/price/pancakeswap-cake/"},{"path":"/ru/price/pax-gold-paxg/","matchPath":"/ru/price/pax-gold-paxg/"},{"path":"/ru/price/paxos-standard-usdp/","matchPath":"/ru/price/paxos-standard-usdp/"},{"path":"/ru/price/pepe-pepe/","matchPath":"/ru/price/pepe-pepe/"},{"path":"/ru/price/polkadot-new-dot/","matchPath":"/ru/price/polkadot-new-dot/"},{"path":"/ru/price/polygon-matic/","matchPath":"/ru/price/polygon-matic/"},{"path":"/ru/price/quant-qnt/","matchPath":"/ru/price/quant-qnt/"},{"path":"/ru/price/render-rndr/","matchPath":"/ru/price/render-rndr/"},{"path":"/ru/price/rocket-pool-rpl/","matchPath":"/ru/price/rocket-pool-rpl/"},{"path":"/ru/price/shiba-inu-shib/","matchPath":"/ru/price/shiba-inu-shib/"},{"path":"/ru/price/solana-sol/","matchPath":"/ru/price/solana-sol/"},{"path":"/ru/price/stacks-stx/","matchPath":"/ru/price/stacks-stx/"},{"path":"/ru/price/stellar-xlm/","matchPath":"/ru/price/stellar-xlm/"},{"path":"/ru/price/synthetix-snx/","matchPath":"/ru/price/synthetix-snx/"},{"path":"/ru/price/terra-luna-lunc/","matchPath":"/ru/price/terra-luna-lunc/"},{"path":"/ru/price/tether-gold-xau/","matchPath":"/ru/price/tether-gold-xau/"},{"path":"/ru/price/tether-usdt/","matchPath":"/ru/price/tether-usdt/"},{"path":"/ru/price/tezos-xtz/","matchPath":"/ru/price/tezos-xtz/"},{"path":"/ru/price/the-graph-grt/","matchPath":"/ru/price/the-graph-grt/"},{"path":"/ru/price/the-sandbox-sand/","matchPath":"/ru/price/the-sandbox-sand/"},{"path":"/ru/price/theta-network-theta/","matchPath":"/ru/price/theta-network-theta/"},{"path":"/ru/price/thorchain-rune/","matchPath":"/ru/price/thorchain-rune/"},{"path":"/ru/price/toncoin-ton/","matchPath":"/ru/price/toncoin-ton/"},{"path":"/ru/price/tron-trx/","matchPath":"/ru/price/tron-trx/"},{"path":"/ru/price/trueusd-tusd/","matchPath":"/ru/price/trueusd-tusd/"},{"path":"/ru/price/trust-wallet-token-twt/","matchPath":"/ru/price/trust-wallet-token-twt/"},{"path":"/ru/price/uniswap-uni/","matchPath":"/ru/price/uniswap-uni/"},{"path":"/ru/price/unus-sed-leo-leo/","matchPath":"/ru/price/unus-sed-leo-leo/"},{"path":"/ru/price/usd-coin-usdc/","matchPath":"/ru/price/usd-coin-usdc/"},{"path":"/ru/price/usdd-usdd/","matchPath":"/ru/price/usdd-usdd/"},{"path":"/ru/price/vechain-vet/","matchPath":"/ru/price/vechain-vet/"},{"path":"/ru/price/wootrade-woo/","matchPath":"/ru/price/wootrade-woo/"},{"path":"/ru/price/xrp-xrp/","matchPath":"/ru/price/xrp-xrp/"},{"path":"/ru/price/zcash-zec/","matchPath":"/ru/price/zcash-zec/"},{"path":"/ru/price/интернет-компьютер-icp/","matchPath":"/ru/price/интернет-компьютер-icp/"},{"path":"/ru/price/Кава-Кава/","matchPath":"/ru/price/Кава-Кава/"},{"path":"/ru/price/нео-нео/","matchPath":"/ru/price/нео-нео/"},{"path":"/ru/price/обернутый-биткоин-wbtc/","matchPath":"/ru/price/обернутый-биткоин-wbtc/"},{"path":"/ru/price/оптимизм-эфириум-оп/","matchPath":"/ru/price/оптимизм-эфириум-оп/"},{"path":"/ru/price/Сеть XDC (XDC)/","matchPath":"/ru/price/Сеть XDC (XDC)/"},{"path":"/ru/price/Суи-Суи/","matchPath":"/ru/price/Суи-Суи/"},{"path":"/ru/price/Токен Huobi (HT)/","matchPath":"/ru/price/Токен Huobi (HT)/"},{"path":"/ru/research/btc-research/","matchPath":"/ru/research/btc-research/"},{"path":"/ru/research/games-updates/","matchPath":"/ru/research/games-updates/"},{"path":"/ru/research/price-analysis/","matchPath":"/ru/research/price-analysis/"},{"path":"/ru/research/product-updates/","matchPath":"/ru/research/product-updates/"},{"path":"/ru/research/verse-updates/","matchPath":"/ru/research/verse-updates/"},{"path":"/ru/research/week-in-review/","matchPath":"/ru/research/week-in-review/"},{"path":"/ru/tax/calculators/","matchPath":"/ru/tax/calculators/"},{"path":"/ru/tax/compliance/","matchPath":"/ru/tax/compliance/"},{"path":"/ru/tax/forms/","matchPath":"/ru/tax/forms/"},{"path":"/ru/tax/guides/","matchPath":"/ru/tax/guides/"},{"path":"/ru/tax/laws/","matchPath":"/ru/tax/laws/"},{"path":"/ru/tax/professionals/","matchPath":"/ru/tax/professionals/"},{"path":"/ru/tax/software/","matchPath":"/ru/tax/software/"},{"path":"/ru/tax/strategies/","matchPath":"/ru/tax/strategies/"},{"path":"/ru/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/ru/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/ru/trading/top-contracts-for-difference/","matchPath":"/ru/trading/top-contracts-for-difference/"},{"path":"/ru/vpn/best-vpn-in-us/","matchPath":"/ru/vpn/best-vpn-in-us/"},{"path":"/ru/wallet-services/backup-options/","matchPath":"/ru/wallet-services/backup-options/"},{"path":"/ru/wallet-services/secure-wallet/","matchPath":"/ru/wallet-services/secure-wallet/"},{"path":"/ru/wallet-services/security-tips/","matchPath":"/ru/wallet-services/security-tips/"},{"path":"/ru/wallet-services/setup-guide/","matchPath":"/ru/wallet-services/setup-guide/"},{"path":"/ru/wallet-services/wallet-download/","matchPath":"/ru/wallet-services/wallet-download/"},{"path":"/ru/wallet/avalanche/","matchPath":"/ru/wallet/avalanche/"},{"path":"/ru/wallet/bitcoin/","matchPath":"/ru/wallet/bitcoin/"},{"path":"/ru/wallet/bnb/","matchPath":"/ru/wallet/bnb/"},{"path":"/ru/wallet/browser-extension/","matchPath":"/ru/wallet/browser-extension/"},{"path":"/ru/wallet/cardano/","matchPath":"/ru/wallet/cardano/"},{"path":"/ru/wallet/custodial/","matchPath":"/ru/wallet/custodial/"},{"path":"/ru/wallet/defi-wallets/","matchPath":"/ru/wallet/defi-wallets/"},{"path":"/ru/wallet/defi/","matchPath":"/ru/wallet/defi/"},{"path":"/ru/wallet/desktop/","matchPath":"/ru/wallet/desktop/"},{"path":"/ru/wallet/enterprise/","matchPath":"/ru/wallet/enterprise/"},{"path":"/ru/wallet/ethereum/","matchPath":"/ru/wallet/ethereum/"},{"path":"/ru/wallet/gaming/","matchPath":"/ru/wallet/gaming/"},{"path":"/ru/wallet/hardware/","matchPath":"/ru/wallet/hardware/"},{"path":"/ru/wallet/hodl/","matchPath":"/ru/wallet/hodl/"},{"path":"/ru/wallet/lightning/","matchPath":"/ru/wallet/lightning/"},{"path":"/ru/wallet/litecoin/","matchPath":"/ru/wallet/litecoin/"},{"path":"/ru/wallet/mobile/","matchPath":"/ru/wallet/mobile/"},{"path":"/ru/wallet/multi-signature/","matchPath":"/ru/wallet/multi-signature/"},{"path":"/ru/wallet/multichain/","matchPath":"/ru/wallet/multichain/"},{"path":"/ru/wallet/nft/","matchPath":"/ru/wallet/nft/"},{"path":"/ru/wallet/paper-wallets/","matchPath":"/ru/wallet/paper-wallets/"},{"path":"/ru/wallet/polkadot/","matchPath":"/ru/wallet/polkadot/"},{"path":"/ru/wallet/privacy/","matchPath":"/ru/wallet/privacy/"},{"path":"/ru/wallet/remittance/","matchPath":"/ru/wallet/remittance/"},{"path":"/ru/wallet/reviews/","matchPath":"/ru/wallet/reviews/"},{"path":"/ru/wallet/self-custodial/","matchPath":"/ru/wallet/self-custodial/"},{"path":"/ru/wallet/solana/","matchPath":"/ru/wallet/solana/"},{"path":"/ru/wallet/staking/","matchPath":"/ru/wallet/staking/"},{"path":"/ru/wallet/tezos/","matchPath":"/ru/wallet/tezos/"},{"path":"/ru/wallet/trading/","matchPath":"/ru/wallet/trading/"},{"path":"/ru/wallet/xrp/","matchPath":"/ru/wallet/xrp/"},{"path":"/ru/wealth-management/binance-coin/","matchPath":"/ru/wealth-management/binance-coin/"},{"path":"/ru/wealth-management/bitcoin-cash/","matchPath":"/ru/wealth-management/bitcoin-cash/"},{"path":"/ru/wealth-management/bitcoin/","matchPath":"/ru/wealth-management/bitcoin/"},{"path":"/ru/wealth-management/ethereum/","matchPath":"/ru/wealth-management/ethereum/"},{"path":"/ru/wealth-management/solana/","matchPath":"/ru/wealth-management/solana/"},{"path":"/ru/wealth-management/usdc/","matchPath":"/ru/wealth-management/usdc/"},{"path":"/ru/wealth-management/usdt-tether/","matchPath":"/ru/wealth-management/usdt-tether/"},{"path":"/zh/advertise/podcast/","matchPath":"/zh/advertise/podcast/"},{"path":"/zh/bitcoin-cash-register/service-terms/","matchPath":"/zh/bitcoin-cash-register/service-terms/"},{"path":"/zh/cards/anonymous-cards/","matchPath":"/zh/cards/anonymous-cards/"},{"path":"/zh/cards/cashback-cards/","matchPath":"/zh/cards/cashback-cards/"},{"path":"/zh/cards/credit-cards/","matchPath":"/zh/cards/credit-cards/"},{"path":"/zh/cards/crypto-cards/","matchPath":"/zh/cards/crypto-cards/"},{"path":"/zh/cards/debit-cards/","matchPath":"/zh/cards/debit-cards/"},{"path":"/zh/cards/gemini-card/","matchPath":"/zh/cards/gemini-card/"},{"path":"/zh/cards/gift-cards/","matchPath":"/zh/cards/gift-cards/"},{"path":"/zh/cards/mastercard-cards/","matchPath":"/zh/cards/mastercard-cards/"},{"path":"/zh/cards/prepaid-cards/","matchPath":"/zh/cards/prepaid-cards/"},{"path":"/zh/cards/reviews/","matchPath":"/zh/cards/reviews/"},{"path":"/zh/cards/rewards-cards/","matchPath":"/zh/cards/rewards-cards/"},{"path":"/zh/cards/solana/","matchPath":"/zh/cards/solana/"},{"path":"/zh/cards/virtual-cards/","matchPath":"/zh/cards/virtual-cards/"},{"path":"/zh/cards/visa-cards/","matchPath":"/zh/cards/visa-cards/"},{"path":"/zh/cards/web3-cards/","matchPath":"/zh/cards/web3-cards/"},{"path":"/zh/conferences/africa/","matchPath":"/zh/conferences/africa/"},{"path":"/zh/conferences/ai/","matchPath":"/zh/conferences/ai/"},{"path":"/zh/conferences/asia/","matchPath":"/zh/conferences/asia/"},{"path":"/zh/conferences/australia/","matchPath":"/zh/conferences/australia/"},{"path":"/zh/conferences/avalanche/","matchPath":"/zh/conferences/avalanche/"},{"path":"/zh/conferences/bitcoin/","matchPath":"/zh/conferences/bitcoin/"},{"path":"/zh/conferences/blockchain/","matchPath":"/zh/conferences/blockchain/"},{"path":"/zh/conferences/bnb/","matchPath":"/zh/conferences/bnb/"},{"path":"/zh/conferences/canada/","matchPath":"/zh/conferences/canada/"},{"path":"/zh/conferences/cardano/","matchPath":"/zh/conferences/cardano/"},{"path":"/zh/conferences/crypto/","matchPath":"/zh/conferences/crypto/"},{"path":"/zh/conferences/defi/","matchPath":"/zh/conferences/defi/"},{"path":"/zh/conferences/dubai/","matchPath":"/zh/conferences/dubai/"},{"path":"/zh/conferences/ethereum/","matchPath":"/zh/conferences/ethereum/"},{"path":"/zh/conferences/europe/","matchPath":"/zh/conferences/europe/"},{"path":"/zh/conferences/games/","matchPath":"/zh/conferences/games/"},{"path":"/zh/conferences/japan/","matchPath":"/zh/conferences/japan/"},{"path":"/zh/conferences/latam/","matchPath":"/zh/conferences/latam/"},{"path":"/zh/conferences/litecoin/","matchPath":"/zh/conferences/litecoin/"},{"path":"/zh/conferences/memes/","matchPath":"/zh/conferences/memes/"},{"path":"/zh/conferences/metaverse/","matchPath":"/zh/conferences/metaverse/"},{"path":"/zh/conferences/middle-east/","matchPath":"/zh/conferences/middle-east/"},{"path":"/zh/conferences/nft/","matchPath":"/zh/conferences/nft/"},{"path":"/zh/conferences/polkadot/","matchPath":"/zh/conferences/polkadot/"},{"path":"/zh/conferences/singapore/","matchPath":"/zh/conferences/singapore/"},{"path":"/zh/conferences/solana/","matchPath":"/zh/conferences/solana/"},{"path":"/zh/conferences/startups/","matchPath":"/zh/conferences/startups/"},{"path":"/zh/conferences/tech/","matchPath":"/zh/conferences/tech/"},{"path":"/zh/conferences/tezos/","matchPath":"/zh/conferences/tezos/"},{"path":"/zh/conferences/usa/","matchPath":"/zh/conferences/usa/"},{"path":"/zh/conferences/web3/","matchPath":"/zh/conferences/web3/"},{"path":"/zh/conferences/xrp/","matchPath":"/zh/conferences/xrp/"},{"path":"/zh/crypto-education/beginner-guides/","matchPath":"/zh/crypto-education/beginner-guides/"},{"path":"/zh/crypto-education/blockchain-basics/","matchPath":"/zh/crypto-education/blockchain-basics/"},{"path":"/zh/crypto-education/buying-guides/","matchPath":"/zh/crypto-education/buying-guides/"},{"path":"/zh/crypto-education/tax-information/","matchPath":"/zh/crypto-education/tax-information/"},{"path":"/zh/crypto-venture-network/accelerators/","matchPath":"/zh/crypto-venture-network/accelerators/"},{"path":"/zh/crypto-venture-network/incubators/","matchPath":"/zh/crypto-venture-network/incubators/"},{"path":"/zh/crypto-venture-network/portfolio-companies/","matchPath":"/zh/crypto-venture-network/portfolio-companies/"},{"path":"/zh/crypto-venture-network/syndicates/","matchPath":"/zh/crypto-venture-network/syndicates/"},{"path":"/zh/crypto-venture-network/venture-capital-funds/","matchPath":"/zh/crypto-venture-network/venture-capital-funds/"},{"path":"/zh/decentralized-exchanges/best-practices/","matchPath":"/zh/decentralized-exchanges/best-practices/"},{"path":"/zh/decentralized-exchanges/defi-articles/","matchPath":"/zh/decentralized-exchanges/defi-articles/"},{"path":"/zh/decentralized-exchanges/dex-overview/","matchPath":"/zh/decentralized-exchanges/dex-overview/"},{"path":"/zh/decentralized-exchanges/swap-tutorials/","matchPath":"/zh/decentralized-exchanges/swap-tutorials/"},{"path":"/zh/depin/how-to-buy-depin/","matchPath":"/zh/depin/how-to-buy-depin/"},{"path":"/zh/directory/cards/","matchPath":"/zh/directory/cards/"},{"path":"/zh/directory/conferences/","matchPath":"/zh/directory/conferences/"},{"path":"/zh/directory/exchanges/","matchPath":"/zh/directory/exchanges/"},{"path":"/zh/directory/gambling/","matchPath":"/zh/directory/gambling/"},{"path":"/zh/directory/mining/","matchPath":"/zh/directory/mining/"},{"path":"/zh/directory/wallets/","matchPath":"/zh/directory/wallets/"},{"path":"/zh/exchanges/aave/","matchPath":"/zh/exchanges/aave/"},{"path":"/zh/exchanges/algeria/","matchPath":"/zh/exchanges/algeria/"},{"path":"/zh/exchanges/algorithmic-trading-platforms/","matchPath":"/zh/exchanges/algorithmic-trading-platforms/"},{"path":"/zh/exchanges/altcoins/","matchPath":"/zh/exchanges/altcoins/"},{"path":"/zh/exchanges/anonymous-exchanges/","matchPath":"/zh/exchanges/anonymous-exchanges/"},{"path":"/zh/exchanges/aptos/","matchPath":"/zh/exchanges/aptos/"},{"path":"/zh/exchanges/arbitrage-bots/","matchPath":"/zh/exchanges/arbitrage-bots/"},{"path":"/zh/exchanges/arbitrum/","matchPath":"/zh/exchanges/arbitrum/"},{"path":"/zh/exchanges/argentina/","matchPath":"/zh/exchanges/argentina/"},{"path":"/zh/exchanges/artificial-superintelligence-alliance/","matchPath":"/zh/exchanges/artificial-superintelligence-alliance/"},{"path":"/zh/exchanges/asia/","matchPath":"/zh/exchanges/asia/"},{"path":"/zh/exchanges/australia/","matchPath":"/zh/exchanges/australia/"},{"path":"/zh/exchanges/auto-dca/","matchPath":"/zh/exchanges/auto-dca/"},{"path":"/zh/exchanges/automated-trading/","matchPath":"/zh/exchanges/automated-trading/"},{"path":"/zh/exchanges/avalanche/","matchPath":"/zh/exchanges/avalanche/"},{"path":"/zh/exchanges/bahrain/","matchPath":"/zh/exchanges/bahrain/"},{"path":"/zh/exchanges/bangladesh/","matchPath":"/zh/exchanges/bangladesh/"},{"path":"/zh/exchanges/base/","matchPath":"/zh/exchanges/base/"},{"path":"/zh/exchanges/binance-coin/","matchPath":"/zh/exchanges/binance-coin/"},{"path":"/zh/exchanges/binary-options/","matchPath":"/zh/exchanges/binary-options/"},{"path":"/zh/exchanges/bitcoin-cash/","matchPath":"/zh/exchanges/bitcoin-cash/"},{"path":"/zh/exchanges/bittensor/","matchPath":"/zh/exchanges/bittensor/"},{"path":"/zh/exchanges/brazil/","matchPath":"/zh/exchanges/brazil/"},{"path":"/zh/exchanges/canada/","matchPath":"/zh/exchanges/canada/"},{"path":"/zh/exchanges/cardano/","matchPath":"/zh/exchanges/cardano/"},{"path":"/zh/exchanges/central-america/","matchPath":"/zh/exchanges/central-america/"},{"path":"/zh/exchanges/centralized/","matchPath":"/zh/exchanges/centralized/"},{"path":"/zh/exchanges/chainlink/","matchPath":"/zh/exchanges/chainlink/"},{"path":"/zh/exchanges/chile/","matchPath":"/zh/exchanges/chile/"},{"path":"/zh/exchanges/china/","matchPath":"/zh/exchanges/china/"},{"path":"/zh/exchanges/colombia/","matchPath":"/zh/exchanges/colombia/"},{"path":"/zh/exchanges/congo/","matchPath":"/zh/exchanges/congo/"},{"path":"/zh/exchanges/contract-trading/","matchPath":"/zh/exchanges/contract-trading/"},{"path":"/zh/exchanges/copy-trading/","matchPath":"/zh/exchanges/copy-trading/"},{"path":"/zh/exchanges/cosmos/","matchPath":"/zh/exchanges/cosmos/"},{"path":"/zh/exchanges/cronos/","matchPath":"/zh/exchanges/cronos/"},{"path":"/zh/exchanges/crypto-index-trading/","matchPath":"/zh/exchanges/crypto-index-trading/"},{"path":"/zh/exchanges/crypto-to-fiat-exchanges/","matchPath":"/zh/exchanges/crypto-to-fiat-exchanges/"},{"path":"/zh/exchanges/cryptocurrency-brokers/","matchPath":"/zh/exchanges/cryptocurrency-brokers/"},{"path":"/zh/exchanges/czech-republic/","matchPath":"/zh/exchanges/czech-republic/"},{"path":"/zh/exchanges/dai/","matchPath":"/zh/exchanges/dai/"},{"path":"/zh/exchanges/day-trading/","matchPath":"/zh/exchanges/day-trading/"},{"path":"/zh/exchanges/decentralized/","matchPath":"/zh/exchanges/decentralized/"},{"path":"/zh/exchanges/demo-trading-accounts/","matchPath":"/zh/exchanges/demo-trading-accounts/"},{"path":"/zh/exchanges/derivatives/","matchPath":"/zh/exchanges/derivatives/"},{"path":"/zh/exchanges/dogecoin/","matchPath":"/zh/exchanges/dogecoin/"},{"path":"/zh/exchanges/dual-investment-trading/","matchPath":"/zh/exchanges/dual-investment-trading/"},{"path":"/zh/exchanges/egypt/","matchPath":"/zh/exchanges/egypt/"},{"path":"/zh/exchanges/ethereum-classic/","matchPath":"/zh/exchanges/ethereum-classic/"},{"path":"/zh/exchanges/europe/","matchPath":"/zh/exchanges/europe/"},{"path":"/zh/exchanges/filecoin/","matchPath":"/zh/exchanges/filecoin/"},{"path":"/zh/exchanges/for-beginners/","matchPath":"/zh/exchanges/for-beginners/"},{"path":"/zh/exchanges/france/","matchPath":"/zh/exchanges/france/"},{"path":"/zh/exchanges/futures-trading/","matchPath":"/zh/exchanges/futures-trading/"},{"path":"/zh/exchanges/germany/","matchPath":"/zh/exchanges/germany/"},{"path":"/zh/exchanges/ghana/","matchPath":"/zh/exchanges/ghana/"},{"path":"/zh/exchanges/greece/","matchPath":"/zh/exchanges/greece/"},{"path":"/zh/exchanges/grid-trading/","matchPath":"/zh/exchanges/grid-trading/"},{"path":"/zh/exchanges/hedera/","matchPath":"/zh/exchanges/hedera/"},{"path":"/zh/exchanges/hong-kong/","matchPath":"/zh/exchanges/hong-kong/"},{"path":"/zh/exchanges/hungary/","matchPath":"/zh/exchanges/hungary/"},{"path":"/zh/exchanges/hybrid/","matchPath":"/zh/exchanges/hybrid/"},{"path":"/zh/exchanges/immutable/","matchPath":"/zh/exchanges/immutable/"},{"path":"/zh/exchanges/india/","matchPath":"/zh/exchanges/india/"},{"path":"/zh/exchanges/indonesia/","matchPath":"/zh/exchanges/indonesia/"},{"path":"/zh/exchanges/injective/","matchPath":"/zh/exchanges/injective/"},{"path":"/zh/exchanges/ireland/","matchPath":"/zh/exchanges/ireland/"},{"path":"/zh/exchanges/israel/","matchPath":"/zh/exchanges/israel/"},{"path":"/zh/exchanges/italy/","matchPath":"/zh/exchanges/italy/"},{"path":"/zh/exchanges/japan/","matchPath":"/zh/exchanges/japan/"},{"path":"/zh/exchanges/kaspa/","matchPath":"/zh/exchanges/kaspa/"},{"path":"/zh/exchanges/kazakhstan/","matchPath":"/zh/exchanges/kazakhstan/"},{"path":"/zh/exchanges/kenya/","matchPath":"/zh/exchanges/kenya/"},{"path":"/zh/exchanges/korea/","matchPath":"/zh/exchanges/korea/"},{"path":"/zh/exchanges/latin-america/","matchPath":"/zh/exchanges/latin-america/"},{"path":"/zh/exchanges/lending-platforms/","matchPath":"/zh/exchanges/lending-platforms/"},{"path":"/zh/exchanges/leverage-trading/","matchPath":"/zh/exchanges/leverage-trading/"},{"path":"/zh/exchanges/liquidity-pools/","matchPath":"/zh/exchanges/liquidity-pools/"},{"path":"/zh/exchanges/litecoin/","matchPath":"/zh/exchanges/litecoin/"},{"path":"/zh/exchanges/live-trading/","matchPath":"/zh/exchanges/live-trading/"},{"path":"/zh/exchanges/lowest-fees/","matchPath":"/zh/exchanges/lowest-fees/"},{"path":"/zh/exchanges/maker/","matchPath":"/zh/exchanges/maker/"},{"path":"/zh/exchanges/malaysia/","matchPath":"/zh/exchanges/malaysia/"},{"path":"/zh/exchanges/mantle/","matchPath":"/zh/exchanges/mantle/"},{"path":"/zh/exchanges/margin-trading/","matchPath":"/zh/exchanges/margin-trading/"},{"path":"/zh/exchanges/market-making-exchanges/","matchPath":"/zh/exchanges/market-making-exchanges/"},{"path":"/zh/exchanges/memes/","matchPath":"/zh/exchanges/memes/"},{"path":"/zh/exchanges/mexico/","matchPath":"/zh/exchanges/mexico/"},{"path":"/zh/exchanges/middle-east/","matchPath":"/zh/exchanges/middle-east/"},{"path":"/zh/exchanges/monero/","matchPath":"/zh/exchanges/monero/"},{"path":"/zh/exchanges/morocco/","matchPath":"/zh/exchanges/morocco/"},{"path":"/zh/exchanges/near-protocol/","matchPath":"/zh/exchanges/near-protocol/"},{"path":"/zh/exchanges/neo/","matchPath":"/zh/exchanges/neo/"},{"path":"/zh/exchanges/netherlands/","matchPath":"/zh/exchanges/netherlands/"},{"path":"/zh/exchanges/new-zealand/","matchPath":"/zh/exchanges/new-zealand/"},{"path":"/zh/exchanges/nigeria/","matchPath":"/zh/exchanges/nigeria/"},{"path":"/zh/exchanges/norway/","matchPath":"/zh/exchanges/norway/"},{"path":"/zh/exchanges/okb/","matchPath":"/zh/exchanges/okb/"},{"path":"/zh/exchanges/oman/","matchPath":"/zh/exchanges/oman/"},{"path":"/zh/exchanges/optimism/","matchPath":"/zh/exchanges/optimism/"},{"path":"/zh/exchanges/options-trading/","matchPath":"/zh/exchanges/options-trading/"},{"path":"/zh/exchanges/p2p-crypto-exchanges/","matchPath":"/zh/exchanges/p2p-crypto-exchanges/"},{"path":"/zh/exchanges/pakistan/","matchPath":"/zh/exchanges/pakistan/"},{"path":"/zh/exchanges/paypal-deposit/","matchPath":"/zh/exchanges/paypal-deposit/"},{"path":"/zh/exchanges/pepe/","matchPath":"/zh/exchanges/pepe/"},{"path":"/zh/exchanges/perpetual-futures-trading/","matchPath":"/zh/exchanges/perpetual-futures-trading/"},{"path":"/zh/exchanges/peru/","matchPath":"/zh/exchanges/peru/"},{"path":"/zh/exchanges/philippines/","matchPath":"/zh/exchanges/philippines/"},{"path":"/zh/exchanges/poland/","matchPath":"/zh/exchanges/poland/"},{"path":"/zh/exchanges/polkadot/","matchPath":"/zh/exchanges/polkadot/"},{"path":"/zh/exchanges/polygon/","matchPath":"/zh/exchanges/polygon/"},{"path":"/zh/exchanges/portugal/","matchPath":"/zh/exchanges/portugal/"},{"path":"/zh/exchanges/qatar/","matchPath":"/zh/exchanges/qatar/"},{"path":"/zh/exchanges/recurring-buys/","matchPath":"/zh/exchanges/recurring-buys/"},{"path":"/zh/exchanges/render/","matchPath":"/zh/exchanges/render/"},{"path":"/zh/exchanges/reviews/","matchPath":"/zh/exchanges/reviews/"},{"path":"/zh/exchanges/ripple/","matchPath":"/zh/exchanges/ripple/"},{"path":"/zh/exchanges/romania/","matchPath":"/zh/exchanges/romania/"},{"path":"/zh/exchanges/russia/","matchPath":"/zh/exchanges/russia/"},{"path":"/zh/exchanges/safest/","matchPath":"/zh/exchanges/safest/"},{"path":"/zh/exchanges/saudi-arabia/","matchPath":"/zh/exchanges/saudi-arabia/"},{"path":"/zh/exchanges/savings-accounts/","matchPath":"/zh/exchanges/savings-accounts/"},{"path":"/zh/exchanges/serbia/","matchPath":"/zh/exchanges/serbia/"},{"path":"/zh/exchanges/shiba-inu/","matchPath":"/zh/exchanges/shiba-inu/"},{"path":"/zh/exchanges/shorting/","matchPath":"/zh/exchanges/shorting/"},{"path":"/zh/exchanges/singapore/","matchPath":"/zh/exchanges/singapore/"},{"path":"/zh/exchanges/solana/","matchPath":"/zh/exchanges/solana/"},{"path":"/zh/exchanges/south-africa/","matchPath":"/zh/exchanges/south-africa/"},{"path":"/zh/exchanges/south-america/","matchPath":"/zh/exchanges/south-america/"},{"path":"/zh/exchanges/stablecoins/","matchPath":"/zh/exchanges/stablecoins/"},{"path":"/zh/exchanges/stacks/","matchPath":"/zh/exchanges/stacks/"},{"path":"/zh/exchanges/staking-rewards-exchanges/","matchPath":"/zh/exchanges/staking-rewards-exchanges/"},{"path":"/zh/exchanges/stellar/","matchPath":"/zh/exchanges/stellar/"},{"path":"/zh/exchanges/sui/","matchPath":"/zh/exchanges/sui/"},{"path":"/zh/exchanges/swap-platforms/","matchPath":"/zh/exchanges/swap-platforms/"},{"path":"/zh/exchanges/switzerland/","matchPath":"/zh/exchanges/switzerland/"},{"path":"/zh/exchanges/taiwan/","matchPath":"/zh/exchanges/taiwan/"},{"path":"/zh/exchanges/tanzania/","matchPath":"/zh/exchanges/tanzania/"},{"path":"/zh/exchanges/tezos/","matchPath":"/zh/exchanges/tezos/"},{"path":"/zh/exchanges/thailand/","matchPath":"/zh/exchanges/thailand/"},{"path":"/zh/exchanges/tokenized-stocks-trading/","matchPath":"/zh/exchanges/tokenized-stocks-trading/"},{"path":"/zh/exchanges/toncoin/","matchPath":"/zh/exchanges/toncoin/"},{"path":"/zh/exchanges/toshi/","matchPath":"/zh/exchanges/toshi/"},{"path":"/zh/exchanges/tron/","matchPath":"/zh/exchanges/tron/"},{"path":"/zh/exchanges/trump/","matchPath":"/zh/exchanges/trump/"},{"path":"/zh/exchanges/turkey/","matchPath":"/zh/exchanges/turkey/"},{"path":"/zh/exchanges/uganda/","matchPath":"/zh/exchanges/uganda/"},{"path":"/zh/exchanges/ukraine/","matchPath":"/zh/exchanges/ukraine/"},{"path":"/zh/exchanges/uniswap/","matchPath":"/zh/exchanges/uniswap/"},{"path":"/zh/exchanges/united-arab-emirates/","matchPath":"/zh/exchanges/united-arab-emirates/"},{"path":"/zh/exchanges/united-kingdom/","matchPath":"/zh/exchanges/united-kingdom/"},{"path":"/zh/exchanges/usa/","matchPath":"/zh/exchanges/usa/"},{"path":"/zh/exchanges/usdt/","matchPath":"/zh/exchanges/usdt/"},{"path":"/zh/exchanges/vechain/","matchPath":"/zh/exchanges/vechain/"},{"path":"/zh/exchanges/vietnam/","matchPath":"/zh/exchanges/vietnam/"},{"path":"/zh/exchanges/zero-fee-trading/","matchPath":"/zh/exchanges/zero-fee-trading/"},{"path":"/zh/fx/arbitrage/","matchPath":"/zh/fx/arbitrage/"},{"path":"/zh/fx/basics/","matchPath":"/zh/fx/basics/"},{"path":"/zh/fx/brokers/","matchPath":"/zh/fx/brokers/"},{"path":"/zh/fx/market-analysis/","matchPath":"/zh/fx/market-analysis/"},{"path":"/zh/fx/regulations/","matchPath":"/zh/fx/regulations/"},{"path":"/zh/fx/strategies/","matchPath":"/zh/fx/strategies/"},{"path":"/zh/fx/tools/","matchPath":"/zh/fx/tools/"},{"path":"/zh/fx/trading-platforms/","matchPath":"/zh/fx/trading-platforms/"},{"path":"/zh/gambling-guides/blackjack-strategy/","matchPath":"/zh/gambling-guides/blackjack-strategy/"},{"path":"/zh/gambling-guides/how-to-play-blackjack-with-bitcoin/","matchPath":"/zh/gambling-guides/how-to-play-blackjack-with-bitcoin/"},{"path":"/zh/gambling-guides/how-to-play-poker-with-bitcoin/","matchPath":"/zh/gambling-guides/how-to-play-poker-with-bitcoin/"},{"path":"/zh/gambling-guides/how-to-play-roulette-with-bitcoin/","matchPath":"/zh/gambling-guides/how-to-play-roulette-with-bitcoin/"},{"path":"/zh/gambling-guides/poker-strategy/","matchPath":"/zh/gambling-guides/poker-strategy/"},{"path":"/zh/gambling-guides/roulette-strategy/","matchPath":"/zh/gambling-guides/roulette-strategy/"},{"path":"/zh/gambling/betting/","matchPath":"/zh/gambling/betting/"},{"path":"/zh/gambling/bingo/","matchPath":"/zh/gambling/bingo/"},{"path":"/zh/gambling/bots/","matchPath":"/zh/gambling/bots/"},{"path":"/zh/gambling/casino/","matchPath":"/zh/gambling/casino/"},{"path":"/zh/gambling/daily-contests/","matchPath":"/zh/gambling/daily-contests/"},{"path":"/zh/gambling/hot-games/","matchPath":"/zh/gambling/hot-games/"},{"path":"/zh/gambling/new-games/","matchPath":"/zh/gambling/new-games/"},{"path":"/zh/gambling/pachinko/","matchPath":"/zh/gambling/pachinko/"},{"path":"/zh/gambling/play-along/","matchPath":"/zh/gambling/play-along/"},{"path":"/zh/gambling/reviews/","matchPath":"/zh/gambling/reviews/"},{"path":"/zh/gambling/top-games/","matchPath":"/zh/gambling/top-games/"},{"path":"/zh/gambling/top-picks/","matchPath":"/zh/gambling/top-picks/"},{"path":"/zh/gambling/trending-games/","matchPath":"/zh/gambling/trending-games/"},{"path":"/zh/gambling/weekly-raffles/","matchPath":"/zh/gambling/weekly-raffles/"},{"path":"/zh/get-started/a-quick-introduction-to-bitcoin/","matchPath":"/zh/get-started/a-quick-introduction-to-bitcoin/"},{"path":"/zh/get-started/a-quick-introduction-to-crypto/","matchPath":"/zh/get-started/a-quick-introduction-to-crypto/"},{"path":"/zh/get-started/bitcoin-as-an-asset-class/","matchPath":"/zh/get-started/bitcoin-as-an-asset-class/"},{"path":"/zh/get-started/bitcoin-debit-card/","matchPath":"/zh/get-started/bitcoin-debit-card/"},{"path":"/zh/get-started/bitcoin-glossary/","matchPath":"/zh/get-started/bitcoin-glossary/"},{"path":"/zh/get-started/bitcoin-layer-2-solutions/","matchPath":"/zh/get-started/bitcoin-layer-2-solutions/"},{"path":"/zh/get-started/can-you-buy-less-than-a-bitcoin/","matchPath":"/zh/get-started/can-you-buy-less-than-a-bitcoin/"},{"path":"/zh/get-started/common-dapp-risks-and-how-to-avoid-them/","matchPath":"/zh/get-started/common-dapp-risks-and-how-to-avoid-them/"},{"path":"/zh/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/","matchPath":"/zh/get-started/como-mover-fondos-de-chivo-wallet-a-bitcoincom-wallet/"},{"path":"/zh/get-started/create-bitcoin-wallet/","matchPath":"/zh/get-started/create-bitcoin-wallet/"},{"path":"/zh/get-started/create-crypto-wallet/","matchPath":"/zh/get-started/create-crypto-wallet/"},{"path":"/zh/get-started/crypto-debit-card/","matchPath":"/zh/get-started/crypto-debit-card/"},{"path":"/zh/get-started/cryptocurrency-taxation-in-germany/","matchPath":"/zh/get-started/cryptocurrency-taxation-in-germany/"},{"path":"/zh/get-started/cryptocurrency-taxation-in-the-uk/","matchPath":"/zh/get-started/cryptocurrency-taxation-in-the-uk/"},{"path":"/zh/get-started/cryptocurrency-taxation-in-the-us/","matchPath":"/zh/get-started/cryptocurrency-taxation-in-the-us/"},{"path":"/zh/get-started/custodial-non-custodial-bitcoin-wallets/","matchPath":"/zh/get-started/custodial-non-custodial-bitcoin-wallets/"},{"path":"/zh/get-started/defi-use-cases/","matchPath":"/zh/get-started/defi-use-cases/"},{"path":"/zh/get-started/dex-lingo/","matchPath":"/zh/get-started/dex-lingo/"},{"path":"/zh/get-started/difference-between-bitcoin-and-ethereum/","matchPath":"/zh/get-started/difference-between-bitcoin-and-ethereum/"},{"path":"/zh/get-started/digital-asset-security/","matchPath":"/zh/get-started/digital-asset-security/"},{"path":"/zh/get-started/dollar-cost-averaging/","matchPath":"/zh/get-started/dollar-cost-averaging/"},{"path":"/zh/get-started/faq/","matchPath":"/zh/get-started/faq/"},{"path":"/zh/get-started/how-bitcoin-exchange-works/","matchPath":"/zh/get-started/how-bitcoin-exchange-works/"},{"path":"/zh/get-started/how-bitcoin-impacts-environment/","matchPath":"/zh/get-started/how-bitcoin-impacts-environment/"},{"path":"/zh/get-started/how-bitcoin-transactions-work/","matchPath":"/zh/get-started/how-bitcoin-transactions-work/"},{"path":"/zh/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/","matchPath":"/zh/get-started/how-can-i-accept-bitcoin-cash-payments-on-my-project/"},{"path":"/zh/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/","matchPath":"/zh/get-started/how-can-my-business-start-accepting-bitcoin-from-customers/"},{"path":"/zh/get-started/how-does-accepting-bitcoin-benefit-my-business/","matchPath":"/zh/get-started/how-does-accepting-bitcoin-benefit-my-business/"},{"path":"/zh/get-started/how-does-crypto-exchange-work/","matchPath":"/zh/get-started/how-does-crypto-exchange-work/"},{"path":"/zh/get-started/how-does-governance-work-in-ethereum/","matchPath":"/zh/get-started/how-does-governance-work-in-ethereum/"},{"path":"/zh/get-started/how-is-cryptocurrency-taxed/","matchPath":"/zh/get-started/how-is-cryptocurrency-taxed/"},{"path":"/zh/get-started/how-to-backup-and-restore-a-crypto-wallet/","matchPath":"/zh/get-started/how-to-backup-and-restore-a-crypto-wallet/"},{"path":"/zh/get-started/how-to-borrow-in-defi/","matchPath":"/zh/get-started/how-to-borrow-in-defi/"},{"path":"/zh/get-started/how-to-buy-an-nft/","matchPath":"/zh/get-started/how-to-buy-an-nft/"},{"path":"/zh/get-started/how-to-buy-bitcoin-cash/","matchPath":"/zh/get-started/how-to-buy-bitcoin-cash/"},{"path":"/zh/get-started/how-to-buy-bitcoin/","matchPath":"/zh/get-started/how-to-buy-bitcoin/"},{"path":"/zh/get-started/how-to-buy-crypto/","matchPath":"/zh/get-started/how-to-buy-crypto/"},{"path":"/zh/get-started/how-to-buy-eth/","matchPath":"/zh/get-started/how-to-buy-eth/"},{"path":"/zh/get-started/how-to-buy-insurance-in-defi/","matchPath":"/zh/get-started/how-to-buy-insurance-in-defi/"},{"path":"/zh/get-started/how-to-buy-verse/","matchPath":"/zh/get-started/how-to-buy-verse/"},{"path":"/zh/get-started/how-to-choose-the-right-bitcoin-wallet/","matchPath":"/zh/get-started/how-to-choose-the-right-bitcoin-wallet/"},{"path":"/zh/get-started/how-to-choose-the-right-crypto-wallet/","matchPath":"/zh/get-started/how-to-choose-the-right-crypto-wallet/"},{"path":"/zh/get-started/how-to-create-a-bitcoin-cash-wallet/","matchPath":"/zh/get-started/how-to-create-a-bitcoin-cash-wallet/"},{"path":"/zh/get-started/how-to-create-an-ethereum-wallet/","matchPath":"/zh/get-started/how-to-create-an-ethereum-wallet/"},{"path":"/zh/get-started/how-to-enter-a-new-chain/","matchPath":"/zh/get-started/how-to-enter-a-new-chain/"},{"path":"/zh/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/","matchPath":"/zh/get-started/how-to-keep-your-bitcoin-secure-in-a-public-world/"},{"path":"/zh/get-started/how-to-lend-in-defi/","matchPath":"/zh/get-started/how-to-lend-in-defi/"},{"path":"/zh/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/","matchPath":"/zh/get-started/how-to-locate-and-use-a-bitcoin-atm-to-buy-bitcoin-with-cash/"},{"path":"/zh/get-started/how-to-provide-liquidity-on-a-dex/","matchPath":"/zh/get-started/how-to-provide-liquidity-on-a-dex/"},{"path":"/zh/get-started/how-to-receive-bitcoin-cash/","matchPath":"/zh/get-started/how-to-receive-bitcoin-cash/"},{"path":"/zh/get-started/how-to-receive-bitcoin/","matchPath":"/zh/get-started/how-to-receive-bitcoin/"},{"path":"/zh/get-started/how-to-receive-crypto/","matchPath":"/zh/get-started/how-to-receive-crypto/"},{"path":"/zh/get-started/how-to-receive-ethereum/","matchPath":"/zh/get-started/how-to-receive-ethereum/"},{"path":"/zh/get-started/how-to-sell-bitcoin-cash/","matchPath":"/zh/get-started/how-to-sell-bitcoin-cash/"},{"path":"/zh/get-started/how-to-sell-bitcoin/","matchPath":"/zh/get-started/how-to-sell-bitcoin/"},{"path":"/zh/get-started/how-to-sell-crypto/","matchPath":"/zh/get-started/how-to-sell-crypto/"},{"path":"/zh/get-started/how-to-sell-verse/","matchPath":"/zh/get-started/how-to-sell-verse/"},{"path":"/zh/get-started/how-to-send-bitcoin-cash/","matchPath":"/zh/get-started/how-to-send-bitcoin-cash/"},{"path":"/zh/get-started/how-to-send-bitcoin/","matchPath":"/zh/get-started/how-to-send-bitcoin/"},{"path":"/zh/get-started/how-to-send-crypto/","matchPath":"/zh/get-started/how-to-send-crypto/"},{"path":"/zh/get-started/how-to-send-ethereum/","matchPath":"/zh/get-started/how-to-send-ethereum/"},{"path":"/zh/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/","matchPath":"/zh/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-cash-wallet/"},{"path":"/zh/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/","matchPath":"/zh/get-started/how-to-set-up-and-use-shared-multisig-bitcoin-wallet/"},{"path":"/zh/get-started/how-to-swap-crypto/","matchPath":"/zh/get-started/how-to-swap-crypto/"},{"path":"/zh/get-started/how-to-use-a-dex/","matchPath":"/zh/get-started/how-to-use-a-dex/"},{"path":"/zh/get-started/how-to-use-bitcoin-cash/","matchPath":"/zh/get-started/how-to-use-bitcoin-cash/"},{"path":"/zh/get-started/how-to-use-derivatives-in-defi/","matchPath":"/zh/get-started/how-to-use-derivatives-in-defi/"},{"path":"/zh/get-started/how-to-yield-farm-in-defi/","matchPath":"/zh/get-started/how-to-yield-farm-in-defi/"},{"path":"/zh/get-started/how-was-eth-initially-distributed/","matchPath":"/zh/get-started/how-was-eth-initially-distributed/"},{"path":"/zh/get-started/is-bitcoin-a-store-of-value/","matchPath":"/zh/get-started/is-bitcoin-a-store-of-value/"},{"path":"/zh/get-started/is-bitcoin-an-inflation-hedge/","matchPath":"/zh/get-started/is-bitcoin-an-inflation-hedge/"},{"path":"/zh/get-started/is-bitcoin-private/","matchPath":"/zh/get-started/is-bitcoin-private/"},{"path":"/zh/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/","matchPath":"/zh/get-started/setting-up-your-own-cold-storage-bitcoin-wallet/"},{"path":"/zh/get-started/shared-multisig-bitcoin-cash-wallet/","matchPath":"/zh/get-started/shared-multisig-bitcoin-cash-wallet/"},{"path":"/zh/get-started/shared-multisig-bitcoin-wallet/","matchPath":"/zh/get-started/shared-multisig-bitcoin-wallet/"},{"path":"/zh/get-started/shared-wallet-multisig-use-cases/","matchPath":"/zh/get-started/shared-wallet-multisig-use-cases/"},{"path":"/zh/get-started/the-benefits-of-bitcoin/","matchPath":"/zh/get-started/the-benefits-of-bitcoin/"},{"path":"/zh/get-started/unstoppable-money/","matchPath":"/zh/get-started/unstoppable-money/"},{"path":"/zh/get-started/what_is_bitcoin_taproot/","matchPath":"/zh/get-started/what_is_bitcoin_taproot/"},{"path":"/zh/get-started/what_is_web3/","matchPath":"/zh/get-started/what_is_web3/"},{"path":"/zh/get-started/what-are-ai-agents-and-ai-crypto-tokens/","matchPath":"/zh/get-started/what-are-ai-agents-and-ai-crypto-tokens/"},{"path":"/zh/get-started/what-are-bitcoin-credit-cards/","matchPath":"/zh/get-started/what-are-bitcoin-credit-cards/"},{"path":"/zh/get-started/what-are-bitcoin-network-fees/","matchPath":"/zh/get-started/what-are-bitcoin-network-fees/"},{"path":"/zh/get-started/what-are-bitcoin-ordinals/","matchPath":"/zh/get-started/what-are-bitcoin-ordinals/"},{"path":"/zh/get-started/what-are-crypto-derivatives/","matchPath":"/zh/get-started/what-are-crypto-derivatives/"},{"path":"/zh/get-started/what-are-crypto-network-fees/","matchPath":"/zh/get-started/what-are-crypto-network-fees/"},{"path":"/zh/get-started/what-are-crypto-retirement-accounts/","matchPath":"/zh/get-started/what-are-crypto-retirement-accounts/"},{"path":"/zh/get-started/what-are-erc-20-tokens/","matchPath":"/zh/get-started/what-are-erc-20-tokens/"},{"path":"/zh/get-started/what-are-liquidity-pools/","matchPath":"/zh/get-started/what-are-liquidity-pools/"},{"path":"/zh/get-started/what-are-meme-coins/","matchPath":"/zh/get-started/what-are-meme-coins/"},{"path":"/zh/get-started/what-are-nfts/","matchPath":"/zh/get-started/what-are-nfts/"},{"path":"/zh/get-started/what-are-prediction-markets/","matchPath":"/zh/get-started/what-are-prediction-markets/"},{"path":"/zh/get-started/what-are-real-world-assets-rwa/","matchPath":"/zh/get-started/what-are-real-world-assets-rwa/"},{"path":"/zh/get-started/what-are-shareable-links/","matchPath":"/zh/get-started/what-are-shareable-links/"},{"path":"/zh/get-started/what-are-sidechains/","matchPath":"/zh/get-started/what-are-sidechains/"},{"path":"/zh/get-started/what-are-stablecoins/","matchPath":"/zh/get-started/what-are-stablecoins/"},{"path":"/zh/get-started/what-are-the-different-types-of-wrapped-bitcoin/","matchPath":"/zh/get-started/what-are-the-different-types-of-wrapped-bitcoin/"},{"path":"/zh/get-started/what-are-transaction-fees/","matchPath":"/zh/get-started/what-are-transaction-fees/"},{"path":"/zh/get-started/what-is-a-bitcoin-ira/","matchPath":"/zh/get-started/what-is-a-bitcoin-ira/"},{"path":"/zh/get-started/what-is-a-bitcoin-transaction-accelerator/","matchPath":"/zh/get-started/what-is-a-bitcoin-transaction-accelerator/"},{"path":"/zh/get-started/what-is-a-bitcoin-wallet/","matchPath":"/zh/get-started/what-is-a-bitcoin-wallet/"},{"path":"/zh/get-started/what-is-a-brokerage/","matchPath":"/zh/get-started/what-is-a-brokerage/"},{"path":"/zh/get-started/what-is-a-cex/","matchPath":"/zh/get-started/what-is-a-cex/"},{"path":"/zh/get-started/what-is-a-confirmation/","matchPath":"/zh/get-started/what-is-a-confirmation/"},{"path":"/zh/get-started/what-is-a-consensus-mechanism/","matchPath":"/zh/get-started/what-is-a-consensus-mechanism/"},{"path":"/zh/get-started/what-is-a-crypto-wallet/","matchPath":"/zh/get-started/what-is-a-crypto-wallet/"},{"path":"/zh/get-started/what-is-a-dao/","matchPath":"/zh/get-started/what-is-a-dao/"},{"path":"/zh/get-started/what-is-a-dApp/","matchPath":"/zh/get-started/what-is-a-dApp/"},{"path":"/zh/get-started/what-is-a-dex/","matchPath":"/zh/get-started/what-is-a-dex/"},{"path":"/zh/get-started/what-is-a-liquid-staking-token/","matchPath":"/zh/get-started/what-is-a-liquid-staking-token/"},{"path":"/zh/get-started/what-is-a-smart-contract/","matchPath":"/zh/get-started/what-is-a-smart-contract/"},{"path":"/zh/get-started/what-is-a-token-sale/","matchPath":"/zh/get-started/what-is-a-token-sale/"},{"path":"/zh/get-started/what-is-a-token/","matchPath":"/zh/get-started/what-is-a-token/"},{"path":"/zh/get-started/what-is-an-airdrop/","matchPath":"/zh/get-started/what-is-an-airdrop/"},{"path":"/zh/get-started/what-is-apy/","matchPath":"/zh/get-started/what-is-apy/"},{"path":"/zh/get-started/what-is-avalanche/","matchPath":"/zh/get-started/what-is-avalanche/"},{"path":"/zh/get-started/what-is-bitcoin-cash/","matchPath":"/zh/get-started/what-is-bitcoin-cash/"},{"path":"/zh/get-started/what-is-Bitcoin-ETF/","matchPath":"/zh/get-started/what-is-Bitcoin-ETF/"},{"path":"/zh/get-started/what-is-bitcoin-gambling/","matchPath":"/zh/get-started/what-is-bitcoin-gambling/"},{"path":"/zh/get-started/what-is-bitcoin-governance/","matchPath":"/zh/get-started/what-is-bitcoin-governance/"},{"path":"/zh/get-started/what-is-bitcoin-halving/","matchPath":"/zh/get-started/what-is-bitcoin-halving/"},{"path":"/zh/get-started/what-is-bitcoin-mining/","matchPath":"/zh/get-started/what-is-bitcoin-mining/"},{"path":"/zh/get-started/what-is-bitcoin-op-cat/","matchPath":"/zh/get-started/what-is-bitcoin-op-cat/"},{"path":"/zh/get-started/what-is-bitcoin-otc-trading/","matchPath":"/zh/get-started/what-is-bitcoin-otc-trading/"},{"path":"/zh/get-started/what-is-bitcoin/","matchPath":"/zh/get-started/what-is-bitcoin/"},{"path":"/zh/get-started/what-is-bnb-and-bnb-smart-chain/","matchPath":"/zh/get-started/what-is-bnb-and-bnb-smart-chain/"},{"path":"/zh/get-started/what-is-censorship-resistance/","matchPath":"/zh/get-started/what-is-censorship-resistance/"},{"path":"/zh/get-started/what-is-cex-education/","matchPath":"/zh/get-started/what-is-cex-education/"},{"path":"/zh/get-started/what-is-coin-mixer/","matchPath":"/zh/get-started/what-is-coin-mixer/"},{"path":"/zh/get-started/what-is-cross-chain-interoperability/","matchPath":"/zh/get-started/what-is-cross-chain-interoperability/"},{"path":"/zh/get-started/what-is-crypto-asset-management/","matchPath":"/zh/get-started/what-is-crypto-asset-management/"},{"path":"/zh/get-started/what-is-crypto-insurance/","matchPath":"/zh/get-started/what-is-crypto-insurance/"},{"path":"/zh/get-started/what-is-crypto-lending/","matchPath":"/zh/get-started/what-is-crypto-lending/"},{"path":"/zh/get-started/what-is-defi-decentralized-finance/","matchPath":"/zh/get-started/what-is-defi-decentralized-finance/"},{"path":"/zh/get-started/what-is-EIP-1559/","matchPath":"/zh/get-started/what-is-EIP-1559/"},{"path":"/zh/get-started/what-is-eth-2/","matchPath":"/zh/get-started/what-is-eth-2/"},{"path":"/zh/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/","matchPath":"/zh/get-started/what-is-ETH-gas-and-how-do-fees-work-in-ethereum/"},{"path":"/zh/get-started/what-is-eth-used-for/","matchPath":"/zh/get-started/what-is-eth-used-for/"},{"path":"/zh/get-started/what-is-ethereum-monetary-policy/","matchPath":"/zh/get-started/what-is-ethereum-monetary-policy/"},{"path":"/zh/get-started/what-is-ethereum/","matchPath":"/zh/get-started/what-is-ethereum/"},{"path":"/zh/get-started/what-is-evm/","matchPath":"/zh/get-started/what-is-evm/"},{"path":"/zh/get-started/what-is-fdv-fully-diluted-value/","matchPath":"/zh/get-started/what-is-fdv-fully-diluted-value/"},{"path":"/zh/get-started/what-is-fractal-bitcoin/","matchPath":"/zh/get-started/what-is-fractal-bitcoin/"},{"path":"/zh/get-started/what-is-gas/","matchPath":"/zh/get-started/what-is-gas/"},{"path":"/zh/get-started/what-is-inflation/","matchPath":"/zh/get-started/what-is-inflation/"},{"path":"/zh/get-started/what-is-layer-2-on-ethereum/","matchPath":"/zh/get-started/what-is-layer-2-on-ethereum/"},{"path":"/zh/get-started/what-is-lightning-network/","matchPath":"/zh/get-started/what-is-lightning-network/"},{"path":"/zh/get-started/what-is-liquidity/","matchPath":"/zh/get-started/what-is-liquidity/"},{"path":"/zh/get-started/what-is-money/","matchPath":"/zh/get-started/what-is-money/"},{"path":"/zh/get-started/what-is-polygon-matic/","matchPath":"/zh/get-started/what-is-polygon-matic/"},{"path":"/zh/get-started/what-is-proof-of-stake/","matchPath":"/zh/get-started/what-is-proof-of-stake/"},{"path":"/zh/get-started/what-is-proof-of-work/","matchPath":"/zh/get-started/what-is-proof-of-work/"},{"path":"/zh/get-started/what-is-restaking/","matchPath":"/zh/get-started/what-is-restaking/"},{"path":"/zh/get-started/what-is-staking/","matchPath":"/zh/get-started/what-is-staking/"},{"path":"/zh/get-started/what-is-tbtc-threshold-bitcoin/","matchPath":"/zh/get-started/what-is-tbtc-threshold-bitcoin/"},{"path":"/zh/get-started/what-is-the-double-spend-problem/","matchPath":"/zh/get-started/what-is-the-double-spend-problem/"},{"path":"/zh/get-started/what-is-the-metaverse/","matchPath":"/zh/get-started/what-is-the-metaverse/"},{"path":"/zh/get-started/what-is-the-verse-development-fund/","matchPath":"/zh/get-started/what-is-the-verse-development-fund/"},{"path":"/zh/get-started/what-is-trading-volume/","matchPath":"/zh/get-started/what-is-trading-volume/"},{"path":"/zh/get-started/what-is-uni/","matchPath":"/zh/get-started/what-is-uni/"},{"path":"/zh/get-started/what-is-verse-community/","matchPath":"/zh/get-started/what-is-verse-community/"},{"path":"/zh/get-started/what-is-verse-dex/","matchPath":"/zh/get-started/what-is-verse-dex/"},{"path":"/zh/get-started/what-is-verse/","matchPath":"/zh/get-started/what-is-verse/"},{"path":"/zh/get-started/what-is-volatility/","matchPath":"/zh/get-started/what-is-volatility/"},{"path":"/zh/get-started/what-is-walletconnect/","matchPath":"/zh/get-started/what-is-walletconnect/"},{"path":"/zh/get-started/what-is-wbtc/","matchPath":"/zh/get-started/what-is-wbtc/"},{"path":"/zh/get-started/what-is-weth/","matchPath":"/zh/get-started/what-is-weth/"},{"path":"/zh/get-started/what-is-yfi/","matchPath":"/zh/get-started/what-is-yfi/"},{"path":"/zh/get-started/what-is-yield-farming/","matchPath":"/zh/get-started/what-is-yield-farming/"},{"path":"/zh/get-started/where-can-i-get-support-for-an-app-idea/","matchPath":"/zh/get-started/where-can-i-get-support-for-an-app-idea/"},{"path":"/zh/get-started/where-can-i-spend-bitcoin-and-crypto/","matchPath":"/zh/get-started/where-can-i-spend-bitcoin-and-crypto/"},{"path":"/zh/get-started/who-created-ethereum/","matchPath":"/zh/get-started/who-created-ethereum/"},{"path":"/zh/get-started/your-guide-to-avoiding-bitcoin-fraud/","matchPath":"/zh/get-started/your-guide-to-avoiding-bitcoin-fraud/"},{"path":"/zh/giftcard/history/","matchPath":"/zh/giftcard/history/"},{"path":"/zh/jobs/solidity/","matchPath":"/zh/jobs/solidity/"},{"path":"/zh/legal/cookies/","matchPath":"/zh/legal/cookies/"},{"path":"/zh/legal/dsar-form/","matchPath":"/zh/legal/dsar-form/"},{"path":"/zh/legal/faq/","matchPath":"/zh/legal/faq/"},{"path":"/zh/legal/privacy-policy/","matchPath":"/zh/legal/privacy-policy/"},{"path":"/zh/legal/user-agreement/","matchPath":"/zh/legal/user-agreement/"},{"path":"/zh/legal/verse-service-terms/","matchPath":"/zh/legal/verse-service-terms/"},{"path":"/zh/legal/wallet-service-terms/","matchPath":"/zh/legal/wallet-service-terms/"},{"path":"/zh/luxury/art-collectibles/","matchPath":"/zh/luxury/art-collectibles/"},{"path":"/zh/luxury/concierge/","matchPath":"/zh/luxury/concierge/"},{"path":"/zh/luxury/designer-fashion/","matchPath":"/zh/luxury/designer-fashion/"},{"path":"/zh/luxury/events/","matchPath":"/zh/luxury/events/"},{"path":"/zh/luxury/experiences/","matchPath":"/zh/luxury/experiences/"},{"path":"/zh/luxury/ferrari-dealers/","matchPath":"/zh/luxury/ferrari-dealers/"},{"path":"/zh/luxury/health-wellness/","matchPath":"/zh/luxury/health-wellness/"},{"path":"/zh/luxury/hotels-resorts/","matchPath":"/zh/luxury/hotels-resorts/"},{"path":"/zh/luxury/jewelry/","matchPath":"/zh/luxury/jewelry/"},{"path":"/zh/luxury/private-jets/","matchPath":"/zh/luxury/private-jets/"},{"path":"/zh/luxury/real-estate/","matchPath":"/zh/luxury/real-estate/"},{"path":"/zh/luxury/supercars/","matchPath":"/zh/luxury/supercars/"},{"path":"/zh/luxury/timepieces/","matchPath":"/zh/luxury/timepieces/"},{"path":"/zh/luxury/villas/","matchPath":"/zh/luxury/villas/"},{"path":"/zh/luxury/yachts/","matchPath":"/zh/luxury/yachts/"},{"path":"/zh/merchant-solutions/brick-mortar/","matchPath":"/zh/merchant-solutions/brick-mortar/"},{"path":"/zh/merchant-solutions/online-business/","matchPath":"/zh/merchant-solutions/online-business/"},{"path":"/zh/mining/bitcoin-cash/","matchPath":"/zh/mining/bitcoin-cash/"},{"path":"/zh/mining/cloud-mining/","matchPath":"/zh/mining/cloud-mining/"},{"path":"/zh/mining/dash/","matchPath":"/zh/mining/dash/"},{"path":"/zh/mining/dogecoin/","matchPath":"/zh/mining/dogecoin/"},{"path":"/zh/mining/kaspa/","matchPath":"/zh/mining/kaspa/"},{"path":"/zh/mining/litecoin/","matchPath":"/zh/mining/litecoin/"},{"path":"/zh/mining/monero/","matchPath":"/zh/mining/monero/"},{"path":"/zh/mining/ravencoin/","matchPath":"/zh/mining/ravencoin/"},{"path":"/zh/newsletters/btc-research/","matchPath":"/zh/newsletters/btc-research/"},{"path":"/zh/newsletters/games-updates/","matchPath":"/zh/newsletters/games-updates/"},{"path":"/zh/newsletters/price-analysis/","matchPath":"/zh/newsletters/price-analysis/"},{"path":"/zh/newsletters/product-updates/","matchPath":"/zh/newsletters/product-updates/"},{"path":"/zh/newsletters/verse-updates/","matchPath":"/zh/newsletters/verse-updates/"},{"path":"/zh/newsletters/week-in-review/","matchPath":"/zh/newsletters/week-in-review/"},{"path":"/zh/payments/gateways/","matchPath":"/zh/payments/gateways/"},{"path":"/zh/payments/integrations/","matchPath":"/zh/payments/integrations/"},{"path":"/zh/payments/merchants/","matchPath":"/zh/payments/merchants/"},{"path":"/zh/payments/point-of-sale/","matchPath":"/zh/payments/point-of-sale/"},{"path":"/zh/payments/processors/","matchPath":"/zh/payments/processors/"},{"path":"/zh/payments/remittances/","matchPath":"/zh/payments/remittances/"},{"path":"/zh/payments/solutions/","matchPath":"/zh/payments/solutions/"},{"path":"/zh/payments/tips/","matchPath":"/zh/payments/tips/"},{"path":"/zh/poker/faqs/","matchPath":"/zh/poker/faqs/"},{"path":"/zh/poker/how-to-play/","matchPath":"/zh/poker/how-to-play/"},{"path":"/zh/poker/legality/","matchPath":"/zh/poker/legality/"},{"path":"/zh/poker/promotions/","matchPath":"/zh/poker/promotions/"},{"path":"/zh/poker/room-reviews/","matchPath":"/zh/poker/room-reviews/"},{"path":"/zh/poker/tournaments/","matchPath":"/zh/poker/tournaments/"},{"path":"/zh/price/aave-aave/","matchPath":"/zh/price/aave-aave/"},{"path":"/zh/price/algorand-algo/","matchPath":"/zh/price/algorand-algo/"},{"path":"/zh/price/apecoin-ape/","matchPath":"/zh/price/apecoin-ape/"},{"path":"/zh/price/Aptos-APT/","matchPath":"/zh/price/Aptos-APT/"},{"path":"/zh/price/arbitrum-arb/","matchPath":"/zh/price/arbitrum-arb/"},{"path":"/zh/price/arweave-ar/","matchPath":"/zh/price/arweave-ar/"},{"path":"/zh/price/avalanche-avax/","matchPath":"/zh/price/avalanche-avax/"},{"path":"/zh/price/axie-infinity-axs/","matchPath":"/zh/price/axie-infinity-axs/"},{"path":"/zh/price/binance-usd-busd/","matchPath":"/zh/price/binance-usd-busd/"},{"path":"/zh/price/bitcoin-btc/","matchPath":"/zh/price/bitcoin-btc/"},{"path":"/zh/price/bitcoin-cash-bch/","matchPath":"/zh/price/bitcoin-cash-bch/"},{"path":"/zh/price/bitget-token-new-bgb/","matchPath":"/zh/price/bitget-token-new-bgb/"},{"path":"/zh/price/bittorrent-new-btt/","matchPath":"/zh/price/bittorrent-new-btt/"},{"path":"/zh/price/bnb-bnb/","matchPath":"/zh/price/bnb-bnb/"},{"path":"/zh/price/cardano-ada/","matchPath":"/zh/price/cardano-ada/"},{"path":"/zh/price/casper-cspr/","matchPath":"/zh/price/casper-cspr/"},{"path":"/zh/price/chainlink-link/","matchPath":"/zh/price/chainlink-link/"},{"path":"/zh/price/chiliz-chz/","matchPath":"/zh/price/chiliz-chz/"},{"path":"/zh/price/conflux-network-cfx/","matchPath":"/zh/price/conflux-network-cfx/"},{"path":"/zh/price/cosmos-atom/","matchPath":"/zh/price/cosmos-atom/"},{"path":"/zh/price/cronos-cro/","matchPath":"/zh/price/cronos-cro/"},{"path":"/zh/price/curve-dao-token-crv/","matchPath":"/zh/price/curve-dao-token-crv/"},{"path":"/zh/price/decentraland-mana/","matchPath":"/zh/price/decentraland-mana/"},{"path":"/zh/price/dogecoin-doge/","matchPath":"/zh/price/dogecoin-doge/"},{"path":"/zh/price/dYdX-ETHdYdX-dYdX/","matchPath":"/zh/price/dYdX-ETHdYdX-dYdX/"},{"path":"/zh/price/eCash-XEC/","matchPath":"/zh/price/eCash-XEC/"},{"path":"/zh/price/eos-eos/","matchPath":"/zh/price/eos-eos/"},{"path":"/zh/price/ethereum-classic-etc/","matchPath":"/zh/price/ethereum-classic-etc/"},{"path":"/zh/price/fantom-ftm/","matchPath":"/zh/price/fantom-ftm/"},{"path":"/zh/price/filecoin-fil/","matchPath":"/zh/price/filecoin-fil/"},{"path":"/zh/price/first-digital-usd-fdusd/","matchPath":"/zh/price/first-digital-usd-fdusd/"},{"path":"/zh/price/flow-flow/","matchPath":"/zh/price/flow-flow/"},{"path":"/zh/price/frax-share-frax/","matchPath":"/zh/price/frax-share-frax/"},{"path":"/zh/price/gala-gala/","matchPath":"/zh/price/gala-gala/"},{"path":"/zh/price/gatetoken-gt/","matchPath":"/zh/price/gatetoken-gt/"},{"path":"/zh/price/gmx-gmx/","matchPath":"/zh/price/gmx-gmx/"},{"path":"/zh/price/hedera-hbar/","matchPath":"/zh/price/hedera-hbar/"},{"path":"/zh/price/immutable-x-imx/","matchPath":"/zh/price/immutable-x-imx/"},{"path":"/zh/price/injective-inj/","matchPath":"/zh/price/injective-inj/"},{"path":"/zh/price/internet-computer-icp/","matchPath":"/zh/price/internet-computer-icp/"},{"path":"/zh/price/iota-miota/","matchPath":"/zh/price/iota-miota/"},{"path":"/zh/price/klaytn-klay/","matchPath":"/zh/price/klaytn-klay/"},{"path":"/zh/price/kucoin-token-kcs/","matchPath":"/zh/price/kucoin-token-kcs/"},{"path":"/zh/price/lido-dao-ldo/","matchPath":"/zh/price/lido-dao-ldo/"},{"path":"/zh/price/maker-mkr/","matchPath":"/zh/price/maker-mkr/"},{"path":"/zh/price/mantle-mnt/","matchPath":"/zh/price/mantle-mnt/"},{"path":"/zh/price/mina-mina/","matchPath":"/zh/price/mina-mina/"},{"path":"/zh/price/multiversx-egld-egld/","matchPath":"/zh/price/multiversx-egld-egld/"},{"path":"/zh/price/near-protocol-near/","matchPath":"/zh/price/near-protocol-near/"},{"path":"/zh/price/NEXO代币-NEXO/","matchPath":"/zh/price/NEXO代币-NEXO/"},{"path":"/zh/price/oasis-network-rose/","matchPath":"/zh/price/oasis-network-rose/"},{"path":"/zh/price/okb-okb/","matchPath":"/zh/price/okb-okb/"},{"path":"/zh/price/pancakeswap-cake/","matchPath":"/zh/price/pancakeswap-cake/"},{"path":"/zh/price/pax-gold-paxg/","matchPath":"/zh/price/pax-gold-paxg/"},{"path":"/zh/price/paxos-standard-usdp/","matchPath":"/zh/price/paxos-standard-usdp/"},{"path":"/zh/price/pepe-pepe/","matchPath":"/zh/price/pepe-pepe/"},{"path":"/zh/price/polkadot-new-dot/","matchPath":"/zh/price/polkadot-new-dot/"},{"path":"/zh/price/polygon-matic/","matchPath":"/zh/price/polygon-matic/"},{"path":"/zh/price/quant-qnt/","matchPath":"/zh/price/quant-qnt/"},{"path":"/zh/price/rocket-pool-rpl/","matchPath":"/zh/price/rocket-pool-rpl/"},{"path":"/zh/price/solana-sol/","matchPath":"/zh/price/solana-sol/"},{"path":"/zh/price/stacks-stx/","matchPath":"/zh/price/stacks-stx/"},{"path":"/zh/price/stellar-xlm/","matchPath":"/zh/price/stellar-xlm/"},{"path":"/zh/price/synthetix-snx/","matchPath":"/zh/price/synthetix-snx/"},{"path":"/zh/price/terra-luna-lunc/","matchPath":"/zh/price/terra-luna-lunc/"},{"path":"/zh/price/tether-gold-xau/","matchPath":"/zh/price/tether-gold-xau/"},{"path":"/zh/price/tether-usdt/","matchPath":"/zh/price/tether-usdt/"},{"path":"/zh/price/tezos-xtz/","matchPath":"/zh/price/tezos-xtz/"},{"path":"/zh/price/the-graph-grt/","matchPath":"/zh/price/the-graph-grt/"},{"path":"/zh/price/theta-network-theta/","matchPath":"/zh/price/theta-network-theta/"},{"path":"/zh/price/thorchain-rune/","matchPath":"/zh/price/thorchain-rune/"},{"path":"/zh/price/toncoin-ton/","matchPath":"/zh/price/toncoin-ton/"},{"path":"/zh/price/trust-wallet-token-twt/","matchPath":"/zh/price/trust-wallet-token-twt/"},{"path":"/zh/price/Uniswap-UNI/","matchPath":"/zh/price/Uniswap-UNI/"},{"path":"/zh/price/unus-sed-leo-leo/","matchPath":"/zh/price/unus-sed-leo-leo/"},{"path":"/zh/price/usdd-usdd/","matchPath":"/zh/price/usdd-usdd/"},{"path":"/zh/price/vechain-vet/","matchPath":"/zh/price/vechain-vet/"},{"path":"/zh/price/wootrade-woo/","matchPath":"/zh/price/wootrade-woo/"},{"path":"/zh/price/XDC网络(XDC)/","matchPath":"/zh/price/XDC网络(XDC)/"},{"path":"/zh/price/xrp-xrp/","matchPath":"/zh/price/xrp-xrp/"},{"path":"/zh/price/zcash-zec/","matchPath":"/zh/price/zcash-zec/"},{"path":"/zh/price/乐观主义-以太坊操作/","matchPath":"/zh/price/乐观主义-以太坊操作/"},{"path":"/zh/price/以太坊-ETH/","matchPath":"/zh/price/以太坊-ETH/"},{"path":"/zh/price/包装比特币WBTC/","matchPath":"/zh/price/包装比特币WBTC/"},{"path":"/zh/price/卡瓦币 (Kava-kava)/","matchPath":"/zh/price/卡瓦币 (Kava-kava)/"},{"path":"/zh/price/复合币（Compound）- COMP/","matchPath":"/zh/price/复合币（Compound）- COMP/"},{"path":"/zh/price/多抵押代币-DAI/","matchPath":"/zh/price/多抵押代币-DAI/"},{"path":"/zh/price/新版新/","matchPath":"/zh/price/新版新/"},{"path":"/zh/price/柴犬币（SHIB）/","matchPath":"/zh/price/柴犬币（SHIB）/"},{"path":"/zh/price/模糊令牌（BLUR）/","matchPath":"/zh/price/模糊令牌（BLUR）/"},{"path":"/zh/price/比特币SV（BSV）/","matchPath":"/zh/price/比特币SV（BSV）/"},{"path":"/zh/price/沙盒游戏 (SAND)/","matchPath":"/zh/price/沙盒游戏 (SAND)/"},{"path":"/zh/price/波场-TRX/","matchPath":"/zh/price/波场-TRX/"},{"path":"/zh/price/渲染代币 - RNDR/","matchPath":"/zh/price/渲染代币 - RNDR/"},{"path":"/zh/price/火币通证 (HT) 介绍/","matchPath":"/zh/price/火币通证 (HT) 介绍/"},{"path":"/zh/price/真实美元-TrueUSD (TUSD)/","matchPath":"/zh/price/真实美元-TrueUSD (TUSD)/"},{"path":"/zh/price/美元币 (USDC)/","matchPath":"/zh/price/美元币 (USDC)/"},{"path":"/zh/price/莱特币(LTC)/","matchPath":"/zh/price/莱特币(LTC)/"},{"path":"/zh/price/门罗币 - XMR/","matchPath":"/zh/price/门罗币 - XMR/"},{"path":"/zh/price/随随/","matchPath":"/zh/price/随随/"},{"path":"/zh/research/btc-research/","matchPath":"/zh/research/btc-research/"},{"path":"/zh/research/games-updates/","matchPath":"/zh/research/games-updates/"},{"path":"/zh/research/price-analysis/","matchPath":"/zh/research/price-analysis/"},{"path":"/zh/research/product-updates/","matchPath":"/zh/research/product-updates/"},{"path":"/zh/research/verse-updates/","matchPath":"/zh/research/verse-updates/"},{"path":"/zh/research/week-in-review/","matchPath":"/zh/research/week-in-review/"},{"path":"/zh/tax/calculators/","matchPath":"/zh/tax/calculators/"},{"path":"/zh/tax/compliance/","matchPath":"/zh/tax/compliance/"},{"path":"/zh/tax/forms/","matchPath":"/zh/tax/forms/"},{"path":"/zh/tax/guides/","matchPath":"/zh/tax/guides/"},{"path":"/zh/tax/laws/","matchPath":"/zh/tax/laws/"},{"path":"/zh/tax/professionals/","matchPath":"/zh/tax/professionals/"},{"path":"/zh/tax/software/","matchPath":"/zh/tax/software/"},{"path":"/zh/tax/strategies/","matchPath":"/zh/tax/strategies/"},{"path":"/zh/trading/top-bitcoin-trading-tools-for-beginners/","matchPath":"/zh/trading/top-bitcoin-trading-tools-for-beginners/"},{"path":"/zh/trading/top-contracts-for-difference/","matchPath":"/zh/trading/top-contracts-for-difference/"},{"path":"/zh/vpn/best-vpn-in-us/","matchPath":"/zh/vpn/best-vpn-in-us/"},{"path":"/zh/wallet-services/backup-options/","matchPath":"/zh/wallet-services/backup-options/"},{"path":"/zh/wallet-services/secure-wallet/","matchPath":"/zh/wallet-services/secure-wallet/"},{"path":"/zh/wallet-services/security-tips/","matchPath":"/zh/wallet-services/security-tips/"},{"path":"/zh/wallet-services/setup-guide/","matchPath":"/zh/wallet-services/setup-guide/"},{"path":"/zh/wallet-services/wallet-download/","matchPath":"/zh/wallet-services/wallet-download/"},{"path":"/zh/wallet/avalanche/","matchPath":"/zh/wallet/avalanche/"},{"path":"/zh/wallet/bitcoin/","matchPath":"/zh/wallet/bitcoin/"},{"path":"/zh/wallet/bnb/","matchPath":"/zh/wallet/bnb/"},{"path":"/zh/wallet/browser-extension/","matchPath":"/zh/wallet/browser-extension/"},{"path":"/zh/wallet/cardano/","matchPath":"/zh/wallet/cardano/"},{"path":"/zh/wallet/custodial/","matchPath":"/zh/wallet/custodial/"},{"path":"/zh/wallet/defi-wallets/","matchPath":"/zh/wallet/defi-wallets/"},{"path":"/zh/wallet/defi/","matchPath":"/zh/wallet/defi/"},{"path":"/zh/wallet/desktop/","matchPath":"/zh/wallet/desktop/"},{"path":"/zh/wallet/enterprise/","matchPath":"/zh/wallet/enterprise/"},{"path":"/zh/wallet/ethereum/","matchPath":"/zh/wallet/ethereum/"},{"path":"/zh/wallet/gaming/","matchPath":"/zh/wallet/gaming/"},{"path":"/zh/wallet/hardware/","matchPath":"/zh/wallet/hardware/"},{"path":"/zh/wallet/hodl/","matchPath":"/zh/wallet/hodl/"},{"path":"/zh/wallet/lightning/","matchPath":"/zh/wallet/lightning/"},{"path":"/zh/wallet/litecoin/","matchPath":"/zh/wallet/litecoin/"},{"path":"/zh/wallet/mobile/","matchPath":"/zh/wallet/mobile/"},{"path":"/zh/wallet/multi-signature/","matchPath":"/zh/wallet/multi-signature/"},{"path":"/zh/wallet/multichain/","matchPath":"/zh/wallet/multichain/"},{"path":"/zh/wallet/nft/","matchPath":"/zh/wallet/nft/"},{"path":"/zh/wallet/paper-wallets/","matchPath":"/zh/wallet/paper-wallets/"},{"path":"/zh/wallet/polkadot/","matchPath":"/zh/wallet/polkadot/"},{"path":"/zh/wallet/privacy/","matchPath":"/zh/wallet/privacy/"},{"path":"/zh/wallet/remittance/","matchPath":"/zh/wallet/remittance/"},{"path":"/zh/wallet/reviews/","matchPath":"/zh/wallet/reviews/"},{"path":"/zh/wallet/self-custodial/","matchPath":"/zh/wallet/self-custodial/"},{"path":"/zh/wallet/solana/","matchPath":"/zh/wallet/solana/"},{"path":"/zh/wallet/staking/","matchPath":"/zh/wallet/staking/"},{"path":"/zh/wallet/tezos/","matchPath":"/zh/wallet/tezos/"},{"path":"/zh/wallet/trading/","matchPath":"/zh/wallet/trading/"},{"path":"/zh/wallet/xrp/","matchPath":"/zh/wallet/xrp/"},{"path":"/zh/wealth-management/binance-coin/","matchPath":"/zh/wealth-management/binance-coin/"},{"path":"/zh/wealth-management/bitcoin-cash/","matchPath":"/zh/wealth-management/bitcoin-cash/"},{"path":"/zh/wealth-management/bitcoin/","matchPath":"/zh/wealth-management/bitcoin/"},{"path":"/zh/wealth-management/ethereum/","matchPath":"/zh/wealth-management/ethereum/"},{"path":"/zh/wealth-management/solana/","matchPath":"/zh/wealth-management/solana/"},{"path":"/zh/wealth-management/usdc/","matchPath":"/zh/wealth-management/usdc/"},{"path":"/zh/wealth-management/usdt-tether/","matchPath":"/zh/wealth-management/usdt-tether/"},{"path":"/de/about-us/","matchPath":"/de/about-us/"},{"path":"/de/advertise/","matchPath":"/de/advertise/"},{"path":"/de/ai/","matchPath":"/de/ai/"},{"path":"/de/airdrops/","matchPath":"/de/airdrops/"},{"path":"/de/altcoin-casino/","matchPath":"/de/altcoin-casino/"},{"path":"/de/analysis-tools/","matchPath":"/de/analysis-tools/"},{"path":"/de/analytical-tools/","matchPath":"/de/analytical-tools/"},{"path":"/de/best-altcoins/","matchPath":"/de/best-altcoins/"},{"path":"/de/best-bitcoin-staking-platform/","matchPath":"/de/best-bitcoin-staking-platform/"},{"path":"/de/best-bitcoin-trading-bots/","matchPath":"/de/best-bitcoin-trading-bots/"},{"path":"/de/best-crypto-apps/","matchPath":"/de/best-crypto-apps/"},{"path":"/de/best-crypto-brokers/","matchPath":"/de/best-crypto-brokers/"},{"path":"/de/best-crypto-presales/","matchPath":"/de/best-crypto-presales/"},{"path":"/de/best-crypto-to-buy-now/","matchPath":"/de/best-crypto-to-buy-now/"},{"path":"/de/best-crypto-today/","matchPath":"/de/best-crypto-today/"},{"path":"/de/best-crypto-trading-apps/","matchPath":"/de/best-crypto-trading-apps/"},{"path":"/de/best-crypto-trading-platform-australia/","matchPath":"/de/best-crypto-trading-platform-australia/"},{"path":"/de/best-crypto-trading-platform/","matchPath":"/de/best-crypto-trading-platform/"},{"path":"/de/best-crypto-trading-signals/","matchPath":"/de/best-crypto-trading-signals/"},{"path":"/de/best-exchange-for-bitcoin/","matchPath":"/de/best-exchange-for-bitcoin/"},{"path":"/de/best-places-to-buy-crypto/","matchPath":"/de/best-places-to-buy-crypto/"},{"path":"/de/best-us-bitcoin-exchange/","matchPath":"/de/best-us-bitcoin-exchange/"},{"path":"/de/bitcoin-atm/","matchPath":"/de/bitcoin-atm/"},{"path":"/de/bitcoin-blackjack/","matchPath":"/de/bitcoin-blackjack/"},{"path":"/de/bitcoin-card/","matchPath":"/de/bitcoin-card/"},{"path":"/de/bitcoin-cash-projects/","matchPath":"/de/bitcoin-cash-projects/"},{"path":"/de/bitcoin-cash-register/","matchPath":"/de/bitcoin-cash-register/"},{"path":"/de/bitcoin-casino/","matchPath":"/de/bitcoin-casino/"},{"path":"/de/bitcoin-dice/","matchPath":"/de/bitcoin-dice/"},{"path":"/de/bitcoin-etf/","matchPath":"/de/bitcoin-etf/"},{"path":"/de/bitcoin-exchange-directory/","matchPath":"/de/bitcoin-exchange-directory/"},{"path":"/de/bitcoin-loan-directory/","matchPath":"/de/bitcoin-loan-directory/"},{"path":"/de/bitcoin-real-estate/","matchPath":"/de/bitcoin-real-estate/"},{"path":"/de/bitcoin-roulette/","matchPath":"/de/bitcoin-roulette/"},{"path":"/de/bitcoin-slots/","matchPath":"/de/bitcoin-slots/"},{"path":"/de/bitcoin-teller-machine/","matchPath":"/de/bitcoin-teller-machine/"},{"path":"/de/bitcoin-transaction-accelerator/","matchPath":"/de/bitcoin-transaction-accelerator/"},{"path":"/de/bitcoin-wallet-directory/","matchPath":"/de/bitcoin-wallet-directory/"},{"path":"/de/browsers/","matchPath":"/de/browsers/"},{"path":"/de/buy/","matchPath":"/de/buy/"},{"path":"/de/canada/","matchPath":"/de/canada/"},{"path":"/de/card-casino/","matchPath":"/de/card-casino/"},{"path":"/de/cards/","matchPath":"/de/cards/"},{"path":"/de/cashfusion-fund/","matchPath":"/de/cashfusion-fund/"},{"path":"/de/celebrity-tokens/","matchPath":"/de/celebrity-tokens/"},{"path":"/de/cert/","matchPath":"/de/cert/"},{"path":"/de/cfd/","matchPath":"/de/cfd/"},{"path":"/de/conferences/","matchPath":"/de/conferences/"},{"path":"/de/contact-us/","matchPath":"/de/contact-us/"},{"path":"/de/corporate-bitcoin-treasury/","matchPath":"/de/corporate-bitcoin-treasury/"},{"path":"/de/cross-chain-bridges/","matchPath":"/de/cross-chain-bridges/"},{"path":"/de/crypto-affiliate-programs/","matchPath":"/de/crypto-affiliate-programs/"},{"path":"/de/crypto-casino/","matchPath":"/de/crypto-casino/"},{"path":"/de/crypto-education/","matchPath":"/de/crypto-education/"},{"path":"/de/crypto-exchange-directory/","matchPath":"/de/crypto-exchange-directory/"},{"path":"/de/crypto-jobs/","matchPath":"/de/crypto-jobs/"},{"path":"/de/crypto-news/","matchPath":"/de/crypto-news/"},{"path":"/de/crypto-newsletter/","matchPath":"/de/crypto-newsletter/"},{"path":"/de/crypto-otc/","matchPath":"/de/crypto-otc/"},{"path":"/de/crypto-pos/","matchPath":"/de/crypto-pos/"},{"path":"/de/crypto-real-estate/","matchPath":"/de/crypto-real-estate/"},{"path":"/de/crypto-vc-funds/","matchPath":"/de/crypto-vc-funds/"},{"path":"/de/crypto-venture-network/","matchPath":"/de/crypto-venture-network/"},{"path":"/de/dapps/","matchPath":"/de/dapps/"},{"path":"/de/decentralized-exchanges/","matchPath":"/de/decentralized-exchanges/"},{"path":"/de/depin/","matchPath":"/de/depin/"},{"path":"/de/directory/","matchPath":"/de/directory/"},{"path":"/de/ethereum-casino/","matchPath":"/de/ethereum-casino/"},{"path":"/de/ethereum-etf/","matchPath":"/de/ethereum-etf/"},{"path":"/de/ethereum-exchange/","matchPath":"/de/ethereum-exchange/"},{"path":"/de/events/","matchPath":"/de/events/"},{"path":"/de/exchanges/","matchPath":"/de/exchanges/"},{"path":"/de/explorers/","matchPath":"/de/explorers/"},{"path":"/de/faucets/","matchPath":"/de/faucets/"},{"path":"/de/find-crypto-merchants/","matchPath":"/de/find-crypto-merchants/"},{"path":"/de/football/","matchPath":"/de/football/"},{"path":"/de/free/","matchPath":"/de/free/"},{"path":"/de/full-nodes/","matchPath":"/de/full-nodes/"},{"path":"/de/fx/","matchPath":"/de/fx/"},{"path":"/de/gambling-guides/","matchPath":"/de/gambling-guides/"},{"path":"/de/gambling/","matchPath":"/de/gambling/"},{"path":"/de/geo/","matchPath":"/de/geo/"},{"path":"/de/germany/","matchPath":"/de/germany/"},{"path":"/de/get-started/","matchPath":"/de/get-started/"},{"path":"/de/giftcard/","matchPath":"/de/giftcard/"},{"path":"/de/golf/","matchPath":"/de/golf/"},{"path":"/de/institutional/","matchPath":"/de/institutional/"},{"path":"/de/ira/","matchPath":"/de/ira/"},{"path":"/de/jobs/","matchPath":"/de/jobs/"},{"path":"/de/layer2-wrapped-bitcoin/","matchPath":"/de/layer2-wrapped-bitcoin/"},{"path":"/de/liquidity-providers/","matchPath":"/de/liquidity-providers/"},{"path":"/de/loan/","matchPath":"/de/loan/"},{"path":"/de/lottery/","matchPath":"/de/lottery/"},{"path":"/de/luxury/","matchPath":"/de/luxury/"},{"path":"/de/manage-account/","matchPath":"/de/manage-account/"},{"path":"/de/manage-email-subscription/","matchPath":"/de/manage-email-subscription/"},{"path":"/de/market-data/","matchPath":"/de/market-data/"},{"path":"/de/market-insights/","matchPath":"/de/market-insights/"},{"path":"/de/market-prices/","matchPath":"/de/market-prices/"},{"path":"/de/market-trends/","matchPath":"/de/market-trends/"},{"path":"/de/marketing-agencies/","matchPath":"/de/marketing-agencies/"},{"path":"/de/meme-casino/","matchPath":"/de/meme-casino/"},{"path":"/de/meme-coins/","matchPath":"/de/meme-coins/"},{"path":"/de/merchant-solutions/","matchPath":"/de/merchant-solutions/"},{"path":"/de/miner/","matchPath":"/de/miner/"},{"path":"/de/mining/","matchPath":"/de/mining/"},{"path":"/de/mobile/","matchPath":"/de/mobile/"},{"path":"/de/new-crypto-projects/","matchPath":"/de/new-crypto-projects/"},{"path":"/de/newsletters/","matchPath":"/de/newsletters/"},{"path":"/de/nft-marketplaces/","matchPath":"/de/nft-marketplaces/"},{"path":"/de/online-casino/","matchPath":"/de/online-casino/"},{"path":"/de/otc/","matchPath":"/de/otc/"},{"path":"/de/partners/","matchPath":"/de/partners/"},{"path":"/de/payments/","matchPath":"/de/payments/"},{"path":"/de/play-to-earn/","matchPath":"/de/play-to-earn/"},{"path":"/de/play/","matchPath":"/de/play/"},{"path":"/de/plinko/","matchPath":"/de/plinko/"},{"path":"/de/poker/","matchPath":"/de/poker/"},{"path":"/de/pos/","matchPath":"/de/pos/"},{"path":"/de/prediction-markets/","matchPath":"/de/prediction-markets/"},{"path":"/de/price-charts/","matchPath":"/de/price-charts/"},{"path":"/de/price-history/","matchPath":"/de/price-history/"},{"path":"/de/price-updates/","matchPath":"/de/price-updates/"},{"path":"/de/prop-trading/","matchPath":"/de/prop-trading/"},{"path":"/de/qr/","matchPath":"/de/qr/"},{"path":"/de/research/","matchPath":"/de/research/"},{"path":"/de/retirement-accounts/","matchPath":"/de/retirement-accounts/"},{"path":"/de/rewards/","matchPath":"/de/rewards/"},{"path":"/de/ripple-casino/","matchPath":"/de/ripple-casino/"},{"path":"/de/rwa/","matchPath":"/de/rwa/"},{"path":"/de/sell/","matchPath":"/de/sell/"},{"path":"/de/shopping/","matchPath":"/de/shopping/"},{"path":"/de/sitemap/","matchPath":"/de/sitemap/"},{"path":"/de/smart-contract-auditors/","matchPath":"/de/smart-contract-auditors/"},{"path":"/de/soccer/","matchPath":"/de/soccer/"},{"path":"/de/sportsbook/","matchPath":"/de/sportsbook/"},{"path":"/de/stablecoins/","matchPath":"/de/stablecoins/"},{"path":"/de/swaps/","matchPath":"/de/swaps/"},{"path":"/de/table-games/","matchPath":"/de/table-games/"},{"path":"/de/tax/","matchPath":"/de/tax/"},{"path":"/de/telegram-casino/","matchPath":"/de/telegram-casino/"},{"path":"/de/temporarily-offline/","matchPath":"/de/temporarily-offline/"},{"path":"/de/tennis/","matchPath":"/de/tennis/"},{"path":"/de/territory-not-supported/","matchPath":"/de/territory-not-supported/"},{"path":"/de/thank-you/","matchPath":"/de/thank-you/"},{"path":"/de/tipping-platforms/","matchPath":"/de/tipping-platforms/"},{"path":"/de/tools/","matchPath":"/de/tools/"},{"path":"/de/top-bitcoin-trading-strategies/","matchPath":"/de/top-bitcoin-trading-strategies/"},{"path":"/de/trading/","matchPath":"/de/trading/"},{"path":"/de/travel/","matchPath":"/de/travel/"},{"path":"/de/trike/","matchPath":"/de/trike/"},{"path":"/de/uk-warning/","matchPath":"/de/uk-warning/"},{"path":"/de/united-kingdom/","matchPath":"/de/united-kingdom/"},{"path":"/de/verse-referrals/","matchPath":"/de/verse-referrals/"},{"path":"/de/vpn/","matchPath":"/de/vpn/"},{"path":"/de/wallet-recovery/","matchPath":"/de/wallet-recovery/"},{"path":"/de/wallet-services/","matchPath":"/de/wallet-services/"},{"path":"/de/wallet/","matchPath":"/de/wallet/"},{"path":"/de/wealth-management/","matchPath":"/de/wealth-management/"},{"path":"/de/web3-agencies/","matchPath":"/de/web3-agencies/"},{"path":"/de/web3-casino/","matchPath":"/de/web3-casino/"},{"path":"/de/what-is-bitcoin-otc-trading/","matchPath":"/de/what-is-bitcoin-otc-trading/"},{"path":"/es/about-us/","matchPath":"/es/about-us/"},{"path":"/es/advertise/","matchPath":"/es/advertise/"},{"path":"/es/ai/","matchPath":"/es/ai/"},{"path":"/es/airdrops/","matchPath":"/es/airdrops/"},{"path":"/es/altcoin-casino/","matchPath":"/es/altcoin-casino/"},{"path":"/es/analysis-tools/","matchPath":"/es/analysis-tools/"},{"path":"/es/analytical-tools/","matchPath":"/es/analytical-tools/"},{"path":"/es/best-altcoins/","matchPath":"/es/best-altcoins/"},{"path":"/es/best-bitcoin-staking-platform/","matchPath":"/es/best-bitcoin-staking-platform/"},{"path":"/es/best-bitcoin-trading-bots/","matchPath":"/es/best-bitcoin-trading-bots/"},{"path":"/es/best-crypto-apps/","matchPath":"/es/best-crypto-apps/"},{"path":"/es/best-crypto-brokers/","matchPath":"/es/best-crypto-brokers/"},{"path":"/es/best-crypto-presales/","matchPath":"/es/best-crypto-presales/"},{"path":"/es/best-crypto-to-buy-now/","matchPath":"/es/best-crypto-to-buy-now/"},{"path":"/es/best-crypto-today/","matchPath":"/es/best-crypto-today/"},{"path":"/es/best-crypto-trading-apps/","matchPath":"/es/best-crypto-trading-apps/"},{"path":"/es/best-crypto-trading-platform-australia/","matchPath":"/es/best-crypto-trading-platform-australia/"},{"path":"/es/best-crypto-trading-platform/","matchPath":"/es/best-crypto-trading-platform/"},{"path":"/es/best-crypto-trading-signals/","matchPath":"/es/best-crypto-trading-signals/"},{"path":"/es/best-exchange-for-bitcoin/","matchPath":"/es/best-exchange-for-bitcoin/"},{"path":"/es/best-places-to-buy-crypto/","matchPath":"/es/best-places-to-buy-crypto/"},{"path":"/es/best-us-bitcoin-exchange/","matchPath":"/es/best-us-bitcoin-exchange/"},{"path":"/es/bitcoin-atm/","matchPath":"/es/bitcoin-atm/"},{"path":"/es/bitcoin-blackjack/","matchPath":"/es/bitcoin-blackjack/"},{"path":"/es/bitcoin-card/","matchPath":"/es/bitcoin-card/"},{"path":"/es/bitcoin-cash-projects/","matchPath":"/es/bitcoin-cash-projects/"},{"path":"/es/bitcoin-cash-register/","matchPath":"/es/bitcoin-cash-register/"},{"path":"/es/bitcoin-casino/","matchPath":"/es/bitcoin-casino/"},{"path":"/es/bitcoin-dice/","matchPath":"/es/bitcoin-dice/"},{"path":"/es/bitcoin-etf/","matchPath":"/es/bitcoin-etf/"},{"path":"/es/bitcoin-exchange-directory/","matchPath":"/es/bitcoin-exchange-directory/"},{"path":"/es/bitcoin-loan-directory/","matchPath":"/es/bitcoin-loan-directory/"},{"path":"/es/bitcoin-real-estate/","matchPath":"/es/bitcoin-real-estate/"},{"path":"/es/bitcoin-roulette/","matchPath":"/es/bitcoin-roulette/"},{"path":"/es/bitcoin-slots/","matchPath":"/es/bitcoin-slots/"},{"path":"/es/bitcoin-teller-machine/","matchPath":"/es/bitcoin-teller-machine/"},{"path":"/es/bitcoin-transaction-accelerator/","matchPath":"/es/bitcoin-transaction-accelerator/"},{"path":"/es/bitcoin-wallet-directory/","matchPath":"/es/bitcoin-wallet-directory/"},{"path":"/es/browsers/","matchPath":"/es/browsers/"},{"path":"/es/buy/","matchPath":"/es/buy/"},{"path":"/es/canada/","matchPath":"/es/canada/"},{"path":"/es/card-casino/","matchPath":"/es/card-casino/"},{"path":"/es/cards/","matchPath":"/es/cards/"},{"path":"/es/cashfusion-fund/","matchPath":"/es/cashfusion-fund/"},{"path":"/es/celebrity-tokens/","matchPath":"/es/celebrity-tokens/"},{"path":"/es/cert/","matchPath":"/es/cert/"},{"path":"/es/cfd/","matchPath":"/es/cfd/"},{"path":"/es/conferences/","matchPath":"/es/conferences/"},{"path":"/es/contact-us/","matchPath":"/es/contact-us/"},{"path":"/es/corporate-bitcoin-treasury/","matchPath":"/es/corporate-bitcoin-treasury/"},{"path":"/es/cross-chain-bridges/","matchPath":"/es/cross-chain-bridges/"},{"path":"/es/crypto-affiliate-programs/","matchPath":"/es/crypto-affiliate-programs/"},{"path":"/es/crypto-casino/","matchPath":"/es/crypto-casino/"},{"path":"/es/crypto-education/","matchPath":"/es/crypto-education/"},{"path":"/es/crypto-exchange-directory/","matchPath":"/es/crypto-exchange-directory/"},{"path":"/es/crypto-jobs/","matchPath":"/es/crypto-jobs/"},{"path":"/es/crypto-news/","matchPath":"/es/crypto-news/"},{"path":"/es/crypto-newsletter/","matchPath":"/es/crypto-newsletter/"},{"path":"/es/crypto-otc/","matchPath":"/es/crypto-otc/"},{"path":"/es/crypto-pos/","matchPath":"/es/crypto-pos/"},{"path":"/es/crypto-real-estate/","matchPath":"/es/crypto-real-estate/"},{"path":"/es/crypto-vc-funds/","matchPath":"/es/crypto-vc-funds/"},{"path":"/es/crypto-venture-network/","matchPath":"/es/crypto-venture-network/"},{"path":"/es/dapps/","matchPath":"/es/dapps/"},{"path":"/es/decentralized-exchanges/","matchPath":"/es/decentralized-exchanges/"},{"path":"/es/depin/","matchPath":"/es/depin/"},{"path":"/es/directory/","matchPath":"/es/directory/"},{"path":"/es/ethereum-casino/","matchPath":"/es/ethereum-casino/"},{"path":"/es/ethereum-etf/","matchPath":"/es/ethereum-etf/"},{"path":"/es/ethereum-exchange/","matchPath":"/es/ethereum-exchange/"},{"path":"/es/events/","matchPath":"/es/events/"},{"path":"/es/exchanges/","matchPath":"/es/exchanges/"},{"path":"/es/explorers/","matchPath":"/es/explorers/"},{"path":"/es/faucets/","matchPath":"/es/faucets/"},{"path":"/es/find-crypto-merchants/","matchPath":"/es/find-crypto-merchants/"},{"path":"/es/football/","matchPath":"/es/football/"},{"path":"/es/free/","matchPath":"/es/free/"},{"path":"/es/full-nodes/","matchPath":"/es/full-nodes/"},{"path":"/es/fx/","matchPath":"/es/fx/"},{"path":"/es/gambling-guides/","matchPath":"/es/gambling-guides/"},{"path":"/es/gambling/","matchPath":"/es/gambling/"},{"path":"/es/geo/","matchPath":"/es/geo/"},{"path":"/es/germany/","matchPath":"/es/germany/"},{"path":"/es/get-started/","matchPath":"/es/get-started/"},{"path":"/es/giftcard/","matchPath":"/es/giftcard/"},{"path":"/es/golf/","matchPath":"/es/golf/"},{"path":"/es/institutional/","matchPath":"/es/institutional/"},{"path":"/es/ira/","matchPath":"/es/ira/"},{"path":"/es/jobs/","matchPath":"/es/jobs/"},{"path":"/es/layer2-wrapped-bitcoin/","matchPath":"/es/layer2-wrapped-bitcoin/"},{"path":"/es/liquidity-providers/","matchPath":"/es/liquidity-providers/"},{"path":"/es/loan/","matchPath":"/es/loan/"},{"path":"/es/lottery/","matchPath":"/es/lottery/"},{"path":"/es/luxury/","matchPath":"/es/luxury/"},{"path":"/es/manage-account/","matchPath":"/es/manage-account/"},{"path":"/es/manage-email-subscription/","matchPath":"/es/manage-email-subscription/"},{"path":"/es/market-data/","matchPath":"/es/market-data/"},{"path":"/es/market-insights/","matchPath":"/es/market-insights/"},{"path":"/es/market-prices/","matchPath":"/es/market-prices/"},{"path":"/es/market-trends/","matchPath":"/es/market-trends/"},{"path":"/es/marketing-agencies/","matchPath":"/es/marketing-agencies/"},{"path":"/es/meme-casino/","matchPath":"/es/meme-casino/"},{"path":"/es/meme-coins/","matchPath":"/es/meme-coins/"},{"path":"/es/merchant-solutions/","matchPath":"/es/merchant-solutions/"},{"path":"/es/miner/","matchPath":"/es/miner/"},{"path":"/es/mining/","matchPath":"/es/mining/"},{"path":"/es/mobile/","matchPath":"/es/mobile/"},{"path":"/es/new-crypto-projects/","matchPath":"/es/new-crypto-projects/"},{"path":"/es/newsletters/","matchPath":"/es/newsletters/"},{"path":"/es/nft-marketplaces/","matchPath":"/es/nft-marketplaces/"},{"path":"/es/online-casino/","matchPath":"/es/online-casino/"},{"path":"/es/otc/","matchPath":"/es/otc/"},{"path":"/es/partners/","matchPath":"/es/partners/"},{"path":"/es/payments/","matchPath":"/es/payments/"},{"path":"/es/play-to-earn/","matchPath":"/es/play-to-earn/"},{"path":"/es/play/","matchPath":"/es/play/"},{"path":"/es/plinko/","matchPath":"/es/plinko/"},{"path":"/es/poker/","matchPath":"/es/poker/"},{"path":"/es/pos/","matchPath":"/es/pos/"},{"path":"/es/prediction-markets/","matchPath":"/es/prediction-markets/"},{"path":"/es/price-charts/","matchPath":"/es/price-charts/"},{"path":"/es/price-history/","matchPath":"/es/price-history/"},{"path":"/es/price-updates/","matchPath":"/es/price-updates/"},{"path":"/es/prop-trading/","matchPath":"/es/prop-trading/"},{"path":"/es/qr/","matchPath":"/es/qr/"},{"path":"/es/research/","matchPath":"/es/research/"},{"path":"/es/retirement-accounts/","matchPath":"/es/retirement-accounts/"},{"path":"/es/rewards/","matchPath":"/es/rewards/"},{"path":"/es/ripple-casino/","matchPath":"/es/ripple-casino/"},{"path":"/es/rwa/","matchPath":"/es/rwa/"},{"path":"/es/sell/","matchPath":"/es/sell/"},{"path":"/es/shopping/","matchPath":"/es/shopping/"},{"path":"/es/sitemap/","matchPath":"/es/sitemap/"},{"path":"/es/smart-contract-auditors/","matchPath":"/es/smart-contract-auditors/"},{"path":"/es/soccer/","matchPath":"/es/soccer/"},{"path":"/es/sportsbook/","matchPath":"/es/sportsbook/"},{"path":"/es/stablecoins/","matchPath":"/es/stablecoins/"},{"path":"/es/swaps/","matchPath":"/es/swaps/"},{"path":"/es/table-games/","matchPath":"/es/table-games/"},{"path":"/es/tax/","matchPath":"/es/tax/"},{"path":"/es/telegram-casino/","matchPath":"/es/telegram-casino/"},{"path":"/es/temporarily-offline/","matchPath":"/es/temporarily-offline/"},{"path":"/es/tennis/","matchPath":"/es/tennis/"},{"path":"/es/territory-not-supported/","matchPath":"/es/territory-not-supported/"},{"path":"/es/thank-you/","matchPath":"/es/thank-you/"},{"path":"/es/tipping-platforms/","matchPath":"/es/tipping-platforms/"},{"path":"/es/tools/","matchPath":"/es/tools/"},{"path":"/es/top-bitcoin-trading-strategies/","matchPath":"/es/top-bitcoin-trading-strategies/"},{"path":"/es/trading/","matchPath":"/es/trading/"},{"path":"/es/travel/","matchPath":"/es/travel/"},{"path":"/es/trike/","matchPath":"/es/trike/"},{"path":"/es/uk-warning/","matchPath":"/es/uk-warning/"},{"path":"/es/united-kingdom/","matchPath":"/es/united-kingdom/"},{"path":"/es/verse-referrals/","matchPath":"/es/verse-referrals/"},{"path":"/es/vpn/","matchPath":"/es/vpn/"},{"path":"/es/wallet-recovery/","matchPath":"/es/wallet-recovery/"},{"path":"/es/wallet-services/","matchPath":"/es/wallet-services/"},{"path":"/es/wallet/","matchPath":"/es/wallet/"},{"path":"/es/wealth-management/","matchPath":"/es/wealth-management/"},{"path":"/es/web3-agencies/","matchPath":"/es/web3-agencies/"},{"path":"/es/web3-casino/","matchPath":"/es/web3-casino/"},{"path":"/es/what-is-bitcoin-otc-trading/","matchPath":"/es/what-is-bitcoin-otc-trading/"},{"path":"/fr/about-us/","matchPath":"/fr/about-us/"},{"path":"/fr/advertise/","matchPath":"/fr/advertise/"},{"path":"/fr/ai/","matchPath":"/fr/ai/"},{"path":"/fr/airdrops/","matchPath":"/fr/airdrops/"},{"path":"/fr/altcoin-casino/","matchPath":"/fr/altcoin-casino/"},{"path":"/fr/analysis-tools/","matchPath":"/fr/analysis-tools/"},{"path":"/fr/analytical-tools/","matchPath":"/fr/analytical-tools/"},{"path":"/fr/best-altcoins/","matchPath":"/fr/best-altcoins/"},{"path":"/fr/best-bitcoin-staking-platform/","matchPath":"/fr/best-bitcoin-staking-platform/"},{"path":"/fr/best-bitcoin-trading-bots/","matchPath":"/fr/best-bitcoin-trading-bots/"},{"path":"/fr/best-crypto-apps/","matchPath":"/fr/best-crypto-apps/"},{"path":"/fr/best-crypto-brokers/","matchPath":"/fr/best-crypto-brokers/"},{"path":"/fr/best-crypto-presales/","matchPath":"/fr/best-crypto-presales/"},{"path":"/fr/best-crypto-to-buy-now/","matchPath":"/fr/best-crypto-to-buy-now/"},{"path":"/fr/best-crypto-today/","matchPath":"/fr/best-crypto-today/"},{"path":"/fr/best-crypto-trading-apps/","matchPath":"/fr/best-crypto-trading-apps/"},{"path":"/fr/best-crypto-trading-platform-australia/","matchPath":"/fr/best-crypto-trading-platform-australia/"},{"path":"/fr/best-crypto-trading-platform/","matchPath":"/fr/best-crypto-trading-platform/"},{"path":"/fr/best-crypto-trading-signals/","matchPath":"/fr/best-crypto-trading-signals/"},{"path":"/fr/best-exchange-for-bitcoin/","matchPath":"/fr/best-exchange-for-bitcoin/"},{"path":"/fr/best-places-to-buy-crypto/","matchPath":"/fr/best-places-to-buy-crypto/"},{"path":"/fr/best-us-bitcoin-exchange/","matchPath":"/fr/best-us-bitcoin-exchange/"},{"path":"/fr/bitcoin-atm/","matchPath":"/fr/bitcoin-atm/"},{"path":"/fr/bitcoin-blackjack/","matchPath":"/fr/bitcoin-blackjack/"},{"path":"/fr/bitcoin-card/","matchPath":"/fr/bitcoin-card/"},{"path":"/fr/bitcoin-cash-projects/","matchPath":"/fr/bitcoin-cash-projects/"},{"path":"/fr/bitcoin-cash-register/","matchPath":"/fr/bitcoin-cash-register/"},{"path":"/fr/bitcoin-casino/","matchPath":"/fr/bitcoin-casino/"},{"path":"/fr/bitcoin-dice/","matchPath":"/fr/bitcoin-dice/"},{"path":"/fr/bitcoin-etf/","matchPath":"/fr/bitcoin-etf/"},{"path":"/fr/bitcoin-exchange-directory/","matchPath":"/fr/bitcoin-exchange-directory/"},{"path":"/fr/bitcoin-loan-directory/","matchPath":"/fr/bitcoin-loan-directory/"},{"path":"/fr/bitcoin-real-estate/","matchPath":"/fr/bitcoin-real-estate/"},{"path":"/fr/bitcoin-roulette/","matchPath":"/fr/bitcoin-roulette/"},{"path":"/fr/bitcoin-slots/","matchPath":"/fr/bitcoin-slots/"},{"path":"/fr/bitcoin-teller-machine/","matchPath":"/fr/bitcoin-teller-machine/"},{"path":"/fr/bitcoin-transaction-accelerator/","matchPath":"/fr/bitcoin-transaction-accelerator/"},{"path":"/fr/bitcoin-wallet-directory/","matchPath":"/fr/bitcoin-wallet-directory/"},{"path":"/fr/browsers/","matchPath":"/fr/browsers/"},{"path":"/fr/buy/","matchPath":"/fr/buy/"},{"path":"/fr/canada/","matchPath":"/fr/canada/"},{"path":"/fr/card-casino/","matchPath":"/fr/card-casino/"},{"path":"/fr/cards/","matchPath":"/fr/cards/"},{"path":"/fr/cashfusion-fund/","matchPath":"/fr/cashfusion-fund/"},{"path":"/fr/celebrity-tokens/","matchPath":"/fr/celebrity-tokens/"},{"path":"/fr/cert/","matchPath":"/fr/cert/"},{"path":"/fr/cfd/","matchPath":"/fr/cfd/"},{"path":"/fr/conferences/","matchPath":"/fr/conferences/"},{"path":"/fr/contact-us/","matchPath":"/fr/contact-us/"},{"path":"/fr/corporate-bitcoin-treasury/","matchPath":"/fr/corporate-bitcoin-treasury/"},{"path":"/fr/cross-chain-bridges/","matchPath":"/fr/cross-chain-bridges/"},{"path":"/fr/crypto-affiliate-programs/","matchPath":"/fr/crypto-affiliate-programs/"},{"path":"/fr/crypto-casino/","matchPath":"/fr/crypto-casino/"},{"path":"/fr/crypto-education/","matchPath":"/fr/crypto-education/"},{"path":"/fr/crypto-exchange-directory/","matchPath":"/fr/crypto-exchange-directory/"},{"path":"/fr/crypto-jobs/","matchPath":"/fr/crypto-jobs/"},{"path":"/fr/crypto-news/","matchPath":"/fr/crypto-news/"},{"path":"/fr/crypto-newsletter/","matchPath":"/fr/crypto-newsletter/"},{"path":"/fr/crypto-otc/","matchPath":"/fr/crypto-otc/"},{"path":"/fr/crypto-pos/","matchPath":"/fr/crypto-pos/"},{"path":"/fr/crypto-real-estate/","matchPath":"/fr/crypto-real-estate/"},{"path":"/fr/crypto-vc-funds/","matchPath":"/fr/crypto-vc-funds/"},{"path":"/fr/crypto-venture-network/","matchPath":"/fr/crypto-venture-network/"},{"path":"/fr/dapps/","matchPath":"/fr/dapps/"},{"path":"/fr/decentralized-exchanges/","matchPath":"/fr/decentralized-exchanges/"},{"path":"/fr/depin/","matchPath":"/fr/depin/"},{"path":"/fr/directory/","matchPath":"/fr/directory/"},{"path":"/fr/ethereum-casino/","matchPath":"/fr/ethereum-casino/"},{"path":"/fr/ethereum-etf/","matchPath":"/fr/ethereum-etf/"},{"path":"/fr/ethereum-exchange/","matchPath":"/fr/ethereum-exchange/"},{"path":"/fr/events/","matchPath":"/fr/events/"},{"path":"/fr/exchanges/","matchPath":"/fr/exchanges/"},{"path":"/fr/explorers/","matchPath":"/fr/explorers/"},{"path":"/fr/faucets/","matchPath":"/fr/faucets/"},{"path":"/fr/find-crypto-merchants/","matchPath":"/fr/find-crypto-merchants/"},{"path":"/fr/football/","matchPath":"/fr/football/"},{"path":"/fr/free/","matchPath":"/fr/free/"},{"path":"/fr/full-nodes/","matchPath":"/fr/full-nodes/"},{"path":"/fr/fx/","matchPath":"/fr/fx/"},{"path":"/fr/gambling-guides/","matchPath":"/fr/gambling-guides/"},{"path":"/fr/gambling/","matchPath":"/fr/gambling/"},{"path":"/fr/geo/","matchPath":"/fr/geo/"},{"path":"/fr/germany/","matchPath":"/fr/germany/"},{"path":"/fr/get-started/","matchPath":"/fr/get-started/"},{"path":"/fr/giftcard/","matchPath":"/fr/giftcard/"},{"path":"/fr/golf/","matchPath":"/fr/golf/"},{"path":"/fr/institutional/","matchPath":"/fr/institutional/"},{"path":"/fr/ira/","matchPath":"/fr/ira/"},{"path":"/fr/jobs/","matchPath":"/fr/jobs/"},{"path":"/fr/layer2-wrapped-bitcoin/","matchPath":"/fr/layer2-wrapped-bitcoin/"},{"path":"/fr/liquidity-providers/","matchPath":"/fr/liquidity-providers/"},{"path":"/fr/loan/","matchPath":"/fr/loan/"},{"path":"/fr/lottery/","matchPath":"/fr/lottery/"},{"path":"/fr/luxury/","matchPath":"/fr/luxury/"},{"path":"/fr/manage-account/","matchPath":"/fr/manage-account/"},{"path":"/fr/manage-email-subscription/","matchPath":"/fr/manage-email-subscription/"},{"path":"/fr/market-data/","matchPath":"/fr/market-data/"},{"path":"/fr/market-insights/","matchPath":"/fr/market-insights/"},{"path":"/fr/market-prices/","matchPath":"/fr/market-prices/"},{"path":"/fr/market-trends/","matchPath":"/fr/market-trends/"},{"path":"/fr/marketing-agencies/","matchPath":"/fr/marketing-agencies/"},{"path":"/fr/meme-casino/","matchPath":"/fr/meme-casino/"},{"path":"/fr/meme-coins/","matchPath":"/fr/meme-coins/"},{"path":"/fr/merchant-solutions/","matchPath":"/fr/merchant-solutions/"},{"path":"/fr/miner/","matchPath":"/fr/miner/"},{"path":"/fr/mining/","matchPath":"/fr/mining/"},{"path":"/fr/mobile/","matchPath":"/fr/mobile/"},{"path":"/fr/new-crypto-projects/","matchPath":"/fr/new-crypto-projects/"},{"path":"/fr/newsletters/","matchPath":"/fr/newsletters/"},{"path":"/fr/nft-marketplaces/","matchPath":"/fr/nft-marketplaces/"},{"path":"/fr/online-casino/","matchPath":"/fr/online-casino/"},{"path":"/fr/otc/","matchPath":"/fr/otc/"},{"path":"/fr/partners/","matchPath":"/fr/partners/"},{"path":"/fr/payments/","matchPath":"/fr/payments/"},{"path":"/fr/play-to-earn/","matchPath":"/fr/play-to-earn/"},{"path":"/fr/play/","matchPath":"/fr/play/"},{"path":"/fr/plinko/","matchPath":"/fr/plinko/"},{"path":"/fr/poker/","matchPath":"/fr/poker/"},{"path":"/fr/pos/","matchPath":"/fr/pos/"},{"path":"/fr/prediction-markets/","matchPath":"/fr/prediction-markets/"},{"path":"/fr/price-charts/","matchPath":"/fr/price-charts/"},{"path":"/fr/price-history/","matchPath":"/fr/price-history/"},{"path":"/fr/price-updates/","matchPath":"/fr/price-updates/"},{"path":"/fr/prop-trading/","matchPath":"/fr/prop-trading/"},{"path":"/fr/qr/","matchPath":"/fr/qr/"},{"path":"/fr/research/","matchPath":"/fr/research/"},{"path":"/fr/retirement-accounts/","matchPath":"/fr/retirement-accounts/"},{"path":"/fr/rewards/","matchPath":"/fr/rewards/"},{"path":"/fr/ripple-casino/","matchPath":"/fr/ripple-casino/"},{"path":"/fr/rwa/","matchPath":"/fr/rwa/"},{"path":"/fr/sell/","matchPath":"/fr/sell/"},{"path":"/fr/shopping/","matchPath":"/fr/shopping/"},{"path":"/fr/sitemap/","matchPath":"/fr/sitemap/"},{"path":"/fr/smart-contract-auditors/","matchPath":"/fr/smart-contract-auditors/"},{"path":"/fr/soccer/","matchPath":"/fr/soccer/"},{"path":"/fr/sportsbook/","matchPath":"/fr/sportsbook/"},{"path":"/fr/stablecoins/","matchPath":"/fr/stablecoins/"},{"path":"/fr/swaps/","matchPath":"/fr/swaps/"},{"path":"/fr/table-games/","matchPath":"/fr/table-games/"},{"path":"/fr/tax/","matchPath":"/fr/tax/"},{"path":"/fr/telegram-casino/","matchPath":"/fr/telegram-casino/"},{"path":"/fr/temporarily-offline/","matchPath":"/fr/temporarily-offline/"},{"path":"/fr/tennis/","matchPath":"/fr/tennis/"},{"path":"/fr/territory-not-supported/","matchPath":"/fr/territory-not-supported/"},{"path":"/fr/thank-you/","matchPath":"/fr/thank-you/"},{"path":"/fr/tipping-platforms/","matchPath":"/fr/tipping-platforms/"},{"path":"/fr/tools/","matchPath":"/fr/tools/"},{"path":"/fr/top-bitcoin-trading-strategies/","matchPath":"/fr/top-bitcoin-trading-strategies/"},{"path":"/fr/trading/","matchPath":"/fr/trading/"},{"path":"/fr/travel/","matchPath":"/fr/travel/"},{"path":"/fr/trike/","matchPath":"/fr/trike/"},{"path":"/fr/uk-warning/","matchPath":"/fr/uk-warning/"},{"path":"/fr/united-kingdom/","matchPath":"/fr/united-kingdom/"},{"path":"/fr/verse-referrals/","matchPath":"/fr/verse-referrals/"},{"path":"/fr/vpn/","matchPath":"/fr/vpn/"},{"path":"/fr/wallet-recovery/","matchPath":"/fr/wallet-recovery/"},{"path":"/fr/wallet-services/","matchPath":"/fr/wallet-services/"},{"path":"/fr/wallet/","matchPath":"/fr/wallet/"},{"path":"/fr/wealth-management/","matchPath":"/fr/wealth-management/"},{"path":"/fr/web3-agencies/","matchPath":"/fr/web3-agencies/"},{"path":"/fr/web3-casino/","matchPath":"/fr/web3-casino/"},{"path":"/fr/what-is-bitcoin-otc-trading/","matchPath":"/fr/what-is-bitcoin-otc-trading/"},{"path":"/it/about-us/","matchPath":"/it/about-us/"},{"path":"/it/advertise/","matchPath":"/it/advertise/"},{"path":"/it/ai/","matchPath":"/it/ai/"},{"path":"/it/airdrops/","matchPath":"/it/airdrops/"},{"path":"/it/altcoin-casino/","matchPath":"/it/altcoin-casino/"},{"path":"/it/analysis-tools/","matchPath":"/it/analysis-tools/"},{"path":"/it/analytical-tools/","matchPath":"/it/analytical-tools/"},{"path":"/it/best-altcoins/","matchPath":"/it/best-altcoins/"},{"path":"/it/best-bitcoin-staking-platform/","matchPath":"/it/best-bitcoin-staking-platform/"},{"path":"/it/best-bitcoin-trading-bots/","matchPath":"/it/best-bitcoin-trading-bots/"},{"path":"/it/best-crypto-apps/","matchPath":"/it/best-crypto-apps/"},{"path":"/it/best-crypto-brokers/","matchPath":"/it/best-crypto-brokers/"},{"path":"/it/best-crypto-presales/","matchPath":"/it/best-crypto-presales/"},{"path":"/it/best-crypto-to-buy-now/","matchPath":"/it/best-crypto-to-buy-now/"},{"path":"/it/best-crypto-today/","matchPath":"/it/best-crypto-today/"},{"path":"/it/best-crypto-trading-apps/","matchPath":"/it/best-crypto-trading-apps/"},{"path":"/it/best-crypto-trading-platform-australia/","matchPath":"/it/best-crypto-trading-platform-australia/"},{"path":"/it/best-crypto-trading-platform/","matchPath":"/it/best-crypto-trading-platform/"},{"path":"/it/best-crypto-trading-signals/","matchPath":"/it/best-crypto-trading-signals/"},{"path":"/it/best-exchange-for-bitcoin/","matchPath":"/it/best-exchange-for-bitcoin/"},{"path":"/it/best-places-to-buy-crypto/","matchPath":"/it/best-places-to-buy-crypto/"},{"path":"/it/best-us-bitcoin-exchange/","matchPath":"/it/best-us-bitcoin-exchange/"},{"path":"/it/bitcoin-atm/","matchPath":"/it/bitcoin-atm/"},{"path":"/it/bitcoin-blackjack/","matchPath":"/it/bitcoin-blackjack/"},{"path":"/it/bitcoin-card/","matchPath":"/it/bitcoin-card/"},{"path":"/it/bitcoin-cash-projects/","matchPath":"/it/bitcoin-cash-projects/"},{"path":"/it/bitcoin-cash-register/","matchPath":"/it/bitcoin-cash-register/"},{"path":"/it/bitcoin-casino/","matchPath":"/it/bitcoin-casino/"},{"path":"/it/bitcoin-dice/","matchPath":"/it/bitcoin-dice/"},{"path":"/it/bitcoin-etf/","matchPath":"/it/bitcoin-etf/"},{"path":"/it/bitcoin-exchange-directory/","matchPath":"/it/bitcoin-exchange-directory/"},{"path":"/it/bitcoin-loan-directory/","matchPath":"/it/bitcoin-loan-directory/"},{"path":"/it/bitcoin-real-estate/","matchPath":"/it/bitcoin-real-estate/"},{"path":"/it/bitcoin-roulette/","matchPath":"/it/bitcoin-roulette/"},{"path":"/it/bitcoin-slots/","matchPath":"/it/bitcoin-slots/"},{"path":"/it/bitcoin-teller-machine/","matchPath":"/it/bitcoin-teller-machine/"},{"path":"/it/bitcoin-transaction-accelerator/","matchPath":"/it/bitcoin-transaction-accelerator/"},{"path":"/it/bitcoin-wallet-directory/","matchPath":"/it/bitcoin-wallet-directory/"},{"path":"/it/browsers/","matchPath":"/it/browsers/"},{"path":"/it/buy/","matchPath":"/it/buy/"},{"path":"/it/canada/","matchPath":"/it/canada/"},{"path":"/it/card-casino/","matchPath":"/it/card-casino/"},{"path":"/it/cards/","matchPath":"/it/cards/"},{"path":"/it/cashfusion-fund/","matchPath":"/it/cashfusion-fund/"},{"path":"/it/celebrity-tokens/","matchPath":"/it/celebrity-tokens/"},{"path":"/it/cert/","matchPath":"/it/cert/"},{"path":"/it/cfd/","matchPath":"/it/cfd/"},{"path":"/it/conferences/","matchPath":"/it/conferences/"},{"path":"/it/contact-us/","matchPath":"/it/contact-us/"},{"path":"/it/corporate-bitcoin-treasury/","matchPath":"/it/corporate-bitcoin-treasury/"},{"path":"/it/cross-chain-bridges/","matchPath":"/it/cross-chain-bridges/"},{"path":"/it/crypto-affiliate-programs/","matchPath":"/it/crypto-affiliate-programs/"},{"path":"/it/crypto-casino/","matchPath":"/it/crypto-casino/"},{"path":"/it/crypto-education/","matchPath":"/it/crypto-education/"},{"path":"/it/crypto-exchange-directory/","matchPath":"/it/crypto-exchange-directory/"},{"path":"/it/crypto-jobs/","matchPath":"/it/crypto-jobs/"},{"path":"/it/crypto-news/","matchPath":"/it/crypto-news/"},{"path":"/it/crypto-newsletter/","matchPath":"/it/crypto-newsletter/"},{"path":"/it/crypto-otc/","matchPath":"/it/crypto-otc/"},{"path":"/it/crypto-pos/","matchPath":"/it/crypto-pos/"},{"path":"/it/crypto-real-estate/","matchPath":"/it/crypto-real-estate/"},{"path":"/it/crypto-vc-funds/","matchPath":"/it/crypto-vc-funds/"},{"path":"/it/crypto-venture-network/","matchPath":"/it/crypto-venture-network/"},{"path":"/it/dapps/","matchPath":"/it/dapps/"},{"path":"/it/decentralized-exchanges/","matchPath":"/it/decentralized-exchanges/"},{"path":"/it/depin/","matchPath":"/it/depin/"},{"path":"/it/directory/","matchPath":"/it/directory/"},{"path":"/it/ethereum-casino/","matchPath":"/it/ethereum-casino/"},{"path":"/it/ethereum-etf/","matchPath":"/it/ethereum-etf/"},{"path":"/it/ethereum-exchange/","matchPath":"/it/ethereum-exchange/"},{"path":"/it/events/","matchPath":"/it/events/"},{"path":"/it/exchanges/","matchPath":"/it/exchanges/"},{"path":"/it/explorers/","matchPath":"/it/explorers/"},{"path":"/it/faucets/","matchPath":"/it/faucets/"},{"path":"/it/find-crypto-merchants/","matchPath":"/it/find-crypto-merchants/"},{"path":"/it/football/","matchPath":"/it/football/"},{"path":"/it/free/","matchPath":"/it/free/"},{"path":"/it/full-nodes/","matchPath":"/it/full-nodes/"},{"path":"/it/fx/","matchPath":"/it/fx/"},{"path":"/it/gambling-guides/","matchPath":"/it/gambling-guides/"},{"path":"/it/gambling/","matchPath":"/it/gambling/"},{"path":"/it/geo/","matchPath":"/it/geo/"},{"path":"/it/germany/","matchPath":"/it/germany/"},{"path":"/it/get-started/","matchPath":"/it/get-started/"},{"path":"/it/giftcard/","matchPath":"/it/giftcard/"},{"path":"/it/golf/","matchPath":"/it/golf/"},{"path":"/it/institutional/","matchPath":"/it/institutional/"},{"path":"/it/ira/","matchPath":"/it/ira/"},{"path":"/it/jobs/","matchPath":"/it/jobs/"},{"path":"/it/layer2-wrapped-bitcoin/","matchPath":"/it/layer2-wrapped-bitcoin/"},{"path":"/it/liquidity-providers/","matchPath":"/it/liquidity-providers/"},{"path":"/it/loan/","matchPath":"/it/loan/"},{"path":"/it/lottery/","matchPath":"/it/lottery/"},{"path":"/it/luxury/","matchPath":"/it/luxury/"},{"path":"/it/manage-account/","matchPath":"/it/manage-account/"},{"path":"/it/manage-email-subscription/","matchPath":"/it/manage-email-subscription/"},{"path":"/it/market-data/","matchPath":"/it/market-data/"},{"path":"/it/market-insights/","matchPath":"/it/market-insights/"},{"path":"/it/market-prices/","matchPath":"/it/market-prices/"},{"path":"/it/market-trends/","matchPath":"/it/market-trends/"},{"path":"/it/marketing-agencies/","matchPath":"/it/marketing-agencies/"},{"path":"/it/meme-casino/","matchPath":"/it/meme-casino/"},{"path":"/it/meme-coins/","matchPath":"/it/meme-coins/"},{"path":"/it/merchant-solutions/","matchPath":"/it/merchant-solutions/"},{"path":"/it/miner/","matchPath":"/it/miner/"},{"path":"/it/mining/","matchPath":"/it/mining/"},{"path":"/it/mobile/","matchPath":"/it/mobile/"},{"path":"/it/new-crypto-projects/","matchPath":"/it/new-crypto-projects/"},{"path":"/it/newsletters/","matchPath":"/it/newsletters/"},{"path":"/it/nft-marketplaces/","matchPath":"/it/nft-marketplaces/"},{"path":"/it/online-casino/","matchPath":"/it/online-casino/"},{"path":"/it/otc/","matchPath":"/it/otc/"},{"path":"/it/partners/","matchPath":"/it/partners/"},{"path":"/it/payments/","matchPath":"/it/payments/"},{"path":"/it/play-to-earn/","matchPath":"/it/play-to-earn/"},{"path":"/it/play/","matchPath":"/it/play/"},{"path":"/it/plinko/","matchPath":"/it/plinko/"},{"path":"/it/poker/","matchPath":"/it/poker/"},{"path":"/it/pos/","matchPath":"/it/pos/"},{"path":"/it/prediction-markets/","matchPath":"/it/prediction-markets/"},{"path":"/it/price-charts/","matchPath":"/it/price-charts/"},{"path":"/it/price-history/","matchPath":"/it/price-history/"},{"path":"/it/price-updates/","matchPath":"/it/price-updates/"},{"path":"/it/prop-trading/","matchPath":"/it/prop-trading/"},{"path":"/it/qr/","matchPath":"/it/qr/"},{"path":"/it/research/","matchPath":"/it/research/"},{"path":"/it/retirement-accounts/","matchPath":"/it/retirement-accounts/"},{"path":"/it/rewards/","matchPath":"/it/rewards/"},{"path":"/it/ripple-casino/","matchPath":"/it/ripple-casino/"},{"path":"/it/rwa/","matchPath":"/it/rwa/"},{"path":"/it/sell/","matchPath":"/it/sell/"},{"path":"/it/shopping/","matchPath":"/it/shopping/"},{"path":"/it/sitemap/","matchPath":"/it/sitemap/"},{"path":"/it/smart-contract-auditors/","matchPath":"/it/smart-contract-auditors/"},{"path":"/it/soccer/","matchPath":"/it/soccer/"},{"path":"/it/sportsbook/","matchPath":"/it/sportsbook/"},{"path":"/it/stablecoins/","matchPath":"/it/stablecoins/"},{"path":"/it/swaps/","matchPath":"/it/swaps/"},{"path":"/it/table-games/","matchPath":"/it/table-games/"},{"path":"/it/tax/","matchPath":"/it/tax/"},{"path":"/it/telegram-casino/","matchPath":"/it/telegram-casino/"},{"path":"/it/temporarily-offline/","matchPath":"/it/temporarily-offline/"},{"path":"/it/tennis/","matchPath":"/it/tennis/"},{"path":"/it/territory-not-supported/","matchPath":"/it/territory-not-supported/"},{"path":"/it/thank-you/","matchPath":"/it/thank-you/"},{"path":"/it/tipping-platforms/","matchPath":"/it/tipping-platforms/"},{"path":"/it/tools/","matchPath":"/it/tools/"},{"path":"/it/top-bitcoin-trading-strategies/","matchPath":"/it/top-bitcoin-trading-strategies/"},{"path":"/it/trading/","matchPath":"/it/trading/"},{"path":"/it/travel/","matchPath":"/it/travel/"},{"path":"/it/trike/","matchPath":"/it/trike/"},{"path":"/it/uk-warning/","matchPath":"/it/uk-warning/"},{"path":"/it/united-kingdom/","matchPath":"/it/united-kingdom/"},{"path":"/it/verse-referrals/","matchPath":"/it/verse-referrals/"},{"path":"/it/vpn/","matchPath":"/it/vpn/"},{"path":"/it/wallet-recovery/","matchPath":"/it/wallet-recovery/"},{"path":"/it/wallet-services/","matchPath":"/it/wallet-services/"},{"path":"/it/wallet/","matchPath":"/it/wallet/"},{"path":"/it/wealth-management/","matchPath":"/it/wealth-management/"},{"path":"/it/web3-agencies/","matchPath":"/it/web3-agencies/"},{"path":"/it/web3-casino/","matchPath":"/it/web3-casino/"},{"path":"/it/what-is-bitcoin-otc-trading/","matchPath":"/it/what-is-bitcoin-otc-trading/"},{"path":"/ru/about-us/","matchPath":"/ru/about-us/"},{"path":"/ru/advertise/","matchPath":"/ru/advertise/"},{"path":"/ru/ai/","matchPath":"/ru/ai/"},{"path":"/ru/airdrops/","matchPath":"/ru/airdrops/"},{"path":"/ru/altcoin-casino/","matchPath":"/ru/altcoin-casino/"},{"path":"/ru/analysis-tools/","matchPath":"/ru/analysis-tools/"},{"path":"/ru/analytical-tools/","matchPath":"/ru/analytical-tools/"},{"path":"/ru/best-altcoins/","matchPath":"/ru/best-altcoins/"},{"path":"/ru/best-bitcoin-staking-platform/","matchPath":"/ru/best-bitcoin-staking-platform/"},{"path":"/ru/best-bitcoin-trading-bots/","matchPath":"/ru/best-bitcoin-trading-bots/"},{"path":"/ru/best-crypto-apps/","matchPath":"/ru/best-crypto-apps/"},{"path":"/ru/best-crypto-brokers/","matchPath":"/ru/best-crypto-brokers/"},{"path":"/ru/best-crypto-presales/","matchPath":"/ru/best-crypto-presales/"},{"path":"/ru/best-crypto-to-buy-now/","matchPath":"/ru/best-crypto-to-buy-now/"},{"path":"/ru/best-crypto-today/","matchPath":"/ru/best-crypto-today/"},{"path":"/ru/best-crypto-trading-apps/","matchPath":"/ru/best-crypto-trading-apps/"},{"path":"/ru/best-crypto-trading-platform-australia/","matchPath":"/ru/best-crypto-trading-platform-australia/"},{"path":"/ru/best-crypto-trading-platform/","matchPath":"/ru/best-crypto-trading-platform/"},{"path":"/ru/best-crypto-trading-signals/","matchPath":"/ru/best-crypto-trading-signals/"},{"path":"/ru/best-exchange-for-bitcoin/","matchPath":"/ru/best-exchange-for-bitcoin/"},{"path":"/ru/best-places-to-buy-crypto/","matchPath":"/ru/best-places-to-buy-crypto/"},{"path":"/ru/best-us-bitcoin-exchange/","matchPath":"/ru/best-us-bitcoin-exchange/"},{"path":"/ru/bitcoin-atm/","matchPath":"/ru/bitcoin-atm/"},{"path":"/ru/bitcoin-blackjack/","matchPath":"/ru/bitcoin-blackjack/"},{"path":"/ru/bitcoin-card/","matchPath":"/ru/bitcoin-card/"},{"path":"/ru/bitcoin-cash-projects/","matchPath":"/ru/bitcoin-cash-projects/"},{"path":"/ru/bitcoin-cash-register/","matchPath":"/ru/bitcoin-cash-register/"},{"path":"/ru/bitcoin-casino/","matchPath":"/ru/bitcoin-casino/"},{"path":"/ru/bitcoin-dice/","matchPath":"/ru/bitcoin-dice/"},{"path":"/ru/bitcoin-etf/","matchPath":"/ru/bitcoin-etf/"},{"path":"/ru/bitcoin-exchange-directory/","matchPath":"/ru/bitcoin-exchange-directory/"},{"path":"/ru/bitcoin-loan-directory/","matchPath":"/ru/bitcoin-loan-directory/"},{"path":"/ru/bitcoin-real-estate/","matchPath":"/ru/bitcoin-real-estate/"},{"path":"/ru/bitcoin-roulette/","matchPath":"/ru/bitcoin-roulette/"},{"path":"/ru/bitcoin-slots/","matchPath":"/ru/bitcoin-slots/"},{"path":"/ru/bitcoin-teller-machine/","matchPath":"/ru/bitcoin-teller-machine/"},{"path":"/ru/bitcoin-transaction-accelerator/","matchPath":"/ru/bitcoin-transaction-accelerator/"},{"path":"/ru/bitcoin-wallet-directory/","matchPath":"/ru/bitcoin-wallet-directory/"},{"path":"/ru/browsers/","matchPath":"/ru/browsers/"},{"path":"/ru/buy/","matchPath":"/ru/buy/"},{"path":"/ru/canada/","matchPath":"/ru/canada/"},{"path":"/ru/card-casino/","matchPath":"/ru/card-casino/"},{"path":"/ru/cards/","matchPath":"/ru/cards/"},{"path":"/ru/cashfusion-fund/","matchPath":"/ru/cashfusion-fund/"},{"path":"/ru/celebrity-tokens/","matchPath":"/ru/celebrity-tokens/"},{"path":"/ru/cert/","matchPath":"/ru/cert/"},{"path":"/ru/cfd/","matchPath":"/ru/cfd/"},{"path":"/ru/conferences/","matchPath":"/ru/conferences/"},{"path":"/ru/contact-us/","matchPath":"/ru/contact-us/"},{"path":"/ru/corporate-bitcoin-treasury/","matchPath":"/ru/corporate-bitcoin-treasury/"},{"path":"/ru/cross-chain-bridges/","matchPath":"/ru/cross-chain-bridges/"},{"path":"/ru/crypto-affiliate-programs/","matchPath":"/ru/crypto-affiliate-programs/"},{"path":"/ru/crypto-casino/","matchPath":"/ru/crypto-casino/"},{"path":"/ru/crypto-education/","matchPath":"/ru/crypto-education/"},{"path":"/ru/crypto-exchange-directory/","matchPath":"/ru/crypto-exchange-directory/"},{"path":"/ru/crypto-jobs/","matchPath":"/ru/crypto-jobs/"},{"path":"/ru/crypto-news/","matchPath":"/ru/crypto-news/"},{"path":"/ru/crypto-newsletter/","matchPath":"/ru/crypto-newsletter/"},{"path":"/ru/crypto-otc/","matchPath":"/ru/crypto-otc/"},{"path":"/ru/crypto-pos/","matchPath":"/ru/crypto-pos/"},{"path":"/ru/crypto-real-estate/","matchPath":"/ru/crypto-real-estate/"},{"path":"/ru/crypto-vc-funds/","matchPath":"/ru/crypto-vc-funds/"},{"path":"/ru/crypto-venture-network/","matchPath":"/ru/crypto-venture-network/"},{"path":"/ru/dapps/","matchPath":"/ru/dapps/"},{"path":"/ru/decentralized-exchanges/","matchPath":"/ru/decentralized-exchanges/"},{"path":"/ru/depin/","matchPath":"/ru/depin/"},{"path":"/ru/directory/","matchPath":"/ru/directory/"},{"path":"/ru/ethereum-casino/","matchPath":"/ru/ethereum-casino/"},{"path":"/ru/ethereum-etf/","matchPath":"/ru/ethereum-etf/"},{"path":"/ru/ethereum-exchange/","matchPath":"/ru/ethereum-exchange/"},{"path":"/ru/events/","matchPath":"/ru/events/"},{"path":"/ru/exchanges/","matchPath":"/ru/exchanges/"},{"path":"/ru/explorers/","matchPath":"/ru/explorers/"},{"path":"/ru/faucets/","matchPath":"/ru/faucets/"},{"path":"/ru/find-crypto-merchants/","matchPath":"/ru/find-crypto-merchants/"},{"path":"/ru/football/","matchPath":"/ru/football/"},{"path":"/ru/free/","matchPath":"/ru/free/"},{"path":"/ru/full-nodes/","matchPath":"/ru/full-nodes/"},{"path":"/ru/fx/","matchPath":"/ru/fx/"},{"path":"/ru/gambling-guides/","matchPath":"/ru/gambling-guides/"},{"path":"/ru/gambling/","matchPath":"/ru/gambling/"},{"path":"/ru/geo/","matchPath":"/ru/geo/"},{"path":"/ru/germany/","matchPath":"/ru/germany/"},{"path":"/ru/get-started/","matchPath":"/ru/get-started/"},{"path":"/ru/giftcard/","matchPath":"/ru/giftcard/"},{"path":"/ru/golf/","matchPath":"/ru/golf/"},{"path":"/ru/institutional/","matchPath":"/ru/institutional/"},{"path":"/ru/ira/","matchPath":"/ru/ira/"},{"path":"/ru/jobs/","matchPath":"/ru/jobs/"},{"path":"/ru/layer2-wrapped-bitcoin/","matchPath":"/ru/layer2-wrapped-bitcoin/"},{"path":"/ru/liquidity-providers/","matchPath":"/ru/liquidity-providers/"},{"path":"/ru/loan/","matchPath":"/ru/loan/"},{"path":"/ru/lottery/","matchPath":"/ru/lottery/"},{"path":"/ru/luxury/","matchPath":"/ru/luxury/"},{"path":"/ru/manage-account/","matchPath":"/ru/manage-account/"},{"path":"/ru/manage-email-subscription/","matchPath":"/ru/manage-email-subscription/"},{"path":"/ru/market-data/","matchPath":"/ru/market-data/"},{"path":"/ru/market-insights/","matchPath":"/ru/market-insights/"},{"path":"/ru/market-prices/","matchPath":"/ru/market-prices/"},{"path":"/ru/market-trends/","matchPath":"/ru/market-trends/"},{"path":"/ru/marketing-agencies/","matchPath":"/ru/marketing-agencies/"},{"path":"/ru/meme-casino/","matchPath":"/ru/meme-casino/"},{"path":"/ru/meme-coins/","matchPath":"/ru/meme-coins/"},{"path":"/ru/merchant-solutions/","matchPath":"/ru/merchant-solutions/"},{"path":"/ru/miner/","matchPath":"/ru/miner/"},{"path":"/ru/mining/","matchPath":"/ru/mining/"},{"path":"/ru/mobile/","matchPath":"/ru/mobile/"},{"path":"/ru/new-crypto-projects/","matchPath":"/ru/new-crypto-projects/"},{"path":"/ru/newsletters/","matchPath":"/ru/newsletters/"},{"path":"/ru/nft-marketplaces/","matchPath":"/ru/nft-marketplaces/"},{"path":"/ru/online-casino/","matchPath":"/ru/online-casino/"},{"path":"/ru/otc/","matchPath":"/ru/otc/"},{"path":"/ru/partners/","matchPath":"/ru/partners/"},{"path":"/ru/payments/","matchPath":"/ru/payments/"},{"path":"/ru/play-to-earn/","matchPath":"/ru/play-to-earn/"},{"path":"/ru/play/","matchPath":"/ru/play/"},{"path":"/ru/plinko/","matchPath":"/ru/plinko/"},{"path":"/ru/poker/","matchPath":"/ru/poker/"},{"path":"/ru/pos/","matchPath":"/ru/pos/"},{"path":"/ru/prediction-markets/","matchPath":"/ru/prediction-markets/"},{"path":"/ru/price-charts/","matchPath":"/ru/price-charts/"},{"path":"/ru/price-history/","matchPath":"/ru/price-history/"},{"path":"/ru/price-updates/","matchPath":"/ru/price-updates/"},{"path":"/ru/prop-trading/","matchPath":"/ru/prop-trading/"},{"path":"/ru/qr/","matchPath":"/ru/qr/"},{"path":"/ru/research/","matchPath":"/ru/research/"},{"path":"/ru/retirement-accounts/","matchPath":"/ru/retirement-accounts/"},{"path":"/ru/rewards/","matchPath":"/ru/rewards/"},{"path":"/ru/ripple-casino/","matchPath":"/ru/ripple-casino/"},{"path":"/ru/rwa/","matchPath":"/ru/rwa/"},{"path":"/ru/sell/","matchPath":"/ru/sell/"},{"path":"/ru/shopping/","matchPath":"/ru/shopping/"},{"path":"/ru/sitemap/","matchPath":"/ru/sitemap/"},{"path":"/ru/smart-contract-auditors/","matchPath":"/ru/smart-contract-auditors/"},{"path":"/ru/soccer/","matchPath":"/ru/soccer/"},{"path":"/ru/sportsbook/","matchPath":"/ru/sportsbook/"},{"path":"/ru/stablecoins/","matchPath":"/ru/stablecoins/"},{"path":"/ru/swaps/","matchPath":"/ru/swaps/"},{"path":"/ru/table-games/","matchPath":"/ru/table-games/"},{"path":"/ru/tax/","matchPath":"/ru/tax/"},{"path":"/ru/telegram-casino/","matchPath":"/ru/telegram-casino/"},{"path":"/ru/temporarily-offline/","matchPath":"/ru/temporarily-offline/"},{"path":"/ru/tennis/","matchPath":"/ru/tennis/"},{"path":"/ru/territory-not-supported/","matchPath":"/ru/territory-not-supported/"},{"path":"/ru/thank-you/","matchPath":"/ru/thank-you/"},{"path":"/ru/tipping-platforms/","matchPath":"/ru/tipping-platforms/"},{"path":"/ru/tools/","matchPath":"/ru/tools/"},{"path":"/ru/top-bitcoin-trading-strategies/","matchPath":"/ru/top-bitcoin-trading-strategies/"},{"path":"/ru/trading/","matchPath":"/ru/trading/"},{"path":"/ru/travel/","matchPath":"/ru/travel/"},{"path":"/ru/trike/","matchPath":"/ru/trike/"},{"path":"/ru/uk-warning/","matchPath":"/ru/uk-warning/"},{"path":"/ru/united-kingdom/","matchPath":"/ru/united-kingdom/"},{"path":"/ru/verse-referrals/","matchPath":"/ru/verse-referrals/"},{"path":"/ru/vpn/","matchPath":"/ru/vpn/"},{"path":"/ru/wallet-recovery/","matchPath":"/ru/wallet-recovery/"},{"path":"/ru/wallet-services/","matchPath":"/ru/wallet-services/"},{"path":"/ru/wallet/","matchPath":"/ru/wallet/"},{"path":"/ru/wealth-management/","matchPath":"/ru/wealth-management/"},{"path":"/ru/web3-agencies/","matchPath":"/ru/web3-agencies/"},{"path":"/ru/web3-casino/","matchPath":"/ru/web3-casino/"},{"path":"/ru/what-is-bitcoin-otc-trading/","matchPath":"/ru/what-is-bitcoin-otc-trading/"},{"path":"/zh/about-us/","matchPath":"/zh/about-us/"},{"path":"/zh/advertise/","matchPath":"/zh/advertise/"},{"path":"/zh/ai/","matchPath":"/zh/ai/"},{"path":"/zh/airdrops/","matchPath":"/zh/airdrops/"},{"path":"/zh/altcoin-casino/","matchPath":"/zh/altcoin-casino/"},{"path":"/zh/analysis-tools/","matchPath":"/zh/analysis-tools/"},{"path":"/zh/analytical-tools/","matchPath":"/zh/analytical-tools/"},{"path":"/zh/best-altcoins/","matchPath":"/zh/best-altcoins/"},{"path":"/zh/best-bitcoin-staking-platform/","matchPath":"/zh/best-bitcoin-staking-platform/"},{"path":"/zh/best-bitcoin-trading-bots/","matchPath":"/zh/best-bitcoin-trading-bots/"},{"path":"/zh/best-crypto-apps/","matchPath":"/zh/best-crypto-apps/"},{"path":"/zh/best-crypto-brokers/","matchPath":"/zh/best-crypto-brokers/"},{"path":"/zh/best-crypto-presales/","matchPath":"/zh/best-crypto-presales/"},{"path":"/zh/best-crypto-to-buy-now/","matchPath":"/zh/best-crypto-to-buy-now/"},{"path":"/zh/best-crypto-today/","matchPath":"/zh/best-crypto-today/"},{"path":"/zh/best-crypto-trading-apps/","matchPath":"/zh/best-crypto-trading-apps/"},{"path":"/zh/best-crypto-trading-platform-australia/","matchPath":"/zh/best-crypto-trading-platform-australia/"},{"path":"/zh/best-crypto-trading-platform/","matchPath":"/zh/best-crypto-trading-platform/"},{"path":"/zh/best-crypto-trading-signals/","matchPath":"/zh/best-crypto-trading-signals/"},{"path":"/zh/best-exchange-for-bitcoin/","matchPath":"/zh/best-exchange-for-bitcoin/"},{"path":"/zh/best-places-to-buy-crypto/","matchPath":"/zh/best-places-to-buy-crypto/"},{"path":"/zh/best-us-bitcoin-exchange/","matchPath":"/zh/best-us-bitcoin-exchange/"},{"path":"/zh/bitcoin-atm/","matchPath":"/zh/bitcoin-atm/"},{"path":"/zh/bitcoin-blackjack/","matchPath":"/zh/bitcoin-blackjack/"},{"path":"/zh/bitcoin-card/","matchPath":"/zh/bitcoin-card/"},{"path":"/zh/bitcoin-cash-projects/","matchPath":"/zh/bitcoin-cash-projects/"},{"path":"/zh/bitcoin-cash-register/","matchPath":"/zh/bitcoin-cash-register/"},{"path":"/zh/bitcoin-casino/","matchPath":"/zh/bitcoin-casino/"},{"path":"/zh/bitcoin-dice/","matchPath":"/zh/bitcoin-dice/"},{"path":"/zh/bitcoin-etf/","matchPath":"/zh/bitcoin-etf/"},{"path":"/zh/bitcoin-exchange-directory/","matchPath":"/zh/bitcoin-exchange-directory/"},{"path":"/zh/bitcoin-loan-directory/","matchPath":"/zh/bitcoin-loan-directory/"},{"path":"/zh/bitcoin-real-estate/","matchPath":"/zh/bitcoin-real-estate/"},{"path":"/zh/bitcoin-roulette/","matchPath":"/zh/bitcoin-roulette/"},{"path":"/zh/bitcoin-slots/","matchPath":"/zh/bitcoin-slots/"},{"path":"/zh/bitcoin-teller-machine/","matchPath":"/zh/bitcoin-teller-machine/"},{"path":"/zh/bitcoin-transaction-accelerator/","matchPath":"/zh/bitcoin-transaction-accelerator/"},{"path":"/zh/bitcoin-wallet-directory/","matchPath":"/zh/bitcoin-wallet-directory/"},{"path":"/zh/browsers/","matchPath":"/zh/browsers/"},{"path":"/zh/buy/","matchPath":"/zh/buy/"},{"path":"/zh/canada/","matchPath":"/zh/canada/"},{"path":"/zh/card-casino/","matchPath":"/zh/card-casino/"},{"path":"/zh/cards/","matchPath":"/zh/cards/"},{"path":"/zh/cashfusion-fund/","matchPath":"/zh/cashfusion-fund/"},{"path":"/zh/celebrity-tokens/","matchPath":"/zh/celebrity-tokens/"},{"path":"/zh/cert/","matchPath":"/zh/cert/"},{"path":"/zh/cfd/","matchPath":"/zh/cfd/"},{"path":"/zh/conferences/","matchPath":"/zh/conferences/"},{"path":"/zh/contact-us/","matchPath":"/zh/contact-us/"},{"path":"/zh/corporate-bitcoin-treasury/","matchPath":"/zh/corporate-bitcoin-treasury/"},{"path":"/zh/cross-chain-bridges/","matchPath":"/zh/cross-chain-bridges/"},{"path":"/zh/crypto-affiliate-programs/","matchPath":"/zh/crypto-affiliate-programs/"},{"path":"/zh/crypto-casino/","matchPath":"/zh/crypto-casino/"},{"path":"/zh/crypto-education/","matchPath":"/zh/crypto-education/"},{"path":"/zh/crypto-exchange-directory/","matchPath":"/zh/crypto-exchange-directory/"},{"path":"/zh/crypto-jobs/","matchPath":"/zh/crypto-jobs/"},{"path":"/zh/crypto-news/","matchPath":"/zh/crypto-news/"},{"path":"/zh/crypto-newsletter/","matchPath":"/zh/crypto-newsletter/"},{"path":"/zh/crypto-otc/","matchPath":"/zh/crypto-otc/"},{"path":"/zh/crypto-pos/","matchPath":"/zh/crypto-pos/"},{"path":"/zh/crypto-real-estate/","matchPath":"/zh/crypto-real-estate/"},{"path":"/zh/crypto-vc-funds/","matchPath":"/zh/crypto-vc-funds/"},{"path":"/zh/crypto-venture-network/","matchPath":"/zh/crypto-venture-network/"},{"path":"/zh/dapps/","matchPath":"/zh/dapps/"},{"path":"/zh/decentralized-exchanges/","matchPath":"/zh/decentralized-exchanges/"},{"path":"/zh/depin/","matchPath":"/zh/depin/"},{"path":"/zh/directory/","matchPath":"/zh/directory/"},{"path":"/zh/ethereum-casino/","matchPath":"/zh/ethereum-casino/"},{"path":"/zh/ethereum-etf/","matchPath":"/zh/ethereum-etf/"},{"path":"/zh/ethereum-exchange/","matchPath":"/zh/ethereum-exchange/"},{"path":"/zh/events/","matchPath":"/zh/events/"},{"path":"/zh/exchanges/","matchPath":"/zh/exchanges/"},{"path":"/zh/explorers/","matchPath":"/zh/explorers/"},{"path":"/zh/faucets/","matchPath":"/zh/faucets/"},{"path":"/zh/find-crypto-merchants/","matchPath":"/zh/find-crypto-merchants/"},{"path":"/zh/football/","matchPath":"/zh/football/"},{"path":"/zh/free/","matchPath":"/zh/free/"},{"path":"/zh/full-nodes/","matchPath":"/zh/full-nodes/"},{"path":"/zh/fx/","matchPath":"/zh/fx/"},{"path":"/zh/gambling-guides/","matchPath":"/zh/gambling-guides/"},{"path":"/zh/gambling/","matchPath":"/zh/gambling/"},{"path":"/zh/geo/","matchPath":"/zh/geo/"},{"path":"/zh/germany/","matchPath":"/zh/germany/"},{"path":"/zh/get-started/","matchPath":"/zh/get-started/"},{"path":"/zh/giftcard/","matchPath":"/zh/giftcard/"},{"path":"/zh/golf/","matchPath":"/zh/golf/"},{"path":"/zh/institutional/","matchPath":"/zh/institutional/"},{"path":"/zh/ira/","matchPath":"/zh/ira/"},{"path":"/zh/jobs/","matchPath":"/zh/jobs/"},{"path":"/zh/layer2-wrapped-bitcoin/","matchPath":"/zh/layer2-wrapped-bitcoin/"},{"path":"/zh/liquidity-providers/","matchPath":"/zh/liquidity-providers/"},{"path":"/zh/loan/","matchPath":"/zh/loan/"},{"path":"/zh/lottery/","matchPath":"/zh/lottery/"},{"path":"/zh/luxury/","matchPath":"/zh/luxury/"},{"path":"/zh/manage-account/","matchPath":"/zh/manage-account/"},{"path":"/zh/manage-email-subscription/","matchPath":"/zh/manage-email-subscription/"},{"path":"/zh/market-data/","matchPath":"/zh/market-data/"},{"path":"/zh/market-insights/","matchPath":"/zh/market-insights/"},{"path":"/zh/market-prices/","matchPath":"/zh/market-prices/"},{"path":"/zh/market-trends/","matchPath":"/zh/market-trends/"},{"path":"/zh/marketing-agencies/","matchPath":"/zh/marketing-agencies/"},{"path":"/zh/meme-casino/","matchPath":"/zh/meme-casino/"},{"path":"/zh/meme-coins/","matchPath":"/zh/meme-coins/"},{"path":"/zh/merchant-solutions/","matchPath":"/zh/merchant-solutions/"},{"path":"/zh/miner/","matchPath":"/zh/miner/"},{"path":"/zh/mining/","matchPath":"/zh/mining/"},{"path":"/zh/mobile/","matchPath":"/zh/mobile/"},{"path":"/zh/new-crypto-projects/","matchPath":"/zh/new-crypto-projects/"},{"path":"/zh/newsletters/","matchPath":"/zh/newsletters/"},{"path":"/zh/nft-marketplaces/","matchPath":"/zh/nft-marketplaces/"},{"path":"/zh/online-casino/","matchPath":"/zh/online-casino/"},{"path":"/zh/otc/","matchPath":"/zh/otc/"},{"path":"/zh/partners/","matchPath":"/zh/partners/"},{"path":"/zh/payments/","matchPath":"/zh/payments/"},{"path":"/zh/play-to-earn/","matchPath":"/zh/play-to-earn/"},{"path":"/zh/play/","matchPath":"/zh/play/"},{"path":"/zh/plinko/","matchPath":"/zh/plinko/"},{"path":"/zh/poker/","matchPath":"/zh/poker/"},{"path":"/zh/pos/","matchPath":"/zh/pos/"},{"path":"/zh/prediction-markets/","matchPath":"/zh/prediction-markets/"},{"path":"/zh/price-charts/","matchPath":"/zh/price-charts/"},{"path":"/zh/price-history/","matchPath":"/zh/price-history/"},{"path":"/zh/price-updates/","matchPath":"/zh/price-updates/"},{"path":"/zh/prop-trading/","matchPath":"/zh/prop-trading/"},{"path":"/zh/qr/","matchPath":"/zh/qr/"},{"path":"/zh/research/","matchPath":"/zh/research/"},{"path":"/zh/retirement-accounts/","matchPath":"/zh/retirement-accounts/"},{"path":"/zh/rewards/","matchPath":"/zh/rewards/"},{"path":"/zh/ripple-casino/","matchPath":"/zh/ripple-casino/"},{"path":"/zh/rwa/","matchPath":"/zh/rwa/"},{"path":"/zh/sell/","matchPath":"/zh/sell/"},{"path":"/zh/shopping/","matchPath":"/zh/shopping/"},{"path":"/zh/sitemap/","matchPath":"/zh/sitemap/"},{"path":"/zh/smart-contract-auditors/","matchPath":"/zh/smart-contract-auditors/"},{"path":"/zh/soccer/","matchPath":"/zh/soccer/"},{"path":"/zh/sportsbook/","matchPath":"/zh/sportsbook/"},{"path":"/zh/stablecoins/","matchPath":"/zh/stablecoins/"},{"path":"/zh/swaps/","matchPath":"/zh/swaps/"},{"path":"/zh/table-games/","matchPath":"/zh/table-games/"},{"path":"/zh/tax/","matchPath":"/zh/tax/"},{"path":"/zh/telegram-casino/","matchPath":"/zh/telegram-casino/"},{"path":"/zh/temporarily-offline/","matchPath":"/zh/temporarily-offline/"},{"path":"/zh/tennis/","matchPath":"/zh/tennis/"},{"path":"/zh/territory-not-supported/","matchPath":"/zh/territory-not-supported/"},{"path":"/zh/thank-you/","matchPath":"/zh/thank-you/"},{"path":"/zh/tipping-platforms/","matchPath":"/zh/tipping-platforms/"},{"path":"/zh/tools/","matchPath":"/zh/tools/"},{"path":"/zh/top-bitcoin-trading-strategies/","matchPath":"/zh/top-bitcoin-trading-strategies/"},{"path":"/zh/trading/","matchPath":"/zh/trading/"},{"path":"/zh/travel/","matchPath":"/zh/travel/"},{"path":"/zh/trike/","matchPath":"/zh/trike/"},{"path":"/zh/uk-warning/","matchPath":"/zh/uk-warning/"},{"path":"/zh/united-kingdom/","matchPath":"/zh/united-kingdom/"},{"path":"/zh/verse-referrals/","matchPath":"/zh/verse-referrals/"},{"path":"/zh/vpn/","matchPath":"/zh/vpn/"},{"path":"/zh/wallet-recovery/","matchPath":"/zh/wallet-recovery/"},{"path":"/zh/wallet-services/","matchPath":"/zh/wallet-services/"},{"path":"/zh/wallet/","matchPath":"/zh/wallet/"},{"path":"/zh/wealth-management/","matchPath":"/zh/wealth-management/"},{"path":"/zh/web3-agencies/","matchPath":"/zh/web3-agencies/"},{"path":"/zh/web3-casino/","matchPath":"/zh/web3-casino/"},{"path":"/zh/what-is-bitcoin-otc-trading/","matchPath":"/zh/what-is-bitcoin-otc-trading/"},{"path":"/de/","matchPath":"/de/"},{"path":"/es/","matchPath":"/es/"},{"path":"/fr/","matchPath":"/fr/"},{"path":"/it/","matchPath":"/it/"},{"path":"/ru/","matchPath":"/ru/"},{"path":"/zh/","matchPath":"/zh/"},{"path":"/de/404.html","matchPath":"/de/*"},{"path":"/de/404/","matchPath":"/de/*"},{"path":"/es/404.html","matchPath":"/es/*"},{"path":"/es/404/","matchPath":"/es/*"},{"path":"/fr/404.html","matchPath":"/fr/*"},{"path":"/fr/404/","matchPath":"/fr/*"},{"path":"/it/404.html","matchPath":"/it/*"},{"path":"/it/404/","matchPath":"/it/*"},{"path":"/ru/404.html","matchPath":"/ru/*"},{"path":"/ru/404/","matchPath":"/ru/*"},{"path":"/zh/404.html","matchPath":"/zh/*"},{"path":"/zh/404/","matchPath":"/zh/*"}]'),
                O = e(79732);
            const A = new g.N5(j, C, window.pageData);
            (0, g.iC)(A), A.setApiRunner(i.N);
            const {
                render: R,
                hydrate: T
            } = (0, O.n)();
            window.asyncRequires = j, window.___emitter = l.A, window.___loader = g.Zf, n.globalHistory.listen((t => {
                t.location.action = t.action
            })), window.___push = t => f(t, {
                replace: !1
            }), window.___replace = t => f(t, {
                replace: !0
            }), window.___navigate = (t, a) => f(t, a);
            const q = "gatsby-reload-compilation-hash-match";
            (0, i.v)("onClientEntry").then((() => {
                (0, i.N)("registerServiceWorker").filter(Boolean).length > 0 && e(30626);
                const t = t => r.createElement(n.BaseContext.Provider, {
                        value: {
                            baseuri: "/",
                            basepath: "/"
                        }
                    }, r.createElement(k.A, t)),
                    a = r.createContext({}),
                    m = {
                        renderEnvironment: "browser"
                    };
                let l = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, h.A)(e, t), e.prototype.render = function() {
                            const {
                                children: t
                            } = this.props;
                            return r.createElement(n.Location, null, (e => {
                                let {
                                    location: h
                                } = e;
                                return r.createElement(E, {
                                    location: h
                                }, (e => {
                                    let {
                                        pageResources: h,
                                        location: i
                                    } = e;
                                    const n = (0, g.LE)(),
                                        s = (0, g.Rh)();
                                    return r.createElement(c.G.Provider, {
                                        value: n
                                    }, r.createElement(o.j$.Provider, {
                                        value: m
                                    }, r.createElement(o.dd.Provider, {
                                        value: s
                                    }, r.createElement(o.Jr.Provider, {
                                        value: h.page.slicesMap
                                    }, r.createElement(a.Provider, {
                                        value: {
                                            pageResources: h,
                                            location: i
                                        }
                                    }, t)))))
                                }))
                            }))
                        }, e
                    }(r.Component),
                    p = function(e) {
                        function i() {
                            return e.apply(this, arguments) || this
                        }
                        return (0, h.A)(i, e), i.prototype.render = function() {
                            return r.createElement(a.Consumer, null, (a => {
                                let {
                                    pageResources: e,
                                    location: h
                                } = a;
                                return r.createElement(z, {
                                    location: h
                                }, r.createElement(s.z_, {
                                    location: h,
                                    shouldUpdateScroll: v
                                }, r.createElement(n.Router, {
                                    basepath: "",
                                    location: h,
                                    id: "gatsby-focus-wrapper"
                                }, r.createElement(t, Object.assign({
                                    path: "/404.html" === e.page.path || "/500.html" === e.page.path ? (0, _.A)(h.pathname, "") : encodeURI((e.page.matchPath || e.page.path).split("?")[0])
                                }, this.props, {
                                    location: h,
                                    pageResources: e
                                }, e.json)))))
                            }))
                        }, i
                    }(r.Component);
                const {
                    pagePath: d,
                    location: u
                } = window;
                d && "" + d !== u.pathname + (d.includes("?") ? u.search : "") && !(A.findMatchPath((0, _.A)(u.pathname, "")) || d.match(/^\/(404|500)(\/?|.html)$/) || d.match(/^\/offline-plugin-app-shell-fallback\/?$/)) && (0, n.navigate)("" + d + (d.includes("?") ? "" : u.search) + u.hash, {
                    replace: !0
                });
                const b = () => {
                    try {
                        return sessionStorage
                    } catch {
                        return null
                    }
                };
                g.Zf.loadPage(u.pathname + u.search).then((t => {
                    var a;
                    const e = b();
                    if (null != t && null !== (a = t.page) && void 0 !== a && a.webpackCompilationHash && t.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker" in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({
                            gatsbyApi: "clearPathResources"
                        }), e)) {
                        if (!("1" === e.getItem(q))) return e.setItem(q, "1"), void window.location.reload(!0)
                    }
                    if (e && e.removeItem(q), !t || t.status === g.Wi.Error) {
                        const a = `page resources for ${u.pathname} not found. Not rendering React`;
                        if (t && t.error) throw console.error(a), t.error;
                        throw new Error(a)
                    }
                    const h = (0, i.N)("wrapRootElement", {
                            element: r.createElement(p, null)
                        }, r.createElement(p, null), (t => {
                            let {
                                result: a
                            } = t;
                            return {
                                element: a
                            }
                        })).pop(),
                        n = function() {
                            const t = r.useRef(!1);
                            return r.useEffect((() => {
                                t.current || (t.current = !0, performance.mark && performance.mark("onInitialClientRender"), (0, i.N)("onInitialClientRender"))
                            }), []), r.createElement(l, null, h)
                        },
                        s = document.getElementById("gatsby-focus-wrapper");
                    let c = R;
                    s && s.children.length && (c = T);
                    const o = (0, i.N)("replaceHydrateFunction", void 0, c)[0];

                    function m() {
                        const t = "undefined" != typeof window ? document.getElementById("___gatsby") : null;
                        o(r.createElement(n, null), t)
                    }
                    const d = document;
                    if ("complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) setTimeout((function() {
                        m()
                    }), 0);
                    else {
                        const t = function() {
                            d.removeEventListener("DOMContentLoaded", t, !1), window.removeEventListener("load", t, !1), m()
                        };
                        d.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)
                    }
                }))
            }))
        },
        50963: function(t, a, e) {
            "use strict";
            e.r(a);
            var h = e(96540),
                i = e(56814),
                r = e(6017);
            a.default = t => {
                let {
                    location: a
                } = t;
                const e = i.Ay.loadPageSync(a.pathname);
                return e ? h.createElement(r.A, {
                    location: a,
                    pageResources: e,
                    ...e.json
                }) : null
            }
        },
        42549: function(t, a, e) {
            var h;
            t.exports = (h = e(50963)) && h.default || h
        },
        79732: function(t, a, e) {
            "use strict";
            e.d(a, {
                n: function() {
                    return i
                }
            });
            const h = new WeakMap;

            function i() {
                const t = e(5338);
                return {
                    render: (a, e) => {
                        let i = h.get(e);
                        i || h.set(e, i = t.createRoot(e)), i.render(a)
                    },
                    hydrate: (a, e) => t.hydrateRoot(e, a)
                }
            }
        },
        16491: function(t, a, e) {
            "use strict";
            e.d(a, {
                X: function() {
                    return r
                }
            });
            const h = new Map,
                i = new Map;

            function r(t) {
                let a = h.get(t);
                return a || (a = i.get(t.toLowerCase())), a
            }[].forEach((t => {
                t.ignoreCase ? i.set(t.fromPath, t) : h.set(t.fromPath, t)
            }))
        },
        30626: function(t, a, e) {
            "use strict";
            e.r(a);
            var h = e(60020);
            "https:" !== window.location.protocol && "localhost" !== window.location.hostname ? console.error("Service workers can only be used over HTTPS, or on localhost for development") : "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then((function(t) {
                t.addEventListener("updatefound", (() => {
                    (0, h.N)("onServiceWorkerUpdateFound", {
                        serviceWorker: t
                    });
                    const a = t.installing;
                    console.log("installingWorker", a), a.addEventListener("statechange", (() => {
                        switch (a.state) {
                            case "installed":
                                navigator.serviceWorker.controller ? (window.___swUpdated = !0, (0, h.N)("onServiceWorkerUpdateReady", {
                                    serviceWorker: t
                                }), window.___failedResources && (console.log("resources failed, SW updated - reloading"), window.location.reload())) : (console.log("Content is now available offline!"), (0, h.N)("onServiceWorkerInstalled", {
                                    serviceWorker: t
                                }));
                                break;
                            case "redundant":
                                console.error("The installing service worker became redundant."), (0, h.N)("onServiceWorkerRedundant", {
                                    serviceWorker: t
                                });
                                break;
                            case "activated":
                                (0, h.N)("onServiceWorkerActive", {
                                    serviceWorker: t
                                })
                        }
                    }))
                }))
            })).catch((function(t) {
                console.error("Error during service worker registration:", t)
            }))
        },
        2024: function(t, a, e) {
            "use strict";
            e.d(a, {
                Jr: function() {
                    return n
                },
                dd: function() {
                    return i
                },
                hr: function() {
                    return s
                },
                j$: function() {
                    return r
                }
            });
            var h = e(96540);
            const i = h.createContext({}),
                r = h.createContext({}),
                n = h.createContext({}),
                s = h.createContext({})
        },
        7231: function(t, a, e) {
            "use strict";
            e.d(a, {
                de: function() {
                    return c
                },
                G: function() {
                    return i
                },
                GR: function() {
                    return o
                }
            });
            var h = e(96540);
            const i = (r = "StaticQuery", n = {}, h.createServerContext ? function(t, a) {
                return void 0 === a && (a = null), globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}), globalThis.__SERVER_CONTEXT[t] || (globalThis.__SERVER_CONTEXT[t] = h.createServerContext(t, a)), globalThis.__SERVER_CONTEXT[t]
            }(r, n) : h.createContext(n));
            var r, n;

            function s(t) {
                let {
                    staticQueryData: a,
                    data: e,
                    query: i,
                    render: r
                } = t;
                const n = e ? e.data : a[i] && a[i].data;
                return h.createElement(h.Fragment, null, n && r(n), !n && h.createElement("div", null, "Loading (StaticQuery)"))
            }
            const c = t => {
                    const {
                        data: a,
                        query: e,
                        render: r,
                        children: n
                    } = t;
                    return h.createElement(i.Consumer, null, (t => h.createElement(s, {
                        data: a,
                        query: e,
                        render: r || n,
                        staticQueryData: t
                    })))
                },
                o = t => {
                    var a;
                    h.useContext;
                    const e = h.useContext(i);
                    if (isNaN(Number(t))) throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${t}\`);\n`);
                    if (null !== (a = e[t]) && void 0 !== a && a.data) return e[t].data;
                    throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")
                }
        },
        38797: function(t, a, e) {
            "use strict";

            function h(t, a) {
                return void 0 === a && (a = ""), a ? t === a ? "/" : t.startsWith(`${a}/`) ? t.slice(a.length) : t : t
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        35442: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                GambleBlocker: function() {
                    return ma
                },
                onClientEntry: function() {
                    return Pa
                },
                onPreRouteUpdate: function() {
                    return pa
                },
                onRouteUpdate: function() {
                    return da
                },
                onServiceWorkerUpdateReady: function() {
                    return ua
                },
                shouldUpdateScroll: function() {
                    return ba
                },
                wrapRootElement: function() {
                    return ga
                }
            });
            var h = e(92901),
                i = e(96540),
                r = e(19888),
                n = e(69242),
                s = e(40961);
            let c = function(t) {
                t()
            };
            const o = () => c,
                g = (0, i.createContext)(null);
            let m = null;
            e(4146), e(54737);
            const l = {
                notify() {},
                get: () => []
            };

            function p(t, a) {
                let e, h = l;

                function i() {
                    n.onStateChange && n.onStateChange()
                }

                function r() {
                    e || (e = a ? a.addNestedSub(i) : t.subscribe(i), h = function() {
                        const t = o();
                        let a = null,
                            e = null;
                        return {
                            clear() {
                                a = null, e = null
                            },
                            notify() {
                                t((() => {
                                    let t = a;
                                    for (; t;) t.callback(), t = t.next
                                }))
                            },
                            get() {
                                let t = [],
                                    e = a;
                                for (; e;) t.push(e), e = e.next;
                                return t
                            },
                            subscribe(t) {
                                let h = !0,
                                    i = e = {
                                        callback: t,
                                        next: null,
                                        prev: e
                                    };
                                return i.prev ? i.prev.next = i : a = i,
                                    function() {
                                        h && null !== a && (h = !1, i.next ? i.next.prev = i.prev : e = i.prev, i.prev ? i.prev.next = i.next : a = i.next)
                                    }
                            }
                        }
                    }())
                }
                const n = {
                    addNestedSub: function(t) {
                        return r(), h.subscribe(t)
                    },
                    notifyNestedSubs: function() {
                        h.notify()
                    },
                    handleChangeWrapper: i,
                    isSubscribed: function() {
                        return Boolean(e)
                    },
                    trySubscribe: r,
                    tryUnsubscribe: function() {
                        e && (e(), e = void 0, h.clear(), h = l)
                    },
                    getListeners: () => h
                };
                return n
            }
            const d = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? i.useLayoutEffect : i.useEffect;
            let u = null;
            var b = function({
                store: t,
                context: a,
                children: e,
                serverState: h
            }) {
                const r = (0, i.useMemo)((() => {
                        const a = p(t);
                        return {
                            store: t,
                            subscription: a,
                            getServerState: h ? () => h : void 0
                        }
                    }), [t, h]),
                    n = (0, i.useMemo)((() => t.getState()), [t]);
                d((() => {
                    const {
                        subscription: a
                    } = r;
                    return a.onStateChange = a.notifyNestedSubs, a.trySubscribe(), n !== t.getState() && a.notifyNestedSubs(), () => {
                        a.tryUnsubscribe(), a.onStateChange = void 0
                    }
                }), [r, n]);
                const s = a || g;
                return i.createElement(s.Provider, {
                    value: r
                }, e)
            };
            var P;

            function w(t) {
                for (var a = arguments.length, e = Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                throw Error("[Immer] minified error nr: " + t + (e.length ? " " + e.map((function(t) {
                    return "'" + t + "'"
                })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function f(t) {
                return !!t && !!t[ct]
            }

            function v(t) {
                var a;
                return !!t && (function(t) {
                    if (!t || "object" != typeof t) return !1;
                    var a = Object.getPrototypeOf(t);
                    if (null === a) return !0;
                    var e = Object.hasOwnProperty.call(a, "constructor") && a.constructor;
                    return e === Object || "function" == typeof e && Function.toString.call(e) === ot
                }(t) || Array.isArray(t) || !!t[st] || !!(null === (a = t.constructor) || void 0 === a ? void 0 : a[st]) || E(t) || _(t))
            }

            function y(t, a, e) {
                void 0 === e && (e = !1), 0 === x(t) ? (e ? Object.keys : gt)(t).forEach((function(h) {
                    e && "symbol" == typeof h || a(h, t[h], t)
                })) : t.forEach((function(e, h) {
                    return a(h, e, t)
                }))
            }

            function x(t) {
                var a = t[ct];
                return a ? a.i > 3 ? a.i - 4 : a.i : Array.isArray(t) ? 1 : E(t) ? 2 : _(t) ? 3 : 0
            }

            function z(t, a) {
                return 2 === x(t) ? t.has(a) : Object.prototype.hasOwnProperty.call(t, a)
            }

            function k(t, a) {
                return 2 === x(t) ? t.get(a) : t[a]
            }

            function j(t, a, e) {
                var h = x(t);
                2 === h ? t.set(a, e) : 3 === h ? t.add(e) : t[a] = e
            }

            function S(t, a) {
                return t === a ? 0 !== t || 1 / t == 1 / a : t != t && a != a
            }

            function E(t) {
                return ht && t instanceof Map
            }

            function _(t) {
                return it && t instanceof Set
            }

            function C(t) {
                return t.o || t.t
            }

            function O(t) {
                if (Array.isArray(t)) return Array.prototype.slice.call(t);
                var a = mt(t);
                delete a[ct];
                for (var e = gt(a), h = 0; h < e.length; h++) {
                    var i = e[h],
                        r = a[i];
                    !1 === r.writable && (r.writable = !0, r.configurable = !0), (r.get || r.set) && (a[i] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: r.enumerable,
                        value: t[i]
                    })
                }
                return Object.create(Object.getPrototypeOf(t), a)
            }

            function A(t, a) {
                return void 0 === a && (a = !1), T(t) || f(t) || !v(t) || (x(t) > 1 && (t.set = t.add = t.clear = t.delete = R), Object.freeze(t), a && y(t, (function(t, a) {
                    return A(a, !0)
                }), !0)), t
            }

            function R() {
                w(2)
            }

            function T(t) {
                return null == t || "object" != typeof t || Object.isFrozen(t)
            }

            function q(t) {
                var a = lt[t];
                return a || w(18, t), a
            }

            function N(t, a) {
                lt[t] || (lt[t] = a)
            }

            function I() {
                return at
            }

            function D(t, a) {
                a && (q("Patches"), t.u = [], t.s = [], t.v = a)
            }

            function M(t) {
                L(t), t.p.forEach(H), t.p = null
            }

            function L(t) {
                t === at && (at = t.l)
            }

            function $(t) {
                return at = {
                    p: [],
                    l: at,
                    h: t,
                    m: !0,
                    _: 0
                }
            }

            function H(t) {
                var a = t[ct];
                0 === a.i || 1 === a.i ? a.j() : a.O = !0
            }

            function F(t, a) {
                a._ = a.p.length;
                var e = a.p[0],
                    h = void 0 !== t && t !== e;
                return a.h.g || q("ES5").S(a, t, h), h ? (e[ct].P && (M(a), w(4)), v(t) && (t = U(a, t), a.l || B(a, t)), a.u && q("Patches").M(e[ct].t, t, a.u, a.s)) : t = U(a, e, []), M(a), a.u && a.v(a.u, a.s), t !== nt ? t : void 0
            }

            function U(t, a, e) {
                if (T(a)) return a;
                var h = a[ct];
                if (!h) return y(a, (function(i, r) {
                    return W(t, h, a, i, r, e)
                }), !0), a;
                if (h.A !== t) return a;
                if (!h.P) return B(t, h.t, !0), h.t;
                if (!h.I) {
                    h.I = !0, h.A._--;
                    var i = 4 === h.i || 5 === h.i ? h.o = O(h.k) : h.o,
                        r = i,
                        n = !1;
                    3 === h.i && (r = new Set(i), i.clear(), n = !0), y(r, (function(a, r) {
                        return W(t, h, i, a, r, e, n)
                    })), B(t, i, !1), e && t.u && q("Patches").N(h, e, t.u, t.s)
                }
                return h.o
            }

            function W(t, a, e, h, i, r, n) {
                if (f(i)) {
                    var s = U(t, i, r && a && 3 !== a.i && !z(a.R, h) ? r.concat(h) : void 0);
                    if (j(e, h, s), !f(s)) return;
                    t.m = !1
                } else n && e.add(i);
                if (v(i) && !T(i)) {
                    if (!t.h.D && t._ < 1) return;
                    U(t, i), a && a.A.l || B(t, i)
                }
            }

            function B(t, a, e) {
                void 0 === e && (e = !1), !t.l && t.h.D && t.m && A(a, e)
            }

            function G(t, a) {
                var e = t[ct];
                return (e ? C(e) : t)[a]
            }

            function X(t, a) {
                if (a in t)
                    for (var e = Object.getPrototypeOf(t); e;) {
                        var h = Object.getOwnPropertyDescriptor(e, a);
                        if (h) return h;
                        e = Object.getPrototypeOf(e)
                    }
            }

            function J(t) {
                t.P || (t.P = !0, t.l && J(t.l))
            }

            function V(t) {
                t.o || (t.o = O(t.t))
            }

            function Q(t, a, e) {
                var h = E(a) ? q("MapSet").F(a, e) : _(a) ? q("MapSet").T(a, e) : t.g ? function(t, a) {
                    var e = Array.isArray(t),
                        h = {
                            i: e ? 1 : 0,
                            A: a ? a.A : I(),
                            P: !1,
                            I: !1,
                            R: {},
                            l: a,
                            t: t,
                            k: null,
                            o: null,
                            j: null,
                            C: !1
                        },
                        i = h,
                        r = pt;
                    e && (i = [h], r = dt);
                    var n = Proxy.revocable(i, r),
                        s = n.revoke,
                        c = n.proxy;
                    return h.k = c, h.j = s, c
                }(a, e) : q("ES5").J(a, e);
                return (e ? e.A : I()).p.push(h), h
            }

            function Y(t) {
                return f(t) || w(22, t),
                    function t(a) {
                        if (!v(a)) return a;
                        var e, h = a[ct],
                            i = x(a);
                        if (h) {
                            if (!h.P && (h.i < 4 || !q("ES5").K(h))) return h.t;
                            h.I = !0, e = K(a, i), h.I = !1
                        } else e = K(a, i);
                        return y(e, (function(a, i) {
                            h && k(h.t, a) === i || j(e, a, t(i))
                        })), 3 === i ? new Set(e) : e
                    }(t)
            }

            function K(t, a) {
                switch (a) {
                    case 2:
                        return new Map(t);
                    case 3:
                        return Array.from(t)
                }
                return O(t)
            }

            function Z() {
                function t(t, a) {
                    var e = i[t];
                    return e ? e.enumerable = a : i[t] = e = {
                        configurable: !0,
                        enumerable: a,
                        get: function() {
                            var a = this[ct];
                            return pt.get(a, t)
                        },
                        set: function(a) {
                            var e = this[ct];
                            pt.set(e, t, a)
                        }
                    }, e
                }

                function a(t) {
                    for (var a = t.length - 1; a >= 0; a--) {
                        var i = t[a][ct];
                        if (!i.P) switch (i.i) {
                            case 5:
                                h(i) && J(i);
                                break;
                            case 4:
                                e(i) && J(i)
                        }
                    }
                }

                function e(t) {
                    for (var a = t.t, e = t.k, h = gt(e), i = h.length - 1; i >= 0; i--) {
                        var r = h[i];
                        if (r !== ct) {
                            var n = a[r];
                            if (void 0 === n && !z(a, r)) return !0;
                            var s = e[r],
                                c = s && s[ct];
                            if (c ? c.t !== n : !S(s, n)) return !0
                        }
                    }
                    var o = !!a[ct];
                    return h.length !== gt(a).length + (o ? 0 : 1)
                }

                function h(t) {
                    var a = t.k;
                    if (a.length !== t.t.length) return !0;
                    var e = Object.getOwnPropertyDescriptor(a, a.length - 1);
                    if (e && !e.get) return !0;
                    for (var h = 0; h < a.length; h++)
                        if (!a.hasOwnProperty(h)) return !0;
                    return !1
                }
                var i = {};
                N("ES5", {
                    J: function(a, e) {
                        var h = Array.isArray(a),
                            i = function(a, e) {
                                if (a) {
                                    for (var h = Array(e.length), i = 0; i < e.length; i++) Object.defineProperty(h, "" + i, t(i, !0));
                                    return h
                                }
                                var r = mt(e);
                                delete r[ct];
                                for (var n = gt(r), s = 0; s < n.length; s++) {
                                    var c = n[s];
                                    r[c] = t(c, a || !!r[c].enumerable)
                                }
                                return Object.create(Object.getPrototypeOf(e), r)
                            }(h, a),
                            r = {
                                i: h ? 5 : 4,
                                A: e ? e.A : I(),
                                P: !1,
                                I: !1,
                                R: {},
                                l: e,
                                t: a,
                                k: i,
                                o: null,
                                O: !1,
                                C: !1
                            };
                        return Object.defineProperty(i, ct, {
                            value: r,
                            writable: !0
                        }), i
                    },
                    S: function(t, e, i) {
                        i ? f(e) && e[ct].A === t && a(t.p) : (t.u && function t(a) {
                            if (a && "object" == typeof a) {
                                var e = a[ct];
                                if (e) {
                                    var i = e.t,
                                        r = e.k,
                                        n = e.R,
                                        s = e.i;
                                    if (4 === s) y(r, (function(a) {
                                        a !== ct && (void 0 !== i[a] || z(i, a) ? n[a] || t(r[a]) : (n[a] = !0, J(e)))
                                    })), y(i, (function(t) {
                                        void 0 !== r[t] || z(r, t) || (n[t] = !1, J(e))
                                    }));
                                    else if (5 === s) {
                                        if (h(e) && (J(e), n.length = !0), r.length < i.length)
                                            for (var c = r.length; c < i.length; c++) n[c] = !1;
                                        else
                                            for (var o = i.length; o < r.length; o++) n[o] = !0;
                                        for (var g = Math.min(r.length, i.length), m = 0; m < g; m++) r.hasOwnProperty(m) || (n[m] = !0), void 0 === n[m] && t(r[m])
                                    }
                                }
                            }
                        }(t.p[0]), a(t.p))
                    },
                    K: function(t) {
                        return 4 === t.i ? e(t) : h(t)
                    }
                })
            }(t => {
                m = t
            })(n.useSyncExternalStoreWithSelector), (t => {
                u = t
            })(r.useSyncExternalStore), P = s.unstable_batchedUpdates, c = P;
            var tt, at, et = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                ht = "undefined" != typeof Map,
                it = "undefined" != typeof Set,
                rt = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                nt = et ? Symbol.for("immer-nothing") : ((tt = {})["immer-nothing"] = !0, tt),
                st = et ? Symbol.for("immer-draftable") : "__$immer_draftable",
                ct = et ? Symbol.for("immer-state") : "__$immer_state",
                ot = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
                gt = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                } : Object.getOwnPropertyNames,
                mt = Object.getOwnPropertyDescriptors || function(t) {
                    var a = {};
                    return gt(t).forEach((function(e) {
                        a[e] = Object.getOwnPropertyDescriptor(t, e)
                    })), a
                },
                lt = {},
                pt = {
                    get: function(t, a) {
                        if (a === ct) return t;
                        var e = C(t);
                        if (!z(e, a)) return function(t, a, e) {
                            var h, i = X(a, e);
                            return i ? "value" in i ? i.value : null === (h = i.get) || void 0 === h ? void 0 : h.call(t.k) : void 0
                        }(t, e, a);
                        var h = e[a];
                        return t.I || !v(h) ? h : h === G(t.t, a) ? (V(t), t.o[a] = Q(t.A.h, h, t)) : h
                    },
                    has: function(t, a) {
                        return a in C(t)
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(C(t))
                    },
                    set: function(t, a, e) {
                        var h = X(C(t), a);
                        if (null == h ? void 0 : h.set) return h.set.call(t.k, e), !0;
                        if (!t.P) {
                            var i = G(C(t), a),
                                r = null == i ? void 0 : i[ct];
                            if (r && r.t === e) return t.o[a] = e, t.R[a] = !1, !0;
                            if (S(e, i) && (void 0 !== e || z(t.t, a))) return !0;
                            V(t), J(t)
                        }
                        return t.o[a] === e && (void 0 !== e || a in t.o) || Number.isNaN(e) && Number.isNaN(t.o[a]) || (t.o[a] = e, t.R[a] = !0), !0
                    },
                    deleteProperty: function(t, a) {
                        return void 0 !== G(t.t, a) || a in t.t ? (t.R[a] = !1, V(t), J(t)) : delete t.R[a], t.o && delete t.o[a], !0
                    },
                    getOwnPropertyDescriptor: function(t, a) {
                        var e = C(t),
                            h = Reflect.getOwnPropertyDescriptor(e, a);
                        return h ? {
                            writable: !0,
                            configurable: 1 !== t.i || "length" !== a,
                            enumerable: h.enumerable,
                            value: e[a]
                        } : h
                    },
                    defineProperty: function() {
                        w(11)
                    },
                    getPrototypeOf: function(t) {
                        return Object.getPrototypeOf(t.t)
                    },
                    setPrototypeOf: function() {
                        w(12)
                    }
                },
                dt = {};
            y(pt, (function(t, a) {
                dt[t] = function() {
                    return arguments[0] = arguments[0][0], a.apply(this, arguments)
                }
            })), dt.deleteProperty = function(t, a) {
                return dt.set.call(this, t, a, void 0)
            }, dt.set = function(t, a, e) {
                return pt.set.call(this, t[0], a, e, t[0])
            };
            var ut = function() {
                    function t(t) {
                        var a = this;
                        this.g = rt, this.D = !0, this.produce = function(t, e, h) {
                            if ("function" == typeof t && "function" != typeof e) {
                                var i = e;
                                e = t;
                                var r = a;
                                return function(t) {
                                    var a = this;
                                    void 0 === t && (t = i);
                                    for (var h = arguments.length, n = Array(h > 1 ? h - 1 : 0), s = 1; s < h; s++) n[s - 1] = arguments[s];
                                    return r.produce(t, (function(t) {
                                        var h;
                                        return (h = e).call.apply(h, [a, t].concat(n))
                                    }))
                                }
                            }
                            var n;
                            if ("function" != typeof e && w(6), void 0 !== h && "function" != typeof h && w(7), v(t)) {
                                var s = $(a),
                                    c = Q(a, t, void 0),
                                    o = !0;
                                try {
                                    n = e(c), o = !1
                                } finally {
                                    o ? M(s) : L(s)
                                }
                                return "undefined" != typeof Promise && n instanceof Promise ? n.then((function(t) {
                                    return D(s, h), F(t, s)
                                }), (function(t) {
                                    throw M(s), t
                                })) : (D(s, h), F(n, s))
                            }
                            if (!t || "object" != typeof t) {
                                if (void 0 === (n = e(t)) && (n = t), n === nt && (n = void 0), a.D && A(n, !0), h) {
                                    var g = [],
                                        m = [];
                                    q("Patches").M(t, n, g, m), h(g, m)
                                }
                                return n
                            }
                            w(21, t)
                        }, this.produceWithPatches = function(t, e) {
                            if ("function" == typeof t) return function(e) {
                                for (var h = arguments.length, i = Array(h > 1 ? h - 1 : 0), r = 1; r < h; r++) i[r - 1] = arguments[r];
                                return a.produceWithPatches(e, (function(a) {
                                    return t.apply(void 0, [a].concat(i))
                                }))
                            };
                            var h, i, r = a.produce(t, e, (function(t, a) {
                                h = t, i = a
                            }));
                            return "undefined" != typeof Promise && r instanceof Promise ? r.then((function(t) {
                                return [t, h, i]
                            })) : [r, h, i]
                        }, "boolean" == typeof(null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof(null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze)
                    }
                    var a = t.prototype;
                    return a.createDraft = function(t) {
                        v(t) || w(8), f(t) && (t = Y(t));
                        var a = $(this),
                            e = Q(this, t, void 0);
                        return e[ct].C = !0, L(a), e
                    }, a.finishDraft = function(t, a) {
                        var e = (t && t[ct]).A;
                        return D(e, a), F(void 0, e)
                    }, a.setAutoFreeze = function(t) {
                        this.D = t
                    }, a.setUseProxies = function(t) {
                        t && !rt && w(20), this.g = t
                    }, a.applyPatches = function(t, a) {
                        var e;
                        for (e = a.length - 1; e >= 0; e--) {
                            var h = a[e];
                            if (0 === h.path.length && "replace" === h.op) {
                                t = h.value;
                                break
                            }
                        }
                        e > -1 && (a = a.slice(e + 1));
                        var i = q("Patches").$;
                        return f(t) ? i(t, a) : this.produce(t, (function(t) {
                            return i(t, a)
                        }))
                    }, t
                }(),
                bt = new ut,
                Pt = (bt.produce, bt.produceWithPatches.bind(bt), bt.setAutoFreeze.bind(bt), bt.setUseProxies.bind(bt), bt.applyPatches.bind(bt), bt.createDraft.bind(bt), bt.finishDraft.bind(bt), e(89379));

            function wt(t) {
                return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. "
            }
            var ft = "function" == typeof Symbol && Symbol.observable || "@@observable",
                vt = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                yt = {
                    INIT: "@@redux/INIT" + vt(),
                    REPLACE: "@@redux/REPLACE" + vt(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + vt()
                    }
                };

            function xt(t) {
                if ("object" != typeof t || null === t) return !1;
                for (var a = t; null !== Object.getPrototypeOf(a);) a = Object.getPrototypeOf(a);
                return Object.getPrototypeOf(t) === a
            }

            function zt(t, a, e) {
                var h;
                if ("function" == typeof a && "function" == typeof e || "function" == typeof e && "function" == typeof arguments[3]) throw new Error(wt(0));
                if ("function" == typeof a && void 0 === e && (e = a, a = void 0), void 0 !== e) {
                    if ("function" != typeof e) throw new Error(wt(1));
                    return e(zt)(t, a)
                }
                if ("function" != typeof t) throw new Error(wt(2));
                var i = t,
                    r = a,
                    n = [],
                    s = n,
                    c = !1;

                function o() {
                    s === n && (s = n.slice())
                }

                function g() {
                    if (c) throw new Error(wt(3));
                    return r
                }

                function m(t) {
                    if ("function" != typeof t) throw new Error(wt(4));
                    if (c) throw new Error(wt(5));
                    var a = !0;
                    return o(), s.push(t),
                        function() {
                            if (a) {
                                if (c) throw new Error(wt(6));
                                a = !1, o();
                                var e = s.indexOf(t);
                                s.splice(e, 1), n = null
                            }
                        }
                }

                function l(t) {
                    if (!xt(t)) throw new Error(wt(7));
                    if (void 0 === t.type) throw new Error(wt(8));
                    if (c) throw new Error(wt(9));
                    try {
                        c = !0, r = i(r, t)
                    } finally {
                        c = !1
                    }
                    for (var a = n = s, e = 0; e < a.length; e++) {
                        (0, a[e])()
                    }
                    return t
                }
                return l({
                    type: yt.INIT
                }), (h = {
                    dispatch: l,
                    subscribe: m,
                    getState: g,
                    replaceReducer: function(t) {
                        if ("function" != typeof t) throw new Error(wt(10));
                        i = t, l({
                            type: yt.REPLACE
                        })
                    }
                })[ft] = function() {
                    var t, a = m;
                    return (t = {
                        subscribe: function(t) {
                            if ("object" != typeof t || null === t) throw new Error(wt(11));

                            function e() {
                                t.next && t.next(g())
                            }
                            return e(), {
                                unsubscribe: a(e)
                            }
                        }
                    })[ft] = function() {
                        return this
                    }, t
                }, h
            }

            function kt(t) {
                for (var a = Object.keys(t), e = {}, h = 0; h < a.length; h++) {
                    var i = a[h];
                    0, "function" == typeof t[i] && (e[i] = t[i])
                }
                var r, n = Object.keys(e);
                try {
                    ! function(t) {
                        Object.keys(t).forEach((function(a) {
                            var e = t[a];
                            if (void 0 === e(void 0, {
                                    type: yt.INIT
                                })) throw new Error(wt(12));
                            if (void 0 === e(void 0, {
                                    type: yt.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(wt(13))
                        }))
                    }(e)
                } catch (s) {
                    r = s
                }
                return function(t, a) {
                    if (void 0 === t && (t = {}), r) throw r;
                    for (var h = !1, i = {}, s = 0; s < n.length; s++) {
                        var c = n[s],
                            o = e[c],
                            g = t[c],
                            m = o(g, a);
                        if (void 0 === m) {
                            a && a.type;
                            throw new Error(wt(14))
                        }
                        i[c] = m, h = h || m !== g
                    }
                    return (h = h || n.length !== Object.keys(t).length) ? i : t
                }
            }

            function jt() {
                for (var t = arguments.length, a = new Array(t), e = 0; e < t; e++) a[e] = arguments[e];
                return 0 === a.length ? function(t) {
                    return t
                } : 1 === a.length ? a[0] : a.reduce((function(t, a) {
                    return function() {
                        return t(a.apply(void 0, arguments))
                    }
                }))
            }

            function St() {
                for (var t = arguments.length, a = new Array(t), e = 0; e < t; e++) a[e] = arguments[e];
                return function(t) {
                    return function() {
                        var e = t.apply(void 0, arguments),
                            h = function() {
                                throw new Error(wt(15))
                            },
                            i = {
                                getState: e.getState,
                                dispatch: function() {
                                    return h.apply(void 0, arguments)
                                }
                            },
                            r = a.map((function(t) {
                                return t(i)
                            }));
                        return h = jt.apply(void 0, r)(e.dispatch), (0, Pt.A)((0, Pt.A)({}, e), {}, {
                            dispatch: h
                        })
                    }
                }
            }

            function Et(t) {
                return function(a) {
                    var e = a.dispatch,
                        h = a.getState;
                    return function(a) {
                        return function(i) {
                            return "function" == typeof i ? i(e, h, t) : a(i)
                        }
                    }
                }
            }
            var _t = Et();
            _t.withExtraArgument = Et;
            var Ct, Ot = _t,
                At = (Ct = function(t, a) {
                    return Ct = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, a) {
                        t.__proto__ = a
                    } || function(t, a) {
                        for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e])
                    }, Ct(t, a)
                }, function(t, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

                    function e() {
                        this.constructor = t
                    }
                    Ct(t, a), t.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype, new e)
                }),
                Rt = function(t, a) {
                    var e, h, i, r, n = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function s(r) {
                        return function(s) {
                            return function(r) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; n;) try {
                                    if (e = 1, h && (i = 2 & r[0] ? h.return : r[0] ? h.throw || ((i = h.return) && i.call(h), 0) : h.next) && !(i = i.call(h, r[1])).done) return i;
                                    switch (h = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return n.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            n.label++, h = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = n.ops.pop(), n.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = n.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                                n = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                n.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && n.label < i[1]) {
                                                n.label = i[1], i = r;
                                                break
                                            }
                                            if (i && n.label < i[2]) {
                                                n.label = i[2], n.ops.push(r);
                                                break
                                            }
                                            i[2] && n.ops.pop(), n.trys.pop();
                                            continue
                                    }
                                    r = a.call(t, n)
                                } catch (s) {
                                    r = [6, s], h = 0
                                } finally {
                                    e = i = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, s])
                        }
                    }
                },
                Tt = function(t, a) {
                    for (var e = 0, h = a.length, i = t.length; e < h; e++, i++) t[i] = a[e];
                    return t
                },
                qt = Object.defineProperty,
                Nt = Object.defineProperties,
                It = Object.getOwnPropertyDescriptors,
                Dt = Object.getOwnPropertySymbols,
                Mt = Object.prototype.hasOwnProperty,
                Lt = Object.prototype.propertyIsEnumerable,
                $t = function(t, a, e) {
                    return a in t ? qt(t, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }) : t[a] = e
                },
                Ht = function(t, a) {
                    for (var e in a || (a = {})) Mt.call(a, e) && $t(t, e, a[e]);
                    if (Dt)
                        for (var h = 0, i = Dt(a); h < i.length; h++) {
                            e = i[h];
                            Lt.call(a, e) && $t(t, e, a[e])
                        }
                    return t
                },
                Ft = function(t, a) {
                    return Nt(t, It(a))
                },
                Ut = function(t, a, e) {
                    return new Promise((function(h, i) {
                        var r = function(t) {
                                try {
                                    s(e.next(t))
                                } catch (a) {
                                    i(a)
                                }
                            },
                            n = function(t) {
                                try {
                                    s(e.throw(t))
                                } catch (a) {
                                    i(a)
                                }
                            },
                            s = function(t) {
                                return t.done ? h(t.value) : Promise.resolve(t.value).then(r, n)
                            };
                        s((e = e.apply(t, a)).next())
                    }))
                },
                Wt = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                    if (0 !== arguments.length) return "object" == typeof arguments[0] ? jt : jt.apply(null, arguments)
                };
            "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

            function Bt(t) {
                if ("object" != typeof t || null === t) return !1;
                var a = Object.getPrototypeOf(t);
                if (null === a) return !0;
                for (var e = a; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                return a === e
            }
            var Gt = function(t) {
                function a() {
                    for (var e = [], h = 0; h < arguments.length; h++) e[h] = arguments[h];
                    var i = t.apply(this, e) || this;
                    return Object.setPrototypeOf(i, a.prototype), i
                }
                return At(a, t), Object.defineProperty(a, Symbol.species, {
                    get: function() {
                        return a
                    },
                    enumerable: !1,
                    configurable: !0
                }), a.prototype.concat = function() {
                    for (var a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e];
                    return t.prototype.concat.apply(this, a)
                }, a.prototype.prepend = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 1 === t.length && Array.isArray(t[0]) ? new(a.bind.apply(a, Tt([void 0], t[0].concat(this)))) : new(a.bind.apply(a, Tt([void 0], t.concat(this))))
                }, a
            }(Array);

            function Xt() {
                return function(t) {
                    return function(t) {
                        void 0 === t && (t = {});
                        var a = t.thunk,
                            e = void 0 === a || a,
                            h = (t.immutableCheck, t.serializableCheck, new Gt);
                        e && (! function(t) {
                            return "boolean" == typeof t
                        }(e) ? h.push(Ot.withExtraArgument(e.extraArgument)) : h.push(Ot));
                        0;
                        return h
                    }(t)
                }
            }

            function Jt(t) {
                var a, e = Xt(),
                    h = t || {},
                    i = h.reducer,
                    r = void 0 === i ? void 0 : i,
                    n = h.middleware,
                    s = void 0 === n ? e() : n,
                    c = h.devTools,
                    o = void 0 === c || c,
                    g = h.preloadedState,
                    m = void 0 === g ? void 0 : g,
                    l = h.enhancers,
                    p = void 0 === l ? void 0 : l;
                if ("function" == typeof r) a = r;
                else {
                    if (!Bt(r)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                    a = kt(r)
                }
                var d = s;
                "function" == typeof d && (d = d(e));
                var u = St.apply(void 0, d),
                    b = jt;
                o && (b = Wt(Ht({
                    trace: !1
                }, "object" == typeof o && o)));
                var P = [u];
                return Array.isArray(p) ? P = Tt([u], p) : "function" == typeof p && (P = p(P)), zt(a, m, b.apply(void 0, P))
            }

            function Vt(t, a) {
                function e() {
                    for (var e = [], h = 0; h < arguments.length; h++) e[h] = arguments[h];
                    if (a) {
                        var i = a.apply(void 0, e);
                        if (!i) throw new Error("prepareAction did not return an object");
                        return Ht(Ht({
                            type: t,
                            payload: i.payload
                        }, "meta" in i && {
                            meta: i.meta
                        }), "error" in i && {
                            error: i.error
                        })
                    }
                    return {
                        type: t,
                        payload: e[0]
                    }
                }
                return e.toString = function() {
                    return "" + t
                }, e.type = t, e.match = function(a) {
                    return a.type === t
                }, e
            }
            var Qt = function(t) {
                    void 0 === t && (t = 21);
                    for (var a = "", e = t; e--;) a += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return a
                },
                Yt = ["name", "message", "stack", "code"],
                Kt = function(t, a) {
                    this.payload = t, this.meta = a
                },
                Zt = function(t, a) {
                    this.payload = t, this.meta = a
                },
                ta = function(t) {
                    if ("object" == typeof t && null !== t) {
                        for (var a = {}, e = 0, h = Yt; e < h.length; e++) {
                            var i = h[e];
                            "string" == typeof t[i] && (a[i] = t[i])
                        }
                        return a
                    }
                    return {
                        message: String(t)
                    }
                };
            ! function() {
                function t(t, a, e) {
                    var h = Vt(t + "/fulfilled", (function(t, a, e, h) {
                            return {
                                payload: t,
                                meta: Ft(Ht({}, h || {}), {
                                    arg: e,
                                    requestId: a,
                                    requestStatus: "fulfilled"
                                })
                            }
                        })),
                        i = Vt(t + "/pending", (function(t, a, e) {
                            return {
                                payload: void 0,
                                meta: Ft(Ht({}, e || {}), {
                                    arg: a,
                                    requestId: t,
                                    requestStatus: "pending"
                                })
                            }
                        })),
                        r = Vt(t + "/rejected", (function(t, a, h, i, r) {
                            return {
                                payload: i,
                                error: (e && e.serializeError || ta)(t || "Rejected"),
                                meta: Ft(Ht({}, r || {}), {
                                    arg: h,
                                    requestId: a,
                                    rejectedWithValue: !!i,
                                    requestStatus: "rejected",
                                    aborted: "AbortError" === (null == t ? void 0 : t.name),
                                    condition: "ConditionError" === (null == t ? void 0 : t.name)
                                })
                            }
                        })),
                        n = "undefined" != typeof AbortController ? AbortController : function() {
                            function t() {
                                this.signal = {
                                    aborted: !1,
                                    addEventListener: function() {},
                                    dispatchEvent: function() {
                                        return !1
                                    },
                                    onabort: function() {},
                                    removeEventListener: function() {},
                                    reason: void 0,
                                    throwIfAborted: function() {}
                                }
                            }
                            return t.prototype.abort = function() {
                                0
                            }, t
                        }();
                    return Object.assign((function(t) {
                        return function(s, c, o) {
                            var g, m = (null == e ? void 0 : e.idGenerator) ? e.idGenerator(t) : Qt(),
                                l = new n;

                            function p(t) {
                                g = t, l.abort()
                            }
                            var d = function() {
                                return Ut(this, null, (function() {
                                    var n, d, u, b, P, w;
                                    return Rt(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return f.trys.push([0, 4, , 5]), b = null == (n = null == e ? void 0 : e.condition) ? void 0 : n.call(e, t, {
                                                    getState: c,
                                                    extra: o
                                                }), null === (v = b) || "object" != typeof v || "function" != typeof v.then ? [3, 2] : [4, b];
                                            case 1:
                                                b = f.sent(), f.label = 2;
                                            case 2:
                                                if (!1 === b || l.signal.aborted) throw {
                                                    name: "ConditionError",
                                                    message: "Aborted due to condition callback returning false."
                                                };
                                                return !0, P = new Promise((function(t, a) {
                                                    return l.signal.addEventListener("abort", (function() {
                                                        return a({
                                                            name: "AbortError",
                                                            message: g || "Aborted"
                                                        })
                                                    }))
                                                })), s(i(m, t, null == (d = null == e ? void 0 : e.getPendingMeta) ? void 0 : d.call(e, {
                                                    requestId: m,
                                                    arg: t
                                                }, {
                                                    getState: c,
                                                    extra: o
                                                }))), [4, Promise.race([P, Promise.resolve(a(t, {
                                                    dispatch: s,
                                                    getState: c,
                                                    extra: o,
                                                    requestId: m,
                                                    signal: l.signal,
                                                    abort: p,
                                                    rejectWithValue: function(t, a) {
                                                        return new Kt(t, a)
                                                    },
                                                    fulfillWithValue: function(t, a) {
                                                        return new Zt(t, a)
                                                    }
                                                })).then((function(a) {
                                                    if (a instanceof Kt) throw a;
                                                    return a instanceof Zt ? h(a.payload, m, t, a.meta) : h(a, m, t)
                                                }))])];
                                            case 3:
                                                return u = f.sent(), [3, 5];
                                            case 4:
                                                return w = f.sent(), u = w instanceof Kt ? r(null, m, t, w.payload, w.meta) : r(w, m, t), [3, 5];
                                            case 5:
                                                return e && !e.dispatchConditionRejection && r.match(u) && u.meta.condition || s(u), [2, u]
                                        }
                                        var v
                                    }))
                                }))
                            }();
                            return Object.assign(d, {
                                abort: p,
                                requestId: m,
                                arg: t,
                                unwrap: function() {
                                    return d.then(aa)
                                }
                            })
                        }
                    }), {
                        pending: i,
                        rejected: r,
                        fulfilled: h,
                        typePrefix: t
                    })
                }
                t.withTypes = function() {
                    return t
                }
            }();

            function aa(t) {
                if (t.meta && t.meta.rejectedWithValue) throw t.payload;
                if (t.error) throw t.error;
                return t.payload
            }
            Object.assign;
            var ea = "listenerMiddleware";
            Vt(ea + "/add"), Vt(ea + "/removeAll"), Vt(ea + "/remove");
            "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : void 0 !== e.g ? e.g : globalThis);
            var ha, ia = function(t) {
                return function(a) {
                    setTimeout(a, t)
                }
            };
            "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : ia(10);
            Z();
            const ra = {
                    merchants: [],
                    fetchingMerchants: 0,
                    filterText: null
                },
                na = "FETCH_MERCHANTS_BEGIN",
                sa = "FETCH_MERCHANTS_SUCCESS",
                ca = "SET_FILTER_TEXT";
            var oa = kt({
                app: function(t, a) {
                    switch (void 0 === t && (t = ra), a.type) {
                        case na:
                            return { ...t,
                                fetchingMerchants: 1,
                                merchants: []
                            };
                        case sa:
                            return { ...t,
                                fetchingMerchants: 2,
                                merchants: a.payload.merchants
                            };
                        case ca:
                            return { ...t,
                                filterText: a.payload
                            };
                        default:
                            return t
                    }
                }
            });
            var ga = t => {
                let {
                    element: a
                } = t;
                return i.createElement(b, {
                    store: Jt({
                        reducer: oa
                    })
                }, a)
            };
            let ma = function() {
                function t() {
                    if (this.preventNavKey = "gambleB-preventNav", this.previousRouteKey = "gambleB-previousRoute", this.seenKey = "gambleB-seen", this.historyNavs = "GambleB-Previous-Route", this.blockListGamble = ["/gambling/", "/gambling-guides/", "/football/", "/sportsbook/", "/golf/", "/soccer/", "/tennis/", "/altcoin-casino/", "/bitcoin-casino/", "/card-casino/", "/crypto-casino/", "/ethereum-casino/", "/mobile/", "/plinko/", "/online-casino/", "/ripple-casino/", "/table-games/", "/telegram-casino/", "/web3-casino/", "/meme-casino/", "/poker/", "/lottery/"], this.blockListExchange = ["/exchanges/", "/swaps/", "/best-exchange-for-bitcoin/", "/best-us-bitcoin-exchange/", "/best-bitcoin-trading-bots/", "/best-crypto-apps/", "/best-crypto-trading-apps/", "/best-crypto-trading-platform/", "/best-crypto-trading-platform-australia/", "/best-places-to-buy-crypto/", "/crypto-exchange-directory/", "/bitcoin-exchange-directory/", "/ethereum-exchange/"], t.instance) throw new Error("Use GambleBlocker.getInstance() to get an instance of this class.")
                }
                t.getInstance = function() {
                    return t.instance || (t.instance = new t), t.instance
                };
                var a = t.prototype;
                return a.getSessArray = function() {
                    const t = sessionStorage.getItem(this.historyNavs);
                    return t ? JSON.parse(t) : []
                }, a.saveArrayToSess = function(t) {
                    sessionStorage.setItem(this.historyNavs, JSON.stringify(t))
                }, a.appendSessArr = function(t) {
                    const a = this.getSessArray(this.historyNavs);
                    a.push(t), this.saveArrayToSess(a)
                }, a.isGamblingRoute = function() {
                    var t, a;
                    return (null === (t = this.getPreviousRoute) || void 0 === t ? void 0 : t.includes("/gambling/")) || (null === (a = this.getPreviousRoute) || void 0 === a ? void 0 : a.includes("/gambling-guides/")) || this.blockListGamble.some((t => {
                        var a;
                        return null === (a = this.getPreviousRoute) || void 0 === a ? void 0 : a.endsWith(t)
                    }))
                }, a.isGamblingPath = function(t) {
                    return this.blockListGamble.some((a => t.includes(a)))
                }, a.isExchangeRoute = function() {
                    var t;
                    return (null === (t = this.getPreviousRoute) || void 0 === t ? void 0 : t.includes("/exchanges/")) || this.blockListExchange.some((t => {
                        var a;
                        return null === (a = this.getPreviousRoute) || void 0 === a ? void 0 : a.endsWith(t)
                    }))
                }, a.isExchangePath = function(t) {
                    return this.blockListExchange.some((a => t.includes(a)))
                }, (0, h.A)(t, [{
                    key: "setPreventNav",
                    set: function(t) {
                        sessionStorage.setItem(this.preventNavKey, JSON.stringify(t))
                    }
                }, {
                    key: "getPreventNav",
                    get: function() {
                        const t = sessionStorage.getItem(this.preventNavKey);
                        return t ? JSON.parse(t) : null
                    }
                }, {
                    key: "setPreviousRoute",
                    set: function(t) {
                        sessionStorage.setItem(this.previousRouteKey, JSON.stringify(t))
                    }
                }, {
                    key: "getPreviousRoute",
                    get: function() {
                        const t = sessionStorage.getItem(this.previousRouteKey);
                        return t ? JSON.parse(t) : null
                    }
                }, {
                    key: "setSeen",
                    set: function(t) {
                        sessionStorage.setItem(this.seenKey, JSON.stringify(t))
                    }
                }, {
                    key: "getSeen",
                    get: function() {
                        const t = sessionStorage.getItem(this.seenKey);
                        return !!t && JSON.parse(t)
                    }
                }]), t
            }();
            ma.instance = void 0;
            const la = ma.getInstance(),
                pa = t => {
                    let {
                        location: a
                    } = t;
                    la.getSessArray().at(-2) && (la.setPreviousRoute = la.getSessArray().at(-2)), !la.isGamblingRoute() && !la.isExchangeRoute() || a.hash || (la.setPreventNav = !0)
                },
                da = t => {
                    let {
                        location: a,
                        prevLocation: e
                    } = t;
                    if (la.appendSessArr(a.pathname), (la.isGamblingPath(a.pathname) || la.isExchangePath(a.pathname)) && la.getPreventNav && !la.getSeen && !a.hash && (!e || !e.hash)) {
                        const t = new CustomEvent("gambleB-routeUpdate", {
                            detail: {
                                path: a.pathname
                            }
                        });
                        window.dispatchEvent(t)
                    }
                },
                ua = () => {
                    var t;
                    null !== (t = window) && void 0 !== t && t.location && window.location.reload()
                },
                ba = t => {
                    let {
                        routerProps: {
                            location: a
                        }
                    } = t;
                    return "/manage-account/" !== a.pathname
                },
                Pa = () => {
                    const t = document.createElement("script");
                    t.type = "text/javascript", t.id = "cookieyes", t.src = "https://cdn-cookieyes.com/client_data/917e20a418c86c19cae72b7a/script.js", t.async = !0, document.head.appendChild(t);
                    const a = document.createElement("meta");
                    a.setAttribute("name", "grow-ad-verification"), a.setAttribute("content", "DzmN6nIDk3FIpjoDeP3TZttYJ7RO6-kL5qPlfSV-SCklmTGOiS"), document.head.appendChild(a)
                }
        },
        18710: function(t, a) {
            "use strict";
            a.onRouteUpdate = function(t, a) {
                var e = t.location;
                if (void 0 === a && (a = {}), "function" != typeof gtag) return null;
                var h = a.pluginConfig || {};
                if (e && void 0 !== window.excludeGtagPaths && window.excludeGtagPaths.some((function(t) {
                        return t.test(e.pathname)
                    }))) return null;
                var i = function() {
                        var t = e ? e.pathname + e.search + e.hash : void 0;
                        window.gtag("event", "page_view", {
                            page_path: t
                        })
                    },
                    r = h.delayOnRouteUpdate,
                    n = void 0 === r ? 0 : r;
                return "requestAnimationFrame" in window ? requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        return setTimeout(i, n)
                    }))
                })) : setTimeout(i, 32 + n), null
            }
        },
        27914: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                onRouteUpdate: function() {
                    return h
                }
            });
            e(55268), e(24598);
            const h = function(t, a) {
                let {
                    location: e
                } = t
            }
        },
        24598: function(t, a, e) {
            "use strict";
            var h = e(55268)
        },
        62426: function(t, a, e) {
            "use strict";

            function h(t) {
                if ("function" != typeof WeakMap) return null;
                var a = new WeakMap,
                    e = new WeakMap;
                return (h = function(t) {
                    return t ? e : a
                })(t)
            }
            var i = /(confirmation|invite|recovery|email_change)_token=([^&]+)/,
                r = /error=access_denied&error_description=403/,
                n = /access_token=/;
            a.onInitialClientRender = function(t, a) {
                var s = a.enableIdentityWidget,
                    c = void 0 === s || s,
                    o = a.publicPath,
                    g = void 0 === o ? "admin" : o,
                    m = (document.location.hash || "").replace(/^#\/?/, "");
                c && (i.test(m) || r.test(m) || n.test(m)) && Promise.resolve().then((function() {
                    return function(t, a) {
                        if (!a && t && t.__esModule) return t;
                        if (null === t || "object" != typeof t && "function" != typeof t) return {
                            default: t
                        };
                        var e = h(a);
                        if (e && e.has(t)) return e.get(t);
                        var i = {},
                            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var n in t)
                            if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
                                var s = r ? Object.getOwnPropertyDescriptor(t, n) : null;
                                s && (s.get || s.set) ? Object.defineProperty(i, n, s) : i[n] = t[n]
                            }
                        return i.default = t, e && e.set(t, i), i
                    }(e(77827))
                })).then((function(t) {
                    var a = t.default;
                    a.on("init", (function(t) {
                        t || a.on("login", (function() {
                            document.location.href = "/" + g + "/"
                        }))
                    })), a.init()
                }))
            }
        },
        52039: function(t, a, e) {
            "use strict";
            var h = e(24994)(e(96540)),
                i = e(8711);
            a.wrapRootElement = function(t, a) {
                var e = t.element;
                return h.default.createElement(i.StyleSheetManager, {
                    disableVendorPrefixes: !0 === (null == a ? void 0 : a.disableVendorPrefixes)
                }, e)
            }
        },
        37688: function(t, a) {
            "use strict";
            a.DEFAULT_OPTIONS = {
                maxWidth: 650,
                wrapperStyle: "",
                backgroundColor: "white",
                linkImagesToOriginal: !0,
                showCaptions: !1,
                markdownCaptions: !1,
                withWebp: !1,
                withAvif: !1,
                tracedSVG: !1,
                loading: "lazy",
                decoding: "async",
                disableBgImageOnAlpha: !1,
                disableBgImage: !1
            }, a.EMPTY_ALT = "GATSBY_EMPTY_ALT", a.imageClass = "gatsby-resp-image-image", a.imageWrapperClass = "gatsby-resp-image-wrapper", a.imageBackgroundClass = "gatsby-resp-image-background-image"
        },
        75616: function(t, a, e) {
            "use strict";
            var h = e(37688),
                i = h.DEFAULT_OPTIONS,
                r = h.imageClass,
                n = h.imageBackgroundClass,
                s = h.imageWrapperClass;
            a.onRouteUpdate = function(t, a) {
                for (var e = Object.assign({}, i, a), h = document.querySelectorAll("." + s), c = function() {
                        var t = h[o],
                            a = t.querySelector("." + n),
                            i = t.querySelector("." + r),
                            s = function() {
                                a.style.transition = "opacity 0.5s 0.5s", i.style.transition = "opacity 0.5s", c()
                            },
                            c = function t() {
                                a.style.opacity = 0, i.style.opacity = 1, i.style.color = "inherit", i.style.boxShadow = "inset 0px 0px 0px 400px " + e.backgroundColor, i.removeEventListener("load", s), i.removeEventListener("error", t)
                            };
                        i.style.opacity = 0, i.addEventListener("load", s), i.addEventListener("error", c), i.complete && c()
                    }, o = 0; o < h.length; o++) c()
            }
        },
        4146: function(t, a, e) {
            "use strict";
            var h = e(44363),
                i = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                n = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function c(t) {
                return h.isMemo(t) ? n : s[t.$$typeof] || i
            }
            s[h.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[h.Memo] = n;
            var o = Object.defineProperty,
                g = Object.getOwnPropertyNames,
                m = Object.getOwnPropertySymbols,
                l = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                d = Object.prototype;
            t.exports = function t(a, e, h) {
                if ("string" != typeof e) {
                    if (d) {
                        var i = p(e);
                        i && i !== d && t(a, i, h)
                    }
                    var n = g(e);
                    m && (n = n.concat(m(e)));
                    for (var s = c(a), u = c(e), b = 0; b < n.length; ++b) {
                        var P = n[b];
                        if (!(r[P] || h && h[P] || u && u[P] || s && s[P])) {
                            var w = l(e, P);
                            try {
                                o(a, P, w)
                            } catch (f) {}
                        }
                    }
                }
                return a
            }
        },
        20311: function(t) {
            "use strict";
            t.exports = function(t, a, e, h, i, r, n, s) {
                if (!t) {
                    var c;
                    if (void 0 === a) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var o = [e, h, i, r, n, s],
                            g = 0;
                        (c = new Error(a.replace(/%s/g, (function() {
                            return o[g++]
                        })))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
        },
        22799: function(t, a) {
            "use strict";
            var e = "function" == typeof Symbol && Symbol.for,
                h = e ? Symbol.for("react.element") : 60103,
                i = e ? Symbol.for("react.portal") : 60106,
                r = e ? Symbol.for("react.fragment") : 60107,
                n = e ? Symbol.for("react.strict_mode") : 60108,
                s = e ? Symbol.for("react.profiler") : 60114,
                c = e ? Symbol.for("react.provider") : 60109,
                o = e ? Symbol.for("react.context") : 60110,
                g = e ? Symbol.for("react.async_mode") : 60111,
                m = e ? Symbol.for("react.concurrent_mode") : 60111,
                l = e ? Symbol.for("react.forward_ref") : 60112,
                p = e ? Symbol.for("react.suspense") : 60113,
                d = e ? Symbol.for("react.suspense_list") : 60120,
                u = e ? Symbol.for("react.memo") : 60115,
                b = e ? Symbol.for("react.lazy") : 60116,
                P = e ? Symbol.for("react.block") : 60121,
                w = e ? Symbol.for("react.fundamental") : 60117,
                f = e ? Symbol.for("react.responder") : 60118,
                v = e ? Symbol.for("react.scope") : 60119;

            function y(t) {
                if ("object" == typeof t && null !== t) {
                    var a = t.$$typeof;
                    switch (a) {
                        case h:
                            switch (t = t.type) {
                                case g:
                                case m:
                                case r:
                                case s:
                                case n:
                                case p:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case o:
                                        case l:
                                        case b:
                                        case u:
                                        case c:
                                            return t;
                                        default:
                                            return a
                                    }
                            }
                        case i:
                            return a
                    }
                }
            }

            function x(t) {
                return y(t) === m
            }
            a.AsyncMode = g, a.ConcurrentMode = m, a.ContextConsumer = o, a.ContextProvider = c, a.Element = h, a.ForwardRef = l, a.Fragment = r, a.Lazy = b, a.Memo = u, a.Portal = i, a.Profiler = s, a.StrictMode = n, a.Suspense = p, a.isAsyncMode = function(t) {
                return x(t) || y(t) === g
            }, a.isConcurrentMode = x, a.isContextConsumer = function(t) {
                return y(t) === o
            }, a.isContextProvider = function(t) {
                return y(t) === c
            }, a.isElement = function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === h
            }, a.isForwardRef = function(t) {
                return y(t) === l
            }, a.isFragment = function(t) {
                return y(t) === r
            }, a.isLazy = function(t) {
                return y(t) === b
            }, a.isMemo = function(t) {
                return y(t) === u
            }, a.isPortal = function(t) {
                return y(t) === i
            }, a.isProfiler = function(t) {
                return y(t) === s
            }, a.isStrictMode = function(t) {
                return y(t) === n
            }, a.isSuspense = function(t) {
                return y(t) === p
            }, a.isValidElementType = function(t) {
                return "string" == typeof t || "function" == typeof t || t === r || t === m || t === s || t === n || t === p || t === d || "object" == typeof t && null !== t && (t.$$typeof === b || t.$$typeof === u || t.$$typeof === c || t.$$typeof === o || t.$$typeof === l || t.$$typeof === w || t.$$typeof === f || t.$$typeof === v || t.$$typeof === P)
            }, a.typeOf = y
        },
        44363: function(t, a, e) {
            "use strict";
            t.exports = e(22799)
        },
        28989: function(t, a) {
            "use strict";
            var e, h = Symbol.for("react.element"),
                i = Symbol.for("react.portal"),
                r = Symbol.for("react.fragment"),
                n = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                c = Symbol.for("react.provider"),
                o = Symbol.for("react.context"),
                g = Symbol.for("react.server_context"),
                m = Symbol.for("react.forward_ref"),
                l = Symbol.for("react.suspense"),
                p = Symbol.for("react.suspense_list"),
                d = Symbol.for("react.memo"),
                u = Symbol.for("react.lazy"),
                b = Symbol.for("react.offscreen");

            function P(t) {
                if ("object" == typeof t && null !== t) {
                    var a = t.$$typeof;
                    switch (a) {
                        case h:
                            switch (t = t.type) {
                                case r:
                                case s:
                                case n:
                                case l:
                                case p:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case g:
                                        case o:
                                        case m:
                                        case u:
                                        case d:
                                        case c:
                                            return t;
                                        default:
                                            return a
                                    }
                            }
                        case i:
                            return a
                    }
                }
            }
            e = Symbol.for("react.module.reference")
        },
        54737: function(t, a, e) {
            "use strict";
            e(28989)
        },
        60207: function(t, a, e) {
            "use strict";
            var h = e(96540),
                i = {
                    stream: !0
                },
                r = new Map,
                n = Symbol.for("react.element"),
                s = Symbol.for("react.lazy"),
                c = Symbol.for("react.default_value"),
                o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;

            function g(t, a, e) {
                this._status = t, this._value = a, this._response = e
            }

            function m(t) {
                switch (t._status) {
                    case 3:
                        return t._value;
                    case 1:
                        var a = JSON.parse(t._value, t._response._fromJSON);
                        return t._status = 3, t._value = a;
                    case 2:
                        for (var h = (a = t._value).chunks, i = 0; i < h.length; i++) {
                            var n = r.get(h[i]);
                            if (null !== n) throw n
                        }
                        return h = e(a.id), a = "*" === a.name ? h : "" === a.name ? h.__esModule ? h.default : h : h[a.name], t._status = 3, t._value = a;
                    case 0:
                        throw t;
                    default:
                        throw t._value
                }
            }

            function l() {
                return m(P(this, 0))
            }

            function p(t, a) {
                return new g(3, a, t)
            }

            function d(t) {
                if (null !== t)
                    for (var a = 0; a < t.length; a++)(0, t[a])()
            }

            function u(t, a) {
                if (0 === t._status) {
                    var e = t._value;
                    t._status = 4, t._value = a, d(e)
                }
            }

            function b(t, a) {
                t._chunks.forEach((function(t) {
                    u(t, a)
                }))
            }

            function P(t, a) {
                var e = t._chunks,
                    h = e.get(a);
                return h || (h = new g(0, null, t), e.set(a, h)), h
            }

            function w(t) {
                b(t, Error("Connection closed."))
            }

            function f(t, a) {
                if ("" !== a) {
                    var i = a[0],
                        n = a.indexOf(":", 1),
                        s = parseInt(a.substring(1, n), 16);
                    switch (n = a.substring(n + 1), i) {
                        case "J":
                            (i = (a = t._chunks).get(s)) ? 0 === i._status && (t = i._value, i._status = 1, i._value = n, d(t)): a.set(s, new g(1, n, t));
                            break;
                        case "M":
                            i = (a = t._chunks).get(s), n = JSON.parse(n, t._fromJSON);
                            var m = t._bundlerConfig;
                            m = (n = m ? m[n.id][n.name] : n).chunks;
                            for (var l = 0; l < m.length; l++) {
                                var b = m[l];
                                if (void 0 === r.get(b)) {
                                    var P = e.e(b),
                                        w = r.set.bind(r, b, null),
                                        f = r.set.bind(r, b);
                                    P.then(w, f), r.set(b, P)
                                }
                            }
                            i ? 0 === i._status && (t = i._value, i._status = 2, i._value = n, d(t)) : a.set(s, new g(2, n, t));
                            break;
                        case "P":
                            t._chunks.set(s, p(t, function(t) {
                                return o[t] || (o[t] = h.createServerContext(t, c)), o[t]
                            }(n).Provider));
                            break;
                        case "S":
                            i = JSON.parse(n), t._chunks.set(s, p(t, Symbol.for(i)));
                            break;
                        case "E":
                            a = JSON.parse(n), (i = Error(a.message)).stack = a.stack, (n = (a = t._chunks).get(s)) ? u(n, i) : a.set(s, new g(4, i, t));
                            break;
                        default:
                            throw Error("Error parsing the data. It's probably an error code or network corruption.")
                    }
                }
            }

            function v(t) {
                return function(a, e) {
                    return "string" == typeof e ? function(t, a, e) {
                        switch (e[0]) {
                            case "$":
                                return "$" === e ? n : "$" === e[1] || "@" === e[1] ? e.substring(1) : m(t = P(t, parseInt(e.substring(1), 16)));
                            case "@":
                                return t = P(t, parseInt(e.substring(1), 16)), {
                                    $$typeof: s,
                                    _payload: t,
                                    _init: m
                                }
                        }
                        return e
                    }(t, 0, e) : "object" == typeof e && null !== e ? e[0] === n ? {
                        $$typeof: n,
                        type: e[1],
                        key: e[2],
                        ref: null,
                        props: e[3],
                        _owner: null
                    } : e : e
                }
            }

            function y(t) {
                var a = new TextDecoder;
                return (t = {
                    _bundlerConfig: t,
                    _chunks: new Map,
                    readRoot: l,
                    _partialRow: "",
                    _stringDecoder: a
                })._fromJSON = v(t), t
            }

            function x(t, a) {
                function e(a) {
                    b(t, a)
                }
                var h = a.getReader();
                h.read().then((function a(r) {
                    var n = r.value;
                    if (!r.done) {
                        r = n, n = t._stringDecoder;
                        for (var s = r.indexOf(10); - 1 < s;) {
                            var c = t._partialRow,
                                o = r.subarray(0, s);
                            o = n.decode(o), f(t, c + o), t._partialRow = "", s = (r = r.subarray(s + 1)).indexOf(10)
                        }
                        return t._partialRow += n.decode(r, i), h.read().then(a, e)
                    }
                    w(t)
                }), e)
            }
            g.prototype.then = function(t) {
                0 === this._status ? (null === this._value && (this._value = []), this._value.push(t)) : t()
            }, a.createFromReadableStream = function(t, a) {
                return x(a = y(a && a.moduleMap ? a.moduleMap : null), t), a
            }
        },
        58163: function(t, a, e) {
            "use strict";
            t.exports = e(60207)
        },
        2833: function(t) {
            t.exports = function(t, a, e, h) {
                var i = e ? e.call(h, t, a) : void 0;
                if (void 0 !== i) return !!i;
                if (t === a) return !0;
                if ("object" != typeof t || !t || "object" != typeof a || !a) return !1;
                var r = Object.keys(t),
                    n = Object.keys(a);
                if (r.length !== n.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(a), c = 0; c < r.length; c++) {
                    var o = r[c];
                    if (!s(o)) return !1;
                    var g = t[o],
                        m = a[o];
                    if (!1 === (i = e ? e.call(h, g, m, o) : void 0) || void 0 === i && g !== m) return !1
                }
                return !0
            }
        },
        8711: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                ServerStyleSheet: function() {
                    return Ht
                },
                StyleSheetConsumer: function() {
                    return rt
                },
                StyleSheetContext: function() {
                    return it
                },
                StyleSheetManager: function() {
                    return mt
                },
                ThemeConsumer: function() {
                    return Tt
                },
                ThemeContext: function() {
                    return Rt
                },
                ThemeProvider: function() {
                    return qt
                },
                __PRIVATE__: function() {
                    return Wt
                },
                createGlobalStyle: function() {
                    return Lt
                },
                css: function() {
                    return yt
                },
                default: function() {
                    return Bt
                },
                isStyledComponent: function() {
                    return y
                },
                keyframes: function() {
                    return $t
                },
                useTheme: function() {
                    return Ut
                },
                version: function() {
                    return z
                },
                withTheme: function() {
                    return Ft
                }
            });
            var h = e(44363),
                i = e(96540),
                r = e(2833),
                n = e.n(r);
            var s = function(t) {
                    function a(t, h, c, o, l) {
                        for (var p, d, u, b, v, x = 0, z = 0, k = 0, j = 0, S = 0, R = 0, q = u = p = 0, I = 0, D = 0, M = 0, L = 0, $ = c.length, H = $ - 1, F = "", U = "", W = "", B = ""; I < $;) {
                            if (d = c.charCodeAt(I), I === H && 0 !== z + j + k + x && (0 !== z && (d = 47 === z ? 10 : 47), j = k = x = 0, $++, H++), 0 === z + j + k + x) {
                                if (I === H && (0 < D && (F = F.replace(m, "")), 0 < F.trim().length)) {
                                    switch (d) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            F += c.charAt(I)
                                    }
                                    d = 59
                                }
                                switch (d) {
                                    case 123:
                                        for (p = (F = F.trim()).charCodeAt(0), u = 1, L = ++I; I < $;) {
                                            switch (d = c.charCodeAt(I)) {
                                                case 123:
                                                    u++;
                                                    break;
                                                case 125:
                                                    u--;
                                                    break;
                                                case 47:
                                                    switch (d = c.charCodeAt(I + 1)) {
                                                        case 42:
                                                        case 47:
                                                            t: {
                                                                for (q = I + 1; q < H; ++q) switch (c.charCodeAt(q)) {
                                                                    case 47:
                                                                        if (42 === d && 42 === c.charCodeAt(q - 1) && I + 2 !== q) {
                                                                            I = q + 1;
                                                                            break t
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === d) {
                                                                            I = q + 1;
                                                                            break t
                                                                        }
                                                                }
                                                                I = q
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    d++;
                                                case 40:
                                                    d++;
                                                case 34:
                                                case 39:
                                                    for (; I++ < H && c.charCodeAt(I) !== d;);
                                            }
                                            if (0 === u) break;
                                            I++
                                        }
                                        if (u = c.substring(L, I), 0 === p && (p = (F = F.replace(g, "").trim()).charCodeAt(0)), 64 === p) {
                                            switch (0 < D && (F = F.replace(m, "")), d = F.charCodeAt(1)) {
                                                case 100:
                                                case 109:
                                                case 115:
                                                case 45:
                                                    D = h;
                                                    break;
                                                default:
                                                    D = A
                                            }
                                            if (L = (u = a(h, D, u, d, l + 1)).length, 0 < T && (v = s(3, u, D = e(A, F, M), h, _, E, L, d, l, o), F = D.join(""), void 0 !== v && 0 === (L = (u = v.trim()).length) && (d = 0, u = "")), 0 < L) switch (d) {
                                                case 115:
                                                    F = F.replace(y, n);
                                                case 100:
                                                case 109:
                                                case 45:
                                                    u = F + "{" + u + "}";
                                                    break;
                                                case 107:
                                                    u = (F = F.replace(P, "$1 $2")) + "{" + u + "}", u = 1 === O || 2 === O && r("@" + u, 3) ? "@-webkit-" + u + "@" + u : "@" + u;
                                                    break;
                                                default:
                                                    u = F + u, 112 === o && (U += u, u = "")
                                            } else u = ""
                                        } else u = a(h, e(h, F, M), u, o, l + 1);
                                        W += u, u = M = D = q = p = 0, F = "", d = c.charCodeAt(++I);
                                        break;
                                    case 125:
                                    case 59:
                                        if (1 < (L = (F = (0 < D ? F.replace(m, "") : F).trim()).length)) switch (0 === q && (p = F.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (L = (F = F.replace(" ", ":")).length), 0 < T && void 0 !== (v = s(1, F, h, t, _, E, U.length, o, l, o)) && 0 === (L = (F = v.trim()).length) && (F = "\0\0"), p = F.charCodeAt(0), d = F.charCodeAt(1), p) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === d || 99 === d) {
                                                    B += F + c.charAt(I);
                                                    break
                                                }
                                            default:
                                                58 !== F.charCodeAt(L - 1) && (U += i(F, p, d, F.charCodeAt(2)))
                                        }
                                        M = D = q = p = 0, F = "", d = c.charCodeAt(++I)
                                }
                            }
                            switch (d) {
                                case 13:
                                case 10:
                                    47 === z ? z = 0 : 0 === 1 + p && 107 !== o && 0 < F.length && (D = 1, F += "\0"), 0 < T * N && s(0, F, h, t, _, E, U.length, o, l, o), E = 1, _++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === z + j + k + x) {
                                        E++;
                                        break
                                    }
                                default:
                                    switch (E++, b = c.charAt(I), d) {
                                        case 9:
                                        case 32:
                                            if (0 === j + x + z) switch (S) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    b = "";
                                                    break;
                                                default:
                                                    32 !== d && (b = " ")
                                            }
                                            break;
                                        case 0:
                                            b = "\\0";
                                            break;
                                        case 12:
                                            b = "\\f";
                                            break;
                                        case 11:
                                            b = "\\v";
                                            break;
                                        case 38:
                                            0 === j + z + x && (D = M = 1, b = "\f" + b);
                                            break;
                                        case 108:
                                            if (0 === j + z + x + C && 0 < q) switch (I - q) {
                                                case 2:
                                                    112 === S && 58 === c.charCodeAt(I - 3) && (C = S);
                                                case 8:
                                                    111 === R && (C = R)
                                            }
                                            break;
                                        case 58:
                                            0 === j + z + x && (q = I);
                                            break;
                                        case 44:
                                            0 === z + k + j + x && (D = 1, b += "\r");
                                            break;
                                        case 34:
                                        case 39:
                                            0 === z && (j = j === d ? 0 : 0 === j ? d : j);
                                            break;
                                        case 91:
                                            0 === j + z + k && x++;
                                            break;
                                        case 93:
                                            0 === j + z + k && x--;
                                            break;
                                        case 41:
                                            0 === j + z + x && k--;
                                            break;
                                        case 40:
                                            if (0 === j + z + x) {
                                                if (0 === p)
                                                    if (2 * S + 3 * R == 533);
                                                    else p = 1;
                                                k++
                                            }
                                            break;
                                        case 64:
                                            0 === z + k + j + x + q + u && (u = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < j + x + k)) switch (z) {
                                                case 0:
                                                    switch (2 * d + 3 * c.charCodeAt(I + 1)) {
                                                        case 235:
                                                            z = 47;
                                                            break;
                                                        case 220:
                                                            L = I, z = 42
                                                    }
                                                    break;
                                                case 42:
                                                    47 === d && 42 === S && L + 2 !== I && (33 === c.charCodeAt(L + 2) && (U += c.substring(L, I + 1)), b = "", z = 0)
                                            }
                                    }
                                    0 === z && (F += b)
                            }
                            R = S, S = d, I++
                        }
                        if (0 < (L = U.length)) {
                            if (D = h, 0 < T && (void 0 !== (v = s(2, U, D, t, _, E, L, o, l, o)) && 0 === (U = v).length)) return B + U + W;
                            if (U = D.join(",") + "{" + U + "}", 0 != O * C) {
                                switch (2 !== O || r(U, 2) || (C = 0), C) {
                                    case 111:
                                        U = U.replace(f, ":-moz-$1") + U;
                                        break;
                                    case 112:
                                        U = U.replace(w, "::-webkit-input-$1") + U.replace(w, "::-moz-$1") + U.replace(w, ":-ms-input-$1") + U
                                }
                                C = 0
                            }
                        }
                        return B + U + W
                    }

                    function e(t, a, e) {
                        var i = a.trim().split(u);
                        a = i;
                        var r = i.length,
                            n = t.length;
                        switch (n) {
                            case 0:
                            case 1:
                                var s = 0;
                                for (t = 0 === n ? "" : t[0] + " "; s < r; ++s) a[s] = h(t, a[s], e).trim();
                                break;
                            default:
                                var c = s = 0;
                                for (a = []; s < r; ++s)
                                    for (var o = 0; o < n; ++o) a[c++] = h(t[o] + " ", i[s], e).trim()
                        }
                        return a
                    }

                    function h(t, a, e) {
                        var h = a.charCodeAt(0);
                        switch (33 > h && (h = (a = a.trim()).charCodeAt(0)), h) {
                            case 38:
                                return a.replace(b, "$1" + t.trim());
                            case 58:
                                return t.trim() + a.replace(b, "$1" + t.trim());
                            default:
                                if (0 < 1 * e && 0 < a.indexOf("\f")) return a.replace(b, (58 === t.charCodeAt(0) ? "" : "$1") + t.trim())
                        }
                        return t + a
                    }

                    function i(t, a, e, h) {
                        var n = t + ";",
                            s = 2 * a + 3 * e + 4 * h;
                        if (944 === s) {
                            t = n.indexOf(":", 9) + 1;
                            var c = n.substring(t, n.length - 1).trim();
                            return c = n.substring(0, t).trim() + c + ";", 1 === O || 2 === O && r(c, 1) ? "-webkit-" + c + c : c
                        }
                        if (0 === O || 2 === O && !r(n, 1)) return n;
                        switch (s) {
                            case 1015:
                                return 97 === n.charCodeAt(10) ? "-webkit-" + n + n : n;
                            case 951:
                                return 116 === n.charCodeAt(3) ? "-webkit-" + n + n : n;
                            case 963:
                                return 110 === n.charCodeAt(5) ? "-webkit-" + n + n : n;
                            case 1009:
                                if (100 !== n.charCodeAt(4)) break;
                            case 969:
                            case 942:
                                return "-webkit-" + n + n;
                            case 978:
                                return "-webkit-" + n + "-moz-" + n + n;
                            case 1019:
                            case 983:
                                return "-webkit-" + n + "-moz-" + n + "-ms-" + n + n;
                            case 883:
                                if (45 === n.charCodeAt(8)) return "-webkit-" + n + n;
                                if (0 < n.indexOf("image-set(", 11)) return n.replace(S, "$1-webkit-$2") + n;
                                break;
                            case 932:
                                if (45 === n.charCodeAt(4)) switch (n.charCodeAt(5)) {
                                    case 103:
                                        return "-webkit-box-" + n.replace("-grow", "") + "-webkit-" + n + "-ms-" + n.replace("grow", "positive") + n;
                                    case 115:
                                        return "-webkit-" + n + "-ms-" + n.replace("shrink", "negative") + n;
                                    case 98:
                                        return "-webkit-" + n + "-ms-" + n.replace("basis", "preferred-size") + n
                                }
                                return "-webkit-" + n + "-ms-" + n + n;
                            case 964:
                                return "-webkit-" + n + "-ms-flex-" + n + n;
                            case 1023:
                                if (99 !== n.charCodeAt(8)) break;
                                return "-webkit-box-pack" + (c = n.substring(n.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + n + "-ms-flex-pack" + c + n;
                            case 1005:
                                return p.test(n) ? n.replace(l, ":-webkit-") + n.replace(l, ":-moz-") + n : n;
                            case 1e3:
                                switch (a = (c = n.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(a)) {
                                    case 226:
                                        c = n.replace(v, "tb");
                                        break;
                                    case 232:
                                        c = n.replace(v, "tb-rl");
                                        break;
                                    case 220:
                                        c = n.replace(v, "lr");
                                        break;
                                    default:
                                        return n
                                }
                                return "-webkit-" + n + "-ms-" + c + n;
                            case 1017:
                                if (-1 === n.indexOf("sticky", 9)) break;
                            case 975:
                                switch (a = (n = t).length - 10, s = (c = (33 === n.charCodeAt(a) ? n.substring(0, a) : n).substring(t.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                                    case 203:
                                        if (111 > c.charCodeAt(8)) break;
                                    case 115:
                                        n = n.replace(c, "-webkit-" + c) + ";" + n;
                                        break;
                                    case 207:
                                    case 102:
                                        n = n.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + n.replace(c, "-webkit-" + c) + ";" + n.replace(c, "-ms-" + c + "box") + ";" + n
                                }
                                return n + ";";
                            case 938:
                                if (45 === n.charCodeAt(5)) switch (n.charCodeAt(6)) {
                                    case 105:
                                        return c = n.replace("-items", ""), "-webkit-" + n + "-webkit-box-" + c + "-ms-flex-" + c + n;
                                    case 115:
                                        return "-webkit-" + n + "-ms-flex-item-" + n.replace(z, "") + n;
                                    default:
                                        return "-webkit-" + n + "-ms-flex-line-pack" + n.replace("align-content", "").replace(z, "") + n
                                }
                                break;
                            case 973:
                            case 989:
                                if (45 !== n.charCodeAt(3) || 122 === n.charCodeAt(4)) break;
                            case 931:
                            case 953:
                                if (!0 === j.test(t)) return 115 === (c = t.substring(t.indexOf(":") + 1)).charCodeAt(0) ? i(t.replace("stretch", "fill-available"), a, e, h).replace(":fill-available", ":stretch") : n.replace(c, "-webkit-" + c) + n.replace(c, "-moz-" + c.replace("fill-", "")) + n;
                                break;
                            case 962:
                                if (n = "-webkit-" + n + (102 === n.charCodeAt(5) ? "-ms-" + n : "") + n, 211 === e + h && 105 === n.charCodeAt(13) && 0 < n.indexOf("transform", 10)) return n.substring(0, n.indexOf(";", 27) + 1).replace(d, "$1-webkit-$2") + n
                        }
                        return n
                    }

                    function r(t, a) {
                        var e = t.indexOf(1 === a ? ":" : "{"),
                            h = t.substring(0, 3 !== a ? e : 10);
                        return e = t.substring(e + 1, t.length - 1), q(2 !== a ? h : h.replace(k, "$1"), e, a)
                    }

                    function n(t, a) {
                        var e = i(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
                        return e !== a + ";" ? e.replace(x, " or ($1)").substring(4) : "(" + a + ")"
                    }

                    function s(t, a, e, h, i, r, n, s, c, g) {
                        for (var m, l = 0, p = a; l < T; ++l) switch (m = R[l].call(o, t, p, e, h, i, r, n, s, c, g)) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                p = m
                        }
                        if (p !== a) return p
                    }

                    function c(t) {
                        return void 0 !== (t = t.prefix) && (q = null, t ? "function" != typeof t ? O = 1 : (O = 2, q = t) : O = 0), c
                    }

                    function o(t, e) {
                        var h = t;
                        if (33 > h.charCodeAt(0) && (h = h.trim()), h = [h], 0 < T) {
                            var i = s(-1, e, h, h, _, E, 0, 0, 0, 0);
                            void 0 !== i && "string" == typeof i && (e = i)
                        }
                        var r = a(A, h, e, 0, 0);
                        return 0 < T && (void 0 !== (i = s(-2, r, h, h, _, E, r.length, 0, 0, 0)) && (r = i)), "", C = 0, E = _ = 1, r
                    }
                    var g = /^\0+/g,
                        m = /[\0\r\f]/g,
                        l = /: */g,
                        p = /zoo|gra/,
                        d = /([,: ])(transform)/g,
                        u = /,\r+?/g,
                        b = /([\t\r\n ])*\f?&/g,
                        P = /@(k\w+)\s*(\S*)\s*/,
                        w = /::(place)/g,
                        f = /:(read-only)/g,
                        v = /[svh]\w+-[tblr]{2}/,
                        y = /\(\s*(.*)\s*\)/g,
                        x = /([\s\S]*?);/g,
                        z = /-self|flex-/g,
                        k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                        j = /stretch|:\s*\w+\-(?:conte|avail)/,
                        S = /([^-])(image-set\()/,
                        E = 1,
                        _ = 1,
                        C = 0,
                        O = 1,
                        A = [],
                        R = [],
                        T = 0,
                        q = null,
                        N = 0;
                    return o.use = function t(a) {
                        switch (a) {
                            case void 0:
                            case null:
                                T = R.length = 0;
                                break;
                            default:
                                if ("function" == typeof a) R[T++] = a;
                                else if ("object" == typeof a)
                                    for (var e = 0, h = a.length; e < h; ++e) t(a[e]);
                                else N = 0 | !!a
                        }
                        return t
                    }, o.set = c, void 0 !== t && c(t), o
                },
                c = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                o = e(36289),
                g = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                m = (0, o.A)((function(t) {
                    return g.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
                })),
                l = e(4146),
                p = e.n(l);

            function d() {
                return (d = Object.assign || function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h])
                    }
                    return t
                }).apply(this, arguments)
            }
            var u = function(t, a) {
                    for (var e = [t[0]], h = 0, i = a.length; h < i; h += 1) e.push(a[h], t[h + 1]);
                    return e
                },
                b = function(t) {
                    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, h.typeOf)(t)
                },
                P = Object.freeze([]),
                w = Object.freeze({});

            function f(t) {
                return "function" == typeof t
            }

            function v(t) {
                return t.displayName || t.name || "Component"
            }

            function y(t) {
                return t && "string" == typeof t.styledComponentId
            }
            var x = "undefined" != typeof process && void 0 !== {} && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled",
                z = "5.3.11",
                k = "undefined" != typeof window && "HTMLElement" in window,
                j = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {} && (void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && "" !== {}.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== {}.SC_DISABLE_SPEEDY && "" !== {}.SC_DISABLE_SPEEDY && ("false" !== {}.SC_DISABLE_SPEEDY && {}.SC_DISABLE_SPEEDY))),
                S = {};

            function E(t) {
                for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (e.length > 0 ? " Args: " + e.join(", ") : ""))
            }
            var _ = function() {
                    function t(t) {
                        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t
                    }
                    var a = t.prototype;
                    return a.indexOfGroup = function(t) {
                        for (var a = 0, e = 0; e < t; e++) a += this.groupSizes[e];
                        return a
                    }, a.insertRules = function(t, a) {
                        if (t >= this.groupSizes.length) {
                            for (var e = this.groupSizes, h = e.length, i = h; t >= i;)(i <<= 1) < 0 && E(16, "" + t);
                            this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
                            for (var r = h; r < i; r++) this.groupSizes[r] = 0
                        }
                        for (var n = this.indexOfGroup(t + 1), s = 0, c = a.length; s < c; s++) this.tag.insertRule(n, a[s]) && (this.groupSizes[t]++, n++)
                    }, a.clearGroup = function(t) {
                        if (t < this.length) {
                            var a = this.groupSizes[t],
                                e = this.indexOfGroup(t),
                                h = e + a;
                            this.groupSizes[t] = 0;
                            for (var i = e; i < h; i++) this.tag.deleteRule(e)
                        }
                    }, a.getGroup = function(t) {
                        var a = "";
                        if (t >= this.length || 0 === this.groupSizes[t]) return a;
                        for (var e = this.groupSizes[t], h = this.indexOfGroup(t), i = h + e, r = h; r < i; r++) a += this.tag.getRule(r) + "/*!sc*/\n";
                        return a
                    }, t
                }(),
                C = new Map,
                O = new Map,
                A = 1,
                R = function(t) {
                    if (C.has(t)) return C.get(t);
                    for (; O.has(A);) A++;
                    var a = A++;
                    return C.set(t, a), O.set(a, t), a
                },
                T = function(t) {
                    return O.get(t)
                },
                q = function(t, a) {
                    a >= A && (A = a + 1), C.set(t, a), O.set(a, t)
                },
                N = "style[" + x + '][data-styled-version="5.3.11"]',
                I = new RegExp("^" + x + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                D = function(t, a, e) {
                    for (var h, i = e.split(","), r = 0, n = i.length; r < n; r++)(h = i[r]) && t.registerName(a, h)
                },
                M = function(t, a) {
                    for (var e = (a.textContent || "").split("/*!sc*/\n"), h = [], i = 0, r = e.length; i < r; i++) {
                        var n = e[i].trim();
                        if (n) {
                            var s = n.match(I);
                            if (s) {
                                var c = 0 | parseInt(s[1], 10),
                                    o = s[2];
                                0 !== c && (q(o, c), D(t, o, s[3]), t.getTag().insertRules(c, h)), h.length = 0
                            } else h.push(n)
                        }
                    }
                },
                L = function() {
                    return e.nc
                },
                $ = function(t) {
                    var a = document.head,
                        e = t || a,
                        h = document.createElement("style"),
                        i = function(t) {
                            for (var a = t.childNodes, e = a.length; e >= 0; e--) {
                                var h = a[e];
                                if (h && 1 === h.nodeType && h.hasAttribute(x)) return h
                            }
                        }(e),
                        r = void 0 !== i ? i.nextSibling : null;
                    h.setAttribute(x, "active"), h.setAttribute("data-styled-version", "5.3.11");
                    var n = L();
                    return n && h.setAttribute("nonce", n), e.insertBefore(h, r), h
                },
                H = function() {
                    function t(t) {
                        var a = this.element = $(t);
                        a.appendChild(document.createTextNode("")), this.sheet = function(t) {
                            if (t.sheet) return t.sheet;
                            for (var a = document.styleSheets, e = 0, h = a.length; e < h; e++) {
                                var i = a[e];
                                if (i.ownerNode === t) return i
                            }
                            E(17)
                        }(a), this.length = 0
                    }
                    var a = t.prototype;
                    return a.insertRule = function(t, a) {
                        try {
                            return this.sheet.insertRule(a, t), this.length++, !0
                        } catch (t) {
                            return !1
                        }
                    }, a.deleteRule = function(t) {
                        this.sheet.deleteRule(t), this.length--
                    }, a.getRule = function(t) {
                        var a = this.sheet.cssRules[t];
                        return void 0 !== a && "string" == typeof a.cssText ? a.cssText : ""
                    }, t
                }(),
                F = function() {
                    function t(t) {
                        var a = this.element = $(t);
                        this.nodes = a.childNodes, this.length = 0
                    }
                    var a = t.prototype;
                    return a.insertRule = function(t, a) {
                        if (t <= this.length && t >= 0) {
                            var e = document.createTextNode(a),
                                h = this.nodes[t];
                            return this.element.insertBefore(e, h || null), this.length++, !0
                        }
                        return !1
                    }, a.deleteRule = function(t) {
                        this.element.removeChild(this.nodes[t]), this.length--
                    }, a.getRule = function(t) {
                        return t < this.length ? this.nodes[t].textContent : ""
                    }, t
                }(),
                U = function() {
                    function t(t) {
                        this.rules = [], this.length = 0
                    }
                    var a = t.prototype;
                    return a.insertRule = function(t, a) {
                        return t <= this.length && (this.rules.splice(t, 0, a), this.length++, !0)
                    }, a.deleteRule = function(t) {
                        this.rules.splice(t, 1), this.length--
                    }, a.getRule = function(t) {
                        return t < this.length ? this.rules[t] : ""
                    }, t
                }(),
                W = k,
                B = {
                    isServer: !k,
                    useCSSOMInjection: !j
                },
                G = function() {
                    function t(t, a, e) {
                        void 0 === t && (t = w), void 0 === a && (a = {}), this.options = d({}, B, {}, t), this.gs = a, this.names = new Map(e), this.server = !!t.isServer, !this.server && k && W && (W = !1, function(t) {
                            for (var a = document.querySelectorAll(N), e = 0, h = a.length; e < h; e++) {
                                var i = a[e];
                                i && "active" !== i.getAttribute(x) && (M(t, i), i.parentNode && i.parentNode.removeChild(i))
                            }
                        }(this))
                    }
                    t.registerId = function(t) {
                        return R(t)
                    };
                    var a = t.prototype;
                    return a.reconstructWithOptions = function(a, e) {
                        return void 0 === e && (e = !0), new t(d({}, this.options, {}, a), this.gs, e && this.names || void 0)
                    }, a.allocateGSInstance = function(t) {
                        return this.gs[t] = (this.gs[t] || 0) + 1
                    }, a.getTag = function() {
                        return this.tag || (this.tag = (e = (a = this.options).isServer, h = a.useCSSOMInjection, i = a.target, t = e ? new U(i) : h ? new H(i) : new F(i), new _(t)));
                        var t, a, e, h, i
                    }, a.hasNameForId = function(t, a) {
                        return this.names.has(t) && this.names.get(t).has(a)
                    }, a.registerName = function(t, a) {
                        if (R(t), this.names.has(t)) this.names.get(t).add(a);
                        else {
                            var e = new Set;
                            e.add(a), this.names.set(t, e)
                        }
                    }, a.insertRules = function(t, a, e) {
                        this.registerName(t, a), this.getTag().insertRules(R(t), e)
                    }, a.clearNames = function(t) {
                        this.names.has(t) && this.names.get(t).clear()
                    }, a.clearRules = function(t) {
                        this.getTag().clearGroup(R(t)), this.clearNames(t)
                    }, a.clearTag = function() {
                        this.tag = void 0
                    }, a.toString = function() {
                        return function(t) {
                            for (var a = t.getTag(), e = a.length, h = "", i = 0; i < e; i++) {
                                var r = T(i);
                                if (void 0 !== r) {
                                    var n = t.names.get(r),
                                        s = a.getGroup(i);
                                    if (n && s && n.size) {
                                        var c = x + ".g" + i + '[id="' + r + '"]',
                                            o = "";
                                        void 0 !== n && n.forEach((function(t) {
                                            t.length > 0 && (o += t + ",")
                                        })), h += "" + s + c + '{content:"' + o + '"}/*!sc*/\n'
                                    }
                                }
                            }
                            return h
                        }(this)
                    }, t
                }(),
                X = /(a)(d)/gi,
                J = function(t) {
                    return String.fromCharCode(t + (t > 25 ? 39 : 97))
                };

            function V(t) {
                var a, e = "";
                for (a = Math.abs(t); a > 52; a = a / 52 | 0) e = J(a % 52) + e;
                return (J(a % 52) + e).replace(X, "$1-$2")
            }
            var Q = function(t, a) {
                    for (var e = a.length; e;) t = 33 * t ^ a.charCodeAt(--e);
                    return t
                },
                Y = function(t) {
                    return Q(5381, t)
                };

            function K(t) {
                for (var a = 0; a < t.length; a += 1) {
                    var e = t[a];
                    if (f(e) && !y(e)) return !1
                }
                return !0
            }
            var Z = Y("5.3.11"),
                tt = function() {
                    function t(t, a, e) {
                        this.rules = t, this.staticRulesId = "", this.isStatic = (void 0 === e || e.isStatic) && K(t), this.componentId = a, this.baseHash = Q(Z, a), this.baseStyle = e, G.registerId(a)
                    }
                    return t.prototype.generateAndInjectStyles = function(t, a, e) {
                        var h = this.componentId,
                            i = [];
                        if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, a, e)), this.isStatic && !e.hash)
                            if (this.staticRulesId && a.hasNameForId(h, this.staticRulesId)) i.push(this.staticRulesId);
                            else {
                                var r = ft(this.rules, t, a, e).join(""),
                                    n = V(Q(this.baseHash, r) >>> 0);
                                if (!a.hasNameForId(h, n)) {
                                    var s = e(r, "." + n, void 0, h);
                                    a.insertRules(h, n, s)
                                }
                                i.push(n), this.staticRulesId = n
                            }
                        else {
                            for (var c = this.rules.length, o = Q(this.baseHash, e.hash), g = "", m = 0; m < c; m++) {
                                var l = this.rules[m];
                                if ("string" == typeof l) g += l;
                                else if (l) {
                                    var p = ft(l, t, a, e),
                                        d = Array.isArray(p) ? p.join("") : p;
                                    o = Q(o, d + m), g += d
                                }
                            }
                            if (g) {
                                var u = V(o >>> 0);
                                if (!a.hasNameForId(h, u)) {
                                    var b = e(g, "." + u, void 0, h);
                                    a.insertRules(h, u, b)
                                }
                                i.push(u)
                            }
                        }
                        return i.join(" ")
                    }, t
                }(),
                at = /^\s*\/\/.*$/gm,
                et = [":", "[", ".", "#"];

            function ht(t) {
                var a, e, h, i, r = void 0 === t ? w : t,
                    n = r.options,
                    c = void 0 === n ? w : n,
                    o = r.plugins,
                    g = void 0 === o ? P : o,
                    m = new s(c),
                    l = [],
                    p = function(t) {
                        function a(a) {
                            if (a) try {
                                t(a + "}")
                            } catch (t) {}
                        }
                        return function(e, h, i, r, n, s, c, o, g, m) {
                            switch (e) {
                                case 1:
                                    if (0 === g && 64 === h.charCodeAt(0)) return t(h + ";"), "";
                                    break;
                                case 2:
                                    if (0 === o) return h + "/*|*/";
                                    break;
                                case 3:
                                    switch (o) {
                                        case 102:
                                        case 112:
                                            return t(i[0] + h), "";
                                        default:
                                            return h + (0 === m ? "/*|*/" : "")
                                    }
                                case -2:
                                    h.split("/*|*/}").forEach(a)
                            }
                        }
                    }((function(t) {
                        l.push(t)
                    })),
                    d = function(t, h, r) {
                        return 0 === h && -1 !== et.indexOf(r[e.length]) || r.match(i) ? t : "." + a
                    };

                function u(t, r, n, s) {
                    void 0 === s && (s = "&");
                    var c = t.replace(at, ""),
                        o = r && n ? n + " " + r + " { " + c + " }" : c;
                    return a = s, e = r, h = new RegExp("\\" + e + "\\b", "g"), i = new RegExp("(\\" + e + "\\b){2,}"), m(n || !r ? "" : r, o)
                }
                return m.use([].concat(g, [function(t, a, i) {
                    2 === t && i.length && i[0].lastIndexOf(e) > 0 && (i[0] = i[0].replace(h, d))
                }, p, function(t) {
                    if (-2 === t) {
                        var a = l;
                        return l = [], a
                    }
                }])), u.hash = g.length ? g.reduce((function(t, a) {
                    return a.name || E(15), Q(t, a.name)
                }), 5381).toString() : "", u
            }
            var it = i.createContext(),
                rt = it.Consumer,
                nt = i.createContext(),
                st = (nt.Consumer, new G),
                ct = ht();

            function ot() {
                return (0, i.useContext)(it) || st
            }

            function gt() {
                return (0, i.useContext)(nt) || ct
            }

            function mt(t) {
                var a = (0, i.useState)(t.stylisPlugins),
                    e = a[0],
                    h = a[1],
                    r = ot(),
                    s = (0, i.useMemo)((function() {
                        var a = r;
                        return t.sheet ? a = t.sheet : t.target && (a = a.reconstructWithOptions({
                            target: t.target
                        }, !1)), t.disableCSSOMInjection && (a = a.reconstructWithOptions({
                            useCSSOMInjection: !1
                        })), a
                    }), [t.disableCSSOMInjection, t.sheet, t.target]),
                    c = (0, i.useMemo)((function() {
                        return ht({
                            options: {
                                prefix: !t.disableVendorPrefixes
                            },
                            plugins: e
                        })
                    }), [t.disableVendorPrefixes, e]);
                return (0, i.useEffect)((function() {
                    n()(e, t.stylisPlugins) || h(t.stylisPlugins)
                }), [t.stylisPlugins]), i.createElement(it.Provider, {
                    value: s
                }, i.createElement(nt.Provider, {
                    value: c
                }, t.children))
            }
            var lt = function() {
                    function t(t, a) {
                        var e = this;
                        this.inject = function(t, a) {
                            void 0 === a && (a = ct);
                            var h = e.name + a.hash;
                            t.hasNameForId(e.id, h) || t.insertRules(e.id, h, a(e.rules, h, "@keyframes"))
                        }, this.toString = function() {
                            return E(12, String(e.name))
                        }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = a
                    }
                    return t.prototype.getName = function(t) {
                        return void 0 === t && (t = ct), this.name + t.hash
                    }, t
                }(),
                pt = /([A-Z])/,
                dt = /([A-Z])/g,
                ut = /^ms-/,
                bt = function(t) {
                    return "-" + t.toLowerCase()
                };

            function Pt(t) {
                return pt.test(t) ? t.replace(dt, bt).replace(ut, "-ms-") : t
            }
            var wt = function(t) {
                return null == t || !1 === t || "" === t
            };

            function ft(t, a, e, h) {
                if (Array.isArray(t)) {
                    for (var i, r = [], n = 0, s = t.length; n < s; n += 1) "" !== (i = ft(t[n], a, e, h)) && (Array.isArray(i) ? r.push.apply(r, i) : r.push(i));
                    return r
                }
                return wt(t) ? "" : y(t) ? "." + t.styledComponentId : f(t) ? "function" != typeof(o = t) || o.prototype && o.prototype.isReactComponent || !a ? t : ft(t(a), a, e, h) : t instanceof lt ? e ? (t.inject(e, h), t.getName(h)) : t : b(t) ? function t(a, e) {
                    var h, i, r = [];
                    for (var n in a) a.hasOwnProperty(n) && !wt(a[n]) && (Array.isArray(a[n]) && a[n].isCss || f(a[n]) ? r.push(Pt(n) + ":", a[n], ";") : b(a[n]) ? r.push.apply(r, t(a[n], n)) : r.push(Pt(n) + ": " + (h = n, (null == (i = a[n]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || h in c || h.startsWith("--") ? String(i).trim() : i + "px") + ";")));
                    return e ? [e + " {"].concat(r, ["}"]) : r
                }(t) : t.toString();
                var o
            }
            var vt = function(t) {
                return Array.isArray(t) && (t.isCss = !0), t
            };

            function yt(t) {
                for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                return f(t) || b(t) ? vt(ft(u(P, [t].concat(e)))) : 0 === e.length && 1 === t.length && "string" == typeof t[0] ? t : vt(ft(u(t, e)))
            }
            new Set;
            var xt = function(t, a, e) {
                    return void 0 === e && (e = w), t.theme !== e.theme && t.theme || a || e.theme
                },
                zt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                kt = /(^-|-$)/g;

            function jt(t) {
                return t.replace(zt, "-").replace(kt, "")
            }
            var St = function(t) {
                return V(Y(t) >>> 0)
            };

            function Et(t) {
                return "string" == typeof t && !0
            }
            var _t = function(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)
                },
                Ct = function(t) {
                    return "__proto__" !== t && "constructor" !== t && "prototype" !== t
                };

            function Ot(t, a, e) {
                var h = t[e];
                _t(a) && _t(h) ? At(h, a) : t[e] = a
            }

            function At(t) {
                for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                for (var i = 0, r = e; i < r.length; i++) {
                    var n = r[i];
                    if (_t(n))
                        for (var s in n) Ct(s) && Ot(t, n[s], s)
                }
                return t
            }
            var Rt = i.createContext(),
                Tt = Rt.Consumer;

            function qt(t) {
                var a = (0, i.useContext)(Rt),
                    e = (0, i.useMemo)((function() {
                        return function(t, a) {
                            return t ? f(t) ? t(a) : Array.isArray(t) || "object" != typeof t ? E(8) : a ? d({}, a, {}, t) : t : E(14)
                        }(t.theme, a)
                    }), [t.theme, a]);
                return t.children ? i.createElement(Rt.Provider, {
                    value: e
                }, t.children) : null
            }
            var Nt = {};

            function It(t, a, e) {
                var h = y(t),
                    r = !Et(t),
                    n = a.attrs,
                    s = void 0 === n ? P : n,
                    c = a.componentId,
                    o = void 0 === c ? function(t, a) {
                        var e = "string" != typeof t ? "sc" : jt(t);
                        Nt[e] = (Nt[e] || 0) + 1;
                        var h = e + "-" + St("5.3.11" + e + Nt[e]);
                        return a ? a + "-" + h : h
                    }(a.displayName, a.parentComponentId) : c,
                    g = a.displayName,
                    l = void 0 === g ? function(t) {
                        return Et(t) ? "styled." + t : "Styled(" + v(t) + ")"
                    }(t) : g,
                    u = a.displayName && a.componentId ? jt(a.displayName) + "-" + a.componentId : a.componentId || o,
                    b = h && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s,
                    x = a.shouldForwardProp;
                h && t.shouldForwardProp && (x = a.shouldForwardProp ? function(e, h, i) {
                    return t.shouldForwardProp(e, h, i) && a.shouldForwardProp(e, h, i)
                } : t.shouldForwardProp);
                var z, k = new tt(e, u, h ? t.componentStyle : void 0),
                    j = k.isStatic && 0 === s.length,
                    S = function(t, a) {
                        return function(t, a, e, h) {
                            var r = t.attrs,
                                n = t.componentStyle,
                                s = t.defaultProps,
                                c = t.foldedComponentIds,
                                o = t.shouldForwardProp,
                                g = t.styledComponentId,
                                l = t.target,
                                p = function(t, a, e) {
                                    void 0 === t && (t = w);
                                    var h = d({}, a, {
                                            theme: t
                                        }),
                                        i = {};
                                    return e.forEach((function(t) {
                                        var a, e, r, n = t;
                                        for (a in f(n) && (n = n(h)), n) h[a] = i[a] = "className" === a ? (e = i[a], r = n[a], e && r ? e + " " + r : e || r) : n[a]
                                    })), [h, i]
                                }(xt(a, (0, i.useContext)(Rt), s) || w, a, r),
                                u = p[0],
                                b = p[1],
                                P = function(t, a, e, h) {
                                    var i = ot(),
                                        r = gt();
                                    return a ? t.generateAndInjectStyles(w, i, r) : t.generateAndInjectStyles(e, i, r)
                                }(n, h, u),
                                v = e,
                                y = b.$as || a.$as || b.as || a.as || l,
                                x = Et(y),
                                z = b !== a ? d({}, a, {}, b) : a,
                                k = {};
                            for (var j in z) "$" !== j[0] && "as" !== j && ("forwardedAs" === j ? k.as = z[j] : (o ? o(j, m, y) : !x || m(j)) && (k[j] = z[j]));
                            return a.style && b.style !== a.style && (k.style = d({}, a.style, {}, b.style)), k.className = Array.prototype.concat(c, g, P !== g ? P : null, a.className, b.className).filter(Boolean).join(" "), k.ref = v, (0, i.createElement)(y, k)
                        }(z, t, a, j)
                    };
                return S.displayName = l, (z = i.forwardRef(S)).attrs = b, z.componentStyle = k, z.displayName = l, z.shouldForwardProp = x, z.foldedComponentIds = h ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : P, z.styledComponentId = u, z.target = h ? t.target : t, z.withComponent = function(t) {
                    var h = a.componentId,
                        i = function(t, a) {
                            if (null == t) return {};
                            var e, h, i = {},
                                r = Object.keys(t);
                            for (h = 0; h < r.length; h++) e = r[h], a.indexOf(e) >= 0 || (i[e] = t[e]);
                            return i
                        }(a, ["componentId"]),
                        r = h && h + "-" + (Et(t) ? t : jt(v(t)));
                    return It(t, d({}, i, {
                        attrs: b,
                        componentId: r
                    }), e)
                }, Object.defineProperty(z, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps
                    },
                    set: function(a) {
                        this._foldedDefaultProps = h ? At({}, t.defaultProps, a) : a
                    }
                }), Object.defineProperty(z, "toString", {
                    value: function() {
                        return "." + z.styledComponentId
                    }
                }), r && p()(z, t, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }), z
            }
            var Dt = function(t) {
                return function t(a, e, i) {
                    if (void 0 === i && (i = w), !(0, h.isValidElementType)(e)) return E(1, String(e));
                    var r = function() {
                        return a(e, i, yt.apply(void 0, arguments))
                    };
                    return r.withConfig = function(h) {
                        return t(a, e, d({}, i, {}, h))
                    }, r.attrs = function(h) {
                        return t(a, e, d({}, i, {
                            attrs: Array.prototype.concat(i.attrs, h).filter(Boolean)
                        }))
                    }, r
                }(It, t)
            };
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(t) {
                Dt[t] = Dt(t)
            }));
            var Mt = function() {
                function t(t, a) {
                    this.rules = t, this.componentId = a, this.isStatic = K(t), G.registerId(this.componentId + 1)
                }
                var a = t.prototype;
                return a.createStyles = function(t, a, e, h) {
                    var i = h(ft(this.rules, a, e, h).join(""), ""),
                        r = this.componentId + t;
                    e.insertRules(r, r, i)
                }, a.removeStyles = function(t, a) {
                    a.clearRules(this.componentId + t)
                }, a.renderStyles = function(t, a, e, h) {
                    t > 2 && G.registerId(this.componentId + t), this.removeStyles(t, e), this.createStyles(t, a, e, h)
                }, t
            }();

            function Lt(t) {
                for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                var r = yt.apply(void 0, [t].concat(e)),
                    n = "sc-global-" + St(JSON.stringify(r)),
                    s = new Mt(r, n);

                function c(t) {
                    var a = ot(),
                        e = gt(),
                        h = (0, i.useContext)(Rt),
                        r = (0, i.useRef)(a.allocateGSInstance(n)).current;
                    return a.server && o(r, t, a, h, e), (0, i.useLayoutEffect)((function() {
                        if (!a.server) return o(r, t, a, h, e),
                            function() {
                                return s.removeStyles(r, a)
                            }
                    }), [r, t, a, h, e]), null
                }

                function o(t, a, e, h, i) {
                    if (s.isStatic) s.renderStyles(t, S, e, i);
                    else {
                        var r = d({}, a, {
                            theme: xt(a, h, c.defaultProps)
                        });
                        s.renderStyles(t, r, e, i)
                    }
                }
                return i.memo(c)
            }

            function $t(t) {
                for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) e[h - 1] = arguments[h];
                var i = yt.apply(void 0, [t].concat(e)).join(""),
                    r = St(i);
                return new lt(r, i)
            }
            var Ht = function() {
                    function t() {
                        var t = this;
                        this._emitSheetCSS = function() {
                            var a = t.instance.toString();
                            if (!a) return "";
                            var e = L();
                            return "<style " + [e && 'nonce="' + e + '"', x + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + a + "</style>"
                        }, this.getStyleTags = function() {
                            return t.sealed ? E(2) : t._emitSheetCSS()
                        }, this.getStyleElement = function() {
                            var a;
                            if (t.sealed) return E(2);
                            var e = ((a = {})[x] = "", a["data-styled-version"] = "5.3.11", a.dangerouslySetInnerHTML = {
                                    __html: t.instance.toString()
                                }, a),
                                h = L();
                            return h && (e.nonce = h), [i.createElement("style", d({}, e, {
                                key: "sc-0-0"
                            }))]
                        }, this.seal = function() {
                            t.sealed = !0
                        }, this.instance = new G({
                            isServer: !0
                        }), this.sealed = !1
                    }
                    var a = t.prototype;
                    return a.collectStyles = function(t) {
                        return this.sealed ? E(2) : i.createElement(mt, {
                            sheet: this.instance
                        }, t)
                    }, a.interleaveWithNodeStream = function(t) {
                        return E(3)
                    }, t
                }(),
                Ft = function(t) {
                    var a = i.forwardRef((function(a, e) {
                        var h = (0, i.useContext)(Rt),
                            r = t.defaultProps,
                            n = xt(a, h, r);
                        return i.createElement(t, d({}, a, {
                            theme: n,
                            ref: e
                        }))
                    }));
                    return p()(a, t), a.displayName = "WithTheme(" + v(t) + ")", a
                },
                Ut = function() {
                    return (0, i.useContext)(Rt)
                },
                Wt = {
                    StyleSheet: G,
                    masterSheet: st
                },
                Bt = Dt
        },
        1063: function(t, a, e) {
            "use strict";
            var h = e(96540);
            var i = "function" == typeof Object.is ? Object.is : function(t, a) {
                    return t === a && (0 !== t || 1 / t == 1 / a) || t != t && a != a
                },
                r = h.useState,
                n = h.useEffect,
                s = h.useLayoutEffect,
                c = h.useDebugValue;

            function o(t) {
                var a = t.getSnapshot;
                t = t.value;
                try {
                    var e = a();
                    return !i(t, e)
                } catch (h) {
                    return !0
                }
            }
            var g = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, a) {
                return a()
            } : function(t, a) {
                var e = a(),
                    h = r({
                        inst: {
                            value: e,
                            getSnapshot: a
                        }
                    }),
                    i = h[0].inst,
                    g = h[1];
                return s((function() {
                    i.value = e, i.getSnapshot = a, o(i) && g({
                        inst: i
                    })
                }), [t, e, a]), n((function() {
                    return o(i) && g({
                        inst: i
                    }), t((function() {
                        o(i) && g({
                            inst: i
                        })
                    }))
                }), [t]), c(e), e
            };
            a.useSyncExternalStore = void 0 !== h.useSyncExternalStore ? h.useSyncExternalStore : g
        },
        88940: function(t, a, e) {
            "use strict";
            var h = e(96540),
                i = e(19888);
            var r = "function" == typeof Object.is ? Object.is : function(t, a) {
                    return t === a && (0 !== t || 1 / t == 1 / a) || t != t && a != a
                },
                n = i.useSyncExternalStore,
                s = h.useRef,
                c = h.useEffect,
                o = h.useMemo,
                g = h.useDebugValue;
            a.useSyncExternalStoreWithSelector = function(t, a, e, h, i) {
                var m = s(null);
                if (null === m.current) {
                    var l = {
                        hasValue: !1,
                        value: null
                    };
                    m.current = l
                } else l = m.current;
                m = o((function() {
                    function t(t) {
                        if (!c) {
                            if (c = !0, n = t, t = h(t), void 0 !== i && l.hasValue) {
                                var a = l.value;
                                if (i(a, t)) return s = a
                            }
                            return s = t
                        }
                        if (a = s, r(n, t)) return a;
                        var e = h(t);
                        return void 0 !== i && i(a, e) ? a : (n = t, s = e)
                    }
                    var n, s, c = !1,
                        o = void 0 === e ? null : e;
                    return [function() {
                        return t(a())
                    }, null === o ? void 0 : function() {
                        return t(o())
                    }]
                }), [a, e, h, i]);
                var p = n(t, m[0], m[1]);
                return c((function() {
                    l.hasValue = !0, l.value = p
                }), [p]), g(p), p
            }
        },
        19888: function(t, a, e) {
            "use strict";
            t.exports = e(1063)
        },
        69242: function(t, a, e) {
            "use strict";
            t.exports = e(88940)
        },
        12475: function(t) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        6221: function(t, a, e) {
            var h = e(95636);
            t.exports = function(t, a) {
                t.prototype = Object.create(a.prototype), t.prototype.constructor = t, h(t, a)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        24994: function(t) {
            t.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        95636: function(t) {
            function a(e, h) {
                return t.exports = a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
                    return t.__proto__ = a, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, a(e, h)
            }
            t.exports = a, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        14656: function(t, a) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            a.SCRIPT_TYPE = "text/partytown", a.partytownSnippet = t => ((t, a) => {
                const {
                    forward: e = [],
                    ...h
                } = t || {}, i = JSON.stringify(h, ((t, a) => ("function" == typeof a && (a = String(a)).startsWith(t + "(") && (a = "function " + a), a)));
                return ["!(function(w,p,f,c){", Object.keys(h).length > 0 ? `c=w[p]=Object.assign(w[p]||{},${i});` : "c=w[p]=w[p]||{};", "c[f]=(c[f]||[])", e.length > 0 ? `.concat(${JSON.stringify(e)})` : "", "})(window,'partytown','forward');", a].join("")
            })(t, '/* Partytown 0.7.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.5":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);')
        },
        43145: function(t, a, e) {
            "use strict";

            function h(t, a) {
                (null == a || a > t.length) && (a = t.length);
                for (var e = 0, h = new Array(a); e < a; e++) h[e] = t[e];
                return h
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        9417: function(t, a, e) {
            "use strict";

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        92901: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return r
                }
            });
            var h = e(20816);

            function i(t, a) {
                for (var e = 0; e < a.length; e++) {
                    var i = a[e];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, (0, h.A)(i.key), i)
                }
            }

            function r(t, a, e) {
                return a && i(t.prototype, a), e && i(t, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
        },
        64467: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return i
                }
            });
            var h = e(20816);

            function i(t, a, e) {
                return (a = (0, h.A)(a)) in t ? Object.defineProperty(t, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[a] = e, t
            }
        },
        53954: function(t, a, e) {
            "use strict";

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        77387: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return i
                }
            });
            var h = e(63662);

            function i(t, a) {
                t.prototype = Object.create(a.prototype), t.prototype.constructor = t, (0, h.A)(t, a)
            }
        },
        52176: function(t, a, e) {
            "use strict";

            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        89379: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return r
                }
            });
            var h = e(64467);

            function i(t, a) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var h = Object.getOwnPropertySymbols(t);
                    a && (h = h.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(t, a).enumerable
                    }))), e.push.apply(e, h)
                }
                return e
            }

            function r(t) {
                for (var a = 1; a < arguments.length; a++) {
                    var e = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? i(Object(e), !0).forEach((function(a) {
                        (0, h.A)(t, a, e[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach((function(a) {
                        Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a))
                    }))
                }
                return t
            }
        },
        63662: function(t, a, e) {
            "use strict";

            function h(t, a) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
                    return t.__proto__ = a, t
                }, h(t, a)
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        45458: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return r
                }
            });
            var h = e(43145);
            var i = e(27800);

            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) return (0, h.A)(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || (0, i.A)(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        20816: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return i
                }
            });
            var h = e(82284);

            function i(t) {
                var a = function(t, a) {
                    if ("object" !== (0, h.A)(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, a || "default");
                        if ("object" !== (0, h.A)(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === a ? String : Number)(t)
                }(t, "string");
                return "symbol" === (0, h.A)(a) ? a : String(a)
            }
        },
        82284: function(t, a, e) {
            "use strict";

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }
            e.d(a, {
                A: function() {
                    return h
                }
            })
        },
        27800: function(t, a, e) {
            "use strict";
            e.d(a, {
                A: function() {
                    return i
                }
            });
            var h = e(43145);

            function i(t, a) {
                if (t) {
                    if ("string" == typeof t) return (0, h.A)(t, a);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? (0, h.A)(t, a) : void 0
                }
            }
        },
        86462: function(t, a, e) {
            "use strict";
            var h;
            e.r(a), e.d(a, {
                BaseContext: function() {
                    return b
                },
                Link: function() {
                    return X
                },
                Location: function() {
                    return K
                },
                LocationContext: function() {
                    return P
                },
                LocationProvider: function() {
                    return Y
                },
                Match: function() {
                    return tt
                },
                Redirect: function() {
                    return k
                },
                Router: function() {
                    return st
                },
                ServerLocation: function() {
                    return Z
                },
                createHistory: function() {
                    return g
                },
                createMemorySource: function() {
                    return m
                },
                globalHistory: function() {
                    return p
                },
                insertParams: function() {
                    return C
                },
                isRedirect: function() {
                    return y
                },
                match: function() {
                    return E
                },
                navigate: function() {
                    return d
                },
                pick: function() {
                    return S
                },
                redirectTo: function() {
                    return x
                },
                resolve: function() {
                    return _
                },
                shallowCompare: function() {
                    return L
                },
                startsWith: function() {
                    return j
                },
                useBaseContext: function() {
                    return w
                },
                useLocation: function() {
                    return ot
                },
                useLocationContext: function() {
                    return f
                },
                useMatch: function() {
                    return lt
                },
                useNavigate: function() {
                    return gt
                },
                useParams: function() {
                    return mt
                },
                validateRedirect: function() {
                    return O
                }
            });
            var i = e(96540),
                r = e(5556),
                n = e(20311);

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function c(t, a) {
                if (null == t) return {};
                var e, h, i = {},
                    r = Object.keys(t);
                for (h = 0; h < r.length; h++) a.indexOf(e = r[h]) >= 0 || (i[e] = t[e]);
                return i
            }
            const o = t => {
                    const {
                        search: a,
                        hash: e,
                        href: h,
                        origin: i,
                        protocol: r,
                        host: n,
                        hostname: s,
                        port: c
                    } = t.location;
                    let {
                        pathname: o
                    } = t.location;
                    return !o && h && l && (o = new URL(h).pathname), {
                        pathname: encodeURI(decodeURI(o)),
                        search: a,
                        hash: e,
                        href: h,
                        origin: i,
                        protocol: r,
                        host: n,
                        hostname: s,
                        port: c,
                        state: t.history.state,
                        key: t.history.state && t.history.state.key || "initial"
                    }
                },
                g = (t, a) => {
                    let e = [],
                        h = o(t),
                        i = !1,
                        r = () => {};
                    return {
                        get location() {
                            return h
                        },
                        get transitioning() {
                            return i
                        },
                        _onTransitionComplete() {
                            i = !1, r()
                        },
                        listen(a) {
                            e.push(a);
                            const i = () => {
                                h = o(t), a({
                                    location: h,
                                    action: "POP"
                                })
                            };
                            return t.addEventListener("popstate", i), () => {
                                t.removeEventListener("popstate", i), e = e.filter((t => t !== a))
                            }
                        },
                        navigate(a, {
                            state: n,
                            replace: c = !1
                        } = {}) {
                            if ("number" == typeof a) t.history.go(a);
                            else {
                                n = s({}, n, {
                                    key: Date.now() + ""
                                });
                                try {
                                    i || c ? t.history.replaceState(n, null, a) : t.history.pushState(n, null, a)
                                } catch (e) {
                                    t.location[c ? "replace" : "assign"](a)
                                }
                            }
                            h = o(t), i = !0;
                            const g = new Promise((t => r = t));
                            return e.forEach((t => t({
                                location: h,
                                action: "PUSH"
                            }))), g
                        }
                    }
                },
                m = (t = "/") => {
                    const a = t.indexOf("?"),
                        e = {
                            pathname: a > -1 ? t.substr(0, a) : t,
                            search: a > -1 ? t.substr(a) : ""
                        };
                    let h = 0;
                    const i = [e],
                        r = [null];
                    return {
                        get location() {
                            return i[h]
                        },
                        addEventListener(t, a) {},
                        removeEventListener(t, a) {},
                        history: {
                            get entries() {
                                return i
                            },
                            get index() {
                                return h
                            },
                            get state() {
                                return r[h]
                            },
                            pushState(t, a, e) {
                                const [n, s = ""] = e.split("?");
                                h++, i.push({
                                    pathname: n,
                                    search: s.length ? `?${s}` : s
                                }), r.push(t)
                            },
                            replaceState(t, a, e) {
                                const [n, s = ""] = e.split("?");
                                i[h] = {
                                    pathname: n,
                                    search: s
                                }, r[h] = t
                            },
                            go(t) {
                                const a = h + t;
                                a < 0 || a > r.length - 1 || (h = a)
                            }
                        }
                    }
                },
                l = !("undefined" == typeof window || !window.document || !window.document.createElement),
                p = g(l ? window : m()),
                {
                    navigate: d
                } = p;

            function u(t, a) {
                return i.createServerContext ? ((t, a = null) => (globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}), globalThis.__SERVER_CONTEXT[t] || (globalThis.__SERVER_CONTEXT[t] = i.createServerContext(t, a)), globalThis.__SERVER_CONTEXT[t]))(t, a) : i.createContext(a)
            }
            const b = u("Base", {
                    baseuri: "/",
                    basepath: "/"
                }),
                P = u("Location"),
                w = () => i.useContext(b),
                f = () => i.useContext(P);

            function v(t) {
                this.uri = t
            }
            const y = t => t instanceof v,
                x = t => {
                    throw new v(t)
                };

            function z(t) {
                const {
                    to: a,
                    replace: e = !0,
                    state: h,
                    noThrow: r,
                    baseuri: n
                } = t;
                i.useEffect((() => {
                    Promise.resolve().then((() => {
                        const i = _(a, n);
                        d(C(i, t), {
                            replace: e,
                            state: h
                        })
                    }))
                }), []);
                const s = _(a, n);
                return r || x(C(s, t)), null
            }
            const k = t => {
                const a = f(),
                    {
                        baseuri: e
                    } = w();
                return i.createElement(z, s({}, a, {
                    baseuri: e
                }, t))
            };
            k.propTypes = {
                from: r.string,
                to: r.string.isRequired
            };
            const j = (t, a) => t.substr(0, a.length) === a,
                S = (t, a) => {
                    let e, h;
                    const [i] = a.split("?"), r = I(i), s = "" === r[0], c = N(t);
                    for (let o = 0, g = c.length; o < g; o++) {
                        let t = !1;
                        const i = c[o].route;
                        if (i.default) {
                            h = {
                                route: i,
                                params: {},
                                uri: a
                            };
                            continue
                        }
                        const g = I(i.path),
                            m = {},
                            l = Math.max(r.length, g.length);
                        let p = 0;
                        for (; p < l; p++) {
                            const a = g[p],
                                e = r[p];
                            if (T(a)) {
                                m[a.slice(1) || "*"] = r.slice(p).map(decodeURIComponent).join("/");
                                break
                            }
                            if (void 0 === e) {
                                t = !0;
                                break
                            }
                            const h = A.exec(a);
                            if (h && !s) {
                                const t = -1 === M.indexOf(h[1]);
                                n(t, `<Router> dynamic segment "${h[1]}" is a reserved name. Please use a different name in path "${i.path}".`);
                                const a = decodeURIComponent(e);
                                m[h[1]] = a
                            } else if (a !== e) {
                                t = !0;
                                break
                            }
                        }
                        if (!t) {
                            e = {
                                route: i,
                                params: m,
                                uri: "/" + r.slice(0, p).join("/")
                            };
                            break
                        }
                    }
                    return e || h || null
                },
                E = (t, a) => S([{
                    path: t
                }], a),
                _ = (t, a) => {
                    if (j(t, "/")) return t;
                    const [e, h] = t.split("?"), [i] = a.split("?"), r = I(e), n = I(i);
                    if ("" === r[0]) return D(i, h);
                    if (!j(r[0], ".")) {
                        const t = n.concat(r).join("/");
                        return D(("/" === i ? "" : "/") + t, h)
                    }
                    const s = n.concat(r),
                        c = [];
                    for (let o = 0, g = s.length; o < g; o++) {
                        const t = s[o];
                        ".." === t ? c.pop() : "." !== t && c.push(t)
                    }
                    return D("/" + c.join("/"), h)
                },
                C = (t, a) => {
                    const [e, h = ""] = t.split("?");
                    let i = "/" + I(e).map((t => {
                        const e = A.exec(t);
                        return e ? a[e[1]] : t
                    })).join("/");
                    const {
                        location: {
                            search: r = ""
                        } = {}
                    } = a, n = r.split("?")[1] || "";
                    return i = D(i, h, n), i
                },
                O = (t, a) => {
                    const e = t => R(t);
                    return I(t).filter(e).sort().join("/") === I(a).filter(e).sort().join("/")
                },
                A = /^:(.+)/,
                R = t => A.test(t),
                T = t => t && "*" === t[0],
                q = (t, a) => ({
                    route: t,
                    score: t.default ? 0 : I(t.path).reduce(((t, a) => (t += 4, (t => "" === t)(a) ? t += 1 : R(a) ? t += 2 : T(a) ? t -= 5 : t += 3, t)), 0),
                    index: a
                }),
                N = t => t.map(q).sort(((t, a) => t.score < a.score ? 1 : t.score > a.score ? -1 : t.index - a.index)),
                I = t => t.replace(/(^\/+|\/+$)/g, "").split("/"),
                D = (t, ...a) => t + ((a = a.filter((t => t && t.length > 0))) && a.length > 0 ? `?${a.join("&")}` : ""),
                M = ["uri", "path"],
                L = (t, a) => {
                    const e = Object.keys(t);
                    return e.length === Object.keys(a).length && e.every((e => a.hasOwnProperty(e) && t[e] === a[e]))
                },
                $ = t => t.replace(/(^\/+|\/+$)/g, ""),
                H = t => a => {
                    if (!a) return null;
                    if (a.type === i.Fragment && a.props.children) return i.Children.map(a.props.children, H(t));
                    if (n(a.props.path || a.props.default || a.type === k, `<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${a.type}\``), n(!!(a.type !== k || a.props.from && a.props.to), `<Redirect from="${a.props.from}" to="${a.props.to}"/> requires both "from" and "to" props when inside a <Router>.`), n(!(a.type === k && !O(a.props.from, a.props.to)), `<Redirect from="${a.props.from} to="${a.props.to}"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`), a.props.default) return {
                        value: a,
                        default: !0
                    };
                    const e = a.type === k ? a.props.from : a.props.path,
                        h = "/" === e ? t : `${$(t)}/${$(e)}`;
                    return {
                        value: a,
                        default: a.props.default,
                        path: a.props.children ? `${$(h)}/*` : h
                    }
                },
                F = ["innerRef"],
                U = ["to", "state", "replace", "getProps"],
                W = ["key"];
            let {
                forwardRef: B
            } = h || (h = e.t(i, 2));
            void 0 === B && (B = t => t);
            const G = () => {},
                X = B(((t, a) => {
                    let {
                        innerRef: e
                    } = t, h = c(t, F);
                    const {
                        baseuri: r
                    } = w(), {
                        location: n
                    } = f(), {
                        to: o,
                        state: g,
                        replace: m,
                        getProps: l = G
                    } = h, p = c(h, U), u = _(o, r), b = encodeURI(u), P = n.pathname === b, v = j(n.pathname, b);
                    return i.createElement("a", s({
                        ref: a || e,
                        "aria-current": P ? "page" : void 0
                    }, p, l({
                        isCurrent: P,
                        isPartiallyCurrent: v,
                        href: u,
                        location: n
                    }), {
                        href: u,
                        onClick: t => {
                            if (p.onClick && p.onClick(t), (t => !t.defaultPrevented && 0 === t.button && !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey))(t)) {
                                t.preventDefault();
                                let a = m;
                                if ("boolean" != typeof m && P) {
                                    const t = c(s({}, n.state), W);
                                    a = L(s({}, g), t)
                                }
                                d(u, {
                                    state: g,
                                    replace: a
                                })
                            }
                        }
                    }))
                }));
            X.displayName = "Link", X.propTypes = {
                to: r.string.isRequired
            };
            class J extends i.Component {
                constructor(...t) {
                    super(...t), this.displayName = "ReactUseErrorBoundary"
                }
                componentDidCatch(...t) {
                    this.setState({}), this.props.onError(...t)
                }
                render() {
                    return this.props.children
                }
            }
            const V = i.createContext({
                componentDidCatch: {
                    current: void 0
                },
                error: void 0,
                setError: () => !1
            });

            function Q({
                children: t
            }) {
                const [a, e] = i.useState(), h = i.useRef(), r = i.useMemo((() => ({
                    componentDidCatch: h,
                    error: a,
                    setError: e
                })), [a]);
                return i.createElement(V.Provider, {
                    value: r
                }, i.createElement(J, {
                    error: a,
                    onError: (t, a) => {
                        e(t), null == h.current || h.current(t, a)
                    }
                }, t))
            }
            Q.displayName = "ReactUseErrorBoundaryContext";
            const Y = function(t) {
                    var a, e;

                    function h(a) {
                        return i.createElement(Q, null, i.createElement(t, s({
                            key: "WrappedComponent"
                        }, a)))
                    }
                    return h.displayName = `WithErrorBoundary(${null!=(a=null!=(e=t.displayName)?e:t.name)?a:"Component"})`, h
                }((({
                    history: t = p,
                    children: a
                }) => {
                    const {
                        location: e
                    } = t, [h, r] = i.useState({
                        location: e
                    }), [n] = function(t) {
                        const a = i.useContext(V);
                        a.componentDidCatch.current = void 0;
                        const e = i.useCallback((() => {
                            a.setError(void 0)
                        }), []);
                        return [a.error, e]
                    }();
                    if (i.useEffect((() => {
                            t._onTransitionComplete()
                        }), [h.location]), i.useEffect((() => {
                            let a = !1;
                            const e = t.listen((({
                                location: t
                            }) => {
                                Promise.resolve().then((() => {
                                    requestAnimationFrame((() => {
                                        a || r({
                                            location: t
                                        })
                                    }))
                                }))
                            }));
                            return () => {
                                a = !0, e()
                            }
                        }), []), n) {
                        if (!y(n)) throw n;
                        d(n.uri, {
                            replace: !0
                        })
                    }
                    return i.createElement(P.Provider, {
                        value: h
                    }, "function" == typeof a ? a(h) : a || null)
                })),
                K = ({
                    children: t
                }) => {
                    const a = f();
                    return a ? t(a) : i.createElement(Y, null, t)
                },
                Z = ({
                    url: t,
                    children: a
                }) => {
                    const e = t.indexOf("?");
                    let h, r = "";
                    return e > -1 ? (h = t.substring(0, e), r = t.substring(e)) : h = t, i.createElement(P.Provider, {
                        value: {
                            location: {
                                pathname: h,
                                search: r,
                                hash: ""
                            }
                        }
                    }, a)
                },
                tt = ({
                    path: t,
                    children: a
                }) => {
                    const {
                        baseuri: e
                    } = w(), {
                        location: h
                    } = f(), i = _(t, e), r = E(i, h.pathname);
                    return a({
                        location: h,
                        match: r ? s({}, r.params, {
                            uri: r.uri,
                            path: t
                        }) : null
                    })
                },
                at = ["uri", "location", "component"],
                et = ["children", "style", "component", "uri", "location"],
                ht = t => {
                    let {
                        uri: a,
                        location: e,
                        component: h
                    } = t, r = c(t, at);
                    return i.createElement(rt, s({}, r, {
                        component: h,
                        uri: a,
                        location: e
                    }))
                };
            let it = 0;
            const rt = t => {
                    let {
                        children: a,
                        style: e,
                        component: h = "div",
                        uri: r,
                        location: n
                    } = t, o = c(t, et);
                    const g = i.useRef(),
                        m = i.useRef(!0),
                        l = i.useRef(r),
                        p = i.useRef(n.pathname),
                        d = i.useRef(!1);
                    i.useEffect((() => (it++, u(), () => {
                        it--, 0 === it && (m.current = !0)
                    })), []), i.useEffect((() => {
                        let t = !1,
                            a = !1;
                        r !== l.current && (l.current = r, t = !0), n.pathname !== p.current && (p.current = n.pathname, a = !0), d.current = t || a && n.pathname === r, d.current && u()
                    }), [r, n]);
                    const u = i.useCallback((() => {
                        var t;
                        m.current ? m.current = !1 : (t = g.current, d.current && t && t.focus())
                    }), []);
                    return i.createElement(h, s({
                        style: s({
                            outline: "none"
                        }, e),
                        tabIndex: "-1",
                        ref: g
                    }, o), a)
                },
                nt = ["location", "primary", "children", "basepath", "baseuri", "component"],
                st = t => {
                    const a = w(),
                        e = f();
                    return i.createElement(ct, s({}, a, e, t))
                };

            function ct(t) {
                const {
                    location: a,
                    primary: e = !0,
                    children: h,
                    basepath: r,
                    component: n = "div"
                } = t, o = c(t, nt), g = i.Children.toArray(h).reduce(((t, a) => {
                    const e = H(r)(a);
                    return t.concat(e)
                }), []), {
                    pathname: m
                } = a, l = S(g, m);
                if (l) {
                    const {
                        params: t,
                        uri: h,
                        route: c,
                        route: {
                            value: g
                        }
                    } = l, m = c.default ? r : c.path.replace(/\*$/, ""), p = s({}, t, {
                        uri: h,
                        location: a
                    }), d = i.cloneElement(g, p, g.props.children ? i.createElement(st, {
                        location: a,
                        primary: e
                    }, g.props.children) : void 0), u = e ? ht : n, P = e ? s({
                        uri: h,
                        location: a,
                        component: n
                    }, o) : o;
                    return i.createElement(b.Provider, {
                        value: {
                            baseuri: h,
                            basepath: m
                        }
                    }, i.createElement(u, P, d))
                }
                return null
            }
            const ot = () => {
                    const t = f();
                    if (!t) throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
                    return t.location
                },
                gt = () => {
                    throw new Error("useNavigate is removed. Use import { navigate } from 'gatsby' instead")
                },
                mt = () => {
                    const t = w();
                    if (!t) throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
                    const a = ot(),
                        e = E(t.basepath, a.pathname);
                    return e ? e.params : null
                },
                lt = t => {
                    if (!t) throw new Error("useMatch(path: string) requires an argument of a string to match against");
                    const a = w();
                    if (!a) throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
                    const e = ot(),
                        h = _(t, a.baseuri),
                        i = E(h, e.pathname);
                    return i ? s({}, i.params, {
                        uri: i.uri,
                        path: t
                    }) : null
                }
        },
        57078: function(t, a, e) {
            "use strict";
            e.d(a, {
                Fe: function() {
                    return p
                },
                N_: function() {
                    return x
                },
                Rr: function() {
                    return c
                },
                Zf: function() {
                    return w
                },
                oo: function() {
                    return z
                }
            });
            var h = e(5556),
                i = e(96540),
                r = e(86462),
                n = e(96395);

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function c(t) {
                let a = t || "/",
                    e = "",
                    h = "";
                const i = a.indexOf("#"); - 1 !== i && (h = a.slice(i), a = a.slice(0, i));
                const r = a.indexOf("?");
                return -1 !== r && (e = a.slice(r), a = a.slice(0, r)), {
                    pathname: a,
                    search: "?" === e ? "" : e,
                    hash: "#" === h ? "" : h
                }
            }
            const o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                g = t => {
                    if ("string" == typeof t) return !(t => o.test(t))(t)
                },
                m = () => "",
                l = () => "";

            function p(t, a = m()) {
                var e;
                if (!g(t)) return t;
                if (t.startsWith("./") || t.startsWith("../")) return t;
                const h = null != (e = null != a ? a : l()) ? e : "/";
                return `${null!=h&&h.endsWith("/")?h.slice(0,-1):h}${t.startsWith("/")?t:`/${t}`}`
            }
            const d = t => null == t ? void 0 : t.startsWith("/");

            function u(t, a) {
                const {
                    pathname: e,
                    search: h,
                    hash: i
                } = c(t);
                return `${(0,n.T)(e,a)}${h}${i}`
            }
            const b = (t, a) => "number" == typeof t ? t : g(t) ? d(t) ? function(t) {
                    const a = p(t),
                        e = "always";
                    return u(a, e)
                }(t) : function(t, a) {
                    if (d(t)) return t;
                    const e = "always",
                        h = (0, r.resolve)(t, a);
                    return u(h, e)
                }(t, a) : t,
                P = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

            function w(t) {
                return p(t, l())
            }
            const f = {
                activeClassName: h.string,
                activeStyle: h.object,
                partiallyActive: h.bool
            };

            function v(t) {
                return i.createElement(r.Location, null, (({
                    location: a
                }) => i.createElement(y, s({}, t, {
                    _location: a
                }))))
            }
            class y extends i.Component {
                constructor(t) {
                    super(t), this.defaultGetProps = ({
                        isPartiallyCurrent: t,
                        isCurrent: a
                    }) => (this.props.partiallyActive ? t : a) ? {
                        className: [this.props.className, this.props.activeClassName].filter(Boolean).join(" "),
                        style: s({}, this.props.style, this.props.activeStyle)
                    } : null;
                    let a = !1;
                    "undefined" != typeof window && window.IntersectionObserver && (a = !0), this.state = {
                        IOSupported: a
                    }, this.abortPrefetch = null, this.handleRef = this.handleRef.bind(this)
                }
                _prefetch() {
                    let t = window.location.pathname + window.location.search;
                    this.props._location && this.props._location.pathname && (t = this.props._location.pathname + this.props._location.search);
                    const a = c(b(this.props.to, t)),
                        e = a.pathname + a.search;
                    if (t !== e) return ___loader.enqueue(e)
                }
                componentWillUnmount() {
                    if (!this.io) return;
                    const {
                        instance: t,
                        el: a
                    } = this.io;
                    this.abortPrefetch && this.abortPrefetch.abort(), t.unobserve(a), t.disconnect()
                }
                handleRef(t) {
                    this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current") ? this.props.innerRef.current = t : this.props.innerRef && this.props.innerRef(t), this.state.IOSupported && t && (this.io = ((t, a) => {
                        const e = new window.IntersectionObserver((e => {
                            e.forEach((e => {
                                t === e.target && a(e.isIntersecting || e.intersectionRatio > 0)
                            }))
                        }));
                        return e.observe(t), {
                            instance: e,
                            el: t
                        }
                    })(t, (t => {
                        t ? this.abortPrefetch = this._prefetch() : this.abortPrefetch && this.abortPrefetch.abort()
                    })))
                }
                render() {
                    const t = this.props,
                        {
                            to: a,
                            getProps: e = this.defaultGetProps,
                            onClick: h,
                            onMouseEnter: n,
                            state: o,
                            replace: m,
                            _location: l
                        } = t,
                        p = function(t, a) {
                            if (null == t) return {};
                            var e, h, i = {},
                                r = Object.keys(t);
                            for (h = 0; h < r.length; h++) a.indexOf(e = r[h]) >= 0 || (i[e] = t[e]);
                            return i
                        }(t, P),
                        d = b(a, l.pathname);
                    return g(d) ? i.createElement(r.Link, s({
                        to: d,
                        state: o,
                        getProps: e,
                        innerRef: this.handleRef,
                        onMouseEnter: t => {
                            n && n(t);
                            const a = c(d);
                            ___loader.hovering(a.pathname + a.search)
                        },
                        onClick: t => {
                            if (h && h(t), !(0 !== t.button || this.props.target || t.defaultPrevented || t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)) {
                                t.preventDefault();
                                let a = m;
                                const e = encodeURI(d) === l.pathname;
                                "boolean" != typeof m && e && (a = !0), window.___navigate(d, {
                                    state: o,
                                    replace: a
                                })
                            }
                            return !0
                        }
                    }, p)) : i.createElement("a", s({
                        href: d
                    }, p))
                }
            }
            y.propTypes = s({}, f, {
                onClick: h.func,
                to: h.string.isRequired,
                replace: h.bool,
                state: h.object
            });
            const x = i.forwardRef(((t, a) => i.createElement(v, s({
                    innerRef: a
                }, t)))),
                z = (t, a) => {
                    window.___navigate(b(t, window.location.pathname), a)
                }
        },
        75535: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                Script: function() {
                    return d
                },
                ScriptStrategy: function() {
                    return o
                },
                collectedScriptsByPage: function() {
                    return s
                },
                scriptCache: function() {
                    return l
                },
                scriptCallbackCache: function() {
                    return p
                }
            });
            var h = e(96540),
                i = e(86462);

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var e = arguments[a];
                        for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            const n = new Map,
                s = {
                    get: t => n.get(t) || [],
                    set(t, a) {
                        const e = n.get(t) || [];
                        e.push(a), n.set(t, e)
                    },
                    delete(t) {
                        n.delete(t)
                    }
                },
                c = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    const a = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - a))
                            }
                        })
                    }), 1)
                };
            var o, g;
            (g = o || (o = {})).postHydrate = "post-hydrate", g.idle = "idle", g.offMainThread = "off-main-thread";
            const m = new Set(["src", "strategy", "dangerouslySetInnerHTML", "children", "onLoad", "onError"]),
                l = new Set,
                p = new Map;

            function d(t) {
                return h.createElement(i.Location, null, (() => h.createElement(u, t)))
            }

            function u(t) {
                const {
                    src: a,
                    strategy: e = o.postHydrate
                } = t || {}, {
                    pathname: n
                } = (0, i.useLocation)();
                if ((0, h.useEffect)((() => {
                        let a;
                        switch (e) {
                            case o.postHydrate:
                                a = b(t);
                                break;
                            case o.idle:
                                c((() => {
                                    a = b(t)
                                }));
                                break;
                            case o.offMainThread:
                                {
                                    const a = w(t);s.set(n, a)
                                }
                        }
                        return () => {
                            const {
                                script: t,
                                loadCallback: e,
                                errorCallback: h
                            } = a || {};
                            e && (null == t || t.removeEventListener("load", e)), h && (null == t || t.removeEventListener("error", h)), null == t || t.remove()
                        }
                    }), []), e === o.offMainThread) {
                    const i = P(t),
                        c = w(t);
                    return "undefined" == typeof window && s.set(n, c), h.createElement("script", i ? r({
                        type: "text/partytown",
                        "data-strategy": e,
                        crossOrigin: "anonymous"
                    }, c, {
                        dangerouslySetInnerHTML: {
                            __html: P(t)
                        }
                    }) : r({
                        type: "text/partytown",
                        src: f(a),
                        "data-strategy": e,
                        crossOrigin: "anonymous"
                    }, c))
                }
                return null
            }

            function b(t) {
                const {
                    id: a,
                    src: e,
                    strategy: h = o.postHydrate,
                    onLoad: i,
                    onError: n
                } = t || {}, s = a || e, c = ["load", "error"], g = {
                    load: i,
                    error: n
                };
                if (s) {
                    for (const t of c)
                        if (null != g && g[t]) {
                            var m;
                            const a = p.get(s) || {},
                                {
                                    callbacks: e = []
                                } = (null == a ? void 0 : a[t]) || {};
                            var d, u;
                            e.push(null == g ? void 0 : g[t]), null != a && null != (m = a[t]) && m.event ? null == g || null == (d = g[t]) || d.call(g, null == a || null == (u = a[t]) ? void 0 : u.event) : p.set(s, r({}, a, {
                                [t]: {
                                    callbacks: e
                                }
                            }))
                        }
                    if (l.has(s)) return null
                }
                const b = P(t),
                    f = w(t),
                    y = document.createElement("script");
                a && (y.id = a), y.dataset.strategy = h;
                for (const [r, o] of Object.entries(f)) y.setAttribute(r, o);
                b && (y.textContent = b), e && (y.src = e);
                const x = {};
                if (s) {
                    for (const t of c) {
                        const a = a => v(a, s, t);
                        y.addEventListener(t, a), x[`${t}Callback`] = a
                    }
                    l.add(s)
                }
                return document.body.appendChild(y), {
                    script: y,
                    loadCallback: x.loadCallback,
                    errorCallback: x.errorCallback
                }
            }

            function P(t) {
                const {
                    dangerouslySetInnerHTML: a,
                    children: e = ""
                } = t || {}, {
                    __html: h = ""
                } = a || {};
                return h || e
            }

            function w(t) {
                const a = {};
                for (const [e, h] of Object.entries(t)) m.has(e) || (a[e] = h);
                return a
            }

            function f(t) {
                if (t) return `/__third-party-proxy?url=${encodeURIComponent(t)}`
            }

            function v(t, a, e) {
                const h = p.get(a) || {};
                for (const r of (null == h || null == (i = h[e]) ? void 0 : i.callbacks) || []) {
                    var i;
                    r(t)
                }
                p.set(a, {
                    [e]: {
                        event: t
                    }
                })
            }
        }
    },
    function(t) {
        t.O(0, [6593, 5791], (function() {
            return a = 56498, t(t.s = a);
            var a
        }));
        t.O()
    }
]);