import { Component } from '@angular/core';
import { Firestore,addDoc, collection, collectionData,deleteDoc, doc, setDoc, snapToData } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ImageGestionService } from 'src/app/services/image-gestion.service';
import { getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


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

  file1: File | undefined;

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   if(selectedFile){}
  //   console.log('Fichier sélectionné :', this.selectedFile);

  //   // Vous pouvez ajouter ici du code pour gérer le fichier sélectionné
  // }

  title = 'BkoDelices';
  user$=this.authService.currentUser$;


  constructor(
    private firestore:Firestore,
    private imageService: ImageGestionService,
    private FireStorage: AngularFireStorage,
    private fireauth:AngularFireAuth,
    private storage:AngularFirestore,
    private router: Router,
    private authService:AuthService){
    this.GetData();
  }

  onChange(event:any){
    console.log(event);

    this.selectedFile= event.target.files[0];
    if(this.selectedFile){

      const path = '${selectedFile.name}';
      console.log(path)
    }
  }

  // AddData(r:NgForm){
  //   console.log(r.value.password);
  //   const collectionInstance= collection(this.firestore, 'restautrents');
  //   addDoc(collectionInstance,r.value).then(()=>{
  //     this.authService.register(r.value.email,r.value.password);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }



  AddData(r: NgForm) {
    const data = r.value;
    const collectionInstance = collection(this.firestore, 'restaurants');
    this.fireauth.createUserWithEmailAndPassword(this.email,this.password).then((dataa)=>{

      const cityRef = doc(collectionInstance,dataa.user?.uid );
      setDoc(cityRef, data, { merge: true }).then(() => {
        const path = `images/${dataa.user?.uid}`;
        if (this.selectedFile) {
          const storage = getStorage();
          const newMetadata = {
            contentType: this.selectedFile.type
          };
          const storageRef = ref(storage, path);
            uploadBytes(storageRef, this.selectedFile,newMetadata).then((snapshot) => {
              console.log(snapshot.ref.fullPath);
            });
        }
        this.router.navigate(["/restaurants"]);
      }).catch((err) => {
        console.log(err);
      });
      // addDoc(collectionInstance, data).then((docRef) => {
      // }).catch((err) => {
      //   console.log(err);
      // });
    });


  }


  GetData(){
    const collectionInstance= collection(this.firestore, 'restaurants');
    collectionData(collectionInstance, {idField:'id'})
    .subscribe(val=>{
      console.log(val);
    })

    this.Restau=collectionData(collectionInstance, {idField:'id'});
  }

  DeleteData(id:string){
    const docInstance= doc(this.firestore, 'restaurants', id);
    deleteDoc(docInstance)
    .then(()=>{
      console.log('restaurent supprimmé.')
    })
  }

}
