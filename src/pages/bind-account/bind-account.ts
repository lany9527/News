import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BindAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bind-account',
  templateUrl: 'bind-account.html'
})
export class BindAccountPage {
  item: any;
  bindings: Array<any>;
  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
    this.item = params.data.item;
    this.bindings = [
      {"title": "微信", "checked": false},
      {"title": "QQ", "checked": false},
      {"title": "新浪微博", "checked": true},
      {"title": "腾讯微博", "checked": true},
      {"title": "人人网", "checked": false},
      {"title": "知乎网", "checked": false},
    ];
  }

  ionViewDidLoad() {
    console.log('Hello BindAccountPage Page');
  }

}
