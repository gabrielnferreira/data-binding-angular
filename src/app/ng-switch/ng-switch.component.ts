import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  fieldname = "button";

  ngOnInit(): void {
  }
  change(){
    console.log(this.fieldname);
  }
}
