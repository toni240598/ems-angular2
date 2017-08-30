"use strict";

var widget = require("./store-dashboard/widget.js");
var item   = require("./store-dashboard/item.js");
var watthour = require("./store-dashboard/watthour.js");
var watt     = require("./store-dashboard/watt.js");

module.exports = function(server){
	var router = server.loopback.Router();
	
	router.get("/api/store/dashboard/:latitude/:longitude",(req,res)=>{
		let latitude = req.params.latitude;
		let longitude = req.params.longitude;

		res.send({ 
			widget   : widget(), 
			item     : item({latitude:latitude,longitude:longitude}), 
			watthour : watthour("monthly"),
			watt     : watt("daily") 
		});
	})


	router.get("/api/store/dashboard/chart/:categoryChart/:typeChart",(req,res)=>{
		let typeChart     = req.params.typeChart;
		let categoryChart = req.params.categoryChart;
		let datachart     = {
			watthour  : watthour(typeChart),
			watt      : watt(typeChart)
		}
		res.send(datachart[categoryChart]);
	});

	server.use(router);
}