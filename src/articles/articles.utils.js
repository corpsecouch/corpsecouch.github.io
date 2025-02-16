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

export { getArticleRelativeUrl, getArticleFullUrl, getImageRelativeUrl, getImageFullUrl }