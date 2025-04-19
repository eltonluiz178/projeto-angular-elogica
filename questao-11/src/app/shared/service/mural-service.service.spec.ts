import { TestBed } from '@angular/core/testing';

import { MuralServiceService } from './mural.service';

describe('MuralServiceService', () => {
  let service: MuralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
