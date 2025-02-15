import { createContentLoader } from 'vitepress';
import _ from 'lodash'

const articlesGlob = 'articles/archive/**/*.md'

const trimEndSlash = function(str) { return str.replace(/\/$/, '') }
const trimFrontSlash = function(str) { return str.replace(/^\//,'') }

const getArticleRelativeUrl = function(path) {
    let url = `${path}`.replace(/index\.md$/,'')
    if(process.env.NODE_ENV === 'production') return `${url}`.replace(/archive\//, '')
    else return url
}

const getArticleFullUrl = function(path, root) {
    return trimEndSlash(root) + '/' + trimFrontSlash(getArticleRelativeUrl(path))
}

const getImageRelativeUrl = function(filename, path) {
    return trimEndSlash(getArticleRelativeUrl(path)) + '/' + trimFrontSlash(filename)
}

const getImageFullUrl = function(filename, path, root) {
    return trimEndSlash(getArticleFullUrl(path, root)) + '/' + trimFrontSlash(filename)
}

export { getImageFullUrl }

export default (function(){
    const articles = createContentLoader(articlesGlob)

    // load the article data
    articles.load().then((data) => {

        // iterate across each article and modify the frontmatter
        _.map(data, (article) => {
            // convert the date from a string to a date object
            article.frontmatter.date = new Date(article.frontmatter.date)

            // remove 'archive' from the url; it's still in there even with a route rewrite
            // if(process.env.NODE_ENV === 'production') article.url = `${article.url}`.replace(/archive\//, '')
            article.url = getArticleRelativeUrl(article.url)

            // make sure there's a preview object in the frontmatter
            if(!article.frontmatter.preview) article.frontmatter.preview = {}

            // create a full url for the preview image
            // if(article.frontmatter.preview.image) article.frontmatter.preview.imageurl = article.url + article.frontmatter.preview.image
            if(article.frontmatter.preview.image) article.frontmatter.preview.imageurl = getImageRelativeUrl(article.frontmatter.preview.image, article.url)
        })

    })

    return articles
})()