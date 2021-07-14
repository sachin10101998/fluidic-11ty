/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/trivet/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/trivet/raw/main/LICENSE.md.
*/

"use strict";

const {parseHTML} = require("linkedom");

module.exports = function (value, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        let {document} = parseHTML(value);
        const articleImages = [...document.querySelectorAll("main article img")];

        if (articleImages.length) {
            articleImages.forEach(image => {
                // Enable native lazy-loading.
                image.setAttribute("loading", "lazy");
            });
        }

        return "<!DOCTYPE html>\r\n" + document.documentElement.outerHTML;
    }
    return value;
};
