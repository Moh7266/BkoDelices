import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutRestauComponent } from './component/ajout-restau/ajout-restau.component';
import { LoginComponent } from './component/login/login.component';
import { ListeResaturantsComponent } from './component/liste-resaturants/liste-resaturants.component';


const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"ajouterRestaurent", component:AjoutRestauComponent},
  {path:"restaurants", component: ListeResaturantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
