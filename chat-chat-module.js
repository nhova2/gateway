(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"big-circle mat-elevation-z6 app-logo\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n         [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n\n        <mat-icon class=\"s-64 s-md-128 mat-accent\">chat</mat-icon>\n\n    </div>\n\n    <span class=\"app-title mt-48 mb-16\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">Chat App</span>\n\n    <span fxHide fxShow.gt-md class=\"app-message\" [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\n        Select a contact to start a chat!\n    </span>\n\n    <button mat-raised-button fxHide.gt-md fuseMatSidenavToggler=\"chat-left-sidenav\">\n        Select a contact to start a chat!\n    </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nchat-start {\n  display: flex;\n  flex: 1; }\nchat-start .big-circle {\n    border-radius: 50%;\n    width: 240px;\n    height: 240px;\n    line-height: 240px;\n    text-align: center; }\n@media (max-width: 959px) {\n      chat-start .big-circle {\n        width: 160px;\n        height: 160px;\n        line-height: 160px; } }\nchat-start .app-title {\n    font-weight: 500;\n    font-size: 32px; }\nchat-start .secondary-text {\n    font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatStartComponent", function() { return ChatStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatStartComponent = /** @class */ (function () {
    function ChatStartComponent() {
    }
    ChatStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-start',
            template: __webpack_require__(/*! ./chat-start.component.html */ "./src/app/main/apps/chat/chat-start/chat-start.component.html"),
            styles: [__webpack_require__(/*! ./chat-start.component.scss */ "./src/app/main/apps/chat/chat-start/chat-start.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], ChatStartComponent);
    return ChatStartComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CHAT -->\n<div class=\"chat\" fxFlex fxLayout=\"column\">\n\n    <!-- CHAT TOOLBAR -->\n    <mat-toolbar class=\"chat-toolbar\">\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <!-- RESPONSIVE CHATS BUTTON-->\n                <button mat-icon-button fxHide.gt-md class=\"responsive-chats-button mr-16\"\n                        fuseMatSidenavToggler=\"chat-left-sidenav\"\n                        aria-label=\"chats button\">\n                    <mat-icon>chat</mat-icon>\n                </button>\n                <!-- / RESPONSIVE CHATS BUTTON-->\n\n                <!-- CHAT CONTACT-->\n                <div class=\"chat-contact\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                     fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\n\n                    <div class=\"avatar-wrapper\">\n\n                        <img [src]=\"contact.avatar\"\n                             class=\"avatar\"\n                             alt=\"{{contact.name}}\"/>\n\n                        <mat-icon class=\"s-16 status\"\n                                  [ngClass]=\"contact.status\">\n                        </mat-icon>\n                    </div>\n\n                    <div class=\"chat-contact-name\">\n                        {{contact.name}}\n                    </div>\n\n                </div>\n                <!-- / CHAT CONTACT-->\n            </div>\n\n            <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"contactMenu\" aria-label=\"more\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #contactMenu=\"matMenu\">\n                    <button mat-menu-item fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\n                        Contact Info\n                    </button>\n                </mat-menu>\n            </div>\n\n        </div>\n    </mat-toolbar>\n    <!-- / CHAT TOOLBAR -->\n\n    <!-- CHAT CONTENT -->\n    <div id=\"chat-content\" fxFlex=\"1 1 auto\"  fusePerfectScrollbar>\n\n        <!-- CHAT MESSAGES -->\n        <div class=\"chat-messages\">\n\n            <!-- MESSAGE -->\n            <div *ngFor=\"let message of dialog; let i = index\" class=\"message-row\"\n                 [ngClass]=\"{\n                            'me': message.who === user.id,\n                            'contact': message.who !== user.id,\n                            'first-of-group': isFirstMessageOfGroup(message, i),\n                            'last-of-group': isLastMessageOfGroup(message, i)\n                            }\">\n\n                <img *ngIf=\"shouldShowContactAvatar(message, i)\"\n                     src=\"{{contact.avatar}}\"\n                     class=\"avatar\">\n\n                <div class=\"bubble\">\n                    <div class=\"message\">{{message.message}}</div>\n                    <div class=\"time secondary-text\">{{message.time | date:'short'}}</div>\n                </div>\n\n            </div>\n            <!-- / MESSAGE -->\n\n        </div>\n        <!-- CHAT MESSAGES -->\n\n    </div>\n    <!-- / CHAT CONTENT -->\n\n    <!-- CHAT FOOTER -->\n    <div class=\"chat-footer\" fxFlex=\"0 0 auto\" fxLayout=\"column\">\n\n        <!-- REPLY FORM -->\n        <div class=\"reply-form\" fxFlex=\"0 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n            <form #replyForm=\"ngForm\"\n                  (ngSubmit)=\"reply($event)\"\n                  (keydown.enter)=\"reply($event)\"\n                  fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <mat-form-field class=\"message-text\" fxFlex floatLabel=\"never\" appearance=\"standard\">\n                    <textarea matInput #replyInput placeholder=\"Type your message\"\n                              ngModel name=\"message\" [rows]=\"1\" [matTextareaAutosize]=\"true\"></textarea>\n                </mat-form-field>\n\n                <button class=\"send-message-button\" mat-icon-button type=\"submit\" aria-label=\"Send message\">\n                    <mat-icon class=\"secondary-text\">send</mat-icon>\n                </button>\n\n            </form>\n\n        </div>\n        <!-- / REPLY FORM -->\n\n    </div>\n    <!-- / CHAT FOOTER-->\n\n</div>\n<!-- / CHAT -->\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nchat-view {\n  display: flex;\n  flex: 1 0 auto;\n  overflow: hidden;\n  max-width: 100%; }\nchat-view .chat .chat-toolbar {\n    min-height: 64px;\n    border-bottom: 1px solid; }\nchat-view .chat .chat-toolbar .responsive-chats-button {\n      padding: 0; }\nchat-view .chat .chat-toolbar .chat-contact {\n      cursor: pointer; }\nchat-view .chat .chat-toolbar .chat-contact .avatar {\n        margin-right: 16px; }\nchat-view .chat #chat-content {\n    background: transparent;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\nchat-view .chat #chat-content .chat-messages {\n      position: relative;\n      padding: 16px 0 40px 40px; }\nchat-view .chat #chat-content .chat-messages .message-row {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: flex-end;\n        padding: 0 16px 4px 16px; }\nchat-view .chat #chat-content .chat-messages .message-row .avatar {\n          position: absolute;\n          left: -32px;\n          margin: 0; }\nchat-view .chat #chat-content .chat-messages .message-row .bubble {\n          position: relative;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 12px;\n          max-width: 100%; }\nchat-view .chat #chat-content .chat-messages .message-row .bubble .message {\n            white-space: pre-wrap;\n            line-height: 1.2; }\nchat-view .chat #chat-content .chat-messages .message-row .bubble .time {\n            position: absolute;\n            display: none;\n            width: 100%;\n            font-size: 11px;\n            margin-top: 8px;\n            top: 100%;\n            left: 0;\n            white-space: nowrap; }\nchat-view .chat #chat-content .chat-messages .message-row.contact .bubble {\n          border-top-left-radius: 5px;\n          border-bottom-left-radius: 5px;\n          border-top-right-radius: 20px;\n          border-bottom-right-radius: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.contact .bubble .time {\n            margin-left: 12px; }\nchat-view .chat #chat-content .chat-messages .message-row.contact.first-of-group .bubble {\n          border-top-left-radius: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.contact.last-of-group .bubble {\n          border-bottom-left-radius: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.me {\n          padding-left: 40px; }\nchat-view .chat #chat-content .chat-messages .message-row.me .avatar {\n            order: 2;\n            margin: 0 0 0 16px; }\nchat-view .chat #chat-content .chat-messages .message-row.me .bubble {\n            margin-left: auto;\n            border-top-left-radius: 20px;\n            border-bottom-left-radius: 20px;\n            border-top-right-radius: 5px;\n            border-bottom-right-radius: 5px; }\nchat-view .chat #chat-content .chat-messages .message-row.me .bubble .time {\n              justify-content: flex-end;\n              right: 0;\n              margin-right: 12px; }\nchat-view .chat #chat-content .chat-messages .message-row.me.first-of-group .bubble {\n            border-top-right-radius: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.me.last-of-group .bubble {\n            border-bottom-right-radius: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.contact + .me,\n        chat-view .chat #chat-content .chat-messages .message-row.me + .contact {\n          padding-top: 20px;\n          margin-top: 20px; }\nchat-view .chat #chat-content .chat-messages .message-row.first-of-group .bubble {\n          border-top-left-radius: 20px;\n          padding-top: 13px; }\nchat-view .chat #chat-content .chat-messages .message-row.last-of-group .bubble {\n          border-bottom-left-radius: 20px;\n          padding-bottom: 13px; }\nchat-view .chat #chat-content .chat-messages .message-row.last-of-group .bubble .time {\n            display: flex; }\nchat-view .chat .chat-footer {\n    border-top: 1px solid;\n    padding: 8px 8px 8px 16px; }\nchat-view .chat .chat-footer .reply-form {\n      position: relative; }\nchat-view .chat .chat-footer .reply-form .message-text {\n        padding: 16px 8px; }\nchat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper {\n          padding: 0; }\nchat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex {\n            padding: 0; }\nchat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix {\n              padding: 0;\n              border: none;\n              border-radius: 20px;\n              box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\nchat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix textarea {\n                overflow: hidden;\n                margin: 16px 48px 16px 16px;\n                width: calc(100% - 64px);\n                padding: 0; }\nchat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-underline {\n            display: none !important; }\nchat-view .chat .chat-footer .reply-form .send-message-button {\n        position: absolute;\n        right: 16px;\n        bottom: 21px; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewComponent", function() { return ChatViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatViewComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatViewComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this._chatService.onChatSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (chatData) {
            if (chatData) {
                _this.selectedChat = chatData;
                _this.contact = chatData.contact;
                _this.dialog = chatData.dialog;
                _this.readyToReply();
            }
        });
    };
    /**
     * After view init
     */
    ChatViewComponent.prototype.ngAfterViewInit = function () {
        this.replyInput = this.replyInputField.first.nativeElement;
        this.readyToReply();
    };
    /**
     * On destroy
     */
    ChatViewComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Decide whether to show or not the contact's avatar in the message row
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    ChatViewComponent.prototype.shouldShowContactAvatar = function (message, i) {
        return (message.who === this.contact.id &&
            ((this.dialog[i + 1] && this.dialog[i + 1].who !== this.contact.id) || !this.dialog[i + 1]));
    };
    /**
     * Check if the given message is the first message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    ChatViewComponent.prototype.isFirstMessageOfGroup = function (message, i) {
        return (i === 0 || this.dialog[i - 1] && this.dialog[i - 1].who !== message.who);
    };
    /**
     * Check if the given message is the last message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    ChatViewComponent.prototype.isLastMessageOfGroup = function (message, i) {
        return (i === this.dialog.length - 1 || this.dialog[i + 1] && this.dialog[i + 1].who !== message.who);
    };
    /**
     * Select contact
     */
    ChatViewComponent.prototype.selectContact = function () {
        this._chatService.selectContact(this.contact);
    };
    /**
     * Ready to reply
     */
    ChatViewComponent.prototype.readyToReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.focusReplyInput();
            _this.scrollToBottom();
        });
    };
    /**
     * Focus to the reply input
     */
    ChatViewComponent.prototype.focusReplyInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyInput.focus();
        });
    };
    /**
     * Scroll to the bottom
     *
     * @param {number} speed
     */
    ChatViewComponent.prototype.scrollToBottom = function (speed) {
        var _this = this;
        speed = speed || 400;
        if (this.directiveScroll) {
            this.directiveScroll.update();
            setTimeout(function () {
                _this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    };
    /**
     * Reply
     */
    ChatViewComponent.prototype.reply = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.replyForm.form.value.message) {
            return;
        }
        // Message
        var message = {
            who: this.user.id,
            message: this.replyForm.form.value.message,
            time: new Date().toISOString()
        };
        // Add the message to the chat
        this.dialog.push(message);
        // Reset the reply form
        this.replyForm.reset();
        // Update the server
        this._chatService.updateDialog(this.selectedChat.chatId, this.dialog).then(function (response) {
            _this.readyToReply();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__["FusePerfectScrollbarDirective"]),
        __metadata("design:type", _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__["FusePerfectScrollbarDirective"])
    ], ChatViewComponent.prototype, "directiveScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('replyInput'),
        __metadata("design:type", Object)
    ], ChatViewComponent.prototype, "replyInputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('replyForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ChatViewComponent.prototype, "replyForm", void 0);
    ChatViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-view',
            template: __webpack_require__(/*! ./chat-view.component.html */ "./src/app/main/apps/chat/chat-view/chat-view.component.html"),
            styles: [__webpack_require__(/*! ./chat-view.component.scss */ "./src/app/main/apps/chat/chat-view/chat-view.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
    ], ChatViewComponent);
    return ChatViewComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chat\" class=\"page-layout carded fullwidth inner-scroll\">\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg accent\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card\">\n\n            <mat-sidenav-container>\n\n                <!-- LEFT SIDENAV -->\n                <mat-sidenav class=\"sidenav\" position=\"start\" opened=\"true\" mode=\"side\"\n                             fuseMatSidenavHelper=\"chat-left-sidenav\" matIsLockedOpen=\"gt-md\">\n                    <chat-left-sidenav></chat-left-sidenav>\n                </mat-sidenav>\n                <!-- / LEFT SIDENAV -->\n\n                <!-- CONTENT -->\n                <chat-start *ngIf=\"!selectedChat\"></chat-start>\n\n                <chat-view *ngIf=\"selectedChat\"></chat-view>\n                <!-- / CONTENT -->\n\n                <!-- RIGHT SIDENAV -->\n                <mat-sidenav class=\"sidenav\" position=\"end\" opened=\"false\" mode=\"over\"\n                             fuseMatSidenavHelper=\"chat-right-sidenav\">\n                    <chat-right-sidenav></chat-right-sidenav>\n                </mat-sidenav>\n                <!-- / RIGHT SIDENAV -->\n\n            </mat-sidenav-container>\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#chat .center {\n  padding: 32px !important;\n  max-width: 1400px;\n  margin: 0 auto; }\n@media (max-width: 1279px) {\n    #chat .center {\n      padding: 0 !important; } }\n#chat .center .content-card {\n    display: flex;\n    flex: 1;\n    position: relative; }\n#chat .center .content-card .mat-sidenav-container {\n      display: flex;\n      flex: 1;\n      width: 100%; }\n#chat .center .content-card .mat-sidenav-container > .mat-sidenav-content,\n      #chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n        display: flex;\n        flex: 1 1 auto;\n        min-height: 100%;\n        height: auto; }\n#chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n        max-width: 100%; }\n#chat .center .content-card .mat-sidenav-container mat-sidenav {\n        display: flex;\n        flex-direction: column;\n        width: 400px;\n        max-width: 90%;\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0.37);\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onChatSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (chatData) {
            _this.selectedChat = chatData;
        });
    };
    /**
     * On destroy
     */
    ChatComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/main/apps/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/main/apps/chat/chat.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/apps/chat/chat.module.ts ***!
  \***********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
