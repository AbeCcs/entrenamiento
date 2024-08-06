import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { set, getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { Database } from '@angular/fire/database';
import { Auth, signOut } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { PruebasComponent } from '../pruebas/pruebas.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { Apollo, MutationResult } from 'apollo-angular';
import { gql } from 'apollo-angular';





@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, PruebasComponent, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private readonly apollo: Apollo) { }

  mutacion = gql`
  mutation
{
  crearRegistro(
    postInput:
    {
      id_propietario: 3
      cedula : 12121212	
      nombre: "Prueba"
    }
  )
  {
    id_propietario
    cedula
    nombre
  }
}
`;


  Formulario = new FormGroup({

    nombre: new FormControl(''),
    cedula: new FormControl('')

  })

campos:any
cedula:any
nombre:any

  submit() {

    console.log(this.Formulario.value);
    return this.apollo.mutate( {   mutation : gql`
      mutation
    {
      crearRegistro(
        postInput:
        {
          id_propietario: 3
          cedula : ${this.Formulario.value.cedula}
          nombre:  "${this.Formulario.value.nombre}"
        }
      )
      {
        id_propietario
        cedula
        nombre
      }
    }
    ` }).subscribe();

  }

  consulta(){
    
  this.apollo.query<{ consultarTodo: { nombre: string, id_propietario: number, cedula: number } }>({
      query: gql `{
        consultarTodo{
          id_propietario
          nombre
          cedula
        }
      }`
    }).subscribe(({data})=> 
      this.campos = data.consultarTodo

      )

  const txt = document.getElementById('id') as HTMLInputElement;

   this.nombre = this.campos[txt.value].nombre
   this.cedula =this.campos[txt.value].cedula
   console.log(this.campos)

}

}
