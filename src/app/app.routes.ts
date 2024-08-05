import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { DatosUsuariosComponent } from './home/datos-usuarios/datos-usuarios.component';
import { canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { RegistroComponent } from './registro/registro.component';
import { PruebasComponent } from './pruebas/pruebas.component';


export const routes: Routes = [
    {path:"",redirectTo :"home", pathMatch:"full"},
    {path: "home", component:HomeComponent},
    {path: "registro", component:RegistroComponent},
    {path: "datos", component:DatosUsuariosComponent,...canActivate(()=>redirectUnauthorizedTo(["home"]))},
    {path: "pruebas", component:PruebasComponent},


    
];


NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRoutingModule{}
