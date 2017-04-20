import { Component } from '@angular/core';
declare var $: any;

import { NavController, ActionSheetController, AlertController, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../home/modal-content';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   hot_shop = [
    {
       title: "《深泽直人》",
       image: "assets/img/smartisan/shop/shoplist1.jpg"
    }
  ];
  num = 0;

  constructor(public navCtrl: NavController, 
  			  public actionSheetCtrl: ActionSheetController,
  			  public alertCtrl: AlertController,
              public modalCtrl: ModalController) {}
    add(){
       this.num++;
    }
    sub(num){
        if(num>0)
           this.num--;
    }
    openModal() {
        let modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
      }

    showAlert() {
	    let alert = this.alertCtrl.create({
	      title: 'New Friend!',
	      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
	      buttons: ['OK']
	    });
	    alert.present();
	  }
	  public event = {
	    month: '1990-02-19',
	    timeStarts: '07:43',
	    timeEnds: '1990-02-20'
	  }

    
}
