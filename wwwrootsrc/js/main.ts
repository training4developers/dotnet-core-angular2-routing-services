// Used to bootstrap the application in a web browser environment
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The function enableProdMode switches the application to prod mode when invoked
import { enableProdMode } from '@angular/core';

// in proc mode special development and debugging
// capabilities are turned off to improve performance
if (String(process.env['ENV']).toLowerCase() === 'production') {
   enableProdMode();
}

// import the AppModule
import { AppModule } from './app/app.module';

// bootstrap the application from the AppModule
platformBrowserDynamic().bootstrapModule(AppModule);