(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-fournisseur-four-simulations-fournisseur-simulations-module"],{

/***/ "./src/app/commons/simulation/simulation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/commons/simulation/simulation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 offset-md-3\">\r\n                    <h1>Simulation de Pret</h1>\r\n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"form-group\">\r\n                            <label>Montant Emprunt</label>\r\n                            <input type=\"text\" formControlName=\"montantEmprunt\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.montantEmprunt.errors }\" />\r\n                            <div *ngIf=\"submitted && f.montantEmprunt.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.montantEmprunt.errors.required\">Montant Emprunt is required</div>\r\n                            </div>\r\n                            &nbsp; &nbsp; \r\n                             <label >Mensualité Souhaité</label>\r\n                              <select class=\"form-control\" >\r\n                                <option *ngFor=\"let d of datas\" [value]=\"d\">{{d.valeur}}</option>\r\n                              </select>\r\n                        </div>\r\n                         <div>\r\n                            <h2>Résultat Simulation</h2>\r\n                          </div>\r\n                        <div>\r\n                            <table  class=\"table\">\r\n                                <tr>\r\n                                    <td title=\"'Name'\" filter=\"{ name: 'text'}\" sortable=\"'name'\">\r\n                                        <div>30.000 XOF</div>\r\n                                        <div>(Capital Emprunté)</div>\r\n                                    </td>\r\n                                    <td title=\"'Age'\" filter=\"{ age: 'number'}\" sortable=\"'age'\">\r\n                                        <i class=\"material-icons\">add_box</i>\r\n                                    </td>\r\n                                    <td title=\"'Name'\" filter=\"{ name: 'text'}\" sortable=\"'name'\">\r\n                                        <div>6.000 XOF</div>\r\n                                        <div>(Interets)</div>\r\n                                    </td>\r\n                                    <td title=\"'Age'\" filter=\"{ age: 'number'}\" sortable=\"'age'\">\r\n                                        <i class=\"material-icons\">keyboard_tab</i>\r\n                                    </td>\r\n                                    <td title=\"'Age'\" filter=\"{ age: 'number'}\" sortable=\"'age'\">\r\n                                        <div>36.000 XOF</div>\r\n                                        <div>(Montant Total Du)</div>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>  \r\n                        </div>\r\n                        <mat-divider></mat-divider>\r\n                        <div>\r\n                           <h2>Modalité: 12 mensualités de 3000f</h2>\r\n                        </div>\r\n                        <div>\r\n                           <h2>TAEG révisable: 20% (taux débiteur révisable de 18%)</h2>\r\n                        </div>\r\n                        <div>\r\n                           <h2>Durée accordée: 12 mois</h2>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <button mat-raised-button color=\"primary\">\r\n                <span>ENVOYER DEMANDE</span>\r\n            </button>\r\n        </div>\r\n    </mat-card>"

/***/ }),

/***/ "./src/app/commons/simulation/simulation.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/commons/simulation/simulation.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "md-divider {\n  display: block;\n  border-top: 1px solid;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/commons/simulation/simulation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/commons/simulation/simulation.component.ts ***!
  \************************************************************/
/*! exports provided: AppSimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSimulationComponent", function() { return AppSimulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSimulationComponent = /** @class */ (function () {
    function AppSimulationComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.datas = [
            { valeur: "3 mois" },
            { valeur: "6 mois" },
            { valeur: "9 mois" },
            { valeur: "12 mois" },
            { valeur: "3 ans" }
        ];
        this.submitted = false;
    }
    AppSimulationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            montantEmprunt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(AppSimulationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppSimulationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    };
    AppSimulationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simulation',
            template: __webpack_require__(/*! ./simulation.component.html */ "./src/app/commons/simulation/simulation.component.html"),
            styles: [__webpack_require__(/*! ./simulation.component.scss */ "./src/app/commons/simulation/simulation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppSimulationComponent);
    return AppSimulationComponent;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-simulations/fournisseur-simulations.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-simulations/fournisseur-simulations.module.ts ***!
  \***************************************************************************************/
/*! exports provided: routes, SimulationsFournisseurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationsFournisseurModule", function() { return SimulationsFournisseurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_commons_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/commons/simulation/simulation.component */ "./src/app/commons/simulation/simulation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* import { FoSimulationListComponent } from './simulation-list/fourn-simulation-list.component';
 */ 
var routes = [
    { path: '', component: app_commons_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__["AppSimulationComponent"], pathMatch: 'full' }
];
var SimulationsFournisseurModule = /** @class */ (function () {
    function SimulationsFournisseurModule() {
    }
    SimulationsFournisseurModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            ],
            declarations: [app_commons_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__["AppSimulationComponent"]]
        })
    ], SimulationsFournisseurModule);
    return SimulationsFournisseurModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-fournisseur-four-simulations-fournisseur-simulations-module.js.map