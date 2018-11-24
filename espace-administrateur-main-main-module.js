(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-administrateur-main-main-module"],{

/***/ "./src/app/espace/administrateur/main/main-admin/main-admin.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/administrateur/main/main-admin/main-admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxlayoutAlign=\"center center\">\r\n  <div fxLayout=\"row\" fxLayoutGap=\"100px\" fxLayout.xs=\"column\" fxlayoutAlign=\"center center\">\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"primary\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"primary\">Nom Prenom</h4>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"100px\" fxLayout.xs=\"column\" fxlayoutAlign=\"center center\">\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutGap=\"100px\" fxLayout.xs=\"column\" fxlayoutAlign=\"center center\">\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n    <div>\r\n      <h4 matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Nom Prenom</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/administrateur/main/main-admin/main-admin.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/administrateur/main/main-admin/main-admin.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/espace/administrateur/main/main-admin/main-admin.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/administrateur/main/main-admin/main-admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MainAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminComponent", function() { return MainAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainAdminComponent = /** @class */ (function () {
    function MainAdminComponent(parCrud) {
        this.parCrud = parCrud;
        this.crudComp = this.parCrud;
    }
    MainAdminComponent.prototype.ngOnInit = function () {
    };
    MainAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-admin',
            template: __webpack_require__(/*! ./main-admin.component.html */ "./src/app/espace/administrateur/main/main-admin/main-admin.component.html"),
            styles: [__webpack_require__(/*! ./main-admin.component.scss */ "./src/app/espace/administrateur/main/main-admin/main-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_1__["CrudPopupComponent"]])
    ], MainAdminComponent);
    return MainAdminComponent;
}());



/***/ }),

/***/ "./src/app/espace/administrateur/main/main.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/espace/administrateur/main/main.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-admin/main-admin.component */ "./src/app/espace/administrateur/main/main-admin/main-admin.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_3__["MainAdminComponent"], pathMatch: 'full' }
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            declarations: [_main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_3__["MainAdminComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-administrateur-main-main-module.js.map