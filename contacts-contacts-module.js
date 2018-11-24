(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./src/app/main/apps/contacts/contact-form/contact-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-form/contact-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-icon-button (click)=\"matDialogRef.close()\" aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"toolbar-bottom py-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <img [src]=\"contact.avatar\" class=\"avatar contact-avatar huge m-0\"\n                 [alt]=\"contact.name\"/>\n            <div class=\"contact-name mt-8\">{{contact.name}} {{contact.lastName}}</div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form [formGroup]=\"contactForm\">\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">account_circle</mat-icon>\n                    <input name=\"name\" formControlName=\"name\" placeholder=\"Name\" matInput required>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">account_circle</mat-icon>\n                    <input name=\"lastName\" formControlName=\"lastName\" placeholder=\"Lastname\" matInput>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">star</mat-icon>\n                    <input name=\"nickname\" formControlName=\"nickname\" matInput placeholder=\"Nickname\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">phone</mat-icon>\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">email</mat-icon>\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">domain</mat-icon>\n                    <input name=\"company\" formControlName=\"company\" matInput placeholder=\"Company\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">work</mat-icon>\n                    <input name=\"jobTitle\" formControlName=\"jobTitle\" matInput placeholder=\"Job title\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field class=\"mr-24\" fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">cake</mat-icon>\n                    <input matInput [matDatepicker]=\"birthdayDatePicker\" placeholder=\"Birthday\">\n                    <mat-datepicker-toggle matSuffix [for]=\"birthdayDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #birthdayDatePicker></mat-datepicker>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <mat-icon matPrefix class=\"mr-12 s-20 secondary-text\">home</mat-icon>\n                    <input name=\"address\" formControlName=\"address\" matInput placeholder=\"Address\">\n                </mat-form-field>\n            </div>\n\n            <div fxLayout=\"row\" class=\"textarea-wrapper\" fxLayoutAlign=\"start start\">\n                <mat-form-field fxFlex>\n                    <textarea name=\"notes\" formControlName=\"notes\" placeholder=\"Notes\" matInput type=\"text\"\n                              max-rows=\"4\"></textarea>\n                </mat-form-field>\n            </div>\n\n        </form>\n\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"matDialogRef.close(contactForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"matDialogRef.close(['save',contactForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-icon-button\n                (click)=\"matDialogRef.close(['delete',contactForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contact-form/contact-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-form/contact-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: flex;\n    flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contact-form/contact-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-form/contact-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactsContactFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsContactFormDialogComponent", function() { return ContactsContactFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/contacts/contact.model */ "./src/app/main/apps/contacts/contact.model.ts");
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




var ContactsContactFormDialogComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    function ContactsContactFormDialogComponent(matDialogRef, _data, _formBuilder) {
        this.matDialogRef = matDialogRef;
        this._data = _data;
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.action = _data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Contact';
            this.contact = _data.contact;
        }
        else {
            this.dialogTitle = 'New Contact';
            this.contact = new app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_3__["Contact"]({});
        }
        this.contactForm = this.createContactForm();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    ContactsContactFormDialogComponent.prototype.createContactForm = function () {
        return this._formBuilder.group({
            id: [this.contact.id],
            name: [this.contact.name],
            lastName: [this.contact.lastName],
            avatar: [this.contact.avatar],
            nickname: [this.contact.nickname],
            company: [this.contact.company],
            jobTitle: [this.contact.jobTitle],
            email: [this.contact.email],
            phone: [this.contact.phone],
            address: [this.contact.address],
            birthday: [this.contact.birthday],
            notes: [this.contact.notes]
        });
    };
    ContactsContactFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contacts-contact-form-dialog',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/main/apps/contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/main/apps/contacts/contact-form/contact-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactsContactFormDialogComponent);
    return ContactsContactFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/contact-list/contact-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-list/contact-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"checkbox\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[contact.id]\" (ngModelChange)=\"onSelectedChange(contact.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Avatar Column -->\n    <ng-container matColumnDef=\"avatar\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\">\n            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\n                 [src]=\"contact.avatar\"/>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\">\n            <p class=\"text-truncate font-weight-600\">{{contact.name}} {{contact.lastName}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm>Email</mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-sm>\n            <p class=\"email text-truncate\">\n                {{contact.email}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Phone Column -->\n    <ng-container matColumnDef=\"phone\">\n        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Phone</mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\n            <p class=\"phone text-truncate\">\n                {{contact.phone}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Job Title Column -->\n    <ng-container matColumnDef=\"jobTitle\">\n        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-lg>Job title</mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-lg>\n            <p class=\"job-title text-truncate\">\n                {{contact.jobTitle}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Company Column -->\n    <ng-container matColumnDef=\"company\">\n        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-lg>Company</mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-lg>\n            <p class=\"company text-truncate\">\n                {{contact.company}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Buttons Column -->\n    <ng-container matColumnDef=\"buttons\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let contact\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button (click)=\"$event.stopPropagation();toggleStar(contact.id)\" aria-label=\"Toggle star\">\n                    <mat-icon class=\"amber-fg\" *ngIf=\"user.starred.includes(contact.id)\">star</mat-icon>\n                    <mat-icon class=\"secondary-text\" *ngIf=\"!user.starred.includes(contact.id)\">star_outline</mat-icon>\n                </button>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon class=\"secondary-text\">more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteContact(contact)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let contact; columns: displayedColumns;\"\n             class=\"contact\"\n             (click)=\"editContact(contact)\"\n             [ngClass]=\"{'accent-50':checkboxes[contact.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contact-list/contact-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-list/contact-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ncontacts-contact-list {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%; }\ncontacts-contact-list .mat-table {\n    width: 100%;\n    background: transparent;\n    box-shadow: none; }\ncontacts-contact-list .mat-table .mat-column-checkbox {\n      flex: 0 1 64px;\n      padding-left: 18px; }\ncontacts-contact-list .mat-table .mat-column-avatar {\n      flex: 0 1 64px; }\ncontacts-contact-list .mat-table .mat-column-buttons {\n      flex: 0 1 80px; }\ncontacts-contact-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px; }\ncontacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\ncontacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n@media (max-width: 599px) {\n    #add-contact-button {\n      position: -webkit-sticky;\n      position: sticky;\n      top: calc(100vh - 72px);\n      bottom: auto; } }\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contact-list/contact-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/contacts/contact-list/contact-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactsContactListComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsContactListComponent", function() { return ContactsContactListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/contacts/contacts.service */ "./src/app/main/apps/contacts/contacts.service.ts");
/* harmony import */ var app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/contacts/contact-form/contact-form.component */ "./src/app/main/apps/contacts/contact-form/contact-form.component.ts");
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









var ContactsContactListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {MatDialog} _matDialog
     */
    function ContactsContactListComponent(_contactsService, _matDialog) {
        this._contactsService = _contactsService;
        this._matDialog = _matDialog;
        this.displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ContactsContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this._contactsService);
        this._contactsService.onContactsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (contacts) {
            _this.contacts = contacts;
            _this.checkboxes = {};
            contacts.map(function (contact) {
                _this.checkboxes[contact.id] = false;
            });
        });
        this._contactsService.onSelectedContactsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedContacts) {
            for (var id in _this.checkboxes) {
                if (!_this.checkboxes.hasOwnProperty(id)) {
                    continue;
                }
                _this.checkboxes[id] = selectedContacts.includes(id);
            }
            _this.selectedContacts = selectedContacts;
        });
        this._contactsService.onUserDataChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (user) {
            _this.user = user;
        });
        this._contactsService.onFilterChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this._contactsService.deselectContacts();
        });
    };
    /**
     * On destroy
     */
    ContactsContactListComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Edit contact
     *
     * @param contact
     */
    ContactsContactListComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.dialogRef = this._matDialog.open(app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactsContactFormDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                contact: contact,
                action: 'edit'
            }
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
                 * Save
                 */
                case 'save':
                    _this._contactsService.updateContact(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteContact(contact);
                    break;
            }
        });
    };
    /**
     * Delete Contact
     */
    ContactsContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._contactsService.deleteContact(contact);
            }
            _this.confirmDialogRef = null;
        });
    };
    /**
     * On selected change
     *
     * @param contactId
     */
    ContactsContactListComponent.prototype.onSelectedChange = function (contactId) {
        this._contactsService.toggleSelectedContact(contactId);
    };
    /**
     * Toggle star
     *
     * @param contactId
     */
    ContactsContactListComponent.prototype.toggleStar = function (contactId) {
        if (this.user.starred.includes(contactId)) {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else {
            this.user.starred.push(contactId);
        }
        this._contactsService.updateUserData(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialogContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ContactsContactListComponent.prototype, "dialogContent", void 0);
    ContactsContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contacts-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/main/apps/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/main/apps/contacts/contact-list/contact-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactsContactListComponent);
    return ContactsContactListComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     */
    function FilesDataSource(_contactsService) {
        var _this = _super.call(this) || this;
        _this._contactsService = _contactsService;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        return this._contactsService.onContactsChanged;
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/main/apps/contacts/contact.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/apps/contacts/contact.model.ts ***!
  \*****************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var Contact = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param contact
     */
    function Contact(contact) {
        {
            this.id = contact.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birhday || '';
            this.notes = contact.notes || '';
        }
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/contacts.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidebar inner-sidebar inner-scroll\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\n         fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <!-- APP TITLE -->\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button class=\"sidebar-toggle mr-12\" fxHide.gt-md\n                    (click)=\"toggleSidebar('contacts-main-sidebar')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\"\n                          [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box\n                </mat-icon>\n                <span class=\"logo-text h1\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    Contacts\n                </span>\n            </div>\n\n        </div>\n        <!-- / APP TITLE -->\n\n        <!-- SEARCH -->\n        <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <label for=\"search\" class=\"mr-8\">\n                <mat-icon>search</mat-icon>\n            </label>\n            <mat-form-field mat-no-float class=\"m-0\" floatLabel=\"never\">\n                <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for anything\">\n            </mat-form-field>\n        </div>\n        <!-- / SEARCH -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- SELECTED BAR -->\n    <selected-bar class=\"accent-600\" *ngIf=\"hasSelectedContacts\" [@slideInTop]></selected-bar>\n    <!-- / SELECTED BAR -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <!-- SIDEBAR -->\n        <fuse-sidebar class=\"sidebar\" name=\"contacts-main-sidebar\" position=\"left\" lockedOpen=\"gt-sm\">\n\n            <!-- SIDEBAR CONTENT -->\n            <div class=\"content\" fusePerfectScrollbar>\n                <contacts-main-sidebar [@animate]=\"{value:'*'}\"></contacts-main-sidebar>\n            </div>\n            <!-- / SIDEBAR CONTENT -->\n\n        </fuse-sidebar>\n        <!-- / SIDEBAR -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24 pb-56 pr-sm-92\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-elevation-z4\">\n                <contacts-contact-list></contacts-contact-list>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </div>\n    <!-- / CONTENT-->\n\n</div>\n\n<!-- ADD CONTACT BUTTON -->\n<button mat-fab class=\"accent\" id=\"add-contact-button\" (click)=\"newContact()\" aria-label=\"add contact\"\n        [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\n    <mat-icon>person_add</mat-icon>\n</button>\n<!-- / ADD CONTACT BUTTON -->\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contacts.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacts .content {\n  overflow: hidden; }\n  #contacts .content .sidebar:not(.locked-open) {\n    background: white; }\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/contacts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/contacts/contacts.service */ "./src/app/main/apps/contacts/contacts.service.ts");
/* harmony import */ var app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/contacts/contact-form/contact-form.component */ "./src/app/main/apps/contacts/contact-form/contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     */
    function ContactsComponent(_contactsService, _fuseSidebarService, _matDialog) {
        this._contactsService = _contactsService;
        this._fuseSidebarService = _fuseSidebarService;
        this._matDialog = _matDialog;
        // Set the defaults
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactsService.onSelectedContactsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedContacts) {
            _this.hasSelectedContacts = selectedContacts.length > 0;
        });
        this.searchInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this._contactsService.onSearchTextChanged.next(searchText);
        });
    };
    /**
     * On destroy
     */
    ContactsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * New contact
     */
    ContactsComponent.prototype.newContact = function () {
        var _this = this;
        this.dialogRef = this._matDialog.open(app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactsContactFormDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this._contactsService.updateContact(response.getRawValue());
        });
    };
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    ContactsComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/main/apps/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/main/apps/contacts/contacts.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"],
            _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["FuseSidebarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/contacts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_apps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/contacts/contacts.component */ "./src/app/main/apps/contacts/contacts.component.ts");
/* harmony import */ var app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/contacts/contacts.service */ "./src/app/main/apps/contacts/contacts.service.ts");
/* harmony import */ var app_main_apps_contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/contacts/contact-list/contact-list.component */ "./src/app/main/apps/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var app_main_apps_contacts_selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/contacts/selected-bar/selected-bar.component */ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.ts");
/* harmony import */ var app_main_apps_contacts_sidebars_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/contacts/sidebars/main/main.component */ "./src/app/main/apps/contacts/sidebars/main/main.component.ts");
/* harmony import */ var app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/contacts/contact-form/contact-form.component */ "./src/app/main/apps/contacts/contact-form/contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: app_main_apps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"],
        resolve: {
            contacts: app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactsService"]
        }
    }
];
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"],
                app_main_apps_contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactsContactListComponent"],
                app_main_apps_contacts_selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_8__["ContactsSelectedBarComponent"],
                app_main_apps_contacts_sidebars_main_main_component__WEBPACK_IMPORTED_MODULE_9__["ContactsMainSidebarComponent"],
                app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactsContactFormDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseConfirmDialogModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseSidebarModule"]
            ],
            providers: [
                app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_6__["ContactsService"]
            ],
            entryComponents: [
                app_main_apps_contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactsContactFormDialogComponent"]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/contacts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/apps/contacts/contacts.service.ts ***!
  \********************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/contacts/contact.model */ "./src/app/main/apps/contacts/contact.model.ts");
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





