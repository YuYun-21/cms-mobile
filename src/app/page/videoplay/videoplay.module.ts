import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoplayPageRoutingModule } from './videoplay-routing.module';

import { VideoplayPage } from './videoplay.page';
import {VgBufferingModule} from "videogular2/compiled/src/buffering/buffering";
import {VgOverlayPlayModule} from "videogular2/compiled/src/overlay-play/overlay-play";
import {VgControlsModule} from "videogular2/compiled/src/controls/controls";
import {VgCoreModule} from "videogular2/compiled/src/core/core";

@NgModule({
  imports: [
      VgCoreModule,//1
      VgControlsModule,//2
      VgOverlayPlayModule,//3
      VgBufferingModule,//4
    CommonModule,
    FormsModule,
    IonicModule,
    VideoplayPageRoutingModule
  ],
  declarations: [VideoplayPage]
})
export class VideoplayPageModule {}
