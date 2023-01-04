import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  num1!:number;
  num2!:number;
  resultado:string="no eligio una opción";
  operacion!:string;
  verificacion!:boolean;
  mensaje!:string;
  calcular(oper:string){
    //validacion
    if(this.num1==0 || this.num1==null){
      this.verificacion=false;
      this.mensaje="Ingresar numero 1";
      return
    }else if(this.num2==0 || this.num2==null){
      this.verificacion=false;
      this.mensaje="Ingresar numero 2";
      return
    }else{
      this.verificacion=true;
    }
    //calcular
    if(oper=="+"){
      this.resultado = String(this.num1 + this.num2) ;
      this.operacion="+"
    }else if(oper=="-"){
      this.resultado=String(this.num1 - this.num2);
      this.operacion="-"
    }else if(oper=="*"){
      this.resultado=String(this.num1 * this.num2);
      this.operacion="*"
    }else if (oper=="/"){
      this.resultado=String(this.num1 / this.num2);
      this.operacion="/"
    }else if(oper==""){
      this.resultado="no eligio una opcion";
      this.operacion="";
    }
  }


}
