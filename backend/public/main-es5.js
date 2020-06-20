function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _uploadservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./uploadservice.service */
    "./src/app/uploadservice.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", image_r4, " ");
      }
    }

    function AppComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Below images are displayed based on color,foreground and high level semantic feature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_29_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r6.displayChart(item_r5);
          return ctx_r6.persistId(item_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(http://localhost:3000/static/" + item_r5.name + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
      }
    }

    function AppComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Query Image Comparision ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r3.localUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.description, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(uploadservice, formBuilder, httpClient) {
        _classCallCheck(this, AppComponent);

        this.uploadservice = uploadservice;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.title = 'Image Search';
        this.file = {};
        this.files = [];
        this.imgNameList = [];
        this.jsonImageObj = [];
        this.queryId = '';
        this.uploadedImages = [];
        this.addinputValue = "";
        this.description = "";
        this.selectedImages = [];
        this.highest = "";
        this.moderate = "";
        this.lowest = "";
        this.jsonExplainObj = [];
      }

      _createClass(AppComponent, [{
        key: "runscript",
        value: function runscript() {
          var _this = this;

          this.resultsCount = 0;
          this.imgNameList = [];
          var formData = new FormData();
          formData.append('file', this.uploadForm.get('file').value); //Display query image for user
          //var reader = new FileReader();
          //this.localUrl = reader.readAsDataURL(this.uploadForm.get('file').value);      

          this.uploadservice.runscript(formData).subscribe(function (res) {
            _this.jsonImageObj = [];
            var matchedImages = res.body;
            console.log(res.headers.get('qId'));
            _this.queryId = res.headers.get('qId');
            _this.jsonImageObj = JSON.parse(matchedImages.toString());
            console.log('color weight: ', _this.jsonImageObj[0].weight1);
            console.log('foreground weight: ', _this.jsonImageObj[0].weight2);
            console.log('highlevel feature weight: ', _this.jsonImageObj[0].weight3);
            var color_wt = _this.jsonImageObj[0].weight1;
            var fg_wt = _this.jsonImageObj[0].weight2;
            var hf_wt = _this.jsonImageObj[0].weight3;

            if (color_wt > fg_wt && color_wt > hf_wt) {
              _this.highest = 'color shape and texture';
            } else if (fg_wt > color_wt && fg_wt > hf_wt) {
              _this.highest = 'foreground';
            } else {
              _this.highest = 'semantic';
            }

            if (color_wt < fg_wt && color_wt < hf_wt) {
              _this.lowest = 'color shape and texture';
            } else if (fg_wt < color_wt && fg_wt < hf_wt) {
              _this.lowest = 'foreground';
            } else {
              _this.lowest = 'semantic';
            } //Check for conditions when all are equal display everything as equal contribution


            for (var i = 0; i < _this.jsonImageObj.length; i++) {
              _this.imgNameList.push(_this.jsonImageObj[i].name);
            }

            _this.resultsCount = _this.imgNameList.length;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploadForm = this.formBuilder.group({
            file: [''],
            files: Array()
          });
        }
      }, {
        key: "fileChange",
        value: function fileChange(event) {
          var _this2 = this;

          this.uploadedImages = [];

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('file').setValue(file);
            this.uploadedImages.push(file.name); //Display query image

            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function (_event) {
              _this2.localUrl = reader.result;
            };
          }
        }
      }, {
        key: "upload",
        value: function upload() {
          var formRepoImage = new FormData();
          formRepoImage.append('file', this.uploadForm.get('file').value);
          this.uploadservice.uploadImage(formRepoImage).subscribe(function (res) {
            return console.log(res);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "persistId",
        value: function persistId(item) {
          var queryImage = new FormData();
          queryImage.append('file', this.uploadForm.get('file').value);
          console.log(this.queryId);
          var qId = this.queryId;
          this.uploadservice.persistQueryObj(item, qId).subscribe(function (res) {
            var matchedImages = res;
          });
        } //Upload multiple images into mongo repository

      }, {
        key: "fileChangeMultiple",
        value: function fileChangeMultiple(event) {
          var index = 0;
          this.uploadedImages = [];
          var images = [];
          var file = []; //event.target.files[0];

          for (var i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
            file.push(event.target.files[i]);
          }

          images = event.target.files;
          this.uploadForm.get('files').setValue(file); //this.uploadForm.get('files').setValue(images);
          //Push the file name into input field

          if (event.target.files.length > 0) {
            while (index < event.target.files.length) {
              var _file = event.target.files[index];
              this.uploadedImages.push(_file.name);
              index++;
            }
          }
        }
      }, {
        key: "uploadMultiple",
        value: function uploadMultiple() {
          var formDataMultiple = new FormData(); //formDataMultiple.append('files[]', this.uploadForm.get('file').value);

          formDataMultiple.append('files[]', this.uploadForm.get('files').value);
          this.uploadservice.uploadMultiple(formDataMultiple).subscribe(function (res) {
            var resp = res;
          }); //Set the values of files into formData, currently data is set as String
          //Not object, check and set properly
        }
      }, {
        key: "explainImage",
        value: function explainImage() {
          var _this3 = this;

          this.uploadservice.explainImage().subscribe(function (res) {
            _this3.jsonExplainObj = res;
          });
          console.log(this.jsonExplainObj);
        }
      }, {
        key: "displayChart",
        value: function displayChart(item) {
          //this.description= `The selected image matches ${item.color} percentage with color, shape and texture of the query image.`
          this.description = "The selected image matches 90 percentage with color, 5 percent with High level semantic deature and 5 percent with foreground.";
          console.log(item);
          highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('pieChart', {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
            },
            title: {
              text: 'Feature Contribution'
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
              }
            },
            series: [{
              name: '',
              colorByPoint: true,
              type: undefined,
              data: [{
                name: 'Color',
                y: 90,
                sliced: true,
                selected: true
              }, {
                name: 'Foreground',
                y: 5,
                sliced: true
              }, {
                name: 'Semantic Feature',
                y: 5 //parseFloat(item.fg)

              }]
            }]
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_uploadservice_service__WEBPACK_IMPORTED_MODULE_2__["UploadserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 32,
      vars: 6,
      consts: [[1, "height100"], ["enctype", "multipart/form-data", 3, "formGroup"], [1, "header"], [1, "label-group"], [1, "header-label"], [1, "sub-header-label"], [1, "search-outer"], [1, "search-container", "box-shadow"], ["src", "/assets/images/search.svg", "alt", "search"], ["class", "image-items ", 4, "ngFor", "ngForOf"], [1, "btn-group"], [1, "input-container"], ["type", "file", "name", "file", "id", "file", "multiple", "", "accept", "image/*", 1, "file-input", 3, "change"], ["for", "file"], ["src", "/assets/images/upload.svg"], [1, "search-btn", 3, "click"], [1, "results-count"], [1, "count-circle"], ["class", "row-info", 4, "ngIf"], [1, "results-container"], [1, "image-row", "disable-scrollbars"], ["class", "image-item box-shadow", 4, "ngFor", "ngForOf"], ["class", "image-desc box-shadow", 4, "ngIf"], [1, "image-items"], [1, "row-info"], [1, "image-item", "box-shadow"], [1, "image"], [1, "image-button"], ["type", "button", "value", "Explain", 1, "btn", "btn-primary", "btn-block", "explain-btn", 3, "click"], [1, "circles"], [1, "image-desc", "box-shadow"], [1, "desc-label"], [1, "query-image"], [1, "description"], ["id", "pieChart", 1, "chart-container", 2, "height", "500px", "width", "390px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Content based Image Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Driven by XAI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_15_listener($event) {
            return ctx.fileChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
            return ctx.runscript();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() {
            return ctx.explainImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Explain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "matching results. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_26_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_div_29_Template, 8, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 8, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uploadedImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.resultsCount || 0, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jsonImageObj.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jsonImageObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jsonImageObj.length);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".image-row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 70%;\r\n    \r\n    padding-left: 100px;\r\n    overflow-y: scroll;\r\n    height: 600px;\r\n}\r\n\r\n.results-container[_ngcontent-%COMP%]{\r\n    display: flex; \r\n}\r\n\r\n.image-desc[_ngcontent-%COMP%]{\r\n    \r\n    width: 30%;\r\n    padding: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-top: 5px solid #27346B;\r\n}\r\n\r\n.query-image[_ngcontent-%COMP%]{\r\n    \r\n    width: 200px;\r\n    height: 215px;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    font-weight: 200;\r\n    padding: 20px;\r\n}\r\n\r\n.height100[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.desc-label[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    text-align: center; \r\n}\r\n\r\n.results-count[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    padding: 0px 105px;\r\n    font-size: larger;\r\n    font-weight: 200;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 50px;\r\n}\r\n\r\n.row-info[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    padding: 20px 105px;\r\n    font-size: 16px;\r\n    font-weight: 200;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.count-circle[_ngcontent-%COMP%]{\r\n    border: 1px solid #27346B;\r\n    border-radius: 50px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-right: 10px;\r\n    color:#27346B;\r\n}\r\n\r\n.image-box[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n.image-row[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%]{\r\n    height: 265px;\r\n    width: 250px;\r\n    \r\n    background-color: white;\r\n    margin: 10px;\r\n    border-radius: 2px; \r\n    font-family: 'Open Sans', sans-serif;\r\n    \r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    height: 215px;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.image-button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 60px;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.image-button[_ngcontent-%COMP%]   .explain-btn[_ngcontent-%COMP%]{\r\n    \r\n    width: 50%; \r\n    height: 35px;\r\n    background: #27346B;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: calc(100% - 20px);\r\n}\r\n\r\n.circles[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 40px;\r\n    \r\n    width: calc(50% - 21px);\r\n    cursor: pointer;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.circles[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #DB5669;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    background-color: #27346B;\r\n    height: 250px;\r\n    color: white;\r\n    position: relative;\r\n}\r\n\r\n.label-group[_ngcontent-%COMP%]{\r\n    padding-top: 40px;\r\n}\r\n\r\n.header-label[_ngcontent-%COMP%]{\r\n    font-size: 36px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n}\r\n\r\n.sub-header-label[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n    text-align: center;\r\n    font-weight: 300;\r\n}\r\n\r\n.search-outer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%]{\r\n    background: white;\r\n    color: #333333;\r\n    height: 50px;\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 4px;\r\n    padding: 0px 10px;\r\n    margin-top: 75px\r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%] {\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.12), \r\n                0 2px 2px rgba(0,0,0,0.12), \r\n                0 4px 4px rgba(0,0,0,0.12), \r\n                0 8px 8px rgba(0,0,0,0.12),\r\n                0 16px 16px rgba(0,0,0,0.12);\r\n  }\r\n\r\n.search-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]{\r\n    background: #DB5669;\r\n    color: white;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding: 0px 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    border: none;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]{\r\n    background: #DB5669;\r\n    color: white;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    padding: 0px 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: none;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    width: 30px;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    margin: 0px 5px\r\n}\r\n\r\n.disable-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVjs7d0JBRW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWjtrQkFDYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFDQSxlQUFlOztBQUNmO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJOzs7OzRDQUl3QztFQUMxQzs7QUFFRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLFVBQVU7SUFDVix1QkFBdUIsRUFBRSx5QkFBeUI7QUFDdEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY3cHg7Ki9cclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxufVxyXG5cclxuLmltYWdlLWRlc2N7XHJcbiAgICAvKndpZHRoOiAyOCU7Ki9cclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMyNzM0NkI7XHJcbn1cclxuLnF1ZXJ5LWltYWdle1xyXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIC8qaGVpZ2h0OiAxNzRweDsqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmhlaWdodDEwMHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGVzYy1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4ucmVzdWx0cy1jb3VudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDBweCAxMDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5yb3ctaW5mb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvdW50LWNpcmNsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzM0NkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjojMjczNDZCO1xyXG59XHJcbi5pbWFnZS1ib3h7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uaW1hZ2Utcm93IC5pbWFnZS1pdGVte1xyXG4gICAgaGVpZ2h0OiAyNjVweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIC8qaGVpZ2h0OiAyMjlweDtcclxuICAgIHdpZHRoOiAxOTJweDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgLypoZWlnaHQ6IDE3NHB4OyovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1idXR0b24gLmV4cGxhaW4tYnRue1xyXG4gICAgLyp3aWR0aDogNDAlOyovXHJcbiAgICB3aWR0aDogNTAlOyBcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzM0NkI7XHJcbn1cclxuLmltYWdlIGltZ3tcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbn1cclxuXHJcbi5jaXJjbGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7Ki9cclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIxcHgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGRpdntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCNTY2OTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLyogTmV3IFN0eWxlcyAqL1xyXG4uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzQ2QjtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sYWJlbC1ncm91cHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlci1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtb3V0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTIpLCBcclxuICAgICAgICAgICAgICAgIDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTIpLCBcclxuICAgICAgICAgICAgICAgIDAgNHB4IDRweCByZ2JhKDAsMCwwLDAuMTIpLCBcclxuICAgICAgICAgICAgICAgIDAgOHB4IDhweCByZ2JhKDAsMCwwLDAuMTIpLFxyXG4gICAgICAgICAgICAgICAgMCAxNnB4IDE2cHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICB9XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciBpbWd7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciBpbnB1dHtcclxuICAgIHdpZHRoOiAwLjFweDtcclxuICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogI0RCNTY2OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNEQjU2Njk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn0gXHJcbi5pbnB1dC1jb250YWluZXIgbGFiZWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5idG4tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gZGl2e1xyXG4gICAgbWFyZ2luOiAwcHggNXB4XHJcbn1cclxuLmRpc2FibGUtc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBDaHJvbWUvU2FmYXJpL1dlYmtpdCAqL1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _uploadservice_service__WEBPACK_IMPORTED_MODULE_2__["UploadserviceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); //import { HighchartsChartComponent } from 'highcharts-angular';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/uploadservice.service.ts":
  /*!******************************************!*\
    !*** ./src/app/uploadservice.service.ts ***!
    \******************************************/

  /*! exports provided: UploadserviceService */

  /***/
  function srcAppUploadserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadserviceService", function () {
      return UploadserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UploadserviceService = /*#__PURE__*/function () {
      function UploadserviceService(http) {
        _classCallCheck(this, UploadserviceService);

        this.http = http;
      }

      _createClass(UploadserviceService, [{
        key: "uploadImage",
        value: function uploadImage(formData) {
          return this.http.post('http://localhost:3000/fileupload', formData);
        }
      }, {
        key: "getImages",
        value: function getImages() {
          return this.http.get('lists', {});
        }
      }, {
        key: "runscript",
        value: function runscript(formData) {
          return this.http.post('http://localhost:3000/runscript', formData, {
            observe: "response",
            responseType: 'json'
          });
        }
      }, {
        key: "persistQueryObj",
        value: function persistQueryObj(repoImg, qid) {
          var queryRepoList = [];
          queryRepoList.push(qid);
          queryRepoList.push(repoImg);
          return this.http.post('http://localhost:3000/persistQueryObj', queryRepoList);
        }
      }, {
        key: "uploadMultiple",
        value: function uploadMultiple(formData) {
          return this.http.post('http://localhost:3000/uploadmultiple', formData);
        }
      }, {
        key: "explainImage",
        value: function explainImage() {
          return this.http.get('http://localhost:3000/explain', {
            responseType: 'json'
          });
        }
      }]);

      return UploadserviceService;
    }();

    UploadserviceService.ɵfac = function UploadserviceService_Factory(t) {
      return new (t || UploadserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UploadserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UploadserviceService,
      factory: UploadserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\OVGU\Sem2_Summer2020\Subjects\Project\Milestone_3_Pascal_Demo\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map