/*! For license information please see 0135d10872323fdb7a86bf82effc9771f95ce3be-df2f2625d03100c62f48.js.LICENSE.txt */
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [6182], {
        65756: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                u = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                o = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                c = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = c(n(96540)),
                l = u(n(8711)),
                a = n(24606),
                f = l.default.a `
  display: inline-block;
  letter-spacing: 0;
  font-weight: 600;
  text-decoration: none;

  ${({color:e})=>e?l.css`
            color: $ {
                e
            };
            `:l.css`
            color: $ {
                a.colors.solid.primaryBlue
            };
            `}
`;
            t.default = e => {
                const {
                    children: t,
                    href: n = "#",
                    newTab: r = !1,
                    color: i,
                    ReactComponent: u
                } = e, c = o(e, ["children", "href", "newTab", "color", "ReactComponent"]), l = r ? {
                    target: "_blank"
                } : void 0, a = i ? {
                    color: i
                } : void 0, d = {
                    href: n
                };
                return void 0 !== u ? s.default.createElement(u, Object.assign({}, e)) : s.default.createElement(f, Object.assign({}, d, a, l, c), t)
            }
        },
        62198: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                u = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                o = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                c = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = u(n(96540)),
                l = c(n(86499)),
                a = n(57558),
                f = c(n(35638)),
                d = c(n(95339)),
                p = c(n(13025)),
                h = c(n(26234)),
                m = c(n(37210)),
                g = e => {
                    var {
                        children: t
                    } = e, n = o(e, ["children"]);
                    return s.default.createElement(m.default, Object.assign({}, n, {
                        as: "span"
                    }), t)
                },
                x = (0, a.unified)().use(f.default).use(d.default).use(p.default).use(l.default, {
                    createElement: s.default.createElement,
                    components: h.default
                }),
                k = (0, s.forwardRef)(((e, t) => {
                    var {
                        htmlAst: n,
                        html: r,
                        disabledLinks: i = !1
                    } = e, u = o(e, ["htmlAst", "html", "disabledLinks"]);
                    if (r) {
                        const e = x.processSync(r);
                        return s.default.createElement("div", Object.assign({
                            ref: t
                        }, u), e.result)
                    }
                    return s.default.createElement("div", Object.assign({
                        ref: t
                    }, u), (e => new l.default({
                        createElement: s.createElement,
                        Fragment: s.Fragment,
                        components: Object.assign(Object.assign({}, h.default), {
                            a: e ? g : m.default
                        })
                    }))(i).Compiler(n))
                }));
            t.default = k
        },
        41455: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(62198);
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r(i).default
                }
            })
        },
        26234: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(96540)),
                u = r(n(31889)),
                o = r(n(8344)),
                c = r(n(2239)),
                s = r(n(102)),
                l = r(n(77)),
                a = r(n(75908)),
                f = r(n(49756)),
                d = r(n(31517)),
                p = r(n(47863)),
                h = r(n(41931)),
                m = r(n(31778)),
                g = r(n(25622)),
                x = r(n(37210)),
                k = {
                    h1: u.default,
                    h2: o.default,
                    h3: c.default,
                    h4: s.default,
                    h5: l.default,
                    h6: a.default,
                    p: f.default,
                    blockquote: d.default,
                    a: x.default,
                    ol: e => i.default.createElement(g.default, Object.assign({
                        type: "ol"
                    }, e)),
                    ul: e => i.default.createElement(g.default, Object.assign({}, e)),
                    strong: e => i.default.createElement("strong", Object.assign({}, e)),
                    code: p.default,
                    pre: h.default,
                    iframe: m.default
                };
            t.default = k
        },
        41931: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(49466);
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r(i).default
                }
            })
        },
        27587: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.headingCommon = t.textCommon = void 0;
            const r = n(8711);
            t.textCommon = r.css `
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`, t.headingCommon = r.css `
  ${t.textCommon}

  ${({theme:e})=>r.css`
            padding - bottom: $ {
                2 * e.spacing.unit
            }
            px;
            `}
`
        },
        46093: function(e) {
            "use strict";
            e.exports = function(e) {
                return String(e).replace(/\s+/g, " ")
            }
        },
        14513: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u, o, c = t || 4,
                    s = [],
                    l = 0,
                    a = 0,
                    f = -1;
                if ("string" != typeof e) throw new Error("detab expected string");
                for (; a < e.length;) i.lastIndex = a, o = (u = i.exec(e)) ? u.index : e.length, 9 === e.charCodeAt(o) ? (n = c - (f + o - a + 1) % c, s.push(e.slice(l, o), r(" ", n)), f += o - a + n, l = o + 1) : f = -1, a = o + 1;
                return s.push(e.slice(l)), s.join("")
            };
            var r = n(75208),
                i = /[\t\n\r]/g
        },
        11312: function(e, t, n) {
            "use strict";
            var r = n(27626);
            e.exports = function(e, t) {
                return function(e) {
                    return t;

                    function t(t) {
                        var n = t && u(t);
                        return n && i.call(e, n) ? e[n] : null
                    }
                }(function(e, t) {
                    var n = {};
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return r(e, "definition", t && t.commonmark ? o : c), n;

                    function o(e) {
                        var t = u(e.identifier);
                        i.call(n, t) || (n[t] = e)
                    }

                    function c(e) {
                        n[u(e.identifier)] = e
                    }
                }(e, t))
            };
            var i = {}.hasOwnProperty;

            function u(e) {
                return e.toUpperCase()
            }
        },
        95060: function(e) {
            "use strict";

            function t(e) {
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if (null == e) return i;
                if ("object" == typeof e) return ("length" in e ? r : n)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n(e) {
                return function(t) {
                    var n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }
            }

            function r(e) {
                var n = function(e) {
                        for (var n = [], r = e.length, i = -1; ++i < r;) n[i] = t(e[i]);
                        return n
                    }(e),
                    r = n.length;
                return function() {
                    var e = -1;
                    for (; ++e < r;)
                        if (n[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function i() {
                return !0
            }
            e.exports = t
        },
        31626: function(e, t, n) {
            "use strict";
            e.exports = c;
            var r = n(95060),
                i = !0,
                u = "skip",
                o = !1;

            function c(e, t, n, i) {
                var c;

                function l(e, r, a) {
                    var f, d = [];
                    return (t && !c(e, r, a[a.length - 1] || null) || (d = s(n(e, a)))[0] !== o) && e.children && d[0] !== u ? (f = s(function(e, t) {
                        var n, r = -1,
                            u = i ? -1 : 1,
                            c = (i ? e.length : r) + u;
                        for (; c > r && c < e.length;) {
                            if ((n = l(e[c], c, t))[0] === o) return n;
                            c = "number" == typeof n[1] ? n[1] : c + u
                        }
                    }(e.children, a.concat(e))), f[0] === o ? f : d) : d
                }
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), c = r(t), l(e, null, [])
            }

            function s(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [i, e] : [e]
            }
            c.CONTINUE = i, c.SKIP = u, c.EXIT = o
        },
        27626: function(e, t, n) {
            "use strict";
            e.exports = c;
            var r = n(31626),
                i = r.CONTINUE,
                u = r.SKIP,
                o = r.EXIT;

            function c(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            c.CONTINUE = i, c.SKIP = u, c.EXIT = o
        },
        43331: function(e) {
            "use strict";
            var t = {};

            function n(e, r, i) {
                var u, o, c, s, l, a = "";
                for ("string" != typeof r && (i = r, r = n.defaultChars), void 0 === i && (i = !0), l = function(e) {
                        var n, r, i = t[e];
                        if (i) return i;
                        for (i = t[e] = [], n = 0; n < 128; n++) r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                        for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n];
                        return i
                    }(r), u = 0, o = e.length; u < o; u++)
                    if (c = e.charCodeAt(u), i && 37 === c && u + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(u + 1, u + 3))) a += e.slice(u, u + 3), u += 2;
                    else if (c < 128) a += l[c];
                else if (c >= 55296 && c <= 57343) {
                    if (c >= 55296 && c <= 56319 && u + 1 < o && (s = e.charCodeAt(u + 1)) >= 56320 && s <= 57343) {
                        a += encodeURIComponent(e[u] + e[u + 1]), u++;
                        continue
                    }
                    a += "%EF%BF%BD"
                } else a += encodeURIComponent(e[u]);
                return a
            }
            n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n
        },
        13025: function(e, t, n) {
            "use strict";
            var r = n(26022);
            e.exports = function(e, t) {
                e && !e.process && (t = e, e = null);
                return e ? function(e, t) {
                    return n;

                    function n(n, i, u) {
                        function o(e) {
                            u(e)
                        }
                        e.run(r(n, t), i, o)
                    }
                }(e, t) : function(e) {
                    return t;

                    function t(t) {
                        return r(t, e)
                    }
                }(t)
            }
        },
        26022: function(e, t, n) {
            "use strict";
            e.exports = n(15130)
        },
        63025: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u, o = t.children || [],
                    c = o.length,
                    s = [],
                    l = -1;
                for (; ++l < c;)(n = i(e, o[l], t)) && (l && "break" === o[l - 1].type && (n.value && (n.value = r.left(n.value)), (u = n.children && n.children[0]) && u.value && (u.value = r.left(u.value))), s = s.concat(n));
                return s
            };
            var r = n(98233),
                i = n(32530)
        },
        81335: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n, o, c, s = e.footnotes,
                    l = s.length,
                    a = -1,
                    f = [];
                if (!l) return null;
                for (; ++a < l;) c = (o = (t = s[a]).children.concat())[o.length - 1], n = {
                    type: "link",
                    url: "#fnref-" + t.identifier,
                    data: {
                        hProperties: {
                            className: ["footnote-backref"]
                        }
                    },
                    children: [{
                        type: "text",
                        value: "↩"
                    }]
                }, c && "paragraph" === c.type || (c = {
                    type: "paragraph",
                    children: []
                }, o.push(c)), c.children.push(n), f[a] = {
                    type: "listItem",
                    data: {
                        hProperties: {
                            id: "fn-" + t.identifier
                        }
                    },
                    children: o,
                    position: t.position
                };
                return e(null, "div", {
                    className: ["footnotes"]
                }, u([r(e), i(e, {
                    type: "list",
                    ordered: !0,
                    children: f
                })], !0))
            };
            var r = n(4077),
                i = n(97764),
                u = n(65240)
        },
        84619: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "blockquote", r(i(e, t), !0))
            };
            var r = n(65240),
                i = n(63025)
        },
        10853: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return [e(t, "br"), r("text", "\n")]
            };
            var r = n(92076)
        },
        67793: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.value ? r(t.value + "\n") : "",
                    u = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                    o = {};
                u && (o.className = ["language-" + u]);
                return e(t.position, "pre", [e(t, "code", o, [i("text", n)])])
            };
            var r = n(14513),
                i = n(92076)
        },
        55779: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "del", r(e, t))
            };
            var r = n(63025)
        },
        17674: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "em", r(e, t))
            };
            var r = n(63025)
        },
        10008: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.identifier;
                return e(t.position, "sup", {
                    id: "fnref-" + n
                }, [e(t, "a", {
                    href: "#fn-" + n,
                    className: ["footnote-ref"]
                }, [r("text", n)])])
            };
            var r = n(92076)
        },
        14132: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = [],
                    i = 1,
                    u = e.footnotes,
                    o = u.length,
                    c = -1;
                for (; ++c < o;) n[c] = u[c].identifier;
                for (; - 1 !== n.indexOf(String(i));) i++;
                return i = String(i), u.push({
                    type: "footnoteDefinition",
                    identifier: i,
                    children: [{
                        type: "paragraph",
                        children: t.children
                    }],
                    position: t.position
                }), r(e, {
                    type: "footnoteReference",
                    identifier: i,
                    position: t.position
                })
            };
            var r = n(10008)
        },
        51656: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "h" + t.depth, r(e, t))
            };
            var r = n(63025)
        },
        69773: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.dangerous ? e.augment(t, r("raw", t.value)) : null
            };
            var r = n(92076)
        },
        88983: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u = e.definition(t.identifier);
                if (!u) return i(e, t);
                n = {
                    src: r(u.url || ""),
                    alt: t.alt
                }, null !== u.title && void 0 !== u.title && (n.title = u.title);
                return e(t, "img", n)
            };
            var r = n(43331),
                i = n(36198)
        },
        62523: function(e, t, n) {
            "use strict";
            var r = n(43331);
            e.exports = function(e, t) {
                var n = {
                    src: r(t.url),
                    alt: t.alt
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "img", n)
            }
        },
        71190: function(e, t, n) {
            "use strict";

            function r() {
                return null
            }
            e.exports = {
                blockquote: n(84619),
                break: n(10853),
                code: n(67793),
                delete: n(55779),
                emphasis: n(17674),
                footnoteReference: n(10008),
                footnote: n(14132),
                heading: n(51656),
                html: n(69773),
                imageReference: n(88983),
                image: n(62523),
                inlineCode: n(66367),
                linkReference: n(75556),
                link: n(99304),
                listItem: n(74438),
                list: n(97764),
                paragraph: n(73488),
                root: n(44736),
                strong: n(14951),
                table: n(58442),
                text: n(53887),
                thematicBreak: n(4077),
                toml: r,
                yaml: r,
                definition: r,
                footnoteDefinition: r
            }
        },
        66367: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "code", [i("text", r(t.value))])
            };
            var r = n(46093),
                i = n(92076)
        },
        75556: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o = e.definition(t.identifier);
                if (!o) return i(e, t);
                n = {
                    href: r(o.url || "")
                }, null !== o.title && void 0 !== o.title && (n.title = o.title);
                return e(t, "a", n, u(e, t))
            };
            var r = n(43331),
                i = n(36198),
                u = n(63025)
        },
        99304: function(e, t, n) {
            "use strict";
            var r = n(43331),
                i = n(63025);
            e.exports = function(e, t) {
                var n = {
                    href: r(t.url)
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "a", n, i(e, t))
            }
        },
        74438: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                var c, s, l, a, f, d = t.children[0],
                    p = u(e, t),
                    h = n ? function(e) {
                        var t = e.spread,
                            n = e.children,
                            r = n.length,
                            i = -1;
                        for (; !t && ++i < r;) t = o(n[i]);
                        return t
                    }(n) : o(t),
                    m = {};
                if (h) c = p;
                else
                    for (c = [], a = p.length, l = -1; ++l < a;) "p" === (f = p[l]).tagName ? c = c.concat(f.children) : c.push(f);
                "boolean" == typeof t.checked && (!h || d && "paragraph" === d.type || c.unshift(e(null, "p", [])), 0 !== (s = h ? c[0].children : c).length && s.unshift(r("text", " ")), s.unshift(e(null, "input", {
                    type: "checkbox",
                    checked: t.checked,
                    disabled: !0
                })), m.className = ["task-list-item"]);
                h && 0 !== c.length && (c = i(c, !0));
                return e(t, "li", m, c)
            };
            var r = n(92076),
                i = n(65240),
                u = n(63025);

            function o(e) {
                var t = e.spread;
                return null == t ? e.children.length > 1 : t
            }
        },
        97764: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = {},
                    u = t.ordered ? "ol" : "ul";
                "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
                return e(t, u, n, r(i(e, t), !0))
            };
            var r = n(65240),
                i = n(63025)
        },
        73488: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "p", r(e, t))
            };
            var r = n(63025)
        },
        44736: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("root", i(u(e, t))))
            };
            var r = n(92076),
                i = n(65240),
                u = n(63025)
        },
        14951: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "strong", r(e, t))
            };
            var r = n(63025)
        },
        58442: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o, c, s, l, a = t.children,
                    f = a.length,
                    d = t.align,
                    p = d.length,
                    h = [];
                for (; f--;) {
                    for (o = a[f].children, s = 0 === f ? "th" : "td", n = p, c = []; n--;) l = o[n], c[n] = e(l, s, {
                        align: d[n]
                    }, l ? u(e, l) : []);
                    h[f] = e(a[f], "tr", i(c, !0))
                }
                return e(t, "table", i([e(h[0].position, "thead", i([h[0]], !0)), e({
                    start: r.start(h[1]),
                    end: r.end(h[h.length - 1])
                }, "tbody", i(h.slice(1), !0))], !0))
            };
            var r = n(90295),
                i = n(65240),
                u = n(63025)
        },
        53887: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("text", i(t.value)))
            };
            var r = n(92076),
                i = n(45447)
        },
        4077: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "hr")
            }
        },
        15130: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = function(e, t) {
                        var n = t || {},
                            i = n.allowDangerousHTML;
                        return a.dangerous = i, a.definition = s(e, n), a.footnotes = [], a.augment = l, a.handlers = r(f, n.handlers || {}), u(e, "footnoteDefinition", d), a;

                        function l(e, t) {
                            var n, i;
                            return e && "data" in e && (n = e.data, "element" === t.type && n.hName && (t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = r(t.properties, n.hProperties)), t.children && n.hChildren && (t.children = n.hChildren)), i = e && e.position ? e : {
                                position: e
                            }, c(i) || (t.position = {
                                start: o.start(i),
                                end: o.end(i)
                            }), t
                        }

                        function a(e, t, n, r) {
                            return null == r && "object" == typeof n && "length" in n && (r = n, n = {}), l(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }

                        function d(e) {
                            a.footnotes.push(e)
                        }
                    }(e, t),
                    d = l(n, e),
                    p = a(n);
                d && d.children && p && (d.children = d.children.concat(i("text", "\n"), p));
                return d
            };
            var r = n(57510),
                i = n(92076),
                u = n(27483),
                o = n(90295),
                c = n(85726),
                s = n(11312),
                l = n(32530),
                a = n(81335),
                f = n(71190)
        },
        32530: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                var r = t && t.type,
                    i = u.call(e.handlers, r) ? e.handlers[r] : null;
                if (!r) throw new Error("Expected node, got `" + t + "`");
                return ("function" == typeof i ? i : o)(e, t, n)
            };
            var r = n(92076),
                i = n(63025),
                u = {}.hasOwnProperty;

            function o(e, t) {
                return function(e) {
                    var t = e.data || {};
                    if (u.call(t, "hName") || u.call(t, "hProperties") || u.call(t, "hChildren")) return !1;
                    return "value" in e
                }(t) ? e.augment(t, r("text", t.value)) : e(t, "div", i(e, t))
            }
        },
        36198: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u, o, c = t.referenceType,
                    s = "]";
                "collapsed" === c ? s += "[]" : "full" === c && (s += "[" + (t.label || t.identifier) + "]");
                if ("imageReference" === t.type) return r("text", "![" + t.alt + s);
                n = i(e, t), (u = n[0]) && "text" === u.type ? u.value = "[" + u.value : n.unshift(r("text", "["));
                (o = n[n.length - 1]) && "text" === o.type ? o.value += s : n.push(r("text", s));
                return n
            };
            var r = n(92076),
                i = n(63025)
        },
        65240: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = [],
                    i = -1,
                    u = e.length;
                t && n.push(r("text", "\n"));
                for (; ++i < u;) i && n.push(r("text", "\n")), n.push(e[i]);
                t && 0 !== e.length && n.push(r("text", "\n"));
                return n
            };
            var r = n(92076)
        },
        45447: function(e) {
            "use strict";
            e.exports = function(e) {
                return String(e).replace(t, n)
            };
            var t = /[ \t]*\n+[ \t]*/g,
                n = "\n"
        },
        35739: function(e) {
            "use strict";

            function t(e) {
                if ("string" == typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if (null == e) return i;
                if ("object" == typeof e) return ("length" in e ? r : n)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n(e) {
                return function(t) {
                    var n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }
            }

            function r(e) {
                var n = function(e) {
                        for (var n = [], r = e.length, i = -1; ++i < r;) n[i] = t(e[i]);
                        return n
                    }(e),
                    r = n.length;
                return function() {
                    var e = -1;
                    for (; ++e < r;)
                        if (n[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function i() {
                return !0
            }
            e.exports = t
        },
        71851: function(e, t, n) {
            "use strict";
            e.exports = c;
            var r = n(35739),
                i = !0,
                u = "skip",
                o = !1;

            function c(e, t, n, i) {
                var c;

                function l(e, r, a) {
                    var f, d = [];
                    return (t && !c(e, r, a[a.length - 1] || null) || (d = s(n(e, a)))[0] !== o) && e.children && d[0] !== u ? (f = s(function(e, t) {
                        var n, r = -1,
                            u = i ? -1 : 1,
                            c = (i ? e.length : r) + u;
                        for (; c > r && c < e.length;) {
                            if ((n = l(e[c], c, t))[0] === o) return n;
                            c = "number" == typeof n[1] ? n[1] : c + u
                        }
                    }(e.children, a.concat(e))), f[0] === o ? f : d) : d
                }
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), c = r(t), l(e, null, [])
            }

            function s(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [i, e] : [e]
            }
            c.CONTINUE = i, c.SKIP = u, c.EXIT = o
        },
        27483: function(e, t, n) {
            "use strict";
            e.exports = c;
            var r = n(71851),
                i = r.CONTINUE,
                u = r.SKIP,
                o = r.EXIT;

            function c(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            c.CONTINUE = i, c.SKIP = u, c.EXIT = o
        },
        75208: function(e) {
            "use strict";
            var t, n = "";
            e.exports = function(e, r) {
                if ("string" != typeof e) throw new TypeError("expected a string");
                if (1 === r) return e;
                if (2 === r) return e + e;
                var i = e.length * r;
                if (t !== e || void 0 === t) t = e, n = "";
                else if (n.length >= i) return n.substr(0, i);
                for (; i > n.length && r > 1;) 1 & r && (n += e), r >>= 1, e += e;
                return n = (n += e).substr(0, i)
            }
        },
        98233: function(e, t) {
            (t = e.exports = function(e) {
                return e.trim ? e.trim() : t.right(t.left(e))
            }).left = function(e) {
                return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, "")
            }, t.right = function(e) {
                if (e.trimRight) return e.trimRight();
                for (var t = /\s/, n = e.length; t.test(e.charAt(--n)););
                return e.slice(0, n + 1)
            }
        },
        92076: function(e, t, n) {
            "use strict";
            var r = n(18828);
            e.exports = function(e, t, n) {
                var i;
                null != n || "object" == typeof t && !Array.isArray(t) || (n = t, t = {});
                i = r({
                    type: String(e)
                }, t), Array.isArray(n) ? i.children = n : null != n && (i.value = String(n));
                return i
            }
        },
        85726: function(e) {
            "use strict";
            e.exports = function(e) {
                return !(e && e.position && e.position.start && e.position.start.line && e.position.start.column && e.position.end && e.position.end.line && e.position.end.column)
            }
        },
        90295: function(e) {
            "use strict";
            var t = i("start"),
                n = i("end");

            function r(e) {
                return {
                    start: t(e),
                    end: n(e)
                }
            }

            function i(e) {
                return t.displayName = e, t;

                function t(t) {
                    var n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: isNaN(n.offset) ? null : n.offset
                    }
                }
            }
            e.exports = r, r.start = t, r.end = n
        },
        86499: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r.A
                }
            });
            var r = n(44197)
        },
        35638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return We
                }
            });
            var r = {};

            function i(e, t) {
                return function(e) {
                    return Boolean(e && "object" == typeof e)
                }(e) && ("value" in e && e.value || t && "alt" in e && e.alt || "children" in e && u(e.children, t)) || Array.isArray(e) && u(e, t) || ""
            }

            function u(e, t) {
                const n = [];
                let r = -1;
                for (; ++r < e.length;) n[r] = i(e[r], t);
                return n.join("")
            }

            function o(e, t, n, r) {
                const i = e.length;
                let u, o = 0;
                if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) u = Array.from(r), u.unshift(t, n), [].splice.apply(e, u);
                else
                    for (n && [].splice.apply(e, [t, n]); o < r.length;) u = r.slice(o, o + 1e4), u.unshift(t, 0), [].splice.apply(e, u), o += 1e4, t += 1e4
            }

            function c(e, t) {
                return e.length > 0 ? (o(e, e.length, 0, t), e) : t
            }
            n.r(r), n.d(r, {
                attentionMarkers: function() {
                    return Oe
                },
                contentInitial: function() {
                    return Ee
                },
                disable: function() {
                    return Te
                },
                document: function() {
                    return Se
                },
                flow: function() {
                    return _e
                },
                flowInitial: function() {
                    return Ce
                },
                insideSpan: function() {
                    return Ae
                },
                string: function() {
                    return Ie
                },
                text: function() {
                    return we
                }
            });
            const s = {}.hasOwnProperty;

            function l(e, t) {
                let n;
                for (n in t) {
                    const r = (s.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                        i = t[n];
                    let u;
                    for (u in i) {
                        s.call(r, u) || (r[u] = []);
                        const e = i[u];
                        a(r[u], Array.isArray(e) ? e : e ? [e] : [])
                    }
                }
            }

            function a(e, t) {
                let n = -1;
                const r = [];
                for (; ++n < t.length;)("after" === t[n].add ? e : r).push(t[n]);
                o(e, 0, 0, r)
            }
            const f = S(/[A-Za-z]/),
                d = S(/\d/),
                p = S(/[\dA-Fa-f]/),
                h = S(/[\dA-Za-z]/),
                m = S(/[!-/:-@[-`{-~]/),
                g = S(/[#-'*+\--9=?A-Z^-~]/);

            function x(e) {
                return null !== e && (e < 32 || 127 === e)
            }

            function k(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function v(e) {
                return null !== e && e < -2
            }

            function y(e) {
                return -2 === e || -1 === e || 32 === e
            }
            const b = S(/\s/),
                F = S(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

            function S(e) {
                return function(t) {
                    return null !== t && e.test(String.fromCharCode(t))
                }
            }

            function E(e, t, n, r) {
                const i = r ? r - 1 : Number.POSITIVE_INFINITY;
                let u = 0;
                return function(r) {
                    if (y(r)) return e.enter(n), o(r);
                    return t(r)
                };

                function o(r) {
                    return y(r) && u++ < i ? (e.consume(r), o) : (e.exit(n), t(r))
                }
            }
            const C = {
                tokenize: function(e) {
                    const t = e.attempt(this.parser.constructs.contentInitial, (function(n) {
                        if (null === n) return void e.consume(n);
                        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), E(e, t, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), r(t)
                    }));
                    let n;
                    return t;

                    function r(t) {
                        const r = e.enter("chunkText", {
                            contentType: "text",
                            previous: n
                        });
                        return n && (n.next = r), n = r, i(t)
                    }

                    function i(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : v(t) ? (e.consume(t), e.exit("chunkText"), r) : (e.consume(t), i)
                    }
                }
            };
            const _ = {
                    tokenize: function(e) {
                        const t = this,
                            n = [];
                        let r, i, u, c = 0;
                        return s;

                        function s(r) {
                            if (c < n.length) {
                                const i = n[c];
                                return t.containerState = i[1], e.attempt(i[0].continuation, l, a)(r)
                            }
                            return a(r)
                        }

                        function l(e) {
                            if (c++, t.containerState._closeFlow) {
                                t.containerState._closeFlow = void 0, r && y();
                                const n = t.events.length;
                                let i, u = n;
                                for (; u--;)
                                    if ("exit" === t.events[u][0] && "chunkFlow" === t.events[u][1].type) {
                                        i = t.events[u][1].end;
                                        break
                                    }
                                k(c);
                                let s = n;
                                for (; s < t.events.length;) t.events[s][1].end = Object.assign({}, i), s++;
                                return o(t.events, u + 1, 0, t.events.slice(n)), t.events.length = s, a(e)
                            }
                            return s(e)
                        }

                        function a(i) {
                            if (c === n.length) {
                                if (!r) return p(i);
                                if (r.currentConstruct && r.currentConstruct.concrete) return m(i);
                                t.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack)
                            }
                            return t.containerState = {}, e.check(I, f, d)(i)
                        }

                        function f(e) {
                            return r && y(), k(c), p(e)
                        }

                        function d(e) {
                            return t.parser.lazy[t.now().line] = c !== n.length, u = t.now().offset, m(e)
                        }

                        function p(n) {
                            return t.containerState = {}, e.attempt(I, h, m)(n)
                        }

                        function h(e) {
                            return c++, n.push([t.currentConstruct, t.containerState]), p(e)
                        }

                        function m(n) {
                            return null === n ? (r && y(), k(0), void e.consume(n)) : (r = r || t.parser.flow(t.now()), e.enter("chunkFlow", {
                                contentType: "flow",
                                previous: i,
                                _tokenizer: r
                            }), g(n))
                        }

                        function g(n) {
                            return null === n ? (x(e.exit("chunkFlow"), !0), k(0), void e.consume(n)) : v(n) ? (e.consume(n), x(e.exit("chunkFlow")), c = 0, t.interrupt = void 0, s) : (e.consume(n), g)
                        }

                        function x(e, n) {
                            const s = t.sliceStream(e);
                            if (n && s.push(null), e.previous = i, i && (i.next = e), i = e, r.defineSkip(e.start), r.write(s), t.parser.lazy[e.start.line]) {
                                let e = r.events.length;
                                for (; e--;)
                                    if (r.events[e][1].start.offset < u && (!r.events[e][1].end || r.events[e][1].end.offset > u)) return;
                                const n = t.events.length;
                                let i, s, l = n;
                                for (; l--;)
                                    if ("exit" === t.events[l][0] && "chunkFlow" === t.events[l][1].type) {
                                        if (i) {
                                            s = t.events[l][1].end;
                                            break
                                        }
                                        i = !0
                                    }
                                for (k(c), e = n; e < t.events.length;) t.events[e][1].end = Object.assign({}, s), e++;
                                o(t.events, l + 1, 0, t.events.slice(n)), t.events.length = e
                            }
                        }

                        function k(r) {
                            let i = n.length;
                            for (; i-- > r;) {
                                const r = n[i];
                                t.containerState = r[1], r[0].exit.call(t, e)
                            }
                            n.length = r
                        }

                        function y() {
                            r.write([null]), i = void 0, r = void 0, t.containerState._closeFlow = void 0
                        }
                    }
                },
                I = {
                    tokenize: function(e, t, n) {
                        return E(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                };
            const w = {
                tokenize: function(e, t, n) {
                    return E(e, (function(e) {
                        return null === e || v(e) ? t(e) : n(e)
                    }), "linePrefix")
                },
                partial: !0
            };

            function A(e) {
                const t = {};
                let n, r, i, u, c, s, l, a = -1;
                for (; ++a < e.length;) {
                    for (; a in t;) a = t[a];
                    if (n = e[a], a && "chunkFlow" === n[1].type && "listItemPrefix" === e[a - 1][1].type && (s = n[1]._tokenizer.events, i = 0, i < s.length && "lineEndingBlank" === s[i][1].type && (i += 2), i < s.length && "content" === s[i][1].type))
                        for (; ++i < s.length && "content" !== s[i][1].type;) "chunkText" === s[i][1].type && (s[i][1]._isInFirstContentOfListItem = !0, i++);
                    if ("enter" === n[0]) n[1].contentType && (Object.assign(t, O(e, a)), a = t[a], l = !0);
                    else if (n[1]._container) {
                        for (i = a, r = void 0; i-- && (u = e[i], "lineEnding" === u[1].type || "lineEndingBlank" === u[1].type);) "enter" === u[0] && (r && (e[r][1].type = "lineEndingBlank"), u[1].type = "lineEnding", r = i);
                        r && (n[1].end = Object.assign({}, e[r][1].start), c = e.slice(r, a), c.unshift(n), o(e, r, a - r + 1, c))
                    }
                }
                return !l
            }

            function O(e, t) {
                const n = e[t][1],
                    r = e[t][2];
                let i = t - 1;
                const u = [],
                    c = n._tokenizer || r.parser[n.contentType](n.start),
                    s = c.events,
                    l = [],
                    a = {};
                let f, d, p = -1,
                    h = n,
                    m = 0,
                    g = 0;
                const x = [g];
                for (; h;) {
                    for (; e[++i][1] !== h;);
                    u.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), d && c.defineSkip(h.start), h._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(f), h._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), d = h, h = h.next
                }
                for (h = n; ++p < s.length;) "exit" === s[p][0] && "enter" === s[p - 1][0] && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (g = p + 1, x.push(g), h._tokenizer = void 0, h.previous = void 0, h = h.next);
                for (c.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : x.pop(), p = x.length; p--;) {
                    const t = s.slice(x[p], x[p + 1]),
                        n = u.pop();
                    l.unshift([n, n + t.length - 1]), o(e, n, 2, t)
                }
                for (p = -1; ++p < l.length;) a[m + l[p][0]] = m + l[p][1], m += l[p][1] - l[p][0] - 1;
                return a
            }
            const T = {
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : v(t) ? e.check(z, u, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function u(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    },
                    resolve: function(e) {
                        return A(e), e
                    }
                },
                z = {
                    tokenize: function(e, t, n) {
                        const r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || v(i)) return n(i);
                            const u = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && u && "linePrefix" === u[1].type && u[2].sliceSerialize(u[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    },
                    partial: !0
                };
            const P = {
                tokenize: function(e) {
                    const t = this,
                        n = e.attempt(w, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, r, E(e, e.attempt(this.parser.constructs.flow, r, e.attempt(T, r)), "linePrefix")));
                    return n;

                    function r(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                }
            };
            const j = {
                    resolveAll: L()
                },
                D = M("string"),
                B = M("text");

            function M(e) {
                return {
                    tokenize: function(t) {
                        const n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, u, o);
                        return u;

                        function u(e) {
                            return s(e) ? i(e) : o(e)
                        }

                        function o(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), c;
                            t.consume(e)
                        }

                        function c(e) {
                            return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), c)
                        }

                        function s(e) {
                            if (null === e) return !0;
                            const t = r[e];
                            let i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    const e = t[i];
                                    if (!e.previous || e.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: L("text" === e ? R : void 0)
                }
            }

            function L(e) {
                return function(t, n) {
                    let r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function R(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        const r = e[n - 1][1],
                            i = t.sliceStream(r);
                        let u, o = i.length,
                            c = -1,
                            s = 0;
                        for (; o--;) {
                            const e = i[o];
                            if ("string" == typeof e) {
                                for (c = e.length; 32 === e.charCodeAt(c - 1);) s++, c--;
                                if (c) break;
                                c = -1
                            } else if (-2 === e) u = !0, s++;
                            else if (-1 !== e) {
                                o++;
                                break
                            }
                        }
                        if (s) {
                            const i = {
                                type: n === e.length || u || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: r.end.line,
                                    column: r.end.column - s,
                                    offset: r.end.offset - s,
                                    _index: r.start._index + o,
                                    _bufferIndex: o ? c : r.start._bufferIndex + c
                                },
                                end: Object.assign({}, r.end)
                            };
                            r.end = Object.assign({}, i.start), r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, ["enter", i, t], ["exit", i, t]), n += 2)
                        }
                        n++
                    }
                return e
            }

            function N(e, t, n) {
                const r = [];
                let i = -1;
                for (; ++i < e.length;) {
                    const u = e[i].resolveAll;
                    u && !r.includes(u) && (t = u(t, n), r.push(u))
                }
                return t
            }

            function H(e, t, n) {
                let r = Object.assign(n ? Object.assign({}, n) : {
                    line: 1,
                    column: 1,
                    offset: 0
                }, {
                    _index: 0,
                    _bufferIndex: -1
                });
                const i = {},
                    u = [];
                let s = [],
                    l = [],
                    a = !0;
                const f = {
                        consume: function(e) {
                            v(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, S()) : -1 !== e && (r.column++, r.offset++);
                            r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++));
                            d.previous = e, a = !0
                        },
                        enter: function(e, t) {
                            const n = t || {};
                            return n.type = e, n.start = g(), d.events.push(["enter", n, d]), l.push(n), n
                        },
                        exit: function(e) {
                            const t = l.pop();
                            return t.end = g(), d.events.push(["exit", t, d]), t
                        },
                        attempt: b((function(e, t) {
                            F(e, t.from)
                        })),
                        check: b(y),
                        interrupt: b(y, {
                            interrupt: !0
                        })
                    },
                    d = {
                        previous: null,
                        code: null,
                        containerState: {},
                        events: [],
                        parser: e,
                        sliceStream: m,
                        sliceSerialize: function(e, t) {
                            return function(e, t) {
                                let n = -1;
                                const r = [];
                                let i;
                                for (; ++n < e.length;) {
                                    const u = e[n];
                                    let o;
                                    if ("string" == typeof u) o = u;
                                    else switch (u) {
                                        case -5:
                                            o = "\r";
                                            break;
                                        case -4:
                                            o = "\n";
                                            break;
                                        case -3:
                                            o = "\r\n";
                                            break;
                                        case -2:
                                            o = t ? " " : "\t";
                                            break;
                                        case -1:
                                            if (!t && i) continue;
                                            o = " ";
                                            break;
                                        default:
                                            o = String.fromCharCode(u)
                                    }
                                    i = -2 === u, r.push(o)
                                }
                                return r.join("")
                            }(m(e), t)
                        },
                        now: g,
                        defineSkip: function(e) {
                            i[e.line] = e.column, S()
                        },
                        write: function(e) {
                            if (s = c(s, e), x(), null !== s[s.length - 1]) return [];
                            return F(t, 0), d.events = N(u, d.events, d), d.events
                        }
                    };
                let p, h = t.tokenize.call(d, f);
                return t.resolveAll && u.push(t), d;

                function m(e) {
                    return function(e, t) {
                        const n = t.start._index,
                            r = t.start._bufferIndex,
                            i = t.end._index,
                            u = t.end._bufferIndex;
                        let o;
                        n === i ? o = [e[n].slice(r, u)] : (o = e.slice(n, i), r > -1 && (o[0] = o[0].slice(r)), u > 0 && o.push(e[i].slice(0, u)));
                        return o
                    }(s, e)
                }

                function g() {
                    return Object.assign({}, r)
                }

                function x() {
                    let e;
                    for (; r._index < s.length;) {
                        const t = s[r._index];
                        if ("string" == typeof t)
                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) k(t.charCodeAt(r._bufferIndex));
                        else k(t)
                    }
                }

                function k(e) {
                    a = void 0, p = e, h = h(e)
                }

                function y(e, t) {
                    t.restore()
                }

                function b(e, t) {
                    return function(n, i, u) {
                        let o, c, s, p;
                        return Array.isArray(n) ? h(n) : "tokenize" in n ? h([n]) : function(e) {
                            return t;

                            function t(t) {
                                const n = null !== t && e[t],
                                    r = null !== t && e.null;
                                return h([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t)
                            }
                        }(n);

                        function h(e) {
                            return o = e, c = 0, 0 === e.length ? u : m(e[c])
                        }

                        function m(e) {
                            return function(n) {
                                p = function() {
                                    const e = g(),
                                        t = d.previous,
                                        n = d.currentConstruct,
                                        i = d.events.length,
                                        u = Array.from(l);
                                    return {
                                        restore: o,
                                        from: i
                                    };

                                    function o() {
                                        r = e, d.previous = t, d.currentConstruct = n, d.events.length = i, l = u, S()
                                    }
                                }(), s = e, e.partial || (d.currentConstruct = e);
                                if (e.name && d.parser.constructs.disable.null.includes(e.name)) return k(n);
                                return e.tokenize.call(t ? Object.assign(Object.create(d), t) : d, f, x, k)(n)
                            }
                        }

                        function x(t) {
                            return a = !0, e(s, p), i
                        }

                        function k(e) {
                            return a = !0, p.restore(), ++c < o.length ? m(o[c]) : u
                        }
                    }
                }

                function F(e, t) {
                    e.resolveAll && !u.includes(e) && u.push(e), e.resolve && o(d.events, t, d.events.length - t, e.resolve(d.events.slice(t), d)), e.resolveTo && (d.events = e.resolveTo(d.events, d))
                }

                function S() {
                    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                }
            }
            const q = {
                name: "thematicBreak",
                tokenize: function(e, t, n) {
                    let r, i = 0;
                    return function(t) {
                        return e.enter("thematicBreak"), r = t, u(t)
                    };

                    function u(c) {
                        return c === r ? (e.enter("thematicBreakSequence"), o(c)) : y(c) ? E(e, u, "whitespace")(c) : i < 3 || null !== c && !v(c) ? n(c) : (e.exit("thematicBreak"), t(c))
                    }

                    function o(t) {
                        return t === r ? (e.consume(t), i++, o) : (e.exit("thematicBreakSequence"), u(t))
                    }
                }
            };
            const V = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        const r = this,
                            i = r.events[r.events.length - 1];
                        let u = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            o = 0;
                        return function(t) {
                            const i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : d(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(q, n, s)(t) : s(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t)
                            }
                            return n(t)
                        };

                        function c(t) {
                            return d(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), s(t)) : n(t)
                        }

                        function s(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(w, r.interrupt ? n : l, e.attempt(U, f, a))
                        }

                        function l(e) {
                            return r.containerState.initialBlankLine = !0, u++, f(e)
                        }

                        function a(t) {
                            return y(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t)
                        }

                        function f(n) {
                            return r.containerState.size = u + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            const r = this;
                            return r.containerState._closeFlow = void 0, e.check(w, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, E(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !y(n)) return r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n);
                                return r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Q, t, i)(n)
                            }));

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, E(e, e.attempt(V, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                U = {
                    tokenize: function(e, t, n) {
                        const r = this;
                        return E(e, (function(e) {
                            const i = r.events[r.events.length - 1];
                            return !y(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                Q = {
                    tokenize: function(e, t, n) {
                        const r = this;
                        return E(e, (function(e) {
                            const i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            const $ = {
                name: "blockQuote",
                tokenize: function(e, t, n) {
                    const r = this;
                    return function(t) {
                        if (62 === t) {
                            const n = r.containerState;
                            return n.open || (e.enter("blockQuote", {
                                _container: !0
                            }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                        }
                        return n(t)
                    };

                    function i(n) {
                        return y(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                    }
                },
                continuation: {
                    tokenize: function(e, t, n) {
                        return E(e, e.attempt($, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                },
                exit: function(e) {
                    e.exit("blockQuote")
                }
            };

            function W(e, t, n, r, i, u, o, c, s) {
                const l = s || Number.POSITIVE_INFINITY;
                let a = 0;
                return function(t) {
                    if (60 === t) return e.enter(r), e.enter(i), e.enter(u), e.consume(t), e.exit(u), f;
                    if (null === t || 41 === t || x(t)) return n(t);
                    return e.enter(r), e.enter(o), e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), h(t)
                };

                function f(n) {
                    return 62 === n ? (e.enter(u), e.consume(n), e.exit(u), e.exit(i), e.exit(r), t) : (e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), d(n))
                }

                function d(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(c), f(t)) : null === t || 60 === t || v(t) ? n(t) : (e.consume(t), 92 === t ? p : d)
                }

                function p(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t)
                }

                function h(i) {
                    return 40 === i ? ++a > l ? n(i) : (e.consume(i), h) : 41 === i ? a-- ? (e.consume(i), h) : (e.exit("chunkString"), e.exit(c), e.exit(o), e.exit(r), t(i)) : null === i || k(i) ? a ? n(i) : (e.exit("chunkString"), e.exit(c), e.exit(o), e.exit(r), t(i)) : x(i) ? n(i) : (e.consume(i), 92 === i ? m : h)
                }

                function m(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t)
                }
            }

            function K(e, t, n, r, i, u) {
                const o = this;
                let c, s = 0;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(u), l
                };

                function l(f) {
                    return null === f || 91 === f || 93 === f && !c || 94 === f && !s && "_hiddenFootnoteSupport" in o.parser.constructs || s > 999 ? n(f) : 93 === f ? (e.exit(u), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : v(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("chunkString", {
                        contentType: "string"
                    }), a(f))
                }

                function a(t) {
                    return null === t || 91 === t || 93 === t || v(t) || s++ > 999 ? (e.exit("chunkString"), l(t)) : (e.consume(t), c = c || !y(t), 92 === t ? f : a)
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, a) : a(t)
                }
            }

            function X(e, t, n, r, i, u) {
                let o;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, c
                };

                function c(n) {
                    return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(u), s(n))
                }

                function s(t) {
                    return t === o ? (e.exit(u), c(o)) : null === t ? n(t) : v(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E(e, s, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), l(t))
                }

                function l(t) {
                    return t === o || null === t || v(t) ? (e.exit("chunkString"), s(t)) : (e.consume(t), 92 === t ? a : l)
                }

                function a(t) {
                    return t === o || 92 === t ? (e.consume(t), l) : l(t)
                }
            }

            function Z(e, t) {
                let n;
                return function r(i) {
                    if (v(i)) return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r;
                    if (y(i)) return E(e, r, n ? "linePrefix" : "lineSuffix")(i);
                    return t(i)
                }
            }

            function Y(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            const G = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        const r = this;
                        let i;
                        return function(t) {
                            return e.enter("definition"), K.call(r, e, u, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function u(t) {
                            return i = Y(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), Z(e, W(e, e.attempt(J, E(e, o, "whitespace"), E(e, o, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function o(u) {
                            return null === u || v(u) ? (e.exit("definition"), r.parser.defined.includes(i) || r.parser.defined.push(i), t(u)) : n(u)
                        }
                    }
                },
                J = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return k(t) ? Z(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return 34 === t || 39 === t || 40 === t ? X(e, E(e, i, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function i(e) {
                            return null === e || v(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            const ee = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        const r = this;
                        return function(t) {
                            return e.enter("codeIndented"), E(e, i, "linePrefix", 5)(t)
                        };

                        function i(e) {
                            const t = r.events[r.events.length - 1];
                            return t && "linePrefix" === t[1].type && t[2].sliceSerialize(t[1], !0).length >= 4 ? u(e) : n(e)
                        }

                        function u(t) {
                            return null === t ? c(t) : v(t) ? e.attempt(te, u, c)(t) : (e.enter("codeFlowValue"), o(t))
                        }

                        function o(t) {
                            return null === t || v(t) ? (e.exit("codeFlowValue"), u(t)) : (e.consume(t), o)
                        }

                        function c(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                te = {
                    tokenize: function(e, t, n) {
                        const r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : v(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : E(e, u, "linePrefix", 5)(t)
                        }

                        function u(e) {
                            const u = r.events[r.events.length - 1];
                            return u && "linePrefix" === u[1].type && u[2].sliceSerialize(u[1], !0).length >= 4 ? t(e) : v(e) ? i(e) : n(e)
                        }
                    },
                    partial: !0
                };
            const ne = {
                name: "headingAtx",
                tokenize: function(e, t, n) {
                    const r = this;
                    let i = 0;
                    return function(t) {
                        return e.enter("atxHeading"), e.enter("atxHeadingSequence"), u(t)
                    };

                    function u(c) {
                        return 35 === c && i++ < 6 ? (e.consume(c), u) : null === c || k(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : o(c)) : n(c)
                    }

                    function o(n) {
                        return 35 === n ? (e.enter("atxHeadingSequence"), c(n)) : null === n || v(n) ? (e.exit("atxHeading"), t(n)) : y(n) ? E(e, o, "whitespace")(n) : (e.enter("atxHeadingText"), s(n))
                    }

                    function c(t) {
                        return 35 === t ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), o(t))
                    }

                    function s(t) {
                        return null === t || 35 === t || k(t) ? (e.exit("atxHeadingText"), o(t)) : (e.consume(t), s)
                    }
                },
                resolve: function(e, t) {
                    let n, r, i = e.length - 2,
                        u = 3;
                    "whitespace" === e[u][1].type && (u += 2);
                    i - 2 > u && "whitespace" === e[i][1].type && (i -= 2);
                    "atxHeadingSequence" === e[i][1].type && (u === i - 1 || i - 4 > u && "whitespace" === e[i - 2][1].type) && (i -= u + 1 === i ? 2 : 4);
                    i > u && (n = {
                        type: "atxHeadingText",
                        start: e[u][1].start,
                        end: e[i][1].end
                    }, r = {
                        type: "chunkText",
                        start: e[u][1].start,
                        end: e[i][1].end,
                        contentType: "text"
                    }, o(e, u, i - u + 1, [
                        ["enter", n, t],
                        ["enter", r, t],
                        ["exit", r, t],
                        ["exit", n, t]
                    ]));
                    return e
                }
            };
            const re = {
                name: "setextUnderline",
                tokenize: function(e, t, n) {
                    const r = this;
                    let i, u, o = r.events.length;
                    for (; o--;)
                        if ("lineEnding" !== r.events[o][1].type && "linePrefix" !== r.events[o][1].type && "content" !== r.events[o][1].type) {
                            u = "paragraph" === r.events[o][1].type;
                            break
                        }
                    return function(t) {
                        if (!r.parser.lazy[r.now().line] && (r.interrupt || u)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, c(t);
                        return n(t)
                    };

                    function c(t) {
                        return t === i ? (e.consume(t), c) : (e.exit("setextHeadingLineSequence"), E(e, s, "lineSuffix")(t))
                    }

                    function s(r) {
                        return null === r || v(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                    }
                },
                resolveTo: function(e, t) {
                    let n, r, i, u = e.length;
                    for (; u--;)
                        if ("enter" === e[u][0]) {
                            if ("content" === e[u][1].type) {
                                n = u;
                                break
                            }
                            "paragraph" === e[u][1].type && (r = u)
                        } else "content" === e[u][1].type && e.splice(u, 1), i || "definition" !== e[u][1].type || (i = u);
                    const o = {
                        type: "setextHeading",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    };
                    e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", o, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = Object.assign({}, e[i][1].end)) : e[n][1] = o;
                    return e.push(["exit", o, t]), e
                }
            };
            const ie = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                ue = ["pre", "script", "style", "textarea"],
                oe = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        const r = this;
                        let i, u, o, c, s;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), l
                        };

                        function l(c) {
                            return 33 === c ? (e.consume(c), a) : 47 === c ? (e.consume(c), m) : 63 === c ? (e.consume(c), i = 3, r.interrupt ? t : R) : f(c) ? (e.consume(c), o = String.fromCharCode(c), u = !0, g) : n(c)
                        }

                        function a(u) {
                            return 45 === u ? (e.consume(u), i = 2, d) : 91 === u ? (e.consume(u), i = 5, o = "CDATA[", c = 0, p) : f(u) ? (e.consume(u), i = 4, r.interrupt ? t : R) : n(u)
                        }

                        function d(i) {
                            return 45 === i ? (e.consume(i), r.interrupt ? t : R) : n(i)
                        }

                        function p(i) {
                            return i === o.charCodeAt(c++) ? (e.consume(i), c === o.length ? r.interrupt ? t : T : p) : n(i)
                        }

                        function m(t) {
                            return f(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t)
                        }

                        function g(c) {
                            return null === c || 47 === c || 62 === c || k(c) ? 47 !== c && u && ue.includes(o.toLowerCase()) ? (i = 1, r.interrupt ? t(c) : T(c)) : ie.includes(o.toLowerCase()) ? (i = 6, 47 === c ? (e.consume(c), x) : r.interrupt ? t(c) : T(c)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(c) : u ? F(c) : b(c)) : 45 === c || h(c) ? (e.consume(c), o += String.fromCharCode(c), g) : n(c)
                        }

                        function x(i) {
                            return 62 === i ? (e.consume(i), r.interrupt ? t : T) : n(i)
                        }

                        function b(t) {
                            return y(t) ? (e.consume(t), b) : A(t)
                        }

                        function F(t) {
                            return 47 === t ? (e.consume(t), A) : 58 === t || 95 === t || f(t) ? (e.consume(t), S) : y(t) ? (e.consume(t), F) : A(t)
                        }

                        function S(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || h(t) ? (e.consume(t), S) : E(t)
                        }

                        function E(t) {
                            return 61 === t ? (e.consume(t), C) : y(t) ? (e.consume(t), E) : F(t)
                        }

                        function C(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, _) : y(t) ? (e.consume(t), C) : (s = null, I(t))
                        }

                        function _(t) {
                            return null === t || v(t) ? n(t) : t === s ? (e.consume(t), w) : (e.consume(t), _)
                        }

                        function I(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || k(t) ? E(t) : (e.consume(t), I)
                        }

                        function w(e) {
                            return 47 === e || 62 === e || y(e) ? F(e) : n(e)
                        }

                        function A(t) {
                            return 62 === t ? (e.consume(t), O) : n(t)
                        }

                        function O(t) {
                            return y(t) ? (e.consume(t), O) : null === t || v(t) ? T(t) : n(t)
                        }

                        function T(t) {
                            return 45 === t && 2 === i ? (e.consume(t), D) : 60 === t && 1 === i ? (e.consume(t), B) : 62 === t && 4 === i ? (e.consume(t), N) : 63 === t && 3 === i ? (e.consume(t), R) : 93 === t && 5 === i ? (e.consume(t), L) : !v(t) || 6 !== i && 7 !== i ? null === t || v(t) ? z(t) : (e.consume(t), T) : e.check(ce, N, z)(t)
                        }

                        function z(t) {
                            return e.exit("htmlFlowData"), P(t)
                        }

                        function P(t) {
                            return null === t ? H(t) : v(t) ? e.attempt({
                                tokenize: j,
                                partial: !0
                            }, P, H)(t) : (e.enter("htmlFlowData"), T(t))
                        }

                        function j(e, t, n) {
                            return function(t) {
                                return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                            };

                            function i(e) {
                                return r.parser.lazy[r.now().line] ? n(e) : t(e)
                            }
                        }

                        function D(t) {
                            return 45 === t ? (e.consume(t), R) : T(t)
                        }

                        function B(t) {
                            return 47 === t ? (e.consume(t), o = "", M) : T(t)
                        }

                        function M(t) {
                            return 62 === t && ue.includes(o.toLowerCase()) ? (e.consume(t), N) : f(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), M) : T(t)
                        }

                        function L(t) {
                            return 93 === t ? (e.consume(t), R) : T(t)
                        }

                        function R(t) {
                            return 62 === t ? (e.consume(t), N) : 45 === t && 2 === i ? (e.consume(t), R) : T(t)
                        }

                        function N(t) {
                            return null === t || v(t) ? (e.exit("htmlFlowData"), H(t)) : (e.consume(t), N)
                        }

                        function H(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        let t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                ce = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(w, t, n)
                        }
                    },
                    partial: !0
                };
            const se = {
                name: "codeFenced",
                tokenize: function(e, t, n) {
                    const r = this,
                        i = {
                            tokenize: function(e, t, n) {
                                let r = 0;
                                return E(e, i, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                                function i(t) {
                                    return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t)
                                }

                                function u(t) {
                                    return t === s ? (e.consume(t), r++, u) : r < l ? n(t) : (e.exit("codeFencedFenceSequence"), E(e, o, "whitespace")(t))
                                }

                                function o(r) {
                                    return null === r || v(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                }
                            },
                            partial: !0
                        },
                        u = {
                            tokenize: function(e, t, n) {
                                const r = this;
                                return i;

                                function i(t) {
                                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u
                                }

                                function u(e) {
                                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                                }
                            },
                            partial: !0
                        },
                        o = this.events[this.events.length - 1],
                        c = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0;
                    let s, l = 0;
                    return function(t) {
                        return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s = t, a(t)
                    };

                    function a(t) {
                        return t === s ? (e.consume(t), l++, a) : (e.exit("codeFencedFenceSequence"), l < 3 ? n(t) : E(e, f, "whitespace")(t))
                    }

                    function f(t) {
                        return null === t || v(t) ? m(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                            contentType: "string"
                        }), d(t))
                    }

                    function d(t) {
                        return null === t || k(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), E(e, p, "whitespace")(t)) : 96 === t && t === s ? n(t) : (e.consume(t), d)
                    }

                    function p(t) {
                        return null === t || v(t) ? m(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                            contentType: "string"
                        }), h(t))
                    }

                    function h(t) {
                        return null === t || v(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(t)) : 96 === t && t === s ? n(t) : (e.consume(t), h)
                    }

                    function m(n) {
                        return e.exit("codeFencedFence"), r.interrupt ? t(n) : g(n)
                    }

                    function g(t) {
                        return null === t ? y(t) : v(t) ? e.attempt(u, e.attempt(i, y, c ? E(e, g, "linePrefix", c + 1) : g), y)(t) : (e.enter("codeFlowValue"), x(t))
                    }

                    function x(t) {
                        return null === t || v(t) ? (e.exit("codeFlowValue"), g(t)) : (e.consume(t), x)
                    }

                    function y(n) {
                        return e.exit("codeFenced"), t(n)
                    }
                },
                concrete: !0
            };
            const le = document.createElement("i");

            function ae(e) {
                const t = "&" + e + ";";
                le.innerHTML = t;
                const n = le.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && (n !== t && n)
            }
            const fe = {
                name: "characterReference",
                tokenize: function(e, t, n) {
                    const r = this;
                    let i, u, o = 0;
                    return function(t) {
                        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c
                    };

                    function c(t) {
                        return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), i = 31, u = h, l(t))
                    }

                    function s(t) {
                        return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, u = p, l) : (e.enter("characterReferenceValue"), i = 7, u = d, l(t))
                    }

                    function l(c) {
                        let s;
                        return 59 === c && o ? (s = e.exit("characterReferenceValue"), u !== h || ae(r.sliceSerialize(s)) ? (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(c)) : u(c) && o++ < i ? (e.consume(c), l) : n(c)
                    }
                }
            };
            const de = {
                name: "characterEscape",
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                    };

                    function r(r) {
                        return m(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                    }
                }
            };
            const pe = {
                name: "lineEnding",
                tokenize: function(e, t) {
                    return function(n) {
                        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), E(e, t, "linePrefix")
                    }
                }
            };
            const he = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        const r = this;
                        let i, u, o = r.events.length;
                        for (; o--;)
                            if (("labelImage" === r.events[o][1].type || "labelLink" === r.events[o][1].type) && !r.events[o][1]._balanced) {
                                i = r.events[o][1];
                                break
                            }
                        return function(t) {
                            if (!i) return n(t);
                            return i._inactive ? s(t) : (u = r.parser.defined.includes(Y(r.sliceSerialize({
                                start: i.end,
                                end: r.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c)
                        };

                        function c(n) {
                            return 40 === n ? e.attempt(me, t, u ? t : s)(n) : 91 === n ? e.attempt(ge, t, u ? e.attempt(xe, t, s) : s)(n) : u ? t(n) : s(n)
                        }

                        function s(e) {
                            return i._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, u, s = e.length,
                            l = 0;
                        for (; s--;)
                            if (n = e[s][1], r) {
                                if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                                "enter" === e[s][0] && "labelLink" === n.type && (n._inactive = !0)
                            } else if (i) {
                            if ("enter" === e[s][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = s, "labelLink" !== n.type)) {
                                l = 2;
                                break
                            }
                        } else "labelEnd" === n.type && (i = s);
                        const a = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            f = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[i][1].end)
                            },
                            d = {
                                type: "labelText",
                                start: Object.assign({}, e[r + l + 2][1].end),
                                end: Object.assign({}, e[i - 2][1].start)
                            };
                        return u = [
                            ["enter", a, t],
                            ["enter", f, t]
                        ], u = c(u, e.slice(r + 1, r + l + 3)), u = c(u, [
                            ["enter", d, t]
                        ]), u = c(u, N(t.parser.constructs.insideSpan.null, e.slice(r + l + 4, i - 3), t)), u = c(u, [
                            ["exit", d, t], e[i - 2], e[i - 1],
                            ["exit", f, t]
                        ]), u = c(u, e.slice(i + 1)), u = c(u, [
                            ["exit", a, t]
                        ]), o(e, r, e.length, u), e
                    },
                    resolveAll: function(e) {
                        let t, n = -1;
                        for (; ++n < e.length;) t = e[n][1], "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                me = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), Z(e, r)
                        };

                        function r(t) {
                            return 41 === t ? o(t) : W(e, i, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function i(t) {
                            return k(t) ? Z(e, u)(t) : o(t)
                        }

                        function u(t) {
                            return 34 === t || 39 === t || 40 === t ? X(e, Z(e, o), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : o(t)
                        }

                        function o(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                ge = {
                    tokenize: function(e, t, n) {
                        const r = this;
                        return function(t) {
                            return K.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }
                    }
                },
                xe = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };

            function ke(e) {
                return null === e || k(e) || b(e) ? 1 : F(e) ? 2 : void 0
            }
            const ve = {
                name: "attention",
                tokenize: function(e, t) {
                    const n = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        i = ke(r);
                    let u;
                    return function(t) {
                        return e.enter("attentionSequence"), u = t, o(t)
                    };

                    function o(c) {
                        if (c === u) return e.consume(c), o;
                        const s = e.exit("attentionSequence"),
                            l = ke(c),
                            a = !l || 2 === l && i || n.includes(c),
                            f = !i || 2 === i && l || n.includes(r);
                        return s._open = Boolean(42 === u ? a : a && (i || !f)), s._close = Boolean(42 === u ? f : f && (l || !a)), t(c)
                    }
                },
                resolveAll: function(e, t) {
                    let n, r, i, u, s, l, a, f, d = -1;
                    for (; ++d < e.length;)
                        if ("enter" === e[d][0] && "attentionSequence" === e[d][1].type && e[d][1]._close)
                            for (n = d; n--;)
                                if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[d][1]).charCodeAt(0)) {
                                    if ((e[n][1]._close || e[d][1]._open) && (e[d][1].end.offset - e[d][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[d][1].end.offset - e[d][1].start.offset) % 3)) continue;
                                    l = e[n][1].end.offset - e[n][1].start.offset > 1 && e[d][1].end.offset - e[d][1].start.offset > 1 ? 2 : 1;
                                    const p = Object.assign({}, e[n][1].end),
                                        h = Object.assign({}, e[d][1].start);
                                    ye(p, -l), ye(h, l), u = {
                                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                                        start: p,
                                        end: Object.assign({}, e[n][1].end)
                                    }, s = {
                                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[d][1].start),
                                        end: h
                                    }, i = {
                                        type: l > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[n][1].end),
                                        end: Object.assign({}, e[d][1].start)
                                    }, r = {
                                        type: l > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, u.start),
                                        end: Object.assign({}, s.end)
                                    }, e[n][1].end = Object.assign({}, u.start), e[d][1].start = Object.assign({}, s.end), a = [], e[n][1].end.offset - e[n][1].start.offset && (a = c(a, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])), a = c(a, [
                                        ["enter", r, t],
                                        ["enter", u, t],
                                        ["exit", u, t],
                                        ["enter", i, t]
                                    ]), a = c(a, N(t.parser.constructs.insideSpan.null, e.slice(n + 1, d), t)), a = c(a, [
                                        ["exit", i, t],
                                        ["enter", s, t],
                                        ["exit", s, t],
                                        ["exit", r, t]
                                    ]), e[d][1].end.offset - e[d][1].start.offset ? (f = 2, a = c(a, [
                                        ["enter", e[d][1], t],
                                        ["exit", e[d][1], t]
                                    ])) : f = 0, o(e, n - 1, d - n + 3, a), d = n + a.length - f - 2;
                                    break
                                }
                    d = -1;
                    for (; ++d < e.length;) "attentionSequence" === e[d][1].type && (e[d][1].type = "data");
                    return e
                }
            };

            function ye(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            const be = {
                name: "htmlText",
                tokenize: function(e, t, n) {
                    const r = this;
                    let i, u, o, c;
                    return function(t) {
                        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), s
                    };

                    function s(t) {
                        return 33 === t ? (e.consume(t), l) : 47 === t ? (e.consume(t), w) : 63 === t ? (e.consume(t), _) : f(t) ? (e.consume(t), T) : n(t)
                    }

                    function l(t) {
                        return 45 === t ? (e.consume(t), a) : 91 === t ? (e.consume(t), u = "CDATA[", o = 0, x) : f(t) ? (e.consume(t), C) : n(t)
                    }

                    function a(t) {
                        return 45 === t ? (e.consume(t), d) : n(t)
                    }

                    function d(t) {
                        return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), p) : m(t)
                    }

                    function p(e) {
                        return null === e || 62 === e ? n(e) : m(e)
                    }

                    function m(t) {
                        return null === t ? n(t) : 45 === t ? (e.consume(t), g) : v(t) ? (c = m, R(t)) : (e.consume(t), m)
                    }

                    function g(t) {
                        return 45 === t ? (e.consume(t), H) : m(t)
                    }

                    function x(t) {
                        return t === u.charCodeAt(o++) ? (e.consume(t), o === u.length ? b : x) : n(t)
                    }

                    function b(t) {
                        return null === t ? n(t) : 93 === t ? (e.consume(t), F) : v(t) ? (c = b, R(t)) : (e.consume(t), b)
                    }

                    function F(t) {
                        return 93 === t ? (e.consume(t), S) : b(t)
                    }

                    function S(t) {
                        return 62 === t ? H(t) : 93 === t ? (e.consume(t), S) : b(t)
                    }

                    function C(t) {
                        return null === t || 62 === t ? H(t) : v(t) ? (c = C, R(t)) : (e.consume(t), C)
                    }

                    function _(t) {
                        return null === t ? n(t) : 63 === t ? (e.consume(t), I) : v(t) ? (c = _, R(t)) : (e.consume(t), _)
                    }

                    function I(e) {
                        return 62 === e ? H(e) : _(e)
                    }

                    function w(t) {
                        return f(t) ? (e.consume(t), A) : n(t)
                    }

                    function A(t) {
                        return 45 === t || h(t) ? (e.consume(t), A) : O(t)
                    }

                    function O(t) {
                        return v(t) ? (c = O, R(t)) : y(t) ? (e.consume(t), O) : H(t)
                    }

                    function T(t) {
                        return 45 === t || h(t) ? (e.consume(t), T) : 47 === t || 62 === t || k(t) ? z(t) : n(t)
                    }

                    function z(t) {
                        return 47 === t ? (e.consume(t), H) : 58 === t || 95 === t || f(t) ? (e.consume(t), P) : v(t) ? (c = z, R(t)) : y(t) ? (e.consume(t), z) : H(t)
                    }

                    function P(t) {
                        return 45 === t || 46 === t || 58 === t || 95 === t || h(t) ? (e.consume(t), P) : j(t)
                    }

                    function j(t) {
                        return 61 === t ? (e.consume(t), D) : v(t) ? (c = j, R(t)) : y(t) ? (e.consume(t), j) : z(t)
                    }

                    function D(t) {
                        return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), i = t, B) : v(t) ? (c = D, R(t)) : y(t) ? (e.consume(t), D) : (e.consume(t), i = void 0, L)
                    }

                    function B(t) {
                        return t === i ? (e.consume(t), M) : null === t ? n(t) : v(t) ? (c = B, R(t)) : (e.consume(t), B)
                    }

                    function M(e) {
                        return 62 === e || 47 === e || k(e) ? z(e) : n(e)
                    }

                    function L(t) {
                        return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || k(t) ? z(t) : (e.consume(t), L)
                    }

                    function R(t) {
                        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E(e, N, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }

                    function N(t) {
                        return e.enter("htmlTextData"), c(t)
                    }

                    function H(r) {
                        return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                    }
                }
            };
            const Fe = {
                name: "codeText",
                tokenize: function(e, t, n) {
                    let r, i, u = 0;
                    return function(t) {
                        return e.enter("codeText"), e.enter("codeTextSequence"), o(t)
                    };

                    function o(t) {
                        return 96 === t ? (e.consume(t), u++, o) : (e.exit("codeTextSequence"), c(t))
                    }

                    function c(t) {
                        return null === t ? n(t) : 96 === t ? (i = e.enter("codeTextSequence"), r = 0, l(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), c) : v(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), s(t))
                    }

                    function s(t) {
                        return null === t || 32 === t || 96 === t || v(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), s)
                    }

                    function l(n) {
                        return 96 === n ? (e.consume(n), r++, l) : r === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (i.type = "codeTextData", s(n))
                    }
                },
                resolve: function(e) {
                    let t, n, r = e.length - 4,
                        i = 3;
                    if (!("lineEnding" !== e[i][1].type && "space" !== e[i][1].type || "lineEnding" !== e[r][1].type && "space" !== e[r][1].type))
                        for (t = i; ++t < r;)
                            if ("codeTextData" === e[t][1].type) {
                                e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                                break
                            }
                    t = i - 1, r++;
                    for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                    return e
                },
                previous: function(e) {
                    return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                }
            };
            const Se = {
                    42: V,
                    43: V,
                    45: V,
                    48: V,
                    49: V,
                    50: V,
                    51: V,
                    52: V,
                    53: V,
                    54: V,
                    55: V,
                    56: V,
                    57: V,
                    62: $
                },
                Ee = {
                    91: G
                },
                Ce = {
                    [-2]: ee,
                    [-1]: ee,
                    32: ee
                },
                _e = {
                    35: ne,
                    42: q,
                    45: [re, q],
                    60: oe,
                    61: re,
                    95: q,
                    96: se,
                    126: se
                },
                Ie = {
                    38: fe,
                    92: de
                },
                we = {
                    [-5]: pe,
                    [-4]: pe,
                    [-3]: pe,
                    33: {
                        name: "labelStartImage",
                        tokenize: function(e, t, n) {
                            const r = this;
                            return function(t) {
                                return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                            };

                            function i(t) {
                                return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), u) : n(t)
                            }

                            function u(e) {
                                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                            }
                        },
                        resolveAll: he.resolveAll
                    },
                    38: fe,
                    42: ve,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 1;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return f(t) ? (e.consume(t), u) : g(t) ? s(t) : n(t)
                            }

                            function u(e) {
                                return 43 === e || 45 === e || 46 === e || h(e) ? o(e) : s(e)
                            }

                            function o(t) {
                                return 58 === t ? (e.consume(t), c) : (43 === t || 45 === t || 46 === t || h(t)) && r++ < 32 ? (e.consume(t), o) : s(t)
                            }

                            function c(t) {
                                return 62 === t ? (e.exit("autolinkProtocol"), p(t)) : null === t || 32 === t || 60 === t || x(t) ? n(t) : (e.consume(t), c)
                            }

                            function s(t) {
                                return 64 === t ? (e.consume(t), r = 0, l) : g(t) ? (e.consume(t), s) : n(t)
                            }

                            function l(e) {
                                return h(e) ? a(e) : n(e)
                            }

                            function a(t) {
                                return 46 === t ? (e.consume(t), r = 0, l) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", p(t)) : d(t)
                            }

                            function d(t) {
                                return (45 === t || h(t)) && r++ < 63 ? (e.consume(t), 45 === t ? d : a) : n(t)
                            }

                            function p(n) {
                                return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                            }
                        }
                    }, be],
                    91: {
                        name: "labelStartLink",
                        tokenize: function(e, t, n) {
                            const r = this;
                            return function(t) {
                                return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                            };

                            function i(e) {
                                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                            }
                        },
                        resolveAll: he.resolveAll
                    },
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), r
                            };

                            function r(r) {
                                return v(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, de],
                    93: he,
                    95: ve,
                    96: Fe
                },
                Ae = {
                    null: [ve, j]
                },
                Oe = {
                    null: [42, 95]
                },
                Te = {
                    null: []
                };

            function ze(e = {}) {
                const t = function(e) {
                        const t = {};
                        let n = -1;
                        for (; ++n < e.length;) l(t, e[n]);
                        return t
                    }([r].concat(e.extensions || [])),
                    n = {
                        defined: [],
                        lazy: {},
                        constructs: t,
                        content: i(C),
                        document: i(_),
                        flow: i(P),
                        string: i(D),
                        text: i(B)
                    };
                return n;

                function i(e) {
                    return function(t) {
                        return H(n, e, t)
                    }
                }
            }
            const Pe = /[\0\t\n\r]/g;

            function je(e, t) {
                const n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 == (65535 & n) || 65534 == (65535 & n) || n > 1114111 ? "�" : String.fromCharCode(n)
            }
            const De = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function Be(e, t, n) {
                if (t) return t;
                if (35 === n.charCodeAt(0)) {
                    const e = n.charCodeAt(1),
                        t = 120 === e || 88 === e;
                    return je(n.slice(t ? 2 : 1), t ? 16 : 10)
                }
                return ae(n) || e
            }

            function Me(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? Re(e.position) : "start" in e || "end" in e ? Re(e) : "line" in e || "column" in e ? Le(e) : "" : ""
            }

            function Le(e) {
                return Ne(e && e.line) + ":" + Ne(e && e.column)
            }

            function Re(e) {
                return Le(e && e.start) + "-" + Le(e && e.end)
            }

            function Ne(e) {
                return e && "number" == typeof e ? e : 1
            }
            const He = {}.hasOwnProperty,
                qe = function(e, t, n) {
                    return "string" != typeof t && (n = t, t = void 0),
                        function(e) {
                            const t = {
                                transforms: [],
                                canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                                enter: {
                                    autolink: s(ie),
                                    autolinkProtocol: w,
                                    autolinkEmail: w,
                                    atxHeading: s(ee),
                                    blockQuote: s(K),
                                    characterEscape: w,
                                    characterReference: w,
                                    codeFenced: s(X),
                                    codeFencedFenceInfo: l,
                                    codeFencedFenceMeta: l,
                                    codeIndented: s(X, l),
                                    codeText: s(Z, l),
                                    codeTextData: w,
                                    data: w,
                                    codeFlowValue: w,
                                    definition: s(G),
                                    definitionDestinationString: l,
                                    definitionLabelString: l,
                                    definitionTitleString: l,
                                    emphasis: s(J),
                                    hardBreakEscape: s(te),
                                    hardBreakTrailing: s(te),
                                    htmlFlow: s(ne, l),
                                    htmlFlowData: w,
                                    htmlText: s(ne, l),
                                    htmlTextData: w,
                                    image: s(re),
                                    label: l,
                                    link: s(ie),
                                    listItem: s(oe),
                                    listItemValue: m,
                                    listOrdered: s(ue, h),
                                    listUnordered: s(ue),
                                    paragraph: s(ce),
                                    reference: q,
                                    referenceString: l,
                                    resourceDestinationString: l,
                                    resourceTitleString: l,
                                    setextHeading: s(ee),
                                    strong: s(se),
                                    thematicBreak: s(fe)
                                },
                                exit: {
                                    atxHeading: f(),
                                    atxHeadingSequence: E,
                                    autolink: f(),
                                    autolinkEmail: W,
                                    autolinkProtocol: $,
                                    blockQuote: f(),
                                    characterEscapeValue: A,
                                    characterReferenceMarkerHexadecimal: U,
                                    characterReferenceMarkerNumeric: U,
                                    characterReferenceValue: Q,
                                    codeFenced: f(v),
                                    codeFencedFence: k,
                                    codeFencedFenceInfo: g,
                                    codeFencedFenceMeta: x,
                                    codeFlowValue: A,
                                    codeIndented: f(y),
                                    codeText: f(j),
                                    codeTextData: A,
                                    data: A,
                                    definition: f(),
                                    definitionDestinationString: S,
                                    definitionLabelString: b,
                                    definitionTitleString: F,
                                    emphasis: f(),
                                    hardBreakEscape: f(T),
                                    hardBreakTrailing: f(T),
                                    htmlFlow: f(z),
                                    htmlFlowData: A,
                                    htmlText: f(P),
                                    htmlTextData: A,
                                    image: f(B),
                                    label: L,
                                    labelText: M,
                                    lineEnding: O,
                                    link: f(D),
                                    listItem: f(),
                                    listOrdered: f(),
                                    listUnordered: f(),
                                    paragraph: f(),
                                    referenceString: V,
                                    resourceDestinationString: R,
                                    resourceTitleString: N,
                                    resource: H,
                                    setextHeading: f(I),
                                    setextHeadingLineSequence: _,
                                    setextHeadingText: C,
                                    strong: f(),
                                    thematicBreak: f()
                                }
                            };
                            Ue(t, (e || {}).mdastExtensions || []);
                            const n = {};
                            return r;

                            function r(e) {
                                let n = {
                                    type: "root",
                                    children: []
                                };
                                const r = {
                                        stack: [n],
                                        tokenStack: [],
                                        config: t,
                                        enter: a,
                                        exit: d,
                                        buffer: l,
                                        resume: p,
                                        setData: o,
                                        getData: c
                                    },
                                    i = [];
                                let s = -1;
                                for (; ++s < e.length;)
                                    if ("listOrdered" === e[s][1].type || "listUnordered" === e[s][1].type)
                                        if ("enter" === e[s][0]) i.push(s);
                                        else {
                                            s = u(e, i.pop(), s)
                                        }
                                for (s = -1; ++s < e.length;) {
                                    const n = t[e[s][0]];
                                    He.call(n, e[s][1].type) && n[e[s][1].type].call(Object.assign({
                                        sliceSerialize: e[s][2].sliceSerialize
                                    }, r), e[s][1])
                                }
                                if (r.tokenStack.length > 0) {
                                    const e = r.tokenStack[r.tokenStack.length - 1];
                                    (e[1] || $e).call(r, void 0, e[0])
                                }
                                for (n.position = {
                                        start: Ve(e.length > 0 ? e[0][1].start : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }),
                                        end: Ve(e.length > 0 ? e[e.length - 2][1].end : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        })
                                    }, s = -1; ++s < t.transforms.length;) n = t.transforms[s](n) || n;
                                return n
                            }

                            function u(e, t, n) {
                                let r, i, u, o, c = t - 1,
                                    s = -1,
                                    l = !1;
                                for (; ++c <= n;) {
                                    const t = e[c];
                                    if ("listUnordered" === t[1].type || "listOrdered" === t[1].type || "blockQuote" === t[1].type ? ("enter" === t[0] ? s++ : s--, o = void 0) : "lineEndingBlank" === t[1].type ? "enter" === t[0] && (!r || o || s || u || (u = c), o = void 0) : "linePrefix" === t[1].type || "listItemValue" === t[1].type || "listItemMarker" === t[1].type || "listItemPrefix" === t[1].type || "listItemPrefixWhitespace" === t[1].type || (o = void 0), !s && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === s && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                        if (r) {
                                            let o = c;
                                            for (i = void 0; o--;) {
                                                const t = e[o];
                                                if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                    if ("exit" === t[0]) continue;
                                                    i && (e[i][1].type = "lineEndingBlank", l = !0), t[1].type = "lineEnding", i = o
                                                } else if ("linePrefix" !== t[1].type && "blockQuotePrefix" !== t[1].type && "blockQuotePrefixWhitespace" !== t[1].type && "blockQuoteMarker" !== t[1].type && "listItemIndent" !== t[1].type) break
                                            }
                                            u && (!i || u < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || c, 0, ["exit", r, t[2]]), c++, n++
                                        }
                                        "listItemPrefix" === t[1].type && (r = {
                                            type: "listItem",
                                            _spread: !1,
                                            start: Object.assign({}, t[1].start)
                                        }, e.splice(c, 0, ["enter", r, t[2]]), c++, n++, u = void 0, o = !0)
                                    }
                                }
                                return e[t][1]._spread = l, n
                            }

                            function o(e, t) {
                                n[e] = t
                            }

                            function c(e) {
                                return n[e]
                            }

                            function s(e, t) {
                                return n;

                                function n(n) {
                                    a.call(this, e(n), n), t && t.call(this, n)
                                }
                            }

                            function l() {
                                this.stack.push({
                                    type: "fragment",
                                    children: []
                                })
                            }

                            function a(e, t, n) {
                                return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {
                                    start: Ve(t.start)
                                }, e
                            }

                            function f(e) {
                                return t;

                                function t(t) {
                                    e && e.call(this, t), d.call(this, t)
                                }
                            }

                            function d(e, t) {
                                const n = this.stack.pop(),
                                    r = this.tokenStack.pop();
                                if (!r) throw new Error("Cannot close `" + e.type + "` (" + Me({
                                    start: e.start,
                                    end: e.end
                                }) + "): it’s not open");
                                if (r[0].type !== e.type)
                                    if (t) t.call(this, e, r[0]);
                                    else {
                                        (r[1] || $e).call(this, e, r[0])
                                    }
                                return n.position.end = Ve(e.end), n
                            }

                            function p() {
                                return function(e, t) {
                                    const n = (t || {}).includeImageAlt;
                                    return i(e, "boolean" != typeof n || n)
                                }(this.stack.pop())
                            }

                            function h() {
                                o("expectingFirstListItemValue", !0)
                            }

                            function m(e) {
                                if (c("expectingFirstListItemValue")) {
                                    this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), o("expectingFirstListItemValue")
                                }
                            }

                            function g() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].lang = e
                            }

                            function x() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].meta = e
                            }

                            function k() {
                                c("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0))
                            }

                            function v() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside")
                            }

                            function y() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                            }

                            function b(e) {
                                const t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                n.label = t, n.identifier = Y(this.sliceSerialize(e)).toLowerCase()
                            }

                            function F() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].title = e
                            }

                            function S() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].url = e
                            }

                            function E(e) {
                                const t = this.stack[this.stack.length - 1];
                                if (!t.depth) {
                                    const n = this.sliceSerialize(e).length;
                                    t.depth = n
                                }
                            }

                            function C() {
                                o("setextHeadingSlurpLineEnding", !0)
                            }

                            function _(e) {
                                this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                            }

                            function I() {
                                o("setextHeadingSlurpLineEnding")
                            }

                            function w(e) {
                                const t = this.stack[this.stack.length - 1];
                                let n = t.children[t.children.length - 1];
                                n && "text" === n.type || (n = le(), n.position = {
                                    start: Ve(e.start)
                                }, t.children.push(n)), this.stack.push(n)
                            }

                            function A(e) {
                                const t = this.stack.pop();
                                t.value += this.sliceSerialize(e), t.position.end = Ve(e.end)
                            }

                            function O(e) {
                                const n = this.stack[this.stack.length - 1];
                                if (c("atHardBreak")) {
                                    return n.children[n.children.length - 1].position.end = Ve(e.end), void o("atHardBreak")
                                }!c("setextHeadingSlurpLineEnding") && t.canContainEols.includes(n.type) && (w.call(this, e), A.call(this, e))
                            }

                            function T() {
                                o("atHardBreak", !0)
                            }

                            function z() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function P() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function j() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].value = e
                            }

                            function D() {
                                const e = this.stack[this.stack.length - 1];
                                if (c("inReference")) {
                                    const t = c("referenceType") || "shortcut";
                                    e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                } else delete e.identifier, delete e.label;
                                o("referenceType")
                            }

                            function B() {
                                const e = this.stack[this.stack.length - 1];
                                if (c("inReference")) {
                                    const t = c("referenceType") || "shortcut";
                                    e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                } else delete e.identifier, delete e.label;
                                o("referenceType")
                            }

                            function M(e) {
                                const t = this.sliceSerialize(e),
                                    n = this.stack[this.stack.length - 2];
                                n.label = function(e) {
                                    return e.replace(De, Be)
                                }(t), n.identifier = Y(t).toLowerCase()
                            }

                            function L() {
                                const e = this.stack[this.stack.length - 1],
                                    t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                if (o("inReference", !0), "link" === n.type) {
                                    const t = e.children;
                                    n.children = t
                                } else n.alt = t
                            }

                            function R() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].url = e
                            }

                            function N() {
                                const e = this.resume();
                                this.stack[this.stack.length - 1].title = e
                            }

                            function H() {
                                o("inReference")
                            }

                            function q() {
                                o("referenceType", "collapsed")
                            }

                            function V(e) {
                                const t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                n.label = t, n.identifier = Y(this.sliceSerialize(e)).toLowerCase(), o("referenceType", "full")
                            }

                            function U(e) {
                                o("characterReferenceType", e.type)
                            }

                            function Q(e) {
                                const t = this.sliceSerialize(e),
                                    n = c("characterReferenceType");
                                let r;
                                if (n) r = je(t, "characterReferenceMarkerNumeric" === n ? 10 : 16), o("characterReferenceType");
                                else {
                                    r = ae(t)
                                }
                                const i = this.stack.pop();
                                i.value += r, i.position.end = Ve(e.end)
                            }

                            function $(e) {
                                A.call(this, e);
                                this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                            }

                            function W(e) {
                                A.call(this, e);
                                this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                            }

                            function K() {
                                return {
                                    type: "blockquote",
                                    children: []
                                }
                            }

                            function X() {
                                return {
                                    type: "code",
                                    lang: null,
                                    meta: null,
                                    value: ""
                                }
                            }

                            function Z() {
                                return {
                                    type: "inlineCode",
                                    value: ""
                                }
                            }

                            function G() {
                                return {
                                    type: "definition",
                                    identifier: "",
                                    label: null,
                                    title: null,
                                    url: ""
                                }
                            }

                            function J() {
                                return {
                                    type: "emphasis",
                                    children: []
                                }
                            }

                            function ee() {
                                return {
                                    type: "heading",
                                    depth: void 0,
                                    children: []
                                }
                            }

                            function te() {
                                return {
                                    type: "break"
                                }
                            }

                            function ne() {
                                return {
                                    type: "html",
                                    value: ""
                                }
                            }

                            function re() {
                                return {
                                    type: "image",
                                    title: null,
                                    url: "",
                                    alt: null
                                }
                            }

                            function ie() {
                                return {
                                    type: "link",
                                    title: null,
                                    url: "",
                                    children: []
                                }
                            }

                            function ue(e) {
                                return {
                                    type: "list",
                                    ordered: "listOrdered" === e.type,
                                    start: null,
                                    spread: e._spread,
                                    children: []
                                }
                            }

                            function oe(e) {
                                return {
                                    type: "listItem",
                                    spread: e._spread,
                                    checked: null,
                                    children: []
                                }
                            }

                            function ce() {
                                return {
                                    type: "paragraph",
                                    children: []
                                }
                            }

                            function se() {
                                return {
                                    type: "strong",
                                    children: []
                                }
                            }

                            function le() {
                                return {
                                    type: "text",
                                    value: ""
                                }
                            }

                            function fe() {
                                return {
                                    type: "thematicBreak"
                                }
                            }
                        }(n)(function(e) {
                            for (; !A(e););
                            return e
                        }(ze(n).document().write(function() {
                            let e, t = 1,
                                n = "",
                                r = !0;
                            return function(i, u, o) {
                                const c = [];
                                let s, l, a, f, d;
                                for (i = n + i.toString(u), a = 0, n = "", r && (65279 === i.charCodeAt(0) && a++, r = void 0); a < i.length;) {
                                    if (Pe.lastIndex = a, s = Pe.exec(i), f = s && void 0 !== s.index ? s.index : i.length, d = i.charCodeAt(f), !s) {
                                        n = i.slice(a);
                                        break
                                    }
                                    if (10 === d && a === f && e) c.push(-3), e = void 0;
                                    else switch (e && (c.push(-5), e = void 0), a < f && (c.push(i.slice(a, f)), t += f - a), d) {
                                        case 0:
                                            c.push(65533), t++;
                                            break;
                                        case 9:
                                            for (l = 4 * Math.ceil(t / 4), c.push(-2); t++ < l;) c.push(-1);
                                            break;
                                        case 10:
                                            c.push(-4), t = 1;
                                            break;
                                        default:
                                            e = !0, t = 1
                                    }
                                    a = f + 1
                                }
                                return o && (e && c.push(-5), n && c.push(n), c.push(null)), c
                            }
                        }()(e, t, !0))))
                };

            function Ve(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function Ue(e, t) {
                let n = -1;
                for (; ++n < t.length;) {
                    const r = t[n];
                    Array.isArray(r) ? Ue(e, r) : Qe(e, r)
                }
            }

            function Qe(e, t) {
                let n;
                for (n in t)
                    if (He.call(t, n))
                        if ("canContainEols" === n) {
                            const r = t[n];
                            r && e[n].push(...r)
                        } else if ("transforms" === n) {
                    const r = t[n];
                    r && e[n].push(...r)
                } else if ("enter" === n || "exit" === n) {
                    const r = t[n];
                    r && Object.assign(e[n], r)
                }
            }

            function $e(e, t) {
                throw e ? new Error("Cannot close `" + e.type + "` (" + Me({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + Me({
                    start: t.start,
                    end: t.end
                }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Me({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }
            var We = function(e) {
                Object.assign(this, {
                    Parser: t => {
                        const n = this.data("settings");
                        return qe(t, Object.assign({}, n, e, {
                            extensions: this.data("micromarkExtensions") || [],
                            mdastExtensions: this.data("fromMarkdownExtensions") || []
                        }))
                    }
                })
            }
        },
        57558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                unified: function() {
                    return r.l
                }
            });
            var r = n(33936)
        }
    }
]);