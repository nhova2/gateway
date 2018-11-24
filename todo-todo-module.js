(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/todo/sidebars/main/main-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDEBAR HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header accent p-24 pb-4\">\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n            check_box\n        </mat-icon>\n        <span class=\"logo-text\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">To-Do</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\" [@animate]=\"{value:'*',params:{delay:'300ms'}}\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatLabel=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Todo Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDEBAR HEADER -->\n\n<!-- SIDEBAR CONTENT -->\n<div class=\"content\" fusePerfectScrollbar [@animate]=\"{value:'*',params:{y:'50px'}}\">\n\n    <div class=\"p-24\">\n        <button mat-raised-button\n                class=\"mat-accent add-todo-button w-100-p\"\n                (click)=\"newTodo()\"\n                aria-label=\"ADD TASK\">\n            ADD TASK\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-item\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/all'\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\">view_headline</mat-icon>\n                <span>All</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">FILTERS</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of filters\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/filter/' + filter.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">TAGS</div>\n\n        <div class=\"nav-item\" *ngFor=\"let tag of tags\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/todo/tag/' + tag.handle\"\n               [routerLinkActive]=\"['active', 'accent']\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':tag.color}\">label</mat-icon>\n                <span>{{tag.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDEBAR CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/todo/sidebars/main/main-sidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "todo-main-sidebar {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  height: 100%; }\n  todo-main-sidebar .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  todo-main-sidebar .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  todo-main-sidebar .header .account {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/apps/todo/sidebars/main/main-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: TodoMainSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMainSidebarComponent", function() { return TodoMainSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoMainSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {Router} _router
     */
    function TodoMainSidebarComponent(_todoService, _router) {
        this._todoService = _todoService;
        this._router = _router;
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
    TodoMainSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._todoService.onFiltersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (filters) {
            _this.filters = filters;
        });
        this._todoService.onTagsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (tags) {
            _this.tags = tags;
        });
    };
    /**
     * On destroy
     */
    TodoMainSidebarComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * New todo
     */
    TodoMainSidebarComponent.prototype.newTodo = function () {
        var _this = this;
        this._router.navigate(['/apps/todo/all']).then(function () {
            setTimeout(function () {
                _this._todoService.onNewTodoClicked.next('');
            });
        });
    };
    TodoMainSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-main-sidebar',
            template: __webpack_require__(/*! ./main-sidebar.component.html */ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./main-sidebar.component.scss */ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TodoMainSidebarComponent);
    return TodoMainSidebarComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo-details/todo-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-details/todo-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!todo\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-120 mb-12 select-todo-icon hint-text\"\n              [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">check_box\n    </mat-icon>\n    <span class=\"hint-text mat-h1 select-todo-text\" [@animate]=\"{value:'*',params:{delay:'400ms'}}\">\n        Select a todo\n    </span>\n</div>\n\n<div *ngIf=\"todo\">\n\n    <div class=\"todo-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button mat-button class=\"toggle-complete-button\" (click)=\"toggleCompleted($event)\"\n                aria-label=\"Toggle completed\" fxFlex=\"0 1 auto\">\n            <mat-icon *ngIf=\"todo.completed\">check_box</mat-icon>\n            <mat-icon *ngIf=\"!todo.completed\">check_box_outline_blank</mat-icon>\n            <span class=\"ml-8\">Mark as Done</span>\n        </button>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon class=\"red-fg\" *ngIf=\"todo.important\">error</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!todo.important\">error_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon class=\"amber-fg\" *ngIf=\"todo.starred\">star</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!todo.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" fxFlex=\"0 1 auto\">\n                <mat-icon class=\"secondary-text\">label</mat-icon>\n            </button>\n\n            <mat-menu #labelMenu=\"matMenu\">\n                <button mat-menu-item *ngFor=\"let tag of tags\"\n                        (click)=\"toggleTagOnTodo(tag.id)\">\n                    <mat-icon *ngIf=\"hasTag(tag.id)\">check</mat-icon>\n                    <mat-icon *ngIf=\"!hasTag(tag.id)\"></mat-icon>\n                    <span>{{tag.title}}</span>\n                </button>\n            </mat-menu>\n\n            <button mat-icon-button (click)=\"toggleDeleted($event)\" aria-label=\"Toggle delete\">\n                <mat-icon class=\"secondary-text\" *ngIf=\"todo.deleted\">delete_forever</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!todo.deleted\">delete</mat-icon>\n            </button>\n\n        </div>\n    </div>\n\n    <div class=\"todo-content\">\n\n        <form [formGroup]=\"todoForm\" (submit)=\"addTodo()\">\n\n            <mat-form-field class=\"title mt-8\" floatLabel=\"never\" fxFill>\n                <textarea matInput\n                          #titleInput\n                          name=\"title\"\n                          formControlName=\"title\"\n                          placeholder=\"Title\"\n                          required>\n                </textarea>\n            </mat-form-field>\n\n            <div class=\"tags mb-24\" fxFlexFill fxLayout=\"row wrap\">\n                <div class=\"tag\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let tagId of todo.tags\">\n\n                    <div class=\"tag-color\" [ngStyle]=\"{'background-color': tags | getById:tagId:'color'}\"></div>\n\n                    <div class=\"tag-label\">{{tags | getById:tagId:'title'}}</div>\n                </div>\n            </div>\n\n            <div class=\"dates\" fxFlexFill fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\n                    <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #startDatePicker></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dueDatePicker\" placeholder=\"Due Date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #dueDatePicker></mat-datepicker>\n                </mat-form-field>\n\n            </div>\n\n            <mat-form-field class=\"\" fxFill>\n                <textarea matInput #notes\n                          name=\"notes\"\n                          formControlName=\"notes\"\n                          placeholder=\"Notes\"\n                          maxlength=\"500\">\n                </textarea>\n                <mat-hint align=\"end\">{{notes.value.length}} / 500</mat-hint>\n            </mat-form-field>\n\n            <button *ngIf=\"formType === 'new'\"\n                    mat-raised-button class=\"mat-accent\"\n                    [disabled]=\"todoForm.invalid\">SAVE\n            </button>\n        </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-details/todo-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-details/todo-details.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ntodo-details {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\ntodo-details .todo-header {\n    padding: 24px;\n    border-bottom: 1px solid; }\ntodo-details .todo-header .actions {\n      min-width: 88px; }\ntodo-details .todo-content {\n    padding: 24px; }\ntodo-details .todo-content .title {\n      font-size: 17px;\n      font-weight: 500; }\ntodo-details .todo-content .tag {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 8px 4px 0 0;\n      padding: 3px 8px; }\ntodo-details .todo-content .tag .tag-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\ntodo-details .todo-content .dates .mat-form-field {\n      width: auto !important; }\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-details/todo-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-details/todo-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: TodoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsComponent", function() { return TodoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/todo/todo.model */ "./src/app/main/apps/todo/todo.model.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TodoDetailsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {FormBuilder} _formBuilder
     */
    function TodoDetailsComponent(_todoService, _formBuilder) {
        this._todoService = _todoService;
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
    TodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update the current todo
        this._todoService.onCurrentTodoChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (_a) {
            var todo = _a[0], formType = _a[1];
            if (todo && formType === 'edit') {
                _this.formType = 'edit';
                _this.todo = todo;
                _this.todoForm = _this.createTodoForm();
                _this.todoForm.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
                    .subscribe(function (data) {
                    _this._todoService.updateTodo(data);
                });
            }
        });
        // Subscribe to update on tag change
        this._todoService.onTagsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (labels) {
            _this.tags = labels;
        });
        // Subscribe to update on tag change
        this._todoService.onNewTodoClicked
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function () {
            _this.todo = new app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_6__["Todo"]({});
            _this.todo.id = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].generateGUID();
            _this.formType = 'new';
            _this.todoForm = _this.createTodoForm();
            _this.focusTitleField();
            _this._todoService.onCurrentTodoChanged.next([_this.todo, 'new']);
        });
    };
    /**
     * On destroy
     */
    TodoDetailsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Focus title field
     */
    TodoDetailsComponent.prototype.focusTitleField = function () {
        var _this = this;
        setTimeout(function () {
            _this.titleInputField.nativeElement.focus();
        });
    };
    /**
     * Create todo form
     *
     * @returns {FormGroup}
     */
    TodoDetailsComponent.prototype.createTodoForm = function () {
        return this._formBuilder.group({
            'id': [this.todo.id],
            'title': [this.todo.title],
            'notes': [this.todo.notes],
            'startDate': [this.todo.startDate],
            'dueDate': [this.todo.dueDate],
            'completed': [this.todo.completed],
            'starred': [this.todo.starred],
            'important': [this.todo.important],
            'deleted': [this.todo.deleted],
            'tags': [this.todo.tags]
        });
    };
    /**
     * Toggle star
     *
     * @param event
     */
    TodoDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.todo.toggleStar();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle important
     *
     * @param event
     */
    TodoDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.todo.toggleImportant();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Completed
     *
     * @param event
     */
    TodoDetailsComponent.prototype.toggleCompleted = function (event) {
        event.stopPropagation();
        this.todo.toggleCompleted();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Deleted
     *
     * @param event
     */
    TodoDetailsComponent.prototype.toggleDeleted = function (event) {
        event.stopPropagation();
        this.todo.toggleDeleted();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle tag on todo
     *
     * @param tagId
     */
    TodoDetailsComponent.prototype.toggleTagOnTodo = function (tagId) {
        this._todoService.toggleTagOnTodo(tagId, this.todo);
    };
    /**
     * Has tag?
     *
     * @param tagId
     * @returns {any}
     */
    TodoDetailsComponent.prototype.hasTag = function (tagId) {
        return this._todoService.hasTag(tagId, this.todo);
    };
    /**
     * Add todo
     */
    TodoDetailsComponent.prototype.addTodo = function () {
        this._todoService.updateTodo(this.todoForm.getRawValue());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titleInput'),
        __metadata("design:type", Object)
    ], TodoDetailsComponent.prototype, "titleInputField", void 0);
    TodoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-details',
            template: __webpack_require__(/*! ./todo-details.component.html */ "./src/app/main/apps/todo/todo-details/todo-details.component.html"),
            styles: [__webpack_require__(/*! ./todo-details.component.scss */ "./src/app/main/apps/todo/todo-details/todo-details.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_7__["TodoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-icon class=\"handle mr-16\" ngxDragHandle fxFlex=\"0 1 auto\" fxHide.xs>\n        drag_handle\n    </mat-icon>\n\n    <mat-checkbox [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectedChange()\"\n                  class=\"mr-16\" fxFlex=\"0 1 auto\" (click)=\"$event.stopPropagation()\">\n    </mat-checkbox>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n\n        <div class=\"info\" fxFlex fxFlexLayout=\"column\">\n\n            <div class=\"title\">\n                {{todo.title}}\n            </div>\n\n            <div class=\"notes\">\n                {{todo.notes}}\n            </div>\n\n            <div class=\"tags\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n\n                <div class=\"tag\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let tagId of todo.tags\">\n                    <div class=\"tag-color\" [ngStyle]=\"{'background-color': tags | getById:tagId:'color'}\"></div>\n                    <div class=\"tag-label\">{{tags | getById:tagId:'title'}}</div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-icon-button (click)=\"toggleImportant($event)\"\n                    aria-label=\"Toggle important\" fxHide.xs>\n                <mat-icon class=\"red-fg\" *ngIf=\"todo.important\">error</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!todo.important\">error_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"toggleStar($event)\"\n                    aria-label=\"Toggle star\" fxHide.xs>\n                <mat-icon class=\"amber-fg\" *ngIf=\"todo.starred\">star</mat-icon>\n                <mat-icon class=\"secondary-text\" *ngIf=\"!todo.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" (click)=\"$event.stopPropagation()\"\n                    fxHide.xs>\n                <mat-icon class=\"secondary-text\">more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"toggle done\" (click)=\"toggleCompleted($event)\">\n                    <ng-container *ngIf=\"todo.completed\">\n                        <mat-icon>check_box</mat-icon>\n                        <span>Mark as undone</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.completed\">\n                        <mat-icon>check_box_outline_blank</mat-icon>\n                        <span>Mark as done</span>\n                    </ng-container>\n                </button>\n\n                <button mat-menu-item aria-label=\"toggle important\" (click)=\"toggleImportant($event)\">\n                    <ng-container *ngIf=\"todo.important\">\n                        <mat-icon>error</mat-icon>\n                        <span>Remove important</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.important\">\n                        <mat-icon>error_outline</mat-icon>\n                        <span>Mark as important</span>\n                    </ng-container>\n                </button>\n\n                <button mat-menu-item aria-label=\"toggle star\" (click)=\"toggleStar($event)\">\n                    <ng-container *ngIf=\"todo.starred\">\n                        <mat-icon>star</mat-icon>\n                        <span>Remove star</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!todo.starred\">\n                        <mat-icon>star_outline</mat-icon>\n                        <span>Add star</span>\n                    </ng-container>\n                </button>\n            </mat-menu>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ntodo-list-item {\n  display: block;\n  position: relative;\n  padding: 16px 16px 16px 24px;\n  border-bottom: 1px solid;\n  text-transform: none;\n  cursor: pointer;\n  flex-shrink: 0; }\ntodo-list-item .handle {\n    height: 48px;\n    line-height: 48px;\n    cursor: move;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\ntodo-list-item.move-disabled .handle {\n    display: none; }\ntodo-list-item .tags .tag {\n    font-size: 11px;\n    border-radius: 2px;\n    margin: 8px 4px 0 0;\n    padding: 3px 8px; }\ntodo-list-item .tags .tag .tag-color {\n      width: 8px;\n      height: 8px;\n      margin-right: 8px;\n      border-radius: 50%; }\ntodo-list-item.completed .title,\n  todo-list-item.completed .notes {\n    text-decoration: line-through; }\ntodo-list-item .info {\n    margin: 0 16px 0 8px; }\ntodo-list-item .info .title {\n      font-size: 15px;\n      font-weight: 500; }\ntodo-list-item .info .notes {\n      margin-top: 4px; }\ntodo-list-item .buttons .is-starred {\n    margin: 0 0 0 16px; }\ntodo-list-item .buttons .is-important {\n    margin: 0; }\ntodo-list-item:not(.has-handle):not(.move-disabled),\n  todo-list-item.has-handle [ngxdraghandle],\n  todo-list-item.has-handle [ngxDragHandle] {\n    cursor: move; }\ntodo-list-item .ngx-dnd-content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\ntodo-list-item.gu-mirror {\n    position: fixed !important;\n    margin: 0 !important;\n    z-index: 9999 !important;\n    opacity: 0.8;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\ntodo-list-item.gu-hide {\n    display: none !important; }\ntodo-list-item.gu-unselectable {\n    -webkit-user-select: none !important;\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; }\ntodo-list-item.gu-transit {\n    opacity: 0.2;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20); }\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TodoListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListItemComponent", function() { return TodoListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/todo/todo.model */ "./src/app/main/apps/todo/todo.model.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListItemComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {ActivatedRoute} _activatedRoute
     */
    function TodoListItemComponent(_todoService, _activatedRoute) {
        this._todoService = _todoService;
        this._activatedRoute = _activatedRoute;
        // Disable move if path is not /all
        if (_activatedRoute.snapshot.url[0].path !== 'all') {
            this.moveDisabled = true;
        }
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    TodoListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.todo = new app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"](this.todo);
        this.completed = this.todo.completed;
        // Subscribe to update on selected todo change
        this._todoService.onSelectedTodosChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedTodos) {
            _this.selected = false;
            if (selectedTodos.length > 0) {
                for (var _i = 0, selectedTodos_1 = selectedTodos; _i < selectedTodos_1.length; _i++) {
                    var todo = selectedTodos_1[_i];
                    if (todo.id === _this.todo.id) {
                        _this.selected = true;
                        break;
                    }
                }
            }
        });
        // Subscribe to update on tag change
        this._todoService.onTagsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (tags) {
            _this.tags = tags;
        });
    };
    /**
     * On destroy
     */
    TodoListItemComponent.prototype.ngOnDestroy = function () {
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
    TodoListItemComponent.prototype.onSelectedChange = function () {
        this._todoService.toggleSelectedTodo(this.todo.id);
    };
    /**
     * Toggle star
     */
    TodoListItemComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.todo.toggleStar();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Important
     */
    TodoListItemComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.todo.toggleImportant();
        this._todoService.updateTodo(this.todo);
    };
    /**
     * Toggle Completed
     */
    TodoListItemComponent.prototype.toggleCompleted = function (event) {
        event.stopPropagation();
        this.todo.toggleCompleted();
        this._todoService.updateTodo(this.todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"])
    ], TodoListItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], TodoListItemComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.completed'),
        __metadata("design:type", Boolean)
    ], TodoListItemComponent.prototype, "completed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.move-disabled'),
        __metadata("design:type", Boolean)
    ], TodoListItemComponent.prototype, "moveDisabled", void 0);
    TodoListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list-item',
            template: __webpack_require__(/*! ./todo-list-item.component.html */ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-list-item.component.scss */ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"todos.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-todos-text hint-text\">There are no todos!</span>\n</div>\n<div class=\"todo-list\" ngxDroppable [model]=\"todos\" (out)=\"onDrop($event)\" [@animateStagger]=\"{value:'50'}\">\n    <todo-list-item class=\"todo-list-item has-handle\"\n                    *ngFor=\"let todo of todos\" [todo]=\"todo\"\n                    ngxDraggable\n                    [model]=\"todo\"\n                    (click)=\"readTodo(todo.id)\"\n                    [ngClass]=\"{'current-todo':todo?.id == currentTodo?.id}\"\n                    matRipple\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </todo-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "todo-list {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  position: relative;\n  padding: 0;\n  border-right: 1px solid;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  todo-list .no-todos-text {\n    font-size: 24px;\n    font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo-list/todo-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/todo/todo-list/todo-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
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







var TodoListComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {TodoService} _todoService
     * @param {Location} _location
     */
    function TodoListComponent(_activatedRoute, _todoService, _location) {
        this._activatedRoute = _activatedRoute;
        this._todoService = _todoService;
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
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update todos on changes
        this._todoService.onTodosChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (todos) {
            _this.todos = todos;
        });
        // Subscribe to update current todo on changes
        this._todoService.onCurrentTodoChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (currentTodo) {
            if (!currentTodo) {
                // Set the current todo id to null to deselect the current todo
                _this.currentTodo = null;
                // Handle the location changes
                var tagHandle = _this._activatedRoute.snapshot.params.tagHandle, filterHandle = _this._activatedRoute.snapshot.params.filterHandle;
                if (tagHandle) {
                    _this._location.go('apps/todo/tag/' + tagHandle);
                }
                else if (filterHandle) {
                    _this._location.go('apps/todo/filter/' + filterHandle);
                }
                else {
                    _this._location.go('apps/todo/all');
                }
            }
            else {
                _this.currentTodo = currentTodo;
            }
        });
    };
    /**
     * On destroy
     */
    TodoListComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Read todo
     *
     * @param todoId
     */
    TodoListComponent.prototype.readTodo = function (todoId) {
        // Set current todo
        this._todoService.setCurrentTodo(todoId);
    };
    /**
     * On drop
     *
     * @param ev
     */
    TodoListComponent.prototype.onDrop = function (ev) {
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/main/apps/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/main/apps/todo/todo-list/todo-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/apps/todo/todo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"todo\" class=\"page-layout carded left-sidebar inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- SIDEBAR -->\n    <fuse-sidebar class=\"sidebar\" name=\"todo-main-sidebar\" position=\"left\" lockedOpen=\"gt-md\">\n        <todo-main-sidebar></todo-main-sidebar>\n    </fuse-sidebar>\n    <!-- / SIDEBAR -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\n                        (click)=\"toggleSidebar('todo-main-sidebar')\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div class=\"search\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon>search</mat-icon>\n                    <input [formControl]=\"searchInput\" placeholder=\"Search for a task\" fxFlex>\n                </div>\n            </div>\n\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\" [ngClass]=\"{'current-todo-selected':currentTodo}\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n\n                <div class=\"todo-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-checkbox (click)=\"toggleSelectAll()\" [checked]=\"hasSelectedTodos\"\n                                  [indeterminate]=\"isIndeterminate\"></mat-checkbox>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item (click)=\"selectTodos()\">All</button>\n                        <button mat-menu-item (click)=\"deselectTodos()\">None</button>\n                        <button mat-menu-item (click)=\"selectTodos('read', true)\">Read</button>\n                        <button mat-menu-item (click)=\"selectTodos('read', false)\">Unread</button>\n                        <button mat-menu-item (click)=\"selectTodos('starred', true)\">Starred</button>\n                        <button mat-menu-item (click)=\"selectTodos('starred', false)\">Unstarred</button>\n                        <button mat-menu-item (click)=\"selectTodos('important', true)\">Important</button>\n                        <button mat-menu-item (click)=\"selectTodos('important', false)\">Unimportant</button>\n                    </mat-menu>\n\n                    <div class=\"toolbar-separator\" *ngIf=\"hasSelectedTodos\"></div>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedTodos\">\n                        <mat-icon class=\"secondary-text\">label</mat-icon>\n                    </button>\n                    <mat-menu #labelMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let tag of tags\" (click)=\"toggleTagOnSelectedTodos(tag.id)\">\n                            {{tag.title}}\n                        </button>\n                    </mat-menu>\n                </div>\n\n                <div *ngIf=\"currentTodo\" fxHide.gt-lg>\n                    <button mat-icon-button (click)=\"deselectCurrentTodo()\">\n                        <mat-icon class=\"secondary-text\">arrow_back</mat-icon>\n                    </button>\n                </div>\n\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content\" fxFlexAlign=\"row\">\n                <todo-list fusePerfectScrollbar fxFlex></todo-list>\n                <todo-details fusePerfectScrollbar fxFlex></todo-details>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/apps/todo/todo.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ntodo {\n  width: 100%; }\ntodo .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\ntodo .center .header .search-wrapper .sidebar-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      border-radius: 0;\n      border-right: 1px solid; }\ntodo .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\ntodo .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        border: none;\n        outline: none; }\n@media (max-width: 1919px) {\n    todo .center .content-card todo-list {\n      border-right: 0; }\n    todo .center .content-card todo-list,\n    todo .center .content-card todo-details {\n      flex: 1 0 100%; }\n    todo .center .content-card todo-details {\n      display: none !important; }\n    todo .center .content-card.current-todo-selected .toolbar {\n      padding-left: 16px !important; }\n      todo .center .content-card.current-todo-selected .toolbar .todo-selection {\n        display: none !important; }\n    todo .center .content-card.current-todo-selected .content todo-list {\n      display: none !important; }\n    todo .center .content-card.current-todo-selected .content todo-details {\n      display: flex !important; } }\n"

/***/ }),

/***/ "./src/app/main/apps/todo/todo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/apps/todo/todo.component.ts ***!
  \**************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodoComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TodoService} _todoService
     */
    function TodoComponent(_fuseSidebarService, _todoService) {
        this._fuseSidebarService = _fuseSidebarService;
        this._todoService = _todoService;
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
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._todoService.onSelectedTodosChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (selectedTodos) {
            setTimeout(function () {
                _this.hasSelectedTodos = selectedTodos.length > 0;
                _this.isIndeterminate = (selectedTodos.length !== _this._todoService.todos.length && selectedTodos.length > 0);
            }, 0);
        });
        this._todoService.onFiltersChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (folders) {
            _this.filters = _this._todoService.filters;
        });
        this._todoService.onTagsChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (tags) {
            _this.tags = _this._todoService.tags;
        });
        this.searchInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this._todoService.onSearchTextChanged.next(searchText);
        });
        this._todoService.onCurrentTodoChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (_a) {
            var currentTodo = _a[0], formType = _a[1];
            if (!currentTodo) {
                _this.currentTodo = null;
            }
            else {
                _this.currentTodo = currentTodo;
            }
        });
    };
    /**
     * On destroy
     */
    TodoComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Deselect current todo
     */
    TodoComponent.prototype.deselectCurrentTodo = function () {
        this._todoService.onCurrentTodoChanged.next([null, null]);
    };
    /**
     * Toggle select all
     */
    TodoComponent.prototype.toggleSelectAll = function () {
        this._todoService.toggleSelectAll();
    };
    /**
     * Select todos
     *
     * @param filterParameter
     * @param filterValue
     */
    TodoComponent.prototype.selectTodos = function (filterParameter, filterValue) {
        this._todoService.selectTodos(filterParameter, filterValue);
    };
    /**
     * Deselect todos
     */
    TodoComponent.prototype.deselectTodos = function () {
        this._todoService.deselectTodos();
    };
    /**
     * Toggle tag on selected todos
     *
     * @param tagId
     */
    TodoComponent.prototype.toggleTagOnSelectedTodos = function (tagId) {
        this._todoService.toggleTagOnSelectedTodos(tagId);
    };
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    TodoComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/main/apps/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/main/apps/todo/todo.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarService"],
            app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo.model.ts":
