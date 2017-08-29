import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertPipe } from './pipes/convert.pipe';
import { AreaComponent } from './components/area/area.component';
import { ItemComponent } from './components/item/item.component';

import { TabsModule } from "ngx-bootstrap";
import { MaterialModule } from "../tools/materials";
import { Draggable } from 'ng2draggable/draggable.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TabsModule.forRoot()
  ],
  declarations: [
    ConvertPipe,
    AreaComponent,
    ItemComponent,
    Draggable
  ],
  exports : [
  	ConvertPipe,
    AreaComponent,
    ItemComponent
  ]
})

export class SharedModule { }
