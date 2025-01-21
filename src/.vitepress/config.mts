import { defineConfig } from 'vitepress'
import { resolve } from 'path'

const hostname = 'https://jasonbejot.com'
const _isProd = process.env.NODE_ENV === 'production';
const _GtagID = 'G-G24FHEZ8YC';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jason Bejot",

  description: "Jason Bejot's website",

  vite: {
    resolve: {
        
      extensions: ['.js', '.vue'],
  
      alias: {
        "@": resolve(__dirname, "../"),
        // "@data": resolve(__dirname, "../data"),
        "@styles": resolve(__dirname, "../styles"),
        // "@assets": resolve(__dirname, "../assets"),
        // "@static": resolve(__dirname, "../"),
        "@globals": resolve(__dirname, "../globals"),
        "@portfolio": resolve(__dirname, "../portfolio"),
        "@components": resolve(__dirname, "../components"),
        "@press": resolve(__dirname, '../press'),
        "@awards": resolve(__dirname, '../awards')
      }
    }
  },

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: hostname,
    lastmodDateOnly: true
  },

  // https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link
  transformPageData(pageData) {
    const canonicalUrl = `${hostname}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []

    // add canonical urls to each page
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])

    // add favicons to each page
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '167x167', href: '/apple-touch-icon-167x167.png'}])
    pageData.frontmatter.head.push(['link', { rel:'apple-touch-icon-precomposed', sizes: '180x180', href: '/apple-touch-icon-180x180.png'}])
    pageData.frontmatter.head.push(['link', { rel:'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}])
    pageData.frontmatter.head.push(['link', { rel:'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}])
    pageData.frontmatter.head.push(['link', { rel:'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'}])
    pageData.frontmatter.head.push(['link', { rel:'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128x128.png'}])
    pageData.frontmatter.head.push(['link', { rel:'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196x196.png'}])

    // add google analytics to each page
    // https://vitepress.dev/reference/site-config#example-using-google-analytics
    if(_isProd && pageData.frontmatter.analytics && !pageData.frontmatter.analytics.disabled && pageData.frontmatter.analytics.title) {
      pageData.frontmatter.head.push([
        'script',
        { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${_GtagID}` }
      ])
      pageData.frontmatter.head.push([
        'script',
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${_GtagID}', {
              'send_page_view': true,
              'page_title': '${pageData.frontmatter.analytics.title}'
          });`
      ])
    }
  },

  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   footer: {
  //     message: 'Built from scratch with care.',
  //     copyright: '© Jason Bejot'
  //   },

  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Awards', link: '/awards/' },
  //     { text: 'Press', link: '/press/' },
  //     { text: 'Portfolio', link: '/portfolio/' }
  //   ],

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
  // }
})
