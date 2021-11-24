import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './shared/material/material.module';
import { AccountModule } from './modules/account/account.module';
import { HomeComponent } from './home/home.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config/config.component';
import { RouterModule } from '@angular/router';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'wallet-cli' }),
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HttpClientJsonpModule,HttpClientModule,
    ReactiveFormsModule,
    AccountModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent
  ]
})
export class AppModule { }
