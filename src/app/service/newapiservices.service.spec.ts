import { TestBed } from '@angular/core/testing';
import { NewapiservicesService } from './newapiservices.service';

describe('NewapiservicesService', () => {
  let service: NewapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
