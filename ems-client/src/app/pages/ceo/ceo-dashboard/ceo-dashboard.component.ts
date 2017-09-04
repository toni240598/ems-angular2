import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ceo-dashboard',
  template: `
        <div align="center" [ngStyle]="{'margin-bottom':30+'px', 'font-weight':'bold',
        'margin-top':19+'px', 'font-size':19+'px'}">ALL STORE</div>

        <div class="col-lg-3 col-md-3 col-sm-6" *ngFor="let widget of widgetsAll">
            <app-widget [config]="widget" [template]="'default'"></app-widget>
        </div>

        <div *ngFor="let label of widgetsProvince" >
             <div class="col-md-12 col-lg-12 col-xs-12"[ngStyle]="{'text-align':'center', 'font-size':19+'px', 
            'font-weight':'bold', 'margin-top':18+'px', 'margin-bottom':38+'px'}">{{label.province}}</div>

            <div class="col-lg-3 col-md-3 col-sm-6" *ngFor="let province of label.data">
                <app-widget [config]="province" [template]="'default'"></app-widget>
            </div>
        </div>     
        
        <div class="col-md-12 col-lg-12 col-xs-12" [ngStyle]="{'text-align':'left', 'font-size':19+'px', 
        'font-weight':'bold', 'margin-top':18+'px', 'margin-bottom':30+'px', 'margin-right':20+'px'}">
          Total Exiting Alarm
        </div>  
        
        <div style="margin-bottom:100px">
	        <div class="col-lg-3 col-md-3 col-sm-6" *ngFor="let alarm of widgetsAlarm">
	            <app-widget [config]="alarm" [template]="'default'"></app-widget>
	        </div>
        </div>

  `,
  styles: []
})
export class CeoDashboardComponent implements OnInit {
  constructor() { }
  widgetsAll = [
    {label:"Total Store",category:"default",value:100},
    {label:"Total Spacious",category:"spacious",value:6000},
    {label:"This Day Total Consumption",category:"watthour",value:1000000},
    {label:"Current Energy Consumption",category:"watt",value:827324},
    {label:"Average Power",category:"performance",value:1223, condition:'average'},
    {label:"Best Power",category:"performance",value:1000, condition:'max'},
    {label:"Worst Power",category:"performance",value:9000, condition:'min'},
    {label:"Total Alarm",category:"default",value:6040}
  ]

  widgetsProvince = [
    {province :  "DKI JAKARTA", data:[
        {label:"Total Store", province : "DKI JAKARTA", category:"default",value:100,connection : "disconnect"},
        {label:"Total Spacious",category:"spacious",value:6000,connection:"connect"},
        {label:"This Day Total Consumption",category:"watthour",value:1000000,connection:"connect"},
        {label:"Current Energy Consumption",category:"watt",value:827324,connection:"connect"},
        {label:"Average Power",category:"performance",value:14,connection:"connect", condition:'average'},
        {label:"Best Power",category:"performance",value:0,connection:"connect", condition:'min'},
        {label:"Worst Power",category:"performance",value:0,connection:"connect", condition:'max'},
        {label:"Total Alarm",category:"default",value:0,connection:"connect"}
    ] },

     {province :  "JAWA TIMUR", data:[
        {label:"Total Store", province : "DKI JAKARTA", category:"default",value:100,connection : "disconnect"},
        {label:"Total Spacious",category:"spacious",value:6000,connection:"connect"},
        {label:"This Day Total Consumption",category:"watthour",value:1000000,connection:"connect"},
        {label:"Current Energy Consumption",category:"watt",value:827324,connection:"connect"},
        {label:"Average Power",category:"performance",value:14,connection:"connect", condition:'average'},
        {label:"Best Power",category:"performance",value:0,connection:"connect", condition:'min'},
        {label:"Worst Power",category:"performance",value:0,connection:"connect", condition:'max'},
        {label:"Total Alarm",category:"default",value:0,connection:"connect"}
    ] },
     {province :  "JAWA BARAT", data:[
        {label:"Total Store", province : "DKI JAKARTA", category:"default",value:100,connection : "disconnect"},
        {label:"Total Spacious",category:"spacious",value:6000,connection:"connect"},
        {label:"This Day Total Consumption",category:"watthour",value:1000000,connection:"connect"},
        {label:"Current Energy Consumption",category:"watt",value:827324,connection:"connect"},
        {label:"Average Power",category:"performance",value:14,connection:"connect", condition:'average'},
        {label:"Best Power",category:"performance",value:0,connection:"connect", condition:'min'},
        {label:"Worst Power",category:"performance",value:0,connection:"connect", condition:'max'},
        {label:"Total Alarm",category:"default",value:0,connection:"connect"}
    ] }
  ]

   widgetsAlarm = [
    {label:"Critical",category:"default",value:100,connection : "disconnect"},
    {label:"Major",category:"default",value:6000,connection:"connect"},
    {label:"Minor",category:"default",value:10,connection:"connect"},
    {label:"Warning",category:"default",value:12,connection:"connect"},
  ]
  ngOnInit() {
  }
}