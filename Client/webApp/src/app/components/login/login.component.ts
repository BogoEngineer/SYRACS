import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  user: {
    username: string,
    password: string
  }

  ngOnInit(): void {
    this.user = {
      username: "",
      password: ""
    }
  }

  logIn(){
    this.userService.logIn(this.user).subscribe(res=>{
      if((res as any).data.length==0){
        this.snackBar.open("There is no user with given credentials!", null, {
          duration: 1500
        });
      }else if((res as any).data.admin == false){
        this.router.navigate(['user/home'])
        localStorage.setItem('userInfo', JSON.stringify((res as any).data));
      }else{
        this.router.navigate(['admin/home'])
        localStorage.setItem('userInfo', JSON.stringify((res as any).data));
      }
    })
  }

  visit(){
    this.router.navigate(['guest/home'])
    localStorage.setItem('userInfo', JSON.stringify(this.user));
  }
}
