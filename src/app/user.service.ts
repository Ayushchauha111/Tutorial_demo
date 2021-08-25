import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  user:User=new User();
  constructor(private httpClient:HttpClient) { }
  private baseUrl= "http://localhost:8080/api/v2"

  signUp(user:User):Observable<Object>
  {
  return this.httpClient.post(`${this.baseUrl}/signup`,user);
  }
  logIn(user:User):Observable<User>
  {
    const data= this.httpClient.post<User>(`${this.baseUrl}/login`,user);
    this.getRole(data);
    return data;
  }
  getRole(data:Observable<User>)
  {

    data.subscribe(val=>{
      console.log(val);
      this.user=val;
    })
    
      
  }


}
