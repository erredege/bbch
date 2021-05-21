import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hortalizas1Page } from './hortalizas1.page';

const routes: Routes = [
  {
    path: '',
    component: Hortalizas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hortalizas1PageRoutingModule {}
