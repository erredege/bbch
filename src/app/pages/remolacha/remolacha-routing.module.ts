import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemolachaPage } from './remolacha.page';

const routes: Routes = [
  {
    path: '',
    component: RemolachaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemolachaPageRoutingModule {}
