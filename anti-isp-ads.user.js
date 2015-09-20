// ==UserScript==
// @id             anti-isp-ads@zbinlin
// @name           Anti isp injecting ads
// @version        1.1
// @namespace      anti-isp-ads@zbinlin
// @author         zbinlin
// @description    anti isp injecting ads
// @include        http://*
// @noframes
// @run-at         document-end
// ==/UserScript==

"use strict";

void function () {
    var title = top.document.title;
    var iframes = top.document.querySelectorAll("iframe");
    var vpw = top.document.documentElement.clientWidth;
    var vph = top.document.documentElement.clientHeight;

    if ("" !== title || !iframes) return;

    for (var i = 0, len = iframes.length; i < len; i++) {
        var el = iframes[i];
        if (el.clientWidth === vpw && el.clientHeight === vph) {
            top.location.reload(true);
            break;
        }
    }
}();
