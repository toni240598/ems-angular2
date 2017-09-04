import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HistoryService } from "../../../../shared/services/history.service";
import { LoopbackService } from "../../../../shared/services/loopback.service";

@Injectable()

export class ResolveService implements Resolve<any>{

	constructor(private history : HistoryService, private service:LoopbackService){}
	resolve(route:ActivatedRouteSnapshot){
		let lat  = this.history.location['latitude']
		let long = this.history.location['longitude']
		let id   = route.params['id']
		let type = route.params['type']
		
		return this.service.getService('store-detail', {latitude:12, longitude:12, id:id, type:type})
	}
}