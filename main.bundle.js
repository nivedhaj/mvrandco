webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3 class=\"homeTitle\" style=\"color: orange\"> About Us </h3>\n        </div>\n\n        <div class=\"col-md-8\" style=\"padding-top: 1%\">\n            <h4 style=\"font-weight: bold;\">Policy</h4>\n            <p>\n                Provide world class specialized and proactive services to our clients irrespective of their field of\n                work, size and location. Our trained and experienced team is equipped with a high degree of\n                professional ethics and a personal approach to all our assignments. The analytical skills of our team\n                of qualified and specialized experts combined with continuous training and progressive education enable\n                us to empower our clients with value added services.\n            </p>\n        </div>\n\n        <div class=\"col-md-8\" style=\"padding-top: 1%\">\n            <h4 style=\"font-weight: bold;\">Mission</h4>\n            <p>\n                Mission- We aim towards growing as a global firm through promoting and partnering the growth of our\n                clients by providing top-notch services and solutions.\n            </p>\n        </div>\n        <div class=\"col-md-8\" style=\"padding-top: 1%\">\n            <h4 style=\"font-weight: bold;\">Our Team</h4>\n            <h5 style=\"font-weight: bold;\">Mohan.R.Mudakavi, B.Com, FCA, Senior Partner</h5>\n            <p>\n                He is a Commerce graduate and a fellow member of the Institute of Chartered Accountants of India since\n                1986 . He has the distinction of being one of the youngest persons to be qualified as a Chartered\n                Accountant. Mohan carries with him over two decades of experience in practicing as a Chartered\n                Accountant. Prior to starting up his own practice through MVR and Co, Mohan had a strong and relevant\n                experience with finance departments at leading government organizations like National Textile\n                Corporation and Karnataka Soaps & Detergents. He has been practicing in the private sector as a\n                Chartered Accountant and Tax Consultant since 1984. Mohan’s practice areas include conducting statutory\n                audits and internal audits of small, medium and large scale companies, carrying out bank audits and\n                audits of government institutions and providing services in accounting, tax and company law matters,\n                assisting in higher level financial and managerial decision making and related corporate services.\n            </p>\n            <p>\n                Apart from being an established professional, Mohan is also an academician and has had associations as\n                visiting faculty with leading commerce colleges across Karnataka. Added to this, Mohan has been invited\n                by several Finance Groups and associations to deliver lectures current economic and financial issues\n                having a bearing on the functioning and growth of various sectors of our economy.\n            </p>\n        </div>\n        <div class=\"col-md-8\">\n            <h5 style=\"font-weight: bold;\">H.S.Venkatesh Rao, B.Sc, FCA, AICWA, DISA(ICAI), Partner</h5>\n            <p>Mr. Venkatesh Rao is a practicing Chartered Accountant with experience of over two decades and\n                specializes in Internal audits of limited companies and Government organizations, statutory audit of\n                nationalized banks, insurance companies and other limited companies, tax audits of various firms and\n                companies. His area of expertise also includes development and installation of Costing System, Systems\n                Audit, Management Audit, Cost Control /Reduction aspects, Revival of Sick Units, Stock Audit, Income\n                tax, Company Law, VAT and Service tax.</p>\n        </div>\n        <div class=\"col-md-8\">\n            <h5 style=\"font-weight: bold;\">T.S.V.Rajagopal, B.com, FCA, Partner</h5>\n            <p>Mr.Rajagopal is a fellow member of the Institute of Chartered Accountants of India and he has the\n                distinction of securing the 4th rank in Final C.A exams conducted by the institute. He has been\n                practicing for more than 20 years post qualification and is experienced in handling statutory audits of\n                nationalized bank branches and limited companies (both public and private including listed companies),\n                internal audits of limited companies, tax audits of partnerships and limited companies, stock and\n                revenue audits of banks.</p>\n        </div>\n        <div class=\"col-md-8\">\n            <h5 style=\"font-weight: bold;\">K.S.Varadachar, B.com, FCA, Partner</h5>\n            <p>He is a fellow member of the Institute of Chartered Accountants of India and has been handling company\n                related audits and bank audits for more than 20yrs.</p>\n        </div>\n        <div class=\"col-md-8\">\n            <h5 style=\"font-weight: bold;\">Madhusudan.R.Bidi, M.Com, LLM, Associate</h5>\n            <p>He has been working with the firm as an associate for the past 22 years and specializes in handling all\n                legal aspects related to finance connected with various industries as well as company law matters.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/about/component.html"),
            styles: [__webpack_require__("./src/app/about/component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n\tbackground: transparent;\n}\n\n.wrapper {\n\twidth:966px;\n\tmin-height: 100%;\n\theight: 1000px;\n\tmargin: 0 auto;\n\tpadding-left: 0%;\n\tmargin-left: fixed;\n}\n\n.wrapper:after{\n\tdisplay: block;\n}\n\n.footer, .wrapper:after{\n\theight: 105px;\n}\n\n.containerHead{\n\theight: 50%;\n\tpadding-left: 0px !important;\n}\n\n.text-align{\n\tpadding-right: 5%;\n\tbackground-color: transparent;\n}\n\n.content{\n\t\tbackground-color: white;\n\t\twidth:950px;\n\t\tfloat: left;\n\t\tborder-radius: 4px;\n}\n\n.blink{\n\tvisibility: visible;\n\tbackground-size: cover;\n\tposition: relative;\n\twidth: 966px;\n\tvertical-align: top;\n}\n\n.mvr-nav-tabs{\n\theight: 45px;\n\twidth: 968px;\n\tmargin-right: 0%;\n\tborder-bottom: none !important;\n\tfont-family: 'Jockey One','sans-serif';\n\tfont-weight: normal;\n\tletter-spacing: 1px;\n\ttext-shadow: 1px 2px 3px #000000;\n\tborder-radius: 6px;\n\tmargin-left: 13px;\n\tborder: none !important;\n\tpadding-left: 15px;\n/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+83,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+93,0e0e0e+93,0e0e0e+94 */\nbackground: #7d7e7d; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: -webkit-gradient(linear,  left top, left bottom,  from(#7d7e7d),color-stop(83%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(93%, #0e0e0e),color-stop(93%, #0e0e0e),color-stop(94%, #0e0e0e));\nbackground: linear-gradient(to bottom,  #7d7e7d 0%,#0e0e0e 83%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 93%,#0e0e0e 93%,#0e0e0e 94%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */\n\n}\n\n.mvr-nav-tabs a{\n\tcolor: #AAAAAA;\n\tborder-right: 1px solid black !important;\n\tborder-radius: 0px !important;\n}\n\n.mvr-nav-tabs a:hover{\n\tcolor: #fdcd04;\n\tbackground-color:#333333 !important;\n\theight:45px;\n\tborder-radius: 2px;\n}\n\n.mvr-nav-tabs>li.active>a{\n\tcolor:#fdcd04 !important;\n\tbackground-color: #333333 !important;\n    border-left: 1px solid black !important;\n\theight: 45px;\n\tcursor:pointer !important;\n}\n\n.mvr-nav-tabs>li>a{\n\tborder-radius: none !important;\n}\n\n.sppu-nav-tabs>li:hover>a{\n\tcolor:#fdcd04 !important;\n\tbackground-color: #333333 !important;\n    border-left: 1px solid black !important;\n\theight: 45px;\n\tcursor:pointer !important;\n}\n\n.footerline{\n\tmargin-top: -35px;\n}\n\n.site-title {\n\tfloat: left;\n\tmargin: 3px 0 0px 0;\n\twidth: auto;\n\tfont-size: 30px;\n\tline-height: 36px;\n\tmargin-top: 35px;\n}\n\n.site-title span {\n\tcolor:#fdcd04 !important;\n\tletter-spacing:-1px;\n\tfont-family:Trebuchet MS,sans-serif;\n\tfont-weight:bold;\n\ttext-decoration: none;\n\tdisplay:block; \n\tmargin-top:-65px; \n\tmargin-left:110px; \n\ttext-shadow: 1px 1px 5px #222222;\n}\n\n.site-description {\n\tfont-style: italic;\n\tmargin-top:-100px; \n\tmargin-left:110px;\n\tcolor:#FFF;\n\tfont-size:18px;\n\twidth: 220px;\n\tfont-weight: bold;\n}\n\n#access2 {\n\tbackground: transparent;\n\tmargin: 0 auto;\n\twidth: 939px;\n\tdisplay:block;\n\tfloat:left;\n\tfont-weight:bold;\n}\n\n.homeTitle{\n\tfont-family: 'Marvel','sans-serif';\n\tfont-size:30px;\n\tline-height:1.3em;\n\tcolor: #444;\n}\n\n.rightTitle{\n\tfont-family: 'Marvel','sans-serif';\n\tfont-size:25px;\n\tline-height:1.3em;\n\tcolor: #444;\n}\n\n.homeChar{\n\tfont-family: 'Marvel','sans-serif';\n\tmargin-top:40px;\n\tmargin-bottom:30px;\n\t/*color: #444;*/\n\tfont-weight: bold;\n}\n\n.recNews{\n\tfont-family: 'Marvel','sans-serif';\n\ttext-align:center;\n\tfont-size:22px;\n\tcolor:#222;\n\tmargin-top: -10px;\n\tcursor: pointer;\n    margin-bottom:3%;\n}\n\n.recNewsCont{\n\ttext-align: left;\n\tfont-size: 13px !important;\n\tpadding-bottom: 22px;\n}\n\n.recNewsCont:hover>a{\n\t text-decoration: underline;\n\t color: red !important; \n\t cursor: pointer;\n}\n\n.homeTable{\n\tmargin-top:20px;\n\theight:300px;\n\tbackground-color: #f2f2f2;\n\twidth: 250px !important;\n}\n\n.acadDrop{\n\tbackground-color: #555;\n}\n\n.acadDrop a{\n\tcolor: #AAAAAA !important;\n}\n\n.acadDrop>li.active>a{\n    color: #fdcd04 !important;\n    background-color:none;\n}\n\n.acadDrop>li:hover{\n    background-color:none;\n}\n\n.acadDrop>li>a:hover{\n    color: #fdcd04 !important;\n    background-color:none;\n}\n\n.facultyName{\n\tpadding-left:px;\n\tborder:10px solid #f2f2f2;\n}\n\n.facultyNameHead{\n\tfont-weight: bold;\n}\n\n.facultyImg{\n\tborder:10px solid #f2f2f2;\n}\n\n.formStyle{\n\twidth:270px;\n\tmargin-bottom:10px;\n\tbackground-color: #f2f2f2;\n}\n\n.sub{\n\tbackground-color:#FFF5EE;\n\tpadding-bottom: 5px;\n\tpadding-top: 5px;\n\tpadding-left: 20px;\n}\n\n.p1{\n\tbackground-color: #F5DEB3;\n    text-align:right;\n    padding-right:4%;\n}\n\n.p2{\n\tbackground-color:#FFEFD5;\n    text-align:right;\n    padding-right:4%;\n}\n\n.tbl{\n\t width:700px;\n\t margin-left:120px;\n\t margin-bottom: 30px;\n\t margin-top: 10px;\n}\n\n.footc{\n\tcolor:grey;\n\tfont-size:0.9em;\n\tpadding-top:10px;\n}\n\n.foota{\n\tcolor:grey;\n\tfont-size:0.9em;\n}\n\n.footl{\n\tcolor:grey; \n\tpadding-top:20px;\n\tfont-size:0.9em;\n}\n\n.qlinks{\n\tcolor:#f1f1f1;\n\ttext-decoration:none !important;\n\tpadding-right: 5px;\n\tpadding-left: 5px;\n}\n\n.qlinks a{\n\tcolor: white !important;\n}\n\n.cetTop{\n\tdisplay: block;\n\tmargin: 0 auto;\n\tborder: 10px solid #eee;\n}\n\n.cetName{\n\ttext-align: center;\n\tfont-weight: bold;\n\tpadding-bottom: 10px;\n}\n\n.newsTblHead{\n\ttext-align:center;\n\tfont-size:17px;\n\tcolor:#888;\n}\n\n.newsTblBody{\n\tpadding-top:25px;\n\tpadding-bottom:25px;\n}\n\n.newsTblBodyCont{\n\tfont-size:15px;\n\tfont-weight:bold;\n}\n\n.contTopImg{\n\twidth:955px;\n\tfloat:left; \n\tpadding-top:13px;\n}\n\n.contBtmImg{\n\twidth:955px; \n\theight:15px;\n\tfloat:left\n}\n\n.grad{\n/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+83,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+92,0e0e0e+93,0e0e0e+93,0e0e0e+94 */\nbackground: #7d7e7d; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: -webkit-gradient(linear,  left top, left bottom,  from(#7d7e7d),color-stop(83%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(92%, #0e0e0e),color-stop(93%, #0e0e0e),color-stop(93%, #0e0e0e),color-stop(94%, #0e0e0e));\nbackground: linear-gradient(to bottom,  #7d7e7d 0%,#0e0e0e 83%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 92%,#0e0e0e 93%,#0e0e0e 93%,#0e0e0e 94%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */\n}\n\n.grad:hover{\n\tbackground-color: lightsteelblue !important;\n}\n\n.aboutTitle{\n\tfont-family: 'Marvel','sans-serif';\n\tmargin-top:2px;\n\tmargin-bottom:2px;\n\tfont-weight: bold;\n\tfont-size: 20px;\n}\n\n.accolades{\n\twidth:250px;\n\theight:500px;\n\tborder:1px solid black;\n\tborder-radius: 12px;\n\tbackground-color: black;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tmax-height: 100%;\n\toverflow-y: hidden;\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tmargin-bottom: 3%;\n}\n\n.ctLink a:hover{\n    color:white !important;\n}\n\n.content-style{\n    font-size:13px;\n    text-align:justify;\n}\n\n.content-style li{\n    margin-bottom:0.5%;\n}\n\n.nav-tabs>li>a {\n    margin-left:-3% !important;\n}\n\n.nav-tabs>li>a:hover {\n    margin-left:-3% !important;\n    border-left:1px solid black;\n}\n\n.nav-tabs>li>a:hover{\n    border-top-color:#333333 !important;\n    border-bottom-color:#333333 !important;\n}\n\n.nav-tabs>li.active>a{\n    border-top-color:#333333 !important;\n}\n\n.dropdown-menu>li>a:hover {\n    height:inherit;\n}\n\n/*Dropdown CSS*/\n\n/*.dropdown:hover .dropdown-menu {\n    display: block;\n }*/\n\n.dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover{\n     background-color:inherit !important;\n }\n\n.newsImage{\n\tmargin-bottom:10px;\n\tborder-radius:8px;\n}\n\n.img-container {\n    position: relative;\n}\n\n.top-left-first {\n    position: absolute;\n    top: 20px;\n\tleft: 20px;\n\twidth:40%;\n}\n\n.top-left-second {\n    position: absolute;\n    top: 48px;\n\tleft: 20px;\n\twidth:40%;\n}\n\n.footerMidImg{\n\twidth:915px;\n\theight:70px;\n\tfloat:left;\n\tborder-radius: 0px 0px 6px 6px;\n\tbackground-color: #020225;\n}\n\n#page {\n\tmin-height: 92%;\n\tposition: relative;\n}\n\n#page_footer {\n\tposition: absolute;\n\tpadding-left: 10px;\n}\n\n.text {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n  }\n\n.container {\n\tposition: relative;\n\ttext-align: center;\n\tcolor: white;\n  }\n\n.divLeft {\n    width:100px;\n    display:block;\n    float: left;\n}\n\n.divRight {\n    width:100px;\n    display:block;\n    float: right;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 2em; background-color: #020225; height: 2056px;\">\n<div class=\"wrapper\" style=\"background-color:white\">\n  <div id=\"page\">\n    <div>\n      <div class=\"container-fluid containerHead\">\n        <div class=\"row\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                <table width=\"100%\">\n                  <tr>\n                    <td style=\"padding-left: 4%;padding-right: 2%;padding-top: 4%;\"><img src=\"assets/img/logo.png\" /></td>\n                    <td style=\"padding-top: 4%;\"><img src=\"assets/img/banner4.jpg\" /></td>\n                  </tr>\n                </table>\n                </div>\n              </div>\n        </div>\n  \n        <div class=\"row\" style=\"padding-top: 5%\">\n          <div id=\"access2\" role=\"navigation\">\n            <ul class=\"nav nav-tabs mvr-nav-tabs\" style=\"padding-left: 35px;\">\n                <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                    <a routerLink=\"home\" class=\"tab-padding\" style=\"width: 150px\">\n                      Home</a>\n                  </li>\n              <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a routerLink=\"about\" class=\"tab-padding\" style=\"width: 150px\">\n                  About Us</a>\n              </li>\n              <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a routerLink=\"services\" class=\"tab-padding\" style=\"width: 150px\">\n                  Services</a>\n              </li>\n              <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a routerLink=\"clients\" class=\"tab-padding\" style=\"width: 150px\">\n                  Clients</a>\n              </li>\n              <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                  <a routerLink=\"resources\" class=\"tab-padding\" style=\"width: 150px\">\n                    Resources</a>\n                </li>\n              <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n                <a routerLink=\"contact\" class=\"tab-padding\" style=\"width: 150px\">\n                  Contact Us</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div id=\"page_footer\">\n    <div>\n        <span class=\"divLeft\"><img src=\"assets/img/footerlogo.png\"></span><span class=\"container divRight\"><img src=\"assets/img/footerbg.png\" style=\"padding-top: 5.9%; margin-left: 142px;margin-top: 53px;\"/> \n            <div class=\"text\" style=\"padding-top: 5%; width: 450px; margin-left: 400px; margin-top: 30px;\">Copyright © 2019 Chartered Accountant Company. All rights reserved.\n              <span> \n                  <a class=\"qlinks\" routerLink=\"home\">Home</a> <span style=\"color: white;\">|</span>\n                  <a class=\"qlinks\" routerLink=\"about\">About Us</a> <span style=\"color: white;\">|</span>\n                  <a class=\"qlinks\" routerLink=\"services\"> Services </a> <span style=\"color: white;\">|</span>\n                  <a class=\"qlinks\" routerLink=\"clients\"> Clients </a> <span style=\"color: white;\">|</span>\n                  <a class=\"qlinks\" routerLink=\"contact\"> Contact Us </a> \n                </span>\n            </div>\n          </span>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ut_aboutUs = function () { this.router.navigate(['/about']); };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("./src/app/home/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_component__ = __webpack_require__("./src/app/about/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_component__ = __webpack_require__("./src/app/services/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clients_component__ = __webpack_require__("./src/app/clients/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resources_component__ = __webpack_require__("./src/app/resources/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_component__ = __webpack_require__("./src/app/contact/component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_6__services_component__["a" /* ServicesComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_7__clients_component__["a" /* ClientsComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_8__resources_component__["a" /* ResourcesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_component__["a" /* ContactComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3 class=\"homeTitle\" style=\"color: orange\"> Clients </h3>\n            <p>Our client profile includes domestic and international organizations in various fields of work,\n                individuals and partnership firms. We have experience in serving a diversified clientele belonging to\n                fields as under:\n            </p>\n            <ul>\n                <li style=\"padding-bottom: 2%\">\n                    <span style=\"font-weight: bold\">Manufacturing industries – </span>Engineering, Garments, Food,\n                    Chemicals, Automobiles, and civil\n                    industries, computer hardware, electrical and electronic industries, infrastructure etc.\n                </li>\n                <li style=\"padding-bottom: 2%\">\n                    <span style=\"font-weight: bold\">Service industries –</span> catering and hotels, human resource\n                    development, health and medical services,\n                    financial service providers, education and training sector, social welfare organizations, software\n                    service providers, Transport and Communication services etc.\n                </li>\n                <li>\n                    <span style=\"font-weight: bold\">Trading sector – </span>iron and steel components, electrical and\n                    electronic components, food products and\n                    groceries etc.\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/clients/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/clients/component.html"),
            styles: [__webpack_require__("./src/app/clients/component.css")]
        })
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/contact/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3 class=\"homeTitle\" style=\"color: orange\"> Contact Us </h3>\n            <p style=\"font-weight: bold;\">Office at:</p>\n            <p>120(14) AMBA 3rd Floor</p>\n            <p>Dr Rajkumar Road (1st 'A' Main Road) 1st Block</p>\n            <p>Rajajinagar, Bangalore-560010</p>\n            <p>Phone: 080- 23320288 / 23325168</p>\n            <br />\n            <p>For enquiries please write to:</p>\n            <p style=\"font-weight: bold;\">info@mvrandco.com</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/contact/component.html"),
            styles: [__webpack_require__("./src/app/contact/component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n        <div class=\"row\">\n                <div class=\"col-md-8\">\n                        <div style=\"padding-bottom: 2%; padding-top: 2%; font-weight: bold; color: orange\">Welcome to MVR & Co ,</div>\n                        <div style=\"padding-bottom: 2%\">\n                                MVR and Co is a firm of chartered accountants offering a gamut of services in\n                                accounting, auditing, tax management and planning, business and financial management\n                                etc.\n                        </div>\n                        <div style=\"padding-bottom: 2%\">\n                                Established in 1984, the firm is headquartered in Bangalore with an office at\n                                Coimbatore and has presence in major cities across India through synergistic\n                                collaboration with various associates operating out of those cities. This enables us to\n                                serve a diversified base of national and international clients.\n                        </div>\n                        <div style=\"padding-bottom: 2%\">\n                                The work culture in MVR and Co is professional, personalized and excellent.\n\n                        </div>\n                        <div style=\"padding-bottom: 2%\">\n                                At MVR and Co there is no ‘standard solution’ for tax and finance related problems. We\n                                believe that understanding each business and the place of origin of the business along\n                                with the sentiments involved plays a vital role in providing suitable assistance and\n                                service. An experience of over two decades in assisting the setting up of new ventures\n                                and partnering their growth through the years has equipped us with an appreciation of\n                                the needs and requirements of such organizations. MVR and Co specializes as a one stop\n                                financial solution provider for start-up companies and new businesses. Our key\n                                differentiator is the ability to effectively provide a single-window, cost effective\n                                and personalized service to such start-up businesses.\n                        </div>\n                </div>\n                <div class=\"col-md-3\" style=\"background-color: #ccc; margin-top: 5%; margin-left: 35px; font-size: 0.8em; padding-top: 10px;\">\n                        <ul style=\"padding-left: 10px\">\n                                <li style=\"padding-bottom: 5px;\">Auditing and Accounting</li>\n                                <li style=\"padding-bottom: 5px;\">Accounting & Taxation Out source</li>\n                                <li style=\"padding-bottom: 5px;\">Business Management & Financial Consultancy</li>\n                                <li style=\"padding-bottom: 5px;\">Corporate Finance & Related Services</li>\n                                <li style=\"padding-bottom: 5px;\">Central Excise & Custom</li>\n                                <li style=\"padding-bottom: 5px;\">Direct Tax Services</li>\n                                <li style=\"padding-bottom: 5px;\">Off-shore Clients Services</li>\n                                <li style=\"padding-bottom: 5px;\">Organizational Development</li>\n                                <li style=\"padding-bottom: 5px;\">Other Services</li>\n                                <li style=\"padding-bottom: 5px;\">Service Tax Procedure & Refund</li>\n                                <li>Special Additional Duty</li>\n                        </ul>\n                </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/home/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/home/component.html"),
            styles: [__webpack_require__("./src/app/home/component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/resources/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resources/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3 class=\"homeTitle\" style=\"color: orange\"> Resources </h3>\n            <p style=\"font-weight: bold;\">Links to relevant websites;</p>\n            <p> ICAI: <span style=\"font-weight: bold;\">www.icai.org</span></p>\n            <p>Department of Income Tax: <span style=\"font-weight: bold;\">www.incometaxindia.gov.in</span></p>\n            <p> Ministry of Corporate Affairs: <span style=\"font-weight: bold;\">www.mca.gov.in</span></p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/resources/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/resources/component.html"),
            styles: [__webpack_require__("./src/app/resources/component.css")]
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/services/component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid margin-style\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3 class=\"homeTitle\" style=\"color: orange\"> Services </h3>\n            <h4 style=\"font-weight: bold; padding-top: 2%\">Income Tax :</h4>\n            <ul>\n                <li>Assistance in obtaining PAN, TAN, TIN etc</li>\n                <li>Advisory services for compliance with Income Tax laws and rules</li>\n                <li>Advisory services for tax planning</li>\n                <li>Audit under Income tax laws</li>\n                <li>Representation before authorities and tax tribunals</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Service Tax :</h4>\n            <ul>\n                <li>Assistance in service tax registration</li>\n                <li>Advisory services for compliance with Service tax laws and rules and management of records</li>\n                <li>Advisory services for tax planning</li>\n                <li>Assistance in preparation of returns, vetting of returns prior to filing</li>\n                <li>Representation before authorities and tax tribunals</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Central Excise :</h4>\n            <ul>\n                <li>Advisory services for compliance with Central Excise laws and rules</li>\n                <li>Assistance in management of records as required under Central Excise laws, rules and notifications</li>\n                <li>Representation before authorities</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">VAT :</h4>\n            <ul>\n                <li>Assistance in obtaining registrations</li>\n                <li>Advisory services for compliance with VAT laws and rules and maintenance of records</li>\n                <li>Audit under VAT laws and preparation and vetting of returns/reports prior to filing.</li>\n                <li>Representation before authorities and tax tribunals</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Audit and Assurance :</h4>\n            <ul>\n                <li>Assistance in incorporation of companies and related issues</li>\n                <li>Conducting statutory audit under Company Law and other statutes</li>\n                <li>Conducting internal audits and concurrent audits under various corporate laws</li>\n                <li>Advisory services for compliance with corporate laws like Companies Act, FEMA etc.</li>\n                <li>Advisory services for issues relating to EPF, ESIC, Labour laws and related matters</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Business management and Financial Services :</h4>\n            <ul>\n                <li>Preparation of project reports and financial projections</li>\n                <li>Valuation of shares</li>\n                <li>Due diligence in financial matters</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Drafting and Conveyancing :</h4>\n            <ul>\n                <li>MOU</li>\n                <li>Joint venture agreements</li>\n                <li>Partnership deeds</li>\n                <li>Rules and bye-laws</li>\n                <li>AoA and MoA</li>\n                <li>Trust deeds</li>\n                <li>Commercial and legal contracts </li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Other services :</h4>\n            <ul>\n                <li>Audit, Assurance and Advisory services relating to LLPs, partnerships, trusts etc</li>\n                <li>Personal tax planning for individuals</li>\n                <li>Assistance in filing of returns for individuals</li>\n                <li>Investments advisory services for individuals and enterprises</li>\n                <li>Compliance advisory services and tax services for non resident Indians</li>\n                <li>Assistance in FEMA and RBI related matters</li>\n            </ul>\n\n            <h4 style=\"font-weight: bold;\">Our Differentiator :</h4>\n            <ul>\n                <li>Ability to provide single-window, personalized and expert services in all aspects of accounting and\n                    auditing</li>\n                <li>Assisting in development and implementation of strategies on optimizing financial resource\n                    utilization</li>\n                <li>Timely updates on financial issues, compliances and other useful information</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/services/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.m = new model();
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/services/component.html"),
            styles: [__webpack_require__("./src/app/services/component.css")]
        })
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map