/* harmony import */ var app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/chat/chat.component */ "./src/app/main/apps/chat/chat.component.ts");
/* harmony import */ var app_main_apps_chat_chat_start_chat_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/chat/chat-start/chat-start.component */ "./src/app/main/apps/chat/chat-start/chat-start.component.ts");
/* harmony import */ var app_main_apps_chat_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/chat/chat-view/chat-view.component */ "./src/app/main/apps/chat/chat-view/chat-view.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_chats_chats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/chats/chats.component */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/user/user.component */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_left_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/left.component */ "./src/app/main/apps/chat/sidenavs/left/left.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_right_right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/right/right.component */ "./src/app/main/apps/chat/sidenavs/right/right.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_right_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/right/contact/contact.component */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '**',
        component: app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        children: [],
        resolve: {
            chat: app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
        }
    }
];
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                app_main_apps_chat_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_7__["ChatViewComponent"],
                app_main_apps_chat_chat_start_chat_start_component__WEBPACK_IMPORTED_MODULE_6__["ChatStartComponent"],
                app_main_apps_chat_sidenavs_left_chats_chats_component__WEBPACK_IMPORTED_MODULE_8__["ChatChatsSidenavComponent"],
                app_main_apps_chat_sidenavs_left_user_user_component__WEBPACK_IMPORTED_MODULE_9__["ChatUserSidenavComponent"],
                app_main_apps_chat_sidenavs_left_left_component__WEBPACK_IMPORTED_MODULE_10__["ChatLeftSidenavComponent"],
                app_main_apps_chat_sidenavs_right_right_component__WEBPACK_IMPORTED_MODULE_11__["ChatRightSidenavComponent"],
                app_main_apps_chat_sidenavs_right_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ChatContactSidenavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.service.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/chat/chat.service.ts ***!
  \************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
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




var ChatService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ChatService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLeftSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onRightSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ChatService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getChats(),
                _this.getUser()
            ]).then(function (_a) {
                var contacts = _a[0], chats = _a[1], user = _a[2];
                _this.contacts = contacts;
                _this.chats = chats;
                _this.user = user;
                resolve();
            }, reject);
        });
    };
    /**
     * Get chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChat = function (contactId) {
        var _this = this;
        var chatItem = this.user.chatList.find(function (item) {
            return item.contactId === contactId;
        });
        // Create new chat, if it's not created yet.
        if (!chatItem) {
            this.createNewChat(contactId).then(function (newChats) {
                _this.getChat(contactId);
            });
            return;
        }
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-chats/' + chatItem.id)
                .subscribe(function (response) {
                var chat = response;
                var chatContact = _this.contacts.find(function (contact) {
                    return contact.id === contactId;
                });
                var chatData = {
                    chatId: chat.id,
                    dialog: chat.dialog,
                    contact: chatContact
                };
                _this.onChatSelected.next(__assign({}, chatData));
            }, reject);
        });
    };
    /**
     * Create new chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.createNewChat = function (contactId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contact = _this.contacts.find(function (item) {
                return item.id === contactId;
            });
            var chatId = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].generateGUID();
            var chat = {
                id: chatId,
                dialog: []
            };
            var chatListItem = {
                contactId: contactId,
                id: chatId,
                lastMessageTime: '2017-02-18T10:30:18.931Z',
                name: contact.name,
                unread: null
            };
            // Add new chat list item to the user's chat list
            _this.user.chatList.push(chatListItem);
            // Post the created chat
            _this._httpClient.post('api/chat-chats', __assign({}, chat))
                .subscribe(function (response) {
                // Post the new the user data
                _this._httpClient.post('api/chat-user/' + _this.user.id, _this.user)
                    .subscribe(function (newUserData) {
                    // Update the user data from server
                    _this.getUser().then(function (updatedUser) {
                        _this.onUserUpdated.next(updatedUser);
                        resolve(updatedUser);
                    });
                });
            }, reject);
        });
    };
    /**
     * Select contact
     *
     * @param contact
     */
    ChatService.prototype.selectContact = function (contact) {
        this.onContactSelected.next(contact);
    };
    /**
     * Set user status
     *
     * @param status
     */
    ChatService.prototype.setUserStatus = function (status) {
        this.user.status = status;
    };
    /**
     * Update user data
     *
     * @param userData
     */
    ChatService.prototype.updateUserData = function (userData) {
        var _this = this;
        this._httpClient.post('api/chat-user/' + this.user.id, userData)
            .subscribe(function (response) {
            _this.user = userData;
        });
    };
    /**
     * Update the chat dialog
     *
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    ChatService.prototype.updateDialog = function (chatId, dialog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = {
                id: chatId,
                dialog: dialog
            };
            _this._httpClient.post('api/chat-chats/' + chatId, newData)
                .subscribe(function (updatedChat) {
                resolve(updatedChat);
            }, reject);
        });
    };
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-contacts')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get chats
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-chats')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get user
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-user')
                .subscribe(function (response) {
                resolve(response[0]);
            }, reject);
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\">\n    <!-- CHATS TOOLBAR -->\n    <mat-toolbar>\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <!-- USER AVATAR WRAPPER -->\n            <div class=\"avatar-wrapper\">\n\n                <!-- USER AVATAR -->\n                <img (click)=\"changeLeftSidenavView('user')\"\n                     src=\"{{user.avatar}}\"\n                     class=\"mat-avatar avatar\"\n                     alt=\"{{user.name}}\"/>\n                <!-- / USER AVATAR -->\n\n                <mat-icon class=\"s-16 status\" [ngClass]=\"user.status\"\n                          [matMenuTriggerFor]=\"userStatusMenu\"></mat-icon>\n\n                <!-- USER STATUS -->\n                <mat-menu id=\"user-status-menu\" #userStatusMenu=\"matMenu\">\n\n                    <button mat-menu-item (click)=\"setUserStatus('online')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status online\"></mat-icon>\n                            <span>Online</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('away')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status away\"></mat-icon>\n                            <span>Away</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('do-not-disturb')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status do-not-disturb\"></mat-icon>\n                            <span>Do not disturb</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"setUserStatus('offline')\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16 status offline\"></mat-icon>\n                            <span>Offline</span>\n                        </div>\n                    </button>\n                </mat-menu>\n                <!-- / USER STATUS -->\n\n            </div>\n            <!-- / USER AVATAR -->\n\n            <div>\n                <button mat-icon-button\n                        [matMenuTriggerFor]=\"userMenu\"\n                        aria-label=\"more\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #userMenu=\"matMenu\">\n                    <button mat-menu-item (click)=\"changeLeftSidenavView('user')\">\n                        Profile\n                    </button>\n                    <button mat-menu-item (click)=\"logout()\">\n                        Logout\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row>\n\n            <!-- SEARCH -->\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <mat-icon>search</mat-icon>\n\n                    <input [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search or start new chat\" fxFlex>\n\n                </div>\n            </div>\n            <!-- / SEARCH -->\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / CHATS TOOLBAR -->\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content\" fusePerfectScrollbar fxFlex>\n\n    <!-- CHATS CONTENT -->\n    <div *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n        <!-- CHATS LIST-->\n        <div class=\"chat-list\" fxLayout=\"column\">\n\n            <div matSubheader *ngIf=\"(user.chatList | filter: searchText).length > 0\">\n                Chats\n            </div>\n\n            <button mat-button class=\"contact\"\n                    *ngFor=\"let chat of user.chatList | filter: searchText\"\n                    (click)=\"getChat(chat.contactId)\" ngClass=\"{'unread':contact.unread}\"\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\" fxLayoutAlign=\"center center\">\n                        <img [src]=\"contacts | getById:chat.contactId:'avatar'\"\n                             class=\"avatar\"\n                             alt=\"{{contacts | getById:chat.contactId:'name'}}\"/>\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contacts | getById:chat.contactId:'status'\"></mat-icon>\n                    </div>\n\n                    <div fxLayout=\"row\" fxFlex>\n\n                        <div class=\"\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                            <div class=\"contact-name\">{{contacts | getById:chat.contactId:'name'}}</div>\n                            <div class=\"contact-last-message\">{{chat.lastMessage}}</div>\n                        </div>\n\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center end\">\n                            <div class=\"contact-last-message-time\">\n                                {{chat.lastMessageTime | date}}\n                            </div>\n                            <div *ngIf=\"chat.unread\" class=\"unread-message-count accent\">{{chat.unread}}</div>\n                        </div>\n                    </div>\n                </div>\n            </button>\n\n        </div>\n        <!-- / CHATS LIST-->\n\n        <!-- CONTACTS LIST-->\n        <div class=\"contact-list\" fxLayout=\"column\">\n\n            <div matSubheader *ngIf=\"(contacts | filter: searchText).length > 0\">\n                Contacts\n            </div>\n\n            <button mat-button class=\"contact\"\n                    *ngFor=\"let contact of contacts| filter: searchText\"\n                    (click)=\"getChat(contact.id)\"\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\">\n                        <img src=\"{{contact.avatar}}\" class=\"mat-avatar avatar\" alt=\"{{contact.name}}\"/>\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contact.status\"></mat-icon>\n                    </div>\n\n                    <div class=\"\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n                        <div class=\"contact-name\">{{contact.name}}</div>\n                        <p class=\"contact-mood\">{{contact.mood}}</p>\n                    </div>\n                </div>\n            </button>\n        </div>\n        <!-- / CONTACTS LIST-->\n\n        <!-- NO RESULTS MESSAGE -->\n        <div *ngIf=\"(contacts | filter: searchText).length === 0\" class=\"no-results-message\">\n            No results..\n        </div>\n        <!-- NO RESULTS MESSAGE-->\n\n    </div>\n    <!-- / CHATS CONTENT -->\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nchat-chats-sidenav {\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\nchat-chats-sidenav .sidenav-header mat-toolbar {\n    border-bottom: 1px solid; }\nchat-chats-sidenav .sidenav-header mat-toolbar .avatar-wrapper .avatar,\n    chat-chats-sidenav .sidenav-header mat-toolbar .avatar-wrapper .status {\n      cursor: pointer; }\nchat-chats-sidenav .sidenav-header mat-toolbar .search {\n      height: 36px;\n      line-height: 36px;\n      padding: 8px;\n      font-size: 13px;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\nchat-chats-sidenav .sidenav-header mat-toolbar .search .icon {\n        margin: 0; }\nchat-chats-sidenav .sidenav-header mat-toolbar .search input {\n        padding-left: 12px;\n        height: 36px;\n        border: none; }\nchat-chats-sidenav .sidenav-content {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\nchat-chats-sidenav .sidenav-content .contact-list .mat-subheader,\n    chat-chats-sidenav .sidenav-content .chat-list .mat-subheader {\n      padding-left: 16px;\n      font-size: 20px;\n      font-weight: 300;\n      height: 88px;\n      line-height: 88px; }\nchat-chats-sidenav .sidenav-content .contact-list .contact,\n    chat-chats-sidenav .sidenav-content .chat-list .contact {\n      white-space: normal;\n      text-align: left;\n      letter-spacing: .010em;\n      min-height: 88px;\n      border-bottom: 1px solid;\n      padding: 16px;\n      font-weight: 400; }\nchat-chats-sidenav .sidenav-content .contact-list .contact .avatar-wrapper .avatar,\n      chat-chats-sidenav .sidenav-content .chat-list .contact .avatar-wrapper .avatar {\n        margin-right: 16px; }\nchat-chats-sidenav .sidenav-content .contact-list .contact .contact-name,\n      chat-chats-sidenav .sidenav-content .chat-list .contact .contact-name {\n        font-size: 16px;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\nchat-chats-sidenav .sidenav-content .contact-list .contact .contact-last-message,\n      chat-chats-sidenav .sidenav-content .chat-list .contact .contact-last-message {\n        line-height: normal;\n        margin-top: 0; }\nchat-chats-sidenav .sidenav-content .contact-list .contact .contact-mood,\n      chat-chats-sidenav .sidenav-content .chat-list .contact .contact-mood {\n        line-height: normal;\n        margin-top: 0; }\nchat-chats-sidenav .sidenav-content .contact-list .contact .unread-message-count,\n      chat-chats-sidenav .sidenav-content .chat-list .contact .unread-message-count {\n        border-radius: 50%;\n        text-align: center;\n        width: 24px;\n        height: 24px;\n        line-height: 24px; }\nchat-chats-sidenav .sidenav-content .no-results-message {\n      position: absolute;\n      width: 100%;\n      height: 88px;\n      padding: 16px;\n      font-size: 15px;\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatChatsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChatsSidenavComponent", function() { return ChatChatsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service */ "./src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatChatsSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     * @param {FuseMatSidenavHelperService} _fuseMatSidenavHelperService
     * @param {ObservableMedia} _observableMedia
     */
    function ChatChatsSidenavComponent(_chatService, _fuseMatSidenavHelperService, _observableMedia) {
        this._chatService = _chatService;
        this._fuseMatSidenavHelperService = _fuseMatSidenavHelperService;
        this._observableMedia = _observableMedia;
        // Set the defaults
        this.chatSearch = {
            name: ''
        };
        this.searchText = '';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatChatsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this.chats = this._chatService.chats;
        this.contacts = this._chatService.contacts;
        this._chatService.onChatsUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (updatedChats) {
            _this.chats = updatedChats;
        });
        this._chatService.onUserUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (updatedUser) {
            _this.user = updatedUser;
        });
    };
    /**
     * On destroy
     */
    ChatChatsSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Get chat
     *
     * @param contact
     */
    ChatChatsSidenavComponent.prototype.getChat = function (contact) {
        this._chatService.getChat(contact);
        if (!this._observableMedia.isActive('gt-md')) {
            this._fuseMatSidenavHelperService.getSidenav('chat-left-sidenav').toggle();
        }
    };
    /**
     * Set user status
     *
     * @param status
     */
    ChatChatsSidenavComponent.prototype.setUserStatus = function (status) {
        this._chatService.setUserStatus(status);
    };
    /**
     * Change left sidenav view
     *
     * @param view
     */
    ChatChatsSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this._chatService.onLeftSidenavViewChanged.next(view);
    };
    /**
     * Logout
     */
    ChatChatsSidenavComponent.prototype.logout = function () {
        console.log('logout triggered');
    };
    ChatChatsSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-chats-sidenav',
            template: __webpack_require__(/*! ./chats.component.html */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html"),
            styles: [__webpack_require__(/*! ./chats.component.scss */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"],
            _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["FuseMatSidenavHelperService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], ChatChatsSidenavComponent);
    return ChatChatsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\n    <chat-chats-sidenav class=\"view\"\n                        *ngSwitchCase=\"'chats'\"\n                        [@slideInRight]>\n    </chat-chats-sidenav>\n\n    <chat-user-sidenav class=\"view\"\n                       *ngSwitchCase=\"'user'\"\n                       [@slideInLeft]\n                       fusePerfectScrollbar>\n    </chat-user-sidenav>\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "chat-left-sidenav {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  chat-left-sidenav .views {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  chat-left-sidenav .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatLeftSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidenavComponent", function() { return ChatLeftSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatLeftSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatLeftSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the defaults
        this.view = 'chats';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatLeftSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onLeftSidenavViewChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (view) {
            _this.view = view;
        });
    };
    /**
     * On destroy
     */
    ChatLeftSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatLeftSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-left-sidenav',
            template: __webpack_require__(/*! ./left.component.html */ "./src/app/main/apps/chat/sidenavs/left/left.component.html"),
            styles: [__webpack_require__(/*! ./left.component.scss */ "./src/app/main/apps/chat/sidenavs/left/left.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatLeftSidenavComponent);
    return ChatLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\">\n\n    <!-- USER TOOLBAR -->\n    <mat-toolbar class=\"accent\">\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-icon-button (click)=\"changeLeftSidenavView('chats')\" aria-label=\"back\">\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n            <img [src]=\"user.avatar\" class=\"avatar user-avatar huge\" alt=\"{{user.name}}\"/>\n            <div class=\"user-name my-8\">{{user.name}}</div>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / USER TOOLBAR -->\n</div>\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content py-32 px-24\" fxFlex>\n\n    <!-- USER MOOD -->\n    <form [formGroup]=\"userForm\" fxLayout=\"column\">\n\n        <mat-form-field class=\"mb-24\" fxFlex=\"0 1 auto\">\n            <textarea matInput placeholder=\"Mood\" name=\"mood\"\n                      formControlName=\"mood\" rows=\"3\"></textarea>\n        </mat-form-field>\n\n        <mat-radio-group formControlName=\"status\" fxLayout=\"column\">\n\n            <mat-radio-button value=\"online\" class=\"py-8\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon class=\"status online mr-8\"></mat-icon>\n                    <span class=\"mat-h4 m-0\">Online</span>\n                </div>\n            </mat-radio-button>\n\n            <mat-radio-button value=\"away\" class=\"py-8\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon class=\"status away mr-8\"></mat-icon>\n                    <span class=\"mat-h4 m-0\">Away</span>\n                </div>\n            </mat-radio-button>\n\n            <mat-radio-button value=\"do-not-disturb\" class=\"py-8\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon class=\"status do-not-disturb mr-8\"></mat-icon>\n                    <span class=\"mat-h4 m-0\">Do not disturb</span>\n                </div>\n            </mat-radio-button>\n\n            <mat-radio-button value=\"offline\" class=\"py-8\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon class=\"status offline mr-8\"></mat-icon>\n                    <span class=\"mat-h4 m-0\">Offline</span>\n                </div>\n            </mat-radio-button>\n        </mat-radio-group>\n\n    </form>\n    <!-- / USER MOOD -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nchat-user-sidenav {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\nchat-user-sidenav mat-toolbar .toolbar-bottom {\n    height: 180px; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatUserSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserSidenavComponent", function() { return ChatUserSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatUserSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatUserSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatUserSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mood: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.mood),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.status)
        });
        this.userForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            _this.user.mood = data.mood;
            _this.user.status = data.status;
            _this._chatService.updateUserData(_this.user);
        });
    };
    /**
     * On destroy
     */
    ChatUserSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Change left sidenav view
     *
     * @param view
     */
    ChatUserSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this._chatService.onLeftSidenavViewChanged.next(view);
    };
    ChatUserSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-user-sidenav',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatUserSidenavComponent);
    return ChatUserSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"sidenav-header\" *ngIf=\"contact\">\n\n    <!-- CONTACT TOOLBAR -->\n    <mat-toolbar class=\"accent\">\n\n        <!-- TOOLBAR TOP -->\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <div>Contact Info</div>\n\n            <button mat-icon-button fuseMatSidenavToggler=\"chat-right-sidenav\" aria-label=\"close\">\n                <mat-icon>close</mat-icon>\n            </button>\n\n        </mat-toolbar-row>\n        <!-- / TOOLBAR TOP -->\n\n        <!-- TOOLBAR BOTTOM -->\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <img [src]=\"contact.avatar\" class=\"avatar contact-avatar huge\" alt=\"{{contact.name}}\"/>\n            <div class=\"contact-name my-8\">{{contact.name}}</div>\n        </mat-toolbar-row>\n        <!-- / TOOLBAR BOTTOM -->\n\n    </mat-toolbar>\n    <!-- / CONTACT TOOLBAR -->\n</div>\n\n<!-- SIDENAV CONTENT -->\n<div class=\"sidenav-content py-32 px-24\" fxFlex fxLayout=\"column\" *ngIf=\"contact\">\n\n    <!-- CONTACT MOOD -->\n    <div class=\"secondary-text mb-8\">Mood</div>\n    <div>{{contact.mood}}</div>\n    <!-- / CONTACT MOOD -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nchat-contact-sidenav {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\nchat-contact-sidenav mat-toolbar .toolbar-bottom {\n    height: 180px; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChatContactSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContactSidenavComponent", function() { return ChatContactSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatContactSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatContactSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatContactSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onContactSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (contact) {
            _this.contact = contact;
        });
    };
    /**
     * On destroy
     */
    ChatContactSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatContactSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-contact-sidenav',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatContactSidenavComponent);
    return ChatContactSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\n\n    <chat-contact-sidenav class=\"view\"\n                          *ngSwitchCase=\"'contact'\"\n                          [@slideInRight]\n                          fusePerfectScrollbar>\n    </chat-contact-sidenav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "chat-right-sidenav {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  chat-right-sidenav .views {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  chat-right-sidenav .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatRightSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRightSidenavComponent", function() { return ChatRightSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatRightSidenavComponent = /** @class */ (function () {
    function ChatRightSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the defaults
        this.view = 'contact';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatRightSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onRightSidenavViewChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (view) {
            _this.view = view;
        });
    };
    /**
     * On destroy
     */
    ChatRightSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatRightSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-right-sidenav',
            template: __webpack_require__(/*! ./right.component.html */ "./src/app/main/apps/chat/sidenavs/right/right.component.html"),
            styles: [__webpack_require__(/*! ./right.component.scss */ "./src/app/main/apps/chat/sidenavs/right/right.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatRightSidenavComponent);
    return ChatRightSidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map