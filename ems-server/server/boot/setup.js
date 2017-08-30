"use strict";

// var province = require("./setup/setup-province.js");
var store = require("./setup/setup-store.js");

module.exports = function(server){

	var router = server.loopback.Router();

	router.get("/api/setup/province",(req,res)=>{

	})

	router.get("/api/setup/zone",(req,res)=>{

	})

	router.get("/api/setup/branch",(req,res)=>{

	})

	router.get("/api/setup/store",(req,res)=>{
		store().then(result=>{
			res.send(result);
		})
	})

	server.use(router);

}