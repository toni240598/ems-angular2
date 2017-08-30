"use strict";

module.exports = function(server){
	let router = server.loopback.Router();
	
	router.get("/api/alarm",(req,res)=>{
		let alarm  = {
			label : "Table History Alarm", 
			list  : [
				{id:1,message:"Coil high Temp",equipmentType:"ac",equipment:"AC1",saverity:"critical",sla:10,duration:"10 Day",start:new Date(),end:new Date()},
				{id:1,message:"Coil high Temp",equipmentType:"pump",equipment:"Pump1",saverity:"major",sla:10,duration:"10 Day",start:new Date(),end:new Date()},
				{id:1,message:"Coil high Temp",equipmentType:"chiller",equipment:"Chiller1",saverity:"minor",sla:10,duration:"10 Day",start:new Date(),end:new Date()},
				{id:1,message:"Coil high Temp",equipmentType:"temperature",equipment:"Temperature1",saverity:"warning",sla:10,duration:"10 Day",start:new Date(),end:new Date()}
			],
			setting : {
				hide : ["equipmentType"],
				search : [{
					label : "Equipment Type",
					column : "equipmentType",
					list : [
						{value : "all"},{value:"ac"},{value:"chiller"},{value:"pump"},
						{value:"temperature"},{value:"humidity"},{value:"kwh"}
					]
				},{
					label : "Search With Date",
					datepicker : true
				}],
				filter : [{start:"date"},{end:"date"}]
			}
		};
		res.send(alarm);
	})

	server.use(router);
}