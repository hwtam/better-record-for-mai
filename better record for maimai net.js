// ==UserScript==
// @name         better record for maimai net
// @version      1.0
// @description  just add css rules using js (support mai tool
// @author       tomtom
// @match        https://maimaidx-eng.com/maimai-mobile/record/
// @match        http://maimaidx-eng.com/maimai-mobile/record/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// source : https://poe.com/s/U9B0SprfUrsiQiGDnUmd

    var styleElement = document.createElement("style");

/*
.playRecordContainer {
  overflow: auto;
  height: 400px;
  wifth: 500px;
  margin: auto;
}

.main_wrapper {
  width: 67.4%;
}

img.title {
  width: auto;
}

.main_wrapper header + div {
 text-align: center;
}

svg {
  width: 100%;;
}

#recordSummary ~ div {
  float: left !important;
  width: 50% !important;
}

header[class="f_0"] {
  width: 480px !important;
  margin: auto !important;
}
*/

    var cssRules = document.createTextNode(".playRecordContainer { overflow: auto; height: 400px; width: 500px; margin: auto; }");
    styleElement.appendChild(cssRules); // for mai tool

    cssRules = document.createTextNode(".main_wrapper { width: 67.4%; }");
    styleElement.appendChild(cssRules);

    cssRules = document.createTextNode("img.title { width: auto; }");
    styleElement.appendChild(cssRules);

    cssRules = document.createTextNode(".main_wrapper header + div { text-align: center; }");
    styleElement.appendChild(cssRules);

    cssRules = document.createTextNode("svg { width: 100%; }");
    styleElement.appendChild(cssRules);

    cssRules = document.createTextNode('div[class="p_10 t_l f_0 v_b"] { float: left !important; width: 50% !important; }');
    styleElement.appendChild(cssRules);

    cssRules = document.createTextNode('header[class="f_0"] { width: 480px !important; margin: auto !important; }');
    styleElement.appendChild(cssRules);

    document.head.appendChild(styleElement);

})();