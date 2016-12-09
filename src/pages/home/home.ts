import {Component} from '@angular/core';
import {
  App,
  NavController,
  AlertController,
  ViewController,
  ModalController,
  Platform, LoadingController
} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {TopicsService} from '../../providers/topics-service';
import {TopicDetailPage} from "../topic-detail/topic-detail";
import {HttpService} from "../../providers/http-service";
// import {NewTopicPage} from "../new-topic/new-topic";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TopicsService, HttpService]
})

export class HomePage {
  public topics: Array<any>;
  public topic: any;
  private page: number = 1;
  tabs: Array<any>;
  tab: string = "all";
  tabContent: string;
  isAndroid: boolean = false;
  moredata: boolean = false; //默认设置可以加载更多数据
  constructor(public navCtrl: NavController,
              public http: Http,
              public topicsService: TopicsService,
              public appCtrl: App,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public platform: Platform,
              public loadingCtrl: LoadingController,
              private httpService: HttpService) {
    // this.currentDate = new Date();
    this.tabs = [
      {"title": "全部", "tab": "all"},
      {"title": "分享", "tab": "share"},
      {"title": "问答", "tab": "ask"},
      {"title": "招聘", "tab": "job"},
      {"title": "吐槽", "tab": "bb"}
    ];
  }

  getTopics(): void {
    // this.topicsService.load().then(data => {
    //     this.people = data;
    //     // console.log(this.people);
    // });
    /*return new Promise(resolve => {
     var reqUrl = 'http://ionichina.com/api/v1/topics?limit=40';
     this.http.get(reqUrl)
     .map(res => res.json())
     .subscribe(data => {
     // this.people = data.data.reverse(); //下拉刷新
     this.people = data.data; //上滑加载
     console.log(data);
     resolve(this.people);
     })
     })*/
    this.httpService.getAllTopics()
      .then(data => this.topics = data);
  }

  /*switchTopic(tabContent) {
   console.log(tabContent.tab);
   this.topics = [];
   if (tabContent.tab === 'all') {
   var reqUrl = 'http://ionichina.com/api/v1/topics?limit=40';
   } else {
   var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&tab=' + tabContent.tab;
   }
   let loader = this.loadingCtrl.create({
   content: "Please wait...",
   // duration: 1500
   });
   loader.present();

   return new Promise(resolve => {
   this.http.get(reqUrl)
   .map(res => res.json())
   .subscribe(data => {
   this.topics = data.data;
   console.log(data);
   resolve(this.topics);
   loader.dismiss();
   })
   })
   }*/
  switchTopic(tabContent) {
    console.log(tabContent.tab);
    this.topics = [];
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    if (tabContent.tab === 'all') {
      this.httpService.getAllTopics()
        .then(data => {
          this.topics = data;
          loader.dismiss();
        });
    } else {
      this.httpService.getTopicsByTab(tabContent.tab)
        .then(data => {
          this.topics = data;
          loader.dismiss();
        });
    }
  }

  //打开详情页  跳转到目标页面，利用appCtrl隐藏tabs
  openTopicDetail(person) {
    this.appCtrl.getRootNav().push(TopicDetailPage, {person: person});
    // this.loadTopicDetail(person)
  }

  /*loadTopicDetail(person) {
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
   }*/

  //筛选
  /*showFilterbox() {
   console.log("showFilterbox");
   let alert = this.alertCtrl.create();
   alert.setTitle('你想要展示的话题类型');
   alert.addInput({
   type: 'radio',
   label: '全部',
   value: 'all',
   checked: true
   });
   alert.addInput({
   type: 'radio',
   label: '分享',
   value: 'share'
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
   value: 'bb'
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
   handler: type => {
   console.log('Checkbox data:', type);
   //点击确定按钮，传入筛选参数
   if (type === 'all') {
   var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10';
   this.tab = null;
   } else {
   var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&tab=' + type;
   this.tab = type;
   }
   return new Promise(resolve => {
   this.http.get(reqUrl)
   .map(res => res.json())
   .subscribe(data => {
   this.people = data.data;
   console.log(this.people);
   resolve(this.people);
   })
   })
   }
   });
   alert.present();
   }*/


  //跳转新建
  /*loadNewTopicPage() {
   console.log("add new topic");
   let modal = this.modalCtrl.create(NewTopicPage);
   modal.onDidDismiss(data => {
   console.log(data);
   });
   modal.present();
   }*/

  //下拉刷新
  doRefresh(tabContent, refresher) {
    console.log(tabContent, refresher);
    this.page += 1;
    this.loadMore(tabContent, this.page);
    // setTimeout(() => {
    console.log("异步操作结束");
    refresher.complete();
    // }, 2000);
  }

  //上滑加载
  doInfinite(tabContent, infiniteScroll) {
    console.log(tabContent, infiniteScroll);
    this.page += 1;
    this.loadMore(tabContent, this.page);
    setTimeout(() => {
      console.log("异步加载操作结束");
      infiniteScroll.complete();
    }, 2000);
  }

//下拉更新记录
  loadMore(tabContent, page) {
    return new Promise(resolve => {
      if (tabContent) {
        var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&page=' + `${page}` + '&tab=' + `${tabContent}`;
      } else {
        var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&page=' + `${page}`;
      }
      console.log(reqUrl, page, this.tab);
      this.http.get(reqUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.topics = this.topics.concat(data.data);
          console.log(data);
          if (data.length === 0) {
            this.moredata = true;
            console.log("没有更多数据了")
          }
          resolve(this.topics);
        })
    })
  }

  // ngOnInit() {
  //   this.loadPeople();
  // }
  ionViewDidLoad() {
    console.log('Hello HomePage');
    this.getTopics();
  }
}

