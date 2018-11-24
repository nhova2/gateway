(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-commerce-e-commerce-module"],{

/***/ "./src/app/main/apps/e-commerce/e-commerce.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/apps/e-commerce/e-commerce.module.ts ***!
  \***********************************************************/
/*! exports provided: EcommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var app_main_apps_e_commerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/e-commerce/products/products.component */ "./src/app/main/apps/e-commerce/products/products.component.ts");
/* harmony import */ var app_main_apps_e_commerce_products_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/e-commerce/products/products.service */ "./src/app/main/apps/e-commerce/products/products.service.ts");
/* harmony import */ var app_main_apps_e_commerce_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/e-commerce/product/product.component */ "./src/app/main/apps/e-commerce/product/product.component.ts");
/* harmony import */ var app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/e-commerce/product/product.service */ "./src/app/main/apps/e-commerce/product/product.service.ts");
/* harmony import */ var app_main_apps_e_commerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/e-commerce/orders/orders.component */ "./src/app/main/apps/e-commerce/orders/orders.component.ts");
/* harmony import */ var app_main_apps_e_commerce_orders_orders_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/e-commerce/orders/orders.service */ "./src/app/main/apps/e-commerce/orders/orders.service.ts");
/* harmony import */ var app_main_apps_e_commerce_order_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order.component */ "./src/app/main/apps/e-commerce/order/order.component.ts");
/* harmony import */ var app_main_apps_e_commerce_order_order_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order.service */ "./src/app/main/apps/e-commerce/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'products',
        component: app_main_apps_e_commerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
        resolve: {
            data: app_main_apps_e_commerce_products_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"]
        }
    },
    {
        path: 'products/:id',
        component: app_main_apps_e_commerce_product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
        resolve: {
            data: app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"]
        }
    },
    {
        path: 'products/:id/:handle',
        component: app_main_apps_e_commerce_product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
        resolve: {
            data: app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"]
        }
    },
    {
        path: 'orders',
        component: app_main_apps_e_commerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceOrdersComponent"],
        resolve: {
            data: app_main_apps_e_commerce_orders_orders_service__WEBPACK_IMPORTED_MODULE_12__["EcommerceOrdersService"]
        }
    },
    {
        path: 'orders/:id',
        component: app_main_apps_e_commerce_order_order_component__WEBPACK_IMPORTED_MODULE_13__["EcommerceOrderComponent"],
        resolve: {
            data: app_main_apps_e_commerce_order_order_service__WEBPACK_IMPORTED_MODULE_14__["EcommerceOrderService"]
        }
    }
];
var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_e_commerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
                app_main_apps_e_commerce_product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
                app_main_apps_e_commerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceOrdersComponent"],
                app_main_apps_e_commerce_order_order_component__WEBPACK_IMPORTED_MODULE_13__["EcommerceOrderComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__["FuseWidgetModule"]
            ],
            providers: [
                app_main_apps_e_commerce_products_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"],
                app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"],
                app_main_apps_e_commerce_orders_orders_service__WEBPACK_IMPORTED_MODULE_12__["EcommerceOrdersService"],
                app_main_apps_e_commerce_order_order_service__WEBPACK_IMPORTED_MODULE_14__["EcommerceOrderService"]
            ]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order-statuses.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order-statuses.ts ***!
  \**************************************************************/
