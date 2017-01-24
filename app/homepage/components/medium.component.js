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
var medium_service_1 = require('../services/medium.service');
var MediumComponent = (function () {
    function MediumComponent(mediumService) {
        this.mediumService = mediumService;
        this.postsToDisplay = -1;
    }
    MediumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mediumService.getRecentArticles()
            .subscribe(
        //articles => this.articles = articles,
        function (articles) {
            if (_this.postsToDisplay < 0) {
                _this.articles = articles;
            }
            else if (_this.postsToDisplay > 0) {
                var numDisplayablePosts = Math.min(_this.postsToDisplay, articles.length);
                articles.splice(-numDisplayablePosts, numDisplayablePosts);
                _this.articles = articles;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MediumComponent.prototype, "postsToDisplay", void 0);
    MediumComponent = __decorate([
        core_1.Component({
            selector: 'medium',
            styles: ["\n  .articles{\n    width: 100%;\n    position: relative;\n  }\n\n  article{\n    -webkit-flex-shrink: 0;\n    flex-shrink: 0;\n    width: 100%;\n    margin-right: 8rem;\n    margin-bottom: 2rem;\n    cursor: pointer;\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.07);\n    padding: 0.5em;\n  }\n\n  .more{\n    display: block;\n    text-align: center;\n  }\n  "],
            template: "\n  <div class=\"articles\">\n    <article *ngFor=\"let article of articles\" [data]=\"article\"></article>\n    <a href=\"\" target=\"_blank\" class=\"more\">Read more&#8230;</a>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [medium_service_1.MediumService])
    ], MediumComponent);
    return MediumComponent;
}());
exports.MediumComponent = MediumComponent;
//# sourceMappingURL=medium.component.js.map