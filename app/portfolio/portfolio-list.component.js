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
var platform_browser_1 = require('@angular/platform-browser');
var PortfolioListComponent = (function () {
    function PortfolioListComponent(titleService) {
        this.titleService = titleService;
    }
    PortfolioListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Portfolio of Jason Bejot');
    };
    PortfolioListComponent = __decorate([
        core_1.Component({
            styleUrls: [
                'styles/interior.css',
                'app/portfolio/portfolio.styles.css'
            ],
            template: "\n  <header>\n    <h1 title>My Portfolio</h1>\n    <p subtitle>A selection of things I've worked on presented as case studies.</p>\n  </header>\n\n  <!--<template ngFor let-caseStudy [ngForOf]=\"caseStudies\">\n    <div class=\"flex row section\">\n      <div class=\"content\">\n        <h2><a [routerLink]=\"[ '/portfolio', caseStudy.slug ]\">{{caseStudy.title}}</a></h2>\n        <div [innerHtml]=\"caseStudy.description\"></div>\n      </div>\n    </div>\n  </template>-->\n\n  <section [routerLink]=\"[ '/portfolio', 'viewmaster' ]\">\n    <h2 title>Viewmaster</h2>\n    <content>\n      <p>A holistic VR showcase experience across multiple VR platforms.</p>\n      <ul>\n        <li>Experience Designer</li>\n        <li>Art Director</li>\n        <li>Strategist</li>\n        <li>Manager</li>\n      </ul>\n    </content>\n  </section>\n\n  <section title=\"Hex\" [routerLink]=\"[ '/portfolio', 'hex' ]\">\n    <h2 title>Hex</h2>\n    <content>\n      <p>The design language for Disney Studio's enterprise applications.</p>\n    </content>\n  </section>\n\n  <section title=\"CASTL\" [routerLink]=\"[ '/portfolio', 'castl' ]\">\n    <h2 title>CASTL</h2>\n    <content>\n      <p>The gatekeeper for all stories that Disney turns into films, CASTL manages the pre-greenlight process of script and story development.</p>\n      <ul>\n        <li>Experience Designer</li>\n        <li>Product Owner</li>\n        <li>Art Director</li>\n        <li>Strategist</li>\n        <li>Manager</li>\n      </ul>\n    </content>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], PortfolioListComponent);
    return PortfolioListComponent;
}());
exports.PortfolioListComponent = PortfolioListComponent;
//# sourceMappingURL=portfolio-list.component.js.map