/*! exports provided: orderStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStatuses", function() { return orderStatuses; });
var orderStatuses = [
    {
        'id': 1,
        'name': 'Awaiting check payment',
        'color': 'blue-500'
    },
    {
        'id': 2,
        'name': 'Payment accepted',
        'color': 'green-500'
    },
    {
        'id': 3,
        'name': 'Preparing the order',
        'color': 'orange-500'
    },
    {
        'id': 4,
        'name': 'Shipped',
        'color': 'purple-500'
    },
    {
        'id': 5,
        'name': 'Delivered',
        'color': 'green-800'
    },
    {
        'id': 6,
        'name': 'Canceled',
        'color': 'pink-500'
    },
    {
        'id': 7,
        'name': 'Refunded',
        'color': 'red-500'
    },
    {
        'id': 8,
        'name': 'Payment error',
        'color': 'red-900'
    },
    {
        'id': 9,
        'name': 'On pre-order (paid)',
        'color': 'purple-300'
    },
    {
        'id': 10,
        'name': 'Awaiting bank wire payment',
        'color': 'blue-500'
    },
    {
        'id': 11,
        'name': 'Awaiting PayPal payment',
        'color': 'blue-500'
    },
    {
        'id': 12,
        'name': 'Remote payment accepted',
        'color': 'green-500'
    },
    {
        'id': 13,
        'name': 'On pre-order (not paid)',
        'color': 'purple-300'
    },
    {
        'id': 14,
        'name': 'Awaiting Cash-on-delivery payment',
        'color': 'blue-500'
    }
];


/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\"\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"mr-16\" [routerLink]=\"'/apps/e-commerce/orders'\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                     [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    <div class=\"h2\">\n                        Order {{order.reference}}\n                    </div>\n                    <div class=\"subtitle secondary-text\">\n                        <span>from</span>\n                        <span>{{order.customer.firstName}} {{order.customer.lastName}}</span>\n                    </div>\n                </div>\n            </div>\n            <!-- / APP TITLE -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group fxLayout=\"column\" fxFlex>\n\n                    <mat-tab label=\"Order Details\">\n\n                        <div class=\"order-details tab-content p-24\" fusePerfectScrollbar>\n\n                            <div class=\"section pb-48\">\n\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">account_circle</mat-icon>\n                                    <div class=\"h2 secondary-text\">Customer</div>\n                                </div>\n\n                                <div class=\"customer\">\n                                    <table class=\"simple\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                                <th>Phone</th>\n                                                <th>Company</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                        <img class=\"avatar\" [src]=\"order.customer.avatar\">\n                                                        <span class=\"name text-truncate\">{{order.customer.firstName}}\n                                                            {{order.customer.lastName}}\n                                                        </span>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <span class=\"email text-truncate\">{{order.customer.email}}</span>\n                                                </td>\n                                                <td>\n                                                    <span class=\"phone text-truncate\">{{order.customer.phone}}</span>\n                                                </td>\n                                                <td>\n                                                    <span class=\"company text-truncate\">{{order.customer.company}}\n                                                    </span>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n\n                                <mat-tab-group class=\"addresses\">\n\n                                    <mat-tab label=\"Shipping Address\">\n                                        <div fxFlex fxLayout=\"column\">\n                                            <div class=\"address h4 py-24\">{{order.customer.shippingAddress.address}}\n                                            </div>\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\n                                                     [latitude]=\"order.customer.shippingAddress.lat\"\n                                                     [longitude]=\"order.customer.shippingAddress.lng\">\n                                                <agm-marker [latitude]=\"order.customer.shippingAddress.lat\"\n                                                            [longitude]=\"order.customer.shippingAddress.lng\">\n                                                </agm-marker>\n                                            </agm-map>\n                                        </div>\n                                    </mat-tab>\n\n                                    <mat-tab label=\"Invoice Address\" fxLayout=\"column\">\n                                        <div fxFlex fxLayout=\"column\">\n                                            <div class=\"address h4 py-24\">{{order.customer.invoiceAddress.address}}\n                                            </div>\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\n                                                     [latitude]=\"order.customer.invoiceAddress.lat\"\n                                                     [longitude]=\"order.customer.invoiceAddress.lng\">\n                                                <agm-marker [latitude]=\"order.customer.invoiceAddress.lat\"\n                                                            [longitude]=\"order.customer.invoiceAddress.lng\">\n                                                </agm-marker>\n                                            </agm-map>\n                                        </div>\n                                    </mat-tab>\n                                </mat-tab-group>\n                            </div>\n\n                            <div class=\"section pb-48\">\n\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">access_time</mat-icon>\n                                    <div class=\"h2 secondary-text\">Order Status</div>\n                                </div>\n\n                                <table class=\"simple\">\n                                    <thead>\n                                        <tr>\n                                            <th>Status</th>\n                                            <th>Updated On</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n\n                                        <tr *ngFor=\"let status of order.status\">\n                                            <td>\n                                                <span class=\"status h6 p-4\" [ngClass]=\"status.color\">\n                                                    {{status.name}}\n                                                </span>\n                                            </td>\n                                            <td>\n                                                <span>\n                                                    {{status.date | date}}\n                                                </span>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                                <form class=\"update-status p-24\"\n                                      (ngSubmit)=\"updateStatus()\"\n                                      [formGroup]=\"statusForm\"\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                                    <mat-form-field class=\"mr-16\" fxFlex>\n                                        <mat-select formControlName=\"newStatus\"\n                                                    placeholder=\"Select a status\" required>\n                                            <mat-option *ngFor=\"let status of orderStatuses\"\n                                                        [value]=\"status.id\">\n                                                {{status.name}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n\n                                    <button mat-raised-button class=\"mat-accent\"\n                                            [disabled]=\"statusForm.invalid\">\n                                        Update Status\n                                    </button>\n                                </form>\n\n                            </div>\n\n                            <div class=\"section pb-48\">\n\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">attach_money</mat-icon>\n                                    <div class=\"h2 secondary-text\">Payment</div>\n                                </div>\n\n                                <table class=\"simple\">\n                                    <thead>\n                                        <tr>\n                                            <th>TransactionID</th>\n                                            <th>Payment Method</th>\n                                            <th>Amount</th>\n                                            <th>Date</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <span class=\"text-truncate\">\n                                                    {{order.payment.transactionId}}\n                                                </span>\n                                            </td>\n                                            <td>\n                                                <span class=\"text-truncate\">\n                                                    {{order.payment.method}}\n                                                </span>\n                                            </td>\n                                            <td>\n                                                <span class=\"text-truncate\">\n                                                    {{order.payment.amount}}\n                                                </span>\n                                            </td>\n                                            <td>\n                                                <span class=\"text-truncate\">\n                                                    {{order.payment.date | date}}\n                                                </span>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n\n                            <div class=\"section pb-48\">\n\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">local_shipping</mat-icon>\n                                    <div class=\"h2 secondary-text\">Shipping</div>\n                                </div>\n\n                                <table class=\"simple\">\n                                    <thead>\n                                        <tr>\n                                            <th>Tracking Code</th>\n                                            <th>Carrier</th>\n                                            <th>Weight</th>\n                                            <th>Fee</th>\n                                            <th>Date</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let shipping of order.shippingDetails\">\n                                            <td class=\"tracking-code\">\n                                                {{shipping.tracking}}\n                                            </td>\n                                            <td>\n                                                {{shipping.carrier}}\n                                            </td>\n                                            <td>\n                                                {{shipping.weight}}\n                                            </td>\n                                            <td>\n                                                {{shipping.fee}}\n                                            </td>\n                                            <td>\n                                                {{shipping.date}}\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Products\">\n                        <div class=\"products tab-content p-24\" fusePerfectScrollbar>\n                            <table class=\"simple\">\n                                <thead>\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>Image</th>\n                                        <th>Name</th>\n                                        <th>Price</th>\n                                        <th>Quantity</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr class=\"product-row\"\n                                        *ngFor=\"let product of order.products\"\n                                        [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\n                                        <td class=\"w-64\">\n                                            {{product.id}}\n                                        </td>\n                                        <td class=\"w-80\">\n                                            <img class=\"product-image\" [src]=\"product.image\">\n                                        </td>\n                                        <td>\n                                            {{product.name}}\n                                        </td>\n                                        <td>\n                                            {{product.price}}\n                                        </td>\n                                        <td>\n                                            {{product.quantity}}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Invoice\">\n\n                        <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\n\n                            <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n                                <div class=\"invoice-container\">\n\n                                    <!-- INVOICE -->\n                                    <div class=\"card\">\n\n                                        <div class=\"header\">\n                                            <div class=\"invoice-date\">{{order.date}}</div>\n\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                                                <div class=\"client\">\n                                                    <div class=\"invoice-number\" fxLayout=\"row\"\n                                                         fxLayoutAlign=\"start center\">\n                                                        <span class=\"title\">INVOICE</span>\n                                                        <span class=\"number\">{{order.reference}}</span>\n                                                    </div>\n\n                                                    <div class=\"info\">\n                                                        <div class=\"title\">\n                                                            {{order.customer.firstName}}\n                                                            {{order.customer.lastName}}\n                                                        </div>\n                                                        <div class=\"address\">\n                                                            {{order.customer.invoiceAddress.address}}\n                                                        </div>\n                                                        <div class=\"phone\">{{order.customer.phone}}</div>\n                                                        <div class=\"email\">{{order.customer.email}}</div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"issuer accent\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                                    <div class=\"logo\">\n                                                        <img src=\"assets/images/logos/fuse.svg\">\n                                                    </div>\n\n                                                    <div class=\"info\">\n                                                        <div class=\"title\">FUSE INC.</div>\n                                                        <div class=\"address\">2810 Country Club Road Cranford, NJ 07016\n                                                        </div>\n                                                        <div class=\"phone\">+66 123 455 87</div>\n                                                        <div class=\"email\">hello@fuseinc.com</div>\n                                                        <div class=\"website\">www.fuseinc.com</div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"content\">\n\n                                            <table class=\"simple invoice-table\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>PRODUCT</th>\n                                                        <th class=\"text-right\">PRICE</th>\n                                                        <th class=\"text-right\">QUANTITY</th>\n                                                        <th class=\"text-right\">TOTAL</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let product of order.products\">\n                                                        <td>\n                                                            <div class=\"title\">\n                                                                {{product.name}}\n                                                            </div>\n                                                        </td>\n                                                        <td class=\"text-right\">\n                                                            {{product.price | currency:'USD':'symbol'}}\n                                                        </td>\n                                                        <td class=\"text-right\">\n                                                            {{product.quantity}}\n                                                        </td>\n                                                        <td class=\"text-right\">\n                                                            {{product.total | currency:'USD':'symbol'}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n\n                                            <table class=\"simple invoice-table-footer\">\n                                                <tbody>\n                                                    <tr class=\"subtotal\">\n                                                        <td>SUBTOTAL</td>\n                                                        <td>{{order.subtotal | currency:'USD':'symbol'}}</td>\n                                                    </tr>\n                                                    <tr class=\"tax\">\n                                                        <td>TAX</td>\n                                                        <td>{{order.tax | currency:'USD':'symbol'}}</td>\n                                                    </tr>\n                                                    <tr class=\"discount\">\n                                                        <td>DISCOUNT</td>\n                                                        <td>-{{order.discount | currency:'USD':'symbol'}}</td>\n                                                    </tr>\n                                                    <tr class=\"total\">\n                                                        <td>TOTAL</td>\n                                                        <td>{{order.total | currency:'USD':'symbol'}}</td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n\n                                        <div class=\"footer\">\n                                            <div class=\"note\">Please pay within 15 days. Thank you for your business.\n                                            </div>\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                                <div class=\"logo\">\n                                                    <img src=\"assets/images/logos/fuse.svg\">\n                                                </div>\n                                                <div class=\"small-note\">\n                                                    In condimentum malesuada efficitur. Mauris volutpat placerat auctor.\n                                                    Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum.\n                                                    Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo\n                                                    commodo, a suscipit tellus dapibus. Etiam at felis volutpat est\n                                                    mollis lacinia. Mauris placerat sem sit amet velit mollis, in\n                                                    porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et\n                                                    eget eros.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- / INVOICE -->\n\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#order .header .subtitle {\n  margin: 6px 0 0 0; }\n#order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n#order .content .tab-content.products .product-row {\n  cursor: pointer; }\n#order .content .tab-content.invoice {\n  /* PRINT STYLES */ }\n#order .content .tab-content.invoice #invoice.compact {\n    padding: 0;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container {\n      padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 64px 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        color: rgba(0, 0, 0, 0.87);\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n          font-size: 14px;\n          color: rgba(0, 0, 0, 0.54);\n          margin-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number {\n          font-size: 18px;\n          padding-bottom: 2px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n            color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n            padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date {\n          font-size: 18px;\n          padding-bottom: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .title {\n            color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .date {\n            padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .info {\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 22px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n          margin-right: -88px;\n          padding-right: 66px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .logo {\n            width: 96px;\n            padding: 0 8px;\n            border-right: 1px solid rgba(255, 255, 255, 0.7); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .info {\n            padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n          margin-top: 64px;\n          font-size: 15px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n            padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n            padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td {\n            border-color: rgba(0, 0, 0, 0.12); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n            font-size: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 72px 0; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 16px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 4px 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 24px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    #order .content .tab-content.invoice {\n      /* Invoice Specific Styles */ }\n      #order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 0; }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          box-shadow: none; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n            margin-bottom: 16pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n            padding-right: 0;\n            margin-right: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            margin-right: 8pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n#order .content .mat-tab-body-content {\n  display: flex; }\n#order .content .mat-tab-label {\n  height: 64px; }\n#order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order.component.ts ***!
  \***************************************************************/
