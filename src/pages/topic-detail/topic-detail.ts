import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';  
import { ApiService } from '../../providers/api-service';

@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html'
})
export class TopicDetailPage implements OnInit {
  public person: any;
  public topic: any;

  constructor(public navCtrl: NavController, public params: NavParams, public apiService: ApiService, public http: Http) {
    this.person = params.data.person;
  }
  share(message, subject?, file?, url?) {  
  SocialSharing.share(message, subject, file, url).then(() => {  
    // Success!  
    console.log("success!");
  }, (err) => {  
    // Error!  
    console.log("fail"); 
  });  
}  

  ngOnInit() {
    console.log("TopicDetailPage")
  }
}
