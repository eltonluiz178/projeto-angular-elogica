import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validador-formulario',
  standalone: true,
  imports: [],
  templateUrl: './validador-formulario.component.html',
  styleUrl: './validador-formulario.component.scss'
})
export class ValidadorFormularioComponent {
  @Input() control!: FormControl;
}
