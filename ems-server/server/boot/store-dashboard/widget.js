"use strict";

var server = require("../../server.js");

module.exports = function(){
	return [
	    {label:"Total Energy",   category:"watt",value:100},
	    {label:"AC Energy",      category:"watt",value:6000},
	    {label:"Chiller Energy", category:"watt",value:1000000},
	    {label:"Other Energy",   category:"watt",value:827324},
	    {label:"Temperature",    category:"temperature",value:{min:25,max:100}},
	    {label:"Humidity",       category:"humidity",value:{min:27,max:100}},
	]
}