import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'BkoDelices';

  // constructor(private firestore:Firestore){}

  // AddData(r:any){
  //   const collectionInstance= collection(this.firestore, 'restautrents');
  //   addDoc(collectionInstance,r.value).then(()=>{
  //     console.log('restaurent ajouter avec succes')
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
}
