import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreeningsComponent } from './screenings.component';
import { ScreeningsFacade } from '../../+state/screenings.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

describe('ScreeningsComponent', () => {
  let component: ScreeningsComponent;
  let fixture: ComponentFixture<ScreeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ScreeningsComponent],
      providers: [
        ScreeningsFacade,
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '1';
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
