import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  constructor(public alertCtrl: AlertController) {}
  share(){
    let alert = this.alertCtrl.create();
    alert.setTitle('分享到');

    alert.addInput({
      type: 'radio',
      label: 'qq好友',
      value: 'qq',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '微信',
      value: 'wechat',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '新浪微博',
      value: 'sinaBlog',
      checked: false
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log(data);
      }
    });
    alert.present();
  }
}
