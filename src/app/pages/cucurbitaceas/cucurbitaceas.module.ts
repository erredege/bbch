import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CucurbitaceasPageRoutingModule } from './cucurbitaceas-routing.module';

import { CucurbitaceasPage } from './cucurbitaceas.page';

import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CucurbitaceasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CucurbitaceasPage]
})
export class CucurbitaceasPageModule {}
