import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../tools/animations";

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ["./ceo.component.css"],
  animations : [ routerTransition ]
})
export class CeoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    getState(outlet) {
	    return outlet.activatedRouteData.state;
	}

}
