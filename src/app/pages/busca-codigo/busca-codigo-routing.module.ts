import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaCodigoPage } from './busca-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaCodigoPageRoutingModule {}
