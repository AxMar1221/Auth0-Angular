import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit{

  constructor( public auht: AuthService ) { }

  ngOnInit() {
    this.auht.handleAuthCallback();
  }

}
