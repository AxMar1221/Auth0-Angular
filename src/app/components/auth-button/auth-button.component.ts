import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
})
export class AuthButtonComponent {

  constructor( public auth: AuthService,
               @Inject(DOCUMENT) public document: Document ) {}
}