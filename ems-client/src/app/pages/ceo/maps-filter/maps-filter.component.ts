import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../../../shared/services/history.service';

@Component({
  selector: 'app-maps-filter',
  templateUrl: `./maps-filter.component.html`,
  styles: []
})
export class MapsFilterComponent implements OnChanges {

  constructor(public storage:HistoryService, public router:Router) {}

  /**
    fungsi input getProvince adalah untuk pengambilan data province dari parent komponent (maps-View)
  */
  @Input() getProvince:Array<any>;

  /**
    fungsi input getZone adalah untuk pengambilan data zone dari parent komponent (maps-View)
  */
  @Input() getZone:Array<any>;

  /**
    fungsi input getBranch adalah untuk pengambilan data Branch dari parent komponent (maps-View)
  */
  @Input() getBranch:Array<any>;

  /**
    fungsi input getStore adalah untuk pengambilan data store dari parent komponent (maps-View)
  */
  @Input() getStore:Array<any>;

  /**
    fungsi getMarker adalah fungsi pengambilan data yang di kirim oleh filtering di marker maka data tersebut akan
    diterima oleh input getMarker
  */
  @Input() getMarker:Array<any>;

  /**
    fungsi input dari getAlarm adalah pengambilan data alarm  dari parent komponent (maps-View)
  */
  @Input() getAlarm:Array<any>;

  /**
    fungsi dari OutputZone adalah mengirimkan data dari hasil filtering yang akan dikirim ke komponent maps sehingga marker maps
    akan menyesuaikan dengan data yang akan dikirim oleh OutputZone.
  */
  @Output() OutputZone = new EventEmitter<any>();

  province:any = [];
  zone:any = [];
  branch:any = [];
  store:any = [];
  public merge:any = {parent:[], children:[], all:""};
  iconBlue:any = "assets/img/iconMarker/blue.png";
  iconRed:any = "assets/img/iconMarker/red.png";
  public widget = false;
  public allMaker = true;
  public dataWidget:any = [];
  id_province:string;
  id_zone:string;
  id_branch:string;
  id_store:string;

  ngOnChanges() {
    this.setAlarm(this.getAlarm);
    this.setMapsMarker(this.getMarker);
    this.setMaps();
    this.province = this.getProvince;
  }

  /**
    # fungsi setProvince adalah fungsi filtering province yang akan berjalan jika filter province dilakukan dan akan mendapatkan parameter
      id dari province yang dipilih selanjutnya data province yang di pilih akan melakukan filtering child/zone
      berdasarkan parent dari child tersebut

    # dalam fungsi ini juga menjalankan sebuah proses pengiriman parent(maps center) dan child(marker maps) yang akan dikirimkan
      ke komponent maps

    # dalam fungsi ini juga menjalankan hasil filtering dan akan tampilan widget store berdasarkan parent yang dipilih
  */
  setProvince(id){
    this.id_province = id.toString();
    this.allMaker = false;
    this.merge = {parent:[], children:[]};
    this.zone = [];
    this.branch = [];
    this.store = [];
    this.dataWidget = [];
    for (let _i in this.getZone){
      if (id == this.getZone[_i].id_province){
        this.zone.push(this.getZone[_i]);
        this.merge.children.push(this.getZone[_i]);
      }
    }

    for (let _i in this.getProvince){
      if (id == this.getProvince[_i].id){
        this.merge.parent = this.getProvince[_i];
      }
    }
    this.OutputZone.emit([this.merge]);
    for (let _i in this.getStore){
      if (id == this.getStore[_i].id_province){
        this.setWidget(this.getStore[_i]);
      }
    }
  }

  /**
    # funsi setZone hampir sama dengan fungsi dari setProvince
  */
  setZone(id){
    this.id_zone = id.toString();
    this.merge = {parent:[], children:[]};
    this.branch = [];
    this.store = [];
    this.dataWidget = [];
    for (let _i in this.getBranch){
      if (id == this.getBranch[_i].id_zone){
        this.branch.push(this.getBranch[_i]);
        this.merge.children.push(this.getBranch[_i]);
      }
    }
    for (let _i in this.getZone){
      if (id == this.getZone[_i].id){
        this.merge.parent = this.getZone[_i];
      }
    }
    this.OutputZone.emit([this.merge]);

    for (let _i in this.getStore){
      if (id == this.getStore[_i].id_zone){
        this.setWidget(this.getStore[_i]);
      }
    }
  }

  /**
    # funsi setZone hampir sama dengan fungsi dari setProvince
  */
  setBranch(id){
    this.id_branch = id.toString();
    this.merge ={parent:[],children:[]};
    this.store = [];
    this.dataWidget = [];
    for (let _i in this.getStore){
      if (id == this.getStore[_i].id_branch){
        this.store.push(this.getStore[_i]);
        this.merge.children.push(this.getStore[_i]);
        this.setWidget(this.getStore[_i]);
      }
    }

    for (let _i in this.getBranch){
      if (id == this.getBranch[_i].id){
        this.merge.parent = this.getBranch[_i];
      }
    }
    this.OutputZone.emit([this.merge]);
  }

