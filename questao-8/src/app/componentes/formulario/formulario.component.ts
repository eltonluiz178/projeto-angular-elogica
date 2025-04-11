import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadorEntradaComponent, validarTelefone } from '../validador-entrada/validador-entrada.component';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ValidadorEntradaComponent,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  meuFormulario! : FormGroup;

  ngOnInit(){
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.meuFormulario = new FormGroup ({
      nome: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      telefone: new FormControl('',[Validators.required,validarTelefone()]),
      nascimento: new FormControl('',Validators.required),
    })
  }

  obterControle(nome: string): FormControl {
    const control = this.meuFormulario.get(nome);
    if (!control){
      throw new Error('Controle de formulário não encotrado:' + nome)
    }
    return control as FormControl;
  }
}
