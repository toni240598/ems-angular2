import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard',    class: '' },
    { path: 'store',     title: "Store",      icon: 'store',        class: '' },
    { path: 'alarm',     title: 'Alarm',      icon:'notifications', class:''  },
    { path: 'map',       title: 'Map',        icon: 'place',        class:'active-pro'}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public location:Location){}

  ngOnInit() {
    // $.getScript('../../assets/js/sidebar-moving-tab.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  	this.activeNav(this.location.path());
  }
  
  activeNav(path:string){
    let paths = path.split("/");
    for(var i in this.menuItems){
      if(paths[1]=="home" && this.menuItems[i].path==paths[2]){
        this.menuItems[i].class = " active"; 
      }
    }
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
