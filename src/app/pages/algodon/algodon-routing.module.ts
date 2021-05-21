import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlgodonPage } from './algodon.page';

const routes: Routes = [
  {
    path: '',
    component: AlgodonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlgodonPageRoutingModule {}
