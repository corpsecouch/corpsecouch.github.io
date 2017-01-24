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
var router_1 = require('@angular/router');
var portfolio_component_1 = require('./portfolio.component');
var portfolio_list_component_1 = require('./portfolio-list.component');
var viewmaster_component_1 = require('./case-studies/viewmaster.component');
var hex_component_1 = require('./case-studies/hex.component');
var castl_component_1 = require('./case-studies/castl.component');
var ar_concept_component_1 = require('./case-studies/ar-concept.component');
var routes = [
    {
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent,
        children: [
            {
                path: '',
                component: portfolio_list_component_1.PortfolioListComponent
            },
            /*{
              path: ':slug',
              component: CaseStudyComponent
            }*/
            {
                path: 'viewmaster',
                component: viewmaster_component_1.ViewmasterComponent
            },
            {
                path: 'hex',
                component: hex_component_1.HexComponent
            },
            {
                path: 'castl',
                component: castl_component_1.CastlComponent
            },
            {
                path: 'ar-concept',
                component: ar_concept_component_1.ARConceptComponent
            }
        ]
    }
];
var PortfolioRoutingModule = (function () {
    function PortfolioRoutingModule() {
    }
    PortfolioRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioRoutingModule);
    return PortfolioRoutingModule;
}());
exports.PortfolioRoutingModule = PortfolioRoutingModule;
//# sourceMappingURL=portfolio-routing.module.js.map