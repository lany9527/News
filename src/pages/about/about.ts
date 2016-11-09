import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {NavigationDetailsPage} from "./navigation-details";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: Array<any> = [];
  constructor(public nav: NavController) {
    this.items = [
      {
        'title': '消息通知',
        'icon': 'text',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': '离线',
        'icon': 'cloud-outline',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': '活动',
        'icon': 'megaphone',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': '商城',
        'icon': 'cart',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': '京东11.11服饰家居3免1',
        'icon': 'pause',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': '我要爆料',
        'icon': 'radio',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': '我要上头条',
        'icon': 'podium',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': '反馈',
        'icon': 'ionitron',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      }
    ];
  }
  openNavDetailsPage(item){
    this.nav.push(NavigationDetailsPage, { item: item});
  }
}
