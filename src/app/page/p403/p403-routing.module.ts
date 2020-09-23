import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P403Page } from './p403.page';

const routes: Routes = [
  {
    path: '',
    component: P403Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P403PageRoutingModule {}
