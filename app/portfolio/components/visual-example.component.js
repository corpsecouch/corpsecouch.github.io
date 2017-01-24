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
var VisualExampleComponent = (function () {
    function VisualExampleComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VisualExampleComponent.prototype, "image", void 0);
    VisualExampleComponent = __decorate([
        core_1.Component({
            selector: 'visual-example',
            template: "\n  <style>\n    :host {\n      padding: 1rem 1rem 0.6rem 1rem;\n      display:block;\n    }\n\n    img {\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    span {\n      font-size: 0.8rem;\n      display: block;\n      text-align: center;\n      font-style: italic;\n    }\n\n    @media screen {\n      :host {\n        background-color: rgba(0, 0, 0, 0.07);\n      }\n    }\n\n    @media print {\n      img {\n        display: block;\n        margin: 0 auto;\n        max-width: 60%;\n      }\n    }\n  </style>\n\n  <img src=\"assets/portfolio/{{image}}\">\n  <span><ng-content></ng-content></span>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], VisualExampleComponent);
    return VisualExampleComponent;
}());
exports.VisualExampleComponent = VisualExampleComponent;
//# sourceMappingURL=visual-example.component.js.map