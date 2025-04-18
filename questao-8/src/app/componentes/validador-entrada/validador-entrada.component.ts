import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-validador-entrada',
  standalone: true,
  imports: [],
  templateUrl: './validador-entrada.component.html',
  styleUrl: './validador-entrada.component.css'
})
export class ValidadorEntradaComponent {
  @Input() control!: FormControl;

}

export function validarTelefone(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    
    const valido = telefoneRegex.test(control.value);
    
    return valido ? null : { telefoneInvalido: { value: control.value } };
  };
}

export function verificaData(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hoje = new Date();
    const valor = new Date(control.value);

    hoje.setHours(0, 0, 0, 0);
    valor.setHours(0, 0, 0, 0);

    return valor > hoje ? { dataFutura: true } : null;
  }
}