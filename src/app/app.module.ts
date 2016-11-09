///<reference path="../pages/about/navigation-details.ts"/>
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FollowPage } from '../pages/follow/follow';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VideoPage } from '../pages/video/video'
import {NavigationDetailsPage} from "../pages/about/navigation-details";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NavigationDetailsPage,
    FollowPage,
    HomePage,
    TabsPage,
    VideoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NavigationDetailsPage,
    FollowPage,
    HomePage,
    VideoPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
