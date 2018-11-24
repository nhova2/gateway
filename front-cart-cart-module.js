(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-cart-cart-module"],{

/***/ "./src/app/front/cart/cart-details/cart-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/front/cart/cart-details/cart-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100\" class=\"px-24 py-8\">\r\n  <div class=\"page-layout carded left-sidebar\">\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n      <!-- CONTENT CARD -->\r\n      <div class=\"content-card\">\r\n        <!-- CONTENT TOOLBAR -->\r\n        <div class=\"toolbar px-24 py-8\">\r\n          <span>\r\n            <h1 style=\"font-weight: bold\">Panier</h1>\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"appService.Data.cartList.length != 0\">\r\n          <mat-chip-list>\r\n            <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</mat-chip>\r\n          </mat-chip-list>\r\n          <a [routerLink]=\"['/']\" mat-raised-button color=\"primary\" class=\"mt-2\">Continue shopping</a>\r\n        </div>\r\n        <mat-card class=\"p-0\">\r\n          <div class=\"mat-table cart-table\">\r\n            <div class=\"mat-header-row\">\r\n              <div class=\"mat-header-cell\">\r\n                <img src=\"assets/images/Panier/FineTech_PS_Elmt_Panier_Reacp_Icon.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"mat-header-cell\" style=\"margin-top: -1.8%;\">\r\n                <p class=\"countproduct\">001</p>\r\n                <p class=\"products\">Produits</p>\r\n              </div>\r\n              <div class=\"mat-header-cell productpolice\">Nom</div>\r\n              <div class=\"mat-header-cell productpolice\">Prix</div>\r\n              <div class=\"mat-header-cell productpolice\">Total</div>\r\n              <div class=\"mat-header-cell text-center\">\r\n                <div class=\"px-1\">\r\n                  <button mat-raised-button color=\"warn\" (click)=\"clear()\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">Effacer Tout</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"mat-row\">\r\n              <div class=\"mat-cell\">\r\n                <img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n\r\n                <button (click)=\"decrement()\" class=\"counter-minus btn btn-primary\">-</button>\r\n\r\n                <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n\r\n                <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\">+</button>\r\n              </div>\r\n              <div class=\"mat-cell nameproduct\">\r\n                <!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n              <div class=\"mat-cell firstprice\">1000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n\r\n              <div class=\"mat-cell totalprice\">1000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n              <div class=\"mat-cell text-center\">\r\n                <div class=\"p-1\">\r\n                  <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"mat-row\">\r\n              <div class=\"mat-cell\">\r\n                <img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n\r\n                <button (click)=\"decrement()\" class=\"counter-minus btn btn-primary\">-</button>\r\n\r\n                <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n\r\n                <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\">+</button>\r\n              </div>\r\n              <div class=\"mat-cell nameproduct\">\r\n                <!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n              <div class=\"mat-cell firstprice\">5000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n\r\n              <div class=\"mat-cell totalprice\">5000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n              <div class=\"mat-cell text-center\">\r\n                <div class=\"p-1\">\r\n                  <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"mat-row\">\r\n              <div class=\"mat-cell\">\r\n                <img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n\r\n                <button (click)=\"decrement()\" class=\"counter-minus btn btn-primary\">-</button>\r\n\r\n                <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n\r\n                <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\">+</button>\r\n              </div>\r\n              <div class=\"mat-cell nameproduct\">\r\n                <!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n              <div class=\"mat-cell firstprice\">8000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n\r\n              <div class=\"mat-cell totalprice\">8000\r\n                <SUP class=\"expo\">XOF</SUP>\r\n              </div>\r\n              <div class=\"mat-cell text-center\">\r\n                <div class=\"p-1\">\r\n                  <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n        <div class=\"px-24 py-8\" fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <div fxFlex=\"70\" fxLayout=\"column\">\r\n            <span class=\"toolbar px-24 py-8\">\r\n              <h1 style=\"font-weight: bold\">INFORMATIONS DE PAIEMENT</h1>\r\n            </span>\r\n            <fieldset>\r\n              <legend>RECAPITULATIF COMMANDE</legend>\r\n              <div fxLayout=\"row\" class=\"px-24 py-8\">\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">Montant Hors Taxe</span>\r\n                </div>\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">14 000\r\n                    <SUP class=\"expo\">XOF</SUP>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n              <div fxLayout=\"row\" class=\"px-24 py-8\">\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">Montant Tva</span>\r\n                </div>\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">5 000\r\n                    <SUP class=\"expo\">XOF</SUP>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n              <div fxLayout=\"row\" class=\"px-24 py-8\">\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">Montant TTC</span>\r\n                </div>\r\n                <div fxFlex=\"50\">\r\n                  <span class=\"firstprice\">16 000\r\n                    <SUP class=\"expo\">XOF</SUP>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n            <div fxLayout=\"row\" class=\"px-24 py-8\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Code promotionnel\">\r\n              </mat-form-field>\r\n            </div>\r\n            \r\n              <fieldset>\r\n                <legend>Mode paiement</legend>\r\n                <div class=\"px-24 py-8\">\r\n                  <div fxLayout=\"row\" class=\"px-24 py-8\" fxLayoutGap=\"100px\">\r\n                    <div fxFlex=\"50\"><mat-slide-toggle><img src=\"assets/\" alt=\"\"> ORANGE MONEY</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>TIGO CASH</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>WARI</mat-slide-toggle></div>\r\n                  </div>\r\n                  <div fxLayout=\"row\" class=\"px-24 py-8\" fxLayoutGap=\"100px\">\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>MASTER CARD</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>VISA</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>CAISSE</mat-slide-toggle></div>\r\n                  </div>\r\n                  <div fxLayout=\"row\" class=\"px-24 py-8\" fxLayoutGap=\"100px\">\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>A LA LIVRAISON</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\"><mat-slide-toggle>PRET</mat-slide-toggle></div>\r\n                    <div fxFlex=\"50\">&nbsp;</div>\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n            <button mat-raised-button color=\"primary\" style=\"width:50%; margin-top:2%\">Valider Le Paimement</button>\r\n          </div>\r\n          <div fxFlex=\"30\" fxLayout=\"column\">\r\n            <span class=\"toolbar px-24 py-8\">\r\n              <h1 style=\"font-weight: bold\">ADRESSE DE LIVRAISON</h1>\r\n            </span>     \r\n              <mat-card>\r\n                <mat-card-content>\r\n                  <div fxLayout=\"column\" fxLayoutGap=\"1px\">\r\n                    <div fxLayout=\"column\" style=\"box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\r\n                                    padding: 1%;\r\n                                    text-decoration: none;\r\n                                    background-color: #9A3838;\r\n                                    color: white;\">\r\n                      <div>p A Domicile</div>\r\n                      <div>Jean Marc Dupont</div>\r\n                      <div>2 rue Pierre expert</div>\r\n                      <div>92700 Colombie</div>\r\n                      <div>Telephone: 0689585447</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"py-8\"><button mat-raised-button color=\"primary\">Modifier</button></div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            <span class=\"toolbar px-24 py-8\">\r\n              <h1 style=\"font-weight: bold\">TYPE DE LIVRAISON</h1>\r\n            </span>\r\n            <div fxLayout=\"column\" class=\"px-24 py-8\" fxLayoutGap=\"30px\" style=\"box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0,\r\n            0, 0.12); padding: 1%; text-decoration: none;\">\r\n              <div class=\"firstprice\"><mat-slide-toggle>La Poste</mat-slide-toggle></div>\r\n              <div class=\"firstprice\"><mat-slide-toggle>Point de Retrait</mat-slide-toggle></div>\r\n              <div class=\"firstprice\"><mat-slide-toggle>Agent Livreur</mat-slide-toggle></div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      <!-- / CONTENT CARD -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/front/cart/cart-details/cart-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/front/cart/cart-details/cart-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .cart-table.mat-table .mat-row,\n  .cart-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .cart-table.mat-table .mat-row {\n    /* min-height: 100px; */ }\n  .cart-table.mat-table .mat-cell,\n  .cart-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word; }\n  .cart-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .cart-table.mat-table .mat-cell img {\n    width: 100px; }\n  .cart-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total {\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total span:nth-child(3) {\n      font-size: 16px; }\n  .cart-table.mat-table .mat-cell .handle-counter {\n    overflow: hidden; }\n  .cart-table.mat-table .mat-cell .handle-counter .counter-minus,\n  .cart-table.mat-table .mat-cell .handle-counter .counter-plus,\n  .cart-table.mat-table .mat-cell .handle-counter input {\n    float: left;\n    text-align: center; }\n  .cart-table.mat-table .mat-cell .handle-counter .counter-minus,\n  .cart-table.mat-table .mat-cell .handle-counter .counter-plus {\n    text-align: center; }\n  .cart-table.mat-table .mat-cell .handle-counter input {\n    width: 14%;\n    border-width: 1px;\n    border-left: none;\n    border-right: none; }\n  .cart-table.mat-table .mat-cell .btn {\n    padding: 6px 12px;\n    border: 1px solid transparent;\n    color: #DC0030; }\n  .cart-table.mat-table .mat-cell .btn:disabled,\n  .cart-table.mat-table .mat-cell .btn:disabled:hover {\n    background-color: darkgrey;\n    cursor: not-allowed; }\n  .cart-table.mat-table .mat-cell .btn-primary {\n    background-color: #F8F8F8; }\n  .cart-table.mat-table .mat-cell .btn-primary:hover,\n  .cart-table.mat-table .mat-cell .btn-primary:focus {\n    background-color: #F8F8F8; }\n  .cart-table.mat-table .firstprice {\n    color: #2a2a2a;\n    font-weight: bold;\n    font-size: 18pt; }\n  .cart-table.mat-table .nameproduct {\n    color: #2a2a2a;\n    font-weight: 600;\n    font-size: 18pt; }\n  .cart-table.mat-table .totalprice {\n    color: #2a2a2a;\n    font-weight: bold;\n    font-size: 18pt; }\n  .cart-table.mat-table .expo {\n    color: #be1616;\n    font-weight: 500;\n    font-size: 12pt; }\n  .cart-table.mat-table .countproduct {\n    font-weight: bold;\n    font-size: 39.73pt;\n    color: #DC0030; }\n  .cart-table.mat-table .products {\n    margin-top: -26%;\n    margin-left: 44%;\n    color: #6b6b6b;\n    font-weight: 500;\n    font-size: 17.48pt; }\n  .cart-table.mat-table .productpolice {\n    color: #6b6b6b;\n    font-weight: 500;\n    font-size: 17.48pt; }\n  .toolbar {\n  background-color: #dadad2; }\n  .expo {\n  color: #be1616;\n  font-weight: 500;\n  font-size: 12pt; }\n  .firstprice {\n  color: #2a2a2a;\n  font-weight: bold;\n  font-size: 15pt; }\n"

/***/ }),

