import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavController, Platform } from 'ionic-angular';
import { PincodePage } from '../pincode/pincode';
import { ModalDisclaimerComponent } from "../../components/sky-modal/modal-disclaimer/modal-disclaimer";

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html',
})
export class DisclaimerPage implements OnInit {

  constructor(
    private nav: NavController,
    private platform: Platform,
    private storage: Storage,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.storage.get('disclaimer_accepted').then(data => {
        if (data) {
          this.nav.setRoot(PincodePage);
        } else {
          const modal = this.modalCtrl.create(ModalDisclaimerComponent);
          modal.onDidDismiss(() => {
            this.acceptDisclaimer();
          });
          modal.present();
        }
      })
    });
  }

  acceptDisclaimer() {
    this.storage.set('disclaimer_accepted', true).then(() => {
      this.nav.setRoot(PincodePage);
    })
  }
}
