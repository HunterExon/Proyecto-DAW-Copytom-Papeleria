import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getLogin(usuario: any): Observable<any> {
    const endPoint = 'http://localhost:8080/user/login';
    console.log(usuario);
    return this.http.post(endPoint, {
      username: usuario.username,
      pass: usuario.password
    });
  }

  doRegisterService(usuario: any): Observable<any> {
    const endPoint = 'http://localhost:8080/user/register';
    console.log(usuario);
    return this.http.post(endPoint, {
      username: usuario.username,
      email: usuario.email,
      pass: usuario.password
    });
  }
}