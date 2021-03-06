let mix = require("laravel-mix");

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./templates/**/*.twig",
    "./layouts/**/*.twig",
    "./js/**/*.vue",
    "../../../modules/custom/my_layouts/layouts/**/*.twig"
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

mix
  .js("js/main.js", "dist/js")
  .postCss("css/main.css", "dist/css", [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]);
