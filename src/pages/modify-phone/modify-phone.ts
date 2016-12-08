import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController, ToastController
} from 'ionic-angular';

/*
  Generated class for the ModifyPhone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modify-phone',
  templateUrl: 'modify-phone.html'
})
export class ModifyPhonePage {
  item: Array<any>;
  phoneNumber: string;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
  ) {
    this.item = params.data.item;
  }
  identify(phone){
    // this.item['note'] = phone;//把手机号码传回去
    // console.log(this.item)
    console.log(phone);
    let toast = this.toastCtrl.create({
      message: '修改成功',
      duration: 1500,
      position: 'middle'
    });
    toast.present();
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.viewCtrl.dismiss(phone);
    });

  }

  ionViewDidLoad() {
    console.log('Hello ModifyPhonePage Page');
  }

}
