import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hortalizas2PageRoutingModule } from './hortalizas2-routing.module';

import { Hortalizas2Page } from './hortalizas2.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hortalizas2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Hortalizas2Page]
})
export class Hortalizas2PageModule {}
