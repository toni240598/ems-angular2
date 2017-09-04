webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "\n\t     <router-outlet></router-outlet>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_dashboard_home_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/home/home-dashboard/home-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_store_store_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_alarm_alarm_component__ = __webpack_require__("../../../../../src/app/pages/home/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_store_store_dashboard_store_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-dashboard/store-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_store_store_inventory_store_inventory_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-inventory/store-inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_store_store_alarm_store_alarm_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-alarm/store-alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_store_store_detail_store_detail_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-detail/store-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_store_store_detail_resolve_service__ = __webpack_require__("../../../../../src/app/pages/home/store/store-detail/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ceo_ceo_component__ = __webpack_require__("../../../../../src/app/pages/ceo/ceo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ceo_ceo_dashboard_ceo_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/ceo/ceo-dashboard/ceo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ceo_maps_view_maps_view_component__ = __webpack_require__("../../../../../src/app/pages/ceo/maps-view/maps-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ceo_setup_setup_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ceo_setup_setup_province_setup_province_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ceo_setup_setup_zone_setup_zone_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ceo_setup_setup_branch_setup_branch_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ceo_setup_setup_store_setup_store_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__["a" /* HomeComponent */], data: { state: "home" }, children: [
            { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home_dashboard_home_dashboard_component__["a" /* HomeDashboardComponent */], data: { state: "home-dashboard" } },
            { path: "store", component: __WEBPACK_IMPORTED_MODULE_6__pages_home_store_store_component__["a" /* StoreComponent */], data: { state: "store" }, children: [
                    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_8__pages_home_store_store_dashboard_store_dashboard_component__["a" /* StoreDashboardComponent */] },
                    { path: "inventory", component: __WEBPACK_IMPORTED_MODULE_9__pages_home_store_store_inventory_store_inventory_component__["a" /* StoreInventoryComponent */] },
                    { path: "alarm", component: __WEBPACK_IMPORTED_MODULE_10__pages_home_store_store_alarm_store_alarm_component__["a" /* StoreAlarmComponent */] },
                    { path: "detail/:id/:type", component: __WEBPACK_IMPORTED_MODULE_11__pages_home_store_store_detail_store_detail_component__["a" /* StoreDetailComponent */], data: { state: "store-detail" },
                        resolve: { GET: __WEBPACK_IMPORTED_MODULE_12__pages_home_store_store_detail_resolve_service__["a" /* ResolveService */] } },
                    { path: "", redirectTo: "dashboard", pathMatch: "full" }
                ] },
            { path: "alarm", component: __WEBPACK_IMPORTED_MODULE_7__pages_home_alarm_alarm_component__["a" /* AlarmComponent */], data: { state: "alarm" } },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: "ceo", component: __WEBPACK_IMPORTED_MODULE_13__pages_ceo_ceo_component__["a" /* CeoComponent */], data: { state: "ceo" }, children: [
            { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_14__pages_ceo_ceo_dashboard_ceo_dashboard_component__["a" /* CeoDashboardComponent */], data: { state: "ceo-dashboard" } },
            { path: "maps", component: __WEBPACK_IMPORTED_MODULE_15__pages_ceo_maps_view_maps_view_component__["a" /* MapsViewComponent */], data: { state: "maps-view" } },
            { path: "setup", component: __WEBPACK_IMPORTED_MODULE_16__pages_ceo_setup_setup_component__["a" /* SetupComponent */], data: { state: "setup" }, children: [
                    { path: "province", component: __WEBPACK_IMPORTED_MODULE_17__pages_ceo_setup_setup_province_setup_province_component__["a" /* SetupProvinceComponent */] },
                    { path: "zone", component: __WEBPACK_IMPORTED_MODULE_18__pages_ceo_setup_setup_zone_setup_zone_component__["a" /* SetupZoneComponent */] },
                    { path: "branch", component: __WEBPACK_IMPORTED_MODULE_19__pages_ceo_setup_setup_branch_setup_branch_component__["a" /* SetupBranchComponent */] },
                    { path: "store", component: __WEBPACK_IMPORTED_MODULE_20__pages_ceo_setup_setup_store_setup_store_component__["a" /* SetupStoreComponent */] },
                    { path: "", redirectTo: "province", pathMatch: "full" }
                ] },
            { path: "", redirectTo: "maps", pathMatch: "full" }
        ] },
    { path: '', redirectTo: 'ceo', pathMatch: 'full' }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ]
    })
], AppRouterModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/ceo-dashboard/ceo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CeoDashboardComponent = (function () {
    function CeoDashboardComponent() {
        this.widgetsAll = [
            { label: "Total Store", category: "default", value: 100 },
            { label: "Total Spacious", category: "spacious", value: 6000 },
            { label: "This Day Total Consumption", category: "watthour", value: 1000000 },
            { label: "Current Energy Consumption", category: "watt", value: 827324 },
            { label: "Average Power", category: "performance", value: 1223, condition: 'average' },
            { label: "Best Power", category: "performance", value: 1000, condition: 'max' },
            { label: "Worst Power", category: "performance", value: 9000, condition: 'min' },
            { label: "Total Alarm", category: "default", value: 6040 }
        ];
        this.widgetsProvince = [
            { province: "DKI JAKARTA", data: [
                    { label: "Total Store", province: "DKI JAKARTA", category: "default", value: 100, connection: "disconnect" },
                    { label: "Total Spacious", category: "spacious", value: 6000, connection: "connect" },
                    { label: "This Day Total Consumption", category: "watthour", value: 1000000, connection: "connect" },
                    { label: "Current Energy Consumption", category: "watt", value: 827324, connection: "connect" },
                    { label: "Average Power", category: "performance", value: 14, connection: "connect", condition: 'average' },
                    { label: "Best Power", category: "performance", value: 0, connection: "connect", condition: 'min' },
                    { label: "Worst Power", category: "performance", value: 0, connection: "connect", condition: 'max' },
                    { label: "Total Alarm", category: "default", value: 0, connection: "connect" }
                ] },
            { province: "JAWA TIMUR", data: [
                    { label: "Total Store", province: "DKI JAKARTA", category: "default", value: 100, connection: "disconnect" },
                    { label: "Total Spacious", category: "spacious", value: 6000, connection: "connect" },
                    { label: "This Day Total Consumption", category: "watthour", value: 1000000, connection: "connect" },
                    { label: "Current Energy Consumption", category: "watt", value: 827324, connection: "connect" },
                    { label: "Average Power", category: "performance", value: 14, connection: "connect", condition: 'average' },
                    { label: "Best Power", category: "performance", value: 0, connection: "connect", condition: 'min' },
                    { label: "Worst Power", category: "performance", value: 0, connection: "connect", condition: 'max' },
                    { label: "Total Alarm", category: "default", value: 0, connection: "connect" }
                ] },
            { province: "JAWA BARAT", data: [
                    { label: "Total Store", province: "DKI JAKARTA", category: "default", value: 100, connection: "disconnect" },
                    { label: "Total Spacious", category: "spacious", value: 6000, connection: "connect" },
                    { label: "This Day Total Consumption", category: "watthour", value: 1000000, connection: "connect" },
                    { label: "Current Energy Consumption", category: "watt", value: 827324, connection: "connect" },
                    { label: "Average Power", category: "performance", value: 14, connection: "connect", condition: 'average' },
                    { label: "Best Power", category: "performance", value: 0, connection: "connect", condition: 'min' },
                    { label: "Worst Power", category: "performance", value: 0, connection: "connect", condition: 'max' },
                    { label: "Total Alarm", category: "default", value: 0, connection: "connect" }
                ] }
        ];
        this.widgetsAlarm = [
            { label: "Critical", category: "default", value: 100, connection: "disconnect" },
            { label: "Major", category: "default", value: 6000, connection: "connect" },
            { label: "Minor", category: "default", value: 10, connection: "connect" },
            { label: "Warning", category: "default", value: 12, connection: "connect" },
        ];
    }
    CeoDashboardComponent.prototype.ngOnInit = function () {
    };
    return CeoDashboardComponent;
}());
CeoDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ceo-dashboard',
        template: "\n        <div align=\"center\" [ngStyle]=\"{'margin-bottom':30+'px', 'font-weight':'bold',\n        'margin-top':19+'px', 'font-size':19+'px'}\">ALL STORE</div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let widget of widgetsAll\">\n            <app-widget [config]=\"widget\" [template]=\"'default'\"></app-widget>\n        </div>\n\n        <div *ngFor=\"let label of widgetsProvince\" >\n             <div class=\"col-md-12 col-lg-12 col-xs-12\"[ngStyle]=\"{'text-align':'center', 'font-size':19+'px', \n            'font-weight':'bold', 'margin-top':18+'px', 'margin-bottom':38+'px'}\">{{label.province}}</div>\n\n            <div class=\"col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let province of label.data\">\n                <app-widget [config]=\"province\" [template]=\"'default'\"></app-widget>\n            </div>\n        </div>     \n        \n        <div class=\"col-md-12 col-lg-12 col-xs-12\" [ngStyle]=\"{'text-align':'left', 'font-size':19+'px', \n        'font-weight':'bold', 'margin-top':18+'px', 'margin-bottom':30+'px', 'margin-right':20+'px'}\">\n          Total Exiting Alarm\n        </div>  \n        \n        <div style=\"margin-bottom:100px\">\n\t        <div class=\"col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let alarm of widgetsAlarm\">\n\t            <app-widget [config]=\"alarm\" [template]=\"'default'\"></app-widget>\n\t        </div>\n        </div>\n\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], CeoDashboardComponent);

//# sourceMappingURL=ceo-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/ceo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.header {\n    transition: 0.4s ease-in-out all;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);\n    background-color: #fff;\n    display: table;\n    width: 100%;\n    z-index: 999;\n    padding:15px;\n    position: relative;\n}\n\n.logo span {\n\tfont-size: 18px;\n    color: #3C4858;\n}\n\n.logo img {\n\tmargin-top: -10px;\n\theight:35px;\n}\n\nul {\n\tlist-style: none;\n\tmargin-bottom: 0;\n\tpadding-left: 0;\n}\n\nul li {\n\tdisplay: inline-block;\n    margin-left: 15px;\n}\n\nul li a {\n\t color: #474747;\n     font-size: 14px;\n}\n\nul li a:hover {\n\tcolor: #ff513f;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/ceo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-toolbar color=\"warn\">\n    <span>EMS</span>\n    <span class=\"example-spacer\"></span>\n    <div style=\"padding-right: 50px;\">\n        <a md-button [routerLink]=\"['dashboard']\">\n            <md-icon>dashboard</md-icon>&nbsp;Dashboard\n        </a>\n        <a md-button [routerLink]=\"['maps']\" >\n            <md-icon>pin_drop</md-icon>&nbsp;Maps\n        </a>\n        <a md-button [routerLink]=\"['setup']\">\n            <md-icon>settings</md-icon>&nbsp;Setup\n        </a>\n    </div>\n</md-toolbar> -->\n<div class=\"header\">\n    <div class=\"col-md-4\">\n    <div class=\"logo\">\n        <img src=\"/assets/img/angular2-logo-red.png\"/>\n        <span>EMS</span>\n    </div>\n    </div>\n    <div class=\"col-md-8\">\n        <ul class=\"pull-right\">\n            <li>\n                <a [routerLink]=\"['dashboard']\">\n                     <md-icon>dashboard</md-icon>&nbsp;Dashboard\n                </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['maps']\">\n                   <md-icon>pin_drop</md-icon>&nbsp;Maps\n                </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['setup']\">\n                    <md-icon>settings</md-icon>&nbsp;Setup\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n <main [@routerTransition]=\"getState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/ceo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_animations__ = __webpack_require__("../../../../../src/app/tools/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CeoComponent = (function () {
    function CeoComponent() {
    }
    CeoComponent.prototype.ngOnInit = function () {
    };
    CeoComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    return CeoComponent;
}());
CeoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ceo',
        template: __webpack_require__("../../../../../src/app/pages/ceo/ceo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/ceo.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__tools_animations__["a" /* routerTransition */]]
    }),
    __metadata("design:paramtypes", [])
], CeoComponent);

//# sourceMappingURL=ceo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/maps-filter/maps-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<br><div class=\"row\" style=\"height:87vh;position: relative\" align=\"center\">\n\n    <div class=\"col-md-1\" style=\"margin-left: 10px;\">\n      <span mdTooltip=\"View All\" >\n        <button md-mini-fab color=\"warn\" (click)=\"setAllMarker()\" [disabled]=\"allMaker\">\n          <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </div>\n\n    <!-- select Province -->\n  \t<div class=\"col-md-2\" style=\"padding-top: 12px;\">\n      <md-select placeholder=\"Province\" [(ngModel)]=\"id_province\" (change)=\"setProvince(id_province)\">\n        <md-option *ngFor=\"let i of province\" value=\"{{i.id}}\">{{i.label}}</md-option>\n      </md-select>\n    </div>\n\n    <!-- select Zone -->\n  \t<div class=\"col-md-2\" style=\"padding-top: 12px;\">\n      <md-select placeholder=\"Zone\" [(ngModel)]=\"id_zone\" (change)=\"setZone(id_zone)\">\n        <md-option *ngFor=\"let i of zone\" value=\"{{i.id}}\">{{i.label}}</md-option>\n      </md-select>\n    </div>\n\n    <!-- select Branch -->\n  \t<div class=\"col-md-2\" style=\"padding-top: 12px;\">\n      <md-select placeholder=\"Branch\" [(ngModel)]=\"id_branch\" (change)=\"setBranch(id_branch)\">\n        <md-option *ngFor=\"let i of branch\" value=\"{{i.id}}\">{{i.label}}</md-option>\n      </md-select>\n    </div>\n\n    <!-- select Store -->\n  \t<div class=\"col-md-2\" style=\"padding-top: 12px;\">\n      <md-select placeholder=\"Store\" [(ngModel)]=\"id_store\" (change)=\"setStore(id_store)\">\n        <md-option *ngFor=\"let i of store\" value=\"{{i.id}}\">{{i.label}}</md-option>\n      </md-select>\n    </div>\n\n\n\n    <!-- widget store -->\n    <br><br><br>\n    <div class=\"main-content\">\n        <div class=\"container-fluid\">\n        \t<div class=\"row\" *ngIf=\"widget\" align=\"center\" style=\"overflow-y:scroll;height:75vh;overflow-x:hidden;\">\n    \t\t\t<div class=\"col-md-6\" *ngFor=\"let i of dataWidget | paginate: { itemsPerPage:6, currentPage: p }\">\n\n              <a (click)=\"goStore(i)\" style=\"padding-left: 30px;padding-right: 30px;\">\n        \t\t\t\t<app-widget [template]=\"'store'\"\n                    [config]=\"{\n                        id      : 1,\n                        url     : '',\n                        label   : 'Pondok Pinang 3',\n                        address : 'Jl pondok pinang 3 no 9 gang bidan'\n                    }\" (action)=\"myAction($event)\">\n                </app-widget>\n              </a>\n    \t\t\t</div>\n        \t</div>\n        </div>\n    </div>\n    <div *ngIf=\"widget\">\n      <b><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></b>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/maps-filter/maps-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsFilterComponent = (function () {
    function MapsFilterComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        /**
          fungsi dari OutputZone adalah mengirimkan data dari hasil filtering yang akan dikirim ke komponent maps sehingga marker maps
          akan menyesuaikan dengan data yang akan dikirim oleh OutputZone.
        */
        this.OutputZone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.province = [];
        this.zone = [];
        this.branch = [];
        this.store = [];
        this.merge = { parent: [], children: [], all: "" };
        this.iconBlue = "assets/img/iconMarker/blue.png";
        this.iconRed = "assets/img/iconMarker/red.png";
        this.widget = false;
        this.allMaker = true;
        this.dataWidget = [];
    }
    MapsFilterComponent.prototype.ngOnChanges = function () {
        this.setAlarm(this.getAlarm);
        this.setMapsMarker(this.getMarker);
        this.setMaps();
        this.province = this.getProvince;
    };
    /**
      # fungsi setProvince adalah fungsi filtering province yang akan berjalan jika filter province dilakukan dan akan mendapatkan parameter
        id dari province yang dipilih selanjutnya data province yang di pilih akan melakukan filtering child/zone
        berdasarkan parent dari child tersebut
  
      # dalam fungsi ini juga menjalankan sebuah proses pengiriman parent(maps center) dan child(marker maps) yang akan dikirimkan
        ke komponent maps
  
      # dalam fungsi ini juga menjalankan hasil filtering dan akan tampilan widget store berdasarkan parent yang dipilih
    */
    MapsFilterComponent.prototype.setProvince = function (id) {
        this.id_province = id.toString();
        this.allMaker = false;
        this.merge = { parent: [], children: [] };
        this.zone = [];
        this.branch = [];
        this.store = [];
        this.dataWidget = [];
        for (var _i in this.getZone) {
            if (id == this.getZone[_i].id_province) {
                this.zone.push(this.getZone[_i]);
                this.merge.children.push(this.getZone[_i]);
            }
        }
        for (var _i in this.getProvince) {
            if (id == this.getProvince[_i].id) {
                this.merge.parent = this.getProvince[_i];
            }
        }
        this.OutputZone.emit([this.merge]);
        for (var _i in this.getStore) {
            if (id == this.getStore[_i].id_province) {
                this.setWidget(this.getStore[_i]);
            }
        }
    };
    /**
      # funsi setZone hampir sama dengan fungsi dari setProvince
    */
    MapsFilterComponent.prototype.setZone = function (id) {
        this.id_zone = id.toString();
        this.merge = { parent: [], children: [] };
        this.branch = [];
        this.store = [];
        this.dataWidget = [];
        for (var _i in this.getBranch) {
            if (id == this.getBranch[_i].id_zone) {
                this.branch.push(this.getBranch[_i]);
                this.merge.children.push(this.getBranch[_i]);
            }
        }
        for (var _i in this.getZone) {
            if (id == this.getZone[_i].id) {
                this.merge.parent = this.getZone[_i];
            }
        }
        this.OutputZone.emit([this.merge]);
        for (var _i in this.getStore) {
            if (id == this.getStore[_i].id_zone) {
                this.setWidget(this.getStore[_i]);
            }
        }
    };
    /**
      # funsi setZone hampir sama dengan fungsi dari setProvince
    */
    MapsFilterComponent.prototype.setBranch = function (id) {
        this.id_branch = id.toString();
        this.merge = { parent: [], children: [] };
        this.store = [];
        this.dataWidget = [];
        for (var _i in this.getStore) {
            if (id == this.getStore[_i].id_branch) {
                this.store.push(this.getStore[_i]);
                this.merge.children.push(this.getStore[_i]);
                this.setWidget(this.getStore[_i]);
            }
        }
        for (var _i in this.getBranch) {
            if (id == this.getBranch[_i].id) {
                this.merge.parent = this.getBranch[_i];
            }
        }
        this.OutputZone.emit([this.merge]);
    };
    /**
      # funsi setZone hampir sama dengan fungsi dari setProvince
    */
    MapsFilterComponent.prototype.setStore = function (id) {
        this.id_store = id.toString();
        this.dataWidget = [];
        for (var _i in this.getStore) {
            if (this.getStore[_i].id == id) {
                this.merge.parent = this.getStore[_i];
                this.merge.children = [this.getStore[_i]];
                this.setWidget(this.getStore[_i]);
            }
        }
        this.OutputZone.emit([this.merge]);
    };
    /**
      fungsi dari setWidget adalah fungsi yang akan mengirimkan data widget store dari hasil filtering
    */
    MapsFilterComponent.prototype.setWidget = function (entry) {
        this.widget = true;
        if (entry != undefined) {
            this.dataWidget.push(entry);
        }
    };
    /**
      fungsi dari setAlarm adalah untuk mencari atau mendetailkan status alarm pada province, zone, branch dan store.
      dan selanjutnya data tersebut akan dijalankan untuk mendetailkan lokasimana yang sedang mengalami kondisi alarm
    */
    MapsFilterComponent.prototype.setAlarm = function (entry) {
        for (var _a = 0, entry_1 = entry; _a < entry_1.length; _a++) {
            var i = entry_1[_a];
            for (var _b = 0, _c = this.getStore; _b < _c.length; _b++) {
                var j = _c[_b];
                if (i.id_store == j.id) {
                    j.status = i.status;
                }
            }
        }
        for (var _d = 0, _e = this.getStore; _d < _e.length; _d++) {
            var i = _e[_d];
            for (var _f = 0, _g = this.getProvince; _f < _g.length; _f++) {
                var j = _g[_f];
                if (i.id_province == j.id && i.status) {
                    if (i.status != "cleared") {
                        j.status = i.status;
                    }
                }
            }
            for (var _h = 0, _k = this.getZone; _h < _k.length; _h++) {
                var j = _k[_h];
                if (i.id_zone == j.id && i.status) {
                    if (i.status != "cleared") {
                        j.status = i.status;
                    }
                }
            }
            for (var _l = 0, _m = this.getBranch; _l < _m.length; _l++) {
                var j = _m[_l];
                if (i.id_branch == j.id && i.status) {
                    if (i.status != "cleared") {
                        j.status = i.status;
                    }
                }
            }
        }
    };
    /**
      fungsi dari setMaps adalah fungsi ini adalah lanjutan fungsi dari setAlarm, tetapi dalam fungsi ini
      lebih mendetailkan icon alarm yang akan dipakai
    */
    MapsFilterComponent.prototype.setMaps = function () {
        for (var _a = 0, _b = this.getProvince; _a < _b.length; _a++) {
            var _j_1 = _b[_a];
            if (!_j_1.status) {
                _j_1.iconUrl = this.iconBlue;
            }
            else {
                if (_j_1.status == "cleared") {
                    _j_1.iconUrl = this.iconBlue;
                }
                else {
                    _j_1.isOpen = true;
                    _j_1.iconUrl = this.iconRed;
                }
            }
            _j_1.type = "Province";
        }
        for (var _c = 0, _d = this.getZone; _c < _d.length; _c++) {
            var _j_2 = _d[_c];
            if (!_j_2.status) {
                _j_2.iconUrl = this.iconBlue;
            }
            else {
                if (_j_2.status == "cleared") {
                    _j_2.iconUrl = this.iconBlue;
                }
                else {
                    _j_2.isOpen = true;
                    _j_2.iconUrl = this.iconRed;
                }
            }
            _j_2.type = "Zone";
        }
        for (var _e = 0, _f = this.getBranch; _e < _f.length; _e++) {
            var _j_3 = _f[_e];
            if (!_j_3.status) {
                _j_3.iconUrl = this.iconBlue;
            }
            else {
                if (_j_3.status == "cleared") {
                    _j_3.iconUrl = this.iconBlue;
                }
                else {
                    _j_3.isOpen = true;
                    _j_3.iconUrl = this.iconRed;
                }
            }
            _j_3.type = "Branch";
        }
        for (var _g = 0, _h = this.getStore; _g < _h.length; _g++) {
            var _j = _h[_g];
            if (!_j.status) {
                _j.iconUrl = this.iconBlue;
            }
            else {
                if (_j.status == "cleared") {
                    _j.iconUrl = this.iconBlue;
                }
                else {
                    _j.isOpen = true;
                    _j.iconUrl = this.iconRed;
                }
            }
            _j.type = "Store";
        }
    };
    /**
      fungsi setMapsMarker adalah memproses filtering yang dikirim oleh maps filter dan data tersebut akan dibagi menurut data yang di
      filter . seperti pengiriman data ke fungsi setProvince.
    */
    MapsFilterComponent.prototype.setMapsMarker = function (entry) {
        if (entry != undefined) {
            switch (entry.type) {
                case "Province":
                    this.setProvince(entry.id);
                    break;
                case "Zone":
                    this.setZone(entry.id);
                    break;
                case "Branch":
                    this.setBranch(entry.id);
                    break;
                case "Store":
                    this.setStore(entry.id);
                    this.goStore(entry);
                    break;
            }
        }
    };
    /**
      fungsi dari goStore adalah pengiriman data ke localStorage berupa latitude dan longitude store. dan fungsi ini juga
      menjalankan router ke home/dashboard
    */
    MapsFilterComponent.prototype.goStore = function (entry) {
        this.router.navigate(["home/dashboard"]);
        this.storage.setData(entry);
    };
    /**
      fungsi setAllMarker adalah meng Reload data sehingga dalam kondisi filtering, jika user ingin melihat data seluruh/atau data awal bisa
      menjalankan fungsi ini.
    */
    MapsFilterComponent.prototype.setAllMarker = function () {
        window.location.reload();
    };
    return MapsFilterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getProvince", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getZone", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getBranch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getStore", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getMarker", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "getAlarm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsFilterComponent.prototype, "OutputZone", void 0);
MapsFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maps-filter',
        template: __webpack_require__("../../../../../src/app/pages/ceo/maps-filter/maps-filter.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MapsFilterComponent);

var _a, _b;
//# sourceMappingURL=maps-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/maps-view/maps-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-demo md-card,\n.card-demo md-card-content {\n  margin-bottom: 24px;\n}\n\n.card-demo md-card-footer {\n  left: 24px;\n  margin-bottom: 24px;\n}\n\n.containerX {\n  border: solid 1px #b6b6b6;\n  box-sizing: content-box !important;\n}\n\n.hint {\n   color: #a3a3a3;\n   font-size:0.9em;\n   margin:5px;\n   margin-bottom:0;\n}\n\n.forceAbove {\n  margin-top: -275px;\n}\n\n.large {\n  height:200px;\n}\n\n.large div.one, .large div.two {\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/maps-view/maps-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerX\">\n\t<div fxLayout=\"row\"  class=\"coloredContainerX box\" >\n\t  <div fxFlex fxHide=\"false\" fxShow.gt-sm>\n\t      <app-maps-filter [getProvince]=\"Province\" [getZone]=\"Zone\" [getBranch]=\"Branch\" [getStore]=\"Store\" (OutputZone)=\"OutputZone($event)\" [getMarker]=\"marker\" [getAlarm]=\"Alarm\"></app-maps-filter>\n\t  </div>\n\t  <div fxFlex fxShow=\"false\" fxShow.gt-sm>\n\t    <div style=\"height:89vh;position: relative\">\n\t        <app-map [getProvince]=\"Province\" [getZoneMaps]=\"markerZone\" (pushMarker)=\"getMarker($event)\"></app-map>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/maps-view/maps-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsViewComponent = (function () {
    function MapsViewComponent(loopback) {
        this.loopback = loopback;
        this.Province = [];
        this.Zone = [];
        this.Branch = [];
        this.Store = [];
        this.Alarm = [];
        this.Alarms = [];
    }
    MapsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("location", {}).subscribe(function (res) {
            console.log(res);
            _this.Province = res.Province;
            _this.Zone = res.Zone;
            _this.Branch = res.Branch;
            _this.Store = res.Store;
        });
        this.setAlarm();
    };
    MapsViewComponent.prototype.setAlarm = function () {
        this.Alarm = this.Alarms;
        ;
    };
    MapsViewComponent.prototype.OutputZone = function (entry) {
        this.markerZone = entry;
    };
    MapsViewComponent.prototype.getMarker = function (entry) {
        this.marker = entry;
    };
    return MapsViewComponent;
}());
MapsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maps-view',
        template: __webpack_require__("../../../../../src/app/pages/ceo/maps-view/maps-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/maps-view/maps-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object])
], MapsViewComponent);

var _a;
//# sourceMappingURL=maps-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.html":
/***/ (function(module, exports) {

module.exports = "<app-form *ngIf=\"form\"\n\t[label]=\"form.label\" \n\t[properties]=\"form.properties\" \n\t[action]=\"form.action\"\n\t[data]=\"form.data\"\n\t[service]=\"form.service\"\n\t(response)=\"response($event)\"\n></app-form>\n\n<div  *ngIf=\"table\">\t\n\t<app-table \n\t\t[label]=\"table.label\" \n\t\t[list]=\"table.list\" \n\t\t[setting]=\"table.setting\"\n\t\t(action)=\"action($event)\">\n\t</app-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupBranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupBranchComponent = (function () {
    function SetupBranchComponent(rest) {
        this.rest = rest;
    }
    SetupBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.read("/api/setup/branch").subscribe(function (result) {
            _this.table = result.table;
            _this.form = result.form;
        });
    };
    SetupBranchComponent.prototype.action = function (event) {
        if (event.data != undefined) {
            event.data.type = "Branch";
        }
        else {
            event.data = { type: "Branch" };
        }
        this.container.openModal(event);
    };
    SetupBranchComponent.prototype.response = function (event) {
        this.respon.response(event);
    };
    return SetupBranchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", Object)
], SetupBranchComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__["a" /* TableComponent */]),
    __metadata("design:type", Object)
], SetupBranchComponent.prototype, "respon", void 0);
SetupBranchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setup-branch',
        template: __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */]) === "function" && _a || Object])
], SetupBranchComponent);

var _a;
//# sourceMappingURL=setup-branch.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-form *ngIf=\"form\"\n\t[label]=\"form.label\" \n\t[properties]=\"form.properties\" \n\t[action]=\"form.action\"\n\t[data]=\"form.data\"\n\t[service]=\"form.service\"\n\t(response)=\"response($event)\"\n></app-form>\n\n<div  *ngIf=\"table\">\t\n\t<app-table \n\t\t[label]=\"table.label\" \n\t\t[list]=\"table.list\" \n\t\t[setting]=\"table.setting\"\n\t\t(action)=\"action($event)\">\n\t</app-table>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupProvinceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupProvinceComponent = (function () {
    function SetupProvinceComponent(rest) {
        this.rest = rest;
    }
    SetupProvinceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.read("/api/setup/province").subscribe(function (result) {
            _this.table = result.table;
            _this.form = result.form;
        });
    };
    SetupProvinceComponent.prototype.action = function (event) {
        if (event.data != undefined) {
            event.data.type = "Province";
        }
        else {
            event.data = { type: "Province" };
        }
        this.container.openModal(event);
    };
    SetupProvinceComponent.prototype.response = function (event) {
        this.respon.response(event);
    };
    return SetupProvinceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", Object)
], SetupProvinceComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__["a" /* TableComponent */]),
    __metadata("design:type", Object)
], SetupProvinceComponent.prototype, "respon", void 0);
SetupProvinceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setup-province',
        template: __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */]) === "function" && _a || Object])
], SetupProvinceComponent);

var _a;
//# sourceMappingURL=setup-province.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.html":
/***/ (function(module, exports) {

module.exports = "<app-form *ngIf=\"form\"\n\t[label]=\"form.label\" \n\t[properties]=\"form.properties\" \n\t[action]=\"form.action\"\n\t[data]=\"form.data\"\n\t[service]=\"form.service\"\n\t(response)=\"response($event)\"\n></app-form>\n\n<div  *ngIf=\"table\">\t\n\t<app-table \n\t\t[label]=\"table.label\" \n\t\t[list]=\"table.list\" \n\t\t[setting]=\"table.setting\"\n\t\t(action)=\"action($event)\">\n\t</app-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupStoreComponent = (function () {
    function SetupStoreComponent(rest) {
        this.rest = rest;
    }
    SetupStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.read("/api/setup/store").subscribe(function (result) {
            _this.table = result.table;
            _this.form = result.form;
        });
    };
    SetupStoreComponent.prototype.action = function (event) {
        if (event.data != undefined) {
            event.data.type = "Store";
        }
        else {
            event.data = { type: "Store" };
        }
        this.container.openModal(event);
    };
    SetupStoreComponent.prototype.response = function (event) {
        this.respon.response(event);
    };
    return SetupStoreComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", Object)
], SetupStoreComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__["a" /* TableComponent */]),
    __metadata("design:type", Object)
], SetupStoreComponent.prototype, "respon", void 0);
SetupStoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setup-store',
        template: __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */]) === "function" && _a || Object])
], SetupStoreComponent);

var _a;
//# sourceMappingURL=setup-store.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-form *ngIf=\"form\"\n\t[label]=\"form.label\" \n\t[properties]=\"form.properties\" \n\t[action]=\"form.action\"\n\t[data]=\"form.data\"\n\t[service]=\"form.service\"\n\t(response)=\"response($event)\"\n></app-form>\n\n<div  *ngIf=\"table\">\t\n\t<app-table \n\t\t[label]=\"table.label\" \n\t\t[list]=\"table.list\" \n\t\t[setting]=\"table.setting\"\n\t\t(action)=\"action($event)\">\n\t</app-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupZoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupZoneComponent = (function () {
    function SetupZoneComponent(rest) {
        this.rest = rest;
    }
    SetupZoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.read("/api/setup/zone").subscribe(function (result) {
            _this.table = result.table;
            _this.form = result.form;
        });
    };
    SetupZoneComponent.prototype.action = function (event) {
        if (event.data != undefined) {
            event.data.type = "Zone";
        }
        else {
            event.data = { type: "Zone" };
        }
        this.container.openModal(event);
    };
    SetupZoneComponent.prototype.response = function (event) {
        this.respon.response(event);
    };
    return SetupZoneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_components_form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", Object)
], SetupZoneComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_components_table_table_component__["a" /* TableComponent */]),
    __metadata("design:type", Object)
], SetupZoneComponent.prototype, "respon", void 0);
SetupZoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setup-zone',
        template: __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopbackv2_service__["a" /* Loopbackv2Service */]) === "function" && _a || Object])
], SetupZoneComponent);

var _a;
//# sourceMappingURL=setup-zone.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar>\n    <a md-tab-link\n        *ngFor=\"let routeLink of routeLinks; let i = index\"\n         [routerLink]=\"routeLink.link\"\n         [active]=\"activeLinkIndex === i\"\n         (click)=\"activeLinkIndex = i\">\n         {{routeLink.label}}\n     </a>\n</nav>\n<br/><br/>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ceo/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupComponent = (function () {
    function SetupComponent(location) {
        this.location = location;
        this.routeLinks = [
            { label: 'Province', link: 'province' },
            { label: 'Zone', link: 'zone' },
            { label: "Branch", link: "branch" },
            { label: "Store", link: "store" }
        ];
        this.activeLinkIndex = 0;
    }
    SetupComponent.prototype.ngOnInit = function () {
        this.activeNav(this.location.path());
    };
    SetupComponent.prototype.activeNav = function (path) {
        var paths = path.split("/");
        var config = { province: 0, zone: 1, branch: 2, store: 3 };
        this.activeLinkIndex = config[paths[3]];
    };
    return SetupComponent;
}());
SetupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setup',
        template: __webpack_require__("../../../../../src/app/pages/ceo/setup/setup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ceo/setup/setup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], SetupComponent);

var _a;
//# sourceMappingURL=setup.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/alarm/alarm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/alarm/alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div  *ngIf=\"table\">\t\n\t\t<app-table \n\t\t\t[label]=\"table.label\" \n\t\t\t[list]=\"table.list\" \n\t\t\t[setting]=\"table.setting\"\n\t\t\t(action)=\"searchDate($event)\">\n\t\t</app-table>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/alarm/alarm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlarmComponent = (function () {
    function AlarmComponent(loopback) {
        this.loopback = loopback;
    }
    AlarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("alarm", {}).subscribe(function (result) {
            _this.table = result;
        });
    };
    AlarmComponent.prototype.searchDate = function (event) {
        console.log(event);
    };
    return AlarmComponent;
}());
AlarmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alarm',
        template: __webpack_require__("../../../../../src/app/pages/home/alarm/alarm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/alarm/alarm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object])
], AlarmComponent);