/*! exports provided: EcommerceOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceOrderComponent", function() { return EcommerceOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_e_commerce_order_order_statuses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order-statuses */ "./src/app/main/apps/e-commerce/order/order-statuses.ts");
/* harmony import */ var app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order.model */ "./src/app/main/apps/e-commerce/order/order.model.ts");
/* harmony import */ var app_main_apps_e_commerce_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order.service */ "./src/app/main/apps/e-commerce/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EcommerceOrderComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {EcommerceOrderService} _ecommerceOrderService
     * @param {FormBuilder} _formBuilder
     */
    function EcommerceOrderComponent(_ecommerceOrderService, _formBuilder) {
        this._ecommerceOrderService = _ecommerceOrderService;
        this._formBuilder = _formBuilder;
        // Set the defaults
        this.order = new app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"]();
        this.orderStatuses = app_main_apps_e_commerce_order_order_statuses__WEBPACK_IMPORTED_MODULE_5__["orderStatuses"];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    EcommerceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update order on changes
        this._ecommerceOrderService.onOrderChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (order) {
            _this.order = new app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_6__["Order"](order);
        });
        this.statusForm = this._formBuilder.group({
            newStatus: ['']
        });
    };
    /**
     * On destroy
     */
    EcommerceOrderComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Update status
     */
    EcommerceOrderComponent.prototype.updateStatus = function () {
        var newStatusId = Number.parseInt(this.statusForm.get('newStatus').value);
        if (!newStatusId) {
            return;
        }
        var newStatus = this.orderStatuses.find(function (status) {
            return status.id === newStatusId;
        });
        newStatus['date'] = new Date().toString();
        this.order.status.unshift(newStatus);
    };
    EcommerceOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'e-commerce-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/main/apps/e-commerce/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/main/apps/e-commerce/order/order.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_e_commerce_order_order_service__WEBPACK_IMPORTED_MODULE_7__["EcommerceOrderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EcommerceOrderComponent);
    return EcommerceOrderComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/order/order.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/order/order.service.ts ***!
  \*************************************************************/
