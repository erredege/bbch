import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JudiasPageRoutingModule } from './judias-routing.module';

import { JudiasPage } from './judias.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JudiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JudiasPage]
})
export class JudiasPageModule {}
