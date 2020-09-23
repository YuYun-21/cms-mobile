import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VediolistPage } from './vediolist.page';

const routes: Routes = [
  {
    path: '',
    component: VediolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VediolistPageRoutingModule {}
