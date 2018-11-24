(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"],{

/***/ "./src/app/main/apps/mail/dialogs/compose/compose.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/mail/dialogs/compose/compose.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar class=\"mat-accent m-0\">\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">New Message</span>\n            <button mat-icon-button (click)=\"matDialogRef.close()\" aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"composeForm\" [formGroup]=\"composeForm\" class=\"compose-form\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field>\n                <input matInput name=\"from\"\n                       placeholder=\"From\"\n                       formControlName=\"from\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"to\"\n                       placeholder=\"To\"\n                       formControlName=\"to\"\n                       type=\"email\" required>\n            </mat-form-field>\n\n            <div class=\"show-hide-extra-fields\" (click)=\"toggleExtraToFields()\">\n                <span [fxShow]=\"!showExtraToFields\">Show CC & BCC</span>\n                <span [fxShow]=\"showExtraToFields\">Hide CC & BCC</span>\n            </div>\n\n            <mat-form-field [fxShow]=\"showExtraToFields\">\n                <input matInput\n                       name=\"cc\"\n                       placeholder=\"Cc\"\n                       formControlName=\"cc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field [fxShow]=\"showExtraToFields\">\n                <input matInput\n                       name=\"bcc\"\n                       placeholder=\"Bcc\"\n                       formControlName=\"bcc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"subject\"\n                       placeholder=\"Subject\"\n                       formControlName=\"subject\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <textarea matInput name=\"message\"\n                          placeholder=\"Message\"\n                          formControlName=\"message\"\n                          rows=\"6\">\n                </textarea>\n            </mat-form-field>\n\n            <div class=\"attachment-list\">\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-2.doc</span>\n                        <span class=\"size\">(12 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-1.jpg</span>\n                        <span class=\"size\">(350 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            <button mat-raised-button\n                    (click)=\"matDialogRef.close(['send',composeForm])\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"composeForm.invalid\"\n                    aria-label=\"SAVE\">\n                SEND\n            </button>\n\n            <button mat-icon-button matTooltip=\"Attach a file\">\n                <mat-icon>attach_file</mat-icon>\n            </button>\n        </div>\n\n        <button mat-icon-button (click)=\"matDialogRef.close(['delete',composeForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail/dialogs/compose/compose.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/mail/dialogs/compose/compose.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  .mail-compose-dialog {\n    width: 100%; } }\n@media (min-width: 600px) {\n  .mail-compose-dialog {\n    width: 640px; } }\n.mail-compose-dialog .mat-dialog-container {\n  padding: 0; }\n.mail-compose-dialog .mat-dialog-container .compose-form .mat-form-field {\n    width: 100%; }\n.mail-compose-dialog .mat-dialog-container .compose-form .show-hide-extra-fields {\n    text-align: right;\n    cursor: pointer;\n    font-size: 12px; }\n.mail-compose-dialog .mat-dialog-container .compose-form .attachment-list {\n    font-size: 13px;\n    padding-top: 16px; }\n.mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment {\n      background-color: rgba(0, 0, 0, 0.08);\n      border: 1px solid rgba(0, 0, 0, 0.16);\n      padding-left: 16px;\n      margin-top: 8px;\n      border-radius: 2px; }\n.mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename {\n        font-weight: 500; }\n.mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child {\n        margin-bottom: 0; }\n.mail-compose-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/dialogs/compose/compose.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/mail/dialogs/compose/compose.component.ts ***!
  \*********************************************************************/
/*! exports provided: MailComposeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeDialogComponent", function() { return MailComposeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var MailComposeDialogComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<MailComposeDialogComponent>} matDialogRef
     * @param _data
     */
    function MailComposeDialogComponent(matDialogRef, _data) {
        this.matDialogRef = matDialogRef;
        this._data = _data;
        // Set the defaults
        this.composeForm = this.createComposeForm();
        this.showExtraToFields = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Create compose form
     *
     * @returns {FormGroup}
     */
    MailComposeDialogComponent.prototype.createComposeForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: 'johndoe@creapond.com',
                disabled: true
            }),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    /**
     * Toggle extra to fields
     */
    MailComposeDialogComponent.prototype.toggleExtraToFields = function () {
        this.showExtraToFields = !this.showExtraToFields;
    };
    MailComposeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-compose',
            template: __webpack_require__(/*! ./compose.component.html */ "./src/app/main/apps/mail/dialogs/compose/compose.component.html"),
            styles: [__webpack_require__(/*! ./compose.component.scss */ "./src/app/main/apps/mail/dialogs/compose/compose.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MailComposeDialogComponent);
    return MailComposeDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/i18n/en.ts":
/*!*******************************************!*\
  !*** ./src/app/main/apps/mail/i18n/en.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        'MAIL': {
            'COMPOSE': 'COMPOSE',
            'FOLDERS': 'FOLDERS',
            'FILTERS': 'FILTERS',
            'LABELS': 'LABELS',
            'NO_MESSAGES': 'There are no messages!',
            'SELECT_A_MESSAGE_TO_READ': 'Select a message to read',
            'SEARCH_PLACEHOLDER': 'Search for an e-mail or contact'
        }
    }
};


/***/ }),