/*! exports provided: EcommerceOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceOrderService", function() { return EcommerceOrderService; });
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



var EcommerceOrderService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function EcommerceOrderService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onOrderChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceOrderService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getOrder()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get order
     *
     * @returns {Promise<any>}
     */
    EcommerceOrderService.prototype.getOrder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/e-commerce-orders/' + _this.routeParams.id)
                .subscribe(function (response) {
                _this.order = response;
                _this.onOrderChanged.next(_this.order);
                resolve(response);
            }, reject);
        });
    };
    /**
     * Save order
     *
     * @param order
     * @returns {Promise<any>}
     */
    EcommerceOrderService.prototype.saveOrder = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/e-commerce-orders/' + order.id, order)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Add order
     *
     * @param order
     * @returns {Promise<any>}
     */
    EcommerceOrderService.prototype.addOrder = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/e-commerce-orders/', order)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EcommerceOrderService);
    return EcommerceOrderService;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/orders/orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/orders/orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orders\" class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo\"\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n                    shopping_basket\n                </mat-icon>\n                <span class=\"logo-text h1\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Orders</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper ml-sm-16\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatLabel=\"never\" fxFlex=\"1 0 auto\">\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <mat-table class=\"orders-table\"\n                       #table [dataSource]=\"dataSource\"\n                       matSort\n                       [@animateStagger]=\"{value:'50'}\"\n                       fusePerfectScrollbar>\n\n                <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\">\n                        <p class=\"text-truncate\">{{order.id}}</p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Reference Column -->\n                <ng-container matColumnDef=\"reference\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Reference</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\n                        <p class=\"text-truncate\">{{order.reference}}</p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"customer\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Customer</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\">\n                        <p class=\"text-truncate\">\n                            {{order.customer.firstName}}\n                            {{order.customer.lastName}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Total Price Column -->\n                <ng-container matColumnDef=\"total\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Total</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-md>\n                        <p class=\"total-price text-truncate\">\n                            {{order.total | currency:'USD':'symbol'}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Payment Column -->\n                <ng-container matColumnDef=\"payment\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Payment</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\n                        <p class=\"text-truncate\">\n                            {{order.payment.method}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"status\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\">\n                        <p class=\"status text-truncate h6 p-4\" [ngClass]=\"order.status[0].color\">\n                            {{order.status[0].name}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Date Column -->\n                <ng-container matColumnDef=\"date\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Date</mat-header-cell>\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\n                        <p class=\"text-truncate\">\n                            {{order.date}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\n\n                <mat-row *matRowDef=\"let order; columns: displayedColumns;\"\n                         class=\"order\"\n                         matRipple\n                         [routerLink]=\"'/apps/e-commerce/orders/'+order.id\">\n                </mat-row>\n            </mat-table>\n\n            <mat-paginator #paginator\n                           [length]=\"dataSource.filteredData.length\"\n                           [pageIndex]=\"0\"\n                           [pageSize]=\"10\"\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\n            </mat-paginator>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/orders/orders.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/orders/orders.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #orders > .center > .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host #orders > .center > .header {\n    margin: 24px 0;\n    height: 128px !important;\n    min-height: 128px !important;\n    max-height: 128px !important; } }\n:host .mat-tab-group,\n:host .mat-tab-body-wrapper,\n:host .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n:host .orders-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host .orders-table .mat-header-row {\n    min-height: 64px; }\n:host .orders-table .order {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .orders-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .orders-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .orders-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .orders-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .orders-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .orders-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .orders-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .orders-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/orders/orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/orders/orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: EcommerceOrdersComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceOrdersComponent", function() { return EcommerceOrdersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_e_commerce_orders_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/e-commerce/orders/orders.service */ "./src/app/main/apps/e-commerce/orders/orders.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
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









var EcommerceOrdersComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrdersService
     */
    function EcommerceOrdersComponent(_ecommerceOrdersService) {
        this._ecommerceOrdersService = _ecommerceOrdersService;
        this.displayedColumns = ['id', 'reference', 'customer', 'total', 'payment', 'status', 'date'];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    EcommerceOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this._ecommerceOrdersService, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.filter.nativeElement, 'keyup')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /**
     * On destroy
     */
    EcommerceOrdersComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EcommerceOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EcommerceOrdersComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EcommerceOrdersComponent.prototype, "sort", void 0);
    EcommerceOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'e-commerce-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/main/apps/e-commerce/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/main/apps/e-commerce/orders/orders.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_e_commerce_orders_orders_service__WEBPACK_IMPORTED_MODULE_7__["EcommerceOrdersService"]])
    ], EcommerceOrdersComponent);
    return EcommerceOrdersComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrdersService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    function FilesDataSource(_ecommerceOrdersService, _matPaginator, _matSort) {
        var _this = _super.call(this) || this;
        _this._ecommerceOrdersService = _ecommerceOrdersService;
        _this._matPaginator = _matPaginator;
        _this._matSort = _matSort;
        // Private
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this._filteredDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this.filteredData = _this._ecommerceOrdersService.orders;
        return _this;
    }
    Object.defineProperty(FilesDataSource.prototype, "filteredData", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        // Filtered data
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesDataSource.prototype, "filter", {
        // Filter
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._ecommerceOrdersService.onOrdersChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var data = _this._ecommerceOrdersService.orders.slice();
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._matPaginator.pageIndex * _this._matPaginator.pageSize;
            return data.splice(startIndex, _this._matPaginator.pageSize);
        }));
    };
    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    FilesDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return _fuse_utils__WEBPACK_IMPORTED_MODULE_6__["FuseUtils"].filterArrayByString(data, this.filter);
    };
    /**
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    FilesDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._matSort.active || this._matSort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._matSort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'reference':
                    _b = [a.reference, b.reference], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'customer':
                    _c = [a.customer.firstName, b.customer.firstName], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'total':
                    _d = [a.total, b.total], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'payment':
                    _e = [a.payment.method, b.payment.method], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'status':
                    _f = [a.status[0].name, b.status[0].name], propertyA = _f[0], propertyB = _f[1];
                    break;
                case 'date':
                    _g = [a.date, b.date], propertyA = _g[0], propertyB = _g[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._matSort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f, _g;
        });
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/main/apps/e-commerce/orders/orders.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/orders/orders.service.ts ***!
  \***************************************************************/
