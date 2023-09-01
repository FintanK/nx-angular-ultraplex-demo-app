import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@org/material';
import { AppComponent } from './app.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, NoopAnimationsModule],
      declarations: [AppComponent, SidenavListComponent, ToolbarComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a.logo')?.textContent).toContain(
      'Ultraplex Cinemas'
    );
  });
});
