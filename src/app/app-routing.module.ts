import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutRestauComponent } from './component/ajout-restau/ajout-restau.component';
import { LoginComponent } from './component/login/login.component';
import { ListeResaturantsComponent } from './component/liste-resaturants/liste-resaturants.component';
import { AjoutSuperAdminComponent } from './SuperAdmin/ajout-super-admin/ajout-super-admin.component';
import { ListAdminComponent } from './SuperAdmin/list-admin/list-admin.component';
import { HeaderComponent } from './parties/header/header.component';
import { HeaderUserComponent } from './parties/header-user/header-user.component';


const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"header",component:HeaderComponent},
  {path:"ajouterRestaurent", component:AjoutRestauComponent},
  {path:"restaurants", component: ListeResaturantsComponent},
  {path:"ajoutSuper", component: AjoutSuperAdminComponent},
  {path: "listAdmin", component: ListAdminComponent},
  { path:"headerU", component:HeaderUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
