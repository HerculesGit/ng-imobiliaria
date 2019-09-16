import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarregandoComponent } from './components/carregando/carregando.component';
import { ListasClientesPageComponent } from './cliente/listas-clientes-page/listas-clientes-page.component';
import { EditarClienteComponentComponent } from './cliente/editar-cliente-component/editar-cliente-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    MenuComponent,
    CarregandoComponent,
    ListasClientesPageComponent,
    EditarClienteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
