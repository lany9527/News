import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  private topicsUrl = 'http://ionichina.com/api/v1/topics';
  private collectUrl = 'http://ionichina.com/api/v1/topic/collect';
  private messagesUrl = 'http://ionichina.com/api/v1/messages';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
  }
  // 获取全部主题
  getAllTopics(): Promise<any> {
    return this.http.get(this.topicsUrl)
      .toPromise()
      .then(response => response.json().data as Array<any>)
      .catch(this.handleError);
  }
  // 根据标签内容切换相应主题
  getTopicsByTab(tab): Promise<any> {
    return this.http.get(this.topicsUrl+'?tab='+`${tab}`+'&limit=10')
      .toPromise()
      .then(response => response.json().data as Array<any>)
      .catch(this.handleError);
  }
  // 新建话题
  addTopic(topic: any): Promise<any> {
    return this.http.post(this.topicsUrl, JSON.stringify(topic), {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError)
  }
  // 收藏话题
  collectTopic(id): Promise<any> {
    return this.http.post(this.collectUrl, JSON.stringify(id), {headers: this.headers})
      .toPromise()
      .catch(this.handleError)
  }
  // 取消收藏
  // 获取未读消息
  // 获取已读和未读消息
  getmessages(accesstoken): Promise<any> {
    return this.http.get(this.messagesUrl+'/?accesstoken='+accesstoken)
      .toPromise()
      .then(response => response.json().data as Array<any>)
      .catch(this.handleError);
  }
  // 标记全部已读
  // 新建评论
  // 点赞评论

  // 错误处理函数
  private handleError(error: any): Promise<any>{
    console.error("oh my god:", error);
    return Promise.reject(error.message || error);
  }

}
