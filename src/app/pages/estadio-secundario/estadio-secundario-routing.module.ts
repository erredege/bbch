import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadioSecundarioPage } from './estadio-secundario.page';

const routes: Routes = [
  {
    path: '',
    component: EstadioSecundarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadioSecundarioPageRoutingModule {}
