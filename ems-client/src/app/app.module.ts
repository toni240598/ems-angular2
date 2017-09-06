import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { PagesModule } from "./pages/pages.module";
import { AppRouterModule } from "./app.routing";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    RouterModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
