import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hortalizas3PageRoutingModule } from './hortalizas3-routing.module';

import { Hortalizas3Page } from './hortalizas3.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hortalizas3PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Hortalizas3Page]
})
export class Hortalizas3PageModule {}
