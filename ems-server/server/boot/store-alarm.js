"use strict";

module.exports = function(server){
	let router = server.loopback.Router();
	
	router.get("/api/store/alarm",(req,res)=>{
		let table = {
			label : "Table Alarm Active", 
			list  : [
				{id:1,message:"Coil high Temp",equipmentType:"ac",equipment:"AC1",saverity:"critical",sla:10,duration:"10 Day"},
				{id:1,message:"Coil high Temp",equipmentType:"pump",equipment:"Pump1",saverity:"major",sla:10,duration:"10 Day"},
				{id:1,message:"Coil high Temp",equipmentType:"chiller",equipment:"Chiller1",saverity:"minor",sla:10,duration:"10 Day"},
				{id:1,message:"Coil high Temp",equipmentType:"temperature",equipment:"Temperature1",saverity:"warning",sla:10,duration:"10 Day"}
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
				}],
				action : ["view","knowledge"]
			}
		};
		let widget = [
		    {label:"Critical", category:"default", value:10},
		    {label:"Warning",  category:"default", value:10},
		    {label:"Major",    category:"default", value:10},
		    {label:"Minor",    category:"default", value:10},
		];
		res.send({
			widget : widget,
			table  : table
		});
	})
	server.use(router);
}