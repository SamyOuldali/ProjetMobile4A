import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Intro } from "../intro/intro";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
public goto_Intro() {
    this.navCtrl.push(Intro);
  }
}