var _a;
//# sourceMappingURL=alarm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home-dashboard/home-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <span class=\"pull-right\">\n          <md-select placeholder=\"Add New Location\" [(ngModel)]=\"select\" (change)=\"addView(select)\" \n          name=\"select\" [ngStyle]=\"{'margin-top':-15+'px'}\">\n            <md-option *ngFor=\"let select of store\" [value]=\"select\">\n              {{select.label}}\n            </md-option>\n          </md-select>\n        </span>\n        <p class=\"text\" [ngStyle]=\"{'margin-top':3+'px', 'font-weight':'bold', 'font-size':18+'px'}\">Group View</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" [dragula]='\"another-bag\"' [dragulaModel]='dataStore'>\n  <div class=\"col-md-3\" *ngFor=\"let data of dataStore\">\n    <app-widget [template]=\"'dashboard'\" [config]=\"data\" (action)=\"myAction($event)\">\n    </app-widget>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home-dashboard/home-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeDashboardComponent = (function () {
    function HomeDashboardComponent(dragulaService, history, loopback) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.history = history;
        this.loopback = loopback;
        // @Input() store:Array<any>;
        this.dataStore = [];
        this.dataCookies = [];
        this.store = [];
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
    }
    HomeDashboardComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
    };
    HomeDashboardComponent.prototype.addView = function (select) {
        var cookies = {};
        for (var i in this.store) {
            if (this.store[i].id == select.id) {
                cookies = { id: this.store[i].id, type: "watthour", view: ["temperature"] };
                this.dataCookies.push(cookies);
                this.history.setGroup(this.dataCookies);
                this.getWidget(this.store[i], cookies);
                this.store.splice(parseInt(i), 1);
            }
        }
    };
    HomeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("dashboard", {}).subscribe(function (result) {
            _this.store = result;
            if (_this.history.groupStore == null) {
                _this.dataCookies = [];
            }
            else {
                _this.dataCookies = _this.history.groupStore;
            }
            console.log(_this.store);
            if (_this.dataCookies.length != 0) {
                for (var i in _this.dataCookies) {
                    for (var j in _this.store) {
                        if (_this.store[j].id == _this.dataCookies[i].id) {
                            _this.getWidget(_this.store[j], _this.dataCookies[i]);
                            _this.store.splice(parseInt(j), 1);
                        }
                    }
                }
            }
        });
    };
    HomeDashboardComponent.prototype.getWidget = function (store, cookies) {
        var copyObject = {};
        var array = Object.keys(store.information);
        for (var i in array) {
            var obj = cookies.view[i];
            if (obj != undefined) {
                copyObject[obj] = store.information[obj];
            }
        }
        if (store.id == cookies.id) {
            store.information = copyObject;
            this.dataStore.push(store);
        }
    };
    HomeDashboardComponent.prototype.myAction = function (event) {
        console.log(event);
    };
    return HomeDashboardComponent;
}());
HomeDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-dashboard',
        template: __webpack_require__("../../../../../src/app/pages/home/home-dashboard/home-dashboard.component.html"),
        styles: []
        // animations: [animations()],
        // host: {'[@routerTransition]': ''}
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__["a" /* HistoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _c || Object])
], HomeDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=home-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\">\n        </div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <div class=\"main-content\">\n            <div class=\"container-fluid\">\n                <main [@routerTransition]=\"getState(o)\">\n                   <router-outlet #o=\"outlet\"></router-outlet>\n                </main>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_animations__ = __webpack_require__("../../../../../src/app/tools/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_1__tools_animations__["a" /* routerTransition */]],
        styles: []
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-alarm/store-alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <app-widget *ngFor=\"let widget of widget\" \n        [template]=\"'default'\" \n        [config]=\"widget\" \n        [label]=\"widget.label\"\n        class=\"col-md-2 col-xs-12\">\n    </app-widget>\n</div>\n\n\n<div  *ngIf=\"table\">\t\n\t<app-table \n\t\t[label]=\"table.label\" \n\t\t[list]=\"table.list\" \n\t\t[setting]=\"table.setting\"\n\t\t(action)=\"userAction($event)\">\n\t</app-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-alarm/store-alarm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAlarmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreAlarmComponent = (function () {
    function StoreAlarmComponent(loopback, router) {
        this.loopback = loopback;
        this.router = router;
    }
    StoreAlarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("store-alarm", {}).subscribe(function (result) {
            _this.table = result.table;
            _this.widget = result.widget;
        });
    };
    StoreAlarmComponent.prototype.userAction = function (event) {
        if (event.action == "view") {
            this.router.navigate(["/home/store/detail/:id/:type", { id: event.data.id, type: "alarm" }
            ]);
        }
    };
    return StoreAlarmComponent;
}());
StoreAlarmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-alarm',
        template: __webpack_require__("../../../../../src/app/pages/home/store/store-alarm/store-alarm.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StoreAlarmComponent);

var _a, _b;
//# sourceMappingURL=store-alarm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-dashboard/store-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <app-widget *ngFor=\"let widget of widgets\" \n            [template]=\"'default'\" \n            [config]=\"widget\" \n            [label]=\"widget.label\"\n            class=\"col-md-2 col-xs-12\">\n        </app-widget>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n     <div class=\"row\">\n        <div class=\"col-md-6 col-xs-12\">\n                <app-area (emitBuilding)=\"building($event)\" [typeView]=\"space\" *ngIf=\"space == 'building'\"></app-area>\n                \n                <app-chart [type]=\"'bar_chart'\" [label]=\"watthour.label\"\n                 [hidden]=\"space == 'building'\" *ngIf=\"watthour\"\n                 (typeChart)=\"setBarChart($event)\" [dataset]=\"watthour.dataset\">    \n                </app-chart>\n        </div>\n\n        <div class=\"col-md-6 col-xs-12\">\n            <app-area *ngIf=\"items\" [dataBuilding]=\"buildingData\" \n                      [item]=\"items\" \n                      (viewBuilding)=\"area($event)\"\n                      (event)=\"saveEquipment($event)\"></app-area>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <app-chart [type]=\"'line_chart'\" *ngIf=\"watt\" [dataset]=\"watt\">\n            </app-chart>\n        </div>  \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-dashboard/store-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreDashboardComponent = (function () {
    function StoreDashboardComponent(loopback, history) {
        this.loopback = loopback;
        this.history = history;
        this.space = 'chart';
    }
    StoreDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("store-dashboard", {
            latitude: this.history.location.latitude,
            longitude: this.history.location.longitude
        }).subscribe(function (result) {
            _this.widgets = result.widget;
            _this.items = result.item;
            _this.watthour = result.watthour;
            _this.watt = result.watt;
        });
    };
    StoreDashboardComponent.prototype.setBarChart = function (value) {
        var _this = this;
        this.loopback.getService("store-dashboard/chart", { categoryChart: "watthour", typeChart: value })
            .subscribe(function (result) {
            _this.watthour = result;
        });
    };
    StoreDashboardComponent.prototype.area = function (event) {
        this.space = event;
    };
    StoreDashboardComponent.prototype.building = function (event) {
        this.buildingData = event;
    };
    return StoreDashboardComponent;
}());
StoreDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-dashboard',
        template: __webpack_require__("../../../../../src/app/pages/home/store/store-dashboard/store-dashboard.component.html"),
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */]) === "function" && _b || Object])
], StoreDashboardComponent);

var _a, _b;
//# sourceMappingURL=store-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-detail/resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResolveService = (function () {
    function ResolveService(history, service) {
        this.history = history;
        this.service = service;
    }
    ResolveService.prototype.resolve = function (route) {
        var lat = this.history.location['latitude'];
        var long = this.history.location['longitude'];
        var id = route.params['id'];
        var type = route.params['type'];
        return this.service.getService('store-detail', { latitude: 12, longitude: 12, id: id, type: type });
    };
    return ResolveService;
}());
ResolveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_history_service__["a" /* HistoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _b || Object])
], ResolveService);

var _a, _b;
//# sourceMappingURL=resolve.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-detail/store-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textSubject{\n\theight: 200px;\n\twidth: 100%;\n   margin-top: 5px;\n}\n.textSend{\n\theight: auto;\n\twidth: 95%;\t\n   margin-top: 7px;\n}\n.btn-mail{\n\t margin-top :6px;\n\t border-radius: 5px;\n\t float: right;\n\t font-family: arial black;\n    margin: 10px 17px 0px 1px;\n}\n::-webkit-input-placeholder {\n   text-align: center;\n   padding-top:75px;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n   text-align: center;\n   padding-top:75px;\n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n   text-align: center;\n   padding-top:75px;\n}\n\n:-ms-input-placeholder {  \n   text-align: center;\n   padding-top:75px;\n}\n.card-header.card-header-icon{\n\tfloat: left;\n\theight: 62px;\n\twidth: 62px;\n   text-align: center;\n   line-height: 43px;\n   margin: -22px 0px 0px 14px;\n   background-color: #ea4643;\n}\n.close{\n   margin: -20px 0px 0px 10px;\n   font-size: 13px;\n   cursor: pointer;\n   color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-detail/store-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\t\t\n\t\t\t<app-table \n\t\t\t\t[label]=\"'Detail '+detail.type\" \n\t\t\t\t[list]=\"detail.data\" \n\t\t\t\t[setting]=\"undefined\"\n\t\t\t\t(action)=\"userAction($event)\">\n\t\t\t</app-table>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<textarea type=\"text\" class=\"textSubject\" placeholder=\"Subject\" [(ngModel)]=\"subject\"></textarea>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<div *ngFor=\"let input of usrInput\">\n\t\t\t\t\t<input  class=\"textSend\" placeholder=\"Email Address\" [(ngModel)]=\"email[input]\">\n\t\t\t\t\t<i class=\"fa fa-times close\" *ngIf=\"input != 1\" (click)=\"close(input)\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"button btn-primary btn-mail\" (click)=\"addInput()\">Add Email</button>\n\t\t\t<button class=\"button btn-primary btn-mail\" (click)=\"sendMail()\" [ngStyle]=\"{'margin-right':5+'px'}\">Send Email\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-detail/store-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreDetailComponent = (function () {
    function StoreDetailComponent(service, route) {
        this.service = service;
        this.route = route;
        this.email = {};
        this.usrInput = [1];
    }
    StoreDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.detail = data.GET;
        });
    };
    StoreDetailComponent.prototype.addInput = function () {
        if (this.usrInput.length <= 4) {
            this.usrInput.push(this.usrInput.length + 1);
        }
    };
    StoreDetailComponent.prototype.close = function (id) {
        for (var i in this.usrInput) {
            if (this.usrInput[i] == id) {
                this.usrInput.splice(parseInt(i), 1);
            }
        }
        delete this.email[id];
    };
    StoreDetailComponent.prototype.sendMail = function () {
    };
    return StoreDetailComponent;
}());
StoreDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-detail',
        template: __webpack_require__("../../../../../src/app/pages/home/store/store-detail/store-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/store/store-detail/store-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], StoreDetailComponent);

var _a, _b;
//# sourceMappingURL=store-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-inventory/store-inventory.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-form *ngIf=\"form\"\n\t[label]=\"form.label\" \n\t[properties]=\"form.properties\" \n\t[action]=\"form.action\"\n\t[data]=\"form.data\"\n\t[service]=\"form.service\"\n\t(response)=\"onResponse($event)\"\n></app-form>\n\n<div class=\"container-fluid\">\n\t<div  *ngIf=\"table\">\t\n\t\t<app-table \n\t\t\t[label]=\"table.label\" \n\t\t\t[list]=\"table.list\" \n\t\t\t[setting]=\"table.setting\"\n\t\t\t(action)=\"userAction($event)\">\n\t\t</app-table>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store-inventory/store-inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreInventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreInventoryComponent = (function () {
    function StoreInventoryComponent(loopback, history) {
        this.loopback = loopback;
        this.history = history;
    }
    StoreInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopback.getService("store-inventory", { id: 4 })
            .subscribe(function (result) {
            _this.table = result.table;
            _this.form = result.form;
        });
    };
    StoreInventoryComponent.prototype.userAction = function (event) {
        if (event.action == "create") {
            event.data = { top: 20, left: 20, id_store: 1 };
        }
        this.formContainer.openModal(event);
    };
    StoreInventoryComponent.prototype.onResponse = function (event) {
        this.tableContainer.response(event);
    };
    return StoreInventoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_components_form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", Object)
], StoreInventoryComponent.prototype, "formContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__shared_components_table_table_component__["a" /* TableComponent */]),
    __metadata("design:type", Object)
], StoreInventoryComponent.prototype, "tableContainer", void 0);
StoreInventoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-inventory',
        template: __webpack_require__("../../../../../src/app/pages/home/store/store-inventory/store-inventory.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loopback_service__["a" /* LoopbackService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_history_service__["a" /* HistoryService */]) === "function" && _b || Object])
], StoreInventoryComponent);

var _a, _b;
//# sourceMappingURL=store-inventory.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<nav md-tab-nav-bar style=\"margin-top: -40px;\">\n    <a md-tab-link\n        *ngFor=\"let routeLink of routeLinks; let i = index\"\n         [routerLink]=\"routeLink.link\"\n         [active]=\"activeLinkIndex === i\"\n         (click)=\"activeLinkIndex = i\">\n         {{routeLink.label}}\n     </a>\n</nav>\n<br/><br/>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreComponent = (function () {
    function StoreComponent(location) {
        this.location = location;
        this.routeLinks = [
            { label: 'Dashboard', link: 'dashboard' },
            { label: 'Inventory', link: 'inventory' },
            { label: "Alarm", link: "alarm" }
        ];
        this.activeLinkIndex = 0;
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.activeNav(this.location.path());
    };
    StoreComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    StoreComponent.prototype.activeNav = function (path) {
        var paths = path.split("/");
        var config = { dashboard: 0, inventory: 1, alarm: 2 };
        this.activeLinkIndex = config[paths[3]];
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/pages/home/store/store.component.html"),
        animations: [],
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], StoreComponent);

