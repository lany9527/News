import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiService} from './api-service';
/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
  , public apiService: ApiService
*/
@Injectable()
export class TopicsService {
  data: any;
  constructor(public http: Http, public apiService: ApiService) {
    // console.log('Hello PeopleService Provider');
    
  }
  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.apiService.ionApi.getTopics
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.data;
        console.log(data);
        resolve(this.data);
      })
    })
  }
}
