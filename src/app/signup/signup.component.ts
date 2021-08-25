import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../User'
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User=new User();
  constructor(
    private router:Router,
    private UserService:UserService
  ) { }

  ngOnInit(): void {
    this.user.role="user"
  }

  signup()
  {
    this.UserService.signUp(this.user).subscribe(data=>{
      console.log(data);
      this.loginUser();
    },error=>console.log(error))

  }

  loginUser()
  {
   this.router.navigate(['login'])
  }

}
