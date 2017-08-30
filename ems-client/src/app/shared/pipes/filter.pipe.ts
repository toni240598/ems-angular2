import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, filter: any, type:string): any {
    let value = [];
    switch(type){
      case "default":
        value = items.filter(item => 
          JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
      break;

      case "detail":
          // if (filter && Array.isArray(items)) {
             let filterKeys = Object.keys(filter);
              value =  items.filter(item =>
                  filterKeys.reduce((memo, keyName) =>
                      (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
          // } else {
          //     value = items;
          // }
      break;
    }
    return value;
  }


}



// import {Pipe, PipeTransform} from '@angular/core';
// @Pipe({
//     name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//     transform(items: any, filter: any): any {
//       
//     }
// }