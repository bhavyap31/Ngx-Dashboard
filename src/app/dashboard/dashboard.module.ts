import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardService } from './services/dashboard.service';
import { WidgetReadOnlyComponent } from './widget-read-only/widget-read-only.component';
import { WidgetBarChartComponent } from './widget-bar-chart/widget-bar-chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DashboardViewComponent, WidgetReadOnlyComponent, WidgetBarChartComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
  ],
  providers: [DashboardService]
})

export class DashboardModule {
}
