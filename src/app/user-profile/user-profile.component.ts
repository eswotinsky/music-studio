import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
