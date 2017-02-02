// imports the Component decorator from the core
// Angular 2 module
import { Component, OnInit } from '@angular/core';

// import the widget interface for defining widget models
import { Widget } from './models/widget';

// import the Widgets service for getting widgets from the
// REST service
import { Widgets } from './services/widgets';

// The Component Decorator configures this class
// to serve as a component in the Angular 2 application
@Component({
    // Used to identify the element the component will be applied to in
    // the DOM structure of the web page
    selector: 'main',
    // Loads the component's specific styles
    styles: [require('./app.component.scss')],
    // Loads the component's template
    template: require('./app.component.html'),
})
export class AppComponent implements OnInit {
 
    // array of widgets to display in the table
    private widgets: Widget[] = null;

    // use the current year for the copyright year
    private copyright: string = `Copyright ${(new Date()).getFullYear()} Widget Application`;

    // inject the http service into the component
    // marked as private so http will be available
    // as private field on the component instance
    constructor(private widgetsSvc: Widgets) { }

    // runs when the component is instantiated
    ngOnInit() {

        // retrieve the widgets from the REST services
        this.widgetsSvc.getAll()
            .subscribe(widgets => {
                this.widgets = widgets;
            });
    }    
}