import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../pages/tabs/tabs';
import {WelcomePage} from "../pages/welcome/welcome";
import {HomePage} from "../pages/home/home";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [Storage]
})
export class MyApp {
  rootPage: any = TabsPage;
  // rootPage: any;

  constructor(platform: Platform, public storage: Storage) {
    // this.storage.get('firstIn').then((result) => {
    //   if (result) {
    //     this.rootPage = HomePage;
    //   } else {
    //     this.storage.set('firstIn', true);
    //     this.rootPage = WelcomePage;
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
