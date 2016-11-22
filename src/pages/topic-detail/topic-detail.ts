import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, FabContainer } from 'ionic-angular';
import { Http } from '@angular/http';

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
  share(socialNet: string, fab: FabContainer) {
    // fab.close();
    console.log("Sharing in", socialNet);
  }

  ngOnInit() {
    console.log("TopicDetailPage")
  }
}
