import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

/**
 * Generated class for the ModalNoStorageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-no-storage',
  templateUrl: 'modal-no-storage.html'
})
export class ModalNoStorageComponent {

  constructor(
    private viewCtrl: ViewController
  ) {  }

  disableSecure(){
    this.viewCtrl.dismiss();
  }
}
