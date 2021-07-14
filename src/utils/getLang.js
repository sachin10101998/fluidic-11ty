"use strict";

module.exports = (filePathStem, collection) => {
    return filePathStem.replace(new RegExp(`\/collections\/${collection}\/([A-Za-z-]*)\/[a-z0-9-]*`, "g"), "$1");
};
