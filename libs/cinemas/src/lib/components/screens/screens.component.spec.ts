import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@org/material';
import { of } from 'rxjs';
import { CinemasFacade } from '../../+state/cinemas.facade';
import { ScreensComponent } from './screens.component';

describe('ScreensComponent', () => {
  let component: ScreensComponent;
  let fixture: ComponentFixture<ScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [ScreensComponent],
      providers: [
        CinemasFacade,
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              id: '1',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