var _a;
//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_materials__ = __webpack_require__("../../../../../src/app/tools/materials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__template_template_module__ = __webpack_require__("../../../../../src/app/template/template.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_alarm_alarm_component__ = __webpack_require__("../../../../../src/app/pages/home/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_store_store_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_store_store_dashboard_store_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-dashboard/store-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_store_store_inventory_store_inventory_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-inventory/store-inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_store_store_alarm_store_alarm_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-alarm/store-alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ceo_ceo_component__ = __webpack_require__("../../../../../src/app/pages/ceo/ceo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ceo_setup_setup_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ceo_ceo_dashboard_ceo_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/ceo/ceo-dashboard/ceo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_dashboard_home_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/home/home-dashboard/home-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ceo_maps_view_maps_view_component__ = __webpack_require__("../../../../../src/app/pages/ceo/maps-view/maps-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ceo_maps_filter_maps_filter_component__ = __webpack_require__("../../../../../src/app/pages/ceo/maps-filter/maps-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ceo_setup_setup_province_setup_province_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-province/setup-province.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ceo_setup_setup_zone_setup_zone_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-zone/setup-zone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ceo_setup_setup_branch_setup_branch_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-branch/setup-branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ceo_setup_setup_store_setup_store_component__ = __webpack_require__("../../../../../src/app/pages/ceo/setup/setup-store/setup-store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_store_store_detail_store_detail_component__ = __webpack_require__("../../../../../src/app/pages/home/store/store-detail/store-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__template_template_module__["a" /* TemplateModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__tools_materials__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_alarm_alarm_component__["a" /* AlarmComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_store_store_dashboard_store_dashboard_component__["a" /* StoreDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_store_store_inventory_store_inventory_component__["a" /* StoreInventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_store_store_alarm_store_alarm_component__["a" /* StoreAlarmComponent */],
            __WEBPACK_IMPORTED_MODULE_16__ceo_ceo_component__["a" /* CeoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__ceo_setup_setup_component__["a" /* SetupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ceo_ceo_dashboard_ceo_dashboard_component__["a" /* CeoDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_home_dashboard_home_dashboard_component__["a" /* HomeDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ceo_maps_view_maps_view_component__["a" /* MapsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ceo_maps_filter_maps_filter_component__["a" /* MapsFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ceo_setup_setup_province_setup_province_component__["a" /* SetupProvinceComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ceo_setup_setup_zone_setup_zone_component__["a" /* SetupZoneComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ceo_setup_setup_branch_setup_branch_component__["a" /* SetupBranchComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ceo_setup_setup_store_setup_store_component__["a" /* SetupStoreComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_store_store_detail_store_detail_component__["a" /* StoreDetailComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/area/area.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"col-lg-12\" *ngIf=\"type == 'building'\">\n\t\t<div class=\"card card-stats\">\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<tabset justified=\"true\">\n\t\t\t\t\t<tab>\n\t\t\t\t    \t<ng-template tabHeading>\n\t\t\t\t    \t\t<i class=\"material-icons\" [ngStyle]=\"{'font-size':18+'px'}\">input</i>\n\t\t\t\t    \t</ng-template><br>\n\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':80+'%','font-family':'Times New Roman, Times, serif','font-size':16+'px'}\">Door 1</span>\n\t\t\t\t    \t<div [ngStyle]=\"{'margin-right':30+'%'}\">\n\t\t\t                   <div class=\"btn-group\">\n\t\t\t\t                    <button type=\"button\" class=\"btn-default\" (dblclick)=\"addBuilding('door1','left','')\"><div class=\"door1-left\"></div></button>\n\t\t\t\t                    <button type=\"button\" class=\"btn-default\" (dblclick)=\"addBuilding('door1','top','')\"><div class=\"door1-top\"></div></button>\n\t\t\t\t                    <button type=\"button\" class=\"btn-default\" (dblclick)=\"addBuilding('door1', 'right','')\"><div class=\"door1-right\"></div></button>\n\t\t\t\t                    <button type=\"button\" class=\"btn-default\" (dblclick)=\"addBuilding('door1','bottom', '')\"><div class=\"door1-bottom\"></div></button>\n\t\t\t                  </div><br>\n                \t\t\t<em class=\"text-muted\" [ngStyle]=\"{'font-size':13+'px'}\">please double tap to bottom</em>\n\t\t\t\t    \t</div>\n\t\t\t\t    </tab>\n\n\t\t\t\t    <tab>\n\t\t\t\t    \t<ng-template tabHeading>\n\t\t\t\t    \t\t2<i class=\"material-icons\" [ngStyle]=\"{'font-size':18+'px'}\">input</i>\n\t\t\t\t    \t</ng-template><br>\n\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':80+'%','font-family':'Times New Roman, Times, serif', 'font-size':16+'px'}\">Door 2</span>\n\t\t\t\t    \t<div [ngStyle]=\"{'margin-right':30+'%'}\">\n\t\t\t                <div class=\"btn-group\" [ngStyle]=\"{'margin-right':-15+'%'}\">\n\t\t\t                    <button type=\"button\" class=\"btn-default\" style=\"height: 75px;\" (dblclick)=\"addBuilding('door2','left','')\"><div class=\"door-left\" style=\"margin-top: -30px;\"><div class=\"door-left1\"></div></div></button>\n\t\t\t                    <button type=\"button\" class=\"btn-default\" style=\"height: 75px;width: 75px;\" \n\t\t\t                    (dblclick)=\"addBuilding('door2','top','')\"><div class=\"door-top\" style=\"margin-left: -5px;\"><div class=\"door-top1\"></div></div></button>\n\t\t\t                    <button type=\"button\" class=\"btn-default\" style=\"height: 75px;\" (dblclick)=\"addBuilding('door2','right','')\"><div class=\"door-right\" style=\"margin-top: -30px;\"><div class=\"door-right1\"></div></div></button>\n\t\t\t                    <button type=\"button\" class=\"btn-default\" style=\"height: 75px;width: 75px;\" \n\t\t\t                    (dblclick)=\"addBuilding('door2','bottom','')\"><div class=\"door-bottom\" style=\"margin-left: -5px;\"><div class=\"door-bottom1\"></div></div></button>\n\t\t\t                </div><br>\n\t\t\t\t    \t\t<em class=\"text-muted\" [ngStyle]=\"{'font-size':13+'px'}\">please double tap to bottom</em>\n\t\t\t\t    \t</div>\n\t\t\t\t    </tab>\n\n\t\t\t\t  \t<tab>\n\t\t\t\t    \t<ng-template tabHeading>\n\t\t\t\t    \t\t<md-icon class=\"fa fa-television\" [ngStyle]=\"{'font-size':18+'px'}\"></md-icon>\n\t\t\t\t    \t</ng-template><br>\n\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':80+'%','font-family':'Times New Roman, Times, serif','font-size':16+'px'}\">Cashier</span>\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':30+'%'}\" >\n\t\t\t\t\t\t    \t<button type=\"button\" class=\"btn-default btn-lg\" [ngStyle]=\"{'margin-right':45+'%'}\"\n\t\t\t\t\t\t    \t(dblclick)=\"addBuilding('cashier','','Cashier')\">\n\t\t\t\t\t\t    \t\t<md-icon class=\"fa fa-television\" [ngStyle]=\"{'font-size':18+'px'}\"></md-icon>\n\t\t\t\t\t\t    \t</button><br><br>\n\t\t\t\t\t\t\t<em class=\"text-muted\" [ngStyle]=\"{'font-size':13+'px'}\">please double tap to bottom</em>\n\t\t\t\t\t\t</span>\n\t\t\t\t    </tab>\n\n\t\t\t\t\t<tab>\n\t\t\t\t    \t<ng-template tabHeading>\n\t\t\t\t    \t\t<i class=\"material-icons\" [ngStyle]=\"{'font-size':18+'px'}\">pause</i>\n\t\t\t\t    \t</ng-template><br>\n\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':80+'%','font-family':'Times New Roman, Times, serif','font-size':16+'px'}\">Rack</span>\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':30+'%'}\">\n\t\t\t\t    \t\t<div class=\"btn-group\" [ngStyle]=\"{'margin-right':10+'%'}\">\n\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn-default btn-lg\" style=\"width: 150px;height: 30px;\" (dblclick)=\"addBuilding('rack5x1','','Rack 5x1')\">\n\t\t\t\t\t    \t\t<p [ngStyle]=\"{'font-size':13+'px', 'margin-top':-5+'px'}\">Rack 5X1</p></button>\n\t\t\t                    <button type=\"button\" class=\"btn-default btn-lg\" style=\"width: 130px;height: 40px;\" (dblclick)=\"addBuilding('rack5x2','','Rack 5x2')\">\n\t\t\t                    <p [ngStyle]=\"{'font-size':13+'px'}\">Rack 5X2</p></button>\n\t\t\t                    <button type=\"button\" class=\"btn-default btn-lg rack2x2\"\n\t\t\t                    (dblclick)=\"addBuilding('rack2x2','' ,'Rack 2x2')\">\n\t\t\t                    <p [ngStyle]=\"{'font-size':12+'px'}\">Rack 2X2</p></button>\n\t\t                    </div><br><br>\n\t\t                    <em class=\"text-muted\" [ngStyle]=\"{'font-size':13+'px'}\">please double tap to bottom</em>\n\t\t\t\t    \t</span>\n\t\t\t\t    </tab>\n\n\t\t\t\t    <tab>\n\t\t\t\t    \t<ng-template tabHeading>\n\t\t\t\t    \t\t<md-icon class=\"fa fa-building\" [ngStyle]=\"{'font-size':18+'px'}\"></md-icon>\n\t\t\t\t    \t</ng-template><br>\n\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':80+'%','font-family':'Times New Roman, Times, serif','font-size':16+'px'}\">ATM</span>\n\t\t\t\t    \t<span [ngStyle]=\"{'margin-right':30+'%'}\">\n\t\t                    \t<button type=\"button\" class=\"btn-default btn-lg\"\n\t\t                    \t(dblclick)=\"addBuilding('atm','', 'ATM')\" \n\t\t                    \t[ngStyle]=\"{'margin-right':45+'%'}\"><div class=\"ATM\"><div class=\"txtatm\">ATM</div></div></button><br><br>\n\t\t\t\t    \t\t<em class=\"text-muted\" [ngStyle]=\"{'font-size':13+'px'}\">please double tap to bottom</em>\n\t\t\t\t    \t</span>\n\t\t\t\t    </tab>\n\t\t\t\t</tabset>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<div class=\"card\" *ngIf=\"type != 'building'\">\n\t<div class=\"card-content\">\n\t\t<em *ngIf=\"typeSave == 'building'\" [ngStyle]=\"{'font-size':13+'px'}\">\n\t\t\tplease double tap to delete building ...\n\t\t</em>\n\t\t<button class=\"btn-xs btn-default\" [ngStyle]=\"{'margin-top':-7+'px', float:'right'}\" *ngIf=\"!draggableEnabled\" (click)=\"draggableEnabled=true\" (click)=\"Edit('building')\">Edit Building\n\t\t<md-icon class=\"fa fa-building-o\"></md-icon></button>\n\t\t<button class=\"btn-xs btn-default\" [ngStyle]=\"{'margin-top':-7+'px', float:'right'}\" *ngIf=\"!draggableEnabled\" (click)=\"draggableEnabled=true\" (click)=\"Edit('item')\">Edit Item\n\t\t<md-icon class=\"fa fa-arrows\"></md-icon></button>\n\t\t<button class=\"btn-xs btn-default\" [ngStyle]=\"{'margin-top':-5+'px', float:'right'}\" *ngIf=\"draggableEnabled\" (click)=\"draggableEnabled=!draggableEnabled\" (click)=\"cancel(undefined)\">Cancel\n\t\t<md-icon class=\"fa fa-undo\"></md-icon></button>\n\t\t<button class=\"btn-xs btn-default\" [ngStyle]=\"{'margin-top':-5+'px', float:'right'}\" *ngIf=\"draggableEnabled\" (click)=\"draggableEnabled=!draggableEnabled\" (click)=\"save(undefined)\">Save\n\t\t<md-icon class=\"fa fa-floppy-o\"></md-icon></button>\n\n\t</div>\n\n\t\n\t<div [ngStyle]=\"{'padding-left':8+'px', 'padding-right':8+'px',\n\t\t'padding-bottom':8+'px','padding-top':5+'px'}\">\n\t\t<div class=\"card-content card-shdw\" [ngStyle]=\"{'padding-left':5+'px', 'padding-right':5+'px',\n\t\t\t\t\t'padding-bottom':5+'px','padding-top':4+'px'}\">\n\t\t\t<div id=\"container\">\n\t\t\t\t<div *ngIf=\"typeSave == 'item' || typeSave == undefined\">\n\n\t\t\t\t<!-- \t<span *ngFor=\"let items of item\" [ngDraggable]=\"draggableEnabled==true\"\n\t\t\t\t\t\t   [ngStyle]=\"{position:'absolute', 'left':items.left+'%', 'top':items.top+'px', width:10+'%'}\" [id]=\"items.id\" (click)=\"move(items.id, items.styles)\"> -->\n\t\t\t\t\t<span *ngFor=\"let items of item;let i = index;\" \n\t\t\t\t\t[ng2-draggable]=\"draggableEnabled==true\"\n\t\t\t\t\t\t   [ngStyle]=\"{position:'absolute', 'left':items.left+'px', 'top':items.top+'px', width:10+'%'}\" [id]=\"items.id\" \n\t\t\t\t\t\t   (stopped)=\"onDragEnd($event,items.id,i)\">\n\t\t\t\t\t\t\t<app-item *ngIf=\"items.styles == 'ac'      ||\n\t\t\t\t\t\t\t \t\t\t\t items.styles == 'chiller' || \n\t\t\t\t\t\t\t \t\t\t\t items.styles == 'pump'    ||\n\t\t\t\t\t\t\t \t\t\t\t items.styles == 'temperature'\" [config]=\"items\">\n\t\t\t\t\t\t    </app-item>\n\t\t\t\t\t</span>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"typeSave == 'building' || typeSave == undefined\">\n\t\t\t\t\t<div [ng2-draggable]=\"draggableEnabled == true\" *ngFor=\"let items of item\" [ngStyle]=\"\t\t \t\t {position:'absolute','left':items.left+'px','top':items.top+'px', width:100+'%'}\"\n\t\t\t\t\t\t [id]=\"items.id\" (click)=\"move(items.id, items.styles)\">\n\n\t\t\t\t\t\t<span *ngIf=\"typeSave == 'building'\" (dblclick)=\"delete(items.id)\">\n\t\t\t\t\t\t\t \t<app-item *ngIf=\"items.styles == 'door2'   ||\n\t\t\t\t\t\t\t \t\t\t\t     items.styles == 'door1'   || \n\t\t\t\t\t\t\t \t\t\t\t  \t items.styles == 'rack2x2' ||\n\t\t\t\t\t\t\t \t\t\t\t  \t items.styles == 'rack5x1' ||\n\t\t\t\t\t\t\t \t\t\t\t  \t items.styles == 'rack5x2' ||\n\t\t\t\t\t\t\t \t\t\t\t  \t items.styles == 'cashier' ||\n\t\t\t\t\t\t\t \t\t\t\t  \t items.styles == 'atm'\" [config]=\"items\">\t\n\t\t\t\t\t\t\t \t</app-item>\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span *ngIf=\"typeSave == undefined\">\n\t\t\t\t\t \t \t\t<app-item *ngIf=\"items.styles == 'door2'  ||\n\t\t\t\t\t\t \t\t\t\t         items.styles == 'door1'  || \n\t\t\t\t\t\t \t\t\t\t  \t     items.styles == 'rack2x2'||\n\t\t\t\t\t\t \t\t\t\t  \t     items.styles == 'rack5x1'||\n\t\t\t\t\t\t \t\t\t\t  \t     items.styles == 'rack5x2'||\n\t\t\t\t\t\t \t\t\t\t  \t     items.styles == 'cashier'||\n\t\t\t\t\t\t \t\t\t\t  \t     items.styles == 'atm'\"  [config]=\"items\">\n\t\t\t\t\t\t \t\t</app-item>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/area/area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\n  height: 305px;\n  width: 100%;\n  border: 2px solid;\n  position: relative;\n  overflow-x: hidden; }\n\n.ng-draggable {\n  cursor: move; }\n\n.card-shdw {\n  box-shadow: 0 2px 2px 0 #4393c8; }\n\n.card-shdw:hover {\n  box-shadow: 0 4px 5px 0 #4393c8; }\n\nbutton {\n  outline: none;\n  border-radius: 4px;\n  box-shadow: 0 2px #999; }\n\nbutton:active {\n  box-shadow: 0 1px #666;\n  -webkit-transform: translateY(3px);\n          transform: translateY(3px); }\n\n/*building item*/\n/*DOOR*/\n.door-right {\n  width: 30px;\n  height: 30px;\n  border-bottom: 1px solid;\n  border-left: 1px solid;\n  border-right: 5px solid white;\n  border-top: 3px solid;\n  border-bottom-left-radius: 65px; }\n\n.door-right1 {\n  width: 30px;\n  height: 30px;\n  border-bottom: 3px solid;\n  border-left: 1px solid;\n  border-right: 5px solid white;\n  border-top: 1px solid;\n  border-top-left-radius: 65px;\n  margin-top: 26px; }\n\n.door-top {\n  width: 30px;\n  height: 30px;\n  border-bottom: 1px solid;\n  border-left: 3px solid;\n  border-right: 1px solid;\n  border-top: 5px solid white;\n  border-bottom-right-radius: 65px; }\n\n.door-top1 {\n  width: 30px;\n  height: 30px;\n  border-bottom: 1px solid;\n  border-left: 1px solid;\n  border-right: 3px solid;\n  border-top: 5px solid white;\n  border-bottom-left-radius: 65px;\n  margin-left: 26px;\n  margin-top: -5px; }\n\n.door-left {\n  width: 30px;\n  height: 30px;\n  border-left: 5px solid white;\n  border-right: 1px solid;\n  border-top: 3px solid;\n  border-bottom: 1px solid;\n  border-bottom-right-radius: 65px; }\n\n.door-left1 {\n  width: 30px;\n  height: 30px;\n  border-bottom: 3px solid;\n  border-left: 5px solid white;\n  border-right: 1px solid;\n  border-top: 1px solid;\n  border-top-right-radius: 65px;\n  margin-top: 26px;\n  margin-left: -5px; }\n\n.door-bottom {\n  width: 30px;\n  height: 30px;\n  border-bottom: 5px solid white;\n  border-left: 3px solid;\n  border-right: 1px solid;\n  border-top: 1px solid;\n  border-top-right-radius: 60px; }\n\n.door-bottom1 {\n  width: 30px;\n  height: 30px;\n  border-bottom: 5px solid white;\n  border-left: 1px solid;\n  border-right: 3px solid;\n  border-top: 1px solid;\n  border-top-left-radius: 60px;\n  margin-left: 26px; }\n\n.door1-left {\n  width: 25px;\n  height: 25px;\n  border-top: 1px solid;\n  border-right: 1px solid;\n  border-left: 3px solid white;\n  border-bottom: 3px solid;\n  border-top-right-radius: 60px; }\n\n.door1-bottom {\n  width: 25px;\n  height: 25px;\n  border-right: 3px solid;\n  border-top: 1px solid;\n  border-left: 1px solid;\n  border-bottom: 3px solid white;\n  border-top-left-radius: 65px; }\n\n.door1-right {\n  width: 25px;\n  height: 25px;\n  border-right: 3px solid white;\n  border-top: 3px solid;\n  border-left: 1px solid;\n  border-bottom: 1px solid;\n  border-bottom-left-radius: 65px; }\n\n.door1-top {\n  width: 25px;\n  height: 25px;\n  border-right: 3px solid;\n  border-left: 1px solid;\n  border-bottom: 1px solid;\n  border-top: 3px solid white;\n  border-bottom-left-radius: 65px; }\n\n.ATM {\n  width: 27px;\n  height: 20px;\n  position: relative;\n  border: 2px solid #474e5d;\n  border-radius: 1px;\n  box-shadow: 5px 5px 3px #888888;\n  font-size: 10px; }\n\n.txtatm {\n  font-size: 8px;\n  margin: 3px 0px 5px 0px;\n  font-weight: bold; }\n\n.frame {\n  border-top: 2px solid #444;\n  border-bottom: 2px solid #444; }\n\n.rack2x2 {\n  margin: 8px 0px -17px 3px;\n  height: 38px;\n  width: 22%; }\n\n.rack2x2 > p {\n  margin: -2px 0px -1px -6px;\n  font-size: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/area/area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Fungsi dari komponen Area adalah untuk menerima data equipment dari parent komponen dan menjadikan data
tersebut menjadi icon berdasarkan property type pada data yang telah diterima.
*/
var AreaComponent = (function () {
    function AreaComponent(router) {
        this.router = router;
        /*
        untuk mengoutputkan string ke parent komponen sebagai kondisi view building
        */
        this.viewBuilding = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /*
        untuk mengoutputkan data equipment type building ke parent komponen
        */ this.emitBuilding = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /*
       ,  untuk mengoutputkan data hasil drag and drop equipment ke parent komponen
        */ this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /*
        untuk menerima data Equipment dari parent komponen
        */ this.item = [];
        this.position = [];
        this.draggable = false;
    }
    AreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var width = document.getElementById('container').offsetWidth;
            for (var i in _this.item) {
                // this.item[i].left    = (this.item[i].left*width)/100;
                if (_this.item[i].type != undefined) {
                    _this.item[i]['type'] = _this.item[i]['type'].toLowerCase();
                }
            }
        }, 1000);
    };
    AreaComponent.prototype.ngOnChanges = function () {
        if (this.dataBuilding != undefined) {
            this.item.push(this.dataBuilding);
        }
    };
    AreaComponent.prototype.addBuilding = function (styles, position, label) {
        var Default = { id: 122, label: label, left: 33, top: 50, status: 'normal', type: styles, position: position };
        this.emitBuilding.emit({ action: 'create', data: Default });
    };
    AreaComponent.prototype.Edit = function (type) {
        this.typeSave = type;
        this.draggable = true;
        if (type == 'building') {
            this.viewBuilding.emit(type);
        }
    };
    AreaComponent.prototype.onDragEnd = function (id) {
        var left, top, min, width, valid = 0;
        width = document.getElementById("container").offsetWidth;
        left = document.getElementById(id).offsetLeft;
        top = document.getElementById(id).offsetTop;
        for (var _i = 0, _a = this.item; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == id) {
                item.top = top;
                item.left = left;
            }
        }
        left = (left / width) * 100;
        if (this.position.length == 0) {
            this.position.push({ id: id, left: left, top: top });
        }
        else {
            for (var i in this.position) {
                if (this.position[i].id == id) {
                    valid++;
                    this.position[i].left = left;
                    this.position[i].top = top;
                }
            }
            if (valid == 0) {
                this.position.push({ id: id, left: left, top: top });
            }
        }
    };
    AreaComponent.prototype.save = function (event) {
        this.draggable = false;
        this.viewBuilding.emit('chart');
        for (var _i = 0, _a = this.item; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, _c = this.position; _b < _c.length; _b++) {
                var position = _c[_b];
                if (position.id == item.id) {
                    this.event.emit(item);
                }
            }
        }
        this.position.splice(0, this.position.length);
        this.typeSave = event;
    };
    AreaComponent.prototype.cancel = function (event) {
        this.draggable = false;
        this.typeSave = event;
        this.viewBuilding.emit('chart');
    };
    AreaComponent.prototype.delete = function (id) {
        for (var i in this.item) {
            if (this.item[i].id == id) {
                this.item.splice(parseInt(i), 1);
                this.emitBuilding.emit({ action: 'delete', data: this.item[i] });
            }
        }
    };
    AreaComponent.prototype.detailIcon = function (id) {
        this.router.navigate(["/home/store/detail/:id/:type", { id: id, type: "equipment" }]);
    };
    return AreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AreaComponent.prototype, "viewBuilding", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], AreaComponent.prototype, "emitBuilding", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], AreaComponent.prototype, "event", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreaComponent.prototype, "dataBuilding", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AreaComponent.prototype, "typeView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AreaComponent.prototype, "item", void 0);
AreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-area',
        template: __webpack_require__("../../../../../src/app/shared/components/area/area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/area/area.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AreaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=area.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/chart/bar_chart.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bar_chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/field.pipe.ts");

