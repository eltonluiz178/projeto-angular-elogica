import { Pensamento } from './../../shared/interfaces/pensamento';
import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../shared/componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../shared/componentes/rodape/rodape.component";
import { CardPreviaComponent } from "../../shared/componentes/card-previa/card-previa.component";
import { Router, RouterModule } from '@angular/router';
import { ValidadorFormularioComponent } from "../../shared/componentes/validador-formulario/validador-formulario.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MuralService } from '../../shared/service/mural.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, CardPreviaComponent, RouterModule, ValidadorFormularioComponent, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  formulario!: FormGroup;
  private pensamento: Pensamento | null = null;
  editando: boolean = false;

  constructor(private muralService: MuralService, private router: Router) {

  }

  ngOnInit() {
    this.inicializarFormulario();

    const state = window.history.state;

    if (state && state.pensamento) {
      setTimeout(() =>  {
      this.formulario.patchValue({
        pensamentoNome: state.pensamento.pensamentoNome,
        autor: state.pensamento.autor,
        modelo: state.pensamento.modelo.toString()
      });
      this.pensamento = state.pensamento;
      this.editando = true;});
    }
  }

  inicializarFormulario() {
    this.formulario = new FormGroup({
      pensamentoNome: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required)
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.formulario.get(nome);
    if (!control) {
      throw new Error('Controle de formulário não encotrado:' + nome)
    }
    return control as FormControl;
  }

  salvarPensamento() {
    if (this.formulario.invalid) return;

    var pensamento: Pensamento = this.formulario.value;
    if(this.pensamento){
    pensamento.id = this.pensamento.id;
    }

    if (this.editando && this.pensamento != null) {
      this.muralService.editarPensamento(pensamento).subscribe(() => {
        this.router.navigateByUrl('/mural');

      });
    }
    else {
      this.muralService.adicionarPensamento(pensamento).subscribe(() => {
        this.router.navigateByUrl('/mural');
      });
    }
  }
}
