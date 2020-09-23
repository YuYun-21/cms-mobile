import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioplayPage } from './audioplay.page';

const routes: Routes = [
  {
    path: '',
    component: AudioplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioplayPageRoutingModule {}
