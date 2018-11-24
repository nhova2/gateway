(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-administrateur-sauvegarde-sauvegarde-module"],{

/***/ "./src/app/espace/administrateur/sauvegarde/sauvegarde.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/espace/administrateur/sauvegarde/sauvegarde.module.ts ***!
  \***********************************************************************/
/*! exports provided: routes, SauvegardeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauvegardeModule", function() { return SauvegardeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sauvegarde_sauvegarde_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sauvegarde/sauvegarde.component */ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _sauvegarde_sauvegarde_component__WEBPACK_IMPORTED_MODULE_2__["SauvegardeComponent"], pathMatch: 'full' }
];
var SauvegardeModule = /** @class */ (function () {
    function SauvegardeModule() {
    }
    SauvegardeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            ],
            declarations: [_sauvegarde_sauvegarde_component__WEBPACK_IMPORTED_MODULE_2__["SauvegardeComponent"]]
        })
    ], SauvegardeModule);
    return SauvegardeModule;
}());



/***/ }),

/***/ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\r\n  <div>\r\n    <h2 class=\"title\">Sauvegarde</h2>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"column\" fxLayoutGap=\"50px\" class=\"px-24\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\r\n    <div fxFlex=\"50\" class=\"panel\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"color:black; font-weight:bold\">\r\n        <div> <mat-checkbox>Photos</mat-checkbox></div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"panel\">\r\n\r\n      <div fxLayout=\"column\" style=\"color:black; font-weight:bold\" fxLayoutAlign=\"center center\">\r\n        \r\n        <div><mat-checkbox>Messages</mat-checkbox></div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"panel\">\r\n\r\n      <div fxLayout=\"column\" style=\"color:black; font-weight:bold\" fxLayoutAlign=\"center center\">\r\n        <div> <mat-checkbox>Videos</mat-checkbox></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"100px\" class=\"px-24\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date début\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date fin\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" class=\"px-24\" fxLayoutAlign=\"end\">\r\n    <button mat-raised-button color=\"warn\">Sauvegarder</button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.title2 {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: rgba(0, 0, 255, 0.555); }\n\n.elmt-content {\n  padding: 5px;\n  background-color: rgba(131, 131, 182, 0.288); }\n\n.orange600 {\n  color: #FB8C00; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.blue600 {\n  color: #0c36a8;\n  padding-top: 7px; }\n\n.bluelight600 {\n  color: rgba(12, 54, 168, 0.705);\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.panel {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n  padding: 3%;\n  text-decoration: none;\n  color: white;\n  background-color: #ccccff; }\n\nexample-margin {\n  margin: 0 10px;\n  width: 8em; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 25px; }\n"

/***/ }),

/***/ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SauvegardeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SauvegardeComponent", function() { return SauvegardeComponent; });
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

var SauvegardeComponent = /** @class */ (function () {
    function SauvegardeComponent() {
    }
    SauvegardeComponent.prototype.ngOnInit = function () {
    };
    SauvegardeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sauvegarde',
            template: __webpack_require__(/*! ./sauvegarde.component.html */ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.html"),
            styles: [__webpack_require__(/*! ./sauvegarde.component.scss */ "./src/app/espace/administrateur/sauvegarde/sauvegarde/sauvegarde.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SauvegardeComponent);
    return SauvegardeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=espace-administrateur-sauvegarde-sauvegarde-module.js.map