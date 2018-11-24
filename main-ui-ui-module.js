(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ui-ui-module"],{

/***/ "./src/app/main/ui/colors/colors.component.html":
/*!******************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Colors</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\"\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n           target=\"_blank\">\n            <mat-icon class=\"mr-8\">link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\n\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color}}</span>\n                </ng-template>\n            </mat-tab>\n\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color.key}}</span>\n                </ng-template>\n            </mat-tab>\n\n        </mat-tab-group>\n\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\n\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n                   target=\"_blank\">Material Design Color Palette</a> for your convenient. You can use them with pretty\n                much every element.\n            </div>\n\n            <div class=\"color-header colored-bg p-8\"\n                 [ngClass]=\"selectedColor\"\n                 fxLayout=\"column\">\n\n                <div fxLayout=\"row\">\n                    <h3 class=\"text-capitalize p-8\" fxFlex=\"30\">{{selectedColor}}</h3>\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background and Color</h4>\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background only</h4>\n                    <h4 class=\"p-8\" fxFlex=\"128px\">Color only</h4>\n                </div>\n\n            </div>\n\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\">\n\n                <div class=\"colored-bg p-8\" fxLayout=\"row\" [ngClass]=\"selectedColor\">\n\n                    <div class=\"colored-bg p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\n                        Default\n                    </div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{selectedColor}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\n                        .{{selectedColor + '-bg'}}\n                    </div>\n\n                    <div class=\"p-8\"\n                         [ngClass]=\"selectedColor + '-' + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\n                        .{{selectedColor + '-' + '-fg'}}\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\"\n                 *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\n\n                <div class=\"colored-bg p-8\"\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\n                     [ngClass]=\"selectedColor + '-' + hue\">\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor + '-' + hue\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{selectedColor + '-' + hue}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\n                        .{{selectedColor + '-' + hue + '-bg'}}\n                    </div>\n\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\n                         [ngClass]=\"selectedColor + '-' + hue + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\n                        .{{selectedColor + '-' + hue + '-fg'}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- / CONTENT -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/colors/colors.component.scss":
/*!******************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content .color-tabs-content .color-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n\n:host .content .color-tabs-content .color .fg-box {\n  background-color: white; }\n\n:host .content .color-tabs-content .colored-bg {\n  transition: background-color 400ms ease; }\n"

/***/ }),

/***/ "./src/app/main/ui/colors/colors.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/ui/colors/colors.component.ts ***!
  \****************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ColorsComponent() {
        // Set the defaults
        this.colors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__["MatColors"].all;
        this._updateSelectedColor('primary');
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Select color
     *
     * @param selected
     */
    ColorsComponent.prototype.selectColor = function (selected) {
        this._updateSelectedColor(selected.tab.textLabel);
    };
    /**
     * Update selected color
     *
     * @param colorName
     * @private
     */
    ColorsComponent.prototype._updateSelectedColor = function (colorName) {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_1__["MatColors"].getColor(this.selectedColor)[500];
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/main/ui/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/main/ui/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/colors/colors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/main/ui/colors/colors.module.ts ***!
  \*************************************************/
/*! exports provided: UIColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIColorsModule", function() { return UIColorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/colors/colors.component */ "./src/app/main/ui/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'colors',
        component: app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]
    }
];
var UIColorsModule = /** @class */ (function () {
    function UIColorsModule() {
    }
    UIColorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__["FuseDemoModule"]
            ]
        })
    ], UIColorsModule);
    return UIColorsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Forms</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div class=\"h1\">\n            Reactive Forms\n        </div>\n\n        <p class=\"pt-16 pb-32\">\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\n            reactive patterns, testing, and validation.\n        </p>\n\n        <div class=\"mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-md=\"row\">\n\n            <!-- REACTIVE FORM EXAMPLE -->\n\n            <form class=\"mat-card mat-elevation-z4 p-24 mr-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\n\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <input matInput placeholder=\"Company (disabled)\" formControlName=\"company\">\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                        <mat-error>First Name is required!</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                        <mat-error>Last Name is required!</mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                            1600 Amphitheatre Pkwy\n                        </textarea>\n                        <mat-error>Address is required!</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n                        <mat-error>Address 2 is required!</mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                        <mat-error>City is required!</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"34\">\n                        <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                        <mat-error>State is required!</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\n                               formControlName=\"postalCode\" maxlength=\"5\" required>\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                        <mat-error>Postal Code is required!</mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-select placeholder=\"Country\" formControlName=\"country\" required>\n                            <mat-option [value]=\"'United States of America'\">\n                                United States of America\n                            </mat-option>\n                            <mat-option [value]=\"'United Kingdom'\">\n                                United Kingdom\n                            </mat-option>\n                            <mat-option [value]=\"'Russia'\">\n                                Russia\n                            </mat-option>\n                            <mat-option [value]=\"'China'\">\n                                China\n                            </mat-option>\n                            <mat-option [value]=\"'Japan'\">\n                                Japan\n                            </mat-option>\n                            <mat-option [value]=\"'Turkey'\">\n                                Turkey\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>Country is required!</mat-error>\n                    </mat-form-field>\n\n                </div>\n\n            </form>\n\n            <!-- / REACTIVE FORM EXAMPLE -->\n\n            <div class=\"mat-card form-errors-model p-24 mat-elevation-z4\">\n                <div class=\"h2 mb-24\">Reactive Form Model</div>\n                <pre><code>{{form.getRawValue() | json}}</code></pre>\n            </div>\n\n        </div>\n\n        <div class=\"h1 pt-32\">\n            Horizontal Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\n        </p>\n\n        <div class=\"horizontal-stepper-wrapper\">\n\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error>First Name is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error>Last Name is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error>Address is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error>City is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error>State is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       maxlength=\"5\" required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error>Postal Code is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-horizontal-stepper>\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\n\n        </div>\n\n        <div class=\"h1 pt-48\">\n            Vertical Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\n        </p>\n\n        <div class=\"vertical-stepper-wrapper\">\n\n            <!-- VERTICAL STEPPER EXAMPLE -->\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"verticalStepperStep1\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error>First Name is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error>Last Name is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep2\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error>Address is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep3\">\n\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error>City is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error>State is required!</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       maxlength=\"5\" required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error>Postal Code is required!</mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-vertical-stepper>\n            <!-- / VERTICAL STEPPER EXAMPLE -->\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content form {\n  width: 100%;\n  max-width: 800px !important; }\n\n:host .content .form-errors-model {\n  flex: 1; }\n\n:host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n"

