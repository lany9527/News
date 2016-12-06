import {Component} from '@angular/core';
import {
  ModalController,
  NavController,
  AlertController,
  LoadingController,
  ToastController,
  ViewController
} from 'ionic-angular';
import {Http, Headers} from '@angular/http'

import {SignupPage} from "./signup";
// import { AboutPage } from './about';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class SigninPage {
  user: any = {};
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public loadCtrl: LoadingController,
              public toastCtrl: ToastController,
              public viewCtrl: ViewController,
              public http: Http) {
    this.user.username = "";
    this.user.password = "";
    this.user.headface = "";
  }

  login(): any {
    // let localStorage:any = {};
    if (this.user.username === '') {
      let alert = this.alertCtrl.create({
        title: '用户名不能为空',
        buttons: ["ok"]
      });
      alert.present();
    } else {
      let loading = this.loadCtrl.create({
        content: '正在登陆...',
        duration: 2000
      });
      loading.present();
      this.http
        .post('http://ionichina.com/api/v1/accesstoken', JSON.stringify(
          {accesstoken: '39a3af85-14dc-4868-9840-0c050e1f6fe1'}),
          {headers: this.headers})
        .subscribe(data => {
          console.log(data);
          var formatData = JSON.parse(data['_body']);
          localStorage["headface"] = formatData.avatar_url;
          localStorage["username"] = this.user.username;
          localStorage["logined"] = "true";
          localStorage["accesstoken"] = "39a3af85-14dc-4868-9840-0c050e1f6fe1";
          console.log(formatData);
          loading.dismiss();//隐藏登录进度
          let toast = this.toastCtrl.create({
            message: '登录成功',
            duration: 1000,
            position: 'top'
          });
          toast.present();
          this.viewCtrl.dismiss(formatData);
        })

    }
  }

  /*token(): any {
   this.http
   .post('http://ionichina.com/api/v1/accesstoken', JSON.stringify({accesstoken: '39a3af85-14dc-4868-9840-0c050e1f6fe1'}), {headers: this.headers})
   .subscribe(data => {
   // console.log(data);
   var formatData = JSON.parse(data['_body']);
   console.log(formatData);
   localStorage["accesstoken"] = "39a3af85-14dc-4868-9840-0c050e1f6fe1";
   })
   }*/

  openSignupPage() {
    let modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }
}

