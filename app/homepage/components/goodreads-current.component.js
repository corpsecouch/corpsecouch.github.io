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
var GoodreadsCurrentComponent = (function () {
    function GoodreadsCurrentComponent(goodreadsService) {
        this.goodreadsService = goodreadsService;
    }
    GoodreadsCurrentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goodreadsService.getCurrentBook()
            .subscribe(function (book) { return _this.book = book; }, function (error) { return _this.errorMessage = error; });
    };
    GoodreadsCurrentComponent = __decorate([
        core_1.Component({
            selector: 'goodreads-current',
            template: "\n  <book [data]=\"book\"></book>\n  "
        }), 
        __metadata('design:paramtypes', [goodreads_service_1.GoodreadsService])
    ], GoodreadsCurrentComponent);
    return GoodreadsCurrentComponent;
}());
exports.GoodreadsCurrentComponent = GoodreadsCurrentComponent;
//# sourceMappingURL=goodreads-current.component.js.map