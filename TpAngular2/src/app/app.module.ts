import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MonObj } from '../util/MonObj';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RecupComponent } from './recup/recup.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RecupComponent,
    HomeComponent,
    NotfoundComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router : Router){
    console.log('Routes', JSON.stringify(router.config, undefined, 2));
  }
}
