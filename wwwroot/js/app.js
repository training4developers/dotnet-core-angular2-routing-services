webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Used to bootstrap the application in a web browser environment
	var platform_browser_dynamic_1 = __webpack_require__(2);
	// The function enableProdMode switches the application to prod mode when invoked
	var core_1 = __webpack_require__(4);
	// in proc mode special development and debugging
	// capabilities are turned off to improve performance
	if (String(process.env['ENV']).toLowerCase() === 'production') {
	    core_1.enableProdMode();
	}
	// import the AppModule
	var app_module_1 = __webpack_require__(24);
	// bootstrap the application from the AppModule
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	// The NgModule decorator is use to decorate classes to identify
	// them as module classes in the Angular 2 application
	var core_1 = __webpack_require__(4);
	// Imports the Browser Module to run the Angular 2 application in
	// a web browser environment. At the moment, Angular 2 applications
	// typically run in a web browser environment, but this is expected
	// to expand to native apps, such as iOS apps, in the near future
	// meaning Angular 2 will not be limited to a web browser environment,
	// and other platform modules will be available.
	var platform_browser_1 = __webpack_require__(22);
	var http_1 = __webpack_require__(25);
	// Import the AppComponent so it can be registered with the AppModule
	var app_component_1 = __webpack_require__(26);
	// Imports the global styles for the application
	// Angular 2 apps have two kinds of styles, global and component-specific
	// styles. Global styles are referenced in the App Module, while
	// component specific styles are referenced via the styles option on
	// each component's decorator configuration   
	__webpack_require__(29);
	// Decorates the class to be an Angular 2 module
	// Each Angular 2 application has a top-level AppModule
	// from which the application bootstraps itself
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
	        declarations: [app_component_1.AppComponent],
	        bootstrap: [app_component_1.AppComponent]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// imports the Component decorator from the core
	// Angular 2 module
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(25);
	// The Component Decorator configures this class
	// to serve as a component in the Angular 2 application
	var AppComponent = (function () {
	    function AppComponent(http) {
	        this.http = http;
	        // sets a property on the component which will be referenced
	        // as a template variable in the template file
	        this.message = 'Hello World!';
	        this.widgets = null;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.http.get('/widgets')
	            .map(function (res) { return res.json(); })
	            .subscribe(function (widgets) {
	            _this.widgets = widgets;
	        });
	    };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        // Used to identify the element the component will be applied to in
	        // the DOM structure of the web page
	        selector: 'main',
	        // Loads the component's specific styles
	        styles: [__webpack_require__(27)],
	        // Loads the component's template
	        template: __webpack_require__(28)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "h1 {\n  color: blue; }\n"

/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = "<h1>Widgets Tool</h1>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Color</th>\n      <th>Size</th>\n      <th>Quantity</th>\n      <th>Price</th>\n    </tr>\n  </thead>\n  <tbody>\n   <tr *ngFor=\"let widget of widgets\">\n     <td>{{widget.name}}</td>\n     <td>{{widget.description}}</td>\n     <td>{{widget.color}}</td>\n     <td>{{widget.size}}</td>\n     <td>{{widget.quantity}}</td>\n     <td>{{widget.price}}</td>\n    </tr>\n   </tbody>\n</table>";

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 10px; }\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=app.js.map