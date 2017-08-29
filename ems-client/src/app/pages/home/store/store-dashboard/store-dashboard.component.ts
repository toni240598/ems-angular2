import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styles: []
})
export class StoreDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  space        : string = 'chart';
  buildingData : Object;
  area(event){
     this.space = event;
  }
  building(event){
     this.buildingData = event;
  }
  
    items:Array<any> = [
	    // { id:2, left:94,   top:150,     name:'',           temp_material:12, temp_setting:30, temp_air:27,    status:'alarm',   styles:'door2',   position:'right',  lifetime:12 },
	    // { id:5, left:83,  top:55,     name:'AC3',        temp_material:12, temp_setting:30, temp_air:27,    status:'major',   styles:'ac',      position:'bottom',lifetime:12 },
	    // { id:6, left:71,  top:120,    name:'AC4',        temp_material:12, temp_setting:30, temp_air:27,    status:'off',     styles:'ac',      position:'left',  lifetime:12 },
	    // { id:8, left:3,   top:55,     name:'Chiller1',   temp_material:12, temp_setting:30, temp_air:27,    status:'normal',  styles:'chiller', position:'',      lifetime:12 },
	    { id:7, left:50,  top:20,      name:'Pump1',      temp_material:12, temp_setting:30, temp_air:27,    status:'normal',  styles:'pump',    position:'', lifetime:12 },
	    // { id:1, left:20,   top:130,    name:'temperature',temp_material:88, temp_setting:12, temp_air:22,    status:'normal',  styles:'temperature',  position:'', lifetime:12 }
	]
}
