import { Endereco } from '../endereco';
import { TipoCliente } from './tipoCliente';

export abstract class Cliente {

    constructor(
        public id: number,
        public cpfCnpj: string,
        public nomeCompleto: string,
        public RG: string,
        public orgaoExpeditor: string,
        public telefone: string,
        public email: string,
        public profissao: string,
        public endereco: Endereco,
        public tipoCliente: TipoCliente) { }
}