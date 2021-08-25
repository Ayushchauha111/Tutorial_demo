import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../User'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User= new User();

  constructor(
    private router:Router,
    private UserService:UserService
  ) { }

  ngOnInit(): void {
  }

loginUser()
{
 this.UserService.logIn(this.user).subscribe(data=>{
   console.log(data)
   this.router.navigate(['tutorials'])
 },error=>console.log(error))
}
signupUser()
{
  this.router.navigate(['/signup'])
}

}