/***/ }),

/***/ "./src/app/main/ui/forms/forms.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/ui/forms/forms.component.ts ***!
  \**************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function FormsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FormsComponent.prototype.ngOnInit = function () {
        // Reactive Form
        this.form = this._formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.horizontalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.horizontalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]]
        });
        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.verticalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.verticalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]]
        });
    };
    /**
     * On destroy
     */
    FormsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Finish the horizontal stepper
     */
    FormsComponent.prototype.finishHorizontalStepper = function () {
        alert('You have finished the horizontal stepper!');
    };
    /**
     * Finish the vertical stepper
     */
    FormsComponent.prototype.finishVerticalStepper = function () {
        alert('You have finished the vertical stepper!');
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/main/ui/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/main/ui/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/forms/forms.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/ui/forms/forms.module.ts ***!
  \***********************************************/
/*! exports provided: UIFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIFormsModule", function() { return UIFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/forms/forms.component */ "./src/app/main/ui/forms/forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'forms',
        component: app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
    }
];
var UIFormsModule = /** @class */ (function () {
    function UIFormsModule() {
    }
    UIFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
            ]
        })
    ], UIFormsModule);
    return UIFormsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Helper Classes</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Padding & Margin Helpers\">\n\n                <helper-classes-padding-margin></helper-classes-padding-margin>\n\n            </mat-tab>\n\n            <mat-tab label=\"Width & Height Helpers\">\n\n                <helper-classes-width-height></helper-classes-width-height>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.component.ts ***!
  \********************************************************************/
/*! exports provided: HelperClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function() { return HelperClassesComponent; });
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

var HelperClassesComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesComponent() {
    }
    HelperClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes',
            template: __webpack_require__(/*! ./helper-classes.component.html */ "./src/app/main/ui/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__(/*! ./helper-classes.component.scss */ "./src/app/main/ui/helper-classes/helper-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesComponent);
    return HelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/helper-classes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/helper-classes.module.ts ***!
  \*****************************************************************/
/*! exports provided: UIHelperClassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHelperClassesModule", function() { return UIHelperClassesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/helper-classes/helper-classes.component */ "./src/app/main/ui/helper-classes/helper-classes.component.ts");
/* harmony import */ var app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
/* harmony import */ var app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/helper-classes/tabs/width-height/width-height.component */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'helper-classes',
        component: app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__["HelperClassesComponent"]
    }
];
var UIHelperClassesModule = /** @class */ (function () {
    function UIHelperClassesModule() {
    }
    UIHelperClassesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_5__["HelperClassesComponent"],
                app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_6__["HelperClassesPaddingMarginComponent"],
                app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_7__["HelperClassesWidthHeightComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"],
            ],
        })
    ], UIHelperClassesModule);
    return UIHelperClassesModule;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\n\n    <div class=\"mat-title\">Padding Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>p-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-0\">No padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-4\">4px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-12\">12px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Direction Specific Padding Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-0</span>\n                <span>pr-0</span>\n                <span>pb-0</span>\n                <span>pl-0</span>\n                <span>px-0</span>\n                <span>py-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-0\">0 padding from top</span>\n                    <span class=\"pr-0\">0 padding from right</span>\n                    <span class=\"pb-0\">0 padding from bottom</span>\n                    <span class=\"pl-0\">0 padding from left</span>\n                    <span class=\"px-0\">0 padding from left and right</span>\n                    <span class=\"py-0\">0 padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-4</span>\n                <span>pr-4</span>\n                <span>pb-4</span>\n                <span>pl-4</span>\n                <span>px-4</span>\n                <span>py-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-4\">4px padding from top</span>\n                    <span class=\"pr-4\">4px padding from right</span>\n                    <span class=\"pb-4\">4px padding from bottom</span>\n                    <span class=\"pl-4\">4px padding from left</span>\n                    <span class=\"px-4\">4px padding from left and right</span>\n                    <span class=\"py-4\">4px padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Margin Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>m-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-0\">No margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-4\">4px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-12\">12px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Direction Specific Margin Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-0</span>\n                <span>mr-0</span>\n                <span>mb-0</span>\n                <span>ml-0</span>\n                <span>mx-0</span>\n                <span>my-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-0\">0 margin from top</span>\n                    <span class=\"mr-0\">0 margin from right</span>\n                    <span class=\"mb-0\">0 margin from bottom</span>\n                    <span class=\"ml-0\">0 margin from left</span>\n                    <span class=\"mx-0\">0 margin from left and right</span>\n                    <span class=\"my-0\">0 margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-4</span>\n                <span>mr-4</span>\n                <span>mb-4</span>\n                <span>ml-4</span>\n                <span>mx-4</span>\n                <span>my-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-4\">4px margin from top</span>\n                    <span class=\"mr-4\">4px margin from right</span>\n                    <span class=\"mb-4\">4px margin from bottom</span>\n                    <span class=\"ml-4\">4px margin from left</span>\n                    <span class=\"mx-4\">4px margin from left and right</span>\n                    <span class=\"my-4\">4px margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .source-code code {\n    background: none !important; }\n  :host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-padding-margin .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HelperClassesPaddingMarginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesPaddingMarginComponent", function() { return HelperClassesPaddingMarginComponent; });
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

var HelperClassesPaddingMarginComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesPaddingMarginComponent() {
    }
    HelperClassesPaddingMarginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes-padding-margin',
            template: __webpack_require__(/*! ./padding-margin.component.html */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html"),
            styles: [__webpack_require__(/*! ./padding-margin.component.scss */ "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesPaddingMarginComponent);
    return HelperClassesPaddingMarginComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-width-height\" class=\"p-24\">\n\n    <div class=\"mat-title\">Width Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>w-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-0\">0px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>w-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100\">100px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-25-p\">25% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100-p\">100% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Height Helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>h-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-0\">0px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>h-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100\">100px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-25-p\">25% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100-p\">100% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .source-code code {\n    background: none !important; }\n  :host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-width-height .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts ***!
  \************************************************************************************/
/*! exports provided: HelperClassesWidthHeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesWidthHeightComponent", function() { return HelperClassesWidthHeightComponent; });
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

var HelperClassesWidthHeightComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function HelperClassesWidthHeightComponent() {
    }
    HelperClassesWidthHeightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helper-classes-width-height',
            template: __webpack_require__(/*! ./width-height.component.html */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html"),
            styles: [__webpack_require__(/*! ./width-height.component.scss */ "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesWidthHeightComponent);
    return HelperClassesWidthHeightComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Icons</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\" href=\"https://material.angular.io\"\n           target=\"_blank\">\n            <mat-icon class=\"mr-8\">link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\n        </div>\n\n        <div *ngIf=\"!loading\">\n\n            <div fxLayout=\"column\">\n\n                <div class=\"m-32\">\n                    <mat-form-field class=\"w-100-p\">\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row wrap\">\n\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                         *ngFor=\"let icon of filteredIcons\">\n                        <mat-icon class=\"secondary-text s-48\">{{icon}}</mat-icon>\n                        <div class=\"icon-name secondary-text mt-8\">{{icon}}</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1200px; }\n  :host .content .icon-holder {\n    width: 112px;\n    height: 120px; }\n  :host .content .icon-holder .icon-name {\n      font-size: 12px;\n      word-wrap: break-word;\n      width: 100px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/ui/icons/icons.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/ui/icons/icons.component.ts ***!
  \**************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IconsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function IconsComponent(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.loading = true;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    IconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpClient.get('api/icons')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
        });
    };
    /**
     * On destroy
     */
    IconsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Filter icons
     *
     * @param event
     */
    IconsComponent.prototype.filterIcons = function (event) {
        var value = event.target.value;
        this.filteredIcons = this.icons.filter(function (icon) {
            return icon.includes(value);
        });
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/main/ui/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/main/ui/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/icons/icons.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/ui/icons/icons.module.ts ***!
  \***********************************************/
/*! exports provided: UIIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIIconsModule", function() { return UIIconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/icons/icons.component */ "./src/app/main/ui/icons/icons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'icons',
        component: app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
    }
];
var UIIconsModule = /** @class */ (function () {
    function UIIconsModule() {
    }
    UIIconsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], UIIconsModule);
    return UIIconsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <h2>Blank Page</h2>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/blank/blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/blank/blank.component.ts ***!
  \***************************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
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

var BlankComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/main/ui/page-layouts/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/main/ui/page-layouts/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2 class=\"m-0\">Full width with content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardedFullWidth1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidth1Component", function() { return CardedFullWidth1Component; });
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

var CardedFullWidth1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidth1Component() {
    }
    CardedFullWidth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-1',
            template: __webpack_require__(/*! ./full-width-1.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-1.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidth1Component);
    return CardedFullWidth1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2 class=\"m-0\">Full width with inner scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardedFullWidth2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidth2Component", function() { return CardedFullWidth2Component; });
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

var CardedFullWidth2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidth2Component() {
    }
    CardedFullWidth2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-2',
            template: __webpack_require__(/*! ./full-width-2.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html"),
            styles: [__webpack_require__(/*! ./full-width-2.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidth2Component);
    return CardedFullWidth2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth tabbed\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2 class=\"m-0\">Full width with tabs and content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CardedFullWidthTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed1Component", function() { return CardedFullWidthTabbed1Component; });
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

var CardedFullWidthTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidthTabbed1Component() {
    }
    CardedFullWidthTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-tabbed-1',
            template: __webpack_require__(/*! ./full-width-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidthTabbed1Component);
    return CardedFullWidthTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth tabbed inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2 class=\"m-0\">Full width with tabs and inner scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CardedFullWidthTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed2Component", function() { return CardedFullWidthTabbed2Component; });
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

var CardedFullWidthTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function CardedFullWidthTabbed2Component() {
    }
    CardedFullWidthTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-fullwidth-tabbed-2',
            template: __webpack_require__(/*! ./full-width-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardedFullWidthTabbed2Component);
    return CardedFullWidthTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-left-sidebar-1')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <span>Content toolbar</span>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CardedLeftSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar1Component", function() { return CardedLeftSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-1',
            template: __webpack_require__(/*! ./left-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebar1Component);
    return CardedLeftSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-left-sidebar-2')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <span>Content toolbar</span>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CardedLeftSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar2Component", function() { return CardedLeftSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-2',
            template: __webpack_require__(/*! ./left-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebar2Component);
    return CardedLeftSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar tabbed\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-1')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <h2 class=\"m-0\">Left sidebar with tabs and content scroll</h2>\n\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CardedLeftSidebarTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed1Component", function() { return CardedLeftSidebarTabbed1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebarTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebarTabbed1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebarTabbed1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebarTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-tabbed-1',
            template: __webpack_require__(/*! ./left-sidebar-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebarTabbed1Component);
    return CardedLeftSidebarTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidebar tabbed inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-2\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-2')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <h2 class=\"m-0\">Left sidebar with tabs and inner scroll</h2>\n\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CardedLeftSidebarTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed2Component", function() { return CardedLeftSidebarTabbed2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedLeftSidebarTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedLeftSidebarTabbed2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedLeftSidebarTabbed2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedLeftSidebarTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-left-sidebar-tabbed-2',
            template: __webpack_require__(/*! ./left-sidebar-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedLeftSidebarTabbed2Component);
    return CardedLeftSidebarTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-right-sidebar-1')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <span>Content toolbar</span>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardedRightSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebar1Component", function() { return CardedRightSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-1',
            template: __webpack_require__(/*! ./right-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebar1Component);
    return CardedRightSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-2\" position=\"right\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-right-sidebar-2')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <span>Content toolbar</span>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardedRightSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebar2Component", function() { return CardedRightSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-2',
            template: __webpack_require__(/*! ./right-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebar2Component);
    return CardedRightSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar tabbed\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-1\" position=\"right\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-1')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <h2 class=\"m-0\">Right sidebar with tabs and content scroll</h2>\n\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\">\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardedRightSidebarTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed1Component", function() { return CardedRightSidebarTabbed1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebarTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebarTabbed1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebarTabbed1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebarTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-tabbed-1',
            template: __webpack_require__(/*! ./right-sidebar-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebarTabbed1Component);
    return CardedRightSidebarTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidebar tabbed inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-2\" position=\"right\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24 accent\">\n            <h2 class=\"m-0\">Sidebar header</h2>\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header accent p-24\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-2')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <h2 class=\"m-0\">Right sidebar with tabs and inner scroll</h2>\n\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group>\n\n                    <mat-tab label=\"Tab 1\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 2\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 3\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 4\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 5\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 6\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 7\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 8\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 9\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Tab 10\">\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                            <!-- PUT YOUR TAB CONTENT HERE -->\n                            <fuse-demo-content></fuse-demo-content>\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardedRightSidebarTabbed2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed2Component", function() { return CardedRightSidebarTabbed2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardedRightSidebarTabbed2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function CardedRightSidebarTabbed2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    CardedRightSidebarTabbed2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    CardedRightSidebarTabbed2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carded-right-sidebar-tabbed-2',
            template: __webpack_require__(/*! ./right-sidebar-tabbed-2.component.html */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-tabbed-2.component.scss */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], CardedRightSidebarTabbed2Component);
    return CardedRightSidebarTabbed2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/page-layouts.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/page-layouts.module.ts ***!
  \*************************************************************/
