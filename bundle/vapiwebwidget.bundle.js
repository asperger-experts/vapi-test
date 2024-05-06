;(function (oe) {
	typeof define == "function" && define.amd ? define(oe) : oe()
})(function () {
	"use strict"
	var Ml = Object.defineProperty
	var Al = (oe, ve, Ee) => (ve in oe ? Ml(oe, ve, { enumerable: !0, configurable: !0, writable: !0, value: Ee }) : (oe[ve] = Ee))
	var $ = (oe, ve, Ee) => (Al(oe, typeof ve != "symbol" ? ve + "" : ve, Ee), Ee)
	var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
	function ve(n) {
		if (n.__esModule) return n
		var e = n.default
		if (typeof e == "function") {
			var t = function r() {
				return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
			}
			t.prototype = e.prototype
		} else t = {}
		return (
			Object.defineProperty(t, "__esModule", { value: !0 }),
			Object.keys(n).forEach(function (r) {
				var i = Object.getOwnPropertyDescriptor(n, r)
				Object.defineProperty(
					t,
					r,
					i.get
						? i
						: {
								enumerable: !0,
								get: function () {
									return n[r]
								},
						  }
				)
			}),
			t
		)
	}
	var Ee = {}
	function ln(n, e) {
		if (n == null) return {}
		var t,
			r,
			i = (function (s, l) {
				if (s == null) return {}
				var u,
					h,
					p = {},
					m = Object.keys(s)
				for (h = 0; h < m.length; h++) (u = m[h]), l.indexOf(u) >= 0 || (p[u] = s[u])
				return p
			})(n, e)
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(n)
			for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t]))
		}
		return i
	}
	function lr(n, e, t, r, i, a, s) {
		try {
			var l = n[a](s),
				u = l.value
		} catch (h) {
			return void t(h)
		}
		l.done ? e(u) : Promise.resolve(u).then(r, i)
	}
	function C(n) {
		return function () {
			var e = this,
				t = arguments
			return new Promise(function (r, i) {
				var a = n.apply(e, t)
				function s(u) {
					lr(a, r, i, s, l, "next", u)
				}
				function l(u) {
					lr(a, r, i, s, l, "throw", u)
				}
				s(void 0)
			})
		}
	}
	function ae(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function x(n) {
		return (
			(x =
				typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
					? function (e) {
							return typeof e
					  }
					: function (e) {
							return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					  }),
			x(n)
		)
	}
	function ur(n) {
		var e = (function (t, r) {
			if (x(t) !== "object" || t === null) return t
			var i = t[Symbol.toPrimitive]
			if (i !== void 0) {
				var a = i.call(t, r || "default")
				if (x(a) !== "object") return a
				throw new TypeError("@@toPrimitive must return a primitive value.")
			}
			return (r === "string" ? String : Number)(t)
		})(n, "string")
		return x(e) === "symbol" ? e : String(e)
	}
	function dr(n, e) {
		for (var t = 0; t < e.length; t++) {
			var r = e[t]
			;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(n, ur(r.key), r)
		}
	}
	function se(n, e, t) {
		return e && dr(n.prototype, e), t && dr(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n
	}
	function _e(n) {
		if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
		return n
	}
	function ct(n, e) {
		return (
			(ct = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: function (t, r) {
						return (t.__proto__ = r), t
				  }),
			ct(n, e)
		)
	}
	function Tt(n, e) {
		if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function")
		;(n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, "prototype", { writable: !1 }), e && ct(n, e)
	}
	function Ct(n, e) {
		if (e && (x(e) === "object" || typeof e == "function")) return e
		if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined")
		return _e(n)
	}
	function ce(n) {
		return (
			(ce = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: function (e) {
						return e.__proto__ || Object.getPrototypeOf(e)
				  }),
			ce(n)
		)
	}
	function ke(n, e, t) {
		return (e = ur(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t), n
	}
	function hr(n, e) {
		;(e == null || e > n.length) && (e = n.length)
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t]
		return r
	}
	function Ne(n, e) {
		return (
			(function (t) {
				if (Array.isArray(t)) return t
			})(n) ||
			(function (t, r) {
				var i = t == null ? null : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"]
				if (i != null) {
					var a,
						s,
						l,
						u,
						h = [],
						p = !0,
						m = !1
					try {
						if (((l = (i = i.call(t)).next), r === 0)) {
							if (Object(i) !== i) return
							p = !1
						} else for (; !(p = (a = l.call(i)).done) && (h.push(a.value), h.length !== r); p = !0);
					} catch (y) {
						;(m = !0), (s = y)
					} finally {
						try {
							if (!p && i.return != null && ((u = i.return()), Object(u) !== u)) return
						} finally {
							if (m) throw s
						}
					}
					return h
				}
			})(n, e) ||
			(function (t, r) {
				if (t) {
					if (typeof t == "string") return hr(t, r)
					var i = Object.prototype.toString.call(t).slice(8, -1)
					return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? hr(t, r) : void 0
				}
			})(n, e) ||
			(function () {
				throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
			})()
		)
	}
	var pr,
		ye = {},
		Wa = {
			get exports() {
				return ye
			},
			set exports(n) {
				ye = n
			},
		},
		Je = typeof Reflect == "object" ? Reflect : null,
		fr =
			Je && typeof Je.apply == "function"
				? Je.apply
				: function (n, e, t) {
						return Function.prototype.apply.call(n, e, t)
				  }
	pr =
		Je && typeof Je.ownKeys == "function"
			? Je.ownKeys
			: Object.getOwnPropertySymbols
			? function (n) {
					return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))
			  }
			: function (n) {
					return Object.getOwnPropertyNames(n)
			  }
	var mr =
		Number.isNaN ||
		function (n) {
			return n != n
		}
	function D() {
		D.init.call(this)
	}
	;(Wa.exports = D),
		(ye.once = function (n, e) {
			return new Promise(function (t, r) {
				function i(s) {
					n.removeListener(e, a), r(s)
				}
				function a() {
					typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments))
				}
				Er(n, e, a, { once: !0 }),
					e !== "error" &&
						(function (s, l, u) {
							typeof s.on == "function" && Er(s, "error", l, u)
						})(n, i, { once: !0 })
			})
		}),
		(D.EventEmitter = D),
		(D.prototype._events = void 0),
		(D.prototype._eventsCount = 0),
		(D.prototype._maxListeners = void 0)
	var gr = 10
	function Mt(n) {
		if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
	}
	function vr(n) {
		return n._maxListeners === void 0 ? D.defaultMaxListeners : n._maxListeners
	}
	function _r(n, e, t, r) {
		var i, a, s, l
		if ((Mt(t), (a = n._events) === void 0 ? ((a = n._events = Object.create(null)), (n._eventsCount = 0)) : (a.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), (a = n._events)), (s = a[e])), s === void 0)) (s = a[e] = t), ++n._eventsCount
		else if ((typeof s == "function" ? (s = a[e] = r ? [t, s] : [s, t]) : r ? s.unshift(t) : s.push(t), (i = vr(n)) > 0 && s.length > i && !s.warned)) {
			s.warned = !0
			var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit")
			;(u.name = "MaxListenersExceededWarning"), (u.emitter = n), (u.type = e), (u.count = s.length), (l = u), console && console.warn && console.warn(l)
		}
		return n
	}
	function za() {
		if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
	}
	function yr(n, e, t) {
		var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t },
			i = za.bind(r)
		return (i.listener = t), (r.wrapFn = i), i
	}
	function br(n, e, t) {
		var r = n._events
		if (r === void 0) return []
		var i = r[e]
		return i === void 0
			? []
			: typeof i == "function"
			? t
				? [i.listener || i]
				: [i]
			: t
			? (function (a) {
					for (var s = new Array(a.length), l = 0; l < s.length; ++l) s[l] = a[l].listener || a[l]
					return s
			  })(i)
			: Sr(i, i.length)
	}
	function wr(n) {
		var e = this._events
		if (e !== void 0) {
			var t = e[n]
			if (typeof t == "function") return 1
			if (t !== void 0) return t.length
		}
		return 0
	}
	function Sr(n, e) {
		for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r]
		return t
	}
	function Er(n, e, t, r) {
		if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t)
		else {
			if (typeof n.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n)
			n.addEventListener(e, function i(a) {
				r.once && n.removeEventListener(e, i), t(a)
			})
		}
	}
	Object.defineProperty(D, "defaultMaxListeners", {
		enumerable: !0,
		get: function () {
			return gr
		},
		set: function (n) {
			if (typeof n != "number" || n < 0 || mr(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".")
			gr = n
		},
	}),
		(D.init = function () {
			;(this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0)
		}),
		(D.prototype.setMaxListeners = function (n) {
			if (typeof n != "number" || n < 0 || mr(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".")
			return (this._maxListeners = n), this
		}),
		(D.prototype.getMaxListeners = function () {
			return vr(this)
		}),
		(D.prototype.emit = function (n) {
			for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t])
			var r = n === "error",
				i = this._events
			if (i !== void 0) r = r && i.error === void 0
			else if (!r) return !1
			if (r) {
				var a
				if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a
				var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""))
				throw ((s.context = a), s)
			}
			var l = i[n]
			if (l === void 0) return !1
			if (typeof l == "function") fr(l, this, e)
			else {
				var u = l.length,
					h = Sr(l, u)
				for (t = 0; t < u; ++t) fr(h[t], this, e)
			}
			return !0
		}),
		(D.prototype.addListener = function (n, e) {
			return _r(this, n, e, !1)
		}),
		(D.prototype.on = D.prototype.addListener),
		(D.prototype.prependListener = function (n, e) {
			return _r(this, n, e, !0)
		}),
		(D.prototype.once = function (n, e) {
			return Mt(e), this.on(n, yr(this, n, e)), this
		}),
		(D.prototype.prependOnceListener = function (n, e) {
			return Mt(e), this.prependListener(n, yr(this, n, e)), this
		}),
		(D.prototype.removeListener = function (n, e) {
			var t, r, i, a, s
			if ((Mt(e), (r = this._events) === void 0)) return this
			if ((t = r[n]) === void 0) return this
			if (t === e || t.listener === e) --this._eventsCount == 0 ? (this._events = Object.create(null)) : (delete r[n], r.removeListener && this.emit("removeListener", n, t.listener || e))
			else if (typeof t != "function") {
				for (i = -1, a = t.length - 1; a >= 0; a--)
					if (t[a] === e || t[a].listener === e) {
						;(s = t[a].listener), (i = a)
						break
					}
				if (i < 0) return this
				i === 0
					? t.shift()
					: (function (l, u) {
							for (; u + 1 < l.length; u++) l[u] = l[u + 1]
							l.pop()
					  })(t, i),
					t.length === 1 && (r[n] = t[0]),
					r.removeListener !== void 0 && this.emit("removeListener", n, s || e)
			}
			return this
		}),
		(D.prototype.off = D.prototype.removeListener),
		(D.prototype.removeAllListeners = function (n) {
			var e, t, r
			if ((t = this._events) === void 0) return this
			if (t.removeListener === void 0) return arguments.length === 0 ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : t[n] !== void 0 && (--this._eventsCount == 0 ? (this._events = Object.create(null)) : delete t[n]), this
			if (arguments.length === 0) {
				var i,
					a = Object.keys(t)
				for (r = 0; r < a.length; ++r) (i = a[r]) !== "removeListener" && this.removeAllListeners(i)
				return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this
			}
			if (typeof (e = t[n]) == "function") this.removeListener(n, e)
			else if (e !== void 0) for (r = e.length - 1; r >= 0; r--) this.removeListener(n, e[r])
			return this
		}),
		(D.prototype.listeners = function (n) {
			return br(this, n, !0)
		}),
		(D.prototype.rawListeners = function (n) {
			return br(this, n, !1)
		}),
		(D.listenerCount = function (n, e) {
			return typeof n.listenerCount == "function" ? n.listenerCount(e) : wr.call(n, e)
		}),
		(D.prototype.listenerCount = wr),
		(D.prototype.eventNames = function () {
			return this._eventsCount > 0 ? pr(this._events) : []
		})
	var kr = Object.prototype.hasOwnProperty
	function Tr(n, e, t) {
		for (t of n.keys()) if (X(t, e)) return t
	}
	function X(n, e) {
		var t, r, i
		if (n === e) return !0
		if (n && e && (t = n.constructor) === e.constructor) {
			if (t === Date) return n.getTime() === e.getTime()
			if (t === RegExp) return n.toString() === e.toString()
			if (t === Array) {
				if ((r = n.length) === e.length) for (; r-- && X(n[r], e[r]); );
				return r === -1
			}
			if (t === Set) {
				if (n.size !== e.size) return !1
				for (r of n) if (((i = r) && typeof i == "object" && !(i = Tr(e, i))) || !e.has(i)) return !1
				return !0
			}
			if (t === Map) {
				if (n.size !== e.size) return !1
				for (r of n) if (((i = r[0]) && typeof i == "object" && !(i = Tr(e, i))) || !X(r[1], e.get(i))) return !1
				return !0
			}
			if (t === ArrayBuffer) (n = new Uint8Array(n)), (e = new Uint8Array(e))
			else if (t === DataView) {
				if ((r = n.byteLength) === e.byteLength) for (; r-- && n.getInt8(r) === e.getInt8(r); );
				return r === -1
			}
			if (ArrayBuffer.isView(n)) {
				if ((r = n.byteLength) === e.byteLength) for (; r-- && n[r] === e[r]; );
				return r === -1
			}
			if (!t || typeof n == "object") {
				for (t in ((r = 0), n)) if ((kr.call(n, t) && ++r && !kr.call(e, t)) || !(t in e) || !X(n[t], e[t])) return !1
				return Object.keys(e).length === r
			}
		}
		return n != n && e != e
	}
	const Ha = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" },
		Cr = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" },
		V = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
		z = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" },
		Te = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" }
	class v {
		static getFirstMatch(e, t) {
			const r = t.match(e)
			return (r && r.length > 0 && r[1]) || ""
		}
		static getSecondMatch(e, t) {
			const r = t.match(e)
			return (r && r.length > 1 && r[2]) || ""
		}
		static matchAndReturnConst(e, t, r) {
			if (e.test(t)) return r
		}
		static getWindowsVersionName(e) {
			switch (e) {
				case "NT":
					return "NT"
				case "XP":
				case "NT 5.1":
					return "XP"
				case "NT 5.0":
					return "2000"
				case "NT 5.2":
					return "2003"
				case "NT 6.0":
					return "Vista"
				case "NT 6.1":
					return "7"
				case "NT 6.2":
					return "8"
				case "NT 6.3":
					return "8.1"
				case "NT 10.0":
					return "10"
				default:
					return
			}
		}
		static getMacOSVersionName(e) {
			const t = e
				.split(".")
				.splice(0, 2)
				.map((r) => parseInt(r, 10) || 0)
			if ((t.push(0), t[0] === 10))
				switch (t[1]) {
					case 5:
						return "Leopard"
					case 6:
						return "Snow Leopard"
					case 7:
						return "Lion"
					case 8:
						return "Mountain Lion"
					case 9:
						return "Mavericks"
					case 10:
						return "Yosemite"
					case 11:
						return "El Capitan"
					case 12:
						return "Sierra"
					case 13:
						return "High Sierra"
					case 14:
						return "Mojave"
					case 15:
						return "Catalina"
					default:
						return
				}
		}
		static getAndroidVersionName(e) {
			const t = e
				.split(".")
				.splice(0, 2)
				.map((r) => parseInt(r, 10) || 0)
			if ((t.push(0), !(t[0] === 1 && t[1] < 5))) return t[0] === 1 && t[1] < 6 ? "Cupcake" : t[0] === 1 && t[1] >= 6 ? "Donut" : t[0] === 2 && t[1] < 2 ? "Eclair" : t[0] === 2 && t[1] === 2 ? "Froyo" : t[0] === 2 && t[1] > 2 ? "Gingerbread" : t[0] === 3 ? "Honeycomb" : t[0] === 4 && t[1] < 1 ? "Ice Cream Sandwich" : t[0] === 4 && t[1] < 4 ? "Jelly Bean" : t[0] === 4 && t[1] >= 4 ? "KitKat" : t[0] === 5 ? "Lollipop" : t[0] === 6 ? "Marshmallow" : t[0] === 7 ? "Nougat" : t[0] === 8 ? "Oreo" : t[0] === 9 ? "Pie" : void 0
		}
		static getVersionPrecision(e) {
			return e.split(".").length
		}
		static compareVersions(e, t, r = !1) {
			const i = v.getVersionPrecision(e),
				a = v.getVersionPrecision(t)
			let s = Math.max(i, a),
				l = 0
			const u = v.map([e, t], (h) => {
				const p = s - v.getVersionPrecision(h),
					m = h + new Array(p + 1).join(".0")
				return v.map(m.split("."), (y) => new Array(20 - y.length).join("0") + y).reverse()
			})
			for (r && (l = s - Math.min(i, a)), s -= 1; s >= l; ) {
				if (u[0][s] > u[1][s]) return 1
				if (u[0][s] === u[1][s]) {
					if (s === l) return 0
					s -= 1
				} else if (u[0][s] < u[1][s]) return -1
			}
		}
		static map(e, t) {
			const r = []
			let i
			if (Array.prototype.map) return Array.prototype.map.call(e, t)
			for (i = 0; i < e.length; i += 1) r.push(t(e[i]))
			return r
		}
		static find(e, t) {
			let r, i
			if (Array.prototype.find) return Array.prototype.find.call(e, t)
			for (r = 0, i = e.length; r < i; r += 1) {
				const a = e[r]
				if (t(a, r)) return a
			}
		}
		static assign(e, ...t) {
			const r = e
			let i, a
			if (Object.assign) return Object.assign(e, ...t)
			for (i = 0, a = t.length; i < a; i += 1) {
				const s = t[i]
				typeof s == "object" &&
					s !== null &&
					Object.keys(s).forEach((l) => {
						r[l] = s[l]
					})
			}
			return e
		}
		static getBrowserAlias(e) {
			return Ha[e]
		}
		static getBrowserTypeByAlias(e) {
			return Cr[e] || ""
		}
	}
	const N = /version\/(\d+(\.?_?\d+)+)/i,
		Ka = [
			{
				test: [/googlebot/i],
				describe(n) {
					const e = { name: "Googlebot" },
						t = v.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/opera/i],
				describe(n) {
					const e = { name: "Opera" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/opr\/|opios/i],
				describe(n) {
					const e = { name: "Opera" },
						t = v.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/SamsungBrowser/i],
				describe(n) {
					const e = { name: "Samsung Internet for Android" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/Whale/i],
				describe(n) {
					const e = { name: "NAVER Whale Browser" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/MZBrowser/i],
				describe(n) {
					const e = { name: "MZ Browser" },
						t = v.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/focus/i],
				describe(n) {
					const e = { name: "Focus" },
						t = v.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/swing/i],
				describe(n) {
					const e = { name: "Swing" },
						t = v.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/coast/i],
				describe(n) {
					const e = { name: "Opera Coast" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/opt\/\d+(?:.?_?\d+)+/i],
				describe(n) {
					const e = { name: "Opera Touch" },
						t = v.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/yabrowser/i],
				describe(n) {
					const e = { name: "Yandex Browser" },
						t = v.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/ucbrowser/i],
				describe(n) {
					const e = { name: "UC Browser" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/Maxthon|mxios/i],
				describe(n) {
					const e = { name: "Maxthon" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/epiphany/i],
				describe(n) {
					const e = { name: "Epiphany" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/puffin/i],
				describe(n) {
					const e = { name: "Puffin" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/sleipnir/i],
				describe(n) {
					const e = { name: "Sleipnir" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/k-meleon/i],
				describe(n) {
					const e = { name: "K-Meleon" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/micromessenger/i],
				describe(n) {
					const e = { name: "WeChat" },
						t = v.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/qqbrowser/i],
				describe(n) {
					const e = { name: /qqbrowserlite/i.test(n) ? "QQ Browser Lite" : "QQ Browser" },
						t = v.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/msie|trident/i],
				describe(n) {
					const e = { name: "Internet Explorer" },
						t = v.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/\sedg\//i],
				describe(n) {
					const e = { name: "Microsoft Edge" },
						t = v.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/edg([ea]|ios)/i],
				describe(n) {
					const e = { name: "Microsoft Edge" },
						t = v.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/vivaldi/i],
				describe(n) {
					const e = { name: "Vivaldi" },
						t = v.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/seamonkey/i],
				describe(n) {
					const e = { name: "SeaMonkey" },
						t = v.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/sailfish/i],
				describe(n) {
					const e = { name: "Sailfish" },
						t = v.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/silk/i],
				describe(n) {
					const e = { name: "Amazon Silk" },
						t = v.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/phantom/i],
				describe(n) {
					const e = { name: "PhantomJS" },
						t = v.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/slimerjs/i],
				describe(n) {
					const e = { name: "SlimerJS" },
						t = v.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
				describe(n) {
					const e = { name: "BlackBerry" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/(web|hpw)[o0]s/i],
				describe(n) {
					const e = { name: "WebOS Browser" },
						t = v.getFirstMatch(N, n) || v.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/bada/i],
				describe(n) {
					const e = { name: "Bada" },
						t = v.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/tizen/i],
				describe(n) {
					const e = { name: "Tizen" },
						t = v.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/qupzilla/i],
				describe(n) {
					const e = { name: "QupZilla" },
						t = v.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/firefox|iceweasel|fxios/i],
				describe(n) {
					const e = { name: "Firefox" },
						t = v.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/electron/i],
				describe(n) {
					const e = { name: "Electron" },
						t = v.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/MiuiBrowser/i],
				describe(n) {
					const e = { name: "Miui" },
						t = v.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/chromium/i],
				describe(n) {
					const e = { name: "Chromium" },
						t = v.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, n) || v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/chrome|crios|crmo/i],
				describe(n) {
					const e = { name: "Chrome" },
						t = v.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/GSA/i],
				describe(n) {
					const e = { name: "Google Search" },
						t = v.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test(n) {
					const e = !n.test(/like android/i),
						t = n.test(/android/i)
					return e && t
				},
				describe(n) {
					const e = { name: "Android Browser" },
						t = v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/playstation 4/i],
				describe(n) {
					const e = { name: "PlayStation 4" },
						t = v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/safari|applewebkit/i],
				describe(n) {
					const e = { name: "Safari" },
						t = v.getFirstMatch(N, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/.*/i],
				describe(n) {
					const e = n.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /
					return { name: v.getFirstMatch(e, n), version: v.getSecondMatch(e, n) }
				},
			},
		]
	var Qa = [
			{
				test: [/Roku\/DVP/],
				describe(n) {
					const e = v.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, n)
					return { name: z.Roku, version: e }
				},
			},
			{
				test: [/windows phone/i],
				describe(n) {
					const e = v.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, n)
					return { name: z.WindowsPhone, version: e }
				},
			},
			{
				test: [/windows /i],
				describe(n) {
					const e = v.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, n),
						t = v.getWindowsVersionName(e)
					return { name: z.Windows, version: e, versionName: t }
				},
			},
			{
				test: [/Macintosh(.*?) FxiOS(.*?)\//],
				describe(n) {
					const e = { name: z.iOS },
						t = v.getSecondMatch(/(Version\/)(\d[\d.]+)/, n)
					return t && (e.version = t), e
				},
			},
			{
				test: [/macintosh/i],
				describe(n) {
					const e = v.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, n).replace(/[_\s]/g, "."),
						t = v.getMacOSVersionName(e),
						r = { name: z.MacOS, version: e }
					return t && (r.versionName = t), r
				},
			},
			{
				test: [/(ipod|iphone|ipad)/i],
				describe(n) {
					const e = v.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, n).replace(/[_\s]/g, ".")
					return { name: z.iOS, version: e }
				},
			},
			{
				test(n) {
					const e = !n.test(/like android/i),
						t = n.test(/android/i)
					return e && t
				},
				describe(n) {
					const e = v.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, n),
						t = v.getAndroidVersionName(e),
						r = { name: z.Android, version: e }
					return t && (r.versionName = t), r
				},
			},
			{
				test: [/(web|hpw)[o0]s/i],
				describe(n) {
					const e = v.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, n),
						t = { name: z.WebOS }
					return e && e.length && (t.version = e), t
				},
			},
			{
				test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
				describe(n) {
					const e = v.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, n) || v.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, n) || v.getFirstMatch(/\bbb(\d+)/i, n)
					return { name: z.BlackBerry, version: e }
				},
			},
			{
				test: [/bada/i],
				describe(n) {
					const e = v.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, n)
					return { name: z.Bada, version: e }
				},
			},
			{
				test: [/tizen/i],
				describe(n) {
					const e = v.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, n)
					return { name: z.Tizen, version: e }
				},
			},
			{ test: [/linux/i], describe: () => ({ name: z.Linux }) },
			{ test: [/CrOS/], describe: () => ({ name: z.ChromeOS }) },
			{
				test: [/PlayStation 4/],
				describe(n) {
					const e = v.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, n)
					return { name: z.PlayStation4, version: e }
				},
			},
		],
		Xa = [
			{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) },
			{
				test: [/huawei/i],
				describe(n) {
					const e = v.getFirstMatch(/(can-l01)/i, n) && "Nova",
						t = { type: V.mobile, vendor: "Huawei" }
					return e && (t.model = e), t
				},
			},
			{ test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: V.tablet, vendor: "Nexus" }) },
			{ test: [/ipad/i], describe: () => ({ type: V.tablet, vendor: "Apple", model: "iPad" }) },
			{ test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: V.tablet, vendor: "Apple", model: "iPad" }) },
			{ test: [/kftt build/i], describe: () => ({ type: V.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) },
			{ test: [/silk/i], describe: () => ({ type: V.tablet, vendor: "Amazon" }) },
			{ test: [/tablet(?! pc)/i], describe: () => ({ type: V.tablet }) },
			{
				test(n) {
					const e = n.test(/ipod|iphone/i),
						t = n.test(/like (ipod|iphone)/i)
					return e && !t
				},
				describe(n) {
					const e = v.getFirstMatch(/(ipod|iphone)/i, n)
					return { type: V.mobile, vendor: "Apple", model: e }
				},
			},
			{ test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: V.mobile, vendor: "Nexus" }) },
			{ test: [/[^-]mobi/i], describe: () => ({ type: V.mobile }) },
			{ test: (n) => n.getBrowserName(!0) === "blackberry", describe: () => ({ type: V.mobile, vendor: "BlackBerry" }) },
			{ test: (n) => n.getBrowserName(!0) === "bada", describe: () => ({ type: V.mobile }) },
			{ test: (n) => n.getBrowserName() === "windows phone", describe: () => ({ type: V.mobile, vendor: "Microsoft" }) },
			{
				test(n) {
					const e = Number(String(n.getOSVersion()).split(".")[0])
					return n.getOSName(!0) === "android" && e >= 3
				},
				describe: () => ({ type: V.tablet }),
			},
			{ test: (n) => n.getOSName(!0) === "android", describe: () => ({ type: V.mobile }) },
			{ test: (n) => n.getOSName(!0) === "macos", describe: () => ({ type: V.desktop, vendor: "Apple" }) },
			{ test: (n) => n.getOSName(!0) === "windows", describe: () => ({ type: V.desktop }) },
			{ test: (n) => n.getOSName(!0) === "linux", describe: () => ({ type: V.desktop }) },
			{ test: (n) => n.getOSName(!0) === "playstation 4", describe: () => ({ type: V.tv }) },
			{ test: (n) => n.getOSName(!0) === "roku", describe: () => ({ type: V.tv }) },
		],
		Za = [
			{
				test: (n) => n.getBrowserName(!0) === "microsoft edge",
				describe(n) {
					if (/\sedg\//i.test(n)) return { name: Te.Blink }
					const e = v.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, n)
					return { name: Te.EdgeHTML, version: e }
				},
			},
			{
				test: [/trident/i],
				describe(n) {
					const e = { name: Te.Trident },
						t = v.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test: (n) => n.test(/presto/i),
				describe(n) {
					const e = { name: Te.Presto },
						t = v.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{
				test(n) {
					const e = n.test(/gecko/i),
						t = n.test(/like gecko/i)
					return e && !t
				},
				describe(n) {
					const e = { name: Te.Gecko },
						t = v.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
			{ test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Te.Blink }) },
			{
				test: [/(apple)?webkit/i],
				describe(n) {
					const e = { name: Te.WebKit },
						t = v.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, n)
					return t && (e.version = t), e
				},
			},
		]
	class Mr {
		constructor(e, t = !1) {
			if (e == null || e === "") throw new Error("UserAgent parameter can't be empty")
			;(this._ua = e), (this.parsedResult = {}), t !== !0 && this.parse()
		}
		getUA() {
			return this._ua
		}
		test(e) {
			return e.test(this._ua)
		}
		parseBrowser() {
			this.parsedResult.browser = {}
			const e = v.find(Ka, (t) => {
				if (typeof t.test == "function") return t.test(this)
				if (t.test instanceof Array) return t.test.some((r) => this.test(r))
				throw new Error("Browser's test function is not valid")
			})
			return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
		}
		getBrowser() {
			return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
		}
		getBrowserName(e) {
			return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
		}
		getBrowserVersion() {
			return this.getBrowser().version
		}
		getOS() {
			return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
		}
		parseOS() {
			this.parsedResult.os = {}
			const e = v.find(Qa, (t) => {
				if (typeof t.test == "function") return t.test(this)
				if (t.test instanceof Array) return t.test.some((r) => this.test(r))
				throw new Error("Browser's test function is not valid")
			})
			return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
		}
		getOSName(e) {
			const { name: t } = this.getOS()
			return e ? String(t).toLowerCase() || "" : t || ""
		}
		getOSVersion() {
			return this.getOS().version
		}
		getPlatform() {
			return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
		}
		getPlatformType(e = !1) {
			const { type: t } = this.getPlatform()
			return e ? String(t).toLowerCase() || "" : t || ""
		}
		parsePlatform() {
			this.parsedResult.platform = {}
			const e = v.find(Xa, (t) => {
				if (typeof t.test == "function") return t.test(this)
				if (t.test instanceof Array) return t.test.some((r) => this.test(r))
				throw new Error("Browser's test function is not valid")
			})
			return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
		}
		getEngine() {
			return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
		}
		getEngineName(e) {
			return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
		}
		parseEngine() {
			this.parsedResult.engine = {}
			const e = v.find(Za, (t) => {
				if (typeof t.test == "function") return t.test(this)
				if (t.test instanceof Array) return t.test.some((r) => this.test(r))
				throw new Error("Browser's test function is not valid")
			})
			return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
		}
		parse() {
			return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
		}
		getResult() {
			return v.assign({}, this.parsedResult)
		}
		satisfies(e) {
			const t = {}
			let r = 0
			const i = {}
			let a = 0
			if (
				(Object.keys(e).forEach((s) => {
					const l = e[s]
					typeof l == "string" ? ((i[s] = l), (a += 1)) : typeof l == "object" && ((t[s] = l), (r += 1))
				}),
				r > 0)
			) {
				const s = Object.keys(t),
					l = v.find(s, (h) => this.isOS(h))
				if (l) {
					const h = this.satisfies(t[l])
					if (h !== void 0) return h
				}
				const u = v.find(s, (h) => this.isPlatform(h))
				if (u) {
					const h = this.satisfies(t[u])
					if (h !== void 0) return h
				}
			}
			if (a > 0) {
				const s = Object.keys(i),
					l = v.find(s, (u) => this.isBrowser(u, !0))
				if (l !== void 0) return this.compareVersion(i[l])
			}
		}
		isBrowser(e, t = !1) {
			const r = this.getBrowserName().toLowerCase()
			let i = e.toLowerCase()
			const a = v.getBrowserTypeByAlias(i)
			return t && a && (i = a.toLowerCase()), i === r
		}
		compareVersion(e) {
			let t = [0],
				r = e,
				i = !1
			const a = this.getBrowserVersion()
			if (typeof a == "string") return e[0] === ">" || e[0] === "<" ? ((r = e.substr(1)), e[1] === "=" ? ((i = !0), (r = e.substr(2))) : (t = []), e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? (r = e.substr(1)) : e[0] === "~" && ((i = !0), (r = e.substr(1))), t.indexOf(v.compareVersions(a, r, i)) > -1
		}
		isOS(e) {
			return this.getOSName(!0) === String(e).toLowerCase()
		}
		isPlatform(e) {
			return this.getPlatformType(!0) === String(e).toLowerCase()
		}
		isEngine(e) {
			return this.getEngineName(!0) === String(e).toLowerCase()
		}
		is(e, t = !1) {
			return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
		}
		some(e = []) {
			return e.some((t) => this.is(t))
		}
	}
	/*!
	 * Bowser - a browser detector
	 * https://github.com/lancedikson/bowser
	 * MIT License | (c) Dustin Diaz 2012-2015
	 * MIT License | (c) Denis Demchenko 2015-2019
	 */ class es {
		static getParser(e, t = !1) {
			if (typeof e != "string") throw new Error("UserAgent should be a string")
			return new Mr(e, t)
		}
		static parse(e) {
			return new Mr(e).getResult()
		}
		static get BROWSER_MAP() {
			return Cr
		}
		static get ENGINE_MAP() {
			return Te
		}
		static get OS_MAP() {
			return z
		}
		static get PLATFORMS_MAP() {
			return V
		}
	}
	function At() {
		return Date.now() + Math.random().toString()
	}
	function lt() {
		throw new Error("Method must be implemented in subclass")
	}
	function Ar(n) {
		return window._dailyConfig && window._dailyConfig.proxyUrl ? window._dailyConfig.proxyUrl + (window._dailyConfig.proxyUrl.slice(-1) === "/" ? "" : "/") + n.substring(8) : n
	}
	function Ot() {
		return window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride ? window._dailyConfig.callObjectBundleUrlOverride : Ar("https://c.daily.co/call-machine/versioned/".concat("0.58.0", "/static/call-machine-object-bundle.js"))
	}
	function ut(n) {
		try {
			new URL(n)
		} catch {
			return !1
		}
		return !0
	}
	const Or = Object.prototype.toString
	function Lr(n) {
		switch (Or.call(n)) {
			case "[object Error]":
			case "[object Exception]":
			case "[object DOMException]":
				return !0
			default:
				return xe(n, Error)
		}
	}
	function We(n, e) {
		return Or.call(n) === `[object ${e}]`
	}
	function un(n) {
		return We(n, "ErrorEvent")
	}
	function Pr(n) {
		return We(n, "DOMError")
	}
	function Re(n) {
		return We(n, "String")
	}
	function Dr(n) {
		return n === null || (typeof n != "object" && typeof n != "function")
	}
	function ze(n) {
		return We(n, "Object")
	}
	function Lt(n) {
		return typeof Event < "u" && xe(n, Event)
	}
	function dn(n) {
		return !!(n && n.then && typeof n.then == "function")
	}
	function xe(n, e) {
		try {
			return n instanceof e
		} catch {
			return !1
		}
	}
	function He(n, e = 0) {
		return typeof n != "string" || e === 0 || n.length <= e ? n : `${n.slice(0, e)}...`
	}
	function Ir(n, e) {
		if (!Array.isArray(n)) return ""
		const t = []
		for (let r = 0; r < n.length; r++) {
			const i = n[r]
			try {
				t.push(String(i))
			} catch {
				t.push("[value cannot be serialized]")
			}
		}
		return t.join(e)
	}
	function ts(n, e, t = !1) {
		return !!Re(n) && (We(e, "RegExp") ? e.test(n) : !!Re(e) && (t ? n === e : n.includes(e)))
	}
	function Pt(n, e = [], t = !1) {
		return e.some((r) => ts(n, r, t))
	}
	function ns(n, e, t = 250, r, i, a, s) {
		if (!(a.exception && a.exception.values && s && xe(s.originalException, Error))) return
		const l = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0
		var u, h
		l && (a.exception.values = ((u = hn(n, e, i, s.originalException, r, a.exception.values, l, 0)), (h = t), u.map((p) => (p.value && (p.value = He(p.value, h)), p))))
	}
	function hn(n, e, t, r, i, a, s, l) {
		if (a.length >= t + 1) return a
		let u = [...a]
		if (xe(r[i], Error)) {
			Nr(s, l)
			const h = n(e, r[i]),
				p = u.length
			Rr(h, i, p, l), (u = hn(n, e, t, r[i], i, [h, ...u], h, p))
		}
		return (
			Array.isArray(r.errors) &&
				r.errors.forEach((h, p) => {
					if (xe(h, Error)) {
						Nr(s, l)
						const m = n(e, h),
							y = u.length
						Rr(m, `errors[${p}]`, y, l), (u = hn(n, e, t, h, i, [m, ...u], m, y))
					}
				}),
			u
		)
	}
	function Nr(n, e) {
		;(n.mechanism = n.mechanism || { type: "generic", handled: !0 }), (n.mechanism = { ...n.mechanism, is_exception_group: !0, exception_id: e })
	}
	function Rr(n, e, t, r) {
		;(n.mechanism = n.mechanism || { type: "generic", handled: !0 }), (n.mechanism = { ...n.mechanism, type: "chained", source: e, exception_id: t, parent_id: r })
	}
	function Dt(n) {
		return n && n.Math == Math ? n : void 0
	}
	const ne =
		(typeof globalThis == "object" && Dt(globalThis)) ||
		(typeof window == "object" && Dt(window)) ||
		(typeof self == "object" && Dt(self)) ||
		(typeof global == "object" && Dt(global)) ||
		(function () {
			return this
		})() ||
		{}
	function dt() {
		return ne
	}
	function pn(n, e, t) {
		const r = t || ne,
			i = (r.__SENTRY__ = r.__SENTRY__ || {})
		return i[n] || (i[n] = e())
	}
	const rs = dt(),
		is = 80
	function fn(n, e = {}) {
		try {
			let t = n
			const r = 5,
				i = []
			let a = 0,
				s = 0
			const l = " > ",
				u = l.length
			let h
			const p = Array.isArray(e) ? e : e.keyAttrs,
				m = (!Array.isArray(e) && e.maxStringLength) || is
			for (; t && a++ < r && ((h = os(t, p)), !(h === "html" || (a > 1 && s + i.length * u + h.length >= m))); ) i.push(h), (s += h.length), (t = t.parentNode)
			return i.reverse().join(l)
		} catch {
			return "<unknown>"
		}
	}
	function os(n, e) {
		const t = n,
			r = []
		let i, a, s, l, u
		if (!t || !t.tagName) return ""
		r.push(t.tagName.toLowerCase())
		const h = e && e.length ? e.filter((m) => t.getAttribute(m)).map((m) => [m, t.getAttribute(m)]) : null
		if (h && h.length)
			h.forEach((m) => {
				r.push(`[${m[0]}="${m[1]}"]`)
			})
		else if ((t.id && r.push(`#${t.id}`), (i = t.className), i && Re(i))) for (a = i.split(/\s+/), u = 0; u < a.length; u++) r.push(`.${a[u]}`)
		const p = ["aria-label", "type", "name", "title", "alt"]
		for (u = 0; u < p.length; u++) (s = p[u]), (l = t.getAttribute(s)), l && r.push(`[${s}="${l}"]`)
		return r.join("")
	}
	const It = ["debug", "info", "warn", "error", "log", "assert", "trace"]
	function xr(n) {
		if (!("console" in ne)) return n()
		const e = ne.console,
			t = {}
		It.forEach((r) => {
			const i = e[r] && e[r].__sentry_original__
			r in e && i && ((t[r] = e[r]), (e[r] = i))
		})
		try {
			return n()
		} finally {
			Object.keys(t).forEach((r) => {
				e[r] = t[r]
			})
		}
	}
	function jr() {
		let n = !1
		const e = {
			enable: () => {
				n = !0
			},
			disable: () => {
				n = !1
			},
		}
		return (
			typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
				? It.forEach((t) => {
						e[t] = (...r) => {
							n &&
								xr(() => {
									ne.console[t](`Sentry Logger [${t}]:`, ...r)
								})
						}
				  })
				: It.forEach((t) => {
						e[t] = () => {}
				  }),
			e
		)
	}
	let O
	O = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? pn("logger", jr) : jr()
	const as = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
	function Nt(n, e = !1) {
		const { host: t, path: r, pass: i, port: a, projectId: s, protocol: l, publicKey: u } = n
		return `${l}://${u}${e && i ? `:${i}` : ""}@${t}${a ? `:${a}` : ""}/${r && `${r}/`}${s}`
	}
	function Fr(n) {
		return { protocol: n.protocol, publicKey: n.publicKey || "", pass: n.pass || "", host: n.host, port: n.port || "", path: n.path || "", projectId: n.projectId }
	}
	function ss(n) {
		const e =
			typeof n == "string"
				? (function (t) {
						const r = as.exec(t)
						if (!r) return void console.error(`Invalid Sentry Dsn: ${t}`)
						const [i, a, s = "", l, u = "", h] = r.slice(1)
						let p = "",
							m = h
						const y = m.split("/")
						if ((y.length > 1 && ((p = y.slice(0, -1).join("/")), (m = y.pop())), m)) {
							const S = m.match(/^\d+/)
							S && (m = S[0])
						}
						return Fr({ host: l, pass: s, path: p, projectId: m, port: u, protocol: i, publicKey: a })
				  })(n)
				: Fr(n)
		if (
			e &&
			(function (t) {
				if (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) return !0
				const { port: r, projectId: i, protocol: a } = t
				return !(
					["protocol", "publicKey", "host", "projectId"].find((s) => !t[s] && (O.error(`Invalid Sentry Dsn: ${s} missing`), !0)) ||
					(i.match(/^\d+$/)
						? (function (s) {
								return s === "http" || s === "https"
						  })(a)
							? r && isNaN(parseInt(r, 10)) && (O.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1)
							: (O.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), 1)
						: (O.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1))
				)
			})(e)
		)
			return e
	}
	class le extends Error {
		constructor(e, t = "warn") {
			super(e), (this.message = e), (this.name = new.target.prototype.constructor.name), Object.setPrototypeOf(this, new.target.prototype), (this.logLevel = t)
		}
	}
	function W(n, e, t) {
		if (!(e in n)) return
		const r = n[e],
			i = t(r)
		if (typeof i == "function")
			try {
				Ur(i, r)
			} catch {}
		n[e] = i
	}
	function mn(n, e, t) {
		Object.defineProperty(n, e, { value: t, writable: !0, configurable: !0 })
	}
	function Ur(n, e) {
		const t = e.prototype || {}
		;(n.prototype = e.prototype = t), mn(n, "__sentry_original__", e)
	}
	function gn(n) {
		return n.__sentry_original__
	}
	function Br(n) {
		if (Lr(n)) return { message: n.message, name: n.name, stack: n.stack, ...Yr(n) }
		if (Lt(n)) {
			const e = { type: n.type, target: Vr(n.target), currentTarget: Vr(n.currentTarget), ...Yr(n) }
			return typeof CustomEvent < "u" && xe(n, CustomEvent) && (e.detail = n.detail), e
		}
		return n
	}
	function Vr(n) {
		try {
			return (e = n), typeof Element < "u" && xe(e, Element) ? fn(n) : Object.prototype.toString.call(n)
		} catch {
			return "<unknown>"
		}
		var e
	}
	function Yr(n) {
		if (typeof n == "object" && n !== null) {
			const e = {}
			for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
			return e
		}
		return {}
	}
	function Rt(n) {
		return vn(n, new Map())
	}
	function vn(n, e) {
		if (ze(n)) {
			const t = e.get(n)
			if (t !== void 0) return t
			const r = {}
			e.set(n, r)
			for (const i of Object.keys(n)) n[i] !== void 0 && (r[i] = vn(n[i], e))
			return r
		}
		if (Array.isArray(n)) {
			const t = e.get(n)
			if (t !== void 0) return t
			const r = []
			return (
				e.set(n, r),
				n.forEach((i) => {
					r.push(vn(i, e))
				}),
				r
			)
		}
		return n
	}
	const $r = "<anonymous>"
	function Ce(n) {
		try {
			return (n && typeof n == "function" && n.name) || $r
		} catch {
			return $r
		}
	}
	const _n = dt()
	function yn(n) {
		return n && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())
	}
	function cs() {
		if (
			!(function () {
				if (!("fetch" in _n)) return !1
				try {
					return new Headers(), new Request("http://www.example.com"), new Response(), !0
				} catch {
					return !1
				}
			})()
		)
			return !1
		if (yn(_n.fetch)) return !0
		let n = !1
		const e = _n.document
		if (e && typeof e.createElement == "function")
			try {
				const t = e.createElement("iframe")
				;(t.hidden = !0), e.head.appendChild(t), t.contentWindow && t.contentWindow.fetch && (n = yn(t.contentWindow.fetch)), e.head.removeChild(t)
			} catch (t) {
				;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
			}
		return n
	}
	const xt = dt(),
		U = dt(),
		ht = "__sentry_xhr_v2__",
		pt = {},
		Gr = {}
	function ls(n) {
		if (!Gr[n])
			switch (((Gr[n] = !0), n)) {
				case "console":
					;(function () {
						"console" in U &&
							It.forEach(function (e) {
								e in U.console &&
									W(U.console, e, function (t) {
										return function (...r) {
											ue("console", { args: r, level: e }), t && t.apply(U.console, r)
										}
									})
							})
					})()
					break
				case "dom":
					;(function () {
						if (!("document" in U)) return
						const e = ue.bind(null, "dom"),
							t = Jr(e, !0)
						U.document.addEventListener("click", t, !1),
							U.document.addEventListener("keypress", t, !1),
							["EventTarget", "Node"].forEach((r) => {
								const i = U[r] && U[r].prototype
								i &&
									i.hasOwnProperty &&
									i.hasOwnProperty("addEventListener") &&
									(W(i, "addEventListener", function (a) {
										return function (s, l, u) {
											if (s === "click" || s == "keypress")
												try {
													const h = this,
														p = (h.__sentry_instrumentation_handlers__ = h.__sentry_instrumentation_handlers__ || {}),
														m = (p[s] = p[s] || { refCount: 0 })
													if (!m.handler) {
														const y = Jr(e)
														;(m.handler = y), a.call(this, s, y, u)
													}
													m.refCount++
												} catch {}
											return a.call(this, s, l, u)
										}
									}),
									W(i, "removeEventListener", function (a) {
										return function (s, l, u) {
											if (s === "click" || s == "keypress")
												try {
													const h = this,
														p = h.__sentry_instrumentation_handlers__ || {},
														m = p[s]
													m && (m.refCount--, m.refCount <= 0 && (a.call(this, s, m.handler, u), (m.handler = void 0), delete p[s]), Object.keys(p).length === 0 && delete h.__sentry_instrumentation_handlers__)
												} catch {}
											return a.call(this, s, l, u)
										}
									}))
							})
					})()
					break
				case "xhr":
					;(function () {
						if (!("XMLHttpRequest" in U)) return
						const e = XMLHttpRequest.prototype
						W(e, "open", function (t) {
							return function (...r) {
								const i = r[1],
									a = (this[ht] = { method: Re(r[0]) ? r[0].toUpperCase() : r[0], url: r[1], request_headers: {} })
								Re(i) && a.method === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0)
								const s = () => {
									const l = this[ht]
									if (l && this.readyState === 4) {
										try {
											l.status_code = this.status
										} catch {}
										ue("xhr", { args: r, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this })
									}
								}
								return (
									"onreadystatechange" in this && typeof this.onreadystatechange == "function"
										? W(this, "onreadystatechange", function (l) {
												return function (...u) {
													return s(), l.apply(this, u)
												}
										  })
										: this.addEventListener("readystatechange", s),
									W(this, "setRequestHeader", function (l) {
										return function (...u) {
											const [h, p] = u,
												m = this[ht]
											return m && (m.request_headers[h.toLowerCase()] = p), l.apply(this, u)
										}
									}),
									t.apply(this, r)
								)
							}
						}),
							W(e, "send", function (t) {
								return function (...r) {
									const i = this[ht]
									return i && r[0] !== void 0 && (i.body = r[0]), ue("xhr", { args: r, startTimestamp: Date.now(), xhr: this }), t.apply(this, r)
								}
							})
					})()
					break
				case "fetch":
					;(function () {
						cs() &&
							W(U, "fetch", function (e) {
								return function (...t) {
									const { method: r, url: i } = (function (s) {
											if (s.length === 0) return { method: "GET", url: "" }
											if (s.length === 2) {
												const [u, h] = s
												return { url: qr(u), method: bn(h, "method") ? String(h.method).toUpperCase() : "GET" }
											}
											const l = s[0]
											return { url: qr(l), method: bn(l, "method") ? String(l.method).toUpperCase() : "GET" }
										})(t),
										a = { args: t, fetchData: { method: r, url: i }, startTimestamp: Date.now() }
									return (
										ue("fetch", { ...a }),
										e.apply(U, t).then(
											(s) => (ue("fetch", { ...a, endTimestamp: Date.now(), response: s }), s),
											(s) => {
												throw (ue("fetch", { ...a, endTimestamp: Date.now(), error: s }), s)
											}
										)
									)
								}
							})
					})()
					break
				case "history":
					;(function () {
						if (
							!(function () {
								const r = xt.chrome,
									i = r && r.app && r.app.runtime,
									a = "history" in xt && !!xt.history.pushState && !!xt.history.replaceState
								return !i && a
							})()
						)
							return
						const e = U.onpopstate
						function t(r) {
							return function (...i) {
								const a = i.length > 2 ? i[2] : void 0
								if (a) {
									const s = jt,
										l = String(a)
									;(jt = l), ue("history", { from: s, to: l })
								}
								return r.apply(this, i)
							}
						}
						;(U.onpopstate = function (...r) {
							const i = U.location.href,
								a = jt
							if (((jt = i), ue("history", { from: a, to: i }), e))
								try {
									return e.apply(this, r)
								} catch {}
						}),
							W(U.history, "pushState", t),
							W(U.history, "replaceState", t)
					})()
					break
				case "error":
					;(Ut = U.onerror),
						(U.onerror = function (e, t, r, i, a) {
							return ue("error", { column: i, error: a, line: r, msg: e, url: t }), !(!Ut || Ut.__SENTRY_LOADER__) && Ut.apply(this, arguments)
						}),
						(U.onerror.__SENTRY_INSTRUMENTED__ = !0)
					break
				case "unhandledrejection":
					;(Bt = U.onunhandledrejection),
						(U.onunhandledrejection = function (e) {
							return ue("unhandledrejection", e), !(Bt && !Bt.__SENTRY_LOADER__) || Bt.apply(this, arguments)
						}),
						(U.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0)
					break
				default:
					return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("unknown instrumentation type:", n))
			}
	}
	function je(n, e) {
		;(pt[n] = pt[n] || []), pt[n].push(e), ls(n)
	}
	function ue(n, e) {
		if (n && pt[n])
			for (const t of pt[n] || [])
				try {
					t(e)
				} catch (r) {
					;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
						O.error(
							`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Ce(t)}
Error:`,
							r
						)
				}
	}
	function bn(n, e) {
		return !!n && typeof n == "object" && !!n[e]
	}
	function qr(n) {
		return typeof n == "string" ? n : n ? (bn(n, "url") ? n.url : n.toString ? n.toString() : "") : ""
	}
	let jt
	const us = 1e3
	let Ft, wn
	function Jr(n, e = !1) {
		return (t) => {
			if (
				!t ||
				wn === t ||
				(function (i) {
					if (i.type !== "keypress") return !1
					try {
						const a = i.target
						if (!a || !a.tagName) return !0
						if (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable) return !1
					} catch {}
					return !0
				})(t)
			)
				return
			const r = t.type === "keypress" ? "input" : t.type
			;(Ft === void 0 ||
				(function (i, a) {
					if (!i || i.type !== a.type) return !0
					try {
						if (i.target !== a.target) return !0
					} catch {}
					return !1
				})(wn, t)) &&
				(n({ event: t, name: r, global: e }), (wn = t)),
				clearTimeout(Ft),
				(Ft = U.setTimeout(() => {
					Ft = void 0
				}, us))
		}
	}
	let Ut = null,
		Bt = null
	function Me() {
		const n = ne,
			e = n.crypto || n.msCrypto
		if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "")
		const t = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random()
		return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ ((15 & t()) >> (r / 4))).toString(16))
	}
	function Wr(n) {
		return n.exception && n.exception.values ? n.exception.values[0] : void 0
	}
	function Ae(n) {
		const { message: e, event_id: t } = n
		if (e) return e
		const r = Wr(n)
		return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || t || "<unknown>") : t || "<unknown>"
	}
	function Sn(n, e, t) {
		const r = (n.exception = n.exception || {}),
			i = (r.values = r.values || []),
			a = (i[0] = i[0] || {})
		a.value || (a.value = e || ""), a.type || (a.type = t || "Error")
	}
	function ft(n, e) {
		const t = Wr(n)
		if (!t) return
		const r = t.mechanism
		if (((t.mechanism = { type: "generic", handled: !0, ...r, ...e }), e && "data" in e)) {
			const i = { ...(r && r.data), ...e.data }
			t.mechanism.data = i
		}
	}
	function zr(n) {
		if (n && n.__sentry_captured__) return !0
		try {
			mn(n, "__sentry_captured__", !0)
		} catch {}
		return !1
	}
	function Oe(n, e = 100, t = 1 / 0) {
		try {
			return En("", n, e, t)
		} catch (r) {
			return { ERROR: `**non-serializable** (${r})` }
		}
	}
	function Hr(n, e = 3, t = 102400) {
		const r = Oe(n, e)
		return (
			(i = r),
			(function (a) {
				return ~-encodeURI(a).split(/%..|./).length
			})(JSON.stringify(i)) > t
				? Hr(n, e - 1, t)
				: r
		)
		var i
	}
	function En(
		n,
		e,
		t = 1 / 0,
		r = 1 / 0,
		i = (function () {
			const a = typeof WeakSet == "function",
				s = a ? new WeakSet() : []
			return [
				function (l) {
					if (a) return !!s.has(l) || (s.add(l), !1)
					for (let u = 0; u < s.length; u++) if (s[u] === l) return !0
					return s.push(l), !1
				},
				function (l) {
					if (a) s.delete(l)
					else
						for (let u = 0; u < s.length; u++)
							if (s[u] === l) {
								s.splice(u, 1)
								break
							}
				},
			]
		})()
	) {
		const [a, s] = i
		if (e == null || (["number", "boolean", "string"].includes(typeof e) && (typeof (l = e) != "number" || l == l))) return e
		var l
		const u = (function (b, w) {
			try {
				if (b === "domain" && w && typeof w == "object" && w._events) return "[Domain]"
				if (b === "domainEmitter") return "[DomainEmitter]"
				if (typeof global < "u" && w === global) return "[Global]"
				if (typeof window < "u" && w === window) return "[Window]"
				if (typeof document < "u" && w === document) return "[Document]"
				if (
					(function (L) {
						return ze(L) && "nativeEvent" in L && "preventDefault" in L && "stopPropagation" in L
					})(w)
				)
					return "[SyntheticEvent]"
				if (typeof w == "number" && w != w) return "[NaN]"
				if (typeof w == "function") return `[Function: ${Ce(w)}]`
				if (typeof w == "symbol") return `[${String(w)}]`
				if (typeof w == "bigint") return `[BigInt: ${String(w)}]`
				const T = (function (L) {
					const Y = Object.getPrototypeOf(L)
					return Y ? Y.constructor.name : "null prototype"
				})(w)
				return /^HTML(\w*)Element$/.test(T) ? `[HTMLElement: ${T}]` : `[object ${T}]`
			} catch (T) {
				return `**non-serializable** (${T})`
			}
		})(n, e)
		if (!u.startsWith("[object ")) return u
		if (e.__sentry_skip_normalization__) return e
		const h = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : t
		if (h === 0) return u.replace("object ", "")
		if (a(e)) return "[Circular ~]"
		const p = e
		if (p && typeof p.toJSON == "function")
			try {
				return En("", p.toJSON(), h - 1, r, i)
			} catch {}
		const m = Array.isArray(e) ? [] : {}
		let y = 0
		const S = Br(e)
		for (const b in S) {
			if (!Object.prototype.hasOwnProperty.call(S, b)) continue
			if (y >= r) {
				m[b] = "[MaxProperties ~]"
				break
			}
			const w = S[b]
			;(m[b] = En(b, w, h - 1, r, i)), y++
		}
		return s(e), m
	}
	var be
	function Fe(n) {
		return new Z((e) => {
			e(n)
		})
	}
	function Vt(n) {
		return new Z((e, t) => {
			t(n)
		})
	}
	;(function (n) {
		;(n[(n.PENDING = 0)] = "PENDING"), (n[(n.RESOLVED = 1)] = "RESOLVED"), (n[(n.REJECTED = 2)] = "REJECTED")
	})(be || (be = {}))
	class Z {
		__init() {
			this._state = be.PENDING
		}
		__init2() {
			this._handlers = []
		}
		constructor(e) {
			Z.prototype.__init.call(this), Z.prototype.__init2.call(this), Z.prototype.__init3.call(this), Z.prototype.__init4.call(this), Z.prototype.__init5.call(this), Z.prototype.__init6.call(this)
			try {
				e(this._resolve, this._reject)
			} catch (t) {
				this._reject(t)
			}
		}
		then(e, t) {
			return new Z((r, i) => {
				this._handlers.push([
					!1,
					(a) => {
						if (e)
							try {
								r(e(a))
							} catch (s) {
								i(s)
							}
						else r(a)
					},
					(a) => {
						if (t)
							try {
								r(t(a))
							} catch (s) {
								i(s)
							}
						else i(a)
					},
				]),
					this._executeHandlers()
			})
		}
		catch(e) {
			return this.then((t) => t, e)
		}
		finally(e) {
			return new Z((t, r) => {
				let i, a
				return this.then(
					(s) => {
						;(a = !1), (i = s), e && e()
					},
					(s) => {
						;(a = !0), (i = s), e && e()
					}
				).then(() => {
					a ? r(i) : t(i)
				})
			})
		}
		__init3() {
			this._resolve = (e) => {
				this._setResult(be.RESOLVED, e)
			}
		}
		__init4() {
			this._reject = (e) => {
				this._setResult(be.REJECTED, e)
			}
		}
		__init5() {
			this._setResult = (e, t) => {
				this._state === be.PENDING && (dn(t) ? t.then(this._resolve, this._reject) : ((this._state = e), (this._value = t), this._executeHandlers()))
			}
		}
		__init6() {
			this._executeHandlers = () => {
				if (this._state === be.PENDING) return
				const e = this._handlers.slice()
				;(this._handlers = []),
					e.forEach((t) => {
						t[0] || (this._state === be.RESOLVED && t[1](this._value), this._state === be.REJECTED && t[2](this._value), (t[0] = !0))
					})
			}
		}
	}
	function ds(n) {
		const e = []
		function t(r) {
			return e.splice(e.indexOf(r), 1)[0]
		}
		return {
			$: e,
			add: function (r) {
				if (!(n === void 0 || e.length < n)) return Vt(new le("Not adding Promise because buffer limit was reached."))
				const i = r()
				return e.indexOf(i) === -1 && e.push(i), i.then(() => t(i)).then(null, () => t(i).then(null, () => {})), i
			},
			drain: function (r) {
				return new Z((i, a) => {
					let s = e.length
					if (!s) return i(!0)
					const l = setTimeout(() => {
						r && r > 0 && i(!1)
					}, r)
					e.forEach((u) => {
						Fe(u).then(() => {
							--s || (clearTimeout(l), i(!0))
						}, a)
					})
				})
			},
		}
	}
	function kn(n) {
		if (!n) return {}
		const e = n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
		if (!e) return {}
		const t = e[6] || "",
			r = e[8] || ""
		return { host: e[4], path: e[5], protocol: e[2], search: t, hash: r, relative: e[5] + t + r }
	}
	const hs = ["fatal", "error", "warning", "log", "info", "debug"],
		Kr = dt(),
		Tn = { nowSeconds: () => Date.now() / 1e3 },
		Cn =
			(typeof __SENTRY_BROWSER_BUNDLE__ < "u" && __SENTRY_BROWSER_BUNDLE__) || Object.prototype.toString.call(typeof process < "u" ? process : 0) !== "[object process]"
				? (function () {
						const { performance: n } = Kr
						if (!(!n || !n.now)) return { now: () => n.now(), timeOrigin: Date.now() - n.now() }
				  })()
				: (function () {
						try {
							return ((n = module), (e = "perf_hooks"), n.require(e)).performance
						} catch {
							return
						}
						var n, e
				  })(),
		Qr = Cn === void 0 ? Tn : { nowSeconds: () => (Cn.timeOrigin + Cn.now()) / 1e3 },
		Yt = Tn.nowSeconds.bind(Tn),
		Xr = Qr.nowSeconds.bind(Qr)
	function mt(n, e = []) {
		return [n, e]
	}
	function ps(n, e) {
		const [t, r] = n
		return [t, [...r, e]]
	}
	function Zr(n, e) {
		const t = n[1]
		for (const r of t) if (e(r, r[0].type)) return !0
		return !1
	}
	function Mn(n, e) {
		return (e || new TextEncoder()).encode(n)
	}
	function fs(n, e) {
		const [t, r] = n
		let i = JSON.stringify(t)
		function a(s) {
			typeof i == "string" ? (i = typeof s == "string" ? i + s : [Mn(i, e), s]) : i.push(typeof s == "string" ? Mn(s, e) : s)
		}
		for (const s of r) {
			const [l, u] = s
			if (
				(a(`
${JSON.stringify(l)}
`),
				typeof u == "string" || u instanceof Uint8Array)
			)
				a(u)
			else {
				let h
				try {
					h = JSON.stringify(u)
				} catch {
					h = JSON.stringify(Oe(u))
				}
				a(h)
			}
		}
		return typeof i == "string"
			? i
			: (function (s) {
					const l = s.reduce((p, m) => p + m.length, 0),
						u = new Uint8Array(l)
					let h = 0
					for (const p of s) u.set(p, h), (h += p.length)
					return u
			  })(i)
	}
	function ms(n, e) {
		const t = typeof n.data == "string" ? Mn(n.data, e) : n.data
		return [Rt({ type: "attachment", length: t.length, filename: n.filename, content_type: n.contentType, attachment_type: n.attachmentType }), t]
	}
	;(() => {
		const { performance: n } = Kr
		if (!n || !n.now) return
		const e = 36e5,
			t = n.now(),
			r = Date.now(),
			i = n.timeOrigin ? Math.abs(n.timeOrigin + t - r) : e,
			a = i < e,
			s = n.timing && n.timing.navigationStart,
			l = typeof s == "number" ? Math.abs(s + t - r) : e
		;(a || l < e) && i <= l && n.timeOrigin
	})()
	const gs = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor" }
	function ei(n) {
		return gs[n]
	}
	function ti(n) {
		if (!n || !n.sdk) return
		const { name: e, version: t } = n.sdk
		return { name: e, version: t }
	}
	const vs = 6e4
	function _s(n, { statusCode: e, headers: t }, r = Date.now()) {
		const i = { ...n },
			a = t && t["x-sentry-rate-limits"],
			s = t && t["retry-after"]
		if (a)
			for (const l of a.trim().split(",")) {
				const [u, h] = l.split(":", 2),
					p = parseInt(u, 10),
					m = 1e3 * (isNaN(p) ? 60 : p)
				if (h) for (const y of h.split(";")) i[y] = r + m
				else i.all = r + m
			}
		else
			s
				? (i.all =
						r +
						(function (l, u = Date.now()) {
							const h = parseInt(`${l}`, 10)
							if (!isNaN(h)) return 1e3 * h
							const p = Date.parse(`${l}`)
							return isNaN(p) ? vs : p - u
						})(s, r))
				: e === 429 && (i.all = r + 6e4)
		return i
	}
	const An = "production"
	function ys(n) {
		const e = Xr(),
			t = {
				sid: Me(),
				init: !0,
				timestamp: e,
				started: e,
				duration: 0,
				status: "ok",
				errors: 0,
				ignoreDuration: !1,
				toJSON: () =>
					(function (r) {
						return Rt({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } })
					})(t),
			}
		return n && Ke(t, n), t
	}
	function Ke(n, e = {}) {
		if ((e.user && (!n.ipAddress && e.user.ip_address && (n.ipAddress = e.user.ip_address), n.did || e.did || (n.did = e.user.id || e.user.email || e.user.username)), (n.timestamp = e.timestamp || Xr()), e.ignoreDuration && (n.ignoreDuration = e.ignoreDuration), e.sid && (n.sid = e.sid.length === 32 ? e.sid : Me()), e.init !== void 0 && (n.init = e.init), !n.did && e.did && (n.did = `${e.did}`), typeof e.started == "number" && (n.started = e.started), n.ignoreDuration)) n.duration = void 0
		else if (typeof e.duration == "number") n.duration = e.duration
		else {
			const t = n.timestamp - n.started
			n.duration = t >= 0 ? t : 0
		}
		e.release && (n.release = e.release), e.environment && (n.environment = e.environment), !n.ipAddress && e.ipAddress && (n.ipAddress = e.ipAddress), !n.userAgent && e.userAgent && (n.userAgent = e.userAgent), typeof e.errors == "number" && (n.errors = e.errors), e.status && (n.status = e.status)
	}
	class Ue {
		constructor() {
			;(this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._attachments = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._contexts = {}), (this._sdkProcessingMetadata = {}), (this._propagationContext = ii())
		}
		static clone(e) {
			const t = new Ue()
			return e && ((t._breadcrumbs = [...e._breadcrumbs]), (t._tags = { ...e._tags }), (t._extra = { ...e._extra }), (t._contexts = { ...e._contexts }), (t._user = e._user), (t._level = e._level), (t._span = e._span), (t._session = e._session), (t._transactionName = e._transactionName), (t._fingerprint = e._fingerprint), (t._eventProcessors = [...e._eventProcessors]), (t._requestSession = e._requestSession), (t._attachments = [...e._attachments]), (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }), (t._propagationContext = { ...e._propagationContext })), t
		}
		addScopeListener(e) {
			this._scopeListeners.push(e)
		}
		addEventProcessor(e) {
			return this._eventProcessors.push(e), this
		}
		setUser(e) {
			return (this._user = e || {}), this._session && Ke(this._session, { user: e }), this._notifyScopeListeners(), this
		}
		getUser() {
			return this._user
		}
		getRequestSession() {
			return this._requestSession
		}
		setRequestSession(e) {
			return (this._requestSession = e), this
		}
		setTags(e) {
			return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
		}
		setTag(e, t) {
			return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this
		}
		setExtras(e) {
			return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this
		}
		setExtra(e, t) {
			return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this
		}
		setFingerprint(e) {
			return (this._fingerprint = e), this._notifyScopeListeners(), this
		}
		setLevel(e) {
			return (this._level = e), this._notifyScopeListeners(), this
		}
		setTransactionName(e) {
			return (this._transactionName = e), this._notifyScopeListeners(), this
		}
		setContext(e, t) {
			return t === null ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this
		}
		setSpan(e) {
			return (this._span = e), this._notifyScopeListeners(), this
		}
		getSpan() {
			return this._span
		}
		getTransaction() {
			const e = this.getSpan()
			return e && e.transaction
		}
		setSession(e) {
			return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this
		}
		getSession() {
			return this._session
		}
		update(e) {
			if (!e) return this
			if (typeof e == "function") {
				const t = e(this)
				return t instanceof Ue ? t : this
			}
			return e instanceof Ue ? ((this._tags = { ...this._tags, ...e._tags }), (this._extra = { ...this._extra, ...e._extra }), (this._contexts = { ...this._contexts, ...e._contexts }), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : ze(e) && ((this._tags = { ...this._tags, ...e.tags }), (this._extra = { ...this._extra, ...e.extra }), (this._contexts = { ...this._contexts, ...e.contexts }), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
		}
		clear() {
			return (this._breadcrumbs = []), (this._tags = {}), (this._extra = {}), (this._user = {}), (this._contexts = {}), (this._level = void 0), (this._transactionName = void 0), (this._fingerprint = void 0), (this._requestSession = void 0), (this._span = void 0), (this._session = void 0), this._notifyScopeListeners(), (this._attachments = []), (this._propagationContext = ii()), this
		}
		addBreadcrumb(e, t) {
			const r = typeof t == "number" ? t : 100
			if (r <= 0) return this
			const i = { timestamp: Yt(), ...e }
			return (this._breadcrumbs = [...this._breadcrumbs, i].slice(-r)), this._notifyScopeListeners(), this
		}
		getLastBreadcrumb() {
			return this._breadcrumbs[this._breadcrumbs.length - 1]
		}
		clearBreadcrumbs() {
			return (this._breadcrumbs = []), this._notifyScopeListeners(), this
		}
		addAttachment(e) {
			return this._attachments.push(e), this
		}
		getAttachments() {
			return this._attachments
		}
		clearAttachments() {
			return (this._attachments = []), this
		}
		applyToEvent(e, t = {}) {
			if ((this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }), this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }), this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }), this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span)) {
				e.contexts = { trace: this._span.getTraceContext(), ...e.contexts }
				const r = this._span.transaction
				if (r) {
					e.sdkProcessingMetadata = { dynamicSamplingContext: r.getDynamicSamplingContext(), ...e.sdkProcessingMetadata }
					const i = r.name
					i && (e.tags = { transaction: i, ...e.tags })
				}
			}
			return this._applyFingerprint(e), (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]), (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0), (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata, propagationContext: this._propagationContext }), this._notifyEventProcessors([...ni(), ...this._eventProcessors], e, t)
		}
		setSDKProcessingMetadata(e) {
			return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this
		}
		setPropagationContext(e) {
			return (this._propagationContext = e), this
		}
		getPropagationContext() {
			return this._propagationContext
		}
		_notifyEventProcessors(e, t, r, i = 0) {
			return new Z((a, s) => {
				const l = e[i]
				if (t === null || typeof l != "function") a(t)
				else {
					const u = l({ ...t }, r)
					;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && l.id && u === null && O.log(`Event processor "${l.id}" dropped event`),
						dn(u)
							? u.then((h) => this._notifyEventProcessors(e, h, r, i + 1).then(a)).then(null, s)
							: this._notifyEventProcessors(e, u, r, i + 1)
									.then(a)
									.then(null, s)
				}
			})
		}
		_notifyScopeListeners() {
			this._notifyingListeners ||
				((this._notifyingListeners = !0),
				this._scopeListeners.forEach((e) => {
					e(this)
				}),
				(this._notifyingListeners = !1))
		}
		_applyFingerprint(e) {
			var t
			;(e.fingerprint = e.fingerprint ? ((t = e.fingerprint), Array.isArray(t) ? t : [t]) : []), this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
		}
	}
	function ni() {
		return pn("globalEventProcessors", () => [])
	}
	function ri(n) {
		ni().push(n)
	}
	function ii() {
		return { traceId: Me(), spanId: Me().substring(16), sampled: !1 }
	}
	const oi = 4,
		bs = 100
	class On {
		constructor(e, t = new Ue(), r = oi) {
			;(this._version = r), (this._stack = [{ scope: t }]), e && this.bindClient(e)
		}
		isOlderThan(e) {
			return this._version < e
		}
		bindClient(e) {
			;(this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations()
		}
		pushScope() {
			const e = Ue.clone(this.getScope())
			return this.getStack().push({ client: this.getClient(), scope: e }), e
		}
		popScope() {
			return !(this.getStack().length <= 1) && !!this.getStack().pop()
		}
		withScope(e) {
			const t = this.pushScope()
			try {
				e(t)
			} finally {
				this.popScope()
			}
		}
		getClient() {
			return this.getStackTop().client
		}
		getScope() {
			return this.getStackTop().scope
		}
		getStack() {
			return this._stack
		}
		getStackTop() {
			return this._stack[this._stack.length - 1]
		}
		captureException(e, t) {
			const r = (this._lastEventId = t && t.event_id ? t.event_id : Me()),
				i = new Error("Sentry syntheticException")
			return (
				this._withClient((a, s) => {
					a.captureException(e, { originalException: e, syntheticException: i, ...t, event_id: r }, s)
				}),
				r
			)
		}
		captureMessage(e, t, r) {
			const i = (this._lastEventId = r && r.event_id ? r.event_id : Me()),
				a = new Error(e)
			return (
				this._withClient((s, l) => {
					s.captureMessage(e, t, { originalException: e, syntheticException: a, ...r, event_id: i }, l)
				}),
				i
			)
		}
		captureEvent(e, t) {
			const r = t && t.event_id ? t.event_id : Me()
			return (
				e.type || (this._lastEventId = r),
				this._withClient((i, a) => {
					i.captureEvent(e, { ...t, event_id: r }, a)
				}),
				r
			)
		}
		lastEventId() {
			return this._lastEventId
		}
		addBreadcrumb(e, t) {
			const { scope: r, client: i } = this.getStackTop()
			if (!i) return
			const { beforeBreadcrumb: a = null, maxBreadcrumbs: s = bs } = (i.getOptions && i.getOptions()) || {}
			if (s <= 0) return
			const l = { timestamp: Yt(), ...e },
				u = a ? xr(() => a(l, t)) : l
			u !== null && (i.emit && i.emit("beforeAddBreadcrumb", u, t), r.addBreadcrumb(u, s))
		}
		setUser(e) {
			this.getScope().setUser(e)
		}
		setTags(e) {
			this.getScope().setTags(e)
		}
		setExtras(e) {
			this.getScope().setExtras(e)
		}
		setTag(e, t) {
			this.getScope().setTag(e, t)
		}
		setExtra(e, t) {
			this.getScope().setExtra(e, t)
		}
		setContext(e, t) {
			this.getScope().setContext(e, t)
		}
		configureScope(e) {
			const { scope: t, client: r } = this.getStackTop()
			r && e(t)
		}
		run(e) {
			const t = ai(this)
			try {
				e(this)
			} finally {
				ai(t)
			}
		}
		getIntegration(e) {
			const t = this.getClient()
			if (!t) return null
			try {
				return t.getIntegration(e)
			} catch {
				return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
			}
		}
		startTransaction(e, t) {
			const r = this._callExtensionMethod("startTransaction", e, t)
			return (
				(typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) ||
					r ||
					console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
				r
			)
		}
		traceHeaders() {
			return this._callExtensionMethod("traceHeaders")
		}
		captureSession(e = !1) {
			if (e) return this.endSession()
			this._sendSessionUpdate()
		}
		endSession() {
			const e = this.getStackTop().scope,
				t = e.getSession()
			t &&
				(function (r, i) {
					let a = {}
					i ? (a = { status: i }) : r.status === "ok" && (a = { status: "exited" }), Ke(r, a)
				})(t),
				this._sendSessionUpdate(),
				e.setSession()
		}
		startSession(e) {
			const { scope: t, client: r } = this.getStackTop(),
				{ release: i, environment: a = An } = (r && r.getOptions()) || {},
				{ userAgent: s } = ne.navigator || {},
				l = ys({ release: i, environment: a, user: t.getUser(), ...(s && { userAgent: s }), ...e }),
				u = t.getSession && t.getSession()
			return u && u.status === "ok" && Ke(u, { status: "exited" }), this.endSession(), t.setSession(l), l
		}
		shouldSendDefaultPii() {
			const e = this.getClient(),
				t = e && e.getOptions()
			return !!(t && t.sendDefaultPii)
		}
		_sendSessionUpdate() {
			const { scope: e, client: t } = this.getStackTop(),
				r = e.getSession()
			r && t && t.captureSession && t.captureSession(r)
		}
		_withClient(e) {
			const { scope: t, client: r } = this.getStackTop()
			r && e(r, t)
		}
		_callExtensionMethod(e, ...t) {
			const r = $t().__SENTRY__
			if (r && r.extensions && typeof r.extensions[e] == "function") return r.extensions[e].apply(this, t)
			;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Extension method ${e} couldn't be found, doing nothing.`)
		}
	}
	function $t() {
		return (ne.__SENTRY__ = ne.__SENTRY__ || { extensions: {}, hub: void 0 }), ne
	}
	function ai(n) {
		const e = $t(),
			t = Ln(e)
		return si(e, n), t
	}
	function ee() {
		const n = $t()
		if (n.__SENTRY__ && n.__SENTRY__.acs) {
			const e = n.__SENTRY__.acs.getCurrentHub()
			if (e) return e
		}
		return (function (e = $t()) {
			;(t = e), (t && t.__SENTRY__ && t.__SENTRY__.hub && !Ln(e).isOlderThan(oi)) || si(e, new On())
			var t
			return Ln(e)
		})(n)
	}
	function Ln(n) {
		return pn("hub", () => new On(), n)
	}
	function si(n, e) {
		return n ? (((n.__SENTRY__ = n.__SENTRY__ || {}).hub = e), !0) : !1
	}
	const ws = "7"
	function Ss(n, e) {
		return (
			(t = { sentry_key: n.publicKey, sentry_version: ws, ...(e && { sentry_client: `${e.name}/${e.version}` }) }),
			Object.keys(t)
				.map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`)
				.join("&")
		)
		var t
	}
	function Es(n, e, t, r) {
		const i = ti(t),
			a = n.type && n.type !== "replay_event" ? n.type : "event"
		;(function (l, u) {
			u && ((l.sdk = l.sdk || {}), (l.sdk.name = l.sdk.name || u.name), (l.sdk.version = l.sdk.version || u.version), (l.sdk.integrations = [...(l.sdk.integrations || []), ...(u.integrations || [])]), (l.sdk.packages = [...(l.sdk.packages || []), ...(u.packages || [])]))
		})(n, t && t.sdk)
		const s = (function (l, u, h, p) {
			const m = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext
			return { event_id: l.event_id, sent_at: new Date().toISOString(), ...(u && { sdk: u }), ...(!!h && { dsn: Nt(p) }), ...(m && { trace: Rt({ ...m }) }) }
		})(n, i, r, e)
		return delete n.sdkProcessingMetadata, mt(s, [[{ type: a }, n]])
	}
	const ci = []
	function li(n, e) {
		;(e[n.name] = n), ci.indexOf(n.name) === -1 && (n.setupOnce(ri, ee), ci.push(n.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Integration installed: ${n.name}`))
	}
	function ks(n, e, t, r) {
		const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = n,
			s = { ...e, event_id: e.event_id || t.event_id || Me(), timestamp: e.timestamp || Yt() },
			l = t.integrations || n.integrations.map((p) => p.name)
		;(function (p, m) {
			const { environment: y, release: S, dist: b, maxValueLength: w = 250 } = m
			"environment" in p || (p.environment = "environment" in m ? y : An), p.release === void 0 && S !== void 0 && (p.release = S), p.dist === void 0 && b !== void 0 && (p.dist = b), p.message && (p.message = He(p.message, w))
			const T = p.exception && p.exception.values && p.exception.values[0]
			T && T.value && (T.value = He(T.value, w))
			const L = p.request
			L && L.url && (L.url = He(L.url, w))
		})(s, n),
			(function (p, m) {
				m.length > 0 && ((p.sdk = p.sdk || {}), (p.sdk.integrations = [...(p.sdk.integrations || []), ...m]))
			})(s, l),
			e.type === void 0 &&
				(function (p, m) {
					const y = ne._sentryDebugIds
					if (!y) return
					let S
					const b = ui.get(m)
					b ? (S = b) : ((S = new Map()), ui.set(m, S))
					const w = Object.keys(y).reduce((T, L) => {
						let Y
						const Ie = S.get(L)
						Ie ? (Y = Ie) : ((Y = m(L)), S.set(L, Y))
						for (let at = Y.length - 1; at >= 0; at--) {
							const kt = Y[at]
							if (kt.filename) {
								T[kt.filename] = y[L]
								break
							}
						}
						return T
					}, {})
					try {
						p.exception.values.forEach((T) => {
							T.stacktrace.frames.forEach((L) => {
								L.filename && (L.debug_id = w[L.filename])
							})
						})
					} catch {}
				})(s, n.stackParser)
		let u = r
		t.captureContext && (u = Ue.clone(u).update(t.captureContext))
		let h = Fe(s)
		if (u) {
			if (u.getAttachments) {
				const p = [...(t.attachments || []), ...u.getAttachments()]
				p.length && (t.attachments = p)
			}
			h = u.applyToEvent(s, t)
		}
		return h.then(
			(p) => (
				p &&
					(function (m) {
						const y = {}
						try {
							m.exception.values.forEach((b) => {
								b.stacktrace.frames.forEach((w) => {
									w.debug_id && (w.abs_path ? (y[w.abs_path] = w.debug_id) : w.filename && (y[w.filename] = w.debug_id), delete w.debug_id)
								})
							})
						} catch {}
						if (Object.keys(y).length === 0) return
						;(m.debug_meta = m.debug_meta || {}), (m.debug_meta.images = m.debug_meta.images || [])
						const S = m.debug_meta.images
						Object.keys(y).forEach((b) => {
							S.push({ type: "sourcemap", code_file: b, debug_id: y[b] })
						})
					})(p),
				typeof i == "number" && i > 0
					? (function (m, y, S) {
							if (!m) return null
							const b = { ...m, ...(m.breadcrumbs && { breadcrumbs: m.breadcrumbs.map((w) => ({ ...w, ...(w.data && { data: Oe(w.data, y, S) }) })) }), ...(m.user && { user: Oe(m.user, y, S) }), ...(m.contexts && { contexts: Oe(m.contexts, y, S) }), ...(m.extra && { extra: Oe(m.extra, y, S) }) }
							return m.contexts && m.contexts.trace && b.contexts && ((b.contexts.trace = m.contexts.trace), m.contexts.trace.data && (b.contexts.trace.data = Oe(m.contexts.trace.data, y, S))), m.spans && (b.spans = m.spans.map((w) => (w.data && (w.data = Oe(w.data, y, S)), w))), b
					  })(p, i, a)
					: p
			)
		)
	}
	const ui = new WeakMap(),
		di = "Not capturing exception because it's already been captured."
	class Be {
		__init() {
			this._integrations = {}
		}
		__init2() {
			this._integrationsInitialized = !1
		}
		__init3() {
			this._numProcessing = 0
		}
		__init4() {
			this._outcomes = {}
		}
		__init5() {
			this._hooks = {}
		}
		constructor(e) {
			if ((Be.prototype.__init.call(this), Be.prototype.__init2.call(this), Be.prototype.__init3.call(this), Be.prototype.__init4.call(this), Be.prototype.__init5.call(this), (this._options = e), e.dsn ? (this._dsn = ss(e.dsn)) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("No DSN provided, client will not do anything."), this._dsn)) {
				const t = (function (r, i = {}) {
					const a = typeof i == "string" ? i : i.tunnel,
						s = typeof i != "string" && i._metadata ? i._metadata.sdk : void 0
					return (
						a ||
						`${(function (l) {
							return `${(function (u) {
								const h = u.protocol ? `${u.protocol}:` : "",
									p = u.port ? `:${u.port}` : ""
								return `${h}//${u.host}${p}${u.path ? `/${u.path}` : ""}/api/`
							})(l)}${l.projectId}/envelope/`
						})(r)}?${Ss(r, s)}`
					)
				})(this._dsn, e)
				this._transport = e.transport({ recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: t })
			}
		}
		captureException(e, t, r) {
			if (zr(e)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(di))
			let i = t && t.event_id
			return (
				this._process(
					this.eventFromException(e, t)
						.then((a) => this._captureEvent(a, t, r))
						.then((a) => {
							i = a
						})
				),
				i
			)
		}
		captureMessage(e, t, r, i) {
			let a = r && r.event_id
			const s = Dr(e) ? this.eventFromMessage(String(e), t, r) : this.eventFromException(e, r)
			return (
				this._process(
					s
						.then((l) => this._captureEvent(l, r, i))
						.then((l) => {
							a = l
						})
				),
				a
			)
		}
		captureEvent(e, t, r) {
			if (t && t.originalException && zr(t.originalException)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(di))
			let i = t && t.event_id
			return (
				this._process(
					this._captureEvent(e, t, r).then((a) => {
						i = a
					})
				),
				i
			)
		}
		captureSession(e) {
			this._isEnabled() ? (typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Ke(e, { init: !1 }))) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("SDK not enabled, will not capture session.")
		}
		getDsn() {
			return this._dsn
		}
		getOptions() {
			return this._options
		}
		getSdkMetadata() {
			return this._options._metadata
		}
		getTransport() {
			return this._transport
		}
		flush(e) {
			const t = this._transport
			return t ? this._isClientDoneProcessing(e).then((r) => t.flush(e).then((i) => r && i)) : Fe(!0)
		}
		close(e) {
			return this.flush(e).then((t) => ((this.getOptions().enabled = !1), t))
		}
		setupIntegrations() {
			this._isEnabled() &&
				!this._integrationsInitialized &&
				((this._integrations = (function (e) {
					const t = {}
					return (
						e.forEach((r) => {
							r && li(r, t)
						}),
						t
					)
				})(this._options.integrations)),
				(this._integrationsInitialized = !0))
		}
		getIntegrationById(e) {
			return this._integrations[e]
		}
		getIntegration(e) {
			try {
				return this._integrations[e.id] || null
			} catch {
				return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
			}
		}
		addIntegration(e) {
			li(e, this._integrations)
		}
		sendEvent(e, t = {}) {
			if (this._dsn) {
				let r = Es(e, this._dsn, this._options._metadata, this._options.tunnel)
				for (const a of t.attachments || []) r = ps(r, ms(a, this._options.transportOptions && this._options.transportOptions.textEncoder))
				const i = this._sendEnvelope(r)
				i && i.then((a) => this.emit("afterSendEvent", e, a), null)
			}
		}
		sendSession(e) {
			if (this._dsn) {
				const t = (function (r, i, a, s) {
					const l = ti(a)
					return mt({ sent_at: new Date().toISOString(), ...(l && { sdk: l }), ...(!!s && { dsn: Nt(i) }) }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]])
				})(e, this._dsn, this._options._metadata, this._options.tunnel)
				this._sendEnvelope(t)
			}
		}
		recordDroppedEvent(e, t, r) {
			if (this._options.sendClientReports) {
				const i = `${e}:${t}`
				;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Adding outcome: "${i}"`), (this._outcomes[i] = this._outcomes[i] + 1 || 1)
			}
		}
		on(e, t) {
			this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t)
		}
		emit(e, ...t) {
			this._hooks[e] && this._hooks[e].forEach((r) => r(...t))
		}
		_updateSessionFromEvent(e, t) {
			let r = !1,
				i = !1
			const a = t.exception && t.exception.values
			if (a) {
				i = !0
				for (const l of a) {
					const u = l.mechanism
					if (u && u.handled === !1) {
						r = !0
						break
					}
				}
			}
			const s = e.status === "ok"
			;((s && e.errors === 0) || (s && r)) && (Ke(e, { ...(r && { status: "crashed" }), errors: e.errors || Number(i || r) }), this.captureSession(e))
		}
		_isClientDoneProcessing(e) {
			return new Z((t) => {
				let r = 0
				const i = setInterval(() => {
					this._numProcessing == 0 ? (clearInterval(i), t(!0)) : ((r += 1), e && r >= e && (clearInterval(i), t(!1)))
				}, 1)
			})
		}
		_isEnabled() {
			return this.getOptions().enabled !== !1 && this._dsn !== void 0
		}
		_prepareEvent(e, t, r) {
			const i = this.getOptions(),
				a = Object.keys(this._integrations)
			return (
				!t.integrations && a.length > 0 && (t.integrations = a),
				ks(i, e, t, r).then((s) => {
					if (s === null) return s
					const { propagationContext: l } = s.sdkProcessingMetadata || {}
					if (!(s.contexts && s.contexts.trace) && l) {
						const { traceId: u, spanId: h, parentSpanId: p, dsc: m } = l
						s.contexts = { trace: { trace_id: u, span_id: h, parent_span_id: p }, ...s.contexts }
						const y =
							m ||
							(function (S, b, w) {
								const T = b.getOptions(),
									{ publicKey: L } = b.getDsn() || {},
									{ segment: Y } = (w && w.getUser()) || {},
									Ie = Rt({ environment: T.environment || An, release: T.release, user_segment: Y, public_key: L, trace_id: S })
								return b.emit && b.emit("createDsc", Ie), Ie
							})(u, this, r)
						s.sdkProcessingMetadata = { dynamicSamplingContext: y, ...s.sdkProcessingMetadata }
					}
					return s
				})
			)
		}
		_captureEvent(e, t = {}, r) {
			return this._processEvent(e, t, r).then(
				(i) => i.event_id,
				(i) => {
					if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
						const a = i
						a.logLevel === "log" ? O.log(a.message) : O.warn(a)
					}
				}
			)
		}
		_processEvent(e, t, r) {
			const i = this.getOptions(),
				{ sampleRate: a } = i
			if (!this._isEnabled()) return Vt(new le("SDK not enabled, will not capture event.", "log"))
			const s = pi(e),
				l = hi(e),
				u = e.type || "error",
				h = `before send for type \`${u}\``
			if (l && typeof a == "number" && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", e), Vt(new le(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"))
			const p = u === "replay_event" ? "replay" : u
			return this._prepareEvent(e, t, r)
				.then((m) => {
					if (m === null) throw (this.recordDroppedEvent("event_processor", p, e), new le("An event processor returned `null`, will not send event.", "log"))
					if (t.data && t.data.__sentry__ === !0) return m
					const y = (function (S, b, w) {
						const { beforeSend: T, beforeSendTransaction: L } = S
						return hi(b) && T ? T(b, w) : pi(b) && L ? L(b, w) : b
					})(i, m, t)
					return (function (S, b) {
						const w = `${b} must return \`null\` or a valid event.`
						if (dn(S))
							return S.then(
								(T) => {
									if (!ze(T) && T !== null) throw new le(w)
									return T
								},
								(T) => {
									throw new le(`${b} rejected with ${T}`)
								}
							)
						if (!ze(S) && S !== null) throw new le(w)
						return S
					})(y, h)
				})
				.then((m) => {
					if (m === null) throw (this.recordDroppedEvent("before_send", p, e), new le(`${h} returned \`null\`, will not send event.`, "log"))
					const y = r && r.getSession()
					!s && y && this._updateSessionFromEvent(y, m)
					const S = m.transaction_info
					if (s && S && m.transaction !== e.transaction) {
						const b = "custom"
						m.transaction_info = { ...S, source: b }
					}
					return this.sendEvent(m, t), m
				})
				.then(null, (m) => {
					throw m instanceof le
						? m
						: (this.captureException(m, { data: { __sentry__: !0 }, originalException: m }),
						  new le(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`))
				})
		}
		_process(e) {
			this._numProcessing++,
				e.then(
					(t) => (this._numProcessing--, t),
					(t) => (this._numProcessing--, t)
				)
		}
		_sendEnvelope(e) {
			if (this._transport && this._dsn)
				return (
					this.emit("beforeEnvelope", e),
					this._transport.send(e).then(null, (t) => {
						;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Error while sending event:", t)
					})
				)
			;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Transport disabled")
		}
		_clearOutcomes() {
			const e = this._outcomes
			return (
				(this._outcomes = {}),
				Object.keys(e).map((t) => {
					const [r, i] = t.split(":")
					return { reason: r, category: i, quantity: e[t] }
				})
			)
		}
	}
	function hi(n) {
		return n.type === void 0
	}
	function pi(n) {
		return n.type === "transaction"
	}
	const Ts = 30
	function Cs(n, e, t = ds(n.bufferSize || Ts)) {
		let r = {}
		function i(a) {
			const s = []
			if (
				(Zr(a, (h, p) => {
					const m = ei(p)
					if (
						(function (y, S, b = Date.now()) {
							return (
								(function (w, T) {
									return w[T] || w.all || 0
								})(y, S) > b
							)
						})(r, m)
					) {
						const y = fi(h, p)
						n.recordDroppedEvent("ratelimit_backoff", m, y)
					} else s.push(h)
				}),
				s.length === 0)
			)
				return Fe()
			const l = mt(a[0], s),
				u = (h) => {
					Zr(l, (p, m) => {
						const y = fi(p, m)
						n.recordDroppedEvent(h, ei(m), y)
					})
				}
			return t
				.add(() =>
					e({ body: fs(l, n.textEncoder) }).then(
						(h) => (h.statusCode !== void 0 && (h.statusCode < 200 || h.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Sentry responded with status code ${h.statusCode} to sent event.`), (r = _s(r, h)), h),
						(h) => {
							throw (u("network_error"), h)
						}
					)
				)
				.then(
					(h) => h,
					(h) => {
						if (h instanceof le) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Skipped sending event because buffer is full."), u("queue_overflow"), Fe()
						throw h
					}
				)
		}
		return (i.__sentry__baseTransport__ = !0), { send: i, flush: (a) => t.drain(a) }
	}
	function fi(n, e) {
		if (e === "event" || e === "transaction") return Array.isArray(n) ? n[1] : void 0
	}
	const mi = "7.60.1"
	let gi
	class gt {
		constructor() {
			gt.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "FunctionToString"
		}
		__init() {
			this.name = gt.id
		}
		setupOnce() {
			gi = Function.prototype.toString
			try {
				Function.prototype.toString = function (...e) {
					const t = gn(this) || this
					return gi.apply(t, e)
				}
			} catch {}
		}
	}
	gt.__initStatic()
	const Ms = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
		As = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/]
	class Qe {
		static __initStatic() {
			this.id = "InboundFilters"
		}
		__init() {
			this.name = Qe.id
		}
		constructor(e = {}) {
			;(this._options = e), Qe.prototype.__init.call(this)
		}
		setupOnce(e, t) {
			const r = (i) => {
				const a = t()
				if (a) {
					const s = a.getIntegration(Qe)
					if (s) {
						const l = a.getClient(),
							u = l ? l.getOptions() : {},
							h = (function (p = {}, m = {}) {
								return { allowUrls: [...(p.allowUrls || []), ...(m.allowUrls || [])], denyUrls: [...(p.denyUrls || []), ...(m.denyUrls || [])], ignoreErrors: [...(p.ignoreErrors || []), ...(m.ignoreErrors || []), ...(p.disableErrorDefaults ? [] : Ms)], ignoreTransactions: [...(p.ignoreTransactions || []), ...(m.ignoreTransactions || []), ...(p.disableTransactionDefaults ? [] : As)], ignoreInternal: p.ignoreInternal === void 0 || p.ignoreInternal }
							})(s._options, u)
						return (function (p, m) {
							return m.ignoreInternal &&
								(function (y) {
									try {
										return y.exception.values[0].type === "SentryError"
									} catch {}
									return !1
								})(p)
								? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
										O.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ae(p)}`),
								  !0)
								: (function (y, S) {
										return y.type || !S || !S.length
											? !1
											: (function (b) {
													if (b.message) return [b.message]
													if (b.exception) {
														const { values: w } = b.exception
														try {
															const { type: T = "", value: L = "" } = (w && w[w.length - 1]) || {}
															return [`${L}`, `${T}: ${L}`]
														} catch {
															return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error(`Cannot extract message for event ${Ae(b)}`), []
														}
													}
													return []
											  })(y).some((b) => Pt(b, S))
								  })(p, m.ignoreErrors)
								? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
										O.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ae(p)}`),
								  !0)
								: (function (y, S) {
										if (y.type !== "transaction" || !S || !S.length) return !1
										const b = y.transaction
										return !!b && Pt(b, S)
								  })(p, m.ignoreTransactions)
								? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
										O.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ae(p)}`),
								  !0)
								: (function (y, S) {
										if (!S || !S.length) return !1
										const b = Gt(y)
										return !!b && Pt(b, S)
								  })(p, m.denyUrls)
								? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
										O.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ae(p)}.
Url: ${Gt(p)}`),
								  !0)
								: (function (y, S) {
										if (!S || !S.length) return !0
										const b = Gt(y)
										return !b || Pt(b, S)
								  })(p, m.allowUrls)
								? !1
								: ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
										O.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ae(p)}.