/***/ "./src/app/front/cart/cart-details/cart-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/front/cart/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _front_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../front/app.service */ "./src/app/front/app.service.ts");
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



var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(appService) {
        this.appService = appService;
        this.counter = 0;
        this.product = "empty";
        this.displayedColumns = ['product', 'name', 'price', 'quantity'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.total = [];
        this.grandTotal = 0;
    }
    CartDetailsComponent.prototype.increment = function () {
        this.counter += 1;
    };
    CartDetailsComponent.prototype.decrement = function () {
        this.counter -= 1;
    };
    CartDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.Data.cartList.forEach(function (product) {
            _this.total[product.id] = product.newPrice;
            _this.grandTotal += product.newPrice;
        });
    };
    CartDetailsComponent.prototype.getTotalPrice = function (value) {
        var _this = this;
        if (value) {
            this.total[value.productId] = value.total;
            this.grandTotal = 0;
            this.total.forEach(function (price) {
                _this.grandTotal += price;
            });
        }
    };
    CartDetailsComponent.prototype.remove = function (product) {
        var _this = this;
        var index = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.grandTotal = this.grandTotal - this.total[product.id];
            this.total.forEach(function (val) {
                if (val == _this.total[product.id]) {
                    _this.total[product.id] = 0;
                }
            });
        }
    };
    CartDetailsComponent.prototype.clear = function () {
        this.appService.Data.cartList.length = 0;
    };
    CartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-details',
            template: __webpack_require__(/*! ./cart-details.component.html */ "./src/app/front/cart/cart-details/cart-details.component.html"),
            styles: [__webpack_require__(/*! ./cart-details.component.scss */ "./src/app/front/cart/cart-details/cart-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_front_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());

var ELEMENT_DATA = [
    { product: '1', name: 'John', price: 100, quantity: 1 },
    { product: '1', name: 'Mike', price: 100, quantity: 1 },
    { product: '1', name: 'Ricky', price: 100, quantity: 1 },
    { product: '1', name: 'Martin', price: 100, quantity: 1 },
    { product: '1', name: 'Tom', price: 100, quantity: 1 }
];


/***/ }),

/***/ "./src/app/front/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/front/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"column\" fxFlex=\"100\" class=\"px-24 py-8\">\r\n  <div class=\"page-layout carded left-sidebar\">\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n      <!-- CONTENT CARD -->\r\n      <div class=\"content-card\">\r\n          <!-- CONTENT TOOLBAR -->\r\n          <div class=\"toolbar px-24 py-8\">\r\n            <span>\r\n              <h1 style=\"font-weight: bold\">Panier</h1>\r\n            </span>\r\n\r\n          </div>\r\n          <div *ngIf=\"appService.Data.cartList.length != 0\">\r\n            <mat-chip-list>\r\n                <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</mat-chip>\r\n            </mat-chip-list>\r\n            <a [routerLink]=\"['/']\" mat-raised-button color=\"primary\" class=\"mt-2\">Continue shopping</a>\r\n          </div>\r\n          <mat-card class=\"p-0\">\r\n            <div class=\"mat-table cart-table\">\r\n              <div class=\"mat-header-row\">\r\n                <div class=\"mat-header-cell\"><img src=\"assets/images/Panier/FineTech_PS_Elmt_Panier_Reacp_Icon.png\" alt=\"\"></div>\r\n                <div class=\"mat-header-cell\" style=\"margin-top: -1.8%;\"><p class=\"countproduct\">001</p><p class=\"products\">Produits</p></div>\r\n                <div class=\"mat-header-cell productpolice\">Nom</div>\r\n                <div class=\"mat-header-cell productpolice\">Prix</div>      \r\n                <div class=\"mat-header-cell productpolice\">Total</div>\r\n                <div class=\"mat-header-cell text-center\">\r\n                  <div class=\"px-1\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"clear()\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">Effacer Tout</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"mat-row\">\r\n                <div class=\"mat-cell\"><img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\"></div>\r\n                <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                  <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n                \r\n                  <button  (click)=\"decrement()\" class=\"counter-minus btn btn-primary\" >-</button>\r\n                \r\n                  <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n                \r\n                  <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\" >+</button>\r\n                </div>\r\n                <div class=\"mat-cell nameproduct\"><!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n                <div class=\"mat-cell firstprice\">1000<SUP class=\"expo\">XOF</SUP></div>      \r\n                \r\n                <div class=\"mat-cell totalprice\">1000<SUP class=\"expo\">XOF</SUP></div>\r\n                <div class=\"mat-cell text-center\">\r\n                  <div class=\"p-1\">\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"mat-row\">\r\n                <div class=\"mat-cell\"><img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\"></div>\r\n                <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                  <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n                \r\n                  <button  (click)=\"decrement()\" class=\"counter-minus btn btn-primary\" >-</button>\r\n                \r\n                  <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n                \r\n                  <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\" >+</button>\r\n                </div>\r\n                <div class=\"mat-cell nameproduct\"><!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n                <div class=\"mat-cell firstprice\">5000<SUP class=\"expo\">XOF</SUP></div>      \r\n                \r\n                <div class=\"mat-cell totalprice\">5000<SUP class=\"expo\">XOF</SUP></div>\r\n                <div class=\"mat-cell text-center\">\r\n                  <div class=\"p-1\">\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"mat-row\">\r\n                <div class=\"mat-cell\"><img src=\"assets/images/Panier/Panier_Produit.jpg\" alt=\"\"></div>\r\n                <div class=\"mat-cell handle-counter\" id=\"handleCounter\">\r\n                  <!-- <app-controls [product]=\"product\" [type]=\"'wish'\" (onQuantityChange)=\"getTotalPrice($event)\"></app-controls> -->\r\n                \r\n                  <button  (click)=\"decrement()\" class=\"counter-minus btn btn-primary\" >-</button>\r\n                \r\n                  <input type=\"text\" value=\"{{counter}} \" style=\"width:11%; padding: 1.5%\">\r\n                \r\n                  <button (click)=\"increment()\" class=\"counter-plus btn btn-primary\" >+</button>\r\n                </div>\r\n                <div class=\"mat-cell nameproduct\"><!--<a [routerLink]=\"['/products', product.id, product.name]\" class=\"product-name\">{{product.name}}</a>-->Nom</div>\r\n                <div class=\"mat-cell firstprice\">8000<SUP class=\"expo\">XOF</SUP></div>      \r\n                \r\n                <div class=\"mat-cell totalprice\">8000<SUP class=\"expo\">XOF</SUP></div>\r\n                <div class=\"mat-cell text-center\">\r\n                  <div class=\"p-1\">\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"remove(product)\" matTooltip=\"Clear\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"mat-row\">\r\n                <div class=\"mat-cell\"><a [routerLink]=\"['/cart','details-cart']\" mat-raised-button color=\"primary\" style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\">Continuer Achat</a></div>\r\n                <div class=\"mat-cell\"></div>\r\n                <div class=\"mat-cell\"></div>\r\n                <div class=\"mat-cell text-right\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center end\" class=\"grand-total px-2\">\r\n                    <span>Sous Total:</span>\r\n                    <span class=\"text-muted\">Frais de livraison:</span>\r\n                    <span class=\"new-price\">Total:</span>\r\n                  </div>        \r\n                </div>\r\n                <div class=\"mat-cell\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"grand-total\">\r\n                    <span>${{ grandTotal | number : '1.2-2'}}</span>\r\n                    <span class=\"text-muted\">15%</span>\r\n                    <span class=\"new-price\">${{ (grandTotal - (grandTotal*0.15)) | number : '1.2-2'}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mat-cell text-center\"><a mat-raised-button style=\"background-color:#2A2A2A; color: #F8F8F8; font-weight: 500; font-size: 15pt\" >Passer Commande</a></div>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n      </div>\r\n      <!-- / CONTENT CARD -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n \r\n  "

/***/ }),

/***/ "./src/app/front/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/front/cart/cart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .cart-table.mat-table .mat-row, .cart-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .cart-table.mat-table .mat-row {\n    min-height: 100px; }\n  .cart-table.mat-table .mat-cell, .cart-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word; }\n  .cart-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .cart-table.mat-table .mat-cell img {\n    width: 100px; }\n  .cart-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total {\n    font-weight: 500; }\n  .cart-table.mat-table .mat-cell .grand-total span:nth-child(3) {\n      font-size: 16px; }\n  .cart-table.mat-table .mat-cell .handle-counter {\n    overflow: hidden; }\n  .cart-table.mat-table .mat-cell .handle-counter .counter-minus, .cart-table.mat-table .mat-cell .handle-counter .counter-plus, .cart-table.mat-table .mat-cell .handle-counter input {\n    float: left;\n    text-align: center; }\n  .cart-table.mat-table .mat-cell .handle-counter .counter-minus, .cart-table.mat-table .mat-cell .handle-counter .counter-plus {\n    text-align: center; }\n  .cart-table.mat-table .mat-cell .handle-counter input {\n    width: 14%;\n    border-width: 1px;\n    border-left: none;\n    border-right: none; }\n  .cart-table.mat-table .mat-cell .btn {\n    padding: 6px 12px;\n    border: 1px solid transparent;\n    color: #DC0030; }\n  .cart-table.mat-table .mat-cell .btn:disabled, .cart-table.mat-table .mat-cell .btn:disabled:hover {\n    background-color: darkgrey;\n    cursor: not-allowed; }\n  .cart-table.mat-table .mat-cell .btn-primary {\n    background-color: #F8F8F8; }\n  .cart-table.mat-table .mat-cell .btn-primary:hover, .cart-table.mat-table .mat-cell .btn-primary:focus {\n    background-color: #F8F8F8; }\n  .cart-table.mat-table .firstprice {\n    color: #2a2a2a;\n    font-weight: bold;\n    font-size: 35pt; }\n  .cart-table.mat-table .nameproduct {\n    color: #2a2a2a;\n    font-weight: 600;\n    font-size: 29.06pt; }\n  .cart-table.mat-table .totalprice {\n    color: #2a2a2a;\n    font-weight: bold;\n    font-size: 35pt; }\n  .cart-table.mat-table .expo {\n    color: #6b6b6b;\n    font-weight: 500;\n    font-size: 12pt; }\n  .cart-table.mat-table .countproduct {\n    font-weight: bold;\n    font-size: 39.73pt;\n    color: #DC0030; }\n  .cart-table.mat-table .products {\n    margin-top: -26%;\n    margin-left: 44%;\n    color: #6b6b6b;\n    font-weight: 500;\n    font-size: 17.48pt; }\n  .cart-table.mat-table .productpolice {\n    color: #6b6b6b;\n    font-weight: 500;\n    font-size: 17.48pt; }\n"

/***/ }),

/***/ "./src/app/front/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/front/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _front_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../front/app.service */ "./src/app/front/app.service.ts");
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



var CartComponent = /** @class */ (function () {
    function CartComponent(appService) {
        this.appService = appService;
        this.counter = 0;
        this.product = "empty";
        this.displayedColumns = ['product', 'name', 'price', 'quantity'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.total = [];
        this.grandTotal = 0;
    }
    CartComponent.prototype.increment = function () {
        this.counter += 1;
    };
    CartComponent.prototype.decrement = function () {
        this.counter -= 1;
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.Data.cartList.forEach(function (product) {
            _this.total[product.id] = product.newPrice;
            _this.grandTotal += product.newPrice;
        });
    };
    CartComponent.prototype.getTotalPrice = function (value) {
        var _this = this;
        if (value) {
            this.total[value.productId] = value.total;
            this.grandTotal = 0;
            this.total.forEach(function (price) {
                _this.grandTotal += price;
            });
        }
    };
    CartComponent.prototype.remove = function (product) {
        var _this = this;
        var index = this.appService.Data.cartList.indexOf(product);
        if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.grandTotal = this.grandTotal - this.total[product.id];
            this.total.forEach(function (val) {
                if (val == _this.total[product.id]) {
                    _this.total[product.id] = 0;
                }
            });
        }
    };
    CartComponent.prototype.clear = function () {
        this.appService.Data.cartList.length = 0;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/front/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/front/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_front_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CartComponent);
    return CartComponent;
}());

var ELEMENT_DATA = [
    { product: '1', name: 'John', price: 100, quantity: 1 },
    { product: '1', name: 'Mike', price: 100, quantity: 1 },
    { product: '1', name: 'Ricky', price: 100, quantity: 1 },
    { product: '1', name: 'Martin', price: 100, quantity: 1 },
    { product: '1', name: 'Tom', price: 100, quantity: 1 }
];


/***/ }),

/***/ "./src/app/front/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/front/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: routes, CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.component */ "./src/app/front/cart/cart.component.ts");
/* harmony import */ var _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-details/cart-details.component */ "./src/app/front/cart/cart-details/cart-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], pathMatch: 'full' },
    { path: 'details-cart', component: _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_5__["CartDetailsComponent"], pathMatch: 'full' }
];
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
                _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_5__["CartDetailsComponent"]
            ]
        })
    ], CartModule);
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=front-cart-cart-module.js.map