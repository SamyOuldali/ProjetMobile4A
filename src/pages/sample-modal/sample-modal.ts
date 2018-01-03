import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the SampleModal page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModal {
  modalCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModal');
  }

}
