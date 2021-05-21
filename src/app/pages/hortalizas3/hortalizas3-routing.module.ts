import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hortalizas3Page } from './hortalizas3.page';

const routes: Routes = [
  {
    path: '',
    component: Hortalizas3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hortalizas3PageRoutingModule {}
