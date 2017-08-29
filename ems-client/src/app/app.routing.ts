import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./pages/home/home.component";
import { HomeDashboardComponent  } from "./pages/home/home-dashboard/home-dashboard.component";
import { StoreComponent } from "./pages/home/store/store.component";
import { AlarmComponent } from "./pages/home/alarm/alarm.component";
import { CeoComponent } from "./pages/ceo/ceo.component";
import { StoreDashboardComponent } from "./pages/home/store/store-dashboard/store-dashboard.component";
import { StoreInventoryComponent } from "./pages/home/store/store-inventory/store-inventory.component";
import { StoreAlarmComponent }    from "./pages/home/store/store-alarm/store-alarm.component";

const routes:Routes = [
   {  path:"home", component: HomeComponent, data:{state:"home"}, children : [
   		{ path : "dashboard", component : HomeDashboardComponent, data:{state:"home-dashboard"}},
   		{ path : "store",     component : StoreComponent, data:{state:"store"}, children : [
              {path:"dashboard", component:StoreDashboardComponent, data:{state:"store-dashboard"}},
              {path:"inventory", component:StoreInventoryComponent, data:{state:"store-inventory"}},
              {path:"alarm",     component:StoreAlarmComponent     ,data:{state:"store-alarm"}},
              {path:"", redirectTo:"dashboard", pathMatch:"full"}
         ]},
         { path : "alarm",     component : AlarmComponent, data: {state:"alarm"}},
   		{ path : '', redirectTo: 'dashboard', pathMatch:'full'}
      ] 
   },
   { path :"ceo", component : CeoComponent, data:{state:"ceo"}},
   { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
	imports: [
	    CommonModule,
	    BrowserModule,
	    RouterModule.forRoot(routes)
	]
})

export class AppRouterModule {} 