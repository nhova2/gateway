(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/front/theme/utils/app-validators.ts":
/*!*****************************************************!*\
  !*** ./src/app/front/theme/utils/app-validators.ts ***!
  \*****************************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order.model.ts ***!
  \***********************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var Order = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param order
     */
    function Order(order) {
        order = order || {};
        this.id = order.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.reference = order.reference || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.subtotal = order.subtotal || 0;
        this.tax = order.tax || 0;
        this.discount = order.discount || 0;
        this.total = order.total || 0;
        this.date = order.date || '';
        this.customer = order.customer || {};
        this.products = order.products || [];
        this.status = order.status || [];
        this.payment = order.payment || {};
        this.shippingDetails = order.shippingDetails || [];
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/product/product.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/product/product.model.ts ***!
  \***************************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var Product = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param product
     */
    function Product(product) {
        product = product || {};
        this.id = product.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
        this.name = product.name || '';
        this.handle = product.handle || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].handleize(this.name);
        this.description = product.description || '';
        this.categories = product.categories || [];
        this.tags = product.tags || [];
        this.images = product.images || [];
        this.priceTaxExcl = product.priceTaxExcl || 0;
        this.priceTaxIncl = product.priceTaxIncl || 0;
        this.taxRate = product.taxRate || 0;
        this.comparedPrice = product.comparedPrice || 0;
        this.quantity = product.quantity || 0;
        this.sku = product.sku || 0;
        this.width = product.width || 0;
        this.height = product.height || 0;
        this.depth = product.depth || 0;
        this.weight = product.weight || 0;
        this.extraShippingFee = product.extraShippingFee || 0;
        this.active = product.active || true;
    }
    /**
     * Add category
     *
     * @param {MatChipInputEvent} event
     */
    Product.prototype.addCategory = function (event) {
        var input = event.input;
        var value = event.value;
        // Add category
        if (value) {
            this.categories.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /**
     * Remove category
     *
     * @param category
     */
    Product.prototype.removeCategory = function (category) {
        var index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    };
    /**
     * Add tag
     *
     * @param {MatChipInputEvent} event
     */
    Product.prototype.addTag = function (event) {
        var input = event.input;
        var value = event.value;
        // Add tag
        if (value) {
            this.tags.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /**
     * Remove tag
     *
     * @param tag
     */
    Product.prototype.removeTag = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    return Product;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map