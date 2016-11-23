import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/**
 * 集中处理API相关逻辑
 * */
@Injectable()
export class ApiService {
  @Input() id: any;

  ionApi: any = {};
  constructor(public http: Http) {
    // console.log('Hello ApiService Provider');

    this.ionApi = {
      //主题首页
      getTopics: this.http.get('http://ionichina.com/api/v1/topics?tab=ask'),
      //主题详情
      // getTopicDetail: this.http.get('http://ionichina.com/api/v1/topic/555f205aef16811c3ea0a79a')
      // getTopicDetail: this.http.get('http://ionichina.com/api/v1/topic/'+this.id+"'")
    }
  }
}
