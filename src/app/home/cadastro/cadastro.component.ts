import { Component } from '@angular/core';

@Component({
  selector: 'spa-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {


  nomeValor: string = '';
  emailValor: string = '';
  mostraAdc = false;

  adciona(): void {

    this.nomeValor = this.nomeValor;
    this.emailValor = this.emailValor;
     console.log('teste', this.nomeValor );
     this.mostraAdc = true;
  }
}
