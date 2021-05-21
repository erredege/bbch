import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutalesHuesoPage } from './frutalesHueso.page';

const routes: Routes = [
  {
    path: '',
    component: FrutalesHuesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutalesHuesoPageRoutingModule {}
