import {Component} from '@angular/core';
import {NavController, AlertController, NavParams} from 'ionic-angular';
import {BindAccountPage} from "../bind-account/bind-account";
import {EditDataPage} from "../edit-data/edit-data";
import {HttpService} from "../../providers/http-service";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  item: any;
  settings: Array<any>;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public alertCtrl: AlertController,
    public httpService: HttpService
  ) {
    this.item = params.data.item;
    this.settings = [
      {"title": "编辑资料", "icon": "icon-editfile", "isToggle": false},
      {"title": "账号和绑定设置", "icon": "icon-bind", "isToggle": false},
      {"title": "非WIFI网络", "icon": "icon-nowifi", "isToggle": false},
      {"title": "清除缓存", "icon": "icon-cache", "isToggle": true},
      {"title": "推送通知", "icon": "icon-push", "isToggle": true},
      {"title": "收藏时转发", "icon": "icon-share", "isToggle": false},
    ]
  }

  setting(item){
    console.log(item);
    if(item.icon === "icon-nowifi"){
      this.setNetwork();
    }else if (item.icon === "icon-bind"){
      this.bindCount(item);
    }else if (item.icon === "icon-editfile"){
      this.editData(item)
    }
  }
  //编辑资料
  editData(item){
    this.navCtrl.push(EditDataPage, {item: item});
  };
  //社交账号绑定
  bindCount(item){
    this.navCtrl.push(BindAccountPage, {item: item});
  }
  //非WIFI下网络图片下载选项
  setNetwork() {
    let alert = this.alertCtrl.create();
    alert.setTitle('非WIFI网络流量');

    alert.addInput({
      type: 'radio',
      label: '就是任性(下载大图)',
      value: 'download anyway',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '勤俭节约(智能下图)',
      value: 'smart download',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '流量太少(不下图片)',
      value: 'not download',
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

  ionViewDidLoad() {
    console.log('Hello SettingPage Page', this.item);
  }

}
