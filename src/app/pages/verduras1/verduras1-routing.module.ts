import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verduras1Page } from './verduras1.page';

const routes: Routes = [
  {
    path: '',
    component: Verduras1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verduras1PageRoutingModule {}
