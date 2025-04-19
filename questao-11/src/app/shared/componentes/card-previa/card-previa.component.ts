import { Pensamento } from './../../interfaces/pensamento';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MuralService } from '../../service/mural.service';

@Component({
  selector: 'app-card-previa',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-previa.component.html',
  styleUrl: './card-previa.component.scss'
})
export class CardPreviaComponent {
  @Input() pensamentoNome: string = "";
  @Input() autor: string = "";
  @Input() modelo: number = 0;
  @Input() id: number = 0;
  @Input() telaMural: boolean = true;

  @Output() editar = new EventEmitter<Pensamento>();
  @Output() excluir = new EventEmitter<Pensamento>();


  constructor(private muralService: MuralService) {
  }

  retornaPensamento(): Pensamento{
    var pensamento: Pensamento = {
      pensamentoNome : this.pensamentoNome,
      autor : this.autor,
      modelo : this.modelo,
      id : this.id
    }
    return pensamento;
  }

  editarPensamento(){
    this.editar.emit(this.retornaPensamento());
  }

  excluirPensamento(){
    this.excluir.emit(this.retornaPensamento());
  }

  exibirAlerta(){
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deletado!', 'Seu arquivo foi deletado.', 'success');
        this.excluirPensamento();
      }
    });
  }
}


