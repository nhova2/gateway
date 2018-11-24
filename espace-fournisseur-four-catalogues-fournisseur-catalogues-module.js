(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-fournisseur-four-catalogues-fournisseur-catalogues-module"],{

/***/ "./src/app/espace/fournisseur/four-catalogues/fournisseur-catalogues.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/fournisseur-catalogues.module.ts ***!
  \*************************************************************************************/
/*! exports provided: routes, CataloguesFournisseurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CataloguesFournisseurModule", function() { return CataloguesFournisseurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/espace/fournisseur/four-catalogues/products/products.component.ts");
/* harmony import */ var _products_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.service */ "./src/app/espace/fournisseur/four-catalogues/products/products.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/espace/fournisseur/four-catalogues/product/product.component.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.service */ "./src/app/espace/fournisseur/four-catalogues/product/product.service.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.ts");
/* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.service */ "./src/app/espace/fournisseur/four-catalogues/orders/orders.service.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/order.component */ "./src/app/espace/fournisseur/four-catalogues/order/order.component.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.service */ "./src/app/espace/fournisseur/four-catalogues/order/order.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* import { FoCatalogueListComponent } from './catalogue-list/fourn-catalogue-list.component';
 */













var routes = [
    //{ path: '', component: FoCatalogueListComponent, pathMatch: 'full' },
    { path: '',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
        pathMatch: 'full',
        resolve: {
            data: _products_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"]
        }
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
        resolve: {
            data: _products_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"]
        }
    },
    {
        path: 'products/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
        resolve: {
            data: _product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"]
        }
    },
    {
        path: 'products/:id/:handle',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
        resolve: {
            data: _product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"]
        }
    },
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceOrdersComponent"],
        resolve: {
            data: _orders_orders_service__WEBPACK_IMPORTED_MODULE_12__["EcommerceOrdersService"]
        }
    },
    {
        path: 'orders/:id',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_13__["EcommerceOrderComponent"],
        resolve: {
            data: _order_order_service__WEBPACK_IMPORTED_MODULE_14__["EcommerceOrderService"]
        }
    }
];
var CataloguesFournisseurModule = /** @class */ (function () {
    function CataloguesFournisseurModule() {
    }
    CataloguesFournisseurModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__["NgxChartsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                _fuse_components__WEBPACK_IMPORTED_MODULE_18__["FuseWidgetModule"]
            ],
            declarations: [
                //FoCatalogueListComponent,
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceOrdersComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_13__["EcommerceOrderComponent"]
            ],
            exports: [
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceProductsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceOrdersComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_13__["EcommerceOrderComponent"]
            ],
            providers: [
                _products_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"],
                _product_product_service__WEBPACK_IMPORTED_MODULE_10__["EcommerceProductService"],
                _orders_orders_service__WEBPACK_IMPORTED_MODULE_12__["EcommerceOrdersService"],
                _order_order_service__WEBPACK_IMPORTED_MODULE_14__["EcommerceOrderService"],
                app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_19__["CrudPopupComponent"]
            ]
        })
    ], CataloguesFournisseurModule);
    return CataloguesFournisseurModule;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/order/order-statuses.ts":
/*!****************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/order/order-statuses.ts ***!
  \****************************************************************************/
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

/***/ "./src/app/espace/fournisseur/four-catalogues/order/order.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/order/order.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-icon-button class=\"mr-16\" [routerLink]=\"'/apps/e-commerce/orders'\">\r\n                    <mat-icon>arrow_back</mat-icon>\r\n                </button>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n                     [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                    <div class=\"h2\">\r\n                        Order {{order.reference}}\r\n                    </div>\r\n                    <div class=\"subtitle secondary-text\">\r\n                        <span>from</span>\r\n                        <span>{{order.customer.firstName}} {{order.customer.lastName}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group fxLayout=\"column\" fxFlex>\r\n\r\n                    <mat-tab label=\"Order Details\">\r\n\r\n                        <div class=\"order-details tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">account_circle</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Customer</div>\r\n                                </div>\r\n\r\n                                <div class=\"customer\">\r\n                                    <table class=\"simple\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Name</th>\r\n                                                <th>Email</th>\r\n                                                <th>Phone</th>\r\n                                                <th>Company</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                        <img class=\"avatar\" [src]=\"order.customer.avatar\">\r\n                                                        <span class=\"name text-truncate\">{{order.customer.firstName}}\r\n                                                            {{order.customer.lastName}}\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"email text-truncate\">{{order.customer.email}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"phone text-truncate\">{{order.customer.phone}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span class=\"company text-truncate\">{{order.customer.company}}\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n\r\n                                <mat-tab-group class=\"addresses\">\r\n\r\n                                    <mat-tab label=\"Shipping Address\">\r\n                                        <div fxFlex fxLayout=\"column\">\r\n                                            <div class=\"address h4 py-24\">{{order.customer.shippingAddress.address}}\r\n                                            </div>\r\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\r\n                                                     [latitude]=\"order.customer.shippingAddress.lat\"\r\n                                                     [longitude]=\"order.customer.shippingAddress.lng\">\r\n                                                <agm-marker [latitude]=\"order.customer.shippingAddress.lat\"\r\n                                                            [longitude]=\"order.customer.shippingAddress.lng\">\r\n                                                </agm-marker>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"Invoice Address\" fxLayout=\"column\">\r\n                                        <div fxFlex fxLayout=\"column\">\r\n                                            <div class=\"address h4 py-24\">{{order.customer.invoiceAddress.address}}\r\n                                            </div>\r\n                                            <agm-map class=\"w-100-p h-400\" [zoom]=\"15\"\r\n                                                     [latitude]=\"order.customer.invoiceAddress.lat\"\r\n                                                     [longitude]=\"order.customer.invoiceAddress.lng\">\r\n                                                <agm-marker [latitude]=\"order.customer.invoiceAddress.lat\"\r\n                                                            [longitude]=\"order.customer.invoiceAddress.lng\">\r\n                                                </agm-marker>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                    </mat-tab>\r\n                                </mat-tab-group>\r\n                            </div>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">access_time</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Order Status</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Status</th>\r\n                                            <th>Updated On</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n\r\n                                        <tr *ngFor=\"let status of order.status\">\r\n                                            <td>\r\n                                                <span class=\"status h6 p-4\" [ngClass]=\"status.color\">\r\n                                                    {{status.name}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span>\r\n                                                    {{status.date | date}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                                <form class=\"update-status p-24\"\r\n                                      (ngSubmit)=\"updateStatus()\"\r\n                                      [formGroup]=\"statusForm\"\r\n                                      fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                                    <mat-form-field class=\"mr-16\" fxFlex>\r\n                                        <mat-select formControlName=\"newStatus\"\r\n                                                    placeholder=\"Select a status\" required>\r\n                                            <mat-option *ngFor=\"let status of orderStatuses\"\r\n                                                        [value]=\"status.id\">\r\n                                                {{status.name}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n\r\n                                    <button mat-icon-button class=\"mat-accent\"\r\n                                            [disabled]=\"statusForm.invalid\">\r\n                                        Update Status\r\n                                    </button>\r\n                                </form>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">attach_money</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Payment</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>TransactionID</th>\r\n                                            <th>Payment Method</th>\r\n                                            <th>Amount</th>\r\n                                            <th>Date</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.transactionId}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.method}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.amount}}\r\n                                                </span>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"text-truncate\">\r\n                                                    {{order.payment.date | date}}\r\n                                                </span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"section pb-48\">\r\n\r\n                                <div class=\"pb-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"m-0 mr-16 secondary-text\">local_shipping</mat-icon>\r\n                                    <div class=\"h2 secondary-text\">Shipping</div>\r\n                                </div>\r\n\r\n                                <table class=\"simple\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Tracking Code</th>\r\n                                            <th>Carrier</th>\r\n                                            <th>Weight</th>\r\n                                            <th>Fee</th>\r\n                                            <th>Date</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let shipping of order.shippingDetails\">\r\n                                            <td class=\"tracking-code\">\r\n                                                {{shipping.tracking}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.carrier}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.weight}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.fee}}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{shipping.date}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Products\">\r\n                        <div class=\"products tab-content p-24\" fusePerfectScrollbar>\r\n                            <table class=\"simple\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>ID</th>\r\n                                        <th>Image</th>\r\n                                        <th>Name</th>\r\n                                        <th>Price</th>\r\n                                        <th>Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr class=\"product-row\"\r\n                                        *ngFor=\"let product of order.products\"\r\n                                        [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\r\n                                        <td class=\"w-64\">\r\n                                            {{product.id}}\r\n                                        </td>\r\n                                        <td class=\"w-80\">\r\n                                            <img class=\"product-image\" [src]=\"product.image\">\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.name}}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.price}}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{product.quantity}}\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Invoice\">\r\n\r\n                        <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                            <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\r\n\r\n                                <div class=\"invoice-container\">\r\n\r\n                                    <!-- INVOICE -->\r\n                                    <div class=\"card\">\r\n\r\n                                        <div class=\"header\">\r\n                                            <div class=\"invoice-date\">{{order.date}}</div>\r\n\r\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n                                                <div class=\"client\">\r\n                                                    <div class=\"invoice-number\" fxLayout=\"row\"\r\n                                                         fxLayoutAlign=\"start center\">\r\n                                                        <span class=\"title\">INVOICE</span>\r\n                                                        <span class=\"number\">{{order.reference}}</span>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"info\">\r\n                                                        <div class=\"title\">\r\n                                                            {{order.customer.firstName}}\r\n                                                            {{order.customer.lastName}}\r\n                                                        </div>\r\n                                                        <div class=\"address\">\r\n                                                            {{order.customer.invoiceAddress.address}}\r\n                                                        </div>\r\n                                                        <div class=\"phone\">{{order.customer.phone}}</div>\r\n                                                        <div class=\"email\">{{order.customer.email}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"issuer accent\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <div class=\"logo\">\r\n                                                        <img src=\"assets/images/logos/fuse.svg\">\r\n                                                    </div>\r\n\r\n                                                    <div class=\"info\">\r\n                                                        <div class=\"title\">FUSE INC.</div>\r\n                                                        <div class=\"address\">2810 Country Club Road Cranford, NJ 07016\r\n                                                        </div>\r\n                                                        <div class=\"phone\">+66 123 455 87</div>\r\n                                                        <div class=\"email\">hello@fuseinc.com</div>\r\n                                                        <div class=\"website\">www.fuseinc.com</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"content\">\r\n\r\n                                            <table class=\"simple invoice-table\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>PRODUCT</th>\r\n                                                        <th class=\"text-right\">PRICE</th>\r\n                                                        <th class=\"text-right\">QUANTITY</th>\r\n                                                        <th class=\"text-right\">TOTAL</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let product of order.products\">\r\n                                                        <td>\r\n                                                            <div class=\"title\">\r\n                                                                {{product.name}}\r\n                                                            </div>\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.price | currency:'USD':'symbol'}}\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.quantity}}\r\n                                                        </td>\r\n                                                        <td class=\"text-right\">\r\n                                                            {{product.total | currency:'USD':'symbol'}}\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n\r\n                                            <table class=\"simple invoice-table-footer\">\r\n                                                <tbody>\r\n                                                    <tr class=\"subtotal\">\r\n                                                        <td>SUBTOTAL</td>\r\n                                                        <td>{{order.subtotal | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"tax\">\r\n                                                        <td>TAX</td>\r\n                                                        <td>{{order.tax | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"discount\">\r\n                                                        <td>DISCOUNT</td>\r\n                                                        <td>-{{order.discount | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                    <tr class=\"total\">\r\n                                                        <td>TOTAL</td>\r\n                                                        <td>{{order.total | currency:'USD':'symbol'}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n\r\n                                        <div class=\"footer\">\r\n                                            <div class=\"note\">Please pay within 15 days. Thank you for your business.\r\n                                            </div>\r\n                                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                                                <div class=\"logo\">\r\n                                                    <img src=\"assets/images/logos/fuse.svg\">\r\n                                                </div>\r\n                                                <div class=\"small-note\">\r\n                                                    In condimentum malesuada efficitur. Mauris volutpat placerat auctor.\r\n                                                    Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum.\r\n                                                    Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo\r\n                                                    commodo, a suscipit tellus dapibus. Etiam at felis volutpat est\r\n                                                    mollis lacinia. Mauris placerat sem sit amet velit mollis, in\r\n                                                    porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et\r\n                                                    eget eros.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- / INVOICE -->\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/order/order.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/order/order.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#order .header .subtitle {\n  margin: 6px 0 0 0; }\n#order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n#order .content .tab-content.products .product-row {\n  cursor: pointer; }\n#order .content .tab-content.invoice {\n  /* PRINT STYLES */ }\n#order .content .tab-content.invoice #invoice.compact {\n    padding: 0;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container {\n      padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 64px 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        color: rgba(0, 0, 0, 0.87);\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n          font-size: 14px;\n          color: rgba(0, 0, 0, 0.54);\n          margin-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number {\n          font-size: 18px;\n          padding-bottom: 2px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n            color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n            padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date {\n          font-size: 18px;\n          padding-bottom: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .title {\n            color: rgba(0, 0, 0, 0.54); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .due-date .date {\n            padding-left: 6px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .client .info {\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 22px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n          margin-right: -88px;\n          padding-right: 66px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .logo {\n            width: 96px;\n            padding: 0 8px;\n            border-right: 1px solid rgba(255, 255, 255, 0.7); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer .info {\n            padding: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n          margin-top: 64px;\n          font-size: 15px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n            padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n            padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td {\n            border-color: rgba(0, 0, 0, 0.12); }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n            font-size: 16px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 72px 0; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 16px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 4px 8px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 24px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n#order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    #order .content .tab-content.invoice {\n      /* Invoice Specific Styles */ }\n      #order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 0; }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          box-shadow: none; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n            margin-bottom: 16pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n            padding-right: 0;\n            margin-right: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            margin-right: 8pt; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n#order .content .mat-tab-body-content {\n  display: flex; }\n#order .content .mat-tab-label {\n  height: 64px; }\n#order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/order/order.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/order/order.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/e-commerce/order/order.model */ "./src/app/main/apps/e-commerce/order/order.model.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.service */ "./src/app/espace/fournisseur/four-catalogues/order/order.service.ts");
/* harmony import */ var _order_order_statuses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././order/order-statuses */ "./src/app/espace/fournisseur/four-catalogues/order/order-statuses.ts");
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
        this.order = new app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.orderStatuses = _order_order_statuses__WEBPACK_IMPORTED_MODULE_7__["orderStatuses"];
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
            _this.order = new app_main_apps_e_commerce_order_order_model__WEBPACK_IMPORTED_MODULE_5__["Order"](order);
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
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/espace/fournisseur/four-catalogues/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/espace/fournisseur/four-catalogues/order/order.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_6__["EcommerceOrderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EcommerceOrderComponent);
    return EcommerceOrderComponent;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/order/order.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/order/order.service.ts ***!
  \***************************************************************************/
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

/***/ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/orders/orders.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orders\" class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div class=\"logo\"\r\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                    shopping_basket\r\n                </mat-icon>\r\n                <span class=\"logo-text h1\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Orders</span>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <!-- SEARCH -->\r\n            <div class=\"search-input-wrapper ml-sm-16\"\r\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <label for=\"search\" class=\"mr-8\">\r\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\r\n                </label>\r\n                <mat-form-field floatLabel=\"never\" fxFlex=\"1 0 auto\">\r\n                    <input id=\"search\" matInput #filter placeholder=\"Search\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- / SEARCH -->\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <mat-table class=\"orders-table\"\r\n                       #table [dataSource]=\"dataSource\"\r\n                       matSort\r\n                       [@animateStagger]=\"{value:'50'}\"\r\n                       fusePerfectScrollbar>\r\n\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\">\r\n                        <p class=\"text-truncate\">{{order.id}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Reference Column -->\r\n                <ng-container matColumnDef=\"reference\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Reference</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">{{order.reference}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"customer\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Customer</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\">\r\n                        <p class=\"text-truncate\">\r\n                            {{order.customer.firstName}}\r\n                            {{order.customer.lastName}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Total Price Column -->\r\n                <ng-container matColumnDef=\"total\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Total</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-md>\r\n                        <p class=\"total-price text-truncate\">\r\n                            {{order.total | currency:'USD':'symbol'}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Payment Column -->\r\n                <ng-container matColumnDef=\"payment\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Payment</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">\r\n                            {{order.payment.method}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\">\r\n                        <p class=\"status text-truncate h6 p-4\" [ngClass]=\"order.status[0].color\">\r\n                            {{order.status[0].name}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Date</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let order\" fxHide fxShow.gt-sm>\r\n                        <p class=\"text-truncate\">\r\n                            {{order.date}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\r\n\r\n                <mat-row *matRowDef=\"let order; columns: displayedColumns;\"\r\n                         class=\"order\"\r\n                         matRipple\r\n                         [routerLink]=\"'/apps/e-commerce/orders/'+order.id\">\r\n                </mat-row>\r\n            </mat-table>\r\n\r\n            <mat-paginator #paginator\r\n                           [length]=\"dataSource.filteredData.length\"\r\n                           [pageIndex]=\"0\"\r\n                           [pageSize]=\"10\"\r\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n            </mat-paginator>\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/orders/orders.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #orders > .center > .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host #orders > .center > .header {\n    margin: 24px 0;\n    height: 128px !important;\n    min-height: 128px !important;\n    max-height: 128px !important; } }\n:host .mat-tab-group,\n:host .mat-tab-body-wrapper,\n:host .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n:host .orders-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host .orders-table .mat-header-row {\n    min-height: 64px; }\n:host .orders-table .order {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .orders-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .orders-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .orders-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .orders-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .orders-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .orders-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .orders-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .orders-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/orders/orders.component.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././orders/orders.service */ "./src/app/espace/fournisseur/four-catalogues/orders/orders.service.ts");
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
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
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
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/espace/fournisseur/four-catalogues/orders/orders.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_orders_orders_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceOrdersService"]])
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

/***/ "./src/app/espace/fournisseur/four-catalogues/orders/orders.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/orders/orders.service.ts ***!
  \*****************************************************************************/
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

/***/ "./src/app/espace/fournisseur/four-catalogues/product/product.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/product/product.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-icon-button class=\"mr-0 mr-sm-16\" [routerLink]=\"'/apps/e-commerce/products'\">\r\n                    <mat-icon>arrow_back</mat-icon>\r\n                </button>\r\n\r\n                <div class=\"product-image mr-8 mr-sm-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                    <img *ngIf=\"product.images[0]\" [src]=\"product.images[0].url\">\r\n                    <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n                     [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                    <div class=\"h2\" *ngIf=\"pageType ==='edit'\">\r\n                        {{product.name}}\r\n                    </div>\r\n                    <div class=\"h2\" *ngIf=\"pageType ==='new'\">\r\n                        New Product\r\n                    </div>\r\n                    <div class=\"subtitle secondary-text\">\r\n                        <span>Product Detail</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <button mat-icon-button\r\n                    class=\"save-product-button\"\r\n                    [disabled]=\"productForm.invalid\"\r\n                    *ngIf=\"pageType ==='new'\" (click)=\"addProduct()\">\r\n                <span>ADD</span>\r\n            </button>\r\n\r\n            <button mat-icon-button\r\n                    class=\"save-product-button\"\r\n                    [disabled]=\"productForm.invalid || productForm.pristine\"\r\n                    *ngIf=\"pageType ==='edit'\" (click)=\"saveProduct()\">\r\n                <span>SAVE</span>\r\n            </button>\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <form name=\"productForm\" [formGroup]=\"productForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab label=\"Basic Info\">\r\n\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"name\"\r\n                                           formControlName=\"name\"\r\n                                           placeholder=\"Product Name\"\r\n                                           required>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <textarea matInput\r\n                                              name=\"description\"\r\n                                              formControlName=\"description\"\r\n                                              placeholder=\"Product Description\"\r\n                                              rows=\"5\">\r\n                                    </textarea>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n\r\n                                    <mat-chip-list #categoryList name=\"categories\" formControlName=\"categories\">\r\n\r\n                                        <mat-chip *ngFor=\"let category of product.categories\"\r\n                                                  [removable]=\"true\" (removed)=\"product.removeCategory(category)\">\r\n                                            {{category}}\r\n                                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                                        </mat-chip>\r\n\r\n                                        <input placeholder=\"Categories\"\r\n                                               [matChipInputFor]=\"categoryList\"\r\n                                               [matChipInputAddOnBlur]=\"true\"\r\n                                               (matChipInputTokenEnd)=\"product.addCategory($event)\"/>\r\n\r\n                                    </mat-chip-list>\r\n\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n\r\n                                    <mat-chip-list #tagList name=\"tags\" formControlName=\"tags\">\r\n\r\n                                        <mat-chip *ngFor=\"let tag of product.tags\"\r\n                                                  [removable]=\"true\" (removed)=\"product.removeTag(tag)\">\r\n                                            {{tag}}\r\n                                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                                        </mat-chip>\r\n\r\n                                        <input placeholder=\"Tags\"\r\n                                               [matChipInputFor]=\"tagList\"\r\n                                               [matChipInputAddOnBlur]=\"true\"\r\n                                               (matChipInputTokenEnd)=\"product.addTag($event)\"/>\r\n\r\n                                    </mat-chip-list>\r\n\r\n                                </mat-form-field>\r\n\r\n                            </div>\r\n\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Product Images\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n\r\n                                    <div *ngIf=\"product.images.length === 0\"\r\n                                         class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                        <img class=\"media\"\r\n                                             [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                                    </div>\r\n\r\n                                    <div *ngFor=\"let image of product.images\">\r\n                                        <div *ngIf=\"product.images.length > 0\"\r\n                                             class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                            <img class=\"media\" [src]=\"image.url\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Pricing\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"priceTaxExcl\"\r\n                                           formControlName=\"priceTaxExcl\"\r\n                                           placeholder=\"Tax Excluded Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"priceTaxIncl\"\r\n                                           formControlName=\"priceTaxIncl\"\r\n                                           placeholder=\"Tax Included Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"taxRate\"\r\n                                           formControlName=\"taxRate\"\r\n                                           placeholder=\"Tax Rate\" type=\"number\">\r\n                                    <span matPrefix>&#37;</span>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"comparedPrice\"\r\n                                           formControlName=\"comparedPrice\"\r\n                                           placeholder=\"Compared Price\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                    <mat-hint align=\"start\">Add a compare price to show next to the real price\r\n                                    </mat-hint>\r\n                                </mat-form-field>\r\n\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Inventory\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"sku\"\r\n                                           formControlName=\"sku\"\r\n                                           placeholder=\"SKU\">\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"quantity\"\r\n                                           formControlName=\"quantity\"\r\n                                           placeholder=\"Quantity\" type=\"number\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"Shipping\">\r\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar fxLayout=\"column\">\r\n\r\n                                <div class=\"py-16\" fxLayout=\"row\">\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Width\"\r\n                                               formControlName=\"width\"\r\n                                               placeholder=\"Width\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Height\"\r\n                                               formControlName=\"height\"\r\n                                               placeholder=\"Height\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field fxFlex>\r\n                                        <input matInput\r\n                                               name=\"Depth\"\r\n                                               formControlName=\"depth\"\r\n                                               placeholder=\"Depth\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"Weight\"\r\n                                           formControlName=\"weight\"\r\n                                           placeholder=\"Weight\">\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"w-100-p\">\r\n                                    <input matInput\r\n                                           name=\"extraShippingFee\"\r\n                                           formControlName=\"extraShippingFee\"\r\n                                           placeholder=\"Extra Shipping Fee\" type=\"number\">\r\n                                    <span matPrefix>$&nbsp;</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </mat-tab>\r\n\r\n                    </mat-tab-group>\r\n                </form>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/product/product.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/product/product.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .header .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #product .header .subtitle {\n  margin: 6px 0 0 0; }\n  #product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #product .content .mat-tab-body-content {\n  display: flex; }\n  #product .content .mat-tab-label {\n  height: 64px; }\n  #product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/product/product.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/product/product.component.ts ***!
  \*********************************************************************************/
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
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .././product/product.service */ "./src/app/espace/fournisseur/four-catalogues/product/product.service.ts");
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
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/espace/fournisseur/four-catalogues/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/espace/fournisseur/four-catalogues/product/product.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_product_product_service__WEBPACK_IMPORTED_MODULE_9__["EcommerceProductService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], EcommerceProductComponent);
    return EcommerceProductComponent;
}());



/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/product/product.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/product/product.service.ts ***!
  \*******************************************************************************/
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

/***/ "./src/app/espace/fournisseur/four-catalogues/products/products.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/products/products.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header\" color=\"#134ae4ba\"\r\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n            <!-- APP TITLE -->\r\n            <div class=\"logo my-12 m-sm-0\"\r\n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                    shopping_basket\r\n                </mat-icon>\r\n                <span class=\"logo-text h1\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                    Produits\r\n                </span>\r\n            </div>\r\n            <!-- / APP TITLE -->\r\n\r\n            <!-- SEARCH -->\r\n            <div class=\"search-input-wrapper mx-24 m-md-0\"\r\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <label for=\"search\" class=\"mr-8\">\r\n                    <mat-icon class=\"secondary-text\">recherche</mat-icon>\r\n                </label>\r\n                <mat-form-field floatLabel=\"never\" fxFlex=\"1 0 auto\">\r\n                    <input id=\"search\" matInput #filter placeholder=\"Recherche\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- / SEARCH -->\r\n\r\n            <!--button mat-raised-button\r\n                    [routerLink]=\"'/apps/e-commerce/products/new'\"\r\n                    class=\"add-product-button fuse-white my-12 mt-sm-0\">\r\n                <span>AJOUT + PRODUIT</span>\r\n            </button-->\r\n\t\t\t<button mat-raised-button\r\n                    class=\"add-product-button fuse-white my-12 mt-sm-0\">\r\n                <span>AJOUT + PRODUIT</span>\r\n            </button>\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <mat-table class=\"products-table\"\r\n                       #table [dataSource]=\"dataSource\"\r\n                       matSort\r\n                       [@animateStagger]=\"{value:'50'}\"\r\n                       fusePerfectScrollbar>\r\n\r\n                <!-- ID Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\">\r\n                        <p class=\"text-truncate\">{{product.id}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Image Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\">\r\n                        <img class=\"product-image\"\r\n                             *ngIf=\"product.images[0]\" [alt]=\"product.name\"\r\n                             [src]=\"product.images[0].url\"/>\r\n                        <img *ngIf=\"!product.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Nom</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\">\r\n                        <p class=\"text-truncate\">{{product.name}}</p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Category Column -->\r\n                <ng-container matColumnDef=\"category\">\r\n                    <mat-header-cell *matHeaderCellDef fxHide mat-sort-header fxShow.gt-md>Categorie</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-md>\r\n                        <p class=\"category text-truncate\">\r\n                            {{product.categories[0]}}\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Price Column -->\r\n                <ng-container matColumnDef=\"price\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Prix</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-xs>\r\n                        <!--p class=\"price text-truncate\">\r\n                            {{product.priceTaxIncl | currency:'USD':'symbol'}}\r\n                        </p-->\r\n                        <p class=\"price text-truncate\">\r\n                            {{product.priceTaxIncl}} XOF\r\n                        </p>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Quantity Column -->\r\n                <ng-container matColumnDef=\"quantity\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Quantite</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-sm>\r\n\r\n                        <span class=\"quantity-indicator text-truncate\"\r\n                              [ngClass]=\"{'red-500':product.quantity <= 5, 'amber-500':product.quantity > 5 && product.quantity <= 25,'green-600':product.quantity > 25}\">\r\n                        </span>\r\n                        <span>\r\n                            {{product.quantity}}\r\n                        </span>\r\n\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Active Column -->\r\n                <ng-container matColumnDef=\"active\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>En Stock</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let product\" fxHide fxShow.gt-xs>\r\n                        <mat-icon *ngIf=\"product.active\" class=\"active-icon green-600 s-16\">check</mat-icon>\r\n                        <mat-icon *ngIf=\"!product.active\" class=\"active-icon red-500 s-16\">close</mat-icon>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\r\n\r\n                <!--mat-row *matRowDef=\"let product; columns: displayedColumns;\"\r\n                         class=\"product\"\r\n                         matRipple\r\n                         [routerLink]=\"'/apps/e-commerce/products/'+product.id+'/'+product.handle\">\r\n                </mat-row-->\r\n\t\t\t\t<mat-row *matRowDef=\"let product; columns: displayedColumns;\"\r\n                         class=\"product\"\r\n                         matRipple\r\n                         (click)=\"crudComp.openCreateProduit()\"></mat-row>\r\n\r\n            </mat-table>\r\n\r\n            <mat-paginator #paginator\r\n                           [length]=\"dataSource.filteredData.length\"\r\n                           [pageIndex]=\"0\"\r\n                           [pageSize]=\"10\"\r\n                           [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n            </mat-paginator>\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n    </div>\r\n    <!-- / CENTER -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/products/products.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/products/products.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media (max-width: 599px) {\n  :host #products .top-bg {\n    height: 240px; } }\n:host #products > .center > .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host #products > .center > .header {\n    margin: 8px 0;\n    height: 192px !important;\n    min-height: 192px !important;\n    max-height: 192px !important; } }\n:host .products-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host .products-table .mat-header-row {\n    min-height: 64px; }\n:host .products-table .product {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .products-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .products-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .products-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .products-table .mat-column-image .product-image {\n      width: 52px;\n      height: 52px;\n      border: 1px solid rgba(0, 0, 0, 0.12); }\n:host .products-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .products-table .quantity-indicator {\n    display: inline-block;\n    vertical-align: middle;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px; }\n:host .products-table .quantity-indicator + span {\n      display: inline-block;\n      vertical-align: middle; }\n:host .products-table .active-icon {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/espace/fournisseur/four-catalogues/products/products.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/products/products.component.ts ***!
  \***********************************************************************************/
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.service */ "./src/app/espace/fournisseur/four-catalogues/products/products.service.ts");
/* harmony import */ var app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared-front/shared/crudPopups/crudPopup/crudPopup.component */ "./src/app/shared-front/shared/crudPopups/crudPopup/crudPopup.component.ts");
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
    function EcommerceProductsComponent(_ecommerceProductsService, parCrud) {
        this._ecommerceProductsService = _ecommerceProductsService;
        this.parCrud = parCrud;
        this.displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.crudComp = this.parCrud;
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
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
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
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/espace/fournisseur/four-catalogues/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/espace/fournisseur/four-catalogues/products/products.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_8__["EcommerceProductsService"], app_shared_front_shared_crudPopups_crudPopup_crudPopup_component__WEBPACK_IMPORTED_MODULE_9__["CrudPopupComponent"]])
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

/***/ "./src/app/espace/fournisseur/four-catalogues/products/products.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/fournisseur/four-catalogues/products/products.service.ts ***!
  \*********************************************************************************/
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
//# sourceMappingURL=espace-fournisseur-four-catalogues-fournisseur-catalogues-module.js.map