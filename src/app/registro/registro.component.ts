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

import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,PruebasComponent,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  Formulario = new FormGroup({

    nombre : new FormControl(''),
    cedula : new FormControl('')

  })
 

  submit()
{
   console.log(this.Formulario.value);
}
 
}
