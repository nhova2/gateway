(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-gestion-gestion-module"],{

/***/ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gestion-elements\" class=\"page-layout simple\">\r\n<div class=\"content p-24\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n        <div class=\"filters\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n            <!--mat-form-field class=\"course-search\">\r\n                <input matInput placeholder=\"Search for a course\" [(ngModel)]=\"searchTerm\"\r\n                       (input)=\"filterCoursesByTerm()\">\r\n            </mat-form-field-->\r\n            <mat-form-field class=\"category-selector\">\r\n\r\n                <mat-select placeholder=\"Select Category\" [(ngModel)]=\"currentCategory\"\r\n                            (selectionChange)=\"filterCoursesByCategory()\">\r\n                    <mat-option [value]=\"'all'\">\r\n                        Tout\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\r\n                        {{ category.label }}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"courses\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\" [@animateStagger]=\"{value:'50'}\">\r\n            <div class=\"course\" *ngFor=\"let course of filteredCourses\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\r\n                 fxFlex.gt-sm=\"33\" [ngClass]=\"course.category\" [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n                <div class=\"course-content\" fxLayout=\"column\" fxFlex=\"1 1 auto\">\r\n                    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                         [ngClass]=\"course.category + '-bg'\">\r\n                        <div class=\"category\" fxFlex>\r\n                            {{course.category}}\r\n                        </div>\r\n                        <div class=\"length\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <mat-icon class=\"length-icon s-20\">access_time</mat-icon>\r\n                            <div class=\"min\">{{course.length}} min</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"1 1 auto\">\r\n                        <div class=\"h1\">{{course.title}}</div>\r\n                        <div class=\"updated\">Updated {{course.updated}}</div>\r\n                    </div>\r\n                    <div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <!--button mat-button color=\"accent\"\r\n                                [routerLink]=\"'/apps/academy/courses/' + course.id + '/' + course.slug\">\r\n                            START\r\n                        </button-->\r\n\t\t\t\t\t\t<button mat-button color=\"accent\">\r\n                            START\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"no-courses\" *ngIf=\"filteredCourses.length === 0\">\r\n                No courses found!\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.title{\r\n    font-size: 100%;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.elmt-content{\r\n    padding: 5px;\r\n    background-color: rgba(131, 131, 182, 0.288);\r\n}\r\n\r\n.orange600 {\r\n    color: #FB8C00;\r\n    padding-top: 7px;\r\n}\r\n.red600 {\r\n    color: rgb(251, 0, 0);\r\n    padding-top: 7px;\r\n}*/\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#gestion-elements .header {\n  position: relative;\n  flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  text-align: center;\n  overflow: hidden; }\n@media screen and (max-width: 599px) {\n    #gestion-elements .header {\n      height: 240px;\n      padding: 16px; } }\n#gestion-elements .header .hero-text .hero-icon {\n    position: absolute;\n    top: -64px;\n    left: 0px;\n    opacity: 0.04;\n    font-size: 512px !important;\n    width: 512px !important;\n    height: 512px !important; }\n#gestion-elements .header .hero-text h1 {\n    font-size: 40px;\n    font-weight: 300;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #gestion-elements .header .hero-text h1 {\n        font-size: 24px; } }\n#gestion-elements .header .hero-text h3 {\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.03em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #gestion-elements .header .hero-text h3 {\n        font-size: 14px; } }\n#gestion-elements .content .category-selector {\n  min-width: 200px; }\n#gestion-elements .content .filters {\n  width: 100%;\n  max-width: 1040px;\n  margin: 24px auto;\n  padding: 0 20px; }\n@media (max-width: 599px) {\n    #gestion-elements .content .filters {\n      margin: 0 auto; } }\n#gestion-elements .content .filters .course-search {\n    width: 200px; }\n@media (max-width: 599px) {\n      #gestion-elements .content .filters .course-search {\n        margin-bottom: 16px; } }\n@media (min-width: 600px) {\n      #gestion-elements .content .filters .course-search {\n        margin-right: 16px; } }\n#gestion-elements .content .courses {\n  width: 100%;\n  max-width: 1040px;\n  margin: 0 auto; }\n#gestion-elements .content .courses .no-courses {\n    font-size: 24px;\n    margin: 24px 0;\n    text-align: center; }\n#gestion-elements .content .courses .course {\n    padding: 16px; }\n#gestion-elements .content .courses .course:hover .course-content {\n      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n#gestion-elements .content .courses .course .course-content {\n      min-height: 240px;\n      transition: box-shadow 150ms ease-in-out;\n      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n#gestion-elements .content .courses .course .course-content .header {\n        padding: 16px 24px;\n        height: 64px !important;\n        min-height: 64px !important;\n        max-height: 64px !important; }\n#gestion-elements .content .courses .course .course-content .header.peche-bg {\n          background: #2196f3; }\n#gestion-elements .content .courses .course .course-content .header.agriculture-bg {\n          background: #4caf50; }\n#gestion-elements .content .courses .course .course-content .header.artisanat-bg {\n          background: #ff8f00; }\n#gestion-elements .content .courses .course .course-content .header.elevage-bg {\n          background: #607d8b; }\n#gestion-elements .content .courses .course .course-content .header .category {\n          text-transform: capitalize;\n          text-align: left;\n          font-weight: 500; }\n#gestion-elements .content .courses .course .course-content .header .length .length-icon {\n          margin-right: 8px; }\n#gestion-elements .content .courses .course .course-content .header .length .min {\n          font-size: 16px; }\n#gestion-elements .content .courses .course .course-content .content {\n        padding: 24px; }\n#gestion-elements .content .courses .course .course-content .content .h1 {\n          font-size: 16px;\n          text-align: center; }\n#gestion-elements .content .courses .course .course-content .content .updated {\n          font-size: 13px;\n          font-weight: 500;\n          margin-top: 4px; }\n#gestion-elements .content .courses .course .course-content .footer {\n        padding: 16px;\n        height: 48px !important;\n        min-height: 48px !important;\n        max-height: 48px !important;\n        box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GestionAnimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionAnimComponent", function() { return GestionAnimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GestionAnimComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AnimHomeService} _animHomeService
     */
    function GestionAnimComponent(_animHomeService, parCrud) {
        this._animHomeService = _animHomeService;
        this.parCrud = parCrud;
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.crudComp = this.parCrud;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    GestionAnimComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to categories
        this._animHomeService.onCategoriesChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (categories) {
            _this.categories = categories;
        });
        // Subscribe to courses
        this._animHomeService.onCoursesChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (courses) {
            _this.filteredCourses = _this.coursesFilteredByCategory = _this.courses = courses;
        });
    };
    /**
     * On destroy
     */
    GestionAnimComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Filter courses by category
     */
    GestionAnimComponent.prototype.filterCoursesByCategory = function () {
        var _this = this;
        // Filter
        if (this.currentCategory === 'all') {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else {
            this.coursesFilteredByCategory = this.courses.filter(function (course) {
                return course.category === _this.currentCategory;
            });
            this.filteredCourses = this.coursesFilteredByCategory.slice();
        }
        // Re-filter by search term
        this.filterCoursesByTerm();
    };
    /**
     * Filter courses by term
     */
    GestionAnimComponent.prototype.filterCoursesByTerm = function () {
        var searchTerm = this.searchTerm.toLowerCase();
        // Search
        if (searchTerm === '') {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else {
            this.filteredCourses = this.coursesFilteredByCategory.filter(function (course) {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    };
    GestionAnimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-anim',
            template: __webpack_require__(/*! ./gestion-anim.component.html */ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.html"),
            styles: [__webpack_require__(/*! ./gestion-anim.component.scss */ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_anim_home_service__WEBPACK_IMPORTED_MODULE_3__["AnimHomeService"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_5__["CrudPopupComponent"]])
    ], GestionAnimComponent);
    return GestionAnimComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/gestion/gestion.module.ts":
/*!************************************************************!*\
  !*** ./src/app/espace/animateur/gestion/gestion.module.ts ***!
  \************************************************************/
/*! exports provided: routes, GestionAnimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionAnimModule", function() { return GestionAnimModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gestion_anim_gestion_anim_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestion-anim/gestion-anim.component */ "./src/app/espace/animateur/gestion/gestion-anim/gestion-anim.component.ts");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _gestion_anim_gestion_anim_component__WEBPACK_IMPORTED_MODULE_7__["GestionAnimComponent"],
        pathMatch: 'full',
        resolve: {
            data: _anim_home_service__WEBPACK_IMPORTED_MODULE_8__["AnimHomeService"]
        }
    }
];
var GestionAnimModule = /** @class */ (function () {
    function GestionAnimModule() {
    }
    GestionAnimModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
                //,MatButtonModule,
                //MatDividerModule,
                //MatFormFieldModule,
                //MatIconModule,
                //MatMenuModule,
                //MatSelectModule,
                //MatTableModule,
                //MatTabsModule,
                //FuseSidebarModule,
                //MatListModule,
                //MatToolbarModule,
                //MatDialogModule,
                //MatPaginatorModule,
                //FuseWidgetModule
                //,MatGridListModule
                //,MatCheckboxModule
                //,MatCardModule
            ],
            declarations: [_gestion_anim_gestion_anim_component__WEBPACK_IMPORTED_MODULE_7__["GestionAnimComponent"]],
            providers: [_anim_home_service__WEBPACK_IMPORTED_MODULE_8__["AnimHomeService"]]
        })
    ], GestionAnimModule);
    return GestionAnimModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-animateur-gestion-gestion-module.js.map