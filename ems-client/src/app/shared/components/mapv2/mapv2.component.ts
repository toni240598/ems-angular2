import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
export interface Map {
	latitude  : number;
	longitude : number;
	zoom      : number;
  type      : string;
}


@Component({
  selector: 'app-mapv2',
  templateUrl: './mapv2.component.html',
  styleUrls: ['./mapv2.component.css']
})



export class Mapv2Component implements OnChanges {

  constructor() { }

  @Input() center:Map;
  @Input() marker:Map[];
  @Output() action:EventEmitter<any> = new EventEmitter<any>(); 
  icon = "assets/img/iconMarker/blue.png";
  showbox:any;

  ngOnChanges(){
  
  }

  clickedMarker(event){
    this.action.emit(event);
  }


  Showinfobox(i){
    this.showbox = i;
  }


  hiddeninfobox(){
    this.showbox = "Hidden";
  }

}
