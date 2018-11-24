(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-ngrx-mail-module"],{

/***/ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar class=\"mat-accent m-0\">\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">New Message</span>\n            <button mat-icon-button (click)=\"matDialogRef.close()\" aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"composeForm\" [formGroup]=\"composeForm\" class=\"compose-form\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field>\n                <input matInput name=\"from\"\n                       placeholder=\"From\"\n                       formControlName=\"from\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"to\"\n                       placeholder=\"To\"\n                       formControlName=\"to\"\n                       type=\"email\" required>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"cc\"\n                       placeholder=\"Cc\"\n                       formControlName=\"cc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"bcc\"\n                       placeholder=\"Bcc\"\n                       formControlName=\"bcc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"subject\"\n                       placeholder=\"Subject\"\n                       formControlName=\"subject\">\n            </mat-form-field>\n\n            <mat-form-field>\n            <textarea matInput name=\"message\"\n                      placeholder=\"Message\"\n                      formControlName=\"message\"\n                      rows=\"6\">\n            </textarea>\n            </mat-form-field>\n\n            <div class=\"attachment-list\">\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-2.doc</span>\n                        <span class=\"size\">(12 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-1.jpg</span>\n                        <span class=\"size\">(350 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            <button mat-raised-button\n                    (click)=\"matDialogRef.close(['send',composeForm])\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"composeForm.invalid\"\n                    aria-label=\"SAVE\">\n                SEND\n            </button>\n\n            <button mat-icon-button matTooltip=\"Attach a file\">\n                <mat-icon>attach_file</mat-icon>\n            </button>\n        </div>\n\n        <button mat-icon-button (click)=\"matDialogRef.close(['delete',composeForm])\" aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mail-ngrx-compose-dialog .mat-dialog-container {\n  padding: 0;\n  width: 720px; }\n  .mail-ngrx-compose-dialog .mat-dialog-container .compose-form .mat-form-field {\n    width: 100%; }\n  .mail-ngrx-compose-dialog .mat-dialog-container .compose-form .attachment-list {\n    font-size: 13px;\n    padding-top: 16px; }\n  .mail-ngrx-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment {\n      background-color: rgba(0, 0, 0, 0.08);\n      border: 1px solid rgba(0, 0, 0, 0.16);\n      padding-left: 16px;\n      margin-top: 8px;\n      border-radius: 2px; }\n  .mail-ngrx-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename {\n        font-weight: 500; }\n  .mail-ngrx-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child {\n        margin-bottom: 0; }\n  .mail-ngrx-compose-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.ts ***!
  \**************************************************************************/
/*! exports provided: MailNgrxComposeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxComposeDialogComponent", function() { return MailNgrxComposeDialogComponent; });
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



var MailNgrxComposeDialogComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<MailNgrxComposeDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    function MailNgrxComposeDialogComponent(matDialogRef, _data, _formBuilder) {
        this.matDialogRef = matDialogRef;
        this._data = _data;
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.composeForm = this.createComposeForm();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Create compose form
     *
     * @returns {FormGroup}
     */
    MailNgrxComposeDialogComponent.prototype.createComposeForm = function () {
        return this._formBuilder.group({
            from: {
                value: ['johndoe@creapond.com'],
                disabled: [true]
            },
            to: [''],
            cc: [''],
            bcc: [''],
            subject: [''],
            message: ['']
        });
    };
    MailNgrxComposeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx-compose',
            template: __webpack_require__(/*! ./compose.component.html */ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.html"),
            styles: [__webpack_require__(/*! ./compose.component.scss */ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MailNgrxComposeDialogComponent);
    return MailNgrxComposeDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/i18n/en.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/i18n/en.ts ***!
  \************************************************/
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

/***/ "./src/app/main/apps/mail-ngrx/i18n/tr.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/i18n/tr.ts ***!
  \************************************************/
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

/***/ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!mail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-128 mb-16 select-message-icon hint-text\">\n        email\n    </mat-icon>\n    <span class=\"select-message-text hint-text\">\n        <span>{{ 'MAIL.SELECT_A_MESSAGE_TO_READ' | translate }}</span>\n    </span>\n</div>\n\n<div *ngIf=\"mail\">\n\n    <div class=\"mail-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div>\n            <div class=\"subject\" flex>{{mail.subject}}</div>\n\n            <div class=\"labels\" fxLayout=\"row wrap\">\n                <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"label-color\" [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                    <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon class=\"amber-fg\" *ngIf=\"mail.starred\">star</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!mail.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon class=\"red-fg\" *ngIf=\"mail.important\">label</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!mail.important\">label_outline</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mail-content\">\n\n        <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div>\n                        <img *ngIf=\"mail.from.avatar\" alt=\"{{mail.from.name}}\"\n                             src=\"{{mail.from.avatar}}\" class=\"avatar\"/>\n\n                        <div *ngIf=\"!mail.from.avatar\" class=\"avatar\" ms-random-class=\"vm.colors\">\n                            {{mail.from.name[0]}}\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                        <div class=\"name\">\n                            {{mail.from.name}}\n                        </div>\n\n                        <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"to-text\">to</div>\n                            <div>{{mail.to[0].name}}</div>\n                        </div>\n                    </div>\n                </div>\n\n                <a class=\"toggle-details\" (click)=\"showDetails = !showDetails\">\n                    <span *ngIf=\"!showDetails\">Show Details</span>\n                    <span *ngIf=\"showDetails\">Hide Details</span>\n                </a>\n\n                <div *ngIf=\"showDetails\" class=\"details\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div fxLayout=\"column\">\n                        <span class=\"title\">From:</span>\n                        <span class=\"title\">To:</span>\n                        <span class=\"title\">Date:</span>\n                    </div>\n\n                    <div fxLayout=\"column\">\n                        <span class=\"detail\">{{mail.from.email}}</span>\n                        <span class=\"detail\">{{mail.to[0].email}}</span>\n                        <span class=\"detail\">{{mail.time}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" (click)=\"$event.stopPropagation()\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"Reply\">\n                    <mat-icon>reply</mat-icon>\n                    <span>Reply</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Forward\">\n                    <mat-icon>forward</mat-icon>\n                    <span>Forward</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Print\">\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                </button>\n            </mat-menu>\n        </div>\n\n        <div [innerHTML]=\"mail.message\"></div>\n\n    </div>\n\n    <div *ngIf=\"mail.attachments\" class=\"mail-attachments\">\n\n        <div class=\"title\">\n            <span>Attachments</span>\n            ({{mail.attachments.length}})\n        </div>\n\n        <div class=\"attachment-list\" fxLayout=\"row wrap\">\n\n            <div class=\"attachment\" fxLayout=\"column\"\n                 *ngFor=\"let attachment of mail.attachments\">\n\n                <img class=\"preview\" src=\"{{attachment.preview}}\">\n\n                <div fxLayout=\"column\">\n                    <a href=\"#\" onclick=\"event.preventDefault()\">View</a>\n                    <a href=\"#\" onclick=\"event.preventDefault()\">Download</a>\n                    <div class=\"size\">({{attachment.size}})</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-ngrx-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\nmail-ngrx-details .select-message-text {\n    font-size: 24px;\n    font-weight: 300; }\nmail-ngrx-details .mail-header {\n    padding-bottom: 16px;\n    border-bottom: 1px solid; }\nmail-ngrx-details .mail-header .actions {\n      min-width: 88px; }\nmail-ngrx-details .mail-header .subject {\n      font-size: 17px;\n      font-weight: 500; }\nmail-ngrx-details .mail-header .label {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 4px 4px 4px 0;\n      padding: 3px 8px; }\nmail-ngrx-details .mail-header .label .label-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\nmail-ngrx-details .mail-content {\n    padding: 24px 0; }\nmail-ngrx-details .mail-content .to .to-text {\n      margin-right: 4px;\n      text-transform: lowercase; }\nmail-ngrx-details .mail-content .info {\n      padding-bottom: 16px; }\nmail-ngrx-details .mail-content .info .avatar {\n        margin-right: 16px; }\nmail-ngrx-details .mail-content .info .name {\n        margin-right: 8px;\n        font-weight: 500; }\nmail-ngrx-details .mail-content .info .toggle-details {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: underline;\n        padding-top: 16px;\n        cursor: pointer;\n        font-weight: 500; }\nmail-ngrx-details .mail-content .info .details {\n        padding-top: 8px; }\nmail-ngrx-details .mail-content .info .details .title {\n          font-weight: 500;\n          margin-right: 6px; }\nmail-ngrx-details .mail-attachments {\n    padding: 24px 0;\n    border-top: 1px solid; }\nmail-ngrx-details .mail-attachments .title {\n      margin-bottom: 16px;\n      font-weight: 500; }\nmail-ngrx-details .mail-attachments .attachment .preview {\n      width: 100px;\n      margin: 0 16px 8px 0; }\nmail-ngrx-details .mail-attachments .attachment .link {\n      margin-bottom: 2px; }\nmail-ngrx-details .mail-attachments .attachment .size {\n      font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: MailNgrxDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxDetailsComponent", function() { return MailNgrxDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_mail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.model */ "./src/app/main/apps/mail-ngrx/mail.model.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store */ "./src/app/main/apps/mail-ngrx/store/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
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





var MailNgrxDetailsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailNgrxService} _mailNgrxService
     * @param {Store<MailAppState>} _store
     */
    function MailNgrxDetailsComponent(_mailNgrxService, _store) {
        this._mailNgrxService = _mailNgrxService;
        this._store = _store;
        // Set the defaults
        this.labels$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["getLabelsArr"]));
        this.showDetails = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     */
    MailNgrxDetailsComponent.prototype.ngOnChanges = function () {
        this.updateModel(this.currentMail);
        this.markAsRead();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Mark as read
     */
    MailNgrxDetailsComponent.prototype.markAsRead = function () {
        if (this.mail && !this.mail.read) {
            this.mail.markRead();
            this.updateMail();
        }
    };
    /**
     * Toggle star
     *
     * @param event
     */
    MailNgrxDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this.updateMail();
    };
    /**
     * Toggle important
     *
     * @param event
     */
    MailNgrxDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.updateMail();
    };
    /**
     * Update model
     *
     * @param data
     */
    MailNgrxDetailsComponent.prototype.updateModel = function (data) {
        this.mail = !data ? null : new app_main_apps_mail_ngrx_mail_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](__assign({}, data));
    };
    /**
     * Update the mail
     */
    MailNgrxDetailsComponent.prototype.updateMail = function () {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["UpdateMail"](this.mail));
        this.updateModel(this.mail);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_main_apps_mail_ngrx_mail_model__WEBPACK_IMPORTED_MODULE_2__["Mail"])
    ], MailNgrxDetailsComponent.prototype, "currentMail", void 0);
    MailNgrxDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx-details',
            template: __webpack_require__(/*! ./mail-details.component.html */ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.html"),
            styles: [__webpack_require__(/*! ./mail-details.component.scss */ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailNgrxService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MailNgrxDetailsComponent);
    return MailNgrxDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-checkbox [checked]=\"selected\" (change)=\"onSelectedChange()\"\n                  (click)=\"$event.stopPropagation();\">\n    </mat-checkbox>\n\n    <div class=\"info\" fxFlex FlexLayout=\"column\">\n\n        <div class=\"row-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"name\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                <img class=\"avatar\" *ngIf=\"mail.from?.avatar\" alt=\"{{mail.from?.name}}\" src=\"{{mail.from?.avatar}}\"/>\n                <div class=\"avatar accent\" *ngIf=\"!mail.from?.avatar\">{{mail.from?.name[0]}}</div>\n                <span class=\"text-truncate\" *ngIf=\"mail?.from\">{{mail.from?.name}}</span>\n                <mat-icon *ngIf=\"mail.hasAttachments\">attachment</mat-icon>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"time\">{{mail.time}}</div>\n            </div>\n\n        </div>\n\n        <div class=\"row-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div class=\"subject text-truncate\">\n                    {{mail.subject}}\n                </div>\n\n                <div class=\"message text-truncate\" *ngIf=\"mail?.message\">\n                    {{mail.message | htmlToPlaintext | slice:0:180}}{{mail.message.length > 180 ? '...' : ''}}\n                </div>\n\n                <div class=\"labels\" fxLayout=\"row wrap\" fxHide fxShow.gt-sm>\n                    <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                         fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"label-color\"\n                             [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                        <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-ngrx-list-item {\n  flex-shrink: 0;\n  position: relative;\n  padding: 16px 24px;\n  border-bottom: 1px solid;\n  cursor: pointer; }\nmail-ngrx-list-item.unread .info .name {\n    font-weight: 700; }\nmail-ngrx-list-item.unread .info .row-2 .subject {\n    font-weight: 700; }\nmail-ngrx-list-item .info {\n    overflow: hidden;\n    width: 0;\n    margin-left: 16px;\n    position: relative; }\nmail-ngrx-list-item .info .row-1 {\n      margin-bottom: 8px; }\nmail-ngrx-list-item .info .row-1 .name {\n        font-size: 15px;\n        font-weight: 500; }\nmail-ngrx-list-item .info .row-1 .name .avatar {\n          min-width: 32px;\n          width: 32px;\n          height: 32px;\n          line-height: 32px; }\nmail-ngrx-list-item .info .row-1 .actions {\n        margin-left: 4px; }\nmail-ngrx-list-item .info .row-1 .actions .mat-icon-button {\n          width: 32px;\n          height: 32px;\n          line-height: 1; }\nmail-ngrx-list-item .info .row-2 .subject,\n    mail-ngrx-list-item .info .row-2 .message {\n      width: 100%; }\nmail-ngrx-list-item .info .row-2 .message {\n      position: relative; }\nmail-ngrx-list-item .info .row-2 .labels {\n      margin-top: 8px; }\nmail-ngrx-list-item .info .row-2 .labels .label {\n        font-size: 11px;\n        border-radius: 2px;\n        margin: 0 4px 0 0;\n        padding: 3px 8px; }\nmail-ngrx-list-item .info .row-2 .labels .label .label-color {\n          width: 8px;\n          height: 8px;\n          margin-right: 8px;\n          border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MailNgrxListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxListItemComponent", function() { return MailNgrxListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var _mail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mail.model */ "./src/app/main/apps/mail-ngrx/mail.model.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/main/apps/mail-ngrx/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailNgrxListItemComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {MailNgrxService} _mailNgrxService
     * @param {Store} _store
     */
    function MailNgrxListItemComponent(_changeDetectorRef, _mailNgrxService, _store) {
        this._changeDetectorRef = _changeDetectorRef;
        this._mailNgrxService = _mailNgrxService;
        this._store = _store;
        this.labels$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getLabelsArr"]));
        this.selectedMailIds$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getSelectedMailIds"]));
        this.selected = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    MailNgrxListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.mail = new _mail_model__WEBPACK_IMPORTED_MODULE_3__["Mail"](this.mail);
        this.unread = !this.mail.read;
        this.selectedMailIds$.subscribe(function (selectedMailIds) {
            _this.selected = selectedMailIds.length > 0 && selectedMailIds.find(function (id) { return id === _this.mail.id; }) !== undefined;
            _this.refresh();
        });
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    MailNgrxListItemComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    MailNgrxListItemComponent.prototype.onSelectedChange = function () {
        this._store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__["ToggleInSelectedMails"](this.mail.id));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _mail_model__WEBPACK_IMPORTED_MODULE_3__["Mail"])
    ], MailNgrxListItemComponent.prototype, "mail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], MailNgrxListItemComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.unread'),
        __metadata("design:type", Boolean)
    ], MailNgrxListItemComponent.prototype, "unread", void 0);
    MailNgrxListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx-list-item',
            template: __webpack_require__(/*! ./mail-list-item.component.html */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html"),
            styles: [__webpack_require__(/*! ./mail-list-item.component.scss */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailNgrxService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MailNgrxListItemComponent);
    return MailNgrxListItemComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mails.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-messages-text hint-text\">{{ 'MAIL.NO_MESSAGES' | translate }}</span>\n</div>\n\n<div class=\"mail-list\">\n    <mail-ngrx-list-item matRipple *ngFor=\"let mail of mails\" [mail]=\"mail\" (click)=\"readMail(mail.id)\"\n                    [ngClass]=\"{'current-mail':mail?.id == currentMail?.id}\">\n    </mail-ngrx-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mail-ngrx-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0;\n  border-right: 1px solid;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  mail-ngrx-list .no-messages-text {\n    font-size: 24px;\n    font-weight: 300; }\n  mail-ngrx-list .mail-list {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex: 1; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MailNgrxListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxListComponent", function() { return MailNgrxListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailNgrxListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {MailNgrxService} _mailNgrxService
     * @param {Router} _router
     */
    function MailNgrxListComponent(_activatedRoute, _mailNgrxService, _router) {
        this._activatedRoute = _activatedRoute;
        this._mailNgrxService = _mailNgrxService;
        this._router = _router;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Read mail
     *
     * @param mailId
     */
    MailNgrxListComponent.prototype.readMail = function (mailId) {
        var labelHandle = this._activatedRoute.snapshot.params.labelHandle, filterHandle = this._activatedRoute.snapshot.params.filterHandle, folderHandle = this._activatedRoute.snapshot.params.folderHandle;
        if (labelHandle) {
            this._router.navigate(['apps/mail-ngrx/label/' + labelHandle + '/' + mailId]);
        }
        else if (filterHandle) {
            this._router.navigate(['apps/mail-ngrx/filter/' + filterHandle + '/' + mailId]);
        }
        else {
            this._router.navigate(['apps/mail-ngrx/' + folderHandle + '/' + mailId]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MailNgrxListComponent.prototype, "mails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MailNgrxListComponent.prototype, "currentMail", void 0);
    MailNgrxListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx-list',
            template: __webpack_require__(/*! ./mail-list.component.html */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.html"),
            styles: [__webpack_require__(/*! ./mail-list.component.scss */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailNgrxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MailNgrxListComponent);
    return MailNgrxListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mail\" class=\"page-layout carded left-sidebar inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"mail-ngrx-main-sidebar\" position=\"left\" lockedOpen=\"gt-md\">\n        <mail-ngrx-main-sidebar></mail-ngrx-main-sidebar>\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('mail-ngrx-main-sidebar')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div class=\"search\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon>search</mat-icon>\n                    <input [formControl]=\"searchInput\" [placeholder]=\"'MAIL.SEARCH_PLACEHOLDER' | translate\" fxFlex>\n                </div>\n            </div>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\" [ngClass]=\"{'current-mail-selected':currentMail$ | async}\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                    <mat-checkbox (click)=\"toggleSelectAll($event)\"\n                                  [checked]=\"hasSelectedMails\"\n                                  [indeterminate]=\"isIndeterminate\">\n                    </mat-checkbox>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item (click)=\"selectAllMails()\">All</button>\n                        <button mat-menu-item (click)=\"deselectAllMails()\">None</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('read', true)\">Read</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('read', false)\">Unread</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('starred', true)\">Starred</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('starred', false)\">Unstarred</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('important', true)\">Important</button>\n                        <button mat-menu-item (click)=\"selectMailsByParameter('important', false)\">Unimportant</button>\n                    </mat-menu>\n\n                    <div class=\"toolbar-separator\" *ngIf=\"hasSelectedMails\"></div>\n\n                    <button mat-icon-button (click)=\"setFolderOnSelectedMails(4)\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">delete</mat-icon>\n                    </button>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"folderMenu\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">folder</mat-icon>\n                    </button>\n                    <mat-menu #folderMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let folder of folders$ | async\"\n                                (click)=\"setFolderOnSelectedMails(folder.id)\">{{folder.title}}\n                        </button>\n                    </mat-menu>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedMails\">\n                        <mat-icon class=\"secondary-text\">label</mat-icon>\n                    </button>\n                    <mat-menu #labelMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let label of labels$ | async\"\n                                (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}\n                        </button>\n                    </mat-menu>\n                </div>\n\n                <div *ngIf=\"currentMail$ | async\" fxHide.gt-xs>\n                    <button mat-icon-button (click)=\"deselectCurrentMail()\">\n                        <mat-icon class=\"secondary-text\">arrow_back</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content\" fxLayout=\"row\">\n\n                <mail-ngrx-list fusePerfectScrollbar fxFlex [mails]=\"mails$ | async\" [currentMail]=\"currentMail$ | async\"></mail-ngrx-list>\n                <mail-ngrx-details [currentMail]=\"currentMail$ | async\" fusePerfectScrollbar fxFlex></mail-ngrx-details>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmail-ngrx {\n  width: 100%; }\nmail-ngrx .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\nmail-ngrx .center .header .search-wrapper .sidebar-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      border-radius: 0;\n      border-right: 1px solid; }\nmail-ngrx .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\nmail-ngrx .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        border: none;\n        outline: none; }\n@media screen and (max-width: 599px) {\n    mail-ngrx .center .content-card mail-list {\n      border-right: none; }\n    mail-ngrx .center .content-card mail-list,\n    mail-ngrx .center .content-card mail-details {\n      flex: 1 0 100%; }\n    mail-ngrx .center .content-card mail-details {\n      display: none !important; }\n    mail-ngrx .center .content-card.current-mail-selected .toolbar {\n      padding-left: 16px !important; }\n      mail-ngrx .center .content-card.current-mail-selected .toolbar .mail-selection {\n        display: none !important; }\n    mail-ngrx .center .content-card.current-mail-selected .content mail-list {\n      display: none !important; }\n    mail-ngrx .center .content-card.current-mail-selected .content mail-details {\n      display: flex !important; } }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.component.ts ***!
  \*******************************************************/
/*! exports provided: MailNgrxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxComponent", function() { return MailNgrxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store */ "./src/app/main/apps/mail-ngrx/store/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_i18n_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/mail-ngrx/i18n/en */ "./src/app/main/apps/mail-ngrx/i18n/en.ts");
/* harmony import */ var app_main_apps_mail_ngrx_i18n_tr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/mail-ngrx/i18n/tr */ "./src/app/main/apps/mail-ngrx/i18n/tr.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MailNgrxComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {MailNgrxService} _mailNgrxService
     * @param {Store<MailAppState>} _store
     */
    function MailNgrxComponent(_changeDetectorRef, _fuseSidebarService, _fuseTranslationLoaderService, _mailNgrxService, _store) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseSidebarService = _fuseSidebarService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._mailNgrxService = _mailNgrxService;
        this._store = _store;
        // Set the defaults
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this._fuseTranslationLoaderService.loadTranslations(app_main_apps_mail_ngrx_i18n_en__WEBPACK_IMPORTED_MODULE_8__["locale"], app_main_apps_mail_ngrx_i18n_tr__WEBPACK_IMPORTED_MODULE_9__["locale"]);
        this.currentMail$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getCurrentMail"]));
        this.mails$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getMailsArr"]));
        this.folders$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getFoldersArr"]));
        this.labels$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getLabelsArr"]));
        this.selectedMailIds$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getSelectedMailIds"]));
        this.searchText$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["getSearchText"]));
        this.mails = [];
        this.selectedMailIds = [];
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MailNgrxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mails$.subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMailIds$
            .subscribe(function (selectedMailIds) {
            _this.selectedMailIds = selectedMailIds;
            _this.hasSelectedMails = selectedMailIds.length > 0;
            _this.isIndeterminate = (selectedMailIds.length !== _this.mails.length && selectedMailIds.length > 0);
            _this.refresh();
        });
        this.searchText$.subscribe(function (searchText) {
            _this.searchInput.setValue(searchText);
        });
        this.searchInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (searchText) {
            _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["SetSearchText"](searchText));
        });
    };
    /**
     * On destroy
     */
    MailNgrxComponent.prototype.ngOnDestroy = function () {
        this._changeDetectorRef.detach();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle select all
     *
     * @param ev
     */
    MailNgrxComponent.prototype.toggleSelectAll = function (ev) {
        ev.preventDefault();
        if (this.selectedMailIds.length && this.selectedMailIds.length > 0) {
            this.deselectAllMails();
        }
        else {
            this.selectAllMails();
        }
    };
    /**
     * Select all mails
     */
    MailNgrxComponent.prototype.selectAllMails = function () {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["SelectAllMails"]());
    };
    /**
     * Deselect all mails
     */
    MailNgrxComponent.prototype.deselectAllMails = function () {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["DeselectAllMails"]());
    };
    /**
     * Select mails by parameter
     *
     * @param parameter
     * @param value
     */
    MailNgrxComponent.prototype.selectMailsByParameter = function (parameter, value) {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["SelectMailsByParameter"]({
            parameter: parameter,
            value: value
        }));
    };
    /**
     * Toggle label on selected mails
     *
     * @param labelId
     */
    MailNgrxComponent.prototype.toggleLabelOnSelectedMails = function (labelId) {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["AddLabelOnSelectedMails"](labelId));
    };
    /**
     * Set folder on selected mails
     *
     * @param folderId
     */
    MailNgrxComponent.prototype.setFolderOnSelectedMails = function (folderId) {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["SetFolderOnSelectedMails"](folderId));
    };
    /**
     * Deselect current mail
     */
    MailNgrxComponent.prototype.deselectCurrentMail = function () {
        this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["SetCurrentMail"](''));
    };
    /**
     * Refresh
     */
    MailNgrxComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    MailNgrxComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    MailNgrxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/main/apps/mail-ngrx/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/main/apps/mail-ngrx/mail.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["FuseSidebarService"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["FuseTranslationLoaderService"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailNgrxService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MailNgrxComponent);
    return MailNgrxComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.model.ts":
/*!***************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.model.ts ***!
  \***************************************************/
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
    /**
     * Mark as read
     */
    Mail.prototype.markRead = function () {
        this.read = true;
    };
    /**
     * Mark as unread
     */
    Mail.prototype.markUnread = function () {
        this.read = false;
    };
    return Mail;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.module.ts ***!
  \****************************************************/
/*! exports provided: MailNgrxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxModule", function() { return MailNgrxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/guards/index */ "./src/app/main/apps/mail-ngrx/store/guards/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/store.module */ "./src/app/main/apps/mail-ngrx/store/store.module.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.component */ "./src/app/main/apps/mail-ngrx/mail.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail-list/mail-list.component */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_list_mail_list_item_mail_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component */ "./src/app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail-details/mail-details.component */ "./src/app/main/apps/mail-ngrx/mail-details/mail-details.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component */ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/apps/mail-ngrx/dialogs/compose/compose.component */ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'label/:labelHandle',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: 'filter/:filterHandle',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: ':folderHandle',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: ':folderHandle/:mailId',
        component: app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
        canActivate: [app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]]
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
var MailNgrxModule = /** @class */ (function () {
    function MailNgrxModule() {
    }
    MailNgrxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_mail_ngrx_mail_component__WEBPACK_IMPORTED_MODULE_8__["MailNgrxComponent"],
                app_main_apps_mail_ngrx_mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailNgrxListComponent"],
                app_main_apps_mail_ngrx_mail_list_mail_list_item_mail_list_item_component__WEBPACK_IMPORTED_MODULE_10__["MailNgrxListItemComponent"],
                app_main_apps_mail_ngrx_mail_details_mail_details_component__WEBPACK_IMPORTED_MODULE_11__["MailNgrxDetailsComponent"],
                app_main_apps_mail_ngrx_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["MailNgrxMainSidebarComponent"],
                app_main_apps_mail_ngrx_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_13__["MailNgrxComposeDialogComponent"]
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
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarModule"],
                app_main_apps_mail_ngrx_store_store_module__WEBPACK_IMPORTED_MODULE_7__["MailNgrxStoreModule"]
            ],
            providers: [
                app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_14__["MailNgrxService"],
                app_main_apps_mail_ngrx_store_guards_index__WEBPACK_IMPORTED_MODULE_6__["ResolveGuard"]
            ],
            entryComponents: [app_main_apps_mail_ngrx_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_13__["MailNgrxComposeDialogComponent"]]
        })
    ], MailNgrxModule);
    return MailNgrxModule;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/mail.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/mail.service.ts ***!
  \*****************************************************/
/*! exports provided: MailNgrxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxService", function() { return MailNgrxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/index.ts");
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




var MailNgrxService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param {Store<MailAppState>} _store
     */
    function MailNgrxService(_httpClient, _store) {
        var _this = this;
        this._httpClient = _httpClient;
        this._store = _store;
        this._store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getFoldersArr"]))
            .subscribe(function (folders) {
            _this.foldersArr = folders;
        });
        this._store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getFiltersArr"]))
            .subscribe(function (filters) {
            _this.filtersArr = filters;
        });
        this._store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getLabelsArr"]))
            .subscribe(function (labels) {
            _this.labelsArr = labels;
        });
        this._store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_3__["getMailsArr"]))
            .subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMails = [];
    }
    /**
     * Get all mails
     *
     * @returns {Observable<Mail[]>}
     */
    MailNgrxService.prototype.getAllMails = function () {
        return this._httpClient.get('api/mail-mails');
    };
    /**
     * Get folders
     *
     * @returns {Observable<any>}
     */
    MailNgrxService.prototype.getFolders = function () {
        return this._httpClient.get('api/mail-folders');
    };
    /**
     * Get filters
     *
     * @returns {Observable<any>}
     */
    MailNgrxService.prototype.getFilters = function () {
        return this._httpClient.get('api/mail-filters');
    };
    /**
     * Get labels
     *
     * @returns {Observable<any>}
     */
    MailNgrxService.prototype.getLabels = function () {
        return this._httpClient.get('api/mail-labels');
    };
    /**
     * Get mails
     *
     * @param handle
     * @returns {Observable<Mail[]>}
     */
    MailNgrxService.prototype.getMails = function (handle) {
        if (handle.id === 'labelHandle') {
            var labelId = this.labelsArr.find(function (label) { return label.handle === handle.value; }).id;
            return this._httpClient.get('api/mail-mails?labels=' + labelId);
        }
        else if (handle.id === 'filterHandle') {
            return this._httpClient.get('api/mail-mails?' + handle.value + '=true');
        }
        else {
            var folderId = this.foldersArr.find(function (folder) { return folder.handle === handle.value; }).id;
            return this._httpClient.get('api/mail-mails?folder=' + folderId);
        }
    };
    /**
     * Update the mail
     *
     * @param mail
     * @returns {Promise<any>}
     */
    MailNgrxService.prototype.updateMail = function (mail) {
        return this._httpClient.post('api/mail-mails/' + mail.id, __assign({}, mail));
    };
    MailNgrxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MailNgrxService);
    return MailNgrxService;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDEBAR HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header accent p-24 pb-4\">\n\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\">mail</mat-icon>\n        <span class=\"logo-text\">Mailbox Ngrx</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatLabel=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Mail Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDEBAR HEADER -->\n\n<!-- SIDEBAR CONTENT -->\n<div class=\"content\" fusePerfectScrollbar>\n\n    <div class=\"p-24\">\n        <button mat-raised-button\n                class=\"mat-accent compose-dialog-button w-100-p\"\n                (click)=\"composeDialog()\"\n                aria-label=\"Compose\">\n            {{ 'MAIL.COMPOSE' | translate }}\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FOLDERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let folder of (folders$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/' + folder.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"folder.icon\">{{folder.icon}}</mat-icon>\n                <span>{{folder.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FILTERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of (filters$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/filter/' + filter.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" [ngClass]=\"filter.color\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.LABELS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let label of (labels$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/label/' + label.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':label.color}\">label</mat-icon>\n                <span>{{label.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDEBAR CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mail-ngrx-main-sidebar {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  height: 100%; }\n  mail-ngrx-main-sidebar .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  mail-ngrx-main-sidebar .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  mail-ngrx-main-sidebar .header .account {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MailNgrxMainSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxMainSidebarComponent", function() { return MailNgrxMainSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store */ "./src/app/main/apps/mail-ngrx/store/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail-ngrx/dialogs/compose/compose.component */ "./src/app/main/apps/mail-ngrx/dialogs/compose/compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MailNgrxMainSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MailNgrxService} _mailNgrxService
     * @param {MatDialog} _matDialog
     * @param {Store<MailAppState>} _store
     */
    function MailNgrxMainSidebarComponent(_mailNgrxService, _matDialog, _store) {
        this._mailNgrxService = _mailNgrxService;
        this._matDialog = _matDialog;
        this._store = _store;
        // Set the defaults
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
        this.folders$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["getFoldersArr"]));
        this.filters$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["getFiltersArr"]));
        this.labels$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["getLabelsArr"]));
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Compose dialog
     */
    MailNgrxMainSidebarComponent.prototype.composeDialog = function () {
        this.dialogRef = this._matDialog.open(app_main_apps_mail_ngrx_dialogs_compose_compose_component__WEBPACK_IMPORTED_MODULE_5__["MailNgrxComposeDialogComponent"], {
            panelClass: 'mail-ngrx-compose-dialog'
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
    MailNgrxMainSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-ngrx-main-sidebar',
            template: __webpack_require__(/*! ./main-sidebar.component.html */ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./main-sidebar.component.scss */ "./src/app/main/apps/mail-ngrx/sidebars/main/main-sidebar.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailNgrxService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MailNgrxMainSidebarComponent);
    return MailNgrxMainSidebarComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/actions/filters.actions.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/actions/filters.actions.ts ***!
  \**********************************************************************/
/*! exports provided: GET_FILTERS, GET_FILTERS_SUCCESS, GET_FILTERS_FAILED, GetFilters, GetFiltersSuccess, GetFiltersFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS", function() { return GET_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_SUCCESS", function() { return GET_FILTERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_FAILED", function() { return GET_FILTERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilters", function() { return GetFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiltersSuccess", function() { return GetFiltersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiltersFailed", function() { return GetFiltersFailed; });
var GET_FILTERS = '[FILTERS] GET FILTERS';
var GET_FILTERS_SUCCESS = '[FILTERS] GET FILTERS SUCCESS';
var GET_FILTERS_FAILED = '[FILTERS] GET FILTERS FAILED';
/**
 * Get Filters
 */
var GetFilters = /** @class */ (function () {
    function GetFilters(payload) {
        this.payload = payload;
        this.type = GET_FILTERS;
    }
    return GetFilters;
}());

/**
 * Get Filters Success
 */
var GetFiltersSuccess = /** @class */ (function () {
    function GetFiltersSuccess(payload) {
        this.payload = payload;
        this.type = GET_FILTERS_SUCCESS;
    }
    return GetFiltersSuccess;
}());

/**
 * Get Filters Failed
 */
var GetFiltersFailed = /** @class */ (function () {
    function GetFiltersFailed(payload) {
        this.payload = payload;
        this.type = GET_FILTERS_FAILED;
    }
    return GetFiltersFailed;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/actions/folders.actions.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/actions/folders.actions.ts ***!
  \**********************************************************************/
/*! exports provided: GET_FOLDERS, GET_FOLDERS_SUCCESS, GET_FOLDERS_FAILED, GetFolders, GetFoldersSuccess, GetFoldersFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS", function() { return GET_FOLDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_SUCCESS", function() { return GET_FOLDERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_FAILED", function() { return GET_FOLDERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFolders", function() { return GetFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoldersSuccess", function() { return GetFoldersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoldersFailed", function() { return GetFoldersFailed; });
var GET_FOLDERS = '[FOLDERS] GET FOLDERS';
var GET_FOLDERS_SUCCESS = '[FOLDERS] GET FOLDERS SUCCESS';
var GET_FOLDERS_FAILED = '[FOLDERS] GET FOLDERS FAILED';
/**
 * Get Folders
 */
var GetFolders = /** @class */ (function () {
    function GetFolders(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS;
    }
    return GetFolders;
}());

/**
 * Get Folders Success
 */
var GetFoldersSuccess = /** @class */ (function () {
    function GetFoldersSuccess(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS_SUCCESS;
    }
    return GetFoldersSuccess;
}());

/**
 * Get Folders Failed
 */
var GetFoldersFailed = /** @class */ (function () {
    function GetFoldersFailed(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS_FAILED;
    }
    return GetFoldersFailed;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/actions/index.ts":
/*!************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/actions/index.ts ***!
  \************************************************************/
/*! exports provided: GET_MAILS, GET_MAILS_SUCCESS, GET_MAILS_FAILED, SET_CURRENT_MAIL, SET_CURRENT_MAIL_SUCCESS, CHECK_CURRENT_MAIL, UPDATE_MAIL, UPDATE_MAIL_SUCCESS, UPDATE_MAILS, UPDATE_MAILS_SUCCESS, SET_SEARCH_TEXT, SELECT_ALL_MAILS, DESELECT_ALL_MAILS, TOGGLE_IN_SELECTED_MAILS, SELECT_MAILS_BY_PARAMETER, SET_FOLDER_ON_SELECTED_MAILS, ADD_LABEL_ON_SELECTED_MAILS, GetMails, GetMailsSuccess, GetMailsFailed, SetCurrentMail, SetCurrentMailSuccess, CheckCurrentMail, UpdateMail, UpdateMailSuccess, UpdateMails, UpdateMailsSuccess, SetSearchText, SelectAllMails, DeselectAllMails, ToggleInSelectedMails, SelectMailsByParameter, SetFolderOnSelectedMails, AddLabelOnSelectedMails, GET_FOLDERS, GET_FOLDERS_SUCCESS, GET_FOLDERS_FAILED, GetFolders, GetFoldersSuccess, GetFoldersFailed, GET_FILTERS, GET_FILTERS_SUCCESS, GET_FILTERS_FAILED, GetFilters, GetFiltersSuccess, GetFiltersFailed, GET_LABELS, GET_LABELS_SUCCESS, GET_LABELS_FAILED, GetLabels, GetLabelsSuccess, GetLabelsFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mails_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mails.actions */ "./src/app/main/apps/mail-ngrx/store/actions/mails.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_SUCCESS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_FAILED", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL_SUCCESS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MAIL_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_CURRENT_MAIL", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_CURRENT_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL_SUCCESS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAIL_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS_SUCCESS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_TEXT", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_ALL_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_ALL_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESELECT_ALL_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["DESELECT_ALL_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_IN_SELECTED_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_IN_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_MAILS_BY_PARAMETER", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_MAILS_BY_PARAMETER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FOLDER_ON_SELECTED_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FOLDER_ON_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_LABEL_ON_SELECTED_MAILS", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LABEL_ON_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GetMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMailsSuccess", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GetMailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMailsFailed", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["GetMailsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMail", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMailSuccess", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentMailSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckCurrentMail", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["CheckCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMail", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMailSuccess", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMailSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMailsSuccess", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSearchText", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SetSearchText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SelectAllMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeselectAllMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["DeselectAllMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleInSelectedMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["ToggleInSelectedMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMailsByParameter", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SelectMailsByParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFolderOnSelectedMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["SetFolderOnSelectedMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddLabelOnSelectedMails", function() { return _mails_actions__WEBPACK_IMPORTED_MODULE_0__["AddLabelOnSelectedMails"]; });

/* harmony import */ var _folders_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders.actions */ "./src/app/main/apps/mail-ngrx/store/actions/folders.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GET_FOLDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_SUCCESS", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GET_FOLDERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_FAILED", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GET_FOLDERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFolders", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GetFolders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFoldersSuccess", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GetFoldersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFoldersFailed", function() { return _folders_actions__WEBPACK_IMPORTED_MODULE_1__["GetFoldersFailed"]; });

/* harmony import */ var _filters_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.actions */ "./src/app/main/apps/mail-ngrx/store/actions/filters.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GET_FILTERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_SUCCESS", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GET_FILTERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_FAILED", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GET_FILTERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilters", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GetFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFiltersSuccess", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GetFiltersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFiltersFailed", function() { return _filters_actions__WEBPACK_IMPORTED_MODULE_2__["GetFiltersFailed"]; });

/* harmony import */ var _labels_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labels.actions */ "./src/app/main/apps/mail-ngrx/store/actions/labels.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GET_LABELS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_SUCCESS", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GET_LABELS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_FAILED", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GET_LABELS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabels", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GetLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabelsSuccess", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GetLabelsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabelsFailed", function() { return _labels_actions__WEBPACK_IMPORTED_MODULE_3__["GetLabelsFailed"]; });







/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/actions/labels.actions.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/actions/labels.actions.ts ***!
  \*********************************************************************/
/*! exports provided: GET_LABELS, GET_LABELS_SUCCESS, GET_LABELS_FAILED, GetLabels, GetLabelsSuccess, GetLabelsFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS", function() { return GET_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_SUCCESS", function() { return GET_LABELS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_FAILED", function() { return GET_LABELS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLabels", function() { return GetLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLabelsSuccess", function() { return GetLabelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLabelsFailed", function() { return GetLabelsFailed; });
var GET_LABELS = '[LABELS] GET LABELS';
var GET_LABELS_SUCCESS = '[LABELS] GET LABELS SUCCESS';
var GET_LABELS_FAILED = '[LABELS] GET LABELS FAILED';
/**
 * Get Labels
 */
var GetLabels = /** @class */ (function () {
    function GetLabels(payload) {
        this.payload = payload;
        this.type = GET_LABELS;
    }
    return GetLabels;
}());

/**
 * Get Labels Success
 */
var GetLabelsSuccess = /** @class */ (function () {
    function GetLabelsSuccess(payload) {
        this.payload = payload;
        this.type = GET_LABELS_SUCCESS;
    }
    return GetLabelsSuccess;
}());

/**
 * Get Labels Failed
 */
var GetLabelsFailed = /** @class */ (function () {
    function GetLabelsFailed(payload) {
        this.payload = payload;
        this.type = GET_LABELS_FAILED;
    }
    return GetLabelsFailed;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/actions/mails.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/actions/mails.actions.ts ***!
  \********************************************************************/
/*! exports provided: GET_MAILS, GET_MAILS_SUCCESS, GET_MAILS_FAILED, SET_CURRENT_MAIL, SET_CURRENT_MAIL_SUCCESS, CHECK_CURRENT_MAIL, UPDATE_MAIL, UPDATE_MAIL_SUCCESS, UPDATE_MAILS, UPDATE_MAILS_SUCCESS, SET_SEARCH_TEXT, SELECT_ALL_MAILS, DESELECT_ALL_MAILS, TOGGLE_IN_SELECTED_MAILS, SELECT_MAILS_BY_PARAMETER, SET_FOLDER_ON_SELECTED_MAILS, ADD_LABEL_ON_SELECTED_MAILS, GetMails, GetMailsSuccess, GetMailsFailed, SetCurrentMail, SetCurrentMailSuccess, CheckCurrentMail, UpdateMail, UpdateMailSuccess, UpdateMails, UpdateMailsSuccess, SetSearchText, SelectAllMails, DeselectAllMails, ToggleInSelectedMails, SelectMailsByParameter, SetFolderOnSelectedMails, AddLabelOnSelectedMails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS", function() { return GET_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_SUCCESS", function() { return GET_MAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_FAILED", function() { return GET_MAILS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL", function() { return SET_CURRENT_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL_SUCCESS", function() { return SET_CURRENT_MAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_CURRENT_MAIL", function() { return CHECK_CURRENT_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL", function() { return UPDATE_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL_SUCCESS", function() { return UPDATE_MAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS", function() { return UPDATE_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS_SUCCESS", function() { return UPDATE_MAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_TEXT", function() { return SET_SEARCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ALL_MAILS", function() { return SELECT_ALL_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESELECT_ALL_MAILS", function() { return DESELECT_ALL_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_IN_SELECTED_MAILS", function() { return TOGGLE_IN_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MAILS_BY_PARAMETER", function() { return SELECT_MAILS_BY_PARAMETER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FOLDER_ON_SELECTED_MAILS", function() { return SET_FOLDER_ON_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LABEL_ON_SELECTED_MAILS", function() { return ADD_LABEL_ON_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMails", function() { return GetMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMailsSuccess", function() { return GetMailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMailsFailed", function() { return GetMailsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMail", function() { return SetCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMailSuccess", function() { return SetCurrentMailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCurrentMail", function() { return CheckCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMail", function() { return UpdateMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMailSuccess", function() { return UpdateMailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMails", function() { return UpdateMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMailsSuccess", function() { return UpdateMailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchText", function() { return SetSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAllMails", function() { return SelectAllMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeselectAllMails", function() { return DeselectAllMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleInSelectedMails", function() { return ToggleInSelectedMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMailsByParameter", function() { return SelectMailsByParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFolderOnSelectedMails", function() { return SetFolderOnSelectedMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLabelOnSelectedMails", function() { return AddLabelOnSelectedMails; });
var GET_MAILS = '[MAILS] GET MAILS';
var GET_MAILS_SUCCESS = '[MAILS] GET MAILS SUCCESS';
var GET_MAILS_FAILED = '[MAILS] GET MAILS FAILED';
var SET_CURRENT_MAIL = '[MAILS] SET CURRENT MAIL';
var SET_CURRENT_MAIL_SUCCESS = '[MAILS] SET CURRENT MAIL SUCCESS';
var CHECK_CURRENT_MAIL = '[MAILS] CHECK CURRENT MAIL';
var UPDATE_MAIL = '[MAILS] UPDATE MAIL';
var UPDATE_MAIL_SUCCESS = '[MAILS] UPDATE MAIL SUCCESS';
var UPDATE_MAILS = '[MAILS] UPDATE MAILS';
var UPDATE_MAILS_SUCCESS = '[MAILS] UPDATE MAILS SUCCESS';
var SET_SEARCH_TEXT = '[MAILS] SET SEARCH TEXT';
var SELECT_ALL_MAILS = '[MAILS] SELECT ALL MAILS';
var DESELECT_ALL_MAILS = '[MAILS] DESELECT ALL MAILS';
var TOGGLE_IN_SELECTED_MAILS = '[MAILS] TOGGLE IN SELECTED MAILS';
var SELECT_MAILS_BY_PARAMETER = '[MAILS] SELECT MAILS BY PARAMETER';
var SET_FOLDER_ON_SELECTED_MAILS = '[MAILS] SET FOLDER ON SELECTED MAILS';
var ADD_LABEL_ON_SELECTED_MAILS = '[MAILS] ADD LABEL ON SELECTED MAILS';
/**
 * Get Mails
 */
var GetMails = /** @class */ (function () {
    function GetMails() {
        this.type = GET_MAILS;
    }
    return GetMails;
}());

/**
 * Get Mails Success
 */
var GetMailsSuccess = /** @class */ (function () {
    function GetMailsSuccess(payload) {
        this.payload = payload;
        this.type = GET_MAILS_SUCCESS;
    }
    return GetMailsSuccess;
}());

/**
 * Get Mails Failed
 */
var GetMailsFailed = /** @class */ (function () {
    function GetMailsFailed(payload) {
        this.payload = payload;
        this.type = GET_MAILS_FAILED;
    }
    return GetMailsFailed;
}());

/**
 * Set Current Mail
 */
var SetCurrentMail = /** @class */ (function () {
    function SetCurrentMail(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_MAIL;
    }
    return SetCurrentMail;
}());

/**
 * Set Current Mail Success
 */
var SetCurrentMailSuccess = /** @class */ (function () {
    function SetCurrentMailSuccess(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_MAIL_SUCCESS;
    }
    return SetCurrentMailSuccess;
}());

/**
 * Check Current Mail
 */
var CheckCurrentMail = /** @class */ (function () {
    function CheckCurrentMail() {
        this.type = CHECK_CURRENT_MAIL;
    }
    return CheckCurrentMail;
}());

/**
 * Update Mail
 */
var UpdateMail = /** @class */ (function () {
    function UpdateMail(payload) {
        this.payload = payload;
        this.type = UPDATE_MAIL;
    }
    return UpdateMail;
}());

/**
 * Update Mail Success
 */
var UpdateMailSuccess = /** @class */ (function () {
    function UpdateMailSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_MAIL_SUCCESS;
    }
    return UpdateMailSuccess;
}());

/**
 * Update Mails
 */
var UpdateMails = /** @class */ (function () {
    function UpdateMails(payload) {
        this.payload = payload;
        this.type = UPDATE_MAILS;
    }
    return UpdateMails;
}());

/**
 * Update Mails Success
 */
var UpdateMailsSuccess = /** @class */ (function () {
    function UpdateMailsSuccess() {
        this.type = UPDATE_MAILS_SUCCESS;
    }
    return UpdateMailsSuccess;
}());

/**
 * Set Search Text
 */
var SetSearchText = /** @class */ (function () {
    function SetSearchText(payload) {
        this.payload = payload;
        this.type = SET_SEARCH_TEXT;
    }
    return SetSearchText;
}());

/**
 * Select All Mails
 */
var SelectAllMails = /** @class */ (function () {
    function SelectAllMails() {
        this.type = SELECT_ALL_MAILS;
    }
    return SelectAllMails;
}());

/**
 * Deselect All Mails
 */
var DeselectAllMails = /** @class */ (function () {
    function DeselectAllMails() {
        this.type = DESELECT_ALL_MAILS;
    }
    return DeselectAllMails;
}());

/**
 * Toggle In Selected Mails
 */
var ToggleInSelectedMails = /** @class */ (function () {
    function ToggleInSelectedMails(payload) {
        this.payload = payload;
        this.type = TOGGLE_IN_SELECTED_MAILS;
    }
    return ToggleInSelectedMails;
}());

/**
 * Select Mails by Parameter
 */
var SelectMailsByParameter = /** @class */ (function () {
    function SelectMailsByParameter(payload) {
        this.payload = payload;
        this.type = SELECT_MAILS_BY_PARAMETER;
    }
    return SelectMailsByParameter;
}());

/**
 * Set Folder on Selected Mails
 */
var SetFolderOnSelectedMails = /** @class */ (function () {
    function SetFolderOnSelectedMails(payload) {
        this.payload = payload;
        this.type = SET_FOLDER_ON_SELECTED_MAILS;
    }
    return SetFolderOnSelectedMails;
}());

/**
 * Add label on Selected Mails
 */
var AddLabelOnSelectedMails = /** @class */ (function () {
    function AddLabelOnSelectedMails(payload) {
        this.payload = payload;
        this.type = ADD_LABEL_ON_SELECTED_MAILS;
    }
    return AddLabelOnSelectedMails;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/effects/filters.effects.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/effects/filters.effects.ts ***!
  \**********************************************************************/
/*! exports provided: FiltersEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersEffect", function() { return FiltersEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/filters.actions */ "./src/app/main/apps/mail-ngrx/store/actions/filters.actions.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FiltersEffect = /** @class */ (function () {
    function FiltersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get filters from Server
         * @type {Observable<any>}
         */
        this.getFilters = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_4__["GET_FILTERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.mailService.getFilters()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filters) {
                return new app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_4__["GetFiltersSuccess"](filters);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_4__["GetFiltersFailed"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], FiltersEffect.prototype, "getFilters", void 0);
    FiltersEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailNgrxService"]])
    ], FiltersEffect);
    return FiltersEffect;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/effects/folders.effects.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/effects/folders.effects.ts ***!
  \**********************************************************************/
/*! exports provided: FoldersEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersEffect", function() { return FoldersEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/folders.actions */ "./src/app/main/apps/mail-ngrx/store/actions/folders.actions.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoldersEffect = /** @class */ (function () {
    function FoldersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Folders from Server
         * @type {Observable<any>}
         */
        this.getFolders = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_4__["GET_FOLDERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.mailService.getFolders()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (folders) {
                return new app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_4__["GetFoldersSuccess"](folders);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_4__["GetFoldersFailed"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], FoldersEffect.prototype, "getFolders", void 0);
    FoldersEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailNgrxService"]])
    ], FoldersEffect);
    return FoldersEffect;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/effects/index.ts":
/*!************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/effects/index.ts ***!
  \************************************************************/
/*! exports provided: effects, MailsEffect, FoldersEffect, FiltersEffect, LabelsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _mails_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mails.effects */ "./src/app/main/apps/mail-ngrx/store/effects/mails.effects.ts");
/* harmony import */ var _folders_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders.effects */ "./src/app/main/apps/mail-ngrx/store/effects/folders.effects.ts");
/* harmony import */ var _filters_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.effects */ "./src/app/main/apps/mail-ngrx/store/effects/filters.effects.ts");
/* harmony import */ var _labels_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labels.effects */ "./src/app/main/apps/mail-ngrx/store/effects/labels.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsEffect", function() { return _mails_effects__WEBPACK_IMPORTED_MODULE_0__["MailsEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersEffect", function() { return _folders_effects__WEBPACK_IMPORTED_MODULE_1__["FoldersEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersEffect", function() { return _filters_effects__WEBPACK_IMPORTED_MODULE_2__["FiltersEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsEffect", function() { return _labels_effects__WEBPACK_IMPORTED_MODULE_3__["LabelsEffect"]; });





var effects = [
    _mails_effects__WEBPACK_IMPORTED_MODULE_0__["MailsEffect"],
    _folders_effects__WEBPACK_IMPORTED_MODULE_1__["FoldersEffect"],
    _filters_effects__WEBPACK_IMPORTED_MODULE_2__["FiltersEffect"],
    _labels_effects__WEBPACK_IMPORTED_MODULE_3__["LabelsEffect"]
];






/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/effects/labels.effects.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/effects/labels.effects.ts ***!
  \*********************************************************************/
/*! exports provided: LabelsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsEffect", function() { return LabelsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_labels_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/labels.actions */ "./src/app/main/apps/mail-ngrx/store/actions/labels.actions.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LabelsEffect = /** @class */ (function () {
    function LabelsEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Labels from Server
         * @type {Observable<any>}
         */
        this.getLabels = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_labels_actions__WEBPACK_IMPORTED_MODULE_4__["GET_LABELS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.mailService.getLabels()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (labels) {
                return new _actions_labels_actions__WEBPACK_IMPORTED_MODULE_4__["GetLabelsSuccess"](labels);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_labels_actions__WEBPACK_IMPORTED_MODULE_4__["GetLabelsFailed"](err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], LabelsEffect.prototype, "getLabels", void 0);
    LabelsEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_5__["MailNgrxService"]])
    ], LabelsEffect);
    return LabelsEffect;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/effects/mails.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/effects/mails.effects.ts ***!
  \********************************************************************/
/*! exports provided: MailsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsEffect", function() { return MailsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/mails.actions */ "./src/app/main/apps/mail-ngrx/store/actions/mails.actions.ts");
/* harmony import */ var app_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/store */ "./src/app/store/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/mail-ngrx/mail.service */ "./src/app/main/apps/mail-ngrx/mail.service.ts");
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










var MailsEffect = /** @class */ (function () {
    function MailsEffect(actions, mailService, store) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        this.store = store;
        /**
         * Get Mails with router parameters
         * @type {Observable<any>}
         */
        this.getMails = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GET_MAILS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            var handle = {
                id: '',
                value: ''
            };
            var routeParams = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('labelHandle', 'filterHandle', 'folderHandle');
            routeParams.subscribe(function (param) {
                if (_this.routerState.params[param]) {
                    handle = {
                        id: param,
                        value: _this.routerState.params[param]
                    };
                }
            });
            return _this.mailService.getMails(handle)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (mails) {
                return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GetMailsSuccess"]({
                    loaded: handle,
                    mails: mails
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GetMailsFailed"](err)); }));
        }));
        /**
         * Update Mail
         * @type {Observable<any>}
         */
        this.updateMail = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_MAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this.mailService.updateMail(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateMailSuccess"](action.payload);
            }));
        }));
        /**
         * UpdateMails
         * @type {Observable<any>}
         */
        this.updateMails = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_MAILS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(action.payload.map(function (mail) { return _this.mailService.updateMail(mail); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateMailsSuccess"]();
            }));
        }));
        /**
         * Set Current Mail
         * @type {Observable<SetCurrentMailSuccess>}
         */
        this.setCurrentMail = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["SET_CURRENT_MAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_6__["getMailsState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["SetCurrentMailSuccess"](state.entities[action.payload]);
        }));
        /**
         * Check Current Mail
         * Navigate to parent directory if not exist in mail list
         * Update Current Mail if exist in mail list
         * @type {Observable<any>}
         */
        this.checkCurrentMail = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["CHECK_CURRENT_MAIL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_6__["getMailsState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            if (!state.entities[_this.routerState.params.mailId]) {
                return new app_store__WEBPACK_IMPORTED_MODULE_8__["Go"]({ path: [_this.routerState.url.replace(_this.routerState.params.mailId, '')] });
            }
            return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["SetCurrentMailSuccess"](state.entities[_this.routerState.params.mailId]);
        }));
        /**
         * On Get Mails Success
         * @type {Observable<CheckCurrentMail>}
         */
        this.getMailsSuccess = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GET_MAILS_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            return [
                new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["CheckCurrentMail"]()
            ];
        }));
        /**
         * On Update Mails Success
         * @type {Observable<DeselectAllMails | GetMails>}
         */
        this.updateMailsSuccess = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_MAILS_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            return [
                new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["DeselectAllMails"](),
                new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GetMails"]()
            ];
        }));
        /**
         * On Update Mail Success
         * @type {Observable<GetMails>}
         */
        this.updateMailSuccess = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_MAIL_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["GetMails"]();
        }));
        /**
         * Set Folder on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.setFolderOnSelectedMails = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["SET_FOLDER_ON_SELECTED_MAILS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_6__["getMailsState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { folder: action.payload })
                ]);
            });
            return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateMails"](mailsToUpdate);
        }));
        /**
         * Add Label on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.addLabelOnSelectedMails = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["ADD_LABEL_ON_SELECTED_MAILS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_6__["getMailsState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                var labels = entities[id].labels.slice();
                if (!entities[id].labels.includes(action.payload)) {
                    labels = labels.concat([action.payload]);
                }
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { labels: labels })
                ]);
            });
            return new app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateMails"](mailsToUpdate);
        }));
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getRouterState"]))
            .subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "getMails", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "updateMail", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "updateMails", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "setCurrentMail", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "checkCurrentMail", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "getMailsSuccess", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "updateMailsSuccess", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "updateMailSuccess", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "setFolderOnSelectedMails", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MailsEffect.prototype, "addLabelOnSelectedMails", void 0);
    MailsEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            app_main_apps_mail_ngrx_mail_service__WEBPACK_IMPORTED_MODULE_9__["MailNgrxService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], MailsEffect);
    return MailsEffect;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/guards/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/guards/index.ts ***!
  \***********************************************************/
/*! exports provided: ResolveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resolve_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve.guard */ "./src/app/main/apps/mail-ngrx/store/guards/resolve.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveGuard", function() { return _resolve_guard__WEBPACK_IMPORTED_MODULE_0__["ResolveGuard"]; });




/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/guards/resolve.guard.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/guards/resolve.guard.ts ***!
  \*******************************************************************/
/*! exports provided: ResolveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveGuard", function() { return ResolveGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store */ "./src/app/main/apps/mail-ngrx/store/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/index.ts");
/* harmony import */ var app_store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/store/reducers */ "./src/app/store/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResolveGuard = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Store<MailAppState>} _store
     */
    function ResolveGuard(_store) {
        var _this = this;
        this._store = _store;
        this._store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getRouterState"]))
            .subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    /**
     * Can activate
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean>}
     */
    ResolveGuard.prototype.canActivate = function (route, state) {
        return this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false); }));
    };
    /**
     * Check store
     *
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.checkStore = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.getFolders(), this.getFilters(), this.getLabels()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var foldersLoaded = _a[0], filtersLoaded = _a[1], labelsLoaded = _a[2];
            return !!(foldersLoaded && filtersLoaded && labelsLoaded);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.getMails();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["SetCurrentMail"](_this.routerState.params.mailId)); }));
    };
    /**
     * Get folders
     *
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getFolders = function () {
        var _this = this;
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getFoldersLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loaded) {
            if (!loaded) {
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["GetFolders"]([]));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (loaded) { return loaded; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    /**
     * Get Filters
     *
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getFilters = function () {
        var _this = this;
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getFiltersLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loaded) {
            if (!loaded) {
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["GetFilters"]([]));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (loaded) { return loaded; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    /**
     * Get Labels
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getLabels = function () {
        var _this = this;
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getLabelsLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loaded) {
            if (!loaded) {
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["GetLabels"]([]));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (loaded) { return loaded; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    /**
     * Get Mails
     *
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getMails = function () {
        var _this = this;
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(app_main_apps_mail_ngrx_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getMailsLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loaded) {
            if (!_this.routerState.params[loaded.id] || _this.routerState.params[loaded.id] !== loaded.value) {
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["GetMails"]());
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["SetSearchText"](''));
                _this._store.dispatch(new app_main_apps_mail_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["DeselectAllMails"]());
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (loaded) {
            return _this.routerState.params[loaded.id] && _this.routerState.params[loaded.id] === loaded.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    ResolveGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ResolveGuard);
    return ResolveGuard;
}());



/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/index.ts":
/*!****************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/index.ts ***!
  \****************************************************/
