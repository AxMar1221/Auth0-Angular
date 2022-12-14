import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit() {
    console.log('ngOnInit protected');
    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil)
    })
  }

}
