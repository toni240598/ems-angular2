import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports : [
  	NavbarComponent,
  	SidebarComponent,
  	FooterComponent
  ],
  declarations: [
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ]
})
export class TemplateModule { }
