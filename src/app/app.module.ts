import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarregandoComponent } from './components/carregando/carregando.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    MenuComponent,
    CarregandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