Url: ${Gt(p)}`),
								  !0)
						})(i, h)
							? null
							: i
					}
				}
				return i
			}
			;(r.id = this.name), e(r)
		}
	}
	function Gt(n) {
		try {
			let e
			try {
				e = n.exception.values[0].stacktrace.frames
			} catch {}
			return e
				? (function (t = []) {
						for (let r = t.length - 1; r >= 0; r--) {
							const i = t[r]
							if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null
						}
						return null
				  })(e)
				: null
		} catch {
			return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error(`Cannot extract url for event ${Ae(n)}`), null
		}
	}
	Qe.__initStatic()
	var Os = Object.freeze({ __proto__: null, FunctionToString: gt, InboundFilters: Qe })
	const j = ne
	let Pn = 0
	function vi() {
		return Pn > 0
	}
	function Xe(n, e = {}, t) {
		if (typeof n != "function") return n
		try {
			const i = n.__sentry_wrapped__
			if (i) return i
			if (gn(n)) return n
		} catch {
			return n
		}
		const r = function () {
			const i = Array.prototype.slice.call(arguments)
			try {
				t && typeof t == "function" && t.apply(this, arguments)
				const s = i.map((l) => Xe(l, e))
				return n.apply(this, s)
			} catch (s) {
				throw (
					(Pn++,
					setTimeout(() => {
						Pn--
					}),
					(a = (l) => {
						var u, h
						l.addEventProcessor((p) => (e.mechanism && (Sn(p, void 0, void 0), ft(p, e.mechanism)), (p.extra = { ...p.extra, arguments: i }), p)), (u = s), ee().captureException(u, { captureContext: h })
					}),
					ee().withScope(a),
					s)
				)
			}
			var a
		}
		try {
			for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
		} catch {}
		Ur(r, n), mn(n, "__sentry_wrapped__", r)
		try {
			Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get: () => n.name })
		} catch {}
		return r
	}
	function _i(n, e) {
		const t = In(n, e),
			r = { type: e && e.name, value: Ps(e) }
		return t.length && (r.stacktrace = { frames: t }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
	}
	function Dn(n, e) {
		return { exception: { values: [_i(n, e)] } }
	}
	function In(n, e) {
		const t = e.stacktrace || e.stack || "",
			r = (function (i) {
				if (i) {
					if (typeof i.framesToPop == "number") return i.framesToPop
					if (Ls.test(i.message)) return 1
				}
				return 0
			})(e)
		try {
			return n(t, r)
		} catch {}
		return []
	}
	const Ls = /Minified React error #\d+;/i
	function Ps(n) {
		const e = n && n.message
		return e ? (e.error && typeof e.error.message == "string" ? e.error.message : e) : "No error message"
	}
	function Nn(n, e, t, r, i) {
		let a
		if (un(e) && e.error) return Dn(n, e.error)
		if (Pr(e) || We(e, "DOMException")) {
			const s = e
			if ("stack" in e) a = Dn(n, e)
			else {
				const l = s.name || (Pr(s) ? "DOMError" : "DOMException"),
					u = s.message ? `${l}: ${s.message}` : l
				;(a = Rn(n, u, t, r)), Sn(a, u)
			}
			return "code" in s && (a.tags = { ...a.tags, "DOMException.code": `${s.code}` }), a
		}
		return Lr(e)
			? Dn(n, e)
			: ze(e) || Lt(e)
			? ((a = (function (s, l, u, h) {
					const p = ee().getClient(),
						m = p && p.getOptions().normalizeDepth,
						y = { exception: { values: [{ type: Lt(l) ? l.constructor.name : h ? "UnhandledRejection" : "Error", value: Ds(l, { isUnhandledRejection: h }) }] }, extra: { __serialized__: Hr(l, m) } }
					if (u) {
						const S = In(s, u)
						S.length && (y.exception.values[0].stacktrace = { frames: S })
					}
					return y
			  })(n, e, t, i)),
			  ft(a, { synthetic: !0 }),
			  a)
			: ((a = Rn(n, e, t, r)), Sn(a, `${e}`, void 0), ft(a, { synthetic: !0 }), a)
	}
	function Rn(n, e, t, r) {
		const i = { message: e }
		if (r && t) {
			const a = In(n, t)
			a.length && (i.exception = { values: [{ value: e, stacktrace: { frames: a } }] })
		}
		return i
	}
	function Ds(n, { isUnhandledRejection: e }) {
		const t = (function (i, a = 40) {
				const s = Object.keys(Br(i))
				if ((s.sort(), !s.length)) return "[object has no keys]"
				if (s[0].length >= a) return He(s[0], a)
				for (let l = s.length; l > 0; l--) {
					const u = s.slice(0, l).join(", ")
					if (!(u.length > a)) return l === s.length ? u : He(u, a)
				}
				return ""
			})(n),
			r = e ? "promise rejection" : "exception"
		return un(n)
			? `Event \`ErrorEvent\` captured as ${r} with message \`${n.message}\``
			: Lt(n)
			? `Event \`${(function (i) {
					try {
						const a = Object.getPrototypeOf(i)
						return a ? a.constructor.name : void 0
					} catch {}
			  })(n)}\` (type=${n.type}) captured as ${r}`
			: `Object captured as ${r} with keys: ${t}`
	}
	const yi = 1024,
		bi = "Breadcrumbs"
	class vt {
		static __initStatic() {
			this.id = bi
		}
		__init() {
			this.name = vt.id
		}
		constructor(e) {
			vt.prototype.__init.call(this), (this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e })
		}
		setupOnce() {
			this.options.console && je("console", Is),
				this.options.dom &&
					je(
						"dom",
						(function (e) {
							function t(r) {
								let i,
									a = typeof e == "object" ? e.serializeAttribute : void 0,
									s = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0
								s && s > yi && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), (s = yi)), typeof a == "string" && (a = [a])
								try {
									const l = r.event
									i = (function (u) {
										return !!u && !!u.target
									})(l)
										? fn(l.target, { keyAttrs: a, maxStringLength: s })
										: fn(l, { keyAttrs: a, maxStringLength: s })
								} catch {
									i = "<unknown>"
								}
								i.length !== 0 && ee().addBreadcrumb({ category: `ui.${r.name}`, message: i }, { event: r.event, name: r.name, global: r.global })
							}
							return t
						})(this.options.dom)
					),
				this.options.xhr && je("xhr", Ns),
				this.options.fetch && je("fetch", Rs),
				this.options.history && je("history", xs)
		}
		addSentryBreadcrumb(e) {
			this.options.sentry && ee().addBreadcrumb({ category: "sentry." + (e.type === "transaction" ? "transaction" : "event"), event_id: e.event_id, level: e.level, message: Ae(e) }, { event: e })
		}
	}
	function Is(n) {
		for (let r = 0; r < n.args.length; r++)
			if (n.args[r] === "ref=Ref<") {
				n.args[r + 1] = "viewRef"
				break
			}
		const e = { category: "console", data: { arguments: n.args, logger: "console" }, level: ((t = n.level), t === "warn" ? "warning" : hs.includes(t) ? t : "log"), message: Ir(n.args, " ") }
		var t
		if (n.level === "assert") {
			if (n.args[0] !== !1) return
			;(e.message = `Assertion failed: ${Ir(n.args.slice(1), " ") || "console.assert"}`), (e.data.arguments = n.args.slice(1))
		}
		ee().addBreadcrumb(e, { input: n.args, level: n.level })
	}
	function Ns(n) {
		const { startTimestamp: e, endTimestamp: t } = n,
			r = n.xhr[ht]
		if (!e || !t || !r) return
		const { method: i, url: a, status_code: s, body: l } = r,
			u = { method: i, url: a, status_code: s },
			h = { xhr: n.xhr, input: l, startTimestamp: e, endTimestamp: t }
		ee().addBreadcrumb({ category: "xhr", data: u, type: "http" }, h)
	}
	function Rs(n) {
		const { startTimestamp: e, endTimestamp: t } = n
		if (t && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST"))
			if (n.error) {
				const r = n.fetchData,
					i = { data: n.error, input: n.args, startTimestamp: e, endTimestamp: t }
				ee().addBreadcrumb({ category: "fetch", data: r, level: "error", type: "http" }, i)
			} else {
				const r = { ...n.fetchData, status_code: n.response && n.response.status },
					i = { input: n.args, response: n.response, startTimestamp: e, endTimestamp: t }
				ee().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i)
			}
	}
	function xs(n) {
		let e = n.from,
			t = n.to
		const r = kn(j.location.href)
		let i = kn(e)
		const a = kn(t)
		i.path || (i = r), r.protocol === a.protocol && r.host === a.host && (t = a.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), ee().addBreadcrumb({ category: "navigation", data: { from: e, to: t } })
	}
	vt.__initStatic()
	class js extends Be {
		constructor(e) {
			const t = j.SENTRY_SDK_SOURCE || "npm"
			;(e._metadata = e._metadata || {}),
				(e._metadata.sdk = e._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: `${t}:@sentry/browser`, version: mi }], version: mi }),
				super(e),
				e.sendClientReports &&
					j.document &&
					j.document.addEventListener("visibilitychange", () => {
						j.document.visibilityState === "hidden" && this._flushOutcomes()
					})
		}
		eventFromException(e, t) {
			return (function (r, i, a, s) {
				const l = Nn(r, i, (a && a.syntheticException) || void 0, s)
				return ft(l), (l.level = "error"), a && a.event_id && (l.event_id = a.event_id), Fe(l)
			})(this._options.stackParser, e, t, this._options.attachStacktrace)
		}
		eventFromMessage(e, t = "info", r) {
			return (function (i, a, s = "info", l, u) {
				const h = Rn(i, a, (l && l.syntheticException) || void 0, u)
				return (h.level = s), l && l.event_id && (h.event_id = l.event_id), Fe(h)
			})(this._options.stackParser, e, t, r, this._options.attachStacktrace)
		}
		sendEvent(e, t) {
			const r = this.getIntegrationById(bi)
			r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(e), super.sendEvent(e, t)
		}
		captureUserFeedback(e) {
			if (!this._isEnabled()) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("SDK not enabled, will not capture user feedback."))
			const t = (function (r, { metadata: i, tunnel: a, dsn: s }) {
				const l = { event_id: r.event_id, sent_at: new Date().toISOString(), ...(i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }), ...(!!a && !!s && { dsn: Nt(s) }) }
				return mt(l, [
					(function (h) {
						return [{ type: "user_report" }, h]
					})(r),
				])
			})(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel })
			this._sendEnvelope(t)
		}
		_prepareEvent(e, t, r) {
			return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, r)
		}
		_flushOutcomes() {
			const e = this._clearOutcomes()
			if (e.length === 0) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("No outcomes to send"))
			if (!this._dsn) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("No dsn provided, will not send outcomes"))
			;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("Sending outcomes:", e)
			const t = ((r = e), mt((i = this._options.tunnel && Nt(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: a || Yt(), discarded_events: r }]]))
			var r, i, a
			this._sendEnvelope(t)
		}
	}
	let _t
	function Fs(
		n,
		e = (function () {
			if (_t) return _t
			if (yn(j.fetch)) return (_t = j.fetch.bind(j))
			const t = j.document
			let r = j.fetch
			if (t && typeof t.createElement == "function")
				try {
					const i = t.createElement("iframe")
					;(i.hidden = !0), t.head.appendChild(i)
					const a = i.contentWindow
					a && a.fetch && (r = a.fetch), t.head.removeChild(i)
				} catch (i) {
					;(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
				}
			return (_t = r.bind(j))
		})()
	) {
		let t = 0,
			r = 0
		return Cs(n, function (i) {
			const a = i.body.length
			;(t += a), r++
			const s = { body: i.body, method: "POST", referrerPolicy: "origin", headers: n.headers, keepalive: t <= 6e4 && r < 15, ...n.fetchOptions }
			try {
				return e(n.url, s).then((l) => ((t -= a), r--, { statusCode: l.status, headers: { "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"), "retry-after": l.headers.get("Retry-After") } }))
			} catch (l) {
				return (_t = void 0), (t -= a), r--, Vt(l)
			}
		})
	}
	class Le {
		static __initStatic() {
			this.id = "GlobalHandlers"
		}
		__init() {
			this.name = Le.id
		}
		__init2() {
			this._installFunc = { onerror: Us, onunhandledrejection: Bs }
		}
		constructor(e) {
			Le.prototype.__init.call(this), Le.prototype.__init2.call(this), (this._options = { onerror: !0, onunhandledrejection: !0, ...e })
		}
		setupOnce() {
			Error.stackTraceLimit = 50
			const e = this._options
			for (const r in e) {
				const i = this._installFunc[r]
				i && e[r] && ((t = r), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Global Handler attached: ${t}`), i(), (this._installFunc[r] = void 0))
			}
			var t
		}
	}
	function Us() {
		je("error", (n) => {
			const [e, t, r] = Ei()
			if (!e.getIntegration(Le)) return
			const { msg: i, url: a, line: s, column: l, error: u } = n
			if (vi() || (u && u.__sentry_own_request__)) return
			const h =
				u === void 0 && Re(i)
					? (function (p, m, y, S) {
							const b = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
							let w = un(p) ? p.message : p,
								T = "Error"
							const L = w.match(b)
							return L && ((T = L[1]), (w = L[2])), wi({ exception: { values: [{ type: T, value: w }] } }, m, y, S)
					  })(i, a, s, l)
					: wi(Nn(t, u || i, void 0, r, !1), a, s, l)
			;(h.level = "error"), Si(e, u, h, "onerror")
		})
	}
	function Bs() {
		je("unhandledrejection", (n) => {
			const [e, t, r] = Ei()
			if (!e.getIntegration(Le)) return
			let i = n
			try {
				"reason" in n ? (i = n.reason) : "detail" in n && "reason" in n.detail && (i = n.detail.reason)
			} catch {}
			if (vi() || (i && i.__sentry_own_request__)) return !0
			const a = Dr(i) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(i)}` }] } } : Nn(t, i, void 0, r, !0)
			;(a.level = "error"), Si(e, i, a, "onunhandledrejection")
		})
	}
	function wi(n, e, t, r) {
		const i = (n.exception = n.exception || {}),
			a = (i.values = i.values || []),
			s = (a[0] = a[0] || {}),
			l = (s.stacktrace = s.stacktrace || {}),
			u = (l.frames = l.frames || []),
			h = isNaN(parseInt(r, 10)) ? void 0 : r,
			p = isNaN(parseInt(t, 10)) ? void 0 : t,
			m =
				Re(e) && e.length > 0
					? e
					: (function () {
							try {
								return rs.document.location.href
							} catch {
								return ""
							}
					  })()
		return u.length === 0 && u.push({ colno: h, filename: m, function: "?", in_app: !0, lineno: p }), n
	}
	function Si(n, e, t, r) {
		ft(t, { handled: !1, type: r }), n.captureEvent(t, { originalException: e })
	}
	function Ei() {
		const n = ee(),
			e = n.getClient(),
			t = (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
		return [n, t.stackParser, t.attachStacktrace]
	}
	Le.__initStatic()
	const Vs = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
	class yt {
		static __initStatic() {
			this.id = "TryCatch"
		}
		__init() {
			this.name = yt.id
		}
		constructor(e) {
			yt.prototype.__init.call(this), (this._options = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...e })
		}
		setupOnce() {
			this._options.setTimeout && W(j, "setTimeout", ki), this._options.setInterval && W(j, "setInterval", ki), this._options.requestAnimationFrame && W(j, "requestAnimationFrame", Ys), this._options.XMLHttpRequest && "XMLHttpRequest" in j && W(XMLHttpRequest.prototype, "send", $s)
			const e = this._options.eventTarget
			e && (Array.isArray(e) ? e : Vs).forEach(Gs)
		}
	}
	function ki(n) {
		return function (...e) {
			const t = e[0]
			return (e[0] = Xe(t, { mechanism: { data: { function: Ce(n) }, handled: !0, type: "instrument" } })), n.apply(this, e)
		}
	}
	function Ys(n) {
		return function (e) {
			return n.apply(this, [Xe(e, { mechanism: { data: { function: "requestAnimationFrame", handler: Ce(n) }, handled: !0, type: "instrument" } })])
		}
	}
	function $s(n) {
		return function (...e) {
			const t = this
			return (
				["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
					r in t &&
						typeof t[r] == "function" &&
						W(t, r, function (i) {
							const a = { mechanism: { data: { function: r, handler: Ce(i) }, handled: !0, type: "instrument" } },
								s = gn(i)
							return s && (a.mechanism.data.handler = Ce(s)), Xe(i, a)
						})
				}),
				n.apply(this, e)
			)
		}
	}
	function Gs(n) {
		const e = j,
			t = e[n] && e[n].prototype
		t &&
			t.hasOwnProperty &&
			t.hasOwnProperty("addEventListener") &&
			(W(t, "addEventListener", function (r) {
				return function (i, a, s) {
					try {
						typeof a.handleEvent == "function" && (a.handleEvent = Xe(a.handleEvent, { mechanism: { data: { function: "handleEvent", handler: Ce(a), target: n }, handled: !0, type: "instrument" } }))
					} catch {}
					return r.apply(this, [i, Xe(a, { mechanism: { data: { function: "addEventListener", handler: Ce(a), target: n }, handled: !0, type: "instrument" } }), s])
				}
			}),
			W(t, "removeEventListener", function (r) {
				return function (i, a, s) {
					const l = a
					try {
						const u = l && l.__sentry_wrapped__
						u && r.call(this, i, u, s)
					} catch {}
					return r.call(this, i, l, s)
				}
			}))
	}
	yt.__initStatic()
	class Ze {
		static __initStatic() {
			this.id = "LinkedErrors"
		}
		__init() {
			this.name = Ze.id
		}
		constructor(e = {}) {
			Ze.prototype.__init.call(this), (this._key = e.key || "cause"), (this._limit = e.limit || 5)
		}
		setupOnce(e, t) {
			e((r, i) => {
				const a = t(),
					s = a.getClient(),
					l = a.getIntegration(Ze)
				if (!s || !l) return r
				const u = s.getOptions()
				return ns(_i, u.stackParser, u.maxValueLength, l._key, l._limit, r, i), r
			})
		}
	}
	Ze.__initStatic()
	class et {
		constructor() {
			et.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "HttpContext"
		}
		__init() {
			this.name = et.id
		}
		setupOnce() {
			ri((e) => {
				if (ee().getIntegration(et)) {
					if (!j.navigator && !j.location && !j.document) return e
					const t = (e.request && e.request.url) || (j.location && j.location.href),
						{ referrer: r } = j.document || {},
						{ userAgent: i } = j.navigator || {},
						a = { ...(e.request && e.request.headers), ...(r && { Referer: r }), ...(i && { "User-Agent": i }) },
						s = { ...e.request, ...(t && { url: t }), headers: a }
					return { ...e, request: s }
				}
				return e
			})
		}
	}
	et.__initStatic()
	class tt {
		constructor() {
			tt.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "Dedupe"
		}
		__init() {
			this.name = tt.id
		}
		setupOnce(e, t) {
			const r = (i) => {
				if (i.type) return i
				const a = t().getIntegration(tt)
				if (a) {
					try {
						if (
							(function (s, l) {
								return l
									? !!(
											(function (u, h) {
												const p = u.message,
													m = h.message
												return !((!p && !m) || (p && !m) || (!p && m) || p !== m || !Ci(u, h) || !Ti(u, h))
											})(s, l) ||
											(function (u, h) {
												const p = Mi(h),
													m = Mi(u)
												return !(!p || !m || p.type !== m.type || p.value !== m.value || !Ci(u, h) || !Ti(u, h))
											})(s, l)
									  )
									: !1
							})(i, a._previousEvent)
						)
							return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Event dropped due to being a duplicate of previously captured event."), null
					} catch {
						return (a._previousEvent = i)
					}
					return (a._previousEvent = i)
				}
				return i
			}
			;(r.id = this.name), e(r)
		}
	}
	function Ti(n, e) {
		let t = Ai(n),
			r = Ai(e)
		if (!t && !r) return !0
		if ((t && !r) || (!t && r) || r.length !== t.length) return !1
		for (let i = 0; i < r.length; i++) {
			const a = r[i],
				s = t[i]
			if (a.filename !== s.filename || a.lineno !== s.lineno || a.colno !== s.colno || a.function !== s.function) return !1
		}
		return !0
	}
	function Ci(n, e) {
		let t = n.fingerprint,
			r = e.fingerprint
		if (!t && !r) return !0
		if ((t && !r) || (!t && r)) return !1
		try {
			return t.join("") === r.join("")
		} catch {
			return !1
		}
	}
	function Mi(n) {
		return n.exception && n.exception.values && n.exception.values[0]
	}
	function Ai(n) {
		const e = n.exception
		if (e)
			try {
				return e.values[0].stacktrace.frames
			} catch {
				return
			}
	}
	tt.__initStatic()
	var qs = Object.freeze({ __proto__: null, Breadcrumbs: vt, Dedupe: tt, GlobalHandlers: Le, HttpContext: et, LinkedErrors: Ze, TryCatch: yt })
	let Oi = {}
	j.Sentry && j.Sentry.Integrations && (Oi = j.Sentry.Integrations)
	const Js = { ...Oi, ...Os, ...qs }
	var xn = "new",
		Li = "loading",
		Pi = "loaded",
		qt = "joining-meeting",
		Ve = "joined-meeting",
		we = "left-meeting",
		Se = "error",
		Ws = "blocked",
		zs = "off",
		Hs = "sendable",
		Ks = "loading",
		Qs = "interrupted",
		Xs = "playable",
		Jt = "unknown",
		Di = "full",
		Zs = "lobby",
		ec = "none",
		Ii = "base",
		Ni = "*",
		tc = "ejected",
		nc = "nbf-room",
		rc = "nbf-token",
		ic = "exp-room",
		oc = "exp-token",
		ac = "no-room",
		sc = "meeting-full",
		cc = "end-of-life",
		lc = "not-allowed",
		uc = "connection-error",
		dc = "cam-in-use",
		hc = "mic-in-use",
		pc = "cam-mic-in-use",
		fc = "permissions",
		mc = "undefined-mediadevices",
		gc = "not-found",
		vc = "constraints",
		_c = "unknown",
		Ri = "iframe-ready-for-launch-config",
		xi = "iframe-launch-config",
		jn = "theme-updated",
		Fn = "loading",
		Un = "load-attempt-failed",
		Wt = "loaded",
		ji = "started-camera",
		Fi = "camera-error",
		Bn = "joining-meeting",
		Ui = "joined-meeting",
		Bi = "left-meeting",
		Vi = "available-devices-updated",
		Yi = "participant-joined",
		$i = "participant-updated",
		Gi = "participant-left",
		qi = "participant-counts-updated",
		Ji = "access-state-updated",
		Wi = "meeting-session-summary-updated",
		zi = "meeting-session-state-updated",
		yc = "meeting-session-data-error",
		Hi = "waiting-participant-added",
		Ki = "waiting-participant-updated",
		Qi = "waiting-participant-removed",
		Vn = "track-started",
		Yn = "track-stopped",
		Xi = "transcription-started",
		Zi = "transcription-stopped",
		eo = "transcription-error",
		zt = "recording-started",
		Ht = "recording-stopped",
		to = "recording-stats",
		no = "recording-error",
		ro = "recording-upload-completed",
		io = "recording-data",
		oo = "app-message",
		ao = "transcription-message",
		so = "remote-media-player-started",
		co = "remote-media-player-updated",
		lo = "remote-media-player-stopped",
		uo = "local-screen-share-started",
		ho = "local-screen-share-stopped",
		po = "local-screen-share-canceled",
		fo = "active-speaker-change",
		mo = "active-speaker-mode-change",
		go = "network-quality-change",
		vo = "network-connection",
		_o = "cpu-load-change",
		Ye = "fullscreen",
		$e = "exited-fullscreen",
		yo = "live-streaming-started",
		bo = "live-streaming-updated",
		wo = "live-streaming-stopped",
		So = "live-streaming-error",
		Eo = "lang-updated",
		ko = "receive-settings-updated",
		To = "input-settings-updated",
		Kt = "nonfatal-error",
		Qt = "error",
		Co = 102400,
		$n = "iframe-call-message",
		Mo = "local-screen-start",
		Xt = "register-input-handler",
		Ao = "daily-method-update-live-streaming-endpoints",
		bt = "transmit-log",
		wt = "daily-custom-track",
		Zt = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image" },
		Oo = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" },
		Gn = { PLAY: "play", PAUSE: "pause" },
		Lo = 10,
		qn = ["jpg", "png", "jpeg"],
		bc = "add-endpoints",
		wc = "remove-endpoints"
	function de() {
		return !F() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
	}
	function F() {
		return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative"
	}
	function Po() {
		return !!de().match(/iPad|iPhone|iPod/i)
	}
	function Do() {
		return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
	}
	function Sc() {
		return (
			!!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) &&
			((function (n, e) {
				if (!n || !e) return !0
				switch (n) {
					case "Chrome":
						return e.major >= 75
					case "Safari":
						return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0)
					case "Firefox":
						return e.major >= 67
				}
				return !0
			})(Pe(), jo()) ||
				F())
		)
	}
	function Io() {
		if (F() || !document) return !1
		var n = document.createElement("iframe")
		return !!n.requestFullscreen || !!n.webkitRequestFullscreen
	}
	function No() {
		var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0]
		return (
			!F() &&
			(n
				? (function () {
						return Jn() ? !1 : ["Chrome", "Firefox"].includes(Pe())
				  })()
				: (function () {
						if (Jn()) return !1
						var e = Pe()
						if (Po() && e === "Safari") {
							var t = Wn()
							if (t.major === 15 && t.minor < 4) return !1
						}
						return ["Chrome", "Firefox", "Safari"].includes(e)
				  })())
		)
	}
	var Ec = ["Chrome", "Firefox"]
	function Ro() {
		return !F() && !Jn() && typeof AudioWorkletNode < "u" && Ec.includes(Pe())
	}
	function xo() {
		return (
			Do() &&
			!(function () {
				var n,
					e = Pe()
				if (!de()) return !0
				switch (e) {
					case "Chrome":
						return (n = Fo()).major && n.major > 0 && n.major < 61
					case "Firefox":
						return (n = Bo()).major < 78
					case "Safari":
						return (n = Wn()).major < 12
					default:
						return !0
				}
			})()
		)
	}
	function Jn() {
		var n,
			e,
			t = de(),
			r = t.match(/Mac/) && (!F() && typeof window < "u" && (n = window) !== null && n !== void 0 && (e = n.navigator) !== null && e !== void 0 && e.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5
		return !!(t.match(/Mobi/) || t.match(/Android/) || r) || !!de().match(/DailyAnd\//) || void 0
	}
	function Pe() {
		if (typeof window < "u") {
			var n = de()
			return Uo() ? "Safari" : n.indexOf("Edge") > -1 ? "Edge" : n.match(/Chrome\//) ? "Chrome" : n.indexOf("Safari") > -1 ? "Safari" : n.indexOf("Firefox") > -1 ? "Firefox" : n.indexOf("MSIE") > -1 || n.indexOf(".NET") > -1 ? "IE" : "Unknown Browser"
		}
	}
	function jo() {
		switch (Pe()) {
			case "Chrome":
				return Fo()
			case "Safari":
				return Wn()
			case "Firefox":
				return Bo()
			case "Edge":
				return (function () {
					var n = 0,
						e = 0
					if (typeof window < "u") {
						var t = de().match(/Edge\/(\d+).(\d+)/)
						if (t)
							try {
								;(n = parseInt(t[1])), (e = parseInt(t[2]))
							} catch {}
					}
					return { major: n, minor: e }
				})()
		}
	}
	function Fo() {
		var n = 0,
			e = 0,
			t = 0,
			r = 0,
			i = !1
		if (typeof window < "u") {
			var a = de(),
				s = a.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/)
			if (s)
				try {
					;(n = parseInt(s[1])), (e = parseInt(s[2])), (t = parseInt(s[3])), (r = parseInt(s[4])), (i = a.indexOf("OPR/") > -1)
				} catch {}
		}
		return { major: n, minor: e, build: t, patch: r, opera: i }
	}
	function Uo() {
		return Po() && Do()
	}
	function Wn() {
		var n = 0,
			e = 0,
			t = 0
		if (typeof window < "u") {
			var r = de().match(/Version\/(\d+).(\d+)(.(\d+))?/)
			if (r)
				try {
					;(n = parseInt(r[1])), (e = parseInt(r[2])), (t = parseInt(r[4]))
				} catch {}
			else Uo() && ((n = 14), (e = 0), (t = 3))
		}
		return { major: n, minor: e, point: t }
	}
	function Bo() {
		var n = 0,
			e = 0
		if (typeof window < "u") {
			var t = de().match(/Firefox\/(\d+).(\d+)/)
			if (t)
				try {
					;(n = parseInt(t[1])), (e = parseInt(t[2]))
				} catch {}
		}
		return { major: n, minor: e }
	}
	var Vo = (function () {
		function n() {
			ae(this, n)
		}
		return (
			se(n, [
				{
					key: "addListenerForMessagesFromCallMachine",
					value: function (e, t, r) {
						lt()
					},
				},
				{
					key: "addListenerForMessagesFromDailyJs",
					value: function (e, t, r) {
						lt()
					},
				},
				{
					key: "sendMessageToCallMachine",
					value: function (e, t, r, i) {
						lt()
					},
				},
				{
					key: "sendMessageToDailyJs",
					value: function (e, t) {
						lt()
					},
				},
				{
					key: "removeListener",
					value: function (e) {
						lt()
					},
				},
			]),
			n
		)
	})()
	function Yo(n, e) {
		var t = Object.keys(n)
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(n)
			e &&
				(r = r.filter(function (i) {
					return Object.getOwnPropertyDescriptor(n, i).enumerable
				})),
				t.push.apply(t, r)
		}
		return t
	}
	function zn(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e] != null ? arguments[e] : {}
			e % 2
				? Yo(Object(t), !0).forEach(function (r) {
						ke(n, r, t[r])
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
				: Yo(Object(t)).forEach(function (r) {
						Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
				  })
		}
		return n
	}
	function kc(n) {
		var e = (function () {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1
			if (typeof Proxy == "function") return !0
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
			} catch {
				return !1
			}
		})()
		return function () {
			var t,
				r = ce(n)
			if (e) {
				var i = ce(this).constructor
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments)
			return Ct(this, t)
		}
	}
	var Tc = (function (n) {
		Tt(t, Vo)
		var e = kc(t)
		function t() {
			var r
			return ae(this, t), ((r = e.call(this))._wrappedListeners = {}), (r._messageCallbacks = {}), r
		}
		return (
			se(t, [
				{
					key: "addListenerForMessagesFromCallMachine",
					value: function (r, i, a) {
						var s = this,
							l = function (u) {
								if (u.data && u.data.what === "iframe-call-message" && (!u.data.callFrameId || u.data.callFrameId === i) && (!u.data.from || u.data.from !== "module")) {
									var h = zn({}, u.data)
									if ((delete h.from, h.callbackStamp && s._messageCallbacks[h.callbackStamp])) {
										var p = h.callbackStamp
										s._messageCallbacks[p].call(a, h), delete s._messageCallbacks[p]
									}
									delete h.what, delete h.callbackStamp, r.call(a, h)
								}
							}
						;(this._wrappedListeners[r] = l), window.addEventListener("message", l)
					},
				},
				{
					key: "addListenerForMessagesFromDailyJs",
					value: function (r, i, a) {
						var s = function (l) {
							if (!(!l.data || l.data.what !== $n || !l.data.action || (l.data.from && l.data.from !== "module") || (l.data.callFrameId && i && l.data.callFrameId !== i))) {
								var u = l.data
								r.call(a, u)
							}
						}
						;(this._wrappedListeners[r] = s), window.addEventListener("message", s)
					},
				},
				{
					key: "sendMessageToCallMachine",
					value: function (r, i, a, s) {
						if (!s) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?")
						var l = zn({}, r)
						if (((l.what = $n), (l.from = "module"), (l.callFrameId = s), i)) {
							var u = At()
							;(this._messageCallbacks[u] = i), (l.callbackStamp = u)
						}
						var h = a ? a.contentWindow : window,
							p = this._callMachineTargetOrigin(a)
						p && h.postMessage(l, p)
					},
				},
				{
					key: "sendMessageToDailyJs",
					value: function (r, i) {
						;(r.what = $n), (r.callFrameId = i), (r.from = "embedded"), window.postMessage(r, this._targetOriginFromWindowLocation())
					},
				},
				{
					key: "removeListener",
					value: function (r) {
						var i = this._wrappedListeners[r]
						i && (window.removeEventListener("message", i), delete this._wrappedListeners[r])
					},
				},
				{
					key: "forwardPackagedMessageToCallMachine",
					value: function (r, i, a) {
						var s = zn({}, r)
						s.callFrameId = a
						var l = i ? i.contentWindow : window,
							u = this._callMachineTargetOrigin(i)
						u && l.postMessage(s, u)
					},
				},
				{
					key: "addListenerForPackagedMessagesFromCallMachine",
					value: function (r, i) {
						var a = function (s) {
							if (s.data && s.data.what === "iframe-call-message" && (!s.data.callFrameId || s.data.callFrameId === i) && (!s.data.from || s.data.from !== "module")) {
								var l = s.data
								r(l)
							}
						}
						return (this._wrappedListeners[r] = a), window.addEventListener("message", a), r
					},
				},
				{
					key: "removeListenerForPackagedMessagesFromCallMachine",
					value: function (r) {
						var i = this._wrappedListeners[r]
						i && (window.removeEventListener("message", i), delete this._wrappedListeners[r])
					},
				},
				{
					key: "_callMachineTargetOrigin",
					value: function (r) {
						return r ? (r.src ? new URL(r.src).origin : void 0) : this._targetOriginFromWindowLocation()
					},
				},
				{
					key: "_targetOriginFromWindowLocation",
					value: function () {
						return window.location.protocol === "file:" ? "*" : window.location.origin
					},
				},
			]),
			t
		)
	})()
	function Cc(n) {
		var e = (function () {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1
			if (typeof Proxy == "function") return !0
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
			} catch {
				return !1
			}
		})()
		return function () {
			var t,
				r = ce(n)
			if (e) {
				var i = ce(this).constructor
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments)
			return Ct(this, t)
		}
	}
	var Mc = (function (n) {
			Tt(t, Vo)
			var e = Cc(t)
			function t() {
				var r
				return ae(this, t), (r = e.call(this)), (global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new ye.EventEmitter()), (global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new ye.EventEmitter()), (r._wrappedListeners = {}), (r._messageCallbacks = {}), r
			}
			return (
				se(t, [
					{
						key: "addListenerForMessagesFromCallMachine",
						value: function (r, i, a) {
							this._addListener(r, global.callMachineToDailyJsEmitter, a, "received call machine message")
						},
					},
					{
						key: "addListenerForMessagesFromDailyJs",
						value: function (r, i, a) {
							this._addListener(r, global.dailyJsToCallMachineEmitter, a, "received daily-js message")
						},
					},
					{
						key: "sendMessageToCallMachine",
						value: function (r, i) {
							this._sendMessage(r, global.dailyJsToCallMachineEmitter, "sending message to call machine", i)
						},
					},
					{
						key: "sendMessageToDailyJs",
						value: function (r) {
							this._sendMessage(r, global.callMachineToDailyJsEmitter, "sending message to daily-js")
						},
					},
					{
						key: "removeListener",
						value: function (r) {
							var i = this._wrappedListeners[r]
							i && (global.callMachineToDailyJsEmitter.removeListener("message", i), global.dailyJsToCallMachineEmitter.removeListener("message", i), delete this._wrappedListeners[r])
						},
					},
					{
						key: "_addListener",
						value: function (r, i, a, s) {
							var l = this,
								u = function (h) {
									if (h.callbackStamp && l._messageCallbacks[h.callbackStamp]) {
										var p = h.callbackStamp
										l._messageCallbacks[p].call(a, h), delete l._messageCallbacks[p]
									}
									r.call(a, h)
								}
							;(this._wrappedListeners[r] = u), i.addListener("message", u)
						},
					},
					{
						key: "_sendMessage",
						value: function (r, i, a, s) {
							if (s) {
								var l = At()
								;(this._messageCallbacks[l] = s), (r.callbackStamp = l)
							}
							i.emit("message", r)
						},
					},
				]),
				t
			)
		})(),
		Hn = "replace",
		Kn = "shallow-merge",
		$o = [Hn, Kn],
		Ac = (function () {
			function n() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					t = e.data,
					r = e.mergeStrategy,
					i = r === void 0 ? Hn : r
				ae(this, n), n._validateMergeStrategy(i), n._validateData(t, i), (this.mergeStrategy = i), (this.data = t)
			}
			return (
				se(
					n,
					[
						{
							key: "isNoOp",
							value: function () {
								return n.isNoOpUpdate(this.data, this.mergeStrategy)
							},
						},
					],
					[
						{
							key: "isNoOpUpdate",
							value: function (e, t) {
								return Object.keys(e).length === 0 && t === Kn
							},
						},
						{
							key: "_validateMergeStrategy",
							value: function (e) {
								if (!$o.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat($o, "]"))
							},
						},
						{
							key: "_validateData",
							value: function (e, t) {
								if (
									!(function (l) {
										if (l == null || x(l) !== "object") return !1
										var u = Object.getPrototypeOf(l)
										return u == null || u === Object.prototype
									})(e)
								)
									throw Error("Meeting session data must be a plain (map-like) object")
								var r
								try {
									if (((r = JSON.stringify(e)), t === Hn)) {
										var i = JSON.parse(r)
										X(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e)
									} else if (t === Kn) {
										for (var a in e)
											if (Object.hasOwnProperty.call(e, a) && e[a] !== void 0) {
												var s = JSON.parse(JSON.stringify(e[a]))
												X(e[a], s) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", s, e[a])
											}
									}
								} catch (l) {
									throw Error("Meeting session data must be serializable to JSON: ".concat(l))
								}
								if (r.length > Co) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(Co, "."))
							},
						},
					]
				),
				n
			)
		})()
	function Qn(n, e, t) {
		return (
			(Qn = (function () {
				if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1
				if (typeof Proxy == "function") return !0
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
				} catch {
					return !1
				}
			})()
				? Reflect.construct.bind()
				: function (r, i, a) {
						var s = [null]
						s.push.apply(s, i)
						var l = new (Function.bind.apply(r, s))()
						return a && ct(l, a.prototype), l
				  }),
			Qn.apply(null, arguments)
		)
	}
	function Xn(n) {
		var e = typeof Map == "function" ? new Map() : void 0
		return (
			(Xn = function (t) {
				if (t === null || ((r = t), Function.toString.call(r).indexOf("[native code]") === -1)) return t
				var r
				if (typeof t != "function") throw new TypeError("Super expression must either be null or a function")
				if (e !== void 0) {
					if (e.has(t)) return e.get(t)
					e.set(t, i)
				}
				function i() {
					return Qn(t, arguments, ce(this).constructor)
				}
				return (i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } })), ct(i, t)
			}),
			Xn(n)
		)
	}
	function Oc(n) {
		var e = (function () {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1
			if (typeof Proxy == "function") return !0
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
			} catch {
				return !1
			}
		})()
		return function () {
			var t,
				r = ce(n)
			if (e) {
				var i = ce(this).constructor
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments)
			return Ct(this, t)
		}
	}
	var Lc = (function () {
			function n() {
				ae(this, n), (this._currentLoad = null)
			}
			return (
				se(n, [
					{
						key: "load",
						value: function (e, t, r, i) {
							if (this.loaded) return window._dailyCallObjectSetup(e), void r(!0)
							;(function (a, s) {
								window._dailyConfig || (window._dailyConfig = {}), (window._dailyConfig.callFrameId = a), (window._dailyConfig.avoidEval = s)
							})(e, t),
								this._currentLoad && this._currentLoad.cancel(),
								(this._currentLoad = new Pc(function () {
									r(!1)
								}, i)),
								this._currentLoad.start()
						},
					},
					{
						key: "cancel",
						value: function () {
							this._currentLoad && this._currentLoad.cancel()
						},
					},
					{
						key: "loaded",
						get: function () {
							return this._currentLoad && this._currentLoad.succeeded
						},
					},
				]),
				n
			)
		})(),
		Pc = (function () {
			function n(e, t) {
				ae(this, n), (this._attemptsRemaining = 3), (this._currentAttempt = null), (this._successCallback = e), (this._failureCallback = t)
			}
			return (
				se(n, [
					{
						key: "start",
						value: function () {
							var e = this
							this._currentAttempt ||
								((this._currentAttempt = new Go(this._successCallback, function t(r) {
									e._currentAttempt.cancelled ||
										(e._attemptsRemaining--,
										e._failureCallback(r, e._attemptsRemaining > 0),
										e._attemptsRemaining <= 0 ||
											setTimeout(function () {
												e._currentAttempt.cancelled || ((e._currentAttempt = new Go(e._successCallback, t)), e._currentAttempt.start())
											}, 3e3))
								})),
								this._currentAttempt.start())
						},
					},
					{
						key: "cancel",
						value: function () {
							this._currentAttempt && this._currentAttempt.cancel()
						},
					},
					{
						key: "cancelled",
						get: function () {
							return this._currentAttempt && this._currentAttempt.cancelled
						},
					},
					{
						key: "succeeded",
						get: function () {
							return this._currentAttempt && this._currentAttempt.succeeded
						},
					},
				]),
				n
			)
		})(),
		Zn = (function (n) {
			Tt(t, Xn(Error))
			var e = Oc(t)
			function t() {
				return ae(this, t), e.apply(this, arguments)
			}
			return se(t)
		})(),
		en = 2e4,
		Go = (function () {
			function n(t, r) {
				ae(this, n), (this._loadAttemptImpl = F() || !_dailyConfig.avoidEval ? new Dc(t, r) : new Ic(t, r))
			}
			var e
			return (
				se(n, [
					{
						key: "start",
						value:
							((e = C(function* () {
								return this._loadAttemptImpl.start()
							})),
							function () {
								return e.apply(this, arguments)
							}),
					},
					{
						key: "cancel",
						value: function () {
							this._loadAttemptImpl.cancel()
						},
					},
					{
						key: "cancelled",
						get: function () {
							return this._loadAttemptImpl.cancelled
						},
					},
					{
						key: "succeeded",
						get: function () {
							return this._loadAttemptImpl.succeeded
						},
					},
				]),
				n
			)
		})(),
		Dc = (function () {
			function n(a, s) {
				ae(this, n), (this.cancelled = !1), (this.succeeded = !1), (this._networkTimedOut = !1), (this._networkTimeout = null), (this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache), (this._refetchHeaders = null), (this._successCallback = a), (this._failureCallback = s)
			}
			var e, t, r, i
			return (
				se(n, [
					{
						key: "start",
						value:
							((i = C(function* () {
								var a = Ot()
								!(yield this._tryLoadFromIOSCache(a)) && this._loadFromNetwork(a)
							})),
							function () {
								return i.apply(this, arguments)
							}),
					},
					{
						key: "cancel",
						value: function () {
							clearTimeout(this._networkTimeout), (this.cancelled = !0)
						},
					},
					{
						key: "_tryLoadFromIOSCache",
						value:
							((r = C(function* (a) {
								if (!this._iosCache) return !1
								try {
									var s = yield this._iosCache.get(a)
									return !!this.cancelled || (!!s && (s.code ? (Function('"use strict";' + s.code)(), (this.succeeded = !0), this._successCallback(), !0) : ((this._refetchHeaders = s.refetchHeaders), !1)))
								} catch {
									return !1
								}
							})),
							function (a) {
								return r.apply(this, arguments)
							}),
					},
					{
						key: "_loadFromNetwork",
						value:
							((t = C(function* (a) {
								var s = this
								this._networkTimeout = setTimeout(function () {
									;(s._networkTimedOut = !0), s._failureCallback("Timed out (>".concat(en, " ms) when loading call object bundle ").concat(a))
								}, en)
								try {
									var l = this._refetchHeaders ? { headers: this._refetchHeaders } : {},
										u = yield fetch(a, l)
									if ((clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut)) throw new Zn()
									var h = yield this._getBundleCodeFromResponse(a, u)
									if (this.cancelled) throw new Zn()
									Function('"use strict";' + h)(), this._iosCache && this._iosCache.set(a, h, u.headers), (this.succeeded = !0), this._successCallback()
								} catch (p) {
									if ((clearTimeout(this._networkTimeout), p instanceof Zn || this.cancelled || this._networkTimedOut)) return
									this._failureCallback("Failed to load call object bundle ".concat(a, ": ").concat(p))
								}
							})),
							function (a) {
								return t.apply(this, arguments)
							}),
					},
					{
						key: "_getBundleCodeFromResponse",
						value:
							((e = C(function* (a, s) {
								if (s.ok) return yield s.text()
								if (this._iosCache && s.status === 304) return (yield this._iosCache.renew(a, s.headers)).code
								throw new Error("Received ".concat(s.status, " response"))
							})),
							function (a, s) {
								return e.apply(this, arguments)
							}),
					},
				]),
				n
			)
		})(),
		Ic = (function () {
			function n(t, r) {
				ae(this, n), (this.cancelled = !1), (this.succeeded = !1), (this._successCallback = t), (this._failureCallback = r), (this._attemptId = At()), (this._networkTimeout = null), (this._scriptElement = null)
			}
			var e
			return (
				se(n, [
					{
						key: "start",
						value:
							((e = C(function* () {
								window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set())
								var t = Ot()
								;(typeof document > "u" ? "undefined" : x(document)) === "object" ? this._startLoading(t) : this._failureCallback("Call object bundle must be loaded in a DOM/web context")
							})),
							function () {
								return e.apply(this, arguments)
							}),
					},
					{
						key: "cancel",
						value: function () {
							this._stopLoading(), (this.cancelled = !0)
						},
					},
					{
						key: "_startLoading",
						value: function (t) {
							var r = this
							this._signUpForCallMachineLoadWaitlist(),
								(this._networkTimeout = setTimeout(function () {
									r._stopLoading(), r._failureCallback("Timed out (>".concat(en, " ms) when loading call object bundle ").concat(t))
								}, en))
							var i = document.getElementsByTagName("head")[0],
								a = document.createElement("script")
							;(this._scriptElement = a),
								(a.onload = C(function* () {
									r._stopLoading(), (r.succeeded = !0), r._successCallback()
								})),
								(a.onerror = (function () {
									var s = C(function* (l) {
										r._stopLoading(), r._failureCallback("Failed to load call object bundle ".concat(l.target.src))
									})
									return function (l) {
										return s.apply(this, arguments)
									}
								})()),
								(a.src = t),
								i.appendChild(a)
						},
					},
					{
						key: "_stopLoading",
						value: function () {
							this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && ((this._scriptElement.onload = null), (this._scriptElement.onerror = null))
						},
					},
					{
						key: "_signUpForCallMachineLoadWaitlist",
						value: function () {
							window._dailyCallMachineLoadWaitlist.add(this._attemptId)
						},
					},
					{
						key: "_withdrawFromCallMachineLoadWaitlist",
						value: function () {
							window._dailyCallMachineLoadWaitlist.delete(this._attemptId)
						},
					},
				]),
				n
			)
		})(),
		tn = function (n, e, t) {
			return Rc(n.local, e, t) === !0
		},
		Nc = function (n, e, t) {
			return n.local.streams && n.local.streams[e] && n.local.streams[e].stream && n.local.streams[e].stream["get".concat(t === "video" ? "Video" : "Audio", "Tracks")]()[0]
		},
		nt = function (n, e, t, r) {
			var i = xc(n, e, t, r)
			return i && i.pendingTrack
		},
		Rc = function (n, e, t) {
			if (!n) return !1
			var r = function (a) {
					switch (a) {
						case "avatar":
							return !0
						case "staged":
							return a
						default:
							return !!a
					}
				},
				i = n.public.subscribedTracks
			return i && i[e] ? (["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(t) === -1 && i[e].custom ? ([!0, "staged"].includes(i[e].custom) ? r(i[e].custom) : r(i[e].custom[t])) : r(i[e][t])) : !i || r(i.ALL)
		},
		xc = function (n, e, t, r) {
			var i = Object.values(n.streams || {})
				.filter(function (a) {
					return a.participantId === e && a.type === t && a.pendingTrack && a.pendingTrack.kind === r
				})
				.sort(function (a, s) {
					return new Date(s.starttime) - new Date(a.starttime)
				})
			return i && i[0]
		},
		jc = function (n, e) {
			var t = n.local.public.customTracks
			if (t && t[e]) return t[e].track
		}
	function qo(n) {
		for (var e = store.getState(), t = 0, r = ["cam", "screen"]; t < r.length; t++)
			for (var i = r[t], a = 0, s = ["video", "audio"]; a < s.length; a++) {
				var l = s[a],
					u = i === "cam" ? l : "screen".concat(l.charAt(0).toUpperCase() + l.slice(1)),
					h = n.tracks[u]
				if (h) {
					var p = n.local ? Nc(e, i, l) : nt(e, n.session_id, i, l)
					h.state === "playable" && (h.track = p), (h.persistentTrack = p)
				}
			}
	}
	function Jo(n) {
		try {
			var e = store.getState()
			for (var t in n.tracks)
				if (!Fc(t)) {
					var r = n.tracks[t].kind
					if (r) {
						var i = n.tracks[t]
						if (i) {
							var a = n.local ? jc(e, t) : nt(e, n.session_id, t, r)
							i.state === "playable" && (n.tracks[t].track = a), (i.persistentTrack = a)
						}
					} else console.error("unknown type for custom track")
				}
		} catch (s) {
			console.error(s)
		}
	}
	function Fc(n) {
		return ["video", "audio", "screenVideo", "screenAudio"].includes(n)
	}
	function Wo(n, e) {
		var t = store.getState()
		if (n.local) {
			if (n.audio)
				try {
					;(n.audioTrack = t.local.streams.cam.stream.getAudioTracks()[0]), n.audioTrack || (n.audio = !1)
				} catch {}
			if (n.video)
				try {
					;(n.videoTrack = t.local.streams.cam.stream.getVideoTracks()[0]), n.videoTrack || (n.video = !1)
				} catch {}
			if (n.screen)
				try {
					;(n.screenVideoTrack = t.local.streams.screen.stream.getVideoTracks()[0]), (n.screenAudioTrack = t.local.streams.screen.stream.getAudioTracks()[0]), n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1)
				} catch {}
		} else {
			var r = !0
			try {
				var i = t.participants[n.session_id]
				i && i.public && i.public.rtcType && i.public.rtcType.impl === "peer-to-peer" && i.private && !["connected", "completed"].includes(i.private.peeringState) && (r = !1)
			} catch (h) {
				console.error(h)
			}
			if (!r) return (n.audio = !1), (n.audioTrack = !1), (n.video = !1), (n.videoTrack = !1), (n.screen = !1), void (n.screenTrack = !1)
			try {
				if ((t.streams, n.audio && tn(t, n.session_id, "cam-audio"))) {
					var a = nt(t, n.session_id, "cam", "audio")
					a && (e && e.audioTrack && e.audioTrack.id === a.id ? (n.audioTrack = a) : a.muted || (n.audioTrack = a)), n.audioTrack || (n.audio = !1)
				}
				if (n.video && tn(t, n.session_id, "cam-video")) {
					var s = nt(t, n.session_id, "cam", "video")
					s && (e && e.videoTrack && e.videoTrack.id === s.id ? (n.videoTrack = s) : s.muted || (n.videoTrack = s)), n.videoTrack || (n.video = !1)
				}
				if (n.screen && tn(t, n.session_id, "screen-audio")) {
					var l = nt(t, n.session_id, "screen", "audio")
					l && (e && e.screenAudioTrack && e.screenAudioTrack.id === l.id ? (n.screenAudioTrack = l) : l.muted || (n.screenAudioTrack = l))
				}
				if (n.screen && tn(t, n.session_id, "screen-video")) {
					var u = nt(t, n.session_id, "screen", "video")
					u && (e && e.screenVideoTrack && e.screenVideoTrack.id === u.id ? (n.screenVideoTrack = u) : u.muted || (n.screenVideoTrack = u))
				}
				n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1)
			} catch (h) {
				console.error("unexpected error matching up tracks", h)
			}
		}
	}
	function Uc(n, e) {
		var t = (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"]
		if (!t) {
			if (
				Array.isArray(n) ||
				(t = (function (u, h) {
					if (u) {
						if (typeof u == "string") return zo(u, h)
						var p = Object.prototype.toString.call(u).slice(8, -1)
						if ((p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set")) return Array.from(u)
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return zo(u, h)
					}
				})(n)) ||
				(e && n && typeof n.length == "number")
			) {
				t && (n = t)
				var r = 0,
					i = function () {}
				return {
					s: i,
					n: function () {
						return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] }
					},
					e: function (u) {
						throw u
					},
					f: i,
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var a,
			s = !0,
			l = !1
		return {
			s: function () {
				t = t.call(n)
			},
			n: function () {
				var u = t.next()
				return (s = u.done), u
			},
			e: function (u) {
				;(l = !0), (a = u)
			},
			f: function () {
				try {
					s || t.return == null || t.return()
				} finally {
					if (l) throw a
				}
			},
		}
	}
	function zo(n, e) {
		;(e == null || e > n.length) && (e = n.length)
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t]
		return r
	}
	var he = new Map(),
		rt = null
	function Bc(n, e) {
		var t = (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"]
		if (!t) {
			if (
				Array.isArray(n) ||
				(t = (function (u, h) {
					if (u) {
						if (typeof u == "string") return Ho(u, h)
						var p = Object.prototype.toString.call(u).slice(8, -1)
						if ((p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set")) return Array.from(u)
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Ho(u, h)
					}
				})(n)) ||
				(e && n && typeof n.length == "number")
			) {
				t && (n = t)
				var r = 0,
					i = function () {}
				return {
					s: i,
					n: function () {
						return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] }
					},
					e: function (u) {
						throw u
					},
					f: i,
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var a,
			s = !0,
			l = !1
		return {
			s: function () {
				t = t.call(n)
			},
			n: function () {
				var u = t.next()
				return (s = u.done), u
			},
			e: function (u) {
				;(l = !0), (a = u)
			},
			f: function () {
				try {
					s || t.return == null || t.return()
				} finally {
					if (l) throw a
				}
			},
		}
	}
	function Ho(n, e) {
		;(e == null || e > n.length) && (e = n.length)
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t]
		return r
	}
	var pe = new Map(),
		St = null,
		Vc = 3e3
	function Yc(n) {
		Ko()
			? (function (e) {
					he.has(e) ||
						(he.set(e, {}),
						navigator.mediaDevices.enumerateDevices().then(function (t) {
							he.has(e) &&
								((he.get(e).lastDevicesString = JSON.stringify(t)),
								rt ||
									((rt = (function () {
										var r = C(function* () {
											var i,
												a = yield navigator.mediaDevices.enumerateDevices(),
												s = Uc(he.keys())
											try {
												for (s.s(); !(i = s.n()).done; ) {
													var l = i.value,
														u = JSON.stringify(a)
													u !== he.get(l).lastDevicesString && ((he.get(l).lastDevicesString = u), l(a))
												}
											} catch (h) {
												s.e(h)
											} finally {
												s.f()
											}
										})
										return function () {
											return r.apply(this, arguments)
										}
									})()),
									navigator.mediaDevices.addEventListener("devicechange", rt)))
						}))
			  })(n)
			: (function (e) {
					pe.has(e) ||
						(pe.set(e, {}),
						navigator.mediaDevices.enumerateDevices().then(function (t) {
							pe.has(e) &&
								((pe.get(e).lastDevicesString = JSON.stringify(t)),
								St ||
									(St = setInterval(
										C(function* () {
											var r,
												i = yield navigator.mediaDevices.enumerateDevices(),
												a = Bc(pe.keys())
											try {
												for (a.s(); !(r = a.n()).done; ) {
													var s = r.value,
														l = JSON.stringify(i)
													l !== pe.get(s).lastDevicesString && ((pe.get(s).lastDevicesString = l), s(i))
												}
											} catch (u) {
												a.e(u)
											} finally {
												a.f()
											}
										}),
										Vc
									)))
						}))
			  })(n)
	}
	function $c(n) {
		Ko()
			? (function (e) {
					he.has(e) && (he.delete(e), he.size === 0 && rt && (navigator.mediaDevices.removeEventListener("devicechange", rt), (rt = null)))
			  })(n)
			: (function (e) {
					pe.has(e) && (pe.delete(e), pe.size === 0 && St && (clearInterval(St), (St = null)))
			  })(n)
	}
	function Ko() {
		return F() || navigator.mediaDevices.ondevicechange !== void 0
	}
	var Gc = new Set()
	function qc(n, e) {
		var t = e.isLocalScreenVideo
		return (
			n &&
			n.readyState === "live" &&
			!(function (r, i) {
				return (!i.isLocalScreenVideo || Pe() !== "Chrome") && r.muted && !Gc.has(r.id)
			})(n, { isLocalScreenVideo: t })
		)
	}
	var fe,
		Jc = ["videoTrack"],
		Wc = ["result"],
		zc = ["preserveIframe"]
	function Qo(n, e) {
		var t = Object.keys(n)
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(n)
			e &&
				(r = r.filter(function (i) {
					return Object.getOwnPropertyDescriptor(n, i).enumerable
				})),
				t.push.apply(t, r)
		}
		return t
	}
	function A(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e] != null ? arguments[e] : {}
			e % 2
				? Qo(Object(t), !0).forEach(function (r) {
						ke(n, r, t[r])
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
				: Qo(Object(t)).forEach(function (r) {
						Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
				  })
		}
		return n
	}
	function Hc(n) {
		var e = (function () {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1
			if (typeof Proxy == "function") return !0
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
			} catch {
				return !1
			}
		})()
		return function () {
			var t,
				r = ce(n)
			if (e) {
				var i = ce(this).constructor
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments)
			return Ct(this, t)
		}
	}
	function Xo(n, e) {
		var t = (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"]
		if (!t) {
			if (
				Array.isArray(n) ||
				(t = (function (u, h) {
					if (u) {
						if (typeof u == "string") return Zo(u, h)
						var p = Object.prototype.toString.call(u).slice(8, -1)
						if ((p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set")) return Array.from(u)
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Zo(u, h)
					}
				})(n)) ||
				(e && n && typeof n.length == "number")
			) {
				t && (n = t)
				var r = 0,
					i = function () {}
				return {
					s: i,
					n: function () {
						return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] }
					},
					e: function (u) {
						throw u
					},
					f: i,
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var a,
			s = !0,
			l = !1
		return {
			s: function () {
				t = t.call(n)
			},
			n: function () {
				var u = t.next()
				return (s = u.done), u
			},
			e: function (u) {
				;(l = !0), (a = u)
			},
			f: function () {
				try {
					s || t.return == null || t.return()
				} finally {
					if (l) throw a
				}
			},
		}
	}
	function Zo(n, e) {
		;(e == null || e > n.length) && (e = n.length)
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t]
		return r
	}
	var ea = "video",
		Kc = "voice",
		ta = F() ? { data: {} } : { data: {}, topology: "none" },
		na = { present: 0, hidden: 0 },
		ra = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } },
		er = Object.keys(ra),
		ia = ["state", "volume", "simulcastEncodings"],
		oa = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } },
		nn = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } },
		tr = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } },
		Ge = {
			customIntegrations: { validate: pa, help: da() },
			customTrayButtons: { validate: ha, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(nn)) },
			url: {
				validate: function (n) {
					return typeof n == "string"
				},
				help: "url should be a string",
			},
			baseUrl: {
				validate: function (n) {
					return typeof n == "string"
				},
				help: "baseUrl should be a string",
			},
			token: {
				validate: function (n) {
					return typeof n == "string"
				},
				help: "token should be a string",
				queryString: "t",
			},
			dailyConfig: {
				validate: function (n, e) {
					try {
						return e.validateDailyConfig(n), window._dailyConfig || (window._dailyConfig = {}), (window._dailyConfig.experimentalGetUserMediaConstraintsModify = n.experimentalGetUserMediaConstraintsModify), (window._dailyConfig.userMediaVideoConstraints = n.userMediaVideoConstraints), (window._dailyConfig.userMediaAudioConstraints = n.userMediaAudioConstraints), (window._dailyConfig.callObjectBundleUrlOverride = n.callObjectBundleUrlOverride), (window._dailyConfig.proxyUrl = n.proxyUrl), (window._dailyConfig.iceConfig = n.iceConfig), !0
					} catch (t) {
						console.error("Failed to validate dailyConfig", t)
					}
					return !1
				},
				help: "Unsupported dailyConfig. Check error logs for detailed info.",
			},
			reactNativeConfig: {
				validate: function (n) {
					return fa(n, oa)
				},
				help: "reactNativeConfig should look like ".concat(JSON.stringify(oa), ", all fields optional"),
			},
			lang: {
				validate: function (n) {
					return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(n)
				},
				help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user",
			},
			userName: !0,
			userData: {
				validate: function (n) {
					try {
						return sa(n), !0
					} catch (e) {
						return console.error(e), !1
					}
				},
				help: "invalid userData type provided",
			},
			startVideoOff: !0,
			startAudioOff: !0,
			activeSpeakerMode: !0,
			showLeaveButton: !0,
			showLocalVideo: !0,
			showParticipantsBar: !0,
			showFullscreenButton: !0,
			showUserNameChangeUI: !0,
			iframeStyle: !0,
			customLayout: !0,
			cssFile: !0,
			cssText: !0,
			bodyClass: !0,
			videoSource: {
				validate: function (n, e) {
					return (e._preloadCache.videoDeviceId = n), !0
				},
			},
			audioSource: {
				validate: function (n, e) {
					return (e._preloadCache.audioDeviceId = n), !0
				},
			},
			subscribeToTracksAutomatically: {
				validate: function (n, e) {
					return (e._preloadCache.subscribeToTracksAutomatically = n), !0
				},
			},
			theme: {
				validate: function (n) {
					var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"],
						t = function (r) {
							for (var i = 0, a = Object.keys(r); i < a.length; i++) {
								var s = a[i]
								if (!e.includes(s)) return console.error('unsupported color "'.concat(s, '". Valid colors: ').concat(e.join(", "))), !1
								if (!r[s].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(s, ' theme color should be provided in valid hex color format. Received: "').concat(r[s], '"')), !1
							}
							return !0
						}
					return x(n) === "object" && (("light" in n && "dark" in n) || "colors" in n) ? ("light" in n && "dark" in n ? ("colors" in n.light ? ("colors" in n.dark ? t(n.light.colors) && t(n.dark.colors) : (console.error('Dark theme is missing "colors" property.', n), !1)) : (console.error('Light theme is missing "colors" property.', n), !1)) : t(n.colors)) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', n), !1)
				},
				help: "unsupported theme configuration. Check error logs for detailed info.",
			},
			layoutConfig: {
				validate: function (n) {
					if ("grid" in n) {
						var e = n.grid
						if ("maxTilesPerPage" in e) {
							if (!Number.isInteger(e.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1
							if (e.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1
						}
						if ("minTilesPerPage" in e) {
							if (!Number.isInteger(e.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1
							if (e.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1
							if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1
						}
					}
					return !0
				},
				help: "unsupported layoutConfig. Check error logs for detailed info.",
			},
			receiveSettings: {
				validate: function (n) {
					return ca(n, { allowAllParticipantsKey: !1 })
				},
				help: ua({ allowAllParticipantsKey: !1 }),
			},
			sendSettings: {
				validate: function (n, e) {
					return (
						!!(function (t, r) {
							try {
								return r.validateUpdateSendSettings(t), !0
							} catch (i) {
								return console.error("Failed to validate send settings", i), !1
							}
						})(n, e) && ((e._preloadCache.sendSettings = n), !0)
					)
				},
				help: "Invalid sendSettings provided. Check error logs for detailed info.",
			},
			inputSettings: {
				validate: function (n, e) {
					return !!rr(n) && (e._preloadCache.inputSettings || (e._preloadCache.inputSettings = {}), la(n), n.audio && (e._preloadCache.inputSettings.audio = n.audio), n.video && (e._preloadCache.inputSettings.video = n.video), !0)
				},
				help: ir(),
			},
			layout: {
				validate: function (n) {
					return n === "custom-v1" || n === "browser" || n === "none"
				},
				help: 'layout may only be set to "custom-v1"',
				queryString: "layout",
			},
			emb: { queryString: "emb" },
			embHref: { queryString: "embHref" },
			dailyJsVersion: { queryString: "dailyJsVersion" },
			proxy: { queryString: "proxy" },
			strictMode: !0,
		},
		rn = {
			styles: {
				validate: function (n) {
					for (var e in n) if (e !== "cam" && e !== "screen") return !1
					if (n.cam) {
						for (var t in n.cam) if (t !== "div" && t !== "video") return !1
					}
					if (n.screen) {
						for (var r in n.screen) if (r !== "div" && r !== "video") return !1
					}
					return !0
				},
				help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }",
			},
			setSubscribedTracks: {
				validate: function (n, e) {
					if (e._preloadCache.subscribeToTracksAutomatically) return !1
					var t = [!0, !1, "staged"]
					if (t.includes(n) || (!F() && n === "avatar")) return !0
					var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"]
					return (function i(a) {
						var s = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
						for (var l in a)
							if (l === "custom") {
								if (!t.includes(a[l]) && !i(a[l], !0)) return !1
							} else {
								var u = !s && !r.includes(l),
									h = !t.includes(a[l])
								if (u || h) return !1
							}
						return !0
					})(n)
				},
				help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(F() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }"),
			},
			setAudio: !0,
			setVideo: !0,
			setScreenShare: {
				validate: function (n) {
					return n === !1
				},
				help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares",
			},
			eject: !0,
			updatePermissions: {
				validate: function (n) {
					for (var e = 0, t = Object.entries(n); e < t.length; e++) {
						var r = Ne(t[e], 2),
							i = r[0],
							a = r[1]
						switch (i) {
							case "hasPresence":
								if (typeof a != "boolean") return !1
								break
							case "canSend":
								if (a instanceof Set || a instanceof Array) {
									var s,
										l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"],
										u = Xo(a)
									try {
										for (u.s(); !(s = u.n()).done; ) {
											var h = s.value
											if (!l.includes(h)) return !1
										}
									} catch (b) {
										u.e(b)
									} finally {
										u.f()
									}
								} else if (typeof a != "boolean") return !1
								a instanceof Array && (n.canSend = new Set(a))
								break
							case "canAdmin":
								if (a instanceof Set || a instanceof Array) {
									var p,
										m = ["participants", "streaming", "transcription"],
										y = Xo(a)
									try {
										for (y.s(); !(p = y.n()).done; ) {
											var S = p.value
											if (!m.includes(S)) return !1
										}
									} catch (b) {
										y.e(b)
									} finally {
										y.f()
									}
								} else if (typeof a != "boolean") return !1
								a instanceof Array && (n.canAdmin = new Set(a))
								break
							default:
								return !1
						}
					}
					return !0
				},
				help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription).",
			},
		},
		Qc = (function (n) {
			Tt(re, ye)
			var e,
				t,
				r,
				i,
				a,
				s,
				l,
				u,
				h,
				p,
				m,
				y,
				S,
				b,
				w,
				T,
				L,
				Y,
				Ie,
				at,
				kt,
				La,
				Pa,
				Da,
				Ia,
				Na,
				Ra,
				xa,
				ja,
				Fa,
				Ua,
				Ba,
				Va,
				Ya,
				$a,
				Ga,
				qa,
				Ja,
				kl = Hc(re)
			function re(o) {
				var c,
					d,
					f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
				if (
					(ae(this, re),
					ke(_e((c = kl.call(this))), "startListeningForDeviceChanges", function () {
						Yc(c.handleDeviceChange)
					}),
					ke(_e(c), "stopListeningForDeviceChanges", function () {
						$c(c.handleDeviceChange)
					}),
					ke(_e(c), "handleDeviceChange", function (_) {
						;(_ = _.map(function (E) {
							return JSON.parse(JSON.stringify(E))
						})),
							c.emit(Vi, { action: Vi, availableDevices: _ })
					}),
					ke(_e(c), "handleNativeAppActiveStateChange", function (_) {
						c.disableReactNativeAutoDeviceManagement("video") || (_ ? c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!0) : ((c.camUnmutedBeforeLosingNativeActiveState = c.localVideo()), c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!1)))
					}),
					ke(_e(c), "handleNativeAudioFocusChange", function (_) {
						c.disableReactNativeAutoDeviceManagement("audio") || ((c._hasNativeAudioFocus = _), c.toggleParticipantAudioBasedOnNativeAudioFocus(), c._hasNativeAudioFocus ? c.micUnmutedBeforeLosingNativeAudioFocus && c.setLocalAudio(!0) : ((c.micUnmutedBeforeLosingNativeAudioFocus = c.localAudio()), c.setLocalAudio(!1)))
					}),
					ke(_e(c), "handleNativeSystemScreenCaptureStop", function () {
						c.stopScreenShare()
					}),
					(c.strictMode = f.strictMode === void 0 || f.strictMode),
					fe)
				) {
					if ((c._logDuplicateInstanceAttempt(), c.strictMode)) throw new Error("Duplicate DailyIframe instances are not allowed")
				} else (d = _e(c)), (fe = d)
				if (
					((f.dailyJsVersion = re.version()),
					(c._iframe = o),
					(c._callObjectMode = f.layout === "none" && !c._iframe),
					(c._preloadCache = { subscribeToTracksAutomatically: !0, audioDeviceId: null, videoDeviceId: null, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }),
					c._callObjectMode && (window._dailyPreloadCache = c._preloadCache),
					f.showLocalVideo !== void 0 ? (c._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : (c._showLocalVideo = !!f.showLocalVideo)) : (c._showLocalVideo = !0),
					f.showParticipantsBar !== void 0 ? (c._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : (c._showParticipantsBar = !!f.showParticipantsBar)) : (c._showParticipantsBar = !0),
					f.customIntegrations !== void 0 ? (c._callObjectMode ? console.error("customIntegrations is not available in call object mode") : (c._customIntegrations = f.customIntegrations)) : (c._customIntegrations = {}),
					f.customTrayButtons !== void 0 ? (c._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : (c._customTrayButtons = f.customTrayButtons)) : (c._customTrayButtons = {}),
					f.activeSpeakerMode !== void 0 ? (c._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : (c._activeSpeakerMode = !!f.activeSpeakerMode)) : (c._activeSpeakerMode = !1),
					f.receiveSettings ? (c._callObjectMode ? (c._receiveSettings = f.receiveSettings) : console.error("receiveSettings is only available in call object mode")) : (c._receiveSettings = {}),
					c.validateProperties(f),
					(c.properties = A({}, f)),
					c._preloadCache.inputSettings || (c._preloadCache.inputSettings = {}),
					f.inputSettings && f.inputSettings.audio && (c._preloadCache.inputSettings.audio = f.inputSettings.audio),
					f.inputSettings && f.inputSettings.video && (c._preloadCache.inputSettings.video = f.inputSettings.video),
					(c._callObjectLoader = c._callObjectMode ? new Lc() : null),
					(c._callState = xn),
					(c._isPreparingToJoin = !1),
					(c._accessState = { access: Jt }),
					(c._meetingSessionSummary = {}),
					(c._finalSummaryOfPrevSession = {}),
					(c._meetingSessionState = or(ta, c._callObjectMode)),
					(c._nativeInCallAudioMode = ea),
					(c._participants = {}),
					(c._participantCounts = na),
					(c._rmpPlayerState = {}),
					(c._waitingParticipants = {}),
					(c._inputEventsOn = {}),
					(c._network = { threshold: "good", quality: 100 }),
					(c._activeSpeaker = {}),
					(c._callFrameId = At()),
					(c._localAudioLevel = 0),
					(c._remoteParticipantsAudioLevel = {}),
					(c._messageChannel = F() ? new Mc() : new Tc()),
					c._iframe &&
						(c._iframe.requestFullscreen
							? c._iframe.addEventListener("fullscreenchange", function () {
									document.fullscreenElement === c._iframe ? (c.emit(Ye, { action: Ye }), c.sendMessageToCallMachine({ action: Ye })) : (c.emit($e, { action: $e }), c.sendMessageToCallMachine({ action: $e }))
							  })
							: c._iframe.webkitRequestFullscreen &&
							  c._iframe.addEventListener("webkitfullscreenchange", function () {
									document.webkitFullscreenElement === c._iframe ? (c.emit(Ye, { action: Ye }), c.sendMessageToCallMachine({ action: Ye })) : (c.emit($e, { action: $e }), c.sendMessageToCallMachine({ action: $e }))
							  })),
					F())
				) {
					var g = c.nativeUtils()
					;(g.addAudioFocusChangeListener && g.removeAudioFocusChangeListener && g.addAppActiveStateChangeListener && g.removeAppActiveStateChangeListener && g.addSystemScreenCaptureStopListener && g.removeSystemScreenCaptureStopListener) || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), (c._hasNativeAudioFocus = !0), g.addAudioFocusChangeListener(c.handleNativeAudioFocusChange), g.addAppActiveStateChangeListener(c.handleNativeAppActiveStateChange), g.addSystemScreenCaptureStopListener(c.handleNativeSystemScreenCaptureStop)
				}
				return c._callObjectMode && c.startListeningForDeviceChanges(), c._messageChannel.addListenerForMessagesFromCallMachine(c.handleMessageFromCallMachine, c._callFrameId, _e(c)), c
			}
			return (
				se(
					re,
					[
						{
							key: "destroy",
							value:
								((Ja = C(function* () {
									try {
										yield this.leave()
									} catch {}
									var o = this._iframe
									if (o) {
										var c = o.parentElement
										c && c.removeChild(o)
									}
									if ((this._messageChannel.removeListener(this.handleMessageFromCallMachine), F())) {
										var d = this.nativeUtils()
										d.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), d.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange), d.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop)
									}
									this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), (this._destroyed = !0)
									try {
										this.emit("call-instance-destroyed", { action: "call-instance-destroyed" })
									} catch {
										console.log("could not emit call-instance-destroyed")
									}
									this.strictMode && (this._callFrameId = void 0), (fe = void 0)
								})),
								function () {
									return Ja.apply(this, arguments)
								}),
						},
						{
							key: "isDestroyed",
							value: function () {
								return !!this._destroyed
							},
						},
						{
							key: "loadCss",
							value: function (o) {
								var c = o.bodyClass,
									d = o.cssFile,
									f = o.cssText
								return P(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(d), bodyClass: c, cssText: f }), this
							},
						},
						{
							key: "iframe",
							value: function () {
								return P(), this._iframe
							},
						},
						{
							key: "meetingState",
							value: function () {
								return this._callState
							},
						},
						{
							key: "accessState",
							value: function () {
								return me(this._callObjectMode, "accessState()"), this._accessState
							},
						},
						{
							key: "participants",
							value: function () {
								return this._participants
							},
						},
						{
							key: "participantCounts",
							value: function () {
								return this._participantCounts
							},
						},
						{
							key: "waitingParticipants",
							value: function () {
								return me(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants
							},
						},
						{
							key: "validateParticipantProperties",
							value: function (o, c) {
								for (var d in c) {
									if (!rn[d]) throw new Error("unrecognized updateParticipant property ".concat(d))
									if (rn[d].validate && !rn[d].validate(c[d], this, this._participants[o])) throw new Error(rn[d].help)
								}
							},
						},
						{
							key: "updateParticipant",
							value: function (o, c) {
								return this._participants.local && this._participants.local.session_id === o && (o = "local"), o && c && (this.validateParticipantProperties(o, c), this.sendMessageToCallMachine({ action: "update-participant", id: o, properties: c })), this
							},
						},
						{
							key: "updateParticipants",
							value: function (o) {
								var c = this._participants.local && this._participants.local.session_id
								for (var d in o) d === c && (d = "local"), d && o[d] && this.validateParticipantProperties(d, o[d])
								return this.sendMessageToCallMachine({ action: "update-participants", participants: o }), this
							},
						},
						{
							key: "updateWaitingParticipant",
							value:
								((qa = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
										d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
									if ((me(this._callObjectMode, "updateWaitingParticipant()"), B(this._callState, "updateWaitingParticipant()"), typeof c != "string" || x(d) !== "object")) throw new Error("updateWaitingParticipant() must take an id string and a updates object")
									return new Promise(function (f, g) {
										o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: c, updates: d }, function (_) {
											_.error && g(_.error), _.id || g(new Error("unknown error in updateWaitingParticipant()")), f({ id: _.id })
										})
									})
								})),
								function () {
									return qa.apply(this, arguments)
								}),
						},
						{
							key: "updateWaitingParticipants",
							value:
								((Ga = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
									if ((me(this._callObjectMode, "updateWaitingParticipants()"), B(this._callState, "updateWaitingParticipants()"), x(c) !== "object")) throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects")
									return new Promise(function (d, f) {
										o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: c }, function (g) {
											g.error && f(g.error), g.ids || f(new Error("unknown error in updateWaitingParticipants()")), d({ ids: g.ids })
										})
									})
								})),
								function () {
									return Ga.apply(this, arguments)
								}),
						},
						{
							key: "requestAccess",
							value:
								(($a = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
										d = c.access,
										f = d === void 0 ? { level: Di } : d,
										g = c.name,
										_ = g === void 0 ? "" : g
									return (
										me(this._callObjectMode, "requestAccess()"),
										B(this._callState, "requestAccess()"),
										new Promise(function (E, k) {
											o.sendMessageToCallMachine({ action: "daily-method-request-access", access: f, name: _ }, function (R) {
												R.error && k(R.error), R.access || k(new Error("unknown error in requestAccess()")), E({ access: R.access, granted: R.granted })
											})
										})
									)
								})),
								function () {
									return $a.apply(this, arguments)
								}),
						},
						{
							key: "localAudio",
							value: function () {
								return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null
							},
						},
						{
							key: "localVideo",
							value: function () {
								return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null
							},
						},
						{
							key: "setLocalAudio",
							value: function (o) {
								return this.sendMessageToCallMachine({ action: "local-audio", state: o }), this
							},
						},
						{
							key: "setLocalVideo",
							value: function (o) {
								return this.sendMessageToCallMachine({ action: "local-video", state: o }), this
							},
						},
						{
							key: "getReceiveSettings",
							value:
								((Ya = C(function* (o) {
									var c = this,
										d = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues,
										f = d !== void 0 && d
									if ((me(this._callObjectMode, "getReceiveSettings()"), !this._dailyMainExecuted)) return this._receiveSettings
									switch (x(o)) {
										case "string":
											return new Promise(function (g) {
												c.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: o, showInheritedValues: f }, function (_) {
													g(_.receiveSettings)
												})
											})
										case "undefined":
											return this._receiveSettings
										default:
											throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments')
									}
								})),
								function (o) {
									return Ya.apply(this, arguments)
								}),
						},
						{
							key: "updateReceiveSettings",
							value:
								((Va = C(function* (o) {
									var c = this
									if ((me(this._callObjectMode, "updateReceiveSettings()"), !ca(o, { allowAllParticipantsKey: !0 }))) throw new Error(ua({ allowAllParticipantsKey: !0 }))
									return (
										B(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."),
										new Promise(function (d) {
											c.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: o }, function (f) {
												d({ receiveSettings: f.receiveSettings })
											})
										})
									)
								})),
								function (o) {
									return Va.apply(this, arguments)
								}),
						},
						{
							key: "_prepInputSettingsToPresentToUser",
							value: function (o) {
								var c, d, f, g, _, E, k, R
								if (o) {
									var q = {},
										H = ((c = o.audio) === null || c === void 0 || (d = c.processor) === null || d === void 0 ? void 0 : d.type) === "none" && ((f = o.audio) === null || f === void 0 || (g = f.processor) === null || g === void 0 ? void 0 : g._isDefaultWhenNone)
									if (o.audio && !H) {
										var K = A({}, o.audio.processor)
										delete K._isDefaultWhenNone, (q.audio = A(A({}, o.audio), {}, { processor: K }))
									}
									var ie = ((_ = o.video) === null || _ === void 0 || (E = _.processor) === null || E === void 0 ? void 0 : E.type) === "none" && ((k = o.video) === null || k === void 0 || (R = k.processor) === null || R === void 0 ? void 0 : R._isDefaultWhenNone)
									if (o.video && !ie) {
										var J = A({}, o.video.processor)
										delete J._isDefaultWhenNone, (q.video = A(A({}, o.video), {}, { processor: J }))
									}
									return q
								}
							},
						},
						{
							key: "getInputSettings",
							value: function () {
								var o = this
								return new Promise(function (c) {
									c(o._getInputSettings())
								})
							},
						},
						{
							key: "_getInputSettings",
							value: function () {
								var o,
									c,
									d,
									f,
									g,
									_,
									E,
									k,
									R = { processor: { type: "none", _isDefaultWhenNone: !0 } }
								this._inputSettings ? ((o = ((d = this._inputSettings) === null || d === void 0 ? void 0 : d.video) || R), (c = ((f = this._inputSettings) === null || f === void 0 ? void 0 : f.audio) || R)) : ((o = ((g = this._preloadCache) === null || g === void 0 || (_ = g.inputSettings) === null || _ === void 0 ? void 0 : _.video) || R), (c = ((E = this._preloadCache) === null || E === void 0 || (k = E.inputSettings) === null || k === void 0 ? void 0 : k.audio) || R))
								var q = { audio: c, video: o }
								return this._prepInputSettingsToPresentToUser(q)
							},
						},
						{
							key: "updateInputSettings",
							value:
								((Ba = C(function* (o) {
									var c = this
									return rr(o)
										? (o && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), la(o), o.audio && (this._preloadCache.inputSettings.audio = o.audio), o.video && (this._preloadCache.inputSettings.video = o.video)),
										  rr(o)
												? this._callObjectMode && this.needsLoad()
													? this._getInputSettings()
													: new Promise(function (d, f) {
															c.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: o }, function (g) {
																g.error ? f(g.error) : d({ inputSettings: c._prepInputSettingsToPresentToUser(g.inputSettings) })
															})
													  })
												: this._getInputSettings())
										: (console.error(ir()), Promise.reject(ir()))
								})),
								function (o) {
									return Ba.apply(this, arguments)
								}),
						},
						{
							key: "setBandwidth",
							value: function (o) {
								var c = o.kbs,
									d = o.trackConstraints
								if ((P(), this._dailyMainExecuted)) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: c, trackConstraints: d }), this
							},
						},
						{
							key: "getDailyLang",
							value: function () {
								var o = this
								if ((P(), this._dailyMainExecuted))
									return new Promise(function (c) {
										o.sendMessageToCallMachine({ action: "get-daily-lang" }, function (d) {
											delete d.action, delete d.callbackStamp, c(d)
										})
									})
							},
						},
						{
							key: "setDailyLang",
							value: function (o) {
								return P(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: o }), this
							},
						},
						{
							key: "setProxyUrl",
							value: function (o) {
								return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: o }), this
							},
						},
						{
							key: "setIceConfig",
							value: function (o) {
								return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: o }), this
							},
						},
						{
							key: "meetingSessionSummary",
							value: function () {
								return [we, Se].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary
							},
						},
						{
							key: "getMeetingSession",
							value:
								((Ua = C(function* () {
									var o = this
									return (
										console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"),
										B(this._callState, "getMeetingSession()"),
										new Promise(function (c) {
											o.sendMessageToCallMachine({ action: "get-meeting-session" }, function (d) {
												delete d.action, delete d.callbackStamp, delete d.callFrameId, c(d)
											})
										})
									)
								})),
								function () {
									return Ua.apply(this, arguments)
								}),
						},
						{
							key: "meetingSessionState",
							value: function () {
								return B(this._callState, "meetingSessionState"), this._meetingSessionState
							},
						},
						{
							key: "setMeetingSessionData",
							value: function (o) {
								var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace"
								me(this._callObjectMode, "setMeetingSessionData()"), B(this._callState, "setMeetingSessionData")
								try {
									;(function (d, f) {
										new Ac({ data: d, mergeStrategy: f })
									})(o, c)
								} catch (d) {
									throw (console.error(d), d)
								}
								try {
									this.sendMessageToCallMachine({ action: "set-session-data", data: o, mergeStrategy: c })
								} catch (d) {
									throw new Error("Error setting meeting session data: ".concat(d))
								}
							},
						},
						{
							key: "setUserName",
							value: function (o, c) {
								var d = this
								return (
									(this.properties.userName = o),
									new Promise(function (f) {
										d.sendMessageToCallMachine({ action: "set-user-name", name: o ?? "", thisMeetingOnly: F() || (!!c && !!c.thisMeetingOnly) }, function (g) {
											delete g.action, delete g.callbackStamp, f(g)
										})
									})
								)
							},
						},
						{
							key: "setUserData",
							value:
								((Fa = C(function* (o) {
									var c = this
									try {
										sa(o)
									} catch (d) {
										throw (console.error(d), d)
									}
									if (((this.properties.userData = o), this._dailyMainExecuted))
										return new Promise(function (d) {
											try {
												c.sendMessageToCallMachine({ action: "set-user-data", userData: o }, function (f) {
													delete f.action, delete f.callbackStamp, delete f.callFrameId, d(f)
												})
											} catch (f) {
												throw new Error("Error setting user data: ".concat(f))
											}
										})
								})),
								function (o) {
									return Fa.apply(this, arguments)
								}),
						},
						{
							key: "validateAudioLevelInterval",
							value: function (o) {
								if (o && (o < 100 || typeof o != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.")
							},
						},
						{
							key: "startLocalAudioLevelObserver",
							value: function (o) {
								var c = this
								if ((P(), this.validateAudioLevelInterval(o), this._dailyMainExecuted))
									return new Promise(function (d, f) {
										c.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: o }, function (g) {
											g.error ? f({ error: g.error }) : d()
										})
									})
								this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: o }
							},
						},
						{
							key: "stopLocalAudioLevelObserver",
							value:
								((ja = C(function* () {
									P(), (this._preloadCache.localAudioLevelObserver = null), (this._localAudioLevel = 0), this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" })
								})),
								function () {
									return ja.apply(this, arguments)
								}),
						},
						{
							key: "startRemoteParticipantsAudioLevelObserver",
							value: function (o) {
								var c = this
								if ((P(), this.validateAudioLevelInterval(o), this._dailyMainExecuted))
									return new Promise(function (d, f) {
										c.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: o }, function (g) {
											g.error ? f({ error: g.error }) : d()
										})
									})
								this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: o }
							},
						},
						{
							key: "stopRemoteParticipantsAudioLevelObserver",
							value:
								((xa = C(function* () {
									P(), (this._preloadCache.remoteParticipantsAudioLevelObserver = null), (this._remoteParticipantsAudioLevel = {}), this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" })
								})),
								function () {
									return xa.apply(this, arguments)
								}),
						},
						{
							key: "startCamera",
							value:
								((Ra = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
									if ((me(this._callObjectMode, "startCamera()"), aa(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), qe(this._testCallInProgress, "startCamera()"), this.needsLoad()))
										try {
											yield this.load(c)
										} catch (d) {
											return Promise.reject(d)
										}
									else {
										if (this._didPreAuth) {
											if (c.url && c.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject()
											if (c.token && c.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject()
										}
										this.validateProperties(c), (this.properties = A(A({}, this.properties), c))
									}
									return new Promise(function (d) {
										o.sendMessageToCallMachine({ action: "start-camera", properties: it(o.properties), preloadCache: it(o._preloadCache) }, function (f) {
											delete f.action, delete f.callbackStamp, d(f)
										})
									})
								})),
								function () {
									return Ra.apply(this, arguments)
								}),
						},
						{
							key: "validateCustomTrack",
							value: function (o, c, d) {
								if (d && d.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters")
								if (c && c !== "music" && c !== "speech" && !(c instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`")
								if (d && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(d)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo")
								if (!(o instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack")
							},
						},
						{
							key: "startCustomTrack",
							value: function () {
								var o = this,
									c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName }
								return (
									P(),
									B(this._callState, "startCustomTrack()"),
									this.validateCustomTrack(c.track, c.mode, c.trackName),
									new Promise(function (d, f) {
										;(window._dailyPreloadCache.customTrack = c.track),
											(c.track = wt),
											o.sendMessageToCallMachine({ action: "start-custom-track", properties: c }, function (g) {
												g.error ? f({ error: g.error }) : d(g.mediaTag)
											})
									})
								)
							},
						},
						{
							key: "stopCustomTrack",
							value: function (o) {
								var c = this
								return (
									P(),
									B(this._callState, "stopCustomTrack()"),
									new Promise(function (d) {
										c.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: o }, function (f) {
											d(f.mediaTag)
										})
									})
								)
							},
						},
						{
							key: "setCamera",
							value: function (o) {
								var c = this
								return (
									Et(),
									nr(this._dailyMainExecuted, "setCamera()"),
									new Promise(function (d) {
										c.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: o }, function (f) {
											d({ device: f.device })
										})
									})
								)
							},
						},
						{
							key: "setAudioDevice",
							value:
								((Na = C(function* (o) {
									return Et(), this.nativeUtils().setAudioDevice(o), { deviceId: yield this.nativeUtils().getAudioDevice() }
								})),
								function (o) {
									return Na.apply(this, arguments)
								}),
						},
						{
							key: "cycleCamera",
							value: function () {
								var o = this
								return new Promise(function (c) {
									o.sendMessageToCallMachine({ action: "cycle-camera" }, function (d) {
										c({ device: d.device })
									})
								})
							},
						},
						{
							key: "cycleMic",
							value: function () {
								var o = this
								return (
									P(),
									new Promise(function (c) {
										o.sendMessageToCallMachine({ action: "cycle-mic" }, function (d) {
											c({ device: d.device })
										})
									})
								)
							},
						},
						{
							key: "getCameraFacingMode",
							value: function () {
								var o = this
								return (
									Et(),
									new Promise(function (c) {
										o.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function (d) {
											c(d.facingMode)
										})
									})
								)
							},
						},
						{
							key: "setInputDevicesAsync",
							value:
								((Ia = C(function* (o) {
									var c = this,
										d = o.audioDeviceId,
										f = o.videoDeviceId,
										g = o.audioSource,
										_ = o.videoSource
									return (
										P(),
										g !== void 0 && (d = g),
										_ !== void 0 && (f = _),
										d && (this._preloadCache.audioDeviceId = d),
										f && (this._preloadCache.videoDeviceId = f),
										this._callObjectMode && this.needsLoad()
											? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
											: (d instanceof MediaStreamTrack && (d = wt),
											  f instanceof MediaStreamTrack && (f = wt),
											  new Promise(function (E) {
													c.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: d, videoDeviceId: f }, function (k) {
														delete k.action, delete k.callbackStamp, k.returnPreloadCache ? E({ camera: { deviceId: c._preloadCache.videoDeviceId }, mic: { deviceId: c._preloadCache.audioDeviceId }, speaker: { deviceId: c._preloadCache.outputDeviceId } }) : E(k)
													})
											  }))
									)
								})),
								function (o) {
									return Ia.apply(this, arguments)
								}),
						},
						{
							key: "setOutputDeviceAsync",
							value:
								((Da = C(function* (o) {
									var c = this,
										d = o.outputDeviceId
									return (
										P(),
										d && (this._preloadCache.outputDeviceId = d),
										this._callObjectMode && this.needsLoad()
											? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
											: new Promise(function (f) {
													c.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: d }, function (g) {
														delete g.action, delete g.callbackStamp, g.returnPreloadCache ? f({ camera: { deviceId: c._preloadCache.videoDeviceId }, mic: { deviceId: c._preloadCache.audioDeviceId }, speaker: { deviceId: c._preloadCache.outputDeviceId } }) : f(g)
													})
											  })
									)
								})),
								function (o) {
									return Da.apply(this, arguments)
								}),
						},
						{
							key: "getInputDevices",
							value:
								((Pa = C(function* () {
									var o = this
									return this._callObjectMode && this.needsLoad()
										? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
										: new Promise(function (c) {
												o.sendMessageToCallMachine({ action: "get-input-devices" }, function (d) {
													delete d.action, delete d.callbackStamp, d.returnPreloadCache ? c({ camera: { deviceId: o._preloadCache.videoDeviceId }, mic: { deviceId: o._preloadCache.audioDeviceId }, speaker: { deviceId: o._preloadCache.outputDeviceId } }) : c(d)
												})
										  })
								})),
								function () {
									return Pa.apply(this, arguments)
								}),
						},
						{
							key: "nativeInCallAudioMode",
							value: function () {
								return Et(), this._nativeInCallAudioMode
							},
						},
						{
							key: "setNativeInCallAudioMode",
							value: function (o) {
								if ((Et(), [ea, Kc].includes(o))) {
									if (o !== this._nativeInCallAudioMode) return (this._nativeInCallAudioMode = o), !this.disableReactNativeAutoDeviceManagement("audio") && on(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this
								} else console.error("invalid in-call audio mode specified: ", o)
							},
						},
						{
							key: "preAuth",
							value:
								((La = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
									if ((me(this._callObjectMode, "preAuth()"), aa(this._callState, this._isPreparingToJoin, "preAuth()"), qe(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(c)), !c.url)) throw new Error("preAuth() requires at least a url to be provided")
									return (
										this.validateProperties(c),
										(this.properties = A(A({}, this.properties), c)),
										new Promise(function (d, f) {
											o.sendMessageToCallMachine({ action: "daily-method-preauth", properties: it(o.properties), preloadCache: it(o._preloadCache) }, function (g) {
												return g.error ? f(g.error) : g.access ? ((o._didPreAuth = !0), void d({ access: g.access })) : f(new Error("unknown error in preAuth()"))
											})
										})
									)
								})),
								function () {
									return La.apply(this, arguments)
								}),
						},
						{
							key: "load",
							value:
								((kt = C(function* (o) {
									var c = this
									if (this.needsLoad()) {
										if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy")
										if ((o && (this.validateProperties(o), (this.properties = A(A({}, this.properties), o))), !this._callObjectMode && !this.properties.url)) throw new Error("can't load iframe meeting because url property isn't set")
										this._updateCallState(Li)
										try {
											this.emit(Fn, { action: Fn })
										} catch (d) {
											console.log("could not emit 'loading'", d)
										}
										return this._callObjectMode
											? new Promise(function (d, f) {
													c._callObjectLoader.cancel()
													var g = Date.now()
													c._callObjectLoader.load(
														c._callFrameId,
														c.properties.dailyConfig && c.properties.dailyConfig.avoidEval,
														function (_) {
															;(c._bundleLoadTime = _ ? "no-op" : Date.now() - g), c._updateCallState(Pi), _ && c.emit(Wt, { action: Wt }), d()
														},
														function (_, E) {
															if ((c.emit(Un, { action: Un, errorMsg: _ }), !E)) {
																c._updateCallState(Se), c.resetMeetingDependentVars()
																var k = { action: Qt, errorMsg: _, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: new Error(_), bundleUrl: Ot() } } }
																c._maybeSendToSentry(k), c.emit(Qt, k), f(_)
															}
														}
													)
											  })
											: ((this._iframe.src = Ar(this.assembleMeetingUrl())),
											  new Promise(function (d, f) {
													c._loadedCallback = function (g) {
														if (c._callState !== Se) {
															for (var _ in (c._updateCallState(Pi), (c.properties.cssFile || c.properties.cssText) && c.loadCss(c.properties), c._inputEventsOn)) c.sendMessageToCallMachine({ action: Xt, on: _ })
															d()
														} else f(g)
													}
											  }))
									}
								})),
								function (o) {
									return kt.apply(this, arguments)
								}),
						},
						{
							key: "join",
							value:
								((at = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
									qe(this._testCallInProgress, "join()")
									var d = !1
									if (this.needsLoad()) {
										this.updateIsPreparingToJoin(!0)
										try {
											yield this.load(c)
										} catch (f) {
											return this.updateIsPreparingToJoin(!1), Promise.reject(f)
										}
									} else {
										if (((d = !(!this.properties.cssFile && !this.properties.cssText)), this._didPreAuth)) {
											if (c.url && c.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject()
											if (c.token && c.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject()
										}
										if (c.url && !this._callObjectMode && c.url && c.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(c.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject()
										this.validateProperties(c), (this.properties = A(A({}, this.properties), c))
									}
									if ((c.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : (this._showLocalVideo = !!c.showLocalVideo)), c.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : (this._showParticipantsBar = !!c.showParticipantsBar)), this._callState === Ve || this._callState === qt)) return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)
									this._updateCallState(qt, !1)
									try {
										this.emit(Bn, { action: Bn })
									} catch (f) {
										console.log("could not emit 'joining-meeting'", f)
									}
									return (
										this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}),
										c.inputSettings && c.inputSettings.audio && (this._preloadCache.inputSettings.audio = c.inputSettings.audio),
										c.inputSettings && c.inputSettings.video && (this._preloadCache.inputSettings.video = c.inputSettings.video),
										this.sendMessageToCallMachine({ action: "join-meeting", properties: it(this.properties), preloadCache: it(this._preloadCache) }),
										new Promise(function (f, g) {
											o._joinedCallback = function (_, E) {
												if (o._callState !== Se) {
													if ((o._updateCallState(Ve), _)) for (var k in _) o._callObjectMode && (qo(_[k]), Jo(_[k]), Wo(_[k], o._participants[k])), (o._participants[k] = A({}, _[k])), o.toggleParticipantAudioBasedOnNativeAudioFocus()
													d && o.loadCss(o.properties), f(_)
												} else g(E)
											}
										})
									)
								})),
								function () {
									return at.apply(this, arguments)
								}),
						},
						{
							key: "leave",
							value:
								((Ie = C(function* () {
									var o = this
									return (
										qe(this._testCallInProgress, "leave()"),
										new Promise(function (c) {
											if (o._callState === we || o._callState === Se) c()
											else if (o._callObjectLoader && !o._callObjectLoader.loaded) {
												o._callObjectLoader.cancel(), o._updateCallState(we), o.resetMeetingDependentVars()
												try {
													o.emit(we, { action: we })
												} catch (d) {
													console.log("could not emit 'left-meeting'", d)
												}
												c()
											} else (o._resolveLeave = c), o.sendMessageToCallMachine({ action: "leave-meeting" })
										})
									)
								})),
								function () {
									return Ie.apply(this, arguments)
								}),
						},
						{
							key: "startScreenShare",
							value:
								((Y = C(function* () {
									var o = this,
										c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
									if ((nr(this._dailyMainExecuted, "startScreenShare()"), c.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", c.screenVideoSendSettings), c.mediaStream && ((this._preloadCache.screenMediaStream = c.mediaStream), (c.mediaStream = wt)), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS)) {
										var d = this.nativeUtils()
										if (yield d.isScreenBeingCaptured()) return void this.emit(Kt, { action: Kt, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" })
										d.setSystemScreenCaptureStartCallback(function () {
											d.setSystemScreenCaptureStartCallback(null), o.sendMessageToCallMachine({ action: Mo, captureOptions: c })
										}),
											d.presentSystemScreenCapturePrompt()
									} else this.sendMessageToCallMachine({ action: Mo, captureOptions: c })
								})),
								function () {
									return Y.apply(this, arguments)
								}),
						},
						{
							key: "stopScreenShare",
							value: function () {
								nr(this._dailyMainExecuted, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" })
							},
						},
						{
							key: "startRecording",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								this.sendMessageToCallMachine(A({ action: "local-recording-start" }, o))
							},
						},
						{
							key: "updateRecording",
							value: function (o) {
								var c = o.layout,
									d = c === void 0 ? { preset: "default" } : c,
									f = o.instanceId
								this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: d, instanceId: f })
							},
						},
						{
							key: "stopRecording",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								this.sendMessageToCallMachine(A({ action: "local-recording-stop" }, o))
							},
						},
						{
							key: "startLiveStreaming",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								this.sendMessageToCallMachine(A({ action: "daily-method-start-live-streaming" }, o))
							},
						},
						{
							key: "updateLiveStreaming",
							value: function (o) {
								var c = o.layout,
									d = c === void 0 ? { preset: "default" } : c,
									f = o.instanceId
								this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: d, instanceId: f })
							},
						},
						{
							key: "addLiveStreamingEndpoints",
							value: function (o) {
								var c = o.endpoints,
									d = o.instanceId
								this.sendMessageToCallMachine({ action: Ao, endpointsOp: bc, endpoints: c, instanceId: d })
							},
						},
						{
							key: "removeLiveStreamingEndpoints",
							value: function (o) {
								var c = o.endpoints,
									d = o.instanceId
								this.sendMessageToCallMachine({ action: Ao, endpointsOp: wc, endpoints: c, instanceId: d })
							},
						},
						{
							key: "stopLiveStreaming",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								this.sendMessageToCallMachine(A({ action: "daily-method-stop-live-streaming" }, o))
							},
						},
						{
							key: "validateDailyConfig",
							value: function (o) {
								o.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(o.camSimulcastEncodings)), o.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings.")
							},
						},
						{
							key: "validateSimulcastEncodings",
							value: function (o) {
								var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
									d = arguments.length > 2 && arguments[2] !== void 0 && arguments[2]
								if (o) {
									if (!(o instanceof Array)) throw new Error("encodings must be an Array")
									if (!ga(o.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"))
									for (var f = 0; f < o.length; f++) {
										var g = o[f]
										for (var _ in (this._validateEncodingLayerHasValidProperties(g), g)) {
											if (!er.includes(_)) throw new Error("Invalid key ".concat(_, ", valid keys are:") + Object.values(er))
											if (typeof g[_] != "number") throw new Error("".concat(_, " must be a number"))
											if (c) {
												var E = c[_],
													k = E.min,
													R = E.max
												if (!ga(g[_], k, R)) throw new Error("".concat(_, " value not in range. valid range: ").concat(k, " to ").concat(R))
											}
										}
										if (d && !g.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified")
									}
								}
							},
						},
						{
							key: "startRemoteMediaPlayer",
							value:
								((L = C(function* (o) {
									var c = this,
										d = o.url,
										f = o.settings,
										g = f === void 0 ? { state: Gn.PLAY } : f
									try {
										;(function (_) {
											if (typeof _ != "string") throw new Error('url parameter must be "string" type')
										})(d),
											ma(g),
											(function (_) {
												for (var E in _) if (!ia.includes(E)) throw new Error("Invalid key ".concat(E, ", valid keys are: ").concat(ia))
												_.simulcastEncodings && this.validateSimulcastEncodings(_.simulcastEncodings, ra, !0)
											})(g)
									} catch (_) {
										throw (
											(console.error("invalid argument Error: ".concat(_)),
											console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`),
											_)
										)
									}
									return new Promise(function (_, E) {
										c.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: d, settings: g }, function (k) {
											k.error ? E({ error: k.error, errorMsg: k.errorMsg }) : _({ session_id: k.session_id, remoteMediaPlayerState: { state: k.state, settings: k.settings } })
										})
									})
								})),
								function (o) {
									return L.apply(this, arguments)
								}),
						},
						{
							key: "stopRemoteMediaPlayer",
							value:
								((T = C(function* (o) {
									var c = this
									if (typeof o != "string") throw new Error(" remotePlayerID must be of type string")
									return new Promise(function (d, f) {
										c.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: o }, function (g) {
											g.error ? f({ error: g.error, errorMsg: g.errorMsg }) : d()
										})
									})
								})),
								function (o) {
									return T.apply(this, arguments)
								}),
						},
						{
							key: "updateRemoteMediaPlayer",
							value:
								((w = C(function* (o) {
									var c = this,
										d = o.session_id,
										f = o.settings
									try {
										ma(f)
									} catch (g) {
										throw (
											(console.error("invalid argument Error: ".concat(g)),
											console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`),
											g)
										)
									}
									return new Promise(function (g, _) {
										c.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: d, settings: f }, function (E) {
											E.error ? _({ error: E.error, errorMsg: E.errorMsg }) : g({ session_id: E.session_id, remoteMediaPlayerState: { state: E.state, settings: E.settings } })
										})
									})
								})),
								function (o) {
									return w.apply(this, arguments)
								}),
						},
						{
							key: "startTranscription",
							value: function (o) {
								this.sendMessageToCallMachine(A({ action: "daily-method-start-transcription" }, o))
							},
						},
						{
							key: "stopTranscription",
							value: function () {
								this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" })
							},
						},
						{
							key: "startDialOut",
							value:
								((b = C(function* (o) {
									var c = this
									B(this._callState, "startDialOut()")
									var d = function (f) {
										if (f) {
											if (!Array.isArray(f)) throw new Error("Error starting dial out: audio codec must be an array")
											if (f.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty")
											f.forEach(function (g) {
												if (typeof g != "string") throw new Error("Error starting dial out: audio codec must be a string")
												if (g !== "OPUS" && g !== "PCMU" && g !== "PCMA" && g !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722")
											})
										}
									}
									if (!o.sipUri && !o.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided")
									if (o.sipUri && o.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided")
									if (o.sipUri) {
										if (typeof o.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string")
										if (!o.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'")
										if (o.video && typeof o.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value")
										;(function (f) {
											if (f && (d(f.audio), f.video)) {
												if (!Array.isArray(f.video)) throw new Error("Error starting dial out: video codec must be an array")
												if (f.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty")
												f.video.forEach(function (g) {
													if (typeof g != "string") throw new Error("Error starting dial out: video codec must be a string")
													if (g !== "H264" && g !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8")
												})
											}
										})(o.codecs)
									}
									if (o.phoneNumber) {
										if (typeof o.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string")
										if (!/^\+\d{1,}$/.test(o.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164")
										o.codecs && d(o.codecs.audio)
									}
									return new Promise(function (f, g) {
										c.sendMessageToCallMachine(A({ action: "dialout-start" }, o), function (_) {
											_.error ? g(_.error) : f(_)
										})
									})
								})),
								function (o) {
									return b.apply(this, arguments)
								}),
						},
						{
							key: "stopDialOut",
							value: function (o) {
								var c = this
								return (
									B(this._callState, "stopDialOut()"),
									new Promise(function (d, f) {
										c.sendMessageToCallMachine(A({ action: "dialout-stop" }, o), function (g) {
											g.error ? f(g.error) : d(g)
										})
									})
								)
							},
						},
						{
							key: "sendDTMF",
							value:
								((S = C(function* (o) {
									var c = this
									return (
										B(this._callState, "sendDTMF()"),
										(function (d) {
											var f = d.sessionId,
												g = d.tones
											if (!f || !g) throw new Error("sessionId and tones are mandatory parameter")
											if (typeof f != "string" || typeof g != "string") throw new Error("sessionId and tones should be of string type")
											if (g.length > 20) throw new Error("tones string must be upto 20 characters")
											var _ = /[^0-9A-D*#]/g,
												E = g.match(_)
											if (E && E[0]) throw new Error("".concat(E[0], " is not valid DTMF tone"))
										})(o),
										new Promise(function (d, f) {
											c.sendMessageToCallMachine(A({ action: "send-dtmf" }, o), function (g) {
												g.error ? f(g.error) : d(g)
											})
										})
									)
								})),
								function (o) {
									return S.apply(this, arguments)
								}),
						},
						{
							key: "getNetworkStats",
							value: function () {
								var o = this
								return this._callState !== Ve
									? { stats: { latest: {} } }
									: new Promise(function (c) {
											o.sendMessageToCallMachine({ action: "get-calc-stats" }, function (d) {
												c(A({ stats: d.stats }, o._network))
											})
									  })
							},
						},
						{
							key: "testWebsocketConnectivity",
							value:
								((y = C(function* () {
									var o = this
									if ((qe(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()))
										try {
											yield this.load()
										} catch (c) {
											return Promise.reject(c)
										}
									return new Promise(function (c, d) {
										o.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function (f) {
											f.error ? d(f.error) : c(f.results)
										})
									})
								})),
								function () {
									return y.apply(this, arguments)
								}),
						},
						{
							key: "abortTestWebsocketConnectivity",
							value: function () {
								this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" })
							},
						},
						{
							key: "_validateVideoTrackForNetworkTests",
							value: function (o) {
								return o ? (o instanceof MediaStreamTrack ? !!qc(o, { isLocalScreenVideo: !1 }) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1)) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1)
							},
						},
						{
							key: "testCallQuality",
							value:
								((m = C(function* (o) {
									var c = this
									if (
										((function (k) {
											var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method",
												q = arguments.length > 2 ? arguments[2] : void 0
											if (k) {
												var H = "".concat(R, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.")
												throw (q && (H += " ".concat(q)), console.error(H), new Error(H))
											}
										})(this._dailyMainExecuted, "testCallQuality()"),
										o.videoTrack && !this._validateVideoTrackForNetworkTests(o.videoTrack))
									)
										throw new Error("Video track error")
									var d = this._testCallAlreadyInProgress,
										f = function (k) {
											d || (c._testCallInProgress = k)
										}
									f(!0)
									var g = o.videoTrack,
										_ = ln(o, Jc)
									if (((this._preloadCache.videoTrackForConnectionQualityTest = g), this.needsLoad()))
										try {
											var E = this._callState
											yield this.load(), (this._callState = E)
										} catch (k) {
											return f(!1), Promise.reject(k)
										}
									return new Promise(function (k) {
										c.sendMessageToCallMachine(A(A({ action: "test-call-quality" }, _), {}, { dailyJsVersion: c.properties.dailyJsVersion }), function (R) {
											var q = R.results,
												H = q.result,
												K = ln(q, Wc)
											if (H === "failed") {
												var ie,
													J = A({}, K)
												;(ie = K.error) !== null && ie !== void 0 && ie.details ? ((K.error.details = JSON.parse(K.error.details)), (J.error = A(A({}, J.error), {}, { details: A({}, J.error.details) })), (J.error.details.duringTest = "testCallQuality")) : ((J.error = J.error ? A({}, J.error) : {}), (J.error.details = { duringTest: "testCallQuality" })), c._maybeSendToSentry(J)
											}
											f(!1), k(A({ result: H }, K))
										})
									})
								})),
								function (o) {
									return m.apply(this, arguments)
								}),
						},
						{
							key: "stopTestCallQuality",
							value: function () {
								this.sendMessageToCallMachine({ action: "stop-test-call-quality" })
							},
						},
						{
							key: "testConnectionQuality",
							value:
								((p = C(function* (o) {
									console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead")
									var c = yield this.testPeerToPeerCallQuality(o),
										d = { result: c.result, secondsElapsed: c.secondsElapsed }
									return c.data && (d.data = { maxRTT: c.data.maxRoundTripTime, packetLoss: c.data.avgRecvPacketLoss }), d
								})),
								function (o) {
									return p.apply(this, arguments)
								}),
						},
						{
							key: "testPeerToPeerCallQuality",
							value:
								((h = C(function* (o) {
									var c = this
									if ((qe(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()))
										try {
											yield this.load()
										} catch (g) {
											return Promise.reject(g)
										}
									var d = o.videoTrack,
										f = o.duration
									if (!this._validateVideoTrackForNetworkTests(d)) throw new Error("Video track error")
									return (
										(this._preloadCache.videoTrackForConnectionQualityTest = d),
										new Promise(function (g, _) {
											c.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: f }, function (E) {
												E.error ? _(E.error) : g(E.results)
											})
										})
									)
								})),
								function (o) {
									return h.apply(this, arguments)
								}),
						},
						{
							key: "stopTestConnectionQuality",
							value: function () {
								console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()
							},
						},
						{
							key: "stopTestPeerToPeerCallQuality",
							value: function () {
								this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" })
							},
						},
						{
							key: "testNetworkConnectivity",
							value:
								((u = C(function* (o) {
									var c = this
									if ((qe(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()))
										try {
											yield this.load()
										} catch (d) {
											return Promise.reject(d)
										}
									if (!this._validateVideoTrackForNetworkTests(o)) throw new Error("Video track error")
									return (
										(this._preloadCache.videoTrackForNetworkConnectivityTest = o),
										new Promise(function (d, f) {
											c.sendMessageToCallMachine({ action: "test-network-connectivity" }, function (g) {
												g.error ? f(g.error) : d(g.results)
											})
										})
									)
								})),
								function (o) {
									return u.apply(this, arguments)
								}),
						},
						{
							key: "abortTestNetworkConnectivity",
							value: function () {
								this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" })
							},
						},
						{
							key: "getCpuLoadStats",
							value: function () {
								var o = this
								return new Promise(function (c, d) {
									o._callState === Ve
										? o.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function (f) {
												c(f.cpuStats)
										  })
										: c({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} })
								})
							},
						},
						{
							key: "_validateEncodingLayerHasValidProperties",
							value: function (o) {
								var c
								if (!(((c = Object.keys(o)) === null || c === void 0 ? void 0 : c.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(er))
							},
						},
						{
							key: "_validateVideoSendSettings",
							value: function (o, c) {
								var d = o === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"],
									f = "Video send settings should be either an object or one of the supported presets: ".concat(d.join())
								if (typeof c == "string") {
									if (!d.includes(c)) throw new Error(f)
								} else {
									if (x(c) !== "object") throw new Error(f)
									if (!c.maxQuality && !c.encodings && c.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute")
									if (c.maxQuality && ["low", "medium", "high"].indexOf(c.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high")
									if (c.encodings) {
										var g = !1
										switch (Object.keys(c.encodings).length) {
											case 1:
												g = !c.encodings.low
												break
											case 2:
												g = !c.encodings.low || !c.encodings.medium
												break
											case 3:
												g = !c.encodings.low || !c.encodings.medium || !c.encodings.high
												break
											default:
												g = !0
										}
										if (g) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.")
										c.encodings.low && this._validateEncodingLayerHasValidProperties(c.encodings.low), c.encodings.medium && this._validateEncodingLayerHasValidProperties(c.encodings.medium), c.encodings.high && this._validateEncodingLayerHasValidProperties(c.encodings.high)
									}
								}
							},
						},
						{
							key: "validateUpdateSendSettings",
							value: function (o) {
								var c = this
								if (!o || Object.keys(o).length === 0) throw new Error("Send settings must contain at least information for one track!")
								Object.entries(o).forEach(function (d) {
									var f = Ne(d, 2),
										g = f[0],
										_ = f[1]
									c._validateVideoSendSettings(g, _)
								})
							},
						},
						{
							key: "updateSendSettings",
							value: function (o) {
								var c = this
								return (
									this.validateUpdateSendSettings(o),
									this.needsLoad()
										? ((this._preloadCache.sendSettings = o), { sendSettings: this._preloadCache.sendSettings })
										: new Promise(function (d, f) {
												c.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: o }, function (g) {
													g.error ? f(g.error) : d(g.sendSettings)
												})
										  })
								)
							},
						},
						{
							key: "getSendSettings",
							value: function () {
								return this._sendSettings || this._preloadCache.sendSettings
							},
						},
						{
							key: "getLocalAudioLevel",
							value: function () {
								return this._localAudioLevel
							},
						},
						{
							key: "getRemoteParticipantsAudioLevel",
							value: function () {
								return this._remoteParticipantsAudioLevel
							},
						},
						{
							key: "getActiveSpeaker",
							value: function () {
								return P(), this._activeSpeaker
							},
						},
						{
							key: "setActiveSpeakerMode",
							value: function (o) {
								return P(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: o }), this
							},
						},
						{
							key: "activeSpeakerMode",
							value: function () {
								return P(), this._activeSpeakerMode
							},
						},
						{
							key: "subscribeToTracksAutomatically",
							value: function () {
								return this._preloadCache.subscribeToTracksAutomatically
							},
						},
						{
							key: "setSubscribeToTracksAutomatically",
							value: function (o) {
								return B(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), (this._preloadCache.subscribeToTracksAutomatically = o), this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: o }), this
							},
						},
						{
							key: "enumerateDevices",
							value:
								((l = C(function* () {
									var o = this
									if (this._callObjectMode) {
										var c = yield navigator.mediaDevices.enumerateDevices()
										return (
											Pe() === "Firefox" &&
												jo().major > 115 &&
												(c = c.filter(function (d) {
													return d.kind !== "audiooutput"
												})),
											{
												devices: c.map(function (d) {
													return JSON.parse(JSON.stringify(d))
												}),
											}
										)
									}
									return new Promise(function (d) {
										o.sendMessageToCallMachine({ action: "enumerate-devices" }, function (f) {
											d({ devices: f.devices })
										})
									})
								})),
								function () {
									return l.apply(this, arguments)
								}),
						},
						{
							key: "sendAppMessage",
							value: function (o) {
								var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*"
								if ((B(this._callState, "sendAppMessage()"), JSON.stringify(o).length > 4096)) throw new Error("Message data too large. Max size is 4096")
								return this.sendMessageToCallMachine({ action: "app-msg", data: o, to: c }), this
							},
						},
						{
							key: "addFakeParticipant",
							value: function (o) {
								return P(), B(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(A({ action: "add-fake-participant" }, o)), this
							},
						},
						{
							key: "setShowNamesMode",
							value: function (o) {
								return te(this._callObjectMode, "setShowNamesMode()"), P(), o && o !== "always" && o !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: o }), this)
							},
						},
						{
							key: "setShowLocalVideo",
							value: function () {
								var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]
								return te(this._callObjectMode, "setShowLocalVideo()"), P(), B(this._callState, "setShowLocalVideo()"), typeof o != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: o }), (this._showLocalVideo = o), this)
							},
						},
						{
							key: "showLocalVideo",
							value: function () {
								return te(this._callObjectMode, "showLocalVideo()"), P(), this._showLocalVideo
							},
						},
						{
							key: "setShowParticipantsBar",
							value: function () {
								var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]
								return te(this._callObjectMode, "setShowParticipantsBar()"), P(), B(this._callState, "setShowParticipantsBar()"), typeof o != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: o }), (this._showParticipantsBar = o), this)
							},
						},
						{
							key: "showParticipantsBar",
							value: function () {
								return te(this._callObjectMode, "showParticipantsBar()"), P(), this._showParticipantsBar
							},
						},
						{
							key: "customIntegrations",
							value: function () {
								return P(), te(this._callObjectMode, "customIntegrations()"), this._customIntegrations
							},
						},
						{
							key: "setCustomIntegrations",
							value: function (o) {
								return P(), te(this._callObjectMode, "setCustomIntegrations()"), B(this._callState, "setCustomIntegrations()"), pa(o) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: o }), (this._customIntegrations = o), this) : this
							},
						},
						{
							key: "startCustomIntegrations",
							value: function (o) {
								var c = this
								if (
									(P(),
									te(this._callObjectMode, "startCustomIntegrations()"),
									B(this._callState, "startCustomIntegrations()"),
									(Array.isArray(o) &&
										o.some(function (g) {
											return typeof g != "string"
										})) ||
										(!Array.isArray(o) && typeof o != "string"))
								)
									return console.error("startCustomIntegrations() only accepts string | string[]"), this
								var d = typeof o == "string" ? [o] : o,
									f = d.filter(function (g) {
										return !(g in c._customIntegrations)
									})
								return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: d }), this)
							},
						},
						{
							key: "stopCustomIntegrations",
							value: function (o) {
								var c = this
								if (
									(P(),
									te(this._callObjectMode, "stopCustomIntegrations()"),
									B(this._callState, "stopCustomIntegrations()"),
									(Array.isArray(o) &&
										o.some(function (g) {
											return typeof g != "string"
										})) ||
										(!Array.isArray(o) && typeof o != "string"))
								)
									return console.error("stopCustomIntegrations() only accepts string | string[]"), this
								var d = typeof o == "string" ? [o] : o,
									f = d.filter(function (g) {
										return !(g in c._customIntegrations)
									})
								return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: d }), this)
							},
						},
						{
							key: "customTrayButtons",
							value: function () {
								return te(this._callObjectMode, "customTrayButtons()"), P(), this._customTrayButtons
							},
						},
						{
							key: "updateCustomTrayButtons",
							value: function (o) {
								return te(this._callObjectMode, "updateCustomTrayButtons()"), P(), B(this._callState, "updateCustomTrayButtons()"), ha(o) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: o }), (this._customTrayButtons = o), this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(nn))), this)
							},
						},
						{
							key: "theme",
							value: function () {
								return te(this._callObjectMode, "theme()"), this.properties.theme
							},
						},
						{
							key: "setTheme",
							value: function (o) {
								var c = this
								return (
									te(this._callObjectMode, "setTheme()"),
									new Promise(function (d, f) {
										try {
											c.validateProperties({ theme: o }), (c.properties.theme = A({}, o)), c.sendMessageToCallMachine({ action: "set-theme", theme: c.properties.theme })
											try {
												c.emit(jn, { action: jn, theme: c.properties.theme })
											} catch (g) {
												console.log("could not emit 'theme-updated'", g)
											}
											d(c.properties.theme)
										} catch (g) {
											f(g)
										}
									})
								)
							},
						},
						{
							key: "requestFullscreen",
							value:
								((s = C(function* () {
									if ((P(), this._iframe && !document.fullscreenElement && Io()))
										try {
											;(yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen()
										} catch (o) {
											console.log("could not make video call fullscreen", o)
										}
								})),
								function () {
									return s.apply(this, arguments)
								}),
						},
						{
							key: "exitFullscreen",
							value: function () {
								P(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen()
							},
						},
						{
							key: "getSidebarView",
							value:
								((a = C(function* () {
									var o = this
									return this._callObjectMode
										? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null))
										: new Promise(function (c) {
												o.sendMessageToCallMachine({ action: "get-sidebar-view" }, function (d) {
													c(d.view)
												})
										  })
								})),
								function () {
									return a.apply(this, arguments)
								}),
						},
						{
							key: "setSidebarView",
							value: function (o) {
								return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: o }), this)
							},
						},
						{
							key: "room",
							value:
								((i = C(function* () {
									var o = this,
										c = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults,
										d = c === void 0 || c
									return this._accessState.access === Jt || this.needsLoad()
										? this.properties.url
											? { roomUrlPendingJoin: this.properties.url }
											: null
										: new Promise(function (f) {
												o.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: d }, function (g) {
													delete g.action, delete g.callbackStamp, f(g)
												})
										  })
								})),
								function () {
									return i.apply(this, arguments)
								}),
						},
						{
							key: "geo",
							value:
								((r = C(function* () {
									try {
										var o = yield fetch("https://gs.daily.co/_ks_/x-swsl/:")
										return { current: (yield o.json()).geo }
									} catch (c) {
										return console.error("geo lookup failed", c), { current: "" }
									}
								})),
								function () {
									return r.apply(this, arguments)
								}),
						},
						{
							key: "setNetworkTopology",
							value:
								((t = C(function* (o) {
									var c = this
									return (
										P(),
										B(this._callState, "setNetworkTopology()"),
										new Promise(function (d, f) {
											c.sendMessageToCallMachine({ action: "set-network-topology", opts: o }, function (g) {
												g.error ? f({ error: g.error }) : d({ workerId: g.workerId })
											})
										})
									)
								})),
								function (o) {
									return t.apply(this, arguments)
								}),
						},
						{
							key: "getNetworkTopology",
							value:
								((e = C(function* () {
									var o = this
									return new Promise(function (c, d) {
										o.needsLoad() && c({ topology: "none" }),
											o.sendMessageToCallMachine({ action: "get-network-topology" }, function (f) {
												f.error ? d({ error: f.error }) : c({ topology: f.topology })
											})
									})
								})),
								function () {
									return e.apply(this, arguments)
								}),
						},
						{
							key: "setPlayNewParticipantSound",
							value: function (o) {
								if ((P(), typeof o != "number" && o !== !0 && o !== !1)) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(o))
								this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: o })
							},
						},
						{
							key: "on",
							value: function (o, c) {
								return (this._inputEventsOn[o] = {}), this.sendMessageToCallMachine({ action: Xt, on: o }), ye.prototype.on.call(this, o, c)
							},
						},
						{
							key: "once",
							value: function (o, c) {
								return (this._inputEventsOn[o] = {}), this.sendMessageToCallMachine({ action: Xt, on: o }), ye.prototype.once.call(this, o, c)
							},
						},
						{
							key: "off",
							value: function (o, c) {
								return delete this._inputEventsOn[o], this.isDestroyed() || this.sendMessageToCallMachine({ action: Xt, off: o }), ye.prototype.off.call(this, o, c)
							},
						},
						{
							key: "validateProperties",
							value: function (o) {
								for (var c in o) {
									if (!Ge[c]) throw new Error("unrecognized property '".concat(c, "'"))
									if (Ge[c].validate && !Ge[c].validate(o[c], this)) throw new Error("property '".concat(c, "': ").concat(Ge[c].help))
								}
							},
						},
						{
							key: "assembleMeetingUrl",
							value: function () {
								var o,
									c,
									d = A(A({}, this.properties), {}, { emb: this._callFrameId, embHref: encodeURIComponent(window.location.href), proxy: (o = window._dailyConfig) !== null && o !== void 0 && o.proxyUrl ? encodeURIComponent((c = window._dailyConfig) === null || c === void 0 ? void 0 : c.proxyUrl) : void 0 }),
									f = d.url.match(/\?/) ? "&" : "?"
								return (
									d.url +
									f +
									Object.keys(Ge)
										.filter(function (g) {
											return Ge[g].queryString && d[g] !== void 0
										})
										.map(function (g) {
											return "".concat(Ge[g].queryString, "=").concat(d[g])
										})
										.join("&")
								)
							},
						},
						{
							key: "needsLoad",
							value: function () {
								return [xn, Li, we, Se].includes(this._callState)
							},
						},
						{
							key: "sendMessageToCallMachine",
							value: function (o, c) {
								if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy")
								this._messageChannel.sendMessageToCallMachine(o, c, this._iframe, this._callFrameId)
							},
						},
						{
							key: "forwardPackagedMessageToCallMachine",
							value: function (o) {
								this._messageChannel.forwardPackagedMessageToCallMachine(o, this._iframe, this._callFrameId)
							},
						},
						{
							key: "addListenerForPackagedMessagesFromCallMachine",
							value: function (o) {
								return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(o, this._callFrameId)
							},
						},
						{
							key: "removeListenerForPackagedMessagesFromCallMachine",
							value: function (o) {
								this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(o)
							},
						},
						{
							key: "handleMessageFromCallMachine",
							value: function (o) {
								switch (o.action) {
									case Ri:
										this.sendMessageToCallMachine(A({ action: xi }, this.properties))
										break
									case "daily-main-executed":
										this._dailyMainExecuted = !0
										var c = { action: bt, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: Ot() } }
										this.sendMessageToCallMachine(c), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt()
										break
									case Wt:
										this._loadedCallback && (this._loadedCallback(), (this._loadedCallback = null))
										try {
											this.emit(o.action, o)
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case Ui:
										this._joinedCallback && (this._joinedCallback(o.participants), (this._joinedCallback = null))
										try {
											this.emit(o.action, o)
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case Yi:
									case $i:
										if (this._callState === we) return
										if (o.participant && o.participant.session_id) {
											var d = o.participant.local ? "local" : o.participant.session_id
											this._callObjectMode && (qo(o.participant), Jo(o.participant), Wo(o.participant, this._participants[d]))
											try {
												this.maybeParticipantTracksStopped(this._participants[d], o.participant), this.maybeParticipantTracksStarted(this._participants[d], o.participant), this.maybeEventRecordingStopped(this._participants[d], o.participant), this.maybeEventRecordingStarted(this._participants[d], o.participant)
											} catch (M) {
												console.error("track events error", M)
											}
											if (!this.compareEqualForParticipantUpdateEvent(o.participant, this._participants[d])) {
												;(this._participants[d] = A({}, o.participant)), this.toggleParticipantAudioBasedOnNativeAudioFocus()
												try {
													this.emit(o.action, o)
												} catch (M) {
													console.log("could not emit", o, M)
												}
											}
										}
										break
									case Gi:
										if (o.participant && o.participant.session_id) {
											var f = this._participants[o.participant.session_id]
											f && this.maybeParticipantTracksStopped(f, null), delete this._participants[o.participant.session_id]
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case qi:
										if (!X(this._participantCounts, o.participantCounts)) {
											this._participantCounts = o.participantCounts
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case Ji:
										var g = { access: o.access }
										if ((o.awaitingAccess && (g.awaitingAccess = o.awaitingAccess), !X(this._accessState, g))) {
											this._accessState = g
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case Wi:
										if (o.meetingSession) {
											this._meetingSessionSummary = o.meetingSession
											try {
												delete o.callFrameId, this.emit(o.action, o)
												var _ = A(A({}, o), {}, { action: "meeting-session-updated" })
												this.emit(_.action, _)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case Qt:
										var E
										this._iframe && !o.preserveIframe && (this._iframe.src = ""), this._updateCallState(Se), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(o.errorMsg), (this._loadedCallback = null)), o.preserveIframe
										var k = ln(o, zc)
										k != null && (E = k.error) !== null && E !== void 0 && E.details && (k.error.details = JSON.parse(k.error.details)), this._maybeSendToSentry(o), this._joinedCallback && (this._joinedCallback(null, k), (this._joinedCallback = null))
										try {
											this.emit(o.action, k)
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case Bi:
										this._callState !== Se && this._updateCallState(we), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), (this._resolveLeave = null))
										try {
											this.emit(o.action, o)
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case "selected-devices-updated":
										if (o.devices)
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										break
									case go:
										var R = o.threshold,
											q = o.quality
										if (R !== this._network.threshold || q !== this._network.quality) {
											;(this._network.quality = q), (this._network.threshold = R)
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case _o:
										if (o && o.cpuLoadState)
											try {
												this.emit(o.action, o)
											} catch (M) {
												console.log("could not emit", o, M)
											}
										break
									case fo:
										var H = o.activeSpeaker
										if (this._activeSpeaker.peerId !== H.peerId) {
											this._activeSpeaker.peerId = H.peerId
											try {
												this.emit(o.action, { action: o.action, activeSpeaker: this._activeSpeaker })
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case "show-local-video-changed":
										if (this._callObjectMode) return
										var K = o.show
										this._showLocalVideo = K
										try {
											this.emit(o.action, { action: o.action, show: K })
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case mo:
										var ie = o.enabled
										if (this._activeSpeakerMode !== ie) {
											this._activeSpeakerMode = ie
											try {
												this.emit(o.action, { action: o.action, enabled: this._activeSpeakerMode })
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case Hi:
									case Ki:
									case Qi:
										this._waitingParticipants = o.allWaitingParticipants
										try {
											this.emit(o.action, { action: o.action, participant: o.participant })
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case ko:
										if (!X(this._receiveSettings, o.receiveSettings)) {
											this._receiveSettings = o.receiveSettings
											try {
												this.emit(o.action, { action: o.action, receiveSettings: o.receiveSettings })
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case To:
										if (!X(this._inputSettings, o.inputSettings)) {
											var J = this._getInputSettings()
											if (((this._inputSettings = o.inputSettings), (this._preloadCache.inputSettings = {}), !X(J, this._getInputSettings())))
												try {
													this.emit(o.action, { action: o.action, inputSettings: this._getInputSettings() })
												} catch (M) {
													console.log("could not emit", o, M)
												}
										}
										break
									case "send-settings-updated":
										if (!X(this._sendSettings, o.sendSettings)) {
											;(this._sendSettings = o.sendSettings), (this._preloadCache.sendSettings = null)
											try {
												this.emit(o.action, { action: o.action, sendSettings: o.sendSettings })
											} catch (M) {
												console.log("could not emit", o, M)
											}
										}
										break
									case "local-audio-level":
										;(this._localAudioLevel = o.audioLevel), this.emitDailyJSEvent(o)
										break
									case "remote-participants-audio-level":
										;(this._remoteParticipantsAudioLevel = o.participantsAudioLevel), this.emitDailyJSEvent(o)
										break
									case so:
										var cr = o.session_id
										;(this._rmpPlayerState[cr] = o.playerState), this.emitDailyJSEvent(o)
										break
									case lo:
										delete this._rmpPlayerState[o.session_id], this.emitDailyJSEvent(o)
										break
									case co:
										var Q = o.session_id,
											ge = this._rmpPlayerState[Q]
										;(ge && this.compareEqualForRMPUpdateEvent(ge, o.remoteMediaPlayerState)) || ((this._rmpPlayerState[Q] = o.remoteMediaPlayerState), this.emitDailyJSEvent(o))
										break
									case "custom-button-click":
									case "sidebar-view-changed":
										this.emitDailyJSEvent(o)
										break
									case zi:
										var st = this._meetingSessionState.topology !== (o.meetingSessionState && o.meetingSessionState.topology)
										;(this._meetingSessionState = or(o.meetingSessionState, this._callObjectMode)), (this._callObjectMode || st) && this.emitDailyJSEvent(o)
										break
									case zt:
									case Ht:
									case to:
									case no:
									case ro:
									case Xi:
									case Zi:
									case eo:
									case ji:
									case Fi:
									case oo:
									case ao:
									case uo:
									case ho:
									case po:
									case vo:
									case io:
									case yo:
									case bo:
									case wo:
									case So:
									case Kt:
									case Eo:
									case "dialin-connected":
									case "dialin-error":
									case "dialin-stopped":
									case "dialin-warning":
									case "dialout-connected":
									case "dialout-error":
									case "dialout-stopped":
									case "dialout-warning":
										try {
											this.emit(o.action, o)
										} catch (M) {
											console.log("could not emit", o, M)
										}
										break
									case "request-fullscreen":
										this.requestFullscreen()
										break
									case "request-exit-fullscreen":
										this.exitFullscreen()
								}
							},
						},
						{
							key: "maybeEventRecordingStopped",
							value: function (o, c) {
								var d = "record"
								if (o && !c.local && c[d] === !1 && o[d] !== c[d])
									try {
										this.emit(Ht, { action: Ht })
									} catch (f) {
										console.log("could not emit", f)
									}
							},
						},
						{
							key: "maybeEventRecordingStarted",
							value: function (o, c) {
								var d = "record"
								if (o && !c.local && c[d] === !0 && o[d] !== c[d])
									try {
										this.emit(zt, { action: zt })
									} catch (f) {
										console.log("could not emit", f)
									}
							},
						},
						{
							key: "maybeEventTrackStopped",
							value: function (o, c, d, f) {
								if (o && (o.readyState === "ended" || !c || o.id !== c.id))
									try {
										this.emit(Yn, { action: Yn, track: o, participant: d, type: f })
									} catch (g) {
										console.log("maybeEventTrackStopped: could not emit", g)
									}
							},
						},
						{
							key: "maybeEventTrackStarted",
							value: function (o, c, d, f) {
								if (c && (!o || o.readyState === "ended" || c.id !== o.id))
									try {
										this.emit(Vn, { action: Vn, track: c, participant: d, type: f })
									} catch (g) {
										console.log("maybeEventTrackStarted: could not emit", g)
									}
							},
						},
						{
							key: "maybeParticipantTracksStopped",
							value: function (o, c) {
								if (o) for (var d in o.tracks) this.maybeEventTrackStopped(o.tracks[d].track, c && c.tracks[d] ? c.tracks[d].track : null, c, d)
							},
						},
						{
							key: "maybeParticipantTracksStarted",
							value: function (o, c) {
								if (c) for (var d in c.tracks) this.maybeEventTrackStarted(o && o.tracks[d] ? o.tracks[d].track : null, c.tracks[d].track, c, d)
							},
						},
						{
							key: "compareEqualForRMPUpdateEvent",
							value: function (o, c) {
								var d, f
								return o.state === c.state && ((d = o.settings) === null || d === void 0 ? void 0 : d.volume) === ((f = c.settings) === null || f === void 0 ? void 0 : f.volume)
							},
						},
						{
							key: "emitDailyJSEvent",
							value: function (o) {
								try {
									this.emit(o.action, o)
								} catch (c) {
									console.log("could not emit", o, c)
								}
							},
						},
						{
							key: "compareEqualForParticipantUpdateEvent",
							value: function (o, c) {
								return !!X(o, c) && (!o.videoTrack || !c.videoTrack || (o.videoTrack.id === c.videoTrack.id && o.videoTrack.muted === c.videoTrack.muted && o.videoTrack.enabled === c.videoTrack.enabled)) && (!o.audioTrack || !c.audioTrack || (o.audioTrack.id === c.audioTrack.id && o.audioTrack.muted === c.audioTrack.muted && o.audioTrack.enabled === c.audioTrack.enabled))
							},
						},
						{
							key: "nativeUtils",
							value: function () {
								return F() ? (typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils) : null
							},
						},
						{
							key: "updateIsPreparingToJoin",
							value: function (o) {
								this._updateCallState(this._callState, o)
							},
						},
						{
							key: "_updateCallState",
							value: function (o) {
								var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin
								if (o !== this._callState || c !== this._isPreparingToJoin) {
									var d = this._callState,
										f = this._isPreparingToJoin
									;(this._callState = o), (this._isPreparingToJoin = c)
									var g = on(d, f),
										_ = on(this._callState, this._isPreparingToJoin)
									g !== _ && (this.updateKeepDeviceAwake(_), this.updateDeviceAudioMode(_), this.updateShowAndroidOngoingMeetingNotification(_), this.updateNoOpRecordingEnsuringBackgroundContinuity(_))
								}
							},
						},
						{
							key: "resetMeetingDependentVars",
							value: function () {
								;(this._participants = {}), (this._participantCounts = na), (this._waitingParticipants = {}), (this._activeSpeaker = {}), (this._activeSpeakerMode = !1), (this._didPreAuth = !1), (this._accessState = { access: Jt }), (this._finalSummaryOfPrevSession = this._meetingSessionSummary), (this._meetingSessionSummary = {}), (this._meetingSessionState = or(ta, this._callObjectMode)), (this._receiveSettings = {}), (this._inputSettings = void 0), (this._sendSettings = {}), (this._localAudioLevel = 0), (this._remoteParticipantsAudioLevel = {}), (this._dailyMainExecuted = !1), (this._bundleLoadTime = void 0), this._preloadCache
							},
						},
						{
							key: "updateKeepDeviceAwake",
							value: function (o) {
								F() && this.nativeUtils().setKeepDeviceAwake(o, this._callFrameId)
							},
						},
						{
							key: "updateDeviceAudioMode",
							value: function (o) {
								if (F() && !this.disableReactNativeAutoDeviceManagement("audio")) {
									var c = o ? this._nativeInCallAudioMode : "idle"
									this.nativeUtils().setAudioMode(c)
								}
							},
						},
						{
							key: "updateShowAndroidOngoingMeetingNotification",
							value: function (o) {
								if (F() && this.nativeUtils().setShowOngoingMeetingNotification) {
									var c, d, f, g
									if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
										var _ = this.properties.reactNativeConfig.androidInCallNotification
										;(c = _.title), (d = _.subtitle), (f = _.iconName), (g = _.disableForCustomOverride)
									}
									g && (o = !1), this.nativeUtils().setShowOngoingMeetingNotification(o, c, d, f, this._callFrameId)
								}
							},
						},
						{
							key: "updateNoOpRecordingEnsuringBackgroundContinuity",
							value: function (o) {
								F() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(o)
							},
						},
						{
							key: "toggleParticipantAudioBasedOnNativeAudioFocus",
							value: function () {
								if (F()) {
									var o = window.store.getState()
									for (var c in o.streams) {
										var d = o.streams[c]
										d && d.pendingTrack && d.pendingTrack.kind === "audio" && (d.pendingTrack.enabled = this._hasNativeAudioFocus)
									}
								}
							},
						},
						{
							key: "disableReactNativeAutoDeviceManagement",
							value: function (o) {
								return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[o]
							},
						},
						{
							key: "absoluteUrl",
							value: function (o) {
								if (o !== void 0) {
									var c = document.createElement("a")
									return (c.href = o), c.href
								}
							},
						},
						{
							key: "sayHello",
							value: function () {
								var o = "hello, world."
								return console.log(o), o
							},
						},
						{
							key: "_logCallQualityTestResults",
							value: function (o) {
								if (this._dailyMainExecuted) {
									var c = { action: bt, level: "info", code: 1012, results: o }
									this.sendMessageToCallMachine(c)
								} else console.warn("_logCallQualityTestResults() must be called after daily initialization")
							},
						},
						{
							key: "_logUseAfterDestroy",
							value: function () {
								if (this.needsLoad())
									if (fe && !fe.needsLoad()) {
										var o = { action: bt, level: "error", code: this.strictMode ? 9995 : 9997 }
										fe.sendMessageToCallMachine(o)
									} else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.")
								else {
									var c = { action: bt, level: "error", code: this.strictMode ? 9995 : 9997 }
									this._messageChannel.sendMessageToCallMachine(c, null, this._iframe, this._callFrameId)
								}
							},
						},
						{
							key: "_logDuplicateInstanceAttempt",
							value: function () {
								var o = fe._dailyMainExecuted ? fe : this._dailyMainExecuted ? this : void 0
								o ? o.sendMessageToCallMachine({ action: bt, level: "error", code: this.strictMode ? 9990 : 9992 }) : ((this._delayDuplicateInstanceLog = !0), (fe._delayDuplicateInstanceLog = !0))
							},
						},
						{
							key: "_maybeSendToSentry",
							value: function (o) {
								var c, d, f, g, _, E
								if (!((c = o.error) !== null && c !== void 0 && c.type && !["connection-error", "end-of-life", "no-room"].includes(o.error.type))) {
									var k = (d = this.properties) !== null && d !== void 0 && d.url ? new URL(this.properties.url) : void 0,
										R = "production"
									k && k.host.includes(".staging.daily") && (R = "staging")
									var q,
										H,
										K,
										ie,
										J,
										cr = new js({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: Fs, integrations: [new Js.GlobalHandlers({ onunhandledrejection: !1 })], environment: R }),
										Q = new On(cr, void 0, re.version())
									if ((this.session_id && Q.setExtra("sessionId", this.session_id), this.properties)) {
										var ge = A({}, this.properties)
										;(ge.userName = ge.userName ? "[Filtered]" : void 0), (ge.userData = ge.userData ? "[Filtered]" : void 0), (ge.token = ge.token ? "[Filtered]" : void 0), Q.setExtra("properties", ge)
									}
									if (k) {
										var st = k.searchParams.get("domain")
										if (!st) {
											var M = k.host.match(/(.*?)\./)
											st = (M && M[1]) || ""
										}
										st && Q.setTag("domain", st)
									}
									o.error && (Q.setTag("fatalErrorType", o.error.type), Q.setExtra("errorDetails", o.error.details), !((q = o.error.details) === null || q === void 0) && q.uri && Q.setTag("serverAddress", o.error.details.uri), !((H = o.error.details) === null || H === void 0) && H.workerGroup && Q.setTag("workerGroup", o.error.details.workerGroup), !((K = o.error.details) === null || K === void 0) && K.geoGroup && Q.setTag("geoGroup", o.error.details.geoGroup), !((ie = o.error.details) === null || ie === void 0) && ie.bundleUrl && Q.setTag("bundleUrl", o.error.details.bundleUrl), !((J = o.error.details) === null || J === void 0) && J.on && Q.setTag("connectionAttempt", o.error.details.on)), Q.setTags({ callMode: this._callObjectMode ? (F() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (g = f.dailyConfig) !== null && g !== void 0 && (_ = g.callMode) !== null && _ !== void 0 && _.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom") : "prebuilt-frame", version: re.version() })
									var Tl = ((E = o.error) === null || E === void 0 ? void 0 : E.msg) || o.errorMsg
									Q.run(function (Cl) {
										Cl.captureException(new Error(Tl))
									})
								}
							},
						},
					],
					[
						{
							key: "supportedBrowser",
							value: function () {
								if (F()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 }
								var o = es.getParser(de())
								return { supported: !!xo(), mobile: o.getPlatformType() === "mobile", name: o.getBrowserName(), version: o.getBrowserVersion(), supportsFullscreen: !!Io(), supportsScreenShare: !!Sc(), supportsSfu: !!xo(), supportsVideoProcessing: No(), supportsAudioProcessing: Ro() }
							},
						},
						{
							key: "version",
							value: function () {
								return "0.58.0"
							},
						},
						{
							key: "createCallObject",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								return (o.layout = "none"), new re(null, o)
							},
						},
						{
							key: "wrap",
							value: function (o) {
								var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
								if ((P(), !o || !o.contentWindow || typeof o.src != "string")) throw new Error("DailyIframe::Wrap needs an iframe-like first argument")
								return c.layout || (c.customLayout ? (c.layout = "custom-v1") : (c.layout = "browser")), new re(o, c)
							},
						},
						{
							key: "createFrame",
							value: function (o, c) {
								var d, f
								P(), o && c ? ((d = o), (f = c)) : o && o.append ? ((d = o), (f = {})) : ((d = document.body), (f = o || {}))
								var g = f.iframeStyle
								g || (g = d === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" })
								var _ = document.createElement("iframe")
								window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? (_.allow = "microphone, camera") : (_.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock"),
									(_.style.visibility = "hidden"),
									d.appendChild(_),
									(_.style.visibility = null),
									Object.keys(g).forEach(function (E) {
										return (_.style[E] = g[E])
									}),
									f.layout || (f.customLayout ? (f.layout = "custom-v1") : (f.layout = "browser"))
								try {
									return new re(_, f)
								} catch (E) {
									throw (d.removeChild(_), E)
								}
							},
						},
						{
							key: "createTransparentFrame",
							value: function () {
								var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
								P()
								var c = document.createElement("iframe")
								return (
									(c.allow = "microphone; camera; autoplay"),
									(c.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `),
									document.body.appendChild(c),
									o.layout || (o.layout = "custom-v1"),
									re.wrap(c, o)
								)
							},
						},
						{
							key: "getCallInstance",
							value: function () {
								return fe
							},
						},
					]
				),
				re
			)
		})()
	function it(n) {
		var e = {}
		for (var t in n) n[t] instanceof MediaStreamTrack ? (e[t] = wt) : (t === "dailyConfig" && (n[t].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = n[t].modifyLocalSdpHook), delete n[t].modifyLocalSdpHook), n[t].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = n[t].modifyRemoteSdpHook), delete n[t].modifyRemoteSdpHook)), (e[t] = n[t]))
		return e
	}
	function B(n) {
		var e = arguments.length > 2 ? arguments[2] : void 0
		if (n !== Ve) {
			var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.")
			throw (e && (t += " ".concat(e)), console.error(t), new Error(t))
		}
	}
	function on(n, e) {
		return [qt, Ve].includes(n) || e
	}
	function aa(n, e) {
		var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method",
			r = arguments.length > 3 ? arguments[3] : void 0
		if (on(n, e)) {
			var i = "".concat(t, " not supported after joining a meeting.")
			throw (r && (i += " ".concat(r)), console.error(i), new Error(i))
		}
	}
	function nr(n) {
		var e = arguments.length > 2 ? arguments[2] : void 0
		if (!n) {
			var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.")
			throw (e && (t += " ".concat(e)), console.error(t), new Error(t))
		}
	}
	function qe(n) {
		if (n) {
			var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.")
			throw (console.error(e), new Error(e))
		}
	}
	function me(n) {
		if (!n) {
			var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances")
			throw (console.error(e), new Error(e))
		}
	}
	function te(n) {
		if (n) {
			var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt")
			throw (console.error(e), new Error(e))
		}
	}
	function P() {
		if (F()) throw new Error("This daily-js method is not currently supported in React Native")
	}
	function Et() {
		if (!F()) throw new Error("This daily-js method is only supported in React Native")
	}
	function sa(n) {
		if (n === void 0) return !0
		var e
		if (typeof n == "string") e = n
		else
			try {
				;(e = JSON.stringify(n)), X(JSON.parse(e), n) || console.warn("The userData provided will be modified when serialized.")
			} catch (t) {
				throw Error("userData must be serializable to JSON: ".concat(t))
			}
		if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."))
		return !0
	}
	function ca(n, e) {
		for (
			var t = e.allowAllParticipantsKey,
				r = function (m) {
					var y = ["local"]
					return t || y.push("*"), m && !y.includes(m)
				},
				i = function (m) {
					return !!(m.layer === void 0 || (Number.isInteger(m.layer) && m.layer >= 0) || m.layer === "inherit")
				},
				a = function (m) {
					return !!m && !(m.video && !i(m.video)) && !(m.screenVideo && !i(m.screenVideo))
				},
				s = 0,
				l = Object.entries(n);
			s < l.length;
			s++
		) {
			var u = Ne(l[s], 2),
				h = u[0],
				p = u[1]
			if (!r(h) || !a(p)) return !1
		}
		return !0
	}
	function rr(n) {
		return (
			x(n) === "object" &&
			!!((n.video && x(n.video) === "object") || (n.audio && x(n.audio) === "object")) &&
			!(
				n.video &&
				!(function (i) {
					var a = ["type", "config"]
					return !i ||
						x(i) !== "object" ||
						!(function (s) {
							return typeof s != "string" ? !1 : Object.values(Zt).includes(s) ? !0 : (console.error("inputSettings video processor type invalid"), !1)
						})(i.type) ||
						(i.config &&
							(x(i.config) !== "object" ||
								!(function (s, l) {
									var u = Object.keys(l)
									if (u.length === 0) return !0
									var h = "invalid object in inputSettings -> video -> processor -> config"
									switch (s) {
										case Zt.BGBLUR:
											return u.length > 1 || u[0] !== "strength" ? (console.error(h), !1) : !(typeof l.strength != "number" || l.strength <= 0 || l.strength > 1 || isNaN(l.strength)) || (console.error("".concat(h, "; expected: {0 < strength <= 1}, got: ").concat(l.strength)), !1)
										case Zt.BGIMAGE:
											return !(
												l.source !== void 0 &&
												!(function (p) {
													if (p.source === "default") return (p.type = "default"), !0
													if (p.source instanceof ArrayBuffer) return !0
													if (ut(p.source))
														return (
															(p.type = "url"),
															!!(function (S) {
																var b = new URL(S),
																	w = b.pathname
																if (b.protocol === "data:")
																	try {
																		var T = w.substring(w.indexOf(":") + 1, w.indexOf(";")).split("/")[1]
																		return qn.includes(T)
																	} catch (Y) {
																		return console.error("failed to deduce blob content type", Y), !1
																	}
																var L = w.split(".").at(-1).toLowerCase().trim()
																return qn.includes(L)
															})(p.source) || (console.error("invalid image type; supported types: [".concat(qn.join(", "), "]")), !1)
														)
													return (m = p.source), (y = Number(m)), isNaN(y) || !Number.isInteger(y) || y <= 0 || y > Lo ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(Lo)), !1) : ((p.type = "daily-preselect"), !0)
													var m, y
												})(l)
											)
										default:
											return !0
									}
								})(i.type, i.config)))
						? !1
						: (Object.keys(i)
								.filter(function (s) {
									return !a.includes(s)
								})
								.forEach(function (s) {
									console.warn("invalid key inputSettings -> video -> processor : ".concat(s)), delete i[s]
								}),
						  !0)
				})(n.video.processor)
			) &&
			!(
				n.audio &&
				((t = n.audio.processor),
				(r = ["type"]),
				!t ||
					x(t) !== "object" ||
					(Object.keys(t)
						.filter(function (i) {
							return !r.includes(i)
						})
						.forEach(function (i) {
							console.warn("invalid key inputSettings -> audio -> processor : ".concat(i)), delete t[i]
						}),
					(e = t.type),
					typeof e != "string" || (!Object.values(Oo).includes(e) && (console.error("inputSettings audio processor type invalid"), 1))))
			)
		)
		var e, t, r
	}
	function la(n) {
		var e,
			t,
			r = []
		n.video && !No((e = (t = window._dailyConfig) === null || t === void 0 ? void 0 : t.useLegacyVideoProcessor) !== null && e !== void 0 && e) && (delete n.video, r.push("video")), n.audio && !Ro() && (delete n.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")))
	}
	function ir() {
		var n = Object.values(Zt).join(" | "),
			e = Object.values(Oo).join(" | ")
		return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(n, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }")
	}
	function ua(n) {
		var e = n.allowAllParticipantsKey
		return "receiveSettings must be of the form { [<remote participant id> | ".concat(Ii).concat(e ? ' | "'.concat(Ni, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
	}
	function da() {
		return "customIntegrations should be an object of type ".concat(JSON.stringify(tr), ".")
	}
	function ha(n) {
		if ((n && x(n) !== "object") || Array.isArray(n)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(nn), ".")), !1
		if (n)
			for (var e = 0, t = Object.entries(n); e < t.length; e++)
				for (var r = Ne(t[e], 1)[0], i = 0, a = Object.entries(n[r]); i < a.length; i++) {
					var s = Ne(a[i], 2),
						l = s[0],
						u = s[1]
					if ((l === "iconPath" && !ut(u)) || (l === "iconPathDarkMode" && !ut(u))) return console.error("customTrayButton ".concat(l, " should be a url.")), !1
					var h = nn.id[l]
					if (!h) return console.error("customTrayButton does not support key ".concat(l)), !1
					if (x(u) !== h) return console.error("customTrayButton ".concat(l, " should be a ").concat(h, ".")), !1
				}
		return !0
	}
	function pa(n) {
		if (!n || (n && x(n) !== "object") || Array.isArray(n)) return console.error(da()), !1
		for (
			var e = function (m) {
					return "".concat(m, " should be ").concat(tr.id[m])
				},
				t = function (m, y) {
					return console.error("customIntegration ".concat(m, ": ").concat(y))
				},
				r = 0,
				i = Object.entries(n);
			r < i.length;
			r++
		) {
			var a = Ne(i[r], 1)[0]
			if (!("label" in n[a])) return t(a, "label is required"), !1
			if (!("location" in n[a])) return t(a, "location is required"), !1
			if (!("src" in n[a]) && !("srcdoc" in n[a])) return t(a, "src or srcdoc is required"), !1
			for (var s = 0, l = Object.entries(n[a]); s < l.length; s++) {
				var u = Ne(l[s], 2),
					h = u[0],
					p = u[1]
				switch (h) {
					case "allow":
					case "csp":
					case "name":
					case "referrerPolicy":
					case "sandbox":
						if (typeof p != "string") return t(a, e(h)), !1
						break
					case "iconURL":
						if (!ut(p)) return t(a, "".concat(h, " should be a url")), !1
						break
					case "src":
						if ("srcdoc" in n[a]) return t(a, "cannot have both src and srcdoc"), !1
						if (!ut(p)) return t(a, 'src "'.concat(p, '" is not a valid URL')), !1
						break
					case "srcdoc":
						if ("src" in n[a]) return t(a, "cannot have both src and srcdoc"), !1
						if (typeof p != "string") return t(a, e(h)), !1
						break
					case "location":
						if (!["main", "sidebar"].includes(p)) return t(a, e(h)), !1
						break
					case "controlledBy":
						if (
							p !== "*" &&
							p !== "owners" &&
							(!Array.isArray(p) ||
								p.some(function (m) {
									return typeof m != "string"
								}))
						)
							return t(a, e(h)), !1
						break
					case "shared":
						if (
							(!Array.isArray(p) ||
								p.some(function (m) {
									return typeof m != "string"
								})) &&
							p !== "owners" &&
							typeof p != "boolean"
						)
							return t(a, e(h)), !1
						break
					default:
						if (!tr.id[h]) return console.error("customIntegration does not support key ".concat(h)), !1
				}
			}
		}
		return !0
	}
	function fa(n, e) {
		if (e === void 0) return !1
		switch (x(e)) {
			case "string":
				return x(n) === e
			case "object":
				if (x(n) !== "object") return !1
				for (var t in n) if (!fa(n[t], e[t])) return !1
				return !0
			default:
				return !1
		}
	}
	function ma(n) {
		if (x(n) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type')
		if (n.state && !Object.values(Gn).includes(n.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Gn))
		if (n.volume) {
			if (typeof n.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type')
			if (n.volume < 0 || n.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0")
		}
	}
	function ga(n, e, t) {
		return !(typeof n != "number" || n < e || n > t)
	}
	function or(n, e) {
		return n && !e && delete n.data, n
	}
	const Xc = ve(Object.freeze(Object.defineProperty({ __proto__: null, DAILY_ACCESS_LEVEL_FULL: Di, DAILY_ACCESS_LEVEL_LOBBY: Zs, DAILY_ACCESS_LEVEL_NONE: ec, DAILY_ACCESS_UNKNOWN: Jt, DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: pc, DAILY_CAMERA_ERROR_CAM_IN_USE: dc, DAILY_CAMERA_ERROR_CONSTRAINTS: vc, DAILY_CAMERA_ERROR_MIC_IN_USE: hc, DAILY_CAMERA_ERROR_NOT_FOUND: gc, DAILY_CAMERA_ERROR_PERMISSIONS: fc, DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: mc, DAILY_CAMERA_ERROR_UNKNOWN: _c, DAILY_EVENT_ACCESS_STATE_UPDATED: Ji, DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: fo, DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: mo, DAILY_EVENT_APP_MSG: oo, DAILY_EVENT_CAMERA_ERROR: Fi, DAILY_EVENT_CPU_LOAD_CHANGE: _o, DAILY_EVENT_ERROR: Qt, DAILY_EVENT_EXIT_FULLSCREEN: $e, DAILY_EVENT_FULLSCREEN: Ye, DAILY_EVENT_IFRAME_LAUNCH_CONFIG: xi, DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: Ri, DAILY_EVENT_INPUT_SETTINGS_UPDATED: To, DAILY_EVENT_JOINED_MEETING: Ui, DAILY_EVENT_JOINING_MEETING: Bn, DAILY_EVENT_LANG_UPDATED: Eo, DAILY_EVENT_LEFT_MEETING: Bi, DAILY_EVENT_LIVE_STREAMING_ERROR: So, DAILY_EVENT_LIVE_STREAMING_STARTED: yo, DAILY_EVENT_LIVE_STREAMING_STOPPED: wo, DAILY_EVENT_LIVE_STREAMING_UPDATED: bo, DAILY_EVENT_LOADED: Wt, DAILY_EVENT_LOADING: Fn, DAILY_EVENT_LOAD_ATTEMPT_FAILED: Un, DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: po, DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: uo, DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: ho, DAILY_EVENT_MEETING_SESSION_DATA_ERROR: yc, DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: zi, DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: Wi, DAILY_EVENT_NETWORK_CONNECTION: vo, DAILY_EVENT_NETWORK_QUALITY_CHANGE: go, DAILY_EVENT_NONFATAL_ERROR: Kt, DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: qi, DAILY_EVENT_PARTICIPANT_JOINED: Yi, DAILY_EVENT_PARTICIPANT_LEFT: Gi, DAILY_EVENT_PARTICIPANT_UPDATED: $i, DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: ko, DAILY_EVENT_RECORDING_DATA: io, DAILY_EVENT_RECORDING_ERROR: no, DAILY_EVENT_RECORDING_STARTED: zt, DAILY_EVENT_RECORDING_STATS: to, DAILY_EVENT_RECORDING_STOPPED: Ht, DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: ro, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: so, DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: lo, DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: co, DAILY_EVENT_STARTED_CAMERA: ji, DAILY_EVENT_THEME_UPDATED: jn, DAILY_EVENT_TRACK_STARTED: Vn, DAILY_EVENT_TRACK_STOPPED: Yn, DAILY_EVENT_TRANSCRIPTION_ERROR: eo, DAILY_EVENT_TRANSCRIPTION_MSG: ao, DAILY_EVENT_TRANSCRIPTION_STARTED: Xi, DAILY_EVENT_TRANSCRIPTION_STOPPED: Zi, DAILY_EVENT_WAITING_PARTICIPANT_ADDED: Hi, DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: Qi, DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: Ki, DAILY_FATAL_ERROR_CONNECTION: uc, DAILY_FATAL_ERROR_EJECTED: tc, DAILY_FATAL_ERROR_EOL: cc, DAILY_FATAL_ERROR_EXP_ROOM: ic, DAILY_FATAL_ERROR_EXP_TOKEN: oc, DAILY_FATAL_ERROR_MEETING_FULL: sc, DAILY_FATAL_ERROR_NBF_ROOM: nc, DAILY_FATAL_ERROR_NBF_TOKEN: rc, DAILY_FATAL_ERROR_NOT_ALLOWED: lc, DAILY_FATAL_ERROR_NO_ROOM: ac, DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: Ni, DAILY_RECEIVE_SETTINGS_BASE_KEY: Ii, DAILY_STATE_ERROR: Se, DAILY_STATE_JOINED: Ve, DAILY_STATE_JOINING: qt, DAILY_STATE_LEFT: we, DAILY_STATE_NEW: xn, DAILY_TRACK_STATE_BLOCKED: Ws, DAILY_TRACK_STATE_INTERRUPTED: Qs, DAILY_TRACK_STATE_LOADING: Ks, DAILY_TRACK_STATE_OFF: zs, DAILY_TRACK_STATE_PLAYABLE: Xs, DAILY_TRACK_STATE_SENDABLE: Hs, default: Qc }, Symbol.toStringTag, { value: "Module" })))
	var ar = { exports: {} },
		ot = typeof Reflect == "object" ? Reflect : null,
		va =
			ot && typeof ot.apply == "function"
				? ot.apply
				: function (e, t, r) {
						return Function.prototype.apply.call(e, t, r)
				  },
		an
	ot && typeof ot.ownKeys == "function"
		? (an = ot.ownKeys)
		: Object.getOwnPropertySymbols
		? (an = function (e) {
				return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
		  })
		: (an = function (e) {
				return Object.getOwnPropertyNames(e)
		  })
	function Zc(n) {
		console && console.warn && console.warn(n)
	}
	var _a =
		Number.isNaN ||
		function (e) {
			return e !== e
		}
	function I() {
		I.init.call(this)
	}
	;(ar.exports = I), (ar.exports.once = rl), (I.EventEmitter = I), (I.prototype._events = void 0), (I.prototype._eventsCount = 0), (I.prototype._maxListeners = void 0)
	var ya = 10
	function sn(n) {
		if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
	}
	Object.defineProperty(I, "defaultMaxListeners", {
		enumerable: !0,
		get: function () {
			return ya
		},
		set: function (n) {
			if (typeof n != "number" || n < 0 || _a(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".")
			ya = n
		},
	}),
		(I.init = function () {
			;(this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0)
		}),
		(I.prototype.setMaxListeners = function (e) {
			if (typeof e != "number" || e < 0 || _a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".")
			return (this._maxListeners = e), this
		})
	function ba(n) {
		return n._maxListeners === void 0 ? I.defaultMaxListeners : n._maxListeners
	}
	;(I.prototype.getMaxListeners = function () {
		return ba(this)
	}),
		(I.prototype.emit = function (e) {
			for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r])
			var i = e === "error",
				a = this._events
			if (a !== void 0) i = i && a.error === void 0
			else if (!i) return !1
			if (i) {
				var s
				if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s
				var l = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""))
				throw ((l.context = s), l)
			}
			var u = a[e]
			if (u === void 0) return !1
			if (typeof u == "function") va(u, this, t)
			else for (var h = u.length, p = Ta(u, h), r = 0; r < h; ++r) va(p[r], this, t)
			return !0
		})
	function wa(n, e, t, r) {
		var i, a, s
		if ((sn(t), (a = n._events), a === void 0 ? ((a = n._events = Object.create(null)), (n._eventsCount = 0)) : (a.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), (a = n._events)), (s = a[e])), s === void 0)) (s = a[e] = t), ++n._eventsCount
		else if ((typeof s == "function" ? (s = a[e] = r ? [t, s] : [s, t]) : r ? s.unshift(t) : s.push(t), (i = ba(n)), i > 0 && s.length > i && !s.warned)) {
			s.warned = !0
			var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit")
			;(l.name = "MaxListenersExceededWarning"), (l.emitter = n), (l.type = e), (l.count = s.length), Zc(l)
		}
		return n
	}
	;(I.prototype.addListener = function (e, t) {
		return wa(this, e, t, !1)
	}),
		(I.prototype.on = I.prototype.addListener),
		(I.prototype.prependListener = function (e, t) {
			return wa(this, e, t, !0)
		})
	function el() {
		if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
	}
	function Sa(n, e, t) {
		var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t },
			i = el.bind(r)
		return (i.listener = t), (r.wrapFn = i), i
	}
	;(I.prototype.once = function (e, t) {
		return sn(t), this.on(e, Sa(this, e, t)), this
	}),
		(I.prototype.prependOnceListener = function (e, t) {
			return sn(t), this.prependListener(e, Sa(this, e, t)), this
		}),
		(I.prototype.removeListener = function (e, t) {
			var r, i, a, s, l
			if ((sn(t), (i = this._events), i === void 0)) return this
			if (((r = i[e]), r === void 0)) return this
			if (r === t || r.listener === t) --this._eventsCount === 0 ? (this._events = Object.create(null)) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t))
			else if (typeof r != "function") {
				for (a = -1, s = r.length - 1; s >= 0; s--)
					if (r[s] === t || r[s].listener === t) {
						;(l = r[s].listener), (a = s)
						break
					}
				if (a < 0) return this
				a === 0 ? r.shift() : tl(r, a), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, l || t)
			}
			return this
		}),
		(I.prototype.off = I.prototype.removeListener),
		(I.prototype.removeAllListeners = function (e) {
			var t, r, i
			if (((r = this._events), r === void 0)) return this
			if (r.removeListener === void 0) return arguments.length === 0 ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : r[e] !== void 0 && (--this._eventsCount === 0 ? (this._events = Object.create(null)) : delete r[e]), this
			if (arguments.length === 0) {
				var a = Object.keys(r),
					s
				for (i = 0; i < a.length; ++i) (s = a[i]), s !== "removeListener" && this.removeAllListeners(s)
				return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this
			}
			if (((t = r[e]), typeof t == "function")) this.removeListener(e, t)
			else if (t !== void 0) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i])
			return this
		})
	function Ea(n, e, t) {
		var r = n._events
		if (r === void 0) return []
		var i = r[e]
		return i === void 0 ? [] : typeof i == "function" ? (t ? [i.listener || i] : [i]) : t ? nl(i) : Ta(i, i.length)
	}
	;(I.prototype.listeners = function (e) {
		return Ea(this, e, !0)
	}),
		(I.prototype.rawListeners = function (e) {
			return Ea(this, e, !1)
		}),
		(I.listenerCount = function (n, e) {
			return typeof n.listenerCount == "function" ? n.listenerCount(e) : ka.call(n, e)
		}),
		(I.prototype.listenerCount = ka)
	function ka(n) {
		var e = this._events
		if (e !== void 0) {
			var t = e[n]
			if (typeof t == "function") return 1
			if (t !== void 0) return t.length
		}
		return 0
	}
	I.prototype.eventNames = function () {
		return this._eventsCount > 0 ? an(this._events) : []
	}
	function Ta(n, e) {
		for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r]
		return t
	}
	function tl(n, e) {
		for (; e + 1 < n.length; e++) n[e] = n[e + 1]
		n.pop()
	}
	function nl(n) {
		for (var e = new Array(n.length), t = 0; t < e.length; ++t) e[t] = n[t].listener || n[t]
		return e
	}
	function rl(n, e) {
		return new Promise(function (t, r) {
			function i(s) {
				n.removeListener(e, a), r(s)
			}
			function a() {
				typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments))
			}
			Ca(n, e, a, { once: !0 }), e !== "error" && il(n, i, { once: !0 })
		})
	}
	function il(n, e, t) {
		typeof n.on == "function" && Ca(n, "error", e, t)
	}
	function Ca(n, e, t, r) {
		if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t)
		else if (typeof n.addEventListener == "function")
			n.addEventListener(e, function i(a) {
				r.once && n.removeEventListener(e, i), t(a)
			})
		else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n)
	}
	var ol = ar.exports,
		cn = {},
		De = {}
	Object.defineProperty(De, "__esModule", { value: !0 }), (De.Api = De.HttpClient = De.ContentType = void 0)
	var G
	;(function (n) {
		;(n.Json = "application/json"), (n.FormData = "multipart/form-data"), (n.UrlEncoded = "application/x-www-form-urlencoded"), (n.Text = "text/plain")
	})(G || (De.ContentType = G = {}))
	class Ma {
		constructor(e = {}) {
			$(this, "baseUrl", "https://west-api.vapi.ai")
			$(this, "securityData", null)
			$(this, "securityWorker")
			$(this, "abortControllers", new Map())
			$(this, "customFetch", (...e) => fetch(...e))
			$(this, "baseApiParams", { credentials: "same-origin", headers: {}, redirect: "follow", referrerPolicy: "no-referrer" })
			$(this, "setSecurityData", (e) => {
				this.securityData = e
			})
			$(this, "contentFormatters", {
				[G.Json]: (e) => (e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e),
				[G.Text]: (e) => (e !== null && typeof e != "string" ? JSON.stringify(e) : e),
				[G.FormData]: (e) =>
					Object.keys(e || {}).reduce((t, r) => {
						const i = e[r]
						return t.append(r, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), t
					}, new FormData()),
				[G.UrlEncoded]: (e) => this.toQueryString(e),
			})
			$(this, "createAbortSignal", (e) => {
				if (this.abortControllers.has(e)) {
					const r = this.abortControllers.get(e)
					return r ? r.signal : void 0
				}
				const t = new AbortController()
				return this.abortControllers.set(e, t), t.signal
			})
			$(this, "abortRequest", (e) => {
				const t = this.abortControllers.get(e)
				t && (t.abort(), this.abortControllers.delete(e))
			})
			$(this, "request", async ({ body: e, secure: t, path: r, type: i, query: a, format: s, baseUrl: l, cancelToken: u, ...h }) => {
				const p = ((typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {},
					m = this.mergeRequestParams(h, p),
					y = a && this.toQueryString(a),
					S = this.contentFormatters[i || G.Json],
					b = s || m.format
				return this.customFetch(`${l || this.baseUrl || ""}${r}${y ? `?${y}` : ""}`, { ...m, headers: { ...(m.headers || {}), ...(i && i !== G.FormData ? { "Content-Type": i } : {}) }, signal: (u ? this.createAbortSignal(u) : m.signal) || null, body: typeof e > "u" || e === null ? null : S(e) }).then(async (w) => {
					const T = w
					;(T.data = null), (T.error = null)
					const L = b
						? await w[b]()
								.then((Y) => (T.ok ? (T.data = Y) : (T.error = Y), T))
								.catch((Y) => ((T.error = Y), T))
						: T
					if ((u && this.abortControllers.delete(u), !w.ok)) throw L
					return L
				})
			})
			Object.assign(this, e)
		}
		encodeQueryParam(e, t) {
			return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t == "number" ? t : `${t}`)}`
		}
		addQueryParam(e, t) {
			return this.encodeQueryParam(t, e[t])
		}
		addArrayQueryParam(e, t) {
			return e[t].map((i) => this.encodeQueryParam(t, i)).join("&")
		}
		toQueryString(e) {
			const t = e || {}
			return Object.keys(t)
				.filter((i) => typeof t[i] < "u")
				.map((i) => (Array.isArray(t[i]) ? this.addArrayQueryParam(t, i) : this.addQueryParam(t, i)))
				.join("&")
		}
		addQueryParams(e) {
			const t = this.toQueryString(e)
			return t ? `?${t}` : ""
		}
		mergeRequestParams(e, t) {
			return { ...this.baseApiParams, ...e, ...(t || {}), headers: { ...(this.baseApiParams.headers || {}), ...(e.headers || {}), ...((t && t.headers) || {}) } }
		}
	}
	De.HttpClient = Ma
	class al extends Ma {
		constructor() {
			super(...arguments)
			$(this, "assistant", { assistantControllerCreate: (t, r = {}) => this.request({ path: "/assistant", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), assistantControllerFindAll: (t, r = {}) => this.request({ path: "/assistant", method: "GET", query: t, secure: !0, format: "json", ...r }), assistantControllerFindOne: (t, r = {}) => this.request({ path: `/assistant/${t}`, method: "GET", secure: !0, format: "json", ...r }), assistantControllerUpdate: (t, r, i = {}) => this.request({ path: `/assistant/${t}`, method: "PATCH", body: r, secure: !0, type: G.Json, format: "json", ...i }), assistantControllerReplace: (t, r, i = {}) => this.request({ path: `/assistant/${t}`, method: "PUT", body: r, secure: !0, type: G.Json, format: "json", ...i }), assistantControllerRemove: (t, r = {}) => this.request({ path: `/assistant/${t}`, method: "DELETE", secure: !0, format: "json", ...r }) })
			$(this, "call", { callControllerFindAll: (t, r = {}) => this.request({ path: "/call", method: "GET", query: t, secure: !0, format: "json", ...r }), callControllerFindOne: (t, r = {}) => this.request({ path: `/call/${t}`, method: "GET", secure: !0, format: "json", ...r }), callControllerCreatePhoneCall: (t, r = {}) => this.request({ path: "/call/phone", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), callControllerCreateWebCall: (t, r = {}) => this.request({ path: "/call/web", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }) })
			$(this, "credential", { credentialControllerCreate: (t, r = {}) => this.request({ path: "/credential", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), credentialControllerFindAll: (t, r = {}) => this.request({ path: "/credential", method: "GET", query: t, secure: !0, format: "json", ...r }), credentialControllerFindOne: (t, r = {}) => this.request({ path: `/credential/${t}`, method: "GET", secure: !0, format: "json", ...r }), credentialControllerUpdate: (t, r, i = {}) => this.request({ path: `/credential/${t}`, method: "PUT", body: r, secure: !0, type: G.Json, format: "json", ...i }), credentialControllerRemove: (t, r = {}) => this.request({ path: `/credential/${t}`, method: "DELETE", secure: !0, format: "json", ...r }) })
			$(this, "phoneNumber", { phoneNumberControllerBuy: (t, r = {}) => this.request({ path: "/phone-number/buy", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), phoneNumberControllerImportTwilio: (t, r = {}) => this.request({ path: "/phone-number/import/twilio", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), phoneNumberControllerImportVonage: (t, r = {}) => this.request({ path: "/phone-number/import/vonage", method: "POST", body: t, secure: !0, type: G.Json, format: "json", ...r }), phoneNumberControllerFindAll: (t, r = {}) => this.request({ path: "/phone-number", method: "GET", query: t, secure: !0, format: "json", ...r }), phoneNumberControllerFindOne: (t, r = {}) => this.request({ path: `/phone-number/${t}`, method: "GET", secure: !0, format: "json", ...r }), phoneNumberControllerUpdate: (t, r, i = {}) => this.request({ path: `/phone-number/${t}`, method: "PATCH", body: r, secure: !0, type: G.Json, format: "json", ...i }), phoneNumberControllerRemove: (t, r = {}) => this.request({ path: `/phone-number/${t}`, method: "DELETE", secure: !0, format: "json", ...r }) })
			$(this, "metrics", { metricsControllerFindAll: (t, r = {}) => this.request({ path: "/metrics", method: "GET", query: t, secure: !0, format: "json", ...r }) })
		}
	}
	;(De.Api = al), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.client = void 0)
	const sl = De,
		cl = new sl.Api({
			baseUrl: "https://api.vapi.ai",
			baseApiParams: { secure: !0 },
			securityWorker: async (n) => {
				if (n) return { headers: { Authorization: `Bearer ${n}` } }
			},
		})
	cn.client = cl
	var Aa =
		(oe && oe.__importDefault) ||
		function (n) {
			return n && n.__esModule ? n : { default: n }
		}
	Object.defineProperty(Ee, "__esModule", { value: !0 })
	const ll = Aa(Xc),
		ul = Aa(ol),
		sr = cn
	function dl(n) {
		const e = document.querySelector(`audio[data-participant-id="${n}"]`)
		e == null || e.remove()
	}
	async function hl(n, e) {
		;(n.muted = !1), (n.autoplay = !0), e != null && ((n.srcObject = new MediaStream([e])), await n.play())
	}
	async function pl(n, e) {
		const t = document.createElement("audio")
		return (t.dataset.participantId = e), document.body.appendChild(t), await hl(t, n), t
	}
	function fl(n, e) {
		n.participant.local || e.updateParticipant(n.participant.session_id, { setSubscribedTracks: { audio: !0, video: !1 } })
	}
	class ml extends ul.default {
		on(e, t) {
			return super.on(e, t), this
		}
		once(e, t) {
			return super.once(e, t), this
		}
		emit(e, ...t) {
			return super.emit(e, ...t)
		}
		removeListener(e, t) {
			return super.removeListener(e, t), this
		}
		removeAllListeners(e) {
			return super.removeAllListeners(e), this
		}
	}
	class gl extends ml {
		constructor(t, r) {
			super()
			$(this, "started", !1)
			$(this, "call", null)
			$(this, "speakingTimeout", null)
			$(this, "averageSpeechLevel", 0)
			;(sr.client.baseUrl = r ?? "https://api.vapi.ai"), sr.client.setSecurityData(t)
		}
		cleanup() {
			var t
			;(this.started = !1), (t = this.call) == null || t.destroy(), (this.call = null), (this.speakingTimeout = null)
		}
		async start(t) {
			var r
			if (this.started) return null
			this.started = !0
			try {
				const i = (await sr.client.call.callControllerCreateWebCall({ assistant: typeof t == "string" ? void 0 : t, assistantId: typeof t == "string" ? t : void 0 })).data
				return (
					this.call && this.cleanup(),
					(this.call = ll.default.createCallObject({ audioSource: !0, videoSource: !1 })),
					(r = this.call.iframe()) == null || r.style.setProperty("display", "none"),
					this.call.on("left-meeting", () => {
						this.emit("call-end"), this.cleanup()
					}),
					this.call.on("participant-left", (a) => {
						a && dl(a.participant.session_id)
					}),
					this.call.on("error", () => {}),
					this.call.on("track-started", async (a) => {
						var s, l, u
						!a || !a.participant || ((s = a.participant) != null && s.local) || (a.track.kind === "audio" && (await pl(a.track, a.participant.session_id), ((l = a == null ? void 0 : a.participant) == null ? void 0 : l.user_name) === "Vapi Speaker" && ((u = this.call) == null || u.sendAppMessage("playable"))))
					}),
					this.call.on("participant-joined", (a) => {
						!a || !this.call || fl(a, this.call)
					}),
					await this.call.join({ url: i.webCallUrl, subscribeToTracksAutomatically: !1 }),
					this.call.startRemoteParticipantsAudioLevelObserver(100),
					this.call.on("remote-participants-audio-level", (a) => {
						a && this.handleRemoteParticipantsAudioLevel(a)
					}),
					this.call.on("app-message", (a) => this.onAppMessage(a)),
					this.call.updateInputSettings({ audio: { processor: { type: "noise-cancellation" } } }),
					i
				)
			} catch (i) {
				return console.error(i), this.emit("error", i), this.cleanup(), null
			}
		}
		onAppMessage(t) {
			if (t)
				try {
					if (t.data === "listening") return this.emit("call-start")
					try {
						const r = JSON.parse(t.data)
						this.emit("message", r)
					} catch (r) {
						console.log("Error parsing message data: ", r)
					}
				} catch (r) {
					console.error(r)
				}
		}
		handleRemoteParticipantsAudioLevel(t) {
			const r = Object.values(t.participantsAudioLevel).reduce((a, s) => a + s, 0)
			this.emit("volume-level", Math.min(1, r / 0.15)),
				r > 0.01 &&
					(this.speakingTimeout ? (clearTimeout(this.speakingTimeout), (this.speakingTimeout = null)) : this.emit("speech-start"),
					(this.speakingTimeout = setTimeout(() => {
						this.emit("speech-end"), (this.speakingTimeout = null)
					}, 1e3)))
		}
		stop() {
			var t
			;(this.started = !1), (t = this.call) == null || t.destroy(), (this.call = null)
		}
		send(t) {
			var r
			;(r = this.call) == null || r.sendAppMessage(JSON.stringify(t))
		}
		setMuted(t) {
			try {
				if (!this.call) throw new Error("Call object is not available.")
				this.call.setLocalAudio(!t)
			} catch (r) {
				throw r
			}
		}
		isMuted() {
			try {
				return this.call ? this.call.localAudio() === !1 : !1
			} catch (t) {
				throw t
			}
		}
	}
	var vl = (Ee.default = gl)
	const _l = () => ({
			name: "Mary",
			model: {
				provider: "openai",
				model: "gpt-3.5-turbo",
				temperature: 0.7,
				systemPrompt: "You're Mary, an AI assistant who can help an author design characters for their story. You can also help the author to generate name using function getRandomName. Understand their intention and help them define the character. You can use functions if author requests something which function is designed for. For example: to generate name in case the author doesn't have any particular name in mind, you can use getRandomName function. Also each time some aspect of the character is finalised, you should call the finalizeDetail function",
				functions: [
					{ name: "finalizeDetail", description: "Each time a detail has been finalized, this function should be called so that the author can be informed about the same.", parameters: { type: "object", properties: { key: { type: "string", description: "This is the key or detail for which the values have been set. For example, key can be name, short description, personality traits, physical appearance, likes, dislikes, etc." }, value: { type: "string", description: "This is the value of the detail which the author is finalizing. For example, if the key is name, then the value can be John Doe if author has decided that." } } } },
					{ name: "getRandomName", description: "Generates a random name based on optional gender and nationality", parameters: { type: "object", properties: { gender: { type: "string", enum: ["male", "female"], description: "The gender for which to generate a name." }, nat: { type: "string", description: "The nationality based on which to generate a name. Example: IN for India, US for United States of America or USA and so on." } } } },
					{ name: "getCharacterInspiration", description: "Provides character inspiration based on a given query provided by the author.", parameters: { type: "object", properties: { inspiration: { type: "string", description: "Based on the user query, this defines the inspiration that the author is looking for. It could be some kind of similarity or something else as well. It should be detailed." } } } },
				],
			},
			voice: { provider: "11labs", voiceId: "paula" },
			firstMessage: "Hi. I'm Mary, your personal character sketch pad.",
		}),
		yl = ({ idle: n, loading: e, active: t, width: r, height: i, position: a, offset: s }) => {
			const l = parseInt(r) / 2,
				u = parseInt(i) / 2,
				h = { "bottom-right": `bottom: ${s}; right: ${s};`, "bottom-left": `bottom: ${s}; left: ${s};`, "top-right": `top: ${s}; right: ${s};`, "top-left": `top: ${s}; left: ${s};`, bottom: `bottom: ${s}; left: 50%; margin-left: -${l}px;`, right: `top: 50%; right: ${s}; margin-top: -${u}px;`, left: `top: 50%; left: ${s}; margin-top: -${u}px;`, top: `top: ${s}; left: 50%; margin-left: -${l}px;` },
				p = document.createElement("style")
			p.innerText = `
    @keyframes bounce {
      30% {
        transform: translateY(0%);
      }
      40% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-10%);
      }
      60% {
        transform: translateY(-5%);
      }
      70% {
        transform: translateY(0%);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .vapi-btn {
      border-radius: 50%;
      min-width: ${r};
      height: ${i};
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      text-align: left;
      align-items: center;
      position: absolute;
      padding: 0;
      animation: bounce 2s ease-in-out infinite;
      ${h[a]}
    }
    .vapi-btn-round {
      justify-content: center;
    }
    .vapi-btn-pill {
      border-radius: 8px;
      color: black;
      background: white;
      justify-content: flex-start;
      padding: 0px 10px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }
    #vapi-icon-container {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }

    #vapi-title-container {
      padding: 5px 10px;
    }
    #vapi-title {
      font-size: 1.1em;
    }
    #vapi-subtitle {
      font-size: 0.9em;
    }

    .vapi-btn-is-loading > #vapi-icon-container > img {
      animation: spin 1s linear infinite;
    }

    .vapi-btn-is-active {
      background: ${t.color};
      box-shadow: 1px 1px 80px 20px ${t.color};
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: ${t.color};
    }


    .vapi-btn-is-idle {
      background: ${n.color};
      box-shadow: 1px 1px 10px ${n.color};
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${n.color};
    }

    .vapi-btn-is-loading {
      background: ${e.color};
      box-shadow: 1px 1px 80px 20px ${e.color};
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${e.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `
			for (let m = 0; m <= 10; m++)
				p.innerText += `
      .vapi-btn-volume-${m} {
        box-shadow: 1px 1px ${5 + m * 2}px ${m * 2}px ${t.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `
			document.head.appendChild(p)
		},
		bl = ({ position: n = "bottom", offset: e = "40px", width: t = "50px", height: r = "50px", idle: i, loading: a, active: s }, l = "vapi-support-btn") => {
			yl({ idle: i, loading: a, active: s, width: t, height: r, position: n, offset: e })
			const u = document.createElement("button")
			return (u.id = l), (u.className = "vapi-btn vapi-btn-round vapi-btn-is-idle"), (u.onclick = () => {}), u
		},
		Oa = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
		wl = (n) => (e, t) => {
			const r = n[t]
			if (r) {
				if (((e.className = `vapi-btn vapi-btn-is-${t} ${r.type === "pill" ? "vapi-btn-pill" : r.type === "round" ? "vapi-btn-round" : ""}`), (e.innerHTML = ""), (e.title = r.title ?? ""), r.type === "pill")) {
					const i = document.createElement("div")
					i.id = "vapi-icon-container"
					const a = document.createElement("img")
					;(a.src = r.icon || Oa), (a.alt = "Icon"), i.appendChild(a)
					const s = document.createElement("div")
					s.id = "vapi-title-container"
					const l = document.createElement("div")
					;(l.id = "vapi-title"), (l.textContent = r.title)
					const u = document.createElement("div")
					;(u.id = "vapi-subtitle"), (u.textContent = r.subtitle), s.appendChild(l), s.appendChild(u), e.appendChild(i), e.appendChild(s)
				} else if (r.type === "round") {
					const i = document.createElement("div")
					i.id = "vapi-icon-container"
					const a = document.createElement("img")
					;(a.src = r.icon || Oa), (a.alt = "Icon"), i.appendChild(a), e.appendChild(i)
				}
			}
		}
	function Sl(n, e, t, r) {
		let i = !1
		const a = () => {
			r(e, "loading"), i ? (n.stop(), (i = !1)) : (n.start(t), (i = !0))
		}
		n.on("call-start", () => {
			r(e, "active")
		}),
			n.on("call-end", () => {
				r(e, "idle")
			}),
			n.on("speech-start", () => {
				e.classList.add("vapi-btn-is-speaking")
			}),
			n.on("speech-end", () => {
				e.classList.remove("vapi-btn-is-speaking")
			}),
			e.addEventListener("click", a),
			n.on("volume-level", (s) => {
				const l = Math.floor(s * 10)
				for (let u = 0; u <= 10; u++) e.classList.remove(`vapi-btn-volume-${u}`)
				e.classList.add(`vapi-btn-volume-${l}`)
			})
	}
	const El = ({ apiKey: n = "", assistant: e = _l(), config: t = {} }) => {
		function r(s, l) {
			const u = { ...s }
			return (
				Object.keys(l).forEach((h) => {
					typeof l[h] == "object" && l[h] !== null && !Array.isArray(l[h]) ? (u[h] = r(s[h] || {}, l[h])) : (u[h] = l[h])
				}),
				u
			)
		}
		const a = r({ position: "bottom", offset: "40px", width: "50px", height: "50px", idle: { color: "rgb(93, 254, 202)", type: "round", title: "Have a quick question?", subtitle: "Talk with our AI assistant", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg" }, loading: { color: "rgb(93, 124, 202)", type: "round", title: "Connecting...", subtitle: "Please wait", icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg" }, active: { color: "rgb(255, 0, 0)", type: "round", title: "Call is in progress...", subtitle: "End the call.", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg" } }, t)
		if (n && e) {
			const s = new vl(n),
				l = bl(a),
				u = wl(a)
			return document.body.appendChild(l), u(l, "idle"), Sl(s, l, e, u), (window.vapiSDK.vapi = s), s
		} else return console.error("API Key and Assistant Configurations are required. are required"), null
	}
	window.vapiSDK = { run: El }
})
