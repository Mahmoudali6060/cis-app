"use strict";
(self["webpackChunkbase_app"] = self["webpackChunkbase_app"] || []).push([["src_app_receptionists_receptionists_module_ts"],{

/***/ 57213:
/*!**************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-account/receptionist-account.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistAccountComponent": () => (/* binding */ ReceptionistAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _security_shared_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../security/shared/account.service */ 73169);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 79686);





class ReceptionistAccountComponent {
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        //this.accountService.changeUserRole(new UserTypeEnum().Receptionist);
    }
}
ReceptionistAccountComponent.ɵfac = function ReceptionistAccountComponent_Factory(t) { return new (t || ReceptionistAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_security_shared_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ReceptionistAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReceptionistAccountComponent, selectors: [["receptionist-account"]], decls: 120, vars: 32, consts: [[1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "page-breadcrumb"], [1, "col-md-7"], [1, "page-breadcrumb-wrap"], [1, "page-breadcrumb-info"], [1, "list-page-breadcrumb"], [1, "active-page"], [1, "col-md-5"], ["name", "organizationForm", 1, "form-horizontal"], ["organizationForm", ""], [1, "form-group"], [1, "col-md-4", "col-md-offset-2"], [1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-primary"], ["for", "txtUserName", 1, "control-label", "col-md-2"], [1, "col-md-4"], ["id", "txtUserName", "name", "txtUserName", 1, "form-control"], ["for", "txtmail", 1, "control-label", "col-md-2"], ["id", "txtmail", "name", "txtmail", 1, "form-control"], ["for", "txtPassword", 1, "control-label", "col-md-2"], ["type", "password", "id", "txtPassword", "name", "txtPassword", 1, "form-control"], ["for", "txtconfirmPassword", 1, "control-label", "col-md-2"], ["type", "password", "id", "txtconfirmPassword", "name", "txtconfirmPassword", 1, "form-control"]], template: function ReceptionistAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "shared-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "\n\n");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeTabIndex", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 12, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 14, "Account"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 16, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 18, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 20, "UserName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](71, 22, "Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](83, 24, "Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](95, 26, "ConfirmPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](109, 28, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](113, 30, "Cancel"));
    } }, directives: [_shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__.SharedTabsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 42305:
/*!**************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-address/receptionist-address.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistAddressComponent": () => (/* binding */ ReceptionistAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 7870);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_address_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/address/address.component */ 15513);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 79686);










function ReceptionistAddressComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReceptionistAddressComponent_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ReceptionistAddressComponent_form_19_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "address", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceptionistAddressComponent_form_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n            \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("reachInfo", ctx_r1.model.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r2.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 4, "Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 6, "Cancel"));
} }
class ReceptionistAddressComponent {
    //organizationId = '';
    constructor(organizationService, toastr, _route) {
        this.organizationService = organizationService;
        this.toastr = toastr;
        this._route = _route;
        this.selectAddressTab = true;
        this.active = true;
        this.model = {};
        this.showProgress = false;
    }
    ngOnInit() {
        let vm = this;
        let contact = {};
        let address = {};
        vm.model.contact = contact;
        vm.model.address = address;
        let id = this._route.snapshot.params['id'];
        this.model.id = `${id}`;
        // get organization contact and address in case of update
        //this.getOrganizationAddress(vm);
    }
    /*
    getOrganizationAddress(vm)
    {
        if (!isNaN(vm.model.id) && vm.model.id != 'new') {
            vm.showProgress = true;
            this.organizationService.getOrganizationAddress(vm.model.id)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                    vm.model.contact = response.contact;
                    vm.model.address = response.address;

                    if (response.contact == null) {
                        vm.model.contact = {};
                        vm.model.contactId = 0;
                    }

                    if (response.address == null) {
                        vm.model.address = {};
                        vm.model.addressId = 0;
                    }
                },
                function (error:any) {
                    vm.toastr.error('حدث خطأ اثناء تحميل البيانات - ' + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
    }
    */
    clear() {
        //this.getOrganizationAddress(this);
        //this.model = {};
        //this.active = false;
        //this.model.id = 'new';
        //this.model.contact = {};
        //this.model.address = {};
        //setTimeout(() => this.active = true, 0);
    }
    onSubmit() {
        /*
        let vm = this;
        vm.showProgress = true;

        // update
        this.organizationService.SaveOrganizationAddress(vm.model)
            .subscribe(
            function (response:any) {
                vm.toastr.success('Saved successfully', '');
                vm.model = response;
            },
            function (error:any) {
                vm.toastr.error('Failed to save - ' + error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });

        */
    }
}
ReceptionistAddressComponent.ɵfac = function ReceptionistAddressComponent_Factory(t) { return new (t || ReceptionistAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ReceptionistAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReceptionistAddressComponent, selectors: [["receptionist-address"]], decls: 23, vars: 9, consts: [[4, "ngIf"], [1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "row", 2, "padding", "13px"], [1, "NBbreadcrumb"], ["novalidate", "", "class", "form-horizontal", "name", "addressForm", 3, "ngSubmit", 4, "ngIf"], ["novalidate", "", "name", "addressForm", 1, "form-horizontal", 3, "ngSubmit"], ["addressForm", "ngForm"], [1, "form-group"], [3, "reachInfo"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ReceptionistAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReceptionistAddressComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "shared-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ReceptionistAddressComponent_form_19_Template, 20, 8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeTabIndex", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 5, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0/\n                ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 7, "AddressContact"), "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__.SharedTabsComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_address_address_component__WEBPACK_IMPORTED_MODULE_3__.AddressComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 80962:
/*!**************************************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-appointment-details/receptionist-appointment-details.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistAppointmentDetailsComponent": () => (/* binding */ ReceptionistAppointmentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/shared.service */ 71901);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 79686);








const _c0 = ["fileInput"];
class ReceptionistAppointmentDetailsComponent {
    constructor(receptionistService, sharedService, toastr, _route, storage) {
        this.receptionistService = receptionistService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this._route = _route;
        this.storage = storage;
        this.selectBasicTab = true;
        this.appointmentDetails = {};
        this.classifications = [];
        this.showProgress = false;
    }
    ngOnInit() {
        if (this.appointmentDetails.activeInsurance == null || this.appointmentDetails.activeInsurance == undefined) {
            let activeInsurance = {};
            this.appointmentDetails.activeInsurance = activeInsurance;
        }
    }
    onSubmit() {
    }
}
ReceptionistAppointmentDetailsComponent.ɵfac = function ReceptionistAppointmentDetailsComponent_Factory(t) { return new (t || ReceptionistAppointmentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService)); };
ReceptionistAppointmentDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReceptionistAppointmentDetailsComponent, selectors: [["receptionist-appointment-details"]], viewQuery: function ReceptionistAppointmentDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { AppontmentId: "AppontmentId", appointmentDetails: "appointmentDetails" }, decls: 208, vars: 76, consts: [["novalidate", "", "name", "organizationForm", 1, "form-horizontal", 3, "ngSubmit"], ["organizationForm", "ngForm"], [1, "form-group"], ["for", "serialName", 1, "control-label", "col-md-3"], [1, "col-md-3"], ["id", "serialName", "name", "serialName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "marName", 1, "control-label", "col-md-3"], ["id", "marName", "name", "marName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "fName", 1, "control-label", "col-md-3"], ["id", "fName", "name", "fName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lName", 1, "control-label", "col-md-3"], ["id", "lName", "name", "lName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "birthdate", 1, "control-label", "col-md-3"], ["type", "date", "id", "birthdate", "name", "birthdate", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "mobileNo", 1, "control-label", "col-md-3"], ["id", "mobileNo", "name", "mobileNo", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "policyNameSt", 1, "control-label", "col-md-3"], ["id", "policyName", "name", "policyName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "expireDate", 1, "control-label", "col-md-3"], ["type", "text", "id", "expireDate", "name", "expireDate", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "policyRemark", 1, "control-label", "col-md-3"], [1, "col-md-9"], ["id", "policyRemark", "name", "policyRemark", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "appDate", 1, "control-label", "col-md-3"], ["type", "text", "id", "appDate", "name", "appDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "appTime", 1, "control-label", "col-md-3"], ["type", "text", "id", "appTime", "name", "appTime", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type", 1, "control-label", "col-md-3"], ["type", "text", "id", "type", "name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "className", 1, "control-label", "col-md-3"], ["type", "text", "id", "className", "name", "className", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "flag", 1, "control-label", "col-md-3"], ["type", "checkbox", "id", "flag", "name", "flag", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtdes", 1, "control-label", "col-md-3"], ["id", "txtdes", "name", "txtdes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "docName", 1, "control-label", "col-md-3"], ["type", "text", "name", "docName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "department", 1, "control-label", "col-md-3"], ["type", "text", "disabled", "", "name", "department", "id", "department", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "modidfiedPerson", 1, "control-label", "col-md-3"], ["type", "text", "name", "modidfiedPerson", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "dateMod", 1, "control-label", "col-md-3"], ["type", "text", "name", "dateMod", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function ReceptionistAppointmentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReceptionistAppointmentDetailsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.appointmentDetails.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_21_listener($event) { return ctx.appointmentDetails.patientClinicMRN = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_33_listener($event) { return ctx.appointmentDetails.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_42_listener($event) { return ctx.appointmentDetails.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_54_listener($event) { return ctx.appointmentDetails.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_63_listener($event) { return ctx.appointmentDetails.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_75_listener($event) { return ctx.appointmentDetails.activeInsurance.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_84_listener($event) { return ctx.appointmentDetails.activeInsurance.endDateString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_textarea_ngModelChange_96_listener($event) { return ctx.appointmentDetails.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_108_listener($event) { return ctx.appointmentDetails.dateTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_117_listener($event) { return ctx.appointmentDetails.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_129_listener($event) { return ctx.appointmentDetails.visitTypeName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_138_listener($event) { return ctx.appointmentDetails.appointmentClassName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_150_listener($event) { return ctx.appointmentDetails.flag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_textarea_ngModelChange_162_listener($event) { return ctx.appointmentDetails.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_174_listener($event) { return ctx.appointmentDetails.doctorName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](179, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_183_listener($event) { return ctx.appointmentDetails.departmentName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_195_listener($event) { return ctx.appointmentDetails.modifierID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](200, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentDetailsComponent_Template_input_ngModelChange_204_listener($event) { return ctx.appointmentDetails.lastModificationDateString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 38, "SerialNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 40, "MRN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.patientClinicMRN);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 42, "FirstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 44, "LastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 46, "BirthDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.birthDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 48, "Mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 50, "PolicyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.activeInsurance.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 52, "ExpirationDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.activeInsurance.endDateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](92, 54, "PolicyRemark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](104, 56, "AppointmentDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.dateTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 58, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](125, 60, "Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.visitTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](134, 62, "Class"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.appointmentClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](146, 64, "Flag"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](158, 66, "Remarks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](170, 68, "DoctorName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.doctorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](179, 70, "DepartmentName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.departmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](191, 72, "ModifiedBy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.modifierID);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](200, 74, "ModificationDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.appointmentDetails.lastModificationDateString);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 29321:
/*!************************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-appointments/receptionist-appointments.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistAppointmentsComponent": () => (/* binding */ ReceptionistAppointmentsComponent),
/* harmony export */   "CalendarEvent": () => (/* binding */ CalendarEvent)
/* harmony export */ });
/* harmony import */ var _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/receptionist-appointment.manager */ 6134);
/* harmony import */ var _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/utility.class */ 61692);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ 64114);
/* harmony import */ var _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/user-permissions.class */ 15594);
/* harmony import */ var _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared/permission-key.enum */ 27982);
/* harmony import */ var _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared/time-slot.model */ 29367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var _clinics_shared_clinic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../clinics/shared/clinic.service */ 62636);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _security_shared_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../security/shared/account.service */ 73169);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tree */ 86234);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 38184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/calendar */ 20226);
/* harmony import */ var _receptionist_search_receptionist_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../receptionist-search/receptionist-search.component */ 31045);
/* harmony import */ var _shared_print_page_print_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/print-page/print-page.component */ 79118);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 7870);
/* harmony import */ var _receptionist_division_calendar_receptionist_division_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../receptionist-division-calendar/receptionist-division-calendar.component */ 8983);
/* harmony import */ var _shared_pipes_translateObjects_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/translateObjects.pipe */ 23382);

























const _c0 = ["bookOrCloseModalButton"];
const _c1 = ["btnCloseBookOrCloseModal"];
const _c2 = ["appointmentModalButton"];
const _c3 = ["btnClostAppointmentModal"];
const _c4 = ["btnShowSessionExtensionSlotModal"];
const _c5 = ["btnCloseSessionExtensionModal"];
const _c6 = ["btnCloseRestoreTimeSlotsModal"];
const _c7 = ["btnShowRestoreTimeSlotsModal"];
const _c8 = ["pSchedule"];
const _c9 = ["btnCloseReceptionistSearchPopup"];
const _c10 = ["btnCloseAppointmentPopup"];
const _c11 = ["btnDisplayCurrentDayAppointment"];
function ReceptionistAppointmentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r42 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r2.lang == "ar" ? node_r42.label : node_r42.labelTranslation, "\n                    ");
} }
function ReceptionistAppointmentsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r43 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r3.lang == "ar" ? node_r43.label : node_r43.labelTranslation, "\n                    ");
} }
function ReceptionistAppointmentsComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r44 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r4.lang == "ar" ? node_r44.label : node_r44.labelTranslation, "\n                    ");
} }
function ReceptionistAppointmentsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r45 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r5.lang == "ar" ? node_r45.label : node_r45.labelTranslation, "\n                    ");
} }
function ReceptionistAppointmentsComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
} if (rf & 2) {
    const node_r46 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r6.lang == "ar" ? node_r46.label : node_r46.labelTranslation, "\n                    ");
} }
function ReceptionistAppointmentsComponent_a_76_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_a_76_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r47.showSessionExtensionPopupForOpenSlot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("disabled", !ctx_r7.enableOpenSlotBtn ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Open"));
} }
function ReceptionistAppointmentsComponent_a_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "Open"));
} }
function ReceptionistAppointmentsComponent_a_83_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_a_83_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r49.showSessionExtensionPopupForCloseSlot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("disabled", !ctx_r9.enableCloseSlot ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Close"));
} }
function ReceptionistAppointmentsComponent_a_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "Close"));
} }
function ReceptionistAppointmentsComponent_a_90_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_a_90_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r51.showRestoreTimeSlotsPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("disabled", !ctx_r11.enableRestoreSlot ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Restore"));
} }
function ReceptionistAppointmentsComponent_a_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "Restore"));
} }
function ReceptionistAppointmentsComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "h2", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "\n\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](42, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                                    ", ctx_r13.lang == "ar" ? ctx_r13.currentDoctor.name : ctx_r13.currentDoctor.nameTranslation, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](24, 5, "Gender"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 7, ctx_r13.currentDoctor.gender), "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](32, 9, "Nationality"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u00A0 ", ctx_r13.lang == "ar" ? ctx_r13.currentDoctor.nationality : ctx_r13.currentDoctor.nationalityTranslation, "\n                                            ");
} }
function ReceptionistAppointmentsComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "receptionist-division-calendar", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("divisonId", ctx_r15.divisonId)("divisonName", ctx_r15.divisonName);
} }
function ReceptionistAppointmentsComponent_form_165_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_form_165_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r71.openPatientProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "OpenPatientFile"));
} }
function ReceptionistAppointmentsComponent_form_165_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", itm_r73.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](itm_r73.name);
} }
function ReceptionistAppointmentsComponent_form_165_button_97_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_button_97_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r74.getPatient(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "Search"));
} }
function ReceptionistAppointmentsComponent_form_165_a_103_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_a_103_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r76.showPatientAdvancedSearchDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PatientAdvancedSearch"));
} }
function ReceptionistAppointmentsComponent_form_165_td_130_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_td_130_Template_input_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r80); const item_r78 = restoredCtx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r79.selectAppointmentClass(item_r78.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r78 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", item_r78.id)("checked", item_r78.id == ctx_r64.appointmentModel.appointmentClassId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r78.name, "\n                                    ");
} }
function ReceptionistAppointmentsComponent_form_165_option_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r81 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", itm_r81.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r67.lang == "ar" ? itm_r81.serviceName : itm_r81.serviceNameTranslation);
} }
const _c12 = function () { return { standalone: true }; };
function ReceptionistAppointmentsComponent_form_165_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "button", 37, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, ReceptionistAppointmentsComponent_form_165_div_21_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, ReceptionistAppointmentsComponent_form_165_a_37_Template, 3, 3, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "p-calendar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_p_calendar_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r82.selectedDate = $event; })("onSelect", function ReceptionistAppointmentsComponent_form_165_Template_p_calendar_onSelect_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r84.onDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "select", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_select_ngModelChange_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r85.selectedTimeSlot = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](64, ReceptionistAppointmentsComponent_form_165_option_64_Template, 2, 2, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](65, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](71, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "input", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r86.numberOfTimeSlots = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](76, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](78, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](80, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](84, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](85, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](86, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](87, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](88, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](90, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](91, "input", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_input_ngModelChange_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r87.patientClinicMrn = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](94, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](95, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](97, ReceptionistAppointmentsComponent_form_165_button_97_Template, 3, 3, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](99, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](100, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](101, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](102, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](103, ReceptionistAppointmentsComponent_form_165_a_103_Template, 3, 3, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](104, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](105, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](106, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](107, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](110, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](111, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](112, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](113, "input", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_input_ngModelChange_113_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r88.patientName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](115, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](116, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](117, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](118, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](119, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](120, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](122, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](123, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](124, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](125, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](126, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](127, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](128, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](129, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](130, ReceptionistAppointmentsComponent_form_165_td_130_Template, 4, 3, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](131, "translateObjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](132, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](133, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](134, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](135, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](136, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](138, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](139, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](140, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](141, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](142, "select", 132, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_select_ngModelChange_142_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r89.appointmentModel.serviceTimeSlotId = $event; })("change", function ReceptionistAppointmentsComponent_form_165_Template_select_change_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](144); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r90.getServiceTimeSlots(_r66.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](145, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](146, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](147, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](148, ReceptionistAppointmentsComponent_form_165_option_148_Template, 2, 2, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](149, "translateObjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](150, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](151, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](152, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](153, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](154, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](155, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](156, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](159, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](160, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](161, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](162, "input", 136, 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_input_ngModelChange_162_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r91.appointmentModel.confirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](164, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](165, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](166, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](168, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](169, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](170, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](171, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](172, "input", 139, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_input_ngModelChange_172_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r92.appointmentModel.flag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](174, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](175, "\n\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](176, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](177, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](178, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](179, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](180, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](182, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](183, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](184, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](185, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](186, "textarea", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_165_Template_textarea_ngModelChange_186_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r93.appointmentModel.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](187, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](188, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](189, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](190, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](191, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](192, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](193, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](194, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](195, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_Template_button_click_195_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r94.saveOrUpdateAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](196);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](197, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](198, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](199, "button", 86, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](201);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](202, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](203, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](204, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_Template_button_click_204_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r95.showDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](205);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](206, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](207, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](208, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_Template_button_click_208_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r96.showRepeatAppointmentPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](210, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](211, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](212, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_Template_button_click_212_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r97.showCancelationDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](213);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](214, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](215, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](216, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_165_Template_button_click_216_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r98.showReconfirmDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](217);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](218, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](219, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](220, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](221, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](222, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](223, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](1);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 48, "AppointmentDetails"), " - ", ctx_r21.doctorName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r21.showProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                        ", ctx_r21.waitInInquiry, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 50, "Division"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", ctx_r21.selectedDivisionName, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r21.appointmentModel.id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](45, 52, "Date"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.selectedDate)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("required", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](91, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](57, 54, "Time"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.selectedTimeSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r21.timeSlotsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](70, 56, "NumberOfTimeSlots"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.numberOfTimeSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](83, 58, "MRN"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.patientClinicMrn)("disabled", ctx_r21.appointmentModel.id > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r21.appointmentModel.id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r21.appointmentModel.id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](109, 60, "PatientName"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.patientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](122, 62, "Class"), "\n\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](131, 64, ctx_r21.appointmentClassesList));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](138, 66, "Service"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.appointmentModel.serviceTimeSlotId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](149, 68, ctx_r21.serviceTimeSlotsList, null, null, ctx_r21.lstToTranslated));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](158, 73, "Confirmed"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.appointmentModel.confirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](168, 75, "Flag"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.appointmentModel.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](182, 77, "Remarks"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r21.appointmentModel.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !_r53.form.valid || !ctx_r21.enableSaveAppointmentPopupBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](197, 79, "Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](202, 81, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("disabled", ctx_r21.isUpdatedAppointment && ctx_r21.enableSetArrivalTimeBtn ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](206, 83, "ArrivalTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("disabled", ctx_r21.isUpdatedAppointment ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](210, 85, "Repeat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("disabled", ctx_r21.isUpdatedAppointment && ctx_r21.enableCancelAppointmentBtn ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](214, 87, "CancelAppointment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("disabled", ctx_r21.isUpdatedAppointment ? "" : "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](218, 89, "Reconfirm"));
} }
function ReceptionistAppointmentsComponent_form_179_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_form_179_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", item_r106.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r106.name);
} }
function ReceptionistAppointmentsComponent_form_179_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", item_r107.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r107.name);
} }
function ReceptionistAppointmentsComponent_form_179_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 145, 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, ReceptionistAppointmentsComponent_form_179_div_19_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "p-calendar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_179_Template_p_calendar_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r108.selectedDateForOpenCloseSlot = $event; })("onSelect", function ReceptionistAppointmentsComponent_form_179_Template_p_calendar_onSelect_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r110.onOpneCloseSlotDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "select", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_179_Template_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r111.selectedStartTimeForOpenCloseSlot = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, ReceptionistAppointmentsComponent_form_179_option_44_Template, 2, 2, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "select", 149, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_179_Template_select_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r112.selectedEndTimeForOpenCloseSlot = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](60, ReceptionistAppointmentsComponent_form_179_option_60_Template, 2, 2, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](67, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](71, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](72, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "textarea", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_179_Template_textarea_ngModelChange_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r113.sessionExtension.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](74, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](76, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](81, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](83, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_179_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r109); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r114.saveSessionExtension(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](87, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "button", 86, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](92, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](94, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](95, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](97, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](1);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r24.sessionExtensionPopupTitle, " - ", ctx_r24.doctorName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r24.showProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 21, "Date"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r24.selectedDateForOpenCloseSlot)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("required", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](33, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](37, 23, "StartTime"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r24.selectedStartTimeForOpenCloseSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r24.entireDayTimeSlotsListForStartTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](53, 25, "EndTime"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r24.selectedEndTimeForOpenCloseSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r24.entireDayTimeSlotsListForEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](69, 27, "Remarks"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r24.sessionExtension.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !_r99.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](86, 29, "Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](91, 31, "Cancel"));
} }
function ReceptionistAppointmentsComponent_form_189_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ReceptionistAppointmentsComponent_form_189_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 153, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, ReceptionistAppointmentsComponent_form_189_div_20_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "p-calendar", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_form_189_Template_p_calendar_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r118.dateToRestoreTimeSlots = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_form_189_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r120.restoreTimeSlots(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "button", 86, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](1);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 13, "RestoreTimeSlot"), " ", ctx_r27.doctorName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r27.showProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 15, "Date"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r27.dateToRestoreTimeSlots)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("required", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](21, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !_r115.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](43, 17, "Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](48, 19, "Cancel"));
} }
function ReceptionistAppointmentsComponent_option_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", itm_r121.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](itm_r121.name);
} }
function ReceptionistAppointmentsComponent_option_335_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r122 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", itm_r122.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r37.lang == "ar" ? itm_r122.serviceName : itm_r122.serviceNameTranslation);
} }
function ReceptionistAppointmentsComponent_tr_496_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 158);
} }
function ReceptionistAppointmentsComponent_tr_496_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, ReceptionistAppointmentsComponent_tr_496_img_20_Template, 1, 0, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evnt_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.mrn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.arrivalTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", evnt_r123.confirmed == "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r123.remarks, " ");
} }
function ReceptionistAppointmentsComponent_tr_570_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 158);
} }
function ReceptionistAppointmentsComponent_tr_570_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, ReceptionistAppointmentsComponent_tr_570_img_19_Template, 1, 0, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evnt_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.mrn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.arrivalTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", evnt_r125.confirmed == "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", evnt_r125.remarks, " ");
} }
class ReceptionistAppointmentsComponent {
    constructor(receptionistService, clinicService, toastr, localStorage, router, translate, accountService) {
        this.receptionistService = receptionistService;
        this.clinicService = clinicService;
        this.toastr = toastr;
        this.localStorage = localStorage;
        this.router = router;
        this.translate = translate;
        this.accountService = accountService;
        this.appoitmentDateTimeBackup = '';
        this.SelectedDayAppoitments = [];
        this.toPrintDiv = 'todayAppoinmentsDiv';
        this.isDayView = false;
        this.dayViewSelectedDate = new Date();
        this.defaultclassId = '';
        this.lang = '';
        this.isRTL = false;
        this.waitInInquiry = '';
        this.gotoDateString = ''; // used to open the appointment that edited from search
        this.initialView = false;
        this.utilityClass = new _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_1__.UtilityClass();
        this.showProgress = false;
        this.showLoading = false;
        this.active = true;
        this.events = [];
        this.currentDoctor = {};
        this.header = { left: 'today,agendaWeek', center: 'title', right: 'prev,next' };
        this.displayPatientAdvancedSearch = false;
        this.showSelectPatient = true;
        this.showEditPatient = false;
        this.organizationStructureTree = [];
        this.doctorName = '';
        this.isDoctorSelected = false;
        this.isDivisionSelected = false;
        this.isDepartmentSelected = false;
        this.appointmentModel = { id: 0 };
        this.appointmentSchedulesList = [];
        this.sessionExtensionsList = [];
        this.appointmentClassesList = [];
        this.visitTypesList = [];
        this.timeSlotsList = [];
        this.appointementsList = [];
        this.serviceTimeSlotsList = [];
        this.currentWeekDays = [];
        this.currentHijriWeekDays = [];
        this.patientQucikAccount = {};
        this.sessionExtension = {};
        this.entireDayTimeSlotsListForStartTime = [];
        this.entireDayTimeSlotsListForEndTime = [];
        this.sessionExtensionPopupTitle = '';
        this.patientClinicMrn = '';
        this.patientName = '';
        this.patientId = '';
        this.numberOfTimeSlots = 1;
        this.defaultDate = '';
        this.display = false;
        this.title = "Add Arrival Time";
        this.title1 = "Reconfirm Appointment";
        this.title2 = "Cancel Appointment";
        this.isAddArrivalTime = false;
        this.isReconfirmedAppointment = false;
        this.reconfirmRemarks = "";
        this.isUpdatedAppointment = false;
        this.isCancelledAppointment = false;
        this.cancelationRemarks = "";
        this.displayRepeatAppointmentPopup = false;
        this.repeatedAppointmentModel = { id: 0 };
        this.repeatingTimeSlotsList = [];
        this.rescheduledTimeSlotsList = [];
        this.isRescheduledAppointment = false;
        this.rescheduledAppointmentModel = {};
        this.ts = "";
        this.userPermisions = new _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_3__.UserPermissions();
        this.key = new _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_4__.PermissionKeyEnum();
        this.enableNewAppointmentBtn = false;
        this.enableQuickRegistrationBtn = false;
        this.enableSaveAppointmentPopupBtn = false;
        this.enableCancelAppointmentBtn = false;
        this.enableSetArrivalTimeBtn = false;
        this.enableOpenSlotBtn = false;
        this.enableCloseSlot = false;
        this.enableRestoreSlot = false;
        this.calendarOptions = {};
        this.lstToTranslated = ['serviceName', 'serviceNameTranslation'];
        this.cancellationDate = this.utilityClass.getUtcDate(new Date());
    }
    ngOnInit() {
        this.lang = this.localStorage.retrieve('SelectedLanguage');
        if (this.lang && this.lang == 'ar')
            this.isRTL = true;
        let thisComp = this;
        this.calendarSlotDuration = _app_config__WEBPACK_IMPORTED_MODULE_2__.calendarSlotDuration;
        this.defaultDate = this.utilityClass.getISODateFormat(new Date());
        this.calendarOptions.firstDay = new Date().getDay();
        this.calendarOptions.navLinks = true;
        this.calendarOptions.selectable = true;
        this.calendarOptions.select = function (start, end) { thisComp.handleCalendarSelect(start, end); };
        this.calendarOptions.isRTL = this.isRTL;
        this.clinicId = this.localStorage.retrieve("ClinicID");
        // this.clinicId = "1";
        this.loadOrganizationStructureTree();
        this.fillCurrentWeekDays(new Date());
        this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
        //this.entireDayTimeSlotsList = this.receptionistAppointmentManager.getFullDayTimeSlots(this.receptionistAppointmentManager.getSlotDuration());
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    FillHijriWeekDays() {
        if (this.currentWeekDays && this.currentWeekDays.length > 0) {
            let dates = [];
            for (let date of this.currentWeekDays)
                dates.push(this.utilityClass.getUtcDate(date));
            for (let dayNo = 0; dayNo <= 6; dayNo++) {
                let event = {};
                event.start = dates[dayNo];
                event.end = dates[dayNo];
                event.allDay = true;
                event.className = 'hijriDateStyle';
                event.title = this.currentHijriWeekDays[dayNo];
                this.events.push(event);
            }
        }
    }
    fillCurrentWeekDays(startDate) {
        this.currentWeekDays = [];
        let satrt = startDate.getDate();
        for (let dayNo = 0; dayNo <= 6; dayNo++) {
            {
                let date = new Date(startDate.getTime());
                date.setDate(satrt + dayNo);
                this.currentWeekDays.push(date);
            }
        }
    }
    showDialog() {
        this.isAddArrivalTime = true;
        this.isReconfirmedAppointment = false;
        this.isCancelledAppointment = false;
        this.isRescheduledAppointment = false;
        //this.isArrived = false;
        this.arrivalTime = new Date();
        this.display = true;
    }
    showReconfirmDialog() {
        this.isReconfirmedAppointment = true;
        this.isAddArrivalTime = false;
        this.isCancelledAppointment = false;
        this.isRescheduledAppointment = false;
        this.display = true;
    }
    showCancelationDialog() {
        this.isCancelledAppointment = true;
        this.isReconfirmedAppointment = false;
        this.isAddArrivalTime = false;
        this.isRescheduledAppointment = false;
        this.display = true;
    }
    //showRescheduleDialog() {
    //    this.isCancelledAppointment = false;
    //    this.isReconfirmedAppointment = false;
    //    this.isAddArrivalTime = false;
    //    this.isRescheduledAppointment = true;
    //    this.display = true;
    //}
    createQuickPateintAccount() {
        let thisComponent = this;
        let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedTimeSlot);
        if (timeSlot != undefined) {
            this.patientQucikAccount.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.patientQucikAccount.doctorId = this.doctorId;
            this.patientQucikAccount.slotDuration = this.slotDuration;
            this.patientQucikAccount.clinicId = this.clinicId;
            this.patientQucikAccount.numberOfTimeSlots = this.numberOfTimeSlots;
            if (this.patientQucikAccount.birthDate)
                this.patientQucikAccount.birthDate = this.utilityClass.getUtcDate(this.patientQucikAccount.birthDate);
            // check for available open slots 
            let isSlotsOpened = this.isAppointmentSlotsOpened(timeSlot.dateTime);
            if (!isSlotsOpened) {
                let msg = this.translate.instant("NotEnoughOpenedSlots");
                this.toastr.error(msg, '');
                this.showProgress = false;
                return;
            }
            thisComponent.showProgress = true;
            this.receptionistService.createPatientRequest(this.patientQucikAccount)
                .subscribe(function (response) {
                thisComponent.updateCalendarEvents(response, true);
                thisComponent.closeAppointmentModal();
                let msg = thisComponent.translate.instant("SavedSuccessfully");
                thisComponent.toastr.success(msg, '');
            }, function (error) {
                thisComponent.toastr.error(error);
                thisComponent.showProgress = false;
            }, function () {
                thisComponent.showProgress = false;
            });
        }
    }
    clearControl() {
        this.patientQucikAccount = { id: 0 };
        this.timeSlotsList = [];
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.numberOfTimeSlots = 1;
        this.active = false;
        this.reconfirmTime = '';
        this.reconfirmDate = '';
        this.arrivalTime = '';
        //this.cancellationDate = '';
        setTimeout(() => this.active = true, 0);
    }
    loadOrganizationStructureTree() {
        let thisComp = this;
        thisComp.showProgress = true;
        //let userId = this.storage.retrieve("UserID");
        this.clinicService.getOrganizationStructureTreeWithDoctorsOnly(this.clinicId)
            .subscribe(function (response) {
            thisComp.organizationStructureTree = response;
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    clear() {
        this.appointmentModel = { id: 0 };
        this.timeSlotsList = [];
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.numberOfTimeSlots = 1;
        this.patientClinicMrn = '';
        this.patientName = '';
        this.cancelled = false;
        this.rescheduledAppointmentModel = {};
        this.reconfirmTime = '';
        this.reconfirmDate = '';
        this.arrivalTime = '';
        //this.cancellationDate = '';
        // set default class ID
        this.appointmentModel.appointmentClassId = this.defaultclassId;
    }
    addNewAppointment() {
        this.isUpdatedAppointment = false;
        this.clear();
        this.showAppointmentModal();
    }
    handleEventClick(e) {
        let eventId = e.calEvent.id;
        this.fillAppointmentinfo(eventId);
    }
    fillAppointmentinfo(eventId) {
        if (this.appointementsList != undefined) {
            this.appointmentModel = this.appointementsList.find(app => app.id == eventId);
            if (this.appointmentModel != undefined) {
                this.isUpdatedAppointment = true;
                this.selectedDate = this.utilityClass.getDateTimeFromString(this.appointmentModel.dateTime);
                this.onDateSelect(this.selectedDate);
                this.selectedTimeSlot = this.appointmentModel.time;
                this.numberOfTimeSlots = this.appointmentModel.numberOfTimeSlots;
                this.patientId = this.appointmentModel.patientId;
                this.patientClinicMrn = this.appointmentModel.patientClinicMRN;
                this.patientName = this.appointmentModel.patientName;
                //if (this.appointmentModel.arrived == true) {
                //    this.isArrived = true;
                //}
                if (this.appointmentModel.arrivalTime)
                    this.arrivalTime = this.utilityClass.getDateTimeFromString(this.appointmentModel.arrivalTime);
                if (this.appointmentModel.reconfirmDate) {
                    this.reconfirmTime = this.utilityClass.getDateTimeFromString(this.appointmentModel.reconfirmDate);
                    this.reconfirmDate = this.utilityClass.getDateTimeFromString(this.appointmentModel.reconfirmDate);
                }
                //if (this.appointmentModel.cancellationDate)
                //    this.cancellationDate = this.utilityClass.getUtcDateFromString(this.appointmentModel.cancellationDate);
                //this.appointmentModel.description += this.appointmentModel.cancelRemarks + this.appointmentModel.reconfirmRemarks;
                this.showAppointmentModal();
            }
            else {
                this.appointmentModel = { id: 0 };
                //this.isUpdatedAppointment = false;
            }
            this.inquireWaitInAppointment();
        }
    }
    showAppointmentModal() {
        this.appointmentModalButton.nativeElement.click();
    }
    showBookOrCloseModal() {
        this.bookOrCloseModalButton.nativeElement.click();
    }
    closeAppointmentModal() {
        this.btnClostAppointmentModal.nativeElement.click();
    }
    expandAll() {
        this.organizationStructureTree.forEach(node => {
            this.expandRecursive(node, true);
        });
    }
    collapseAll() {
        this.organizationStructureTree.forEach(node => {
            this.expandRecursive(node, false);
        });
    }
    expandRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
    //getSelectedNode() {
    //    this.organizationStructureTree.forEach(node => {
    //        this.getSelectedNodeRecursive(node);
    //    });
    //}
    //private getSelectedNodeRecursive(node: TreeNode) {
    //    if (node.children) {
    //        node.children.forEach(childNode => {
    //            this.getSelectedNodeRecursive(childNode);
    //            if (childNode.data == "SelectedDoctor")
    //                this.selectedDoctor = childNode;
    //        });
    //    }
    //}
    nodeSelect(event) {
        this.isDayView = false;
        this.handelSelectedNode(event.node);
    }
    handelSelectedNode(node) {
        let vm = this;
        this.doctorId = 0;
        this.doctorName = "";
        this.isDoctorSelected = false;
        this.isDivisionSelected = false;
        this.isDepartmentSelected = false;
        if (node.type.toLocaleLowerCase() == "securityuser") {
            this.initialView = true;
            this.doctorId = node.data;
            if (this.lang == 'ar')
                this.doctorName = node.label;
            else
                this.doctorName = node.labelTranslation;
            this.isDoctorSelected = true;
            this.isDivisionSelected = false;
            this.isDepartmentSelected = false;
            this.getAppointmentDetailsWrapper(this.doctorId);
            this.getDoctorClinicDivision(this.doctorId);
        }
        else if (node.type.toLocaleLowerCase() == "clinicdivision") {
            this.divisonId = node.data;
            if (this.lang == 'ar')
                this.divisonName = node.label;
            else
                this.divisonName = node.labelTranslation;
            this.isDoctorSelected = false;
            this.isDivisionSelected = true;
            this.isDepartmentSelected = false;
        }
        else if (node.type.toLocaleLowerCase() == "clinicdepartment") {
            this.isDoctorSelected = false;
            this.isDivisionSelected = false;
            this.isDepartmentSelected = true;
        }
    }
    getAppointmentDetailsWrapper(doctorId) {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getAppointmentDetailsWrapper(doctorId)
            .subscribe(function (response) {
            thisComp.appointmentSchedulesList = response.appointmentSchedules;
            thisComp.sessionExtensionsList = response.sessionExtensions;
            thisComp.appointmentClassesList = response.appointmentClasses;
            thisComp.visitTypesList = response.visitTypes;
            thisComp.appointementsList = response.appointments;
            thisComp.serviceTimeSlotsList = response.serviceTimeSlots;
            thisComp.currentHijriWeekDays = response.currentWeekHijriDates;
            thisComp.currentDoctor = response.doctor;
            // get default class ID 
            if (thisComp.appointementsList) {
                thisComp.appointmentClassesList.forEach(cls => {
                    if (cls.key == 'Reserved') {
                        thisComp.defaultclassId = cls.id;
                    }
                });
            }
            //------- Work with the Calendar view -------
            //Refresh the calendar solt duration according to the doctor solt duration
            let formattedSlotDuration = thisComp.calendarSlotDuration;
            let scrollTime = "00:00:00";
            thisComp.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(thisComp.appointmentSchedulesList, thisComp.sessionExtensionsList);
            thisComp.slotDuration = thisComp.receptionistAppointmentManager.getSlotDurationForDate(thisComp.utilityClass.getDateComponent(new Date()));
            if (thisComp.slotDuration != undefined && thisComp.slotDuration != 0)
                formattedSlotDuration = '00:' + thisComp.utilityClass.getTwoDigitNumber(thisComp.slotDuration) + ':00';
            //Get first timeSlot
            let firstTimeSlot = thisComp.receptionistAppointmentManager.getFirstTimeSlot(new Date());
            if (firstTimeSlot != undefined) {
                if (firstTimeSlot.name.indexOf(":") > -1) //has minutes
                    scrollTime = firstTimeSlot.name + ":00"; //add seconds
                else //has only hours
                    scrollTime = firstTimeSlot.name + ":00:00"; //add minutes and seconds
            }
            thisComp.initialView = true;
            thisComp.pSchedule.refreshSlotDuration(formattedSlotDuration, scrollTime);
            thisComp.initialView = false;
            //Update calendar events
            thisComp.events = response.calendarEvents;
            //Adjust calendar view according the schedules
            thisComp.fillCurrentWeekDays(new Date());
            thisComp.adjustCalendarView();
            //thisComp.FillHijriWeekDays();
            if (thisComp.gotoDateString) {
                let date = thisComp.utilityClass.getDateTimeFromString(thisComp.gotoDateString);
                if (thisComp.isDateWithinCurrentWeek(date)) {
                    // open appointment popup
                    thisComp.fillAppointmentinfo(thisComp.selectedAppointmentIDFromSearch);
                    thisComp.gotoDateString = '';
                }
                else {
                    thisComp.pSchedule.gotoDate(date);
                }
            }
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    isDateWithinCurrentWeek(passedDate) {
        for (let weekDate of this.currentWeekDays) {
            let currentWeekDate = this.utilityClass.getUtcDate(weekDate);
            if (currentWeekDate.getDay() == passedDate.getDay() &&
                currentWeekDate.getFullYear() == passedDate.getFullYear() &&
                currentWeekDate.getMonth() == passedDate.getMonth())
                return true;
        }
        return false;
    }
    getDoctorClinicDivision(doctorId) {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getDoctorClinicDivision(doctorId)
            .subscribe(function (response) {
            if (response != undefined)
                thisComp.selectedDivisionId = response.id;
            if (thisComp.lang == 'ar')
                thisComp.selectedDivisionName = response.name;
            else
                thisComp.selectedDivisionName = response.nameTranslation;
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    setClinicDepartmentId(value) {
        let vm = this;
        //  this.clinicId = value;
    }
    adjustCalendarView() {
        this.FillHijriWeekDays();
        for (let indx = 0; indx < this.currentWeekDays.length; indx++) {
            let day = this.currentWeekDays[indx];
            this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(day);
            for (let indx = 0; indx < availableTimeSlots.length; indx++) {
                let timSlot = availableTimeSlots[indx];
                let startMinutes = timSlot.dateTime.toTimeString().split(' ')[0];
                timSlot.dateTime.setMinutes(timSlot.dateTime.getMinutes() + this.receptionistAppointmentManager.getSlotDuration());
                let endMintues = timSlot.dateTime.toTimeString().split(' ')[0];
                if (endMintues == "00:00:00")
                    endMintues = "23:59:59";
                let bgEvent = new CalendarEvent();
                let startDateTime = this.utilityClass.getISODateFormat(day) + "T" + startMinutes;
                let endDateTime = this.utilityClass.getISODateFormat(day) + "T" + endMintues;
                bgEvent.id = 0;
                bgEvent.start = startDateTime;
                bgEvent.end = endDateTime;
                bgEvent.rendering = 'inverse-background';
                bgEvent.className = 'inverse-backgroundEvent';
                this.events.push(bgEvent);
            }
        }
    }
    onDateSelect(dateValue) {
        this.timeSlotsList = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            this.timeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
            this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
        }
    }
    onOpneCloseSlotDateSelect(dateValue) {
        this.entireDayTimeSlotsListForStartTime = [];
        this.entireDayTimeSlotsListForEndTime = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let appSchedule = this.receptionistAppointmentManager.getAppointmentSchedule(dateValue);
            if (appSchedule != undefined) {
                this.entireDayTimeSlotsListForStartTime = this.receptionistAppointmentManager.getFullDayTimeSlots(appSchedule.slotDuration);
                this.entireDayTimeSlotsListForEndTime = this.entireDayTimeSlotsListForStartTime.slice();
                //Add last slot in the day
                let todDay = new Date();
                let date = new Date(todDay.getFullYear(), todDay.getMonth(), todDay.getDate(), 23, 59);
                this.entireDayTimeSlotsListForStartTime.push(new _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__.TimeSlot(date));
                this.entireDayTimeSlotsListForEndTime.push(new _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__.TimeSlot(date));
            }
        }
    }
    getPatient() {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getPatientByClinicMRN(this.patientClinicMrn)
            .subscribe(function (response) {
            thisComp.patientName = response.name;
            thisComp.patientId = response.id;
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    selectAppointmentClass(classId) {
        this.appointmentModel.appointmentClassId = classId;
    }
    notifyRelatedUserForCancel() {
        var thisComp = this;
        this.appointmentModel.notificationType = 'Cancel';
        this.receptionistService.notifyRelatedUser(this.appointmentModel)
            .subscribe(function (response) {
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    notifyRelatedUserForConfirm() {
        var thisComp = this;
        this.appointmentModel.notificationType = 'Confirm';
        this.receptionistService.notifyRelatedUser(this.appointmentModel)
            .subscribe(function (response) {
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    mergeCallingDateAndCallingTime(obj, secondObj) {
        let hour = secondObj.getHours();
        let minute = secondObj.getMinutes();
        let dateTime = new Date(obj.getFullYear(), obj.getMonth(), obj.getDate(), hour, minute);
        return dateTime;
    }
    saveOrUpdateAppointment(updateArrivalTime) {
        this.appointmentModel.clinicId = this.clinicId;
        this.appointmentModel.clinicDivisionId = this.selectedDivisionId;
        this.appointmentModel.arrived = false;
        if (this.arrivalTime && updateArrivalTime) //time only
         {
            this.appointmentModel.arrivalTime = this.utilityClass.getUtcDateTime(this.arrivalTime);
            this.appointmentModel.arrived = true;
        }
        if (this.reconfirmDate && this.reconfirmTime) //date
         {
            let updatedDate = this.mergeCallingDateAndCallingTime(this.reconfirmDate, this.reconfirmTime);
            this.appointmentModel.reconfirmDate = this.utilityClass.getUtcDateTime(updatedDate);
        }
        if (this.cancelled) {
            this.appointmentModel.cancellationDate = this.cancellationDate;
            this.appointmentModel.cancelled = this.cancelled;
        }
        let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedTimeSlot);
        if (timeSlot != undefined) {
            //Update the model
            if (this.appointmentModel.cancelled) //in case of cancelled = true
                this.timeSlotForCancelledApp = timeSlot;
            this.appoitmentDateTimeBackup = this.appointmentModel.dateTime;
            this.appointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.appointmentModel.doctorId = this.doctorId;
            this.appointmentModel.patientId = this.patientId;
            this.appointmentModel.slotDuration = this.slotDuration;
            this.appointmentModel.numberOfTimeSlots = this.numberOfTimeSlots;
            this.showProgress = true;
            let thisComp = this;
            let isNewAppointment = (this.appointmentModel.id == 0) ? true : false;
            if (updateArrivalTime) {
                this.receptionistService.updatePatientArrivalTime(this.appointmentModel)
                    .subscribe(function (response) {
                    thisComp.updateCalendarEvents(response, isNewAppointment);
                    thisComp.closeAppointmentModal();
                    let msg = thisComp.translate.instant("SavedSuccessfully");
                    thisComp.toastr.success(msg, '');
                }, function (error) {
                    thisComp.appointmentModel.dateTime = thisComp.appoitmentDateTimeBackup;
                    thisComp.toastr.error(error, '');
                    thisComp.showProgress = false;
                }, function () {
                    thisComp.showProgress = false;
                });
            }
            else {
                let isSlotsOpened = this.isAppointmentSlotsOpened(timeSlot.dateTime);
                if (!isSlotsOpened) {
                    let msg = this.translate.instant("NotEnoughOpenedSlots");
                    this.toastr.error(msg, '');
                    this.showProgress = false;
                    this.appointmentModel.dateTime = this.appoitmentDateTimeBackup;
                    return;
                }
                this.receptionistService.saveOrUpdateAppointment(this.appointmentModel)
                    .subscribe(function (response) {
                    thisComp.updateCalendarEvents(response, isNewAppointment);
                    thisComp.closeAppointmentModal();
                    let msg = thisComp.translate.instant("SavedSuccessfully");
                    thisComp.toastr.success(msg, '');
                }, function (error) {
                    thisComp.toastr.error(error, '');
                    thisComp.appointmentModel.dateTime = thisComp.appoitmentDateTimeBackup;
                    thisComp.showProgress = false;
                }, function () {
                    thisComp.showProgress = false;
                });
            }
        }
        else {
            let msg = this.translate.instant("EnterDateTime");
            this.toastr.error(msg, '');
        }
    }
    updateArrivalTime() {
        this.saveOrUpdateAppointment(true);
        this.display = false;
    }
    updateReconfirm() {
        this.saveOrUpdateAppointment(false);
        this.notifyRelatedUserForConfirm();
        this.display = false;
    }
    cancelAppointment() {
        this.cancelled = true;
        this.saveOrUpdateAppointment(false);
        this.getAppointmentDetailsWrapper(this.doctorId);
        this.notifyRelatedUserForCancel();
        this.display = false;
    }
    //RescheduleAppointment() {
    //    this.saveRescheduleAppointment();
    //}
    handleIsArrivedValue(event) {
        if (event.target.checked) {
            this.isArrived = true;
        }
        else {
            this.isArrived = false;
        }
    }
    //saveRescheduleAppointment() {
    //    let vm = this;
    //    vm.rescheduledAppointmentModel = vm.appointmentModel;
    //    let timeSlot = this.timeSlotsList.find(ts => ts.name == this.selectedRescheduledTimeSlot);
    //    if (timeSlot != undefined) {
    //        //Update the model
    //        this.rescheduledAppointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
    //        this.showProgress = true;
    //        let thisComp = this;
    //        let isNewAppointment: boolean = (this.appointmentModel.id == 0) ? true : false;
    //        this.receptionistService.saveOrUpdateAppointment(this.rescheduledAppointmentModel)
    //            .subscribe(
    //            function (response:any) {
    //                thisComp.updateCalendarEvents(response, isNewAppointment);
    //                thisComp.closeAppointmentModal();
    //                thisComp.toastr.success('Saved successfully', '');
    //            },
    //            function (error:any) { 
    //                thisComp.toastr.error(error, '');
    //                thisComp.showProgress = false;
    //            },
    //            function () {
    //                thisComp.showProgress = false;
    //            });
    //    }
    //    else {
    //        this.toastr.error('You should enter date and time.', '');
    //    }
    //}
    //onRescheduledDateSelect(dateValue: Date) {
    //    this.rescheduledTimeSlotsList = [];
    //    if (dateValue != undefined) {
    //        this.receptionistAppointmentManager = new ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
    //        this.rescheduledTimeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
    //        this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
    //    }
    //}
    saveSessionExtension() {
        let thisComponent = this;
        //thisComponent.showProgress = true;
        this.sessionExtension.day = this.selectedDateForOpenCloseSlot; //this.utilityClass.getUtcDateTime(this.selectedDateForOpenCloseSlot);
        this.sessionExtension.startTime = this.utilityClass.getISODateFormat(this.sessionExtension.day) + "T" + this.selectedStartTimeForOpenCloseSlot + (this.selectedStartTimeForOpenCloseSlot.length == 2 ? ":00" : "");
        this.sessionExtension.endTime = this.utilityClass.getISODateFormat(this.sessionExtension.day) + "T" + this.selectedEndTimeForOpenCloseSlot + (this.selectedEndTimeForOpenCloseSlot.length == 2 ? ":00" : "");
        if (this.sessionExtension.startTime >= this.sessionExtension.endTime) {
            let msg = this.translate.instant("SessionExtensionStart");
            thisComponent.toastr.error(msg, '');
            return;
        }
        this.receptionistService.saveNewSessionExtension(this.sessionExtension)
            .subscribe(function (response) {
            thisComponent.sessionExtension = response;
            thisComponent.clearSessionExtensionControls();
            thisComponent.getAppointmentDetailsWrapper(thisComponent.doctorId);
            let msg = thisComponent.translate.instant("SavedSuccessfully");
            thisComponent.toastr.success(msg, '');
            thisComponent.btnCloseSessionExtensionModal.nativeElement.click();
        }, function (error) {
            thisComponent.toastr.error(error, '');
            //thisComponent.showProgress = false;
        }, function () {
            //thisComponent.showProgress = false;
        });
    }
    updateCalendarEvents(appointment, isNewAppointment) {
        let evnt = new CalendarEvent();
        this.updateEvent(evnt, appointment);
        if (isNewAppointment) //Add new
         {
            this.appointementsList.push(appointment);
            this.events.push(evnt);
        }
        else //Update existing
         {
            if (this.cancelled) {
                for (let i = 0; i < this.appointementsList.length; i++) {
                    if (appointment.id == this.appointementsList[i].id) {
                        //        this.sessionsList.splice(this.sessionIndex, 1);
                        this.appointementsList.splice(i, 1);
                        this.cancelled = false;
                        break;
                    }
                }
                for (let i = 0; i < this.events.length; i++) {
                    if (appointment.id == this.events[i].id) {
                        this.events.splice(i, 1);
                        this.cancelled = false;
                        break;
                    }
                }
            }
            else {
                for (let i = 0; i < this.appointementsList.length; i++) {
                    if (appointment.id == this.appointementsList[i].id) {
                        this.appointementsList[i] = appointment;
                        break;
                    }
                }
                for (let i = 0; i < this.events.length; i++) {
                    if (appointment.id == this.events[i].id) {
                        this.events[i] = evnt;
                        break;
                    }
                }
            }
        }
    }
    updateAppointmentModel(appointment) {
        let thisComponent = this;
        if (appointment.arrivalTime)
            appointment.arrivalTime = thisComponent.utilityClass.getDateTimeFromString(appointment.arrivalTime);
        if (appointment.reconfirmDate)
            appointment.reconfirmDate = thisComponent.utilityClass.getDateTimeFromString(appointment.reconfirmDate);
    }
    getAppointmentFullTitle(appointment) {
        let fullTitle = '';
        fullTitle += appointment.patientUnifiedMRN;
        fullTitle += ' - ' + appointment.patientName;
        fullTitle += ' - ' + appointment.mobile;
        if (appointment.arrived)
            fullTitle += ' - ' + appointment.arrivalTimeString;
        if (appointment.confirmed)
            fullTitle += ' - ' + this.translate.instant('Confirmed');
        else
            fullTitle += ' - ' + this.translate.instant('NotConfirmed');
        if (appointment.description)
            fullTitle += ' - ' + appointment.description;
        return fullTitle;
    }
    updateEvent(evnt, appointment) {
        evnt.id = appointment.id;
        evnt.dateTime = appointment.dateTimeString;
        evnt.title = appointment.patientName;
        evnt.fullTitle = appointment.fullTitle;
        //Start
        evnt.start = appointment.start;
        //End
        evnt.end = appointment.end;
        if (appointment.isWaitIn)
            evnt.className = 'calendarEvent-waitin';
        else if (appointment.arrived)
            evnt.className = 'calendarEvent-arrived';
        else if (appointment.confirmed)
            evnt.className = 'calendarEvent-confirmed';
        else if (appointment.flag)
            evnt.className = 'calendarEvent-flaged';
        else
            evnt.className = 'calendarEvent';
    }
    clearSessionExtensionControls() {
        this.sessionExtension = {};
    }
    showSessionExtensionPopupForOpenSlot() {
        let msg = this.translate.instant("OpenSlot");
        //if (this.isDoctorSelected != undefined && this.isDoctorSelected == true) {
        this.sessionExtension = {
            type: 0,
            clinicId: this.clinicId,
            doctorId: this.doctorId
        };
        this.sessionExtensionPopupTitle = msg;
        this.btnShowSessionExtensionSlotModal.nativeElement.click();
        //}
    }
    showSessionExtensionPopupForCloseSlot() {
        let msg = this.translate.instant("CloseSlot");
        // if (this.isDoctorSelected != undefined && this.isDoctorSelected == true) {
        this.sessionExtension = {
            type: 1,
            clinicId: this.clinicId,
            doctorId: this.doctorId
        };
        this.sessionExtensionPopupTitle = msg;
        this.btnShowSessionExtensionSlotModal.nativeElement.click();
        // }
    }
    showRestoreTimeSlotsPopup() {
        //if (this.isDoctorSelected != undefined && this.isDoctorSelected == true)
        this.btnShowRestoreTimeSlotsModal.nativeElement.click();
    }
    restoreTimeSlots() {
        let thisComponent = this;
        //thisComponent.showProgress = true;
        var restoreSlotWrapper = {
            clinicId: this.clinicId,
            doctorId: this.doctorId,
            dateToRestoreTimeSlots: this.utilityClass.getUtcDateTime(this.dateToRestoreTimeSlots)
        };
        this.receptionistService.restoreTimeSlots(restoreSlotWrapper)
            .subscribe(function (response) {
            thisComponent.getAppointmentDetailsWrapper(thisComponent.doctorId);
            let msg = thisComponent.translate.instant("SavedSuccessfully");
            thisComponent.toastr.success(msg, '');
            thisComponent.btnCloseRestoreTimeSlotsModal.nativeElement.click();
        }, function (error) {
            thisComponent.toastr.error(error, '');
            //thisComponent.showProgress = false;
        }, function () {
            //thisComponent.showProgress = false;
        });
    }
    showRepeatAppointmentPopup() {
        if (this.appointmentModel != undefined) {
            //this.selectedRepeatDate = this.utilityClass.getUtcDateFromString(this.appointmentModel.dateTime);
            //this.selectedRepeatTimeSlot = this.appointmentModel.time;
            //this.repeatedAppointmentModel.time = this.appointmentModel.time;
            this.repeatedAppointmentModel.patientId = this.appointmentModel.patientId;
            this.repeatedAppointmentModel.patientClinicMRN = this.appointmentModel.patientClinicMRN;
            this.repeatedAppointmentModel.patientName = this.appointmentModel.patientName;
            this.repeatedAppointmentModel.visitTypeId = this.appointmentModel.visitTypeId;
            this.repeatedAppointmentModel.appointmentClassId = this.appointmentModel.appointmentClassId;
            this.repeatedAppointmentModel.flag = this.appointmentModel.flag;
            this.repeatedAppointmentModel.description = this.appointmentModel.description;
            this.displayRepeatAppointmentPopup = true;
        }
    }
    selectRepeatedAppointmentClass(classId) {
        this.repeatedAppointmentModel.appointmentClassId = classId;
    }
    saveRepeatedAppointment() {
        let timeSlot = this.repeatingTimeSlotsList.find(ts => ts.name == this.selectedRepeatTimeSlot);
        if (timeSlot != undefined) {
            //Update the model
            this.repeatedAppointmentModel.dateTime = this.utilityClass.getUtcDateTime(timeSlot.dateTime);
            this.repeatedAppointmentModel.doctorId = this.doctorId;
            this.repeatedAppointmentModel.patientId = this.patientId;
            this.repeatedAppointmentModel.slotDuration = this.slotDuration;
            this.repeatedAppointmentModel.numberOfTimeSlots = this.numberOfTimeSlots;
            this.showProgress = true;
            let thisComp = this;
            let isNewAppointment = true;
            this.receptionistService.saveOrUpdateAppointment(this.repeatedAppointmentModel)
                .subscribe(function (response) {
                thisComp.updateCalendarEvents(response, isNewAppointment);
                thisComp.cancelRepeatingAppointment();
                let msg = thisComp.translate.instant("SavedSuccessfully");
                thisComp.toastr.success(msg, '');
            }, function (error) {
                thisComp.toastr.error(error, '');
                thisComp.showProgress = false;
            }, function () {
                thisComp.showProgress = false;
            });
        }
        else {
            let msg = this.translate.instant("EnterDateTime");
            this.toastr.error(msg, '');
        }
    }
    onRepeatDateSelect(dateValue) {
        this.repeatingTimeSlotsList = [];
        if (dateValue != undefined) {
            this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            this.repeatingTimeSlotsList = this.receptionistAppointmentManager.getTimeSlots(dateValue);
            this.slotDuration = this.receptionistAppointmentManager.getSlotDuration();
        }
    }
    cancelRepeatingAppointment() {
        this.repeatedAppointmentModel = { id: 0 };
        this.repeatingTimeSlotsList = [];
        this.selectedRepeatDate = '';
        this.selectedRepeatTimeSlot = '';
        this.displayRepeatAppointmentPopup = false;
    }
    handleUserInterfaceViews(user) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true))
                    this.enableNewAppointmentBtn = true; //that is used also with open,restore,close solts.can we use this boolean with save button also?
                if (item.permission.key == this.key.PatientRegistration && (item.add == true || item.fullControl == true))
                    this.enableQuickRegistrationBtn = true;
                if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true || item.edit == true))
                    this.enableSaveAppointmentPopupBtn = true;
                //
                if (item.permission.key == this.key.CancelAppointment && (item.allow))
                    this.enableCancelAppointmentBtn = true; //that is used also with open,restore,close solts.can we use this boolean with save button also?
                if (item.permission.key == this.key.SetArrivalTime && (item.allow))
                    this.enableSetArrivalTimeBtn = true;
                if (item.permission.key == this.key.OpenSlot && (item.allow))
                    this.enableOpenSlotBtn = true;
                if (item.permission.key == this.key.CloseSlot && (item.allow))
                    this.enableCloseSlot = true;
                if (item.permission.key == this.key.RestoreSlots && (item.allow))
                    this.enableRestoreSlot = true;
            }
        }
    }
    handleloadEvents(event) {
        if (!this.initialView) {
            let viewName = event.view.name;
            this.isDayView = false;
            this.dayViewSelectedDate = new Date();
            if (viewName == 'basicDay') {
                this.isDayView = true;
                this.dayViewSelectedDate = event.view.intervalStart._d;
                this.selectedDateAsString = this.utilityClass.getUtcDateAsString(this.dayViewSelectedDate);
            }
            let startDate = event.view.start._d;
            let startDay = startDate.getDate();
            let endDate = new Date(startDate.getTime());
            endDate.setDate(startDay + 6);
            let periodArgs = {};
            periodArgs.startDate = startDate;
            periodArgs.endDate = endDate;
            periodArgs.doctorId = this.doctorId;
            let thisComp = this;
            thisComp.showLoading = true;
            this.receptionistService.getAppointmentsWithinPeriod(periodArgs)
                .subscribe(function (response) {
                thisComp.appointementsList = response.appointments;
                thisComp.events = response.calendarEvents;
                thisComp.adjustEventsAccordingToCalendarView();
                thisComp.currentHijriWeekDays = response.currentWeekHijriDates;
                thisComp.fillCurrentWeekDays(startDate);
                thisComp.adjustCalendarView(); /*call this method inside FillHijriWeekDays*/
                //thisComp.FillHijriWeekDays()
                if (thisComp.gotoDateString) {
                    // open appointment popup
                    thisComp.fillAppointmentinfo(thisComp.selectedAppointmentIDFromSearch);
                }
                //thisComp.GetSelectedDateAppointmentsToPrint();
            }, function (error) {
                thisComp.toastr.error(error, '');
                thisComp.showLoading = false;
            }, function () {
                thisComp.showLoading = false;
                thisComp.gotoDateString = '';
            });
            //this.FillHijriWeekDays();
        }
    }
    adjustEventsAccordingToCalendarView() {
        //if (this.isDayView) {
        //    for (let event of this.events) {
        //        event.title = event.fullTitle;
        //    }
        //}
        //else {
        //    for (let event of this.events) {
        //        event.title = event.shortTitle;
        //    }
        //}
        for (let event of this.events) {
            event.title = event.shortTitle;
        }
    }
    handleDayClick(evt) {
        let selectedDateTime = this.utilityClass.convertToUTCDateTime(evt.date._d);
        let selectedSlot = new _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__.TimeSlot(selectedDateTime);
        this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
        let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(selectedDateTime);
        let availableSlot = availableTimeSlots.find(ts => ts.name == selectedSlot.name);
        if (availableSlot != undefined) {
            this.addNewAppointment();
            this.selectedDate = selectedDateTime;
            this.onDateSelect(this.selectedDate);
            this.selectedTimeSlot = availableSlot.name;
        }
    }
    handleCalendarSelect(start, end) {
        if (this.isDoctorSelected) {
            this.calendarRangeStartDateTime = this.utilityClass.convertToUTCDateTime(start._d);
            this.calendarRangeEndDateTime = this.utilityClass.convertToUTCDateTime(end._d);
            let dayDate = this.utilityClass.getDateComponent(this.calendarRangeStartDateTime);
            this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager(this.appointmentSchedulesList, this.sessionExtensionsList);
            let availableTimeSlots = this.receptionistAppointmentManager.getTimeSlots(dayDate);
            this.calendarRangeFirstSlot = new _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__.TimeSlot(this.calendarRangeStartDateTime);
            this.calendarRangeLastSlot = new _shared_shared_time_slot_model__WEBPACK_IMPORTED_MODULE_5__.TimeSlot(this.calendarRangeEndDateTime);
            let availableSlot = availableTimeSlots.find(ts => ts.name == this.calendarRangeFirstSlot.name);
            //Selection is in an Open area
            if (availableSlot != undefined) {
                this.showBookOrCloseModal();
            }
            else //Selection is in a Closed area
             {
                this.prepareAndShowOpenSlotsModal();
            }
        }
        else {
            let msg = this.translate.instant("NoDoctorSelected");
            this.toastr.error(msg);
        }
    }
    calculateNumberOfSlots(startDateTime, endDateTime) {
        let dayDate = this.utilityClass.getDateComponent(startDateTime);
        let slotDuration = this.receptionistAppointmentManager.getSlotDurationForDate(dayDate);
        let diffInMiliSeconds = Math.abs(endDateTime - startDateTime);
        let diffInMinutes = (diffInMiliSeconds / 1000) / 60;
        let numberOfTimeSlots = 1;
        if (slotDuration != undefined && slotDuration != 0)
            numberOfTimeSlots = diffInMinutes / slotDuration;
        return numberOfTimeSlots;
    }
    prepareAndShowNewAppointmentModal() {
        //Close the options popup
        this.btnCloseBookOrCloseModal.nativeElement.click();
        this.addNewAppointment();
        this.selectedDate = this.calendarRangeStartDateTime;
        this.onDateSelect(this.selectedDate);
        this.selectedTimeSlot = this.calendarRangeFirstSlot.name;
        this.numberOfTimeSlots = this.calculateNumberOfSlots(this.calendarRangeStartDateTime, this.calendarRangeEndDateTime);
        this.inquireWaitInAppointment();
    }
    prepareAndShowCloseSlotsModal() {
        //Close the options popup
        this.btnCloseBookOrCloseModal.nativeElement.click();
        this.selectedDateForOpenCloseSlot = this.calendarRangeStartDateTime;
        this.selectedStartTimeForOpenCloseSlot = this.calendarRangeFirstSlot.name;
        this.selectedEndTimeForOpenCloseSlot = this.calendarRangeLastSlot.name;
        this.onOpneCloseSlotDateSelect(this.selectedDateForOpenCloseSlot);
        this.showSessionExtensionPopupForCloseSlot();
    }
    prepareAndShowOpenSlotsModal() {
        this.selectedDateForOpenCloseSlot = this.calendarRangeStartDateTime;
        this.selectedStartTimeForOpenCloseSlot = this.calendarRangeFirstSlot.name;
        this.selectedEndTimeForOpenCloseSlot = this.calendarRangeLastSlot.name;
        this.onOpneCloseSlotDateSelect(this.selectedDateForOpenCloseSlot);
        this.showSessionExtensionPopupForOpenSlot();
    }
    showPatientAdvancedSearchDialog() {
        this.displayPatientAdvancedSearch = true;
    }
    managePatientSelection(selectedPatientMrn) {
        this.patientClinicMrn = selectedPatientMrn;
        this.displayPatientAdvancedSearch = false;
        this.getPatient();
    }
    handleEventResize(e) {
        alert('Event resized');
    }
    handleEventDrop(e) {
        alert('Event dropped');
    }
    getSelectedAppointment(appointmentWrapper) {
        if (appointmentWrapper) {
            // select current doctor 
            let selectedItem = this.getSelectedDoctor(appointmentWrapper.doctorId);
            if (selectedItem) {
                this.selectedDoctor = selectedItem;
                this.handelSelectedNode(selectedItem);
                this.gotoDateString = appointmentWrapper.appointmentDate;
                this.selectedAppointmentIDFromSearch = appointmentWrapper.id;
                this.btnCloseReceptionistSearchPopup.nativeElement.click();
            }
        }
    }
    getSelectedDoctor(doctorID) {
        let selectedNode;
        for (let node of this.organizationStructureTree) {
            selectedNode = this.getDoctorNode(node, doctorID);
            if (selectedNode)
                break;
        }
        return selectedNode;
    }
    getDoctorNode(node, doctorID) {
        if (node.children) {
            for (let childNode of node.children) {
                if (childNode.type == 'SecurityUser' && childNode.data == doctorID) {
                    return childNode;
                }
                else
                    return this.getDoctorNode(childNode, doctorID);
            }
        }
    }
    openPatientProfile() {
        this.router.navigate(['/patient/file', this.patientId]);
        this.btnCloseAppointmentPopup.nativeElement.click();
    }
    inquireWaitInAppointment() {
        this.waitInInquiry = '';
        if ((!this.appointmentModel || this.appointmentModel.id == 0) && this.selectedDate) {
            this.appointmentModel.dateTime = this.utilityClass.getUtcDateTime(this.selectedDate);
            this.appointmentModel.doctorId = this.doctorId;
        }
        let vm = this;
        this.receptionistService.inquiryWaitInAppointment(this.appointmentModel)
            .subscribe(function (response) {
            vm.waitInInquiry = response;
        }, function (error) {
        }, function () {
        });
    }
    getServiceTimeSlots(serviceTimeSlotId) {
        var serviceTimeSlot = this.serviceTimeSlotsList.find(srv => srv.id == serviceTimeSlotId);
        if (serviceTimeSlot) {
            this.numberOfTimeSlots = serviceTimeSlot.noOfTimeSlots;
        }
    }
    handelDayClickEvent(e) {
        alert(e.calEvent.date);
    }
    GetSelectedDateAppointmentsToPrint() {
        let selectedDayAppoitmentsOriginal = [];
        let vm = this;
        if (this.isDayView && this.events) {
            for (let event of this.events) {
                if (event.dateTime && this.utilityClass.getDateTimeFromString(event.dateTime).getDate() == this.dayViewSelectedDate.getDate()) {
                    let evnt = {};
                    evnt.dateTime = this.utilityClass.getDateTimeFromString(event.start);
                    evnt.title = this.utilityClass.getAppointmentTime(event.start, event.end) + event.fullTitle;
                    selectedDayAppoitmentsOriginal.push(evnt);
                }
            }
            // order apointments by datetime
            selectedDayAppoitmentsOriginal.sort(function (a, b) {
                // to get a value that is either negative, positive, or zero.
                return a.dateTime - b.dateTime;
            });
            this.SelectedDayAppoitments = [];
            for (let event of selectedDayAppoitmentsOriginal) {
                var items = event.title.split('**');
                this.SelectedDayAppoitments.push({
                    time: items[0],
                    mrn: items[1],
                    name: items[2],
                    mobile: items[3],
                    arrivalTime: items[4],
                    confirmed: items[5],
                    remarks: items[6]
                });
            }
            this.btnDisplayCurrentDayAppointment.nativeElement.click();
        }
    }
    isAppointmentSlotsOpened(timeSlot) {
        let isSlotOpened = true;
        if (this.numberOfTimeSlots > 1) {
            for (let i = 0; i < this.numberOfTimeSlots; i++) {
                let minutes = timeSlot.getMinutes() + (i * this.slotDuration);
                let appointmentDate = new Date(timeSlot.getFullYear(), timeSlot.getMonth(), timeSlot.getDate(), timeSlot.getHours(), timeSlot.getMinutes());
                appointmentDate.setMinutes(minutes);
                let slotName = this.utilityClass.getFormattedTime(appointmentDate.getHours(), appointmentDate.getMinutes());
                let existedSlot = this.timeSlotsList.find(slt => slt.name == slotName);
                if (existedSlot == null || existedSlot == undefined) {
                    isSlotOpened = false;
                    break;
                }
            }
        }
        return isSlotOpened;
    }
    handleNavDayClick(event) {
        this.isDayView = true;
        this.dayViewSelectedDate = event.date._d;
        this.selectedDateAsString = this.utilityClass.getUtcDateAsString(this.dayViewSelectedDate);
        this.GetSelectedDateAppointmentsToPrint();
    }
}
ReceptionistAppointmentsComponent.ɵfac = function ReceptionistAppointmentsComponent_Factory(t) { return new (t || ReceptionistAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_6__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_clinics_shared_clinic_service__WEBPACK_IMPORTED_MODULE_7__.ClinicService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_security_shared_account_service__WEBPACK_IMPORTED_MODULE_9__.AccountService)); };
ReceptionistAppointmentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ReceptionistAppointmentsComponent, selectors: [["receptionist-appointments"]], viewQuery: function ReceptionistAppointmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c11, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.bookOrCloseModalButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnCloseBookOrCloseModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.appointmentModalButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnClostAppointmentModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnShowSessionExtensionSlotModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnCloseSessionExtensionModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnCloseRestoreTimeSlotsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnShowRestoreTimeSlotsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.pSchedule = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnCloseReceptionistSearchPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnCloseAppointmentPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.btnDisplayCurrentDayAppointment = _t.first);
    } }, decls: 579, vars: 203, consts: [[4, "ngIf"], [1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "row", "NBbreadcrumb"], [1, "row", "well"], [1, "col-md-3", "nopadding"], [1, "row", "nopadding", 2, "padding-bottom", "17px !important"], [1, "pointer", "btn", "btn-primary", 2, "padding", "9px !important", 3, "click"], ["selectionMode", "single", 3, "value", "selection", "selectionChange", "onNodeSelect"], ["pTemplate", "Medical"], ["pTemplate", "NonMedical"], ["pTemplate", "ClinicDepartment"], ["pTemplate", "ClinicDivision"], ["pTemplate", "SecurityUser"], [1, "col-md-9", "padding5"], [1, "row", "btnDirection", 2, "padding-bottom", "13px !important"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "glyphicon", "glyphicon-time"], ["type", "button", "data-toggle", "modal", "data-target", "#quickRegistrationModal", 1, "btn", "btn-primary", 3, "disabled"], [1, "glyphicon", "glyphicon-plus"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["class", "pointer", 3, "disabled", "click", 4, "ngIf"], ["class", "disabled", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#searchForPatient", 1, "btn", "btn-primary"], [1, "glyphicon", "glyphicon-search"], ["class", "row", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#bookOrCloseModal", 2, "display", "none"], ["bookOrCloseModalButton", ""], ["id", "bookOrCloseModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "fade"], ["bookOrCloseModal", ""], [1, "modal-dialog", "halfWidth"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body", "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "display", "none"], ["btnCloseBookOrCloseModal", ""], ["type", "button", "data-toggle", "modal", "data-target", "#appointmentModal", 2, "display", "none"], ["appointmentModalButton", ""], ["id", "appointmentModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "fade"], ["appointmentModal", ""], ["class", "form-horizontal", "name", "appointmentDetailsFrm", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#sessionExtensionSlotModal", 2, "display", "none"], ["btnShowSessionExtensionSlotModal", ""], ["id", "sessionExtensionSlotModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "fade"], ["sessionExtensionSlotModal", ""], ["class", "form-horizontal", "name", "sessionExtensionFrm", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#restoreTimeSlotsModal", 2, "display", "none"], ["btnShowRestoreTimeSlotsModal", ""], ["id", "restoreTimeSlotsModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "fade"], ["restoreTimeSlotsModal", ""], ["class", "form-horizontal", "name", "restoreTimeSlotsFrm", 4, "ngIf"], ["id", "quickRegistrationModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "width75percent"], ["name", "patientAccountForm", 1, "form-horizontal"], ["patientAccountForm", "ngForm"], [1, "modal-body"], [1, "form-group"], [1, "control-label", "col-md-2"], [1, "col-md-4"], ["dateFormat", "dd/mm/yy", "yearRange", "2000:2050", 3, "ngModel", "monthNavigator", "yearNavigator", "showIcon", "required", "ngModelOptions", "ngModelChange", "onSelect"], ["id", "ddlTimes", "name", "ddlTimes", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlTimes", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["type", "text", "id", "middleName", "name", "middleName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["middleName", "ngModel"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "text", "id", "mobile", "name", "mobile", "pattern", "^(\\+?[0-9]{1,5})?([1-9][0-9]{9})$", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobile", "ngModel"], ["dateFormat", "dd/mm/yy", "yearRange", "1900:2050", 3, "ngModel", "monthNavigator", "yearNavigator", "showIcon", "required", "ngModelOptions", "ngModelChange"], ["type", "radio", "id", "rbGender", "name", "rbGender", "value", "1", 3, "ngModel", "ngModelChange"], ["type", "radio", "id", "rbGender", "value", "2", "name", "rbGender", 3, "ngModel", "ngModelChange"], ["id", "ddlQuickRegisterationServices", "name", "ddlQuickRegisterationServices", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["ddlQuickRegisterationServices", "ngModel", "srv", ""], [1, "col-md-offset-4", "col-md-8"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["id", "searchForPatient", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "fullWidth"], [3, "onAppointmentSelected"], [1, "text-center"], ["btnCloseReceptionistSearchPopup", ""], ["type", "button", "data-toggle", "modal", "data-target", "#selectedDayAppoitments", 1, "hidden"], ["btnDisplayCurrentDayAppointment", ""], ["id", "selectedDayAppoitments", "role", "dialog", 1, "modal", "fade"], [3, "section"], ["id", "todayAppoinmentsDivasd"], [1, "hidden"], [1, "row", "text-center"], [1, "user-thumb"], ["alt", "image", 3, "src"], [1, "padding5"], [1, "table", "table-responsive", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], ["id", "todayAppoinmentsDiv", 1, "hidden"], [1, "glyphicon", "glyphicon-user"], [1, "pointer", 3, "click"], [1, "disabled"], [1, "forum-header", 2, "margin-left", "0px", "margin-right", "0px", "padding", "5px", "border-radius", "10px"], [1, "col-md-8"], [1, "forum-title"], [1, "forum-meta", 2, "margin-bottom", "0px"], [1, "forum-meta-info"], [2, "padding", "2px"], [3, "divisonId", "divisonName"], ["name", "appointmentDetailsFrm", 1, "form-horizontal"], ["appointmentDetailsFrm", "ngForm"], ["btnCloseAppointmentPopup", ""], [1, "row", "alert", "alert-info", 2, "margin-bottom", "5px!important", "padding", "4px!important"], [1, "col-md-6"], ["class", "pointer", 3, "click", 4, "ngIf"], [1, "col-md-10"], ["id", "ddlTime", "name", "ddlTime", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlTime", "ngModel"], ["type", "number", "min", "1", "id", "txtNumberOfTimeSlots", "name", "txtNumberOfTimeSlots", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtNumberOfTimeSlots", "ngModel"], [1, "col-md-6", "nopadding"], ["id", "txtPatientClinicMrn", "name", "txtPatientClinicMrn", "required", "", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["txtPatientClinicMrn", "ngModel"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "txtPatientName", "name", "txtPatientName", "readonly", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtPatientName", "ngModel"], ["name", "ddlServices", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["ddlServices", "ngModel", "srv", ""], ["value", "", "selected", "", 1, "emptyOption"], [1, "col-md-2"], ["type", "checkbox", "id", "chkConfirmed", "name", "chkConfirmed", 1, "form-control", 3, "ngModel", "ngModelChange"], ["chkConfirmed", "ngModel"], [1, "control-label", "col-md-1"], ["type", "checkbox", "id", "chkFlag", "name", "chkFlag", 1, "form-control", 3, "ngModel", "ngModelChange"], ["chkFlag", "ngModel"], ["id", "txtRemarks", "name", "txtRemarks", 1, "form-control", 3, "ngModel", "ngModelChange"], ["btnClostAppointmentModal", ""], [3, "value"], ["type", "radio", "name", "appClass", "required", "", 3, "value", "checked", "click"], ["name", "sessionExtensionFrm", 1, "form-horizontal"], ["sessionExtensionFrm", "ngForm"], ["id", "ddlSessionExtensionStartTime", "name", "ddlSessionExtensionStartTime", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlSessionExtensionStartTime", "ngModel"], ["id", "ddlSessionExtensionEndTime", "name", "ddlSessionExtensionEndTime", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlSessionExtensionEndTime", "ngModel"], [1, "col-md-offset-4", "col-md-4"], ["btnCloseSessionExtensionModal", ""], ["name", "restoreTimeSlotsFrm", 1, "form-horizontal"], ["restoreTimeSlotsFrm", "ngForm"], ["dateFormat", "dd/mm/yy", "yearRange", "2000:2050", 3, "ngModel", "monthNavigator", "yearNavigator", "showIcon", "required", "ngModelOptions", "ngModelChange"], ["btnCloseRestoreTimeSlotsModal", ""], ["src", "assets/images/ok-24.jpg", "title", "Confirmed", "alt", "Confirmed", 4, "ngIf"], ["src", "assets/images/ok-24.jpg", "title", "Confirmed", "alt", "Confirmed"]], template: function ReceptionistAppointmentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, ReceptionistAppointmentsComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ReceptionistAppointmentsComponent_div_2_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "shared-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_a_click_24_listener() { return ctx.expandAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_a_click_28_listener() { return ctx.collapseAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "p-tree", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function ReceptionistAppointmentsComponent_Template_p_tree_selectionChange_34_listener($event) { return ctx.selectedDoctor = $event; })("onNodeSelect", function ReceptionistAppointmentsComponent_Template_p_tree_onNodeSelect_34_listener($event) { return ctx.nodeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, ReceptionistAppointmentsComponent_ng_template_36_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, ReceptionistAppointmentsComponent_ng_template_38_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, ReceptionistAppointmentsComponent_ng_template_40_Template, 1, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, ReceptionistAppointmentsComponent_ng_template_42_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, ReceptionistAppointmentsComponent_ng_template_44_Template, 3, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_button_click_52_listener() { return ctx.addNewAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](54, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](57, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](60, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](65, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](69, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](71, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](76, ReceptionistAppointmentsComponent_a_76_Template, 3, 5, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](78, ReceptionistAppointmentsComponent_a_78_Template, 3, 3, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](80, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](83, ReceptionistAppointmentsComponent_a_83_Template, 3, 5, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](84, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](85, ReceptionistAppointmentsComponent_a_85_Template, 3, 3, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](86, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](87, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](89, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](90, ReceptionistAppointmentsComponent_a_90_Template, 3, 5, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](92, ReceptionistAppointmentsComponent_a_92_Template, 3, 3, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](94, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](95, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](97, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](99, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](102, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](103, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](104, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](105, ReceptionistAppointmentsComponent_div_105_Template, 44, 11, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](106, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](107, ReceptionistAppointmentsComponent_div_107_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](108, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](109, ReceptionistAppointmentsComponent_div_109_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](110, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](111, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](112, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](114, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](115, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](116, "button", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](118, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](119, "div", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](121, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](122, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](123, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](124, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](126, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](127, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](128, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](129, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](130, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](131, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](132, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](135, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](136, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](137, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](138, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](139, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_button_click_139_listener() { return ctx.prepareAndShowNewAppointmentModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](142, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](143, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_button_click_143_listener() { return ctx.prepareAndShowCloseSlotsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](146, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](147, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](148, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](149, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](150, "button", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](154, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](155, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](156, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](157, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](158, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](159, "button", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](161, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](162, "div", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](164, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](165, ReceptionistAppointmentsComponent_form_165_Template, 224, 92, "form", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](166, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](167, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](168, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](169, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](170, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](171, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](172, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](173, "button", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](175, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](176, "div", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](178, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](179, ReceptionistAppointmentsComponent_form_179_Template, 98, 34, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](180, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](181, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](182, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](183, "button", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](185, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](186, "div", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](188, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](189, ReceptionistAppointmentsComponent_form_189_Template, 55, 22, "form", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](190, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](191, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](192, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](193, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](194, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](195, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](196, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](197, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](198, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](199, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](200, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](201, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](202, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](203, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](204, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](207, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](208, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](209, "form", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](211, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](212, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](213, "\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](214, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](215, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](216, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](218, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](219, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](220, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](221, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](222, "p-calendar", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_p_calendar_ngModelChange_222_listener($event) { return ctx.selectedDate = $event; })("onSelect", function ReceptionistAppointmentsComponent_Template_p_calendar_onSelect_222_listener($event) { return ctx.onDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](223, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](224, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](225, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](227, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](228, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](229, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](230, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](231, "select", 68, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_select_ngModelChange_231_listener($event) { return ctx.selectedTimeSlot = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](233, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](234, ReceptionistAppointmentsComponent_option_234_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](235, "translateObjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](236, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](237, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](238, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](239, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](240, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](241, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](242, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](244, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](245, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](246, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](247, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](248, "input", 71, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_248_listener($event) { return ctx.patientQucikAccount.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](250, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](251, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](252, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](253);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](254, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](255, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](256, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](257, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](258, "input", 73, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_258_listener($event) { return ctx.patientQucikAccount.middleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](260, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](261, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](262, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](263, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](264, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](265, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](267, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](268, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](269, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](270, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](271, "input", 75, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_271_listener($event) { return ctx.patientQucikAccount.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](273, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](274, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](275, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](276);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](277, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](278, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](279, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](280, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](281, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_281_listener($event) { return ctx.patientQucikAccount.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](283, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](284, "\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](285, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](286, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](287, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](288, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](290, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](291, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](292, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](293, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](294, "p-calendar", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_p_calendar_ngModelChange_294_listener($event) { return ctx.patientQucikAccount.birthDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](295, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](296, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](297, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](298);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](299, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](300, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](301, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](302, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](303, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](304, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](305, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](306, "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](308, "\n                                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](309, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_309_listener($event) { return ctx.patientQucikAccount.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](310);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](311, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](312, "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](314, "\n                                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](315, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_input_ngModelChange_315_listener($event) { return ctx.patientQucikAccount.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](316);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](317, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](318, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](319, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](320, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](321, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](322, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](323, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](324, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](325, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](326);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](327, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](328, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](329, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](330, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](331, "select", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ReceptionistAppointmentsComponent_Template_select_ngModelChange_331_listener($event) { return ctx.patientQucikAccount.serviceTimeSlotId = $event; })("change", function ReceptionistAppointmentsComponent_Template_select_change_331_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](333); return ctx.getServiceTimeSlots(_r36.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](334, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](335, ReceptionistAppointmentsComponent_option_335_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](336, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](337, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](338, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](339, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](340, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](341, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](342, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](343, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](344, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](345, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](346, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](347, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ReceptionistAppointmentsComponent_Template_button_click_347_listener() { return ctx.createQuickPateintAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](348);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](349, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](350, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](351, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](352);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](353, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](354, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](355, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](356, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](357, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](358, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](359, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](360, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](361, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](362, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](363, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](364, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](365, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](366, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](367, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](368, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](369, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](370, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](371, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](372, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](373, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](374, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](375);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](376, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](377, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](378, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](379, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](380, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](381, "receptionist-search", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onAppointmentSelected", function ReceptionistAppointmentsComponent_Template_receptionist_search_onAppointmentSelected_381_listener($event) { return ctx.getSelectedAppointment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](382, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](383, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](384, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](385, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](386, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](387, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](388, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](389, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](390, "button", 86, 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](392);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](393, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](394, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](395, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](396, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](397, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](398, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](399, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](400, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](401, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](402, "\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](403, "button", 92, 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](405, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](406, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](407, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](408, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](409, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](410, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](411, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](412, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](413, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](414, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](415, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](416, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](417, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](418, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](419);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](420, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](421, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](422, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](423, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](424, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](425, "print-page", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](426, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](427, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](428, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](429, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](430, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](431, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](432, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](433, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](434, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](435, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](436, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](437, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](438, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](439, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](440, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](441, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](442);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](443, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](444);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](445, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](446, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](447, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](448, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](449);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](450, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](451);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](452, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](453, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](454, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](455, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](456, "\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](457, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](458, "table", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](459, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](460, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](461, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](462, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](463, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](464, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](465);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](466, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](467, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](468, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](469);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](470, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](471, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](472, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](473);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](474, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](475, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](476, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](477);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](478, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](479, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](480, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](481);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](482, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](483, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](484, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](485);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](486, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](487, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](488, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](489);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](490, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](491, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](492, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](493, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](494, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](495, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](496, ReceptionistAppointmentsComponent_tr_496_Template, 26, 7, "tr", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](497, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](498, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](499, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](500, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](501, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](502, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](503, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](504, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](505, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](506, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](507, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](508, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](509, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](510, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](511, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](512, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](513, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](514, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](515, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](516);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](517, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](518);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](519, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](520, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](521, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](522, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](523);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](524, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](525);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](526, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](527, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](528, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](529, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](530, "\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](531, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](532, "table", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](533, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](534, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](535, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](536, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](537, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](538, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](539);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](540, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](541, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](542, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](543);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](544, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](545, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](546, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](547);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](548, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](549, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](550, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](551);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](552, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](553, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](554, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](555);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](556, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](557, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](558, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](559);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](560, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](561, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](562, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](563);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](564, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](565, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](566, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](567, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](568, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](569, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](570, ReceptionistAppointmentsComponent_tr_570_Template, 25, 7, "tr", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](571, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](572, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](573, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](574, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](575, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](576, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](577, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](578, "\n");
    } if (rf & 2) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("activeTabIndex", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 99, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" \u00A0/\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 101, "Appointments"), "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 103, "ExpandAll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 105, "CollapseAll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.organizationStructureTree)("selection", ctx.selectedDoctor);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.isDoctorSelected || !ctx.enableNewAppointmentBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](56, 107, "NewAppointment"), "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.isDoctorSelected || !ctx.enableQuickRegistrationBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](62, 109, "QuickRegistration"), "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](68, 111, "Slot"), "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](101, 113, "Search"), "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDoctorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isDivisionSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDivisionSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](134, 115, "SelectAction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](141, 117, "BookNewAppointment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](145, 119, "CloseSlots"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](153, 121, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](206, 123, "PatientQuickRegistration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](218, 125, "Date"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.selectedDate)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("required", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](201, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](227, 127, "Time "), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.selectedTimeSlot);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](235, 129, ctx.timeSlotsList));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](244, 131, "FirstName"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](254, 133, "MiddleName"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.middleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](267, 135, "LastName"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](277, 137, "Mobile"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](290, 139, "BirthDate"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.birthDate)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("required", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](202, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](299, 141, "Gender"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](311, 143, "Male"), "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](317, 145, "Female"), "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](327, 147, "Service"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.patientQucikAccount.serviceTimeSlotId);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.serviceTimeSlotsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !_r28.valid || !ctx.enableQuickRegistrationBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](349, 149, "Register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](353, 151, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](376, 153, "Search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](393, 155, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](420, 157, "Appointments"), ":  ", ctx.selectedDateAsString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("section", ctx.toPrintDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("src", ctx.accountService.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](443, 159, "DoctorName"), ":\u00A0\u00A0\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", ctx.doctorName, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](450, 161, "Date"), ":\u00A0\u00A0\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](452, 163, ctx.dayViewSelectedDate, "dd/MM/yyyy"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](466, 166, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](470, 168, "MRN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](474, 170, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](478, 172, "Mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](482, 174, "ArrivalTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](486, 176, "Confirmed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](490, 178, "Remarks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.SelectedDayAppoitments);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("src", ctx.accountService.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](517, 180, "DoctorName"), ":\u00A0\u00A0\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", ctx.doctorName, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                                ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](524, 182, "Date"), ":\u00A0\u00A0\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\n                            ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](526, 184, ctx.dayViewSelectedDate, "dd/MM/yyyy"), "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](540, 187, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](544, 189, "MRN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](548, 191, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](552, 193, "Mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](556, 195, "ArrivalTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](560, 197, "Confirmed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](564, 199, "Remarks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.SelectedDayAppoitments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_10__.SharedTabsComponent, primeng_tree__WEBPACK_IMPORTED_MODULE_21__.Tree, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, primeng_calendar__WEBPACK_IMPORTED_MODULE_24__.Calendar, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.RadioControlValueAccessor, _receptionist_search_receptionist_search_component__WEBPACK_IMPORTED_MODULE_11__.ReceptionistSearchComponent, _shared_print_page_print_page_component__WEBPACK_IMPORTED_MODULE_12__.PrintComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__.LoadingComponent, _receptionist_division_calendar_receptionist_division_calendar_component__WEBPACK_IMPORTED_MODULE_14__.ReceptionistDivisionCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.CheckboxControlValueAccessor], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _shared_pipes_translateObjects_pipe__WEBPACK_IMPORTED_MODULE_15__.TranslateObjectsPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe], encapsulation: 2 });
class CalendarEvent {
}


/***/ }),

/***/ 5494:
/*!**********************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-basic/receptionist-basic.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistBasicComponent": () => (/* binding */ ReceptionistBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/shared.service */ 71901);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 7870);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/image-uploader/image-uploader.component */ 63914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 79686);












const _c0 = ["fileInput"];
function ReceptionistBasicComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ReceptionistBasicComponent_form_40_option_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ele_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r10.name);
} }
function ReceptionistBasicComponent_form_40_option_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ele_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ele_r11.name);
} }
function ReceptionistBasicComponent_form_40_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ReceptionistBasicComponent_form_40_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReceptionistBasicComponent_form_40_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ReceptionistBasicComponent_form_40_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.model.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ReceptionistBasicComponent_form_40_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.model.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\n                        Required\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ReceptionistBasicComponent_form_40_Template_input_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.model.establishmentYear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "select", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ReceptionistBasicComponent_form_40_Template_select_ngModelChange_99_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.model.classificationId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, ReceptionistBasicComponent_form_40_option_102_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](111, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "select", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ReceptionistBasicComponent_form_40_Template_select_ngModelChange_115_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.model.classificationId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](118, ReceptionistBasicComponent_form_40_option_118_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](127, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "image-uploader", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ReceptionistBasicComponent_form_40_Template_image_uploader_change_131_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.imageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](141, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReceptionistBasicComponent_form_40_Template_button_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](145, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !_r2.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 27, "Save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 29, "Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 31, "IdNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.model.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\n                        ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 33, "RequiredField"), "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 35, "PassportNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.model.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 37, "BirthDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.model.establishmentYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](67, 39, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](79, 41, "Male"), "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](85, 43, "Female"), "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](95, 45, "Speciality"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.model.classificationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.classifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](111, 47, "Qualification"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.model.classificationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.classifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](127, 49, "Photo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("imageId", ctx_r1.model.imageId)("imageData", ctx_r1.model.imageData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !_r2.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](141, 51, "Save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](145, 53, "Cancel"), " ");
} }
class ReceptionistBasicComponent {
    constructor(organizationService, sharedService, toastr, _route, storage) {
        this.organizationService = organizationService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this._route = _route;
        this.storage = storage;
        this.selectBasicTab = true;
        this.active = true;
        this.model = {};
        this.classifications = [];
        this.showProgress = false;
    }
    ngOnInit() {
        /*let vm = this;
       
        let id = this._route.snapshot.params['id'];
        this.model.id = `${id}`;
        vm.showProgress = true;

        //get all calssifications from DB
        this.organizationService.getOrganizationBasicWrapper()
            .subscribe(
            function (response:any) {
                vm.classifications = response.classifications;
            },
            function (error:any) {
                vm.toastr.error('Failed to Load Data - ' + error, '');
            },
            function () {
                vm.showProgress = false;
            });

        // get organization in case of update
        if (this.model.id.toString().toLowerCase() != 'new') {
            vm.showProgress = true;
            this.organizationService.getOrganizationsById(this.model.id)
                .subscribe(
                function (response:any) {
                    vm.model = response;
                },
                function (error:any) {
                    vm.toastr.error('Failed to get organization with ID:' + this.model.id + " - " + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }
        */
    }
    onSubmit() {
        /*let vm = this;
        vm.showProgress = true;

        if (!this.model.hasOwnProperty('id') || this.model.id.toString().toLowerCase() == 'new') {
            // Add new
            this.organizationService.saveOrganization(this.model)
                //.subscribe(
                //organization => this.model = organization,
                //error => this.errorMessage = <any>error);
                .subscribe(
                function (response:any) {
                    vm.toastr.success('Saved Successfully', '');
                    vm.model = response;

                    // store selected organization ID
                    vm.storage.store("OrganizationID", vm.model.id);
                    if (response.imageData != null) {
                        vm.model.imageData = response.imageData;
                        vm.model.imageId = response.imageId;
                    }
                },
                function (error:any) {
                    //console.log("Error happened" + error)
                    vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                }
                );
        }
        else {
            // update
            this.organizationService.updateOrganization(this.model)
                .subscribe(
                function (response:any) {
                    vm.toastr.success('Saved Successfully', '');
                    vm.model = response;

                    if (response.imageData != null) {
                        vm.model.imageData = response.imageData;
                        vm.model.imageId = response.imageId;
                    }
                },
                function (error:any) {
                    //console.log("Error happened" + error)
                    vm.toastr.error('حدث خطأ أثناء الحفظ - ' + error, '');
                    vm.showProgress = false;
                },
                function () {
                    vm.showProgress = false;
                });
        }*/
    }
    clear() {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }
    deleteOrganization(id) {
        /*let vm = this;
        if (id == undefined || isNaN(id)) {
            vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
            return;
        }

        vm.showProgress = true;
        this.organizationService.deleteOrganization(id)
            .subscribe(
            function (response:any) {
                vm.toastr.success('Deleted successfully', '');
                vm.clear();

                // store selected organization ID
                vm.storage.store("OrganizationID", 'new');
            },
            function (error:any) {
                //console.log("Error happened" + error)
                vm.toastr.error('Failed to Delete - ' + error, '');
            },
            function () {
                vm.showProgress = false;
            });*/
    }
    imageChanged(response) {
        let attchmentInfo = {};
        if (response != null) {
            if (response.originalName == undefined) {
                this.model.attachmentInfo = null;
                return;
            }
            this.model.attachmentInfo = attchmentInfo;
            this.model.attachmentInfo.originalName = response.originalName;
            this.model.attachmentInfo.keyName = response.keyName;
            this.model.attachmentInfo.fullPath = response.fullPath;
            this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.model.attachmentInfo = null;
        }
    }
}
ReceptionistBasicComponent.ɵfac = function ReceptionistBasicComponent_Factory(t) { return new (t || ReceptionistBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService)); };
ReceptionistBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReceptionistBasicComponent, selectors: [["receptionist-basic"]], viewQuery: function ReceptionistBasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 44, vars: 9, consts: [[4, "ngIf"], [1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "page-breadcrumb"], [1, "col-md-7"], [1, "page-breadcrumb-wrap"], [1, "page-breadcrumb-info"], [1, "list-page-breadcrumb"], [1, "active-page"], [1, "col-md-5"], ["novalidate", "", "class", "form-horizontal", "name", "organizationForm", 3, "ngSubmit", 4, "ngIf"], ["novalidate", "", "name", "organizationForm", 1, "form-horizontal", 3, "ngSubmit"], ["organizationForm", "ngForm"], [1, "form-group"], [1, "col-md-4", "col-md-offset-2"], [1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "txtName", 1, "control-label", "col-md-2"], [1, "col-md-4"], ["id", "txtName", "name", "txtName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [1, "col-md-2"], ["type", "date", "min", "1900", "id", "txtEstablishmentYear", "name", "txtEstablishmentYear", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtEstablishmentYear", "ngModel"], ["for", "rbGender", 1, "control-label", "col-md-2"], ["type", "radio", "name", "gender"], ["for", "ddlClassification", 1, "control-label", "col-md-2"], ["id", "ddlClassification", "name", "ddlClassification", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlClassification", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "fileImage", 1, "control-label", "col-md-2"], [3, "imageId", "imageData", "change"], [3, "value"]], template: function ReceptionistBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ReceptionistBasicComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "shared-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\n                                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ReceptionistBasicComponent_form_40_Template, 149, 55, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("activeTabIndex", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 5, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 7, "PersonalData"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_3__.SharedTabsComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _shared_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_5__.ImageUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 8983:
/*!**********************************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-division-calendar/receptionist-division-calendar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistDivisionCalendarComponent": () => (/* binding */ ReceptionistDivisionCalendarComponent)
/* harmony export */ });
/* harmony import */ var _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/receptionist-appointment.manager */ 6134);
/* harmony import */ var _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/utility.class */ 61692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 7870);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 79686);









function ReceptionistDivisionCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ReceptionistDivisionCalendarComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctr_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n                    ", ctx_r1.lang == "ar" ? doctr_r3.name : doctr_r3.nameTranslation, "\n                    ");
} }
function ReceptionistDivisionCalendarComponent_tr_25_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctr_r6 = ctx.$implicit;
    const slot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r5.getClassName(doctr_r6, slot_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n                        ", ctx_r5.getAppointmentTitle(doctr_r6, slot_r4.name), "\n                    ");
} }
function ReceptionistDivisionCalendarComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ReceptionistDivisionCalendarComponent_tr_25_td_5_Template, 2, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](slot_r4.amPmName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.doctorsList);
} }
class ReceptionistDivisionCalendarComponent {
    constructor(receptionistService, toastr, localStorage) {
        this.receptionistService = receptionistService;
        this.toastr = toastr;
        this.localStorage = localStorage;
        this.utilityClass = new _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_1__.UtilityClass();
        this.receptionistAppointmentManager = new _shared_receptionist_appointment_manager__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAppointmentManager([], []);
        this.dayTimeSlotsList = [];
        this.showProgress = false;
        this.doctorsList = [];
        this.lang = '';
    }
    ngOnInit() {
        this.lang = this.localStorage.retrieve('SelectedLanguage');
    }
    ngOnChanges() {
        this.loadDoctorsWithAppointments();
        this.dayTimeSlotsList = this.receptionistAppointmentManager.getFullDayTimeSlots(null);
        this.today = this.utilityClass.getISODateFormat(new Date());
    }
    loadDoctorsWithAppointments() {
        this.showProgress = true;
        let thisComp = this;
        this.receptionistService.getDivisionDoctorsWithAppointments(this.divisonId)
            .subscribe(function (response) {
            thisComp.doctorsList = response;
        }, function (error) {
            thisComp.toastr.error(error, '');
            thisComp.showProgress = false;
        }, function () {
            thisComp.showProgress = false;
        });
    }
    getAppointmentTitle(doctor, slotName) {
        let appointmentTitle = '';
        if (doctor.appointments != undefined && doctor.appointments != null && doctor.appointments.length > 0) {
            let appointment = doctor.appointments.find((app) => app.time == slotName && app.cancelled != true);
            if (appointment != undefined)
                appointmentTitle = appointment.patientName;
        }
        return appointmentTitle;
    }
    getClassName(doctor, slotName) {
        if (doctor.appointments != undefined) {
            let appointment = doctor.appointments.find((app) => app.time == slotName);
            if (appointment != undefined)
                return 'dividion-calendar-event'; //Return the event style if there is an appointment
        }
        return '';
    }
}
ReceptionistDivisionCalendarComponent.ɵfac = function ReceptionistDivisionCalendarComponent_Factory(t) { return new (t || ReceptionistDivisionCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_2__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService)); };
ReceptionistDivisionCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReceptionistDivisionCalendarComponent, selectors: [["receptionist-division-calendar"]], inputs: { divisonId: "divisonId", divisonName: "divisonName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 11, consts: [[4, "ngIf"], [1, "padding5"], [1, "text-center"], [1, "div-dividion-calendar"], [1, "table", "table-responsive", "table-hover", "table-bordered"], [1, "col-md-1"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"]], template: function ReceptionistDivisionCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ReceptionistDivisionCalendarComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ReceptionistDivisionCalendarComponent_th_19_Template, 2, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ReceptionistDivisionCalendarComponent_tr_25_Template, 7, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"]("\n        ", ctx.divisonName, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, "Appointments"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 9, "Today"), ": ", ctx.today, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.doctorsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dayTimeSlotsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 58381:
/*!****************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-patients/receptionist-patients.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistPatientsComponent": () => (/* binding */ ReceptionistPatientsComponent)
/* harmony export */ });
/* harmony import */ var _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/user-permissions.class */ 15594);
/* harmony import */ var _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/permission-key.enum */ 27982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _security_shared_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../security/shared/account.service */ 73169);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _patients_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../patients/patient-search/patient-search.component */ 57642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 79686);








class ReceptionistPatientsComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.showActive = true;
        this.showEdit = true;
        this.showSelect = false;
        this.showClose = false;
        this.userPermisions = new _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_0__.UserPermissions();
        this.key = new _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_1__.PermissionKeyEnum();
        this.enableNewPatientBtn = false;
        this.enableEditPatientBtn = false;
        this.enableActivatePatientBtn = false;
    }
    ngOnInit() {
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    handleUserInterfaceViews(user) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                if (item.permission.key == this.key.PatientRegistration && (item.add == true || item.fullControl == true))
                    this.enableNewPatientBtn = true;
            }
        }
    }
}
ReceptionistPatientsComponent.ɵfac = function ReceptionistPatientsComponent_Factory(t) { return new (t || ReceptionistPatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_security_shared_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService)); };
ReceptionistPatientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReceptionistPatientsComponent, selectors: [["receptionist-patients"]], decls: 45, vars: 18, consts: [[1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "page-breadcrumb"], [1, "row", 2, "padding", "13px"], [1, "NBbreadcrumb"], [1, "col-md-4"], [1, "h3Deco"], [1, "col-md-8", "align-reverse", "padding5"], ["type", "button", "routerLink", "/patient/file/new", 1, "btn", "btn-primary", 3, "disabled"], [1, "padding5"], [3, "showActive", "showEdit", "showSelect", "showClose"]], template: function ReceptionistPatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "shared-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "patient-search", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\n\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeTabIndex", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 10, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u00A0/\n                        ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 12, "Patients"), "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n                   ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 14, "PatientSearch"), "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("disabled", ctx.enableNewPatientBtn ? "" : "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 16, "CreatePatientFile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showActive", ctx.showActive)("showEdit", ctx.showEdit)("showSelect", ctx.showSelect)("showClose", ctx.showClose);
    } }, directives: [_shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_3__.SharedTabsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _patients_patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__.PatienSearchComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 36891:
/*!**************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-reports/receptionist-reports.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistReportsComponent": () => (/* binding */ ReceptionistReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 79686);





