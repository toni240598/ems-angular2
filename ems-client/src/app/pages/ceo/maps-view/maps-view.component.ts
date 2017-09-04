import { Component, OnInit } from '@angular/core';
import { LoopbackService } from "../../../shared/services/loopback.service";

@Component({
  selector: 'app-maps-view',
  templateUrl: './maps-view.component.html',
  styleUrls: ['./maps-view.component.css']
})
export class MapsViewComponent implements OnInit {

  constructor(public loopback:LoopbackService) { }

  markerZone:any;
  marker:any;
  Province:Array<any> = [];
  Zone:Array<any> = [];
  Branch:Array<any> = [];
  Store:Array<any> = [];
  Alarm:Array<any> = [];

  ngOnInit() {
    this.loopback.getService("location",{}).subscribe(res => {
      console.log(res);
      this.Province = res.Province;
      this.Zone = res.Zone;
      this.Branch =  res.Branch;
      this.Store = res.Store;
    })
    this.setAlarm();
  }

  setAlarm (){
    this.Alarm = this.Alarms;;
  }

  OutputZone (entry){
    this.markerZone = entry;
  }

  getMarker (entry){
    this.marker = entry;
  }

  public Alarms = [
    // {
    //   id : 1,
    //   id_store : 1,
    //   status : 'warning'
    // }
  ]
}
