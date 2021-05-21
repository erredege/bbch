import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SojaPageRoutingModule } from './soja-routing.module';

import { SojaPage } from './soja.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SojaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SojaPage]
})
export class SojaPageModule {}
