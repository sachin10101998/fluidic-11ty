/*
Copyright the Fluidic Eleventy copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidic-11ty/raw/master/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/fluidic-11ty/raw/master/LICENSE.md.
*/

"use strict";

const mix = require("laravel-mix");
const moveFile = require("move-file");
const fg = require("fast-glob");

// Set public path.
mix.setPublicPath("dist/assets");

// Process JavaScript with Babel.
const scriptPaths = fg.sync("./src/assets/scripts/*.js");

scriptPaths.forEach(entryPath => {
    mix.js(entryPath, "dist/assets/scripts");
});

// Process CSS with PostCSS.
mix.postCss("src/assets/styles/app.css", "dist/assets/styles");

// Compile Sass and process with PostCSS.
// mix.sass("src/assets/styles/app.scss", "dist/assets/styles");

// Compile Stylus and process with PostCSS.
// mix.stylus("src/assets/styles/app.styl", "dist/assets/styles");

mix.options({
    // Don't modify stylesheet url() functions.
    processCssUrls: false
});

// Enable source maps.
mix.sourceMaps(false, "source-map");

// Add version string to assets in production.
if (mix.inProduction()) {
    mix.version();
}

// Copy asset manifest into Eleventy's data directory to trigger a build when assets are updated.
mix.then(() => {
    moveFile.sync("dist/assets/mix-manifest.json", "src/_data/assets.json");
});
