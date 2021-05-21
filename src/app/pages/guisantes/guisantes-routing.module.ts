import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuisantesPage } from './guisantes.page';

const routes: Routes = [
  {
    path: '',
    component: GuisantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuisantesPageRoutingModule {}
