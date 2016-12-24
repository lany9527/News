import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FollowPage } from '../follow/follow';
// import { VideoPage } from '../video/video'
// import {WelcomePage} from "../welcome/welcome";
import {NewTopicPage} from "../new-topic/new-topic";
// import {DemoPage} from "../demo/demo";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NewTopicPage;
  tab3Root: any = FollowPage;
  tab4Root: any = AboutPage;
  // tab5Root: any = WelcomePage;
  // tab5Root: any = DemoPage;

  // @ViewChild('myTabs') tabRef: Tabs;

  // ionViewDidEnter() {
  //   this.tabRef.select(3);
  // }

  constructor() {

  }
}