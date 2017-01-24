"use strict";
var Article = (function () {
    function Article(elem) {
        this.slug = elem.uniqueSlug;
        this.image = elem.virtuals.previewImage.imageId;
        this.date = elem.virtuals.updatedAtRelative;
        this.title = elem.title;
        this.subtitle = elem.content.subtitle;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map