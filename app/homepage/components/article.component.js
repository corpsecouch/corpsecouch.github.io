"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_1 = require('../data/article');
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], ArticleComponent.prototype, "data", void 0);
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            styles: ["\n    .image{\n      overflow: hidden;\n    }\n\n    .image > img{\n      width: 100%;\n    }\n\n    .date{\n      font-size: 0.8rem;\n    }\n\n    .subtitle{\n      font-size: 1.3rem;\n      letter-spacing: 0.08rem;\n      line-height: 2rem;\n    }\n\n  "],
            template: "\n    <div class=\"image\">\n      <img *ngIf=\"data.image\" src=\"https://cdn-images-1.medium.com/max/2000/{{data.image}}\">\n    </div>\n    <a class=\"title\" href=\"http://medium.com/@jasonbejot/{{data.slug}}\">{{data.title}}</a>\n    <div class=\"date\">{{data.date}}</div>\n    <div class=\"subtitle\">{{data.subtitle}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map