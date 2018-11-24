(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["espace-acheteur-shopping-shopping-module"],{

/***/ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .zoom-dialog .mat-dialog-container .controls {\n    position: relative; }\n  .zoom-dialog .mat-dialog-container .controls button {\n      position: absolute;\n      top: -44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-in {\n      right: 44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-out {\n      right: 0; }\n  .zoom-dialog .mat-dialog-container .controls .close {\n      right: -44px; }\n  .zoom-dialog .mat-dialog-container .viewer {\n    width: 100%;\n    text-align: center; }\n  .zoom-dialog .mat-dialog-container .viewer img {\n      max-width: 60%; }\n"

/***/ }),

/***/ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.ts ***!
  \*********************************************************************************/
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
            template: __webpack_require__(/*! ./produit-zoom.component.html */ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.html"),
            styles: [__webpack_require__(/*! ./produit-zoom.component.scss */ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProduitZoomComponent);
    return ProduitZoomComponent;
}());



/***/ }),

/***/ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n\r\n    <mat-card class=\"product-image\">\r\n      <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md>\r\n        <mat-icon>fullscreen</mat-icon>\r\n      </button>\r\n      <img *ngIf=\"image\" [src]=\"image\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" />\r\n    </mat-card>\r\n\r\n    <div class=\"small-carousel\">\r\n      <div class=\"swiper-container\" [swiper]=\"config\">\r\n        <div class=\"swiper-wrapper\">\r\n          <div *ngFor=\"let image of product?.images\" class=\"swiper-slide\">\r\n            <mat-card (click)=\"selectImage(image)\" class=\"p-1\">\r\n              <img [attr.data-src]=\"image.small\" class=\"swiper-lazy\" />\r\n              <div class=\"swiper-lazy-preloader\"></div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n          <mat-icon>keyboard_arrow_left</mat-icon>\r\n        </button>\r\n        <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"20\" class=\"ml-4\" fxFlex.md=\"30\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n    <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n      <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n    </div>\r\n\r\n    <h2>Rating breakdown:</h2>\r\n    <div class=\"py-1 lh \">\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">5</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"100\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">4</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"75\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">4</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"50\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">3</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"25\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">2</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"15\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">1</label>\r\n        <label class=\"example-margin\">\r\n          <mat-icon>star</mat-icon>\r\n        </label>\r\n        <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"Determinate\" value=\"5\" bufferValue=\"100\">\r\n        </mat-progress-bar>\r\n      </section>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"py-1 pt-4 pl-5 ml-5\" style=\"margin-left:10%\">\r\n      <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          <div>\r\n            <mat-icon>visibility</mat-icon>\r\n          </div>\r\n          <div>\r\n            352\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          <div>\r\n            <mat-icon>thumb_up_alt</mat-icon>\r\n          </div>\r\n          <div>\r\n            60\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n          <div>\r\n            <mat-icon>thumb_down_alt</mat-icon>\r\n          </div>\r\n          <div>\r\n            60\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"py-1 mt-4 p-5\" style=\"margin-left:10%\">\r\n      <app-rating [ratingsCount]=\"product?.ratingsCount\" [ratingsValue]=\"product?.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n    </div>\r\n    <!-- <div class=\"py-1 mt-4\">\r\n      <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n    </div> -->\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"40\" class=\"ml-4\" fxFlex.md=\"45\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n    <div #zoomViewer fxShow=\"false\" fxShow.gt-md>\r\n      <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\"></mat-card>\r\n    </div>\r\n\r\n    <h2>Details Informations</h2>\r\n    <div class=\"py-1 lh \">\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"60px\">\r\n        <div>\r\n          <section class=\"example-section\">\r\n            <label class=\"example-margin\">\r\n              <h3>Nom :</h3>\r\n            </label>\r\n            <label class=\"example-margin\">\r\n              Clavier retro\r\n            </label>\r\n          </section>\r\n          <section class=\"example-section\">\r\n            <label class=\"example-margin\">\r\n              <h3>Prix :</h3>\r\n            </label>\r\n            <label class=\"example-margin\">\r\n              4500\r\n            </label>\r\n          </section>\r\n          <section class=\"example-section\">\r\n            <label class=\"example-margin\">\r\n              <h3>Fournisseur :</h3>\r\n            </label>\r\n            <label class=\"example-margin\">\r\n              AMD\r\n            </label>\r\n          </section>\r\n          <section class=\"example-section\">\r\n            <label class=\"example-margin\">\r\n              <h3>Quantité en stock :</h3>\r\n            </label>\r\n            <label class=\"example-margin\">\r\n              45\r\n            </label>\r\n          </section>\r\n        </div>\r\n        <div>\r\n          <h3>Modalité livraison</h3>\r\n          <div>livraison prévue : <span style=\"color:red\">entre le 09/08 et le 13/08</span> </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"py-1 lh pt-4\" style=\"margin-left:1%\">\r\n      <mat-divider></mat-divider>\r\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n        <h2>Choix modeles et quantité</h2>\r\n        <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      <h2>Modalité de paiement</h2>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"60px\" fxLayout.xs=\"column\">\r\n        <div><button mat-raised-button color=\"primary\">Wari</button></div>\r\n        <div><button mat-raised-button color=\"accent\">Orange money</button></div>\r\n        <div><button mat-raised-button color=\"warn\">Tigo cash</button></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"mt-2\">\r\n  <h2>&nbsp; Articles similaires</h2>\r\n  <div class=\"divider\"></div>\r\n  <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n</div>"

