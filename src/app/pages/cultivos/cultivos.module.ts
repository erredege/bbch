import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultivosPageRoutingModule } from './cultivos-routing.module';

import { CultivosPage } from './cultivos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultivosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CultivosPage]
})
export class CultivosPageModule {}
