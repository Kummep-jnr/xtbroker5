// base
/*! For license information please see base.15e417a9.js.LICENSE.txt */
(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([[5974, 3842], {
    25160: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.popupRedirect = function(e) {
            var t = this.find("#redirectModal");
            this.check = function() {
                if (t.length) {
                    var i = !1;
                    o.ajax({
                        type: "GET",
                        dataType: "json",
                        cache: !1,
                        url: window.Routing.generate("front_webapi_branch_popup_redirect", {
                            _branch: window.Routing.globalDefaults._branch,
                            isKnowledgeBaseRelatedPage: window.Routing.globalDefaults.isKnowledgeBaseRelatedPage
                        }),
                        success: function(r) {
                            r.should_display && (t.find(".js-redirect-popup-title").html(r.modal_title),
                            t.find(".js-redirect-popup-content").html(r.modal_content),
                            t.find(".js-redirect-popup-btn-stay").html(r.modal_button_stay),
                            t.find(".js-redirect-popup-btn-yes").attr("href", r.redirect_url),
                            t.find(".js-redirect-popup-btn-yes").html(r.modal_button_redirect),
                            i = !0,
                            o(".js-redirect-popup-btn-stay").on("click", (function() {
                                var t = JSON.parse(o.cookie("xtbLanguageSettings"));
                                t.isUserSelection = !0,
                                n.g.updateLanguageSettingsCookie(e, t),
                                a()
                            }
                            )))
                        }
                    }).done((function() {
                        i && (t.addClass("open"),
                        document.body.style.overflowY = "hidden"),
                        a()
                    }
                    ))
                }
            }
            ;
            var a = function() {
                var t = e.custom.includes(window.location.hostname.replace("www.", "")) ? window.location.hostname : e.default
                  , n = "userPreviousBranchSymbol=" + window.Routing.globalDefaults._branch
                  , o = "; expires=" + new Date((new Date).getTime() + 31536e6).toGMTString()
                  , a = "; domain=".concat(t, "; path=/; SameSite=None; Secure");
                document.cookie = n + o + a
            };
            return this
        }
    }
    ,
    7806: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.riskWarningPopup = function(e) {
            var t = this;
            return t.show = function() {
                var n;
                o.ajax({
                    type: "GET",
                    cache: !1,
                    url: e.actionUrl,
                    data: {
                        mrkt: (n = "mrkt",
                        (location.search.split(n + "=")[1] || "").split("&")[0])
                    },
                    success: function(n) {
                        n && 1 != o.cookie(e.storageKey) && (t.find("#riskWarningModal").length < 1 && t.append(n),
                        t.find("#riskWarningModal").modal({
                            show: !0,
                            backdrop: "static",
                            keyboard: !1
                        }))
                    }
                })
            }
            ,
            o(document).on("hidden.bs.modal", "#riskWarningModal", (function() {
                o.cookie(e.storageKey, "1", {
                    expires: 3600
                })
            }
            )),
            this
        }
    }
    ,
    72576: () => {
        document.addEventListener("DOMContentLoaded", (function() {
            var n = document.querySelectorAll(".js-popup-component-open")
              , o = document.querySelectorAll(".js-component-popup-close")
              , a = document.querySelectorAll(".js-component-popup")
              , i = [];
            a.forEach((function(e) {
                i.push(e.id)
            }
            )),
            n.forEach((function(t) {
                return t.addEventListener("click", (function(t) {
                    t.currentTarget.classList.contains("js-popup-component-open") && i.forEach((function(n) {
                        t.preventDefault(),
                        t.currentTarget.classList.contains(n) && e(n)
                    }
                    ))
                }
                ))
            }
            )),
            o.forEach((function(e) {
                e.addEventListener("click", (function() {
                    event.stopPropagation(),
                    t(this)
                }
                ))
            }
            ))
        }
        )),
        document.addEventListener("openComponentPopup", (function(t) {
            e(t.detail.popupId)
        }
        )),
        document.addEventListener("adjustComponentPopup", (function(e) {
            var t = document.getElementById(e.detail.popupId)
              , n = t.querySelector(".js-component-popup-gradient-bottom")
              , o = t.querySelector(".js-component-popup-footer");
            o && (n.style.bottom = o.clientHeight + "px")
        }
        ));
        var e = function(e) {
            if (document.body.clientWidth != window.innerWidth) {
                var t = window.innerWidth - document.body.clientWidth + "px";
                "rtl" == window.getComputedStyle(document.querySelector("html")).direction ? document.body.style.paddingLeft = t : document.body.style.paddingRight = t
            }
            var n, o, a, i, r = document.getElementById(e), s = r.querySelector(".js-component-popup-popup"), c = r.querySelector(".js-component-popup-content"), l = r.querySelector(".js-component-popup-gradient-top"), u = r.querySelector(".js-component-popup-gradient-bottom"), d = r.querySelector(".js-component-popup-header"), f = r.querySelector(".js-component-popup-footer"), p = window.innerHeight;
            s.classList.add("animation"),
            r.classList.add("open"),
            requestAnimationFrame((function() {
                s.classList.remove("animation")
            }
            )),
            window.innerWidth < 992 ? (o = .6 * p - d.clientHeight - (f ? f.clientHeight : 0),
            n = c.clientHeight,
            a = r,
            i = !0,
            f && (u.style.bottom = f.clientHeight + "px"),
            l.style.top = d.clientHeight + "px",
            s.offsetHeight < .6 * p ? s.style.top = p - s.offsetHeight + "px" : s.style.top = "") : (o = c.offsetHeight,
            n = c.scrollHeight,
            a = c,
            s.style.top = ""),
            n > o && !u.classList.contains("show") && (u.style.opacity = 1,
            a.addEventListener("scroll", (function(e) {
                var t = e.target
                  , n = t.scrollHeight
                  , o = t.scrollTop
                  , a = t.clientHeight;
                (i ? c.getBoundingClientRect().top < d.clientHeight : o > 1) ? l.style.opacity = 1 : l.style.opacity = 0,
                Math.abs(n - a - o) < 1 ? u.style.opacity = 0 : u.style.opacity = 1
            }
            ))),
            document.body.style.overflowY = "hidden"
        }
          , t = function(e) {
            var t = document.querySelector(".js-header-navbar")
              , n = e.closest(".js-component-popup.open");
            n && n.classList.remove("open"),
            document.body.style.overflowY = "",
            document.body.style.paddingRight = null,
            document.body.style.paddingLeft = null,
            t.style.paddingRight = null,
            t.style.paddingLeft = null
        }
    }
    ,
    59686: (e, t, n) => {
        !function(e, t) {
            e(t).ready((function() {
                e("body").hasClass("browser-mobile") ? (e('[data-bs-toggle="tooltip"]').tooltip({
                    trigger: "click"
                }),
                e(window).click((function(t) {
                    if (["tooltip-inner", "tooltip-heading", "tooltip-wrapper", "tooltip-title"].some((function(e) {
                        return t.target.classList.contains(e)
                    }
                    )))
                        return !1;
                    e('[data-bs-toggle="tooltip"]').tooltip("hide")
                }
                ))) : e('[data-bs-toggle="tooltip"]').tooltip(),
                t.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(e) {
                    e.addEventListener("show.bs.tooltip", (function() {
                        e.dataset.bsTemplate && e.dataset.bsTemplate.includes("component-tooltip-bottomsheet") && t.body.classList.contains("browser-mobile") && (t.body.classList.add("disabled-scroll"),
                        e.addEventListener("hidden.bs.tooltip", (function() {
                            t.body.classList.remove("disabled-scroll")
                        }
                        )))
                    }
                    ))
                }
                ))
            }
            ))
        }(n(19755), document)
    }
    ,
    53532: (e, t, n) => {
        !function(e, t) {
            e.fn.xtbCookies = function(n, o) {
                var a = e(this)
                  , i = e("#cookieBar")
                  , r = a.find(".js-main")
                  , s = r.find(".js-show-settings")
                  , c = a.find(".js-settings")
                  , l = c.find(".js-toggle-section")
                  , u = c.find(".js-toggle-table")
                  , d = c.find(".js-save-settings")
                  , f = a.find(".js-accept-all")
                  , p = a.find(".js-reject-all")
                  , g = a.find(".js-switch");
                function m(e, t, n) {
                    e.toggleClass("active"),
                    e.hasClass("active") ? t.slideDown() : t.slideUp(400, (function() {
                        n && (t.find(".js-table").hide(),
                        t.find(".js-toggle-table").removeClass("active"))
                    }
                    ))
                }
                function h() {
                    var e = o.custom.includes(t.location.hostname.replace("www.", "")) ? t.location.hostname : o.default
                      , a = "xtbCookiesSettings=" + JSON.stringify(n)
                      , r = "; expires=" + new Date((new Date).getTime() + 31536e6).toGMTString()
                      , s = "; domain=".concat(e, "; path=/; SameSite=None; Secure");
                    document.cookie = a + r + s,
                    document.cookie = "xtbCookies=1" + r + s,
                    dataLayer.push({
                        event: "cookie_consent_choice"
                    }),
                    dataLayer.push({
                        event: "cookie_consent_update"
                    }),
                    i.hide()
                }
                function v() {
                    e.each(n, (function(e) {
                        n[e] = "granted"
                    }
                    )),
                    h(),
                    y()
                }
                function y() {
                    e.each(n, (function(e, t) {
                        var n = g.filter("[data-type=" + e + "]");
                        "granted" === t ? n.addClass("active") : n.removeClass("active")
                    }
                    ))
                }
                l.on("click", (function() {
                    var t = e(this)
                      , n = t.parent().find(".js-section");
                    m(t, n, !0)
                }
                )),
                u.on("click", (function() {
                    var t = e(this)
                      , n = t.parent().find(".js-table");
                    m(t, n, !1)
                }
                )),
                s.on("click", (function() {
                    r.hide(),
                    c.css("display", "flex")
                }
                )),
                f.on("click", (function() {
                    v()
                }
                )),
                p.on("click", (function() {
                    e.each(n, (function(e) {
                        "functionality_storage" !== e && (n[e] = "denied")
                    }
                    )),
                    h(),
                    y()
                }
                )),
                d.on("click", h),
                g.on("click", (function() {
                    var t = e(this)
                      , o = t.data("type");
                    t.hasClass("is-required") || (t.toggleClass("active"),
                    t.hasClass("active") ? n[o] = "granted" : n[o] = "denied")
                }
                )),
                e(t).on("cookies-show-settings", (function() {
                    r.hide(),
                    c.css("display", "flex")
                }
                )),
                e(t).on("cookies-accept-all", (function() {
                    v()
                }
                )),
                y()
            }
        }(n(19755), window)
    }
    ,
    49781: (e, t, n) => {
        var o, a = n(19755);
        o = a,
        n.g.updateCountrySelector = function(e) {
            var t = o("#languageModal");
            o("#languageSwitcher .js-language-flag-icon").addClass("flag-icon-" + e.isoCountryCode.toLowerCase()),
            o("#languageSwitcher .js-ml-language-branch").html(decodeURIComponent(e.country.replace(/\+/g, " "))),
            t.data("isoCountryCode", e.isoCountryCode.toLowerCase()),
            t.data("countryName", decodeURIComponent(e.country.replace(/\+/g, " "))),
            t.trigger("dataReady")
        }
        ,
        n.g.updateLanguageSettingsCookie = function(e, t) {
            var o = e.custom.includes(window.location.hostname.replace("www.", "")) ? window.location.hostname : e.default
              , a = "xtbLanguageSettings=" + JSON.stringify({
                language: t.language,
                country: encodeURIComponent(t.country),
                isoCountryCode: t.isoCountryCode,
                isUserSelection: t.isUserSelection,
                isCountrySelectorRedirection: t.isCountrySelectorRedirection
            })
              , i = "; expires=" + new Date((new Date).getTime() + 31536e6).toGMTString()
              , r = "; domain=".concat(o, "; path=/; SameSite=None; Secure");
            document.cookie = a + i + r,
            n.g.updateCountrySelector(t)
        }
    }
    ,
    22187: (e, t, n) => {
        "use strict";
        n(77090),
        n(73138);
        var o = n(19755);
        !function(e, t, n) {
            var a = e("body")
              , i = e(".js-overall-footer")
              , r = e(".component-disclaimer")
              , s = "riskWarning" + a.data("branch").toUpperCase()
              , c = !1;
            try {
                1 == sessionStorage.getItem(s) && r.hide()
            } catch (e) {
                1 == store.get(s) && r.hide()
            }
            e(".js-cookies-btn").on("click", (function() {
                o(n).trigger(e(this).data("event"))
            }
            ));
            var l = e(".js-info-popup");
            l.on("hide.bs.modal", (function() {
                store.set("infoPopup", 1)
            }
            ));
            try {
                1 !== store.get("infoPopup") && l.show()
            } catch (e) {
                l.modal("show")
            }
            if (n.getOS = function() {
                var e = n.navigator.userAgent
                  , t = n.navigator.platform
                  , o = null;
                return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "Mac OS"].indexOf(t) ? o = "Mac OS" : -1 !== ["iPhone", "iPad", "iPod", "iOS"].indexOf(t) ? o = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? o = "Windows" : /Android/.test(e) ? o = "Android" : !o && /(Linux|Ubuntu)/.test(t) && (o = "Linux"),
                o
            }
            ,
            (e.browser.mobile || "Mac OS" === getOS() && e(n).width() < 992) && a.addClass("browser-mobile"),
            n.scrollLock = function(e) {
                var o = t.querySelector("body")
                  , a = 0;
                e ? (a = n.scrollY,
                o.style.overflow = "hidden",
                o.style.position = "fixed",
                o.style.top = "-".concat(a, "px"),
                o.style.width = "100%",
                o.setAttribute("scrollY", "".concat(a))) : (a = parseInt(o.getAttribute("scrollY")),
                o.style.removeProperty("overflow"),
                o.style.removeProperty("position"),
                o.style.removeProperty("top"),
                o.style.removeProperty("width"),
                n.scrollTo({
                    top: a,
                    behavior: "instant"
                }))
            }
            ,
            e(n).on("change.marketingData create.adobe_unique_id load newBtnsLoaded", (function(t) {
                e(".js-dynamic-link").dynamicLink()
            }
            )),
            a.hasClass("int") && a.hasClass("browser-mobile")) {
                var u = n.getOS()
                  , d = e(n).prepareDynamicLink(a.data("app-url"))
                  , f = a.find(".js-change-url-on-mobile");
                "iOS" !== u && "Android" !== u || f.each((function() {
                    e(this).prop("href", d)
                }
                ))
            }
            function p() {
                i.css("padding-bottom", parseInt(i.css("padding-bottom")) + e(".js-warnings").outerHeight())
            }
            e.ajax({
                type: "GET",
                cache: !1,
                url: a.data("alert")
            }).done((function(t) {
                if (t.data.alert) {
                    var o = t.data.alert.slug
                      , a = t.data.alert.title
                      , i = e(".js-alert")
                      , r = i.find("a").attr("href");
                    i.find("p").html(a),
                    i.find("a").attr("href", r + "#" + o),
                    i.addClass("alert-show"),
                    i.css("height", i.outerHeight() + "px"),
                    i.addClass("alert-ready"),
                    p(),
                    e(n).on("resize", (function() {
                        p()
                    }
                    ))
                }
            }
            )),
            p(),
            e(n).on("resize load", (function() {
                i.removeAttr("style"),
                p()
            }
            )),
            t.addEventListener("keydown", (function(e) {
                "Tab" === e.key && (c = !0)
            }
            )),
            t.addEventListener("keyup", (function(e) {
                "Tab" === e.key && (c = !1)
            }
            )),
            t.addEventListener("focusin", (function(e) {
                c && "INPUT" === e.target.tagName && e.target.classList.add("focus-with-tab")
            }
            )),
            t.addEventListener("focusout", (function(e) {
                "INPUT" === e.target.tagName && e.target.classList.remove("focus-with-tab")
            }
            ))
        }(o, document, window)
    }
    ,
    88604: (e, t, n) => {
        "use strict";
        var o = n(69213)
          , a = n.n(o);
        n.g.$ = n.g.jQuery = n(19755),
        n.g.store = n(58971),
        n.g.Routing = a()
    }
    ,
    95103: (e, t, n) => {
        var o = n(19755)
          , a = {
            addToDataLayer: function(e, t) {
                try {
                    if ("undefined" != typeof dataLayer) {
                        var n = {
                            event: e
                        };
                        t && (n.value = t),
                        dataLayer.push(n)
                    }
                } catch (e) {}
            }
        };
        window.gtmDataLayer = a,
        function(e, t, n) {
            e(t).ready((function() {
                var t = e("body");
                e(".js-ib-page-aa").length > 0 && a.addToDataLayer("ib-start"),
                e(".js-menu-open-real-aa").click((function() {
                    a.addToDataLayer("button-real-menu")
                }
                )),
                e(".js-menu-open-demo-aa").click((function() {
                    a.addToDataLayer("button-demo-menu")
                }
                )),
                e(".js-kv-btn-aa-1").click((function() {
                    a.addToDataLayer("button1-cta-kv")
                }
                )),
                e(".js-kv-btn-aa-2").click((function() {
                    a.addToDataLayer("button2-cta-kv")
                }
                )),
                e(".js-rf-close-button").click((function() {
                    a.addToDataLayer("rf-close")
                }
                )),
                e(".js-df-close-button").click((function() {
                    a.addToDataLayer("demo-close")
                }
                )),
                e(".js-realform-platform-login-aa").click((function() {
                    a.addToDataLayer("rf-s11-platform")
                }
                )),
                e(".js-rf-login-co-aa").click((function() {
                    a.addToDataLayer("rf-s11a-co")
                }
                )),
                e(".js-login-xs-real-aa").click((function() {
                    a.addToDataLayer("login-xs-real")
                }
                )),
                e(".js-login-xs-demo-aa").click((function() {
                    a.addToDataLayer("login-xs-demo")
                }
                )),
                e(".js-login-xs-5-aa").click((function() {
                    a.addToDataLayer("login-xs-5")
                }
                )),
                e(".js-login-mt-real-aa").click((function() {
                    a.addToDataLayer("login-mt-real")
                }
                )),
                e(".js-login-mt-demo-aa").click((function() {
                    a.addToDataLayer("login-mt-demo")
                }
                )),
                e(".js-login-co-aa").click((function() {
                    a.addToDataLayer("login-co")
                }
                )),
                e(".js-xs-app-download-android-aa").click((function() {
                    a.addToDataLayer("xs-app-download-android")
                }
                )),
                e(".js-xs-app-download-ios-aa").click((function() {
                    a.addToDataLayer("xs-app-download-ios")
                }
                )),
                e(".js-gtm-market-news").click((function() {
                    a.addToDataLayer("Open Market News")
                }
                )),
                e(".js-gtm-market-news-list").on("click", ".js-gtm-market-news-single", (function() {
                    a.addToDataLayer("Open Market News")
                }
                )),
                e(".js-gtm-homepage-news-arrow").click((function() {
                    a.addToDataLayer("Arrow Market News")
                }
                )),
                e(".js-gtm-interested-education").click((function() {
                    a.addToDataLayer("Show More Education Window")
                }
                )),
                e(".js-gtm-interested-market-analyst").click((function() {
                    a.addToDataLayer("Show More Market Analyst")
                }
                )),
                e(".js-gtm-interested-webinars").click((function() {
                    a.addToDataLayer("Show More Webinars")
                }
                )),
                e(".js-gtm-homepag-special-offer-1").click((function() {
                    a.addToDataLayer("Middle LP1 Click")
                }
                )),
                e(".js-gtm-homepag-special-offer-2").click((function() {
                    a.addToDataLayer("Middle LP2 Click")
                }
                )),
                e(".js-gtm-homepag-special-offer-3").click((function() {
                    a.addToDataLayer("Middle LP3 Click")
                }
                )),
                e(".js-gtm-homepag-kv").click((function() {
                    a.addToDataLayer("TOP Baner LP Click")
                }
                )),
                e(".js-gtm-language-switcher").click((function() {
                    a.addToDataLayer("COUNTRY SELECTOR button")
                }
                )),
                e(".js-add-id-aa").on("click", (function() {
                    var t = e(this).attr("id");
                    a.addToDataLayer(t)
                }
                )),
                e(".js-gtm-search").click((function() {
                    a.addToDataLayer("TOP_Search")
                }
                )),
                e(".js-gtm-offer-box-green").click((function() {
                    a.addToDataLayer("Left_Button_Click")
                }
                )),
                e(".js-gtm-offer-box-blue").click((function() {
                    a.addToDataLayer("Middle_Button_Click")
                }
                )),
                e(".js-gtm-offer-box-orange").click((function() {
                    a.addToDataLayer("Right_Button_Click")
                }
                )),
                e(".js-gtm-instrument-link-hp-table").click((function() {
                    a.addToDataLayer("instrument_link_hp_table")
                }
                )),
                e(".js-gtm-watch-video").click((function() {
                    a.addToDataLayer("watch_video")
                }
                )),
                e(".js-gtm-share-facebook").click((function() {
                    a.addToDataLayer("share_facebook")
                }
                )),
                e(".js-gtm-share-twitter").click((function() {
                    a.addToDataLayer("share_twitter")
                }
                )),
                e(".js-gtm-share-linkedin").click((function() {
                    a.addToDataLayer("share_linkedin")
                }
                )),
                e(".js-gtm-header-menu-item").on("click", (function() {
                    a.addToDataLayer("navi_mainmenu", e(this).data("eventValue"))
                }
                )),
                e(".js-gtm-header-menu-list-item").on("click", (function() {
                    a.addToDataLayer("navi_mainmenu", e(this).data("eventValue"))
                }
                )),
                e(".js-gtm").on("click", (function() {
                    a.addToDataLayer(e(this).data("gtm-event"))
                }
                )),
                e(".js-instruments-table-with-search").on("click", ".js-gtm", (function() {
                    a.addToDataLayer(e(this).data("gtm-event"))
                }
                )),
                e(".js-global-search").on("click", ".js-gtm", (function() {
                    n.dataLayer.push({
                        event: "globalSearchTabChange",
                        tabName: e(this).data("gtm-event")
                    })
                }
                )),
                t.on("click", ".js-gtm-click-module", (function() {
                    n.dataLayer.push({
                        event: "ClickModule",
                        category: e(this).data("gtm-category"),
                        module_link: e(this).data("gtm-module-link"),
                        module_no: e(this).data("gtm-module-no"),
                        button_no: e(this).data("gtm-button-no"),
                        module_nr: e(this).data("gtm-module-nr"),
                        button_text: e(this).data("gtm-button-text"),
                        module_title: e(this).data("gtm-module-title")
                    })
                }
                )),
                t.on("click", ".js-gtm-expand-module", (function() {
                    e(this).hasClass("collapsed") || n.dataLayer.push({
                        event: "ExpandModule",
                        category: e(this).data("gtm-category"),
                        module_no: e(this).data("gtm-module-no"),
                        module_nr: e(this).data("gtm-module-nr"),
                        module_title: e(this).data("gtm-module-title"),
                        tab_no: e(this).data("gtm-tab-no"),
                        tab_title: e(this).data("gtm-tab-title")
                    })
                }
                )),
                t.on("click", ".js-gtm-instrument-click-module", (function() {
                    n.dataLayer.push({
                        event: "InstrumentClickModule",
                        category: e(this).data("gtm-category"),
                        module_no: e(this).data("gtm-module-no"),
                        module_nr: e(this).data("gtm-module-nr"),
                        module_title: e(this).data("gtm-module-title"),
                        instrument_name: e(this).data("gtm-instrument-name"),
                        instrument_link: e(this).data("gtm-instrument-link")
                    })
                }
                )),
                n.addEventListener("gtmSearchModule", (function(e) {
                    n.dataLayer.push({
                        event: "SearchModule",
                        category: e.detail.category,
                        module_no: e.detail.moduleNo,
                        module_nr: e.detail.moduleNr,
                        module_title: e.detail.moduleTitle,
                        search_query: e.detail.searchQuery
                    })
                }
                )),
                t.on("click", ".js-gtm-tab-change-module", (function() {
                    e(this).hasClass("collapsed") || n.dataLayer.push({
                        event: "TabChangeModule",
                        category: e(this).data("gtm-category"),
                        module_no: e(this).data("gtm-module-no"),
                        module_nr: e(this).data("gtm-module-nr"),
                        module_title: e(this).data("gtm-module-title"),
                        tab_no: e(this).data("gtm-tab-no"),
                        tab_title: e(this).data("gtm-tab-title")
                    })
                }
                ))
            }
            ))
        }(o, document, window)
    }
    ,
    11573: (e, t, n) => {
        n(19755)
    }
    ,
    7570: (e, t, n) => {
        var o, a, i, r, s, c = n(19755);
        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            l(e)
        }
        a = function(e) {
            for (var t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), o = 0; o < n.length; o++) {
                var a = n[o].split("=");
                t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "")
            }
            return t
        }
        ,
        i = function(e) {
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }
        ,
        r = function(e, t) {
            var n, o = [];
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var a = t ? t + "[" + n + "]" : n
                      , r = e[n];
                    a.length > 0 && o.push(null !== r && "object" === l(r) ? i(r) : encodeURIComponent(a) + "=" + encodeURIComponent(r))
                }
            return o.join("&")
        }
        ,
        s = function(e, t) {
            var n = e.match(/\?link=([^&]+)/);
            if (!n)
                return e;
            var i = function() {
                var e = ""
                  , t = null;
                if (store.get("marketingData"))
                    for (var n = ["affiliate_visit", "current_visit", "first_visit", "current_hit"], o = store.get("marketingData"), a = 0; a < n.length; a++) {
                        var i = n[a];
                        if (i in o && "tracking_url"in o[i] && -1 !== o[i].tracking_url.indexOf("?")) {
                            t = o[i].tracking_url;
                            break
                        }
                    }
                return null !== t && (e = t.split("?")[1]),
                e
            }()
              , s = a(i)
              , c = a(window.location.search)
              , l = s
              , u = decodeURIComponent(n[1]).split("?")[1];
            if (u) {
                var d = a(u);
                l = Object.assign(d, s)
            }
            c && c.auid ? l.auid = c.auid : void 0 === l.auid && void 0 !== o.cookie("adobe_unique_id") && (l.auid = o.cookie("adobe_unique_id"));
            var f = r(l)
              , p = decodeURIComponent(n[1])
              , g = p.split("?");
            return function(e, t) {
                if (!t)
                    return e;
                var n = t.data("utm-medium")
                  , o = t.data("link-id");
                if (!n)
                    return e;
                var a = {
                    utm_medium: n,
                    utm_campaign: "default",
                    link_id: o
                }
                  , i = r(a);
                return -1 !== e.indexOf(i) ? e : e + (e.indexOf("?") > 0 ? "&" : "?") + r(a)
            }(e = function(e, t, n) {
                null === n && (n = "");
                var o = new RegExp("\\b(" + t + "=).*?(&|#|$)");
                return e.search(o) >= 0 ? e.replace(o, "$1" + encodeURIComponent(n) + "$2") : (e = e.replace(/[?#]$/, "")) + (e.indexOf("?") > 0 ? "&" : "?") + t + "=" + encodeURIComponent(n)
            }(e, "link", p = g[0] + "?" + f), t)
        }
        ,
        (o = c).fn.prepareDynamicLink = function(e, t) {
            return s(e, t)
        }
        ,
        o.fn.dynamicLink = function() {
            this.each((function() {
                var e = o(this)
                  , t = e.attr("href");
                "undefined" !== l(t) && !1 !== t && e.attr("href", s(t, e))
            }
            ))
        }
    }
    ,
    45588: (e, t, n) => {
        var o, a = n(19755);
        o = a,
        document,
        function e() {
            void 0 !== o.cookie("adobe_unique_id") ? o(window).trigger("create.adobe_unique_id", {
                adobe_unique_id: o.cookie("adobe_unique_id")
            }) : window.sessionStorage && window.sessionStorage.getItem("adobe_unique_id") ? o(window).trigger("create.adobe_unique_id", {
                adobe_unique_id: window.sessionStorage.getItem("adobe_unique_id")
            }) : setTimeout(e, 100)
        }(),
        o.marketingData = function(e, t) {
            if (null !== store.get("marketingData")) {
                var n = {};
                n.data = store.get("marketingData"),
                window.sessionStorage && (n.data.adobe_unique_id = window.sessionStorage.getItem("adobe_unique_id")),
                o.ajax({
                    type: "POST",
                    url: e,
                    data: n,
                    complete: function(e, n) {
                        "function" == typeof t && t(e, n)
                    }
                })
            }
        }
    }
    ,
    29796: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.initializeLanguageSwitcherData = function(e, t, a) {
            var i = o.cookie("xtbLanguageSettings")
              , r = o.cookie("userPreviousBranchSymbol")
              , s = null;
            if (i && (s = JSON.parse(i)),
            s && s.hasOwnProperty("isCountrySelectorRedirection") && s.isCountrySelectorRedirection)
                return s.isCountrySelectorRedirection = !1,
                void n.g.updateLanguageSettingsCookie(e, s);
            s && s.isUserSelection && r === a ? n.g.updateCountrySelector(s) : n.g.updateLanguageSettingsCookie(e, t)
        }
    }
    ,
    60409: (e, t, n) => {
        !function(e, t) {
            e.fn.xtbMenu = function() {
                var n = e(".js-header")
                  , o = e("body")
                  , a = n.find(".js-menu-links")
                  , i = n.find(".js-menu-links-item")
                  , r = n.find(".js-menu-links-dropdown-background")
                  , s = n.find(".js-header-navbar-show-mobile-menu")
                  , c = n.find(".js-menu-mobile-hide-btn")
                  , l = n.find(".js-menu-mobile")
                  , u = n.find(".js-menu-mobile-backdrop")
                  , d = n.find(".js-menu-links-dropdown")
                  , f = n.find(".js-menu-user-action")
                  , p = n.hasClass("long-menu") ? 1439 : 1200
                  , g = null
                  , m = function() {
                    e(t).width() <= p ? e(".js-menu-mobile-accordion-btn").each((function() {
                        e(this).prop("disabled", !1).css("pointer-events", "auto")
                    }
                    )) : e(".js-menu-mobile-accordion-btn").each((function() {
                        e(this).prop("disabled", !0).css("pointer-events", "none")
                    }
                    ))
                };
                m(),
                d.each((function() {
                    var t = e(".menu-with-separated-border").find("li");
                    t.length > 1 && (t.closest(".js-menu-links-dropdown").addClass("column").css({
                        display: "grid"
                    }),
                    d.hide())
                }
                ));
                var h = function() {
                    u.stop(!0, !0).fadeOut(300),
                    l.removeClass("active"),
                    c.removeClass("active"),
                    o.css("overflow", ""),
                    o.removeClass("menu-active"),
                    f.show(),
                    c.removeClass("active")
                };
                u.on("click", (function(e) {
                    e.preventDefault(),
                    h()
                }
                )),
                s.on("click", (function(e) {
                    e.preventDefault(),
                    u.stop(!0, !0).fadeIn(300),
                    l.addClass("active"),
                    o.css("overflow", "hidden"),
                    o.addClass("menu-active"),
                    f.hide(),
                    c.addClass("active"),
                    gtmDataLayer.addToDataLayer("hamburger_click")
                }
                )),
                c.on("click", (function(e) {
                    e.preventDefault(),
                    h()
                }
                ));
                var v = function() {
                    var a = e(t).scrollTop();
                    n.toggleClass("scrolled", a > 0),
                    o.toggleClass("scrolled", a > 0)
                };
                v(),
                e(t).on("scroll", (function() {
                    v()
                }
                )),
                a.on("mouseleave", (function() {
                    r.stop(!0, !0).hide(),
                    g = null
                }
                ));
                var y = function() {
                    i.off(".menuItem")
                }
                  , b = function() {
                    t.innerWidth >= p ? (y(),
                    i.on("mouseenter.menuItem", (function(t) {
                        var n, o, s, c = e(t.currentTarget), l = i.index(c), u = c.find(".js-menu-links-dropdown");
                        c.find(".js-menu-links-dropdown").stop(!0, !0).fadeIn(300),
                        n = u.offset().left - a.offset().left,
                        o = u.outerWidth(),
                        s = c.find("li").length > 0 ? u.height() : 0,
                        null === g ? (r.css({
                            left: n,
                            width: o,
                            height: s
                        }),
                        r.stop(!0, !0).fadeIn(200)) : r.stop(!0, !0).animate({
                            left: n,
                            width: o,
                            height: s
                        }, 200),
                        g = l
                    }
                    )).on("mouseleave.menuItem", (function(t) {
                        e(t.currentTarget).find(".js-menu-links-dropdown").stop(!0, !0).hide()
                    }
                    ))) : y()
                };
                b(),
                e(t).on("resize", (function(t) {
                    var n = e(t.currentTarget);
                    b(),
                    g = null,
                    r.stop(!0, !0).hide(),
                    m(),
                    n.width() >= p && h()
                }
                ))
            }
        }(n(19755), window)
    }
    ,
    11971: (e, t, n) => {
        "use strict";
        var o = n(48191)
          , a = n(70712)
          , i = n.n(a)
          , r = n(96486)
          , s = ["placeholder", "title"];
        const c = {
            __name: "SearchInput",
            props: {
                translations: Object,
                crossImg: String,
                cssClassPrefix: String,
                closeModal: Function,
                handleInput: Function
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                o.iH)("")
                  , a = (0,
                o.iH)(null)
                  , i = function() {
                    window.dataLayer.push({
                        event: "globalSearchEnterPress"
                    })
                };
                return (0,
                o.bv)((function() {
                    var e = (0,
                    o.f3)("setSearchInput");
                    e && e(a.value)
                }
                )),
                function(r, c) {
                    var l = (0,
                    o.Q2)("html-safe");
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-input-wrapper"))
                    }, [(0,
                    o._)("div", {
                        class: (0,
                        o.C_)(e.cssClassPrefix + "-mobile-back"),
                        onClick: c[0] || (c[0] = function(t) {
                            return e.closeModal("closedOnMobile")
                        }
                        )
                    }, null, 2), (0,
                    o.wy)((0,
                    o._)("input", {
                        type: "text",
                        maxlength: "128",
                        ref_key: "searchInput",
                        ref: a,
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-input")),
                        placeholder: e.translations.placeholder,
                        title: e.translations.placeholder,
                        "onUpdate:modelValue": c[1] || (c[1] = function(e) {
                            return n.value = e
                        }
                        ),
                        onKeyup: (0,
                        o.D2)(i, ["enter"]),
                        onInput: c[2] || (c[2] = function(t) {
                            return e.handleInput()
                        }
                        )
                    }, null, 42, s), [[o.nr, n.value]]), (0,
                    o.wy)((0,
                    o._)("button", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-close-modal")),
                        onClick: c[3] || (c[3] = function(t) {
                            return e.closeModal("closedOnDesktop")
                        }
                        )
                    }, null, 2), [[l, e.crossImg]]), n.value.length ? (0,
                    o.wy)(((0,
                    o.wg)(),
                    (0,
                    o.iD)("button", {
                        key: 0,
                        onClick: c[4] || (c[4] = function(e) {
                            return n.value = "",
                            void t.handleInput()
                        }
                        ),
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-clear-input"))
                    }, null, 2)), [[l, e.crossImg]]) : (0,
                    o.kq)("v-if", !0)], 2)
                }
            }
        };
        var l = ["data-type", "data-gtm-event", "onClick"]
          , u = {
            key: 0
        }
          , d = {
            key: 1
        };
        const f = {
            __name: "ContextTabs",
            props: {
                cssClassPrefix: String,
                translations: Object,
                chevronImg: String,
                selectType: Function,
                activeContext: String,
                searchDebounce: Boolean,
                contextsData: Object,
                textDirectionTranslationModifier: String,
                isNavLoading: Boolean
            },
            setup: function(e, t) {
                var n = t.expose
                  , a = e
                  , i = (0,
                o.iH)(null)
                  , r = (0,
                o.iH)(null)
                  , s = (0,
                o.iH)(null)
                  , c = (0,
                o.iH)(!1)
                  , f = (0,
                o.iH)(!0)
                  , p = (0,
                o.iH)(!1)
                  , g = [{
                    elementIndex: 0,
                    offset: 0
                }]
                  , m = function(e) {
                    "left" === e ? h() : v()
                }
                  , h = function() {
                    if (g.length >= 2) {
                        2 === g.length && w("left", !1),
                        w("right", !0);
                        var e = g[g.length - 2].offset;
                        r.value.style.translate = "".concat(a.textDirectionTranslationModifier).concat(e, "px"),
                        g.pop()
                    }
                }
                  , v = function() {
                    for (var e = i.value.offsetWidth - s.value.offsetWidth, t = r.value.children.length, n = 0, o = g[g.length - 1].elementIndex; o < t; o++) {
                        var a = r.value.children[o];
                        if (n + a.offsetWidth > e && o > 1) {
                            var c = r.value.children[o - 1].offsetWidth;
                            return n = n - a.offsetWidth - c,
                            void y(o, t, e, n)
                        }
                        n += a.offsetWidth
                    }
                }
                  , y = function(e, t, n, o) {
                    var i = 0;
                    w("left", !0);
                    for (var s = e - 1; s < t; s++)
                        i += r.value.children[s].offsetWidth;
                    if (i <= n)
                        b(t);
                    else {
                        var c = g[g.length - 1].offset + o;
                        r.value.style.translate = "".concat(a.textDirectionTranslationModifier).concat(c, "px"),
                        g.push({
                            elementIndex: e - 2,
                            offset: c
                        })
                    }
                }
                  , b = function(e, t) {
                    var n = r.value.offsetWidth - i.value.offsetWidth;
                    w("right", !1),
                    r.value.style.translate = "".concat(a.textDirectionTranslationModifier).concat(n, "px"),
                    g.push({
                        elementIndex: e - 1,
                        offset: g[g.length - 1].offset + t
                    })
                }
                  , w = function(e, t) {
                    "left" === e ? c.value = t : f.value = t
                };
                return n({
                    handleTagsOverlayVisibility: function() {
                        r.value.offsetWidth <= i.value.offsetWidth ? p.value = !1 : (w("right", !0),
                        p.value = !0)
                    }
                }),
                function(t, n) {
                    var a = (0,
                    o.Q2)("html-safe");
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-tags-wrapper")),
                        ref_key: "tagsWrapperElement",
                        ref: i
                    }, [p.value ? ((0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        key: 0,
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-tags-horizontal-overlay"))
                    }, [(0,
                    o._)("div", {
                        class: (0,
                        o.C_)(["".concat(e.cssClassPrefix, "-chevron-wrapper"), "".concat(e.cssClassPrefix, "-chevron-wrapper-left"), {
                            visible: c.value
                        }])
                    }, [(0,
                    o.wy)((0,
                    o._)("div", {
                        class: (0,
                        o.C_)(["".concat(e.cssClassPrefix, "-chevron"), "".concat(e.cssClassPrefix, "-chevron-left")]),
                        onClick: n[0] || (n[0] = function(e) {
                            return m("left")
                        }
                        )
                    }, null, 2), [[a, e.chevronImg]])], 2), (0,
                    o._)("div", {
                        class: (0,
                        o.C_)(["".concat(e.cssClassPrefix, "-chevron-wrapper"), "".concat(e.cssClassPrefix, "-chevron-wrapper-right"), {
                            visible: f.value
                        }]),
                        ref_key: "chevronWrapperRightElement",
                        ref: s
                    }, [(0,
                    o.wy)((0,
                    o._)("div", {
                        class: (0,
                        o.C_)(["".concat(e.cssClassPrefix, "-chevron"), "".concat(e.cssClassPrefix, "-chevron-right")]),
                        onClick: n[1] || (n[1] = function(e) {
                            return m("right")
                        }
                        )
                    }, null, 2), [[a, e.chevronImg]])], 2)], 2)) : (0,
                    o.kq)("v-if", !0), (0,
                    o._)("ul", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-tags")),
                        ref_key: "widgetTagsElement",
                        ref: r
                    }, [((0,
                    o.wg)(!0),
                    (0,
                    o.iD)(o.HY, null, (0,
                    o.Ko)(e.contextsData, (function(t) {
                        return (0,
                        o.wg)(),
                        (0,
                        o.iD)("li", {
                            class: (0,
                            o.C_)(["".concat(e.cssClassPrefix, "-tag-wrapper"), {
                                active: t.name === e.activeContext
                            }])
                        }, [(0,
                        o._)("button", {
                            "data-type": t.name,
                            class: (0,
                            o.C_)(["".concat(e.cssClassPrefix, "-tag"), {
                                active: t.name === e.activeContext
                            }, {
                                "no-tag-results": 0 === t.count && e.searchDebounce
                            }, "js-gtm"]),
                            "data-gtm-event": "" === t.name ? "all" : "".concat(t.name),
                            onClick: function(n) {
                                return e.selectType(t.name)
                            }
                        }, ["" === t.name ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", u, (0,
                        o.zw)(e.translations.all), 1)) : ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", d, (0,
                        o.zw)(e.translations[t.name]), 1)), e.searchDebounce && !e.isNavLoading ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", {
                            key: 2,
                            class: (0,
                            o.C_)(e.cssClassPrefix + "-tag-count-pill")
                        }, (0,
                        o.zw)(t.count), 3)) : (0,
                        o.kq)("v-if", !0)], 10, l)], 2)
                    }
                    )), 256))], 2)], 2)
                }
            }
        }
          , p = {
            __name: "NoSearchResults",
            props: {
                cssClassPrefix: String,
                translations: Object,
                searchQuery: String
            },
            setup: function(e) {
                return function(t, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-no-results-wrapper"))
                    }, [(0,
                    o._)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-no-results-image-wrapper"))
                    }, null, 2), (0,
                    o._)("span", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-no-results-heading"))
                    }, (0,
                    o.zw)(e.translations.noResultTop) + ' "' + (0,
                    o.zw)(e.searchQuery) + '" ', 3), (0,
                    o._)("span", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-no-results-text"))
                    }, (0,
                    o.zw)(e.translations.noResultBottom), 3)], 2)
                }
            }
        };
        var g = [(0,
        o._)("div", {
            class: "loader"
        }, null, -1)];
        const m = {
            __name: "ResultsSectionLoader",
            props: {
                cssClassPrefix: String
            },
            setup: function(e) {
                return function(t, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-results-section-loader"))
                    }, g, 2)
                }
            }
        };
        var h = ["href", "onClick"]
          , v = ["data-first-letter"]
          , y = ["src"]
          , b = {
            key: 0
        }
          , w = {
            key: 1
        }
          , k = {
            key: 2
        }
          , C = {
            key: 0
        }
          , x = {
            key: 1
        }
          , _ = (0,
        o._)("span", {
            class: "icon"
        }, null, -1)
          , S = {
            class: "change-value"
        };
        const j = {
            __name: "SearchResults",
            props: {
                cssClassPrefix: String,
                translations: Object,
                globalSearchObject: Array,
                pageSize: Number,
                paginationValue: Number,
                activeContext: String,
                searchQuery: String
            },
            setup: function(e) {
                return function(t, n) {
                    return (0,
                    o.wg)(!0),
                    (0,
                    o.iD)(o.HY, null, (0,
                    o.Ko)(e.globalSearchObject, (function(t, n) {
                        return (0,
                        o.wg)(),
                        (0,
                        o.iD)("li", {
                            key: n
                        }, [n < e.pageSize * e.paginationValue ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("a", {
                            key: 0,
                            href: t.url,
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result")),
                            onClick: function(n) {
                                return o = e.searchQuery,
                                a = t.url,
                                void ("" !== o ? window.dataLayer.push({
                                    event: "globalSearchResultClicked",
                                    searchQuery: o,
                                    itemUrl: a
                                }) : window.dataLayer.push({
                                    event: "globalSearchDefaultResultClicked",
                                    itemUrl: a
                                }));
                                var o, a
                            }
                        }, [(0,
                        o._)("div", {
                            class: (0,
                            o.C_)(["".concat(e.cssClassPrefix, "-result-img"), t.imageUrl ? "" : "no-image"]),
                            "data-first-letter": t.header.slice(0, 1)
                        }, [(0,
                        o._)("img", {
                            alt: "",
                            class: (0,
                            o.C_)({
                                "image-padding": "instrument" !== t.searchContext
                            }),
                            height: "40",
                            width: "40",
                            onerror: "this.parentNode.className='global-search-result-img no-image';",
                            src: t.imageUrl
                        }, null, 10, y)], 10, v), (0,
                        o._)("div", {
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-name-wrapper"))
                        }, [(0,
                        o._)("div", {
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-name-and-type"))
                        }, [(0,
                        o._)("span", {
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-name"))
                        }, (0,
                        o.zw)(t.header), 3), t.badge ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", {
                            key: 0,
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-type"))
                        }, (0,
                        o.zw)(t.badge), 3)) : (0,
                        o.kq)("v-if", !0)], 2), (0,
                        o._)("div", {
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-description-wrapper"))
                        }, [(0,
                        o._)("span", {
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-description ").concat(t.direction))
                        }, (0,
                        o.zw)(t.description), 3), "" === e.activeContext ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("div", b, [t.description ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", {
                            key: 0,
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-description-dot"))
                        }, " • ", 2)) : (0,
                        o.kq)("v-if", !0), "menu" === t.searchContext ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", w, (0,
                        o.zw)(e.translations.subpage), 1)) : ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", k, (0,
                        o.zw)(e.translations["in-" + t.searchContext]), 1))])) : (0,
                        o.kq)("v-if", !0)], 2)], 2), "instrument" === t.searchContext ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("div", {
                            key: 0,
                            class: (0,
                            o.C_)("".concat(e.cssClassPrefix, "-result-price"))
                        }, [t.buy || 0 == t.buy ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", C, (0,
                        o.zw)(t.buy), 1)) : ((0,
                        o.wg)(),
                        (0,
                        o.iD)("span", x, "-")), t.change ? ((0,
                        o.wg)(),
                        (0,
                        o.iD)("small", {
                            key: 2,
                            class: (0,
                            o.C_)(t.change.cssClass)
                        }, [_, (0,
                        o._)("span", S, (0,
                        o.zw)(t.change.percent), 1)], 2)) : (0,
                        o.kq)("v-if", !0)], 2)) : (0,
                        o.kq)("v-if", !0)], 10, h)) : (0,
                        o.kq)("v-if", !0)])
                    }
                    )), 128)
                }
            }
        }
          , L = {
            __name: "ResultsLoader",
            props: {
                cssClassPrefix: String
            },
            setup: function(e) {
                return function(t, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-results-loader"))
                    }, [(0,
                    o._)("div", {
                        alt: "",
                        class: (0,
                        o.C_)("".concat(e.cssClassPrefix, "-loader-icon"))
                    }, null, 2)], 2)
                }
            }
        };
        var D = n(19755);
        function P(e) {
            return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            P(e)
        }
        function T(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = I(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, r = !0, s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return r = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    i = e
                },
                f: function() {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e))
                    return E(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || I(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function I(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
            }
        }
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    M(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function M(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== P(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" !== P(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === P(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var H = {
            key: 0,
            class: "global-search-background"
        }
          , U = "global-search";
        const A = {
            __name: "App",
            props: {
                websocketClient: Object,
                translations: Object,
                apiUrl: Object,
                currentBranch: String,
                currentLanguage: String,
                chevronImg: String,
                crossImg: String,
                intercomArticleImg: String,
                knowledgeBaseImg: String,
                subpageImg: String,
                globalSearch: String
            },
            setup: function(e) {
                window.dataLayer = window.dataLayer || [];
                var t = e
                  , n = document.querySelectorAll(".open-global-search-btn")
                  , a = (0,
                o.iH)(null)
                  , i = (0,
                o.iH)(null)
                  , s = (0,
                o.iH)(!1)
                  , l = (0,
                o.iH)(!1)
                  , u = (0,
                o.iH)(!1)
                  , d = (0,
                o.iH)(!1)
                  , g = (0,
                o.iH)(null)
                  , h = (0,
                o.iH)()
                  , v = (0,
                o.iH)("")
                  , y = (0,
                o.iH)("")
                  , b = (0,
                o.iH)(1)
                  , w = (0,
                o.iH)([])
                  , k = (0,
                o.iH)([])
                  , C = (0,
                o.iH)([])
                  , x = (0,
                o.iH)([])
                  , _ = (0,
                o.iH)(null)
                  , S = (0,
                o.iH)(null)
                  , P = (0,
                o.iH)(!1)
                  , I = (0,
                o.iH)(0)
                  , E = (0,
                o.iH)(null)
                  , R = (0,
                o.iH)(document.querySelector(".js-header").clientHeight)
                  , M = {}
                  , A = void 0
                  , W = ""
                  , N = []
                  , B = window.innerWidth;
                (0,
                o.JJ)("setSearchInput", (function(e) {
                    g.value = e
                }
                ));
                var z = function(e) {
                    "rtl" === document.body.dir && (/[^ -~]/.test(e.description) ? e.direction = "rtl" : e.direction = "ltr")
                }
                  , Q = function() {
                    w.value.forEach((function(e) {
                        e.customData && !N.includes(e.customData.xStationInstrumentSymbol) && N.push(e.customData.xStationInstrumentSymbol)
                    }
                    )),
                    N.length && (M.send(JSON.stringify({
                        reqId: "getAndSubscribeElement",
                        command: {
                            CoreAPI: {
                                endpoint: t.websocketClient.endpoint,
                                accountId: t.websocketClient.accountId,
                                getAndSubscribeElement: {
                                    eid: 2,
                                    keys: N
                                }
                            }
                        }
                    })),
                    M.send(JSON.stringify({
                        reqId: "getElement",
                        command: {
                            CoreAPI: {
                                endpoint: t.websocketClient.endpoint,
                                accountId: t.websocketClient.accountId,
                                getElement: {
                                    eid: 1005,
                                    keys: N
                                }
                            }
                        }
                    })))
                }
                  , F = function(e, t) {
                    var n = {
                        percent: "0%",
                        cssClass: ""
                    };
                    return 0 === e ? n : t ? (t > e ? (n.percent = "-" + ((t - e) / e * 100).toFixed(2) + "%",
                    n.cssClass = "down") : t < e && (n.percent = "+" + ((e - t) / e * 100).toFixed(2) + "%",
                    n.cssClass = "up"),
                    n) : n
                }
                  , G = function(e, t) {
                    var n = t.value.xcfdtick;
                    return e.buy = parseFloat(n.bid.toFixed(4)),
                    e.close1day && (e.change = F(e.buy, e.close1day)),
                    e
                }
                  , J = function(e) {
                    if (d.value = !0,
                    v.value = e,
                    b.value = 1,
                    w.value = [],
                    k.value = [],
                    y.value.length > 1)
                        return y.value !== W ? (W = y.value,
                        P.value = !0,
                        S.value = !0,
                        void Promise.all([V(), K(e)]).then((function() {
                            var e;
                            P.value = !1,
                            d.value = !1,
                            e = {},
                            C.value.forEach((function(t) {
                                var n = "" === t.name ? "all" : t.name;
                                e[n] = t.count
                            }
                            )),
                            0 === w.value.length ? window.dataLayer.push({
                                event: "globalSearchNoResults",
                                query: y.value
                            }) : "" !== y.value && window.dataLayer.push({
                                event: "globalSearchInputQuery",
                                query: y.value,
                                count: e
                            }),
                            i.value && Z.observe(i.value)
                        }
                        ))) : void Promise.all([V(), K(e)]).then((function() {
                            d.value = !1,
                            S.value = !0,
                            i.value && Z.observe(i.value)
                        }
                        ));
                    $(e).then((function() {
                        1 === M.readyState && Q()
                    }
                    )),
                    Z.disconnect(),
                    S.value = !1
                }
                  , Y = (0,
                r.debounce)((function() {
                    !function() {
                        if (y.value.length > 1 && g.value.value.length <= 1)
                            return v.value = "",
                            k.value = [],
                            $(v.value).then((function() {
                                1 === M.readyState && Q()
                            }
                            )),
                            Z.disconnect(),
                            y.value = "",
                            void (S.value = !1);
                        y.value = g.value.value
                    }(),
                    y.value.length <= 1 || (w.value = [],
                    J(""))
                }
                ), 500)
                  , V = function() {
                    return new Promise((function(e) {
                        D.ajax({
                            type: "GET",
                            async: !0,
                            data: {
                                branch: t.currentBranch,
                                language: t.currentLanguage,
                                query: y.value
                            },
                            cache: !0,
                            url: t.apiUrl.searchablesContext
                        }).done((function(t) {
                            var n;
                            C.value.length ? C.value = C.value.map((function(e) {
                                var n = t.findIndex((function(t) {
                                    return t.name === e.name
                                }
                                ));
                                if (e.isCategory && -1 !== n)
                                    return q(q({}, e), {}, {
                                        count: t[n].count
                                    })
                            }
                            )) : (n = C.value).push.apply(n, O(t.filter((function(e) {
                                return e.isCategory
                            }
                            ))));
                            P.value = !1,
                            e()
                        }
                        ))
                    }
                    ))
                }
                  , $ = function(e) {
                    return new Promise((function(n) {
                        D.ajax({
                            type: "GET",
                            data: {
                                branch: t.currentBranch,
                                language: t.currentLanguage,
                                query: y.value,
                                searchContext: e
                            },
                            async: !0,
                            cache: !0,
                            url: t.apiUrl.defaultSearchables
                        }).done((function(e) {
                            var t, o = T(e);
                            try {
                                for (o.s(); !(t = o.n()).done; ) {
                                    var a = t.value;
                                    z(a),
                                    k.value.push(a),
                                    w.value = k.value
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            d.value = !1,
                            n()
                        }
                        ))
                    }
                    ))
                }
                  , K = function(e) {
                    return new Promise((function(n) {
                        var o = D.ajax({
                            type: "GET",
                            data: {
                                page: b.value,
                                pageSize: 6,
                                branch: t.currentBranch,
                                language: t.currentLanguage,
                                query: y.value,
                                searchContext: e
                            },
                            async: !0,
                            cache: !0,
                            url: t.apiUrl.searchables
                        }).done((function(e) {
                            if (y.value.length && (!A || o === A)) {
                                var t, a = T(e);
                                try {
                                    for (a.s(); !(t = a.n()).done; ) {
                                        var i = t.value;
                                        z(i),
                                        w.value.push(i)
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                                Q(),
                                b.value++
                            }
                            n()
                        }
                        ));
                        A = o
                    }
                    ))
                }
                  , X = {
                    delay: 100,
                    root: document.querySelector(".global-search-results"),
                    threshold: [0]
                }
                  , Z = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        e.isIntersecting && (Z.disconnect(),
                        u.value = !0,
                        K(v.value).then((function() {
                            x.value = C.value.find((function(e) {
                                return e.name === v.value
                            }
                            )),
                            u.value = !1,
                            i.value && 6 * (b.value - 1) < x.value.count ? Z.observe(i.value) : Z.disconnect()
                        }
                        )),
                        b.value > 2 && window.dataLayer.push({
                            event: "globalSearchResultsPagination",
                            pagination: b.value
                        }))
                    }
                    ))
                }
                ),X)
                  , ee = function(e, t) {
                    var n = document.querySelector(".js-warnings");
                    [document.body, n].forEach((function(n) {
                        n.style[e] = t
                    }
                    ))
                }
                  , te = function(e) {
                    l.value = !1,
                    d.value = !1,
                    P.value = !1,
                    u.value = !1,
                    b.value = 1,
                    Z.disconnect(),
                    y.value = "",
                    w.value = [],
                    k.value = [],
                    document.body.classList.remove("modal-show"),
                    document.body.removeEventListener("click", ne),
                    function(e) {
                        var t = (new Date).getTime();
                        window.dataLayer.push({
                            event: "globalSearchCloseModal",
                            closingMethod: e
                        }),
                        I.value = t,
                        E.value = e
                    }(e),
                    ee("paddingRight", null),
                    ee("paddingLeft", null)
                }
                  , ne = function(e) {
                    window.innerWidth > 766 && a.value && !a.value.contains(e.target) && te("clickOutsideModal")
                }
                  , oe = function() {
                    M.addEventListener("open", (function() {
                        M.send(JSON.stringify({
                            reqId: "logonRestricted",
                            command: {
                                CoreAPI: {
                                    endpoint: t.websocketClient.endpoint,
                                    logonRestricted: {
                                        user: t.websocketClient.user,
                                        accessCode: t.websocketClient.accessCode
                                    }
                                }
                            }
                        })),
                        M.addEventListener("message", (function(e) {
                            var t = JSON.parse(e.data);
                            "logonRestricted" === t.reqId && Q(),
                            "getAndSubscribeElement" === t.reqId && w.value.forEach((function(e) {
                                t.response[0].element && t.response[0].element.elements && t.response[0].element.elements.forEach((function(t) {
                                    e.customData && e.customData.xStationInstrumentSymbol === t.value.xcfdtick.key && G(e, t)
                                }
                                ))
                            }
                            )),
                            "getElement" === t.reqId && w.value.forEach((function(e) {
                                t.response[0].element && t.response[0].element.elements && t.response[0].element.elements.forEach((function(t) {
                                    e.customData && t.value.xcloseprice.key === e.customData.xStationInstrumentSymbol && function(e, t) {
                                        var n = t.value.xcloseprice;
                                        n.key === e.customData.xStationInstrumentSymbol && (e.close1day = n.close1day.toFixed(4),
                                        e.change = F(e.buy, e.close1day))
                                    }(e, t)
                                }
                                ))
                            }
                            )),
                            w.value.forEach((function(e) {
                                e.customData && t.events && e.customData.xStationInstrumentSymbol === t.events[0].row.value.xcfdtick.key && G(e, t.events[0].row)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                };
                return n.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        l.value || (M = new WebSocket(t.websocketClient.url),
                        oe(),
                        d.value = !0,
                        P.value = !0,
                        V().then((function() {
                            _.value = "ltr" === getComputedStyle(a.value).direction ? "-" : "",
                            h.value.handleTagsOverlayVisibility()
                        }
                        )),
                        J(""),
                        function() {
                            if (document.body.clientWidth != window.innerWidth) {
                                var e = window.innerWidth - document.body.clientWidth + "px"
                                  , t = "rtl" === window.getComputedStyle(document.querySelector("html")).direction ? "paddingLeft" : "paddingRight";
                                ee(t, e)
                            }
                        }(),
                        document.body.classList.add("modal-show"),
                        l.value = !0,
                        requestAnimationFrame((function() {
                            g.value.focus(),
                            document.body.addEventListener("click", ne)
                        }
                        )),
                        function() {
                            if (window.dataLayer.push({
                                event: "globalSearchOpenModal"
                            }),
                            0 !== I.value) {
                                var e = ((new Date).getTime() - I.value) / 1e3;
                                window.dataLayer.push({
                                    event: "globalSearchModalOpenAgain",
                                    closingMethod: E.value,
                                    timeAfterOpenModalAgain: e
                                }),
                                I.value = 0
                            }
                        }())
                    }
                    ))
                }
                )),
                function(t, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)(o.HY, null, [(0,
                    o.Wm)(o.uT, {
                        name: "fade-animation"
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [l.value ? ((0,
                            o.wg)(),
                            (0,
                            o.iD)("div", H)) : (0,
                            o.kq)("v-if", !0)]
                        }
                        )),
                        _: 1
                    }), (0,
                    o.Wm)(o.uT, {
                        name: "slide-animation"
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [l.value ? ((0,
                            o.wg)(),
                            (0,
                            o.iD)("div", {
                                key: 0,
                                class: (0,
                                o.C_)("".concat(U)),
                                id: "globalSearchModal",
                                tabindex: "-1",
                                style: (0,
                                o.j5)([(0,
                                o.SU)(B) >= 767 ? {
                                    top: R.value + "px"
                                } : {
                                    top: "0px"
                                }])
                            }, [(0,
                            o._)("div", {
                                class: (0,
                                o.C_)(["".concat(U, "-wrapper"), {
                                    active: s.value
                                }]),
                                ref_key: "globalSearchWrapper",
                                ref: a
                            }, [(0,
                            o._)("div", {
                                class: (0,
                                o.C_)("".concat(U, "-scroll"))
                            }, [(0,
                            o.Wm)((0,
                            o.SU)(c), {
                                cssClassPrefix: U,
                                crossImg: e.crossImg,
                                translations: e.translations,
                                closeModal: te,
                                handleInput: (0,
                                o.SU)(Y)
                            }, null, 8, ["crossImg", "translations", "handleInput"]), (0,
                            o.Wm)((0,
                            o.SU)(f), {
                                cssClassPrefix: U,
                                translations: e.translations,
                                chevronImg: e.chevronImg,
                                selectType: J,
                                activeContext: v.value,
                                searchDebounce: S.value,
                                contextsData: C.value,
                                isNavLoading: P.value,
                                textDirectionTranslationModifier: _.value,
                                ref_key: "contentTabsWrapper",
                                ref: h
                            }, null, 8, ["translations", "chevronImg", "activeContext", "searchDebounce", "contextsData", "isNavLoading", "textDirectionTranslationModifier"]), (0,
                            o._)("div", {
                                class: (0,
                                o.C_)("".concat(U, "-results-wrapper"))
                            }, [0 !== w.value.length || d.value ? (0,
                            o.kq)("v-if", !0) : ((0,
                            o.wg)(),
                            (0,
                            o.j4)((0,
                            o.SU)(p), {
                                key: 0,
                                cssClassPrefix: U,
                                translations: e.translations,
                                searchQuery: y.value
                            }, null, 8, ["translations", "searchQuery"])), d.value ? ((0,
                            o.wg)(),
                            (0,
                            o.j4)((0,
                            o.SU)(m), {
                                key: 1,
                                cssClassPrefix: U
                            })) : (0,
                            o.kq)("v-if", !0), w.value.length > 0 ? ((0,
                            o.wg)(),
                            (0,
                            o.iD)("ul", {
                                key: 2,
                                class: (0,
                                o.C_)("".concat(U, "-results"))
                            }, [(0,
                            o.Wm)((0,
                            o.SU)(j), {
                                cssClassPrefix: U,
                                translations: e.translations,
                                globalSearchObject: w.value,
                                pageSize: 6,
                                paginationValue: b.value,
                                activeContext: v.value,
                                searchQuery: y.value
                            }, null, 8, ["translations", "globalSearchObject", "paginationValue", "activeContext", "searchQuery"]), u.value && 6 * b.value < x.value.count ? ((0,
                            o.wg)(),
                            (0,
                            o.j4)((0,
                            o.SU)(L), {
                                key: 0,
                                cssClassPrefix: U
                            })) : (0,
                            o.kq)("v-if", !0), (0,
                            o._)("div", {
                                class: (0,
                                o.C_)("".concat(U, "-anchor")),
                                ref_key: "observerAnchor",
                                ref: i
                            }, null, 2)], 2)) : (0,
                            o.kq)("v-if", !0)], 2)], 2)], 2)], 6)) : (0,
                            o.kq)("v-if", !0)]
                        }
                        )),
                        _: 1
                    })], 64)
                }
            }
        };
        n.g.createGlobalSearchApp = function(e, t) {
            var n = (0,
            o.ri)(A, t);
            n.use(i()),
            n.mount(e)
        }
    }
    ,
    20794: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.language = function(e, t) {
            var a, i, r = o(this), s = r.find(".js-ml-step-1"), c = r.find(".js-ml-step-2"), l = r.find(".js-ml-save"), u = r.find(".js-ml-confirm"), d = r.find(".js-ml-country"), f = r.find(".js-ml-country-list"), p = r.find(".js-ml-country-row"), g = r.find(".js-ml-country-input"), m = r.find(".js-ml-languages"), h = r.find(".js-ml-language"), v = r.find(".js-ml-language-back"), y = r.find(".js-ml-language-confirm"), b = ["cy", "hu"], w = r.find(".js-confirm-text"), k = r.find(".js-component-popup-close"), C = r.find(".js-component-popup-popup"), x = {}, _ = function(e) {
                var n = "";
                o.each(e, (function(e, o) {
                    x[o.isoLanguageCode] = o.translatedLanguage,
                    n += '\n                    <label class="ml-radio">\n                        <input type="radio" name="language" class="js-ml-radio-input" value="'.concat(o.isoLanguageCode, '" ').concat(t === o.branch ? "checked" : "", '\n                            data-branch="').concat(o.branch, '"\n                            data-url="').concat(o.url, '"\n                            data-language="').concat(o.language, '"\n                            data-branch-name="').concat(o.branchTitle, '">\n                        <strong>').concat(o.translatedLanguage, "</strong><br>\n                        ").concat(o.branchTitle, "\n                    </label>")
                }
                )),
                m.html(n),
                C.removeClass("loading");
                var a = r.find(".js-ml-radio-input");
                a.is(":checked") || a.first().prop("checked", !0),
                D()
            }, S = function(e) {
                s.removeClass("show-country-selector"),
                s.addClass("show-save-button"),
                d.find(".js-ml-country-html").html(a),
                C.addClass("loading"),
                e && o.ajax({
                    url: "/web-api/v2/language-switch-options?isoCountryCode=" + e,
                    type: "GET",
                    dataType: "json",
                    success: _,
                    error: function() {
                        return "error"
                    }
                })
            }, j = function() {
                var t, a, i, s = m.find("input[type=radio]:checked").data("language"), c = m.find("input[type=radio]:checked").data("branch");
                p.filter(".selected").length ? (a = p.filter(".selected").data("isoCountryCode"),
                t = p.filter(".selected").find(".js-ml-country-text").text()) : (a = r.data("isoCountryCode"),
                t = d.find(".js-ml-country-text").text()),
                n.g.updateLanguageSettingsCookie(e, {
                    language: s,
                    country: t,
                    isoCountryCode: a,
                    isUserSelection: !0,
                    isCountrySelectorRedirection: !0
                }),
                i = o("body").find("#pso-homepage").length ? window.Routing.generate("front_" + c + "_partnership") : m.find("input[type=radio]:checked").data("url"),
                window.location = i
            }, L = function() {
                var e = new CustomEvent("adjustComponentPopup",{
                    detail: {
                        popupId: "languageModal"
                    }
                });
                document.dispatchEvent(e)
            }, D = function() {
                var e = m.find("input[type=radio]:checked").val()
                  , t = m.find("input[type=radio]:checked").data("branchName");
                h.find(".js-ml-language-text").text(x[e]),
                h.find(".js-ml-language-branch").text(t)
            }, P = function(e) {
                return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace("ł", "l")
            };
            l.on("click", (function() {
                var e = m.find("input[type=radio]:checked").data("branch");
                t !== e ? function(e) {
                    var n = m.find("input[type=radio]:checked").data("branchName")
                      , a = d.find(".js-ml-country-text").text()
                      , i = w.data("text").replace("%country%", "<strong>" + a + "</strong>").replace("%branch%", "<strong>" + n + "</strong>");
                    C.addClass("loading"),
                    b.includes(t) && !b.includes(e) ? o.ajax({
                        url: "/web-api/v2/leaving-branch-popup-translations/" + t + "?branch=" + e,
                        type: "GET",
                        dataType: "json",
                        success: function(e) {
                            w.html(e.content),
                            s.hide(),
                            c.show(),
                            C.removeClass("loading"),
                            L()
                        },
                        error: function() {
                            return "error"
                        }
                    }) : (w.html(i),
                    s.hide(),
                    c.show(),
                    C.removeClass("loading"),
                    L())
                }(e) : j()
            }
            )),
            d.on("click", (function(e) {
                e.stopPropagation(),
                s.toggleClass("show-country-selector"),
                s.hasClass("show-country-selector") && (g.val(""),
                g.trigger("keyup"),
                g.focus())
            }
            )),
            f.on("click", (function(e) {
                e.stopPropagation()
            }
            )),
            p.on("click", (function() {
                o(this).hasClass("unavailable") || (p.removeClass("selected"),
                o(this).addClass("selected"),
                a = o(this).find(".js-ml-country-row-text").html(),
                i = o(this).data("isoCountryCode"),
                S(i))
            }
            )),
            g.on("keyup", (function() {
                var e = P(o(this).val());
                p.each((function() {
                    var t = -1 !== P(o(this).find(".js-ml-country-row-text").text()).indexOf(e);
                    o(this).toggle(t)
                }
                ))
            }
            )),
            h.on("click", (function() {
                s.addClass("show-languages-selector")
            }
            )),
            v.on("click", (function() {
                s.removeClass("show-languages-selector")
            }
            )),
            y.on("click", (function() {
                s.removeClass("show-languages-selector"),
                s.addClass("show-save-button")
            }
            )),
            m.on("click", "label", (function() {
                D()
            }
            )),
            o("body").on("click", (function() {
                o(window).width() > 575 && s.removeClass("show-country-selector")
            }
            )),
            k.on("click", (function() {
                s.show(),
                c.hide(),
                g.val(""),
                g.trigger("keyup"),
                p.removeClass("selected"),
                s.removeClass("show-country-selector show-languages-selector show-save-button"),
                a = "",
                i = r.data("isoCountryCode"),
                a = f.find('[data-iso-country-code="' + i + '"]').html(),
                S(i)
            }
            )),
            u.on("click", (function() {
                j()
            }
            )),
            r.on("dataReady", (function() {
                i = r.data("isoCountryCode"),
                a = f.find('[data-iso-country-code="' + i + '"]').html(),
                S(i),
                D()
            }
            ))
        }
    }
    ,
    48448: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.xtbAccordion = function(e, t, n) {
            n = void 0 !== n && n;
            var a = o(this)
              , i = a.find(e)
              , r = a.find(t);
            i.on("click", (function(e) {
                e.preventDefault();
                var t = i.index(o(this));
                n ? (o(this).hasClass("active") ? r.eq(t).slideUp() : r.eq(t).slideDown(),
                o(this).toggleClass("active")) : o(this).hasClass("active") ? (o(this).removeClass("active"),
                r.slideUp()) : (i.removeClass("active"),
                r.slideUp(),
                o(this).addClass("active"),
                r.eq(t).slideDown())
            }
            ))
        }
    }
    ,
    23532: (e, t, n) => {
        var o, a = n(19755);
        o = a,
        window,
        o.fn.showBtnsForTargetOs = function() {
            var e = o(".js-btns")
              , t = getOS();
            o("body").hasClass("browser-mobile") ? ("Mac OS" === t && e.find(".os-apple").css("display", "inline-block"),
            -1 !== o.inArray(t, ["Windows", "Linux"]) && e.find(".os-windows").css("display", "inline-block"),
            "iOS" === t && e.find(".os-ios").css("display", "inline-block"),
            "Android" === t && e.find(".os-android").css("display", "inline-block"),
            e.find(".mobile").css("display", "inline-block")) : ("Mac OS" === t && e.find(".desktop-apple").css("display", "inline-block"),
            -1 !== o.inArray(t, ["Windows", "Linux"]) && e.find(".desktop-windows").css("display", "inline-block"),
            e.find(".desktop").css("display", "inline-block"))
        }
        ,
        a(document).ready((function() {
            a(window).showBtnsForTargetOs()
        }
        )),
        a(window).on("newBtnsLoaded", (function() {
            a(window).showBtnsForTargetOs()
        }
        ))
    }
    ,
    29622: (e, t, n) => {
        var o, a = n(19755);
        (o = a).fn.cookieApplier = function() {
            return o.ajax({
                type: "HEAD",
                async: !0,
                url: window.Routing.generate("front_".concat(window.Routing.globalDefaults._branch, "_cookie_applier"))
            })
        }
    }
    ,
    39812: (e, t, n) => {
        var o, a;
        o = [n(19755)],
        void 0 === (a = function(e) {
            return function(e) {
                "use strict";
                function t(e) {
                    void 0 === e && (e = window.navigator.userAgent),
                    e = e.toLowerCase();
                    var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []
                      , n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
                      , o = {}
                      , a = {
                        browser: t[5] || t[3] || t[1] || "",
                        version: t[2] || t[4] || "0",
                        versionNumber: t[4] || t[2] || "0",
                        platform: n[0] || ""
                    };
                    if (a.browser && (o[a.browser] = !0,
                    o.version = a.version,
                    o.versionNumber = parseInt(a.versionNumber, 10)),
                    a.platform && (o[a.platform] = !0),
                    (o.android || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"]) && (o.mobile = !0),
                    (o.cros || o.mac || o.linux || o.win) && (o.desktop = !0),
                    (o.chrome || o.opr || o.safari) && (o.webkit = !0),
                    o.rv || o.iemobile) {
                        var i = "msie";
                        a.browser = i,
                        o[i] = !0
                    }
                    if (o.edge) {
                        delete o.edge;
                        var r = "msedge";
                        a.browser = r,
                        o[r] = !0
                    }
                    if (o.safari && o.blackberry) {
                        var s = "blackberry";
                        a.browser = s,
                        o[s] = !0
                    }
                    if (o.safari && o.playbook) {
                        var c = "playbook";
                        a.browser = c,
                        o[c] = !0
                    }
                    if (o.bb) {
                        var l = "blackberry";
                        a.browser = l,
                        o[l] = !0
                    }
                    if (o.opr) {
                        var u = "opera";
                        a.browser = u,
                        o[u] = !0
                    }
                    if (o.safari && o.android) {
                        var d = "android";
                        a.browser = d,
                        o[d] = !0
                    }
                    if (o.safari && o.kindle) {
                        var f = "kindle";
                        a.browser = f,
                        o[f] = !0
                    }
                    if (o.safari && o.silk) {
                        var p = "silk";
                        a.browser = p,
                        o[p] = !0
                    }
                    return o.name = a.browser,
                    o.platform = a.platform,
                    o
                }
                return window.jQBrowser = t(window.navigator.userAgent),
                window.jQBrowser.uaMatch = t,
                e && (e.browser = window.jQBrowser),
                window.jQBrowser
            }(e)
        }
        .apply(t, o)) || (e.exports = a)
    }
    ,
    66222: (e, t, n) => {
        var o, a, i;
        a = [n(19755)],
        void 0 === (i = "function" == typeof (o = function(e) {
            var t = /\+/g;
            function n(e) {
                return s.raw ? e : encodeURIComponent(e)
            }
            function o(e) {
                return s.raw ? e : decodeURIComponent(e)
            }
            function a(e) {
                return n(s.json ? JSON.stringify(e) : String(e))
            }
            function i(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(t, " ")),
                    s.json ? JSON.parse(e) : e
                } catch (e) {}
            }
            function r(t, n) {
                var o = s.raw ? t : i(t);
                return e.isFunction(n) ? n(o) : o
            }
            var s = e.cookie = function(t, i, c) {
                if (arguments.length > 1 && !e.isFunction(i)) {
                    if ("number" == typeof (c = e.extend({}, s.defaults, c)).expires) {
                        var l = c.expires
                          , u = c.expires = new Date;
                        u.setMilliseconds(u.getMilliseconds() + 864e5 * l)
                    }
                    return document.cookie = [n(t), "=", a(i), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
                }
                for (var d = t ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, g = f.length; p < g; p++) {
                    var m = f[p].split("=")
                      , h = o(m.shift())
                      , v = m.join("=");
                    if (t === h) {
                        d = r(v, i);
                        break
                    }
                    t || void 0 === (v = r(v)) || (d[h] = v)
                }
                return d
            }
            ;
            s.defaults = {},
            e.removeCookie = function(t, n) {
                return e.cookie(t, "", e.extend({}, n, {
                    expires: -1
                })),
                !e.cookie(t)
            }
        }
        ) ? o.apply(t, a) : o) || (e.exports = i)
    }
    ,
    92431: function(e, t, n) {
        !function(e, t, n) {
            var o, a = "hashchange", i = document, r = e.event.special, s = i.documentMode, c = "on" + a in t && (s === n || s > 7);
            function l(e) {
                return "#" + (e = e || location.href).replace(/^[^#]*#?(.*)$/, "$1")
            }
            e.fn[a] = function(e) {
                return e ? this.bind(a, e) : this.trigger(a)
            }
            ,
            e.fn[a].delay = 50,
            r[a] = e.extend(r[a], {
                setup: function() {
                    if (c)
                        return !1;
                    e(o.start)
                },
                teardown: function() {
                    if (c)
                        return !1;
                    e(o.stop)
                }
            }),
            o = function() {
                var o, r, s, u = {}, d = l(), f = function(e) {
                    return e
                }, p = f, g = f;
                function m() {
                    var n = l()
                      , i = g(d);
                    n !== d ? (p(d = n, i),
                    e(t).trigger(a)) : i !== d && (location.href = location.href.replace(/#.*/, "") + i),
                    o = setTimeout(m, e.fn[a].delay)
                }
                return u.start = function() {
                    o || m()
                }
                ,
                u.stop = function() {
                    o && clearTimeout(o),
                    o = n
                }
                ,
                e.browser.msie && !c && (u.start = function() {
                    r || (s = (s = e.fn[a].src) && s + l(),
                    r = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", (function() {
                        s || p(l()),
                        m()
                    }
                    )).attr("src", s || "javascript:0").insertAfter("body")[0].contentWindow,
                    i.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (r.document.title = i.title)
                        } catch (e) {}
                    }
                    )
                }
                ,
                u.stop = f,
                g = function() {
                    return l(r.location.href)
                }
                ,
                p = function(t, n) {
                    var o = r.document
                      , s = e.fn[a].domain;
                    t !== n && (o.title = i.title,
                    o.open(),
                    s && o.write('<script>document.domain="' + s + '"<\/script>'),
                    o.close(),
                    r.location.hash = t)
                }
                ),
                u
            }()
        }(n(19755), this)
    },
    69213: function(e, t) {
        var n, o, a, i;
        function r(e) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            r(e)
        }
        i = function() {
            "use strict";
            var e = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
              , t = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                return r(e)
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
            }
              , n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n),
                    o && e(t, o),
                    t
                }
            }();
            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var a = function() {
                function a(e, t) {
                    o(this, a),
                    this.context_ = e || {
                        base_url: "",
                        prefix: "",
                        host: "",
                        port: "",
                        scheme: "",
                        locale: ""
                    },
                    this.setRoutes(t || {})
                }
                return n(a, [{
                    key: "setRoutingData",
                    value: function(e) {
                        this.setBaseUrl(e.base_url),
                        this.setRoutes(e.routes),
                        "prefix"in e && this.setPrefix(e.prefix),
                        "port"in e && this.setPort(e.port),
                        "locale"in e && this.setLocale(e.locale),
                        this.setHost(e.host),
                        this.setScheme(e.scheme)
                    }
                }, {
                    key: "setRoutes",
                    value: function(e) {
                        this.routes_ = Object.freeze(e)
                    }
                }, {
                    key: "getRoutes",
                    value: function() {
                        return this.routes_
                    }
                }, {
                    key: "setBaseUrl",
                    value: function(e) {
                        this.context_.base_url = e
                    }
                }, {
                    key: "getBaseUrl",
                    value: function() {
                        return this.context_.base_url
                    }
                }, {
                    key: "setPrefix",
                    value: function(e) {
                        this.context_.prefix = e
                    }
                }, {
                    key: "setScheme",
                    value: function(e) {
                        this.context_.scheme = e
                    }
                }, {
                    key: "getScheme",
                    value: function() {
                        return this.context_.scheme
                    }
                }, {
                    key: "setHost",
                    value: function(e) {
                        this.context_.host = e
                    }
                }, {
                    key: "getHost",
                    value: function() {
                        return this.context_.host
                    }
                }, {
                    key: "setPort",
                    value: function(e) {
                        this.context_.port = e
                    }
                }, {
                    key: "getPort",
                    value: function() {
                        return this.context_.port
                    }
                }, {
                    key: "setLocale",
                    value: function(e) {
                        this.context_.locale = e
                    }
                }, {
                    key: "getLocale",
                    value: function() {
                        return this.context_.locale
                    }
                }, {
                    key: "buildQueryParams",
                    value: function(e, n, o) {
                        var a = this
                          , i = void 0
                          , r = new RegExp(/\[\]$/);
                        if (n instanceof Array)
                            n.forEach((function(n, i) {
                                r.test(e) ? o(e, n) : a.buildQueryParams(e + "[" + ("object" === (void 0 === n ? "undefined" : t(n)) ? i : "") + "]", n, o)
                            }
                            ));
                        else if ("object" === (void 0 === n ? "undefined" : t(n)))
                            for (i in n)
                                this.buildQueryParams(e + "[" + i + "]", n[i], o);
                        else
                            o(e, n)
                    }
                }, {
                    key: "getRoute",
                    value: function(e) {
                        var t = [this.context_.prefix + e, e + "." + this.context_.locale, this.context_.prefix + e + "." + this.context_.locale, e];
                        for (var n in t)
                            if (t[n]in this.routes_)
                                return this.routes_[t[n]];
                        throw new Error('The route "' + e + '" does not exist.')
                    }
                }, {
                    key: "generate",
                    value: function(t, n) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                          , i = this.getRoute(t)
                          , r = n || {}
                          , s = e({}, r)
                          , c = ""
                          , l = !0
                          , u = ""
                          , d = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                        if (i.tokens.forEach((function(e) {
                            if ("text" === e[0])
                                return c = a.encodePathComponent(e[1]) + c,
                                void (l = !1);
                            if ("variable" !== e[0])
                                throw new Error('The token type "' + e[0] + '" is not supported.');
                            var n = i.defaults && e[3]in i.defaults;
                            if (!1 === l || !n || e[3]in r && r[e[3]] != i.defaults[e[3]]) {
                                var o = void 0;
                                if (e[3]in r)
                                    o = r[e[3]],
                                    delete s[e[3]];
                                else {
                                    if (!n) {
                                        if (l)
                                            return;
                                        throw new Error('The route "' + t + '" requires the parameter "' + e[3] + '".')
                                    }
                                    o = i.defaults[e[3]]
                                }
                                if (!0 !== o && !1 !== o && "" !== o || !l) {
                                    var u = a.encodePathComponent(o);
                                    "null" === u && null === o && (u = ""),
                                    c = e[1] + u + c
                                }
                                l = !1
                            } else
                                n && e[3]in s && delete s[e[3]]
                        }
                        )),
                        "" === c && (c = "/"),
                        i.hosttokens.forEach((function(e) {
                            var t = void 0;
                            "text" !== e[0] ? "variable" === e[0] && (e[3]in r ? (t = r[e[3]],
                            delete s[e[3]]) : i.defaults && e[3]in i.defaults && (t = i.defaults[e[3]]),
                            u = e[1] + t + u) : u = e[1] + u
                        }
                        )),
                        c = this.context_.base_url + c,
                        i.requirements && "_scheme"in i.requirements && this.getScheme() != i.requirements._scheme) {
                            var f = u || this.getHost();
                            c = i.requirements._scheme + "://" + f + (f.indexOf(":" + d) > -1 || "" === d ? "" : ":" + d) + c
                        } else if (void 0 !== i.schemes && void 0 !== i.schemes[0] && this.getScheme() !== i.schemes[0]) {
                            var p = u || this.getHost();
                            c = i.schemes[0] + "://" + p + (p.indexOf(":" + d) > -1 || "" === d ? "" : ":" + d) + c
                        } else
                            u && this.getHost() !== u + (u.indexOf(":" + d) > -1 || "" === d ? "" : ":" + d) ? c = this.getScheme() + "://" + u + (u.indexOf(":" + d) > -1 || "" === d ? "" : ":" + d) + c : !0 === o && (c = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + d) > -1 || "" === d ? "" : ":" + d) + c);
                        if (Object.keys(s).length > 0) {
                            var g = void 0
                              , m = []
                              , h = function(e, t) {
                                t = null === (t = "function" == typeof t ? t() : t) ? "" : t,
                                m.push(a.encodeQueryComponent(e) + "=" + a.encodeQueryComponent(t))
                            };
                            for (g in s)
                                this.buildQueryParams(g, s[g], h);
                            c = c + "?" + m.join("&")
                        }
                        return c
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return i
                    }
                }, {
                    key: "setData",
                    value: function(e) {
                        a.getInstance().setRoutingData(e)
                    }
                }, {
                    key: "customEncodeURIComponent",
                    value: function(e) {
                        return encodeURIComponent(e).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27")
                    }
                }, {
                    key: "encodePathComponent",
                    value: function(e) {
                        return a.customEncodeURIComponent(e).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|")
                    }
                }, {
                    key: "encodeQueryComponent",
                    value: function(e) {
                        return a.customEncodeURIComponent(e).replace(/%3F/g, "?")
                    }
                }]),
                a
            }();
            a.Route,
            a.Context;
            var i = new a;
            return {
                Router: a,
                Routing: i
            }
        }(),
        o = [],
        n = i.Routing,
        void 0 === (a = "function" == typeof n ? n.apply(t, o) : n) || (e.exports = a)
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [9755, 8191, 9559, 8971, 4361], ( () => (t(88604),
    t(39812),
    t(66222),
    t(92431),
    t(48448),
    t(25160),
    t(7806),
    t(23532),
    t(29622),
    t(7570),
    t(45588),
    t(95103),
    t(11573),
    t(60409),
    t(29796),
    t(20794),
    t(22187),
    t(53532),
    t(49781),
    t(11971),
    t(72576),
    t(59686))));
    e.O()
}
]);


