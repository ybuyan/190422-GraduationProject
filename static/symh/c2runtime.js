
'use strict';

function t() {
	return function () {}
}

function ba(l) {
	return function () {
		return this[l]
	}
}

function v(l) {
	return function () {
		return l
	}
}
var da = {}, ea, fa, ga, ha, ia, ja, w, la, ma, oa, pa, qa, ra, sa, ta, ua, wa, xa, ya, za, Aa, D, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function (l) {
	return l.__proto__
}
	 : function (l) {
	return l.constructor.prototype
});
(function () {
	function l(b, f, k, n) {
		this.set(b, f, k, n)
	}
	
	function d() {
		this.Ga = this.Fa = this.Ia = this.Ha = this.Qa = this.Pa = this.ma = this.la = 0
	}
	
	function a(H, f, k, n) {
		H < f ? k < n ? (r = H < k ? H : k, b = f > n ? f : n) : (r = H < n ? H : n, b = f > k ? f : k) : k < n ? (r = f < k ? f : k, b = H > n ? H : n) : (r = f < n ? f : n, b = H > k ? H : k)
	}
	
	function c() {
		this.Xc = this.Ec = null;
		this.He = 0;
		k && (this.Ec = new Set);
		this.We = [];
		this.nd = !0
	}
	
	function g(b) {
		u[x++] = b
	}
	
	function h() {
		this.wb = this.Bh = this.y = this.di = 0
	}
	
	function p(b) {
		this.Re = [];
		this.uk = this.wk = this.xk = this.vk = 0;
		this.Zf(b)
	}
	
	function e(b, f) {
		this.jn = b;
		this.hn = f;
		this.cells = {}
	}
	
	function s(b, f, k) {
		var a;
		return n.length ? (a = n.pop(), a.ro = b, a.x = f, a.y = k, a) : new fa(b, f, k)
	}
	
	function q(b, f, k) {
		this.ro = b;
		this.x = f;
		this.y = k;
		this.ah = new ga
	}
	ha = function (b) {
		window.console && window.console.log && window.console.log(b)
	};
	ea = function (b) {
		return b
	};
	ia = function (b) {
		return "undefined" === typeof b
	};
	ja = function (b) {
		return "number" === typeof b
	};
	w = function (b) {
		return "string" === typeof b
	};
	la = function (b) {
		return 0 > b ? -b : b
	};
	ma = function (b, f) {
		return b > f ? b : f
	};
	oa = function (b, f) {
		return b < f ? b : f
	};
	pa = Math.PI;
	qa = function (b) {
		return b + 0.5 | 0
	};
	ra = function (b) {
		return 0 <= b ? b | 0 : (b | 0) - 1
	};
	sa = function (b) {
		var f = b | 0;
		return f === b ? f : f + 1
	};
	ta = function (b, f, k, n, a, m, g, u) {
		var e,
		x,
		p,
		c;
		b < k ? (x = b, e = k) : (x = k, e = b);
		a < g ? (c = a, p = g) : (c = g, p = a);
		if (e < c || x > p)
			return !1;
		f < n ? (x = f, e = n) : (x = n, e = f);
		m < u ? (c = m, p = u) : (c = u, p = m);
		if (e < c || x > p)
			return !1;
		e = a - b + g - k;
		x = m - f + u - n;
		b = k - b;
		f = n - f;
		a = g - a;
		m = u - m;
		u = la(f * a - m * b);
		return la(a * x - m * e) > u ? !1 : la(b * x - f * e) <= u
	};
	l.prototype.set = function (b, f, k, n) {
		this.left = b;
		this.top = f;
		this.right = k;
		this.bottom = n
	};
	l.prototype.copy = function (b) {
		this.left =
			b.left;
		this.top = b.top;
		this.right = b.right;
		this.bottom = b.bottom
	};
	l.prototype.width = function () {
		return this.right - this.left
	};
	l.prototype.height = function () {
		return this.bottom - this.top
	};
	l.prototype.offset = function (b, f) {
		this.left += b;
		this.top += f;
		this.right += b;
		this.bottom += f;
		return this
	};
	l.prototype.normalize = function () {
		var b = 0;
		this.left > this.right && (b = this.left, this.left = this.right, this.right = b);
		this.top > this.bottom && (b = this.top, this.top = this.bottom, this.bottom = b)
	};
	l.prototype.oc = function (b, f) {
		return b >=
		this.left && b <= this.right && f >= this.top && f <= this.bottom
	};
	l.prototype.un = function (b) {
		return this.left === b.left && this.top === b.top && this.right === b.right && this.bottom === b.bottom
	};
	ua = l;
	d.prototype.wh = function (b) {
		this.la = b.left;
		this.ma = b.top;
		this.Pa = b.right;
		this.Qa = b.top;
		this.Ha = b.right;
		this.Ia = b.bottom;
		this.Fa = b.left;
		this.Ga = b.bottom
	};
	d.prototype.Sl = function (b, f) {
		if (0 === f)
			this.wh(b);
		else {
			var k = Math.sin(f),
			n = Math.cos(f),
			a = b.left * k,
			m = b.top * k,
			g = b.right * k,
			k = b.bottom * k,
			u = b.left * n,
			e = b.top * n,
			x = b.right * n,
			n = b.bottom *
				n;
			this.la = u - m;
			this.ma = e + a;
			this.Pa = x - m;
			this.Qa = e + g;
			this.Ha = x - k;
			this.Ia = n + g;
			this.Fa = u - k;
			this.Ga = n + a
		}
	};
	d.prototype.offset = function (b, f) {
		this.la += b;
		this.ma += f;
		this.Pa += b;
		this.Qa += f;
		this.Ha += b;
		this.Ia += f;
		this.Fa += b;
		this.Ga += f;
		return this
	};
	var r = 0,
	b = 0;
	d.prototype.zk = function (f) {
		a(this.la, this.Pa, this.Ha, this.Fa);
		f.left = r;
		f.right = b;
		a(this.ma, this.Qa, this.Ia, this.Ga);
		f.top = r;
		f.bottom = b
	};
	d.prototype.oc = function (b, f) {
		var k = this.Pa - this.la,
		n = this.Qa - this.ma,
		a = this.Ha - this.la,
		m = this.Ia - this.ma,
		g = b - this.la,
		u =
			f - this.ma,
		e = k * k + n * n,
		x = k * a + n * m,
		n = k * g + n * u,
		p = a * a + m * m,
		c = a * g + m * u,
		h = 1 / (e * p - x * x),
		k = (p * n - x * c) * h,
		e = (e * c - x * n) * h;
		if (0 <= k && 0 < e && 1 > k + e)
			return !0;
		k = this.Fa - this.la;
		n = this.Ga - this.ma;
		e = k * k + n * n;
		x = k * a + n * m;
		n = k * g + n * u;
		h = 1 / (e * p - x * x);
		k = (p * n - x * c) * h;
		e = (e * c - x * n) * h;
		return 0 <= k && 0 < e && 1 > k + e
	};
	d.prototype.ai = function (b, f) {
		if (f)
			switch (b) {
			case 0:
				return this.la;
			case 1:
				return this.Pa;
			case 2:
				return this.Ha;
			case 3:
				return this.Fa;
			case 4:
				return this.la;
			default:
				return this.la
			}
		else
			switch (b) {
			case 0:
				return this.ma;
			case 1:
				return this.Qa;
			case 2:
				return this.Ia;
			case 3:
				return this.Ga;
			case 4:
				return this.ma;
			default:
				return this.ma
			}
	};
	wa = d;
	xa = function (b, f) {
		for (var k in f)
			f.hasOwnProperty(k) && (b[k] = f[k]);
		return b
	};
	ya = function (b, f) {
		var k,
		n;
		f = ra(f);
		if (!(0 > f || f >= b.length))
			if (0 === f)
				b.shift();
			else
				if (f === b.length - 1)
					b.pop();
				else {
					k = f;
					for (n = b.length - 1; k < n; k++)
						b[k] = b[k + 1];
					b.length = n
				}
	};
	za = function (b, f) {
		b.length = f.length;
		var k,
		n;
		k = 0;
		for (n = f.length; k < n; k++)
			b[k] = f[k]
	};
	Aa = function (b, f) {
		var k = b.indexOf(f);
		 - 1 !== k && ya(b, k)
	};
	D = function (b) {
		return b / (180 / pa)
	};
	Ba = function (b) {
		return b *
		(180 / pa)
	};
	Ca = function (b) {
		b %= 360;
		0 > b && (b += 360);
		return b
	};
	Da = function (b) {
		b %= 2 * pa;
		0 > b && (b += 2 * pa);
		return b
	};
	Ea = function (b) {
		return Ca(Ba(b))
	};
	Fa = function (b) {
		return Da(D(b))
	};
	Ga = function (b, f, k, n) {
		return Math.atan2(n - f, k - b)
	};
	Ha = function (b, f) {
		if (b === f)
			return 0;
		var k = Math.sin(b),
		n = Math.cos(b),
		a = Math.sin(f),
		m = Math.cos(f),
		k = k * a + n * m;
		return 1 <= k ? 0 : -1 >= k ? pa : Math.acos(k)
	};
	Ia = function (b, f, k) {
		var n = Math.sin(b),
		a = Math.cos(b),
		m = Math.sin(f),
		g = Math.cos(f);
		return Math.acos(n * m + a * g) > k ? 0 < a * m - n * g ? Da(b + k) : Da(b - k) : Da(f)
	};
	Ja =
	function (b, f) {
		var k = Math.sin(b),
		n = Math.cos(b),
		a = Math.sin(f),
		m = Math.cos(f);
		return 0 >= n * a - k * m
	};
	Ka = function (b, f, k, n) {
		b = k - b;
		f = n - f;
		return Math.sqrt(b * b + f * f)
	};
	La = function (b, f) {
		return !b !== !f
	};
	Ma = function (b) {
		for (var f in b)
			if (b.hasOwnProperty(f))
				return !0;
		return !1
	};
	Oa = function (b) {
		for (var f in b)
			b.hasOwnProperty(f) && delete b[f]
	};
	var f = +new Date;
	Pa = function () {
		if ("undefined" !== typeof window.performance) {
			var b = window.performance;
			if ("undefined" !== typeof b.now)
				return b.now();
			if ("undefined" !== typeof b.webkitNow)
				return b.webkitNow();
			if ("undefined" !== typeof b.mozNow)
				return b.mozNow();
			if ("undefined" !== typeof b.msNow)
				return b.msNow()
		}
		return Date.now() - f
	};
	var k = ("undefined" === typeof window || !window.c2ejecta) && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
	c.prototype.contains = function (b) {
		return this.qc() ? !1 : k ? this.Ec.has(b) : this.Xc && this.Xc.hasOwnProperty(b)
	};
	c.prototype.add = function (b) {
		if (k)
			this.Ec.has(b) || (this.Ec.add(b), this.nd = !1);
		else {
			var f = b.toString(),
			n = this.Xc;
			n ? n.hasOwnProperty(f) || (n[f] = b, this.He++,
				this.nd = !1) : (this.Xc = {}, this.Xc[f] = b, this.He = 1, this.nd = !1)
		}
	};
	c.prototype.remove = function (b) {
		if (!this.qc())
			if (k)
				this.Ec.has(b) && (this.Ec["delete"](b), this.nd = !1);
			else
				if (this.Xc) {
					b = b.toString();
					var f = this.Xc;
					f.hasOwnProperty(b) && (delete f[b], this.He--, this.nd = !1)
				}
	};
	c.prototype.clear = function () {
		this.qc() || (k ? this.Ec.clear() : (this.Xc = null, this.He = 0), this.We.length = 0, this.nd = !0)
	};
	c.prototype.qc = function () {
		return 0 === this.count()
	};
	c.prototype.count = function () {
		return k ? this.Ec.size : this.He
	};
	var u = null,
	x = 0;
	c.prototype.Cp = function () {
		if (!this.nd) {
			if (k)
				this.We.length = this.Ec.size, u = this.We, x = 0, this.Ec.forEach(g), u = null, x = 0;
			else {
				var b = this.We;
				b.length = this.He;
				var f,
				n = 0,
				a = this.Xc;
				if (a)
					for (f in a)
						a.hasOwnProperty(f) && (b[n++] = a[f])
			}
			this.nd = !0
		}
	};
	c.prototype.eg = function () {
		this.Cp();
		return this.We
	};
	ga = c;
	h.prototype.add = function (b) {
		this.y = b - this.di;
		this.Bh = this.wb + this.y;
		this.di = this.Bh - this.wb - this.y;
		this.wb = this.Bh
	};
	h.prototype.reset = function () {
		this.wb = this.Bh = this.y = this.di = 0
	};
	Qa = h;
	Ra = function (b) {
		return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
			"\\$&")
	};
	p.prototype.Zf = function (b) {
		this.Kl = b;
		this.nh = b.length / 2;
		this.Re.length = b.length;
		this.gi = this.hi = -1;
		this.Ak = 0
	};
	p.prototype.Ho = function () {
		return !this.Kl.length
	};
	p.prototype.$a = function () {
		for (var b = this.Re, f = b[0], k = f, n = b[1], a = n, m, g, u = 1, e = this.nh; u < e; ++u)
			g = 2 * u, m = b[g], g = b[g + 1], m < f && (f = m), m > k && (k = m), g < n && (n = g), g > a && (a = g);
		this.vk = f;
		this.wk = k;
		this.xk = n;
		this.uk = a
	};
	p.prototype.wh = function (b, f, k) {
		this.Re.length = 8;
		this.nh = 4;
		var n = this.Re;
		n[0] = b.left - f;
		n[1] = b.top - k;
		n[2] = b.right - f;
		n[3] = b.top - k;
		n[4] = b.right -
			f;
		n[5] = b.bottom - k;
		n[6] = b.left - f;
		n[7] = b.bottom - k;
		this.hi = b.right - b.left;
		this.gi = b.bottom - b.top;
		this.$a()
	};
	p.prototype.gn = function (b, f, k) {
		if (this.hi !== b || this.gi !== f || this.Ak !== k) {
			this.hi = b;
			this.gi = f;
			this.Ak = k;
			var n,
			a,
			m,
			g,
			u,
			e = 0,
			x = 1,
			p = this.Kl,
			c = this.Re;
			0 !== k && (e = Math.sin(k), x = Math.cos(k));
			k = 0;
			for (m = this.nh; k < m; k++)
				n = 2 * k, a = n + 1, g = p[n] * b, u = p[a] * f, c[n] = g * x - u * e, c[a] = u * x + g * e;
			this.$a()
		}
	};
	p.prototype.oc = function (b, f) {
		var k = this.Re;
		if (b === k[0] && f === k[1])
			return !0;
		var n,
		a,
		m,
		g = this.nh,
		u = this.vk - 110,
		e = this.xk - 101,
		x = this.wk + 131,
		p = this.uk + 120,
		c,
		h,
		s = 0,
		r = 0;
		for (n = 0; n < g; n++)
			a = 2 * n, m = 2 * ((n + 1) % g), c = k[a], a = k[a + 1], h = k[m], m = k[m + 1], ta(u, e, b, f, c, a, h, m) && s++, ta(x, p, b, f, c, a, h, m) && r++;
		return 1 === s % 2 || 1 === r % 2
	};
	Sa = p;
	e.prototype.Qk = function (b, f, k) {
		var n;
		n = this.cells[b];
		return n ? (n = n[f]) ? n : k ? (n = s(this, b, f), this.cells[b][f] = n) : null : k ? (n = s(this, b, f), this.cells[b] = {}, this.cells[b][f] = n) : null
	};
	e.prototype.ik = function (b) {
		return ra(b / this.jn)
	};
	e.prototype.jk = function (b) {
		return ra(b / this.hn)
	};
	e.prototype.update = function (b, f, k) {
		var a,
		m,
		g,
		u,
		e;
		if (f)
			for (a = f.left, m = f.right; a <= m; ++a)
				for (g = f.top, u = f.bottom; g <= u; ++g)
					if (!k || !k.oc(a, g))
						if (e = this.Qk(a, g, !1))
							e.remove(b), e.qc() && (e.ah.clear(), 1E3 > n.length && n.push(e), this.cells[a][g] = null);
		if (k)
			for (a = k.left, m = k.right; a <= m; ++a)
				for (g = k.top, u = k.bottom; g <= u; ++g)
					f && f.oc(a, g) || this.Qk(a, g, !0).vo(b)
	};
	Ta = e;
	var n = [];
	q.prototype.qc = function () {
		return this.ah.qc()
	};
	q.prototype.vo = function (b) {
		this.ah.add(b)
	};
	q.prototype.remove = function (b) {
		this.ah.remove(b)
	};
	fa = q;
	var m = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
	Ua = function (b) {
		return 0 >= b || 11 <= b ? "source-over" : m[b - 1]
	};
	Va = function (b, f, k) {
		if (k)
			switch (b.jb = k.ONE, b.hb = k.ONE_MINUS_SRC_ALPHA, f) {
			case 1:
				b.jb = k.ONE;
				b.hb = k.ONE;
				break;
			case 3:
				b.jb = k.ONE;
				b.hb = k.ZERO;
				break;
			case 4:
				b.jb = k.ONE_MINUS_DST_ALPHA;
				b.hb = k.ONE;
				break;
			case 5:
				b.jb = k.DST_ALPHA;
				b.hb = k.ZERO;
				break;
			case 6:
				b.jb = k.ZERO;
				b.hb = k.SRC_ALPHA;
				break;
			case 7:
				b.jb = k.ONE_MINUS_DST_ALPHA;
				b.hb = k.ZERO;
				break;
			case 8:
				b.jb = k.ZERO;
				b.hb = k.ONE_MINUS_SRC_ALPHA;
				break;
			case 9:
				b.jb = k.DST_ALPHA;
				b.hb = k.ONE_MINUS_SRC_ALPHA;
				break;
			case 10:
				b.jb =
					k.ONE_MINUS_DST_ALPHA,
				b.hb = k.SRC_ALPHA
			}
	};
	Wa = function (b) {
		return qa(1E6 * b) / 1E6
	};
	Xa = function (b, f) {
		return "string" !== typeof b || "string" !== typeof f || b.length !== f.length ? !1 : b === f ? !0 : b.toLowerCase() === f.toLowerCase()
	}
})();
(function () {
	function l(b) {
		if (b && (b.getContext || b.dc) && !b.c2runtime) {
			b.c2runtime = this;
			var f = this;
			this.Ri = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
			this.Fe = !this.Ri && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap);
			this.Ac = !!b.dc;
			this.Af = "undefined" !== typeof window.AppMobi || this.Ac;
			this.gc = !!window.c2cocoonjs;
			this.Vc = !!window.c2ejecta;
			this.gc && (CocoonJS.App.onSuspended.addEventListener(function () {
					f.setSuspended(!0)
				}), CocoonJS.App.onActivated.addEventListener(function () {
					f.setSuspended(!1)
				}));
			this.Vc && (document.addEventListener("pagehide", function () {
					f.setSuspended(!0)
				}), document.addEventListener("pageshow", function () {
					f.setSuspended(!1)
				}), document.addEventListener("resize", function () {
					f.setSize(window.innerWidth, window.innerHeight)
				}));
			this.Xa = this.Ac || this.gc || this.Vc;
			this.hl = /tizen/i.test(navigator.userAgent);
			this.gl = /android/i.test(navigator.userAgent) && !this.hl;
			this.Pg = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent);
			this.kl = /ipad/i.test(navigator.userAgent);
			this.Io = this.Pg || this.kl || this.Vc;
			this.Jo = this.Pg && /os\s6/i.test(navigator.userAgent);
			this.Lg = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
			this.wo = /amazonwebappplatform/i.test(navigator.userAgent);
			this.Ao = /firefox/i.test(navigator.userAgent);
			this.Do = !this.Lg && /safari/i.test(navigator.userAgent);
			this.vd = "undefined" !== typeof window.c2nodewebkit ||
				/nodewebkit/i.test(navigator.userAgent);
			this.Fo = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
			this.Go = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
			this.Wi = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
			this.Xi = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
			this.il = this.Fo || this.Go || this.Xi;
			this.yo = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
			this.xo = this.gl && !this.Lg && !this.Ao && !this.wo && !this.Xa;
			this.devicePixelRatio = 1;
			this.Bc = this.Fe || this.Ri || this.Af || this.gc || this.gl || this.Io || this.Wi || this.Xi || this.yo || this.hl || this.Vc;
			this.Bc || (this.Bc = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
			"undefined" === typeof cr_is_preview || this.vd || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.vd = !0);
			this.zo = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
			this.canvas = b;
			this.Bk = document.getElementById("c2canvasdiv");
			this.ba = this.D = this.Sc = null;
			this.Ai = "";
			this.Dg = !1;
			this.yl = this.zl = 0;
			this.canvas.oncontextmenu = function (b) {
				b.preventDefault && b.preventDefault();
				return !1
			};
			this.canvas.onselectstart = function (b) {
				b.preventDefault && b.preventDefault();
				return !1
			};
			this.Ac && (window.c2runtime = this);
			this.vd && (window.ir = function (b) {
				b.preventDefault();
				return !1
			}, window.jr = function (b) {
				b.preventDefault();
				return !1
			}, require("nw.gui").App.clearCache());
			this.width = b.width;
			this.height =
				b.height;
			this.P = this.width;
			this.O = this.height;
			this.wg = this.width;
			this.vg = this.height;
			this.Gf = window.innerWidth;
			this.Ff = window.innerHeight;
			this.Z = !0;
			this.Cf = !1;
			Date.now || (Date.now = function () {
				return +new Date
			});
			this.plugins = [];
			this.types = {};
			this.q = [];
			this.Ba = [];
			this.cj = {};
			this.sc = [];
			this.wi = {};
			this.Pc = [];
			this.pe = [];
			this.Jh = [];
			this.Zm = [];
			this.$m = [];
			this.xc = new ga;
			this.Si = !1;
			this.Wc = 0;
			this.Ui = !1;
			this.Ib = [];
			this.Yc = this.rb = this.Wg = this.Ej = "";
			this.ag = this.Ul = !1;
			this.mi = this.Kf = this.sd = this.Sd = 0;
			this.dg =
				1;
			this.$d = new Qa;
			this.Qg = 0;
			this.pl = !0;
			this.$g = this.Fg = this.Bg = this.Ic = this.Hf = this.yi = 0;
			this.ff = null;
			this.zg = [];
			this.vi = [];
			this.Ag = -1;
			this.fj = [
				[]
			];
			this.Qj = this.Yg = 0;
			this.oh(null);
			this.gj = [];
			this.Zg = -1;
			this.wl = this.Nf = 0;
			this.bj = !0;
			this.nf = 0;
			this.bg = [];
			this.Hh = this.ph = -1;
			this.Ef = !0;
			this.ee = 0;
			this.Bf = !1;
			this.qp = 0;
			this.so = !1;
			this.Zi = 0;
			this.ud = this.Ii = this.uj = !1;
			this.kj = new ga;
			this.lj = new ga;
			this.dp = [];
			new Sa([]);
			new Sa([]);
			this.ye = [];
			this.xf = {};
			this.Ae = {};
			this.xe = {};
			this.Xe = {};
			this.yk = {};
			this.ol = this.Vg =
				this.Mb = this.Yb = this.nl = this.Ug = this.$ = null;
			this.Ve = this.Yi = !1;
			this.Bi = [null, null];
			this.Ud = 0;
			this.xd = {};
			this.yh = this.Je = null;
			this.load();
			this.devicePixelRatio = (this.Zd = (!this.Xa || this.Vc) && this.Dp && !this.xo) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
			this.cb();
			var k,
			a = this.Yh && !(this.vd || this.il || this.Wi || this.Ri);
			0 < this.Kb && this.setSize(window.innerWidth, window.innerHeight, !0);
			try {
				this.sn && (this.gc || this.Vc || !this.Xa) && (k = {
						alpha : a,
						depth : !1,
						antialias : !1,
						failIfMajorPerformanceCaveat : !0
					}, this.Sc = b.getContext("webgl", k) || b.getContext("experimental-webgl", k))
			} catch (g) {}
			if (this.Sc) {
				this.Xa || (this.Ya = document.createElement("canvas"), jQuery(this.Ya).appendTo(this.canvas.parentNode), this.Ya.oncontextmenu = v(!1), this.Ya.onselectstart = v(!1), this.Ya.width = this.wg, this.Ya.height = this.vg, jQuery(this.Ya).css({
						width : this.wg + "px",
						height : this.vg + "px"
					}), this.Il(), this.pj = this.Ya.getContext("2d"));
				this.D = new da.Vp(this.Sc, this.Bc);
				this.D.ke(b.width,
					b.height);
				this.ba = null;
				this.canvas.addEventListener("webglcontextlost", function (b) {
					b.preventDefault();
					f.Po();
					console.log("[Construct 2] WebGL context lost");
					window.cr_setSuspended(!0)
				}, !1);
				this.canvas.addEventListener("webglcontextrestored", function () {
					f.D.hr();
					f.D.ke(f.D.width, f.D.height, !0);
					f.Yb = null;
					f.Mb = null;
					f.Bi[0] = null;
					f.Bi[1] = null;
					f.Qo();
					f.Z = !0;
					console.log("[Construct 2] WebGL context restored");
					window.cr_setSuspended(!1)
				}, !1);
				var n,
				m,
				e,
				p,
				c,
				h;
				b = 0;
				for (k = this.q.length; b < k; b++)
					for (m = this.q[b],
						a = 0, n = m.J.length; a < n; a++)
						p = m.J[a], p.Za = this.D.Yk(p.id), this.Ve = this.Ve || this.D.mh(p.Za);
				b = 0;
				for (k = this.sc.length; b < k; b++) {
					c = this.sc[b];
					a = 0;
					for (n = c.J.length; a < n; a++)
						p = c.J[a], p.Za = this.D.Yk(p.id);
					a = 0;
					for (n = c.T.length; a < n; a++)
						for (h = c.T[a], m = 0, e = h.J.length; m < e; m++)
							p = h.J[m], p.Za = this.D.Yk(p.id), this.Ve = this.Ve || this.D.mh(p.Za)
				}
			} else {
				if (0 < this.Kb && this.Ac) {
					this.canvas = null;
					document.oncontextmenu = v(!1);
					document.onselectstart = v(!1);
					this.ba = AppMobi.canvas.getContext("2d");
					try {
						this.ba.samplingMode = this.U ? "smooth" :
							"sharp",
						this.ba.globalScale = 1,
						this.ba.HTML5CompatibilityMode = !0,
						this.ba.imageSmoothingEnabled = this.U
					} catch (s) {}
					0 !== this.width && 0 !== this.height && (this.ba.width = this.width, this.ba.height = this.height)
				}
				this.ba || (k = this.gc ? {
						antialias : !!this.U,
						alpha : a
					}
					 : {
					alpha : a
				}, this.ba = b.getContext("2d", k), this.ba.webkitImageSmoothingEnabled = this.U, this.ba.mozImageSmoothingEnabled = this.U, this.ba.msImageSmoothingEnabled = this.U, this.ba.imageSmoothingEnabled = this.U);
				this.pj = this.Ya = null
			}
			this.Gh = function () {
				f.Hc(!1)
			};
			window ==
			window.top || this.Xa || this.il || this.Wi || (document.addEventListener("mousedown", function () {
					window.focus()
				}, !0), document.addEventListener("touchstart", function () {
					window.focus()
				}, !0));
			"undefined" !== typeof cr_is_preview && (this.gc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ha("Reloading for continuous preview"), this.Wg = "__c2_continuouspreview", this.ag = !0), this.Wo && !this.Bc && (jQuery(window).focus(function () {
						f.setSuspended(!1)
					}),
					jQuery(window).blur(function () {
						f.setSuspended(!0)
					})));
			0 === this.Kb && this.Zd && 1 < this.devicePixelRatio && this.setSize(this.Ta, this.Sa, !0);
			this.am();
			this.go();
			this.wa = {}
		}
	}
	
	function d(b) {
		b.target.result.createObjectStore("saves", {
			keyPath : "slot"
		})
	}
	
	function a(b, f, k, a) {
		var g = indexedDB.open("_C2SaveStates");
		g.onupgradeneeded = d;
		g.onerror = a;
		g.onsuccess = function (n) {
			n = n.target.result;
			n.onerror = a;
			n.transaction(["saves"], "readwrite").objectStore("saves").put({
				slot : b,
				data : f
			}).onsuccess = k
		}
	}
	
	function c(b, f, k) {
		var a = indexedDB.open("_C2SaveStates");
		a.onupgradeneeded = d;
		a.onerror = k;
		a.onsuccess = function (a) {
			a = a.target.result;
			a.onerror = k;
			var n = a.transaction(["saves"]).objectStore("saves").get(b);
			n.onsuccess = function () {
				n.result ? f(n.result.data) : f(null)
			}
		}
	}
	
	function g() {
		ha("Reloading for continuous preview");
		window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
	}
	
	function h(b) {
		var f,
		k = {};
		for (f in b)
			!b.hasOwnProperty(f) || b[f]instanceof ga || b[f] && "undefined" !== typeof b[f].Wq ||
			(k[f] = b[f]);
		return k
	}
	l.prototype.setSize = function (b, f, k) {
		var a = 0,
		g = 0,
		n = 0,
		m = 0,
		m = 0,
		e = this.Jo && this.Do && !navigator.standalone && !this.Xa && !this.Fe;
		e && (f += 60);
		if (this.Gf !== b || this.Ff !== f || k) {
			this.Gf = b;
			this.Ff = f;
			var p = this.Kb,
			c = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Bf;
			if (c || 0 !== this.Kb || k)
				c && 0 < this.Ud && (p = this.Ud), 4 <= p ? (k = this.Ta / this.Sa, b / f > k ? (n = f * k, 5 === p ? (m = n / this.Ta, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), n = this.Ta * m, m *= this.Sa,
							a = (b - n) / 2, g = (f - m) / 2, b = n, f = m) : (a = (b - n) / 2, b = n)) : (m = b / k, 5 === p ? (m /= this.Sa, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), n = this.Ta * m, m *= this.Sa, a = (b - n) / 2, g = (f - m) / 2, b = n) : g = (f - m) / 2, f = m), c && !this.vd && (g = a = 0), a = Math.floor(a), g = Math.floor(g), b = Math.floor(b), f = Math.floor(f)) : this.vd && this.Bf && 0 === this.Ok && (a = Math.floor((b - this.Ta) / 2), g = Math.floor((f - this.Sa) / 2), b = this.Ta, f = this.Sa), 2 > p && (this.ef = this.devicePixelRatio), this.Zd && this.kl && 1 < this.devicePixelRatio && (1024 <= b && (b = 1023), 1024 <= f && (f = 1023)), c = this.devicePixelRatio,
				this.wg = b, this.vg = f, this.width = Math.round(b * c), this.height = Math.round(f * c), this.Z = !0, this.jm ? (this.P = this.width, this.O = this.height, this.ec = !0) : this.width < this.Ta && this.height < this.Sa || 1 === p ? (this.P = this.width, this.O = this.height, this.ec = !0) : (this.P = this.Ta, this.O = this.Sa, this.ec = !1, 2 === p ? (k = this.Ta / this.Sa, p = this.Gf / this.Ff, p < k ? this.P = this.O * p : p > k && (this.O = this.P / p)) : 3 === p && (k = this.Ta / this.Sa, p = this.Gf / this.Ff, p > k ? this.P = this.O * p : p < k && (this.O = this.P / p))), this.Bk && !this.Xa && (jQuery(this.Bk).css({
						width : b + "px",
						height : f + "px",
						"margin-left" : a,
						"margin-top" : g
					}), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
						width : b + "px",
						height : f + "px"
					})), this.canvas && (this.canvas.width = Math.round(b * c), this.canvas.height = Math.round(f * c), this.Vc ? (this.canvas.style.left = a + "px", this.canvas.style.top = g + "px", this.canvas.style.width = b + "px", this.canvas.style.height = f + "px") : this.Zd && !this.Xa && jQuery(this.canvas).css({
						width : b + "px",
						height : f + "px"
					})), this.Ya && (this.Ya.width = b, this.Ya.height = f, jQuery(this.Ya).css({
						width : b + "px",
						height : f + "px"
					})), this.D && this.D.ke(Math.round(b * c), Math.round(f * c)), this.Ac && this.ba && (this.ba.width = b, this.ba.height = f), this.ba && (this.ba.webkitImageSmoothingEnabled = this.U, this.ba.mozImageSmoothingEnabled = this.U, this.ba.msImageSmoothingEnabled = this.U, this.ba.imageSmoothingEnabled = this.U), this.am(), this.Xa || !e && !this.Pg || window.setTimeout(function () {
					window.scrollTo(0, 1)
				}, 100)
		}
	};
	l.prototype.am = function () {
		if (this.an && 0 !== this.oj) {
			var b = "portrait";
			2 === this.oj && (b = "landscape");
			screen.lockOrientation ?
			screen.lockOrientation(b) : screen.webkitLockOrientation ? screen.webkitLockOrientation(b) : screen.mozLockOrientation ? screen.mozLockOrientation(b) : screen.msLockOrientation && screen.msLockOrientation(b)
		}
	};
	l.prototype.Po = function () {
		this.Yi = !0;
		var b,
		f,
		k;
		b = 0;
		for (f = this.q.length; b < f; b++)
			k = this.q[b], k.Of && k.Of()
	};
	l.prototype.Qo = function () {
		this.Yi = !1;
		var b,
		f,
		k;
		b = 0;
		for (f = this.q.length; b < f; b++)
			k = this.q[b], k.eh && k.eh()
	};
	l.prototype.Il = function () {
		if (!this.Xa) {
			var b = document.mozFullScreen || document.webkitIsFullScreen ||
				document.fullScreen || document.msFullscreenElement || this.Bf ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
			b.position = "absolute";
			jQuery(this.Ya).css(b)
		}
	};
	var p = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
	l.prototype.setSuspended = function (b) {
		var f;
		if (b && !this.Cf)
			for (ha("[Construct 2] Suspending"), this.Cf = !0, -1 !== this.ph && p && p(this.ph), -1 !== this.Hh && clearTimeout(this.Hh), b = 0, f =
					this.bg.length; b < f; b++)
				this.bg[b](!0);
		else if (!b && this.Cf) {
			ha("[Construct 2] Resuming");
			this.Cf = !1;
			this.Qg = Pa();
			this.Hf = Pa();
			b = this.Kf = this.Fg = 0;
			for (f = this.bg.length; b < f; b++)
				this.bg[b](!1);
			this.Hc(!1)
		}
	};
	l.prototype.Ym = function (b) {
		this.bg.push(b)
	};
	l.prototype.load = function () {
		var b = Mb();
		this.name = b[0];
		this.Nk = b[1];
		this.Kb = b[11];
		this.Ok = b[11];
		this.Ta = b[9];
		this.Sa = b[10];
		this.Fl = this.Ta / 2;
		this.Gl = this.Sa / 2;
		this.Xa && !this.Vc && (4 <= b[11] || 0 === b[11]) && (ha("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"),
			this.Ok = this.Kb = 3);
		this.Tj = b[17];
		this.Jf = b[18];
		0 === this.Jf && (this.Je = new Image, this.Je.src = "loading-logo.png");
		this.Nf = b[20];
		this.Fc = new G(this);
		var f,
		k,
		a,
		g,
		n,
		m,
		e,
		p,
		c;
		f = 0;
		for (k = b[2].length; f < k; f++)
			e = b[2][f], Ya(e), c = new e[0](this), c.xh = e[1], c.wd = e[2], c.rl = e[9], c.N && c.N(), this.plugins.push(c);
		b = Mb();
		f = 0;
		for (k = b[3].length; f < k; f++) {
			e = b[3][f];
			n = e[1];
			c = null;
			a = 0;
			for (g = this.plugins.length; a < g; a++)
				if (this.plugins[a]instanceof n) {
					c = this.plugins[a];
					break
				}
			var h = new c.oa(c);
			h.name = e[0];
			h.H = e[2];
			h.Pi = e[3].slice(0);
			h.Fp = e[3].length;
			h.bn = e[4];
			h.Tn = e[5];
			h.R = e[11];
			h.H ? (h.ql = [], h.Qc = this.nf++, h.qa = null) : (h.ql = null, h.Qc = -1, h.qa = []);
			h.Cg = null;
			h.De = null;
			h.Jk = null;
			h.rc = !1;
			h.Hb = null;
			e[6] ? (h.Ch = e[6][0], h.Mj = e[6][1], h.cg = e[6][2]) : (h.Ch = null, h.Mj = 0, h.cg = 0);
			h.Gb = e[7] ? e[7] : null;
			h.index = f;
			h.j = [];
			h.yg = [];
			h.Fd = [new Za(h)];
			h.Oc = 0;
			h.yc = null;
			h.on = 0;
			h.Ue = !0;
			h.Lh = $a;
			h.Uk = ab;
			h.bo = bb;
			h.ca = cb;
			h.Uf = db;
			h.Vf = eb;
			h.Ad = fb;
			h.Gg = gb;
			h.Ci = hb;
			h.Ei = ib;
			h.mc = jb;
			h.Vk = kb;
			h.Ck = new Ta(this.Ta, this.Sa);
			h.rk = !0;
			h.sk = !1;
			h.wa = {};
			h.toString = lb;
			h.Ba = [];
			a =
				0;
			for (g = e[8].length; a < g; a++) {
				p = e[8][a];
				var s = p[1],
				r = null;
				n = 0;
				for (m = this.Ba.length; n < m; n++)
					if (this.Ba[n]instanceof s) {
						r = this.Ba[n];
						break
					}
				r || (r = new s(this), r.tl = [], r.jj = new ga, r.N && r.N(), this.Ba.push(r));
				 - 1 === r.tl.indexOf(h) && r.tl.push(h);
				n = new r.oa(r, h);
				n.name = p[0];
				n.R = p[2];
				n.N();
				h.Ba.push(n)
			}
			h.global = e[9];
			h.Ti = e[10];
			h.J = [];
			a = 0;
			for (g = e[12].length; a < g; a++)
				h.J.push({
					id : e[12][a][0],
					name : e[12][a][1],
					Za : -1,
					xa : !0,
					index : a
				});
			h.pr = e[13];
			this.Tj && !h.H && !h.Ti && c.wd || h.N();
			h.name && (this.types[h.name] = h);
			this.q.push(h);
			c.xh && (a = new c.fa(h), a.uid = this.Nf++, a.Ll = this.wl++, a.Wd = 0, a.uf = mb, a.toString = nb, a.u = e[14], a.N(), h.j.push(a), this.xd[a.uid.toString()] = a)
		}
		f = 0;
		for (k = b[4].length; f < k; f++)
			for (n = b[4][f], m = this.q[n[0]], a = 1, g = n.length; a < g; a++)
				e = this.q[n[a]], e.qa.push(m), m.ql.push(e);
		f = 0;
		for (k = b[23].length; f < k; f++) {
			n = b[23][f];
			m = [];
			a = 0;
			for (g = n.length; a < g; a++)
				m.push(this.q[n[a]]);
			a = 0;
			for (g = m.length; a < g; a++)
				m[a].rc = !0, m[a].Hb = m
		}
		if (0 < this.nf)
			for (f = 0, k = this.q.length; f < k; f++)
				if (e = this.q[f], !e.H && e.qa.length) {
					e.Cg = Array(this.nf);
					e.De = Array(this.nf);
					e.Jk = Array(this.nf);
					h = [];
					a = r = s = p = 0;
					for (g = e.qa.length; a < g; a++)
						for (c = e.qa[a], e.Cg[c.Qc] = p, p += c.Fp, e.De[c.Qc] = s, s += c.bn, e.Jk[c.Qc] = r, r += c.Tn, n = 0, m = c.J.length; n < m; n++)
							h.push(xa({}, c.J[n]));
					e.J = h.concat(e.J);
					a = 0;
					for (g = e.J.length; a < g; a++)
						e.J[a].index = a
				}
		f = 0;
		for (k = b[5].length; f < k; f++)
			e = b[5][f], a = new ob(this, e), this.cj[a.name] = a, this.sc.push(a);
		f = 0;
		for (k = b[6].length; f < k; f++)
			e = b[6][f], a = new pb(this, e), this.wi[a.name] = a, this.Pc.push(a);
		f = 0;
		for (k = this.Pc.length; f < k; f++)
			this.Pc[f].za();
		f = 0;
		for (k = this.Pc.length; f < k; f++)
			this.Pc[f].fm();
		f = 0;
		for (k = this.Jh.length; f < k; f++)
			this.Jh[f].za();
		this.Jh.length = 0;
		this.hc = b[8];
		this.ef = 1;
		this.sn = b[12];
		this.U = b[13];
		this.Yh = b[14];
		this.Dp = b[16];
		this.oj = b[19];
		this.an = 0 < this.oj;
		this.Wo = b[21];
		this.ec = this.jm = b[22];
		this.Ah = Date.now()
	};
	var e = !1;
	l.prototype.im = function (b) {
		b.onerror = function (f) {
			e = b.dn = !0;
			console && console.error && console.error("Error loading image '" + b.src + "': ", f)
		};
		this.pe.push(b)
	};
	l.prototype.Sn = function (b) {
		var f,
		k;
		f = 0;
		for (k = this.pe.length; f <
			k; f++)
			if (this.pe[f].ln === b)
				return this.pe[f];
		return null
	};
	l.prototype.tk = function () {
		var b = 0,
		f = 0,
		k = !0,
		a,
		g,
		n;
		a = 0;
		for (g = this.pe.length; a < g; a++) {
			n = this.pe[a];
			var m = n.Fk;
			if (!m || 0 >= m)
				m = 5E4;
			b += m;
			!n.complete && !n.loaded || n.dn ? k = !1 : f += m
		}
		this.X = 0 == b ? 0 : f / b;
		return k
	};
	l.prototype.go = function () {
		if (this.ba || this.D) {
			var b = this.ba || this.pj;
			this.Ya && this.Il();
			this.X = 0;
			this.ml = -1;
			if (this.tk())
				this.qo();
			else {
				var f = Date.now() - this.Ah;
				if (b) {
					var k = this.width,
					a = this.height,
					g = this.devicePixelRatio;
					this.Ya && (k = this.wg, a = this.vg,
						g = 1);
					if (3 !== this.Jf && (this.gc || 500 <= f && this.ml != this.X)) {
						b.clearRect(0, 0, k, a);
						var f = k / 2,
						a = a / 2,
						k = 0 === this.Jf && this.Je.complete,
						n = 40 * g,
						m = 0,
						h = 80 * g,
						p;
						k && (h = this.Je.width * g, p = this.Je.height * g, n = h / 2, m = p / 2, b.drawImage(this.Je, ra(f - n), ra(a - m), h, p));
						1 >= this.Jf ? (f = ra(f - n) + 0.5, a = ra(a + (m + (k ? 12 * g : 0))) + 0.5, b.fillStyle = e ? "red" : "DodgerBlue", b.fillRect(f, a, Math.floor(h * this.X), 6 * g), b.strokeStyle = "black", b.strokeRect(f, a, h, 6 * g), b.strokeStyle = "white", b.strokeRect(f - 1 * g, a - 1 * g, h + 2 * g, 8 * g)) : 2 === this.Jf && (b.font = this.Vc ?
								"12pt ArialMT" : "12pt Arial", b.fillStyle = e ? "#f00" : "#999", b.or = "middle", g = Math.round(100 * this.X) + "%", k = b.measureText ? b.measureText(g) : null, b.fillText(g, f - (k ? k.width : 0) / 2, a))
					}
					this.ml = this.X
				}
				setTimeout(function (b) {
					return function () {
						b.go()
					}
				}
					(this), this.gc ? 10 : 100)
			}
		}
	};
	l.prototype.qo = function () {
		this.Ya && (this.canvas.parentNode.removeChild(this.Ya), this.Ya = this.pj = null);
		this.Ah = Date.now();
		this.Hf = Pa();
		var b,
		f,
		k;
		if (this.Tj)
			for (b = 0, f = this.q.length; b < f; b++)
				k = this.q[b], k.H || k.Ti || !k.na.wd || k.N();
		else
			this.Ef = !1;
		b = 0;
		for (f = this.sc.length; b < f; b++)
			this.sc[b].mn();
		2 <= this.Kb && (b = this.Ta / this.Sa, f = this.width / this.height, this.ef = 2 !== this.Kb && f > b || 2 === this.Kb && f < b ? this.height / this.Sa : this.width / this.Ta);
		this.Nk ? this.cj[this.Nk].Kj() : this.sc[0].Kj();
		this.Tj || (this.ee = 1, this.trigger(G.prototype.d.Qh, null));
		navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
		b = 0;
		for (f = this.q.length; b < f; b++)
			k = this.q[b], k.Oo && k.Oo();
		this.Hc(!1);
		this.Ac && AppMobi.webview.execute("onGameReady();")
	};
	var s =
		window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
	l.prototype.Hc = function (b) {
		if (this.$) {
			var f = Pa();
			if (this.so && this.uj && 29 > f - this.Zi)
				this.uj = !1, this.Zi = f, s ? this.ph = s(this.Gh, this.canvas) : this.Hh = setTimeout(this.Gh, this.Bc ? 1 : 16);
			else {
				this.uj = !0;
				this.Zi = f;
				var k = this.Kb,
				a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement;
				(a || this.Bf) && 0 <
				this.Ud && (k = this.Ud);
				if (0 < k && (!this.Pg || window.self !== window.top)) {
					var k = window.innerWidth,
					g = window.innerHeight;
					this.Gf === k && this.Ff === g || this.setSize(k, g)
				}
				this.Xa || (a ? (this.Dg || (this.Ai = jQuery(this.canvas).css("margin") || "0", this.Dg = !0), this.Lg || this.vd || jQuery(this.canvas).css({
							"margin-left" : "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
							"margin-top" : "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
						})) : this.Dg ? (this.Lg || this.vd || jQuery(this.canvas).css("margin",
							this.Ai), this.Ai = "", this.Dg = !1, 0 === this.Kb && this.setSize(Math.round(this.zl / this.devicePixelRatio), Math.round(this.yl / this.devicePixelRatio), !0)) : (this.zl = this.width, this.yl = this.height));
				this.Ef && (a = this.tk(), this.ee = this.X, a && (this.Ef = !1, this.X = 1, this.trigger(G.prototype.d.Qh, null)));
				this.Mo();
				
				// console.log("下面加了loading");
				!this.Z && !this.gc || this.Yi || this.ag || b || (this.Z = !1, this.D ? this.Ub() : this.pc(), this.yh && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.yh[0], this.yh[1]), this.trigger(G.prototype.d.xm, null)), this.yh = null));
				this.gr || (this.Ic++, this.Bg++, this.Fg++);
				this.Kf += Pa() - f;
				this.Cf || b || (s ? this.ph = s(this.Gh, this.canvas) : this.Hh = setTimeout(this.Gh, this.Bc ? 1 : 16))
			}
		}
	};
	l.prototype.Mo = function () {
		var b,
		f,
		k,
		a,
		g,
		n,
		m,
		e,
		h;
		b = Pa();
		1E3 <= b - this.Hf && (this.Hf += 1E3, this.yi = this.Fg, this.Fg = 0, this.mi = this.Kf, this.Kf = 0);
		this.pl && (0 !== this.Qg && (f = b - this.Qg, 0 !== f || this.zo ? (this.sd = f / 1E3, 0.5 < this.sd ? this.sd = 0 : 0.1 < this.sd && (this.sd = 0.1)) : (10 <= this.tr && (this.pl = !1), this.sd = 1 / 60)), this.Qg = b);
		this.Sd = this.sd * this.dg;
		this.$d.add(this.Sd);
		b = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Bf;
		2 <= this.Kb || b && 0 < this.Ud ? (f = this.Ta / this.Sa, k = this.width / this.height, a = this.Kb, b && 0 < this.Ud && (a = this.Ud), this.ef = 2 !== a && k > f || 2 === a && k < f ? this.height / this.Sa : this.width / this.Ta, this.$ && (this.$.Fj(this.$.scrollX), this.$.Ql(this.$.scrollY))) : this.ef = this.Zd ? this.devicePixelRatio : 1;
		this.cb();
		this.Wc++;
		this.Fc.hp();
		this.Wc--;
		this.cb();
		this.Wc++;
		b = 0;
		for (f = this.q.length; b < f; b++)
			if (m = this.q[b], !m.H && (m.Ba.length || m.qa.length))
				for (k = 0, a = m.j.length; k < a; k++)
					for (e = m.j[k], g = 0, n = e.M.length; g < n; g++)
						e.M[g].Hc();
		b = 0;
		for (f = this.q.length; b < f; b++)
			if (m = this.q[b], !m.H && (m.Ba.length || m.qa.length))
				for (k = 0, a = m.j.length; k < a; k++)
					for (e = m.j[k], g = 0, n = e.M.length; g < n; g++)
						h = e.M[g], h.$o && h.$o();
		k = this.kj.eg();
		b = 0;
		for (f = k.length; b < f; b++)
			k[b].Hc();
		this.Wc--;
		this.to();
		for (b = 0; this.ff && 10 > b++; )
			this.Hk(this.ff);
		b = 0;
		for (f = this.Pc.length; b < f; b++)
			this.Pc[b].Ki = !1;
		this.$.lf && this.$.lf.Ea();
		this.dp.length = 0;
		this.bj = !1;
		this.Wc++;
		b = 0;
		for (f = this.q.length; b < f; b++)
			if (m = this.q[b], !m.H && (m.Ba.length || m.qa.length))
				for (k = 0, a = m.j.length; k < a; k++)
					for (e = m.j[k], g = 0, n = e.M.length; g < n; g++)
						h = e.M[g], h.Fh && h.Fh();
		k = this.lj.eg();
		b = 0;
		for (f = k.length; b < f; b++)
			k[b].Fh();
		this.Wc--
	};
	l.prototype.Hk = function (b) {
		var f = this.$;
		this.$.rp();
		var k,
		a,
		g,
		n,
		m,
		e,
		h;
		if (this.D)
			for (k = 0, a = this.q.length; k < a; k++)
				m = this.q[k], m.H || !m.Kh || m.global && 0 !== m.j.length || -1 !== b.zf.indexOf(m) || m.Kh();
		f == b && (this.Fc.Db.length = 0);
		b.Kj();
		k = 0;
		for (a = this.q.length; k < a; k++)
			if (m = this.q[k],
				m.global || m.na.xh)
				for (b = 0, f = m.j.length; b < f; b++)
					if (e = m.j[b], e.mj && e.mj(), e.M)
						for (g = 0, n = e.M.length; g < n; g++)
							h = e.M[g], h.mj && h.mj();
		this.bj = this.Z = !0;
		this.cb()
	};
	l.prototype.Nj = function (b) {
		this.kj.add(b)
	};
	l.prototype.up = function (b) {
		this.lj.add(b)
	};
	l.prototype.Hg = function (b) {
		return b && -1 !== b.Mf ? this.sd * b.Mf : this.Sd
	};
	l.prototype.pc = function () {
		this.$.pc(this.ba);
		this.Ac && this.ba.present()
	};
	l.prototype.Ub = function () {
		this.$.Ub(this.D);
		this.D.kr()
	};
	l.prototype.Wm = function (b) {
		b && this.zg.push(b)
	};
	l.prototype.ep =
	function (b) {
		Aa(this.zg, b)
	};
	l.prototype.Hi = function (b) {
		b = b.toString();
		return this.xd.hasOwnProperty(b) ? this.xd[b] : null
	};
	l.prototype.se = function (b) {
		var f,
		k;
		if (!this.xc.contains(b)) {
			this.xc.add(b);
			if (b.rc)
				for (f = 0, k = b.siblings.length; f < k; f++)
					this.se(b.siblings[f]);
			this.Si && this.xc.We.push(b);
			this.Wc++;
			this.trigger(Object.getPrototypeOf(b.type.na).d.zm, b);
			this.Wc--
		}
	};
	l.prototype.cb = function () {
		var b,
		f,
		k,
		a,
		g,
		n,
		m,
		e,
		h,
		p;
		this.Si = !0;
		a = 0;
		for (n = this.Ib.length; a < n; a++)
			for (b = this.Ib[a], f = b.type, f.j.push(b), g = 0,
				m = f.qa.length; g < m; g++)
				f.qa[g].j.push(b), f.qa[g].Ue = !0;
		this.Ib.length = 0;
		n = this.xc.eg();
		for (a = 0; a < n.length; a++) {
			b = n[a];
			f = b.type;
			k = f.j;
			g = 0;
			for (m = this.zg.length; g < m; g++)
				this.zg[g](b);
			Aa(k, b);
			0 === k.length && (f.sk = !1);
			b.ug && f.Ck.update(b, b.ug, null);
			b.n && (ya(b.n.j, b.Xb()), b.n.Sb = !0);
			g = 0;
			for (m = f.qa.length; g < m; g++)
				Aa(f.qa[g].j, b), f.qa[g].Ue = !0;
			if (b.M)
				for (g = 0, m = b.M.length; g < m; g++)
					k = b.M[g], k.yd && k.yd(), k.xb.jj.remove(b);
			this.kj.remove(b);
			this.lj.remove(b);
			g = 0;
			for (m = this.Fc.Db.length; g < m; g++)
				if (h = this.Fc.Db[g],
					h.ub.hasOwnProperty(f.index) && Aa(h.ub[f.index].Uc, b), !f.H)
					for (k = 0, e = f.qa.length; k < e; k++)
						p = f.qa[k], h.ub.hasOwnProperty(p.index) && Aa(h.ub[p.index].Uc, b);
			b.yd && b.yd();
			this.xd.hasOwnProperty(b.uid.toString()) && delete this.xd[b.uid.toString()];
			this.$g--;
			64 > f.yg.length && f.yg.push(b);
			f.Ue = !0
		}
		this.xc.qc() || (this.Z = !0);
		this.xc.clear();
		this.Si = !1
	};
	var q = [];
	l.prototype.Qd = function (b, f, k, a, g, n) {
		var m,
		e,
		h,
		p;
		if (!b)
			return null;
		var c = this.q[b[1]],
		s = c.na.wd;
		if (this.Ef && s && !c.Ti || s && !this.D && 11 === b[0][11])
			return null;
		var r = f;
		s || (f = null);
		var d;
		c.yg.length ? (d = c.yg.pop(), d.Bb = !0, c.na.fa.call(d, c)) : (d = new c.na.fa(c), d.Bb = !1);
		d.uid = k && !n ? b[2] : this.Nf++;
		this.xd[d.uid.toString()] = d;
		d.Ll = this.wl++;
		d.Wd = c.j.length;
		m = 0;
		for (e = this.Ib.length; m < e; ++m)
			this.Ib[m].type === c && d.Wd++;
		d.uf = mb;
		h = b[3];
		if (d.Bb)
			Oa(d.wa);
		else {
			d.wa = {};
			if ("undefined" !== typeof cr_is_preview)
				for (d.fl = [], d.fl.length = h.length, m = 0, e = h.length; m < e; m++)
					d.fl[m] = h[m][1];
			d.Ka = [];
			d.Ka.length = h.length
		}
		m = 0;
		for (e = h.length; m < e; m++)
			d.Ka[m] = h[m][0];
		if (s) {
			var l = b[0];
			d.x =
				ia(a) ? l[0] : a;
			d.y = ia(g) ? l[1] : g;
			d.z = l[2];
			d.width = l[3];
			d.height = l[4];
			d.depth = l[5];
			d.k = l[6];
			d.opacity = l[7];
			d.nb = l[8];
			d.ob = l[9];
			d.yb = l[10];
			m = l[11];
			!this.D && c.J.length && (d.yb = m);
			d.jf = Ua(d.yb);
			this.Sc && Va(d, d.yb, this.Sc);
			if (d.Bb) {
				m = 0;
				for (e = l[12].length; m < e; m++)
					for (h = 0, p = l[12][m].length; h < p; h++)
						d.ua[m][h] = l[12][m][h];
				d.lb.set(0, 0, 0, 0);
				d.ug.set(0, 0, -1, -1);
				d.Nc.wh(d.lb);
				d.ci.length = 0
			} else {
				d.ua = l[12].slice(0);
				m = 0;
				for (e = d.ua.length; m < e; m++)
					d.ua[m] = l[12][m].slice(0);
				d.V = [];
				d.ld = [];
				d.ld.length = c.J.length;
				d.lb =
					new ua(0, 0, 0, 0);
				d.ug = new ua(0, 0, -1, -1);
				d.Nc = new wa;
				d.ci = [];
				d.Aa = qb;
				d.Vq = rb;
				d.oc = sb;
				d.$a = tb;
				d.rr = ub;
				d.Xb = vb
			}
			d.wp = !1;
			d.yp = 0;
			d.xp = 0;
			d.vp = null;
			14 === l.length && (d.wp = !0, d.yp = l[13][0], d.xp = l[13][1], d.vp = l[13][2]);
			m = 0;
			for (e = c.J.length; m < e; m++)
				d.ld[m] = !0;
			d.gd = wb;
			d.gd();
			d.gm = !!d.V.length;
			d.bi = !0;
			d.ii = !0;
			c.rk = !0;
			d.visible = !0;
			d.Mf = -1;
			d.n = f;
			d.qe = f.j.length;
			"undefined" === typeof d.wc && (d.wc = null);
			this.Z = d.hf = !0
		}
		d.toString = nb;
		var A;
		m = q.length = 0;
		for (e = c.qa.length; m < e; m++)
			q.push.apply(q, c.qa[m].Ba);
		q.push.apply(q,
			c.Ba);
		if (d.Bb)
			for (m = 0, e = q.length; m < e; m++) {
				var E = q[m];
				A = d.M[m];
				A.Bb = !0;
				E.xb.fa.call(A, E, d);
				l = b[4][m];
				h = 0;
				for (p = l.length; h < p; h++)
					A.u[h] = l[h];
				A.N();
				E.xb.jj.add(d)
			}
		else
			for (d.M = [], m = 0, e = q.length; m < e; m++)
				E = q[m], A = new E.xb.fa(E, d), A.Bb = !1, A.u = b[4][m].slice(0), A.N(), d.M.push(A), E.xb.jj.add(d);
		l = b[5];
		if (d.Bb)
			for (m = 0, e = l.length; m < e; m++)
				d.u[m] = l[m];
		else
			d.u = l.slice(0);
		this.Ib.push(d);
		f && (f.j.push(d), 1 !== f.Zc || 1 !== f.$c) && (c.sk = !0);
		this.$g++;
		if (c.rc) {
			if (d.rc = !0, d.Bb ? d.siblings.length = 0 : d.siblings = [], !k && !n) {
				m =
					0;
				for (e = c.Hb.length; m < e; m++)
					if (c.Hb[m] !== c) {
						if (!c.Hb[m].yc)
							return null;
						d.siblings.push(this.Qd(c.Hb[m].yc, r, !1, s ? d.x : a, s ? d.y : g, !0))
					}
				m = 0;
				for (e = d.siblings.length; m < e; m++)
					for (d.siblings[m].siblings.push(d), h = 0; h < e; h++)
						m !== h && d.siblings[m].siblings.push(d.siblings[h])
			}
		} else
			d.rc = !1, d.siblings = null;
		d.N();
		m = 0;
		for (e = d.M.length; m < e; m++)
			d.M[m].Zo && d.M[m].Zo();
		return d
	};
	l.prototype.Gi = function (b) {
		var f,
		k;
		f = 0;
		for (k = this.$.T.length; f < k; f++) {
			var a = this.$.T[f];
			if (Xa(a.name, b))
				return a
		}
		return null
	};
	l.prototype.rf =
	function (b) {
		b = ra(b);
		0 > b && (b = 0);
		b >= this.$.T.length && (b = this.$.T.length - 1);
		return this.$.T[b]
	};
	l.prototype.li = function (b) {
		var f,
		k;
		f = 0;
		for (k = b.length; f < k; f++)
			b[f].ca().ka = !0
	};
	l.prototype.Uf = function (b) {
		var f,
		k;
		f = 0;
		for (k = b.length; f < k; f++)
			b[f].Uf()
	};
	l.prototype.Vf = function (b) {
		var f,
		k;
		f = 0;
		for (k = b.length; f < k; f++)
			b[f].Vf()
	};
	l.prototype.Ad = function (b) {
		var f,
		k;
		f = 0;
		for (k = b.length; f < k; f++)
			b[f].Ad()
	};
	l.prototype.tp = function (b, f, k) {
		var a = b.ca(),
		g,
		n,
		m,
		e,
		h,
		c;
		if (a.ka)
			for (a.ka = !1, g = a.j.length = 0, e = b.j.length; g < e; g++)
				m =
					b.j[g], m.$a(), h = m.n.mb(f, k, !0), c = m.n.mb(f, k, !1), m.oc(h, c) && a.j.push(m);
		else {
			g = n = 0;
			for (e = a.j.length; g < e; g++)
				m = a.j[g], m.$a(), h = m.n.mb(f, k, !0), c = m.n.mb(f, k, !1), m.oc(h, c) && (a.j[n] = a.j[g], n++);
			a.j.length = n
		}
		b.mc();
		return a.Ji()
	};
	new wa;
	new ua(0, 0, 0, 0);
	l.prototype.cm = function (b, f) {
		if (!f)
			return !1;
		var a,
		g,
		e,
		n,
		m;
		a = 0;
		for (g = b.Ba.length; a < g; a++)
			if (b.Ba[a].xb instanceof f)
				return !0;
		if (!b.H)
			for (a = 0, g = b.qa.length; a < g; a++)
				for (m = b.qa[a], e = 0, n = m.Ba.length; e < n; e++)
					if (m.Ba[e].xb instanceof f)
						return !0;
		return !1
	};
	l.prototype.dm =
	function (b) {
		return this.cm(b, Lb.kq)
	};
	l.prototype.Rj = function (b) {
		return this.cm(b, Lb.lq)
	};
	var r = -1;
	l.prototype.trigger = function (b, f, a) {
		if (!this.$)
			return !1;
		var g = this.$.lf;
		if (!g)
			return !1;
		var e = !1,
		n,
		m,
		h;
		r++;
		var c = g.qi;
		m = 0;
		for (h = c.length; m < h; ++m)
			n = this.Zl(b, f, c[m], a), e = e || n;
		n = this.Zl(b, f, g, a);
		r--;
		return e || n
	};
	l.prototype.Zl = function (b, f, a, g) {
		var e = !1,
		n,
		m,
		h,
		c;
		if (f)
			for (h = this.Pj(b, f, f.type.name, a, g), e = e || h, c = f.type.qa, n = 0, m = c.length; n < m; ++n)
				h = this.Pj(b, f, c[n].name, a, g), e = e || h;
		else
			h = this.Pj(b, f, "system",
					a, g), e = e || h;
		return e
	};
	l.prototype.Pj = function (b, f, a, g, e) {
		var n,
		m = !1,
		h = !1,
		h = "undefined" !== typeof e,
		c = (h ? g.Lk : g.$l)[a];
		if (!c)
			return m;
		var p = null;
		g = 0;
		for (n = c.length; g < n; ++g)
			if (c[g].method == b) {
				p = c[g].mf;
				break
			}
		if (!p)
			return m;
		b = h ? p[e] : p;
		if (!b)
			return null;
		g = 0;
		for (n = b.length; g < n; g++)
			e = b[g][0], h = b[g][1], h = this.Rn(f, a, e, h), m = m || h;
		return m
	};
	l.prototype.Rn = function (b, a, k, g) {
		var e,
		n,
		m = !1;
		this.Qj++;
		var h = this.ib().fb;
		h && this.Uf(h.Dd);
		var c = 1 < this.Qj;
		this.Uf(k.Dd);
		c && this.bp();
		var p = this.oh(k);
		p.fb = k;
		b && (e = this.types[a].ca(),
			e.ka = !1, e.j.length = 1, e.j[0] = b, this.types[a].mc());
		b = !0;
		if (k.parent) {
			a = p.Xl;
			for (e = k.parent; e; )
				a.push(e), e = e.parent;
			a.reverse();
			e = 0;
			for (n = a.length; e < n; e++)
				if (!a[e].jp()) {
					b = !1;
					break
				}
		}
		b && (this.Bg++, k.tc ? k.ip(g) : k.Ea(), m = m || p.ae);
		this.jh();
		c && this.Xo();
		this.Ad(k.Dd);
		h && this.Ad(h.Dd);
		0 !== this.Wc || 0 !== r || this.Ui || this.xc.qc() && !this.Ib.length || this.cb();
		this.Qj--;
		return m
	};
	l.prototype.Rk = function () {
		var b = this.ib();
		return b.fb.Ja[b.Ca]
	};
	l.prototype.bp = function () {
		this.Yg++;
		this.Yg >= this.fj.length && this.fj.push([])
	};
	l.prototype.Xo = function () {
		this.Yg--
	};
	l.prototype.Sk = function () {
		return this.fj[this.Yg]
	};
	l.prototype.oh = function (b) {
		this.Ag++;
		this.Ag >= this.vi.length && this.vi.push(new xb);
		var a = this.ib();
		a.reset(b);
		return a
	};
	l.prototype.jh = function () {
		this.Ag--
	};
	l.prototype.ib = function () {
		return this.vi[this.Ag]
	};
	l.prototype.cp = function () {
		this.Zg++;
		this.Zg >= this.gj.length && this.gj.push(ea({
				name : void 0,
				index : 0,
				$f : !1
			}));
		var b = this.Xn();
		b.name = void 0;
		b.index = 0;
		b.$f = !1;
		return b
	};
	l.prototype.Yo = function () {
		this.Zg--
	};
	l.prototype.Xn =
	function () {
		return this.gj[this.Zg]
	};
	l.prototype.Tk = function (b, a) {
		for (var k, g, e, n, m, h; a; ) {
			k = 0;
			for (g = a.ic.length; k < g; k++)
				if (h = a.ic[k], h instanceof yb && Xa(b, h.name))
					return h;
			a = a.parent
		}
		k = 0;
		for (g = this.Pc.length; k < g; k++)
			for (m = this.Pc[k], e = 0, n = m.td.length; e < n; e++)
				if (h = m.td[e], h instanceof yb && Xa(b, h.name))
					return h;
		return null
	};
	l.prototype.Wk = function (b) {
		var a,
		k;
		a = 0;
		for (k = this.sc.length; a < k; a++)
			if (this.sc[a].R === b)
				return this.sc[a];
		return null
	};
	l.prototype.Jg = function (b) {
		var a,
		k;
		a = 0;
		for (k = this.q.length; a <
			k; a++)
			if (this.q[a].R === b)
				return this.q[a];
		return null
	};
	l.prototype.Yn = function (b) {
		var a,
		k;
		a = 0;
		for (k = this.ye.length; a < k; a++)
			if (this.ye[a].R === b)
				return this.ye[a];
		return null
	};
	l.prototype.to = function () {
		var b = this,
		f = this.Ej,
		k = this.Yc,
		e = this.Wg,
		h = !1;
		this.Ul && (h = !0, f = "__c2_continuouspreview", this.Ul = !1);
		if (f.length) {
			this.cb();
			k = this.np();
			if (window.indexedDB && !this.gc)
				a(f, k, function () {
					ha("Saved state to IndexedDB storage (" + k.length + " bytes)");
					b.Yc = k;
					b.trigger(G.prototype.d.Rh, null);
					b.Yc = "";
					h && g()
				}, function (a) {
					try {
						localStorage.setItem("__c2save_" +
							f, k),
						ha("Saved state to WebStorage (" + k.length + " bytes)"),
						b.Yc = k,
						b.trigger(G.prototype.d.Rh, null),
						b.Yc = "",
						h && g()
					} catch (n) {
						ha("Failed to save game state: " + a + "; " + n)
					}
				});
			else
				try {
					localStorage.setItem("__c2save_" + f, k),
					ha("Saved state to WebStorage (" + k.length + " bytes)"),
					b.Yc = k,
					this.trigger(G.prototype.d.Rh, null),
					b.Yc = "",
					h && g()
				} catch (n) {
					ha("Error saving to WebStorage: " + n)
				}
			this.rb = this.Wg = this.Ej = ""
		}
		e.length && (window.indexedDB && !this.gc ? c(e, function (a) {
				a ? (b.rb = a, ha("Loaded state from IndexedDB storage (" +
						b.rb.length + " bytes)")) : (b.rb = localStorage.getItem("__c2save_" + e) || "", ha("Loaded state from WebStorage (" + b.rb.length + " bytes)"));
				b.ag = !1;
				b.rb.length || b.trigger(G.prototype.d.Ph, null)
			}, function () {
				b.rb = localStorage.getItem("__c2save_" + e) || "";
				ha("Loaded state from WebStorage (" + b.rb.length + " bytes)");
				b.ag = !1;
				b.rb.length || b.trigger(G.prototype.d.Ph, null)
			}) : (this.rb = localStorage.getItem("__c2save_" + e) || "", ha("Loaded state from WebStorage (" + this.rb.length + " bytes)"), this.ag = !1, b.rb.length || b.trigger(G.prototype.d.Ph,
					null)), this.Ej = this.Wg = "");
		this.rb.length && (this.cb(), this.Lo(this.rb), this.Yc = this.rb, this.trigger(G.prototype.d.Cm, null), this.rb = this.Yc = "")
	};
	l.prototype.np = function () {
		var b,
		a,
		k,
		g,
		e,
		n,
		m,
		c = {
			c2save : !0,
			version : 1,
			rt : {
				time : this.$d.wb,
				timescale : this.dg,
				tickcount : this.Ic,
				execcount : this.Bg,
				next_uid : this.Nf,
				running_layout : this.$.R,
				start_time_offset : Date.now() - this.Ah
			},
			types : {},
			layouts : {},
			events : {
				groups : {},
				cnds : {},
				acts : {},
				vars : {}
			}
		};
		b = 0;
		for (a = this.q.length; b < a; b++)
			if (e = this.q[b], !e.H && !this.dm(e)) {
				n = {
					instances : []
				};
				Ma(e.wa) && (n.ex = h(e.wa));
				k = 0;
				for (g = e.j.length; k < g; k++)
					n.instances.push(this.Dj(e.j[k]));
				c.types[e.R.toString()] = n
			}
		b = 0;
		for (a = this.sc.length; b < a; b++)
			k = this.sc[b], c.layouts[k.R.toString()] = k.tb();
		g = c.events.groups;
		b = 0;
		for (a = this.ye.length; b < a; b++)
			k = this.ye[b], g[k.R.toString()] = this.xf[k.wf].vf;
		a = c.events.cnds;
		for (m in this.Ae)
			this.Ae.hasOwnProperty(m) && (b = this.Ae[m], Ma(b.wa) && (a[m] = {
						ex : h(b.wa)
					}));
		a = c.events.acts;
		for (m in this.xe)
			this.xe.hasOwnProperty(m) && (b = this.xe[m], Ma(b.wa) && (a[m] = {
						ex : b.wa
					}));
		a =
			c.events.vars;
		for (m in this.Xe)
			this.Xe.hasOwnProperty(m) && (b = this.Xe[m], b.Mg || b.parent && !b.Df || (a[m] = b.data));
		c.system = this.Fc.tb();
		return JSON.stringify(c)
	};
	l.prototype.Nl = function () {
		var b,
		a,
		k,
		g,
		e,
		n;
		this.xd = {};
		b = 0;
		for (a = this.q.length; b < a; b++)
			if (k = this.q[b], !k.H)
				for (g = 0, e = k.j.length; g < e; g++)
					n = k.j[g], this.xd[n.uid.toString()] = n
	};
	l.prototype.Lo = function (b) {
		b = JSON.parse(b);
		if (b.c2save && !(1 < b.version)) {
			var a = b.rt;
			this.$d.reset();
			this.$d.wb = a.time;
			this.dg = a.timescale;
			this.Ic = a.tickcount;
			this.Ah = Date.now() -
				a.start_time_offset;
			var k = a.running_layout;
			if (k !== this.$.R)
				if (k = this.Wk(k))
					this.Hk(k);
				else
					return;
			var g,
			e,
			n,
			m,
			h,
			c,
			p;
			c = b.types;
			for (e in c)
				if (c.hasOwnProperty(e) && (m = this.Jg(parseInt(e, 10))) && !m.H && !this.dm(m)) {
					c[e].ex ? m.wa = c[e].ex : Oa(m.wa);
					h = m.j;
					n = c[e].instances;
					k = 0;
					for (g = oa(h.length, n.length); k < g; k++)
						this.Xg(h[k], n[k]);
					k = n.length;
					for (g = h.length; k < g; k++)
						this.se(h[k]);
					k = h.length;
					for (g = n.length; k < g; k++) {
						h = null;
						if (m.na.wd && (h = this.$.Ig(n[k].w.l), !h))
							continue;
						h = this.Qd(m.yc, h, !1, 0, 0, !0);
						this.Xg(h, n[k])
					}
					m.Ue = !0
				}
			this.cb();
			this.Nl();
			g = b.layouts;
			for (e in g)
				g.hasOwnProperty(e) && (k = this.Wk(parseInt(e, 10))) && k.Nb(g[e]);
			g = b.events.groups;
			for (e in g)
				g.hasOwnProperty(e) && (k = this.Yn(parseInt(e, 10))) && this.xf[k.wf] && (this.xf[k.wf].vf = g[e]);
			k = b.events.cnds;
			for (e in k)
				k.hasOwnProperty(e) && this.Ae.hasOwnProperty(e) && (this.Ae[e].wa = k[e].ex);
			k = b.events.acts;
			for (e in k)
				k.hasOwnProperty(e) && this.xe.hasOwnProperty(e) && (this.xe[e].wa = k[e].ex);
			k = b.events.vars;
			for (e in k)
				k.hasOwnProperty(e) && this.Xe.hasOwnProperty(e) && (this.Xe[e].data =
						k[e]);
			this.Nf = a.next_uid;
			this.Fc.Nb(b.system);
			k = 0;
			for (g = this.q.length; k < g; k++)
				if (m = this.q[k], !m.H)
					for (e = 0, b = m.j.length; e < b; e++) {
						h = m.j[e];
						if (m.rc)
							for (c = h.uf(), a = h.siblings.length = 0, n = m.Hb.length; a < n; a++)
								p = m.Hb[a], m !== p && h.siblings.push(p.j[c]);
						h.Lc && h.Lc();
						if (h.M)
							for (a = 0, n = h.M.length; a < n; a++)
								c = h.M[a], c.Lc && c.Lc()
					}
			this.Z = !0
		}
	};
	l.prototype.Dj = function (b, a) {
		var g,
		e,
		c,
		n,
		m;
		n = b.type;
		c = n.na;
		var p = {};
		a ? p.c2 = !0 : p.uid = b.uid;
		Ma(b.wa) && (p.ex = h(b.wa));
		if (b.Ka && b.Ka.length)
			for (p.ivs = {}, g = 0, e = b.Ka.length; g < e; g++)
				p.ivs[b.type.Pi[g].toString()] =
					b.Ka[g];
		if (c.wd) {
			c = {
				x : b.x,
				y : b.y,
				w : b.width,
				h : b.height,
				l : b.n.R,
				zi : b.Xb()
			};
			0 !== b.k && (c.a = b.k);
			1 !== b.opacity && (c.o = b.opacity);
			0.5 !== b.nb && (c.hX = b.nb);
			0.5 !== b.ob && (c.hY = b.ob);
			0 !== b.yb && (c.bm = b.yb);
			b.visible || (c.v = b.visible);
			b.hf || (c.ce = b.hf);
			 - 1 !== b.Mf && (c.mts = b.Mf);
			if (n.J.length)
				for (c.fx = [], g = 0, e = n.J.length; g < e; g++)
					m = n.J[g], c.fx.push({
						name : m.name,
						active : b.ld[m.index],
						params : b.ua[m.index]
					});
			p.w = c
		}
		if (b.M && b.M.length)
			for (p.behs = {}, g = 0, e = b.M.length; g < e; g++)
				n = b.M[g], n.tb && (p.behs[n.type.R.toString()] = n.tb());
		b.tb && (p.data = b.tb());
		return p
	};
	l.prototype.$n = function (b, a) {
		var g,
		e;
		g = 0;
		for (e = b.Pi.length; g < e; g++)
			if (b.Pi[g] === a)
				return g;
		return -1
	};
	l.prototype.Wn = function (b, a) {
		var g,
		e;
		g = 0;
		for (e = b.M.length; g < e; g++)
			if (b.M[g].type.R === a)
				return g;
		return -1
	};
	l.prototype.Xg = function (b, a, g) {
		var e,
		h,
		n,
		m,
		c;
		c = b.type;
		n = c.na;
		if (g) {
			if (!a.c2)
				return
		} else
			b.uid = a.uid;
		a.ex ? b.wa = a.ex : Oa(b.wa);
		if (h = a.ivs)
			for (e in h)
				h.hasOwnProperty(e) && (g = this.$n(c, parseInt(e, 10)), 0 > g || g >= b.Ka.length || (b.Ka[g] = h[e]));
		if (n.wd) {
			n = a.w;
			b.n.R !== n.l && (g =
					b.n, b.n = this.$.Ig(n.l), b.n ? (b.n.j.push(b), b.n.Sb = !0, Aa(g.j, b), g.Sb = !0) : (b.n = g, this.se(b)));
			b.x = n.x;
			b.y = n.y;
			b.width = n.w;
			b.height = n.h;
			b.qe = n.zi;
			b.k = n.hasOwnProperty("a") ? n.a : 0;
			b.opacity = n.hasOwnProperty("o") ? n.o : 1;
			b.nb = n.hasOwnProperty("hX") ? n.hX : 0.5;
			b.ob = n.hasOwnProperty("hY") ? n.hY : 0.5;
			b.visible = n.hasOwnProperty("v") ? n.v : !0;
			b.hf = n.hasOwnProperty("ce") ? n.ce : !0;
			b.Mf = n.hasOwnProperty("mts") ? n.mts : -1;
			b.yb = n.hasOwnProperty("bm") ? n.bm : 0;
			b.jf = Ua(b.yb);
			this.Sc && Va(b, b.yb, this.Sc);
			b.Aa();
			if (n.hasOwnProperty("fx"))
				for (g =
						0, h = n.fx.length; g < h; g++)
					m = c.Ei(n.fx[g].name), 0 > m || (b.ld[m] = n.fx[g].active, b.ua[m] = n.fx[g].params);
			b.gd()
		}
		if (c = a.behs)
			for (e in c)
				c.hasOwnProperty(e) && (n = this.Wn(b, parseInt(e, 10)), 0 > n || b.M[n].Nb(c[e]));
		a.data && b.Nb(a.data)
	};
	zb = function (b) {
		return new l(document.getElementById(b))
	};
	Ab = function (b, a) {
		return new l({
			dc : !0,
			width : b,
			height : a
		})
	};
	window.cr_createRuntime = zb;
	window.cr_createDCRuntime = Ab;
	window.createCocoonJSRuntime = function () {
		window.c2cocoonjs = !0;
		var b = document.createElement("screencanvas") || document.createElement("canvas");
		b.nr = !0;
		document.body.appendChild(b);
		b = new l(b);
		window.c2runtime = b;
		window.addEventListener("orientationchange", function () {
			window.c2runtime.setSize(window.innerWidth, window.innerHeight)
		});
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return b
	};
	window.createEjectaRuntime = function () {
		var b = new l(document.getElementById("canvas"));
		window.c2runtime = b;
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return b
	}
})();
window.cr_getC2Runtime = function () {
	var l = document.getElementById("c2canvas");
	return l ? l.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function (l, d) {
	if (0 !== l && 0 !== d) {
		var a = window.cr_getC2Runtime();
		a && a.setSize(l, d)
	}
};
window.cr_setSuspended = function (l) {
	var d = window.cr_getC2Runtime();
	d && d.setSuspended(l)
};
(function () {
	function l(a, h) {
		this.b = a;
		this.lf = null;
		this.scrollX = this.b.Ta / 2;
		this.scrollY = this.b.Sa / 2;
		this.scale = 1;
		this.k = 0;
		this.pf = !0;
		this.name = h[0];
		this.width = h[1];
		this.height = h[2];
		this.em = h[3];
		this.Tl = h[4];
		this.R = h[5];
		var c = h[6],
		e,
		d;
		this.T = [];
		this.zf = [];
		e = 0;
		for (d = c.length; e < d; e++) {
			var q = new Bb(this, c[e]);
			q.xl = e;
			this.T.push(q)
		}
		c = h[7];
		this.Yd = [];
		e = 0;
		for (d = c.length; e < d; e++) {
			var q = c[e],
			r = this.b.q[q[1]];
			r.yc || (r.yc = q);
			this.Yd.push(q);
			 - 1 === this.zf.indexOf(r) && this.zf.push(r)
		}
		this.J = [];
		this.V = [];
		this.ua =
			[];
		e = 0;
		for (d = h[8].length; e < d; e++)
			this.J.push({
				id : h[8][e][0],
				name : h[8][e][1],
				Za : -1,
				xa : !0,
				index : e
			}), this.ua.push(h[8][e][2].slice(0));
		this.gd();
		this.Bd = new ua(0, 0, 1, 1);
		this.vj = new ua(0, 0, 1, 1);
		this.zd = {}
	}
	
	function d(a, h) {
		this.ja = a;
		this.b = a.b;
		this.j = [];
		this.scale = 1;
		this.k = 0;
		this.Rd = !1;
		this.fd = new ua(0, 0, 0, 0);
		this.Yl = new wa;
		this.Qb = this.bb = this.Rb = this.ab = 0;
		this.Sb = !1;
		this.name = h[0];
		this.index = h[1];
		this.R = h[2];
		this.visible = h[3];
		this.md = h[4];
		this.ne = h[5];
		this.Zc = h[6];
		this.$c = h[7];
		this.opacity = h[8];
		this.xi =
			h[9];
		this.jd = h[10];
		this.yb = h[11];
		this.rn = h[12];
		this.jf = "source-over";
		this.hb = this.jb = 0;
		this.Cd = !1;
		var c = h[13],
		e,
		d;
		this.Ee = [];
		e = 0;
		for (d = c.length; e < d; e++) {
			var q = c[e],
			r = this.b.q[q[1]];
			r.yc || (r.yc = q, r.on = this.index);
			this.Ee.push(q);
			 - 1 === this.ja.zf.indexOf(r) && this.ja.zf.push(r)
		}
		this.J = [];
		this.V = [];
		this.ua = [];
		e = 0;
		for (d = h[14].length; e < d; e++)
			this.J.push({
				id : h[14][e][0],
				name : h[14][e][1],
				Za : -1,
				xa : !0,
				index : e
			}), this.ua.push(h[14][e][2].slice(0));
		this.gd();
		this.Bd = new ua(0, 0, 1, 1);
		this.vj = new ua(0, 0, 1, 1)
	}
	
	function a(a,
		h) {
		return a.qe - h.qe
	}
	l.prototype.mp = function (a) {
		var h = a.type.R.toString();
		this.zd.hasOwnProperty(h) || (this.zd[h] = []);
		this.zd[h].push(this.b.Dj(a))
	};
	l.prototype.$k = function () {
		var a = this.T[0];
		return !a.ne && 1 === a.opacity && !a.xi && a.visible
	};
	l.prototype.gd = function () {
		this.V.length = 0;
		var a,
		h,
		c;
		a = 0;
		for (h = this.J.length; a < h; a++)
			c = this.J[a], c.xa && this.V.push(c)
	};
	l.prototype.Di = function (a) {
		var h,
		c,
		e;
		h = 0;
		for (c = this.J.length; h < c; h++)
			if (e = this.J[h], e.name === a)
				return e;
		return null
	};
	var c = [];
	l.prototype.Kj = function () {
		this.Tl &&
		(this.lf = this.b.wi[this.Tl], this.lf.fm());
		this.b.$ = this;
		this.scrollX = this.b.Ta / 2;
		this.scrollY = this.b.Sa / 2;
		var g,
		h,
		p,
		e,
		d,
		q,
		r;
		g = 0;
		for (p = this.b.q.length; g < p; g++)
			if (h = this.b.q[g], !h.H)
				for (d = h.j, h = 0, e = d.length; h < e; h++)
					if (q = d[h], q.n) {
						var b = q.n.xl;
						b >= this.T.length && (b = this.T.length - 1);
						q.n = this.T[b];
						q.n.j.push(q);
						q.n.Sb = !0
					}
		c.length = 0;
		this.cn();
		g = 0;
		for (p = this.T.length; g < p; g++)
			q = this.T[g], q.nn(), q.Rd = !0, h = q.mb(0, 0, !0, !0), e = q.mb(0, 0, !1, !0), q.Rd = !1, this.b.hc && (h = h + 0.5 | 0, e = e + 0.5 | 0), q.Aj(h, e, null);
		d = !1;
		if (!this.pf) {
			for (r in this.zd)
				if (this.zd.hasOwnProperty(r) &&
					(h = this.b.Jg(parseInt(r, 10))) && !h.H && this.b.Rj(h)) {
					e = this.zd[r];
					g = 0;
					for (p = e.length; g < p; g++) {
						q = null;
						if (h.na.wd && (q = this.Ig(e[g].w.l), !q))
							continue;
						q = this.b.Qd(h.yc, q, !1, 0, 0, !0);
						this.b.Xg(q, e[g]);
						d = !0;
						c.push(q)
					}
					e.length = 0
				}
			g = 0;
			for (p = this.T.length; g < p; g++)
				this.T[g].j.sort(a), this.T[g].Sb = !0
		}
		d && (this.b.cb(), this.b.Nl());
		for (g = 0; g < c.length; g++)
			if (q = c[g], q.type.rc)
				for (p = q.uf(), h = 0, e = q.type.Hb.length; h < e; h++)
					r = q.type.Hb[h], q.type !== r && (r.j.length > p ? q.siblings.push(r.j[p]) : r.yc && (d = this.b.Qd(r.yc, q.n, !0, q.x,
									q.y, !0), this.b.cb(), r.Lh(), q.siblings.push(d), c.push(d)));
		g = 0;
		for (p = this.Yd.length; g < p; g++)
			this.b.Qd(this.Yd[g], null, !0);
		this.b.ff = null;
		this.b.cb();
		if (this.b.ba && !this.b.Xa)
			for (g = 0, p = this.b.q.length; g < p; g++)
				r = this.b.q[g], !r.H && r.j.length && r.kh && r.kh(this.b.ba);
		g = 0;
		for (p = c.length; g < p; g++)
			q = c[g], this.b.trigger(Object.getPrototypeOf(q.type.na).d.ym, q);
		c.length = 0;
		this.b.trigger(G.prototype.d.jg, null);
		this.pf = !1
	};
	l.prototype.mn = function () {
		var a,
		h,
		c,
		e,
		d;
		h = a = 0;
		for (c = this.Yd.length; a < c; a++)
			e = this.Yd[a], d =
				this.b.q[e[1]], d.global ? this.b.Qd(e, null, !0) : (this.Yd[h] = e, h++);
		this.Yd.length = h
	};
	l.prototype.rp = function () {
		this.b.trigger(G.prototype.d.Bm, null);
		this.b.Fc.Db.length = 0;
		var a,
		h,
		c,
		e,
		d,
		q;
		a = 0;
		for (h = this.T.length; a < h; a++) {
			d = this.T[a].j;
			c = 0;
			for (e = d.length; c < e; c++)
				q = d[c], q.type.global || (this.b.Rj(q.type) && this.mp(q), this.b.se(q));
			this.b.cb();
			d.length = 0;
			this.T[a].Sb = !0
		}
		a = 0;
		for (h = this.b.q.length; a < h; a++)
			if (d = this.b.q[a], !(d.global || d.na.wd || d.na.xh || d.H)) {
				c = 0;
				for (e = d.j.length; c < e; c++)
					this.b.se(d.j[c]);
				this.b.cb()
			}
	};
	l.prototype.pc = function (a) {
		var h,
		c = a,
		e = !1,
		d = !this.b.ec;
		d && (this.b.Vg || (this.b.Vg = document.createElement("canvas"), h = this.b.Vg, h.width = this.b.P, h.height = this.b.O, this.b.ol = h.getContext("2d"), e = !0), h = this.b.Vg, c = this.b.ol, h.width !== this.b.P && (h.width = this.b.P, e = !0), h.height !== this.b.O && (h.height = this.b.O, e = !0), e && (c.webkitImageSmoothingEnabled = this.b.U, c.mozImageSmoothingEnabled = this.b.U, c.msImageSmoothingEnabled = this.b.U, c.imageSmoothingEnabled = this.b.U));
		c.globalAlpha = 1;
		c.globalCompositeOperation =
			"source-over";
		this.b.Yh && !this.$k() && c.clearRect(0, 0, this.b.P, this.b.O);
		var q,
		r,
		e = 0;
		for (q = this.T.length; e < q; e++)
			r = this.T[e], r.visible && 0 < r.opacity && 11 !== r.yb && r.pc(c);
		d && a.drawImage(h, 0, 0, this.b.width, this.b.height)
	};
	l.prototype.Ub = function (a) {
		var c = 0 < this.V.length || this.b.Ve || !this.b.ec;
		if (c) {
			this.b.Mb || (this.b.Mb = a.rd(this.b.P, this.b.O, this.b.U));
			if (this.b.Mb.fi !== this.b.P || this.b.Mb.ei !== this.b.O)
				a.deleteTexture(this.b.Mb), this.b.Mb = a.rd(this.b.P, this.b.O, this.b.U);
			a.dd(this.b.Mb);
			this.b.ec || a.ke(this.b.P,
				this.b.O)
		} else
			this.b.Mb && (a.dd(null), a.deleteTexture(this.b.Mb), this.b.Mb = null);
		this.b.Yh && !this.$k() && a.clear(0, 0, 0, 0);
		var d,
		e;
		d = 0;
		for (e = this.T.length; d < e; d++)
			this.T[d].visible && 0 < this.T[d].opacity && this.T[d].Ub(a);
		c && (0 === this.V.length || 1 === this.V.length && this.b.ec ? (1 === this.V.length ? (c = this.V[0].index, a.Gd(this.V[0].Za), a.Yf(null, 1 / this.b.P, 1 / this.b.O, 0, 0, 1, 1, this.scale, this.k, 0, 0, this.ua[c]), a.rj(this.V[0].Za) && (this.b.Z = !0)) : a.Gd(0), this.b.ec || a.ke(this.b.width, this.b.height), a.dd(null), a.je(1),
				a.Pb(this.b.Mb), a.op(), a.cd(), a.hd(), c = this.b.width / 2, d = this.b.height / 2, a.tj(-c, d, c, d, c, -d, -c, -d), a.Pb(null)) : this.wj(a, null, null, null))
	};
	l.prototype.sf = function () {
		return 0 < this.V.length || this.b.Ve || !this.b.ec ? this.b.Mb : null
	};
	l.prototype.Xk = function () {
		var a = this.T[0].Lb(),
		c,
		d,
		e;
		c = 1;
		for (d = this.T.length; c < d; c++)
			e = this.T[c], (0 !== e.Zc || 0 !== e.$c) && e.Lb() < a && (a = e.Lb());
		return a
	};
	l.prototype.Fj = function (a) {
		if (!this.em) {
			var c = this.b.P * (1 / this.Xk()) / 2;
			a > this.width - c && (a = this.width - c);
			a < c && (a = c)
		}
		this.scrollX !==
		a && (this.scrollX = a, this.b.Z = !0)
	};
	l.prototype.Ql = function (a) {
		if (!this.em) {
			var c = this.b.O * (1 / this.Xk()) / 2;
			a > this.height - c && (a = this.height - c);
			a < c && (a = c)
		}
		this.scrollY !== a && (this.scrollY = a, this.b.Z = !0)
	};
	l.prototype.cn = function () {
		this.Fj(this.scrollX);
		this.Ql(this.scrollY)
	};
	l.prototype.wj = function (a, c, d, e) {
		var s = d ? d.V : c ? c.V : this.V,
		q = 1,
		r = 0,
		b = 0,
		f = 0;
		d ? (q = d.n.Lb(), r = d.n.Wb(), b = d.n.ab, f = d.n.bb) : c && (q = c.Lb(), r = c.Wb(), b = c.ab, f = c.bb);
		var k = this.b.Bi,
		u,
		l,
		n,
		m,
		H = 0,
		va = 1,
		N,
		B = this.b.P,
		y = this.b.O,
		M = B / 2,
		R = y / 2,
		J = c ? c.Bd :
			this.Bd,
		A = c ? c.vj : this.vj,
		E = 0,
		aa = 0,
		K = 0,
		C = 0,
		F = B,
		P = B,
		z = y,
		T = y,
		ka = n = 0,
		na = d ? d.n.Wb() : 0;
		if (d) {
			u = 0;
			for (l = s.length; u < l; u++)
				n += a.dr(s[u].Za), ka += a.er(s[u].Za);
			m = d.lb;
			E = c.Ma(m.left, m.top, !0);
			K = c.Ma(m.left, m.top, !1);
			F = c.Ma(m.right, m.bottom, !0);
			z = c.Ma(m.right, m.bottom, !1);
			0 !== na && (u = c.Ma(m.right, m.top, !0), l = c.Ma(m.right, m.top, !1), aa = c.Ma(m.left, m.bottom, !0), C = c.Ma(m.left, m.bottom, !1), m = Math.min(E, F, u, aa), F = Math.max(E, F, u, aa), E = m, m = Math.min(K, z, l, C), z = Math.max(K, z, l, C), K = m);
			E -= n;
			K -= ka;
			F += n;
			z += ka;
			A.left = E / B;
			A.top =
				1 - K / y;
			A.right = F / B;
			A.bottom = 1 - z / y;
			aa = E = ra(E);
			C = K = ra(K);
			P = F = sa(F);
			T = z = sa(z);
			aa -= n;
			C -= ka;
			P += n;
			T += ka;
			0 > E && (E = 0);
			0 > K && (K = 0);
			F > B && (F = B);
			z > y && (z = y);
			0 > aa && (aa = 0);
			0 > C && (C = 0);
			P > B && (P = B);
			T > y && (T = y);
			J.left = E / B;
			J.top = 1 - K / y;
			J.right = F / B;
			J.bottom = 1 - z / y
		} else
			J.left = A.left = 0, J.top = A.top = 0, J.right = A.right = 1, J.bottom = A.bottom = 1;
		ka = d && ((d.k || na) && a.mh(s[0].Za) || 0 !== n || 0 !== ka || 1 !== d.opacity || d.type.na.rl) || c && !d && 1 !== c.opacity;
		a.op();
		if (ka) {
			k[H] || (k[H] = a.rd(B, y, this.b.U));
			if (k[H].fi !== B || k[H].ei !== y)
				a.deleteTexture(k[H]),
				k[H] = a.rd(B, y, this.b.U);
			a.Gd(0);
			a.dd(k[H]);
			N = T - C;
			a.clearRect(aa, y - C - N, P - aa, N);
			d ? d.Ub(a) : (a.Pb(this.b.Yb), a.je(c.opacity), a.cd(), a.translate(-M, -R), a.hd(), a.Dc(E, z, F, z, F, K, E, K, J));
			A.left = A.top = 0;
			A.right = A.bottom = 1;
			d && (m = J.top, J.top = J.bottom, J.bottom = m);
			H = 1;
			va = 0
		}
		a.je(1);
		n = s.length - 1;
		var na = a.Jl(s[n].Za) || !c && !d && !this.b.ec,
		ca = 0;
		u = 0;
		for (l = s.length; u < l; u++) {
			k[H] || (k[H] = a.rd(B, y, this.b.U));
			if (k[H].fi !== B || k[H].ei !== y)
				a.deleteTexture(k[H]), k[H] = a.rd(B, y, this.b.U);
			a.Gd(s[u].Za);
			ca = s[u].index;
			a.rj(s[u].Za) &&
			(this.b.Z = !0);
			0 != u || ka ? (a.Yf(e, 1 / B, 1 / y, A.left, A.top, A.right, A.bottom, q, r, b, f, d ? d.ua[ca] : c ? c.ua[ca] : this.ua[ca]), a.Pb(null), u !== n || na ? (a.dd(k[H]), N = T - C, m = y - C - N, a.clearRect(aa, m, P - aa, N)) : (d ? a.Se(d.jb, d.hb) : c && a.Se(c.jb, c.hb), a.dd(e)), a.Pb(k[va]), a.cd(), a.translate(-M, -R), a.hd(), a.Dc(E, z, F, z, F, K, E, K, J), u !== n || na || a.Pb(null)) : (a.dd(k[H]), N = T - C, m = y - C - N, a.clearRect(aa, m, P - aa, N), d ? (a.Yf(e, 1 / d.width, 1 / d.height, A.left, A.top, A.right, A.bottom, q, r, b, f, d.ua[ca]), d.Ub(a)) : (a.Yf(e, 1 / B, 1 / y, 0, 0, 1, 1, q, r, b, f, c ? c.ua[ca] :
						this.ua[ca]), a.Pb(c ? this.b.Yb : this.b.Mb), a.cd(), a.translate(-M, -R), a.hd(), a.Dc(E, z, F, z, F, K, E, K, J)), A.left = A.top = 0, A.right = A.bottom = 1, d && !na && (m = z, z = K, K = m));
			H = 0 === H ? 1 : 0;
			va = 0 === H ? 1 : 0
		}
		na && (a.Gd(0), d ? a.Se(d.jb, d.hb) : c ? a.Se(c.jb, c.hb) : this.b.ec || (a.ke(this.b.width, this.b.height), M = this.b.width / 2, R = this.b.height / 2, K = E = 0, F = this.b.width, z = this.b.height), a.dd(e), a.Pb(k[va]), a.cd(), a.translate(-M, -R), a.hd(), d && 1 === s.length && !ka ? a.Dc(E, K, F, K, F, z, E, z, J) : a.Dc(E, z, F, z, F, K, E, K, J), a.Pb(null))
	};
	l.prototype.Ig = function (a) {
		var c,
		d;
		c = 0;
		for (d = this.T.length; c < d; c++)
			if (this.T[c].R === a)
				return this.T[c];
		return null
	};
	l.prototype.tb = function () {
		var a,
		c,
		d,
		e = {
			sx : this.scrollX,
			sy : this.scrollY,
			s : this.scale,
			a : this.k,
			w : this.width,
			h : this.height,
			fv : this.pf,
			persist : this.zd,
			fx : [],
			layers : {}
		};
		a = 0;
		for (c = this.J.length; a < c; a++)
			d = this.J[a], e.fx.push({
				name : d.name,
				active : d.xa,
				params : this.ua[d.index]
			});
		a = 0;
		for (c = this.T.length; a < c; a++)
			d = this.T[a], e.layers[d.R.toString()] = d.tb();
		return e
	};
	l.prototype.Nb = function (a) {
		var c,
		d,
		e,
		s;
		this.scrollX = a.sx;
		this.scrollY =
			a.sy;
		this.scale = a.s;
		this.k = a.a;
		this.width = a.w;
		this.height = a.h;
		this.zd = a.persist;
		"undefined" !== typeof a.fv && (this.pf = a.fv);
		var q = a.fx;
		c = 0;
		for (d = q.length; c < d; c++)
			if (e = this.Di(q[c].name))
				e.xa = q[c].active, this.ua[e.index] = q[c].params;
		this.gd();
		c = a.layers;
		for (s in c)
			c.hasOwnProperty(s) && (a = this.Ig(parseInt(s, 10))) && a.Nb(c[s])
	};
	ob = l;
	d.prototype.gd = function () {
		this.V.length = 0;
		var a,
		c,
		d;
		a = 0;
		for (c = this.J.length; a < c; a++)
			d = this.J[a], d.xa && this.V.push(d)
	};
	d.prototype.Di = function (a) {
		var c,
		d,
		e;
		c = 0;
		for (d = this.J.length; c <
			d; c++)
			if (e = this.J[c], e.name === a)
				return e;
		return null
	};
	d.prototype.nn = function () {
		var a,
		d,
		p,
		e,
		s,
		q;
		d = a = 0;
		for (p = this.Ee.length; a < p; a++) {
			e = this.Ee[a];
			s = this.b.q[e[1]];
			q = this.b.Rj(s);
			s = !0;
			if (!q || this.ja.pf)
				e = this.b.Qd(e, this, !0), c.push(e), e.type.global && (s = !1);
			s && (this.Ee[d] = this.Ee[a], d++)
		}
		this.Ee.length = d;
		this.b.cb();
		!this.b.D && this.J.length && (this.yb = this.rn);
		this.jf = Ua(this.yb);
		this.b.Sc && Va(this, this.yb, this.b.Sc)
	};
	d.prototype.Bp = function () {
		if (this.Sb) {
			var a,
			c;
			a = 0;
			for (c = this.j.length; a < c; a++)
				this.j[a].qe =
					a;
			this.Sb = !1
		}
	};
	d.prototype.Lb = function (a) {
		return this.ao() * (this.b.ec || a ? this.b.ef : 1)
	};
	d.prototype.ao = function () {
		return (this.scale * this.ja.scale - 1) * this.jd + 1
	};
	d.prototype.Wb = function () {
		return this.Rd ? 0 : Da(this.ja.k + this.k)
	};
	d.prototype.pc = function (a) {
		this.Cd = this.xi || 1 !== this.opacity || 0 !== this.yb;
		var c = this.b.canvas,
		d = a,
		e = !1;
		this.Cd && (this.b.Ug || (this.b.Ug = document.createElement("canvas"), c = this.b.Ug, c.width = this.b.P, c.height = this.b.O, this.b.nl = c.getContext("2d"), e = !0), c = this.b.Ug, d = this.b.nl, c.width !==
			this.b.P && (c.width = this.b.P, e = !0), c.height !== this.b.O && (c.height = this.b.O, e = !0), e && (d.webkitImageSmoothingEnabled = this.b.U, d.mozImageSmoothingEnabled = this.b.U, d.msImageSmoothingEnabled = this.b.U, d.imageSmoothingEnabled = this.b.U), this.ne && d.clearRect(0, 0, this.b.P, this.b.O));
		d.globalAlpha = 1;
		d.globalCompositeOperation = "source-over";
		this.ne || (d.fillStyle = "rgb(" + this.md[0] + "," + this.md[1] + "," + this.md[2] + ")", d.fillRect(0, 0, this.b.P, this.b.O));
		d.save();
		this.Rd = !0;
		var e = this.mb(0, 0, !0, !0),
		s = this.mb(0, 0, !1, !0);
		this.Rd = !1;
		this.b.hc && (e = e + 0.5 | 0, s = s + 0.5 | 0);
		this.Aj(e, s, d);
		var q = this.Lb();
		d.scale(q, q);
		d.translate(-e, -s);
		for (var r, e = 0, s = this.j.length; e < s; e++)
			q = this.j[e], q.visible && 0 !== q.width && 0 !== q.height && (q.$a(), r = q.lb, r.right < this.ab || r.bottom < this.bb || r.left > this.Rb || r.top > this.Qb || (d.globalCompositeOperation = q.jf, q.pc(d)));
		d.restore();
		this.Cd && (a.globalCompositeOperation = this.jf, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
	};
	d.prototype.Aj = function (a, c, d) {
		var e = this.Lb();
		this.ab = a;
		this.bb = c;
		this.Rb =
			a + this.b.P * (1 / e);
		this.Qb = c + this.b.O * (1 / e);
		a = this.Wb();
		0 !== a && (d && (d.translate(this.b.P / 2, this.b.O / 2), d.rotate(-a), d.translate(this.b.P / -2, this.b.O / -2)), this.fd.set(this.ab, this.bb, this.Rb, this.Qb), this.fd.offset((this.ab + this.Rb) / -2, (this.bb + this.Qb) / -2), this.Yl.Sl(this.fd, a), this.Yl.zk(this.fd), this.fd.offset((this.ab + this.Rb) / 2, (this.bb + this.Qb) / 2), this.ab = this.fd.left, this.bb = this.fd.top, this.Rb = this.fd.right, this.Qb = this.fd.bottom)
	};
	d.prototype.Ub = function (a) {
		var c = this.b.P,
		d = this.b.O,
		e = 0,
		s = 0;
		if (this.Cd = this.xi || 1 !== this.opacity || 0 < this.V.length || 0 !== this.yb) {
			this.b.Yb || (this.b.Yb = a.rd(this.b.P, this.b.O, this.b.U));
			if (this.b.Yb.fi !== this.b.P || this.b.Yb.ei !== this.b.O)
				a.deleteTexture(this.b.Yb), this.b.Yb = a.rd(this.b.P, this.b.O, this.b.U);
			a.dd(this.b.Yb);
			this.ne && a.clear(0, 0, 0, 0)
		}
		this.ne || a.clear(this.md[0] / 255, this.md[1] / 255, this.md[2] / 255, 1);
		this.Rd = !0;
		var s = this.mb(0, 0, !0, !0),
		q = this.mb(0, 0, !1, !0);
		this.Rd = !1;
		this.b.hc && (s = s + 0.5 | 0, q = q + 0.5 | 0);
		this.Aj(s, q, null);
		q = this.Lb();
		a.cd();
		a.scale(q,
			q);
		a.Ol(-this.Wb());
		a.translate((this.ab + this.Rb) / -2, (this.bb + this.Qb) / -2);
		a.hd();
		var r,
		b,
		f;
		r = 0;
		for (b = this.j.length; r < b; r++)
			if (f = this.j[r], f.visible && 0 !== f.width && 0 !== f.height && (f.$a(), e = f.lb, !(e.right < this.ab || e.bottom < this.bb || e.left > this.Rb || e.top > this.Qb)))
				if (f.gm)
					if (e = f.V[0].Za, s = f.V[0].index, 1 !== f.V.length || a.Jl(e) || a.lr(e) || (f.k || f.n.Wb()) && a.mh(e) || 1 !== f.opacity || f.type.na.rl)
						this.ja.wj(a, this, f, this.Cd ? this.b.Yb : this.ja.sf()), a.cd(), a.scale(q, q), a.Ol(-this.Wb()), a.translate((this.ab + this.Rb) / -2, (this.bb + this.Qb) / -2), a.hd();
					else {
						a.Gd(e);
						a.Se(f.jb, f.hb);
						a.rj(e) && (this.b.Z = !0);
						var k = 0,
						u = 0,
						l = 0,
						n = 0;
						a.mh(e) && (e = f.lb, k = this.Ma(e.left, e.top, !0), u = this.Ma(e.left, e.top, !1), l = this.Ma(e.right, e.bottom, !0), e = this.Ma(e.right, e.bottom, !1), k /= c, u = 1 - u / d, l /= c, n = 1 - e / d);
						a.Yf(this.Cd ? this.b.Yb : this.ja.sf(), 1 / f.width, 1 / f.height, k, u, l, n, this.Lb(), this.Wb(), this.ab, this.bb, f.ua[s]);
						f.Ub(a)
					}
				else
					a.Gd(0), a.Se(f.jb, f.hb), f.Ub(a);
		this.Cd && (e = this.V.length ? this.V[0].Za : 0, s = this.V.length ? this.V[0].index : 0, 0 === this.V.length ||
			1 === this.V.length && !a.Jl(e) && 1 === this.opacity ? (1 === this.V.length ? (a.Gd(e), a.Yf(this.ja.sf(), 1 / this.b.P, 1 / this.b.O, 0, 0, 1, 1, this.Lb(), this.Wb(), this.ab, this.bb, this.ua[s]), a.rj(e) && (this.b.Z = !0)) : a.Gd(0), a.dd(this.ja.sf()), a.je(this.opacity), a.Pb(this.b.Yb), a.Se(this.jb, this.hb), a.cd(), a.hd(), c = this.b.P / 2, d = this.b.O / 2, a.tj(-c, d, c, d, c, -d, -c, -d), a.Pb(null)) : this.ja.wj(a, this, null, this.ja.sf()))
	};
	d.prototype.mb = function (a, c, d, e) {
		var s = this.b.devicePixelRatio;
		this.b.Zd && (a *= s, c *= s);
		var s = this.b.Fl,
		q = this.b.Gl,
		s = (this.ja.scrollX - s) * this.Zc + s,
		q = (this.ja.scrollY - q) * this.$c + q,
		r = 1 / this.Lb(!e);
		e ? (s -= this.b.P * r / 2, q -= this.b.O * r / 2) : (s -= this.b.width * r / 2, q -= this.b.height * r / 2);
		s += a * r;
		q += c * r;
		c = this.Wb();
		0 !== c && (s -= this.ja.scrollX, q -= this.ja.scrollY, a = Math.cos(c), c = Math.sin(c), e = s * a - q * c, q = q * a + s * c, s = e + this.ja.scrollX, q += this.ja.scrollY);
		return d ? s : q
	};
	d.prototype.Ma = function (a, c, d) {
		var e = this.Wb();
		if (0 !== e) {
			a -= this.ja.scrollX;
			c -= this.ja.scrollY;
			var s = Math.cos(-e),
			e = Math.sin(-e),
			q = a * s - c * e;
			c = c * s + a * e;
			a = q + this.ja.scrollX;
			c += this.ja.scrollY
		}
		s = this.b.Fl;
		e = this.b.Gl;
		s = (this.ja.scrollX - s) * this.Zc + s;
		e = (this.ja.scrollY - e) * this.$c + e;
		q = 1 / this.Lb(!1);
		s -= this.b.P * q / 2;
		e -= this.b.O * q / 2;
		s = (a - s) / q;
		e = (c - e) / q;
		a = this.b.devicePixelRatio;
		this.b.Zd && (s /= a, e /= a);
		return d ? s : e
	};
	d.prototype.tb = function () {
		var a,
		c,
		d,
		e = {
			s : this.scale,
			a : this.k,
			vl : this.ab,
			vt : this.bb,
			vr : this.Rb,
			vb : this.Qb,
			v : this.visible,
			bc : this.md,
			t : this.ne,
			px : this.Zc,
			py : this.$c,
			o : this.opacity,
			zr : this.jd,
			fx : [],
			instances : []
		};
		a = 0;
		for (c = this.J.length; a < c; a++)
			d = this.J[a], e.fx.push({
				name : d.name,
				active : d.xa,
				params : this.ua[d.index]
			});
		return e
	};
	d.prototype.Nb = function (c) {
		var d,
		p;
		this.scale = c.s;
		this.k = c.a;
		this.ab = c.vl;
		this.bb = c.vt;
		this.Rb = c.vr;
		this.Qb = c.vb;
		this.visible = c.v;
		this.md = c.bc;
		this.ne = c.t;
		this.Zc = c.px;
		this.$c = c.py;
		this.opacity = c.o;
		this.jd = c.zr;
		var e = c.fx;
		c = 0;
		for (d = e.length; c < d; c++)
			if (p = this.Di(e[c].name))
				p.xa = e[c].active, this.ua[p.index] = e[c].params;
		this.gd();
		this.j.sort(a);
		this.Sb = !0
	};
	Bb = d
})();
(function () {
	function l(b, a) {
		var f,
		k = b.length;
		switch (k) {
		case 0:
			return !0;
		case 1:
			return b[0] === a[0];
		case 2:
			return b[0] === a[0] && b[1] === a[1];
		default:
			for (f = 0; f < k; f++)
				if (b[f] !== a[f])
					return !1;
			return !0
		}
	}
	
	function d(b, a) {
		return b.index - a.index
	}
	
	function a(b) {
		var a,
		f,
		e,
		c;
		2 === b.length ? b[0].index > b[1].index && (a = b[0], b[0] = b[1], b[1] = a) : 2 < b.length && b.sort(d);
		b.length >= k.length && (k.length = b.length + 1);
		k[b.length] || (k[b.length] = []);
		c = k[b.length];
		a = 0;
		for (f = c.length; a < f; a++)
			if (e = c[a], l(b, e))
				return e;
		c.push(b);
		return b
	}
	
	function c(b, a) {
		this.b = b;
		this.$l = {};
		this.Lk = {};
		this.Ki = !1;
		this.cl = new ga;
		this.qi = [];
		this.Zh = [];
		this.name = a[0];
		var f = a[1];
		this.td = [];
		var e,
		k;
		e = 0;
		for (k = f.length; e < k; e++)
			this.dl(f[e], null, this.td)
	}
	
	function g(b) {
		this.type = b;
		this.j = [];
		this.W = [];
		this.ka = !0
	}
	
	function h(b, a, f) {
		this.sheet = b;
		this.parent = a;
		this.b = b.b;
		this.aa = [];
		this.Dd = [];
		this.al = this.Ih = this.Oj = this.Oi = this.group = this.Jj = !1;
		this.Ja = [];
		this.kc = [];
		this.ic = [];
		this.wf = "";
		this.vf = this.Oi = this.group = !1;
		this.Ek = null;
		f[1] && (this.wf = f[1][1].toLowerCase(),
			this.group = !0, this.Oi = !!f[1][0], this.Ek = [], this.vf = this.Oi, this.b.ye.push(this), this.b.xf[this.wf] = this);
		this.tc = f[2];
		this.R = f[4];
		this.group || (this.b.yk[this.R.toString()] = this);
		var e = f[5];
		b = 0;
		for (a = e.length; b < a; b++) {
			var k = new Cb(this, e[b]);
			k.index = b;
			this.Ja.push(k);
			this.ok(k.type)
		}
		e = f[6];
		b = 0;
		for (a = e.length; b < a; b++)
			k = new Db(this, e[b]), k.index = b, this.kc.push(k);
		if (8 === f.length)
			for (f = f[7], b = 0, a = f.length; b < a; b++)
				this.sheet.dl(f[b], this, this.ic);
		this.Ng = !1;
		this.Ja.length && (this.Ng = null == this.Ja[0].type &&
				this.Ja[0].Wa == G.prototype.d.Kc)
	}
	
	function p(b, a) {
		var f,
		e,
		k;
		if (b && (-1 === a.indexOf(b) && a.push(b), b.rc))
			for (f = 0, e = b.Hb.length; f < e; f++)
				k = b.Hb[f], b !== k && -1 === a.indexOf(k) && a.push(k)
	}
	
	function e(b, a) {
		this.Tb = b;
		this.sheet = b.sheet;
		this.b = b.b;
		this.da = [];
		this.ia = [];
		this.wa = {};
		this.index = -1;
		this.df = !1;
		this.Wa = a[1];
		this.trigger = 0 < a[3];
		this.Kk = 2 === a[3];
		this.Qi = a[5];
		this.Ko = a[6];
		this.R = a[7];
		this.b.Ae[this.R.toString()] = this;
		 - 1 === a[0] ? (this.type = null, this.Ea = this.Cj, this.Pd = null, this.ac = -1) : (this.type = this.b.q[a[0]],
			this.Ea = this.Ko ? this.kp : this.Bj, a[2] ? (this.Pd = this.type.Gg(a[2]), this.ac = this.type.Ci(a[2])) : (this.Pd = null, this.ac = -1), this.Tb.parent && this.Tb.parent.vh());
		this.Kk && (this.Ea = this.lp);
		if (10 === a.length) {
			var f,
			k,
			e = a[9];
			f = 0;
			for (k = e.length; f < k; f++) {
				var c = new Eb(this, e[f]);
				this.da.push(c)
			}
			this.ia.length = e.length
		}
	}
	
	function s(b, a) {
		this.Tb = b;
		this.sheet = b.sheet;
		this.b = b.b;
		this.da = [];
		this.ia = [];
		this.wa = {};
		this.index = -1;
		this.df = !1;
		this.Wa = a[1];
		 - 1 === a[0] ? (this.type = null, this.Ea = this.Cj, this.Pd = null, this.ac = -1) :
		(this.type = this.b.q[a[0]], this.Ea = this.Bj, a[2] ? (this.Pd = this.type.Gg(a[2]), this.ac = this.type.Ci(a[2])) : (this.Pd = null, this.ac = -1));
		this.R = a[3];
		this.b.xe[this.R.toString()] = this;
		if (6 === a.length) {
			var f,
			e,
			k = a[5];
			f = 0;
			for (e = k.length; f < e; f++) {
				var c = new Eb(this, k[f]);
				this.da.push(c)
			}
			this.ia.length = k.length
		}
	}
	
	function q(b, a) {
		this.C = b;
		this.Tb = b.Tb;
		this.sheet = b.sheet;
		this.b = b.b;
		this.type = a[0];
		this.zc = null;
		this.Ed = 0;
		this.get = null;
		this.Dk = 0;
		this.ja = null;
		this.key = 0;
		this.object = null;
		this.index = 0;
		this.fg = this.me =
			this.fg = this.me = this.Mk = this.Td = this.gg = null;
		this.jc = !1;
		var f,
		k,
		e;
		switch (a[0]) {
		case 0:
		case 7:
			this.zc = new Fb(this, a[1]);
			this.Ed = 0;
			this.get = this.ho;
			break;
		case 1:
			this.zc = new Fb(this, a[1]);
			this.Ed = 0;
			this.get = this.io;
			break;
		case 5:
			this.zc = new Fb(this, a[1]);
			this.Ed = 0;
			this.get = this.mo;
			break;
		case 3:
		case 8:
			this.Dk = a[1];
			this.get = this.eo;
			break;
		case 6:
			this.ja = this.b.cj[a[1]];
			this.get = this.no;
			break;
		case 9:
			this.key = a[1];
			this.get = this.lo;
			break;
		case 4:
			this.object = this.b.q[a[1]];
			this.get = this.oo;
			this.Tb.ok(this.object);
			this.C instanceof Db ? this.Tb.vh() : this.Tb.parent && this.Tb.parent.vh();
			break;
		case 10:
			this.index = a[1];
			b.type.H ? (this.get = this.jo, this.jc = !0) : this.get = this.ko;
			break;
		case 11:
			this.gg = a[1];
			this.Td = null;
			this.get = this.fo;
			break;
		case 2:
		case 12:
			this.Mk = a[1];
			this.get = this.co;
			break;
		case 13:
			for (this.get = this.po, this.me = [], this.fg = [], f = 1, k = a.length; f < k; f++)
				e = new Eb(this.C, a[f]), this.me.push(e), this.fg.push(0)
		}
	}
	
	function r(b, a, f) {
		this.sheet = b;
		this.parent = a;
		this.b = b.b;
		this.aa = [];
		this.name = f[1];
		this.Mh = f[2];
		this.Ni =
			f[3];
		this.Df = !!f[4];
		this.Mg = !!f[5];
		this.R = f[6];
		this.b.Xe[this.R.toString()] = this;
		this.data = this.Ni;
		this.parent ? (this.fe = this.Df || this.Mg ? -1 : this.b.qp++, this.b.$m.push(this)) : (this.fe = -1, this.b.Zm.push(this))
	}
	
	function b(b, a, f) {
		this.sheet = b;
		this.parent = a;
		this.b = b.b;
		this.aa = [];
		this.yf = null;
		this.uo = f[1];
		this.xa = !0
	}
	
	function f() {
		this.Xl = [];
		this.reset(null)
	}
	var k = [];
	c.prototype.toString = ba("name");
	c.prototype.dl = function (b, a, f) {
		switch (b[0]) {
		case 0:
			b = new Gb(this, a, b);
			if (b.tc)
				for (f.push(b), f = 0, a = b.Ja.length; f <
					a; f++)
					b.Ja[f].trigger && this.el(b, f);
			else
				b.jl() ? this.el(b, 0) : f.push(b);
			break;
		case 1:
			b = new yb(this, a, b);
			f.push(b);
			break;
		case 2:
			b = new Hb(this, a, b),
			f.push(b)
		}
	};
	c.prototype.za = function () {
		var b,
		a;
		b = 0;
		for (a = this.td.length; b < a; b++)
			this.td[b].za(b < a - 1 && this.td[b + 1].Ng)
	};
	c.prototype.fm = function () {
		this.qi.length = 0;
		this.Zh.length = 0;
		this.nk(this);
		this.Zh.length = 0
	};
	c.prototype.nk = function (b) {
		var a,
		f,
		k,
		e,
		c = b.qi,
		d = b.Zh,
		g = this.cl.eg();
		a = 0;
		for (f = g.length; a < f; ++a)
			k = g[a], e = k.yf, !k.xa || b === e || -1 < d.indexOf(e) || (d.push(e),
				e.nk(b), c.push(e))
	};
	c.prototype.Ea = function (b) {
		this.b.mr || (this.Ki = !0, b || (this.b.Ui = !0));
		var a,
		f;
		a = 0;
		for (f = this.td.length; a < f; a++) {
			var e = this.td[a];
			e.Ea();
			this.b.li(e.aa);
			this.b.xc.qc() && !this.b.Ib.length || this.b.cb()
		}
		b || (this.b.Ui = !1)
	};
	c.prototype.el = function (b, a) {
		b.tc || this.b.Jh.push(b);
		var f,
		e,
		k = b.Ja[a],
		c;
		c = k.type ? k.type.name : "system";
		var d = (f = k.Kk) ? this.Lk : this.$l;
		d[c] || (d[c] = []);
		c = d[c];
		d = k.Wa;
		if (f) {
			if (k.da.length && (k = k.da[0], 1 === k.type && 2 === k.zc.type)) {
				k = k.zc.value.toLowerCase();
				f = 0;
				for (e = c.length; f <
					e; f++)
					if (c[f].method == d) {
						f = c[f].mf;
						f[k] ? f[k].push([b, a]) : f[k] = [
							[b, a]
						];
						return
					}
				f = {};
				f[k] = [
					[b, a]
				];
				c.push({
					method : d,
					mf : f
				})
			}
		} else {
			f = 0;
			for (e = c.length; f < e; f++)
				if (c[f].method == d) {
					c[f].mf.push([b, a]);
					return
				}
			I && d === I.prototype.d.we ? c.unshift({
				method : d,
				mf : [
					[b, a]
				]
			}) : c.push({
				method : d,
				mf : [
					[b, a]
				]
			})
		}
	};
	pb = c;
	g.prototype.Ji = function () {
		return this.ka ? this.type.j.length : this.j.length
	};
	g.prototype.fc = function () {
		return this.ka ? this.type.j : this.j
	};
	g.prototype.Qe = function (b) {
		b && (b.b.ib().fb.tc ? (this.ka && (this.j.length = 0,
					za(this.W, b.type.j), this.ka = !1), b = this.W.indexOf(b), -1 !== b && (this.j.push(this.W[b]), this.W.splice(b, 1))) : (this.ka = !1, this.j.length = 1, this.j[0] = b))
	};
	Za = g;
	window._c2hh_ = "023D8A36DE9A1B1142B64202E0BEFE13C47C4486";
	h.prototype.za = function (b) {
		var f,
		k = this.parent;
		if (this.group)
			for (this.Ih = !0; k; ) {
				if (!k.group) {
					this.Ih = !1;
					break
				}
				k = k.parent
			}
		this.Oj = !this.jl() && (!this.parent || this.parent.group && this.parent.Ih);
		this.al = !!b;
		this.Dd = this.aa.slice(0);
		for (k = this.parent; k; ) {
			b = 0;
			for (f = k.aa.length; b < f; b++)
				this.Xm(k.aa[b]);
			k = k.parent
		}
		this.aa = a(this.aa);
		this.Dd = a(this.Dd);
		b = 0;
		for (f = this.Ja.length; b < f; b++)
			this.Ja[b].za();
		b = 0;
		for (f = this.kc.length; b < f; b++)
			this.kc[b].za();
		b = 0;
		for (f = this.ic.length; b < f; b++)
			this.ic[b].za(b < f - 1 && this.ic[b + 1].Ng)
	};
	h.prototype.ok = function (b) {
		p(b, this.aa)
	};
	h.prototype.Xm = function (b) {
		p(b, this.Dd)
	};
	h.prototype.vh = function () {
		this.Jj = !0;
		this.parent && this.parent.vh()
	};
	h.prototype.jl = function () {
		return this.Ja.length ? this.Ja[0].trigger : !1
	};
	h.prototype.Ea = function () {
		var b,
		a = !1,
		f,
		k = this.b,
		e = this.b.ib();
		e.fb = this;
		var c = this.Ja;
		this.Ng || (e.ti = !1);
		if (this.tc) {
			0 === c.length && (a = !0);
			e.Ca = 0;
			for (b = c.length; e.Ca < b; e.Ca++)
				c[e.Ca].trigger || (f = c[e.Ca].Ea()) && (a = !0);
			(e.ae = a) && this.rh()
		} else {
			e.Ca = 0;
			for (b = c.length; e.Ca < b; e.Ca++)
				if (f = c[e.Ca].Ea(), !f) {
					e.ae = !1;
					!this.Oj || k.xc.qc() && !k.Ib.length || k.cb();
					return
				}
			e.ae = !0;
			this.rh()
		}
		this.tn(e)
	};
	h.prototype.tn = function (b) {
		b.ae && this.al && (b.ti = !0);
		!this.Oj || this.b.xc.qc() && !this.b.Ib.length || this.b.cb()
	};
	h.prototype.ip = function (b) {
		this.b.ib().fb = this;
		this.Ja[b].Ea() && (this.rh(),
			this.b.ib().ae = !0)
	};
	h.prototype.rh = function () {
		var b = this.b.ib(),
		a;
		b.Fb = 0;
		for (a = this.kc.length; b.Fb < a; b.Fb++)
			if (this.kc[b.Fb].Ea())
				return;
		this.Pl()
	};
	h.prototype.fp = function () {
		var b = this.b.ib(),
		a;
		for (a = this.kc.length; b.Fb < a; b.Fb++)
			if (this.kc[b.Fb].Ea())
				return;
		this.Pl()
	};
	h.prototype.Pl = function () {
		if (this.ic.length) {
			var b,
			a,
			f,
			k,
			e = this.ic.length - 1;
			this.b.oh(this);
			if (this.Jj)
				for (b = 0, a = this.ic.length; b < a; b++)
					f = this.ic[b], (k = !this.Ih || !this.group && b < e) && this.b.Vf(f.aa), f.Ea(), k ? this.b.Ad(f.aa) : this.b.li(f.aa);
			else
				for (b = 0, a = this.ic.length; b < a; b++)
					this.ic[b].Ea();
			this.b.jh()
		}
	};
	h.prototype.jp = function () {
		var b = this.b.ib();
		b.fb = this;
		var a = !1,
		f;
		b.Ca = 0;
		for (f = this.Ja.length; b.Ca < f; b.Ca++)
			if (this.Ja[b.Ca].Ea())
				a = !0;
			else
				if (!this.tc)
					return !1;
		return this.tc ? a : !0
	};
	h.prototype.zj = function () {
		this.b.Bg++;
		var b = this.b.ib().Ca,
		a = this.b.oh(this);
		if (!this.tc)
			for (a.Ca = b + 1, b = this.Ja.length; a.Ca < b; a.Ca++)
				if (!this.Ja[a.Ca].Ea())
					return this.b.jh(), !1;
		this.rh();
		this.b.jh();
		return !0
	};
	h.prototype.Bo = function (b) {
		var a = b.index;
		if (0 ===
			a)
			return !0;
		for (--a; 0 <= a; --a)
			if (this.Ja[a].type === b.type)
				return !1;
		return !0
	};
	Gb = h;
	e.prototype.za = function () {
		var b,
		a,
		f;
		b = 0;
		for (a = this.da.length; b < a; b++)
			f = this.da[b], f.za(), f.jc && (this.df = !0)
	};
	e.prototype.lp = v(!0);
	e.prototype.Cj = function () {
		var b,
		a;
		b = 0;
		for (a = this.da.length; b < a; b++)
			this.ia[b] = this.da[b].get();
		return La(this.Wa.apply(this.b.Fc, this.ia), this.Qi)
	};
	e.prototype.kp = function () {
		var b,
		a;
		b = 0;
		for (a = this.da.length; b < a; b++)
			this.ia[b] = this.da[b].get();
		b = this.Wa.apply(this.Pd ? this.Pd : this.type, this.ia);
		this.type.mc();
		return b
	};
	e.prototype.Bj = function () {
		var b,
		a,
		f,
		k,
		e,
		c,
		d,
		g,
		h = this.type,
		r = h.ca(),
		p = this.Tb.tc && !this.trigger;
		a = 0;
		var s = h.rc,
		q = h.H,
		u = h.Qc,
		l = this.ac,
		x = -1 < l,
		P = this.df,
		z = this.da,
		T = this.ia,
		ka = this.Qi,
		na = this.Wa,
		ca;
		if (P)
			for (a = 0, e = z.length; a < e; ++a)
				c = z[a], c.jc || (T[a] = c.get(0));
		else
			for (a = 0, e = z.length; a < e; ++a)
				T[a] = z[a].get(0);
		if (r.ka) {
			r.j.length = 0;
			r.W.length = 0;
			ca = h.j;
			b = 0;
			for (k = ca.length; b < k; ++b) {
				g = ca[b];
				if (P)
					for (a = 0, e = z.length; a < e; ++a)
						c = z[a], c.jc && (T[a] = c.get(b));
				x ? (a = 0, q && (a = g.type.De[u]), a = na.apply(g.M[l +
								a], T)) : a = na.apply(g, T);
				(d = La(a, ka)) ? r.j.push(g) : p && r.W.push(g)
			}
			h.finish && h.finish(!0);
			r.ka = !1;
			h.mc();
			return r.Ji()
		}
		f = 0;
		ca = (d = p && !this.Tb.Bo(this)) ? r.W : r.j;
		var Na = !1;
		b = 0;
		for (k = ca.length; b < k; ++b) {
			g = ca[b];
			if (P)
				for (a = 0, e = z.length; a < e; ++a)
					c = z[a], c.jc && (T[a] = c.get(b));
			x ? (a = 0, q && (a = g.type.De[u]), a = na.apply(g.M[l + a], T)) : a = na.apply(g, T);
			if (La(a, ka))
				if (Na = !0, d) {
					if (r.j.push(g), s)
						for (a = 0, e = g.siblings.length; a < e; a++)
							c = g.siblings[a], c.type.ca().j.push(c)
				} else {
					ca[f] = g;
					if (s)
						for (a = 0, e = g.siblings.length; a < e; a++)
							c =
								g.siblings[a], c.type.ca().j[f] = c;
					f++
				}
			else
				if (d) {
					ca[f] = g;
					if (s)
						for (a = 0, e = g.siblings.length; a < e; a++)
							c = g.siblings[a], c.type.ca().W[f] = c;
					f++
				} else if (p && (r.W.push(g), s))
					for (a = 0, e = g.siblings.length; a < e; a++)
						c = g.siblings[a], c.type.ca().W.push(c)
		}
		ca.length = f;
		if (s)
			for (q = h.Hb, b = 0, k = q.length; b < k; b++)
				g = q[b].ca(), d ? g.W.length = f : g.j.length = f;
		f = Na;
		if (d && !Na)
			for (b = 0, k = r.j.length; b < k; b++) {
				g = r.j[b];
				if (P)
					for (a = 0, e = z.length; a < e; a++)
						c = z[a], c.jc && (T[a] = c.get(b));
				a = x ? na.apply(g.M[l], T) : na.apply(g, T);
				if (La(a, ka)) {
					Na = !0;
					break
				}
			}
		h.finish &&
		h.finish(f || p);
		return p ? Na : r.Ji()
	};
	Cb = e;
	s.prototype.za = function () {
		var b,
		a,
		f;
		b = 0;
		for (a = this.da.length; b < a; b++)
			f = this.da[b], f.za(), f.jc && (this.df = !0)
	};
	s.prototype.Cj = function () {
		var b,
		a;
		b = 0;
		for (a = this.da.length; b < a; b++)
			this.ia[b] = this.da[b].get();
		return this.Wa.apply(this.b.Fc, this.ia)
	};
	s.prototype.Bj = function () {
		var b = this.type.ca().fc(),
		a = this.type.H,
		f = this.type.Qc,
		e = this.ac,
		k = -1 < e,
		c = this.df,
		d = this.da,
		g = this.ia,
		h = this.Wa,
		r,
		p,
		s,
		q,
		l,
		u;
		if (c)
			for (p = 0, q = d.length; p < q; ++p)
				l = d[p], l.jc || (g[p] = l.get(0));
		else
			for (p =
					0, q = d.length; p < q; ++p)
				g[p] = d[p].get(0);
		r = 0;
		for (s = b.length; r < s; ++r) {
			u = b[r];
			if (c)
				for (p = 0, q = d.length; p < q; ++p)
					l = d[p], l.jc && (g[p] = l.get(r));
			k ? (p = 0, a && (p = u.type.De[f]), h.apply(u.M[e + p], g)) : h.apply(u, g)
		}
		return !1
	};
	Db = s;
	var u = [],
	x = -1;
	q.prototype.za = function () {
		var b,
		a;
		if (11 === this.type)
			this.Td = this.b.Tk(this.gg, this.Tb.parent);
		else if (13 === this.type)
			for (b = 0, a = this.me.length; b < a; b++)
				this.me[b].za();
		this.zc && this.zc.za()
	};
	q.prototype.No = function (b) {
		this.jc || !b || b.na.xh || (this.jc = !0)
	};
	q.prototype.Rl = function () {
		this.jc = !0
	};
	q.prototype.Na = function () {
		x++;
		u.length === x && u.push(new Ib);
		return u[x]
	};
	q.prototype.Da = function () {
		x--
	};
	q.prototype.ho = function (b) {
		this.Ed = b || 0;
		b = this.Na();
		this.zc.get(b);
		this.Da();
		return b.data
	};
	q.prototype.io = function (b) {
		this.Ed = b || 0;
		b = this.Na();
		this.zc.get(b);
		this.Da();
		return w(b.data) ? b.data : ""
	};
	q.prototype.oo = ba("object");
	q.prototype.eo = ba("Dk");
	q.prototype.mo = function (b) {
		this.Ed = b || 0;
		b = this.Na();
		this.zc.get(b);
		this.Da();
		return b.Ra() ? this.b.rf(b.data) : this.b.Gi(b.data)
	};
	q.prototype.no = ba("ja");
	q.prototype.lo = ba("key");
	q.prototype.ko = ba("index");
	q.prototype.jo = function (b) {
		b = b || 0;
		var a = this.C.type,
		f = null,
		f = a.ca(),
		e = f.fc();
		if (e.length)
			f = e[b % e.length].type;
		else if (f.W.length)
			f = f.W[b % f.W.length].type;
		else if (a.j.length)
			f = a.j[b % a.j.length].type;
		else
			return 0;
		return this.index + f.Cg[a.Qc]
	};
	q.prototype.fo = ba("Td");
	q.prototype.co = ba("Mk");
	q.prototype.po = function () {
		var b,
		a;
		b = 0;
		for (a = this.me.length; b < a; b++)
			this.fg[b] = this.me[b].get();
		return this.fg
	};
	Eb = q;
	r.prototype.za = function () {
		this.aa = a(this.aa)
	};
	r.prototype.le = function (b) {
		var a = this.b.Sk();
		this.parent && !this.Df && a ? (this.fe >= a.length && (a.length = this.fe + 1), a[this.fe] = b) : this.data = b
	};
	r.prototype.tf = function () {
		var b = this.b.Sk();
		return !this.parent || this.Df || !b || this.Mg ? this.data : this.fe >= b.length || "undefined" === typeof b[this.fe] ? this.Ni : b[this.fe]
	};
	r.prototype.Ea = function () {
		!this.parent || this.Df || this.Mg || this.le(this.Ni)
	};
	yb = r;
	b.prototype.toString = function () {
		return "include:" + this.yf.toString()
	};
	b.prototype.za = function () {
		this.yf = this.b.wi[this.uo];
		this.sheet.cl.add(this);
		this.aa = a(this.aa);
		for (var b = this.parent; b; )
			b.group && b.Ek.push(this), b = b.parent;
		this.zp()
	};
	b.prototype.Ea = function () {
		this.parent && this.b.Uf(this.b.q);
		this.yf.Ki || this.yf.Ea(!0);
		this.parent && this.b.Ad(this.b.q)
	};
	b.prototype.zp = function () {
		for (var b = this.parent; b; ) {
			if (b.group && !b.vf) {
				this.xa = !1;
				return
			}
			b = b.parent
		}
		this.xa = !0
	};
	Hb = b;
	f.prototype.reset = function (b) {
		this.fb = b;
		this.Fb = this.Ca = 0;
		this.Xl.length = 0;
		this.ti = this.ae = !1
	};
	f.prototype.Co = function () {
		return this.fb.Jj ? !0 : this.Ca <
		this.fb.Ja.length - 1 ? !!this.fb.aa.length : !1
	};
	xb = f
})();
(function () {
	function l(a, c) {
		this.C = a;
		this.b = a.b;
		this.type = c[0];
		this.get = [this.Fn, this.Bn, this.Nn, this.Qn, this.vn, this.On, this.Jn, this.yn, this.In, this.Mn, this.wn, this.Ln, this.zn, this.Kn, this.Gn, this.Hn, this.Cn, this.Dn, this.xn, this.Pn, this.Ik, this.En, this.Ik, this.An][this.type];
		var d = null;
		this.Ab = this.da = this.ia = this.Wa = this.Eh = this.Va = this.first = this.value = null;
		this.ac = -1;
		this.Tc = null;
		this.Uj = -1;
		this.Td = this.gg = null;
		this.Xf = !1;
		switch (this.type) {
		case 0:
		case 1:
		case 2:
			this.value = c[1];
			break;
		case 3:
			this.first =
				new Fb(a, c[1]);
			break;
		case 18:
			this.first = new Fb(a, c[1]);
			this.Va = new Fb(a, c[2]);
			this.Eh = new Fb(a, c[3]);
			break;
		case 19:
			this.Wa = c[1];
			this.Wa !== G.prototype.L.random && this.Wa !== G.prototype.L.ki || this.C.Rl();
			this.ia = [];
			this.da = [];
			3 === c.length ? (d = c[2], this.ia.length = d.length + 1) : this.ia.length = 1;
			break;
		case 20:
			this.Ab = this.b.q[c[1]];
			this.ac = -1;
			this.Wa = c[2];
			this.Xf = c[3];
			L && this.Wa === L.prototype.L.lm && this.C.Rl();
			this.Tc = c[4] ? new Fb(a, c[4]) : null;
			this.ia = [];
			this.da = [];
			6 === c.length ? (d = c[5], this.ia.length = d.length +
					1) : this.ia.length = 1;
			break;
		case 21:
			this.Ab = this.b.q[c[1]];
			this.Xf = c[2];
			this.Tc = c[3] ? new Fb(a, c[3]) : null;
			this.Uj = c[4];
			break;
		case 22:
			this.Ab = this.b.q[c[1]];
			this.Ab.Gg(c[2]);
			this.ac = this.Ab.Ci(c[2]);
			this.Wa = c[3];
			this.Xf = c[4];
			this.Tc = c[5] ? new Fb(a, c[5]) : null;
			this.ia = [];
			this.da = [];
			7 === c.length ? (d = c[6], this.ia.length = d.length + 1) : this.ia.length = 1;
			break;
		case 23:
			this.gg = c[1],
			this.Td = null
		}
		this.C.No(this.Ab);
		4 <= this.type && 17 >= this.type && (this.first = new Fb(a, c[1]), this.Va = new Fb(a, c[2]));
		if (d) {
			var h,
			p;
			h = 0;
			for (p =
					d.length; h < p; h++)
				this.da.push(new Fb(a, d[h]))
		}
	}
	
	function d(a, c) {
		this.type = a || Jb.ue;
		this.data = c || 0;
		this.Me = null;
		this.type == Jb.ue && (this.data = Math.floor(this.data))
	}
	l.prototype.za = function () {
		23 === this.type && (this.Td = this.C.b.Tk(this.gg, this.C.Tb.parent));
		this.first && this.first.za();
		this.Va && this.Va.za();
		this.Eh && this.Eh.za();
		this.Tc && this.Tc.za();
		if (this.da) {
			var a,
			c;
			a = 0;
			for (c = this.da.length; a < c; a++)
				this.da[a].za()
		}
	};
	l.prototype.Pn = function (a) {
		this.ia[0] = a;
		a = this.C.Na();
		var c,
		d;
		c = 0;
		for (d = this.da.length; c <
			d; c++)
			this.da[c].get(a), this.ia[c + 1] = a.data;
		this.C.Da();
		this.Wa.apply(this.b.Fc, this.ia)
	};
	l.prototype.Ik = function (a) {
		var c = this.Ab.ca(),
		d = c.fc();
		if (!d.length)
			if (c.W.length)
				d = c.W;
			else {
				this.Xf ? a.Cb("") : a.ea(0);
				return
			}
		this.ia[0] = a;
		a.Me = this.Ab;
		a = this.C.Na();
		var h,
		c = 0;
		for (h = this.da.length; c < h; c++)
			this.da[c].get(a), this.ia[c + 1] = a.data;
		c = this.C.Ed;
		this.Tc && (this.Tc.get(a), a.Ra() && (c = a.data, d = this.Ab.j));
		this.C.Da();
		c %= d.length;
		0 > c && (c += d.length);
		d = d[c];
		 - 1 < this.ac ? (a = 0, this.Ab.H && (a = d.type.De[this.Ab.Qc]),
			this.Wa.apply(d.M[this.ac + a], this.ia)) : this.Wa.apply(d, this.ia)
	};
	l.prototype.En = function (a) {
		var c = this.Ab.ca(),
		d = c.fc();
		if (!d.length)
			if (c.W.length)
				d = c.W;
			else {
				this.Xf ? a.Cb("") : a.ea(0);
				return
			}
		c = this.C.Ed;
		if (this.Tc) {
			var h = this.C.Na();
			this.Tc.get(h);
			if (h.Ra()) {
				c = h.data;
				d = this.Ab.j;
				c %= d.length;
				0 > c && (c += d.length);
				d = d[c].Ka[this.Uj];
				w(d) ? a.Cb(d) : a.F(d);
				this.C.Da();
				return
			}
			this.C.Da()
		}
		c %= d.length;
		0 > c && (c += d.length);
		d = d[c];
		c = 0;
		this.Ab.H && (c = d.type.Cg[this.Ab.Qc]);
		d = d.Ka[this.Uj + c];
		w(d) ? a.Cb(d) : a.F(d)
	};
	l.prototype.Fn =
	function (a) {
		a.type = Jb.ue;
		a.data = this.value
	};
	l.prototype.Bn = function (a) {
		a.type = Jb.te;
		a.data = this.value
	};
	l.prototype.Nn = function (a) {
		a.type = Jb.pg;
		a.data = this.value
	};
	l.prototype.Qn = function (a) {
		this.first.get(a);
		a.Ra() && (a.data = -a.data)
	};
	l.prototype.vn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data += c.data, c.Ge() && a.Ke());
		this.C.Da()
	};
	l.prototype.On = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data -= c.data, c.Ge() && a.Ke());
		this.C.Da()
	};
	l.prototype.Jn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data *= c.data, c.Ge() && a.Ke());
		this.C.Da()
	};
	l.prototype.yn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data /= c.data, a.Ke());
		this.C.Da()
	};
	l.prototype.In = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data %= c.data, c.Ge() && a.Ke());
		this.C.Da()
	};
	l.prototype.Mn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() &&
		(a.data = Math.pow(a.data, c.data), c.Ge() && a.Ke());
		this.C.Da()
	};
	l.prototype.wn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() ? c.Og() ? a.Cb(a.data.toString() + c.data) : a.data && c.data ? a.ea(1) : a.ea(0) : a.Og() && (a.data = c.Og() ? a.data + c.data : a.data + (Math.round(1E10 * c.data) / 1E10).toString());
		this.C.Da()
	};
	l.prototype.Ln = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.Ra() && c.Ra() && (a.data || c.data ? a.ea(1) : a.ea(0));
		this.C.Da()
	};
	l.prototype.xn = function (a) {
		this.first.get(a);
		a.data ?
		this.Va.get(a) : this.Eh.get(a)
	};
	l.prototype.zn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data === c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.Kn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data !== c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.Gn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data < c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.Hn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data <= c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.Cn =
	function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data > c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.Dn = function (a) {
		this.first.get(a);
		var c = this.C.Na();
		this.Va.get(c);
		a.ea(a.data >= c.data ? 1 : 0);
		this.C.Da()
	};
	l.prototype.An = function (a) {
		var c = this.Td.tf();
		ja(c) ? a.F(c) : a.Cb(c)
	};
	Fb = l;
	d.prototype.Ge = function () {
		return this.type === Jb.te
	};
	d.prototype.Ra = function () {
		return this.type === Jb.ue || this.type === Jb.te
	};
	d.prototype.Og = function () {
		return this.type === Jb.pg
	};
	d.prototype.Ke = function () {
		this.Ge() ||
		(this.Og() && (this.data = parseFloat(this.data)), this.type = Jb.te)
	};
	d.prototype.ea = function (a) {
		this.type = Jb.ue;
		this.data = Math.floor(a)
	};
	d.prototype.F = function (a) {
		this.type = Jb.te;
		this.data = a
	};
	d.prototype.Cb = function (a) {
		this.type = Jb.pg;
		this.data = a
	};
	d.prototype.Hj = function (a) {
		ja(a) ? (this.type = Jb.te, this.data = a) : w(a) ? (this.type = Jb.pg, this.data = a.toString()) : (this.type = Jb.ue, this.data = 0)
	};
	Ib = d;
	Jb = {
		ue : 0,
		te : 1,
		pg : 2
	}
})();

function G(l) {
	this.b = l;
	this.Db = []
}
G.prototype.tb = function () {
	var l = {},
	d,
	a,
	c,
	g,
	h,
	p,
	e,
	s;
	l.waits = [];
	var q = l.waits,
	r;
	d = 0;
	for (a = this.Db.length; d < a; d++) {
		p = this.Db[d];
		r = {
			t : p.time,
			ev : p.Be.R,
			sm : [],
			sols : {}
		};
		p.Be.kc[p.Fb] && (r.act = p.Be.kc[p.Fb].R);
		c = 0;
		for (g = p.aa.length; c < g; c++)
			r.sm.push(p.aa[c].R);
		for (h in p.ub)
			if (p.ub.hasOwnProperty(h)) {
				e = this.b.q[parseInt(h, 10)];
				s = {
					sa : p.ub[h].sh,
					insts : []
				};
				c = 0;
				for (g = p.ub[h].Uc.length; c < g; c++)
					s.insts.push(p.ub[h].Uc[c].uid);
				r.sols[e.R.toString()] = s
			}
		q.push(r)
	}
	return l
};
G.prototype.Nb = function (l) {
	l = l.waits;
	var d,
	a,
	c,
	g,
	h,
	p,
	e,
	s,
	q,
	r,
	b;
	d = this.Db.length = 0;
	for (a = l.length; d < a; d++)
		if (p = l[d], s = this.b.yk[p.ev.toString()]) {
			q = -1;
			c = 0;
			for (g = s.kc.length; c < g; c++)
				if (s.kc[c].R === p.act) {
					q = c;
					break
				}
			if (-1 !== q) {
				e = {
					ub : {},
					aa : [],
					ri : !1
				};
				e.time = p.t;
				e.Be = s;
				e.Fb = q;
				c = 0;
				for (g = p.sm.length; c < g; c++)
					(s = this.b.Jg(p.sm[c])) && e.aa.push(s);
				for (h in p.sols)
					if (p.sols.hasOwnProperty(h) && (s = this.b.Jg(parseInt(h, 10)))) {
						q = p.sols[h];
						r = {
							sh : q.sa,
							Uc : []
						};
						c = 0;
						for (g = q.insts.length; c < g; c++)
							(b = this.b.Hi(q.insts[c])) &&
							r.Uc.push(b);
						e.ub[s.index.toString()] = r
					}
				this.Db.push(e)
			}
		}
};
(function () {
	function l() {}
	
	function d() {}
	
	function a() {}
	var c = G.prototype;
	l.prototype.Xj = v(!0);
	l.prototype.jg = v(!0);
	l.prototype.Bm = v(!0);
	l.prototype.Wj = function (a, e, c) {
		return Kb(a, e, c)
	};
	l.prototype.Rm = function () {
		var a = this.b.ib(),
		e = a.fb,
		c = a.Co(),
		a = this.b.cp();
		if (c)
			for (c = 0; !a.$f; c++)
				this.b.Vf(e.aa), a.index = c, e.zj() || (a.$f = !0), this.b.Ad(e.aa);
		else
			for (c = 0; !a.$f; c++)
				a.index = c, e.zj() || (a.$f = !0);
		this.b.Yo();
		return !1
	};
	l.prototype.cf = function () {
		var a = this.b.Rk().wa;
		"undefined" === typeof a.Vh && (a.Vh = -1);
		var e =
			a.Vh,
		c = this.b.Ic;
		a.Vh = c;
		return this.b.bj || e !== c - 1
	};
	l.prototype.ek = function (a) {
		if (!a)
			return !1;
		var e = a.ca(),
		c = e.fc(),
		d = ra(Math.random() * c.length);
		if (d >= c.length)
			return !1;
		e.Qe(c[d]);
		a.mc();
		return !0
	};
	l.prototype.eb = function (a, e, c) {
		return Kb(a.tf(), e, c)
	};
	l.prototype.Ze = function (a) {
		return (a = this.b.xf[a.toLowerCase()]) && a.vf
	};
	l.prototype.kg = function (a) {
		if (!a || !a.j.length)
			return !1;
		a.ca().ka = !0;
		a.mc();
		return !0
	};
	l.prototype.Kc = function () {
		var a = this.b.ib();
		return a.ti ? !1 : !a.ae
	};
	l.prototype.Qh = v(!0);
	l.prototype.xm =
		v(!0);
	l.prototype.Rh = v(!0);
	l.prototype.Cm = v(!0);
	l.prototype.Ph = v(!0);
	c.d = new l;
	d.prototype.pm = function (a) {
		this.b.Ef || this.b.ff || (this.b.ff = a)
	};
	d.prototype.Om = function (a) {
		this.b.$.Fj(a)
	};
	d.prototype.Eb = function (a, e) {
		0 === a.Mh ? ja(e) ? a.le(e) : a.le(parseFloat(e)) : 1 === a.Mh && a.le(e.toString())
	};
	d.prototype.Ye = function (a, e) {
		0 === a.Mh ? ja(e) ? a.le(a.tf() + e) : a.le(a.tf() + parseFloat(e)) : 1 === a.Mh && a.le(a.tf() + e.toString())
	};
	var g = [],
	h = [];
	d.prototype.Md = function (a) {
		if (!(0 > a)) {
			var e,
			c,
			d,
			r = this.b.ib(),
			b;
			b = g.length ? g.pop() : {
				ub : {},
				aa : []
			};
			b.ri = !1;
			b.time = this.b.$d.wb + a;
			b.Be = r.fb;
			b.Fb = r.Fb + 1;
			a = 0;
			for (e = this.b.q.length; a < e; a++)
				d = this.b.q[a], c = d.ca(), c.ka && -1 === r.fb.aa.indexOf(d) || (b.aa.push(d), d = void 0, d = h.length ? h.pop() : {
						Uc : []
					}, d.sh = !1, d.sh = c.ka, za(d.Uc, c.j), b.ub[a.toString()] = d);
			this.Db.push(b);
			return !0
		}
	};
	c.e = new d;
	a.prototype["int"] = function (a, e) {
		w(e) ? (a.ea(parseInt(e, 10)), isNaN(a.data) && (a.data = 0)) : a.ea(e)
	};
	a.prototype["float"] = function (a, e) {
		w(e) ? (a.F(parseFloat(e)), isNaN(a.data) && (a.data = 0)) : a.F(e)
	};
	a.prototype.random =
	function (a, e, c) {
		void 0 === c ? a.F(Math.random() * e) : a.F(Math.random() * (c - e) + e)
	};
	a.prototype.sqrt = function (a, e) {
		a.F(Math.sqrt(e))
	};
	a.prototype.abs = function (a, e) {
		a.F(Math.abs(e))
	};
	a.prototype.round = function (a, e) {
		a.ea(Math.round(e))
	};
	a.prototype.floor = function (a, e) {
		a.ea(Math.floor(e))
	};
	a.prototype.ceil = function (a, e) {
		a.ea(Math.ceil(e))
	};
	a.prototype.sin = function (a, e) {
		a.F(Math.sin(D(e)))
	};
	a.prototype.cos = function (a, e) {
		a.F(Math.cos(D(e)))
	};
	a.prototype.asin = function (a, e) {
		a.F(Ba(Math.asin(e)))
	};
	a.prototype.acos =
	function (a, e) {
		a.F(Ba(Math.acos(e)))
	};
	a.prototype.max = function (a) {
		var e = arguments[1],
		c,
		d;
		c = 2;
		for (d = arguments.length; c < d; c++)
			e < arguments[c] && (e = arguments[c]);
		a.F(e)
	};
	a.prototype.min = function (a) {
		var c = arguments[1],
		d,
		g;
		d = 2;
		for (g = arguments.length; d < g; d++)
			c > arguments[d] && (c = arguments[d]);
		a.F(c)
	};
	a.prototype.Sd = function (a) {
		a.F(this.b.Sd)
	};
	a.prototype.dg = function (a) {
		a.F(this.b.dg)
	};
	a.prototype.time = function (a) {
		a.F(this.b.$d.wb)
	};
	a.prototype.Ic = function (a) {
		a.ea(this.b.Ic)
	};
	a.prototype.$g = function (a) {
		a.ea(this.b.$g)
	};
	a.prototype.yi = function (a) {
		a.ea(this.b.yi)
	};
	a.prototype.k = function (a, c, d, g, h) {
		a.F(Ba(Ga(c, d, g, h)))
	};
	a.prototype.left = function (a, c, d) {
		a.Cb(w(c) ? c.substr(0, d) : "")
	};
	a.prototype.right = function (a, c, d) {
		a.Cb(w(c) ? c.substr(c.length - d) : "")
	};
	a.prototype.replace = function (a, c, d, g) {
		w(c) && w(d) && w(g) ? a.Cb(c.replace(RegExp(Ra(d), "gi"), g)) : a.Cb(w(c) ? c : "")
	};
	a.prototype.ki = function (a) {
		var c = ra(Math.random() * (arguments.length - 1));
		a.Hj(arguments[c + 1])
	};
	a.prototype.mi = function (a) {
		a.F(this.b.mi / 1E3)
	};
	a.prototype.ee = function (a) {
		a.F(this.b.ee)
	};
	c.L = new a;
	c.hp = function () {
		var a,
		c,
		d,
		l,
		r,
		b,
		f = this.b.ib();
		a = 0;
		for (d = this.Db.length; a < d; a++)
			if (l = this.Db[a], !(l.time > this.b.$d.wb)) {
				f.fb = l.Be;
				f.Fb = l.Fb;
				f.Ca = 0;
				for (c in l.ub)
					l.ub.hasOwnProperty(c) && (r = this.b.q[parseInt(c, 10)].ca(), b = l.ub[c], r.ka = b.sh, za(r.j, b.Uc), r = b, r.Uc.length = 0, h.push(r));
				l.Be.fp();
				this.b.li(l.aa);
				l.ri = !0
			}
		c = a = 0;
		for (d = this.Db.length; a < d; a++)
			l = this.Db[a], this.Db[c] = l, l.ri ? (Oa(l.ub), l.aa.length = 0, g.push(l)) : c++;
		this.Db.length = c
	}
})();
(function () {
	Ya = function (d) {
		var a = d[0].prototype,
		c = d[1],
		g = d[3],
		h = d[4],
		l = d[5],
		e = d[6],
		s = d[7];
		d = d[8];
		a.d || (a.d = {});
		a.e || (a.e = {});
		a.L || (a.L = {});
		var q = a.d,
		r = a.e,
		a = a.L;
		g && (q.Id = function (b, a) {
			return Kb(this.x, b, a)
		}, q.Rp = function (b, a) {
			return Kb(this.y, b, a)
		}, q.$p = function () {
			var b = this.n;
			this.$a();
			var a = this.lb;
			return !(a.right < b.ab || a.bottom < b.bb || a.left > b.Rb || a.top > b.Qb)
		}, q.aq = function () {
			this.$a();
			var b = this.lb,
			a = this.b.$;
			return 0 > b.right || 0 > b.bottom || b.left > a.width || b.top > a.height
		}, q.nq = function (b, a, c) {
			var e =
				this.ca(),
			d = e.fc();
			if (!d.length)
				return !1;
			var g = d[0],
			h = g,
			r = Ka(g.x, g.y, a, c),
			l,
			s,
			q;
			l = 1;
			for (s = d.length; l < s; l++)
				if (g = d[l], q = Ka(g.x, g.y, a, c), 0 === b && q < r || 1 === b && q > r)
					r = q, h = g;
			e.Qe(h);
			return !0
		}, r.fk = function (b) {
			this.x !== b && (this.x = b, this.Aa())
		}, r.Nq = function (b) {
			this.y !== b && (this.y = b, this.Aa())
		}, r.Hq = function (b, a) {
			if (this.x !== b || this.y !== a)
				this.x = b, this.y = a, this.Aa()
		}, r.Iq = function (b, a) {
			var c = b.bo(this);
			if (c) {
				var e;
				c.Fi ? (e = c.Fi(a, !0), c = c.Fi(a, !1)) : (e = c.x, c = c.y);
				if (this.x !== e || this.y !== c)
					this.x = e, this.y = c, this.Aa()
			}
		},
			r.gq = function (b) {
			0 !== b && (this.x += Math.cos(this.k) * b, this.y += Math.sin(this.k) * b, this.Aa())
		}, r.fq = function (b, a) {
			0 !== a && (this.x += Math.cos(D(b)) * a, this.y += Math.sin(D(b)) * a, this.Aa())
		}, a.hk = function (b) {
			b.F(this.x)
		}, a.Sm = function (b) {
			b.F(this.y)
		}, a.Sd = function (b) {
			b.F(this.b.Hg(this))
		});
		h && (q.Qp = function (b, a) {
			return Kb(this.width, b, a)
		}, q.Np = function (b, a) {
			return Kb(this.height, b, a)
		}, r.Th = function (b) {
			this.width !== b && (this.width = b, this.Aa())
		}, r.Eq = function (b) {
			this.height !== b && (this.height = b, this.Aa())
		}, r.ng =
			function (b, a) {
			if (this.width !== b || this.height !== a)
				this.width = b, this.height = a, this.Aa()
		}, a.gk = function (b) {
			b.F(this.width)
		}, a.qm = function (b) {
			b.F(this.height)
		}, a.Kp = function (b) {
			this.$a();
			b.F(this.lb.left)
		}, a.Mp = function (b) {
			this.$a();
			b.F(this.lb.top)
		}, a.Lp = function (b) {
			this.$a();
			b.F(this.lb.right)
		}, a.Jp = function (b) {
			this.$a();
			b.F(this.lb.bottom)
		});
		l && (q.Ip = function (b, a) {
			return Ha(this.k, D(a)) <= D(b)
		}, q.Yp = function (b) {
			return Ja(this.k, D(b))
		}, q.Xp = function (b, a) {
			var c = Fa(b),
			e = Fa(a),
			d = Da(this.k);
			return Ja(e,
				c) ? Ja(d, c) && !Ja(d, e) : !(!Ja(d, c) && Ja(d, e))
		}, r.xq = function (b) {
			b = D(Ca(b));
			isNaN(b) || this.k === b || (this.k = b, this.Aa())
		}, r.tq = function (b) {
			0 === b || isNaN(b) || (this.k += D(b), this.k = Da(this.k), this.Aa())
		}, r.uq = function (b) {
			0 === b || isNaN(b) || (this.k -= D(b), this.k = Da(this.k), this.Aa())
		}, r.vq = function (b, a) {
			var c = Ia(this.k, D(a), D(b));
			isNaN(c) || this.k === c || (this.k = c, this.Aa())
		}, r.wq = function (b, a, c) {
			b = Ia(this.k, Math.atan2(c - this.y, a - this.x), D(b));
			isNaN(b) || this.k === b || (this.k = b, this.Aa())
		}, r.Kq = function (b, a) {
			var c = Math.atan2(a -
					this.y, b - this.x);
			isNaN(c) || this.k === c || (this.k = c, this.Aa())
		}, a.Hp = function (b) {
			b.F(Ea(this.k))
		});
		c || (q.ra = function (b, a, c) {
			return Kb(this.Ka[b], a, c)
		}, q.tm = function (b) {
			return this.Ka[b]
		}, q.oq = function (b, a) {
			var c = this.ca(),
			e = c.fc();
			if (!e.length)
				return !1;
			var d = e[0],
			g = d,
			h = d.Ka[a],
			r,
			l,
			s;
			r = 1;
			for (l = e.length; r < l; r++)
				if (d = e[r], s = d.Ka[a], 0 === b && s < h || 1 === b && s > h)
					h = s, g = d;
			c.Qe(g);
			return !0
		}, q.mq = function (b) {
			var a,
			c,
			e,
			d,
			g;
			if (this.b.Rk().Qi) {
				g = this.ca();
				if (g.ka)
					for (g.ka = !1, g.j.length = 0, g.W.length = 0, e = this.j, a = 0, c = e.length; a <
						c; a++)
						d = e[a], d.uid === b ? g.W.push(d) : g.j.push(d);
				else {
					e = a = 0;
					for (c = g.j.length; a < c; a++)
						d = g.j[a], g.j[e] = d, d.uid === b ? g.W.push(d) : e++;
					g.j.length = e
				}
				this.mc();
				return !!g.j.length
			}
			d = this.b.Hi(b);
			if (!d)
				return !1;
			g = this.ca();
			if (!g.ka && -1 === g.j.indexOf(d))
				return !1;
			if (this.H)
				for (b = d.type.qa, a = 0, c = b.length; a < c; a++) {
					if (b[a] === this)
						return g.Qe(d), this.mc(), !0
				}
			else if (d.type === this)
				return g.Qe(d), this.mc(), !0;
			return !1
		}, q.ym = v(!0), q.zm = v(!0), r.mg = function (b, a) {
			var c = this.Ka;
			ja(c[b]) ? c[b] = ja(a) ? a : parseFloat(a) : w(c[b]) &&
				(c[b] = w(a) ? a : a.toString())
		}, r.Gp = function (a, c) {
			var e = this.Ka;
			ja(e[a]) ? e[a] = ja(c) ? e[a] + c : e[a] + parseFloat(c) : w(e[a]) && (e[a] = w(c) ? e[a] + c : e[a] + c.toString())
		}, r.Pq = function (a, c) {
			var e = this.Ka;
			ja(e[a]) && (e[a] = ja(c) ? e[a] - c : e[a] - parseFloat(c))
		}, r.bf = function (a, c) {
			this.Ka[a] = c ? 1 : 0
		}, r.Rq = function (a) {
			this.Ka[a] = 1 - this.Ka[a]
		}, r.Tp = function () {
			this.b.se(this)
		}, r.um || (r.um = function (a) {
				var c,
				e;
				try {
					c = JSON.parse(a)
				} catch (d) {
					return
				}
				this.b.Xg(this, c, !0);
				this.Lc && this.Lc();
				if (this.M)
					for (a = 0, c = this.M.length; a < c; ++a)
						e =
							this.M[a], e.Lc && e.Lc()
			}), a.Sp = function (a) {
			var c = a.Me.j.length,
			e,
			d,
			g;
			e = 0;
			for (d = this.b.Ib.length; e < d; e++)
				g = this.b.Ib[e], a.Me.H ? 0 <= g.type.qa.indexOf(a.Me) && c++ : g.type === a.Me && c++;
			a.ea(c)
		}, a.qq = function (a) {
			a.ea(a.Me.ca().fc().length)
		}, a.Sq = function (a) {
			a.ea(this.uid)
		}, a.Wp = function (a) {
			a.ea(this.uf())
		}, a.Nh || (a.Nh = function (a) {
				a.Cb(JSON.stringify(this.b.Dj(this, !0)))
			}));
		e && (q.bq = ba("visible"), r.kd = function (a) {
			!a !== !this.visible && (this.visible = a, this.b.Z = !0)
		}, q.Op = function (a, c) {
			return Kb(Wa(100 * this.opacity),
				a, c)
		}, r.Gq = function (a) {
			a /= 100;
			0 > a ? a = 0 : 1 < a && (a = 1);
			a !== this.opacity && (this.opacity = a, this.b.Z = !0)
		}, a.Opacity = function (a) {
			a.F(Wa(100 * this.opacity))
		});
		s && (q.Zp = function (a) {
			return a ? this.n === a : !1
		}, q.pq = function (a) {
			var c = this.ca(),
			e = c.fc();
			if (!e.length)
				return !1;
			var d = e[0],
			g = d,
			h,
			r;
			h = 1;
			for (r = e.length; h < r; h++)
				if (d = e[h], 0 === a) {
					if (d.n.index > g.n.index || d.n.index === g.n.index && d.Xb() > g.Xb())
						g = d
				} else
					if (d.n.index < g.n.index || d.n.index === g.n.index && d.Xb() < g.Xb())
						g = d;
			c.Qe(g);
			return !0
		}, r.jq = function () {
			var a = this.Xb();
			a !== this.n.j.length - 1 && (ya(this.n.j, a), this.n.j.push(this), this.b.Z = !0, this.n.Sb = !0)
		}, r.hq = function () {
			var a = this.Xb();
			0 !== a && (ya(this.n.j, a), this.n.j.unshift(this), this.b.Z = !0, this.n.Sb = !0)
		}, r.iq = function (a) {
			a && a != this.n && (ya(this.n.j, this.Xb()), this.n.Sb = !0, this.n = a, this.qe = a.j.length, a.j.push(this), this.b.Z = !0)
		}, r.Uq = function (a, c) {
			var e = 0 === a;
			if (c) {
				var d = c.Uk(this);
				if (d && d.uid !== this.uid) {
					this.n.index !== d.n.index && (ya(this.n.j, this.Xb()), this.n.Sb = !0, this.n = d.n, this.qe = d.n.j.length, d.n.j.push(this));
					var g = this.Xb(),
					d = d.Xb();
					ya(this.n.j, g);
					g < d && d--;
					e && d++;
					d === this.n.j.length ? this.n.j.push(this) : this.n.j.splice(d, 0, this);
					this.n.Sb = !0;
					this.b.Z = !0
				}
			}
		}, a.dq = function (a) {
			a.ea(this.n.xl)
		}, a.cq = function (a) {
			a.Cb(this.n.name)
		}, a.Tq = function (a) {
			a.ea(this.Xb())
		});
		d && (r.Bq = function (a, c) {
			if (this.b.D) {
				var e = this.type.Ei(c);
				if (!(0 > e)) {
					var d = 1 === a;
					this.ld[e] !== d && (this.ld[e] = d, this.gd(), this.b.Z = !0)
				}
			}
		}, r.Cq = function (a, c, e) {
			if (this.b.D) {
				var d = this.type.Ei(a);
				0 > d || (a = this.type.J[d], d = this.ua[d], c = Math.floor(c), 0 >
					c || c >= d.length || (1 === this.b.D.fr(a.Za, c) && (e /= 100), d[c] !== e && (d[c] = e, a.xa && (this.b.Z = !0))))
			}
		})
	};
	qb = function () {
		this.ii = this.bi = !0;
		this.type.rk = !0;
		this.b.Z = !0;
		var d,
		a,
		c = this.ci;
		d = 0;
		for (a = c.length; d < a; ++d)
			c[d](this)
	};
	rb = function (d) {
		d && this.ci.push(d)
	};
	tb = function () {
		if (this.bi) {
			var d = this.lb,
			a = this.Nc;
			d.set(this.x, this.y, this.x + this.width, this.y + this.height);
			d.offset(-this.nb * this.width, -this.ob * this.height);
			this.k ? (d.offset(-this.x, -this.y), a.Sl(d, this.k), a.offset(this.x, this.y), a.zk(d)) : a.wh(d);
			d.normalize();
			this.bi = !1
		}
	};
	var l = new ua(0, 0, 0, 0);
	ub = function () {
		if (this.ii && this.hf) {
			this.$a();
			var d = this.type.Ck,
			a = this.ug,
			c = this.lb;
			l.set(d.ik(c.left), d.jk(c.top), d.ik(c.right), d.jk(c.bottom));
			a.un(l) || (a.right < a.left ? d.update(this, null, l) : d.update(this, a, l), a.copy(l), this.ii = !1)
		}
	};
	sb = function (d, a) {
		return this.lb.oc(d, a) && this.Nc.oc(d, a) ? this.wc && !this.wc.Ho() ? (this.wc.gn(this.width, this.height, this.k), this.wc.oc(d - this.x, a - this.y)) : !0 : !1
	};
	mb = function () {
		this.type.Lh();
		return this.Wd
	};
	vb = function () {
		this.n.Bp();
		return this.qe
	};
	wb = function () {
		this.V.length = 0;
		var d,
		a;
		d = 0;
		for (a = this.ld.length; d < a; d++)
			this.ld[d] && this.V.push(this.type.J[d]);
		this.gm = !!this.V.length
	};
	nb = function () {
		return "Inst" + this.Ll
	};
	ab = function (d) {
		if (d && d.rc && d.type != this) {
			var a,
			c,
			g;
			a = 0;
			for (c = d.siblings.length; a < c; a++)
				if (g = d.siblings[a], g.type == this)
					return g
		}
		d = this.ca().fc();
		return d.length ? d[0] : null
	};
	bb = function (d) {
		var a = this.ca().fc();
		return a.length ? a[d.uf() % a.length] : null
	};
	$a = function () {
		if (this.Ue && !this.H) {
			var d,
			a;
			d = 0;
			for (a = this.j.length; d <
				a; d++)
				this.j[d].Wd = d;
			var c = d,
			g = this.b.Ib;
			d = 0;
			for (a = g.length; d < a; ++d)
				g[d].type === this && (g[d].Wd = c++);
			this.Ue = !1
		}
	};
	kb = function (d) {
		if (d < this.j.length)
			return this.j[d];
		d -= this.j.length;
		var a = this.b.Ib,
		c,
		g;
		c = 0;
		for (g = a.length; c < g; ++c)
			if (a[c].type === this) {
				if (0 === d)
					return a[c];
				--d
			}
		return null
	};
	cb = function () {
		return this.Fd[this.Oc]
	};
	db = function () {
		this.Oc++;
		this.Oc === this.Fd.length ? this.Fd.push(new Za(this)) : this.Fd[this.Oc].ka = !0
	};
	eb = function () {
		this.Oc++;
		this.Oc === this.Fd.length && this.Fd.push(new Za(this));
		var d = this.Fd[this.Oc],
		a = this.Fd[this.Oc - 1];
		a.ka ? d.ka = !0 : (d.ka = !1, za(d.j, a.j), za(d.W, a.W))
	};
	fb = function () {
		this.Oc--
	};
	gb = function (d) {
		var a,
		c,
		g,
		h,
		l,
		e = 0;
		if (!this.H)
			for (a = 0, c = this.qa.length; a < c; a++)
				for (l = this.qa[a], g = 0, h = l.Ba.length; g < h; g++) {
					if (d === l.Ba[g].name)
						return this.wa.ll = e, l.Ba[g];
					e++
				}
		a = 0;
		for (c = this.Ba.length; a < c; a++) {
			if (d === this.Ba[a].name)
				return this.wa.ll = e, this.Ba[a];
			e++
		}
		return null
	};
	hb = function (d) {
		return this.Gg(d) ? this.wa.ll : -1
	};
	ib = function (d) {
		var a,
		c;
		a = 0;
		for (c = this.J.length; a < c; a++)
			if (this.J[a].name ===
				d)
				return a;
		return -1
	};
	jb = function () {
		if (this.rc && !this.H) {
			var d,
			a,
			c,
			g,
			h,
			l,
			e;
			this.Lh();
			l = this.ca();
			var s = l.ka,
			q = (d = this.b.ib()) && d.fb && d.fb.tc;
			d = 0;
			for (a = this.Hb.length; d < a; d++)
				if (h = this.Hb[d], h !== this && (h.Lh(), e = h.ca(), e.ka = s, !s)) {
					e.j.length = l.j.length;
					c = 0;
					for (g = l.j.length; c < g; c++)
						e.j[c] = h.Vk(l.j[c].Wd);
					if (q)
						for (e.W.length = l.W.length, c = 0, g = l.W.length; c < g; c++)
							e.W[c] = h.Vk(l.W[c].Wd)
				}
		}
	};
	lb = function () {
		return "Type" + this.R
	};
	Kb = function (d, a, c) {
		if ("undefined" === typeof d || "undefined" === typeof c)
			return !1;
		switch (a) {
		case 0:
			return d ===
			c;
		case 1:
			return d !== c;
		case 2:
			return d < c;
		case 3:
			return d <= c;
		case 4:
			return d > c;
		case 5:
			return d >= c;
		default:
			return !1
		}
	}
})();

function O(l) {
	this.b = l
}
(function () {
	function l() {
		return e.length ? e.pop() : []
	}
	
	function d(a) {
		var c,
		g;
		c = 0;
		for (g = a.length; c < g; c++)
			Array.isArray(a[c]) && d(a[c]);
		a.length = 0;
		e.push(a)
	}
	
	function a() {}
	
	function c() {}
	
	function g() {}
	var h = O.prototype;
	h.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	h.oa.prototype.N = t();
	h.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	var p = h.fa.prototype,
	e = [];
	Array.isArray || (Array.isArray = function (a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	});
	p.N = function () {
		this.gb = this.u[0];
		this.zb = this.u[1];
		this.Jb = this.u[2];
		this.Bb || (this.$b = l());
		var a = this.$b;
		a.length = this.gb;
		var c,
		e,
		b;
		for (c = 0; c < this.gb; c++)
			for (a[c] || (a[c] = l()), a[c].length = this.zb, e = 0; e < this.zb; e++)
				for (a[c][e] || (a[c][e] = l()), a[c][e].length = this.Jb, b = 0; b < this.Jb; b++)
					a[c][e][b] = 0
	};
	p.yd = function () {
		var a;
		for (a = 0; a < this.gb; a++)
			d(this.$b[a]);
		this.$b.length = 0
	};
	p.ai = function (a, c, e) {
		a = Math.floor(a);
		c = Math.floor(c);
		e = Math.floor(e);
		return isNaN(a) || 0 > a || a > this.gb - 1 || isNaN(c) || 0 > c || c > this.zb - 1 || isNaN(e) || 0 > e || e > this.Jb - 1 ? 0 : this.$b[a][c][e]
	};
	p.set = function (a, c,
		e, b) {
		a = Math.floor(a);
		c = Math.floor(c);
		e = Math.floor(e);
		isNaN(a) || 0 > a || a > this.gb - 1 || isNaN(c) || 0 > c || c > this.zb - 1 || isNaN(e) || 0 > e || e > this.Jb - 1 || (this.$b[a][c][e] = b)
	};
	p.Vn = function () {
		return JSON.stringify({
			c2array : !0,
			size : [this.gb, this.zb, this.Jb],
			data : this.$b
		})
	};
	p.tb = function () {
		return {
			size : [this.gb, this.zb, this.Jb],
			data : this.$b
		}
	};
	p.Nb = function (a) {
		var c = a.size;
		this.gb = c[0];
		this.zb = c[1];
		this.Jb = c[2];
		this.$b = a.data
	};
	p.ke = function (a, c, e) {
		0 > a && (a = 0);
		0 > c && (c = 0);
		0 > e && (e = 0);
		if (this.gb !== a || this.zb !== c || this.Jb !==
			e) {
			this.gb = a;
			this.zb = c;
			this.Jb = e;
			var b,
			f,
			d = this.$b;
			d.length = a;
			for (a = 0; a < this.gb; a++)
				for (ia(d[a]) && (d[a] = l()), d[a].length = c, b = 0; b < this.zb; b++)
					for (ia(d[a][b]) && (d[a][b] = l()), d[a][b].length = e, f = 0; f < this.Jb; f++)
						ia(d[a][b][f]) && (d[a][b][f] = 0)
		}
	};
	a.prototype.Id = function (a, c, e) {
		return Kb(this.ai(a, 0, 0), c, e)
	};
	p.Xq = function (a) {
		this.b.Vf(a.aa);
		a.zj();
		this.b.Ad(a.aa)
	};
	a.prototype.om = function (a) {
		var c,
		e,
		b;
		for (c = 0; c < this.gb; c++)
			for (e = 0; e < this.zb; e++)
				for (b = 0; b < this.Jb; b++)
					if (this.$b[c][e][b] === a)
						return !0;
		return !1
	};
	h.d = new a;
	c.prototype.mm = function () {
		var a,
		c,
		e;
		for (a = 0; a < this.gb; a++)
			for (c = 0; c < this.zb; c++)
				for (e = 0; e < this.Jb; e++)
					this.$b[a][c][e] = 0
	};
	c.prototype.ng = function (a, c, e) {
		this.ke(a, c, e)
	};
	c.prototype.fk = function (a, c) {
		this.set(a, 0, 0, c)
	};
	c.prototype.Nm = function (a) {
		var c = 0,
		e = 0,
		b = this.$b;
		if (0 !== this.gb && 0 !== this.zb && 0 !== this.Jb)
			switch (a) {
			case 0:
				b.reverse();
				break;
			case 1:
				for (; c < this.gb; c++)
					b[c].reverse();
				break;
			case 2:
				for (; c < this.gb; c++)
					for (e = 0; e < this.zb; e++)
						b[c][e].reverse();
				this.Jb--
			}
	};
	h.e = new c;
	g.prototype.re =
	function (a, c, e, b) {
		a.Hj(this.ai(c, e || 0, b || 0))
	};
	g.prototype.gk = function (a) {
		a.ea(this.gb)
	};
	g.prototype.qm = function (a) {
		a.ea(this.zb)
	};
	g.prototype.Nh = function (a) {
		a.Cb(this.Vn())
	};
	h.L = new g
})();

function Nb(l) {
	this.b = l
}
(function () {
	function l() {}
	var d = Nb.prototype;
	d.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	d.oa.prototype.N = t();
	d.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	d.fa.prototype.N = function () {
		var a = this;
		window.addEventListener("resize", function () {
			a.b.trigger(Nb.prototype.d.Im, a)
		});
		"undefined" !== typeof navigator.onLine && (window.addEventListener("online", function () {
				a.b.trigger(Nb.prototype.d.Em, a)
			}), window.addEventListener("offline", function () {
				a.b.trigger(Nb.prototype.d.Dm, a)
			}));
		"undefined" !== typeof window.applicationCache &&
		(window.applicationCache.addEventListener("updateready", function () {
				a.b.ee = 1;
				a.b.trigger(Nb.prototype.d.dk, a)
			}), window.applicationCache.addEventListener("progress", function (c) {
				a.b.ee = c.loaded / c.total;
				
			}));
		this.b.Ac || (document.addEventListener("appMobi.device.update.available", function () {
				a.b.trigger(Nb.prototype.d.dk, a)
			}), document.addEventListener("backbutton", function () {
				a.b.trigger(Nb.prototype.d.Oh, a)
			}), document.addEventListener("menubutton", function () {
				a.b.trigger(Nb.prototype.d.Zj, a)
			}), document.addEventListener("searchbutton",
				function () {
				a.b.trigger(Nb.prototype.d.Lm, a)
			}), document.addEventListener("tizenhwkey", function (c) {
				var d;
				switch (c.keyName) {
				case "back":
					d = a.b.trigger(Nb.prototype.d.Oh, a);
					!d && window.tizen && window.tizen.application.getCurrentApplication().exit();
					break;
				case "menu":
					(d = a.b.trigger(Nb.prototype.d.Zj, a)) || c.preventDefault()
				}
			}));
		this.b.Xi && (WinJS.Application.onbackclick = function () {
			return !!a.b.trigger(Nb.prototype.d.Oh, a)
		});
		this.b.Ym(function (c) {
			c ? a.b.trigger(Nb.prototype.d.Fm, a) : a.b.trigger(Nb.prototype.d.Gm,
				a)
		})
	};
	l.prototype.Em = v(!0);
	l.prototype.Dm = v(!0);
	l.prototype.dk = v(!0);
	l.prototype.Gm = v(!0);
	l.prototype.Fm = v(!0);
	l.prototype.Im = v(!0);
	l.prototype.Oh = v(!0);
	l.prototype.Zj = v(!0);
	l.prototype.Lm = v(!0);
	d.d = new l;
	d.e = new(t());
	d.L = new(t())
})();

function L(l) {
	this.b = l
}
(function () {
	function l() {
		this.name = "";
		this.yj = 0;
		this.qj = []
	}
	
	function d() {
		e++;
		e === p.length && p.push(new l);
		return p[e]
	}
	
	function a() {}
	
	function c() {}
	
	function g() {}
	var h = L.prototype;
	h.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	h.oa.prototype.N = t();
	h.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	var p = [],
	e = -1;
	h.fa.prototype.N = t();
	a.prototype.uc = function (a) {
		var c = 0 > e ? null : p[e];
		return c ? Xa(a, c.name) : !1
	};
	h.d = new a;
	c.prototype.CallFunction = function (a, c) {
		var g = d();
		g.name = a.toLowerCase();
		g.yj = 0;
		za(g.qj, c);
		this.b.trigger(L.prototype.d.uc,
			this, g.name);
		e--
	};
	h.e = new c;
	g.prototype.lm = function (a, c) {
		var g = d();
		g.name = c.toLowerCase();
		g.yj = 0;
		g.qj.length = 0;
		var b,
		f;
		b = 2;
		for (f = arguments.length; b < f; b++)
			g.qj.push(arguments[b]);
		this.b.trigger(L.prototype.d.uc, this, g.name);
		e--;
		a.Hj(g.yj)
	};
	h.L = new g
})();

function I(l) {
	this.b = l
}
(function () {
	function l() {
		if (0 === this.pi.length) {
			var a = document.createElement("canvas");
			a.width = this.width;
			a.height = this.height;
			var b = a.getContext("2d");
			this.Te ? b.drawImage(this.B, this.Ne, this.Oe, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.B, 0, 0, this.width, this.height);
			this.pi = a.toDataURL("image/png")
		}
		return this.pi
	}
	
	function d() {}
	
	function a() {}
	
	function c() {}
	var g = I.prototype;
	g.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	var h = g.oa.prototype;
	h.N = function () {
		if (!this.H) {
			var a,
			b,
			c,
			e,
			d,
			g,
			h,
			m,
			p;
			this.lc = [];
			this.Kg = !1;
			a = 0;
			for (b = this.Gb.length; a < b; a++) {
				d = this.Gb[a];
				h = {};
				h.name = d[0];
				h.speed = d[1];
				h.loop = d[2];
				h.xj = d[3];
				h.qh = d[4];
				h.ie = d[5];
				h.R = d[6];
				h.frames = [];
				c = 0;
				for (e = d[7].length; c < e; c++)
					g = d[7][c], m = {},
				m.Ch = g[0],
				m.Mj = g[1],
				m.Ne = g[2],
				m.Oe = g[3],
				m.width = g[4],
				m.height = g[5],
				m.duration = g[6],
				m.nb = g[7],
				m.ob = g[8],
				m.Li = g[9],
				m.ih = g[10],
				m.Hl = g[11],
				m.Te = 0 !== m.width,
				m.pi = "",
				m.$q = l,
				p = {
					left : 0,
					top : 0,
					right : 1,
					bottom : 1
				},
				m.Ij = p,
				m.K = null,
				(p = this.b.Sn(g[0])) ? m.B = p : (m.B = new Image, m.B.idtkLoadDisposed = !0, m.B.src =
							g[0], m.B.ln = g[0], m.B.Fk = g[1], m.B.en = null, this.b.im(m.B)),
				h.frames.push(m),
				this.lc.push(m);
				this.Gb[a] = h
			}
		}
	};
	h.Ap = function () {
		var a,
		b,
		c;
		a = 0;
		for (b = this.j.length; a < b; a++)
			c = this.j[a], c.xg = c.cc.K
	};
	h.Of = function () {
		if (!this.H) {
			var a,
			b,
			c;
			a = 0;
			for (b = this.lc.length; a < b; ++a)
				c = this.lc[a], c.B.en = null, c.K = null
		}
	};
	h.eh = function () {
		if (!this.H && this.j.length) {
			var a,
			b,
			c;
			a = 0;
			for (b = this.lc.length; a < b; ++a)
				c = this.lc[a], c.K = this.b.D.If(c.B, !1, this.b.U, c.Hl);
			this.Ap()
		}
	};
	h.ej = function () {
		if (!this.H && !this.Kg && this.b.D) {
			var a,
			b,
			c;
			a = 0;
			for (b = this.lc.length; a < b; ++a)
				c = this.lc[a], c.K = this.b.D.If(c.B, !1, this.b.U, c.Hl);
			this.Kg = !0
		}
	};
	h.Kh = function () {
		if (!this.H && !this.j.length && this.Kg) {
			var a,
			b,
			c;
			a = 0;
			for (b = this.lc.length; a < b; ++a)
				c = this.lc[a], this.b.D.deleteTexture(c.K), c.K = null;
			this.Kg = !1
		}
	};
	var p = [];
	h.kh = function (a) {
		var b,
		c,
		e;
		b = p.length = 0;
		for (c = this.lc.length; b < c; ++b)
			e = this.lc[b].B, -1 === p.indexOf(e) && (a.drawImage(e, 0, 0), p.push(e))
	};
	g.fa = function (a) {
		this.type = a;
		this.b = a.b;
		a = this.type.Gb[0].frames[0].ih;
		this.Bb ? this.wc.Zf(a) : this.wc =
			new Sa(a)
	};
	var e = g.fa.prototype;
	e.N = function () {
		this.visible = 0 === this.u[0];
		this.Mi = this.Vi = !1;
		this.hf = 0 !== this.u[3];
		1 === this.type.Gb.length && 1 === this.type.Gb[0].frames.length || 0 === this.type.Gb[0].speed || (this.b.Nj(this), this.Vi = !0);
		this.ta = this.Pk(this.u[1]) || this.type.Gb[0];
		this.A = this.u[2];
		0 > this.A && (this.A = 0);
		this.A >= this.ta.frames.length && (this.A = this.ta.frames.length - 1);
		var a = this.ta.frames[this.A];
		this.wc.Zf(a.ih);
		this.nb = a.nb;
		this.ob = a.ob;
		this.kf = this.ta.speed;
		this.Bb ? this.vc.reset() : this.vc =
			new Qa;
		this.Rc = this.vc.wb;
		this.Od = !0;
		this.Mc = 0;
		this.Nd = !0;
		this.ji = this.qk = "";
		this.kn = 0;
		this.qg = -1;
		this.type.ej();
		var b,
		c,
		e,
		d,
		g,
		h,
		m,
		a = 0;
		for (b = this.type.Gb.length; a < b; a++)
			for (d = this.type.Gb[a], c = 0, e = d.frames.length; c < e; c++)
				g = d.frames[c], 0 === g.width && (g.width = g.B.width, g.height = g.B.height), g.Te && (m = g.B, h = g.Ij, h.left = g.Ne / m.width, h.top = g.Oe / m.height, h.right = (g.Ne + g.width) / m.width, h.bottom = (g.Oe + g.height) / m.height, 0 === g.Ne && 0 === g.Oe && g.width === m.width && g.height === m.height && (g.Te = !1));
		this.cc = this.ta.frames[this.A];
		this.xg = this.cc.K
	};
	e.tb = function () {
		var a = {
			a : this.ta.R,
			f : this.A,
			cas : this.kf,
			fs : this.Rc,
			ar : this.Mc,
			at : this.vc.wb
		};
		this.Od || (a.ap = this.Od);
		this.Nd || (a.af = this.Nd);
		return a
	};
	e.Nb = function (a) {
		var b = this.Un(a.a);
		b && (this.ta = b);
		this.A = a.f;
		0 > this.A && (this.A = 0);
		this.A >= this.ta.frames.length && (this.A = this.ta.frames.length - 1);
		this.kf = a.cas;
		this.Rc = a.fs;
		this.Mc = a.ar;
		this.vc.reset();
		this.vc.wb = a.at;
		this.Od = a.hasOwnProperty("ap") ? a.ap : !0;
		this.Nd = a.hasOwnProperty("af") ? a.af : !0;
		this.cc = this.ta.frames[this.A];
		this.xg =
			this.cc.K;
		this.wc.Zf(this.cc.ih);
		this.nb = this.cc.nb;
		this.ob = this.cc.ob
	};
	e.$h = function (a) {
		this.A = a ? 0 : this.ta.frames.length - 1;
		this.Od = !1;
		this.qk = this.ta.name;
		this.Mi = !0;
		this.b.trigger(I.prototype.d.wm, this);
		this.b.trigger(I.prototype.d.vm, this);
		this.Mi = !1;
		this.Mc = 0
	};
	e.cr = function () {
		return this.vc.wb
	};
	e.Hc = function () {
		this.vc.add(this.b.Hg(this));
		this.ji.length && this.pn();
		0 <= this.qg && this.Gk();
		var a = this.vc.wb,
		b = this.ta,
		c = b.frames[this.A],
		e = c.duration / this.kf;
		this.Od && a >= this.Rc + e && (this.Nd ? this.A++ :
			this.A--, this.Rc += e, this.A >= b.frames.length && (b.ie ? (this.Nd = !1, this.A = b.frames.length - 2) : b.loop ? this.A = b.qh : (this.Mc++, this.Mc >= b.xj ? this.$h(!1) : this.A = b.qh)), 0 > this.A && (b.ie ? (this.A = 1, this.Nd = !0, b.loop || (this.Mc++, this.Mc >= b.xj && this.$h(!0))) : b.loop ? this.A = b.qh : (this.Mc++, this.Mc >= b.xj ? this.$h(!0) : this.A = b.qh)), 0 > this.A ? this.A = 0 : this.A >= b.frames.length && (this.A = b.frames.length - 1), a > this.Rc + b.frames[this.A].duration / this.kf && (this.Rc = a), a = b.frames[this.A], this.we(c, a), this.b.Z = !0)
	};
	e.Pk = function (a) {
		var b,
		c,
		e;
		b = 0;
		for (c = this.type.Gb.length; b < c; b++)
			if (e = this.type.Gb[b], Xa(e.name, a))
				return e;
		return null
	};
	e.Un = function (a) {
		var b,
		c,
		e;
		b = 0;
		for (c = this.type.Gb.length; b < c; b++)
			if (e = this.type.Gb[b], e.R === a)
				return e;
		return null
	};
	e.pn = function () {
		var a = this.ta.frames[this.A],
		b = this.Pk(this.ji);
		this.ji = "";
		!b || Xa(b.name, this.ta.name) && this.Od || (this.ta = b, this.kf = b.speed, 0 > this.A && (this.A = 0), this.A >= this.ta.frames.length && (this.A = this.ta.frames.length - 1), 1 === this.kn && (this.A = 0), this.Od = !0, this.Rc = this.vc.wb, this.Nd = !0, this.we(a, this.ta.frames[this.A]), this.b.Z = !0)
	};
	e.Gk = function () {
		var a = this.ta.frames[this.A],
		b = this.A;
		this.A = ra(this.qg);
		0 > this.A && (this.A = 0);
		this.A >= this.ta.frames.length && (this.A = this.ta.frames.length - 1);
		b !== this.A && (this.we(a, this.ta.frames[this.A]), this.Rc = this.vc.wb, this.b.Z = !0);
		this.qg = -1
	};
	e.we = function (a, b) {
		var c = a.width,
		e = a.height,
		d = b.width,
		g = b.height;
		c != d && (this.width *= d / c);
		e != g && (this.height *= g / e);
		this.nb = b.nb;
		this.ob = b.ob;
		this.wc.Zf(b.ih);
		this.Aa();
		this.cc = b;
		this.xg = b.K;
		c = 0;
		for (e = this.M.length; c <
			e; c++)
			d = this.M[c], d.Cl && d.Cl(a, b);
		this.b.trigger(I.prototype.d.we, this)
	};
	e.pc = function (a) {
		a.globalAlpha = this.opacity;
		var b = this.cc,
		c = b.Te,
		e = b.B,
		d = this.x,
		g = this.y,
		h = this.width,
		m = this.height;
		if (0 === this.k && 0 <= h && 0 <= m)
			d -= this.nb * h, g -= this.ob * m, this.b.hc && (d = d + 0.5 | 0, g = g + 0.5 | 0), c ? a.drawImage(e, b.Ne, b.Oe, b.width, b.height, d, g, h, m) : a.drawImage(e, d, g, h, m);
		else {
			this.b.hc && (d = d + 0.5 | 0, g = g + 0.5 | 0);
			a.save();
			var l = 0 < h ? 1 : -1,
			p = 0 < m ? 1 : -1;
			a.translate(d, g);
			1 === l && 1 === p || a.scale(l, p);
			a.rotate(this.k * l * p);
			d = 0 - this.nb * la(h);
			g = 0 - this.ob * la(m);
			c ? a.drawImage(e, b.Ne, b.Oe, b.width, b.height, d, g, la(h), la(m)) : a.drawImage(e, d, g, la(h), la(m));
			a.restore()
		}
	};
	e.Ub = function (a) {
		a.Pb(this.xg);
		a.je(this.opacity);
		var b = this.cc,
		c = this.Nc;
		if (this.b.hc) {
			var e = (this.x + 0.5 | 0) - this.x,
			d = (this.y + 0.5 | 0) - this.y;
			b.Te ? a.Dc(c.la + e, c.ma + d, c.Pa + e, c.Qa + d, c.Ha + e, c.Ia + d, c.Fa + e, c.Ga + d, b.Ij) : a.tj(c.la + e, c.ma + d, c.Pa + e, c.Qa + d, c.Ha + e, c.Ia + d, c.Fa + e, c.Ga + d)
		} else
			b.Te ? a.Dc(c.la, c.ma, c.Pa, c.Qa, c.Ha, c.Ia, c.Fa, c.Ga, b.Ij) : a.tj(c.la, c.ma, c.Pa, c.Qa, c.Ha, c.Ia, c.Fa, c.Ga)
	};
	e.Zn = function (a) {
		var b = this.cc,
		c,
		e;
		c = 0;
		for (e = b.Li.length; c < e; c++)
			if (Xa(a, b.Li[c][0]))
				return c;
		return -1
	};
	e.Fi = function (a, b) {
		var c = this.cc,
		e = c.Li,
		d;
		d = w(a) ? this.Zn(a) : a - 1;
		d = ra(d);
		if (0 > d || d >= e.length)
			return b ? this.x : this.y;
		var g = (e[d][1] - c.nb) * this.width,
		e = e[d][2],
		e = (e - c.ob) * this.height,
		c = Math.cos(this.k);
		d = Math.sin(this.k);
		var h = g * c - e * d,
		e = e * c + g * d,
		g = h + this.x,
		e = e + this.y;
		return b ? g : e
	};
	var s = new ga,
	q = !1;
	h.finish = function (a) {
		if (q) {
			if (a) {
				var b = this.b.ib().fb.tc;
				a = null.ca();
				var c = s.eg(),
				e,
				d;
				if (a.ka) {
					a.ka = !1;
					a.j.length = c.length;
					e = 0;
					for (d = c.length; e < d; e++)
						a.j[e] = c[e];
					if (b)
						for (e = a.W.length = 0, d = null.j.length; e < d; e++)
							c = null.j[e], s.contains(c) || a.W.push(c)
				} else if (b)
					for (b = a.j.length, a.j.length = b + c.length, e = 0, d = c.length; e < d; e++)
						a.j[b + e] = c[e], Aa(a.W, c[e]);
				else
					za(a.j, c);
				null.mc()
			}
			s.clear();
			q = !1
		}
	};
	d.prototype.nm = function (a, b) {
		return Kb(this.A, a, b)
	};
	d.prototype.vm = function (a) {
		return Xa(this.qk, a)
	};
	d.prototype.wm = v(!0);
	d.prototype.we = v(!0);
	g.d = new d;
	a.prototype.Jd = function (a) {
		this.qg = a;
		this.Vi || (this.b.Nj(this),
			this.Vi = !0);
		this.Mi || this.Gk()
	};
	g.e = new a;
	c.prototype.km = function (a) {
		a.ea(this.A)
	};
	g.L = new c
})();

function Q(l) {
	this.b = l
}
(function () {
	function l(a, c, e) {
		if (e) {
			var d;
			e = 0;
			for (d = c.length; e < d; e++)
				a.length < h && a.push(c[e]);
			c.length = 0
		} else
			for (d in c)
				Object.prototype.hasOwnProperty.call(c, d) && (a.length < h && a.push(c[d]), delete c[d])
	}
	
	function d(a, c, e) {
		var d = a.qb;
		e = e.replace(/\s\s*$/, "");
		c >= d.length && d.push(p.length ? p.pop() : {});
		c = d[c];
		c.text = e;
		c.width = a.hj(e);
		a.ed = ma(a.ed, c.width)
	}
	
	function a() {}
	var c = Q.prototype;
	c.N = t();
	c.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	var g = c.oa.prototype;
	g.N = function () {
		this.H || (this.B = new Image, this.B.idtkLoadDisposed = !0, this.B.src = this.Ch, this.b.pe.push(this.B), this.K = null)
	};
	g.Of = function () {
		this.H || (this.K = null)
	};
	g.eh = function () {
		if (!this.H && this.j.length) {
			this.K || (this.K = this.b.D.If(this.B, !1, this.b.U, this.cg));
			var a,
			c;
			a = 0;
			for (c = this.j.length; a < c; a++)
				this.j[a].K = this.K
		}
	};
	g.Kh = function () {
		this.H || this.j.length || !this.K || (this.b.D.deleteTexture(this.K), this.K = null)
	};
	g.kh = function (a) {
		a.drawImage(this.B, 0, 0)
	};
	c.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	g = c.fa.prototype;
	g.yd = function () {
		l(p, this.qb, !0);
		l(e, this.sg, !1);
		l(s, this.tg, !1);
		Oa(this.nc)
	};
	g.N = function () {
		this.B = this.type.B;
		this.rg = this.u[0];
		this.od = this.u[1];
		this.characterSet = this.u[2];
		this.text = this.u[3];
		this.qd = this.u[4];
		this.visible = 0 === this.u[5];
		this.Vd = this.u[6] / 2;
		this.oe = this.u[7] / 2;
		this.hg = 0 === this.u[9];
		this.ze = this.u[10];
		this.lineHeight = this.u[11];
		this.Gc = this.ed = 0;
		this.gf = this.u[12];
		this.Vl = this.u[13];
		
		this.Bb ? (this.qb.length = 0, Oa(this.sg), Oa(this.tg), Oa(this.nc)) : (this.qb = [], this.sg = {}, this.tg = {}, this.nc = {});
		try {
			if (this.gf)
				if (-1 !==
					this.gf.indexOf('""c2array""'))
					for (var a = jQuery.parseJSON(this.gf.replace(/""/g, '"')), c = a.size[1], e = 0; e < c; e++)
						for (var d = a.data[1][e][0], g = a.data[0][e][0], h = 0; h < d.length; h++)
							this.nc[d.charAt(h)] = g;
				else
					for (a = jQuery.parseJSON(this.gf), c = a.length, e = 0; e < c; e++)
						for (d = a[e][1], g = a[e][0], h = 0; h < d.length; h++)
							this.nc[d.charAt(h)] = g;
			 - 1 !== this.Vl && (this.nc[" "] = this.Vl)
		} catch (m) {
			window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + m)
		}
		this.Zb = !0;
		this.de = this.width;
		this.b.D && (this.type.K ||
			(this.type.K = this.b.D.If(this.type.B, !1, this.b.U, this.type.cg)), this.K = this.type.K);
		this.Pm()
	};
	g.tb = function () {
		var a = {
			t : this.text,
			csc : this.qd,
			csp : this.ze,
			lh : this.lineHeight,
			tw : this.ed,
			th : this.Gc,
			lrt : this.be,
			cw : {}
		},
		c;
		for (c in this.nc)
			a.cw[c] = this.nc[c];
		return a
	};
	g.Nb = function (a) {
		this.text = a.t;
		this.qd = a.csc;
		this.ze = a.csp;
		this.lineHeight = a.lh;
		this.ed = a.tw;
		this.Gc = a.th;
		this.be = a.lrt;
		for (var c in a.cw)
			this.nc[c] = a.cw[c];
		this.Zb = !0;
		this.de = this.width
	};
	var h = 1E3,
	p = [],
	e = [],
	s = [];
	g.Pm = function () {
		for (var a =
				this.B, c = a.width, d = a.height, a = this.rg, g = this.od, h = a / c, l = g / d, m = this.characterSet, c = Math.floor(c / a), d = Math.floor(d / g), p = 0; p < m.length && !(p >= c * d); p++) {
			var q = p % c,
			r = Math.floor(p / c),
			B = m.charAt(p);
			if (this.b.D) {
				var y = this.tg,
				M = q * h,
				R = r * l,
				q = (q + 1) * h,
				r = (r + 1) * l;
				void 0 === y[B] && (y[B] = s.length ? s.pop() : new ua);
				y[B].left = M;
				y[B].top = R;
				y[B].right = q;
				y[B].bottom = r
			} else
				y = this.sg, q *= a, r *= g, M = a, R = g, void 0 === y[B] && (y[B] = e.length ? e.pop() : {}), y[B].x = q, y[B].y = r, y[B].hm = M, y[B].Zk = R
		}
	};
	var q = [];
	c.Uh = function (a) {
		q.length = 0;
		for (var c =
				"", e, d = 0; d < a.length; )
			if (e = a.charAt(d), "\n" === e)
				c.length && (q.push(c), c = ""), q.push("\n"), ++d;
			else
				if (" " === e || "\t" === e || "-" === e) {
					do
						c += a.charAt(d), d++;
					while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
					q.push(c);
					c = ""
				} else
					d < a.length && (c += e, d++);
		c.length && q.push(c)
	};
	c.Wh = function (a) {
		var c = a.text,
		e = a.qb;
		if (c && c.length) {
			var d = a.width;
			if (2 >= d)
				l(p, e, !0);
			else {
				var g = a.qd,
				h = a.ze;
				if (c.length * (a.rg * g + h) - h <= d && -1 === c.indexOf("\n") && (h = a.hj(c), h <= d)) {
					l(p, e, !0);
					e.push(p.length ? p.pop() : {});
					e[0].text = c;
					e[0].width =
						h;
					a.ed = h;
					a.Gc = a.od * g + a.lineHeight;
					return
				}
				this.Xh(a);
				a.Gc = e.length * (a.od * g + a.lineHeight)
			}
		} else
			l(p, e, !0)
	};
	c.Xh = function (a) {
		var c = a.hg,
		e = a.text,
		g = a.qb,
		l = a.width;
		c && (this.Uh(e), e = q);
		var n = "",
		m,
		s,
		r,
		N = 0,
		B = !1;
		for (r = 0; r < e.length; r++)
			"\n" === e[r] ? (!0 === B ? B = !1 : (d(a, N, n), N++), n = "") : (B = !1, m = n, n += e[r], s = a.hj(n.replace(/\s\s*$/, "")), s > l && ("" === m ? (d(a, N, n), n = "", B = !0) : (d(a, N, m), n = e[r]), N++, c || " " !== n || (n = "")));
		n.replace(/\s\s*$/, "").length && (d(a, N, n), N++);
		for (r = N; r < g.length; r++)
			p.length < h && p.push(g[r]);
		g.length =
			N
	};
	g.hj = function (a) {
		for (var c = this.ze, e = a.length, d = 0, g = 0; g < e; g++)
			d += this.qf(a.charAt(g)) * this.qd + c;
		return d - (0 < d ? c : 0)
	};
	g.qf = function (a) {
		var c = this.nc;
		return void 0 !== c[a] ? c[a] : this.rg
	};
	g.Ml = function () {
		if (this.Zb || this.width !== this.de)
			this.Gc = this.ed = 0, this.type.na.Wh(this), this.Zb = !1, this.de = this.width
	};
	g.pc = function (a) {
		var c = this.B;
		if ("" !== this.text && null != c && (this.Ml(), !(this.height < this.od * this.qd + this.lineHeight))) {
			a.globalAlpha = this.opacity;
			var c = this.x,
			e = this.y;
			this.b.hc && (c = c + 0.5 | 0, e = e + 0.5 |
					0);
			a.save();
			a.translate(c, e);
			a.rotate(this.k);
			for (var c = this.Vd, e = this.qd, d = this.od * e, g = this.lineHeight, h = this.ze, m = this.qb, l, p =  - (this.nb * this.width), q =  - (this.ob * this.height), q = q + this.oe * ma(0, this.height - this.Gc), r = 0; r < m.length; r++) {
				var s = m[r].text;
				l = c * ma(0, this.width - m[r].width);
				l = p + l;
				for (var q = q + g, M = 0; M < s.length; M++) {
					var R = s.charAt(M),
					J = this.sg[R];
					if (l + this.qf(R) * e > this.width + 1E-5)
						break;
					void 0 !== J && a.drawImage(this.B, J.x, J.y, J.hm, J.Zk, Math.round(l), Math.round(q), J.hm * e, J.Zk * e);
					l += this.qf(R) * e + h
				}
				q +=
				d;
				if (q + d + g > this.height)
					break
			}
			a.restore()
		}
	};
	var r = new wa;
	g.Ub = function (a) {
		a.Pb(this.K);
		a.je(this.opacity);
		if ("" !== this.text && (this.Ml(), !(this.height < this.od * this.qd + this.lineHeight))) {
			this.$a();
			var c = this.Nc,
			e = 0,
			d = 0;
			this.b.hc && (e = (this.x + 0.5 | 0) - this.x, d = (this.y + 0.5 | 0) - this.y);
			var g = this.k,
			h = this.Vd,
			m = this.oe,
			l = this.qd,
			p = this.od * l,
			q = this.lineHeight,
			s = this.ze,
			y = this.qb,
			M = this.Gc,
			R,
			J;
			0 !== g && (R = Math.cos(g), J = Math.sin(g));
			for (var A, e = c.la + e, c = c.ma + d, m = m * ma(0, this.height - M), M = 0; M < y.length; M++) {
				d = y[M].text;
				A = h * ma(0, this.width - y[M].width);
				for (var m = m + q, E = 0; E < d.length; E++) {
					var aa = d.charAt(E),
					K = this.tg[aa];
					if (A + this.qf(aa) * l > this.width + 1E-5)
						break;
					if (void 0 !== K) {
						var C = this.rg * l,
						F = this.od * l;
						r.la = A;
						r.ma = m;
						r.Pa = A + C;
						r.Qa = m;
						r.Fa = A;
						r.Ga = m + F;
						r.Ha = A + C;
						r.Ia = m + F;
						if (0 !== g) {
							var C = r,
							F = R,
							P = J,
							z = void 0,
							z = C.la * F - C.ma * P;
							C.ma = C.ma * F + C.la * P;
							C.la = z;
							z = C.Pa * F - C.Qa * P;
							C.Qa = C.Qa * F + C.Pa * P;
							C.Pa = z;
							z = C.Fa * F - C.Ga * P;
							C.Ga = C.Ga * F + C.Fa * P;
							C.Fa = z;
							z = C.Ha * F - C.Ia * P;
							C.Ia = C.Ia * F + C.Ha * P;
							C.Ha = z
						}
						r.offset(e, c);
						a.Dc(r.la, r.ma, r.Pa, r.Qa, r.Ha, r.Ia, r.Fa,
							r.Ga, K)
					}
					A += this.qf(aa) * l + s
				}
				m += p;
				if (m + p + q > this.height)
					break
			}
		}
	};
	c.d = new(t());
	a.prototype.G = function (a) {
		ja(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
		a = a.toString();
		this.text !== a && (this.text = a, this.Zb = !0, this.b.Z = !0)
	};
	g.yq = function (a, c) {
		var e = parseInt(c, 10);
		this.nc[a] !== e && (this.nc[a] = e, this.Zb = !0, this.b.Z = !0)
	};
	c.e = new a;
	c.L = new(t())
})();

function Ob(l) {
	this.b = l
}
(function () {
	function l() {
		return p.length ? p.pop() : {}
	}
	
	function d(a) {
		var c,
		d;
		c = 0;
		for (d = a.length; c < d; c++)
			p.push(a[c]);
		a.length = 0
	}
	
	function a() {}
	var c = Ob.prototype;
	c.N = function () {
		c.e.Th = function (a) {
			this.width !== a && (this.width = a, this.Zb = !0, this.Aa())
		}
	};
	c.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	var g = c.oa.prototype;
	g.N = t();
	g.Of = function () {
		if (!this.H) {
			var a,
			c,
			d;
			a = 0;
			for (c = this.j.length; a < c; a++)
				d = this.j[a], d.Cc = null, d.ge = null, d.Ob = null
		}
	};
	c.fa = function (a) {
		this.type = a;
		this.b = a.b;
		this.Bb ? this.qb.length = 0 : this.qb =
			[];
		this.Zb = !0
	};
	g = c.fa.prototype;
	g.N = function () {
		this.text = this.u[0];
		this.visible = 0 === this.u[1];
		this.font = this.u[2];
		this.color = this.u[3];
		this.Vd = this.u[4];
		this.oe = this.u[5];
		this.hg = 0 === this.u[7];
		this.de = this.Tg = this.width;
		this.Rg = this.height;
		this.dj = this.u[8];
		this.Eg = this.Ce = "";
		this.Gc = this.ed = this.Tf = 0;
		this.Vo();
		this.Ob = this.ge = this.Cc = null;
		this.ul = !1;
		this.be = this.b.Ic;
		this.Bb ? this.Bd.set(0, 0, 1, 1) : this.Bd = new ua(0, 0, 1, 1);
		this.b.D && this.b.Nj(this)
	};
	g.Vo = function () {
		var a = this.font.split(" "),
		c;
		for (c =
				0; c < a.length; c++)
			if ("pt" === a[c].substr(a[c].length - 2, 2)) {
				this.Tf = parseInt(a[c].substr(0, a[c].length - 2));
				this.sj = Math.ceil(96 * (this.Tf / 72)) + 4;
				0 < c && (this.Eg = a[c - 1]);
				this.Ce = a[c + 1];
				for (c += 2; c < a.length; c++)
					this.Ce += " " + a[c];
				break
			}
	};
	g.tb = function () {
		return {
			t : this.text,
			f : this.font,
			c : this.color,
			ha : this.Vd,
			va : this.oe,
			wr : this.hg,
			lho : this.dj,
			fn : this.Ce,
			fs : this.Eg,
			ps : this.Tf,
			pxh : this.sj,
			tw : this.ed,
			th : this.Gc,
			lrt : this.be
		}
	};
	g.Nb = function (a) {
		this.text = a.t;
		this.font = a.f;
		this.color = a.c;
		this.Vd = a.ha;
		this.oe = a.va;
		this.hg =
			a.wr;
		this.dj = a.lho;
		this.Ce = a.fn;
		this.Eg = a.fs;
		this.Tf = a.ps;
		this.sj = a.pxh;
		this.ed = a.tw;
		this.Gc = a.th;
		this.be = a.lrt;
		this.Zb = !0;
		this.de = this.Tg = this.width;
		this.Rg = this.height
	};
	g.Hc = function () {
		if (this.b.D && this.Ob && 300 <= this.b.Ic - this.be) {
			var a = this.n;
			this.$a();
			var c = this.lb;
			if (c.right < a.ab || c.bottom < a.bb || c.left > a.Rb || c.top > a.Qb)
				this.b.D.deleteTexture(this.Ob), this.Cc = this.ge = this.Ob = null
		}
	};
	g.yd = function () {
		this.Cc = this.ge = null;
		this.b.D && this.Ob && this.b.D.deleteTexture(this.Ob);
		this.Ob = null
	};
	g.qr = function () {
		this.font =
			this.Eg + " " + this.Tf.toString() + "pt " + this.Ce;
		this.Zb = !0;
		this.b.Z = !0
	};
	g.pc = function (a, c) {
		a.font = this.font;
		a.textBaseline = "top";
		a.fillStyle = this.color;
		a.globalAlpha = c ? 1 : this.opacity;
		var d = 1;
		c && (d = this.n.Lb(), a.save(), a.scale(d, d));
		if (this.Zb || this.width !== this.de)
			this.type.na.Wh(this.text, this.qb, a, this.width, this.hg), this.Zb = !1, this.de = this.width;
		this.$a();
		var d = c ? 0 : this.Nc.la,
		g = c ? 0 : this.Nc.ma;
		this.b.hc && (d = d + 0.5 | 0, g = g + 0.5 | 0);
		0 === this.k || c || (a.save(), a.translate(d, g), a.rotate(this.k), g = d = 0);
		var b =
			g + this.height,
		f = this.sj,
		f = f + this.dj,
		k,
		h;
		1 === this.oe ? g += Math.max(this.height / 2 - this.qb.length * f / 2, 0) : 2 === this.oe && (g += Math.max(this.height - this.qb.length * f - 2, 0));
		for (h = 0; h < this.qb.length && !(k = d, 1 === this.Vd ? k = d + (this.width - this.qb[h].width) / 2 : 2 === this.Vd && (k = d + (this.width - this.qb[h].width)), a.fillText(this.qb[h].text, k, g), g += f, g >= b - f); h++);
		(0 !== this.k || c) && a.restore();
		this.be = this.b.Ic
	};
	g.Ub = function (a) {
		if (!(1 > this.width || 1 > this.height)) {
			var c = this.Zb || this.ul;
			this.ul = !1;
			var d = this.n.Lb(),
			g = this.n.Wb(),
			b = this.Bd,
			f = d * this.width,
			k = d * this.height,
			h = Math.ceil(f),
			l = Math.ceil(k),
			n = this.b.P / 2,
			m = this.b.O / 2;
			this.ge || (this.Cc = document.createElement("canvas"), this.Cc.width = h, this.Cc.height = l, this.Tg = h, this.Rg = l, c = !0, this.ge = this.Cc.getContext("2d"));
			if (h !== this.Tg || l !== this.Rg)
				this.Cc.width = h, this.Cc.height = l, this.Ob && (a.deleteTexture(this.Ob), this.Ob = null), c = !0;
			c && (this.ge.clearRect(0, 0, h, l), this.pc(this.ge, !0), this.Ob || (this.Ob = a.rd(h, l, this.b.U, this.b.Bc)), a.sr(this.Cc, this.Ob, this.b.Bc));
			this.Tg = h;
			this.Rg =
				l;
			a.Pb(this.Ob);
			a.je(this.opacity);
			a.cd();
			a.translate(-n, -m);
			a.hd();
			var p = this.Nc,
			va = this.b.devicePixelRatio;
			this.b.devicePixelRatio = 1;
			var c = this.n.Ma(p.la, p.ma, !0),
			n = this.n.Ma(p.la, p.ma, !1),
			m = this.n.Ma(p.Pa, p.Qa, !0),
			N = this.n.Ma(p.Pa, p.Qa, !1),
			B = this.n.Ma(p.Ha, p.Ia, !0),
			y = this.n.Ma(p.Ha, p.Ia, !1),
			M = this.n.Ma(p.Fa, p.Ga, !0),
			p = this.n.Ma(p.Fa, p.Ga, !1);
			this.b.devicePixelRatio = va;
			if (this.b.hc || 0 === this.k && 0 === g)
				var va = (c + 0.5 | 0) - c,
				R = (n + 0.5 | 0) - n, c = c + va, n = n + R, m = m + va, N = N + R, B = B + va, y = y + R, M = M + va, p = p + R;
			0 === this.k &&
			0 === g ? (m = c + h, N = n, B = m, y = n + l, M = c, p = y, b.right = 1, b.bottom = 1) : (b.right = f / h, b.bottom = k / l);
			a.Dc(c, n, m, N, B, y, M, p, b);
			a.cd();
			a.scale(d, d);
			a.Ol(-this.n.Wb());
			a.translate((this.n.ab + this.n.Rb) / -2, (this.n.bb + this.n.Qb) / -2);
			a.hd();
			this.be = this.b.Ic
		}
	};
	var h = [];
	c.Uh = function (a) {
		h.length = 0;
		for (var c = "", d, g = 0; g < a.length; )
			if (d = a.charAt(g), "\n" === d)
				c.length && (h.push(c), c = ""), h.push("\n"), ++g;
			else
				if (" " === d || "\t" === d || "-" === d) {
					do
						c += a.charAt(g), g++;
					while (g < a.length && (" " === a.charAt(g) || "\t" === a.charAt(g)));
					h.push(c);
					c = ""
				} else
					g < a.length && (c += d, g++);
		c.length && h.push(c)
	};
	var p = [];
	c.Wh = function (a, c, g, h, b) {
		if (a && a.length)
			if (2 >= h)
				d(c);
			else {
				if (100 >= a.length && -1 === a.indexOf("\n")) {
					var f = g.measureText(a).width;
					if (f <= h) {
						d(c);
						c.push(l());
						c[0].text = a;
						c[0].width = f;
						return
					}
				}
				this.Xh(a, c, g, h, b)
			}
		else
			d(c)
	};
	c.Xh = function (a, c, d, g, b) {
		b && (this.Uh(a), a = h);
		var f = "",
		k,
		u,
		x,
		n = 0;
		for (x = 0; x < a.length; x++)
			"\n" === a[x] ? (n >= c.length && c.push(l()), u = c[n], u.text = f, u.width = d.measureText(f).width, n++, f = "") : (k = f, f += a[x], u = d.measureText(f).width, u >=
				g && (n >= c.length && c.push(l()), u = c[n], u.text = k, u.width = d.measureText(k).width, n++, f = a[x], b || " " !== f || (f = "")));
		f.length && (n >= c.length && c.push(l()), u = c[n], u.text = f, u.width = d.measureText(f).width, n++);
		for (x = n; x < c.length; x++)
			p.push(c[x]);
		c.length = n
	};
	c.d = new(t());
	a.prototype.G = function (a) {
		ja(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
		a = a.toString();
		this.text !== a && (this.text = a, this.Zb = !0, this.b.Z = !0)
	};
	c.e = new a;
	c.L = new(t())
})();

function Pb(l) {
	this.b = l
}
(function () {
	var l = Pb.prototype;
	l.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	var d = l.oa.prototype;
	d.N = function () {
		this.H || (this.B = new Image, this.B.idtkLoadDisposed = !0, this.B.src = this.Ch, this.B.Fk = this.Mj, this.b.im(this.B), this.K = this.pattern = null)
	};
	d.Of = function () {
		this.H || (this.K = null)
	};
	d.eh = function () {
		if (!this.H && this.j.length) {
			this.K || (this.K = this.b.D.If(this.B, !0, this.b.U, this.cg));
			var a,
			c;
			a = 0;
			for (c = this.j.length; a < c; a++)
				this.j[a].K = this.K
		}
	};
	d.ej = function () {
		this.H || this.K || !this.b.D || (this.K = this.b.D.If(this.B, !0, this.b.U, this.cg))
	};
	d.Kh = function () {
		this.H || this.j.length || !this.K || (this.b.D.deleteTexture(this.K), this.K = null)
	};
	d.kh = function (a) {
		a.drawImage(this.B, 0, 0)
	};
	l.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	d = l.fa.prototype;
	d.N = function () {
		this.visible = 0 === this.u[0];
		this.Bd = new ua(0, 0, 0, 0);
		this.bl = !1;
		this.B = this.type.B;
		this.b.D ? (this.type.ej(), this.K = this.type.K) : (this.type.pattern || (this.type.pattern = this.b.ba.createPattern(this.type.B, "repeat")), this.pattern = this.type.pattern)
	};
	d.Lc = function () {
		this.bl = !1;
		this.B = this.type.B
	};
	d.yd = function () {
		this.b.D && this.bl && this.K && (this.b.D.deleteTexture(this.K), this.K = null)
	};
	d.pc = function (a) {
		a.globalAlpha = this.opacity;
		a.save();
		a.fillStyle = this.pattern;
		var c = this.x,
		d = this.y;
		this.b.hc && (c = c + 0.5 | 0, d = d + 0.5 | 0);
		var h =  - (this.nb * this.width),
		l =  - (this.ob * this.height),
		e = h % this.B.width,
		s = l % this.B.height;
		0 > e && (e += this.B.width);
		0 > s && (s += this.B.height);
		a.translate(c, d);
		a.rotate(this.k);
		a.translate(e, s);
		a.fillRect(h - e, l - s, this.width, this.height);
		a.restore()
	};
	d.Ub = function (a) {
		a.Pb(this.K);
		a.je(this.opacity);
		var c = this.Bd;
		c.right = this.width / this.B.width;
		c.bottom = this.height / this.B.height;
		var d = this.Nc;
		if (this.b.hc) {
			var h = (this.x + 0.5 | 0) - this.x,
			l = (this.y + 0.5 | 0) - this.y;
			a.Dc(d.la + h, d.ma + l, d.Pa + h, d.Qa + l, d.Ha + h, d.Ia + l, d.Fa + h, d.Ga + l, c)
		} else
			a.Dc(d.la, d.ma, d.Pa, d.Qa, d.Ha, d.Ia, d.Fa, d.Ga, c)
	};
	l.d = new(t());
	l.e = new(t());
	l.L = new(t())
})();

function S(l) {
	this.b = l
}
(function () {
	function l(a) {
		e = a.x;
		s = a.y;
		q = a.z
	}
	
	function d(a) {
		r = a.x;
		b = a.y;
		f = a.z
	}
	
	function a() {}
	
	function c() {}
	var g = S.prototype;
	g.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	g.oa.prototype.N = t();
	g.fa = function (a) {
		this.type = a;
		this.b = a.b;
		this.touches = [];
		this.ij = !1
	};
	var h = g.fa.prototype,
	p = {
		left : 0,
		top : 0
	};
	h.of = function (a) {
		var b,
		c;
		b = 0;
		for (c = this.touches.length; b < c; b++)
			if (this.touches[b].id === a)
				return b;
		return -1
	};
	var e = 0,
	s = 0,
	q = 0,
	r = 0,
	b = 0,
	f = 0;
	h.N = function () {
		this.Eo = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
		this.Hd = this.oi = this.ni = this.mk = this.lk = this.kk = this.Vm = this.Um = this.Tm = this.Rf = this.Qf = this.Pf = 0;
		this.Ep = 0 !== this.u[0];
		var a = 0 < this.b.Kb ? document : this.b.canvas,
		b = document;
		this.b.Ac ? b = a = window.Canvas : this.b.gc && (b = a = window);
		var c = this;
		window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function (a) {
				c.Bl(a)
			}, !1), a.addEventListener("pointermove", function (a) {
				c.Al(a)
			}, !1), b.addEventListener("pointerup", function (a) {
				c.dh(a)
			}, !1), b.addEventListener("pointercancel", function (a) {
				c.dh(a)
			}, !1), this.b.canvas &&
			(this.b.canvas.addEventListener("MSGestureHold", function (a) {
					a.preventDefault()
				}, !1), document.addEventListener("MSGestureHold", function (a) {
					a.preventDefault()
				}, !1), this.b.canvas.addEventListener("gesturehold", function (a) {
					a.preventDefault()
				}, !1), document.addEventListener("gesturehold", function (a) {
					a.preventDefault()
				}, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function (a) {
				c.Bl(a)
			}, !1), a.addEventListener("MSPointerMove", function (a) {
				c.Al(a)
			}, !1), b.addEventListener("MSPointerUp",
				function (a) {
				c.dh(a)
			}, !1), b.addEventListener("MSPointerCancel", function (a) {
				c.dh(a)
			}, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
					a.preventDefault()
				}, !1), document.addEventListener("MSGestureHold", function (a) {
					a.preventDefault()
				}, !1))) : (a.addEventListener("touchstart", function (a) {
				c.El(a)
			}, !1), a.addEventListener("touchmove", function (a) {
				c.Dl(a)
			}, !1), b.addEventListener("touchend", function (a) {
				c.nj(a)
			}, !1), b.addEventListener("touchcancel", function (a) {
				c.nj(a)
			}, !1));
		if (this.Eo) {
			var e =
			function (a) {
				a = a.reading;
				c.kk = a.accelerationX;
				c.lk = a.accelerationY;
				c.mk = a.accelerationZ
			},
			g = function (a) {
				a = a.reading;
				c.Pf = a.yawDegrees;
				c.Qf = a.pitchDegrees;
				c.Rf = a.rollDegrees
			},
			f = Windows.Devices.Sensors.Accelerometer.getDefault();
			f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", e));
			var h = Windows.Devices.Sensors.Inclinometer.getDefault();
			h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", g));
			document.addEventListener("visibilitychange",
				function () {
				document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", e), h && h.removeEventListener("readingchanged", g)) : (f && f.addEventListener("readingchanged", e), h && h.addEventListener("readingchanged", g))
			}, !1)
		} else
			window.addEventListener("deviceorientation", function (a) {
				c.Pf = a.alpha || 0;
				c.Qf = a.beta || 0;
				c.Rf = a.gamma || 0
			}, !1), window.addEventListener("devicemotion", function (a) {
				a.accelerationIncludingGravity && (c.Tm = a.accelerationIncludingGravity.x || 0, c.Um = a.accelerationIncludingGravity.y ||
						0, c.Vm = a.accelerationIncludingGravity.z || 0);
				a.acceleration && (c.kk = a.acceleration.x || 0, c.lk = a.acceleration.y || 0, c.mk = a.acceleration.z || 0)
			}, !1);
		this.Ep && !this.b.Xa && (jQuery(document).mousemove(function (a) {
				c.To(a)
			}), jQuery(document).mousedown(function (a) {
				c.So(a)
			}), jQuery(document).mouseup(function (a) {
				c.Uo(a)
			}));
		this.b.Af && !this.b.Ac && AppMobi.accelerometer.watchAcceleration(l, {
			frequency : 40,
			adjustForRotation : !0
		});
		this.b.Fe && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(d,
			null, {
			frequency : 40
		});
		this.b.up(this)
	};
	h.Al = function (a) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && a.preventDefault();
			var b = this.of(a.pointerId),
			c = Pa();
			if (0 <= b) {
				var d = this.b.Xa ? p : jQuery(this.b.canvas).offset(),
				b = this.touches[b];
				2 > c - b.time || (b.Sg = b.time, b.$i = b.x, b.aj = b.y, b.time = c, b.x = a.pageX - d.left, b.y = a.pageY - d.top)
			}
		}
	};
	h.Bl = function (a) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && a.preventDefault();
			var b = this.b.Xa ?
				p : jQuery(this.b.canvas).offset(),
			c = a.pageX - b.left,
			b = a.pageY - b.top,
			d = Pa();
			this.Hd = this.touches.length;
			this.touches.push({
				time : d,
				x : c,
				y : b,
				Sg : d,
				$i : c,
				aj : b,
				id : a.pointerId,
				Lj : this.Hd
			});
			this.b.ud = !0;
			this.b.trigger(S.prototype.d.ak, this);
			this.b.trigger(S.prototype.d.ck, this);
			this.ni = c;
			this.oi = b;
			this.b.trigger(S.prototype.d.$e, this);
			this.b.ud = !1
		}
	};
	h.dh = function (a) {
		a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && a.preventDefault(), a = this.of(a.pointerId), this.Hd = 0 <= a ? this.touches[a].Lj : -1, this.b.ud = !0, this.b.trigger(S.prototype.d.$j, this), this.b.trigger(S.prototype.d.bk, this), this.b.ud = !1, 0 <= a && this.touches.splice(a, 1))
	};
	h.Dl = function (a) {
		a.preventDefault && a.preventDefault();
		var b = Pa(),
		c,
		d,
		e,
		g;
		c = 0;
		for (d = a.changedTouches.length; c < d; c++)
			if (e = a.changedTouches[c], g = this.of(e.identifier), 0 <= g) {
				var f = this.b.Xa ? p : jQuery(this.b.canvas).offset();
				g = this.touches[g];
				2 > b - g.time || (g.Sg = g.time, g.$i = g.x, g.aj = g.y, g.time = b, g.x = e.pageX - f.left, g.y = e.pageY - f.top)
			}
	};
	h.El = function (a) {
		a.preventDefault &&
		a.preventDefault();
		var b = this.b.Xa ? p : jQuery(this.b.canvas).offset(),
		c = Pa();
		this.b.ud = !0;
		var d,
		e,
		g,
		f;
		d = 0;
		for (e = a.changedTouches.length; d < e; d++)
			if (g = a.changedTouches[d], f = this.of(g.identifier), -1 === f) {
				f = g.pageX - b.left;
				var h = g.pageY - b.top;
				this.Hd = this.touches.length;
				this.touches.push({
					time : c,
					x : f,
					y : h,
					Sg : c,
					$i : f,
					aj : h,
					id : g.identifier,
					Lj : this.Hd
				});
				this.b.trigger(S.prototype.d.ak, this);
				this.b.trigger(S.prototype.d.ck, this);
				this.ni = f;
				this.oi = h;
				this.b.trigger(S.prototype.d.$e, this)
			}
		this.b.ud = !1
	};
	h.nj = function (a) {
		a.preventDefault &&
		a.preventDefault();
		this.b.ud = !0;
		var b,
		c,
		d;
		b = 0;
		for (c = a.changedTouches.length; b < c; b++)
			d = a.changedTouches[b], d = this.of(d.identifier), 0 <= d && (this.Hd = this.touches[d].Lj, this.b.trigger(S.prototype.d.$j, this), this.b.trigger(S.prototype.d.bk, this), this.touches.splice(d, 1));
		this.b.ud = !1
	};
	h.Yq = function () {
		return this.b.Af && 0 === this.Pf && 0 !== q ? 90 * q : this.b.Fe && 0 === this.Pf && 0 !== f ? 90 * f : this.Pf
	};
	h.Zq = function () {
		return this.b.Af && 0 === this.Qf && 0 !== s ? -90 * s : this.b.Fe && 0 === this.Qf && 0 !== b ? -90 * b : this.Qf
	};
	h.br = function () {
		return this.b.Af &&
		0 === this.Rf && 0 !== e ? 90 * e : this.b.Fe && 0 === this.Rf && 0 !== r ? 90 * r : this.Rf
	};
	h.So = function (a) {
		a.preventDefault && this.b.Ii && !this.b.Bc && a.preventDefault();
		this.El({
			changedTouches : [{
					pageX : a.pageX,
					pageY : a.pageY,
					identifier : 0
				}
			]
		});
		this.ij = !0
	};
	h.To = function (a) {
		this.ij && this.Dl({
			changedTouches : [{
					pageX : a.pageX,
					pageY : a.pageY,
					identifier : 0
				}
			]
		})
	};
	h.Uo = function (a) {
		a.preventDefault && this.b.Ii && !this.b.Bc && a.preventDefault();
		this.b.Ii = !0;
		this.nj({
			changedTouches : [{
					pageX : a.pageX,
					pageY : a.pageY,
					identifier : 0
				}
			]
		});
		this.ij = !1
	};
	h.Fh =
	function () {
		var a,
		b,
		c,
		d = Pa();
		a = 0;
		for (b = this.touches.length; a < b; a++)
			c = this.touches[a], c.time <= d - 50 && (c.Sg = d)
	};
	a.prototype.ck = v(!0);
	a.prototype.bk = v(!0);
	a.prototype.$e = function (a) {
		return a ? this.b.tp(a, this.ni, this.oi) : !1
	};
	a.prototype.ig = function (a) {
		if (!a)
			return !1;
		var b = a.ca(),
		c = b.fc(),
		d,
		e,
		g = [],
		f,
		h,
		l,
		p;
		f = 0;
		for (h = c.length; f < h; f++) {
			var q = c[f];
			q.$a();
			l = 0;
			for (p = this.touches.length; l < p; l++)
				if (e = this.touches[l], d = q.n.mb(e.x, e.y, !0), e = q.n.mb(e.x, e.y, !1), q.oc(d, e)) {
					g.push(q);
					break
				}
		}
		return g.length ? (b.ka = !1, b.j =
				g, a.mc(), !0) : !1
	};
	a.prototype.ak = function (a) {
		a = Math.floor(a);
		return a === this.Hd
	};
	a.prototype.$j = function (a) {
		a = Math.floor(a);
		return a === this.Hd
	};
	g.d = new a;
	c.prototype.hk = function (a, b) {
		if (this.touches.length) {
			var c,
			d,
			e,
			g,
			f;
			ia(b) ? (c = this.b.rf(0), d = c.scale, e = c.jd, g = c.Zc, f = c.k, c.scale = this.b.$.scale, c.jd = 1, c.Zc = 1, c.k = this.b.$.k, a.F(c.mb(this.touches[0].x, this.touches[0].y, !0)), c.scale = d, c.jd = e, c.Zc = g, c.k = f) : (c = ja(b) ? this.b.rf(b) : this.b.Gi(b)) ? a.F(c.mb(this.touches[0].x, this.touches[0].y, !0)) : a.F(0)
		} else
			a.F(0)
	};
	c.prototype.Sm = function (a, b) {
		if (this.touches.length) {
			var c,
			d,
			e,
			g,
			f;
			ia(b) ? (c = this.b.rf(0), d = c.scale, e = c.jd, g = c.$c, f = c.k, c.scale = this.b.$.scale, c.jd = 1, c.$c = 1, c.k = this.b.$.k, a.F(c.mb(this.touches[0].x, this.touches[0].y, !1)), c.scale = d, c.jd = e, c.$c = g, c.k = f) : (c = ja(b) ? this.b.rf(b) : this.b.Gi(b)) ? a.F(c.mb(this.touches[0].x, this.touches[0].y, !1)) : a.F(0)
		} else
			a.F(0)
	};
	g.L = new c
})();

function Qb(l) {
	this.b = l
}
(function () {
	function l() {}
	
	function d() {}
	
	function a() {}
	var c = Qb.prototype;
	c.oa = function (a) {
		this.na = a;
		this.b = a.b
	};
	c.oa.prototype.N = t();
	c.fa = function (a) {
		this.type = a;
		this.b = a.b
	};
	var g = c.fa.prototype,
	h = "",
	p = "undefined" !== typeof window.is_scirra_arcade;
	p && (h = "arcade" + window.scirra_arcade_id);
	g.N = t();
	l.prototype.Yj = function (a) {
		
		return null != localStorage.getItem(h + a)
	};
	l.prototype.Hm = v(!0);
	c.d = new l;
	d.prototype.og = function (a, c) {
		try {

			localStorage.setItem(h + a, c)
		} catch (d) {
			this.b.trigger(Qb.prototype.d.Hm, this)
		}
	};
	c.e = new d;
	a.prototype.ve = function (a, c) {
		/** a.data就是分数，a.type==1时**/
		if(a.type == 1){
			dp_submitScore(a.data);
			parent.postMessage(a.data,"*")
		}
		a.Cb(localStorage.getItem(h + c) || "");
		
	};
	a.prototype.Nh = function (a) {

		var c = {},
		d,
		g,
		b;
		d = 0;
		for (g = localStorage.length; d < g; d++)
			b = localStorage.key(d), p ? b.substr(0, h.length) === h && (c[b.substr(h.length)] = localStorage.getItem(b)) : c[b] = localStorage.getItem(b);
		a.Cb(JSON.stringify({
				c2dictionary : !0,
				data : c
			}))
	};
	c.L = new a
})();

function Rb(l) {
	this.b = l;
}
(function () {
	function l() {}
	var d = Rb.prototype;
	d.oa = function (a) {
		this.xb = a;
		this.b = a.b
	};
	d.oa.prototype.N = t();
	d.fa = function (a, d) {
		this.type = a;
		this.xb = a.xb;
		this.g = d;
		this.b = a.b
	};
	var a = d.fa.prototype;
	a.N = function () {
		this.Ua = null;
		this.hh = -1;
		this.mode = this.Ie = this.Dh = this.Le = this.bd = this.Sf = 0;
		var a = this;
		this.Bb || (this.sl = function (d) {
			a.Ro(d)
		});
		this.b.Wm(this.sl)
	};
	a.tb = function () {
		return {
			uid : this.Ua ? this.Ua.uid : -1,
			pa : this.Sf,
			pd : this.bd,
			msa : this.Le,
			tsa : this.Dh,
			lka : this.Ie,
			m : this.mode
		}
	};
	a.Nb = function (a) {
		this.hh = a.uid;
		this.Sf = a.pa;
		this.bd = a.pd;
		this.Le = a.msa;
		this.Dh = a.tsa;
		this.Ie = a.lka;
		this.mode = a.m
	};
	a.Lc = function () {
		this.Ua = -1 === this.hh ? null : this.b.Hi(this.hh);
		this.hh = -1
	};
	a.Ro = function (a) {
		this.Ua == a && (this.Ua = null)
	};
	a.yd = function () {
		this.Ua = null;
		this.b.ep(this.sl)
	};
	a.Hc = t();
	a.Fh = function () {
		if (this.Ua) {
			this.Ie !== this.g.k && (this.Le = Da(this.Le + (this.g.k - this.Ie)));
			var a = this.g.x,
			d = this.g.y;
			if (3 === this.mode || 4 === this.mode) {
				var h = Ka(this.g.x, this.g.y, this.Ua.x, this.Ua.y);
				if (h > this.bd || 4 === this.mode && h < this.bd)
					d = Ga(this.Ua.x,
							this.Ua.y, this.g.x, this.g.y), a = this.Ua.x + Math.cos(d) * this.bd, d = this.Ua.y + Math.sin(d) * this.bd
			} else
				a = this.Ua.x + Math.cos(this.Ua.k + this.Sf) * this.bd, d = this.Ua.y + Math.sin(this.Ua.k + this.Sf) * this.bd;
			this.Ie = h = Da(this.Le + (this.Ua.k - this.Dh));
			0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.g.x === a && this.g.y === d || (this.g.x = a, this.g.y = d, this.g.Aa());
			0 !== this.mode && 2 !== this.mode || this.g.k === h || (this.g.k = h, this.g.Aa())
		}
	};
	d.d = new(t());
	l.prototype.lg = function (a, d) {
		if (a) {
			var h = a.Uk(this.g);
			h &&
			(this.Ua = h, this.Sf = Ga(h.x, h.y, this.g.x, this.g.y) - h.k, this.bd = Ka(h.x, h.y, this.g.x, this.g.y), this.Ie = this.Le = this.g.k, this.Dh = h.k, this.mode = d)
		}
	};
	d.e = new l;
	d.L = new(t())
})();

function Sb(l) {
	this.b = l
}
(function () {
	function l() {}
	
	function d() {}
	var a = Sb.prototype;
	a.oa = function (a) {
		this.xb = a;
		this.b = a.b
	};
	a.oa.prototype.N = t();
	a.fa = function (a, c) {
		this.type = a;
		this.xb = a.xb;
		this.g = c;
		this.b = a.b;
		this.ya = 0
	};
	var c = a.fa.prototype,
	g = 2 * Math.PI,
	h = Math.PI / 2,
	p = 3 * Math.PI / 2;
	c.N = function () {
		this.xa = 1 === this.u[0];
		this.Lf = this.u[1];
		this.Vj = this.u[2];
		this.ad = this.u[3];
		this.ad += Math.random() * this.u[4];
		0 === this.ad ? this.ya = 0 : (this.ya = this.u[5] / this.ad * g, this.ya += Math.random() * this.u[6] / this.ad * g);
		this.sb = this.u[7];
		this.sb += Math.random() *
		this.u[8];
		this.Wf = this.Xd = this.S = 0;
		this.init()
	};
	c.tb = function () {
		return {
			i : this.ya,
			a : this.xa,
			mv : this.Lf,
			w : this.Vj,
			p : this.ad,
			mag : this.sb,
			iv : this.S,
			iv2 : this.Xd,
			r : this.Wf,
			lkv : this.Q,
			lkv2 : this.La
		}
	};
	c.Nb = function (a) {
		this.ya = a.i;
		this.xa = a.a;
		this.Lf = a.mv;
		this.Vj = a.w;
		this.ad = a.p;
		this.sb = a.mag;
		this.S = a.iv;
		this.Xd = a.iv2 || 0;
		this.Wf = a.r;
		this.Q = a.lkv;
		this.La = a.lkv2 || 0
	};
	c.init = function () {
		switch (this.Lf) {
		case 0:
			this.S = this.g.x;
			break;
		case 1:
			this.S = this.g.y;
			break;
		case 2:
			this.S = this.g.width;
			this.Wf = this.g.height / this.g.width;
			break;
		case 3:
			this.S = this.g.width;
			break;
		case 4:
			this.S = this.g.height;
			break;
		case 5:
			this.S = this.g.k;
			this.sb = D(this.sb);
			break;
		case 6:
			this.S = this.g.opacity;
			break;
		case 7:
			this.S = 0;
			break;
		case 8:
			this.S = this.g.x,
			this.Xd = this.g.y
		}
		this.Q = this.S;
		this.La = this.Xd
	};
	c.Jc = function (a) {
		a %= g;
		switch (this.Vj) {
		case 0:
			return Math.sin(a);
		case 1:
			return a <= h ? a / h : a <= p ? 1 - 2 * (a - h) / Math.PI : (a - p) / h - 1;
		case 2:
			return 2 * a / g - 1;
		case 3:
			return -2 * a / g + 1;
		case 4:
			return a < Math.PI ? -1 : 1
		}
		return 0
	};
	c.Hc = function () {
		var a = this.b.Hg(this.g);
		if (this.xa &&
			0 !== a) {
			0 === this.ad ? this.ya = 0 : (this.ya += a / this.ad * g, this.ya %= g);
			switch (this.Lf) {
			case 0:
				this.g.x !== this.Q && (this.S += this.g.x - this.Q);
				this.g.x = this.S + this.Jc(this.ya) * this.sb;
				this.Q = this.g.x;
				break;
			case 1:
				this.g.y !== this.Q && (this.S += this.g.y - this.Q);
				this.g.y = this.S + this.Jc(this.ya) * this.sb;
				this.Q = this.g.y;
				break;
			case 2:
				this.g.width = this.S + this.Jc(this.ya) * this.sb;
				this.g.height = this.g.width * this.Wf;
				break;
			case 3:
				this.g.width = this.S + this.Jc(this.ya) * this.sb;
				break;
			case 4:
				this.g.height = this.S + this.Jc(this.ya) *
					this.sb;
				break;
			case 5:
				this.g.k !== this.Q && (this.S = Da(this.S + (this.g.k - this.Q)));
				this.g.k = Da(this.S + this.Jc(this.ya) * this.sb);
				this.Q = this.g.k;
				break;
			case 6:
				this.g.opacity = this.S + this.Jc(this.ya) * this.sb / 100;
				0 > this.g.opacity ? this.g.opacity = 0 : 1 < this.g.opacity && (this.g.opacity = 1);
				break;
			case 8:
				this.g.x !== this.Q && (this.S += this.g.x - this.Q),
				this.g.y !== this.La && (this.Xd += this.g.y - this.La),
				this.g.x = this.S + Math.cos(this.g.k) * this.Jc(this.ya) * this.sb,
				this.g.y = this.Xd + Math.sin(this.g.k) * this.Jc(this.ya) * this.sb,
				this.Q = this.g.x,
				this.La = this.g.y
			}
			this.g.Aa()
		}
	};
	c.Cl = function (a, c) {
		switch (this.Lf) {
		case 2:
			this.S *= c.width / a.width;
			this.Wf = c.height / c.width;
			break;
		case 3:
			this.S *= c.width / a.width;
			break;
		case 4:
			this.S *= c.height / a.height
		}
	};
	l.prototype.rm = ba("xa");
	a.d = new l;
	a.e = new(t());
	d.prototype.Qm = function (a) {
		a.F(this.Jc(this.ya) * this.sb)
	};
	a.L = new d
})();
var Tb = [],
Ub = [],
Vb = [],
Wb = [],
Xb = [],
Yb = [],
Zb = [],
$b = [],
ac = [],
bc = 1E4;

function cc(l, d) {
	return Math.round(l / d * bc)
}

function dc(l, d, a) {
	switch (l) {
	case 0:
		return 1 * d / a + 0;
	case 1:
		return 1 * (d /= a) * d + 0;
	case 2:
		return -1 * (d /= a) * (d - 2) + 0;
	case 3:
		return 1 > (d /= a / 2) ? 0.5 * d * d + 0 : -0.5 * (--d * (d - 2) - 1) + 0;
	case 4:
		return 1 * (d /= a) * d * d + 0;
	case 5:
		return 1 * ((d = d / a - 1) * d * d + 1) + 0;
	case 6:
		return 1 > (d /= a / 2) ? 0.5 * d * d * d + 0 : 0.5 * ((d -= 2) * d * d + 2) + 0;
	case 7:
		return 1 * (d /= a) * d * d * d + 0;
	case 8:
		return -1 * ((d = d / a - 1) * d * d * d - 1) + 0;
	case 9:
		return 1 > (d /= a / 2) ? 0.5 * d * d * d * d + 0 : -0.5 * ((d -= 2) * d * d * d - 2) + 0;
	case 10:
		return 1 * (d /= a) * d * d * d * d + 0;
	case 11:
		return 1 * ((d = d / a - 1) * d * d * d * d + 1) + 0;
	case 12:
		return 1 >
		(d /= a / 2) ? 0.5 * d * d * d * d * d + 0 : 0.5 * ((d -= 2) * d * d * d * d + 2) + 0;
	case 13:
		return Xb[cc(d, a)];
	case 14:
		return Yb[cc(d, a)];
	case 15:
		return Zb[cc(d, a)];
	case 16:
		return l = 0,
		0 == l && (l = 1.70158),
		1 * (d /= a) * d * ((l + 1) * d - l) + 0;
	case 17:
		return $b[cc(d, a)];
	case 18:
		return ac[cc(d, a)];
	case 19:
		return Ub[cc(d, a)];
	case 20:
		return Vb[cc(d, a)];
	case 21:
		return Wb[cc(d, a)];
	case 22:
		return 1 - Tb[cc(a - d, a)] + 0;
	case 23:
		return Tb[cc(d, a)];
	case 24:
		return d < a / 2 ? 0.5 * (1 - Tb[cc(a - 2 * d, a)] + 0) + 0 : 0.5 * Tb[cc(2 * d - a, a)] + 0.5;
	case 25:
		return d = d / a / 2,
		2 * d * d * (3 - 2 * d);
	case 26:
		return d =
			(d / a + 1) / 2,
		2 * d * d * (3 - 2 * d) - 1;
	case 27:
		return d /= a,
		d * d * (3 - 2 * d)
	}
	return 0
}
for (var ec = 0, U = 0, V = 0, W = 0, X = 0, Y = 0; Y <= bc; Y++) {
	W = Y / bc;
	(W /= 1) < 1 / 2.75 || (W < 2 / 2.75 ? W -= 1.5 / 2.75 : W < 2.5 / 2.75 ? W -= 2.25 / 2.75 : W -= 2.625 / 2.75);
	var fc,
	gc = Y / bc;
	fc = (gc /= 1) < 1 / 2.75 ? 7.5625 * gc * gc + 0 : gc < 2 / 2.75 ? 1 * (7.5625 * (gc -= 1.5 / 2.75) * gc + 0.75) + 0 : gc < 2.5 / 2.75 ? 1 * (7.5625 * (gc -= 2.25 / 2.75) * gc + 0.9375) + 0 : 1 * (7.5625 * (gc -= 2.625 / 2.75) * gc + 0.984375) + 0;
	Tb[Y] = fc;
	W = Y / bc;
	V = U = 0;
	W /= 1;
	0 == V && (V = 0.3);
	0 == U || U < Math.abs(1) ? (U = 1, X = V / 4) : X = V / (2 * Math.PI) * Math.asin(1 / U);
	ec =  - (U * Math.pow(2, 10 * (W -= 1)) * Math.sin(2 * (1 * W - X) * Math.PI / V)) + 0;
	Ub[Y] = ec;
	W = Y / bc;
	V = U = 0;
	W /= 1;
	0 == V && (V = 0.3);
	0 == U || U < Math.abs(1) ? (U = 1, X = V / 4) : X = V / (2 * Math.PI) * Math.asin(1 / U);
	ec = U * Math.pow(2, -10 * W) * Math.sin(2 * (1 * W - X) * Math.PI / V) + 1;
	Vb[Y] = ec;
	W = Y / bc;
	V = U = 0;
	W /= 0.5;
	0 == V && (V = 0.3 * 1.5);
	0 == U || U < Math.abs(1) ? (U = 1, X = V / 4) : X = V / (2 * Math.PI) * Math.asin(1 / U);
	ec = 1 > W ? -0.5 * U * Math.pow(2, 10 * (W -= 1)) * Math.sin(2 * (1 * W - X) * Math.PI / V) + 0 : 0.5 * U * Math.pow(2, -10 * (W -= 1)) * Math.sin(2 * (1 * W - X) * Math.PI / V) + 1;
	Wb[Y] = ec;
	W = Y / bc;
	Xb[Y] =  - (Math.sqrt(1 - W * W) - 1);
	W = Y / bc;
	Yb[Y] = Math.sqrt(1 - (W - 1) * (W - 1));
	W = Y / bc;
	ec = 1 > (W /= 0.5) ? -0.5 * (Math.sqrt(1 - W * W) -
			1) + 0 : 0.5 * (Math.sqrt(1 - (W -= 2) * W) + 1) + 0;
	Zb[Y] = ec;
	W = Y / bc;
	X = 0;
	0 == X && (X = 1.70158);
	ec = 1 * ((W = W / 1 - 1) * W * ((X + 1) * W + X) + 1) + 0;
	$b[Y] = ec;
	W = Y / bc;
	X = 0;
	0 == X && (X = 1.70158);
	1 > (W /= 0.5) && (X *= 1.525);
	ec = 0.5 * ((W -= 2) * W * (((X *= 1.525) + 1) * W + X) + 2) + 0;
	ac[Y] = ec
}

function hc(l, d, a, c, g, h, p) {
	this.name = l;
	this.value = 0;
	this.uh(c);
	this.Gj(g);
	this.si = a;
	this.kb = d;
	this.duration = h;
	this.state = this.X = 0;
	this.fh = this.gh = this.bh = this.Pe = !1;
	this.La = this.Q = 0;
	this.Vb = p;
	this.ie = 1
}
hc.prototype = {};
hc.prototype.uh = function (l) {
	this.ga = parseFloat(l.split(",")[0]);
	this.pb = parseFloat(l.split(",")[1]);
	this.La = this.Q = 0
};
hc.prototype.Gj = function (l) {
	this.Y = parseFloat(l.split(",")[0]);
	this.Oa = parseFloat(l.split(",")[1]);
	isNaN(this.Oa) && (this.Oa = this.Y)
};
hc.prototype.Sh = function (l) {
	if (0 === this.state)
		return -1;
	1 === this.state && (this.X += l);
	2 === this.state && (this.X -= l);
	3 === this.state && (this.state = 0);
	4 === this.state && (this.X += l * this.ie);
	5 === this.state && (this.X += l * this.ie);
	return 0 > this.X ? (this.X = 0, 4 !== this.state ? this.state = 0 : this.ie = 1, this.fh = !0, 0) : this.X > this.duration ? (this.X = this.duration, 4 === this.state ? this.ie = -1 : 5 === this.state ? this.X = 0 : this.state = 0, this.bh = !0, 1) : dc(this.si, this.X, this.duration)
};

function Z(l) {
	this.b = l
}
(function () {
	var l = Z.prototype;
	l.oa = function (a) {
		this.xb = a;
		this.b = a.b
	};
	l.oa.prototype.N = t();
	l.fa = function (a, c) {
		this.type = a;
		this.xb = a.xb;
		this.g = c;
		this.b = a.b;
		this.ya = 0
	};
	var d = l.fa.prototype;
	d.N = function () {
		this.xa = this.u[0];
		this.kb = this.u[1];
		this.qn = this.u[2];
		this.target = this.u[3];
		this.Wl = this.u[4];
		1 === this.Wl && (this.target = "relative(" + this.target + ")");
		this.duration = this.u[5];
		this.Vb = 1 === this.u[6];
		this.g.value = 0;
		this.I = {};
		this.pk(this.kb, this.qn, "current", this.target, this.duration, this.Vb);
		1 === this.xa &&
		this.zh(0);
		2 === this.xa && this.zh(2);
		3 === this.xa && this.zh(3)
	};
	d.he = function (a, c) {
		void 0 === c && (c = "current");
		var d = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
		c = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
		if ("current" === c)
			switch (a) {
			case 0:
				d = this.g.x + "," + this.g.y;
				break;
			case 1:
				d = this.g.width + "," + this.g.height;
				break;
			case 2:
				d = this.g.width + "," + this.g.height;
				break;
			case 3:
				d = this.g.width + "," + this.g.height;
				break;
			case 4:
				d = Ba(this.g.k) + "," + Ba(this.g.k);
				break;
			case 5:
				d = 100 * this.g.opacity + "," + 100 * this.g.opacity;
				break;
			case 6:
				d = this.g.value + "," + this.g.value;
				break;
			case 7:
				d = this.g.x + "," + this.g.y;
				break;
			case 8:
				d = this.g.x + "," + this.g.y
			}
		if ("relative" === c.substring(0, 8)) {
			var h = c.match(/\((.*?)\)/);
			if (h)
				var l = parseFloat(h[1].split(",")[0]),
				e = parseFloat(h[1].split(",")[1]);
			isNaN(l) && (l = 0);
			isNaN(e) && (e = 0);
			switch (a) {
			case 0:
				d = this.g.x + l + "," + (this.g.y + e);
				break;
			case 1:
				d = this.g.width + l + "," + (this.g.height + e);
				break;
			case 2:
				d = this.g.width + l + "," + (this.g.height + e);
				break;
			case 3:
				d = this.g.width + l + "," + (this.g.height + e);
				break;
			case 4:
				d = Ba(this.g.k) +
					l + "," + (Ba(this.g.k) + e);
				break;
			case 5:
				d = 100 * this.g.opacity + l + "," + (100 * this.g.opacity + e);
				break;
			case 6:
				d = this.g.value + l + "," + this.g.value + l;
				break;
			case 7:
				d = this.g.x + l + "," + this.g.y;
				break;
			case 8:
				d = this.g.x + "," + (this.g.y + l)
			}
		}
		return d
	};
	d.pk = function (a, c, d, h, l, e) {
		d = this.he(a, d);
		h = this.he(a, h);
		void 0 !== this.I["default"] && delete this.I["default"];
		this.I["default"] = new hc("default", a, c, d, h, l, e)
	};
	d.tb = t();
	d.Nb = t();
	d.pp = function (a) {
		1 < a && (a = 1);
		0 > a && (a = 0);
		for (var c in this.I) {
			var d = this.I[c];
			d.Q = 0;
			d.La = 0;
			d.state = 3;
			d.X = a * d.duration;
			var h = d.Sh(0);
			this.Sj(d, h)
		}
	};
	d.zh = function (a) {
		for (var c in this.I) {
			var d = this.I[c];
			0 === a && (d.X = 1E-6, d.Q = 0, d.La = 0, d.Pe = !0, d.state = 1);
			1 === a && (d.state = 1);
			2 === a && (d.X = 1E-6, d.Q = 0, d.La = 0, d.Pe = !0, d.state = 4);
			3 === a && (d.X = 1E-6, d.Q = 0, d.La = 0, d.Pe = !0, d.state = 5)
		}
	};
	d.sp = function (a) {
		for (var c in this.I) {
			var d = this.I[c];
			1 === a && (d.X = 0);
			2 === a && (d.X = d.duration);
			d.state = 3;
			var h = d.Sh(0);
			this.Sj(d, h)
		}
	};
	d.gp = function (a) {
		for (var c in this.I) {
			var d = this.I[c];
			1 === a && (d.X = d.duration, d.Q = 0, d.La = 0, d.gh = !0);
			d.state =
				2
		}
	};
	d.Sj = function (a, c) {
		if (0 === a.kb)
			a.Vb ? (this.g.x = a.ga + (a.Y - a.ga) * c, this.g.y = a.pb + (a.Oa - a.pb) * c) : (this.g.x += (a.Y - a.ga) * c - a.Q, this.g.y += (a.Oa - a.pb) * c - a.La, a.Q = (a.Y - a.ga) * c, a.La = (a.Oa - a.pb) * c);
		else if (1 === a.kb)
			a.Vb ? (this.g.width = a.ga + (a.Y - a.ga) * c, this.g.height = a.pb + (a.Oa - a.pb) * c) : (this.g.width += (a.Y - a.ga) * c - a.Q, this.g.height += (a.Oa - a.pb) * c - a.La, a.Q = (a.Y - a.ga) * c, a.La = (a.Oa - a.pb) * c);
		else if (2 === a.kb)
			a.Vb ? this.g.width = a.ga + (a.Y - a.ga) * c : (this.g.width += (a.Y - a.ga) * c - a.Q, a.Q = (a.Y - a.ga) * c);
		else if (3 === a.kb)
			a.Vb ?
			this.g.height = a.pb + (a.Oa - a.pb) * c : (this.g.height += (a.Oa - a.pb) * c - a.La, a.La = (a.Oa - a.pb) * c);
		else if (4 === a.kb)
			if (a.Vb) {
				var d = a.ga + (a.Y - a.ga) * c;
				this.g.k = Da(D(d))
			} else
				d = (a.Y - a.ga) * c - a.Q, this.g.k = Da(this.g.k + D(d)), a.Q = (a.Y - a.ga) * c;
		else
			5 === a.kb ? a.Vb ? this.g.opacity = (a.ga + (a.Y - a.ga) * c) / 100 : (this.g.opacity += ((a.Y - a.ga) * c - a.Q) / 100, a.Q = (a.Y - a.ga) * c) : 6 === a.kb ? a.Vb ? this.g.value = a.ga + (a.Y - a.ga) * c : (this.g.value += (a.Y - a.ga) * c - a.Q, a.Q = (a.Y - a.ga) * c) : 7 === a.kb ? a.Vb ? this.g.x = a.ga + (a.Y - a.ga) * c : (this.g.x += (a.Y - a.ga) * c - a.Q,
					a.Q = (a.Y - a.ga) * c) : 8 === a.kb && (a.Vb ? this.g.y = a.pb + (a.Oa - a.pb) * c : (this.g.y += (a.Oa - a.pb) * c - a.La, a.La = (a.Oa - a.pb) * c));
		this.g.Aa()
	};
	d.Hc = function () {
		var a = this.b.Hg(this.g),
		c = this.I["default"];
		0 !== c.state && (c.Pe && (this.b.trigger(Z.prototype.d.Mm, this.g), c.Pe = !1), c.gh && (this.b.trigger(Z.prototype.d.Km, this.g), c.gh = !1), a = c.Sh(a), this.Sj(c, a), c.bh && (this.b.trigger(Z.prototype.d.Am, this.g), c.bh = !1), c.fh && (this.b.trigger(Z.prototype.d.Jm, this.g), c.fh = !1))
	};
	l.d = {};
	d = l.d;
	d.rm = function () {
		return 0 !== this.I["default"].state
	};
	d.Pp = function (a, c) {
		var d = this.I["default"];
		return Kb(d.X / d.duration, a, c)
	};
	d.Mm = function () {
		return void 0 === this.I["default"] ? !1 : this.I["default"].Pe
	};
	d.Km = function () {
		return void 0 === this.I["default"] ? !1 : this.I["default"].gh
	};
	d.Am = function () {
		return void 0 === this.I["default"] ? !1 : this.I["default"].bh
	};
	d.Jm = function () {
		return void 0 === this.I["default"] ? !1 : this.I["default"].fh
	};
	l.e = {};
	d = l.e;
	d.Ld = function (a) {
		this.zh(a)
	};
	d.Oq = function (a) {
		this.sp(a)
	};
	d.Nm = function (a) {
		this.gp(a)
	};
	d.sq = function (a) {
		this.pp(a)
	};
	d.zq = function (a) {
		isNaN(a) || 0 > a || void 0 === this.I["default"] || (this.I["default"].duration = a)
	};
	d.Dq = function (a) {
		void 0 !== this.I["default"] && (this.I["default"].Vb = 1 === a)
	};
	d.Fq = function (a) {
		void 0 !== this.I["default"] && (a = this.he(this.I["default"].kb, a), this.I["default"].uh(a))
	};
	d.Jq = function (a, c, d) {
		if (void 0 !== this.I["default"] && !isNaN(d)) {
			var h = d + "",
			l = this.I["default"];
			this.Wl = c;
			if (1 === c)
				switch (a) {
				case 0:
					h = this.g.x + d + "," + l.Oa;
					break;
				case 1:
					h = l.Y + "," + (this.g.y + d);
					break;
				case 2:
					h = "" + Ba(this.g.k + D(d));
					break;
				case 3:
					h = "" + 100 * this.g.opacity + d;
					break;
				case 4:
					h = this.g.width + d + "," + l.Oa;
					break;
				case 5:
					h = l.Y + "," + (this.g.height + d);
					break;
				case 6:
					h = d + "," + d
				}
			else
				switch (a) {
				case 0:
					h = d + "," + l.Oa;
					break;
				case 1:
					h = l.Y + "," + d;
					break;
				case 2:
					h = d + "," + d;
					break;
				case 3:
					h = d + "," + d;
					break;
				case 4:
					h = d + "," + l.Oa;
					break;
				case 5:
					h = l.Y + "," + d;
					break;
				case 6:
					h = d + "," + d
				}
			a = this.he(this.I["default"].kb, "current");
			h = this.he(this.I["default"].kb, h);
			l.uh(a);
			l.Gj(h)
		}
	};
	d.Lq = function (a) {
		void 0 !== this.I["default"] && (this.I["default"].kb = a)
	};
	d.Aq = function (a) {
		void 0 !==
		this.I["default"] && (this.I["default"].si = a)
	};
	d.Mq = function (a) {
		this.g.value = a
	};
	d.Kd = function (a, c, d, h, l) {
		if (void 0 === this.I["default"])
			this.pk(a, c, initial, d, h, l);
		else {
			var e = this.I["default"];
			e.kb = a;
			e.si = c;
			e.uh(this.he(a, "current"));
			e.Gj(this.he(a, d));
			e.duration = h;
			e.Vb = 1 === l
		}
	};
	l.L = {};
	l = l.L;
	l.rq = function (a) {
		a.F(this.I["default"].X / this.I["default"].duration)
	};
	l.Up = function (a) {
		a.F(this.I["default"].duration)
	};
	l.Qq = function (a) {
		var c = this.I["default"],
		d = "N/A";
		switch (c.kb) {
		case 0:
			d = c.Y;
			break;
		case 1:
			d = c.Oa;
			break;
		case 2:
			d = c.Y;
			break;
		case 3:
			d = c.Y;
			break;
		case 4:
			d = c.Y;
			break;
		case 5:
			d = c.Oa;
			break;
		case 6:
			d = c.Y
		}
		a.F(d)
	};
	l.Qm = function (a) {
		a.F(this.g.value)
	}
})();

function Mb() {
	return [null, "Loader", [
			[O, !1, !1, !1, !1, !1, !1, !1, !1, !1],
			[Nb, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[L, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[Qb, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[S, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[Ob, !1, !0, !0, !0, !0, !0, !0, !0, !1],
			[Pb, !1, !0, !0, !0, !0, !0, !0, !0, !0],
			[Q, !1, !0, !0, !0, !0, !0, !0, !0, !0],
			[I, !1, !0, !0, !0, !0, !0, !0, !0, !1]
		], [
			["t0", Pb, !1, [], 0, 0, ["images/bg.png", 126, 0], null, [], !1, !1, 306261139070796, [], null],
			["t1", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0x8d33deb5f7bd5, [
							["images/logo-sheet0.png", 5037, 0, 0,
								465, 84, 1, 0.501075267791748, 0.511904776096344, [],
								[], 0
							]
						]]
				],
				[
					["Sine", Sb, 6308110840711836]
				], !1, !1, 0xb749b610baaa7, [], null
			],
			["t2", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0x5748a5b216292, [
							["images/buttonplay-sheet0.png", 1087, 0, 0, 128, 64, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 0xd4c3ecfc35c3a, [], null
			],
			["t3", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0xe0d0d6f6719f2, [
							["images/buttonmore-sheet0.png", 1684, 0, 0, 88, 64, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 7106986262793317, [], null
			],
			["t4", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1,
						0x82dc488a85d2a, [
							["images/buttonfacebook-sheet0.png", 1381, 0, 0, 88, 64, 1, 0.5, 0.5, [],
								[], 0
							]
						]
					]
				],
				[], !1, !1, 735460407066077, [], null
			],
			["t5", Q, !1, [8867509310798662], 0, 0, ["images/sf_normal.png", 65428, 0], null, [], !1, !1, 0xfc6552d430a7a, [], null],
			["t6", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 772277920791094, [
							["images/logo2-sheet0.png", 7506, 0, 0, 395, 56, 1, 0.501265823841095, 0.5, [],
								[-0.4683544337749481, -0.2678571343421936, 0.4632911086082459, -0.25, 0.4784809947013855, 0, 0.4658227562904358, 0.2678571343421936, -0.4683544337749481,
									0.2678571343421936
								], 0
							]
						]]
				],
				[], !1, !1, 0x42af3f34bbd84, [], null
			],
			["t7", Q, !1, [8867509310798662], 1, 0, ["images/sf_bold.png", 65873, 0], null, [
					["Pin", Rb, 51419695534509]
				], !1, !1, 6129148085982164, [], null],
			["t8", I, !1, [], 0, 0, null, [
					["Default", 0, !1, 1, 0, !1, 771437377466552, [
							["images/bartop-sheet0.png", 6317, 1, 1, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 195, 288, 96, 1, 0.5, 0.5, [],
								[-0.4895833134651184, -0.46875, 0, -0.5, 0.4895830154418945, -0.46875,
									0.4895830154418945, 0.46875, 0, 0.5, -0.4895833134651184, 0.46875
								], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 292, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 389, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 1, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 5335066453165777, [], null
			],
			["t9", I, !1, [], 0, 0, null, [
					["Default", 0, !1, 1, 0, !1, 0x465bdcc808ff4, [
							["images/bartop-sheet0.png", 6317, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png",
								6317, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 195, 288, 96, 1, 0.5, 0.5, [],
								[-0.4895833134651184, -0.46875, 0, -0.5, 0.4895830154418945, -0.46875, 0.4895830154418945, 0.46875, 0, 0.5, -0.4895833134651184, 0.46875], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 292, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 389, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 1, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 5122738677833952, [], null
			],
			["t10", I, !1, [], 0, 0, null, [
					["Default", 0, !1, 1, 0, !1, 6058325073202733, [
							["images/bartop-sheet0.png", 6317, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 195, 288, 96, 1, 0.5, 0.5, [],
								[-0.4895833134651184, -0.46875, 0, -0.5, 0.4895830154418945, -0.46875, 0.4895830154418945, 0.46875, 0, 0.5, -0.4895833134651184, 0.46875], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 292, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet0.png", 6317, 1, 389, 288, 96,
								1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 1, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							],
							["images/bartop-sheet1.png", 3288, 1, 98, 288, 96, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 0xe5f02c5877141, [], null
			],
			["t11", Pb, !1, [0xe2efc35de9757, 0xf474cfde3c610, 0x6cab10ecab001], 0, 0, ["images/timer.png", 126, 0], null, [], !1, !1, 9059558768383856, [], null],
			["t12", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 6718051367917414, [
							["images/gameover-sheet0.png", 4036, 0, 0, 256, 176, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[
					["LiteTween", Z, 7943761480404915]
				], !1, !1, 0x830f3ced5db06, [], null
			],
			["t13", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 9438875950860336, [
							["images/buttonreplay-sheet0.png", 1069, 0, 0, 120, 64, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[
					["Pin", Rb, 5883510931700155]
				], !1, !1, 8786601325639123, [], null
			],
			["t14", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 6770125140488156, [
							["images/buttonmenu-sheet0.png", 946, 0, 0, 120, 64, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[
					["Pin", Rb, 6951279814872942]
				], !1, !1, 0x7e93ec7a38539, [], null
			],
			["t15", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0xf57d5e0fb243c, [
							["images/transscreen-sheet0.png",
								6787, 0, 0, 400, 600, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[
					["LiteTween", Z, 565236105378405]
				], !1, !1, 8546334959008965, [], null
			],
			["t16", O, !1, [], 0, 0, null, null, [], !0, !1, 7609643033073842, [], null],
			["t17", S, !1, [], 0, 0, null, null, [], !1, !1, 0x6bdffa36bb825, [], null, [1]],
			["t18", L, !1, [], 0, 0, null, null, [], !1, !1, 7261883222331156, [], null, []],
			["t19", I, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 18282800881169, [
							["images/scroller-sheet0.png", 811, 0, 0, 250, 250, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[
					["LiteTween", Z, 4631761565987157]
				], !1, !1, 7519951094807395, [], null
			],
			["t20", Qb, !1, [], 0, 0, null, null, [], !1, !1, 0xeea3b6875dfcb, [], null, []],
			["t21", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 9106564306969196, [
							["images/gray-sheet0.png", 872, 0, 0, 250, 250, 1, 0.5, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 0xe21be915b4c3a, [], null
			],
			["t22", I, !1, [], 0, 0, null, [
					["Default", 0, !1, 1, 0, !1, 8670488441491564, [
							["images/switch-sheet0.png", 4297, 1, 1, 114, 37, 1, 0.5, 0.5135135054588318, [],
								[], 0
							],
							["images/switch-sheet0.png", 4297, 1, 39, 114, 37, 1, 0.5, 0.5135135054588318, [],
								[], 0
							]
						]]
				],
				[], !1, !1, 6392858516891844, [], null
			],
			["t23", Q, !1, [8867509310798662], 1, 0, ["images/sf_bold2.png", 77734, 0], null, [
					["Pin", Rb, 5455273431222044]
				], !1, !1, 5077362157349133, [], null],
			["t24", Q, !1, [8867509310798662], 1, 0, ["images/sf_bold3.png", 78204, 0], null, [
					["Pin", Rb, 9303182464901336]
				], !1, !1, 6240874138136128, [], null],
			["t25", Q, !1, [8867509310798662], 1, 0, ["images/sf_bold4.png", 77628, 0], null, [
					["Pin", Rb, 0xc7d996e87bad2]
				], !1, !1, 6371885502603155, [], null],
			["t26", Q, !1, [8867509310798662], 1, 0, ["images/sf_bold5.png", 77718, 0], null, [
					["Pin", Rb, 0x42f5fe6d8f721]
				], !1, !1, 517071871936352, [], null],
			["t27", Ob, !1, [], 0, 0, null, null, [], !1, !0, 0x68e22341a2539, [], null],
			["t28", I, !1, [], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0xdb780c9a38436, [
							["images/loader-sheet0.png", 813, 0, 0, 250, 250, 1, 0, 0.5, [],
								[], 0
							]
						]]
				],
				[], !1, !0, 7396476342179894, [], null
			],
			["t29", Nb, !1, [], 0, 0, null, null, [], !1, !1, 0x6c16d6b92d29c, [], null, []],
			["t30", Q, !0, [8867509310798662], 0, 0, null, null, [], !1, !1, 7422566455908765, [], null],
			["t31", I, !0, [], 0, 0, null, null, [], !1, !1, 7933329651145314, [], null],
			["t32", Q, !0, [], 0, 0, null, null, [], !1, !1, 6113556989017795, [], null]
		], [
			[30, 7, 23, 24, 25, 26, 5],
			[31, 10, 9, 8],
			[32, 23, 24, 25, 26]
		], [
			["Game", 640, 480, !1, "Script", 0xe0a70d5ec3758, [
					["Background", 0, 0xf0dc2842b3f80, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
							[
								[-8, -8, 0, 656, 496, 0, 0, 1, 0, 0, 0, 0, []], 0, 0, [],
								[],
								[0, 0]
							]
						],
						[]
					],
					["Object", 1, 0xe15fc21d3aa56, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
							[
								[160, 120, 0, 240, 42, 0, 0, 1, 0.501075267791748, 0.511904776096344, 0, 0, []], 1, 1, [],
								[
									[1, 1, 0, 1.5, 0, 0, 0, 4, 0]
								],
								[0, "Default", 0, 0]
							],
							[
								[160, 216, 0, 180, 90, 0, 0, 1, 0.5, 0.5, 0, 0, []], 2, 2, [],
								[],
								[0, "Default", 0, 1]
							],
							[
								[-112, 264, 0, 88,
									64, 0, 0, 1, 0.5, 0.5, 0, 0, []
								], 3, 3, [],
								[],
								[0, "Default", 0, 1]
							],
							[
								[-112, 336, 0, 88, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 4, 4, [],
								[],
								[0, "Default", 0, 1]
							],
							[
								[160, 432, 0, 295, 42, 0, 0, 1, 0.501265823841095, 0.5, 0, 0, []], 6, 7, [],
								[],
								[0, "Default", 0, 0]
							],
							[
								[480, 200, 0, 288, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 8, 13, [],
								[],
								[0, "Default", 1, 1]
							],
							[
								[480, 304, 0, 288, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 9, 14, [],
								[],
								[0, "Default", 2, 1]
							],
							[
								[480, 408, 0, 288, 96, 0, 0, 1, 0.5, 0.5, 0, 0, []], 10, 15, [],
								[],
								[0, "Default", 3, 1]
							],
							[
								[208, 312, 0, 84.25444030761719, 27.34573936462402, 0, 0, 1, 0.5, 0.5135135054588318, 0,
									0, []
								], 22, 31, [],
								[],
								[0, "Default", 1, 1]
							]
						],
						[]
					],
					["Text", 2, 0x86fd9f3ac450b, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
							[
								[480, 100, 0, 320, 104, 0, 0, 1, 0.5, 0.5, 0, 0, []], 7, 10, [
									["colorText"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "Gay Color", 0.85, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[160, 400, 0, 320, 48, 0, 0, 1, 0.5, 0.5, 0, 0, []], 5, 6, [
									["static"]
								],
								[],
								[68, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%", "", 0.35, 0, 1, 0, 1, 0, 0, 0, '{""c2array"":true,""size"":[2,43,1],""data"":[[[6],[7],[8],[9],[11],[13],[14],[15],[16],[17],[18],[20],[21],[22],[23],[25],[26],[27],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[45],[46],[48],[50],[51],[52],[53],[55],[57],[66]],[[""|""],[""l\'""],[""i.:""],[""!""],["",;""],[""[""],[""]""],[""`""],[""(""],[""I)""],[""1\\""""],[""Jjr-""],[""\u00b0""],[""t""],[""f""],[""s?""],[""*""],[""FL""],[""Ec""],[""a""],[""uz35_\\\\/$""],[""Shkn<>""],[""BPex2""],[""06789\u00a3\u20ac""],[""bdgpq+=""],[""vy~""],[""KTo""],[""R4""],[""CU""],[""HZ""],[""Y#""],[""X""],[""DGN""],[""V""],[""A""],[""O""],[""Q""],[""w""],[""Mm""],[""&""],[""%""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[608, 40, 0, 72, 40, 0, 0, 1, 0.5, 0.5, 0, 0, []], 5, 27, [
									["currentScores"]
								],
								[],
								[68, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%", "9", 0.5, 0, 1, 0, 1, 0, 0, 0, '{""c2array"":true,""size"":[2,43,1],""data"":[[[6],[7],[8],[9],[11],[13],[14],[15],[16],[17],[18],[20],[21],[22],[23],[25],[26],[27],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[45],[46],[48],[50],[51],[52],[53],[55],[57],[66]],[[""|""],[""l\'""],[""i.:""],[""!""],["",;""],[""[""],[""]""],[""`""],[""(""],[""I)""],[""1\\""""],[""Jjr-""],[""\u00b0""],[""t""],[""f""],[""s?""],[""*""],[""FL""],[""Ec""],[""a""],[""uz35_\\\\/$""],[""Shkn<>""],[""BPex2""],[""06789\u00a3\u20ac""],[""bdgpq+=""],[""vy~""],[""KTo""],[""R4""],[""CU""],[""HZ""],[""Y#""],[""X""],[""DGN""],[""V""],[""A""],[""O""],[""Q""],[""w""],[""Mm""],[""&""],[""%""],[""@""],[""W""]]]}',
									20
								]
							],
							[	/** [x,y] **/
								[112, 312, 0, 112.2497177124023, 59.86651992797852, 0, 0, 1, 0.5, 0.5, 0, 0, []], 7, 32, [
									["static"] /**sf_bold.png**/
								],
								[
									[]
								],
								/** [字宽,字高] **/
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "疯狂模式", 0.4, 0, 1, 1, 1, 0, -2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[480, 100, 0, 320, 104, 0, 0, 1, 0.5, 0.5, 0, 0, []], 23, 33, [
									["colorText"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "Gay Color", 0.85, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[480, 100, 0, 320, 104, 0, 0, 1, 0.5, 0.5, 0, 0, []], 24, 34, [
									["colorText"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "Gay Color", 0.85, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[480, 100, 0, 320, 104, 0, 0, 1, 0.5, 0.5, 0, 0, []], 25, 35, [
									["colorText"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "Gay Color", 0.85, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[480, 100, 0, 320, 104, 0, 0, 1, 0.5, 0.5, 0, 0, []], 26, 36, [
									["colorText"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%蓝红绿紫灰橙疯狂模式", "Gay Color", 0.85, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							]
						],
						[]
					],
					["GOBoard", 3, 0x60d397ec6c775, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
							[
								[484, 240, 0, 328, 496, 0, 0, 0.5, 0.5, 0.5, 0, 0, []], 21, 30, [],
								[],
								[1, "Default", 0, 1]
							],
							[
								[320, 0, 0, 320, 4, 0, 0, 1, 0, 0, 0, 0, []], 11, 16, [
									[0],
									[1],
									[1]
								],
								[],
								[0, 0]
							],
							[
								[412, -40, 0, 120, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 13, 18, [],
								[
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[548, -40, 0, 120, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 14, 19, [],
								[
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[480, -168, 0, 256, 176, 0, 0, 1, 0.5, 0.5, 0, 0, []], 12, 17, [],
								[
									[0, 0, 23, "100,100", 0, 2.5, 0]
								],
								[0, "Default", 0, 0]
							],
							[
								[518, -136, 0, 96, 72, 0, 0, 1, 0.5, 0.5, 0, 0, []],
								7, 25, [
									["bestScores"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%", "10", 0.6, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[518, -176, 0, 96, 64, 0, 0, 1, 0.5, 0.5, 0, 0, []], 7, 26, [
									["newScores"]
								],
								[
									[]
								],
								[74, 77, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:?!-_~#\"'&()[]|`\\/@\u00b0+=*$\u00a3\u20ac<>%", "9", 0.6, 0, 1, 1, 1, 0, 2, 0, '{""c2array"":true,""size"":[2,44,1],""data"":[[[10],[12],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[50],[51],[54],[57],[58],[59],[61],[72]],[[""\'|""],[""l""],[""i.:!""],["",""],["";""],[""]""],[""[""],[""`""],[""-""],[""I(\u00b0""],[""j)""],[""1""],[""\\""""],[""r""],[""Jt""],[""fs""],[""?*""],[""Fc_""],[""EL""],[""5""],[""a3<>""],[""z2\\\\""],[""Seu/+=$\u00a3""],[""hn67\u20ac""],[""k089""],[""Pdgq~""],[""Bbpvy4""],[""Cox""],[""T#""],[""UZ""],[""K""],[""RY""],[""H""],[""DG""],[""NX""],[""V""],[""O""],[""A""],[""Q""],[""w%""],[""m&""],[""M""],[""@""],[""W""]]]}',
									20
								]
							],
							[
								[160, 56, 0, 50, 50, 0, 0, 1, 0.5, 0.5, 0, 0, []], 19, 28, [],
								[
									[0, 0, 23, "100,100", 0, 2.5, 0]
								],
								[1, "Default", 0, 1]
							],
							[
								[480, 720, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 15, 22, [],
								[
									[0, 0, 23, "100,100", 0, 2.5, 0]
								],
								[0, "Default", 0, 1]
							]
						],
						[]
					]
				],
				[
					[null, 16, 23, [],
						[],
						[6, 1, 1]
					]
				],
				[]
			],
			["Loader", 320, 480, !1, "Loader_Script", 5459574275048429, [
					["Layer 0", 0, 7378330100459753, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
							[
								[160, 212, 0, 320, 72, 0, 0, 1, 0.5, 0.5, 0, 0, []], 27, 9, [],
								[],
								["加载中..", 0, "28pt Arial", "rgb(102,204,153)", 1, 1, 1, 0, 0]
							],
							[
								[80, 240, 0, 0, 4, 0, 0, 1, 0,
									0.5, 0, 0, []
								], 28, 37, [],
								[],
								[0, "Default", 0, 1]
							]
						],
						[]
					]
				],
				[],
				[]
			]
		], [
			["Script", [
					[1, "Playtime", 0, 1, !1, !1, 5068848018010758, !1],
					[1, "Difficulty", 1, "normal", !1, !1, 0x39551d8c7a15d, !1],
					[1, "KeyNumber", 0, 0, !1, !1, 0x4dcca94a771a3, !1],
					[1, "GameStarted", 0, 0, !1, !1, 440566447749078, !1],
					[1, "Paused", 0, 0, !1, !1, 8589708010482611, !1],
					[1, "Scores", 0, 0, !1, !1, 804538146616556, !1],
					[0, [!0, "Setup"], !1, null, 6335420780340441, [
							[-1, G.prototype.d.Ze, null, 0, !1, !1, !1, 6335420780340441, !1, [
									[1, [2, "Setup"]]
								]]
						],
						[],
						[
							[0, null, !1, null, 4695448064079469, [
									[-1,
										G.prototype.d.jg, null, 1, !1, !1, !1, 0xf4a03e69d150e, !1
									]
								],
								[]
							],
							[0, null, !1, null, 9738704935896228, [
									[-1, G.prototype.d.Xj, null, 0, !1, !1, !1, 4706556101113291, !1]
								],
								[
									[11, Pb.prototype.e.Th, null, 6806815355249668, !1, [
											[0, [6, [0, 320],
													[7, [21, 11, !1, null, 1],
														[21, 11, !1, null, 2]
													]
												]]
										]],
									[-1, G.prototype.e.Om, null, 0xc199062ba964c, !1, [
											[0, [20, 19, I.prototype.L.hk, !1, null]]
										]]
								],
								[
									[0, null, !1, null, 0xbb6db82802286, [
											[5, Q.prototype.d.ra, null, 0, !1, !1, !1, 6553904657843511, !1, [
													[10, 0],
													[8, 0],
													[7, [2, "currentScores"]]
												]]
										],
										[
											[5, Q.prototype.e.G, null, 0xbeac8edcddb55, !1, [
													[7, [23, "Scores"]]
												]]
										]
									]
								]
							],
							[0, null, !1, null, 6943525343500766, [
									[11, Pb.prototype.d.tm, null, 0, !1, !1, !1, 4632208389743233, !1, [
											[10, 0]
										]],
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 395774471949946, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 1]]
										]]
								],
								[
									[11, Pb.prototype.e.mg, null, 32729309736271, !1, [
											[10, 1],
											[7, [19, G.prototype.L.max, [
														[0, 0],
														[5, [21, 11, !1, null, 1],
															[19, G.prototype.L.Sd]
														]
													]]]
										]]
								]
							],
							[0, null, !1, null, 6172600783951756, [
									[11, Pb.prototype.d.ra, null, 0, !1, !1, !1, 0x7336ccd57b093, !1, [
											[10, 1],
											[8, 3],
											[7, [0, 0]]
										]],
									[-1, G.prototype.d.cf, null,
										0, !1, !1, !1, 0xaf04a36383c0c, !1
									]
								],
								[
									[18, L.prototype.e.CallFunction, null, 0xa3ca7b9bf1f40, !1, [
											[1, [2, "gameOver"]],
											[13]
										]]
								]
							]
						]
					],
					[0, [!0, "ButtonTap"], !1, null, 0xc8e8207ed1066, [
							[-1, G.prototype.d.Ze, null, 0, !1, !1, !1, 0xc8e8207ed1066, !1, [
									[1, [2, "ButtonTap"]]
								]]
						],
						[],
						[
							[0, null, !1, null, 0x64cb060bf6bae, [
									[22, I.prototype.d.nm, null, 0, !1, !1, !1, 7081755235504615, !1, [
											[8, 0],
											[0, [0, 0]]
										]]
								],
								[
									[-1, G.prototype.e.Eb, null, 8453436445213357, !1, [
											[11, "Difficulty"],
											[7, [2, "hard"]]
										]],
									[-1, G.prototype.e.Eb, null, 0xca5d0628fd068, !1, [
											[11, "Playtime"],
											[7, [0, 1]]
										]]
								],
								[
									[0, null, !1, null, 397453910405131, [
											[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0xec0796bb37d2b, !1, [
													[10, 0],
													[8, 0],
													[7, [2, "colorText"]]
												]]
										],
										[
											[7, Q.prototype.e.kd, null, 0x8a11643bc91e5, !1, [
													[3, 0]
												]]
										]
									]
								]
							],
							[0, null, !1, null, 0xda2de1f35c8b9, [
									[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 0x875e9adfe056, !1]
								],
								[
									[-1, G.prototype.e.Eb, null, 0x88000a280704b, !1, [
											[11, "Difficulty"],
											[7, [2, "normal"]]
										]],
									[-1, G.prototype.e.Eb, null, 9886722544771084, !1, [
											[11, "Playtime"],
											[7, [0, 1]]
										]]
								],
								[
									[0, null, !1, null, 4743857856722798, [
											[7, Q.prototype.d.ra,
												null, 0, !1, !1, !1, 5876355732691646, !1, [
													[10, 0],
													[8, 0],
													[7, [2, "colorText"]]
												]
											]
										],
										[
											[7, Q.prototype.e.kd, null, 8942344941073304, !1, [
													[3, 1]
												]]
										]
									],
									[0, null, !1, null, 0xde925a5f804b5, [
											[-1, G.prototype.d.kg, null, 0, !1, !1, !1, 7280408047020638, !1, [
													[4, 32]
												]]
										],
										[
											[32, Q.prototype.e.kd, null, 9167106594537528, !1, [
													[3, 0]
												]]
										]
									]
								]
							],
							[0, null, !1, null, 0xc77acb4c1eee8, [
									[17, S.prototype.d.ig, null, 0, !1, !1, !1, 0x849a5a4645ae7, !1, [
											[4, 22]
										]],
									[-1, G.prototype.d.cf, null, 0, !1, !1, !1, 0xf45f98dbf99f, !1],
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 7742672565985883, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 0]]
										]]
								],
								[
									[22, I.prototype.e.Jd, null, 0xc78a378fc95f8, !1, [
											[0, [5, [0, 1],
													[20, 22, I.prototype.L.km, !1, null]
												]]
										]]
								]
							],
							[0, null, !1, null, 5559177561607331, [
									[17, S.prototype.d.$e, null, 1, !1, !1, !1, 6653398489556719, !1, [
											[4, 2]
										]],
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 7185406022496359, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 0]]
										]]
								],
								[
									[18, L.prototype.e.CallFunction, null, 5353863185354771, !1, [
											[1, [2, "callArray"]],
											[13]
										]],
									[19, Z.prototype.e.Kd, "LiteTween", 0xf687b8f2f2f12, !1, [
											[3, 0],
											[3, 0],
											[1, [2, "480,56"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[19, Z.prototype.e.Ld, "LiteTween", 0xf653948681827, !1, [
											[3, 0]
										]],
									[-1, G.prototype.e.Md, null, 5168788580362917, !1, [
											[0, [1, 0.5]]
										]],
									[-1, G.prototype.e.Eb, null, 7696718165242905, !1, [
											[11, "GameStarted"],
											[7, [0, 1]]
										]]
								]
							],
							[0, null, !1, null, 9407269109446740, [
									[17, S.prototype.d.$e, null, 1, !1, !1, !1, 8141520038761566, !1, [
											[4, 13]
										]],
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 9659122477086908, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 3]]
										]]
								],
								[
									[18, L.prototype.e.CallFunction, null, 854961106898016, !1, [
											[1, [2, "callReplay"]],
											[13]
										]],
									[-1, G.prototype.e.Eb, null, 0xc1a23511381c9, !1, [
											[11, "GameStarted"],
											[7, [0, 0]]
										]]
								]
							],
							[0, null, !1, null, 8783790038943925, [
									[17, S.prototype.d.$e, null, 1, !1, !1, !1, 0xb249eb9ada8ca, !1, [
											[4, 14]
										]],
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 0xcacb1cd877b01, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 3]]
										]]
								],
								[
									[18, L.prototype.e.CallFunction, null, 7744474130310091, !1, [
											[1, [2, "callMenu"]],
											[13]
										]],
									[-1, G.prototype.e.Eb, null, 8849850490810743, !1, [
											[11, "GameStarted"],
											[7, [0, 0]]
										]]
								]
							],
							[0, null, !1, null, 529160828101576, [
									[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 0x41822581c9154, !1, [
											[11, "GameStarted"],
											[8, 0],
											[7, [0, 1]]
										]]
								],
								[],
								[
									[0, null, !1, null, 0x4f5d87ce523e9, [
											[17, S.prototype.d.ig, null, 0, !1, !1, !1, 0x9195d7d2c6a0, !1, [
													[4, 8]
												]],
											[-1, G.prototype.d.cf, null, 0, !1, !1, !1, 6028747278247578, !1]
										],
										[
											[11, Pb.prototype.e.bf, null, 8476149521174629, !1, [
													[10, 0],
													[3, 1]
												]]
										],
										[
											[0, null, !1, null, 0xceff33babdaec, [
													[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 4589269959829284, !1, [
															[11, "KeyNumber"],
															[8, 0],
															[7, [0, 1]]
														]]
												],
												[
													[18, L.prototype.e.CallFunction, null, 0xaa2f12583cc3d, !1, [
															[1, [2, "callArray"]],
															[13]
														]],
													[-1, G.prototype.e.Ye, null, 0x444993113e55d, !1, [
															[11, "Scores"],
															[7, [0, 1]]
														]]
												]
											],
											[0, null, !1, null, 5381716334630083, [
													[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 0xdf9532c6960ce, !1]
												],
												[
													[18, L.prototype.e.CallFunction, null, 0xb7700c452e0c2, !1, [
															[1, [2, "gameOver"]],
															[13]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 5587139517943232, [
											[17, S.prototype.d.ig, null, 0, !1, !1, !1, 7429410199303294, !1, [
													[4, 9]
												]],
											[-1, G.prototype.d.cf, null, 0, !1, !1, !1, 7410653558903799, !1]
										],
										[
											[11, Pb.prototype.e.bf, null, 370237008540852, !1, [
													[10, 0],
													[3, 1]
												]]
										],
										[
											[0, null, !1, null, 6277493338191385, [
													[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 0x7d56897cd9398, !1, [
															[11, "KeyNumber"],
															[8, 0],
															[7, [0, 2]]
														]]
												],
												[
													[18, L.prototype.e.CallFunction, null, 879130062835143, !1, [
															[1, [2, "callArray"]],
															[13]
														]],
													[-1, G.prototype.e.Ye, null, 0xe2c38668d3feb, !1, [
															[11, "Scores"],
															[7, [0, 1]]
														]]
												]
											],
											[0, null, !1, null, 923740546876838, [
													[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 6694160604668057, !1]
												],
												[
													[18, L.prototype.e.CallFunction, null, 8013694568451036, !1, [
															[1, [2, "gameOver"]],
															[13]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 6722594261009713, [
											[17, S.prototype.d.ig, null, 0, !1, !1, !1,
												0xf7701a9998007, !1, [
													[4, 10]
												]
											],
											[-1, G.prototype.d.cf, null, 0, !1, !1, !1, 0x68455b4639348, !1]
										],
										[
											[11, Pb.prototype.e.bf, null, 0x90f1bd6221bee, !1, [
													[10, 0],
													[3, 1]
												]]
										],
										[
											[0, null, !1, null, 9624181691669574, [
													[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 7868722077188207, !1, [
															[11, "KeyNumber"],
															[8, 0],
															[7, [0, 3]]
														]]
												],
												[
													[18, L.prototype.e.CallFunction, null, 0x9201b477f946f, !1, [
															[1, [2, "callArray"]],
															[13]
														]],
													[-1, G.prototype.e.Ye, null, 4940407182284028, !1, [
															[11, "Scores"],
															[7, [0, 1]]
														]]
												]
											],
											[0, null, !1, null, 7963306785768485, [
													[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 9207909083865164, !1]
												],
												[
													[18, L.prototype.e.CallFunction, null, 954228235620122, !1, [
															[1, [2, "gameOver"]],
															[13]
														]]
												]
											]
										]
									]
								]
							]
						]
					],
					[0, [!0, "Pin"], !1, null, 8441971617812107, [
							[-1, G.prototype.d.Ze, null, 0, !1, !1, !1, 8441971617812107, !1, [
									[1, [2, "Pin"]]
								]]
						],
						[],
						[
							[0, null, !1, null, 0xdc1438253c35, [
									[-1, G.prototype.d.jg, null, 1, !1, !1, !1, 96858292529569, !1]
								],
								[
									[13, Rb.prototype.e.lg, "Pin", 0x7026287ca2852, !1, [
											[4, 12],
											[3, 1]
										]],
									[14, Rb.prototype.e.lg, "Pin", 7317863239927652, !1, [
											[4, 12],
											[3, 1]
										]]
								],
								[
									[0, null, !1, null, 8972419371435955, [
											[7, Q.prototype.d.ra,
												null, 0, !1, !1, !1, 0x99491b1130955, !1, [
													[10, 0],
													[8, 0],
													[7, [2, "newScores"]]
												]
											]
										],
										[
											[7, Rb.prototype.e.lg, "Pin", 8976559472343786, !1, [
													[4, 12],
													[3, 1]
												]]
										]
									],
									[0, null, !1, null, 8620061757352417, [
											[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0x986a973086d0e, !1, [
													[10, 0],
													[8, 0],
													[7, [2, "bestScores"]]
												]]
										],
										[
											[7, Rb.prototype.e.lg, "Pin", 0xf0d1b70ce6508, !1, [
													[4, 12],
													[3, 1]
												]]
										]
									]
								]
							]
						]
					],
					[0, [!0, "Array"], !1, null, 8640809154507611, [
							[-1, G.prototype.d.Ze, null, 0, !1, !1, !1, 8640809154507611, !1, [
									[1, [2, "Array"]]
								]]
						],
						[],
						[
							[0, null, !1, null, 7789325500285382, [
									[-1, G.prototype.d.jg,
										null, 1, !1, !1, !1, 8700084673890872, !1
									]
								],
								[]
							],
							[0, null, !1, null, 5386870380270691, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 0xc08644b9701af, !1, [
											[1, [2, "callArray"]]
										]]
								],
								[],
								[
									[0, null, !1, null, 0xe1673b66f408a, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 6133236841333685, !1, [
													[11, "Difficulty"],
													[8, 0],
													[7, [2, "hard"]]
												]]
										],
										[],
										[
											[0, null, !1, null, 8453933993062514, [
													[-1, G.prototype.d.kg, null, 0, !1, !1, !1, 9457812202599134, !1, [
															[4, 32]
														]]
												],
												[
													[32, Q.prototype.e.kd, null, 7453323478404936, !1, [
															[3, 0]
														]]
												]
											],
											[0, null, !1, null, 0xb3e5be0ee8e9e, [
													[-1, G.prototype.d.kg,
														null, 0, !1, !1, !1, 462255992147868, !1, [
															[4, 31]
														]
													]
												],
												[
													[31, I.prototype.e.ng, null, 9636796943688756, !1, [
															[0, [0, 255]],
															[0, [0, 85]]
														]]
												]
											],
											[0, null, !1, null, 5623371226831667, [
													[-1, G.prototype.d.ek, null, 0, !1, !1, !1, 0xe7dbf170f03e8, !1, [
															[4, 31]
														]]
												],
												[
													[-1, G.prototype.e.Md, null, 0x7dda4411b0798, !1, [
															[0, [0, 0]]
														]],
													[31, I.prototype.e.ng, null, 554098781031705, !1, [
															[0, [0, 288]],
															[0, [0, 96]]
														]]
												]
											],
											[0, null, !1, null, 9012021501678898, [
													[-1, G.prototype.d.ek, null, 0, !1, !1, !1, 6144318663515542, !1, [
															[4, 32]
														]]
												],
												[
													[-1, G.prototype.e.Md, null, 440895774428172, !1, [
															[0, [0, 0]]
														]],
													[32, Q.prototype.e.kd, null, 0xdf4130e4c5bf7, !1, [
															[3, 1]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 4980965798132239, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 7694953252853948, !1, [
													[11, "Difficulty"],
													[8, 0],
													[7, [2, "normal"]]
												]]
										],
										[],
										[
											[0, null, !1, null, 8474033658234192, [
													[-1, G.prototype.d.kg, null, 0, !1, !1, !1, 8012363951495929, !1, [
															[4, 31]
														]]
												],
												[
													[31, I.prototype.e.ng, null, 7844433196184503, !1, [
															[0, [0, 288]],
															[0, [0, 96]]
														]]
												]
											]
										]
									]
								]
							],
							[0, null, !1, null, 8686644426571325, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 5438389512447778, !1, [
											[1, [2, "callArray"]]
										]]
								],
								[
									[16, O.prototype.e.mm, null, 0x9f91ad901641d, !1],
									[11, Pb.prototype.e.mg, null, 4631580003735795, !1, [
											[10, 1],
											[7, [23, "Playtime"]]
										]]
								],
								[
									[1, "randomNumber", 0, 0, !1, !1, 0x6387ae3f9732b, !1],
									[1, "tries", 0, 0, !1, !1, 6645511703368662, !1],
									[1, "i", 0, 0, !1, !1, 6687262680119267, !1],
									[0, null, !1, null, 0x982b052594be2, [
											[-1, G.prototype.d.Rm, null, 0, !0, !1, !1, 9497510135191380, !1],
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 9173747113664828, !1, [
													[11, "i"],
													[8, 2],
													[7, [20, 16, O.prototype.L.gk, !1, null]]
												]]
										],
										[
											[-1, G.prototype.e.Eb, null, 6076739906664161, !1, [
													[11, "randomNumber"],
													[7, [19, G.prototype.L.ki, [
																[0, 1],
																[0, 2],
																[0, 3],
																[0, 4],
																[0, 5],
																[0, 6]
															]]]
												]],
											[-1, G.prototype.e.Ye, null, 8639369179696786, !1, [
													[11, "tries"],
													[7, [0, 1]]
												]]
										],
										[
											[0, null, !1, null, 5809079283097301, [
													[16, O.prototype.d.om, null, 0, !1, !0, !1, 0xfe5b5a7c50e32, !1, [
															[7, [23, "randomNumber"]]
														]]
												],
												[
													[16, O.prototype.e.fk, null, 372005759276108, !1, [
															[0, [23, "i"]],
															[7, [23, "randomNumber"]]
														]],
													[-1, G.prototype.e.Ye, null, 7413650202244412, !1, [
															[11, "i"],
															[7, [0, 1]]
														]]
												]
											],
											[0, null, !1, null, 625203797833743, [],
												[
													[18, L.prototype.e.CallFunction,
														null, 7169776261036182, !1, [
															[1, [2, "display"]],
															[13]
														]
													]
												]
											]
										]
									]
								]
							],
							[0, null, !1, null, 0xfe5168511d357, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 7965635830819297, !1, [
											[1, [2, "display"]]
										]]
								],
								[
									[8, I.prototype.e.Jd, null, 6992036574127434, !1, [
											[0, [20, 16, O.prototype.L.re, !1, null, [
														[0, 0]
													]]]
										]],
									[9, I.prototype.e.Jd, null, 0xf9b4b5337096a, !1, [
											[0, [20, 16, O.prototype.L.re, !1, null, [
														[0, 1]
													]]]
										]],
									[10, I.prototype.e.Jd, null, 6724559465379147, !1, [
											[0, [20, 16, O.prototype.L.re, !1, null, [
														[0, 2]
													]]]
										]],
									[-1, G.prototype.e.Eb, null, 9650235232880248, !1, [
											[11, "KeyNumber"],
											[7, [19, G.prototype.L.ki, [
														[0, 1],
														[0, 2],
														[0, 3]
													]]]
										]]
								],
								[
									[0, null, !1, null, 0x9b1911a75af49, [],
										[
											[18, L.prototype.e.CallFunction, null, 0x7de0131631ea0, !1, [
													[1, [2, "display2"]],
													[13]
												]]
										]
									]
								]
							],
							[0, null, !1, null, 9693783748515452, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 0x4aff5dc597835, !1, [
											[1, [2, "display2"]]
										]]
								],
								[],
								[
									[0, null, !1, null, 9665276468868268, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 5985591869916569, !1, [
													[11, "KeyNumber"],
													[8, 0],
													[7, [0, 1]]
												]]
										],
										[
											[8, I.prototype.e.Jd, null, 5602789584475775, !1, [
													[0, [20, 16, O.prototype.L.re, !1, null, [
																[0,
																	3
																]
															]]]
												]]
										]
									],
									[0, null, !1, null, 0x7cf0ac3d8d740, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 8476787454719752, !1, [
													[11, "KeyNumber"],
													[8, 0],
													[7, [0, 2]]
												]]
										],
										[
											[9, I.prototype.e.Jd, null, 0xe2a84f11c6ff, !1, [
													[0, [20, 16, O.prototype.L.re, !1, null, [
																[0, 3]
															]]]
												]]
										]
									],
									[0, null, !1, null, 6800055872037527, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 0xaecbd9fb37b58, !1, [
													[11, "KeyNumber"],
													[8, 0],
													[7, [0, 3]]
												]]
										],
										[
											[10, I.prototype.e.Jd, null, 0xbd9039b510c37, !1, [
													[0, [20, 16, O.prototype.L.re, !1, null, [
																[0, 3]
															]]]
												]]
										]
									],
									[0, null, !1, null, 7056024660896587, [],
										[
											[18, L.prototype.e.CallFunction,
												null, 6890506994055235, !1, [
													[1, [2, "display3"]],
													[13]
												]
											]
										]
									]
								]
							],
							[0, null, !1, null, 6950933718298952, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 4798192361613694, !1, [
											[1, [2, "display3"]]
										]]
								],
								[],
								[
									[0, null, !1, null, 8663394825348919, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 5881177002831994, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 1]]
												]]
										],
										[
											[23, Q.prototype.e.G, null, 0xc0c554cd19990, !1, [
													[7, [2, "蓝"]]
												]],
											[24, Q.prototype.e.G, null, 7303455789848015, !1, [
													[7, [2, "蓝"]]
												]],
											[25, Q.prototype.e.G, null, 8768578915496488, !1, [
													[7, [2, "蓝"]]
												]],
											[26, Q.prototype.e.G,
												null, 7031854216744243, !1, [
													[7, [2, "蓝"]]
												]
											]
										],
										[
											[0, null, !1, null, 0x982af7e90b41, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 7977536601253371, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G, null, 9445654445314364, !1, [
															[7, [2, "蓝"]]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 6825174475771594, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 0x502ce5aee596f, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 2]]
												]]
										],
										[
											[23, Q.prototype.e.G, null, 5730075878648766, !1, [
													[7, [2, "灰"]]
												]],
											[24, Q.prototype.e.G, null, 8444507089458296, !1, [
													[7, [2, "灰"]]
												]],
											[25, Q.prototype.e.G,
												null, 6531548209622238, !1, [
													[7, [2, "灰"]]
												]
											],
											[26, Q.prototype.e.G, null, 0xd534c75be6e48, !1, [
													[7, [2, "灰"]]
												]]
										],
										[
											[0, null, !1, null, 8591783860461643, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0xcebd131d3f084, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G, null, 6876623544929754, !1, [
															[7, [2, "灰"]]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 0xc1e39086d9019, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 0xc4056233bcd1b, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 3]]
												]]
										],
										[
											[23, Q.prototype.e.G, null, 9062208446191696, !1, [
													[7, [2, "绿"]]
												]],
											[24, Q.prototype.e.G,
												null, 6939809555412224, !1, [
													[7, [2, "绿"]]
												]
											],
											[25, Q.prototype.e.G, null, 8675306970230173, !1, [
													[7, [2, "绿"]]
												]],
											[26, Q.prototype.e.G, null, 8095880149196917, !1, [
													[7, [2, "绿"]]
												]]
										],
										[
											[0, null, !1, null, 0x5b3c3a80f4d53, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0xe15378eb96b29, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G, null, 8204602645770895, !1, [
															[7, [2, "绿"]]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 6764358435446105, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 8598038767380951, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 4]]
												]]
										],
										[
											[23, Q.prototype.e.G,
												null, 0x97f39a929693c, !1, [
													[7, [2, "橙"]]
												]
											],
											[24, Q.prototype.e.G, null, 5432686420609454, !1, [
													[7, [2, "橙"]]
												]],
											[25, Q.prototype.e.G, null, 4696177914567475, !1, [
													[7, [2, "橙"]]
												]],
											[26, Q.prototype.e.G, null, 8330644690696087, !1, [
													[7, [2, "橙"]]
												]]
										],
										[
											[0, null, !1, null, 417160142289936, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 8424680743846317, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G, null, 9959837510232944, !1, [
															[7, [2, "橙"]]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 0x3bcbaa1a1b3e2, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 5918901137120827, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 5]]
												]]
										],
										[
											[23, Q.prototype.e.G, null, 8596005085570578, !1, [
													[7, [2, "紫"]]
												]],
											[24, Q.prototype.e.G, null, 6081417995517062, !1, [
													[7, [2, "紫"]]
												]],
											[25, Q.prototype.e.G, null, 9678604010013260, !1, [
													[7, [2, "紫"]]
												]],
											[26, Q.prototype.e.G, null, 0xb13902a8ed5bf, !1, [
													[7, [2, "紫"]]
												]]
										],
										[
											[0, null, !1, null, 0x6c5544b311905, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 9342729560286536, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G, null, 9155143158215472, !1, [
															[7, [2, "紫"]]
														]]
												]
											]
										]
									],
									[0, null, !1, null, 9048859850474114, [
											[16, O.prototype.d.Id, null, 0, !1, !1, !1, 0xffc93a3b38464, !1, [
													[0, [0, 3]],
													[8, 0],
													[7, [0, 6]]
												]]
										],
										[
											[23, Q.prototype.e.G, null, 0xee6708602a52b, !1, [
													[7, [2, "红"]]
												]],
											[24, Q.prototype.e.G, null, 9844743839886656, !1, [
													[7, [2, "红"]]
												]],
											[25, Q.prototype.e.G, null, 7352529073070874, !1, [
													[7, [2, "红"]]
												]],
											[26, Q.prototype.e.G, null, 0x69286bbc63b2, !1, [
													[7, [2, "红"]]
												]]
										],
										[
											[0, null, !1, null, 7616811988164142, [
													[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 7057351244731625, !1, [
															[10, 0],
															[8, 0],
															[7, [2, "colorText"]]
														]]
												],
												[
													[7, Q.prototype.e.G,
														null, 4516530729289332, !1, [
															[7, [2, "红"]]
														]
													]
												]
											]
										]
									]
								]
							]
						]
					],
					[0, [!0, "Functions"], !1, null, 0x876ba66eed1b7, [
							[-1, G.prototype.d.Ze, null, 0, !1, !1, !1, 0x876ba66eed1b7, !1, [
									[1, [2, "Functions"]]
								]]
						],
						[],
						[
							[0, null, !1, null, 0x8fdb1afe3ddc7, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 0xacda6b278af3, !1, [
											[1, [2, "gameOver"]]
										]]
								],
								[
									[-1, G.prototype.e.Eb, null, 9516975251481024, !1, [
											[11, "GameStarted"],
											[7, [0, 2]]
										]],
									[12, Z.prototype.e.Kd, "LiteTween", 6924718619163653, !1, [
											[3, 0],
											[3, 17],
											[1, [2, "480,192"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[12, Z.prototype.e.Ld, "LiteTween",
										7111480406952471, !1, [
											[3, 0]
										]
									],
									[21, I.prototype.e.kd, null, 7410633660586363, !1, [
											[3, 1]
										]]
								],
								[
									[0, null, !1, null, 5309292142993855, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 4579962001018656, !1, [
													[11, "Difficulty"],
													[8, 0],
													[7, [2, "normal"]]
												]]
										],
										[],
										[
											[0, null, !1, null, 7994503338441056, [
													[20, Qb.prototype.d.Yj, null, 0, !1, !1, !1, 0xd7a014090b004, !1, [
															[1, [2, "best"]]
														]]
												],
												[],
												[
													[0, null, !1, null, 0xa17ebb0706482, [
															[-1, G.prototype.d.Wj, null, 0, !1, !1, !1, 7731067053550823, !1, [
																	[7, [23, "Scores"]],
																	[8, 4],
																	[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																				[2, "best"]
																			]]]
																]]
														],
														[
															[20, Qb.prototype.e.og, null, 7583105775968165, !1, [
																	[1, [2, "best"]],
																	[7, [23, "Scores"]]
																]]
														],
														[
															[0, null, !1, null, 0xb6a8aa9409a2d, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 9800047063562072, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "newScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 5815398406955192, !1, [
																			[7, [23, "Scores"]]
																		]]
																]
															],
															[0, null, !1, null, 0xd47d9dff4a0d0, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 8951603444681373, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "bestScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 0x3de9d6099d3e8, !1, [
																			[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																						[2, "best"]
																					]]]
																		]]
																]
															]
														]
													],
													[0, null, !1, null, 4916000156302203, [
															[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 714565014631022, !1]
														],
														[],
														[
															[0, null, !1, null, 361875396447429, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 517025481009607, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "newScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 0xa270765cf4291, !1, [
																			[7, [23, "Scores"]]
																		]]
																]
															],
															[0, null, !1, null, 617341531902924, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0xc1172cd981f7d, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "bestScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 771614727351001, !1, [
																			[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																						[2, "best"]
																					]]]
																		]]
																]
															]
														]
													]
												]
											],
											[0, null, !1, null, 6365652712893844, [
													[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 7191336403875905, !1]
												],
												[
													[20, Qb.prototype.e.og, null, 719517865492856, !1, [
															[1, [2, "best"]],
															[7, [23, "Scores"]]
														]]
												],
												[
													[0, null, !1, null, 8663942819559056, [
															[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0x3fa68659398e6, !1, [
																	[10, 0],
																	[8, 0],
																	[7, [2, "newScores"]]
																]]
														],
														[
															[7, Q.prototype.e.G, null, 8178761934015836, !1, [
																	[7, [23, "Scores"]]
																]]
														]
													],
													[0, null, !1, null, 5215975589459935, [
															[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 6758997816049081, !1, [
																	[10, 0],
																	[8, 0],
																	[7, [2, "bestScores"]]
																]]
														],
														[
															[7,
																Q.prototype.e.G, null, 8164821597761773, !1, [
																	[7, [23, "Scores"]]
																]
															]
														]
													]
												]
											]
										]
									],
									[0, null, !1, null, 0x99a482c62bdc0, [
											[-1, G.prototype.d.eb, null, 0, !1, !1, !1, 0xc12844cecd60f, !1, [
													[11, "Difficulty"],
													[8, 0],
													[7, [2, "hard"]]
												]]
										],
										[],
										[
											[0, null, !1, null, 0xf78329c5bbe7, [
													[20, Qb.prototype.d.Yj, null, 0, !1, !1, !1, 5251743413407259, !1, [
															[1, [2, "best2"]]
														]]
												],
												[],
												[
													[0, null, !1, null, 8193949727855483, [
															[-1, G.prototype.d.Wj, null, 0, !1, !1, !1, 0xb4691ac772d43, !1, [
																	[7, [23, "Scores"]],
																	[8, 4],
																	[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																				[2, "best2"]
																			]]]
																]]
														],
														[
															[20, Qb.prototype.e.og,
																null, 6507677138940167, !1, [
																	[1, [2, "best2"]],
																	[7, [23, "Scores"]]
																]
															]
														],
														[
															[0, null, !1, null, 6547557286221333, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 8831495637189939, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "newScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 8157245859271645, !1, [
																			[7, [23, "Scores"]]
																		]]
																]
															],
															[0, null, !1, null, 38348855061106, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 7515165801496538, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "bestScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 0xb8d0c764a7d02, !1, [
																			[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																						[2, "best2"]
																					]]]
																		]]
																]
															]
														]
													],
													[0, null, !1, null,
														0xe8167e1c63662, [
															[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 6671065892193524, !1]
														],
														[],
														[
															[0, null, !1, null, 8096959452518194, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0x96873e3436dce, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "newScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 0xc7bb4586f9c77, !1, [
																			[7, [23, "Scores"]]
																		]]
																]
															],
															[0, null, !1, null, 0x5e2830cfe7f94, [
																	[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 6744641278325369, !1, [
																			[10, 0],
																			[8, 0],
																			[7, [2, "bestScores"]]
																		]]
																],
																[
																	[7, Q.prototype.e.G, null, 0xb9a27eaa932bb, !1, [
																			[7, [20, 20, Qb.prototype.L.ve, !0, null, [
																						[2, "best2"]
																					]]]
																		]]
																]
															]
														]
													]
												]
											],
											[0, null, !1, null, 0x97f28c067d138, [
													[-1, G.prototype.d.Kc, null, 0, !1, !1, !1, 7754067856632331, !1]
												],
												[
													[20, Qb.prototype.e.og, null, 5175424771934457, !1, [
															[1, [2, "best2"]],
															[7, [23, "Scores"]]
														]]
												],
												[
													[0, null, !1, null, 8362307862934636, [
															[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 9102265053425806, !1, [
																	[10, 0],
																	[8, 0],
																	[7, [2, "newScores"]]
																]]
														],
														[
															[7, Q.prototype.e.G, null, 0x55343e8aaabb8, !1, [
																	[7, [23, "Scores"]]
																]]
														]
													],
													[0, null, !1, null, 0xafca3b3a87618, [
															[7, Q.prototype.d.ra, null, 0, !1, !1, !1, 0xe1e1897ba70a0, !1, [
																	[10, 0],
																	[8, 0],
																	[7, [2, "bestScores"]]
																]]
														],
														[
															[7,
																Q.prototype.e.G, null, 9068392580518736, !1, [
																	[7, [23, "Scores"]]
																]
															]
														]
													]
												]
											]
										]
									],
									[0, null, !1, null, 0xb0fae75c5d7a3, [],
										[
											[-1, G.prototype.e.Md, null, 5819770185139888, !1, [
													[0, [1, 0.5]]
												]],
											[-1, G.prototype.e.Eb, null, 7587067994848604, !1, [
													[11, "GameStarted"],
													[7, [0, 3]]
												]]
										]
									]
								]
							],
							[0, null, !1, null, 5836646058805408, [
									[18, L.prototype.d.uc, null, 2, !1, !1, !1, 6072863258535008, !1, [
											[1, [2, "callReplay"]]
										]]
								],
								[
									[15, Z.prototype.e.Kd, "LiteTween", 9466152754703086, !1, [
											[3, 0],
											[3, 0],
											[1, [2, "480,240"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[15, Z.prototype.e.Ld, "LiteTween",
										5268729943591078, !1, [
											[3, 0]
										]
									],
									[-1, G.prototype.e.Md, null, 0x85b57d4abed79, !1, [
											[0, [1, 0.5]]
										]],
									[-1, G.prototype.e.Eb, null, 7259852798752024, !1, [
											[11, "Scores"],
											[7, [0, 0]]
										]],
									[18, L.prototype.e.CallFunction, null, 9280988077675144, !1, [
											[1, [2, "callArray"]],
											[13]
										]],
									[21, I.prototype.e.kd, null, 0x53048f21661d3, !1, [
											[3, 0]
										]],
									[12, Z.prototype.e.Kd, "LiteTween", 9715693393594942, !1, [
											[3, 0],
											[3, 17],
											[1, [2, "480,-168"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[12, Z.prototype.e.Ld, "LiteTween", 6470256855772349, !1, [
											[3, 0]
										]],
									[-1, G.prototype.e.Md, null, 337172373618389, !1, [
											[0, [1, 0.3]]
										]],
									[15, Z.prototype.e.Kd, "LiteTween", 8673212991903933, !1, [
											[3, 0],
											[3, 0],
											[1, [2, "480,720"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[15, Z.prototype.e.Ld, "LiteTween", 0x3f791a7cdccb7, !1, [
											[3, 0]
										]],
									[-1, G.prototype.e.Md, null, 6546806475258531, !1, [
											[0, [1, 0.5]]
										]],
									[11, Pb.prototype.e.bf, null, 5712960492847039, !1, [
											[10, 0],
											[3, 0]
										]],
									[11, Pb.prototype.e.mg, null, 7368626938406497, !1, [
											[10, 1],
											[7, [23, "Playtime"]]
										]],
									[-1, G.prototype.e.Eb, null, 0x648e3a26dccb9, !1, [
											[11, "GameStarted"],
											[7, [0, 1]]
										]]
								]
							],
							[0, null, !1, null, 5994170221041237, [
									[18,
										L.prototype.d.uc, null, 2, !1, !1, !1, 8361265736735303, !1, [
											[1, [2, "callMenu"]]
										]
									]
								],
								[
									[19, Z.prototype.e.Kd, "LiteTween", 926045456129422, !1, [
											[3, 0],
											[3, 0],
											[1, [2, "160,56"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[19, Z.prototype.e.Ld, "LiteTween", 0x8dd04847f912a, !1, [
											[3, 0]
										]],
									[12, Z.prototype.e.Kd, "LiteTween", 0xdc6919f0f3011, !1, [
											[3, 0],
											[3, 17],
											[1, [2, "480,-168"]],
											[0, [1, 0.5]],
											[3, 0]
										]],
									[12, Z.prototype.e.Ld, "LiteTween", 6440859944525654, !1, [
											[3, 0]
										]],
									[-1, G.prototype.e.Eb, null, 6519466515832563, !1, [
											[11, "Scores"],
											[7, [0, 0]]
										]],
									[11, Pb.prototype.e.bf,
										null, 0x89f20dd10fb2f, !1, [
											[10, 0],
											[3, 0]
										]
									],
									[11, Pb.prototype.e.mg, null, 4533189795012325, !1, [
											[10, 1],
											[7, [23, "Playtime"]]
										]],
									[21, I.prototype.e.kd, null, 9326716685431956, !1, [
											[3, 0]
										]]
								]
							]
						]
					]
				]],
			["Loader_Script", [
					[0, null, !1, null, 0xb005dd852f99d, [
							[-1, G.prototype.d.Xj, null, 0, !1, !1, !1, 8211891290424818, !1]
						],
						[
							[28, I.prototype.e.Th, null, 0x46d257f244c94, !1, [
									[0, [6, [19, G.prototype.L.ee],
											[0, 152]
										]]
								]]
						]
					],
					[0, null, !1, null, 6276709650793948, [
							[-1, G.prototype.d.Qh, null, 1, !1, !1, !1, 9851110681636020, !1]
						],
						[
							[-1, G.prototype.e.pm, null, 5011699104972973, !1, [
									[6, "Game"]
								]]
						]
					]
				]]
		], "media/", !0, 320, 480, 4, !1, !0, !0, "1.0.0.0", !0, !0, 3, 0, 39, !1, !0, []]
};