/*! exports provided: EcommerceOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceOrdersService", function() { return EcommerceOrdersService; });
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



var EcommerceOrdersService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function EcommerceOrdersService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onOrdersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceOrdersService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getOrders()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get orders
     *
     * @returns {Promise<any>}
     */
    EcommerceOrdersService.prototype.getOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/e-commerce-orders')
                .subscribe(function (response) {
                _this.orders = response;
                _this.onOrdersChanged.next(_this.orders);
                resolve(response);
            }, reject);
        });
    };
    EcommerceOrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EcommerceOrdersService);
    return EcommerceOrdersService;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/product/product.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/product/product.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"mr-0 mr-sm-16\" [routerLink]=\"'/apps/e-commerce/products'\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div class=\"product-image mr-8 mr-sm-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n                    <img *ngIf=\"product.images[0]\" [src]=\"product.images[0].url\">\n                    <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n                </div>\n\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n                     [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    <div class=\"h2\" *ngIf=\"pageType ==='edit'\">\n                        {{product.name}}\n                    </div>\n                    <div class=\"h2\" *ngIf=\"pageType ==='new'\">\n                        New Product\n                    </div>\n                    <div class=\"subtitle secondary-text\">\n                        <span>Product Detail</span>\n                    </div>\n                </div>\n            </div>\n            <!-- / APP TITLE -->\n\n            <button mat-raised-button\n                    class=\"save-product-button\"\n                    [disabled]=\"productForm.invalid\"\n                    *ngIf=\"pageType ==='new'\" (click)=\"addProduct()\">\n                <span>ADD</span>\n            </button>\n\n            <button mat-raised-button\n                    class=\"save-product-button\"\n                    [disabled]=\"productForm.invalid || productForm.pristine\"\n                    *ngIf=\"pageType ==='edit'\" (click)=\"saveProduct()\">\n                <span>SAVE</span>\n            </button>\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <form name=\"productForm\" [formGroup]=\"productForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Basic Info\">\n\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"name\"\n                                           formControlName=\"name\"\n                                           placeholder=\"Product Name\"\n                                           required>\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <textarea matInput\n                                              name=\"description\"\n                                              formControlName=\"description\"\n                                              placeholder=\"Product Description\"\n                                              rows=\"5\">\n                                    </textarea>\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n\n                                    <mat-chip-list #categoryList name=\"categories\" formControlName=\"categories\">\n\n                                        <mat-chip *ngFor=\"let category of product.categories\"\n                                                  [removable]=\"true\" (removed)=\"product.removeCategory(category)\">\n                                            {{category}}\n                                            <mat-icon matChipRemove>cancel</mat-icon>\n                                        </mat-chip>\n\n                                        <input placeholder=\"Categories\"\n                                               [matChipInputFor]=\"categoryList\"\n                                               [matChipInputAddOnBlur]=\"true\"\n                                               (matChipInputTokenEnd)=\"product.addCategory($event)\"/>\n\n                                    </mat-chip-list>\n\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n\n                                    <mat-chip-list #tagList name=\"tags\" formControlName=\"tags\">\n\n                                        <mat-chip *ngFor=\"let tag of product.tags\"\n                                                  [removable]=\"true\" (removed)=\"product.removeTag(tag)\">\n                                            {{tag}}\n                                            <mat-icon matChipRemove>cancel</mat-icon>\n                                        </mat-chip>\n\n                                        <input placeholder=\"Tags\"\n                                               [matChipInputFor]=\"tagList\"\n                                               [matChipInputAddOnBlur]=\"true\"\n                                               (matChipInputTokenEnd)=\"product.addTag($event)\"/>\n\n                                    </mat-chip-list>\n\n                                </mat-form-field>\n\n                            </div>\n\n                        </mat-tab>\n\n                        <mat-tab label=\"Product Images\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\n\n                                    <div *ngIf=\"product.images.length === 0\"\n                                         class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\n                                        <img class=\"media\"\n                                             [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n                                    </div>\n\n                                    <div *ngFor=\"let image of product.images\">\n                                        <div *ngIf=\"product.images.length > 0\"\n                                             class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\n                                            <img class=\"media\" [src]=\"image.url\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Pricing\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"priceTaxExcl\"\n                                           formControlName=\"priceTaxExcl\"\n                                           placeholder=\"Tax Excluded Price\" type=\"number\">\n                                    <span matPrefix>$&nbsp;</span>\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"priceTaxIncl\"\n                                           formControlName=\"priceTaxIncl\"\n                                           placeholder=\"Tax Included Price\" type=\"number\">\n                                    <span matPrefix>$&nbsp;</span>\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"taxRate\"\n                                           formControlName=\"taxRate\"\n                                           placeholder=\"Tax Rate\" type=\"number\">\n                                    <span matPrefix>&#37;</span>\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"comparedPrice\"\n                                           formControlName=\"comparedPrice\"\n                                           placeholder=\"Compared Price\" type=\"number\">\n                                    <span matPrefix>$&nbsp;</span>\n                                    <mat-hint align=\"start\">Add a compare price to show next to the real price\n                                    </mat-hint>\n                                </mat-form-field>\n\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Inventory\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"sku\"\n                                           formControlName=\"sku\"\n                                           placeholder=\"SKU\">\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"quantity\"\n                                           formControlName=\"quantity\"\n                                           placeholder=\"Quantity\" type=\"number\">\n                                </mat-form-field>\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Shipping\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar fxLayout=\"column\">\n\n                                <div class=\"py-16\" fxLayout=\"row\">\n                                    <mat-form-field fxFlex>\n                                        <input matInput\n                                               name=\"Width\"\n                                               formControlName=\"width\"\n                                               placeholder=\"Width\">\n                                    </mat-form-field>\n                                    <mat-form-field fxFlex>\n                                        <input matInput\n                                               name=\"Height\"\n                                               formControlName=\"height\"\n                                               placeholder=\"Height\">\n                                    </mat-form-field>\n                                    <mat-form-field fxFlex>\n                                        <input matInput\n                                               name=\"Depth\"\n                                               formControlName=\"depth\"\n                                               placeholder=\"Depth\">\n                                    </mat-form-field>\n                                </div>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"Weight\"\n                                           formControlName=\"weight\"\n                                           placeholder=\"Weight\">\n                                </mat-form-field>\n\n                                <mat-form-field class=\"w-100-p\">\n                                    <input matInput\n                                           name=\"extraShippingFee\"\n                                           formControlName=\"extraShippingFee\"\n                                           placeholder=\"Extra Shipping Fee\" type=\"number\">\n                                    <span matPrefix>$&nbsp;</span>\n                                </mat-form-field>\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n                </form>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/product/product.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/product/product.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #product .header .subtitle {\n  margin: 6px 0 0 0; }\n  #product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #product .content .mat-tab-body-content {\n  display: flex; }\n  #product .content .mat-tab-label {\n  height: 64px; }\n  #product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/product/product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/product/product.component.ts ***!
  \*******************************************************************/
