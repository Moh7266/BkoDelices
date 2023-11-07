import { Component } from '@angular/core';
import { AjoutRestauComponent } from '../ajout-restau/ajout-restau.component';
import { Firestore,addDoc, collection, collectionData,deleteDoc, doc, setDoc, snapToData } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { getDownloadURL, getStorage, ref } from '@angular/fire/storage';


@Component({
  selector: 'app-liste-resaturants',
  templateUrl: './liste-resaturants.component.html',
  styleUrls: ['./liste-resaturants.component.css']
})
export class ListeResaturantsComponent {
  Restau!:any
  constructor(
    private firestore:Firestore,
    private FireStorage: AngularFireStorage,
    private fireauth:AngularFireAuth,
    private router: Router,
    private authService:AuthService){
    this.GetData();
  }

  GetData(){
    const collectionInstance= collection(this.firestore, 'restaurants');
    collectionData(collectionInstance, {idField:'id'})
    .subscribe(val=>{
      val.forEach((element)=>{
    const storage = getStorage();
    const starsRef =    ref(storage, 'images/'+element.id);
    getDownloadURL(starsRef)
    .then((url) => {
      element['fileInput']=url
    }) })
      console.log(val);
      this.Restau = val;
    });

    // =collectionData(collectionInstance, {idField:'id'});
  }
}
