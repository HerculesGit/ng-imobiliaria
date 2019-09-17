import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { ListasClientesPageComponent } from "./cliente/listas-clientes-page/listas-clientes-page.component";
import { LoginComponent } from './pages/login/login.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  // sugestao de implementacao {path: '**', component: PageNotFoundComponent },
  { path: 'clientes', component: ListasClientesPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editar', component: EditarClienteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
