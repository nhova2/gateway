(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-banque-devis-devis-module"],{

/***/ "./src/app/espace/banque/devis/devis.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/espace/banque/devis/devis.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, DevisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevisModule", function() { return DevisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _suivi_devis_suivi_devis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suivi-devis/suivi-devis.component */ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suivi_devis_details_suivi_devis_details_suivi_devis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suivi-devis/details-suivi-devis/details-suivi-devis.component */ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _suivi_devis_suivi_devis_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDevisComponent"], pathMatch: 'full' },
    { path: 'details-suivi-devis/:id', component: _suivi_devis_details_suivi_devis_details_suivi_devis_component__WEBPACK_IMPORTED_MODULE_6__["DetailsSuiviDevisComponent"], pathMatch: 'full' },
];
var DevisModule = /** @class */ (function () {
    function DevisModule() {
    }
    DevisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_suivi_devis_suivi_devis_component__WEBPACK_IMPORTED_MODULE_2__["SuiviDevisComponent"], _suivi_devis_details_suivi_devis_details_suivi_devis_component__WEBPACK_IMPORTED_MODULE_6__["DetailsSuiviDevisComponent"]]
        })
    ], DevisModule);
    return DevisModule;
}());



/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <fieldset>\r\n    <div fxLayout=\"column\">\r\n      <div fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n        <div fxFlex=\"100\">\r\n          <div class=\"form-container\">\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Fournisseur\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Montant HT\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"100\">\r\n          <div class=\"form-container\">\r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"TVA\">\r\n              </mat-form-field>\r\n            </div>\r\n    \r\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.xs=\"column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"MONTANT TTC\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n  </fieldset>  \r\n  <fieldset>\r\n    <legend>Details produit</legend>\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    \r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    \r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"Denomination\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Denomination </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.Denomination}} </td>\r\n        </ng-container>\r\n    \r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"Unite\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Unite </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.Unite}} </td>\r\n        </ng-container>\r\n    \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"Quantite\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Quantite </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.Quantite}} </td>\r\n        </ng-container>\r\n    \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </tr>\r\n      </table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  </fieldset>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetailsSuiviDevisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSuiviDevisComponent", function() { return DetailsSuiviDevisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsSuiviDevisComponent = /** @class */ (function () {
    function DetailsSuiviDevisComponent() {
        this.displayedColumns = ['Denomination', 'Unite', 'Quantite'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    DetailsSuiviDevisComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DetailsSuiviDevisComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DetailsSuiviDevisComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DetailsSuiviDevisComponent.prototype, "sort", void 0);
    DetailsSuiviDevisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-suivi-devis',
            template: __webpack_require__(/*! ./details-suivi-devis.component.html */ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.html"),
            styles: [__webpack_require__(/*! ./details-suivi-devis.component.scss */ "./src/app/espace/banque/devis/suivi-devis/details-suivi-devis/details-suivi-devis.component.scss")]
        })
    ], DetailsSuiviDevisComponent);
    return DetailsSuiviDevisComponent;
}());

var ELEMENT_DATA = [
    { Denomination: '500XA', Unite: 'kg', Quantite: '25' },
    { Denomination: 'Y855', Unite: 'kg', Quantite: '80' },
    { Denomination: 'z500', Unite: 'kg', Quantite: '1500' },
];


/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\r\n  <div>\r\n    <h2 class=\"title\">SUIVI DEVIS</h2>\r\n  </div>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"Numero\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Numero </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Numero}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"Fournisseur\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fournisseur </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Fournisseur}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"Client\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Client </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Client}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"Date_Creation\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date_Creation </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Date_Creation}}\r\n\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Details\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Details}}\r\n        <button mat-raised-button [routerLink]=\"['/devis','details-suivi-devis',1]\">\r\n          <mat-icon class=\"orange600\">edit</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #9a3838ba; }\n"

/***/ }),

/***/ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuiviDevisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviDevisComponent", function() { return SuiviDevisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuiviDevisComponent = /** @class */ (function () {
    function SuiviDevisComponent() {
        this.displayedColumns = ['Numero', 'Fournisseur', 'Client', 'Date_Creation', 'Details'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SuiviDevisComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SuiviDevisComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SuiviDevisComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SuiviDevisComponent.prototype, "sort", void 0);
    SuiviDevisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suivi-devis',
            template: __webpack_require__(/*! ./suivi-devis.component.html */ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.html"),
            styles: [__webpack_require__(/*! ./suivi-devis.component.scss */ "./src/app/espace/banque/devis/suivi-devis/suivi-devis.component.scss")]
        })
    ], SuiviDevisComponent);
    return SuiviDevisComponent;
}());

var ELEMENT_DATA = [
    { Numero: '500XA', Fournisseur: '58', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },
    { Numero: 'Y855', Fournisseur: '89', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },
    { Numero: 'z500', Fournisseur: '89', Client: 'NDT', Date_Creation: '18/04/18', Details: '' },
];


/***/ })

}]);
//# sourceMappingURL=espace-banque-devis-devis-module.js.map