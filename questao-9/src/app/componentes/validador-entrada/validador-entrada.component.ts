import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
