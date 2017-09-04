import { Component, OnInit, ViewChild } from '@angular/core';
import { Loopbackv2Service } from "../../../../shared/services/loopbackv2.service";
import { FormComponent } from "../../../../shared/components/form/form.component";
import { TableComponent } from "../../../../shared/components/table/table.component";


@Component({
  selector: 'app-setup-branch',
  templateUrl: './setup-branch.component.html',
  styleUrls: ['./setup-branch.component.css']
})
export class SetupBranchComponent implements OnInit {

  constructor(public rest:Loopbackv2Service){}

  table:any;
  form:any;

  @ViewChild(FormComponent) container;
  @ViewChild(TableComponent) respon;
  ngOnInit() {
    this.rest.read("/api/setup/branch").subscribe(result=>{
       this.table = result.table;
       this.form  = result.form;
    })
  }

  action(event){
     if(event.data!=undefined){
       event.data.type = "Branch"
     }
     else {
        event.data = { type:"Branch" };
     }
     this.container.openModal(event);
  }

  response(event){
     this.respon.response(event);
  }

}
