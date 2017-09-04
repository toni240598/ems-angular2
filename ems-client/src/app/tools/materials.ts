import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	  MdSelectModule,
	  MdTableModule,
	  MdPaginatorModule,
	  MdInputModule,
	  MdButtonModule,
	  MdTooltipModule,
	  MdIconModule,
	  MdDatepickerModule,
	  MdTabsModule,
	  MdToolbarModule,
	  MdNativeDateModule
} from "@angular/material";
import "hammerjs";

@NgModule({
	exports : [
	  MdSelectModule,
	  MdTableModule,
	  MdPaginatorModule,
	  MdInputModule,
	  MdButtonModule,
	  MdTooltipModule,
	  MdIconModule,
	  MdDatepickerModule,
	  MdTabsModule,
	  MdToolbarModule,
	  MdNativeDateModule,
	  BrowserAnimationsModule
	]
})

export class MaterialModule {}