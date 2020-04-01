import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }
  users = [
    {login: "gab", role:"master", lastLogin: new Date('2/2/2020')},
    {login: "dsako", role:"admin", lastLogin: new Date('2/3/2020')},
    {login: "ruioqwe", role:"user", lastLogin: new Date('2/1/2020')}
  ]
  ngOnInit(): void {
  }

}