  /**
    # funsi setZone hampir sama dengan fungsi dari setProvince
  */
  setStore(id){
    this.id_store = id.toString();
    this.dataWidget = [];
    for(let _i in this.getStore){
      if (this.getStore[_i].id == id){
        this.merge.parent = this.getStore[_i];
        this.merge.children = [this.getStore[_i]];
        this.setWidget(this.getStore[_i]);
      }
    }
    this.OutputZone.emit([this.merge]);
  }

  /**
    fungsi dari setWidget adalah fungsi yang akan mengirimkan data widget store dari hasil filtering
  */
  setWidget(entry){
    this.widget = true;
    if (entry != undefined){
      this.dataWidget.push(entry);
    }
  }

  /**
    fungsi dari setAlarm adalah untuk mencari atau mendetailkan status alarm pada province, zone, branch dan store.
    dan selanjutnya data tersebut akan dijalankan untuk mendetailkan lokasimana yang sedang mengalami kondisi alarm
  */
  setAlarm(entry){
    for (let i of entry){
      for (let j of this.getStore){
        if (i.id_store == j.id){
          j.status = i.status;
        }
      }
    }

    for (let i of this.getStore){

      for (let j of this.getProvince){
        if (i.id_province == j.id  && i.status){
          if (i.status != "cleared"){
            j.status = i.status;
          }
        }
      }

      for (let j of this.getZone){
        if (i.id_zone == j.id && i.status){
          if (i.status != "cleared"){
            j.status = i.status;
          }
        }
      }

      for (let j of this.getBranch){
        if (i.id_branch == j.id && i.status){
          if (i.status != "cleared"){
            j.status = i.status;
          }
        }
      }
    }
  }

  /**
    fungsi dari setMaps adalah fungsi ini adalah lanjutan fungsi dari setAlarm, tetapi dalam fungsi ini
    lebih mendetailkan icon alarm yang akan dipakai
  */
  setMaps (){
      for (let _j of this.getProvince){
        if (!_j.status){
          _j.iconUrl = this.iconBlue;
        } else {
          if (_j.status == "cleared"){
            _j.iconUrl = this.iconBlue;
          } else {
            _j.isOpen = true;
            _j.iconUrl = this.iconRed;
          }
        }
        _j.type = "Province";
      }

      for (let _j of this.getZone){
        if (!_j.status){
          _j.iconUrl = this.iconBlue;
        } else {
          if (_j.status == "cleared"){
            _j.iconUrl = this.iconBlue;
          } else {
            _j.isOpen = true;
            _j.iconUrl = this.iconRed;
          }
        }
        _j.type = "Zone";
      }

      for (let _j of this.getBranch){
        if (!_j.status){
          _j.iconUrl = this.iconBlue;
        } else {
          if (_j.status == "cleared"){
            _j.iconUrl = this.iconBlue;
          } else {
            _j.isOpen = true;
            _j.iconUrl = this.iconRed;
          }
        }
        _j.type = "Branch";
      }
      for (var _j of this.getStore){
        if (!_j.status){
          _j.iconUrl = this.iconBlue;
        } else {
          if (_j.status == "cleared"){
            _j.iconUrl = this.iconBlue;
          } else {
            _j.isOpen = true;
            _j.iconUrl = this.iconRed;
          }
        }
        _j.type = "Store";
      }
  }

  /**
    fungsi setMapsMarker adalah memproses filtering yang dikirim oleh maps filter dan data tersebut akan dibagi menurut data yang di
    filter . seperti pengiriman data ke fungsi setProvince.
  */
  setMapsMarker(entry){
    if (entry != undefined){
      switch (entry.type){
        case "Province" :
          this.setProvince(entry.id);
        break;

        case "Zone" :
          this.setZone(entry.id);
        break;

        case "Branch" :
          this.setBranch(entry.id);
        break;

        case "Store" :
          this.setStore(entry.id);
          this.goStore(entry);
        break;

      }
    }
  }


  /**
    fungsi dari goStore adalah pengiriman data ke localStorage berupa latitude dan longitude store. dan fungsi ini juga
    menjalankan router ke home/dashboard
  */
  goStore(entry){
    this.router.navigate(["home/dashboard"]);
    this.storage.setData(entry);
  }

  /**
    fungsi setAllMarker adalah meng Reload data sehingga dalam kondisi filtering, jika user ingin melihat data seluruh/atau data awal bisa
    menjalankan fungsi ini.
  */
  setAllMarker(){
    window.location.reload();
  }

}
