import {Component} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';

import {SigninPage} from "./signin";
import {ProfilePage} from "./profile";
// import {NavDetailsPage} from "../nav-detail/nav-detail";
import {SettingPage} from "../setting/setting";
import {HttpService} from "../../providers/http-service";
import {MessagePage} from "../message/message";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: Array<any> = [];
  user: any = {};
  msg: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public httpService: HttpService)
  {
    this.user.username = "";
    this.user.password = "";
    this.user.headface = "";
    // let localStorage:any = {};
    if (localStorage["logined"] === "true") {
      this.user.headface = localStorage['headface'];
      this.user.username = localStorage['username'];
    } else {
      let modal = modalCtrl.create(SigninPage);
      modal.onDidDismiss(data => {
        console.log(data);
        this.user.headface = data.avatar_url;
        this.user.username = data.loginname;
      });
      modal.present();
    }

    this.items = [
      {
        'line1': [
          {'title': '收藏', 'icon': 'icon-collection', 'color': 'collectionIcon'},
          {'title': '消息', 'icon': 'icon-message', 'color': '#E63135', 'page': 'MessagePage'},
          {'title': '关注', 'icon': 'icon-follow', 'color': 'collectionIcon'}
        ]
      },
      {
        'line2': [
          {'title': '离线', 'icon': 'icon-offline', 'color': 'collectionIcon'},
          {'title': '反馈', 'icon': 'icon-feedback', 'color': 'collectionIcon'},
          {'title': '设置', 'icon': 'icon-setting', 'page': 'SettingPage'},
        ]
      },
    ];

    this.getMsg('39a3af85-14dc-4868-9840-0c050e1f6fe1');
  }

  openNavDetailsPage(item) {
    console.log(item);
    if (item.page === 'SettingPage') {
      this.navCtrl.push(SettingPage, {item: item});
    } else if (item.page === 'MessagePage') {
      this.navCtrl.push(MessagePage, {item: this.msg});
    }
  }

  // 获取消息
  getMsg (accesstoken) {
    return this.httpService.getmessages(accesstoken)
      .then(res => {
        console.log(res);
        this.msg = res;
      })
  }
  openProfilePage() {
    this.navCtrl.push(ProfilePage, {user: this.user});

  }
}
