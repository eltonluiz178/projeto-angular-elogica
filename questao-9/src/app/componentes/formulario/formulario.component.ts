import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadorEntradaComponent } from '../validador-entrada/validador-entrada.component';
import { MeuModalComponent } from '../meu-modal/meu-modal.component';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ValidadorEntradaComponent,
    ReactiveFormsModule,
    MeuModalComponent
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  meuFormulario!: FormGroup;

  ngOnInit(){
    const modalElement = document.getElementById('meuModal');
    if(modalElement){
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.meuFormulario = new FormGroup({
      nome: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      estado: new FormControl('',Validators.required),
      cidade: new FormControl('',Validators.required),
      instituicao: new FormControl('',Validators.required)
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
