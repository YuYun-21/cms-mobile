import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfridendPageRoutingModule } from './editfridend-routing.module';

import { EditfridendPage } from './editfridend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfridendPageRoutingModule
  ],
  declarations: [EditfridendPage]
})
export class EditfridendPageModule {}