var bar_chart = {
    type: "bar",
    icon: "fa fa-bar-chart",
    option: {
        animation: { duration: 1000 },
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            onHover: function (e) {
                e.target.style.cursor = 'pointer';
            }
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                // Use the footer callback to display the sum of the items showing in the tooltip
                footer: function (tooltipItems, data) {
                    var sum = 0;
                    tooltipItems.forEach(function (tooltipItem) {
                        sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    });
                    return 'Total : ' + sum;
                },
            },
            footerFontStyle: 'normal'
        },
        hover: {
            mode: 'index',
            intersect: true
        },
        scales: {
            yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        userCallback: function (value, index, values) {
                            value = new __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__["a" /* FieldPipe */]().transform(value, "watthour");
                            return value;
                        }
                    }
                }],
            xAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
        }
    },
    label: [],
    dataset: []
};
/*
    dataset = [
    {   label: 'AC',
       data: [23,34],
       borderWidth: 2
     }]
*/ 
//# sourceMappingURL=bar_chart.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];*/\n\n.card-chart {\n\tdisplay: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n\n\n.card-chart .card-header.card-header-icon {\n  float: left;\n}\n.card-chart .card-header.card-header-icon i {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  line-height: 33px;\n  font-size: 20px;\n}\n\n.card-chart .card-content .card-title {\n   font-size: 18px;\n}\n\n.card-chart [data-background-color] {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  background-color: #999999;\n  position: relative;\n}\n\n.card-chart [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n\n.card-chart [data-background-color] {\n  color: #FFFFFF;\n}\n\n.card-chart .card-content {\n  padding: 8px 20px;\n  position: relative;\n}\n.card-chart .card-content .category {\n  margin-bottom: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-chart\">\n    <div class=\"card-header card-header-icon\" data-background-color=\"red\">\n        <i [class]=\"icon\"></i>\n    </div>\n    <div class=\"card-content\">\n        <h4 class=\"card-title\">\n            <div *ngIf=\"type=='bar_chart';else lineChart\"> \n                <md-select placeholder=\"Monthly\" floatPlaceholder=\"never\" [(ngModel)]=\"chartType\"\n                 (change)=\"changeType(chartType)\">\n                    <md-option *ngFor=\"let option of typeset\" [value]=\"option\">\n                        {{option | capitalize}}\n                    </md-option>\n                </md-select>\n                power consumption\n            </div>\n            <ng-template #lineChart>\n                Type Chart&nbsp;:&nbsp; \n                <md-select placeholder=\"Monthly\" floatPlaceholder=\"never\" [(ngModel)]=\"chartType\"\n                 (change)=\"changeType(chartType)\">\n                    <md-option *ngFor=\"let option of typeset\" [value]=\"option\">\n                        {{option | capitalize}}\n                    </md-option>\n                </md-select> \n                &nbsp;&nbsp;&nbsp;&nbsp;\n                Type Equipment&nbsp;:&nbsp; \n                <md-select placeholder=\"All\" floatPlaceholder=\"never\" \n                 [(ngModel)]=\"equipmentType\">\n                    <md-option value=\"all\">All</md-option>\n                    <md-option value=\"ac\">AC</md-option>\n                    <md-option value=\"chiller\">Chiller</md-option>\n                    <md-option value=\"alarm\">Alarm</md-option>\n                    <md-option value=\"temperature\">Temperature</md-option> \n                </md-select> \n\n            </ng-template>\n        </h4>\n        <div class=\"toolbar\"></div>\n        <div>\n            <div *ngIf=\"type=='bar_chart';then barchart else linechart\"></div>\n            <ng-template #barchart>\n                <canvas style=\"height:290px;\" baseChart [datasets]=\"chartset.dataset\" \n                 [labels]=\"chartset.label\" [options]=\"chartset.option\" [legend]=\"true\" \n                 [chartType]=\"chartset.type\">\n                </canvas>    \n            </ng-template>\n            <ng-template #linechart>\n                <div [chart]=\"chartset\"></div>\n            </ng-template>    \n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_chart_config__ = __webpack_require__("../../../../../src/app/shared/components/chart/bar_chart.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line_chart_config__ = __webpack_require__("../../../../../src/app/shared/components/chart/line_chart.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChartComponent = (function () {
    function ChartComponent() {
        this.typeChart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = { bar_chart: __WEBPACK_IMPORTED_MODULE_1__bar_chart_config__["a" /* bar_chart */], line_chart: __WEBPACK_IMPORTED_MODULE_3__line_chart_config__["a" /* line_chart */] };
        this.typeset = ["monthly", "weekly", "daily"];
    }
    ChartComponent.prototype.ngOnChanges = function () {
        this.setLineChart();
        this.setBarChart();
    };
    //BAR Chart
    ChartComponent.prototype.setBarChart = function () {
        if (this.type == "bar_chart") {
            this.config[this.type].dataset = this.setDataset();
            this.config[this.type].label = this.label;
            this.chartset = this.config[this.type];
            if (this.chart && this.chart.chart && this.chart.chart.config) {
                this.chart.chart.config.data.labels = this.label;
                this.chart.chart.update();
            }
            this.icon = this.chartset.icon;
        }
    };
    ChartComponent.prototype.changeType = function (event) {
        this.typeChart.emit(event);
    };
    ChartComponent.prototype.setDataset = function () {
        var result = [];
        for (var i in this.dataset) {
            result.push({
                label: new __WEBPACK_IMPORTED_MODULE_2__pipes_capitalize_pipe__["a" /* CapitalizePipe */]().transform(i),
                data: this.dataset[i],
                borderWidth: 2
            });
        }
        return result;
    };
    ChartComponent.prototype.setLineChart = function () {
        if (this.type == "line_chart") {
            this.icon = "fa fa-line-chart";
            __WEBPACK_IMPORTED_MODULE_3__line_chart_config__["a" /* line_chart */].series = this.renderLineChart();
            this.renderMaxcurrent(__WEBPACK_IMPORTED_MODULE_3__line_chart_config__["a" /* line_chart */]);
            this.chartset = new __WEBPACK_IMPORTED_MODULE_5_angular_highcharts__["a" /* Chart */](__WEBPACK_IMPORTED_MODULE_3__line_chart_config__["a" /* line_chart */]);
        }
    };
    ChartComponent.prototype.renderMaxcurrent = function (config) {
        if (this.maxCurrent != undefined) {
            console.log(config);
        }
    };
    ChartComponent.prototype.renderLineChart = function () {
        var series = [];
        var config = {
            ac: {
                icon: "url(./assets/img/iconChart/ac.png)",
                yAxis: 0,
                type_item: "equipment"
            },
            temperature: {
                icon: "url(./assets/img/iconChart/temperature.png)",
                yAxis: 1,
                type_item: "temperature"
            },
            pump: {
                icon: "url(./assets/img/iconChart/pump.png)",
                yAxis: 0,
                type_item: "equipment"
            },
            chiller: {
                icon: "url(./assets/img/iconChart/chiller.png)",
                yAxis: 0,
                type_item: "equipment"
            },
            humidity: {
                icon: "url(./assets/img/iconChart/humidity.png)",
                yAxis: 1,
                type_item: "humidity"
            },
            alarm: {
                icon: "",
                yAxis: 0,
                type_item: "alarm"
            }
        };
        var result;
        for (var _i = 0, _a = this.dataset; _i < _a.length; _i++) {
            var set = _a[_i];
            result = {
                name: set.label,
                data: set.data,
                yAxis: config[set.category].yAxis
            };
            if (set.category == "alarm") {
                result.showInLegend = false;
                result.type = "scatter";
            }
            for (var i in result.data) {
                result.data[i].type_item = config[set.category].type_item;
                result.data[i].icon = config[set.category].icon;
                if (set.category == "alarm") {
                    var alarm = "url(./assets/img/iconChart/alarm-" + result.data[i].saverity + ".png)";
                    result.data[i].marker = {
                        symbol: alarm
                    };
                    result.data[i].icon = alarm;
                }
            }
            series.push(result);
        }
        return series;
    };
    return ChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "dataset", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "maxCurrent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ChartComponent.prototype, "typeChart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], ChartComponent.prototype, "chart", void 0);
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/shared/components/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/chart/line_chart.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return line_chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/field.pipe.ts");

var dateParse = function (value) {
    value = new __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__["a" /* FieldPipe */]().transform(value, "date");
    return value;
};
var line_chart = {
    chart: {
        type: 'spline'
    },
    title: { text: '',
        style: { display: "none" } },
    credits: {
        enabled: false
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        series: {
            cursor: 'pointer'
        }
    },
    // tooltip: {
    // 	useHTML:true,
    //     formatter: function() {
    //         var parse=function(value){
    //             var temp = new FieldPipe().transform(value,"watt");
    //             return temp;
    //         }
    //         var temp;
    //         switch(this.point.type_item){
    //         	case "equipment":
    //         		temp = "<b>"+dateParse(this.x)+"</b><br>"
    //         			  +"<image url='"+this.point.icon+"' alt='marker' /><br>"
    //                       +"Label   : "+this.series.name+"<br>"
    //                       +"Value   : "+parse(this.y)+"<br>"
    //         	break;
    //         	case "humidity":
    //                 temp = "<b>"+dateParse(this.x)+"</b><br>"
    //                       +"Label  : "+this.series.name+"<br>"
    //                       +"Value  : "+this.y+"%"
    //             break;
    //             case "temperature":
    //                 temp = "<b>"+dateParse(this.x)+"</b><br>"
    //                       +"Label  : "+this.series.name+"<br>"
    //                       +"Value  : "+this.y+"°C"
    //             break;
    //             case "alarm":
    //             	temp = "<b>"+dateParse(this.x)+"</b><br>"
    //                       +"Label    : "+this.series.name+"<br>"
    //                       +"message  : "+this.point.message+"<br>"
    //                       +"saverity : "+this.point.saverity
    //             break;
    //         }
    //         return temp;
    //     }
    // },
    tooltip: {
        formatter: function () {
            var symbol = '';
            var url = this.point.icon.replace(/^url\(|\)$/g, '');
            symbol = '<img style="margin-right:5px" src="' + url + '" alt="Icon" />';
            var label = this.series.name;
            if (this.point.type_item == "alarm") {
                label = this.point.message;
            }
            function formatterValue(type, y, saverity) {
                var value;
                var param = "value : ";
                switch (type) {
                    case "equipment":
                        value = new __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__["a" /* FieldPipe */]().transform(y, "watt");
                        break;
                    case "humidity":
                        value = y + "%";
                        break;
                    case "temperature":
                        value = y + "°C";
                        break;
                    case "alarm":
                        value = saverity;
                        param = "saverity : ";
                        break;
                }
                return param + value;
            }
            return "\n        \t\t<div style=\"width:150px;margin:5% 10%;\">\n\t        \t\t<table style=\"margin:1px;\">\n\t        \t\t\t<tr style=\"text-align:center;\">\n\t        \t\t\t\t<td colspan=\"3\" style=\"font-weight:bold;\">\n\t        \t\t\t\t\t" + dateParse(this.x) + "\n\t        \t\t\t\t</td>\n\t        \t\t\t</tr>\n\t        \t\t\t<tr>\n\t        \t\t\t\t<td rowspan=\"2\">\n\t        \t\t\t\t\t" + symbol + "\n\t        \t\t\t\t</td>\n\t        \t\t\t\t<td colspan=\"2\">label : " + label + "</td>\n\t        \t\t\t</tr>\n\t        \t\t\t<tr>\n\t        \t\t\t\t<td colspan=\"2\">" +
                formatterValue(this.point.type_item, this.y, this.point.saverity)
                + "</td>\n\t        \t\t\t</tr>\n\t        \t\t</table>\n        \t\t</div>\n        \t";
        },
        useHTML: true
    },
    yAxis: [{
            title: {
                text: 'Power Usage',
                style: {
                    color: '#444'
                }
            },
            labels: {
                formatter: function () {
                    var temp = new __WEBPACK_IMPORTED_MODULE_0__pipes_field_pipe__["a" /* FieldPipe */]().transform(this.value, "watt");
                    return temp;
                },
                style: {
                    color: '#444'
                }
            },
            minRange: 200,
            plotLines: [{
                    value: 120,
                    color: '#d9534f',
                    dashStyle: 'shortdash',
                    width: 2,
                    zIndex: 4,
                    label: {
                        text: 'Maximum energy current'
                    }
                }]
        }, {
            title: {
                text: 'Temperature & Humidity',
                style: {
                    color: '#444'
                }
            },
            labels: {
                format: '{value}°C',
                style: {
                    color: '#444'
                }
            },
            opposite: true
        }],
    series: []
};
//# sourceMappingURL=line_chart.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n\n <ng-template #template>\n  <form class=\"form-horizontal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        \t<span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{{ label | capitalize }}</h4>\n      </div>\n      <div class=\"modal-body\">\n      \n      <div *ngIf=\"action!='remove';then notDelete else delete;\"></div>\n\n      <ng-template #notDelete> \n          <ng-container *ngFor=\"let result of properties\">\n            <div class=\"form-group\" style=\"margin-top: -15px\">\n      \t\t\t\t\t<label class=\"col-sm-3 control-label\">{{result.label | capitalize }}</label>\n      \t\t\t\t\t<div class=\"col-sm-9\">\n\t\t      \t  \t<div *ngIf=\"result.type != 'list';then default else list\"></div>\n            <ng-template #default>\t\t\t\n\t\t\t\t\t    <input [type]=\"result.type\" class=\"form-control\" \n\t\t\t\t\t     [ngModelOptions]=\"{standalone: true}\" \n\t\t\t\t\t     [(ngModel)]=\"post[result.model]\"\n\t\t\t\t\t     placeholder=\"{{result.label | capitalize }}\" [disabled]=\"result.disabled\">\n\t\t\t\t    </ng-template>\n\t\t\t\t    <ng-template #list>\n                 <select class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" \n                 [(ngModel)]=\"post[result.model]\">\n                    <option *ngFor=\"let a of result.list\" [value]=\"a.id\">{{a.label}}</option>\n                 </select>\n\t\t\t\t    </ng-template>\n      \t\t\t</div>\n      \t\t\t</div>\n          </ng-container>\n      </ng-template>\n      <ng-template #delete>\n          <h4 style=\"margin-top: -15px\">\n              Are you sure to delete {{post.label | capitalize}} ?\n          </h4>\n      </ng-template>\n\t\t  \n      \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modalRef.hide()\" \n        (click)=\"sendAction()\">Save</button>\n      \t<button type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Close</button>\n      </div>\n    </div>\n  </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = (function () {
    function FormComponent(modalService, rest, toaster) {
        this.modalService = modalService;
        this.rest = rest;
        this.toaster = toaster;
        this.post = {};
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* ToasterConfig */]({ timeout: 3000, positionClass: "toast-top-right", showCloseButton: true });
        this.response = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormComponent.prototype.openModal = function (event) {
        this.action = event.action;
        this.data = event.data;
        this.modalRef = this.modalService.show(this.template);
        if (this.action == "create") {
            this.post = {};
            if (this.data != undefined) {
                this.post = this.data;
            }
            if (this.service == "inventoryService") {
                this.post = this.data;
            }
        }
        else {
            this.post = this.data;
        }
    };
    FormComponent.prototype.sendAction = function () {
        var _this = this;
        var rest = { action: this.action, data: this.post };
        this.parseNumber();
        this.rest.service(this.service, rest).subscribe(function (result) {
            _this.toaster.pop(result.status, result.label, result.message);
            _this.response.emit({ action: _this.action, response: result.response });
        });
    };
    FormComponent.prototype.disabled = function () {
        for (var i in this.properties) {
            if (this.properties[i].disabled == undefined) {
                this.properties[i].disabled = false;
            }
            else {
                this.properties[i].disabled = true;
            }
        }
    };
    FormComponent.prototype.parseNumber = function () {
        for (var i in this.properties) {
            if (this.properties[i].type == "number" || this.properties[i].type == "list") {
                this.post[this.properties[i].model] = parseInt(this.post[this.properties[i].model]);
            }
        }
    };
    return FormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FormComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "properties", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FormComponent.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FormComponent.prototype, "service", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormComponent.prototype, "response", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('template'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], FormComponent.prototype, "template", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/shared/components/form/form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_loopbackv2_service__["a" /* Loopbackv2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loopbackv2_service__["a" /* Loopbackv2Service */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */]) === "function" && _e || Object])
], FormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*CSS FOR PUMP*/\n.pump>img{\n    width: 100%;\n    height: auto;\n}\n\n.txtPump{\n    margin: -34px 0px 0px 13px;\n    font-size: 16px;\n    font-family: \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    font-weight: bold;\n    color: #1A4C73;\n}\n\n/*CSS FOR TEMPERATURE*/\n.temperature>p{\n    font-size: 15px;\n    margin: 0px 0px 0px -24px;\n   font-family: times new roman;\n}\n.tempTp{\n    font-size: 14px;\n    margin: -38px 0px 0px -20px;\n    font-weight: bold;\n    color:#1A4C73;\n    font-family: \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n}\n.tempBtm{\n    font-size: 14px;\n    margin: -1px 0px 0px -20px;\n    font-weight: bold;\n    color:#1A4C73;\n    font-family:   \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n}\n\n\n\n/*CSS FOR CHILLER*/\n.chiller{\n    width: 85px;\n    height: 0px;\n    border-bottom: 42px solid ;\n}\n\n.txtTop{\n    margin: -38px 0px 0px 38px;\n    font-weight: bold;\n    font-size: 13px;\n    color: black;\n    font-family:   \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n}\n\n.txtMdl{\n   margin: -11px 0px 0px 57px;\n   font-weight: bold;\n   font-size: 13px;\n   color: black;\n   font-family:   \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n   \n}\n\n.txtBtm{\n    margin: -10px 0px 0px 38px;\n    font-weight: bold;\n    font-size: 13px;\n    color: black;\n    font-family:   \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n}\n\n.chiller>img{\n    margin: 6px 0px 0px 3px;\n    width: 38%;\n    height: auto;\n}\n.round{\n    height: 0px;\n    width: 0px;\n    border: 6px solid; \n    border-radius: 60px;\n    margin: -41px 0px 0px 70px;\n}\n.chiller>p{\n    margin: 29px 0px 0px 27px;\n    font-size: 15px; \n    color: black;\n    font-family: times new roman;\n\n}\n\n\n/*CSS FOR AC*/\n.setTop{\n    margin: -26px 0px 1px 38px;\n    padding: 7px 0px 11px 0px;\n    color:#1A4C73;\n    font-size: 14px;\n    font-family: \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n    font-weight: bold;\n}\n.tempTop{\n    margin: -54px 0px 50px 38px;\n    color:#1A4C73;\n    font-size: 14px;\n    font-family:\"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n    font-weight: bold;\n}\n.setRight{\n    margin: -26px 0px 1px -22px;\n    padding: 7px 0px 11px 0px;\n    color:#1A4C73;\n    font-size: 14px;\n    font-family: \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n    font-weight: bold;\n}\n.tempRight{\n    margin: -53px 0px 50px -22px;\n    color:#1A4C73;\n    font-size: 14px;\n    font-family: \"Arial\", \"Arial Bold\", Gadget, sans-serif;\n    \n    font-weight: bold;\n}\n\n/*AC RIGHT*/\n.ac-right {\n   width: 65%;\n    height: auto;\n}\n\n/*AC TOP*/\n.ac-top { \n    width: 65%;\n    height: auto;\n}\n\n/*AC LEFT*/\n.ac-left { \n   width: 65%;\n    height: auto;\n}\n\n/*AC BOTTOM*/\n.ac-bottom {\n   width: 65%;\n    height: auto;\n}\n\n/*DOOR*/\n\n.door-right {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid;\n    border-left: 1px solid;\n    border-right: 5px solid white;\n    border-top: 3px solid;\n    border-bottom-left-radius: 65px;\n}\n\n.door-right1 {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 1px solid;\n    border-right: 5px solid white;\n    border-top: 1px solid;\n    border-top-left-radius: 65px;\n    margin-top: 26px;\n}\n\n.door-top {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid;\n    border-left: 3px solid;\n    border-right: 1px solid;\n    border-top: 5px solid white;\n    border-bottom-right-radius: 65px;\n}\n\n.door-top1 {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid;\n    border-left: 1px solid;\n    border-right: 3px solid;\n    border-top: 5px solid white;\n    border-bottom-left-radius: 65px;\n    margin-left: 26px;\n    margin-top: -5px;\n}\n\n.door-left {\n    width: 30px;\n    height: 30px;\n    border-left: 5px solid white;\n    border-right: 1px solid;\n    border-top: 3px solid;\n    border-bottom: 1px solid;\n    border-bottom-right-radius: 65px;\n}\n\n.door-left1 {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 5px solid white;\n    border-right: 1px solid;\n    border-top: 1px solid;\n    border-top-right-radius: 65px;\n    margin-top: 26px;\n    margin-left: -5px;\n}\n\n.door-bottom {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 3px solid;\n    border-right: 1px solid;\n    border-top: 1px solid;\n    border-top-right-radius: 60px;\n}\n\n.door-bottom1 {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 1px solid;\n    border-right: 3px solid;\n    border-top: 1px solid;\n    border-top-left-radius: 60px;\n    margin-left: 26px;\n}\n\n.door1-left {\n    width: 25px;\n    height: 25px;\n    border-top: 1px solid;\n    border-right: 1px solid;\n    border-left: 3px solid white;\n    border-bottom: 3px solid;\n    border-top-right-radius: 60px;\n}\n\n.door1-bottom {\n    width: 25px;\n    height: 25px;\n    border-right: 3px solid;\n    border-top: 1px solid;\n    border-left: 1px solid;\n    border-bottom: 3px solid white;\n    border-top-left-radius: 65px;\n}\n\n.door1-right {\n    width: 25px;\n    height: 25px;\n    border-right: 3px solid white;\n    border-top: 3px solid;\n    border-left: 1px solid;\n    border-bottom: 1px solid;\n    border-bottom-left-radius: 65px;\n}\n\n.door1-top {\n    width: 25px;\n    height: 25px;\n    border-right: 3px solid;\n    border-left: 1px solid;\n    border-bottom: 1px solid;\n    border-top: 3px solid white;\n    border-bottom-left-radius: 65px;\n}\n\n/*door-open*/\n.door-right-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #19a9d5;\n    border-left: 1px solid #19a9d5;\n    border-right: 5px solid white;\n    border-top: 3px solid;\n    border-bottom-left-radius: 65px;\n}\n\n.door-right1-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 1px solid #19a9d5;\n    border-right: 5px solid white;\n    border-top: 1px solid #19a9d5;\n    border-top-left-radius: 65px;\n    margin-top: 26px;\n}\n\n.door-top-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #19a9d5;\n    border-left: 3px solid;\n    border-right: 1px solid #19a9d5;\n    border-top: 5px solid white;\n    border-bottom-right-radius: 65px;\n}\n\n.door-top1-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #19a9d5;\n    border-left: 1px solid #19a9d5;\n    border-right: 3px solid;\n    border-top: 5px solid white;\n    border-bottom-left-radius: 65px;\n    margin-left: 26px;\n    margin-top: -5px;\n}\n\n.door-left-open {\n    width: 30px;\n    height: 30px;\n    border-left: 5px solid white;\n    border-right: 1px solid #19a9d5;\n    border-top: 3px solid;\n    border-bottom: 1px solid #19a9d5;\n    border-bottom-right-radius: 65px;\n}\n\n.door-left1-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 5px solid white;\n    border-right: 1px solid #19a9d5;\n    border-top: 1px solid #19a9d5;\n    border-top-right-radius: 65px;\n    margin-top: 26px;\n    margin-left: -5px;\n}\n\n.door-bottom-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 3px solid;\n    border-right: 1px solid #19a9d5;\n    border-top: 1px solid #19a9d5;\n    border-top-right-radius: 60px;\n}\n\n.door-bottom1-open {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 1px solid #19a9d5;\n    border-right: 3px solid;\n    border-top: 1px solid #19a9d5;\n    border-top-left-radius: 60px;\n    margin-left: 26px;\n}\n\n/*door alarm*/\n\n.door-right-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #f05050;\n    border-left: 1px solid #f05050;\n    border-right: 5px solid white;\n    border-top: 3px solid;\n    border-bottom-left-radius: 65px;\n}\n\n.door-right1-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 1px solid #f05050;\n    border-right: 5px solid white;\n    border-top: 1px solid #f05050;\n    border-top-left-radius: 65px;\n    margin-top: 26px;\n}\n\n.door-top-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #f05050;\n    border-left: 3px solid;\n    border-right: 1px solid #f05050;\n    border-top: 5px solid white;\n    border-bottom-right-radius: 65px;\n}\n\n.door-top1-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 1px solid #f05050;\n    border-left: 1px solid #f05050;\n    border-right: 3px solid;\n    border-top: 5px solid white;\n    border-bottom-left-radius: 65px;\n    margin-left: 26px;\n    margin-top: -5px;\n}\n\n.door-left-danger {\n    width: 30px;\n    height: 30px;\n    border-left: 5px solid white;\n    border-right: 1px solid #f05050;\n    border-top: 3px solid;\n    border-bottom: 1px solid #f05050;\n    border-bottom-right-radius: 65px;\n}\n\n.door-left1-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 3px solid;\n    border-left: 5px solid white;\n    border-right: 1px solid #f05050;\n    border-top: 1px solid #f05050;\n    border-top-right-radius: 65px;\n    margin-top: 26px;\n    margin-left: -5px;\n}\n\n.door-bottom-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 3px solid;\n    border-right: 1px solid #f05050;\n    border-top: 1px solid #f05050;\n    border-top-right-radius: 60px;\n}\n\n.door-bottom1-danger {\n    width: 30px;\n    height: 30px;\n    border-bottom: 5px solid white;\n    border-left: 1px solid #f05050;\n    border-right: 3px solid;\n    border-top: 1px solid #f05050;\n    border-top-left-radius: 60px;\n    margin-left: 26px;\n}\n\n/*CASHIER*/\n.kasir {\n    width: 10px;\n    height: auto;\n}\n\n.kasir>.screen {\n    width: 20px;\n    height: 15px;\n    position: relative;\n    background: #4caaf9b3;\n    border: 2px solid #474e5d;\n    border-radius: 2px;\n}\n\n.kasir>p {\n    font-size: 13px;\n    margin: 0px 0px 0px -9px;\n    font-family: times new roman;\n}\n\n.foot {\n    height: 2px;\n    width: 3px;\n    border-top: 2px solid;\n    border-right: 0px solid;\n    border-bottom: 2px solid;\n    border-left: 6px solid;\n    margin: 0px 0px 0px 7px;\n}\n\n/*ATM*/\n.atm {\n    width: 9%;\n    height: 26px;\n    background: #4caaf9b3;\n    border: 2px solid #474e5d;\n    border-radius: 1px;\n    box-shadow: 5px 5px 3px #888888;\n    font-size: 10px;\n}\n\n.atm>p {\n    font-size: 11px;\n    font-weight: bold;\n    margin: 0px 0px 0px 7px;\n}\n\n/*RACK*/\n.rack5x2 {\n    width: 65%;\n    height: 45px;\n    background: #4caaf9b3;\n    border: 2px solid #474e5d;\n    border-radius: 1px;\n    box-shadow: 5px 5px 3px #888888;\n    font-size: 10px;\n    background-color: orange;\n    font-family: times new roman;\n}\n.rack5x2>p{\n    margin: 8px 0px 0px 113px;\n    font-weight: bold;\n    font-size: 16px;\n    font-family: times new roman;\n}\n.rack5x1 {\n    width: 65%;\n    height: 30px;\n    background: #4caaf9b3;\n    border: 2px solid #474e5d;\n    border-radius: 1px;\n    box-shadow: 5px 5px 3px #888888;\n    font-size: 10px;\n    background-color: #ff471a;\n}\n.rack5x1>p{\n    margin: 1px 0px 0px 113px;\n    font-weight: bold;\n    font-size: 15px;\n    font-family: times new roman;\n}\n\n.rack2x2 {\n    width: 14%;\n    height: 46px;\n    background: #4caaf9b3;\n    border: 2px solid #474e5d;\n    border-radius: 1px;\n    box-shadow: 5px 5px 3px #888888;\n    font-size: 10px;\n    background-color: #19a9d5;\n}\n.rack2x2>p{\n    margin: 9px 0px 0px 3px;\n    font-weight: bold;\n    font-size: 13px;\n    font-family: times new roman;\n}\n\n.building>div{\n    display: inline-block;\n    position: absolute;\n    z-index: auto;\n    margin-right: 0%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"infoType == 'css'\">\n\t<span *ngIf=\"color == 'normal';else otherColor\">\n\t\t<div class=\"building\">\n\t\t\t<div [class]=\"styles.left\"><div [class]=\"styles.middle\"></div><div [class]=\"styles.right\"></div>\n\t\t\t\t<p>{{label}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</span>\n\t\n\t<ng-template #otherColor>\n\t\t<div [class]=\"styles.left+'-'+color\"><div [class]=\"styles.right+'-'+color\"></div></div>\n\t</ng-template>\n</div>\n\n\n<div *ngIf=\"infoType == 'image'\">\n\t<div [class]=\"styles\" [ngStyle]=\"{'color':color}\">\n\t\t\t<img [src]=\"image\" aria-hidden=\"true\">\n\t\t<span mdTooltip=\"{{label}}\">\n\t\t\t<div [class]=\"text['txtTop']\">{{value.temp_material}}</div>\n\t\t\t\t<div [class]=\"text['txtMdl']\">{{value.temp_air}}{{value.lifetime}}</div>\n\t\t\t\t<div [class]=\"text['txtBtm']\">{{value.temp_setting}}</div>\n\t\t\t<div *ngIf=\"config.styles == 'chiller'\" class=\"round\" [ngStyle]=\"{'color':condition}\"></div>\n\t\t</span>\n\t</div>\n</div>\n\n\t<div *ngIf=\"infoType == 'icon'\">\n\t\t<div [class]=\"styles\">\n\t\t\t<span mdTooltip=\"{{label}}\">\n\t\t      \t<button *ngIf=\" text.txtTop == 'none'\"  md-mini-fab [ngStyle]=\"{'background-color':color}\">\n\t\t      \t\t<i [class]=\"icon\" aria-hidden=\"true\"></i>\n\t\t      \t</button>\n\n\t\t      \t<div *ngIf=\"text.txtTop != 'none'\">\n\t\t      \t\t<i [class]=\"icon\" aria-hidden=\"true\" [ngStyle]=\"{'color':color, 'font-size':35+'px'}\"></i>\n\t\t\t      \t<div [class]=\"text['txtTop']\">12</div>\n\t\t\t\t\t<div [class]=\"text['txtBtm']\">14</div>\n\t\t\t\t</div>\n\t\t    </span>\n\t    </div>\n\t</div>\n\n\t"

/***/ }),

