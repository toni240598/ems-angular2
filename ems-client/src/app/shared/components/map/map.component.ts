import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

/**
  library maps yang ini menggunakan angular google maps (AGM 1.0.0-beta.0)
  -------------------------------------
  #example
  untuk menjalankan dan menginstall agm
    install terlebih dahulu librarynya
    - npm install @agm/core --save

    lalu import AgmCoreModule di shared.module.ts /etc.
    - import { AgmCoreModule } from '@agm/core';

    lalu import providers apikey google mapsnya di
    - @NgModule({
      imports: [
          AgmCoreModule.forRoot({
          apiKey: 'YOUR_KEY'
          })
      ])}

  -------------------------------------
  ## contoh penggunaan di komponent
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-maps',
      template: `
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
          <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
          </agm-marker>
        </agm-map>
      `
      styles: [`
          .agm-map-container {
            height: 300px;
          }
       `]
     }),

     export class MapComponent implements OnInit {
       lat: number = -0.789275;
       lng: number = 113.921327;
       zoom: number = 5;

       constructor(){ }
     }
*/

@Component({
  selector: 'app-map',
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [scrollwheel]="false" [disableDefaultUI]="true" [streetViewControl]="false">
    <agm-marker *ngFor="let a of data ; let i = index" [visible]="true" (mouseOver)="Showinfobox(i)" (mouseOut)="hiddeninfobox()" (markerClick)="clickedMarker(a)" [latitude]="a.latitude" [longitude]="a.longitude" [iconUrl]="a.iconUrl">
      <agm-info-window [disableAutoPan]="true" [isOpen]="showbox == i">
        <div class="col-md-12" align="center">
          <strong>{{a.label}}</strong>
          <div *ngIf="a.type == 'Store'">
            <br>
            <strong> KWH   : 0,00 WH</strong><br>
            <strong> W/T/H : 0,00 W/ 29 C/ 73%</strong><br>
            <br>
            <button md-mini-fab color="accent">0</button>&nbsp;
            <button md-mini-fab color="warn">2</button>
            <br><br>
          </div>
        </div>
      </agm-info-window>
    </agm-marker>
  </agm-map>
  `,
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  constructor(public router:Router) { }

  /**
    fungsi dari imput getProvince adalah untuk mengambil data pertama untuk marker parent
    sehingga ketika maps di jalankan akan terdapat marker province karena dalam data getProvince
    sudah terdapat latitude, longitude dan zoom province tersebut,
    exp/. DKI Jakarta, Jawa Barat
  */
  @Input() getProvince:Array<any>;

  /**
    fungsi dari input getZoneMaps adalah untuk menjalankan hasil filtering dari komponent filtering yang sudah diproses dan
    akan di inputkan ke getZoneMaps, jadi ketika kita sudah melakukan filtering province maka akan mengirimkan
    data child/zone di province tersebut
    exp/. jika filtering memiilih DKI jakarta, maka DKI jakarta akan mengfilter child/zonenya
          dan province akan menjadi parent, latitude, longitude dan zoom yang akan digunakan sebagai center maps tersebut.
          dan untuk childnya Jakarta Selatan, Jakarta Pusat akan menjadi marker di center mapsnya

          - DKI Jakarta(parent/ center maps) - Jakarta Selatan (child/marker di center maps)
                                             - Jakarta Pusat (child/marker di center maps)

    # data di atas di kirim sudah termasuk alarm di lokasi store, jadi jika suatu store jika mengalami alarm
      maka parent diatasnya (DKI Jakarta - Jakarta Selatan - Kebayoran Lama - *Store) akan mengalami alarm dengan perubahan
      icon marker yang sudah didetailkan berdasarkan kondisi alarm
  */
  @Input() getZoneMaps:Array<any>;

  /**
    fungsi dari Output pushMarker adalah untuk mengirimkan data filtering yang dihasilkan dari klik marker yang kita pilih,
    data tersebut akan dikirim ke komponen maps-filter dan proses filtering akan dijalankan disana.
  */
  @Output() pushMarker = new EventEmitter<any>();
  data:any;

  /*
    fungsi dari lat, lng dan zoom adalah data yang akan digunakan pertama kali sebagai maps center
  */
  lat: number = -0.789275;
  lng: number = 113.921327;
  zoom: number = 5;

  showbox:any;

  /**
    fungsi dari Showinfobox adalah fungsi yang akan menjalankan ketika marker di mouseover
  */
  Showinfobox(i){
    this.showbox = i;
  }

  /**
    fungsi dari hiddeninfobox adalah fungsi yang akan menjalankan ketika pointer akan di mouseOut
  */
  hiddeninfobox(){
    this.showbox = "Hidden";
  }

  /**
    fungsi dari clickedMarker adalah fungsi yang akan menjalankan filtering di maps marker ketika di pilih/klik
    maka data parameter itu akan di emit/output ke component lain sehinnga akan dilakukan filtering.
  */
  clickedMarker(event){
    this.pushMarker.emit(event);
  }

  /**
    fungsi dari parent adalah digunakan oleh maps sebagai maps center(latitude, longitude, zoom)
  */
  parent (){
    for (let _i of this.getZoneMaps[0].parent){
      this.lat  = _i.latitude;
      this.lng  = _i.longitude;
      this.zoom = _i.zoom;
    }
  }

  /**
    fungsi dari Children adalah digunakan untuk marker di maps
  */
  Children (){
    this.data = this.getZoneMaps[0].children;
  }

  ngOnChanges(){
    this.data = this.getProvince;
    if (this.getZoneMaps != undefined){
      this.parent();
      this.Children();
    }
  }

}
