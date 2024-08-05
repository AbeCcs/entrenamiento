import { ApplicationModule, Component ,OnInit} from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase,ref,onValue } from "firebase/database";
import { FirebaseApp } from '@angular/fire/app';
import {Router} from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomeComponent } from '../home/home.component';
import { DatosUsuariosComponent } from '../home/datos-usuarios/datos-usuarios.component';




@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [DatosUsuariosComponent,CommonModule,NavBarComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  cedula= "";
  mensaje = "";

  constructor(private router:Router){}

  ngOnInit()
  {


    if (sessionStorage.getItem("error")== null) {
      
       this.mensaje= " " 
        
    } else {

      this.mensaje = " "+ sessionStorage.getItem("error");

    }

  }

   funcion()
  {
    
    const textInput = document.getElementById('textInput') as HTMLInputElement;
    this.cedula =  textInput.value;
  

    sessionStorage.setItem("cedula",this.cedula);
    this.router.navigate(['datos']);

  
    
    }
  }
    

