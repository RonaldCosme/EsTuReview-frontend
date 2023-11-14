import { TestBed } from '@angular/core/testing';

import { ScriptChargeService } from './script-charge.service';

describe('ScriptChargeService', () => {
  let service: ScriptChargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptChargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
