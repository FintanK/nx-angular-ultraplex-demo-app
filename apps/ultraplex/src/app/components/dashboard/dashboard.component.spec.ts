import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CinemasFacade } from '@org/cinemas';
import { MaterialModule } from '@org/material';
import { DashboardComponent } from './dashboard.component';

import { provideMockStore } from '@ngrx/store/testing';
import { BookingsFacade } from '@org/bookings';
import { MoviesFacade } from '@org/movies';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NoopAnimationsModule,
        MaterialModule
      ],
      providers: [
        BookingsFacade,
        CinemasFacade,
        MoviesFacade,
        provideMockStore({})
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
