import { Component, OnInit } from '@angular/core';
import { App, NavController, AlertController, ViewController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TopicsService } from '../../providers/topics-service';
import { TopicDetailPage } from "../topic-detail/topic-detail";
import { NewTopicPage } from "../new-topic/new-topic";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [TopicsService]
})

export class HomePage implements OnInit {
	public people: any;
	public topic: any;

	private page: number = 1;
	private tab: string;
	currentDate: any;
	constructor(public navCtrl: NavController, public http: Http, public topicsService: TopicsService, public appCtrl: App, public alertCtrl: AlertController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
		this.currentDate = new Date();
	}

	loadPeople() {
		// this.topicsService.load().then(data => {
		//     this.people = data;
		//     // console.log(this.people);
		// });
		return new Promise(resolve => {
			var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10';
			this.http.get(reqUrl)
				.map(res => res.json())
				.subscribe(data => {
					this.people = data.data.reverse();
					// console.log(data);
					resolve(this.people);
				})
		})
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
	//筛选
	showFilterbox() {
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
	}
	//下拉更新记录
	loadMore(page){
		return new Promise(resolve => {			
			if(this.tab){
				var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&page='+`${page}`+'&tab='+`${this.tab}`;
			}else{
				var reqUrl = 'http://ionichina.com/api/v1/topics?limit=10&page='+`${page}`;
			}
			console.log(reqUrl,page,this.tab);
			this.http.get(reqUrl)
				.map(res => res.json())
				.subscribe(data => {
					this.people = data.data.concat(this.people);
					console.log(data);
					resolve(this.people);
				})
		})
	}
	//跳转新建
	loadNewTopicPage() {
		console.log("add new topic");
		let modal = this.modalCtrl.create(NewTopicPage);
		modal.onDidDismiss(data => {
			console.log(data);
		});
		modal.present();
	}

	//下拉刷新
	doRefresh(refresher) {
		console.log(refresher);
		this.page += 1;
		this.loadMore(this.page);
		setTimeout(() => {
			console.log("异步操作结束");
			refresher.complete();
		}, 2000);
	}

	ngOnInit() {
		this.loadPeople();
	}

}

