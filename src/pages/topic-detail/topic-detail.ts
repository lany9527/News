import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
// import { SocialSharing } from 'ionic-native';
import {HttpService} from "../../providers/http-service";

@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html'
})
export class TopicDetailPage {
  public person: any;
  public topic: any;
  public collectType: number;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public params: NavParams,
    public httpService: HttpService,
    public http: Http) {
    this.person = params.data.person;
    // console.log(this.person);
  }
  collect(obj) {
    if (!obj) {
      return;
    }
    // console.log("collect", this.person);
    return this.httpService.collectTopic(obj)
      .then(res => {
        // console.log(res);
        this.collectType = res.type;
        let toast = this.toastCtrl.create({
          message: '收藏成功',
          duration: 1500,
          position: 'middle'
        });
        toast.present();
      })
  }


  ionViewDidLoad() {
    console.log('Hello TopicDetailPage');
  }

}
