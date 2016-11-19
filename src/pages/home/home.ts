import { Component } from '@angular/core';

import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = 'puppies';
  isAndroid: boolean = false;
  isActive: boolean = false;
  newsCategory: string[] = ['推荐', '热点', '国际', '数码', '北京','科技', '图片', '社会'];
  i: any;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
    // this.newsCategory = newsCategory;
  }
  active(){
    for(this.i of this.newsCategory){
      console.log(this.i)
    }
  }

  ngOnInit(){
    this.active();
  }

}
