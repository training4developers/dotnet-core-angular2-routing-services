import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Widgets } from "../../services/widgets";
import { Widget } from "../../models/widget";

@Component({
    template: require('./widget-view.component.html'),
    styles: [ require('./widget-view.component.scss') ]
})
export class WidgetView implements OnInit {

    public widget: Widget;

    constructor(
        private widgets: Widgets,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    public ngOnInit() {
        this.route.params.subscribe(params =>
            this.widgets.get(params['widgetId'])
                .subscribe(widget => this.widget = widget));
    }

    public returnToList() {
        this.router.navigateByUrl('/');
    }

}