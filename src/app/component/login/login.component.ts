import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  passe:string="";

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(){
    if(this.email===""){
      alert("Entrez votre email");
      return;
    }
    if(this.passe===""){
      alert("Entrez votre mot de passe");
      return;
    }

    this.auth.login(this.email,this.passe);

    this.email="";
    this.passe="";
  }

}
