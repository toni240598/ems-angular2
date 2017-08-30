import { Component, TemplateRef, ViewChild, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { LoopbackService } from "../../services/loopback.service";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector    : 'app-form',
  templateUrl : `./form.component.html`,
  styles: []
})
export class FormComponent {

  constructor(
     private modalService: BsModalService, 
     public loopback:LoopbackService,
     public toaster:ToasterService,
  ){}
  


  modalRef: BsModalRef;
  @Input() label:string;
  @Input() properties:Array<any>;
  @Input() action:string;
  @Input() data:any;
  @Input() service:string;


  post:any = {};
  toasterconfig : ToasterConfig = new ToasterConfig(
  	{timeout : 3000, positionClass : "toast-top-right", showCloseButton : true}
  );

  @Output() response:EventEmitter<any> = new EventEmitter<any>();   
  @ViewChild('template') template:TemplateRef<any>;
  
  openModal() {      
      if(this.action!=undefined){
          this.modalRef = this.modalService.show(this.template);
          if(this.action=="create"){
             this.post = {};
             if(this.service == "inventoryService"){
                this.post = this.data;
             }
          }
          else {
             this.post = this.data;
          }
      }
  }



  sendAction(){
     let rest = {action : this.action,data:this.post};
     this.parseNumber();
     this.loopback.getService(this.service,rest).subscribe(result=>{
        this.toaster.pop(result.status,result.label,result.message);
        this.response.emit({action:this.action,response:result.response});
     })
  }

  disabled(){
     for(var i in this.properties){
        if(this.properties[i].disabled == undefined){
           this.properties[i].disabled = false;
        }
        else {
           this.properties[i].disabled = true; 
        }
     }
  }



  parseNumber(){
    for(var i in this.properties){
       if(this.properties[i].type=="number" ||  this.properties[i].type=="list"){
          this.post[ this.properties[i].model ] = parseInt(this.post[ this.properties[i].model ]);
       }
    }
  }
  
}
