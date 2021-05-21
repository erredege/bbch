import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutalesHuesoPageRoutingModule } from './frutalesHueso-routing.module';

import { FrutalesHuesoPage } from './frutalesHueso.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutalesHuesoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FrutalesHuesoPage]
})
export class FrutalesHuesoPageModule {}
