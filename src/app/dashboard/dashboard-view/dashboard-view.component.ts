import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { HealthMeasures, StateDetails } from '../types';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  public dataLoading = true;
  public selectedState: string;
  public selectedHealthMeasure: HealthMeasures;
  public stateList: StateDetails[];
  public healthMeasuresList: HealthMeasures[];

  constructor(private readonly dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.getHealthMeasures();
  }

  getHealthMeasures(): void {
    this.dataLoading = true;
    this.dashboardService.getHealthMeasures()
      .subscribe((response) => {
        this.healthMeasuresList = response;
        this.dataLoading = false;
        this.stateList = this.dashboardService.getUniqueStateList(response);
        if (this.stateList.length) {
          this.selectedState = this.stateList[0].region_code;
          this.onSelectedStateChange();
        }
      }, () => this.dataLoading = false);
  }

  onSelectedStateChange(): void {
    this.selectedHealthMeasure = this.healthMeasuresList.find(item => item.region_code === this.selectedState);
  }
}
