import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getLogin(user: any): Observable<any> {
    const endPoint = 'http://localhost:8080/user/login';
    console.log(user);
    return this.http.post(endPoint, {
      username: user.username,
      pass: user.password,
    });
  }

  doRegisterService(user: any): Observable<any> {
    const endPoint = 'http://localhost:8080/user/register';
    console.log(user);
    return this.http.post(endPoint, {
      username: user.username,
      email: user.email,
      pass: user.password,
      role: "user"
    });
  }
}