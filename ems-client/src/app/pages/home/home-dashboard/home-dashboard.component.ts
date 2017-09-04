import { Component, OnInit } from '@angular/core';
import { HistoryService } from "../../../shared/services/history.service";
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { LoopbackService } from "../../../shared/services/loopback.service";

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styles: []
  // animations: [animations()],
  // host: {'[@routerTransition]': ''}
})
export class HomeDashboardComponent implements OnInit {

  
  // @Input() store:Array<any>;
  public dataStore   = [];
  public dataCookies = [];
  public store       : Array<any> = [];
  constructor(
    private dragulaService: DragulaService,
    private history: HistoryService,
    public  loopback: LoopbackService){

    dragulaService.dropModel.subscribe((value) => {
      	this.onDropModel(value.slice(1));
    });

  }
  private onDropModel(args) {
    
    let [el, target, source] = args;
     
  }

  addView(select) {
    let cookies = {};
      for(var i in this.store){

        if(this.store[i].id == select.id){
            cookies = {id:this.store[i].id, type:"watthour", view:["temperature"]};
            this.dataCookies.push(cookies)
            this.history.setGroup(this.dataCookies)

            this.getWidget(this.store[i], cookies)
            this.store.splice(parseInt(i), 1)
        }
      }
  }

  ngOnInit() {
    this.loopback.getService("dashboard",{}).subscribe(result=>{
      this.store = result;

    if (this.history.groupStore == null) {
       this.dataCookies = []
    }
    else{
      this.dataCookies = this.history.groupStore;
    }

    console.log(this.store)
      if (this.dataCookies.length != 0) {
          for(var i in this.dataCookies){
              for(var j in this.store){
                 if(this.store[j].id == this.dataCookies[i].id){
                    this.getWidget(this.store[j], this.dataCookies[i])
                    this.store.splice(parseInt(j), 1)
                 }
              }
          }    
      }
    })
  }

  getWidget(store, cookies){
    let copyObject = {};
    let array =  Object.keys(store.information);

      for(var i in array){
        let obj = cookies.view[i]

         if (obj != undefined) {
            copyObject[obj] = store.information[obj];
         }
      }
      
      if (store.id == cookies.id) {
          store.information = copyObject;
          this.dataStore.push(store)
      }
  }


  myAction(event) {
    console.log(event)
  }

}
