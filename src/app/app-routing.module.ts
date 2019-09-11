import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { ListasClientesPageComponent } from "./cliente/listas-clientes-page/listas-clientes-page.component";

const routes: Routes = [
  // sugestao de implementacao {path: '**', component: PageNotFoundComponent },
  { path: 'clientes', component: ListasClientesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
