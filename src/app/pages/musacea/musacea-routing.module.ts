import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusaceaPage } from './musacea.page';

const routes: Routes = [
  {
    path: '',
    component: MusaceaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusaceaPageRoutingModule {}
