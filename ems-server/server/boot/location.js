'use strict';

module.exports = function(app){

	var Router = app.loopback.Router();
	Router.get("/api/location_store", function(req, res){

    run();
    function run(){
      var data = new getData();
      data.all().then(function(loc){
				res.send(loc);
      })
    }

    function getData(){
			this.all = function(){
				return Promise.all([
						app.models.location.find(),
						app.models.store.find()
					]).then(function(cb){
						var loc = cb[0];
						// var store = cb[1];
						let entry = {Province:[], Zone:[], Branch:[], Store:[]};
						for (var i in loc){
							switch (loc[i].type) {
								case "Province":
									entry.Province.push(loc[i]);
									break;
								case "Zone":
									entry.Zone.push(loc[i]);
									break;
								case "Branch":
									entry.Branch.push(loc[i]);
									break;
								case "Store":
									entry.Store.push(loc[i]);
									break;
							}
						}

						for (var i in entry.Province){
							for (var j in entry.Zone){
								if (entry.Province[i].id == entry.Zone[j].id_parent){
									entry.Zone[j].id_province = entry.Province[i].id;
								}
								for(var k in entry.Branch){
									if(entry.Zone[j].id == entry.Branch[k].id_parent){
										entry.Branch[k].id_province = entry.Zone[k].id_province;
										entry.Branch[k].id_zone = entry.Zone[k].id;
									}
									for (var l in entry.Store){
										if (entry.Branch[k].id == entry.Store[l].id_parent){
											entry.Store[l].id_province = entry.Branch[k].id_province;
											entry.Store[l].id_zone = entry.Branch[k].id_zone;
											entry.Store[l].id_branch = entry.Branch[k].id;
										}
									}
								}
							}
						}
						return entry;
					})
			}
    }

  })
  app.use(Router)
}
