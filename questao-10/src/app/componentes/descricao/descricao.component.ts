import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  @Input() usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.exibirUsuarios();
  }

  exibirUsuarios(){
    this.usuarioService.buscarUsuarios().subscribe({
      next:(listaUsuarios) => {
      this.usuarios = listaUsuarios;
    }});
  }
}
