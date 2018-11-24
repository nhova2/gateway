(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-animateur-alertes-animateur-alertes-module"],{

/***/ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-groups-a\" fxLayout=\"column\" fxFlex=\"100\" >\r\n    <div class=\"container\">\r\n    <div id=\"animalertes\" class=\"page-layout simple\" >\r\n            <div fxLayout=\"row\"  fxLayoutGap=\"50px\" >\r\n                <mat-nav-list class=\"articles-list mat-elevation-z4\" *ngFor=\"let category of animAlertesdata_line1\">\r\n                    <h3 mat-subheader>{{category.title}}</h3>\r\n                    <a mat-list-item *ngFor=\"let article of category.featuredArticles\">\r\n                        {{ article.title }} ({{ article.pourcent }} % ) <mat-icon class=\"secondary-text mr-8\" [style.color]=\"article.color\"> {{ article.icone }} </mat-icon>\r\n                    </a>\r\n                    <a mat-list-item class=\"see-all-link accent-fg\">\r\n                        Voir plus ({{category.articlesCount}})\r\n                    </a>\r\n                </mat-nav-list>\r\n            </div>\r\n      </div></div>\r\n      <div>\r\n          <br>\r\n          <br>\r\n          <br>\r\n      </div>\r\n      <div class=\"container\">\r\n      <div id=\"animalertes\" class=\"page-layout simple\">\r\n            <div fxLayout=\"row\"  fxLayoutGap=\"50px\">\r\n                <mat-nav-list class=\"articles-list mat-elevation-z4\" *ngFor=\"let category of animAlertesdata_line2\">\r\n                    <h3 mat-subheader>{{category.title}}</h3>\r\n                    <a mat-list-item *ngFor=\"let article of category.featuredArticles\">\r\n                        {{ article.title }} ({{ article.pourcent }} % ) <mat-icon class=\"secondary-text mr-8\" [style.color]=\"article.color\"> {{ article.icone }} </mat-icon>\r\n                    </a>\r\n                    <a mat-list-item class=\"see-all-link accent-fg\">\r\n                        Voir plus ({{category.articlesCount}})\r\n                    </a>\r\n                </mat-nav-list>\r\n            </div>\r\n        </div></div>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#box-groups-a .header {\n  flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media screen and (max-width: 599px) {\n    #box-groups-a .header {\n      height: 240px;\n      padding: 16px; } }\n#box-groups-a .header .hero-text h1 {\n    color: white;\n    font-size: 48px;\n    font-weight: 400;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #box-groups-a .header .hero-text h1 {\n        font-size: 24px; } }\n#box-groups-a .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.075em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #box-groups-a .header .hero-text h3 {\n        font-size: 14px; } }\n#box-groups-a .container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n#box-groups-a .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n#box-groups-a .content .articles-list {\n    width: 400px;\n    min-width: 400px;\n    margin: 16px;\n    padding: 16px; }\n@media (max-width: 599px) {\n      #box-groups-a .content .articles-list {\n        min-width: 300px;\n        margin: 16px 0; } }\n#box-groups-a .content .articles-list .mat-list-item {\n      text-decoration: none !important; }\n#box-groups-a .content .articles-list .see-all-link {\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AlertesAnimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertesAnimComponent", function() { return AlertesAnimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/article/article.component */ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.ts");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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






var AlertesAnimComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AnimHomeService} _animHomeService
     * @param {MatDialog} _matDialog
     */
    function AlertesAnimComponent(_animHomeService, _matDialog, parCrud) {
        this._animHomeService = _animHomeService;
        this._matDialog = _matDialog;
        this.parCrud = parCrud;
        this.animAlertesdata_line1 = [
            {
                title: 'Fin de Stock',
                path: 'assets/img/',
                articlesCount: '5',
                featuredArticles: [
                    {
                        title: 'Nom Produit (Magasin)',
                        pourcent: '85',
                        icone: 'layers',
                        color: 'orange'
                    },
                    {
                        title: 'Nom Produit (Magasin)',
                        pourcent: '85',
                        icone: 'layers',
                        color: 'green'
                    },
                    {
                        title: 'Nom Produit (Magasin)',
                        pourcent: '85',
                        icone: 'layers',
                        color: 'green'
                    }
                ]
            },
            {
                title: 'Echecs Paiements',
                path: 'assets/img/',
                articlesCount: '7',
                featuredArticles: [
                    {
                        title: 'No Commande (Acheteur)',
                        pourcent: '85',
                        icone: 'credit_card',
                        color: 'orange'
                    },
                    {
                        title: 'No Commande (Acheteur)',
                        pourcent: '85',
                        icone: 'credit_card',
                        color: 'green'
                    },
                    {
                        title: 'No Commande (Fournisseur)',
                        pourcent: '85',
                        icone: 'credit_card',
                        color: 'orange'
                    }
                ]
            },
            {
                title: 'Retard de Livraison',
                path: 'assets/img/',
                articlesCount: '15',
                featuredArticles: [
                    {
                        title: 'No Livraison (Acheteur)',
                        pourcent: '85',
                        icone: 'local_shipping',
                        color: 'red'
                    },
                    {
                        title: 'No Livraison (Acheteur)',
                        pourcent: '85',
                        icone: 'local_shipping',
                        color: 'orange'
                    },
                    {
                        title: 'No Livraison (Acheteur)',
                        pourcent: '85',
                        icone: 'local_shipping',
                        color: 'green'
                    }
                ]
            },
            {
                title: 'Demande Pret',
                path: 'assets/img/',
                articlesCount: '15',
                featuredArticles: [
                    {
                        title: 'Prenom Nom (Acheteur)',
                        pourcent: '85',
                        icone: 'monetization_on',
                        color: 'orange'
                    },
                    {
                        title: 'Prenom Nom (Acheteur)',
                        pourcent: '85',
                        icone: 'monetization_on',
                        color: 'green'
                    },
                    {
                        title: 'Prenom Nom (Fournisseur)',
                        pourcent: '85',
                        icone: 'monetization_on',
                        color: 'green'
                    }
                ]
            }
        ];
        this.animAlertesdata_line2 = [
            {
                title: 'Plafond Ligne de Crédits',
                path: 'assets/img/',
                articlesCount: '5',
                featuredArticles: [
                    {
                        title: 'No Ligne Crédit 1',
                        pourcent: '85',
                        icone: 'account_balance',
                        color: 'green'
                    },
                    {
                        title: 'No Ligne Crédit 2',
                        pourcent: '85',
                        icone: 'account_balance',
                        color: 'green'
                    },
                    {
                        title: 'No Ligne Crédit 3',
                        pourcent: '85',
                        icone: 'account_balance',
                        color: 'red'
                    }
                ]
            },
            {
                title: 'Plafond Ligne de Dépots',
                path: 'assets/img/',
                articlesCount: '7',
                featuredArticles: [
                    {
                        title: 'No Ligne Dépot 1',
                        pourcent: '85',
                        icone: 'receipt',
                        color: 'orange'
                    },
                    {
                        title: 'No Ligne Dépot 2',
                        pourcent: '85',
                        icone: 'receipt',
                        color: 'green'
                    },
                    {
                        title: 'No Ligne Dépot 3',
                        pourcent: '85',
                        icone: 'receipt',
                        color: 'green'
                    }
                ]
            },
            {
                title: 'Retard Remboursement Pret',
                path: 'assets/img/',
                articlesCount: '15',
                featuredArticles: [
                    {
                        title: 'Prenom Nom 1',
                        pourcent: '85',
                        icone: 'assessment',
                        color: 'red'
                    },
                    {
                        title: 'Prenom Nom 2',
                        pourcent: '85',
                        icone: 'assessment',
                        color: 'green'
                    },
                    {
                        title: 'Prenom Nom 3',
                        pourcent: '85',
                        icone: 'assessment',
                        color: 'green'
                    }
                ]
            },
            {
                title: 'Validation Produit',
                path: 'assets/img/',
                articlesCount: '15',
                featuredArticles: [
                    {
                        title: 'Nom Produit (Boutique)',
                        pourcent: '85',
                        icone: 'card_giftcard',
                        color: 'green'
                    },
                    {
                        title: 'Nom Produit (Boutique)',
                        pourcent: '85',
                        icone: 'card_giftcard',
                        color: 'orange'
                    },
                    {
                        title: 'Nom Produit (Boutique)',
                        pourcent: '85',
                        icone: 'card_giftcard',
                        color: 'red'
                    }
                ]
            }
        ];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.crudComp = this.parCrud;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    AlertesAnimComponent.prototype.ngOnInit = function () {
        console.log("AnimAlertesComponent :ngOnInit");
        /*this._animHomeService.onAnimAlertesChanged
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(response => {
                    this.animAlertes = response;
                });
            */
        /*this._animHomeService.onAnimAlertesChanged
             .pipe(takeUntil(this._unsubscribeAll))
             .subscribe(response => {
                 this.animAlertes = response;
             });
             console.log("AnimAlertesComponent :ngOnInit end");*/
        this.animAlertes1 = this.animAlertesdata_line1;
        this.animAlertes2 = this.animAlertesdata_line2;
    };
    /**
     * On destroy
     */
    AlertesAnimComponent.prototype.ngOnDestroy = function () {
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
    AlertesAnimComponent.prototype.readArticle = function (article) {
        this._matDialog.open(_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_1__["AnimAlertesArticleComponent"], {
            panelClass: 'knowledgebase-article-dialog',
            data: { article: article }
        });
    };
    AlertesAnimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alertes-anim',
            template: __webpack_require__(/*! ./alertes-anim.component.html */ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.html"),
            styles: [__webpack_require__(/*! ./alertes-anim.component.scss */ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_anim_home_service__WEBPACK_IMPORTED_MODULE_2__["AnimHomeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_5__["CrudPopupComponent"]])
    ], AlertesAnimComponent);
    return AlertesAnimComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row>\r\n            <span class=\"title dialog-title\">{{_data.article.title}}</span>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n        <div [innerHTML]=\"_data.article.content\"></div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n        <button mat-button (click)=\"matDialogRef.close()\" class=\"mat-accent\" aria-label=\"Close\">\r\n            CLOSE\r\n        </button>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.animalertes-article-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .animalertes-article-dialog {\n      width: 100%; } }\n.animalertes-article-dialog .mat-dialog-container {\n    padding: 0; }\n.animalertes-article-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnimAlertesArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimAlertesArticleComponent", function() { return AnimAlertesArticleComponent; });
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


var AnimAlertesArticleComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<AnimALertesArticleComponent>} matDialogRef
     * @param _data
     */
    function AnimAlertesArticleComponent(matDialogRef, _data) {
        this.matDialogRef = matDialogRef;
        this._data = _data;
    }
    AnimAlertesArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'knowledge-base-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AnimAlertesArticleComponent);
    return AnimAlertesArticleComponent;
}());



/***/ }),

/***/ "./src/app/espace/animateur/alertes/animateur-alertes.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/espace/animateur/alertes/animateur-alertes.module.ts ***!
  \**********************************************************************/
/*! exports provided: routes, AlertesAnimateurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertesAnimateurModule", function() { return AlertesAnimateurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alertes_anim_alertes_anim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertes-anim/alertes-anim.component */ "./src/app/espace/animateur/alertes/alertes-anim/alertes-anim.component.ts");
/* harmony import */ var _alertes_anim_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alertes-anim/dialogs/article/article.component */ "./src/app/espace/animateur/alertes/alertes-anim/dialogs/article/article.component.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anim_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../anim-home.service */ "./src/app/espace/animateur/anim-home.service.ts");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _alertes_anim_alertes_anim_component__WEBPACK_IMPORTED_MODULE_2__["AlertesAnimComponent"], pathMatch: 'full' }
];
var AlertesAnimateurModule = /** @class */ (function () {
    function AlertesAnimateurModule() {
    }
    AlertesAnimateurModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            ],
            declarations: [_alertes_anim_alertes_anim_component__WEBPACK_IMPORTED_MODULE_2__["AlertesAnimComponent"], _alertes_anim_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_3__["AnimAlertesArticleComponent"]],
            providers: [_anim_home_service__WEBPACK_IMPORTED_MODULE_9__["AnimHomeService"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_10__["CrudPopupComponent"]]
        })
    ], AlertesAnimateurModule);
    return AlertesAnimateurModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-animateur-alertes-animateur-alertes-module.js.map