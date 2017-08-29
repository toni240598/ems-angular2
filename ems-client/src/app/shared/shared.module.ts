import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertPipe } from './pipes/convert.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertPipe
  ],
  exports : [
  	ConvertPipe
  ]
})
export class SharedModule { }
