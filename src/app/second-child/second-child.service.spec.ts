/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecondChildService } from './second-child.service';

describe('Service: SecondChild', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondChildService]
    });
  });

  it('should ...', inject([SecondChildService], (service: SecondChildService) => {
    expect(service).toBeTruthy();
  }));
});
