"use strict";

module.exports = function(server){
	var router = server.loopback.Router();
	router.get("/api/map",(req,res)=>{
		Build();
		function Build(){
			let service = new Service();
			service.list().then(result=>{
				res.send({
					filter : result
				})
			})
		}

		function Service(){
			this.list = function(){
				return server.models.location.find().then(result=>{
					let data = {Province:[],Zone:[],Branch:[],Store:[]};
					for(var i in result){
						data[ result[i].type ].push(result[i]);
					}
					return data;
				})
			}
		}

	});

	server.use(router);
}