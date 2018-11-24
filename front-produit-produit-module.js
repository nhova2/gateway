(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-produit-produit-module"],{

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/front/produit/details-produit/details-produit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/details-produit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n  <app-breadcrumb></app-breadcrumb>\r\n  <div class=\"page-layout carded left-sidebar\">\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n    \r\n      <!-- SIDEBAR CONTENT -->\r\n      <div class=\"content p-24\">\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt.md=\"m-0\">\r\n          <h2>Commentaires</h2>\r\n          <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\r\n              <div class=\"content\">\r\n                <p>user 1</p>\r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\r\n              <div class=\"content\">\r\n                <p>user 1</p>\r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\r\n              <div class=\"content\">\r\n                <p>user 1</p>\r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <mat-icon class=\"mat-icon-xlg text-muted m-0\">face</mat-icon>\r\n              <div class=\"content\">\r\n                <p>user 1</p>\r\n                <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <textarea matInput placeholder=\"Laisser un commentaire\"></textarea>\r\n                </mat-form-field>\r\n              </form>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- / SIDEBAR CONTENT -->\r\n    \r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n      <!-- CENTER -->\r\n      <div class=\"center\">\r\n      \r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n      \r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n        \r\n              <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\r\n                <mat-icon>menu</mat-icon>\r\n              </button>\r\n        \r\n              <span>\r\n                <h1 style=\"font-weight: bold\">Domaine</h1>\r\n              </span>\r\n        \r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n            <div content class=\"content p-24\">\r\n      \r\n              <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n\r\n                  <mat-card class=\"product-image\">\r\n                    <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md>\r\n                      <mat-icon>fullscreen</mat-icon>\r\n                    </button>\r\n                    <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" />\r\n                  </mat-card>\r\n\r\n                  <div class=\"small-carousel\">\r\n                    <div class=\"swiper-container\" [swiper]=\"config\">\r\n                      <div class=\"swiper-wrapper\">\r\n                        <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n                          <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n                            <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\" />\r\n                            <div class=\"swiper-lazy-preloader\"></div>\r\n                          </mat-card>\r\n                        </div>\r\n                      </div>\r\n                      <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n                        <mat-icon>keyboard_arrow_left</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n                  <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n                    <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n                  </div>\r\n\r\n                  <h2>{{product?.name}}</h2>\r\n                  <div class=\"py-1 lh\">\r\n                    <p>\r\n                      <span class=\"text-muted fw-500\">Categorie: </span>\r\n                      <span>{{ ( appService.Data.categories | filterById : product?.categoryId )?.name }}</span>\r\n                    </p>\r\n                    <p>\r\n                      <span class=\"text-muted fw-500\">Disponibilité: </span>\r\n                      <span>{{ (product?.availibilityCount > 0) ? 'En stock':'Unavailable'}}</span>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"py-1\">\r\n                    <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n                  </div>\r\n                  <p class=\"py-1 text-muted lh\">{{product?.description}}</p>\r\n\r\n                  <div class=\"divider mt-1\"></div>\r\n                  <h2 class=\"py-2 new-price\">{{product?.newPrice}} CFA</h2>\r\n\r\n                  <div class=\"py-1\">\r\n                    <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n                  </div>\r\n\r\n                  <div class=\"divider\"></div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-2\">\r\n                <h2>&nbsp; Articles similaires</h2>\r\n                <div class=\"divider\"></div>\r\n                <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <!-- / CONTENT CARD -->\r\n      <!-- / CENTER -->\r\n      <!-- SIDEBAR -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/front/produit/details-produit/details-produit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/details-produit.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 1, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n.mat-card.product-image img {\n    max-width: 100%; }\n.small-carousel {\n  margin-top: 8px; }\n.small-carousel .swiper-container {\n    padding: 2px; }\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n.small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n.small-carousel .swiper-button-next {\n    right: -10px; }\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n.mt-16 {\n  margin-top: 16px; }\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n.full-desc {\n  padding: 30px 40px; }\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url(\"data:image/svg+xml,%3Csvg fill%3D%22%23000000%22 height%3D%2236%22 viewBox%3D%220 0 24 24%22 width%3D%2236%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E    %3Cpath d%3D%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E    %3Cpath d%3D%22M0 0h24v24H0V0z%22 fill%3D%22none%22%2F%3E    %3Cpath d%3D%22M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z%22%2F%3E%3C%2Fsvg%3E\") 10 10, zoom-in; } }\n.filter-sidenav {\n  box-shadow: 0px 7px 5px #555; }\n"

/***/ }),

