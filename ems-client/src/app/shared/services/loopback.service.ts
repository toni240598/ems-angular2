import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class LoopbackService {

  constructor(private http:Http) { }

  dataSet = {
    location    : { type:"GET",  url:"/api/location_store"},
    formCreate : { type:"POST", url:"/api/apps/service"},
    store      : { type:"GET",  url:"/api/store/", params:true},
    ProvinceService : {type:"POST", url:"/api/apps/location"},
    ZoneService : {type:"POST", url:"/api/apps/location"},
    BranchService : {type:"POST", url:"/api/apps/location"},
    StoreService : {type:"POST", url:"/api/apps/location"},
    'store-dashboard' : { type:"GET", url:"/api/store/dashboard",params:true     },
    'store-dashboard/chart' :{type :"GET", url : "/api/store/dashboard/chart", params:true },             
    'store-alarm'      : { type:"GET" , url:"/api/store/alarm"  },
    'store-inventory'  : { type:"GET", url:"/api/store/inventory", params:true},
    alarm              : { type:"GET" , url:"/api/alarm"        },
    dashboard          : { type:"GET",  url:"/api/dashboard"      },
    inventoryService   : { type:"POST", url:"/api/apps/inventory" }
  }

  getService(category, data){
    let url= this.dataSet[category].url;
    if (this.dataSet[category].type == "GET"){
        if(this.dataSet[category].params==undefined){
          return this.http.get(url).map(res => res.json());
        } 
        else {
          url = this.setParams(category,url,data);
          return this.http.get(url).map(res => res.json());  
        }
    }
    else{
      return this.http.post(url, data).map(res => res.json());
    }
  }

  setParams(category,url,data){
    let config = {
       'store-dashboard/chart' : ["categoryChart","typeChart"],
       'store-dashboard'       :  ["latitude","longitude"],
       'store-inventory'       :  ["id"]   
    }
    let metadata = config[category];
    for(var i in metadata){
       url += "/";
       url += data[ metadata[i] ].toString();
    }
    return url;
  } 

}
