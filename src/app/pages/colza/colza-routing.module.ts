import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColzaPage } from './colza.page';

const routes: Routes = [
  {
    path: '',
    component: ColzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColzaPageRoutingModule {}