/***/ "./src/app/front/produit/details-produit/details-produit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/details-produit.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailsProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProduitComponent", function() { return DetailsProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _front_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../front/app.service */ "./src/app/front/app.service.ts");
/* harmony import */ var _front_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../front/theme/utils/app-validators */ "./src/app/front/theme/utils/app-validators.ts");
/* harmony import */ var _produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./produit-zoom/produit-zoom.component */ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailsProduitComponent = /** @class */ (function () {
    function DetailsProduitComponent(appService, activatedRoute, dialog, formBuilder) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.sidenavOpen = true;
        this.viewCol = 25;
        this.config = {};
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
    }
    DetailsProduitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.getProductById(params['id']);
        });
        this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _front_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])]
        });
        this.getRelatedProducts();
    };
    DetailsProduitComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    };
    DetailsProduitComponent.prototype.getProductById = function (id) {
        var _this = this;
        this.appService.getProductById(id).subscribe(function (data) {
            _this.product = data;
            _this.image = data.images[0].medium;
            _this.zoomImage = data.images[0].big;
            setTimeout(function () {
                _this.config.observer = true;
                // this.directiveRef.setIndex(0);
            });
        });
    };
    DetailsProduitComponent.prototype.getRelatedProducts = function () {
        var _this = this;
        this.appService.getProducts('related').subscribe(function (data) {
            _this.relatedProducts = data;
        });
    };
    DetailsProduitComponent.prototype.selectImage = function (image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    };
    DetailsProduitComponent.prototype.onMouseMove = function (e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    };
    DetailsProduitComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    };
    DetailsProduitComponent.prototype.openZoomViewer = function () {
        this.dialog.open(_produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProduitZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    };
    DetailsProduitComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailsProduitComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            //email sent
        }
    };
    DetailsProduitComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    DetailsProduitComponent.prototype.toggleSidebar = function (name) {
        // TODO this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], DetailsProduitComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
    ], DetailsProduitComponent.prototype, "directiveRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], DetailsProduitComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DetailsProduitComponent.prototype, "onWindowResize", null);
    DetailsProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-produit',
            template: __webpack_require__(/*! ./details-produit.component.html */ "./src/app/front/produit/details-produit/details-produit.component.html"),
            styles: [__webpack_require__(/*! ./details-produit.component.scss */ "./src/app/front/produit/details-produit/details-produit.component.scss")]
        }),
        __metadata("design:paramtypes", [_front_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DetailsProduitComponent);
    return DetailsProduitComponent;
}());



/***/ }),

/***/ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .zoom-dialog .mat-dialog-container .controls {\n    position: relative; }\n  .zoom-dialog .mat-dialog-container .controls button {\n      position: absolute;\n      top: -44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-in {\n      right: 44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-out {\n      right: 0; }\n  .zoom-dialog .mat-dialog-container .controls .close {\n      right: -44px; }\n  .zoom-dialog .mat-dialog-container .viewer {\n    width: 100%;\n    text-align: center; }\n  .zoom-dialog .mat-dialog-container .viewer img {\n      max-width: 60%; }\n"

/***/ }),

/***/ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProduitZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitZoomComponent", function() { return ProduitZoomComponent; });
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


var ProduitZoomComponent = /** @class */ (function () {
    function ProduitZoomComponent(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ProduitZoomComponent.prototype.ngOnInit = function () { };
    ProduitZoomComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProduitZoomComponent.prototype.zoomIn = function () {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    };
    ProduitZoomComponent.prototype.zoomOut = function () {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage'),
        __metadata("design:type", Object)
    ], ProduitZoomComponent.prototype, "zoomImage", void 0);
    ProduitZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit-zoom',
            template: __webpack_require__(/*! ./produit-zoom.component.html */ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.html"),
            styles: [__webpack_require__(/*! ./produit-zoom.component.scss */ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProduitZoomComponent);
    return ProduitZoomComponent;
}());



/***/ }),

/***/ "./src/app/front/produit/produit.component.html":
/*!******************************************************!*\
  !*** ./src/app/front/produit/produit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n  <app-breadcrumb></app-breadcrumb> \r\n  <div class=\"page-layout carded left-sidebar\">\r\n\r\n  <!-- TOP BACKGROUND -->\r\n  <!-- / TOP BACKGROUND -->\r\n\r\n  <!-- SIDEBAR -->\r\n  <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n    <!-- SIDEBAR CONTENT -->\r\n    <div class=\"content p-24\">\r\n      <fuse-demo-sidebar></fuse-demo-sidebar>\r\n    </div>\r\n    <!-- / SIDEBAR CONTENT -->\r\n\r\n  </fuse-sidebar>\r\n  <!-- / SIDEBAR -->\r\n\r\n\r\n  <!-- CENTER -->\r\n  <div class=\"center\">\r\n\r\n    <!-- CONTENT CARD -->\r\n    <div class=\"content-card\">\r\n\r\n      <!-- CONTENT TOOLBAR -->\r\n      <div class=\"toolbar px-24 py-8\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md (click)=\"toggleSidebar('carded-left-sidebar-1')\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <span>\r\n          <h1 style=\"font-weight: bold\">Domaine</h1>\r\n        </span>\r\n\r\n      </div>\r\n      <!-- / CONTENT TOOLBAR -->\r\n      <div content class=\"content p-24\">\r\n  \r\n      \r\n      <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n       <!-- <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>-->\r\n        <div fxLayout=\"row\" >\r\n         \r\n             <!-- <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  <h4>Produits & services</h4>\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>-->\r\n              <div class=\"products-tabs\">\r\n                <mat-tab-group mat-stretch-tabs>\r\n                  <mat-tab label=\"Meilleur vente\">\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                      <div>\r\n                          <mat-card class=\"product-item text-center\">\r\n                            <mat-chip-list>\r\n                              <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['detailsProduit', 1]\" class=\"image-link\">\r\n                              <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                            </a>\r\n                            <h4 class=\"category text-muted\">Agriculture</h4>\r\n                            <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                              Cirot\r\n                            </a>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                              <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\" text-muted\">\r\n                                  <span>12500 CFA</span>\r\n                                </p>\r\n                              </div>\r\n                              <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                                <div class=\"ratings\">\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                </div>\r\n                                <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"divider mt-2\"></div>\r\n                            <div class=\"icons\">\r\n                              <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                                <div>\r\n                                  <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                    <mat-icon>shopping_cart</mat-icon>\r\n                                  </button>\r\n                                  <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                    <mat-icon>remove_red_eye</mat-icon>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </mat-card>\r\n                      </div>\r\n                      <div>\r\n                          <mat-card class=\"product-item text-center\">\r\n                            <mat-chip-list>\r\n                              <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                            </mat-chip-list>\r\n                            <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                              <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                            </a>\r\n                            <h4 class=\"category text-muted\">Agriculture</h4>\r\n                            <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                              Cirot\r\n                            </a>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                              <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\" text-muted\">\r\n                                  <span>12500 CFA</span>\r\n                                </p>\r\n                              </div>\r\n                              <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                                <div class=\"ratings\">\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                  <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                </div>\r\n                                <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"divider mt-2\"></div>\r\n                            <div class=\"icons\">\r\n                              <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                                <div>\r\n                                  <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                    <mat-icon>shopping_cart</mat-icon>\r\n                                  </button>\r\n                                  <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                    <mat-icon>remove_red_eye</mat-icon>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </mat-card>\r\n                      </div>\r\n                      \r\n                    </div> \r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                    \r\n                    </div>\r\n                    \r\n                  </mat-tab>\r\n                  <mat-tab label=\"Nouveauté\">\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                    \r\n                    </div>\r\n                  </mat-tab>\r\n                  <mat-tab label=\"Mieux noté\">\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                      <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                      </div>\r\n                    \r\n                    </div>\r\n                  </mat-tab>\r\n                </mat-tab-group> \r\n              </div>\r\n          \r\n        </div>\r\n        \r\n        <br>\r\n      </div>\r\n\r\n      </div>\r\n      \r\n      </div>\r\n      </div>\r\n      <!-- / CONTENT CARD -->\r\n      <!-- / CENTER -->\r\n      <!-- SIDEBAR -->\r\n      <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"end\" lockedOpen=\"gt-md\">\r\n      \r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n          <chbot-sidebar></chbot-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n      \r\n      </fuse-sidebar>\r\n      <!-- / SIDEBAR -->\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/front/produit/produit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/front/produit/produit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.products-tabs {\n  margin-top: 30px; }\n\n.ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/front/produit/produit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/front/produit/produit.component.ts ***!
  \****************************************************/
