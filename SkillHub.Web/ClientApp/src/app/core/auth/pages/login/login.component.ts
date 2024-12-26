import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SkillHubButtonDirective } from '../../../../shared/button/skill-hub-button.directive';
import { HeaderDirective } from '../../../../shared/header/shill-hub-header.directive';

@Component({
  selector: 'app-login',
  imports: [HeaderDirective, SkillHubButtonDirective, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    });
  }

  public onSignIn(): void {
    if (this.loginForm.valid) {
      sessionStorage.setItem('currentUser', this.loginForm.value.Email);
    }
  }
}
