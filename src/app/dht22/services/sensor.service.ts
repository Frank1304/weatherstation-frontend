import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Sensor} from '../models/sensor.model';

@Injectable({providedIn: 'root'})
export class SensorService {

  constructor(private http: HttpClient, private sensorMappingService: SensorMappingService) { }

  getAllSensorData(): Promise<Sensor>
}