/*! exports provided: ProduitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsComponent", function() { return ProduitsComponent; });
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


var ProduitsComponent = /** @class */ (function () {
    /**
       * Constructor
       *
       *
       * @param {FuseSidebarService} _fuseSidebarService
       *
       */
    function ProduitsComponent(_fuseSidebarService) {
        this._fuseSidebarService = _fuseSidebarService;
        this.sidenavOpen = true;
        this.brands = [];
        this.viewCol = 25;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
    }
    ProduitsComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    ProduitsComponent.prototype.toggleSidebar = function (name) {
        // TODO 
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ProduitsComponent.prototype, "sidenav", void 0);
    ProduitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit',
            template: __webpack_require__(/*! ./produit.component.html */ "./src/app/front/produit/produit.component.html"),
            styles: [__webpack_require__(/*! ./produit.component.scss */ "./src/app/front/produit/produit.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["FuseSidebarService"]])
    ], ProduitsComponent);
    return ProduitsComponent;
}());



/***/ }),

/***/ "./src/app/front/produit/produit.module.ts":
/*!*************************************************!*\
  !*** ./src/app/front/produit/produit.module.ts ***!
  \*************************************************/
/*! exports provided: routes, ProduitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitModule", function() { return ProduitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _produit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produit.component */ "./src/app/front/produit/produit.component.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/front/produit/produit/produit.component.ts");
/* harmony import */ var _details_produit_details_produit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-produit/details-produit.component */ "./src/app/front/produit/details-produit/details-produit.component.ts");
/* harmony import */ var _details_produit_produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-produit/produit-zoom/produit-zoom.component */ "./src/app/front/produit/details-produit/produit-zoom/produit-zoom.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _front_theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../front/theme/pipes/pipes.module */ "./src/app/front/theme/pipes/pipes.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/components/demo/demo.module */ "./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _produit_component__WEBPACK_IMPORTED_MODULE_3__["ProduitsComponent"], pathMatch: 'full' },
    { path: ':name', component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_4__["ProduitComponent"] },
    { path: 'detailsProduit/:id', component: _details_produit_details_produit_component__WEBPACK_IMPORTED_MODULE_5__["DetailsProduitComponent"] }
];
var ProduitModule = /** @class */ (function () {
    function ProduitModule() {
    }
    ProduitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _front_theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseSidebarModule"],
                _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_13__["FuseDemoModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"]
            ],
            declarations: [
                _produit_component__WEBPACK_IMPORTED_MODULE_3__["ProduitsComponent"],
                _produit_produit_component__WEBPACK_IMPORTED_MODULE_4__["ProduitComponent"],
                _details_produit_details_produit_component__WEBPACK_IMPORTED_MODULE_5__["DetailsProduitComponent"],
                _details_produit_produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ProduitZoomComponent"]
            ],
            entryComponents: [
                _details_produit_produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_6__["ProduitZoomComponent"]
            ]
        })
    ], ProduitModule);
    return ProduitModule;
}());



/***/ }),

