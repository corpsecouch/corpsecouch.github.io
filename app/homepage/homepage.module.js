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
var common_1 = require('@angular/common');
var homepage_routing_module_1 = require('./homepage-routing.module');
var homepage_component_1 = require('./homepage.component');
var medium_component_1 = require('./components/medium.component');
var article_component_1 = require('./components/article.component');
var goodreads_current_component_1 = require('./components/goodreads-current.component');
var goodreads_read_component_1 = require('./components/goodreads-read.component');
var book_component_1 = require('./components/book.component');
var medium_service_1 = require('./services/medium.service');
var goodreads_service_1 = require('./services/goodreads.service');
var HomepageModule = (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                homepage_routing_module_1.HomepageRoutingModule
            ],
            declarations: [
                homepage_component_1.HomepageComponent,
                medium_component_1.MediumComponent,
                article_component_1.ArticleComponent,
                goodreads_current_component_1.GoodreadsCurrentComponent,
                goodreads_read_component_1.GoodreadsReadComponent,
                book_component_1.BookComponent
            ],
            providers: [
                medium_service_1.MediumService,
                goodreads_service_1.GoodreadsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomepageModule);
    return HomepageModule;
}());
exports.HomepageModule = HomepageModule;
//# sourceMappingURL=homepage.module.js.map