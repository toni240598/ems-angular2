import { NgModule } from '@angular/core';

import { MaterialModule } from "../tools/materials";
import { SharedModule } from "../shared/shared.module";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragulaModule } from 'ng2-dragula/ng2-dragula';


import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemplateModule }  from "../template/template.module";
import { AlarmComponent } from './home/alarm/alarm.component';
import { RouterModule } from "@angular/router";
import { StoreComponent } from './home/store/store.component';
import { StoreDashboardComponent } from './home/store/store-dashboard/store-dashboard.component';
import { StoreInventoryComponent } from './home/store/store-inventory/store-inventory.component';
import { StoreAlarmComponent } from './home/store/store-alarm/store-alarm.component';
import { CeoComponent } from './ceo/ceo.component';
import { SetupComponent } from './ceo/setup/setup.component';
import { CeoDashboardComponent } from './ceo/ceo-dashboard/ceo-dashboard.component'
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { MapsViewComponent } from './ceo/maps-view/maps-view.component';
import { MapsFilterComponent } from './ceo/maps-filter/maps-filter.component';
import { SetupProvinceComponent } from './ceo/setup/setup-province/setup-province.component';
import { SetupZoneComponent } from './ceo/setup/setup-zone/setup-zone.component';
import { SetupBranchComponent } from './ceo/setup/setup-branch/setup-branch.component';
import { SetupStoreComponent } from './ceo/setup/setup-store/setup-store.component';
import { StoreDetailComponent } from './home/store/store-detail/store-detail.component';


@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    FlexLayoutModule,
    DragulaModule
  ],
  declarations: [
    HomeComponent, 
    AlarmComponent, 
    StoreComponent, 
    StoreDashboardComponent, 
    StoreInventoryComponent, 
    StoreAlarmComponent, 
    CeoComponent, 
    SetupComponent, 
    CeoDashboardComponent, 
    HomeDashboardComponent, 
    MapsViewComponent, 
    MapsFilterComponent, 
    SetupProvinceComponent, 
    SetupZoneComponent, 
    SetupBranchComponent, 
    SetupStoreComponent,
    StoreDetailComponent
  ]
})
export class PagesModule { }
