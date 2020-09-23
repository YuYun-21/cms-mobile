import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiolistPage } from './audiolist.page';

const routes: Routes = [
  {
    path: '',
    component: AudiolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiolistPageRoutingModule {}
