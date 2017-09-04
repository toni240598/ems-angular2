import { Component, OnInit, Input} from '@angular/core';
import { LoopbackService } from "../../../../shared/services/loopback.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['/store-detail.component.css'],
  providers:[ LoopbackService ]
})
export class StoreDetailComponent implements OnInit {
  subject  : any;
  email    : any = {};
  usrInput = [1];
  detail: Object;


  constructor(private service : LoopbackService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach(data=>{
      this.detail = data.GET
    })
  }

  addInput(){
  	if (this.usrInput.length <= 4) {
  		this.usrInput.push(this.usrInput.length+1)
  	}
  }

  close(id){
		for(var i in this.usrInput){
			if (this.usrInput[i] == id) {
				this.usrInput.splice(parseInt(i), 1)
			}
		}
	    delete this.email[id]
  }  

  sendMail(){
  }
}
