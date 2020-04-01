import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  names = [
    "Gabriel",
    "Natália",
    "Diego",
    "Mãe"
  ]

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Belo Horizonte", state: "BH" },
    { name: "Paraná", state: "PR" }
  ]

}
