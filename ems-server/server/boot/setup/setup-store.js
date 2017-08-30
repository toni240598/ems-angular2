"use strict";

var server = require("../../server.js");
module.exports = function(){

	return Build();
	function Build(){
		return server.models.store.find().then(result=>{
			return result;
		})		
	}

}