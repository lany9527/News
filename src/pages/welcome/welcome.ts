import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "./assets/images/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "./assets/images/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "./assets/images/ica-slidebox-img-3.png",
    }
  ];
  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };
  currState:any;
  constructor(public navCtrl: NavController) {}

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('Hello WelcomePage Page');
  }
  onTabUpdate(event){
    let newIndexAfterUpdate = event.activeIndex;
    this.currState = String(newIndexAfterUpdate);
  }
}
