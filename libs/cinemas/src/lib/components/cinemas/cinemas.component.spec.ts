import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@org/material';
import { CinemasFacade } from '../../+state/cinemas.facade';
import { CinemasComponent } from './cinemas.component';

describe('CinemasComponent', () => {
  let component: CinemasComponent;
  let fixture: ComponentFixture<CinemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [CinemasComponent],
      providers: [CinemasFacade, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(CinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
