import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the SkyTextareaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sky-textarea',
  templateUrl: 'sky-textarea.html'
})
export class SkyTextareaComponent implements OnInit{

  @Input() placeholder: string;
  @Input() label: string;

  isLabel: boolean;

  ngOnInit() {
    this.isLabel = this.label ? true : false;
  }

}
