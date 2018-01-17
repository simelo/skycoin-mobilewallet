import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ModalHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal-header',
  templateUrl: 'modal-header.html'
})
export class ModalHeaderComponent {

  @Input() header: string;
  @Input() disabledClose: boolean = false;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {}

  closeModal(){
    this.close.emit();
  }
}
