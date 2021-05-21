import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusaceaPageRoutingModule } from './musacea-routing.module';

import { MusaceaPage } from './musacea.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusaceaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MusaceaPage]
})
export class MusaceaPageModule {}
