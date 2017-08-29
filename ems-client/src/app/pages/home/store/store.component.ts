import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  animations : [],
  styles: []
})
export class StoreComponent implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  	this.activeNav(this.location.path());
  }
  
  getState(outlet) {
     return outlet.activatedRouteData.state;
  }

  routeLinks:Array<any>= [
      {label: 'Dashboard', link: 'dashboard'},
      {label: 'Inventory', link: 'inventory'},
      {label: "Alarm",     link: "alarm"}
  ];
  activeLinkIndex = 0;

  activeNav(path:string){
    let paths = path.split("/");
    let config = { dashboard : 0, inventory : 1, alarm:2}
    this.activeLinkIndex = config[ paths[3] ];
  }
}
