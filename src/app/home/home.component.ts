import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { PruebasComponent } from '../pruebas/pruebas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatosUsuariosComponent,CommonModule,NavBarComponent,PruebasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

correo = "";
password="";
mensaje="";
cargando =false;

constructor(private userService:UserService,private router:Router) {}
  
  login()
  {
    const txt1 = document.getElementById('correo') as HTMLInputElement;
    const txt2 = document.getElementById('password') as HTMLInputElement;
    this.correo =  txt1.value;
    this.password =  txt2.value;
    sessionStorage.setItem("correo",this.correo.substring(0,(this.correo.length)-4));
    this.userService.login(this.correo,this.password).then(response => 
    {
      const respuesta :any = response
      if (respuesta == "signIn") 
      {
        this.router.navigate(["datos"]);
      }
      else this.cargando =false;
    }
    )

    
    this.cargando = true;

    this.mensaje="Mensaje:"+sessionStorage.getItem("estatus_login");

  }

  registrar(){

    /*const txt1 = document.getElementById('correo') as HTMLInputElement;
    const txt2 = document.getElementById('password') as HTMLInputElement;
    this.correo =  txt1.value;
    this.password =  txt2.value;
    this.userService.registro(this.correo,this.password);
    this.mensaje = sessionStorage.getItem("estatus_registro")+"";*/
    this.router.navigate(["registro"])

  }



}
  


  