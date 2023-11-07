import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: Observable<any>;

  constructor(private fireauth:AngularFireAuth, private router: Router) {
    this.currentUser$ = this.fireauth.authState;
  }


  //methode connexion
  login(email: string, passe: string) {
    this.fireauth.signInWithEmailAndPassword(email, passe)
      .then(() => {
        localStorage.setItem("token", "true");
        alert('connexion reussit');
        this.router.navigate(['/ajouterRestaurent']);
      })
      .catch((error) => {
        console.log('Erreur d\'authentification :', error.message);
        this.router.navigate(['/login']);
      });
  }


  //methode deconnexion
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    },err=>{
      alert(err.message);
    })
  }

  register(email:string,passe:string){

    // email="mledgk@gmail.com";
    // passe="fdgazeetyty"
    console.log(email,passe);
    this.fireauth.createUserWithEmailAndPassword(email,passe).then(()=>{
      this.router.navigate(["/login"]);
    },err=>{
      alert(err.message);
      this.router.navigate(["/ajouterRestaurent"]);
    })
  }


}
