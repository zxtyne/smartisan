import { Component } from '@angular/core';

import { NavController,ViewController, ToastController, ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html',
	selector: 'modal-content',
})

export class ModalContentPage {

  constructor(public viewCtrl: ViewController){}
  slides = [
      '精选',
      'Smartisan M1／M1L',
      'Smartisan T2',
      '耳机／音箱',
      '背壳／保护壳',
      '"情怀"背壳',
      '其他周边',
      '保修服务',
      '全部商品',
  ];
  items = [{
        title:'科技商城',
        icon:'albums-outline'
      },
      {
        title:'Smartisan M1／M1L',
        icon:'phone-portrait'
      },
      {
        title:'锤子 OS',
        icon:'construct-outline'
      },
      {
        title:'应用下载',
        icon:'download-outline'
      },
      {
        title:'科技论坛',
        icon:'cloud-download-outline'
      },
    
  ];

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