/*! exports provided: EcommerceProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductComponent", function() { return EcommerceProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_e_commerce_product_product_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/e-commerce/product/product.model */ "./src/app/main/apps/e-commerce/product/product.model.ts");
/* harmony import */ var app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/e-commerce/product/product.service */ "./src/app/main/apps/e-commerce/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EcommerceProductComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    function EcommerceProductComponent(_ecommerceProductService, _formBuilder, _location, _matSnackBar) {
        this._ecommerceProductService = _ecommerceProductService;
        this._formBuilder = _formBuilder;
        this._location = _location;
        this._matSnackBar = _matSnackBar;
        // Set the default
        this.product = new app_main_apps_e_commerce_product_product_model__WEBPACK_IMPORTED_MODULE_8__["Product"]();
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    EcommerceProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to update product on changes
        this._ecommerceProductService.onProductChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (product) {
            if (product) {
                _this.product = new app_main_apps_e_commerce_product_product_model__WEBPACK_IMPORTED_MODULE_8__["Product"](product);
                _this.pageType = 'edit';
            }
            else {
                _this.pageType = 'new';
                _this.product = new app_main_apps_e_commerce_product_product_model__WEBPACK_IMPORTED_MODULE_8__["Product"]();
            }
            _this.productForm = _this.createProductForm();
        });
    };
    /**
     * On destroy
     */
    EcommerceProductComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    EcommerceProductComponent.prototype.createProductForm = function () {
        return this._formBuilder.group({
            id: [this.product.id],
            name: [this.product.name],
            handle: [this.product.handle],
            description: [this.product.description],
            categories: [this.product.categories],
            tags: [this.product.tags],
            images: [this.product.images],
            priceTaxExcl: [this.product.priceTaxExcl],
            priceTaxIncl: [this.product.priceTaxIncl],
            taxRate: [this.product.taxRate],
            comparedPrice: [this.product.comparedPrice],
            quantity: [this.product.quantity],
            sku: [this.product.sku],
            width: [this.product.width],
            height: [this.product.height],
            depth: [this.product.depth],
            weight: [this.product.weight],
            extraShippingFee: [this.product.extraShippingFee],
            active: [this.product.active]
        });
    };
    /**
     * Save product
     */
    EcommerceProductComponent.prototype.saveProduct = function () {
        var _this = this;
        var data = this.productForm.getRawValue();
        data.handle = _fuse_utils__WEBPACK_IMPORTED_MODULE_7__["FuseUtils"].handleize(data.name);
        this._ecommerceProductService.saveProduct(data)
            .then(function () {
            // Trigger the subscription with new data
            _this._ecommerceProductService.onProductChanged.next(data);
            // Show the success message
            _this._matSnackBar.open('Product saved', 'OK', {
                verticalPosition: 'top',
                duration: 2000
            });
        });
    };
    /**
     * Add product
     */
    EcommerceProductComponent.prototype.addProduct = function () {
        var _this = this;
        var data = this.productForm.getRawValue();
        data.handle = _fuse_utils__WEBPACK_IMPORTED_MODULE_7__["FuseUtils"].handleize(data.name);
        this._ecommerceProductService.addProduct(data)
            .then(function () {
            // Trigger the subscription with new data
            _this._ecommerceProductService.onProductChanged.next(data);
            // Show the success message
            _this._matSnackBar.open('Product added', 'OK', {
                verticalPosition: 'top',
                duration: 2000
            });
            // Change the location with new one
            _this._location.go('apps/e-commerce/products/' + _this.product.id + '/' + _this.product.handle);
        });
    };
    EcommerceProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'e-commerce-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/main/apps/e-commerce/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/main/apps/e-commerce/product/product.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_e_commerce_product_product_service__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], EcommerceProductComponent);
    return EcommerceProductComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/product/product.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/product/product.service.ts ***!
  \*****************************************************************/
