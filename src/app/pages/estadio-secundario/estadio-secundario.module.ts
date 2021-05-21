import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadioSecundarioPageRoutingModule } from './estadio-secundario-routing.module';

import { EstadioSecundarioPage } from './estadio-secundario.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadioSecundarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstadioSecundarioPage]
})
export class EstadioSecundarioPageModule {}
