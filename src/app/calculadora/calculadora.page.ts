import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage  {

  constructor(public navCtrl: NavController) { }

  result=0;
  band=0;
  arreglo=[];
  num(num){
    this.arreglo.push(num);
    if(this.band==0){
      this.band=1;
      this.result=num;
    }else
    this.result+=num;

  }

  aritmetic(sim){
    this.arreglo.push(sim)
    this.band=0;
  }

  clear(){
    this.arreglo=[];
    this.result=0;
  }

  igual(){
    this.result=eval(this.arreglo.join(''))
    this.band=0;
  }


 
}