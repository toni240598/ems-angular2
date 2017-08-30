import { Injectable } from '@angular/core';
import { LocalStorage } from "ng2-webstorage";

@Injectable()
export class HistoryService {

  @LocalStorage("location") public location;
  @LocalStorage("groupStore") public groupStore;
  constructor() { }
  
  setGroup(store){
        this.groupStore = store;
 
  }

  //location == {latitude:"100",longitude:"100"} 
  setData(location){
  	this.location = location;
  }

}
