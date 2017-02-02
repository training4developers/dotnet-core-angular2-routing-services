import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

@Component({
    selector: "widget-table",
    template: require("./widget-table.component.html"),
    styles: [ require("./widget-table.component.scss") ]
})
export class WidgetTable implements OnInit {

    private widgets: Widget[] = [];

    constructor(
        private widgetsSvc: Widgets,
        private router: Router
    ) { }

    ngOnInit() {
        this.widgetsSvc.getAll()
            .subscribe(widgets => this.widgets = widgets);
    }

    viewWidget(widgetId: number) {
        this.router.navigate(['widget', widgetId]);
    }

}