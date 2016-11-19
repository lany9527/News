import {Component} from '@angular/core';

import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  constructor(public alertCtrl: AlertController) {
  }

  /**
   * 分享功能
   */
  share() {
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

  /**
   * 弹出提醒用户登录
   */
  remind() {
    let alert = this.alertCtrl.create({
      title: `要先登录才能发表评论哦`,
      inputs: [
        {
          name: 'username',
          placeholder: 'username'
        },
        {
          name: 'password',
          placeholder: 'password'
        }
      ],
      buttons: ['OK']
    });
    alert.present();
  };
}
