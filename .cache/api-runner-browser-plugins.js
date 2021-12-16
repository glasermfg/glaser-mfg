module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-preact/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"goes here","head":false,"pageTransitionDelay":0,"defer":false,"anonymize":false,"respectDNT":false,"exclude":[]},
    }]
