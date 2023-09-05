import { TestBed } from '@angular/core/testing';

import { ScreeningsService } from './screenings.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ScreeningsService', () => {
  let service: ScreeningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ScreeningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
