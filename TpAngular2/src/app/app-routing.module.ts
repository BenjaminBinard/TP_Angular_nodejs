import { NgModule } from '@angular/core';
import { RouterModule, Routes } from'@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  /* { path: '', component: HomeComponent },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
