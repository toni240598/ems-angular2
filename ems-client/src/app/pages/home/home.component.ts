import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../tools/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations : [routerTransition],
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

   ngOnInit() {
   }
   getState(outlet) {
       return outlet.activatedRouteData.state;
   }
  
}
