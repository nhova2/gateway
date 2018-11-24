(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./src/app/main/documentation/components/cards/cards.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/documentation/components/cards/cards.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cards\" class=\"page-layout simple fullwidth\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Cards</div>\n        </div>\n\n        <div>\n            <mat-slide-toggle color=\"primary\" (change)=\"toggleView()\">\n                View Source\n            </mat-slide-toggle>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" [ngClass]=\"this.view\">\n\n        <div class=\"cards\">\n\n            <!-- CARD 1 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card1.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card1.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 1 -->\n\n            <!-- CARD 2 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card1.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">SHARE</button>\n                            <button mat-button color=\"accent\">EXPLORE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card1.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                    <button mat-button color=\"accent\">EXPLORE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 2 -->\n\n            <!-- CARD 3 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 3 -->\n\n            <!-- CARD 4 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card indigo\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            All cards can be mixed with Fuse Color Classes to have different colors. This greatly\n                            increases the unique variations of all cards. Cards provide context and an entry point to\n                            more robust information and views, and their content and quantity can vary greatly.\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button>SHARE</button>\n                            <button mat-button>EXPLORE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card indigo\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    All cards can be mixed with Fuse Color Classes to have different colors. This\n                                    greatly increases the unique variations of all cards. Cards provide context and an\n                                    entry point to more robust information and views, and their content and quantity can\n                                    vary greatly.\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button>SHARE</button>\n                                    <button mat-button>EXPLORE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 4 -->\n\n            <!-- CARD 5 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card1.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card1.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 5 -->\n\n            <!-- CARD 6 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card1.jpg\">\n\n                        <div class=\"p-16 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card1.jpg\">\n\n                                <div class=\"p-16 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 6 -->\n\n            <!-- CARD 7 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"position-relative\">\n                            <img src=\"assets/images/cards/card3.jpg\">\n                            <div class=\"position-absolute font-size-20 white-fg p-16 align-left align-bottom\">\n                                Top 10 Holiday Locations\n                            </div>\n                        </div>\n\n                        <div class=\"p-16\">\n                            <div class=\"h4 secondary-text\">Number 10</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards are a convenient means of displaying content composed of different elements.\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">SHARE</button>\n                            <button mat-button color=\"accent\">EXPLORE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"position-relative\">\n                                    <img src=\"assets/images/cards/card3.jpg\">\n                                    <div class=\"position-absolute font-size-20 white-fg p-16 align-left align-bottom\">\n                                        Top 10 Holiday Locations\n                                    </div>\n                                </div>\n\n                                <div class=\"p-16\">\n                                    <div class=\"h4 secondary-text\">Number 10</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards are a convenient means of displaying content composed of different elements.\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                    <button mat-button color=\"accent\">EXPLORE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 7 -->\n\n            <!-- CARD 8 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                            <div class=\"pr-16\">\n                                <div class=\"h4 secondary-text\">Travel</div>\n                                <div class=\"h1\">Big City Life</div>\n                            </div>\n\n                            <div class=\"w-80 h-80\">\n                                <img src=\"assets/images/cards/card2-small.jpg\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">READ</button>\n                            <button mat-button color=\"accent\">SHARE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                                    <div class=\"pr-16\">\n                                        <div class=\"h4 secondary-text\">Travel</div>\n                                        <div class=\"h1\">Big City Life</div>\n                                    </div>\n\n                                    <div class=\"w-80 h-80\">\n                                        <img src=\"assets/images/cards/card2-small.jpg\">\n                                    </div>\n\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">READ</button>\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 8 -->\n\n            <!-- CARD 9 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card3.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Top Winter Locations</div>\n                            <div class=\"h4 secondary-text\">More than 200 locations</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <button mat-button color=\"accent\">SHARE</button>\n                                <button mat-button color=\"accent\">EXPLORE</button>\n                            </div>\n\n                            <button mat-icon-button aria-label=\"expand card\"\n                                    (click)=\"card9Expanded = !card9Expanded\">\n                                <mat-icon *ngIf=\"card9Expanded\">keyboard_arrow_up</mat-icon>\n                                <mat-icon *ngIf=\"!card9Expanded\">keyboard_arrow_down</mat-icon>\n                            </button>\n                        </div>\n\n                        <div class=\"card-expand-area\" *ngIf=\"card9Expanded\" [@expandCollapse]>\n                            <div class=\"card-expanded-content\">\n                                Card content that exceeds the maximum card height is truncated and does not scroll, but\n                                the card can be expanded. Once expanded, the card may exceed the maximum height of the\n                                view. In this case, the card will scroll with the card collection.\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card3.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Top Winter Locations</div>\n                                    <div class=\"h4 secondary-text\">More than 200 locations</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their\n                                    content and quantity can vary greatly.\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <button mat-button color=\"accent\">SHARE</button>\n                                        <button mat-button color=\"accent\">EXPLORE</button>\n                                    </div>\n\n                                    <button mat-icon-button aria-label=\"expand card\"\n                                            (click)=\"card9Expanded = !card9Expanded\">\n                                        <mat-icon *ngIf=\"card9Expanded\">keyboard_arrow_up</mat-icon>\n                                        <mat-icon *ngIf=\"!card9Expanded\">keyboard_arrow_down</mat-icon>\n                                    </button>\n                                </div>\n\n                                <div class=\"card-expand-area\" *ngIf=\"card9Expanded\" [@expandCollapse]>\n                                    <div class=\"card-expanded-content\">\n                                        Card content that exceeds the maximum card height is truncated and does not\n                                        scroll, but the card can be expanded. Once expanded, the card may exceed the\n                                        maximum height of the view. In this case, the card will scroll with the card\n                                        collection.\n                                    </div>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 9 -->\n\n            <!-- CARD 10 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card2.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Top eastern road trips</div>\n                            <div class=\"h4 secondary-text\">2,000 miles of wonder</div>\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <button mat-button color=\"accent\">SHARE</button>\n                                <button mat-button color=\"accent\">EXPLORE</button>\n                            </div>\n\n                            <button mat-icon-button aria-label=\"expand card\"\n                                    (click)=\"card10Expanded = !card10Expanded\">\n                                <mat-icon *ngIf=\"card10Expanded\">keyboard_arrow_up</mat-icon>\n                                <mat-icon *ngIf=\"!card10Expanded\">keyboard_arrow_down</mat-icon>\n                            </button>\n                        </div>\n\n                        <div class=\"card-expand-area\" *ngIf=\"card10Expanded\" [@expandCollapse]>\n                            <div class=\"card-expanded-content\">\n                                Card content that exceeds the maximum card height is truncated and does not scroll, but\n                                the card can be expanded. Once expanded, the card may exceed the maximum height of the\n                                view. In this case, the card will scroll with the card collection.\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card2.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Top eastern road trips</div>\n                                    <div class=\"h4 secondary-text\">2,000 miles of wonder</div>\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <button mat-button color=\"accent\">SHARE</button>\n                                        <button mat-button color=\"accent\">EXPLORE</button>\n                                    </div>\n\n                                    <button mat-icon-button aria-label=\"expand card\"\n                                            (click)=\"card10Expanded = !card10Expanded\">\n                                        <mat-icon *ngIf=\"card10Expanded\">keyboard_arrow_up</mat-icon>\n                                        <mat-icon *ngIf=\"!card10Expanded\">keyboard_arrow_down</mat-icon>\n                                    </button>\n                                </div>\n\n                                <div class=\"card-expand-area\" *ngIf=\"card10Expanded\" [@expandCollapse]>\n                                    <div class=\"card-expanded-content\">\n                                        Card content that exceeds the maximum card height is truncated and does not\n                                        scroll, but the card can be expanded. Once expanded, the card may exceed the\n                                        maximum height of the view. In this case, the card will scroll with the card\n                                        collection.\n                                    </div>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 10 -->\n\n            <!-- CARD 11 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <img class=\"w-40 h-40 border-radius-100\" src=\"assets/images/avatars/Christy.jpg\">\n\n                            <div class=\"ml-16\">\n                                <div class=\"text-bold\">Christy</div>\n                                <div class=\"h5 text-bold secondary-text\">20 mins. ago</div>\n                            </div>\n                        </div>\n\n                        <img src=\"assets/images/cards/card1.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            Cards provide context and an entry point to more robust information and views, and their\n                            content and quantity can vary greatly.\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <img class=\"w-40 h-40 border-radius-100\" src=\"assets/images/avatars/Christy.jpg\">\n\n                                    <div class=\"ml-16\">\n                                        <div class=\"text-bold\">Christy</div>\n                                        <div class=\"h5 text-bold secondary-text\">20 mins. ago</div>\n                                    </div>\n                                </div>\n\n                                <img src=\"assets/images/cards/card1.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    Cards provide context and an entry point to more robust information and views, and\n                                    their content and quantity can vary greatly.\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 11 -->\n\n            <!-- CARD 12 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card2.jpg\">\n\n                        <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                            <button mat-icon-button aria-label=\"add to favorites\">\n                                <mat-icon>favorite</mat-icon>\n                            </button>\n\n                            <button mat-icon-button aria-label=\"bookmark\">\n                                <mat-icon>bookmark</mat-icon>\n                            </button>\n\n                            <button mat-icon-button aria-label=\"send location\">\n                                <mat-icon>location_on</mat-icon>\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card2.jpg\">\n\n                                <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                                    <button mat-icon-button aria-label=\"add to favorites\">\n                                        <mat-icon>favorite</mat-icon>\n                                    </button>\n\n                                    <button mat-icon-button aria-label=\"bookmark\">\n                                        <mat-icon>bookmark</mat-icon>\n                                    </button>\n\n                                    <button mat-icon-button aria-label=\"send location\">\n                                        <mat-icon>location_on</mat-icon>\n                                    </button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 12 -->\n\n            <!-- CARD 13 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card variable-width\">\n\n                        <div class=\"position-relative\">\n                            <img src=\"assets/images/cards/card3-square.jpg\">\n                            <div class=\"position-absolute font-size-20 white-fg p-16 align-left align-bottom\">\n                                Winter\n                            </div>\n                        </div>\n\n                        <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-icon-button aria-label=\"add to favorites\">\n                                <mat-icon>favorite</mat-icon>\n                            </button>\n\n                            <button mat-icon-button aria-label=\"bookmark\">\n                                <mat-icon>bookmark</mat-icon>\n                            </button>\n\n                            <button mat-icon-button aria-label=\"send location\">\n                                <mat-icon>location_on</mat-icon>\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card variable-width\">\n\n                                <div class=\"position-relative\">\n                                    <img src=\"assets/images/cards/card3-square.jpg\">\n                                    <div class=\"position-absolute font-size-20 white-fg p-16 align-left align-bottom\">\n                                        Winter\n                                    </div>\n                                </div>\n\n                                <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <button mat-icon-button aria-label=\"add to favorites\">\n                                        <mat-icon>favorite</mat-icon>\n                                    </button>\n\n                                    <button mat-icon-button aria-label=\"bookmark\">\n                                        <mat-icon>bookmark</mat-icon>\n                                    </button>\n\n                                    <button mat-icon-button aria-label=\"send location\">\n                                        <mat-icon>location_on</mat-icon>\n                                    </button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 13 -->\n\n            <!-- CARD 14 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                            <div class=\"pr-16\">\n                                <div class=\"h1\">Brooklyn</div>\n                                <div class=\"h4 secondary-text\">Travel guide</div>\n                            </div>\n\n                            <div class=\"w-80 h-80\">\n                                <img src=\"assets/images/cards/card2-small.jpg\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">READ</button>\n                            <button mat-button color=\"accent\">SHARE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                                    <div class=\"pr-16\">\n                                        <div class=\"h1\">Brooklyn</div>\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\n                                    </div>\n\n                                    <div class=\"w-80 h-80\">\n                                        <img src=\"assets/images/cards/card2-small.jpg\">\n                                    </div>\n\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">READ</button>\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 14 -->\n\n            <!-- CARD 15 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                            <div class=\"pr-16\">\n                                <div class=\"h1\">Brooklyn</div>\n                                <div class=\"h4 secondary-text\">Travel guide</div>\n                            </div>\n\n                            <div class=\"w-120 h-120\">\n                                <img src=\"assets/images/cards/card2-medium.jpg\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">READ</button>\n                            <button mat-button color=\"accent\">SHARE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                                    <div class=\"pr-16\">\n                                        <div class=\"h1\">Brooklyn</div>\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\n                                    </div>\n\n                                    <div class=\"w-120 h-120\">\n                                        <img src=\"assets/images/cards/card2-medium.jpg\">\n                                    </div>\n\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">READ</button>\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 15 -->\n\n            <!-- CARD 16 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                            <div class=\"pr-16\">\n                                <div class=\"h1\">Brooklyn</div>\n                                <div class=\"h4 secondary-text\">Travel guide</div>\n                            </div>\n\n                            <div class=\"w-160 h-160\">\n                                <img src=\"assets/images/cards/card2-large.jpg\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">READ</button>\n                            <button mat-button color=\"accent\">SHARE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                                    <div class=\"pr-16\">\n                                        <div class=\"h1\">Brooklyn</div>\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\n                                    </div>\n\n                                    <div class=\"w-160 h-160\">\n                                        <img src=\"assets/images/cards/card2-large.jpg\">\n                                    </div>\n\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">READ</button>\n                                    <button mat-button color=\"accent\">SHARE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 16 -->\n\n            <!-- CARD 17 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <img src=\"assets/images/cards/card2.jpg\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">Coffee NewYork</div>\n                            <div class=\"h5 secondary-text\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                    <mat-icon class=\"s-16 amber-fg\">star_half</mat-icon>\n                                    <div class=\"ml-8 secondary-text\">4.7</div>\n                                    <div class=\"ml-4 secondary-text\">(51)</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"px-16 line-height-1.75\">\n                            Small plates, salads & sandwiches in an intimate setting with 12 indoor seats plus patio\n                            seating.\n                        </div>\n\n                        <div class=\"card-divider\"></div>\n\n                        <div class=\"p-16 pt-0 line-height-1.75\">\n                            <div class=\"mb-16 text-bold\">Tonight's Availability</div>\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon class=\"mr-16\">access_time</mat-icon>\n                                <mat-button-toggle-group>\n                                    <mat-button-toggle value=\"0530PM\">\n                                        5:30PM\n                                    </mat-button-toggle>\n                                    <mat-button-toggle value=\"0730PM\" [checked]=\"true\">\n                                        7:30PM\n                                    </mat-button-toggle>\n                                    <mat-button-toggle value=\"0900PM\">\n                                        9:00PM\n                                    </mat-button-toggle>\n                                </mat-button-toggle-group>\n                            </div>\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">RESERVE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <img src=\"assets/images/cards/card2.jpg\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">Coffee NewYork</div>\n                                    <div class=\"h5 secondary-text\">\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\n                                            <mat-icon class=\"s-16 amber-fg\">star_half</mat-icon>\n                                            <div class=\"ml-8 secondary-text\">4.7</div>\n                                            <div class=\"ml-4 secondary-text\">(51)</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"px-16 line-height-1.75\">\n                                    Small plates, salads & sandwiches in an intimate setting with 12 indoor seats plus\n                                    patio\n                                    seating.\n                                </div>\n\n                                <div class=\"card-divider\"></div>\n\n                                <div class=\"p-16 pt-0 line-height-1.75\">\n                                    <div class=\"mb-16 text-bold\">Tonight's Availability</div>\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <mat-icon class=\"mr-16\">access_time</mat-icon>\n                                        <mat-button-toggle-group>\n                                            <mat-button-toggle value=\"0530PM\">\n                                                5:30PM\n                                            </mat-button-toggle>\n                                            <mat-button-toggle value=\"0730PM\" [checked]=\"true\">\n                                                7:30PM\n                                            </mat-button-toggle>\n                                            <mat-button-toggle value=\"0900PM\">\n                                                9:00PM\n                                            </mat-button-toggle>\n                                        </mat-button-toggle-group>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">RESERVE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 17 -->\n\n            <!-- CARD 18 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1\">San Francisco</div>\n                            <div class=\"h4 secondary-text\">Mon, 12:30 PM, Mostly Sunny</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                <span class=\"font-weight-300 font-size-72 line-height-72\">23</span>\n                                <span class=\"font-weight-300 font-size-48 line-height-48 ml-8 mt-4\">°</span>\n                                <span class=\"font-weight-300 font-size-48 line-height-48 mt-4\">C</span>\n                            </div>\n                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\" class=\"icon s-64\"></mat-icon>\n                        </div>\n\n                        <div class=\"px-16 pb-4\">\n                            <div class=\"pb-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-wind\"\n                                          class=\"icon s-16 mr-16\"></mat-icon>\n                                <div>23 km/h</div>\n                            </div>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy2\"\n                                          class=\"icon s-16 mr-16\"></mat-icon>\n                                <div>48 %</div>\n                            </div>\n                        </div>\n\n                        <div class=\"card-divider\"></div>\n\n                        <div class=\"p-16 pt-4\">\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Tuesday</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\n                                              class=\"icon s-16 mr-16\"></mat-icon>\n                                    <div class=\"secondary-text\">24°</div>\n                                    <div class=\"disabled-text\">/</div>\n                                    <div class=\"disabled-text\">12°</div>\n                                </div>\n                            </div>\n\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Wednesday</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\n                                              class=\"icon s-16 mr-16\"></mat-icon>\n                                    <div class=\"secondary-text\">22°</div>\n                                    <div class=\"disabled-text\">/</div>\n                                    <div class=\"disabled-text\">14°</div>\n                                </div>\n                            </div>\n\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Thursday</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                              class=\"icon s-16 mr-16\"></mat-icon>\n                                    <div class=\"secondary-text\">23°</div>\n                                    <div class=\"disabled-text\">/</div>\n                                    <div class=\"disabled-text\">13°</div>\n                                </div>\n                            </div>\n\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Friday</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                              class=\"icon s-16 mr-16\"></mat-icon>\n                                    <div class=\"secondary-text\">25°</div>\n                                    <div class=\"disabled-text\">/</div>\n                                    <div class=\"disabled-text\">15°</div>\n                                </div>\n                            </div>\n\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Saturday</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                              class=\"icon s-16 mr-16\"></mat-icon>\n                                    <div class=\"secondary-text\">24°</div>\n                                    <div class=\"disabled-text\">/</div>\n                                    <div class=\"disabled-text\">15°</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">FULL REPORT</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1\">San Francisco</div>\n                                    <div class=\"h4 secondary-text\">Mon, 12:30 PM, Mostly Sunny</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                        <span class=\"font-weight-300 font-size-72 line-height-72\">23</span>\n                                        <span class=\"font-weight-300 font-size-48 line-height-48 ml-8 mt-4\">°</span>\n                                        <span class=\"font-weight-300 font-size-48 line-height-48 mt-4\">C</span>\n                                    </div>\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\" class=\"icon s-64\"></mat-icon>\n                                </div>\n\n                                <div class=\"px-16 pb-4\">\n                                    <div class=\"pb-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-wind\"\n                                                  class=\"icon s-16 mr-16\"></mat-icon>\n                                        <div>23 km/h</div>\n                                    </div>\n\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy2\"\n                                                  class=\"icon s-16 mr-16\"></mat-icon>\n                                        <div>48 %</div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card-divider\"></div>\n\n                                <div class=\"p-16 pt-4\">\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div>Tuesday</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\n                                            <div class=\"secondary-text\">24°</div>\n                                            <div class=\"disabled-text\">/</div>\n                                            <div class=\"disabled-text\">12°</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div>Wednesday</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\n                                            <div class=\"secondary-text\">22°</div>\n                                            <div class=\"disabled-text\">/</div>\n                                            <div class=\"disabled-text\">14°</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div>Thursday</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\n                                            <div class=\"secondary-text\">23°</div>\n                                            <div class=\"disabled-text\">/</div>\n                                            <div class=\"disabled-text\">13°</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div>Friday</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\n                                            <div class=\"secondary-text\">25°</div>\n                                            <div class=\"disabled-text\">/</div>\n                                            <div class=\"disabled-text\">15°</div>\n                                        </div>\n                                    </div>\n\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div>Saturday</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\n                                            <div class=\"secondary-text\">24°</div>\n                                            <div class=\"disabled-text\">/</div>\n                                            <div class=\"disabled-text\">15°</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">FULL REPORT</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 18 -->\n\n            <!-- CARD 19 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"light-blue-600\">\n\n                            <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div class=\"pr-16\">\n                                    <div class=\"h1 font-weight-300\">Google Inc.</div>\n                                    <div class=\"h5 secondary-text\">NASDAQ: GOOG</div>\n                                </div>\n\n                                <div>\n                                    <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\n                                        <mat-icon>more_vert</mat-icon>\n                                    </button>\n\n                                    <mat-menu #card19Menu=\"matMenu\">\n                                        <button mat-menu-item>\n                                            <mat-icon>trending_up</mat-icon>\n                                            <span>Trend</span>\n                                        </button>\n                                        <button mat-menu-item>\n                                            <mat-icon>history</mat-icon>\n                                            <span>History</span>\n                                        </button>\n                                        <button mat-menu-item>\n                                            <mat-icon>notifications_off</mat-icon>\n                                            <span>Disable alerts</span>\n                                        </button>\n                                    </mat-menu>\n                                </div>\n                            </div>\n\n                            <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\n                                <div class=\"font-size-48 font-weight-300 line-height-1\">540.48</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon>trending_up</mat-icon>\n                                    <div class=\"ml-8\">2.29 (2.05%)</div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <mat-tab-group backgroundColor=\"accent\">\n                            <mat-tab label=\"1DAY\">\n                                <div class=\"h-200 my-16\">\n                                    <ngx-charts-line-chart\n                                        *fuseIfOnDom\n                                        [scheme]=\"card19.scheme\"\n                                        [results]=\"card19.data\"\n                                        [xAxis]=\"false\"\n                                        [yAxis]=\"true\"\n                                        [yScaleMin]=\"'538'\"\n                                        [yScaleMax]=\"'541'\">\n                                    </ngx-charts-line-chart>\n                                </div>\n                            </mat-tab>\n\n                            <mat-tab label=\"1WEEK\">\n                                <div class=\"h-200 my-16\">\n                                    <ngx-charts-line-chart\n                                        *fuseIfOnDom\n                                        [scheme]=\"card19.scheme\"\n                                        [results]=\"card19.data\"\n                                        [xAxis]=\"false\"\n                                        [yAxis]=\"true\"\n                                        [yScaleMin]=\"'538'\"\n                                        [yScaleMax]=\"'541'\">\n                                    </ngx-charts-line-chart>\n                                </div>\n                            </mat-tab>\n\n                            <mat-tab label=\"1MONTH\">\n                                <div class=\"h-200 my-16\">\n                                    <ngx-charts-line-chart\n                                        *fuseIfOnDom\n                                        [scheme]=\"card19.scheme\"\n                                        [results]=\"card19.data\"\n                                        [xAxis]=\"false\"\n                                        [yAxis]=\"true\"\n                                        [yScaleMin]=\"'538'\"\n                                        [yScaleMax]=\"'541'\">\n                                    </ngx-charts-line-chart>\n                                </div>\n                            </mat-tab>\n                        </mat-tab-group>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"light-blue-600\">\n\n                                    <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                        <div class=\"pr-16\">\n                                            <div class=\"h1 font-weight-300\">Google Inc.</div>\n                                            <div class=\"h5 secondary-text\">NASDAQ: GOOG</div>\n                                        </div>\n\n                                        <div>\n                                            <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\n                                                <mat-icon>more_vert</mat-icon>\n                                            </button>\n\n                                            <mat-menu #card19Menu=\"matMenu\">\n                                                <button mat-menu-item>\n                                                    <mat-icon>trending_up</mat-icon>\n                                                    <span>Trend</span>\n                                                </button>\n                                                <button mat-menu-item>\n                                                    <mat-icon>history</mat-icon>\n                                                    <span>History</span>\n                                                </button>\n                                                <button mat-menu-item>\n                                                    <mat-icon>notifications_off</mat-icon>\n                                                    <span>Disable alerts</span>\n                                                </button>\n                                            </mat-menu>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\n                                        <div class=\"font-size-48 font-weight-300 line-height-1\">540.48</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                            <mat-icon>trending_up</mat-icon>\n                                            <div class=\"ml-8\">2.29 (2.05%)</div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <mat-tab-group backgroundColor=\"accent\">\n                                    <mat-tab label=\"1DAY\">\n                                        <div class=\"h-200 my-16\">\n                                            <ngx-charts-line-chart\n                                                *fuseIfOnDom\n                                                [scheme]=\"card19.scheme\"\n                                                [results]=\"card19.data\"\n                                                [xAxis]=\"false\"\n                                                [yAxis]=\"true\"\n                                                [yScaleMin]=\"'538'\"\n                                                [yScaleMax]=\"'541'\">\n                                            </ngx-charts-line-chart>\n                                        </div>\n                                    </mat-tab>\n\n                                    <mat-tab label=\"1WEEK\">\n                                        <div class=\"h-200 my-16\">\n                                            <ngx-charts-line-chart\n                                                *fuseIfOnDom\n                                                [scheme]=\"card19.scheme\"\n                                                [results]=\"card19.data\"\n                                                [xAxis]=\"false\"\n                                                [yAxis]=\"true\"\n                                                [yScaleMin]=\"'538'\"\n                                                [yScaleMax]=\"'541'\">\n                                            </ngx-charts-line-chart>\n                                        </div>\n                                    </mat-tab>\n\n                                    <mat-tab label=\"1MONTH\">\n                                        <div class=\"h-200 my-16\">\n                                            <ngx-charts-line-chart\n                                                *fuseIfOnDom\n                                                [scheme]=\"card19.scheme\"\n                                                [results]=\"card19.data\"\n                                                [xAxis]=\"false\"\n                                                [yAxis]=\"true\"\n                                                [yScaleMin]=\"'538'\"\n                                                [yScaleMax]=\"'541'\">\n                                            </ngx-charts-line-chart>\n                                        </div>\n                                    </mat-tab>\n                                </mat-tab-group>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 19 -->\n\n            <!-- CARD 20 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div class=\"h1 pr-16\">Top campaigns</div>\n\n                            <div>\n                                <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\n                                    <mat-icon>more_vert</mat-icon>\n                                </button>\n\n                                <mat-menu #card20Menu=\"matMenu\">\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\n                                        <span>Show Clicks</span>\n                                    </button>\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\n                                        <span>Show Conversion</span>\n                                    </button>\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                        <mat-icon>check_box_outline_blank</mat-icon>\n                                        <span>Show CPC</span>\n                                    </button>\n                                </mat-menu>\n                            </div>\n                        </div>\n\n                        <table class=\"simple clickable\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-right\">Clicks</th>\n                                    <th class=\"text-right\">Conv</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Holiday Travel</td>\n                                    <td class=\"text-right\">3621</td>\n                                    <td class=\"text-right\">90</td>\n                                </tr>\n                                <tr>\n                                    <td>Get Away Deals</td>\n                                    <td class=\"text-right\">703</td>\n                                    <td class=\"text-right\">7</td>\n                                </tr>\n                                <tr>\n                                    <td>Airfare</td>\n                                    <td class=\"text-right\">532</td>\n                                    <td class=\"text-right\">0</td>\n                                </tr>\n                                <tr>\n                                    <td>Vacation</td>\n                                    <td class=\"text-right\">201</td>\n                                    <td class=\"text-right\">8</td>\n                                </tr>\n                                <tr>\n                                    <td>Hotels</td>\n                                    <td class=\"text-right\">94</td>\n                                    <td class=\"text-right\">4</td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <div class=\"card-divider full-width\"></div>\n\n                        <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">GO TO CAMPAIGNS</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div class=\"h1 pr-16\">Top campaigns</div>\n\n                                    <div>\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n\n                                        <mat-menu #card20Menu=\"matMenu\">\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\n                                                <span>Show Clicks</span>\n                                            </button>\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\n                                                <span>Show Conversion</span>\n                                            </button>\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\n                                                <mat-icon>check_box_outline_blank</mat-icon>\n                                                <span>Show CPC</span>\n                                            </button>\n                                        </mat-menu>\n                                    </div>\n                                </div>\n\n                                <table class=\"simple clickable\">\n                                    <thead>\n                                        <tr>\n                                            <th></th>\n                                            <th class=\"text-right\">Clicks</th>\n                                            <th class=\"text-right\">Conv</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Holiday Travel</td>\n                                            <td class=\"text-right\">3621</td>\n                                            <td class=\"text-right\">90</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Get Away Deals</td>\n                                            <td class=\"text-right\">703</td>\n                                            <td class=\"text-right\">7</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Airfare</td>\n                                            <td class=\"text-right\">532</td>\n                                            <td class=\"text-right\">0</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Vacation</td>\n                                            <td class=\"text-right\">201</td>\n                                            <td class=\"text-right\">8</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Hotels</td>\n                                            <td class=\"text-right\">94</td>\n                                            <td class=\"text-right\">4</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                                <div class=\"card-divider full-width\"></div>\n\n                                <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">GO TO CAMPAIGNS</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 20 -->\n\n            <!-- CARD 21 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16 pb-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div class=\"h1 pr-16\">Schedule</div>\n\n                            <mat-form-field>\n                                <mat-select class=\"simplified\" value=\"today\">\n                                    <mat-option value=\"today\">Today</mat-option>\n                                    <mat-option value=\"yesterday\">Yesterday</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <mat-list>\n                            <mat-list-item>\n                                <h3 matLine>Group Meeting</h3>\n                                <p matLine>\n                                    <span class=\"secondary-text\">In 32 minutes -</span>\n                                    <span class=\"text-bold\">Room 1B</span>\n                                </p>\n                            </mat-list-item>\n\n                            <mat-list-item>\n                                <h3 matLine>Coffee Break</h3>\n                                <p matLine>\n                                    <span class=\"secondary-text\">10:30AM</span>\n                                </p>\n                            </mat-list-item>\n\n                            <mat-list-item>\n                                <h3 matLine>Public Beta Release</h3>\n                                <p matLine>\n                                    <span class=\"secondary-text\">11:00AM</span>\n                                </p>\n                            </mat-list-item>\n\n                            <mat-list-item>\n                                <h3 matLine>Lunch</h3>\n                                <p matLine>\n                                    <span class=\"secondary-text\">12:10PM</span>\n                                </p>\n                            </mat-list-item>\n\n                            <mat-list-item>\n                                <h3 matLine>Dinner with David</h3>\n                                <p matLine>\n                                    <span class=\"secondary-text\">17:30PM</span>\n                                </p>\n                            </mat-list-item>\n                        </mat-list>\n\n                        <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <button mat-button color=\"accent\">SEE COMPLETE SCHEDULE</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div class=\"h1 pr-16\">Top campaigns</div>\n\n                                    <div>\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n\n                                        <mat-menu #card20Menu=\"matMenu\">\n                                            <button mat-menu-item>\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\n                                                <span>Show Clicks</span>\n                                            </button>\n                                            <button mat-menu-item>\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\n                                                <span>Show Conversion</span>\n                                            </button>\n                                            <button mat-menu-item>\n                                                <mat-icon>check_box_outline_blank</mat-icon>\n                                                <span>Show CPC</span>\n                                            </button>\n                                        </mat-menu>\n                                    </div>\n                                </div>\n\n                                <table class=\"simple clickable\">\n                                    <thead>\n                                        <tr>\n                                            <th></th>\n                                            <th>Clicks</th>\n                                            <th>Conv</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Holiday Travel</td>\n                                            <td>3621</td>\n                                            <td>90</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Get Away Deals</td>\n                                            <td>703</td>\n                                            <td>7</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Airfare</td>\n                                            <td>532</td>\n                                            <td>0</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Vacation</td>\n                                            <td>201</td>\n                                            <td>8</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Hotels</td>\n                                            <td>94</td>\n                                            <td>4</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                                <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <button mat-button color=\"accent\">SEE COMPLETE SCHEDULE</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 21 -->\n\n            <!-- CARD 22 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <div class=\"pr-16\">\n                                <div class=\"h1 font-weight-300\">Sales Reports</div>\n                            </div>\n\n                            <div>\n                                <button mat-icon-button [matMenuTriggerFor]=\"card22Menu\" aria-label=\"more\">\n                                    <mat-icon>more_vert</mat-icon>\n                                </button>\n\n                                <mat-menu #card22Menu=\"matMenu\">\n                                    <button mat-menu-item>\n                                        <mat-icon>history</mat-icon>\n                                        <span>History</span>\n                                    </button>\n                                    <button mat-menu-item>\n                                        <mat-icon>notifications_off</mat-icon>\n                                        <span>Disable alerts</span>\n                                    </button>\n                                </mat-menu>\n                            </div>\n                        </div>\n\n                        <mat-tab-group>\n                            <mat-tab label=\"1WEEK\">\n                                <div class=\"p-16\">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                    <p>\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\n                                        rutrum enim, vel tempor sapien arcu a tellus.\n                                    </p>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                </div>\n                            </mat-tab>\n\n                            <mat-tab label=\"2WEEKS\">\n                                <div class=\"p-16\">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                    <p>\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\n                                        rutrum enim, vel tempor sapien arcu a tellus.\n                                    </p>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                </div>\n                            </mat-tab>\n\n                            <mat-tab label=\"3WEEKS\">\n                                <div class=\"p-16\">\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                    <p>\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\n                                        rutrum enim, vel tempor sapien arcu a tellus.\n                                    </p>\n                                    <p>\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\n                                        cursus. In sodales pretium ultrices.\n                                    </p>\n                                </div>\n                            </mat-tab>\n                        </mat-tab-group>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <div class=\"pr-16\">\n                                        <div class=\"h1 font-weight-300\">Sales Reports</div>\n                                    </div>\n\n                                    <div>\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card22Menu\" aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n\n                                        <mat-menu #card22Menu=\"matMenu\">\n                                            <button mat-menu-item>\n                                                <mat-icon>history</mat-icon>\n                                                <span>History</span>\n                                            </button>\n                                            <button mat-menu-item>\n                                                <mat-icon>notifications_off</mat-icon>\n                                                <span>Disable alerts</span>\n                                            </button>\n                                        </mat-menu>\n                                    </div>\n                                </div>\n\n                                <mat-tab-group>\n                                    <mat-tab label=\"1WEEK\">\n                                        <div class=\"p-16\">\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                            <p>\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                        </div>\n                                    </mat-tab>\n\n                                    <mat-tab label=\"2WEEKS\">\n                                        <div class=\"p-16\">\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                            <p>\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                        </div>\n                                    </mat-tab>\n\n                                    <mat-tab label=\"3WEEKS\">\n                                        <div class=\"p-16\">\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                            <p>\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\n                                                consequat aliquam cursus. In sodales pretium ultrices.\n                                            </p>\n                                        </div>\n                                    </mat-tab>\n                                </mat-tab-group>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 22 -->\n\n            <!-- CARD 23 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16 pb-0\">\n                            <div class=\"h1 font-weight-300\">Shopping List</div>\n                        </div>\n\n                        <div class=\"card-divider\"></div>\n\n                        <mat-selection-list class=\"pt-0 pb-16\">\n                            <mat-list-option checkboxPosition=\"before\" selected>Milk</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\">Tomatoes</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\" selected>Green Apples</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\" selected>Chocolate Bar</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\">Break</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\">Eggs</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\" selected>Lettuce</mat-list-option>\n                            <mat-list-option checkboxPosition=\"before\">Pickles</mat-list-option>\n                        </mat-selection-list>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16 pb-0\">\n                                    <div class=\"h1 font-weight-300\">Shopping List</div>\n                                </div>\n\n                                <div class=\"card-divider\"></div>\n\n                                <mat-selection-list class=\"pt-0 pb-16\">\n                                    <mat-list-option checkboxPosition=\"before\" selected>Milk</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\">Tomatoes</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\" selected>Green Apples</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\" selected>Chocolate Bar</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\">Break</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\">Eggs</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\" selected>Lettuce</mat-list-option>\n                                    <mat-list-option checkboxPosition=\"before\">Pickles</mat-list-option>\n                                </mat-selection-list>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 23 -->\n\n            <!-- CARD 24 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h1 font-weight-300\">Sessions by device</div>\n                        </div>\n\n                        <div class=\"h-200\">\n                            <ngx-charts-pie-chart\n                                [scheme]=\"card24.scheme\"\n                                [results]=\"card24.devices\"\n                                [doughnut]=\"true\">\n                            </ngx-charts-pie-chart>\n                        </div>\n\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                <div class=\"h4 secondary-text\">Desktop</div>\n                                <div class=\"h2 font-weight-300 py-8\">92.8%</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <mat-icon class=\"s-18 pr-4 red-fg\">\n                                        arrow_downward\n                                    </mat-icon>\n\n                                    <div class=\"h5 red-fg\">\n                                        -0.6%\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                <div class=\"h4 secondary-text\">Mobile</div>\n                                <div class=\"h2 font-weight-300 py-8\">6.1%</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <mat-icon class=\"s-18 pr-4 green-fg\">\n                                        arrow_upward\n                                    </mat-icon>\n\n                                    <div class=\"h5 green-fg\">\n                                        +0.7%\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                <div class=\"h4 secondary-text\">Tablet</div>\n                                <div class=\"h2 font-weight-300 py-8\">1.1%</div>\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <mat-icon class=\"s-18 pr-4 green-fg\">\n                                        arrow_upward\n                                    </mat-icon>\n\n                                    <div class=\"h5 green-fg\">\n                                        +0.1%\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"card-divider mb-0\"></div>\n\n                        <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <mat-form-field>\n                                <mat-select class=\"simplified\" value=\"7days\">\n                                    <mat-option value=\"today\">Today</mat-option>\n                                    <mat-option value=\"yesterday\">Yesterday</mat-option>\n                                    <mat-option value=\"7days\">Last 7 days</mat-option>\n                                    <mat-option value=\"28days\">Last 28 days</mat-option>\n                                    <mat-option value=\"90days\">Last 90 days</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <button mat-button color=\"accent\">OVERVIEW</button>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h1 font-weight-300\">Sessions by device</div>\n                                </div>\n\n                                <div class=\"h-200\">\n                                    <ngx-charts-pie-chart\n                                        [scheme]=\"card24.scheme\"\n                                        [results]=\"card24.devices\"\n                                        [doughnut]=\"true\">\n                                    </ngx-charts-pie-chart>\n                                </div>\n\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                        <div class=\"h4 secondary-text\">Desktop</div>\n                                        <div class=\"h2 font-weight-300 py-8\">92.8%</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                            <mat-icon class=\"s-18 pr-4 red-fg\">\n                                                arrow_downward\n                                            </mat-icon>\n\n                                            <div class=\"h5 red-fg\">\n                                                -0.6%\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                        <div class=\"h4 secondary-text\">Mobile</div>\n                                        <div class=\"h2 font-weight-300 py-8\">6.1%</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                            <mat-icon class=\"s-18 pr-4 green-fg\">\n                                                arrow_upward\n                                            </mat-icon>\n\n                                            <div class=\"h5 green-fg\">\n                                                +0.7%\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                                        <div class=\"h4 secondary-text\">Tablet</div>\n                                        <div class=\"h2 font-weight-300 py-8\">1.1%</div>\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                            <mat-icon class=\"s-18 pr-4 green-fg\">\n                                                arrow_upward\n                                            </mat-icon>\n\n                                            <div class=\"h5 green-fg\">\n                                                +0.1%\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"card-divider mb-0\"></div>\n\n                                <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                    <mat-form-field>\n                                        <mat-select class=\"simplified\" value=\"7days\">\n                                            <mat-option value=\"today\">Today</mat-option>\n                                            <mat-option value=\"yesterday\">Yesterday</mat-option>\n                                            <mat-option value=\"7days\">Last 7 days</mat-option>\n                                            <mat-option value=\"28days\">Last 28 days</mat-option>\n                                            <mat-option value=\"90days\">Last 90 days</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n\n                                    <button mat-button color=\"accent\">OVERVIEW</button>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 24 -->\n\n            <!-- CARD 25 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h5 secondary-text\">Conversion</div>\n                            <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">492</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0\">\n                            <span class=\"green-fg\">+22%</span>\n                            of target\n                        </div>\n\n                        <div class=\"h-80\">\n                            <ngx-charts-bar-vertical\n                                [scheme]=\"card25.scheme\"\n                                [results]=\"card25.data\">\n                            </ngx-charts-bar-vertical>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h5 secondary-text\">Conversion</div>\n                                    <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">492</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0\">\n                                    <span class=\"green-fg\">+22%</span>\n                                    of target\n                                </div>\n\n                                <div class=\"h-80\">\n                                    <ngx-charts-bar-vertical\n                                        [scheme]=\"card25.scheme\"\n                                        [results]=\"card25.data\">\n                                    </ngx-charts-bar-vertical>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 25 -->\n\n            <!-- CARD 26 -->\n            <div class=\"card\">\n\n                <!-- PREVIEW -->\n                <div class=\"card-preview\">\n\n                    <div class=\"fuse-card\">\n\n                        <div class=\"p-16\">\n                            <div class=\"h5 secondary-text\">Impressions</div>\n                            <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">87.4M</div>\n                        </div>\n\n                        <div class=\"p-16 pt-0\">\n                            <span class=\"green-fg\">+12.3%</span>\n                            of target\n                        </div>\n\n                        <div class=\"h-80\">\n                            <ngx-charts-line-chart\n                                [scheme]=\"card26.scheme\"\n                                [results]=\"card26.data\"\n                                [curve]=\"card26.curve\">\n                            </ngx-charts-line-chart>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- / PREVIEW -->\n\n                <!-- SOURCE -->\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\n\n                    <fuse-highlight lang=\"html\">\n                        <textarea #source>\n\n                            <div class=\"fuse-card\">\n\n                                <div class=\"p-16\">\n                                    <div class=\"h5 secondary-text\">Impressions</div>\n                                    <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">87.4M</div>\n                                </div>\n\n                                <div class=\"p-16 pt-0\">\n                                    <span class=\"green-fg\">+12.3%</span>\n                                    of target\n                                </div>\n\n                                <div class=\"h-80\">\n                                    <ngx-charts-line-chart\n                                        [scheme]=\"card26.scheme\"\n                                        [results]=\"card26.data\"\n                                        [curve]=\"card26.curve\">\n                                    </ngx-charts-line-chart>\n                                </div>\n\n                            </div>\n\n                        </textarea>\n                    </fuse-highlight>\n\n                </div>\n                <!-- / SOURCE -->\n\n            </div>\n            <!-- / CARD 26 -->\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/components/cards/cards.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/documentation/components/cards/cards.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ndocs-components-cards .content .cards {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start; }\ndocs-components-cards .content .cards .card {\n    display: flex;\n    align-items: flex-start;\n    padding: 24px 24px 48px 24px;\n    margin-bottom: 96px; }\ndocs-components-cards .content .cards .card .card-preview {\n      display: flex;\n      min-width: 320px; }\ndocs-components-cards .content .cards .card .card-source {\n      display: none; }\ndocs-components-cards .content.source .cards {\n  flex-direction: column; }\ndocs-components-cards .content.source .cards .card {\n    width: 100%;\n    margin-bottom: 24px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\ndocs-components-cards .content.source .cards .card .card-source {\n      background: #263238;\n      display: flex !important;\n      flex: 1;\n      max-height: 400px;\n      min-width: 400px;\n      margin-left: 24px;\n      overflow: auto;\n      -webkit-overflow-scrolling: touch; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/cards/cards.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/documentation/components/cards/cards.component.ts ***!
  \************************************************************************/
/*! exports provided: DocsComponentsCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsCardsComponent", function() { return DocsComponentsCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _fuse_animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations/index */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocsComponentsCardsComponent = /** @class */ (function () {
    function DocsComponentsCardsComponent() {
        // Set the defaults
        this.view = 'preview';
        this.card9Expanded = false;
        this.card10Expanded = false;
        this.card19 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data: [
                {
                    'name': 'GOOG',
                    'series': [
                        {
                            'name': 'Jan 1',
                            'value': 540.2
                        },
                        {
                            'name': 'Jan 2',
                            'value': 539.4
                        },
                        {
                            'name': 'Jan 3',
                            'value': 538.9
                        },
                        {
                            'name': 'Jan 4',
                            'value': 539.6
                        },
                        {
                            'name': 'Jan 5',
                            'value': 540
                        },
                        {
                            'name': 'Jan 6',
                            'value': 540.2
                        },
                        {
                            'name': 'Jan 7',
                            'value': 540.48
                        }
                    ]
                }
            ],
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"]
        };
        this.card24 = {
            scheme: {
                domain: ['#4867d2', '#5c84f1', '#89a9f4']
            },
            devices: [
                {
                    'name': 'Desktop',
                    'value': 92.8,
                    'change': -0.6
                },
                {
                    'name': 'Mobile',
                    'value': 6.1,
                    'change': 0.7
                },
                {
                    'name': 'Tablet',
                    'value': 1.1,
                    'change': 0.1
                }
            ]
        };
        this.card25 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data: [
                {
                    'name': 'Monday',
                    'value': 221
                },
                {
                    'name': 'Tuesday',
                    'value': 428
                },
                {
                    'name': 'Wednesday',
                    'value': 492
                },
                {
                    'name': 'Thursday',
                    'value': 471
                },
                {
                    'name': 'Friday',
                    'value': 413
                },
                {
                    'name': 'Saturday',
                    'value': 344
                },
                {
                    'name': 'Sunday',
                    'value': 294
                }
            ]
        };
        this.card26 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data: [
                {
                    'name': 'Impressions',
                    'series': [
                        {
                            'name': 'Jan 1',
                            'value': 670000
                        },
                        {
                            'name': 'Jan 2',
                            'value': 540000
                        },
                        {
                            'name': 'Jan 3',
                            'value': 820000
                        },
                        {
                            'name': 'Jan 4',
                            'value': 570000
                        },
                        {
                            'name': 'Jan 5',
                            'value': 720000
                        },
                        {
                            'name': 'Jan 6',
                            'value': 570000
                        },
                        {
                            'name': 'Jan 7',
                            'value': 870000
                        },
                        {
                            'name': 'Jan 8',
                            'value': 720000
                        },
                        {
                            'name': 'Jan 9',
                            'value': 890000
                        },
                        {
                            'name': 'Jan 10',
                            'value': 987000
                        },
                        {
                            'name': 'Jan 11',
                            'value': 1120000
                        },
                        {
                            'name': 'Jan 12',
                            'value': 1360000
                        },
                        {
                            'name': 'Jan 13',
                            'value': 1100000
                        },
                        {
                            'name': 'Jan 14',
                            'value': 1490000
                        },
                        {
                            'name': 'Jan 15',
                            'value': 980000
                        }
                    ]
                }
            ],
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"]
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the view
     */
    DocsComponentsCardsComponent.prototype.toggleView = function () {
        if (this.view === 'preview') {
            this.view = 'source';
        }
        else {
            this.view = 'preview';
        }
    };
    DocsComponentsCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/main/documentation/components/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/main/documentation/components/cards/cards.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations_index__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsCardsComponent);
    return DocsComponentsCardsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/components.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/documentation/components/components.module.ts ***!
  \********************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/components/cards/cards.component */ "./src/app/main/documentation/components/cards/cards.component.ts");
