import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

/**
 * Generated class for the ModalDisclaimerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-disclaimer',
  templateUrl: 'modal-disclaimer.html'
})
export class ModalDisclaimerComponent {

  disclaimerAccepted: boolean;

  constructor(
    private viewCtrl: ViewController,
  ) {}

  acceptDisclaimer(){
    this.viewCtrl.dismiss();
  }

}
