import { Component, Input, input } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase,ref, onValue} from "firebase/database";
import { OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-datos-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './datos-usuarios.component.html',
  styleUrl: './datos-usuarios.component.css'
})
export class DatosUsuariosComponent {

  constructor(private router:Router,private userService:UserService){}
  


  //edula= "";
  nombre ="";
  apellido= "";
  ocupacion ="";
  cedula ="";
  debug  = "";

  //cedula =sessionStorage.getItem("correo");
  url_foto = "";
  
  logout(){

    this.userService.logout();
    this.router.navigate(["home"]);
}
  
  ngOnInit()
  {
    
  initializeApp({

    projectId :'entrenamiento-db3b6',
    appId:'1:44239608741:web:23231fa6d8f1efd5a5264c',
    databaseURL:'https://entrenamiento-db3b6-default-rtdb.firebaseio.com/',
    storageBucket:'entrenamiento-db3b6.appspot.com',
    apiKey:'AIzaSyC9C_MbOsaQpdgIv2G8fjixItlrarQ7ezs',
    authDomain:'entrenamiento-db3b6.firebaseapp.com',
    messagingSenderId:'44239608741'})

    const db = getDatabase();
    const nombre = ref(db, 'email/'+sessionStorage.getItem("correo")+'/nombre');
    const apellido = ref(db, 'email/'+sessionStorage.getItem("correo")+'/apellido');
    const ocupacion = ref(db, 'email/'+sessionStorage.getItem("correo")+'/ocupacion');
    const cedula = ref(db, 'email/'+sessionStorage.getItem("correo")+'/cedula');




  
    
    onValue(nombre, (snapshot) => {

      const valor= snapshot.val() ;

      if (valor == null) 
      {
        this.debug = "Error usuario no encontrado";
        sessionStorage.setItem("error",this.debug)
        this.router.navigate(['page1']);
      }

      else 
      {

        sessionStorage.clear();
        this.nombre = valor.toString();

        onValue(apellido, (snapshot) => {
          const valor = snapshot.val() ;
          this.apellido = valor.toString() ;
    
        }); 
        onValue(ocupacion, (snapshot) => {
          const valor = snapshot.val() ;
          this.ocupacion = valor.toString() ;
    
        }); 
        onValue(cedula, (snapshot) => {
          const valor = snapshot.val() ;
          this.cedula = valor.toString() ;
          this.url_foto = 'https://firebasestorage.googleapis.com/v0/b/entrenamiento-db3b6.appspot.com/o/'+this.cedula+'?alt=media&token=f217b43a-02c4-4983-989c-c2fd059a46d0'
          console.log(this.url_foto)
          
    
        });

        
      }
     
    
      
    });   
    

  

}
 }