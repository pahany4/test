'use strict';

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, (function () {
    function e(e) { var t = !0, n = !1, o = null, d = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 }; function i(e) { return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList) } function s(e) { e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", "")) } function u(e) { t = !1 } function a() { document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c) } function c(e) { e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c)) } document.addEventListener("keydown", (function (n) { n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && s(e.activeElement), t = !0) }), !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", (function (e) { "hidden" === document.visibilityState && (n && (t = !0), a()) }), !0), a(), e.addEventListener("focus", (function (e) { var n, o, u; i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (u = n.tagName) && d[o] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && s(e.target) }), !0), e.addEventListener("blur", (function (e) { var t; i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout((function () { n = !1 }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added"))) }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", "")) } if ("undefined" != typeof window && "undefined" != typeof document) {
        var t; window.applyFocusVisiblePolyfill = e; try { t = new CustomEvent("focus-visible-polyfill-ready") } catch (e) { (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {}) } window.dispatchEvent(t)
    } "undefined" != typeof document && e(document)
}));
var slider = document.getElementById('slider');
var input = document.getElementById('ante__set');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

var Min = document.getElementById('Min');
var Max = document.getElementById('Max');
var Bank = document.getElementById('Bank');
var HalfBank = document.getElementById('HalfBank');

var infoButtons = document.querySelectorAll('.btn_info');

var quickLandingBtn = document.querySelector('.ante__set-quick-btn');

var min = 1000;
var max = 50000;
var bank = 2609;
if (slider) {
    input.addEventListener('input', function () {
        slider.value = input.value
    })
    slider.addEventListener('change', function () {
        input.value = slider.value
    })
    slider.addEventListener('input', function () {
        input.value = slider.value
    })


    input.addEventListener('input', function () {
        slider.noUiSlider.set(+input.value)
    })

    plus.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = +input.value + 1000;
        slider.value = +input.value;

    })

    minus.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = +input.value - 500;
        slider.value = +input.value;
    })
}


if (slider) {
    Min.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = min;
        slider.value = +input.value;
    })

    Max.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = max;
        slider.value = +input.value;
    })

    Bank.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = bank;
        slider.value = +input.value;
    })

    HalfBank.addEventListener('click', function (evt) {
        evt.preventDefault();
        input.value = bank / 2;
        slider.value = +input.value;
    })
}


(function () {

    if (infoButtons) {
        for (var i = 0; i < infoButtons.length; i++) {
            infoButtons[i].addEventListener('click', function (evt) {
                evt.preventDefault();
                var infoText = this.parentNode.querySelector(".quick-description");
                infoText.classList.toggle('visually-hidden')
            });
        }
    }
}

)();
(function () {
    if (quickLandingBtn) {
        quickLandingBtn.addEventListener('click', function (evt) {
            var settingsMore = document.querySelector('.settings-more')
            evt.preventDefault();
            settingsMore.classList.toggle('visually-hidden') // или класс с display: none
        })
    }
}
)()
