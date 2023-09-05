import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CinemasService } from './cinemas.service';

describe('CinemasService', () => {
  let service: CinemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CinemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
