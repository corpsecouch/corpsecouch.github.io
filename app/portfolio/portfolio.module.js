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
var portfolio_routing_module_1 = require('./portfolio-routing.module');
var portfolio_component_1 = require('./portfolio.component');
var portfolio_list_component_1 = require('./portfolio-list.component');
var viewmaster_component_1 = require('./case-studies/viewmaster.component');
var hex_component_1 = require('./case-studies/hex.component');
var castl_component_1 = require('./case-studies/castl.component');
var ar_concept_component_1 = require('./case-studies/ar-concept.component');
var visual_example_component_1 = require('./components/visual-example.component');
var section_component_1 = require('./components/section.component');
var header_component_1 = require('./components/header.component');
var PortfolioModule = (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                portfolio_routing_module_1.PortfolioRoutingModule
            ],
            declarations: [
                portfolio_component_1.PortfolioComponent,
                portfolio_list_component_1.PortfolioListComponent,
                viewmaster_component_1.ViewmasterComponent,
                hex_component_1.HexComponent,
                castl_component_1.CastlComponent,
                ar_concept_component_1.ARConceptComponent,
                visual_example_component_1.VisualExampleComponent,
                section_component_1.SectionComponent,
                header_component_1.HeaderComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioModule);
    return PortfolioModule;
}());
exports.PortfolioModule = PortfolioModule;
//# sourceMappingURL=portfolio.module.js.map