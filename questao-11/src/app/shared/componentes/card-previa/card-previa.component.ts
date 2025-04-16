import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-previa',
  standalone: true,
  imports: [],
  templateUrl: './card-previa.component.html',
  styleUrl: './card-previa.component.scss'
})
export class CardPreviaComponent {
@Input() pensamento: string = "";
@Input() autor: string = "";
@Input() modelo: number = 0;


constructor (){
}
}


