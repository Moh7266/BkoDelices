import { Component } from '@angular/core';
import { Firestore,addDoc, collection, collectionData,deleteDoc, doc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireStorage} from '@angular/fire/compat/storage'


@Component({
  selector: 'app-ajout-restau',
  templateUrl: './ajout-restau.component.html',
  styleUrls: ['./ajout-restau.component.css']
})
export class AjoutRestauComponent {
  selectedFile: File | null = null;
  Restau!:Observable<any>
  email!: string;
  password!: string;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Fichier sélectionné :', this.selectedFile);
    // Vous pouvez ajouter ici du code pour gérer le fichier sélectionné
  }

  title = 'BkoDelices';
  user$=this.authService.currentUser$;


  constructor(private firestore:Firestore, private authService:AuthService){
    this.GetData();
  }

  AddData(r:NgForm){
    console.log(r.value.password);
    const collectionInstance= collection(this.firestore, 'restautrents');
    addDoc(collectionInstance,r.value).then(()=>{
      this.authService.register(r.value.email, r.value.password);
    }).catch((err)=>{
      console.log(err);
    })
  }

  GetData(){
    const collectionInstance= collection(this.firestore, 'restautrents');
    collectionData(collectionInstance, {idField:'id'})
    .subscribe(val=>{
      console.log(val);
    })

    this.Restau=collectionData(collectionInstance, {idField:'id'});
  }

  DeleteData(id:string){
    const docInstance= doc(this.firestore, 'restautrents', id);
    deleteDoc(docInstance)
    .then(()=>{
      console.log('restaurent supprimmé.')
    })
  }

}
