import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiolistPageRoutingModule } from './audiolist-routing.module';

import { AudiolistPage } from './audiolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiolistPageRoutingModule
  ],
  declarations: [AudiolistPage]
})
export class AudiolistPageModule {}
