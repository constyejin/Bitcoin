/*! For license information please see de16360e7b5afb25fef308abe719f559e94a625b-1c3485c7e708f6d989cb.js.LICENSE.txt */
(self.webpackChunkbitcoincom_www = self.webpackChunkbitcoincom_www || []).push([
    [1497], {
        96710: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                },
                o = this && this.__rest || function(e, n) {
                    var t = {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && n.indexOf(u) < 0 && (t[u] = e[u]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var l = 0;
                        for (u = Object.getOwnPropertySymbols(e); l < u.length; l++) n.indexOf(u[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[l]) && (t[u[l]] = e[u[l]])
                    }
                    return t
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Blockquote = void 0;
            const a = i(t(96540)),
                s = r(t(8711)),
                c = t(24606),
                f = s.default.div `
  ${({theme:e})=>s.css`
            position: relative;
            margin - left: 0;
            margin - right: 0;
            display: flex;
            padding - left: $ {
                4 * e.spacing.unit
            }
            px;
            padding - top: $ {
                e.spacing.unit
            }
            px;
            padding - bottom: $ {
                3 * e.spacing.unit
            }
            px;
            font - style: italic;

            &
            ::before {
                content: '"';
                font - style: normal;
                position: absolute;
                left: 0;
                font - size: $ {
                    6 * e.spacing.unit
                }
                px; -
                webkit - background - clip: text; -
                webkit - text - fill - color: transparent;
                top: -$ {
                    e.spacing.unit
                }
                px;
                background - color: $ {
                    c.colors.solid.primaryBlue
                };
            }

            $ {
                c.media.md `
      padding-left: ${4*e.spacing.unit}px;
      padding-top: ${2*e.spacing.unit}px;

      &::before {
        font-size: ${8*e.spacing.unit}px;
        top: -${2*e.spacing.unit}px;
      }
    `
            }
            `}
`;
            n.Blockquote = e => {
                var {
                    children: n
                } = e, t = o(e, ["children"]);
                return a.default.createElement(f, Object.assign({}, t), n)
            }, n.default = n.Blockquote
        },
        31517: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(96710);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        65614: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = t(24606),
                a = t(27587),
                s = o.default.h1 `
  ${a.headingCommon}

  ${({contrast:e,theme:n,align:t})=>o.css`
            color: $ {
                e ? n.palette.text.contrast : i.colors.solid.textOne
            };

            text - align: $ {
                t
            };

            font - weight: 700;
            font - size: 32 px;
            line - height: 40 px;

            $ {
                i.media.sm `
      font-size: 48px;
      line-height: 52px;
      letter-spacing: -0.53px;
    `
            };

            $ {
                i.media.md `
      font-size: 40px;
      line-height: 52px;
    `
            };

            $ {
                i.media.lg `
      font-size: 48px;
      line-height: 56px;
    `
            };

            $ {
                i.media.xl `
      font-size: 72px;
      line-height: 88px;
    `
            };
            `}
`;
            n.default = s
        },
        31889: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(65614);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        54982: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = t(24606),
                a = t(27587),
                s = o.default.h3 `
  ${a.headingCommon}

  ${({theme:e,contrast:n,thin:t,align:u})=>o.css`
            color: $ {
                n ? e.palette.text.contrast : i.colors.solid.textOne
            };

            font - weight: $ {
                t ? 500 : 700
            };
            font - size: 26 px;
            line - height: 32 px;
            text - align: $ {
                u
            };

            $ {
                i.media.md `
      font-size: 48px;
      line-height: 56px;
    `
            };
            `}
`;
            n.default = s
        },
        2239: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(54982);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        78876: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = t(24606),
                a = t(27587),
                s = o.default.h5 `
  ${a.headingCommon}
  ${({contrast:e,theme:n,align:t})=>o.css`
            color: $ {
                e ? n.palette.text.contrast : i.colors.solid.textOne
            };

            text - align: $ {
                t
            };

            font - size: 14 px;
            font - weight: 600;

            $ {
                i.media.md `
      font-size: 28px;
      line-height: 32px;
    `
            }
            `}
`;
            n.default = s
        },
        75908: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(78876);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        22020: function(e, n, t) {
            "use strict";
            var u = this && this.__rest || function(e, n) {
                    var t = {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && n.indexOf(u) < 0 && (t[u] = e[u]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var l = 0;
                        for (u = Object.getOwnPropertySymbols(e); l < u.length; l++) n.indexOf(u[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[l]) && (t[u[l]] = e[u[l]])
                    }
                    return t
                },
                l = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const r = l(t(96540)),
                o = t(33103);
            n.default = e => {
                var {
                    src: n,
                    title: t = "Video"
                } = e, l = u(e, ["src", "title"]);
                return r.default.createElement(o.VideoWrapper, Object.assign({}, l), r.default.createElement("iframe", {
                    title: t,
                    src: n,
                    frameBorder: "0",
                    allowFullScreen: !0
                }))
            }
        },
        31778: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(22020);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        33103: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.VideoWrapper = void 0;
            const l = u(t(8711));
            n.VideoWrapper = l.default.div `
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
        },
        37210: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(65756);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        7588: function(e, n, t) {
            "use strict";
            var u = this && this.__rest || function(e, n) {
                    var t = {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && n.indexOf(u) < 0 && (t[u] = e[u]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var l = 0;
                        for (u = Object.getOwnPropertySymbols(e); l < u.length; l++) n.indexOf(u[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[l]) && (t[u[l]] = e[u[l]])
                    }
                    return t
                },
                l = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const r = l(t(96540)),
                o = l(t(76672)),
                i = l(t(93643)),
                a = l(t(45633)),
                s = l(t(47470)),
                c = l(t(68921)),
                f = l(t(38082));
            var D;
            ! function(e) {
                e.Ordered = "ol", e.Unordered = "ul", e.Description = "dl"
            }(D || (D = {}));
            const p = e => {
                var {
                    type: n = "ul",
                    children: t
                } = e, l = u(e, ["type", "children"]);
                switch (n) {
                    case D.Description:
                        return r.default.createElement(i.default, Object.assign({}, l), t);
                    case D.Ordered:
                        return r.default.createElement(o.default, Object.assign({}, l), t);
                    case D.Unordered:
                    default:
                        return r.default.createElement(a.default, Object.assign({}, l), t)
                }
            };
            p.Type = D, p.Item = f.default, p.Definition = s.default, p.Term = c.default, n.default = p
        },
        25622: function(e, n, t) {
            "use strict";
            var u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = t(7588);
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return u(l).default
                }
            })
        },
        47470: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = o.default.dd `
  ${()=>o.css`
      font-style: italic;
    `}
`;
            i.displayName = "List.Definition", n.default = i
        },
        93643: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const i = r(t(8711)),
                a = o(t(90742)),
                s = i.default.dl `
  ${e=>i.css`
      ${(0,a.default)(e)}
      padding-left: 0;
    `}
`;
            s.displayName = "DescriptionList", n.default = s
        },
        68921: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = o.default.dt `
  ${()=>o.css`
      font-weight: 600;
    `}
`;
            i.displayName = "List.Term", n.default = i
        },
        38082: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const o = r(t(8711)),
                i = o.default.li `
  ${e=>{const{hideIcon:n=!1}=e;return o.css`
            $ {
                n ? o.css `
            list-style: none;
          ` : o.css ``
            }
            `}}
`;
            i.displayName = "List.Item", n.default = i
        },
        76672: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const i = r(t(8711)),
                a = o(t(90742)),
                s = i.default.ol `
  ${e=>i.css`
      ${(0,a.default)(e)}
    `}
`;
            n.default = s
        },
        45633: function(e, n, t) {
            "use strict";
            var u = this && this.__createBinding || (Object.create ? function(e, n, t, u) {
                    void 0 === u && (u = t);
                    var l = Object.getOwnPropertyDescriptor(n, t);
                    l && !("get" in l ? !n.__esModule : l.writable || l.configurable) || (l = {
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        }
                    }), Object.defineProperty(e, u, l)
                } : function(e, n, t, u) {
                    void 0 === u && (u = t), e[u] = n[t]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(e, n) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    })
                } : function(e, n) {
                    e.default = n
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && u(n, e, t);
                    return l(n, e), n
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const i = r(t(8711)),
                a = o(t(90742)),
                s = i.default.ul `
  ${e=>i.css`
      ${(0,a.default)(e)}
    `}
`;
            n.default = s
        },
        90742: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            const u = t(8711),
                l = t(24606);
            n.default = e => {
                const {
                    theme: n,
                    hideIcon: t = !1
                } = e;
                return u.css `
    margin-bottom: ${3*n.spacing.unit}px;
    margin-top: 0;
    padding-left: ${4*n.spacing.unit}px;

    font-size: 14px;

    & > li {
      margin-bottom: ${n.spacing.unit}px;
    }

    & > li:last-child {
      margin-bottom: 0;
    }

    ${t&&u.css`
      list-style: none;
      padding-left: 0;
    `}

    ${l.media.md`
      font-size: 20px;
    `}
  `
            }
        },
        42660: function(e, n, t) {
            "use strict";
            var u = t(49574),
                l = Object.prototype.hasOwnProperty,
                r = {
                    align: "text-align",
                    valign: "vertical-align",
                    height: "height",
                    width: "width"
                };

            function o(e) {
                var n;
                if ("tr" === e.tagName || "td" === e.tagName || "th" === e.tagName)
                    for (n in r) l.call(r, n) && void 0 !== e.properties[n] && (i(e, r[n], e.properties[n]), delete e.properties[n])
            }

            function i(e, n, t) {
                var u = (e.properties.style || "").trim();
                u && !/;\s*/.test(u) && (u += ";"), u && (u += " ");
                var l = u + n + ": " + t + ";";
                e.properties.style = l
            }
            e.exports = function(e) {
                return u(e, "element", o), e
            }
        },
        20856: function(e) {
            "use strict";

            function n(e) {
                if ("string" == typeof e) return function(e) {
                    return n;

                    function n(n) {
                        return Boolean(n && n.type === e)
                    }
                }(e);
                if (null == e) return l;
                if ("object" == typeof e) return ("length" in e ? u : t)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function t(e) {
                return function(n) {
                    var t;
                    for (t in e)
                        if (n[t] !== e[t]) return !1;
                    return !0
                }
            }

            function u(e) {
                var t = function(e) {
                        for (var t = [], u = e.length, l = -1; ++l < u;) t[l] = n(e[l]);
                        return t
                    }(e),
                    u = t.length;
                return function() {
                    var e = -1;
                    for (; ++e < u;)
                        if (t[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function l() {
                return !0
            }
            e.exports = n
        },
        29222: function(e, n, t) {
            "use strict";
            e.exports = i;
            var u = t(20856),
                l = !0,
                r = "skip",
                o = !1;

            function i(e, n, t, l) {
                var i;

                function s(e, u, c) {
                    var f, D = [];
                    return (n && !i(e, u, c[c.length - 1] || null) || (D = a(t(e, c)))[0] !== o) && e.children && D[0] !== r ? (f = a(function(e, n) {
                        var t, u = -1,
                            r = l ? -1 : 1,
                            i = (l ? e.length : u) + r;
                        for (; i > u && i < e.length;) {
                            if ((t = s(e[i], i, n))[0] === o) return t;
                            i = "number" == typeof t[1] ? t[1] : i + r
                        }
                    }(e.children, c.concat(e))), f[0] === o ? f : D) : D
                }
                "function" == typeof n && "function" != typeof t && (l = t, t = n, n = null), i = u(n), s(e, null, [])
            }

            function a(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [l, e] : [e]
            }
            i.CONTINUE = l, i.SKIP = r, i.EXIT = o
        },
        49574: function(e, n, t) {
            "use strict";
            e.exports = i;
            var u = t(29222),
                l = u.CONTINUE,
                r = u.SKIP,
                o = u.EXIT;

            function i(e, n, t, l) {
                "function" == typeof n && "function" != typeof t && (l = t, t = n, n = null), u(e, n, (function(e, n) {
                    var u = n[n.length - 1],
                        l = u ? u.children.indexOf(e) : null;
                    return t(e, l, u)
                }), l)
            }
            i.CONTINUE = l, i.SKIP = r, i.EXIT = o
        },
        92849: function(e) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                t = Object.prototype.toString,
                u = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                r = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === t.call(e)
                },
                o = function(e) {
                    if (!e || "[object Object]" !== t.call(e)) return !1;
                    var u, l = n.call(e, "constructor"),
                        r = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !l && !r) return !1;
                    for (u in e);
                    return void 0 === u || n.call(e, u)
                },
                i = function(e, n) {
                    u && "__proto__" === n.name ? u(e, n.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: n.newValue,
                        writable: !0
                    }) : e[n.name] = n.newValue
                },
                a = function(e, t) {
                    if ("__proto__" === t) {
                        if (!n.call(e, t)) return;
                        if (l) return l(e, t).value
                    }
                    return e[t]
                };
            e.exports = function e() {
                var n, t, u, l, s, c, f = arguments[0],
                    D = 1,
                    p = arguments.length,
                    d = !1;
                for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, D = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); D < p; ++D)
                    if (null != (n = arguments[D]))
                        for (t in n) u = a(f, t), f !== (l = a(n, t)) && (d && l && (o(l) || (s = r(l))) ? (s ? (s = !1, c = u && r(u) ? u : []) : c = u && o(u) ? u : {}, i(f, {
                            name: t,
                            newValue: e(d, c, l)
                        })) : void 0 !== l && i(f, {
                            name: t,
                            newValue: l
                        }));
                return f
            }
        },
        52428: function(e, n, t) {
            var u = t(19788);

            function l(e, n) {
                var t, l = null;
                if (!e || "string" != typeof e) return l;
                for (var r, o, i = u(e), a = "function" == typeof n, s = 0, c = i.length; s < c; s++) r = (t = i[s]).property, o = t.value, a ? n(r, o, t) : o && (l || (l = {}), l[r] = o);
                return l
            }
            e.exports = l, e.exports.default = l
        },
        19788: function(e) {
            var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                t = /\n/g,
                u = /^\s*/,
                l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                r = /^:\s*/,
                o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                i = /^[;\s]*/,
                a = /^\s+|\s+$/g,
                s = "";

            function c(e) {
                return e ? e.replace(a, s) : s
            }
            e.exports = function(e, a) {
                if ("string" != typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var f = 1,
                    D = 1;

                function p(e) {
                    var n = e.match(t);
                    n && (f += n.length);
                    var u = e.lastIndexOf("\n");
                    D = ~u ? e.length - u : D + e.length
                }

                function d() {
                    var e = {
                        line: f,
                        column: D
                    };
                    return function(n) {
                        return n.position = new h(e), m(), n
                    }
                }

                function h(e) {
                    this.start = e, this.end = {
                        line: f,
                        column: D
                    }, this.source = a.source
                }
                h.prototype.content = e;
                var F = [];

                function g(n) {
                    var t = new Error(a.source + ":" + f + ":" + D + ": " + n);
                    if (t.reason = n, t.filename = a.source, t.line = f, t.column = D, t.source = e, !a.silent) throw t;
                    F.push(t)
                }

                function y(n) {
                    var t = n.exec(e);
                    if (t) {
                        var u = t[0];
                        return p(u), e = e.slice(u.length), t
                    }
                }

                function m() {
                    y(u)
                }

                function C(e) {
                    var n;
                    for (e = e || []; n = E();) !1 !== n && e.push(n);
                    return e
                }

                function E() {
                    var n = d();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var t = 2; s != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t;
                        if (t += 2, s === e.charAt(t - 1)) return g("End of comment missing");
                        var u = e.slice(2, t - 2);
                        return D += 2, p(u), e = e.slice(t), D += 2, n({
                            type: "comment",
                            comment: u
                        })
                    }
                }

                function A() {
                    var e = d(),
                        t = y(l);
                    if (t) {
                        if (E(), !y(r)) return g("property missing ':'");
                        var u = y(o),
                            a = e({
                                type: "declaration",
                                property: c(t[0].replace(n, s)),
                                value: u ? c(u[0].replace(n, s)) : s
                            });
                        return y(i), a
                    }
                }
                return m(),
                    function() {
                        var e, n = [];
                        for (C(n); e = A();) !1 !== e && (n.push(e), C(n));
                        return n
                    }()
            }
        },
        87206: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        44197: function(e, n, t) {
            "use strict";
            t.d(n, {
                A: function() {
                    return K
                }
            });
            var u = {};
            t.r(u), t.d(u, {
                boolean: function() {
                    return s
                },
                booleanish: function() {
                    return c
                },
                commaOrSpaceSeparated: function() {
                    return h
                },
                commaSeparated: function() {
                    return d
                },
                number: function() {
                    return D
                },
                overloadedBoolean: function() {
                    return f
                },
                spaceSeparated: function() {
                    return p
                }
            });
            class l {
                constructor(e, n, t) {
                    this.property = e, this.normal = n, t && (this.space = t)
                }
            }

            function r(e, n) {
                const t = {},
                    u = {};
                let r = -1;
                for (; ++r < e.length;) Object.assign(t, e[r].property), Object.assign(u, e[r].normal);
                return new l(t, u, n)
            }

            function o(e) {
                return e.toLowerCase()
            }
            l.prototype.property = {}, l.prototype.normal = {}, l.prototype.space = null;
            class i {
                constructor(e, n) {
                    this.property = e, this.attribute = n
                }
            }
            i.prototype.space = null, i.prototype.boolean = !1, i.prototype.booleanish = !1, i.prototype.overloadedBoolean = !1, i.prototype.number = !1, i.prototype.commaSeparated = !1, i.prototype.spaceSeparated = !1, i.prototype.commaOrSpaceSeparated = !1, i.prototype.mustUseProperty = !1, i.prototype.defined = !1;
            let a = 0;
            const s = F(),
                c = F(),
                f = F(),
                D = F(),
                p = F(),
                d = F(),
                h = F();

            function F() {
                return 2 ** ++a
            }
            const g = Object.keys(u);
            class y extends i {
                constructor(e, n, t, l) {
                    let r = -1;
                    if (super(e, n), m(this, "space", l), "number" == typeof t)
                        for (; ++r < g.length;) {
                            const e = g[r];
                            m(this, g[r], (t & u[e]) === u[e])
                        }
                }
            }

            function m(e, n, t) {
                t && (e[n] = t)
            }
            y.prototype.defined = !0;
            const C = {}.hasOwnProperty;

            function E(e) {
                const n = {},
                    t = {};
                let u;
                for (u in e.properties)
                    if (C.call(e.properties, u)) {
                        const l = e.properties[u],
                            r = new y(u, e.transform(e.attributes || {}, u), l, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(u) && (r.mustUseProperty = !0), n[u] = r, t[o(u)] = u, t[o(r.attribute)] = u
                    }
                return new l(n, t, e.space)
            }
            const A = E({
                    space: "xlink",
                    transform(e, n) {
                        return "xlink:" + n.slice(5).toLowerCase()
                    },
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                v = E({
                    space: "xml",
                    transform(e, n) {
                        return "xml:" + n.slice(3).toLowerCase()
                    },
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function b(e, n) {
                return n in e ? e[n] : n
            }

            function B(e, n) {
                return b(e, n.toLowerCase())
            }
            const w = E({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: B,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                O = E({
                    transform(e, n) {
                        return "role" === n ? n : "aria-" + n.slice(4).toLowerCase()
                    },
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: c,
                        ariaAutoComplete: null,
                        ariaBusy: c,
                        ariaChecked: c,
                        ariaColCount: D,
                        ariaColIndex: D,
                        ariaColSpan: D,
                        ariaControls: p,
                        ariaCurrent: null,
                        ariaDescribedBy: p,
                        ariaDetails: null,
                        ariaDisabled: c,
                        ariaDropEffect: p,
                        ariaErrorMessage: null,
                        ariaExpanded: c,
                        ariaFlowTo: p,
                        ariaGrabbed: c,
                        ariaHasPopup: null,
                        ariaHidden: c,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: p,
                        ariaLevel: D,
                        ariaLive: null,
                        ariaModal: c,
                        ariaMultiLine: c,
                        ariaMultiSelectable: c,
                        ariaOrientation: null,
                        ariaOwns: p,
                        ariaPlaceholder: null,
                        ariaPosInSet: D,
                        ariaPressed: c,
                        ariaReadOnly: c,
                        ariaRelevant: null,
                        ariaRequired: c,
                        ariaRoleDescription: p,
                        ariaRowCount: D,
                        ariaRowIndex: D,
                        ariaRowSpan: D,
                        ariaSelected: c,
                        ariaSetSize: D,
                        ariaSort: null,
                        ariaValueMax: D,
                        ariaValueMin: D,
                        ariaValueNow: D,
                        ariaValueText: null,
                        role: null
                    }
                }),
                _ = E({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: B,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: d,
                        acceptCharset: p,
                        accessKey: p,
                        action: null,
                        allow: null,
                        allowFullScreen: s,
                        allowPaymentRequest: s,
                        allowUserMedia: s,
                        alt: null,
                        as: null,
                        async: s,
                        autoCapitalize: null,
                        autoComplete: p,
                        autoFocus: s,
                        autoPlay: s,
                        capture: s,
                        charSet: null,
                        checked: s,
                        cite: null,
                        className: p,
                        cols: D,
                        colSpan: null,
                        content: null,
                        contentEditable: c,
                        controls: s,
                        controlsList: p,
                        coords: D | d,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: s,
                        defer: s,
                        dir: null,
                        dirName: null,
                        disabled: s,
                        download: f,
                        draggable: c,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: s,
                        formTarget: null,
                        headers: p,
                        height: D,
                        hidden: s,
                        high: D,
                        href: null,
                        hrefLang: null,
                        htmlFor: p,
                        httpEquiv: p,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: s,
                        itemId: null,
                        itemProp: p,
                        itemRef: p,
                        itemScope: s,
                        itemType: p,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: s,
                        low: D,
                        manifest: null,
                        max: null,
                        maxLength: D,
                        media: null,
                        method: null,
                        min: null,
                        minLength: D,
                        multiple: s,
                        muted: s,
                        name: null,
                        nonce: null,
                        noModule: s,
                        noValidate: s,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: s,
                        optimum: D,
                        pattern: null,
                        ping: p,
                        placeholder: null,
                        playsInline: s,
                        poster: null,
                        preload: null,
                        readOnly: s,
                        referrerPolicy: null,
                        rel: p,
                        required: s,
                        reversed: s,
                        rows: D,
                        rowSpan: D,
                        sandbox: p,
                        scope: null,
                        scoped: s,
                        seamless: s,
                        selected: s,
                        shape: null,
                        size: D,
                        sizes: null,
                        slot: null,
                        span: D,
                        spellCheck: c,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: D,
                        step: null,
                        style: null,
                        tabIndex: D,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: s,
                        useMap: null,
                        value: c,
                        width: D,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: p,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: D,
                        borderColor: null,
                        bottomMargin: D,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: s,
                        declare: s,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: D,
                        leftMargin: D,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: D,
                        marginWidth: D,
                        noResize: s,
                        noHref: s,
                        noShade: s,
                        noWrap: s,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: D,
                        rules: null,
                        scheme: null,
                        scrolling: c,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: D,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: D,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: s,
                        disableRemotePlayback: s,
                        prefix: null,
                        property: null,
                        results: D,
                        security: null,
                        unselectable: null
                    }
                }),
                x = E({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: b,
                    properties: {
                        about: h,
                        accentHeight: D,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: D,
                        amplitude: D,
                        arabicForm: null,
                        ascent: D,
                        attributeName: null,
                        attributeType: null,
                        azimuth: D,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: D,
                        by: null,
                        calcMode: null,
                        capHeight: D,
                        className: p,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: D,
                        diffuseConstant: D,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: D,
                        dominantBaseline: null,
                        download: s,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: D,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: D,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: D,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: d,
                        g2: d,
                        glyphName: d,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: D,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: D,
                        horizOriginX: D,
                        horizOriginY: D,
                        id: null,
                        ideographic: D,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: D,
                        k: D,
                        k1: D,
                        k2: D,
                        k3: D,
                        k4: D,
                        kernelMatrix: h,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: D,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: D,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: D,
                        overlineThickness: D,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: D,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: p,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: D,
                        pointsAtY: D,
                        pointsAtZ: D,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: h,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: h,
                        rev: h,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: h,
                        requiredFeatures: h,
                        requiredFonts: h,
                        requiredFormats: h,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: D,
                        specularExponent: D,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: D,
                        strikethroughThickness: D,
                        string: null,
                        stroke: null,
                        strokeDashArray: h,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: D,
                        strokeOpacity: D,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: D,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: h,
                        tabIndex: D,
                        tableValues: null,
                        target: null,
                        targetX: D,
                        targetY: D,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: h,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: D,
                        underlineThickness: D,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: D,
                        values: null,
                        vAlphabetic: D,
                        vMathematical: D,
                        vectorEffect: null,
                        vHanging: D,
                        vIdeographic: D,
                        version: null,
                        vertAdvY: D,
                        vertOriginX: D,
                        vertOriginY: D,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: D,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                P = r([v, A, w, O, _], "html"),
                k = r([v, A, w, O, x], "svg"),
                j = /^data[-\w.:]+$/i,
                S = /-[a-z]/g,
                M = /[A-Z]/g;

            function L(e) {
                return "-" + e.toLowerCase()
            }

            function I(e) {
                return e.charAt(1).toUpperCase()
            }
            const T = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var R = t(52428);
            const U = {
                    html: "http://www.w3.org/1999/xhtml",
                    mathml: "http://www.w3.org/1998/Math/MathML",
                    svg: "http://www.w3.org/2000/svg",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                z = {}.hasOwnProperty;

            function $(e, n, t) {
                if ("function" != typeof e) throw new TypeError("h is not a function");
                const u = function(e) {
                        const n = e("div", {});
                        return Boolean(n && ("_owner" in n || "_store" in n) && (void 0 === n.key || null === n.key))
                    }(e),
                    l = function(e) {
                        const n = e("div", {});
                        return Boolean(n && n.context && n.context._isVue)
                    }(e),
                    r = function(e) {
                        const n = e("div", {});
                        return "VirtualNode" === n.type
                    }(e);
                let o, i;
                if ("string" == typeof t || "boolean" == typeof t ? (o = t, t = {}) : (t || (t = {}), o = t.prefix), n && "root" === n.type) {
                    const e = n.children[0];
                    i = 1 === n.children.length && "element" === e.type ? e : {
                        type: "element",
                        tagName: "div",
                        properties: {},
                        children: n.children
                    }
                } else {
                    if (!n || "element" !== n.type) throw new Error("Expected root or element, not `" + (n && n.type || n) + "`");
                    i = n
                }
                return N(e, i, {
                    schema: "svg" === t.space ? k : P,
                    prefix: null == o ? u || l || r ? "h-" : void 0 : "string" == typeof o ? o : o ? "h-" : void 0,
                    key: 0,
                    react: u,
                    vue: l,
                    vdom: r,
                    hyperscript: H(e)
                })
            }

            function N(e, n, t) {
                const u = t.schema;
                let l = u,
                    r = n.tagName;
                const o = {},
                    i = [];
                let a, s = -1;
                for (a in "html" === u.space && "svg" === r.toLowerCase() && (l = k, t.schema = l), n.properties) n.properties && z.call(n.properties, a) && V(o, a, n.properties[a], t, r);
                if (t.vdom && ("html" === l.space ? r = r.toUpperCase() : l.space && (o.namespace = U[l.space])), t.prefix && (t.key++, o.key = t.prefix + t.key), n.children)
                    for (; ++s < n.children.length;) {
                        const u = n.children[s];
                        "element" === u.type ? i.push(N(e, u, t)) : "text" === u.type && i.push(u.value)
                    }
                return t.schema = u, i.length > 0 ? e.call(n, r, o, i) : e.call(n, r, o)
            }

            function V(e, n, t, u, l) {
                const r = function(e, n) {
                    const t = o(n);
                    let u = n,
                        l = i;
                    if (t in e.normal) return e.property[e.normal[t]];
                    if (t.length > 4 && "data" === t.slice(0, 4) && j.test(n)) {
                        if ("-" === n.charAt(4)) {
                            const e = n.slice(5).replace(S, I);
                            u = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                        } else {
                            const e = n.slice(4);
                            if (!S.test(e)) {
                                let t = e.replace(M, L);
                                "-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
                            }
                        }
                        l = y
                    }
                    return new l(u, n)
                }(u.schema, n);
                let a;
                null == t || "number" == typeof t && Number.isNaN(t) || !1 === t && (u.vue || u.vdom || u.hyperscript) || !t && r.boolean && (u.vue || u.vdom || u.hyperscript) || (Array.isArray(t) && (t = r.commaSeparated ? function(e, n) {
                    const t = n || {};
                    return ("" === e[e.length - 1] ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()
                }(t) : t.join(" ").trim()), r.boolean && u.hyperscript && (t = ""), "style" === r.property && "string" == typeof t && (u.react || u.vue || u.vdom) && (t = function(e, n) {
                    const t = {};
                    try {
                        R(e, ((e, n) => {
                            "-ms-" === e.slice(0, 4) && (e = "ms-" + e.slice(4)), t[e.replace(/-([a-z])/g, ((e, n) => n.toUpperCase()))] = n
                        }))
                    } catch (u) {
                        const e = u;
                        throw e.message = n + "[style]" + e.message.slice(9), e
                    }
                    return t
                }(t, l)), u.vue ? "style" !== r.property && (a = "attrs") : r.mustUseProperty || (u.vdom ? "style" !== r.property && (a = "attributes") : u.hyperscript && (a = "attrs")), a ? e[a] = Object.assign(e[a] || {}, {
                    [r.attribute]: t
                }) : r.space && u.react ? e[T[r.property] || r.property] = t : e[r.attribute] = t)
            }

            function H(e) {
                return "context" in e && "cleanup" in e
            }
            var q = t(42660);
            const W = {}.hasOwnProperty,
                X = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function K(e) {
                if (!e || "function" != typeof e.createElement) throw new TypeError("createElement is not a function");
                const n = e.createElement;

                function t(t, u, l) {
                    if (l && X.has(t) && (l = l.filter((e => ! function(e) {
                            const n = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                            return "string" == typeof n && "" === n.replace(/[ \t\n\f\r]/g, "")
                        }(e)))), e.components && W.call(e.components, t)) {
                        const r = e.components[t];
                        return e.passNode && "function" == typeof r && (u = Object.assign({
                            node: this
                        }, u)), n(r, u, l)
                    }
                    return n(t, u, l)
                }
                Object.assign(this, {
                    Compiler: function(u) {
                        let l = $(t, q(u), e.prefix);
                        if ("root" === u.type) return l = l && "object" == typeof l && "type" in l && "props" in l && "div" === l.type && (1 !== u.children.length || "element" !== u.children[0].type) ? l.props.children : [l], n(e.Fragment || "div", {}, l);
                        return l
                    }
                })
            }
        },
        95339: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return C
                }
            });
            const u = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
                l = Object.hasOwnProperty;

            function r(e, n) {
                return function(e) {
                    return Boolean(e && "object" == typeof e)
                }(e) && ("value" in e && e.value || n && "alt" in e && e.alt || "children" in e && o(e.children, n)) || Array.isArray(e) && o(e, n) || ""
            }

            function o(e, n) {
                const t = [];
                let u = -1;
                for (; ++u < e.length;) t[u] = r(e[u], n);
                return t.join("")
            }
            const i = function(e) {
                if (null == e) return s;
                if ("string" == typeof e) return function(e) {
                    return a(n);

                    function n(n) {
                        return n && n.type === e
                    }
                }(e);
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    const n = [];
                    let t = -1;
                    for (; ++t < e.length;) n[t] = i(e[t]);
                    return a(u);

                    function u(...e) {
                        let t = -1;
                        for (; ++t < n.length;)
                            if (n[t].call(this, ...e)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return a(n);

                    function n(n) {
                        let t;
                        for (t in e)
                            if (n[t] !== e[t]) return !1;
                        return !0
                    }
                }(e);
                if ("function" == typeof e) return a(e);
                throw new Error("Expected function, string, or object as test")
            };

            function a(e) {
                return function(n, ...t) {
                    return Boolean(n && "object" == typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
                }
            }

            function s() {
                return !0
            }
            const c = function(e, n, t, u) {
                "function" == typeof n && "function" != typeof t && (u = t, t = n, n = null);
                const l = i(n),
                    r = u ? -1 : 1;
                ! function e(o, i, a) {
                    const s = o && "object" == typeof o ? o : {};
                    if ("string" == typeof s.type) {
                        const e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
                        Object.defineProperty(c, "name", {
                            value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")"
                        })
                    }
                    return c;

                    function c() {
                        let s, c, f, D = [];
                        if ((!n || l(o, i, a[a.length - 1] || null)) && (D = function(e) {
                                if (Array.isArray(e)) return e;
                                if ("number" == typeof e) return [true, e];
                                return [e]
                            }(t(o, a)), false === D[0])) return D;
                        if (o.children && "skip" !== D[0])
                            for (c = (u ? o.children.length : -1) + r, f = a.concat(o); c > -1 && c < o.children.length;) {
                                if (s = e(o.children[c], c, f)(), false === s[0]) return s;
                                c = "number" == typeof s[1] ? s[1] : c + r
                            }
                        return D
                    }
                }(e, void 0, [])()
            };
            const f = function(e, n, t, u) {
                "function" == typeof n && "function" != typeof t && (u = t, t = n, n = null), c(e, n, (function(e, n) {
                    const u = n[n.length - 1];
                    return t(e, u ? u.children.indexOf(e) : null, u)
                }), u)
            };

            function D(e) {
                return new RegExp("^(" + e + ")$", "i")
            }
            const p = new class {
                constructor() {
                    this.occurrences, this.reset()
                }
                slug(e, n) {
                    const t = this;
                    let r = function(e, n) {
                        if ("string" != typeof e) return "";
                        n || (e = e.toLowerCase());
                        return e.replace(u, "").replace(/ /g, "-")
                    }(e, !0 === n);
                    const o = r;
                    for (; l.call(t.occurrences, r);) t.occurrences[o]++, r = o + "-" + t.occurrences[o];
                    return t.occurrences[r] = 0, r
                }
                reset() {
                    this.occurrences = Object.create(null)
                }
            };

            function d(e, n, t) {
                const u = t.skip ? D(t.skip) : void 0,
                    l = i(t.parents || (n => n === e)),
                    o = [];
                let a, s, c;
                return p.reset(), f(e, "heading", ((e, i, f) => {
                    const D = function(e, n) {
                            const t = (n || {}).includeImageAlt;
                            return r(e, "boolean" != typeof t || t)
                        }(e, {
                            includeImageAlt: !1
                        }),
                        d = e.data && e.data.hProperties && e.data.hProperties.id,
                        h = p.slug(d || D);
                    if (l(f)) {
                        if (null !== i && n && !a && n.test(D)) return a = i + 1, void(c = e);
                        null !== i && c && !s && e.depth <= c.depth && (s = i), !s && n || t.maxDepth && !(e.depth <= t.maxDepth) || u && u.test(D) || o.push({
                            depth: e.depth,
                            children: e.children,
                            id: h
                        })
                    }
                })), {
                    index: void 0 === a ? -1 : a,
                    endIndex: void 0 === a ? -1 : s || e.children.length,
                    map: o
                }
            }
            var h = t(92849);

            function F(e, n) {
                const {
                    ordered: t = !1,
                    tight: u = !1,
                    prefix: l = null
                } = n, r = {
                    type: "list",
                    ordered: t,
                    spread: !1,
                    children: []
                };
                let o = Number.POSITIVE_INFINITY,
                    i = -1;
                for (; ++i < e.length;) e[i].depth < o && (o = e[i].depth);
                for (i = -1; ++i < e.length;) e[i].depth -= o - 1;
                for (i = -1; ++i < e.length;) g(e[i], r, {
                    ordered: t,
                    tight: u,
                    prefix: l
                });
                return r
            }

            function g(e, n, t) {
                let u = -1;
                const l = n.children[n.children.length - 1];
                if ("list" === n.type)
                    if (1 === e.depth) n.children.push({
                        type: "listItem",
                        spread: !1,
                        children: [{
                            type: "paragraph",
                            children: [{
                                type: "link",
                                title: null,
                                url: "#" + (t.prefix || "") + e.id,
                                children: y(e.children)
                            }]
                        }]
                    });
                    else if (n.children.length > 0) {
                    g(e, n.children[n.children.length - 1], t)
                } else {
                    const u = {
                        type: "listItem",
                        spread: !1,
                        children: []
                    };
                    n.children.push(u), g(e, u, t)
                } else if (l && "list" === l.type) e.depth--, g(e, l, t);
                else {
                    const u = {
                        type: "list",
                        ordered: t.ordered,
                        spread: !1,
                        children: []
                    };
                    n.children.push(u), e.depth--, g(e, u, t)
                }
                if ("list" !== n.type || t.tight) n.spread = !t.tight;
                else
                    for (n.spread = !1; ++u < n.children.length;)
                        if (n.children[u].children.length > 1) {
                            n.spread = !0;
                            break
                        }
            }

            function y(e) {
                let n = [],
                    t = -1;
                if (e)
                    for (; ++t < e.length;) n = n.concat(m(e[t]));
                return n
            }

            function m(e) {
                if ("footnoteReference" === e.type) return [];
                if ("link" === e.type || "linkReference" === e.type || "footnote" === e.type) return y(e.children);
                if ("children" in e) {
                    const {
                        children: n,
                        position: t,
                        ...u
                    } = e;
                    return Object.assign(h(!0, {}, u), {
                        children: y(e.children)
                    })
                }
                const {
                    position: n,
                    ...t
                } = e;
                return h(!0, {}, t)
            }

            function C(e = {}) {
                return n => {
                    const t = function(e, n) {
                        const t = n || {},
                            u = t.heading ? D(t.heading) : void 0,
                            l = d(e, u, t);
                        return {
                            index: u ? l.index : null,
                            endIndex: u ? l.endIndex : null,
                            map: l.map.length > 0 ? F(l.map, t) : null
                        }
                    }(n, Object.assign({}, e, {
                        heading: e.heading || "toc|table[ -]of[ -]contents?"
                    }));
                    null !== t.endIndex && null !== t.index && -1 !== t.index && t.map && (n.children = [...n.children.slice(0, t.index), t.map, ...n.children.slice(t.endIndex)])
                }
            }
        },
        33936: function(e, n, t) {
            "use strict";

            function u(e) {
                if (e) throw e
            }
            t.d(n, {
                l: function() {
                    return v
                }
            });
            var l = t(87206),
                r = t(92849);

            function o(e) {
                if ("object" != typeof e || null === e) return !1;
                const n = Object.getPrototypeOf(e);
                return !(null !== n && n !== Object.prototype && null !== Object.getPrototypeOf(n) || Symbol.toStringTag in e || Symbol.iterator in e)
            }

            function i() {
                const e = [],
                    n = {
                        run: function(...n) {
                            let t = -1;
                            const u = n.pop();
                            if ("function" != typeof u) throw new TypeError("Expected function as last argument, not " + u);
                            ! function l(r, ...o) {
                                const i = e[++t];
                                let a = -1;
                                if (r) u(r);
                                else {
                                    for (; ++a < n.length;) null !== o[a] && void 0 !== o[a] || (o[a] = n[a]);
                                    n = o, i ? function(e, n) {
                                        let t;
                                        return u;

                                        function u(...n) {
                                            const u = e.length > n.length;
                                            let i;
                                            u && n.push(l);
                                            try {
                                                i = e.apply(this, n)
                                            } catch (r) {
                                                if (u && t) throw r;
                                                return l(r)
                                            }
                                            u || (i instanceof Promise ? i.then(o, l) : i instanceof Error ? l(i) : o(i))
                                        }

                                        function l(e, ...u) {
                                            t || (t = !0, n(e, ...u))
                                        }

                                        function o(e) {
                                            l(null, e)
                                        }
                                    }(i, l)(...o) : u(null, ...o)
                                }
                            }(null, ...n)
                        },
                        use: function(t) {
                            if ("function" != typeof t) throw new TypeError("Expected `middelware` to be a function, not " + t);
                            return e.push(t), n
                        }
                    };
                return n
            }

            function a(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? c(e.position) : "start" in e || "end" in e ? c(e) : "line" in e || "column" in e ? s(e) : "" : ""
            }

            function s(e) {
                return f(e && e.line) + ":" + f(e && e.column)
            }

            function c(e) {
                return s(e && e.start) + "-" + s(e && e.end)
            }

            function f(e) {
                return e && "number" == typeof e ? e : 1
            }
            class D extends Error {
                constructor(e, n, t) {
                    const u = [null, null];
                    let l = {
                        start: {
                            line: null,
                            column: null
                        },
                        end: {
                            line: null,
                            column: null
                        }
                    };
                    if (super(), "string" == typeof n && (t = n, n = void 0), "string" == typeof t) {
                        const e = t.indexOf(":"); - 1 === e ? u[1] = t : (u[0] = t.slice(0, e), u[1] = t.slice(e + 1))
                    }
                    n && ("type" in n || "position" in n ? n.position && (l = n.position) : "start" in n || "end" in n ? l = n : ("line" in n || "column" in n) && (l.start = n)), this.name = a(n) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = l.start.line, this.column = l.start.column, this.position = l, this.source = u[0], this.ruleId = u[1], this.file, this.actual, this.expected, this.url, this.note
                }
            }
            D.prototype.file = "", D.prototype.name = "", D.prototype.reason = "", D.prototype.message = "", D.prototype.stack = "", D.prototype.fatal = null, D.prototype.column = null, D.prototype.line = null, D.prototype.source = null, D.prototype.ruleId = null, D.prototype.position = null;
            const p = {
                basename: function(e, n) {
                    if (void 0 !== n && "string" != typeof n) throw new TypeError('"ext" argument must be a string');
                    d(e);
                    let t, u = 0,
                        l = -1,
                        r = e.length;
                    if (void 0 === n || 0 === n.length || n.length > e.length) {
                        for (; r--;)
                            if (47 === e.charCodeAt(r)) {
                                if (t) {
                                    u = r + 1;
                                    break
                                }
                            } else l < 0 && (t = !0, l = r + 1);
                        return l < 0 ? "" : e.slice(u, l)
                    }
                    if (n === e) return "";
                    let o = -1,
                        i = n.length - 1;
                    for (; r--;)
                        if (47 === e.charCodeAt(r)) {
                            if (t) {
                                u = r + 1;
                                break
                            }
                        } else o < 0 && (t = !0, o = r + 1), i > -1 && (e.charCodeAt(r) === n.charCodeAt(i--) ? i < 0 && (l = r) : (i = -1, l = o));
                    u === l ? l = o : l < 0 && (l = e.length);
                    return e.slice(u, l)
                },
                dirname: function(e) {
                    if (d(e), 0 === e.length) return ".";
                    let n, t = -1,
                        u = e.length;
                    for (; --u;)
                        if (47 === e.charCodeAt(u)) {
                            if (n) {
                                t = u;
                                break
                            }
                        } else n || (n = !0);
                    return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
                },
                extname: function(e) {
                    d(e);
                    let n, t = e.length,
                        u = -1,
                        l = 0,
                        r = -1,
                        o = 0;
                    for (; t--;) {
                        const i = e.charCodeAt(t);
                        if (47 !== i) u < 0 && (n = !0, u = t + 1), 46 === i ? r < 0 ? r = t : 1 !== o && (o = 1) : r > -1 && (o = -1);
                        else if (n) {
                            l = t + 1;
                            break
                        }
                    }
                    if (r < 0 || u < 0 || 0 === o || 1 === o && r === u - 1 && r === l + 1) return "";
                    return e.slice(r, u)
                },
                join: function(...e) {
                    let n, t = -1;
                    for (; ++t < e.length;) d(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
                    return void 0 === n ? "." : function(e) {
                        d(e);
                        const n = 47 === e.charCodeAt(0);
                        let t = function(e, n) {
                            let t, u, l = "",
                                r = 0,
                                o = -1,
                                i = 0,
                                a = -1;
                            for (; ++a <= e.length;) {
                                if (a < e.length) t = e.charCodeAt(a);
                                else {
                                    if (47 === t) break;
                                    t = 47
                                }
                                if (47 === t) {
                                    if (o === a - 1 || 1 === i);
                                    else if (o !== a - 1 && 2 === i) {
                                        if (l.length < 2 || 2 !== r || 46 !== l.charCodeAt(l.length - 1) || 46 !== l.charCodeAt(l.length - 2))
                                            if (l.length > 2) {
                                                if (u = l.lastIndexOf("/"), u !== l.length - 1) {
                                                    u < 0 ? (l = "", r = 0) : (l = l.slice(0, u), r = l.length - 1 - l.lastIndexOf("/")), o = a, i = 0;
                                                    continue
                                                }
                                            } else if (l.length > 0) {
                                            l = "", r = 0, o = a, i = 0;
                                            continue
                                        }
                                        n && (l = l.length > 0 ? l + "/.." : "..", r = 2)
                                    } else l.length > 0 ? l += "/" + e.slice(o + 1, a) : l = e.slice(o + 1, a), r = a - o - 1;
                                    o = a, i = 0
                                } else 46 === t && i > -1 ? i++ : i = -1
                            }
                            return l
                        }(e, !n);
                        0 !== t.length || n || (t = ".");
                        t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
                        return n ? "/" + t : t
                    }(n)
                },
                sep: "/"
            };

            function d(e) {
                if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            const h = {
                cwd: function() {
                    return "/"
                }
            };

            function F(e) {
                return null !== e && "object" == typeof e && e.href && e.origin
            }

            function g(e) {
                if ("string" == typeof e) e = new URL(e);
                else if (!F(e)) {
                    const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                    throw n.code = "ERR_INVALID_ARG_TYPE", n
                }
                if ("file:" !== e.protocol) {
                    const e = new TypeError("The URL must be of scheme file");
                    throw e.code = "ERR_INVALID_URL_SCHEME", e
                }
                return function(e) {
                    if ("" !== e.hostname) {
                        const e = new TypeError('File URL host must be "localhost" or empty on darwin');
                        throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                    }
                    const n = e.pathname;
                    let t = -1;
                    for (; ++t < n.length;)
                        if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
                            const e = n.charCodeAt(t + 2);
                            if (70 === e || 102 === e) {
                                const e = new TypeError("File URL path must not include encoded / characters");
                                throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                            }
                        }
                    return decodeURIComponent(n)
                }(e)
            }
            const y = ["history", "path", "basename", "stem", "extname", "dirname"];
            class m {
                constructor(e) {
                    let n;
                    n = e ? "string" == typeof e || function(e) {
                        return l(e)
                    }(e) ? {
                        value: e
                    } : F(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = h.cwd(), this.value, this.stored, this.result, this.map;
                    let t, u = -1;
                    for (; ++u < y.length;) {
                        const e = y[u];
                        e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
                    }
                    for (t in n) y.includes(t) || (this[t] = n[t])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    F(e) && (e = g(e)), E(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" == typeof this.path ? p.dirname(this.path) : void 0
                }
                set dirname(e) {
                    A(this.basename, "dirname"), this.path = p.join(e || "", this.basename)
                }
                get basename() {
                    return "string" == typeof this.path ? p.basename(this.path) : void 0
                }
                set basename(e) {
                    E(e, "basename"), C(e, "basename"), this.path = p.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" == typeof this.path ? p.extname(this.path) : void 0
                }
                set extname(e) {
                    if (C(e, "extname"), A(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = p.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" == typeof this.path ? p.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    E(e, "stem"), C(e, "stem"), this.path = p.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e || void 0)
                }
                message(e, n, t) {
                    const u = new D(e, n, t);
                    return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = !1, this.messages.push(u), u
                }
                info(e, n, t) {
                    const u = this.message(e, n, t);
                    return u.fatal = null, u
                }
                fail(e, n, t) {
                    const u = this.message(e, n, t);
                    throw u.fatal = !0, u
                }
            }

            function C(e, n) {
                if (e && e.includes(p.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + p.sep + "`")
            }

            function E(e, n) {
                if (!e) throw new Error("`" + n + "` cannot be empty")
            }

            function A(e, n) {
                if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
            }
            const v = function e() {
                    const n = i(),
                        t = [];
                    let a, s = {},
                        c = -1;
                    return f.data = function(e, n) {
                        if ("string" == typeof e) return 2 === arguments.length ? (_("data", a), s[e] = n, f) : b.call(s, e) && s[e] || null;
                        if (e) return _("data", a), s = e, f;
                        return s
                    }, f.Parser = void 0, f.Compiler = void 0, f.freeze = function() {
                        if (a) return f;
                        for (; ++c < t.length;) {
                            const [e, ...u] = t[c];
                            if (!1 === u[0]) continue;
                            !0 === u[0] && (u[0] = void 0);
                            const l = e.call(f, ...u);
                            "function" == typeof l && n.use(l)
                        }
                        return a = !0, c = Number.POSITIVE_INFINITY, f
                    }, f.attachers = t, f.use = function(e, ...n) {
                        let u;
                        if (_("use", a), null == e);
                        else if ("function" == typeof e) D(e, ...n);
                        else {
                            if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                            Array.isArray(e) ? c(e) : i(e)
                        }
                        u && (s.settings = Object.assign(s.settings || {}, u));
                        return f;

                        function l(e) {
                            if ("function" == typeof e) D(e);
                            else {
                                if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                                if (Array.isArray(e)) {
                                    const [n, ...t] = e;
                                    D(n, ...t)
                                } else i(e)
                            }
                        }

                        function i(e) {
                            c(e.plugins), e.settings && (u = Object.assign(u || {}, e.settings))
                        }

                        function c(e) {
                            let n = -1;
                            if (null == e);
                            else {
                                if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
                                for (; ++n < e.length;) {
                                    l(e[n])
                                }
                            }
                        }

                        function D(e, n) {
                            let u, l = -1;
                            for (; ++l < t.length;)
                                if (t[l][0] === e) {
                                    u = t[l];
                                    break
                                }
                            u ? (o(u[1]) && o(n) && (n = r(!0, u[1], n)), u[1] = n) : t.push([...arguments])
                        }
                    }, f.parse = function(e) {
                        f.freeze();
                        const n = k(e),
                            t = f.Parser;
                        if (w("parse", t), B(t, "parse")) return new t(String(n), n).parse();
                        return t(String(n), n)
                    }, f.stringify = function(e, n) {
                        f.freeze();
                        const t = k(n),
                            u = f.Compiler;
                        if (O("stringify", u), x(e), B(u, "compile")) return new u(e, t).compile();
                        return u(e, t)
                    }, f.run = function(e, t, u) {
                        x(e), f.freeze(), u || "function" != typeof t || (u = t, t = void 0);
                        if (!u) return new Promise(l);

                        function l(l, r) {
                            function o(n, t, o) {
                                t = t || e, n ? r(n) : l ? l(t) : u(null, t, o)
                            }
                            n.run(e, k(t), o)
                        }
                        l(null, u)
                    }, f.runSync = function(e, n) {
                        let t, l;
                        return f.run(e, n, r), P("runSync", "run", l), t;

                        function r(e, n) {
                            u(e), t = n, l = !0
                        }
                    }, f.process = function(e, n) {
                        if (f.freeze(), w("process", f.Parser), O("process", f.Compiler), !n) return new Promise(t);

                        function t(t, u) {
                            const r = k(e);

                            function o(e, l) {
                                e || !l ? u(e) : t ? t(l) : n(null, l)
                            }
                            f.run(f.parse(r), r, ((e, n, t) => {
                                if (!e && n && t) {
                                    const r = f.stringify(n, t);
                                    null == r || ("string" == typeof(u = r) || l(u) ? t.value = r : t.result = r), o(e, t)
                                } else o(e);
                                var u
                            }))
                        }
                        t(null, n)
                    }, f.processSync = function(e) {
                        let n;
                        f.freeze(), w("processSync", f.Parser), O("processSync", f.Compiler);
                        const t = k(e);
                        return f.process(t, l), P("processSync", "process", n), t;

                        function l(e) {
                            n = !0, u(e)
                        }
                    }, f;

                    function f() {
                        const n = e();
                        let u = -1;
                        for (; ++u < t.length;) n.use(...t[u]);
                        return n.data(r(!0, {}, s)), n
                    }
                }().freeze(),
                b = {}.hasOwnProperty;

            function B(e, n) {
                return "function" == typeof e && e.prototype && (function(e) {
                    let n;
                    for (n in e)
                        if (b.call(e, n)) return !0;
                    return !1
                }(e.prototype) || n in e.prototype)
            }

            function w(e, n) {
                if ("function" != typeof n) throw new TypeError("Cannot `" + e + "` without `Parser`")
            }

            function O(e, n) {
                if ("function" != typeof n) throw new TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function _(e, n) {
                if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function x(e) {
                if (!o(e) || "string" != typeof e.type) throw new TypeError("Expected node, got `" + e + "`")
            }

            function P(e, n, t) {
                if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
            }

            function k(e) {
                return function(e) {
                    return Boolean(e && "object" == typeof e && "message" in e && "messages" in e)
                }(e) ? e : new m(e)
            }
        }
    }
]);