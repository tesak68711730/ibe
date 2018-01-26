import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../core/service/auth.service";
import {Subject} from "rxjs/Subject";
import {debounceTime} from "rxjs/operator/debounceTime";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styles: ['.div { margin: 25px auto;}']
})
export class LoginComponent implements OnInit {
    private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
      setTimeout(() => this.staticAlertClosed = true, 20000);

      this._success.subscribe((message) => this.successMessage = message);
      debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = '');
  }

    public changeSuccessMessage() {
        this._success.next(`Login or password it's wrong`);
    }

  login(email, password) {
    this.authService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      }, e => this.changeSuccessMessage());
  }

}
