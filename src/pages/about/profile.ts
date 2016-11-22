import { Component } from '@angular/core';
import {NavParams} from 'ionic-angular';
@Component ({
  selector: 'page-profile',
	templateUrl: 'profile.html'
})

export class ProfilePage{
  user: any;
  constructor(public params: NavParams){
    this.user = params.data.user;
  }

  
}