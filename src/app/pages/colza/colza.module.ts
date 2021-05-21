import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColzaPageRoutingModule } from './colza-routing.module';

import { ColzaPage } from './colza.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColzaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColzaPage]
})
export class ColzaPageModule {}
