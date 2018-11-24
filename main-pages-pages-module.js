(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-pages-module"],{

/***/ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" class=\"inner-scroll\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"forgot-password-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/fuse.svg\">\n        </div>\n\n        <div class=\"title\" [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"forgot-password-form-wrapper\" fusePerfectScrollbar\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"forgot-password-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\n\n            <form name=\"forgoPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"forgotPasswordForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"forgotPasswordForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\n                    SEND RESET LINK\n                </button>\n\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nforgot-password-2 #forgot-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nforgot-password-2 #forgot-password #forgot-password-intro {\n    padding: 128px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      forgot-password-2 #forgot-password #forgot-password-intro {\n        padding: 128px 64px; } }\nforgot-password-2 #forgot-password #forgot-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\nforgot-password-2 #forgot-password #forgot-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\nforgot-password-2 #forgot-password #forgot-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper {\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      forgot-password-2 #forgot-password #forgot-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      forgot-password-2 #forgot-password #forgot-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        forgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          text-align: center;\n          padding: 24px; } }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 21px; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form .description {\n        padding-top: 8px; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        padding-top: 32px; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            forgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n              width: 80%; } }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            forgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 80%; } }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\nforgot-password-2 #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ForgotPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword2Component", function() { return ForgotPassword2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPassword2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function ForgotPassword2Component(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ForgotPassword2Component.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    ForgotPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forgot-password-2',
            template: __webpack_require__(/*! ./forgot-password-2.component.html */ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-2.component.scss */ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgotPassword2Component);
    return ForgotPassword2Component;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ForgotPassword2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword2Module", function() { return ForgotPassword2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password-2/forgot-password-2.component */ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/forgot-password-2',
        component: app_main_pages_authentication_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassword2Component"]
    }
];
var ForgotPassword2Module = /** @class */ (function () {
    function ForgotPassword2Module() {
    }
    ForgotPassword2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassword2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
            ]
        })
    ], ForgotPassword2Module);
    return ForgotPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\">\n\n    <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"forgot-password-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\n\n            <form name=\"forgotPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"forgotPasswordForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"forgotPasswordForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\n                    SEND RESET LINK\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password/forgot-password.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nforgot-password #forgot-password {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nforgot-password #forgot-password #forgot-password-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      forgot-password #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        forgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            forgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\nforgot-password #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function ForgotPasswordComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/forgot-password/forgot-password.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/forgot-password/forgot-password.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password/forgot-password.component */ "./src/app/main/pages/authentication/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/forgot-password',
        component: app_main_pages_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
    }
];
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/lock/lock.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/authentication/lock/lock.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"lock\" fxLayout=\"column\">\n\n    <div id=\"lock-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"lock-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"lock-form-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\">\n\n                <div class=\"avatar-container\">\n                    <img class=\"avatar big\" src=\"assets/images/avatars/katherine.jpg\">\n                    <mat-icon class=\"s-32\">lock</mat-icon>\n                </div>\n\n                <div>\n                    <div class=\"title\">YOUR SESSION IS LOCKED</div>\n                    <div class=\"subtitle\">\n                        Due to inactivity, your session is locked. Enter your password to continue.\n                    </div>\n                </div>\n\n            </div>\n\n            <form name=\"lockForm\" [formGroup]=\"lockForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Username\" formControlName=\"username\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"UNLOCK\" [disabled]=\"lockForm.invalid\">\n                    UNLOCK\n                </button>\n\n            </form>\n\n            <div class=\"message\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Are you not Katherine?</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/lock/lock.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/authentication/lock/lock.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nlock #lock {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nlock #lock #lock-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      lock #lock #lock-form-wrapper {\n        padding: 16px; } }\nlock #lock #lock-form-wrapper #lock-form {\n      display: flex;\n      flex-direction: column;\n      width: 420px;\n      max-width: 420px;\n      padding: 48px 32px 32px 32px;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        lock #lock #lock-form-wrapper #lock-form {\n          padding: 24px;\n          width: 100%; } }\nlock #lock #lock-form-wrapper #lock-form .lock-form-header {\n        display: flex;\n        flex: 1 0 auto; }\nlock #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n          position: relative;\n          margin-right: 16px; }\nlock #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container .avatar {\n            margin: 0; }\n@media screen and (max-width: 599px) {\n            lock #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n              margin-right: 0; } }\nlock #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container mat-icon {\n            position: absolute;\n            bottom: -2px;\n            right: -6px; }\nlock #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n          font-size: 20px;\n          margin-bottom: 8px; }\n@media screen and (max-width: 599px) {\n            lock #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n              margin-top: 16px;\n              text-align: center; } }\n@media screen and (max-width: 599px) {\n          lock #lock #lock-form-wrapper #lock-form .lock-form-header .subtitle {\n            text-align: center; } }\nlock #lock #lock-form-wrapper #lock-form form {\n        width: 100%;\n        margin: 32px 0 0 0; }\nlock #lock #lock-form-wrapper #lock-form form mat-form-field {\n          width: 100%; }\nlock #lock #lock-form-wrapper #lock-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            lock #lock #lock-form-wrapper #lock-form form .submit-button {\n              width: 90%; } }\nlock #lock #lock-form-wrapper #lock-form .message {\n        font-weight: 500;\n        text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/lock/lock.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/pages/authentication/lock/lock.component.ts ***!
  \******************************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LockComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function LockComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    LockComponent.prototype.ngOnInit = function () {
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value: 'Katherine',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/main/pages/authentication/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.scss */ "./src/app/main/pages/authentication/lock/lock.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/lock/lock.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/pages/authentication/lock/lock.module.ts ***!
  \***************************************************************/
/*! exports provided: LockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockModule", function() { return LockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/lock/lock.component */ "./src/app/main/pages/authentication/lock/lock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/lock',
        component: app_main_pages_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["LockComponent"]
    }
];
var LockModule = /** @class */ (function () {
    function LockModule() {
    }
    LockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["LockComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], LockModule);
    return LockModule;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/login-2/login-2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/pages/authentication/login-2/login-2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" class=\"inner-scroll\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/fuse.svg\">\n        </div>\n\n        <div class=\"title\" [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"login-form-wrapper\" fusePerfectScrollbar\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"login-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error\n                        *ngIf=\"!loginForm.get('email').hasError('required') &&\n                                loginForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\n                     fxLayoutAlign=\"space-between center\">\n                    <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\n                        Remember Me\n                    </mat-checkbox>\n\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password-2'\">\n                        Forgot Password?\n                    </a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\n                        [disabled]=\"loginForm.invalid\">\n                    LOGIN\n                </button>\n\n            </form>\n\n            <div class=\"separator\">\n                <span class=\"text\">OR</span>\n            </div>\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n                <button mat-raised-button class=\"google\">\n                    Log in with Google\n                </button>\n\n                <button mat-raised-button class=\"facebook\">\n                    Log in with Facebook\n                </button>\n\n            </div>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Don't have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/register-2'\">Create an account</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/login-2/login-2.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/pages/authentication/login-2/login-2.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nlogin-2 #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nlogin-2 #login #login-intro {\n    padding: 128px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      login-2 #login #login-intro {\n        padding: 128px 64px; } }\nlogin-2 #login #login-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\nlogin-2 #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\nlogin-2 #login #login-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px; }\nlogin-2 #login #login-form-wrapper {\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      login-2 #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      login-2 #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\nlogin-2 #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        login-2 #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\nlogin-2 #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nlogin-2 #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\nlogin-2 #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\nlogin-2 #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\nlogin-2 #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            login-2 #login #login-form-wrapper #login-form form mat-form-field {\n              width: 80%; } }\nlogin-2 #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\nlogin-2 #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\nlogin-2 #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\nlogin-2 #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\nlogin-2 #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            login-2 #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\nlogin-2 #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center; }\nlogin-2 #login #login-form-wrapper #login-form .separator .text {\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\nlogin-2 #login #login-form-wrapper #login-form .separator .text:before, login-2 #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid; }\nlogin-2 #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\nlogin-2 #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\nlogin-2 #login #login-form-wrapper #login-form button.google, login-2 #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          login-2 #login #login-form-wrapper #login-form button.google, login-2 #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\nlogin-2 #login #login-form-wrapper #login-form button.google mat-icon, login-2 #login #login-form-wrapper #login-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\nlogin-2 #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\nlogin-2 #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\nlogin-2 #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\nlogin-2 #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/login-2/login-2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/pages/authentication/login-2/login-2.component.ts ***!
  \************************************************************************/
/*! exports provided: Login2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Component", function() { return Login2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login2Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function Login2Component(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    Login2Component.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Login2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-2',
            template: __webpack_require__(/*! ./login-2.component.html */ "./src/app/main/pages/authentication/login-2/login-2.component.html"),
            styles: [__webpack_require__(/*! ./login-2.component.scss */ "./src/app/main/pages/authentication/login-2/login-2.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Login2Component);
    return Login2Component;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/login-2/login-2.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/pages/authentication/login-2/login-2.module.ts ***!
  \*********************************************************************/
/*! exports provided: Login2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Module", function() { return Login2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_login_2_login_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/login-2/login-2.component */ "./src/app/main/pages/authentication/login-2/login-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/login-2',
        component: app_main_pages_authentication_login_2_login_2_component__WEBPACK_IMPORTED_MODULE_4__["Login2Component"]
    }
];
var Login2Module = /** @class */ (function () {
    function Login2Module() {
    }
    Login2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_login_2_login_2_component__WEBPACK_IMPORTED_MODULE_4__["Login2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Login2Module);
    return Login2Module;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/pages/authentication/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"column\">\n\n    <div id=\"login-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"login-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error\n                        *ngIf=\"!loginForm.get('email').hasError('required') &&\n                                loginForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\n                     fxLayoutAlign=\"space-between center\">\n                    <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\n                        Remember Me\n                    </mat-checkbox>\n\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password'\">\n                        Forgot Password?\n                    </a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOG IN\"\n                        [disabled]=\"loginForm.invalid\">\n                    LOGIN\n                </button>\n\n            </form>\n\n            <div class=\"separator\">\n                <span class=\"text\">OR</span>\n            </div>\n\n            <button mat-raised-button class=\"google\">\n                Log in with Google\n            </button>\n\n            <button mat-raised-button class=\"facebook\">\n                Log in with Facebook\n            </button>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Don't have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/register'\">Create an account</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/pages/authentication/login/login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nlogin #login {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nlogin #login #login-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      login #login #login-form-wrapper {\n        padding: 16px; } }\nlogin #login #login-form-wrapper #login-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        login #login #login-form-wrapper #login-form {\n          padding: 24px;\n          width: 100%; } }\nlogin #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nlogin #login #login-form-wrapper #login-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\nlogin #login #login-form-wrapper #login-form form {\n        width: 100%;\n        text-align: left; }\nlogin #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\nlogin #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\nlogin #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\nlogin #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\nlogin #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\nlogin #login #login-form-wrapper #login-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            login #login #login-form-wrapper #login-form form .submit-button {\n              width: 90%; } }\nlogin #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\nlogin #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\nlogin #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px; }\nlogin #login #login-form-wrapper #login-form .separator .text {\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\nlogin #login #login-form-wrapper #login-form .separator .text:before, login #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid; }\nlogin #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\nlogin #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\nlogin #login #login-form-wrapper #login-form button.google, login #login #login-form-wrapper #login-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        login #login #login-form-wrapper #login-form button {\n          width: 80%; } }\nlogin #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\nlogin #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/authentication/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function LoginComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/pages/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/main/pages/authentication/login/login.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/login/login.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/authentication/login/login.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/login/login.component */ "./src/app/main/pages/authentication/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/login',
        component: app_main_pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mail-confirm\" fxLayout=\"column\">\n\n    <div id=\"mail-confirm-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"mail-confirm-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <mat-icon class=\"mat-accent s-96\">email</mat-icon>\n            </div>\n\n            <div class=\"title\">Confirm your email address!</div>\n\n            <div class=\"subtitle\">\n                <p>\n                    A confirmation e-mail has been sent to <b>example@mymail.com</b>.\n                </p>\n                <p>\n                    Check your inbox and click on the \"Confirm my email\" link to confirm your email address.\n                </p>\n            </div>\n\n            <div class=\"message\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login page</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-confirm #mail-confirm {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      mail-confirm #mail-confirm #mail-confirm-form-wrapper {\n        padding: 16px; } }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n      max-width: 480px;\n      padding: 48px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        mail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n          padding: 24px;\n          width: 100%; } }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .logo {\n        margin: 0 auto 32px auto; }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .title {\n        font-size: 20px;\n        margin-top: 16px; }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .subtitle {\n        margin: 16px auto;\n        max-width: 300px;\n        font-size: 15px; }\nmail-confirm #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .message {\n        font-weight: 500;\n        text-align: center;\n        margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MailConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmComponent", function() { return MailConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
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



var MailConfirmComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    function MailConfirmComponent(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    MailConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-confirm',
            template: __webpack_require__(/*! ./mail-confirm.component.html */ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.html"),
            styles: [__webpack_require__(/*! ./mail-confirm.component.scss */ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], MailConfirmComponent);
    return MailConfirmComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/pages/authentication/mail-confirm/mail-confirm.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MailConfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmModule", function() { return MailConfirmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_mail_confirm_mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/mail-confirm/mail-confirm.component */ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/mail-confirm',
        component: app_main_pages_authentication_mail_confirm_mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["MailConfirmComponent"]
    }
];
var MailConfirmModule = /** @class */ (function () {
    function MailConfirmModule() {
    }
    MailConfirmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_mail_confirm_mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["MailConfirmComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], MailConfirmModule);
    return MailConfirmModule;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/register-2/register-2.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register-2/register-2.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" class=\"inner-scroll\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"register-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/fuse.svg\">\n        </div>\n\n        <div class=\"title\" [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"register-form-wrapper\" fusePerfectScrollbar\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"register-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">CREATE AN ACCOUNT</div>\n\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\n                    <mat-error>\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"registerForm.get('passwordConfirm').hasError('required')\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!registerForm.get('passwordConfirm').hasError('required') &&\n                                       registerForm.get('passwordConfirm').hasError('passwordsNotMatching')\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <mat-checkbox name=\"terms\" aria-label=\"Accept\" required>\n                        <span>Accept</span>\n                    </mat-checkbox>\n                    <a href=\"#\">terms and conditions</a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\n                        [disabled]=\"registerForm.invalid\">\n                    CREATE AN ACCOUNT\n                </button>\n\n            </form>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Already have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Login</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/register-2/register-2.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register-2/register-2.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nregister-2 #register {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nregister-2 #register #register-intro {\n    padding: 128px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      register-2 #register #register-intro {\n        padding: 128px 64px; } }\nregister-2 #register #register-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\nregister-2 #register #register-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\nregister-2 #register #register-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px; }\nregister-2 #register #register-form-wrapper {\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      register-2 #register #register-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      register-2 #register #register-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\nregister-2 #register #register-form-wrapper #register-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        register-2 #register #register-form-wrapper #register-form {\n          text-align: center;\n          padding: 24px; } }\nregister-2 #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nregister-2 #register #register-form-wrapper #register-form .title {\n        font-size: 21px; }\nregister-2 #register #register-form-wrapper #register-form .description {\n        padding-top: 8px; }\nregister-2 #register #register-form-wrapper #register-form form {\n        width: 100%;\n        padding-top: 32px; }\nregister-2 #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            register-2 #register #register-form-wrapper #register-form form mat-form-field {\n              width: 80%; } }\nregister-2 #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\nregister-2 #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\nregister-2 #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\nregister-2 #register #register-form-wrapper #register-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            register-2 #register #register-form-wrapper #register-form form .submit-button {\n              width: 80%; } }\nregister-2 #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center; }\nregister-2 #register #register-form-wrapper #register-form .separator .text {\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\nregister-2 #register #register-form-wrapper #register-form .separator .text:before, register-2 #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid; }\nregister-2 #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\nregister-2 #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\nregister-2 #register #register-form-wrapper #register-form button.google, register-2 #register #register-form-wrapper #register-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          register-2 #register #register-form-wrapper #register-form button.google, register-2 #register #register-form-wrapper #register-form button.facebook {\n            width: 60%; } }\nregister-2 #register #register-form-wrapper #register-form button.google mat-icon, register-2 #register #register-form-wrapper #register-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\nregister-2 #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\nregister-2 #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/register-2/register-2.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register-2/register-2.component.ts ***!
  \******************************************************************************/
/*! exports provided: Register2Component, confirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Component", function() { return Register2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Register2Component = /** @class */ (function () {
    function Register2Component(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    Register2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.registerForm.get('passwordConfirm').updateValueAndValidity();
        });
    };
    /**
     * On destroy
     */
    Register2Component.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    Register2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-2',
            template: __webpack_require__(/*! ./register-2.component.html */ "./src/app/main/pages/authentication/register-2/register-2.component.html"),
            styles: [__webpack_require__(/*! ./register-2.component.scss */ "./src/app/main/pages/authentication/register-2/register-2.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Register2Component);
    return Register2Component;
}());

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
var confirmPasswordValidator = function (control) {
    if (!control.parent || !control) {
        return null;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { 'passwordsNotMatching': true };
};


/***/ }),

/***/ "./src/app/main/pages/authentication/register-2/register-2.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register-2/register-2.module.ts ***!
  \***************************************************************************/
/*! exports provided: Register2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Module", function() { return Register2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/register-2/register-2.component */ "./src/app/main/pages/authentication/register-2/register-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/register-2',
        component: app_main_pages_authentication_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_4__["Register2Component"]
    }
];
var Register2Module = /** @class */ (function () {
    function Register2Module() {
    }
    Register2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_4__["Register2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Register2Module);
    return Register2Module;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"column\">\n\n    <div id=\"register-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"register-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">CREATE AN ACCOUNT</div>\n\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\n                    <mat-error>\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"registerForm.get('passwordConfirm').hasError('required')\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!registerForm.get('passwordConfirm').hasError('required') &&\n                                       registerForm.get('passwordConfirm').hasError('passwordsNotMatching')\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <mat-checkbox name=\"terms\" aria-label=\"I read and accept\" required>\n                        <span>I read and accept</span>\n                    </mat-checkbox>\n                    <a href=\"#\">terms and conditions</a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\n                        [disabled]=\"registerForm.invalid\">\n                    CREATE AN ACCOUNT\n                </button>\n\n            </form>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Already have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/register/register.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register/register.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nregister #register {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nregister #register #register-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      register #register #register-form-wrapper {\n        padding: 16px; } }\nregister #register #register-form-wrapper #register-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        register #register #register-form-wrapper #register-form {\n          padding: 24px;\n          width: 100%; } }\nregister #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nregister #register #register-form-wrapper #register-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\nregister #register #register-form-wrapper #register-form form {\n        width: 100%;\n        text-align: left; }\nregister #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\nregister #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\nregister #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\nregister #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\nregister #register #register-form-wrapper #register-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            register #register #register-form-wrapper #register-form form .submit-button {\n              width: 90%; } }\nregister #register #register-form-wrapper #register-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\nregister #register #register-form-wrapper #register-form .register .text {\n          margin-right: 8px; }\nregister #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px; }\nregister #register #register-form-wrapper #register-form .separator .text {\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\nregister #register #register-form-wrapper #register-form .separator .text:before, register #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid; }\nregister #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\nregister #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\nregister #register #register-form-wrapper #register-form button.google, register #register #register-form-wrapper #register-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        register #register #register-form-wrapper #register-form button {\n          width: 80%; } }\nregister #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\nregister #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/register/register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/pages/authentication/register/register.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterComponent, confirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.registerForm.get('passwordConfirm').updateValueAndValidity();
        });
    };
    /**
     * On destroy
     */
    RegisterComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/main/pages/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/main/pages/authentication/register/register.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
var confirmPasswordValidator = function (control) {
    if (!control.parent || !control) {
        return null;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { 'passwordsNotMatching': true };
};


/***/ }),

/***/ "./src/app/main/pages/authentication/register/register.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/authentication/register/register.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/register/register.component */ "./src/app/main/pages/authentication/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/register',
        component: app_main_pages_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" class=\"inner-scroll\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"reset-password-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/fuse.svg\">\n        </div>\n\n        <div class=\"title\" [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"reset-password-form-wrapper\" fusePerfectScrollbar\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"reset-password-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">RESET YOUR PASSWORD</div>\n\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"resetPasswordForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"resetPasswordForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"resetPasswordForm.get('passwordConfirm').hasError('required')\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!resetPasswordForm.get('passwordConfirm').hasError('required') &&\n                                       resetPasswordForm.get('passwordConfirm').hasError('passwordsNotMatching')\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\n                    RESET MY PASSWORD\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nreset-password-2 #reset-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nreset-password-2 #reset-password #reset-password-intro {\n    padding: 128px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      reset-password-2 #reset-password #reset-password-intro {\n        padding: 128px 64px; } }\nreset-password-2 #reset-password #reset-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\nreset-password-2 #reset-password #reset-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\nreset-password-2 #reset-password #reset-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px; }\nreset-password-2 #reset-password #reset-password-form-wrapper {\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      reset-password-2 #reset-password #reset-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      reset-password-2 #reset-password #reset-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        reset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form {\n          text-align: center;\n          padding: 24px; } }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 21px; }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form .description {\n        padding-top: 8px; }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        padding-top: 32px; }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            reset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n              width: 80%; } }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            reset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 80%; } }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\nreset-password-2 #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ResetPassword2Component, confirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword2Component", function() { return ResetPassword2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPassword2Component = /** @class */ (function () {
    function ResetPassword2Component(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ResetPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
        });
    };
    /**
     * On destroy
     */
    ResetPassword2Component.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ResetPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reset-password-2',
            template: __webpack_require__(/*! ./reset-password-2.component.html */ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.html"),
            styles: [__webpack_require__(/*! ./reset-password-2.component.scss */ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ResetPassword2Component);
    return ResetPassword2Component;
}());

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
var confirmPasswordValidator = function (control) {
    if (!control.parent || !control) {
        return null;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { 'passwordsNotMatching': true };
};


/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password-2/reset-password-2.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ResetPassword2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword2Module", function() { return ResetPassword2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/reset-password-2/reset-password-2.component */ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/reset-password-2',
        component: app_main_pages_authentication_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__["ResetPassword2Component"]
    }
];
var ResetPassword2Module = /** @class */ (function () {
    function ResetPassword2Module() {
    }
    ResetPassword2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__["ResetPassword2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], ResetPassword2Module);
    return ResetPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"column\">\n\n    <div id=\"reset-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"reset-password-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">RESET YOUR PASSWORD</div>\n\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"resetPasswordForm.get('email').hasError('required')\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"resetPasswordForm.get('email').hasError('email')\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error>\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"resetPasswordForm.get('passwordConfirm').hasError('required')\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!resetPasswordForm.get('passwordConfirm').hasError('required') &&\n                                       resetPasswordForm.get('passwordConfirm').hasError('passwordsNotMatching')\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\n                    RESET MY PASSWORD\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password/reset-password.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password/reset-password.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nreset-password #reset-password {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nreset-password #reset-password #reset-password-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      reset-password #reset-password #reset-password-form-wrapper {\n        padding: 16px; } }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form {\n      width: 400px;\n      max-width: 400px;\n      padding: 32px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        reset-password #reset-password #reset-password-form-wrapper #reset-password-form {\n          padding: 24px;\n          width: 100%; } }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        text-align: left; }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            reset-password #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 90%; } }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\nreset-password #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password/reset-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password/reset-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResetPasswordComponent, confirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
        });
    };
    /**
     * On destroy
     */
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/main/pages/authentication/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/main/pages/authentication/reset-password/reset-password.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
var confirmPasswordValidator = function (control) {
    if (!control.parent || !control) {
        return null;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { 'passwordsNotMatching': true };
};


/***/ }),

/***/ "./src/app/main/pages/authentication/reset-password/reset-password.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/pages/authentication/reset-password/reset-password.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/reset-password/reset-password.component */ "./src/app/main/pages/authentication/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/reset-password',
        component: app_main_pages_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
    }
];
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/pages/coming-soon/coming-soon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/coming-soon/coming-soon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"coming-soon\" fxLayout=\"column\">\n\n    <div id=\"coming-soon-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"coming-soon-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"top\">\n\n                <div class=\"logo\">\n                    <img src=\"assets/images/logos/fuse.svg\">\n                </div>\n\n                <div class=\"title\">Hey! Thank you for checking out our app.</div>\n                <div class=\"subtitle\">It’s not quite ready yet, but we are working hard and it will be ready in\n                    approximately:\n                </div>\n\n                <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\n\n            </div>\n\n            <form name=\"comingSoonForm\" [formGroup]=\"comingSoonForm\" novalidate>\n\n                <div class=\"message\">\n                    If you would like to be notified when the app is ready, you can subscribe to our e-mail list.\n                </div>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"comingSoonFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!comingSoonFormErrors.email.required && comingSoonFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"accent\" class=\"subscribe-button\" aria-label=\"SUBSCRIBE\"\n                        [disabled]=\"comingSoonForm.invalid\">\n                    SUBSCRIBE\n                </button>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/coming-soon/coming-soon.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/coming-soon/coming-soon.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ncoming-soon #coming-soon {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\ncoming-soon #coming-soon #coming-soon-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      coming-soon #coming-soon #coming-soon-form-wrapper {\n        padding: 16px; } }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n      width: 384px;\n      max-width: 384px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        coming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n          width: 100%; } }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n        width: 100%;\n        padding: 32px; }\n@media screen and (max-width: 599px) {\n          coming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n            padding: 24px; } }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .logo {\n          width: 128px;\n          margin: 32px auto; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top > .title {\n          font-size: 17px;\n          margin-top: 16px; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .subtitle {\n          margin: 16px auto 0 auto;\n          text-align: center;\n          max-width: 300px;\n          font-size: 15px; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form .top fuse-countdown {\n          margin: 48px auto 16px auto; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form form {\n        width: 100%;\n        padding: 32px;\n        text-align: center; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form form .message {\n          font-weight: 500;\n          margin: 8px auto 32px auto; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form form mat-form-field {\n          width: 320px;\n          margin: 8px auto 16px auto; }\ncoming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n          width: 220px;\n          margin: 16px auto; }\n@media screen and (max-width: 599px) {\n            coming-soon #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n              width: 90%; } }\n"

/***/ }),

/***/ "./src/app/main/pages/coming-soon/coming-soon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComingSoonComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    function ComingSoonComponent(_fuseConfigService, _formBuilder) {
        this._fuseConfigService = _fuseConfigService;
        this._formBuilder = _formBuilder;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        // Set the defaults
        this.comingSoonFormErrors = {
            email: {}
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ComingSoonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.comingSoonForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    /**
     * On destroy
     */
    ComingSoonComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On form values changed
     */
    ComingSoonComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.comingSoonFormErrors) {
            if (!this.comingSoonFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.comingSoonFormErrors[field] = {};
            // Get the control
            var control = this.comingSoonForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.comingSoonFormErrors[field] = control.errors;
            }
        }
    };
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/main/pages/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.scss */ "./src/app/main/pages/coming-soon/coming-soon.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/coming-soon/coming-soon.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/pages/coming-soon/coming-soon.module.ts ***!
  \**************************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/coming-soon/coming-soon.component */ "./src/app/main/pages/coming-soon/coming-soon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'coming-soon',
        component: app_main_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_5__["ComingSoonComponent"]
    }
];
var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_5__["ComingSoonComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseCountdownModule"]
            ]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());



/***/ }),

/***/ "./src/app/main/pages/errors/404/error-404.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/pages/errors/404/error-404.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-404\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"error-code\">404</div>\n\n        <div class=\"message\">Sorry but we could not find the page you are looking for</div>\n\n        <div class=\"search\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"icon s-24\">search</mat-icon>\n            <input placeholder=\"Search for anything\" fxFlex>\n        </div>\n\n        <a class=\"back-link\" [routerLink]=\"'/apps/dashboards/project'\">Go back to dashboard</a>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/errors/404/error-404.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/pages/errors/404/error-404.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nerror-404 #error-404 {\n  width: 100%; }\nerror-404 #error-404 .content {\n    width: 90%;\n    max-width: 512px !important; }\nerror-404 #error-404 .content .error-code {\n      font-size: 112px;\n      text-align: center;\n      line-height: 1;\n      margin-bottom: 16px;\n      font-weight: 500; }\nerror-404 #error-404 .content .message {\n      font-size: 24px;\n      text-align: center; }\nerror-404 #error-404 .content .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      margin: 48px auto 16px auto;\n      padding: 16px;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\nerror-404 #error-404 .content .search input {\n        padding: 0 0 0 16px; }\nerror-404 #error-404 .content .back-link {\n      font-size: 15px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/pages/errors/404/error-404.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/pages/errors/404/error-404.component.ts ***!
  \**************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error404Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    function Error404Component(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error-404',
            template: __webpack_require__(/*! ./error-404.component.html */ "./src/app/main/pages/errors/404/error-404.component.html"),
            styles: [__webpack_require__(/*! ./error-404.component.scss */ "./src/app/main/pages/errors/404/error-404.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/main/pages/errors/404/error-404.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/errors/404/error-404.module.ts ***!
  \***********************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_errors_404_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/errors/404/error-404.component */ "./src/app/main/pages/errors/404/error-404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'errors/error-404',
        component: app_main_pages_errors_404_error_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]
    }
];
var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_errors_404_error_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ }),

/***/ "./src/app/main/pages/errors/500/error-500.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/pages/errors/500/error-500.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-500\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"error-code\">500</div>\n\n        <div class=\"message\">Well, you broke the internet!</div>\n\n        <div class=\"sub-message\">\n            Just kidding, looks like we have an internal issue, please try again in couple minutes\n        </div>\n\n        <a class=\"report-link\" [routerLink]=\"'/apps/dashboards/project'\">Report this problem</a>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/errors/500/error-500.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/pages/errors/500/error-500.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nerror-500 #error-500 {\n  width: 100%; }\nerror-500 #error-500 .content {\n    width: 90%;\n    max-width: 512px !important; }\nerror-500 #error-500 .content .error-code {\n      font-size: 112px;\n      line-height: 1;\n      text-align: center;\n      margin-bottom: 16px;\n      font-weight: 500; }\nerror-500 #error-500 .content .message {\n      font-size: 24px;\n      text-align: center; }\nerror-500 #error-500 .content .sub-message {\n      font-size: 17px;\n      text-align: center;\n      margin: 16px auto 48px auto; }\nerror-500 #error-500 .content .report-link {\n      text-align: center;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/pages/errors/500/error-500.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/pages/errors/500/error-500.component.ts ***!
  \**************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error500Component = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    function Error500Component(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    Error500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error-500',
            template: __webpack_require__(/*! ./error-500.component.html */ "./src/app/main/pages/errors/500/error-500.component.html"),
            styles: [__webpack_require__(/*! ./error-500.component.scss */ "./src/app/main/pages/errors/500/error-500.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/main/pages/errors/500/error-500.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/errors/500/error-500.module.ts ***!
  \***********************************************************/
/*! exports provided: Error500Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Module", function() { return Error500Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_errors_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/errors/500/error-500.component */ "./src/app/main/pages/errors/500/error-500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'errors/error-500',
        component: app_main_pages_errors_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]
    }
];
var Error500Module = /** @class */ (function () {
    function Error500Module() {
    }
    Error500Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_errors_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ]
        })
    ], Error500Module);
    return Error500Module;
}());



/***/ }),

/***/ "./src/app/main/pages/faq/faq.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/pages/faq/faq.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"faq\" class=\"page-layout simple full-width\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text mb-32\">\n            <h1>Frequently Asked Questions</h1>\n        </div>\n\n        <div class=\"search mat-elevation-z7\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon>search</mat-icon>\n            <input [formControl]=\"searchInput\" placeholder=\"Search in FAQs...\" fxFlex>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content px-16 py-24 px-sm-24 py-sm-32\">\n\n        <mat-accordion class=\"faqs-accordion\">\n\n            <mat-expansion-panel *ngFor=\"let faq of faqsFiltered; let i = index\" [expanded]=\"step === i\" (opened)=\"setStep(i)\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"mr-8\">help_outline</mat-icon>\n                        {{faq.question}}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                {{faq.answer}}\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/faq/faq.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/pages/faq/faq.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfaq .header {\n  flex: 1 0 auto;\n  height: 360px;\n  max-height: 360px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media screen and (max-width: 599px) {\n    faq .header {\n      height: 240px;\n      padding: 16px; } }\nfaq .header .hero-text {\n    margin-bottom: 32px; }\nfaq .header .hero-text h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 16px; }\n@media (max-width: 599px) {\n        faq .header .hero-text h1 {\n          font-size: 24px; } }\nfaq .header .search {\n    width: 100%;\n    max-width: 640px;\n    height: 56px;\n    line-height: 56px;\n    padding: 18px; }\nfaq .header .search input {\n      height: 56px;\n      padding-left: 16px;\n      border: none;\n      outline: none; }\nfaq .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/main/pages/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/pages/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_pages_faq_faq_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/faq/faq.service */ "./src/app/main/pages/faq/faq.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FaqService} _faqService
     */
    function FaqComponent(_faqService) {
        this._faqService = _faqService;
        // Set the defaults
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.step = 0;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._faqService.onFaqsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (response) {
            _this.faqs = response;
            _this.faqsFiltered = response;
        });
        this.searchInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this.faqsFiltered = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(_this.faqs, searchText);
        });
    };
    /**
     * On destroy
     */
    FaqComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Set step
     *
     * @param {number} index
     */
    FaqComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    /**
     * Next step
     */
    FaqComponent.prototype.nextStep = function () {
        this.step++;
    };
    /**
     * Previous step
     */
    FaqComponent.prototype.prevStep = function () {
        this.step--;
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/main/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/main/pages/faq/faq.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_pages_faq_faq_service__WEBPACK_IMPORTED_MODULE_5__["FaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/faq/faq.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/pages/faq/faq.module.ts ***!
  \**********************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_faq_faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/faq/faq.service */ "./src/app/main/pages/faq/faq.service.ts");
/* harmony import */ var app_main_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/faq/faq.component */ "./src/app/main/pages/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'faq',
        component: app_main_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
        resolve: {
            faq: app_main_pages_faq_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]
        }
    }
];
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_faq_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]
            ]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ }),

/***/ "./src/app/main/pages/faq/faq.service.ts":
/*!***********************************************!*\
  !*** ./src/app/main/pages/faq/faq.service.ts ***!
  \***********************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var FaqService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function FaqService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onFaqsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    FaqService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFaqs()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get faqs
     */
    FaqService.prototype.getFaqs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/faq')
                .subscribe(function (response) {
                _this.faqs = response;
                _this.onFaqsChanged.next(_this.faqs);
                resolve(_this.faqs);
            }, reject);
        });
    };
    FaqService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/main/pages/invoices/compact/compact.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/invoices/compact/compact.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\">\n\n    <div class=\"invoice-container\">\n\n        <!-- INVOICE -->\n        <div class=\"card\">\n\n            <div class=\"header\">\n                <div class=\"invoice-date\">{{invoice.date}}</div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                    <div class=\"client\">\n                        <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"title\">INVOICE</span>\n                            <span class=\"number\">{{invoice.number}}</span>\n                        </div>\n\n                        <div class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"title\">DUE DATE</span>\n                            <span class=\"date\">{{invoice.dueDate}}</span>\n                        </div>\n\n                        <div class=\"info\">\n                            <div class=\"title\">{{invoice.client.title}}</div>\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">{{invoice.client.address}}</div>\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">{{invoice.client.phone}}</div>\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">{{invoice.client.email}}</div>\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">{{invoice.client.website}}</div>\n                        </div>\n                    </div>\n\n                    <div class=\"issuer accent\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"logo\">\n                            <img src=\"assets/images/logos/fuse.svg\">\n                        </div>\n\n                        <div class=\"info\">\n                            <div class=\"title\">{{invoice.from.title}}</div>\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">{{invoice.from.address}}</div>\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">{{invoice.from.phone}}</div>\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">{{invoice.from.email}}</div>\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">{{invoice.from.website}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"content\">\n                <table class=\"simple invoice-table\">\n                    <thead>\n                        <tr>\n                            <th>SERVICE</th>\n                            <th>UNIT</th>\n                            <th class=\"text-right\">UNIT PRICE</th>\n                            <th class=\"text-right\">QUANTITY</th>\n                            <th class=\"text-right\">TOTAL</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">\n                                    {{service.title}}\n                                </div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                        <!-- Double the invoice data for demo purposes -->\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">\n                                    {{service.title}}\n                                </div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <table class=\"simple invoice-table-footer\">\n                    <tbody>\n                        <tr class=\"subtotal\">\n                            <td>SUBTOTAL</td>\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"tax\">\n                            <td>TAX</td>\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"discount\">\n                            <td>DISCOUNT</td>\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>TOTAL</td>\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"footer\">\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div class=\"logo\">\n                        <img src=\"assets/images/logos/fuse.svg\">\n                    </div>\n                    <div class=\"small-note\">\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\n                        tincidunt lacinia et eget eros.\n                    </div>\n                </div>\n            </div>\n\n            <!--\n\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\n            these elements will be printed on a new page. The following two elements must be used before and after the\n            page content that you want to show as a new page. So, you have to wrap your content with them.\n\n            Elements:\n            ---------\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n            <!--\n\n            Example:\n            --------\n\n            Initial page content!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the second page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the third page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n        </div>\n        <!-- / INVOICE -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/invoices/compact/compact.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/invoices/compact/compact.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ninvoice-compact {\n  /* PRINT STYLES */ }\ninvoice-compact #invoice.compact {\n    padding: 0; }\ninvoice-compact #invoice.compact .invoice-container {\n      padding: 64px; }\ninvoice-compact #invoice.compact .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 64px 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\ninvoice-compact #invoice.compact .invoice-container .card .header .invoice-date {\n          font-size: 14px;\n          color: rgba(0, 0, 0, 0.54);\n          margin-bottom: 32px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .invoice-number {\n          font-size: 18px;\n          padding-bottom: 2px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n            color: rgba(0, 0, 0, 0.54); }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n            color: rgba(0, 0, 0, 0.87);\n            padding-left: 6px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .due-date {\n          font-size: 18px;\n          padding-bottom: 16px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .due-date .title {\n            color: rgba(0, 0, 0, 0.54); }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .due-date .date {\n            color: rgba(0, 0, 0, 0.87);\n            padding-left: 6px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .client .info {\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 22px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .issuer {\n          margin-right: -88px;\n          padding-right: 66px; }\ninvoice-compact #invoice.compact .invoice-container .card .header .issuer .logo {\n            width: 96px;\n            padding: 0 8px;\n            border-right: 1px solid rgba(255, 255, 255, 0.7); }\ninvoice-compact #invoice.compact .invoice-container .card .header .issuer .info {\n            padding: 16px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table {\n          margin-top: 64px;\n          font-size: 15px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n            color: rgba(0, 0, 0, 0.87);\n            border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table tbody tr td {\n            color: rgba(0, 0, 0, 0.87);\n            border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table .title {\n            font-size: 16px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 72px 0; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 16px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 4px 8px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\ninvoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 24px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\ninvoice-compact #invoice.compact .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\ninvoice-compact #invoice.compact .invoice-container .card .footer .logo, invoice-compact #invoice.compact .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\ninvoice-compact #invoice.compact .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\ninvoice-compact #invoice.compact .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    invoice-compact {\n      /* Invoice Specific Styles */ }\n      invoice-compact #invoice.compact {\n        background: white; }\n        invoice-compact #invoice.compact .invoice-container {\n          padding: 0; }\n          invoice-compact #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            invoice-compact #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            invoice-compact #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            invoice-compact #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                invoice-compact #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            invoice-compact #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            invoice-compact #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            invoice-compact #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/pages/invoices/compact/compact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/pages/invoices/compact/compact.component.ts ***!
  \******************************************************************/
/*! exports provided: InvoiceCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCompactComponent", function() { return InvoiceCompactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/invoices/invoice.service */ "./src/app/main/pages/invoices/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceCompactComponent = /** @class */ (function () {
    function InvoiceCompactComponent(_invoiceService) {
        this._invoiceService = _invoiceService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    InvoiceCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._invoiceService.invoiceOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    };
    /**
     * On destroy
     */
    InvoiceCompactComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    InvoiceCompactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'invoice-compact',
            template: __webpack_require__(/*! ./compact.component.html */ "./src/app/main/pages/invoices/compact/compact.component.html"),
            styles: [__webpack_require__(/*! ./compact.component.scss */ "./src/app/main/pages/invoices/compact/compact.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]])
    ], InvoiceCompactComponent);
    return InvoiceCompactComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/invoices/compact/compact.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/pages/invoices/compact/compact.module.ts ***!
  \***************************************************************/
/*! exports provided: InvoiceCompactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCompactModule", function() { return InvoiceCompactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/invoices/invoice.service */ "./src/app/main/pages/invoices/invoice.service.ts");
/* harmony import */ var app_main_pages_invoices_compact_compact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/invoices/compact/compact.component */ "./src/app/main/pages/invoices/compact/compact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/compact',
        component: app_main_pages_invoices_compact_compact_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceCompactComponent"],
        resolve: {
            search: app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
        }
    }
];
var InvoiceCompactModule = /** @class */ (function () {
    function InvoiceCompactModule() {
    }
    InvoiceCompactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_invoices_compact_compact_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceCompactComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
            ]
        })
    ], InvoiceCompactModule);
    return InvoiceCompactModule;
}());



/***/ }),

/***/ "./src/app/main/pages/invoices/invoice.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/pages/invoices/invoice.service.ts ***!
  \********************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var InvoiceService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function InvoiceService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.invoiceOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    InvoiceService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getInvoice()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get invoice
     */
    InvoiceService.prototype.getInvoice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/invoice')
                .subscribe(function (timeline) {
                _this.invoice = timeline;
                _this.invoiceOnChanged.next(_this.invoice);
                resolve(_this.invoice);
            }, reject);
        });
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/main/pages/invoices/modern/modern.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main/pages/invoices/modern/modern.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"modern page-layout blank\" fxLayout=\"row\">\n\n    <div class=\"invoice-container\">\n\n        <!-- INVOICE -->\n        <div class=\"card\">\n\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                <div class=\"ids\" fxLayout=\"column\">\n\n                    <div fxLayout=\"row\" class=\"seller\" fxLayoutAlign=\"start center\">\n\n                        <div class=\"logo\">\n                            <img src=\"assets/images/logos/fuse.svg\">\n                        </div>\n\n                        <div class=\"divider\"></div>\n\n                        <div class=\"detail\">\n                            <div class=\"title\">{{invoice.from.title}}</div>\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">\n                                {{invoice.from.address}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">\n                                <span>Phone:</span>\n                                {{invoice.from.phone}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">\n                                <span>Email:</span>\n                                {{invoice.from.email}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">\n                                <span>Web:</span>\n                                {{invoice.from.website}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"row\" class=\"client\" fxLayoutAlign=\"start center\">\n                        <div class=\"label\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                            <div>CLIENT</div>\n                        </div>\n\n                        <div class=\"divider\"></div>\n\n                        <div class=\"detail\">\n                            <div class=\"title\">{{invoice.client.title}}</div>\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">\n                                {{invoice.client.address}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">\n                                <span>Phone:</span>\n                                {{invoice.client.phone}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">\n                                <span>Email:</span>\n                                {{invoice.client.email}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">\n                                <span>Web:</span>\n                                {{invoice.client.website}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <table class=\"summary\">\n                    <tr class=\"code\">\n                        <td class=\"label\">INVOICE</td>\n                        <td class=\"value\">{{invoice.number}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">INVOICE DATE</td>\n                        <td class=\"value\">{{invoice.date}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">DUE DATE</td>\n                        <td class=\"value\">{{invoice.dueDate}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">TOTAL DUE</td>\n                        <td class=\"value\">{{invoice.total | currency:'USD':'symbol'}}</td>\n                    </tr>\n                </table>\n            </div>\n\n            <div class=\"content\">\n                <table class=\"simple invoice-table\">\n                    <thead>\n                        <tr>\n                            <th>SERVICE</th>\n                            <th>UNIT</th>\n                            <th class=\"text-right\">UNIT PRICE</th>\n                            <th class=\"text-right\">QUANTITY</th>\n                            <th class=\"text-right\">TOTAL</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">{{service.title}}</div>\n                                <div class=\"detail\">{{service.detail}}</div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <table class=\"simple invoice-table-footer\">\n                    <tbody>\n                        <tr class=\"subtotal\">\n                            <td>SUBTOTAL</td>\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"tax\">\n                            <td>TAX</td>\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"discount\">\n                            <td>DISCOUNT</td>\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>TOTAL</td>\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"footer\">\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div class=\"logo\">\n                        <img src=\"assets/images/logos/fuse.svg\">\n                    </div>\n                    <div class=\"small-note\">\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\n                        tincidunt lacinia et eget eros.\n                    </div>\n                </div>\n            </div>\n\n            <!--\n\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\n            these elements will be printed on a new page. The following two elements must be used before and after the\n            page content that you want to show as a new page. So, you have to wrap your content with them.\n\n            Elements:\n            ---------\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n            <!--\n\n            Example:\n            --------\n\n            Initial page content!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the second page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the third page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n        </div>\n        <!-- / INVOICE -->\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/invoices/modern/modern.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main/pages/invoices/modern/modern.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ninvoice-modern {\n  /* PRINT STYLES */ }\ninvoice-modern #invoice.modern {\n    padding: 0; }\ninvoice-modern #invoice.modern .invoice-container {\n      padding: 64px; }\ninvoice-modern #invoice.modern .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids {\n          line-height: 22px;\n          color: rgba(0, 0, 0, 0.54); }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids .detail {\n            width: 160px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids .seller {\n            margin-bottom: 80px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids .seller .logo {\n              width: 156px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids .client .label {\n            width: 156px;\n            font-size: 24px;\n            font-weight: 300; }\ninvoice-modern #invoice.modern .invoice-container .card .header .ids .divider {\n            width: 1px;\n            margin: 0 48px;\n            background-color: rgba(0, 0, 0, 0.12);\n            height: 144px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .summary {\n          font-size: 15px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .summary .label {\n            color: rgba(0, 0, 0, 0.54);\n            text-align: right;\n            padding-right: 16px; }\ninvoice-modern #invoice.modern .invoice-container .card .header .summary .value {\n            color: black; }\ninvoice-modern #invoice.modern .invoice-container .card .header .summary .code {\n            font-size: 35px;\n            font-weight: 300; }\ninvoice-modern #invoice.modern .invoice-container .card .header .summary .code td {\n              padding-bottom: 32px; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table {\n          margin-top: 96px;\n          font-size: 15px;\n          color: rgba(0, 0, 0, 0.87); }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table thead tr th {\n            color: rgba(0, 0, 0, 0.87);\n            border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table tbody tr td {\n            color: rgba(0, 0, 0, 0.87);\n            border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table .title {\n            font-size: 17px; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 96px 0; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 17px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 8px 8px; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\ninvoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 32px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\ninvoice-modern #invoice.modern .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\ninvoice-modern #invoice.modern .invoice-container .card .footer .logo, invoice-modern #invoice.modern .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\ninvoice-modern #invoice.modern .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\ninvoice-modern #invoice.modern .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    invoice-modern {\n      /* Invoice Specific Styles */ }\n      invoice-modern #invoice.modern {\n        background: white; }\n        invoice-modern #invoice.modern .invoice-container {\n          padding: 0; }\n          invoice-modern #invoice.modern .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            invoice-modern #invoice.modern .invoice-container .card .header .ids .detail {\n              width: 120pt; }\n            invoice-modern #invoice.modern .invoice-container .card .header .ids .seller {\n              margin-bottom: 8pt; }\n              invoice-modern #invoice.modern .invoice-container .card .header .ids .seller .logo {\n                width: 60pt; }\n            invoice-modern #invoice.modern .invoice-container .card .header .ids .client .label {\n              width: 60pt;\n              font-size: 16pt; }\n            invoice-modern #invoice.modern .invoice-container .card .header .ids .divider {\n              margin: 0 12pt;\n              height: 100pt; }\n            invoice-modern #invoice.modern .invoice-container .card .header .summary {\n              font-size: 10pt; }\n              invoice-modern #invoice.modern .invoice-container .card .header .summary .code {\n                font-size: 18pt; }\n                invoice-modern #invoice.modern .invoice-container .card .header .summary .code td {\n                  padding-bottom: 10pt; }\n            invoice-modern #invoice.modern .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                invoice-modern #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            invoice-modern #invoice.modern .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            invoice-modern #invoice.modern .invoice-container .card .footer .logo {\n              font-size: 14pt;\n              margin-right: 8pt; }\n            invoice-modern #invoice.modern .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/pages/invoices/modern/modern.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/pages/invoices/modern/modern.component.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceModernComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModernComponent", function() { return InvoiceModernComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/invoices/invoice.service */ "./src/app/main/pages/invoices/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceModernComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {InvoiceService} _invoiceService
     */
    function InvoiceModernComponent(_invoiceService) {
        this._invoiceService = _invoiceService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    InvoiceModernComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._invoiceService.invoiceOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    };
    /**
     * On destroy
     */
    InvoiceModernComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    InvoiceModernComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'invoice-modern',
            template: __webpack_require__(/*! ./modern.component.html */ "./src/app/main/pages/invoices/modern/modern.component.html"),
            styles: [__webpack_require__(/*! ./modern.component.scss */ "./src/app/main/pages/invoices/modern/modern.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]])
    ], InvoiceModernComponent);
    return InvoiceModernComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/invoices/modern/modern.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/invoices/modern/modern.module.ts ***!
  \*************************************************************/
/*! exports provided: InvoiceModernModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModernModule", function() { return InvoiceModernModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/invoices/invoice.service */ "./src/app/main/pages/invoices/invoice.service.ts");
/* harmony import */ var app_main_pages_invoices_modern_modern_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/invoices/modern/modern.component */ "./src/app/main/pages/invoices/modern/modern.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/modern',
        component: app_main_pages_invoices_modern_modern_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceModernComponent"],
        resolve: {
            search: app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
        }
    }
];
var InvoiceModernModule = /** @class */ (function () {
    function InvoiceModernModule() {
    }
    InvoiceModernModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_invoices_modern_modern_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceModernComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_invoices_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
            ]
        })
    ], InvoiceModernModule);
    return InvoiceModernModule;
}());



/***/ }),

/***/ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/dialogs/article/article.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row>\n            <span class=\"title dialog-title\">{{_data.article.title}}</span>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n        <div [innerHTML]=\"_data.article.content\"></div>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button mat-button (click)=\"matDialogRef.close()\" class=\"mat-accent\" aria-label=\"Close\">\n            CLOSE\n        </button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/dialogs/article/article.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.knowledgebase-article-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .knowledgebase-article-dialog {\n      width: 100%; } }\n.knowledgebase-article-dialog .mat-dialog-container {\n    padding: 0; }\n.knowledgebase-article-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/dialogs/article/article.component.ts ***!
  \********************************************************************************/
/*! exports provided: KnowledgeBaseArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseArticleComponent", function() { return KnowledgeBaseArticleComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var KnowledgeBaseArticleComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<KnowledgeBaseArticleComponent>} matDialogRef
     * @param _data
     */
    function KnowledgeBaseArticleComponent(matDialogRef, _data) {
        this.matDialogRef = matDialogRef;
        this._data = _data;
    }
    KnowledgeBaseArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'knowledge-base-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], KnowledgeBaseArticleComponent);
    return KnowledgeBaseArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/knowledge-base/knowledge-base.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/knowledge-base.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"knowledgebase\" class=\"page-layout simple full-width\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text mb-32\">\n            <h1>How can we help?</h1>\n            <h3>Welcome to our knowledge base</h3>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n\n            <mat-nav-list class=\"articles-list mat-elevation-z4\" *ngFor=\"let category of knowledgeBase\">\n\n                <h3 mat-subheader>{{category.title}}</h3>\n\n                <a mat-list-item *ngFor=\"let article of category.featuredArticles\"\n                   (click)=\"readArticle(article)\">\n                    <mat-icon class=\"secondary-text mr-8\">note</mat-icon>\n                    {{ article.title }}\n                </a>\n\n                <a mat-list-item class=\"see-all-link accent-fg\" [routerLink]=\"category.path\">\n                    See all articles ({{category.articlesCount}})\n                </a>\n\n            </mat-nav-list>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/knowledge-base/knowledge-base.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/knowledge-base.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#knowledgebase .header {\n  flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media screen and (max-width: 599px) {\n    #knowledgebase .header {\n      height: 240px;\n      padding: 16px; } }\n#knowledgebase .header .hero-text h1 {\n    color: white;\n    font-size: 48px;\n    font-weight: 400;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h1 {\n        font-size: 24px; } }\n#knowledgebase .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.075em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h3 {\n        font-size: 14px; } }\n#knowledgebase .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n#knowledgebase .content .articles-list {\n    width: 400px;\n    min-width: 400px;\n    margin: 16px;\n    padding: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .content .articles-list {\n        min-width: 300px;\n        margin: 16px 0; } }\n#knowledgebase .content .articles-list .mat-list-item {\n      text-decoration: none !important; }\n#knowledgebase .content .articles-list .see-all-link {\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/main/pages/knowledge-base/knowledge-base.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/knowledge-base.component.ts ***!
  \***********************************************************************/
/*! exports provided: KnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseComponent", function() { return KnowledgeBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_pages_knowledge_base_knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/knowledge-base/knowledge-base.service */ "./src/app/main/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var app_main_pages_knowledge_base_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/knowledge-base/dialogs/article/article.component */ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KnowledgeBaseComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {KnowledgeBaseService} _knowledgeBaseService
     * @param {MatDialog} _matDialog
     */
    function KnowledgeBaseComponent(_knowledgeBaseService, _matDialog) {
        this._knowledgeBaseService = _knowledgeBaseService;
        this._matDialog = _matDialog;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    KnowledgeBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeBaseService.onKnowledgeBaseChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (response) {
            _this.knowledgeBase = response;
        });
    };
    /**
     * On destroy
     */
    KnowledgeBaseComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Read article
     *
     * @param article
     */
    KnowledgeBaseComponent.prototype.readArticle = function (article) {
        this._matDialog.open(app_main_pages_knowledge_base_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_5__["KnowledgeBaseArticleComponent"], {
            panelClass: 'knowledgebase-article-dialog',
            data: { article: article }
        });
    };
    KnowledgeBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'knowledge-base',
            template: __webpack_require__(/*! ./knowledge-base.component.html */ "./src/app/main/pages/knowledge-base/knowledge-base.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/main/pages/knowledge-base/knowledge-base.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_pages_knowledge_base_knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__["KnowledgeBaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], KnowledgeBaseComponent);
    return KnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/knowledge-base/knowledge-base.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/knowledge-base.module.ts ***!
  \********************************************************************/
/*! exports provided: KnowledgeBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseModule", function() { return KnowledgeBaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_knowledge_base_knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/knowledge-base/knowledge-base.service */ "./src/app/main/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var app_main_pages_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/knowledge-base/knowledge-base.component */ "./src/app/main/pages/knowledge-base/knowledge-base.component.ts");
/* harmony import */ var app_main_pages_knowledge_base_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/knowledge-base/dialogs/article/article.component */ "./src/app/main/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'knowledge-base',
        component: app_main_pages_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__["KnowledgeBaseComponent"],
        resolve: {
            knowledgeBase: app_main_pages_knowledge_base_knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__["KnowledgeBaseService"]
        }
    }
];
var KnowledgeBaseModule = /** @class */ (function () {
    function KnowledgeBaseModule() {
    }
    KnowledgeBaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__["KnowledgeBaseComponent"],
                app_main_pages_knowledge_base_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__["KnowledgeBaseArticleComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_knowledge_base_knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__["KnowledgeBaseService"]
            ],
            entryComponents: [
                app_main_pages_knowledge_base_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__["KnowledgeBaseArticleComponent"]
            ]
        })
    ], KnowledgeBaseModule);
    return KnowledgeBaseModule;
}());



/***/ }),

/***/ "./src/app/main/pages/knowledge-base/knowledge-base.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/pages/knowledge-base/knowledge-base.service.ts ***!
  \*********************************************************************/
/*! exports provided: KnowledgeBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseService", function() { return KnowledgeBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var KnowledgeBaseService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function KnowledgeBaseService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onKnowledgeBaseChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    KnowledgeBaseService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getKnowledgeBase()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get knowledge base
     */
    KnowledgeBaseService.prototype.getKnowledgeBase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/knowledge-base')
                .subscribe(function (response) {
                _this.knowledgeBase = response;
                _this.onKnowledgeBaseChanged.next(_this.knowledgeBase);
                resolve(_this.knowledgeBase);
            }, reject);
        });
    };
    KnowledgeBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KnowledgeBaseService);
    return KnowledgeBaseService;
}());



/***/ }),

/***/ "./src/app/main/pages/maintenance/maintenance.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/maintenance/maintenance.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"maintenance\" fxLayout=\"column\">\n\n    <div id=\"maintenance-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"maintenance-form\" [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/fuse.svg\">\n            </div>\n\n            <div class=\"title\">Closed for scheduled maintenance!</div>\n\n            <div class=\"subtitle\">\n                We're sorry for the inconvenience. <br> Please check back later.\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/maintenance/maintenance.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/maintenance/maintenance.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmaintenance #maintenance {\n  width: 100%;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\nmaintenance #maintenance #maintenance-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      maintenance #maintenance #maintenance-form-wrapper {\n        padding: 16px; } }\nmaintenance #maintenance #maintenance-form-wrapper #maintenance-form {\n      max-width: 384px;\n      padding: 48px;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        maintenance #maintenance #maintenance-form-wrapper #maintenance-form {\n          padding: 24px;\n          width: 100%; } }\nmaintenance #maintenance #maintenance-form-wrapper #maintenance-form .logo {\n        width: 128px;\n        margin: 32px auto; }\nmaintenance #maintenance #maintenance-form-wrapper #maintenance-form .title {\n        font-size: 17px;\n        margin-top: 16px; }\nmaintenance #maintenance #maintenance-form-wrapper #maintenance-form .subtitle {\n        margin: 16px 0;\n        max-width: 300px;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/pages/maintenance/maintenance.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/maintenance/maintenance.component.ts ***!
  \*****************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
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



var MaintenanceComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    function MaintenanceComponent(_fuseConfigService) {
        this._fuseConfigService = _fuseConfigService;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/main/pages/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.scss */ "./src/app/main/pages/maintenance/maintenance.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/maintenance/maintenence.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/pages/maintenance/maintenence.module.ts ***!
  \**************************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/maintenance/maintenance.component */ "./src/app/main/pages/maintenance/maintenance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'maintenance',
        component: app_main_pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceComponent"]
    }
];
var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/main/pages/pages.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/pages/pages.module.ts ***!
  \********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_main_pages_authentication_login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/pages/authentication/login/login.module */ "./src/app/main/pages/authentication/login/login.module.ts");
/* harmony import */ var app_main_pages_authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/pages/authentication/login-2/login-2.module */ "./src/app/main/pages/authentication/login-2/login-2.module.ts");
/* harmony import */ var app_main_pages_authentication_register_register_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/authentication/register/register.module */ "./src/app/main/pages/authentication/register/register.module.ts");
/* harmony import */ var app_main_pages_authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/authentication/register-2/register-2.module */ "./src/app/main/pages/authentication/register-2/register-2.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password/forgot-password.module */ "./src/app/main/pages/authentication/forgot-password/forgot-password.module.ts");
/* harmony import */ var app_main_pages_authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/authentication/forgot-password-2/forgot-password-2.module */ "./src/app/main/pages/authentication/forgot-password-2/forgot-password-2.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/pages/authentication/reset-password/reset-password.module */ "./src/app/main/pages/authentication/reset-password/reset-password.module.ts");
/* harmony import */ var app_main_pages_authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/pages/authentication/reset-password-2/reset-password-2.module */ "./src/app/main/pages/authentication/reset-password-2/reset-password-2.module.ts");
/* harmony import */ var app_main_pages_authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/pages/authentication/lock/lock.module */ "./src/app/main/pages/authentication/lock/lock.module.ts");
/* harmony import */ var app_main_pages_authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/pages/authentication/mail-confirm/mail-confirm.module */ "./src/app/main/pages/authentication/mail-confirm/mail-confirm.module.ts");
/* harmony import */ var app_main_pages_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/pages/coming-soon/coming-soon.module */ "./src/app/main/pages/coming-soon/coming-soon.module.ts");
/* harmony import */ var app_main_pages_errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/pages/errors/404/error-404.module */ "./src/app/main/pages/errors/404/error-404.module.ts");
/* harmony import */ var app_main_pages_errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/pages/errors/500/error-500.module */ "./src/app/main/pages/errors/500/error-500.module.ts");
/* harmony import */ var app_main_pages_invoices_modern_modern_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/pages/invoices/modern/modern.module */ "./src/app/main/pages/invoices/modern/modern.module.ts");
/* harmony import */ var app_main_pages_invoices_compact_compact_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/pages/invoices/compact/compact.module */ "./src/app/main/pages/invoices/compact/compact.module.ts");
/* harmony import */ var app_main_pages_maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/pages/maintenance/maintenence.module */ "./src/app/main/pages/maintenance/maintenence.module.ts");
/* harmony import */ var app_main_pages_pricing_pricing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/main/pages/pricing/pricing.module */ "./src/app/main/pages/pricing/pricing.module.ts");
/* harmony import */ var app_main_pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/main/pages/profile/profile.module */ "./src/app/main/pages/profile/profile.module.ts");
/* harmony import */ var app_main_pages_search_search_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/main/pages/search/search.module */ "./src/app/main/pages/search/search.module.ts");
/* harmony import */ var app_main_pages_faq_faq_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/main/pages/faq/faq.module */ "./src/app/main/pages/faq/faq.module.ts");
/* harmony import */ var app_main_pages_knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/main/pages/knowledge-base/knowledge-base.module */ "./src/app/main/pages/knowledge-base/knowledge-base.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // Authentication
                app_main_pages_authentication_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"],
                app_main_pages_authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_2__["Login2Module"],
                app_main_pages_authentication_register_register_module__WEBPACK_IMPORTED_MODULE_3__["RegisterModule"],
                app_main_pages_authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_4__["Register2Module"],
                app_main_pages_authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordModule"],
                app_main_pages_authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_6__["ForgotPassword2Module"],
                app_main_pages_authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordModule"],
                app_main_pages_authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_8__["ResetPassword2Module"],
                app_main_pages_authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_9__["LockModule"],
                app_main_pages_authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_10__["MailConfirmModule"],
                // Coming-soon
                app_main_pages_coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_11__["ComingSoonModule"],
                // Errors
                app_main_pages_errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_12__["Error404Module"],
                app_main_pages_errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_13__["Error500Module"],
                // Invoices
                app_main_pages_invoices_modern_modern_module__WEBPACK_IMPORTED_MODULE_14__["InvoiceModernModule"],
                app_main_pages_invoices_compact_compact_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceCompactModule"],
                // Maintenance
                app_main_pages_maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_16__["MaintenanceModule"],
                // Pricing
                app_main_pages_pricing_pricing_module__WEBPACK_IMPORTED_MODULE_17__["PricingModule"],
                // Profile
                app_main_pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_18__["ProfileModule"],
                // Search
                app_main_pages_search_search_module__WEBPACK_IMPORTED_MODULE_19__["SearchModule"],
                // Faq
                app_main_pages_faq_faq_module__WEBPACK_IMPORTED_MODULE_20__["FaqModule"],
                // Knowledge base
                app_main_pages_knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_21__["KnowledgeBaseModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/main/pages/pricing/pricing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/pages/pricing/pricing.module.ts ***!
  \******************************************************/
/*! exports provided: PricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_pricing_style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/pricing/style-1/style-1.component */ "./src/app/main/pages/pricing/style-1/style-1.component.ts");
/* harmony import */ var app_main_pages_pricing_style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/pricing/style-2/style-2.component */ "./src/app/main/pages/pricing/style-2/style-2.component.ts");
/* harmony import */ var app_main_pages_pricing_style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/pricing/style-3/style-3.component */ "./src/app/main/pages/pricing/style-3/style-3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'pricing/style-1',
        component: app_main_pages_pricing_style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__["PricingStyle1Component"]
    },
    {
        path: 'pricing/style-2',
        component: app_main_pages_pricing_style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__["PricingStyle2Component"]
    },
    {
        path: 'pricing/style-3',
        component: app_main_pages_pricing_style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__["PricingStyle3Component"]
    }
];
var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_pricing_style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__["PricingStyle1Component"],
                app_main_pages_pricing_style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__["PricingStyle2Component"],
                app_main_pages_pricing_style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__["PricingStyle3Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], PricingModule);
    return PricingModule;
}());



/***/ }),

/***/ "./src/app/main/pages/pricing/style-1/style-1.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-1/style-1.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\">\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type primary\">\n                    <span>BASIC</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">4</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">100</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n            <div class=\"price-table style-1 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"package-type primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>STANDARD</span>\n                    <span class=\"sale mat-accent-color mat-hue-1\">Save 15%</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">8</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">200</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type primary\" fxLayout=\"row\">\n                    <span>ADVANCED</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">12</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">500</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-1/style-1.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-1/style-1.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\npricing-style-1 #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    pricing-style-1 #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\npricing-style-1 #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      pricing-style-1 #price-tables .header .hero-text {\n        margin: 64px 24px; } }\npricing-style-1 #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        pricing-style-1 #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\npricing-style-1 #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        pricing-style-1 #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\npricing-style-1 #price-tables .price-tables {\n  flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    pricing-style-1 #price-tables .price-tables {\n      margin-top: -128px; } }\npricing-style-1 #price-tables .price-tables .price-table {\n    margin: 12px; }\npricing-style-1 #price-tables .faq {\n  flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\npricing-style-1 #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\npricing-style-1 #price-tables .faq .item {\n    padding: 24px; }\npricing-style-1 #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\npricing-style-1 #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5; }\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-1/style-1.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-1/style-1.component.ts ***!
  \*****************************************************************/
/*! exports provided: PricingStyle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingStyle1Component", function() { return PricingStyle1Component; });
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

var PricingStyle1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function PricingStyle1Component() {
    }
    PricingStyle1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pricing-style-1',
            template: __webpack_require__(/*! ./style-1.component.html */ "./src/app/main/pages/pricing/style-1/style-1.component.html"),
            styles: [__webpack_require__(/*! ./style-1.component.scss */ "./src/app/main/pages/pricing/style-1/style-1.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PricingStyle1Component);
    return PricingStyle1Component;
}());



/***/ }),

/***/ "./src/app/main/pages/pricing/style-2/style-2.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-2/style-2.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\">\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-accent-fg\">SILVER PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">99</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">100</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n            <div class=\"price-table style-2 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"badge warn\">BEST VALUE</div>\n\n                <div class=\"package-type mat-accent-fg\">GOLD PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">299</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">200</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-accent-fg\">PLATINUM PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">499</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">500</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-2/style-2.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-2/style-2.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\npricing-style-2 #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    pricing-style-2 #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\npricing-style-2 #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      pricing-style-2 #price-tables .header .hero-text {\n        margin: 64px 24px; } }\npricing-style-2 #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        pricing-style-2 #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\npricing-style-2 #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        pricing-style-2 #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\npricing-style-2 #price-tables .price-tables {\n  flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    pricing-style-2 #price-tables .price-tables {\n      margin-top: -128px; } }\npricing-style-2 #price-tables .price-tables .price-table {\n    margin: 12px; }\npricing-style-2 #price-tables .faq {\n  flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\npricing-style-2 #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\npricing-style-2 #price-tables .faq .item {\n    padding: 24px; }\npricing-style-2 #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\npricing-style-2 #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-2/style-2.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-2/style-2.component.ts ***!
  \*****************************************************************/
/*! exports provided: PricingStyle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingStyle2Component", function() { return PricingStyle2Component; });
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

var PricingStyle2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function PricingStyle2Component() {
    }
    PricingStyle2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pricing-style-2',
            template: __webpack_require__(/*! ./style-2.component.html */ "./src/app/main/pages/pricing/style-2/style-2.component.html"),
            styles: [__webpack_require__(/*! ./style-2.component.scss */ "./src/app/main/pages/pricing/style-2/style-2.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PricingStyle2Component);
    return PricingStyle2Component;
}());



/***/ }),

/***/ "./src/app/main/pages/pricing/style-3/style-3.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-3/style-3.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\">\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Starter</div>\n                    <div class=\"subtitle\">For small teams</div>\n                </div>\n\n                <div class=\"price primary-300\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">29</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">24 / 7 Free support</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\n\n                <div class=\"note\">7 day free trial to start</div>\n\n            </div>\n\n            <div class=\"price-table style-3 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Pro</div>\n                    <div class=\"subtitle\">For larger teams</div>\n                </div>\n\n                <div class=\"price primary\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">59</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">24 / 7 Free support</div>\n                    <div class=\"term mat-warn-fg\">Advanced reporting</div>\n                    <div class=\"term mat-warn-fg\">Customizable interface</div>\n                    <div class=\"term mat-warn-fg\">CRM Integration</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\n\n                <div class=\"note\">30 day free trial to start</div>\n\n            </div>\n\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Enterprise</div>\n                    <div class=\"subtitle\">For big teams</div>\n                </div>\n\n                <div class=\"price primary-300\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">99</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">For full feature list, call us</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">CALL US</button>\n\n                <div class=\"note\">90 day free trial to start</div>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-3/style-3.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-3/style-3.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\npricing-style-3 #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    pricing-style-3 #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\npricing-style-3 #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      pricing-style-3 #price-tables .header .hero-text {\n        margin: 64px 24px; } }\npricing-style-3 #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        pricing-style-3 #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\npricing-style-3 #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        pricing-style-3 #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\npricing-style-3 #price-tables .price-tables {\n  flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    pricing-style-3 #price-tables .price-tables {\n      margin-top: -128px; } }\npricing-style-3 #price-tables .price-tables .price-table {\n    margin: 12px; }\npricing-style-3 #price-tables .faq {\n  flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\npricing-style-3 #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\npricing-style-3 #price-tables .faq .item {\n    padding: 24px; }\npricing-style-3 #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\npricing-style-3 #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/pages/pricing/style-3/style-3.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/pricing/style-3/style-3.component.ts ***!
  \*****************************************************************/
/*! exports provided: PricingStyle3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingStyle3Component", function() { return PricingStyle3Component; });
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

var PricingStyle3Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function PricingStyle3Component() {
    }
    PricingStyle3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pricing-style-3',
            template: __webpack_require__(/*! ./style-3.component.html */ "./src/app/main/pages/pricing/style-3/style-3.component.html"),
            styles: [__webpack_require__(/*! ./style-3.component.scss */ "./src/app/main/pages/pricing/style-3/style-3.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PricingStyle3Component);
    return PricingStyle3Component;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" class=\"page-layout simple tabbed\">\n\n    <!-- HEADER -->\n    <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n         fxLayoutAlign.gt-sm=\"space-between end\">\n\n        <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n             fxLayoutAlign.gt-sm=\"start center\">\n            <img class=\"profile-image avatar huge\" src=\"assets/images/avatars/katherine.jpg\"\n                 [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n            <div class=\"name\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Katherine Wilson\n            </div>\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\n            <button mat-raised-button color=\"accent\" aria-label=\"Follow\">Follow</button>\n            <button mat-raised-button color=\"primary\" aria-label=\"Send Message\">Send Message</button>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Timeline\">\n                <profile-timeline></profile-timeline>\n            </mat-tab>\n\n            <mat-tab label=\"About\">\n                <profile-about></profile-about>\n            </mat-tab>\n\n            <mat-tab label=\"Photos & Videos\">\n                <profile-photos-videos></profile-photos-videos>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 320px;\n  min-height: 320px;\n  max-height: 320px;\n  background: url(\"https://nhova2.github.io/gateway/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat 0 45%;\n  background-size: cover; }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/main/pages/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/pages/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/pages/profile/profile.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/pages/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/profile/profile.service */ "./src/app/main/pages/profile/profile.service.ts");
/* harmony import */ var app_main_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/profile/profile.component */ "./src/app/main/pages/profile/profile.component.ts");
/* harmony import */ var app_main_pages_profile_tabs_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/profile/tabs/timeline/timeline.component */ "./src/app/main/pages/profile/tabs/timeline/timeline.component.ts");
/* harmony import */ var app_main_pages_profile_tabs_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/pages/profile/tabs/about/about.component */ "./src/app/main/pages/profile/tabs/about/about.component.ts");
/* harmony import */ var app_main_pages_profile_tabs_photos_videos_photos_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/pages/profile/tabs/photos-videos/photos-videos.component */ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'profile',
        component: app_main_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        resolve: {
            profile: app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                app_main_pages_profile_tabs_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["ProfileTimelineComponent"],
                app_main_pages_profile_tabs_about_about_component__WEBPACK_IMPORTED_MODULE_7__["ProfileAboutComponent"],
                app_main_pages_profile_tabs_photos_videos_photos_videos_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePhotosVideosComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/profile.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/pages/profile/profile.service.ts ***!
  \*******************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var ProfileService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ProfileService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.timelineOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.aboutOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.photosVideosOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProfileService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getTimeline(),
                _this.getAbout(),
                _this.getPhotosVideos()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get timeline
     */
    ProfileService.prototype.getTimeline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/profile-timeline')
                .subscribe(function (timeline) {
                _this.timeline = timeline;
                _this.timelineOnChanged.next(_this.timeline);
                resolve(_this.timeline);
            }, reject);
        });
    };
    /**
     * Get about
     */
    ProfileService.prototype.getAbout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/profile-about')
                .subscribe(function (about) {
                _this.about = about;
                _this.aboutOnChanged.next(_this.about);
                resolve(_this.about);
            }, reject);
        });
    };
    /**
     * Get photos & videos
     */
    ProfileService.prototype.getPhotosVideos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/profile-photos-videos')
                .subscribe(function (photosVideos) {
                _this.photosVideos = photosVideos;
                _this.photosVideosOnChanged.next(_this.photosVideos);
                resolve(_this.photosVideos);
            }, reject);
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/tabs/about/about.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/about/about.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\n\n    <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\n\n        <div class=\"profile-box info-box general\" fxLayout=\"column\">\n\n            <header class=\"accent\">\n                <div class=\"title\">General Information</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Gender</div>\n                    <div class=\"info\">{{about.general.gender}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Birthday</div>\n                    <div class=\"info\">{{about.general.birthday}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Locations</div>\n                    <div class=\"info location\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                         *ngFor=\"let location of about.general.locations\">\n                        <span>{{location}}</span>\n                        <mat-icon class=\"s-16 ml-4\">location_on</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">About Me</div>\n                    <div class=\"info\">{{about.general.about}}</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"profile-box info-box work\" fxLayout=\"column\">\n\n            <header class=\"accent\">\n                <div class=\"title\">Work</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Occupation</div>\n                    <div class=\"info\">{{about.work.occupation}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Skills</div>\n                    <div class=\"info\">{{about.work.skills}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Jobs</div>\n                    <table class=\"info jobs\">\n                        <tr class=\"job\" *ngFor=\"let job of about.work.jobs\">\n                            <td class=\"company\">{{job.company}}</td>\n                            <td class=\"date\">{{job.date}}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\n\n            <header class=\"accent\">\n                <div class=\"title\">Contact</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Address</div>\n                    <div class=\"info\">{{about.contact.address}}</div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Tel.</div>\n                    <div class=\"info\" *ngFor=\"let tel of about.contact.tel\">\n                        <span>{{tel}}</span>\n                    </div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Website</div>\n                    <div class=\"info\" *ngFor=\"let website of about.contact.websites\">\n                        <span>{{website}}</span>\n                    </div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Emails</div>\n                    <div class=\"info\" *ngFor=\"let email of about.contact.emails\">\n                        <span>{{email}}</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\n\n        <div class=\"profile-box friends\" fxLayout=\"column\">\n\n            <header class=\"accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Friends</div>\n                <div class=\"more secondary-text\">\n                    <span>See 454 more...</span>\n                </div>\n            </header>\n\n            <div class=\"content\" fxLayout=\"row wrap\">\n                <div class=\"friend\" fxFlex=\"20\" *ngFor=\"let friend of about.friends\">\n                    <img [src]=\"friend.avatar\">\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"profile-box groups\" fxLayout=\"column\">\n\n            <header class=\"accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Joined Groups</div>\n                <div class=\"more secondary-text\">\n                    <span>See 6 more...</span>\n                </div>\n            </header>\n\n            <div class=\"content\">\n\n                <div class=\"group\" *ngFor=\"let group of about.groups\" fxLayout=\"row\"\n                     fxLayoutAlign=\"space-between center\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <img [src]=\"group.logo\" class=\"logo\" alt=\"{{group.name}}\"/>\n\n                        <div>\n                            <div class=\"name\">{{group.name}}</div>\n                            <div class=\"category\">{{group.category}}</div>\n                            <div class=\"members\">{{group.members}} people</div>\n                        </div>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"More\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/about/about.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/about/about.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nprofile-about #about {\n  max-width: 1200px; }\nprofile-about #about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\nprofile-about #about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\nprofile-about #about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      profile-about #about .about-sidebar {\n        padding: 8px; } }\nprofile-about #about .about-sidebar .friends .content .friend {\n      padding: 4px; }\nprofile-about #about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\nprofile-about #about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\nprofile-about #about .about-sidebar .groups .content .group .logo {\n        border: 1px solid;\n        margin-right: 16px; }\nprofile-about #about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\nprofile-about #about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\nprofile-about .profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\nprofile-about .profile-box header {\n    padding: 16px; }\nprofile-about .profile-box header .title {\n      font-size: 17px; }\nprofile-about .profile-box header .more {\n      cursor: pointer; }\nprofile-about .profile-box .content {\n    padding: 16px; }\nprofile-about .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid; }\nprofile-about .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\nprofile-about .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\nprofile-about .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/about/about.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/about/about.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutComponent", function() { return ProfileAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/profile/profile.service */ "./src/app/main/pages/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileAboutComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    function ProfileAboutComponent(_profileService) {
        this._profileService = _profileService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProfileAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.aboutOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (about) {
            _this.about = about;
        });
    };
    /**
     * On destroy
     */
    ProfileAboutComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ProfileAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/pages/profile/tabs/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/main/pages/profile/tabs/about/about.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
    ], ProfileAboutComponent);
    return ProfileAboutComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"photos-videos\" class=\"p-24\">\n    <div class=\"period\" *ngFor=\"let period of photosVideos\">\n\n        <div class=\"period-title\">\n            <span class=\"name\">{{period.name}}</span>\n            <span class=\"info\">{{period.info}}</span>\n        </div>\n\n        <div class=\"period-media\" fxLayout=\"row wrap\">\n            <div class=\"media\" *ngFor=\"let media of period.media\">\n                <img class=\"preview\" [src]=\"media.preview\" title=\"{{media.title}}\">\n                <div class=\"title\">{{media.title}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nprofile-photos-videos #photos-videos .period .period-title {\n  margin-bottom: 24px; }\nprofile-photos-videos #photos-videos .period .period-title .name {\n    font-size: 20px; }\nprofile-photos-videos #photos-videos .period .period-title .info {\n    margin-left: 16px;\n    font-size: 15px; }\nprofile-photos-videos #photos-videos .period .period-media {\n  margin-bottom: 16px; }\nprofile-photos-videos #photos-videos .period .period-media .media {\n    margin: 0 16px 16px 0;\n    position: relative; }\nprofile-photos-videos #photos-videos .period .period-media .media .preview {\n      width: 256px;\n      height: 256px;\n      display: block; }\nprofile-photos-videos #photos-videos .period .period-media .media .title {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 10;\n      padding: 0 16px;\n      height: 48px;\n      line-height: 48px;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfilePhotosVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePhotosVideosComponent", function() { return ProfilePhotosVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/pages/profile/profile.service */ "./src/app/main/pages/profile/profile.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePhotosVideosComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    function ProfilePhotosVideosComponent(_profileService) {
        this._profileService = _profileService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProfilePhotosVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.photosVideosOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (photosVideos) {
            _this.photosVideos = photosVideos;
        });
    };
    /**
     * On destroy
     */
    ProfilePhotosVideosComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ProfilePhotosVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-photos-videos',
            template: __webpack_require__(/*! ./photos-videos.component.html */ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.html"),
            styles: [__webpack_require__(/*! ./photos-videos.component.scss */ "./src/app/main/pages/profile/tabs/photos-videos/photos-videos.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfilePhotosVideosComponent);
    return ProfilePhotosVideosComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/profile/tabs/timeline/timeline.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/timeline/timeline.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline\" class=\"p-24\" fxLayout=\"row wrap\">\n\n    <div class=\"timeline-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\" fxFlex.gt-md=\"65\">\n\n        <div class=\"profile-box add-post\">\n\n            <div class=\"form\" fxFlex>\n\n                <textarea placeholder=\"Write something..\"></textarea>\n\n                <footer fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-icon-button aria-label=\"Add photo\" matTooltip=\"Add Photo\">\n                            <mat-icon>photo</mat-icon>\n                        </button>\n\n                        <button mat-icon-button aria-label=\"Mention somebody\" matTooltip=\"Mention somebody\">\n                            <mat-icon>person</mat-icon>\n                        </button>\n\n                        <button mat-icon-button aria-label=\"Add location\" matTooltip=\"Add location\">\n                            <mat-icon>location_on</mat-icon>\n                        </button>\n\n                    </div>\n\n                    <button mat-raised-button color=\"accent\" class=\"post-button\" aria-label=\"POST\">POST</button>\n\n                </footer>\n\n            </div>\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <div class=\"timeline-item\" *ngFor=\"let post of timeline.posts\">\n\n            <header fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n                <div class=\"user\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <img class=\"avatar\" [src]=\"post.user.avatar\">\n\n                    <div fxLayout=\"column\">\n                        <div class=\"title\">\n                            <span class=\"username\">{{post.user.name}}</span>\n                            <span *ngIf=\"post.type === 'post'\">posted on your timeline</span>\n                            <span *ngIf=\"post.type === 'something'\">shared something with you</span>\n                            <span *ngIf=\"post.type === 'video'\">shared a video with you</span>\n                            <span *ngIf=\"post.type === 'article'\">shared an article with you</span>\n                        </div>\n                        <div class=\"time\">{{post.time}}</div>\n                    </div>\n                </div>\n\n                <button mat-icon-button aria-label=\"More\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n            </header>\n\n            <div class=\"content\">\n                <div *ngIf=\"post.message\" class=\"message\">\n                    {{post.message}}\n                </div>\n\n                <div *ngIf=\"post.media\" class=\"media\">\n                    <img *ngIf=\"post.media.type === 'image'\" [src]=\"post.media.preview\">\n                    <div *ngIf=\"post.media.type === 'video'\" [innerHtml]=\"post.media.embed\"></div>\n                </div>\n\n                <div *ngIf=\"post.article\" fxLayout=\"column\" class=\"article\">\n                    <div class=\"media\">\n                        <img [src]=\"post.article.media.preview\">\n                    </div>\n                    <div class=\"title\">{{post.article.title}}</div>\n                    <div class=\"subtitle\">{{post.article.subtitle}}</div>\n                    <div class=\"excerpt\">{{post.article.excerpt}}</div>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <button mat-button class=\"like-button\">\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16\">favorite</mat-icon>\n                            <span>Like</span>&nbsp;<span>({{post.like}})</span>\n                        </span>\n                    </button>\n                    <button mat-button class=\"share-button\">\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16\">share</mat-icon>\n                            <span>Share</span>&nbsp;<span>({{post.share}})</span>\n                        </span>\n                    </button>\n                </div>\n            </div>\n\n            <footer class=\"\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                <div *ngIf=\"post.comments\" class=\"comment-count\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    {{post.comments.length}} comments\n                    <mat-icon class=\"s-16\">keyboard_arrow_down</mat-icon>\n                </div>\n\n                <div class=\"comment\" fxLayout=\"row\" fxFlexFill *ngFor=\"let comment of post.comments\">\n                    <img [src]=\"comment.user.avatar\" class=\"avatar\"/>\n\n                    <div fxLayout=\"column\" fxFlex>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"username\">{{comment.user.name}}</span>\n                            <span class=\"time\">{{comment.time}}</span>\n                        </div>\n                        <div class=\"message\">\n                            {{comment.message}}\n                        </div>\n                        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <a href=\"#\" class=\"reply-button\">Reply</a>\n                            <mat-icon fxFlex class=\"report-button s-16\">flag</mat-icon>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"reply\" fxLayout=\"row\" fxFlexFill>\n                    <img src=\"assets/images/avatars/profile.jpg\" class=\"avatar\"/>\n\n                    <form fxFlex>\n                        <textarea placeholder=\"Add a comment...\"></textarea>\n                        <button mat-raised-button color=\"accent\" class=\"post-comment-button\" aria-label=\"Post Comment\">\n                            Post Comment\n                        </button>\n                    </form>\n                </div>\n            </footer>\n        </div>\n    </div>\n\n    <div class=\"timeline-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\" fxFlex.gt-md=\"35\">\n\n        <div class=\"profile-box latest-activity\" fxLayout=\"column\">\n\n            <header class=\"accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Latest Activity</div>\n                <div class=\"more secondary-text\">See All</div>\n            </header>\n\n            <div class=\"content\" fxLayout=\"row wrap\">\n                <div class=\"activities\">\n                    <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start start\"\n                         *ngFor=\"let activity of timeline.activities\">\n                        <img [src]=\"activity.user.avatar\" class=\"avatar\" alt=\"{{activity.user.name}}\"/>\n\n                        <div fxLayout=\"column\">\n                            <div>\n                                <span class=\"username\">{{activity.user.name}}</span>\n                                <span class=\"message\"> {{activity.message}}</span>\n                            </div>\n                            <span class=\"time secondary-text\">{{activity.time}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/timeline/timeline.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/timeline/timeline.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nprofile-timeline #timeline {\n  max-width: 1200px; }\nprofile-timeline #timeline .timeline-content .add-post {\n    margin-bottom: 0;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\nprofile-timeline #timeline .timeline-content .add-post textarea {\n      display: flex;\n      flex: 1 0 auto;\n      font-size: 13px;\n      width: 100%;\n      height: 140px;\n      border: none;\n      padding: 16px;\n      resize: vertical; }\nprofile-timeline #timeline .timeline-content .add-post footer {\n      padding: 8px;\n      border-top: 1px solid; }\nprofile-timeline #timeline .timeline-content .add-post footer .post-button {\n        margin: 0;\n        width: 64px;\n        min-width: 64px;\n        height: 30px;\n        line-height: 30px;\n        min-height: 30px; }\nprofile-timeline #timeline .timeline-content mat-divider {\n    border-top-width: 1px;\n    border-top-style: solid;\n    margin: 32px 0; }\nprofile-timeline #timeline .timeline-content .timeline-item {\n    margin-bottom: 32px;\n    overflow: hidden;\n    border-radius: 2px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\nprofile-timeline #timeline .timeline-content .timeline-item:last-child {\n      margin-bottom: 0; }\nprofile-timeline #timeline .timeline-content .timeline-item header {\n      padding: 16px 0 8px 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item header .title {\n        font-weight: 500; }\nprofile-timeline #timeline .timeline-content .timeline-item header .title .username {\n          margin-right: 2px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .message {\n      padding: 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .media {\n      padding: 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .media img, profile-timeline #timeline .timeline-content .timeline-item .content .media iframe {\n        width: 100%; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .media a {\n        color: inherit; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .like-button,\n    profile-timeline #timeline .timeline-content .timeline-item .content .share-button {\n      padding: 4px 6px;\n      text-transform: inherit;\n      font-size: 13px;\n      font-weight: normal;\n      margin: 0 0 16px 8px;\n      min-width: inherit;\n      line-height: inherit; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .like-button:hover,\n      profile-timeline #timeline .timeline-content .timeline-item .content .share-button:hover {\n        background-color: transparent; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .like-button mat-icon,\n      profile-timeline #timeline .timeline-content .timeline-item .content .share-button mat-icon {\n        margin: 0 8px 0 0; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article {\n      border: 1px solid;\n      margin: 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article .media {\n        padding: 0;\n        overflow: hidden;\n        border-bottom: 1px solid; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article .media img {\n          display: block;\n          padding: 0; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article .title {\n        font-size: 15px;\n        padding: 16px 16px 4px 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article .subtitle {\n        padding: 0 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item .content .article .excerpt {\n        padding: 16px 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item footer {\n      padding: 16px; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment-count {\n        margin-bottom: 16px;\n        cursor: pointer; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment-count mat-icon {\n          margin-left: 8px; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment {\n        margin-bottom: 24px !important; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment .username {\n          font-weight: 500;\n          margin-right: 4px; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment .actions {\n          margin-top: 8px; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment .actions .reply-button {\n            margin-right: 16px;\n            cursor: pointer; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .comment .actions .report-button {\n            margin: 0;\n            cursor: pointer; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .reply form textarea {\n        width: 100% !important;\n        min-height: 72px;\n        padding: 8px;\n        margin-bottom: 8px;\n        font-size: 13px;\n        border: 1px solid; }\nprofile-timeline #timeline .timeline-content .timeline-item footer .reply form .post-comment-button {\n        margin: 0;\n        text-transform: inherit;\n        font-weight: normal;\n        padding: 0 12px;\n        min-height: 30px;\n        min-width: inherit;\n        line-height: 30px; }\nprofile-timeline #timeline .timeline-sidebar {\n    padding-left: 32px; }\n@media (max-width: 959px) {\n      profile-timeline #timeline .timeline-sidebar {\n        padding: 32px 0 0 0; } }\nprofile-timeline #timeline .timeline-sidebar .latest-activity .content .activities .activity {\n      padding: 16px 0; }\nprofile-timeline #timeline .timeline-sidebar .latest-activity .content .activities .activity .avatar {\n        margin-right: 16px; }\nprofile-timeline #timeline .timeline-sidebar .latest-activity .content .activities .activity .username {\n        font-weight: 500; }\nprofile-timeline #timeline .timeline-sidebar .latest-activity .content .activities .activity .message {\n        font-weight: 500; }\nprofile-timeline .profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\nprofile-timeline .profile-box header {\n    padding: 16px; }\nprofile-timeline .profile-box header .title {\n      font-size: 17px; }\nprofile-timeline .profile-box header .more {\n      cursor: pointer; }\nprofile-timeline .profile-box .content {\n    padding: 16px; }\nprofile-timeline .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid; }\nprofile-timeline .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\nprofile-timeline .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\nprofile-timeline .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/pages/profile/tabs/timeline/timeline.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/pages/profile/tabs/timeline/timeline.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTimelineComponent", function() { return ProfileTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile.service */ "./src/app/main/pages/profile/profile.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileTimelineComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    function ProfileTimelineComponent(_profileService) {
        this._profileService = _profileService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProfileTimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.timelineOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (timeline) {
            _this.timeline = timeline;
        });
    };
    /**
     * On destroy
     */
    ProfileTimelineComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ProfileTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/main/pages/profile/tabs/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/main/pages/profile/tabs/timeline/timeline.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileTimelineComponent);
    return ProfileTimelineComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/pages/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search\" class=\"page-layout simple tabbed\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n         fxLayoutAlign.gt-sm=\"space-between end\">\n\n        <mat-form-field class=\"w-100-p\">\n            <input matInput name=\"search\" placeholder=\"Search...\">\n        </mat-form-field>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Classic\">\n                <search-classic></search-classic>\n            </mat-tab>\n\n            <mat-tab label=\"Table\">\n                <search-table></search-table>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/pages/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  :host #search .header {\n    padding: 16px; } }\n:host #search .header .search {\n  position: relative;\n  max-width: 780px; }\n:host #search .header .search .search-icon {\n    margin: 0 -24px 0 0; }\n:host #search .header .search .search-input {\n    padding: 0 0 0 48px;\n    background: none;\n    font-size: 24px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n    transition: border-color 300ms ease; }\n:host #search .header .search .search-input:focus {\n      border-color: white; }\n:host #search .header .search .search-input::-webkit-input-placeholder {\n      color: #FFFFFF; }\n:host #search .content .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host #search .content .result-info .mat-title {\n    padding-right: 8px; }\n@media screen and (max-width: 599px) {\n    :host #search .content .result-info .pager {\n      margin-top: 16px; } }\n:host #search .content .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host #search .content .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/pages/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/pages/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/main/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/main/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/pages/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/search/search.service */ "./src/app/main/pages/search/search.service.ts");
/* harmony import */ var app_main_pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/pages/search/search.component */ "./src/app/main/pages/search/search.component.ts");
/* harmony import */ var app_main_pages_search_tabs_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/pages/search/tabs/classic/classic.component */ "./src/app/main/pages/search/tabs/classic/classic.component.ts");
/* harmony import */ var app_main_pages_search_tabs_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/pages/search/tabs/table/table.component */ "./src/app/main/pages/search/tabs/table/table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'search',
        component: app_main_pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        resolve: {
            search: app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
        }
    }
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                app_main_pages_search_tabs_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__["SearchClassicComponent"],
                app_main_pages_search_tabs_table_table_component__WEBPACK_IMPORTED_MODULE_7__["SearchTableComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/main/pages/search/search.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/pages/search/search.service.ts ***!
  \*****************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var SearchService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function SearchService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.classicOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.tableOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    SearchService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getClassic(),
                _this.getTable()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get classic
     */
    SearchService.prototype.getClassic = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/search-classic')
                .subscribe(function (classic) {
                _this.classic = classic;
                _this.classicOnChanged.next(_this.classic);
                resolve(_this.classic);
            }, reject);
        });
    };
    /**
     * Get table
     */
    SearchService.prototype.getTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/search-table')
                .subscribe(function (table) {
                _this.table = table;
                _this.tableOnChanged.next(_this.table);
                resolve(_this.table);
            }, reject);
        });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/main/pages/search/tabs/classic/classic.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/classic/classic.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classic-tab p-24\">\n\n    <div class=\"result-info\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\"\n         fxLayoutAlign.xs=\"start start\">\n\n        <span class=\"result-count h3 secondary-text\">\n            <span>54</span>\n            <span class=\"ml-4\">Results</span>\n        </span>\n\n        <div class=\"pager\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <span class=\"mr-4 secondary-text\">Results:</span>\n\n            <span class=\"page-info\">\n                <span>1</span>\n                <span class=\"mx-4\">-</span>\n                <span>10</span>\n                <span class=\"mx-4\">of</span>\n                <span>54</span>\n            </span>\n\n            <button mat-icon-button aria-label=\"Previous page\">\n                <mat-icon>chevron_left</mat-icon>\n            </button>\n\n            <button mat-icon-button aria-label=\"Next page\">\n                <mat-icon>chevron_right</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"results\">\n        <div class=\"result-item\" *ngFor=\"let item of classic\">\n            <div class=\"title blue-fg\">{{item.title}}</div>\n            <div class=\"url green-fg\">{{item.url}}</div>\n            <div class=\"excerpt\">{{item.excerpt}}</div>\n        </div>\n    </div>\n\n    <div class=\"simple-pagination\">\n        <button mat-button class=\"pagination-item disabled\" disabled=\"disabled\"\n                aria-label=\"Go to previous page\">\n            <mat-icon>chevron_left</mat-icon>\n        </button>\n\n        <button mat-button class=\"pagination-item active\" [disableRipple]=\"true\" aria-label=\"Go to page 1\">\n            <span>1</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 2\">\n            <span>2</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 3\">\n            <span>3</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 4\">\n            <span>4</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 5\">\n            <span>5</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 6\">\n            <span>6</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 7\">\n            <span>7</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 8\">\n            <span>8</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 9\">\n            <span>9</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 10\">\n            <span>10</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to next page\">\n            <mat-icon>chevron_right</mat-icon>\n        </button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/search/tabs/classic/classic.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/classic/classic.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .classic-tab .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host .classic-tab .results .result-item {\n  margin-top: 32px;\n  max-width: 512px; }\n:host .classic-tab .results .result-item .title {\n    font-size: 17px;\n    font-weight: 500;\n    cursor: pointer; }\n:host .classic-tab .results .result-item .url {\n    margin-bottom: 4px; }\n:host .classic-tab .results .result-item .excerpt {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n:host .classic-tab .results .result-item:last-child {\n    padding-bottom: 32px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/pages/search/tabs/classic/classic.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/classic/classic.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchClassicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClassicComponent", function() { return SearchClassicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/search/search.service */ "./src/app/main/pages/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchClassicComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {SearchService} _searchService
     */
    function SearchClassicComponent(_searchService) {
        this._searchService = _searchService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    SearchClassicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._searchService.classicOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (classic) {
            _this.classic = classic;
        });
    };
    /**
     * On destroy
     */
    SearchClassicComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    SearchClassicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-classic',
            template: __webpack_require__(/*! ./classic.component.html */ "./src/app/main/pages/search/tabs/classic/classic.component.html"),
            styles: [__webpack_require__(/*! ./classic.component.scss */ "./src/app/main/pages/search/tabs/classic/classic.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchClassicComponent);
    return SearchClassicComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/search/tabs/table/table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/table/table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-tab\">\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container matColumnDef=\"position\">\n            <mat-header-cell *matHeaderCellDef>Position</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.position}}</mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"office\">\n            <mat-header-cell *matHeaderCellDef>Office</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.office}}</mat-cell>\n        </ng-container>\n\n        <!-- Color Column -->\n        <ng-container matColumnDef=\"salary\">\n            <mat-header-cell *matHeaderCellDef>Salary</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.salary | currency:'USD':'symbol'}}</mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/pages/search/tabs/table/table.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/table/table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/pages/search/tabs/table/table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/search/tabs/table/table.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchTableComponent, SearchTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTableComponent", function() { return SearchTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTableDataSource", function() { return SearchTableDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/search/search.service */ "./src/app/main/pages/search/search.service.ts");
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





var SearchTableComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {SearchService} _searchService
     */
    function SearchTableComponent(_searchService) {
        this._searchService = _searchService;
        // Set the defaults
        this.displayedColumns = ['name', 'position', 'office', 'salary'];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    SearchTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new SearchTableDataSource(this._searchService);
        this._searchService.tableOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (table) {
            _this.table = table;
        });
    };
    /**
     * On destroy
     */
    SearchTableComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    SearchTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/main/pages/search/tabs/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/main/pages/search/tabs/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_pages_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], SearchTableComponent);
    return SearchTableComponent;
}());

var SearchTableDataSource = /** @class */ (function (_super) {
    __extends(SearchTableDataSource, _super);
    /**
     * Constructor
     *
     * @param {SearchService} _searchService
     */
    function SearchTableDataSource(_searchService) {
        var _this = _super.call(this) || this;
        _this._searchService = _searchService;
        return _this;
    }
    /**
     * Connect
     *
     * @returns {BehaviorSubject<any>}
     */
    SearchTableDataSource.prototype.connect = function () {
        return this._searchService.tableOnChanged;
    };
    /**
     * Disconnect
     */
    SearchTableDataSource.prototype.disconnect = function () {
    };
    return SearchTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ })

}]);
//# sourceMappingURL=main-pages-pages-module.js.map