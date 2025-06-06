import { createContentLoader } from 'vitepress';
import _ from 'lodash'
import { getArticleRelativeUrl, getImageRelativeUrl } from './articles.utils.js'

const articlesGlob = 'articles/archive/**/*.md'

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