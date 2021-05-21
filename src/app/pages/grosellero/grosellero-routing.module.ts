import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroselleroPage } from './grosellero.page';

const routes: Routes = [
  {
    path: '',
    component: GroselleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroselleroPageRoutingModule {}
