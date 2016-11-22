import { Component, OnInit } from '@angular/core';
import { App, NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { TopicsService } from '../../providers/topics-service';
import { TopicDetailPage } from "../topic-detail/topic-detail";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [TopicsService]
})

export class HomePage implements OnInit {
    public people: any;
    public topic: any;
    currentDate: any;
    constructor(public navCtrl: NavController, public http: Http, public topicsService: TopicsService, public appCtrl: App, public alertCtrl: AlertController) {
        this.currentDate = new Date();
    }

    loadPeople() {
        this.topicsService.load().then(data => {
            this.people = data;
            // console.log(this.people);
        });
    }
    //打开详情页  跳转到目标页面，利用appCtrl隐藏tabs
    openTopicDetail(person) {
        this.appCtrl.getRootNav().push(TopicDetailPage, { person: person });
        this.loadTopicDetail(person)
    }
    loadTopicDetail(person) {
        if (this.topic) {
            return Promise.resolve(this.topic);
        } else {
            return new Promise(resolve => {
                this.http.get('http://ionichina.com/api/v1/topic/' + person.id)
                    .map(res => res.json())
                    .subscribe(data => {
                        this.topic = data.data;
                        console.log(this.topic);
                        resolve(this.topic);
                    })
            })
        }
    }

    showFilterbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('你想要展示的话题类型');

    alert.addInput({
      type: 'radio',
      label: '分享',
      value: 'share',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '问答',
      value: 'ask'
    });
    alert.addInput({
      type: 'radio',
      label: '招聘',
      value: 'job'
    });
    alert.addInput({
      type: 'radio',
      label: '吐槽',
      value: 'xbb'
    });
    alert.addInput({
      type: 'radio',
      label: '置顶',
      value: 'top'
    });
    alert.addInput({
      type: 'radio',
      label: '精华',
      value: 'best'
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

    ngOnInit() {
        this.loadPeople();
        // console.log("初始化");
    }

}

