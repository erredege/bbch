import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hortalizas2Page } from './hortalizas2.page';

const routes: Routes = [
  {
    path: '',
    component: Hortalizas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hortalizas2PageRoutingModule {}
