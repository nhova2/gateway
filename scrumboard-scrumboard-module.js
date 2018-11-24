(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scrumboard-scrumboard-module"],{

/***/ "./src/app/main/apps/scrumboard/board.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board.model.ts ***!
  \*****************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var sampleLabels = [
    {
        'id': '56027e4119ad3a5dc28b36cd',
        'name': 'Design',
        'color': 'red-500'
    },
    {
        'id': '5640635e19ad3a5dc21416b2',
        'name': 'App',
        'color': 'blue-500'
    },
    {
        'id': '6540635g19ad3s5dc31412b2',
        'name': 'Feature',
        'color': 'green-400'
    }
];
var sampleMembers = [
    {
        id: '56027c1930450d8bf7b10758',
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
    },
    {
        id: '26027s1930450d8bf7b10828',
        name: 'Danielle Obrien',
        avatar: 'assets/images/avatars/danielle.jpg'
    },
    {
        id: '76027g1930450d8bf7b10958',
        name: 'James Lewis',
        avatar: 'assets/images/avatars/james.jpg'
    },
    {
        id: '36027j1930450d8bf7b10158',
        name: 'Vincent Munoz',
        avatar: 'assets/images/avatars/vincent.jpg'
    }
];
var Board = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param board
     */
    function Board(board) {
        this.name = board.name || 'Untitled Board';
        this.uri = board.uri || 'untitled-board';
        this.id = board.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.settings = board.settings || {
            color: '',
            subscribed: true,
            cardCoverImages: true
        };
        this.lists = [];
        this.cards = [];
        this.members = board.members || sampleMembers;
        this.labels = board.labels || sampleLabels;
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/add-list/add-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list new-list mat-elevation-z1\">\n\n    <button *ngIf=\"!formActive\" mat-button class=\"new-list-form-button\" (click)=\"openForm()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"red\">add</mat-icon>\n            <span>Add a list</span>\n        </div>\n    </button>\n\n    <form *ngIf=\"formActive\" class=\"new-list-form\" [formGroup]=\"form\" (submit)=\"onFormSubmit()\"\n          fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n        <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\n\n        <button mat-icon-button fxFlex=\"0 1 auto\">\n            <mat-icon>check</mat-icon>\n        </button>\n        <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/add-list/add-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-board-add-list .new-list {\n  border-radius: 2px; }\n  scrumboard-board-add-list .new-list .new-list-form-button {\n    text-transform: none;\n    font-size: 15px;\n    padding: 0 16px;\n    height: 64px;\n    margin: 0;\n    width: 100%; }\n  scrumboard-board-add-list .new-list .new-list-form-button mat-icon {\n      border-radius: 50%;\n      height: 40px;\n      width: 40px;\n      line-height: 40px;\n      margin-right: 16px; }\n  scrumboard-board-add-list .new-list .new-list-form {\n    padding: 16px;\n    height: 64px; }\n  scrumboard-board-add-list .new-list .new-list-form > input {\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/add-list/add-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ScrumboardBoardAddListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardAddListComponent", function() { return ScrumboardBoardAddListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrumboardBoardAddListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function ScrumboardBoardAddListComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.formActive = false;
        this.listAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open form
     */
    ScrumboardBoardAddListComponent.prototype.openForm = function () {
        this.form = this._formBuilder.group({
            name: ['']
        });
        this.formActive = true;
        this.focusNameField();
    };
    /**
     * Close form
     */
    ScrumboardBoardAddListComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    /**
     * Focus to the name field
     */
    ScrumboardBoardAddListComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    /**
     * On form submit
     */
    ScrumboardBoardAddListComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.listAdded.next(this.form.getRawValue().name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScrumboardBoardAddListComponent.prototype, "listAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], ScrumboardBoardAddListComponent.prototype, "nameInputField", void 0);
    ScrumboardBoardAddListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-add-list',
            template: __webpack_require__(/*! ./add-list.component.html */ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.html"),
            styles: [__webpack_require__(/*! ./add-list.component.scss */ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ScrumboardBoardAddListComponent);
    return ScrumboardBoardAddListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/board.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <div id=\"board\">\n\n        <!-- HEADER -->\n        <div class=\"header p-16 p-md-24\" [ngClass]=\"board.settings.color\" fxLayout=\"column\">\n\n            <div class=\"header-content\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" fxFlex=\"1 0 auto\">\n\n                <!-- BOARD SELECTION BUTTON -->\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlexOrder=\"2\" fxFlexOrder.gt-xs=\"1\">\n                    <button mat-raised-button class=\"header-boards-button\"\n                            [ngClass]=\"board.settings.color+'-800'\"\n                            routerLink=\"/apps/scrumboard/boards\"\n                            aria-label=\"boards button\">\n                        <mat-icon class=\"mr-8\">assessment</mat-icon>\n                        <span>BOARDS</span>\n                    </button>\n                </div>\n                <!-- / BOARD SELECTION BUTTON -->\n\n                <!-- BOARD NAME -->\n                <div class=\"header-board-name mb-8 mb-md-0\"\n                     fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                     fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"center center\"\n                     fxFlex=\"1 0 100%\" fxFlex.gt-xs=\"1 0 auto\"\n                     fxFlexOrder=\"1\" fxFlexOrder.gt-xs=\"2\">\n                    <mat-icon *ngIf=\"board.settings.subscribed\" class=\"board-subscribe s-16\">remove_red_eye</mat-icon>\n                    <scrumboard-edit-board-name\n                        [board]=\"board\"\n                        (boardNameChanged)=\"onBoardNameChanged($event)\">\n                    </scrumboard-edit-board-name>\n                </div>\n                <!-- / BOARD NAME -->\n\n                <!-- TOOLBAR -->\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlexOrder=\"3\">\n\n                    <!-- BOARD SETTINGS BUTTON -->\n                    <button mat-icon-button (click)=\"settingsSidenav.toggle()\"\n                            aria-label=\"Settings\" matTooltip=\"Settings\">\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                    <!-- / BOARD SETTINGS BUTTON -->\n                </div>\n                <!-- / TOOLBAR -->\n\n            </div>\n\n        </div>\n        <!-- / HEADER -->\n\n        <div fxFlex class=\"board-content-wrapper p-16 p-md-24\">\n\n            <!-- BOARD -->\n            <div class=\"board-content ngx-dnd-container p-16 p-md-24\" fxLayout=\"row\"\n                 ngxDroppable=\"list\" [model]=\"board.lists\" (out)=\"onDrop($event)\"\n                 [@animateStagger]=\"{value:'50'}\">\n\n                <!-- LIST -->\n                <scrumboard-board-list\n                    class=\"scrumboard-board-list list-wrapper ngx-dnd-item\"\n                    ngxDraggable\n                    *ngFor=\"let list of board.lists\"\n                    [model]=\"list\"\n                    [list]=\"list\"\n                    [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\n                </scrumboard-board-list>\n                <!-- / LIST -->\n\n                <!-- NEW LIST BUTTON-->\n                <scrumboard-board-add-list class=\"new-list-wrapper\" (listAdded)=\"onListAdd($event)\"\n                                           ngxDraggable [moves]=\"false\"\n                                           [@animate]=\"{value:'*',params:{duration:'350ms',x:'100%'}}\">\n                </scrumboard-board-add-list>\n                <!-- / NEW LIST BUTTON-->\n\n            </div>\n            <!-- / BOARD -->\n        </div>\n        <!-- primary content -->\n    </div>\n\n    <mat-sidenav #settingsSidenav position=\"end\">\n        <scrumboard-board-settings></scrumboard-board-settings>\n    </mat-sidenav>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/board.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/board.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nscrumboard-board mat-sidenav-container {\n  width: 100%;\n  height: 100%; }\nscrumboard-board mat-sidenav-container mat-sidenav {\n    width: 320px !important;\n    min-width: 320px !important;\n    max-width: 320px !important; }\nscrumboard-board mat-sidenav-container #board {\n    display: flex;\n    flex-direction: column !important;\n    height: 100%; }\nscrumboard-board mat-sidenav-container #board > .header {\n      position: relative;\n      min-height: 96px;\n      background-image: none;\n      z-index: 49; }\nscrumboard-board mat-sidenav-container #board > .header .header-content .header-boards-button {\n        margin: 0; }\nscrumboard-board mat-sidenav-container #board > .header .header-content .header-board-name {\n        font-size: 16px; }\nscrumboard-board mat-sidenav-container #board > .header .header-content .header-board-name .board-subscribe {\n          margin-right: 8px; }\nscrumboard-board mat-sidenav-container #board > .header .header-content .header-board-name .editable-buttons mat-icon {\n          color: #FFFFFF !important; }\nscrumboard-board mat-sidenav-container #board > .header .header-content .right-side > .mat-button:last-child {\n        margin-right: 0; }\nscrumboard-board mat-sidenav-container #board #board-selector {\n      position: absolute;\n      top: 96px;\n      right: 0;\n      left: 0;\n      height: 192px;\n      z-index: 48;\n      padding: 24px;\n      opacity: 1; }\nscrumboard-board mat-sidenav-container #board #board-selector .board-list-item {\n        width: 128px;\n        height: 192px;\n        padding: 16px;\n        cursor: pointer;\n        position: relative; }\nscrumboard-board mat-sidenav-container #board #board-selector .board-list-item .board-name {\n          text-align: center;\n          padding: 16px 0; }\nscrumboard-board mat-sidenav-container #board #board-selector .board-list-item .selected-icon {\n          position: absolute;\n          top: 0;\n          left: 50%;\n          width: 32px;\n          height: 32px;\n          margin-left: -16px;\n          border-radius: 50%;\n          text-align: center;\n          color: white; }\nscrumboard-board mat-sidenav-container #board #board-selector .board-list-item .selected-icon i {\n            line-height: 32px !important; }\nscrumboard-board mat-sidenav-container #board #board-selector .board-list-item.add-new-board {\n          opacity: 0.6; }\nscrumboard-board mat-sidenav-container #board .board-content-wrapper {\n      position: relative; }\nscrumboard-board mat-sidenav-container #board .board-content-wrapper .board-content {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n        overflow-y: hidden;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch; }\nscrumboard-board mat-sidenav-container #board .board-content-wrapper .board-content .list-sortable-placeholder {\n          background: rgba(0, 0, 0, 0.06);\n          margin-right: 24px; }\nscrumboard-board mat-sidenav-container #board .board-content-wrapper .board-content .new-list-wrapper {\n          width: 344px;\n          min-width: 344px;\n          max-width: 344px;\n          padding-right: 24px; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/board.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrumboardBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardComponent", function() { return ScrumboardBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var app_main_apps_scrumboard_list_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/scrumboard/list.model */ "./src/app/main/apps/scrumboard/list.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScrumboardBoardComponent = /** @class */ (function () {
    function ScrumboardBoardComponent(_activatedRoute, _location, _scrumboardService) {
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._scrumboardService = _scrumboardService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
        });
    };
    /**
     * On destroy
     */
    ScrumboardBoardComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On list add
     *
     * @param newListName
     */
    ScrumboardBoardComponent.prototype.onListAdd = function (newListName) {
        if (newListName === '') {
            return;
        }
        this._scrumboardService.addList(new app_main_apps_scrumboard_list_model__WEBPACK_IMPORTED_MODULE_7__["List"]({ name: newListName }));
    };
    /**
     * On board name changed
     *
     * @param newName
     */
    ScrumboardBoardComponent.prototype.onBoardNameChanged = function (newName) {
        this._scrumboardService.updateBoard();
        this._location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
    };
    /**
     * On drop
     *
     * @param ev
     */
    ScrumboardBoardComponent.prototype.onDrop = function (ev) {
        this._scrumboardService.updateBoard();
    };
    ScrumboardBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/main/apps/scrumboard/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/main/apps/scrumboard/board/board.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__["ScrumboardService"]])
    ], ScrumboardBoardComponent);
    return ScrumboardBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/card.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n\n    <mat-toolbar *ngIf=\"card\" matDialogTitle class=\"accent m-0\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <!-- DUE DATE -->\n                <div class=\"due-date\" fxFlex=\"0 1 auto\">\n\n                    <button *ngIf=\"card.due\" mat-icon-button [matMenuTriggerFor]=\"dueDateMenu\">\n                        <mat-icon>today</mat-icon>\n                    </button>\n\n                    <mat-menu #dueDateMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button mat-menu-item (click)=\"removeDueDate()\">Remove Due Date</button>\n                    </mat-menu>\n\n                    <mat-form-field *ngIf=\"!card.due\">\n                        <input matInput [matDatepicker]=\"menuPicker\" [(ngModel)]=\"card.due\">\n                        <mat-datepicker-toggle matSuffix [for]=\"menuPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #menuPicker></mat-datepicker>\n                    </mat-form-field>\n\n                </div>\n                <!-- / DUE DATE -->\n\n                <!-- LABELS -->\n                <div class=\"labels\" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelsMenu\">\n                        <mat-icon>label</mat-icon>\n                    </button>\n\n                    <mat-menu #labelsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"scrumboard-labels-menu\">\n\n                        <scrumboard-label-selector [card]=\"card\"\n                                                   (cardLabelsChanged)=\"updateCard()\"></scrumboard-label-selector>\n\n                    </mat-menu>\n                </div>\n                <!-- / LABELS -->\n\n                <!-- MEMBERS -->\n                <div class=\"members\" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"membersMenu\">\n                        <mat-icon>account_circle</mat-icon>\n                    </button>\n\n                    <mat-menu #membersMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <div fxFlex fxLayout=\"column\" class=\"scrumboard-members-menu\"\n                             (click)=\"$event.stopPropagation()\">\n                            <mat-checkbox class=\"member px-12\" [checked]=\"card.idMembers.indexOf(member.id) > -1\"\n                                          *ngFor=\"let member of board.members\"\n                                          (change)=\"toggleInArray(member.id, card.idMembers);updateCard()\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <img [alt]=\"member.name\" [src]=\" member.avatar\" class=\"avatar\"/>\n                                    <p class=\"member-name\">{{ member.name }}</p>\n                                </div>\n                            </mat-checkbox>\n                        </div>\n                    </mat-menu>\n                </div>\n                <!-- / MEMBERS -->\n\n                <!-- ATTACHMENT -->\n                <button mat-icon-button aria-label=\"Attachment\">\n                    <mat-icon>attachment</mat-icon>\n                </button>\n                <!-- / ATTACHMENT -->\n\n                <!-- CHECKLIST -->\n                <div class=\"due-date \" fxFlex=\"0 1 auto\">\n\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"checklistMenu\"\n                            #checklistMenuTrigger=\"matMenuTrigger\" (menuOpened)=\"onChecklistMenuOpen()\">\n                        <mat-icon>check_box</mat-icon>\n                    </button>\n\n                    <mat-menu #checklistMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                        <form class=\"px-16 py-8\" #newChecklistForm=\"ngForm\" (submit)=\"addChecklist(newChecklistForm)\"\n                              (click)=\"$event.stopPropagation()\"\n                              fxLayout=\"column\" fxLayoutAlign=\"start end\">\n\n                            <mat-form-field floatLabel=\"never\" (click)=\"$event.stopPropagation()\" fxFlex>\n                                <input #newCheckListTitleField matInput ngModel #checklistTitle=\"ngModel\"\n                                       name=\"checklistTitle\" placeholder=\"Checklist title\" required>\n                            </mat-form-field>\n\n                            <button mat-raised-button class=\"mat-accent\" aria-label=\"Add Checklist\"\n                                    [disabled]=\"!newChecklistForm.valid\">Add Checklist\n                            </button>\n                        </form>\n\n                    </mat-menu>\n                </div>\n                <!-- / CHECKLIST -->\n\n                <!-- SUBSCRIBE -->\n                <div class=\"subscribe \" fxFlex=\"0 1 auto\">\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"subscribeMenu\">\n                        <mat-icon>remove_red_eye</mat-icon>\n                    </button>\n                    <mat-menu #subscribeMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button *ngIf=\"card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\n                            Unsubscribe\n                        </button>\n                        <button *ngIf=\"!card.subscribed\" mat-menu-item (click)=\"toggleSubscribe()\">\n                            Subscribe\n                        </button>\n                    </mat-menu>\n                </div>\n                <!-- / SUBSCRIBE -->\n\n                <!-- OPTIONS -->\n                <div class=\"options \" fxFlex=\"0 1 auto\">\n                    <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"optionsMenu\">\n                        <mat-icon>more_horiz</mat-icon>\n                    </button>\n                    <mat-menu #optionsMenu=\"matMenu\" [overlapTrigger]=\"false\">\n                        <button mat-menu-item (click)=\"removeCard()\">\n                            Remove Card\n                        </button>\n                    </mat-menu>\n                </div>\n                <!-- / OPTIONS -->\n            </div>\n\n            <!-- CLOSE DIALOG BUTTON -->\n            <button mat-icon-button (click)=\"_matDialogRef.close()\" aria-label=\"Close Dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n            <!-- / CLOSE DIALOG BUTTON -->\n\n        </div>\n\n    </mat-toolbar>\n\n    <div *ngIf=\"card\" mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <div fxLayout.gt-sm=\"row\" fxLayoutAlign.gt-sm=\"space-between center\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n            <!-- BREADCRUMB -->\n            <div class=\"card-breadcrumb mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <span>{{board.name}}</span>\n                <mat-icon class=\"s-20\">chevron_right</mat-icon>\n                <span>{{list.name}}</span>\n            </div>\n            <!-- / BREADCRUMB -->\n\n            <!-- DUE DATE -->\n            <div *ngIf=\"card.due\" class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <mat-form-field floatLabel=\"never\">\n                    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"card.due\" placeholder=\"Choose a due date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n\n                <button mat-icon-button class=\"remove-due-date\" (click)=\"removeDueDate()\">\n                    <mat-icon class=\"s-16\">close</mat-icon>\n                </button>\n            </div>\n            <!-- / DUE DATE -->\n\n        </div>\n\n        <!-- NAME -->\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon *ngIf=\"card.subscribed\" class=\"card-subscribe s-20 mr-12\">remove_red_eye</mat-icon>\n            <div class=\"card-name\">\n                <mat-form-field floatLabel=\"never\" class=\"w-100-p\">\n                    <input matInput [(ngModel)]=\"card.name\" placeholder=\"Title\" required (change)=\"updateCard()\">\n                </mat-form-field>\n            </div>\n        </div>\n        <!-- / NAME -->\n\n        <!-- DESCRIPTION -->\n        <div class=\"description\">\n            <mat-form-field class=\"w-100-p\">\n                <textarea matInput [(ngModel)]=\"card.description\" placeholder=\"Description\" columns=\"1\"\n                          mat-maxlength=\"150\" max-rows=\"4\" (change)=\"updateCard()\"></textarea>\n            </mat-form-field>\n        </div>\n        <!-- / DESCRIPTION -->\n\n        <!-- SECTIONS -->\n        <div class=\"sections\">\n\n            <!-- LABELS SECTION -->\n            <div *ngIf=\"card.idLabels[0] || card.idMembers[0]\" class=\"section\"\n                 fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <div *ngIf=\"card.idLabels[0]\" fxFlex class=\"labels\">\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">label</mat-icon>\n                        <span class=\"section-title\">Labels</span>\n                    </div>\n                    <div class=\"section-content\">\n                        <mat-chip-list class=\"label-chips\">\n                            <mat-chip class=\"label-chip mb-4\"\n                                      *ngFor=\"let labelId of card.idLabels\"\n                                      [ngClass]=\"board.labels | getById:labelId:'color'\"\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <span>{{board.labels|getById:labelId:'name'}}</span>\n                                <mat-icon class=\"ml-8 s-16 chip-remove\"\n                                          (click)=\"toggleInArray(labelId, card.idLabels);updateCard()\">close\n                                </mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n                </div>\n\n                <div *ngIf=\"card.idMembers[0]\" fxFlex class=\"members\">\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">supervisor_account</mat-icon>\n                        <span class=\"section-title\">Members</span>\n                    </div>\n                    <div class=\"section-content\">\n                        <mat-chip-list class=\"member-chips\">\n                            <mat-chip class=\"member-chip mb-4\" *ngFor=\"let memberId of card.idMembers\"\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <img class=\"member-chip-avatar\" [src]=\"board.members | getById:memberId:'avatar'\"\n                                     [matTooltip]=\"board.members | getById:memberId:'name'\">\n                                <mat-icon class=\"ml-8 s-16 chip-remove\"\n                                          (click)=\"toggleInArray(memberId, card.idMembers);updateCard()\">close\n                                </mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n                </div>\n            </div>\n            <!-- / LABELS SECTION -->\n\n            <!-- ATTACHMENTS SECTION -->\n            <div *ngIf=\"card.attachments[0]\" class=\"section\">\n\n                <div class=\"attachments\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">attachment</mat-icon>\n                        <span class=\"section-title\">Attachments</span>\n                    </div>\n\n                    <div class=\"section-content\">\n\n                        <div class=\"attachment\" *ngFor=\"let item of card.attachments\" [ngSwitch]=\"item.type\">\n\n                            <div *ngSwitchCase=\"'image'\"\n                                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\"\n                                 fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\n                                <div class=\"attachment-preview mat-elevation-z2\"\n                                     [ngStyle]=\"{'background-image': 'url('+item.src+')'}\">\n                                </div>\n\n                                <div class=\"attachment-content\" fxLayout=\"column\">\n\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"attachment-name\">{{item.name}}</span>\n                                        <mat-icon *ngIf=\"card.idAttachmentCover === item.id\"\n                                                  class=\"yellow-700-fg attachment-is-cover s-20\">star\n                                        </mat-icon>\n                                    </div>\n\n                                    <span class=\"attachment-time\">{{item.time}}</span>\n\n                                    <div>\n                                        <button mat-raised-button class=\"attachment-actions-button\"\n                                                [matMenuTriggerFor]=\"attachmentActionsMenu\">\n                                            <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                                <span>Actions</span>\n                                                <mat-icon class=\"s-20\">arrow_drop_down</mat-icon>\n                                            </span>\n                                        </button>\n                                        <mat-menu #attachmentActionsMenu=\"matMenu\">\n                                            <button mat-menu-item (click)=\"toggleCoverImage(item.id)\">\n                                                <span *ngIf=\"card.idAttachmentCover !== item.id\">Make Cover</span>\n                                                <span *ngIf=\"card.idAttachmentCover === item.id\">Remove Cover</span>\n                                            </button>\n                                            <button mat-menu-item (click)=\"removeAttachment(item)\">\n                                                Remove Attachment\n                                            </button>\n                                        </mat-menu>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div *ngSwitchCase=\"'link'\" fxLayout=\"row\">\n                                <div class=\"attachment-preview mat-elevation-z2\" fxLayout=\"column\"\n                                     fxLayoutAlign=\"center center\">\n                                    <span>LINK</span>\n                                </div>\n                                <div class=\"attachment-content\" fxLayout=\"column\">\n                                    <span class=\"attachment-url\">{{item.url}}</span>\n                                    <span class=\"attachment-time\">{{item.time}}</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <button mat-button class=\"add-attachment-button\" aria-label=\"add attachment\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon class=\"s-20\">add</mat-icon>\n                                <span>Add an attachment</span>\n                            </div>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <!-- / ATTACHMENTS SECTION -->\n\n            <!-- CHECKLISTS SECTION -->\n            <div class=\"section\" *ngFor=\"let checklist of card.checklists\">\n\n                <div class=\"checklist\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <mat-icon class=\"s-20\">check_box</mat-icon>\n\n                        <span fxFlex class=\"section-title\">{{checklist.name}}</span>\n\n                        <div>\n\n                            <button mat-icon-button class=\"checklist-actions-button\"\n                                    [matMenuTriggerFor]=\"checklistActionsMenu\">\n                                <mat-icon class=\"s-20\">more_vert</mat-icon>\n                            </button>\n\n                            <mat-menu #checklistActionsMenu=\"matMenu\">\n                                <button mat-menu-item (click)=\"removeChecklist(checklist)\">\n                                    <mat-icon>delete</mat-icon>\n                                    <span>Remove Checklist</span>\n                                </button>\n                            </mat-menu>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"section-content\">\n\n                        <div class=\"checklist-progress\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                            <span class=\"checklist-progress-value\">\n                                {{checklist.checkItemsChecked}} / {{checklist.checkItems.length}}\n                            </span>\n\n                            <mat-progress-bar class=\"mat-accent checklist-progressbar\" mode=\"determinate\"\n                                              value=\"{{100 * checklist.checkItemsChecked / checklist.checkItems.length}}\">\n                            </mat-progress-bar>\n                        </div>\n\n                        <div class=\"check-items\">\n\n                            <div class=\"check-item\" *ngFor=\"let checkItem of checklist.checkItems\" fxLayout=\"row\"\n                                 fxLayoutAlign=\"space-between center\">\n\n                                <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-checkbox [(ngModel)]=\"checkItem.checked\"\n                                                  (change)=\"updateCheckedCount(checklist)\"\n                                                  aria-label=\"{{checkItem.name}}\">\n                                    </mat-checkbox>\n                                    <mat-form-field fxFlex class=\"mx-12\">\n                                        <input matInput [(ngModel)]=\"checkItem.name\">\n                                    </mat-form-field>\n                                </div>\n\n                                <button mat-icon-button class=\"checklist-actions-button\"\n                                        (click)=\"removeChecklistItem(checkItem, checklist)\">\n                                    <mat-icon class=\"secondary-text s-20\">delete</mat-icon>\n                                </button>\n\n                            </div>\n                        </div>\n\n                        <form #newCheckItemForm=\"ngForm\" (submit)=\"addCheckItem(newCheckItemForm,checklist)\"\n                              name=\"newCheckItemForm\" class=\"new-check-item-form\"\n                              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                                <mat-icon class=\"s-20\">add</mat-icon>\n\n                                <mat-form-field class=\"no-errors-spacer mx-12\" fxFlex>\n                                    <input matInput ngModel #checkItem=\"ngModel\" name=\"checkItem\"\n                                           placeholder=\"Add an item\" autocomplete=\"off\">\n                                </mat-form-field>\n                            </div>\n\n                            <button mat-raised-button\n                                    [disabled]=\"!newCheckItemForm.valid || newCheckItemForm.pristine\"\n                                    class=\"mat-accent\" aria-label=\"Add\">\n                                <span>Add</span>\n                            </button>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n            <!-- / CHECKLISTS SECTION -->\n\n            <!-- COMMENTS SECTION -->\n            <div class=\"section\">\n\n                <div class=\"comments\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">comment</mat-icon>\n                        <span class=\"section-title\">Comments</span>\n                    </div>\n\n                    <div class=\"section-content\">\n                        <form name=\"cardCommentForm\"\n                              #newCommentForm=\"ngForm\" (submit)=\"addNewComment(newCommentForm)\"\n                              class=\"comment new-comment\" fxLayout=\"column\" fxLayoutAlign=\"start\" no-validate>\n\n                            <div fxLayout=\"row\">\n                                <img class=\"comment-member-avatar\" src=\"assets/images/avatars/profile.jpg\">\n                                <mat-form-field fxFlex>\n                                    <input matInput name=\"newComment\" ngModel #newComment=\"ngModel\"\n                                           placeholder=\"Write a comment..\" required>\n                                </mat-form-field>\n                            </div>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                <button mat-raised-button class=\"mat-accent\"\n                                        [disabled]=\"!newCommentForm.valid || newCommentForm.pristine\"\n                                        aria-label=\"Add\">\n                                    <span>Add</span>\n                                </button>\n                            </div>\n                        </form>\n\n                        <div class=\"comment\" fxLayout=\"row\" *ngFor=\"let comment of card.comments\">\n\n                            <img class=\"comment-member-avatar\"\n                                 [src]=\"board.members | getById: comment.idMember:'avatar'\">\n\n                            <div fxLayout=\"column\">\n                                <div class=\"comment-member-name\">\n                                    {{board.members | getById: comment.idMember:'name'}}\n                                </div>\n                                <div class=\"comment-bubble\">{{comment.message}}</div>\n                                <div class=\"comment-time secondary-text\">{{comment.time}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- / COMMENTS SECTION -->\n\n            <!-- ACTIVITIES SECTION -->\n            <div *ngIf=\"card.activities[0]\" class=\"section\">\n\n                <div class=\"activities\">\n\n                    <div class=\"section-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon class=\"s-20\">list</mat-icon>\n                        <span class=\"section-title\">Activity</span>\n                    </div>\n\n                    <div class=\"section-content\">\n                        <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                             *ngFor=\"let activity of card.activities\">\n                            <img class=\"activity-member-avatar\"\n                                 [src]=\"board.members| getById:activity.idMember:'avatar'\">\n                            <div class=\"activity-member-name\">{{board.members| getById:activity.idMember:'name'}}</div>\n                            <div class=\"activity-message\">{{activity.message}}</div>\n                            <div class=\"activity-time secondary-text\">{{activity.time}}</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <!-- / ACTIVITIES SECTION -->\n\n        </div>\n        <!-- / SECTIONS -->\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/card.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.scrumboard-card-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .scrumboard-card-dialog {\n      width: 100%; } }\n.scrumboard-card-dialog .mat-dialog-container {\n    padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field {\n      width: auto;\n      margin: 0 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper {\n        padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex {\n          align-items: center; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n            display: none; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-input-element {\n            display: none; }\n.scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field-prefix .mat-datepicker-toggle-default-icon,\n    .scrumboard-card-dialog .mat-dialog-container .mat-toolbar .due-date .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n      width: 24px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content {\n      position: relative; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-breadcrumb {\n        font-weight: 500;\n        font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-subscribe {\n        margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .picker {\n        width: 140px;\n        min-width: 140px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n        width: 100%;\n        font-size: 22px; }\n@media screen and (max-width: 599px) {\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .card-name {\n            font-size: 14px; } }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .description {\n        padding-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section {\n        border-bottom: 1px solid;\n        margin-bottom: 32px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child {\n          border-bottom: none;\n          margin-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section:last-child .section-content {\n            padding-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header {\n          font-size: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header mat-icon {\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-header .section-title {\n            font-weight: 500; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .section-content {\n          padding: 24px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .section-content {\n          padding: 8px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips {\n          box-shadow: none;\n          padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip {\n            display: block; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .labels .label-chips .label-chip .chip-remove {\n              cursor: pointer; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .section-content {\n          padding: 8px 0 32px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips {\n          box-shadow: none;\n          padding: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip {\n            padding: 4px 12px 4px 4px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .member-chip-avatar {\n              width: 32px;\n              border-radius: 50%; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .members .member-chips .member-chip .chip-remove {\n              cursor: pointer; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-preview {\n            width: 160px;\n            height: 128px;\n            background-size: contain;\n            background-position: 50% 50%;\n            background-repeat: no-repeat;\n            font-weight: 500;\n            margin-right: 24px; }\n@media screen and (max-width: 599px) {\n              .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-preview {\n                margin-bottom: 24px; } }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-url,\n          .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-name {\n            font-weight: 500;\n            font-size: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-is-cover {\n            margin-left: 6px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button {\n            text-transform: capitalize;\n            margin: 12px 0 0 0;\n            padding-left: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .attachment .attachment-content .attachment-actions-button mat-icon {\n              margin-left: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button {\n          margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button mat-icon {\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .attachments .add-attachment-button span {\n            font-weight: 500;\n            text-transform: capitalize; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .checklist-progress .checklist-progress-value {\n            margin-right: 12px;\n            font-weight: 500;\n            white-space: nowrap;\n            font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .editable-wrap {\n          flex: 1; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox {\n          margin-bottom: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox .mat-label {\n            font-size: 14px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .check-items .check-item mat-checkbox.mat-checked .mat-label {\n            text-decoration: line-through; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form {\n          padding-top: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form mat-form-field {\n            margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .checklist .new-check-item-form .mat-button {\n            margin: 0 0 0 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment {\n          margin-bottom: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-avatar {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            margin-right: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-member-name {\n            font-size: 14px;\n            font-weight: 500; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-time {\n            font-size: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble {\n            position: relative;\n            padding: 8px;\n            border: 1px solid;\n            font-size: 14px;\n            margin: 4px 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after, .scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n              content: ' ';\n              position: absolute;\n              width: 0;\n              height: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:after {\n              left: -7px;\n              right: auto;\n              top: 0px;\n              bottom: auto;\n              border: 11px solid; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment .comment-bubble:before {\n              left: -9px;\n              right: auto;\n              top: -1px;\n              bottom: auto;\n              border: 8px solid; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .comments .comment.new-comment mat-form-field {\n            margin: 0; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity {\n          margin-bottom: 12px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-avatar {\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            margin-right: 16px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-member-name {\n            font-size: 14px;\n            font-weight: 500;\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-message {\n            font-size: 14px;\n            margin-right: 8px; }\n.scrumboard-card-dialog .mat-dialog-container .mat-dialog-content .sections .section .activities .activity .activity-time {\n            font-size: 12px; }\n.scrumboard-card-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: flex;\n    flex-direction: column; }\n.scrumboard-members-menu {\n  width: 240px; }\n.scrumboard-members-menu .mat-checkbox-layout,\n  .scrumboard-members-menu .mat-checkbox-label {\n    display: flex;\n    flex: 1; }\n.scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n.scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: flex;\n    flex: 1; }\n.scrumboard-labels-menu .mat-menu-content .views {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n.scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n.scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/card.component.ts ***!
  \***************************************************************************/
/*! exports provided: ScrumboardCardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardCardDialogComponent", function() { return ScrumboardCardDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var ScrumboardCardDialogComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {MatDialogRef<ScrumboardCardDialogComponent>} _matDialogRef
     * @param _data
     * @param {MatDialog} _matDialog
     * @param {ScrumboardService} _scrumboardService
     */
    function ScrumboardCardDialogComponent(_matDialogRef, _data, _matDialog, _scrumboardService) {
        this._matDialogRef = _matDialogRef;
        this._data = _data;
        this._matDialog = _matDialog;
        this._scrumboardService = _scrumboardService;
        this.toggleInArray = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].toggleInArray;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardCardDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
            _this.card = _this.board.cards.find(function (_card) {
                return _this._data.cardId === _card.id;
            });
            _this.list = _this.board.lists.find(function (_list) {
                return _this._data.listId === _list.id;
            });
        });
    };
    /**
     * On destroy
     */
    ScrumboardCardDialogComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Remove due date
     */
    ScrumboardCardDialogComponent.prototype.removeDueDate = function () {
        this.card.due = '';
        this.updateCard();
    };
    /**
     * Toggle subscribe
     */
    ScrumboardCardDialogComponent.prototype.toggleSubscribe = function () {
        this.card.subscribed = !this.card.subscribed;
        this.updateCard();
    };
    /**
     * Toggle cover image
     *
     * @param attachmentId
     */
    ScrumboardCardDialogComponent.prototype.toggleCoverImage = function (attachmentId) {
        if (this.card.idAttachmentCover === attachmentId) {
            this.card.idAttachmentCover = '';
        }
        else {
            this.card.idAttachmentCover = attachmentId;
        }
        this.updateCard();
    };
    /**
     * Remove attachment
     *
     * @param attachment
     */
    ScrumboardCardDialogComponent.prototype.removeAttachment = function (attachment) {
        if (attachment.id === this.card.idAttachmentCover) {
            this.card.idAttachmentCover = '';
        }
        this.card.attachments.splice(this.card.attachments.indexOf(attachment), 1);
        this.updateCard();
    };
    /**
     * Remove checklist
     *
     * @param checklist
     */
    ScrumboardCardDialogComponent.prototype.removeChecklist = function (checklist) {
        this.card.checklists.splice(this.card.checklists.indexOf(checklist), 1);
        this.updateCard();
    };
    /**
     * Update checked count
     *
     * @param list
     */
    ScrumboardCardDialogComponent.prototype.updateCheckedCount = function (list) {
        var checkItems = list.checkItems;
        var checkedItems = 0;
        var allCheckedItems = 0;
        var allCheckItems = 0;
        for (var _i = 0, checkItems_1 = checkItems; _i < checkItems_1.length; _i++) {
            var checkItem = checkItems_1[_i];
            if (checkItem.checked) {
                checkedItems++;
            }
        }
        list.checkItemsChecked = checkedItems;
        for (var _a = 0, _b = this.card.checklists; _a < _b.length; _a++) {
            var item = _b[_a];
            allCheckItems += item.checkItems.length;
            allCheckedItems += item.checkItemsChecked;
        }
        this.card.checkItems = allCheckItems;
        this.card.checkItemsChecked = allCheckedItems;
        this.updateCard();
    };
    /**
     * Remove checklist item
     *
     * @param checkItem
     * @param checklist
     */
    ScrumboardCardDialogComponent.prototype.removeChecklistItem = function (checkItem, checklist) {
        checklist.checkItems.splice(checklist.checkItems.indexOf(checkItem), 1);
        this.updateCheckedCount(checklist);
        this.updateCard();
    };
    /**
     * Add check item
     *
     * @param {NgForm} form
     * @param checkList
     */
    ScrumboardCardDialogComponent.prototype.addCheckItem = function (form, checkList) {
        var checkItemVal = form.value.checkItem;
        if (!checkItemVal || checkItemVal === '') {
            return;
        }
        var newCheckItem = {
            'name': checkItemVal,
            'checked': false
        };
        checkList.checkItems.push(newCheckItem);
        this.updateCheckedCount(checkList);
        form.setValue({ checkItem: '' });
        this.updateCard();
    };
    /**
     * Add checklist
     *
     * @param {NgForm} form
     */
    ScrumboardCardDialogComponent.prototype.addChecklist = function (form) {
        this.card.checklists.push({
            id: _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].generateGUID(),
            name: form.value.checklistTitle,
            checkItemsChecked: 0,
            checkItems: []
        });
        form.setValue({ checklistTitle: '' });
        form.resetForm();
        this.checklistMenu.closeMenu();
        this.updateCard();
    };
    /**
     * On checklist menu open
     */
    ScrumboardCardDialogComponent.prototype.onChecklistMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.newCheckListTitleField.nativeElement.focus();
        });
    };
    /**
     * Add new comment
     *
     * @param {NgForm} form
     */
    ScrumboardCardDialogComponent.prototype.addNewComment = function (form) {
        var newCommentText = form.value.newComment;
        var newComment = {
            idMember: '36027j1930450d8bf7b10158',
            message: newCommentText,
            time: 'now'
        };
        this.card.comments.unshift(newComment);
        form.setValue({ newComment: '' });
        this.updateCard();
    };
    /**
     * Remove card
     */
    ScrumboardCardDialogComponent.prototype.removeCard = function () {
        var _this = this;
        this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the card?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._matDialogRef.close();
                _this._scrumboardService.removeCard(_this.card.id, _this.list.id);
            }
        });
    };
    /**
     * Update card
     */
    ScrumboardCardDialogComponent.prototype.updateCard = function () {
        this._scrumboardService.updateCard(this.card);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('checklistMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], ScrumboardCardDialogComponent.prototype, "checklistMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newCheckListTitleField'),
        __metadata("design:type", Object)
    ], ScrumboardCardDialogComponent.prototype, "newCheckListTitleField", void 0);
    ScrumboardCardDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-card-dialog',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__["ScrumboardService"]])
    ], ScrumboardCardDialogComponent);
    return ScrumboardCardDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"labelsMenuView\" class=\"views\" (click)=\"$event.stopPropagation()\">\n\n    <div class=\"view\" *ngSwitchCase=\"'labels'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div>Labels</div>\n            <button mat-button (click)=\"labelsMenuView ='add'\">\n                <mat-icon class=\"s-16\">add</mat-icon>\n                <span>Add</span>\n            </button>\n        </div>\n\n        <div fxFlex fxLayout=\"column\" fusePerfectScrollbar>\n\n            <div class=\"label\" *ngFor=\"let label of board.labels\" fxFlex=\"0 0 auto\" fxLayout=\"row\"\n                 fxFlexAlign=\"space-between center\"\n                 [ngClass]=\"label.color\">\n\n                <mat-checkbox fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                              [checked]=\"card.idLabels.indexOf(label.id) > -1\"\n                              (change)=\"toggleInArray(label.id, card.idLabels);onCardLabelsChanged()\">\n                    {{label.name}}\n                </mat-checkbox>\n\n                <button mat-icon-button>\n                    <mat-icon class=\"s-16\" (click)=\"labelsMenuView ='edit';selectedLabel = label\">mode_edit</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"view edit\" *ngSwitchCase=\"'edit'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n            <div>Edit Label</div>\n        </div>\n\n        <div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"selectedLabel.name\" (change)=\"onLabelChange()\">\n            </mat-form-field>\n\n            <fuse-material-color-picker [(ngModel)]=\"selectedLabel.color\" class=\"ml-8\"\n                                        (colorChanged)=\"$event.preventDefault;onLabelChange()\"></fuse-material-color-picker>\n        </div>\n\n    </div>\n\n    <div class=\"view add\" *ngSwitchCase=\"'add'\" fxFlex fxLayout=\"column\">\n\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-icon-button (click)=\"labelsMenuView ='labels'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n            <div>Add Label</div>\n        </div>\n\n        <form (submit)=\"addNewLabel()\" #newLabelForm=\"ngForm\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"start end\">\n\n            <div fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <mat-form-field fxFlex>\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"newLabel.name\" name=\"labelName\" required>\n                </mat-form-field>\n\n                <fuse-material-color-picker class=\"ml-8\" [(ngModel)]=\"newLabel.color\"\n                                            name=\"labelColor\"></fuse-material-color-picker>\n            </div>\n\n            <button mat-raised-button class=\"mat-accent mt-16\" [disabled]=\"!newLabelForm.valid\">ADD NEW LABEL</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrumboard-labels-menu .mat-menu-content {\n  padding-bottom: 0; }\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-layout,\n  .scrumboard-labels-menu .mat-menu-content .mat-checkbox-label {\n    display: flex;\n    flex: 1; }\n  .scrumboard-labels-menu .mat-menu-content .views {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    width: 240px;\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 240px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view {\n      position: absolute;\n      width: 240px;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n  .scrumboard-labels-menu .mat-menu-content .views .view > .header {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        padding: 4px 8px 8px 16px;\n        margin-bottom: 8px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view .label {\n        margin: 0 8px 8px 8px;\n        padding: 4px 4px 4px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit > .header, .scrumboard-labels-menu .mat-menu-content .views .view.add > .header {\n        padding: 0 8px 8px 0; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit form, .scrumboard-labels-menu .mat-menu-content .views .view.add form {\n        padding: 0 16px 8px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit form .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add form .mat-form-field-infix {\n          width: auto !important; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit .content, .scrumboard-labels-menu .mat-menu-content .views .view.add .content {\n        padding: 8px 16px 8px 16px; }\n  .scrumboard-labels-menu .mat-menu-content .views .view.edit .content .mat-form-field-infix, .scrumboard-labels-menu .mat-menu-content .views .view.add .content .mat-form-field-infix {\n          width: auto !important; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ScrumboardLabelSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardLabelSelectorComponent", function() { return ScrumboardLabelSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScrumboardLabelSelectorComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    function ScrumboardLabelSelectorComponent(_scrumboardService) {
        this._scrumboardService = _scrumboardService;
        // Set the defaults
        this.cardLabelsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.labelsMenuView = 'labels';
        this.newLabel = {
            'id': '',
            'name': '',
            'color': 'blue-400'
        };
        this.toggleInArray = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].toggleInArray;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardLabelSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
        });
    };
    /**
     * On destroy
     */
    ScrumboardLabelSelectorComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Card labels changed
     */
    ScrumboardLabelSelectorComponent.prototype.onCardLabelsChanged = function () {
        this.cardLabelsChanged.next();
    };
    /**
     * On label change
     */
    ScrumboardLabelSelectorComponent.prototype.onLabelChange = function () {
        this._scrumboardService.updateBoard();
    };
    /**
     * Add new label
     */
    ScrumboardLabelSelectorComponent.prototype.addNewLabel = function () {
        this.newLabel.id = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('card'),
        __metadata("design:type", Object)
    ], ScrumboardLabelSelectorComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScrumboardLabelSelectorComponent.prototype, "cardLabelsChanged", void 0);
    ScrumboardLabelSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-label-selector',
            template: __webpack_require__(/*! ./label-selector.component.html */ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.html"),
            styles: [__webpack_require__(/*! ./label-selector.component.scss */ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__["ScrumboardService"]])
    ], ScrumboardLabelSelectorComponent);
    return ScrumboardLabelSelectorComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"board-name\" fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span>{{board.name}}</span>\n    <button mat-icon-button (click)=\"openForm()\">\n        <mat-icon class=\"s-16\">edit_mode</mat-icon>\n    </button>\n</div>\n\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\n      class=\"board-name-form\" fxLayout=\"row\" fxFlex=\"1 0 auto\" *ngIf=\"formActive\">\n\n    <input formControlName=\"name\" #nameInput fxFlex=\"1 0 auto\" placeholder=\"Write a board name\">\n\n    <button mat-icon-button fxFlex=\"0 1 auto\">\n        <mat-icon>check</mat-icon>\n    </button>\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\n        <mat-icon>close</mat-icon>\n    </button>\n</form>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-edit-board-name {\n  display: block !important; }\n  scrumboard-edit-board-name .board-name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 15px;\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ScrumboardEditBoardNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardEditBoardNameComponent", function() { return ScrumboardEditBoardNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrumboardEditBoardNameComponent = /** @class */ (function () {
    function ScrumboardEditBoardNameComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Set the defaults
        this.formActive = false;
        this.boardNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open form
     */
    ScrumboardEditBoardNameComponent.prototype.openForm = function () {
        this.form = this.formBuilder.group({
            name: [this.board.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    /**
     * Close form
     */
    ScrumboardEditBoardNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    /**
     * Focus to the name field
     */
    ScrumboardEditBoardNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    /**
     * On form submit
     */
    ScrumboardEditBoardNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.board.name = this.form.getRawValue().name;
            this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();
            this.boardNameChanged.next(this.board.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrumboardEditBoardNameComponent.prototype, "board", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScrumboardEditBoardNameComponent.prototype, "boardNameChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], ScrumboardEditBoardNameComponent.prototype, "nameInputField", void 0);
    ScrumboardEditBoardNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-edit-board-name',
            template: __webpack_require__(/*! ./edit-board-name.component.html */ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.html"),
            styles: [__webpack_require__(/*! ./edit-board-name.component.scss */ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ScrumboardEditBoardNameComponent);
    return ScrumboardEditBoardNameComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formActive\" class=\"add-card-button\"\n     (click)=\"openForm()\"\n     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <mat-icon class=\"s-20\">add</mat-icon>\n    <div>Add a card</div>\n</div>\n\n<div *ngIf=\"formActive\" class=\"add-card-form-wrapper\">\n\n    <form [formGroup]=\"form\" (submit)=\"onFormSubmit()\" class=\"add-card-form\" fxLayout=\"column\">\n\n        <mat-form-field fxFlex floatLabel=\"never\">\n            <input #nameInput matInput formControlName=\"name\" placeholder=\"Card title\" autocomplete=\"off\" required>\n        </mat-form-field>\n\n        <div class=\"pl-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-raised-button class=\"add-button mat-accent\" aria-label=\"add\"\n                    [disabled]=\"form.invalid\">\n                <span>Add</span>\n            </button>\n\n            <button mat-icon-button (click)=\"closeForm()\" class=\"cancel-button\" aria-label=\"cancel\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-board-add-card .add-card-button {\n  position: relative;\n  height: 48px;\n  min-height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-transform: none;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px; }\n  scrumboard-board-add-card .add-card-button mat-icon {\n    margin-right: 8px; }\n  scrumboard-board-add-card .add-card-form-wrapper .add-card-form {\n  z-index: 999;\n  display: block;\n  position: relative;\n  padding: 8px; }\n  scrumboard-board-add-card .add-card-form-wrapper .add-card-form mat-form-field {\n    width: 100%;\n    margin: 0;\n    padding: 12px 8px; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScrumboardBoardAddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardAddCardComponent", function() { return ScrumboardBoardAddCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrumboardBoardAddCardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function ScrumboardBoardAddCardComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.formActive = false;
        this.cardAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open the form
     */
    ScrumboardBoardAddCardComponent.prototype.openForm = function () {
        this.form = this._formBuilder.group({
            name: ''
        });
        this.formActive = true;
        this.focusNameField();
    };
    /**
     * Close the form
     */
    ScrumboardBoardAddCardComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    /**
     * Focus to the name field
     */
    ScrumboardBoardAddCardComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    /**
     * On form submit
     */
    ScrumboardBoardAddCardComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            var cardName = this.form.getRawValue().name;
            this.cardAdded.next(cardName);
            this.formActive = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScrumboardBoardAddCardComponent.prototype, "cardAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], ScrumboardBoardAddCardComponent.prototype, "nameInputField", void 0);
    ScrumboardBoardAddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.html"),
            styles: [__webpack_require__(/*! ./add-card.component.scss */ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ScrumboardBoardAddCardComponent);
    return ScrumboardBoardAddCardComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/card/card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/card/card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CARD COVER -->\n<div *ngIf=\"board.settings.cardCoverImages && card.idAttachmentCover\"\n     class=\"list-card-cover\">\n    <img [src]=\"card.attachments | getById:card.idAttachmentCover:'src'\">\n</div>\n<!-- / CARD COVER -->\n\n<!-- CARD DETAILS -->\n<div class=\"list-card-details\">\n\n    <!-- CARD SORT HANDLE -->\n    <div class=\"list-card-sort-handle\">\n        <mat-icon mat-font-icon=\"icon-cursor-move\" class=\"icon s16\"></mat-icon>\n    </div>\n    <!-- /CARD SORT HANDLE -->\n\n    <!-- CARD LABELS -->\n    <div *ngIf=\"card.idLabels.length > 0\" class=\"list-card-labels\" fxLayout=\"row wrap\">\n\n        <span class=\"list-card-label\"\n              [ngClass]=\"board.labels | getById:labelId:'color'\"\n              *ngFor=\"let labelId of card.idLabels\"\n              [matTooltip]=\"board.labels | getById:labelId:'name'\">\n        </span>\n\n    </div>\n    <!-- / CARD LABELS -->\n\n    <!-- CARD NAME -->\n    <div class=\"list-card-name\">{{card.name}}</div>\n    <!-- / CARD NAME -->\n\n    <div *ngIf=\"card.due || card.checkItems\"\n         class=\"list-card-badges\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <!-- CARD DUE -->\n        <span class=\"badge due-date\"\n              [ngClass]=\"{'overdue': isOverdue(card.due)}\"\n              *ngIf=\"card.due\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16\">access_time</mat-icon>\n            <span>{{card.due | date:'mediumDate'}}</span>\n\n        </span>\n        <!-- / CARD DUE -->\n\n        <!-- CARD CHECK ITEMS STATUS -->\n        <span *ngIf=\"card.checkItems\"\n              class=\"badge check-items\"\n              [ngClass]=\"{'completed': card.checkItemsChecked === card.checkItems}\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16\">check_circle</mat-icon>\n            <span>{{card.checkItemsChecked}}</span>\n            <span>/</span>\n            <span>{{card.checkItems}}</span>\n        </span>\n        <!-- / CARD CHECK ITEMS STATUS -->\n\n    </div>\n\n    <!-- CARD MEMBERS -->\n    <div *ngIf=\"card.idMembers.length > 0\"\n         class=\"list-card-members\"\n         fxLayout=\"row\">\n\n        <div class=\"list-card-member\"\n             *ngFor=\"let memberId of card.idMembers\">\n\n            <img class=\"list-card-member-avatar\"\n                 [src]=\"board.members | getById:memberId:'avatar'\"\n                 [matTooltip]=\"board.members | getById:memberId:'name'\">\n        </div>\n\n    </div>\n    <!-- / CARD MEMBERS -->\n\n</div>\n<!-- / CARD DETAILS -->\n\n<!-- CARD FOOTER -->\n<div class=\"list-card-footer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <!-- CARD SUBSCRIBE -->\n        <span *ngIf=\"card.subscribed\" class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">remove_red_eye</mat-icon>\n        </span>\n        <!-- / CARD SUBSCRIBE -->\n\n        <!-- CARD DETAILS -->\n        <span *ngIf=\"card.description !== ''\"\n              class=\"list-card-footer-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">description</mat-icon>\n        </span>\n        <!-- / CARD DETAILS -->\n\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\n        <!-- CARD ATTACHMENT -->\n        <span *ngIf=\"card.attachments\"\n              class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">attachment</mat-icon>\n            <span class=\"value\">{{card.attachments.length}}</span>\n        </span>\n        <!-- / CARD ATTACHMENT -->\n\n        <!-- CARD COMMENTS -->\n        <span *ngIf=\"card.comments\"\n              class=\"list-card-footer-item\"\n              fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-18\">comment</mat-icon>\n            <span class=\"value\">{{card.comments.length}}</span>\n        </span>\n        <!-- / CARD COMMENTS -->\n\n    </div>\n</div>\n<!-- CARD FOOTER -->\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/card/card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/card/card.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nscrumboard-board-card {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 16px 0 !important;\n  border-radius: 2px;\n  transition: box-shadow 150ms ease;\n  cursor: pointer; }\nscrumboard-board-card .list-card-sort-handle {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4px;\n    background: rgba(255, 255, 255, 0.8); }\nscrumboard-board-card .list-card-details {\n    padding: 16px 16px 0 16px; }\nscrumboard-board-card .list-card-details .list-card-labels {\n      margin-bottom: 6px; }\nscrumboard-board-card .list-card-details .list-card-labels .list-card-label {\n        width: 32px;\n        height: 6px;\n        border-radius: 6px;\n        margin: 0 6px 6px 0; }\nscrumboard-board-card .list-card-details .list-card-name {\n      font-size: 14px;\n      font-weight: 500;\n      margin-bottom: 12px; }\nscrumboard-board-card .list-card-details .list-card-badges {\n      margin-bottom: 12px; }\nscrumboard-board-card .list-card-details .list-card-badges .badge {\n        margin-right: 8px;\n        padding: 4px 8px;\n        border-radius: 2px; }\nscrumboard-board-card .list-card-details .list-card-badges .badge mat-icon {\n          margin-right: 4px; }\nscrumboard-board-card .list-card-details .list-card-members {\n      margin-bottom: 12px; }\nscrumboard-board-card .list-card-details .list-card-members .list-card-member {\n        margin-right: 8px; }\nscrumboard-board-card .list-card-details .list-card-members .list-card-member .list-card-member-avatar {\n          border-radius: 50%;\n          width: 32px;\n          height: 32px; }\nscrumboard-board-card .list-card-footer {\n    border-top: 1px solid;\n    padding: 0 16px; }\nscrumboard-board-card .list-card-footer .list-card-footer-item {\n      height: 48px;\n      margin-right: 12px; }\nscrumboard-board-card .list-card-footer .list-card-footer-item .value {\n        padding-left: 8px; }\nscrumboard-board-card .list-card-footer .list-card-footer-item:last-of-type {\n        margin-right: 0; }\nscrumboard-board-card .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\nscrumboard-board-card.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\nscrumboard-board-card.gu-hide {\n    display: none !important; }\nscrumboard-board-card.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\nscrumboard-board-card.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/card/card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/card/card.component.ts ***!
  \************************************************************************/
/*! exports provided: ScrumboardBoardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardCardComponent", function() { return ScrumboardBoardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrumboardBoardCardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     */
    function ScrumboardBoardCardComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardBoardCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.board = this._activatedRoute.snapshot.data.board;
        this.card = this.board.cards.filter(function (card) {
            return _this.cardId === card.id;
        })[0];
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Is the card overdue?
     *
     * @param cardDate
     * @returns {boolean}
     */
    ScrumboardBoardCardComponent.prototype.isOverdue = function (cardDate) {
        return moment__WEBPACK_IMPORTED_MODULE_2__() > moment__WEBPACK_IMPORTED_MODULE_2__(new Date(cardDate));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrumboardBoardCardComponent.prototype, "cardId", void 0);
    ScrumboardBoardCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/main/apps/scrumboard/board/list/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/main/apps/scrumboard/board/list/card/card.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ScrumboardBoardCardComponent);
    return ScrumboardBoardCardComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"1 0 auto\" *ngIf=\"!formActive\" class=\"list-header-name\" (click)=\"openForm()\">\n    {{list.name}}\n</div>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\"\n      class=\"list-header-name-form\" fxLayout=\"row\" fxFlex=\"1 0 auto\"\n      *ngIf=\"formActive\">\n\n    <input formControlName=\"name\" #nameInput fxFlex placeholder=\"Write a list Name\">\n\n    <button mat-icon-button fxFlex=\"0 1 auto\">\n        <mat-icon>check</mat-icon>\n    </button>\n    <button mat-icon-button fxFlex=\"0 1 auto\" (click)=\"closeForm()\" type=\"button\">\n        <mat-icon>close</mat-icon>\n    </button>\n</form>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-board-edit-list-name .list-header-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScrumboardBoardEditListNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardEditListNameComponent", function() { return ScrumboardBoardEditListNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrumboardBoardEditListNameComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    function ScrumboardBoardEditListNameComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.formActive = false;
        this.listNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open the form
     */
    ScrumboardBoardEditListNameComponent.prototype.openForm = function () {
        this.form = this._formBuilder.group({
            name: [this.list.name]
        });
        this.formActive = true;
        this.focusNameField();
    };
    /**
     * Close the form
     */
    ScrumboardBoardEditListNameComponent.prototype.closeForm = function () {
        this.formActive = false;
    };
    /**
     * Focus to the name field
     */
    ScrumboardBoardEditListNameComponent.prototype.focusNameField = function () {
        var _this = this;
        setTimeout(function () {
            _this.nameInputField.nativeElement.focus();
        });
    };
    /**
     * On form submit
     */
    ScrumboardBoardEditListNameComponent.prototype.onFormSubmit = function () {
        if (this.form.valid) {
            this.list.name = this.form.getRawValue().name;
            this.listNameChanged.next(this.list.name);
            this.formActive = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrumboardBoardEditListNameComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScrumboardBoardEditListNameComponent.prototype, "listNameChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", Object)
    ], ScrumboardBoardEditListNameComponent.prototype, "nameInputField", void 0);
    ScrumboardBoardEditListNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-edit-list-name',
            template: __webpack_require__(/*! ./edit-list-name.component.html */ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.html"),
            styles: [__webpack_require__(/*! ./edit-list-name.component.scss */ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ScrumboardBoardEditListNameComponent);
    return ScrumboardBoardEditListNameComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list mat-elevation-z1\" fxLayout=\"column\">\n\n    <!-- LIST HEADER -->\n    <div class=\"list-header\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <scrumboard-board-edit-list-name\n            fxFlex=\"1 0 auto\"\n            [list]=\"list\"\n            (listNameChanged)=\"onListNameChanged($event)\">\n        </scrumboard-board-edit-list-name>\n\n        <div fxFlex=\"0 1 auto\">\n            <button mat-icon-button class=\"list-header-option-button\" [matMenuTriggerFor]=\"listMenu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #listMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"removeList(list.id)\">Remove List</button>\n            </mat-menu>\n        </div>\n\n    </div>\n    <!-- / LIST HEADER -->\n\n    <!-- LIST CONTENT -->\n    <div class=\"list-content\" fxLayout=\"column\">\n\n        <div class=\"list-cards ngx-dnd-container\"\n             [model]=\"list.idCards\" ngxDroppable=\"card\" (out)=\"onDrop($event)\"\n             fusePerfectScrollbar #listScroll>\n            <scrumboard-board-card ngxDraggable\n                                   (click)=\"openCardDialog(cardId)\"\n                                   class=\"scrumboard-board-card mat-elevation-z2 ngx-dnd-item\"\n                                   *ngFor=\"let cardId of list.idCards\"\n                                   [model]=\"cardId\"\n                                   [cardId]=\"cardId\">\n            </scrumboard-board-card>\n        </div>\n    </div>\n    <!-- / LIST CONTENT -->\n\n    <!-- NEW CARD BUTTON-->\n    <div class=\"list-footer\">\n        <scrumboard-board-add-card (cardAdded)=\"onCardAdd($event)\"></scrumboard-board-add-card>\n    </div>\n    <!-- / NEW CARD BUTTON-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nscrumboard-board-list {\n  width: 344px;\n  min-width: 344px;\n  max-width: 344px;\n  padding-right: 24px !important;\n  height: 100%; }\nscrumboard-board-list .list {\n    max-height: 100%;\n    border-radius: 2px;\n    transition: box-shadow 150ms ease; }\nscrumboard-board-list .list .list-header {\n      height: 64px;\n      min-height: 64px;\n      padding: 0 8px 0 16px;\n      border-bottom: 1px solid; }\n@media (max-width: 959px) {\n        scrumboard-board-list .list .list-header {\n          height: 48px;\n          min-height: 48px; } }\nscrumboard-board-list .list .list-content {\n      position: relative;\n      min-height: 0;\n      overflow: hidden;\n      overflow-y: auto;\n      -webkit-overflow-scrolling: touch; }\nscrumboard-board-list .list .list-content .list-cards {\n        position: relative;\n        min-height: 32px;\n        padding: 0 16px; }\nscrumboard-board-list .list .list-footer {\n      display: flex;\n      flex-direction: column;\n      flex: 1 0 auto;\n      border-top: 1px solid;\n      min-height: 48px; }\nscrumboard-board-list .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\nscrumboard-board-list.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80); }\nscrumboard-board-list.gu-mirror > .list {\n      box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\nscrumboard-board-list.gu-hide {\n    display: none !important; }\nscrumboard-board-list.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\nscrumboard-board-list.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/list/list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScrumboardBoardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardListComponent", function() { return ScrumboardBoardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var app_main_apps_scrumboard_card_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/scrumboard/card.model */ "./src/app/main/apps/scrumboard/card.model.ts");
/* harmony import */ var app_main_apps_scrumboard_board_dialogs_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/scrumboard/board/dialogs/card/card.component */ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ScrumboardBoardListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {ScrumboardService} _scrumboardService
     * @param {MatDialog} _matDialog
     */
    function ScrumboardBoardListComponent(_activatedRoute, _scrumboardService, _matDialog) {
        this._activatedRoute = _activatedRoute;
        this._scrumboardService = _scrumboardService;
        this._matDialog = _matDialog;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardBoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
        });
    };
    /**
     * On destroy
     */
    ScrumboardBoardListComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On list name changed
     *
     * @param newListName
     */
    ScrumboardBoardListComponent.prototype.onListNameChanged = function (newListName) {
        this.list.name = newListName;
    };
    /**
     * On card added
     *
     * @param newCardName
     */
    ScrumboardBoardListComponent.prototype.onCardAdd = function (newCardName) {
        var _this = this;
        if (newCardName === '') {
            return;
        }
        this._scrumboardService.addCard(this.list.id, new app_main_apps_scrumboard_card_model__WEBPACK_IMPORTED_MODULE_8__["Card"]({ name: newCardName }));
        setTimeout(function () {
            _this.listScroll.scrollToBottom(0, 400);
        });
    };
    /**
     * Remove list
     *
     * @param listId
     */
    ScrumboardBoardListComponent.prototype.removeList = function (listId) {
        var _this = this;
        this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._scrumboardService.removeList(listId);
            }
        });
    };
    /**
     * Open card dialog
     *
     * @param cardId
     */
    ScrumboardBoardListComponent.prototype.openCardDialog = function (cardId) {
        this.dialogRef = this._matDialog.open(app_main_apps_scrumboard_board_dialogs_card_card_component__WEBPACK_IMPORTED_MODULE_9__["ScrumboardCardDialogComponent"], {
            panelClass: 'scrumboard-card-dialog',
            data: {
                cardId: cardId,
                listId: this.list.id
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
        });
    };
    /**
     * On drop
     *
     * @param ev
     */
    ScrumboardBoardListComponent.prototype.onDrop = function (ev) {
        this._scrumboardService.updateBoard();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrumboardBoardListComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_6__["FusePerfectScrollbarDirective"]),
        __metadata("design:type", _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_6__["FusePerfectScrollbarDirective"])
    ], ScrumboardBoardListComponent.prototype, "listScroll", void 0);
    ScrumboardBoardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/main/apps/scrumboard/board/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/main/apps/scrumboard/board/list/list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_7__["ScrumboardService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ScrumboardBoardListComponent);
    return ScrumboardBoardListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"colors\">\n    <!-- COLORS -->\n    <mat-list-item class=\"color m-8 mat-elevation-z1\"\n                   [ngClass]=\"color.key\"\n                   *ngFor=\"let color of (colors | keys)\"\n                   (click)=\"setColor(color.key)\"\n                   matRipple>\n        <p fxFlex>{{color.key}}</p>\n        <mat-icon class=\"s-16\" *ngIf=\"color.key === board.settings.color\">check</mat-icon>\n        <button mat-icon-button *ngIf=\"color.key === board.settings.color\" (click)=\"$event.stopPropagation();setColor('')\">\n            <mat-icon class=\"s-16\">delete</mat-icon>\n        </button>\n    </mat-list-item>\n    <!-- / COLORS -->\n</mat-list>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-board-color-selector .colors .color {\n  position: relative;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ScrumboardBoardColorSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardColorSelectorComponent", function() { return ScrumboardBoardColorSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScrumboardBoardColorSelectorComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    function ScrumboardBoardColorSelectorComponent(_scrumboardService) {
        this._scrumboardService = _scrumboardService;
        // Set the defaults
        this.colors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__["MatColors"].all;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardBoardColorSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
        });
    };
    /**
     * On destroy
     */
    ScrumboardBoardColorSelectorComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Set the color
     *
     * @param color
     */
    ScrumboardBoardColorSelectorComponent.prototype.setColor = function (color) {
        this.board.settings.color = color;
        this._scrumboardService.updateBoard();
    };
    ScrumboardBoardColorSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-color-selector',
            template: __webpack_require__(/*! ./board-color-selector.component.html */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.html"),
            styles: [__webpack_require__(/*! ./board-color-selector.component.scss */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_4__["ScrumboardService"]])
    ], ScrumboardBoardColorSelectorComponent);
    return ScrumboardBoardColorSelectorComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\" (click)=\"$event.stopPropagation()\">\n\n    <div class=\"view\" *ngSwitchCase=\"'main'\" [@slideInLeft]>\n\n        <!-- SIDENAV HEADER -->\n        <div class=\"header px-24\" [ngClass]=\"board.settings.color\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>Settings</div>\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content py-16\" fusePerfectScrollbar>\n\n            <div class=\"nav\">\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"view = 'board-color'\">\n                        <mat-icon class=\"nav-link-icon\">format_color_fill</mat-icon>\n                        <p class=\"title\">Board Color</p>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"toggleCardCover()\">\n                        <mat-icon class=\"nav-link-icon\">photo</mat-icon>\n                        <p fxFlex class=\"title\">Card Cover Images</p>\n                        <mat-icon *ngIf=\"board.settings.cardCoverImages\" class=\"s-18\">check</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple (click)=\"toggleSubscription()\">\n                        <mat-icon class=\"nav-link-icon\">remove_red_eye</mat-icon>\n                        <p fxFlex class=\"title\">Subscribe</p>\n                        <mat-icon *ngIf=\"board.settings.subscribed\" class=\"s-18\">check</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple>\n                        <mat-icon class=\"nav-link-icon\">content_copy</mat-icon>\n                        <p class=\"title\">Copy Board</p>\n                    </div>\n                </div>\n\n                <div class=\"nav-item\">\n                    <div class=\"nav-link\" matRipple>\n                        <mat-icon class=\"nav-link-icon\">delete</mat-icon>\n                        <p class=\"title\">Delete Board</p>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n            </div>\n        </div>\n        <!-- / SIDENAV CONTENT -->\n    </div>\n\n    <div class=\"view\" *ngSwitchCase=\"'board-color'\" [@slideInRight]>\n\n        <!-- SIDENAV HEADER -->\n        <div class=\"header px-24\" [ngClass]=\"board.settings.color\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div>Background Color</div>\n            <button mat-icon-button (click)=\"view ='main'\">\n                <mat-icon class=\"s-16\">arrow_back</mat-icon>\n            </button>\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content p-8\" fusePerfectScrollbar>\n            <scrumboard-board-color-selector></scrumboard-board-color-selector>\n        </div>\n        <!-- / SIDENAV CONTENT -->\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scrumboard-board-settings {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  height: 100%; }\n  scrumboard-board-settings .views {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    overflow: hidden;\n    height: 100%; }\n  scrumboard-board-settings .views .view {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0;\n      display: flex;\n      flex-direction: column; }\n  scrumboard-board-settings .views .view > .header {\n        flex: 0 1 auto;\n        height: 64px;\n        min-height: 64px;\n        border-bottom: 1px solid; }\n  scrumboard-board-settings .views .view > .content {\n        flex: 1 1 auto;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch; }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.ts ***!
  \************************************************************************************/
/*! exports provided: ScrumboardBoardSettingsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardBoardSettingsSidenavComponent", function() { return ScrumboardBoardSettingsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
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





var ScrumboardBoardSettingsSidenavComponent = /** @class */ (function () {
    function ScrumboardBoardSettingsSidenavComponent(scrumboardService) {
        this.scrumboardService = scrumboardService;
        // Set the defaults
        this.view = 'main';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardBoardSettingsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrumboardService.onBoardChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (board) {
            _this.board = board;
        });
    };
    /**
     * On destroy
     */
    ScrumboardBoardSettingsSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle card cover
     */
    ScrumboardBoardSettingsSidenavComponent.prototype.toggleCardCover = function () {
        this.board.settings.cardCoverImages = !this.board.settings.cardCoverImages;
        this.scrumboardService.updateBoard();
    };
    /**
     * Toggle subscription
     */
    ScrumboardBoardSettingsSidenavComponent.prototype.toggleSubscription = function () {
        this.board.settings.subscribed = !this.board.settings.subscribed;
        this.scrumboardService.updateBoard();
    };
    ScrumboardBoardSettingsSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard-board-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_2__["ScrumboardService"]])
    ], ScrumboardBoardSettingsSidenavComponent);
    return ScrumboardBoardSettingsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/card.model.ts":
/*!****************************************************!*\
  !*** ./src/app/main/apps/scrumboard/card.model.ts ***!
  \****************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var Card = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param card
     */
    function Card(card) {
        this.id = card.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.name = card.name || '';
        this.description = card.description || '';
        this.idAttachmentCover = card.idAttachmentCover || '';
        this.idMembers = card.idMembers || [];
        this.idLabels = card.idLabels || [];
        this.attachments = card.attachments || [];
        this.subscribed = card.subscribed || true;
        this.checklists = card.checklists || [];
        this.checkItems = card.checkItems || 0;
        this.checkItemsChecked = card.checkItemsChecked || 0;
        this.comments = card.comments || [];
        this.activities = card.activities || [];
        this.due = card.due || '';
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/list.model.ts":
/*!****************************************************!*\
  !*** ./src/app/main/apps/scrumboard/list.model.ts ***!
  \****************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var List = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param list
     */
    function List(list) {
        this.id = list.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
    return List;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/scrumboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/scrumboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BOARDS -->\n<div id=\"boards\" class=\"fuse-navy\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex fusePerfectScrollbar>\n\n    <div class=\"header pt-44 pt-md-88\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"0 0 auto\"\n         [@animate]=\"{value:'*',params:{delay:'100ms'}}\">\n        <h1>Scrumboard App</h1>\n    </div>\n\n    <!-- BOARD LIST -->\n    <div class=\"board-list\" fxFlex=\"0 0 auto\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\"\n         [@animateStagger]=\"{value:'50'}\">\n\n        <!-- BOARD -->\n        <div class=\"board-list-item\" *ngFor=\"let board of boards\"\n             [routerLink]=\"'/apps/scrumboard/boards/'+board.id+'/'+board.uri\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n            <mat-icon class=\"s-56\">assessment</mat-icon>\n            <div class=\"board-name\">{{board.name}}</div>\n        </div>\n        <!-- / BOARD -->\n\n        <!-- NEW BOARD BUTTON -->\n        <div class=\"board-list-item add-new-board\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             (click)=\"newBoard()\"\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n            <mat-icon class=\"s-56\">add_circle</mat-icon>\n            <div class=\"board-name\">Add new board</div>\n        </div>\n        <!-- / NEW BOARD BUTTON -->\n\n    </div>\n    <!-- / BOARD LIST -->\n</div>\n<!-- / BOARDS -->\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/scrumboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/scrumboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nscrumboard {\n  min-height: 100%; }\nscrumboard #boards {\n    width: 100%;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\nscrumboard #boards .header h1 {\n      font-size: 40px;\n      font-weight: 300; }\nscrumboard #boards .board-list {\n      padding: 32px 0;\n      max-height: none !important; }\nscrumboard #boards .board-list .board-list-item {\n        min-width: 210px;\n        min-height: 210px;\n        width: 210px;\n        height: 210px;\n        padding: 24px 0;\n        margin: 16px;\n        border-radius: 4px;\n        background: rgba(0, 0, 0, 0.12);\n        transition: box-shadow 150ms ease-in;\n        cursor: pointer; }\nscrumboard #boards .board-list .board-list-item:hover {\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\nscrumboard #boards .board-list .board-list-item .board-name {\n          padding: 16px 32px 0 32px;\n          font-weight: 300;\n          font-size: 16px;\n          text-align: center; }\nscrumboard #boards .board-list .board-list-item.add-new-board {\n          background: rgba(0, 0, 0, 0.06);\n          border: 2px dashed rgba(255, 255, 255, 0.37); }\n"

/***/ }),

/***/ "./src/app/main/apps/scrumboard/scrumboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/scrumboard.component.ts ***!
  \**************************************************************/
/*! exports provided: ScrumboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardComponent", function() { return ScrumboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var app_main_apps_scrumboard_board_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/scrumboard/board.model */ "./src/app/main/apps/scrumboard/board.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScrumboardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {ScrumboardService} _scrumboardService
     */
    function ScrumboardComponent(_router, _scrumboardService) {
        this._router = _router;
        this._scrumboardService = _scrumboardService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ScrumboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrumboardService.onBoardsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (boards) {
            _this.boards = boards;
        });
    };
    /**
     * On destroy
     */
    ScrumboardComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * New board
     */
    ScrumboardComponent.prototype.newBoard = function () {
        var _this = this;
        var newBoard = new app_main_apps_scrumboard_board_model__WEBPACK_IMPORTED_MODULE_6__["Board"]({});
        this._scrumboardService.createNewBoard(newBoard).then(function () {
            _this._router.navigate(['/apps/scrumboard/boards/' + newBoard.id + '/' + newBoard.uri]);
        });
    };
    ScrumboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'scrumboard',
            template: __webpack_require__(/*! ./scrumboard.component.html */ "./src/app/main/apps/scrumboard/scrumboard.component.html"),
            styles: [__webpack_require__(/*! ./scrumboard.component.scss */ "./src/app/main/apps/scrumboard/scrumboard.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_5__["ScrumboardService"]])
    ], ScrumboardComponent);
    return ScrumboardComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/scrumboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/scrumboard/scrumboard.module.ts ***!
  \***********************************************************/
/*! exports provided: ScrumboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardModule", function() { return ScrumboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/fesm5/swimlane-ngx-dnd.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.service */ "./src/app/main/apps/scrumboard/scrumboard.service.ts");
/* harmony import */ var app_main_apps_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/scrumboard/scrumboard.component */ "./src/app/main/apps/scrumboard/scrumboard.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/scrumboard/board/board.component */ "./src/app/main/apps/scrumboard/board/board.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/scrumboard/board/list/list.component */ "./src/app/main/apps/scrumboard/board/list/list.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_list_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/scrumboard/board/list/card/card.component */ "./src/app/main/apps/scrumboard/board/list/card/card.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_list_edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component */ "./src/app/main/apps/scrumboard/board/list/edit-list-name/edit-list-name.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_list_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/scrumboard/board/list/add-card/add-card.component */ "./src/app/main/apps/scrumboard/board/list/add-card/add-card.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/apps/scrumboard/board/add-list/add-list.component */ "./src/app/main/apps/scrumboard/board/add-list/add-list.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_dialogs_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/apps/scrumboard/board/dialogs/card/card.component */ "./src/app/main/apps/scrumboard/board/dialogs/card/card.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_dialogs_card_label_selector_label_selector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component */ "./src/app/main/apps/scrumboard/board/dialogs/card/label-selector/label-selector.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_edit_board_name_edit_board_name_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component */ "./src/app/main/apps/scrumboard/board/edit-board-name/edit-board-name.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_sidenavs_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/main/apps/scrumboard/board/sidenavs/settings/settings.component */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/settings.component.ts");
/* harmony import */ var app_main_apps_scrumboard_board_sidenavs_settings_board_color_selector_board_color_selector_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component */ "./src/app/main/apps/scrumboard/board/sidenavs/settings/board-color-selector/board-color-selector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: 'boards',
        component: app_main_apps_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_7__["ScrumboardComponent"],
        resolve: {
            scrumboard: app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__["ScrumboardService"]
        }
    },
    {
        path: 'boards/:boardId/:boardUri',
        component: app_main_apps_scrumboard_board_board_component__WEBPACK_IMPORTED_MODULE_8__["ScrumboardBoardComponent"],
        resolve: {
            board: app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__["BoardResolve"]
        }
    },
    {
        path: '**',
        redirectTo: 'boards'
    }
];
var ScrumboardModule = /** @class */ (function () {
    function ScrumboardModule() {
    }
    ScrumboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_7__["ScrumboardComponent"],
                app_main_apps_scrumboard_board_board_component__WEBPACK_IMPORTED_MODULE_8__["ScrumboardBoardComponent"],
                app_main_apps_scrumboard_board_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ScrumboardBoardListComponent"],
                app_main_apps_scrumboard_board_list_card_card_component__WEBPACK_IMPORTED_MODULE_10__["ScrumboardBoardCardComponent"],
                app_main_apps_scrumboard_board_list_edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_11__["ScrumboardBoardEditListNameComponent"],
                app_main_apps_scrumboard_board_list_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_12__["ScrumboardBoardAddCardComponent"],
                app_main_apps_scrumboard_board_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_13__["ScrumboardBoardAddListComponent"],
                app_main_apps_scrumboard_board_dialogs_card_card_component__WEBPACK_IMPORTED_MODULE_14__["ScrumboardCardDialogComponent"],
                app_main_apps_scrumboard_board_dialogs_card_label_selector_label_selector_component__WEBPACK_IMPORTED_MODULE_15__["ScrumboardLabelSelectorComponent"],
                app_main_apps_scrumboard_board_edit_board_name_edit_board_name_component__WEBPACK_IMPORTED_MODULE_16__["ScrumboardEditBoardNameComponent"],
                app_main_apps_scrumboard_board_sidenavs_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["ScrumboardBoardSettingsSidenavComponent"],
                app_main_apps_scrumboard_board_sidenavs_settings_board_color_selector_board_color_selector_component__WEBPACK_IMPORTED_MODULE_18__["ScrumboardBoardColorSelectorComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__["NgxDnDModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseMaterialColorPickerModule"]
            ],
            providers: [
                app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__["ScrumboardService"],
                app_main_apps_scrumboard_scrumboard_service__WEBPACK_IMPORTED_MODULE_6__["BoardResolve"]
            ],
            entryComponents: [app_main_apps_scrumboard_board_dialogs_card_card_component__WEBPACK_IMPORTED_MODULE_14__["ScrumboardCardDialogComponent"]]
        })
    ], ScrumboardModule);
    return ScrumboardModule;
}());



