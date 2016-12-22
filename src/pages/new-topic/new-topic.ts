import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-new-topic',
  templateUrl: 'new-topic.html'
})
export class NewTopicPage {
  topic: any = {};
  tabs: Array<any>;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController,
    public http: Http)
  {
    this.tabs = [
      {"title": "全部", "tab": "all"},
      {"title": "分享", "tab": "share"},
      {"title": "问答", "tab": "ask"},
      {"title": "招聘", "tab": "job"},
      {"title": "吐槽", "tab": "bb"}
    ];
  }
  addNewTopic() {
    // let loading = this.loadCtrl.create({
    // 		content: '正在创建话题...',
    // 		duration: 2000
    // 	});
    // 	loading.present();

    //   setTimeout(()=>{
    // 			loading.dismiss();//隐藏登录进度
    // 			this.viewCtrl.dismiss("ok");
    // 		},1000);
    // Access Token:string 39a3af85-14dc-4868-9840-0c050e1f6fe1
    console.log("添加话题");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let topic = "title="+this.title+"&tab"+this.tab+"&content"+this.content;
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://ionichina.com/topic/create', this.topic, options)
      .map(resp =>{
        resp.json
        console.log(resp);
      })
      .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('发布成功')
    );
    
  }
  ionViewDidLoad() {
    console.log('Hello NewTopicPage Page');
  }

}
