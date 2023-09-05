import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ScreeningsService } from './screenings.service';

describe('ScreeningsService', () => {
  let service: ScreeningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });
    service = TestBed.inject(ScreeningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
