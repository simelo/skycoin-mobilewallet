import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the SkyInputComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sky-input',
  templateUrl: 'sky-input.html'
})
export class SkyInputComponent implements OnInit{

  @Input() placeholder: string;
  @Input() type: string;
  @Input() label: string;

  isLabel: boolean;

  ngOnInit() {
    this.placeholder = this.placeholder || '';
    this.type = this.type || 'text';
    this.isLabel = this.label ? true : false;
  }

}
