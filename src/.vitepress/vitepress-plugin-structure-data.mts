// import _ from 'lodash'

export default {
    transformPageData(pageData, config) {

      // make sure there's an images array
      if(!config.images) config.images = []

      // wrap each image url in double quotes
      for(let i = 0; i < config.images.length; i++) config.images[i] = `"${config.images[i]}"`

      pageData.frontmatter.head.push([
        'script',
        {
          type: 'application/ld+json'
        },
        `{
          "@context": "https://schema.org",
          "@type": "${config.type}",
          "headline": "${config.headline}",
          "datePublished": "${config.datePublished}",
          "author": [{
            "@type": "Person",
            "name": "${config.author}"
          }],
          "images": [
            ${config.images.join(',\n')}
          ]
        }`
      ])

    }
}