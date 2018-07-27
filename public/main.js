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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/auth.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService, User, LoginSubmission, SignupSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSubmission", function() { return LoginSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSubmission", function() { return SignupSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var AuthService = /** @class */ (function () {
    function AuthService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET /api/checklogin
    AuthService.prototype.check = function () {
        var _this = this;
        return this.myHttpServ
            .get(backendUrl + "/api/checklogin", { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" to match what the backend reports
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // POST /api/login
    AuthService.prototype.postLogin = function (loginInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/login", loginInfo, { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we log in successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // POST /api/signup
    AuthService.prototype.postSignup = function (signupInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/signup", signupInfo, { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we sign up successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    // DELETE /api/logout
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.myHttpServ
            .delete(backendUrl + "/api/logout", { withCredentials: true } // send cookies across domains
        )
            .toPromise()
            .then(function (response) {
            // update "currentUser" if we log out successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginSubmission = /** @class */ (function () {
    function LoginSubmission() {
    }
    return LoginSubmission;
}());

var SignupSubmission = /** @class */ (function () {
    function SignupSubmission() {
    }
    return SignupSubmission;
}());



/***/ }),

/***/ "./src/app/api/building.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/building.service.ts ***!
  \*****************************************/
/*! exports provided: BuildingService, Building, BuildingSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingService", function() { return BuildingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingSubmission", function() { return BuildingSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var BuildingService = /** @class */ (function () {
    function BuildingService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET /api/buildings
    BuildingService.prototype.getBuildingList = function () {
        return this.myHttpServ
            .get(backendUrl + "/api/buildings", { withCredentials: true } // send cookies across domains
        )
            .toPromise();
    };
    // GET /api/building/:id
    BuildingService.prototype.getBuildingItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .get(backendUrl + "/api/building/" + id, { withCredentials: true })
            .toPromise();
    };
    // DELETE /api/building/:id
    BuildingService.prototype.deleteBuildingItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .delete(backendUrl + "/api/building/" + id, { withCredentials: true })
            .toPromise();
    };
    // POST /api/
    BuildingService.prototype.postBuilding = function (buildingInfo) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .post(backendUrl + "/api/buildings", buildingInfo, { withCredentials: true } // send cookies across domains
        )
            .toPromise();
    };
    BuildingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildingService);
    return BuildingService;
}());

var Building = /** @class */ (function () {
    function Building() {
    }
    return Building;
}());

var BuildingSubmission = /** @class */ (function () {
    function BuildingSubmission() {
    }
    return BuildingSubmission;
}());



/***/ }),

/***/ "./src/app/api/payement.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/payement.service.ts ***!
  \*****************************************/
/*! exports provided: PayementService, Payement, PayementSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayementService", function() { return PayementService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payement", function() { return Payement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayementSubmission", function() { return PayementSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var PayementService = /** @class */ (function () {
    function PayementService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET /api/residents
    PayementService.prototype.getPayementList = function () {
        var buildingId = this.buildingId;
        return this.myHttpServ
            .get(backendUrl + "/api/payements/" + buildingId, { withCredentials: true })
            .toPromise();
    };
    // GET /api/resident/:id
    PayementService.prototype.getPayementItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .get(backendUrl + "/api/payement/" + id, { withCredentials: true })
            .toPromise();
    };
    // DELETE /api/resident/:id
    PayementService.prototype.deletePayementItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .delete(backendUrl + "/api/payement/" + id, { withCredentials: true })
            .toPromise();
    };
    // POST /api/
    PayementService.prototype.postPayement = function (payementInfo) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        var buildingId = this.buildingId;
        return this.myHttpServ
            .post(backendUrl + "/api/payements", { payementInfo: payementInfo, buildingId: buildingId }, { withCredentials: true })
            .toPromise();
    };
    PayementService.prototype.getBuildingId = function (buildingId) {
        this.buildingId = buildingId;
    };
    PayementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PayementService);
    return PayementService;
}());

var Payement = /** @class */ (function () {
    function Payement() {
    }
    return Payement;
}());

var PayementSubmission = /** @class */ (function () {
    function PayementSubmission() {
    }
    return PayementSubmission;
}());



/***/ }),

/***/ "./src/app/api/resident.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/resident.service.ts ***!
  \*****************************************/
/*! exports provided: ResidentService, Resident, ResidentSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentService", function() { return ResidentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resident", function() { return Resident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentSubmission", function() { return ResidentSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var ResidentService = /** @class */ (function () {
    function ResidentService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET /api/residents
    ResidentService.prototype.getResidentList = function () {
        var buildingId = this.buildingId;
        return this.myHttpServ
            .get(backendUrl + "/api/residents/" + buildingId, { withCredentials: true })
            .toPromise();
    };
    // GET /api/resident/:id
    ResidentService.prototype.getResidentItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .get(backendUrl + "/api/resident/" + id, { withCredentials: true })
            .toPromise();
    };
    // DELETE /api/resident/:id
    ResidentService.prototype.deleteResidentItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .delete(backendUrl + "/api/resident/" + id, { withCredentials: true })
            .toPromise();
    };
    // POST /api/
    ResidentService.prototype.postResident = function (residentInfo) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        var buildingId = this.buildingId;
        return this.myHttpServ
            .post(backendUrl + "/api/residents", { residentInfo: residentInfo, buildingId: buildingId }, { withCredentials: true } // send cookies across domains
        )
            .toPromise();
    };
    ResidentService.prototype.getBuildingId = function (buildingId) {
        this.buildingId = buildingId;
    };
    ResidentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResidentService);
    return ResidentService;
}());

var Resident = /** @class */ (function () {
    function Resident() {
    }
    return Resident;
}());

var ResidentSubmission = /** @class */ (function () {
    function ResidentSubmission() {
    }
    return ResidentSubmission;
}());



/***/ }),

/***/ "./src/app/api/suggestion.service.ts":
/*!*******************************************!*\
  !*** ./src/app/api/suggestion.service.ts ***!
  \*******************************************/
/*! exports provided: SuggestionService, Suggestion, SuggestionSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionService", function() { return SuggestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suggestion", function() { return Suggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionSubmission", function() { return SuggestionSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var SuggestionService = /** @class */ (function () {
    function SuggestionService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // GET /api/residents
    SuggestionService.prototype.getSuggestionList = function () {
        var buildingId = this.buildingId;
        return this.myHttpServ
            .get(backendUrl + "/api/suggestions/" + buildingId, { withCredentials: true })
            .toPromise();
    };
    // GET /api/resident/:id
    SuggestionService.prototype.getSuggestionItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .get(backendUrl + "/api/suggestion/" + id, { withCredentials: true })
            .toPromise();
    };
    // DELETE /api/resident/:id
    SuggestionService.prototype.deleteSuggestionItem = function (id) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        return this.myHttpServ
            .delete(backendUrl + "/api/suggestion/" + id, { withCredentials: true })
            .toPromise();
    };
    // POST /api/
    SuggestionService.prototype.postSuggestion = function (suggestionInfo) {
        // return the Promise of the request (component will ".then()" & ".catch()")
        var buildingId = this.buildingId;
        return this.myHttpServ
            .post(backendUrl + "/api/suggestions", { suggestionInfo: suggestionInfo, buildingId: buildingId }, { withCredentials: true })
            .toPromise();
    };
    SuggestionService.prototype.getBuildingId = function (buildingId) {
        this.buildingId = buildingId;
    };
    SuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SuggestionService);
    return SuggestionService;
}());

var Suggestion = /** @class */ (function () {
    function Suggestion() {
    }
    return Suggestion;
}());

var SuggestionSubmission = /** @class */ (function () {
    function SuggestionSubmission() {
    }
    return SuggestionSubmission;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _building_building_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building/building.component */ "./src/app/building/building.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./building-details/building-details.component */ "./src/app/building-details/building-details.component.ts");
/* harmony import */ var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./building-list/building-list.component */ "./src/app/building-list/building-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: "building", component: _building_building_component__WEBPACK_IMPORTED_MODULE_2__["BuildingComponent"] },
    { path: "building/addbuilding", component: _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_8__["BuildingListComponent"] },
    { path: "building/:buildingId", component: _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_7__["BuildingDetailsComponent"] },
    { path: "**", component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-size: 25px;\n}\n\n.navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0; \n}\n\na:hover,\na:active {\n    color: BLACK;\n}\n\n.nav1 {\n    margin-right:20px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- <nav>\n    <div>\n      <a routerLink=\"/\">Home</a>\n    </div>\n    \n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n      \n      <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\n        <span *ngIf=\"!myAuthServ.currentUser\">\n          <li><a routerLink=\"/signup\">Sign Up</a></li>\n          <li><a routerLink=\"/login\">Log In</a></li>\n        </span>\n        <span *ngIf=\"myAuthServ.currentUser\">\n          <b>Welcome back, {{myAuthServ.currentUser.firstName}}!</b>\n          <li>\n            <button (click)=\"logoutClick()\">Log Out</button>\n          </li>\n        </span>\n      </ul>\n      \n    </div>\n    \n  </nav> -->\n  \n  <header>\n  <mat-toolbar color=\"warn\">\n      <div>\n          <a routerLink=\"/\">BUILDING+</a>\n        </div>\n    <div fxFlex fxLayout fxLayoutAlign= \"flex-end\">\n      <ul  fxLayout fxLayoutGap=\"30px\" class=\"navigation-items\">\n        <span *ngIf=\"!myAuthServ.currentUser\">\n          <a class=\"nav1\" routerLink=\"#\">About</a>\n          <a class=\"nav1\" routerLink=\"/signup\">Sign Up</a>\n          <a class=\"nav1\" routerLink=\"/login\">Log In</a>\n        </span>\n        <span *ngIf=\"myAuthServ.currentUser\">\n          <a class=\"nav1\" routerLink=\"/building\">List Of Buildings</a>\n          <b class=\"nav1\">Welcome back, {{myAuthServ.currentUser.firstName}}!</b>\n          <button class=\"nav1\" (click)=\"logoutClick()\">Log Out</button>\n           \n          \n        </span>\n      </ul>\n    </div>\n  </mat-toolbar>\n \n\n</header>\n\n\n<router-outlet></router-outlet>\n\n\n\n\n"

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
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // ask the backend about the login status as soon as the app loads
        this.myAuthServ.check()
            .catch(function (err) {
            alert("We are having trouble connecting. Is your Internet working? 🌍");
            console.log(err);
        });
    };
    AppComponent.prototype.logoutClick = function () {
        var _this = this;
        this.myAuthServ.logout()
            .then(function () {
            _this.myRouterServ.navigateByUrl("/");
        })
            .catch(function (err) {
            alert("Sorry! There was a problem with your log out. 😑");
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _building_building_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./building/building.component */ "./src/app/building/building.component.ts");
/* harmony import */ var _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./building-details/building-details.component */ "./src/app/building-details/building-details.component.ts");
/* harmony import */ var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./building-list/building-list.component */ "./src/app/building-list/building-list.component.ts");
/* harmony import */ var _building_details_payments_payments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./building-details/./payments/payments.component */ "./src/app/building-details/payments/payments.component.ts");
/* harmony import */ var _building_details_residents_residents_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./building-details/./residents/residents.component */ "./src/app/building-details/residents/residents.component.ts");
/* harmony import */ var _building_details_suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./building-details/./suggestions/suggestions.component */ "./src/app/building-details/suggestions/suggestions.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"],
                _building_building_component__WEBPACK_IMPORTED_MODULE_13__["BuildingComponent"],
                _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_14__["BuildingDetailsComponent"],
                _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_15__["BuildingListComponent"],
                _building_details_payments_payments_component__WEBPACK_IMPORTED_MODULE_16__["PaymentsComponent"],
                _building_details_residents_residents_component__WEBPACK_IMPORTED_MODULE_17__["ResidentsComponent"],
                _building_details_suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_18__["SuggestionsComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/building-details/building-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/building-details/building-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n    font-weight: bold;\n}\n\n.new-building {\n    font-size: 30px;\n}"

/***/ }),

/***/ "./src/app/building-details/building-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/building-details/building-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-tab-group>\n  <mat-tab label=\"The Building Details\">\n<section  fxLayout fxLayoutAlign=\"center\">\n  <mat-card class=\"new-building\" fxFlex=\"400px\">\n\n  <mat-card-title>Building Details</mat-card-title>\n  <mat-card-subtitle>{{buildingItem?.adress}}</mat-card-subtitle>\n  <mat-card-content>\n      <img mat-card-image [src]=\"buildingItem?.image\">\n      <p>by <span class=\"text\">{{buildingItem?.promoter}}</span></p>\n      <p>building functional since <span class=\"text\">{{buildingItem?.dateOfoperation}}</span></p>\n      <p>the budget I dispose for this Building is <span class=\"text\">{{buildingItem?.budgetDisposed}}</span> $</p>\n      <p>inhabutants in this building should pay before <span class=\"text\">{{buildingItem?.dueDate}}</span></p>\n  </mat-card-content>\n  </mat-card>\n</section>\n\n    </mat-tab>\n\n  <mat-tab label=\"Manage Residents\">\n      <app-residents></app-residents> \n    </mat-tab>\n\n  <mat-tab label=\"Accomplish Suggestions\">\n      <app-suggestions></app-suggestions> \n    </mat-tab>\n\n  <mat-tab label=\"Track Payments\">\n      <app-payments></app-payments> \n    </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/building-details/building-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/building-details/building-details.component.ts ***!
  \****************************************************************/
/*! exports provided: BuildingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDetailsComponent", function() { return BuildingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/building.service */ "./src/app/api/building.service.ts");
/* harmony import */ var _api_resident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/resident.service */ "./src/app/api/resident.service.ts");
/* harmony import */ var _api_suggestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/suggestion.service */ "./src/app/api/suggestion.service.ts");
/* harmony import */ var _api_payement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/payement.service */ "./src/app/api/payement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuildingDetailsComponent = /** @class */ (function () {
    function BuildingDetailsComponent(myActivatedRouteServ, myBuildingServ, myRouterServ, myResident, myPayement, mySuggestion) {
        this.myActivatedRouteServ = myActivatedRouteServ;
        this.myBuildingServ = myBuildingServ;
        this.myRouterServ = myRouterServ;
        this.myResident = myResident;
        this.myPayement = myPayement;
        this.mySuggestion = mySuggestion;
    }
    BuildingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myActivatedRouteServ.paramMap
            .subscribe(function (myParams) {
            // "buildingId" comes from the route's PATH
            // { path: "building/:buildingId", ... }
            _this.id = myParams.get("buildingId");
            _this.myResident.getBuildingId(_this.id);
            _this.mySuggestion.getBuildingId(_this.id);
            _this.myPayement.getBuildingId(_this.id);
            _this.fetchBuildingDetails();
        });
    };
    BuildingDetailsComponent.prototype.fetchBuildingDetails = function () {
        var _this = this;
        this.myBuildingServ.getBuildingItem(this.id)
            .then(function (response) {
            // connects the DATA from the API to the COMPONENT state
            _this.buildingItem = response;
        })
            .catch(function (err) {
            alert("Sorry! There was a problem getting the Building's details. 😅");
            console.log(err);
        });
    };
    BuildingDetailsComponent.prototype.deleteBuildingClick = function () {
        var _this = this;
        var adress = this.buildingItem.adress;
        var isOkay = confirm("Delete building " + adress + "?");
        if (isOkay) {
            this.myBuildingServ.deleteBuildingItem(this.id)
                .then(function () {
                // redirect away to the list page
                _this.myRouterServ.navigateByUrl("/building");
            })
                .catch(function (err) {
                alert("Sorry! There was a problem deleting the building. 😨");
                console.log(err);
            });
        }
    };
    BuildingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building-details',
            template: __webpack_require__(/*! ./building-details.component.html */ "./src/app/building-details/building-details.component.html"),
            styles: [__webpack_require__(/*! ./building-details.component.css */ "./src/app/building-details/building-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _api_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_resident_service__WEBPACK_IMPORTED_MODULE_3__["ResidentService"],
            _api_payement_service__WEBPACK_IMPORTED_MODULE_5__["PayementService"],
            _api_suggestion_service__WEBPACK_IMPORTED_MODULE_4__["SuggestionService"]])
    ], BuildingDetailsComponent);
    return BuildingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/building-details/payments/payments.component.css":
/*!******************************************************************!*\
  !*** ./src/app/building-details/payments/payments.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/building-details/payments/payments.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/building-details/payments/payments.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css\">\n\n\n<div class=\"top-bar\">\n  <div class=\"row\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li class=\"menu-text\">Payements</li>  \n      </ul>  \n    </div> \n    <div class=\"top-bar-right\">\n      \n    </div> \n  </div>  \n</div>\n<br>\n\n<div *ngIf=\"appState == 'default'\" class=\"row\">\n  <div class=\"large-6 columns\">\n    <button class=\"button\" (click)=\"changeState('add')\">Add Payements</button>\n  </div>\n</div>\n\n<!-- ADD FORM -->\n<div *ngIf=\"appState == 'add'\">\n  <div class=\"large-12 columns\">\n    <h3>Add Payements</h3>\n    <form (ngSubmit)=\"payementSubmit()\">\n        \n        <div class=\"row\">\n          <div class=\"medium-6 columns\">\n            <label> Payer\n              <select [(ngModel)]=\"userForm.payer\" name=\"payer\">\n                <option value=\"0\">Select</option>\n                <option *ngFor=\"let resident of residents\" value=\"{{resident._id}}\">\n                  {{resident.firstName}}\n                </option>\n                </select>\n            </label>\n            <br />\n          </div>\n          <div class=\"medium-6 columns\">\n            <label>\n              Situation\n               <input [(ngModel)]=\"userForm.situation\" name=\"situation\" type=\"text\" placeholder=\"done or not done\" />\n             </label>\n          </div>\n        </div>\n        \n        \n        <div class=\"row\">\n          <div class=\"large-12\">\n            <input type=\"submit\" class=\"button\" value=\"Submit\">  \n          </div>  \n        </div>\n    </form>  \n  </div>  \n</div>\n\n<div *ngIf=\"appState == 'extend'\">\n  <div class=\"row\">\n    <div class=\"large-12 large-1-offset columns\">\n      <button class=\"button alert\" (click)=\"changeState('default')\">Go back</button>  \n    </div>  \n  </div>\n  <div *ngFor=\"let payement of payements\">\n    <div *ngIf=\"payement._id == activeKey\">\n      <div class=\"row\">\n        <!-- <div class=\"large-5 columns large-offset-1\">\n          <h3>{{business.company}}</h3>\n          <p>Category: {{business.category}}</p>\n          <p>Years In Business: {{business.years_in_business}}\n          <p>{{business.description}}</p>\n        </div>   -->\n        \n        <div class=\"large-5 columns large-offset-1\">\n          <h4>Situation Info</h4>\n          <ul>\n            <li>Payer: {{payement.payer?.firstName}}</li>    \n            <li>Situation: {{payement.situation}}</li>  \n            <!-- <li>Email: {{payement.category}}</li>   -->\n          </ul>\n        </div> \n      </div>  \n    </div> \n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"large-12 columns\">\n    <div >\n        <table>\n          <thead>\n            <tr>\n              <th>Payer</th>\n              <th>Situation</th>\n              <!-- <th>Complainant</th> -->\n              <th></th>  \n            </tr>  \n          </thead>\n          <tbody>\n            <tr *ngFor=\"let payement of payements\" >\n                <td>{{payement.payer?.firstName}}</td>\n                <td>{{payement.situation}}</td>\n                <!-- <td>{{suggestion.category}}</td> -->\n                <td>\n                  <button (click)=\"changeState('extend', payement._id)\" class=\"button\">More</button>\n                  <button  class=\"button alert\">Delete</button>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>  \n  </div>  \n</div> \n\n\n\n\n\n\n\n\n\n\n\n<script\n  src=\"https://code.jquery.com/jquery-1.12.4.js\"\n  integrity=\"sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=\"\n  crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js\"></script>"

/***/ }),

