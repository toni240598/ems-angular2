import { Component, OnInit, ViewChild } from '@angular/core';
import { LoopbackService } from '../../../../shared/services/loopback.service';
import { HistoryService }  from "../../../../shared/services/history.service";
import { FormComponent } from "../../../../shared/components/form/form.component";
import { TableComponent } from "../../../../shared/components/table/table.component";

@Component({
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styles: []
})
export class StoreInventoryComponent implements OnInit {

  constructor(public loopback:LoopbackService,public history:HistoryService){}
  
  table:Array<any>;
  form:any;
  ngOnInit() {
  	this.loopback.getService("store-inventory",{id:4})
    .subscribe(result=>{
     	this.table = result.table;
     	this.form  = result.form;
    })  	
  }

  @ViewChild(FormComponent) formContainer;
  @ViewChild(TableComponent) tableContainer;
  
  userAction(event){
    if(event.action=="create"){
       event.data  = {top:20,left:20,id_store:1};
    }
  	this.formContainer.openModal(event);
  }

  onResponse(event){
     this.tableContainer.response(event)
  }

}
