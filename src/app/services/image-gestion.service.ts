import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGestionService {

  constructor(private storage: AngularFireStorage) { }

  ajoutImage(image:File,path:string){
    const storageRef=this.storage.ref(path);
    const uploadTask=this.storage.upload(path,image);

    return uploadTask.snapshotChanges().pipe(
      finalize(()=>{
        return storageRef.getDownloadURL();
      })
    )
  }
}
