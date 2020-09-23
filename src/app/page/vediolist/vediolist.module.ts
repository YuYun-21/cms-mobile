import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VediolistPageRoutingModule } from './vediolist-routing.module';

import { VediolistPage } from './vediolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VediolistPageRoutingModule
  ],
  declarations: [VediolistPage]
})
export class VediolistPageModule {}
