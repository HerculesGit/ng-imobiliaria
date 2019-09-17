import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { PessoaFisica } from './pessoaFisica';
import { PessoaJuridica } from './pessoaJuridica';
import { Endereco } from '../endereco';
import { TipoCliente } from './tipoCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[]

  constructor() {
    //this.criaTresClientesPessoaFisicaEmMemoria()
    //this.criaTresClientesPessoaJuridicaEmMemoria()
    // this.printarUsuariosNoConsoleLog()
  }

  remover(cliente: Cliente) {
    let index: number = this.clientes.indexOf(cliente);
    this.clientes.splice(index, 1);
  }

  public getAllClientes(): Cliente[] {
    let amanda: Cliente = new PessoaFisica('473.173.571-89');
    let kelvin: Cliente = new PessoaJuridica('20.844.166/0001-00');
    let bianca: PessoaJuridica = new PessoaJuridica('884.891.664-39')

    kelvin.id = 1
    kelvin.nomeCompleto = 'Kevin Danilo Alexandre da Conceição'
    kelvin.RG = '35.690.650-4';
    kelvin.email = 'kevindaniloalexandredaconceicao-71@cteep.com.br'
    kelvin.orgaoExpeditor = 'ML/SS'
    kelvin.profissao = 'Marcador de HTML'
    kelvin.telefone = '(67) 3993-0938'
    kelvin.endereco = new Endereco('Rua dos Cerrados', '134', 'Parque Jardim das Exposições', 'Ponta Porã', 'MS');
    kelvin.tipoCliente = TipoCliente.LOCADOR;

    amanda.id = 2
    amanda.nomeCompleto = 'Amanda Elaine Rosângela Teixeira';
    amanda.RG = '45.010.836-3';
    amanda.email = 'amandaelainerosangelateixeira_@power.alstom.com';
    amanda.telefone = '(67) 99927-5843'
    amanda.orgaoExpeditor = 'SAA';
    amanda.profissao = 'Desenvolvedora back-end'
    amanda.endereco = new Endereco('Rua VS-010', '123', 'Setor Morada do Sol', 'Gurupi', 'TO');
    amanda.tipoCliente = TipoCliente.LOCATARIO;

    bianca.id = 100
    bianca.nomeCompleto = 'Bianca Luna Galvão';
    bianca.RG = '41.799.620-2';
    bianca.email = 'biancalunagalvao..biancalunagalvao@mosman.com.br';
    bianca.telefone = '(92) 2613-3404'
    bianca.orgaoExpeditor = 'MA/SSP';
    bianca.profissao = 'Desenvolvedora front-end'
    bianca.endereco = new Endereco('Beco Galiléia', '521', 'Novo Israel', 'Manaus', 'AM');
    bianca.tipoCliente = TipoCliente.LOCADOR;


    this.clientes = []
    // console.log(this.clientes.length)
    this.clientes.push(amanda, kelvin, bianca)
    console.log(this.clientes.length)
    return this.clientes;
  }


  // ======== Métodos temporários ======== 
  private criaTresClientesPessoaFisicaEmMemoria(): void {
    let joao: Cliente = new PessoaFisica('154.154.154-15')
    let maria: Cliente = new PessoaFisica('123.123.123-12')
    let eduarda: Cliente = new PessoaFisica('456.456.456-45')

    this.clientes = [
      joao, maria, eduarda
    ]
  }

  private criaTresClientesPessoaJuridicaEmMemoria() {
    let hermanoteu: Cliente = new PessoaJuridica('45.000.111.0010-45')
    let luciano: Cliente = new PessoaJuridica('79.379.491.0008-50')
    let laryssa: Cliente = new PessoaJuridica('88.888.888.8885-88')

    this.clientes.push(hermanoteu)
    this.clientes.push(luciano)
    this.clientes.push(laryssa)
  }

  private printarUsuariosNoConsoleLog(): void {
    this.clientes.forEach(element => {
      console.log(element)
    });
  }

}
