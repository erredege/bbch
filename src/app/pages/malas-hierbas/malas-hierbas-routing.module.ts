import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalasHierbasPage } from './malas-hierbas.page';

const routes: Routes = [
  {
    path: '',
    component: MalasHierbasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalasHierbasPageRoutingModule {}
