"use strict";

module.exports = function(category){
	return [
       {
           label     : 'AC1',
           category  :  'ac',    
           data  : [{x:1495640800000,y:23},{x:1495694400000,y:45},{x:1495748000000,y:38}]
        },
        {
           label     : 'Temp1',
           category  :  'temperature',    
           data  : [{x:1495640800000,y:23},{x:1495774400000,y:45},{x:1495848000000,y:38}]
        },
        {
           label     : 'Humidity',
           category  :  'humidity',    
           data  : [{x:1495640800000,y:78},{x:1495774400000,y:90},{x:1495848000000,y:10}]
        },
        {
           label     : 'Pump1',
           category  :  'pump',    
           data  : [{x:1495640800000,y:104},{x:1495774400000,y:10},{x:1495848000000,y:75}]
        },
        {
           label     : 'Chiller1',
           category  :  'chiller',    
           data  : [{x:1495640800000,y:50},{x:1495774400000,y:70},{x:1495848000000,y:40}]
        },
        { 
        	label : "Alarm",
        	category : "alarm",
        	data : [
        		{x:1495940800000,y:50,saverity:"critical",message:"Coil high Temp"},
        		{x:1495840800000,y:90,saverity:"cleared",message:"Coil high Temp"}
        	]
        }
  ]
}