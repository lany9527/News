import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Http} from '@angular/http';
import {HttpService} from "../../providers/http-service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-new-topic',
  templateUrl: 'new-topic.html'
})
export class NewTopicPage {
  topic: any = {};
  tabs: Array<any>;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public http: Http,
              public httpService: HttpService) {
    this.tabs = [
      {"title": "全部", "tab": "all"},
      {"title": "分享", "tab": "share"},
      {"title": "问答", "tab": "ask"},
      {"title": "招聘", "tab": "job"},
      {"title": "吐槽", "tab": "bb"}
    ];
    this.topic['accesstoken'] = '39a3af85-14dc-4868-9840-0c050e1f6fe1';
  }

  addNewTopic(topic): void {
    console.log(topic);
    if (!topic) {
      return;
    }
    this.httpService.addTopic(topic)
      .then(res => {
        console.log("ok", res);
        let toast = this.toastCtrl.create({
          message: '修改成功',
          duration: 1500,
          position: 'middle'
        });
        toast.present();
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
          this.navCtrl.push(HomePage);
        });
      })
  }

  ionViewDidLoad() {
    console.log('Hello NewTopicPage Page');
  }

}