'use strict';
const app = require("../server.js");
const inventory = require("./core/inventory.js");
module.exports = function(App) {

  
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
