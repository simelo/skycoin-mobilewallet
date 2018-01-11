import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the TxDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tx-details',
  templateUrl: 'tx-details.html'
})
export class TxDetailsComponent {

  transaction: any;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.transaction = this.navParams.get('transaction');
  }

  iconDirection(status: any): string{
    let direction;
    if(status.confirmed){
      direction = 'left';
    } else {
      direction = 'right';
    }
    return direction;
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
