import { Component } from '@angular/core';
import { ModalController, NavController, AlertController, LoadingController, ToastController, ViewController } from 'ionic-angular';

import {Http} from '@angular/http';

import { SignupPage } from "./signup";
// import { AboutPage } from './about';
@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html'
})

export class SigninPage {
	user: any = {};
	constructor(public nav: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController, public loadCtrl: LoadingController, public toastCtrl: ToastController, public viewCtrl: ViewController) {
		this.user.username = "";
		this.user.password = "";
		this.user.headface = "../../assets/images/1.jpg";
	}

	login() {
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
			//模拟登陆
			if (this.user.password === "1") {
				console.log(this.user.username);
				console.log(this.user.password);
				localStorage["username"] = this.user.username;
				localStorage["logined"] = "true";
				setTimeout(()=>{
					loading.dismiss();//隐藏登录进度
					this.viewCtrl.dismiss(this.user.username);
				},1000);
				
			} else {
				let toast = this.toastCtrl.create({
					message: '登录失败',
					duration: 3000
				});
				toast.present();
			}


		}
	}

	openSignupPage() {
		let modal = this.modalCtrl.create(SignupPage);
		modal.present();
	}
}

/*
export class User{
	username: string;
	password: string;
}*/
