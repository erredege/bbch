import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hortalizas1PageRoutingModule } from './hortalizas1-routing.module';

import { Hortalizas1Page } from './hortalizas1.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hortalizas1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Hortalizas1Page]
})
export class Hortalizas1PageModule {}