class ReceptionistReportsComponent {
    constructor(_route, storage) {
        this._route = _route;
        this.storage = storage;
        //selectBasicTab: boolean = true;
        //filterString!:string;
        //active = true;
        //model: any = {};
        //classifications = [];
        //showProgress = false;
        //companyId = '';
        this.selectTab = true;
        this.clinicId = '';
    }
    ngOnInit() {
        //let id = this._route.snapshot.params['id'];
        //this.companyId = `${id}`;
        this.clinicId = this.storage.retrieve("ClinicID");
    }
    openReport(reportName) {
        let lang = this.storage.retrieve("SelectedLanguage");
        if (lang == null || lang == undefined)
            lang = 'ar';
        let url = 'reports/' + reportName + "/" + "ReportViewer.aspx?lang=" + lang + "&id=" + this.clinicId;
        window.open(url);
    }
}
ReceptionistReportsComponent.ɵfac = function ReceptionistReportsComponent_Factory(t) { return new (t || ReceptionistReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
ReceptionistReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReceptionistReportsComponent, selectors: [["receptionist-reports"]], decls: 47, vars: 13, consts: [[1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "page-breadcrumb"], [1, "NBbreadcrumb"], [1, "col-md-6"], [1, "applyReportStyle", "h4Deco"], [1, "pointer", 3, "click"]], template: function ReceptionistReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "shared-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceptionistReportsComponent_Template_a_click_27_listener() { return ctx.openReport("PatientsVisitsInPeriodReport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceptionistReportsComponent_Template_a_click_39_listener() { return ctx.openReport("UpcomingAppointmentsReport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeTabIndex", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0/\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 7, "Reports"), "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 9, "PatientsVisitsInPeriodReport"), "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 11, "UpcomingAppointmentsReport"), "\n                ");
    } }, directives: [_shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_1__.SharedTabsComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 35018:
/*!****************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-requests/receptionist-requests.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistRequestsComponent": () => (/* binding */ ReceptionistRequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/user-permissions.class */ 15594);
/* harmony import */ var _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared/permission-key.enum */ 27982);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared/shared.service */ 71901);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _security_shared_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../security/shared/account.service */ 73169);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared-tabs/shared-tabs.component */ 8461);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 3275);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 62634);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 38184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);

















