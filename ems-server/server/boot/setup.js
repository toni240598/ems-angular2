"use strict";

var store    = require("./setup/setup-store.js");
var province = require("./setup/setup-province.js");
var zone     = require("./setup/setup-zone.js");
var branch   = require("./setup/setup-branch.js");

module.exports = function(server){

	var router = server.loopback.Router();

	router.get("/api/setup/province",(req,res)=>{
		province().then(result=>{
			res.send(result);
		})
	})

	router.get("/api/setup/zone",(req,res)=>{
		zone().then(result=>{
			res.send(result);
		})	
	})

	router.get("/api/setup/branch",(req,res)=>{
		branch().then(result=>{
			res.send(result);
		})
	})

	router.get("/api/setup/store",(req,res)=>{
		store().then(result=>{
			res.send(result);
		})
	})

	server.use(router);

}