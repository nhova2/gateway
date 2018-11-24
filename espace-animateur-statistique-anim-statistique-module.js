(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-statistique-anim-statistique-module"],{

/***/ "./src/app/espace/animateur/statistique/anim-statistique.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/espace/animateur/statistique/anim-statistique.module.ts ***!
  \*************************************************************************/
/*! exports provided: routes, StatistiqueAnimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatistiqueAnimModule", function() { return StatistiqueAnimModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistique_anim_statistique_anim_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statistique-anim/statistique-anim.component */ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.ts");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '', component: _statistique_anim_statistique_anim_component__WEBPACK_IMPORTED_MODULE_7__["StatistiqueAnimComponent"],
        pathMatch: 'full',
        resolve: {
            data: _anim_home_service__WEBPACK_IMPORTED_MODULE_8__["AnimHomeService"]
        }
    }
];
var StatistiqueAnimModule = /** @class */ (function () {
    function StatistiqueAnimModule() {
    }
    StatistiqueAnimModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseSidebarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseWidgetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            declarations: [_statistique_anim_statistique_anim_component__WEBPACK_IMPORTED_MODULE_7__["StatistiqueAnimComponent"]],
            providers: [_anim_home_service__WEBPACK_IMPORTED_MODULE_8__["AnimHomeService"]]
        })
    ], StatistiqueAnimModule);
    return StatistiqueAnimModule;
}());



/***/ }),

