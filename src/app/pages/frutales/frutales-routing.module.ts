import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutalesPage } from './frutales.page';

const routes: Routes = [
  {
    path: '',
    component: FrutalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutalesPageRoutingModule {}