/*!**********************************************!*\
  !*** ./src/app/main/apps/todo/todo.model.ts ***!
  \**********************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param todo
     */
    function Todo(todo) {
        {
            this.id = todo.id;
            this.title = todo.title;
            this.notes = todo.notes;
            this.startDate = todo.startDate;
            this.dueDate = todo.dueDate;
            this.completed = todo.completed;
            this.starred = todo.starred;
            this.important = todo.important;
            this.deleted = todo.deleted;
            this.tags = todo.tags || [];
        }
    }
    /**
     * Toggle star
     */
    Todo.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    /**
     * Toggle important
     */
    Todo.prototype.toggleImportant = function () {
        this.important = !this.important;
    };
    /**
     * Toggle completed
     */
    Todo.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };
    /**
     * Toggle deleted
     */
    Todo.prototype.toggleDeleted = function () {
        this.deleted = !this.deleted;
    };
    return Todo;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/apps/todo/todo.module.ts ***!
  \***********************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/fesm5/swimlane-ngx-dnd.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/todo/todo.service */ "./src/app/main/apps/todo/todo.service.ts");
/* harmony import */ var app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/todo/todo.component */ "./src/app/main/apps/todo/todo.component.ts");
/* harmony import */ var app_main_apps_todo_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/todo/sidebars/main/main-sidebar.component */ "./src/app/main/apps/todo/sidebars/main/main-sidebar.component.ts");
/* harmony import */ var app_main_apps_todo_todo_list_todo_list_item_todo_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component */ "./src/app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var app_main_apps_todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/todo/todo-list/todo-list.component */ "./src/app/main/apps/todo/todo-list/todo-list.component.ts");
/* harmony import */ var app_main_apps_todo_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/todo/todo-details/todo-details.component */ "./src/app/main/apps/todo/todo-details/todo-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'all',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: 'all/:todoId',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: 'tag/:tagHandle',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: 'tag/:tagHandle/:todoId',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: 'filter/:filterHandle',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: 'filter/:filterHandle/:todoId',
        component: app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        resolve: {
            todo: app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }
    },
    {
        path: '**',
        redirectTo: 'all'
    }
];
var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                app_main_apps_todo_sidebars_main_main_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["TodoMainSidebarComponent"],
                app_main_apps_todo_todo_list_todo_list_item_todo_list_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoListItemComponent"],
                app_main_apps_todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__["TodoListComponent"],
                app_main_apps_todo_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_11__["TodoDetailsComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_3__["NgxDnDModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarModule"]
            ],
            providers: [
                app_main_apps_todo_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
            ]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "./src/app/main/apps/todo/todo.service.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/todo/todo.service.ts ***!
  \************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/todo/todo.model */ "./src/app/main/apps/todo/todo.model.ts");
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






