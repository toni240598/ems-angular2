import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class Loopbackv2Service {

  constructor(public http:Http){}

  read(link){
  	 return this.http.get(link).map(result => result.json());
  }

  service(link,data){
  	 return this.http.post(link,data).map(result=>result.json());
  }


}
