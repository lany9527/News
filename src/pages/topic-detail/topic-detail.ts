import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
// import {PeopleService} from '../../providers/people-service/people-service';
/*
  Generated class for the TopicDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html'
})
export class TopicDetailPage {
  public person: any;
  constructor(public navCtrl: NavController, public params: NavParams) { 
    this.person = params.data.person;
  }

  ionViewDidLoad() {
    console.log('Hello TopicDetailPage Page');
  }

}
