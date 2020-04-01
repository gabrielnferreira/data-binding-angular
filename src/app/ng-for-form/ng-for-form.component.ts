import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  person; 

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Belo Horizonte", state: "BH" },
    { name: "Paraná", state: "PR" }
  ];

  clients = [];

  constructor() { }

  ngOnInit(): void {
    this.setPerson();
  }

  setPerson(){
    this.person = {
      name: "",
      address: "",
      phone: "",
      city: "",
      age: 0
    }
  }
  save() {
    this.clients.push(this.person);
    console.log(this.clients);
    this.cancel();
  }

  cancel() {
    this.setPerson();
  }

  delete(index) {
    this.clients.splice(index, 1);
    console.log(this.clients);
  }
}
