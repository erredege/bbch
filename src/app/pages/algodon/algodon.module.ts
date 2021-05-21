import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlgodonPageRoutingModule } from './algodon-routing.module';

import { AlgodonPage } from './algodon.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgodonPageRoutingModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [AlgodonPage]
})
export class AlgodonPageModule {}
