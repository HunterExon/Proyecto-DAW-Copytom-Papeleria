import { HeaderComponent } from './../header/header.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { identifierModuleUrl } from '@angular/compiler';
import * as internal from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string;
  pass: string;
  sesionIncorrecta: boolean;
  userStorageRole: string;
  sesionIniciada: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.sesionIncorrecta = false;

    this.userStorageRole = sessionStorage.getItem('userRole');
    console.log(sessionStorage)
    if (sessionStorage.getItem('sesionIniciada') === "true") {
      this.sesionIniciada = true;
    } else {
      this.sesionIniciada = false;
    }
  }
  cerrarSesion(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/']);
  }

  doLogin(user: string, password: string): void {
    let respuesta: any;

    this.userService
      .getLogin({
        username: user,
        password: password,
      })
      .subscribe(response => {
        console.log(response);
        console.log(user);
        console.log(password);
        respuesta = response;
        sessionStorage.setItem('userRole', response.role);
        localStorage.setItem('userRole', response.role);
        localStorage.setItem('username', user);
        this.userStorageRole = sessionStorage.getItem('userRole');

        if (response.id != null) {
          this.sesionIncorrecta = false;
          sessionStorage.setItem('sesionIniciada', "true");
          if (response.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (response.role ==='user') {
            this.router.navigate(['/profile']);
          }else{
            sessionStorage.setItem('sesionIniciada', "false");
            this.sesionIncorrecta = true;
            this.router.navigate(['/login']);
          }
        } else {
          sessionStorage.setItem('sesionIniciada', "false");
          this.sesionIncorrecta = true;
          this.router.navigate(['/login']);
        }
      });
  }
}
