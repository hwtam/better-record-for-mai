// ==UserScript==
// @name         better record for maimai net
// @version      2.0
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

    var str = `
.playRecordContainer {
  overflow: auto !important;
  height: 400px !important;
  width: 500px !important;
  margin: auto !important;
}

.main_wrapper {
  width: 67.4% !important;
}

img.title {
  width: auto !important;
}

.main_wrapper header + div {
 text-align: center !important;
}

svg[style="height:10px"] {
  width: 100% !important;
}

div[class="p_10 t_l f_0 v_b"] {
  float: left !important;
  width: 50% !important;
}

header[class="f_0"] {
  width: 480px !important;
  margin: auto !important;
}
`;

    var cssRules = document.createTextNode(str);
    styleElement.appendChild(cssRules);

    document.head.appendChild(styleElement);

})();
