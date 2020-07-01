import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = '5000';

  constructor(
    private http: HttpClient
  ) { }

  register(user:any){
    const url = `http://localhost:${this.host}/users/register`;
    return this.http.put<any>(url, user);
  }

  logIn(user:any){
    const url = `http://localhost:${this.host}/users/logIn`;
    return this.http.post<any>(url, user);
  }

  changePassword(new_password){
    let user = JSON.parse(localStorage.getItem('userInfo'))[0];
    const url = `http://localhost:${this.host}/users/changePassword`;
    return this.http.post<any>(url, {password: new_password, id: user._id});
  }

  getViruses(){
    const url = `http://localhost:${this.host}/users/getViruses`;
    return this.http.get<any>(url);
  }

  getUsers(){
    const url = `http://localhost:${this.host}/users/getUsers`;
    return this.http.get<any>(url);
  }

  addVirus(virus){
    const url = `http://localhost:${this.host}/admin/addVirus`;
    return this.http.post<any>(url, virus);
  }

  addUser(user){
    console.log(user);
    const url = `http://localhost:${this.host}/admin/addUser`;
    return this.http.post<any>(url, user);
  }
}
