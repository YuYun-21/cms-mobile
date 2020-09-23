import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import { IonicStorageModule } from '@ionic/storage';
import {MyHttpInterceptor} from "./service/MyHttpInterceptor";
import {VgBufferingModule} from "videogular2/compiled/src/buffering/buffering";

//storage组件依赖导入

@NgModule({
  declarations: [AppComponent,LoginComponent],
  entryComponents: [
      LoginComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,VgBufferingModule,
  HttpClientModule,
      FormsModule,
      IonicStorageModule.forRoot({
          name: 'cmsmobile',
          driverOrder: ['localstorage']       //为获得最佳的兼容性，存储我们使用html自带的本地存储
      })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
      ,{
          provide: HTTP_INTERCEPTORS,
          useClass: MyHttpInterceptor,
          multi: true //每次HTTP请求时执行
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
