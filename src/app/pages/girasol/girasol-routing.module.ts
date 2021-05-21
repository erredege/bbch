import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirasolPage } from './girasol.page';

const routes: Routes = [
  {
    path: '',
    component: GirasolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirasolPageRoutingModule {}
