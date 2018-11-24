(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"],{

/***/ "./src/app/main/documentation/getting-started/getting-started.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/getting-started.module.ts ***!
  \******************************************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/getting-started/introduction/introduction.component */ "./src/app/main/documentation/getting-started/introduction/introduction.component.ts");
/* harmony import */ var app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/getting-started/installation/installation.component */ "./src/app/main/documentation/getting-started/installation/installation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'introduction',
        component: app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["DocsGettingStartedIntroductionComponent"]
    },
    {
        path: 'installation',
        component: app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["DocsGettingStartedInstallationComponent"]
    }
];
var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_getting_started_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["DocsGettingStartedIntroductionComponent"],
                app_main_documentation_getting_started_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["DocsGettingStartedInstallationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"installation\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Getting Started</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Installation</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div class=\"main-title\">Prerequisites</div>\n\n        <p class=\"message-box info\">\n            This section will give you some information about what tools you will need. You can skip to the\n            <b>Installation</b> section to start installing the template. We already mentioned all the prerequisites and\n            how to install them in the <b>Installation</b> section.\n        </p>\n\n        <!-- ANGULAR CLI -->\n        <div class=\"section-title\">Angular CLI</div>\n        <p>\n            Fuse uses <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">Angular CLI</a> for quickly\n            bootstrapping the application. You can check out the link for\n            more detailed information.\n        </p>\n\n        <p>\n            Simply, <em><b>Angular CLI</b></em> is a tool to initialize, develop, scaffold and maintain Angular\n            applications\n        </p>\n        <!-- / ANGULAR CLI -->\n\n        <!-- NODE.JS -->\n        <div class=\"section-title\">Node.js</div>\n        <p>\n            To install and use Fuse, you will need <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a>\n            installed to your computer. We won't get into too much detail about Node.js as it's out of the scope\n            of this documentation. Also you won't need to actually use Node.js, it's only required for the\n            development process.\n        </p>\n        <!-- / NODE.JS -->\n\n        <!-- GIT -->\n        <div class=\"section-title\">Git</div>\n        <p>\n            To be able to install and use Fuse, you will also need\n            <a href=\"https://git-scm.com/\" target=\"_blank\">Git</a> installed to your computer. Git is required for\n            <b>npm</b> to work correctly.\n        </p>\n        <!-- / GIT -->\n\n        <!-- NPM -->\n        <div class=\"section-title\">Npm - Package Manager</div>\n        <p>\n            Fuse uses <a href=\"https://www.npmjs.com/\" target=\"_blank\">npm</a> package manager to install and manage 3rd\n            party components and libraries.\n        </p>\n        <!-- / NPM -->\n\n        <div class=\"main-title\">Installation</div>\n\n        <!-- INSTALLING PREREQUISITES -->\n        <div class=\"section-title\">A. Installing Prerequisites</div>\n        <ol class=\"step-by-step\">\n            <li>\n                Download and install the latest <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a> from\n                its web site.\n            </li>\n\n            <li>\n                Download and install the latest <a href=\"https://git-scm.com/\" target=\"_blank\">Git</a> from its web\n                site.\n            </li>\n\n            <li>\n                To install the Angular CLI:\n\n                Open your favorite console application (Terminal, Command Prompt etc.), run the following command\n                and wait for it to finish:\n\n                <div class=\"mt-24\">\n                    <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                        <textarea #source hidden=\"hidden\">\n                            npm install -g @angular/cli\n                        </textarea>\n                    </fuse-highlight>\n                </div>\n            </li>\n        </ol>\n        <p class=\"mt-24\">\n            Now you are ready to install the Fuse.\n        </p>\n        <!-- / PREREQUISITES -->\n\n        <!-- / INSTALLING FUSE-->\n        <div class=\"section-title\">B. Installing Fuse</div>\n        <ol class=\"step-by-step\">\n            <li>\n                Unzip the zip file that you have downloaded from Themeforest. Inside the zip file, you will find the\n                Skeleton Project <b>(Fuse-x.x.x-skeleton.zip)</b> along with the Demo Project <b>(Fuse-x.x.x-demo.zip)</b>,\n                PSD designs and a readme file.\n            </li>\n            <li>\n                For this documentation, we will be using the Skeleton Project which is the exact same template minus\n                the demo content so you don't have to clean up the demo content.\n            </li>\n            <li>\n                Extract the contents of the zip file <b>(Fuse-x.x.x-skeleton.zip)</b> into a folder that you will\n                work within. For this documentation, we will refer that as \"<em>your work folder</em>\".\n            </li>\n            <li>\n                Open your favorite console application (Terminal, Command Prompt etc.), navigate into your work\n                folder, run the following command and wait for it to finish:\n\n                <div class=\"mt-24\">\n                    <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                        <textarea #source hidden=\"hidden\">\n                            npm install\n                        </textarea>\n                    </fuse-highlight>\n                </div>\n\n                <p>\n                    This command will install all the required Node.js modules into the <b>node_modules</b>\n                    directory inside your work folder.\n                </p>\n            </li>\n\n            <p>\n                And now, you are ready to run the Fuse for the first time. Please continue to the\n                <a routerLink=\"/documentation/working-with-fuse/server\">Working with Fuse</a> section.\n            </p>\n        </ol>\n        <!-- / INSTALLING FUSE-->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/installation/installation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/installation/installation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DocsGettingStartedInstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsGettingStartedInstallationComponent", function() { return DocsGettingStartedInstallationComponent; });
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

var DocsGettingStartedInstallationComponent = /** @class */ (function () {
    function DocsGettingStartedInstallationComponent() {
    }
    DocsGettingStartedInstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-installation',
            template: __webpack_require__(/*! ./installation.component.html */ "./src/app/main/documentation/getting-started/installation/installation.component.html"),
            styles: [__webpack_require__(/*! ./installation.component.scss */ "./src/app/main/documentation/getting-started/installation/installation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsGettingStartedInstallationComponent);
    return DocsGettingStartedInstallationComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"introduction\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Getting Started</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Introduction</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            This version of Fuse is <em>NOT</em> a traditional admin template, it's an Angular app written entirely\n            with Typescript and has no jQuery dependency.\n        </p>\n        <p>\n            While Fuse is a great tool and source for learning Angular, it also requires at least an entry level of\n            Angular knowledge so you can find your way within the source code.\n        </p>\n        <p>\n            Here you can find a list of core libraries, design specifications and coding standards that we use in Fuse:\n        </p>\n\n        <!-- GOOGLE MATERIAL DESIGN -->\n        <div class=\"section-title\">Google's Material Design</div>\n        <p>\n            All libraries and custom made components are following <a\n            href=\"https://www.google.com/design/spec/material-design/introduction.html\"\n            target=\"_blank\">Google's Material Design Specifications</a>.\n        </p>\n        <!-- / GOOGLE MATERIAL DESIGN -->\n\n        <!-- ANGULAR -->\n        <div class=\"section-title\">Angular</div>\n        <p>\n            <a href=\"https://angular.io/\" target=\"_blank\">Angular</a> is the core of Fuse.\n        </p>\n        <!-- / ANGULAR -->\n\n        <!-- ANGULAR MATERIAL 2 -->\n        <div class=\"section-title\">Angular Material</div>\n        <p>\n            <a href=\"https://material.angular.io/\" target=\"_blank\">Angular Material</a> is the primary UI\n            library of the Fuse. It's a set of Angular components, directives and services that implements Material\n            Design Specifications and it's in active development by Google.\n        </p>\n        <!-- / ANGULAR MATERIAL 2 -->\n\n        <!-- ANGULAR CLI -->\n        <div class=\"section-title\">CLI tool for Angular</div>\n        <p>\n            The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications.\n            You can find more information about at:\n            <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">angular-cli</a>\n        </p>\n        <!-- / ANGULAR CLI  -->\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/getting-started/introduction/introduction.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/getting-started/introduction/introduction.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DocsGettingStartedIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsGettingStartedIntroductionComponent", function() { return DocsGettingStartedIntroductionComponent; });
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

var DocsGettingStartedIntroductionComponent = /** @class */ (function () {
    function DocsGettingStartedIntroductionComponent() {
    }
    DocsGettingStartedIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/main/documentation/getting-started/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/main/documentation/getting-started/introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsGettingStartedIntroductionComponent);
    return DocsGettingStartedIntroductionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=getting-started-getting-started-module.js.map