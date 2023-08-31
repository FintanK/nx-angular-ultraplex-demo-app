import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'org-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() sideNavToggle = new EventEmitter();

  openSidenav() {
    this.sideNavToggle.emit();
  }
}
