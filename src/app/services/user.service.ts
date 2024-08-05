import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { getStorage, uploadBytes,ref} from "firebase/storage";





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth, private router:Router) { }

  registro (nombre:any,cedula:any,ocupacion:any,email:any,password:any){
    return createUserWithEmailAndPassword (this.auth,email,password)
    .then(response =>
      {
     
        //sessionStorage.setItem("estatus",response.operationType);
        //console.log(response.operationType)
        return(response.operationType);
        
    
      })
    .catch(error => 
    {
      
      //console.log(error.message)
      //sessionStorage.setItem("estatus",error.message)
      return (error);
    })
    

  }

  login (email:any,password:any){
    return signInWithEmailAndPassword(this.auth,email,password)
    .then(response =>
    {
      //sessionStorage.setItem("estatus_login",response.operationType);
      //console.log(sessionStorage.getItem("estatus_login"));
      return(response.operationType);

    })
    .catch(error =>
    {
      sessionStorage.setItem("estatus_login",error);
      console.log(error);
  
    })
  }

  logout ()
  {
    return signOut(this.auth)
    .then(response =>
      {
        console.log(response);
      
      })
    .catch(error=>
      { 
        console.log(error);
      })
    
  }
  subir_foto(foto: File,cedula:string)
  {
       const storage = getStorage();
       console.log(foto);
        const fotoref = ref(storage,cedula);
        uploadBytes(fotoref,foto)
          .then((response) => console.log(response))
          .catch((error)=> console.log(error))
        
        
        
      
  }
}
