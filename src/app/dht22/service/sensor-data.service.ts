import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SensorData } from '../models/sensor-data.model';
import { SensorMappingService } from './sensor-data-mapping.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SensorDataService {

  public readonly basePath = environment.apiUrl;

  constructor(private http: HttpClient, private sensorMappingService: SensorMappingService) { }

  getAllSensorData(): Promise<SensorData[]> {
    return this.http.get<SensorData[]>('http://192.168.0.209:8080/weatherstation-backend/api/v1/dht22')
      .toPromise()
      .then((sensors) => {
        if ((sensors) === undefined) {
          throw new Error('No data returned from server.')
        }
        return sensors.map((sensor) => this.sensorMappingService.fromApi(sensor));
      })
      .catch((error: HttpErrorResponse) => {
        const message = 'Error ${error.status} while reading elements: ${error.message}';
        console.error(message);
        return Promise.reject(message);
      })
  }

  private path(sensor?: SensorData): string {
    return `${this.basePath}/dht22` + (sensor ? `/${sensor.id}` : '');
  }
}