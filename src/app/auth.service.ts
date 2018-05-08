import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login';
  token;


    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
          return this.http.post<any>('http://localhost:3000/login', { email: email, password: password })
              .map(user => {
                  // login successful if there's a jwt token in the response
                  if (user) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('currentUser', JSON.stringify(user));
                  }

                  return user;
              });
      }

    logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
    }
  }

