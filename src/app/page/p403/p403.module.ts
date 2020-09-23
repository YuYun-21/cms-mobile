import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P403PageRoutingModule } from './p403-routing.module';

import { P403Page } from './p403.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P403PageRoutingModule
  ],
  declarations: [P403Page]
})
export class P403PageModule {}
