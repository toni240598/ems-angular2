import { Component, OnInit, ViewChild } from '@angular/core';
import { Loopbackv2Service } from "../../../../shared/services/loopbackv2.service";
import { FormComponent } from "../../../../shared/components/form/form.component";
import { TableComponent } from "../../../../shared/components/table/table.component";

@Component({
  selector: 'app-setup-province',
  templateUrl: './setup-province.component.html',
  styleUrls: ['./setup-province.component.css']
})
export class SetupProvinceComponent implements OnInit {

  constructor(public rest:Loopbackv2Service){}

  table:any;
  form:any;

  @ViewChild(FormComponent) container;
  @ViewChild(TableComponent) respon;
  ngOnInit() {
  	this.rest.read("/api/setup/province").subscribe(result=>{
  		 this.table = result.table;
  	   this.form  = result.form;
    })
  }

  action(event){
     if(event.data!=undefined){
       event.data.type = "Province"
     }
     else {
        event.data = { type:"Province" };
     }
     this.container.openModal(event);
  }

  response(event){
     this.respon.response(event);
  }

}