/*! exports provided: UIPageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIPageLayoutsModule", function() { return UIPageLayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-1/full-width-1.component */ "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-2/full-width-2.component */ "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component */ "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/full-width-1/full-width-1.component */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts");
/* harmony import */ var app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts");
/* harmony import */ var app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/main/ui/page-layouts/blank/blank.component */ "./src/app/main/ui/page-layouts/blank/blank.component.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    // Carded
    {
        path: 'page-layouts/carded/full-width-1',
        component: app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__["CardedFullWidth1Component"]
    },
    {
        path: 'page-layouts/carded/full-width-2',
        component: app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__["CardedFullWidth2Component"]
    },
    {
        path: 'page-layouts/carded/full-width-tabbed-1',
        component: app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__["CardedFullWidthTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/full-width-tabbed-2',
        component: app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidthTabbed2Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-1',
        component: app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__["CardedLeftSidebar1Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-tabbed-1',
        component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__["CardedLeftSidebarTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-2',
        component: app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__["CardedLeftSidebar2Component"]
    },
    {
        path: 'page-layouts/carded/left-sidebar-tabbed-2',
        component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebarTabbed2Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-1',
        component: app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__["CardedRightSidebar1Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-tabbed-1',
        component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__["CardedRightSidebarTabbed1Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-2',
        component: app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__["CardedRightSidebar2Component"]
    },
    {
        path: 'page-layouts/carded/right-sidebar-tabbed-2',
        component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebarTabbed2Component"]
    },
    // Simple
    {
        path: 'page-layouts/simple/full-width-1',
        component: app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__["SimpleFullWidth1Component"]
    },
    {
        path: 'page-layouts/simple/full-width-tabbed-1',
        component: app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["SimpleFullWidthTabbed1Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-1',
        component: app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__["SimpleLeftSidebar1Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-2',
        component: app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__["SimpleLeftSidebar2Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-3',
        component: app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__["SimpleLeftSidebar3Component"]
    },
    {
        path: 'page-layouts/simple/left-sidebar-4',
        component: app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar4Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-1',
        component: app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__["SimpleRightSidebar1Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-2',
        component: app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__["SimpleRightSidebar2Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-3',
        component: app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__["SimpleRightSidebar3Component"]
    },
    {
        path: 'page-layouts/simple/right-sidebar-4',
        component: app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar4Component"]
    },
    // Blank
    {
        path: 'page-layouts/blank',
        component: app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__["BlankComponent"]
    }
];
var UIPageLayoutsModule = /** @class */ (function () {
    function UIPageLayoutsModule() {
    }
    UIPageLayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_5__["CardedFullWidth1Component"],
                app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_6__["CardedFullWidth2Component"],
                app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_7__["CardedFullWidthTabbed1Component"],
                app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidthTabbed2Component"],
                app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_9__["CardedLeftSidebar1Component"],
                app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_10__["CardedLeftSidebar2Component"],
                app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_11__["CardedLeftSidebarTabbed1Component"],
                app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebarTabbed2Component"],
                app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_13__["CardedRightSidebar1Component"],
                app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_14__["CardedRightSidebar2Component"],
                app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_15__["CardedRightSidebarTabbed1Component"],
                app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebarTabbed2Component"],
                app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_17__["SimpleFullWidth1Component"],
                app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["SimpleFullWidthTabbed1Component"],
                app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_19__["SimpleLeftSidebar1Component"],
                app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_20__["SimpleLeftSidebar2Component"],
                app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_21__["SimpleLeftSidebar3Component"],
                app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar4Component"],
                app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_23__["SimpleRightSidebar1Component"],
                app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_24__["SimpleRightSidebar2Component"],
                app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_25__["SimpleRightSidebar3Component"],
                app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar4Component"],
                app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_27__["BlankComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_28__["FuseSidebarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_4__["FuseDemoModule"]
            ]
        })
    ], UIPageLayoutsModule);
    return UIPageLayoutsModule;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2>Full width</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n        <fuse-demo-content></fuse-demo-content>\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts ***!
  \************************************************************************************/
/*! exports provided: SimpleFullWidth1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFullWidth1Component", function() { return SimpleFullWidth1Component; });
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

var SimpleFullWidth1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function SimpleFullWidth1Component() {
    }
    SimpleFullWidth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-fullwidth-1',
            template: __webpack_require__(/*! ./full-width-1.component.html */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-1.component.scss */ "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFullWidth1Component);
    return SimpleFullWidth1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple tabbed\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\">\n        <h2>Tabbed</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Tab 1\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 2\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 3\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SimpleFullWidthTabbed1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFullWidthTabbed1Component", function() { return SimpleFullWidthTabbed1Component; });
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

var SimpleFullWidthTabbed1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function SimpleFullWidthTabbed1Component() {
    }
    SimpleFullWidthTabbed1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-full-width-tabbed-1',
            template: __webpack_require__(/*! ./full-width-tabbed-1.component.html */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html"),
            styles: [__webpack_require__(/*! ./full-width-tabbed-1.component.scss */ "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFullWidthTabbed1Component);
    return SimpleFullWidthTabbed1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar\">\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                    (click)=\"toggleSidebar('simple-left-sidebar-1')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-content></fuse-demo-content>\n        </div>\n        <!-- / CONTENT -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar1Component", function() { return SimpleLeftSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-1',
            template: __webpack_require__(/*! ./left-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar1Component);
    return SimpleLeftSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-scroll\">\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\" fusePerfectScrollbar>\n\n        <!-- HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                    (click)=\"toggleSidebar('simple-left-sidebar-2')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-content></fuse-demo-content>\n        </div>\n        <!-- / CONTENT -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar2Component", function() { return SimpleLeftSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-2',
            template: __webpack_require__(/*! ./left-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar2Component);
    return SimpleLeftSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-sidebar\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                (click)=\"toggleSidebar('simple-left-sidebar-3')\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Left inner sidebar with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-elevation-z4 p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar3Component", function() { return SimpleLeftSidebar3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar3Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar3Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar3Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-4',
            template: __webpack_require__(/*! ./left-sidebar-3.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-3.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar3Component);
    return SimpleLeftSidebar3Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidebar inner-sidebar inner-scroll\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                (click)=\"toggleSidebar('simple-left-sidebar-4')\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Left inner sidebar with inner scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-elevation-z4 p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimpleLeftSidebar4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar4Component", function() { return SimpleLeftSidebar4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleLeftSidebar4Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleLeftSidebar4Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleLeftSidebar4Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleLeftSidebar4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-left-sidebar-4',
            template: __webpack_require__(/*! ./left-sidebar-4.component.html */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar-4.component.scss */ "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleLeftSidebar4Component);
    return SimpleLeftSidebar4Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar\">\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                    (click)=\"toggleSidebar('simple-right-sidebar-1')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-content></fuse-demo-content>\n        </div>\n        <!-- / CONTENT -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar1Component", function() { return SimpleRightSidebar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar1Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar1Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar1Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-1',
            template: __webpack_require__(/*! ./right-sidebar-1.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-1.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar1Component);
    return SimpleRightSidebar1Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-scroll\">\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content p-24\" fusePerfectScrollbar>\n            <fuse-demo-sidebar></fuse-demo-sidebar>\n        </div>\n        <!-- / SIDEBAR CONTENT -->\n\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\" fusePerfectScrollbar>\n\n        <!-- HEADER -->\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                    (click)=\"toggleSidebar('simple-right-sidebar-2')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT -->\n        <div class=\"content p-24\">\n            <fuse-demo-content></fuse-demo-content>\n        </div>\n        <!-- / CONTENT -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar2Component", function() { return SimpleRightSidebar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar2Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar2Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-2',
            template: __webpack_require__(/*! ./right-sidebar-2.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-2.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar2Component);
    return SimpleRightSidebar2Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-sidebar\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                (click)=\"toggleSidebar('simple-right-sidebar-3')\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Right inner sidebar with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-elevation-z4 p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar3Component", function() { return SimpleRightSidebar3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar3Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar3Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar3Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-4',
            template: __webpack_require__(/*! ./right-sidebar-3.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-3.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar3Component);
    return SimpleRightSidebar3Component;
}());



/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidebar inner-sidebar inner-scroll\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\n                (click)=\"toggleSidebar('simple-right-sidebar-4')\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Right inner sidebar with inner scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n                <fuse-demo-sidebar></fuse-demo-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-elevation-z4 p-24\">\n                <fuse-demo-content></fuse-demo-content>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SimpleRightSidebar4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar4Component", function() { return SimpleRightSidebar4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRightSidebar4Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    function SimpleRightSidebar4Component(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar
     *
     * @param name
     */
    SimpleRightSidebar4Component.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    SimpleRightSidebar4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-right-sidebar-4',
            template: __webpack_require__(/*! ./right-sidebar-4.component.html */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar-4.component.scss */ "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], SimpleRightSidebar4Component);
    return SimpleRightSidebar4Component;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\n\n    <div class=\"mat-title\">Blockquotes</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote class=\"reverse\">\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote class=\"reverse\">\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Lists</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ol>\n                    <li>Ordered list item</li>\n                    <li>\n                        Ordered list item\n                        <ol>\n                            <li>Ordered list item</li>\n                            <li>Ordered list item</li>\n                        </ol>\n                    </li>\n                    <li>Ordered list item</li>\n                    <li>Ordered list item</li>\n                </ol>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ol>\n                        <li>Ordered list item</li>\n                        <li>\n                            Ordered list item\n                            <ol>\n                                <li>Ordered list item</li>\n                                <li>Ordered list item</li>\n                            </ol>\n                        </li>\n                        <li>Ordered list item</li>\n                        <li>Ordered list item</li>\n                    </ol>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ul>\n                    <li>Unordered list item</li>\n                    <li>\n                        Unordered list item\n                        <ul>\n                            <li>Unordered list item</li>\n                            <li>Unordered list item</li>\n                        </ul>\n                    </li>\n                    <li>Unordered list item</li>\n                    <li>Unordered list item</li>\n                </ul>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ul>\n                        <li>Unordered list item</li>\n                        <li>\n                            Unordered list item\n                            <ul>\n                                <li>Unordered list item</li>\n                                <li>Unordered list item</li>\n                            </ul>\n                        </li>\n                        <li>Unordered list item</li>\n                        <li>Unordered list item</li>\n                    </ul>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Definition Lists</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <dl>\n                    <dt>Definition term</dt>\n                    <dd>This is the definition description</dd>\n\n                    <dt>Another definition term</dt>\n                    <dd>This is also another definition description</dd>\n                </dl>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <dl>\n                        <dt>Definition term</dt>\n                        <dd>This is the definition description</dd>\n\n                        <dt>Another definition term</dt>\n                        <dd>This is also another definition description</dd>\n                    </dl>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Change log</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n\n                <div class=\"changelog\">\n\n                    <div class=\"entry\">\n\n                        <div class=\"title\">\n                            <span class=\"version\">v1.0.0</span>\n                            <span class=\"date\">(2018-05-08)</span>\n                        </div>\n\n                        <div class=\"groups\">\n\n                            <div class=\"breaking-changes\">\n                                <span class=\"title\">Breaking changes</span>\n                                <ul>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                </ul>\n                            </div>\n\n                            <div class=\"new\">\n                                <span class=\"title\">New</span>\n                                <ul>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                </ul>\n                            </div>\n\n                            <div class=\"improved\">\n                                <span class=\"title\">Improved</span>\n                                <ul>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                </ul>\n                            </div>\n\n                            <div class=\"fixed\">\n                                <span class=\"title\">Fixed</span>\n                                <ul>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                    <li>This is an example list item for the change log</li>\n                                </ul>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"changelog\">\n\n                        <div class=\"entry\">\n\n                            <div class=\"title\">\n                                <span class=\"version\">v1.0.0</span>\n                                <span class=\"date\">(2018-05-08)</span>\n                            </div>\n\n                            <div class=\"groups\">\n\n                                <div class=\"breaking-changes\">\n                                    <span class=\"title\">Breaking changes</span>\n                                    <ul>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                    </ul>\n                                </div>\n\n                                <div class=\"new\">\n                                    <span class=\"title\">New</span>\n                                    <ul>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                    </ul>\n                                </div>\n\n                                <div class=\"improved\">\n                                    <span class=\"title\">Improved</span>\n                                    <ul>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                    </ul>\n                                </div>\n\n                                <div class=\"fixed\">\n                                    <span class=\"title\">Fixed</span>\n                                    <ul>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                        <li>This is an example list item for the change log</li>\n                                    </ul>\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px; }\n  :host #typography-blockquotes-lists .source-code code {\n    background: none !important; }\n  :host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-blockquotes-lists .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypographyBlockquotesListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyBlockquotesListsComponent", function() { return TypographyBlockquotesListsComponent; });
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

var TypographyBlockquotesListsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyBlockquotesListsComponent() {
    }
    TypographyBlockquotesListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-blockquotes-lists',
            template: __webpack_require__(/*! ./blockquotes-lists.component.html */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html"),
            styles: [__webpack_require__(/*! ./blockquotes-lists.component.scss */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyBlockquotesListsComponent);
    return TypographyBlockquotesListsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-headings\" class=\"p-24\">\n\n    <div class=\"mat-title\">Material design typography classes</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">112px</div>\n                <span class=\"mat-display-4\">Display 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-4\">Display 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">56px</div>\n                <span class=\"mat-display-3\">Display 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-3\">Display 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">45px</div>\n                <span class=\"mat-display-2\">Display 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-2\">Display 2</span>\n                </textarea>\n            </fuse-highlight>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">34px</div>\n                <span class=\"mat-display-1\">Display 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-1\">Display 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"mat-headline\">Headline</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-headline\">Headline</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"mat-title\">Title</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-title\">Title</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"mat-subheading-2\">Subheading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"mat-subheading-1\">Subheading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-1\">Body 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-1\">Body 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-2\">Body 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-2\">Body 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"mat-caption\">Caption</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-caption\">Caption</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Standard Headings</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"h1\">Heading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h1>Heading 1</h1>\n                    <span class=\"h1\">Heading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"h2\">Heading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h2>Heading 2</h2>\n                    <span class=\"h2\">Heading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"h3\">Heading 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h3>Heading 3</h3>\n                    <span class=\"h3\">Heading 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"h4\">Heading 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h4>Heading 4</h4>\n                    <span class=\"h4\">Heading 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">13px</div>\n                <span class=\"h5\">Heading 5</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h5>Heading 5</h5>\n                    <span class=\"h5\">Heading 5</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"h6\">Heading 6</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h6>Heading 6</h6>\n                    <span class=\"h6\">Heading 6</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .source-code code {\n    background: none !important; }\n  :host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-headings .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/headings/headings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/headings/headings.component.ts ***!
  \************************************************************************/
/*! exports provided: TypographyHeadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyHeadingsComponent", function() { return TypographyHeadingsComponent; });
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

var TypographyHeadingsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyHeadingsComponent() {
    }
    TypographyHeadingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-headings',
            template: __webpack_require__(/*! ./headings.component.html */ "./src/app/main/ui/typography/tabs/headings/headings.component.html"),
            styles: [__webpack_require__(/*! ./headings.component.scss */ "./src/app/main/ui/typography/tabs/headings/headings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyHeadingsComponent);
    return TypographyHeadingsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-helpers\" class=\"p-24\">\n\n    <div class=\"mat-title\">Font Weight</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\n                <span class=\"font-weight-100\">font-weight: 100</span>\n                <span>...</span>\n                <span class=\"font-weight-900\">font-weight: 900</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-weight-100\">100 font weight</span>\n                    ...\n                    <span class=\"font-weight-900\">900 font weight</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Font Size</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span class=\"font-size-20\">font-size: 20</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-size-20\">font-size: 20</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Line Height</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span>line-height: 2</span>\n                <span>...</span>\n                <span>line-height: 120</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"line-height-2\">2px line height</span>\n                    ...\n                    <span class=\"line-height-120\">120px line height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-64\">Other helpers</div>\n\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-left\">Left aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-left\">Left aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-center\">Center aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-center\">Center aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-right\">Right aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-right\">Right aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-boxed\">Boxed text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-boxed\">Boxed text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-strike\">Strike-through text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-strike\">Strike-through text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-italic\">Italic text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-italic\">Italic text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-semibold\">Semi-bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-semibold\">Semi-bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-bold\">Bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-bold\">Bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\n                    convallis dui porta massa.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"text-truncate\">\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta\n                        massa.\n                    </span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .source-code code {\n    background: none !important; }\n  :host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-helpers .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.ts ***!
  \**********************************************************************/
/*! exports provided: TypographyHelpersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyHelpersComponent", function() { return TypographyHelpersComponent; });
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

var TypographyHelpersComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyHelpersComponent() {
    }
    TypographyHelpersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-helpers',
            template: __webpack_require__(/*! ./helpers.component.html */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.html"),
            styles: [__webpack_require__(/*! ./helpers.component.scss */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyHelpersComponent);
    return TypographyHelpersComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a <mark>marked</mark> text.</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a <mark>marked</mark> text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <del>This is a deleted text.</del>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <del>This is a deleted text.</del>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><s>This is a strike-through text.</s></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <s>This is a strike-through text.</s>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><u>This is an underlined text.</u></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <u>This is an underlined text.</u>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <small>This is a small text.</small>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <small>This is a small text.</small>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><strong>This is a strong text.</strong></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <strong>This is a strong text.</strong>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><em>This is an italic text.</em></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <em>This is an italic text.</em>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-capitalize\">capitalized</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-capitalized\">capitalized</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .source-code code {\n    background: none !important; }\n  :host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-inline-text-elements .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TypographyInlineTextElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyInlineTextElementsComponent", function() { return TypographyInlineTextElementsComponent; });
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

var TypographyInlineTextElementsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyInlineTextElementsComponent() {
    }
    TypographyInlineTextElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-inline-text-elements',
            template: __webpack_require__(/*! ./inline-text-elements.component.html */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html"),
            styles: [__webpack_require__(/*! ./inline-text-elements.component.scss */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyInlineTextElementsComponent);
    return TypographyInlineTextElementsComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-message-boxes\" class=\"p-24\">\n\n    <div class=\"mat-title\">Message Boxes</div>\n\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"message-box\">\n                    This is a standard message box\n                </div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"message-box\">\n                        This is a standard message box\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"message-box error\">\n                    This is an alert message box!\n                </div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"message-box error\">\n                        This is an alert message box!\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"message-box warning\">\n                    This is a warning message box\n                </div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"message-box warning\">\n                        This is a warning message box!\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"message-box success\">\n                    This is a success message box\n                </div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"message-box success\">\n                        This is a success message box!\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"message-box info\">\n                    This is a info message box\n                </div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                            fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"message-box info\">\n                        This is a info message box!\n                    </div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #typography-message-boxes .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px; }\n  :host #typography-message-boxes .source-code code {\n    background: none !important; }\n  :host #typography-message-boxes .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-message-boxes .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-message-boxes .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TypographyMessageBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyMessageBoxesComponent", function() { return TypographyMessageBoxesComponent; });
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

var TypographyMessageBoxesComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyMessageBoxesComponent() {
    }
    TypographyMessageBoxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography-message-boxes',
            template: __webpack_require__(/*! ./message-boxes.component.html */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html"),
            styles: [__webpack_require__(/*! ./message-boxes.component.scss */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyMessageBoxesComponent);
    return TypographyMessageBoxesComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Typography</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Headings\">\n\n                <typography-headings></typography-headings>\n\n            </mat-tab>\n\n            <mat-tab label=\"Inline Text Elements\">\n\n                <typography-inline-text-elements></typography-inline-text-elements>\n\n            </mat-tab>\n\n            <mat-tab label=\"Blockquotes & Lists\">\n\n                <typography-blockquotes-lists></typography-blockquotes-lists>\n\n            </mat-tab>\n\n            <mat-tab label=\"Message Boxes\">\n\n                <typography-message-boxes></typography-message-boxes>\n\n            </mat-tab>\n\n            <mat-tab label=\"Helpers\">\n\n                <typography-helpers></typography-helpers>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/ui/typography/typography.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/ui/typography/typography.component.ts ***!
  \************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/main/ui/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/main/ui/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/main/ui/typography/typography.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/ui/typography/typography.module.ts ***!
  \*********************************************************/
/*! exports provided: UITypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UITypographyModule", function() { return UITypographyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/typography/typography.component */ "./src/app/main/ui/typography/typography.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/typography/tabs/headings/headings.component */ "./src/app/main/ui/typography/tabs/headings/headings.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component */ "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component */ "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/ui/typography/tabs/message-boxes/message-boxes.component */ "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts");
/* harmony import */ var app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/ui/typography/tabs/helpers/helpers.component */ "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'typography',
        component: app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__["TypographyComponent"]
    }
];
var UITypographyModule = /** @class */ (function () {
    function UITypographyModule() {
    }
    UITypographyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_5__["TypographyComponent"],
                app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_6__["TypographyHeadingsComponent"],
                app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_7__["TypographyInlineTextElementsComponent"],
                app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_8__["TypographyBlockquotesListsComponent"],
                app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_9__["TypographyMessageBoxesComponent"],
                app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_10__["TypographyHelpersComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], UITypographyModule);
    return UITypographyModule;
}());



/***/ }),

/***/ "./src/app/main/ui/ui.module.ts":
/*!**************************************!*\
  !*** ./src/app/main/ui/ui.module.ts ***!
  \**************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/ui/forms/forms.module */ "./src/app/main/ui/forms/forms.module.ts");
/* harmony import */ var app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/ui/icons/icons.module */ "./src/app/main/ui/icons/icons.module.ts");
/* harmony import */ var app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/ui/typography/typography.module */ "./src/app/main/ui/typography/typography.module.ts");
/* harmony import */ var app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/ui/helper-classes/helper-classes.module */ "./src/app/main/ui/helper-classes/helper-classes.module.ts");
/* harmony import */ var app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/ui/page-layouts/page-layouts.module */ "./src/app/main/ui/page-layouts/page-layouts.module.ts");
/* harmony import */ var app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/ui/colors/colors.module */ "./src/app/main/ui/colors/colors.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_1__["UIFormsModule"],
                app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__["UIIconsModule"],
                app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_3__["UITypographyModule"],
                app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_4__["UIHelperClassesModule"],
                app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_5__["UIPageLayoutsModule"],
                app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_6__["UIColorsModule"]
            ]
        })
    ], UIModule);
    return UIModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-ui-ui-module.js.map