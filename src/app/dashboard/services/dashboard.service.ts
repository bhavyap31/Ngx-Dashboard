import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiServerService } from '../../core/api-server/api-server.service';
import { DashboardConstants } from '../dashboard.constants';
import { HealthMeasures, StateDetails } from '../types';

@Injectable()
export class DashboardService {

  private readonly selectedYear = '2015';

  constructor(private readonly httpClient: HttpClient) {
  }

  getUniqueStateList(list: HealthMeasures[]): StateDetails[] {
    const uniqueMap = {};
    return list.filter((item) => {
      if (uniqueMap[item.region_code]) {
        return false;
      }
      uniqueMap[item.region_code] = true;
      return true;
    }).map((item) => {
      return {
        region: item.region,
        region_code: item.region_code
      };
    });
  }

  getHealthMeasures(): Observable<HealthMeasures[]> {
    return this.httpClient.get(ApiServerService.serverUrl + DashboardConstants.API.getHealthMeasures)
      .pipe(
        map((response: HealthMeasures[]) => {
          return response.filter(item => item.period === this.selectedYear);
        }),
        catchError(ErrorRes => {
          return throwError(ErrorRes);
        })
      );
  }
}
