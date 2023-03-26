import { TestBed } from '@angular/core/testing';

import { SensorMappingService } from './sensor.mapping.service';

describe('SensorMappingService', () => {
  let service: SensorMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
