(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-accueil-accueil-module"],{

/***/ "./src/app/espace/banque/accueil/accueil.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/espace/banque/accueil/accueil.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, AccueilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilModule", function() { return AccueilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accueil/accueil.component */ "./src/app/espace/banque/accueil/accueil/accueil.component.ts");
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
    { path: '', component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__["AccueilComponent"], pathMatch: 'full' },
];
var AccueilModule = /** @class */ (function () {
    function AccueilModule() {
    }
    AccueilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__["AccueilComponent"]]
        })
    ], AccueilModule);
    return AccueilModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/accueil/accueil/accueil.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/espace/banque/accueil/accueil/accueil.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"column\" fxLayoutGap=\"30px\" class=\"px-24\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\r\n    <a [routerLink]=\"['/credit','suivi-credit']\" fxFlex=\"50\" class=\"panel\">\r\n      <div>\r\n        <span class=\"title\"><mat-icon>dialpad</mat-icon> Suivi Crédit</span>\r\n      </div>\r\n    </a>\r\n    <a [routerLink]=\"['/depot','suivi-depot']\" fxFlex=\"50\" class=\"panel\">\r\n      <div>\r\n        <span class=\"title\"> <mat-icon>save_alt</mat-icon> Suivi Ligne de Dépot </span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\r\n    <a [routerLink]=\"['/produit-banq']\" fxFlex=\"50\" class=\"panel\">\r\n      <div>\r\n        <span class=\"title\"><mat-icon>swap_calls</mat-icon> suivi Livraison produit</span>\r\n      </div>\r\n    </a>\r\n    <a [routerLink]=\"['/devis']\" fxFlex=\"50\" class=\"panel\">\r\n      <div>\r\n        <span class=\"title\"><mat-icon>file_copy</mat-icon> suivi devis </span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\">\r\n    <a [routerLink]=\"['/flux-commissionement']\" fxFlex=\"50\" class=\"panel\">\r\n      <div>\r\n        <span class=\"title\"><mat-icon>donut_large</mat-icon> Livraison</span>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/accueil/accueil/accueil.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/espace/banque/accueil/accueil/accueil.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 100%;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.elmt-content {\n  padding: 5px;\n  background-color: rgba(131, 131, 182, 0.288); }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.panel {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n  padding: 3%;\n  text-decoration: none;\n  background-color: #49565d;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/espace/banque/accueil/accueil/accueil.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/espace/banque/accueil/accueil/accueil.component.ts ***!
  \********************************************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
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

var AccueilComponent = /** @class */ (function () {
    function AccueilComponent() {
    }
    AccueilComponent.prototype.ngOnInit = function () {
    };
    AccueilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/espace/banque/accueil/accueil/accueil.component.html"),
            styles: [__webpack_require__(/*! ./accueil.component.scss */ "./src/app/espace/banque/accueil/accueil/accueil.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-banque-accueil-accueil-module.js.map