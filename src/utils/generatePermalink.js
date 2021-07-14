"use strict";

const config = require("../_data/config.json");
const getLang = require("./getLang.js");
const slugFilter = require("../../node_modules/eleventy-plugin-fluid/src/filters/slug-filter.js");
const translations = require("../_data/translations.json");

module.exports = (data, collectionType) => {
    /* If this post is a "stub" with no localized title, we assume it does not exist and prevent it from building. */
    if (!Object.prototype.hasOwnProperty.call(data, "title")) {
        return false;
    }

    const lang = getLang(data.page.filePathStem, collectionType);
    const shortLang = lang.split("-")[0];
    const slug = slugFilter(data.title);

    if (collectionType === "pages") {
        if (data.page.fileSlug === lang) {
            return (lang === config.languages[0].code) ? "/" : `/${shortLang}/`;
        }

        return (lang === config.languages[0].code) ? `/${slug}/` : `/${shortLang}/${slug}/`;
    } else {
        return (lang === config.languages[0].code) ? `/${translations[lang][collectionType]}/${slug}/` : `/${shortLang}/${translations[lang][collectionType]}/${slug}/`;
    }
};