const _c0 = ["fileInput"];
const _c1 = ["dt"];
function ReceptionistRequestsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n                           \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "p-sortIcon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "\n\n                ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 12, "PatientName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 14, "BirthDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 16, "Mobile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 18, "Gender"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 20, "AppointmentDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 22, "DoctorName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](43, 24, "AppointmentTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 26, "Type"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 28, "Class"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 30, "Status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](68, 32, "Confirm"), "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](72, 34, "Cancel"), "\n                        ");
} }
function ReceptionistRequestsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReceptionistRequestsComponent_ng_template_36_Template_a_click_62_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.confirmPatientRequest(item_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "a", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReceptionistRequestsComponent_ng_template_36_Template_a_click_70_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.selectRequestToBeCanceled(item_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "\n                ");
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\n                            ", item_r6.name, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.birthDateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.dateTimeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.doctorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.visitTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.appointmentClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r2.enableConfirmLink ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r2.enableCancelLink ? true : null);
} }
function ReceptionistRequestsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "No data found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n                ");
} }
function ReceptionistRequestsComponent_form_64_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "textarea", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReceptionistRequestsComponent_form_64_Template_textarea_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.model.cancelationReason = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReceptionistRequestsComponent_form_64_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.cancelPatientRequest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReceptionistRequestsComponent_form_64_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.cancelServiceGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 5, "CancelationReason"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.model.cancelationReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r11.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 7, "Save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 9, "Cancel"));
} }
const _c2 = function () { return [10, 20, 30, 40, 50, 100]; };
const _c3 = function () { return ["name", "birthDateString", "mobileNumber", "gender", "dateTimeString", "doctorName", "time", "visitTypeName", "appointmentClassName", "status"]; };
class ReceptionistRequestsComponent {
    constructor(receptionistService, sharedService, toastr, _route, storage, accountService, translate) {
        this.receptionistService = receptionistService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this._route = _route;
        this.storage = storage;
        this.accountService = accountService;
        this.translate = translate;
        this.selectBasicTab = true;
        this.active = true;
        this.model = {};
        this.isConfirmed = false;
        this.isCanceled = false;
        this.isPending = true;
        this.onBookAppointment = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.clinicId = "0";
        this.lstToTranslated = [];
        this.showProgress = false;
        this.userPermisions = new _classes_user_permissions_class__WEBPACK_IMPORTED_MODULE_0__.UserPermissions();
        this.key = new _shared_shared_permission_key_enum__WEBPACK_IMPORTED_MODULE_1__.PermissionKeyEnum();
        this.enableCancelLink = false;
        this.enableConfirmLink = false;
        //this.lstToTranslated = ['visitTypeName', 'visitNameTranslation', 'appointmentClassName', 'classNameTranslation', 'patientName', 'patientNameTranslation', 'doctorName', 'doctorNameTranslation'];
    }
    ngOnInit() {
        let vm = this;
        //this.lstToTranslated = ['doctorName', 'doctorNameTranslation'];
        this.clinicId = this.storage.retrieve("ClinicID");
        vm.showProgress = true;
        vm.loadPatientRequests();
        if (this.accountService.userPermision._isScalar != undefined)
            this.accountService.userPermision.subscribe((item) => this.handleUserInterfaceViews(item));
        else
            this.handleUserInterfaceViews(this.accountService.userPermision);
    }
    loadPatientRequests() {
        let vm = this;
        this.receptionistService.getAllPatientRequests(vm.clinicId).subscribe(function (response) {
            vm.patientRequestList = response;
        }, function (error) {
            vm.toastr.error(error, '');
        }, function () {
            vm.showProgress = false;
        });
    }
    confirmPatientRequest(requestId) {
        let vm = this;
        this.receptionistService.confirmPatientRequest(requestId).subscribe(function (response) {
            let msg = vm.translate.instant("SavedSuccessfully");
            vm.toastr.success(msg, '');
            if (response != undefined)
                vm.updatePatientRequest(response);
        }, function (error) {
            vm.toastr.error(error, '');
        }, function () {
            vm.showProgress = false;
        });
    }
    cancelServiceGroup() {
    }
    updatePatientRequest(res) {
        var request = this.patientRequestList.find(r => r.id == res.id);
        request.status = res.status;
        if (request.status == "Confimed") {
            this.isConfirmed = true;
            this.isCanceled = false;
            this.isPending = false;
        }
        else if (request.status == "Cancelled") {
            this.isConfirmed = false;
            this.isCanceled = true;
            this.isPending = false;
        }
    }
    selectRequestToBeCanceled(requestId) {
        this.selectedRequestToBeCanceled = requestId;
    }
    cancelPatientRequest() {
        let vm = this;
        //vm.model.id = vm.selectedRequestToBeCanceled;
        var requestToCanceled = vm.patientRequestList.find(r => r.id == vm.selectedRequestToBeCanceled);
        if (requestToCanceled != undefined) {
            requestToCanceled.cancelationReason = vm.model.cancelationReason;
        }
        this.receptionistService.cancelPatientRequest(requestToCanceled).subscribe(function (response) {
            if (response != undefined)
                vm.updatePatientRequest(response);
        }, function (error) {
            vm.toastr.error(error, '');
        }, function () {
            vm.showProgress = false;
        });
    }
    //deleteOrganization(id): void {
    //    /*let vm = this;
    //    if (id == undefined || isNaN(id)) {
    //        vm.toastr.warning('لايوجد جمعية مختارة لمسحها', '');
    //        return;
    //    }
    //    vm.showProgress = true;
    //    this.organizationService.deleteOrganization(id)
    //        .subscribe(
    //        function (response:any) {
    //            vm.toastr.success('Deleted successfully', '');
    //            vm.clear();
    //            // store selected organization ID
    //            vm.storage.store("OrganizationID", 'new');
    //        },
    //        function (error:any) { 
    //            //console.log("Error happened" + error)
    //            vm.toastr.error('Failed to Delete - ' + error, '');
    //        },
    //        function () {
    //            vm.showProgress = false;
    //        });*/
    //}
    bookAppoint() {
        this.onBookAppointment.emit();
    }
    handleUserInterfaceViews(user) {
        if (user.permissions != undefined) {
            for (let item of user.permissions) {
                //i want ask cancel request under PatientRegistration or AppointmentSchedule
                if (item.permission.key == this.key.PatientRegistration && (item.edit == true || item.fullControl == true)) //PatientRegistration
                    this.enableCancelLink = true;
                else if (item.permission.key == this.key.AppointmentSchedule && (item.add == true || item.fullControl == true)) //AppointmentSchedule
                    this.enableConfirmLink = true;
            }
        }
    }
    close() {
    }
}
ReceptionistRequestsComponent.ɵfac = function ReceptionistRequestsComponent_Factory(t) { return new (t || ReceptionistRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_2__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_security_shared_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService)); };
ReceptionistRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ReceptionistRequestsComponent, selectors: [["receptionist-requests"]], viewQuery: function ReceptionistRequestsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, outputs: { onBookAppointment: "onBookAppointment" }, decls: 68, vars: 24, consts: [[1, "row"], [3, "activeTabIndex"], [1, "row", "nopadding"], [1, "page-breadcrumb"], [1, "NBbreadcrumb"], [1, "row", "well", 2, "background-color", "#f6f7f9 !important"], [1, "inner-addon", "left-addon"], [1, "glyphicon", "glyphicon-search"], ["pInputText", "", "type", "text", 3, "placeholder", "input"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["id", "ServicesGroupPopup", "role", "dialog", 1, "modal", "fade"], ["ServicesGroupPopup", ""], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-title"], ["class", "form-horizontal", "name", "servicegroupForm", 4, "ngIf"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "birthDateString"], ["field", "birthDateString"], ["pSortableColumn", "mobileNumber"], ["field", "mobileNumber"], ["pSortableColumn", "gender"], ["field", "gender"], ["pSortableColumn", "dateTimeString"], ["field", "dateTimeString"], ["pSortableColumn", "doctorName"], ["field", "doctorName"], ["pSortableColumn", "time"], ["field", "time"], ["pSortableColumn", "visitTypeName"], ["field", "visitTypeName"], ["pSortableColumn", "appointmentClassName"], ["field", "appointmentClassName"], ["pSortableColumn", "status"], ["field", "status"], [1, "p-selectable-row"], [1, "pointer", 3, "click"], ["src", "assets/images/ok-24.jpg"], [2, "text-align", "center"], ["data-toggle", "modal", "data-target", "#ServicesGroupPopup", 1, "pointer", 3, "click"], ["AddServiceGroup", ""], ["src", "assets/images/cancel-24.png"], ["colspan", "8"], ["name", "servicegroupForm", 1, "form-horizontal"], ["servicegroupForm", "ngForm"], [1, "modal-body"], [1, "form-group"], ["for", "txtGroupRemark", 1, "control-label", "col-md-3"], [1, "col-md-6"], ["id", "txtGroupRemark", "name", "txtGroupRemark", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["txtGroupRemark", "ngModel"], [1, "modal-footer"], [1, "text-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function ReceptionistRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "shared-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ReceptionistRequestsComponent_Template_input_input_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32); return _r0.filterGlobal($event.target.value, "contains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ReceptionistRequestsComponent_ng_template_34_Template, 75, 36, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ReceptionistRequestsComponent_ng_template_36_Template, 78, 14, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ReceptionistRequestsComponent_ng_template_38_Template, 7, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReceptionistRequestsComponent_Template_button_click_56_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, ReceptionistRequestsComponent_form_64_Template, 33, 11, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeTabIndex", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 14, "ReceptionistProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u00A0/\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 16, "GuestPatientRequests"), "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 18, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.patientRequestList)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c2))("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 20, "CancelPatientRequest"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_shared_shared_tabs_shared_tabs_component__WEBPACK_IMPORTED_MODULE_6__.SharedTabsComponent, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 31045:
/*!************************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-search/receptionist-search.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistSearchComponent": () => (/* binding */ ReceptionistSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared/utility.class */ 61692);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/receptionist.service */ 86253);
/* harmony import */ var _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared/shared.service */ 71901);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_print_page_print_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/print-page/print-page.component */ 79118);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 3275);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 62634);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 38184);
/* harmony import */ var _receptionist_appointment_details_receptionist_appointment_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../receptionist-appointment-details/receptionist-appointment-details.component */ 80962);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 7870);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 20226);
/* harmony import */ var _shared_pipes_translateObjects_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/translateObjects.pipe */ 23382);



















const _c0 = ["fileInput"];
const _c1 = ["dt"];
function ReceptionistSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ReceptionistSearchComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r15.name);
} }
function ReceptionistSearchComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_86_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.appointmentCriteria.timeDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "NoOfDays"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.appointmentCriteria.timeDuration);
} }
function ReceptionistSearchComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_88_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.appointmentCriteria.timeDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "HowManyWeeks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r5.appointmentCriteria.timeDuration);
} }
function ReceptionistSearchComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_90_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.appointmentCriteria.timeDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "HowManyMonths"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.appointmentCriteria.timeDuration);
} }
function ReceptionistSearchComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_92_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.appointmentCriteria.timeDuration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "HowManyYears"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r7.appointmentCriteria.timeDuration);
} }
const _c2 = function () { return { standalone: true }; };
function ReceptionistSearchComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p-calendar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_94_Template_p_calendar_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r24.periodStartDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p-calendar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_94_Template_p_calendar_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26.periodEndDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 12, "From"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r8.periodStartDate)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 14, "To"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r8.periodEndDate)("monthNavigator", true)("yearNavigator", true)("showIcon", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c2));
} }
function ReceptionistSearchComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_div_96_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r27.appointmentCriteria.timeStatus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, "PastOrFuture"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r9.appointmentCriteria.timeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 6, "Past"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 8, "Future"));
} }
function ReceptionistSearchComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p-sortIcon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "p-sortIcon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p-sortIcon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "p-sortIcon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "p-sortIcon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "p-sortIcon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "p-sortIcon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "p-sortIcon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "p-sortIcon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "p-sortIcon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "p-sortIcon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "\n\n            ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 12, "ArabicName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 14, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 16, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 18, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 20, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 22, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 24, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 26, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 28, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 30, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 32, "EnglishName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](79, 34, "Edit"), " ");
} }
function ReceptionistSearchComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "a", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReceptionistSearchComponent_ng_template_133_Template_a_click_68_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32); const item_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r31.GetId(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "\n            ");
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n                        ", item_r29.dateTime, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.appointmentClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.patientClinicMRN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.doctorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.patientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.policyEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.lastModifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r29.lastModificationDateString);
} }
function ReceptionistSearchComponent_ng_template_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No data found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\n            ");
} }
function ReceptionistSearchComponent_tr_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.dateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.appointmentClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.patientClinicMRN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r14.lang == "ar" ? item_r33.doctorName : item_r33.doctorNameTranslation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.patientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.policyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.policyEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.lastModifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.lastModificationDateString);
} }
const _c3 = function () { return [10, 20, 30, 40, 50, 100]; };
const _c4 = function () { return ["dateTime", "appointmentClassName", "arrivalTime", "patientClinicMRN", "doctorName", "patientName", "mobile", "policyName", "policyEndDate", "lastModifier", "lastModificationDateString"]; };
class ReceptionistSearchComponent {
    constructor(receptionistService, sharedService, toastr, _route, storage, translate) {
        this.receptionistService = receptionistService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this._route = _route;
        this.storage = storage;
        this.translate = translate;
        this.utilityClass = new _shared_shared_utility_class__WEBPACK_IMPORTED_MODULE_0__.UtilityClass();
        this.periodStartDate = new Date();
        this.periodEndDate = new Date();
        this.selectBasicTab = true;
        this.searchCriteria = {};
        this.appointmentDetails = {};
        this.appointmentCriteria = {};
        this.patientId = '';
        //clinicMrn = '';
        this.lstToTranslated = [];
        this.showActive = false;
        this.showEdit = false;
        this.showSelect = true;
        this.showClose = true;
        this.matchedPatients = [];
        this.matchedAppontments = [];
        this.active = true;
        this.model = {};
        this.onBookAppointment = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.onAppointmentSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.classifications = [];
        this.showProgress = false;
        this.toPrintDiv = "matchedAppoitmentsToPrintDiv";
        this.doctorsList = [];
        this.lang = 'en';
        this.display = false;
        this.todayStatus = false;
        this.weekStatus = false;
        this.monthStatus = false;
        this.yearStatus = false;
        this.periodOfTime = false;
        this.displayPatientTable = false;
        this.pastOrFuture = false;
    }
    ngOnInit() {
        this.lstToTranslated = ['visitTypeName', 'visitNameTranslation', 'appointmentClassName', 'classNameTranslation', 'patientName', 'patientNameTranslation', 'doctorName', 'doctorNameTranslation'];
        this.lang = this.storage.retrieve('SelectedLanguage');
        this.getAllDoctorsInClinic();
    }
    onSubmit() {
    }
    selectDate(oppintmentDate) {
        if (oppintmentDate == "Days") {
            this.todayStatus = true;
            this.monthStatus = false;
            this.weekStatus = false;
            this.yearStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = true;
        }
        else if (oppintmentDate == "Week") {
            this.weekStatus = true;
            this.monthStatus = false;
            this.periodOfTime = false;
            this.yearStatus = false;
            this.todayStatus = false;
            this.pastOrFuture = true;
        }
        else if (oppintmentDate == "Month") {
            this.monthStatus = true;
            this.periodOfTime = false;
            this.yearStatus = false;
            this.todayStatus = false;
            this.weekStatus = false;
            this.pastOrFuture = true;
        }
        else if (oppintmentDate == "Year") {
            this.yearStatus = true;
            this.todayStatus = false;
            this.weekStatus = false;
            this.monthStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = true;
        }
        else if (oppintmentDate == "PeriodOfTime") {
            this.periodOfTime = true;
            this.yearStatus = false;
            this.todayStatus = false;
            this.weekStatus = false;
            this.monthStatus = false;
            this.pastOrFuture = false;
        }
        else {
            this.todayStatus = false;
            this.monthStatus = false;
            this.weekStatus = false;
            this.yearStatus = false;
            this.periodOfTime = false;
            this.pastOrFuture = false;
            //this.appointmentCriteria.receptionistMethodsSearch = "";
        }
    }
    getAllDoctorsInClinic() {
        let thisComponent = this;
        let clinicId = this.storage.retrieve('ClinicId');
        thisComponent.showProgress = true;
        this.receptionistService.getAllDoctorsInClinic(clinicId)
            .subscribe(function (response) {
            thisComponent.doctorsList = response;
        }, function (error) {
            thisComponent.toastr.error(error);
            thisComponent.showProgress = false;
        }, function () {
            thisComponent.showProgress = false;
        });
    }
    getAllPatients() {
        let thisComponent = this;
        thisComponent.receptionistService.SearchForPatient(thisComponent.searchCriteria)
            .subscribe(function (response) {
            thisComponent.matchedPatients = response;
            //thisComponent.display = false;
            //thisComponent.displayPatientTable = true;
        }, function (error) {
            thisComponent.toastr.error(error, '');
            thisComponent.showProgress = false;
        }, function () {
            thisComponent.showProgress = false;
        });
    }
    GetId(appointmentModel) {
        this.appointmentId = appointmentModel.id;
        this.onAppointmentSelected.emit(appointmentModel);
        //this.getAppointmentById();
    }
    GetAllAppointments() {
        let thisComponent = this;
        //Update the dates
        if (this.periodOfTime) {
            this.appointmentCriteria.searchStartDate = this.utilityClass.getUtcDate(this.periodStartDate);
            this.appointmentCriteria.searchEndDate = this.utilityClass.getUtcDate(this.periodEndDate);
            if (!(this.appointmentCriteria.searchEndDate >= this.appointmentCriteria.searchStartDate)) {
                let msg = thisComponent.translate.instant('ScheduleStartDateValidation');
                thisComponent.toastr.error(msg, '');
                return;
            }
        }
        thisComponent.showProgress = true;
        thisComponent.receptionistService.searchForAppointments(thisComponent.appointmentCriteria)
            .subscribe(function (response) {
            thisComponent.matchedAppontments = response;
        }, function (error) {
            thisComponent.toastr.error(error, '');
            thisComponent.showProgress = false;
        }, function () {
            thisComponent.showProgress = false;
        });
    }
    showDialog() {
        this.display = true;
    }
    getAppointmentById() {
        let thisComponent = this;
        this.receptionistService.getAppointmentById(this.appointmentId)
            .subscribe(function (response) {
            thisComponent.appointmentDetails = response;
        }, function (error) {
            thisComponent.toastr.error(error, '');
        }, function () {
            thisComponent.showProgress = false;
        });
    }
    clear() {
        this.model = {};
        this.active = false;
        // store selected Organization ID
        this.storage.store("OrganizationID", 'new');
        setTimeout(() => this.active = true, 0);
    }
    imageChanged(response) {
        let attchmentInfo = {};
        if (response != null) {
            if (response.originalName == undefined) {
                this.model.attachmentInfo = null;
                return;
            }
            this.model.attachmentInfo = attchmentInfo;
            this.model.attachmentInfo.originalName = response.originalName;
            this.model.attachmentInfo.keyName = response.keyName;
            this.model.attachmentInfo.fullPath = response.fullPath;
            this.model.attachmentInfo.fileType = response.fileType;
        }
        else {
            this.model.attachmentInfo = null;
        }
    }
    managePatientSelection(selectedPatientMrn) {
        this.appointmentCriteria.patientClinicMRN = selectedPatientMrn;
        this.display = false;
        this.GetAllAppointments();
    }
    bookAppoint() {
        this.onBookAppointment.emit();
    }
}
ReceptionistSearchComponent.ɵfac = function ReceptionistSearchComponent_Factory(t) { return new (t || ReceptionistSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_1__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService)); };
ReceptionistSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ReceptionistSearchComponent, selectors: [["receptionist-search"]], viewQuery: function ReceptionistSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, outputs: { onBookAppointment: "onBookAppointment", onAppointmentSelected: "onAppointmentSelected" }, decls: 237, vars: 111, consts: [[4, "ngIf"], [1, "padding5"], [1, "row", "form-horizontal", "well"], [1, "form-group"], ["for", "txtMRNRes", 1, "col-md-2", "control-label"], [1, "col-md-2"], ["type", "text", "id", "txtMRNRes", "name", "txtMRNRes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "col-md-2", 3, "click"], ["for", "txtName", 1, "col-md-2", "control-label"], [1, "col-md-3"], ["name", "ddlsDoctorsList", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ddlsDoctorsList", ""], ["value", "0", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "oppintmentDate", "name", "oppintmentDate", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["oppintmentDate", ""], ["value", "Today"], ["value", "Days"], ["value", "Week"], ["value", "Month"], ["value", "Year"], ["value", "PeriodOfTime"], ["class", "form-group", 4, "ngIf"], [1, "col-md-4", "col-md-offset-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row"], [3, "section"], [1, "ui-widget-header", "searchWidget"], [1, "fa", "fa-search", "searchIcon"], ["pInputText", "", "type", "text", 3, "placeholder", "input"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["id", "appointmentDetailsModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "width75percent"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [3, "appointmentDetails", "AppontmentId"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["id", "matchedAppoitmentsToPrintDiv", 1, "hidden"], [1, "table", "table-responsive", "table-hover"], [1, "alert", "alert-info"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "number", "min", "1", "title", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dateFormat", "dd/mm/yy", "yearRange", "2000:2050", 3, "ngModel", "monthNavigator", "yearNavigator", "showIcon", "ngModelOptions", "ngModelChange"], ["for", "txtName", 1, "col-md-3", "control-label"], ["for", "ddlUnitType", 1, "col-md-2", "control-label"], ["required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Past"], ["value", "Future"], ["pSortableColumn", "dateTime"], ["field", "dateTime"], ["pSortableColumn", "appointmentClassName"], ["field", "appointmentClassName"], ["pSortableColumn", "arrivalTime"], ["field", "arrivalTime"], ["pSortableColumn", "patientClinicMRN"], ["field", "patientClinicMRN"], ["pSortableColumn", "doctorName"], ["field", "doctorName"], ["pSortableColumn", "patientName"], ["field", "patientName"], ["pSortableColumn", "mobile"], ["field", "mobile"], ["pSortableColumn", "policyName"], ["field", "policyName"], ["pSortableColumn", "policyEndDate"], ["field", "policyEndDate"], ["pSortableColumn", "lastModifier"], ["field", "lastModifier"], ["pSortableColumn", "lastModificationDateString"], ["field", "lastModificationDateString"], ["styleClass", "text-center width70"], [1, "p-selectable-row"], [1, "pointer", 3, "click"], ["val", ""], ["src", "assets/images/details-24.jpg"], ["colspan", "8"]], template: function ReceptionistSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ReceptionistSearchComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_Template_input_ngModelChange_16_listener($event) { return ctx.appointmentCriteria.patientClinicMRN = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReceptionistSearchComponent_Template_button_click_19_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "\n\n\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_Template_select_ngModelChange_31_listener($event) { return ctx.appointmentCriteria.doctorId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, ReceptionistSearchComponent_option_38_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translateObjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReceptionistSearchComponent_Template_select_ngModelChange_52_listener($event) { return ctx.appointmentCriteria.receptionistMethodsSearch = $event; })("change", function ReceptionistSearchComponent_Template_select_change_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](53); return ctx.selectDate(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, ReceptionistSearchComponent_div_86_Template, 11, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, ReceptionistSearchComponent_div_88_Template, 11, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, ReceptionistSearchComponent_div_90_Template, 11, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](92, ReceptionistSearchComponent_div_92_Template, 11, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, ReceptionistSearchComponent_div_94_Template, 22, 18, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, ReceptionistSearchComponent_div_96_Template, 20, 10, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReceptionistSearchComponent_Template_button_click_102_listener() { return ctx.GetAllAppointments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](115, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](117, "print-page", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function ReceptionistSearchComponent_Template_input_input_123_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](129); return _r10.filterGlobal($event.target.value, "contains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "p-table", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](131, ReceptionistSearchComponent_ng_template_131_Template, 83, 36, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, ReceptionistSearchComponent_ng_template_133_Template, 76, 11, "ng-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](135, ReceptionistSearchComponent_ng_template_135_Template, 7, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](160, "receptionist-appointment-details", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](164, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](172, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "thead", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](187, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](192, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](203, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](207, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](208, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](211, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](215, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](219, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](227, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](230, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](232, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](233, ReceptionistSearchComponent_tr_233_Template, 35, 11, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](235, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 51, "MRN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.appointmentCriteria.patientClinicMRN);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 53, "FindPatient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 55, "DoctorName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.appointmentCriteria.doctorId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 57, "Select"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 59, ctx.doctorsList));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 61, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.appointmentCriteria.receptionistMethodsSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 63, "Select"), " --");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 65, "Today"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 67, "Days"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 69, "Week"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 71, "Month"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](77, 73, "Year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](81, 75, "PeriodOfTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.todayStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.weekStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.monthStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.yearStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.periodOfTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.pastOrFuture);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](104, 77, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](113, 79, "SearchResults"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("section", ctx.toPrintDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](124, 81, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.matchedAppontments)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](109, _c3))("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](110, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](155, 83, "AppointmentDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appointmentDetails", ctx.appointmentDetails)("AppontmentId", ctx.appointmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](170, 85, "Close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](187, 87, "AppointmentDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](191, 89, "Class"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](195, 91, "ArrivalTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](199, 93, "PatientMRN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](203, 95, "DoctorName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](207, 97, "PatientName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](211, 99, "Mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](215, 101, "PolicyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](219, 103, "PolicyEndDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](223, 105, "LastModifierUser"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](227, 107, "LastModificationDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.matchedAppontments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _shared_print_page_print_page_component__WEBPACK_IMPORTED_MODULE_4__.PrintComponent, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, _receptionist_appointment_details_receptionist_appointment_details_component__WEBPACK_IMPORTED_MODULE_5__.ReceptionistAppointmentDetailsComponent, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.Calendar, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _shared_pipes_translateObjects_pipe__WEBPACK_IMPORTED_MODULE_7__.TranslateObjectsPipe], encapsulation: 2 });


/***/ }),

