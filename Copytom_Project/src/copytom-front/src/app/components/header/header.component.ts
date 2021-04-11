import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sesionIniciada: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let booleano = sessionStorage.getItem('sesionIniciada');
    if (booleano === "true") {
      this.sesionIniciada = true;
    } else {
      this.sesionIniciada = false;
    }
  }

  cerrarSesion(): void {
    sessionStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/inicio']);
  }
}