/*! exports provided: EcommerceProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductService", function() { return EcommerceProductService; });
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



var EcommerceProductService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function EcommerceProductService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onProductChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceProductService.prototype.resolve = function (route, state) {
        var _this = this;
        this.routeParams = route.params;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProduct()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    EcommerceProductService.prototype.getProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.routeParams.id === 'new') {
                _this.onProductChanged.next(false);
                resolve(false);
            }
            else {
                _this._httpClient.get('api/e-commerce-products/' + _this.routeParams.id)
                    .subscribe(function (response) {
                    _this.product = response;
                    _this.onProductChanged.next(_this.product);
                    resolve(response);
                }, reject);
            }
        });
    };
    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    EcommerceProductService.prototype.saveProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/e-commerce-products/' + product.id, product)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    EcommerceProductService.prototype.addProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post('api/e-commerce-products/', product)
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    EcommerceProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EcommerceProductService);
    return EcommerceProductService;
}());



/***/ }),

/***/ "./src/app/main/apps/e-commerce/products/products.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/products/products.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header accent\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\"\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n                    shopping_basket\n                </mat-icon>\n                <span class=\"logo-text h1\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n                    Products\n                </span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-24 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatLabel=\"never\" fxFlex=\"1 0 auto\">\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n            <button mat-raised-button\n                    [routerLink]=\"'/apps/e-commerce/products/new'\"\n                    class=\"add-product-button fuse-white my-12 mt-sm-0\">\n                <span>ADD NEW PRODUCT</span>\n            </button>\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <mat-table class=\"products-table\"\n                       #table [dataSource]=\"dataSource\"\n                       matSort\n                       [@animateStagger]=\"{value:'50'}\"\n                       fusePerfectScrollbar>\n\n                <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\">\n                        <p class=\"text-truncate\">{{product.id}}</p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Image Column -->\n                <ng-container matColumnDef=\"image\">\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\">\n                        <img class=\"product-image\"\n                             *ngIf=\"product.images[0]\" [alt]=\"product.name\"\n                             [src]=\"product.images[0].url\"/>\n                        <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\">\n                        <p class=\"text-truncate\">{{product.name}}</p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Category Column -->\n                <ng-container matColumnDef=\"category\">\n                    <mat-header-cell *matHeaderCellDef fxHide mat-sort-header fxShow.gt-md>Category</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-md>\n                        <p class=\"category text-truncate\">\n                            {{product.categories[0]}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Price Column -->\n                <ng-container matColumnDef=\"price\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Price</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-xs>\n                        <p class=\"price text-truncate\">\n                            {{product.priceTaxIncl | currency:'USD':'symbol'}}\n                        </p>\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Quantity Column -->\n                <ng-container matColumnDef=\"quantity\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Quantity</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-sm>\n\n                        <span class=\"quantity-indicator text-truncate\"\n                              [ngClass]=\"{'red-500':product.quantity <= 5, 'amber-500':product.quantity > 5 && product.quantity <= 25,'green-600':product.quantity > 25}\">\n                        </span>\n                        <span>\n                            {{product.quantity}}\n                        </span>\n\n                    </mat-cell>\n                </ng-container>\n\n                <!-- Active Column -->\n                <ng-container matColumnDef=\"active\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Active</mat-header-cell>\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-xs>\n                        <mat-icon *ngIf=\"product.active\" class=\"active-icon green-600 s-16\">check</mat-icon>\n                        <mat-icon *ngIf=\"!product.active\" class=\"active-icon red-500 s-16\">close</mat-icon>\n                    </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\n\n                <mat-row *matRowDef=\"let product; columns: displayedColumns;\"\n                         class=\"product\"\n                         matRipple\n                         [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\n                </mat-row>\n\n            </mat-table>\n\n            <mat-paginator #paginator\n                           [length]=\"dataSource.filteredData.length\"\n                           [pageIndex]=\"0\"\n                           [pageSize]=\"10\"\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\n            </mat-paginator>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/products/products.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/products/products.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media (max-width: 599px) {\n  :host #products .top-bg {\n    height: 240px; } }\n:host #products > .center > .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host #products > .center > .header {\n    margin: 8px 0;\n    height: 192px !important;\n    min-height: 192px !important;\n    max-height: 192px !important; } }\n:host .products-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host .products-table .mat-header-row {\n    min-height: 64px; }\n:host .products-table .product {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .products-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .products-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .products-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .products-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .products-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .products-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .products-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .products-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/apps/e-commerce/products/products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/products/products.component.ts ***!
  \*********************************************************************/
