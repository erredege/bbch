import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatataPage } from './patata.page';

const routes: Routes = [
  {
    path: '',
    component: PatataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatataPageRoutingModule {}
