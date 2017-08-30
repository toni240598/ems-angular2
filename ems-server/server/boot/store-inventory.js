"use strict";

module.exports = function(server){
	let router = server.loopback.Router();
	router.get("/api/store/inventory/:id_location",(req,res)=>{

		let id_location = parseInt(req.params.id_location);
		let table = {
			label : "Table inventory",
			list  : [],
			setting : {
				hide : ["top","left","id_brand","id_equipmentType",
						"id_store","last_value"],
				action : ["create","edit","remove"],
				filter : [{equipment_type:"capitalize"}],
				search : [
					{
						label : "Equipment Type",
						column : "equipment_type",
						list : [
							{value:"all"},{value:"ac"},{value:"chiller"},
							{value:"temperature"},{value:"pump"},{value:"humidity"}
						]
					}
				]
			}
		}

		let form = {
			label : "Form Inventory",
			service : "inventoryService",
			properties : [
 				{ type:"text", label : "Label", model : "label"},	
				{ type:"list", label : "Equipment Type", model:"id_equipmentType"},
				{ type:"list", label : "Brand", model : "id_brand"}
			]
		}

		Build();
		function Build(){
			let dataset = new Dataset();			
			dataset.store().then(store=>{
				Promise.all([
					dataset.equipment(store[0].id),
					dataset.common()
				])
				.then(result=>{
					table.list = result[0];
					form.properties[1].list = result[1].type;
					form.properties[2].list = result[1].brand;
					res.send({table:table, form : form});	
				});
			});
		}


		function Dataset(){
			this.common = function(){
				return Promise.all([
					server.models.brand.find(),
					server.models.equipmentType.find()
				]).then(result=>{
					let brand = result[0];
					let type  = result[1];
					for(var i in brand){
						brand[i] = { id:brand[i].id, label:brand[i].label };
					} 
					for(var i in type){
						type[i] = { id:type[i].id, label:type[i].label };
					}
					return { brand:brand, type:type }
				})
			}
			this.store = function(){
				return server.models.location.find({where:{id_location:id_location}})
				.then(result=>{
					return result;
				})
			} 
			this.equipment = function(id_store){
				return Promise.all([
					server.models.equipment.find({where:{id_store:id_store}}),
					server.models.brand.find(),
					server.models.equipmentType.find()
				]).then(result=>{
					let items  = result[0];
					let brands = result[1];
					let types  = result[2];
					
					for(let item of items){
						for(let brand of brands){
							if(item.id_brand == brand.id){
								item.brand  = brand.label;
								item.series = brand.series;
							}
						}
						for(let type of types){
							if(item.id_equipmentType == type.id){
								item.equipment_type = type.label.toLowerCase();
								item.max_value     = type.max_value;
							}
						}
						item.last_update = undefined;
					} 
					function rechange(config,datas){
						let set;
						for(let i in datas){
							set = {};
							for(let key of config){
								set[ key ] = datas[i][ key ];
							}
							datas[i] = set;
						}
						return datas;
					}

					return rechange(["id","label","equipment_type","brand","series","id_brand",
						"id_store","last_value","id_store","top","left","position",
						"id_equipmentType"],
						items);
				})
			}
		}

	})
	server.use(router);
}