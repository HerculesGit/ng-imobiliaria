import { Cliente } from './cliente';
import { Endereco } from '../endereco';

export class PessoaFisica extends Cliente {
    constructor(private CPF: string) {
        super(0, CPF, '', '', '', '', '', '', new Endereco('', '', '', '', ''), null)
    }
}