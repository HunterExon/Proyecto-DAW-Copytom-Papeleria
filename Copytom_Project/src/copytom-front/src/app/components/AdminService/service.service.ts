import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Modelo/User';


@Injectable({
  providedIn: 'root'
})



export class ServiceService {

  private headers: HttpHeaders = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json' });
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/user/listar'

  getUsers(){
    return this.http.get<User[]>(this.Url, {headers:this.headers})
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/"+id, {headers:this.headers});
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.id,user, {headers:this.headers});
  }
  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/"+user.id, {headers:this.headers});
  }
}
