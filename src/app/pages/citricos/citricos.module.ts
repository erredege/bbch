import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitricosPageRoutingModule } from './citricos-routing.module';

import { CitricosPage } from './citricos.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitricosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CitricosPage]
})
export class CitricosPageModule {}
