import { Component, OnInit, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import { Router }  from "@angular/router";

/*
  Fungsi dari komponen Area adalah untuk menerima data equipment dari parent komponen dan menjadikan data
tersebut menjadi icon berdasarkan property type pada data yang telah diterima. 
*/

@Component({
  selector: 'app-area',
  templateUrl:'./area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit{
  /*
  untuk mengoutputkan string ke parent komponen sebagai kondisi view building
  */
  @Output() viewBuilding: EventEmitter<string> = new EventEmitter<string>();
 
 /*
 untuk mengoutputkan data equipment type building ke parent komponen
 */@Output() emitBuilding : EventEmitter<object> = new EventEmitter<object>();

 /*
,  untuk mengoutputkan data hasil drag and drop equipment ke parent komponen 
 */@Output() event: EventEmitter<object> = new EventEmitter<object>();

 /*
 menerima data equipment type building dari parent komponen
 */@Input() dataBuilding  : Object;   

 /*
 menerima value string dari parent komponen untuk kondisi type view building
 */@Input() typeView      : string;
 
 /*
 untuk menerima data Equipment dari parent komponen
 */@Input() item          : Array<any> = [];
          
          position        : Array<any> = [];
          typeSave        : string;
          draggable       : boolean    = false;

  constructor(private router:Router) {}



  ngOnInit() {   
    setTimeout(() =>{
        let width = document.getElementById('container').offsetWidth;

            for(var i in this.item){
              // this.item[i].left    = (this.item[i].left*width)/100;
              if(this.item[i].type!=undefined){ 
                this.item[i]['type'] = this.item[i]['type'].toLowerCase();
              }
            }
    }, 1000);
  }


  ngOnChanges(){ 
    if (this.dataBuilding != undefined) {
        this.item.push(this.dataBuilding)
    }
  }


  addBuilding(styles, position, label){
    let Default = { id:122, label:label, left:33, top:50, status:'normal', type:styles, position:position }
    
    this.emitBuilding.emit({action:'create', data:Default})
  }


  Edit(type){
    this.typeSave  = type

    this.draggable = true;
      if (type == 'building') {
          this.viewBuilding.emit(type)
    }
  }


  onDragEnd(id){
    let left, top, min, width, valid = 0;
   
    width = document.getElementById("container").offsetWidth;
    left  = document.getElementById(id).offsetLeft;
    top   = document.getElementById(id).offsetTop;

    for(let item of this.item){
      if(item.id == id){
         item.top  = top;
         item.left = left;
      }
    }


    left = ( left / width )*100;
    if (this.position.length == 0) {
       this.position.push({id:id, left:left, top:top})
    }
    else{

      for(var i in this.position){
          if (this.position[i].id == id) {
            valid++;
            this.position[i].left = left;
            this.position[i].top  = top;
          }
      }

      if (valid == 0) {
         this.position.push({id:id, left:left, top:top})
      }
   }
 
  }



  save(event){
    this.draggable = false;
    this.viewBuilding.emit('chart')

    for(let item of this.item){
        for(let position of this.position){
            if (position.id == item.id) {
                this.event.emit(item)
            }
         }
    }

    this.position.splice(0, this.position.length)
    this.typeSave = event;
  }



  cancel(event){
    this.draggable = false;

    this.typeSave = event
    this.viewBuilding.emit('chart')

  }


  delete(id){
    for(var i in this.item){
      if (this.item[i].id == id) {
          this.item.splice(parseInt(i), 1)
          this.emitBuilding.emit({action:'delete', data:this.item[i]})
      }
    }
  }


  detailIcon(id){
    this.router.navigate(["/home/store/detail/:id/:type", {id:id, type:"equipment"}])
  }

}
