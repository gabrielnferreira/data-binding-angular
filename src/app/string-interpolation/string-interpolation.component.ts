import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    name: "Gabriel",
    lastname: "Ferreira",
    age: 23,
    address: "Routes"
  }

  colors = ['primary', 'accent', 'warn', '']
  qtdClick = 0
  btnClick = "Não clicou ainda"
  enabled = "Habilitar?"
  disabled = "Desabilitar?"
  enableButton = this.disabled
  btnDisabled = true
  i = 2
  setSpinnerMode = "determinate"
  valueSpinner = 0

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.i = (this.i + 1) % this.colors.length
    }, 1000)
  }

  setDisabled(): void {
    this.btnDisabled = !this.btnDisabled
    this.btnClick = "Você clicou " + (++this.qtdClick) + " vezes"
    if (!this.btnDisabled) this.enableButton = this.enabled
    else this.enableButton = this.disabled
    this.setSpinnerMode = "indeterminate"
    setTimeout(() => {
      this.setSpinnerMode = "determinate"
    }, 2000)

    this.valueSpinner = this.valueSpinner + 20
  }

  cbChange(event) {
    console.log(event)
  }

}

