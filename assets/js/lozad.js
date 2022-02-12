!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.lozad = e());
})(this, function () {
  "use strict";
  var t =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      },
    e = "undefined" != typeof document && document.documentMode,
    r = {
      rootMargin: "0px",
      threshold: 0,
      load: function (t) {
        if ("picture" === t.nodeName.toLowerCase()) {
          var r = document.createElement("img");
          e &&
            t.getAttribute("data-iesrc") &&
            (r.src = t.getAttribute("data-iesrc")),
            t.getAttribute("data-alt") && (r.alt = t.getAttribute("data-alt")),
            t.appendChild(r);
        }
        if (
          "video" === t.nodeName.toLowerCase() &&
          !t.getAttribute("data-src") &&
          t.children
        ) {
          for (var o = t.children, a = void 0, n = 0; n <= o.length - 1; n++)
            (a = o[n].getAttribute("data-src")) && (o[n].src = a);
          t.load();
        }
        t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")),
          t.getAttribute("data-srcset") &&
            t.setAttribute("srcset", t.getAttribute("data-srcset")),
          t.getAttribute("data-background-image") &&
            (t.style.backgroundImage =
              "url('" + t.getAttribute("data-background-image") + "')"),
          t.getAttribute("data-toggle-class") &&
            t.classList.toggle(t.getAttribute("data-toggle-class"));
      },
      loaded: function () {},
    };
  function o(t) {
    t.setAttribute("data-loaded", !0);
  }
  var a = function (t) {
    return "true" === t.getAttribute("data-loaded");
  };
  return function () {
    var e,
      n,
      i =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : ".lozad",
      d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      c = t({}, r, d),
      u = c.root,
      s = c.rootMargin,
      g = c.threshold,
      l = c.load,
      f = c.loaded,
      b = void 0;
    return (
      window.IntersectionObserver &&
        (b = new IntersectionObserver(
          ((e = l),
          (n = f),
          function (t, r) {
            t.forEach(function (t) {
              (0 < t.intersectionRatio || t.isIntersecting) &&
                (r.unobserve(t.target),
                a(t.target) || (e(t.target), o(t.target), n(t.target)));
            });
          }),
          { root: u, rootMargin: s, threshold: g }
        )),
      {
        observe: function () {
          for (
            var t = (function (t) {
                var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : document;
                return t instanceof Element
                  ? [t]
                  : t instanceof NodeList
                  ? t
                  : e.querySelectorAll(t);
              })(i, u),
              e = 0;
            e < t.length;
            e++
          )
            a(t[e]) || (b ? b.observe(t[e]) : (l(t[e]), o(t[e]), f(t[e])));
        },
        triggerLoad: function (t) {
          a(t) || (l(t), o(t), f(t));
        },
        observer: b,
      }
    );
  };
});
