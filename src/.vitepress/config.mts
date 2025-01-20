import { defineConfig } from 'vitepress'

const hostname = 'https://jasonbejot.com'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jason Bejot",

  description: "Jason Bejot's website",

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: hostname,
    lastmodDateOnly: true
  },

  // https://vitepress.dev/reference/site-config#example-using-google-analytics
  // head: [
  //   [
  //     'script',
  //     { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}` }
  //   ],
  //   [
  //     'script',
  //     {},
  //     `window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', '${GTAG_ID}', {
  //         'send_page_view': true
  //     });`
  //   ]
  // ]

  // add canonical urls to each page
  // https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link
  transformPageData(pageData) {
    // console.log('transformPageData')
    // console.log(pageData)
    const canonicalUrl = `${hostname}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Built from scratch with care.',
      copyright: '© Jason Bejot'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Awards', link: '/awards/' },
      { text: 'Press', link: '/press/' },
      { text: 'Portfolio', link: '/portfolio/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