// two

"use strict";
(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([[7593], {
    93239: (e, t, n) => {
        var a = n(48191)
          , l = n(70712)
          , i = n.n(l)
          , s = n(96486)
          , o = n(19755)
          , r = ["placeholder", "title"]
          , u = ["data-type", "onClick"]
          , c = ["data-type", "onClick"]
          , d = ["href", "data-gtm-category", "data-gtm-module-no", "data-gtm-module-nr", "data-gtm-module-title", "data-gtm-instrument-name", "data-gtm-instrument-link"]
          , g = ["data-first-letter"]
          , m = ["src"]
          , v = (0,
        a._)("span", {
            class: "icon"
        }, null, -1)
          , f = {
            class: "change-value"
        }
          , w = (0,
        a._)("span", {
            class: "icon"
        }, null, -1)
          , p = {
            class: "change-value"
        }
          , y = ["href", "data-gtm-category", "data-gtm-module-link", "data-gtm-module-no", "data-gtm-module-nr", "data-gtm-button-text", "data-gtm-module-title"]
          , h = ["href", "data-gtm-category", "data-gtm-module-link", "data-gtm-module-no", "data-gtm-module-nr", "data-gtm-button-text", "data-gtm-module-title"]
          , _ = "instruments-table-module";
        const k = {
            __name: "App",
            props: {
                instruments: Object,
                types: Object,
                currentType: String,
                websocketClient: Object,
                translations: Object,
                searchApi: Object,
                contentData: Object,
                chevronImg: String,
                arrowImg: String,
                hideDescriptionForTypes: Array,
                hideTypeIfOtherTypeExists: Object
            },
            setup: function(e) {
                var t = e
                  , n = new WebSocket(t.websocketClient.url)
                  , l = (0,
                a.iH)(null)
                  , i = (0,
                a.iH)(null)
                  , k = (0,
                a.iH)(null)
                  , b = (0,
                a.iH)(null)
                  , C = (0,
                a.iH)(null)
                  , S = document.body.classList.contains("browser-mobile")
                  , D = (0,
                a.iH)({
                    widgetTagsElement: !1,
                    widgetAdditionalTagsElement: !1
                })
                  , U = (0,
                a.iH)({
                    widgetTagsElement: !0,
                    widgetAdditionalTagsElement: !0
                })
                  , T = (0,
                a.iH)({
                    widgetTagsElement: !1,
                    widgetAdditionalTagsElement: !1
                })
                  , E = (0,
                a.iH)({
                    widgetTagsElement: [{
                        elementIndex: 0,
                        offset: 0
                    }],
                    widgetAdditionalTagsElement: [{
                        elementIndex: 0,
                        offset: 0
                    }]
                })
                  , x = ""
                  , A = (0,
                a.iH)(Object.keys(t.instruments)[0])
                  , I = JSON.parse(JSON.stringify(t.instruments))
                  , O = (0,
                a.iH)(t.instruments)
                  , z = (0,
                a.iH)(t.types)
                  , q = (0,
                a.iH)(t.types.cfd ? t.types.cfd.cfdTypes : [])
                  , H = (0,
                a.iH)(O.value[A.value].instruments)
                  , N = ""
                  , j = (0,
                a.iH)(!1)
                  , W = void 0
                  , P = {
                    CoreAPI: {
                        endpoint: t.websocketClient.endpoint,
                        logonRestricted: {
                            user: t.websocketClient.user,
                            accessCode: t.websocketClient.accessCode
                        }
                    }
                }
                  , F = {
                    CoreAPI: {
                        endpoint: t.websocketClient.endpoint,
                        accountId: t.websocketClient.accountId,
                        getAndSubscribeElement: {
                            eid: 2,
                            keys: []
                        }
                    }
                }
                  , L = {
                    CoreAPI: {
                        endpoint: t.websocketClient.endpoint,
                        accountId: t.websocketClient.accountId,
                        getElement: {
                            eid: 1005,
                            keys: []
                        }
                    }
                }
                  , Y = function() {
                    var e = [];
                    H.value.forEach((function(t) {
                        e.push(t.xStationInstrumentSymbol)
                    }
                    )),
                    e.length && (F.CoreAPI.getAndSubscribeElement.keys = e,
                    n.send(JSON.stringify({
                        reqId: "getAndSubscribeElement",
                        command: [F]
                    })),
                    L.CoreAPI.getElement.keys = e,
                    n.send(JSON.stringify({
                        reqId: "getElement",
                        command: [L]
                    })))
                }
                  , R = function(e, t) {
                    var n = {
                        percent: "0%",
                        cssClass: ""
                    };
                    return 0 === e ? n : t ? (t > e ? (n.percent = "-" + ((t - e) / e * 100).toFixed(2) + "%",
                    n.cssClass = "down") : t < e && (n.percent = "+" + ((e - t) / e * 100).toFixed(2) + "%",
                    n.cssClass = "up"),
                    n) : n
                }
                  , J = function(e, t) {
                    var n = t.value.xcfdtick;
                    return e.buy = parseFloat(n.bid.toFixed(4)),
                    e.sell = parseFloat(n.ask.toFixed(4)),
                    e.close1day && (e.change = R(e.buy, e.close1day)),
                    e
                }
                  , K = function(e) {
                    if (C.value && (C.value.scrollTop = 0),
                    "cfd" === e)
                        if ("" !== N) {
                            var t = 0;
                            Object.values(z.value.cfd.cfdTypes).forEach((function(e) {
                                e.count > t && (t = e.count,
                                A.value = e.slug)
                            }
                            ))
                        } else
                            A.value = Object.keys(z.value.cfd.cfdTypes)[0];
                    else
                        A.value = e;
                    H.value = O.value[A.value].instruments,
                    Y()
                }
                  , M = function(e) {
                    new ResizeObserver((function() {
                        1 === E.value[e.value.getAttribute("name")].length && Q(e)
                    }
                    )).observe(e.value)
                }
                  , Q = function(e) {
                    e.value.offsetWidth <= l.value.offsetWidth ? D.value[e.value.getAttribute("name")] = !1 : (ee("right", !0, e),
                    D.value[e.value.getAttribute("name")] = !0)
                }
                  , B = function(e, t) {
                    "left" === e ? V(t) : X(t)
                }
                  , G = function(e) {
                    e.value.style.translate = "".concat(x, "0px"),
                    E.value[e.value.getAttribute("name")] = [{
                        elementIndex: 0,
                        offset: 0
                    }],
                    ee("left", !1, e),
                    ee("right", !0, e)
                }
                  , V = function(e) {
                    if (E.value[e.getAttribute("name")].length >= 2) {
                        2 === E.value[e.getAttribute("name")].length && ee("left", !1, e),
                        ee("right", !0, e);
                        var t = E.value[e.getAttribute("name")][E.value[e.getAttribute("name")].length - 2].offset;
                        e.style.translate = "".concat(x).concat(t, "px"),
                        E.value[e.getAttribute("name")].pop()
                    }
                }
                  , X = function(e) {
                    for (var t = e.parentNode.offsetWidth, n = e.children.length, a = 0, l = E.value[e.getAttribute("name")][E.value[e.getAttribute("name")].length - 1].elementIndex; l < n; l++) {
                        var i = e.children[l]
                          , s = "widgetAdditionalTagsElement" === e.getAttribute("name") ? 8 : 0;
                        if (a + i.offsetWidth > t && l > 1) {
                            var o = e.children[l - 1].offsetWidth;
                            return a = a - i.offsetWidth - o,
                            void Z(l, n, t, a, e)
                        }
                        a += i.offsetWidth + s
                    }
                }
                  , Z = function(e, t, n, a, l) {
                    var i = 0;
                    ee("left", !0, l);
                    for (var s = e - 1; s < t; s++)
                        i += l.children[s].offsetWidth;
                    if (i <= n)
                        $(t, a, l);
                    else {
                        var o = E.value[l.getAttribute("name")][E.value[l.getAttribute("name")].length - 1].offset + a;
                        l.style.translate = "".concat(x).concat(o, "px"),
                        E.value[l.getAttribute("name")].push({
                            elementIndex: e - 2,
                            offset: o
                        })
                    }
                }
                  , $ = function(e, t, n) {
                    var a = n.offsetWidth - l.value.offsetWidth;
                    ee("right", !1, n),
                    n.style.translate = "".concat(x).concat(a, "px"),
                    E.value[n.getAttribute("name")].push({
                        elementIndex: e - 1,
                        offset: E.value[n.getAttribute("name")][E.value[n.getAttribute("name")].length - 1].offset + t
                    })
                }
                  , ee = function(e, t, n) {
                    n.value ? "left" === e ? T.value[n.value.getAttribute("name")] = t : U.value[n.value.getAttribute("name")] = t : "left" === e ? T.value[n.getAttribute("name")] = t : U.value[n.getAttribute("name")] = t
                }
                  , te = function() {
                    N = "",
                    ne()
                }
                  , ne = (0,
                s.debounce)((function() {
                    if (N.length > 1)
                        ae();
                    else {
                        for (var e in O.value)
                            O.value[e].instruments = I[e].instruments,
                            delete O.value[e].count,
                            z.value[e] ? z.value[e].count = null : z.value.cfd.cfdTypes[e].count = null;
                        z.value.cfd && (z.value.cfd.count = null),
                        K("all"),
                        G(i),
                        G(k)
                    }
                }
                ), 500)
                  , ae = function() {
                    var e = o.ajax({
                        type: "GET",
                        data: {
                            query: N
                        },
                        async: !0,
                        cache: !0,
                        url: t.searchApi.url
                    }).done((function(t) {
                        if (N.length && (!W || e === W)) {
                            var n = function(e) {
                                if ("all" === e)
                                    return O.value.all.instruments = t.items,
                                    O.value.all.count = t.items.length,
                                    z.value.all.count = t.items.length,
                                    "continue";
                                var n = t.items.filter((function(t) {
                                    return t.typeSlug === e
                                }
                                ));
                                O.value[e].instruments = n,
                                O.value[e].count = n.length,
                                z.value[e] ? z.value[e].count = n.length : z.value.cfd.cfdTypes[e].count = n.length
                            };
                            for (var a in O.value)
                                n(a);
                            if (z.value.cfd) {
                                var l, s = 0;
                                null === (l = Object.values(z.value.cfd.cfdTypes)) || void 0 === l || l.forEach((function(e) {
                                    return s += e.count
                                }
                                )),
                                z.value.cfd.count = s
                            }
                        }
                        K("all"),
                        G(i),
                        G(k)
                    }
                    ));
                    window.dispatchEvent(new CustomEvent("gtmSearchModule",{
                        detail: {
                            category: t.contentData.gtm.category,
                            moduleNo: t.contentData.gtm.moduleNo,
                            moduleNr: t.contentData.gtm.moduleNr,
                            moduleTitle: t.contentData.gtm.moduleTitle,
                            searchQuery: N
                        }
                    })),
                    W = e
                };
                return (0,
                a.bv)((function() {
                    x = "ltr" === getComputedStyle(l.value).direction ? "-" : "",
                    M(i),
                    M(k),
                    Q(i),
                    Q(k),
                    n.addEventListener("open", (function() {
                        n.send(JSON.stringify({
                            reqId: "logonRestricted",
                            command: [P]
                        })),
                        n.addEventListener("message", (function(e) {
                            if (H.value) {
                                var n = JSON.parse(e.data);
                                if ("logonRestricted" === n.reqId) {
                                    Y();
                                    var a = z.value.cfd && z.value.cfd.cfdTypes ? Object.keys(z.value.cfd.cfdTypes) : []
                                      , l = Object.keys(z.value).concat(a);
                                    t.currentType && l.includes(t.currentType) && K(t.currentType)
                                }
                                "getAndSubscribeElement" === n.reqId && H.value.forEach((function(e) {
                                    n.response[0].element.elements && n.response[0].element.elements.forEach((function(t) {
                                        e.xStationInstrumentSymbol === t.value.xcfdtick.key && J(e, t)
                                    }
                                    ))
                                }
                                )),
                                "getElement" === n.reqId && H.value.forEach((function(e) {
                                    n.response[0].element.elements && n.response[0].element.elements.forEach((function(t) {
                                        t.value.xcloseprice.key === e.xStationInstrumentSymbol && function(e, t) {
                                            var n = t.value.xcloseprice;
                                            n.key === e.xStationInstrumentSymbol && (e.close1day = n.close1day.toFixed(4),
                                            e.change = R(e.buy, e.close1day))
                                        }(e, t)
                                    }
                                    ))
                                }
                                )),
                                H.value.forEach((function(e) {
                                    n.events && e.xStationInstrumentSymbol === n.events[0].row.value.xcfdtick.key && J(e, n.events[0].row)
                                }
                                ))
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                function(t, n) {
                    var s = (0,
                    a.Q2)("html-safe");
                    return (0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-widget-wrapper"), {
                            active: (0,
                            a.SU)(j)
                        }])
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-widget-scroll")
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-widget-input-wrapper")
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-mobile-back"),
                        onClick: n[0] || (n[0] = function(e) {
                            return j.value = !1,
                            document.body.classList.remove("modal-open"),
                            window.scrollLock(!1),
                            void te()
                        }
                        )
                    }, null, 2), (0,
                    a.wy)((0,
                    a._)("input", {
                        type: "text",
                        maxlength: "128",
                        class: (0,
                        a.C_)([_ + "-widget-input"]),
                        placeholder: e.translations.placeholder,
                        title: e.translations.placeholder,
                        "onUpdate:modelValue": n[1] || (n[1] = function(e) {
                            return (0,
                            a.dq)(N) ? N.value = e : N = e
                        }
                        ),
                        onClick: n[2] || (n[2] = function(e) {
                            window.innerWidth <= 992 && (j.value = !0,
                            document.body.classList.add("modal-open"),
                            window.scrollLock(!0),
                            setTimeout((function() {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "instant"
                                })
                            }
                            ), 200))
                        }
                        ),
                        onInput: n[3] || (n[3] = function(e) {
                            return (0,
                            a.SU)(ne)((0,
                            a.SU)(N))
                        }
                        )
                    }, null, 42, r), [[a.nr, (0,
                    a.SU)(N)]]), (0,
                    a.SU)(N).length ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 0,
                        class: (0,
                        a.C_)(_ + "-mobile-reset"),
                        onClick: n[4] || (n[4] = function(e) {
                            return te()
                        }
                        )
                    }, null, 2)) : (0,
                    a.kq)("v-if", !0)], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-widget-tags-wrapper"),
                        ref_key: "tagsWrapperElement",
                        ref: l
                    }, [D.value.widgetTagsElement ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 0,
                        class: (0,
                        a.C_)(_ + "-widget-tags-horizontal-overlay")
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron-wrapper"), "".concat(_, "-chevron-wrapper-left"), {
                            visible: T.value.widgetTagsElement
                        }])
                    }, [(0,
                    a.wy)((0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron"), "".concat(_, "-chevron-left")]),
                        onClick: n[5] || (n[5] = function(e) {
                            return B("left", i.value)
                        }
                        )
                    }, null, 2), [[s, e.chevronImg]])], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron-wrapper"), "".concat(_, "-chevron-wrapper-right"), {
                            visible: U.value.widgetTagsElement
                        }])
                    }, [(0,
                    a.wy)((0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron"), "".concat(_, "-chevron-right")]),
                        onClick: n[6] || (n[6] = function(e) {
                            return B("right", i.value)
                        }
                        )
                    }, null, 2), [[s, e.chevronImg]])], 2)], 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a._)("ul", {
                        class: (0,
                        a.C_)(_ + "-widget-tags"),
                        ref_key: "widgetTagsElement",
                        ref: i,
                        name: "widgetTagsElement"
                    }, [((0,
                    a.wg)(!0),
                    (0,
                    a.iD)(a.HY, null, (0,
                    a.Ko)((0,
                    a.SU)(z), (function(t, n) {
                        return (0,
                        a.wg)(),
                        (0,
                        a.iD)(a.HY, null, [e.hideTypeIfOtherTypeExists.hasOwnProperty(n) && (0,
                        a.SU)(O).hasOwnProperty(e.hideTypeIfOtherTypeExists[n]) ? (0,
                        a.kq)("v-if", !0) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)("li", {
                            key: 0,
                            class: (0,
                            a.C_)([_ + "-widget-tag-wrapper", {
                                active: n === (0,
                                a.SU)(A) || (0,
                                a.SU)(q).hasOwnProperty((0,
                                a.SU)(A)) && "cfd" === n
                            }])
                        }, [(0,
                        a._)("button", {
                            "data-type": n,
                            class: (0,
                            a.C_)([_ + "-widget-tag", {
                                active: n === (0,
                                a.SU)(A) || (0,
                                a.SU)(q).hasOwnProperty((0,
                                a.SU)(A)) && "cfd" === n
                            }, {
                                "no-tag-results": 0 === t.count
                            }]),
                            onClick: function(e) {
                                return K(n)
                            }
                        }, ["all" !== n || t.count ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)(a.HY, {
                            key: 1
                        }, [(0,
                        a.Uk)((0,
                        a.zw)(t.name), 1)], 64)) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)(a.HY, {
                            key: 0
                        }, [(0,
                        a.Uk)((0,
                        a.zw)(e.translations.popular), 1)], 64)), void 0 !== t.count && null !== t.count ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("span", {
                            key: 2,
                            class: (0,
                            a.C_)(_ + "-tag-count-pill")
                        }, (0,
                        a.zw)(t.count), 3)) : (0,
                        a.kq)("v-if", !0)], 10, u)], 2))], 64)
                    }
                    )), 256))], 2)], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)([_ + "-widget-tags-bar", {
                            active: (0,
                            a.SU)(z).cfd && (0,
                            a.SU)(q).hasOwnProperty((0,
                            a.SU)(A))
                        }])
                    }, [D.value.widgetAdditionalTagsElement ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 0,
                        class: (0,
                        a.C_)(_ + "-widget-tags-horizontal-overlay")
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron-wrapper"), "".concat(_, "-chevron-wrapper-left"), {
                            visible: T.value.widgetAdditionalTagsElement
                        }])
                    }, [(0,
                    a.wy)((0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron"), "".concat(_, "-chevron-left")]),
                        onClick: n[7] || (n[7] = function(e) {
                            return B("left", k.value)
                        }
                        )
                    }, null, 2), [[s, e.chevronImg]])], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron-wrapper"), "".concat(_, "-chevron-wrapper-right"), {
                            visible: U.value.widgetAdditionalTagsElement
                        }]),
                        ref_key: "chevronWrapperRightElement",
                        ref: b
                    }, [(0,
                    a.wy)((0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-chevron"), "".concat(_, "-chevron-right")]),
                        onClick: n[8] || (n[8] = function(e) {
                            return B("right", k.value)
                        }
                        )
                    }, null, 2), [[s, e.chevronImg]])], 2)], 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a.Wm)(a.uT, {
                        persisted: ""
                    }, {
                        default: (0,
                        a.w5)((function() {
                            return [(0,
                            a.wy)((0,
                            a._)("ul", {
                                class: (0,
                                a.C_)(_ + "-additional-widget-tags"),
                                ref_key: "widgetAdditionalTagsElement",
                                ref: k,
                                name: "widgetAdditionalTagsElement"
                            }, [(0,
                            a.SU)(z).cfd ? ((0,
                            a.wg)(!0),
                            (0,
                            a.iD)(a.HY, {
                                key: 0
                            }, (0,
                            a.Ko)((0,
                            a.SU)(z).cfd.cfdTypes, (function(t) {
                                return (0,
                                a.wg)(),
                                (0,
                                a.iD)("li", {
                                    class: (0,
                                    a.C_)([_ + "-additional-widget-tag-wrapper", {
                                        active: t.slug === (0,
                                        a.SU)(A)
                                    }])
                                }, [(0,
                                a._)("button", {
                                    "data-type": t.slug,
                                    class: (0,
                                    a.C_)([_ + "-additional-widget-tag", {
                                        active: t.slug === (0,
                                        a.SU)(A)
                                    }, {
                                        "no-tag-results": 0 === t.count
                                    }]),
                                    onClick: function(e) {
                                        return K(t.slug)
                                    }
                                }, ["all" !== t.slug || t.count ? ((0,
                                a.wg)(),
                                (0,
                                a.iD)(a.HY, {
                                    key: 1
                                }, [(0,
                                a.Uk)((0,
                                a.zw)(t.name), 1)], 64)) : ((0,
                                a.wg)(),
                                (0,
                                a.iD)(a.HY, {
                                    key: 0
                                }, [(0,
                                a.Uk)((0,
                                a.zw)(e.translations.popular), 1)], 64)), void 0 !== t.count && null !== t.count ? ((0,
                                a.wg)(),
                                (0,
                                a.iD)("span", {
                                    key: 2,
                                    class: (0,
                                    a.C_)(_ + "-tag-count-pill")
                                }, (0,
                                a.zw)(t.count), 3)) : (0,
                                a.kq)("v-if", !0)], 10, c)], 2)
                            }
                            )), 256)) : (0,
                            a.kq)("v-if", !0)], 2), [[a.F8, (0,
                            a.SU)(z).cfd && (0,
                            a.SU)(q).hasOwnProperty((0,
                            a.SU)(A))]])]
                        }
                        )),
                        _: 1
                    }), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-widget-results-bottom-blur")
                    }, null, 2)], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-widget-results-wrapper")
                    }, [0 === (0,
                    a.SU)(O)[(0,
                    a.SU)(A)].instruments.length ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 0,
                        class: (0,
                        a.C_)(_ + "-no-results-wrapper")
                    }, [(0,
                    a._)("div", {
                        class: (0,
                        a.C_)(_ + "-no-results-image-wrapper")
                    }, null, 2), (0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-no-results-heading")
                    }, (0,
                    a.zw)(e.translations.noResultTop) + ' "' + (0,
                    a.zw)((0,
                    a.SU)(N)) + '" ', 3), (0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-no-results-text")
                    }, (0,
                    a.zw)(e.translations.noResultBottom), 3)], 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a.SU)(O)[(0,
                    a.SU)(A)].instruments.length > 0 ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 1,
                        class: (0,
                        a.C_)(_ + "-widget-results-header")
                    }, [(0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-widget-results-header-name " + _ + "-widget-results-header-value-name")
                    }, (0,
                    a.zw)(e.translations.instrumentName), 3), (0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-widget-results-header-value " + _ + "-widget-results-header-value-change")
                    }, (0,
                    a.zw)(e.translations.change), 3), (0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-widget-results-header-value " + _ + "-widget-results-header-value-sell")
                    }, (0,
                    a.zw)(e.translations.sell), 3), (0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-widget-results-header-value " + _ + "-widget-results-header-value-buy")
                    }, (0,
                    a.zw)(e.translations.buy), 3)], 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a.SU)(N).length || (0,
                    a.SU)(z).cfd && (0,
                    a.SU)(q).hasOwnProperty((0,
                    a.SU)(A)) ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 2,
                        class: (0,
                        a.C_)(_ + "-widget-results-top-blur")
                    }, null, 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a.SU)(O)[(0,
                    a.SU)(A)].instruments.length > 0 ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("ul", {
                        key: 3,
                        class: (0,
                        a.C_)([_ + "-widget-results", {
                            "additional-bar-open": (0,
                            a.SU)(z).cfd && (0,
                            a.SU)(q).hasOwnProperty((0,
                            a.SU)(A))
                        }]),
                        ref_key: "resultsListElement",
                        ref: C
                    }, [((0,
                    a.wg)(!0),
                    (0,
                    a.iD)(a.HY, null, (0,
                    a.Ko)((0,
                    a.SU)(O)[(0,
                    a.SU)(A)].instruments, (function(t) {
                        return (0,
                        a.wg)(),
                        (0,
                        a.iD)("li", {
                            key: t
                        }, [(0,
                        a._)("a", {
                            href: t.instrumentUrl,
                            class: (0,
                            a.C_)([_ + "-widget-result", "js-gtm-instrument-click-module"]),
                            "data-gtm-category": e.contentData.gtm.category,
                            "data-gtm-module-no": e.contentData.gtm.moduleNo,
                            "data-gtm-module-nr": e.contentData.gtm.moduleNr,
                            "data-gtm-module-title": e.contentData.gtm.moduleTitle,
                            "data-gtm-instrument-name": t.name,
                            "data-gtm-instrument-link": t.instrumentUrl
                        }, [(0,
                        a._)("div", {
                            class: (0,
                            a.C_)([t.iconUrl ? "" : "no-image", _ + "-widget-result-img"]),
                            "data-first-letter": t.name.slice(0, 1)
                        }, [(0,
                        a._)("img", {
                            alt: "",
                            class: "lazyload",
                            height: "40",
                            width: "40",
                            src: t.iconUrl,
                            onError: n[9] || (n[9] = function(e) {
                                e.target.parentNode.classList.add("no-image")
                            }
                            )
                        }, null, 40, m)], 10, g), (0,
                        a._)("div", {
                            class: (0,
                            a.C_)(_ + "-widget-result-name-wrapper")
                        }, [(0,
                        a._)("div", {
                            class: (0,
                            a.C_)(_ + "-widget-result-name-and-type")
                        }, [(0,
                        a._)("span", {
                            class: (0,
                            a.C_)(_ + "-widget-result-name ltr")
                        }, (0,
                        a.zw)(t.name), 3), (0,
                        a._)("span", {
                            class: (0,
                            a.C_)(_ + "-widget-result-type")
                        }, (0,
                        a.zw)(e.translations[t.typeSlug]), 3)], 2), e.hideDescriptionForTypes.includes(t.typeSlug) ? (0,
                        a.kq)("v-if", !0) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)("span", {
                            key: 0,
                            class: (0,
                            a.C_)(_ + "-widget-result-description ltr")
                        }, (0,
                        a.zw)(t.description), 3))], 2), t.change || 0 == t.change ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 0,
                            class: (0,
                            a.C_)(t.change.cssClass + " " + _ + "-widget-result-value " + _ + "-widget-result-value-change")
                        }, [v, (0,
                        a._)("span", f, (0,
                        a.zw)(t.change.percent), 1)], 2)) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 1,
                            class: (0,
                            a.C_)(_ + "-widget-result-value " + _ + "-widget-result-no-price")
                        }, "-", 2)), t.sell || 0 == t.sell ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 2,
                            class: (0,
                            a.C_)(_ + "-widget-result-value " + _ + "-widget-result-value-sell")
                        }, (0,
                        a.zw)(t.sell), 3)) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 3,
                            class: (0,
                            a.C_)(_ + "-widget-result-value " + _ + "-widget-result-no-price")
                        }, "-", 2)), t.buy || 0 == t.buy ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 4,
                            class: (0,
                            a.C_)(_ + "-widget-result-value " + _ + "-widget-result-value-buy")
                        }, (0,
                        a.zw)(t.buy), 3)) : ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 5,
                            class: (0,
                            a.C_)(_ + "-widget-result-value " + _ + "-widget-result-no-price")
                        }, "-", 2)), t.buy ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("div", {
                            key: 6,
                            class: (0,
                            a.C_)(_ + "-widget-result-price")
                        }, [(0,
                        a.Uk)((0,
                        a.zw)(t.buy) + " ", 1), t.change ? ((0,
                        a.wg)(),
                        (0,
                        a.iD)("small", {
                            key: 0,
                            class: (0,
                            a.C_)(t.change.cssClass)
                        }, [w, (0,
                        a._)("span", p, (0,
                        a.zw)(t.change.percent), 1)], 2)) : (0,
                        a.kq)("v-if", !0)], 2)) : (0,
                        a.kq)("v-if", !0)], 10, d)])
                    }
                    )), 128))], 2)) : (0,
                    a.kq)("v-if", !0), (0,
                    a.SU)(N).length || (0,
                    a.SU)(z).cfd && (0,
                    a.SU)(q).hasOwnProperty((0,
                    a.SU)(A)) ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("div", {
                        key: 4,
                        class: (0,
                        a.C_)(_ + "-widget-results-bottom-blur")
                    }, null, 2)) : (0,
                    a.kq)("v-if", !0)], 2), (0,
                    a._)("div", {
                        class: (0,
                        a.C_)(["".concat(_, "-footer"), {
                            "no-results": (0,
                            a.SU)(j) && 0 === (0,
                            a.SU)(O)[(0,
                            a.SU)(A)].instruments.length
                        }])
                    }, [(0,
                    a._)("span", {
                        class: (0,
                        a.C_)(_ + "-footer-link-info")
                    }, (0,
                    a.zw)(e.translations.explore), 3), !e.contentData.footer.text || !e.contentData.footer.link || e.contentData.footer.text_mobile && (0,
                    a.SU)(S) ? (0,
                    a.kq)("v-if", !0) : ((0,
                    a.wg)(),
                    (0,
                    a.iD)("a", {
                        key: 0,
                        href: e.contentData.footer.link,
                        class: (0,
                        a.C_)(_ + "-footer-link js-gtm-click-module"),
                        "data-gtm-category": e.contentData.gtm.category,
                        "data-gtm-module-link": e.contentData.footer.link,
                        "data-gtm-module-no": e.contentData.gtm.moduleNo,
                        "data-gtm-button-no": 0,
                        "data-gtm-module-nr": e.contentData.gtm.moduleNr,
                        "data-gtm-button-text": e.contentData.footer.text,
                        "data-gtm-module-title": e.contentData.gtm.moduleTitle
                    }, [(0,
                    a.wy)((0,
                    a._)("span", null, null, 512), [[s, e.contentData.footer.text]]), (0,
                    a.wy)((0,
                    a._)("span", null, null, 512), [[s, e.arrowImg]])], 10, y)), e.contentData.footer.text_mobile && e.contentData.footer.link_mobile && (0,
                    a.SU)(S) ? ((0,
                    a.wg)(),
                    (0,
                    a.iD)("a", {
                        key: 1,
                        href: e.contentData.footer.link_mobile,
                        class: (0,
                        a.C_)(_ + "-footer-link js-gtm-click-module js-dynamic-link"),
                        "data-gtm-category": e.contentData.gtm.category,
                        "data-gtm-module-link": e.contentData.footer.link_mobile,
                        "data-gtm-module-no": e.contentData.gtm.moduleNo,
                        "data-gtm-button-no": 0,
                        "data-gtm-module-nr": e.contentData.gtm.moduleNr,
                        "data-gtm-button-text": e.contentData.footer.text_mobile,
                        "data-gtm-module-title": e.contentData.gtm.moduleTitle
                    }, [(0,
                    a.wy)((0,
                    a._)("span", null, null, 512), [[s, e.contentData.footer.text_mobile]]), (0,
                    a.wy)((0,
                    a._)("span", null, null, 512), [[s, e.arrowImg]])], 10, h)) : (0,
                    a.kq)("v-if", !0)], 2)], 2)], 2)
                }
            }
        };
        n.g.createInstrumentsTableModuleApp = function(e, t) {
            var n = (0,
            a.ri)(k, t);
            n.use(i()),
            n.mount(e)
        }
    }
}, e => {
    e.O(0, [9755, 8191, 9559], ( () => {
        return t = 93239,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);


// three

(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([[1190], {
    93703: (e, t, i) => {
        var n, s = i(19755);
        (n = s).fn.initAppModule = function() {
            var e, t, i = n(this), s = i.find(".js-items"), o = i.find(".js-item"), a = i.find(".js-item-img"), r = i.find(".js-item-top"), c = i.find(".js-item-bottom-text"), d = i.find(".animation-progress-bar"), l = o.filter(".first-open").index(), h = s.height(), f = l > -1 ? l : 0, m = 0;
            c.each((function() {
                n(this).css("max-height", "none"),
                m = n(this).outerHeight() > m ? n(this).outerHeight() : m,
                n(this).css("max-height", "")
            }
            ));
            var u = h + m;
            function v(e) {
                var i = a.filter((function(t) {
                    return t != e
                }
                ));
                o.removeClass("active"),
                a.eq(e).addClass("active"),
                o.eq(e).addClass("active"),
                o.not(o.eq(e)).find(".js-item-bottom-text").slideUp(500, "linear"),
                o.eq(e).find(".js-item-bottom-text").slideDown(500, "linear"),
                f = e,
                i.addClass("hidden"),
                t = setTimeout((function() {
                    a.removeClass("hidden"),
                    i.removeClass("active")
                }
                ), 600)
            }
            function w() {
                v(f = (f + 1) % o.length)
            }
            var g = new IntersectionObserver((function(t) {
                !0 === t[0].isIntersecting && (g.unobserve(i[0]),
                v(f),
                e = setInterval(w, 8e3),
                s.css("height", u))
            }
            ),{
                threshold: [.2],
                delay: 100
            });
            r.click((function() {
                clearInterval(e),
                clearTimeout(t),
                v(n(this).parent().index()),
                d.css("animation", "none"),
                d[0].offsetHeight,
                d.css("animation", ""),
                e = setInterval(w, 8e3)
            }
            )),
            n(window).on("resize", (function() {
                clearInterval(e),
                n(window).width() < 992 ? (o.find(".js-item-bottom-text").slideDown(500, "linear"),
                s.css("height", "auto"),
                r.off("click")) : (v(f),
                e = setInterval((function() {
                    v(f = (f + 1) % o.length)
                }
                ), 8e3))
            }
            )),
            n(window).on("load", (function() {
                n(window).width() > 992 && g.observe(i[0])
            }
            ))
        }
    }
}, e => {
    e.O(0, [9755], ( () => {
        return t = 93703,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
