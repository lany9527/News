///<reference path="signup.ts"/>
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {SignupPage} from "./signup";
@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html'
})

export class SigninPage {
	// user: User;
	constructor(public nav: NavController, public modalCtrl:ModalController) {

	}

	openSignupPage(){
		let modal = this.modalCtrl.create(SignupPage);
    modal.present();
	}
}

/*
export class User{
	username: string;
	password: string;
}*/
