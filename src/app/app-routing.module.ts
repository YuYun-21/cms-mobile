import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'newsdetail',
    loadChildren: () => import('./page/newsdetail/newsdetail.module').then( m => m.NewsdetailPageModule)
  },
  {
    path: 'regist',
    loadChildren: () => import('./page/regist/regist.module').then( m => m.RegistPageModule)
  },
  {
    path: 'p401',
    loadChildren: () => import('./page/p401/p401.module').then( m => m.P401PageModule)
  },
  {
    path: 'p403',
    loadChildren: () => import('./page/p403/p403.module').then( m => m.P403PageModule)
  },
  {
    path: 'editfridend',
    loadChildren: () => import('./page/editfridend/editfridend.module').then( m => m.EditfridendPageModule)
  },
  {
    path: 'myfridend',
    loadChildren: () => import('./page/myfridend/myfridend.module').then( m => m.MyfridendPageModule)
  },
  {
    path: 'videoplay',
    loadChildren: () => import('./page/videoplay/videoplay.module').then( m => m.VideoplayPageModule)
  },
  {
    path: 'audioplay',
    loadChildren: () => import('./page/audioplay/audioplay.module').then( m => m.AudioplayPageModule)
  },
  {
    path: 'audiolist',
    loadChildren: () => import('./page/audiolist/audiolist.module').then( m => m.AudiolistPageModule)
  },
  {
    path: 'vediolist',
    loadChildren: () => import('./page/vediolist/vediolist.module').then( m => m.VediolistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
