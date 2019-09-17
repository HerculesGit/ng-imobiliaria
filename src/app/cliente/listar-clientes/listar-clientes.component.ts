import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  private clientes: Cliente[];
  constructor(private service: ClienteService) {
    this.clientes = this.service.getAllClientes();
  }

  ngOnInit() {
    this.clientes = this.service.getAllClientes();
  }

  remover(cliente: Cliente): void {
    this.service.remover(cliente);
  }

}
