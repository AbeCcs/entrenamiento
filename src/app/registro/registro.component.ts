import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { set, getDatabase, ref} from 'firebase/database';
import { initializeApp} from "firebase/app";
import {Database } from '@angular/fire/database';
import { Auth, signOut } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { PruebasComponent } from '../pruebas/pruebas.component';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,PruebasComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  nombre = "";
  apellido= "";
  cedula = "";  
  ocupacion = "";  
  correo = "";  
  password = "";
  mensaje ="";
  foto : any;
  cargando = false;



  constructor(private userService:UserService,private router:Router) {}

   
  registrar(){

    
     
  

    const txt1 = document.getElementById('nombre') as HTMLInputElement;
    const txt2 = document.getElementById('apellido') as HTMLInputElement;
    const txt3 = document.getElementById('cedula') as HTMLInputElement;
    const txt4 = document.getElementById('ocupacion') as HTMLInputElement;
    const txt5 = document.getElementById('correo') as HTMLInputElement;
    const txt6 = document.getElementById('password') as HTMLInputElement;
    const photo = document.getElementById("foto") as HTMLInputElement;

    this.nombre =  txt1.value;
    this.apellido =  txt2.value;
    this.cedula =  txt3.value;
    this.ocupacion =  txt4.value;
    this.correo =  txt5.value;
    this.password =  txt6.value;
    this.foto =  photo.files;

    this.userService.registro(this.nombre,this.cedula, this.ocupacion,this.correo,this.password)
    .then(response =>  {

      const respuesta = response;
      this.datos_usuario(respuesta);
      this.cargando =false;

    })
    .catch(error =>{
      console.log("Error aqui")

    })

      this.cargando =true;
  

  }


  datos_usuario(respuesta:any){

    
    if (respuesta == "signIn") {

      this.mensaje = "El usuario ha sido registrado con exito";

      initializeApp({

        projectId :'entrenamiento-db3b6',
        appId:'1:44239608741:web:23231fa6d8f1efd5a5264c',
        databaseURL:'https://entrenamiento-db3b6-default-rtdb.firebaseio.com/',
        storageBucket:'entrenamiento-db3b6.appspot.com',
        apiKey:'AIzaSyC9C_MbOsaQpdgIv2G8fjixItlrarQ7ezs',
        authDomain:'entrenamiento-db3b6.firebaseapp.com',
        messagingSenderId:'44239608741'})
        const db = getDatabase();
        const referencia = ref(db,'email/'+this.correo.substring(0,(this.correo.length)-4));
    
        const userData = {
    
          nombre: this.nombre,
          apellido: this.apellido,
          ocupacion: this.ocupacion,
          cedula: this.cedula,
      
        }
        set(referencia,userData);

// para la foto---------------------------------------------

        
      this.userService.subir_foto(this.foto[0],this.cedula)

      

        //const fotoref = ref(storage, this.cedula +'.jpg');

//---------------------------------------------------
        this.userService.logout();
        this.router.navigate(["home"]);

            
          //push(referencia)
      
    } else {

      this.mensaje = respuesta;

    }

  
  }
}
