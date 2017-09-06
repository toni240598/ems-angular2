import { Component, OnInit } from '@angular/core';
import { Loopbackv2Service } from "../../../shared/services/loopbackv2.service";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  constructor(public rest:Loopbackv2Service){}
  backup:any;
  province:Array<any>;
  zone:Array<any>;
  branch:Array<any>;
  store:Array<any>;
  marker:Array<any>;
  center:any;
  id_province:number;
  id_zone:number;
  id_branch:number;
  id_store:number;
  
  ngOnInit() {
  	this.rest.read("/api/map").subscribe(result=>{
  		this.backup   = result;
  		this.province = result.filter.Province;
  		this.zone     = result.filter.Zone;
  		this.branch   = result.filter.Branch;
  		this.store    = result.filter.Store;
  		this.marker   = result.filter.Province;
  	})
  	this.center = { latitude:-0.789275, longitude:113.921327, zoom:5 };
  }

  refresh(){
  	    this.province = this.backup.filter.Province;
  		this.zone     = this.backup.filter.Zone;
  		this.branch   = this.backup.filter.Branch;
  		this.store    = this.backup.filter.Store;
  		this.id_branch = undefined; this.id_province = undefined;
  		this.id_store  = undefined; this.id_zone     = undefined;
  		this.center = { latitude:-0.789275, longitude:113.921327, zoom:5 };
  }


  setCenter(id,data){
  	let index;
  	for(var i in data){
  		if(data[i].id == id){
  			this.center = data[i];
  		}
  	}
  }

  action(event){
  	switch(event.type){
  		case "Province":
  			this.setProvince(event.id);
  			this.id_province = event.id;
  		break;
  		case "Zone":
  			this.setZone(event.id);
  			this.id_zone = event.id;
  		break;
  		case "Branch":
  			this.setBranch(event.id);
  			this.id_branch = event.id;
  		break;
  		case "Store":
  			this.setStore(event.id);
  			this.id_store = event.id;
  		break;
  	}
  }

  setProvince(id){
  	this.zone     = this.backup.filter.Zone;
	this.branch   = this.backup.filter.Branch;
	this.store    = this.backup.filter.Store;
  	this.id_zone   = undefined;
  	this.id_branch = undefined;
  	this.id_store  = undefined;
  	if(this.zone != undefined && this.zone.length!=0){
  		let temp = [];
  		for(var i in this.zone){
  			if(this.zone[i].id_parent == id){
  				temp.push(this.zone[i]);
  			}
  		}
  		this.zone = temp;
  		this.setCenter(id,this.province);
  		this.marker = this.zone;
  	}
  }

  setZone(id){
	this.branch   = this.backup.filter.Branch;
	this.store    = this.backup.filter.Store;
  	this.id_branch = undefined;
  	this.id_store  = undefined;
  	if(this.branch != undefined && this.branch.length!=0){
  		let temp = [];
  		for(var i in this.branch){
  			if(this.branch[i].id_parent == id){
  				temp.push(this.branch[i]);
  			}
  		}
  		this.branch = temp;
  		this.setCenter(id,this.zone);
  		this.marker = this.branch;
  	}
  }

  setBranch(id){
  	this.store = this.backup.filter.Store;
  	this.id_store = undefined;
  	if(this.store != undefined && this.store.length!=0){
  		let temp = [];
  		for(var i in this.store){
  			if(this.store[i].id_parent == id){
  				temp.push(this.store[i]);
  			}
  		}
  		this.store = temp;
  		this.setCenter(id,this.branch);
  		this.marker = this.store;
  	}
  }

  setStore(id){
  	 this.setCenter(id,this.store);
  	 this.marker = this.store;
  }

}
