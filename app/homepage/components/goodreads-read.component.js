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
var goodreads_service_1 = require('../services/goodreads.service');
var GoodreadsReadComponent = (function () {
    function GoodreadsReadComponent(goodreadsService) {
        this.goodreadsService = goodreadsService;
    }
    GoodreadsReadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goodreadsService.getReadBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    GoodreadsReadComponent = __decorate([
        core_1.Component({
            selector: 'goodreads-read',
            styles: ["\n    @keyframes example{\n      to{\n        -webkit-filter: opacity(1) saturate(1);\n        filter: opacity(1) saturate(1);\n      }\n    }\n\n    book{\n      -webkit-filter: opacity(0.16) saturate(0.4);\n      filter: opacity(0.16) saturate(0.4);\n      margin-right: 0.3rem;\n    }\n\n    book:hover{\n      -webkit-animation-name: example;\n      animation-name: example;\n\n      -webkit-animation-timing-function: ease;\n      animation-timing-function: ease;\n\n      -webkit-animation-duration: 0.3s;\n      animation-duration: 0.3s;\n\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n    }\n  "],
            template: "\n  <book *ngFor=\"let book of books\" [data]=\"book\"></book>\n  "
        }), 
        __metadata('design:paramtypes', [goodreads_service_1.GoodreadsService])
    ], GoodreadsReadComponent);
    return GoodreadsReadComponent;
}());
exports.GoodreadsReadComponent = GoodreadsReadComponent;
//# sourceMappingURL=goodreads-read.component.js.map