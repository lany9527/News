import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ActionSheetController,
  Platform,
  AlertController, ModalController
} from 'ionic-angular';
// import { Camera } from 'ionic-native';

import {ModifyPhonePage} from "../modify-phone/modify-phone";

@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html'
})
export class EditDataPage {
  item: any;
  data: Array<any>;
  gender: string = "f";
  nick: string = '';
  avatar = localStorage['headface'];
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    this.item = params.data.item;
    this.data = [
      {"title": "头像", "note": "点击更改头像", "tag": "avatar"},
      {"title": "昵称", "note": "编辑你的昵称", "tag": "nick"},
      {"title": "性别", "note": "请选择", "tag": "gender"},
      {"title": "手机号", "note": "188*****888", "tag": "phone"},
      {"title": "身份证号", "note": "452******888", "tag": "idNumber"}
    ];
  }
  editData(item){
    if (item.tag === "avatar"){
      this.selectAvatar();
    }else if(item.tag === "nick"){
      this.editNick(item);
    }else if(item.tag === "phone"){
      this.modifyPhoneNumber(item);
    }
  }

  //选择头像
  selectAvatar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '请选择头像',
      buttons: [
        {
          text: '相册',
          role: 'album',
          icon: !this.platform.is('ios') ? 'md-image' : 'ios-image',
          handler: ()=>{
            console.log("从相册选择")
          }
        },
        {
          text: '拍照',
          role: 'photograph',
          icon: !this.platform.is('ios') ? 'md-camera' : 'ios-camera',
          handler: ()=>{
            console.log("拍照");
            /*var options = {
              quality: 100,
              destinationType: Camera.DestinationType.FILE_URI,
              allowEdit: false,
              encodingType:Camera.EncodingType.JPEG,
              targetWidth: 200,
              targetHeight: 200,
              mediaType:0,
              cameraDirection:0,
              saveToPhotoAlbum: true
            };
            Camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
              // Handle error
            });*/
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  //编辑修改昵称
  editNick(item){
    let alert = this.alertCtrl.create({
      title: `编辑昵称`,
      inputs: [
        {
          name: 'nick',
          placeholder: 'nick'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
            item.note = data.nick;
          }
        }
      ]
    });
    alert.present();
  }
  //修改手机号
  modifyPhoneNumber(item){
    // this.navCtrl.push(ModifyPhonePage,{item: item})
    let modal = this.modalCtrl.create(ModifyPhonePage);
    modal.onDidDismiss(data => {
      console.log(item,data);
      item.note = data;
    });
    modal.present();
  }
  ionViewDidLoad() {
    console.log('Hello EditDataPage Page');

  }

}
