import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  getRegister(usuario: any): Observable<any> {
    const endPoint = 'http://localhost:8080/user/login';
    console.log(usuario);
    return this.http.post(endPoint, {
      username: usuario.username,
      pass: usuario.password
    });
  }
}
