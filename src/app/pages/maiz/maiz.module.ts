import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaizPageRoutingModule } from './maiz-routing.module';

import { MaizPage } from './maiz.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaizPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MaizPage]
})
export class MaizPageModule {}
