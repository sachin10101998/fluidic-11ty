"use strict";

const getLang = require("../../utils/getLang.js");
const generatePermalink = require("../../utils/generatePermalink.js");

module.exports = {
    layout: "layouts/post.njk",
    eleventyComputed: {
        /* Determine the language of this item based on the language code in the file path. */
        lang: data => getLang(data.page.filePathStem, "posts"),
        /* Set the translationKey, used for populating the language switcher, to the file slug. */
        translationKey: data => data.page.fileSlug,
        /* Build a permalink using the post title, language key, and translated collection type slug. */
        permalink: data => generatePermalink(data, "posts")
    }
};
