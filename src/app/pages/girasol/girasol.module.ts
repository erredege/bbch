import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirasolPageRoutingModule } from './girasol-routing.module';

import { GirasolPage } from './girasol.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirasolPageRoutingModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [GirasolPage]
})
export class GirasolPageModule {}
