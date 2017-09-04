"use strict";

var server = require("../../server.js");

module.exports = function(action,data,bindStore){
	
	return Build();
	function Build(){
		let service = new Service();
		let store = new Store();
		return service[action]().then(result=>{
			if(bindStore){
				store[action](result);
			}
			return result;
		})
	}

	function Service(){
		this.create = function(){
			return server.models.location.create(data).then(result=>{
				return result;
			})
		}
		this.edit = function(){
			let id = data.id;
			data.id = undefined;
		    return server.models.location.replaceById(id,data).then(result=>{
		    	data.id = id;
		    	return data;
		    }) 
		}
		this.remove = function(){
			return server.models.location.deleteById(data.id).then(result=>{
				return data;
			})
		}
	}

	function Store(){
		this.create = function(result){
			server.models.store.create({label:result.label,image:'',id_location:result.id});
		}
		this.edit   = function(result){
			server.models.store.find({id_location:result.id}).then(store=>{
				store[0].label = result.label;
				let id         = store[0].id;
				store[0].id    = undefined;
				server.models.store.replaceById(id,store[0]);
			})
		}
		this.remove = function(result){
			server.models.store.find({id_location:result.id}).then(store=>{
				server.models.store.deleteById(store[0].id);
			})
		}
	}

}