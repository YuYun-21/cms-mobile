import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfridendPageRoutingModule } from './myfridend-routing.module';

import { MyfridendPage } from './myfridend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfridendPageRoutingModule
  ],
  declarations: [MyfridendPage]
})
export class MyfridendPageModule {}
