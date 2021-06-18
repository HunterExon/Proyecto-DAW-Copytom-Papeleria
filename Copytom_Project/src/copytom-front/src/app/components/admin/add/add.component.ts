import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
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

  Guardar(name: string, email: string, pass: string): void {

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
          alert('El usuario '+this.name+' ha sido creado con exito');
        } else {
          this.sesionIncorrecta = true;
        }
      })
  }
}
