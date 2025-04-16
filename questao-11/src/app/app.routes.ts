import { Routes } from '@angular/router';
import { MuralComponent } from './pages/mural/mural.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mural',
    pathMatch: 'full'
  },
  {
  path: 'mural',
  component: MuralComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];
