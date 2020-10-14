import { Component, Input, OnInit } from '@angular/core';
import { HealthMeasures } from '../types';

@Component({
  selector: 'app-widget-bar-chart',
  templateUrl: './widget-bar-chart.component.html',
  styleUrls: ['./widget-bar-chart.component.scss']
})
export class WidgetBarChartComponent implements OnInit {

  public _healthMeasure: HealthMeasures;

  @Input()
  set healthMeasure(value: HealthMeasures) {
    this._healthMeasure = value;
    this.setWidgetData();
  }

  colorScheme = {
    domain: [
      '#044976',
      '#10ACE2',
      '#FDC451',
      '#18B16F',
      '#FE8023',
    ]
  };
  legendOption = {
    position: 'start'
  };
  public widgetData = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  setWidgetData(): void {
    if (this._healthMeasure) {
      this.widgetData = [
        {
          name: 'At Least One Measure',
          value: this._healthMeasure.atleast_one_measure || 0
        },
        {
          name: 'Immunization Measure',
          value: this._healthMeasure.immunization_measure || 0
        },
        {
          name: 'Reportable Measure',
          value: this._healthMeasure.reportable_lab_results_measure || 0
        },
        {
          name: 'Syndromic Measure',
          value: this._healthMeasure.syndromic_surveillance_measure || 0
        },
        {
          name: 'Registry Measure',
          value: this._healthMeasure.registry_measure || 0
        }
      ];
    }
  }

}
