import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService}from '../../AdminService/service.service';
import { User } from '../../Modelo/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user :User=new User();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    })

  }
  Actualizar(user:User){
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user=data;
      alert('El usuario '+this.user+' ha sido actualizado con exito');
    })
  }

}