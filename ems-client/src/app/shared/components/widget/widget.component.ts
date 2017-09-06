import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GaugeLabel, GaugeSegment } from "ng-gauge";

/*
  fungsi dari app widget adalah untuk membuat semua view widget yang akan di proses oleh developer
  adapun jenis widget yang digunakan untuk sementara sekarang adalah widget default, widget store, 
  widget dashboard 
*/


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ["./widget.component.css"]
})
export class WidgetComponent implements OnInit {

  constructor() { }
  @Input() label:string;
  /*
    input template ini untuk menentukan jenis widget yang akan digunakan. dalam kasus untuk widget 
    default input ini tidak perlu di disikan. namun pada kasus lain harus diisi seperti pada contoh 
    
    ==> widget store 
     <div class="col-md-3">  <-- Grid
         <app-widget [template]="'store'"></app-widget>
     </div>
    
    ==> widget dashboard
    <div class="col-md-3"> <-- grid
         </app-widget [template]="'dashboard'"></app-widget>
    </div>

    ==> widget default
    <div class="col-md-3"> <-- grid
         </app-widget></app-widget>
    </div>

    *N.B developer harus menentukan sendiri grid yang akan digunakan pada page masing masing

  */
  @Input() template:any;
  /*
    inputan config ini digunakan untuk menentukan tampilan dari masing masing widget. inputan config 
    ini berupa data json. dan property dari inputan disesuaikan dengan jenis widget yang digunakan
    berikut masing masing penjelasannya. *buat dulu data yang akan diinputkan terlebih dahulu 
    
    ==>   Widget default
    myWidget = {
      label:"Total Energy",
      category:"watt",
      value:100
    }
    **** Keterangan ****
    1.) property label digunakan untuk title pada widget
    2.) property value digunakan untuk menentukan nilai dari widget type nya integer. nanti output dari
        widget akan otomatis dikonversi misalkan 1000 W menjadi 1,0 KW. sedangkan value yang diinputkan
        tergantung dari category yang dipilih.
    3.) property category merupakan inputan untuk menentukan jenis widget default yang akan digunakan
        sedangkan jenis jenis nya adalah sebagai berikut. sekaligus value yang harus disisikan
        
        ================================================
        *  category          *  value                  * 
        ================================================
        *  watt              *  1000                   *
        *  watthour          *  1000                   *
        *  default           *  1000                   *
        *  performance       *  1000                   *
        *  spacious          *  1000                   *    
        *  temperature       *  { min : 10, max : 10 } *
        *  humidity          *  { min : 10, max : 10 } *
        ================================================
        
        *N.B khusus performance harus input kan condition.seperti berikut 
          // myWidget = { label:"Worst energy", category:"watt", value:100, condition : 'max' }
         ada tiga kondisi antara lain (average,min,max),dan untuk spacious nilai awal adalah m2 jadi jika 
         input 1000 dianggap 1000 m2


     



     ==> widget store
     widget store ini digunakan pada widget pada maps. input config yang harus di inputkan antara lain
     
     myWidget = {
        id : 1,
        url : 'image.png',
        address:"jl ahmad yani rt 37 rw 09",
        label : "pondok pinang 3"
     }
     <app-widget [template]="'store'" [config]="myWidget">  

     ==> widget dashboard
     widget dashboard ini digunakan dihalam dashboard. untuk inputnya sendiri diperlukan data sebagai 
     berikut :

     id => id dari widget ini
     gauge => nilai yang akan print pada gauge, yang terdiri dari 3 property yang harus didisikan
              nilai nya antara 0 - 100 dengan aturan warna 
                 * 0 - 70 hijau 
                 * 70 - 90 kuning
                 * 90 - 100 merah
              unit atau satuan nya kemudian value nya. jadi kalau di inputkan harus berbentuk seperti ini
              gauge = { unit : 'KWH', value : 100, value_gauge : 100 }

     label => title yang akan di print pada widget
     information => value nya json tergantung data yang di inginkan user. berikut beberapa list 
                    yang sudah dibuat di fitur widget dashboard
         * temperature   => {temperature:10}
         * alarm         => {alarm:10}
         * maintenance   => {maintenance:2}
     *N.B untuk tambahan bisa di request 
     kesimpulannya untuk memeanggil contoh widget dashboard berikut caranya
     myWidget = {
        id          : 1, 
        label       : "pondok pinang 3", 
        gauge       : { value : '99,9', unit : 'KWH', value_gauge: 100 },
        information : { maintenance : 10, alarm : 10, temperature : 90 }
     }

     <app-widget [template]="'dashboard'" [config]="myWidget"></app-widget>


    sedangkan cara untuk menginputkan data config ke koponen adalah sebagai berikut
    <app-widget [config]="myConfig">
  */
  @Input() config;
  /*
    output action ini akan mengoutput data apabila ada event click dari user misalnya 
    edit remove view untuk menerima datanya berikut caranya
    <app-widget [template]="'store'" (action)="myAction($event)"></app-widget>
  */
  @Output() action:EventEmitter<any> = new EventEmitter<any>();
    

  
 

