import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./pages/home/home.component";
import { HomeDashboardComponent  } from "./pages/home/home-dashboard/home-dashboard.component";
import { StoreComponent } from "./pages/home/store/store.component";
import { AlarmComponent } from "./pages/home/alarm/alarm.component";
import { StoreDashboardComponent } from "./pages/home/store/store-dashboard/store-dashboard.component";
import { StoreInventoryComponent } from "./pages/home/store/store-inventory/store-inventory.component";
import { StoreAlarmComponent }    from "./pages/home/store/store-alarm/store-alarm.component";
import { StoreDetailComponent }    from "./pages/home/store/store-detail/store-detail.component";
import { ResolveService } from "./pages/home/store/store-detail/resolve.service";


import { CeoComponent } from "./pages/ceo/ceo.component";
import { CeoDashboardComponent } from "./pages/ceo/ceo-dashboard/ceo-dashboard.component";
import { MapsViewComponent } from "./pages/ceo/maps-view/maps-view.component";
import { SetupComponent } from "./pages/ceo/setup/setup.component";
import { SetupProvinceComponent  } from "./pages/ceo/setup/setup-province/setup-province.component";
import { SetupZoneComponent  } from "./pages/ceo/setup/setup-zone/setup-zone.component";
import { SetupBranchComponent  } from "./pages/ceo/setup/setup-branch/setup-branch.component";
import { SetupStoreComponent  } from "./pages/ceo/setup/setup-store/setup-store.component";




const routes:Routes = [
   {  path:"home", component: HomeComponent, data:{state:"home"}, children : [
   		{ path : "dashboard", component : HomeDashboardComponent, data:{state:"home-dashboard"}},
   		{ path : "store",     component : StoreComponent, data:{state:"store"}, children : [
              {path:"dashboard", component:StoreDashboardComponent },
              {path:"inventory", component:StoreInventoryComponent },
              {path:"alarm",     component:StoreAlarmComponent     },
               {path:"detail/:id/:type",    component:StoreDetailComponent, data:{state:"store-detail"}, 
               resolve : { GET: ResolveService }},
              {path:"", redirectTo:"dashboard", pathMatch:"full"}
         ]},
      { path : "alarm",     component : AlarmComponent, data: {state:"alarm"}},
   		{ path : '', redirectTo: 'dashboard', pathMatch:'full'}
      ] 
   },
   { path :"ceo", component : CeoComponent, data:{state:"ceo"},children : [
        {path : "dashboard", component : CeoDashboardComponent, data:{state:"ceo-dashboard"} },
        {path : "maps",      component : MapsViewComponent , data:{state:"maps-view"}},
        {path : "setup",     component : SetupComponent, data:{state:"setup"}, children : [
              {path : "province", component : SetupProvinceComponent },
              {path : "zone",     component : SetupZoneComponent     },
              {path : "branch",   component : SetupBranchComponent   },
              {path : "store",    component : SetupStoreComponent    },
              {path:"", redirectTo:"province", pathMatch:"full"}
        ]},
        {path:"", redirectTo:"maps", pathMatch:"full"}
    ]},
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