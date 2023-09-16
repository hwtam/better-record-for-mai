// ==UserScript==
// @name         better-record-for-maimai-net
// @version      3.2
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
#recordSummary {
  display: none !important;
}

img.title {
  cursor: pointer !important;
}

@media screen and (min-width: 960px) {
    .playRecordContainer {
      width: 500px !important;
      margin: auto !important;
    }

    .main_wrapper {
      width: 960px !important;
    }

    .main_wrapper header + div {
     text-align: center !important;
    }

    svg[style="height:10px"] {
      width: 100% !important;
    }

    div[class="p_10 t_l f_0 v_b"] {
      float: left !important;
      width: 480px !important;
    }

    header[class="f_0"] {
      width: 480px !important;
      margin: auto !important;
    }

    img.title {
      width: auto !important;
    }
}
`;

    var cssRules = document.createTextNode(str);
    styleElement.appendChild(cssRules);
    document.head.appendChild(styleElement);

    document.querySelector('img.title').addEventListener("click", () => {
        cssRules = document.createTextNode("#recordSummary { display: block !important; } img.title { cursor: default !important; }");
        styleElement.appendChild(cssRules);
        document.head.appendChild(styleElement);
    });

})();
