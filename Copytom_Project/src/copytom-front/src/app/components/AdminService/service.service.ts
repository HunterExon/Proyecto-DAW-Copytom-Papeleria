import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/user/listar'

  getUsers(){
    return this.http.get<User[]>(this.Url)
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.id,user);
  }
  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/"+user.id);
  }
}
