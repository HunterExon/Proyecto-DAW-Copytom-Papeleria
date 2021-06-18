import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {
    let role: any;
    role=localStorage.getItem('userRole');
    console.log(role)

    if(role!='admin'){
      this.router.navigate(["/profile"]);
    }
  }

  Listar(){
    this.router.navigate(["/admin/listar"]);
  }
  Nuevo(){
    this.router.navigate(["/admin/add"]);
  }
}

