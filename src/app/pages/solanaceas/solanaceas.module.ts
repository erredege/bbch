import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolanaceasPageRoutingModule } from './solanaceas-routing.module';

import { SolanaceasPage } from './solanaceas.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolanaceasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SolanaceasPage]
})
export class SolanaceasPageModule {}
