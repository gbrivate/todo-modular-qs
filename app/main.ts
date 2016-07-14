import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app.component';

import { appRoutes}   from './app.routes';

bootstrap(AppComponent, [
    /*appRoutes,*/
    HTTP_PROVIDERS
]).catch(err => {
    console.error(err);
});

