(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-popups-popups-module"],{

/***/ "./src/app/front/popups/popups.component.html":
/*!****************************************************!*\
  !*** ./src/app/front/popups/popups.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crudpopup></app-crudpopup>\r\n"

/***/ }),

/***/ "./src/app/front/popups/popups.component.scss":
/*!****************************************************!*\
  !*** ./src/app/front/popups/popups.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/front/popups/popups.component.ts":
/*!**************************************************!*\
  !*** ./src/app/front/popups/popups.component.ts ***!
  \**************************************************/
/*! exports provided: PopupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsComponent", function() { return PopupsComponent; });
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

var PopupsComponent = /** @class */ (function () {
    function PopupsComponent() {
    }
    PopupsComponent.prototype.ngOnInit = function () { };
    PopupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popups',
            template: __webpack_require__(/*! ./popups.component.html */ "./src/app/front/popups/popups.component.html"),
            styles: [__webpack_require__(/*! ./popups.component.scss */ "./src/app/front/popups/popups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupsComponent);
    return PopupsComponent;
}());



/***/ }),

/***/ "./src/app/front/popups/popups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/front/popups/popups.module.ts ***!
  \***********************************************/
/*! exports provided: routes, PopupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsModule", function() { return PopupsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _popups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popups.component */ "./src/app/front/popups/popups.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _popups_component__WEBPACK_IMPORTED_MODULE_5__["PopupsComponent"], pathMatch: 'full' }
];
var PopupsModule = /** @class */ (function () {
    function PopupsModule() {
    }
    PopupsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _popups_component__WEBPACK_IMPORTED_MODULE_5__["PopupsComponent"]
            ]
        })
    ], PopupsModule);
    return PopupsModule;
}());



/***/ })

}]);
//# sourceMappingURL=front-popups-popups-module.js.map