/*! exports provided: EcommerceProductsComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductsComponent", function() { return EcommerceProductsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var app_main_apps_e_commerce_products_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/e-commerce/products/products.service */ "./src/app/main/apps/e-commerce/products/products.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
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









var EcommerceProductsComponent = /** @class */ (function () {
    function EcommerceProductsComponent(_ecommerceProductsService) {
        this._ecommerceProductsService = _ecommerceProductsService;
        this.displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    EcommerceProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this._ecommerceProductsService, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.filter.nativeElement, 'keyup')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EcommerceProductsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EcommerceProductsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EcommerceProductsComponent.prototype, "filter", void 0);
    EcommerceProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'e-commerce-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/main/apps/e-commerce/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/main/apps/e-commerce/products/products.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_e_commerce_products_products_service__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsService"]])
    ], EcommerceProductsComponent);
    return EcommerceProductsComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param {EcommerceProductsService} _ecommerceProductsService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    function FilesDataSource(_ecommerceProductsService, _matPaginator, _matSort) {
        var _this = _super.call(this) || this;
        _this._ecommerceProductsService = _ecommerceProductsService;
        _this._matPaginator = _matPaginator;
        _this._matSort = _matSort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this._filteredDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this.filteredData = _this._ecommerceProductsService.products;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._ecommerceProductsService.onProductsChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var data = _this._ecommerceProductsService.products.slice();
            data = _this.filterData(data);
            _this.filteredData = data.slice();
            data = _this.sortData(data);
            // Grab the page's slice of data.
            var startIndex = _this._matPaginator.pageIndex * _this._matPaginator.pageSize;
            return data.splice(startIndex, _this._matPaginator.pageSize);
        }));
    };
    Object.defineProperty(FilesDataSource.prototype, "filteredData", {
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        // Filtered data
        get: function () {
            return this._filteredDataChange.value;
        },
        set: function (value) {
            this._filteredDataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesDataSource.prototype, "filter", {
        // Filter
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    FilesDataSource.prototype.filterData = function (data) {
        if (!this.filter) {
            return data;
        }
        return _fuse_utils__WEBPACK_IMPORTED_MODULE_6__["FuseUtils"].filterArrayByString(data, this.filter);
    };
    /**
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    FilesDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._matSort.active || this._matSort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._matSort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'categories':
                    _c = [a.categories[0], b.categories[0]], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'price':
                    _d = [a.priceTaxIncl, b.priceTaxIncl], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'quantity':
                    _e = [a.quantity, b.quantity], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'active':
                    _f = [a.active, b.active], propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._matSort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f;
        });
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/main/apps/e-commerce/products/products.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/e-commerce/products/products.service.ts ***!
  \*******************************************************************/
/*! exports provided: EcommerceProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductsService", function() { return EcommerceProductsService; });
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



var EcommerceProductsService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function EcommerceProductsService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onProductsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    EcommerceProductsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProducts()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    EcommerceProductsService.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/e-commerce-products')
                .subscribe(function (response) {
                _this.products = response;
                _this.onProductsChanged.next(_this.products);
                resolve(response);
            }, reject);
        });
    };
    EcommerceProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EcommerceProductsService);
    return EcommerceProductsService;
}());



/***/ })

}]);
//# sourceMappingURL=e-commerce-e-commerce-module.js.map