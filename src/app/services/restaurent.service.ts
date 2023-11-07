import { Injectable } from '@angular/core';
import { Restaurent } from '../interface/restaurent';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  restaurentsRef: AngularFireList<Restaurent>;

  constructor(private db: AngularFireDatabase) {
    this.restaurentsRef = this.db.list('/liste-restaurent');
  }
  addRestaurent(restaurent: Restaurent) {
    const restaurentWithId: Restaurent = { ...restaurent, $id: '' };
    this.restaurentsRef.push(restaurentWithId);
  }

  getRestaurent(id: string): AngularFireObject<Restaurent> {
    return this.db.object('/liste-restaurent/' + id);
  }

  getRestaurentListe(): AngularFireList<Restaurent> {
    return this.restaurentsRef;
  }

  updateRestaurent(restaurent: Restaurent) {
    this.getRestaurent(restaurent.$id).update({
      nom: restaurent.nom,
      nomAdmin: restaurent.nomAdmin,
      adresse: restaurent.adresse,
      email: restaurent.email,
      numero: restaurent.numero,
      pass: restaurent.pass
    });
  }

  deleteRestaurent(id: string) {
    this.getRestaurent(id).remove();
  }


  
}
