import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../core/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styles: ['.div { margin: 25px auto;}']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  login(email, password) {
    this.authService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      }, e => this.handleError(e));
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        alert("401");
    }
  }

}
