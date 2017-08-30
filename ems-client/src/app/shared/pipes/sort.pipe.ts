import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(array: any[], field: string, type:string): any[] {
    	switch(type){
    		case "asc":
			    array.sort((a: any, b: any) => {
			      if (a[field] < b[field]) {
			        return -1;
			      } else if (a[field] > b[field]) {
			        return 1;
			      } else {
			        return 0;
			      }
			    });
		    break;
		    case "desc":
		    	array.sort((a: any, b: any) => {
			      if (a[field] < b[field]) {
			        return 1;
			      } else if (a[field] > b[field]) {
			        return -1;
			      } else {
			        return 0;
			      }
			    });
		    break;
		}
	    return array;
	}

}
