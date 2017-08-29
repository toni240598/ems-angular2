import { Component, OnInit, Input} from '@angular/core';
import { Item } from "./item.metadata";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() config    : Item;
  		   label     : string;
  		   icon      : string;
  		   image     : string;
  		   color     : string;
  		   infoType  : string;
  		   styles 	 : any;
  		   condition : any;
  		   text      : string;
  		   value     : object;


  constructor() { }

  	dataset = {
	  	chiller : {
	  		type    : 'image',
		    color 	: { off:'#99e2ff', normal:'#99e2ff', major:'#ffbe4d', critical:'#ff6666'},
		    image 	: { 
		   	off     : '../assets/img/chiller_mati.png', 
		    normal  : '../assets/img/chiller_normal.png', 
		    major   : '../assets/img/chiller_major.png', 
		    critical: '../assets/img/chiller_critical.png' },
		    ''      :'chiller',
		    txt     : {
		    	''  :{ txtMdl:'txtMdl', txtTop:'txtTop', txtBtm:'txtBtm'}
		    },
		    clrcondition : { major:'#ff6600', critical:'#ff6600', normal:'#ff6600', off:'gray'},
		    icon    : 'none',
		    value   : [ 'temp_setting', 'temp_material', 'temp_air' ]
	  		
	  	},
  		door2 : {
	  			type  : 'css',
		  		color : { alarm:'danger', open:'open', normal:'normal' },
		  		image : 'none',
	  			right : { left:'door-right', right:'door-right1' },
	  			left  : { left:'door-left',  right:'door-left1' },
	  			top   : { left:'door-top',   right:'door-top1' },
	  			bottom: { left:'door-bottom',right:'door-bottom1' },
		  		txt   : 'none',
		  		icon  : 'none',
		  		value : []
  		},
  		door1 : {
	  			type   : 'css',
		  		color  : {normal:'normal'},
		  		image  : 'none',
	  			left   : { left : 'door1-left' },
	  			right  : { left : 'door1-right' },
	  			top    : { left : 'door1-top' },
	  			bottom : { left : 'door1-bottom' },
		  		txt    : 'none',
		  		icon   : 'none',
	  			value  : []
	  		},
  		cashier : {
	  			type  : 'css',
		  		color : {normal:'normal'},
		  		image : 'none',
	  			''    : { left:'kasir',middle:'screen',right:'foot', text:'txtkasir1'},
	  			txt   : 'none',
		  		icon  : 'none',
	  			value : []
  		},
  		atm  : {
	  			type  : 'css',
		  		color : {normal:'normal'},
		  		image : 'none',
	  			''    : { left:'atm'},
	  			txt   : 'none',
		  		icon  : 'none',
	  			value : []
  		},
  		rack5x1  : {
	  			type  : 'css',
		  		color : {normal:'normal'},
		  		image : 'none',
	  			''    : { left:'rack5x1'},
	  			txt   : 'none',
		  		icon  : 'none',
	  			value : []
  		},
  		rack5x2  : {
	  			type  : 'css',
		  		color : {normal:'normal'},
		  		image : 'none',
	  			''    : { left:'rack5x2'},
	  			txt   : 'none',
		  		icon  : 'none',
	  			value : []
  		},
  		rack2x2  : {
  			  	type  : 'css',
		  		color : {normal:'normal'},
		  		image : 'none',
	  			''    : { left:'rack2x2'},
	  			txt   : 'none',
		  		icon  : 'none',
	  			value : []
  		},
	  	ac : {
	  		type   : 'image',
	  		image  : { critical:'../assets/img/ac_critical.png', normal:'../assets/img/ac_normal.png', 
	  					major:'../assets/img/ac_major.png', off:'../assets/img/ac_OFF.png' },
	  		color  : { critical:'none', normal:'none', major:'none', off:'none' },
	  		right  :'ac-right', left:'ac-left', top:'ac-top', bottom:'ac-bottom',
	  		txt    : {
	  			right :{ txtTop:'setRight',txtBtm:'tempRight', txtMdl:'line'},
	  			left  :{ txtTop:'setTop', txtBtm:'tempTop', txtMdl:'line'},
	  			top   :{ txtTop:'setTop', txtBtm:'tempTop', txtMdl:'line'},
	  			bottom:{ txtTop:'setTop', txtBtm:'tempTop', txtMdl:'line'}
	  		},
	  		icon   : 'none',
	  		value  : ['temp_setting', 'temp_material']
	  	},
	  	lamp : {
	  		type   : 'icon',
	  		image  : 'none',
	  		color  : { alarm:'red', normal:'#19a9d5', disconnect:'gray' },
	  		''     :'lamp',
	  		txt    : { '':{ txtTop:'none', txtBtm:'none', txtMdl:'none' } },
	  		icon   : 'fa fa-lightbulb-o fa-2x',
	  		value  : []
	  	}, 
	  	temperature : {
	  		type   : 'icon',
	  		image  : 'none',
	  		color  : { critical:'red', normal:'#19a9d5', major:'orange' },
	  		 ''    : 'temperature',
	  		icon   : 'fa fa-thermometer-three-quarters',
	  		txt    : { '' : { txtTop:'tempTp', txtBtm:'tempBtm', txtMdl:'' } },
	  		value  : ['temp_setting', 'temp_material']
	  	},
	  	pump : {
	  		type   : 'image',
	  		image  : { critical: '../assets/img/pump_alarm.png', off:'../assets/img/pump_mati.png',
	  				 normal:'../assets/img/pump_normal.png', major:'../assets/img/pump_orange.png' },
	  		color  : { critical:'none', normal:'none', off:'none', major:'none' },
	  		''     : 'pump',
	  		icon   : 'none',
	  		txt    : { '' : { txtTop:'none', txtBtm:'none', txtMdl:'txtPump' } },
	  		value  : ['lifetime']
	  	}
	}
	
  ngOnInit() {
  	this.label    = this.config[ "name" ]
  	this.color    = this.dataset[ this.config.styles ].color[ this.config.status ]
  	this.image    = this.dataset[ this.config.styles ].image[ this.config.status ]
  	this.styles   = this.dataset[ this.config.styles ][ this.config.position ]
  	this.condition= this.dataset[ 'chiller' ].clrcondition[ this.config.status ]
  	this.text     = this.dataset[ this.config.styles ].txt[ this.config.position ]
  	this.infoType = this.dataset[ this.config.styles ].type
  	this.icon     = this.dataset[ this.config.styles ].icon
  	let value     = this.dataset[ this.config.styles ].value
  	this.value    = { temp_material:'', temp_air:'', temp_setting:'', lifetime:'' }
  	for(var i in value){
  		this.value[value[i]] = this.config[value[i]]
   	}
  }
}























