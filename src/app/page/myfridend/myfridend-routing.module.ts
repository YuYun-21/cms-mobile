import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfridendPage } from './myfridend.page';

const routes: Routes = [
  {
    path: '',
    component: MyfridendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfridendPageRoutingModule {}
