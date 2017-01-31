// The NgModule decorator is use to decorate classes to identify
// them as module classes in the Angular 2 application
import { NgModule } from '@angular/core';

// Imports the Browser Module to run the Angular 2 application in
// a web browser environment. At the moment, Angular 2 applications
// typically run in a web browser environment, but this is expected
// to expand to native apps, such as iOS apps, in the near future
// meaning Angular 2 will not be limited to a web browser environment,
// and other platform modules will be available.
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

// Import the AppComponent so it can be registered with the AppModule
import { AppComponent } from './app.component';

// Imports the global styles for the application
// Angular 2 apps have two kinds of styles, global and component-specific
// styles. Global styles are referenced in the App Module, while
// component specific styles are referenced via the styles option on
// each component's decorator configuration   
import '../../css/styles.scss';

// Decorates the class to be an Angular 2 module
// Each Angular 2 application has a top-level AppModule
// from which the application bootstraps itself
@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }