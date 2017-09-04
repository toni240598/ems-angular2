import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


import { MaterialModule } from "../tools/materials";
import { Draggable } from 'ng2draggable/draggable.directive';
import { Ng2Webstorage } from "ng2-webstorage";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { GaugeModule }  from "ng-gauge";
import { ChartModule } from 'angular-highcharts';
import { TabsModule, ModalModule } from "ngx-bootstrap";
import { AgmCoreModule } from '@agm/core';
import { ToasterModule } from "angular2-toaster";


//pipes
import { ConvertPipe } from './pipes/convert.pipe';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { FieldPipe } from "./pipes/field.pipe";

//services
import { LoopbackService } from "./services/loopback.service";
import { HistoryService } from "./services/history.service";
import { Loopbackv2Service } from "./services/loopbackv2.service";

//komponen
import { AreaComponent } from './components/area/area.component';
import { ItemComponent } from './components/item/item.component';
import { WidgetComponent } from './components/widget/widget.component';
import { FormComponent } from "./components/form/form.component";
import { TableComponent } from "./components/table/table.component";
import { ChartComponent } from "./components/chart/chart.component";
import { MapComponent   } from "./components/map/map.component";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    MaterialModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    Ng2Webstorage,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5DTq_C3F4HLDcRYbYPJKkVY4_Z16Xm5Y'
    }),
    ToasterModule,
    GaugeModule
  ],
  declarations: [
    Draggable,
    ConvertPipe,
    SortPipe,
    FilterPipe,
    FieldPipe,
    CapitalizePipe,
    
    AreaComponent,
    ChartComponent,
    FormComponent,
    ItemComponent,
    MapComponent,
    TableComponent,
    WidgetComponent,
  ],
  exports : [
  	ConvertPipe,
    SortPipe,
    FilterPipe,
    FieldPipe,
    CapitalizePipe,
    
    AreaComponent,
    ChartComponent,
    FormComponent,
    ItemComponent,
    MapComponent,
    TableComponent,
    WidgetComponent,
  ],
  providers : [HistoryService,LoopbackService,Loopbackv2Service]
})

export class SharedModule { }
