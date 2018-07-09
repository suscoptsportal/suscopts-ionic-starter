webpackJsonp([1],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, lss) {
        this.navCtrl = navCtrl;
        this.lss = lss;
    }
    HomePage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        this.lss.name$.subscribe(function (x) {
            _this.name = x;
        });
    };
    HomePage.prototype.signOut = function () {
        this.lss.LogoutUser();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      MAIN PAGE\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n  Take it from here. Good Luck with your creation. Welcome {{name}}\n  </p>\n  <br/>\n  <button ion-button full (click)="signOut();">\n\n    <ion-icon name="log-out"></ion-icon> &nbsp; Sign Out\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		676,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Config__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralService = /** @class */ (function () {
    function GeneralService(http, lss) {
        this.http = http;
        this.lss = lss;
        this.Token = null;
    }
    GeneralService.prototype.getBasicPost = function () {
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        head.append("Authorization", "Basic " + __WEBPACK_IMPORTED_MODULE_3__model_Config__["a" /* Defaults */]["basic"]);
        //head.append("Content-Type", "application/x-www-form-urlencoded");
        head.append("Content-Type", "application/json");
        return { headers: head };
    };
    /// General Login
    GeneralService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__model_Config__["a" /* Defaults */]["api"] + "/login/", { email: email, password: password }, this.getBasicPost())
            .map(function (res) { return res.json(); })
            .do(function (x) {
            if (x["status"] == "success") {
                _this.lss.LoginUser(x["token"], x["name"]);
                return { status: "success", message: "Welcome " + x["name"] };
            }
            else {
                return x;
            }
        })
            .catch(this.handleError);
    };
    /*
     Limit to going members to church.
     All for any possible congregation and Main core members.
     http://suscoptsapi.stmary.info/login/[all | main]/[churches_id]/
  
    */
    // login(email: string, password: string): Observable<any> {
    //   return this.http
    //     .post(
    //       `${Defaults["api"]}/login/all/${Defaults["churchid"]}`,
    //       { email: email, password: password },
    //       this.getBasicPost()
    //     )
    //     .map((res: Response) => res.json())
    //     .do(x => {
    //       if (x["status"] == "success") {
    //         this.lss.LoginUser(x["token"], x["name"])
    //         return { status: "success", message: "Welcome " + x["name"] }
    //       } else {
    //         return x
    //       }
    //     })
    //     .catch(this.handleError)
    // }
    /*
    Limit to group
    http://suscoptsapi.stmary.info/login/group/[group_id]/
    */
    // login(email: string, password: string): Observable<any> {
    //   return this.http
    //     .post(
    //       `${Defaults["api"]}/login/group/${Defaults["groupid"]}`,
    //       { email: email, password: password },
    //       this.getBasicPost()
    //     )
    //     .map((res: Response) => res.json())
    //     .do(x => {
    //       if (x["status"] == "success") {
    //         this.lss.LoginUser(x["token"], x["name"])
    //         return { status: "success", message: "Welcome " + x["name"] }
    //       } else {
    //         return x
    //       }
    //     })
    //     .catch(this.handleError)
    // }
    GeneralService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? "error.status - error.statusText"
                : "Server error";
        console.error(errMsg); // log to console instead
        this.lss.LogoutUser();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    GeneralService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]])
    ], GeneralService);
    return GeneralService;
}());

//# sourceMappingURL=general.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_general_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_local_storage_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_general_service__["a" /* GeneralService */],
                __WEBPACK_IMPORTED_MODULE_9__services_local_storage_service__["a" /* LocalStorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = /** @class */ (function () {
    function User() {
        this.token = "";
        this.name = "";
        this.status = 0;
    }
    User.prototype.setValues = function (token, name) {
        this.token = token;
        this.name = name;
    };
    User.prototype.setStatus = function (val) {
        this.status = val;
    };
    User.prototype.checkUser = function () {
        return (this.token == "" || this.token === null) ? true : false;
    };
    User.prototype.getToken = function () {
        return this.token;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getStatus = function () {
        return this.status;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], User);
    return User;
}());

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.localUser = new User();
        this._token = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this._name = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.token$ = this._token.asObservable();
        this.name$ = this._name.asObservable();
        if (localStorage.getItem("token") != "" && localStorage.getItem("name") != "") {
            this.localUser.setValues(localStorage.getItem("token"), localStorage.getItem("name"));
            this._token.next(this.localUser.getToken());
            this._name.next(this.localUser.getName());
        }
    }
    LocalStorageService.prototype.ngInit = function () {
    };
    LocalStorageService.prototype.LoginUser = function (token, name) {
        //let user: User;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        this.localUser.setValues(token, name);
        this._token.next(this.localUser.getToken());
        this._name.next(this.localUser.getName());
        return this.localUser;
    };
    LocalStorageService.prototype.LogoutUser = function () {
        //this.localUser.setValues("", "");
        this.localUser = new User();
        localStorage.setItem("token", '');
        localStorage.setItem("name", '');
        this._token.next('');
        this._name.next('');
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Defaults; });
var Defaults = {
    //DEMO API
    //"api" : "http://localhost:5555",
    "api": "http://suscoptsapi.stmary.info",
    "basic": "c3VzY29wdHM6c3QhZ2VvcmdlfHN0IW1pbmE=",
    // if needed
    "churchid": 0,
    // if needed
    "groupid": 0
};
//# sourceMappingURL=Config.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_local_storage_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, lss, splashScreen) {
        this.lss = lss;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.lss.token$.subscribe(function (x) {
            console.log("token", x);
            if (typeof x === 'undefined' || x == null || x === '') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_general_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(129);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, toastCtrl, navParams, gernalService, lss) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.gernalService = gernalService;
        this.lss = lss;
        this.str = "";
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Login in ... "
        });
        loading.present();
        this.gernalService.login(this.email.toLowerCase(), this.password).subscribe(function (x) {
            loading.dismiss().catch(function (x) { return console.log(x); });
            console.log(x);
            if (x['status'] == "success") {
                _this.toastCtrl
                    .create({
                    message: "Welcome " + x['name'], duration: 3000
                })
                    .present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.toastCtrl
                    .create({ message: x["message"], duration: 3000 })
                    .present();
            }
        }, function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            _this.toastCtrl.create({
                "message": "Server is inactive",
                "duration": 3000
            }).present();
            ;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SUSCOPTS APP STARTER</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-item >\n    <div align="center">\n      <ion-avatar item-center>\n        <img src="assets/imgs/jesus.jpg">\n      </ion-avatar>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n  <button ion-button full color="myDarker" ion-button icon-left (click)="loginUser();">\n    <ion-icon name="log-in" start></ion-icon>\n    Sign In\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelhabashy/Desktop/suscopts/suscopts_ionic_starter/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_general_service__["a" /* GeneralService */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map