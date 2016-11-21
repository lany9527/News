///<reference path="../pages/about/navigation-details.ts"/>
///<reference path="../pages/about/signup.ts"/>
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FollowPage } from '../pages/follow/follow';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VideoPage } from '../pages/video/video'
import { NavigationDetailsPage } from "../pages/about/navigation-details";
import { SigninPage } from "../pages/about/signin";
import { SignupPage } from "../pages/about/signup";
import { ProfilePage } from "../pages/about/profile";
import { TopicDetailPage } from "../pages/topic-detail/topic-detail";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NavigationDetailsPage,
    FollowPage,
    HomePage,
    TabsPage,
    VideoPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    TopicDetailPage
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
    TabsPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    TopicDetailPage
  ],
  providers: []
})
export class AppModule { }
