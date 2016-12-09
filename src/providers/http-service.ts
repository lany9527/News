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
  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
  }
  getAllTopics(): Promise<any> {
    return this.http.get(this.topicsUrl)
      .toPromise()
      .then(response => response.json().data as Array<any>)
      .catch(this.handleError);
  }
  getTopicsByTab(tab): Promise<any> {
    return this.http.get(this.topicsUrl+'?tab='+`${tab}`+'&limit=10')
      .toPromise()
      .then(response => response.json().data as Array<any>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("oh my god:", error);
    return Promise.reject(error.message || error);
  }

}
