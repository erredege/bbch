import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacahuetePage } from './cacahuete.page';

const routes: Routes = [
  {
    path: '',
    component: CacahuetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CacahuetePageRoutingModule {}