/***/ 50007:
/*!********************************************************************************!*\
  !*** ./src/app/receptionists/receptionist-tabs/receptionist-tabs.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistTabsComponent": () => (/* binding */ ReceptionistTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 79686);




class ReceptionistTabsComponent {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.activeTabIndex = 0;
        this.receptionistId = '1';
        this.hasID = false;
    }
    ngOnChanges(changes) {
        //this.volunteerId = this.localStorage.retrieve("VolunteerId");
        //if (this.volunteerId == 'new' || this.volunteerId == null)
        //    this.hasID = false;
        //else
        //    this.hasID = true;
    }
}
ReceptionistTabsComponent.ɵfac = function ReceptionistTabsComponent_Factory(t) { return new (t || ReceptionistTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
ReceptionistTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReceptionistTabsComponent, selectors: [["receptionist-tabs"]], inputs: { activeTabIndex: "activeTabIndex", receptionistId: "receptionistId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 75, vars: 48, consts: [[1, "left-aside", "desktop-view"], [1, "aside-branding"], ["src", "assets/images/App-Logo.png", "title", "Logo", 1, "appLogo"], [1, "aside-pin", "waves-effect"], [1, "fa", "fa-thumb-tack"], ["onclick", "closeLeftBar();", 1, "aside-close", "waves-effect"], [1, "fa", "fa-times"], [1, "left-navigation"], [1, "list-accordion", "padding5"], [3, "routerLink"], ["routerLink", "/receptionist/appointments"]], template: function ReceptionistTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 0 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/account/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 34, "MyAccount"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 1 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/basic/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 36, "MyPersonalData"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 2 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/address/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 38, "AddressContact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 3 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 40, "Appointments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 4 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/patients/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 42, "Patients"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 5 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/requests/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 44, "GuestRequests"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.activeTabIndex == 6 ? "selectednavbaritem active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/receptionist/reports/", ctx.receptionistId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 46, "Reports"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 4650:
/*!**********************************************************!*\
  !*** ./src/app/receptionists/receptionists.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistsComponent": () => (/* binding */ ReceptionistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/receptionist.service */ 86253);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var ng2_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-webstorage */ 50487);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loading/loading.component */ 7870);
/* harmony import */ var _shared_pipes_filterbyname_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/filterbyname.pipe */ 41457);









function ReceptionistsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ReceptionistsComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceptionistsComponent_tr_87_Template_a_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const vol_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.editVolunteer(vol_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u062A\u0639\u062F\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0639\u0631\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vol_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/volunteerProfile/", vol_r2.id, "");
} }
class ReceptionistsComponent {
    constructor(organizationService, toastr, storage, router) {
        this.organizationService = organizationService;
        this.toastr = toastr;
        this.storage = storage;
        this.router = router;
        this.showProgress = false;
    }
    ngOnInit() {
        /*let vm = this;
        vm.showProgress = true;

        this.organizationService.getAllOrganizations()
         .subscribe(
            function (response:any) {
                vm.organizationsList = response;
            },
            function (error:any) {
                vm.toastr.error('Failed to Load Data - ' + error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
        */
    }
    editOrganization(id) {
        // store selected company ID
        this.storage.store("OrganizationID", id);
        //navigate to current URL
        this.router.navigate(['/organizationBasic', id]);
    }
    editVolunteer(id) {
    }
}
ReceptionistsComponent.ɵfac = function ReceptionistsComponent_Factory(t) { return new (t || ReceptionistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_receptionist_service__WEBPACK_IMPORTED_MODULE_0__.ReceptionistService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_webstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ReceptionistsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReceptionistsComponent, selectors: [["receptionists"]], decls: 92, vars: 6, consts: [[4, "ngIf"], [1, "page-breadcrumb"], [1, "row"], [1, "col-md-7"], [1, "page-breadcrumb-wrap"], [1, "page-breadcrumb-info"], [1, "list-page-breadcrumb"], [1, "active-page"], [1, "col-md-5"], [1, "padding5"], [1, "col-md-4", "nopadding"], ["type", "text", "placeholder", "\u0628\u062D\u062B...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-8", "text-left", "nopadding"], ["type", "button", "routerLink", "/doctorAccount/1", 1, "btn", "btn-primary"], [1, "padding2"], [1, "table", "table-responsive", "table-hover"], [1, "alert", "alert-info"], [4, "ngFor", "ngForOf"], [1, "pointer", 3, "click"], [3, "routerLink"]], template: function ReceptionistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReceptionistsComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Receptionist Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReceptionistsComponent_Template_input_ngModelChange_38_listener($event) { return ctx.filterString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u062C\u062F\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\u0627\u0644\u0627\u0633\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u0631\u0642\u0645 \u062C\u0648\u0627\u0632 \u0627\u0644\u0633\u0641\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\u0627\u0644\u062C\u0646\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "\u0627\u0644\u062A\u062E\u0635\u0635");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0639\u0644\u0645\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u062A\u0639\u062F\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\u0639\u0631\u0636");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, ReceptionistsComponent_tr_87_Template, 28, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](88, "filterByName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filterString);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](88, 3, ctx.volunteersList, ctx.filterString));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_shared_pipes_filterbyname_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterByNamePipe], encapsulation: 2 });


/***/ }),

/***/ 65292:
/*!*******************************************************!*\
  !*** ./src/app/receptionists/receptionists.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistsModule": () => (/* binding */ ReceptionistsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _receptionists_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptionists.routing */ 34733);
/* harmony import */ var _receptionists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptionists.component */ 4650);
/* harmony import */ var _receptionist_tabs_receptionist_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receptionist-tabs/receptionist-tabs.component */ 50007);
/* harmony import */ var _receptionist_basic_receptionist_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receptionist-basic/receptionist-basic.component */ 5494);
/* harmony import */ var _receptionist_address_receptionist_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receptionist-address/receptionist-address.component */ 42305);
/* harmony import */ var _receptionist_account_receptionist_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receptionist-account/receptionist-account.component */ 57213);
/* harmony import */ var _receptionist_appointments_receptionist_appointments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receptionist-appointments/receptionist-appointments.component */ 29321);
/* harmony import */ var _receptionist_reports_receptionist_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receptionist-reports/receptionist-reports.component */ 36891);
/* harmony import */ var _receptionist_patients_receptionist_patients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receptionist-patients/receptionist-patients.component */ 58381);
/* harmony import */ var _receptionist_search_receptionist_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receptionist-search/receptionist-search.component */ 31045);
/* harmony import */ var _receptionist_appointment_details_receptionist_appointment_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receptionist-appointment-details/receptionist-appointment-details.component */ 80962);
/* harmony import */ var _receptionist_requests_receptionist_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receptionist-requests/receptionist-requests.component */ 35018);
/* harmony import */ var _receptionist_division_calendar_receptionist_division_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./receptionist-division-calendar/receptionist-division-calendar.component */ 8983);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _patients_patients_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../patients/patients.module */ 63881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);


















class ReceptionistsModule {
}
ReceptionistsModule.ɵfac = function ReceptionistsModule_Factory(t) { return new (t || ReceptionistsModule)(); };
ReceptionistsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: ReceptionistsModule });
ReceptionistsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _receptionists_routing__WEBPACK_IMPORTED_MODULE_0__.ReceptionistRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule,
            //routing,
            // ScheduleModule,
            _patients_patients_module__WEBPACK_IMPORTED_MODULE_14__.PatientsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](ReceptionistsModule, { declarations: [_receptionists_component__WEBPACK_IMPORTED_MODULE_1__.ReceptionistsComponent,
        _receptionist_tabs_receptionist_tabs_component__WEBPACK_IMPORTED_MODULE_2__.ReceptionistTabsComponent,
        _receptionist_basic_receptionist_basic_component__WEBPACK_IMPORTED_MODULE_3__.ReceptionistBasicComponent,
        _receptionist_address_receptionist_address_component__WEBPACK_IMPORTED_MODULE_4__.ReceptionistAddressComponent,
        _receptionist_account_receptionist_account_component__WEBPACK_IMPORTED_MODULE_5__.ReceptionistAccountComponent,
        _receptionist_appointments_receptionist_appointments_component__WEBPACK_IMPORTED_MODULE_6__.ReceptionistAppointmentsComponent,
        _receptionist_reports_receptionist_reports_component__WEBPACK_IMPORTED_MODULE_7__.ReceptionistReportsComponent,
        _receptionist_patients_receptionist_patients_component__WEBPACK_IMPORTED_MODULE_8__.ReceptionistPatientsComponent,
        _receptionist_search_receptionist_search_component__WEBPACK_IMPORTED_MODULE_9__.ReceptionistSearchComponent,
        _receptionist_appointment_details_receptionist_appointment_details_component__WEBPACK_IMPORTED_MODULE_10__.ReceptionistAppointmentDetailsComponent,
        _receptionist_requests_receptionist_requests_component__WEBPACK_IMPORTED_MODULE_11__.ReceptionistRequestsComponent,
        _receptionist_division_calendar_receptionist_division_calendar_component__WEBPACK_IMPORTED_MODULE_12__.ReceptionistDivisionCalendarComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _receptionists_routing__WEBPACK_IMPORTED_MODULE_0__.ReceptionistRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__.SharedModule,
        //routing,
        // ScheduleModule,
        _patients_patients_module__WEBPACK_IMPORTED_MODULE_14__.PatientsModule], exports: [_receptionists_component__WEBPACK_IMPORTED_MODULE_1__.ReceptionistsComponent,
        _receptionist_tabs_receptionist_tabs_component__WEBPACK_IMPORTED_MODULE_2__.ReceptionistTabsComponent,
        _receptionist_basic_receptionist_basic_component__WEBPACK_IMPORTED_MODULE_3__.ReceptionistBasicComponent,
        _receptionist_address_receptionist_address_component__WEBPACK_IMPORTED_MODULE_4__.ReceptionistAddressComponent,
        _receptionist_account_receptionist_account_component__WEBPACK_IMPORTED_MODULE_5__.ReceptionistAccountComponent,
        _receptionist_appointments_receptionist_appointments_component__WEBPACK_IMPORTED_MODULE_6__.ReceptionistAppointmentsComponent,
        _receptionist_reports_receptionist_reports_component__WEBPACK_IMPORTED_MODULE_7__.ReceptionistReportsComponent,
        _receptionist_patients_receptionist_patients_component__WEBPACK_IMPORTED_MODULE_8__.ReceptionistPatientsComponent,
        _receptionist_search_receptionist_search_component__WEBPACK_IMPORTED_MODULE_9__.ReceptionistSearchComponent,
        _receptionist_appointment_details_receptionist_appointment_details_component__WEBPACK_IMPORTED_MODULE_10__.ReceptionistAppointmentDetailsComponent,
        _receptionist_requests_receptionist_requests_component__WEBPACK_IMPORTED_MODULE_11__.ReceptionistRequestsComponent,
        _receptionist_division_calendar_receptionist_division_calendar_component__WEBPACK_IMPORTED_MODULE_12__.ReceptionistDivisionCalendarComponent] }); })();


/***/ }),

/***/ 34733:
/*!********************************************************!*\
  !*** ./src/app/receptionists/receptionists.routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionistRoutingModule": () => (/* binding */ ReceptionistRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _receptionist_account_receptionist_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptionist-account/receptionist-account.component */ 57213);
/* harmony import */ var _receptionist_basic_receptionist_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptionist-basic/receptionist-basic.component */ 5494);
/* harmony import */ var _receptionist_address_receptionist_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receptionist-address/receptionist-address.component */ 42305);
/* harmony import */ var _receptionist_appointments_receptionist_appointments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receptionist-appointments/receptionist-appointments.component */ 29321);
/* harmony import */ var _receptionist_reports_receptionist_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receptionist-reports/receptionist-reports.component */ 36891);
/* harmony import */ var _receptionist_patients_receptionist_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receptionist-patients/receptionist-patients.component */ 58381);
/* harmony import */ var _receptionist_requests_receptionist_requests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receptionist-requests/receptionist-requests.component */ 35018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);










const receptionistRoutes = [
    //Receptionists
    { path: 'account/:id', component: _receptionist_account_receptionist_account_component__WEBPACK_IMPORTED_MODULE_0__.ReceptionistAccountComponent },
    { path: 'basic/:id', component: _receptionist_basic_receptionist_basic_component__WEBPACK_IMPORTED_MODULE_1__.ReceptionistBasicComponent },
    { path: 'address/:id', component: _receptionist_address_receptionist_address_component__WEBPACK_IMPORTED_MODULE_2__.ReceptionistAddressComponent },
    { path: 'appointments', component: _receptionist_appointments_receptionist_appointments_component__WEBPACK_IMPORTED_MODULE_3__.ReceptionistAppointmentsComponent },
    { path: 'reports/:id', component: _receptionist_reports_receptionist_reports_component__WEBPACK_IMPORTED_MODULE_4__.ReceptionistReportsComponent },
    { path: 'patients/:id', component: _receptionist_patients_receptionist_patients_component__WEBPACK_IMPORTED_MODULE_5__.ReceptionistPatientsComponent },
    { path: 'requests/:id', component: _receptionist_requests_receptionist_requests_component__WEBPACK_IMPORTED_MODULE_6__.ReceptionistRequestsComponent }
];
class ReceptionistRoutingModule {
}
ReceptionistRoutingModule.ɵfac = function ReceptionistRoutingModule_Factory(t) { return new (t || ReceptionistRoutingModule)(); };
ReceptionistRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ReceptionistRoutingModule });
ReceptionistRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(receptionistRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReceptionistRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_receptionists_receptionists_module_ts.js.map