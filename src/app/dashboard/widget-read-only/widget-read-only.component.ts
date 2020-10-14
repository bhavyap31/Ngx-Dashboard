import { Component, Input, OnInit } from '@angular/core';
import { HealthMeasures } from '../types';

@Component({
  selector: 'app-widget-read-only',
  templateUrl: './widget-read-only.component.html',
  styleUrls: ['./widget-read-only.component.scss']
})
export class WidgetReadOnlyComponent implements OnInit {


  public _healthMeasure: HealthMeasures;

  @Input()
  set healthMeasure(value: HealthMeasures) {
    this._healthMeasure = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
