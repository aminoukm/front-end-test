import { TestBed } from '@angular/core/testing';

import { GetFluxService } from './get-flux.service';

describe('GetFluxService', () => {
  let service: GetFluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
