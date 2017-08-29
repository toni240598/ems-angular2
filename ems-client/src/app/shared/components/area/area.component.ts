import { Component, OnInit, EventEmitter, Output, Input, OnChanges} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-area',
  templateUrl:'./area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit{
  // untuk mengoutpukan string value ke parent komponen sebagai kondisi view building atau chart
 @Output() building    : EventEmitter<string> = new EventEmitter<string>();
 // untuk mengoutputkan data building baru ke parent komponen 
 @Output() newBuilding : EventEmitter<object> = new EventEmitter<Object>();

 // mengambil data untuk item type building dari parent komponen
 @Input() dataBuilding: Object;  
 //mengambil value string dari parent komponen untuk kondisi type view, building atau chart
 @Input() type        : string;
 // untuk mengambil data semua item dari parent komponen
 @Input() item        : any[];
          typeSave    : string;
          typeItem    = [];

  constructor() { }


  backup:Array<any> = [];
  ngOnInit() { 
  }


  ngOnChanges(){ 
    if (this.dataBuilding != undefined) {
        this.item.push(this.dataBuilding)
    }
  }


  addBuilding(styles, position, label){
    let Default;

    Default = { left:33, top:18, name:label,temp_material:0, temp_setting:0, 
               temp_air:0,status:'normal', styles:styles, position:position }

    this.newBuilding.emit(Default)
  }

  Edit(type){
    this.typeSave = type

      if (type == 'building') {
          this.building.emit(type)
      }
  }


  onDragEnd(event,id,index){
    var translate = document.getElementById(id).style.transform;
    var matrix    = new WebKitCSSMatrix(translate); 
    var x         = matrix.m41;
    var y         = matrix.m42;  
    this.item[index].top += y;
  }








  move(id, type){
   let left, top, min, width, valid = 0;

   // function for action save
   if (this.typeItem.length == 0) {
       this.typeItem.push(id)
   }
   else{

     for(var i in this.typeItem){
         if (this.typeItem[i] == id) {
             valid++;
         }
     }
       if (valid == 0) {
          this.typeItem.push(id)
       }
   }
    
    width = document.getElementById("container").offsetWidth
    left  = document.getElementById(id).offsetLeft;
    top   = document.getElementById(id).offsetTop;
    left  = (left / width) * 100
    min   = (left * -1) / 100
    left  = left - min;


    for(let item of this.item){
       if(item.id == id){
           item.top = top;
       }
    } 
  }

  save(event){
    this.building.emit('chart')

    for(var i in this.item){
         for(var j in this.typeItem){
             if (this.typeItem[j] == this.item[i].id) {
               
                 // console.log(this.item[i])
             }
         }
    }
    this.typeItem.splice(0, this.typeItem.length)
    console.log(this.item);
    this.typeSave = event;
  }

  cancel(event){
    this.typeSave = event
    this.building.emit('chart')
  }

  delete(id){
    for(var i in this.item){
      if (this.item[i].id == id) {
          this.item.splice(parseInt(i), 1)
      }
    }
  }


}
