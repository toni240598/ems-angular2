import { Component, OnInit } from '@angular/core';
import { LoopbackService } from "../../../../shared/services/loopback.service";
import { HistoryService } from "../../../../shared/services/history.service";

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styles: ['']
})
export class StoreDashboardComponent implements OnInit {

  constructor(public loopback:LoopbackService,public history:HistoryService){}
  
 
  watthour:any;
  widgets:Array<any>;
  items:Array<any>;
  watt:Array<any>;

  labelChart:any;
  ngOnInit(){
     this.loopback.getService("store-dashboard",{
       latitude: this.history.location.latitude,
       longitude : this.history.location.longitude
     }).subscribe(result=>{ 
        this.widgets  = result.widget;
        this.items    = result.item;
        this.watthour = result.watthour;
        this.watt     = result.watt;
     })
  }

  setBarChart(value){
    this.loopback.getService("store-dashboard/chart",
      {categoryChart:"watthour",typeChart:value})
    .subscribe(result=>{
       this.watthour = result;
    })
  }

   
  
  space        : string = 'chart';
  buildingData : Object;
  area(event){
     this.space = event;
  }
  building(event){
     this.buildingData = event;
  }


}
