import { Component, OnInit } from '@angular/core';
import { LoopbackService } from '../../../../shared/services/loopback.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-store-alarm',
  templateUrl: './store-alarm.component.html',
  styles: []
})
export class StoreAlarmComponent implements OnInit {

  constructor(private loopback:LoopbackService, private router:Router) { }

  table :Array<any>;
  widget:Array<any>;
  ngOnInit(){
  	this.loopback.getService("store-alarm",{}).subscribe(result=>{
  		 this.table  = result.table;
  	   this.widget = result.widget;
    })
  }

  userAction(event){
    if(event.action == "view"){
      this.router.navigate(["/home/store/detail/:id/:type",{id:event.data.id,type:"alarm"}
      ]);
    }
  }

}
