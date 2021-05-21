import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verduras2PageRoutingModule } from './verduras2-routing.module';

import { Verduras2Page } from './verduras2.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verduras2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Verduras2Page]
})
export class Verduras2PageModule {}
