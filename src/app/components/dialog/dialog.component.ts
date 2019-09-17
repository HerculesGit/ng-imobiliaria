import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Cliente } from 'src/app/cliente/cliente';
import { PessoaFisica } from 'src/app/cliente/pessoaFisica';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
  // animacao do propio angular
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  // @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Poderia utilizar Input("dados") assim, no template dialog.component.html, quando chamado, ficaria
  // <app-dialog [dados]></app-dialog> mas não é uma boa prática.
  // Pronto! Desta forma podemos passar, não significa que você sempre precisa passar, mas sempre que quiser, passe

  @Input() recebeCliente;

  @Output()
  isRemover = new EventEmitter<boolean>();

  constructor() {
  }

  feedback() {
    this.isRemover.emit(true)
  }

  ngOnInit() {
    console.log('>>>>' + this.recebeCliente)
  }
}