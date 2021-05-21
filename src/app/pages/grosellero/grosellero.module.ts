import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroselleroPageRoutingModule } from './grosellero-routing.module';

import { GroselleroPage } from './grosellero.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroselleroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GroselleroPage]
})
export class GroselleroPageModule {}
