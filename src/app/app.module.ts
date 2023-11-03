import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Import du module AngularFireAuthModule
import { environnement } from '../environnement';
import { AjoutRestauComponent } from './component/ajout-restau/ajout-restau.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; // Assurez-vous que le chemin est correct
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { ListeResaturantsComponent } from './component/liste-resaturants/liste-resaturants.component';
import { AccueilResraurantComponent } from './ForAdlinRestaurants/accueil-resraurant/accueil-resraurant.component';


@NgModule({
  declarations: [
    AppComponent,
    AjoutRestauComponent,
    LoginComponent,
    ListeResaturantsComponent,
    AccueilResraurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environnement.firebase), // Initialisation de AngularFireModule avec la configuration Firebase
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp({"projectId":"bkodelices","appId":"1:160510886328:web:028e8198aefc1a6b61cf4d","storageBucket":"bkodelices.appspot.com","apiKey":"AIzaSyAloSIV9pNStqYWzHjEA9OLYZtFR7PGTqA","authDomain":"bkodelices.firebaseapp.com","messagingSenderId":"160510886328"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()) // Inclusion du module AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
