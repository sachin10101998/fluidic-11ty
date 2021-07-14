"use strict";

const getLang = require("../../utils/getLang.js");
const generatePermalink = require("../../utils/generatePermalink.js");

module.exports = {
    layout: "layouts/page.njk",
    eleventyComputed: {
        /* Determine the language of this item based on the language code in the file path. */
        lang: data => getLang(data.page.filePathStem, "pages"),
        /* Set the translationKey, used for populating the language switcher, to the file slug. */
        translationKey: data => {
            const lang = getLang(data.page.filePathStem, "pages");

            if (data.page.fileSlug === lang) {
                return "index";
            }

            return data.page.fileSlug;
        },
        eleventyNavigation: data => {
            /* If this page has an `order` attribute, create an Eleventy Navigation object for it. */
            if (data.order) {
                return {
                    parent: data.lang,
                    order: data.order,
                    /* If a key is set, use that for the navigation item label; otherwise use the page title. */
                    key: Object.prototype.hasOwnProperty.call(data, "key") ? data.key : data.title
                };
            }
            return false;
        },
        /* Build a permalink using the post title and language key. */
        permalink: data => generatePermalink(data, "pages")
    }
};
