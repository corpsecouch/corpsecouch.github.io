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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderComponent.prototype, "imageUrl", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            styleUrls: [
                'styles/layout.css',
                'app/portfolio/components/section.styles.css',
                'app/portfolio/components/header.styles.css'
            ],
            template: "\n  <div class=\"section\" [style.background-image]=\"imageUrl ? 'url(' + imageUrl + ')' : ''\">\n    <div class=\"flex row wrap\">\n      <div class=\"content\">\n        <ng-content select=\"[title]\"></ng-content>\n        <ng-content select=\"[subtitle]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map