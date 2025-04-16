import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./shared/componentes/cabecalho/cabecalho.component";
import { FormularioComponent } from "./pages/formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabecalhoComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'questao-11';
}
