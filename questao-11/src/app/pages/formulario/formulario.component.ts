import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../shared/componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../shared/componentes/rodape/rodape.component";
import { CardPreviaComponent } from "../../shared/componentes/card-previa/card-previa.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, CardPreviaComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

}
