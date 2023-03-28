import { Component, OnInit} from '@angular/core';
import { SensorData } from '../../models/sensor-data.model';
import { SensorDataService } from '../../service/sensor-data.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'humidity', 'temperature'];
  dataSource = new MatTableDataSource<SensorData>();

  constructor(private sensorDataService: SensorDataService) {} 

  ngOnInit(): void {


    this.sensorDataService.getAllSensorData().then(sensorData => {
      this.dataSource.data = sensorData;
    });
  }
}
