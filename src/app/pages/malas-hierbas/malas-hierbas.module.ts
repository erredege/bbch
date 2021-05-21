import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalasHierbasPageRoutingModule } from './malas-hierbas-routing.module';

import { MalasHierbasPage } from './malas-hierbas.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalasHierbasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MalasHierbasPage]
})
export class MalasHierbasPageModule {}
