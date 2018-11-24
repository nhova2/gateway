(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-main-main-anim-module"],{

/***/ "./src/app/espace/animateur/main/main-anim.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/espace/animateur/main/main-anim.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, MainAnimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAnimModule", function() { return MainAnimModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_anim_main_anim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-anim/main-anim.component */ "./src/app/espace/animateur/main/main-anim/main-anim.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var routes = [
    {
        path: '',
        component: _main_anim_main_anim_component__WEBPACK_IMPORTED_MODULE_3__["MainAnimComponent"],
        pathMatch: 'full',
        resolve: {
            data: _anim_home_service__WEBPACK_IMPORTED_MODULE_12__["AnimHomeService"]
        }
    }
];
var MainAnimModule = /** @class */ (function () {
    function MainAnimModule() {
    }
    MainAnimModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_9__["FuseSidebarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_9__["FuseWidgetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
                //,BrowserAnimationsModule
            ],
            providers: [_anim_home_service__WEBPACK_IMPORTED_MODULE_12__["AnimHomeService"]
            ],
            declarations: [_main_anim_main_anim_component__WEBPACK_IMPORTED_MODULE_3__["MainAnimComponent"]]
        })
    ], MainAnimModule);
    return MainAnimModule;
}());



/***/ }),

/***/ "./src/app/espace/animateur/main/main-anim/main-anim.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/espace/animateur/main/main-anim/main-anim.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"60\"> \r\n\t<div class=\"anim-box info-box general\" fxLayout=\"column\">\r\n\t\t<!--div class=\"content\"-->\r\n\t\t<mat-form-field>\r\n\t\t  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n\t\t</mat-form-field>\r\n\t\t  <div class=\"mat-elevation-z8\">\r\n\t\t  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\t\t   <!-- ID Column -->\r\n\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n\t\t\t  <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<!-- Progress Column -->\r\n\t\t\t<ng-container matColumnDef=\"progress\">\r\n\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\r\n\t\t\t  <!--td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td-->\r\n\t\t\t  <td mat-cell *matCellDef=\"let row\"> {{row.progress}}</td>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<!-- Name Column -->\r\n\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\r\n\t\t\t  <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<!-- Color Column -->\r\n\t\t\t<ng-container matColumnDef=\"color\">\r\n\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n\t\t\t  <!--td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td-->\r\n\t\t\t  <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> <mat-icon>how_to_reg</mat-icon></td>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n\t\t\t</tr>\r\n\t\t  </table>\r\n\t\t  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div fxFlex=\"40\">\r\n\t<div class=\"mat-elevation-z8\">\r\n\t\t<div class=\"profile-box friends\" fxLayout=\"column\">\r\n\t   <div class=\"content\">\r\n\t   <div class=\"light-blue-600\">\r\n\t\t\t\t\t   <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\t\t\t\t\t\t   <div class=\"pr-16\">\r\n\t\t\t\t\t\t\t   <div class=\"h3 font-weight-300\">Ventes</div>\r\n\t\t\t\t\t\t\t   <div class=\"h5 secondary-text\">Suivi des Ventes</div>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t   <div>\r\n\t\t\t\t\t\t\t   <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\r\n\t\t\t\t\t\t\t\t   <mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t   <mat-menu #card19Menu=\"matMenu\">\r\n\t\t\t\t\t\t\t\t   <button mat-menu-item>\r\n\t\t\t\t\t\t\t\t\t   <mat-icon>trending_up</mat-icon>\r\n\t\t\t\t\t\t\t\t\t   <span>Courbe</span>\r\n\t\t\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t\t   <button mat-menu-item>\r\n\t\t\t\t\t\t\t\t\t   <mat-icon>history</mat-icon>\r\n\t\t\t\t\t\t\t\t\t   <span>Historique</span>\r\n\t\t\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t\t   <button mat-menu-item>\r\n\t\t\t\t\t\t\t\t\t   <mat-icon>notifications_off</mat-icon>\r\n\t\t\t\t\t\t\t\t\t   <span>Desactiver Alertes</span>\r\n\t\t\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t   </mat-menu>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t\t   <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n\t\t\t\t\t\t   <div class=\"font-size-48 font-weight-300 line-height-1\">{{widgets.widget8.today}}</div>\r\n\t\t\t\t\t\t   <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\t\t\t\t\t\t\t   <mat-icon *ngIf=\"widgets.widget8.change.value > 0\">trending_up</mat-icon>\r\n\t\t\t\t\t\t\t   <mat-icon *ngIf=\"widgets.widget8.change.value < 0\">trending_down</mat-icon>\r\n\t\t\t\t\t\t\t   <div class=\"m1-8\">{{widgets.widget8.change.value}}\r\n\t\t\t\t\t\t\t\t   ({{widgets.widget8.change.percentage}}%)\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t   </div>\r\n\t\t\t\t   <mat-tab-group backgroundColor=\"accent\">\r\n\t\t\t\t\t   <mat-tab label=\"1JOUR\">\r\n\t\t\t\t\t\t   <div class=\"h-200 my-16\">\r\n\t\t\t\t\t\t\t   <ngx-charts-line-chart\r\n\t\t\t\t\t\t\t\t   *fuseIfOnDom\r\n\t\t\t\t\t\t\t\t   [scheme]=\"widgets.widget8.scheme\"\r\n\t\t\t\t\t\t\t\t   [results]=\"widgets.widget8.data\"\r\n\t\t\t\t\t\t\t\t   [xAxis]=\"false\"\r\n\t\t\t\t\t\t\t\t   [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t   [yScaleMin]=\"widgets.widget8.dataMin\"\r\n\t\t\t\t\t\t\t\t   [yScaleMax]=\"widgets.widget8.dataMax\">\r\n\t\t\t\t\t\t\t   </ngx-charts-line-chart>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </mat-tab>\r\n\t\t\t\t\t   <mat-tab label=\"1SEM\">\r\n\t\t\t\t\t\t   <div class=\"h-200 my-16\">\r\n\t\t\t\t\t\t\t   <ngx-charts-line-chart\r\n\t\t\t\t\t\t\t\t   *fuseIfOnDom\r\n\t\t\t\t\t\t\t\t   [scheme]=\"widgets.widget8.scheme\"\r\n\t\t\t\t\t\t\t\t   [results]=\"widgets.widget8.data\"\r\n\t\t\t\t\t\t\t\t   [xAxis]=\"false\"\r\n\t\t\t\t\t\t\t\t   [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t   [yScaleMin]=\"widgets.widget8.dataMin\"\r\n\t\t\t\t\t\t\t\t   [yScaleMax]=\"widgets.widget8.dataMax\">\r\n\t\t\t\t\t\t\t   </ngx-charts-line-chart>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </mat-tab>\r\n\t\t\t\t\t   <mat-tab label=\"1MOIS\">\r\n\t\t\t\t\t\t   <div class=\"h-200 my-16\">\r\n\t\t\t\t\t\t\t   <ngx-charts-line-chart\r\n\t\t\t\t\t\t\t\t   *fuseIfOnDom\r\n\t\t\t\t\t\t\t\t   [scheme]=\"widgets.widget8.scheme\"\r\n\t\t\t\t\t\t\t\t   [results]=\"widgets.widget8.data\"\r\n\t\t\t\t\t\t\t\t   [xAxis]=\"false\"\r\n\t\t\t\t\t\t\t\t   [yAxis]=\"true\"\r\n\t\t\t\t\t\t\t\t   [yScaleMin]=\"widgets.widget8.dataMin\"\r\n\t\t\t\t\t\t\t\t   [yScaleMax]=\"widgets.widget8.dataMax\">\r\n\t\t\t\t\t\t\t   </ngx-charts-line-chart>\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </mat-tab>\r\n\t\t\t\t   </mat-tab-group>\r\n\t\t\t\t   </div></div>\r\n\t   <div class=\"anim-box groups\" fxLayout=\"column\">\r\n\t\t   <div class=\"content\">\r\n\t\t\t   <div class=\"p-16\">\r\n\t\t\t\t   <div class=\"h1 font-weight-300\">Ventes par domaine</div>\r\n\t\t\t   </div>\r\n\r\n\t\t\t   <div class=\"h-200\">\r\n\t\t\t\t   <ngx-charts-pie-chart\r\n\t\t\t\t\t   *fuseIfOnDom\r\n\t\t\t\t\t   [scheme]=\"widgets.widget7.scheme\"\r\n\t\t\t\t\t   [results]=\"widgets.widget7.devices\"\r\n\t\t\t\t\t   [doughnut]=\"true\">\r\n\t\t\t\t   </ngx-charts-pie-chart>\r\n\t\t\t   </div>\r\n\r\n\t\t\t   <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t   <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\" *ngFor=\"let device of devices\">\r\n\r\n\t\t\t\t\t   <div class=\"h4 secondary-text\">{{device.name}}</div>\r\n\t\t\t\t\t   <div class=\"h2 font-weight-300 py-8\">{{device.value}}%</div>\r\n\r\n\t\t\t\t\t   <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t\t\t   <mat-icon class=\"s-18 pr-4 red-fg\"\r\n\t\t\t\t\t\t\t\t\t *ngIf=\"device.change < 0\">\r\n\t\t\t\t\t\t\t   arrow_downward\r\n\t\t\t\t\t\t   </mat-icon>\r\n\r\n\t\t\t\t\t\t   <mat-icon class=\"s-18 pr-4 green-fg\"\r\n\t\t\t\t\t\t\t\t\t *ngIf=\"device.change > 0\">\r\n\t\t\t\t\t\t\t   arrow_upward\r\n\t\t\t\t\t\t   </mat-icon>\r\n\r\n\t\t\t\t\t\t   <div class=\"h5 red-fg\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red-fg': device.change < 0, 'green-fg': device.change > 0}\">\r\n\t\t\t\t\t\t\t   {{device.change}}%\r\n\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t   </div>\r\n\r\n\t\t\t\t   </div>\r\n\r\n\t\t\t   </div>\r\n\r\n\t\t\t   <div class=\"card-divider mb-0\"></div>\r\n\r\n\t\t\t   <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\t\t\t\t   <mat-form-field>\r\n\t\t\t\t\t   <mat-select class=\"simplified\" value=\"7days\">\r\n\t\t\t\t\t\t   <mat-option value=\"today\">Aujourd'hui</mat-option>\r\n\t\t\t\t\t\t   <mat-option value=\"yesterday\">Hier</mat-option>\r\n\t\t\t\t\t\t   <mat-option value=\"7days\">7 derniers jours</mat-option>\r\n\t\t\t\t\t\t   <mat-option value=\"28days\">30 derniers jours</mat-option>\r\n\t\t\t\t\t\t   <mat-option value=\"90days\">90 derniers jours</mat-option>\r\n\t\t\t\t\t   </mat-select>\r\n\t\t\t\t   </mat-form-field>\r\n\r\n\t\t\t\t   <button mat-button color=\"accent\">Vue Globale</button>\r\n\t\t\t   </div>\r\n\r\n\t\t   <!--/div-->\r\n\t\t   </div>\r\n\t   </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/main/main-anim/main-anim.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/espace/animateur/main/main-anim/main-anim.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ntable {\n  width: 100%; }\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\ntd,\nth {\n  width: 25%; }\n.orange600 {\n  color: #FB8C00;\n  padding-top: 7px; }\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n.title {\n  font-weight: bold; }\n.title-top {\n  background-color: #134ae4ba; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/main/main-anim/main-anim.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/espace/animateur/main/main-anim/main-anim.component.ts ***!
  \************************************************************************/
/*! exports provided: MainAnimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAnimComponent", function() { return MainAnimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.service */ "./src/app/main/apps/dashboards/project/project.service.ts");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var COLORS = ['red', 'orange', 'green'];
var NAMES = ['Binta', 'Aziz', 'Kine', 'Mohamed', 'Khady', 'Thierno',
    'Fatou', 'Amadou', 'Malick', 'Babacar', 'Massamba', 'Pape',
    'Coura', 'Alassane', 'Massamba', 'Alioune', 'Sady', 'Kader', 'Momar'];
var ACTEURTYPES = ['Client', 'Fournisseur', 'Animateur'];
var MainAnimComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AnimHomeService} _animService
     */
    function MainAnimComponent(_animService, _proj, parCrud) {
        this._animService = _animService;
        this._proj = _proj;
        this.parCrud = parCrud;
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        this.length = 100;
        this.pageSize = 10;
        this.devices = [
            {
                name: 'Peche',
                value: '75',
                change: '-0.9'
            },
            {
                name: 'Elevage',
                value: '10',
                change: '0.9'
            },
            {
                name: 'Agriculture',
                value: '15',
                change: '2.1'
            }
        ];
        console.log("AnimHomeComponent contructor");
        this.widgets = _proj.getWidgets();
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._registerCustomChartJSPlugin();
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
        this.crudComp = this.parCrud;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MainAnimComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("MainAnimComponent ngOnInit");
        // Get the widgets from the service
        // this.widgets = this._animService.widgets;
        this.widgets = this._animService.widgets;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this._animService.homeMainOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (home) {
            _this.home = home;
        });
    };
    /**
     * On destroy
     */
    MainAnimComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    MainAnimComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /**
     * Register a custom plugin
     */
    MainAnimComponent.prototype._registerCustomChartJSPlugin = function () {
        window.Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                // Only activate the plugin if it's made available
                // in the options
                if (!chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)) {
                    return;
                }
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            var fontSize = 13;
                            var fontStyle = 'normal';
                            var fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = window.Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString() + 'k';
                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 15;
                            var startY = 24;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);
                            ctx.save();
                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();
                            ctx.restore();
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MainAnimComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MainAnimComponent.prototype, "sort", void 0);
    MainAnimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-anim',
            template: __webpack_require__(/*! ./main-anim.component.html */ "./src/app/espace/animateur/main/main-anim/main-anim.component.html"),
            styles: [__webpack_require__(/*! ./main-anim.component.scss */ "./src/app/espace/animateur/main/main-anim/main-anim.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_anim_home_service__WEBPACK_IMPORTED_MODULE_5__["AnimHomeService"], app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectDashboardService"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_7__["CrudPopupComponent"]])
    ], MainAnimComponent);
    return MainAnimComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        //progress: name+"_"+Math.round(Math.random() * 100).toString()+"@mail.com"
        progress: ACTEURTYPES[Math.round(Math.random() * (ACTEURTYPES.length - 1))]
        //progress: "77 400 500"
        ,
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ })

}]);
//# sourceMappingURL=espace-animateur-main-main-anim-module.js.map