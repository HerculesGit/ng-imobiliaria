import { Cliente } from './cliente';
import { Endereco } from '../endereco';

export class PessoaJuridica extends Cliente {
    constructor(public CNPJ: string) {
        super(0, CNPJ, '', '', '', '', '', '', new Endereco('', '', '', '', ''), null)
    }
}