/**
 * Created by littlestone on 2016/11/9.
 */
import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
@Component({
  selector: 'nav-detail',
  templateUrl: 'nav-detail.html'
})
export class NavDetailsPage {
  item: any;

  constructor(public params: NavParams) {
    this.item = params.data.item;
  }
}