/***/ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"title-top\">\r\n    <div><h2 class=\"title\">STATS</h2></div>\r\n  </div>\r\n<div fxLayout=\"column\" fxLayoutGap=\"30px\" class=\"px-24\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\">\r\n      <div class=\"content\">\r\n\t\t\t\t\t<div class=\"widget-group\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                         [@animateStagger]=\"{value:'50'}\">\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                            <div class=\"fuse-widget-front mat-elevation-z2\">\r\n                                <div class=\"h3 px-16 py-24\">\r\n                                    {{widgets.widget8.title}}\r\n                                </div>\r\n\r\n                                <mat-divider></mat-divider>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widget8.scheme\"\r\n                                        [results]=\"widgets.widget8.mainChart\"\r\n                                        [legend]=\"widget8.legend\"\r\n                                        [explodeSlices]=\"widget8.explodeSlices\"\r\n                                        [labels]=\"widget8.labels\"\r\n                                        [doughnut]=\"widget8.doughnut\"\r\n                                        [gradient]=\"widget8.gradient\"\r\n                                        (select)=\"widget8.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 8 -->\r\n\r\n                        <!-- WIDGET 9 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-elevation-z2\">\r\n                                <div class=\"px-16 py-12 border-bottom\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget9.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select [(ngModel)]=\"widget9.currentRange\" aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget9.ranges | keys\"\r\n                                                        [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.weeklySpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">XOF </span>\r\n                                            <span>{{widgets.widget9.weeklySpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.weeklySpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.totalSpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">XOF </span>\r\n                                            <span>{{widgets.widget9.totalSpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.totalSpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.remaining.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">XOF </span>\r\n                                            <span>{{widgets.widget9.remaining.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.remaining.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24 border-top\">\r\n                                    <div class=\"h4 secondary-text\">{{widgets.widget9.totalBudget.title}}</div>\r\n                                    <div class=\"pt-8 mat-display-1 m-0 font-weight-300\">\r\n                                        <span class=\"secondary-text\">XOF </span>\r\n                                        <span>{{widgets.widget9.totalBudget.count}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 9 -->\r\n\r\n                        <!-- WIDGET 10 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                                     fxFlex=\"100\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-elevation-z2\">\r\n\r\n                                <div class=\"simple-table-container\" ms-responsive-table>\r\n                                    <div class=\" table-title\">\r\n                                        {{widgets.widget10.title}}\r\n                                    </div>\r\n\r\n                                    <table class=\"simple\">\r\n\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th *ngFor=\"let column of widgets.widget10.table.columns\">\r\n                                                    {{column.title}}\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let row of widgets.widget10.table.rows\">\r\n                                                <td *ngFor=\"let cell of row\">\r\n                                                    <span class=\"p-4\" [ngClass]=\"cell.classes\">\r\n                                                        {{cell.value}}\r\n                                                    </span>\r\n                                                    <mat-icon *ngIf=\"cell.icon\" class=\"s-16\">{{cell.icon}}\r\n                                                    </mat-icon>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 10 -->\r\n                    </div>\r\n        </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxLayoutGap=\"30px\" class=\"px-24\">\r\n  \r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n      <div fxFlex=\"50\" class=\"\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" style=\"color:black; font-weight:bold\">\r\n          \r\n          <div class=\"title2\" style=\"margin-bottom:1%\">Agreement</div>\r\n          <div style=\"width:10em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:7em\">niveau 1</label>\r\n              <mat-progress-bar class=\"example-margin\" color=\"accent\" mode=\"Determinate\" value=\"75\" bufferValue=\"100\">\r\n              </mat-progress-bar>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:10em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:7em\">niveau 2</label>\r\n              <mat-progress-bar class=\"example-margin\" color=\"accent\" mode=\"Determinate\" value=\"80\" bufferValue=\"100\">\r\n              </mat-progress-bar>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:10em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:7em\">niveau 3</label>\r\n              <mat-progress-bar class=\"example-margin\" color=\"accent\" mode=\"Determinate\" value=\"90\" bufferValue=\"100\">\r\n              </mat-progress-bar>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:10em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:7em\">niveau 3</label>\r\n              <mat-progress-bar class=\"example-margin\" color=\"accent\" mode=\"Determinate\" value=\"90\" bufferValue=\"100\">\r\n              </mat-progress-bar>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"\">\r\n  \r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" style=\"color:black; font-weight:bold\" fxLayoutAlign=\"center center\">\r\n        \r\n          <div class=\"title2\" style=\"margin-bottom:1%\">Top 10 CA Animateur</div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Animateur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Animateur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Animateur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Animateur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div fxFlex=\"50\" class=\"\" style=\"color:black; font-weight:bold\" fxLayoutAlign=\"center center\">\r\n  \r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          \r\n          <div class=\"title2\" style=\"margin-bottom:1%\">Top 10 CA Fournisseur </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Fournisseur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Fournisseur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Fournisseur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Fournisseur)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\" class=\"\" style=\"color:black; font-weight:bold\" fxLayoutAlign=\"center center\">\r\n  \r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          \r\n          <div class=\"title2\" style=\"margin-bottom:1%\">Top 10 CA Boutique </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Boutique)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Boutique)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Boutique)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n          <div style=\"width:14em\">\r\n            <section class=\"example-section\">\r\n              <label class=\"example-margin\" style=\"width:13em\">Nom Prenom (Boutique)</label>\r\n              <mat-icon class=\"orange600\">star</mat-icon>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.title2 {\n  font-weight: bold;\n  text-transform: uppercase;\n  color: rgba(0, 0, 255, 0.555); }\n\n.elmt-content {\n  padding: 5px;\n  background-color: rgba(131, 131, 182, 0.288); }\n\n.orange600 {\n  color: #FB8C00; }\n\n.green600 {\n  color: #3ea80c;\n  padding-top: 7px; }\n\n.blue600 {\n  color: #0c36a8;\n  padding-top: 7px; }\n\n.bluelight600 {\n  color: rgba(12, 54, 168, 0.705);\n  padding-top: 7px; }\n\n.red600 {\n  color: #fb0000;\n  padding-top: 7px; }\n\n.panel {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n  padding: 3%;\n  text-decoration: none;\n  color: white;\n  background-color: #ccccff; }\n\nexample-margin {\n  margin: 0 10px;\n  width: 8em; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 25px; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: StatistiqueAnimComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatistiqueAnimComponent", function() { return StatistiqueAnimComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StatistiqueAnimComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {AnimHomeService} _animHomeService
     */
    function StatistiqueAnimComponent(_fuseSidebarService, _animHomeService) {
        var _this = this;
        this._fuseSidebarService = _fuseSidebarService;
        this._animHomeService = _animHomeService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        this.dateNow = Date.now();
        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: d3_shape__WEBPACK_IMPORTED_MODULE_6__["curveBasis"]
            }
        };
        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };
        /**
         * Widget 8
         */
        this.widget8 = {
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 9
         */
        this.widget9 = {
            currentRange: 'TW',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_6__["curveBasis"]
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    StatistiqueAnimComponent.prototype.ngOnInit = function () {
        this.stats = this._animHomeService.projects;
        this.selectedStatsTimeline = this.stats[0];
        this.widgets = this._animHomeService.widgets_prj;
        /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        //this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    StatistiqueAnimComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    StatistiqueAnimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistique-anim',
            template: __webpack_require__(/*! ./statistique-anim.component.html */ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.html"),
            styles: [__webpack_require__(/*! ./statistique-anim.component.scss */ "./src/app/espace/animateur/statistique/statistique-anim/statistique-anim.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarService"],
            _anim_home_service__WEBPACK_IMPORTED_MODULE_4__["AnimHomeService"]])
    ], StatistiqueAnimComponent);
    return StatistiqueAnimComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param _widget11
     */
    function FilesDataSource(_widget11) {
        var _this = _super.call(this) || this;
        _this._widget11 = _widget11;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        return this._widget11.onContactsChanged;
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ })

}]);
//# sourceMappingURL=espace-animateur-statistique-anim-statistique-module.js.map