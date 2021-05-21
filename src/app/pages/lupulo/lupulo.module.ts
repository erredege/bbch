import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LupuloPageRoutingModule } from './lupulo-routing.module';

import { LupuloPage } from './lupulo.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LupuloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LupuloPage]
})
export class LupuloPageModule {}
