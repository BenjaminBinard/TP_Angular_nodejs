import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColLeftComponent } from './col-left/col-left.component';
import { ColRightComponent } from './col-right/col-right.component';


@NgModule({
  declarations: [
    AppComponent,
    ColLeftComponent,
    ColRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
