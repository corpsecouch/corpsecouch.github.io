export default {
    transformPageData(pageData) {
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
    }
}