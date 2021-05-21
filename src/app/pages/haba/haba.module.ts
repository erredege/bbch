import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabaPageRoutingModule } from './haba-routing.module';

import { HabaPage } from './haba.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HabaPage]
})
export class HabaPageModule {}
