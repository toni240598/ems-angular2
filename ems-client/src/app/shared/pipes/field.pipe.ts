import { Pipe, PipeTransform } from '@angular/core';
import { CapitalizePipe } from "./capitalize.pipe";
import * as moment from 'moment';

@Pipe({
  name: 'field'
})
export class FieldPipe implements PipeTransform {

  transform(value: any, type: string): any {
  	
    function coversion(value,category){
      let unit;
      let unitList = { watthour:"WH", watt:"W" };

      if(value<1000){
        unit = unitList[category];
        value = value.toFixed(0);
      } 
      else if(value>=1000 && value<1000000){
        value /= 1000;
        unit = "K" + unitList[category];
        value = value.toFixed(1);
      }
      else {
        value /= 1000000;
        unit = "M"+unitList[category];
        value = value.toFixed(1);
      }    

      value = value.split(".").join(",");
      return value+" "+unit;
    }

    switch(type){
      case "capitalize":
        value = new CapitalizePipe().transform(value);
      break;

  		case "date":
  			value = new Date(value);
    		value = moment(value).format('DD/MM/YYYY hh:mm');
  		break;

  		case "yearOnly":
  			value = new Date(value);
    		value = moment(value).format('YYYY');
  		break;

      case "watthour":
        if(value!=NaN && value!=undefined){
           value = coversion(value,type);
        }
      break;

      case "watt":
        if(value!=NaN && value!=undefined){
           value = coversion(value,type);
        }
      break;      
  	}
    return value;
  }

}
