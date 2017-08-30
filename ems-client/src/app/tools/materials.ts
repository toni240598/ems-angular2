import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	MdTabsModule, 
	MdIconModule,
	MdTooltipModule,
	MdSelectModule,
	MdPaginatorModule,
	MdDatepickerModule,
	MdInputModule 
} from "@angular/material";
import "hammerjs";

@NgModule({
	exports : [
		MdTabsModule,
		MdIconModule,
		MdTooltipModule,
		MdSelectModule,
		MdPaginatorModule,
		MdDatepickerModule,
		MdInputModule
	]
})

export class MaterialModule {}