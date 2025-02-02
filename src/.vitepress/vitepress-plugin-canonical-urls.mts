// https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link

export default {
    transformPageData(pageData, config) {
        const canonicalUrl = `${config.hostname}/${pageData.relativePath}`
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '.html')

        pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])
    }
}