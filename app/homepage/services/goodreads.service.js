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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var GoodreadsService = (function () {
    function GoodreadsService(http) {
        this.http = http;
        this.server = 'http://jb-api-jasonbejot.7e14.starter-us-west-2.openshiftapps.com';
        this.currentEndpoint = 'goodreads/current';
        this.readEndpoint = 'goodreads/read';
    }
    GoodreadsService.prototype.getReadBooks = function () {
        return this.http
            .get(this.server + this.readEndpoint)
            .map(function (res) {
            var data = res.json();
            return data.data;
        })
            .catch(this.handleError);
    };
    GoodreadsService.prototype.getCurrentBook = function () {
        return this.http
            .get(this.server + this.currentEndpoint)
            .map(function (res) {
            var data = res.json();
            return (data.data || {});
        })
            .catch(this.handleError);
    };
    GoodreadsService.prototype.handleError = function (err) {
        console.error(err);
        return Observable_1.Observable.throw(err.message);
    };
    return GoodreadsService;
}());
GoodreadsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GoodreadsService);
exports.GoodreadsService = GoodreadsService;
//# sourceMappingURL=goodreads.service.js.map