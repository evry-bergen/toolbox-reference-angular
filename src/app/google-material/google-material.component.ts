/**
 * created by lenewhiteley on 12/02/2018.
 */

import { Component } from 'vendor/angular';
import { MatDatepickerInputEvent } from 'vendor/material';

@Component({
  selector: 'boilerplate-google-material',
  templateUrl: './google-material.component.html',
  styleUrls: ['./google-material.component.scss'],

})
export class GoogleMaterialComponent {
  events: string[] = [];
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(-5);
    this.maxDate.setDate(30);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}


