import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SortPipe } from "../../pipes/sort.pipe";
import { FilterPipe } from "../../pipes/filter.pipe";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{
 
   constructor(){}
   @Input()  setting : any;
   @Output() action :EventEmitter<any> = new EventEmitter<any>() ;
   @Input()  list:Array<any>;
   @Input()  label:string;

   search:string;
   columns : Array<any>;
   sort    : any = {field:null,type:"desc"};
   page    : any = {length:0,indexStart:0,dataset:[],pageIndex:0,pageSize:10};
   icons   : any = {asc : "fa fa-sort-amount-asc",desc:"fa fa-sort-amount-desc",none:"fa fa-sort"}
   customFilter:Array<any> = [];    
   columnAction : any ;
   create  :boolean = false; 
   data    : Array<any> = [];

   ngOnInit(){
       this.running();  
   }

   running(){
       this.generateColumn();
       this.page.dataset = this.list;
       this.paging();
       this.sorting(1);
       this.settingCommand();
   }

   response(event){
     switch(event.action){
       case "create":
          this.list.push(event.response);
       break;
       case "edit":
         for(var i in this.list){
            if(this.list[i].id == event.response.id){
               this.list[i] = event.response;
            }
         }
       break;
       case "remove":
         for(var i in this.list){
           if(this.list[i].id == event.response.id){
              this.list.splice(parseInt(i),1); 
           }
         }
       break;
     }
     this.running();
   }

   generateColumn(){
       let column:any = [];
       if(this.list.length!=0 && this.list!=undefined){
         for(var i in this.list[0]){
            column.push({field:i,icon:this.icons.none});
         }
         column[1].icon = this.icons.asc;
         this.sort = { field : column[1].field, type : "desc" };
       }
       this.columns = column;
   }

   setPage(event){
     this.page.pageSize  = event.pageSize;
     this.page.pageIndex = event.pageIndex;
     this.paging();
   }

   paging(){
     if(this.page.dataset.length!=0 || this.page.dataset!=undefined){
        this.page.indexStart = this.page.pageSize * this.page.pageIndex;
        this.data = [];
        for(var i= 0; i < this.page.dataset.length;i++){
            if(i >= (this.page.pageIndex*this.page.pageSize)  &&
              this.data.length < this.page.pageSize ){
              this.data.push(this.page.dataset[i]);
            }
        } 
     }
   }


   searching(event){
      if(event!=undefined){
        this.page.dataset = new FilterPipe().transform(this.list,event,'default');
        this.paging();
      }
   }

   setCustomFilter(event,column){
     let filter = {};
     if(event=="all"){
        event = "";
     }
     filter[column] = event;
     this.page.dataset = new FilterPipe().transform(this.list,filter,"detail");
     this.paging();
   }

   sorting(index){
       if(this.sort.field!=null && this.sort.type!=null){
           if(this.columns[index].field!=this.sort.field){
               for(var i in this.columns){
                 if(i==index){
                   this.columns[i].icon = this.icons.asc;
                   this.sort.type  = "asc";
                   this.sort.field = this.columns[i].field;
                 }
                 else {
                   this.columns[i].icon = this.icons.none;
                 }
               }
           }
           else {
              switch(this.sort.type){
                  case "asc":
                    this.columns[index].icon = this.icons.desc;
                    this.sort.type = "desc";
                  break;

                  case "desc":
                    this.sort.type = "asc";
                    this.columns[index].icon = this.icons.asc;
                  break;
              }
           }
           this.page.dataset = new SortPipe().transform(this.page.dataset,this.sort.field,this.sort.type);        
           this.paging();
       }
   }


   sendAction(type,data){
     this.action.emit({action:type,data:data});
   }   


   settingCommand(){

     function Filter(config,columns){
          for(var i in config){
             let keys = Object.keys(config[i]);
             for(var j in columns){
                if(columns[j].field == keys[0]){
                    columns[j].filter = config[i][ keys[0] ];
                }
             }
          }
          return columns;
     }

  
     function Hide(config,columns){
        for(var i in config){
           for(var j in columns){
              if(columns[j].field == config[i]){
                 columns[j].hide = true;
              }
           }
        }
        return columns;
     }

     function Sort(config,columns){
       let metadata:any={};
       for(var i in columns){
         if(columns[i].field == config.field){
            metadata.index = i;
         }
       }
       if(config.type=="asc"){
          metadata.render = 1;
       }
       else {
         metadata.render = 2;
       }
       return metadata;
     }


     if(this.setting!=undefined){
         for(var i in this.setting){
             switch(i){
                case "filter":
                   this.columns = Filter(this.setting["filter"],this.columns);       
                break;

                case "search":
                  this.customFilter = this.setting["search"];
                break;

                case "hide":
                   this.columns = Hide(this.setting["hide"],this.columns);
                break;

                case "action":
                  for(var i in this.setting["action"]){
                     if(this.setting["action"][i]=="create"){
                        this.setting["action"][i] = undefined;
                        this.create = true;
                     }
                  }
                  this.columnAction = this.setting["action"];
                break;

                case "sort":
                    let metadata = Sort(this.setting["sort"],this.columns);
                    for(let i:number=0;i<metadata.render;i++){
                      this.sorting(metadata.index);
                    }
                break;
             }
         }
     }
   }

   searchDate(event){     
     this.action.emit({action:"datepicker",data:event});
   }   

}
