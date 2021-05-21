import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaizPage } from './maiz.page';

const routes: Routes = [
  {
    path: '',
    component: MaizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaizPageRoutingModule {}
