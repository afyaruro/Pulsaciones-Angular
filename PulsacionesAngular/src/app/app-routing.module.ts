import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { ConsultarComponent } from './consultar/consultar.component';


const routes: Routes = [
  { path: 'registrar', component:  RegistrarComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'consulta', component:  ConsultarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
