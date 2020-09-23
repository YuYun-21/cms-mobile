import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdetailPageRoutingModule } from './newsdetail-routing.module';

import { NewsdetailPage } from './newsdetail.page';
import {PipesModule} from "../../pipes/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdetailPageRoutingModule,
      PipesModule
  ],
  declarations: [NewsdetailPage]
})
export class NewsdetailPageModule {}