  metadata:Object= {
  	watthour    : { type : "single",  unitClass : "unit", icon : "fa fa-bar-chart"},
  	watt        : { type : "single",  unitClass : "unit", icon : "fa fa-bolt" },
  	temperature : { type : "double",  unitClass : "unit",icon : "fa fa-thermometer-full"},
  	humidity    : { type : "double",  unitClass : "unit",icon : "fa fa-tint" },
    default     : { type : "single",  unitClass : "unit",icon : "fa fa-tag" },
    spacious    : { type : "single",  unitClass : "unit",icon : "fa fa-institution"},
    performance : { type : "single",  unitClass : "unit-small",icon : "fa fa-line-chart"}
  };

  icon:string;
  // label:string;
  unit:string;
  value:any;	
  type:string;
  unitClass:string;
  titleClass:string="";
  url:string;  
  id:number;
  address:string;
  information:Array<any>;
  gauge:any;


  

  ngOnInit() {
    if(this.template == 'default'){
    	this.type       = this.metadata[ this.config.category ].type;
    	this.icon       = this.metadata[ this.config.category ].icon;
      this.unitClass  = this.metadata[ this.config.category ].unitClass;
      this.conversionValue(this.config.value,this.config.category);
      this.performingCondition(this.config);
    }
    else if(this.template=='store') {
      this.setStore();
    }
    else {
      this.setDashboard();
    }
  }


  sendAction(type,data){
    this.action.emit({action:type,data:data});
  }

  setDashboard(){
    this.id          = this.config.id;
    this.label       = this.config.label;
    this.information = this.generateInformation(this.config.information);
    this.gauge       = this.generateGauge(this.config.gauge);
  }

  generateGauge(config){
    function setColor(value){
      return (value < 70 ? '#5cb85c' : value < 90 ? '#f0ad4e' : '#cb3935');
    }
    let setting = { bgRadius: 60, bgColor: "#5bc0de", rounded: false, reverse: false,
      animationSecs: 1,
      labels: [ 
        new GaugeLabel({ color: "#2e6da4", text: config.unit, x: 0, y: 25, fontSize: '1.5em'}),
        new GaugeLabel({ color: "#2e6da4", text: config.value, x: 0, y: 0, fontSize: '2.5em'})
      ],
      segments: [
        new GaugeSegment({value:config.value_gauge,color:setColor(config.value_gauge),borderWidth:20})
      ]
    }
    return setting;
  }

  generateInformation(config){
    let keys   = Object.keys(config);
    let result = [];
    let category = {
      alarm : {
         style : "btn-danger", icon : "fa fa-bell", value : function(value){
             return "Total alarms "+value;
         }
      },
      maintenance : {
         style : "btn-warning", icon : "fa fa-tasks", value : function(value){
             return value+" Devices need maintenance";
         }
      },
      temperature : {
         style : "btn-info", icon : "fa fa-thermometer-full", value : function(value){
             return "Room temperature "+value+"\u2103";
         }
      }
    };
    let j:number = 0;
    for(var i in config){
      result.push({
         style : category[ keys[j] ].style,
         icon  : category[ keys[j] ].icon,
         value : category[ keys[j] ].value(config[i])
      })
      j++;
    }
    return result;
  }


  setStore(){
      // if(this.url==undefined || this.url == ""){
      //    this.url = '../assets/img/none.jpg'; 
      // }
      // else {
      //   this.url = "../assets/img/"+this.url;
      // }
      // this.address = this.config.address;
      // this.id      = this.config.id;
      // this.label   = this.config.label;
  }


  performingCondition(config){
      if(config.category == "performance"){
         this.titleClass  = config.condition;     
      }
  }

  conversionValue(value:any,category:string){	
  	let allUnit = {
        watt : "W", 
        temperature : "°C", 
        humidity:"%", 
        watthour:"WH", 
        default:"", 
        spacious:"M\u00B2",
        performance : "WH/M\u00B2" 
    }
  	this.unit = allUnit[ category ];
  	if(category!="humidity" && category!="temperature"){
      		if(category!="spacious"){
              if(value<1000){
          			this.value = value.toFixed(0);
          		} 
          		else if(value>=1000 && value<1000000){
          			value /= 1000;
          			this.unit = "K"+this.unit;
          			this.value = value.toFixed(1);
          		}
          		else {
          			value /= 1000000;
          			this.unit = "M"+this.unit;
          			this.value = value.toFixed(1);
          		}		
          }
          else {
              if(value<100){
                 this.value = value.toFixed(0);
              }
              else if(value>=100 && value<10000){
                value /= 100;
                this.unit  = "Da"+this.unit;
                this.value = value.toFixed(1);
              }
              else if(value>=10000 && value<1000000){
                value /= 10000;
                this.unit  = "H"+this.unit;
                this.value = value.toFixed(1);
              }
              else {
                value /= 1000000;
                this.unit  = "K"+this.unit;
                this.value = value.toFixed(1);
              }
          }
		      this.value = this.value.split(".").join(",");
  	}
  	else {
  		this.value = { min : value.min.toFixed(0), max:value.max.toFixed(0) };
  	}
  }

}
