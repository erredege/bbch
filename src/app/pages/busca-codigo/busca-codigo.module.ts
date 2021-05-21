import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaCodigoPageRoutingModule } from './busca-codigo-routing.module';

import { BuscaCodigoPage } from './busca-codigo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaCodigoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuscaCodigoPage]
})
export class BuscaCodigoPageModule {}
