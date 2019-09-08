(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#block_container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"form\">\r\n<div class=\"form-group\">\r\n<div class=\"position-absolute container\" style=\"left: 0; z-index:10\">\r\n   \r\n  <div class=\"row justify-content-center\" layout-align=\"center center\">\r\n    \r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-5 \">\r\n\r\n        <a href=\"/\"><img  width=\"200\" height=\"32\" src=\"assets/img/nanoplayer.png\" class=\"custom-logo\" alt=\"Nanomesher\" itemprop=\"logo\" /></a>\r\n        <div id=\"block_container\">\r\n        <button  (click)=\"startrip()\"><img src=\"assets/img/Extract_5040.png\"/></button>\r\n        <div *ngIf=\"isplaying || ispaused\">\r\n          <button  (click)=\"prev()\"><img src=\"assets/img/Prev_5040.png\"/></button>\r\n        </div>\r\n        <div *ngIf=\"!(isplaying || ispaused)\">\r\n          <button  (click)=\"prev()\"><img src=\"assets/img/Prev_grey_5040.png\"/></button>\r\n        </div>\r\n        <div *ngIf=\"isplaying || ispaused\">\r\n          <button (click)=\"stop()\"><img src=\"assets/img/Stop_5040.png\"/></button>\r\n        </div>\r\n        <div *ngIf=\"!isplaying && !ispaused\">\r\n          <button (click)=\"playall()\"><img src=\"assets/img/playall_5040.png\"/></button>\r\n        </div>\r\n\r\n        <div *ngIf=\"isplaying || ispaused\">\r\n          <button  (click)=\"toggleplay()\"><img src=\"assets/img/pause_5040.png\"/></button>\r\n        </div>\r\n        <div *ngIf=\"!(isplaying || ispaused)\">\r\n          <button><img src=\"assets/img/pause_grey_5040.png\"/></button>\r\n        </div>\r\n\r\n        <div *ngIf=\"isplaying || ispaused\">\r\n          <button  (click)=\"next()\"><img src=\"assets/img/Next_5040.png\"/></button>\r\n        </div>\r\n        <div *ngIf=\"!(isplaying || ispaused)\">\r\n          <button  (click)=\"next()\"><img src=\"assets/img/Next_grey_5040.png\"/></button>\r\n        </div>\r\n       </div>\r\n         \r\n      <br><h5 style=\"color:blue\">{{ status }}</h5>\r\n      <h5 style=\"color:purple\">{{ artist }}</h5>\r\n\r\n      <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"\r\n        formArrayName=\"songs\" *ngFor=\"let song of form.controls.songs.controls; let i = index\">\r\n            <div class=\"media\">\r\n              <div class=\"checkbox\"><input  type=\"checkbox\" [formControlName]=\"i\"></div>\r\n              <div class=\"media-body align-self-center\">\r\n                <div *ngIf=\"playingtrackno==i+1\">\r\n                  <strong><h6 style=\"color:blue\">\r\n                      {{songs[i].track_name}} - {{songs[i].artist_name}}<p [ngStyle]=\"{ 'color': 'red' }\">{{songs[i].ripremain}}</p>\r\n                    </h6></strong>\r\n                </div>\r\n                <div *ngIf=\"playingtrackno!=i+1\"><h6>\r\n                       {{songs[i].track_name}} - {{songs[i].artist_name}}<p [ngStyle]=\"{ 'color': 'red' }\">{{songs[i].ripremain}}</p>\r\n                      </h6>\r\n                </div>\r\n              </div><!-- media body -->\r\n            </div><!-- media -->\r\n        </a><!-- link -->\r\n      </div><!-- list-group -->\r\n    </div><!-- col -->\r\n  </div><!-- row -->\r\n</div><!-- container -->\r\n</div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, formBuilder) {
        var _this = this;
        this.http = http;
        this.formBuilder = formBuilder;
        this.title = 'CDRipApp';
        this.status = "";
        this.artist = "";
        //httpprev = 'http://volumio.local:5002'
        this.httpprev = '';
        this.songs = [];
        var controls = this.songs.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false); });
        this.form = this.formBuilder.group({
            songs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](controls)
        });
        this.http.get(this.httpprev + '/cdmeta2').subscribe(function (data) {
            console.log(data);
            _this.songs = data;
            var controls = _this.songs.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true); });
            _this.form = _this.formBuilder.group({
                songs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](controls)
            });
        });
    }
    AppComponent.prototype.tickall = function () {
        for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
            var song = _a[_i];
            song.ripremain = "";
        }
    };
    AppComponent.prototype.startrip = function () {
        var _this = this;
        var selectedSongIds = this.form.value.songs
            .map(function (v, i) { return v ? _this.songs[i].track_number : null; })
            .filter(function (v) { return v !== null; });
        console.log(selectedSongIds);
        for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
            var song = _a[_i];
            song.ripremain = "";
        }
        this.http.post(this.httpprev + '/rip2', selectedSongIds).subscribe(function (data) {
            _this.status = "Extracting...";
            _this.artist = "";
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.obs1 = timer(0,5000).subscribe(x => this.refreshripstatus())    
        this.obs2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).subscribe(function (x) { return _this.refreshbothstatus(); });
    };
    AppComponent.prototype.displaystatus = function (response) {
        if (response["status"] == "ERROR") {
            this.status = "";
        }
        else {
            this.status = "00:00 " + response["track_name"];
            this.artist = response["artist_name"];
        }
    };
    AppComponent.prototype.next = function () {
        var _this = this;
        this.http.get(this.httpprev + '/next2').subscribe(function (data) {
            _this.displaystatus(data);
        });
    };
    AppComponent.prototype.stop = function () {
        var _this = this;
        this.http.get(this.httpprev + '/stop2').subscribe(function (data) {
            _this.displaystatus(data);
        });
    };
    AppComponent.prototype.prev = function () {
        var _this = this;
        this.http.get(this.httpprev + '/prev2').subscribe(function (data) {
            _this.displaystatus(data);
        });
    };
    AppComponent.prototype.playall = function () {
        var _this = this;
        this.http.get(this.httpprev + '/playall2').subscribe(function (data) {
            _this.displaystatus(data);
        });
    };
    AppComponent.prototype.toggleplay = function () {
        var _this = this;
        this.http.get(this.httpprev + '/playtoggle2').subscribe(function (data) {
            _this.displaystatus(data);
        });
    };
    AppComponent.prototype.str_pad_left = function (string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };
    AppComponent.prototype.refreshbothstatus = function () {
        var _this = this;
        this.http.get(this.httpprev + '/progress').subscribe(function (data) {
            var playingdata = data['playing'];
            var ripdata = data['ripping'];
            for (var key in ripdata) {
                for (var _i = 0, _a = _this.songs; _i < _a.length; _i++) {
                    var song = _a[_i];
                    if (song.track_number == key)
                        song.ripremain = (ripdata[key]) * 100 + "% done";
                }
            }
            if ((playingdata['status'] == "State.Playing") || (playingdata['status'] == "State.Paused")) {
                var playprogress = playingdata['playprogress'];
                var minutes = Math.floor(playprogress / 60);
                var seconds = playprogress - minutes * 60;
                _this.status = _this.str_pad_left(minutes, '0', 2) + ':' + _this.str_pad_left(seconds, '0', 2) + " " + playingdata['track_name'];
                _this.artist = playingdata['artist_name'];
                _this.playingtrackno = playingdata['track_number'];
                if (playingdata['status'] == "State.Playing") {
                    _this.isplaying = true;
                    _this.ispaused = false;
                }
                else {
                    _this.isplaying = false;
                    _this.ispaused = true;
                }
            }
            if (playingdata['status'] == "State.Stopped") {
                _this.isplaying = false;
                _this.ispaused = false;
            }
        });
    };
    AppComponent.prototype.refreshripstatus = function () {
        var _this = this;
        this.http.get(this.httpprev + '/ripprogress').subscribe(function (data) {
            for (var key in data) {
                for (var _i = 0, _a = _this.songs; _i < _a.length; _i++) {
                    var song = _a[_i];
                    if (song.track_number == key)
                        song.ripremain = (data[key]) * 100 + "% done";
                }
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andrew\Documents\nanomesher-nanosoundcdrip\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map