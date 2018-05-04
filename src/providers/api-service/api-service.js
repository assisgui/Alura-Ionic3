var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var ApiServiceProvider = (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        this._url = 'http://192.168.1.103:8080/api/';
    }
    Object.defineProperty(ApiServiceProvider.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ApiServiceProvider);
export { ApiServiceProvider };
//# sourceMappingURL=api-service.js.map