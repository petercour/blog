const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/linux/my-blog-start/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/linux/my-blog-start/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/linux/my-blog-start/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/linux/my-blog-start/src/pages/index.js")))
}