/***/ "./src/app/main/apps/mail/i18n/tr.ts":
/*!*******************************************!*\
  !*** ./src/app/main/apps/mail/i18n/tr.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var locale = {
    lang: 'tr',
    data: {
        'MAIL': {
            'COMPOSE': 'YENİ E-POSTA',
            'FOLDERS': 'KLASÖRLER',
            'FILTERS': 'FİLTRELER',
            'LABELS': 'ETİKETLER',
            'NO_MESSAGES': 'Mesajiniz bulunmamakta!',
            'SELECT_A_MESSAGE_TO_READ': 'Okumak için bir mesaj seçin',
            'SEARCH_PLACEHOLDER': 'E-mail yada bir kişi arayın'
        }
    }
};


/***/ }),

/***/ "./src/app/main/apps/mail/mail-details/mail-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-details/mail-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!mail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-128 mb-16 select-message-icon hint-text\"\n              [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\n        email\n    </mat-icon>\n    <span class=\"select-message-text hint-text\" [@animate]=\"{value:'*',params:{delay:'400ms'}}\">\n        <span>{{ 'MAIL.SELECT_A_MESSAGE_TO_READ' | translate }}</span>\n    </span>\n</div>\n\n<div *ngIf=\"mail\">\n\n    <div class=\"mail-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div>\n            <div class=\"subject\" flex>{{mail.subject}}</div>\n\n            <div class=\"labels\" fxLayout=\"row wrap\">\n                <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"label-color\" [ngStyle]=\"{'background-color': labels | getById:labelId:'color'}\"></div>\n                    <div class=\"label-title\">{{labels | getById:labelId:'title'}}</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon class=\"amber-fg\" *ngIf=\"mail.starred\">star</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!mail.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon class=\"red-fg\" *ngIf=\"mail.important\">label</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!mail.important\">label_outline</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mail-content\">\n\n        <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div>\n                        <img *ngIf=\"mail.from.avatar\" alt=\"{{mail.from.name}}\"\n                             src=\"{{mail.from.avatar}}\" class=\"avatar\"/>\n\n                        <div *ngIf=\"!mail.from.avatar\" class=\"avatar\" ms-random-class=\"vm.colors\">\n                            {{mail.from.name[0]}}\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                        <div class=\"name\">\n                            {{mail.from.name}}\n                        </div>\n\n                        <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"to-text\">to</div>\n                            <div>{{mail.to[0].name}}</div>\n                        </div>\n                    </div>\n                </div>\n\n                <a class=\"toggle-details\" (click)=\"showDetails = !showDetails\">\n                    <span *ngIf=\"!showDetails\">Show Details</span>\n                    <span *ngIf=\"showDetails\">Hide Details</span>\n                </a>\n\n                <div *ngIf=\"showDetails\" class=\"details\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div fxLayout=\"column\">\n                        <span class=\"title\">From:</span>\n                        <span class=\"title\">To:</span>\n                        <span class=\"title\">Date:</span>\n                    </div>\n\n                    <div fxLayout=\"column\">\n                        <span class=\"detail\">{{mail.from.email}}</span>\n                        <span class=\"detail\">{{mail.to[0].email}}</span>\n                        <span class=\"detail\">{{mail.time}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" (click)=\"$event.stopPropagation()\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"Reply\">\n                    <mat-icon>reply</mat-icon>\n                    <span>Reply</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Forward\">\n                    <mat-icon>forward</mat-icon>\n                    <span>Forward</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Print\">\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                </button>\n            </mat-menu>\n        </div>\n\n        <div [innerHTML]=\"mail.message\"></div>\n\n    </div>\n\n    <div *ngIf=\"mail.attachments\" class=\"mail-attachments\">\n\n        <div class=\"title\">\n            <span>Attachments</span>\n            ({{mail.attachments.length}})\n        </div>\n\n        <div class=\"attachment-list\" fxLayout=\"row wrap\">\n\n            <div class=\"attachment\" fxLayout=\"column\"\n                 *ngFor=\"let attachment of mail.attachments\">\n\n                <img class=\"preview\" src=\"{{attachment.preview}}\">\n\n                <div fxLayout=\"column\">\n                    <a href=\"#\" onclick=\"event.preventDefault()\">View</a>\n                    <a href=\"#\" onclick=\"event.preventDefault()\">Download</a>\n                    <div class=\"size\">({{attachment.size}})</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-details/mail-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-details/mail-details.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\nmail-details .select-message-text {\n    font-size: 24px;\n    font-weight: 300; }\nmail-details .mail-header {\n    padding-bottom: 16px;\n    border-bottom: 1px solid; }\nmail-details .mail-header .actions {\n      min-width: 88px; }\nmail-details .mail-header .subject {\n      font-size: 17px;\n      font-weight: 500; }\nmail-details .mail-header .label {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 4px 4px 4px 0;\n      padding: 3px 8px; }\nmail-details .mail-header .label .label-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\nmail-details .mail-content {\n    padding: 24px 0; }\nmail-details .mail-content .to .to-text {\n      margin-right: 4px;\n      text-transform: lowercase; }\nmail-details .mail-content .info {\n      padding-bottom: 16px; }\nmail-details .mail-content .info .avatar {\n        margin-right: 16px; }\nmail-details .mail-content .info .name {\n        margin-right: 8px;\n        font-weight: 500; }\nmail-details .mail-content .info .toggle-details {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: underline;\n        padding-top: 16px;\n        cursor: pointer;\n        font-weight: 500; }\nmail-details .mail-content .info .details {\n        padding-top: 8px; }\nmail-details .mail-content .info .details .title {\n          font-weight: 500;\n          margin-right: 6px; }\nmail-details .mail-attachments {\n    padding: 24px 0;\n    border-top: 1px solid; }\nmail-details .mail-attachments .title {\n      margin-bottom: 16px;\n      font-weight: 500; }\nmail-details .mail-attachments .attachment .preview {\n      width: 100px;\n      margin: 0 16px 8px 0; }\nmail-details .mail-attachments .attachment .link {\n      margin-bottom: 2px; }\nmail-details .mail-attachments .attachment .size {\n      font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-details/mail-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-details/mail-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: MailDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailsComponent", function() { return MailDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailDetailsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    function MailDetailsComponent(_mailService) {
        this._mailService = _mailService;
        // Set the defaults
        this.showDetails = false;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update the current mail
        this._mailService.onCurrentMailChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (currentMail) {
            _this.mail = currentMail;
        });
        // Subscribe to update on label change
        this._mailService.onLabelsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (labels) {
            _this.labels = labels;
        });
    };
    /**
     * On destroy
     */
    MailDetailsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle star
     *
     * @param event
     */
    MailDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this._mailService.updateMail(this.mail);
    };
    /**
     * Toggle important
     *
     * @param event
     */
    MailDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this._mailService.updateMail(this.mail);
    };
    MailDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-details',
            template: __webpack_require__(/*! ./mail-details.component.html */ "./src/app/main/apps/mail/mail-details/mail-details.component.html"),
            styles: [__webpack_require__(/*! ./mail-details.component.scss */ "./src/app/main/apps/mail/mail-details/mail-details.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]])
    ], MailDetailsComponent);
    return MailDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-checkbox [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\"\n                  (click)=\"$event.stopPropagation();\"></mat-checkbox>\n\n    <div class=\"info\" fxFlex FlexLayout=\"column\">\n\n        <div class=\"row-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"name\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                <img class=\"avatar\" *ngIf=\"mail.from?.avatar\" alt=\"{{mail.from?.name}}\" src=\"{{mail.from?.avatar}}\"/>\n                <div class=\"avatar accent\" *ngIf=\"!mail.from?.avatar\">{{mail.from?.name[0]}}</div>\n                <span class=\"text-truncate\" *ngIf=\"mail?.from\">{{mail.from?.name}}</span>\n                <mat-icon *ngIf=\"mail.hasAttachments\">attachment</mat-icon>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"time\">{{mail.time}}</div>\n\n            </div>\n\n        </div>\n\n        <div class=\"row-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div class=\"subject text-truncate\">\n                    {{mail.subject}}\n                </div>\n\n                <div class=\"message text-truncate\" *ngIf=\"mail?.message\">\n                    {{mail.message | htmlToPlaintext | slice:0:180}}{{mail.message.length > 180 ? '...' : ''}}\n                </div>\n\n                <div class=\"labels\" fxLayout=\"row wrap\" fxHide fxShow.gt-sm>\n                    <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                         fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"label-color\"\n                             [ngStyle]=\"{'background-color': labels | getById:labelId:'color'}\"></div>\n                        <div class=\"label-title\">{{labels | getById:labelId:'title'}}</div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-list-item {\n  flex-shrink: 0;\n  position: relative;\n  padding: 16px 24px;\n  border-bottom: 1px solid;\n  cursor: pointer; }\nmail-list-item.unread .info .name {\n    font-weight: 700; }\nmail-list-item.unread .info .row-2 .subject {\n    font-weight: 700; }\nmail-list-item .info {\n    overflow: hidden;\n    width: 0;\n    margin-left: 16px;\n    position: relative; }\nmail-list-item .info .row-1 {\n      margin-bottom: 8px; }\nmail-list-item .info .row-1 .name {\n        font-size: 15px;\n        font-weight: 500; }\nmail-list-item .info .row-1 .name .avatar {\n          min-width: 32px;\n          width: 32px;\n          height: 32px;\n          line-height: 32px; }\nmail-list-item .info .row-1 .actions {\n        margin-left: 4px; }\nmail-list-item .info .row-1 .actions .mat-icon-button {\n          width: 32px;\n          height: 32px;\n          line-height: 1; }\nmail-list-item .info .row-2 .subject,\n    mail-list-item .info .row-2 .message {\n      width: 100%; }\nmail-list-item .info .row-2 .message {\n      position: relative; }\nmail-list-item .info .row-2 .labels {\n      margin-top: 8px; }\nmail-list-item .info .row-2 .labels .label {\n        font-size: 11px;\n        border-radius: 2px;\n        margin: 0 4px 0 0;\n        padding: 3px 8px; }\nmail-list-item .info .row-2 .labels .label .label-color {\n          width: 8px;\n          height: 8px;\n          margin-right: 8px;\n          border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MailListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListItemComponent", function() { return MailListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/mail/mail.model */ "./src/app/main/apps/mail/mail.model.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailListItemComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    function MailListItemComponent(_mailService) {
        this._mailService = _mailService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.mail = new app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_3__["Mail"](this.mail);
        // Subscribe to update on selected mail change
        this._mailService.onSelectedMailsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedMails) {
            _this.selected = false;
            if (selectedMails.length > 0) {
                for (var _i = 0, selectedMails_1 = selectedMails; _i < selectedMails_1.length; _i++) {
                    var mail = selectedMails_1[_i];
                    if (mail.id === _this.mail.id) {
                        _this.selected = true;
                        break;
                    }
                }
            }
        });
        // Subscribe to update on label change
        this._mailService.onLabelsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (labels) {
            _this.labels = labels;
        });
    };
    /**
     * On destroy
     */
    MailListItemComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On selected change
     */
    MailListItemComponent.prototype.onSelectedChange = function () {
        this._mailService.toggleSelectedMail(this.mail.id);
    };
    /**
     * Toggle star
     *
     * @param event
     */
    MailListItemComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this._mailService.updateMail(this.mail);
    };
    /**
     * Toggle Important
     *
     * @param event
     */
    MailListItemComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this._mailService.updateMail(this.mail);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_3__["Mail"])
    ], MailListItemComponent.prototype, "mail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], MailListItemComponent.prototype, "selected", void 0);
    MailListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-list-item',
            template: __webpack_require__(/*! ./mail-list-item.component.html */ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.html"),
            styles: [__webpack_require__(/*! ./mail-list-item.component.scss */ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"]])
    ], MailListItemComponent);
    return MailListItemComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mails.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-messages-text hint-text\">{{ 'MAIL.NO_MESSAGES' | translate }}</span>\n</div>\n\n<div class=\"mail-list\" [@animateStagger]=\"{value:'50'}\">\n    <mail-list-item matRipple *ngFor=\"let mail of mails\" [mail]=\"mail\" (click)=\"readMail(mail.id)\"\n                    [ngClass]=\"{'current-mail':mail?.id == currentMail?.id}\"\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mail-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mail-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0;\n  border-right: 1px solid;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  mail-list .no-messages-text {\n    font-size: 24px;\n    font-weight: 300; }\n  mail-list .mail-list {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex: 1; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail-list/mail-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/mail/mail-list/mail-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MailListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {MailService} _mailService
     * @param {Location} _location
     */
    function MailListComponent(_activatedRoute, _mailService, _location) {
        this._activatedRoute = _activatedRoute;
        this._mailService = _mailService;
        this._location = _location;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update mails on changes
        this._mailService.onMailsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (mails) {
            _this.mails = mails;
        });
        // Subscribe to update current mail on changes
        this._mailService.onCurrentMailChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (currentMail) {
            if (!currentMail) {
                // Set the current mail id to null to deselect the current mail
                _this.currentMail = null;
                // Handle the location changes
                var labelHandle = _this._activatedRoute.snapshot.params.labelHandle, filterHandle = _this._activatedRoute.snapshot.params.filterHandle, folderHandle = _this._activatedRoute.snapshot.params.folderHandle;
                if (labelHandle) {
                    _this._location.go('apps/mail/label/' + labelHandle);
                }
                else if (filterHandle) {
                    _this._location.go('apps/mail/filter/' + filterHandle);
                }
                else {
                    _this._location.go('apps/mail/' + folderHandle);
                }
            }
            else {
                _this.currentMail = currentMail;
            }
        });
    };
    /**
     * On destroy
     */
    MailListComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Read mail
     *
     * @param mailId
     */
    MailListComponent.prototype.readMail = function (mailId) {
        var labelHandle = this._activatedRoute.snapshot.params.labelHandle, filterHandle = this._activatedRoute.snapshot.params.filterHandle, folderHandle = this._activatedRoute.snapshot.params.folderHandle;
        if (labelHandle) {
            this._location.go('apps/mail/label/' + labelHandle + '/' + mailId);
        }
        else if (filterHandle) {
            this._location.go('apps/mail/filter/' + filterHandle + '/' + mailId);
        }
        else {
            this._location.go('apps/mail/' + folderHandle + '/' + mailId);
        }
        // Set current mail
        this._mailService.setCurrentMail(mailId);
    };
    MailListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-list',
            template: __webpack_require__(/*! ./mail-list.component.html */ "./src/app/main/apps/mail/mail-list/mail-list.component.html"),
            styles: [__webpack_require__(/*! ./mail-list.component.scss */ "./src/app/main/apps/mail/mail-list/mail-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], MailListComponent);
    return MailListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/apps/mail/mail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mail\" class=\"page-layout carded left-sidebar inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"mail-main-sidebar\" position=\"left\" lockedOpen=\"gt-md\">\n        <mail-main-sidebar></mail-main-sidebar>\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('mail-main-sidebar')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div class=\"search\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon>search</mat-icon>\n                    <input [formControl]=\"searchInput\" [placeholder]=\"'MAIL.SEARCH_PLACEHOLDER' | translate\" fxFlex>\n                </div>\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\" [ngClass]=\"{'current-mail-selected':currentMail}\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-checkbox (click)=\"toggleSelectAll()\" [checked]=\"hasSelectedMails\"\n                                  [indeterminate]=\"isIndeterminate\"></mat-checkbox>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item (click)=\"selectMails()\">All</button>\n                        <button mat-menu-item (click)=\"deselectMails()\">None</button>\n                        <button mat-menu-item (click)=\"selectMails('read', true)\">Read</button>\n                        <button mat-menu-item (click)=\"selectMails('read', false)\">Unread</button>\n                        <button mat-menu-item (click)=\"selectMails('starred', true)\">Starred</button>\n                        <button mat-menu-item (click)=\"selectMails('starred', false)\">Unstarred</button>\n                        <button mat-menu-item (click)=\"selectMails('important', true)\">Important</button>\n                        <button mat-menu-item (click)=\"selectMails('important', false)\">Unimportant</button>\n                    </mat-menu>\n\n                    <div class=\"toolbar-separator\" *ngIf=\"hasSelectedMails\"></div>\n\n                    <button mat-icon-button (click)=\"setFolderOnSelectedMails(4)\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">delete</mat-icon>\n                    </button>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"folderMenu\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">folder</mat-icon>\n                    </button>\n                    <mat-menu #folderMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let folder of folders\"\n                                (click)=\"setFolderOnSelectedMails(folder.id)\">{{folder.title}}\n                        </button>\n                    </mat-menu>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">label</mat-icon>\n                    </button>\n                    <mat-menu #labelMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let label of labels\"\n                                (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}\n                        </button>\n                    </mat-menu>\n                </div>\n\n                <div *ngIf=\"currentMail\" fxHide.gt-xs>\n                    <button mat-icon-button (click)=\"deselectCurrentMail()\">\n                        <mat-icon class=\"secondary-text\">arrow_back</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content\" fxLayout=\"row\">\n\n                <mail-list fusePerfectScrollbar fxFlex></mail-list>\n                <mail-details fusePerfectScrollbar fxFlex></mail-details>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/apps/mail/mail.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail {\n  width: 100%; }\nmail .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\nmail .center .header .search-wrapper .sidebar-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      border-radius: 0;\n      border-right: 1px solid; }\nmail .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\nmail .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        border: none;\n        outline: none; }\n@media screen and (max-width: 599px) {\n    mail .center .content-card mail-list {\n      border-right: none; }\n    mail .center .content-card mail-list,\n    mail .center .content-card mail-details {\n      flex: 1 0 100%; }\n    mail .center .content-card mail-details {\n      display: none !important; }\n    mail .center .content-card.current-mail-selected .toolbar {\n      padding-left: 16px !important; }\n      mail .center .content-card.current-mail-selected .toolbar .mail-selection {\n        display: none !important; }\n    mail .center .content-card.current-mail-selected .content mail-list {\n      display: none !important; }\n    mail .center .content-card.current-mail-selected .content mail-details {\n      display: flex !important; } }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/mail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/apps/mail/mail.component.ts ***!
  \**************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
/* harmony import */ var app_main_apps_mail_i18n_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/mail//i18n/en */ "./src/app/main/apps/mail/i18n/en.ts");
/* harmony import */ var app_main_apps_mail_i18n_tr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/mail//i18n/tr */ "./src/app/main/apps/mail/i18n/tr.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MailComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailService} _mailService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function MailComponent(_mailService, _fuseSidebarService, _fuseTranslationLoaderService) {
        this._mailService = _mailService;
        this._fuseSidebarService = _fuseSidebarService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        // Load the translations
        this._fuseTranslationLoaderService.loadTranslations(app_main_apps_mail_i18n_en__WEBPACK_IMPORTED_MODULE_7__["locale"], app_main_apps_mail_i18n_tr__WEBPACK_IMPORTED_MODULE_8__["locale"]);
        // Set the defaults
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mailService.onSelectedMailsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedMails) {
            setTimeout(function () {
                _this.hasSelectedMails = selectedMails.length > 0;
                _this.isIndeterminate = (selectedMails.length !== _this._mailService.mails.length && selectedMails.length > 0);
            }, 0);
        });
        this._mailService.onFoldersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (folders) {
            _this.folders = _this._mailService.folders;
        });
        this._mailService.onFiltersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (folders) {
            _this.filters = _this._mailService.filters;
        });
        this._mailService.onLabelsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (labels) {
            _this.labels = _this._mailService.labels;
        });
        this._mailService.onCurrentMailChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (currentMail) {
            if (!currentMail) {
                _this.currentMail = null;
            }
            else {
                _this.currentMail = currentMail;
            }
        });
        this.searchInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this._mailService.onSearchTextChanged.next(searchText);
        });
    };
    /**
     * On destroy
     */
    MailComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle select all
     */
    MailComponent.prototype.toggleSelectAll = function () {
        this._mailService.toggleSelectAll();
    };
    /**
     * Select mails
     *
     * @param filterParameter
     * @param filterValue
     */
    MailComponent.prototype.selectMails = function (filterParameter, filterValue) {
        this._mailService.selectMails(filterParameter, filterValue);
    };
    /**
     * Deselect mails
     */
    MailComponent.prototype.deselectMails = function () {
        this._mailService.deselectMails();
    };
    /**
     * Deselect current mail
     */
    MailComponent.prototype.deselectCurrentMail = function () {
        this._mailService.onCurrentMailChanged.next(null);
    };
    /**
     * Toggle label on selected mails
     *
     * @param labelId
     */
    MailComponent.prototype.toggleLabelOnSelectedMails = function (labelId) {
        this._mailService.toggleLabelOnSelectedMails(labelId);
    };
    /**
     * Set folder on selected mails
     *
     * @param folderId
     */
    MailComponent.prototype.setFolderOnSelectedMails = function (folderId) {
        this._mailService.setFolderOnSelectedMails(folderId);
    };
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    MailComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    MailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/main/apps/mail/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/main/apps/mail/mail.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"],
            _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["FuseSidebarService"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["FuseTranslationLoaderService"]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail.model.ts":
/*!**********************************************!*\
  !*** ./src/app/main/apps/mail/mail.model.ts ***!
  \**********************************************/
/*! exports provided: Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
var Mail = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param mail
     */
    function Mail(mail) {
        this.id = mail.id;
        this.from = mail.from;
        this.to = mail.to;
        this.subject = mail.subject;
        this.message = mail.message;
        this.time = mail.time;
        this.read = mail.read;
        this.starred = mail.starred;
        this.important = mail.important;
        this.hasAttachments = mail.hasAttachments;
        this.attachments = mail.attachments;
        this.labels = mail.labels;
        this.folder = mail.folder;
    }
    /**
     * Toggle star
     */
    Mail.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    /**
     * Toggle important
     */
    Mail.prototype.toggleImportant = function () {
        this.important = !this.important;
    };
    return Mail;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/apps/mail/mail.module.ts ***!
  \***********************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
/* harmony import */ var app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/mail/mail.component */ "./src/app/main/apps/mail/mail.component.ts");
/* harmony import */ var app_main_apps_mail_mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/mail/mail-list/mail-list.component */ "./src/app/main/apps/mail/mail-list/mail-list.component.ts");
/* harmony import */ var app_main_apps_mail_mail_list_mail_list_item_mail_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component */ "./src/app/main/apps/mail/mail-list/mail-list-item/mail-list-item.component.ts");
/* harmony import */ var app_main_apps_mail_mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/mail/mail-details/mail-details.component */ "./src/app/main/apps/mail/mail-details/mail-details.component.ts");
/* harmony import */ var app_main_apps_mail_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/mail/sidebars/main/main-sidebar.component */ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.ts");
/* harmony import */ var app_main_apps_mail_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/mail/dialogs/compose/compose.component */ "./src/app/main/apps/mail/dialogs/compose/compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'label/:labelHandle',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: 'filter/:filterHandle',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: ':folderHandle',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        resolve: {
            mail: app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
        }
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
                app_main_apps_mail_mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_8__["MailListComponent"],
                app_main_apps_mail_mail_list_mail_list_item_mail_list_item_component__WEBPACK_IMPORTED_MODULE_9__["MailListItemComponent"],
                app_main_apps_mail_mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailsComponent"],
                app_main_apps_mail_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["MailMainSidebarComponent"],
                app_main_apps_mail_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_12__["MailComposeDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarModule"]
            ],
            providers: [
                app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"]
            ],
            entryComponents: [
                app_main_apps_mail_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_12__["MailComposeDialogComponent"]
            ]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/mail.service.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/mail/mail.service.ts ***!
  \************************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail/mail.model */ "./src/app/main/apps/mail/mail.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function MailService(_httpClient) {
        this._httpClient = _httpClient;
        this.searchText = '';
        // Set the defaults
        this.selectedMails = [];
        this.onMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSelectedMailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onCurrentMailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onFoldersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onFiltersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onLabelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    MailService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFolders(),
                _this.getFilters(),
                _this.getLabels(),
                _this.getMails()
            ]).then(function () {
                if (_this.routeParams.mailId) {
                    _this.setCurrentMail(_this.routeParams.mailId);
                }
                else {
                    _this.setCurrentMail(null);
                }
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    if (searchText !== '') {
                        _this.searchText = searchText;
                        _this.getMails();
                    }
                    else {
                        _this.searchText = searchText;
                        _this.getMails();
                    }
                });
                resolve();
            }, reject);
        });
    };
    /**
     * Get all folders
     *
     * @returns {Promise<any>}
     */
    MailService.prototype.getFolders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-folders')
                .subscribe(function (response) {
                _this.folders = response;
                _this.onFoldersChanged.next(_this.folders);
                resolve(_this.folders);
            }, reject);
        });
    };
    /**
     * Get all filters
     *
     * @returns {Promise<any>}
     */
    MailService.prototype.getFilters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-filters')
                .subscribe(function (response) {
                _this.filters = response;
                _this.onFiltersChanged.next(_this.filters);
                resolve(_this.filters);
            }, reject);
        });
    };
    /**
     * Get all labels
     *
     * @returns {Promise<any>}
     */
    MailService.prototype.getLabels = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-labels')
                .subscribe(function (response) {
                _this.labels = response;
                _this.onLabelsChanged.next(_this.labels);
                resolve(_this.labels);
            }, reject);
        });
    };
    /**
     * Get all mails
     *
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMails = function () {
        if (this.routeParams.labelHandle) {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }
        if (this.routeParams.filterHandle) {
            return this.getMailsByFilter(this.routeParams.filterHandle);
        }
        return this.getMailsByFolder(this.routeParams.folderHandle);
    };
    /**
     * Get mails by folder
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByFolder = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-folders?handle=' + handle)
                .subscribe(function (folders) {
                var folderId = folders[0].id;
                _this._httpClient.get('api/mail-mails?folder=' + folderId)
                    .subscribe(function (mails) {
                    _this.mails = mails.map(function (mail) {
                        return new app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_4__["Mail"](mail);
                    });
                    _this.mails = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.mails, _this.searchText);
                    _this.onMailsChanged.next(_this.mails);
                    resolve(_this.mails);
                }, reject);
            });
        });
    };
    /**
     * Get mails by filter
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByFilter = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-mails?' + handle + '=true')
                .subscribe(function (mails) {
                _this.mails = mails.map(function (mail) {
                    return new app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_4__["Mail"](mail);
                });
                _this.mails = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.mails, _this.searchText);
                _this.onMailsChanged.next(_this.mails);
                resolve(_this.mails);
            }, reject);
        });
    };
    /**
     * Get mails by label
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    MailService.prototype.getMailsByLabel = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/mail-labels?handle=' + handle)
                .subscribe(function (labels) {
                var labelId = labels[0].id;
                _this._httpClient.get('api/mail-mails?labels=' + labelId)
                    .subscribe(function (mails) {
                    _this.mails = mails.map(function (mail) {
                        return new app_main_apps_mail_mail_model__WEBPACK_IMPORTED_MODULE_4__["Mail"](mail);
                    });
                    _this.mails = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.mails, _this.searchText);
                    _this.onMailsChanged.next(_this.mails);
                    resolve(_this.mails);
                }, reject);
            });
        });
    };
    /**
     * Toggle selected mail by id
     *
     * @param id
     */
    MailService.prototype.toggleSelectedMail = function (id) {
        // First, check if we already have that mail as selected...
        if (this.selectedMails.length > 0) {
            for (var _i = 0, _a = this.selectedMails; _i < _a.length; _i++) {
                var mail = _a[_i];
                // ...delete the selected mail
                if (mail.id === id) {
                    var index = this.selectedMails.indexOf(mail);
                    if (index !== -1) {
                        this.selectedMails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedMailsChanged.next(this.selectedMails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedMails.push(this.mails.find(function (mail) {
            return mail.id === id;
        }));
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    };
    /**
     * Toggle select all
     */
    MailService.prototype.toggleSelectAll = function () {
        if (this.selectedMails.length > 0) {
            this.deselectMails();
        }
        else {
            this.selectMails();
        }
    };
    /**
     * Select mails
     *
     * @param filterParameter
     * @param filterValue
     */
    MailService.prototype.selectMails = function (filterParameter, filterValue) {
        this.selectedMails = [];
        // If there is no filter, select all mails
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedMails = this.mails;
        }
        else {
            (_a = this.selectedMails).push.apply(_a, this.mails.filter(function (mail) {
                return mail[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
        var _a;
    };
    /**
     * Deselect mails
     */
    MailService.prototype.deselectMails = function () {
        this.selectedMails = [];
        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    };
    /**
     * Set current mail by id
     *
     * @param id
     */
    MailService.prototype.setCurrentMail = function (id) {
        this.currentMail = this.mails.find(function (mail) {
            return mail.id === id;
        });
        this.onCurrentMailChanged.next(this.currentMail);
    };
    /**
     * Toggle label on selected mails
     *
     * @param labelId
     */
    MailService.prototype.toggleLabelOnSelectedMails = function (labelId) {
        var _this = this;
        this.selectedMails.map(function (mail) {
            var index = mail.labels.indexOf(labelId);
            if (index !== -1) {
                mail.labels.splice(index, 1);
            }
            else {
                mail.labels.push(labelId);
            }
            _this.updateMail(mail);
        });
    };
    /**
     * Set folder on selected mails
     *
     * @param folderId
     */
    MailService.prototype.setFolderOnSelectedMails = function (folderId) {
        var _this = this;
        this.selectedMails.map(function (mail) {
            mail.folder = folderId;
            _this.updateMail(mail);
        });
        this.deselectMails();
    };
    /**
     * Update the mail
     *
     * @param mail
     * @returns {Promise<any>}
     */
    MailService.prototype.updateMail = function (mail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/mail-mails/' + mail.id, __assign({}, mail))
                .subscribe(function (response) {
                _this.getMails().then(function (mails) {
                    if (mails && _this.currentMail) {
                        _this.setCurrentMail(_this.currentMail.id);
                    }
                    resolve(mails);
                }, reject);
            });
        });
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/mail/sidebars/main/main-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDEBAR HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header accent p-24 pb-4\">\n\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">mail\n        </mat-icon>\n        <span class=\"logo-text\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Mailbox</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\" [@animate]=\"{value:'*',params:{delay:'300ms'}}\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatLabel=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Mail Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDEBAR HEADER -->\n\n<!-- SIDEBAR CONTENT -->\n<div class=\"content\" fusePerfectScrollbar [@animate]=\"{value:'*',params:{y:'50px'}}\">\n\n    <div class=\"p-24\">\n        <button mat-raised-button\n                class=\"mat-accent compose-dialog-button w-100-p\"\n                (click)=\"composeDialog()\"\n                aria-label=\"Compose\">\n            {{ 'MAIL.COMPOSE' | translate }}\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FOLDERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let folder of folders\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/' + folder.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"folder.icon\">{{folder.icon}}</mat-icon>\n                <span>{{folder.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FILTERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of filters\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/filter/' + filter.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" [ngClass]=\"filter.color\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.LABELS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let label of labels\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail/label/' + label.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':label.color}\">label</mat-icon>\n                <span>{{label.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDEBAR CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/mail/sidebars/main/main-sidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mail-main-sidebar {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  height: 100%; }\n  mail-main-sidebar .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  mail-main-sidebar .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  mail-main-sidebar .header .account {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/mail/sidebars/main/main-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: MailMainSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailMainSidebarComponent", function() { return MailMainSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail/mail.service */ "./src/app/main/apps/mail/mail.service.ts");
/* harmony import */ var app_main_apps_mail_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail/dialogs/compose/compose.component */ "./src/app/main/apps/mail/dialogs/compose/compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MailMainSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailService} _mailService
     * @param {MatDialog} _matDialog
     */
    function MailMainSidebarComponent(_mailService, _matDialog) {
        this._mailService = _mailService;
        this._matDialog = _matDialog;
        // Set the defaults
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailMainSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mailService.onFoldersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (folders) {
            _this.folders = folders;
        });
        this._mailService.onFiltersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (filters) {
            _this.filters = filters;
        });
        this._mailService.onLabelsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (labels) {
            _this.labels = labels;
        });
    };
    /**
     * On destroy
     */
    MailMainSidebarComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Compose dialog
     */
    MailMainSidebarComponent.prototype.composeDialog = function () {
        this.dialogRef = this._matDialog.open(app_main_apps_mail_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_6__["MailComposeDialogComponent"], {
            panelClass: 'mail-compose-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Send
                 */
                case 'send':
                    console.log('new Mail', formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    console.log('delete Mail');
                    break;
            }
        });
    };
    MailMainSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-main-sidebar',
            template: __webpack_require__(/*! ./main-sidebar.component.html */ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./main-sidebar.component.scss */ "./src/app/main/apps/mail/sidebars/main/main-sidebar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MailMainSidebarComponent);
    return MailMainSidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=mail-mail-module.js.map