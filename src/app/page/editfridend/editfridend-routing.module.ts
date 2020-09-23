import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfridendPage } from './editfridend.page';

const routes: Routes = [
  {
    path: '',
    component: EditfridendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfridendPageRoutingModule {}
