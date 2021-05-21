import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verduras2Page } from './verduras2.page';

const routes: Routes = [
  {
    path: '',
    component: Verduras2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verduras2PageRoutingModule {}
