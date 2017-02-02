import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs";

import { Widget } from "../models/widget";

@Injectable()
export class Widgets {

    constructor(private http: Http) { }

    getAll(): Observable<Widget[]> {
        return this.http.get('/widgets')
            .map(res => res.json());
    }

    get(widgetId: number): Observable<Widget> {
        return this.http.get('/widgets/' + encodeURIComponent(widgetId.toString()))
            .map(res => res.json());
    }
}