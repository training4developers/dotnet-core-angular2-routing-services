import { Route, RouterModule } from '@angular/router';

import { WidgetTable } from './components/widget-table/widget-table.component';
import { WidgetView } from './components/widget-view/widget-view.component';

const appRoutes: Route[] = [
	{ path: '', component: WidgetTable },
    { path: 'widget/:widgetId', component: WidgetView },
];

export const AppRouterModule = RouterModule.forRoot(appRoutes, { useHash: false });