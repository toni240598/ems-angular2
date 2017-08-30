"use strict";

var server = require("../../server.js");
module.exports = function(action,data){
	return Build();
	function Build(){
		let service  = new Service();
		return service[action]().then(result=>{
			return service.join(result.response).then(newData=>{
	       		result.response = newData;
	       		return result;
			})
		})
	}	

	function Service(){
		var message = {status:'success',label:"Inventory",message:"Successfully "+action+" data"}
		this.create = function(){
			return server.models.equipment.create(data).then(result=>{
				message.response = result;
				return message;
			})
		}	
		this.edit  = function(){
			let id = data.id;
			data.id = undefined;
			data.last_update = undefined;
			return server.models.equipment.replaceById(id,data).then(result=>{
				message.response = data;
				return message;
			})
		}
		this.remove = function(){
			console.log(data.id);
			return server.models.equipment.deleteById(data.id).then(result=>{
				message.response = data;
				return message;
			})
		}
		this.join = function(value){
			return Promise.all([
				server.models.brand.find(),
				server.models.equipmentType.find()
			]).then(result=>{
				let brands = result[0];
				let types  = result[1];
				for(var brand of brands){
					if(brand.id == value.id_brand){
						value.brand  = brand.label;
						value.series = brand.series;
					}
				}
				for(var type of types){
					if(type.id == value.id_equipmentType){
						value.equipment_type = type.label;
					}
				}
				return value;
			})
		}
	}



}