/* harmony import */ var app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/documentation/components/countdown/countdown.component */ "./src/app/main/documentation/components/countdown/countdown.component.ts");
/* harmony import */ var app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/documentation/components/highlight/highlight.component */ "./src/app/main/documentation/components/highlight/highlight.component.ts");
/* harmony import */ var app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/documentation/components/material-color-picker/material-color-picker.component */ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts");
/* harmony import */ var app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/documentation/components/navigation/navigation.component */ "./src/app/main/documentation/components/navigation/navigation.component.ts");
/* harmony import */ var app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/documentation/components/progress-bar/progress-bar.component */ "./src/app/main/documentation/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/documentation/components/search-bar/search-bar.component */ "./src/app/main/documentation/components/search-bar/search-bar.component.ts");
/* harmony import */ var app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main/documentation/components/sidebar/sidebar.component */ "./src/app/main/documentation/components/sidebar/sidebar.component.ts");
/* harmony import */ var app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/main/documentation/components/shortcuts/shortcuts.component */ "./src/app/main/documentation/components/shortcuts/shortcuts.component.ts");
/* harmony import */ var app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/documentation/components/widget/widget.component */ "./src/app/main/documentation/components/widget/widget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'cards',
        component: app_main_documentation_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["DocsComponentsCardsComponent"]
    },
    {
        path: 'countdown',
        component: app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__["DocsComponentsCountdownComponent"]
    },
    {
        path: 'highlight',
        component: app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsHighlightComponent"]
    },
    {
        path: 'material-color-picker',
        component: app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsMaterialColorPickerComponent"]
    },
    {
        path: 'navigation',
        component: app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DocsComponentsNavigationComponent"]
    },
    {
        path: 'progress-bar',
        component: app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["DocsComponentsProgressBarComponent"]
    },
    {
        path: 'search-bar',
        component: app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["DocsComponentsSearchBarComponent"]
    },
    {
        path: 'sidebar',
        component: app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["DocsComponentsSidebarComponent"]
    },
    {
        path: 'shortcuts',
        component: app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__["DocsComponentsShortcutsComponent"]
    },
    {
        path: 'widget',
        component: app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__["DocsComponentsWidgetComponent"]
    }
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["DocsComponentsCardsComponent"],
                app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__["DocsComponentsCountdownComponent"],
                app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsHighlightComponent"],
                app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsMaterialColorPickerComponent"],
                app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DocsComponentsNavigationComponent"],
                app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["DocsComponentsProgressBarComponent"],
                app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["DocsComponentsSearchBarComponent"],
                app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["DocsComponentsSidebarComponent"],
                app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__["DocsComponentsShortcutsComponent"],
                app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__["DocsComponentsWidgetComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseCountdownModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseHighlightModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseMaterialColorPickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseWidgetModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/countdown/countdown.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/countdown/countdown.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"countdown\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Countdown</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-countdown</code> is a custom built Fuse component allows you to create a countdowns.\n        </p>\n\n        <div class=\"section-title\">Sample</div>\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Inputs</div>\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-16\">eventDate</code>\n            <span>\n                The date of the event. Since fuse-countdown uses moment.js to parse the dates, any moment.js\n                compatible date string can be used.\n            </span>\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/countdown/countdown.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/countdown/countdown.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/countdown/countdown.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/documentation/components/countdown/countdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocsComponentsCountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsCountdownComponent", function() { return DocsComponentsCountdownComponent; });
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

var DocsComponentsCountdownComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsCountdownComponent() {
    }
    DocsComponentsCountdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-countdown',
            template: __webpack_require__(/*! ./countdown.component.html */ "./src/app/main/documentation/components/countdown/countdown.component.html"),
            styles: [__webpack_require__(/*! ./countdown.component.scss */ "./src/app/main/documentation/components/countdown/countdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsCountdownComponent);
    return DocsComponentsCountdownComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/highlight/highlight.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/highlight/highlight.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"highlight\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Highlight</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-highlight</code> is a custom built Fuse component allows to show syntax highlighted codes.\n        </p>\n\n        <div class=\"section-title\">Sample</div>\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n\n                    <div class=\"title\">\n                        <span>Example Title</span>\n                    </div>\n\n                </textarea>\n            </fuse-highlight>\n\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n\n&lt;fuse-highlight lang=\"html\"&gt;\n    &lt;textarea #source&gt;\n        &lt;div class=\"title\"&gt;\n            &lt;span&gt;Example Title&lt;/span&gt;\n        &lt;/div&gt;\n    &lt;/textarea&gt;\n&lt;/fuse-highlight&gt;\n\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Inputs</div>\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-16\">lang</code>\n            <span>\n                Language of the code to be highlighted.\n            </span>\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/highlight/highlight.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/highlight/highlight.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/highlight/highlight.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/documentation/components/highlight/highlight.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocsComponentsHighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsHighlightComponent", function() { return DocsComponentsHighlightComponent; });
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

var DocsComponentsHighlightComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsHighlightComponent() {
    }
    DocsComponentsHighlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-highlight',
            template: __webpack_require__(/*! ./highlight.component.html */ "./src/app/main/documentation/components/highlight/highlight.component.html"),
            styles: [__webpack_require__(/*! ./highlight.component.scss */ "./src/app/main/documentation/components/highlight/highlight.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsHighlightComponent);
    return DocsComponentsHighlightComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"material-color-picker\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Material Color Picker</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-material-color-picker</code> is a custom built Fuse component allows you to add a color picker\n            that allows to choose one of the many Material spec. colors.\n        </p>\n\n        <div class=\"section-title\">Sample</div>\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <fuse-material-color-picker></fuse-material-color-picker>\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-material-color-picker [(selectedClass)]=\"colorClass\"\n                                                (onValueChange)=\"onSettingsChange()\">\n                    </fuse-material-color-picker>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Two-way bindings</div>\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-16\">selectedClass</code>\n            <span>\n                The name of the Fuse color class to select, e.g. <code>red-500</code>\n            </span>\n        </p>\n        <p class=\"py-8 pt-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-16\">selectedBg</code>\n            <span>\n                The hex code of the color to be selected. It will be only selected if the hex code of the color\n                matches one of the material colors.\n            </span>\n        </p>\n\n        <div class=\"section-title\">Outputs</div>\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-16\">onValueChange</code>\n            <span>\n                Event that triggered when a color selected. Returns an object that holds palette, hue, class name,\n                background and foreground colors.\n            </span>\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DocsComponentsMaterialColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsMaterialColorPickerComponent", function() { return DocsComponentsMaterialColorPickerComponent; });
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

var DocsComponentsMaterialColorPickerComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsMaterialColorPickerComponent() {
    }
    DocsComponentsMaterialColorPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-material-color-picker',
            template: __webpack_require__(/*! ./material-color-picker.component.html */ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html"),
            styles: [__webpack_require__(/*! ./material-color-picker.component.scss */ "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsMaterialColorPickerComponent);
    return DocsComponentsMaterialColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/navigation/navigation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/components/navigation/navigation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Navigation</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-navigation</code> is a custom built Fuse component allows you to create a multi-level collapsable\n            navigation. It has built-in support for translations using <b>ngx-translate</b> module.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-navigation [navigation]=\"navigation\" [layout]=\"'vertical'\"></fuse-navigation>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"my-48\">\n            <h2>[navigation]</h2>\n            <p class=\"py-8\">\n                <code>&lt;fuse-navigation&gt;&lt;/fuse-navigation&gt;</code> uses a json file to populate\n                the entire navigation. It supports three different navigation items; <b>Group</b>,\n                <b>Collapsable</b> and <b>Item</b>. These items can be mixed and matched to create unique and complex\n                navigation layouts.\n            </p>\n            <p class=\"py-8\">\n                Navigation data can be found in <code>src/app/navigation</code> folder along with its translation\n                files. Navigation data and its translation files are set in <b>app.component.ts</b> file. Check that\n                file for more detailed usage example.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h2>[layout]</h2>\n            <p class=\"py-8\">\n                There are two different layout options for the component; <code>vertical</code> and\n                <code>horizontal</code>. You can set the layout using the <code>[layout]</code> input.\n            </p>\n        </div>\n\n        <div class=\"section-title\">Alternative usage (preferred)</div>\n        <p class=\"py-8\">\n            An alternative usage to the above one is to using the <b>Navigation Service</b>. Simply, you get your\n            navigation array, register that as a navigation using the service and then set it as the current\n            navigation. This allows for easier updating and swapping of the navigation:\n        </p>\n\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"ts\">\n                <textarea #source>\n                    // Get your navigation array from database or file\n                    this.navigation = [...]\n\n                    // Register the navigation to the service\n                    this._fuseNavigationService.register('main', this.navigation);\n\n                    // Set the main navigation as our current navigation\n                    this._fuseNavigationService.setCurrentNavigation('main');\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <p class=\"py-8\">\n            Once you register your navigation like this, you no longer need to provide the <b>[navigation]</b> input\n            while using the <code>fuse-navigation</code>:\n        </p>\n\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-navigation [layout]=\"'vertical'\"></fuse-navigation>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"main-title\">Navigation item types</div>\n\n        <div class=\"section-title\">Grouping</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"json\">\n                <textarea #source>\n                    {\n                        'id'       : 'components',\n                        'title'    : 'COMPONENTS',\n                        'translate': 'NAV.COMPONENTS',\n                        'type'     : 'group',\n                        'children' : [\n                            {\n                                'id'   : 'ngx-datatable',\n                                'title': 'ngx-datatable',\n                                'type' : 'item',\n                                'url'  : '/components/datatables/ngx-datatable'\n                            }\n                        ]\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Collapsable</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"json\">\n                <textarea #source>\n                    {\n                        'id'       : 'datatables',\n                        'title'    : 'Datatables',\n                        'translate': 'NAV.DATATABLES',\n                        'type'     : 'collapsable',\n                        'icon'     : 'border_all',\n                        'children' : [\n                            {\n                                'id'   : 'ngx-datatable',\n                                'title': 'ngx-datatable',\n                                'type' : 'item',\n                                'url'  : '/components/datatables/ngx-datatable'\n                            }\n                        ]\n                    },\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Item</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"json\">\n                <textarea #source>\n                    {\n                        'id'       : 'countdown',\n                        'title'    : 'Countdown',\n                        'translate': 'NAV.COUNTDOWN',\n                        'type'     : 'item',\n                        'icon'     : 'settings_input_component',\n                        'url'      : '/components/countdown'\n                    },\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"main-title\">Vertical Navigation Default Folded Status</div>\n        <p>\n            It's possible to change the default folded status of the navigation.\n        </p>\n        <p>\n            Find the layout that you want to edit from <b>app/layout/vertical/</b> directory. Edit the layout's html\n            file and look for the <code>[folded]</code> attribute on <code>fuse-sidebar</code> components.\n        </p>\n        <p>\n            Assigning <code>true</code> to that attribute will make the vertical navigation folded by default.\n        </p>\n\n        <div class=\"main-title\">Updating the navigation</div>\n\n        <p class=\"message-box warning\">\n            In order to make the runtime modifications easier, it's strongly recommended that to give a unique id\n            to all of your navigation items.\n        </p>\n\n        <div class=\"section-title\">Show / Hide certain navigation items</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"showHideCalendarMenuItem()\">\n                Show / Hide calendar menu item\n            </button>\n        </div>\n\n        <p class=\"py-8 mb-48\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    hidden = false;\n\n                    showHideCalendarMenuItem(): void\n                    {\n                        // Get the calendar item from the navigation\n                        const calendarNavItem = this._fuseNavigationService.getNavigationItem('calendar');\n\n                        // Toggle the visibility\n                        this.hidden = !this.hidden;\n                        calendarNavItem.hidden = this.hidden;\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Update navigation item on-the-fly</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"updateMailBadge()\">\n                Update Mail app badge\n            </button>\n        </div>\n\n        <p class=\"py-8 mb-48\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    updateMailBadge()\n                    {\n                        // Get the mail nav item\n                        const mailNavItem = this._fuseNavigationService.getNavigationItem('mail');\n\n                        // Update the badge title\n                        mailNavItem.badge.title = 35;\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Add a subitem to the Calendar nav item</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"addSubitemToCalendar()\">\n                Add a subitem to the Calendar nav item\n            </button>\n        </div>\n\n        <p class=\"py-8 mb-48\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    addSubitemToCalendar()\n                    {\n                        // Prepare the new nav item\n                        const newNavItem = {\n                            id   : 'sub-item',\n                            title: 'Sub Item',\n                            type : 'item',\n                            url  : '/apps/calendar'\n                        };\n\n                        // Get the calendar item from the navigation\n                        const calendarNavItem = this._fuseNavigationService.getNavigationItem('calendar');\n\n                        // Make the calendar navigation item collapsable\n                        calendarNavItem.type = 'collapse';\n\n                        // Add the navigation item\n                        this._fuseNavigationService.addNavigationItem(newNavItem, 'calendar');\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Add a nav item with custom function</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"addNavItemWithCustomFunction()\">\n                Add a nav item with custom function\n            </button>\n        </div>\n\n        <p class=\"py-8 mb-48\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    addNavItemWithCustomFunction()\n                    {\n                        // Prepare the new nav item\n                        const newNavItem = {\n                            id      : 'custom-item',\n                            title   : 'Custom Item',\n                            type    : 'item',\n                            function: () => {\n                                alert('Custom function!');\n                            }\n                        };\n\n                        // Add the new nav item at the beginning of the navigation\n                        this._fuseNavigationService.addNavigationItem(newNavItem, 'start');\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Remove the Dashboards menu item</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"removeDashboards()\">\n                Remove Dashboards menu item\n            </button>\n        </div>\n\n        <p class=\"py-8 mb-48\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    removeDashboards(): void\n                    {\n                        this._fuseNavigationService.removeNavigationItem('dashboards');\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Register a new navigation and toggle to it</div>\n\n        <div class=\"my-24\">\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"registerNewNavigationAndToggle()\">\n                Register a new navigation and toggle to it\n            </button>\n        </div>\n\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    registerNewNavigationAndToggle(): void\n                    {\n                        const adminNav = [\n                            {\n                                id      : 'admin',\n                                title   : 'Admin',\n                                type    : 'group',\n                                icon    : 'apps',\n                                children: [\n                                    {\n                                        id   : 'users',\n                                        title: 'Users',\n                                        type : 'item',\n                                        icon : 'person',\n                                        url  : '/apps/dashboards/analytics'\n                                    },\n                                    {\n                                        id   : 'payments',\n                                        title: 'Payments',\n                                        type : 'item',\n                                        icon : 'attach_money',\n                                        url  : '/apps/academy'\n                                    }\n                                ]\n                            },\n                            {\n                                id      : 'control-panel',\n                                title   : 'Control Panel',\n                                type    : 'group',\n                                icon    : 'apps',\n                                children: [\n                                    {\n                                        id   : 'cron-jobs',\n                                        title: 'Cron Jobs',\n                                        type : 'item',\n                                        icon : 'settings',\n                                        url  : '/apps/file-manager'\n                                    },\n                                    {\n                                        id   : 'maintenance-mode',\n                                        title: 'Maintenance Mode',\n                                        type : 'item',\n                                        icon : 'build',\n                                        url  : '/apps/todo'\n                                    }\n                                ]\n                            }\n                        ];\n\n                        // Register the new navigation\n                        this._fuseNavigationService.register('admin-nav', adminNav);\n\n                        // Set the current navigation\n                        this._fuseNavigationService.setCurrentNavigation('admin-nav');\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/navigation/navigation.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/components/navigation/navigation.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/navigation/navigation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/navigation/navigation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocsComponentsNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsNavigationComponent", function() { return DocsComponentsNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocsComponentsNavigationComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsNavigationComponent(_fuseNavigationService) {
        this._fuseNavigationService = _fuseNavigationService;
        // Set the defaults
        this.hidden = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Show/hide calendar menu item
     */
    DocsComponentsNavigationComponent.prototype.showHideCalendarMenuItem = function () {
        // Get the calendar item from the navigation
        var calendarNavItem = this._fuseNavigationService.getNavigationItem('calendar');
        // Toggle the visibility
        this.hidden = !this.hidden;
        calendarNavItem.hidden = this.hidden;
    };
    /**
     * Update mail badge
     */
    DocsComponentsNavigationComponent.prototype.updateMailBadge = function () {
        // Get the mail nav item
        var mailNavItem = this._fuseNavigationService.getNavigationItem('mail');
        // Update the badge title
        mailNavItem.badge.title = 35;
    };
    /**
     * Add subitem to the calendar
     */
    DocsComponentsNavigationComponent.prototype.addSubitemToCalendar = function () {
        // Prepare the new nav item
        var newNavItem = {
            id: 'sub-item',
            title: 'Sub Item',
            type: 'item',
            url: '/apps/calendar'
        };
        // Get the calendar item from the navigation
        var calendarNavItem = this._fuseNavigationService.getNavigationItem('calendar');
        // Make the calendar navigation item collapsable
        calendarNavItem.type = 'collapsable';
        // Add the navigation item
        this._fuseNavigationService.addNavigationItem(newNavItem, 'calendar');
    };
    /**
     * Add a nav item with custom function
     */
    DocsComponentsNavigationComponent.prototype.addNavItemWithCustomFunction = function () {
        // Prepare the new nav item
        var newNavItem = {
            id: 'custom-item',
            title: 'Custom Item',
            type: 'item',
            function: function () {
                alert('Custom function!');
            }
        };
        // Add the new nav item at the beginning of the navigation
        this._fuseNavigationService.addNavigationItem(newNavItem, 'start');
    };
    /**
     * Remove the dashboard menu item
     */
    DocsComponentsNavigationComponent.prototype.removeDashboards = function () {
        this._fuseNavigationService.removeNavigationItem('dashboards');
    };
    /**
     * Register a new navigation and toggle to it
     */
    DocsComponentsNavigationComponent.prototype.registerNewNavigationAndToggle = function () {
        var adminNav = [
            {
                id: 'admin',
                title: 'Admin',
                type: 'group',
                icon: 'apps',
                children: [
                    {
                        id: 'users',
                        title: 'Users',
                        type: 'item',
                        icon: 'person',
                        url: '/apps/dashboards/analytics'
                    },
                    {
                        id: 'payments',
                        title: 'Payments',
                        type: 'item',
                        icon: 'attach_money',
                        url: '/apps/academy'
                    }
                ]
            },
            {
                id: 'control-panel',
                title: 'Control Panel',
                type: 'group',
                icon: 'apps',
                children: [
                    {
                        id: 'cron-jobs',
                        title: 'Cron Jobs',
                        type: 'item',
                        icon: 'settings',
                        url: '/apps/file-manager'
                    },
                    {
                        id: 'maintenance-mode',
                        title: 'Maintenance Mode',
                        type: 'item',
                        icon: 'build',
                        url: '/apps/todo'
                    }
                ]
            }
        ];
        // Register the new navigation
        this._fuseNavigationService.register('admin-nav', adminNav);
        // Set the current navigation
        this._fuseNavigationService.setCurrentNavigation('admin-nav');
    };
    DocsComponentsNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/main/documentation/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/main/documentation/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["FuseNavigationService"]])
    ], DocsComponentsNavigationComponent);
    return DocsComponentsNavigationComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/progress-bar/progress-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/documentation/components/progress-bar/progress-bar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"progress-bar\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Progress Bar</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-progress-bar</code> is a custom built Fuse component allows you to have a service controlled\n            progress bar. It internally uses <code>mat-progress-bar</code> and provides a global service to control it.\n        </p>\n\n        <p class=\"message-box info\">\n            Due to the nature of global progress bars, <code>fuse-progress-bar</code> can only be used once in the\n            entire app and it's currently located at <code>app.component.html</code> file.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-progress-bar></fuse-progress-bar>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Service Usage</div>\n        <p class=\"py-8\">\n\n            <fuse-highlight lang=\"typescript\">\n                <textarea #source>\n                    export class SomeComponent implements OnInit\n                    {\n                        /**\n                        * Constructor\n                        */\n                        constructor(\n                            private _fuseProgressBarService: FuseProgressBarService\n                        ) {}\n\n                        showcase()\n                        {\n                            // Show the progress bar\n                            this._fuseProgressBarService.show();\n\n                            // Hide the progress bar\n                            this._fuseProgressBarService.hide();\n\n                            // Set the mode\n                            // mode: 'determinate' | 'indeterminate' | 'buffer' | 'query'\n                            this._fuseProgressBarService.setMode(mode);\n\n                            // Set the value\n                            // value: number\n                            this._fuseProgressBarService.setValue(value);\n\n                            // Set the buffer value\n                            // bufferValue: number\n                            this._fuseProgressBarService.setBufferValue(bufferValue);\n                        }\n                    }\n                </textarea>\n            </fuse-highlight>\n\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/progress-bar/progress-bar.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/documentation/components/progress-bar/progress-bar.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/progress-bar/progress-bar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/documentation/components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DocsComponentsProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsProgressBarComponent", function() { return DocsComponentsProgressBarComponent; });
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

var DocsComponentsProgressBarComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsProgressBarComponent() {
    }
    DocsComponentsProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/main/documentation/components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/main/documentation/components/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsProgressBarComponent);
    return DocsComponentsProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/search-bar/search-bar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/components/search-bar/search-bar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-bar\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Search Bar</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-search-bar</code> is a custom built Fuse component allows you to have a search bar that activates\n            on click.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-search-bar (input)=\"search($event)\"></fuse-search-bar>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Outputs</div>\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <code class=\"mr-8\">input</code>\n            <span>Triggers every time an input occurs within the search bar. Can be used to trigger the actual\n                search mechanism. The $event is the value from the search input.\n            </span>\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/search-bar/search-bar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/documentation/components/search-bar/search-bar.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/search-bar/search-bar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/search-bar/search-bar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocsComponentsSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsSearchBarComponent", function() { return DocsComponentsSearchBarComponent; });
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

var DocsComponentsSearchBarComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsSearchBarComponent() {
    }
    DocsComponentsSearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/main/documentation/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/main/documentation/components/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsSearchBarComponent);
    return DocsComponentsSearchBarComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/shortcuts/shortcuts.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/shortcuts/shortcuts.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"shortcuts\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Shortcuts</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-shortcuts</code> is a custom built Fuse component allows you to create and save shortcuts from\n            the navigation model.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-shortcuts></fuse-shortcuts>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"section-title\">Model</div>\n        <p class=\"py-8\">\n            <code>&lt;fuse-shortcuts&gt;&lt;/fuse-shortcuts&gt;</code> uses the same service with navigation\n            component to populate the shortcuts. It can search the navigation items as well as pin and unpin them as\n            shortcuts. It uses browser cookies to store the shortcuts.\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/shortcuts/shortcuts.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/components/shortcuts/shortcuts.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/shortcuts/shortcuts.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/documentation/components/shortcuts/shortcuts.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocsComponentsShortcutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsShortcutsComponent", function() { return DocsComponentsShortcutsComponent; });
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

var DocsComponentsShortcutsComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsShortcutsComponent() {
    }
    DocsComponentsShortcutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-shortcuts',
            template: __webpack_require__(/*! ./shortcuts.component.html */ "./src/app/main/documentation/components/shortcuts/shortcuts.component.html"),
            styles: [__webpack_require__(/*! ./shortcuts.component.scss */ "./src/app/main/documentation/components/shortcuts/shortcuts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsShortcutsComponent);
    return DocsComponentsShortcutsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/sidebar/sidebar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/documentation/components/sidebar/sidebar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Sidebar</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-sidebar</code> is a custom built Fuse component allows you to create a sidebar. Currently it's\n            only used as the main navigation sidebar but in the future it will allow multiple usages.\n        </p>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n                    <fuse-sidebar name=\"navbar\" [folded]=\"someSetting.isFolded\" lockedOpen=\"gt-md\"></fuse-sidebar>\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n        <div class=\"my-48\">\n            <h3><code>[name]</code></h3>\n            <p class=\"py-8\">\n                <b>name</b> attribute allows you to set a unique name to the sidebar. It's required for sidebar to\n                work correctly, as every sidebar being registered to the sidebar service.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>[folded]</code></h3>\n            <p class=\"py-8\">\n                Controls the folded status of the sidebar.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>[foldedWidth]</code></h3>\n            <p class=\"py-8\">\n                Controls the width of the sidebar when it's folded.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>[position]</code></h3>\n            <p class=\"py-8\">\n                Controls the position of the sidebar when it's hidden. This doesn't affect on the locked-open placement\n                of the sidebar, it only controls which side the sidebar is going to slide in when it's completely\n                hidden.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>[lockedOpen]</code></h3>\n            <p class=\"py-8\">\n                Accepts Angular Material breakpoint aliases ('gt-md', 'lg' etc.) and locks open the sidebar if the\n                alias matches the current breakpoint, similar to how Angular Material 1.x sidenav works.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>(onFoldedChanged)</code></h3>\n            <p class=\"py-8\">\n                <b>onFoldedChanged</b> event will be triggered when the sidebar folded or unfolded permanently.\n            </p>\n        </div>\n\n        <div class=\"my-48\">\n            <h3><code>(onOpenedChanged)</code></h3>\n            <p class=\"py-8\">\n                <b>onOpenedChanged</b> event will be triggered when the sidebar opened or closed.\n            </p>\n        </div>\n\n        <div class=\"section-title\">Sidebar Service</div>\n        <p class=\"py-8\">\n            The sidebar service allows you to control the Sidebar's states from anywhere. To access the sidebar,\n            you need to use the name attribute:\n        </p>\n        <p class=\"py-8\">\n            <fuse-highlight lang=\"ts\">\n                <textarea #source>\n                    toggleSidebar(): void\n                    {\n                        this._fuseSidebarService.getSidebar('my-left-sidebar').toggleOpen();\n                    }\n                </textarea>\n            </fuse-highlight>\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/sidebar/sidebar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/documentation/components/sidebar/sidebar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/sidebar/sidebar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/documentation/components/sidebar/sidebar.component.ts ***!
  \****************************************************************************/
/*! exports provided: DocsComponentsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsSidebarComponent", function() { return DocsComponentsSidebarComponent; });
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

var DocsComponentsSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsSidebarComponent() {
    }
    DocsComponentsSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/main/documentation/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/main/documentation/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsSidebarComponent);
    return DocsComponentsSidebarComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/components/widget/widget.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/documentation/components/widget/widget.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widget\" class=\"page-layout simple fullwidth docs\">\n\n    <!-- HEADER -->\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Documentation</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n            </div>\n            <div class=\"h2 mt-16\">Widget</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>fuse-widget</code> is a custom built Fuse component allows to create flippable widget boxes.\n        </p>\n\n        <div class=\"section-title\">Sample</div>\n        <div>\n            <fuse-widget class=\"\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                <!-- Front -->\n                <div class=\"fuse-widget-front mat-elevation-z2\">\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <div>Widget title</div>\n\n                        <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button>\n                    </div>\n\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                        Widget Content\n                    </div>\n                </div>\n                <!-- / Front -->\n\n                <!-- Back -->\n                <div class=\"fuse-widget-back p-16 pt-32 mat-elevation-z2\">\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                            aria-label=\"Flip widget\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n\n                    <div>\n                        More widget info\n                    </div>\n                </div>\n                <!-- / Back -->\n\n            </fuse-widget>\n        </div>\n\n        <div class=\"section-title\">Usage</div>\n        <p class=\"py-8\">\n\n            <fuse-highlight lang=\"html\">\n                <textarea #source>\n\n                    <fuse-widget class=\"\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                        <!-- Front -->\n                        <div class=\"fuse-widget-front mat-elevation-z2\">\n                            <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div>Widget title</div>\n\n                                <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\n                                    <mat-icon>more_vert</mat-icon>\n                                </button>\n                            </div>\n\n                            <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                Widget Content\n                            </div>\n                        </div>\n                        <!-- / Front -->\n\n                        <!-- Back -->\n                        <div class=\"fuse-widget-back p-16 pt-32 mat-elevation-z2\">\n                            <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                    aria-label=\"Flip widget\">\n                                <mat-icon class=\"s-16\">close</mat-icon>\n                            </button>\n\n                            <div>\n                                More widget info\n                            </div>\n                        </div>\n                        <!-- / Back -->\n\n                    </fuse-widget>\n\n                </textarea>\n            </fuse-highlight>\n\n        </p>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/documentation/components/widget/widget.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/documentation/components/widget/widget.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1100px; }\n"

/***/ }),

/***/ "./src/app/main/documentation/components/widget/widget.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/documentation/components/widget/widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: DocsComponentsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponentsWidgetComponent", function() { return DocsComponentsWidgetComponent; });
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

var DocsComponentsWidgetComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsComponentsWidgetComponent() {
    }
    DocsComponentsWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-components-widget',
            template: __webpack_require__(/*! ./widget.component.html */ "./src/app/main/documentation/components/widget/widget.component.html"),
            styles: [__webpack_require__(/*! ./widget.component.scss */ "./src/app/main/documentation/components/widget/widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponentsWidgetComponent);
    return DocsComponentsWidgetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map