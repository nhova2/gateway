(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-flux-commission-flux-commission-module"],{

/***/ "./src/app/espace/banque/flux-commission/flux-commission.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/espace/banque/flux-commission/flux-commission.module.ts ***!
  \*************************************************************************/
/*! exports provided: routes, FluxCommissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxCommissionModule", function() { return FluxCommissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flux_commission_flux_commission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flux-commission/flux-commission.component */ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _flux_commission_flux_commission_component__WEBPACK_IMPORTED_MODULE_2__["FluxCommissionComponent"], pathMatch: 'full' },
];
var FluxCommissionModule = /** @class */ (function () {
    function FluxCommissionModule() {
    }
    FluxCommissionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_flux_commission_flux_commission_component__WEBPACK_IMPORTED_MODULE_2__["FluxCommissionComponent"]]
        })
    ], FluxCommissionModule);
    return FluxCommissionModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  flux-commission works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FluxCommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxCommissionComponent", function() { return FluxCommissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FluxCommissionComponent = /** @class */ (function () {
    function FluxCommissionComponent() {
    }
    FluxCommissionComponent.prototype.ngOnInit = function () {
    };
    FluxCommissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flux-commission',
            template: __webpack_require__(/*! ./flux-commission.component.html */ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.html"),
            styles: [__webpack_require__(/*! ./flux-commission.component.scss */ "./src/app/espace/banque/flux-commission/flux-commission/flux-commission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FluxCommissionComponent);
    return FluxCommissionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-banque-flux-commission-flux-commission-module.js.map