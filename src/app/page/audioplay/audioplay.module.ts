import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioplayPageRoutingModule } from './audioplay-routing.module';

import { AudioplayPage } from './audioplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioplayPageRoutingModule
  ],
  declarations: [AudioplayPage]
})
export class AudioplayPageModule {}
