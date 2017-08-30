import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   	let list = ["sla","ac"];
   	let allCapital  = false;
   	for(var i in list){
   		if(list[i] == value){
   			allCapital = true;
   		}
   	}

   	value = value.split("_").join(" ");
   	if(allCapital){
   		value = value.toUpperCase();
   	}
   	else {	
    	value = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();	
   	}
   	return value;
  }

}
