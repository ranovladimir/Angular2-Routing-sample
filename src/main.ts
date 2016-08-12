
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';


import {appRouterProviders} from './app/app.routes';
import {AppComponent} from './app/app.component';

// enableProdMode()

//
//bootstrap mode Route parameter.
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS
])
.catch(err => console.error(err));
