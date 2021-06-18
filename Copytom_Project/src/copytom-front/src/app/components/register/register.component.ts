import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  pass: string;
  sesionIncorrecta: boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const button = document.querySelector('.btn');
    const form = document.querySelector('.form');

    button.addEventListener('click', function () {
      form.classList.add('form--no');
    });
    this.sesionIncorrecta = false;
  }

  doRegister(name: string, email: string, pass: string): void {

    console.log(name);
    let respuesta: boolean = false;

    this.userService
      .doRegisterService({
        username: name,
        email: email,
        password: pass
      })
      .subscribe(response => {
        console.log(response);
        respuesta = response;

        if (response != null) {
          this.sesionIncorrecta = false;
          this.router.navigate(['/profile']);
        } else {
          this.sesionIncorrecta = true;
          this.router.navigate(['/register']);
        }
      })
  }
}
