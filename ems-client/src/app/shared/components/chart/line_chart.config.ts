import { FieldPipe } from "../../pipes/field.pipe";
let dateParse = function(value){
	value = new FieldPipe().transform(value,"date");
	return value; 
}
export let line_chart:any = {
	chart: {
        type: 'spline'
    },
	title: { text : '',
	style : {display:"none"} },
	credits: {
	    enabled: false
	},
	xAxis: {
	    type: 'datetime',
	    labels: {
	        overflow: 'justify'
	    }
	},
	plotOptions : {
	  series : {
	    cursor : 'pointer'
	  }
	},
	// tooltip: {
	// 	useHTML:true,
	//     formatter: function() {
	//         var parse=function(value){
	//             var temp = new FieldPipe().transform(value,"watt");
	//             return temp;
	//         }
	//         var temp;
	//         switch(this.point.type_item){
	//         	case "equipment":
	//         		temp = "<b>"+dateParse(this.x)+"</b><br>"
	//         			  +"<image url='"+this.point.icon+"' alt='marker' /><br>"
	//                       +"Label   : "+this.series.name+"<br>"
	//                       +"Value   : "+parse(this.y)+"<br>"
	//         	break;
	//         	case "humidity":
	//                 temp = "<b>"+dateParse(this.x)+"</b><br>"
	//                       +"Label  : "+this.series.name+"<br>"
	//                       +"Value  : "+this.y+"%"
	//             break;
	//             case "temperature":
	//                 temp = "<b>"+dateParse(this.x)+"</b><br>"
	//                       +"Label  : "+this.series.name+"<br>"
	//                       +"Value  : "+this.y+"°C"
	//             break;

	//             case "alarm":
	//             	temp = "<b>"+dateParse(this.x)+"</b><br>"
	//                       +"Label    : "+this.series.name+"<br>"
	//                       +"message  : "+this.point.message+"<br>"
	//                       +"saverity : "+this.point.saverity
	//             break;
	//         }
	//         return temp;
	//     }
	// },
    tooltip: {
        formatter: function () {
	        var symbol = '';
	        var url = this.point.icon.replace(/^url\(|\)$/g, '');
	        symbol = '<img style="margin-right:5px" src="' + url + '" alt="Icon" />';    
	        let label = this.series.name;
	        if(this.point.type_item=="alarm"){
	        	label = this.point.message;
	        }
	        function formatterValue(type,y,saverity){
	        	let value;
	        	let param = "value : ";
	        	switch(type){
	        		case "equipment":
	        			value = new FieldPipe().transform(y,"watt");
	        		break;
	        		case "humidity":
	        			value = y+"%";
	        		break;
	        		case "temperature":
	        			value = y+"°C";
	        		break;
	        		case "alarm":
	        			value = saverity;
	        			param = "saverity : ";
	        		break;
	        	}
	        	return param+value;
	        }
        	return `
        		<div style="width:150px;margin:5% 10%;">
	        		<table style="margin:1px;">
	        			<tr style="text-align:center;">
	        				<td colspan="3" style="font-weight:bold;">
	        					`+dateParse(this.x)+`
	        				</td>
	        			</tr>
	        			<tr>
	        				<td rowspan="2">
	        					`+symbol+`
	        				</td>
	        				<td colspan="2">label : `+label+`</td>
	        			</tr>
	        			<tr>
	        				<td colspan="2">`+
	        					formatterValue(
	        						this.point.type_item,
	        						this.y,
	        						this.point.saverity
	        					)
	        				+`</td>
	        			</tr>
	        		</table>
        		</div>
        	`
        },
        useHTML:true
    },
	yAxis: [{
	    title: {
	        text: 'Power Usage',
	        style: {
	            color: '#444'
	        }
	    },
	    labels: {
	        formatter:function(){
	            var temp = new FieldPipe().transform(this.value,"watt");
	            return temp;
	        },
	        style: {
	            color: '#444'
	        }
	    },
	    minRange : 200,
	    plotLines: [{
            value: 120,
            color: '#d9534f',
            dashStyle: 'shortdash',
            width: 2,
            zIndex : 4,
            label: {
                text: 'Maximum energy current'
            }
        }]
	},{
	    title: {
	        text: 'Temperature & Humidity',
	        style: {
	            color: '#444'
	        }
	    },
	    labels: {
	        format: '{value}°C',
	        style: {
	            color: '#444'
	        }
	    },
	    opposite: true
	}],
	series : []
};
