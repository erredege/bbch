import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Verduras1PageRoutingModule } from './verduras1-routing.module';

import { Verduras1Page } from './verduras1.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verduras1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Verduras1Page]
})
export class Verduras1PageModule {}