/*! exports provided: getMailAppState, getAppState, reducers, GET_MAILS, GET_MAILS_SUCCESS, GET_MAILS_FAILED, SET_CURRENT_MAIL, SET_CURRENT_MAIL_SUCCESS, CHECK_CURRENT_MAIL, UPDATE_MAIL, UPDATE_MAIL_SUCCESS, UPDATE_MAILS, UPDATE_MAILS_SUCCESS, SET_SEARCH_TEXT, SELECT_ALL_MAILS, DESELECT_ALL_MAILS, TOGGLE_IN_SELECTED_MAILS, SELECT_MAILS_BY_PARAMETER, SET_FOLDER_ON_SELECTED_MAILS, ADD_LABEL_ON_SELECTED_MAILS, GetMails, GetMailsSuccess, GetMailsFailed, SetCurrentMail, SetCurrentMailSuccess, CheckCurrentMail, UpdateMail, UpdateMailSuccess, UpdateMails, UpdateMailsSuccess, SetSearchText, SelectAllMails, DeselectAllMails, ToggleInSelectedMails, SelectMailsByParameter, SetFolderOnSelectedMails, AddLabelOnSelectedMails, GET_FOLDERS, GET_FOLDERS_SUCCESS, GET_FOLDERS_FAILED, GetFolders, GetFoldersSuccess, GetFoldersFailed, GET_FILTERS, GET_FILTERS_SUCCESS, GET_FILTERS_FAILED, GetFilters, GetFiltersSuccess, GetFiltersFailed, GET_LABELS, GET_LABELS_SUCCESS, GET_LABELS_FAILED, GetLabels, GetLabelsSuccess, GetLabelsFailed, MailsInitialState, MailsReducer, FoldersInitialState, FoldersReducer, FiltersInitialState, FiltersReducer, LabelsInitialState, LabelsReducer, getMailsState, getMails, getMailsLoaded, getSearchText, getMailsArr, getCurrentMail, getSelectedMailIds, getFoldersState, getFolders, getFoldersLoaded, getFoldersArr, getFiltersState, getFilters, getFiltersLoaded, getFiltersArr, getLabelsState, getLabels, getLabelsLoaded, getLabelsArr, effects, MailsEffect, FoldersEffect, FiltersEffect, LabelsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/main/apps/mail-ngrx/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MAILS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MAIL_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MAIL_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_CURRENT_MAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_CURRENT_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAIL_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAIL_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MAILS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAILS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_TEXT", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_ALL_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_ALL_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESELECT_ALL_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DESELECT_ALL_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_IN_SELECTED_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_IN_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_MAILS_BY_PARAMETER", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_MAILS_BY_PARAMETER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FOLDER_ON_SELECTED_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SET_FOLDER_ON_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_LABEL_ON_SELECTED_MAILS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LABEL_ON_SELECTED_MAILS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMailsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetMailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMailsFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetMailsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentMailSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentMailSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckCurrentMail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CheckCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMailSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMailSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateMailsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateMailsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSearchText", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetSearchText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SelectAllMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeselectAllMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeselectAllMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleInSelectedMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ToggleInSelectedMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMailsByParameter", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SelectMailsByParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFolderOnSelectedMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SetFolderOnSelectedMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddLabelOnSelectedMails", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["AddLabelOnSelectedMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FOLDERS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFolders", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFolders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFoldersSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFoldersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFoldersFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFoldersFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilters", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFiltersSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFiltersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFiltersFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetFiltersFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LABELS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabels", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabelsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetLabelsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetLabelsFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetLabelsFailed"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailAppState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getMailAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsInitialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["MailsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["MailsReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersInitialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["FoldersInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["FoldersReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersInitialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["FiltersInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["FiltersReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsInitialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["LabelsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["LabelsReducer"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getMailsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMails", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getMailsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchText", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSearchText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsArr", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getMailsArr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentMail", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMailIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedMailIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFoldersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFolders", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFolders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFoldersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersArr", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFoldersArr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersArr", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersArr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLabelsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabels", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLabelsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsArr", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLabelsArr"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ "./src/app/main/apps/mail-ngrx/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsEffect", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["MailsEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersEffect", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["FoldersEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersEffect", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["FiltersEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsEffect", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["LabelsEffect"]; });







/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/reducers/filters.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/reducers/filters.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: FiltersInitialState, FiltersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersInitialState", function() { return FiltersInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersReducer", function() { return FiltersReducer; });
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/filters.actions */ "./src/app/main/apps/mail-ngrx/store/actions/filters.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var FiltersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FiltersReducer(state, action) {
    if (state === void 0) { state = FiltersInitialState; }
    switch (action.type) {
        case app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS"]:
            return __assign({}, state, { loading: true, loaded: false });
        case app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS_SUCCESS"]:
            var filters = action.payload;
            var entities = filters.reduce(function (_entities, filter) {
                return __assign({}, _entities, (_a = {}, _a[filter.id] = filter, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case app_main_apps_mail_ngrx_store_actions_filters_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERS_FAILED"]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/reducers/folders.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/reducers/folders.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: FoldersInitialState, FoldersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersInitialState", function() { return FoldersInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersReducer", function() { return FoldersReducer; });
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/folders.actions */ "./src/app/main/apps/mail-ngrx/store/actions/folders.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var FoldersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FoldersReducer(state, action) {
    if (state === void 0) { state = FoldersInitialState; }
    switch (action.type) {
        case app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS"]:
            return __assign({}, state, { loading: true, loaded: false });
        case app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS_SUCCESS"]:
            var folders = action.payload;
            var entities = folders.reduce(function (_entities, folder) {
                return __assign({}, _entities, (_a = {}, _a[folder.id] = folder, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case app_main_apps_mail_ngrx_store_actions_folders_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FOLDERS_FAILED"]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/reducers/index.ts ***!
  \*************************************************************/
/*! exports provided: getMailAppState, getAppState, reducers, MailsInitialState, MailsReducer, FoldersInitialState, FoldersReducer, FiltersInitialState, FiltersReducer, LabelsInitialState, LabelsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailAppState", function() { return getMailAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _mails_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mails.reducer */ "./src/app/main/apps/mail-ngrx/store/reducers/mails.reducer.ts");
/* harmony import */ var _folders_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folders.reducer */ "./src/app/main/apps/mail-ngrx/store/reducers/folders.reducer.ts");
/* harmony import */ var _filters_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.reducer */ "./src/app/main/apps/mail-ngrx/store/reducers/filters.reducer.ts");
/* harmony import */ var _labels_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labels.reducer */ "./src/app/main/apps/mail-ngrx/store/reducers/labels.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsInitialState", function() { return _mails_reducer__WEBPACK_IMPORTED_MODULE_1__["MailsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailsReducer", function() { return _mails_reducer__WEBPACK_IMPORTED_MODULE_1__["MailsReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersInitialState", function() { return _folders_reducer__WEBPACK_IMPORTED_MODULE_2__["FoldersInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoldersReducer", function() { return _folders_reducer__WEBPACK_IMPORTED_MODULE_2__["FoldersReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersInitialState", function() { return _filters_reducer__WEBPACK_IMPORTED_MODULE_3__["FiltersInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersReducer", function() { return _filters_reducer__WEBPACK_IMPORTED_MODULE_3__["FiltersReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsInitialState", function() { return _labels_reducer__WEBPACK_IMPORTED_MODULE_4__["LabelsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelsReducer", function() { return _labels_reducer__WEBPACK_IMPORTED_MODULE_4__["LabelsReducer"]; });






var getMailAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('mail-app');
var getAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMailAppState, function (state) { return state; });
var reducers = {
    mails: _mails_reducer__WEBPACK_IMPORTED_MODULE_1__["MailsReducer"],
    folders: _folders_reducer__WEBPACK_IMPORTED_MODULE_2__["FoldersReducer"],
    filters: _filters_reducer__WEBPACK_IMPORTED_MODULE_3__["FiltersReducer"],
    labels: _labels_reducer__WEBPACK_IMPORTED_MODULE_4__["LabelsReducer"]
};






/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/reducers/labels.reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/reducers/labels.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: LabelsInitialState, LabelsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsInitialState", function() { return LabelsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsReducer", function() { return LabelsReducer; });
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_labels_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/labels.actions */ "./src/app/main/apps/mail-ngrx/store/actions/labels.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var LabelsInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function LabelsReducer(state, action) {
    if (state === void 0) { state = LabelsInitialState; }
    switch (action.type) {
        case app_main_apps_mail_ngrx_store_actions_labels_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS"]:
            return __assign({}, state, { loading: true, loaded: false });
        case app_main_apps_mail_ngrx_store_actions_labels_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_SUCCESS"]:
            var labels = action.payload;
            var entities = labels.reduce(function (_entities, label) {
                return __assign({}, _entities, (_a = {}, _a[label.id] = label, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case app_main_apps_mail_ngrx_store_actions_labels_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LABELS_FAILED"]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/reducers/mails.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/reducers/mails.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: MailsInitialState, MailsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsInitialState", function() { return MailsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsReducer", function() { return MailsReducer; });
/* harmony import */ var app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/actions/mails.actions */ "./src/app/main/apps/mail-ngrx/store/actions/mails.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var MailsInitialState = {
    entities: {},
    currentMail: null,
    selectedMailIds: [],
    searchText: '',
    loading: false,
    loaded: false
};
function MailsReducer(state, action) {
    if (state === void 0) { state = MailsInitialState; }
    switch (action.type) {
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS"]:
            {
                return __assign({}, state, { loading: true });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_SUCCESS"]:
            {
                var mails = action.payload.mails;
                var loaded = action.payload.loaded;
                var entities = mails.reduce(function (_entities, mail) {
                    return __assign({}, _entities, (_a = {}, _a[mail.id] = mail, _a));
                    var _a;
                }, {});
                return __assign({}, state, { entities: entities, loading: false, loaded: loaded });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAILS_FAILED"]:
            {
                return __assign({}, state, { loading: false, loaded: false });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MAIL_SUCCESS"]:
            {
                return __assign({}, state, { currentMail: action.payload });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MAIL_SUCCESS"]:
            {
                return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[action.payload.id] = action.payload, _a)) });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_TEXT"]:
            {
                return __assign({}, state, { searchText: action.payload });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_IN_SELECTED_MAILS"]:
            {
                var mailId_1 = action.payload;
                var selectedMailIds = state.selectedMailIds.slice();
                if (selectedMailIds.find(function (id) { return id === mailId_1; }) !== undefined) {
                    selectedMailIds = selectedMailIds.filter(function (id) { return id !== mailId_1; });
                }
                else {
                    selectedMailIds = selectedMailIds.concat([mailId_1]);
                }
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_ALL_MAILS"]:
            {
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["DESELECT_ALL_MAILS"]:
            {
                return __assign({}, state, { selectedMailIds: [] });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_MAILS_BY_PARAMETER"]:
            {
                var filter_1 = action.payload;
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.filter(function (mail) { return mail[filter_1.parameter] === filter_1.value; })
                    .map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case app_main_apps_mail_ngrx_store_actions_mails_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FOLDER_ON_SELECTED_MAILS"]:
            {
                var entities_1 = __assign({}, state.entities);
                state.selectedMailIds.map(function (id) {
                    entities_1[id] = __assign({}, entities_1[id], { folder: action.payload });
                });
                return __assign({}, state, { entities: entities_1 });
            }
        default:
            return state;
    }
    var _a;
}


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/selectors/filters.selectors.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/selectors/filters.selectors.ts ***!
  \**************************************************************************/
/*! exports provided: getFiltersState, getFilters, getFiltersLoaded, getFiltersArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersState", function() { return getFiltersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return getFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersLoaded", function() { return getFiltersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersArr", function() { return getFiltersArr; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");


var getFiltersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getMailAppState"], function (state) { return state.filters; });
var getFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFiltersState, function (state) { return state.entities; });
var getFiltersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFiltersState, function (state) { return state.loaded; });
var getFiltersArr = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFilters, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/selectors/folders.selectors.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/selectors/folders.selectors.ts ***!
  \**************************************************************************/
/*! exports provided: getFoldersState, getFolders, getFoldersLoaded, getFoldersArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFoldersState", function() { return getFoldersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFolders", function() { return getFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFoldersLoaded", function() { return getFoldersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFoldersArr", function() { return getFoldersArr; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");


var getFoldersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getMailAppState"], function (state) { return state.folders; });
var getFolders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFoldersState, function (state) { return state.entities; });
var getFoldersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFoldersState, function (state) { return state.loaded; });
var getFoldersArr = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFolders, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/selectors/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/selectors/index.ts ***!
  \**************************************************************/
/*! exports provided: getMailsState, getMails, getMailsLoaded, getSearchText, getMailsArr, getCurrentMail, getSelectedMailIds, getFoldersState, getFolders, getFoldersLoaded, getFoldersArr, getFiltersState, getFilters, getFiltersLoaded, getFiltersArr, getLabelsState, getLabels, getLabelsLoaded, getLabelsArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mails_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mails.selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/mails.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsState", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getMailsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMails", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getMails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsLoaded", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getMailsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchText", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getSearchText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMailsArr", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getMailsArr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentMail", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getCurrentMail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMailIds", function() { return _mails_selectors__WEBPACK_IMPORTED_MODULE_0__["getSelectedMailIds"]; });

/* harmony import */ var _folders_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders.selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/folders.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersState", function() { return _folders_selectors__WEBPACK_IMPORTED_MODULE_1__["getFoldersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFolders", function() { return _folders_selectors__WEBPACK_IMPORTED_MODULE_1__["getFolders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersLoaded", function() { return _folders_selectors__WEBPACK_IMPORTED_MODULE_1__["getFoldersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFoldersArr", function() { return _folders_selectors__WEBPACK_IMPORTED_MODULE_1__["getFoldersArr"]; });

/* harmony import */ var _filters_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/filters.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersState", function() { return _filters_selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return _filters_selectors__WEBPACK_IMPORTED_MODULE_2__["getFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersLoaded", function() { return _filters_selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersArr", function() { return _filters_selectors__WEBPACK_IMPORTED_MODULE_2__["getFiltersArr"]; });

/* harmony import */ var _labels_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labels.selectors */ "./src/app/main/apps/mail-ngrx/store/selectors/labels.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsState", function() { return _labels_selectors__WEBPACK_IMPORTED_MODULE_3__["getLabelsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabels", function() { return _labels_selectors__WEBPACK_IMPORTED_MODULE_3__["getLabels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsLoaded", function() { return _labels_selectors__WEBPACK_IMPORTED_MODULE_3__["getLabelsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabelsArr", function() { return _labels_selectors__WEBPACK_IMPORTED_MODULE_3__["getLabelsArr"]; });







/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/selectors/labels.selectors.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/selectors/labels.selectors.ts ***!
  \*************************************************************************/
/*! exports provided: getLabelsState, getLabels, getLabelsLoaded, getLabelsArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelsState", function() { return getLabelsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabels", function() { return getLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelsLoaded", function() { return getLabelsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelsArr", function() { return getLabelsArr; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");


var getLabelsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getMailAppState"], function (state) { return state.labels; });
var getLabels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLabelsState, function (state) { return state.entities; });
var getLabelsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLabelsState, function (state) { return state.loaded; });
var getLabelsArr = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLabels, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/selectors/mails.selectors.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/selectors/mails.selectors.ts ***!
  \************************************************************************/
/*! exports provided: getMailsState, getMails, getMailsLoaded, getSearchText, getMailsArr, getCurrentMail, getSelectedMailIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailsState", function() { return getMailsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMails", function() { return getMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailsLoaded", function() { return getMailsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchText", function() { return getSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailsArr", function() { return getMailsArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentMail", function() { return getCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedMailIds", function() { return getSelectedMailIds; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");



var getMailsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getMailAppState"], function (state) { return state.mails; });
var getMails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMailsState, function (state) { return state.entities; });
var getMailsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMailsState, function (state) { return state.loaded; });
var getSearchText = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMailsState, function (state) { return state.searchText; });
var getMailsArr = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMails, getSearchText, function (entities, searchText) {
    var arr = Object.keys(entities).map(function (id) { return entities[id]; });
    return _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].filterArrayByString(arr, searchText);
});
var getCurrentMail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMailsState, function (state) { return state.currentMail; });
var getSelectedMailIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMailsState, function (state) { return state.selectedMailIds; });


/***/ }),

/***/ "./src/app/main/apps/mail-ngrx/store/store.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/mail-ngrx/store/store.module.ts ***!
  \***********************************************************/
/*! exports provided: MailNgrxStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNgrxStoreModule", function() { return MailNgrxStoreModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/reducers */ "./src/app/main/apps/mail-ngrx/store/reducers/index.ts");
/* harmony import */ var app_main_apps_mail_ngrx_store_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/mail-ngrx/store/effects */ "./src/app/main/apps/mail-ngrx/store/effects/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MailNgrxStoreModule = /** @class */ (function () {
    function MailNgrxStoreModule() {
    }
    MailNgrxStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forFeature('mail-app', app_main_apps_mail_ngrx_store_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature(app_main_apps_mail_ngrx_store_effects__WEBPACK_IMPORTED_MODULE_4__["effects"])
            ],
            providers: []
        })
    ], MailNgrxStoreModule);
    return MailNgrxStoreModule;
}());



/***/ })

}]);
//# sourceMappingURL=mail-ngrx-mail-module.js.map