/***/ "./src/app/building-details/payments/payments.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/building-details/payments/payments.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_payement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/payement.service */ "./src/app/api/payement.service.ts");
/* harmony import */ var _api_resident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/resident.service */ "./src/app/api/resident.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(myPayementServ, myRouterServ, myResidentServ) {
        this.myPayementServ = myPayementServ;
        this.myRouterServ = myRouterServ;
        this.myResidentServ = myResidentServ;
        this.userForm = new _api_payement_service__WEBPACK_IMPORTED_MODULE_2__["PayementSubmission"]();
        this.payements = [];
        this.residents = [];
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.appState = 'default';
        this.fetchPayements();
        this.fetchResidents();
    };
    PaymentsComponent.prototype.changeState = function (state, key) {
        if (key === void 0) { key = null; }
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    };
    PaymentsComponent.prototype.fetchPayements = function () {
        var _this = this;
        this.myPayementServ.getPayementList()
            .then(function (response) {
            _this.payements = response;
            console.log(_this.payements);
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of payements. 😕");
            console.log(err);
        });
    };
    PaymentsComponent.prototype.payementSubmit = function () {
        var _this = this;
        console.log(this.userForm);
        // pass the form inputs to the service
        this.myPayementServ.postPayement(this.userForm)
            .then(function (response) {
            _this.fetchPayements();
        })
            .catch(function (err) {
            alert("Sorry! There was a problem submitting your payements! 😰");
            console.log(err);
        });
        this.changeState('default');
    };
    PaymentsComponent.prototype.fetchResidents = function () {
        var _this = this;
        this.myResidentServ.getResidentList()
            .then(function (response) {
            _this.residents = response;
            console.log(_this.residents);
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of residents. 😕");
            console.log(err);
        });
    };
    PaymentsComponent.prototype.fetchBuildingId = function (id) {
        this.myPayementServ.getBuildingId(id);
    };
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/building-details/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.css */ "./src/app/building-details/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [_api_payement_service__WEBPACK_IMPORTED_MODULE_2__["PayementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_resident_service__WEBPACK_IMPORTED_MODULE_3__["ResidentService"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/building-details/residents/residents.component.css":
/*!********************************************************************!*\
  !*** ./src/app/building-details/residents/residents.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/building-details/residents/residents.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/building-details/residents/residents.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css\">\n\n\n\n<!-- <div *ngIf=\"appState == 'default'\" class=\"row\">\n  <div class=\"large-6 columns\">\n    <button class=\"button\" (click)=\"changeState('add')\">Add Residents</button>\n  </div>\n</div> -->\n\n\n<!-- ADD FORM -->\n<!-- <div *ngIf=\"appState == 'add'\">\n  <div class=\"large-12 columns\">\n    <h3>Add Residents</h3>\n    <form (ngSubmit)= residentSubmit()>\n        <div class=\"row\">\n          <div class=\"large-6 columns\">\n             <label> First Name\n              <input [(ngModel)]=\"userForm.firstName\" type=\"text\" name=\"firstName\" placeholder=\"first Name\" >\n              </label>\n          </div> \n \n        </div>\n        \n        \n        <div class=\"row\">\n          <div class=\"medium-6 columns\">\n            <label>Last Name\n              <input [(ngModel)]=\"userForm.lastName\" type=\"text\" placeholder=\"lastName\" name=\"lastName\">\n            </label>\n          </div>\n          <div class=\"medium-6 columns\">\n            <label>Email\n              <input [(ngModel)]=\"userForm.email\" type=\"text\" placeholder=\"Email\" name=\"email\">\n            </label>\n          </div>\n        </div>\n        \n        \n        <div class=\"row\">\n          <div class=\"large-12\">\n            <button>Submit Resident</button>  \n          </div>  \n        </div>\n    </form>  \n  </div>  \n</div> -->\n\n\n<!-- <div *ngIf=\"appState == 'extend'\">\n  <div class=\"row\">\n    <div class=\"large-12 large-1-offset columns\">\n      <button class=\"button alert\" (click)=\"changeState('default')\">Go back</button>  \n    </div>  \n  </div>\n  <div *ngFor=\"let resident of residents\">\n    <div *ngIf=\"resident._id == activeKey\">\n      <div class=\"row\">\n        <div class=\"large-5 columns large-offset-1\">\n          <h3>{{resident.firstName}}</h3>\n          <p>{{resident.lastName}}</p>\n          <p>Years In Business: {{resident.email}}\n        </div>   \n      </div>  \n    </div> \n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"large-12 columns\">\n      <div >\n          <table>\n            <thead>\n              <tr>\n                <th>Company</th>\n                <th>Category</th>\n                <th>Phone</th>\n                <th></th>  \n              </tr>  \n            </thead>\n            <tbody>\n              <tr >\n                  <td>compagny 1</td>\n                  <td>category 2</td>\n                  <td>phone 3</td>\n                  <td>\n                    <button  class=\"button\">More</button>\n                    <button  class=\"button secondary\">Edit</button>\n                    <button  class=\"button alert\">Delete</button>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n      </div>  \n    </div>  \n  </div> -->\n\n  <div class=\"top-bar\">\n    <div class=\"row\">\n      <div class=\"top-bar-left\">\n        <ul class=\"menu\">\n          <li class=\"menu-text\">Residents</li>  \n        </ul>  \n      </div> \n      <div class=\"top-bar-right\">\n        \n      </div> \n    </div>  \n  </div>\n  <br>\n\n  <div *ngIf=\"appState == 'default'\" class=\"row\">\n    <div class=\"large-6 columns\">\n      <button class=\"button\" (click)=\"changeState('add')\">Add Residents</button>\n    </div>\n  </div>\n\n  <!-- ADD FORM -->\n<div *ngIf=\"appState == 'add'\">\n  <div class=\"large-12 columns\">\n    <h3>Add Residents</h3>\n    <form (ngSubmit)=\"residentSubmit()\">\n        \n        <div class=\"row\">\n          <div class=\"medium-6 columns\">\n            <label>\n              first Name\n              <input [(ngModel)]=\"userForm.firstName\" name=\"firstName\" type=\"text\" placeholder=\"40 Rue de colisé Paris\" />\n            </label>\n            <br />\n          </div>\n          <div class=\"medium-6 columns\">\n            <label>\n              last Name\n               <input [(ngModel)]=\"userForm.lastName\" name=\"lastName\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n             </label>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"medium-6 columns\">\n            <label>\n              email\n              <input [(ngModel)]=\"userForm.email\" name=\"email\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n            </label>\n          </div>\n        </div>\n        \n        \n        <div class=\"row\">\n          <div class=\"large-12\">\n            <input type=\"submit\" class=\"button\" value=\"Submit\">  \n          </div>  \n        </div>\n    </form>  \n  </div>  \n</div>\n  \n\n  <div *ngIf=\"appState == 'extend'\">\n    <div class=\"row\">\n      <div class=\"large-12 large-1-offset columns\">\n        <button class=\"button alert\" (click)=\"changeState('default')\">Go back</button>  \n      </div>  \n    </div>\n    <div *ngFor=\"let resident of residents\">\n      <div *ngIf=\"resident._id == activeKey\">\n        <div class=\"row\">\n          <!-- <div class=\"large-5 columns large-offset-1\">\n            <h3>{{business.company}}</h3>\n            <p>Category: {{business.category}}</p>\n            <p>Years In Business: {{business.years_in_business}}\n            <p>{{business.description}}</p>\n          </div>   -->\n          \n          <div class=\"large-5 columns large-offset-1\">\n            <h4>Contact Info</h4>\n            <ul>\n              <li>Phone: {{resident.firstName}}</li>  \n              <li>Email: {{resident.lastName}}</li>  \n              <li>Street: {{resident.email}}</li>    \n            </ul>\n          </div> \n        </div>  \n      </div> \n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"large-12 columns\">\n      <div >\n          <table>\n            <thead>\n              <tr>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Email</th>\n                <th></th>  \n              </tr>  \n            </thead>\n            <tbody>\n              <tr *ngFor=\"let resident of residents\" >\n                  <td>{{resident.firstName}}</td>\n                  <td>{{resident.lastName}}</td>\n                  <td>{{resident.email}}</td>\n                  <td>\n                    <button (click)=\"changeState('extend', resident._id)\" class=\"button\">More</button>\n                    <button  class=\"button secondary\">Edit</button>\n                    <button  (click)=\"deleteResident(resident._id)\" class=\"button alert\">Delete</button>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n      </div>  \n    </div>  \n  </div> \n\n\n\n\n\n    \n    <!-- <form (ngSubmit)=\"residentSubmit()\">\n      <label>\n        firstName\n        <input [(ngModel)]=\"userForm.firstName\" name=\"firstName\" type=\"text\" placeholder=\"40 Rue de colisé Paris\" />\n      </label>\n      <br />\n    \n      <label>\n       lastName\n        <input [(ngModel)]=\"userForm.lastName\" name=\"lastName\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n      </label>\n      <br />\n\n         <label>\n            email\n            <input [(ngModel)]=\"userForm.email\" name=\"email\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n          </label>\n          <br />\n    \n      <button >Submit My new resident</button>\n    </form>\n\n\n\n\n  <div>\n\n    <ul>\n      <li *ngFor=\"let resident of residents\">\n        <h3>{{resident.firstName}}</h3>\n        <p>by {{resident.lastName}}</p>\n        <br />\n      </li>\n    </ul>\n  \n  </div> -->\n\n  <script\n  src=\"https://code.jquery.com/jquery-1.12.4.js\"\n  integrity=\"sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=\"\n  crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js\"></script>\n"

/***/ }),

/***/ "./src/app/building-details/residents/residents.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/building-details/residents/residents.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsComponent", function() { return ResidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_resident_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/resident.service */ "./src/app/api/resident.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResidentsComponent = /** @class */ (function () {
    function ResidentsComponent(myActivatedRouteServ, myResidentServ, myRouterServ) {
        this.myActivatedRouteServ = myActivatedRouteServ;
        this.myResidentServ = myResidentServ;
        this.myRouterServ = myRouterServ;
        this.userForm = new _api_resident_service__WEBPACK_IMPORTED_MODULE_2__["ResidentSubmission"]();
        this.residents = [];
    }
    ResidentsComponent.prototype.ngOnInit = function () {
        this.appState = 'default';
        this.fetchResidents();
        // this.myActivatedRouteServ.paramMap
        // .subscribe((myParams) => {
        //   // "phoneId" comes from the route's PATH
        //   // { path: "phone/:phoneId", ... }
        //   this.id = myParams.get("???Id");
        // });
    };
    ResidentsComponent.prototype.changeState = function (state, key) {
        if (key === void 0) { key = null; }
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    };
    ResidentsComponent.prototype.fetchResidents = function () {
        var _this = this;
        this.myResidentServ.getResidentList()
            .then(function (response) {
            _this.residents = response;
            console.log(_this.residents);
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of residents. 😕");
            console.log(err);
        });
    };
    ResidentsComponent.prototype.residentSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        this.myResidentServ.postResident(this.userForm)
            .then(function (response) {
            _this.fetchResidents();
        })
            .catch(function (err) {
            alert("Sorry! There was a problem submitting your residents! 😰");
            console.log(err);
        });
        this.changeState('default');
    };
    ResidentsComponent.prototype.deleteResident = function (id) {
        var _this = this;
        this.myResidentServ.deleteResidentItem(id)
            .then(function () {
            _this.fetchResidents();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ResidentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-residents',
            template: __webpack_require__(/*! ./residents.component.html */ "./src/app/building-details/residents/residents.component.html"),
            styles: [__webpack_require__(/*! ./residents.component.css */ "./src/app/building-details/residents/residents.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _api_resident_service__WEBPACK_IMPORTED_MODULE_2__["ResidentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResidentsComponent);
    return ResidentsComponent;
}());



/***/ }),

/***/ "./src/app/building-details/suggestions/suggestions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/building-details/suggestions/suggestions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/building-details/suggestions/suggestions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/building-details/suggestions/suggestions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css\">\n \n <!-- <div>\n\n  <h2>add a new Resident</h2>\n\n  \n  <form (ngSubmit)=\"suggestionSubmit()\">\n    <label>\n      Description\n      <input [(ngModel)]=\"userForm.description\" name=\"description\" type=\"text\" placeholder=\"\" />\n    </label>\n    <br />\n  \n    <label>\n     Category\n      <input [(ngModel)]=\"userForm.category\" name=\"category\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n    </label>\n    <br /> -->\n\n       <!-- <label>\n          email\n          <input [(ngModel)]=\"userForm.complainant\" name=\"complainant\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n        </label>\n        <br /> -->\n\n        <!-- <div >\n        <label> complainant\n            <select [(ngModel)]=\"userForm.complainant\" name=\"complainant\">\n              <option value=\"0\">Select</option>\n              <option *ngFor=\"let resident of residents\" value=\"{{resident._id}}\">\n                {{resident.firstName}}\n              </option>\n              </select>\n          </label>\n        </div>\n      \n  \n    <button >Submit A new Suggestion</button>\n  </form>\n\n</div>\n\n\n<div>\n\n  <ul>\n    <li *ngFor=\"let suggestion of suggestions\">\n      <h3>{{suggestion.description}}</h3>\n      <p>by {{suggestion.complainant?.firstName}}</p>\n      <br />\n    </li>\n  </ul>\n\n</div>  -->\n\n\n\n<div class=\"top-bar\">\n  <div class=\"row\">\n    <div class=\"top-bar-left\">\n      <ul class=\"menu\">\n        <li class=\"menu-text\">Suggestions</li>  \n      </ul>  \n    </div> \n    <div class=\"top-bar-right\">\n      \n    </div> \n  </div>  \n</div>\n\n<div *ngIf=\"appState == 'default'\" class=\"row\">\n  <div class=\"large-6 columns\">\n    <button class=\"button\" (click)=\"changeState('add')\">Add Suggestions</button>\n  </div>\n</div>\n\n<!-- ADD FORM -->\n<div *ngIf=\"appState == 'add'\">\n<div class=\"large-12 columns\">\n  <h3>Add Suggestions</h3>\n  <form (ngSubmit)=\"suggestionSubmit()\">\n      \n      <div class=\"row\">\n        <div class=\"medium-6 columns\">\n          <label>\n            Description\n            <input [(ngModel)]=\"userForm.description\" name=\"description\" type=\"text\" placeholder=\"\" />\n          </label>\n          <br />\n        </div>\n        <div class=\"medium-6 columns\">\n          <label>\n            Category\n             <input [(ngModel)]=\"userForm.category\" name=\"category\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n           </label>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"medium-6 columns\">\n          \n            <label> complainant\n                <select [(ngModel)]=\"userForm.complainant\" name=\"complainant\">\n                  <option value=\"0\">Select</option>\n                  <option *ngFor=\"let resident of residents\" value=\"{{resident._id}}\">\n                    {{resident.firstName}}\n                  </option>\n                  </select>\n              </label>\n            \n        </div>\n      </div>\n      \n      \n      <div class=\"row\">\n        <div class=\"large-12\">\n          <input type=\"submit\" class=\"button\" value=\"Submit\">  \n        </div>  \n      </div>\n  </form>  \n</div>  \n</div>\n\n\n<div *ngIf=\"appState == 'extend'\">\n  <div class=\"row\">\n    <div class=\"large-12 large-1-offset columns\">\n      <button class=\"button alert\" (click)=\"changeState('default')\">Go back</button>  \n    </div>  \n  </div>\n  <div *ngFor=\"let suggestion of suggestions\">\n    <div *ngIf=\"suggestion._id == activeKey\">\n      <div class=\"row\">\n        <!-- <div class=\"large-5 columns large-offset-1\">\n          <h3>{{business.company}}</h3>\n          <p>Category: {{business.category}}</p>\n          <p>Years In Business: {{business.years_in_business}}\n          <p>{{business.description}}</p>\n        </div>   -->\n        \n        <div class=\"large-5 columns large-offset-1\">\n          <h4>Work Info</h4>\n          <ul>\n            <li>Description: {{suggestion.description}}</li>  \n            <li>Email: {{suggestion.category}}</li>  \n            <li>Street: {{suggestion.complainant?.firstName}}</li>    \n          </ul>\n        </div> \n      </div>  \n    </div> \n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"large-12 columns\">\n    <div >\n        <table>\n          <thead>\n            <tr>\n              <th>Description</th>\n              <th>Category</th>\n              <th>Complainant</th>\n              <th></th>  \n            </tr>  \n          </thead>\n          <tbody>\n            <tr *ngFor=\"let suggestion of suggestions\" >\n                <td>{{suggestion.description}}</td>\n                <td>{{suggestion.category}}</td>\n                <td>{{suggestion.complainant?.firstName}}</td>\n                <td>\n                  <button (click)=\"changeState('extend', suggestion._id)\" class=\"button\">More</button>\n                  <button  class=\"button alert\">Delete</button>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>  \n  </div>  \n</div> \n\n\n\n\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<script\n  src=\"https://code.jquery.com/jquery-1.12.4.js\"\n  integrity=\"sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=\"\n  crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js\"></script>\n"

/***/ }),

/***/ "./src/app/building-details/suggestions/suggestions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/building-details/suggestions/suggestions.component.ts ***!
  \***********************************************************************/
/*! exports provided: SuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsComponent", function() { return SuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_suggestion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/suggestion.service */ "./src/app/api/suggestion.service.ts");
/* harmony import */ var _api_resident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/resident.service */ "./src/app/api/resident.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent(mySuggestionServ, myRouterServ, myResidentServ) {
        this.mySuggestionServ = mySuggestionServ;
        this.myRouterServ = myRouterServ;
        this.myResidentServ = myResidentServ;
        this.userForm = new _api_suggestion_service__WEBPACK_IMPORTED_MODULE_2__["SuggestionSubmission"]();
        this.suggestions = [];
        this.residents = [];
    }
    SuggestionsComponent.prototype.ngOnInit = function () {
        this.appState = 'default';
        this.fetchSuggestions();
        this.fetchResidents();
    };
    SuggestionsComponent.prototype.changeState = function (state, key) {
        if (key === void 0) { key = null; }
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    };
    SuggestionsComponent.prototype.fetchSuggestions = function () {
        var _this = this;
        this.mySuggestionServ.getSuggestionList()
            .then(function (response) {
            _this.suggestions = response;
            console.log(_this.suggestions);
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of suggestions. 😕");
            console.log(err);
        });
    };
    SuggestionsComponent.prototype.suggestionSubmit = function () {
        var _this = this;
        console.log(this.userForm);
        // pass the form inputs to the service
        this.mySuggestionServ.postSuggestion(this.userForm)
            .then(function (response) {
            _this.fetchSuggestions();
        })
            .catch(function (err) {
            alert("Sorry! There was a problem submitting your residents! 😰");
            console.log(err);
        });
        this.changeState('default');
    };
    SuggestionsComponent.prototype.fetchResidents = function () {
        var _this = this;
        this.myResidentServ.getResidentList()
            .then(function (response) {
            _this.residents = response;
            console.log(_this.residents);
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of residents. 😕");
            console.log(err);
        });
    };
    SuggestionsComponent.prototype.deleteResident = function (id) {
    };
    SuggestionsComponent.prototype.fetchBuildingId = function (id) {
        this.mySuggestionServ.getBuildingId(id);
    };
    SuggestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suggestions',
            template: __webpack_require__(/*! ./suggestions.component.html */ "./src/app/building-details/suggestions/suggestions.component.html"),
            styles: [__webpack_require__(/*! ./suggestions.component.css */ "./src/app/building-details/suggestions/suggestions.component.css")]
        }),
        __metadata("design:paramtypes", [_api_suggestion_service__WEBPACK_IMPORTED_MODULE_2__["SuggestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_resident_service__WEBPACK_IMPORTED_MODULE_3__["ResidentService"]])
    ], SuggestionsComponent);
    return SuggestionsComponent;
}());



/***/ }),

/***/ "./src/app/building-list/building-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/building-list/building-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n    font-size: 20px;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/building-list/building-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/building-list/building-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css\">\n\n\n<div  fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n\n    \n    <form class=\"buildingForm\" (ngSubmit)=\"buildingSubmit()\">\n      <label class=\"text\">\n        Adress:\n        <input [(ngModel)]=\"userForm.adress\" name=\"adress\" type=\"text\" placeholder=\"40 Rue de colisé Paris\" />\n      </label>\n      <br />\n    \n      <label class=\"text\">\n        Promoter:\n        <input [(ngModel)]=\"userForm.promoter\" name=\"promoter\" type=\"text\" placeholder=\"Kaufmann and Broad\" />\n      </label>\n      <br />\n\n         <label class=\"text\">\n            Functional Since:\n            <input [(ngModel)]=\"userForm.dateOfoperation\" name=\"dateOfoperation\" type=\"date\" placeholder=\"Kaufmann and Broad\" />\n          </label>\n          <br />\n\n          <label class=\"text\">\n              Building Budget:\n              <input [(ngModel)]=\"userForm.budgetDisposed\" name=\"budgetDisposed\" type=\"number\" placeholder=\"Kaufmann and Broad\" />\n            </label>\n            <br />\n\n            <label class=\"text\">\n               Inhabitants should pay before:\n                <input [(ngModel)]=\"userForm.dueDate\" name=\"dueDate\" type=\"date\" placeholder=\"7/08/2018\" />\n              </label>\n              <br />\n    \n            <label class=\"text\">\n              Image URL:\n              <input [(ngModel)]=\"userForm.image\" name=\"image\" type=\"text\" placeholder=\"http://example.com/building.png\" />\n            </label>\n            <br />\n\n            <div>\n              <button  type=\"submit\" mat-raised-button color=\"warn\">Submit My new Property</button>\n            </div>\n            \n    </form>\n\n</div>\n\n\n\n<script\n  src=\"https://code.jquery.com/jquery-1.12.4.js\"\n  integrity=\"sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=\"\n  crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js\"></script>\n"

/***/ }),

/***/ "./src/app/building-list/building-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/building-list/building-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BuildingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingListComponent", function() { return BuildingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/building.service */ "./src/app/api/building.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingListComponent = /** @class */ (function () {
    function BuildingListComponent(myBuildingServ, myRouterServ) {
        this.myBuildingServ = myBuildingServ;
        this.myRouterServ = myRouterServ;
        this.buildings = [];
        this.userForm = new _api_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingSubmission"]();
    }
    BuildingListComponent.prototype.ngOnInit = function () {
    };
    BuildingListComponent.prototype.buildingSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        console.log(this.userForm);
        this.myBuildingServ.postBuilding(this.userForm)
            .then(function (response) {
            // redirect to the same page
            _this.myRouterServ.navigateByUrl("/building");
        })
            .catch(function (err) {
            alert("Sorry! There was a problem submitting your property! 😰");
            console.log(err);
        });
    };
    BuildingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building-list',
            template: __webpack_require__(/*! ./building-list.component.html */ "./src/app/building-list/building-list.component.html"),
            styles: [__webpack_require__(/*! ./building-list.component.css */ "./src/app/building-list/building-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BuildingListComponent);
    return BuildingListComponent;
}());



/***/ }),

/***/ "./src/app/building/building.component.css":
/*!*************************************************!*\
  !*** ./src/app/building/building.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .buildinglist {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .buildingcard {\n    padding: 2%;\n    flex-grow: 1;\n    flex-basis: 16%;\n    display: flex; /* so child elements can use flexbox stuff too! */\n  }\n\n  .buildingimage img {\n    max-width: 100%;\n  }\n\n  .buildinginfo {\n    margin-top: auto;\n  }\n\n  "

/***/ }),

/***/ "./src/app/building/building.component.html":
/*!**************************************************!*\
  !*** ./src/app/building/building.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css\">\n\n\n\n<section class=\"totalbuilding\">\n\n    <h2>Building List</h2>\n    \n    \n      <button type=\"submit\" mat-raised-button color=\"warn\" routerLink=\"/building/addbuilding\">add building</button>\n    \n    \n    \n    <div >\n    \n      <ul class = \"buildinglist\">\n \n        <li class = \"buildingcard\" *ngFor=\"let onebuilding of buildings\">\n            <mat-card fxFlex=\"400px\">\n          <div class= \"buildingimage\">\n            <img mat-card-image [src]=\"onebuilding.image\" />\n          </div>\n          <div class=\"buildinginfo\">\n              <mat-card-title>{{onebuilding.adress}}</mat-card-title>\n              <mat-card-subtitle>by {{onebuilding.promoter}}</mat-card-subtitle>\n              <mat-card-actions>\n                  <button type=\"submit\" mat-raised-button color=\"warn\" [routerLink]=\"['/building', onebuilding._id]\" (click)=\"fetchBuildingId(onebuilding._id)\">Acess Platform</button>\n              </mat-card-actions>\n          </div>\n          <br />\n        </mat-card>\n    \n        </li>\n      </ul>\n    \n    </div>\n\n</section>\n\n\n\n\n<script\n  src=\"https://code.jquery.com/jquery-1.12.4.js\"\n  integrity=\"sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=\"\n  crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js\"></script>\n"

/***/ }),

/***/ "./src/app/building/building.component.ts":
/*!************************************************!*\
  !*** ./src/app/building/building.component.ts ***!
  \************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/building.service */ "./src/app/api/building.service.ts");
/* harmony import */ var _api_resident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/resident.service */ "./src/app/api/resident.service.ts");
/* harmony import */ var _api_suggestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/suggestion.service */ "./src/app/api/suggestion.service.ts");
/* harmony import */ var _api_payement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/payement.service */ "./src/app/api/payement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(myBuildingServ, myRouterServ, myResidentServ, mySuggestionServ, myPayementServ) {
        this.myBuildingServ = myBuildingServ;
        this.myRouterServ = myRouterServ;
        this.myResidentServ = myResidentServ;
        this.mySuggestionServ = mySuggestionServ;
        this.myPayementServ = myPayementServ;
        this.buildings = [];
        this.userForm = new _api_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingSubmission"]();
    }
    BuildingComponent.prototype.ngOnInit = function () {
        this.fetchBuildings();
    };
    BuildingComponent.prototype.fetchBuildings = function () {
        var _this = this;
        this.myBuildingServ.getBuildingList()
            .then(function (response) {
            // connects the DATA from the API to the COMPONENT state
            _this.buildings = response;
        })
            .catch(function (err) {
            alert("Sorry! We couldn't get our list of buildings.😏 ");
            console.log(err);
        });
    };
    BuildingComponent.prototype.fetchBuildingId = function (id) {
        this.myResidentServ.getBuildingId(id);
        this.mySuggestionServ.getBuildingId(id);
        this.myPayementServ.getBuildingId(id);
    };
    BuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building',
            template: __webpack_require__(/*! ./building.component.html */ "./src/app/building/building.component.html"),
            styles: [__webpack_require__(/*! ./building.component.css */ "./src/app/building/building.component.css")]
        }),
        __metadata("design:paramtypes", [_api_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_resident_service__WEBPACK_IMPORTED_MODULE_3__["ResidentService"],
            _api_suggestion_service__WEBPACK_IMPORTED_MODULE_4__["SuggestionService"],
            _api_payement_service__WEBPACK_IMPORTED_MODULE_5__["PayementService"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:100,300,700');\n\n.header {\n    background: url(https://preview.ibb.co/enY3ZT/hernan_lucio_53800_unsplash.jpg) 0 0 no-repeat;\n    background-size: cover;\n    height: 650px;\n    padding-top: 50px;\n    position: relative;\n  }\n\n.quote {\n    bottom: 2vh;\n    font-size: 2.5em;\n    position: absolute;\n    left: 20%;\n    color: black\n  }\n\nh1 {\n    font-size: 7em;\n    text-align: center;\n    text-transform: uppercase;\n    color: black;\n  }\n\n.title {\n    margin-left: 450px;\n  }\n\n#general-information .text {\n    font-size: 2em;\n    font-weight: 100;\n    margin: 20px 0;\n    text-align: center;\n  }\n\nh3 {\n    font-size: 4.2em;\n    text-align: center;\n  }\n\n.background {\n    background-color: #f44336;\n    color: #fff;\n  }\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 10px;\n  line-height: 3.5em;\n  font-weight: 300;\n}\n\nh1, h2, h3, h4, h5 {\n  font-family: 'Roboto', sans-serif;\n}\n\nh2 {\n  color: #fff;\n  font-size: 5em;\n  line-height: 4em;\n  text-align: center;\n  text-shadow: #020819 6px -2px 6px;\n  text-transform: uppercase;\n}\n\nh4 {\n  font-size: 1.5em;\n  letter-spacing: 0.4px;\n  margin-bottom: 15px;\n}\n\nh5 {\n  font-size: 1.2em;\n}\n\n.link-btn {\n  background-color: rgb(67, 163, 230);\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  color: #fff;\n  display: block;\n  font-family: 'Roboto Condensed';\n  font-size: 2em;\n  letter-spacing: 0.5px;\n  margin: 40px auto 0;\n  padding: 14px 20px;\n  text-align: center;\n  text-decoration: none;\n  width: 150px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 75px 0;\n  width: 1200px;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.col {\n  float: left;\n}\n\n.col-3 {\n  width: 30%;\n}\n\n.col-middle {\n  margin: 0 5%;\n}\n\n.service-box {\n  border: 2px solid #eee;\n  border-radius: 20px;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 10px 0 #eee;\n  font-size: 1.7em;\n  margin: 50px 5% 0;\n  padding: 20px;\n  text-align: center;\n  width: 40%;\n}\n\n.service-box .img {\n  width: 125px;\n}\n\n#team .section-text {\n  font-size: 1.9em;\n  margin: 10px auto;\n  text-align: center;\n  width: 60%\n}\n\n#team hr {\n  margin: 20px auto 30px;\n  width: 40%;\n}\n\n#team .member-name {\n  display: block;\n  font-size: 1.5em;\n  font-weight: 700;\n  text-align: center;\n}\n\n.schedule-table {\n  font-size: 1.5em;\n  margin: 0 auto 40px;\n}\n\n.schedule-table th,\n.schedule-table td {\n  border-bottom: 1px solid #000;\n  padding: 5px 10px;\n}\n\n.slot-form-container {\n  font-size: 1.5em;\n  margin: 18px auto 0;\n  text-align: center;\n  width: 40%;\n}\n\n.slot-form-container label {\n  display: block;\n  line-height: 15px;\n  margin-bottom: 0;\n}\n\n.slot-form-container input,\n.slot-form-container select {\n  height: 20px;\n  outline: none;\n  padding: 3px;\n  width: 100%;\n}\n\n.slot-form-container button {\n  background: #fff;\n  border: 1px solid #000;\n  color: #000;\n  margin-top: 15px;\n  padding: 9px;\n}\n\n.footer {\n  font-size: 1.9em;\n  margin-bottom: 25px;\n  padding: 0 100px;\n  text-align: center;\n}\n\n.footer .address {\n  font-style: normal;\n  font-size: 0.8em;\n  margin-bottom: 30px;\n}\n\n.footer .follow-us-item {\n  list-style-type: none;\n}\n\n.footer .link {\n  color: rgb(67, 163, 230);\n  text-decoration: none;\n}\n\n.footer .map-frame {\n  height: 375px;\n  float: right;\n  width: 60%;\n}\n "

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"title\">\n    <h1>Building +</h1>\n  </div>\n  \n    <aside class=\"quote\">\n      <i>\"Make Managing Properties A Better Experience\"</i><br />\n      Jack Jerome\n    </aside>\n  </header>\n\n  <section id=\"general-information\" class=\"background\">\n      <div class=\"container\">\n        <article class=\"col col-3\">\n          <h3>Hello!</h3>\n          <p class=\"text\">Welcome to Building+</p>\n    \n          <a class=\"link-btn\" href=\"#\">Learn More</a>\n        </article>\n    \n        <article class=\"col col-3\">\n          <h3>About us</h3>\n          <p class=\"text\"> property manager.</p>\n    \n          <a class=\"link-btn\" href=\"#\">Watch Video</a>\n        </article>\n    \n        <article class=\"col col-3\">\n          <h3>Let's Try</h3>\n          <p class=\"text\">It's Free</p>\n    \n          <a class=\"link-btn\" routerLink=\"/signup\">Register</a>\n        </article>\n    \n        <div class=\"clearfix\"></div>\n      </div>\n    </section>\n\n    <section id=\"structure\" class=\"container\">\n        <article class=\"col service-box\">\n          <img src=\"https://thumb.ibb.co/miyXdo/connection.png\" alt=\"details\" class=\"img\" />\n\n          <h4>1. Details</h4>\n          <p>you have all the nessecary details of the building</p>\n        </article>\n      \n        <article class=\"col service-box\">\n          <img src=\"https://thumb.ibb.co/iMYJjT/teamwork_1.png\" alt=\"residents\" class=\"img\" />\n          <h4>2. Residents</h4>\n          <p>You add residents, by adding deleting and deleting</p>\n        </article>\n      \n        <article class=\"col service-box\">\n          <img src=\"https://thumb.ibb.co/mxpVyo/question.png\" alt=\"suggestion\" class=\"img\" />\n          <h4>3. Suggestions</h4>\n          <p>Every suggestion you collect, can be added to and tracked</p>\n        </article>\n      \n        <article class=\"col service-box\">\n          <img src=\"https://thumb.ibb.co/hG8JjT/money_bag.png\" alt=\"payments\" class=\"img\" />\n\n          <h4>4. Payments</h4>\n          <p>Check who have payed made the payments</p>\n        </article>\n      \n        <div class=\"clearfix\"></div>\n      </section>\n\n      <footer class=\"background footer\">\n          <div class=\"container\">\n            <section class=\"col col-3\">\n              <h5>Contact Information</h5>\n              <address class=\"address\">\n                Building+<br />\n                33 Rue la Fayette,<br />\n                75009 Paris,<br />\n                France<br />\n                +33 (0) 619 193 088\n              </address>\n        \n              <h5>Follow Us</h5>\n              <ul>\n                <li class=\"follow-us-item\"><a class=\"link\" href=\"http://www.twitter.com\" target='_blank'>Twitter</a></li>\n                <li class=\"follow-us-item\"><a class=\"link\" href=\"http://www.facebook.com\" target='_blank'>Facebook</a></li>\n                <li class=\"follow-us-item\"><a class=\"link\" href=\"http://www.instagram.com\" target='_blank'>Instagram</a></li>\n              </ul>\n            </section>\n        \n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047755348!2d2.3354220160472316!3d48.87456477928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099\" class=\"map-frame\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            <div class=\"clearfix\"></div>\n          </div>\n        </footer>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginform {\n    margin-top: 50px;\n}\n\nmat-form-field {\n    width: 300px;\n  }\n\n.text {\n    font-size: 30px;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"loginform\">\n  \n  \n  <form (ngSubmit)=\"loginSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <mat-form-field class=\"text\">\n      Email\n      <input [(ngModel)]=\"loginForm.email\" matInput name=\"email\" type=\"email\" placeholder=\"\" />\n    </mat-form-field> \n    <br />\n  \n    <mat-form-field class=\"text\">\n      Password\n      <input [(ngModel)]=\"loginForm.loginPassword\" matInput name=\"loginPassword\" type=\"password\" placeholder=\"\" />\n    </mat-form-field> \n    <br />\n  \n    <button type=\"submit\" mat-raised-button color=\"warn\">Log In</button>\n  </form>\n</section>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.loginForm = new _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoginSubmission"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        this.myAuthServ.postLogin(this.loginForm)
            .then(function (response) {
            // redirect away to the home page
            _this.myRouterServ.navigateByUrl("/building");
        })
            .catch(function (err) {
            alert("Sorry! There was a problem with your login. 😓");
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
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

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 300px;\n  }\n\n.signupform {\n   margin-top: 50px;\n   font-size: 20px\n  }"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signupform\">\n\n  <form (ngSubmit)=\"signupSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    First Name\n    <mat-form-field>\n      <input [(ngModel)]=\"signupForm.firstName\" matInput name=\"firstName\" type=\"text\" placeholder=\"Ghaith\" />\n    </mat-form-field> \n    <br /> \n  \n    Last Name\n    <mat-form-field>\n      <input [(ngModel)]=\"signupForm.lastName\" matInput name=\"lastName\" type=\"text\" placeholder=\"Hannachi\" />\n    </mat-form-field>\n    <br />\n  \n    Email\n    <mat-form-field>\n      <input [(ngModel)]=\"signupForm.email\" matInput name=\"email\" type=\"email\" placeholder=\"jessica@jones.com\" required />\n      <mat-error>Email is invalid</mat-error>\n  </mat-form-field>\n  <br />\n\n  Password\n  <mat-form-field hintLabel=\"Should be at least 6 character long.\">\n    <input [(ngModel)]=\"signupForm.originalPassword\" matInput name=\"originalPassword\" type=\"password\" placeholder=\"Your secret is safe with us\" minlength=\"6\" #pwInput=\"ngModel\" required />\n    <mat-error>Has to be at least 6 characters long.</mat-error><mat-hint align=\"end\"> {{ pwInput.value?.length }} / 6 </mat-hint>\n  </mat-form-field>\n  <br />\n  \n    <button type=\"submit\" mat-raised-button color=\"warn\">Sign Up</button>\n  </form>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.signupForm = new _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["SignupSubmission"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signupSubmit = function () {
        var _this = this;
        // pass the form inputs to the service
        this.myAuthServ.postSignup(this.signupForm)
            .then(function (response) {
            // redirect away to the home page
            _this.myRouterServ.navigateByUrl("/building");
        })
            .catch(function (err) {
            alert("Sorry! We couldn't sign you up. 🧐");
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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
    production: false,
    backendUrl: "http://localhost:3000"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ghayth/code/projects/project3/project3-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map