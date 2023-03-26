import { Injectable } from '@angular/core';
import { SensorData } from '../models/sensor-data.model';

@Injectable({
  providedIn: 'root'
})
export class SensorMappingService {

  constructor() { }

  fromApi(sensor: any) : SensorData {
    const result = Object.assign({}, sensor);
    return result;
  }
}
