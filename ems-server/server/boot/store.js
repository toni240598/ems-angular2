'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get("/api/store/:latitude/:longitude",(req,res)=>{
		let latitude = parseFloat(req.params.latitude);
		let longitude = parseFloat(req.params.longitude);

	  	Build();
	  	function Build(){
	  		let service = new Service();
	  		service.store().then(store=>{
	  			res.send(store);	
	  		})
	  		
	  	}

	  	function Service(){
	  		this.store = function(){
	  			return server.models.location.find({
	  				where : {latitude : latitude, longitude : longitude, type : 'store' }
	  			})
	  			.then(result=>{
	  				let store = result[0];
	  				return store;
	  			})
	  		}
	  	}	

  });
  server.use(router);
};
