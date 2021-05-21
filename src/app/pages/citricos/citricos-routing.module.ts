import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitricosPage } from './citricos.page';

const routes: Routes = [
  {
    path: '',
    component: CitricosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitricosPageRoutingModule {}
