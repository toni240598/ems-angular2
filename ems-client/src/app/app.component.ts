import { Component } from '@angular/core';
import { routerTransition } from "./tools/animations";

@Component({
  selector: 'app-root',
  template: `
      <main [@routerTransition]="getState(o)">
	      <router-outlet #o="outlet"></router-outlet>
	  </main>
  `,
  animations :  [routerTransition],
  styles: []
})
export class AppComponent {
	getState(outlet) {
	    return outlet.activatedRouteData.state;
	}
}