/***/ "../../../../../src/app/shared/components/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_metadata__ = __webpack_require__("../../../../../src/app/shared/components/item/item.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__item_metadata__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    function ItemComponent() {
        this.dataset = {
            chiller: {
                type: 'image',
                color: { off: '#99e2ff', normal: '#99e2ff', major: '#ffbe4d', critical: '#ff6666' },
                image: {
                    off: '../assets/img/chiller_mati.png',
                    normal: '../assets/img/chiller_normal.png',
                    major: '../assets/img/chiller_major.png',
                    critical: '../assets/img/chiller_critical.png'
                },
                '': 'chiller',
                txt: {
                    '': { txtMdl: 'txtMdl', txtTop: 'txtTop', txtBtm: 'txtBtm' }
                },
                clrcondition: { major: '#ff6600', critical: '#ff6600', normal: '#ff6600', off: 'gray' },
                icon: 'none',
                value: ['temp_setting', 'temp_material', 'temp_air']
            },
            door2: {
                type: 'css',
                color: { alarm: 'danger', open: 'open', normal: 'normal' },
                image: 'none',
                right: { left: 'door-right', right: 'door-right1' },
                left: { left: 'door-left', right: 'door-left1' },
                top: { left: 'door-top', right: 'door-top1' },
                bottom: { left: 'door-bottom', right: 'door-bottom1' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            door1: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                left: { left: 'door1-left' },
                right: { left: 'door1-right' },
                top: { left: 'door1-top' },
                bottom: { left: 'door1-bottom' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            cashier: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                '': { left: 'kasir', middle: 'screen', right: 'foot', text: 'txtkasir1' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            atm: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                '': { left: 'atm' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            rack5x1: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                '': { left: 'rack5x1' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            rack5x2: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                '': { left: 'rack5x2' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            rack2x2: {
                type: 'css',
                color: { normal: 'normal' },
                image: 'none',
                '': { left: 'rack2x2' },
                txt: 'none',
                icon: 'none',
                value: []
            },
            ac: {
                type: 'image',
                image: { critical: '../assets/img/ac_critical.png', normal: '../assets/img/ac_normal.png',
                    major: '../assets/img/ac_major.png', off: '../assets/img/ac_OFF.png' },
                color: { critical: 'none', normal: 'none', major: 'none', off: 'none' },
                right: 'ac-right', left: 'ac-left', top: 'ac-top', bottom: 'ac-bottom',
                txt: {
                    right: { txtTop: 'setRight', txtBtm: 'tempRight', txtMdl: 'line' },
                    left: { txtTop: 'setTop', txtBtm: 'tempTop', txtMdl: 'line' },
                    top: { txtTop: 'setTop', txtBtm: 'tempTop', txtMdl: 'line' },
                    bottom: { txtTop: 'setTop', txtBtm: 'tempTop', txtMdl: 'line' }
                },
                icon: 'none',
                value: ['temp_setting', 'temp_material']
            },
            lamp: {
                type: 'icon',
                image: 'none',
                color: { alarm: 'red', normal: '#19a9d5', disconnect: 'gray' },
                '': 'lamp',
                txt: { '': { txtTop: 'none', txtBtm: 'none', txtMdl: 'none' } },
                icon: 'fa fa-lightbulb-o fa-2x',
                value: []
            },
            temperature: {
                type: 'icon',
                image: 'none',
                color: { critical: 'red', normal: '#19a9d5', major: 'orange' },
                '': 'temperature',
                icon: 'fa fa-thermometer-three-quarters',
                txt: { '': { txtTop: 'tempTp', txtBtm: 'tempBtm', txtMdl: '' } },
                value: ['temp_setting', 'temp_material']
            },
            pump: {
                type: 'image',
                image: { critical: '../assets/img/pump_alarm.png', off: '../assets/img/pump_mati.png',
                    normal: '../assets/img/pump_normal.png', major: '../assets/img/pump_orange.png' },
                color: { critical: 'none', normal: 'none', off: 'none', major: 'none' },
                '': 'pump',
                icon: 'none',
                txt: { '': { txtTop: 'none', txtBtm: 'none', txtMdl: 'txtPump' } },
                value: ['lifetime']
            }
        };
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.label = this.config["name"];
        this.color = this.dataset[this.config.styles].color[this.config.status];
        this.image = this.dataset[this.config.styles].image[this.config.status];
        this.styles = this.dataset[this.config.styles][this.config.position];
        this.condition = this.dataset['chiller'].clrcondition[this.config.status];
        this.text = this.dataset[this.config.styles].txt[this.config.position];
        this.infoType = this.dataset[this.config.styles].type;
        this.icon = this.dataset[this.config.styles].icon;
        var value = this.dataset[this.config.styles].value;
        this.value = { temp_material: '', temp_air: '', temp_setting: '', lifetime: '' };
        for (var i in value) {
            this.value[value[i]] = this.config[value[i]];
        }
    };
    return ItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__item_metadata__["Item"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__item_metadata__["Item"]) === "function" && _a || Object)
], ItemComponent.prototype, "config", void 0);
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/shared/components/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/item/item.metadata.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=item.metadata.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
  library maps yang ini menggunakan angular google maps (AGM 1.0.0-beta.0)
  -------------------------------------
  #example
  untuk menjalankan dan menginstall agm
    install terlebih dahulu librarynya
    - npm install @agm/core --save

    lalu import AgmCoreModule di shared.module.ts /etc.
    - import { AgmCoreModule } from '@agm/core';

    lalu import providers apikey google mapsnya di
    - @NgModule({
      imports: [
          AgmCoreModule.forRoot({
          apiKey: 'YOUR_KEY'
          })
      ])}

  -------------------------------------
  ## contoh penggunaan di komponent
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-maps',
      template: `
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
          <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
          </agm-marker>
        </agm-map>
      `
      styles: [`
          .agm-map-container {
            height: 300px;
          }
       `]
     }),

     export class MapComponent implements OnInit {
       lat: number = -0.789275;
       lng: number = 113.921327;
       zoom: number = 5;

       constructor(){ }
     }
*/
var MapComponent = (function () {
    function MapComponent(router) {
        this.router = router;
        /**
          fungsi dari Output pushMarker adalah untuk mengirimkan data filtering yang dihasilkan dari klik marker yang kita pilih,
          data tersebut akan dikirim ke komponen maps-filter dan proses filtering akan dijalankan disana.
        */
        this.pushMarker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /*
          fungsi dari lat, lng dan zoom adalah data yang akan digunakan pertama kali sebagai maps center
        */
        this.lat = -0.789275;
        this.lng = 113.921327;
        this.zoom = 5;
    }
    /**
      fungsi dari Showinfobox adalah fungsi yang akan menjalankan ketika marker di mouseover
    */
    MapComponent.prototype.Showinfobox = function (i) {
        this.showbox = i;
    };
    /**
      fungsi dari hiddeninfobox adalah fungsi yang akan menjalankan ketika pointer akan di mouseOut
    */
    MapComponent.prototype.hiddeninfobox = function () {
        this.showbox = "Hidden";
    };
    /**
      fungsi dari clickedMarker adalah fungsi yang akan menjalankan filtering di maps marker ketika di pilih/klik
      maka data parameter itu akan di emit/output ke component lain sehinnga akan dilakukan filtering.
    */
    MapComponent.prototype.clickedMarker = function (event) {
        this.pushMarker.emit(event);
    };
    /**
      fungsi dari parent adalah digunakan oleh maps sebagai maps center(latitude, longitude, zoom)
    */
    MapComponent.prototype.parent = function () {
        for (var _a = 0, _b = this.getZoneMaps[0].parent; _a < _b.length; _a++) {
            var _i = _b[_a];
            this.lat = _i.latitude;
            this.lng = _i.longitude;
            this.zoom = _i.zoom;
        }
    };
    /**
      fungsi dari Children adalah digunakan untuk marker di maps
    */
    MapComponent.prototype.Children = function () {
        this.data = this.getZoneMaps[0].children;
    };
    MapComponent.prototype.ngOnChanges = function () {
        this.data = this.getProvince;
        if (this.getZoneMaps != undefined) {
            this.parent();
            this.Children();
        }
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "getProvince", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "getZoneMaps", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "pushMarker", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: "\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"false\" [disableDefaultUI]=\"true\" [streetViewControl]=\"false\">\n    <agm-marker *ngFor=\"let a of data ; let i = index\" [visible]=\"true\" (mouseOver)=\"Showinfobox(i)\" (mouseOut)=\"hiddeninfobox()\" (markerClick)=\"clickedMarker(a)\" [latitude]=\"a.latitude\" [longitude]=\"a.longitude\" [iconUrl]=\"a.iconUrl\">\n      <agm-info-window [disableAutoPan]=\"true\" [isOpen]=\"showbox == i\">\n        <div class=\"col-md-12\" align=\"center\">\n          <strong>{{a.label}}</strong>\n          <div *ngIf=\"a.type == 'Store'\">\n            <br>\n            <strong> KWH   : 0,00 WH</strong><br>\n            <strong> W/T/H : 0,00 W/ 29 C/ 73%</strong><br>\n            <br>\n            <button md-mini-fab color=\"accent\">0</button>&nbsp;\n            <button md-mini-fab color=\"warn\">2</button>\n            <br><br>\n          </div>\n        </div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n  ",
        styles: [__webpack_require__("../../../../../src/app/shared/components/map/map.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table {\n  overflow: auto;\n}\n\n\n.card-table {\n\tdisplay: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n\n\n.card-table .card-header.card-header-icon {\n  float: left;\n}\n.card-table .card-header.card-header-icon i {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  line-height: 33px;\n}\n\n\n.card-table [data-background-color] {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  background-color: #999999;\n  position: relative;\n}\n\n.card-table [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n\n.card-table [data-background-color] {\n  color: #FFFFFF;\n}\n\n.card-table .card-content {\n  padding: 15px 20px;\n  position: relative;\n}\n.card-table .card-content .category {\n  margin-bottom: 0;\n}\n\n\n.material-datatables {\n  /*height: 35px;*/\n  padding: 0;\n}\n\n.search{\n\tmargin-left: 20px;\n\twidth:30%;\n}\n\n.text-bold {\n  font-weight : bold;\n}\n\n.pointer {\n  cursor:pointer;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-table\">\n    <div class=\"card-header card-header-icon\" data-background-color=\"red\">\n        <i class=\"material-icons\">assignment</i>\n    </div>\n    <div class=\"card-content\">\n        <h4 class=\"card-title\">{{label | capitalize }}</h4>\n        <div class=\"toolbar\"></div>\n        <div class=\"material-datatables\">\n            <div class=\"row\" *ngIf=\"create\">\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"sendAction('create')\">\n                        <i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Add new\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <md-input-container style=\"width:100%;\">\n                        <md-placeholder>\n                            <i class=\"fa fa-search\"></i>&nbsp;Search\n                        </md-placeholder>\n                        <input mdInput [(ngModel)]=\"search\" (ngModelChange)=\"searching($event)\"> \n                    </md-input-container>\n                </div>\n                \n                <ng-container *ngIf=\"customFilter.length!=0 && customFilter!=undefined;\">\n                    <div class=\"col-md-3\" *ngFor=\"let search of customFilter;let i = index\">\n                        <div *ngIf=\"search.datepicker==undefined;then default else datepicker\">\n                        </div>\n                        <!-- //default -->\n                        <ng-template #default>\n                            <md-select [placeholder]=\"search.label\" [(ngModel)]=\"search.value\" \n                            (ngModelChange)=\"setCustomFilter($event,search.column)\"\n                             style=\"width:100%;padding:15px 0px 15px 0px;\">\n                               <md-option *ngFor=\"let select of search.list\"\n                                [value]=\"select.value\">{{select.value | capitalize}}</md-option>\n                            </md-select>\n                        </ng-template>\n                        <!-- if datepicker -->\n                        <ng-template #datepicker>\n                            <md-form-field>\n                              <input mdInput [mdDatepicker]=\"picker\" [(ngModel)]=\"myDate\"\n                                (ngModelChange)=\"searchDate($event)\" [placeholder]=\"search.label\">\n                              <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                              <md-datepicker #picker></md-datepicker>\n                            </md-form-field>\n                        </ng-template>\n                    </div>\n                </ng-container>\n\n            </div>\n            <div class=\"row\">\n                 <div *ngIf=\"data.length==0;else show;\">\n                    <h3 style=\"padding-left: 20px;\">Data is empty</h3>\n                 </div>\n                 <ng-template #show>\n                     <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <ng-container *ngFor=\"let column of columns;let j= index\"> \n                                    <th  *ngIf=\"column.hide == undefined\" class=\"pointer\"  \n                                    (click)=\"sorting(j)\">\n                                        <strong *ngIf=\"column.field!='id';else header\">\n                                            {{column.field | capitalize}}&nbsp;&nbsp;\n                                            <i [class]=\"column.icon\"></i>\n                                        </strong>\n                                        <ng-template #header><strong>#</strong></ng-template>\n                                    </th>\n                                </ng-container>\n                                <th class=\"text-center\" *ngIf=\"columnAction!=undefined\" \n                                style=\"width:100px;\">\n                                    <strong>Actions</strong>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let rows of data; let i = index; \">\n                                <ng-container *ngFor=\"let column of columns\"> \n                                    <td *ngIf=\"column.hide == undefined\">\n                                        <span *ngIf=\"column.field!='id';else body\">\n                                            <span *ngIf=\"column.filter==undefined;else fieldFilter\">\n                                                {{rows[ column.field ]}}\n                                            </span>\n                                            <ng-template #fieldFilter> \n                                                {{rows[ column.field ] | field : column.filter }}\n                                            </ng-template>\n                                        </span>\n                                        <ng-template #body>{{(i+1) + page.indexStart }}</ng-template>\n                                    </td>\n                                </ng-container>\n\n                                <td class=\"text-center\" *ngIf=\"columnAction!=undefined\">\n                                    <ng-container *ngFor=\"let a of columnAction\">\n\n                                    <button class=\"btn btn-info btn-simple\" mdTooltip=\"View analysis\" \n                                    mdTooltipPosition=\"above\" style=\"padding:0px;margin:0px 5px;\"\n                                    *ngIf=\"a=='view'\" (click)=\"sendAction(a,rows)\">\n                                         <i class=\"material-icons\">art_track</i>\n                                    </button>    \n\n                                    <button class=\"btn btn-success btn-simple\" mdTooltip=\"Edit\" \n                                    mdTooltipPosition=\"above\" style=\"padding:0px;margin:0px 5px;\"\n                                    *ngIf=\"a=='edit'\" (click)=\"sendAction(a,rows)\">\n                                        <i class=\"material-icons\">edit</i>\n                                    </button>\n\n                                    <button class=\"btn btn-danger btn-simple\" mdTooltip=\"Remove\" \n                                    mdTooltipPosition=\"above\" style=\"padding:0px;margin:0px 5px;\"\n                                    *ngIf=\"a=='remove'\" (click)=\"sendAction(a,rows)\">\n                                        <i class=\"material-icons\">close</i>\n                                    </button>\n\n                                    <button class=\"btn btn-warning btn-simple\" mdTooltip=\"Send to email\"\n                                    mdTooltipPosition=\"above\" style=\"padding:0px;margin:0px 5px;\"\n                                    *ngIf=\"a=='email'\" (click)=\"sendAction(a,rows)\">\n                                        <i class=\"material-icons\">email</i>\n                                    </button>\n\n                                    <button class=\"btn btn-primary btn-simple\" \n                                    mdTooltip=\"User knowledge\"\n                                    mdTooltipPosition=\"above\" style=\"padding:0px;margin:0px 5px;\"\n                                    *ngIf=\"a=='knowledge'\" (click)=\"sendAction(a,rows)\">\n                                        <i class=\"material-icons\">done</i>\n                                    </button>\n\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </ng-template>\n            </div>\n            <div class=\"row\">\n                <md-paginator [length]=\"page.dataset.length\" [pageSize]=\"page.pageSize\" \n                [pageSizeOptions]=\"[10, 25, 50, 100]\"\n                (page)=\"setPage($event)\">\n                </md-paginator>\n            </div>\n\n        </div>        \n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_sort_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent() {
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sort = { field: null, type: "desc" };
        this.page = { length: 0, indexStart: 0, dataset: [], pageIndex: 0, pageSize: 10 };
        this.icons = { asc: "fa fa-sort-amount-asc", desc: "fa fa-sort-amount-desc", none: "fa fa-sort" };
        this.customFilter = [];
        this.create = false;
        this.data = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.running();
    };
    TableComponent.prototype.running = function () {
        this.generateColumn();
        this.page.dataset = this.list;
        this.paging();
        this.sorting(1);
        this.settingCommand();
    };
    TableComponent.prototype.response = function (event) {
        switch (event.action) {
            case "create":
                this.list.push(event.response);
                break;
            case "edit":
                for (var i in this.list) {
                    if (this.list[i].id == event.response.id) {
                        this.list[i] = event.response;
                    }
                }
                break;
            case "remove":
                for (var i in this.list) {
                    if (this.list[i].id == event.response.id) {
                        this.list.splice(parseInt(i), 1);
                    }
                }
                break;
        }
        this.running();
    };
    TableComponent.prototype.generateColumn = function () {
        var column = [];
        if (this.list.length != 0 && this.list != undefined) {
            for (var i in this.list[0]) {
                column.push({ field: i, icon: this.icons.none });
            }
            column[1].icon = this.icons.asc;
            this.sort = { field: column[1].field, type: "desc" };
        }
        this.columns = column;
    };
    TableComponent.prototype.setPage = function (event) {
        this.page.pageSize = event.pageSize;
        this.page.pageIndex = event.pageIndex;
        this.paging();
    };
    TableComponent.prototype.paging = function () {
        if (this.page.dataset.length != 0 || this.page.dataset != undefined) {
            this.page.indexStart = this.page.pageSize * this.page.pageIndex;
            this.data = [];
            for (var i = 0; i < this.page.dataset.length; i++) {
                if (i >= (this.page.pageIndex * this.page.pageSize) &&
                    this.data.length < this.page.pageSize) {
                    this.data.push(this.page.dataset[i]);
                }
            }
        }
    };
    TableComponent.prototype.searching = function (event) {
        if (event != undefined) {
            this.page.dataset = new __WEBPACK_IMPORTED_MODULE_2__pipes_filter_pipe__["a" /* FilterPipe */]().transform(this.list, event, 'default');
            this.paging();
        }
    };
    TableComponent.prototype.setCustomFilter = function (event, column) {
        var filter = {};
        if (event == "all") {
            event = "";
        }
        filter[column] = event;
        this.page.dataset = new __WEBPACK_IMPORTED_MODULE_2__pipes_filter_pipe__["a" /* FilterPipe */]().transform(this.list, filter, "detail");
        this.paging();
    };
    TableComponent.prototype.sorting = function (index) {
        if (this.sort.field != null && this.sort.type != null) {
            if (this.columns[index].field != this.sort.field) {
                for (var i in this.columns) {
                    if (i == index) {
                        this.columns[i].icon = this.icons.asc;
                        this.sort.type = "asc";
                        this.sort.field = this.columns[i].field;
                    }
                    else {
                        this.columns[i].icon = this.icons.none;
                    }
                }
            }
            else {
                switch (this.sort.type) {
                    case "asc":
                        this.columns[index].icon = this.icons.desc;
                        this.sort.type = "desc";
                        break;
                    case "desc":
                        this.sort.type = "asc";
                        this.columns[index].icon = this.icons.asc;
                        break;
                }
            }
            this.page.dataset = new __WEBPACK_IMPORTED_MODULE_1__pipes_sort_pipe__["a" /* SortPipe */]().transform(this.page.dataset, this.sort.field, this.sort.type);
            this.paging();
        }
    };
    TableComponent.prototype.sendAction = function (type, data) {
        this.action.emit({ action: type, data: data });
    };
    TableComponent.prototype.settingCommand = function () {
        function Filter(config, columns) {
            for (var i in config) {
                var keys = Object.keys(config[i]);
                for (var j in columns) {
                    if (columns[j].field == keys[0]) {
                        columns[j].filter = config[i][keys[0]];
                    }
                }
            }
            return columns;
        }
        function Hide(config, columns) {
            for (var i in config) {
                for (var j in columns) {
                    if (columns[j].field == config[i]) {
                        columns[j].hide = true;
                    }
                }
            }
            return columns;
        }
        function Sort(config, columns) {
            var metadata = {};
            for (var i in columns) {
                if (columns[i].field == config.field) {
                    metadata.index = i;
                }
            }
            if (config.type == "asc") {
                metadata.render = 1;
            }
            else {
                metadata.render = 2;
            }
            return metadata;
        }
        if (this.setting != undefined) {
            for (var i in this.setting) {
                switch (i) {
                    case "filter":
                        this.columns = Filter(this.setting["filter"], this.columns);
                        break;
                    case "search":
                        this.customFilter = this.setting["search"];
                        break;
                    case "hide":
                        this.columns = Hide(this.setting["hide"], this.columns);
                        break;
                    case "action":
                        for (var i in this.setting["action"]) {
                            if (this.setting["action"][i] == "create") {
                                this.setting["action"][i] = undefined;
                                this.create = true;
                            }
                        }
                        this.columnAction = this.setting["action"];
                        break;
                    case "sort":
                        var metadata = Sort(this.setting["sort"], this.columns);
                        for (var i_1 = 0; i_1 < metadata.render; i_1++) {
                            this.sorting(metadata.index);
                        }
                        break;
                }
            }
        }
    };
    TableComponent.prototype.searchDate = function (event) {
        this.action.emit({ action: "datepicker", data: event });
    };
    return TableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "setting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TableComponent.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TableComponent.prototype, "label", void 0);
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/shared/components/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widget/widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff;\n  margin-top : 0;\n  max-height: 200px;\n}\n\n\n\n/*for header */\n.widget .widget-header {\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  margin: -20px 5px 0;\n  border-radius: 3px;\n  padding: 0;\n  background-color: #999999;\n}\n.widget .widget-header .title {\n  color: #FFFFFF;\n}\n.widget .widget-header .category {\n  margin-bottom: 0;\n  color: rgba(255, 255, 255, 0.62);\n}\n\n.widget [data-background-color=\"purple\"] {\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  box-shadow:\n   0 12px 20px -10px rgba(156, 39, 176, 0.28), \n  0 4px 20px 0px rgba(0, 0, 0, 0.12), \n  0 7px 8px -5px rgba(156, 39, 176, 0.2);\n}\n.widget [data-background-color=\"blue\"] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n}\n.widget [data-background-color=\"green\"] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n}\n.widget [data-background-color=\"orange\"] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n}\n.widget [data-background-color=\"red\"] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n}\n.widget [data-background-color] {\n  color: #FFFFFF;\n}\n.widget [data-background-color] a {\n  color: #FFFFFF;\n}\n\n.widget-stats .title {\n  margin: 0;\n}\n.widget-stats .widget-header {\n  float: left;\n  text-align: center;\n}\n.widget-stats .widget-header i {\n  font-size: 30px;\n  line-height: 45px;\n  width: 45px;\n  height: 45px;\n}\n\n\n\n\n\n\n/*card content */  \n.widget .category:not([class*=\"text-\"]) {\n  color: #999999;\n}\n.widget .widget-content {\n  padding: 10px 20px;\n  padding-bottom: 0px;\n}\n.widget .widget-content .category {\n  margin-bottom: 0;\n}\n.widget .title {\n  margin-top: 0;\n  font-size: 1.825em;\n  line-height: 1.4em;\n}\nspan.unit {\n\tfont-size: 15px\n}\nspan.unit-small {\n  font-size: 12px;\n}\n.widget-stats .widget-content {\n\ttext-align: right;\n}\n.widget-content .category {\n   font-size:10px;\n}\n.text-double {\n   text-align: center;\n   font-size: 21px;\n   padding-top:5px;\n} \n.text-double .min {\n   color : #46b8da;\n}\n\n.text-double .max {\n   color : #d43f3a;\n}\n\n\n.max {\n  color : #d43f3a;\n}\n.min {\n  color : #46b8da;\n}\n.average {\n  color: #5cb85c;\n}\n\n\n/*card footer*/\n.widget .widget-footer {\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  /*border-top: 1px solid #eeeeee;*/\n}\n.widget .widget-footer .content {\n  display: block;\n}\n.widget .widget-footer div {\n  display: inline-block;\n}\n.widget .widget-footer .author {\n  color: #999999;\n}\n.widget .widget-footer .stats {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px;\n}\n.widget .widget-footer h6 {\n  color: #999999;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*card image */\n\n.card-product {\n    margin-top: 30px;\n}\n\n.card {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n\n\n\n\n\n.card .card-image {\n    height: 60%;\n    position: relative;\n    overflow: hidden;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: -30px;\n    border-radius: 6px;\n    z-index: 3;\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.card-product {\n  margin-top: 30px;\n}\n.card-product .btn-simple.btn-just-icon {\n  padding: 0;\n}\n.card-product .footer {\n  margin-top: 5px;\n}\n.card-product .footer .stats .material-icons {\n  margin-top: 4px;\n  top: 0;\n}\n.card-product .footer .price h4 {\n  margin-bottom: 0;\n}\n.card-product .card-title,\n.card-product .category,\n.card-product .card-description {\n  text-align: center;\n}\n.card-product .card-image {\n  min-height: 160px;\n  background-size: cover;\n  background-position: center center;\n}\n\n\n.animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.ripple-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none;\n}\n\n.card [data-header-animation=\"true\"] {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);\n}\n.card:hover [data-header-animation=\"true\"] {\n  -webkit-transform: translate3d(0, -50px, 0);\n  transform: translate3d(0, -50px, 0);\n}\n\n\n.card .card-actions {\n  text-align:center;\n  margin-top:-60px;\n  margin-bottom: -10px;\n}\n\n.card .card-actions .btn {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n/*.card .card-actions .fix-broken-card {\n  position: absolute;\n  top: -65px;\n}*/\n\n.card-title a { \n    color: #3C4858;\n    text-decoration: none;\n}\n\n.card-footer {\n   padding-top: 0;\n   padding-bottom: 0;\n   text-align: center;\n}\n\n.toolbar {\n  text-align: right;\n  padding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widget/widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"template == 'default'; then default\"></div>\n<div *ngIf=\"template == 'store'; then store\"></div>\n<div *ngIf=\"template == 'dashboard'; then dashboard\"></div>\n\n\n\n\n\n<ng-template #dashboard>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"pull-right\">\n                <button class=\"btn btn-simple btn-success\" mdTooltip=\"Edit\" \n                (click)=\"sendAction('edit',{id:id})\"\n                mdTooltipPosition=\"above\" style=\"width:10px;padding:0px;margin:0;\">\n                     <i class=\"material-icons\">edit</i>\n                </button>&nbsp;&nbsp;\n                <button class=\"btn btn-simple btn-danger\" mdTooltip=\"Remove\"\n                (click)=\"sendAction('remove',{id:id})\" \n                mdTooltipPosition=\"above\" style=\"width:10px;padding:0px;margin:0;\">\n                     <i class=\"material-icons\">close</i>\n                </button>\n            </span>\n            {{label}}\n        </div> \n        <div class=\"text-center\" style=\"padding:15px 40px 15px 40px;margin-bottom: -10px;\">\n             <ng-gauge [bgRadius]=\"gauge.bgRadius\" [bgColor]=\"gauge.bgColor\"\n              [rounded]=\"gauge.rounded\" [reverse]=\"gauge.reverse\"\n              [animationSecs]=\"gauge.animationSecs\" [labels]=\"gauge.labels\"\n              [segments]=\"gauge.segments\">\n            </ng-gauge>\n        </div>\n        <ul class=\"list-group no-radius\">\n          <li *ngFor=\"let info of information\" class=\"list-group-item\" style=\"font-size: 13px;\">\n            <span class=\"btn btn-simple {{info.style}}\" style=\"width:20px;padding:0px;margin:0;\">\n                <i [class]=\"info.icon\"></i>\n            </span>\n            {{info.value}}\n          </li>\n        </ul>\n    </div>\n</ng-template>\n\n\n\n\n\n \n<ng-template #default>\n<div class=\"widget widget-stats\">\n  <div class=\"widget-header\" data-background-color=\"blue\">\n\t\t<i [class]=\"icon\"></i>\n\t</div>\n\t<div class=\"widget-content\">\n\t    <p class=\"category\">{{label}}</p>\n\t    <div *ngIf=\"type=='single'\" >\n\t    \t<p class=\"title {{titleClass}}\"> {{value}} \n\t    \t\t<span [class]=\"unitClass\">{{unit}}</span>\n\t    \t</p>\n\t    </div>\n\n\t  \t<div *ngIf=\"type=='double'\">\n\t  \t\t<p class=\"text-double\">\n\t\t  \t\t<span class=\"min\">{{value.min}}<span class=\"unit\">{{unit}}</span></span>&nbsp;\n\t\t  \t\t<span class=\"max\">{{value.max}}<span class=\"unit\">{{unit}}</span></span>\n\t\t  \t</p>\n\t  \t</div>  \n\n\t</div>\n\t <div class=\"widget-footer\">\n        <!-- <div class=\"stats\">\n           <i class=\"fa fa-calendar\"></i> 1 month ago\n        </div> -->\n    </div>\n</div>\n</ng-template>\n\n\n\n\n\n\n<ng-template #store>\n\t<div class=\"card card-product\">\n        <div class=\"card-image animated\" data-header-animation=\"true\">\n            <a href=\"#pablo\">\n                <img [src]=\"url\" style=\"height:160px;\">\n            </a>\n        \t<div class=\"ripple-container\"></div>\n        </div>\n        <div class=\"card-content\">\n            <div class=\"card-actions\">\n                 <button class=\"btn btn-info btn-simple\" mdTooltip=\"View Detail\"  \n                 style=\"padding:0px;margin:15px;\" \n                 (click)=\"sendAction('view',{id:id})\">\n                      <i class=\"material-icons\">art_track</i>\n                  </button>\n                  <button class=\"btn btn-success btn-simple\" mdTooltip=\"Edit\"  \n                 style=\"padding:0px;margin:15px;\" \n                 (click)=\"sendAction('edit',{id:id})\">\n                      <i class=\"material-icons\">edit</i>\n                  </button>\n                  <button class=\"btn btn-danger btn-simple\" mdTooltip=\"Remove\"  \n                 style=\"padding:0px;margin:15px;\" \n                 (click)=\"sendAction('remove',{id:id})\">\n                      <i class=\"material-icons\">close</i>\n                  </button>\n            </div>\n            <h4 class=\"card-title\">\n                <a href=\"#pablo\">Pondok pinang 3</a>\n            </h4>\n            <div class=\"card-description\">\n                Jl pondok pinang 3 no 9 gang bidan\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/widget/widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_gauge__ = __webpack_require__("../../../../ng-gauge/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  fungsi dari app widget adalah untuk membuat semua view widget yang akan di proses oleh developer
  adapun jenis widget yang digunakan untuk sementara sekarang adalah widget default, widget store,
  widget dashboard
*/
var WidgetComponent = (function () {
    function WidgetComponent() {
        /*
          output action ini akan mengoutput data apabila ada event click dari user misalnya
          edit remove view untuk menerima datanya berikut caranya
          <app-widget [template]="'store'" (action)="myAction($event)"></app-widget>
        */
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.metadata = {
            watthour: { type: "single", unitClass: "unit", icon: "fa fa-bar-chart" },
            watt: { type: "single", unitClass: "unit", icon: "fa fa-bolt" },
            temperature: { type: "double", unitClass: "unit", icon: "fa fa-thermometer-full" },
            humidity: { type: "double", unitClass: "unit", icon: "fa fa-tint" },
            default: { type: "single", unitClass: "unit", icon: "fa fa-tag" },
            spacious: { type: "single", unitClass: "unit", icon: "fa fa-institution" },
            performance: { type: "single", unitClass: "unit-small", icon: "fa fa-line-chart" }
        };
        this.titleClass = "";
    }
    WidgetComponent.prototype.ngOnInit = function () {
        if (this.template == 'default') {
            this.type = this.metadata[this.config.category].type;
            this.icon = this.metadata[this.config.category].icon;
            this.unitClass = this.metadata[this.config.category].unitClass;
            this.conversionValue(this.config.value, this.config.category);
            this.performingCondition(this.config);
        }
        else if (this.template == 'store') {
            this.setStore();
        }
        else {
            this.setDashboard();
        }
    };
    WidgetComponent.prototype.sendAction = function (type, data) {
        this.action.emit({ action: type, data: data });
    };
    WidgetComponent.prototype.setDashboard = function () {
        this.id = this.config.id;
        this.label = this.config.label;
        this.information = this.generateInformation(this.config.information);
        this.gauge = this.generateGauge(this.config.gauge);
    };
    WidgetComponent.prototype.generateGauge = function (config) {
        function setColor(value) {
            return (value < 70 ? '#5cb85c' : value < 90 ? '#f0ad4e' : '#cb3935');
        }
        var setting = { bgRadius: 60, bgColor: "#5bc0de", rounded: false, reverse: false,
            animationSecs: 1,
            labels: [
                new __WEBPACK_IMPORTED_MODULE_1_ng_gauge__["a" /* GaugeLabel */]({ color: "#2e6da4", text: config.unit, x: 0, y: 25, fontSize: '1.5em' }),
                new __WEBPACK_IMPORTED_MODULE_1_ng_gauge__["a" /* GaugeLabel */]({ color: "#2e6da4", text: config.value, x: 0, y: 0, fontSize: '2.5em' })
            ],
            segments: [
                new __WEBPACK_IMPORTED_MODULE_1_ng_gauge__["c" /* GaugeSegment */]({ value: config.value_gauge, color: setColor(config.value_gauge), borderWidth: 20 })
            ]
        };
        return setting;
    };
    WidgetComponent.prototype.generateInformation = function (config) {
        var keys = Object.keys(config);
        var result = [];
        var category = {
            alarm: {
                style: "btn-danger", icon: "fa fa-bell", value: function (value) {
                    return "Total alarms " + value;
                }
            },
            maintenance: {
                style: "btn-warning", icon: "fa fa-tasks", value: function (value) {
                    return value + " Devices need maintenance";
                }
            },
            temperature: {
                style: "btn-info", icon: "fa fa-thermometer-full", value: function (value) {
                    return "Room temperature " + value + "\u2103";
                }
            }
        };
        var j = 0;
        for (var i in config) {
            result.push({
                style: category[keys[j]].style,
                icon: category[keys[j]].icon,
                value: category[keys[j]].value(config[i])
            });
            j++;
        }
        return result;
    };
    WidgetComponent.prototype.setStore = function () {
        if (this.url == undefined || this.url == "") {
            this.url = '../assets/img/none.jpg';
        }
        else {
            this.url = "../assets/img/" + this.url;
        }
        this.address = this.config.address;
        this.id = this.config.id;
        this.label = this.config.label;
    };
    WidgetComponent.prototype.performingCondition = function (config) {
        if (config.category == "performance") {
            this.titleClass = config.condition;
        }
    };
    WidgetComponent.prototype.conversionValue = function (value, category) {
        var allUnit = {
            watt: "W",
            temperature: "°C",
            humidity: "%",
            watthour: "WH",
            default: "",
            spacious: "M\u00B2",
            performance: "WH/M\u00B2"
        };
        this.unit = allUnit[category];
        if (category != "humidity" && category != "temperature") {
            if (category != "spacious") {
                if (value < 1000) {
                    this.value = value.toFixed(0);
                }
                else if (value >= 1000 && value < 1000000) {
                    value /= 1000;
                    this.unit = "K" + this.unit;
                    this.value = value.toFixed(1);
                }
                else {
                    value /= 1000000;
                    this.unit = "M" + this.unit;
                    this.value = value.toFixed(1);
                }
            }
            else {
                if (value < 100) {
                    this.value = value.toFixed(0);
                }
                else if (value >= 100 && value < 10000) {
                    value /= 100;
                    this.unit = "Da" + this.unit;
                    this.value = value.toFixed(1);
                }
                else if (value >= 10000 && value < 1000000) {
                    value /= 10000;
                    this.unit = "H" + this.unit;
                    this.value = value.toFixed(1);
                }
                else {
                    value /= 1000000;
                    this.unit = "K" + this.unit;
                    this.value = value.toFixed(1);
                }
            }
            this.value = this.value.split(".").join(",");
        }
        else {
            this.value = { min: value.min.toFixed(0), max: value.max.toFixed(0) };
        }
    };
    return WidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "config", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], WidgetComponent.prototype, "action", void 0);
WidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widget',
        template: __webpack_require__("../../../../../src/app/shared/components/widget/widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/widget/widget.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetComponent);

var _a;
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        var list = ["sla", "ac"];
        var allCapital = false;
        for (var i in list) {
            if (list[i] == value) {
                allCapital = true;
            }
        }
        value = value.split("_").join(" ");
        if (allCapital) {
            value = value.toUpperCase();
        }
        else {
            value = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/convert.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertPipe = (function () {
    function ConvertPipe() {
    }
    ConvertPipe.prototype.transform = function (value, type) {
        switch (type) {
            case "capital":
                value = Capitalize();
                break;
        }
        function Capitalize() {
            var list = ["sla", "ac"];
            var allCapital = false;
            for (var i in list) {
                if (list[i] == value) {
                    allCapital = true;
                }
            }
            value = value.split("_").join(" ");
            if (allCapital) {
                value = value.toUpperCase();
            }
            else {
                value = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
            }
            return value;
        }
        return value;
    };
    return ConvertPipe;
}());
ConvertPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'convert'
    })
], ConvertPipe);

//# sourceMappingURL=convert.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/field.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FieldPipe = (function () {
    function FieldPipe() {
    }
    FieldPipe.prototype.transform = function (value, type) {
        function coversion(value, category) {
            var unit;
            var unitList = { watthour: "WH", watt: "W" };
            if (value < 1000) {
                unit = unitList[category];
                value = value.toFixed(0);
            }
            else if (value >= 1000 && value < 1000000) {
                value /= 1000;
                unit = "K" + unitList[category];
                value = value.toFixed(1);
            }
            else {
                value /= 1000000;
                unit = "M" + unitList[category];
                value = value.toFixed(1);
            }
            value = value.split(".").join(",");
            return value + " " + unit;
        }
        switch (type) {
            case "capitalize":
                value = new __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__["a" /* CapitalizePipe */]().transform(value);
                break;
            case "date":
                value = new Date(value);
                value = __WEBPACK_IMPORTED_MODULE_2_moment__(value).format('DD/MM/YYYY hh:mm');
                break;
            case "yearOnly":
                value = new Date(value);
                value = __WEBPACK_IMPORTED_MODULE_2_moment__(value).format('YYYY');
                break;
            case "watthour":
                if (value != NaN && value != undefined) {
                    value = coversion(value, type);
                }
                break;
            case "watt":
                if (value != NaN && value != undefined) {
                    value = coversion(value, type);
                }
                break;
        }
        return value;
    };
    return FieldPipe;
}());
FieldPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'field'
    })
], FieldPipe);

