import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { JsonHttp } from "./json-http";
import { Response } from "@angular/http";

@Injectable()
export class AuthService {

  private authEvents: Subject<AuthEvent>;

  constructor(private http: JsonHttp) {
    this.authEvents = new Subject<AuthEvent>();
  }

  login(email: string, password: string): Observable<Response> {
    const body = {
      email: email,
      password: password,
    };
    console.log(email, password);
    return this.http.post('/api/auth', body).do((resp: Response) => {
      localStorage.setItem('jwt', resp.json().token);
      this.authEvents.next(new DidLogin());
      console.log('login   ' + JSON.stringify(resp));
    });
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.authEvents.next(new DidLogout());
  }

  isSignedIn(): boolean {
    return localStorage.getItem('jwt') !== null;
  }

  get events(): Subject<AuthEvent> {
    return this.authEvents;
  }
}


export class DidLogin {
}
export class DidLogout {
}

export type AuthEvent = DidLogin | DidLogout;
