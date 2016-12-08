import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {FollowPage} from '../pages/follow/follow';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {VideoPage} from '../pages/video/video'

import {SigninPage} from "../pages/about/signin";
import {SignupPage} from "../pages/about/signup";
import {ProfilePage} from "../pages/about/profile";
import {TopicDetailPage} from "../pages/topic-detail/topic-detail";
import {NewTopicPage} from "../pages/new-topic/new-topic";

import {TopicsService} from '../providers/topics-service';
import {ApiService} from '../providers/api-service';
import {NavDetailsPage} from "../pages/nav-detail/nav-detail";
import {SettingPage} from "../pages/setting/setting";
import {BindAccountPage} from "../pages/bind-account/bind-account";
import {EditDataPage} from "../pages/edit-data/edit-data";
import {ModifyPhonePage} from "../pages/modify-phone/modify-phone";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NavDetailsPage,
    FollowPage,
    HomePage,
    TabsPage,
    VideoPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    TopicDetailPage,
    NewTopicPage,
    SettingPage,
    BindAccountPage,
    EditDataPage,
    ModifyPhonePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NavDetailsPage,
    FollowPage,
    HomePage,
    VideoPage,
    TabsPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    TopicDetailPage,
    NewTopicPage,
    SettingPage,
    BindAccountPage,
    EditDataPage,
    ModifyPhonePage
  ],
  providers: [
    TopicsService,
    ApiService
  ]
})
export class AppModule {
}
