"use strict";

module.exports = function(server){
	var router = server.loopback.Router();
	router.get("/api/store/detail/:latitude/:longitude/:type/:id",(req,res)=>{

		res.send({type:"Equipment", data:[{ id:1, label:'chiller1', type:"chiller", temperature:12, status:'normal'}]});
	})
	server.use(router);
}