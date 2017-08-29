import { NgModule } from '@angular/core';

import {MaterialModule } from "../tools/materials";
import {SharedModule } from "../shared/shared.module";

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
import { CeoDashboardComponent } from './ceo/ceo-dashboard/ceo-dashboard.component';
import { MapsComponent } from './ceo/maps/maps.component';
import { ProvinceComponent } from './ceo/setup/province/province.component';
import { ZoneComponent } from './ceo/setup/zone/zone.component';
import { BranchComponent } from './ceo/setup/branch/branch.component';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule,
    MaterialModule,
    SharedModule
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
    MapsComponent, 
    ProvinceComponent, 
    ZoneComponent, 
    BranchComponent, 
    HomeDashboardComponent
  ]
})
export class PagesModule { }