//# sourceMappingURL=field.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, type) {
        var value = [];
        switch (type) {
            case "default":
                value = items.filter(function (item) {
                    return JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1;
                });
                break;
            case "detail":
                // if (filter && Array.isArray(items)) {
                var filterKeys_1 = Object.keys(filter);
                value = items.filter(function (item) {
                    return filterKeys_1.reduce(function (memo, keyName) {
                        return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                    }, true);
                });
                // } else {
                //     value = items;
                // }
                break;
        }
        return value;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

// import {Pipe, PipeTransform} from '@angular/core';
// @Pipe({
//     name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//     transform(items: any, filter: any): any {
//       
//     }
// } 
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, field, type) {
        switch (type) {
            case "asc":
                array.sort(function (a, b) {
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    else if (a[field] > b[field]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case "desc":
                array.sort(function (a, b) {
                    if (a[field] < b[field]) {
                        return 1;
                    }
                    else if (a[field] > b[field]) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
        }
        return array;
    };
    return SortPipe;
}());
SortPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sort'
    })
], SortPipe);

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = (function () {
    function HistoryService() {
    }
    HistoryService.prototype.setGroup = function (store) {
        this.groupStore = store;
    };
    //location == {latitude:"100",longitude:"100"} 
    HistoryService.prototype.setData = function (location) {
        this.location = location;
    };
    return HistoryService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["a" /* LocalStorage */])("location"),
    __metadata("design:type", Object)
], HistoryService.prototype, "location", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["a" /* LocalStorage */])("groupStore"),
    __metadata("design:type", Object)
], HistoryService.prototype, "groupStore", void 0);
HistoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HistoryService);

