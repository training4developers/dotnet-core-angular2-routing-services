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
	var app_router_1 = __webpack_require__(26);
	// Imports the components to be registered with the Application
	var app_component_1 = __webpack_require__(66);
	var widget_table_component_1 = __webpack_require__(59);
	var widget_view_component_1 = __webpack_require__(63);
	// Imports the Widgets Service so it can be registered with the Application Module
	var widgets_1 = __webpack_require__(60);
	// Imports the global styles for the application
	// Angular 2 apps have two kinds of styles, global and component-specific
	// styles. Global styles are referenced in the App Module, while
	// component specific styles are referenced via the styles option on
	// each component's decorator configuration   
	__webpack_require__(69);
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
	        // import the BrowserModule and the
	        // HttpModule into the App module
	        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_router_1.AppRouterModule],
	        // Make the App, Widget Table, and Widget View components available
	        // for use in the templates
	        declarations: [app_component_1.AppComponent, widget_table_component_1.WidgetTable, widget_view_component_1.WidgetView],
	        // Start the application from the App component
	        bootstrap: [app_component_1.AppComponent],
	        // makes the service available to the component
	        providers: [widgets_1.Widgets],
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(27);
	var widget_table_component_1 = __webpack_require__(59);
	var widget_view_component_1 = __webpack_require__(63);
	var appRoutes = [
	    { path: '', component: widget_table_component_1.WidgetTable },
	    { path: 'widget/:widgetId', component: widget_view_component_1.WidgetView },
	];
	exports.AppRouterModule = router_1.RouterModule.forRoot(appRoutes, { useHash: false });


/***/ },

/***/ 59:
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
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(27);
	var widgets_1 = __webpack_require__(60);
	var WidgetTable = (function () {
	    function WidgetTable(widgetsSvc, router) {
	        this.widgetsSvc = widgetsSvc;
	        this.router = router;
	        this.widgets = [];
	    }
	    WidgetTable.prototype.ngOnInit = function () {
	        var _this = this;
	        this.widgetsSvc.getAll()
	            .subscribe(function (widgets) { return _this.widgets = widgets; });
	    };
	    WidgetTable.prototype.viewWidget = function (widgetId) {
	        this.router.navigate(['widget', widgetId]);
	    };
	    return WidgetTable;
	}());
	WidgetTable = __decorate([
	    core_1.Component({
	        selector: "widget-table",
	        template: __webpack_require__(61),
	        styles: [__webpack_require__(62)]
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets,
	        router_1.Router])
	], WidgetTable);
	exports.WidgetTable = WidgetTable;


/***/ },

/***/ 60:
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
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(25);
	var Widgets = (function () {
	    function Widgets(http) {
	        this.http = http;
	    }
	    Widgets.prototype.getAll = function () {
	        return this.http.get('/widgets')
	            .map(function (res) { return res.json(); });
	    };
	    Widgets.prototype.get = function (widgetId) {
	        return this.http.get('/widgets/' + encodeURIComponent(widgetId.toString()))
	            .map(function (res) { return res.json(); });
	    };
	    return Widgets;
	}());
	Widgets = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], Widgets);
	exports.Widgets = Widgets;


/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Color</th>\n      <th>Size</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n   <tr *ngFor=\"let widget of widgets\">\n     <td>{{widget.name}}</td>\n     <td>{{widget.color}}</td>\n     <td>{{widget.size}}</td>\n     <td>{{widget.quantity}}</td>\n     <td>{{widget.price}}</td>\n     <td>\n         <button type=\"button\" (click)=\"viewWidget(widget.id)\">View</button>\n     </td>\n    </tr>\n   </tbody>\n</table>";

/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 63:
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
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(27);
	var widgets_1 = __webpack_require__(60);
	var WidgetView = (function () {
	    function WidgetView(widgets, route, router) {
	        this.widgets = widgets;
	        this.route = route;
	        this.router = router;
	    }
	    WidgetView.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            return _this.widgets.get(params['widgetId'])
	                .subscribe(function (widget) { return _this.widget = widget; });
	        });
	    };
	    WidgetView.prototype.returnToList = function () {
	        this.router.navigateByUrl('/');
	    };
	    return WidgetView;
	}());
	WidgetView = __decorate([
	    core_1.Component({
	        template: __webpack_require__(64),
	        styles: [__webpack_require__(65)]
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], WidgetView);
	exports.WidgetView = WidgetView;


/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = "<div>Name: {{widget?.name}}</div>\n<div>Description: {{widget?.description}}</div>\n<div>Color: {{widget?.color}}</div>\n<div>Size: {{widget?.size}}</div>\n<div>Quantity: {{widget?.quantity}}</div>\n<div>Price: {{widget?.price}}</div>\n<button type=\"button\" (click)=\"returnToList()\">Return to List</button>\n";

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 66:
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
	var widgets_1 = __webpack_require__(60);
	// The Component Decorator configures this class
	// to serve as a component in the Angular 2 application
	var AppComponent = (function () {
	    // inject the http service into the component
	    // marked as private so http will be available
	    // as private field on the component instance
	    function AppComponent(widgetsSvc) {
	        this.widgetsSvc = widgetsSvc;
	        // array of widgets to display in the table
	        this.widgets = null;
	        this.copyright = "Copyright " + (new Date()).getFullYear() + " Widget Application";
	    }
	    // runs when the component is instantiated
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        // retrieve the widgets from the REST services
	        this.widgetsSvc.getAll()
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
	        styles: [__webpack_require__(67)],
	        // Loads the component's template
	        template: __webpack_require__(68),
	    }),
	    __metadata("design:paramtypes", [widgets_1.Widgets])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = "h1 {\n  color: blue; }\n"

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = "<header>\n    <h1>Widget Application</h1>\n</header>\n<div>\n    <router-outlet></router-outlet>\n</div>\n<footer>\n    <small>{{copyright}}</small>\n</footer>";

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(72)(content, {});
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

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(71)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 10px; }\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=app.js.map