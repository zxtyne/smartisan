import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class AppsPage {
  sign: string = "sign-in";
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  signLoading() {
    let loader = this.loadingCtrl.create({
      content: "正在登录中...",
      duration: 1000
    });
    loader.present();
  }
  regeisterLoading() {
    let loader = this.loadingCtrl.create({
      content: "正在注册中，请稍后...",
      duration: 1000
    });
    loader.present();
  }

}
