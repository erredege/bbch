import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatataPageRoutingModule } from './patata-routing.module';

import { PatataPage } from './patata.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatataPage]
})
export class PatataPageModule {}
