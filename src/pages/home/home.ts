import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {PeopleService} from '../../providers/people-service/people-service';
import {TopicDetailPage} from "../topic-detail/topic-detail";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleService]
})

export class HomePage {
  public people: any;
  currentDate: any;
  constructor(public navCtrl: NavController, public http: Http, public peopleService: PeopleService) {
    this.currentDate = new Date();
  }

loadPeople(){
  this.peopleService.load().then(data=>{
    this.people = data;
    console.log(this.people);
  });
}
//打开详情页
openTopicDetail(person) {
		this.navCtrl.push(TopicDetailPage, {person:person});
	}

  ngOnInit() {
    this.loadPeople();
    console.log("初始化");
  }

}

