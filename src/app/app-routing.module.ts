import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoComponent } from './component/candidato/candidato.component';
import { ListadoComponent } from './component/listado/listado.component';
import { Error404Component } from './component/error404/error404.component';
import { DetalleComponent } from './component/detalle/detalle.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: CandidatoComponent },
  { path: 'candidato', component: CandidatoComponent },
  { path: 'lista', component: ListadoComponent },
  { path: 'lista/:id', component: DetalleComponent },
  { path: '404', pathMatch: 'full', component: Error404Component },
  { path: '**', redirectTo: '404' },
  //☠️ Aquí debajo //!nada de rutas, cualquier ruta nueva encima de //Pagina error!!!!!!!!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
