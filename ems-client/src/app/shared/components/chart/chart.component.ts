import { Component, Input, Output, OnChanges,EventEmitter, ViewChild } from '@angular/core';
import { bar_chart } from "./bar_chart.config";
import { FieldPipe } from "../../pipes/field.pipe";
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { line_chart } from "./line_chart.config";
import { BaseChartDirective} from 'ng2-charts/ng2-charts';
import { Chart } from 'angular-highcharts';
import * as Highcharts from "highcharts";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls : ["./chart.component.css"]
})
export class ChartComponent implements OnChanges {
  
  constructor(){
  }

  @Input() type:string;
  @Input() label:any;
  @Input() dataset:any;
  @Input() maxCurrent:Array<any>;
  @Output() typeChart:EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;


  config:any = { bar_chart : bar_chart, line_chart : line_chart };
  chartset:any;
  dateNow:any;
  typeset = ["monthly","weekly","daily"];
  icon:string;

  ngOnChanges(){
    this.setLineChart();
    this.setBarChart();
  }

  

  


  //BAR Chart
  setBarChart(){
    if(this.type=="bar_chart"){
       this.config[ this.type ].dataset = this.setDataset();     
       this.config[ this.type ].label   = this.label;
       this.chartset = this.config[ this.type];
       if (this.chart && this.chart.chart && this.chart.chart.config) {
            this.chart.chart.config.data.labels = this.label;
            this.chart.chart.update();
       }
       this.icon = this.chartset.icon; 
    }
  }

  changeType(event){
    this.typeChart.emit(event);
  }


 
  setDataset(){
     let result:Array<any> = [];
     for(var i in this.dataset){
       result.push({
          label : new CapitalizePipe().transform(i),
          data  : this.dataset[i],
          borderWidth : 2
       })  
     }
     return result;     
  }







  setLineChart(){
      if(this.type=="line_chart"){
          this.icon = "fa fa-line-chart";
          line_chart.series = this.renderLineChart();
          this.renderMaxcurrent(line_chart);             
          this.chartset =  new Chart(line_chart);
      }
  }

  renderMaxcurrent(config){
    if(this.maxCurrent!=undefined){
      console.log(config)  
    }
  }

  renderLineChart(){
     let series = [];
     let config:any  = {
        ac : {
           icon : "url(./assets/img/iconChart/ac.png)",
           yAxis : 0,
           type_item : "equipment"
        },
        temperature :{
           icon :  "url(./assets/img/iconChart/temperature.png)",
           yAxis : 1,
           type_item : "temperature"
        },
        pump :{
           icon :"url(./assets/img/iconChart/pump.png)",
           yAxis : 0,
           type_item : "equipment"
        },
        chiller :{
           icon : "url(./assets/img/iconChart/chiller.png)",
           yAxis : 0,
           type_item : "equipment"
        },
        humidity : {
           icon : "url(./assets/img/iconChart/humidity.png)",
           yAxis : 1,
           type_item : "humidity"
        },
        alarm : {
           icon  : "",
           yAxis : 0,
           type_item : "alarm"
        }
     };
     let result:any;
     for(let set of this.dataset){

         result = {
            name   : set.label,
            data   : set.data, 
            yAxis : config[set.category].yAxis
         }
         if(set.category == "alarm"){
           result.showInLegend = false;
           result.type = "scatter";
         }

         for(var i in result.data){
            result.data[i].type_item = config[set.category].type_item;
            result.data[i].icon      = config[set.category].icon;
           
            if(set.category == "alarm"){
               let alarm = "url(./assets/img/iconChart/alarm-"+result.data[i].saverity+".png)";
               result.data[i].marker = {
                  symbol : alarm
               }
               result.data[i].icon      = alarm;
            }
         }
         series.push(result);
     }
     return series;
  }

  
}