const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/img/");

  config.addCollection("manual", function (collection) {
    let en = sortByDisplayOrder(
      collection.getFilteredByGlob(`./src/en/manual/*.md`)
    );
    let fr = sortByDisplayOrder(
      collection.getFilteredByGlob(`./src/fr/manuel/*.md`)
    );

    return { en: en, fr: fr };
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
