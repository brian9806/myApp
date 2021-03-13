import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  

  guardarDatos() {
    console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.celular)
    console.log(this.email)
    this.usuarios.push({
      //Agregando datos a la base de datos en memoria
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      email: this.email
    })
    //limpiando datos
    this.nombre = "";
    this.apellido = "";
    this.celular = "";
    this.email = "";
    console.log(this.usuarios);
  }


  eliminarDatos(index){
    this.usuarios.splice(index, 1)
  
    }
    
  constructor(public navCtrl: NavController, public alertCtrl: AlertController){}
  async editarDatos(index: string | number) {
    let alert = this.alertCtrl.create({
        header: '¿Desea editar datos?',
        message: 'Escriba sus nuevos datos ha actualizar.',
        inputs: [{ name: 'nombre', placeholder: 'Nombre' },
        {name: 'apellido', placeholder:'Apellido'},
        {name:'celular', placeholder:'Celular'},
        {name:'email', placeholder:'Email'}],
        
        
        buttons: [{ text: 'Cancelar', role: 'cancelar' },
                  { text: 'Guardar', handler: data => {
                      this.usuarios[index] = data.nombre; 
                      this.usuarios[index] = data.apellido;
                      this.usuarios[index] = data.celular;
                      this.usuarios[index] = data.email;}
                      
                  }
                 ]
    });
    (await alert).present();
 
}
  

}

  