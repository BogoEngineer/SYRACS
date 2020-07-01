import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  hide1 = true;
  hide2 = true;

  input1;
  input2;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.input1 = "";
    this.input2 = "";
  }

  change(){
    if(this.input1 != this.input2){
      this.snackBar.open("Passwords are not matching!", 'x', {duration:1500});
      return;
    }
    this.userService.changePassword(this.input1).subscribe(res=>{
      this.snackBar.open("Password has been changed!", 'x', {duration:1500});
      this.router.navigate(['']);
    });
  }

}
