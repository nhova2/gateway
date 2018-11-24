(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-acheteur-livraison-livraison-module"],{

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  livraison-acheteur works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LivraisonAcheteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivraisonAcheteurComponent", function() { return LivraisonAcheteurComponent; });
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

var LivraisonAcheteurComponent = /** @class */ (function () {
    function LivraisonAcheteurComponent() {
    }
    LivraisonAcheteurComponent.prototype.ngOnInit = function () {
    };
    LivraisonAcheteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-livraison-acheteur',
            template: __webpack_require__(/*! ./livraison-acheteur.component.html */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.html"),
            styles: [__webpack_require__(/*! ./livraison-acheteur.component.scss */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LivraisonAcheteurComponent);
    return LivraisonAcheteurComponent;
}());



/***/ }),

/***/ "./src/app/espace/acheteur/livraison/livraison.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/espace/acheteur/livraison/livraison.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, LivraisonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivraisonModule", function() { return LivraisonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./livraison-acheteur/livraison-acheteur.component */ "./src/app/espace/acheteur/livraison/livraison-acheteur/livraison-acheteur.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["LivraisonAcheteurComponent"], pathMatch: 'full' }
];
var LivraisonModule = /** @class */ (function () {
    function LivraisonModule() {
    }
    LivraisonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_livraison_acheteur_livraison_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["LivraisonAcheteurComponent"]]
        })
    ], LivraisonModule);
    return LivraisonModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-acheteur-livraison-livraison-module.js.map