/***/ "./src/app/front/produit/produit/produit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/front/produit/produit/produit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n    <div fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n      <div fxLayout=\"column\">\r\n          \r\n            <div class=\"products-tabs\">\r\n              <mat-tab-group mat-stretch-tabs>\r\n                <mat-tab label=\"Meilleur vente\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                    </div>\r\n                    <div>\r\n                        <mat-card class=\"product-item text-center\">\r\n                          <mat-chip-list>\r\n                            <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                          </mat-chip-list>\r\n                          <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                            <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                          </a>\r\n                          <h4 class=\"category text-muted\">Agriculture</h4>\r\n                          <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                            Cirot\r\n                          </a>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                              <p class=\" text-muted\">\r\n                                <span>12500 CFA</span>\r\n                              </p>\r\n                            </div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                              <div class=\"ratings\">\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              </div>\r\n                              <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"divider mt-2\"></div>\r\n                          <div class=\"icons\">\r\n                            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                              <div>\r\n                                <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                  <mat-icon>shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                  <mat-icon>remove_red_eye</mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </mat-card>\r\n                    </div>\r\n                    \r\n                  </div> \r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                  </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Nouveauté\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                  \r\n                  </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Mieux noté\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                  \r\n                  </div>\r\n                </mat-tab>\r\n              </mat-tab-group> \r\n            </div>            \r\n            <div class=\"products-tabs\">\r\n              <mat-tab-group mat-stretch-tabs>\r\n                <mat-tab label=\"Meilleur vente\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n            \r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n            \r\n                  </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Nouveauté\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/Produit/cirot.jpg\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Agriculture</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12500 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n            \r\n                  </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Mieux noté\">\r\n                  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/products/printer/1-medium.png\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Tech</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          PC\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>120000 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">4 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div>\r\n                      <mat-card class=\"product-item text-center\">\r\n                        <mat-chip-list>\r\n                          <mat-chip color=\"warn\" selected=\"true\">0% OFF</mat-chip>\r\n                        </mat-chip-list>\r\n                        <a [routerLink]=\"['#']\" class=\"image-link\">\r\n                          <img src=\"assets/images/products/pc/1-medium.png\" alt=\"\">\r\n                        </a>\r\n                        <h4 class=\"category text-muted\">Tech</h4>\r\n                        <a [routerLink]=\"['#']\" class=\"title text-truncate\">\r\n                          Cirot\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\" text-muted\">\r\n                              <span>12000 CFA</span>\r\n                            </p>\r\n                          </div>\r\n                          <div fxLayout=\"row\" fxLayoutAlign='center end'>\r\n                            <div class=\"ratings\">\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs\">star</mat-icon>\r\n                            </div>\r\n                            <p class=\"ratings-count text-muted\">5 ratings</p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"align\" class=\"text-muted\">\r\n                            <div>\r\n                              <button mat-icon-button matTooltip=\"Ajouter au panier\">\r\n                                <mat-icon>shopping_cart</mat-icon>\r\n                              </button>\r\n                              <button mat-icon-button matTooltip=\"Detail produit\">\r\n                                <mat-icon>remove_red_eye</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n            \r\n                  </div>\r\n                </mat-tab>\r\n              </mat-tab-group>\r\n            </div>\r\n      </div>\r\n      <br>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/front/produit/produit/produit.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/front/produit/produit/produit.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-domaine-a {\n  width: 10em !important;\n  background-color: #ed7d31 !important; }\n\n.panel-domaine-b {\n  width: 10em !important;\n  background-color: #70ad47 !important; }\n\n.panel-domaine-c {\n  width: 10em !important;\n  background-color: #5b9bd5 !important; }\n\n.filter-sidenav {\n  width: 280px;\n  padding: 2px; }\n\n.filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n\n.filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n\n.products-tabs {\n  margin-top: 30px; }\n\n.ratings {\n  color: #fbc02d; }\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/front/produit/produit/produit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/front/produit/produit/produit.component.ts ***!
  \************************************************************/
/*! exports provided: ProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitComponent", function() { return ProduitComponent; });
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

var ProduitComponent = /** @class */ (function () {
    function ProduitComponent() {
        this.sidenavOpen = true;
        this.brands = [];
        this.viewCol = 25;
        this.slides = [
            { title: 'The biggest sale', subtitle: '...   ...', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' },
            { title: 'The biggest sale', subtitle: 'Special for today', image: 'assets/images/carousel/FineTech_PS_Elmt_Main_Advertisement_FalseContent.png' }
        ];
    }
    ProduitComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
        ;
    };
    ProduitComponent.prototype.onWindowResize = function () {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
        (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ProduitComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProduitComponent.prototype, "onWindowResize", null);
    ProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit',
            template: __webpack_require__(/*! ./produit.component.html */ "./src/app/front/produit/produit/produit.component.html"),
            styles: [__webpack_require__(/*! ./produit.component.scss */ "./src/app/front/produit/produit/produit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProduitComponent);
    return ProduitComponent;
}());



/***/ })

}]);
//# sourceMappingURL=front-produit-produit-module.js.map