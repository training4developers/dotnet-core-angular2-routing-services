import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs";

import { Widget } from "../models/widget";

// moved the widgets http code to a service so it can be utilized throughout
// the Angular 2 application

@Injectable()
export class Widgets {

    // inject the Http service, and make it a private field
    // on the service
    constructor(private http: Http) { }

    // return all of the widgets
    getAll(): Observable<Widget[]> {
        return this.http.get('/widgets')
            .map(res => res.json());
    }

    // return a widget by id
    get(widgetId: number): Observable<Widget> {
        return this.http.get('/widgets/' + encodeURIComponent(widgetId.toString()))
            .map(res => res.json());
    }
}