/***/ }),

/***/ "./src/app/main/apps/scrumboard/scrumboard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/main/apps/scrumboard/scrumboard.service.ts ***!
  \************************************************************/
/*! exports provided: ScrumboardService, BoardResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardService", function() { return ScrumboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardResolve", function() { return BoardResolve; });
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



var ScrumboardService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ScrumboardService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onBoardsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onBoardChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ScrumboardService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getBoards()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get boards
     *
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.getBoards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/scrumboard-boards')
                .subscribe(function (response) {
                _this.boards = response;
                _this.onBoardsChanged.next(_this.boards);
                resolve(_this.boards);
            }, reject);
        });
    };
    /**
     * Get board
     *
     * @param boardId
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.getBoard = function (boardId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/scrumboard-boards/' + boardId)
                .subscribe(function (response) {
                _this.board = response;
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    /**
     * Add card
     *
     * @param listId
     * @param newCard
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.addCard = function (listId, newCard) {
        this.board.lists.map(function (list) {
            if (list.id === listId) {
                return list.idCards.push(newCard.id);
            }
        });
        this.board.cards.push(newCard);
        return this.updateBoard();
    };
    /**
     * Add list
     *
     * @param newList
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.addList = function (newList) {
        this.board.lists.push(newList);
        return this.updateBoard();
    };
    /**
     * Remove list
     *
     * @param listId
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.removeList = function (listId) {
        var list = this.board.lists.find(function (_list) {
            return _list.id === listId;
        });
        for (var _i = 0, _a = list.idCards; _i < _a.length; _i++) {
            var cardId = _a[_i];
            this.removeCard(cardId);
        }
        var index = this.board.lists.indexOf(list);
        this.board.lists.splice(index, 1);
        return this.updateBoard();
    };
    /**
     * Remove card
     *
     * @param cardId
     * @param listId
     */
    ScrumboardService.prototype.removeCard = function (cardId, listId) {
        var card = this.board.cards.find(function (_card) {
            return _card.id === cardId;
        });
        if (listId) {
            var list = this.board.lists.find(function (_list) {
                return listId === _list.id;
            });
            list.idCards.splice(list.idCards.indexOf(cardId), 1);
        }
        this.board.cards.splice(this.board.cards.indexOf(card), 1);
        this.updateBoard();
    };
    /**
     * Update board
     *
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.updateBoard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/scrumboard-boards/' + _this.board.id, _this.board)
                .subscribe(function (response) {
                _this.onBoardChanged.next(_this.board);
                resolve(_this.board);
            }, reject);
        });
    };
    /**
     * Update card
     *
     * @param newCard
     */
    ScrumboardService.prototype.updateCard = function (newCard) {
        this.board.cards.map(function (_card) {
            if (_card.id === newCard.id) {
                return newCard;
            }
        });
        this.updateBoard();
    };
    /**
     * Create new board
     *
     * @param board
     * @returns {Promise<any>}
     */
    ScrumboardService.prototype.createNewBoard = function (board) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/scrumboard-boards/' + board.id, board)
                .subscribe(function (response) {
                resolve(board);
            }, reject);
        });
    };
    ScrumboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScrumboardService);
    return ScrumboardService;
}());

var BoardResolve = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    function BoardResolve(_scrumboardService) {
        this._scrumboardService = _scrumboardService;
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @returns {Promise<any>}
     */
    BoardResolve.prototype.resolve = function (route) {
        return this._scrumboardService.getBoard(route.paramMap.get('boardId'));
    };
    BoardResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ScrumboardService])
    ], BoardResolve);
    return BoardResolve;
}());



/***/ })

}]);
//# sourceMappingURL=scrumboard-scrumboard-module.js.map