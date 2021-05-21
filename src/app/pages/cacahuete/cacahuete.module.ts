import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CacahuetePageRoutingModule } from './cacahuete-routing.module';

import { CacahuetePage } from './cacahuete.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CacahuetePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CacahuetePage]
})
export class CacahuetePageModule {}
