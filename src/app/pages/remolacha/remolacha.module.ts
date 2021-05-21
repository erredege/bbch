import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemolachaPageRoutingModule } from './remolacha-routing.module';

import { RemolachaPage } from './remolacha.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemolachaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RemolachaPage]
})
export class RemolachaPageModule {}
