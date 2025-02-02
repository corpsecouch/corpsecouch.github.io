export default {
    transformPageData(pageData, config) {
        pageData.frontmatter.head.push([
            'script',
            {
              type: 'application/ld+json'
            },
            `{
              "@context": "https://schema.org",
              "@type": "${config.type}",
              "headline": "${config.headline}",
              "datePublished": "${config.datePublished}"
            }`
          ])
    }
}