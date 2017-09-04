import { Component, OnInit } from '@angular/core';
import { LoopbackService } from "../../../shared/services/loopback.service";


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  constructor(public loopback:LoopbackService){}

  table:Array<any>;
  ngOnInit() {
  	this.loopback.getService("alarm",{}).subscribe(result=>{
  		this.table = result;
  	});
  }

  searchDate(event){
  	console.log(event);
  }

}
