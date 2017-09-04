import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(public location:Location){}

  ngOnInit() {
  	this.activeNav(this.location.path());
  }

  routeLinks:Array<any>= [
      {label: 'Province', link: 'province'},
      {label: 'Zone',     link: 'zone'},
      {label: "Branch",   link: "branch"},
      {label: "Store",    link: "store"}
  ];
  activeLinkIndex = 0;

  activeNav(path:string){
    let paths = path.split("/");
    let config = { province : 0, zone : 1, branch:2, store:3 }
    this.activeLinkIndex = config[ paths[3] ];
  }

}
