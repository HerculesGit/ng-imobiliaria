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
  nomeClienteADeletar: string;


  clienteADeletar: Cliente;

  constructor(private service: ClienteService) {
    this.clientes = this.service.getAllClientes();
  }

  ngOnInit() {
    this.clientes = this.service.getAllClientes();
  }

  reciverFeedback(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
    this.remover(this.clienteADeletar);
  }

  remover(cliente: Cliente): void {
    this.service.remover(cliente);
  }

  editar(index: number, cliente: Cliente) {
    this.service.editar(index, cliente);
  }

  setarClienteADeletar(cliente: Cliente) {
    this.clienteADeletar = cliente;
    console.log('parametro: ' + cliente.nomeCompleto)
  }

}
