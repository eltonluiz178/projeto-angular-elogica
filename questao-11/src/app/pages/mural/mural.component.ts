import { Component, Input, OnInit } from '@angular/core';
import { CabecalhoComponent } from "../../shared/componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../shared/componentes/rodape/rodape.component";
import { CardPreviaComponent } from "../../shared/componentes/card-previa/card-previa.component";
import { Pensamento } from '../../shared/interfaces/pensamento';
import { Router, RouterModule } from '@angular/router';
import { MuralService } from '../../shared/service/mural.service';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, CardPreviaComponent, RouterModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.scss'
})
export class MuralComponent implements OnInit {
  @Input() paginaAtual: number = 1;
  @Input() quantidade: number = 9;
  totalRegistros: number = 0;
  totalPaginas: number = 0;
  paginas: number[] = [];

  constructor(private muralService: MuralService, private router: Router){}

  @Input() pensamentos: Pensamento[] = [];

  ngOnInit (){
    this.exibirPensamentos();
  }

  exibirPensamentos() {
    this.muralService.obterPensamentosPaginados(this.paginaAtual, this.quantidade).subscribe((pensamentos) => {
      this.pensamentos = pensamentos.pensamentos;
      this.totalRegistros = pensamentos.totalRegistros;

      this.totalPaginas = Math.max(1, Math.ceil(this.totalRegistros / 9));

      if (this.paginaAtual > this.totalPaginas) {
        this.paginaAtual = this.totalPaginas;
      }

      this.gerarArrayPaginas();
    });
  }

    gerarArrayPaginas() {
    this.paginas = [];
    const maxPaginasVisiveis = 9;

    let inicio = Math.max(1, this.paginaAtual - Math.floor(maxPaginasVisiveis / 2));
    let fim = Math.min(this.totalPaginas, inicio + maxPaginasVisiveis - 1);


    if (fim - inicio + 1 < maxPaginasVisiveis) {
      inicio = Math.max(1, fim - maxPaginasVisiveis + 1);
    }

    for (let i = inicio; i <= fim; i++) {
      this.paginas.push(i);
    }
  }

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas && pagina !== this.paginaAtual) {
      this.paginaAtual = pagina;
      this.exibirPensamentos();
      window.scrollTo(0, 0); // Opcional: rolar para o topo
    }
  }

  editarPensamento(pensamento: Pensamento){
    this.router.navigate(['/formulario'], {
      state: { pensamento }
    });
  }

  excluirPensamento(pensamento: Pensamento){
    console.log(pensamento);

    this.muralService.excluirPensamento(pensamento.id).subscribe(() => {
      if (this.pensamentos.length === 1 && this.paginaAtual > 1) {
        this.paginaAtual--;
      }

      this.exibirPensamentos();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}
