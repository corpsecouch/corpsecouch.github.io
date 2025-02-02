// https://vitepress.dev/reference/site-config#example-using-google-analytics

export default {
    transformPageData(pageData, config) {
      pageData.frontmatter.head.push([
        'script',
        {
          async: '',
          src: `https://www.googletagmanager.com/gtag/js?id=${config.gtag}`
        }
      ])
      
      pageData.frontmatter.head.push([
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${config.gtag}');`
      ])
    }
}