"use strict";

var server = require("../../server.js");
module.exports = function(){

	return Build()
	function Build(){
		let service = new Service();
		return Promise.all([
			service.list(), service.province()
		]).then(result=>{
			let child  = result[0];
			let parent = result[1];
			for(var i in child){
				for(var j in parent){
					if(child[i].id_parent == parent[j].id){
						child[i].province_name = parent[j].label;
					}
				}
			} 
			let select = [{value:"all"}];
			for(var i in parent){
				select.push({value:parent[i].label});
			}
			return {
				table : {
					label  : "Table Zone",
					list   : child,
					setting : {
						action : ["create","edit","remove"],
						hide   : ["id_parent","type"],
						search : [{
							label  : "Search by province",
							column : "province_name",
							list   : select
						}]
					}
				},
				form : {
					label : "Form Zone",
					properties : [
						{type:"text", label:"Label",     model:"label"},
						{type:"list", label:"Province",  model:"id_parent", list : parent },
						{type:"text", label:"Latitude",  model:"latitude"},
						{type:"text", label:"Longitude", model:"longitude"},
						{type:"text", label:"Zoom",      model:"zoom"     }
					],
					service : "/api/apps/zone"
				}	
			};
		})
	}

	function Service(){
		this.list = function(){
			return server.models.location.find({where:{type:"zone"}})
			.then(result=>{
				let temp = [];
				for(var list of result){
					temp.push({
						id            : list.id,
						label         : list.label,
						province_name : '',
						latitude      : list.latitude,
						longitude     : list.longitude,
						zoom          : list.zoom,
						id_parent     : list.id_parent 
					})
				}
				return temp;
			})
		}
		this.province = function(){
			return server.models.location.find({where:{type:"province"}})
			.then(result=>{
				let temp = [];
				for(var list of result){
					temp.push({
						id        : list.id,
						label     : list.label 
					})
				}
				return result;
			})
		}
	}

}
