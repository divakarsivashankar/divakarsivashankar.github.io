webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".running-program {\n    line-height: normal;\n    height: 100vh;\n}\n\n\n\n.running-program {\n    height: auto;\n    font-family: Roboto Mono,monospace;\n    position: fixed;\n    color: #8BC34A;\n    bottom: 0;\n    font-size: 14px;\n    right: 20px;\n    line-height: normal;\n    padding: 20px;\n    background: #000;\n    height: 300px;\n    width: 600px;\n}\n\n\n\n.subtitle {\n    color: #ffffff;\n}\n\n\n\n.running-program span {\n    display: block;\n}\n\n\n\n.running-program:after {\n    /* content: '|'; */\n}\n\n\n\n@media only screen and (max-width: 768px) {\n    .running-program {\n        /* display: none; */\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n  <div class=\"content-section\">\n    <div class=\"page-title\">\n      <h1>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">About</span>\n      </h1>\n    </div>\n    <div class=\"mycontent-section\">\n      <p>\n        A highly motivated and creative software engineer with excellent technical and communication skills. A far-sighted individual\n        who can aspiringly contribute and make a positive difference on all the endeavors.\n      </p>\n      <p class=\"quotes\">\n        To put it in casual terms am a techie, a software and hardware Enthusiast, a hardcore gamer with an interest in blogging.\n      </p>\n      <p>\n        Areas of Interest : Machine learning, Android App, API, Products, Games and blockchain development.\n      </p>\n      <p>\n      <b>Core Competence:</b> </p>\n      <div>\n        <ul>\n          <li>\n            <span><b>Front end:</b> HTML, CSS, JavaScript, jQuery, Bootstrap, Angular 1 and 2, D3.</span>\n          </li>\n          <li>\n            <span><b>Backend:</b> Java, C#, Swift, C++, Python, Node.js, Spark(Scala and Java)</span>\n          </li>\n          <li>\n            <span><b>Database:</b> Mysql, Mssql, Sqllite, Mongodb, Hive or Impala(from object file store)</span>\n          </li>\n          <li>\n            <span><b>Devop:</b> Docker, Kubernetes, Jenkins</span>\n          </li>\n          <li>\n            <span><b>Version control:</b> Git, SVN, TFS </span>\n          </li>\n          <li>\n            <span><b>Cloud:</b> Amazon Web Services, Azure and Google Cloud Platform</span>\n          </li>\n          <li>\n            <span><b>Platform:</b> Mobile(native), Web, API and Clustered HA big data solutions.</span>\n          </li>\n        </ul>\n      </div>\n    \n\n    </div>\n  </div>\n  <div class=\"media-section\">\n    <div class=\"running-program\" id=\"running-program\">\n      <span>Private SoftwareEngineer hireSoftwareEngineer(JobDescription jD) &#123;</span>\n      <span>SoftwareEngineer divakarSivashankar = new SoftwareEngineer(this.divakarSivashankarSkills);</span>\n      <span>if(jD == null) &#123;</span>\n      <span>this.logger.info(\"Job Description was null\");</span>\n      <span>return null;</span>\n      <span>&#125;</span>\n      <span>if(jD.profile == \"Front End Developer\") &#123;</span>\n      <span>this.logger.info(\"Divakar is updating his Front End Skills :)\");</span>\n      <span>divakarSivashankar = this.learnFrontEndFaster(divakarSivashankar);</span>\n      <span>this.logger.info(\"Divakar has upgraded his Front End skills to match your Job description.\");</span>\n      <span>&#125;</span>\n      <span>else if(jD.profile == \"Back End Developer\" || jD.profile == \"Mobile Developer\") &#123;</span>\n      <span>this.logger.info(\"Divakar is an AWESOME backend and Mobile developer!!!! :)\");</span>\n      <span>&#125;</span>\n      <span>else &#123;</span>\n      <span>this.logger.info(\"Divakar is inquisitive and a quick leaner :). He is working on improving his skills to match your\n        requirements.\");\n      </span>\n      <span>divakarSivashankar = this.learnJobProfile(divakarSivashankar, jD.profile);</span>\n      <span>this.logger.info(\"Divakar has upgraded his skills to match your Job description.\");</span>\n      <span>&#125;</span>\n      <span>return divakarSivashankar;</span>\n      <span>&#125;</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typewriter_service__ = __webpack_require__("../../../../../src/app/typewriter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(typewriterService) {
        this.typewriterService = typewriterService;
    }
    AboutComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 500) {
                timer = timer + 100;
            }
        });
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
        var typer = document.getElementById('running-program');
        var typewriter = this.typewriterService.setupTypewriter(typer);
        typewriter.type();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__typewriter_service__["a" /* TypewriterService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accomplishments/accomplishments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accomplishments/accomplishments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n  <div class=\"content-section\">\n    <div class=\"page-title\">\n        <h1> <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">Accomplishments</span></h1>\n    </div>\n    <div>\n      <div>\n          <div class=\"mycontent-section\">\n        <h3>Achivements:</h3>\n        \n        <ul>\n          <li><span>An honor to be a part of the Panel of Judges for the hackathon – Code for Asia 2017.</span></li>\n          <li><span>Author and Admin of the tech blog Break D Hack (www.breakdhack.com).</span></li>\n          <li><span>Winner of the Google Ideathon 2013 online idea-pulling event conducted by Google.</span></li>\n          <li><span>Committee member of IEEE WIE Chennai (India) Chapter.</span></li>\n        </ul>\n      </div>\n      <div>\n        <h3>Certifications:</h3>\n        <ul>\n          <li><span>IBM Blockchain Essentials – January 2018 – Present.</span></li>\n        </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"media-section\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/accomplishments/accomplishments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccomplishmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccomplishmentsComponent = /** @class */ (function () {
    function AccomplishmentsComponent() {
    }
    AccomplishmentsComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    AccomplishmentsComponent.prototype.ngOnInit = function () {
    };
    AccomplishmentsComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 3200) {
                timer = timer + 100;
            }
        });
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
    };
    AccomplishmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accomplishments',
            template: __webpack_require__("../../../../../src/app/accomplishments/accomplishments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accomplishments/accomplishments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccomplishmentsComponent);
    return AccomplishmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<app-container></app-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__career_career_component__ = __webpack_require__("../../../../../src/app/career/career.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__accomplishments_accomplishments_component__ = __webpack_require__("../../../../../src/app/accomplishments/accomplishments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__typewriter_service__ = __webpack_require__("../../../../../src/app/typewriter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'career',
        component: __WEBPACK_IMPORTED_MODULE_10__career_career_component__["a" /* CareerComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'accomplishments',
        component: __WEBPACK_IMPORTED_MODULE_12__accomplishments_accomplishments_component__["a" /* AccomplishmentsComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__career_career_component__["a" /* CareerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__accomplishments_accomplishments_component__["a" /* AccomplishmentsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDeg60CJIFpcZuMXJz6Y3yx9hh1GrPHAOg'
                }),
                __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__typewriter_service__["a" /* TypewriterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/career/career.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".career-info {\n    margin-bottom: 24px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/career/career.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n  <div class=\"content-section\">\n    <div class=\"page-title\">\n      <h1>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">Career</span>\n      </h1>\n    </div>\n    <div class=\"mycontent-section\">\n    <div>\n      <div class=\"career-info\">\n          <h3>LEAD SOFTWARE ENGINEER</h3>\n          <h4>Lead Data Engineer - Booz Allen Hamilton.   <h5> - November 2018 - Present</h5></h4> \n          <ul>\n            <li>\n              <span>Built a comprehensive data lake solution from heterogeneous data including streaming and batch data sources such as EDR systems, SIEM’s, Twitter, security blogs, open source intelligence and dark web</span>\n            </li>\n            <li>\n              <span>Developed auto spawning analytics engines built on Jupyter Notebboks, Kibana and to deliver targeted environments for prototyping and testing</span>\n            </li>\n            <li>\n              <span>Deployed containerized data analytics platform running on Docker containers managed through Kubernetes engine</span>\n            </li>\n            <li>\n              <span>Rendered cyber analytics landscape through Neo4j graph database for multi-dimensional threat profiling insights</span>\n            </li>\n            <li>\n              <span>Create end-to-end ETL stack leveraging Apache Airflow and Apache Kafka to ingest cyber events and logs</span>\n            </li>\n            <li>\n              <span>Develop ETL solutions for data analytics using Talend. </span>\n            </li>\n          </ul>\n      </div>\n      <div class=\"career-info\">\n          <h3>SENIOR SOFTWARE ENGINEER</h3>\n          <h4>Data and Product Engineer - Dentsu Aegis Network.   <h5> - October 2016 - November 2018</h5> </h4> \n          <ul>\n            <li>\n              <span>Design and develop scalable, reliable and secure big data solutions and software applications to facilitate the\n                business users to serve our clients better.</span>\n            </li>\n            <li>\n              <span>Develop cloud based superior data lake solutions which uses Apache Kylo for data management and scheduling and\n                Apache Nifi for ETL and host object files of data in HDFS and use Hive to run the query. </span>\n            </li>\n            <li>\n              <span>Build custom processor for Apache Nifi using Java and Maven. </span>\n            </li>\n            <li>\n              <span>Develop an asynchronous ETL and analytics system across multiple workers using Docker, Celery, Redis and Python\n                Django to process and analyze log level files. </span>\n            </li>\n            <li>\n              <span>Develop analytics and visualizer system with enhanced UX using Angular JS, D3 JS and .NET Framework to better represent the\n                data for planners to make informed decisions.\n              </span>\n            </li>\n            <li>\n              <span>Develop ETL solutions for data analytics using Talend. </span>\n            </li>\n          </ul>\n      </div>\n      <div class=\"career-info\">\n        <h3>GRADUATE INTERN – SOFTWARE DEVELOPER</h3>\n        <h4>Software Developer - ExcelForte Software Pte Ltd, Singapore  <h5> - August 2015 - March 2018</h5> </h4> \n            <ul>\n              <li><span>Develop the User Requirement Specification document, System Requirements Specification document, Use Case Model Survey Document, Use Case Realization Report, and Requirement Traceability Matrix.</span></li>\n              <li><span>Design and Develop a fully functional customized Customer Relationship Management (CRM) system in C# / .Net 4.0 platform according to client requirement following RUP SDLC methodology.</span></li>\n              <li><span>Build a responsive Web interface, which runs on seamlessly on any screen size using HTML5, CSS3, JavaScript and Bootstrap.</span></li>\n              <li><span>Expose the CRM system as a RESTful Web Service using Windows Communication Foundation framework</span></li>\n            </ul>\n      </div>\n      <div class=\"career-info\">\n        <h3>GRADUATE INTERN – SOFTWARE DEVELOPER</h3> \n        <h4>Software Architect/Software Developer - Cypress Lab, Singapore  <h5> - January 2016 - May 2016</h5> </h4> \n            <ul>\n              <li><span>Develop SDK from scratch with Java and Maven for interacting with different custom built Beacons.</span></li>\n              <li><span>Design and develop Android Applications, which involve the use of Beacons and Geo-Fencing technology using Java, XML and Gradle.</span></li>\n              <li><span>Design and Develop indoor-positioning system with beacons using the custom beacon SDK and Android app. </span></li>\n            </ul>\n      </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"media-section\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/career/career.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerComponent = /** @class */ (function () {
    function CareerComponent() {
    }
    CareerComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 3200) {
                timer = timer + 100;
            }
        });
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
    };
    CareerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-career',
            template: __webpack_require__("../../../../../src/app/career/career.component.html"),
            styles: [__webpack_require__("../../../../../src/app/career/career.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-info {\n    position: absolute;\n    background: #000;\n    color: #fff;\n    padding: 20px;\n    z-index: 1;\n    top: 30px;\n    left: 30px;\n    opacity: 0;\n    font-size: 14px;\n}\n\n.social-links-contact {\n    margin-top: 20px;\n    text-align: left;\n}\n\n.social-links-contact div {\n    display: inline-block;\n}\n\n.social-links-contact a {\n    font-size: 2rem;\n    color: #4d4d4d;\n    -webkit-transition: 0.3s color ease-out;\n    transition: 0.3s color ease-out;\n}\n\n.social-links-contact a:hover {\n    font-size: 2rem;\n    color: #5bdbbb;\n}\n\n.social-links-contact ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.social-links-contact ul li a {\n    padding: 10px;\n}\n\n.social-links-contact {\n    margin-bottom: 20px;\n}\n\n.relative-section {\n    position: relative;\n}\n\n@-webkit-keyframes fadeInUp {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0,100%,0);\n        transform: translate3d(0,100%,0)\n    }\n\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none\n    }\n}\n\n@keyframes fadeInUp {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0,100%,0);\n        transform: translate3d(0,100%,0)\n    }\n\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none\n    }\n}\n\n.fadeInUp {\n    -webkit-animation: fadeInUp 1s;\n            animation: fadeInUp 1s;\n    opacity: 1;\n}\n\n.map-info span span {\n    color: #5bdbbb;\n}\n\na {\n    color: #5bdbbb;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n  <div class=\"content-section\">\n    <div class=\"page-title\">\n      <h1>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">Contact</span>\n      </h1>\n    </div>\n    <div class=\"mycontent-section\">\n    <div>\n      <div>\n        <p>+65 8712 0790</p>\n        <a href=\"mailto:divakarsivashankar@gmail.com\">divakarsivashankar@gmail.com</a>\n      </div>\n      <div class=\"social-links-contact\">\n        <div>\n          <ul>\n            <li>\n              <a href=\"https://www.linkedin.com/in/divakar-sivashankar\">\n                <i class=\"fab fa-linkedin\"></i>\n              </a>\n            </li>\n            <li>\n              <a href=\"https://twitter.com/Divakarsiva\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.facebook.com/divakar.siva.3\">\n                <i class=\"fab fa-facebook-square\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"media-section relative-section\">\n    <div class=\"map-info animated-Up\">\n      Divakar Sivashankar, Singapore\n      <br>\n      <br>\n      <span>\n        <span>Email @</span>\n        : divakarsivashankar@gmail.com\n      </span>\n    </div>\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [minZoom]=\"18\" [styles]=\"styles\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 1.2834;
        this.lng = 103.8607;
        this.styles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#012621"
                    },
                    {
                        "weight": 0.8
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#0c0000"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#012621"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -7
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": 0.3
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#047968"
                    },
                    {
                        "lightness": "-7"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -15
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": "7"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#06c5a9"
                    },
                    {
                        "lightness": -34
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#333739"
                    }
                ]
            }
        ];
    }
    ContactComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 3200) {
                timer = timer + 100;
            }
        });
        var ele = Array.from(document.getElementsByClassName('map-info'));
        ele.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('fadeInUp');
            }, 1000);
        });
        // setTimeout(() => {
        //   document.getElementById('animated-Up').classList.add('fadeInUp');
        // }, 100)
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <router-outlet></router-outlet>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-container',
            template: __webpack_require__("../../../../../src/app/container/container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#my-photo {\n    margin-top: 72px;\n}\n\n.designation {\n    font-size: 13px;\n    text-transform: uppercase;\n    letter-spacing: 8px;\n    font-weight: 700;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n    \n  \n  \n  <div class=\"content-section\">\n    <div class=\"info-title-container\">\n      <h1 class=\"info-title\">\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">H</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">i</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">,</span>\n        <br>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">I</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">'</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">m</span>\n        <span>&nbsp;</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">D</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">i</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">v</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">a</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">k</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">a</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">r</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">,</span>\n        <br>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">a</span>\n        <span>&nbsp;</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">S</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">o</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">f</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">t</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">w</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">a</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">r</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">e</span>\n        <span>&nbsp;</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">E</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">n</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">g</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">i</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">n</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">e</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">e</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">r</span>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">.</span>\n      </h1>\n      <p class=\"designation\">Mobile and API Developer.</p>\n    </div>\n    \n  </div>\n\n\n\n  <div class=\"media-section\">\n    <div class=\"social-links\">\n      <div>\n        <ul>\n          <li>\n            <a href=\"https://www.linkedin.com/in/divakar-sivashankar\">\n              <i class=\"fab fa-linkedin\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://twitter.com/Divakarsiva\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.facebook.com/divakar.siva.3\">\n              <i class=\"fab fa-facebook-square\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div>\n      <img id=\"my-photo\" src=\"../assets/img/polaroid_frame.png\" alt=\"\">\n    </div>\n\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 3200) {
                timer = timer + 100;
            }
        });
        setTimeout(function () {
            document.getElementById('my-photo').classList.add('show-in');
        }, 100);
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\">\n  <div class=\"logo\">\n    <a (click)=\"collapseAfter()\" routerLink=\"\">\n      <img src=\"assets/img/logo.png\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"mycontent-section\">\n  <div class=\"ham\" (click)=\"toggleMenu()\"></div>\n  <div class=\"clear\"></div>\n  <div class=\"main-navigation hide\">\n    <nav>\n      <ul>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path fill=\"#4d4d4e\" d=\"M509.8 227.5L448 177.8v-76c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v50.1L276.1 39.1c-11.7-9.5-28.5-9.5-40.2 0L2.2 227.5c-2.6 2.1-3 5.9-.9 8.4l12.6 15.6c2.1 2.6 5.9 3 8.5.9L64 218.9v229c0 17.7 14.3 32 32 32h116c6.6 0 12-5.4 12-12V335.8l64 .3v132.2c0 6.6 5.4 12 12 12l116-.3c17.7 0 32-14.3 32-32V219l41.6 33.5c2.6 2.1 6.4 1.7 8.5-.9l12.6-15.6c2.1-2.6 1.6-6.4-.9-8.5zM416 448l-96 .3V316c0-6.6-5.4-12-12-12l-104-.3c-6.6 0-12 5.4-12 12V448H96V193.1l156.2-126c2.2-1.8 5.3-1.8 7.5 0l156.2 126V448z\"\n                class=\"home_icon\"></path>\n            </svg>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"/about/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path fill=\"#4d4d4e\" d=\"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 32c119.293 0 216 96.707 216 216 0 41.286-11.59 79.862-31.684 112.665-12.599-27.799-38.139-43.609-56.969-48.989L350.53 310.3C372.154 286.662 384 256.243 384 224c0-70.689-57.189-128-128-128-70.691 0-128 57.192-128 128 0 32.243 11.846 62.662 33.471 86.299l-32.817 9.376c-18.483 5.281-44.287 20.974-56.979 48.973C51.586 335.849 40 297.279 40 256c0-119.293 96.707-216 216-216zm0 280c-53.02 0-96-42.981-96-96s42.98-96 96-96 96 42.981 96 96-42.98 96-96 96zm0 152c-63.352 0-120.333-27.274-159.844-70.72 1.705-23.783 18.083-44.206 41.288-50.836l54.501-15.572C211.204 346.041 233.143 352 256 352s44.796-5.959 64.054-17.127l54.501 15.572c23.205 6.63 39.583 27.053 41.288 50.836C376.333 444.726 319.352 472 256 472z\"\n                class=\"about_icon\"></path>\n            </svg>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"/career/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511 512\">\n              <path fill=\"#4d4d4e\" d=\"M501.8 19.1c-1.1-4.4-4.5-7.8-8.8-8.8C453.7.7 442.5 0 408 0c-68.6 0-128.1 44.9-173.8 96H106.7c-11.4 0-21.9 6-27.6 15.9l-74.7 128C-8 261.2 7.4 288 32 288h82.7c-8.6 19.1-14.3 33.5-18.6 44.6-1.7 4.4-.7 9.5 2.7 12.8l67.7 67.7c3.4 3.4 8.4 4.4 12.8 2.7 11.2-4.3 25.5-10 44.6-18.6V480c0 24.7 26.8 40.1 48.1 27.6l128-74.7c9.8-5.7 15.9-16.3 15.9-27.6V277.8c51.1-45.7 96-105.2 96-173.8.1-34.5-.6-45.8-10.1-84.9zM32 256l74.7-128h101.1c-32.5 42.6-58.6 88.3-78.1 128H32zm224 224v-97.7c39.7-19.5 85.4-45.5 128-78.1v101.1L256 480zm-76.1-98.7l-49.1-49.1C177.6 215.9 283.8 32 408.1 32c24.7 0 37.3 0 65.5 6.5C480 66.7 480 79.2 480 104c0 124.3-184.1 230.5-300.1 277.3zM368 88c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56zm0 80c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z\"\n                class=\"career_icon\"></path>\n            </svg>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"/projects/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path fill=\"#4d4d4e\" d=\"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm16 272c0 8.837-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h146.745l64 64H464c8.837 0 16 7.163 16 16v224z\"\n                class=\"project_icon\"></path>\n            </svg>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"/accomplishments/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n              <path fill=\"#4d4d4e\" d=\"M448 64V12c0-6.6-5.4-12-12-12H140c-6.6 0-12 5.4-12 12v52H12C5.4 64 0 69.4 0 76v61.6C0 199.7 68.1 272 160.7 285.7c29.4 60.7 73.7 90.3 111.3 96.9V480h-86c-14.4 0-26 11.7-26 26.1 0 3.3 2.7 5.9 6 5.9h244c3.3 0 6-2.6 6-5.9 0-14.4-11.6-26.1-26-26.1h-86v-97.4c37.7-6.6 81.9-36.2 111.3-96.9C508 272 576 199.6 576 137.6V76c0-6.6-5.4-12-12-12H448zM32 137.6V96h96v24c0 51.8 7 94.9 18.5 130.2C77.9 232.5 32 178 32 137.6zM288 352c-72 0-128-104-128-232V32h256v88c0 128-56 232-128 232zm256-214.4c0 40.4-46 94.9-114.5 112.6C441 214.9 448 171.8 448 120V96h96v41.6z\"\n                class=\"accomplishments_icon\"></path>\n            </svg>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"collapseAfter()\" routerLink=\"/contact/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path fill=\"#4d4d4e\" d=\"M256 8C118.941 8 8 118.919 8 256c0 137.058 110.919 248 248 248 52.925 0 104.68-17.078 147.092-48.319 5.501-4.052 6.423-11.924 2.095-17.211l-5.074-6.198c-4.018-4.909-11.193-5.883-16.307-2.129C346.93 457.208 301.974 472 256 472c-119.373 0-216-96.607-216-216 0-119.375 96.607-216 216-216 118.445 0 216 80.024 216 200 0 72.873-52.819 108.241-116.065 108.241-19.734 0-23.695-10.816-19.503-33.868l32.07-164.071c1.449-7.411-4.226-14.302-11.777-14.302h-12.421a12 12 0 0 0-11.781 9.718c-2.294 11.846-2.86 13.464-3.861 25.647-11.729-27.078-38.639-43.023-73.375-43.023-68.044 0-133.176 62.95-133.176 157.027 0 61.587 33.915 98.354 90.723 98.354 39.729 0 70.601-24.278 86.633-46.982-1.211 27.786 17.455 42.213 45.975 42.213C453.089 378.954 504 321.729 504 240 504 103.814 393.863 8 256 8zm-37.92 342.627c-36.681 0-58.58-25.108-58.58-67.166 0-74.69 50.765-121.545 97.217-121.545 38.857 0 58.102 27.79 58.102 65.735 0 58.133-38.369 122.976-96.739 122.976z\"\n                class=\"contact_icon\"></path>\n            </svg>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggleMenu = function () {
        if (document.getElementsByClassName('main-navigation')[0].classList.contains('hide')) {
            document.getElementsByClassName('main-navigation')[0].classList.remove('hide');
        }
        else {
            document.getElementsByClassName('main-navigation')[0].classList.add('hide');
        }
        if (document.getElementsByClassName('ham')[0].classList.contains('close')) {
            document.getElementsByClassName('ham')[0].classList.remove('close');
        }
        else {
            document.getElementsByClassName('ham')[0].classList.add('close');
        }
    };
    NavBarComponent.prototype.collapseAfter = function () {
        document.getElementsByClassName('main-navigation')[0].classList.add('hide');
        document.getElementsByClassName('ham')[0].classList.remove('close');
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-not-found {\n    position: relative;\n    text-align: center;\n    height: 100vh;\n}\n\nh1 {\n    font-size: 80px;\n    color: #464646;\n    position: absolute;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found\">\n  <h1>404</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"; */\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n  <div class=\"content-section\">\n    <div class=\"page-title\">\n      <h1>\n        <span class=\"blast\" (mouseenter)=\"animateOnHover($event)\">Projects</span>\n      </h1>\n    </div>\n    <div>\n    <div class=\"mycontent-section\">\n      <div>\n        <ul>\n          <li>\n            <span>Developed\n              <i>Scala Application</i> which uses\n              <i>Twitter API</i> to\n              <i>fetch the top 10 Hashtags</i> and loads the tweets with those hashtags into\n              <i>HDFS</i> with help of\n              <i>Flume</i> for further analytics.</span>\n          </li>\n          <li>\n            <span>Developed a\n              <i>C++ application</i> which uses\n              <i>Gmail RESTful API</i> to fetch user mail from particular time frames and stores them locally in an encrypted\n              form.\n            </span>\n          </li>\n          <li>\n            <span>Designed and developed an\n              <i>“In-Clinic Consultation” Android Application</i> for\n              <i>MDXcess Pte Ltd</i> in\n              <i>Agile methodology</i>, leveraging\n              <i>Voice recognition and Wearable technologies</i> to provide one tap details on patient reports and annotation\n              of Medical images.</span>\n          </li>\n          <li>\n            <span>Developed an\n              <i>Android Weather app</i> for Singapore which uses\n              <i>Location Manager</i> and\n              <i>NEA’s Restful Web Service</i>.</span>\n          </li>\n          <li>\n            <span>Developed a\n              <i>2D Plat former game</i> with Unity Engine using C# Scripting.</span>\n          </li>\n          <li>\n            <span>\n              <i>“D Launcher” Android Launcher Application</i> which will totally redesign the\n              <i>UI and UX of the Android device</i>. </span>\n          </li>\n          <li>\n            <span>Developed an Android Application to take advantage the power of\n              <i>Beacon Technology to send predefined Push Notifications</i>.</span>\n          </li>\n          <li>\n            <span>Developed an\n              <i>iOS Application “Plan Your Travel”</i> which will harness the API exposed by\n              <i>Land Transport Authority of Singapore (LTA) and Google’s Direction API</i> to give the best route and latest\n              time to start for your Travel.</span>\n          </li>\n          <li>\n            <span>Developed an\n              <i>iOS video recorder app</i> which will provide the ability to have text overlay using\n              <i>Unity</i>.</span>\n          </li>\n          <li>\n            <span>Developed a\n              <i>ChatBot</i> which send in videos of your interest via\n              <i>Facebook Messenger or Telegram or Skype</i> using the\n              <i>wit.AI and Facebook or Telegram or Skype API respectively</i>.</span>\n          </li>\n          <li>\n            <span>Developing a\n              <i>Java based 3D open world game engine</i> using\n              <i>Java, OpenGL and LWJGL</i>.</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"media-section\">\n    <div class=\"slider\">\n      <div>\n        <img src=\"assets/img/Arduino_Board_POC.JPG\">\n      </div>\n      <div>\n        <img src=\"assets/img/ChatBot_in_FB.PNG\">\n      </div>\n      <div>\n        <img src=\"assets/img/Cloudy_Screenshot.png\">\n      </div>\n      <div>\n        <img src=\"assets/img/Sunny_Screenshot.png\">\n      </div>\n      <div>\n        <img src=\"assets/img/ChatBot_in_telegram.PNG\">\n      </div>\n      <div>\n        <img src=\"assets/img/DEngine_Game_Engine_Person.png\">\n      </div>\n      <div>\n        <img src=\"assets/img/Details_Screen_Portrait.jpg\">\n      </div>\n      <div>\n        <img src=\"assets/img/DEngine_Game_Engine.png\">\n      </div>\n      <div>\n        <img src=\"assets/img/Launch_Screen_Portrait.jpg\">\n      </div>\n      <div>\n        <img src=\"assets/img/Trump_AR_Game(ARKIT).PNG\">\n      </div>\n      <div>\n        <img src=\"assets/img/Map_Screen_Portrait.jpg\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(config) {
        this.config = config;
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
    }
    ProjectsComponent.prototype.animateOnHover = function (e) {
        var ele = e.target;
        ele.classList.add('elastic');
        ele.addEventListener('animationend', function () {
            ele.classList.remove('elastic');
        });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        $('.slider').bxSlider({
            preloadImages: 'all',
            adaptiveHeight: true
        });
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        var timer = 0;
        var elem = Array.from(document.getElementsByClassName('blast'));
        elem.forEach(function (element) {
            var item = element;
            setTimeout(function () {
                item.classList.add('bounce');
            }, timer);
            if (timer < 3200) {
                timer = timer + 100;
            }
        });
        setTimeout(function () {
            var elem = Array.from(document.getElementsByClassName('blast'));
            elem.forEach(function (element) {
                element.classList.remove('bounce');
                element.classList.add('show');
            });
        }, 3300);
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typewriter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypewriterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypewriterService = /** @class */ (function () {
    function TypewriterService() {
        this.cursorPosition = 0;
        this.writingTag = false;
        this.tagOpen = false;
        this.typeSpeed = 100;
        this.tempTypeSpeed = 0;
    }
    TypewriterService.prototype.setupTypewriter = function (t) {
        var that = this;
        var HTML = t.innerHTML;
        t.innerHTML = "";
        var type = function () {
            if (that.writingTag === true) {
                that.tag += HTML[that.cursorPosition];
            }
            if (HTML[that.cursorPosition] === "<") {
                that.tempTypeSpeed = 0;
                if (that.tagOpen) {
                    that.tagOpen = false;
                    that.writingTag = true;
                }
                else {
                    that.tag = "";
                    that.tagOpen = true;
                    that.writingTag = true;
                    that.tag += HTML[that.cursorPosition];
                }
            }
            if (!that.writingTag && that.tagOpen) {
                that.tag.innerHTML += HTML[that.cursorPosition];
            }
            if (!that.writingTag && !that.tagOpen) {
                if (HTML[that.cursorPosition] === " ") {
                    that.tempTypeSpeed = 0;
                }
                else {
                    that.tempTypeSpeed = (Math.random() * that.typeSpeed) + 50;
                }
                t.innerHTML += HTML[that.cursorPosition];
            }
            if (that.writingTag === true && HTML[that.cursorPosition] === ">") {
                that.tempTypeSpeed = (Math.random() * that.typeSpeed) + 50;
                that.writingTag = false;
                if (that.tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = that.tag;
                    that.tag = newSpan.firstChild;
                }
            }
            that.cursorPosition += 1;
            if (that.cursorPosition < HTML.length - 1) {
                setTimeout(type, that.tempTypeSpeed);
            }
        };
        return {
            type: type
        };
    };
    TypewriterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TypewriterService);
    return TypewriterService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map