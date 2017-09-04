"use strict";

var server = require("../../server.js");
module.exports = function(){

	return Build()
	function Build(){
		let service = new Service();
		return service.list().then(result=>{
			return {
				table : {
					label  : "Table Province",
					list   : result,
					setting : {
						action : ["create","edit","remove"]
					}
				},
				form : {
					label   : "Form Province",
					service : "/api/apps/province", 
					properties : [
						{type:"text", label:"Label",     model:"label"},
						{type:"text", label:"Latitude",  model:"latitude"},
						{type:"text", label:"Longitude", model:"longitude"},
						{zoom:"text", label:"Zoom",      model:"zoom"}
					]
				}	
			};
		})
	}

	function Service(){
		this.list = function(){
			return server.models.location.find({where:{type:"province"}})
			.then(result=>{
				let temp = [];
				for(var list of result){
					temp.push({
						id        : list.id,
						label     : list.label,
						latitude  : list.latitude,
						longitude : list.longitude,
						zoom      : list.zoom 
					})
				}
				return temp;
			})
		}
	}

}