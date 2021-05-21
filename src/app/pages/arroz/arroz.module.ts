import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrozPageRoutingModule } from './arroz-routing.module';

import { ArrozPage } from './arroz.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrozPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArrozPage]
})
export class ArrozPageModule {}
