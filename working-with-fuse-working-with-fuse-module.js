(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["working-with-fuse-working-with-fuse-module"],{

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Directory Structure</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            Fuse has a fairly simple directory structure. All source code that you will need stays inside the\n            <b>/src</b> folder.\n        </p>\n\n        <p>\n            Once you build your app, a <b>/dist</b> folder will appear at the root which will contain the built app. You\n            can simply upload the contents of it to your server to start running your app.\n        </p>\n\n        <div class=\"main-title\">Source directory (/src)</div>\n\n        <p>\n            The source folder has the general Angular CLI project structure along with an additional folder called\n            <b>/@fuse</b> which contains the core elements of the Fuse.\n        </p>\n\n        <p class=\"message-box warning\">\n            We recommend you not to touch <b>/@fuse</b> directory to easily update Fuse in the future.\n        </p>\n\n        <div class=\"section-title\">/app</div>\n\n        <p>\n            This folder contains the <b>AppComponent</b> along with the following directories. Everything that being\n            contained inside these folders are belong to your app and you can edit them however you like while\n            building your app:\n        </p>\n\n        <ul>\n            <li>\n                <b>/fake-db</b>: The fake database data files for Fuse apps.\n            </li>\n            <li>\n                <b>/fuse-config</b>: The main config file for configuring the Fuse template.\n            </li>\n            <li>\n                <b>/layout</b>: Contains the template layout components.\n            </li>\n            <li>\n                <b>/main</b>: Example Fuse apps and ready to use pages and page layouts.\n            </li>\n            <li>\n                <b>/navigation</b>: The main navigation data.\n            </li>\n            <li>\n                <b>/store</b>: Ngrx-Mail app related store files.\n            </li>\n\n        </ul>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DocsWorkingWithFuseDirectoryStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseDirectoryStructureComponent", function() { return DocsWorkingWithFuseDirectoryStructureComponent; });
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

var DocsWorkingWithFuseDirectoryStructureComponent = /** @class */ (function () {
    function DocsWorkingWithFuseDirectoryStructureComponent() {
    }
    DocsWorkingWithFuseDirectoryStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-directory-structure',
            template: __webpack_require__(/*! ./directory-structure.component.html */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html"),
            styles: [__webpack_require__(/*! ./directory-structure.component.scss */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseDirectoryStructureComponent);
    return DocsWorkingWithFuseDirectoryStructureComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Material Theming</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            Fuse fully takes advantage of <a href=\"https://material.angular.io/guide/theming\" target=\"_blank\">Angular\n            Material's theming</a>.\n        </p>\n\n        <p class=\"message-box info\">\n            All Material theming related codes can be found in the <code>src/app/app.theme.scss</code> file. This file\n            is responsible for creating Material color themes as well as applying those themes to the individual\n            components.\n        </p>\n\n        <p>\n            To simply explain, every component that comes with Fuse has a separate <code>*.theme.scss</code> file\n            which has everything theming related. These files are separate from the component's scss files simply\n            because they have theming mixins and they need to be imported in <code>app.theme.scss</code>. Having those\n            mixins in the component's scss file would have caused duplicate content when imported.\n        </p>\n\n        <div class=\"section-title\">Theming components</div>\n\n        <p>\n            Below, you can see an example theme (<code>calendar.theme.scss</code>) file. When you create a component, or\n            move one from the Demo app, you need to import this scss file in the <b>app.theme.scss</b> file and add it\n            to the <code>component-theme</code> mixin array.\n        </p>\n\n        <p class=\"py-8 mb-0\">\n            <fuse-highlight lang=\"scss\">\n                <textarea #source>\n                    @mixin calendar-theme($theme) {\n\n                        $background: map-get($theme, background);\n                        $foreground: map-get($theme, foreground);\n                        $primary: map-get($theme, primary);\n                        $accent: map-get($theme, accent);\n                        $warn: map-get($theme, warn);\n                        $is-dark: map-get($theme, is-dark);\n\n                        // ...\n                        // The content of the mixin\n                        // ...\n\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <p class=\"mt-0\">\n            <em>calendar.theme.scss</em>\n        </p>\n\n        <p class=\"py-8 mb-0\">\n            <fuse-highlight lang=\"scss\">\n                <textarea #source>\n                    // Import the .theme.scss file from its correct location\n                    @import \"src/app/main/~/calendar.theme\";\n\n                    // Define a mixin for easier access\n                    @mixin components-theme($theme) {\n\n                        // Include the imported calendar-theme mixin into the components-theme mixin\n                        @include calendar-theme($theme);\n\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <p class=\"mt-0\">\n            <em>app.theme.scss</em>\n        </p>\n\n        <p>\n            The <code>components-theme</code> mixin will be called when you define a new theme so that the components\n            can be styles according to that theme.\n        </p>\n\n        <p class=\"message-box info\">\n            Too see more examples about multiple color themes you can see the <code>src/app/app.theme.scss</code> file\n            from the Demo project.\n        </p>\n\n        <p class=\"message-box info\">\n            To learn more about the contents of the <code>$theme</code> map, check out the Demo project. There are\n            plenty of examples in there and you can also print out the contents of the map using the <code>@debug</code>\n            function of the sass.\n        </p>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DocsWorkingWithFuseMaterialThemingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseMaterialThemingComponent", function() { return DocsWorkingWithFuseMaterialThemingComponent; });
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

var DocsWorkingWithFuseMaterialThemingComponent = /** @class */ (function () {
    function DocsWorkingWithFuseMaterialThemingComponent() {
    }
    DocsWorkingWithFuseMaterialThemingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-material-theming',
            template: __webpack_require__(/*! ./material-theming.component.html */ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.html"),
            styles: [__webpack_require__(/*! ./material-theming.component.scss */ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseMaterialThemingComponent);
    return DocsWorkingWithFuseMaterialThemingComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Multi Language</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            Fuse uses <a class=\"link\" href=\"https://github.com/ngx-translate/core\" target=\"_blank\">ngx-translate</a>\n            module and supports multiple languages and translations.\n        </p>\n\n        <p class=\"message-box warning\">\n            Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere.\n            If you want to see the translations in action, visit <a class=\"link\" [routerLink]=\"'/apps/mail'\">\n            Mail</a> app and then change the language from the <b>Toolbar.</b>\n            <br><br>\n            Mail app is the only app that has translations for demonstration purposes. You can look at its source code\n            to see the usage.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p>In order to use the translations, create your translation file within the module you want to use\n            the translations. For example, for the Mail app, create <code>i18n/en.ts</code> file inside the\n            <code>apps/mail</code> folder.\n        </p>\n        <p>\n            The structure of the translation file is important and it must define the language id along with the\n            translation data:\n        </p>\n\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    // i18n/en.ts\n                    export const locale = {\n                        lang: 'en',\n                        data: {\n                            'MAIL': {\n                             'COMPOSE': 'COMPOSE'\n                            }\n                        }\n                    };\n\n                    // i18n/tr.ts\n                    export const locale = {\n                        lang: 'tr',\n                        data: {\n                            'MAIL': {\n                             'COMPOSE': 'YENİ E-POSTA'\n                            }\n                        }\n                    };\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <p>\n            After you create your translation files, open the <code>*.component.ts</code> file for the module you\n            want to have translations, and register your translation file. For this example, we will use the\n            <code>mail.component.ts</code> file:\n        </p>\n\n        <fuse-highlight lang=\"typescript\">\n            <textarea #source>\n                // Your imports\n                import { ... } from '..';\n\n                // Import the locale files\n                import { locale as english } from './i18n/en';\n                import { locale as turkish } from './i18n/tr';\n\n                @Component({\n                    selector : 'mail',\n                    templateUrl: './mail.component.html',\n                    styleUrls : ['./mail.component.scss']\n                })\n                export class MailComponent\n                {\n                    constructor(private translationLoader: FuseTranslationLoaderService)\n                {\n                    this.translationLoader.loadTranslations(english, turkish);\n                }\n\n                ...\n                }\n            </textarea>\n        </fuse-highlight>\n\n        <div class=\"section-title\">Changing the language</div>\n\n        <p>\n            Changing the current language can happen instantly. Simply call the <code>use</code> method from the\n            translate service:\n        </p>\n\n        <fuse-highlight lang=\"typescript\">\n            <textarea #source>\n                import { TranslateService } from '@ngx-translate/core';\n\n                constructor(private translate: TranslateService) {}\n\n                setLanguage()\n                {\n                    // Use the selected language for translations\n                    this.translate.use('tr');\n                }\n            </textarea>\n        </fuse-highlight>\n\n        <p>\n            More detailed usage of the translation service can be found in the <code>toolbar.component.ts</code>\n            file.\n        </p>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DocsWorkingWithFuseMultiLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseMultiLanguageComponent", function() { return DocsWorkingWithFuseMultiLanguageComponent; });
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

var DocsWorkingWithFuseMultiLanguageComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsWorkingWithFuseMultiLanguageComponent() {
    }
    DocsWorkingWithFuseMultiLanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-multi-language',
            template: __webpack_require__(/*! ./multi-language.component.html */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html"),
            styles: [__webpack_require__(/*! ./multi-language.component.scss */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseMultiLanguageComponent);
    return DocsWorkingWithFuseMultiLanguageComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Page Layouts</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            One of the strong sides of the Fuse is its Page layouts. Every single app, pre-built page and even this\n            documentation pages uses the Fuse's page layouts.\n        </p>\n\n        <p>\n            Simply, page layouts are pre-built layouts with a demo content which you can simply copy/paste and start\n            building your own page or app based on it. Because page layouts, it's very easy to replicate any page style\n            that you can find in Fuse, without needing to remove all the demo functionality from them.\n        </p>\n\n        <div class=\"section-title\">Identifying a Page Layout</div>\n\n        <p>\n            You can easily identify the layout that particular page or app using by simply looking at its main html\n            file. The very top wrapper div will tell you everything you need to know:\n        </p>\n\n        <fuse-highlight lang=\"html\" class=\"source-code\">\n            <textarea #source hidden=\"hidden\">\n                <div class=\"page-layout carded left-sidebar\">\n                    ...\n                </div>\n            </textarea>\n        </fuse-highlight>\n\n        <p>\n            The above example is using the <b>carded</b> style page with a <b>left sidebar</b> setup which can be found\n            in <b>/ui/page-layouts/carded/left-sidebar-1</b> directory.\n        </p>\n\n        <p class=\"message-box info\">\n            The numbers in the folder names represents the scrolling style of that particular page layout. For example,\n            <b>left-sidebar-1</b> has the exact same layout with <b>left-sidebar-2</b> but the former one uses\n            a single scrollbar while the latter one uses separate scrollbars for its content and its sidebar.\n        </p>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DocsWorkingWithFusePageLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFusePageLayoutsComponent", function() { return DocsWorkingWithFusePageLayoutsComponent; });
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

var DocsWorkingWithFusePageLayoutsComponent = /** @class */ (function () {
    function DocsWorkingWithFusePageLayoutsComponent() {
    }
    DocsWorkingWithFusePageLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-page-layouts',
            template: __webpack_require__(/*! ./page-layouts.component.html */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html"),
            styles: [__webpack_require__(/*! ./page-layouts.component.scss */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFusePageLayoutsComponent);
    return DocsWorkingWithFusePageLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Production</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <!-- BUILD -->\n        <div class=\"section-title\">Build</div>\n\n        <p>\n            The following command builds the application into an output directory\n        </p>\n\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng build\n                </textarea>\n            </fuse-highlight>\n        </div>\n\n        <p>\n            The build artifacts will be stored in the <b>/dist</b> directory. All commands that build or serve your\n            project, will delete the output directory.\n        </p>\n\n        <div class=\"section-title\">Bundling & Tree-Shaking (AoT)</div>\n\n        <p>\n            To build your app with AoT (Ahead of Time) compiler, use the following command:\n        </p>\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng build --prod\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <p>\n            or if you want to serve with AoT, use the following:\n        </p>\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng serve --prod\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <p>\n            This will make use of <b>uglifying</b> and <b>tree-shaking</b> functionality while serving the app from\n            the memory.\n        </p>\n\n        <div class=\"section-title\">Alternative AoT compiler</div>\n\n        <p>\n            If you happen to stumble upon an error while running the\n        </p>\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng build --prod\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <p>\n            command, there is an alternative one that you can use. The following command will run the <b>ng build\n            --prod</b> command with an increased memory size so your app can be built:\n        </p>\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    npm run build-prod\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <!-- / BUILD -->\n\n        <!--  TESTS -->\n        <div class=\"section-title\">Running unit tests</div>\n\n        <div class=\"mt-24\">\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng test\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <p>\n            Tests will execute after a build is executed via\n            <a href=\"http://karma-runner.github.io/0.13/index.html\" target=\"_blank\">Karma</a>, and it will automatically\n            watch your files for changes.\n        </p>\n        <p>\n            You can run tests a single time via\n            <span class=\"text-boxed\">--watch=false</span>\n            or\n            <span class=\"text-boxed\">--single-run</span>\n        </p>\n        <!-- / TESTS -->\n\n        <!--  E2E TESTS -->\n        <div class=\"section-title\">Running end-to-end tests</div>\n        <div class=\"mt-24\">\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng e2e\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <p>\n            Before running the tests make sure you are serving the app via\n            <span class=\"text-boxed\">ng serve.</span>\n\n            End-to-end tests are run via <a href=\"https://angular.github.io/protractor/\"\n                                            target=\"_blank\">Protractor.</a>\n        </p>\n        <!-- / E2E TESTS -->\n\n        <p class=\"mt-32\">\n            For more information about angular-cli commands, check the <a href=\"https://github.com/angular/angular-cli\"\n                                                                          target=\"_blank\">angular-cli</a>.\n        </p>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DocsWorkingWithFuseProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseProductionComponent", function() { return DocsWorkingWithFuseProductionComponent; });
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

var DocsWorkingWithFuseProductionComponent = /** @class */ (function () {
    function DocsWorkingWithFuseProductionComponent() {
    }
    DocsWorkingWithFuseProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-production',
            template: __webpack_require__(/*! ./production.component.html */ "./src/app/main/documentation/working-with-fuse/production/production.component.html"),
            styles: [__webpack_require__(/*! ./production.component.scss */ "./src/app/main/documentation/working-with-fuse/production/production.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseProductionComponent);
    return DocsWorkingWithFuseProductionComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Server</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <!-- SERVER -->\n        <div class=\"section-title\">Server</div>\n        <p>\n            While still in your work folder, run the following command in the console application:\n        </p>\n\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng serve\n                </textarea>\n            </fuse-highlight>\n        </div>\n\n        <p>\n            And that's it. Angular CLI will take care everything and start the Fuse.\n        </p>\n\n        <p>\n            You can check out your console application to get further information about the server. By default, it\n            will run on <b>http://localhost:4200</b> but it might change depending on your setup.\n        </p>\n\n        <p>\n            Also, there are other commands available in Fuse which may help you in your development. To see the complete\n            list of available npm commands, check the\n            <span class=\"text-boxed\">package.json</span>\n            file.\n        </p>\n        <!-- / SERVER -->\n\n        <!-- RELOADING THE SERVER -->\n        <div class=\"section-title\">Reloading the Server</div>\n        <p>\n            The\n            <span class=\"text-boxed\">ng serve</span>\n            command will watch your files and reload the page for you as you make changes.\n            But for some reason, if you need to manually restart the server, you can do it by pressing <b>Ctrl +\n            C</b> on your keyboard while in the console application and then run the following command once again:\n        </p>\n        <div>\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\n                <textarea #source hidden=\"hidden\">\n                    ng serve\n                </textarea>\n            </fuse-highlight>\n        </div>\n        <!-- / RELOADING THE SERVER -->\n\n        <p>\n            For more information about angular-cli commands, check the\n            <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">angular-cli</a>.\n        </p>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DocsWorkingWithFuseServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseServerComponent", function() { return DocsWorkingWithFuseServerComponent; });
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

var DocsWorkingWithFuseServerComponent = /** @class */ (function () {
    function DocsWorkingWithFuseServerComponent() {
    }
    DocsWorkingWithFuseServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/main/documentation/working-with-fuse/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.scss */ "./src/app/main/documentation/working-with-fuse/server/server.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseServerComponent);
    return DocsWorkingWithFuseServerComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Theme Layouts</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            Fuse comes with variety of different Theme Layouts which you can see and try them from the configuration\n            sidebar (Click on the animated, spinning cog button from the right side of your screen). These layouts are\n            accessible from <b>/src/app/layouts</b> directory and you can modify them however you like.\n        </p>\n\n        <p>\n            Each layout has its own options. Those options allow you to configure the layout elements such as Toolbar,\n            Footer and Navbar.\n        </p>\n\n        <div class=\"section-title\">Directory Structure</div>\n\n        <p>\n            Inside the <b>/layouts</b> directory, you will find the following structure:\n        </p>\n\n        <ul>\n            <li>\n                <b>/components</b>: Contains the layout elements such as Toolbar, Footer and Navbar.\n            </li>\n            <li>\n                <b>/vertical</b>: Contains the layout styles with vertical navigation option.\n            </li>\n            <li>\n                <b>/horizontal</b>: Contains the layout styles with horizontal navigation option.\n            </li>\n        </ul>\n\n        <p class=\"message-box info\">\n            Each layout loads the layout elements from <b>/components</b> directory. That means, any modifications\n            you will make to those elements, will be avilable acrosss the layouts.\n        </p>\n\n        <div class=\"section-title\">Configuring the Layout</div>\n\n        <p>\n            Fuse has a powerful layout system which allows you to configure and use a different layout per route. Each\n            route can have its own layout configuration meaning that it's very easy to have pages like login page where\n            there isn't any toolbar or navbar showing, without leaving the Fuse.\n        </p>\n\n        <p>\n            You can get more information about the <b>Fuse Config Service</b> and its usage from\n            <a routerLink=\"/documentation/services/config\">Config</a> documantation page.\n        </p>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DocsWorkingWithFuseThemeLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseThemeLayoutsComponent", function() { return DocsWorkingWithFuseThemeLayoutsComponent; });
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

var DocsWorkingWithFuseThemeLayoutsComponent = /** @class */ (function () {
    function DocsWorkingWithFuseThemeLayoutsComponent() {
    }
    DocsWorkingWithFuseThemeLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-theme-layouts',
            template: __webpack_require__(/*! ./theme-layouts.component.html */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html"),
            styles: [__webpack_require__(/*! ./theme-layouts.component.scss */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseThemeLayoutsComponent);
    return DocsWorkingWithFuseThemeLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Documentation</span>\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n            <span class=\"secondary-text\">Working with Fuse</span>\n        </div>\n\n        <div class=\"h2 mt-16\">Updating Fuse</div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            Due to the nature of apps, we cannot give any set instructions for updating Fuse. It heavily depends on your\n            project and it's up to you to update your code. However, there are couple points that we want to put forward\n            which might help you to keep Fuse updated.\n        </p>\n\n        <ul>\n            <li>\n                The most important one is not to touch the <b>/@fuse</b> directory but sometimes that is going to be\n                inevitable and in those cases, try to keep the modifications minimal.\n            </li>\n\n            <li>\n                Usually Angular and Angular Material libraries do some breaking changes and force our hands to change\n                things. In those cases, it's always good to check their official Changelogs to see what they did.\n                Usually they provide clear instructions and even helper tools to update your code.\n            </li>\n\n            <li>\n                Before starting your new project, <a href=\"http://www.withinpixels.com/themes/fuse-github\"\n                                                     target=\"_blank\">join our Github repo</a>, fork it and build your\n                app on top of that fork. This way, in the future, you can easily merge the changes from the main repo\n                onto your fork. This will require merging a lot of changes manually, but it's the best way to keep the\n                Fuse updated.\n            </li>\n        </ul>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DocsWorkingWithFuseUpdatingFuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseUpdatingFuseComponent", function() { return DocsWorkingWithFuseUpdatingFuseComponent; });
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

var DocsWorkingWithFuseUpdatingFuseComponent = /** @class */ (function () {
    function DocsWorkingWithFuseUpdatingFuseComponent() {
    }
    DocsWorkingWithFuseUpdatingFuseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-updating-fuse',
            template: __webpack_require__(/*! ./updating-fuse.component.html */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html"),
            styles: [__webpack_require__(/*! ./updating-fuse.component.scss */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseUpdatingFuseComponent);
    return DocsWorkingWithFuseUpdatingFuseComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/working-with-fuse.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/working-with-fuse.module.ts ***!
  \**********************************************************************************/
/*! exports provided: WorkingWithFuseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingWithFuseModule", function() { return WorkingWithFuseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/server/server.component */ "./src/app/main/documentation/working-with-fuse/server/server.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/production/production.component */ "./src/app/main/documentation/working-with-fuse/production/production.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/directory-structure/directory-structure.component */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/multi-language/multi-language.component */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_material_theming_material_theming_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/material-theming/material-theming.component */ "./src/app/main/documentation/working-with-fuse/material-theming/material-theming.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/page-layouts/page-layouts.component */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'server',
        component: app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__["DocsWorkingWithFuseServerComponent"]
    },
    {
        path: 'production',
        component: app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__["DocsWorkingWithFuseProductionComponent"]
    },
    {
        path: 'directory-structure',
        component: app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__["DocsWorkingWithFuseDirectoryStructureComponent"]
    },
    {
        path: 'updating-fuse',
        component: app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__["DocsWorkingWithFuseUpdatingFuseComponent"]
    },
    {
        path: 'multi-language',
        component: app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__["DocsWorkingWithFuseMultiLanguageComponent"]
    },
    {
        path: 'material-theming',
        component: app_main_documentation_working_with_fuse_material_theming_material_theming_component__WEBPACK_IMPORTED_MODULE_10__["DocsWorkingWithFuseMaterialThemingComponent"]
    },
    {
        path: 'theme-layouts',
        component: app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_11__["DocsWorkingWithFuseThemeLayoutsComponent"]
    },
    {
        path: 'page-layouts',
        component: app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_12__["DocsWorkingWithFusePageLayoutsComponent"]
    }
];
var WorkingWithFuseModule = /** @class */ (function () {
    function WorkingWithFuseModule() {
    }
    WorkingWithFuseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__["DocsWorkingWithFuseServerComponent"],
                app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__["DocsWorkingWithFuseProductionComponent"],
                app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__["DocsWorkingWithFuseDirectoryStructureComponent"],
                app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__["DocsWorkingWithFuseUpdatingFuseComponent"],
                app_main_documentation_working_with_fuse_material_theming_material_theming_component__WEBPACK_IMPORTED_MODULE_10__["DocsWorkingWithFuseMaterialThemingComponent"],
                app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__["DocsWorkingWithFuseMultiLanguageComponent"],
                app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_11__["DocsWorkingWithFuseThemeLayoutsComponent"],
                app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_12__["DocsWorkingWithFusePageLayoutsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], WorkingWithFuseModule);
    return WorkingWithFuseModule;
}());



/***/ })

}]);
//# sourceMappingURL=working-with-fuse-working-with-fuse-module.js.map