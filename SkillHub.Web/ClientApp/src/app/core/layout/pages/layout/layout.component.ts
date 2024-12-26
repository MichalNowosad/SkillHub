import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-layout',
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  public isUserSignedIn = false;

  public ngOnInit(): void {
    this.isUserSignedIn = !!sessionStorage.getItem('currentUser');
  }
}
