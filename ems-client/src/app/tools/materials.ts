import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	MdTabsModule, 
	MdIconModule,
	MdTooltipModule 
} from "@angular/material";
import "hammerjs";

@NgModule({
	exports : [
		MdTabsModule,
		MdIconModule,
		MdTooltipModule
	]
})

export class MaterialModule {}