//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loopback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoopbackService = (function () {
    function LoopbackService(http) {
        this.http = http;
        this.dataSet = {
            location: { type: "GET", url: "/api/location_store" },
            formCreate: { type: "POST", url: "/api/apps/service" },
            store: { type: "GET", url: "/api/store/", params: true },
            ProvinceService: { type: "POST", url: "/api/apps/location" },
            ZoneService: { type: "POST", url: "/api/apps/location" },
            BranchService: { type: "POST", url: "/api/apps/location" },
            StoreService: { type: "POST", url: "/api/apps/location" },
            'store-dashboard': { type: "GET", url: "/api/store/dashboard", params: true },
            'store-dashboard/chart': { type: "GET", url: "/api/store/dashboard/chart", params: true },
            'store-alarm': { type: "GET", url: "/api/store/alarm" },
            'store-inventory': { type: "GET", url: "/api/store/inventory", params: true },
            alarm: { type: "GET", url: "/api/alarm" },
            dashboard: { type: "GET", url: "/api/dashboard" },
            inventoryService: { type: "POST", url: "/api/apps/inventory" }
        };
    }
    LoopbackService.prototype.getService = function (category, data) {
        var url = this.dataSet[category].url;
        if (this.dataSet[category].type == "GET") {
            if (this.dataSet[category].params == undefined) {
                return this.http.get(url).map(function (res) { return res.json(); });
            }
            else {
                url = this.setParams(category, url, data);
                return this.http.get(url).map(function (res) { return res.json(); });
            }
        }
        else {
            return this.http.post(url, data).map(function (res) { return res.json(); });
        }
    };
    LoopbackService.prototype.setParams = function (category, url, data) {
        var config = {
            'store-dashboard/chart': ["categoryChart", "typeChart"],
            'store-dashboard': ["latitude", "longitude"],
            'store-inventory': ["id"]
        };
        var metadata = config[category];
        for (var i in metadata) {
            url += "/";
            url += data[metadata[i]].toString();
        }
        return url;
    };
    return LoopbackService;
}());
LoopbackService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoopbackService);

var _a;
//# sourceMappingURL=loopback.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loopbackv2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loopbackv2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Loopbackv2Service = (function () {
    function Loopbackv2Service(http) {
        this.http = http;
    }
    Loopbackv2Service.prototype.read = function (link) {
        return this.http.get(link).map(function (result) { return result.json(); });
    };
    Loopbackv2Service.prototype.service = function (link, data) {
        return this.http.post(link, data).map(function (result) { return result.json(); });
    };
    return Loopbackv2Service;
}());
Loopbackv2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Loopbackv2Service);

var _a;
//# sourceMappingURL=loopbackv2.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_materials__ = __webpack_require__("../../../../../src/app/tools/materials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2draggable_draggable_directive__ = __webpack_require__("../../../../ng2draggable/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__ = __webpack_require__("../../../../ng2-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_gauge__ = __webpack_require__("../../../../ng-gauge/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_convert_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_sort_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_field_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/field.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_loopback_service__ = __webpack_require__("../../../../../src/app/shared/services/loopback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_history_service__ = __webpack_require__("../../../../../src/app/shared/services/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_loopbackv2_service__ = __webpack_require__("../../../../../src/app/shared/services/loopbackv2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_area_area_component__ = __webpack_require__("../../../../../src/app/shared/components/area/area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_item_item_component__ = __webpack_require__("../../../../../src/app/shared/components/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_component__ = __webpack_require__("../../../../../src/app/shared/components/widget/widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_form_form_component__ = __webpack_require__("../../../../../src/app/shared/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_table_table_component__ = __webpack_require__("../../../../../src/app/shared/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chart_chart_component__ = __webpack_require__("../../../../../src/app/shared/components/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_map_map_component__ = __webpack_require__("../../../../../src/app/shared/components/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//pipes





//services



//komponen







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__tools_materials__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_webstorage__["b" /* Ng2Webstorage */],
            __WEBPACK_IMPORTED_MODULE_8_angular_highcharts__["b" /* ChartModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD5DTq_C3F4HLDcRYbYPJKkVY4_Z16Xm5Y'
            }),
            __WEBPACK_IMPORTED_MODULE_11_angular2_toaster__["b" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_gauge__["b" /* GaugeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_ng2draggable_draggable_directive__["a" /* Draggable */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_convert_pipe__["a" /* ConvertPipe */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_sort_pipe__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_field_pipe__["a" /* FieldPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_20__components_area_area_component__["a" /* AreaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_component__["a" /* WidgetComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__pipes_convert_pipe__["a" /* ConvertPipe */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_sort_pipe__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_field_pipe__["a" /* FieldPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_20__components_area_area_component__["a" /* AreaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_component__["a" /* WidgetComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_history_service__["a" /* HistoryService */], __WEBPACK_IMPORTED_MODULE_17__services_loopback_service__["a" /* LoopbackService */], __WEBPACK_IMPORTED_MODULE_19__services_loopbackv2_service__["a" /* Loopbackv2Service */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/template/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <!-- <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav> -->\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/template/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/template/footer/footer.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/template/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle() | convert:'capital'}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/template/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/template/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var paths = this.location.path();
        paths = paths.split("/");
        if (paths[3] == undefined) {
            paths = paths[2];
        }
        else {
            paths = paths[2] + "_" + paths[3];
        }
        return paths;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/template/navbar/navbar.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/template/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        EMS\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Mike John responded to your email</a></li>\n                <li><a href=\"#\">You have 5 new tasks</a></li>\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\n                <li><a href=\"#\">Another Notification</a></li>\n                <li><a href=\"#\">Another One</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" \n            class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/template/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'store', title: "Store", icon: 'store', class: '' },
    { path: 'alarm', title: 'Alarm', icon: 'notifications', class: '' },
    { path: '../ceo', title: 'Map', icon: 'place', class: 'active-pro' }
];
var SidebarComponent = (function () {
    function SidebarComponent(location) {
        this.location = location;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.activeNav(this.location.path());
    };
    SidebarComponent.prototype.activeNav = function (path) {
        var paths = path.split("/");
        for (var i in this.menuItems) {
            if (paths[1] == "home" && this.menuItems[i].path == paths[2]) {
                this.menuItems[i].class = " active";
            }
        }
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/template/sidebar/sidebar.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/template/template.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/template/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/template/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/template/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TemplateModule = (function () {
    function TemplateModule() {
    }
    return TemplateModule;
}());
TemplateModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__["b" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__["b" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */]
        ]
    })
], TemplateModule);

//# sourceMappingURL=template.module.js.map

/***/ }),

/***/ "../../../../../src/app/tools/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])('.block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter .block', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])(400, [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateY(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/tools/materials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=materials.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map