var TodoService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param {Location} _location
     */
    function TodoService(_httpClient, _location) {
        this._httpClient = _httpClient;
        this._location = _location;
        // Set the defaults
        this.selectedTodos = [];
        this.searchText = '';
        this.onTodosChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSelectedTodosChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onCurrentTodoChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onFiltersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onTagsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.onNewTodoClicked = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    TodoService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFilters(),
                _this.getTags(),
                _this.getTodos()
            ]).then(function () {
                if (_this.routeParams.todoId) {
                    _this.setCurrentTodo(_this.routeParams.todoId);
                }
                else {
                    _this.setCurrentTodo(null);
                }
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    if (searchText !== '') {
                        _this.searchText = searchText;
                        _this.getTodos();
                    }
                    else {
                        _this.searchText = searchText;
                        _this.getTodos();
                    }
                });
                resolve();
            }, reject);
        });
    };
    /**
     * Get all filters
     *
     * @returns {Promise<any>}
     */
    TodoService.prototype.getFilters = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/todo-filters')
                .subscribe(function (response) {
                _this.filters = response;
                _this.onFiltersChanged.next(_this.filters);
                resolve(_this.filters);
            }, reject);
        });
    };
    /**
     * Get all tags
     *
     * @returns {Promise<any>}
     */
    TodoService.prototype.getTags = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/todo-tags')
                .subscribe(function (response) {
                _this.tags = response;
                _this.onTagsChanged.next(_this.tags);
                resolve(_this.tags);
            }, reject);
        });
    };
    /**
     * Get todos
     *
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodos = function () {
        if (this.routeParams.tagHandle) {
            return this.getTodosByTag(this.routeParams.tagHandle);
        }
        if (this.routeParams.filterHandle) {
            return this.getTodosByFilter(this.routeParams.filterHandle);
        }
        return this.getTodosByParams(this.routeParams);
    };
    /**
     * Get todos by params
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByParams = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/todo-todos')
                .subscribe(function (todos) {
                _this.todos = todos.map(function (todo) {
                    return new app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_5__["Todo"](todo);
                });
                _this.todos = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(_this.todos, _this.searchText);
                _this.onTodosChanged.next(_this.todos);
                resolve(_this.todos);
            });
        });
    };
    /**
     * Get todos by filter
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByFilter = function (handle) {
        var _this = this;
        var param = handle + '=true';
        if (handle === 'dueDate') {
            param = handle + '=^$|\\s+';
        }
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/todo-todos?' + param)
                .subscribe(function (todos) {
                _this.todos = todos.map(function (todo) {
                    return new app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_5__["Todo"](todo);
                });
                _this.todos = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(_this.todos, _this.searchText);
                _this.onTodosChanged.next(_this.todos);
                resolve(_this.todos);
            }, reject);
        });
    };
    /**
     * Get todos by tag
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    TodoService.prototype.getTodosByTag = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/todo-tags?handle=' + handle)
                .subscribe(function (tags) {
                var tagId = tags[0].id;
                _this._httpClient.get('api/todo-todos?tags=' + tagId)
                    .subscribe(function (todos) {
                    _this.todos = todos.map(function (todo) {
                        return new app_main_apps_todo_todo_model__WEBPACK_IMPORTED_MODULE_5__["Todo"](todo);
                    });
                    _this.todos = _fuse_utils__WEBPACK_IMPORTED_MODULE_4__["FuseUtils"].filterArrayByString(_this.todos, _this.searchText);
                    _this.onTodosChanged.next(_this.todos);
                    resolve(_this.todos);
                }, reject);
            });
        });
    };
    /**
     * Toggle selected todo by id
     *
     * @param id
     */
    TodoService.prototype.toggleSelectedTodo = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedTodos.length > 0) {
            for (var _i = 0, _a = this.selectedTodos; _i < _a.length; _i++) {
                var todo = _a[_i];
                // ...delete the selected todo
                if (todo.id === id) {
                    var index = this.selectedTodos.indexOf(todo);
                    if (index !== -1) {
                        this.selectedTodos.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedTodosChanged.next(this.selectedTodos);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedTodos.push(this.todos.find(function (todo) {
            return todo.id === id;
        }));
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    };
    /**
     * Toggle select all
     */
    TodoService.prototype.toggleSelectAll = function () {
        if (this.selectedTodos.length > 0) {
            this.deselectTodos();
        }
        else {
            this.selectTodos();
        }
    };
    /**
     * Select todos
     *
     * @param filterParameter
     * @param filterValue
     */
    TodoService.prototype.selectTodos = function (filterParameter, filterValue) {
        this.selectedTodos = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedTodos = this.todos;
        }
        else {
            (_a = this.selectedTodos).push.apply(_a, this.todos.filter(function (todo) {
                return todo[filterParameter] === filterValue;
            }));
        }
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
        var _a;
    };
    /**
     * Deselect todos
     */
    TodoService.prototype.deselectTodos = function () {
        this.selectedTodos = [];
        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    };
    /**
     * Set current todo by id
     *
     * @param id
     */
    TodoService.prototype.setCurrentTodo = function (id) {
        this.currentTodo = this.todos.find(function (todo) {
            return todo.id === id;
        });
        this.onCurrentTodoChanged.next([this.currentTodo, 'edit']);
        var tagHandle = this.routeParams.tagHandle, filterHandle = this.routeParams.filterHandle;
        if (tagHandle) {
            this._location.go('apps/todo/tag/' + tagHandle + '/' + id);
        }
        else if (filterHandle) {
            this._location.go('apps/todo/filter/' + filterHandle + '/' + id);
        }
        else {
            this._location.go('apps/todo/all/' + id);
        }
    };
    /**
     * Toggle tag on selected todos
     *
     * @param tagId
     */
    TodoService.prototype.toggleTagOnSelectedTodos = function (tagId) {
        var _this = this;
        this.selectedTodos.map(function (todo) {
            _this.toggleTagOnTodo(tagId, todo);
        });
    };
    /**
     * Toggle tag on todo
     *
     * @param tagId
     * @param todo
     */
    TodoService.prototype.toggleTagOnTodo = function (tagId, todo) {
        var index = todo.tags.indexOf(tagId);
        if (index !== -1) {
            todo.tags.splice(index, 1);
        }
        else {
            todo.tags.push(tagId);
        }
        this.updateTodo(todo);
    };
    /**
     * Has tag?
     *
     * @param tagId
     * @param todo
     * @returns {boolean}
     */
    TodoService.prototype.hasTag = function (tagId, todo) {
        if (!todo.tags) {
            return false;
        }
        return todo.tags.indexOf(tagId) !== -1;
    };
    /**
     * Update the todo
     *
     * @param todo
     * @returns {Promise<any>}
     */
    TodoService.prototype.updateTodo = function (todo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/todo-todos/' + todo.id, __assign({}, todo))
                .subscribe(function (response) {
                _this.getTodos().then(function (todos) {
                    resolve(todos);
                }, reject);
            });
        });
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], TodoService);
    return TodoService;
}());



/***/ })

}]);
//# sourceMappingURL=todo-todo-module.js.map