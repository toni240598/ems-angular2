'use strict';
const app = require("../server.js");
const inventory = require("./core/inventory.js");
const location  = require("./core/location.js");
function rechange(config,value){
    let set = {};
    for(let key of config){
      set[ key ] = value[ key ];
    }
  return set;
}

module.exports = function(App) {

  App.province = function(action,data,res){
      location(action,data).then(result=>{
         res(null,{
            status   : 'success',
            label    : "Province", 
            message  : "successfully "+action+" data",
            response : result 
         })
      })
  }

  App.remoteMethod("province",{
     http : {path:"/province", verb:"POST"},
     accepts : [
        {type:"string", arg:"action" },
        {type:"object", arg:"data"   }
     ],
     returns : { type:"object", root:true }
  })




  App.zone = function(action,data,res){
      location(action,data).then(result=>{   
          app.models.location.find({where:{type:"province"}}).then(parent=>{
             for(var i in parent){
                if(result.id_parent == parent[i].id){
                   result.province_name = parent[i].label;
                }
             }
             res(null,{
                status   : 'success',
                label    : "Zone", 
                message  : "successfully "+action+" data",
                response : rechange(["id","label","province_name","latitude","longitude",
                  "zoom","id_parent"],result) 
             })
         })
      })
  }

  App.remoteMethod("zone",{
     http : {path:"/zone", verb:"POST"},
     accepts : [
        {type:"string", arg:"action" },
        {type:"object", arg:"data"   }
     ],
     returns : { type:"object", root:true }
  })






  App.branch = function(action,data,res){
      location(action,data).then(result=>{   
          app.models.location.find({where:{type:"zone"}}).then(parent=>{
             for(var i in parent){
                if(result.id_parent == parent[i].id){
                   result.zone_name = parent[i].label;
                }
             }
             res(null,{
                status   : 'success',
                label    : "Branch", 
                message  : "successfully "+action+" data",
                response : rechange(["id","label","zone_name","latitude","longitude",
                  "zoom","id_parent"],result) 
             })
         })
      })
  }


  App.remoteMethod("branch",{
     http : {path:"/branch", verb:"POST"},
     accepts : [
        {type:"string", arg:"action" },
        {type:"object", arg:"data"   }
     ],
     returns : { type:"object", root:true }
  })






  App.loopbackStore = function(action,data,res){
      location(action,data,true).then(result=>{   
          app.models.location.find({where:{type:"branch"}}).then(parent=>{
             for(var i in parent){
                if(result.id_parent == parent[i].id){
                   result.branch_name = parent[i].label;
                }
             }
             res(null,{
                status   : 'success',
                label    : "Store", 
                message  : "successfully "+action+" data",
                response : rechange(["id","label","branch_name","latitude","longitude",
                  "zoom","id_parent"],result) 
             })
         })
      })
  }


  App.remoteMethod("loopbackStore",{
     http : {path:"/loopbackStore", verb:"POST"},
     accepts : [
        {type:"string", arg:"action" },
        {type:"object", arg:"data"   }
     ],
     returns : { type:"object", root:true }
  })











  App.inventory = function(action, data, res){
      inventory(action,data).then(result=>{
          res(null,result);
      })
  }

  App.remoteMethod("inventory",{
    http    : {path:"/inventory",verb:"POST"},
    accepts : [
       {type:"string", arg:"action"},
       {type:"object",   arg:"data"}
    ],
    returns : {type:"object", root:true}
  })





  App.analysis = function(address,res){
      res(null,"asem");
  }

  App.remoteMethod("analysis",{
      http : { path:"/analysis", verb:"POST"},
      accepts : [
          {type:"array", arg:"address"}
      ],
      returns : { type:"object", root:true }
  })





  App.location = function (action, data, res) {

    Bulid();
    function Bulid(){
      let service = new Service();
      service[action]().then(result => {
        res(null, result);
      })
    }

    function Service(){
      this.create = function (){
        let dataLocation = {
            label : data.label,
            latitude : data.latitude,
            longitude : data.longitude,
            zoom : data.zoom,
            type : data.type,
            id_parent : data.id_parent
        }
        return app.models.location.create(dataLocation).then(result => {
          return result;
        })
      }
    }
    
  }

  App.remoteMethod("location",{
    http:{path:"/location", verb:"POST"},
    accepts : [
      {type:"string", arg:"action"},
      {type:"object", arg:"data"}
    ],
    returns : {type:"object", root:true}
  })

};