/***/ }),

/***/ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 1, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n.mat-card.product-image img {\n    max-width: 100%; }\n.small-carousel {\n  margin-top: 8px; }\n.small-carousel .swiper-container {\n    padding: 2px; }\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n.small-carousel .swiper-container .swiper-slide img {\n        max-width: 100%; }\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n.small-carousel .swiper-button-next {\n    right: -10px; }\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n.mt-16 {\n  margin-top: 16px; }\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n.full-desc {\n  padding: 30px 40px; }\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url(\"https://nhova2.github.io/gateway/assets/images/others/zoom.svg\") 10 10, zoom-in; } }\n.filter-sidenav {\n  box-shadow: 0px 7px 5px #555; }\n.example-margin {\n  margin: 0 10px; }\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 25px; }\n"

/***/ }),

/***/ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ShoppingAcheteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingAcheteurComponent", function() { return ShoppingAcheteurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _front_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../front/app.service */ "./src/app/front/app.service.ts");
/* harmony import */ var _front_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../front/theme/utils/app-validators */ "./src/app/front/theme/utils/app-validators.ts");
/* harmony import */ var _produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../produit-zoom/produit-zoom.component */ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShoppingAcheteurComponent = /** @class */ (function () {
    function ShoppingAcheteurComponent(appService, activatedRoute, dialog, formBuilder) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.viewCol = 25;
        this.config = {};
    }
    ShoppingAcheteurComponent.prototype.ngOnInit = function () {
        /* this.sub = this.activatedRoute.params.subscribe(params => { */
        this.getProductById(1);
        /* }); */
        this.form = this.formBuilder.group({
            'review': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _front_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]])]
        });
        this.getRelatedProducts();
    };
    ShoppingAcheteurComponent.prototype.ngAfterViewInit = function () {
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
    ShoppingAcheteurComponent.prototype.getProductById = function (id) {
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
    ShoppingAcheteurComponent.prototype.getRelatedProducts = function () {
        var _this = this;
        this.appService.getProducts('related').subscribe(function (data) {
            _this.relatedProducts = data;
        });
    };
    ShoppingAcheteurComponent.prototype.selectImage = function (image) {
        this.image = image.medium;
        this.zoomImage = image.big;
    };
    ShoppingAcheteurComponent.prototype.onMouseMove = function (e) {
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
    ShoppingAcheteurComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    };
    ShoppingAcheteurComponent.prototype.openZoomViewer = function () {
        this.dialog.open(_produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProduitZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], ShoppingAcheteurComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
    ], ShoppingAcheteurComponent.prototype, "directiveRef", void 0);
    ShoppingAcheteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-acheteur',
            template: __webpack_require__(/*! ./shopping-acheteur.component.html */ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.html"),
            styles: [__webpack_require__(/*! ./shopping-acheteur.component.scss */ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.scss")]
        }),
        __metadata("design:paramtypes", [_front_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ShoppingAcheteurComponent);
    return ShoppingAcheteurComponent;
}());



/***/ }),

/***/ "./src/app/espace/acheteur/shopping/shopping.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/espace/acheteur/shopping/shopping.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shopping_acheteur_shopping_acheteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-acheteur/shopping-acheteur.component */ "./src/app/espace/acheteur/shopping/shopping-acheteur/shopping-acheteur.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-front/shared/shared.module */ "./src/app/shared-front/shared/shared.module.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produit-zoom/produit-zoom.component */ "./src/app/espace/acheteur/shopping/produit-zoom/produit-zoom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _shopping_acheteur_shopping_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingAcheteurComponent"], pathMatch: 'full' }
];
var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _shared_front_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            declarations: [_shopping_acheteur_shopping_acheteur_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingAcheteurComponent"], _produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_8__["ProduitZoomComponent"]],
            entryComponents: [
                _produit_zoom_produit_zoom_component__WEBPACK_IMPORTED_MODULE_8__["ProduitZoomComponent"]
            ]
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ })

}]);
//# sourceMappingURL=espace-acheteur-shopping-shopping-module.js.map