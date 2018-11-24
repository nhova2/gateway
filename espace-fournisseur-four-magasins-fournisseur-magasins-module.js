(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-fournisseur-four-magasins-fournisseur-magasins-module"],{

/***/ "./src/app/espace/fournisseur/four-magasins/fournisseur-magasins.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-magasins/fournisseur-magasins.module.ts ***!
  \*********************************************************************************/
/*! exports provided: routes, MagasinsFournisseurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagasinsFournisseurModule", function() { return MagasinsFournisseurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _magasin_list_fourn_magasin_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magasin-list/fourn-magasin-list.component */ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _magasin_list_fourn_magasin_list_component__WEBPACK_IMPORTED_MODULE_7__["FoMagasinListComponent"], pathMatch: 'full' }
];
var MagasinsFournisseurModule = /** @class */ (function () {
    function MagasinsFournisseurModule() {
    }
    MagasinsFournisseurModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            ],
            declarations: [_magasin_list_fourn_magasin_list_component__WEBPACK_IMPORTED_MODULE_7__["FoMagasinListComponent"]]
        })
    ], MagasinsFournisseurModule);
    return MagasinsFournisseurModule;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\r\n  <div><h2 class=\"title\">SUIVI MAGASINS</h2></div>\r\n</div>\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"NoFoMagasin\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> # Magasin </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.NoFoMagasin}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"Nom\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Nom}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"Date_Emission\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Creation </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Date_Emission}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Adresse\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Adresse </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Adresse}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Contact\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.Contact}} </td>\r\n      </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Details\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Details </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Details}}<button mat-icon-button><mat-icon>dehaze</mat-icon></button></td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Modifier\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Modifier}}<button mat-icon-button (click)=\"crudComp.openUpdateMagasin()\"><i class=\"material-icons s-16\">edit</i></button> </td>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container matColumnDef=\"Supprimer\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Supprimer </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.Supprimer}} <button mat-icon-button><i class=\"material-icons s-16\">delete</i></button></td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  <button mat-raised-button color=\"primary\" (click)=\"crudComp.openCreateMagasin()\">\r\n      <span>AJOUT + MAGASIN</span>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.title {\n  font-weight: bold; }\n\n.title-top {\n  background-color: #134ae4ba; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FoMagasinListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoMagasinListComponent", function() { return FoMagasinListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoMagasinListComponent = /** @class */ (function () {
    function FoMagasinListComponent(parCrud) {
        this.parCrud = parCrud;
        this.displayedColumns = ['NoFoMagasin', 'Nom', 'Date_Emission', 'Adresse', 'Contact', 'Details', 'Modifier', 'Supprimer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.crudComp = this.parCrud;
    }
    FoMagasinListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    FoMagasinListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], FoMagasinListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], FoMagasinListComponent.prototype, "sort", void 0);
    FoMagasinListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fomagasin-list',
            template: __webpack_require__(/*! ./fourn-magasin-list.component.html */ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.html"),
            styles: [__webpack_require__(/*! ./fourn-magasin-list.component.scss */ "./src/app/espace/fournisseur/four-magasins/magasin-list/fourn-magasin-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_2__["CrudPopupComponent"]])
    ], FoMagasinListComponent);
    return FoMagasinListComponent;
}());

var ELEMENT_DATA = [
    { NoFoMagasin: '1', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '2', Nom: 'MAG0002', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '3', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '4', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '5', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '6', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '7', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sangaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '8', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '9', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga F', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '10', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '11', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '12', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '13', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '14', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga B', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '15', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '16', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '17', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '18', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga A', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '19', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
    { NoFoMagasin: '20', Nom: 'MAG0001', Date_Emission: '10/01/18', Adresse: 'Sandaga C', Contact: 'addr@mail.com', Details: '', Modifier: '', Supprimer: '' },
];


/***/ })

}]);
//# sourceMappingURL=espace-fournisseur-four-magasins-fournisseur-magasins-module.js.map