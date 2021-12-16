var plugins = [{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["cardo:400,700","poppins:400,700"],"display":"swap"},
    },{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-html-attributes/gatsby-ssr'),
      options: {"plugins":[],"lang":"en"},
    },{
      plugin: require('/Users/jarryd/Desktop/dev/glaser-mfg/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"goes here","head":false,"pageTransitionDelay":0,"defer":false,"anonymize":false,"respectDNT":false,"exclude":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