var ContactsService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ContactsService(_httpClient) {
        this._httpClient = _httpClient;
        this.selectedContacts = [];
        // Set the defaults
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onUserDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ContactsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getUserData()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/contacts-contacts')
                .subscribe(function (response) {
                _this.contacts = response;
                if (_this.filterBy === 'starred') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.starred.includes(_contact.id);
                    });
                }
                if (_this.filterBy === 'frequent') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (_this.searchText && _this.searchText !== '') {
                    _this.contacts = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.contacts, _this.searchText);
                }
                _this.contacts = _this.contacts.map(function (contact) {
                    return new app_main_apps_contacts_contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    ContactsService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    ContactsService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that contact as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    ContactsService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    /**
     * Select contacts
     *
     * @param filterParameter
     * @param filterValue
     */
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all contacts
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
            });
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    ContactsService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/contacts-user/' + _this.user.id, __assign({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    /**
     * Deselect contacts
     */
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Delete contact
     *
     * @param contact
     */
    ContactsService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    /**
     * Delete selected contacts
     */
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    ContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/selected-bar/selected-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\n\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\n            <span class=\"text-uppercase\">Back</span>\n        </button>\n    </div>\n\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\n\n        <div>\n            <span class=\"selected-contacts-count\">\n                <span class=\"mr-4\">{{selectedContacts.length}}</span>\n                <span>selected</span>\n            </span>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\n            </mat-menu>\n\n        </div>\n\n        <div class=\"multi-select-actions\">\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\n                <mat-icon>delete</mat-icon>\n            </button>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/contacts/selected-bar/selected-bar.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/contacts/selected-bar/selected-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactsSelectedBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsSelectedBarComponent", function() { return ContactsSelectedBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/contacts/contacts.service */ "./src/app/main/apps/contacts/contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsSelectedBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {MatDialog} _matDialog
     */
    function ContactsSelectedBarComponent(_contactsService, _matDialog) {
        this._contactsService = _contactsService;
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
    ContactsSelectedBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactsService.onSelectedContactsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedContacts) {
            _this.selectedContacts = selectedContacts;
            setTimeout(function () {
                _this.hasSelectedContacts = selectedContacts.length > 0;
                _this.isIndeterminate = (selectedContacts.length !== _this._contactsService.contacts.length && selectedContacts.length > 0);
            }, 0);
        });
    };
    /**
     * On destroy
     */
    ContactsSelectedBarComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Select all
     */
    ContactsSelectedBarComponent.prototype.selectAll = function () {
        this._contactsService.selectContacts();
    };
    /**
     * Deselect all
     */
    ContactsSelectedBarComponent.prototype.deselectAll = function () {
        this._contactsService.deselectContacts();
    };
    /**
     * Delete selected contacts
     */
    ContactsSelectedBarComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this._contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    ContactsSelectedBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'selected-bar',
            template: __webpack_require__(/*! ./selected-bar.component.html */ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__(/*! ./selected-bar.component.scss */ "./src/app/main/apps/contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactsSelectedBarComponent);
    return ContactsSelectedBarComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/contacts/sidebars/main/main.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/contacts/sidebars/main/main.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-content\">\n\n    <div class=\"card\">\n\n        <!-- SIDEBAR HEADER -->\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <!-- USER -->\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\n            <span class=\"h5\">{{user.name}}</span>\n            <!-- / USER -->\n\n        </div>\n        <!-- / SIDEBAR HEADER -->\n\n        <!-- SIDEBAR CONTENT -->\n        <div class=\"content py-16\" fusePerfectScrollbar>\n\n            <div class=\"nav\">\n\n                <div class=\"nav-item\" aria-label=\"inbox\">\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\"\n                       [ngClass]=\"{'active accent':filterBy ==='all'}\">\n                        <span class=\"title\">All Contacts</span>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active accent':filterBy ==='frequent'}\">\n                        <div class=\"title\">Freequently contacted</div>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active accent':filterBy ==='starred'}\">\n                        <div class=\"title\">Starred Contacts</div>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDEBAR CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/sidebars/main/main.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/apps/contacts/sidebars/main/main.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  height: 100%; }\n:host .sidebar-content {\n    display: flex;\n    flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidebar-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidebar-content .card {\n      display: flex;\n      flex-direction: column;\n      flex: 0 1 auto;\n      padding: 0; }\n@media screen and (min-width: 960px) {\n        :host .sidebar-content .card {\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n:host .sidebar-content .card > .header {\n        flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .sidebar-content .card > .content {\n        flex: 0 1 auto; }\n"

/***/ }),

/***/ "./src/app/main/apps/contacts/sidebars/main/main.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/contacts/sidebars/main/main.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactsMainSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsMainSidebarComponent", function() { return ContactsMainSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/contacts/contacts.service */ "./src/app/main/apps/contacts/contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsMainSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     */
    function ContactsMainSidebarComponent(_contactsService) {
        this._contactsService = _contactsService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ContactsMainSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterBy = this._contactsService.filterBy || 'all';
        this._contactsService.onUserDataChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    /**
     * On destroy
     */
    ContactsMainSidebarComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Change the filter
     *
     * @param filter
     */
    ContactsMainSidebarComponent.prototype.changeFilter = function (filter) {
        this.filterBy = filter;
        this._contactsService.onFilterChanged.next(this.filterBy);
    };
    ContactsMainSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contacts-main-sidebar',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/apps/contacts/sidebars/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/apps/contacts/sidebars/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"]])
    ], ContactsMainSidebarComponent);
    return ContactsMainSidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map